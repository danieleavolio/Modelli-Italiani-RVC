import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.ddbff989.js","_app/immutable/chunks/scheduler.5ae035c3.js","_app/immutable/chunks/index.6d632cb6.js"];
export const stylesheets = ["_app/immutable/assets/2.5ffa3712.css"];
export const fonts = [];
