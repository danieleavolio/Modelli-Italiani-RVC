export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dataset_modelli_italiani.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.79b2851c.js","app":"_app/immutable/entry/app.b7ce4965.js","imports":["_app/immutable/entry/start.79b2851c.js","_app/immutable/chunks/scheduler.5ae035c3.js","_app/immutable/chunks/singletons.fbef8056.js","_app/immutable/entry/app.b7ce4965.js","_app/immutable/chunks/scheduler.5ae035c3.js","_app/immutable/chunks/index.6d632cb6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
