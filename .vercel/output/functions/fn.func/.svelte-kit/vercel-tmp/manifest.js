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
		client: {"start":"_app/immutable/entry/start.2a3694ca.js","app":"_app/immutable/entry/app.dd24da9b.js","imports":["_app/immutable/entry/start.2a3694ca.js","_app/immutable/chunks/scheduler.7a3a367e.js","_app/immutable/chunks/singletons.f8e213ac.js","_app/immutable/entry/app.dd24da9b.js","_app/immutable/chunks/scheduler.7a3a367e.js","_app/immutable/chunks/index.984ea368.js"],"stylesheets":[],"fonts":[]},
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
