import { r as __name } from "./src-B-gAGmo8.js";
import { b as getConfig2 } from "./chunk-ABZYJK2D-CASc1KXE.js";
var solidStateFill = /* @__PURE__ */ __name((e) => {
	let { handDrawnSeed: r } = getConfig2();
	return {
		fill: e,
		hachureAngle: 120,
		hachureGap: 4,
		fillWeight: 2,
		roughness: .7,
		stroke: e,
		seed: r
	};
}, "solidStateFill"), compileStyles = /* @__PURE__ */ __name((e) => {
	let n = styles2Map([
		...e.cssCompiledStyles || [],
		...e.cssStyles || [],
		...e.labelStyle || []
	]);
	return {
		stylesMap: n,
		stylesArray: [...n]
	};
}, "compileStyles"), styles2Map = /* @__PURE__ */ __name((e) => {
	let n = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		let [r, i] = e.split(":");
		n.set(r.trim(), i?.trim());
	}), n;
}, "styles2Map"), isLabelStyle = /* @__PURE__ */ __name((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), styles2String = /* @__PURE__ */ __name((e) => {
	let { stylesArray: n } = compileStyles(e), r = [], a = [], s = [], c = [];
	return n.forEach((e) => {
		let n = e[0];
		isLabelStyle(n) ? r.push(e.join(":") + " !important") : (a.push(e.join(":") + " !important"), n.includes("stroke") && s.push(e.join(":") + " !important"), n === "fill" && c.push(e.join(":") + " !important"));
	}), {
		labelStyles: r.join(";"),
		nodeStyles: a.join(";"),
		stylesArray: n,
		borderStyles: s,
		backgroundStyles: c
	};
}, "styles2String"), userNodeOverrides = /* @__PURE__ */ __name((e, r) => {
	let { themeVariables: a, handDrawnSeed: o } = getConfig2(), { nodeBorder: s, mainBkg: c } = a, { stylesMap: l } = compileStyles(e);
	return Object.assign({
		roughness: .7,
		fill: l.get("fill") || c,
		fillStyle: "hachure",
		fillWeight: 4,
		hachureGap: 5.2,
		stroke: l.get("stroke") || s,
		seed: o,
		strokeWidth: l.get("stroke-width")?.replace("px", "") || 1.3,
		fillLineDash: [0, 0],
		strokeLineDash: getStrokeDashArray(l.get("stroke-dasharray"))
	}, r);
}, "userNodeOverrides"), getStrokeDashArray = /* @__PURE__ */ __name((e) => {
	if (!e) return [0, 0];
	let n = e.trim().split(/\s+/).map(Number);
	if (n.length === 1) {
		let e = isNaN(n[0]) ? 0 : n[0];
		return [e, e];
	}
	return [isNaN(n[0]) ? 0 : n[0], isNaN(n[1]) ? 0 : n[1]];
}, "getStrokeDashArray");
export { userNodeOverrides as a, styles2String as i, isLabelStyle as n, solidStateFill as r, compileStyles as t };
