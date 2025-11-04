import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-CUqTR23j.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./baseUniq-B8xWFlw1.js";
import "./basePickBy-BzM66dBW.js";
import "./isEmpty-D0b8WX4x.js";
import { i as cleanAndMerge } from "./chunk-S3R3BYOJ-CMSxLKou.js";
import "./clone-DNjDWJNG.js";
import "./chunk-O7ZBX7Z2-DkH2IB4v.js";
import "./chunk-S6J4BHB3-BuoZ2Y_X.js";
import "./chunk-LBM3YZW2-RQqDNIS5.js";
import "./chunk-76Q3JFCE-8whOOpEP.js";
import "./chunk-T53DSG4Q-DCHRTQe1.js";
import "./chunk-LHMN2FUI-B6i1C9xh.js";
import "./chunk-FWNWRKHM-hV0_BTJK.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, U as setDiagramTitle, _ as getAccDescription, a as clear, c as configureSvgSize, d as defaultConfig_default, v as getAccTitle, y as getConfig, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { n as ordinal } from "./ordinal-CN4lqhtQ.js";
import "./timer-Bp1bAW5T.js";
import { t as format } from "./defaultLocale-BBsRvltv.js";
import { p as hierarchy, t as treemap_default } from "./treemap-Hrg27P20.js";
import "./init-ULMCeUqd.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-h00w3lrS.js";
import { t as populateCommonDb } from "./chunk-4BX2VUAB-DbDv1R95.js";
import { t as parse } from "./mermaid-parser.core-LexIrq8w.js";
import { t as setupViewPortForSVG } from "./chunk-QN33PNHL-DXOPcIi5.js";
import { i as styles2String, n as isLabelStyle } from "./chunk-ATLVNIR6-DULmhiFu.js";
var TreeMapDB = class {
	constructor() {
		this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = setAccTitle, this.getAccTitle = getAccTitle, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.getAccDescription = getAccDescription, this.setAccDescription = setAccDescription;
	}
	static #e = __name(this, "TreeMapDB");
	getNodes() {
		return this.nodes;
	}
	getConfig() {
		let f = defaultConfig_default, p = getConfig();
		return cleanAndMerge({
			...f.treemap,
			...p.treemap ?? {}
		});
	}
	addNode(e, f) {
		this.nodes.push(e), this.levels.set(e, f), f === 0 && (this.outerNodes.push(e), this.root ??= e);
	}
	getRoot() {
		return {
			name: "",
			children: this.outerNodes
		};
	}
	addClass(e, f) {
		let p = this.classes.get(e) ?? {
			id: e,
			styles: [],
			textStyles: []
		}, m = f.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		m && m.forEach((e) => {
			isLabelStyle(e) && (p?.textStyles ? p.textStyles.push(e) : p.textStyles = [e]), p?.styles ? p.styles.push(e) : p.styles = [e];
		}), this.classes.set(e, p);
	}
	getClasses() {
		return this.classes;
	}
	getStylesForClass(e) {
		return this.classes.get(e)?.styles ?? [];
	}
	clear() {
		clear(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
	}
};
function buildHierarchy(e) {
	if (!e.length) return [];
	let f = [], p = [];
	return e.forEach((e) => {
		let m = {
			name: e.name,
			children: e.type === "Leaf" ? void 0 : []
		};
		for (m.classSelector = e?.classSelector, e?.cssCompiledStyles && (m.cssCompiledStyles = [e.cssCompiledStyles]), e.type === "Leaf" && e.value !== void 0 && (m.value = e.value); p.length > 0 && p[p.length - 1].level >= e.level;) p.pop();
		if (p.length === 0) f.push(m);
		else {
			let e = p[p.length - 1].node;
			e.children ? e.children.push(m) : e.children = [m];
		}
		e.type !== "Leaf" && p.push({
			node: m,
			level: e.level
		});
	}), f;
}
__name(buildHierarchy, "buildHierarchy");
var populate = /* @__PURE__ */ __name((e, f) => {
	populateCommonDb(e, f);
	let m = [];
	for (let p of e.TreemapRows ?? []) p.$type === "ClassDefStatement" && f.addClass(p.className ?? "", p.styleText ?? "");
	for (let p of e.TreemapRows ?? []) {
		let e = p.item;
		if (!e) continue;
		let h = p.indent ? parseInt(p.indent) : 0, g = getItemName(e), _ = e.classSelector ? f.getStylesForClass(e.classSelector) : [], v = _.length > 0 ? _.join(";") : void 0, y = {
			level: h,
			name: g,
			type: e.$type,
			value: e.value,
			classSelector: e.classSelector,
			cssCompiledStyles: v
		};
		m.push(y);
	}
	let h = buildHierarchy(m), g = /* @__PURE__ */ __name((e, p) => {
		for (let m of e) f.addNode(m, p), m.children && m.children.length > 0 && g(m.children, p + 1);
	}, "addNodesRecursively");
	g(h, 0);
}, "populate"), getItemName = /* @__PURE__ */ __name((e) => e.name ? String(e.name) : "", "getItemName"), parser = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ __name(async (e) => {
		try {
			let p = await parse("treemap", e);
			log.debug("Treemap AST:", p);
			let m = parser.parser?.yy;
			if (!(m instanceof TreeMapDB)) throw Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
			populate(p, m);
		} catch (e) {
			throw log.error("Error parsing treemap:", e), e;
		}
	}, "parse")
}, DEFAULT_INNER_PADDING = 10, SECTION_INNER_PADDING = 10, SECTION_HEADER_HEIGHT = 25, renderer = {
	draw: /* @__PURE__ */ __name((e, h, g, _) => {
		let v = _.db, y = v.getConfig(), x = y.padding ?? DEFAULT_INNER_PADDING, S = v.getDiagramTitle(), C = v.getRoot(), { themeVariables: w } = getConfig();
		if (!C) return;
		let T = S ? 30 : 0, E = selectSvgElement(h), D = y.nodeWidth ? y.nodeWidth * SECTION_INNER_PADDING : 960, O = y.nodeHeight ? y.nodeHeight * SECTION_INNER_PADDING : 500, k = D, A = O + T;
		E.attr("viewBox", `0 0 ${k} ${A}`), configureSvgSize(E, A, k, y.useMaxWidth);
		let j;
		try {
			let e = y.valueFormat || ",";
			if (e === "$0,0") j = /* @__PURE__ */ __name((e) => "$" + format(",")(e), "valueFormat");
			else if (e.startsWith("$") && e.includes(",")) {
				let f = /\.\d+/.exec(e), m = f ? f[0] : "";
				j = /* @__PURE__ */ __name((e) => "$" + format("," + m)(e), "valueFormat");
			} else if (e.startsWith("$")) {
				let f = e.substring(1);
				j = /* @__PURE__ */ __name((e) => "$" + format(f || "")(e), "valueFormat");
			} else j = format(e);
		} catch (e) {
			log.error("Error creating format function:", e), j = format(",");
		}
		let M = ordinal().range([
			"transparent",
			w.cScale0,
			w.cScale1,
			w.cScale2,
			w.cScale3,
			w.cScale4,
			w.cScale5,
			w.cScale6,
			w.cScale7,
			w.cScale8,
			w.cScale9,
			w.cScale10,
			w.cScale11
		]), N = ordinal().range([
			"transparent",
			w.cScalePeer0,
			w.cScalePeer1,
			w.cScalePeer2,
			w.cScalePeer3,
			w.cScalePeer4,
			w.cScalePeer5,
			w.cScalePeer6,
			w.cScalePeer7,
			w.cScalePeer8,
			w.cScalePeer9,
			w.cScalePeer10,
			w.cScalePeer11
		]), P = ordinal().range([
			w.cScaleLabel0,
			w.cScaleLabel1,
			w.cScaleLabel2,
			w.cScaleLabel3,
			w.cScaleLabel4,
			w.cScaleLabel5,
			w.cScaleLabel6,
			w.cScaleLabel7,
			w.cScaleLabel8,
			w.cScaleLabel9,
			w.cScaleLabel10,
			w.cScaleLabel11
		]);
		S && E.append("text").attr("x", k / 2).attr("y", T / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(S);
		let F = E.append("g").attr("transform", `translate(0, ${T})`).attr("class", "treemapContainer"), I = hierarchy(C).sum((e) => e.value ?? 0).sort((e, f) => (f.value ?? 0) - (e.value ?? 0)), L = treemap_default().size([D, O]).paddingTop((e) => e.children && e.children.length > 0 ? SECTION_HEADER_HEIGHT + SECTION_INNER_PADDING : 0).paddingInner(x).paddingLeft((e) => e.children && e.children.length > 0 ? SECTION_INNER_PADDING : 0).paddingRight((e) => e.children && e.children.length > 0 ? SECTION_INNER_PADDING : 0).paddingBottom((e) => e.children && e.children.length > 0 ? SECTION_INNER_PADDING : 0).round(!0)(I), R = L.descendants().filter((e) => e.children && e.children.length > 0), z = F.selectAll(".treemapSection").data(R).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
		z.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", SECTION_HEADER_HEIGHT).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), z.append("clipPath").attr("id", (e, f) => `clip-section-${h}-${f}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", SECTION_HEADER_HEIGHT), z.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, f) => `treemapSection section${f}`).attr("fill", (e) => M(e.data.name)).attr("fill-opacity", .6).attr("stroke", (e) => N(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (e) => {
			if (e.depth === 0) return "display: none;";
			let f = styles2String({ cssCompiledStyles: e.data.cssCompiledStyles });
			return f.nodeStyles + ";" + f.borderStyles.join(";");
		}), z.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", SECTION_HEADER_HEIGHT / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => e.depth === 0 ? "display: none;" : "dominant-baseline: middle; font-size: 12px; fill:" + P(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + styles2String({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).each(function(e) {
			if (e.depth === 0) return;
			let f = select_default(this), p = e.data.name;
			f.text(p);
			let h = e.x1 - e.x0, g;
			g = y.showValues !== !1 && e.value ? h - 10 - 30 - 10 - 6 : h - 6 - 6;
			let _ = Math.max(15, g), v = f.node();
			if (v.getComputedTextLength() > _) {
				let e = p;
				for (; e.length > 0;) {
					if (e = p.substring(0, e.length - 1), e.length === 0) {
						f.text("..."), v.getComputedTextLength() > _ && f.text("");
						break;
					}
					if (f.text(e + "..."), v.getComputedTextLength() <= _) break;
				}
			}
		}), y.showValues !== !1 && z.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", SECTION_HEADER_HEIGHT / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? j(e.value) : "").attr("font-style", "italic").attr("style", (e) => e.depth === 0 ? "display: none;" : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + P(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + styles2String({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:"));
		let B = L.leaves(), V = F.selectAll(".treemapLeafGroup").data(B).enter().append("g").attr("class", (e, f) => `treemapNode treemapLeafGroup leaf${f}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
		V.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? M(e.parent.data.name) : M(e.data.name)).attr("style", (e) => styles2String({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (e) => e.parent ? M(e.parent.data.name) : M(e.data.name)).attr("stroke-width", 3), V.append("clipPath").attr("id", (e, f) => `clip-${h}-${f}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), V.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + P(e.data.name) + ";" + styles2String({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, f) => `url(#clip-${h}-${f})`).text((e) => e.data.name).each(function(e) {
			let f = select_default(this), p = e.x1 - e.x0, h = e.y1 - e.y0, g = f.node(), _ = p - 8, v = h - 8;
			if (_ < 10 || v < 10) {
				f.style("display", "none");
				return;
			}
			let y = parseInt(f.style("font-size"), 10), b = .6;
			for (; g.getComputedTextLength() > _ && y > 8;) y--, f.style("font-size", `${y}px`);
			let x = Math.max(6, Math.min(28, Math.round(y * b))), S = y + 2 + x;
			for (; S > v && y > 8 && (y--, x = Math.max(6, Math.min(28, Math.round(y * b))), !(x < 6 && y === 8));) f.style("font-size", `${y}px`), S = y + 2 + x;
			f.style("font-size", `${y}px`), (g.getComputedTextLength() > _ || y < 8 || v < y) && f.style("display", "none");
		}), y.showValues !== !1 && V.append("text").attr("class", "treemapValue").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", function(e) {
			return (e.y1 - e.y0) / 2;
		}).attr("style", (e) => "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + P(e.data.name) + ";" + styles2String({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, f) => `url(#clip-${h}-${f})`).text((e) => e.value ? j(e.value) : "").each(function(e) {
			let f = select_default(this), p = this.parentNode;
			if (!p) {
				f.style("display", "none");
				return;
			}
			let h = select_default(p).select(".treemapLabel");
			if (h.empty() || h.style("display") === "none") {
				f.style("display", "none");
				return;
			}
			let g = parseFloat(h.style("font-size")), _ = Math.max(6, Math.min(28, Math.round(g * .6)));
			f.style("font-size", `${_}px`);
			let v = (e.y1 - e.y0) / 2 + g / 2 + 2;
			f.attr("y", v);
			let y = e.x1 - e.x0, b = e.y1 - e.y0 - 4, x = y - 8;
			f.node().getComputedTextLength() > x || v + _ > b || _ < 6 ? f.style("display", "none") : f.style("display", null);
		}), setupViewPortForSVG(E, y.diagramPadding ?? 8, "flowchart", y?.useMaxWidth || !1);
	}, "draw"),
	getClasses: /* @__PURE__ */ __name(function(e, f) {
		return f.db.getClasses();
	}, "getClasses")
}, defaultTreemapStyleOptions = {
	sectionStrokeColor: "black",
	sectionStrokeWidth: "1",
	sectionFillColor: "#efefef",
	leafStrokeColor: "black",
	leafStrokeWidth: "1",
	leafFillColor: "#efefef",
	labelColor: "black",
	labelFontSize: "12px",
	valueFontSize: "10px",
	valueColor: "black",
	titleColor: "black",
	titleFontSize: "14px"
}, diagram = {
	parser,
	get db() {
		return new TreeMapDB();
	},
	renderer,
	styles: /* @__PURE__ */ __name(({ treemap: f } = {}) => {
		let p = cleanAndMerge(defaultTreemapStyleOptions, f);
		return `
  .treemapNode.section {
    stroke: ${p.sectionStrokeColor};
    stroke-width: ${p.sectionStrokeWidth};
    fill: ${p.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${p.leafStrokeColor};
    stroke-width: ${p.leafStrokeWidth};
    fill: ${p.leafFillColor};
  }
  .treemapLabel {
    fill: ${p.labelColor};
    font-size: ${p.labelFontSize};
  }
  .treemapValue {
    fill: ${p.valueColor};
    font-size: ${p.valueFontSize};
  }
  .treemapTitle {
    fill: ${p.titleColor};
    font-size: ${p.titleFontSize};
  }
  `;
	}, "getStyles")
};
export { diagram };
