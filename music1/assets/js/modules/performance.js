// Runtime architecture module
// Reserved for optional effects/analytics/lazy features.
export function enablePerformanceMode(){
  if (window.matchMedia('(max-width:860px)').matches){
    document.documentElement.classList.add('mobile-mode');
  }
}
enablePerformanceMode();
