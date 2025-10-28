function count(e) {
	var d = 0, f = e.children, p = f && f.length;
	if (!p) d = 1;
	else for (; --p >= 0;) d += f[p].value;
	e.value = d;
}
function count_default() {
	return this.eachAfter(count);
}
function each_default(e, d) {
	let f = -1;
	for (let p of this) e.call(d, p, ++f, this);
	return this;
}
function eachBefore_default(e, d) {
	for (var f = this, p = [f], m, h, g = -1; f = p.pop();) if (e.call(d, f, ++g, this), m = f.children) for (h = m.length - 1; h >= 0; --h) p.push(m[h]);
	return this;
}
function eachAfter_default(e, d) {
	for (var f = this, p = [f], m = [], h, g, _, v = -1; f = p.pop();) if (m.push(f), h = f.children) for (g = 0, _ = h.length; g < _; ++g) p.push(h[g]);
	for (; f = m.pop();) e.call(d, f, ++v, this);
	return this;
}
function find_default(e, d) {
	let f = -1;
	for (let p of this) if (e.call(d, p, ++f, this)) return p;
}
function sum_default(e) {
	return this.eachAfter(function(d) {
		for (var f = +e(d.data) || 0, p = d.children, m = p && p.length; --m >= 0;) f += p[m].value;
		d.value = f;
	});
}
function sort_default(e) {
	return this.eachBefore(function(d) {
		d.children && d.children.sort(e);
	});
}
function path_default(e) {
	for (var d = this, f = leastCommonAncestor(d, e), p = [d]; d !== f;) d = d.parent, p.push(d);
	for (var m = p.length; e !== f;) p.splice(m, 0, e), e = e.parent;
	return p;
}
function leastCommonAncestor(e, d) {
	if (e === d) return e;
	var f = e.ancestors(), p = d.ancestors(), m = null;
	for (e = f.pop(), d = p.pop(); e === d;) m = e, e = f.pop(), d = p.pop();
	return m;
}
function ancestors_default() {
	for (var e = this, d = [e]; e = e.parent;) d.push(e);
	return d;
}
function descendants_default() {
	return Array.from(this);
}
function leaves_default() {
	var e = [];
	return this.eachBefore(function(d) {
		d.children || e.push(d);
	}), e;
}
function links_default() {
	var e = this, d = [];
	return e.each(function(f) {
		f !== e && d.push({
			source: f.parent,
			target: f
		});
	}), d;
}
function* iterator_default() {
	var e = this, d, f = [e], p, m, h;
	do
		for (d = f.reverse(), f = []; e = d.pop();) if (yield e, p = e.children) for (m = 0, h = p.length; m < h; ++m) f.push(p[m]);
	while (f.length);
}
function hierarchy(e, d) {
	e instanceof Map ? (e = [void 0, e], d === void 0 && (d = mapChildren)) : d === void 0 && (d = objectChildren);
	for (var f = new Node(e), p, m = [f], h, g, _, v; p = m.pop();) if ((g = d(p.data)) && (v = (g = Array.from(g)).length)) for (p.children = g, _ = v - 1; _ >= 0; --_) m.push(h = g[_] = new Node(g[_])), h.parent = p, h.depth = p.depth + 1;
	return f.eachBefore(computeHeight);
}
function node_copy() {
	return hierarchy(this).eachBefore(copyData);
}
function objectChildren(e) {
	return e.children;
}
function mapChildren(e) {
	return Array.isArray(e) ? e[1] : null;
}
function copyData(e) {
	e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function computeHeight(e) {
	var d = 0;
	do
		e.height = d;
	while ((e = e.parent) && e.height < ++d);
}
function Node(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
Node.prototype = hierarchy.prototype = {
	constructor: Node,
	count: count_default,
	each: each_default,
	eachAfter: eachAfter_default,
	eachBefore: eachBefore_default,
	find: find_default,
	sum: sum_default,
	sort: sort_default,
	path: path_default,
	ancestors: ancestors_default,
	descendants: descendants_default,
	leaves: leaves_default,
	links: links_default,
	copy: node_copy,
	[Symbol.iterator]: iterator_default
};
function optional(e) {
	return e == null ? null : required(e);
}
function required(e) {
	if (typeof e != "function") throw Error();
	return e;
}
function constantZero() {
	return 0;
}
function constant_default(e) {
	return function() {
		return e;
	};
}
function round_default(e) {
	e.x0 = Math.round(e.x0), e.y0 = Math.round(e.y0), e.x1 = Math.round(e.x1), e.y1 = Math.round(e.y1);
}
function dice_default(e, d, f, p, m) {
	for (var h = e.children, g, _ = -1, v = h.length, y = e.value && (p - d) / e.value; ++_ < v;) g = h[_], g.y0 = f, g.y1 = m, g.x0 = d, g.x1 = d += g.value * y;
}
function slice_default(e, d, f, p, m) {
	for (var h = e.children, g, _ = -1, v = h.length, y = e.value && (m - f) / e.value; ++_ < v;) g = h[_], g.x0 = d, g.x1 = p, g.y0 = f, g.y1 = f += g.value * y;
}
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(e, d, f, p, m, h) {
	for (var g = [], _ = d.children, v, y, b = 0, x = 0, S = _.length, C, w, T = d.value, E, D, O, k, A, j, M; b < S;) {
		C = m - f, w = h - p;
		do
			E = _[x++].value;
		while (!E && x < S);
		for (D = O = E, j = Math.max(w / C, C / w) / (T * e), M = E * E * j, A = Math.max(O / M, M / D); x < S; ++x) {
			if (E += y = _[x].value, y < D && (D = y), y > O && (O = y), M = E * E * j, k = Math.max(O / M, M / D), k > A) {
				E -= y;
				break;
			}
			A = k;
		}
		g.push(v = {
			value: E,
			dice: C < w,
			children: _.slice(b, x)
		}), v.dice ? dice_default(v, f, p, m, T ? p += w * E / T : h) : slice_default(v, f, p, T ? f += C * E / T : m, h), T -= E, b = x;
	}
	return g;
}
var squarify_default = (function e(d) {
	function f(e, f, p, m, h) {
		squarifyRatio(d, e, f, p, m, h);
	}
	return f.ratio = function(d) {
		return e((d = +d) > 1 ? d : 1);
	}, f;
})(phi);
function treemap_default() {
	var e = squarify_default, d = !1, f = 1, p = 1, m = [0], h = constantZero, g = constantZero, _ = constantZero, v = constantZero, y = constantZero;
	function b(e) {
		return e.x0 = e.y0 = 0, e.x1 = f, e.y1 = p, e.eachBefore(x), m = [0], d && e.eachBefore(round_default), e;
	}
	function x(d) {
		var f = m[d.depth], p = d.x0 + f, b = d.y0 + f, x = d.x1 - f, S = d.y1 - f;
		x < p && (p = x = (p + x) / 2), S < b && (b = S = (b + S) / 2), d.x0 = p, d.y0 = b, d.x1 = x, d.y1 = S, d.children && (f = m[d.depth + 1] = h(d) / 2, p += y(d) - f, b += g(d) - f, x -= _(d) - f, S -= v(d) - f, x < p && (p = x = (p + x) / 2), S < b && (b = S = (b + S) / 2), e(d, p, b, x, S));
	}
	return b.round = function(e) {
		return arguments.length ? (d = !!e, b) : d;
	}, b.size = function(e) {
		return arguments.length ? (f = +e[0], p = +e[1], b) : [f, p];
	}, b.tile = function(d) {
		return arguments.length ? (e = required(d), b) : e;
	}, b.padding = function(e) {
		return arguments.length ? b.paddingInner(e).paddingOuter(e) : b.paddingInner();
	}, b.paddingInner = function(e) {
		return arguments.length ? (h = typeof e == "function" ? e : constant_default(+e), b) : h;
	}, b.paddingOuter = function(e) {
		return arguments.length ? b.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e) : b.paddingTop();
	}, b.paddingTop = function(e) {
		return arguments.length ? (g = typeof e == "function" ? e : constant_default(+e), b) : g;
	}, b.paddingRight = function(e) {
		return arguments.length ? (_ = typeof e == "function" ? e : constant_default(+e), b) : _;
	}, b.paddingBottom = function(e) {
		return arguments.length ? (v = typeof e == "function" ? e : constant_default(+e), b) : v;
	}, b.paddingLeft = function(e) {
		return arguments.length ? (y = typeof e == "function" ? e : constant_default(+e), b) : y;
	}, b;
}
export { slice_default as a, constantZero as c, Node as d, computeHeight as f, squarify_default as i, constant_default as l, phi as n, dice_default as o, hierarchy as p, squarifyRatio as r, round_default as s, treemap_default as t, optional as u };
