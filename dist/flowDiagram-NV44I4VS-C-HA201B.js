import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { c as getEdgeId, g as utils_default } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, H as setConfig2, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, et as rgba_default, s as common_default, u as defaultConfig2, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as channel_default } from "./channel-C2PC5s-o.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import "./array-BlABR2MP.js";
import "./step-DmjVsfVE.js";
import "./line-Cl_B2mnJ.js";
import "./dist-CUheKjZU.js";
import "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import { t as getIconStyles } from "./chunk-FMBD7UC4-D5HULJBc.js";
import "./chunk-HN2XXSSU-p3ji0EC3.js";
import "./chunk-CVBHYZKI-Cx9WXSzs.js";
import { t as getDiagramElement } from "./chunk-55IACEB6-BKO4wDwb.js";
import { t as setupViewPortForSVG } from "./chunk-QN33PNHL-DXOPcIi5.js";
import "./chunk-ATLVNIR6-DULmhiFu.js";
import { o as isValidShape } from "./chunk-JZLCHNYA-Cqf7Lizt.js";
import "./chunk-QXUST7PY-DE6lURYz.js";
import { r as render, t as getRegisteredLayoutAlgorithm } from "./chunk-N4CR4FBY-vW6kPLGX.js";
import { n as load, t as JSON_SCHEMA } from "./chunk-MI3HLSF2-DcxRTH2O.js";
var MERMAID_DOM_ID_PREFIX = "flowchart-", FlowDB = class {
	constructor() {
		this.vertexCounter = 0, this.config = getConfig2(), this.vertices = /* @__PURE__ */ new Map(), this.edges = [], this.classes = /* @__PURE__ */ new Map(), this.subGraphs = [], this.subGraphLookup = /* @__PURE__ */ new Map(), this.tooltips = /* @__PURE__ */ new Map(), this.subCount = 0, this.firstGraphFlag = !0, this.secCount = -1, this.posCrossRef = [], this.funs = [], this.setAccTitle = setAccTitle, this.setAccDescription = setAccDescription, this.setDiagramTitle = setDiagramTitle, this.getAccTitle = getAccTitle, this.getAccDescription = getAccDescription, this.getDiagramTitle = getDiagramTitle, this.funs.push(this.setupToolTips.bind(this)), this.addVertex = this.addVertex.bind(this), this.firstGraph = this.firstGraph.bind(this), this.setDirection = this.setDirection.bind(this), this.addSubGraph = this.addSubGraph.bind(this), this.addLink = this.addLink.bind(this), this.setLink = this.setLink.bind(this), this.updateLink = this.updateLink.bind(this), this.addClass = this.addClass.bind(this), this.setClass = this.setClass.bind(this), this.destructLink = this.destructLink.bind(this), this.setClickEvent = this.setClickEvent.bind(this), this.setTooltip = this.setTooltip.bind(this), this.updateLinkInterpolate = this.updateLinkInterpolate.bind(this), this.setClickFun = this.setClickFun.bind(this), this.bindFunctions = this.bindFunctions.bind(this), this.lex = { firstGraph: this.firstGraph.bind(this) }, this.clear(), this.setGen("gen-2");
	}
	static #_ = __name(this, "FlowDB");
	sanitizeText(e) {
		return common_default.sanitizeText(e, this.config);
	}
	lookUpDomId(e) {
		for (let t of this.vertices.values()) if (t.id === e) return t.domId;
		return e;
	}
	addVertex(e, t, n, r, i, a, o = {}, s) {
		if (!e || e.trim().length === 0) return;
		let c;
		if (s !== void 0) {
			let e;
			e = s.includes("\n") ? s + "\n" : "{\n" + s + "\n}", c = load(e, { schema: JSON_SCHEMA });
		}
		let l = this.edges.find((t) => t.id === e);
		if (l) {
			let e = c;
			e?.animate !== void 0 && (l.animate = e.animate), e?.animation !== void 0 && (l.animation = e.animation), e?.curve !== void 0 && (l.interpolate = e.curve);
			return;
		}
		let u, d = this.vertices.get(e);
		if (d === void 0 && (d = {
			id: e,
			labelType: "text",
			domId: MERMAID_DOM_ID_PREFIX + e + "-" + this.vertexCounter,
			styles: [],
			classes: []
		}, this.vertices.set(e, d)), this.vertexCounter++, t === void 0 ? d.text === void 0 && (d.text = e) : (this.config = getConfig2(), u = this.sanitizeText(t.text.trim()), d.labelType = t.type, u.startsWith("\"") && u.endsWith("\"") && (u = u.substring(1, u.length - 1)), d.text = u), n !== void 0 && (d.type = n), r?.forEach((e) => {
			d.styles.push(e);
		}), i?.forEach((e) => {
			d.classes.push(e);
		}), a !== void 0 && (d.dir = a), d.props === void 0 ? d.props = o : o !== void 0 && Object.assign(d.props, o), c !== void 0) {
			if (c.shape) {
				if (c.shape !== c.shape.toLowerCase() || c.shape.includes("_")) throw Error(`No such shape: ${c.shape}. Shape names should be lowercase.`);
				if (!isValidShape(c.shape)) throw Error(`No such shape: ${c.shape}.`);
				d.type = c?.shape;
			}
			c?.label && (d.text = c?.label), c?.icon && (d.icon = c?.icon, !c.label?.trim() && d.text === e && (d.text = "")), c?.form && (d.form = c?.form), c?.pos && (d.pos = c?.pos), c?.img && (d.img = c?.img, !c.label?.trim() && d.text === e && (d.text = "")), c?.constraint && (d.constraint = c.constraint), c.w && (d.assetWidth = Number(c.w)), c.h && (d.assetHeight = Number(c.h));
		}
	}
	addSingleLink(t, r, i, a) {
		let o = {
			start: t,
			end: r,
			type: void 0,
			text: "",
			labelType: "text",
			classes: [],
			isUserDefinedId: !1,
			interpolate: this.edges.defaultInterpolate
		};
		log.info("abc78 Got edge...", o);
		let s = i.text;
		if (s !== void 0 && (o.text = this.sanitizeText(s.text.trim()), o.text.startsWith("\"") && o.text.endsWith("\"") && (o.text = o.text.substring(1, o.text.length - 1)), o.labelType = s.type), i !== void 0 && (o.type = i.type, o.stroke = i.stroke, o.length = i.length > 10 ? 10 : i.length), a && !this.edges.some((e) => e.id === a)) o.id = a, o.isUserDefinedId = !0;
		else {
			let t = this.edges.filter((e) => e.start === o.start && e.end === o.end);
			t.length === 0 ? o.id = getEdgeId(o.start, o.end, {
				counter: 0,
				prefix: "L"
			}) : o.id = getEdgeId(o.start, o.end, {
				counter: t.length + 1,
				prefix: "L"
			});
		}
		if (this.edges.length < (this.config.maxEdges ?? 500)) log.info("Pushing edge..."), this.edges.push(o);
		else throw Error(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${this.config.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`);
	}
	isLinkData(e) {
		return typeof e == "object" && !!e && "id" in e && typeof e.id == "string";
	}
	addLink(e, t, r) {
		let i = this.isLinkData(r) ? r.id.replace("@", "") : void 0;
		log.info("addLink", e, t, i);
		for (let n of e) for (let a of t) {
			let o = n === e[e.length - 1], s = a === t[0];
			o && s ? this.addSingleLink(n, a, r, i) : this.addSingleLink(n, a, r, void 0);
		}
	}
	updateLinkInterpolate(e, t) {
		e.forEach((e) => {
			e === "default" ? this.edges.defaultInterpolate = t : this.edges[e].interpolate = t;
		});
	}
	updateLink(e, t) {
		e.forEach((e) => {
			if (typeof e == "number" && e >= this.edges.length) throw Error(`The index ${e} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`);
			e === "default" ? this.edges.defaultStyle = t : (this.edges[e].style = t, (this.edges[e]?.style?.length ?? 0) > 0 && !this.edges[e]?.style?.some((e) => e?.startsWith("fill")) && this.edges[e]?.style?.push("fill:none"));
		});
	}
	addClass(e, t) {
		let n = t.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		e.split(",").forEach((e) => {
			let t = this.classes.get(e);
			t === void 0 && (t = {
				id: e,
				styles: [],
				textStyles: []
			}, this.classes.set(e, t)), n?.forEach((e) => {
				if (/color/.exec(e)) {
					let n = e.replace("fill", "bgFill");
					t.textStyles.push(n);
				}
				t.styles.push(e);
			});
		});
	}
	setDirection(e) {
		this.direction = e.trim(), /.*</.exec(this.direction) && (this.direction = "RL"), /.*\^/.exec(this.direction) && (this.direction = "BT"), /.*>/.exec(this.direction) && (this.direction = "LR"), /.*v/.exec(this.direction) && (this.direction = "TB"), this.direction === "TD" && (this.direction = "TB");
	}
	setClass(e, t) {
		for (let n of e.split(",")) {
			let e = this.vertices.get(n);
			e && e.classes.push(t);
			let r = this.edges.find((e) => e.id === n);
			r && r.classes.push(t);
			let i = this.subGraphLookup.get(n);
			i && i.classes.push(t);
		}
	}
	setTooltip(e, t) {
		if (t !== void 0) {
			t = this.sanitizeText(t);
			for (let n of e.split(",")) this.tooltips.set(this.version === "gen-1" ? this.lookUpDomId(n) : n, t);
		}
	}
	setClickFun(e, n, r) {
		let i = this.lookUpDomId(e);
		if (getConfig2().securityLevel !== "loose" || n === void 0) return;
		let a = [];
		if (typeof r == "string") {
			a = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
			for (let e = 0; e < a.length; e++) {
				let t = a[e].trim();
				t.startsWith("\"") && t.endsWith("\"") && (t = t.substr(1, t.length - 2)), a[e] = t;
			}
		}
		a.length === 0 && a.push(e);
		let o = this.vertices.get(e);
		o && (o.haveCallback = !0, this.funs.push(() => {
			let e = document.querySelector(`[id="${i}"]`);
			e !== null && e.addEventListener("click", () => {
				utils_default.runFunc(n, ...a);
			}, !1);
		}));
	}
	setLink(e, n, r) {
		e.split(",").forEach((e) => {
			let i = this.vertices.get(e);
			i !== void 0 && (i.link = utils_default.formatUrl(n, this.config), i.linkTarget = r);
		}), this.setClass(e, "clickable");
	}
	getTooltip(e) {
		return this.tooltips.get(e);
	}
	setClickEvent(e, t, n) {
		e.split(",").forEach((e) => {
			this.setClickFun(e, t, n);
		}), this.setClass(e, "clickable");
	}
	bindFunctions(e) {
		this.funs.forEach((t) => {
			t(e);
		});
	}
	getDirection() {
		return this.direction?.trim();
	}
	getVertices() {
		return this.vertices;
	}
	getEdges() {
		return this.edges;
	}
	getClasses() {
		return this.classes;
	}
	setupToolTips(e) {
		let t = select_default(".mermaidTooltip");
		(t._groups || t)[0][0] === null && (t = select_default("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0)), select_default(e).select("svg").selectAll("g.node").on("mouseover", (e) => {
			let n = select_default(e.currentTarget);
			if (n.attr("title") === null) return;
			let r = e.currentTarget?.getBoundingClientRect();
			t.transition().duration(200).style("opacity", ".9"), t.text(n.attr("title")).style("left", window.scrollX + r.left + (r.right - r.left) / 2 + "px").style("top", window.scrollY + r.bottom + "px"), t.html(t.html().replace(/&lt;br\/&gt;/g, "<br/>")), n.classed("hover", !0);
		}).on("mouseout", (e) => {
			t.transition().duration(500).style("opacity", 0), select_default(e.currentTarget).classed("hover", !1);
		});
	}
	clear(e = "gen-2") {
		this.vertices = /* @__PURE__ */ new Map(), this.classes = /* @__PURE__ */ new Map(), this.edges = [], this.funs = [this.setupToolTips.bind(this)], this.subGraphs = [], this.subGraphLookup = /* @__PURE__ */ new Map(), this.subCount = 0, this.tooltips = /* @__PURE__ */ new Map(), this.firstGraphFlag = !0, this.version = e, this.config = getConfig2(), clear();
	}
	setGen(e) {
		this.version = e || "gen-2";
	}
	defaultStyle() {
		return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
	}
	addSubGraph(e, t, i) {
		let a = e.text.trim(), o = i.text;
		e === i && /\s/.exec(i.text) && (a = void 0);
		let s = (/* @__PURE__ */ __name((e) => {
			let t = {
				boolean: {},
				number: {},
				string: {}
			}, n = [], r;
			return {
				nodeList: e.filter(function(e) {
					let i = typeof e;
					return e.stmt && e.stmt === "dir" ? (r = e.value, !1) : e.trim() === "" ? !1 : i in t ? t[i].hasOwnProperty(e) ? !1 : t[i][e] = !0 : n.includes(e) ? !1 : n.push(e);
				}),
				dir: r
			};
		}, "uniq"))(t.flat()), c = s.nodeList, l = s.dir, u = getConfig2().flowchart ?? {};
		if (l ??= u.inheritDir ? this.getDirection() ?? getConfig2().direction ?? void 0 : void 0, this.version === "gen-1") for (let e = 0; e < c.length; e++) c[e] = this.lookUpDomId(c[e]);
		a ??= "subGraph" + this.subCount, o ||= "", o = this.sanitizeText(o), this.subCount += 1;
		let d = {
			id: a,
			nodes: c,
			title: o.trim(),
			classes: [],
			dir: l,
			labelType: i.type
		};
		return log.info("Adding", d.id, d.nodes, d.dir), d.nodes = this.makeUniq(d, this.subGraphs).nodes, this.subGraphs.push(d), this.subGraphLookup.set(a, d), a;
	}
	getPosForId(e) {
		for (let [t, n] of this.subGraphs.entries()) if (n.id === e) return t;
		return -1;
	}
	indexNodes2(e, t) {
		let n = this.subGraphs[t].nodes;
		if (this.secCount += 1, this.secCount > 2e3) return {
			result: !1,
			count: 0
		};
		if (this.posCrossRef[this.secCount] = t, this.subGraphs[t].id === e) return {
			result: !0,
			count: 0
		};
		let r = 0, i = 1;
		for (; r < n.length;) {
			let t = this.getPosForId(n[r]);
			if (t >= 0) {
				let n = this.indexNodes2(e, t);
				if (n.result) return {
					result: !0,
					count: i + n.count
				};
				i += n.count;
			}
			r += 1;
		}
		return {
			result: !1,
			count: i
		};
	}
	getDepthFirstPos(e) {
		return this.posCrossRef[e];
	}
	indexNodes() {
		this.secCount = -1, this.subGraphs.length > 0 && this.indexNodes2("none", this.subGraphs.length - 1);
	}
	getSubGraphs() {
		return this.subGraphs;
	}
	firstGraph() {
		return this.firstGraphFlag ? (this.firstGraphFlag = !1, !0) : !1;
	}
	destructStartLink(e) {
		let t = e.trim(), n = "arrow_open";
		switch (t[0]) {
			case "<":
				n = "arrow_point", t = t.slice(1);
				break;
			case "x":
				n = "arrow_cross", t = t.slice(1);
				break;
			case "o":
				n = "arrow_circle", t = t.slice(1);
				break;
		}
		let r = "normal";
		return t.includes("=") && (r = "thick"), t.includes(".") && (r = "dotted"), {
			type: n,
			stroke: r
		};
	}
	countChar(e, t) {
		let n = t.length, r = 0;
		for (let i = 0; i < n; ++i) t[i] === e && ++r;
		return r;
	}
	destructEndLink(e) {
		let t = e.trim(), n = t.slice(0, -1), r = "arrow_open";
		switch (t.slice(-1)) {
			case "x":
				r = "arrow_cross", t.startsWith("x") && (r = "double_" + r, n = n.slice(1));
				break;
			case ">":
				r = "arrow_point", t.startsWith("<") && (r = "double_" + r, n = n.slice(1));
				break;
			case "o":
				r = "arrow_circle", t.startsWith("o") && (r = "double_" + r, n = n.slice(1));
				break;
		}
		let i = "normal", a = n.length - 1;
		n.startsWith("=") && (i = "thick"), n.startsWith("~") && (i = "invisible");
		let o = this.countChar(".", n);
		return o && (i = "dotted", a = o), {
			type: r,
			stroke: i,
			length: a
		};
	}
	destructLink(e, t) {
		let n = this.destructEndLink(e), r;
		if (t) {
			if (r = this.destructStartLink(t), r.stroke !== n.stroke) return {
				type: "INVALID",
				stroke: "INVALID"
			};
			if (r.type === "arrow_open") r.type = n.type;
			else {
				if (r.type !== n.type) return {
					type: "INVALID",
					stroke: "INVALID"
				};
				r.type = "double_" + r.type;
			}
			return r.type === "double_arrow" && (r.type = "double_arrow_point"), r.length = n.length, r;
		}
		return n;
	}
	exists(e, t) {
		for (let n of e) if (n.nodes.includes(t)) return !0;
		return !1;
	}
	makeUniq(e, t) {
		let n = [];
		return e.nodes.forEach((r, i) => {
			this.exists(t, r) || n.push(e.nodes[i]);
		}), { nodes: n };
	}
	getTypeFromVertex(e) {
		if (e.img) return "imageSquare";
		if (e.icon) return e.form === "circle" ? "iconCircle" : e.form === "square" ? "iconSquare" : e.form === "rounded" ? "iconRounded" : "icon";
		switch (e.type) {
			case "square":
			case void 0: return "squareRect";
			case "round": return "roundedRect";
			case "ellipse": return "ellipse";
			default: return e.type;
		}
	}
	findNode(e, t) {
		return e.find((e) => e.id === t);
	}
	destructEdgeType(e) {
		let t = "none", n = "arrow_point";
		switch (e) {
			case "arrow_point":
			case "arrow_circle":
			case "arrow_cross":
				n = e;
				break;
			case "double_arrow_point":
			case "double_arrow_circle":
			case "double_arrow_cross":
				t = e.replace("double_", ""), n = t;
				break;
		}
		return {
			arrowTypeStart: t,
			arrowTypeEnd: n
		};
	}
	addNodeFromVertex(e, t, n, r, i, a) {
		let o = n.get(e.id), s = r.get(e.id) ?? !1, c = this.findNode(t, e.id);
		if (c) c.cssStyles = e.styles, c.cssCompiledStyles = this.getCompiledStyles(e.classes), c.cssClasses = e.classes.join(" ");
		else {
			let n = {
				id: e.id,
				label: e.text,
				labelStyle: "",
				parentId: o,
				padding: i.flowchart?.padding || 8,
				cssStyles: e.styles,
				cssCompiledStyles: this.getCompiledStyles([
					"default",
					"node",
					...e.classes
				]),
				cssClasses: "default " + e.classes.join(" "),
				dir: e.dir,
				domId: e.domId,
				look: a,
				link: e.link,
				linkTarget: e.linkTarget,
				tooltip: this.getTooltip(e.id),
				icon: e.icon,
				pos: e.pos,
				img: e.img,
				assetWidth: e.assetWidth,
				assetHeight: e.assetHeight,
				constraint: e.constraint
			};
			s ? t.push({
				...n,
				isGroup: !0,
				shape: "rect"
			}) : t.push({
				...n,
				isGroup: !1,
				shape: this.getTypeFromVertex(e)
			});
		}
	}
	getCompiledStyles(e) {
		let t = [];
		for (let n of e) {
			let e = this.classes.get(n);
			e?.styles && (t = [...t, ...e.styles ?? []].map((e) => e.trim())), e?.textStyles && (t = [...t, ...e.textStyles ?? []].map((e) => e.trim()));
		}
		return t;
	}
	getData() {
		let t = getConfig2(), n = [], r = [], i = this.getSubGraphs(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
		for (let e = i.length - 1; e >= 0; e--) {
			let t = i[e];
			t.nodes.length > 0 && o.set(t.id, !0);
			for (let e of t.nodes) a.set(e, t.id);
		}
		for (let e = i.length - 1; e >= 0; e--) {
			let r = i[e];
			n.push({
				id: r.id,
				label: r.title,
				labelStyle: "",
				parentId: a.get(r.id),
				padding: 8,
				cssCompiledStyles: this.getCompiledStyles(r.classes),
				cssClasses: r.classes.join(" "),
				shape: "rect",
				dir: r.dir,
				isGroup: !0,
				look: t.look
			});
		}
		this.getVertices().forEach((e) => {
			this.addNodeFromVertex(e, n, a, o, t, t.look || "classic");
		});
		let s = this.getEdges();
		return s.forEach((n, i) => {
			let { arrowTypeStart: a, arrowTypeEnd: o } = this.destructEdgeType(n.type), c = [...s.defaultStyle ?? []];
			n.style && c.push(...n.style);
			let l = {
				id: getEdgeId(n.start, n.end, {
					counter: i,
					prefix: "L"
				}, n.id),
				isUserDefinedId: n.isUserDefinedId,
				start: n.start,
				end: n.end,
				type: n.type ?? "normal",
				label: n.text,
				labelpos: "c",
				thickness: n.stroke,
				minlen: n.length,
				classes: n?.stroke === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
				arrowTypeStart: n?.stroke === "invisible" || n?.type === "arrow_open" ? "none" : a,
				arrowTypeEnd: n?.stroke === "invisible" || n?.type === "arrow_open" ? "none" : o,
				arrowheadStyle: "fill: #333",
				cssCompiledStyles: this.getCompiledStyles(n.classes),
				labelStyle: c,
				style: c,
				pattern: n.stroke,
				look: t.look,
				animate: n.animate,
				animation: n.animation,
				curve: n.interpolate || this.edges.defaultInterpolate || t.flowchart?.curve
			};
			r.push(l);
		}), {
			nodes: n,
			edges: r,
			other: {},
			config: t
		};
	}
	defaultConfig() {
		return defaultConfig2.flowchart;
	}
}, flowRenderer_v3_unified_default = {
	getClasses: /* @__PURE__ */ __name(function(e, t) {
		return t.db.getClasses();
	}, "getClasses"),
	draw: /* @__PURE__ */ __name(async function(e, r, a, o) {
		log.info("REF0:"), log.info("Drawing state diagram (v2)", r);
		let { securityLevel: s, flowchart: c, layout: l } = getConfig2(), u;
		s === "sandbox" && (u = select_default("#i" + r));
		let d = s === "sandbox" ? u.nodes()[0].contentDocument : document;
		log.debug("Before getData: ");
		let f = o.db.getData();
		log.debug("Data: ", f);
		let p = getDiagramElement(r, s), m = o.db.getDirection();
		f.type = o.type, f.layoutAlgorithm = getRegisteredLayoutAlgorithm(l), f.layoutAlgorithm === "dagre" && l === "elk" && log.warn("flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback."), f.direction = m, f.nodeSpacing = c?.nodeSpacing || 50, f.rankSpacing = c?.rankSpacing || 50, f.markers = [
			"point",
			"circle",
			"cross"
		], f.diagramId = r, log.debug("REF1:", f), await render(f, p);
		let h = f.config.flowchart?.diagramPadding ?? 8;
		utils_default.insertTitle(p, "flowchartTitleText", c?.titleTopMargin || 0, o.db.getDiagramTitle()), setupViewPortForSVG(p, h, "flowchart", c?.useMaxWidth || !1);
		for (let e of f.nodes) {
			let t = select_default(`#${r} [id="${e.id}"]`);
			if (!t || !e.link) continue;
			let n = d.createElementNS("http://www.w3.org/2000/svg", "a");
			n.setAttributeNS("http://www.w3.org/2000/svg", "class", e.cssClasses), n.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), s === "sandbox" ? n.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : e.linkTarget && n.setAttributeNS("http://www.w3.org/2000/svg", "target", e.linkTarget);
			let a = t.insert(function() {
				return n;
			}, ":first-child"), o = t.select(".label-container");
			o && a.append(function() {
				return o.node();
			});
			let c = t.select(".label");
			c && a.append(function() {
				return c.node();
			});
		}
	}, "draw")
}, parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [1, 4], n = [1, 3], i = [1, 5], a = [
		1,
		8,
		9,
		10,
		11,
		27,
		34,
		36,
		38,
		44,
		60,
		84,
		85,
		86,
		87,
		88,
		89,
		102,
		105,
		106,
		109,
		111,
		114,
		115,
		116,
		121,
		122,
		123,
		124
	], o = [2, 2], s = [1, 13], c = [1, 14], l = [1, 15], u = [1, 16], ee = [1, 23], d = [1, 25], f = [1, 26], p = [1, 27], m = [1, 49], h = [1, 48], te = [1, 29], g = [1, 30], ne = [1, 31], re = [1, 32], ie = [1, 33], _ = [1, 44], v = [1, 46], y = [1, 42], b = [1, 47], x = [1, 43], S = [1, 50], C = [1, 45], w = [1, 51], T = [1, 52], E = [1, 34], ae = [1, 35], oe = [1, 36], se = [1, 37], D = [1, 57], O = [
		1,
		8,
		9,
		10,
		11,
		27,
		32,
		34,
		36,
		38,
		44,
		60,
		84,
		85,
		86,
		87,
		88,
		89,
		102,
		105,
		106,
		109,
		111,
		114,
		115,
		116,
		121,
		122,
		123,
		124
	], k = [1, 61], A = [1, 60], j = [1, 62], ce = [
		8,
		9,
		11,
		75,
		77,
		78
	], le = [1, 78], ue = [1, 91], de = [1, 96], fe = [1, 95], pe = [1, 92], me = [1, 88], he = [1, 94], ge = [1, 90], _e = [1, 97], ve = [1, 93], ye = [1, 98], be = [1, 89], M = [
		8,
		9,
		10,
		11,
		40,
		75,
		77,
		78
	], N = [
		8,
		9,
		10,
		11,
		40,
		46,
		75,
		77,
		78
	], P = [
		8,
		9,
		10,
		11,
		29,
		40,
		44,
		46,
		48,
		50,
		52,
		54,
		56,
		58,
		60,
		63,
		65,
		67,
		68,
		70,
		75,
		77,
		78,
		89,
		102,
		105,
		106,
		109,
		111,
		114,
		115,
		116
	], xe = [
		8,
		9,
		11,
		44,
		60,
		75,
		77,
		78,
		89,
		102,
		105,
		106,
		109,
		111,
		114,
		115,
		116
	], Se = [
		44,
		60,
		89,
		102,
		105,
		106,
		109,
		111,
		114,
		115,
		116
	], Ce = [1, 121], we = [1, 122], Te = [1, 124], Ee = [1, 123], De = [
		44,
		60,
		62,
		74,
		89,
		102,
		105,
		106,
		109,
		111,
		114,
		115,
		116
	], Oe = [1, 133], ke = [1, 147], Ae = [1, 148], je = [1, 149], Me = [1, 150], Ne = [1, 135], Pe = [1, 137], Fe = [1, 141], Ie = [1, 142], Le = [1, 143], Re = [1, 144], ze = [1, 145], Be = [1, 146], Ve = [1, 151], He = [1, 152], Ue = [1, 131], We = [1, 132], Ge = [1, 139], Ke = [1, 134], qe = [1, 138], Je = [1, 136], Ye = [
		8,
		9,
		10,
		11,
		27,
		32,
		34,
		36,
		38,
		44,
		60,
		84,
		85,
		86,
		87,
		88,
		89,
		102,
		105,
		106,
		109,
		111,
		114,
		115,
		116,
		121,
		122,
		123,
		124
	], Xe = [1, 154], Ze = [1, 156], F = [
		8,
		9,
		11
	], I = [
		8,
		9,
		10,
		11,
		14,
		44,
		60,
		89,
		105,
		106,
		109,
		111,
		114,
		115,
		116
	], L = [1, 176], R = [1, 172], z = [1, 173], B = [1, 177], V = [1, 174], H = [1, 175], Qe = [
		77,
		116,
		119
	], U = [
		8,
		9,
		10,
		11,
		12,
		14,
		27,
		29,
		32,
		44,
		60,
		75,
		84,
		85,
		86,
		87,
		88,
		89,
		90,
		105,
		109,
		111,
		114,
		115,
		116
	], $e = [10, 106], W = [
		31,
		49,
		51,
		53,
		55,
		57,
		62,
		64,
		66,
		67,
		69,
		71,
		116,
		117,
		118
	], G = [1, 247], K = [1, 245], q = [1, 249], J = [1, 243], Y = [1, 244], X = [1, 246], Z = [1, 248], Q = [1, 250], et = [1, 268], tt = [
		8,
		9,
		11,
		106
	], $ = [
		8,
		9,
		10,
		11,
		60,
		84,
		105,
		106,
		109,
		110,
		111,
		112
	], nt = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			graphConfig: 4,
			document: 5,
			line: 6,
			statement: 7,
			SEMI: 8,
			NEWLINE: 9,
			SPACE: 10,
			EOF: 11,
			GRAPH: 12,
			NODIR: 13,
			DIR: 14,
			FirstStmtSeparator: 15,
			ending: 16,
			endToken: 17,
			spaceList: 18,
			spaceListNewline: 19,
			vertexStatement: 20,
			separator: 21,
			styleStatement: 22,
			linkStyleStatement: 23,
			classDefStatement: 24,
			classStatement: 25,
			clickStatement: 26,
			subgraph: 27,
			textNoTags: 28,
			SQS: 29,
			text: 30,
			SQE: 31,
			end: 32,
			direction: 33,
			acc_title: 34,
			acc_title_value: 35,
			acc_descr: 36,
			acc_descr_value: 37,
			acc_descr_multiline_value: 38,
			shapeData: 39,
			SHAPE_DATA: 40,
			link: 41,
			node: 42,
			styledVertex: 43,
			AMP: 44,
			vertex: 45,
			STYLE_SEPARATOR: 46,
			idString: 47,
			DOUBLECIRCLESTART: 48,
			DOUBLECIRCLEEND: 49,
			PS: 50,
			PE: 51,
			"(-": 52,
			"-)": 53,
			STADIUMSTART: 54,
			STADIUMEND: 55,
			SUBROUTINESTART: 56,
			SUBROUTINEEND: 57,
			VERTEX_WITH_PROPS_START: 58,
			"NODE_STRING[field]": 59,
			COLON: 60,
			"NODE_STRING[value]": 61,
			PIPE: 62,
			CYLINDERSTART: 63,
			CYLINDEREND: 64,
			DIAMOND_START: 65,
			DIAMOND_STOP: 66,
			TAGEND: 67,
			TRAPSTART: 68,
			TRAPEND: 69,
			INVTRAPSTART: 70,
			INVTRAPEND: 71,
			linkStatement: 72,
			arrowText: 73,
			TESTSTR: 74,
			START_LINK: 75,
			edgeText: 76,
			LINK: 77,
			LINK_ID: 78,
			edgeTextToken: 79,
			STR: 80,
			MD_STR: 81,
			textToken: 82,
			keywords: 83,
			STYLE: 84,
			LINKSTYLE: 85,
			CLASSDEF: 86,
			CLASS: 87,
			CLICK: 88,
			DOWN: 89,
			UP: 90,
			textNoTagsToken: 91,
			stylesOpt: 92,
			"idString[vertex]": 93,
			"idString[class]": 94,
			CALLBACKNAME: 95,
			CALLBACKARGS: 96,
			HREF: 97,
			LINK_TARGET: 98,
			"STR[link]": 99,
			"STR[tooltip]": 100,
			alphaNum: 101,
			DEFAULT: 102,
			numList: 103,
			INTERPOLATE: 104,
			NUM: 105,
			COMMA: 106,
			style: 107,
			styleComponent: 108,
			NODE_STRING: 109,
			UNIT: 110,
			BRKT: 111,
			PCT: 112,
			idStringToken: 113,
			MINUS: 114,
			MULT: 115,
			UNICODE_TEXT: 116,
			TEXT: 117,
			TAGSTART: 118,
			EDGE_TEXT: 119,
			alphaNumToken: 120,
			direction_tb: 121,
			direction_bt: 122,
			direction_rl: 123,
			direction_lr: 124,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			8: "SEMI",
			9: "NEWLINE",
			10: "SPACE",
			11: "EOF",
			12: "GRAPH",
			13: "NODIR",
			14: "DIR",
			27: "subgraph",
			29: "SQS",
			31: "SQE",
			32: "end",
			34: "acc_title",
			35: "acc_title_value",
			36: "acc_descr",
			37: "acc_descr_value",
			38: "acc_descr_multiline_value",
			40: "SHAPE_DATA",
			44: "AMP",
			46: "STYLE_SEPARATOR",
			48: "DOUBLECIRCLESTART",
			49: "DOUBLECIRCLEEND",
			50: "PS",
			51: "PE",
			52: "(-",
			53: "-)",
			54: "STADIUMSTART",
			55: "STADIUMEND",
			56: "SUBROUTINESTART",
			57: "SUBROUTINEEND",
			58: "VERTEX_WITH_PROPS_START",
			59: "NODE_STRING[field]",
			60: "COLON",
			61: "NODE_STRING[value]",
			62: "PIPE",
			63: "CYLINDERSTART",
			64: "CYLINDEREND",
			65: "DIAMOND_START",
			66: "DIAMOND_STOP",
			67: "TAGEND",
			68: "TRAPSTART",
			69: "TRAPEND",
			70: "INVTRAPSTART",
			71: "INVTRAPEND",
			74: "TESTSTR",
			75: "START_LINK",
			77: "LINK",
			78: "LINK_ID",
			80: "STR",
			81: "MD_STR",
			84: "STYLE",
			85: "LINKSTYLE",
			86: "CLASSDEF",
			87: "CLASS",
			88: "CLICK",
			89: "DOWN",
			90: "UP",
			93: "idString[vertex]",
			94: "idString[class]",
			95: "CALLBACKNAME",
			96: "CALLBACKARGS",
			97: "HREF",
			98: "LINK_TARGET",
			99: "STR[link]",
			100: "STR[tooltip]",
			102: "DEFAULT",
			104: "INTERPOLATE",
			105: "NUM",
			106: "COMMA",
			109: "NODE_STRING",
			110: "UNIT",
			111: "BRKT",
			112: "PCT",
			114: "MINUS",
			115: "MULT",
			116: "UNICODE_TEXT",
			117: "TEXT",
			118: "TAGSTART",
			119: "EDGE_TEXT",
			121: "direction_tb",
			122: "direction_bt",
			123: "direction_rl",
			124: "direction_lr"
		},
		productions_: [
			0,
			[3, 2],
			[5, 0],
			[5, 2],
			[6, 1],
			[6, 1],
			[6, 1],
			[6, 1],
			[6, 1],
			[4, 2],
			[4, 2],
			[4, 2],
			[4, 3],
			[16, 2],
			[16, 1],
			[17, 1],
			[17, 1],
			[17, 1],
			[15, 1],
			[15, 1],
			[15, 2],
			[19, 2],
			[19, 2],
			[19, 1],
			[19, 1],
			[18, 2],
			[18, 1],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 9],
			[7, 6],
			[7, 4],
			[7, 1],
			[7, 2],
			[7, 2],
			[7, 1],
			[21, 1],
			[21, 1],
			[21, 1],
			[39, 2],
			[39, 1],
			[20, 4],
			[20, 3],
			[20, 4],
			[20, 2],
			[20, 2],
			[20, 1],
			[42, 1],
			[42, 6],
			[42, 5],
			[43, 1],
			[43, 3],
			[45, 4],
			[45, 4],
			[45, 6],
			[45, 4],
			[45, 4],
			[45, 4],
			[45, 8],
			[45, 4],
			[45, 4],
			[45, 4],
			[45, 6],
			[45, 4],
			[45, 4],
			[45, 4],
			[45, 4],
			[45, 4],
			[45, 1],
			[41, 2],
			[41, 3],
			[41, 3],
			[41, 1],
			[41, 3],
			[41, 4],
			[76, 1],
			[76, 2],
			[76, 1],
			[76, 1],
			[72, 1],
			[72, 2],
			[73, 3],
			[30, 1],
			[30, 2],
			[30, 1],
			[30, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[83, 1],
			[28, 1],
			[28, 2],
			[28, 1],
			[28, 1],
			[24, 5],
			[25, 5],
			[26, 2],
			[26, 4],
			[26, 3],
			[26, 5],
			[26, 3],
			[26, 5],
			[26, 5],
			[26, 7],
			[26, 2],
			[26, 4],
			[26, 2],
			[26, 4],
			[26, 4],
			[26, 6],
			[22, 5],
			[23, 5],
			[23, 5],
			[23, 9],
			[23, 9],
			[23, 7],
			[23, 7],
			[103, 1],
			[103, 3],
			[92, 1],
			[92, 3],
			[107, 1],
			[107, 2],
			[108, 1],
			[108, 1],
			[108, 1],
			[108, 1],
			[108, 1],
			[108, 1],
			[108, 1],
			[108, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[113, 1],
			[82, 1],
			[82, 1],
			[82, 1],
			[82, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[91, 1],
			[79, 1],
			[79, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[120, 1],
			[47, 1],
			[47, 2],
			[101, 1],
			[101, 2],
			[33, 1],
			[33, 1],
			[33, 1],
			[33, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 2:
					this.$ = [];
					break;
				case 3:
					(!Array.isArray(a[s]) || a[s].length > 0) && a[s - 1].push(a[s]), this.$ = a[s - 1];
					break;
				case 4:
				case 183:
					this.$ = a[s];
					break;
				case 11:
					r.setDirection("TB"), this.$ = "TB";
					break;
				case 12:
					r.setDirection(a[s - 1]), this.$ = a[s - 1];
					break;
				case 27:
					this.$ = a[s - 1].nodes;
					break;
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
					this.$ = [];
					break;
				case 33:
					this.$ = r.addSubGraph(a[s - 6], a[s - 1], a[s - 4]);
					break;
				case 34:
					this.$ = r.addSubGraph(a[s - 3], a[s - 1], a[s - 3]);
					break;
				case 35:
					this.$ = r.addSubGraph(void 0, a[s - 1], void 0);
					break;
				case 37:
					this.$ = a[s].trim(), r.setAccTitle(this.$);
					break;
				case 38:
				case 39:
					this.$ = a[s].trim(), r.setAccDescription(this.$);
					break;
				case 43:
					this.$ = a[s - 1] + a[s];
					break;
				case 44:
					this.$ = a[s];
					break;
				case 45:
					r.addVertex(a[s - 1][a[s - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, a[s]), r.addLink(a[s - 3].stmt, a[s - 1], a[s - 2]), this.$ = {
						stmt: a[s - 1],
						nodes: a[s - 1].concat(a[s - 3].nodes)
					};
					break;
				case 46:
					r.addLink(a[s - 2].stmt, a[s], a[s - 1]), this.$ = {
						stmt: a[s],
						nodes: a[s].concat(a[s - 2].nodes)
					};
					break;
				case 47:
					r.addLink(a[s - 3].stmt, a[s - 1], a[s - 2]), this.$ = {
						stmt: a[s - 1],
						nodes: a[s - 1].concat(a[s - 3].nodes)
					};
					break;
				case 48:
					this.$ = {
						stmt: a[s - 1],
						nodes: a[s - 1]
					};
					break;
				case 49:
					r.addVertex(a[s - 1][a[s - 1].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, a[s]), this.$ = {
						stmt: a[s - 1],
						nodes: a[s - 1],
						shapeData: a[s]
					};
					break;
				case 50:
					this.$ = {
						stmt: a[s],
						nodes: a[s]
					};
					break;
				case 51:
					this.$ = [a[s]];
					break;
				case 52:
					r.addVertex(a[s - 5][a[s - 5].length - 1], void 0, void 0, void 0, void 0, void 0, void 0, a[s - 4]), this.$ = a[s - 5].concat(a[s]);
					break;
				case 53:
					this.$ = a[s - 4].concat(a[s]);
					break;
				case 54:
					this.$ = a[s];
					break;
				case 55:
					this.$ = a[s - 2], r.setClass(a[s - 2], a[s]);
					break;
				case 56:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "square");
					break;
				case 57:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "doublecircle");
					break;
				case 58:
					this.$ = a[s - 5], r.addVertex(a[s - 5], a[s - 2], "circle");
					break;
				case 59:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "ellipse");
					break;
				case 60:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "stadium");
					break;
				case 61:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "subroutine");
					break;
				case 62:
					this.$ = a[s - 7], r.addVertex(a[s - 7], a[s - 1], "rect", void 0, void 0, void 0, Object.fromEntries([[a[s - 5], a[s - 3]]]));
					break;
				case 63:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "cylinder");
					break;
				case 64:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "round");
					break;
				case 65:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "diamond");
					break;
				case 66:
					this.$ = a[s - 5], r.addVertex(a[s - 5], a[s - 2], "hexagon");
					break;
				case 67:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "odd");
					break;
				case 68:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "trapezoid");
					break;
				case 69:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "inv_trapezoid");
					break;
				case 70:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "lean_right");
					break;
				case 71:
					this.$ = a[s - 3], r.addVertex(a[s - 3], a[s - 1], "lean_left");
					break;
				case 72:
					this.$ = a[s], r.addVertex(a[s]);
					break;
				case 73:
					a[s - 1].text = a[s], this.$ = a[s - 1];
					break;
				case 74:
				case 75:
					a[s - 2].text = a[s - 1], this.$ = a[s - 2];
					break;
				case 76:
					this.$ = a[s];
					break;
				case 77:
					var c = r.destructLink(a[s], a[s - 2]);
					this.$ = {
						type: c.type,
						stroke: c.stroke,
						length: c.length,
						text: a[s - 1]
					};
					break;
				case 78:
					var c = r.destructLink(a[s], a[s - 2]);
					this.$ = {
						type: c.type,
						stroke: c.stroke,
						length: c.length,
						text: a[s - 1],
						id: a[s - 3]
					};
					break;
				case 79:
					this.$ = {
						text: a[s],
						type: "text"
					};
					break;
				case 80:
					this.$ = {
						text: a[s - 1].text + "" + a[s],
						type: a[s - 1].type
					};
					break;
				case 81:
					this.$ = {
						text: a[s],
						type: "string"
					};
					break;
				case 82:
					this.$ = {
						text: a[s],
						type: "markdown"
					};
					break;
				case 83:
					var c = r.destructLink(a[s]);
					this.$ = {
						type: c.type,
						stroke: c.stroke,
						length: c.length
					};
					break;
				case 84:
					var c = r.destructLink(a[s]);
					this.$ = {
						type: c.type,
						stroke: c.stroke,
						length: c.length,
						id: a[s - 1]
					};
					break;
				case 85:
					this.$ = a[s - 1];
					break;
				case 86:
					this.$ = {
						text: a[s],
						type: "text"
					};
					break;
				case 87:
					this.$ = {
						text: a[s - 1].text + "" + a[s],
						type: a[s - 1].type
					};
					break;
				case 88:
					this.$ = {
						text: a[s],
						type: "string"
					};
					break;
				case 89:
				case 104:
					this.$ = {
						text: a[s],
						type: "markdown"
					};
					break;
				case 101:
					this.$ = {
						text: a[s],
						type: "text"
					};
					break;
				case 102:
					this.$ = {
						text: a[s - 1].text + "" + a[s],
						type: a[s - 1].type
					};
					break;
				case 103:
					this.$ = {
						text: a[s],
						type: "text"
					};
					break;
				case 105:
					this.$ = a[s - 4], r.addClass(a[s - 2], a[s]);
					break;
				case 106:
					this.$ = a[s - 4], r.setClass(a[s - 2], a[s]);
					break;
				case 107:
				case 115:
					this.$ = a[s - 1], r.setClickEvent(a[s - 1], a[s]);
					break;
				case 108:
				case 116:
					this.$ = a[s - 3], r.setClickEvent(a[s - 3], a[s - 2]), r.setTooltip(a[s - 3], a[s]);
					break;
				case 109:
					this.$ = a[s - 2], r.setClickEvent(a[s - 2], a[s - 1], a[s]);
					break;
				case 110:
					this.$ = a[s - 4], r.setClickEvent(a[s - 4], a[s - 3], a[s - 2]), r.setTooltip(a[s - 4], a[s]);
					break;
				case 111:
					this.$ = a[s - 2], r.setLink(a[s - 2], a[s]);
					break;
				case 112:
					this.$ = a[s - 4], r.setLink(a[s - 4], a[s - 2]), r.setTooltip(a[s - 4], a[s]);
					break;
				case 113:
					this.$ = a[s - 4], r.setLink(a[s - 4], a[s - 2], a[s]);
					break;
				case 114:
					this.$ = a[s - 6], r.setLink(a[s - 6], a[s - 4], a[s]), r.setTooltip(a[s - 6], a[s - 2]);
					break;
				case 117:
					this.$ = a[s - 1], r.setLink(a[s - 1], a[s]);
					break;
				case 118:
					this.$ = a[s - 3], r.setLink(a[s - 3], a[s - 2]), r.setTooltip(a[s - 3], a[s]);
					break;
				case 119:
					this.$ = a[s - 3], r.setLink(a[s - 3], a[s - 2], a[s]);
					break;
				case 120:
					this.$ = a[s - 5], r.setLink(a[s - 5], a[s - 4], a[s]), r.setTooltip(a[s - 5], a[s - 2]);
					break;
				case 121:
					this.$ = a[s - 4], r.addVertex(a[s - 2], void 0, void 0, a[s]);
					break;
				case 122:
					this.$ = a[s - 4], r.updateLink([a[s - 2]], a[s]);
					break;
				case 123:
					this.$ = a[s - 4], r.updateLink(a[s - 2], a[s]);
					break;
				case 124:
					this.$ = a[s - 8], r.updateLinkInterpolate([a[s - 6]], a[s - 2]), r.updateLink([a[s - 6]], a[s]);
					break;
				case 125:
					this.$ = a[s - 8], r.updateLinkInterpolate(a[s - 6], a[s - 2]), r.updateLink(a[s - 6], a[s]);
					break;
				case 126:
					this.$ = a[s - 6], r.updateLinkInterpolate([a[s - 4]], a[s]);
					break;
				case 127:
					this.$ = a[s - 6], r.updateLinkInterpolate(a[s - 4], a[s]);
					break;
				case 128:
				case 130:
					this.$ = [a[s]];
					break;
				case 129:
				case 131:
					a[s - 2].push(a[s]), this.$ = a[s - 2];
					break;
				case 133:
					this.$ = a[s - 1] + a[s];
					break;
				case 181:
					this.$ = a[s];
					break;
				case 182:
					this.$ = a[s - 1] + "" + a[s];
					break;
				case 184:
					this.$ = a[s - 1] + "" + a[s];
					break;
				case 185:
					this.$ = {
						stmt: "dir",
						value: "TB"
					};
					break;
				case 186:
					this.$ = {
						stmt: "dir",
						value: "BT"
					};
					break;
				case 187:
					this.$ = {
						stmt: "dir",
						value: "RL"
					};
					break;
				case 188:
					this.$ = {
						stmt: "dir",
						value: "LR"
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				9: t,
				10: n,
				12: i
			},
			{ 1: [3] },
			e(a, o, { 5: 6 }),
			{
				4: 7,
				9: t,
				10: n,
				12: i
			},
			{
				4: 8,
				9: t,
				10: n,
				12: i
			},
			{
				13: [1, 9],
				14: [1, 10]
			},
			{
				1: [2, 1],
				6: 11,
				7: 12,
				8: s,
				9: c,
				10: l,
				11: u,
				20: 17,
				22: 18,
				23: 19,
				24: 20,
				25: 21,
				26: 22,
				27: ee,
				33: 24,
				34: d,
				36: f,
				38: p,
				42: 28,
				43: 38,
				44: m,
				45: 39,
				47: 40,
				60: h,
				84: te,
				85: g,
				86: ne,
				87: re,
				88: ie,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T,
				121: E,
				122: ae,
				123: oe,
				124: se
			},
			e(a, [2, 9]),
			e(a, [2, 10]),
			e(a, [2, 11]),
			{
				8: [1, 54],
				9: [1, 55],
				10: D,
				15: 53,
				18: 56
			},
			e(O, [2, 3]),
			e(O, [2, 4]),
			e(O, [2, 5]),
			e(O, [2, 6]),
			e(O, [2, 7]),
			e(O, [2, 8]),
			{
				8: k,
				9: A,
				11: j,
				21: 58,
				41: 59,
				72: 63,
				75: [1, 64],
				77: [1, 66],
				78: [1, 65]
			},
			{
				8: k,
				9: A,
				11: j,
				21: 67
			},
			{
				8: k,
				9: A,
				11: j,
				21: 68
			},
			{
				8: k,
				9: A,
				11: j,
				21: 69
			},
			{
				8: k,
				9: A,
				11: j,
				21: 70
			},
			{
				8: k,
				9: A,
				11: j,
				21: 71
			},
			{
				8: k,
				9: A,
				10: [1, 72],
				11: j,
				21: 73
			},
			e(O, [2, 36]),
			{ 35: [1, 74] },
			{ 37: [1, 75] },
			e(O, [2, 39]),
			e(ce, [2, 50], {
				18: 76,
				39: 77,
				10: D,
				40: le
			}),
			{ 10: [1, 79] },
			{ 10: [1, 80] },
			{ 10: [1, 81] },
			{ 10: [1, 82] },
			{
				14: ue,
				44: de,
				60: fe,
				80: [1, 86],
				89: pe,
				95: [1, 83],
				97: [1, 84],
				101: 85,
				105: me,
				106: he,
				109: ge,
				111: _e,
				114: ve,
				115: ye,
				116: be,
				120: 87
			},
			e(O, [2, 185]),
			e(O, [2, 186]),
			e(O, [2, 187]),
			e(O, [2, 188]),
			e(M, [2, 51]),
			e(M, [2, 54], { 46: [1, 99] }),
			e(N, [2, 72], {
				113: 112,
				29: [1, 100],
				44: m,
				48: [1, 101],
				50: [1, 102],
				52: [1, 103],
				54: [1, 104],
				56: [1, 105],
				58: [1, 106],
				60: h,
				63: [1, 107],
				65: [1, 108],
				67: [1, 109],
				68: [1, 110],
				70: [1, 111],
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				114: C,
				115: w,
				116: T
			}),
			e(P, [2, 181]),
			e(P, [2, 142]),
			e(P, [2, 143]),
			e(P, [2, 144]),
			e(P, [2, 145]),
			e(P, [2, 146]),
			e(P, [2, 147]),
			e(P, [2, 148]),
			e(P, [2, 149]),
			e(P, [2, 150]),
			e(P, [2, 151]),
			e(P, [2, 152]),
			e(a, [2, 12]),
			e(a, [2, 18]),
			e(a, [2, 19]),
			{ 9: [1, 113] },
			e(xe, [2, 26], {
				18: 114,
				10: D
			}),
			e(O, [2, 27]),
			{
				42: 115,
				43: 38,
				44: m,
				45: 39,
				47: 40,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			e(O, [2, 40]),
			e(O, [2, 41]),
			e(O, [2, 42]),
			e(Se, [2, 76], {
				73: 116,
				62: [1, 118],
				74: [1, 117]
			}),
			{
				76: 119,
				79: 120,
				80: Ce,
				81: we,
				116: Te,
				119: Ee
			},
			{
				75: [1, 125],
				77: [1, 126]
			},
			e(De, [2, 83]),
			e(O, [2, 28]),
			e(O, [2, 29]),
			e(O, [2, 30]),
			e(O, [2, 31]),
			e(O, [2, 32]),
			{
				10: Oe,
				12: ke,
				14: Ae,
				27: je,
				28: 127,
				32: Me,
				44: Ne,
				60: Pe,
				75: Fe,
				80: [1, 129],
				81: [1, 130],
				83: 140,
				84: Ie,
				85: Le,
				86: Re,
				87: ze,
				88: Be,
				89: Ve,
				90: He,
				91: 128,
				105: Ue,
				109: We,
				111: Ge,
				114: Ke,
				115: qe,
				116: Je
			},
			e(Ye, o, { 5: 153 }),
			e(O, [2, 37]),
			e(O, [2, 38]),
			e(ce, [2, 48], { 44: Xe }),
			e(ce, [2, 49], {
				18: 155,
				10: D,
				40: Ze
			}),
			e(M, [2, 44]),
			{
				44: m,
				47: 157,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			{
				102: [1, 158],
				103: 159,
				105: [1, 160]
			},
			{
				44: m,
				47: 161,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			{
				44: m,
				47: 162,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			e(F, [2, 107], {
				10: [1, 163],
				96: [1, 164]
			}),
			{ 80: [1, 165] },
			e(F, [2, 115], {
				120: 167,
				10: [1, 166],
				14: ue,
				44: de,
				60: fe,
				89: pe,
				105: me,
				106: he,
				109: ge,
				111: _e,
				114: ve,
				115: ye,
				116: be
			}),
			e(F, [2, 117], { 10: [1, 168] }),
			e(I, [2, 183]),
			e(I, [2, 170]),
			e(I, [2, 171]),
			e(I, [2, 172]),
			e(I, [2, 173]),
			e(I, [2, 174]),
			e(I, [2, 175]),
			e(I, [2, 176]),
			e(I, [2, 177]),
			e(I, [2, 178]),
			e(I, [2, 179]),
			e(I, [2, 180]),
			{
				44: m,
				47: 169,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			{
				30: 170,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 178,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 180,
				50: [1, 179],
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 181,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 182,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 183,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{ 109: [1, 184] },
			{
				30: 185,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 186,
				65: [1, 187],
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 188,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 189,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				30: 190,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			e(P, [2, 182]),
			e(a, [2, 20]),
			e(xe, [2, 25]),
			e(ce, [2, 46], {
				39: 191,
				18: 192,
				10: D,
				40: le
			}),
			e(Se, [2, 73], { 10: [1, 193] }),
			{ 10: [1, 194] },
			{
				30: 195,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				77: [1, 196],
				79: 197,
				116: Te,
				119: Ee
			},
			e(Qe, [2, 79]),
			e(Qe, [2, 81]),
			e(Qe, [2, 82]),
			e(Qe, [2, 168]),
			e(Qe, [2, 169]),
			{
				76: 198,
				79: 120,
				80: Ce,
				81: we,
				116: Te,
				119: Ee
			},
			e(De, [2, 84]),
			{
				8: k,
				9: A,
				10: Oe,
				11: j,
				12: ke,
				14: Ae,
				21: 200,
				27: je,
				29: [1, 199],
				32: Me,
				44: Ne,
				60: Pe,
				75: Fe,
				83: 140,
				84: Ie,
				85: Le,
				86: Re,
				87: ze,
				88: Be,
				89: Ve,
				90: He,
				91: 201,
				105: Ue,
				109: We,
				111: Ge,
				114: Ke,
				115: qe,
				116: Je
			},
			e(U, [2, 101]),
			e(U, [2, 103]),
			e(U, [2, 104]),
			e(U, [2, 157]),
			e(U, [2, 158]),
			e(U, [2, 159]),
			e(U, [2, 160]),
			e(U, [2, 161]),
			e(U, [2, 162]),
			e(U, [2, 163]),
			e(U, [2, 164]),
			e(U, [2, 165]),
			e(U, [2, 166]),
			e(U, [2, 167]),
			e(U, [2, 90]),
			e(U, [2, 91]),
			e(U, [2, 92]),
			e(U, [2, 93]),
			e(U, [2, 94]),
			e(U, [2, 95]),
			e(U, [2, 96]),
			e(U, [2, 97]),
			e(U, [2, 98]),
			e(U, [2, 99]),
			e(U, [2, 100]),
			{
				6: 11,
				7: 12,
				8: s,
				9: c,
				10: l,
				11: u,
				20: 17,
				22: 18,
				23: 19,
				24: 20,
				25: 21,
				26: 22,
				27: ee,
				32: [1, 202],
				33: 24,
				34: d,
				36: f,
				38: p,
				42: 28,
				43: 38,
				44: m,
				45: 39,
				47: 40,
				60: h,
				84: te,
				85: g,
				86: ne,
				87: re,
				88: ie,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T,
				121: E,
				122: ae,
				123: oe,
				124: se
			},
			{
				10: D,
				18: 203
			},
			{ 44: [1, 204] },
			e(M, [2, 43]),
			{
				10: [1, 205],
				44: m,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 112,
				114: C,
				115: w,
				116: T
			},
			{ 10: [1, 206] },
			{
				10: [1, 207],
				106: [1, 208]
			},
			e($e, [2, 128]),
			{
				10: [1, 209],
				44: m,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 112,
				114: C,
				115: w,
				116: T
			},
			{
				10: [1, 210],
				44: m,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 112,
				114: C,
				115: w,
				116: T
			},
			{ 80: [1, 211] },
			e(F, [2, 109], { 10: [1, 212] }),
			e(F, [2, 111], { 10: [1, 213] }),
			{ 80: [1, 214] },
			e(I, [2, 184]),
			{
				80: [1, 215],
				98: [1, 216]
			},
			e(M, [2, 55], {
				113: 112,
				44: m,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				114: C,
				115: w,
				116: T
			}),
			{
				31: [1, 217],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			e(W, [2, 86]),
			e(W, [2, 88]),
			e(W, [2, 89]),
			e(W, [2, 153]),
			e(W, [2, 154]),
			e(W, [2, 155]),
			e(W, [2, 156]),
			{
				49: [1, 219],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				30: 220,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				51: [1, 221],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				53: [1, 222],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				55: [1, 223],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				57: [1, 224],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{ 60: [1, 225] },
			{
				64: [1, 226],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				66: [1, 227],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				30: 228,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			{
				31: [1, 229],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				67: L,
				69: [1, 230],
				71: [1, 231],
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				67: L,
				69: [1, 233],
				71: [1, 232],
				82: 218,
				116: B,
				117: V,
				118: H
			},
			e(ce, [2, 45], {
				18: 155,
				10: D,
				40: Ze
			}),
			e(ce, [2, 47], { 44: Xe }),
			e(Se, [2, 75]),
			e(Se, [2, 74]),
			{
				62: [1, 234],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			e(Se, [2, 77]),
			e(Qe, [2, 80]),
			{
				77: [1, 235],
				79: 197,
				116: Te,
				119: Ee
			},
			{
				30: 236,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			e(Ye, o, { 5: 237 }),
			e(U, [2, 102]),
			e(O, [2, 35]),
			{
				43: 238,
				44: m,
				45: 39,
				47: 40,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			{
				10: D,
				18: 239
			},
			{
				10: G,
				60: K,
				84: q,
				92: 240,
				105: J,
				107: 241,
				108: 242,
				109: Y,
				110: X,
				111: Z,
				112: Q
			},
			{
				10: G,
				60: K,
				84: q,
				92: 251,
				104: [1, 252],
				105: J,
				107: 241,
				108: 242,
				109: Y,
				110: X,
				111: Z,
				112: Q
			},
			{
				10: G,
				60: K,
				84: q,
				92: 253,
				104: [1, 254],
				105: J,
				107: 241,
				108: 242,
				109: Y,
				110: X,
				111: Z,
				112: Q
			},
			{ 105: [1, 255] },
			{
				10: G,
				60: K,
				84: q,
				92: 256,
				105: J,
				107: 241,
				108: 242,
				109: Y,
				110: X,
				111: Z,
				112: Q
			},
			{
				44: m,
				47: 257,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			e(F, [2, 108]),
			{ 80: [1, 258] },
			{
				80: [1, 259],
				98: [1, 260]
			},
			e(F, [2, 116]),
			e(F, [2, 118], { 10: [1, 261] }),
			e(F, [2, 119]),
			e(N, [2, 56]),
			e(W, [2, 87]),
			e(N, [2, 57]),
			{
				51: [1, 262],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			e(N, [2, 64]),
			e(N, [2, 59]),
			e(N, [2, 60]),
			e(N, [2, 61]),
			{ 109: [1, 263] },
			e(N, [2, 63]),
			e(N, [2, 65]),
			{
				66: [1, 264],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			e(N, [2, 67]),
			e(N, [2, 68]),
			e(N, [2, 70]),
			e(N, [2, 69]),
			e(N, [2, 71]),
			e([
				10,
				44,
				60,
				89,
				102,
				105,
				106,
				109,
				111,
				114,
				115,
				116
			], [2, 85]),
			e(Se, [2, 78]),
			{
				31: [1, 265],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				6: 11,
				7: 12,
				8: s,
				9: c,
				10: l,
				11: u,
				20: 17,
				22: 18,
				23: 19,
				24: 20,
				25: 21,
				26: 22,
				27: ee,
				32: [1, 266],
				33: 24,
				34: d,
				36: f,
				38: p,
				42: 28,
				43: 38,
				44: m,
				45: 39,
				47: 40,
				60: h,
				84: te,
				85: g,
				86: ne,
				87: re,
				88: ie,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T,
				121: E,
				122: ae,
				123: oe,
				124: se
			},
			e(M, [2, 53]),
			{
				43: 267,
				44: m,
				45: 39,
				47: 40,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T
			},
			e(F, [2, 121], { 106: et }),
			e(tt, [2, 130], {
				108: 269,
				10: G,
				60: K,
				84: q,
				105: J,
				109: Y,
				110: X,
				111: Z,
				112: Q
			}),
			e($, [2, 132]),
			e($, [2, 134]),
			e($, [2, 135]),
			e($, [2, 136]),
			e($, [2, 137]),
			e($, [2, 138]),
			e($, [2, 139]),
			e($, [2, 140]),
			e($, [2, 141]),
			e(F, [2, 122], { 106: et }),
			{ 10: [1, 270] },
			e(F, [2, 123], { 106: et }),
			{ 10: [1, 271] },
			e($e, [2, 129]),
			e(F, [2, 105], { 106: et }),
			e(F, [2, 106], {
				113: 112,
				44: m,
				60: h,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				114: C,
				115: w,
				116: T
			}),
			e(F, [2, 110]),
			e(F, [2, 112], { 10: [1, 272] }),
			e(F, [2, 113]),
			{ 98: [1, 273] },
			{ 51: [1, 274] },
			{ 62: [1, 275] },
			{ 66: [1, 276] },
			{
				8: k,
				9: A,
				11: j,
				21: 277
			},
			e(O, [2, 34]),
			e(M, [2, 52]),
			{
				10: G,
				60: K,
				84: q,
				105: J,
				107: 278,
				108: 242,
				109: Y,
				110: X,
				111: Z,
				112: Q
			},
			e($, [2, 133]),
			{
				14: ue,
				44: de,
				60: fe,
				89: pe,
				101: 279,
				105: me,
				106: he,
				109: ge,
				111: _e,
				114: ve,
				115: ye,
				116: be,
				120: 87
			},
			{
				14: ue,
				44: de,
				60: fe,
				89: pe,
				101: 280,
				105: me,
				106: he,
				109: ge,
				111: _e,
				114: ve,
				115: ye,
				116: be,
				120: 87
			},
			{ 98: [1, 281] },
			e(F, [2, 120]),
			e(N, [2, 58]),
			{
				30: 282,
				67: L,
				80: R,
				81: z,
				82: 171,
				116: B,
				117: V,
				118: H
			},
			e(N, [2, 66]),
			e(Ye, o, { 5: 283 }),
			e(tt, [2, 131], {
				108: 269,
				10: G,
				60: K,
				84: q,
				105: J,
				109: Y,
				110: X,
				111: Z,
				112: Q
			}),
			e(F, [2, 126], {
				120: 167,
				10: [1, 284],
				14: ue,
				44: de,
				60: fe,
				89: pe,
				105: me,
				106: he,
				109: ge,
				111: _e,
				114: ve,
				115: ye,
				116: be
			}),
			e(F, [2, 127], {
				120: 167,
				10: [1, 285],
				14: ue,
				44: de,
				60: fe,
				89: pe,
				105: me,
				106: he,
				109: ge,
				111: _e,
				114: ve,
				115: ye,
				116: be
			}),
			e(F, [2, 114]),
			{
				31: [1, 286],
				67: L,
				82: 218,
				116: B,
				117: V,
				118: H
			},
			{
				6: 11,
				7: 12,
				8: s,
				9: c,
				10: l,
				11: u,
				20: 17,
				22: 18,
				23: 19,
				24: 20,
				25: 21,
				26: 22,
				27: ee,
				32: [1, 287],
				33: 24,
				34: d,
				36: f,
				38: p,
				42: 28,
				43: 38,
				44: m,
				45: 39,
				47: 40,
				60: h,
				84: te,
				85: g,
				86: ne,
				87: re,
				88: ie,
				89: _,
				102: v,
				105: y,
				106: b,
				109: x,
				111: S,
				113: 41,
				114: C,
				115: w,
				116: T,
				121: E,
				122: ae,
				123: oe,
				124: se
			},
			{
				10: G,
				60: K,
				84: q,
				92: 288,
				105: J,
				107: 241,
				108: 242,
				109: Y,
				110: X,
				111: Z,
				112: Q
			},
			{
				10: G,
				60: K,
				84: q,
				92: 289,
				105: J,
				107: 241,
				108: 242,
				109: Y,
				110: X,
				111: Z,
				112: Q
			},
			e(N, [2, 62]),
			e(O, [2, 33]),
			e(F, [2, 124], { 106: et }),
			e(F, [2, 125], { 106: et })
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ __name(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var t = this, n = [0], i = [], a = [null], o = [], s = this.table, c = "", l = 0, u = 0, ee = 0, d = 2, f = 1, p = o.slice.call(arguments, 1), m = Object.create(this.lexer), h = { yy: {} };
			for (var te in this.yy) Object.prototype.hasOwnProperty.call(this.yy, te) && (h.yy[te] = this.yy[te]);
			m.setInput(e, h.yy), h.yy.lexer = m, h.yy.parser = this, m.yylloc === void 0 && (m.yylloc = {});
			var g = m.yylloc;
			o.push(g);
			var ne = m.options && m.options.ranges;
			typeof h.yy.parseError == "function" ? this.parseError = h.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function re(e) {
				n.length -= 2 * e, a.length -= e, o.length -= e;
			}
			__name(re, "popStack");
			function ie() {
				var e = i.pop() || m.lex() || f;
				return typeof e != "number" && (e instanceof Array && (i = e, e = i.pop()), e = t.symbols_[e] || e), e;
			}
			__name(ie, "lex");
			for (var _, v, y, b, x, S = {}, C, w, T, E;;) {
				if (y = n[n.length - 1], this.defaultActions[y] ? b = this.defaultActions[y] : (_ ??= ie(), b = s[y] && s[y][_]), b === void 0 || !b.length || !b[0]) {
					var ae = "";
					for (C in E = [], s[y]) this.terminals_[C] && C > d && E.push("'" + this.terminals_[C] + "'");
					ae = m.showPosition ? "Parse error on line " + (l + 1) + ":\n" + m.showPosition() + "\nExpecting " + E.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (_ == f ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(ae, {
						text: m.match,
						token: this.terminals_[_] || _,
						line: m.yylineno,
						loc: g,
						expected: E
					});
				}
				if (b[0] instanceof Array && b.length > 1) throw Error("Parse Error: multiple actions possible at state: " + y + ", token: " + _);
				switch (b[0]) {
					case 1:
						n.push(_), a.push(m.yytext), o.push(m.yylloc), n.push(b[1]), _ = null, v ? (_ = v, v = null) : (u = m.yyleng, c = m.yytext, l = m.yylineno, g = m.yylloc, ee > 0 && ee--);
						break;
					case 2:
						if (w = this.productions_[b[1]][1], S.$ = a[a.length - w], S._$ = {
							first_line: o[o.length - (w || 1)].first_line,
							last_line: o[o.length - 1].last_line,
							first_column: o[o.length - (w || 1)].first_column,
							last_column: o[o.length - 1].last_column
						}, ne && (S._$.range = [o[o.length - (w || 1)].range[0], o[o.length - 1].range[1]]), x = this.performAction.apply(S, [
							c,
							u,
							l,
							h.yy,
							b[1],
							a,
							o
						].concat(p)), x !== void 0) return x;
						w && (n = n.slice(0, -1 * w * 2), a = a.slice(0, -1 * w), o = o.slice(0, -1 * w)), n.push(this.productions_[b[1]][0]), a.push(S.$), o.push(S._$), T = s[n[n.length - 2]][n[n.length - 1]], n.push(T);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	nt.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, t) {
				if (this.yy.parser) this.yy.parser.parseError(e, t);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, t) {
				return this.yy = t || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var e = this._input[0];
				return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(e) {
				var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t), this.offset -= t;
				var r = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
				var i = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
				}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ __name(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ __name(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ __name(function(e) {
				this.unput(this.match.slice(e));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var e = this.matched.substr(0, this.matched.length - this.match.length);
				return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var e = this.match;
				return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var e = this.pastInput(), t = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + t + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, t) {
				var n, r, i;
				if (this.options.backtrack_lexer && (i = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), r = e[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], n = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
				if (this._backtrack) {
					for (var a in i) this[a] = i[a];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, t, n, r;
				this._more || (this.yytext = "", this.match = "");
				for (var i = this._currentRules(), a = 0; a < i.length; a++) if (n = this._input.match(this.rules[i[a]]), n && (!t || n[0].length > t[0].length)) {
					if (t = n, r = a, this.options.backtrack_lexer) {
						if (e = this.test_match(n, i[a]), e !== !1) return e;
						if (this._backtrack) {
							t = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return t ? (e = this.test_match(t, i[r]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function(e) {
				this.conditionStack.push(e);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function(e) {
				return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function(e) {
				this.begin(e);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: {},
			performAction: /* @__PURE__ */ __name(function(e, t, n, r) {
				switch (n) {
					case 0: return this.begin("acc_title"), 34;
					case 1: return this.popState(), "acc_title_value";
					case 2: return this.begin("acc_descr"), 36;
					case 3: return this.popState(), "acc_descr_value";
					case 4:
						this.begin("acc_descr_multiline");
						break;
					case 5:
						this.popState();
						break;
					case 6: return "acc_descr_multiline_value";
					case 7: return this.pushState("shapeData"), t.yytext = "", 40;
					case 8: return this.pushState("shapeDataStr"), 40;
					case 9: return this.popState(), 40;
					case 10: return t.yytext = t.yytext.replace(/\n\s*/g, "<br/>"), 40;
					case 11: return 40;
					case 12:
						this.popState();
						break;
					case 13:
						this.begin("callbackname");
						break;
					case 14:
						this.popState();
						break;
					case 15:
						this.popState(), this.begin("callbackargs");
						break;
					case 16: return 95;
					case 17:
						this.popState();
						break;
					case 18: return 96;
					case 19: return "MD_STR";
					case 20:
						this.popState();
						break;
					case 21:
						this.begin("md_string");
						break;
					case 22: return "STR";
					case 23:
						this.popState();
						break;
					case 24:
						this.pushState("string");
						break;
					case 25: return 84;
					case 26: return 102;
					case 27: return 85;
					case 28: return 104;
					case 29: return 86;
					case 30: return 87;
					case 31: return 97;
					case 32:
						this.begin("click");
						break;
					case 33:
						this.popState();
						break;
					case 34: return 88;
					case 35: return e.lex.firstGraph() && this.begin("dir"), 12;
					case 36: return e.lex.firstGraph() && this.begin("dir"), 12;
					case 37: return e.lex.firstGraph() && this.begin("dir"), 12;
					case 38: return 27;
					case 39: return 32;
					case 40: return 98;
					case 41: return 98;
					case 42: return 98;
					case 43: return 98;
					case 44: return this.popState(), 13;
					case 45: return this.popState(), 14;
					case 46: return this.popState(), 14;
					case 47: return this.popState(), 14;
					case 48: return this.popState(), 14;
					case 49: return this.popState(), 14;
					case 50: return this.popState(), 14;
					case 51: return this.popState(), 14;
					case 52: return this.popState(), 14;
					case 53: return this.popState(), 14;
					case 54: return this.popState(), 14;
					case 55: return 121;
					case 56: return 122;
					case 57: return 123;
					case 58: return 124;
					case 59: return 78;
					case 60: return 105;
					case 61: return 111;
					case 62: return 46;
					case 63: return 60;
					case 64: return 44;
					case 65: return 8;
					case 66: return 106;
					case 67: return 115;
					case 68: return this.popState(), 77;
					case 69: return this.pushState("edgeText"), 75;
					case 70: return 119;
					case 71: return this.popState(), 77;
					case 72: return this.pushState("thickEdgeText"), 75;
					case 73: return 119;
					case 74: return this.popState(), 77;
					case 75: return this.pushState("dottedEdgeText"), 75;
					case 76: return 119;
					case 77: return 77;
					case 78: return this.popState(), 53;
					case 79: return "TEXT";
					case 80: return this.pushState("ellipseText"), 52;
					case 81: return this.popState(), 55;
					case 82: return this.pushState("text"), 54;
					case 83: return this.popState(), 57;
					case 84: return this.pushState("text"), 56;
					case 85: return 58;
					case 86: return this.pushState("text"), 67;
					case 87: return this.popState(), 64;
					case 88: return this.pushState("text"), 63;
					case 89: return this.popState(), 49;
					case 90: return this.pushState("text"), 48;
					case 91: return this.popState(), 69;
					case 92: return this.popState(), 71;
					case 93: return 117;
					case 94: return this.pushState("trapText"), 68;
					case 95: return this.pushState("trapText"), 70;
					case 96: return 118;
					case 97: return 67;
					case 98: return 90;
					case 99: return "SEP";
					case 100: return 89;
					case 101: return 115;
					case 102: return 111;
					case 103: return 44;
					case 104: return 109;
					case 105: return 114;
					case 106: return 116;
					case 107: return this.popState(), 62;
					case 108: return this.pushState("text"), 62;
					case 109: return this.popState(), 51;
					case 110: return this.pushState("text"), 50;
					case 111: return this.popState(), 31;
					case 112: return this.pushState("text"), 29;
					case 113: return this.popState(), 66;
					case 114: return this.pushState("text"), 65;
					case 115: return "TEXT";
					case 116: return "QUOTE";
					case 117: return 9;
					case 118: return 10;
					case 119: return 11;
				}
			}, "anonymous"),
			rules: [
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:@\{)/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^\"]+)/,
				/^(?:[^}^"]+)/,
				/^(?:\})/,
				/^(?:call[\s]+)/,
				/^(?:\([\s]*\))/,
				/^(?:\()/,
				/^(?:[^(]*)/,
				/^(?:\))/,
				/^(?:[^)]*)/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["][`])/,
				/^(?:[^"]+)/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:style\b)/,
				/^(?:default\b)/,
				/^(?:linkStyle\b)/,
				/^(?:interpolate\b)/,
				/^(?:classDef\b)/,
				/^(?:class\b)/,
				/^(?:href[\s])/,
				/^(?:click[\s]+)/,
				/^(?:[\s\n])/,
				/^(?:[^\s\n]*)/,
				/^(?:flowchart-elk\b)/,
				/^(?:graph\b)/,
				/^(?:flowchart\b)/,
				/^(?:subgraph\b)/,
				/^(?:end\b\s*)/,
				/^(?:_self\b)/,
				/^(?:_blank\b)/,
				/^(?:_parent\b)/,
				/^(?:_top\b)/,
				/^(?:(\r?\n)*\s*\n)/,
				/^(?:\s*LR\b)/,
				/^(?:\s*RL\b)/,
				/^(?:\s*TB\b)/,
				/^(?:\s*BT\b)/,
				/^(?:\s*TD\b)/,
				/^(?:\s*BR\b)/,
				/^(?:\s*<)/,
				/^(?:\s*>)/,
				/^(?:\s*\^)/,
				/^(?:\s*v\b)/,
				/^(?:.*direction\s+TB[^\n]*)/,
				/^(?:.*direction\s+BT[^\n]*)/,
				/^(?:.*direction\s+RL[^\n]*)/,
				/^(?:.*direction\s+LR[^\n]*)/,
				/^(?:[^\s\"]+@(?=[^\{\"]))/,
				/^(?:[0-9]+)/,
				/^(?:#)/,
				/^(?::::)/,
				/^(?::)/,
				/^(?:&)/,
				/^(?:;)/,
				/^(?:,)/,
				/^(?:\*)/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?--\s*)/,
				/^(?:[^-]|-(?!-)+)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?==\s*)/,
				/^(?:[^=]|=(?!))/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?:\s*[xo<]?-\.\s*)/,
				/^(?:[^\.]|\.(?!))/,
				/^(?:\s*~~[\~]+\s*)/,
				/^(?:[-/\)][\)])/,
				/^(?:[^\(\)\[\]\{\}]|!\)+)/,
				/^(?:\(-)/,
				/^(?:\]\))/,
				/^(?:\(\[)/,
				/^(?:\]\])/,
				/^(?:\[\[)/,
				/^(?:\[\|)/,
				/^(?:>)/,
				/^(?:\)\])/,
				/^(?:\[\()/,
				/^(?:\)\)\))/,
				/^(?:\(\(\()/,
				/^(?:[\\(?=\])][\]])/,
				/^(?:\/(?=\])\])/,
				/^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/,
				/^(?:\[\/)/,
				/^(?:\[\\)/,
				/^(?:<)/,
				/^(?:>)/,
				/^(?:\^)/,
				/^(?:\\\|)/,
				/^(?:v\b)/,
				/^(?:\*)/,
				/^(?:#)/,
				/^(?:&)/,
				/^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/,
				/^(?:-)/,
				/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,
				/^(?:\|)/,
				/^(?:\|)/,
				/^(?:\))/,
				/^(?:\()/,
				/^(?:\])/,
				/^(?:\[)/,
				/^(?:(\}))/,
				/^(?:\{)/,
				/^(?:[^\[\]\(\)\{\}\|\"]+)/,
				/^(?:")/,
				/^(?:(\r?\n)+)/,
				/^(?:\s)/,
				/^(?:$)/
			],
			conditions: {
				shapeDataEndBracket: {
					rules: [
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				shapeDataStr: {
					rules: [
						9,
						10,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				shapeData: {
					rules: [
						8,
						11,
						12,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				callbackargs: {
					rules: [
						17,
						18,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				callbackname: {
					rules: [
						14,
						15,
						16,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				href: {
					rules: [
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				click: {
					rules: [
						21,
						24,
						33,
						34,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				dottedEdgeText: {
					rules: [
						21,
						24,
						74,
						76,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				thickEdgeText: {
					rules: [
						21,
						24,
						71,
						73,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				edgeText: {
					rules: [
						21,
						24,
						68,
						70,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				trapText: {
					rules: [
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						91,
						92,
						93,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				ellipseText: {
					rules: [
						21,
						24,
						77,
						78,
						79,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				text: {
					rules: [
						21,
						24,
						77,
						80,
						81,
						82,
						83,
						84,
						87,
						88,
						89,
						90,
						94,
						95,
						107,
						108,
						109,
						110,
						111,
						112,
						113,
						114,
						115
					],
					inclusive: !1
				},
				vertex: {
					rules: [
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				dir: {
					rules: [
						21,
						24,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52,
						53,
						54,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [
						5,
						6,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				acc_descr: {
					rules: [
						3,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				acc_title: {
					rules: [
						1,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				md_string: {
					rules: [
						19,
						20,
						21,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				string: {
					rules: [
						21,
						22,
						23,
						24,
						77,
						80,
						82,
						84,
						88,
						90,
						94,
						95,
						108,
						110,
						112,
						114
					],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						2,
						4,
						7,
						13,
						21,
						24,
						25,
						26,
						27,
						28,
						29,
						30,
						31,
						32,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						55,
						56,
						57,
						58,
						59,
						60,
						61,
						62,
						63,
						64,
						65,
						66,
						67,
						68,
						69,
						71,
						72,
						74,
						75,
						77,
						80,
						82,
						84,
						85,
						86,
						88,
						90,
						94,
						95,
						96,
						97,
						98,
						99,
						100,
						101,
						102,
						103,
						104,
						105,
						106,
						108,
						110,
						112,
						114,
						116,
						117,
						118,
						119
					],
					inclusive: !0
				}
			}
		};
	})();
	function rt() {
		this.yy = {};
	}
	return __name(rt, "Parser"), rt.prototype = nt, nt.Parser = rt, new rt();
})();
parser.parser = parser;
var flow_default = parser, newParser = Object.assign({}, flow_default);
newParser.parse = (e) => {
	let t = e.replace(/}\s*\n/g, "}\n");
	return flow_default.parse(t);
};
var flowParser_default = newParser, fade = /* @__PURE__ */ __name((e, t) => {
	let n = channel_default;
	return rgba_default(n(e, "r"), n(e, "g"), n(e, "b"), t);
}, "fade"), diagram = {
	parser: flowParser_default,
	get db() {
		return new FlowDB();
	},
	renderer: flowRenderer_v3_unified_default,
	styles: /* @__PURE__ */ __name((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .rough-node .label text , .node .label text, .image-shape .label, .icon-shape .label {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .rough-node .label,.node .label, .image-shape .label, .icon-shape .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }


  .root .anchor path {
    fill: ${e.lineColor} !important;
    stroke-width: 0;
    stroke: ${e.lineColor};
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    p {
      background-color: ${e.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(e.edgeLabelBackground, .5)};
    // background-color:
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${e.edgeLabelBackground};
    p {
      background-color: ${e.edgeLabelBackground};
      padding: 2px;
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }
  ${getIconStyles()}
`, "getStyles"),
	init: /* @__PURE__ */ __name((e) => {
		e.flowchart ||= {}, e.layout && setConfig2({ layout: e.layout }), e.flowchart.arrowMarkerAbsolute = e.arrowMarkerAbsolute, setConfig2({ flowchart: { arrowMarkerAbsolute: e.arrowMarkerAbsolute } });
	}, "init")
};
export { diagram };

//# sourceMappingURL=flowDiagram-NV44I4VS-C-HA201B.js.map