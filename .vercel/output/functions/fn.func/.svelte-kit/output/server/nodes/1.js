

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.832523f6.js","_app/immutable/chunks/scheduler.7a3a367e.js","_app/immutable/chunks/index.984ea368.js","_app/immutable/chunks/singletons.d38cb8ba.js"];
export const stylesheets = [];
export const fonts = [];
