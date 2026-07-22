let server = "tencent";
let type = "playlist";
let id = "9751086143";
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

async function requestSong(keyword) {
    if (!keyword) return;

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

    try {
        if (requestBtn) {
            requestBtn.disabled = true;
            requestBtn.textContent = "搜索中...";
        }

        const params = new URLSearchParams({
            key: kugouApiKey,
            msg: keyword,
            n: "1",              // 默认播放搜索结果第一首
            quality: "128"       // 兼容性最好
        });

        const response = await fetch(
            `${kugouApiBase}?${params.toString()}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();

        if (
            result.code !== 200 ||
            !result.data ||
            !result.data.play_url
        ) {
            throw new Error(result.msg || "没有获取到播放地址");
        }

        const song = result.data;

        // 接口部分封面可能返回 HTTP，HTTPS 网站必须转成 HTTPS
        const cover = String(song.cover || "")
            .replace(/^http:\/\//i, "https://");

        const playableSong = {
            name: song.name || keyword,
            artist: song.singer || "未知歌手",
            url: song.play_url,
            cover: cover,
            lrc: ""
        };

        ap.list.clear();
        ap.list.add([playableSong]);

        try {
            await Promise.resolve(ap.play());

            iziToast.success({
                timeout: 2500,
                icon: "fa-solid fa-circle-play",
                displayMode: "replace",
                message: `正在播放：${playableSong.name} - ${playableSong.artist}`
            });
        } catch (playError) {
            console.error("歌曲播放失败：", playError);

            iziToast.error({
                timeout: 4000,
                icon: "fa-solid fa-circle-exclamation",
                displayMode: "replace",
                message: "播放地址失效，请重新搜索或更换歌曲"
            });
        }
    } catch (error) {
        console.error("点歌失败：", error);

        iziToast.error({
            timeout: 4000,
            icon: "fa-solid fa-circle-exclamation",
            displayMode: "replace",
            message: `点歌失败：${error.message}`
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
