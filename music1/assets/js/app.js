// Nie Music modular loader
// Core is loaded first. Non-critical modules are loaded after idle.
(async()=>{
  await import('./core/app-core.js');
  if ('requestIdleCallback' in window) {
    requestIdleCallback(()=>import('./modules/performance.js'));
  } else {
    setTimeout(()=>import('./modules/performance.js'),800);
  }
})();
