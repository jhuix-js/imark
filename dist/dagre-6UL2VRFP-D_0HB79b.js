import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { r as isUndefined_default } from "./_baseUniq-C5UuzJkR.js";
import { s as map_default } from "./_basePickBy-CFV2cYVn.js";
import "./isEmpty-D0b8WX4x.js";
import { t as layout } from "./dagre-YdLLCUGf.js";
import "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { t as clone_default } from "./clone-XSAL9Gay.js";
import { t as Graph } from "./graphlib-MJWczo1S.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { b as getConfig2 } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import "./array-BlABR2MP.js";
import "./step-DmjVsfVE.js";
import "./line-Cl_B2mnJ.js";
import "./dist-CUheKjZU.js";
import "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import "./chunk-HN2XXSSU-p3ji0EC3.js";
import { t as getSubGraphTitleMargins } from "./chunk-CVBHYZKI-Cx9WXSzs.js";
import "./chunk-ATLVNIR6-DULmhiFu.js";
import { a as insertNode, c as positionNode, i as insertCluster, l as setNodeElem, n as clear2, t as clear$1, u as updateNodeBounds } from "./chunk-JZLCHNYA-Cqf7Lizt.js";
import { a as positionEdgeLabel, i as markers_default, n as insertEdge, r as insertEdgeLabel, t as clear } from "./chunk-QXUST7PY-DE6lURYz.js";
function write(C) {
	var w = {
		options: {
			directed: C.isDirected(),
			multigraph: C.isMultigraph(),
			compound: C.isCompound()
		},
		nodes: writeNodes(C),
		edges: writeEdges(C)
	};
	return isUndefined_default(C.graph()) || (w.value = clone_default(C.graph())), w;
}
function writeNodes(w) {
	return map_default(w.nodes(), function(C) {
		var T = w.node(C), E = w.parent(C), D = { v: C };
		return isUndefined_default(T) || (D.value = T), isUndefined_default(E) || (D.parent = E), D;
	});
}
function writeEdges(w) {
	return map_default(w.edges(), function(C) {
		var T = w.edge(C), E = {
			v: C.v,
			w: C.w
		};
		return isUndefined_default(C.name) || (E.name = C.name), isUndefined_default(T) || (E.value = T), E;
	});
}
var clusterDb = /* @__PURE__ */ new Map(), descendants = /* @__PURE__ */ new Map(), parents = /* @__PURE__ */ new Map(), clear4 = /* @__PURE__ */ __name(() => {
	descendants.clear(), parents.clear(), clusterDb.clear();
}, "clear"), isDescendant = /* @__PURE__ */ __name((r, C) => {
	let w = descendants.get(C) || [];
	return log.trace("In isDescendant", C, " ", r, " = ", w.includes(r)), w.includes(r);
}, "isDescendant"), edgeInCluster = /* @__PURE__ */ __name((r, C) => {
	let w = descendants.get(C) || [];
	return log.info("Descendants of ", C, " is ", w), log.info("Edge is ", r), r.v === C || r.w === C ? !1 : w ? w.includes(r.v) || isDescendant(r.v, C) || isDescendant(r.w, C) || w.includes(r.w) : (log.debug("Tilt, ", C, ",not in descendants"), !1);
}, "edgeInCluster"), copy = /* @__PURE__ */ __name((r, C, w, T) => {
	log.warn("Copying children of ", r, "root", T, "data", C.node(r), T);
	let E = C.children(r) || [];
	r !== T && E.push(r), log.warn("Copying (nodes) clusterId", r, "nodes", E), E.forEach((E) => {
		if (C.children(E).length > 0) copy(E, C, w, T);
		else {
			let O = C.node(E);
			log.info("cp ", E, " to ", T, " with parent ", r), w.setNode(E, O), T !== C.parent(E) && (log.warn("Setting parent", E, C.parent(E)), w.setParent(E, C.parent(E))), r !== T && E !== r ? (log.debug("Setting parent", E, r), w.setParent(E, r)) : (log.info("In copy ", r, "root", T, "data", C.node(r), T), log.debug("Not Setting parent for node=", E, "cluster!==rootId", r !== T, "node!==clusterId", E !== r));
			let k = C.edges(E);
			log.debug("Copying Edges", k), k.forEach((E) => {
				log.info("Edge", E);
				let O = C.edge(E.v, E.w, E.name);
				log.info("Edge data", O, T);
				try {
					edgeInCluster(E, T) ? (log.info("Copying as ", E.v, E.w, O, E.name), w.setEdge(E.v, E.w, O, E.name), log.info("newGraph edges ", w.edges(), w.edge(w.edges()[0]))) : log.info("Skipping copy of edge ", E.v, "-->", E.w, " rootId: ", T, " clusterId:", r);
				} catch (r) {
					log.error(r);
				}
			});
		}
		log.debug("Removing node", E), C.removeNode(E);
	});
}, "copy"), extractDescendants = /* @__PURE__ */ __name((r, C) => {
	let w = C.children(r), T = [...w];
	for (let E of w) parents.set(E, r), T = [...T, ...extractDescendants(E, C)];
	return T;
}, "extractDescendants"), findCommonEdges = /* @__PURE__ */ __name((r, C, w) => {
	let T = r.edges().filter((r) => r.v === C || r.w === C), E = r.edges().filter((r) => r.v === w || r.w === w), D = T.map((r) => ({
		v: r.v === C ? w : r.v,
		w: r.w === C ? C : r.w
	})), O = E.map((r) => ({
		v: r.v,
		w: r.w
	}));
	return D.filter((r) => O.some((C) => r.v === C.v && r.w === C.w));
}, "findCommonEdges"), findNonClusterChild = /* @__PURE__ */ __name((r, C, w) => {
	let T = C.children(r);
	if (log.trace("Searching children of id ", r, T), T.length < 1) return r;
	let E;
	for (let r of T) {
		let T = findNonClusterChild(r, C, w), D = findCommonEdges(C, w, T);
		if (T) if (D.length > 0) E = T;
		else return T;
	}
	return E;
}, "findNonClusterChild"), getAnchorId = /* @__PURE__ */ __name((r) => !clusterDb.has(r) || !clusterDb.get(r).externalConnections ? r : clusterDb.has(r) ? clusterDb.get(r).id : r, "getAnchorId"), adjustClustersAndEdges = /* @__PURE__ */ __name((r, C) => {
	if (!r || C > 10) {
		log.debug("Opting out, no graph ");
		return;
	} else log.debug("Opting in, graph ");
	r.nodes().forEach(function(C) {
		r.children(C).length > 0 && (log.warn("Cluster identified", C, " Replacement id in edges: ", findNonClusterChild(C, r, C)), descendants.set(C, extractDescendants(C, r)), clusterDb.set(C, {
			id: findNonClusterChild(C, r, C),
			clusterData: r.node(C)
		}));
	}), r.nodes().forEach(function(C) {
		let w = r.children(C), T = r.edges();
		w.length > 0 ? (log.debug("Cluster identified", C, descendants), T.forEach((r) => {
			isDescendant(r.v, C) ^ isDescendant(r.w, C) && (log.warn("Edge: ", r, " leaves cluster ", C), log.warn("Descendants of XXX ", C, ": ", descendants.get(C)), clusterDb.get(C).externalConnections = !0);
		})) : log.debug("Not a cluster ", C, descendants);
	});
	for (let C of clusterDb.keys()) {
		let w = clusterDb.get(C).id, T = r.parent(w);
		T !== C && clusterDb.has(T) && !clusterDb.get(T).externalConnections && (clusterDb.get(C).id = T);
	}
	r.edges().forEach(function(C) {
		let w = r.edge(C);
		log.warn("Edge " + C.v + " -> " + C.w + ": " + JSON.stringify(C)), log.warn("Edge " + C.v + " -> " + C.w + ": " + JSON.stringify(r.edge(C)));
		let T = C.v, E = C.w;
		if (log.warn("Fix XXX", clusterDb, "ids:", C.v, C.w, "Translating: ", clusterDb.get(C.v), " --- ", clusterDb.get(C.w)), clusterDb.get(C.v) || clusterDb.get(C.w)) {
			if (log.warn("Fixing and trying - removing XXX", C.v, C.w, C.name), T = getAnchorId(C.v), E = getAnchorId(C.w), r.removeEdge(C.v, C.w, C.name), T !== C.v) {
				let E = r.parent(T);
				clusterDb.get(E).externalConnections = !0, w.fromCluster = C.v;
			}
			if (E !== C.w) {
				let T = r.parent(E);
				clusterDb.get(T).externalConnections = !0, w.toCluster = C.w;
			}
			log.warn("Fix Replacing with XXX", T, E, C.name), r.setEdge(T, E, w, C.name);
		}
	}), log.warn("Adjusted Graph", write(r)), extractor(r, 0), log.trace(clusterDb);
}, "adjustClustersAndEdges"), extractor = /* @__PURE__ */ __name((r, C) => {
	if (log.warn("extractor - ", C, write(r), r.children("D")), C > 10) {
		log.error("Bailing out");
		return;
	}
	let w = r.nodes(), T = !1;
	for (let C of w) {
		let w = r.children(C);
		T ||= w.length > 0;
	}
	if (!T) {
		log.debug("Done, no node has children", r.nodes());
		return;
	}
	log.debug("Nodes = ", w, C);
	for (let T of w) if (log.debug("Extracting node", T, clusterDb, clusterDb.has(T) && !clusterDb.get(T).externalConnections, !r.parent(T), r.node(T), r.children("D"), " Depth ", C), !clusterDb.has(T)) log.debug("Not a cluster", T, C);
	else if (!clusterDb.get(T).externalConnections && r.children(T) && r.children(T).length > 0) {
		log.warn("Cluster without external connections, without a parent and with children", T, C);
		let w = r.graph().rankdir === "TB" ? "LR" : "TB";
		clusterDb.get(T)?.clusterData?.dir && (w = clusterDb.get(T).clusterData.dir, log.warn("Fixing dir", clusterDb.get(T).clusterData.dir, w));
		let O = new Graph({
			multigraph: !0,
			compound: !0
		}).setGraph({
			rankdir: w,
			nodesep: 50,
			ranksep: 50,
			marginx: 8,
			marginy: 8
		}).setDefaultEdgeLabel(function() {
			return {};
		});
		log.warn("Old graph before copy", write(r)), copy(T, r, O, T), r.setNode(T, {
			clusterNode: !0,
			id: T,
			clusterData: clusterDb.get(T).clusterData,
			label: clusterDb.get(T).label,
			graph: O
		}), log.warn("New graph after copy node: (", T, ")", write(O)), log.debug("Old graph after copy", write(r));
	} else log.warn("Cluster ** ", T, " **not meeting the criteria !externalConnections:", !clusterDb.get(T).externalConnections, " no parent: ", !r.parent(T), " children ", r.children(T) && r.children(T).length > 0, r.children("D"), C), log.debug(clusterDb);
	w = r.nodes(), log.warn("New list of nodes", w);
	for (let T of w) {
		let w = r.node(T);
		log.warn(" Now next level", T, w), w?.clusterNode && extractor(w.graph, C + 1);
	}
}, "extractor"), sorter = /* @__PURE__ */ __name((r, C) => {
	if (C.length === 0) return [];
	let w = Object.assign([], C);
	return C.forEach((C) => {
		let T = sorter(r, r.children(C));
		w = [...w, ...T];
	}), w;
}, "sorter"), sortNodesByHierarchy = /* @__PURE__ */ __name((r) => sorter(r, r.children()), "sortNodesByHierarchy"), recursiveRender = /* @__PURE__ */ __name(async (r, C, T, E, k, M) => {
	log.warn("Graph in recursive render:XAX", write(C), k);
	let N = C.graph().rankdir;
	log.trace("Dir in recursive render - dir:", N);
	let P = r.insert("g").attr("class", "root");
	C.nodes() ? log.info("Recursive render XXX", C.nodes()) : log.info("No nodes found for", C), C.edges().length > 0 && log.info("Recursive edges", C.edge(C.edges()[0]));
	let F = P.insert("g").attr("class", "clusters"), I = P.insert("g").attr("class", "edgePaths"), L = P.insert("g").attr("class", "edgeLabels"), R = P.insert("g").attr("class", "nodes");
	await Promise.all(C.nodes().map(async function(r) {
		let w = C.node(r);
		if (k !== void 0) {
			let w = JSON.parse(JSON.stringify(k.clusterData));
			log.trace("Setting data for parent cluster XXX\n Node.id = ", r, "\n data=", w.height, "\nParent cluster", k.height), C.setNode(k.id, w), C.parent(r) || (log.trace("Setting parent", r, k.id), C.setParent(r, k.id, w));
		}
		if (log.info("(Insert) Node XXX" + r + ": " + JSON.stringify(C.node(r))), w?.clusterNode) {
			log.info("Cluster identified XBX", r, w.width, C.node(r));
			let { ranksep: O, nodesep: k } = C.graph();
			w.graph.setGraph({
				...w.graph.graph(),
				ranksep: O + 25,
				nodesep: k
			});
			let A = await recursiveRender(R, w.graph, T, E, C.node(r), M), j = A.elem;
			updateNodeBounds(w, j), w.diff = A.diff || 0, log.info("New compound node after recursive render XAX", r, "width", w.width, "height", w.height), setNodeElem(j, w);
		} else C.children(r).length > 0 ? (log.trace("Cluster - the non recursive path XBX", r, w.id, w, w.width, "Graph:", C), log.trace(findNonClusterChild(w.id, C)), clusterDb.set(w.id, {
			id: findNonClusterChild(w.id, C),
			node: w
		})) : (log.trace("Node - the non recursive path XAX", r, R, C.node(r), N), await insertNode(R, C.node(r), {
			config: M,
			dir: N
		}));
	})), await (/* @__PURE__ */ __name(async () => {
		let r = C.edges().map(async function(r) {
			let w = C.edge(r.v, r.w, r.name);
			log.info("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(r)), log.info("Edge " + r.v + " -> " + r.w + ": ", r, " ", JSON.stringify(C.edge(r))), log.info("Fix", clusterDb, "ids:", r.v, r.w, "Translating: ", clusterDb.get(r.v), clusterDb.get(r.w)), await insertEdgeLabel(L, w);
		});
		await Promise.all(r);
	}, "processEdges"))(), log.info("Graph before layout:", JSON.stringify(write(C))), log.info("############################################# XXX"), log.info("###                Layout                 ### XXX"), log.info("############################################# XXX"), layout(C), log.info("Graph after layout:", JSON.stringify(write(C)));
	let z = 0, { subGraphTitleTotalMargin: B } = getSubGraphTitleMargins(M);
	return await Promise.all(sortNodesByHierarchy(C).map(async function(r) {
		let w = C.node(r);
		if (log.info("Position XBX => " + r + ": (" + w.x, "," + w.y, ") width: ", w.width, " height: ", w.height), w?.clusterNode) w.y += B, log.info("A tainted cluster node XBX1", r, w.id, w.width, w.height, w.x, w.y, C.parent(r)), clusterDb.get(w.id).node = w, positionNode(w);
		else if (C.children(r).length > 0) {
			log.info("A pure cluster node XBX1", r, w.id, w.x, w.y, w.width, w.height, C.parent(r)), w.height += B, C.node(w.parentId);
			let T = w?.padding / 2 || 0, E = w?.labelBBox?.height || 0, O = E - T || 0;
			log.debug("OffsetY", O, "labelHeight", E, "halfPadding", T), await insertCluster(F, w), clusterDb.get(w.id).node = w;
		} else {
			let r = C.node(w.parentId);
			w.y += B / 2, log.info("A regular node XBX1 - using the padding", w.id, "parent", w.parentId, w.width, w.height, w.x, w.y, "offsetY", w.offsetY, "parent", r, r?.offsetY, w), positionNode(w);
		}
	})), C.edges().forEach(function(r) {
		let w = C.edge(r);
		log.info("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(w), w), w.points.forEach((r) => r.y += B / 2), positionEdgeLabel(w, insertEdge(I, w, clusterDb, T, C.node(r.v), C.node(r.w), E));
	}), C.nodes().forEach(function(r) {
		let w = C.node(r);
		log.info(r, w.type, w.diff), w.isGroup && (z = w.diff);
	}), log.warn("Returning from recursive render XAX", P, z), {
		elem: P,
		diff: z
	};
}, "recursiveRender"), render = /* @__PURE__ */ __name(async (r, C) => {
	let w = new Graph({
		multigraph: !0,
		compound: !0
	}).setGraph({
		rankdir: r.direction,
		nodesep: r.config?.nodeSpacing || r.config?.flowchart?.nodeSpacing || r.nodeSpacing,
		ranksep: r.config?.rankSpacing || r.config?.flowchart?.rankSpacing || r.rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	}), T = C.select("g");
	markers_default(T, r.markers, r.type, r.diagramId), clear2(), clear(), clear$1(), clear4(), r.nodes.forEach((r) => {
		w.setNode(r.id, { ...r }), r.parentId && w.setParent(r.id, r.parentId);
	}), log.debug("Edges:", r.edges), r.edges.forEach((r) => {
		if (r.start === r.end) {
			let C = r.start, T = C + "---" + C + "---1", E = C + "---" + C + "---2", D = w.node(C);
			w.setNode(T, {
				domId: T,
				id: T,
				parentId: D.parentId,
				labelStyle: "",
				label: "",
				padding: 0,
				shape: "labelRect",
				style: "",
				width: 10,
				height: 10
			}), w.setParent(T, D.parentId), w.setNode(E, {
				domId: E,
				id: E,
				parentId: D.parentId,
				labelStyle: "",
				padding: 0,
				shape: "labelRect",
				label: "",
				style: "",
				width: 10,
				height: 10
			}), w.setParent(E, D.parentId);
			let O = structuredClone(r), k = structuredClone(r), A = structuredClone(r);
			O.label = "", O.arrowTypeEnd = "none", O.id = C + "-cyclic-special-1", k.arrowTypeStart = "none", k.arrowTypeEnd = "none", k.id = C + "-cyclic-special-mid", A.label = "", D.isGroup && (O.fromCluster = C, A.toCluster = C), A.id = C + "-cyclic-special-2", A.arrowTypeStart = "none", w.setEdge(C, T, O, C + "-cyclic-special-0"), w.setEdge(T, E, k, C + "-cyclic-special-1"), w.setEdge(E, C, A, C + "-cyc<lic-special-2");
		} else w.setEdge(r.start, r.end, { ...r }, r.id);
	}), log.warn("Graph at first:", JSON.stringify(write(w))), adjustClustersAndEdges(w), log.warn("Graph after XAX:", JSON.stringify(write(w)));
	let O = getConfig2();
	await recursiveRender(T, w, r.type, r.diagramId, void 0, O);
}, "render");
export { render };

//# sourceMappingURL=dagre-6UL2VRFP-D_0HB79b.js.map