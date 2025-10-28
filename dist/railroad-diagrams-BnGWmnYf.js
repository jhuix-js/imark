import { t as __commonJSMin } from "./chunk-DgPTj83v.js";
var require_railroad_diagrams = /* @__PURE__ */ __commonJSMin(((e) => {
	(function(t) {
		function n(e, t) {
			e.prototype = Object.create(t.prototype), e.prototype.$super = t.prototype;
		}
		function r() {
			return [].slice.call(arguments).reduce(function(e, t) {
				return e === void 0 ? t : e;
			});
		}
		function i(e, t) {
			var n = e - t;
			switch (l.INTERNAL_ALIGNMENT) {
				case "left": return [0, n];
				case "right": return [n, 0];
				case "center":
				default: return [n / 2, n / 2];
			}
		}
		function a(e) {
			return typeof e == "string" ? new y(e) : e;
		}
		function o(e, t, n) {
			t ||= {}, n ||= "";
			var r = document.createElementNS("http://www.w3.org/2000/svg", e);
			for (var i in t) r.setAttribute(i, t[i]);
			return r.textContent = n, r;
		}
		function s(e, t, n) {
			return this instanceof s ? (n ? this.children = n : this.children = [], this.tagName = e, this.attrs = r(t, {}), this) : new s(e, t, n);
		}
		s.prototype.format = function(e, t, n) {}, s.prototype.addTo = function(e) {
			if (e instanceof s) return e.children.push(this), this;
			var t = this.toSVG();
			return e.appendChild(t), t;
		}, s.prototype.escapeString = function(e) {
			return e.replace(/[*_\`\[\]<&]/g, function(e) {
				return "&#" + e.charCodeAt(0) + ";";
			});
		}, s.prototype.toSVG = function() {
			var e = o(this.tagName, this.attrs);
			return typeof this.children == "string" ? e.innerHTML = s.prototype.escapeString(this.children) : this.children.forEach(function(t) {
				e.appendChild(t.toSVG());
			}), e;
		}, s.prototype.toString = function() {
			var e = "<" + this.tagName, t = this.tagName == "g" || this.tagName == "svg";
			for (var n in this.attrs) e += " " + n + "=\"" + (this.attrs[n] + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;") + "\"";
			return e += ">", t && (e += "\n"), typeof this.children == "string" ? e += s.prototype.escapeString(this.children) : this.children.forEach(function(t) {
				e += t;
			}), e += "</" + this.tagName + ">\n", e;
		};
		function c(e, t) {
			if (!(this instanceof c)) return new c(e, t);
			s.call(this, "path"), this.attrs.d = "M" + e + " " + t;
		}
		n(c, s), c.prototype.m = function(e, t) {
			return this.attrs.d += "m" + e + " " + t, this;
		}, c.prototype.h = function(e) {
			return this.attrs.d += "h" + e, this;
		}, c.prototype.right = c.prototype.h, c.prototype.left = function(e) {
			return this.h(-e);
		}, c.prototype.v = function(e) {
			return this.attrs.d += "v" + e, this;
		}, c.prototype.down = c.prototype.v, c.prototype.up = function(e) {
			return this.v(-e);
		}, c.prototype.arc = function(e) {
			var t = l.ARC_RADIUS, n = l.ARC_RADIUS;
			if ((e[0] == "e" || e[1] == "w") && (t *= -1), (e[0] == "s" || e[1] == "n") && (n *= -1), e == "ne" || e == "es" || e == "sw" || e == "wn") var r = 1;
			else var r = 0;
			return this.attrs.d += "a" + l.ARC_RADIUS + " " + l.ARC_RADIUS + " 0 0 " + r + " " + t + " " + n, this;
		}, c.prototype.format = function() {
			return this.attrs.d += "h.5", this;
		};
		function l(e) {
			if (!(this instanceof l)) return new l([].slice.call(arguments));
			s.call(this, "svg", { class: l.DIAGRAM_CLASS }), this.items = e.map(a), this.items.unshift(new _()), this.items.push(new v()), this.width = this.items.reduce(function(e, t) {
				return e + t.width + (t.needsSpace ? 20 : 0);
			}, 0) + 1, this.up = Math.max.apply(null, this.items.map(function(e) {
				return e.up;
			})), this.down = Math.max.apply(null, this.items.map(function(e) {
				return e.down;
			})), this.formatted = !1;
		}
		for (var u in n(l, s), t) l[u] = t[u];
		l.prototype.format = function(e, t, n, i) {
			e = r(e, 20), t = r(t, e, 20), n = r(n, e, 20), i = r(i, t, 20);
			var a = i, o = e;
			o += this.up;
			for (var u = s("g", l.STROKE_ODD_PIXEL_LENGTH ? { transform: "translate(.5 .5)" } : {}), d = 0; d < this.items.length; d++) {
				var f = this.items[d];
				f.needsSpace && (c(a, o).h(10).addTo(u), a += 10), f.format(a, o, f.width).addTo(u), a += f.width, f.needsSpace && (c(a, o).h(10).addTo(u), a += 10);
			}
			return this.attrs.width = this.width + i + t, this.attrs.height = this.up + this.down + e + n, this.attrs.viewBox = "0 0 " + this.attrs.width + " " + this.attrs.height, u.addTo(this), this.formatted = !0, this;
		}, l.prototype.addTo = function(e) {
			var t = document.getElementsByTagName("script");
			t = t[t.length - 1];
			var n = t.parentNode;
			return e ||= n, this.$super.addTo.call(this, e);
		}, l.prototype.toSVG = function() {
			return this.formatted || this.format(), this.$super.toSVG.call(this);
		}, l.prototype.toString = function() {
			return this.formatted || this.format(), this.$super.toString.call(this);
		};
		function d() {
			var e = new l([].slice.call(arguments)), t = e.items;
			return t.shift(), t.pop(), t.unshift(new _(!1)), t.push(new v(!1)), e.items = t, e;
		}
		function f(e) {
			if (!(this instanceof f)) return new f([].slice.call(arguments));
			s.call(this, "g"), this.items = e.map(a), this.width = this.items.reduce(function(e, t) {
				return e + t.width + (t.needsSpace ? 20 : 0);
			}, 0), this.up = this.items.reduce(function(e, t) {
				return Math.max(e, t.up);
			}, 0), this.down = this.items.reduce(function(e, t) {
				return Math.max(e, t.down);
			}, 0);
		}
		n(f, s), f.prototype.format = function(e, t, n) {
			var r = i(n, this.width);
			c(e, t).h(r[0]).addTo(this), c(e + r[0] + this.width, t).h(r[1]).addTo(this), e += r[0];
			for (var a = 0; a < this.items.length; a++) {
				var o = this.items[a];
				o.needsSpace && (c(e, t).h(10).addTo(this), e += 10), o.format(e, t, o.width).addTo(this), e += o.width, o.needsSpace && (c(e, t).h(10).addTo(this), e += 10);
			}
			return this;
		};
		function p(e, t) {
			if (!(this instanceof p)) return new p(e, [].slice.call(arguments, 1));
			if (s.call(this, "g"), typeof e != "number" || e !== Math.floor(e)) throw TypeError("The first argument of Choice() must be an integer.");
			if (e < 0 || e >= t.length) throw RangeError("The first argument of Choice() must be an index for one of the items.");
			this.normal = e, this.items = t.map(a), this.width = this.items.reduce(function(e, t) {
				return Math.max(e, t.width);
			}, 0) + l.ARC_RADIUS * 4, this.up = this.down = 0;
			for (var n = 0; n < this.items.length; n++) {
				var r = this.items[n];
				n < e && (this.up += Math.max(l.ARC_RADIUS, r.up + r.down + l.VERTICAL_SEPARATION)), n == e && (this.up += Math.max(l.ARC_RADIUS, r.up), this.down += Math.max(l.ARC_RADIUS, r.down)), n > e && (this.down += Math.max(l.ARC_RADIUS, l.VERTICAL_SEPARATION + r.up + r.down));
			}
		}
		n(p, s), p.prototype.format = function(e, t, n) {
			var r = i(n, this.width);
			c(e, t).h(r[0]).addTo(this), c(e + r[0] + this.width, t).h(r[1]).addTo(this), e += r[0];
			for (var a = this.items.length - 1, o = this.width - l.ARC_RADIUS * 4, s = this.normal - 1; s >= 0; s--) {
				var u = this.items[s];
				if (s == this.normal - 1) var d = Math.max(l.ARC_RADIUS * 2, this.items[s + 1].up + l.VERTICAL_SEPARATION + u.down);
				c(e, t).arc("se").up(d - l.ARC_RADIUS * 2).arc("wn").addTo(this), u.format(e + l.ARC_RADIUS * 2, t - d, o).addTo(this), c(e + l.ARC_RADIUS * 2 + o, t - d).arc("ne").down(d - l.ARC_RADIUS * 2).arc("ws").addTo(this), d += Math.max(l.ARC_RADIUS, u.up + l.VERTICAL_SEPARATION + (s == 0 ? 0 : this.items[s - 1].down));
			}
			c(e, t).right(l.ARC_RADIUS * 2).addTo(this), this.items[this.normal].format(e + l.ARC_RADIUS * 2, t, o).addTo(this), c(e + l.ARC_RADIUS * 2 + o, t).right(l.ARC_RADIUS * 2).addTo(this);
			for (var s = this.normal + 1; s <= a; s++) {
				var u = this.items[s];
				if (s == this.normal + 1) var d = Math.max(l.ARC_RADIUS * 2, this.items[s - 1].down + l.VERTICAL_SEPARATION + u.up);
				c(e, t).arc("ne").down(d - l.ARC_RADIUS * 2).arc("ws").addTo(this), u.format(e + l.ARC_RADIUS * 2, t + d, o).addTo(this), c(e + l.ARC_RADIUS * 2 + o, t + d).arc("se").up(d - l.ARC_RADIUS * 2).arc("wn").addTo(this), d += Math.max(l.ARC_RADIUS, u.down + l.VERTICAL_SEPARATION + (s == a ? 0 : this.items[s + 1].up));
			}
			return this;
		};
		function m(e, t) {
			if (t === void 0) return p(1, S(), e);
			if (t === "skip") return p(0, S(), e);
			throw "Unknown value for Optional()'s 'skip' argument.";
		}
		function h(e, t) {
			if (!(this instanceof h)) return new h(e, t);
			s.call(this, "g"), t ||= new S(), this.item = a(e), this.rep = a(t), this.width = Math.max(this.item.width, this.rep.width) + l.ARC_RADIUS * 2, this.up = this.item.up, this.down = Math.max(l.ARC_RADIUS * 2, this.item.down + l.VERTICAL_SEPARATION + this.rep.up + this.rep.down);
		}
		n(h, s), h.prototype.needsSpace = !0, h.prototype.format = function(e, t, n) {
			var r = i(n, this.width);
			c(e, t).h(r[0]).addTo(this), c(e + r[0] + this.width, t).h(r[1]).addTo(this), e += r[0], c(e, t).right(l.ARC_RADIUS).addTo(this), this.item.format(e + l.ARC_RADIUS, t, this.width - l.ARC_RADIUS * 2).addTo(this), c(e + this.width - l.ARC_RADIUS, t).right(l.ARC_RADIUS).addTo(this);
			var a = Math.max(l.ARC_RADIUS * 2, this.item.down + l.VERTICAL_SEPARATION + this.rep.up);
			return c(e + l.ARC_RADIUS, t).arc("nw").down(a - l.ARC_RADIUS * 2).arc("ws").addTo(this), this.rep.format(e + l.ARC_RADIUS, t + a, this.width - l.ARC_RADIUS * 2).addTo(this), c(e + this.width - l.ARC_RADIUS, t + a).arc("se").up(a - l.ARC_RADIUS * 2).arc("en").addTo(this), this;
		};
		function g(e, t, n) {
			return m(h(e, t), n);
		}
		function _(e) {
			if (!(this instanceof _)) return new _();
			s.call(this, "path"), this.width = 20, this.up = 10, this.down = 10, this.simpleType = e;
		}
		n(_, s), _.prototype.format = function(e, t) {
			return this.simpleType === !1 ? this.attrs.d = "M " + e + " " + (t - 10) + " v 20 m 0 -10 h 20.5" : this.attrs.d = "M " + e + " " + (t - 10) + " v 20 m 10 -20 v 20 m -10 -10 h 20.5", this;
		};
		function v(e) {
			if (!(this instanceof v)) return new v();
			s.call(this, "path"), this.width = 20, this.up = 10, this.down = 10, this.simpleType = e;
		}
		n(v, s), v.prototype.format = function(e, t) {
			return this.simpleType === !1 ? this.attrs.d = "M " + e + " " + t + " h 20 m 0 -10 v 20" : this.attrs.d = "M " + e + " " + t + " h 20 m -10 -10 v 20 m 10 -20 v 20", this;
		};
		function y(e) {
			if (!(this instanceof y)) return new y(e);
			s.call(this, "g"), this.text = e, this.width = e.length * 8 + 20, this.up = 11, this.down = 11;
		}
		n(y, s), y.prototype.needsSpace = !0, y.prototype.format = function(e, t, n) {
			var r = i(n, this.width);
			return c(e, t).h(r[0]).addTo(this), c(e + r[0] + this.width, t).h(r[1]).addTo(this), e += r[0], s("rect", {
				x: e,
				y: t - 11,
				width: this.width,
				height: this.up + this.down,
				rx: 10,
				ry: 10
			}).addTo(this), s("text", {
				x: e + this.width / 2,
				y: t + 4
			}, this.text).addTo(this), this;
		};
		function b(e) {
			if (!(this instanceof b)) return new b(e);
			s.call(this, "g"), this.text = e, this.width = e.length * 8 + 20, this.up = 11, this.down = 11;
		}
		n(b, s), b.prototype.needsSpace = !0, b.prototype.format = function(e, t, n) {
			var r = i(n, this.width);
			return c(e, t).h(r[0]).addTo(this), c(e + r[0] + this.width, t).h(r[1]).addTo(this), e += r[0], s("rect", {
				x: e,
				y: t - 11,
				width: this.width,
				height: this.up + this.down
			}).addTo(this), s("text", {
				x: e + this.width / 2,
				y: t + 4
			}, this.text).addTo(this), this;
		};
		function x(e) {
			if (!(this instanceof x)) return new x(e);
			s.call(this, "g"), this.text = e, this.width = e.length * 7 + 10, this.up = 11, this.down = 11;
		}
		n(x, s), x.prototype.needsSpace = !0, x.prototype.format = function(e, t, n) {
			var r = i(n, this.width);
			return c(e, t).h(r[0]).addTo(this), c(e + r[0] + this.width, t).h(r[1]).addTo(this), e += r[0], s("text", {
				x: e + this.width / 2,
				y: t + 5,
				class: "comment"
			}, this.text).addTo(this), this;
		};
		function S() {
			if (!(this instanceof S)) return new S();
			s.call(this, "g"), this.width = 0, this.up = 0, this.down = 0;
		}
		n(S, s), S.prototype.format = function(e, t, n) {
			return c(e, t).right(n).addTo(this), this;
		};
		var C;
		typeof define == "function" && define.amd ? (C = {}, define([], function() {
			return C;
		})) : C = typeof e == "object" ? e : this;
		var w = [
			l,
			d,
			f,
			p,
			m,
			h,
			g,
			y,
			b,
			x,
			S
		];
		[
			"Diagram",
			"ComplexDiagram",
			"Sequence",
			"Choice",
			"Optional",
			"OneOrMore",
			"ZeroOrMore",
			"Terminal",
			"NonTerminal",
			"Comment",
			"Skip"
		].forEach(function(e, t) {
			C[e] = w[t];
		});
	}).call(e, {
		VERTICAL_SEPARATION: 8,
		ARC_RADIUS: 10,
		DIAGRAM_CLASS: "railroad-diagram",
		STROKE_ODD_PIXEL_LENGTH: !0,
		INTERNAL_ALIGNMENT: "center"
	});
}));
export default require_railroad_diagrams();
