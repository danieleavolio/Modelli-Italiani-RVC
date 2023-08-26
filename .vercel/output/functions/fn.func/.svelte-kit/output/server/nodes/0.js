import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.fb59e6c7.js","_app/immutable/chunks/scheduler.7a3a367e.js","_app/immutable/chunks/index.984ea368.js"];
export const stylesheets = ["_app/immutable/assets/0.64d75535.css"];
export const fonts = [];
