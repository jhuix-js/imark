import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./_baseUniq-C5UuzJkR.js";
import "./_basePickBy-CFV2cYVn.js";
import "./isEmpty-D0b8WX4x.js";
import { t as layout } from "./dagre-YdLLCUGf.js";
import { g as utils_default } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { t as Graph } from "./graphlib-MJWczo1S.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { E as getUrl, b as getConfig2, c as configureSvgSize, s as common_default } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import "./array-BlABR2MP.js";
import { _ as basis_default } from "./step-DmjVsfVE.js";
import { t as line_default } from "./line-Cl_B2mnJ.js";
import "./dist-CUheKjZU.js";
import "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import "./chunk-HN2XXSSU-p3ji0EC3.js";
import "./chunk-CVBHYZKI-Cx9WXSzs.js";
import "./chunk-55IACEB6-BKO4wDwb.js";
import "./chunk-QN33PNHL-DXOPcIi5.js";
import "./chunk-ATLVNIR6-DULmhiFu.js";
import "./chunk-JZLCHNYA-Cqf7Lizt.js";
import "./chunk-QXUST7PY-DE6lURYz.js";
import "./chunk-N4CR4FBY-vW6kPLGX.js";
import { i as styles_default, n as stateDiagram_default, t as StateDB } from "./chunk-DI55MBZ5-Bn0G_pPM.js";
var drawStartState = /* @__PURE__ */ __name((e) => e.append("circle").attr("class", "start-state").attr("r", getConfig2().state.sizeUnit).attr("cx", getConfig2().state.padding + getConfig2().state.sizeUnit).attr("cy", getConfig2().state.padding + getConfig2().state.sizeUnit), "drawStartState"), drawDivider = /* @__PURE__ */ __name((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", getConfig2().state.textHeight).attr("class", "divider").attr("x2", getConfig2().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), drawSimpleState = /* @__PURE__ */ __name((e, h) => {
	let g = e.append("text").attr("x", 2 * getConfig2().state.padding).attr("y", getConfig2().state.textHeight + 2 * getConfig2().state.padding).attr("font-size", getConfig2().state.fontSize).attr("class", "state-title").text(h.id), _ = g.node().getBBox();
	return e.insert("rect", ":first-child").attr("x", getConfig2().state.padding).attr("y", getConfig2().state.padding).attr("width", _.width + 2 * getConfig2().state.padding).attr("height", _.height + 2 * getConfig2().state.padding).attr("rx", getConfig2().state.radius), g;
}, "drawSimpleState"), drawDescrState = /* @__PURE__ */ __name((e, h) => {
	let g = /* @__PURE__ */ __name(function(e, h, g) {
		let _ = e.append("tspan").attr("x", 2 * getConfig2().state.padding).text(h);
		g || _.attr("dy", getConfig2().state.textHeight);
	}, "addTspan"), _ = e.append("text").attr("x", 2 * getConfig2().state.padding).attr("y", getConfig2().state.textHeight + 1.3 * getConfig2().state.padding).attr("font-size", getConfig2().state.fontSize).attr("class", "state-title").text(h.descriptions[0]).node().getBBox(), y = _.height, b = e.append("text").attr("x", getConfig2().state.padding).attr("y", y + getConfig2().state.padding * .4 + getConfig2().state.dividerMargin + getConfig2().state.textHeight).attr("class", "state-description"), S = !0, C = !0;
	h.descriptions.forEach(function(e) {
		S || (g(b, e, C), C = !1), S = !1;
	});
	let w = e.append("line").attr("x1", getConfig2().state.padding).attr("y1", getConfig2().state.padding + y + getConfig2().state.dividerMargin / 2).attr("y2", getConfig2().state.padding + y + getConfig2().state.dividerMargin / 2).attr("class", "descr-divider"), T = b.node().getBBox(), E = Math.max(T.width, _.width);
	return w.attr("x2", E + 3 * getConfig2().state.padding), e.insert("rect", ":first-child").attr("x", getConfig2().state.padding).attr("y", getConfig2().state.padding).attr("width", E + 2 * getConfig2().state.padding).attr("height", T.height + y + 2 * getConfig2().state.padding).attr("rx", getConfig2().state.radius), e;
}, "drawDescrState"), addTitleAndBox = /* @__PURE__ */ __name((e, h, g) => {
	let _ = getConfig2().state.padding, v = 2 * getConfig2().state.padding, y = e.node().getBBox(), b = y.width, S = y.x, C = e.append("text").attr("x", 0).attr("y", getConfig2().state.titleShift).attr("font-size", getConfig2().state.fontSize).attr("class", "state-title").text(h.id), w = C.node().getBBox().width + v, T = Math.max(w, b);
	T === b && (T += v);
	let E, D = e.node().getBBox();
	h.doc, E = S - _, w > b && (E = (b - T) / 2 + _), Math.abs(S - D.x) < _ && w > b && (E = S - (w - b) / 2);
	let O = 1 - getConfig2().state.textHeight;
	return e.insert("rect", ":first-child").attr("x", E).attr("y", O).attr("class", g ? "alt-composit" : "composit").attr("width", T).attr("height", D.height + getConfig2().state.textHeight + getConfig2().state.titleShift + 1).attr("rx", "0"), C.attr("x", E + _), w <= b && C.attr("x", S + (T - v) / 2 - w / 2 + _), e.insert("rect", ":first-child").attr("x", E).attr("y", getConfig2().state.titleShift - getConfig2().state.textHeight - getConfig2().state.padding).attr("width", T).attr("height", getConfig2().state.textHeight * 3).attr("rx", getConfig2().state.radius), e.insert("rect", ":first-child").attr("x", E).attr("y", getConfig2().state.titleShift - getConfig2().state.textHeight - getConfig2().state.padding).attr("width", T).attr("height", D.height + 3 + 2 * getConfig2().state.textHeight).attr("rx", getConfig2().state.radius), e;
}, "addTitleAndBox"), drawEndState = /* @__PURE__ */ __name((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", getConfig2().state.sizeUnit + getConfig2().state.miniPadding).attr("cx", getConfig2().state.padding + getConfig2().state.sizeUnit + getConfig2().state.miniPadding).attr("cy", getConfig2().state.padding + getConfig2().state.sizeUnit + getConfig2().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", getConfig2().state.sizeUnit).attr("cx", getConfig2().state.padding + getConfig2().state.sizeUnit + 2).attr("cy", getConfig2().state.padding + getConfig2().state.sizeUnit + 2)), "drawEndState"), drawForkJoinState = /* @__PURE__ */ __name((e, h) => {
	let g = getConfig2().state.forkWidth, _ = getConfig2().state.forkHeight;
	if (h.parentId) {
		let e = g;
		g = _, _ = e;
	}
	return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", g).attr("height", _).attr("x", getConfig2().state.padding).attr("y", getConfig2().state.padding);
}, "drawForkJoinState"), _drawLongText = /* @__PURE__ */ __name((e, h, g, _) => {
	let v = 0, y = _.append("text");
	y.style("text-anchor", "start"), y.attr("class", "noteText");
	let b = e.replace(/\r\n/g, "<br/>");
	b = b.replace(/\n/g, "<br/>");
	let S = b.split(common_default.lineBreakRegex), w = 1.25 * getConfig2().state.noteMargin;
	for (let e of S) {
		let _ = e.trim();
		if (_.length > 0) {
			let e = y.append("tspan");
			if (e.text(_), w === 0) {
				let h = e.node().getBBox();
				w += h.height;
			}
			v += w, e.attr("x", h + getConfig2().state.noteMargin), e.attr("y", g + v + 1.25 * getConfig2().state.noteMargin);
		}
	}
	return {
		textWidth: y.node().getBBox().width,
		textHeight: v
	};
}, "_drawLongText"), drawNote = /* @__PURE__ */ __name((e, h) => {
	h.attr("class", "state-note");
	let g = h.append("rect").attr("x", 0).attr("y", getConfig2().state.padding), { textWidth: _, textHeight: v } = _drawLongText(e, 0, 0, h.append("g"));
	return g.attr("height", v + 2 * getConfig2().state.noteMargin), g.attr("width", _ + getConfig2().state.noteMargin * 2), g;
}, "drawNote"), drawState = /* @__PURE__ */ __name(function(e, h) {
	let g = h.id, _ = {
		id: g,
		label: h.id,
		width: 0,
		height: 0
	}, v = e.append("g").attr("id", g).attr("class", "stateGroup");
	h.type === "start" && drawStartState(v), h.type === "end" && drawEndState(v), (h.type === "fork" || h.type === "join") && drawForkJoinState(v, h), h.type === "note" && drawNote(h.note.text, v), h.type === "divider" && drawDivider(v), h.type === "default" && h.descriptions.length === 0 && drawSimpleState(v, h), h.type === "default" && h.descriptions.length > 0 && drawDescrState(v, h);
	let y = v.node().getBBox();
	return _.width = y.width + 2 * getConfig2().state.padding, _.height = y.height + 2 * getConfig2().state.padding, _;
}, "drawState"), edgeCount = 0, drawEdge = /* @__PURE__ */ __name(function(e, g, y) {
	let S = /* @__PURE__ */ __name(function(e) {
		switch (e) {
			case StateDB.relationType.AGGREGATION: return "aggregation";
			case StateDB.relationType.EXTENSION: return "extension";
			case StateDB.relationType.COMPOSITION: return "composition";
			case StateDB.relationType.DEPENDENCY: return "dependency";
		}
	}, "getRelationType");
	g.points = g.points.filter((e) => !Number.isNaN(e.y));
	let E = g.points, D = line_default().x(function(e) {
		return e.x;
	}).y(function(e) {
		return e.y;
	}).curve(basis_default), k = e.append("path").attr("d", D(E)).attr("id", "edge" + edgeCount).attr("class", "transition"), A = "";
	if (getConfig2().state.arrowMarkerAbsolute && (A = getUrl(!0)), k.attr("marker-end", "url(" + A + "#" + S(StateDB.relationType.DEPENDENCY) + "End)"), y.title !== void 0) {
		let v = e.append("g").attr("class", "stateLabel"), { x: b, y: S } = utils_default.calcLabelPosition(g.points), w = common_default.getRows(y.title), T = 0, E = [], D = 0, O = 0;
		for (let e = 0; e <= w.length; e++) {
			let h = v.append("text").attr("text-anchor", "middle").text(w[e]).attr("x", b).attr("y", S + T), g = h.node().getBBox();
			D = Math.max(D, g.width), O = Math.min(O, g.x), log.info(g.x, b, S + T), T === 0 && (T = h.node().getBBox().height, log.info("Title height", T, S)), E.push(h);
		}
		let k = T * w.length;
		if (w.length > 1) {
			let e = (w.length - 1) * T * .5;
			E.forEach((h, g) => h.attr("y", S + g * T - e)), k = T * w.length;
		}
		let A = v.node().getBBox();
		v.insert("rect", ":first-child").attr("class", "box").attr("x", b - D / 2 - getConfig2().state.padding / 2).attr("y", S - k / 2 - getConfig2().state.padding / 2 - 3.5).attr("width", D + getConfig2().state.padding).attr("height", k + getConfig2().state.padding), log.info(A);
	}
	edgeCount++;
}, "drawEdge"), conf, transformationLog = {}, setConf = /* @__PURE__ */ __name(function() {}, "setConf"), insertMarkers = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), draw = /* @__PURE__ */ __name(function(e, h, g, v) {
	conf = getConfig2().state;
	let b = getConfig2().securityLevel, C;
	b === "sandbox" && (C = select_default("#i" + h));
	let w = select_default(b === "sandbox" ? C.nodes()[0].contentDocument.body : "body"), T = b === "sandbox" ? C.nodes()[0].contentDocument : document;
	log.debug("Rendering diagram " + e);
	let E = w.select(`[id='${h}']`);
	insertMarkers(E), renderDoc(v.db.getRootDoc(), E, void 0, !1, w, T, v);
	let D = conf.padding, O = E.node().getBBox(), k = O.width + D * 2, A = O.height + D * 2;
	configureSvgSize(E, A, k * 1.75, conf.useMaxWidth), E.attr("viewBox", `${O.x - conf.padding}  ${O.y - conf.padding} ` + k + " " + A);
}, "draw"), getLabelWidth = /* @__PURE__ */ __name((e) => e ? e.length * conf.fontSizeFactor : 1, "getLabelWidth"), renderDoc = /* @__PURE__ */ __name((h, v, y, b, x, S, w) => {
	let T = new Graph({
		compound: !0,
		multigraph: !0
	}), E, D = !0;
	for (E = 0; E < h.length; E++) if (h[E].stmt === "relation") {
		D = !1;
		break;
	}
	y ? T.setGraph({
		rankdir: "LR",
		multigraph: !0,
		compound: !0,
		ranker: "tight-tree",
		ranksep: D ? 1 : conf.edgeLengthFactor,
		nodeSep: D ? 1 : 50,
		isMultiGraph: !0
	}) : T.setGraph({
		rankdir: "TB",
		multigraph: !0,
		compound: !0,
		ranksep: D ? 1 : conf.edgeLengthFactor,
		nodeSep: D ? 1 : 50,
		ranker: "tight-tree",
		isMultiGraph: !0
	}), T.setDefaultEdgeLabel(function() {
		return {};
	});
	let O = w.db.getStates(), k = w.db.getRelations(), A = Object.keys(O);
	for (let e of A) {
		let h = O[e];
		y && (h.parentId = y);
		let g;
		if (h.doc) {
			let e = v.append("g").attr("id", h.id).attr("class", "stateGroup");
			g = renderDoc(h.doc, e, h.id, !b, x, S, w);
			{
				e = addTitleAndBox(e, h, b);
				let _ = e.node().getBBox();
				g.width = _.width, g.height = _.height + conf.padding / 2, transformationLog[h.id] = { y: conf.compositTitleSize };
			}
		} else g = drawState(v, h, T);
		if (h.note) {
			let e = drawState(v, {
				descriptions: [],
				id: h.id + "-note",
				note: h.note,
				type: "note"
			}, T);
			h.note.position === "left of" ? (T.setNode(g.id + "-note", e), T.setNode(g.id, g)) : (T.setNode(g.id, g), T.setNode(g.id + "-note", e)), T.setParent(g.id, g.id + "-group"), T.setParent(g.id + "-note", g.id + "-group");
		} else T.setNode(g.id, g);
	}
	log.debug("Count=", T.nodeCount(), T);
	let j = 0;
	k.forEach(function(e) {
		j++, log.debug("Setting edge", e), T.setEdge(e.id1, e.id2, {
			relation: e,
			width: getLabelWidth(e.title),
			height: conf.labelHeight * common_default.getRows(e.title).length,
			labelpos: "c"
		}, "id" + j);
	}), layout(T), log.debug("Graph after layout", T.nodes());
	let M = v.node();
	T.nodes().forEach(function(e) {
		e !== void 0 && T.node(e) !== void 0 ? (log.warn("Node " + e + ": " + JSON.stringify(T.node(e))), x.select("#" + M.id + " #" + e).attr("transform", "translate(" + (T.node(e).x - T.node(e).width / 2) + "," + (T.node(e).y + (transformationLog[e] ? transformationLog[e].y : 0) - T.node(e).height / 2) + " )"), x.select("#" + M.id + " #" + e).attr("data-x-shift", T.node(e).x - T.node(e).width / 2), S.querySelectorAll("#" + M.id + " #" + e + " .divider").forEach((e) => {
			let h = e.parentElement, g = 0, _ = 0;
			h && (h.parentElement && (g = h.parentElement.getBBox().width), _ = parseInt(h.getAttribute("data-x-shift"), 10), Number.isNaN(_) && (_ = 0)), e.setAttribute("x1", 0 - _ + 8), e.setAttribute("x2", g - _ - 8);
		})) : log.debug("No Node " + e + ": " + JSON.stringify(T.node(e)));
	});
	let N = M.getBBox();
	T.edges().forEach(function(e) {
		e !== void 0 && T.edge(e) !== void 0 && (log.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(T.edge(e))), drawEdge(v, T.edge(e), T.edge(e).relation));
	}), N = M.getBBox();
	let P = {
		id: y || "root",
		label: y || "root",
		width: 0,
		height: 0
	};
	return P.width = N.width + 2 * conf.padding, P.height = N.height + 2 * conf.padding, log.debug("Doc rendered", P, T), P;
}, "renderDoc"), diagram = {
	parser: stateDiagram_default,
	get db() {
		return new StateDB(1);
	},
	renderer: {
		setConf,
		draw
	},
	styles: styles_default,
	init: /* @__PURE__ */ __name((e) => {
		e.state ||= {}, e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
	}, "init")
};
export { diagram };
