const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.72270ff3.js","app":"_app/immutable/entry/app.92039a37.js","imports":["_app/immutable/entry/start.72270ff3.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.dcab830f.js","_app/immutable/entry/app.92039a37.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-4f4514a9.js')),
			__memo(() => import('./chunks/1-3526e819.js')),
			__memo(() => import('./chunks/2-68b9556f.js')),
			__memo(() => import('./chunks/3-b9ba2640.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/botanical",
				pattern: /^\/botanical\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
