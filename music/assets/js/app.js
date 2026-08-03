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
        playerStatusIdle:"待机",
        playerStatusLoading:"加载音源中…",
        playerStatusPlaying:"播放中",
        playerStatusPaused:"已暂停",
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
        tabResults:"搜索结果",
        tabFavorites:"我的收藏",
        tabCustomLists:"自建歌单",
        playlistInfoResults:"搜索结果列表",
        playlistInfoFavorites:"收藏列表",
        playlistInfoPlaylist:"歌单",
        newPlaylist:"新建歌单",
        importPlaylist:"导入歌单",
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
        toastPlaylistCreated:"歌单创建成功。",
        toastPlaylistDeleted:"歌单已删除。",
        toastTrackRemovedFromPlaylist:"已从歌单移除。",
        confirmDeletePlaylist:"确定要删除这个歌单吗？",
        confirmRemoveTrack:"确定要从歌单中移除这首歌吗？",
        toastPlaylistImported:"导入完成",
        toastPlaylistImportEmpty:"导入文件里没有可用歌单或收藏。",
        toastPlaylistImportError:"导入失败，请确认文件是本站导出的 JSON。",
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
        playerStatusIdle:"Standby",
        playerStatusLoading:"Loading audio…",
        playerStatusPlaying:"Playing",
        playerStatusPaused:"Paused",
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
        tabResults:"Default",
        tabFavorites:"Favorites",
        tabCustomLists:"Playlists",
        playlistInfoResults:"Search Result List",
        playlistInfoFavorites:"Favorites List",
        playlistInfoPlaylist:"Playlist",
        newPlaylist:"Create",
        importPlaylist:"Import",
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
        toastPlaylistCreated:"Playlist created.",
        toastPlaylistDeleted:"Playlist deleted.",
        toastTrackRemovedFromPlaylist:"Removed from playlist.",
        confirmDeletePlaylist:"Delete this playlist?",
        confirmRemoveTrack:"Remove this song from the playlist?",
        toastPlaylistImported:"Import completed",
        toastPlaylistImportEmpty:"No usable playlists or favorites found in this file.",
        toastPlaylistImportError:"Import failed. Please choose a JSON file exported by this site.",
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
      currentTrack:null,
      playContext:{type:'results',index:-1,playlistId:null},
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
      muted:false
    };

    const LIBRARY_STORAGE_KEY = 'pikachu-music-library-v1';
    const LYRIC_SCRIPT_STORAGE_KEY = 'nie-music-lyric-script';
    const LYRIC_ASSIST_STORAGE_KEY = 'nie-music-lyric-assist';
    const PINYIN_PRO_URL = 'https://unpkg.com/pinyin-pro@3.18.2/dist/index.js';
    const LYRIC_TRANSLATION_CACHE_KEY = 'nie-music-lyric-translation-cache-v1';

    let openCCConverters=null;
    let openCCLoadPromise=null;
    let translationQueue=Promise.resolve();
    let pinyinLoadPromise=null;
    const lyricTranslationCache=new Map();

    const dom = {};
    let audioLevel = 0;

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
        'quality','qualityLabel','qqQualityText','jooxQualityText','pay'
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
      track.audioUrl=null;
      track.lrc=null;
      track.lrcUrl=null;
      return track;
    }

    function getLibrarySnapshot(){
      return {
        version:1,
        savedAt:new Date().toISOString(),
        favorites:state.favorites.map(serializeTrack).filter(Boolean),
        playlists:state.playlists.map(pl=>({
          id:pl.id,
          name:pl.name,
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
          state.trackMap.set(uid,track);state.searchResults.push(track);added++;
        });
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
      if(!state.currentTrack && state.searchResults.length){
        playFromList('results',0);
      }
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
      function pickBestPlayUrl(d){
        if(d.song_play_url_sq)return {url:d.song_play_url_sq,tag:'lossless',label:'LOSSLESS',text:`SQ ${d.kbps_sq||''}`.trim()};
        if(d.song_play_url_pq)return {url:d.song_play_url_pq,tag:'lossless',label:'LOSSLESS',text:`PQ ${d.kbps_pq||''}`.trim()};
        if(d.song_play_url_accom)return {url:d.song_play_url_accom,tag:'hq',label:'HQ',text:`ACCOM ${d.kbps_accom||''}`.trim()};
        if(d.song_play_url_hq)return {url:d.song_play_url_hq,tag:'hq',label:'HQ',text:`HQ ${d.kbps_hq||''}`.trim()};
        if(d.song_play_url_standard)return {url:d.song_play_url_standard,tag:'standard',label:'STD',text:`STD ${d.kbps_standard||''}`.trim()};
        if(d.song_play_url_fq)return {url:d.song_play_url_fq,tag:'low',label:'LOW',text:`FQ ${d.kbps_fq||''}`.trim()};
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
        const directCover=cyFirst(d,['album_pic','albumPic','pic','picurl','cover','image','singer_pic','singerPic'],'');
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
      if(track.detailsLoaded && track.audioUrl && (track.lrc || !track.lrcUrl) && (track.source!=='netease' || (track.cover && track.lrc))) return;
      dom.playerStatus.textContent=t('playerStatusLoading');
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
          pageUrl,detailsLoaded:false,quality:null,qualityLabel:null,keyword:(song+' '+singer).trim(),neteaseIndex:1
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
        const translated=decodeHtmlEntities(payload?.responseData?.translatedText||'').trim();
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
        if(!assist||!state.lyricAssistEnabled)return;

        assist.hidden=false;
        assist.classList.remove('is-loading');
        assist.removeAttribute('data-assist-kind');
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
        if(stamps.length){
          if(!lyricText)continue;
          stamps.forEach(time=>out.push({time,text:lyricText}));
        }else if(lyricText){
          plain.push({time:null,text:lyricText});
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
      const wrap=dom.lyricsInner;
      wrap.querySelectorAll('.lyrics-line.active').forEach(el=>el.classList.remove('active'));
      const act=wrap.querySelector(`.lyrics-line[data-index="${idx}"]`);
      if(act){
        act.classList.add('active');
        if(Date.now()>=lyricAutoFollowPausedUntil){
          const box=dom.lyricsContainer;
          const target=Math.max(0,act.offsetTop-box.clientHeight*0.45);
          box.scrollTo({top:target,behavior:'smooth'});
        }
      }
    }

    function isLyricsFullscreen(){
      return document.body.classList.contains('lyrics-fullscreen');
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

    function setLyricsFullscreen(expanded){
      const shouldExpand=Boolean(expanded);
      if(shouldExpand){
        activateMobilePanel('player');
        lyricsScrollBeforeFullscreen=dom.lyricsContainer?.scrollTop||0;
        if(dom.lyricsInner&&!dom.lyricsInner.children.length)renderLyrics();
      }
      document.body.classList.toggle('lyrics-fullscreen',shouldExpand);
      updateLyricsFullscreenUI();
      requestAnimationFrame(()=>{
        if(!dom.lyricsContainer)return;
        if(shouldExpand){
          const active=dom.lyricsInner.querySelector('.lyrics-line.active');
          dom.lyricsContainer.scrollTop=active
            ? Math.max(0,active.offsetTop-dom.lyricsContainer.clientHeight*.42)
            : Math.max(0,lyricsScrollBeforeFullscreen);
        }else{
          dom.lyricsContainer.scrollTop=Math.max(0,lyricsScrollBeforeFullscreen);
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
      state.currentTrack=track;
      state.playContext=context||state.playContext;

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
        if(dom.albumInfoModal?.classList.contains('show'))updateAlbumInfoModal();
      };

      dom.playerStatus.textContent=t('playerStatusLoading');
      applyUI();

      state.lyricLines = track.lrc ? parseLRC(track.lrc) : [];
      renderLyrics();
      updateMainFavButton();

      try{
        await ensureTrackDetails(track);
        applyUI();
        state.lyricLines = track.lrc ? parseLRC(track.lrc) : [];
        renderLyrics();
        if(!track.audioUrl){showToast(t('toastPlayError'));dom.playerStatus.textContent=t('playerStatusIdle');return;}
        track.audioUrl=cyNormalizeMediaUrl(track.audioUrl,'audio');
        if(!track.audioUrl){showToast(t('toastPlayError'));dom.playerStatus.textContent=t('playerStatusIdle');return;}
        dom.audio.src=track.audioUrl;
        await dom.audio.play();
        state.isPlaying=true;
        setPlayButtonState(true);
        dom.playerStatus.textContent=t('playerStatusPlaying');
      }catch(e){
        console.error(e);
        showToast(t('toastPlayError'));
        dom.playerStatus.textContent=t('playerStatusIdle');
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

    function handleDownloadCurrent(){
      const tr=state.currentTrack;
      if(!tr||!tr.audioUrl){showToast(t('toastDownloadNotReady'));return;}
      window.open(tr.audioUrl,'_blank');
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
        const txt=document.createElement('span');txt.textContent=t(key);src.appendChild(dot);src.appendChild(txt);right.appendChild(badge);right.appendChild(src);
        item.appendChild(cover);item.appendChild(meta);item.appendChild(right);
        item.addEventListener('click',()=>{const visible=getInterleavedSearchList();const idx=visible.findIndex(x=>x.uid===track.uid);playFromList('results',idx);});
        wrap.appendChild(item);
      });
      syncMobileHotCommentVisibility();
    }

    function updatePlaylistInfoLabel(){
      const tab=document.querySelector('.playlist-tab.active')?.dataset.tab||'results';
      if(tab==='results') dom.playlistInfo.textContent = t('playlistInfoResults');
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
      const activeTab=document.querySelector('.playlist-tab.active')?.dataset.tab||'results';
      let list=[];
      if(activeTab==='results'){
        list=getInterleavedSearchList();
        if(!list.length && state.searchResults.length){
          list=[...state.searchResults];
        }
        dom.playlistSelectRow.style.display='none';
      }else if(activeTab==='favorites'){
        list=state.favorites;
        dom.playlistSelectRow.style.display='none';
      }else{
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

      list.forEach((track,idx)=>{
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
        const removeBtn=document.createElement('button');
        removeBtn.className='btn btn-ghost btn-icon ripple-target';
        removeBtn.textContent='×';
        removeBtn.title=t('removeFromPlaylist');

        pBtn.addEventListener('click',ev=>{
          ev.stopPropagation();
          if(activeTab==='results'){
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
        act.appendChild(fBtn);
        if(activeTab==='playlists') act.appendChild(removeBtn);
        item.appendChild(index);item.appendChild(meta);item.appendChild(act);
        item.addEventListener('click',()=>pBtn.click());
        wrap.appendChild(item);
      });

      // Do not auto-scroll the right playlist after every re-render.
      // Re-rendering can happen when favoriting/unfavoriting a track; forcing
      // the active track into view at that moment may push the playlist header
      // and controls out of the visible area in some layouts.
    }

    // ===================== 歌单弹窗 =====================

    function openPlaylistModal(){
      dom.playlistModal.classList.add('show');
      dom.playlistNameInput.value='';
      setTimeout(()=>dom.playlistNameInput.focus(),50);
    }
    function closePlaylistModal(){
      dom.playlistModal.classList.remove('show');
    }
    function createPlaylist(){
      let name=dom.playlistNameInput.value.trim();
      if(!name)name=state.language==='zh'?'未命名歌单':'Untitled Playlist';
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
      function resize(){
        const dpr=window.devicePixelRatio||1;
        canvas.width=window.innerWidth*dpr;
        canvas.height=window.innerHeight*dpr;
        ctx.setTransform(dpr,0,0,dpr,0,0);
      }
      resize();window.addEventListener('resize',resize);
      const parts=[];
      const N=90;
      for(let i=0;i<N;i++){
        parts.push({
          x:Math.random()*window.innerWidth,
          y:Math.random()*window.innerHeight,
          vx:(Math.random()-0.5)*0.4,
          vy:(Math.random()-0.5)*0.4,
          r:1+Math.random()*2.5,
          baseR:1+Math.random()*2.5,
          hue:200+Math.random()*120,
          a:0.22+Math.random()*0.3
        });
      }
      let mouse={x:window.innerWidth/2,y:window.innerHeight/2};
      window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;});
      function tick(){
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        const pulse = 1 + audioLevel * 2.2;
        for(const p of parts){
          p.x+=p.vx; p.y+=p.vy; p.hue+=0.08;
          if(p.x<-40)p.x=window.innerWidth+40;
          if(p.x>window.innerWidth+40)p.x=-40;
          if(p.y<-40)p.y=window.innerHeight+40;
          if(p.y>window.innerHeight+40)p.y=-40;
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

      dom.coverImg=$('cover-img');
      dom.coverWrapper=$('cover-detail-trigger');
      dom.coverPlaceholder=document.querySelector('.cover-placeholder');
      dom.trackTitle=$('track-title');
      dom.trackArtist=$('track-artist');
      dom.trackSourcePill=$('track-source-pill');
      dom.trackQualityPill=$('track-quality-pill');
      dom.playerStatus=$('player-status');
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
      dom.deletePlaylistBtn=$('delete-playlist-btn');
      dom.newPlaylistBtn=$('new-playlist-btn');
      dom.importPlaylistBtn=$('import-playlist-btn');
      dom.importPlaylistInput=$('import-playlist-input');
      dom.exportPlaylistBtn=$('export-playlist-btn');
      dom.addCurrentBtn=$('add-current-btn');
      dom.libraryToggle=$('library-toggle');

      dom.playlistModal=$('playlist-modal');
      dom.playlistNameInput=$('playlist-name-input');
      dom.playlistConfirmBtn=$('playlist-confirm-btn');
      dom.playlistCancelBtn=$('playlist-cancel-btn');
      dom.playlistCloseBtn=$('playlist-close');

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
        dom.libraryToggle.title=state.libraryCollapsed?'展开音乐库':'折叠音乐库';
      }
      if(persist){try{localStorage.setItem(LIBRARY_COLLAPSED_STORAGE_KEY,state.libraryCollapsed?'1':'0');}catch(e){}}
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
        const activeTab=document.querySelector('.playlist-tab.active')?.dataset.tab||'results';
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
      dom.lyricsFullBtn.addEventListener('click',()=>setLyricsFullscreen(!isLyricsFullscreen()));
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
        seekFromLyricElement(event.target);
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
      });
      dom.audio.addEventListener('play',()=>{
        state.isPlaying=true;
        setPlayButtonState(true);
        dom.playerStatus.textContent=t('playerStatusPlaying');
      });
      dom.audio.addEventListener('pause',()=>{
        state.isPlaying=false;
        setPlayButtonState(false);
        dom.playerStatus.textContent=t('playerStatusPaused');
        audioLevel = 0;
      });
      dom.audio.addEventListener('ended',()=>{
        audioLevel = 0;
        playNext('next');
      });

      dom.progressWrapper.addEventListener('click',e=>{
        const rect=dom.progressWrapper.getBoundingClientRect();
        const r=(e.clientX-rect.left)/rect.width;
        const dur=dom.audio.duration||0;
        dom.audio.currentTime=Math.max(0,Math.min(dur,dur*r));
      });

      document.querySelectorAll('.playlist-tab').forEach(tab=>{
        tab.addEventListener('click',()=>{
          document.querySelectorAll('.playlist-tab').forEach(el=>el.classList.toggle('active',el===tab));
          const tName=tab.dataset.tab;
          if(tName==='results'){
            state.playContext.type='results';state.playContext.playlistId=null;
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
      dom.newPlaylistBtn.addEventListener('click',openPlaylistModal);
      dom.importPlaylistBtn.addEventListener('click',()=>dom.importPlaylistInput.click());
      dom.importPlaylistInput.addEventListener('change',handleImportPlaylistFile);
      dom.exportPlaylistBtn.addEventListener('click',exportPlaylistData);
      dom.playlistConfirmBtn.addEventListener('click',createPlaylist);
      dom.playlistCancelBtn.addEventListener('click',closePlaylistModal);
      dom.playlistCloseBtn.addEventListener('click',closePlaylistModal);
      dom.playlistModal.addEventListener('click',e=>{if(e.target===dom.playlistModal)closePlaylistModal();});
      dom.playlistSelect.addEventListener('change',()=>{
        state.playContext.playlistId=dom.playlistSelect.value;
        renderPlaylistList();
      });
      dom.addCurrentBtn.addEventListener('click',addCurrentToPlaylist);

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
        const shortcutOpen=dom.shortcutModal.classList.contains('show');

        if(e.key==='Escape'){
          if(dom.albumInfoModal?.classList.contains('show')){
            closeAlbumInfoModal();
            return;
          }
          if(isLyricsFullscreen()){
            setLyricsFullscreen(false);
            return;
          }
          if(playlistOpen)closePlaylistModal();
          if(shortcutOpen)dom.shortcutModal.classList.remove('show');
          return;
        }

        if(playlistOpen || shortcutOpen){
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
      applyLyricsFontSize(state.lyricsFontSize);
      setLibraryCollapsed(state.libraryCollapsed,false);
      setupParticles();
      setupRipple();
      setupEvents();
      setupMobileNavigation();
      setLanguage(state.language);
      updateLyricsToolsUI();
      syncMobileHotCommentVisibility();
      renderPlaylistOptions();
      renderPlaylistList();
      setPlaymodeUI();
      dom.audio.volume=parseFloat(dom.volumeSlider.value);
      applyThemePalette(themeHashPalette('Nie Music'),null);
      loadHotComment();
    }

    document.addEventListener('DOMContentLoaded',init);
  })();

(function(){
  const mobileMedia=window.matchMedia('(max-width: 860px)');
  const viewport=window.visualViewport;
  const root=document.documentElement;
  const searchInput=document.getElementById('search-input');
  let stableHeight=Math.max(window.innerHeight,viewport?viewport.height:0);
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
    const focused=isEditableFocused();

    if(!focused || current>stableHeight-36){
      stableHeight=Math.max(stableHeight,current,window.innerHeight);
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
