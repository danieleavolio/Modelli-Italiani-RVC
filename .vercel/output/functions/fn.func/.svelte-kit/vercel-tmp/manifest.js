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
		client: {"start":"_app/immutable/entry/start.60d0e7ad.js","app":"_app/immutable/entry/app.144a1601.js","imports":["_app/immutable/entry/start.60d0e7ad.js","_app/immutable/chunks/scheduler.7a3a367e.js","_app/immutable/chunks/singletons.d38cb8ba.js","_app/immutable/entry/app.144a1601.js","_app/immutable/chunks/scheduler.7a3a367e.js","_app/immutable/chunks/index.984ea368.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
