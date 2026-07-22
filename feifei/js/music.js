let server = "netease";
let type = "playlist";
let id = "3778678";
let ap = null;

// QQ音乐不支持搜索，点歌改用网易云
const searchServer = "netease";
const metingApiBase = "https://meting.mikus.ink/api";
function normalizeSong(song, fallbackName = "未知歌曲") {
    return {
        name: song.name || song.title || fallbackName,
        artist: song.artist || song.author || "未知歌手",
        url: song.url || "",
        cover: song.cover || song.pic || "",
        lrc: song.lrc || "",
        id: song.id || song.songmid || ""
    };
}

function normalizeSongs(data) {
    if (!Array.isArray(data)) return [];

    return data
        .map(song => normalizeSong(song))
        .filter(song => song.url);
}
const kugouApiBase = "https://api.yaohud.cn/api/music/kg";
const kugouApiKey = "JM52NQNG1Kpv4vNPIZU";

const kugouApiBase = "https://api.yaohud.cn/api/music/kg";
const kugouApiKey = "JM52NQNG1Kpv4vNPIZU"";

let currentSearchKeyword = "";
let playingSearchButton = null;

/**
 * 搜索歌曲并显示结果
 */
async function requestSong(keyword) {
    keyword = String(keyword || "").trim();

    if (!keyword) {
        iziToast.warning({
            timeout: 2500,
            icon: "fa-solid fa-circle-exclamation",
            displayMode: "replace",
            message: "请输入歌曲名或歌手"
        });
        return;
    }

    const requestBtn = document.getElementById("requestBtn");
    const statusElement = document.getElementById("songSearchStatus");
    const resultsElement = document.getElementById("songSearchResults");

    currentSearchKeyword = keyword;

    try {
        requestBtn.disabled = true;
        requestBtn.textContent = "搜索中";
        statusElement.textContent = "正在搜索歌曲……";
        resultsElement.innerHTML = "";

        const params = new URLSearchParams({
            key: kugouApiKey,
            msg: keyword,
            g: "12"
        });

        const response = await fetch(
            `${kugouApiBase}?${params.toString()}`
        );

        if (!response.ok) {
            throw new Error(`搜索请求失败：HTTP ${response.status}`);
        }

        const result = await response.json();

        if (
            result.code !== 200 ||
            !result.data ||
            !Array.isArray(result.data.songs)
        ) {
            throw new Error(result.msg || "搜索接口返回异常");
        }

        const songs = result.data.songs;

        if (songs.length === 0) {
            statusElement.textContent = "没有找到相关歌曲";
            return;
        }

        statusElement.textContent = `找到 ${songs.length} 首歌曲，点击即可播放`;

        songs.forEach(function (song) {
            const item = document.createElement("button");
            item.type = "button";
            item.className = "song-search-item";

            const number = document.createElement("span");
            number.className = "song-result-number";
            number.textContent = song.n;

            const info = document.createElement("span");
            info.className = "song-result-info";

            const name = document.createElement("div");
            name.className = "song-result-name";
            name.textContent = song.name || "未知歌曲";

            const meta = document.createElement("div");
            meta.className = "song-result-meta";
            meta.textContent =
                `${song.singer || "未知歌手"} · ${song.album || "未知专辑"}`;

            const action = document.createElement("span");
            action.className = "song-result-action";
            action.innerHTML = '<i class="fa-solid fa-play"></i>';

            info.appendChild(name);
            info.appendChild(meta);

            item.appendChild(number);
            item.appendChild(info);
            item.appendChild(action);

            item.addEventListener("click", function () {
                playKugouSong(keyword, song.n, item);
            });

            resultsElement.appendChild(item);
        });
    } catch (error) {
        console.error("歌曲搜索失败：", error);
        statusElement.textContent = "搜索失败，请稍后重试";

        iziToast.error({
            timeout: 4000,
            icon: "fa-solid fa-circle-exclamation",
            displayMode: "replace",
            message: error.message || "搜索失败"
        });
    } finally {
        requestBtn.disabled = false;
        requestBtn.textContent = "搜索";
    }
}

/**
 * 获取选中歌曲的播放地址并播放
 */
async function playKugouSong(keyword, index, buttonElement) {
    if (!ap) {
        iziToast.warning({
            timeout: 3000,
            icon: "fa-solid fa-circle-exclamation",
            displayMode: "replace",
            message: "播放器尚未初始化"
        });
        return;
    }

    const statusElement = document.getElementById("songSearchStatus");
    const actionElement = buttonElement.querySelector(".song-result-action");

    try {
        buttonElement.disabled = true;
        actionElement.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i>';

        statusElement.textContent = "正在获取播放地址……";

        const params = new URLSearchParams({
            key: kugouApiKey,
            msg: keyword,
            n: String(index),

            // 使用128 MP3，避免FLAC和VIP音质兼容问题
            quality: "128"
        });

        const response = await fetch(
            `${kugouApiBase}?${params.toString()}`
        );

        if (!response.ok) {
            throw new Error(`播放请求失败：HTTP ${response.status}`);
        }

        const result = await response.json();
        const song = result.data;

        if (
            result.code !== 200 ||
            !song ||
            !song.play_url
        ) {
            throw new Error(result.msg || "没有获取到播放地址");
        }

        let playUrl = String(song.play_url).trim();

        /*
         * HTTPS网页不能播放HTTP音频。
         * 128音质通常会返回HTTPS MP3地址。
         */
      if (!playUrl.startsWith("https://")) {
    throw new Error("接口返回HTTP音频，请换一首歌曲");
}

if (/\.flac(?:\?|$)/i.test(playUrl)) {
    throw new Error("接口返回FLAC，请检查quality是否为128");
}

        if (!playUrl.startsWith("https://")) {
            throw new Error("接口返回了不安全的音频地址");
        }

        let cover = String(song.cover || "").trim();

        if (cover.startsWith("http://")) {
            cover = cover.replace(/^http:\/\//i, "https://");
        }

        const playableSong = {
            name: song.name || keyword,
            artist: song.singer || "未知歌手",
            url: playUrl,
            cover: cover,
            lrc: ""
        };

        ap.list.clear();
        ap.list.add([playableSong]);

        if (playingSearchButton) {
            playingSearchButton.classList.remove("playing");

            const oldAction =
                playingSearchButton.querySelector(".song-result-action");

            if (oldAction) {
                oldAction.innerHTML =
                    '<i class="fa-solid fa-play"></i>';
            }
        }

        playingSearchButton = buttonElement;
        buttonElement.classList.add("playing");

        await Promise.resolve(ap.play());

        actionElement.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

        statusElement.textContent =
            `正在播放：${playableSong.name} - ${playableSong.artist}`;
    } catch (error) {
        console.error("播放歌曲失败：", error);

        buttonElement.classList.remove("playing");
        actionElement.innerHTML =
            '<i class="fa-solid fa-play"></i>';

        statusElement.textContent = "播放失败，请尝试其他歌曲";

        iziToast.error({
            timeout: 4500,
            icon: "fa-solid fa-circle-exclamation",
            displayMode: "replace",
            message: error.message || "歌曲播放失败"
        });
    } finally {
        buttonElement.disabled = false;
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
            audio: normalizeSongs(data),
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
            music = $(".aplayer-title").text() + $(".aplayer-author").text();
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

async function enableMusicAutoPlay() {
    if (firstPlay || !ap) return;

    try {
        await ap.play();
        firstPlay = true;
        document.removeEventListener("click", enableMusicAutoPlay);
    } catch (error) {
        console.error("首次播放失败：", error);
    }
}

document.addEventListener("click", enableMusicAutoPlay);
