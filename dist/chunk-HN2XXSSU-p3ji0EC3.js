import { r as __name } from "./src-B-gAGmo8.js";
var markerOffsets = {
	aggregation: 17.25,
	extension: 17.25,
	composition: 17.25,
	dependency: 6,
	lollipop: 13.5,
	arrow_point: 4
}, markerOffsets2 = {
	arrow_point: 9,
	arrow_cross: 12.5,
	arrow_circle: 12.5
};
function calculateDeltaAndAngle(e, t) {
	if (e === void 0 || t === void 0) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	e = pointTransformer(e), t = pointTransformer(t);
	let [n, r] = [e.x, e.y], [a, o] = [t.x, t.y], s = a - n, c = o - r;
	return {
		angle: Math.atan(c / s),
		deltaX: s,
		deltaY: c
	};
}
__name(calculateDeltaAndAngle, "calculateDeltaAndAngle");
var pointTransformer = /* @__PURE__ */ __name((e) => Array.isArray(e) ? {
	x: e[0],
	y: e[1]
} : e, "pointTransformer"), getLineFunctionsWithOffset = /* @__PURE__ */ __name((n) => ({
	x: /* @__PURE__ */ __name(function(e, a, o) {
		let s = 0, c = pointTransformer(o[0]).x < pointTransformer(o[o.length - 1]).x ? "left" : "right";
		if (a === 0 && Object.hasOwn(markerOffsets, n.arrowTypeStart)) {
			let { angle: e, deltaX: i } = calculateDeltaAndAngle(o[0], o[1]);
			s = markerOffsets[n.arrowTypeStart] * Math.cos(e) * (i >= 0 ? 1 : -1);
		} else if (a === o.length - 1 && Object.hasOwn(markerOffsets, n.arrowTypeEnd)) {
			let { angle: e, deltaX: i } = calculateDeltaAndAngle(o[o.length - 1], o[o.length - 2]);
			s = markerOffsets[n.arrowTypeEnd] * Math.cos(e) * (i >= 0 ? 1 : -1);
		}
		let l = Math.abs(pointTransformer(e).x - pointTransformer(o[o.length - 1]).x), u = Math.abs(pointTransformer(e).y - pointTransformer(o[o.length - 1]).y), d = Math.abs(pointTransformer(e).x - pointTransformer(o[0]).x), f = Math.abs(pointTransformer(e).y - pointTransformer(o[0]).y), p = markerOffsets[n.arrowTypeStart], m = markerOffsets[n.arrowTypeEnd];
		if (l < m && l > 0 && u < m) {
			let e = m + 1 - l;
			e *= c === "right" ? -1 : 1, s -= e;
		}
		if (d < p && d > 0 && f < p) {
			let e = p + 1 - d;
			e *= c === "right" ? -1 : 1, s += e;
		}
		return pointTransformer(e).x + s;
	}, "x"),
	y: /* @__PURE__ */ __name(function(e, a, o) {
		let s = 0, c = pointTransformer(o[0]).y < pointTransformer(o[o.length - 1]).y ? "down" : "up";
		if (a === 0 && Object.hasOwn(markerOffsets, n.arrowTypeStart)) {
			let { angle: e, deltaY: i } = calculateDeltaAndAngle(o[0], o[1]);
			s = markerOffsets[n.arrowTypeStart] * Math.abs(Math.sin(e)) * (i >= 0 ? 1 : -1);
		} else if (a === o.length - 1 && Object.hasOwn(markerOffsets, n.arrowTypeEnd)) {
			let { angle: e, deltaY: i } = calculateDeltaAndAngle(o[o.length - 1], o[o.length - 2]);
			s = markerOffsets[n.arrowTypeEnd] * Math.abs(Math.sin(e)) * (i >= 0 ? 1 : -1);
		}
		let l = Math.abs(pointTransformer(e).y - pointTransformer(o[o.length - 1]).y), u = Math.abs(pointTransformer(e).x - pointTransformer(o[o.length - 1]).x), d = Math.abs(pointTransformer(e).y - pointTransformer(o[0]).y), f = Math.abs(pointTransformer(e).x - pointTransformer(o[0]).x), p = markerOffsets[n.arrowTypeStart], m = markerOffsets[n.arrowTypeEnd];
		if (l < m && l > 0 && u < m) {
			let e = m + 1 - l;
			e *= c === "up" ? -1 : 1, s -= e;
		}
		if (d < p && d > 0 && f < p) {
			let e = p + 1 - d;
			e *= c === "up" ? -1 : 1, s += e;
		}
		return pointTransformer(e).y + s;
	}, "y")
}), "getLineFunctionsWithOffset");
export { markerOffsets as n, markerOffsets2 as r, getLineFunctionsWithOffset as t };

//# sourceMappingURL=chunk-HN2XXSSU-p3ji0EC3.js.map