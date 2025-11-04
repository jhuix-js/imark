import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-CUqTR23j.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./baseUniq-B8xWFlw1.js";
import "./basePickBy-BzM66dBW.js";
import "./isEmpty-D0b8WX4x.js";
import { i as cleanAndMerge, p as parseFontSize } from "./chunk-S3R3BYOJ-CMSxLKou.js";
import "./clone-DNjDWJNG.js";
import "./chunk-O7ZBX7Z2-DkH2IB4v.js";
import "./chunk-S6J4BHB3-BuoZ2Y_X.js";
import "./chunk-LBM3YZW2-RQqDNIS5.js";
import "./chunk-76Q3JFCE-8whOOpEP.js";
import "./chunk-T53DSG4Q-DCHRTQe1.js";
import "./chunk-LHMN2FUI-B6i1C9xh.js";
import "./chunk-FWNWRKHM-hV0_BTJK.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, c as configureSvgSize, d as defaultConfig_default, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { n as ordinal } from "./ordinal-CN4lqhtQ.js";
import "./timer-Bp1bAW5T.js";
import { n as constant_default } from "./path-D7waZtl4.js";
import "./init-ULMCeUqd.js";
import { p as tau } from "./math-BN2TBOwX.js";
import { t as arc_default } from "./arc-cZaP7Il9.js";
import { t as array_default } from "./array-BlABR2MP.js";
import "./step-DmjVsfVE.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-h00w3lrS.js";
import { t as populateCommonDb } from "./chunk-4BX2VUAB-DbDv1R95.js";
import { t as parse } from "./mermaid-parser.core-LexIrq8w.js";
function descending_default(e, o) {
	return o < e ? -1 : o > e ? 1 : o >= e ? 0 : NaN;
}
function identity_default(e) {
	return e;
}
function pie_default() {
	var e = identity_default, o = descending_default, s = null, c = constant_default(0), l = constant_default(tau), u = constant_default(0);
	function d(d) {
		var f, p = (d = array_default(d)).length, m, h, g = 0, _ = Array(p), v = Array(p), y = +c.apply(this, arguments), b = Math.min(tau, Math.max(-tau, l.apply(this, arguments) - y)), S, w = Math.min(Math.abs(b) / p, u.apply(this, arguments)), T = w * (b < 0 ? -1 : 1), E;
		for (f = 0; f < p; ++f) (E = v[_[f] = f] = +e(d[f], f, d)) > 0 && (g += E);
		for (o == null ? s != null && _.sort(function(e, o) {
			return s(d[e], d[o]);
		}) : _.sort(function(e, s) {
			return o(v[e], v[s]);
		}), f = 0, h = g ? (b - p * T) / g : 0; f < p; ++f, y = S) m = _[f], E = v[m], S = y + (E > 0 ? E * h : 0) + T, v[m] = {
			data: d[m],
			index: f,
			value: E,
			startAngle: y,
			endAngle: S,
			padAngle: w
		};
		return v;
	}
	return d.value = function(o) {
		return arguments.length ? (e = typeof o == "function" ? o : constant_default(+o), d) : e;
	}, d.sortValues = function(e) {
		return arguments.length ? (o = e, s = null, d) : o;
	}, d.sort = function(e) {
		return arguments.length ? (s = e, o = null, d) : s;
	}, d.startAngle = function(e) {
		return arguments.length ? (c = typeof e == "function" ? e : constant_default(+e), d) : c;
	}, d.endAngle = function(e) {
		return arguments.length ? (l = typeof e == "function" ? e : constant_default(+e), d) : l;
	}, d.padAngle = function(e) {
		return arguments.length ? (u = typeof e == "function" ? e : constant_default(+e), d) : u;
	}, d;
}
var DEFAULT_PIE_CONFIG = defaultConfig_default.pie, DEFAULT_PIE_DB = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1,
	config: DEFAULT_PIE_CONFIG
}, sections = DEFAULT_PIE_DB.sections, showData = DEFAULT_PIE_DB.showData, config = structuredClone(DEFAULT_PIE_CONFIG), db = {
	getConfig: /* @__PURE__ */ __name(() => structuredClone(config), "getConfig"),
	clear: /* @__PURE__ */ __name(() => {
		sections = /* @__PURE__ */ new Map(), showData = DEFAULT_PIE_DB.showData, clear();
	}, "clear"),
	setDiagramTitle,
	getDiagramTitle,
	setAccTitle,
	getAccTitle,
	setAccDescription,
	getAccDescription,
	addSection: /* @__PURE__ */ __name(({ label: e, value: o }) => {
		if (o < 0) throw Error(`"${e}" has invalid value: ${o}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		sections.has(e) || (sections.set(e, o), log.debug(`added new section: ${e}, with value: ${o}`));
	}, "addSection"),
	getSections: /* @__PURE__ */ __name(() => sections, "getSections"),
	setShowData: /* @__PURE__ */ __name((e) => {
		showData = e;
	}, "setShowData"),
	getShowData: /* @__PURE__ */ __name(() => showData, "getShowData")
}, populateDb = /* @__PURE__ */ __name((e, o) => {
	populateCommonDb(e, o), o.setShowData(e.showData), e.sections.map(o.addSection);
}, "populateDb"), parser = { parse: /* @__PURE__ */ __name(async (e) => {
	let o = await parse("pie", e);
	log.debug(o), populateDb(o, db);
}, "parse") }, pieStyles_default = /* @__PURE__ */ __name((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles"), createPieArcs = /* @__PURE__ */ __name((e) => {
	let o = [...e.values()].reduce((e, o) => e + o, 0), s = [...e.entries()].map(([e, o]) => ({
		label: e,
		value: o
	})).filter((e) => e.value / o * 100 >= 1).sort((e, o) => o.value - e.value);
	return pie_default().value((e) => e.value)(s);
}, "createPieArcs"), diagram = {
	parser,
	db,
	renderer: { draw: /* @__PURE__ */ __name((c, l, u, d) => {
		log.debug("rendering pie chart\n" + c);
		let f = d.db, p = getConfig2(), g = cleanAndMerge(f.getConfig(), p.pie), _ = selectSvgElement(l), v = _.append("g");
		v.attr("transform", "translate(225,225)");
		let { themeVariables: b } = p, [x] = parseFontSize(b.pieOuterStrokeWidth);
		x ??= 2;
		let C = g.textPosition, T = arc_default().innerRadius(0).outerRadius(185), E = arc_default().innerRadius(185 * C).outerRadius(185 * C);
		v.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + x / 2).attr("class", "pieOuterCircle");
		let D = f.getSections(), O = createPieArcs(D), k = [
			b.pie1,
			b.pie2,
			b.pie3,
			b.pie4,
			b.pie5,
			b.pie6,
			b.pie7,
			b.pie8,
			b.pie9,
			b.pie10,
			b.pie11,
			b.pie12
		], A = 0;
		D.forEach((e) => {
			A += e;
		});
		let j = O.filter((e) => (e.data.value / A * 100).toFixed(0) !== "0"), M = ordinal(k);
		v.selectAll("mySlices").data(j).enter().append("path").attr("d", T).attr("fill", (e) => M(e.data.label)).attr("class", "pieCircle"), v.selectAll("mySlices").data(j).enter().append("text").text((e) => (e.data.value / A * 100).toFixed(0) + "%").attr("transform", (e) => "translate(" + E.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice"), v.append("text").text(f.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
		let N = [...D.entries()].map(([e, o]) => ({
			label: e,
			value: o
		})), P = v.selectAll(".legend").data(N).enter().append("g").attr("class", "legend").attr("transform", (e, o) => {
			let s = 22 * N.length / 2;
			return "translate(216," + (o * 22 - s) + ")";
		});
		P.append("rect").attr("width", 18).attr("height", 18).style("fill", (e) => M(e.label)).style("stroke", (e) => M(e.label)), P.append("text").attr("x", 22).attr("y", 14).text((e) => f.getShowData() ? `${e.label} [${e.value}]` : e.label);
		let F = 512 + Math.max(...P.selectAll("text").nodes().map((e) => e?.getBoundingClientRect().width ?? 0));
		_.attr("viewBox", `0 0 ${F} 450`), configureSvgSize(_, 450, F, g.useMaxWidth);
	}, "draw") },
	styles: pieStyles_default
};
export { diagram };
