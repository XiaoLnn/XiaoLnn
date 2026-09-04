import('./core.js').then(()=>{
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadOptional)
  } else {
    setTimeout(loadOptional,1000)
  }
})

function loadOptional(){
  import('./features/search.js')
  import('./features/lyrics.js')
  import('./features/player.js')
}
