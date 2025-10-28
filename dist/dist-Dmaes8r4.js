import { n as __esmMin } from "./chunk-DgPTj83v.js";
function getDefaultExportFromCjs(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function defaultSetTimout() {
	throw Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
	throw Error("clearTimeout has not been defined");
}
function runTimeout(e) {
	if (cachedSetTimeout === setTimeout) return setTimeout(e, 0);
	if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(e, 0);
	try {
		return cachedSetTimeout(e, 0);
	} catch {
		try {
			return cachedSetTimeout.call(null, e, 0);
		} catch {
			return cachedSetTimeout.call(this, e, 0);
		}
	}
}
function runClearTimeout(e) {
	if (cachedClearTimeout === clearTimeout) return clearTimeout(e);
	if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(e);
	try {
		return cachedClearTimeout(e);
	} catch {
		try {
			return cachedClearTimeout.call(null, e);
		} catch {
			return cachedClearTimeout.call(this, e);
		}
	}
}
function cleanUpNextTick() {
	!draining || !currentQueue || (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
}
function drainQueue() {
	if (!draining) {
		var e = runTimeout(cleanUpNextTick);
		draining = !0;
		for (var y = queue.length; y;) {
			for (currentQueue = queue, queue = []; ++queueIndex < y;) currentQueue && currentQueue[queueIndex].run();
			queueIndex = -1, y = queue.length;
		}
		currentQueue = null, draining = !1, runClearTimeout(e);
	}
}
function Item(e, y) {
	this.fun = e, this.array = y;
}
function noop() {}
var browser, process, cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, browserExports, process$1, init_dist = __esmMin((() => {
	browser = { exports: {} }, process = browser.exports = {}, (function() {
		try {
			cachedSetTimeout = typeof setTimeout == "function" ? setTimeout : defaultSetTimout;
		} catch {
			cachedSetTimeout = defaultSetTimout;
		}
		try {
			cachedClearTimeout = typeof clearTimeout == "function" ? clearTimeout : defaultClearTimeout;
		} catch {
			cachedClearTimeout = defaultClearTimeout;
		}
	})(), queue = [], draining = !1, queueIndex = -1, process.nextTick = function(e) {
		var y = Array(arguments.length - 1);
		if (arguments.length > 1) for (var b = 1; b < arguments.length; b++) y[b - 1] = arguments[b];
		queue.push(new Item(e, y)), queue.length === 1 && !draining && runTimeout(drainQueue);
	}, Item.prototype.run = function() {
		this.fun.apply(null, this.array);
	}, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function(e) {
		return [];
	}, process.binding = function(e) {
		throw Error("process.binding is not supported");
	}, process.cwd = function() {
		return "/";
	}, process.chdir = function(e) {
		throw Error("process.chdir is not supported");
	}, process.umask = function() {
		return 0;
	}, browserExports = browser.exports, process$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
}));
export { process$1 as n, init_dist as t };
