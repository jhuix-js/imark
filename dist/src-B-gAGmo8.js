import { s as __toESM, t as __commonJSMin } from "./chunk-DgPTj83v.js";
import { c as interpolateTransformSvg, d as string_default, f as number_default, g as color, n as now, p as rgb_default, r as timer, s as interpolateTransformCss, t as Timer, y as dispatch_default } from "./timer-Bp1bAW5T.js";
var require_dayjs_min = /* @__PURE__ */ __commonJSMin(((e, D) => {
	(function(O, k) {
		typeof e == "object" && D !== void 0 ? D.exports = k() : typeof define == "function" && define.amd ? define(k) : (O = typeof globalThis < "u" ? globalThis : O || self).dayjs = k();
	})(e, (function() {
		var e = 1e3, D = 6e4, O = 36e5, k = "millisecond", A = "second", j = "minute", M = "hour", N = "day", P = "week", F = "month", I = "quarter", L = "year", R = "date", z = "Invalid Date", B = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, V = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, H = {
			name: "en",
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			ordinal: function(e) {
				var D = [
					"th",
					"st",
					"nd",
					"rd"
				], O = e % 100;
				return "[" + e + (D[(O - 20) % 10] || D[O] || D[0]) + "]";
			}
		}, U = function(e, D, O) {
			var k = String(e);
			return !k || k.length >= D ? e : "" + Array(D + 1 - k.length).join(O) + e;
		}, W = {
			s: U,
			z: function(e) {
				var D = -e.utcOffset(), O = Math.abs(D), k = Math.floor(O / 60), A = O % 60;
				return (D <= 0 ? "+" : "-") + U(k, 2, "0") + ":" + U(A, 2, "0");
			},
			m: function e(D, O) {
				if (D.date() < O.date()) return -e(O, D);
				var k = 12 * (O.year() - D.year()) + (O.month() - D.month()), A = D.clone().add(k, F), j = O - A < 0, M = D.clone().add(k + (j ? -1 : 1), F);
				return +(-(k + (O - A) / (j ? A - M : M - A)) || 0);
			},
			a: function(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
			},
			p: function(e) {
				return {
					M: F,
					y: L,
					w: P,
					d: N,
					D: R,
					h: M,
					m: j,
					s: A,
					ms: k,
					Q: I
				}[e] || String(e || "").toLowerCase().replace(/s$/, "");
			},
			u: function(e) {
				return e === void 0;
			}
		}, G = "en", K = {};
		K[G] = H;
		var q = "$isDayjsObject", J = function(e) {
			return e instanceof Q || !(!e || !e[q]);
		}, Y = function e(D, O, k) {
			var A;
			if (!D) return G;
			if (typeof D == "string") {
				var j = D.toLowerCase();
				K[j] && (A = j), O && (K[j] = O, A = j);
				var M = D.split("-");
				if (!A && M.length > 1) return e(M[0]);
			} else {
				var N = D.name;
				K[N] = D, A = N;
			}
			return !k && A && (G = A), A || !k && G;
		}, X = function(e, D) {
			if (J(e)) return e.clone();
			var O = typeof D == "object" ? D : {};
			return O.date = e, O.args = arguments, new Q(O);
		}, Z = W;
		Z.l = Y, Z.i = J, Z.w = function(e, D) {
			return X(e, {
				locale: D.$L,
				utc: D.$u,
				x: D.$x,
				$offset: D.$offset
			});
		};
		var Q = function() {
			function H(e) {
				this.$L = Y(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[q] = !0;
			}
			var U = H.prototype;
			return U.parse = function(e) {
				this.$d = function(e) {
					var D = e.date, O = e.utc;
					if (D === null) return /* @__PURE__ */ new Date(NaN);
					if (Z.u(D)) return /* @__PURE__ */ new Date();
					if (D instanceof Date) return new Date(D);
					if (typeof D == "string" && !/Z$/i.test(D)) {
						var k = D.match(B);
						if (k) {
							var A = k[2] - 1 || 0, j = (k[7] || "0").substring(0, 3);
							return O ? new Date(Date.UTC(k[1], A, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, j)) : new Date(k[1], A, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, j);
						}
					}
					return new Date(D);
				}(e), this.init();
			}, U.init = function() {
				var e = this.$d;
				this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
			}, U.$utils = function() {
				return Z;
			}, U.isValid = function() {
				return this.$d.toString() !== z;
			}, U.isSame = function(e, D) {
				var O = X(e);
				return this.startOf(D) <= O && O <= this.endOf(D);
			}, U.isAfter = function(e, D) {
				return X(e) < this.startOf(D);
			}, U.isBefore = function(e, D) {
				return this.endOf(D) < X(e);
			}, U.$g = function(e, D, O) {
				return Z.u(e) ? this[D] : this.set(O, e);
			}, U.unix = function() {
				return Math.floor(this.valueOf() / 1e3);
			}, U.valueOf = function() {
				return this.$d.getTime();
			}, U.startOf = function(e, D) {
				var O = this, k = !!Z.u(D) || D, I = Z.p(e), z = function(e, D) {
					var A = Z.w(O.$u ? Date.UTC(O.$y, D, e) : new Date(O.$y, D, e), O);
					return k ? A : A.endOf(N);
				}, B = function(e, D) {
					return Z.w(O.toDate()[e].apply(O.toDate("s"), (k ? [
						0,
						0,
						0,
						0
					] : [
						23,
						59,
						59,
						999
					]).slice(D)), O);
				}, V = this.$W, H = this.$M, U = this.$D, W = "set" + (this.$u ? "UTC" : "");
				switch (I) {
					case L: return k ? z(1, 0) : z(31, 11);
					case F: return k ? z(1, H) : z(0, H + 1);
					case P:
						var G = this.$locale().weekStart || 0, K = (V < G ? V + 7 : V) - G;
						return z(k ? U - K : U + (6 - K), H);
					case N:
					case R: return B(W + "Hours", 0);
					case M: return B(W + "Minutes", 1);
					case j: return B(W + "Seconds", 2);
					case A: return B(W + "Milliseconds", 3);
					default: return this.clone();
				}
			}, U.endOf = function(e) {
				return this.startOf(e, !1);
			}, U.$set = function(e, D) {
				var O, P = Z.p(e), I = "set" + (this.$u ? "UTC" : ""), z = (O = {}, O[N] = I + "Date", O[R] = I + "Date", O[F] = I + "Month", O[L] = I + "FullYear", O[M] = I + "Hours", O[j] = I + "Minutes", O[A] = I + "Seconds", O[k] = I + "Milliseconds", O)[P], B = P === N ? this.$D + (D - this.$W) : D;
				if (P === F || P === L) {
					var V = this.clone().set(R, 1);
					V.$d[z](B), V.init(), this.$d = V.set(R, Math.min(this.$D, V.daysInMonth())).$d;
				} else z && this.$d[z](B);
				return this.init(), this;
			}, U.set = function(e, D) {
				return this.clone().$set(e, D);
			}, U.get = function(e) {
				return this[Z.p(e)]();
			}, U.add = function(k, I) {
				var R, z = this;
				k = Number(k);
				var B = Z.p(I), V = function(e) {
					var D = X(z);
					return Z.w(D.date(D.date() + Math.round(e * k)), z);
				};
				if (B === F) return this.set(F, this.$M + k);
				if (B === L) return this.set(L, this.$y + k);
				if (B === N) return V(1);
				if (B === P) return V(7);
				var H = (R = {}, R[j] = D, R[M] = O, R[A] = e, R)[B] || 1, U = this.$d.getTime() + k * H;
				return Z.w(U, this);
			}, U.subtract = function(e, D) {
				return this.add(-1 * e, D);
			}, U.format = function(e) {
				var D = this, O = this.$locale();
				if (!this.isValid()) return O.invalidDate || z;
				var k = e || "YYYY-MM-DDTHH:mm:ssZ", A = Z.z(this), j = this.$H, M = this.$m, N = this.$M, P = O.weekdays, F = O.months, I = O.meridiem, L = function(e, O, A, j) {
					return e && (e[O] || e(D, k)) || A[O].slice(0, j);
				}, R = function(e) {
					return Z.s(j % 12 || 12, e, "0");
				}, B = I || function(e, D, O) {
					var k = e < 12 ? "AM" : "PM";
					return O ? k.toLowerCase() : k;
				};
				return k.replace(V, (function(e, k) {
					return k || function(e) {
						switch (e) {
							case "YY": return String(D.$y).slice(-2);
							case "YYYY": return Z.s(D.$y, 4, "0");
							case "M": return N + 1;
							case "MM": return Z.s(N + 1, 2, "0");
							case "MMM": return L(O.monthsShort, N, F, 3);
							case "MMMM": return L(F, N);
							case "D": return D.$D;
							case "DD": return Z.s(D.$D, 2, "0");
							case "d": return String(D.$W);
							case "dd": return L(O.weekdaysMin, D.$W, P, 2);
							case "ddd": return L(O.weekdaysShort, D.$W, P, 3);
							case "dddd": return P[D.$W];
							case "H": return String(j);
							case "HH": return Z.s(j, 2, "0");
							case "h": return R(1);
							case "hh": return R(2);
							case "a": return B(j, M, !0);
							case "A": return B(j, M, !1);
							case "m": return String(M);
							case "mm": return Z.s(M, 2, "0");
							case "s": return String(D.$s);
							case "ss": return Z.s(D.$s, 2, "0");
							case "SSS": return Z.s(D.$ms, 3, "0");
							case "Z": return A;
						}
						return null;
					}(e) || A.replace(":", "");
				}));
			}, U.utcOffset = function() {
				return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
			}, U.diff = function(k, R, z) {
				var B, V = this, H = Z.p(R), U = X(k), W = (U.utcOffset() - this.utcOffset()) * D, G = this - U, K = function() {
					return Z.m(V, U);
				};
				switch (H) {
					case L:
						B = K() / 12;
						break;
					case F:
						B = K();
						break;
					case I:
						B = K() / 3;
						break;
					case P:
						B = (G - W) / 6048e5;
						break;
					case N:
						B = (G - W) / 864e5;
						break;
					case M:
						B = G / O;
						break;
					case j:
						B = G / D;
						break;
					case A:
						B = G / e;
						break;
					default: B = G;
				}
				return z ? B : Z.a(B);
			}, U.daysInMonth = function() {
				return this.endOf(F).$D;
			}, U.$locale = function() {
				return K[this.$L];
			}, U.locale = function(e, D) {
				if (!e) return this.$L;
				var O = this.clone(), k = Y(e, D, !0);
				return k && (O.$L = k), O;
			}, U.clone = function() {
				return Z.w(this.$d, this);
			}, U.toDate = function() {
				return new Date(this.valueOf());
			}, U.toJSON = function() {
				return this.isValid() ? this.toISOString() : null;
			}, U.toISOString = function() {
				return this.$d.toISOString();
			}, U.toString = function() {
				return this.$d.toUTCString();
			}, H;
		}(), $ = Q.prototype;
		return X.prototype = $, [
			["$ms", k],
			["$s", A],
			["$m", j],
			["$H", M],
			["$W", N],
			["$M", F],
			["$y", L],
			["$D", R]
		].forEach((function(e) {
			$[e[1]] = function(D) {
				return this.$g(D, e[0], e[1]);
			};
		})), X.extend = function(e, D) {
			return e.$i ||= (e(D, Q, X), !0), X;
		}, X.locale = Y, X.isDayjs = J, X.unix = function(e) {
			return X(1e3 * e);
		}, X.en = K[G], X.Ls = K, X.p = {}, X;
	}));
})), import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1), __defProp = Object.defineProperty, __name = (e, D) => __defProp(e, "name", {
	value: D,
	configurable: !0
}), __export = (e, D) => {
	for (var O in D) __defProp(e, O, {
		get: D[O],
		enumerable: !0
	});
}, LEVELS = {
	trace: 0,
	debug: 1,
	info: 2,
	warn: 3,
	error: 4,
	fatal: 5
}, log = {
	trace: /* @__PURE__ */ __name((...e) => {}, "trace"),
	debug: /* @__PURE__ */ __name((...e) => {}, "debug"),
	info: /* @__PURE__ */ __name((...e) => {}, "info"),
	warn: /* @__PURE__ */ __name((...e) => {}, "warn"),
	error: /* @__PURE__ */ __name((...e) => {}, "error"),
	fatal: /* @__PURE__ */ __name((...e) => {}, "fatal")
}, setLogLevel = /* @__PURE__ */ __name(function(e = "fatal") {
	let D = LEVELS.fatal;
	typeof e == "string" ? e.toLowerCase() in LEVELS && (D = LEVELS[e]) : typeof e == "number" && (D = e), log.trace = () => {}, log.debug = () => {}, log.info = () => {}, log.warn = () => {}, log.error = () => {}, log.fatal = () => {}, D <= LEVELS.fatal && (log.fatal = console.error ? console.error.bind(console, format("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", format("FATAL"))), D <= LEVELS.error && (log.error = console.error ? console.error.bind(console, format("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", format("ERROR"))), D <= LEVELS.warn && (log.warn = console.warn ? console.warn.bind(console, format("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", format("WARN"))), D <= LEVELS.info && (log.info = console.info ? console.info.bind(console, format("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", format("INFO"))), D <= LEVELS.debug && (log.debug = console.debug ? console.debug.bind(console, format("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("DEBUG"))), D <= LEVELS.trace && (log.trace = console.debug ? console.debug.bind(console, format("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("TRACE")));
}, "setLogLevel"), format = /* @__PURE__ */ __name((e) => `%c${(0, import_dayjs_min.default)().format("ss.SSS")} : ${e} : `, "format"), namespaces_default = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace_default(e) {
	var D = e += "", O = D.indexOf(":");
	return O >= 0 && (D = e.slice(0, O)) !== "xmlns" && (e = e.slice(O + 1)), namespaces_default.hasOwnProperty(D) ? {
		space: namespaces_default[D],
		local: e
	} : e;
}
function creatorInherit(e) {
	return function() {
		var D = this.ownerDocument, O = this.namespaceURI;
		return O === "http://www.w3.org/1999/xhtml" && D.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? D.createElement(e) : D.createElementNS(O, e);
	};
}
function creatorFixed(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function creator_default(e) {
	var D = namespace_default(e);
	return (D.local ? creatorFixed : creatorInherit)(D);
}
function none() {}
function selector_default(e) {
	return e == null ? none : function() {
		return this.querySelector(e);
	};
}
function select_default$2(e) {
	typeof e != "function" && (e = selector_default(e));
	for (var D = this._groups, O = D.length, k = Array(O), A = 0; A < O; ++A) for (var j = D[A], M = j.length, N = k[A] = Array(M), P, F, I = 0; I < M; ++I) (P = j[I]) && (F = e.call(P, P.__data__, I, j)) && ("__data__" in P && (F.__data__ = P.__data__), N[I] = F);
	return new Selection$1(k, this._parents);
}
function array(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function empty() {
	return [];
}
function selectorAll_default(e) {
	return e == null ? empty : function() {
		return this.querySelectorAll(e);
	};
}
function arrayAll(e) {
	return function() {
		return array(e.apply(this, arguments));
	};
}
function selectAll_default$1(e) {
	e = typeof e == "function" ? arrayAll(e) : selectorAll_default(e);
	for (var D = this._groups, O = D.length, k = [], A = [], j = 0; j < O; ++j) for (var M = D[j], N = M.length, P, F = 0; F < N; ++F) (P = M[F]) && (k.push(e.call(P, P.__data__, F, M)), A.push(P));
	return new Selection$1(k, A);
}
function matcher_default(e) {
	return function() {
		return this.matches(e);
	};
}
function childMatcher(e) {
	return function(D) {
		return D.matches(e);
	};
}
var find = Array.prototype.find;
function childFind(e) {
	return function() {
		return find.call(this.children, e);
	};
}
function childFirst() {
	return this.firstElementChild;
}
function selectChild_default(e) {
	return this.select(e == null ? childFirst : childFind(typeof e == "function" ? e : childMatcher(e)));
}
var filter = Array.prototype.filter;
function children() {
	return Array.from(this.children);
}
function childrenFilter(e) {
	return function() {
		return filter.call(this.children, e);
	};
}
function selectChildren_default(e) {
	return this.selectAll(e == null ? children : childrenFilter(typeof e == "function" ? e : childMatcher(e)));
}
function filter_default$1(e) {
	typeof e != "function" && (e = matcher_default(e));
	for (var D = this._groups, O = D.length, k = Array(O), A = 0; A < O; ++A) for (var j = D[A], M = j.length, N = k[A] = [], P, F = 0; F < M; ++F) (P = j[F]) && e.call(P, P.__data__, F, j) && N.push(P);
	return new Selection$1(k, this._parents);
}
function sparse_default(e) {
	return Array(e.length);
}
function enter_default() {
	return new Selection$1(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(e, D) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = D;
}
EnterNode.prototype = {
	constructor: EnterNode,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, D) {
		return this._parent.insertBefore(e, D);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
function constant_default(e) {
	return function() {
		return e;
	};
}
function bindIndex(e, D, O, k, A, j) {
	for (var M = 0, N, P = D.length, F = j.length; M < F; ++M) (N = D[M]) ? (N.__data__ = j[M], k[M] = N) : O[M] = new EnterNode(e, j[M]);
	for (; M < P; ++M) (N = D[M]) && (A[M] = N);
}
function bindKey(e, D, O, k, A, j, M) {
	var N, P, F = /* @__PURE__ */ new Map(), I = D.length, L = j.length, R = Array(I), z;
	for (N = 0; N < I; ++N) (P = D[N]) && (R[N] = z = M.call(P, P.__data__, N, D) + "", F.has(z) ? A[N] = P : F.set(z, P));
	for (N = 0; N < L; ++N) z = M.call(e, j[N], N, j) + "", (P = F.get(z)) ? (k[N] = P, P.__data__ = j[N], F.delete(z)) : O[N] = new EnterNode(e, j[N]);
	for (N = 0; N < I; ++N) (P = D[N]) && F.get(R[N]) === P && (A[N] = P);
}
function datum(e) {
	return e.__data__;
}
function data_default(e, D) {
	if (!arguments.length) return Array.from(this, datum);
	var O = D ? bindKey : bindIndex, k = this._parents, A = this._groups;
	typeof e != "function" && (e = constant_default(e));
	for (var j = A.length, M = Array(j), N = Array(j), P = Array(j), F = 0; F < j; ++F) {
		var I = k[F], L = A[F], R = L.length, z = arraylike(e.call(I, I && I.__data__, F, k)), B = z.length, V = N[F] = Array(B), H = M[F] = Array(B);
		O(I, L, V, H, P[F] = Array(R), z, D);
		for (var U = 0, W = 0, G, K; U < B; ++U) if (G = V[U]) {
			for (U >= W && (W = U + 1); !(K = H[W]) && ++W < B;);
			G._next = K || null;
		}
	}
	return M = new Selection$1(M, k), M._enter = N, M._exit = P, M;
}
function arraylike(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function exit_default() {
	return new Selection$1(this._exit || this._groups.map(sparse_default), this._parents);
}
function join_default(e, D, O) {
	var k = this.enter(), A = this, j = this.exit();
	return typeof e == "function" ? (k = e(k), k &&= k.selection()) : k = k.append(e + ""), D != null && (A = D(A), A &&= A.selection()), O == null ? j.remove() : O(j), k && A ? k.merge(A).order() : A;
}
function merge_default$1(e) {
	for (var D = e.selection ? e.selection() : e, O = this._groups, k = D._groups, A = O.length, j = k.length, M = Math.min(A, j), N = Array(A), P = 0; P < M; ++P) for (var F = O[P], I = k[P], L = F.length, R = N[P] = Array(L), z, B = 0; B < L; ++B) (z = F[B] || I[B]) && (R[B] = z);
	for (; P < A; ++P) N[P] = O[P];
	return new Selection$1(N, this._parents);
}
function order_default() {
	for (var e = this._groups, D = -1, O = e.length; ++D < O;) for (var k = e[D], A = k.length - 1, j = k[A], M; --A >= 0;) (M = k[A]) && (j && M.compareDocumentPosition(j) ^ 4 && j.parentNode.insertBefore(M, j), j = M);
	return this;
}
function sort_default(e) {
	e ||= ascending;
	function D(D, O) {
		return D && O ? e(D.__data__, O.__data__) : !D - !O;
	}
	for (var O = this._groups, k = O.length, A = Array(k), j = 0; j < k; ++j) {
		for (var M = O[j], N = M.length, P = A[j] = Array(N), F, I = 0; I < N; ++I) (F = M[I]) && (P[I] = F);
		P.sort(D);
	}
	return new Selection$1(A, this._parents).order();
}
function ascending(e, D) {
	return e < D ? -1 : e > D ? 1 : e >= D ? 0 : NaN;
}
function call_default() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
function nodes_default() {
	return Array.from(this);
}
function node_default() {
	for (var e = this._groups, D = 0, O = e.length; D < O; ++D) for (var k = e[D], A = 0, j = k.length; A < j; ++A) {
		var M = k[A];
		if (M) return M;
	}
	return null;
}
function size_default() {
	let e = 0;
	for (let D of this) ++e;
	return e;
}
function empty_default() {
	return !this.node();
}
function each_default(e) {
	for (var D = this._groups, O = 0, k = D.length; O < k; ++O) for (var A = D[O], j = 0, M = A.length, N; j < M; ++j) (N = A[j]) && e.call(N, N.__data__, j, A);
	return this;
}
function attrRemove$1(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function attrRemoveNS$1(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function attrConstant$1(e, D) {
	return function() {
		this.setAttribute(e, D);
	};
}
function attrConstantNS$1(e, D) {
	return function() {
		this.setAttributeNS(e.space, e.local, D);
	};
}
function attrFunction$1(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		O == null ? this.removeAttribute(e) : this.setAttribute(e, O);
	};
}
function attrFunctionNS$1(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		O == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, O);
	};
}
function attr_default$1(e, D) {
	var O = namespace_default(e);
	if (arguments.length < 2) {
		var k = this.node();
		return O.local ? k.getAttributeNS(O.space, O.local) : k.getAttribute(O);
	}
	return this.each((D == null ? O.local ? attrRemoveNS$1 : attrRemove$1 : typeof D == "function" ? O.local ? attrFunctionNS$1 : attrFunction$1 : O.local ? attrConstantNS$1 : attrConstant$1)(O, D));
}
function window_default(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function styleRemove$1(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function styleConstant$1(e, D, O) {
	return function() {
		this.style.setProperty(e, D, O);
	};
}
function styleFunction$1(e, D, O) {
	return function() {
		var k = D.apply(this, arguments);
		k == null ? this.style.removeProperty(e) : this.style.setProperty(e, k, O);
	};
}
function style_default$1(e, D, O) {
	return arguments.length > 1 ? this.each((D == null ? styleRemove$1 : typeof D == "function" ? styleFunction$1 : styleConstant$1)(e, D, O ?? "")) : styleValue(this.node(), e);
}
function styleValue(e, D) {
	return e.style.getPropertyValue(D) || window_default(e).getComputedStyle(e, null).getPropertyValue(D);
}
function propertyRemove(e) {
	return function() {
		delete this[e];
	};
}
function propertyConstant(e, D) {
	return function() {
		this[e] = D;
	};
}
function propertyFunction(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		O == null ? delete this[e] : this[e] = O;
	};
}
function property_default(e, D) {
	return arguments.length > 1 ? this.each((D == null ? propertyRemove : typeof D == "function" ? propertyFunction : propertyConstant)(e, D)) : this.node()[e];
}
function classArray(e) {
	return e.trim().split(/^|\s+/);
}
function classList(e) {
	return e.classList || new ClassList(e);
}
function ClassList(e) {
	this._node = e, this._names = classArray(e.getAttribute("class") || "");
}
ClassList.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var D = this._names.indexOf(e);
		D >= 0 && (this._names.splice(D, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function classedAdd(e, D) {
	for (var O = classList(e), k = -1, A = D.length; ++k < A;) O.add(D[k]);
}
function classedRemove(e, D) {
	for (var O = classList(e), k = -1, A = D.length; ++k < A;) O.remove(D[k]);
}
function classedTrue(e) {
	return function() {
		classedAdd(this, e);
	};
}
function classedFalse(e) {
	return function() {
		classedRemove(this, e);
	};
}
function classedFunction(e, D) {
	return function() {
		(D.apply(this, arguments) ? classedAdd : classedRemove)(this, e);
	};
}
function classed_default(e, D) {
	var O = classArray(e + "");
	if (arguments.length < 2) {
		for (var k = classList(this.node()), A = -1, j = O.length; ++A < j;) if (!k.contains(O[A])) return !1;
		return !0;
	}
	return this.each((typeof D == "function" ? classedFunction : D ? classedTrue : classedFalse)(O, D));
}
function textRemove() {
	this.textContent = "";
}
function textConstant$1(e) {
	return function() {
		this.textContent = e;
	};
}
function textFunction$1(e) {
	return function() {
		this.textContent = e.apply(this, arguments) ?? "";
	};
}
function text_default$1(e) {
	return arguments.length ? this.each(e == null ? textRemove : (typeof e == "function" ? textFunction$1 : textConstant$1)(e)) : this.node().textContent;
}
function htmlRemove() {
	this.innerHTML = "";
}
function htmlConstant(e) {
	return function() {
		this.innerHTML = e;
	};
}
function htmlFunction(e) {
	return function() {
		this.innerHTML = e.apply(this, arguments) ?? "";
	};
}
function html_default(e) {
	return arguments.length ? this.each(e == null ? htmlRemove : (typeof e == "function" ? htmlFunction : htmlConstant)(e)) : this.node().innerHTML;
}
function raise() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function raise_default() {
	return this.each(raise);
}
function lower() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
	return this.each(lower);
}
function append_default(e) {
	var D = typeof e == "function" ? e : creator_default(e);
	return this.select(function() {
		return this.appendChild(D.apply(this, arguments));
	});
}
function constantNull() {
	return null;
}
function insert_default(e, D) {
	var O = typeof e == "function" ? e : creator_default(e), k = D == null ? constantNull : typeof D == "function" ? D : selector_default(D);
	return this.select(function() {
		return this.insertBefore(O.apply(this, arguments), k.apply(this, arguments) || null);
	});
}
function remove() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function remove_default$1() {
	return this.each(remove);
}
function selection_cloneShallow() {
	var e = this.cloneNode(!1), D = this.parentNode;
	return D ? D.insertBefore(e, this.nextSibling) : e;
}
function selection_cloneDeep() {
	var e = this.cloneNode(!0), D = this.parentNode;
	return D ? D.insertBefore(e, this.nextSibling) : e;
}
function clone_default(e) {
	return this.select(e ? selection_cloneDeep : selection_cloneShallow);
}
function datum_default(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function contextListener(e) {
	return function(D) {
		e.call(this, D, this.__data__);
	};
}
function parseTypenames(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var D = "", O = e.indexOf(".");
		return O >= 0 && (D = e.slice(O + 1), e = e.slice(0, O)), {
			type: e,
			name: D
		};
	});
}
function onRemove(e) {
	return function() {
		var D = this.__on;
		if (D) {
			for (var O = 0, k = -1, A = D.length, j; O < A; ++O) j = D[O], (!e.type || j.type === e.type) && j.name === e.name ? this.removeEventListener(j.type, j.listener, j.options) : D[++k] = j;
			++k ? D.length = k : delete this.__on;
		}
	};
}
function onAdd(e, D, O) {
	return function() {
		var k = this.__on, A, j = contextListener(D);
		if (k) {
			for (var M = 0, N = k.length; M < N; ++M) if ((A = k[M]).type === e.type && A.name === e.name) {
				this.removeEventListener(A.type, A.listener, A.options), this.addEventListener(A.type, A.listener = j, A.options = O), A.value = D;
				return;
			}
		}
		this.addEventListener(e.type, j, O), A = {
			type: e.type,
			name: e.name,
			value: D,
			listener: j,
			options: O
		}, k ? k.push(A) : this.__on = [A];
	};
}
function on_default$1(e, D, O) {
	var k = parseTypenames(e + ""), A, j = k.length, M;
	if (arguments.length < 2) {
		var N = this.node().__on;
		if (N) {
			for (var P = 0, F = N.length, I; P < F; ++P) for (A = 0, I = N[P]; A < j; ++A) if ((M = k[A]).type === I.type && M.name === I.name) return I.value;
		}
		return;
	}
	for (N = D ? onAdd : onRemove, A = 0; A < j; ++A) this.each(N(k[A], D, O));
	return this;
}
function dispatchEvent(e, D, O) {
	var k = window_default(e), A = k.CustomEvent;
	typeof A == "function" ? A = new A(D, O) : (A = k.document.createEvent("Event"), O ? (A.initEvent(D, O.bubbles, O.cancelable), A.detail = O.detail) : A.initEvent(D, !1, !1)), e.dispatchEvent(A);
}
function dispatchConstant(e, D) {
	return function() {
		return dispatchEvent(this, e, D);
	};
}
function dispatchFunction(e, D) {
	return function() {
		return dispatchEvent(this, e, D.apply(this, arguments));
	};
}
function dispatch_default$1(e, D) {
	return this.each((typeof D == "function" ? dispatchFunction : dispatchConstant)(e, D));
}
function* iterator_default() {
	for (var e = this._groups, D = 0, O = e.length; D < O; ++D) for (var k = e[D], A = 0, j = k.length, M; A < j; ++A) (M = k[A]) && (yield M);
}
var root = [null];
function Selection$1(e, D) {
	this._groups = e, this._parents = D;
}
function selection() {
	return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
	return this;
}
Selection$1.prototype = selection.prototype = {
	constructor: Selection$1,
	select: select_default$2,
	selectAll: selectAll_default$1,
	selectChild: selectChild_default,
	selectChildren: selectChildren_default,
	filter: filter_default$1,
	data: data_default,
	enter: enter_default,
	exit: exit_default,
	join: join_default,
	merge: merge_default$1,
	selection: selection_selection,
	order: order_default,
	sort: sort_default,
	call: call_default,
	nodes: nodes_default,
	node: node_default,
	size: size_default,
	empty: empty_default,
	each: each_default,
	attr: attr_default$1,
	style: style_default$1,
	property: property_default,
	classed: classed_default,
	text: text_default$1,
	html: html_default,
	raise: raise_default,
	lower: lower_default,
	append: append_default,
	insert: insert_default,
	remove: remove_default$1,
	clone: clone_default,
	datum: datum_default,
	on: on_default$1,
	dispatch: dispatch_default$1,
	[Symbol.iterator]: iterator_default
};
var selection_default = selection;
function select_default$1(e) {
	return typeof e == "string" ? new Selection$1([[document.querySelector(e)]], [document.documentElement]) : new Selection$1([[e]], root);
}
function timeout_default(e, D, O) {
	var k = new Timer();
	return D = D == null ? 0 : +D, k.restart((O) => {
		k.stop(), e(O + D);
	}, D, O), k;
}
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt"), emptyTween = [];
function schedule_default(e, D, O, k, A, j) {
	var M = e.__transition;
	if (!M) e.__transition = {};
	else if (O in M) return;
	create(e, O, {
		name: D,
		index: k,
		group: A,
		on: emptyOn,
		tween: emptyTween,
		time: j.time,
		delay: j.delay,
		duration: j.duration,
		ease: j.ease,
		timer: null,
		state: 0
	});
}
function init(e, D) {
	var O = get(e, D);
	if (O.state > 0) throw Error("too late; already scheduled");
	return O;
}
function set(e, D) {
	var O = get(e, D);
	if (O.state > 3) throw Error("too late; already running");
	return O;
}
function get(e, D) {
	var O = e.__transition;
	if (!O || !(O = O[D])) throw Error("transition not found");
	return O;
}
function create(e, D, O) {
	var k = e.__transition, A;
	k[D] = O, O.timer = timer(j, 0, O.time);
	function j(e) {
		O.state = 1, O.timer.restart(M, O.delay, O.time), O.delay <= e && M(e - O.delay);
	}
	function M(j) {
		var P, I, L, R;
		if (O.state !== 1) return F();
		for (P in k) if (R = k[P], R.name === O.name) {
			if (R.state === 3) return timeout_default(M);
			R.state === 4 ? (R.state = 6, R.timer.stop(), R.on.call("interrupt", e, e.__data__, R.index, R.group), delete k[P]) : +P < D && (R.state = 6, R.timer.stop(), R.on.call("cancel", e, e.__data__, R.index, R.group), delete k[P]);
		}
		if (timeout_default(function() {
			O.state === 3 && (O.state = 4, O.timer.restart(N, O.delay, O.time), N(j));
		}), O.state = 2, O.on.call("start", e, e.__data__, O.index, O.group), O.state === 2) {
			for (O.state = 3, A = Array(L = O.tween.length), P = 0, I = -1; P < L; ++P) (R = O.tween[P].value.call(e, e.__data__, O.index, O.group)) && (A[++I] = R);
			A.length = I + 1;
		}
	}
	function N(D) {
		for (var k = D < O.duration ? O.ease.call(null, D / O.duration) : (O.timer.restart(F), O.state = 5, 1), j = -1, M = A.length; ++j < M;) A[j].call(e, k);
		O.state === 5 && (O.on.call("end", e, e.__data__, O.index, O.group), F());
	}
	function F() {
		for (var A in O.state = 6, O.timer.stop(), delete k[D], k) return;
		delete e.__transition;
	}
}
function interrupt_default$1(e, D) {
	var O = e.__transition, k, A, j = !0, M;
	if (O) {
		for (M in D = D == null ? null : D + "", O) {
			if ((k = O[M]).name !== D) {
				j = !1;
				continue;
			}
			A = k.state > 2 && k.state < 5, k.state = 6, k.timer.stop(), k.on.call(A ? "interrupt" : "cancel", e, e.__data__, k.index, k.group), delete O[M];
		}
		j && delete e.__transition;
	}
}
function interrupt_default(e) {
	return this.each(function() {
		interrupt_default$1(this, e);
	});
}
function tweenRemove(e, D) {
	var O, k;
	return function() {
		var A = set(this, e), j = A.tween;
		if (j !== O) {
			k = O = j;
			for (var M = 0, N = k.length; M < N; ++M) if (k[M].name === D) {
				k = k.slice(), k.splice(M, 1);
				break;
			}
		}
		A.tween = k;
	};
}
function tweenFunction(e, D, O) {
	var k, A;
	if (typeof O != "function") throw Error();
	return function() {
		var j = set(this, e), M = j.tween;
		if (M !== k) {
			A = (k = M).slice();
			for (var N = {
				name: D,
				value: O
			}, P = 0, F = A.length; P < F; ++P) if (A[P].name === D) {
				A[P] = N;
				break;
			}
			P === F && A.push(N);
		}
		j.tween = A;
	};
}
function tween_default(e, D) {
	var O = this._id;
	if (e += "", arguments.length < 2) {
		for (var k = get(this.node(), O).tween, A = 0, j = k.length, M; A < j; ++A) if ((M = k[A]).name === e) return M.value;
		return null;
	}
	return this.each((D == null ? tweenRemove : tweenFunction)(O, e, D));
}
function tweenValue(e, D, O) {
	var k = e._id;
	return e.each(function() {
		var e = set(this, k);
		(e.value ||= {})[D] = O.apply(this, arguments);
	}), function(e) {
		return get(e, k).value[D];
	};
}
function interpolate_default(e, D) {
	var O;
	return (typeof D == "number" ? number_default : D instanceof color ? rgb_default : (O = color(D)) ? (D = O, rgb_default) : string_default)(e, D);
}
function attrRemove(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function attrRemoveNS(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function attrConstant(e, D, O) {
	var k, A = O + "", j;
	return function() {
		var M = this.getAttribute(e);
		return M === A ? null : M === k ? j : j = D(k = M, O);
	};
}
function attrConstantNS(e, D, O) {
	var k, A = O + "", j;
	return function() {
		var M = this.getAttributeNS(e.space, e.local);
		return M === A ? null : M === k ? j : j = D(k = M, O);
	};
}
function attrFunction(e, D, O) {
	var k, A, j;
	return function() {
		var M, N = O(this), P;
		return N == null ? void this.removeAttribute(e) : (M = this.getAttribute(e), P = N + "", M === P ? null : M === k && P === A ? j : (A = P, j = D(k = M, N)));
	};
}
function attrFunctionNS(e, D, O) {
	var k, A, j;
	return function() {
		var M, N = O(this), P;
		return N == null ? void this.removeAttributeNS(e.space, e.local) : (M = this.getAttributeNS(e.space, e.local), P = N + "", M === P ? null : M === k && P === A ? j : (A = P, j = D(k = M, N)));
	};
}
function attr_default(e, D) {
	var k = namespace_default(e), A = k === "transform" ? interpolateTransformSvg : interpolate_default;
	return this.attrTween(e, typeof D == "function" ? (k.local ? attrFunctionNS : attrFunction)(k, A, tweenValue(this, "attr." + e, D)) : D == null ? (k.local ? attrRemoveNS : attrRemove)(k) : (k.local ? attrConstantNS : attrConstant)(k, A, D));
}
function attrInterpolate(e, D) {
	return function(O) {
		this.setAttribute(e, D.call(this, O));
	};
}
function attrInterpolateNS(e, D) {
	return function(O) {
		this.setAttributeNS(e.space, e.local, D.call(this, O));
	};
}
function attrTweenNS(e, D) {
	var O, k;
	function A() {
		var A = D.apply(this, arguments);
		return A !== k && (O = (k = A) && attrInterpolateNS(e, A)), O;
	}
	return A._value = D, A;
}
function attrTween(e, D) {
	var O, k;
	function A() {
		var A = D.apply(this, arguments);
		return A !== k && (O = (k = A) && attrInterpolate(e, A)), O;
	}
	return A._value = D, A;
}
function attrTween_default(e, D) {
	var O = "attr." + e;
	if (arguments.length < 2) return (O = this.tween(O)) && O._value;
	if (D == null) return this.tween(O, null);
	if (typeof D != "function") throw Error();
	var k = namespace_default(e);
	return this.tween(O, (k.local ? attrTweenNS : attrTween)(k, D));
}
function delayFunction(e, D) {
	return function() {
		init(this, e).delay = +D.apply(this, arguments);
	};
}
function delayConstant(e, D) {
	return D = +D, function() {
		init(this, e).delay = D;
	};
}
function delay_default(e) {
	var D = this._id;
	return arguments.length ? this.each((typeof e == "function" ? delayFunction : delayConstant)(D, e)) : get(this.node(), D).delay;
}
function durationFunction(e, D) {
	return function() {
		set(this, e).duration = +D.apply(this, arguments);
	};
}
function durationConstant(e, D) {
	return D = +D, function() {
		set(this, e).duration = D;
	};
}
function duration_default(e) {
	var D = this._id;
	return arguments.length ? this.each((typeof e == "function" ? durationFunction : durationConstant)(D, e)) : get(this.node(), D).duration;
}
function easeConstant(e, D) {
	if (typeof D != "function") throw Error();
	return function() {
		set(this, e).ease = D;
	};
}
function ease_default(e) {
	var D = this._id;
	return arguments.length ? this.each(easeConstant(D, e)) : get(this.node(), D).ease;
}
function easeVarying(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		if (typeof O != "function") throw Error();
		set(this, e).ease = O;
	};
}
function easeVarying_default(e) {
	if (typeof e != "function") throw Error();
	return this.each(easeVarying(this._id, e));
}
function filter_default(e) {
	typeof e != "function" && (e = matcher_default(e));
	for (var D = this._groups, O = D.length, k = Array(O), A = 0; A < O; ++A) for (var j = D[A], M = j.length, N = k[A] = [], P, F = 0; F < M; ++F) (P = j[F]) && e.call(P, P.__data__, F, j) && N.push(P);
	return new Transition(k, this._parents, this._name, this._id);
}
function merge_default(e) {
	if (e._id !== this._id) throw Error();
	for (var D = this._groups, O = e._groups, k = D.length, A = O.length, j = Math.min(k, A), M = Array(k), N = 0; N < j; ++N) for (var P = D[N], F = O[N], I = P.length, L = M[N] = Array(I), R, z = 0; z < I; ++z) (R = P[z] || F[z]) && (L[z] = R);
	for (; N < k; ++N) M[N] = D[N];
	return new Transition(M, this._parents, this._name, this._id);
}
function start(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var D = e.indexOf(".");
		return D >= 0 && (e = e.slice(0, D)), !e || e === "start";
	});
}
function onFunction(e, D, O) {
	var k, A, j = start(D) ? init : set;
	return function() {
		var M = j(this, e), N = M.on;
		N !== k && (A = (k = N).copy()).on(D, O), M.on = A;
	};
}
function on_default(e, D) {
	var O = this._id;
	return arguments.length < 2 ? get(this.node(), O).on.on(e) : this.each(onFunction(O, e, D));
}
function removeFunction(e) {
	return function() {
		var D = this.parentNode;
		for (var O in this.__transition) if (+O !== e) return;
		D && D.removeChild(this);
	};
}
function remove_default() {
	return this.on("end.remove", removeFunction(this._id));
}
function select_default(e) {
	var D = this._name, O = this._id;
	typeof e != "function" && (e = selector_default(e));
	for (var k = this._groups, A = k.length, j = Array(A), M = 0; M < A; ++M) for (var N = k[M], P = N.length, F = j[M] = Array(P), I, L, R = 0; R < P; ++R) (I = N[R]) && (L = e.call(I, I.__data__, R, N)) && ("__data__" in I && (L.__data__ = I.__data__), F[R] = L, schedule_default(F[R], D, O, R, F, get(I, O)));
	return new Transition(j, this._parents, D, O);
}
function selectAll_default(e) {
	var D = this._name, O = this._id;
	typeof e != "function" && (e = selectorAll_default(e));
	for (var k = this._groups, A = k.length, j = [], M = [], N = 0; N < A; ++N) for (var P = k[N], F = P.length, I, L = 0; L < F; ++L) if (I = P[L]) {
		for (var R = e.call(I, I.__data__, L, P), z, B = get(I, O), V = 0, H = R.length; V < H; ++V) (z = R[V]) && schedule_default(z, D, O, V, R, B);
		j.push(R), M.push(I);
	}
	return new Transition(j, M, D, O);
}
var Selection = selection_default.prototype.constructor;
function selection_default$1() {
	return new Selection(this._groups, this._parents);
}
function styleNull(e, D) {
	var O, k, A;
	return function() {
		var j = styleValue(this, e), M = (this.style.removeProperty(e), styleValue(this, e));
		return j === M ? null : j === O && M === k ? A : A = D(O = j, k = M);
	};
}
function styleRemove(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function styleConstant(e, D, O) {
	var k, A = O + "", j;
	return function() {
		var M = styleValue(this, e);
		return M === A ? null : M === k ? j : j = D(k = M, O);
	};
}
function styleFunction(e, D, O) {
	var k, A, j;
	return function() {
		var M = styleValue(this, e), N = O(this), P = N + "";
		return N ?? (P = N = (this.style.removeProperty(e), styleValue(this, e))), M === P ? null : M === k && P === A ? j : (A = P, j = D(k = M, N));
	};
}
function styleMaybeRemove(e, D) {
	var O, k, A, j = "style." + D, M = "end." + j, N;
	return function() {
		var P = set(this, e), F = P.on, I = P.value[j] == null ? N ||= styleRemove(D) : void 0;
		(F !== O || A !== I) && (k = (O = F).copy()).on(M, A = I), P.on = k;
	};
}
function style_default(e, D, O) {
	var k = (e += "") == "transform" ? interpolateTransformCss : interpolate_default;
	return D == null ? this.styleTween(e, styleNull(e, k)).on("end.style." + e, styleRemove(e)) : typeof D == "function" ? this.styleTween(e, styleFunction(e, k, tweenValue(this, "style." + e, D))).each(styleMaybeRemove(this._id, e)) : this.styleTween(e, styleConstant(e, k, D), O).on("end.style." + e, null);
}
function styleInterpolate(e, D, O) {
	return function(k) {
		this.style.setProperty(e, D.call(this, k), O);
	};
}
function styleTween(e, D, O) {
	var k, A;
	function j() {
		var j = D.apply(this, arguments);
		return j !== A && (k = (A = j) && styleInterpolate(e, j, O)), k;
	}
	return j._value = D, j;
}
function styleTween_default(e, D, O) {
	var k = "style." + (e += "");
	if (arguments.length < 2) return (k = this.tween(k)) && k._value;
	if (D == null) return this.tween(k, null);
	if (typeof D != "function") throw Error();
	return this.tween(k, styleTween(e, D, O ?? ""));
}
function textConstant(e) {
	return function() {
		this.textContent = e;
	};
}
function textFunction(e) {
	return function() {
		this.textContent = e(this) ?? "";
	};
}
function text_default(e) {
	return this.tween("text", typeof e == "function" ? textFunction(tweenValue(this, "text", e)) : textConstant(e == null ? "" : e + ""));
}
function textInterpolate(e) {
	return function(D) {
		this.textContent = e.call(this, D);
	};
}
function textTween(e) {
	var D, O;
	function k() {
		var k = e.apply(this, arguments);
		return k !== O && (D = (O = k) && textInterpolate(k)), D;
	}
	return k._value = e, k;
}
function textTween_default(e) {
	var D = "text";
	if (arguments.length < 1) return (D = this.tween(D)) && D._value;
	if (e == null) return this.tween(D, null);
	if (typeof e != "function") throw Error();
	return this.tween(D, textTween(e));
}
function transition_default$1() {
	for (var e = this._name, D = this._id, O = newId(), k = this._groups, A = k.length, j = 0; j < A; ++j) for (var M = k[j], N = M.length, P, F = 0; F < N; ++F) if (P = M[F]) {
		var I = get(P, D);
		schedule_default(P, e, O, F, M, {
			time: I.time + I.delay + I.duration,
			delay: 0,
			duration: I.duration,
			ease: I.ease
		});
	}
	return new Transition(k, this._parents, e, O);
}
function end_default() {
	var e, D, O = this, k = O._id, A = O.size();
	return new Promise(function(j, M) {
		var N = { value: M }, P = { value: function() {
			--A === 0 && j();
		} };
		O.each(function() {
			var O = set(this, k), A = O.on;
			A !== e && (D = (e = A).copy(), D._.cancel.push(N), D._.interrupt.push(N), D._.end.push(P)), O.on = D;
		}), A === 0 && j();
	});
}
var id = 0;
function Transition(e, D, O, k) {
	this._groups = e, this._parents = D, this._name = O, this._id = k;
}
function transition(e) {
	return selection_default().transition(e);
}
function newId() {
	return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
	constructor: Transition,
	select: select_default,
	selectAll: selectAll_default,
	selectChild: selection_prototype.selectChild,
	selectChildren: selection_prototype.selectChildren,
	filter: filter_default,
	merge: merge_default,
	selection: selection_default$1,
	transition: transition_default$1,
	call: selection_prototype.call,
	nodes: selection_prototype.nodes,
	node: selection_prototype.node,
	size: selection_prototype.size,
	empty: selection_prototype.empty,
	each: selection_prototype.each,
	on: on_default,
	attr: attr_default,
	attrTween: attrTween_default,
	style: style_default,
	styleTween: styleTween_default,
	text: text_default,
	textTween: textTween_default,
	remove: remove_default,
	tween: tween_default,
	delay: delay_default,
	duration: duration_default,
	ease: ease_default,
	easeVarying: easeVarying_default,
	end: end_default,
	[Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var defaultTiming = {
	time: null,
	delay: 0,
	duration: 250,
	ease: cubicInOut
};
function inherit(e, D) {
	for (var O; !(O = e.__transition) || !(O = O[D]);) if (!(e = e.parentNode)) throw Error(`transition ${D} not found`);
	return O;
}
function transition_default(e) {
	var D, O;
	e instanceof Transition ? (D = e._id, e = e._name) : (D = newId(), (O = defaultTiming).time = now(), e = e == null ? null : e + "");
	for (var k = this._groups, A = k.length, j = 0; j < A; ++j) for (var N = k[j], P = N.length, F, I = 0; I < P; ++I) (F = N[I]) && schedule_default(F, e, D, I, N, O || inherit(F, D));
	return new Transition(k, this._parents, e, D);
}
selection_default.prototype.interrupt = interrupt_default, selection_default.prototype.transition = transition_default;
var { abs, max, min } = Math;
["w", "e"].map(type), ["n", "s"].map(type), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(type);
function type(e) {
	return { type: e };
}
function Transform(e, D, O) {
	this.k = e, this.x = D, this.y = O;
}
Transform.prototype = {
	constructor: Transform,
	scale: function(e) {
		return e === 1 ? this : new Transform(this.k * e, this.x, this.y);
	},
	translate: function(e, D) {
		return e === 0 & D === 0 ? this : new Transform(this.k, this.x + this.k * e, this.y + this.k * D);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return identity;
	return e.__zoom;
}
export { setLogLevel as a, log as i, __export as n, require_dayjs_min as o, __name as r, select_default$1 as t };
