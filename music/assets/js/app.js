(function(){
    const translations = {
      zh: {
        appTitle:"Nie Music · Cover Fusion",
        authorLabel:"封面色彩驱动的沉浸式播放器",
        shortcutHint:"Space 播放/暂停 · ←/→ 跳转 · N/P 切歌 · F 收藏",
        shortcutPanelTitle:"快捷键说明",
        shortcutPanelDesc:"使用键盘可以更加方便地控制nie的音乐站：",
        shortcutPlayPause:"播放 / 暂停",
        shortcutSeek:"快退 / 快进 5 秒",
        shortcutVolume:"音量加 / 减",
        shortcutPrevNext:"上一首 / 下一首",
        shortcutFav:"收藏 / 取消收藏当前歌曲",
        shortcutLyricsFX:"切换歌词炫酷效果",
        shortcutMute:"静音 / 取消静音",
        shortcutFocusSearch:"聚焦搜索框",
        shortcutCloseModal:"提示：按 Esc 可以关闭弹窗。",
        mobileNavSearch:"发现",
        mobileNavPlayer:"播放",
        mobileNavPlaylist:"音乐库",
        searchTitle:"发现音乐",
        searchSubtitle:"网易云 / QQ / 酷我 / JOOX",
        searchButton:"搜索",
        perSourceCount:"每个源加载",
        perSourceCountTail:"首结果",
        loadMore:"加载更多",
        searchStatusIdle:"输入关键词，开始一段新的聆听。",
        searchStatusSearching:"正在搜索中…",
        searchStatusDone:"搜索完成。",
        searchStatusNoSource:"请至少选择一个音乐源。",
        playerTitle:"正在播放",
        playerSubtitle:"封面色彩驱动 · 同步歌词",
        coverHint:"选择一首歌，让色彩开始流动。",
        lyricsEmpty:"歌词会在这里与音乐同步呼吸。",
        lyricsFullscreen:"完整歌词",
        lyricsExitFullscreen:"退出完整歌词",
        lyricsScriptSimplified:"简体歌词",
        lyricsScriptTraditional:"繁体歌词",
        lyricsAssist:"显示翻译 / 无调拼音",
        lyricsAssistOff:"关闭翻译 / 无调拼音",
        lyricSeekHint:"点击跳转到这一句",
        toastLyricSeek:"已跳转到所选歌词",
        translationLoading:"翻译中…",
        translationUnavailable:"翻译暂不可用",
        pinyinUnavailable:"拼音组件暂不可用",
        playlistTitle:"音乐库",
        queueTitle:"播放列表",
        queueUpNext:"接下来播放",
        queueEmpty:"当前没有待播放歌曲，可点击歌曲右侧的 +1 添加。",
        queueClear:"清空待播",
        queuePlay:"立即播放",
        queueRemove:"从待播列表移除",
        queueFromCurrent:"当前列表",
        libraryExpand:"展开音乐库",
        libraryCollapse:"折叠音乐库",
        aiReviewTitle:"AI 乐评",
        aiReviewNoTrack:"暂未选择歌曲",
        aiReviewChooseTrack:"播放歌曲，3 秒后自动送达",
        aiReviewModel:"点评模式",
        aiReviewEmpty:"连续播放满 3 秒后，AI 会发来一条懂歌留言。",
        aiReviewPrivacy:"连续播放 3 秒自动生成 · 优先读取缓存",
        aiReviewGenerate:"生成乐评",
        aiReviewRegenerate:"重新点评",
        aiReviewLoading:"正在听这首歌…",
        aiReviewReady:"AI 音乐手记 · 已生成",
        aiReviewCached:"AI 音乐手记 · 已从缓存读取",
        aiReviewNeedTrack:"请先选择一首歌曲。",
        aiReviewFailed:"AI 乐评生成失败，请稍后再试。",
        aiReviewRateLimited:"点评太频繁，请一分钟后再试。",
        aiReviewNotConfigured:"Cloudflare 尚未配置 DeepSeek API 密钥。",
        aiReviewLocalPreview:"本地预览已就绪；部署并配置 Cloudflare 密钥后即可生成真实乐评。",
        tabHot:"QQ 热榜",
        tabFavorites:"我的收藏",
        tabCustomLists:"自建歌单",
        playlistInfoHot:"QQ 音乐热榜",
        playlistInfoFavorites:"收藏列表",
        playlistInfoPlaylist:"歌单",
        newPlaylist:"新建歌单",
        importPlaylistLink:"链接导入",
        importPlaylistFile:"文件导入",
        renamePlaylist:"重命名",
        refreshHot:"刷新",
        exportPlaylist:"导出歌单",
        deletePlaylist:"删除歌单",
        removeFromPlaylist:"从歌单移除",
        footerText:"本站仅作为学习演示，音乐版权归各平台与原作者所有。",
        toastAddedFavorite:"已添加到收藏",
        toastRemovedFavorite:"已从收藏移除",
        toastAddedToPlaylist:"已添加到歌单",
        toastAlreadyInList:"该歌曲已在当前列表里~",
        toastNoMore:"已经没有更多搜索结果啦~",
        toastNeedKeyword:"请先输入搜索关键词。",
        toastSearchError:"搜索时发生了一点小错误，请稍后再试。",
        toastPlayError:"播放失败，请稍后再试。",
        toastLyricStyleSwitched:"已切换歌词炫酷效果。",
        toastDownloadNotReady:"当前歌曲还未加载完成，稍后再试。",
        toastDownloadPreparing:"正在准备下载…",
        toastDownloadStarted:"已按“歌手 - 歌名”命名下载。",
        toastQueuedNext:"已加入下一首播放",
        toastPlaylistCreated:"歌单创建成功。",
        toastPlaylistDeleted:"歌单已删除。",
        toastPlaylistRenamed:"歌单已重命名。",
        toastTrackRemovedFromPlaylist:"已从歌单移除。",
        confirmDeletePlaylist:"确定要删除这个歌单吗？",
        confirmRemoveTrack:"确定要从歌单中移除这首歌吗？",
        toastPlaylistImported:"导入完成",
        toastPlaylistImportEmpty:"导入文件里没有可用歌单或收藏。",
        toastPlaylistImportError:"导入失败，请确认文件是本站导出的 JSON。",
        toastPlaylistLinkError:"歌单导入失败，请检查链接或稍后再试。",
        toastPlaylistLinkUnsupported:"暂未识别该链接，请粘贴网易云或 QQ 音乐歌单链接。",
        toastPlaylistExported:"已导出歌单文件。",
        toastPlaylistExportEmpty:"暂无可导出的歌单。",
        toastPlaylistEmpty:"当前歌单为空，先添加几首歌吧~",
        toastPlaymodeList:"播放模式：列表循环",
        toastPlaymodeSingle:"播放模式：单曲循环",
        toastPlaymodeShuffle:"播放模式：随机播放",
        toastNeedPlaylistSelected:"请先选择一个歌单。",
        toastNoCurrentTrack:"当前没有正在播放的歌曲。",
        sourceNetease:"网易云",
        sourceQQ:"QQ音乐",
        sourceKuwo:"酷我",
        sourceJoox:"JOOX",
        modalNewPlaylistTitle:"新建歌单",
        modalNewPlaylistDesc:"给你的歌单取一个可爱的名字吧～",
        modalRenamePlaylistTitle:"重命名歌单",
        modalRenamePlaylistDesc:"修改后的名称只保存在当前浏览器。",
        modalImportPlaylistTitle:"导入在线歌单",
        modalImportPlaylistDesc:"粘贴网易云或 QQ 音乐歌单分享链接，平台会自动识别。",
        playlistLinkLabel:"歌单链接或网易云歌单 ID",
        playlistRenameOptional:"歌单名称（可选）",
        modalImportConfirm:"识别并导入",
        modalConfirm:"确定",
        modalCancel:"取消"
      },
      en: {
        appTitle:"Nie Music · Cover Fusion",
        authorLabel:"Artwork-driven immersive music player",
        shortcutHint:"Shortcuts: Space Play/Pause · ←/→ Seek · ↑/↓ Volume · N/P Track · F Fav · L Lyrics FX",
        shortcutPanelTitle:"Keyboard Shortcuts",
        shortcutPanelDesc:"Control Nie Music Station more easily with your keyboard:",
        shortcutPlayPause:"Play / Pause",
        shortcutSeek:"Seek backward / forward 5s",
        shortcutVolume:"Volume up / down",
        shortcutPrevNext:"Previous / Next track",
        shortcutFav:"Favorite / unfavorite current track",
        shortcutLyricsFX:"Toggle lyrics FX",
        shortcutMute:"Mute / unmute",
        shortcutFocusSearch:"Focus on search box",
        shortcutCloseModal:"Tip: press Esc to close dialogs.",
        mobileNavSearch:"Discover",
        mobileNavPlayer:"Player",
        mobileNavPlaylist:"Library",
        searchTitle:"Discover",
        searchSubtitle:"Supports Netease / QQ / Kuwo / JOOX",
        searchButton:"Search",
        perSourceCount:"Per source",
        perSourceCountTail:"results",
        loadMore:"Load more",
        searchStatusIdle:"No search yet. Try typing \"JJ Lin\"?",
        searchStatusSearching:"Searching…",
        searchStatusDone:"Search completed.",
        searchStatusNoSource:"Please select at least one music source.",
        playerTitle:"Now Playing",
        playerSubtitle:"Artwork colors · Synced lyrics",
        coverHint:"Choose a song and let its colors flow.",
        lyricsEmpty:"No lyrics yet. Try a song with LRC lyrics.",
        lyricsFullscreen:"Full lyrics",
        lyricsExitFullscreen:"Exit full lyrics",
        lyricsScriptSimplified:"Simplified lyrics",
        lyricsScriptTraditional:"Traditional lyrics",
        lyricsAssist:"Show translation / toneless pinyin",
        lyricsAssistOff:"Hide translation / toneless pinyin",
        lyricSeekHint:"Click to seek to this line",
        toastLyricSeek:"Jumped to the selected lyric",
        translationLoading:"Translating…",
        translationUnavailable:"Translation unavailable",
        pinyinUnavailable:"Pinyin unavailable",
        playlistTitle:"Library",
        queueTitle:"Play Queue",
        queueUpNext:"Up Next",
        queueEmpty:"Nothing is queued. Use +1 beside a song to add it.",
        queueClear:"Clear queued",
        queuePlay:"Play now",
        queueRemove:"Remove from queue",
        queueFromCurrent:"Current list",
        libraryExpand:"Open library",
        libraryCollapse:"Collapse library",
        aiReviewTitle:"AI Review",
        aiReviewNoTrack:"No track selected",
        aiReviewChooseTrack:"Play a song and receive a note after 3 seconds",
        aiReviewModel:"Review mode",
        aiReviewEmpty:"Keep a song playing for 3 seconds and AI will send a listening note.",
        aiReviewPrivacy:"Generated after 3 seconds · Reuses cached notes",
        aiReviewGenerate:"Generate",
        aiReviewRegenerate:"Regenerate",
        aiReviewLoading:"Listening to this song…",
        aiReviewReady:"AI listening note · Ready",
        aiReviewCached:"AI listening note · From cache",
        aiReviewNeedTrack:"Choose a track first.",
        aiReviewFailed:"Could not generate a review. Please try again.",
        aiReviewRateLimited:"Too many reviews. Try again in one minute.",
        aiReviewNotConfigured:"The DeepSeek API key is not configured in Cloudflare.",
        aiReviewLocalPreview:"Local preview is ready. Deploy and configure the Cloudflare secret for live reviews.",
        tabHot:"QQ Charts",
        tabFavorites:"Favorites",
        tabCustomLists:"Playlists",
        playlistInfoHot:"QQ Music Charts",
        playlistInfoFavorites:"Favorites List",
        playlistInfoPlaylist:"Playlist",
        newPlaylist:"Create",
        importPlaylistLink:"Import link",
        importPlaylistFile:"Import file",
        renamePlaylist:"Rename",
        refreshHot:"Refresh",
        exportPlaylist:"Export",
        deletePlaylist:"Delete",
        removeFromPlaylist:"Remove from playlist",
        footerText:"For demo only. All music copyrights belong to original owners.",
        toastAddedFavorite:"Added to favorites",
        toastRemovedFavorite:"Removed from favorites",
        toastAddedToPlaylist:"Added to playlist",
        toastAlreadyInList:"This song is already in this list.",
        toastNoMore:"No more results to load.",
        toastNeedKeyword:"Please enter a search keyword first.",
        toastSearchError:"An error occurred while searching.",
        toastPlayError:"Playback failed. Please try again.",
        toastLyricStyleSwitched:"Lyrics FX toggled.",
        toastDownloadNotReady:"Song not fully loaded yet. Try again later.",
        toastDownloadPreparing:"Preparing download…",
        toastDownloadStarted:"Download named as Artist - Title.",
        toastQueuedNext:"Queued to play next",
        toastPlaylistCreated:"Playlist created.",
        toastPlaylistDeleted:"Playlist deleted.",
        toastPlaylistRenamed:"Playlist renamed.",
        toastTrackRemovedFromPlaylist:"Removed from playlist.",
        confirmDeletePlaylist:"Delete this playlist?",
        confirmRemoveTrack:"Remove this song from the playlist?",
        toastPlaylistImported:"Import completed",
        toastPlaylistImportEmpty:"No usable playlists or favorites found in this file.",
        toastPlaylistImportError:"Import failed. Please choose a JSON file exported by this site.",
        toastPlaylistLinkError:"Playlist import failed. Check the link and try again.",
        toastPlaylistLinkUnsupported:"Unsupported link. Paste a Netease or QQ Music playlist link.",
        toastPlaylistExported:"Playlist file exported.",
        toastPlaylistExportEmpty:"No playlist to export.",
        toastPlaylistEmpty:"Playlist is empty. Add some songs first.",
        toastPlaymodeList:"Play mode: list loop",
        toastPlaymodeSingle:"Play mode: single loop",
        toastPlaymodeShuffle:"Play mode: shuffle",
        toastNeedPlaylistSelected:"Please select a playlist first.",
        toastNoCurrentTrack:"No track is currently playing.",
        sourceNetease:"Netease",
        sourceQQ:"QQ Music",
        sourceKuwo:"Kuwo",
        sourceJoox:"JOOX",
        modalNewPlaylistTitle:"Create Playlist",
        modalNewPlaylistDesc:"Give your playlist a cute name!",
        modalRenamePlaylistTitle:"Rename Playlist",
        modalRenamePlaylistDesc:"The new name is stored only in this browser.",
        modalImportPlaylistTitle:"Import Online Playlist",
        modalImportPlaylistDesc:"Paste a Netease or QQ Music share link; the platform is detected automatically.",
        playlistLinkLabel:"Playlist link or Netease playlist ID",
        playlistRenameOptional:"Playlist name (optional)",
        modalImportConfirm:"Detect & Import",
        modalConfirm:"Confirm",
        modalCancel:"Cancel"
      }
    };

    const state = {
      language:'zh',
      enabledSources:{netease:true, qq:true, kuwo:true, joox:false},
      perSourceLimit:10,
      perSourceCurrentLimit:{netease:10, qq:10, kuwo:10, joox:10},
      perSourcePage:{netease:1, qq:1, kuwo:1, joox:1},

      searchKeyword:'',
      searchResults:[],
      trackMap:new Map(),
      favorites:[],
      playlists:[],
      hotCharts:[],
      hotTracks:[],
      hotLoading:false,
      selectedHotChartId:'26',
      upNext:[],
      libraryRenderLimit:80,
      playRequestToken:0,
      currentTrack:null,
      playContext:{type:'hot',index:-1,playlistId:null},
      playMode:'list',
      isPlaying:false,
      lyricLines:[],
      currentLyricIndex:-1,
      searchInProgress:false,
      noMoreResults:false,
      lyricsAlt:false,
      lyricsFontSize:17,
      lyricScriptMode:'simplified',
      lyricAssistEnabled:false,
      lyricPresentationToken:0,
      renderedLyricTrackUid:null,
      libraryCollapsed:true,
      aiReviewModel:'deepseek-v4-flash',
      aiReviewCache:{},
      aiReviewRequestToken:0,
      aiReviewAutoTimer:0,
      aiReviewAutoCloseTimer:0,
      aiReviewAutoCloseDelay:0,
      aiReviewLoadingKey:'',
      muted:false
    };

    const LIBRARY_STORAGE_KEY = 'pikachu-music-library-v1';
    const LYRIC_SCRIPT_STORAGE_KEY = 'nie-music-lyric-script';
    const LYRIC_ASSIST_STORAGE_KEY = 'nie-music-lyric-assist';
    const PINYIN_PRO_URL = 'https://unpkg.com/pinyin-pro@3.18.2/dist/index.js';
    const LYRIC_TRANSLATION_CACHE_KEY = 'nie-music-lyric-translation-cache-v1';
    const AI_REVIEW_ENDPOINT = /(^|\.)xiaolnn\.pages\.dev$/i.test(location.hostname)
      ? '/api/ai-review'
      : ['localhost','127.0.0.1'].includes(location.hostname)
        ? '/api/ai-review'
        : 'https://xiaolnn.pages.dev/api/ai-review';
    const AI_REVIEW_CACHE_KEY = 'nie-music-ai-review-cache-v3';
    const METING_ENDPOINT = 'https://api.qijieya.cn/meting/';
    const QQ_PLAYLIST_ENDPOINT = 'https://xiaolnn.pages.dev/api/qq-playlist';
    const QQ_HOT_ENDPOINT = 'https://cyapi.top/API/music_hot.php';

    let openCCConverters=null;
    let openCCLoadPromise=null;
    let translationQueue=Promise.resolve();
    let pinyinLoadPromise=null;
    const lyricTranslationCache=new Map();

    const dom = {};
    let audioLevel = 0;
    let mobileImmersiveEnteredUid = null;
    let mobileImmersivePlaybackStartedAt = 0;
    let mobileImmersiveCanAutoEnter = true;
    let mobileImmersivePlaybackReady = false;
    let wakeLockSentinel = null;
    let mediaPositionUpdateAt = 0;

    function isMobilePlayerUI(){
      return window.matchMedia('(max-width: 860px)').matches;
    }

    function $(id){return document.getElementById(id);}
    function t(k){const lang=state.language;return (translations[lang]&&translations[lang][k])||translations.zh[k]||k;}
    function showToast(msg){
      const toast=$('toast'); if(!toast)return;
      toast.textContent=msg;
      toast.classList.add('show');
      setTimeout(()=>toast.classList.remove('show'),2000);
    }
    function formatTime(sec){
      if(!isFinite(sec)||sec<0)sec=0;
      const m=Math.floor(sec/60);const s=Math.floor(sec%60);
      return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    }

    function getInterleavedSearchList(){
      const grouped={netease:[],qq:[],kuwo:[],joox:[]};
      state.searchResults.forEach(t=>{if(grouped[t.source])grouped[t.source].push(t);});
      Object.keys(grouped).forEach(k=>grouped[k].sort((a,b)=>(a.displayIndex||0)-(b.displayIndex||0)));
      const order=['netease','qq','kuwo','joox'];
      const idx={netease:0,qq:0,kuwo:0,joox:0};
      const out=[];
      let added=true;
      while(added){
        added=false;
        for(const s of order){
          const arr=grouped[s]; const i=idx[s];
          if(arr && i<arr.length){out.push(arr[i]);idx[s]++;added=true;}
        }
      }
      return out;
    }

    function setLanguage(lang){
      if(lang!=='zh' && lang!=='en') lang='zh';
      state.language=lang;
      try{localStorage.setItem('pikachu-music-lang',lang);}catch(e){}
      document.querySelectorAll('.lang-btn').forEach(btn=>{
        btn.classList.toggle('active',btn.dataset.lang===lang);
      });
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key=el.dataset.i18n;
        if(key) el.textContent = t(key);
      });
      dom.searchInput.placeholder = lang==='zh'
        ? '输入歌名 / 歌手，回车搜索…'
        : 'Type song / artist, press Enter…';
      dom.playlistNameInput.placeholder = lang==='zh'
        ? '例如：通勤歌单 / 宝可梦歌单'
        : 'e.g. Commute mix / Pokemon list';
      if(dom.playlistSelect) renderPlaylistOptions();
      updatePlaylistInfoLabel();
      updateLyricsFullscreenUI();
      updateLyricsToolsUI();
      if(dom.lyricsInner)refreshLyricPresentation();
      renderQueue();
      updateAIReviewUI();
      if(dom.queueToggleBtn){dom.queueToggleBtn.title=t('queueTitle');dom.queueToggleBtn.setAttribute('aria-label',t('queueTitle'));}
      if(dom.libraryToggle)dom.libraryToggle.title=t(state.libraryCollapsed?'libraryExpand':'libraryCollapse');
      if(dom.libraryFab){dom.libraryFab.title=t('libraryExpand');dom.libraryFab.setAttribute('aria-label',t('libraryExpand'));}
    }

    // ========== 旧的质量映射函数，暂时保留（不再使用 API 的 quality 字段） ==========
    function neteaseQualityToTag(q){
      const s = (q || '').toString().toLowerCase();
      if (/lossless|无损|flac|ape|wav|hi-?res|sq|臻品|臻音|高清臻音|spatial/.test(s)) return 'lossless';
      return 'normal';
    }
    function kuwoQualityToTag(qualityStr, urlStr, actualLevel){
      const s1=(qualityStr||'').toString().toLowerCase();
      const s2=(urlStr||'').toString().toLowerCase();
      const s3=(actualLevel||'').toString().toLowerCase();
      if (s3==='zp' || s3==='lossless') return 'lossless';
      if (/flac|lossless|无损|超高/.test(s1)) return 'lossless';
      if (s2.endsWith('.flac') || s2.includes('.flac?')) return 'lossless';
      return 'normal';
    }

    // ========== 新增：统一根据音频链接后缀判断音质 ==========
    function inferQualityFromUrl(url){
      if(!url) return {tag:null,label:''};
      let base = url.split('?')[0].toLowerCase();
      const m = base.match(/\.([a-z0-9]+)$/);
      const ext = m ? m[1] : '';
      const losslessExts = ['flac','wav','ape','alac','aiff'];
      if (losslessExts.includes(ext)) {
        return {tag:'lossless', label:'LOSSLESS'};
      }
      // 其他一律当作 320K 显示
      return {tag:'320k', label:'320K'};
    }

    // ===================== 歌单缓存 / 导出 =====================

    function serializeTrack(track){
      if(!track) return null;
      const keys=[
        'uid','source','displayIndex','keyword','songid','songMid','qqId','qqSearchKey','qqIndex',
        'jooxIndex','jooxSongId','jooxSongMid','title','artist','album','cover','pageUrl',
        'quality','qualityLabel','qqQualityText','jooxQualityText','pay','directAudioUrl','directLrcUrl','importSource'
      ];
      const out={};
      keys.forEach(k=>{
        if(track[k]!==undefined && track[k]!==null && track[k]!=='') out[k]=track[k];
      });
      out.detailsLoaded=false;
      out.audioUrl=null;
      out.lrc=null;
      out.lrcUrl=null;
      return out.uid ? out : null;
    }

    function deserializeTrack(raw){
      if(raw && raw.source === 'migu') return null;
      const track=serializeTrack(raw);
      if(!track) return null;
      track.detailsLoaded=false;
      track.audioUrl=track.directAudioUrl||null;
      track.lrc=null;
      track.lrcUrl=track.directLrcUrl||null;
      return track;
    }

    function getLibrarySnapshot(){
      return {
        version:2,
        savedAt:new Date().toISOString(),
        favorites:state.favorites.map(serializeTrack).filter(Boolean),
        playlists:state.playlists.map(pl=>({
          id:pl.id,
          name:pl.name,
          originPlatform:pl.originPlatform||null,
          originId:pl.originId||null,
          importedAt:pl.importedAt||null,
          tracks:(pl.tracks||[]).map(serializeTrack).filter(Boolean)
        }))
      };
    }

    function saveLibraryToStorage(){
      try{
        localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(getLibrarySnapshot()));
      }catch(e){
        console.warn('save library failed', e);
      }
    }

    function rebuildLibraryTrackMap(){
      [...state.favorites, ...state.playlists.flatMap(pl=>pl.tracks||[])].forEach(track=>{
        if(track && track.uid && !state.trackMap.has(track.uid)){
          state.trackMap.set(track.uid, track);
        }
      });
    }

    function loadLibraryFromStorage(){
      try{
        const raw=localStorage.getItem(LIBRARY_STORAGE_KEY);
        if(!raw) return;
        const data=JSON.parse(raw);
        state.favorites=Array.isArray(data.favorites)
          ? data.favorites.map(deserializeTrack).filter(Boolean)
          : [];
        state.playlists=Array.isArray(data.playlists)
          ? data.playlists.map((pl,idx)=>({
              id:pl.id || ('pl-cached-'+idx+'-'+Date.now()),
              name:pl.name || (state.language==='zh'?'未命名歌单':'Untitled Playlist'),
              originPlatform:pl.originPlatform||null,
              originId:pl.originId||null,
              importedAt:pl.importedAt||null,
              tracks:Array.isArray(pl.tracks) ? pl.tracks.map(deserializeTrack).filter(Boolean) : []
            }))
          : [];
        rebuildLibraryTrackMap();
      }catch(e){
        console.warn('load library failed', e);
      }
    }

    function exportPlaylistData(){
      const payload=getLibrarySnapshot();
      const hasAny=payload.favorites.length || payload.playlists.length;
      if(!hasAny){showToast(t('toastPlaylistExportEmpty'));return;}

      const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      const date=new Date().toISOString().slice(0,10);
      a.href=url;
      a.download='pikachu-music-playlists-'+date+'.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast(t('toastPlaylistExported'));
    }

    function mergeImportedTracks(targetList, rawTracks){
      let added=0;
      if(!Array.isArray(rawTracks)) return added;

      rawTracks.forEach(raw=>{
        const imported=deserializeTrack(raw);
        if(!imported || !imported.uid) return;

        const track=state.trackMap.get(imported.uid) || imported;
        if(!state.trackMap.has(track.uid)) state.trackMap.set(track.uid, track);

        if(!targetList.some(item=>item.uid===track.uid)){
          targetList.push(track);
          added++;
        }
      });

      return added;
    }

    function importPlaylistData(data){
      if(!data || typeof data!=='object') throw new Error('invalid import data');

      let addedFavorites=0;
      let addedPlaylists=0;
      let addedPlaylistTracks=0;

      addedFavorites=mergeImportedTracks(state.favorites, data.favorites);

      const importedPlaylists=Array.isArray(data.playlists) ? data.playlists : [];
      importedPlaylists.forEach((pl,idx)=>{
        if(!pl || typeof pl!=='object') return;

        const fallbackName=state.language==='zh' ? '导入歌单' : 'Imported Playlist';
        const name=(pl.name || fallbackName).toString().trim() || fallbackName;
        const rawId=(pl.id || '').toString().trim();

        let target=rawId ? state.playlists.find(item=>item.id===rawId) : null;
        if(!target) target=state.playlists.find(item=>item.name===name);

        if(!target){
          let id=rawId || ('pl-import-'+Date.now()+'-'+idx+'-'+Math.random().toString(16).slice(2));
          if(state.playlists.some(item=>item.id===id)){
            id='pl-import-'+Date.now()+'-'+idx+'-'+Math.random().toString(16).slice(2);
          }
          target={id,name,tracks:[]};
          state.playlists.push(target);
          addedPlaylists++;
        }

        addedPlaylistTracks += mergeImportedTracks(target.tracks, pl.tracks);
      });

      const totalAdded=addedFavorites + addedPlaylists + addedPlaylistTracks;
      const hasUsableData=(Array.isArray(data.favorites) && data.favorites.length) || importedPlaylists.length;
      if(!hasUsableData) return {empty:true, addedFavorites, addedPlaylists, addedPlaylistTracks, totalAdded};

      rebuildLibraryTrackMap();
      renderPlaylistOptions();
      saveLibraryToStorage();
      renderPlaylistList();
      updateMainFavButton();

      return {empty:false, addedFavorites, addedPlaylists, addedPlaylistTracks, totalAdded};
    }

    function handleImportPlaylistFile(e){
      const input=e.target;
      const file=input.files && input.files[0];
      if(!file) return;

      const reader=new FileReader();
      reader.onload=()=>{
        try{
          const data=JSON.parse(reader.result);
          const stat=importPlaylistData(data);
          if(stat.empty){
            showToast(t('toastPlaylistImportEmpty'));
          }else{
            const msg=state.language==='zh'
              ? `${t('toastPlaylistImported')}：新增 ${stat.addedPlaylists} 个歌单，${stat.addedFavorites} 首收藏，${stat.addedPlaylistTracks} 首歌单歌曲。`
              : `${t('toastPlaylistImported')}: ${stat.addedPlaylists} playlists, ${stat.addedFavorites} favorites, ${stat.addedPlaylistTracks} playlist tracks added.`;
            showToast(msg);
          }
        }catch(err){
          console.error('import playlist failed', err);
          showToast(t('toastPlaylistImportError'));
        }finally{
          input.value='';
        }
      };
      reader.onerror=()=>{
        showToast(t('toastPlaylistImportError'));
        input.value='';
      };
      reader.readAsText(file, 'utf-8');
    }

    function payloadArray(payload, keys=[]){
      if(Array.isArray(payload)) return payload;
      for(const key of keys){
        if(Array.isArray(payload?.[key])) return payload[key];
      }
      if(Array.isArray(payload?.data)) return payload.data;
      return [];
    }

    function cleanSharedUrl(value){
      const raw=String(value||'').trim();
      const match=raw.match(/https?:\/\/[^\s<>"']+/i);
      return (match?match[0]:raw).replace(/\*{2,}/g,'').replace(/[）)\]】,，。；;]+$/g,'');
    }

    function sharedUrlParam(url,key){
      const direct=url.searchParams.get(key);
      if(direct)return direct;
      const queryIndex=url.hash.indexOf('?');
      if(queryIndex<0)return '';
      return new URLSearchParams(url.hash.slice(queryIndex+1)).get(key)||'';
    }

    function detectExternalPlaylist(value){
      const raw=String(value||'').trim();
      if(/^\d{4,}$/.test(raw)) return {platform:'netease',id:raw,url:raw};
      const sharedUrl=cleanSharedUrl(raw);
      let parsed;
      try{parsed=new URL(sharedUrl);}catch(error){return null;}
      const host=parsed.hostname.toLowerCase();
      if(host.includes('163.com')||host.includes('163cn.tv')){
        const id=sharedUrlParam(parsed,'id')||(parsed.pathname.match(/playlist\/(\d+)/i)||[])[1]||'';
        return id?{platform:'netease',id,url:sharedUrl}:null;
      }
      if(host.includes('qq.com')){
        const id=sharedUrlParam(parsed,'id')||sharedUrlParam(parsed,'disstid')||'';
        return {platform:'qq',id,url:sharedUrl};
      }
      return null;
    }

    function normalizeImportedNeteaseTrack(item,index){
      const audioUrl=String(item?.url||'');
      let songId='';
      try{songId=new URL(audioUrl).searchParams.get('id')||'';}catch(error){}
      if(!songId) songId=String(item?.id||index+1);
      return {
        uid:'netease-'+songId,source:'netease',displayIndex:index+1,songid:songId,
        keyword:((item?.name||'')+' '+(item?.artist||'')).trim(),neteaseIndex:index+1,
        title:String(item?.name||item?.title||'Unknown'),artist:cyNormalizeArtist(item?.artist||''),album:String(item?.album||''),
        cover:cyNormalizeMediaUrl(item?.pic||item?.cover||'','image'),audioUrl,
        directAudioUrl:audioUrl,directLrcUrl:String(item?.lrc||''),lrcUrl:String(item?.lrc||''),lrc:null,
        importSource:'meting',detailsLoaded:false,quality:null,qualityLabel:null
      };
    }

    function normalizeQQCollectionTrack(item,index,prefix='qq'){
      const mid=String(item?.mid||item?.song_mid||item?.songmid||'').trim();
      if(!mid)return null;
      const title=String(item?.name||item?.song_name||item?.title||'Unknown');
      const artist=cyNormalizeArtist(item?.singer||item?.songer_name||item?.artist||'');
      return {
        uid:'qq-'+mid,source:'qq',displayIndex:index+1,songMid:mid,qqId:mid,
        qqSearchKey:(title+' '+artist).trim(),keyword:(title+' '+artist).trim(),
        title,artist,album:String(item?.album||''),cover:cyNormalizeMediaUrl(item?.cover||item?.pic||'','image'),
        detailsLoaded:false,audioUrl:null,lrc:null,lrcUrl:null,importSource:prefix
      };
    }

    function storeImportedPlaylist(platform,originId,name,tracks){
      const originKey=String(originId||'').trim()||String(Date.now());
      let playlist=state.playlists.find(item=>item.originPlatform===platform&&item.originId===originKey);
      const fallbackName=platform==='netease'?`网易云歌单 ${originKey}`:`QQ 歌单 ${originKey}`;
      if(!playlist){
        playlist={
          id:`pl-${platform}-${originKey}-${Math.random().toString(16).slice(2,8)}`,
          name:name||fallbackName,originPlatform:platform,originId:originKey,importedAt:new Date().toISOString(),tracks:[]
        };
        state.playlists.push(playlist);
      }else{
        if(name)playlist.name=name;
        playlist.importedAt=new Date().toISOString();
        playlist.tracks=[];
      }
      tracks.filter(Boolean).forEach(track=>{
        const cached=state.trackMap.get(track.uid);
        const resolved=cached?Object.assign(cached,track):track;
        state.trackMap.set(resolved.uid,resolved);
        if(!playlist.tracks.some(item=>item.uid===resolved.uid))playlist.tracks.push(resolved);
      });
      state.playContext={type:'playlist',index:-1,playlistId:playlist.id};
      renderPlaylistOptions();
      dom.playlistSelect.value=playlist.id;
      saveLibraryToStorage();
      renderPlaylistList();
      return playlist;
    }

    function updatePlaylistDetection(){
      if(!dom.playlistDetectStatus)return null;
      const detected=detectExternalPlaylist(dom.playlistLinkInput.value);
      dom.playlistDetectStatus.classList.toggle('is-error',Boolean(dom.playlistLinkInput.value.trim()&&!detected));
      dom.playlistDetectStatus.textContent=!dom.playlistLinkInput.value.trim()?''
        :detected?(detected.platform==='netease'?'已识别：网易云音乐歌单':'已识别：QQ 音乐歌单')
        :t('toastPlaylistLinkUnsupported');
      return detected;
    }

    function openPlaylistLinkModal(){
      dom.playlistLinkModal.classList.add('show');
      dom.playlistLinkInput.value='';
      dom.playlistImportNameInput.value='';
      dom.playlistDetectStatus.textContent='';
      setTimeout(()=>dom.playlistLinkInput.focus(),50);
    }

    function closePlaylistLinkModal(){
      if(dom.playlistLinkConfirm.disabled)return;
      dom.playlistLinkModal.classList.remove('show');
    }

    async function importExternalPlaylist(){
      const detected=updatePlaylistDetection();
      if(!detected){showToast(t('toastPlaylistLinkUnsupported'));return;}
      const customName=dom.playlistImportNameInput.value.trim();
      dom.playlistLinkConfirm.disabled=true;
      dom.playlistDetectStatus.classList.remove('is-error');
      dom.playlistDetectStatus.textContent=detected.platform==='netease'?'正在导入网易云歌单…':'正在导入 QQ 音乐歌单…';
      try{
        let tracks=[];
        if(detected.platform==='netease'){
          const url=new URL(METING_ENDPOINT);
          url.searchParams.set('server','netease');
          url.searchParams.set('type','playlist');
          url.searchParams.set('id',detected.id);
          const payload=await cyRequest(url);
          tracks=payloadArray(payload,['value','result','songs']).map(normalizeImportedNeteaseTrack);
        }else{
          const url=new URL(QQ_PLAYLIST_ENDPOINT,location.origin);
          url.searchParams.set('url',detected.url);
          const payload=await cyRequest(url);
          tracks=payloadArray(payload,['song_list','value','songs']).map((item,index)=>normalizeQQCollectionTrack(item,index,'qq-playlist')).filter(Boolean);
          if(!customName&&payload?.name)dom.playlistImportNameInput.value=String(payload.name).slice(0,60);
        }
        if(!tracks.length)throw new Error('empty external playlist');
        const importedName=customName||dom.playlistImportNameInput.value.trim();
        const playlist=storeImportedPlaylist(detected.platform,detected.id||detected.url,importedName,tracks);
        dom.playlistLinkModal.classList.remove('show');
        document.querySelectorAll('.playlist-tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.tab==='playlists'));
        state.playContext={type:'playlist',index:-1,playlistId:playlist.id};
        renderPlaylistList();
        showToast(`${t('toastPlaylistImported')}：${playlist.tracks.length} ${state.language==='zh'?'首歌曲':'tracks'}`);
      }catch(error){
        console.error('external playlist import failed',error);
        dom.playlistDetectStatus.classList.add('is-error');
        dom.playlistDetectStatus.textContent=t('toastPlaylistLinkError');
        showToast(t('toastPlaylistLinkError'));
      }finally{
        dom.playlistLinkConfirm.disabled=false;
      }
    }

    function renderPlaylistOptions(){
      if(!dom.playlistSelect) return;
      const prev=dom.playlistSelect.value || state.playContext.playlistId;
      dom.playlistSelect.innerHTML='';

      if(!state.playlists.length){
        const opt=document.createElement('option');
        opt.value='';
        opt.textContent=state.language==='zh'?'暂无歌单':'No playlist';
        dom.playlistSelect.appendChild(opt);
        state.playContext.playlistId=null;
        return;
      }

      state.playlists.forEach(pl=>{
        const opt=document.createElement('option');
        opt.value=pl.id;
        opt.textContent=pl.name;
        dom.playlistSelect.appendChild(opt);
      });

      const nextValue=state.playlists.some(pl=>pl.id===prev) ? prev : state.playlists[0].id;
      dom.playlistSelect.value=nextValue;
      state.playContext.playlistId=nextValue;
    }

    // ===================== 各平台搜索 =====================

    // 网易云搜索：迟言 API（列表请求不传 n，选择歌曲时再传 n）
    const CY_NETEASE_ENDPOINT='https://cyapi.top/API/netease.php';
    const CY_NETEASE_API_KEY='bc01615f034c60e77e43bc0305b3c2ee944414f740083c9421631e6a797bc84c';
    const CY_HOT_COMMENT_ENDPOINT='https://cyapi.top/API/wyrp.php';

    async function loadQQHotCharts(force=false){
      if(state.hotLoading)return;
      if(state.hotCharts.length&&!force){
        renderHotChartOptions();
        if(!state.hotTracks.length)await loadQQHotTracks(state.selectedHotChartId);
        return;
      }
      state.hotLoading=true;
      if(dom.hotChartRow)dom.hotChartRow.classList.add('is-loading');
      try{
        const url=new URL(QQ_HOT_ENDPOINT);
        url.searchParams.set('apikey',CY_NETEASE_API_KEY);
        const payload=await cyRequest(url);
        state.hotCharts=payloadArray(payload,['value','data','list']).map(item=>({
          id:String(item.list_id||item.id||''),
          name:String(item.list_name||item.name||'QQ 热榜'),
          cover:cyNormalizeMediaUrl(item.list_cover||item.cover||'','image')
        })).filter(item=>item.id);
        if(!state.hotCharts.some(item=>item.id===state.selectedHotChartId)){
          state.selectedHotChartId=state.hotCharts[0]?.id||'26';
        }
        renderHotChartOptions();
        await loadQQHotTracks(state.selectedHotChartId);
      }catch(error){
        console.error('qq hot charts failed',error);
        if(dom.playlistInfo)dom.playlistInfo.textContent=state.language==='zh'?'QQ 热榜加载失败':'QQ charts unavailable';
      }finally{
        state.hotLoading=false;
        if(dom.hotChartRow)dom.hotChartRow.classList.remove('is-loading');
      }
    }

    function renderHotChartOptions(){
      if(!dom.hotChartSelect)return;
      dom.hotChartSelect.innerHTML='';
      state.hotCharts.forEach(chart=>{
        const option=document.createElement('option');
        option.value=chart.id;
        option.textContent=chart.name;
        dom.hotChartSelect.appendChild(option);
      });
      dom.hotChartSelect.value=state.selectedHotChartId;
    }

    async function loadQQHotTracks(chartId){
      const id=String(chartId||state.selectedHotChartId||'26');
      state.selectedHotChartId=id;
      state.libraryRenderLimit=80;
      if(dom.hotChartSelect)dom.hotChartSelect.value=id;
      if(dom.hotChartRow)dom.hotChartRow.classList.add('is-loading');
      try{
        const url=new URL(QQ_HOT_ENDPOINT);
        url.searchParams.set('apikey',CY_NETEASE_API_KEY);
        url.searchParams.set('id',id);
        const payload=await cyRequest(url);
        state.hotTracks=payloadArray(payload,['value','data','songs'])
          .slice(0,100)
          .map((item,index)=>normalizeQQCollectionTrack(item,index,'qq-hot'))
          .filter(Boolean);
        state.hotTracks.forEach(track=>{
          const cached=state.trackMap.get(track.uid);
          if(cached)Object.assign(cached,track);
          else state.trackMap.set(track.uid,track);
        });
        state.hotTracks=state.hotTracks.map(track=>state.trackMap.get(track.uid)||track);
        renderPlaylistList();
      }catch(error){
        console.error('qq hot tracks failed',error);
        state.hotTracks=[];
        renderPlaylistList();
      }finally{
        if(dom.hotChartRow)dom.hotChartRow.classList.remove('is-loading');
      }
    }

    function cyFirst(obj, keys, fallback=''){
      if(!obj || typeof obj!=='object')return fallback;
      for(const key of keys){
        const value=obj[key];
        if(value!==undefined && value!==null && String(value).trim()!=='')return value;
      }
      return fallback;
    }

    function cyUsableText(value){
      const text=String(value??'').trim();
      return Boolean(text && !/^(?:未知歌手|unknown(?: artist)?|null|undefined|\[object Object\]|暂无)$/i.test(text));
    }

    function cyNormalizeArtist(value){
      if(value==null)return '';
      if(Array.isArray(value)){
        return [...new Set(value.map(cyNormalizeArtist).filter(cyUsableText))].join(' / ');
      }
      if(typeof value==='object'){
        for(const key of ['name','artistName','artist_name','artistname','singerName','singer_name','singername','title','歌手','歌手名称']){
          const found=cyNormalizeArtist(value[key]);
          if(cyUsableText(found))return found;
        }
        for(const key of ['artists','artist','ar','singers','singer']){
          const found=cyNormalizeArtist(value[key]);
          if(cyUsableText(found))return found;
        }
        return '';
      }
      const text=String(value).replace(/^\s*歌手\s*[:：]\s*/,'').trim();
      return cyUsableText(text)?text:'';
    }

    function cyPickArtist(obj, fallback=''){
      if(obj && typeof obj==='object'){
        for(const key of ['artist','artists','artistsname','artistName','artist_name','artistname','ar','singer','singers','singerName','singer_name','singername','author','歌手','歌手名称']){
          const found=cyNormalizeArtist(obj[key]);
          if(cyUsableText(found))return found;
        }
      }
      return cyNormalizeArtist(fallback);
    }

    function cyPreferText(...values){
      for(const value of values){
        if(cyUsableText(value))return String(value).trim();
      }
      return '';
    }

    function cyFindDeep(payload, predicate, depth=0){
      if(depth>5 || payload==null)return '';
      if(typeof payload==='string')return predicate(payload)?payload:'';
      if(Array.isArray(payload)){
        for(const item of payload){const hit=cyFindDeep(item,predicate,depth+1);if(hit)return hit;}
        return '';
      }
      if(typeof payload==='object'){
        for(const [key,value] of Object.entries(payload)){
          if(typeof value==='string' && predicate(value,key))return value;
        }
        for(const value of Object.values(payload)){
          const hit=cyFindDeep(value,predicate,depth+1);if(hit)return hit;
        }
      }
      return '';
    }

    function cyArray(payload){
      if(Array.isArray(payload))return payload;
      if(!payload || typeof payload!=='object')return [];
      for(const key of ['data','result','results','list','songs','items']){
        const value=payload[key];
        if(Array.isArray(value))return value;
        if(value && typeof value==='object'){
          for(const nested of ['data','list','songs','items']){
            if(Array.isArray(value[nested]))return value[nested];
          }
        }
      }
      return Object.entries(payload).filter(([key])=>/^\d+$/.test(key)).map(([,value])=>value);
    }

    async function cyRequest(url){
      const res=await fetch(url,{headers:{Accept:'application/json,text/plain,*/*'}});
      const text=await res.text();
      if(!res.ok)throw new Error('CY API HTTP '+res.status);
      try{return JSON.parse(text);}catch(e){return text.trim();}
    }


    function cyNormalizeMediaUrl(value, kind='media'){
      const visited=new Set();
      const pick=(input,depth=0)=>{
        if(input==null||depth>6)return '';
        if(typeof URL!=='undefined'&&input instanceof URL)return input.href;
        if(Array.isArray(input)){
          for(const item of input){const found=pick(item,depth+1);if(found)return found;}
          return '';
        }
        if(typeof input==='object'){
          if(visited.has(input))return '';
          visited.add(input);
          const imageKeys=['pic','picUrl','picurl','pic_url','cover','coverUrl','coverurl','cover_url','image','img','album_pic','albumPic','singer_pic','singerPic','src','url','data'];
          const audioKeys=['url','src','audioUrl','audio_url','music_url','play_url','playurl','song_play_url','file','data'];
          const keys=kind==='image'?imageKeys:(kind==='audio'?audioKeys:[...audioKeys,...imageKeys]);
          for(const key of keys){
            if(Object.prototype.hasOwnProperty.call(input,key)){
              const found=pick(input[key],depth+1);if(found)return found;
            }
          }
          for(const nested of Object.values(input)){
            const found=pick(nested,depth+1);if(found)return found;
          }
          return '';
        }
        let raw=String(input).trim();
        if(!raw||/^\[object\s+Object\]$/i.test(raw))return '';
        if((raw.startsWith('{')&&raw.endsWith('}'))||(raw.startsWith('[')&&raw.endsWith(']'))){
          try{const found=pick(JSON.parse(raw),depth+1);if(found)return found;}catch(e){}
        }
        const decoder=document.createElement('textarea');
        decoder.innerHTML=raw;
        let url=decoder.value.trim()
          .replace(/^[±\s"'`]+|[±\s"'`]+$/g,'')
          .replace(/^(?:img|pic|cover|url)\s*=\s*/i,'')
          .replace(/\\\//g,'/')
          .replace(/&amp;/g,'&');
        const embedded=url.match(/https?:\/\/[^\s±"'<>]+/i)||url.match(/\/\/[^\s±"'<>]+/i);
        if(embedded)url=embedded[0];
        return url.replace(/[±，。；;]+$/g,'').trim();
      };
      let url=pick(value);
      if(!url||/^\[object\s+Object\]$/i.test(url))return '';
      if(/^\/\//.test(url))url='https:'+url;
      if(!/^(?:https?:|data:image\/|blob:)/i.test(url))return '';
      // HTTPS 页面不允许继续使用 HTTP 图片或音频；统一在进入 DOM 前升级。
      if(/^http:\/\//i.test(url)&&(location.protocol==='https:'||kind==='image'||/(?:music\.126\.net|qqmusic\.qq\.com|gtimg\.cn|qq\.com)/i.test(url))){
        url=url.replace(/^http:/i,'https:');
      }
      if(kind==='image'&&/music\.126\.net\//i.test(url)){
        url=url.replace(/[?&]param=\d+y\d+/ig,'').replace(/[?&]$/,'');
        url+=(url.includes('?')?'&':'?')+'param=800y800';
      }
      return url;
    }

    function cyResizeNeteaseImage(url,size){
      const value=String(url||'');
      if(!/music\.126\.net\//i.test(value))return value;
      return value.replace(/([?&])param=\d+y\d+/i,`$1param=${size}y${size}`);
    }

    function cyQQCoverUrl(albumMid,size=500,host='y.qq.com'){
      const mid=String(albumMid||'').trim();
      if(!mid||/^\[object\s+Object\]$/i.test(mid))return '';
      const safeSize=[800,500,300].includes(Number(size))?Number(size):500;
      return `https://${host}/music/photo_new/T002R${safeSize}x${safeSize}M000${encodeURIComponent(mid)}.jpg?max_age=2592000`;
    }

    function cyImageCandidates(value,track={},preferredSize=0){
      const raw=[];
      const push=input=>{
        const normalized=cyNormalizeMediaUrl(input,'image');
        if(normalized)raw.push(normalized);
      };
      push(value);
      (track.coverCandidates||[]).forEach(push);
      if(track.source==='qq'){
        const albumMid=String(track.albumMid||track.album_mid||'').trim();
        if(albumMid){
          [500,800,300].forEach(size=>{
            push(cyQQCoverUrl(albumMid,size,'y.qq.com'));
            push(cyQQCoverUrl(albumMid,size,'y.gtimg.cn'));
          });
        }
        const singerMid=String(track.singerMid||track.singer_mid||'').trim();
        if(singerMid){
          [500,300].forEach(size=>{
            push(`https://y.qq.com/music/photo_new/T001R${size}x${size}M000${encodeURIComponent(singerMid)}.jpg?max_age=2592000`);
            push(`https://y.gtimg.cn/music/photo_new/T001R${size}x${size}M000${encodeURIComponent(singerMid)}.jpg?max_age=2592000`);
          });
        }
      }
      const variants=[];
      for(const normalized of raw){
        if(/music\.126\.net\//i.test(normalized)){
          const base=normalized.replace(/[?&]param=\d+y\d+/ig,'').replace(/[?&]$/,'');
          const sizes=preferredSize?[preferredSize]:[800,500,300];
          for(const size of sizes){
            const sized=base+(base.includes('?')?'&':'?')+`param=${size}y${size}`;
            variants.push(sized);
            if(/https:\/\/p[1-4]\.music\.126\.net/i.test(sized)){
              ['p1','p2','p3','p4'].forEach(host=>variants.push(sized.replace(/https:\/\/p[1-4]\.music\.126\.net/i,`https://${host}.music.126.net`)));
            }
          }
          variants.push(base);
          continue;
        }
        if(/(?:y\.qq\.com|y\.gtimg\.cn)\/music\/photo_new\//i.test(normalized)){
          const httpsUrl=normalized.replace(/^http:/i,'https:');
          [500,800,300].forEach(size=>variants.push(httpsUrl.replace(/R\d+x\d+M000/i,`R${size}x${size}M000`)));
          variants.push(httpsUrl.replace('https://y.gtimg.cn/','https://y.qq.com/'));
          variants.push(httpsUrl.replace('https://y.qq.com/','https://y.gtimg.cn/'));
          continue;
        }
        variants.push(normalized);
      }
      return [...new Set(variants.filter(url=>url&&!/^.*\[object(?:%20|\s)Object\].*$/i.test(url)))];
    }

    function cyNeteaseImageCandidates(value){
      return cyImageCandidates(value,{source:'netease'});
    }

    function cyLoadImageWithFallback(img,value,onSuccess,onFailure,track={},preferredSize=0){
      if(!img)return;
      const candidates=cyImageCandidates(value,track,preferredSize);
      const requestToken=`cover-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      img.dataset.coverRequest=requestToken;
      img.removeAttribute('crossorigin');
      img.removeAttribute('referrerpolicy');
      img.decoding='async';
      img.loading=img.id==='cover-img'?'eager':'lazy';
      let index=0;
      const isCurrent=()=>img.dataset.coverRequest===requestToken;
      const finishFailure=()=>{
        if(!isCurrent())return;
        img.onload=null;img.onerror=null;
        img.removeAttribute('src');
        delete img.dataset.resolvedCover;
        if(onFailure)onFailure();
      };
      const attempt=()=>{
        if(!isCurrent())return;
        if(index>=candidates.length){finishFailure();return;}
        const candidate=candidates[index++];
        const probe=new Image();
        probe.decoding='async';
        probe.onload=()=>{
          if(!isCurrent())return;
          img.onload=()=>{
            if(!isCurrent())return;
            img.onload=null;img.onerror=null;
            img.dataset.resolvedCover=candidate;
            if(onSuccess)onSuccess(candidate);
          };
          img.onerror=()=>{if(isCurrent())attempt();};
          img.src=candidate;
        };
        probe.onerror=()=>{if(isCurrent())attempt();};
        // 不设置 crossOrigin：图片显示不需要 CORS，避免 QQ/网易云被 Canvas/CORS 误伤。
        probe.src=candidate;
      };
      if(!candidates.length){finishFailure();return;}
      attempt();
    }

    function cyParseNeteaseDetailText(raw){
      const text=String(raw||'').replace(/\u00a0/g,' ').trim();
      if(!text)return {};
      const field=(labels)=>{
        const names=labels.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
        const m=text.match(new RegExp('(?:^|\\n)\\s*(?:'+names+')\\s*[:：=]\\s*([^\\r\\n±]+)','i'));
        return m?m[1].trim():'';
      };
      const coverMatch=text.match(/(?:^|[\r\n±])\s*(?:img|pic|cover)\s*=\s*(https?:\/\/[^±\r\n\s]+)(?=±|\r?\n|\s|$)/i)
        || text.match(/封面(?:链接)?(?:为|[:：=])\s*(https?:\/\/p[1-4]\.music\.126\.net\/[^±\r\n\s]+)/i)
        || text.match(/https?:\/\/p[1-4]\.music\.126\.net\/[^±\r\n\s]+/i);
      const lyricMatch=text.match(/(?:^|\n)\s*\[歌词\]\s*\r?\n([\s\S]*)$/i);
      return {
        cover:cyNormalizeMediaUrl(coverMatch?(coverMatch[1]||coverMatch[0]):'','image'),
        title:field(['歌名','歌曲','歌曲名称','name','title','song']),
        artist:cyNormalizeArtist(field(['歌手','歌手名称','artist','singer'])),
        album:field(['专辑','专辑名称','album']),
        duration:field(['时长','duration','time']),
        audioUrl:cyNormalizeMediaUrl(field(['链接','播放链接','歌曲链接','播放地址','url']),'audio'),
        lrc:lyricMatch?lyricMatch[1].trim():''
      };
    }

    function cyParseTextList(text){
      if(!text)return [];
      return String(text).split(/\r?\n/).map(line=>line.trim()).filter(Boolean).map((line,idx)=>{
        const cleaned=line.replace(/^\s*(?:\[?\d+\]?|\d+[.、)])\s*/,'').trim();
        const labeled=cleaned.match(/(?:歌名|歌曲)\s*[:：]\s*(.+?)(?:\s+(?:歌手|演唱)\s*[:：]\s*(.+))?$/i);
        if(labeled)return {index:idx+1,title:labeled[1].trim(),artist:cyNormalizeArtist(labeled[2]||''),raw:line};
        const parts=cleaned.split(/\s*(?:\s+-\s+|—|–|\||--|－)\s*/).filter(Boolean);
        return {index:idx+1,title:parts[0]||cleaned,artist:cyNormalizeArtist(parts.slice(1).join(' / ')),raw:line};
      });
    }

    function cyNormalizeNeteaseList(payload){
      let list=cyArray(payload);
      if(!list.length && typeof payload==='string')return cyParseTextList(payload);
      if(!list.length && payload && typeof payload==='object'){
        for(const key of ['data','result','list','msg','message']){
          if(typeof payload[key]==='string' && payload[key].trim())return cyParseTextList(payload[key]);
        }
      }
      return list.map((item,idx)=>{
        if(typeof item==='string'){
          const detail=cyParseNeteaseDetailText(item);
          if(detail.title)return Object.assign({index:idx+1,id:''},detail,{raw:item});
          return cyParseTextList(item)[0]||{index:idx+1,title:item,artist:''};
        }
        const it=item||{};
        const albumObj=it.album && typeof it.album==='object'?it.album:{};
        const artist=cyPickArtist(it,'');
        const title=String(cyFirst(it,['name','title','song','songname','song_name','歌曲','歌曲名称','歌名'],'搜索结果 '+(idx+1))).trim();
        const directCover=cyFirst(it,['pic','picurl','picUrl','pic_url','cover','coverurl','coverUrl','cover_url','image','img','封面','歌曲封面'],'');
        const nestedCover=cyFirst(albumObj,['picUrl','picurl','pic','cover','image'],cyFirst(it,['al'],{})?.picUrl||'');
        return {
          index:Number(cyFirst(it,['n','num','index','序号'],idx+1))||idx+1,
          id:String(cyFirst(it,['id','songid','songId','歌曲ID'],'')),
          title,
          artist,
          album:String(cyFirst(it,['albumname','albumName','专辑','专辑名称'],cyFirst(albumObj,['name','title'],''))),
          cover:cyNormalizeMediaUrl(directCover||nestedCover,'image'),
          audioUrl:cyNormalizeMediaUrl(cyFirst(it,['url','music_url','play_url','playurl','src','link','音乐链接','播放地址','歌曲链接'],'') ,'audio'),
          lrc:cyFirst(it,['lrc','lyric','lyrics','歌词','歌词内容'],''),
          raw:it
        };
      }).filter(item=>item.title);
    }

    function cyFlatten(payload){
      if(typeof payload==='string')return {rawText:payload};
      if(!payload || typeof payload!=='object')return {};
      for(const key of ['data','result','song','music']){
        if(typeof payload[key]==='string' && payload[key].trim()){
          try{return Object.assign({},payload,cyFlatten(JSON.parse(payload[key])));}catch(e){return Object.assign({},payload,{rawText:payload[key]});}
        }
      }
      const arr=cyArray(payload);
      if(arr.length===1 && arr[0] && typeof arr[0]==='object')return Object.assign({},payload,arr[0]);
      for(const key of ['data','result','song','music']){
        if(payload[key] && !Array.isArray(payload[key]) && typeof payload[key]==='object')return Object.assign({},payload,payload[key]);
      }
      return payload;
    }

    function cyApplyNeteaseDetail(track,payload){
      const d=cyFlatten(payload);
      const embeddedText=cyFindDeep(payload,(value)=>/±\s*(?:img|pic|cover)\s*=|\[歌词\]|(?:^|\n)\s*歌名\s*[:：]/i.test(value));
      const rawText=d.rawText||embeddedText||((typeof payload==='string')?payload:'');
      const parsed=cyParseNeteaseDetailText(rawText);
      const deepCover=cyFindDeep(payload,(value,key)=>/music\.126\.net\/.*\.(?:jpe?g|png|webp)/i.test(value)||(/^(?:pic|cover|img|image)/i.test(key||'')&&/https?:\/\//i.test(value)));
      const directCover=cyNormalizeMediaUrl(cyFirst(d,['pic','picurl','picUrl','pic_url','cover','coverurl','coverUrl','cover_url','image','img','封面','歌曲封面'],''),'image');
      const cover=directCover||parsed.cover||cyNormalizeMediaUrl(deepCover,'image')||cyNormalizeMediaUrl(track.cover,'image');
      const rawLink=String(cyFirst(d,['link'],''));
      const mediaLink=/(?:\.(?:mp3|flac|m4a|aac|ogg)(?:\?|$)|\/jdymusic\/|m\d+\.music\.126\.net)/i.test(rawLink)?rawLink:'';
      const deepAudio=cyFindDeep(payload,(value,key)=>/(?:\.(?:mp3|flac|m4a|aac|ogg)(?:\?|$)|\/jdymusic\/|m\d+\.music\.126\.net)/i.test(value)&&!/^(?:pic|cover|img|image)/i.test(key||''));
      const audioUrl=cyNormalizeMediaUrl(cyFirst(d,['url','music_url','play_url','playurl','src','音乐链接','播放地址','歌曲链接'],parsed.audioUrl||mediaLink||deepAudio||track.audioUrl||''),'audio');
      const detailArtist=cyPickArtist(d,parsed.artist);
      Object.assign(track,{
        songid:String(cyFirst(d,['id','songid','songId','歌曲ID'],track.songid||'')),
        title:cyPreferText(cyFirst(d,['name','title','song','songname','song_name','歌曲','歌曲名称','歌名'],''),parsed.title,track.title),
        artist:cyPreferText(detailArtist,parsed.artist,track.artist),
        album:cyPreferText(cyFirst(d,['albumname','albumName','专辑','专辑名称'],typeof d.album==='string'?d.album:''),parsed.album,track.album),
        durationText:String(cyFirst(d,['duration','time','时长'],parsed.duration||track.durationText||'')),
        cover:cover||track.cover||'',
        audioUrl:audioUrl||track.audioUrl||'',
        lrc:cyFirst(d,['lrc','lyric','lyrics','歌词','歌词内容'],parsed.lrc||track.lrc||''),
        lrcUrl:null,
        detailsLoaded:Boolean(audioUrl||track.audioUrl)
      });
    }

    async function primeNeteaseMetadata(tracks,searchToken){
      const queue=tracks.filter(track=>!cyUsableText(track.artist)||!track.cover).slice(0,12);
      let cursor=0;
      const worker=async()=>{
        while(cursor<queue.length){
          const track=queue[cursor++];
          try{
            await fetchNeteaseDetails(track);
            if(searchToken!==state.searchKeyword)continue;
            renderMiniSearchList();
            renderPlaylistList();
            if(state.currentTrack?.uid===track.uid)updateThemeFromTrack(track);
          }catch(error){console.warn('netease metadata hydrate',track.title,error);}
          await new Promise(resolve=>setTimeout(resolve,90));
        }
      };
      await Promise.all([worker(),worker()]);
    }

    async function searchNetease(kw,page,num){
      const requestLimit=Math.max(1,page||1)*Math.max(1,num||10);
      const url=new URL(CY_NETEASE_ENDPOINT);
      url.searchParams.set('apikey',CY_NETEASE_API_KEY);
      url.searchParams.set('msg',kw);
      url.searchParams.set('num',String(requestLimit));
      url.searchParams.set('type','json');
      let added=0;
      const created=[];
      try{
        const payload=await cyRequest(url);
        const list=cyNormalizeNeteaseList(payload);
        list.forEach((it,idx)=>{
          const n=it.index||idx+1;
          const uid='netease-'+(it.id||kw+'-'+n);
          if(state.trackMap.has(uid))return;
          const track={
            uid,source:'netease',displayIndex:n,keyword:kw,neteaseIndex:n,
            songid:it.id||'',title:it.title||'',artist:cyNormalizeArtist(it.artist),album:it.album||'',
            cover:it.cover||null,audioUrl:it.audioUrl||null,lrc:it.lrc||null,lrcUrl:null,
            detailsLoaded:false,quality:null,qualityLabel:null,metadataLoading:!cyUsableText(it.artist)||!it.cover
          };
          state.trackMap.set(uid,track);
          state.searchResults.push(track);
          created.push(track);
          added++;
        });
        if(created.length)primeNeteaseMetadata(created,kw).catch(error=>console.warn('netease metadata queue',error));
      }catch(e){console.error('netease(cyapi) search',e);}
      return added;
    }

    // QQ 搜索：

    // QQ 搜索：使用 tang 的 QQ 音乐搜索 API（只拿列表，不拿 url）
    async function searchQQ(kw, limit) {
      const url=`https://tang.api.s01s.cn/music_open_api.php?msg=${encodeURIComponent(kw)}&type=json`;
      let added=0;
      const created=[];
      try {
        const res=await fetch(url);
        const json=await res.json();
        const data=Array.isArray(json)?json:(Array.isArray(json?.data)?json.data:(Array.isArray(json?.result)?json.result:[]));
        if(!data.length)return 0;
        data.slice(0,limit||data.length).forEach((it,idx)=>{
          const mid=String(cyFirst(it,['song_mid','songmid','mid','songId','songid'],'')).trim();
          if(!mid)return;
          const uid=`qq-${mid}`;
          if(state.trackMap.has(uid))return;
          const albumMid=String(cyFirst(it,['album_mid','albummid','albumMid'],'')).trim();
          const singerMid=String(cyFirst(it,['singer_mid','singermid','singerMid'],Array.isArray(it.singer)?cyFirst(it.singer[0]||{},['mid','singer_mid'],''):'' )).trim();
          const directCover=cyFirst(it,['album_pic','albumPic','pic','picurl','cover','image','singer_pic'],'');
          const cover=cyNormalizeMediaUrl(directCover||cyQQCoverUrl(albumMid,800),'image');
          const track={
            uid,source:'qq',displayIndex:idx+1,keyword:kw,qqSearchKey:kw,qqIndex:idx+1,
            qqId:mid,songid:mid,songMid:mid,albumMid,singerMid,
            title:cyPreferText(cyFirst(it,['song_title','song_name','name','title'],'') ,'QQ音乐'),
            artist:cyPickArtist(it,''),
            album:cyPreferText(cyFirst(it,['album_name','album_title','album','albumname'],'')),
            cover:cover||null,coverCandidates:[directCover,cyQQCoverUrl(albumMid,800),cyQQCoverUrl(albumMid,500)].filter(Boolean),
            audioUrl:null,lrc:null,lrcUrl:null,detailsLoaded:false,quality:null,qualityLabel:null,
            qqQualityText:it.pay||null,pay:it.pay||null
          };
          state.trackMap.set(uid,track);state.searchResults.push(track);created.push(track);added++;
        });
        if(created.length)primeQQMetadata(created,kw).catch(error=>console.warn('qq metadata queue',error));
      }catch(e){console.error('qq search (tang)',e);}
      return added;
    }

    // 酷我搜索

    // 酷我搜索
    async function searchKuwo(kw, limit){
      const url=`https://kw-api.cenguigui.cn/?name=${encodeURIComponent(kw)}&page=1&limit=${encodeURIComponent(limit)}`;
      let added=0;
      try{
        const res=await fetch(url);
        const json=await res.json();
        if(json.code!==200 || !Array.isArray(json.data)) return 0;

        json.data.forEach((it, idx)=>{
          const uid=`kuwo-${it.rid}`;
          if(state.trackMap.has(uid))return;

          const track={
            uid,
            source:'kuwo',
            displayIndex:idx+1,
            keyword:kw,
            songid:it.rid,

            title:it.name||'',
            artist:it.artist||'',
            album:it.album||'',

            cover:it.pic||null,
            audioUrl:null,
            lrc:null,
            lrcUrl:null,
            detailsLoaded:false,
            quality:null,
            qualityLabel:null
          };

          state.trackMap.set(uid,track);
          state.searchResults.push(track);
          added++;
        });
      }catch(e){
        console.error('kuwo search',e);
      }
      return added;
    }

    const JOOX_TOKEN = 'f84ao9lMF_q7husBWRfgUw';
    const JOOX_BR = 4;

    // JOOX 搜索
    async function searchJoox(kw, limit){
      const url=`https://apicx.asia/api/joox_music?msg=${encodeURIComponent(kw)}&token=${encodeURIComponent(JOOX_TOKEN)}&br=${encodeURIComponent(JOOX_BR)}`;
      let added=0;
      try{
        const res=await fetch(url);
        const json=await res.json();
        const songs=json && json.code===200 && json.data && Array.isArray(json.data.songs) ? json.data.songs : [];
        songs.slice(0, limit || songs.length).forEach((it, idx)=>{
          const songMid=it.songmid || '';
          const songId=it['歌曲ID'] || songMid || (idx+1);
          const uid=`joox-${songMid || songId}`;
          if(state.trackMap.has(uid))return;

          const track={
            uid,
            source:'joox',
            displayIndex:idx+1,
            keyword:kw,
            jooxIndex:idx+1,
            songid:songId,
            songMid:songMid,

            title:it['歌曲名称']||'',
            artist:it['歌手']||'',
            album:it['专辑']||'',

            cover:null,
            audioUrl:null,
            lrc:it['歌词内容']||null,
            lrcUrl:null,
            detailsLoaded:false,
            quality:null,
            qualityLabel:null
          };

          state.trackMap.set(uid,track);
          state.searchResults.push(track);
          added++;
        });
      }catch(e){
        console.error('joox search',e);
      }
      return added;
    }

    // ===================== 聚合搜索 =====================

    async function searchAllSources(reset){
      if(!state.searchKeyword){showToast(t('toastNeedKeyword'));return;}
      const enabled=Object.keys(state.enabledSources).filter(k=>state.enabledSources[k]);
      if(!enabled.length){showToast(t('searchStatusNoSource'));return;}
      state.searchInProgress=true;
      dom.searchStatus.textContent=t('searchStatusSearching');

      if(reset){
        Object.keys(state.perSourceCurrentLimit)
          .forEach(k=>state.perSourceCurrentLimit[k]=state.perSourceLimit);
        Object.keys(state.perSourcePage).forEach(k=>state.perSourcePage[k]=1);

        state.searchResults=[];
        state.trackMap.clear();
        rebuildLibraryTrackMap();
        state.hotTracks.forEach(track=>state.trackMap.set(track.uid,track));
        state.noMoreResults=false;
        syncMobileHotCommentVisibility();
      }

      const kw=state.searchKeyword;
      const tasks=[];
      for(const s of enabled){
        const limit=state.perSourceCurrentLimit[s]||state.perSourceLimit;
        if(s==='netease')tasks.push(searchNetease(kw, state.perSourcePage.netease || 1, state.perSourceLimit));
        if(s==='qq')tasks.push(searchQQ(kw,limit));
        if(s==='kuwo')tasks.push(searchKuwo(kw,limit));
        if(s==='joox')tasks.push(searchJoox(kw,limit));
      }
      let added=0;
      try{
        const res=await Promise.all(tasks);
        added=res.reduce((a,b)=>a+(b||0),0);
      }catch(e){
        console.error(e);
        showToast(t('toastSearchError'));
      }

      state.searchInProgress=false;
      dom.searchStatus.textContent=t('searchStatusDone');
      dom.searchCount.textContent=state.searchResults.length.toString();
      renderMiniSearchList();
      renderPlaylistList();
      syncMobileHotCommentVisibility();
      if(!reset){
        if(added===0){state.noMoreResults=true;showToast(t('toastNoMore'));}
        else state.noMoreResults=false;
      }
    }

    // ===================== 各平台详情 =====================

    // 网易云详情：使用同一关键词和列表序号 n 获取播放地址、封面与歌词
    async function fetchNeteaseDetails(track){
      const makeUrl=(typeValue)=>{
        const url=new URL(CY_NETEASE_ENDPOINT);
        url.searchParams.set('apikey',CY_NETEASE_API_KEY);
        url.searchParams.set('msg',track.keyword || ((track.title||'')+' '+(track.artist||'')).trim());
        url.searchParams.set('num',String(Math.max(state.perSourceCurrentLimit.netease||state.perSourceLimit||10,track.neteaseIndex||track.displayIndex||1)));
        url.searchParams.set('n',String(track.neteaseIndex||track.displayIndex||1));
        if(typeValue)url.searchParams.set('type',typeValue);
        return url;
      };
      const firstPayload=await cyRequest(makeUrl('json'));
      cyApplyNeteaseDetail(track,firstPayload);
      // 部分节点即使 type=json 仍只返回精简数据；缺少封面或歌词时，再读取原始文本格式。
      if(!track.cover || !track.lrc || !track.audioUrl){
        try{
          const fallbackPayload=await cyRequest(makeUrl(''));
          cyApplyNeteaseDetail(track,fallbackPayload);
        }catch(fallbackError){
          console.warn('netease text detail fallback',fallbackError);
        }
      }
      if(track.audioUrl){
        const q=inferQualityFromUrl(track.audioUrl);
        track.quality=q.tag;
        track.qualityLabel=q.label;
      }
      track.detailsLoaded=Boolean(track.audioUrl);
    }

    // QQ 详情：根据搜索时的关键词 + song_mid(mid) 拿 url + lrc（tang API）
    async function fetchQQDetails(track) {
      const msg=(track.qqSearchKey||track.keyword||'').trim()||((track.title||'')+' '+(track.artist||'')).trim();
      const mid=String(track.qqId||track.songMid||track.songid||'').trim();
      if(!mid)return;
      const url=`https://tang.api.s01s.cn/music_open_api.php?msg=${encodeURIComponent(msg)}&type=json&mid=${encodeURIComponent(mid)}`;
      // 默认选择接口实际返回的最高音质：优先比较 kbps，码率缺失时按档位优先级兜底。
      function pickBestPlayUrl(d){
        const qualities=[
          {key:'sq',url:d.song_play_url_sq,kbps:Number(d.kbps_sq)||0,rank:6,tag:'lossless',label:'LOSSLESS',name:'SQ'},
          {key:'pq',url:d.song_play_url_pq,kbps:Number(d.kbps_pq)||0,rank:5,tag:'lossless',label:'LOSSLESS',name:'PQ'},
          {key:'accom',url:d.song_play_url_accom,kbps:Number(d.kbps_accom)||0,rank:4,tag:'hq',label:'HQ',name:'ACCOM'},
          {key:'hq',url:d.song_play_url_hq,kbps:Number(d.kbps_hq)||0,rank:3,tag:'hq',label:'HQ',name:'HQ'},
          {key:'standard',url:d.song_play_url_standard,kbps:Number(d.kbps_standard)||0,rank:2,tag:'standard',label:'STD',name:'STD'},
          {key:'fq',url:d.song_play_url_fq,kbps:Number(d.kbps_fq)||0,rank:1,tag:'low',label:'LOW',name:'FQ'}
        ].filter(item=>item.url);

        if(qualities.length){
          qualities.sort((a,b)=>(b.kbps-a.kbps)||(b.rank-a.rank));
          const best=qualities[0];
          return {
            url:best.url,
            tag:best.tag,
            label:best.label,
            text:`${best.name}${best.kbps ? ` ${best.kbps}K` : ''}`
          };
        }
        if(d.song_play_url)return {url:d.song_play_url,tag:null,label:null,text:null};
        return {url:null,tag:null,label:null,text:null};
      }
      try{
        const res=await fetch(url);
        const payload=await res.json();
        const d=Array.isArray(payload)?(payload.find(x=>String(x.song_mid||x.songmid||'')===mid)||payload[0]||{}):(payload?.data&&!Array.isArray(payload.data)?payload.data:payload);
        if(!d||typeof d!=='object')throw new Error('qq detail error (invalid response)');
        track.albumMid=String(cyFirst(d,['album_mid','albummid','albumMid'],track.albumMid||'')).trim();
        track.singerMid=String(cyFirst(d,['singer_mid','singermid','singerMid'],track.singerMid||'')).trim();
        track.title=cyPreferText(cyFirst(d,['song_title','song_name','name','title'],''),track.title);
        track.artist=cyPreferText(cyPickArtist(d,''),track.artist);
        track.album=cyPreferText(cyFirst(d,['album_name','album_title','album','albumname'],''),track.album);
        const directCover=cyFirst(d,['album_pic','albumPic','album_cover','albumCover','album_img','albumImg','song_pic','songPic','pic','picurl','pic_url','cover','image','singer_pic','singerPic'],'');
        const generated=cyQQCoverUrl(track.albumMid,800);
        track.coverCandidates=[directCover,generated,cyQQCoverUrl(track.albumMid,500),...(track.coverCandidates||[])].filter(Boolean);
        track.cover=cyNormalizeMediaUrl(directCover||generated||track.cover,'image');
        track.pageUrl=d.song_h5_url||track.pageUrl;
        const best=pickBestPlayUrl(d);
        track.audioUrl=cyNormalizeMediaUrl(best.url||track.audioUrl,'audio');
        track.lrc=d.song_lyric||d.lyric||track.lrc;
        track.qqQualityText=best.text||(d.vip?`VIP:${d.vip}`:null)||track.qqQualityText;
        if(best.tag&&best.label){track.quality=best.tag;track.qualityLabel=best.label;}
        if(track.audioUrl){const q=inferQualityFromUrl(track.audioUrl);if(q&&q.label){track.quality=q.tag;track.qualityLabel=q.label;}}
        track.detailsLoaded=Boolean(track.audioUrl);
      }catch(e){console.error('qq detail (tang)',e);}
    }

    async function primeQQMetadata(tracks,searchToken){
      const queue=tracks.filter(track=>!track.cover).slice(0,12);
      let cursor=0;
      const worker=async()=>{
        while(cursor<queue.length){
          const track=queue[cursor++];
          await fetchQQDetails(track);
          if(searchToken!==state.searchKeyword)continue;
          renderMiniSearchList();
          if(state.currentTrack?.uid===track.uid)updateThemeFromTrack(track);
          await new Promise(resolve=>setTimeout(resolve,80));
        }
      };
      await Promise.all([worker(),worker(),worker()]);
    }

    async function fetchKuwoDetails(track){
      const api=`https://kw-api.cenguigui.cn/?id=${encodeURIComponent(track.songid)}&type=song&level=zp&format=json`;
      const res=await fetch(api);
      const j=await res.json();
      if(!j || j.code!==200 || !j.data) throw new Error('kuwo kw-api detail failed');

      const d=j.data;
      Object.assign(track,{
        title:d.name || track.title,
        artist:d.artist || track.artist,
        album:d.album || track.album,
        cover:d.pic || track.cover,
        audioUrl:d.url || track.audioUrl,
        lrc: d.lyric || track.lrc || null,
        lrcUrl: null,
        detailsLoaded:true
      });

      // 酷我：根据最终 url 后缀判断音质
      if (track.audioUrl) {
        const q = inferQualityFromUrl(track.audioUrl);
        track.quality = q.tag;
        track.qualityLabel = q.label;
      }
    }

    async function fetchJooxDetails(track){
      const n=track.jooxIndex || track.displayIndex || 1;
      const url=`https://apicx.asia/api/joox_music?msg=${encodeURIComponent(track.keyword)}&n=${encodeURIComponent(n)}&token=${encodeURIComponent(JOOX_TOKEN)}&br=${encodeURIComponent(JOOX_BR)}`;
      const res=await fetch(url);
      const j=await res.json();
      if(!j || j.code!==200 || !j.data) throw new Error('joox detail failed');

      const d=j.data;
      const playLinks=d['播放链接']||{};

      async function probeJooxAudioUrl(u){
        if(!u) return false;

        async function request(method, extraOptions){
          const controller=new AbortController();
          const timer=setTimeout(()=>controller.abort(),3000);
          try{
            const res=await fetch(u,Object.assign({
              method,
              cache:'no-store',
              redirect:'follow',
              signal:controller.signal
            },extraOptions||{}));
            return res && (res.ok || res.status===206 || (res.status>=200 && res.status<400));
          }finally{
            clearTimeout(timer);
          }
        }

        try{
          if(await request('HEAD')) return true;
        }catch(e){
          // Some music CDN links do not allow HEAD. Try a tiny ranged GET below.
        }

        try{
          return await request('GET',{headers:{Range:'bytes=0-0'}});
        }catch(e){
          return false;
        }
      }

      async function pickJooxPlayUrl(links){
        const order=['Atmos全景声','无损FLAC','Hi-Res无损','母带无损','OGG 320','MP3 320','AAC 192','OGG 192','MP3 128','AAC 96','AAC 48'];
        for(const name of order){
          const u=links[name];
          if(!u)continue;
          if(!(await probeJooxAudioUrl(u)))continue;
          if(/母带|无损|flac|hi-res|atmos/i.test(name) || /\.flac(?:\?|$)/i.test(u)){
            return {url:u, tag:'lossless', label:'LOSSLESS', text:name};
          }
          const m=name.match(/(\d+)$/);
          if(m)return {url:u, tag:m[1]+'k', label:m[1]+'K', text:name};
          return {url:u, tag:null, label:null, text:name};
        }
        return {url:null, tag:null, label:null, text:null};
      }

      const best=await pickJooxPlayUrl(playLinks);
      Object.assign(track,{
        title:d['歌曲名称']||track.title,
        artist:d['歌手']||track.artist,
        album:d['专辑']||track.album,
        songid:d['歌曲ID']||track.songid,
        songMid:d.songmid||track.songMid,
        audioUrl:best.url||track.audioUrl,
        lrc:d['歌词内容']||track.lrc||null,
        lrcUrl:null,
        jooxQualityText:best.text||track.jooxQualityText||null,
        detailsLoaded:true
      });

      if(best.tag && best.label){
        track.quality=best.tag;
        track.qualityLabel=best.label;
      }else if(track.audioUrl){
        const q=inferQualityFromUrl(track.audioUrl);
        track.quality=q.tag;
        track.qualityLabel=q.label;
      }
    }

    async function ensureTrackDetails(track){
      if(track.directAudioUrl){
        track.audioUrl=track.directAudioUrl;
        if(!track.lrc&&track.directLrcUrl){
          try{
            const response=await fetch(track.directLrcUrl);
            if(response.ok)track.lrc=await response.text();
          }catch(error){console.warn('direct lyric load failed',error);}
        }
        track.detailsLoaded=true;
        if(track.audioUrl){
          const quality=inferQualityFromUrl(track.audioUrl);
          track.quality=quality.tag;
          track.qualityLabel=quality.label;
        }
        return;
      }
      if(track.detailsLoaded && track.audioUrl && (track.lrc || !track.lrcUrl) && (track.source!=='netease' || (track.cover && track.lrc))) return;
      if(track.source==='netease') await fetchNeteaseDetails(track);
      else if(track.source==='kuwo') await fetchKuwoDetails(track);
      else if(track.source==='joox') await fetchJooxDetails(track);
      else await fetchQQDetails(track);
    }

    // ===================== 封面取色 / 网易云热评 =====================

    function themeHashPalette(seed){
      let hash=0;
      for(const ch of String(seed||'Nie Music'))hash=(hash*31+ch.charCodeAt(0))>>>0;
      const hue=hash%360;
      return {
        primary:themeHslToRgb(hue,66,61),
        secondary:themeHslToRgb((hue+72)%360,66,62),
        highlight:themeHslToRgb((hue+156)%360,76,72)
      };
    }

    function themeHslToRgb(h,s,l){
      s/=100;l/=100;
      const c=(1-Math.abs(2*l-1))*s;
      const x=c*(1-Math.abs((h/60)%2-1));
      const m=l-c/2;
      let r=0,g=0,b=0;
      if(h<60){r=c;g=x;}else if(h<120){r=x;g=c;}else if(h<180){g=c;b=x;}else if(h<240){g=x;b=c;}else if(h<300){r=x;b=c;}else{r=c;b=x;}
      return {r:Math.round((r+m)*255),g:Math.round((g+m)*255),b:Math.round((b+m)*255)};
    }

    function themeAverage(colors){
      const sum=colors.reduce((a,c)=>({r:a.r+c.r,g:a.g+c.g,b:a.b+c.b}),{r:0,g:0,b:0});
      const n=Math.max(1,colors.length);
      return {r:Math.round(sum.r/n),g:Math.round(sum.g/n),b:Math.round(sum.b/n)};
    }

    function themeDistance(a,b){return Math.hypot(a.r-b.r,a.g-b.g,a.b-b.b);}

    function extractCoverPalette(img){
      const canvas=document.createElement('canvas');
      canvas.width=canvas.height=48;
      const ctx=canvas.getContext('2d',{willReadFrequently:true});
      ctx.drawImage(img,0,0,48,48);
      const px=ctx.getImageData(0,0,48,48).data;
      const colors=[];
      for(let i=0;i<px.length;i+=16){
        const r=px[i],g=px[i+1],b=px[i+2],a=px[i+3];
        if(a<180)continue;
        const max=Math.max(r,g,b),min=Math.min(r,g,b),sat=max-min,light=(max+min)/2;
        if(light<22||light>238)continue;
        colors.push({r,g,b,sat,light});
      }
      if(colors.length<5)throw new Error('not enough colors');
      const p=themeAverage([...colors].sort((a,b)=>b.sat-a.sat).slice(0,Math.max(8,colors.length*.18)));
      const h=themeAverage([...colors].sort((a,b)=>b.light-a.light).slice(0,Math.max(8,colors.length*.12)));
      const pool=colors.filter(c=>themeDistance(c,p)>75);
      const q=themeAverage((pool.length?pool:[...colors]).sort((a,b)=>b.sat-a.sat).slice(0,Math.max(8,colors.length*.15)));
      return {primary:p,secondary:q,highlight:h};
    }

    function themeMix(color,target,amount){
      return {r:Math.round(color.r+(target.r-color.r)*amount),g:Math.round(color.g+(target.g-color.g)*amount),b:Math.round(color.b+(target.b-color.b)*amount)};
    }

    function applyThemePalette(palette,coverUrl){
      const root=document.documentElement;
      const primary=palette.primary,secondary=palette.secondary,highlight=themeMix(palette.highlight,{r:255,g:255,b:255},.18);
      const deep=themeMix(primary,{r:7,g:8,b:12},.76);
      const muted=themeMix(primary,{r:125,g:132,b:154},.48);
      root.style.setProperty('--album-primary',`${primary.r} ${primary.g} ${primary.b}`);
      root.style.setProperty('--album-secondary',`${secondary.r} ${secondary.g} ${secondary.b}`);
      root.style.setProperty('--album-highlight',`${highlight.r} ${highlight.g} ${highlight.b}`);
      root.style.setProperty('--album-deep',`${deep.r} ${deep.g} ${deep.b}`);
      root.style.setProperty('--album-muted',`${muted.r} ${muted.g} ${muted.b}`);
      root.style.setProperty('--cover-art',coverUrl?`url("${String(coverUrl).replace(/"/g,'%22')}")`:'none');
      const luma=(primary.r*299+primary.g*587+primary.b*114)/1000;
      root.style.setProperty('--album-contrast',luma>170?'#111216':'#ffffff');
      const meta=document.querySelector('meta[name="theme-color"]');
      if(meta)meta.content=`rgb(${deep.r},${deep.g},${deep.b})`;
    }

    function updateThemeFromTrack(track){
      if(track?.cover)track.cover=cyNormalizeMediaUrl(track.cover,'image');
      const seed=(track?.cover||'')+(track?.title||'')+(track?.artist||'');
      if(!track?.cover){applyThemePalette(themeHashPalette(seed),null);return;}
      applyThemePalette(themeHashPalette(seed),track.cover);
      let sampleUrl='';
      try{
        const parsed=new URL(track.cover,location.href);
        if(parsed.protocol==='data:'||parsed.protocol==='blob:'||parsed.origin===location.origin)sampleUrl=parsed.href;
      }catch(e){}
      // 外站封面只用于展示与模糊背景，不再设置 crossOrigin 做 Canvas 取色。
      // QQ/网易云 CDN 通常不返回 ACAO；强行取色会产生 CORS 报错并造成封面闪退错觉。
      if(!sampleUrl)return;
      const sampler=new Image();
      sampler.onload=()=>{try{applyThemePalette(extractCoverPalette(sampler),track.cover);}catch(e){}};
      sampler.src=sampleUrl;
    }

    let currentHotCommentTrack=null;
    let hotCommentPlayed=false;

    function updateHotCommentAction(label){
      if(!dom.hotCommentAction)return;
      dom.hotCommentAction.textContent=label || (hotCommentPlayed?'再次点击 · 换一条':'点击播放并匹配歌词');
    }

    function cyMatchText(value){
      return String(value||'').toLowerCase().replace(/[\s·•・—–_\-()（）\[\]【】'"“”‘’.,，。!?！？:：/\\]+/g,'');
    }

    function cyNeteaseMatchScore(item,title,artist){
      const it=cyMatchText(item.title), ia=cyMatchText(item.artist);
      const tt=cyMatchText(title), ta=cyMatchText(artist);
      let score=0;
      if(it===tt)score+=120;
      else if(it.includes(tt)||tt.includes(it))score+=78;
      if(ta && ia===ta)score+=54;
      else if(ta && (ia.includes(ta)||ta.includes(ia)))score+=34;
      if(item.album && cyMatchText(item.album).includes(tt))score+=4;
      return score;
    }

    async function resolveHotCommentWithNetease(track){
      const originalArtist=cyNormalizeArtist(track.artist);
      const query=((track.title||'')+' '+originalArtist).trim();
      if(!query)return track;
      const searchUrl=new URL(CY_NETEASE_ENDPOINT);
      searchUrl.searchParams.set('apikey',CY_NETEASE_API_KEY);
      searchUrl.searchParams.set('msg',query);
      searchUrl.searchParams.set('num','15');
      searchUrl.searchParams.set('type','json');
      const payload=await cyRequest(searchUrl);
      const list=cyNormalizeNeteaseList(payload)
        .map((item,index)=>Object.assign({},item,{index:item.index||index+1,score:cyNeteaseMatchScore(item,track.title,originalArtist)}))
        .sort((a,b)=>b.score-a.score||a.index-b.index);
      const preserved={audioUrl:track.audioUrl,cover:track.cover,title:track.title,artist:originalArtist,album:track.album};
      let best=null;
      for(const candidate of list.slice(0,6)){
        const probe=Object.assign({},track,{
          keyword:query,neteaseIndex:candidate.index,displayIndex:candidate.index,
          songid:candidate.id||track.songid,title:candidate.title||track.title,artist:cyPreferText(candidate.artist,originalArtist),
          album:candidate.album||track.album,cover:candidate.cover||track.cover,audioUrl:candidate.audioUrl||null,
          lrc:candidate.lrc||null,detailsLoaded:false
        });
        try{
          await fetchNeteaseDetails(probe);
          const detailScore=cyNeteaseMatchScore(probe,preserved.title,preserved.artist)+(probe.lrc?30:0)+(probe.cover?12:0);
          if(!best||detailScore>best.score)best={score:detailScore,probe};
          if(detailScore>=190&&probe.lrc&&probe.cover)break;
        }catch(error){console.warn('hot comment lyric candidate failed',candidate,error);}
      }
      if(best){
        const probe=best.probe;
        Object.assign(track,probe);
        track.title=cyPreferText(preserved.title,probe.title);
        track.artist=cyPreferText(probe.artist,preserved.artist);
        track.audioUrl=probe.audioUrl||preserved.audioUrl;
        track.cover=probe.cover||preserved.cover;
        track.album=cyPreferText(probe.album,preserved.album,'网易云热评');
      }
      track.audioUrl=track.audioUrl||preserved.audioUrl;
      track.cover=track.cover||preserved.cover;
      track.artist=cyPreferText(track.artist,preserved.artist);
      track.detailsLoaded=Boolean(track.audioUrl);
      return track;
    }

    async function loadHotComment(){
      if(!dom.hotCommentText)return;
      hotCommentPlayed=false;currentHotCommentTrack=null;updateHotCommentAction();
      dom.hotCommentText.textContent='正在加载一条热评…';
      if(dom.hotCommentLike)dom.hotCommentLike.textContent='';
      try{
        const payload=await cyRequest(CY_HOT_COMMENT_ENDPOINT);
        const d=cyFlatten(payload);
        const text=String(cyFirst(d,['comment','content','hotComment','text','热评','评论内容'],typeof payload==='string'?payload:'愿你在音乐里遇见自己。'));
        const user=String(cyFirst(d,['nickname','nick','user','username','author','评论者','用户'],'网易云用户'));
        const song=String(cyFirst(d,['song','name','title','歌曲','歌曲名称'],'网易云音乐'));
        const singer=cyPreferText(cyPickArtist(d,''),cyFirst(d,['singer','artist','artistname','歌手'],''));
        const cover=cyResizeNeteaseImage(
          cyNormalizeMediaUrl(cyFirst(d,['pic','picurl','picUrl','cover','img','image','封面'],''),'image'),
          96
        );
        const audioUrl=cyNormalizeMediaUrl(cyFirst(d,['url','music_url','play_url','播放链接','歌曲链接'],''),'audio');
        const liked=Number(cyFirst(d,['liked','like','likes','likedCount','点赞'],0))||0;
        const pageUrl=String(cyFirst(d,['link','pageUrl','songLink','歌曲页面'],''));
        currentHotCommentTrack={
          uid:'hot-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),source:'netease',
          title:song,artist:singer,album:'网易云热评',cover,audioUrl,lrc:null,lrcUrl:null,
          pageUrl,detailsLoaded:false,quality:null,qualityLabel:null,keyword:(song+' '+singer).trim(),neteaseIndex:1,
          hotComment:text,hotCommentUser:user,hotCommentLiked:liked
        };
        dom.hotCommentText.textContent=text;dom.hotCommentUser.textContent='— '+user;
        dom.hotCommentSong.textContent=singer?song+' · '+singer:song;
        if(dom.hotCommentLike)dom.hotCommentLike.textContent=liked?'♥ '+liked.toLocaleString():'';
        if(dom.hotCommentCover){
          cyLoadImageWithFallback(dom.hotCommentCover,cover,
            ()=>{dom.hotCommentCover.style.visibility='visible';},
            ()=>{dom.hotCommentCover.style.visibility='hidden';},currentHotCommentTrack,96);
        }
      }catch(e){
        console.warn('hot comment api failed',e);
        dom.hotCommentText.textContent='音乐响起时，时间会暂时忘记向前走。';dom.hotCommentUser.textContent='— Nie Music';dom.hotCommentSong.textContent='离线文案';
        if(dom.hotCommentCover)dom.hotCommentCover.style.visibility='hidden';
      }
    }

    async function handleHotCommentCardClick(){
      if(!hotCommentPlayed && currentHotCommentTrack){
        hotCommentPlayed=true;
        updateHotCommentAction('正在搜索并匹配歌词…');
        try{await resolveHotCommentWithNetease(currentHotCommentTrack);}catch(error){console.warn('hot comment search match',error);}
        if(dom.hotCommentSong)dom.hotCommentSong.textContent=currentHotCommentTrack.artist?currentHotCommentTrack.title+' · '+currentHotCommentTrack.artist:currentHotCommentTrack.title;
        if(dom.hotCommentCover&&currentHotCommentTrack.cover)cyLoadImageWithFallback(dom.hotCommentCover,currentHotCommentTrack.cover,()=>{dom.hotCommentCover.style.visibility='visible';},()=>{},currentHotCommentTrack);
        updateHotCommentAction('再次点击 · 换一条');
        await playTrack(currentHotCommentTrack,{type:'hot-comment',index:0});
        return;
      }
      await loadHotComment();
    }


    // ===================== 手机搜索卡片 / 歌词文字工具 =====================

    function syncMobileHotCommentVisibility(){
      const panel=document.querySelector('.search-panel');
      if(!panel)return;
      const hasResults=Boolean(state.searchKeyword.trim() && state.searchResults.length);
      panel.classList.toggle('has-search-results',hasResults);
    }

    function containsChinese(text){
      return /[\u3400-\u9fff\uf900-\ufaff]/.test(String(text||''));
    }

    function looksEnglish(text){
      const value=String(text||'').replace(/\s+/g,' ').trim();
      if(!value || containsChinese(value))return false;
      const latin=(value.match(/[A-Za-z]/g)||[]).length;
      return latin>=Math.max(2,Math.floor(value.length*.25));
    }

    const fallbackS2T={
      '爱':'愛','这':'這','里':'裡','后':'後','发':'發','会':'會','为':'為','无':'無','说':'說','过':'過','还':'還','来':'來','时':'時','间':'間','边':'邊','远':'遠','见':'見','云':'雲','风':'風','听':'聽','乐':'樂','台':'臺','画':'畫','梦':'夢','叶':'葉','体':'體','国':'國','万':'萬','与':'與','亲':'親','开':'開','关':'關','长':'長','满':'滿','从':'從','进':'進','动':'動','静':'靜','声':'聲','归':'歸','尽':'盡','应':'應','灯':'燈','点':'點','烟':'煙','广':'廣','欢':'歡','伤':'傷','记':'記','让':'讓','对':'對','将':'將','脸':'臉','头':'頭','当':'當','总':'總','别':'別','离':'離','书':'書','写':'寫','岁':'歲','双':'雙','拥':'擁','泪':'淚','轻':'輕','随':'隨','黄':'黃','蓝':'藍','紧':'緊','问':'問','门':'門','飞':'飛','转':'轉','终':'終','线':'線','吗':'嗎','谁':'誰','样':'樣','许':'許','实':'實','现':'現','带':'帶','词':'詞','译':'譯','简':'簡','听':'聽'
    };
    const fallbackT2S=Object.fromEntries(Object.entries(fallbackS2T).map(([s,t])=>[t,s]));

    function fallbackConvertScript(text,mode){
      const map=mode==='traditional'?fallbackS2T:fallbackT2S;
      return Array.from(String(text||'')).map(ch=>map[ch]||ch).join('');
    }

    async function ensureOpenCCConverters(){
      if(openCCConverters)return openCCConverters;
      if(!openCCLoadPromise){
        openCCLoadPromise=import('https://cdn.jsdelivr.net/npm/opencc-wasm@0.13.0/dist/esm/index.js')
          .then(mod=>{
            const OpenCC=mod.default||mod;
            openCCConverters={
              simplified:OpenCC.Converter({config:'t2s'}),
              traditional:OpenCC.Converter({config:'s2t'})
            };
            return openCCConverters;
          })
          .catch(error=>{
            console.warn('OpenCC load failed, using lightweight fallback.',error);
            return null;
          });
      }
      return openCCLoadPromise;
    }

    async function convertLyricScript(text,mode=state.lyricScriptMode){
      const value=String(text||'');
      if(!containsChinese(value))return value;
      try{
        const converters=await ensureOpenCCConverters();
        const converter=converters&&converters[mode];
        if(converter)return await converter(value);
      }catch(error){console.warn('OpenCC conversion failed',error);}
      return fallbackConvertScript(value,mode);
    }

    function loadLyricTranslationCache(){
      try{
        const saved=JSON.parse(localStorage.getItem(LYRIC_TRANSLATION_CACHE_KEY)||'{}');
        Object.entries(saved).slice(-300).forEach(([key,value])=>{
          if(typeof value==='string'&&value)lyricTranslationCache.set(key,value);
        });
      }catch(error){}
    }

    function saveLyricTranslationCache(){
      try{
        const entries=Array.from(lyricTranslationCache.entries()).slice(-300);
        localStorage.setItem(LYRIC_TRANSLATION_CACHE_KEY,JSON.stringify(Object.fromEntries(entries)));
      }catch(error){}
    }

    function decodeHtmlEntities(value){
      const node=document.createElement('textarea');
      node.innerHTML=String(value||'');
      return node.value;
    }

    function normalizeTranslationText(text){
      let value=String(text||'').trim();
      const wrapped=value.match(/^[（(]\s*([\s\S]*?)\s*[）)]$/);
      if(wrapped&&containsChinese(wrapped[1]))value=wrapped[1].trim();
      return value;
    }

    function splitBilingualLyricText(text){
      const value=String(text||'').trim();
      const match=value.match(/^([\s\S]*?\S)\s*[（(]\s*([\s\S]*?[\u3400-\u9fff][\s\S]*?)\s*[）)]$/);
      if(!match)return {text:value,translation:''};
      const main=match[1].trim();
      const translation=normalizeTranslationText(match[2]);
      return looksEnglish(main)&&translation
        ? {text:main,translation}
        : {text:value,translation:''};
    }

    function translateEnglishLine(text){
      const value=String(text||'').trim();
      if(!value)return Promise.resolve('');
      if(lyricTranslationCache.has(value))return Promise.resolve(lyricTranslationCache.get(value));

      const job=async()=>{
        const url=new URL('https://api.mymemory.translated.net/get');
        url.searchParams.set('q',value.slice(0,450));
        url.searchParams.set('langpair','en|zh-CN');
        const response=await fetch(url.toString(),{headers:{Accept:'application/json'}});
        if(!response.ok)throw new Error('translation http '+response.status);
        const payload=await response.json();
        const translated=normalizeTranslationText(decodeHtmlEntities(payload?.responseData?.translatedText||''));
        if(!translated || /^PLEASE SELECT/i.test(translated))throw new Error('empty translation');
        lyricTranslationCache.set(value,translated);
        saveLyricTranslationCache();
        return translated;
      };

      const promise=translationQueue.then(job,job);
      translationQueue=promise.catch(()=>{});
      return promise;
    }

    function ensurePinyinPro(){
      if(window.pinyinPro&&typeof window.pinyinPro.pinyin==='function')return Promise.resolve(true);
      if(pinyinLoadPromise)return pinyinLoadPromise;
      pinyinLoadPromise=new Promise(resolve=>{
        const script=document.createElement('script');
        script.src=PINYIN_PRO_URL;
        script.async=true;
        script.onload=()=>resolve(Boolean(window.pinyinPro&&typeof window.pinyinPro.pinyin==='function'));
        script.onerror=()=>resolve(false);
        document.head.appendChild(script);
      });
      return pinyinLoadPromise;
    }

    function getChinesePinyin(text){
      try{
        if(window.pinyinPro&&typeof window.pinyinPro.pinyin==='function'){
          const value=window.pinyinPro.pinyin(String(text||''),{toneType:'none'});
          const toneMap={
            'ā':'a','á':'a','ǎ':'a','à':'a',
            'ē':'e','é':'e','ě':'e','è':'e',
            'ī':'i','í':'i','ǐ':'i','ì':'i',
            'ō':'o','ó':'o','ǒ':'o','ò':'o',
            'ū':'u','ú':'u','ǔ':'u','ù':'u',
            'ǖ':'ü','ǘ':'ü','ǚ':'ü','ǜ':'ü'
          };
          return String(value||'')
            .replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/g,ch=>toneMap[ch]||ch)
            .replace(/\b([a-zA-Züv]+)[1-5]\b/g,'$1');
        }
      }catch(error){console.warn('pinyin failed',error);}
      return '';
    }

    function updateLyricsToolsUI(){
      document.querySelectorAll('.lyrics-script-btn').forEach(btn=>{
        const active=btn.dataset.lyricScript===state.lyricScriptMode;
        btn.classList.toggle('active',active);
        btn.setAttribute('aria-pressed',active?'true':'false');
        btn.title=t(btn.dataset.lyricScript==='traditional'?'lyricsScriptTraditional':'lyricsScriptSimplified');
      });
      if(dom.lyricsAssistBtn){
        dom.lyricsAssistBtn.classList.toggle('active',state.lyricAssistEnabled);
        dom.lyricsAssistBtn.setAttribute('aria-pressed',state.lyricAssistEnabled?'true':'false');
        dom.lyricsAssistBtn.title=t(state.lyricAssistEnabled?'lyricsAssistOff':'lyricsAssist');
      }
    }

    function setLyricScriptMode(mode){
      if(mode!=='simplified'&&mode!=='traditional')mode='simplified';
      state.lyricScriptMode=mode;
      try{localStorage.setItem(LYRIC_SCRIPT_STORAGE_KEY,mode);}catch(error){}
      updateLyricsToolsUI();
      refreshLyricPresentation();
    }

    function toggleLyricAssist(){
      state.lyricAssistEnabled=!state.lyricAssistEnabled;
      try{localStorage.setItem(LYRIC_ASSIST_STORAGE_KEY,state.lyricAssistEnabled?'1':'0');}catch(error){}
      updateLyricsToolsUI();
      refreshLyricPresentation();
    }

    async function refreshLyricPresentation(){
      if(!dom.lyricsInner)return;
      const token=++state.lyricPresentationToken;
      const nodes=Array.from(dom.lyricsInner.querySelectorAll('.lyrics-line[data-index]'));
      updateLyricsToolsUI();

      nodes.forEach(node=>{
        const assist=node.querySelector('.lyrics-line-assist');
        if(assist)assist.hidden=!state.lyricAssistEnabled;
      });

      if(state.lyricAssistEnabled&&state.lyricLines.some(line=>containsChinese(line?.text))){
        await ensurePinyinPro();
        if(token!==state.lyricPresentationToken)return;
      }

      await Promise.all(nodes.map(async node=>{
        const index=Number(node.dataset.index);
        const line=state.lyricLines[index];
        if(!line)return;
        const main=node.querySelector('.lyrics-line-main');
        const assist=node.querySelector('.lyrics-line-assist');
        const original=String(line.text||'');
        const converted=await convertLyricScript(original);
        if(token!==state.lyricPresentationToken||!node.isConnected)return;
        if(main)main.textContent=converted;
        if(!assist)return;

        assist.classList.remove('is-loading');
        assist.removeAttribute('data-assist-kind');
        if(!state.lyricAssistEnabled){
          assist.hidden=true;
          assist.textContent='';
          return;
        }
        assist.hidden=false;
        if(line.translation){
          const convertedTranslation=await convertLyricScript(normalizeTranslationText(line.translation));
          if(token!==state.lyricPresentationToken||!node.isConnected)return;
          assist.dataset.assistKind='translation';
          assist.textContent=convertedTranslation;
          return;
        }
        if(containsChinese(original)){
          const py=getChinesePinyin(original);
          assist.dataset.assistKind='pinyin';
          assist.textContent=py||t('pinyinUnavailable');
          return;
        }
        if(looksEnglish(original)){
          assist.dataset.assistKind='translation';
          assist.textContent=t('translationLoading');
          assist.classList.add('is-loading');
          try{
            const translated=await translateEnglishLine(original);
            const convertedTranslation=await convertLyricScript(translated);
            if(token!==state.lyricPresentationToken||!node.isConnected)return;
            assist.classList.remove('is-loading');
            assist.textContent=convertedTranslation||t('translationUnavailable');
          }catch(error){
            if(token!==state.lyricPresentationToken||!node.isConnected)return;
            assist.classList.remove('is-loading');
            assist.textContent=t('translationUnavailable');
          }
          return;
        }
        assist.hidden=true;
        assist.textContent='';
      }));
    }

    // ===================== 歌词处理 =====================

    function normalizeLyricText(raw){
      if(raw==null)return '';
      if(typeof raw==='object'){
        raw = raw.lrc || raw.lyric || raw.song_lyric || raw.text || raw.data || '';
      }
      let txt=String(raw);
      if(!txt.includes('\n') && txt.includes('\\n')) txt=txt.replace(/\\n/g,'\n');
      txt=txt.replace(/^\uFEFF/,'').replace(/<br\s*\/?>/gi,'\n');
      const decoder=document.createElement('textarea');
      decoder.innerHTML=txt;
      return decoder.value;
    }

    function parseLRC(raw){
      const txt=normalizeLyricText(raw);
      if(!txt)return[];
      const lines=txt.split(/\r?\n/);
      const timeReg=/\[(\d{1,3}):(\d{1,2})(?:[\.:](\d{1,3}))?\]/g;
      const metaReg=/^\[(?:ar|ti|al|by|offset|re|ve|length):/i;
      const out=[];
      const plain=[];

      for(const rawLine of lines){
        const line=rawLine.trim();
        if(!line || metaReg.test(line))continue;

        const stamps=[];
        let match;
        timeReg.lastIndex=0;
        while((match=timeReg.exec(line))!==null){
          const min=parseInt(match[1],10)||0;
          const sec=parseInt(match[2],10)||0;
          const fraction=match[3]||'';
          const ms=fraction ? parseInt(fraction.padEnd(3,'0').slice(0,3),10) : 0;
          stamps.push(min*60+sec+ms/1000);
        }

        const lyricText=line.replace(timeReg,'').replace(/^\[[^\]]+\]\s*/,'').trim();
        const bilingual=splitBilingualLyricText(lyricText);
        if(stamps.length){
          if(!bilingual.text)continue;
          stamps.forEach(time=>out.push({time,text:bilingual.text,translation:bilingual.translation}));
        }else if(bilingual.text){
          plain.push({time:null,text:bilingual.text,translation:bilingual.translation});
        }
      }

      out.sort((a,b)=>a.time-b.time);
      // 有时间轴时保持同步歌词；没有时间轴时也完整显示纯文本歌词。
      return out.length ? out : plain;
    }

    function renderLyrics(){
      const wrap=dom.lyricsInner;
      if(!wrap)return;
      const track=state.currentTrack;
      const trackUid=track?.uid||null;
      const preserveScroll=state.renderedLyricTrackUid===trackUid;
      const previousScroll=dom.lyricsContainer?.scrollTop||0;
      const fragment=document.createDocumentFragment();
      state.currentLyricIndex=-1;

      const titleLine=document.createElement('div');
      titleLine.className='lyrics-title-line';
      if(track){
        titleLine.textContent=(track.title||'')+(track.artist?' - '+track.artist:'');
      }
      fragment.appendChild(titleLine);

      const arr=state.lyricLines;
      if(!arr.length){
        const empty=document.createElement('div');
        empty.id='lyrics-empty';
        empty.className='lyrics-empty';
        empty.textContent=t('lyricsEmpty');
        fragment.appendChild(empty);
        wrap.replaceChildren(fragment);
        state.renderedLyricTrackUid=trackUid;
        updateLyricsToolsUI();
        if(dom.lyricsContainer)dom.lyricsContainer.scrollTop=preserveScroll?previousScroll:0;
        return;
      }

      arr.forEach((ln,i)=>{
        const div=document.createElement('div');
        div.className='lyrics-line';
        div.dataset.index=i;

        const timed=Number.isFinite(ln.time);
        if(timed){
          div.classList.add('is-seekable');
          div.dataset.time=String(ln.time);
          div.tabIndex=0;
          div.setAttribute('role','button');
          div.setAttribute('aria-label',t('lyricSeekHint')+' · '+ln.text);
          div.title=t('lyricSeekHint');
        }

        const main=document.createElement('span');
        main.className='lyrics-line-main';
        main.dir='auto';
        main.textContent=ln.text;
        const assist=document.createElement('span');
        assist.className='lyrics-line-assist';
        assist.dir='auto';
        assist.hidden=!state.lyricAssistEnabled;
        div.appendChild(main);
        div.appendChild(assist);
        fragment.appendChild(div);
      });

      wrap.replaceChildren(fragment);
      state.renderedLyricTrackUid=trackUid;
      if(dom.lyricsContainer)dom.lyricsContainer.scrollTop=preserveScroll?previousScroll:0;
      refreshLyricPresentation();
    }

    let lyricAutoFollowPausedUntil=0;

    function pauseLyricsAutoFollow(ms=6000){
      lyricAutoFollowPausedUntil=Date.now()+ms;
    }

    function updateLyricsHighlight(time){
      const lines=state.lyricLines;
      if(!lines.length)return;

      const timed=[];
      lines.forEach((line,index)=>{
        if(Number.isFinite(line.time))timed.push({line,index});
      });
      if(!timed.length)return;

      let timedPos=timed.findIndex((entry,i)=>{
        const next=timed[i+1];
        if(!next)return time>=entry.line.time-0.05;
        return time>=entry.line.time-0.05 && time<next.line.time-0.05;
      });
      if(timedPos<0)return;

      const idx=timed[timedPos].index;
      if(idx===state.currentLyricIndex)return;
      state.currentLyricIndex=idx;
      syncSystemMediaMetadata(state.currentTrack, lines[idx]?.text || '');
      const wrap=dom.lyricsInner;
      wrap.querySelectorAll('.lyrics-line.active').forEach(el=>el.classList.remove('active'));
      const act=wrap.querySelector(`.lyrics-line[data-index="${idx}"]`);
      if(act){
        act.classList.add('active');
        if(Date.now()>=lyricAutoFollowPausedUntil){
          const box=dom.lyricsContainer;
          const target=Math.max(0,act.offsetTop-(box.clientHeight-act.offsetHeight)/2);
          box.scrollTo({top:target,behavior:'smooth'});
        }
      }
    }

    function isLyricsFullscreen(){
      return document.body.classList.contains('lyrics-fullscreen');
    }

    function isMobileImmersiveLyrics(){
      return document.body.classList.contains('mobile-immersive-lyrics');
    }

    function nativeFullscreenElement(){
      return document.fullscreenElement || document.webkitFullscreenElement || null;
    }

    async function requestNativePlayerFullscreen(){
      if(!isMobilePlayerUI())return false;
      const target=dom.playerPanel || document.documentElement;
      const request=target?.requestFullscreen || target?.webkitRequestFullscreen;
      if(typeof request!=='function')return false;
      try{
        await request.call(target);
        return true;
      }catch(error){
        // Fullscreen commonly requires a direct user gesture. CSS immersive mode still works.
        console.debug('native fullscreen unavailable for this gesture',error);
        return false;
      }
    }

    async function exitNativePlayerFullscreen(){
      if(!nativeFullscreenElement())return;
      const exit=document.exitFullscreen || document.webkitExitFullscreen;
      if(typeof exit!=='function')return;
      try{await exit.call(document);}catch(error){console.debug('fullscreen exit failed',error);}
    }

    function updateLyricsFullscreenUI(){
      if(!dom.lyricsFullBtn)return;
      const expanded=isLyricsFullscreen();
      const label=t(expanded?'lyricsExitFullscreen':'lyricsFullscreen');
      dom.lyricsFullBtn.textContent=expanded?'✕':'⛶';
      dom.lyricsFullBtn.title=label;
      dom.lyricsFullBtn.setAttribute('aria-label',label);
      dom.lyricsFullBtn.setAttribute('aria-expanded',expanded?'true':'false');
    }

    let lyricsScrollBeforeFullscreen=0;

    function setMobileImmersiveLyrics(enabled){
      const active=Boolean(enabled) && isMobilePlayerUI();
      if(active){
        activateMobilePanel('player');
        document.body.classList.add('lyrics-fullscreen','mobile-immersive-lyrics');
      }else{
        document.body.classList.remove('mobile-immersive-lyrics');
      }
      updateLyricsFullscreenUI();
    }

    function setLyricsFullscreen(expanded,{requestNative=false,immersive=false}={}){
      const shouldExpand=Boolean(expanded);
      if(shouldExpand){
        activateMobilePanel('player');
        lyricsScrollBeforeFullscreen=dom.lyricsContainer?.scrollTop||0;
        if(dom.lyricsInner&&!dom.lyricsInner.children.length)renderLyrics();
      }
      document.body.classList.toggle('lyrics-fullscreen',shouldExpand);
      document.body.classList.toggle('mobile-immersive-lyrics',shouldExpand && immersive && isMobilePlayerUI());
      updateLyricsFullscreenUI();
      if(shouldExpand && requestNative)requestNativePlayerFullscreen();
      if(!shouldExpand)exitNativePlayerFullscreen();
      requestAnimationFrame(()=>{
        if(!dom.lyricsContainer)return;
        if(shouldExpand){
          const active=dom.lyricsInner.querySelector('.lyrics-line.active');
          dom.lyricsContainer.scrollTop=active
            ? Math.max(0,active.offsetTop-(dom.lyricsContainer.clientHeight-active.offsetHeight)/2)
            : Math.max(0,lyricsScrollBeforeFullscreen);
        }else{
          dom.lyricsContainer.scrollTop=Math.max(0,lyricsScrollBeforeFullscreen);
        }
      });
    }

    function disarmMobileImmersiveLyrics(){
      mobileImmersivePlaybackStartedAt=0;
      mobileImmersiveCanAutoEnter=false;
      mobileImmersivePlaybackReady=false;
      mobileImmersiveEnteredUid=null;
    }

    function armMobileImmersiveLyrics(){
      // Only arm after the audio element has actually entered the `playing` state.
      // This prevents timeupdate events from the previous track / loading phase
      // from opening immersive lyrics while a newly selected song is still loading.
      if(!state.currentTrack || dom.audio.paused || dom.audio.ended || dom.audio.seeking || dom.audio.readyState<3){
        disarmMobileImmersiveLyrics();
        return;
      }
      mobileImmersivePlaybackStartedAt=performance.now();
      mobileImmersiveCanAutoEnter=true;
      mobileImmersivePlaybackReady=true;
      mobileImmersiveEnteredUid=null;
    }

    function maybeEnterMobileImmersiveLyrics(){
      if(!state.isPlaying || !state.currentTrack || !isMobilePlayerUI())return;
      if(!mobileImmersivePlaybackReady || dom.audio.paused || dom.audio.ended || dom.audio.seeking || dom.audio.readyState<3)return;
      if(isMobileImmersiveLyrics() || !mobileImmersiveCanAutoEnter)return;
      if(!mobileImmersivePlaybackStartedAt)return;
      if(performance.now()-mobileImmersivePlaybackStartedAt<5000)return;
      mobileImmersiveEnteredUid=state.currentTrack.uid;
      mobileImmersiveCanAutoEnter=false;
      setLyricsFullscreen(true,{immersive:true});
    }

    function getCurrentSystemLyric(){
      const line=state.lyricLines[state.currentLyricIndex];
      return String(line?.text||'').trim();
    }

    function syncSystemMediaMetadata(track=state.currentTrack,currentLyric=getCurrentSystemLyric()){
      if(!track || !('mediaSession' in navigator) || typeof window.MediaMetadata!=='function')return;
      const album=String(track.album||'').trim();
      const lyric=String(currentLyric||'').replace(/\s+/g,' ').trim();
      const albumAndLyric=lyric ? [album,lyric].filter(Boolean).join(' · ') : album;
      const artwork=[];
      const cover=cyNormalizeMediaUrl(track.cover||'','image');
      if(cover)artwork.push({src:cover});
      try{
        navigator.mediaSession.metadata=new MediaMetadata({
          title:track.title||'Nie Music',
          artist:cyNormalizeArtist(track.artist)||'',
          album:albumAndLyric,
          artwork
        });
      }catch(error){console.debug('Media Session metadata failed',error);}
    }

    function syncSystemMediaPlaybackState(){
      if(!('mediaSession' in navigator))return;
      try{navigator.mediaSession.playbackState=state.isPlaying?'playing':'paused';}catch(error){}
    }

    function syncSystemMediaPosition(force=false){
      if(!('mediaSession' in navigator) || typeof navigator.mediaSession.setPositionState!=='function' || !dom.audio)return;
      const now=Date.now();
      if(!force && now-mediaPositionUpdateAt<1000)return;
      const duration=dom.audio.duration;
      const position=dom.audio.currentTime;
      if(!Number.isFinite(duration)||duration<=0||!Number.isFinite(position))return;
      mediaPositionUpdateAt=now;
      try{
        navigator.mediaSession.setPositionState({
          duration,
          playbackRate:dom.audio.playbackRate||1,
          position:Math.max(0,Math.min(duration,position))
        });
      }catch(error){}
    }

    function setupSystemMediaControls(){
      if(!('mediaSession' in navigator))return;
      const handlers={
        play:()=>dom.audio?.play().catch(()=>{}),
        pause:()=>dom.audio?.pause(),
        previoustrack:()=>playNext('prev'),
        nexttrack:()=>playNext('next'),
        seekbackward:(details)=>{if(dom.audio)dom.audio.currentTime=Math.max(0,(dom.audio.currentTime||0)-(details.seekOffset||10));},
        seekforward:(details)=>{if(dom.audio)dom.audio.currentTime=Math.min(dom.audio.duration||Infinity,(dom.audio.currentTime||0)+(details.seekOffset||10));},
        seekto:(details)=>{
          if(!dom.audio || !Number.isFinite(details.seekTime))return;
          dom.audio.currentTime=Math.max(0,Math.min(dom.audio.duration||details.seekTime,details.seekTime));
          syncSystemMediaPosition(true);
        },
        stop:()=>{if(dom.audio){dom.audio.pause();dom.audio.currentTime=0;}}
      };
      Object.entries(handlers).forEach(([action,handler])=>{
        try{navigator.mediaSession.setActionHandler(action,handler);}catch(error){/* unsupported action */}
      });
    }

    async function requestPlaybackWakeLock(){
      if(!state.isPlaying || document.visibilityState!=='visible' || !('wakeLock' in navigator))return;
      try{
        if(wakeLockSentinel&&!wakeLockSentinel.released)return;
        wakeLockSentinel=await navigator.wakeLock.request('screen');
        wakeLockSentinel.addEventListener('release',()=>{wakeLockSentinel=null;},{once:true});
      }catch(error){console.debug('screen wake lock unavailable',error);}
    }

    async function releasePlaybackWakeLock(){
      const lock=wakeLockSentinel;
      wakeLockSentinel=null;
      if(lock&&!lock.released){try{await lock.release();}catch(error){}}
    }

    function setupPlaybackResilience(){
      document.addEventListener('visibilitychange',()=>{
        if(document.visibilityState==='visible'&&state.isPlaying){
          requestPlaybackWakeLock();
          syncSystemMediaMetadata();
          syncSystemMediaPlaybackState();
          syncSystemMediaPosition(true);
        }
      });
      window.addEventListener('pageshow',()=>{
        if(state.currentTrack){
          syncSystemMediaMetadata();
          syncSystemMediaPlaybackState();
          syncSystemMediaPosition(true);
        }
      });
    }

    function getTrackSourceLabel(track){
      const source=track?.source;
      const key=source==='netease'?'sourceNetease':source==='qq'?'sourceQQ':source==='joox'?'sourceJoox':'sourceKuwo';
      return source?t(key):'—';
    }

    function updateAlbumInfoModal(){
      const track=state.currentTrack;
      if(!track||!dom.albumInfoModal)return;
      dom.albumInfoTitle.textContent=track.title||'—';
      dom.albumInfoArtist.textContent=cyNormalizeArtist(track.artist)||'—';
      dom.albumInfoAlbum.textContent=track.album||'—';
      dom.albumInfoSource.textContent=getTrackSourceLabel(track);
      dom.albumInfoQuality.textContent=track.qualityLabel||'—';
      const cover=dom.coverImg?.currentSrc||dom.coverImg?.src||track.cover||'';
      if(cover){
        dom.albumInfoCover.src=cover;
        dom.albumInfoCover.style.visibility='visible';
      }else{
        dom.albumInfoCover.removeAttribute('src');
        dom.albumInfoCover.style.visibility='hidden';
      }
    }

    function openAlbumInfoModal(){
      if(!state.currentTrack){showToast(t('toastNoCurrentTrack'));return;}
      updateAlbumInfoModal();
      dom.albumInfoModal.classList.add('show');
      dom.albumInfoModal.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>dom.albumInfoClose?.focus({preventScroll:true}));
    }

    function closeAlbumInfoModal(){
      if(!dom.albumInfoModal)return;
      dom.albumInfoModal.classList.remove('show');
      dom.albumInfoModal.setAttribute('aria-hidden','true');
      dom.coverWrapper?.focus({preventScroll:true});
    }

    // ===================== 收藏 / 播放 =====================

    function isFavorite(track){
      if(!track)return false;
      return state.favorites.some(x=>x.uid===track.uid);
    }
    function updateMainFavButton(){
      const tr=state.currentTrack;
      const active=isFavorite(tr);
      dom.favBtn.classList.toggle('btn-fav-active',active);
      dom.favBtn.textContent=active?'♥':'♡';
    }

    async function playTrack(track,context){
      if(!track)return;
      cancelPendingAIReview();
      if(document.body.classList.contains('ai-review-open'))setAIReviewOpen(false,{focus:false});
      const requestToken=++state.playRequestToken;
      // Stop the previous track immediately. While the new track metadata/audio URL
      // is being resolved, immersive lyrics must stay disarmed.
      disarmMobileImmersiveLyrics();
      if(!dom.audio.paused)dom.audio.pause();
      state.currentTrack=track;
      if(isMobileImmersiveLyrics())setLyricsFullscreen(false);
      state.playContext=context||state.playContext;
      renderQueue();
      updateAIReviewUI();

      const applyUI=()=>{
        dom.trackTitle.textContent=track.title||'';
        dom.trackArtist.textContent=cyNormalizeArtist(track.artist)||'正在匹配歌曲信息…';

        const sk=track.source;
        const key=sk==='netease'?'sourceNetease':
                  sk==='qq'?'sourceQQ':
                  sk==='joox'?'sourceJoox':'sourceKuwo';
        dom.trackSourcePill.style.display='inline-flex';
        dom.trackSourcePill.className='source-pill source-'+sk;
        dom.trackSourcePill.innerHTML='';
        const dot=document.createElement('span');
        dot.className='source-dot '+sk;
        const txt=document.createElement('span');
        txt.textContent=t(key);
        dom.trackSourcePill.appendChild(dot);
        dom.trackSourcePill.appendChild(txt);

        // 显示音质：LOSSLESS 或 320K（根据 qualityLabel）
        if (track.qualityLabel) {
          dom.trackQualityPill.style.display = 'inline-block';
          dom.trackQualityPill.textContent = track.qualityLabel;
        } else {
          dom.trackQualityPill.style.display = 'none';
        }

        track.cover=cyNormalizeMediaUrl(track.cover,'image');
        track.audioUrl=cyNormalizeMediaUrl(track.audioUrl,'audio');
        if(track.cover){
          cyLoadImageWithFallback(dom.coverImg,track.cover,
            (resolvedUrl)=>{
              track.cover=resolvedUrl;
              dom.coverImg.style.display='block';
              dom.coverPlaceholder.style.display='none';
              updateThemeFromTrack(track);
              syncSystemMediaMetadata(track);
            },
            ()=>{
              if(dom.coverImg.dataset.coverRequest){
                dom.coverImg.style.display='none';
                dom.coverPlaceholder.style.display='flex';
              }
            },track);
        }else{
          dom.coverImg.removeAttribute('src');
          dom.coverImg.style.display='none';
          dom.coverPlaceholder.style.display='flex';
        }
        updateThemeFromTrack(track);
        syncSystemMediaMetadata(track);
        if(dom.albumInfoModal?.classList.contains('show'))updateAlbumInfoModal();
      };

      applyUI();

      state.lyricLines = track.lrc ? parseLRC(track.lrc) : [];
      renderLyrics();
      updateMainFavButton();

      try{
        await ensureTrackDetails(track);
        if(requestToken!==state.playRequestToken||state.currentTrack?.uid!==track.uid)return;
        applyUI();
        state.lyricLines = track.lrc ? parseLRC(track.lrc) : [];
        renderLyrics();
        if(!track.audioUrl){showToast(t('toastPlayError'));return;}
        track.audioUrl=cyNormalizeMediaUrl(track.audioUrl,'audio');
        if(!track.audioUrl){showToast(t('toastPlayError'));return;}
        dom.audio.src=track.audioUrl;
        await dom.audio.play();
        state.isPlaying=true;
        setPlayButtonState(true);
      }catch(e){
        if(requestToken!==state.playRequestToken)return;
        console.error(e);
        showToast(t('toastPlayError'));
      }

      renderMiniSearchList();
      renderPlaylistList();
    }

    function getActiveList(){
      const tp=state.playContext.type;
      if(tp==='results'){
        let list=getInterleavedSearchList();
        if(!list.length && state.searchResults.length){
          list=[...state.searchResults];
        }
        return list;
      }
      if(tp==='hot')return state.hotTracks;
      if(tp==='favorites')return state.favorites;
      if(tp==='playlist'){
        const pl=state.playlists.find(p=>p.id===state.playContext.playlistId);
        return pl?pl.tracks:[];
      }
      return getInterleavedSearchList();
    }

    function playFromList(type,index,plId){
      let list;
      if(type==='results') list=getInterleavedSearchList();
      else if(type==='hot') list=state.hotTracks;
      else if(type==='favorites') list=state.favorites;
      else{
        const pl=state.playlists.find(p=>p.id===plId);
        list=pl?pl.tracks:[];
      }
      if(!list.length){
        if(type!=='results')showToast(t('toastPlaylistEmpty'));
        return;
      }
      if(index<0)index=list.length-1;
      if(index>=list.length)index=0;
      state.playContext={type,index,playlistId:plId||null};
      playTrack(list[index],state.playContext);
      if(window.matchMedia('(max-width: 860px)').matches){
        activateMobilePanel('player');
      }
    }

    function playNext(direction){
      if(direction==='next'&&state.upNext.length){
        const queued=state.upNext.shift();
        playTrack(queued,state.playContext);
        return;
      }
      const list=getActiveList(); if(!list.length)return;
      let idx=state.playContext.index ?? -1;
      if(idx<0||idx>=list.length)idx=0;

      if(state.playMode==='single'){
        dom.audio.currentTime=0;
        dom.audio.play().catch(()=>{});
        return;
      }
      if(state.playMode==='shuffle'){
        if(list.length===1){
          idx=0;
        }else{
          let newIdx;
          do{ newIdx=Math.floor(Math.random()*list.length); }while(newIdx===idx);
          idx=newIdx;
        }
      }else{
        idx = (idx + (direction==='prev'?-1:1) + list.length) % list.length;
      }
      playFromList(state.playContext.type,idx,state.playContext.playlistId);
    }

    function setPlayButtonState(isPlaying){
      if(!dom.playBtn)return;
      dom.playBtn.classList.toggle('is-playing',Boolean(isPlaying));
      dom.playBtn.setAttribute('aria-label',isPlaying?'暂停':'播放');
      dom.playBtn.title=(isPlaying?'暂停':'播放')+' (Space)';
    }

    function togglePlayPause(){
      if(!dom.audio.src)return;
      if(state.isPlaying)dom.audio.pause();
      else dom.audio.play().catch(e=>console.error(e));
    }

    function toggleFavoriteCurrent(){
      const tr=state.currentTrack; if(!tr)return;
      const i=state.favorites.findIndex(x=>x.uid===tr.uid);
      if(i>=0){state.favorites.splice(i,1);showToast(t('toastRemovedFavorite'));}
      else{state.favorites.push(tr);showToast(t('toastAddedFavorite'));}
      saveLibraryToStorage();
      updateMainFavButton();
      renderPlaylistList();
    }

    function queueTrackNext(track){
      if(!track)return;
      state.upNext=state.upNext.filter(item=>item.uid!==track.uid);
      state.upNext.unshift(track);
      renderQueue();
      showToast(`${t('toastQueuedNext')} · ${track.title||'Unknown'}`);
    }

    function setQueueOpen(open){
      const expanded=Boolean(open);
      if(expanded&&document.body.classList.contains('ai-review-open'))setAIReviewOpen(false);
      document.body.classList.toggle('queue-open',expanded);
      dom.queueDrawer?.setAttribute('aria-hidden',expanded?'false':'true');
      dom.queueToggleBtn?.setAttribute('aria-expanded',expanded?'true':'false');
      if(expanded){
        renderQueue();
        requestAnimationFrame(()=>dom.queueCloseBtn?.focus({preventScroll:true}));
      }
    }

    function appendQueueSectionLabel(text){
      const label=document.createElement('div');
      label.className='queue-section-label';
      label.textContent=text;
      dom.queueList.appendChild(label);
    }

    function appendQueueItem(track,options={}){
      const item=document.createElement('article');
      item.className='queue-item';
      const cover=document.createElement('img');
      cover.className='queue-cover';cover.alt='';
      cyLoadImageWithFallback(cover,track.cover,()=>{},()=>cover.classList.add('is-empty'),track);
      const meta=document.createElement('div');meta.className='queue-meta';
      const title=document.createElement('strong');title.textContent=track.title||'Unknown';
      const artist=document.createElement('span');artist.textContent=cyNormalizeArtist(track.artist)||getTrackSourceLabel(track);
      meta.appendChild(title);meta.appendChild(artist);
      const actions=document.createElement('div');actions.className='queue-item-actions';
      const play=document.createElement('button');
      play.type='button';play.className='queue-item-btn queue-play-btn';play.textContent='▶';
      play.title=t('queuePlay');play.setAttribute('aria-label',t('queuePlay'));
      play.addEventListener('click',()=>{
        if(Number.isInteger(options.queueIndex)){
          const selected=state.upNext.splice(options.queueIndex,1)[0];
          renderQueue();
          if(selected)playTrack(selected,state.playContext);
        }else if(Number.isInteger(options.contextIndex)){
          playFromList(state.playContext.type,options.contextIndex,state.playContext.playlistId);
        }
      });
      actions.appendChild(play);
      if(Number.isInteger(options.queueIndex)){
        const remove=document.createElement('button');
        remove.type='button';remove.className='queue-item-btn';remove.textContent='×';
        remove.title=t('queueRemove');remove.setAttribute('aria-label',t('queueRemove'));
        remove.addEventListener('click',()=>{state.upNext.splice(options.queueIndex,1);renderQueue();});
        actions.appendChild(remove);
      }
      item.appendChild(cover);item.appendChild(meta);item.appendChild(actions);
      dom.queueList.appendChild(item);
    }

    function renderQueue(){
      if(!dom.queueList)return;
      dom.queueList.innerHTML='';
      const queued=state.upNext.slice();
      if(dom.queueCount){dom.queueCount.textContent=String(Math.min(queued.length,99));dom.queueCount.hidden=!queued.length;}
      if(dom.queueClearBtn)dom.queueClearBtn.disabled=!queued.length;
      if(queued.length){
        appendQueueSectionLabel(t('queueUpNext'));
        queued.forEach((track,index)=>appendQueueItem(track,{queueIndex:index}));
      }

      const list=getActiveList();
      const rawIndex=Number(state.playContext.index);
      const start=Number.isInteger(rawIndex)?rawIndex:-1;
      const queuedIds=new Set(queued.map(track=>track.uid));
      const following=list.map((track,index)=>({track,index}))
        .filter(entry=>entry.index>start&&entry.track.uid!==state.currentTrack?.uid&&!queuedIds.has(entry.track.uid))
        .slice(0,60);
      if(following.length){
        appendQueueSectionLabel(t('queueFromCurrent'));
        following.forEach(entry=>appendQueueItem(entry.track,{contextIndex:entry.index}));
      }
      if(!queued.length&&!following.length){
        const empty=document.createElement('div');empty.className='queue-empty';empty.textContent=t('queueEmpty');
        dom.queueList.appendChild(empty);
      }
    }

    function loadAIReviewCache(){
      try{
        const saved=JSON.parse(localStorage.getItem(AI_REVIEW_CACHE_KEY)||'{}');
        state.aiReviewCache=saved&&typeof saved==='object'?saved:{};
        const storedModel=localStorage.getItem('nie-music-ai-review-model');
        if(storedModel==='deepseek-v4-flash'||storedModel==='deepseek-v4-pro')state.aiReviewModel=storedModel;
      }catch(error){state.aiReviewCache={};}
    }

    function saveAIReviewCache(){
      try{
        const entries=Object.entries(state.aiReviewCache).slice(-36);
        state.aiReviewCache=Object.fromEntries(entries);
        localStorage.setItem(AI_REVIEW_CACHE_KEY,JSON.stringify(state.aiReviewCache));
      }catch(error){}
    }

    function aiReviewCacheKey(track=state.currentTrack,model=state.aiReviewModel){
      if(!track)return '';
      return `${model}|${track.uid||`${track.source||''}:${track.id||''}:${track.title||''}:${track.artist||''}`}`;
    }

    function getLyricsExcerpt(){
      const parts=[];
      for(const line of state.lyricLines.slice(0,24)){
        const main=String(line?.text||'').trim();
        if(!main)continue;
        parts.push(main);
        const translation=String(line?.translation||'').trim();
        if(translation)parts.push(translation);
        if(parts.join('\n').length>=1000)break;
      }
      return parts.join('\n').slice(0,1000);
    }

    function getTrackHotComment(track){
      if(!track)return '';
      let sourceTrack=track.hotComment?track:null;
      if(!sourceTrack&&currentHotCommentTrack){
        const sameTitle=cyMatchText(currentHotCommentTrack.title)===cyMatchText(track.title);
        const sourceArtist=cyMatchText(currentHotCommentTrack.artist);
        const sameArtist=!sourceArtist||cyMatchText(track.artist).includes(sourceArtist);
        if(sameTitle&&sameArtist)sourceTrack=currentHotCommentTrack;
      }
      if(!sourceTrack?.hotComment)return '';
      const author=String(sourceTrack.hotCommentUser||'').trim();
      const likes=Number(sourceTrack.hotCommentLiked)||0;
      const suffix=likes?`（${likes.toLocaleString()} 人赞同）`:'';
      return `${author?`${author}：`:''}${sourceTrack.hotComment}${suffix}`.slice(0,320);
    }

    function buildCulturalContext(track){
      if(!track)return '';
      const identity=[track.title,track.artist,track.album].filter(Boolean).join(' · ');
      const hints=[];
      if(/方大同|薛凯琪/.test(identity)){
        hints.push('方大同与薛凯琪长期公开的音乐合作、舞台互动与友谊常被歌迷共同提起；只可使用公开音乐记忆，不推断私人关系。');
      }
      if(/周杰伦|蔡依林/.test(identity)){
        hints.push('周杰伦与蔡依林在华语流行黄金年代留下公开合作与舞台记忆；只在歌曲气质契合时轻点，不写私人关系。');
      }
      if(/不能说的秘密|路小雨|secret/i.test(identity)){
        hints.push('电影《不能说的秘密》里的时间、琴房与路小雨属于虚构叙事语境；只有当前曲目直接相关时才可使用。');
      }
      return hints.join(' ').slice(0,600);
    }

    function renderAIReviewMessage(text,{error=false,loading=false,review=false}={}){
      if(!dom.aiReviewContent)return;
      dom.aiReviewContent.classList.toggle('is-error',error);
      dom.aiReviewContent.classList.toggle('is-loading',loading);
      dom.aiReviewContent.classList.toggle('has-review',review);
      dom.aiReviewContent.setAttribute('aria-busy',loading?'true':'false');
      dom.aiReviewContent.replaceChildren();
      const node=document.createElement('div');
      node.className=review?'ai-review-copy':'ai-review-empty';
      node.textContent=text;
      dom.aiReviewContent.appendChild(node);
    }

    function updateAIReviewUI(){
      if(!dom.aiReviewContent)return;
      const track=state.currentTrack;
      document.querySelectorAll('.ai-model-btn').forEach(btn=>{
        const active=btn.dataset.model===state.aiReviewModel;
        btn.classList.toggle('active',active);
        btn.setAttribute('aria-pressed',active?'true':'false');
      });
      if(dom.aiReviewToggleBtn){
        dom.aiReviewToggleBtn.title=t('aiReviewTitle');
        dom.aiReviewToggleBtn.setAttribute('aria-label',t('aiReviewTitle'));
      }
      if(dom.aiReviewTrackTitle)dom.aiReviewTrackTitle.textContent=track?.title||t('aiReviewNoTrack');
      if(dom.aiReviewTrackMeta)dom.aiReviewTrackMeta.textContent=track
        ? [cyNormalizeArtist(track.artist),track.album].filter(Boolean).join(' · ')||getTrackSourceLabel(track)
        : t('aiReviewChooseTrack');
      if(dom.aiReviewCover){
        const cover=track?.cover||'';
        if(cover){dom.aiReviewCover.src=cover;dom.aiReviewCover.style.visibility='visible';}
        else{dom.aiReviewCover.removeAttribute('src');dom.aiReviewCover.style.visibility='hidden';}
      }
      const key=aiReviewCacheKey();
      const cached=key?state.aiReviewCache[key]:null;
      const loading=Boolean(key&&state.aiReviewLoadingKey===key);
      dom.aiReviewToggleBtn?.classList.toggle('is-listening',loading);
      dom.aiReviewToggleBtn?.classList.toggle('has-review',Boolean(cached));
      if(dom.aiReviewStatus)dom.aiReviewStatus.textContent=loading
        ? t('aiReviewLoading')
        : cached?t(cached.edgeCached?'aiReviewCached':'aiReviewReady'):t('aiReviewPrivacy');
      if(loading)renderAIReviewMessage(t('aiReviewLoading'),{loading:true});
      else if(cached?.review)renderAIReviewMessage(cached.review,{review:true});
      else renderAIReviewMessage(t('aiReviewEmpty'));
    }

    function setAIReviewModel(model){
      if(model!=='deepseek-v4-flash'&&model!=='deepseek-v4-pro')return;
      state.aiReviewModel=model;
      try{localStorage.setItem('nie-music-ai-review-model',model);}catch(error){}
      updateAIReviewUI();
      if(state.isPlaying&&state.currentTrack)scheduleAIReview(state.currentTrack,{delay:350});
    }

    function cancelPendingAIReview(){
      if(state.aiReviewAutoTimer){clearTimeout(state.aiReviewAutoTimer);state.aiReviewAutoTimer=0;}
      state.aiReviewRequestToken+=1;
      state.aiReviewLoadingKey='';
    }

    function scheduleAIReview(track=state.currentTrack,{delay=3000}={}){
      if(!track)return;
      const key=aiReviewCacheKey(track);
      if(!key)return;
      cancelPendingAIReview();
      const cached=state.aiReviewCache[key];
      state.aiReviewLoadingKey=cached?'':key;
      updateAIReviewUI();
      state.aiReviewAutoTimer=setTimeout(()=>{
        state.aiReviewAutoTimer=0;
        const stillCurrent=state.currentTrack===track&&aiReviewCacheKey()===key;
        if(!state.isPlaying||!stillCurrent){
          if(state.aiReviewLoadingKey===key)state.aiReviewLoadingKey='';
          updateAIReviewUI();
          return;
        }
        if(state.aiReviewCache[key]){
          updateAIReviewUI();
          setAIReviewOpen(true,{focus:false,autoClose:15000});
          return;
        }
        generateAIReview(track,key);
      },delay);
    }

    function armAIReviewAutoClose(delay=state.aiReviewAutoCloseDelay){
      if(state.aiReviewAutoCloseTimer){clearTimeout(state.aiReviewAutoCloseTimer);state.aiReviewAutoCloseTimer=0;}
      if(!document.body.classList.contains('ai-review-open')||delay<=0)return;
      state.aiReviewAutoCloseDelay=delay;
      state.aiReviewAutoCloseTimer=setTimeout(()=>setAIReviewOpen(false,{focus:false}),delay);
    }

    function setAIReviewOpen(open,{focus=false,autoClose=15000}={}){
      const expanded=Boolean(open);
      if(state.aiReviewAutoCloseTimer){clearTimeout(state.aiReviewAutoCloseTimer);state.aiReviewAutoCloseTimer=0;}
      if(!expanded)state.aiReviewAutoCloseDelay=0;
      if(expanded&&document.body.classList.contains('queue-open'))setQueueOpen(false);
      if(!expanded&&focus&&dom.aiReviewDrawer?.contains(document.activeElement))dom.aiReviewToggleBtn?.focus({preventScroll:true});
      document.body.classList.toggle('ai-review-open',expanded);
      dom.aiReviewDrawer?.setAttribute('aria-hidden',expanded?'false':'true');
      if(dom.aiReviewDrawer)dom.aiReviewDrawer.inert=!expanded;
      dom.aiReviewToggleBtn?.setAttribute('aria-expanded',expanded?'true':'false');
      if(expanded){
        updateAIReviewUI();
        if(focus)requestAnimationFrame(()=>dom.aiReviewCloseBtn?.focus({preventScroll:true}));
        armAIReviewAutoClose(autoClose);
      }
    }

    async function generateAIReview(track=state.currentTrack,expectedKey=aiReviewCacheKey(track)){
      if(!track||!expectedKey)return;
      if(state.aiReviewCache[expectedKey]){updateAIReviewUI();return;}
      const token=++state.aiReviewRequestToken;
      state.aiReviewLoadingKey=expectedKey;
      if(dom.aiReviewStatus)dom.aiReviewStatus.textContent=t('aiReviewLoading');
      renderAIReviewMessage(t('aiReviewLoading'),{loading:true});
      dom.aiReviewToggleBtn?.classList.add('is-listening');
      let completed=false;
      try{
        const response=await fetch(AI_REVIEW_ENDPOINT,{
          method:'POST',
          headers:{'content-type':'application/json','accept':'application/json'},
          body:JSON.stringify({
            title:track.title||'',
            artist:cyNormalizeArtist(track.artist)||'',
            album:track.album||'',
            source:getTrackSourceLabel(track),
            lyricsExcerpt:getLyricsExcerpt(),
            hotComment:getTrackHotComment(track),
            culturalContext:buildCulturalContext(track),
            model:state.aiReviewModel,
          }),
        });
        let payload={};
        try{payload=await response.json();}catch(error){}
        if(token!==state.aiReviewRequestToken||aiReviewCacheKey()!==expectedKey)return;
        if(!response.ok||!payload?.review){
          let key='aiReviewFailed';
          if(payload?.error==='rate_limit_exceeded')key='aiReviewRateLimited';
          else if(payload?.error==='deepseek_api_key_not_configured')key='aiReviewNotConfigured';
          else if(['localhost','127.0.0.1'].includes(location.hostname))key='aiReviewLocalPreview';
          throw new Error(key);
        }
        state.aiReviewCache[expectedKey]={review:String(payload.review),model:payload.model||state.aiReviewModel,createdAt:Date.now(),edgeCached:Boolean(payload.cached)};
        saveAIReviewCache();
        renderAIReviewMessage(String(payload.review),{review:true});
        if(dom.aiReviewStatus)dom.aiReviewStatus.textContent=payload.cached?'Cloudflare · Cached':`DeepSeek · ${payload.model||state.aiReviewModel}`;
        completed=true;
      }catch(error){
        if(token!==state.aiReviewRequestToken)return;
        const key=String(error?.message||'aiReviewFailed');
        renderAIReviewMessage(t(key),{error:true});
        if(dom.aiReviewStatus)dom.aiReviewStatus.textContent=t('aiReviewPrivacy');
      }finally{
        if(token===state.aiReviewRequestToken){
          state.aiReviewLoadingKey='';
          dom.aiReviewToggleBtn?.classList.remove('is-listening');
          if(completed){
            updateAIReviewUI();
            setAIReviewOpen(true,{focus:false,autoClose:15000});
          }
        }
      }
    }

    function safeDownloadPart(value,fallback){
      const text=String(value||fallback||'').normalize('NFC')
        .replace(/[<>:"/\\|?*\u0000-\u001f]/g,' ')
        .replace(/\s+/g,' ').replace(/[. ]+$/g,'').trim();
      return (text||fallback||'Music').slice(0,80);
    }

    function inferAudioExtension(url,contentType=''){
      const mime=String(contentType).split(';')[0].toLowerCase();
      const byMime={'audio/mpeg':'mp3','audio/mp3':'mp3','audio/flac':'flac','audio/x-flac':'flac','audio/wav':'wav','audio/x-wav':'wav','audio/ogg':'ogg','audio/aac':'aac','audio/mp4':'m4a'};
      if(byMime[mime])return byMime[mime];
      try{
        const ext=(new URL(url).pathname.match(/\.([a-z0-9]{2,5})$/i)||[])[1]?.toLowerCase();
        if(['mp3','flac','wav','ogg','aac','m4a'].includes(ext))return ext;
      }catch(error){}
      return 'mp3';
    }

    function triggerDownload(url,filename){
      const anchor=document.createElement('a');
      anchor.href=url;
      anchor.download=filename;
      anchor.rel='noopener';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
    }

    async function handleDownloadCurrent(){
      const tr=state.currentTrack;
      if(!tr){showToast(t('toastDownloadNotReady'));return;}
      try{await ensureTrackDetails(tr);}catch(error){console.warn('download detail load failed',error);}
      if(!tr.audioUrl){showToast(t('toastDownloadNotReady'));return;}
      const baseName=`${safeDownloadPart(tr.artist,state.language==='zh'?'未知歌手':'Unknown Artist')} - ${safeDownloadPart(tr.title,state.language==='zh'?'未知歌曲':'Unknown Track')}`;
      showToast(t('toastDownloadPreparing'));
      try{
        const response=await fetch(tr.audioUrl);
        if(!response.ok)throw new Error(`download ${response.status}`);
        const blob=await response.blob();
        const ext=inferAudioExtension(tr.audioUrl,blob.type||response.headers.get('content-type'));
        const objectUrl=URL.createObjectURL(blob);
        triggerDownload(objectUrl,`${baseName}.${ext}`);
        setTimeout(()=>URL.revokeObjectURL(objectUrl),3000);
        showToast(t('toastDownloadStarted'));
      }catch(error){
        console.warn('named download fallback',error);
        const ext=inferAudioExtension(tr.audioUrl);
        triggerDownload(tr.audioUrl,`${baseName}.${ext}`);
        showToast(t('toastDownloadStarted'));
      }
    }

    function addCurrentToPlaylist(){
      const plId=dom.playlistSelect.value;
      if(!plId){showToast(t('toastNeedPlaylistSelected'));return;}
      const track=state.currentTrack;
      if(!track){showToast(t('toastNoCurrentTrack'));return;}
      const pl=state.playlists.find(p=>p.id===plId);
      if(!pl){showToast(t('toastNeedPlaylistSelected'));return;}
      if(pl.tracks.some(tk=>tk.uid===track.uid)){
        showToast(t('toastAlreadyInList'));
        return;
      }
      pl.tracks.push(track);
      saveLibraryToStorage();
      renderPlaylistList();
      showToast(t('toastAddedToPlaylist'));
    }

    function deleteSelectedPlaylist(){
      const plId=dom.playlistSelect.value;
      if(!plId){showToast(t('toastNeedPlaylistSelected'));return;}
      const idx=state.playlists.findIndex(p=>p.id===plId);
      if(idx<0){showToast(t('toastNeedPlaylistSelected'));return;}
      if(!window.confirm(t('confirmDeletePlaylist')))return;

      state.playlists.splice(idx,1);
      const next=state.playlists[Math.min(idx,state.playlists.length-1)]||state.playlists[0]||null;
      state.playContext.playlistId=next?next.id:null;
      if(state.playContext.type==='playlist' && !next){
        state.playContext.index=-1;
      }
      renderPlaylistOptions();
      if(next)dom.playlistSelect.value=next.id;
      saveLibraryToStorage();
      renderPlaylistList();
      showToast(t('toastPlaylistDeleted'));
    }

    function removeTrackFromCurrentPlaylist(trackUid){
      const plId=dom.playlistSelect.value;
      const pl=state.playlists.find(p=>p.id===plId);
      if(!pl)return;
      const idx=pl.tracks.findIndex(tk=>tk.uid===trackUid);
      if(idx<0)return;
      if(!window.confirm(t('confirmRemoveTrack')))return;

      const removed=pl.tracks.splice(idx,1)[0];
      if(state.playContext.type==='playlist' && state.playContext.playlistId===plId){
        if(state.currentTrack && removed && state.currentTrack.uid===removed.uid){
          state.playContext.index=pl.tracks.length ? Math.min(idx,pl.tracks.length-1) : -1;
        }else if(idx<state.playContext.index){
          state.playContext.index-=1;
        }else if(state.playContext.index>=pl.tracks.length){
          state.playContext.index=pl.tracks.length-1;
        }
      }
      saveLibraryToStorage();
      renderPlaylistList();
      showToast(t('toastTrackRemovedFromPlaylist'));
    }

    // ===================== 搜索结果 / 播放列表渲染 =====================

    function renderMiniSearchList(){
      const wrap=dom.searchMiniList;wrap.innerHTML='';
      const out=getInterleavedSearchList();
      out.forEach((track,i)=>{
        const item=document.createElement('div');item.className='search-mini-item ripple-target';
        const cover=document.createElement('img');cover.className='mini-cover is-empty';cover.alt='';
        cyLoadImageWithFallback(cover,track.cover,()=>cover.classList.remove('is-empty'),()=>cover.classList.add('is-empty'),track);
        const meta=document.createElement('div');meta.className='mini-meta-main';
        const tt=document.createElement('div');tt.className='mini-title';tt.textContent=track.title||'Unknown';
        const ar=document.createElement('div');ar.className='mini-artist';
        const artist=cyNormalizeArtist(track.artist);
        ar.textContent=artist||(track.source==='netease'?'正在获取歌手…':'暂无歌手信息');
        if(!artist&&track.source==='netease')ar.classList.add('is-loading');
        meta.appendChild(tt);meta.appendChild(ar);
        const right=document.createElement('div');right.className='mini-right';
        const badge=document.createElement('div');badge.className='mini-badge';badge.textContent='#'+(i+1);
        const src=document.createElement('div');src.className='mini-source';
        const dot=document.createElement('span');dot.className='source-dot '+track.source;
        const key=track.source==='netease'?'sourceNetease':track.source==='qq'?'sourceQQ':track.source==='joox'?'sourceJoox':'sourceKuwo';
        const txt=document.createElement('span');txt.textContent=t(key);src.appendChild(dot);src.appendChild(txt);
        const queueBtn=document.createElement('button');queueBtn.className='mini-queue-btn ripple-target';queueBtn.type='button';queueBtn.textContent='+1';queueBtn.title=state.language==='zh'?'下一首播放':'Play next';queueBtn.setAttribute('aria-label',queueBtn.title);
        queueBtn.addEventListener('click',event=>{event.stopPropagation();queueTrackNext(track);});
        right.appendChild(badge);right.appendChild(src);right.appendChild(queueBtn);
        item.appendChild(cover);item.appendChild(meta);item.appendChild(right);
        item.addEventListener('click',()=>{const visible=getInterleavedSearchList();const idx=visible.findIndex(x=>x.uid===track.uid);playFromList('results',idx);});
        wrap.appendChild(item);
      });
      syncMobileHotCommentVisibility();
    }

    function updatePlaylistInfoLabel(){
      const tab=document.querySelector('.playlist-tab.active')?.dataset.tab||'hot';
      if(tab==='hot'){
        const chart=state.hotCharts.find(item=>item.id===state.selectedHotChartId);
        dom.playlistInfo.textContent = chart?`${t('playlistInfoHot')} · ${chart.name}`:t('playlistInfoHot');
      }
      else if(tab==='favorites') dom.playlistInfo.textContent = t('playlistInfoFavorites');
      else {
        const pl=state.playlists.find(p=>p.id===dom.playlistSelect.value);
        const base=t('playlistInfoPlaylist');
        dom.playlistInfo.textContent = pl? (base+' · '+pl.name) : base;
      }
    }

    function renderPlaylistList(){
      const wrap=dom.playlistList;
      wrap.innerHTML='';
      const activeTab=document.querySelector('.playlist-tab.active')?.dataset.tab||'hot';
      let list=[];
      if(activeTab==='hot'){
        list=state.hotTracks;
        dom.hotChartRow.style.display='flex';
        dom.playlistSelectRow.style.display='none';
      }else if(activeTab==='favorites'){
        list=state.favorites;
        dom.hotChartRow.style.display='none';
        dom.playlistSelectRow.style.display='none';
      }else{
        dom.hotChartRow.style.display='none';
        dom.playlistSelectRow.style.display='flex';
        renderPlaylistOptions();
        if(!state.playlists.length){
          updatePlaylistInfoLabel();
          return;
        }
        const pl=state.playlists.find(p=>p.id===dom.playlistSelect.value)||state.playlists[0];
        dom.playlistSelect.value=pl.id;
        state.playContext.playlistId=pl.id;
        list=pl.tracks;
      }
      updatePlaylistInfoLabel();

      const totalTracks=list.length;
      list.slice(0,state.libraryRenderLimit).forEach((track,idx)=>{
        const item=document.createElement('div');
        item.className='track-item ripple-target';
        if(state.currentTrack && state.currentTrack.uid===track.uid) item.classList.add('playing');

        const index=document.createElement('img');
        index.className='track-cover is-empty';index.alt='';
        cyLoadImageWithFallback(index,track.cover,()=>index.classList.remove('is-empty'),()=>index.classList.add('is-empty'),track);

        const meta=document.createElement('div');
        const title=document.createElement('div');
        title.className='track-meta-title'; title.textContent=track.title||'Unknown';
        const sub=document.createElement('div');
        sub.className='track-meta-sub';
        const aSpan=document.createElement('span'); aSpan.textContent=cyNormalizeArtist(track.artist)||(track.source==='netease'?'正在获取歌手…':'');
        const sSpan=document.createElement('span');
        const dot=document.createElement('span'); dot.className='source-dot '+track.source;
        const key=track.source==='netease'?'sourceNetease':
                 track.source==='qq'?'sourceQQ':
                 track.source==='joox'?'sourceJoox':'sourceKuwo';
        const txt=document.createElement('span'); txt.textContent=t(key);
        sSpan.appendChild(dot);sSpan.appendChild(txt);
        sub.appendChild(aSpan);sub.appendChild(sSpan);
        meta.appendChild(title);meta.appendChild(sub);

        const act=document.createElement('div');
        act.className='track-actions';
        const pBtn=document.createElement('button');
        pBtn.className='btn btn-secondary btn-icon ripple-target'; pBtn.textContent='▶';
        const fBtn=document.createElement('button');
        fBtn.className='btn btn-secondary btn-icon ripple-target'; fBtn.textContent='❤';
        if(isFavorite(track)) fBtn.classList.add('btn-fav-active');
        const qBtn=document.createElement('button');
        qBtn.className='btn btn-secondary btn-icon queue-next-btn ripple-target'; qBtn.textContent='+1';
        qBtn.title=state.language==='zh'?'下一首播放':'Play next';qBtn.setAttribute('aria-label',qBtn.title);
        const removeBtn=document.createElement('button');
        removeBtn.className='btn btn-ghost btn-icon ripple-target';
        removeBtn.textContent='×';
        removeBtn.title=t('removeFromPlaylist');

        pBtn.addEventListener('click',ev=>{
          ev.stopPropagation();
          if(activeTab==='hot'){
            const i=state.hotTracks.findIndex(x=>x.uid===track.uid);
            playFromList('hot',i);
          }else if(activeTab==='results'){
            const visible=getInterleavedSearchList();
            const i=visible.findIndex(x=>x.uid===track.uid);
            playFromList('results',i);
          }else if(activeTab==='favorites'){
            const i=state.favorites.findIndex(x=>x.uid===track.uid);
            playFromList('favorites',i);
          }else{
            const plId=dom.playlistSelect.value;
            const pl=state.playlists.find(p=>p.id===plId);
            const i=pl?pl.tracks.findIndex(x=>x.uid===track.uid):-1;
            playFromList('playlist',i,plId);
          }
        });
        qBtn.addEventListener('click',ev=>{ev.stopPropagation();queueTrackNext(track);});
        fBtn.addEventListener('click',ev=>{
          ev.stopPropagation();
          const i=state.favorites.findIndex(x=>x.uid===track.uid);
          if(i>=0){state.favorites.splice(i,1);showToast(t('toastRemovedFavorite'));}
          else{state.favorites.push(track);showToast(t('toastAddedFavorite'));}
          saveLibraryToStorage();
          renderPlaylistList();
          updateMainFavButton();
        });
        removeBtn.addEventListener('click',ev=>{
          ev.stopPropagation();
          removeTrackFromCurrentPlaylist(track.uid);
        });
        act.appendChild(pBtn);
        act.appendChild(qBtn);
        act.appendChild(fBtn);
        if(activeTab==='playlists') act.appendChild(removeBtn);
        item.appendChild(index);item.appendChild(meta);item.appendChild(act);
        item.addEventListener('click',()=>pBtn.click());
        wrap.appendChild(item);
      });

      if(totalTracks>state.libraryRenderLimit){
        const more=document.createElement('button');
        more.className='library-more-btn btn btn-ghost ripple-target';
        more.type='button';
        more.textContent=state.language==='zh'
          ?`再显示 ${Math.min(80,totalTracks-state.libraryRenderLimit)} 首 · 共 ${totalTracks} 首`
          :`Show ${Math.min(80,totalTracks-state.libraryRenderLimit)} more · ${totalTracks} total`;
        more.addEventListener('click',()=>{state.libraryRenderLimit+=80;renderPlaylistList();});
        wrap.appendChild(more);
      }

      // Do not auto-scroll the right playlist after every re-render.
      // Re-rendering can happen when favoriting/unfavoriting a track; forcing
      // the active track into view at that moment may push the playlist header
      // and controls out of the visible area in some layouts.
    }

    // ===================== 歌单弹窗 =====================

    let playlistModalMode='create';

    function openPlaylistModal(mode='create'){
      playlistModalMode=mode;
      dom.playlistModal.classList.add('show');
      const current=state.playlists.find(item=>item.id===dom.playlistSelect.value);
      if(mode==='rename'&&!current){showToast(t('toastNeedPlaylistSelected'));dom.playlistModal.classList.remove('show');return;}
      dom.playlistModalTitle.textContent=t(mode==='rename'?'modalRenamePlaylistTitle':'modalNewPlaylistTitle');
      dom.playlistModalDesc.textContent=t(mode==='rename'?'modalRenamePlaylistDesc':'modalNewPlaylistDesc');
      dom.playlistNameInput.value=mode==='rename'?(current?.name||''):'';
      setTimeout(()=>dom.playlistNameInput.focus(),50);
    }
    function closePlaylistModal(){
      dom.playlistModal.classList.remove('show');
    }
    function savePlaylistFromModal(){
      let name=dom.playlistNameInput.value.trim();
      if(!name)name=state.language==='zh'?'未命名歌单':'Untitled Playlist';
      if(playlistModalMode==='rename'){
        const playlist=state.playlists.find(item=>item.id===dom.playlistSelect.value);
        if(!playlist){showToast(t('toastNeedPlaylistSelected'));return;}
        playlist.name=name;
        renderPlaylistOptions();
        dom.playlistSelect.value=playlist.id;
        saveLibraryToStorage();
        closePlaylistModal();
        renderPlaylistList();
        showToast(t('toastPlaylistRenamed'));
        return;
      }
      const id='pl-'+Date.now()+'-'+Math.random().toString(16).slice(2);
      const pl={id,name,tracks:[]};
      state.playlists.push(pl);
      state.playContext.playlistId=pl.id;
      renderPlaylistOptions();
      dom.playlistSelect.value=pl.id;
      saveLibraryToStorage();
      closePlaylistModal();
      renderPlaylistList();
      showToast(t('toastPlaylistCreated'));
    }

    // ===================== 搜索加载更多 =====================

    function canAutoLoadMore(){
      return !state.searchInProgress && !state.noMoreResults;
    }
    function requestMoreResults(){
      const enabled=Object.keys(state.enabledSources).filter(k=>state.enabledSources[k]);
      if(!enabled.length)return;

      enabled.forEach(src=>{
        if(src==='netease'){
          state.perSourcePage.netease = (state.perSourcePage.netease || 1) + 1;
        }else{
          state.perSourceCurrentLimit[src]=(state.perSourceCurrentLimit[src]||state.perSourceLimit)+state.perSourceLimit;
        }
      });

      searchAllSources(false);
    }

    // ===================== 背景粒子 & 水波纹 =====================

    function setupParticles(){
      const canvas=$('bg-canvas');const ctx=canvas.getContext('2d');
      const mobileParticles=window.matchMedia('(max-width:860px)').matches;
      const reducedMotion=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
      const saveData=Boolean(navigator.connection?.saveData);
      let viewportWidth=Math.max(1,window.innerWidth);
      let viewportHeight=Math.max(1,window.innerHeight);
      function resize(){
        const dpr=window.devicePixelRatio||1;
        /* 先完成全部布局读取，再写 canvas 尺寸，避免写入 width 后读取 height 触发强制重排。 */
        const width=Math.max(1,window.innerWidth);
        const height=Math.max(1,window.innerHeight);
        viewportWidth=width;
        viewportHeight=height;
        canvas.width=Math.round(width*dpr);
        canvas.height=Math.round(height*dpr);
        ctx.setTransform(dpr,0,0,dpr,0,0);
      }
      resize();window.addEventListener('resize',resize,{passive:true});
      const parts=[];
      const N=(reducedMotion||saveData)?24:(mobileParticles?46:72);
      for(let i=0;i<N;i++){
        parts.push({
          x:Math.random()*viewportWidth,
          y:Math.random()*viewportHeight,
          vx:(Math.random()-0.5)*0.4,
          vy:(Math.random()-0.5)*0.4,
          r:1+Math.random()*2.5,
          baseR:1+Math.random()*2.5,
          hue:200+Math.random()*120,
          a:0.22+Math.random()*0.3
        });
      }
      let mouse={x:viewportWidth/2,y:viewportHeight/2};
      window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;},{passive:true});
      function tick(){
        if(document.hidden){requestAnimationFrame(tick);return;}
        ctx.clearRect(0,0,viewportWidth,viewportHeight);
        const pulse = 1 + audioLevel * 2.2;
        for(const p of parts){
          p.x+=p.vx; p.y+=p.vy; p.hue+=0.08;
          if(p.x<-40)p.x=viewportWidth+40;
          if(p.x>viewportWidth+40)p.x=-40;
          if(p.y<-40)p.y=viewportHeight+40;
          if(p.y>viewportHeight+40)p.y=-40;
          const dx=p.x-mouse.x,dy=p.y-mouse.y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          const push=Math.max(0,140-dist)/140;
          p.x+=dx*0.011*push; p.y+=dy*0.011*push;
          ctx.beginPath();
          ctx.arc(p.x,p.y,p.baseR*pulse,0,Math.PI*2);
          const light = Math.min(80, 60 + audioLevel*40);
          ctx.fillStyle=`hsla(${p.hue},70%,${light}%,${p.a})`;
          ctx.fill();
        }
        ctx.lineWidth=0.45;
        for(let i=0;i<parts.length;i++){
          for(let j=i+1;j<parts.length;j++){
            const a=parts[i],b=parts[j];
            const dx=a.x-b.x,dy=a.y-b.y;
            const d=Math.sqrt(dx*dx+dy*dy);
            if(d<100){
              const al=0.10*(1-d/100)*(0.6+audioLevel*1.5);
              ctx.beginPath();
              ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
              ctx.strokeStyle=`rgba(120,160,255,${al})`;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(tick);
      }
      tick();
    }

    function setupRipple(){
      const interactiveSelector = [
        'button',
        '.btn',
        '.track-item',
        '.search-mini-item',
        '.source-chip',
        '.hot-comment-card',
        '.mobile-nav-btn',
        '.playlist-tab',
        '.lang-btn'
      ].join(',');

      document.addEventListener('pointerdown',e=>{
        // 歌词滑动、字号/翻译切换等交互不再把涟漪挂到整个播放面板上。
        const target=e.target.closest(interactiveSelector);
        if(!target || target.classList.contains('panel'))return;
        if(e.pointerType==='mouse' && e.button!==0)return;

        const rect=target.getBoundingClientRect();
        if(!rect.width || !rect.height)return;
        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;
        const diameter=Math.min(Math.max(rect.width,rect.height)*1.8,180);

        const outer=document.createElement('span');
        outer.className='ripple-circle';
        outer.style.left=x+'px';
        outer.style.top=y+'px';
        outer.style.width=outer.style.height=diameter+'px';
        target.appendChild(outer);
        setTimeout(()=>outer.remove(),700);
      },{passive:true});
    }

    // ===================== DOM / 事件绑定 =====================

    function setupDOM(){
      dom.searchInput=$('search-input');
      dom.searchBtn=$('search-btn');
      dom.limitSelect=$('limit-select');
      dom.loadMoreBtn=$('load-more-btn');
      dom.searchStatus=$('search-status');
      dom.searchCount=$('search-count');
      dom.searchMiniList=$('search-mini-list');
      dom.hotCommentCard=$('hot-comment-card');
      dom.hotCommentRefresh=$('hot-comment-refresh');
      dom.hotCommentText=$('hot-comment-text');
      dom.hotCommentUser=$('hot-comment-user');
      dom.hotCommentSong=$('hot-comment-song');
      dom.hotCommentCover=$('hot-comment-cover');
      dom.hotCommentLike=$('hot-comment-like');
      dom.hotCommentAction=$('hot-comment-action');

      dom.playerPanel=document.querySelector('.player-panel');
      dom.coverImg=$('cover-img');
      dom.coverWrapper=$('cover-detail-trigger');
      dom.coverPlaceholder=document.querySelector('.cover-placeholder');
      dom.trackTitle=$('track-title');
      dom.trackArtist=$('track-artist');
      dom.trackSourcePill=$('track-source-pill');
      dom.trackQualityPill=$('track-quality-pill');
      dom.playBtn=$('play-btn');
      dom.prevBtn=$('prev-btn');
      dom.nextBtn=$('next-btn');
      dom.favBtn=$('fav-btn');
      dom.downloadBtn=$('download-btn');
      dom.audio=$('audio');
      dom.currentTime=$('current-time');
      dom.totalTime=$('total-time');
      dom.progressWrapper=$('progress-bar-wrapper');
      dom.progressBar=$('progress-bar');
      dom.progressHandle=$('progress-handle');
      dom.volumeSlider=$('volume-slider');
      dom.queueToggleBtn=$('queue-toggle-btn');
      dom.queueCount=$('queue-count');
      dom.queueDrawer=$('queue-drawer');
      dom.queueList=$('queue-list');
      dom.queueClearBtn=$('queue-clear-btn');
      dom.queueCloseBtn=$('queue-close-btn');
      dom.queueBackdrop=document.querySelector('.queue-backdrop');
      dom.aiReviewToggleBtn=$('ai-review-toggle-btn');
      dom.aiReviewDrawer=$('ai-review-drawer');
      dom.aiReviewBackdrop=document.querySelector('.ai-review-backdrop');
      dom.aiReviewCloseBtn=$('ai-review-close-btn');
      dom.aiReviewCover=$('ai-review-cover');
      dom.aiReviewTrackTitle=$('ai-review-track-title');
      dom.aiReviewTrackMeta=$('ai-review-track-meta');
      dom.aiReviewContent=$('ai-review-content');
      dom.aiReviewStatus=$('ai-review-status');
      dom.lyricsInner=$('lyrics-inner');
      dom.lyricsContainer=document.querySelector('.lyrics-container');
      dom.lyricsFullBtn=$('lyrics-full-btn');
      dom.lyricsSizeDown=$('lyrics-size-down');
      dom.lyricsSizeUp=$('lyrics-size-up');
      dom.lyricsSizeValue=$('lyrics-size-value');
      dom.lyricsAssistBtn=$('lyrics-assist-btn');
      dom.lyricsScriptButtons=Array.from(document.querySelectorAll('.lyrics-script-btn'));

      dom.playlistMain=document.querySelector('.playlist-main');
      dom.playlistList=$('playlist-list');
      dom.playlistInfo=$('playlist-info');
      dom.playlistSelectRow=$('playlist-select-row');
      dom.playlistSelect=$('playlist-select');
      dom.hotChartRow=$('hot-chart-row');
      dom.hotChartSelect=$('hot-chart-select');
      dom.refreshHotChartBtn=$('refresh-hot-chart-btn');
      dom.deletePlaylistBtn=$('delete-playlist-btn');
      dom.renamePlaylistBtn=$('rename-playlist-btn');
      dom.newPlaylistBtn=$('new-playlist-btn');
      dom.importPlaylistBtn=$('import-playlist-btn');
      dom.importFileBtn=$('import-file-btn');
      dom.importPlaylistInput=$('import-playlist-input');
      dom.exportPlaylistBtn=$('export-playlist-btn');
      dom.addCurrentBtn=$('add-current-btn');
      dom.libraryToggle=$('library-toggle');
      dom.libraryFab=$('library-fab');

      dom.playlistModal=$('playlist-modal');
      dom.playlistModalTitle=$('playlist-modal-title');
      dom.playlistModalDesc=$('playlist-modal-desc');
      dom.playlistNameInput=$('playlist-name-input');
      dom.playlistConfirmBtn=$('playlist-confirm-btn');
      dom.playlistCancelBtn=$('playlist-cancel-btn');
      dom.playlistCloseBtn=$('playlist-close');

      dom.playlistLinkModal=$('playlist-link-modal');
      dom.playlistLinkInput=$('playlist-link-input');
      dom.playlistImportNameInput=$('playlist-import-name-input');
      dom.playlistDetectStatus=$('playlist-detect-status');
      dom.playlistLinkConfirm=$('playlist-link-confirm');
      dom.playlistLinkCancel=$('playlist-link-cancel');
      dom.playlistLinkClose=$('playlist-link-close');

      dom.shortcutToggleBtn=$('shortcut-toggle-btn');
      dom.shortcutModal=$('shortcut-modal');
      dom.shortcutCloseBtn=$('shortcut-close');

      dom.albumInfoModal=$('album-info-modal');
      dom.albumInfoClose=$('album-info-close');
      dom.albumInfoCover=$('album-info-cover');
      dom.albumInfoTitle=$('album-info-title');
      dom.albumInfoArtist=$('album-info-artist');
      dom.albumInfoAlbum=$('album-info-album');
      dom.albumInfoSource=$('album-info-source');
      dom.albumInfoQuality=$('album-info-quality');
    }



    let mobileActivePanel = 'player';

    function activateMobilePanel(name, options={}){
      const panels = {
        search:document.querySelector('.search-panel'),
        player:document.querySelector('.player-panel'),
        playlist:document.querySelector('.playlist-panel')
      };
      if(!panels[name]) name='player';
      mobileActivePanel=name;
      if(name==='playlist'&&!state.hotTracks.length)loadQQHotCharts().catch(error=>console.warn('qq hot lazy load failed',error));
      const mobile=window.matchMedia('(max-width: 860px)').matches;

      if(mobile){
        // 先点亮目标面板，再隐藏其他面板，避免任何一帧没有活动页面。
        const target=panels[name];
        if(target)target.classList.add('mobile-active');
        Object.entries(panels).forEach(([key,panel])=>{
          if(!panel)return;
          const active=key===name;
          if(!active)panel.classList.remove('mobile-active');
          panel.setAttribute('aria-hidden',active?'false':'true');
          try{panel.inert=!active;}catch(error){}
        });
      }else{
        Object.values(panels).forEach(panel=>{
          if(!panel)return;
          panel.classList.remove('mobile-active');
          panel.setAttribute('aria-hidden','false');
          try{panel.inert=false;}catch(error){}
        });
      }

      document.querySelectorAll('.mobile-nav-btn').forEach(btn=>{
        const active=btn.dataset.mobilePanel===name;
        btn.classList.toggle('active',active);
        btn.setAttribute('aria-current',active?'page':'false');
      });

      if(options.focusSearch && name==='search'){
        setTimeout(()=>{
          if(dom.searchInput){
            dom.searchInput.focus({preventScroll:true});
            dom.searchInput.select();
          }
        },60);
      }
    }

    function setupMobileNavigation(){
      const media=window.matchMedia('(max-width: 860px)');

      document.querySelectorAll('.mobile-nav-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
          activateMobilePanel(btn.dataset.mobilePanel,{
            focusSearch:btn.dataset.mobilePanel==='search'
          });
        });
      });

      const syncLayout=()=>{
        document.body.classList.toggle('is-mobile-ui',media.matches);
        syncMobileHotCommentVisibility();
        if(media.matches){
          activateMobilePanel(mobileActivePanel);
        }else{
          document.querySelectorAll('.layout > .panel').forEach(panel=>{
            panel.classList.remove('mobile-active');
            panel.setAttribute('aria-hidden','false');
            try{panel.inert=false;}catch(error){}
          });
        }
      };

      if(media.addEventListener) media.addEventListener('change',syncLayout);
      else media.addListener(syncLayout);
      syncLayout();
    }


    const LYRICS_FONT_STORAGE_KEY='nie-music-lyrics-font-size';
    const LIBRARY_COLLAPSED_STORAGE_KEY='nie-music-library-collapsed';

    function applyLyricsFontSize(value,showMessage=false){
      const size=Math.max(13,Math.min(28,Number(value)||17));
      state.lyricsFontSize=size;
      document.documentElement.style.setProperty('--lyrics-font-size',size+'px');
      if(dom.lyricsSizeValue)dom.lyricsSizeValue.textContent=String(size);
      try{localStorage.setItem(LYRICS_FONT_STORAGE_KEY,String(size));}catch(e){}
      if(showMessage)showToast('歌词字号 '+size+'px');
    }

    function setLibraryCollapsed(collapsed,persist=true){
      state.libraryCollapsed=Boolean(collapsed);
      document.body.classList.toggle('library-collapsed',state.libraryCollapsed);
      if(dom.libraryToggle){
        dom.libraryToggle.setAttribute('aria-expanded',state.libraryCollapsed?'false':'true');
        dom.libraryToggle.title=t(state.libraryCollapsed?'libraryExpand':'libraryCollapse');
      }
      if(dom.libraryFab){
        dom.libraryFab.setAttribute('aria-expanded',state.libraryCollapsed?'false':'true');
        dom.libraryFab.title=t('libraryExpand');
        dom.libraryFab.setAttribute('aria-label',t('libraryExpand'));
      }
      if(persist){try{localStorage.setItem(LIBRARY_COLLAPSED_STORAGE_KEY,state.libraryCollapsed?'1':'0');}catch(e){}}
      if(!state.libraryCollapsed&&!state.hotTracks.length)loadQQHotCharts().catch(error=>console.warn('qq hot lazy load failed',error));
    }

    function setPlaymodeUI(){
      document.querySelectorAll('.playmode-btn').forEach(btn=>{
        btn.classList.toggle('active',btn.dataset.mode===state.playMode);
      });
    }

    function setupEvents(){
      document.querySelectorAll('.lang-btn').forEach(btn=>{
        btn.addEventListener('click',()=>setLanguage(btn.dataset.lang));
      });

      dom.searchBtn.addEventListener('click',()=>{
        state.searchKeyword=dom.searchInput.value.trim(); state.noMoreResults=false;
        searchAllSources(true);
      });
      dom.searchInput.addEventListener('keydown',e=>{
        if(e.key==='Enter'){
          state.searchKeyword=dom.searchInput.value.trim();
          state.noMoreResults=false;
          searchAllSources(true);
        }
      });
      dom.searchInput.addEventListener('input',()=>{
        if(dom.searchInput.value.trim())return;
        state.searchKeyword='';
        state.searchResults=[];
        state.trackMap.clear();
        state.noMoreResults=false;
        dom.searchStatus.textContent=t('searchStatusIdle');
        dom.searchCount.textContent='0';
        renderMiniSearchList();
        renderPlaylistList();
        syncMobileHotCommentVisibility();
      });

      document.querySelectorAll('.source-chip input').forEach(cb=>{
        cb.addEventListener('change',()=>{state.enabledSources[cb.dataset.source]=cb.checked;});
      });

      if(dom.hotCommentRefresh)dom.hotCommentRefresh.addEventListener('click',e=>{e.stopPropagation();loadHotComment();});
      if(dom.hotCommentCard)dom.hotCommentCard.addEventListener('click',()=>handleHotCommentCardClick());
      if(dom.hotCommentCard)dom.hotCommentCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();handleHotCommentCardClick();}});

      dom.limitSelect.addEventListener('change',()=>{
        state.perSourceLimit=parseInt(dom.limitSelect.value,10)||10;
      });

      dom.loadMoreBtn.addEventListener('click',()=>{
        const enabled=Object.keys(state.enabledSources).filter(k=>state.enabledSources[k]);
        if(!enabled.length){showToast(t('searchStatusNoSource'));return;}

        enabled.forEach(s=>{
          if(s==='netease'){
            state.perSourcePage.netease = (state.perSourcePage.netease || 1) + 1;
          }else{
            state.perSourceCurrentLimit[s]=(state.perSourceCurrentLimit[s]||state.perSourceLimit)+state.perSourceLimit;
          }
        });

        state.noMoreResults=false;
        searchAllSources(false);
      });

      dom.searchMiniList.addEventListener('scroll',()=>{
        if(!canAutoLoadMore())return;
        if(dom.searchMiniList.scrollTop + dom.searchMiniList.clientHeight >= dom.searchMiniList.scrollHeight-10){
          requestMoreResults();
        }
      });

      dom.playlistMain.addEventListener('scroll',()=>{
        const activeTab=document.querySelector('.playlist-tab.active')?.dataset.tab||'hot';
        if(activeTab!=='results')return;
        if(!canAutoLoadMore())return;
        if(dom.playlistMain.scrollTop + dom.playlistMain.clientHeight >= dom.playlistMain.scrollHeight-10){
          requestMoreResults();
        }
      });

      dom.playBtn.addEventListener('click',togglePlayPause);
      dom.prevBtn.addEventListener('click',()=>playNext('prev'));
      dom.nextBtn.addEventListener('click',()=>playNext('next'));
      dom.favBtn.addEventListener('click',toggleFavoriteCurrent);
      dom.downloadBtn.addEventListener('click',handleDownloadCurrent);
      if(dom.coverWrapper){
        dom.coverWrapper.addEventListener('click',openAlbumInfoModal);
        dom.coverWrapper.addEventListener('keydown',event=>{
          if(event.key==='Enter'||event.key===' '){
            event.preventDefault();
            openAlbumInfoModal();
          }
        });
      }
      if(dom.albumInfoClose)dom.albumInfoClose.addEventListener('click',closeAlbumInfoModal);
      if(dom.albumInfoModal)dom.albumInfoModal.addEventListener('click',event=>{
        if(event.target===dom.albumInfoModal)closeAlbumInfoModal();
      });
      dom.lyricsFullBtn.addEventListener('click',()=>{
        const expand=!isLyricsFullscreen();
        setLyricsFullscreen(expand,{requestNative:expand,immersive:expand&&isMobilePlayerUI()});
        if(!expand && state.isPlaying)armMobileImmersiveLyrics();
      });
      dom.lyricsScriptButtons.forEach(btn=>btn.addEventListener('click',()=>setLyricScriptMode(btn.dataset.lyricScript)));
      if(dom.lyricsAssistBtn)dom.lyricsAssistBtn.addEventListener('click',toggleLyricAssist);
      let suppressNextLyricClick=false;
      let lyricGesture=null;
      let scrubPreviewIndex=-1;

      const clearScrubPreview=()=>{
        if(scrubPreviewIndex>=0){
          dom.lyricsInner.querySelector(`.lyrics-line[data-index="${scrubPreviewIndex}"]`)?.classList.remove('is-scrub-preview');
        }
        scrubPreviewIndex=-1;
      };

      const setScrubPreview=(index)=>{
        if(index===scrubPreviewIndex)return;
        clearScrubPreview();
        if(index<0)return;
        const line=dom.lyricsInner.querySelector(`.lyrics-line.is-seekable[data-index="${index}"]`);
        if(!line)return;
        line.classList.add('is-scrub-preview');
        scrubPreviewIndex=index;
      };

      const seekToLyricIndex=(index,{showMessage=true}={})=>{
        const lyric=state.lyricLines[index];
        if(!lyric||!Number.isFinite(lyric.time))return false;
        const finiteDuration=Number.isFinite(dom.audio.duration)&&dom.audio.duration>0?dom.audio.duration:null;
        const target=Math.max(0,finiteDuration?Math.min(finiteDuration,lyric.time):lyric.time);
        try{dom.audio.currentTime=target;}catch(error){console.warn('lyric seek failed',error);return false;}
        dom.currentTime.textContent=formatTime(target);
        if(finiteDuration){
          const ratio=Math.max(0,Math.min(1,target/finiteDuration));
          dom.progressBar.style.transform='scaleX('+ratio+')';
          dom.progressHandle.style.left=(dom.progressWrapper.clientWidth*ratio)+'px';
        }
        pauseLyricsAutoFollow(900);
        updateLyricsHighlight(target);
        if(showMessage)showToast(t('toastLyricSeek'));
        return true;
      };

      const seekFromLyricElement=(element,options)=>{
        const line=element?.closest?.('.lyrics-line.is-seekable[data-index]');
        if(!line)return false;
        return seekToLyricIndex(Number(line.dataset.index),options);
      };

      const closestTimedLyricToViewportCenter=()=>{
        const boxRect=dom.lyricsContainer.getBoundingClientRect();
        const targetY=boxRect.top+boxRect.height*.45;
        let bestIndex=-1;
        let bestDistance=Infinity;
        dom.lyricsInner.querySelectorAll('.lyrics-line.is-seekable[data-index]').forEach(line=>{
          const rect=line.getBoundingClientRect();
          const distance=Math.abs((rect.top+rect.height/2)-targetY);
          if(distance<bestDistance){
            bestDistance=distance;
            bestIndex=Number(line.dataset.index);
          }
        });
        return bestIndex;
      };

      dom.lyricsInner.addEventListener('click',event=>{
        if(suppressNextLyricClick){
          suppressNextLyricClick=false;
          return;
        }
        if(isMobileImmersiveLyrics() && !event.target.closest('.lyrics-line')){
          setLyricsFullscreen(false);
          return;
        }
        seekFromLyricElement(event.target);
      });
      dom.lyricsContainer.addEventListener('dblclick',()=>{
        if(isMobileImmersiveLyrics())setLyricsFullscreen(false);
      });
      dom.lyricsInner.addEventListener('keydown',event=>{
        if((event.key==='Enter'||event.key===' ')&&seekFromLyricElement(event.target))event.preventDefault();
      });

      dom.lyricsContainer.addEventListener('pointerdown',event=>{
        if(event.button!==undefined&&event.button!==0)return;
        lyricGesture={
          pointerId:event.pointerId,
          startY:event.clientY,
          startScrollTop:dom.lyricsContainer.scrollTop,
          moved:false,
          candidate:-1
        };
      },{passive:true});

      const updateLyricGesturePreview=()=>{
        if(!lyricGesture)return;
        const index=closestTimedLyricToViewportCenter();
        lyricGesture.candidate=index;
        setScrubPreview(index);
      };

      dom.lyricsContainer.addEventListener('pointermove',event=>{
        if(!lyricGesture||event.pointerId!==lyricGesture.pointerId)return;
        const moved=Math.abs(event.clientY-lyricGesture.startY)>14||
          Math.abs(dom.lyricsContainer.scrollTop-lyricGesture.startScrollTop)>10;
        if(!moved)return;
        lyricGesture.moved=true;
        requestAnimationFrame(updateLyricGesturePreview);
      },{passive:true});

      dom.lyricsContainer.addEventListener('scroll',()=>{
        if(lyricGesture?.moved)requestAnimationFrame(updateLyricGesturePreview);
      },{passive:true});

      const finishLyricGesture=(event)=>{
        if(!lyricGesture)return;
        if(event?.pointerId!==undefined&&event.pointerId!==lyricGesture.pointerId)return;
        const {moved,candidate}=lyricGesture;
        lyricGesture=null;
        if(moved&&candidate>=0){
          suppressNextLyricClick=true;
          seekToLyricIndex(candidate,{showMessage:false});
          setTimeout(()=>{suppressNextLyricClick=false;},280);
        }
        clearScrubPreview();
      };

      dom.lyricsContainer.addEventListener('pointerup',finishLyricGesture,{passive:true});
      dom.lyricsContainer.addEventListener('pointercancel',finishLyricGesture,{passive:true});
      dom.lyricsContainer.addEventListener('lostpointercapture',finishLyricGesture,{passive:true});

      if(dom.lyricsSizeDown)dom.lyricsSizeDown.addEventListener('click',()=>applyLyricsFontSize(state.lyricsFontSize-1,true));
      if(dom.lyricsSizeUp)dom.lyricsSizeUp.addEventListener('click',()=>applyLyricsFontSize(state.lyricsFontSize+1,true));
      if(dom.libraryToggle)dom.libraryToggle.addEventListener('click',()=>setLibraryCollapsed(!state.libraryCollapsed));
      if(dom.libraryFab)dom.libraryFab.addEventListener('click',()=>setLibraryCollapsed(false));
      if(dom.queueToggleBtn)dom.queueToggleBtn.addEventListener('click',()=>setQueueOpen(!document.body.classList.contains('queue-open')));
      if(dom.queueCloseBtn)dom.queueCloseBtn.addEventListener('click',()=>setQueueOpen(false));
      if(dom.queueBackdrop)dom.queueBackdrop.addEventListener('click',()=>setQueueOpen(false));
      if(dom.queueClearBtn)dom.queueClearBtn.addEventListener('click',()=>{state.upNext=[];renderQueue();});
      if(dom.aiReviewToggleBtn)dom.aiReviewToggleBtn.addEventListener('click',()=>setAIReviewOpen(!document.body.classList.contains('ai-review-open')));
      if(dom.aiReviewCloseBtn)dom.aiReviewCloseBtn.addEventListener('click',()=>setAIReviewOpen(false));
      if(dom.aiReviewBackdrop)dom.aiReviewBackdrop.addEventListener('click',()=>setAIReviewOpen(false));
      if(dom.aiReviewDrawer){
        ['pointermove','pointerdown','touchstart','wheel','focusin','keydown'].forEach(eventName=>{
          dom.aiReviewDrawer.addEventListener(eventName,()=>armAIReviewAutoClose(15000),{passive:eventName!=='keydown'});
        });
      }
      document.querySelectorAll('.ai-model-btn').forEach(btn=>btn.addEventListener('click',()=>setAIReviewModel(btn.dataset.model)));
      ['pointerdown','touchstart','wheel'].forEach(eventName=>{
        dom.lyricsContainer.addEventListener(eventName,()=>pauseLyricsAutoFollow(),{passive:true});
      });

      dom.volumeSlider.addEventListener('input',()=>{
        dom.audio.volume=parseFloat(dom.volumeSlider.value);
      });

      dom.audio.addEventListener('timeupdate',()=>{
        const cur=dom.audio.currentTime||0, dur=dom.audio.duration||0;
        dom.currentTime.textContent=formatTime(cur);
        dom.totalTime.textContent=formatTime(dur||0);
        if(dur>0){
          const r=cur/dur;
          dom.progressBar.style.transform='scaleX('+r+')';
          const w=dom.progressWrapper.clientWidth;
          dom.progressHandle.style.left=(w*r)+'px';
        }
        const intensity = Math.abs(Math.sin(cur * 2.3));
        audioLevel = 0.3 + 0.7 * intensity * (dom.audio.volume || 1);
        updateLyricsHighlight(cur);
        maybeEnterMobileImmersiveLyrics();
        syncSystemMediaPosition();
      });
      dom.audio.addEventListener('play',()=>{
        state.isPlaying=true;
        setPlayButtonState(true);
        syncSystemMediaMetadata();
        syncSystemMediaPlaybackState();
        syncSystemMediaPosition(true);
        requestPlaybackWakeLock();
        scheduleAIReview(state.currentTrack);
      });
      dom.audio.addEventListener('playing',()=>{
        state.isPlaying=true;
        if(!isMobileImmersiveLyrics())armMobileImmersiveLyrics();
      });
      ['loadstart','waiting','stalled','seeking','emptied'].forEach(eventName=>{
        dom.audio.addEventListener(eventName,()=>{
          // Loading/buffering/seeking must never consume the 5-second immersive timer.
          disarmMobileImmersiveLyrics();
        });
      });
      dom.audio.addEventListener('pause',()=>{
        state.isPlaying=false;
        disarmMobileImmersiveLyrics();
        setPlayButtonState(false);
        syncSystemMediaPlaybackState();
        releasePlaybackWakeLock();
        audioLevel = 0;
        if(state.aiReviewAutoTimer){
          clearTimeout(state.aiReviewAutoTimer);
          state.aiReviewAutoTimer=0;
          state.aiReviewLoadingKey='';
          updateAIReviewUI();
        }
      });
      dom.audio.addEventListener('ended',()=>{
        releasePlaybackWakeLock();
        audioLevel = 0;
        playNext('next');
      });

      ['fullscreenchange','webkitfullscreenchange'].forEach(eventName=>document.addEventListener(eventName,()=>{
        if(!nativeFullscreenElement() && isMobileImmersiveLyrics() && !isLyricsFullscreen()){
          document.body.classList.remove('mobile-immersive-lyrics');
        }
      }));

      dom.progressWrapper.addEventListener('click',e=>{
        const rect=dom.progressWrapper.getBoundingClientRect();
        const r=(e.clientX-rect.left)/rect.width;
        const dur=dom.audio.duration||0;
        dom.audio.currentTime=Math.max(0,Math.min(dur,dur*r));
      });

      document.querySelectorAll('.playlist-tab').forEach(tab=>{
        tab.addEventListener('click',()=>{
          state.libraryRenderLimit=80;
          document.querySelectorAll('.playlist-tab').forEach(el=>el.classList.toggle('active',el===tab));
          const tName=tab.dataset.tab;
          if(tName==='hot'){
            state.playContext.type='hot';state.playContext.playlistId=null;
            if(!state.hotTracks.length)loadQQHotCharts().catch(error=>console.warn('qq hot tab load failed',error));
          }else if(tName==='favorites'){
            state.playContext.type='favorites';state.playContext.playlistId=null;
          }else{
            state.playContext.type='playlist';
            if(state.playlists.length&&!state.playContext.playlistId)state.playContext.playlistId=state.playlists[0].id;
          }
          renderPlaylistList();
          const list=getActiveList();
          if(!state.currentTrack && list.length) playFromList(state.playContext.type,0,state.playContext.playlistId);
        });
      });

      dom.deletePlaylistBtn.addEventListener('click',deleteSelectedPlaylist);
      dom.renamePlaylistBtn.addEventListener('click',()=>openPlaylistModal('rename'));
      dom.newPlaylistBtn.addEventListener('click',()=>openPlaylistModal('create'));
      dom.importPlaylistBtn.addEventListener('click',openPlaylistLinkModal);
      dom.importFileBtn.addEventListener('click',()=>dom.importPlaylistInput.click());
      dom.importPlaylistInput.addEventListener('change',handleImportPlaylistFile);
      dom.exportPlaylistBtn.addEventListener('click',exportPlaylistData);
      dom.playlistConfirmBtn.addEventListener('click',savePlaylistFromModal);
      dom.playlistCancelBtn.addEventListener('click',closePlaylistModal);
      dom.playlistCloseBtn.addEventListener('click',closePlaylistModal);
      dom.playlistModal.addEventListener('click',e=>{if(e.target===dom.playlistModal)closePlaylistModal();});
      dom.playlistSelect.addEventListener('change',()=>{
        state.libraryRenderLimit=80;
        state.playContext.playlistId=dom.playlistSelect.value;
        renderPlaylistList();
      });
      dom.addCurrentBtn.addEventListener('click',addCurrentToPlaylist);
      dom.hotChartSelect.addEventListener('change',()=>loadQQHotTracks(dom.hotChartSelect.value));
      dom.refreshHotChartBtn.addEventListener('click',()=>loadQQHotCharts(true));

      dom.playlistLinkInput.addEventListener('input',updatePlaylistDetection);
      dom.playlistLinkConfirm.addEventListener('click',importExternalPlaylist);
      dom.playlistLinkCancel.addEventListener('click',closePlaylistLinkModal);
      dom.playlistLinkClose.addEventListener('click',closePlaylistLinkModal);
      dom.playlistLinkModal.addEventListener('click',event=>{if(event.target===dom.playlistLinkModal)closePlaylistLinkModal();});

      dom.shortcutToggleBtn.addEventListener('click',()=>{dom.shortcutModal.classList.add('show');});
      dom.shortcutCloseBtn.addEventListener('click',()=>{dom.shortcutModal.classList.remove('show');});
      dom.shortcutModal.addEventListener('click',e=>{if(e.target===dom.shortcutModal)dom.shortcutModal.classList.remove('show');});

      document.querySelectorAll('.playmode-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
          state.playMode=btn.dataset.mode;
          setPlaymodeUI();
          if(state.playMode==='list')showToast(t('toastPlaymodeList'));
          else if(state.playMode==='single')showToast(t('toastPlaymodeSingle'));
          else showToast(t('toastPlaymodeShuffle'));
        });
      });

      document.addEventListener('keydown',e=>{
        const tag=document.activeElement.tagName.toLowerCase();
        const typing=(tag==='input'||tag==='textarea');
        const playlistOpen=dom.playlistModal.classList.contains('show');
        const playlistLinkOpen=dom.playlistLinkModal.classList.contains('show');
        const shortcutOpen=dom.shortcutModal.classList.contains('show');
        const queueOpen=document.body.classList.contains('queue-open');
        const aiReviewOpen=document.body.classList.contains('ai-review-open');

        if(e.key==='Escape'){
          if(aiReviewOpen){setAIReviewOpen(false);dom.aiReviewToggleBtn?.focus({preventScroll:true});return;}
          if(queueOpen){setQueueOpen(false);dom.queueToggleBtn?.focus({preventScroll:true});return;}
          if(dom.albumInfoModal?.classList.contains('show')){
            closeAlbumInfoModal();
            return;
          }
          if(isLyricsFullscreen()){
            setLyricsFullscreen(false);
            return;
          }
          if(playlistOpen)closePlaylistModal();
          if(playlistLinkOpen)closePlaylistLinkModal();
          if(shortcutOpen)dom.shortcutModal.classList.remove('show');
          return;
        }

        if(playlistOpen || playlistLinkOpen || shortcutOpen || queueOpen || aiReviewOpen){
          return;
        }

        if(e.code==='Space'&&!typing){e.preventDefault();togglePlayPause();}
        if(e.key==='ArrowRight'&&!typing){dom.audio.currentTime=(dom.audio.currentTime||0)+5;}
        if(e.key==='ArrowLeft'&&!typing){dom.audio.currentTime=Math.max(0,(dom.audio.currentTime||0)-5);}
        if(e.key==='ArrowUp'&&!typing){dom.audio.volume=Math.min(1,(dom.audio.volume||0)+0.05);dom.volumeSlider.value=dom.audio.volume;}
        if(e.key==='ArrowDown'&&!typing){dom.audio.volume=Math.max(0,(dom.audio.volume||0)-0.05);dom.volumeSlider.value=dom.audio.volume;}
        if((e.key==='n'||e.key==='N')&&!typing)playNext('next');
        if((e.key==='p'||e.key==='P')&&!typing)playNext('prev');
        if((e.key==='f'||e.key==='F')&&!typing)toggleFavoriteCurrent();
        if((e.key==='l'||e.key==='L')&&!typing){
          state.lyricsAlt=!state.lyricsAlt;
          dom.lyricsContainer.classList.toggle('alt-style',state.lyricsAlt);
          showToast(t('toastLyricStyleSwitched'));
        }
        if((e.key==='m'||e.key==='M')&&!typing){
          state.muted=!state.muted;
          dom.audio.muted=state.muted;
        }
        if(e.key==='/'&&!typing){e.preventDefault();dom.searchInput.focus();dom.searchInput.select();}
      });
    }

    // ===================== 初始化 =====================

    function init(){
      setupDOM();
      try{const lg=localStorage.getItem('pikachu-music-lang'); if(lg)state.language=lg;}catch(e){}
      loadLibraryFromStorage();
      try{const storedSize=Number(localStorage.getItem(LYRICS_FONT_STORAGE_KEY));if(storedSize)state.lyricsFontSize=storedSize;}catch(e){}
      try{const storedCollapsed=localStorage.getItem(LIBRARY_COLLAPSED_STORAGE_KEY);if(storedCollapsed!==null)state.libraryCollapsed=storedCollapsed!=='0';}catch(e){}
      try{const scriptMode=localStorage.getItem(LYRIC_SCRIPT_STORAGE_KEY);if(scriptMode==='simplified'||scriptMode==='traditional')state.lyricScriptMode=scriptMode;}catch(e){}
      try{state.lyricAssistEnabled=localStorage.getItem(LYRIC_ASSIST_STORAGE_KEY)==='1';}catch(e){}
      loadLyricTranslationCache();
      loadAIReviewCache();
      applyLyricsFontSize(state.lyricsFontSize);
      setLibraryCollapsed(state.libraryCollapsed,false);
      setupParticles();
      setupRipple();
      setupEvents();
      setupSystemMediaControls();
      setupPlaybackResilience();
      setupMobileNavigation();
      setLanguage(state.language);
      updateLyricsToolsUI();
      syncMobileHotCommentVisibility();
      renderPlaylistOptions();
      renderPlaylistList();
      renderQueue();
      updateAIReviewUI();
      setPlaymodeUI();
      dom.audio.volume=parseFloat(dom.volumeSlider.value);
      applyThemePalette(themeHashPalette('Nie Music'),null);
      const loadInitialHotComment=()=>loadHotComment().catch(error=>console.warn('initial hot comment failed',error));
      if('requestIdleCallback' in window){
        requestIdleCallback(loadInitialHotComment,{timeout:1600});
      }else{
        setTimeout(loadInitialHotComment,600);
      }
    }

    document.addEventListener('DOMContentLoaded',init);
  })();

