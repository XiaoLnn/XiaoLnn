// Runtime loader: keep first paint path small
export function idleLoad(task){
  if ('requestIdleCallback' in window) {
    requestIdleCallback(task,{timeout:1500});
  } else {
    setTimeout(task,800);
  }
}

export function lazyImport(path){
  return import(path);
}
