import { E as _baseRest_default, P as constant_default, R as isFunction_default, t as isArrayLikeObject_default } from "./isArrayLikeObject-DKHowMnG.js";
import { D as keys_default, S as _baseFlatten_default, a as filter_default, i as values_default, n as reduce_default, r as isUndefined_default, s as forEach_default, t as _baseUniq_default } from "./_baseUniq-C5UuzJkR.js";
import { t as isEmpty_default } from "./isEmpty-D0b8WX4x.js";
var union_default = _baseRest_default(function(e) {
	return _baseUniq_default(_baseFlatten_default(e, 1, isArrayLikeObject_default, !0));
}), DEFAULT_EDGE_NAME = "\0", GRAPH_NODE = "\0", EDGE_KEY_DELIM = "", Graph = class {
	constructor(e = {}) {
		this._isDirected = Object.prototype.hasOwnProperty.call(e, "directed") ? e.directed : !0, this._isMultigraph = Object.prototype.hasOwnProperty.call(e, "multigraph") ? e.multigraph : !1, this._isCompound = Object.prototype.hasOwnProperty.call(e, "compound") ? e.compound : !1, this._label = void 0, this._defaultNodeLabelFn = constant_default(void 0), this._defaultEdgeLabelFn = constant_default(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[GRAPH_NODE] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
	}
	isDirected() {
		return this._isDirected;
	}
	isMultigraph() {
		return this._isMultigraph;
	}
	isCompound() {
		return this._isCompound;
	}
	setGraph(e) {
		return this._label = e, this;
	}
	graph() {
		return this._label;
	}
	setDefaultNodeLabel(e) {
		return isFunction_default(e) || (e = constant_default(e)), this._defaultNodeLabelFn = e, this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return keys_default(this._nodes);
	}
	sources() {
		var e = this;
		return filter_default(this.nodes(), function(g) {
			return isEmpty_default(e._in[g]);
		});
	}
	sinks() {
		var e = this;
		return filter_default(this.nodes(), function(g) {
			return isEmpty_default(e._out[g]);
		});
	}
	setNodes(e, g) {
		var _ = arguments, v = this;
		return forEach_default(e, function(e) {
			_.length > 1 ? v.setNode(e, g) : v.setNode(e);
		}), this;
	}
	setNode(e, g) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = g), this) : (this._nodes[e] = arguments.length > 1 ? g : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = GRAPH_NODE, this._children[e] = {}, this._children[GRAPH_NODE][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
	}
	node(e) {
		return this._nodes[e];
	}
	hasNode(e) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e);
	}
	removeNode(e) {
		if (Object.prototype.hasOwnProperty.call(this._nodes, e)) {
			var g = (e) => this.removeEdge(this._edgeObjs[e]);
			delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], forEach_default(this.children(e), (e) => {
				this.setParent(e);
			}), delete this._children[e]), forEach_default(keys_default(this._in[e]), g), delete this._in[e], delete this._preds[e], forEach_default(keys_default(this._out[e]), g), delete this._out[e], delete this._sucs[e], --this._nodeCount;
		}
		return this;
	}
	setParent(e, g) {
		if (!this._isCompound) throw Error("Cannot set parent in a non-compound graph");
		if (isUndefined_default(g)) g = GRAPH_NODE;
		else {
			g += "";
			for (var _ = g; !isUndefined_default(_); _ = this.parent(_)) if (_ === e) throw Error("Setting " + g + " as parent of " + e + " would create a cycle");
			this.setNode(g);
		}
		return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = g, this._children[g][e] = !0, this;
	}
	_removeFromParentsChildList(e) {
		delete this._children[this._parent[e]][e];
	}
	parent(e) {
		if (this._isCompound) {
			var g = this._parent[e];
			if (g !== GRAPH_NODE) return g;
		}
	}
	children(e) {
		if (isUndefined_default(e) && (e = GRAPH_NODE), this._isCompound) {
			var g = this._children[e];
			if (g) return keys_default(g);
		} else if (e === GRAPH_NODE) return this.nodes();
		else if (this.hasNode(e)) return [];
	}
	predecessors(e) {
		var g = this._preds[e];
		if (g) return keys_default(g);
	}
	successors(e) {
		var g = this._sucs[e];
		if (g) return keys_default(g);
	}
	neighbors(e) {
		var g = this.predecessors(e);
		if (g) return union_default(g, this.successors(e));
	}
	isLeaf(e) {
		return (this.isDirected() ? this.successors(e) : this.neighbors(e)).length === 0;
	}
	filterNodes(e) {
		var g = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		g.setGraph(this.graph());
		var _ = this;
		forEach_default(this._nodes, function(_, v) {
			e(v) && g.setNode(v, _);
		}), forEach_default(this._edgeObjs, function(e) {
			g.hasNode(e.v) && g.hasNode(e.w) && g.setEdge(e, _.edge(e));
		});
		var v = {};
		function y(e) {
			var b = _.parent(e);
			return b === void 0 || g.hasNode(b) ? (v[e] = b, b) : b in v ? v[b] : y(b);
		}
		return this._isCompound && forEach_default(g.nodes(), function(e) {
			g.setParent(e, y(e));
		}), g;
	}
	setDefaultEdgeLabel(e) {
		return isFunction_default(e) || (e = constant_default(e)), this._defaultEdgeLabelFn = e, this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return values_default(this._edgeObjs);
	}
	setPath(e, g) {
		var _ = this, v = arguments;
		return reduce_default(e, function(e, y) {
			return v.length > 1 ? _.setEdge(e, y, g) : _.setEdge(e, y), y;
		}), this;
	}
	setEdge() {
		var e, g, _, v, y = !1, b = arguments[0];
		typeof b == "object" && b && "v" in b ? (e = b.v, g = b.w, _ = b.name, arguments.length === 2 && (v = arguments[1], y = !0)) : (e = b, g = arguments[1], _ = arguments[3], arguments.length > 2 && (v = arguments[2], y = !0)), e = "" + e, g = "" + g, isUndefined_default(_) || (_ = "" + _);
		var x = edgeArgsToId(this._isDirected, e, g, _);
		if (Object.prototype.hasOwnProperty.call(this._edgeLabels, x)) return y && (this._edgeLabels[x] = v), this;
		if (!isUndefined_default(_) && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(e), this.setNode(g), this._edgeLabels[x] = y ? v : this._defaultEdgeLabelFn(e, g, _);
		var S = edgeArgsToObj(this._isDirected, e, g, _);
		return e = S.v, g = S.w, Object.freeze(S), this._edgeObjs[x] = S, incrementOrInitEntry(this._preds[g], e), incrementOrInitEntry(this._sucs[e], g), this._in[g][x] = S, this._out[e][x] = S, this._edgeCount++, this;
	}
	edge(e, g, _) {
		var v = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, e, g, _);
		return this._edgeLabels[v];
	}
	hasEdge(e, g, _) {
		var v = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, e, g, _);
		return Object.prototype.hasOwnProperty.call(this._edgeLabels, v);
	}
	removeEdge(e, g, _) {
		var v = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, e, g, _), y = this._edgeObjs[v];
		return y && (e = y.v, g = y.w, delete this._edgeLabels[v], delete this._edgeObjs[v], decrementOrRemoveEntry(this._preds[g], e), decrementOrRemoveEntry(this._sucs[e], g), delete this._in[g][v], delete this._out[e][v], this._edgeCount--), this;
	}
	inEdges(e, g) {
		var _ = this._in[e];
		if (_) {
			var v = values_default(_);
			return g ? filter_default(v, function(e) {
				return e.v === g;
			}) : v;
		}
	}
	outEdges(e, g) {
		var _ = this._out[e];
		if (_) {
			var v = values_default(_);
			return g ? filter_default(v, function(e) {
				return e.w === g;
			}) : v;
		}
	}
	nodeEdges(e, g) {
		var _ = this.inEdges(e, g);
		if (_) return _.concat(this.outEdges(e, g));
	}
};
Graph.prototype._nodeCount = 0, Graph.prototype._edgeCount = 0;
function incrementOrInitEntry(e, g) {
	e[g] ? e[g]++ : e[g] = 1;
}
function decrementOrRemoveEntry(e, g) {
	--e[g] || delete e[g];
}
function edgeArgsToId(e, g, _, v) {
	var y = "" + g, b = "" + _;
	if (!e && y > b) {
		var x = y;
		y = b, b = x;
	}
	return y + EDGE_KEY_DELIM + b + EDGE_KEY_DELIM + (isUndefined_default(v) ? DEFAULT_EDGE_NAME : v);
}
function edgeArgsToObj(e, g, _, v) {
	var y = "" + g, b = "" + _;
	if (!e && y > b) {
		var x = y;
		y = b, b = x;
	}
	var S = {
		v: y,
		w: b
	};
	return v && (S.name = v), S;
}
function edgeObjToId(e, g) {
	return edgeArgsToId(e, g.v, g.w, g.name);
}
export { Graph as t };
