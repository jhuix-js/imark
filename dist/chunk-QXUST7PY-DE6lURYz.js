import { g as utils_default, v as bumpX, y as bumpY } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { b as getConfig2, h as evaluate } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { _ as basis_default, a as monotoneX, i as natural_default, n as stepBefore, o as monotoneY, p as cardinal_default, r as step_default, t as stepAfter, u as catmullRom_default, v as linear_default } from "./step-DmjVsfVE.js";
import { t as line_default } from "./line-Cl_B2mnJ.js";
import { n as createText } from "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import { n as markerOffsets, r as markerOffsets2, t as getLineFunctionsWithOffset } from "./chunk-HN2XXSSU-p3ji0EC3.js";
import { t as getSubGraphTitleMargins } from "./chunk-CVBHYZKI-Cx9WXSzs.js";
import { i as styles2String, n as isLabelStyle } from "./chunk-ATLVNIR6-DULmhiFu.js";
import { d as at, r as createLabel_default } from "./chunk-JZLCHNYA-Cqf7Lizt.js";
var addEdgeMarkers = /* @__PURE__ */ __name((t, o, s, c, l, u) => {
	o.arrowTypeStart && addEdgeMarker(t, "start", o.arrowTypeStart, s, c, l, u), o.arrowTypeEnd && addEdgeMarker(t, "end", o.arrowTypeEnd, s, c, l, u);
}, "addEdgeMarkers"), arrowTypesMap = {
	arrow_cross: {
		type: "cross",
		fill: !1
	},
	arrow_point: {
		type: "point",
		fill: !0
	},
	arrow_barb: {
		type: "barb",
		fill: !0
	},
	arrow_circle: {
		type: "circle",
		fill: !1
	},
	aggregation: {
		type: "aggregation",
		fill: !1
	},
	extension: {
		type: "extension",
		fill: !1
	},
	composition: {
		type: "composition",
		fill: !0
	},
	dependency: {
		type: "dependency",
		fill: !0
	},
	lollipop: {
		type: "lollipop",
		fill: !1
	},
	only_one: {
		type: "onlyOne",
		fill: !1
	},
	zero_or_one: {
		type: "zeroOrOne",
		fill: !1
	},
	one_or_more: {
		type: "oneOrMore",
		fill: !1
	},
	zero_or_more: {
		type: "zeroOrMore",
		fill: !1
	},
	requirement_arrow: {
		type: "requirement_arrow",
		fill: !1
	},
	requirement_contains: {
		type: "requirement_contains",
		fill: !1
	}
}, addEdgeMarker = /* @__PURE__ */ __name((t, o, s, l, u, d, f) => {
	let p = arrowTypesMap[s];
	if (!p) {
		log.warn(`Unknown arrow type: ${s}`);
		return;
	}
	let m = `${u}_${d}-${p.type}${o === "start" ? "Start" : "End"}`;
	if (f && f.trim() !== "") {
		let s = `${m}_${f.replace(/[^\dA-Za-z]/g, "_")}`;
		if (!document.getElementById(s)) {
			let t = document.getElementById(m);
			if (t) {
				let o = t.cloneNode(!0);
				o.id = s, o.querySelectorAll("path, circle, line").forEach((t) => {
					t.setAttribute("stroke", f), p.fill && t.setAttribute("fill", f);
				}), t.parentNode?.appendChild(o);
			}
		}
		t.attr(`marker-${o}`, `url(${l}#${s})`);
	} else t.attr(`marker-${o}`, `url(${l}#${m})`);
}, "addEdgeMarker"), edgeLabels = /* @__PURE__ */ new Map(), terminalLabels = /* @__PURE__ */ new Map(), clear = /* @__PURE__ */ __name(() => {
	edgeLabels.clear(), terminalLabels.clear();
}, "clear"), getLabelStyles = /* @__PURE__ */ __name((t) => t ? t.reduce((t, o) => t + ";" + o, "") : "", "getLabelStyles"), insertEdgeLabel = /* @__PURE__ */ __name(async (t, o) => {
	let s = evaluate(getConfig2().flowchart.htmlLabels), { labelStyles: l } = styles2String(o);
	o.labelStyle = l;
	let p = await createText(t, o.label, {
		style: o.labelStyle,
		useHtmlLabels: s,
		addSvgBackground: !0,
		isNode: !1
	});
	log.info("abc82", o, o.labelType);
	let m = t.insert("g").attr("class", "edgeLabel"), h = m.insert("g").attr("class", "label").attr("data-id", o.id);
	h.node().appendChild(p);
	let g = p.getBBox();
	if (s) {
		let t = p.children[0], o = select_default(p);
		g = t.getBoundingClientRect(), o.attr("width", g.width), o.attr("height", g.height);
	}
	h.attr("transform", "translate(" + -g.width / 2 + ", " + -g.height / 2 + ")"), edgeLabels.set(o.id, m), o.width = g.width, o.height = g.height;
	let _;
	if (o.startLabelLeft) {
		let s = await createLabel_default(o.startLabelLeft, getLabelStyles(o.labelStyle)), c = t.insert("g").attr("class", "edgeTerminals"), l = c.insert("g").attr("class", "inner");
		_ = l.node().appendChild(s);
		let u = s.getBBox();
		l.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).startLeft = c, setTerminalWidth(_, o.startLabelLeft);
	}
	if (o.startLabelRight) {
		let s = await createLabel_default(o.startLabelRight, getLabelStyles(o.labelStyle)), c = t.insert("g").attr("class", "edgeTerminals"), l = c.insert("g").attr("class", "inner");
		_ = c.node().appendChild(s), l.node().appendChild(s);
		let u = s.getBBox();
		l.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).startRight = c, setTerminalWidth(_, o.startLabelRight);
	}
	if (o.endLabelLeft) {
		let s = await createLabel_default(o.endLabelLeft, getLabelStyles(o.labelStyle)), c = t.insert("g").attr("class", "edgeTerminals"), l = c.insert("g").attr("class", "inner");
		_ = l.node().appendChild(s);
		let u = s.getBBox();
		l.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(s), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).endLeft = c, setTerminalWidth(_, o.endLabelLeft);
	}
	if (o.endLabelRight) {
		let s = await createLabel_default(o.endLabelRight, getLabelStyles(o.labelStyle)), c = t.insert("g").attr("class", "edgeTerminals"), l = c.insert("g").attr("class", "inner");
		_ = l.node().appendChild(s);
		let u = s.getBBox();
		l.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(s), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).endRight = c, setTerminalWidth(_, o.endLabelRight);
	}
	return p;
}, "insertEdgeLabel");
function setTerminalWidth(t, o) {
	getConfig2().flowchart.htmlLabels && t && (t.style.width = o.length * 9 + "px", t.style.height = "12px");
}
__name(setTerminalWidth, "setTerminalWidth");
var positionEdgeLabel = /* @__PURE__ */ __name((o, s) => {
	log.debug("Moving label abc88 ", o.id, o.label, edgeLabels.get(o.id), s);
	let l = s.updatedPath ? s.updatedPath : s.originalPath, { subGraphTitleTotalMargin: u } = getSubGraphTitleMargins(getConfig2());
	if (o.label) {
		let d = edgeLabels.get(o.id), f = o.x, p = o.y;
		if (l) {
			let u = utils_default.calcLabelPosition(l);
			log.debug("Moving label " + o.label + " from (", f, ",", p, ") to (", u.x, ",", u.y, ") abc88"), s.updatedPath && (f = u.x, p = u.y);
		}
		d.attr("transform", `translate(${f}, ${p + u / 2})`);
	}
	if (o.startLabelLeft) {
		let s = terminalLabels.get(o.id).startLeft, c = o.x, u = o.y;
		if (l) {
			let s = utils_default.calcTerminalLabelPosition(o.arrowTypeStart ? 10 : 0, "start_left", l);
			c = s.x, u = s.y;
		}
		s.attr("transform", `translate(${c}, ${u})`);
	}
	if (o.startLabelRight) {
		let s = terminalLabels.get(o.id).startRight, c = o.x, u = o.y;
		if (l) {
			let s = utils_default.calcTerminalLabelPosition(o.arrowTypeStart ? 10 : 0, "start_right", l);
			c = s.x, u = s.y;
		}
		s.attr("transform", `translate(${c}, ${u})`);
	}
	if (o.endLabelLeft) {
		let s = terminalLabels.get(o.id).endLeft, c = o.x, u = o.y;
		if (l) {
			let s = utils_default.calcTerminalLabelPosition(o.arrowTypeEnd ? 10 : 0, "end_left", l);
			c = s.x, u = s.y;
		}
		s.attr("transform", `translate(${c}, ${u})`);
	}
	if (o.endLabelRight) {
		let s = terminalLabels.get(o.id).endRight, c = o.x, u = o.y;
		if (l) {
			let s = utils_default.calcTerminalLabelPosition(o.arrowTypeEnd ? 10 : 0, "end_right", l);
			c = s.x, u = s.y;
		}
		s.attr("transform", `translate(${c}, ${u})`);
	}
}, "positionEdgeLabel"), outsideNode = /* @__PURE__ */ __name((t, o) => {
	let s = t.x, c = t.y, l = Math.abs(o.x - s), u = Math.abs(o.y - c), d = t.width / 2, f = t.height / 2;
	return l >= d || u >= f;
}, "outsideNode"), intersection = /* @__PURE__ */ __name((t, o, s) => {
	log.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(o)}
  insidePoint : ${JSON.stringify(s)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);
	let l = t.x, u = t.y, d = Math.abs(l - s.x), f = t.width / 2, p = s.x < o.x ? f - d : f + d, m = t.height / 2, h = Math.abs(o.y - s.y), g = Math.abs(o.x - s.x);
	if (Math.abs(u - o.y) * f > Math.abs(l - o.x) * m) {
		let t = s.y < o.y ? o.y - m - u : u - m - o.y;
		p = g * t / h;
		let l = {
			x: s.x < o.x ? s.x + p : s.x - g + p,
			y: s.y < o.y ? s.y + h - t : s.y - h + t
		};
		return p === 0 && (l.x = o.x, l.y = o.y), g === 0 && (l.x = o.x), h === 0 && (l.y = o.y), log.debug(`abc89 top/bottom calc, Q ${h}, q ${t}, R ${g}, r ${p}`, l), l;
	} else {
		p = s.x < o.x ? o.x - f - l : l - f - o.x;
		let t = h * p / g, u = s.x < o.x ? s.x + g - p : s.x - g + p, d = s.y < o.y ? s.y + t : s.y - t;
		return log.debug(`sides calc abc89, Q ${h}, q ${t}, R ${g}, r ${p}`, {
			_x: u,
			_y: d
		}), p === 0 && (u = o.x, d = o.y), g === 0 && (u = o.x), h === 0 && (d = o.y), {
			x: u,
			y: d
		};
	}
}, "intersection"), cutPathAtIntersect = /* @__PURE__ */ __name((t, o) => {
	log.warn("abc88 cutPathAtIntersect", t, o);
	let s = [], l = t[0], u = !1;
	return t.forEach((t) => {
		if (log.info("abc88 checking point", t, o), !outsideNode(o, t) && !u) {
			let d = intersection(o, l, t);
			log.debug("abc88 inside", t, l, d), log.debug("abc88 intersection", d, o);
			let f = !1;
			s.forEach((t) => {
				f ||= t.x === d.x && t.y === d.y;
			}), s.some((t) => t.x === d.x && t.y === d.y) ? log.warn("abc88 no intersect", d, s) : s.push(d), u = !0;
		} else log.warn("abc88 outside", t, l), l = t, u || s.push(t);
	}), log.debug("returning points", s), s;
}, "cutPathAtIntersect");
function extractCornerPoints(t) {
	let o = [], s = [];
	for (let c = 1; c < t.length - 1; c++) {
		let l = t[c - 1], u = t[c], d = t[c + 1];
		(l.x === u.x && u.y === d.y && Math.abs(u.x - d.x) > 5 && Math.abs(u.y - l.y) > 5 || l.y === u.y && u.x === d.x && Math.abs(u.x - l.x) > 5 && Math.abs(u.y - d.y) > 5) && (o.push(u), s.push(c));
	}
	return {
		cornerPoints: o,
		cornerPointPositions: s
	};
}
__name(extractCornerPoints, "extractCornerPoints");
var findAdjacentPoint = /* @__PURE__ */ __name(function(t, o, s) {
	let c = o.x - t.x, l = o.y - t.y, u = s / Math.sqrt(c * c + l * l);
	return {
		x: o.x - u * c,
		y: o.y - u * l
	};
}, "findAdjacentPoint"), fixCorners = /* @__PURE__ */ __name(function(t) {
	let { cornerPointPositions: o } = extractCornerPoints(t), s = [];
	for (let l = 0; l < t.length; l++) if (o.includes(l)) {
		let o = t[l - 1], u = t[l + 1], d = t[l], f = findAdjacentPoint(o, d, 5), p = findAdjacentPoint(u, d, 5), m = p.x - f.x, h = p.y - f.y;
		s.push(f);
		let g = Math.sqrt(2) * 2, _ = {
			x: d.x,
			y: d.y
		};
		Math.abs(u.x - o.x) > 10 && Math.abs(u.y - o.y) >= 10 ? (log.debug("Corner point fixing", Math.abs(u.x - o.x), Math.abs(u.y - o.y)), _ = d.x === f.x ? {
			x: m < 0 ? f.x - 5 + g : f.x + 5 - g,
			y: h < 0 ? f.y - g : f.y + g
		} : {
			x: m < 0 ? f.x - g : f.x + g,
			y: h < 0 ? f.y - 5 + g : f.y + 5 - g
		}) : log.debug("Corner point skipping fixing", Math.abs(u.x - o.x), Math.abs(u.y - o.y)), s.push(_, p);
	} else s.push(t[l]);
	return s;
}, "fixCorners"), generateDashArray = /* @__PURE__ */ __name((t, o, s) => {
	let c = t - o - s, l = Math.floor(c / 4);
	return `0 ${o} ${Array(l).fill("2 2").join(" ")} ${s}`;
}, "generateDashArray"), insertEdge = /* @__PURE__ */ __name(function(l, f, w, T, O, k, A, j = !1) {
	let { handDrawnSeed: M } = getConfig2(), N = f.points, P = !1, F = O;
	var I = k;
	let L = [];
	for (let t in f.cssCompiledStyles) isLabelStyle(t) || L.push(f.cssCompiledStyles[t]);
	log.debug("UIO intersect check", f.points, I.x, F.x), I.intersect && F.intersect && !j && (N = N.slice(1, f.points.length - 1), N.unshift(F.intersect(N[0])), log.debug("Last point UIO", f.start, "-->", f.end, N[N.length - 1], I, I.intersect(N[N.length - 1])), N.push(I.intersect(N[N.length - 1])));
	let R = btoa(JSON.stringify(N));
	f.toCluster && (log.info("to cluster abc88", w.get(f.toCluster)), N = cutPathAtIntersect(f.points, w.get(f.toCluster).node), P = !0), f.fromCluster && (log.debug("from cluster abc88", w.get(f.fromCluster), JSON.stringify(N, null, 2)), N = cutPathAtIntersect(N.reverse(), w.get(f.fromCluster).node).reverse(), P = !0);
	let z = N.filter((t) => !Number.isNaN(t.y));
	z = fixCorners(z);
	let B = basis_default;
	switch (B = linear_default, f.curve) {
		case "linear":
			B = linear_default;
			break;
		case "basis":
			B = basis_default;
			break;
		case "cardinal":
			B = cardinal_default;
			break;
		case "bumpX":
			B = bumpX;
			break;
		case "bumpY":
			B = bumpY;
			break;
		case "catmullRom":
			B = catmullRom_default;
			break;
		case "monotoneX":
			B = monotoneX;
			break;
		case "monotoneY":
			B = monotoneY;
			break;
		case "natural":
			B = natural_default;
			break;
		case "step":
			B = step_default;
			break;
		case "stepAfter":
			B = stepAfter;
			break;
		case "stepBefore":
			B = stepBefore;
			break;
		default: B = basis_default;
	}
	let { x: V, y: H } = getLineFunctionsWithOffset(f), U = line_default().x(V).y(H).curve(B), W;
	switch (f.thickness) {
		case "normal":
			W = "edge-thickness-normal";
			break;
		case "thick":
			W = "edge-thickness-thick";
			break;
		case "invisible":
			W = "edge-thickness-invisible";
			break;
		default: W = "edge-thickness-normal";
	}
	switch (f.pattern) {
		case "solid":
			W += " edge-pattern-solid";
			break;
		case "dotted":
			W += " edge-pattern-dotted";
			break;
		case "dashed":
			W += " edge-pattern-dashed";
			break;
		default: W += " edge-pattern-solid";
	}
	let G, K = f.curve === "rounded" ? generateRoundedPath(applyMarkerOffsetsToPoints(z, f), 5) : U(z), q = Array.isArray(f.style) ? f.style : [f.style], J = q.find((t) => t?.startsWith("stroke:")), Y = !1;
	if (f.look === "handDrawn") {
		let t = at.svg(l);
		Object.assign([], z);
		let o = t.path(K, {
			roughness: .3,
			seed: M
		});
		W += " transition", G = select_default(o).select("path").attr("id", f.id).attr("class", " " + W + (f.classes ? " " + f.classes : "")).attr("style", q ? q.reduce((t, o) => t + ";" + o, "") : "");
		let s = G.attr("d");
		G.attr("d", s), l.node().appendChild(G.node());
	} else {
		let t = L.join(";"), o = q ? q.reduce((t, o) => t + o + ";", "") : "", s = "";
		f.animate && (s = " edge-animation-fast"), f.animation && (s = " edge-animation-" + f.animation);
		let c = (t ? t + ";" + o + ";" : o) + ";" + (q ? q.reduce((t, o) => t + ";" + o, "") : "");
		G = l.append("path").attr("d", K).attr("id", f.id).attr("class", " " + W + (f.classes ? " " + f.classes : "") + (s ?? "")).attr("style", c), J = c.match(/stroke:([^;]+)/)?.[1], Y = f.animate === !0 || !!f.animation || t.includes("animation");
		let u = G.node(), d = typeof u.getTotalLength == "function" ? u.getTotalLength() : 0, p = markerOffsets2[f.arrowTypeStart] || 0, m = markerOffsets2[f.arrowTypeEnd] || 0;
		if (f.look === "neo" && !Y) {
			let t = `stroke-dasharray: ${f.pattern === "dotted" || f.pattern === "dashed" ? generateDashArray(d, p, m) : `0 ${p} ${d - p - m} ${m}`}; stroke-dashoffset: 0;`;
			G.attr("style", t + G.attr("style"));
		}
	}
	G.attr("data-edge", !0), G.attr("data-et", "edge"), G.attr("data-id", f.id), G.attr("data-points", R), f.showPoints && z.forEach((t) => {
		l.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", t.x).attr("cy", t.y);
	});
	let X = "";
	(getConfig2().flowchart.arrowMarkerAbsolute || getConfig2().state.arrowMarkerAbsolute) && (X = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, X = X.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), log.info("arrowTypeStart", f.arrowTypeStart), log.info("arrowTypeEnd", f.arrowTypeEnd), addEdgeMarkers(G, f, X, A, T, J);
	let Z = Math.floor(N.length / 2), Q = N[Z];
	utils_default.isLabelCoordinateInPath(Q, G.attr("d")) || (P = !0);
	let $ = {};
	return P && ($.updatedPath = N), $.originalPath = f.points, $;
}, "insertEdge");
function generateRoundedPath(t, o) {
	if (t.length < 2) return "";
	let s = "", c = t.length, l = 1e-5;
	for (let u = 0; u < c; u++) {
		let d = t[u], f = t[u - 1], p = t[u + 1];
		if (u === 0) s += `M${d.x},${d.y}`;
		else if (u === c - 1) s += `L${d.x},${d.y}`;
		else {
			let t = d.x - f.x, c = d.y - f.y, u = p.x - d.x, m = p.y - d.y, h = Math.hypot(t, c), g = Math.hypot(u, m);
			if (h < l || g < l) {
				s += `L${d.x},${d.y}`;
				continue;
			}
			let _ = t / h, v = c / h, y = u / g, b = m / g, x = _ * y + v * b, S = Math.max(-1, Math.min(1, x)), C = Math.acos(S);
			if (C < l || Math.abs(Math.PI - C) < l) {
				s += `L${d.x},${d.y}`;
				continue;
			}
			let w = Math.min(o / Math.sin(C / 2), h / 2, g / 2), T = d.x - _ * w, E = d.y - v * w, D = d.x + y * w, O = d.y + b * w;
			s += `L${T},${E}`, s += `Q${d.x},${d.y} ${D},${O}`;
		}
	}
	return s;
}
__name(generateRoundedPath, "generateRoundedPath");
function calculateDeltaAndAngle(t, o) {
	if (!t || !o) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	let s = o.x - t.x, c = o.y - t.y;
	return {
		angle: Math.atan2(c, s),
		deltaX: s,
		deltaY: c
	};
}
__name(calculateDeltaAndAngle, "calculateDeltaAndAngle");
function applyMarkerOffsetsToPoints(t, o) {
	let s = t.map((t) => ({ ...t }));
	if (t.length >= 2 && markerOffsets[o.arrowTypeStart]) {
		let c = markerOffsets[o.arrowTypeStart], l = t[0], u = t[1], { angle: d } = calculateDeltaAndAngle(l, u), f = c * Math.cos(d), p = c * Math.sin(d);
		s[0].x = l.x + f, s[0].y = l.y + p;
	}
	let c = t.length;
	if (c >= 2 && markerOffsets[o.arrowTypeEnd]) {
		let l = markerOffsets[o.arrowTypeEnd], u = t[c - 1], d = t[c - 2], { angle: f } = calculateDeltaAndAngle(d, u), p = l * Math.cos(f), m = l * Math.sin(f);
		s[c - 1].x = u.x - p, s[c - 1].y = u.y - m;
	}
	return s;
}
__name(applyMarkerOffsetsToPoints, "applyMarkerOffsetsToPoints");
var insertMarkers = /* @__PURE__ */ __name((t, o, s, c) => {
	o.forEach((o) => {
		markers[o](t, s, c);
	});
}, "insertMarkers"), markers = {
	extension: /* @__PURE__ */ __name((t, o, s) => {
		log.trace("Making markers for ", s), t.append("defs").append("marker").attr("id", s + "_" + o + "-extensionStart").attr("class", "marker extension " + o).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), t.append("defs").append("marker").attr("id", s + "_" + o + "-extensionEnd").attr("class", "marker extension " + o).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
	}, "extension"),
	composition: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-compositionStart").attr("class", "marker composition " + o).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", s + "_" + o + "-compositionEnd").attr("class", "marker composition " + o).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-aggregationStart").attr("class", "marker aggregation " + o).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", s + "_" + o + "-aggregationEnd").attr("class", "marker aggregation " + o).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-dependencyStart").attr("class", "marker dependency " + o).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", s + "_" + o + "-dependencyEnd").attr("class", "marker dependency " + o).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-lollipopStart").attr("class", "marker lollipop " + o).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), t.append("defs").append("marker").attr("id", s + "_" + o + "-lollipopEnd").attr("class", "marker lollipop " + o).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
	}, "lollipop"),
	point: /* @__PURE__ */ __name((t, o, s) => {
		t.append("marker").attr("id", s + "_" + o + "-pointEnd").attr("class", "marker " + o).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), t.append("marker").attr("id", s + "_" + o + "-pointStart").attr("class", "marker " + o).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ __name((t, o, s) => {
		t.append("marker").attr("id", s + "_" + o + "-circleEnd").attr("class", "marker " + o).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), t.append("marker").attr("id", s + "_" + o + "-circleStart").attr("class", "marker " + o).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ __name((t, o, s) => {
		t.append("marker").attr("id", s + "_" + o + "-crossEnd").attr("class", "marker cross " + o).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), t.append("marker").attr("id", s + "_" + o + "-crossStart").attr("class", "marker cross " + o).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb"),
	only_one: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-onlyOneStart").attr("class", "marker onlyOne " + o).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), t.append("defs").append("marker").attr("id", s + "_" + o + "-onlyOneEnd").attr("class", "marker onlyOne " + o).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
	}, "only_one"),
	zero_or_one: /* @__PURE__ */ __name((t, o, s) => {
		let c = t.append("defs").append("marker").attr("id", s + "_" + o + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + o).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		c.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), c.append("path").attr("d", "M9,0 L9,18");
		let l = t.append("defs").append("marker").attr("id", s + "_" + o + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + o).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18");
	}, "zero_or_one"),
	one_or_more: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-oneOrMoreStart").attr("class", "marker oneOrMore " + o).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), t.append("defs").append("marker").attr("id", s + "_" + o + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + o).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
	}, "one_or_more"),
	zero_or_more: /* @__PURE__ */ __name((t, o, s) => {
		let c = t.append("defs").append("marker").attr("id", s + "_" + o + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + o).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		c.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), c.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
		let l = t.append("defs").append("marker").attr("id", s + "_" + o + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + o).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		l.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
	}, "zero_or_more"),
	requirement_arrow: /* @__PURE__ */ __name((t, o, s) => {
		t.append("defs").append("marker").attr("id", s + "_" + o + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20");
	}, "requirement_arrow"),
	requirement_contains: /* @__PURE__ */ __name((t, o, s) => {
		let c = t.append("defs").append("marker").attr("id", s + "_" + o + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
		c.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), c.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), c.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
	}, "requirement_contains")
}, markers_default = insertMarkers;
export { positionEdgeLabel as a, markers_default as i, insertEdge as n, insertEdgeLabel as r, clear as t };