(function(){
  const mobileMedia=window.matchMedia('(max-width: 860px)');
  const viewport=window.visualViewport;
  const root=document.documentElement;
  const searchInput=document.getElementById('search-input');
  let stableHeight=0;
  let raf=0;

  if(searchInput){
    searchInput.setAttribute('inputmode','search');
    searchInput.setAttribute('enterkeyhint','search');
    searchInput.setAttribute('autocomplete','off');
    searchInput.setAttribute('autocapitalize','off');
    searchInput.setAttribute('spellcheck','false');
  }

  function isEditableFocused(){
    const el=document.activeElement;
    return !!el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
  }

  function applyViewport(){
    raf=0;
    const current=Math.max(1,Math.round(viewport?viewport.height:window.innerHeight));
    const windowHeight=window.innerHeight;
    if(!stableHeight)stableHeight=Math.max(current,windowHeight);
    const focused=isEditableFocused();

    if(!focused || current>stableHeight-36){
      stableHeight=Math.max(stableHeight,current,windowHeight);
    }

    root.style.setProperty('--visual-height',current+'px');

    const keyboardOpen=mobileMedia.matches && focused && current<stableHeight-110;
    document.body.classList.toggle('keyboard-open',keyboardOpen);

    if(keyboardOpen){
      const searchPanel=document.querySelector('.search-panel.mobile-active');
      if(searchPanel)searchPanel.scrollTop=0;
    }
  }

  function scheduleViewportSync(){
    if(raf)cancelAnimationFrame(raf);
    raf=requestAnimationFrame(applyViewport);
  }

  if(viewport){
    viewport.addEventListener('resize',scheduleViewportSync,{passive:true});
    viewport.addEventListener('scroll',scheduleViewportSync,{passive:true});
  }
  window.addEventListener('resize',scheduleViewportSync,{passive:true});
  window.addEventListener('orientationchange',()=>{
    stableHeight=0;
    setTimeout(scheduleViewportSync,80);
    setTimeout(scheduleViewportSync,360);
  },{passive:true});

  if(searchInput){
    searchInput.addEventListener('focus',()=>{
      setTimeout(scheduleViewportSync,40);
      setTimeout(scheduleViewportSync,260);
    });
    searchInput.addEventListener('blur',()=>{
      setTimeout(()=>{
        document.body.classList.remove('keyboard-open');
        stableHeight=Math.max(stableHeight,window.innerHeight,viewport?viewport.height:0);
        scheduleViewportSync();
      },120);
    });
  }

  scheduleViewportSync();
})();

