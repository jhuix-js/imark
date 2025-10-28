import { r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, G as setupGraphViewbox, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, s as common_default, u as defaultConfig2, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { n as ordinal } from "./ordinal-CN4lqhtQ.js";
import "./timer-Bp1bAW5T.js";
import "./init-ULMCeUqd.js";
import { t as colors_default } from "./colors-BDBoy-xL.js";
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function max(t, l) {
	let u;
	if (l === void 0) for (let l of t) l != null && (u < l || u === void 0 && l >= l) && (u = l);
	else {
		let d = -1;
		for (let f of t) (f = l(f, ++d, t)) != null && (u < f || u === void 0 && f >= f) && (u = f);
	}
	return u;
}
function min(t, l) {
	let u;
	if (l === void 0) for (let l of t) l != null && (u > l || u === void 0 && l >= l) && (u = l);
	else {
		let d = -1;
		for (let f of t) (f = l(f, ++d, t)) != null && (u > f || u === void 0 && f >= f) && (u = f);
	}
	return u;
}
function sum(t, l) {
	let u = 0;
	if (l === void 0) for (let l of t) (l = +l) && (u += l);
	else {
		let d = -1;
		for (let f of t) (f = +l(f, ++d, t)) && (u += f);
	}
	return u;
}
function targetDepth(t) {
	return t.target.depth;
}
function left(t) {
	return t.depth;
}
function right(t, l) {
	return l - 1 - t.height;
}
function justify(t, l) {
	return t.sourceLinks.length ? t.depth : l - 1;
}
function center(t) {
	return t.targetLinks.length ? t.depth : t.sourceLinks.length ? min(t.sourceLinks, targetDepth) - 1 : 0;
}
function constant(t) {
	return function() {
		return t;
	};
}
function ascendingSourceBreadth(t, l) {
	return ascendingBreadth(t.source, l.source) || t.index - l.index;
}
function ascendingTargetBreadth(t, l) {
	return ascendingBreadth(t.target, l.target) || t.index - l.index;
}
function ascendingBreadth(t, l) {
	return t.y0 - l.y0;
}
function value(t) {
	return t.value;
}
function defaultId(t) {
	return t.index;
}
function defaultNodes(t) {
	return t.nodes;
}
function defaultLinks(t) {
	return t.links;
}
function find(t, l) {
	let u = t.get(l);
	if (!u) throw Error("missing: " + l);
	return u;
}
function computeLinkBreadths({ nodes: t }) {
	for (let l of t) {
		let t = l.y0, u = t;
		for (let u of l.sourceLinks) u.y0 = t + u.width / 2, t += u.width;
		for (let t of l.targetLinks) t.y1 = u + t.width / 2, u += t.width;
	}
}
function Sankey() {
	let t = 0, l = 0, u = 1, d = 1, f = 24, p = 8, m, h = defaultId, g = justify, _, v, b = defaultNodes, S = defaultLinks, C = 6;
	function w() {
		let t = {
			nodes: b.apply(null, arguments),
			links: S.apply(null, arguments)
		};
		return T(t), k(t), A(t), j(t), W(t), computeLinkBreadths(t), t;
	}
	w.update = function(t) {
		return computeLinkBreadths(t), t;
	}, w.nodeId = function(t) {
		return arguments.length ? (h = typeof t == "function" ? t : constant(t), w) : h;
	}, w.nodeAlign = function(t) {
		return arguments.length ? (g = typeof t == "function" ? t : constant(t), w) : g;
	}, w.nodeSort = function(t) {
		return arguments.length ? (_ = t, w) : _;
	}, w.nodeWidth = function(t) {
		return arguments.length ? (f = +t, w) : f;
	}, w.nodePadding = function(t) {
		return arguments.length ? (p = m = +t, w) : p;
	}, w.nodes = function(t) {
		return arguments.length ? (b = typeof t == "function" ? t : constant(t), w) : b;
	}, w.links = function(t) {
		return arguments.length ? (S = typeof t == "function" ? t : constant(t), w) : S;
	}, w.linkSort = function(t) {
		return arguments.length ? (v = t, w) : v;
	}, w.size = function(f) {
		return arguments.length ? (t = l = 0, u = +f[0], d = +f[1], w) : [u - t, d - l];
	}, w.extent = function(f) {
		return arguments.length ? (t = +f[0][0], u = +f[1][0], l = +f[0][1], d = +f[1][1], w) : [[t, l], [u, d]];
	}, w.iterations = function(t) {
		return arguments.length ? (C = +t, w) : C;
	};
	function T({ nodes: t, links: l }) {
		for (let [l, u] of t.entries()) u.index = l, u.sourceLinks = [], u.targetLinks = [];
		let u = new Map(t.map((l, u) => [h(l, u, t), l]));
		for (let [t, d] of l.entries()) {
			d.index = t;
			let { source: l, target: f } = d;
			typeof l != "object" && (l = d.source = find(u, l)), typeof f != "object" && (f = d.target = find(u, f)), l.sourceLinks.push(d), f.targetLinks.push(d);
		}
		if (v != null) for (let { sourceLinks: l, targetLinks: u } of t) l.sort(v), u.sort(v);
	}
	function k({ nodes: t }) {
		for (let l of t) l.value = l.fixedValue === void 0 ? Math.max(sum(l.sourceLinks, value), sum(l.targetLinks, value)) : l.fixedValue;
	}
	function A({ nodes: t }) {
		let l = t.length, u = new Set(t), d = /* @__PURE__ */ new Set(), f = 0;
		for (; u.size;) {
			for (let t of u) {
				t.depth = f;
				for (let { target: l } of t.sourceLinks) d.add(l);
			}
			if (++f > l) throw Error("circular link");
			u = d, d = /* @__PURE__ */ new Set();
		}
	}
	function j({ nodes: t }) {
		let l = t.length, u = new Set(t), d = /* @__PURE__ */ new Set(), f = 0;
		for (; u.size;) {
			for (let t of u) {
				t.height = f;
				for (let { source: l } of t.targetLinks) d.add(l);
			}
			if (++f > l) throw Error("circular link");
			u = d, d = /* @__PURE__ */ new Set();
		}
	}
	function N({ nodes: l }) {
		let d = max(l, (t) => t.depth) + 1, p = (u - t - f) / (d - 1), m = Array(d);
		for (let u of l) {
			let l = Math.max(0, Math.min(d - 1, Math.floor(g.call(null, u, d))));
			u.layer = l, u.x0 = t + l * p, u.x1 = u.x0 + f, m[l] ? m[l].push(u) : m[l] = [u];
		}
		if (_) for (let t of m) t.sort(_);
		return m;
	}
	function U(t) {
		let u = min(t, (t) => (d - l - (t.length - 1) * m) / sum(t, value));
		for (let f of t) {
			let t = l;
			for (let l of f) {
				l.y0 = t, l.y1 = t + l.value * u, t = l.y1 + m;
				for (let t of l.sourceLinks) t.width = t.value * u;
			}
			t = (d - t + m) / (f.length + 1);
			for (let l = 0; l < f.length; ++l) {
				let u = f[l];
				u.y0 += t * (l + 1), u.y1 += t * (l + 1);
			}
			Z(f);
		}
	}
	function W(t) {
		let u = N(t);
		m = Math.min(p, (d - l) / (max(u, (t) => t.length) - 1)), U(u);
		for (let t = 0; t < C; ++t) {
			let l = .99 ** t, d = Math.max(1 - l, (t + 1) / C);
			K(u, l, d), G(u, l, d);
		}
	}
	function G(t, l, u) {
		for (let d = 1, f = t.length; d < f; ++d) {
			let f = t[d];
			for (let t of f) {
				let u = 0, d = 0;
				for (let { source: l, value: f } of t.targetLinks) {
					let p = f * (t.layer - l.layer);
					u += Q(l, t) * p, d += p;
				}
				if (!(d > 0)) continue;
				let f = (u / d - t.y0) * l;
				t.y0 += f, t.y1 += f, X(t);
			}
			_ === void 0 && f.sort(ascendingBreadth), q(f, u);
		}
	}
	function K(t, l, u) {
		for (let d = t.length - 2; d >= 0; --d) {
			let f = t[d];
			for (let t of f) {
				let u = 0, d = 0;
				for (let { target: l, value: f } of t.sourceLinks) {
					let p = f * (l.layer - t.layer);
					u += $(t, l) * p, d += p;
				}
				if (!(d > 0)) continue;
				let f = (u / d - t.y0) * l;
				t.y0 += f, t.y1 += f, X(t);
			}
			_ === void 0 && f.sort(ascendingBreadth), q(f, u);
		}
	}
	function q(t, u) {
		let f = t.length >> 1, p = t[f];
		Y(t, p.y0 - m, f - 1, u), J(t, p.y1 + m, f + 1, u), Y(t, d, t.length - 1, u), J(t, l, 0, u);
	}
	function J(t, l, u, d) {
		for (; u < t.length; ++u) {
			let f = t[u], p = (l - f.y0) * d;
			p > 1e-6 && (f.y0 += p, f.y1 += p), l = f.y1 + m;
		}
	}
	function Y(t, l, u, d) {
		for (; u >= 0; --u) {
			let f = t[u], p = (f.y1 - l) * d;
			p > 1e-6 && (f.y0 -= p, f.y1 -= p), l = f.y0 - m;
		}
	}
	function X({ sourceLinks: t, targetLinks: l }) {
		if (v === void 0) {
			for (let { source: { sourceLinks: t } } of l) t.sort(ascendingTargetBreadth);
			for (let { target: { targetLinks: l } } of t) l.sort(ascendingSourceBreadth);
		}
	}
	function Z(t) {
		if (v === void 0) for (let { sourceLinks: l, targetLinks: u } of t) l.sort(ascendingTargetBreadth), u.sort(ascendingSourceBreadth);
	}
	function Q(t, l) {
		let u = t.y0 - (t.sourceLinks.length - 1) * m / 2;
		for (let { target: d, width: f } of t.sourceLinks) {
			if (d === l) break;
			u += f + m;
		}
		for (let { source: d, width: f } of l.targetLinks) {
			if (d === t) break;
			u -= f;
		}
		return u;
	}
	function $(t, l) {
		let u = l.y0 - (l.targetLinks.length - 1) * m / 2;
		for (let { source: d, width: f } of l.targetLinks) {
			if (d === t) break;
			u += f + m;
		}
		for (let { target: d, width: f } of t.sourceLinks) {
			if (d === l) break;
			u -= f;
		}
		return u;
	}
	return w;
}
var pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function Path() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function path() {
	return new Path();
}
Path.prototype = path.prototype = {
	constructor: Path,
	moveTo: function(t, l) {
		this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +l);
	},
	closePath: function() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	},
	lineTo: function(t, l) {
		this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +l);
	},
	quadraticCurveTo: function(t, l, u, d) {
		this._ += "Q" + +t + "," + +l + "," + (this._x1 = +u) + "," + (this._y1 = +d);
	},
	bezierCurveTo: function(t, l, u, d, f, p) {
		this._ += "C" + +t + "," + +l + "," + +u + "," + +d + "," + (this._x1 = +f) + "," + (this._y1 = +p);
	},
	arcTo: function(t, l, u, d, f) {
		t = +t, l = +l, u = +u, d = +d, f = +f;
		var p = this._x1, m = this._y1, h = u - t, g = d - l, _ = p - t, v = m - l, b = _ * _ + v * v;
		if (f < 0) throw Error("negative radius: " + f);
		if (this._x1 === null) this._ += "M" + (this._x1 = t) + "," + (this._y1 = l);
		else if (b > epsilon) if (!(Math.abs(v * h - g * _) > epsilon) || !f) this._ += "L" + (this._x1 = t) + "," + (this._y1 = l);
		else {
			var S = u - p, C = d - m, w = h * h + g * g, T = S * S + C * C, E = Math.sqrt(w), D = Math.sqrt(b), O = f * Math.tan((pi - Math.acos((w + b - T) / (2 * E * D))) / 2), k = O / D, A = O / E;
			Math.abs(k - 1) > epsilon && (this._ += "L" + (t + k * _) + "," + (l + k * v)), this._ += "A" + f + "," + f + ",0,0," + +(v * S > _ * C) + "," + (this._x1 = t + A * h) + "," + (this._y1 = l + A * g);
		}
	},
	arc: function(t, l, u, d, f, p) {
		t = +t, l = +l, u = +u, p = !!p;
		var m = u * Math.cos(d), h = u * Math.sin(d), g = t + m, _ = l + h, v = 1 ^ p, b = p ? d - f : f - d;
		if (u < 0) throw Error("negative radius: " + u);
		this._x1 === null ? this._ += "M" + g + "," + _ : (Math.abs(this._x1 - g) > epsilon || Math.abs(this._y1 - _) > epsilon) && (this._ += "L" + g + "," + _), u && (b < 0 && (b = b % tau + tau), b > tauEpsilon ? this._ += "A" + u + "," + u + ",0,1," + v + "," + (t - m) + "," + (l - h) + "A" + u + "," + u + ",0,1," + v + "," + (this._x1 = g) + "," + (this._y1 = _) : b > epsilon && (this._ += "A" + u + "," + u + ",0," + +(b >= pi) + "," + v + "," + (this._x1 = t + u * Math.cos(f)) + "," + (this._y1 = l + u * Math.sin(f))));
	},
	rect: function(t, l, u, d) {
		this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +l) + "h" + +u + "v" + +d + "h" + -u + "Z";
	},
	toString: function() {
		return this._;
	}
};
var path_default = path;
function constant_default(t) {
	return function() {
		return t;
	};
}
function x(t) {
	return t[0];
}
function y(t) {
	return t[1];
}
var slice = Array.prototype.slice;
function linkSource(t) {
	return t.source;
}
function linkTarget(t) {
	return t.target;
}
function link(t) {
	var l = linkSource, u = linkTarget, d = x, f = y, p = null;
	function m() {
		var m, h = slice.call(arguments), g = l.apply(this, h), _ = u.apply(this, h);
		if (p ||= m = path_default(), t(p, +d.apply(this, (h[0] = g, h)), +f.apply(this, h), +d.apply(this, (h[0] = _, h)), +f.apply(this, h)), m) return p = null, m + "" || null;
	}
	return m.source = function(t) {
		return arguments.length ? (l = t, m) : l;
	}, m.target = function(t) {
		return arguments.length ? (u = t, m) : u;
	}, m.x = function(t) {
		return arguments.length ? (d = typeof t == "function" ? t : constant_default(+t), m) : d;
	}, m.y = function(t) {
		return arguments.length ? (f = typeof t == "function" ? t : constant_default(+t), m) : f;
	}, m.context = function(t) {
		return arguments.length ? (p = t ?? null, m) : p;
	}, m;
}
function curveHorizontal(t, l, u, d, f) {
	t.moveTo(l, u), t.bezierCurveTo(l = (l + d) / 2, u, l, f, d, f);
}
function linkHorizontal() {
	return link(curveHorizontal);
}
function horizontalSource(t) {
	return [t.source.x1, t.y0];
}
function horizontalTarget(t) {
	return [t.target.x0, t.y1];
}
function sankeyLinkHorizontal_default() {
	return linkHorizontal().source(horizontalSource).target(horizontalTarget);
}
var parser = (function() {
	var l = /* @__PURE__ */ __name(function(t, l, u, d) {
		for (u ||= {}, d = t.length; d--; u[t[d]] = l);
		return u;
	}, "o"), u = [1, 9], d = [1, 10], f = [
		1,
		5,
		10,
		12
	], p = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			SANKEY: 4,
			NEWLINE: 5,
			csv: 6,
			opt_eof: 7,
			record: 8,
			csv_tail: 9,
			EOF: 10,
			"field[source]": 11,
			COMMA: 12,
			"field[target]": 13,
			"field[value]": 14,
			field: 15,
			escaped: 16,
			non_escaped: 17,
			DQUOTE: 18,
			ESCAPED_TEXT: 19,
			NON_ESCAPED_TEXT: 20,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SANKEY",
			5: "NEWLINE",
			10: "EOF",
			11: "field[source]",
			12: "COMMA",
			13: "field[target]",
			14: "field[value]",
			18: "DQUOTE",
			19: "ESCAPED_TEXT",
			20: "NON_ESCAPED_TEXT"
		},
		productions_: [
			0,
			[3, 4],
			[6, 2],
			[9, 2],
			[9, 0],
			[7, 1],
			[7, 0],
			[8, 5],
			[15, 1],
			[15, 1],
			[16, 3],
			[17, 1]
		],
		performAction: /* @__PURE__ */ __name(function(t, l, u, d, f, p, m) {
			var h = p.length - 1;
			switch (f) {
				case 7:
					let t = d.findOrCreateNode(p[h - 4].trim().replaceAll("\"\"", "\"")), l = d.findOrCreateNode(p[h - 2].trim().replaceAll("\"\"", "\"")), u = parseFloat(p[h].trim());
					d.addLink(t, l, u);
					break;
				case 8:
				case 9:
				case 11:
					this.$ = p[h];
					break;
				case 10:
					this.$ = p[h - 1];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			{ 5: [1, 3] },
			{
				6: 4,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: u,
				20: d
			},
			{
				1: [2, 6],
				7: 11,
				10: [1, 12]
			},
			l(d, [2, 4], {
				9: 13,
				5: [1, 14]
			}),
			{ 12: [1, 15] },
			l(f, [2, 8]),
			l(f, [2, 9]),
			{ 19: [1, 16] },
			l(f, [2, 11]),
			{ 1: [2, 1] },
			{ 1: [2, 5] },
			l(d, [2, 2]),
			{
				6: 17,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: u,
				20: d
			},
			{
				15: 18,
				16: 7,
				17: 8,
				18: u,
				20: d
			},
			{ 18: [1, 19] },
			l(d, [2, 3]),
			{ 12: [1, 20] },
			l(f, [2, 10]),
			{
				15: 21,
				16: 7,
				17: 8,
				18: u,
				20: d
			},
			l([
				1,
				5,
				10
			], [2, 7])
		],
		defaultActions: {
			11: [2, 1],
			12: [2, 5]
		},
		parseError: /* @__PURE__ */ __name(function(t, l) {
			if (l.recoverable) this.trace(t);
			else {
				var u = Error(t);
				throw u.hash = l, u;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(l) {
			var u = this, d = [0], f = [], p = [null], m = [], h = this.table, g = "", _ = 0, v = 0, b = 0, S = 2, C = 1, w = m.slice.call(arguments, 1), T = Object.create(this.lexer), E = { yy: {} };
			for (var D in this.yy) Object.prototype.hasOwnProperty.call(this.yy, D) && (E.yy[D] = this.yy[D]);
			T.setInput(l, E.yy), E.yy.lexer = T, E.yy.parser = this, T.yylloc === void 0 && (T.yylloc = {});
			var O = T.yylloc;
			m.push(O);
			var k = T.options && T.options.ranges;
			typeof E.yy.parseError == "function" ? this.parseError = E.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function A(t) {
				d.length -= 2 * t, p.length -= t, m.length -= t;
			}
			__name(A, "popStack");
			function j() {
				var t = f.pop() || T.lex() || C;
				return typeof t != "number" && (t instanceof Array && (f = t, t = f.pop()), t = u.symbols_[t] || t), t;
			}
			__name(j, "lex");
			for (var M, N, P, F, I, L = {}, R, z, B, V;;) {
				if (P = d[d.length - 1], this.defaultActions[P] ? F = this.defaultActions[P] : (M ??= j(), F = h[P] && h[P][M]), F === void 0 || !F.length || !F[0]) {
					var H = "";
					for (R in V = [], h[P]) this.terminals_[R] && R > S && V.push("'" + this.terminals_[R] + "'");
					H = T.showPosition ? "Parse error on line " + (_ + 1) + ":\n" + T.showPosition() + "\nExpecting " + V.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : "Parse error on line " + (_ + 1) + ": Unexpected " + (M == C ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(H, {
						text: T.match,
						token: this.terminals_[M] || M,
						line: T.yylineno,
						loc: O,
						expected: V
					});
				}
				if (F[0] instanceof Array && F.length > 1) throw Error("Parse Error: multiple actions possible at state: " + P + ", token: " + M);
				switch (F[0]) {
					case 1:
						d.push(M), p.push(T.yytext), m.push(T.yylloc), d.push(F[1]), M = null, N ? (M = N, N = null) : (v = T.yyleng, g = T.yytext, _ = T.yylineno, O = T.yylloc, b > 0 && b--);
						break;
					case 2:
						if (z = this.productions_[F[1]][1], L.$ = p[p.length - z], L._$ = {
							first_line: m[m.length - (z || 1)].first_line,
							last_line: m[m.length - 1].last_line,
							first_column: m[m.length - (z || 1)].first_column,
							last_column: m[m.length - 1].last_column
						}, k && (L._$.range = [m[m.length - (z || 1)].range[0], m[m.length - 1].range[1]]), I = this.performAction.apply(L, [
							g,
							v,
							_,
							E.yy,
							F[1],
							p,
							m
						].concat(w)), I !== void 0) return I;
						z && (d = d.slice(0, -1 * z * 2), p = p.slice(0, -1 * z), m = m.slice(0, -1 * z)), d.push(this.productions_[F[1]][0]), p.push(L.$), m.push(L._$), B = h[d[d.length - 2]][d[d.length - 1]], d.push(B);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	p.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(t, l) {
				if (this.yy.parser) this.yy.parser.parseError(t, l);
				else throw Error(t);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(t, l) {
				return this.yy = l || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var t = this._input[0];
				return this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t, t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(t) {
				var l = t.length, u = t.split(/(?:\r\n?|\n)/g);
				this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - l), this.offset -= l;
				var d = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
				var f = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: u ? (u.length === d.length ? this.yylloc.first_column : 0) + d[d.length - u.length].length - u[0].length : this.yylloc.first_column - l
				}, this.options.ranges && (this.yylloc.range = [f[0], f[0] + this.yyleng - l]), this.yyleng = this.yytext.length, this;
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
			less: /* @__PURE__ */ __name(function(t) {
				this.unput(this.match.slice(t));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var t = this.matched.substr(0, this.matched.length - this.match.length);
				return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var t = this.match;
				return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var t = this.pastInput(), l = Array(t.length + 1).join("-");
				return t + this.upcomingInput() + "\n" + l + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(t, l) {
				var u, d, f;
				if (this.options.backtrack_lexer && (f = {
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
				}, this.options.ranges && (f.yylloc.range = this.yylloc.range.slice(0))), d = t[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
				}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], u = this.performAction.call(this, this.yy, this, l, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), u) return u;
				if (this._backtrack) {
					for (var p in f) this[p] = f[p];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var t, l, u, d;
				this._more || (this.yytext = "", this.match = "");
				for (var f = this._currentRules(), p = 0; p < f.length; p++) if (u = this._input.match(this.rules[f[p]]), u && (!l || u[0].length > l[0].length)) {
					if (l = u, d = p, this.options.backtrack_lexer) {
						if (t = this.test_match(u, f[p]), t !== !1) return t;
						if (this._backtrack) {
							l = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return l ? (t = this.test_match(l, f[d]), t === !1 ? !1 : t) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function(t) {
				this.conditionStack.push(t);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function(t) {
				return t = this.conditionStack.length - 1 - Math.abs(t || 0), t >= 0 ? this.conditionStack[t] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function(t) {
				this.begin(t);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ __name(function(t, l, u, d) {
				switch (u) {
					case 0: return this.pushState("csv"), 4;
					case 1: return this.pushState("csv"), 4;
					case 2: return 10;
					case 3: return 5;
					case 4: return 12;
					case 5: return this.pushState("escaped_text"), 18;
					case 6: return 20;
					case 7: return this.popState("escaped_text"), 18;
					case 8: return 19;
				}
			}, "anonymous"),
			rules: [
				/^(?:sankey-beta\b)/i,
				/^(?:sankey\b)/i,
				/^(?:$)/i,
				/^(?:((\u000D\u000A)|(\u000A)))/i,
				/^(?:(\u002C))/i,
				/^(?:(\u0022))/i,
				/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
				/^(?:(\u0022)(?!(\u0022)))/i,
				/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i
			],
			conditions: {
				csv: {
					rules: [
						2,
						3,
						4,
						5,
						6,
						7,
						8
					],
					inclusive: !1
				},
				escaped_text: {
					rules: [7, 8],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8
					],
					inclusive: !0
				}
			}
		};
	})();
	function m() {
		this.yy = {};
	}
	return __name(m, "Parser"), m.prototype = p, p.Parser = m, new m();
})();
parser.parser = parser;
var sankey_default = parser, links = [], nodes = [], nodesMap = /* @__PURE__ */ new Map(), clear2 = /* @__PURE__ */ __name(() => {
	links = [], nodes = [], nodesMap = /* @__PURE__ */ new Map(), clear();
}, "clear"), SankeyLink = class {
	constructor(t, l, u = 0) {
		this.source = t, this.target = l, this.value = u;
	}
	static #_ = __name(this, "SankeyLink");
}, addLink = /* @__PURE__ */ __name((t, l, u) => {
	links.push(new SankeyLink(t, l, u));
}, "addLink"), SankeyNode = class {
	constructor(t) {
		this.ID = t;
	}
	static #_ = __name(this, "SankeyNode");
}, sankeyDB_default = {
	nodesMap,
	getConfig: /* @__PURE__ */ __name(() => getConfig2().sankey, "getConfig"),
	getNodes: /* @__PURE__ */ __name(() => nodes, "getNodes"),
	getLinks: /* @__PURE__ */ __name(() => links, "getLinks"),
	getGraph: /* @__PURE__ */ __name(() => ({
		nodes: nodes.map((t) => ({ id: t.ID })),
		links: links.map((t) => ({
			source: t.source.ID,
			target: t.target.ID,
			value: t.value
		}))
	}), "getGraph"),
	addLink,
	findOrCreateNode: /* @__PURE__ */ __name((t) => {
		t = common_default.sanitizeText(t, getConfig2());
		let l = nodesMap.get(t);
		return l === void 0 && (l = new SankeyNode(t), nodesMap.set(t, l), nodes.push(l)), l;
	}, "findOrCreateNode"),
	getAccTitle,
	setAccTitle,
	getAccDescription,
	setAccDescription,
	getDiagramTitle,
	setDiagramTitle,
	clear: clear2
}, Uid = class l {
	static #_ = __name(this, "Uid");
	static #_2 = this.count = 0;
	static next(t) {
		return new l(t + ++l.count);
	}
	constructor(t) {
		this.id = t, this.href = `#${t}`;
	}
	toString() {
		return "url(" + this.href + ")";
	}
}, alignmentsMap = {
	left,
	right,
	center,
	justify
}, sankeyRenderer_default = { draw: /* @__PURE__ */ __name(function(u, d, p, m) {
	let { securityLevel: h, sankey: _ } = getConfig2(), b = defaultConfig2.sankey, S;
	h === "sandbox" && (S = select_default("#i" + d));
	let w = select_default(h === "sandbox" ? S.nodes()[0].contentDocument.body : "body"), E = h === "sandbox" ? w.select(`[id="${d}"]`) : select_default(`[id="${d}"]`), D = _?.width ?? b.width, O = _?.height ?? b.width, k = _?.useMaxWidth ?? b.useMaxWidth, A = _?.nodeAlignment ?? b.nodeAlignment, j = _?.prefix ?? b.prefix, M = _?.suffix ?? b.suffix, N = _?.showValues ?? b.showValues, P = m.db.getGraph(), F = alignmentsMap[A];
	Sankey().nodeId((t) => t.id).nodeWidth(10).nodePadding(10 + (N ? 15 : 0)).nodeAlign(F).extent([[0, 0], [D, O]])(P);
	let I = ordinal(Tableau10_default);
	E.append("g").attr("class", "nodes").selectAll(".node").data(P.nodes).join("g").attr("class", "node").attr("id", (t) => (t.uid = Uid.next("node-")).id).attr("transform", function(t) {
		return "translate(" + t.x0 + "," + t.y0 + ")";
	}).attr("x", (t) => t.x0).attr("y", (t) => t.y0).append("rect").attr("height", (t) => t.y1 - t.y0).attr("width", (t) => t.x1 - t.x0).attr("fill", (t) => I(t.id));
	let L = /* @__PURE__ */ __name(({ id: t, value: l }) => N ? `${t}
${j}${Math.round(l * 100) / 100}${M}` : t, "getText");
	E.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(P.nodes).join("text").attr("x", (t) => t.x0 < D / 2 ? t.x1 + 6 : t.x0 - 6).attr("y", (t) => (t.y1 + t.y0) / 2).attr("dy", `${N ? "0" : "0.35"}em`).attr("text-anchor", (t) => t.x0 < D / 2 ? "start" : "end").text(L);
	let R = E.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", .5).selectAll(".link").data(P.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), z = _?.linkColor ?? "gradient";
	if (z === "gradient") {
		let t = R.append("linearGradient").attr("id", (t) => (t.uid = Uid.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (t) => t.source.x1).attr("x2", (t) => t.target.x0);
		t.append("stop").attr("offset", "0%").attr("stop-color", (t) => I(t.source.id)), t.append("stop").attr("offset", "100%").attr("stop-color", (t) => I(t.target.id));
	}
	let B;
	switch (z) {
		case "gradient":
			B = /* @__PURE__ */ __name((t) => t.uid, "coloring");
			break;
		case "source":
			B = /* @__PURE__ */ __name((t) => I(t.source.id), "coloring");
			break;
		case "target":
			B = /* @__PURE__ */ __name((t) => I(t.target.id), "coloring");
			break;
		default: B = z;
	}
	R.append("path").attr("d", sankeyLinkHorizontal_default()).attr("stroke", B).attr("stroke-width", (t) => Math.max(1, t.width)), setupGraphViewbox(void 0, E, 0, k);
}, "draw") }, prepareTextForParsing = /* @__PURE__ */ __name((t) => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, "\n").trim(), "prepareTextForParsing"), styles_default = /* @__PURE__ */ __name((t) => `.label {
      font-family: ${t.fontFamily};
    }`, "getStyles"), originalParse = sankey_default.parse.bind(sankey_default);
sankey_default.parse = (t) => originalParse(prepareTextForParsing(t));
var diagram = {
	styles: styles_default,
	parser: sankey_default,
	db: sankeyDB_default,
	renderer: sankeyRenderer_default
};
export { diagram };
