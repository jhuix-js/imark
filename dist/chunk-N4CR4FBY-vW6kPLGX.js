import { d as interpolateToCurve } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { s as common_default, y as getConfig } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { a as insertNode, i as insertCluster, s as labelHelper } from "./chunk-JZLCHNYA-Cqf7Lizt.js";
import { a as positionEdgeLabel, i as markers_default, n as insertEdge, r as insertEdgeLabel } from "./chunk-QXUST7PY-DE6lURYz.js";
var internalHelpers = {
	common: common_default,
	getConfig,
	insertCluster,
	insertEdge,
	insertEdgeLabel,
	insertMarkers: markers_default,
	insertNode,
	interpolateToCurve,
	labelHelper,
	log,
	positionEdgeLabel
}, layoutAlgorithms = {}, registerLayoutLoaders = /* @__PURE__ */ __name((e) => {
	for (let h of e) layoutAlgorithms[h.name] = h;
}, "registerLayoutLoaders");
(/* @__PURE__ */ __name(() => {
	registerLayoutLoaders([{
		name: "dagre",
		loader: /* @__PURE__ */ __name(async () => await import("./dagre-6UL2VRFP-D_0HB79b.js"), "loader")
	}, ...[{
		name: "cose-bilkent",
		loader: /* @__PURE__ */ __name(async () => await import("./cose-bilkent-S5V4N54A-Dr1w6maR.js"), "loader")
	}]]);
}, "registerDefaultLayoutLoaders"))();
var render = /* @__PURE__ */ __name(async (e, h) => {
	if (!(e.layoutAlgorithm in layoutAlgorithms)) throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
	let g = layoutAlgorithms[e.layoutAlgorithm];
	return (await g.loader()).render(e, h, internalHelpers, { algorithm: g.algorithm });
}, "render"), getRegisteredLayoutAlgorithm = /* @__PURE__ */ __name((e = "", { fallback: g = "dagre" } = {}) => {
	if (e in layoutAlgorithms) return e;
	if (g in layoutAlgorithms) return log.warn(`Layout algorithm ${e} is not registered. Using ${g} as fallback.`), g;
	throw Error(`Both layout algorithms ${e} and ${g} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { registerLayoutLoaders as n, render as r, getRegisteredLayoutAlgorithm as t };
