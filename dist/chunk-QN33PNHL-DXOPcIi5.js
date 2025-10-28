import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { c as configureSvgSize } from "./chunk-ABZYJK2D-CASc1KXE.js";
var setupViewPortForSVG = /* @__PURE__ */ __name((n, i, o, s) => {
	n.attr("class", o);
	let { width: c, height: l, x: u, y: d } = calculateDimensionsWithPadding(n, i);
	configureSvgSize(n, l, c, s);
	let f = createViewBox(u, d, c, l, i);
	n.attr("viewBox", f), log.debug(`viewBox configured: ${f} with padding: ${i}`);
}, "setupViewPortForSVG"), calculateDimensionsWithPadding = /* @__PURE__ */ __name((e, n) => {
	let r = e.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: r.width + n * 2,
		height: r.height + n * 2,
		x: r.x,
		y: r.y
	};
}, "calculateDimensionsWithPadding"), createViewBox = /* @__PURE__ */ __name((e, n, r, i, a) => `${e - a} ${n - a} ${r} ${i}`, "createViewBox");
export { setupViewPortForSVG as t };
