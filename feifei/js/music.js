let server = "netease"; //netease: 网易云音乐; tencent: QQ音乐; kugou: 酷狗音乐; xiami: 虾米; kuwo: 酷我
let type = "playlist"; //song: 单曲; playlist: 歌单; album: 唱片
let id = "3778678"; //封面 ID / 单曲 ID / 歌单 ID
let ap = null;
const metingApiBase = "https://kennyz.cn:11444/meting/";
const kugouConfig = {
    api: "https://api.yaohud.cn/api/music/kg",
    key: "JM52NQNG1Kpv4vNPIZU"",
    quality: "flac",
    resultCount: 12
};

let songSearchController = null;

/**
 * 点歌：
 * requestSong(keyword)    搜索并展示列表
 * requestSong(keyword, n) 获取第 n 首详情并播放
 */
async function requestSong(keyword, n = null) {
    keyword = String(keyword || "").trim();

    if (!keyword) {
        showMusicMessage("请输入歌曲名", "warning");
        return;
    }

    if (!ap) {
        showMusicMessage("播放器还在加载，请稍后再试");
        return;
    }

    if (
        !kugouConfig.key ||
        kugouConfig.key === "在这里填写你的密钥"
    ) {
        showMusicMessage("请先配置酷狗音乐接口密钥", "error");
        return;
    }

    // 新搜索开始时，取消上一次尚未完成的请求
    if (songSearchController) {
        songSearchController.abort();
    }

    songSearchController = new AbortController();

    const params = new URLSearchParams({
        key: kugouConfig.key,
        msg: keyword,
        quality: kugouConfig.quality
    });

    if (n === null) {
        params.set("g", String(kugouConfig.resultCount));
    } else {
        params.set("n", String(n));
    }

    setRequestLoading(true);

    try {
        const response = await fetch(
            `${kugouConfig.api}?${params.toString()}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json"
                },
                signal: songSearchController.signal
            }
        );

        if (!response.ok) {
            throw new Error(`接口请求失败：HTTP ${response.status}`);
        }

        const result = await response.json();

        if (Number(result.code) !== 200) {
            throw new Error(result.msg || "接口返回错误");
        }

        // 没传 n，表示搜索歌曲列表
        if (n === null) {
            const songs = Array.isArray(result.data?.songs)
                ? result.data.songs
                : [];

            renderSongResults(keyword, songs);
            return;
        }

        // 传入 n，表示获取歌曲详情并播放
        const song = normalizeKugouSong(result.data);

        if (!song.url) {
            throw new Error("接口没有返回歌曲播放链接");
        }

        ap.list.clear();
        ap.list.add([song]);

        // 部分浏览器返回 Promise，防止自动播放异常未捕获
        const playResult = ap.play();

        if (playResult && typeof playResult.catch === "function") {
            playResult.catch(error => {
                console.warn("浏览器阻止了播放：", error);
                showMusicMessage("请再次点击播放按钮开始播放");
            });
        }

        hideSongResults();
        showMusicMessage(`正在播放：${song.name} - ${song.artist}`);

    } catch (error) {
        if (error.name === "AbortError") return;

        console.error("点歌失败：", error);
        showMusicMessage(error.message || "点歌失败", "error");
    } finally {
        setRequestLoading(false);
    }
}

/**
 * 兼容接口详情中常见的字段命名。
 * 如果接口实际字段略有变化，也不会把 undefined 显示给用户。
 */
function normalizeKugouSong(data) {
    const detail =
        data?.song ||
        data?.info ||
        data?.data ||
        data ||
        {};

    return {
        name:
            detail.name ||
            detail.songname ||
            detail.song_name ||
            detail.title ||
            "未知歌曲",

        artist:
            detail.singer ||
            detail.artist ||
            detail.author ||
            detail.singername ||
            "未知歌手",

        url:
            detail.url ||
            detail.play_url ||
            detail.playUrl ||
            detail.music_url ||
            detail.audio ||
            "",

        cover:
            detail.cover ||
            detail.pic ||
            detail.image ||
            detail.img ||
            detail.album_img ||
            "",

        lrc:
            detail.lrc ||
            detail.lyric ||
            detail.lyrics ||
            ""
    };
}

function renderSongResults(keyword, songs) {
    const container = getSongResultContainer();
    container.replaceChildren();

    if (songs.length === 0) {
        const empty = document.createElement("div");
        empty.className = "song-result-empty";
        empty.textContent = "没有找到相关歌曲";
        container.appendChild(empty);
        container.hidden = false;
        return;
    }

    const fragment = document.createDocumentFragment();

    songs.forEach((song, index) => {
        const songIndex = Number(song.n) || index + 1;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "song-result-item";

        const info = document.createElement("span");
        info.className = "song-result-info";

        const title = document.createElement("strong");
        title.textContent = song.name || "未知歌曲";

        const description = document.createElement("small");
        description.textContent = [
            song.singer || "未知歌手",
            song.album || "未知专辑"
        ].join(" · ");

        info.append(title, description);

        const quality = document.createElement("span");
        quality.className = "song-result-quality";

        const qualities = Array.isArray(song.qualities)
            ? song.qualities
            : [];

        quality.textContent = qualities.includes(kugouConfig.quality)
            ? kugouConfig.quality.toUpperCase()
            : (qualities.at(-1)?.toUpperCase() || "");

        button.append(info, quality);

        button.addEventListener("click", async () => {
            if (button.disabled) return;

            document
                .querySelectorAll(".song-result-item")
                .forEach(item => {
                    item.disabled = true;
                });

            button.classList.add("is-loading");

            try {
                await requestSong(keyword, songIndex);
            } finally {
                document
                    .querySelectorAll(".song-result-item")
                    .forEach(item => {
                        item.disabled = false;
                    });

                button.classList.remove("is-loading");
            }
        });

        fragment.appendChild(button);
    });

    container.appendChild(fragment);
    container.hidden = false;
}

function getSongResultContainer() {
    let container = document.getElementById("songSearchResults");

    if (!container) {
        container = document.createElement("div");
        container.id = "songSearchResults";
        container.className = "song-search-results";
        container.hidden = true;

        const songInput = document.getElementById("songInput");
        const requestBtn = document.getElementById("requestBtn");
        const anchor = requestBtn || songInput;

        if (anchor?.parentElement) {
            anchor.parentElement.insertAdjacentElement(
                "afterend",
                container
            );
        } else {
            document.body.appendChild(container);
        }
    }

    return container;
}

function hideSongResults() {
    const container = document.getElementById("songSearchResults");

    if (container) {
        container.hidden = true;
    }
}

function setRequestLoading(loading) {
    const requestBtn = document.getElementById("requestBtn");

    if (!requestBtn) return;

    requestBtn.disabled = loading;
    requestBtn.classList.toggle("is-loading", loading);
    requestBtn.textContent = loading ? "搜索中…" : "点歌";
}

function showMusicMessage(message, type = "info") {
    if (window.iziToast && typeof iziToast[type] === "function") {
        iziToast[type]({
            timeout: 3000,
            displayMode: "replace",
            message
        });
    } else {
        console.log(message);
    }
}
$.ajax({
    url: metingApiBase + "?server=" + server + "&type=" + type + "&id=" + id,
    type: "GET",
    dataType: "JSON",
    success: function (data) {
        ap = new APlayer({
            container: document.getElementById('aplayer'),
            order: 'list',
            preload: 'auto',
            listMaxHeight: '336px',
            volume: '0.5',
            mutex: true,
            lrcType: 3,
            audio: data,
        });
        // 将播放器实例暴露到全局，方便页面其它代码（如全局点击监听）调用
        window.ap = ap;

        const requestBtn = document.getElementById("requestBtn");
        const songInput = document.getElementById("songInput");
        if (requestBtn && songInput) {
            requestBtn.addEventListener("click", () => {
                const keyword = songInput.value.trim();
                requestSong(keyword);
            });

            songInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    const keyword = songInput.value.trim();
                    requestSong(keyword);
                }
            });
        }

        /* 底栏歌词 */
        setInterval(function () {
            var lrcText = $(".aplayer-lrc-current").text();
            if (lrcText.trim() === "") {
                lrcText = $(".aplayer-title").text() + " - " + $(".aplayer-author").text();
            }
            $("#lrc").html("<span class='lrc-show'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18'><path fill='none' d='M0 0h24v24H0z'/><path d='M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z' fill='rgba(255,255,255,1)'/></svg>&nbsp;" + lrcText + "&nbsp;<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18'><path fill='none' d='M0 0h24v24H0z'/><path d='M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z' fill='rgba(255,255,255,1)'/></svg></span>");
        }, 500);

        /* 音乐通知及控制 */
        ap.on('play', function () {
            const music =
        $(".aplayer-title").text() +
        $(".aplayer-author").text();
            iziToast.info({
                timeout: 4000,
                icon: "fa-solid fa-circle-play",
                displayMode: 'replace',
                message: music
            });
            $("#play").html("<i class='fa-solid fa-pause'>");
            $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
            $('#power').css("cssText", "display:none");
            $('#lrc').css("cssText", "display:block !important");
        });

        ap.on('pause', function () {
            $("#play").html("<i class='fa-solid fa-play'>");
            $('#lrc').css("cssText", "display:none !important");
            $('#power').css("cssText", "display:block");
        });

        $("#music").hover(function () {
            $('.music-text').css("display", "none");
            $('.music-volume').css("display", "flex");
        }, function () {
            $('.music-text').css("display", "block");
            $('.music-volume').css("display", "none");
        })

        /* 一言与音乐切换 */
        $('#open-music').on('click', function () {
            $('#hitokoto').css("display", "none");
            $('#music').css("display", "flex");
        });

        $("#hitokoto").hover(function () {
            $('#open-music').css("display", "flex");
        }, function () {
            $('#open-music').css("display", "none");
        })

        $('#music-close').on('click', function () {
            $('#music').css("display", "none");
            $('#hitokoto').css("display", "flex");
        });

        /* 上下曲 */
        $('#play').on('click', function () {
            ap.toggle();
            $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
        });

        $('#last').on('click', function () {
            ap.skipBack();
            ap.play();
            $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
        });

        $('#next').on('click', function () {
            ap.skipForward();
            ap.play();
            $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
        });

        window.onkeydown = function (e) {
            if (e.keyCode == 32) {
                ap.toggle();
            }
        }

        /* 打开音乐列表 */
        $('#music-open').on('click', function () {
            if ($(document).width() >= 990) {
                $('#box').css("display", "block");
                $('#row').css("display", "none");
                $('#more').css("cssText", "display:none !important");
            }
        });

        //音量调节
        $("#volume").on('input propertychange touchend', function () {
            let x = $("#volume").val();
            ap.volume(x, true);
            if (x == 0) {
                $("#volume-ico").html("<i class='fa-solid fa-volume-xmark'></i>");
            } else if (x > 0 && x <= 0.3) {
                $("#volume-ico").html("<i class='fa-solid fa-volume-off'></i>");
            } else if (x > 0.3 && x <= 0.6) {
                $("#volume-ico").html("<i class='fa-solid fa-volume-low'></i>");
            } else {
                $("#volume-ico").html("<i class='fa-solid fa-volume-high'></i>");
            }
        });

        /* 交互自动播放逻辑已移除按钮；保留全局点击监听（见文件底部） */
    },
    error: function () {
        setTimeout(function () {
            iziToast.info({
                timeout: 8000,
                icon: "fa-solid fa-circle-exclamation",
                displayMode: 'replace',
                message: '音乐播放器加载失败'
            });
        }, 3800);
    }
})
// ====== 自动播放修复：必须在用户点击后才能play() ======
let firstPlay = false;

function enableMusicAutoPlay() {
    if (!firstPlay && ap) {
        ap.play();   // 触发 APlayer 播放
        firstPlay = true;

        // 播放成功后就不再监听
        document.removeEventListener("click", enableMusicAutoPlay);
    }
}

// 等待用户第一次点击页面任意地方
document.addEventListener("click", enableMusicAutoPlay);
