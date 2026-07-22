let server = "netease"; //netease: 网易云音乐; tencent: QQ音乐; kugou: 酷狗音乐; xiami: 虾米; kuwo: 酷我
let type = "playlist"; //song: 单曲; playlist: 歌单; album: 唱片
let id = "3778678"; //封面 ID / 单曲 ID / 歌单 ID
let ap = null;
const metingApiBase = "https://met.api.xiaoguan.fit/";

async function fetchMeting(params) {
    const url = new URL(metingApiBase);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    const responseText = await response.text();

    if (!response.ok) {
        throw new Error(
            `接口请求失败：HTTP ${response.status}`
        );
    }

    try {
        return JSON.parse(
            responseText.replace(/^\uFEFF/, "")
        );
    } catch (error) {
        console.error("接口原始响应：", responseText);

        throw new Error(
            "接口没有返回有效 JSON：" +
            responseText.replace(/\s+/g, " ").slice(0, 100)
        );
    }
}

async function requestSong(keyword) {
    keyword = String(keyword || "").trim();

    if (!keyword) {
        iziToast.warning({
            timeout: 2500,
            displayMode: "replace",
            message: "请输入歌曲名"
        });
        return;
    }

    if (!ap) {
        iziToast.info({
            timeout: 2500,
            icon: "fa-solid fa-music",
            displayMode: "replace",
            message: "播放器还在加载，请稍后再试"
        });
        return;
    }

    const requestBtn = document.getElementById("requestBtn");

    if (requestBtn) {
        requestBtn.disabled = true;
        requestBtn.textContent = "搜索中…";
    }

    try {
        // 新接口搜索关键词通过 id 参数传递
        const searchResult = await fetchMeting({
            server: server,
            type: "search",
            id: keyword
        });

        const songs = Array.isArray(searchResult)
            ? searchResult
            : (
                Array.isArray(searchResult?.data)
                    ? searchResult.data
                    : []
            );

        if (songs.length === 0) {
            iziToast.warning({
                timeout: 3000,
                displayMode: "replace",
                message: "没有找到相关歌曲"
            });
            return;
        }

        // 当前逻辑默认播放搜索结果第一首
        let playableSong = songs[0];

        /*
         * 如果搜索结果不含播放地址，则通过歌曲 ID
         * 再请求一次 type=song。
         */
        if (!playableSong.url && playableSong.id) {
            const detailResult = await fetchMeting({
                server: server,
                type: "song",
                id: playableSong.id
            });

            const details = Array.isArray(detailResult)
                ? detailResult
                : (
                    Array.isArray(detailResult?.data)
                        ? detailResult.data
                        : []
                );

            if (details.length > 0) {
                playableSong = {
                    ...playableSong,
                    ...details[0]
                };
            }
        }

        const artist = Array.isArray(playableSong.artist)
            ? playableSong.artist.join("/")
            : (
                playableSong.artist ||
                playableSong.author ||
                "未知歌手"
            );

        const songUrl =
            playableSong.url ||
            playableSong.play_url ||
            playableSong.playUrl ||
            "";

        if (!songUrl) {
            console.error("歌曲数据：", playableSong);

            iziToast.error({
                timeout: 3500,
                displayMode: "replace",
                message: "该歌曲暂无可播放链接"
            });
            return;
        }

        ap.list.clear();

        ap.list.add([{
            id: playableSong.id || "",
            name:
                playableSong.name ||
                playableSong.title ||
                keyword,
            artist: artist,
            url: songUrl,
            cover:
                playableSong.pic ||
                playableSong.cover ||
                "",
            lrc:
                playableSong.lrc ||
                playableSong.lyric ||
                ""
        }]);

        ap.play();

    } catch (error) {
        console.error("点歌失败：", error);

        iziToast.error({
            timeout: 5000,
            icon: "fa-solid fa-circle-exclamation",
            displayMode: "replace",
            message: error.message || "点歌失败"
        });
    } finally {
        if (requestBtn) {
            requestBtn.disabled = false;
            requestBtn.textContent = "点歌";
        }
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
