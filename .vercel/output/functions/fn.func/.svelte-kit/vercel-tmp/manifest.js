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
		client: {"start":"_app/immutable/entry/start.7781a48b.js","app":"_app/immutable/entry/app.bde46fd6.js","imports":["_app/immutable/entry/start.7781a48b.js","_app/immutable/chunks/scheduler.5ae035c3.js","_app/immutable/chunks/singletons.321143b1.js","_app/immutable/entry/app.bde46fd6.js","_app/immutable/chunks/scheduler.5ae035c3.js","_app/immutable/chunks/index.6d632cb6.js"],"stylesheets":[],"fonts":[]},
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
