import { C as _isIterateeCall_default, D as _overRest_default, E as _baseRest_default, G as _root_default, N as _setToString_default, P as constant_default, V as isArray_default, j as _baseAssignValue_default, k as _assignValue_default, n as _baseFor_default, p as keysIn_default, v as _baseUnary_default, w as isArrayLike_default, z as identity_default } from "./isArrayLikeObject-DKHowMnG.js";
import { C as _baseGet_default, E as toString_default, M as _arrayMap_default, N as isSymbol_default, S as _baseFlatten_default, a as filter_default, c as _castFunction_default, d as _baseForOwn_default, f as _baseIteratee_default, i as values_default, m as hasIn_default, n as reduce_default, p as _baseProperty_default, r as isUndefined_default, s as forEach_default, y as _baseClone_default } from "./_baseUniq-C5UuzJkR.js";
import { a as isString_default, c as _baseMap_default, d as defaults_default, f as flatten_default, i as _baseLt_default, l as find_default, m as toFinite_default, n as min_default, o as has_default, r as _baseExtremum_default, s as map_default, t as _basePickBy_default, u as last_default } from "./_basePickBy-CFV2cYVn.js";
import { i as _baseKeys_default, n as _getTag_default } from "./isEmpty-D0b8WX4x.js";
import { b as merge_default } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { t as Graph } from "./graphlib-MJWczo1S.js";
function flatRest(d) {
	return _setToString_default(_overRest_default(d, void 0, flatten_default), d + "");
}
var _flatRest_default = flatRest, reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function hasUnicode(d) {
	return reHasUnicode.test(d);
}
var _hasUnicode_default = hasUnicode, CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(d) {
	return _baseClone_default(d, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_default = cloneDeep, now_default = function() {
	return _root_default.Date.now();
};
function forIn(d, B) {
	return d == null ? d : _baseFor_default(d, _castFunction_default(B), keysIn_default);
}
var forIn_default = forIn;
function forOwn(d, B) {
	return d && _baseForOwn_default(d, _castFunction_default(B));
}
var forOwn_default = forOwn;
function baseGt(d, B) {
	return d > B;
}
var _baseGt_default = baseGt;
function mapValues(d, B) {
	var V = {};
	return B = _baseIteratee_default(B, 3), _baseForOwn_default(d, function(d, H, U) {
		_baseAssignValue_default(V, H, B(d, H, U));
	}), V;
}
var mapValues_default = mapValues;
function max(d) {
	return d && d.length ? _baseExtremum_default(d, identity_default, _baseGt_default) : void 0;
}
var max_default = max;
function minBy(d, B) {
	return d && d.length ? _baseExtremum_default(d, _baseIteratee_default(B, 2), _baseLt_default) : void 0;
}
var minBy_default = minBy;
function baseSortBy(d, B) {
	var V = d.length;
	for (d.sort(B); V--;) d[V] = d[V].value;
	return d;
}
var _baseSortBy_default = baseSortBy;
function compareAscending(d, B) {
	if (d !== B) {
		var V = d !== void 0, H = d === null, U = d === d, W = isSymbol_default(d), G = B !== void 0, K = B === null, q = B === B, J = isSymbol_default(B);
		if (!K && !J && !W && d > B || W && G && q && !K && !J || H && G && q || !V && q || !U) return 1;
		if (!H && !W && !J && d < B || J && V && U && !H && !W || K && V && U || !G && U || !q) return -1;
	}
	return 0;
}
var _compareAscending_default = compareAscending;
function compareMultiple(d, B, V) {
	for (var H = -1, U = d.criteria, W = B.criteria, G = U.length, K = V.length; ++H < G;) {
		var q = _compareAscending_default(U[H], W[H]);
		if (q) return H >= K ? q : q * (V[H] == "desc" ? -1 : 1);
	}
	return d.index - B.index;
}
var _compareMultiple_default = compareMultiple;
function baseOrderBy(d, B, V) {
	B = B.length ? _arrayMap_default(B, function(d) {
		return isArray_default(d) ? function(B) {
			return _baseGet_default(B, d.length === 1 ? d[0] : d);
		} : d;
	}) : [identity_default];
	var H = -1;
	return B = _arrayMap_default(B, _baseUnary_default(_baseIteratee_default)), _baseSortBy_default(_baseMap_default(d, function(d, V, U) {
		return {
			criteria: _arrayMap_default(B, function(B) {
				return B(d);
			}),
			index: ++H,
			value: d
		};
	}), function(d, B) {
		return _compareMultiple_default(d, B, V);
	});
}
var _baseOrderBy_default = baseOrderBy, _asciiSize_default = _baseProperty_default("length"), rsAstralRange = "\\ud800-\\udfff", rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsVarRange = "\\ufe0e\\ufe0f", rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
	rsNonAstral,
	rsRegional,
	rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
	rsNonAstral + rsCombo + "?",
	rsCombo,
	rsRegional,
	rsSurrPair,
	rsAstral
].join("|") + ")", reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeSize(d) {
	for (var B = reUnicode.lastIndex = 0; reUnicode.test(d);) ++B;
	return B;
}
var _unicodeSize_default = unicodeSize;
function stringSize(d) {
	return _hasUnicode_default(d) ? _unicodeSize_default(d) : _asciiSize_default(d);
}
var _stringSize_default = stringSize;
function basePick(d, B) {
	return _basePickBy_default(d, B, function(B, V) {
		return hasIn_default(d, V);
	});
}
var _basePick_default = basePick, pick_default = _flatRest_default(function(d, B) {
	return d == null ? {} : _basePick_default(d, B);
}), nativeCeil = Math.ceil, nativeMax = Math.max;
function baseRange(d, B, V, H) {
	for (var U = -1, W = nativeMax(nativeCeil((B - d) / (V || 1)), 0), G = Array(W); W--;) G[H ? W : ++U] = d, d += V;
	return G;
}
var _baseRange_default = baseRange;
function createRange(B) {
	return function(V, H, U) {
		return U && typeof U != "number" && _isIterateeCall_default(V, H, U) && (H = U = void 0), V = toFinite_default(V), H === void 0 ? (H = V, V = 0) : H = toFinite_default(H), U = U === void 0 ? V < H ? 1 : -1 : toFinite_default(U), _baseRange_default(V, H, U, B);
	};
}
var range_default = createRange(), mapTag = "[object Map]", setTag = "[object Set]";
function size(d) {
	if (d == null) return 0;
	if (isArrayLike_default(d)) return isString_default(d) ? _stringSize_default(d) : d.length;
	var B = _getTag_default(d);
	return B == mapTag || B == setTag ? d.size : _baseKeys_default(d).length;
}
var size_default = size, sortBy_default = _baseRest_default(function(B, V) {
	if (B == null) return [];
	var H = V.length;
	return H > 1 && _isIterateeCall_default(B, V[0], V[1]) ? V = [] : H > 2 && _isIterateeCall_default(V[0], V[1], V[2]) && (V = [V[0]]), _baseOrderBy_default(B, _baseFlatten_default(V, 1), []);
}), idCounter = 0;
function uniqueId(d) {
	var B = ++idCounter;
	return toString_default(d) + B;
}
var uniqueId_default = uniqueId;
function baseZipObject(d, B, V) {
	for (var H = -1, U = d.length, W = B.length, G = {}; ++H < U;) {
		var K = H < W ? B[H] : void 0;
		V(G, d[H], K);
	}
	return G;
}
var _baseZipObject_default = baseZipObject;
function zipObject(d, B) {
	return _baseZipObject_default(d || [], B || [], _assignValue_default);
}
var zipObject_default = zipObject, List = class {
	constructor() {
		var d = {};
		d._next = d._prev = d, this._sentinel = d;
	}
	dequeue() {
		var d = this._sentinel, B = d._prev;
		if (B !== d) return unlink(B), B;
	}
	enqueue(d) {
		var B = this._sentinel;
		d._prev && d._next && unlink(d), d._next = B._next, B._next._prev = d, B._next = d, d._prev = B;
	}
	toString() {
		for (var d = [], B = this._sentinel, V = B._prev; V !== B;) d.push(JSON.stringify(V, filterOutLinks)), V = V._prev;
		return "[" + d.join(", ") + "]";
	}
};
function unlink(d) {
	d._prev._next = d._next, d._next._prev = d._prev, delete d._next, delete d._prev;
}
function filterOutLinks(d, B) {
	if (d !== "_next" && d !== "_prev") return B;
}
var DEFAULT_WEIGHT_FN = constant_default(1);
function greedyFAS(d, B) {
	if (d.nodeCount() <= 1) return [];
	var V = buildState(d, B || DEFAULT_WEIGHT_FN);
	return flatten_default(map_default(doGreedyFAS(V.graph, V.buckets, V.zeroIdx), function(B) {
		return d.outEdges(B.v, B.w);
	}));
}
function doGreedyFAS(d, B, V) {
	for (var H = [], U = B[B.length - 1], W = B[0], G; d.nodeCount();) {
		for (; G = W.dequeue();) removeNode(d, B, V, G);
		for (; G = U.dequeue();) removeNode(d, B, V, G);
		if (d.nodeCount()) {
			for (var K = B.length - 2; K > 0; --K) if (G = B[K].dequeue(), G) {
				H = H.concat(removeNode(d, B, V, G, !0));
				break;
			}
		}
	}
	return H;
}
function removeNode(d, B, V, H, U) {
	var W = U ? [] : void 0;
	return forEach_default(d.inEdges(H.v), function(H) {
		var G = d.edge(H), K = d.node(H.v);
		U && W.push({
			v: H.v,
			w: H.w
		}), K.out -= G, assignBucket(B, V, K);
	}), forEach_default(d.outEdges(H.v), function(H) {
		var U = d.edge(H), W = H.w, G = d.node(W);
		G.in -= U, assignBucket(B, V, G);
	}), d.removeNode(H.v), W;
}
function buildState(d, B) {
	var V = new Graph(), H = 0, U = 0;
	forEach_default(d.nodes(), function(d) {
		V.setNode(d, {
			v: d,
			in: 0,
			out: 0
		});
	}), forEach_default(d.edges(), function(d) {
		var W = V.edge(d.v, d.w) || 0, G = B(d), K = W + G;
		V.setEdge(d.v, d.w, K), U = Math.max(U, V.node(d.v).out += G), H = Math.max(H, V.node(d.w).in += G);
	});
	var W = range_default(U + H + 3).map(function() {
		return new List();
	}), G = H + 1;
	return forEach_default(V.nodes(), function(d) {
		assignBucket(W, G, V.node(d));
	}), {
		graph: V,
		buckets: W,
		zeroIdx: G
	};
}
function assignBucket(d, B, V) {
	V.out ? V.in ? d[V.out - V.in + B].enqueue(V) : d[d.length - 1].enqueue(V) : d[0].enqueue(V);
}
function run$2(d) {
	forEach_default(d.graph().acyclicer === "greedy" ? greedyFAS(d, B(d)) : dfsFAS(d), function(B) {
		var V = d.edge(B);
		d.removeEdge(B), V.forwardName = B.name, V.reversed = !0, d.setEdge(B.w, B.v, V, uniqueId_default("rev"));
	});
	function B(d) {
		return function(B) {
			return d.edge(B).weight;
		};
	}
}
function dfsFAS(d) {
	var B = [], V = {}, H = {};
	function U(W) {
		Object.prototype.hasOwnProperty.call(H, W) || (H[W] = !0, V[W] = !0, forEach_default(d.outEdges(W), function(d) {
			Object.prototype.hasOwnProperty.call(V, d.w) ? B.push(d) : U(d.w);
		}), delete V[W]);
	}
	return forEach_default(d.nodes(), U), B;
}
function undo$2(d) {
	forEach_default(d.edges(), function(B) {
		var V = d.edge(B);
		if (V.reversed) {
			d.removeEdge(B);
			var H = V.forwardName;
			delete V.reversed, delete V.forwardName, d.setEdge(B.w, B.v, V, H);
		}
	});
}
function addDummyNode(d, B, V, H) {
	var U;
	do
		U = uniqueId_default(H);
	while (d.hasNode(U));
	return V.dummy = B, d.setNode(U, V), U;
}
function simplify(d) {
	var B = new Graph().setGraph(d.graph());
	return forEach_default(d.nodes(), function(V) {
		B.setNode(V, d.node(V));
	}), forEach_default(d.edges(), function(V) {
		var H = B.edge(V.v, V.w) || {
			weight: 0,
			minlen: 1
		}, U = d.edge(V);
		B.setEdge(V.v, V.w, {
			weight: H.weight + U.weight,
			minlen: Math.max(H.minlen, U.minlen)
		});
	}), B;
}
function asNonCompoundGraph(d) {
	var B = new Graph({ multigraph: d.isMultigraph() }).setGraph(d.graph());
	return forEach_default(d.nodes(), function(V) {
		d.children(V).length || B.setNode(V, d.node(V));
	}), forEach_default(d.edges(), function(V) {
		B.setEdge(V, d.edge(V));
	}), B;
}
function intersectRect(d, B) {
	var V = d.x, H = d.y, U = B.x - V, W = B.y - H, G = d.width / 2, K = d.height / 2;
	if (!U && !W) throw Error("Not possible to find intersection inside of the rectangle");
	var q, J;
	return Math.abs(W) * G > Math.abs(U) * K ? (W < 0 && (K = -K), q = K * U / W, J = K) : (U < 0 && (G = -G), q = G, J = G * W / U), {
		x: V + q,
		y: H + J
	};
}
function buildLayerMatrix(d) {
	var B = map_default(range_default(maxRank(d) + 1), function() {
		return [];
	});
	return forEach_default(d.nodes(), function(V) {
		var H = d.node(V), U = H.rank;
		isUndefined_default(U) || (B[U][H.order] = V);
	}), B;
}
function normalizeRanks(d) {
	var B = min_default(map_default(d.nodes(), function(B) {
		return d.node(B).rank;
	}));
	forEach_default(d.nodes(), function(V) {
		var H = d.node(V);
		has_default(H, "rank") && (H.rank -= B);
	});
}
function removeEmptyRanks(d) {
	var B = min_default(map_default(d.nodes(), function(B) {
		return d.node(B).rank;
	})), V = [];
	forEach_default(d.nodes(), function(H) {
		var U = d.node(H).rank - B;
		V[U] || (V[U] = []), V[U].push(H);
	});
	var H = 0, U = d.graph().nodeRankFactor;
	forEach_default(V, function(B, V) {
		isUndefined_default(B) && V % U !== 0 ? --H : H && forEach_default(B, function(B) {
			d.node(B).rank += H;
		});
	});
}
function addBorderNode$1(d, B, V, H) {
	var U = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (U.rank = V, U.order = H), addDummyNode(d, "border", U, B);
}
function maxRank(d) {
	return max_default(map_default(d.nodes(), function(B) {
		var V = d.node(B).rank;
		if (!isUndefined_default(V)) return V;
	}));
}
function partition(d, B) {
	var V = {
		lhs: [],
		rhs: []
	};
	return forEach_default(d, function(d) {
		B(d) ? V.lhs.push(d) : V.rhs.push(d);
	}), V;
}
function time(d, B) {
	var V = now_default();
	try {
		return B();
	} finally {
		console.log(d + " time: " + (now_default() - V) + "ms");
	}
}
function notime(d, B) {
	return B();
}
function addBorderSegments(d) {
	function B(V) {
		var H = d.children(V), U = d.node(V);
		if (H.length && forEach_default(H, B), Object.prototype.hasOwnProperty.call(U, "minRank")) {
			U.borderLeft = [], U.borderRight = [];
			for (var W = U.minRank, G = U.maxRank + 1; W < G; ++W) addBorderNode(d, "borderLeft", "_bl", V, U, W), addBorderNode(d, "borderRight", "_br", V, U, W);
		}
	}
	forEach_default(d.children(), B);
}
function addBorderNode(d, B, V, H, U, W) {
	var G = {
		width: 0,
		height: 0,
		rank: W,
		borderType: B
	}, K = U[B][W - 1], q = addDummyNode(d, "border", G, V);
	U[B][W] = q, d.setParent(q, H), K && d.setEdge(K, q, { weight: 1 });
}
function adjust(d) {
	var B = d.graph().rankdir.toLowerCase();
	(B === "lr" || B === "rl") && swapWidthHeight(d);
}
function undo$1(d) {
	var B = d.graph().rankdir.toLowerCase();
	(B === "bt" || B === "rl") && reverseY(d), (B === "lr" || B === "rl") && (swapXY(d), swapWidthHeight(d));
}
function swapWidthHeight(d) {
	forEach_default(d.nodes(), function(B) {
		swapWidthHeightOne(d.node(B));
	}), forEach_default(d.edges(), function(B) {
		swapWidthHeightOne(d.edge(B));
	});
}
function swapWidthHeightOne(d) {
	var B = d.width;
	d.width = d.height, d.height = B;
}
function reverseY(d) {
	forEach_default(d.nodes(), function(B) {
		reverseYOne(d.node(B));
	}), forEach_default(d.edges(), function(B) {
		var V = d.edge(B);
		forEach_default(V.points, reverseYOne), Object.prototype.hasOwnProperty.call(V, "y") && reverseYOne(V);
	});
}
function reverseYOne(d) {
	d.y = -d.y;
}
function swapXY(d) {
	forEach_default(d.nodes(), function(B) {
		swapXYOne(d.node(B));
	}), forEach_default(d.edges(), function(B) {
		var V = d.edge(B);
		forEach_default(V.points, swapXYOne), Object.prototype.hasOwnProperty.call(V, "x") && swapXYOne(V);
	});
}
function swapXYOne(d) {
	var B = d.x;
	d.x = d.y, d.y = B;
}
function run$1(d) {
	d.graph().dummyChains = [], forEach_default(d.edges(), function(B) {
		normalizeEdge(d, B);
	});
}
function normalizeEdge(d, B) {
	var V = B.v, H = d.node(V).rank, U = B.w, W = d.node(U).rank, G = B.name, K = d.edge(B), q = K.labelRank;
	if (W !== H + 1) {
		d.removeEdge(B);
		var J = void 0, Y, X;
		for (X = 0, ++H; H < W; ++X, ++H) K.points = [], J = {
			width: 0,
			height: 0,
			edgeLabel: K,
			edgeObj: B,
			rank: H
		}, Y = addDummyNode(d, "edge", J, "_d"), H === q && (J.width = K.width, J.height = K.height, J.dummy = "edge-label", J.labelpos = K.labelpos), d.setEdge(V, Y, { weight: K.weight }, G), X === 0 && d.graph().dummyChains.push(Y), V = Y;
		d.setEdge(V, U, { weight: K.weight }, G);
	}
}
function undo(d) {
	forEach_default(d.graph().dummyChains, function(B) {
		var V = d.node(B), H = V.edgeLabel, U;
		for (d.setEdge(V.edgeObj, H); V.dummy;) U = d.successors(B)[0], d.removeNode(B), H.points.push({
			x: V.x,
			y: V.y
		}), V.dummy === "edge-label" && (H.x = V.x, H.y = V.y, H.width = V.width, H.height = V.height), B = U, V = d.node(B);
	});
}
function longestPath(d) {
	var B = {};
	function V(H) {
		var U = d.node(H);
		if (Object.prototype.hasOwnProperty.call(B, H)) return U.rank;
		B[H] = !0;
		var W = min_default(map_default(d.outEdges(H), function(B) {
			return V(B.w) - d.edge(B).minlen;
		}));
		return (W === Infinity || W == null) && (W = 0), U.rank = W;
	}
	forEach_default(d.sources(), V);
}
function slack(d, B) {
	return d.node(B.w).rank - d.node(B.v).rank - d.edge(B).minlen;
}
function feasibleTree(d) {
	var B = new Graph({ directed: !1 }), V = d.nodes()[0], H = d.nodeCount();
	B.setNode(V, {});
	for (var U, W; tightTree(B, d) < H;) U = findMinSlackEdge(B, d), W = B.hasNode(U.v) ? slack(d, U) : -slack(d, U), shiftRanks(B, d, W);
	return B;
}
function tightTree(d, B) {
	function V(H) {
		forEach_default(B.nodeEdges(H), function(U) {
			var W = U.v, G = H === W ? U.w : W;
			!d.hasNode(G) && !slack(B, U) && (d.setNode(G, {}), d.setEdge(H, G, {}), V(G));
		});
	}
	return forEach_default(d.nodes(), V), d.nodeCount();
}
function findMinSlackEdge(d, B) {
	return minBy_default(B.edges(), function(V) {
		if (d.hasNode(V.v) !== d.hasNode(V.w)) return slack(B, V);
	});
}
function shiftRanks(d, B, V) {
	forEach_default(d.nodes(), function(d) {
		B.node(d).rank += V;
	});
}
constant_default(1), constant_default(1), topsort.CycleException = CycleException;
function topsort(d) {
	var B = {}, V = {}, H = [];
	function U(W) {
		if (Object.prototype.hasOwnProperty.call(V, W)) throw new CycleException();
		Object.prototype.hasOwnProperty.call(B, W) || (V[W] = !0, B[W] = !0, forEach_default(d.predecessors(W), U), delete V[W], H.push(W));
	}
	if (forEach_default(d.sinks(), U), size_default(B) !== d.nodeCount()) throw new CycleException();
	return H;
}
function CycleException() {}
CycleException.prototype = /* @__PURE__ */ Error();
function dfs$1(d, B, V) {
	isArray_default(B) || (B = [B]);
	var H = (d.isDirected() ? d.successors : d.neighbors).bind(d), U = [], W = {};
	return forEach_default(B, function(B) {
		if (!d.hasNode(B)) throw Error("Graph does not have node: " + B);
		doDfs(d, B, V === "post", W, H, U);
	}), U;
}
function doDfs(d, B, V, H, U, W) {
	Object.prototype.hasOwnProperty.call(H, B) || (H[B] = !0, V || W.push(B), forEach_default(U(B), function(B) {
		doDfs(d, B, V, H, U, W);
	}), V && W.push(B));
}
function postorder$1(d, B) {
	return dfs$1(d, B, "post");
}
function preorder(d, B) {
	return dfs$1(d, B, "pre");
}
networkSimplex.initLowLimValues = initLowLimValues, networkSimplex.initCutValues = initCutValues, networkSimplex.calcCutValue = calcCutValue, networkSimplex.leaveEdge = leaveEdge, networkSimplex.enterEdge = enterEdge, networkSimplex.exchangeEdges = exchangeEdges;
function networkSimplex(d) {
	d = simplify(d), longestPath(d);
	var B = feasibleTree(d);
	initLowLimValues(B), initCutValues(B, d);
	for (var V, H; V = leaveEdge(B);) H = enterEdge(B, d, V), exchangeEdges(B, d, V, H);
}
function initCutValues(d, B) {
	var V = postorder$1(d, d.nodes());
	V = V.slice(0, V.length - 1), forEach_default(V, function(V) {
		assignCutValue(d, B, V);
	});
}
function assignCutValue(d, B, V) {
	var H = d.node(V).parent;
	d.edge(V, H).cutvalue = calcCutValue(d, B, V);
}
function calcCutValue(d, B, V) {
	var H = d.node(V).parent, U = !0, W = B.edge(V, H), G = 0;
	return W ||= (U = !1, B.edge(H, V)), G = W.weight, forEach_default(B.nodeEdges(V), function(W) {
		var K = W.v === V, q = K ? W.w : W.v;
		if (q !== H) {
			var J = K === U, Y = B.edge(W).weight;
			if (G += J ? Y : -Y, isTreeEdge(d, V, q)) {
				var X = d.edge(V, q).cutvalue;
				G += J ? -X : X;
			}
		}
	}), G;
}
function initLowLimValues(d, B) {
	arguments.length < 2 && (B = d.nodes()[0]), dfsAssignLowLim(d, {}, 1, B);
}
function dfsAssignLowLim(d, B, V, H, U) {
	var W = V, G = d.node(H);
	return B[H] = !0, forEach_default(d.neighbors(H), function(U) {
		Object.prototype.hasOwnProperty.call(B, U) || (V = dfsAssignLowLim(d, B, V, U, H));
	}), G.low = W, G.lim = V++, U ? G.parent = U : delete G.parent, V;
}
function leaveEdge(d) {
	return find_default(d.edges(), function(B) {
		return d.edge(B).cutvalue < 0;
	});
}
function enterEdge(d, B, V) {
	var H = V.v, U = V.w;
	B.hasEdge(H, U) || (H = V.w, U = V.v);
	var W = d.node(H), G = d.node(U), K = W, q = !1;
	return W.lim > G.lim && (K = G, q = !0), minBy_default(filter_default(B.edges(), function(B) {
		return q === isDescendant(d, d.node(B.v), K) && q !== isDescendant(d, d.node(B.w), K);
	}), function(d) {
		return slack(B, d);
	});
}
function exchangeEdges(d, B, V, H) {
	var U = V.v, W = V.w;
	d.removeEdge(U, W), d.setEdge(H.v, H.w, {}), initLowLimValues(d), initCutValues(d, B), updateRanks(d, B);
}
function updateRanks(d, B) {
	var V = preorder(d, find_default(d.nodes(), function(d) {
		return !B.node(d).parent;
	}));
	V = V.slice(1), forEach_default(V, function(V) {
		var H = d.node(V).parent, U = B.edge(V, H), W = !1;
		U || (U = B.edge(H, V), W = !0), B.node(V).rank = B.node(H).rank + (W ? U.minlen : -U.minlen);
	});
}
function isTreeEdge(d, B, V) {
	return d.hasEdge(B, V);
}
function isDescendant(d, B, V) {
	return V.low <= B.lim && B.lim <= V.lim;
}
function rank(d) {
	switch (d.graph().ranker) {
		case "network-simplex":
			networkSimplexRanker(d);
			break;
		case "tight-tree":
			tightTreeRanker(d);
			break;
		case "longest-path":
			longestPathRanker(d);
			break;
		default: networkSimplexRanker(d);
	}
}
var longestPathRanker = longestPath;
function tightTreeRanker(d) {
	longestPath(d), feasibleTree(d);
}
function networkSimplexRanker(d) {
	networkSimplex(d);
}
function run(d) {
	var B = addDummyNode(d, "root", {}, "_root"), V = treeDepths(d), H = max_default(values_default(V)) - 1, U = 2 * H + 1;
	d.graph().nestingRoot = B, forEach_default(d.edges(), function(B) {
		d.edge(B).minlen *= U;
	});
	var W = sumWeights(d) + 1;
	forEach_default(d.children(), function(G) {
		dfs(d, B, U, W, H, V, G);
	}), d.graph().nodeRankFactor = U;
}
function dfs(d, B, V, H, U, W, G) {
	var K = d.children(G);
	if (!K.length) {
		G !== B && d.setEdge(B, G, {
			weight: 0,
			minlen: V
		});
		return;
	}
	var q = addBorderNode$1(d, "_bt"), J = addBorderNode$1(d, "_bb"), Y = d.node(G);
	d.setParent(q, G), Y.borderTop = q, d.setParent(J, G), Y.borderBottom = J, forEach_default(K, function(K) {
		dfs(d, B, V, H, U, W, K);
		var Y = d.node(K), X = Y.borderTop ? Y.borderTop : K, Z = Y.borderBottom ? Y.borderBottom : K, Q = Y.borderTop ? H : 2 * H, $ = X === Z ? U - W[G] + 1 : 1;
		d.setEdge(q, X, {
			weight: Q,
			minlen: $,
			nestingEdge: !0
		}), d.setEdge(Z, J, {
			weight: Q,
			minlen: $,
			nestingEdge: !0
		});
	}), d.parent(G) || d.setEdge(B, q, {
		weight: 0,
		minlen: U + W[G]
	});
}
function treeDepths(d) {
	var B = {};
	function V(H, U) {
		var W = d.children(H);
		W && W.length && forEach_default(W, function(d) {
			V(d, U + 1);
		}), B[H] = U;
	}
	return forEach_default(d.children(), function(d) {
		V(d, 1);
	}), B;
}
function sumWeights(d) {
	return reduce_default(d.edges(), function(B, V) {
		return B + d.edge(V).weight;
	}, 0);
}
function cleanup(d) {
	var B = d.graph();
	d.removeNode(B.nestingRoot), delete B.nestingRoot, forEach_default(d.edges(), function(B) {
		d.edge(B).nestingEdge && d.removeEdge(B);
	});
}
function addSubgraphConstraints(d, B, V) {
	var H = {}, U;
	forEach_default(V, function(V) {
		for (var W = d.parent(V), G, K; W;) {
			if (G = d.parent(W), G ? (K = H[G], H[G] = W) : (K = U, U = W), K && K !== W) {
				B.setEdge(K, W);
				return;
			}
			W = G;
		}
	});
}
function buildLayerGraph(d, B, V) {
	var H = createRootNode(d), U = new Graph({ compound: !0 }).setGraph({ root: H }).setDefaultNodeLabel(function(B) {
		return d.node(B);
	});
	return forEach_default(d.nodes(), function(W) {
		var G = d.node(W), K = d.parent(W);
		(G.rank === B || G.minRank <= B && B <= G.maxRank) && (U.setNode(W), U.setParent(W, K || H), forEach_default(d[V](W), function(B) {
			var V = B.v === W ? B.w : B.v, H = U.edge(V, W), G = isUndefined_default(H) ? 0 : H.weight;
			U.setEdge(V, W, { weight: d.edge(B).weight + G });
		}), Object.prototype.hasOwnProperty.call(G, "minRank") && U.setNode(W, {
			borderLeft: G.borderLeft[B],
			borderRight: G.borderRight[B]
		}));
	}), U;
}
function createRootNode(d) {
	for (var B; d.hasNode(B = uniqueId_default("_root")););
	return B;
}
function crossCount(d, B) {
	for (var V = 0, H = 1; H < B.length; ++H) V += twoLayerCrossCount(d, B[H - 1], B[H]);
	return V;
}
function twoLayerCrossCount(d, B, V) {
	for (var H = zipObject_default(V, map_default(V, function(d, B) {
		return B;
	})), U = flatten_default(map_default(B, function(B) {
		return sortBy_default(map_default(d.outEdges(B), function(B) {
			return {
				pos: H[B.w],
				weight: d.edge(B).weight
			};
		}), "pos");
	})), W = 1; W < V.length;) W <<= 1;
	var G = 2 * W - 1;
	--W;
	var K = map_default(Array(G), function() {
		return 0;
	}), q = 0;
	return forEach_default(U.forEach(function(d) {
		var B = d.pos + W;
		K[B] += d.weight;
		for (var V = 0; B > 0;) B % 2 && (V += K[B + 1]), B = B - 1 >> 1, K[B] += d.weight;
		q += d.weight * V;
	})), q;
}
function initOrder(d) {
	var B = {}, V = filter_default(d.nodes(), function(B) {
		return !d.children(B).length;
	}), H = map_default(range_default(max_default(map_default(V, function(B) {
		return d.node(B).rank;
	})) + 1), function() {
		return [];
	});
	function U(V) {
		has_default(B, V) || (B[V] = !0, H[d.node(V).rank].push(V), forEach_default(d.successors(V), U));
	}
	return forEach_default(sortBy_default(V, function(B) {
		return d.node(B).rank;
	}), U), H;
}
function barycenter(d, B) {
	return map_default(B, function(B) {
		var V = d.inEdges(B);
		if (V.length) {
			var H = reduce_default(V, function(B, V) {
				var H = d.edge(V), U = d.node(V.v);
				return {
					sum: B.sum + H.weight * U.order,
					weight: B.weight + H.weight
				};
			}, {
				sum: 0,
				weight: 0
			});
			return {
				v: B,
				barycenter: H.sum / H.weight,
				weight: H.weight
			};
		} else return { v: B };
	});
}
function resolveConflicts(d, B) {
	var V = {};
	return forEach_default(d, function(d, B) {
		var H = V[d.v] = {
			indegree: 0,
			in: [],
			out: [],
			vs: [d.v],
			i: B
		};
		isUndefined_default(d.barycenter) || (H.barycenter = d.barycenter, H.weight = d.weight);
	}), forEach_default(B.edges(), function(d) {
		var B = V[d.v], H = V[d.w];
		!isUndefined_default(B) && !isUndefined_default(H) && (H.indegree++, B.out.push(V[d.w]));
	}), doResolveConflicts(filter_default(V, function(d) {
		return !d.indegree;
	}));
}
function doResolveConflicts(d) {
	var B = [];
	function V(d) {
		return function(B) {
			B.merged || (isUndefined_default(B.barycenter) || isUndefined_default(d.barycenter) || B.barycenter >= d.barycenter) && mergeEntries(d, B);
		};
	}
	function H(B) {
		return function(V) {
			V.in.push(B), --V.indegree === 0 && d.push(V);
		};
	}
	for (; d.length;) {
		var U = d.pop();
		B.push(U), forEach_default(U.in.reverse(), V(U)), forEach_default(U.out, H(U));
	}
	return map_default(filter_default(B, function(d) {
		return !d.merged;
	}), function(d) {
		return pick_default(d, [
			"vs",
			"i",
			"barycenter",
			"weight"
		]);
	});
}
function mergeEntries(d, B) {
	var V = 0, H = 0;
	d.weight && (V += d.barycenter * d.weight, H += d.weight), B.weight && (V += B.barycenter * B.weight, H += B.weight), d.vs = B.vs.concat(d.vs), d.barycenter = V / H, d.weight = H, d.i = Math.min(B.i, d.i), B.merged = !0;
}
function sort(d, B) {
	var V = partition(d, function(d) {
		return Object.prototype.hasOwnProperty.call(d, "barycenter");
	}), H = V.lhs, U = sortBy_default(V.rhs, function(d) {
		return -d.i;
	}), W = [], G = 0, K = 0, q = 0;
	H.sort(compareWithBias(!!B)), q = consumeUnsortable(W, U, q), forEach_default(H, function(d) {
		q += d.vs.length, W.push(d.vs), G += d.barycenter * d.weight, K += d.weight, q = consumeUnsortable(W, U, q);
	});
	var J = { vs: flatten_default(W) };
	return K && (J.barycenter = G / K, J.weight = K), J;
}
function consumeUnsortable(d, B, V) {
	for (var H; B.length && (H = last_default(B)).i <= V;) B.pop(), d.push(H.vs), V++;
	return V;
}
function compareWithBias(d) {
	return function(B, V) {
		return B.barycenter < V.barycenter ? -1 : B.barycenter > V.barycenter ? 1 : d ? V.i - B.i : B.i - V.i;
	};
}
function sortSubgraph(d, B, V, H) {
	var U = d.children(B), W = d.node(B), G = W ? W.borderLeft : void 0, K = W ? W.borderRight : void 0, q = {};
	G && (U = filter_default(U, function(d) {
		return d !== G && d !== K;
	}));
	var J = barycenter(d, U);
	forEach_default(J, function(B) {
		if (d.children(B.v).length) {
			var U = sortSubgraph(d, B.v, V, H);
			q[B.v] = U, Object.prototype.hasOwnProperty.call(U, "barycenter") && mergeBarycenters(B, U);
		}
	});
	var Y = resolveConflicts(J, V);
	expandSubgraphs(Y, q);
	var X = sort(Y, H);
	if (G && (X.vs = flatten_default([
		G,
		X.vs,
		K
	]), d.predecessors(G).length)) {
		var Z = d.node(d.predecessors(G)[0]), Q = d.node(d.predecessors(K)[0]);
		Object.prototype.hasOwnProperty.call(X, "barycenter") || (X.barycenter = 0, X.weight = 0), X.barycenter = (X.barycenter * X.weight + Z.order + Q.order) / (X.weight + 2), X.weight += 2;
	}
	return X;
}
function expandSubgraphs(d, B) {
	forEach_default(d, function(d) {
		d.vs = flatten_default(d.vs.map(function(d) {
			return B[d] ? B[d].vs : d;
		}));
	});
}
function mergeBarycenters(d, B) {
	isUndefined_default(d.barycenter) ? (d.barycenter = B.barycenter, d.weight = B.weight) : (d.barycenter = (d.barycenter * d.weight + B.barycenter * B.weight) / (d.weight + B.weight), d.weight += B.weight);
}
function order(d) {
	var B = maxRank(d), V = buildLayerGraphs(d, range_default(1, B + 1), "inEdges"), H = buildLayerGraphs(d, range_default(B - 1, -1, -1), "outEdges"), U = initOrder(d);
	assignOrder(d, U);
	for (var W = Infinity, G, K = 0, q = 0; q < 4; ++K, ++q) {
		sweepLayerGraphs(K % 2 ? V : H, K % 4 >= 2), U = buildLayerMatrix(d);
		var J = crossCount(d, U);
		J < W && (q = 0, G = cloneDeep_default(U), W = J);
	}
	assignOrder(d, G);
}
function buildLayerGraphs(d, B, V) {
	return map_default(B, function(B) {
		return buildLayerGraph(d, B, V);
	});
}
function sweepLayerGraphs(d, B) {
	var V = new Graph();
	forEach_default(d, function(d) {
		var H = d.graph().root, U = sortSubgraph(d, H, V, B);
		forEach_default(U.vs, function(B, V) {
			d.node(B).order = V;
		}), addSubgraphConstraints(d, V, U.vs);
	});
}
function assignOrder(d, B) {
	forEach_default(B, function(B) {
		forEach_default(B, function(B, V) {
			d.node(B).order = V;
		});
	});
}
function parentDummyChains(d) {
	var B = postorder(d);
	forEach_default(d.graph().dummyChains, function(V) {
		for (var H = d.node(V), U = H.edgeObj, W = findPath(d, B, U.v, U.w), G = W.path, K = W.lca, q = 0, J = G[q], Y = !0; V !== U.w;) {
			if (H = d.node(V), Y) {
				for (; (J = G[q]) !== K && d.node(J).maxRank < H.rank;) q++;
				J === K && (Y = !1);
			}
			if (!Y) {
				for (; q < G.length - 1 && d.node(J = G[q + 1]).minRank <= H.rank;) q++;
				J = G[q];
			}
			d.setParent(V, J), V = d.successors(V)[0];
		}
	});
}
function findPath(d, B, V, H) {
	var U = [], W = [], G = Math.min(B[V].low, B[H].low), K = Math.max(B[V].lim, B[H].lim), q = V, J;
	do
		q = d.parent(q), U.push(q);
	while (q && (B[q].low > G || K > B[q].lim));
	for (J = q, q = H; (q = d.parent(q)) !== J;) W.push(q);
	return {
		path: U.concat(W.reverse()),
		lca: J
	};
}
function postorder(d) {
	var B = {}, V = 0;
	function H(U) {
		var W = V;
		forEach_default(d.children(U), H), B[U] = {
			low: W,
			lim: V++
		};
	}
	return forEach_default(d.children(), H), B;
}
function findType1Conflicts(d, B) {
	var V = {};
	function H(B, H) {
		var U = 0, W = 0, G = B.length, K = last_default(H);
		return forEach_default(H, function(B, q) {
			var J = findOtherInnerSegmentNode(d, B), Y = J ? d.node(J).order : G;
			(J || B === K) && (forEach_default(H.slice(W, q + 1), function(B) {
				forEach_default(d.predecessors(B), function(H) {
					var W = d.node(H), G = W.order;
					(G < U || Y < G) && !(W.dummy && d.node(B).dummy) && addConflict(V, H, B);
				});
			}), W = q + 1, U = Y);
		}), H;
	}
	return reduce_default(B, H), V;
}
function findType2Conflicts(d, B) {
	var V = {};
	function H(B, H, U, W, G) {
		var K;
		forEach_default(range_default(H, U), function(H) {
			K = B[H], d.node(K).dummy && forEach_default(d.predecessors(K), function(B) {
				var H = d.node(B);
				H.dummy && (H.order < W || H.order > G) && addConflict(V, B, K);
			});
		});
	}
	function U(B, V) {
		var U = -1, W, G = 0;
		return forEach_default(V, function(K, q) {
			if (d.node(K).dummy === "border") {
				var J = d.predecessors(K);
				J.length && (W = d.node(J[0]).order, H(V, G, q, U, W), G = q, U = W);
			}
			H(V, G, V.length, W, B.length);
		}), V;
	}
	return reduce_default(B, U), V;
}
function findOtherInnerSegmentNode(d, B) {
	if (d.node(B).dummy) return find_default(d.predecessors(B), function(B) {
		return d.node(B).dummy;
	});
}
function addConflict(d, B, V) {
	if (B > V) {
		var H = B;
		B = V, V = H;
	}
	var U = d[B];
	U || (d[B] = U = {}), U[V] = !0;
}
function hasConflict(d, B, V) {
	if (B > V) {
		var H = B;
		B = V, V = H;
	}
	return !!d[B] && Object.prototype.hasOwnProperty.call(d[B], V);
}
function verticalAlignment(d, B, V, H) {
	var U = {}, W = {}, G = {};
	return forEach_default(B, function(d) {
		forEach_default(d, function(d, B) {
			U[d] = d, W[d] = d, G[d] = B;
		});
	}), forEach_default(B, function(d) {
		var B = -1;
		forEach_default(d, function(d) {
			var K = H(d);
			if (K.length) {
				K = sortBy_default(K, function(d) {
					return G[d];
				});
				for (var q = (K.length - 1) / 2, J = Math.floor(q), Y = Math.ceil(q); J <= Y; ++J) {
					var X = K[J];
					W[d] === d && B < G[X] && !hasConflict(V, d, X) && (W[X] = d, W[d] = U[d] = U[X], B = G[X]);
				}
			}
		});
	}), {
		root: U,
		align: W
	};
}
function horizontalCompaction(d, B, V, H, U) {
	var W = {}, G = buildBlockGraph(d, B, V, U), K = U ? "borderLeft" : "borderRight";
	function q(d, B) {
		for (var V = G.nodes(), H = V.pop(), U = {}; H;) U[H] ? d(H) : (U[H] = !0, V.push(H), V = V.concat(B(H))), H = V.pop();
	}
	function J(d) {
		W[d] = G.inEdges(d).reduce(function(d, B) {
			return Math.max(d, W[B.v] + G.edge(B));
		}, 0);
	}
	function Y(B) {
		var V = G.outEdges(B).reduce(function(d, B) {
			return Math.min(d, W[B.w] - G.edge(B));
		}, Infinity), H = d.node(B);
		V !== Infinity && H.borderType !== K && (W[B] = Math.max(W[B], V));
	}
	return q(J, G.predecessors.bind(G)), q(Y, G.successors.bind(G)), forEach_default(H, function(d) {
		W[d] = W[V[d]];
	}), W;
}
function buildBlockGraph(d, B, V, H) {
	var U = new Graph(), W = d.graph(), G = sep(W.nodesep, W.edgesep, H);
	return forEach_default(B, function(B) {
		var H;
		forEach_default(B, function(B) {
			var W = V[B];
			if (U.setNode(W), H) {
				var K = V[H], q = U.edge(K, W);
				U.setEdge(K, W, Math.max(G(d, B, H), q || 0));
			}
			H = B;
		});
	}), U;
}
function findSmallestWidthAlignment(d, B) {
	return minBy_default(values_default(B), function(B) {
		var V = -Infinity, H = Infinity;
		return forIn_default(B, function(B, U) {
			var W = width(d, U) / 2;
			V = Math.max(B + W, V), H = Math.min(B - W, H);
		}), V - H;
	});
}
function alignCoordinates(d, B) {
	var V = values_default(B), H = min_default(V), U = max_default(V);
	forEach_default(["u", "d"], function(V) {
		forEach_default(["l", "r"], function(W) {
			var G = V + W, K = d[G], q;
			if (K !== B) {
				var J = values_default(K);
				q = W === "l" ? H - min_default(J) : U - max_default(J), q && (d[G] = mapValues_default(K, function(d) {
					return d + q;
				}));
			}
		});
	});
}
function balance(d, B) {
	return mapValues_default(d.ul, function(V, H) {
		if (B) return d[B.toLowerCase()][H];
		var U = sortBy_default(map_default(d, H));
		return (U[1] + U[2]) / 2;
	});
}
function positionX(d) {
	var B = buildLayerMatrix(d), V = merge_default(findType1Conflicts(d, B), findType2Conflicts(d, B)), H = {}, U;
	return forEach_default(["u", "d"], function(W) {
		U = W === "u" ? B : values_default(B).reverse(), forEach_default(["l", "r"], function(B) {
			B === "r" && (U = map_default(U, function(d) {
				return values_default(d).reverse();
			}));
			var G = (W === "u" ? d.predecessors : d.successors).bind(d), K = verticalAlignment(d, U, V, G), q = horizontalCompaction(d, U, K.root, K.align, B === "r");
			B === "r" && (q = mapValues_default(q, function(d) {
				return -d;
			})), H[W + B] = q;
		});
	}), alignCoordinates(H, findSmallestWidthAlignment(d, H)), balance(H, d.graph().align);
}
function sep(d, B, V) {
	return function(H, U, W) {
		var G = H.node(U), K = H.node(W), q = 0, J;
		if (q += G.width / 2, Object.prototype.hasOwnProperty.call(G, "labelpos")) switch (G.labelpos.toLowerCase()) {
			case "l":
				J = -G.width / 2;
				break;
			case "r":
				J = G.width / 2;
				break;
		}
		if (J && (q += V ? J : -J), J = 0, q += (G.dummy ? B : d) / 2, q += (K.dummy ? B : d) / 2, q += K.width / 2, Object.prototype.hasOwnProperty.call(K, "labelpos")) switch (K.labelpos.toLowerCase()) {
			case "l":
				J = K.width / 2;
				break;
			case "r":
				J = -K.width / 2;
				break;
		}
		return J && (q += V ? J : -J), J = 0, q;
	};
}
function width(d, B) {
	return d.node(B).width;
}
function position(d) {
	d = asNonCompoundGraph(d), positionY(d), forOwn_default(positionX(d), function(B, V) {
		d.node(V).x = B;
	});
}
function positionY(d) {
	var B = buildLayerMatrix(d), V = d.graph().ranksep, H = 0;
	forEach_default(B, function(B) {
		var U = max_default(map_default(B, function(B) {
			return d.node(B).height;
		}));
		forEach_default(B, function(B) {
			d.node(B).y = H + U / 2;
		}), H += U + V;
	});
}
function layout(d, B) {
	var V = B && B.debugTiming ? time : notime;
	V("layout", () => {
		var B = V("  buildLayoutGraph", () => buildLayoutGraph(d));
		V("  runLayout", () => runLayout(B, V)), V("  updateInputGraph", () => updateInputGraph(d, B));
	});
}
function runLayout(d, B) {
	B("    makeSpaceForEdgeLabels", () => makeSpaceForEdgeLabels(d)), B("    removeSelfEdges", () => removeSelfEdges(d)), B("    acyclic", () => run$2(d)), B("    nestingGraph.run", () => run(d)), B("    rank", () => rank(asNonCompoundGraph(d))), B("    injectEdgeLabelProxies", () => injectEdgeLabelProxies(d)), B("    removeEmptyRanks", () => removeEmptyRanks(d)), B("    nestingGraph.cleanup", () => cleanup(d)), B("    normalizeRanks", () => normalizeRanks(d)), B("    assignRankMinMax", () => assignRankMinMax(d)), B("    removeEdgeLabelProxies", () => removeEdgeLabelProxies(d)), B("    normalize.run", () => run$1(d)), B("    parentDummyChains", () => parentDummyChains(d)), B("    addBorderSegments", () => addBorderSegments(d)), B("    order", () => order(d)), B("    insertSelfEdges", () => insertSelfEdges(d)), B("    adjustCoordinateSystem", () => adjust(d)), B("    position", () => position(d)), B("    positionSelfEdges", () => positionSelfEdges(d)), B("    removeBorderNodes", () => removeBorderNodes(d)), B("    normalize.undo", () => undo(d)), B("    fixupEdgeLabelCoords", () => fixupEdgeLabelCoords(d)), B("    undoCoordinateSystem", () => undo$1(d)), B("    translateGraph", () => translateGraph(d)), B("    assignNodeIntersects", () => assignNodeIntersects(d)), B("    reversePoints", () => reversePointsForReversedEdges(d)), B("    acyclic.undo", () => undo$2(d));
}
function updateInputGraph(d, B) {
	forEach_default(d.nodes(), function(V) {
		var H = d.node(V), U = B.node(V);
		H && (H.x = U.x, H.y = U.y, B.children(V).length && (H.width = U.width, H.height = U.height));
	}), forEach_default(d.edges(), function(V) {
		var H = d.edge(V), U = B.edge(V);
		H.points = U.points, Object.prototype.hasOwnProperty.call(U, "x") && (H.x = U.x, H.y = U.y);
	}), d.graph().width = B.graph().width, d.graph().height = B.graph().height;
}
var graphNumAttrs = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], graphDefaults = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "tb"
}, graphAttrs = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align"
], nodeNumAttrs = ["width", "height"], nodeDefaults = {
	width: 0,
	height: 0
}, edgeNumAttrs = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], edgeDefaults = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, edgeAttrs = ["labelpos"];
function buildLayoutGraph(d) {
	var B = new Graph({
		multigraph: !0,
		compound: !0
	}), V = canonicalize(d.graph());
	return B.setGraph(merge_default({}, graphDefaults, selectNumberAttrs(V, graphNumAttrs), pick_default(V, graphAttrs))), forEach_default(d.nodes(), function(V) {
		var H = canonicalize(d.node(V));
		B.setNode(V, defaults_default(selectNumberAttrs(H, nodeNumAttrs), nodeDefaults)), B.setParent(V, d.parent(V));
	}), forEach_default(d.edges(), function(V) {
		var H = canonicalize(d.edge(V));
		B.setEdge(V, merge_default({}, edgeDefaults, selectNumberAttrs(H, edgeNumAttrs), pick_default(H, edgeAttrs)));
	}), B;
}
function makeSpaceForEdgeLabels(d) {
	var B = d.graph();
	B.ranksep /= 2, forEach_default(d.edges(), function(V) {
		var H = d.edge(V);
		H.minlen *= 2, H.labelpos.toLowerCase() !== "c" && (B.rankdir === "TB" || B.rankdir === "BT" ? H.width += H.labeloffset : H.height += H.labeloffset);
	});
}
function injectEdgeLabelProxies(d) {
	forEach_default(d.edges(), function(B) {
		var V = d.edge(B);
		if (V.width && V.height) {
			var H = d.node(B.v);
			addDummyNode(d, "edge-proxy", {
				rank: (d.node(B.w).rank - H.rank) / 2 + H.rank,
				e: B
			}, "_ep");
		}
	});
}
function assignRankMinMax(d) {
	var B = 0;
	forEach_default(d.nodes(), function(V) {
		var H = d.node(V);
		H.borderTop && (H.minRank = d.node(H.borderTop).rank, H.maxRank = d.node(H.borderBottom).rank, B = max_default(B, H.maxRank));
	}), d.graph().maxRank = B;
}
function removeEdgeLabelProxies(d) {
	forEach_default(d.nodes(), function(B) {
		var V = d.node(B);
		V.dummy === "edge-proxy" && (d.edge(V.e).labelRank = V.rank, d.removeNode(B));
	});
}
function translateGraph(d) {
	var B = Infinity, V = 0, H = Infinity, U = 0, W = d.graph(), G = W.marginx || 0, K = W.marginy || 0;
	function q(d) {
		var W = d.x, G = d.y, K = d.width, q = d.height;
		B = Math.min(B, W - K / 2), V = Math.max(V, W + K / 2), H = Math.min(H, G - q / 2), U = Math.max(U, G + q / 2);
	}
	forEach_default(d.nodes(), function(B) {
		q(d.node(B));
	}), forEach_default(d.edges(), function(B) {
		var V = d.edge(B);
		Object.prototype.hasOwnProperty.call(V, "x") && q(V);
	}), B -= G, H -= K, forEach_default(d.nodes(), function(V) {
		var U = d.node(V);
		U.x -= B, U.y -= H;
	}), forEach_default(d.edges(), function(V) {
		var U = d.edge(V);
		forEach_default(U.points, function(d) {
			d.x -= B, d.y -= H;
		}), Object.prototype.hasOwnProperty.call(U, "x") && (U.x -= B), Object.prototype.hasOwnProperty.call(U, "y") && (U.y -= H);
	}), W.width = V - B + G, W.height = U - H + K;
}
function assignNodeIntersects(d) {
	forEach_default(d.edges(), function(B) {
		var V = d.edge(B), H = d.node(B.v), U = d.node(B.w), W, G;
		V.points ? (W = V.points[0], G = V.points[V.points.length - 1]) : (V.points = [], W = U, G = H), V.points.unshift(intersectRect(H, W)), V.points.push(intersectRect(U, G));
	});
}
function fixupEdgeLabelCoords(d) {
	forEach_default(d.edges(), function(B) {
		var V = d.edge(B);
		if (Object.prototype.hasOwnProperty.call(V, "x")) switch ((V.labelpos === "l" || V.labelpos === "r") && (V.width -= V.labeloffset), V.labelpos) {
			case "l":
				V.x -= V.width / 2 + V.labeloffset;
				break;
			case "r":
				V.x += V.width / 2 + V.labeloffset;
				break;
		}
	});
}
function reversePointsForReversedEdges(d) {
	forEach_default(d.edges(), function(B) {
		var V = d.edge(B);
		V.reversed && V.points.reverse();
	});
}
function removeBorderNodes(d) {
	forEach_default(d.nodes(), function(B) {
		if (d.children(B).length) {
			var V = d.node(B), H = d.node(V.borderTop), U = d.node(V.borderBottom), W = d.node(last_default(V.borderLeft)), G = d.node(last_default(V.borderRight));
			V.width = Math.abs(G.x - W.x), V.height = Math.abs(U.y - H.y), V.x = W.x + V.width / 2, V.y = H.y + V.height / 2;
		}
	}), forEach_default(d.nodes(), function(B) {
		d.node(B).dummy === "border" && d.removeNode(B);
	});
}
function removeSelfEdges(d) {
	forEach_default(d.edges(), function(B) {
		if (B.v === B.w) {
			var V = d.node(B.v);
			V.selfEdges ||= [], V.selfEdges.push({
				e: B,
				label: d.edge(B)
			}), d.removeEdge(B);
		}
	});
}
function insertSelfEdges(d) {
	forEach_default(buildLayerMatrix(d), function(B) {
		var V = 0;
		forEach_default(B, function(B, H) {
			var U = d.node(B);
			U.order = H + V, forEach_default(U.selfEdges, function(B) {
				addDummyNode(d, "selfedge", {
					width: B.label.width,
					height: B.label.height,
					rank: U.rank,
					order: H + ++V,
					e: B.e,
					label: B.label
				}, "_se");
			}), delete U.selfEdges;
		});
	});
}
function positionSelfEdges(d) {
	forEach_default(d.nodes(), function(B) {
		var V = d.node(B);
		if (V.dummy === "selfedge") {
			var H = d.node(V.e.v), U = H.x + H.width / 2, W = H.y, G = V.x - U, K = H.height / 2;
			d.setEdge(V.e, V.label), d.removeNode(B), V.label.points = [
				{
					x: U + 2 * G / 3,
					y: W - K
				},
				{
					x: U + 5 * G / 6,
					y: W - K
				},
				{
					x: U + G,
					y: W
				},
				{
					x: U + 5 * G / 6,
					y: W + K
				},
				{
					x: U + 2 * G / 3,
					y: W + K
				}
			], V.label.x = V.x, V.label.y = V.y;
		}
	});
}
function selectNumberAttrs(d, B) {
	return mapValues_default(pick_default(d, B), Number);
}
function canonicalize(d) {
	var B = {};
	return forEach_default(d, function(d, V) {
		B[V.toLowerCase()] = d;
	}), B;
}
export { layout as t };
