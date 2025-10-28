import { n as __esmMin } from "./chunk-DgPTj83v.js";
function getLens(e) {
	var t = e.length;
	if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
	var n = e.indexOf("=");
	n === -1 && (n = t);
	var r = n === t ? 0 : 4 - n % 4;
	return [n, r];
}
function byteLength(e) {
	var n = getLens(e), r = n[0], a = n[1];
	return (r + a) * 3 / 4 - a;
}
function _byteLength(e, t, n) {
	return (t + n) * 3 / 4 - n;
}
function toByteArray(e) {
	var n, a = getLens(e), o = a[0], s = a[1], c = new Arr(_byteLength(e, o, s)), l = 0, u = s > 0 ? o - 4 : o, d;
	for (d = 0; d < u; d += 4) n = revLookup[e.charCodeAt(d)] << 18 | revLookup[e.charCodeAt(d + 1)] << 12 | revLookup[e.charCodeAt(d + 2)] << 6 | revLookup[e.charCodeAt(d + 3)], c[l++] = n >> 16 & 255, c[l++] = n >> 8 & 255, c[l++] = n & 255;
	return s === 2 && (n = revLookup[e.charCodeAt(d)] << 2 | revLookup[e.charCodeAt(d + 1)] >> 4, c[l++] = n & 255), s === 1 && (n = revLookup[e.charCodeAt(d)] << 10 | revLookup[e.charCodeAt(d + 1)] << 4 | revLookup[e.charCodeAt(d + 2)] >> 2, c[l++] = n >> 8 & 255, c[l++] = n & 255), c;
}
function tripletToBase64(e) {
	return lookup[e >> 18 & 63] + lookup[e >> 12 & 63] + lookup[e >> 6 & 63] + lookup[e & 63];
}
function encodeChunk(e, t, n) {
	for (var r, a = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255), a.push(tripletToBase64(r));
	return a.join("");
}
function fromByteArray(e) {
	for (var t, n = e.length, r = n % 3, a = [], o = 16383, c = 0, l = n - r; c < l; c += o) a.push(encodeChunk(e, c, c + o > l ? l : c + o));
	return r === 1 ? (t = e[n - 1], a.push(lookup[t >> 2] + lookup[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], a.push(lookup[t >> 10] + lookup[t >> 4 & 63] + lookup[t << 2 & 63] + "=")), a.join("");
}
var buffer, base64Js, lookup, revLookup, Arr, code, i, len, ieee754, Buffer, init_dist = __esmMin((() => {
	for (buffer = {}, base64Js = {}, base64Js.byteLength = byteLength, base64Js.toByteArray = toByteArray, base64Js.fromByteArray = fromByteArray, lookup = [], revLookup = [], Arr = typeof Uint8Array < "u" ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i) lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
	revLookup[45] = 62, revLookup[95] = 63, ieee754 = {}, ieee754.read = function(e, t, n, r, a) {
		var o, s, c = a * 8 - r - 1, l = (1 << c) - 1, u = l >> 1, d = -7, f = n ? a - 1 : 0, p = n ? -1 : 1, m = e[t + f];
		for (f += p, o = m & (1 << -d) - 1, m >>= -d, d += c; d > 0; o = o * 256 + e[t + f], f += p, d -= 8);
		for (s = o & (1 << -d) - 1, o >>= -d, d += r; d > 0; s = s * 256 + e[t + f], f += p, d -= 8);
		if (o === 0) o = 1 - u;
		else if (o === l) return s ? NaN : (m ? -1 : 1) * Infinity;
		else s += 2 ** r, o -= u;
		return (m ? -1 : 1) * s * 2 ** (o - r);
	}, ieee754.write = function(e, t, n, r, a, o) {
		var s, c, l, u = o * 8 - a - 1, d = (1 << u) - 1, f = d >> 1, p = a === 23 ? 2 ** -24 - 2 ** -77 : 0, m = r ? 0 : o - 1, h = r ? 1 : -1, g = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (c = isNaN(t) ? 1 : 0, s = d) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = 2 ** -s) < 1 && (s--, l *= 2), s + f >= 1 ? t += p / l : t += p * 2 ** (1 - f), t * l >= 2 && (s++, l /= 2), s + f >= d ? (c = 0, s = d) : s + f >= 1 ? (c = (t * l - 1) * 2 ** a, s += f) : (c = t * 2 ** (f - 1) * 2 ** a, s = 0)); a >= 8; e[n + m] = c & 255, m += h, c /= 256, a -= 8);
		for (s = s << a | c, u += a; u > 0; e[n + m] = s & 255, m += h, s /= 256, u -= 8);
		e[n + m - h] |= g * 128;
	}, (function(e) {
		let t = base64Js, n = ieee754, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
		e.Buffer = f, e.SlowBuffer = b, e.INSPECT_MAX_BYTES = 50;
		let a = 2147483647;
		e.kMaxLength = a;
		let { Uint8Array: o, ArrayBuffer: s, SharedArrayBuffer: c } = globalThis;
		f.TYPED_ARRAY_SUPPORT = l(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
		function l() {
			try {
				let e = new o(1), t = { foo: function() {
					return 42;
				} };
				return Object.setPrototypeOf(t, o.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
			} catch {
				return !1;
			}
		}
		Object.defineProperty(f.prototype, "parent", {
			enumerable: !0,
			get: function() {
				if (f.isBuffer(this)) return this.buffer;
			}
		}), Object.defineProperty(f.prototype, "offset", {
			enumerable: !0,
			get: function() {
				if (f.isBuffer(this)) return this.byteOffset;
			}
		});
		function d(e) {
			if (e > a) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
			let t = new o(e);
			return Object.setPrototypeOf(t, f.prototype), t;
		}
		function f(e, t, n) {
			if (typeof e == "number") {
				if (typeof t == "string") throw TypeError("The \"string\" argument must be of type string. Received type number");
				return g(e);
			}
			return p(e, t, n);
		}
		f.poolSize = 8192;
		function p(e, t, n) {
			if (typeof e == "string") return te(e, t);
			if (s.isView(e)) return ne(e);
			if (e == null) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
			if (Z(e, s) || e && Z(e.buffer, s) || c !== void 0 && (Z(e, c) || e && Z(e.buffer, c))) return v(e, t, n);
			if (typeof e == "number") throw TypeError("The \"value\" argument must not be of type number. Received type number");
			let r = e.valueOf && e.valueOf();
			if (r != null && r !== e) return f.from(r, t, n);
			let a = re(e);
			if (a) return a;
			if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return f.from(e[Symbol.toPrimitive]("string"), t, n);
			throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
		}
		f.from = function(e, t, n) {
			return p(e, t, n);
		}, Object.setPrototypeOf(f.prototype, o.prototype), Object.setPrototypeOf(f, o);
		function m(e) {
			if (typeof e != "number") throw TypeError("\"size\" argument must be of type number");
			if (e < 0) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
		}
		function h(e, t, n) {
			return m(e), e <= 0 || t === void 0 ? d(e) : typeof n == "string" ? d(e).fill(t, n) : d(e).fill(t);
		}
		f.alloc = function(e, t, n) {
			return h(e, t, n);
		};
		function g(e) {
			return m(e), d(e < 0 ? 0 : y(e) | 0);
		}
		f.allocUnsafe = function(e) {
			return g(e);
		}, f.allocUnsafeSlow = function(e) {
			return g(e);
		};
		function te(e, t) {
			if ((typeof t != "string" || t === "") && (t = "utf8"), !f.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
			let n = x(e, t) | 0, r = d(n), a = r.write(e, t);
			return a !== n && (r = r.slice(0, a)), r;
		}
		function _(e) {
			let t = e.length < 0 ? 0 : y(e.length) | 0, n = d(t);
			for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
			return n;
		}
		function ne(e) {
			if (Z(e, o)) {
				let t = new o(e);
				return v(t.buffer, t.byteOffset, t.byteLength);
			}
			return _(e);
		}
		function v(e, t, n) {
			if (t < 0 || e.byteLength < t) throw RangeError("\"offset\" is outside of buffer bounds");
			if (e.byteLength < t + (n || 0)) throw RangeError("\"length\" is outside of buffer bounds");
			let r;
			return r = t === void 0 && n === void 0 ? new o(e) : n === void 0 ? new o(e, t) : new o(e, t, n), Object.setPrototypeOf(r, f.prototype), r;
		}
		function re(e) {
			if (f.isBuffer(e)) {
				let t = y(e.length) | 0, n = d(t);
				return n.length === 0 || e.copy(n, 0, 0, t), n;
			}
			if (e.length !== void 0) return typeof e.length != "number" || Q(e.length) ? d(0) : _(e);
			if (e.type === "Buffer" && Array.isArray(e.data)) return _(e.data);
		}
		function y(e) {
			if (e >= a) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
			return e | 0;
		}
		function b(e) {
			return +e != e && (e = 0), f.alloc(+e);
		}
		f.isBuffer = function(e) {
			return e != null && e._isBuffer === !0 && e !== f.prototype;
		}, f.compare = function(e, t) {
			if (Z(e, o) && (e = f.from(e, e.offset, e.byteLength)), Z(t, o) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
			if (e === t) return 0;
			let n = e.length, r = t.length;
			for (let a = 0, o = Math.min(n, r); a < o; ++a) if (e[a] !== t[a]) {
				n = e[a], r = t[a];
				break;
			}
			return n < r ? -1 : r < n ? 1 : 0;
		}, f.isEncoding = function(e) {
			switch (String(e).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return !0;
				default: return !1;
			}
		}, f.concat = function(e, t) {
			if (!Array.isArray(e)) throw TypeError("\"list\" argument must be an Array of Buffers");
			if (e.length === 0) return f.alloc(0);
			let n;
			if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
			let r = f.allocUnsafe(t), a = 0;
			for (n = 0; n < e.length; ++n) {
				let t = e[n];
				if (Z(t, o)) a + t.length > r.length ? (f.isBuffer(t) || (t = f.from(t)), t.copy(r, a)) : o.prototype.set.call(r, t, a);
				else if (f.isBuffer(t)) t.copy(r, a);
				else throw TypeError("\"list\" argument must be an Array of Buffers");
				a += t.length;
			}
			return r;
		};
		function x(e, t) {
			if (f.isBuffer(e)) return e.length;
			if (s.isView(e) || Z(e, s)) return e.byteLength;
			if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
			let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
			if (!r && n === 0) return 0;
			let a = !1;
			for (;;) switch (t) {
				case "ascii":
				case "latin1":
				case "binary": return n;
				case "utf8":
				case "utf-8": return q(e).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return n * 2;
				case "hex": return n >>> 1;
				case "base64": return Y(e).length;
				default:
					if (a) return r ? -1 : q(e).length;
					t = ("" + t).toLowerCase(), a = !0;
			}
		}
		f.byteLength = x;
		function ie(e, t, n) {
			let r = !1;
			if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
			for (e ||= "utf8";;) switch (e) {
				case "hex": return ce(this, t, n);
				case "utf8":
				case "utf-8": return j(this, t, n);
				case "ascii": return oe(this, t, n);
				case "latin1":
				case "binary": return se(this, t, n);
				case "base64": return A(this, t, n);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return le(this, t, n);
				default:
					if (r) throw TypeError("Unknown encoding: " + e);
					e = (e + "").toLowerCase(), r = !0;
			}
		}
		f.prototype._isBuffer = !0;
		function S(e, t, n) {
			let r = e[t];
			e[t] = e[n], e[n] = r;
		}
		f.prototype.swap16 = function() {
			let e = this.length;
			if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
			for (let t = 0; t < e; t += 2) S(this, t, t + 1);
			return this;
		}, f.prototype.swap32 = function() {
			let e = this.length;
			if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
			for (let t = 0; t < e; t += 4) S(this, t, t + 3), S(this, t + 1, t + 2);
			return this;
		}, f.prototype.swap64 = function() {
			let e = this.length;
			if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
			for (let t = 0; t < e; t += 8) S(this, t, t + 7), S(this, t + 1, t + 6), S(this, t + 2, t + 5), S(this, t + 3, t + 4);
			return this;
		}, f.prototype.toString = function() {
			let e = this.length;
			return e === 0 ? "" : arguments.length === 0 ? j(this, 0, e) : ie.apply(this, arguments);
		}, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(e) {
			if (!f.isBuffer(e)) throw TypeError("Argument must be a Buffer");
			return this === e ? !0 : f.compare(this, e) === 0;
		}, f.prototype.inspect = function() {
			let t = "", n = e.INSPECT_MAX_BYTES;
			return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
		}, r && (f.prototype[r] = f.prototype.inspect), f.prototype.compare = function(e, t, n, r, a) {
			if (Z(e, o) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
			if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), r === void 0 && (r = 0), a === void 0 && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw RangeError("out of range index");
			if (r >= a && t >= n) return 0;
			if (r >= a) return -1;
			if (t >= n) return 1;
			if (t >>>= 0, n >>>= 0, r >>>= 0, a >>>= 0, this === e) return 0;
			let s = a - r, c = n - t, l = Math.min(s, c), u = this.slice(r, a), d = e.slice(t, n);
			for (let e = 0; e < l; ++e) if (u[e] !== d[e]) {
				s = u[e], c = d[e];
				break;
			}
			return s < c ? -1 : c < s ? 1 : 0;
		};
		function C(e, t, n, r, a) {
			if (e.length === 0) return -1;
			if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Q(n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
				if (a) return -1;
				n = e.length - 1;
			} else if (n < 0) if (a) n = 0;
			else return -1;
			if (typeof t == "string" && (t = f.from(t, r)), f.isBuffer(t)) return t.length === 0 ? -1 : w(e, t, n, r, a);
			if (typeof t == "number") return t &= 255, typeof o.prototype.indexOf == "function" ? a ? o.prototype.indexOf.call(e, t, n) : o.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, r, a);
			throw TypeError("val must be string, number or Buffer");
		}
		function w(e, t, n, r, a) {
			let o = 1, s = e.length, c = t.length;
			if (r !== void 0 && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
				if (e.length < 2 || t.length < 2) return -1;
				o = 2, s /= 2, c /= 2, n /= 2;
			}
			function l(e, t) {
				return o === 1 ? e[t] : e.readUInt16BE(t * o);
			}
			let u;
			if (a) {
				let r = -1;
				for (u = n; u < s; u++) if (l(e, u) === l(t, r === -1 ? 0 : u - r)) {
					if (r === -1 && (r = u), u - r + 1 === c) return r * o;
				} else r !== -1 && (u -= u - r), r = -1;
			} else for (n + c > s && (n = s - c), u = n; u >= 0; u--) {
				let n = !0;
				for (let r = 0; r < c; r++) if (l(e, u + r) !== l(t, r)) {
					n = !1;
					break;
				}
				if (n) return u;
			}
			return -1;
		}
		f.prototype.includes = function(e, t, n) {
			return this.indexOf(e, t, n) !== -1;
		}, f.prototype.indexOf = function(e, t, n) {
			return C(this, e, t, n, !0);
		}, f.prototype.lastIndexOf = function(e, t, n) {
			return C(this, e, t, n, !1);
		};
		function T(e, t, n, r) {
			n = Number(n) || 0;
			let a = e.length - n;
			r ? (r = Number(r), r > a && (r = a)) : r = a;
			let o = t.length;
			r > o / 2 && (r = o / 2);
			let s;
			for (s = 0; s < r; ++s) {
				let r = parseInt(t.substr(s * 2, 2), 16);
				if (Q(r)) return s;
				e[n + s] = r;
			}
			return s;
		}
		function E(e, t, n, r) {
			return X(q(t, e.length - n), e, n, r);
		}
		function D(e, t, n, r) {
			return X(fe(t), e, n, r);
		}
		function O(e, t, n, r) {
			return X(Y(t), e, n, r);
		}
		function k(e, t, n, r) {
			return X(J(t, e.length - n), e, n, r);
		}
		f.prototype.write = function(e, t, n, r) {
			if (t === void 0) r = "utf8", n = this.length, t = 0;
			else if (n === void 0 && typeof t == "string") r = t, n = this.length, t = 0;
			else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, r === void 0 && (r = "utf8")) : (r = n, n = void 0);
			else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			let a = this.length - t;
			if ((n === void 0 || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
			r ||= "utf8";
			let o = !1;
			for (;;) switch (r) {
				case "hex": return T(this, e, t, n);
				case "utf8":
				case "utf-8": return E(this, e, t, n);
				case "ascii":
				case "latin1":
				case "binary": return D(this, e, t, n);
				case "base64": return O(this, e, t, n);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return k(this, e, t, n);
				default:
					if (o) throw TypeError("Unknown encoding: " + r);
					r = ("" + r).toLowerCase(), o = !0;
			}
		}, f.prototype.toJSON = function() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			};
		};
		function A(e, n, r) {
			return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
		}
		function j(e, t, n) {
			n = Math.min(e.length, n);
			let r = [], a = t;
			for (; a < n;) {
				let t = e[a], o = null, s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
				if (a + s <= n) {
					let n, r, c, l;
					switch (s) {
						case 1:
							t < 128 && (o = t);
							break;
						case 2:
							n = e[a + 1], (n & 192) == 128 && (l = (t & 31) << 6 | n & 63, l > 127 && (o = l));
							break;
						case 3:
							n = e[a + 1], r = e[a + 2], (n & 192) == 128 && (r & 192) == 128 && (l = (t & 15) << 12 | (n & 63) << 6 | r & 63, l > 2047 && (l < 55296 || l > 57343) && (o = l));
							break;
						case 4: n = e[a + 1], r = e[a + 2], c = e[a + 3], (n & 192) == 128 && (r & 192) == 128 && (c & 192) == 128 && (l = (t & 15) << 18 | (n & 63) << 12 | (r & 63) << 6 | c & 63, l > 65535 && l < 1114112 && (o = l));
					}
				}
				o === null ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), r.push(o), a += s;
			}
			return ae(r);
		}
		let M = 4096;
		function ae(e) {
			let t = e.length;
			if (t <= M) return String.fromCharCode.apply(String, e);
			let n = "", r = 0;
			for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += M));
			return n;
		}
		function oe(e, t, n) {
			let r = "";
			n = Math.min(e.length, n);
			for (let a = t; a < n; ++a) r += String.fromCharCode(e[a] & 127);
			return r;
		}
		function se(e, t, n) {
			let r = "";
			n = Math.min(e.length, n);
			for (let a = t; a < n; ++a) r += String.fromCharCode(e[a]);
			return r;
		}
		function ce(e, t, n) {
			let r = e.length;
			(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
			let a = "";
			for (let r = t; r < n; ++r) a += pe[e[r]];
			return a;
		}
		function le(e, t, n) {
			let r = e.slice(t, n), a = "";
			for (let e = 0; e < r.length - 1; e += 2) a += String.fromCharCode(r[e] + r[e + 1] * 256);
			return a;
		}
		f.prototype.slice = function(e, t) {
			let n = this.length;
			e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
			let r = this.subarray(e, t);
			return Object.setPrototypeOf(r, f.prototype), r;
		};
		function N(e, t, n) {
			if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
			if (e + t > n) throw RangeError("Trying to access beyond buffer length");
		}
		f.prototype.readUintLE = f.prototype.readUIntLE = function(e, t, n) {
			e >>>= 0, t >>>= 0, n || N(e, t, this.length);
			let r = this[e], a = 1, o = 0;
			for (; ++o < t && (a *= 256);) r += this[e + o] * a;
			return r;
		}, f.prototype.readUintBE = f.prototype.readUIntBE = function(e, t, n) {
			e >>>= 0, t >>>= 0, n || N(e, t, this.length);
			let r = this[e + --t], a = 1;
			for (; t > 0 && (a *= 256);) r += this[e + --t] * a;
			return r;
		}, f.prototype.readUint8 = f.prototype.readUInt8 = function(e, t) {
			return e >>>= 0, t || N(e, 1, this.length), this[e];
		}, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(e, t) {
			return e >>>= 0, t || N(e, 2, this.length), this[e] | this[e + 1] << 8;
		}, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(e, t) {
			return e >>>= 0, t || N(e, 2, this.length), this[e] << 8 | this[e + 1];
		}, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(e, t) {
			return e >>>= 0, t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
		}, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(e, t) {
			return e >>>= 0, t || N(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
		}, f.prototype.readBigUInt64LE = $(function(e) {
			e >>>= 0, G(e, "offset");
			let t = this[e], n = this[e + 7];
			(t === void 0 || n === void 0) && K(e, this.length - 8);
			let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, a = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
			return BigInt(r) + (BigInt(a) << BigInt(32));
		}), f.prototype.readBigUInt64BE = $(function(e) {
			e >>>= 0, G(e, "offset");
			let t = this[e], n = this[e + 7];
			(t === void 0 || n === void 0) && K(e, this.length - 8);
			let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], a = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
			return (BigInt(r) << BigInt(32)) + BigInt(a);
		}), f.prototype.readIntLE = function(e, t, n) {
			e >>>= 0, t >>>= 0, n || N(e, t, this.length);
			let r = this[e], a = 1, o = 0;
			for (; ++o < t && (a *= 256);) r += this[e + o] * a;
			return a *= 128, r >= a && (r -= 2 ** (8 * t)), r;
		}, f.prototype.readIntBE = function(e, t, n) {
			e >>>= 0, t >>>= 0, n || N(e, t, this.length);
			let r = t, a = 1, o = this[e + --r];
			for (; r > 0 && (a *= 256);) o += this[e + --r] * a;
			return a *= 128, o >= a && (o -= 2 ** (8 * t)), o;
		}, f.prototype.readInt8 = function(e, t) {
			return e >>>= 0, t || N(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
		}, f.prototype.readInt16LE = function(e, t) {
			e >>>= 0, t || N(e, 2, this.length);
			let n = this[e] | this[e + 1] << 8;
			return n & 32768 ? n | 4294901760 : n;
		}, f.prototype.readInt16BE = function(e, t) {
			e >>>= 0, t || N(e, 2, this.length);
			let n = this[e + 1] | this[e] << 8;
			return n & 32768 ? n | 4294901760 : n;
		}, f.prototype.readInt32LE = function(e, t) {
			return e >>>= 0, t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
		}, f.prototype.readInt32BE = function(e, t) {
			return e >>>= 0, t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
		}, f.prototype.readBigInt64LE = $(function(e) {
			e >>>= 0, G(e, "offset");
			let t = this[e], n = this[e + 7];
			(t === void 0 || n === void 0) && K(e, this.length - 8);
			let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
			return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
		}), f.prototype.readBigInt64BE = $(function(e) {
			e >>>= 0, G(e, "offset");
			let t = this[e], n = this[e + 7];
			(t === void 0 || n === void 0) && K(e, this.length - 8);
			let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
			return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
		}), f.prototype.readFloatLE = function(e, t) {
			return e >>>= 0, t || N(e, 4, this.length), n.read(this, e, !0, 23, 4);
		}, f.prototype.readFloatBE = function(e, t) {
			return e >>>= 0, t || N(e, 4, this.length), n.read(this, e, !1, 23, 4);
		}, f.prototype.readDoubleLE = function(e, t) {
			return e >>>= 0, t || N(e, 8, this.length), n.read(this, e, !0, 52, 8);
		}, f.prototype.readDoubleBE = function(e, t) {
			return e >>>= 0, t || N(e, 8, this.length), n.read(this, e, !1, 52, 8);
		};
		function P(e, t, n, r, a, o) {
			if (!f.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
			if (t > a || t < o) throw RangeError("\"value\" argument is out of bounds");
			if (n + r > e.length) throw RangeError("Index out of range");
		}
		f.prototype.writeUintLE = f.prototype.writeUIntLE = function(e, t, n, r) {
			if (e = +e, t >>>= 0, n >>>= 0, !r) {
				let r = 2 ** (8 * n) - 1;
				P(this, e, t, n, r, 0);
			}
			let a = 1, o = 0;
			for (this[t] = e & 255; ++o < n && (a *= 256);) this[t + o] = e / a & 255;
			return t + n;
		}, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(e, t, n, r) {
			if (e = +e, t >>>= 0, n >>>= 0, !r) {
				let r = 2 ** (8 * n) - 1;
				P(this, e, t, n, r, 0);
			}
			let a = n - 1, o = 1;
			for (this[t + a] = e & 255; --a >= 0 && (o *= 256);) this[t + a] = e / o & 255;
			return t + n;
		}, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
		}, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
		}, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
		}, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
		}, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
		};
		function F(e, t, n, r, a) {
			W(t, r, a, e, n, 7);
			let o = Number(t & BigInt(4294967295));
			e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o;
			let s = Number(t >> BigInt(32) & BigInt(4294967295));
			return e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, n;
		}
		function I(e, t, n, r, a) {
			W(t, r, a, e, n, 7);
			let o = Number(t & BigInt(4294967295));
			e[n + 7] = o, o >>= 8, e[n + 6] = o, o >>= 8, e[n + 5] = o, o >>= 8, e[n + 4] = o;
			let s = Number(t >> BigInt(32) & BigInt(4294967295));
			return e[n + 3] = s, s >>= 8, e[n + 2] = s, s >>= 8, e[n + 1] = s, s >>= 8, e[n] = s, n + 8;
		}
		f.prototype.writeBigUInt64LE = $(function(e, t = 0) {
			return F(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
		}), f.prototype.writeBigUInt64BE = $(function(e, t = 0) {
			return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
		}), f.prototype.writeIntLE = function(e, t, n, r) {
			if (e = +e, t >>>= 0, !r) {
				let r = 2 ** (8 * n - 1);
				P(this, e, t, n, r - 1, -r);
			}
			let a = 0, o = 1, s = 0;
			for (this[t] = e & 255; ++a < n && (o *= 256);) e < 0 && s === 0 && this[t + a - 1] !== 0 && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
			return t + n;
		}, f.prototype.writeIntBE = function(e, t, n, r) {
			if (e = +e, t >>>= 0, !r) {
				let r = 2 ** (8 * n - 1);
				P(this, e, t, n, r - 1, -r);
			}
			let a = n - 1, o = 1, s = 0;
			for (this[t + a] = e & 255; --a >= 0 && (o *= 256);) e < 0 && s === 0 && this[t + a + 1] !== 0 && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
			return t + n;
		}, f.prototype.writeInt8 = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
		}, f.prototype.writeInt16LE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
		}, f.prototype.writeInt16BE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
		}, f.prototype.writeInt32LE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
		}, f.prototype.writeInt32BE = function(e, t, n) {
			return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
		}, f.prototype.writeBigInt64LE = $(function(e, t = 0) {
			return F(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		}), f.prototype.writeBigInt64BE = $(function(e, t = 0) {
			return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		function L(e, t, n, r, a, o) {
			if (n + r > e.length || n < 0) throw RangeError("Index out of range");
		}
		function R(e, t, r, a, o) {
			return t = +t, r >>>= 0, o || L(e, t, r, 4), n.write(e, t, r, a, 23, 4), r + 4;
		}
		f.prototype.writeFloatLE = function(e, t, n) {
			return R(this, e, t, !0, n);
		}, f.prototype.writeFloatBE = function(e, t, n) {
			return R(this, e, t, !1, n);
		};
		function z(e, t, r, a, o) {
			return t = +t, r >>>= 0, o || L(e, t, r, 8), n.write(e, t, r, a, 52, 8), r + 8;
		}
		f.prototype.writeDoubleLE = function(e, t, n) {
			return z(this, e, t, !0, n);
		}, f.prototype.writeDoubleBE = function(e, t, n) {
			return z(this, e, t, !1, n);
		}, f.prototype.copy = function(e, t, n, r) {
			if (!f.isBuffer(e)) throw TypeError("argument should be a Buffer");
			if (n ||= 0, !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t ||= 0, r > 0 && r < n && (r = n), r === n || e.length === 0 || this.length === 0) return 0;
			if (t < 0) throw RangeError("targetStart out of bounds");
			if (n < 0 || n >= this.length) throw RangeError("Index out of range");
			if (r < 0) throw RangeError("sourceEnd out of bounds");
			r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
			let a = r - n;
			return this === e && typeof o.prototype.copyWithin == "function" ? this.copyWithin(t, n, r) : o.prototype.set.call(e, this.subarray(n, r), t), a;
		}, f.prototype.fill = function(e, t, n, r) {
			if (typeof e == "string") {
				if (typeof t == "string" ? (r = t, t = 0, n = this.length) : typeof n == "string" && (r = n, n = this.length), r !== void 0 && typeof r != "string") throw TypeError("encoding must be a string");
				if (typeof r == "string" && !f.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
				if (e.length === 1) {
					let t = e.charCodeAt(0);
					(r === "utf8" && t < 128 || r === "latin1") && (e = t);
				}
			} else typeof e == "number" ? e &= 255 : typeof e == "boolean" && (e = Number(e));
			if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
			if (n <= t) return this;
			t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e ||= 0;
			let a;
			if (typeof e == "number") for (a = t; a < n; ++a) this[a] = e;
			else {
				let o = f.isBuffer(e) ? e : f.from(e, r), s = o.length;
				if (s === 0) throw TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
				for (a = 0; a < n - t; ++a) this[a + t] = o[a % s];
			}
			return this;
		};
		let B = {};
		function V(e, t, n) {
			B[e] = class extends n {
				constructor() {
					super(), Object.defineProperty(this, "message", {
						value: t.apply(this, arguments),
						writable: !0,
						configurable: !0
					}), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
				}
				get code() {
					return e;
				}
				set code(e) {
					Object.defineProperty(this, "code", {
						configurable: !0,
						enumerable: !0,
						value: e,
						writable: !0
					});
				}
				toString() {
					return `${this.name} [${e}]: ${this.message}`;
				}
			};
		}
		V("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
			return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
		}, RangeError), V("ERR_INVALID_ARG_TYPE", function(e, t) {
			return `The "${e}" argument must be of type number. Received type ${typeof t}`;
		}, TypeError), V("ERR_OUT_OF_RANGE", function(e, t, n) {
			let r = `The value of "${e}" is out of range.`, a = n;
			return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? a = H(String(n)) : typeof n == "bigint" && (a = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (a = H(a)), a += "n"), r += ` It must be ${t}. Received ${a}`, r;
		}, RangeError);
		function H(e) {
			let t = "", n = e.length, r = e[0] === "-" ? 1 : 0;
			for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
			return `${e.slice(0, n)}${t}`;
		}
		function U(e, t, n) {
			G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
		}
		function W(e, t, n, r, a, o) {
			if (e > n || e < t) {
				let r = typeof t == "bigint" ? "n" : "", a;
				throw a = o > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(o + 1) * 8}${r}` : `>= -(2${r} ** ${(o + 1) * 8 - 1}${r}) and < 2 ** ${(o + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new B.ERR_OUT_OF_RANGE("value", a, e);
			}
			U(r, a, o);
		}
		function G(e, t) {
			if (typeof e != "number") throw new B.ERR_INVALID_ARG_TYPE(t, "number", e);
		}
		function K(e, t, n) {
			throw Math.floor(e) === e ? t < 0 ? new B.ERR_BUFFER_OUT_OF_BOUNDS() : new B.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e) : (G(e, n), new B.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
		}
		let ue = /[^+/0-9A-Za-z-_]/g;
		function de(e) {
			if (e = e.split("=")[0], e = e.trim().replace(ue, ""), e.length < 2) return "";
			for (; e.length % 4 != 0;) e += "=";
			return e;
		}
		function q(e, t) {
			t ||= Infinity;
			let n, r = e.length, a = null, o = [];
			for (let s = 0; s < r; ++s) {
				if (n = e.charCodeAt(s), n > 55295 && n < 57344) {
					if (!a) {
						if (n > 56319) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue;
						} else if (s + 1 === r) {
							(t -= 3) > -1 && o.push(239, 191, 189);
							continue;
						}
						a = n;
						continue;
					}
					if (n < 56320) {
						(t -= 3) > -1 && o.push(239, 191, 189), a = n;
						continue;
					}
					n = (a - 55296 << 10 | n - 56320) + 65536;
				} else a && (t -= 3) > -1 && o.push(239, 191, 189);
				if (a = null, n < 128) {
					if (--t < 0) break;
					o.push(n);
				} else if (n < 2048) {
					if ((t -= 2) < 0) break;
					o.push(n >> 6 | 192, n & 63 | 128);
				} else if (n < 65536) {
					if ((t -= 3) < 0) break;
					o.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
				} else if (n < 1114112) {
					if ((t -= 4) < 0) break;
					o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
				} else throw Error("Invalid code point");
			}
			return o;
		}
		function fe(e) {
			let t = [];
			for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
			return t;
		}
		function J(e, t) {
			let n, r, a, o = [];
			for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, a = n % 256, o.push(a), o.push(r);
			return o;
		}
		function Y(e) {
			return t.toByteArray(de(e));
		}
		function X(e, t, n, r) {
			let a;
			for (a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
			return a;
		}
		function Z(e, t) {
			return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
		}
		function Q(e) {
			return e !== e;
		}
		let pe = (function() {
			let e = "0123456789abcdef", t = Array(256);
			for (let n = 0; n < 16; ++n) {
				let r = n * 16;
				for (let a = 0; a < 16; ++a) t[r + a] = e[n] + e[a];
			}
			return t;
		})();
		function $(e) {
			return typeof BigInt > "u" ? me : e;
		}
		function me() {
			throw Error("BigInt not supported");
		}
	})(buffer), Buffer = buffer.Buffer, buffer.Blob, buffer.BlobOptions, buffer.Buffer, buffer.File, buffer.FileOptions, buffer.INSPECT_MAX_BYTES, buffer.SlowBuffer, buffer.TranscodeEncoding, buffer.atob, buffer.btoa, buffer.constants, buffer.isAscii, buffer.isUtf8, buffer.kMaxLength, buffer.kStringMaxLength, buffer.resolveObjectURL, buffer.transcode;
}));
export { init_dist as n, Buffer as t };