(function(){
  const desktopMedia=window.matchMedia('(min-width: 861px)');
  const root=document.documentElement;
  let raf=0;
  let currentShift=0;
  let ready=document.readyState==='complete';

  function applyEqualGap(){
    raf=0;

    if(!desktopMedia.matches){
      root.style.removeProperty('--desktop-cover-axis-shift');
      currentShift=0;
      return;
    }

    const panel=document.querySelector('.player-panel');
    const header=document.querySelector('.player-panel > .panel-header');
    const cover=document.querySelector('.player-panel .cover-wrapper');
    if(!panel || !header || !cover)return;

    const panelRect=panel.getBoundingClientRect();
    const headerRect=header.getBoundingClientRect();
    const coverRect=cover.getBoundingClientRect();

    const topGap=Math.max(0,coverRect.top-headerRect.bottom);
    const leftGap=coverRect.left-panelRect.left-currentShift;
    const shift=topGap-leftGap;

    /* 所有几何读取都在写入样式之前完成，避免强制同步布局。 */
    currentShift=shift;
    root.style.setProperty('--desktop-cover-axis-shift',`${shift.toFixed(2)}px`);
  }

  function scheduleEqualGap(){
    if(!ready)return;
    if(raf)cancelAnimationFrame(raf);
    raf=requestAnimationFrame(applyEqualGap);
  }

  window.addEventListener('load',()=>{
    ready=true;
    requestAnimationFrame(scheduleEqualGap);
  },{once:true});
  window.addEventListener('resize',scheduleEqualGap,{passive:true});
  window.addEventListener('orientationchange',scheduleEqualGap,{passive:true});

  if(desktopMedia.addEventListener){
    desktopMedia.addEventListener('change',scheduleEqualGap);
  }else if(desktopMedia.addListener){
    desktopMedia.addListener(scheduleEqualGap);
  }

  if('ResizeObserver' in window){
    const panel=document.querySelector('.player-panel');
    if(panel)new ResizeObserver(scheduleEqualGap).observe(panel);
  }

  /* 播放列表展开/收起会改变播放器宽度，监听 class 变化后重新对齐。 */
  new MutationObserver(scheduleEqualGap).observe(document.body,{attributes:true,attributeFilter:['class']});

})();
