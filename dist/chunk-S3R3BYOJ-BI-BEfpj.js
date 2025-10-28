import { s as __toESM } from "./chunk-DgPTj83v.js";
import { A as eq_default, B as isObject_default, F as _copyArray_default, H as isObjectLike_default, O as _copyObject_default, R as isFunction_default, S as _createAssigner_default, U as _baseGetTag_default, V as isArray_default, b as isArguments_default, c as _Stack_default, g as isTypedArray_default, i as _cloneTypedArray_default, j as _baseAssignValue_default, l as _getPrototype_default, n as _baseFor_default, p as keysIn_default, r as _initCloneObject_default, s as _cloneBuffer_default, t as isArrayLikeObject_default, u as memoize_default, y as isBuffer_default } from "./isArrayLikeObject-DKHowMnG.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { F as sanitizeDirective, f as detectType, m as directiveRegex, r as assignWithDepth_default, s as common_default } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { _ as basis_default, a as monotoneX, c as catmullRomOpen_default, d as cardinalOpen_default, f as cardinalClosed_default, g as basisClosed_default, h as basisOpen_default, i as natural_default, l as catmullRomClosed_default, m as bundle_default, n as stepBefore, o as monotoneY, p as cardinal_default, r as step_default, s as linearClosed_default, t as stepAfter, u as catmullRom_default, v as linear_default } from "./step-DmjVsfVE.js";
import { t as require_dist } from "./dist-CUheKjZU.js";
var objectTag = "[object Object]", funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectCtorString = funcToString.call(Object);
function isPlainObject(o) {
	if (!isObjectLike_default(o) || _baseGetTag_default(o) != objectTag) return !1;
	var F = _getPrototype_default(o);
	if (F === null) return !0;
	var I = hasOwnProperty.call(F, "constructor") && F.constructor;
	return typeof I == "function" && I instanceof I && funcToString.call(I) == objectCtorString;
}
var isPlainObject_default = isPlainObject;
function assignMergeValue(o, I, L) {
	(L !== void 0 && !eq_default(o[I], L) || L === void 0 && !(I in o)) && _baseAssignValue_default(o, I, L);
}
var _assignMergeValue_default = assignMergeValue;
function safeGet(o, F) {
	if (!(F === "constructor" && typeof o[F] == "function") && F != "__proto__") return o[F];
}
var _safeGet_default = safeGet;
function toPlainObject(o) {
	return _copyObject_default(o, keysIn_default(o));
}
var toPlainObject_default = toPlainObject;
function baseMergeDeep(o, F, R, z, V, H, G) {
	var K = _safeGet_default(o, R), q = _safeGet_default(F, R), J = G.get(q);
	if (J) {
		_assignMergeValue_default(o, R, J);
		return;
	}
	var Y = H ? H(K, q, R + "", o, F, G) : void 0, X = Y === void 0;
	if (X) {
		var Z = isArray_default(q), Q = !Z && isBuffer_default(q), $ = !Z && !Q && isTypedArray_default(q);
		Y = q, Z || Q || $ ? isArray_default(K) ? Y = K : isArrayLikeObject_default(K) ? Y = _copyArray_default(K) : Q ? (X = !1, Y = _cloneBuffer_default(q, !0)) : $ ? (X = !1, Y = _cloneTypedArray_default(q, !0)) : Y = [] : isPlainObject_default(q) || isArguments_default(q) ? (Y = K, isArguments_default(K) ? Y = toPlainObject_default(K) : (!isObject_default(K) || isFunction_default(K)) && (Y = _initCloneObject_default(q))) : X = !1;
	}
	X && (G.set(q, Y), V(Y, q, z, H, G), G.delete(q)), _assignMergeValue_default(o, R, Y);
}
var _baseMergeDeep_default = baseMergeDeep;
function baseMerge(o, F, L, R, z) {
	o !== F && _baseFor_default(F, function(B, V) {
		if (z ||= new _Stack_default(), isObject_default(B)) _baseMergeDeep_default(o, F, V, L, baseMerge, R, z);
		else {
			var H = R ? R(_safeGet_default(o, V), B, V + "", o, F, z) : void 0;
			H === void 0 && (H = B), _assignMergeValue_default(o, V, H);
		}
	}, keysIn_default);
}
var _baseMerge_default = baseMerge, merge_default = _createAssigner_default(function(o, F, I) {
	_baseMerge_default(o, F, I);
}), Bump = class {
	constructor(o, F) {
		this._context = o, this._x = F;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}
	point(o, F) {
		switch (o = +o, F = +F, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(o, F) : this._context.moveTo(o, F);
				break;
			case 1: this._point = 2;
			default:
				this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + o) / 2, this._y0, this._x0, F, o, F) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + F) / 2, o, this._y0, o, F);
				break;
		}
		this._x0 = o, this._y0 = F;
	}
};
function bumpX(o) {
	return new Bump(o, !0);
}
function bumpY(o) {
	return new Bump(o, !1);
}
var import_dist = /* @__PURE__ */ __toESM(require_dist(), 1), ZERO_WIDTH_SPACE = "​", d3CurveTypes = {
	curveBasis: basis_default,
	curveBasisClosed: basisClosed_default,
	curveBasisOpen: basisOpen_default,
	curveBumpX: bumpX,
	curveBumpY: bumpY,
	curveBundle: bundle_default,
	curveCardinalClosed: cardinalClosed_default,
	curveCardinalOpen: cardinalOpen_default,
	curveCardinal: cardinal_default,
	curveCatmullRomClosed: catmullRomClosed_default,
	curveCatmullRomOpen: catmullRomOpen_default,
	curveCatmullRom: catmullRom_default,
	curveLinear: linear_default,
	curveLinearClosed: linearClosed_default,
	curveMonotoneX: monotoneX,
	curveMonotoneY: monotoneY,
	curveNatural: natural_default,
	curveStep: step_default,
	curveStepAfter: stepAfter,
	curveStepBefore: stepBefore
}, directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, detectInit = /* @__PURE__ */ __name(function(o, F) {
	let I = detectDirective(o, /(?:init\b)|(?:initialize\b)/), L = {};
	if (Array.isArray(I)) {
		let o = I.map((o) => o.args);
		sanitizeDirective(o), L = assignWithDepth_default(L, [...o]);
	} else L = I.args;
	if (!L) return;
	let R = detectType(o, F), z = "config";
	return L[z] !== void 0 && (R === "flowchart-v2" && (R = "flowchart"), L[R] = L[z], delete L[z]), L;
}, "detectInit"), detectDirective = /* @__PURE__ */ __name(function(o, F = null) {
	try {
		let I = RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
		o = o.trim().replace(I, "").replace(/'/gm, "\""), log.debug(`Detecting diagram directive${F === null ? "" : " type:" + F} based on the text:${o}`);
		let L, R = [];
		for (; (L = directiveRegex.exec(o)) !== null;) if (L.index === directiveRegex.lastIndex && directiveRegex.lastIndex++, L && !F || F && L[1]?.match(F) || F && L[2]?.match(F)) {
			let o = L[1] ? L[1] : L[2], F = L[3] ? L[3].trim() : L[4] ? JSON.parse(L[4].trim()) : null;
			R.push({
				type: o,
				args: F
			});
		}
		return R.length === 0 ? {
			type: o,
			args: null
		} : R.length === 1 ? R[0] : R;
	} catch (I) {
		return log.error(`ERROR: ${I.message} - Unable to parse directive type: '${F}' based on the text: '${o}'`), {
			type: void 0,
			args: null
		};
	}
}, "detectDirective"), removeDirectives = /* @__PURE__ */ __name(function(o) {
	return o.replace(directiveRegex, "");
}, "removeDirectives"), isSubstringInArray = /* @__PURE__ */ __name(function(o, F) {
	for (let [I, L] of F.entries()) if (L.match(o)) return I;
	return -1;
}, "isSubstringInArray");
function interpolateToCurve(o, F) {
	return o ? d3CurveTypes[`curve${o.charAt(0).toUpperCase() + o.slice(1)}`] ?? F : F;
}
__name(interpolateToCurve, "interpolateToCurve");
function formatUrl(o, F) {
	let I = o.trim();
	if (I) return F.securityLevel === "loose" ? I : (0, import_dist.sanitizeUrl)(I);
}
__name(formatUrl, "formatUrl");
var runFunc = /* @__PURE__ */ __name((o, ...F) => {
	let I = o.split("."), L = I.length - 1, R = I[L], z = window;
	for (let F = 0; F < L; F++) if (z = z[I[F]], !z) {
		log.error(`Function name: ${o} not found in window`);
		return;
	}
	z[R](...F);
}, "runFunc");
function distance(o, F) {
	return !o || !F ? 0 : Math.sqrt((F.x - o.x) ** 2 + (F.y - o.y) ** 2);
}
__name(distance, "distance");
function traverseEdge(o) {
	let F, I = 0;
	return o.forEach((o) => {
		I += distance(o, F), F = o;
	}), calculatePoint(o, I / 2);
}
__name(traverseEdge, "traverseEdge");
function calcLabelPosition(o) {
	return o.length === 1 ? o[0] : traverseEdge(o);
}
__name(calcLabelPosition, "calcLabelPosition");
var roundNumber = /* @__PURE__ */ __name((o, F = 2) => {
	let I = 10 ** F;
	return Math.round(o * I) / I;
}, "roundNumber"), calculatePoint = /* @__PURE__ */ __name((o, F) => {
	let I, L = F;
	for (let F of o) {
		if (I) {
			let o = distance(F, I);
			if (o === 0) return I;
			if (o < L) L -= o;
			else {
				let R = L / o;
				if (R <= 0) return I;
				if (R >= 1) return {
					x: F.x,
					y: F.y
				};
				if (R > 0 && R < 1) return {
					x: roundNumber((1 - R) * I.x + R * F.x, 5),
					y: roundNumber((1 - R) * I.y + R * F.y, 5)
				};
			}
		}
		I = F;
	}
	throw Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), calcCardinalityPosition = /* @__PURE__ */ __name((o, F, I) => {
	log.info(`our points ${JSON.stringify(F)}`), F[0] !== I && (F = F.reverse());
	let L = calculatePoint(F, 25), R = o ? 10 : 5, z = Math.atan2(F[0].y - L.y, F[0].x - L.x), B = {
		x: 0,
		y: 0
	};
	return B.x = Math.sin(z) * R + (F[0].x + L.x) / 2, B.y = -Math.cos(z) * R + (F[0].y + L.y) / 2, B;
}, "calcCardinalityPosition");
function calcTerminalLabelPosition(o, F, I) {
	let L = structuredClone(I);
	log.info("our points", L), F !== "start_left" && F !== "start_right" && L.reverse();
	let R = calculatePoint(L, 25 + o), z = 10 + o * .5, B = Math.atan2(L[0].y - R.y, L[0].x - R.x), V = {
		x: 0,
		y: 0
	};
	return F === "start_left" ? (V.x = Math.sin(B + Math.PI) * z + (L[0].x + R.x) / 2, V.y = -Math.cos(B + Math.PI) * z + (L[0].y + R.y) / 2) : F === "end_right" ? (V.x = Math.sin(B - Math.PI) * z + (L[0].x + R.x) / 2 - 5, V.y = -Math.cos(B - Math.PI) * z + (L[0].y + R.y) / 2 - 5) : F === "end_left" ? (V.x = Math.sin(B) * z + (L[0].x + R.x) / 2 - 5, V.y = -Math.cos(B) * z + (L[0].y + R.y) / 2 - 5) : (V.x = Math.sin(B) * z + (L[0].x + R.x) / 2, V.y = -Math.cos(B) * z + (L[0].y + R.y) / 2), V;
}
__name(calcTerminalLabelPosition, "calcTerminalLabelPosition");
function getStylesFromArray(o) {
	let F = "", I = "";
	for (let L of o) L !== void 0 && (L.startsWith("color:") || L.startsWith("text-align:") ? I = I + L + ";" : F = F + L + ";");
	return {
		style: F,
		labelStyle: I
	};
}
__name(getStylesFromArray, "getStylesFromArray");
var cnt = 0, generateId = /* @__PURE__ */ __name(() => (cnt++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt), "generateId");
function makeRandomHex(o) {
	let F = "";
	for (let I = 0; I < o; I++) F += "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	return F;
}
__name(makeRandomHex, "makeRandomHex");
var random = /* @__PURE__ */ __name((o) => makeRandomHex(o.length), "random"), getTextObj = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: "start",
		style: "#666",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0,
		valign: void 0,
		text: ""
	};
}, "getTextObj"), drawSimpleText = /* @__PURE__ */ __name(function(o, F) {
	let I = F.text.replace(common_default.lineBreakRegex, " "), [, L] = parseFontSize(F.fontSize), R = o.append("text");
	R.attr("x", F.x), R.attr("y", F.y), R.style("text-anchor", F.anchor), R.style("font-family", F.fontFamily), R.style("font-size", L), R.style("font-weight", F.fontWeight), R.attr("fill", F.fill), F.class !== void 0 && R.attr("class", F.class);
	let z = R.append("tspan");
	return z.attr("x", F.x + F.textMargin * 2), z.attr("fill", F.fill), z.text(I), R;
}, "drawSimpleText"), wrapLabel = memoize_default((o, F, I) => {
	if (!o || (I = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		joinWith: "<br/>"
	}, I), common_default.lineBreakRegex.test(o))) return o;
	let L = o.split(" ").filter(Boolean), R = [], z = "";
	return L.forEach((o, B) => {
		let V = calculateTextWidth(`${o} `, I), H = calculateTextWidth(z, I);
		if (V > F) {
			let { hyphenatedStrings: L, remainingWord: B } = breakString(o, F, "-", I);
			R.push(z, ...L), z = B;
		} else H + V >= F ? (R.push(z), z = o) : z = [z, o].filter(Boolean).join(" ");
		B + 1 === L.length && R.push(z);
	}), R.filter((o) => o !== "").join(I.joinWith);
}, (o, F, I) => `${o}${F}${I.fontSize}${I.fontWeight}${I.fontFamily}${I.joinWith}`), breakString = memoize_default((o, F, I = "-", L) => {
	L = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		margin: 0
	}, L);
	let R = [...o], z = [], B = "";
	return R.forEach((o, V) => {
		let H = `${B}${o}`;
		if (calculateTextWidth(H, L) >= F) {
			let o = V + 1, F = R.length === o, L = `${H}${I}`;
			z.push(F ? H : L), B = "";
		} else B = H;
	}), {
		hyphenatedStrings: z,
		remainingWord: B
	};
}, (o, F, I = "-", L) => `${o}${F}${I}${L.fontSize}${L.fontWeight}${L.fontFamily}`);
function calculateTextHeight(o, F) {
	return calculateTextDimensions(o, F).height;
}
__name(calculateTextHeight, "calculateTextHeight");
function calculateTextWidth(o, F) {
	return calculateTextDimensions(o, F).width;
}
__name(calculateTextWidth, "calculateTextWidth");
var calculateTextDimensions = memoize_default((o, F) => {
	let { fontSize: I = 12, fontFamily: L = "Arial", fontWeight: R = 400 } = F;
	if (!o) return {
		width: 0,
		height: 0
	};
	let [, z] = parseFontSize(I), B = ["sans-serif", L], V = o.split(common_default.lineBreakRegex), H = [], U = select_default("body");
	if (!U.remove) return {
		width: 0,
		height: 0,
		lineHeight: 0
	};
	let W = U.append("svg");
	for (let o of B) {
		let F = 0, I = {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		for (let L of V) {
			let B = getTextObj();
			B.text = L || "​";
			let V = drawSimpleText(W, B).style("font-size", z).style("font-weight", R).style("font-family", o), H = (V._groups || V)[0][0].getBBox();
			if (H.width === 0 && H.height === 0) throw Error("svg element not in render tree");
			I.width = Math.round(Math.max(I.width, H.width)), F = Math.round(H.height), I.height += F, I.lineHeight = Math.round(Math.max(I.lineHeight, F));
		}
		H.push(I);
	}
	return W.remove(), H[isNaN(H[1].height) || isNaN(H[1].width) || isNaN(H[1].lineHeight) || H[0].height > H[1].height && H[0].width > H[1].width && H[0].lineHeight > H[1].lineHeight ? 0 : 1];
}, (o, F) => `${o}${F.fontSize}${F.fontWeight}${F.fontFamily}`), InitIDGenerator = class {
	constructor(o = !1, F) {
		this.count = 0, this.count = F ? F.length : 0, this.next = o ? () => this.count++ : () => Date.now();
	}
	static #_ = __name(this, "InitIDGenerator");
}, decoder, entityDecode = /* @__PURE__ */ __name(function(o) {
	return decoder ||= document.createElement("div"), o = escape(o).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), decoder.innerHTML = o, unescape(decoder.textContent);
}, "entityDecode");
function isDetailedError(o) {
	return "str" in o;
}
__name(isDetailedError, "isDetailedError");
var insertTitle = /* @__PURE__ */ __name((o, F, I, L) => {
	if (!L) return;
	let R = o.node()?.getBBox();
	R && o.append("text").text(L).attr("text-anchor", "middle").attr("x", R.x + R.width / 2).attr("y", -I).attr("class", F);
}, "insertTitle"), parseFontSize = /* @__PURE__ */ __name((o) => {
	if (typeof o == "number") return [o, o + "px"];
	let F = parseInt(o ?? "", 10);
	return Number.isNaN(F) ? [void 0, void 0] : o === String(F) ? [F, o + "px"] : [F, o];
}, "parseFontSize");
function cleanAndMerge(o, F) {
	return merge_default({}, o, F);
}
__name(cleanAndMerge, "cleanAndMerge");
var utils_default = {
	assignWithDepth: assignWithDepth_default,
	wrapLabel,
	calculateTextHeight,
	calculateTextWidth,
	calculateTextDimensions,
	cleanAndMerge,
	detectInit,
	detectDirective,
	isSubstringInArray,
	interpolateToCurve,
	calcLabelPosition,
	calcCardinalityPosition,
	calcTerminalLabelPosition,
	formatUrl,
	getStylesFromArray,
	generateId,
	random,
	runFunc,
	entityDecode,
	insertTitle,
	isLabelCoordinateInPath,
	parseFontSize,
	InitIDGenerator
}, encodeEntities = /* @__PURE__ */ __name(function(o) {
	let F = o;
	return F = F.replace(/style.*:\S*#.*;/g, function(o) {
		return o.substring(0, o.length - 1);
	}), F = F.replace(/classDef.*:\S*#.*;/g, function(o) {
		return o.substring(0, o.length - 1);
	}), F = F.replace(/#\w+;/g, function(o) {
		let F = o.substring(1, o.length - 1);
		return /^\+?\d+$/.test(F) ? "ﬂ°°" + F + "¶ß" : "ﬂ°" + F + "¶ß";
	}), F;
}, "encodeEntities"), decodeEntities = /* @__PURE__ */ __name(function(o) {
	return o.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), getEdgeId = /* @__PURE__ */ __name((o, F, { counter: I = 0, prefix: L, suffix: R }, z) => z || `${L ? `${L}_` : ""}${o}_${F}_${I}${R ? `_${R}` : ""}`, "getEdgeId");
function handleUndefinedAttr(o) {
	return o ?? null;
}
__name(handleUndefinedAttr, "handleUndefinedAttr");
function isLabelCoordinateInPath(o, F) {
	let I = Math.round(o.x), L = Math.round(o.y), R = F.replace(/(\d+\.\d+)/g, (o) => Math.round(parseFloat(o)).toString());
	return R.includes(I.toString()) || R.includes(L.toString());
}
__name(isLabelCoordinateInPath, "isLabelCoordinateInPath");
export { wrapLabel as _, decodeEntities as a, merge_default as b, getEdgeId as c, interpolateToCurve as d, isDetailedError as f, utils_default as g, removeDirectives as h, cleanAndMerge as i, getStylesFromArray as l, random as m, calculateTextHeight as n, encodeEntities as o, parseFontSize as p, calculateTextWidth as r, generateId as s, ZERO_WIDTH_SPACE as t, handleUndefinedAttr as u, bumpX as v, bumpY as y };

//# sourceMappingURL=chunk-S3R3BYOJ-BI-BEfpj.js.map