

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9f0e1c62.js","_app/immutable/chunks/scheduler.5ae035c3.js","_app/immutable/chunks/index.6d632cb6.js","_app/immutable/chunks/singletons.321143b1.js"];
export const stylesheets = [];
export const fonts = [];
