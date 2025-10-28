function formatDecimal_default(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function formatDecimalParts(e, r) {
	if ((i = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0) return null;
	var i, a = e.slice(0, i);
	return [a.length > 1 ? a[0] + a.slice(2) : a, +e.slice(i + 1)];
}
function exponent_default(e) {
	return e = formatDecimalParts(Math.abs(e)), e ? e[1] : NaN;
}
function formatGroup_default(e, r) {
	return function(i, a) {
		for (var o = i.length, s = [], c = 0, l = e[0], u = 0; o > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), s.push(i.substring(o -= l, o + l)), !((u += l + 1) > a));) l = e[c = (c + 1) % e.length];
		return s.reverse().join(r);
	};
}
function formatNumerals_default(e) {
	return function(r) {
		return r.replace(/[0-9]/g, function(r) {
			return e[+r];
		});
	};
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(e) {
	if (!(r = re.exec(e))) throw Error("invalid format: " + e);
	var r;
	return new FormatSpecifier({
		fill: r[1],
		align: r[2],
		sign: r[3],
		symbol: r[4],
		zero: r[5],
		width: r[6],
		comma: r[7],
		precision: r[8] && r[8].slice(1),
		trim: r[9],
		type: r[10]
	});
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
FormatSpecifier.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim_default(e) {
	out: for (var r = e.length, i = 1, a = -1, o; i < r; ++i) switch (e[i]) {
		case ".":
			a = o = i;
			break;
		case "0":
			a === 0 && (a = i), o = i;
			break;
		default:
			if (!+e[i]) break out;
			a > 0 && (a = 0);
			break;
	}
	return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var prefixExponent;
function formatPrefixAuto_default(e, i) {
	var a = formatDecimalParts(e, i);
	if (!a) return e + "";
	var o = a[0], s = a[1], c = s - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, l = o.length;
	return c === l ? o : c > l ? o + Array(c - l + 1).join("0") : c > 0 ? o.slice(0, c) + "." + o.slice(c) : "0." + Array(1 - c).join("0") + formatDecimalParts(e, Math.max(0, i + c - 1))[0];
}
function formatRounded_default(e, i) {
	var a = formatDecimalParts(e, i);
	if (!a) return e + "";
	var o = a[0], s = a[1];
	return s < 0 ? "0." + Array(-s).join("0") + o : o.length > s + 1 ? o.slice(0, s + 1) + "." + o.slice(s + 1) : o + Array(s - o.length + 2).join("0");
}
var formatTypes_default = {
	"%": (e, r) => (e * 100).toFixed(r),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: formatDecimal_default,
	e: (e, r) => e.toExponential(r),
	f: (e, r) => e.toFixed(r),
	g: (e, r) => e.toPrecision(r),
	o: (e) => Math.round(e).toString(8),
	p: (e, r) => formatRounded_default(e * 100, r),
	r: formatRounded_default,
	s: formatPrefixAuto_default,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
function identity_default(e) {
	return e;
}
var map = Array.prototype.map, prefixes = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function locale_default(e) {
	var r = e.grouping === void 0 || e.thousands === void 0 ? identity_default : formatGroup_default(map.call(e.grouping, Number), e.thousands + ""), s = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", d = e.decimal === void 0 ? "." : e.decimal + "", f = e.numerals === void 0 ? identity_default : formatNumerals_default(map.call(e.numerals, String)), g = e.percent === void 0 ? "%" : e.percent + "", _ = e.minus === void 0 ? "−" : e.minus + "", v = e.nan === void 0 ? "NaN" : e.nan + "";
	function y(e) {
		e = formatSpecifier(e);
		var i = e.fill, a = e.align, o = e.sign, m = e.symbol, h = e.zero, y = e.width, b = e.comma, x = e.precision, S = e.trim, C = e.type;
		C === "n" ? (b = !0, C = "g") : formatTypes_default[C] || (x === void 0 && (x = 12), S = !0, C = "g"), (h || i === "0" && a === "=") && (h = !0, i = "0", a = "=");
		var w = m === "$" ? s : m === "#" && /[boxX]/.test(C) ? "0" + C.toLowerCase() : "", T = m === "$" ? l : /[%p]/.test(C) ? g : "", E = formatTypes_default[C], D = /[defgprs%]/.test(C);
		x = x === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
		function O(e) {
			var s = w, c = T, l, p, m;
			if (C === "c") c = E(e) + c, e = "";
			else {
				e = +e;
				var g = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? v : E(Math.abs(e), x), S && (e = formatTrim_default(e)), g && +e == 0 && o !== "+" && (g = !1), s = (g ? o === "(" ? o : _ : o === "-" || o === "(" ? "" : o) + s, c = (C === "s" ? prefixes[8 + prefixExponent / 3] : "") + c + (g && o === "(" ? ")" : ""), D) {
					for (l = -1, p = e.length; ++l < p;) if (m = e.charCodeAt(l), 48 > m || m > 57) {
						c = (m === 46 ? d + e.slice(l + 1) : e.slice(l)) + c, e = e.slice(0, l);
						break;
					}
				}
			}
			b && !h && (e = r(e, Infinity));
			var O = s.length + e.length + c.length, k = O < y ? Array(y - O + 1).join(i) : "";
			switch (b && h && (e = r(k + e, k.length ? y - c.length : Infinity), k = ""), a) {
				case "<":
					e = s + e + c + k;
					break;
				case "=":
					e = s + k + e + c;
					break;
				case "^":
					e = k.slice(0, O = k.length >> 1) + s + e + c + k.slice(O);
					break;
				default:
					e = k + s + e + c;
					break;
			}
			return f(e);
		}
		return O.toString = function() {
			return e + "";
		}, O;
	}
	function b(e, r) {
		var a = y((e = formatSpecifier(e), e.type = "f", e)), o = Math.max(-8, Math.min(8, Math.floor(exponent_default(r) / 3))) * 3, s = 10 ** -o, l = prefixes[8 + o / 3];
		return function(e) {
			return a(s * e) + l;
		};
	}
	return {
		format: y,
		formatPrefix: b
	};
}
var locale, format, formatPrefix;
defaultLocale({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function defaultLocale(e) {
	return locale = locale_default(e), format = locale.format, formatPrefix = locale.formatPrefix, locale;
}
export { exponent_default as a, formatSpecifier as i, formatPrefix as n, locale_default as r, format as t };

//# sourceMappingURL=defaultLocale-BBsRvltv.js.map