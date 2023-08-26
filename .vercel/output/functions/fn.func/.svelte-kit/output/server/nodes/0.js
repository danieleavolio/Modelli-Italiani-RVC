

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5a131c27.js","_app/immutable/chunks/scheduler.5ae035c3.js","_app/immutable/chunks/index.6d632cb6.js"];
export const stylesheets = ["_app/immutable/assets/0.64d75535.css"];
export const fonts = [];
