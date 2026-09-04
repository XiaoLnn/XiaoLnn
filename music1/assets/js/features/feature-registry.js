import {idleLoad} from '../runtime/loader.js';

const features = [
  './lyrics-feature.js',
  './search-feature.js',
  './playlist-feature.js'
];

export function loadOptionalFeatures(){
  idleLoad(()=>features.forEach(item=>import(item).catch(()=>{})));
}
