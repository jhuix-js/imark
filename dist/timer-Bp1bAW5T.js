import { r as __export } from "./chunk-DgPTj83v.js";
var noop = { value: () => {} };
function dispatch() {
	for (var a = 0, N = arguments.length, P = {}, I; a < N; ++a) {
		if (!(I = arguments[a] + "") || I in P || /[\s.]/.test(I)) throw Error("illegal type: " + I);
		P[I] = [];
	}
	return new Dispatch(P);
}
function Dispatch(a) {
	this._ = a;
}
function parseTypenames(a, N) {
	return a.trim().split(/^|\s+/).map(function(a) {
		var P = "", F = a.indexOf(".");
		if (F >= 0 && (P = a.slice(F + 1), a = a.slice(0, F)), a && !N.hasOwnProperty(a)) throw Error("unknown type: " + a);
		return {
			type: a,
			name: P
		};
	});
}
Dispatch.prototype = dispatch.prototype = {
	constructor: Dispatch,
	on: function(a, N) {
		var P = this._, F = parseTypenames(a + "", P), z, V = -1, H = F.length;
		if (arguments.length < 2) {
			for (; ++V < H;) if ((z = (a = F[V]).type) && (z = get(P[z], a.name))) return z;
			return;
		}
		if (N != null && typeof N != "function") throw Error("invalid callback: " + N);
		for (; ++V < H;) if (z = (a = F[V]).type) P[z] = set(P[z], a.name, N);
		else if (N == null) for (z in P) P[z] = set(P[z], a.name, null);
		return this;
	},
	copy: function() {
		var a = {}, N = this._;
		for (var P in N) a[P] = N[P].slice();
		return new Dispatch(a);
	},
	call: function(a, N) {
		if ((I = arguments.length - 2) > 0) for (var P = Array(I), F = 0, I, L; F < I; ++F) P[F] = arguments[F + 2];
		if (!this._.hasOwnProperty(a)) throw Error("unknown type: " + a);
		for (L = this._[a], F = 0, I = L.length; F < I; ++F) L[F].value.apply(N, P);
	},
	apply: function(a, N, P) {
		if (!this._.hasOwnProperty(a)) throw Error("unknown type: " + a);
		for (var F = this._[a], I = 0, L = F.length; I < L; ++I) F[I].value.apply(N, P);
	}
};
function get(a, N) {
	for (var P = 0, F = a.length, I; P < F; ++P) if ((I = a[P]).name === N) return I.value;
}
function set(a, P, F) {
	for (var I = 0, L = a.length; I < L; ++I) if (a[I].name === P) {
		a[I] = noop, a = a.slice(0, I).concat(a.slice(I + 1));
		break;
	}
	return F != null && a.push({
		name: P,
		value: F
	}), a;
}
var dispatch_default = dispatch;
function define_default(a, N, P) {
	a.prototype = N.prototype = P, P.constructor = a;
}
function extend(a, N) {
	var P = Object.create(a.prototype);
	for (var F in N) P[F] = N[F];
	return P;
}
function Color() {}
var darker = .7, brighter = 1 / darker, reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = /* @__PURE__ */ RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = /* @__PURE__ */ RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = /* @__PURE__ */ RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = /* @__PURE__ */ RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = /* @__PURE__ */ RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = /* @__PURE__ */ RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`), named = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
define_default(Color, color, {
	copy(a) {
		return Object.assign(new this.constructor(), this, a);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: color_formatHex,
	formatHex: color_formatHex,
	formatHex8: color_formatHex8,
	formatHsl: color_formatHsl,
	formatRgb: color_formatRgb,
	toString: color_formatRgb
});
function color_formatHex() {
	return this.rgb().formatHex();
}
function color_formatHex8() {
	return this.rgb().formatHex8();
}
function color_formatHsl() {
	return hslConvert(this).formatHsl();
}
function color_formatRgb() {
	return this.rgb().formatRgb();
}
function color(a) {
	var N, P;
	return a = (a + "").trim().toLowerCase(), (N = reHex.exec(a)) ? (P = N[1].length, N = parseInt(N[1], 16), P === 6 ? rgbn(N) : P === 3 ? new Rgb(N >> 8 & 15 | N >> 4 & 240, N >> 4 & 15 | N & 240, (N & 15) << 4 | N & 15, 1) : P === 8 ? rgba(N >> 24 & 255, N >> 16 & 255, N >> 8 & 255, (N & 255) / 255) : P === 4 ? rgba(N >> 12 & 15 | N >> 8 & 240, N >> 8 & 15 | N >> 4 & 240, N >> 4 & 15 | N & 240, ((N & 15) << 4 | N & 15) / 255) : null) : (N = reRgbInteger.exec(a)) ? new Rgb(N[1], N[2], N[3], 1) : (N = reRgbPercent.exec(a)) ? new Rgb(N[1] * 255 / 100, N[2] * 255 / 100, N[3] * 255 / 100, 1) : (N = reRgbaInteger.exec(a)) ? rgba(N[1], N[2], N[3], N[4]) : (N = reRgbaPercent.exec(a)) ? rgba(N[1] * 255 / 100, N[2] * 255 / 100, N[3] * 255 / 100, N[4]) : (N = reHslPercent.exec(a)) ? hsla(N[1], N[2] / 100, N[3] / 100, 1) : (N = reHslaPercent.exec(a)) ? hsla(N[1], N[2] / 100, N[3] / 100, N[4]) : named.hasOwnProperty(a) ? rgbn(named[a]) : a === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(a) {
	return new Rgb(a >> 16 & 255, a >> 8 & 255, a & 255, 1);
}
function rgba(a, N, P, F) {
	return F <= 0 && (a = N = P = NaN), new Rgb(a, N, P, F);
}
function rgbConvert(a) {
	return a instanceof Color || (a = color(a)), a ? (a = a.rgb(), new Rgb(a.r, a.g, a.b, a.opacity)) : new Rgb();
}
function rgb(a, N, P, F) {
	return arguments.length === 1 ? rgbConvert(a) : new Rgb(a, N, P, F ?? 1);
}
function Rgb(a, N, P, F) {
	this.r = +a, this.g = +N, this.b = +P, this.opacity = +F;
}
define_default(Rgb, rgb, extend(Color, {
	brighter(a) {
		return a = a == null ? brighter : brighter ** +a, new Rgb(this.r * a, this.g * a, this.b * a, this.opacity);
	},
	darker(a) {
		return a = a == null ? darker : darker ** +a, new Rgb(this.r * a, this.g * a, this.b * a, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: rgb_formatHex,
	formatHex: rgb_formatHex,
	formatHex8: rgb_formatHex8,
	formatRgb: rgb_formatRgb,
	toString: rgb_formatRgb
}));
function rgb_formatHex() {
	return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
	return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
	let a = clampa(this.opacity);
	return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(a) {
	return isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
}
function clampi(a) {
	return Math.max(0, Math.min(255, Math.round(a) || 0));
}
function hex(a) {
	return a = clampi(a), (a < 16 ? "0" : "") + a.toString(16);
}
function hsla(a, N, P, F) {
	return F <= 0 ? a = N = P = NaN : P <= 0 || P >= 1 ? a = N = NaN : N <= 0 && (a = NaN), new Hsl(a, N, P, F);
}
function hslConvert(a) {
	if (a instanceof Hsl) return new Hsl(a.h, a.s, a.l, a.opacity);
	if (a instanceof Color || (a = color(a)), !a) return new Hsl();
	if (a instanceof Hsl) return a;
	a = a.rgb();
	var N = a.r / 255, P = a.g / 255, F = a.b / 255, I = Math.min(N, P, F), L = Math.max(N, P, F), R = NaN, z = L - I, V = (L + I) / 2;
	return z ? (R = N === L ? (P - F) / z + (P < F) * 6 : P === L ? (F - N) / z + 2 : (N - P) / z + 4, z /= V < .5 ? L + I : 2 - L - I, R *= 60) : z = V > 0 && V < 1 ? 0 : R, new Hsl(R, z, V, a.opacity);
}
function hsl(a, N, P, F) {
	return arguments.length === 1 ? hslConvert(a) : new Hsl(a, N, P, F ?? 1);
}
function Hsl(a, N, P, F) {
	this.h = +a, this.s = +N, this.l = +P, this.opacity = +F;
}
define_default(Hsl, hsl, extend(Color, {
	brighter(a) {
		return a = a == null ? brighter : brighter ** +a, new Hsl(this.h, this.s, this.l * a, this.opacity);
	},
	darker(a) {
		return a = a == null ? darker : darker ** +a, new Hsl(this.h, this.s, this.l * a, this.opacity);
	},
	rgb() {
		var a = this.h % 360 + (this.h < 0) * 360, N = isNaN(a) || isNaN(this.s) ? 0 : this.s, P = this.l, F = P + (P < .5 ? P : 1 - P) * N, I = 2 * P - F;
		return new Rgb(hsl2rgb(a >= 240 ? a - 240 : a + 120, I, F), hsl2rgb(a, I, F), hsl2rgb(a < 120 ? a + 240 : a - 120, I, F), this.opacity);
	},
	clamp() {
		return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let a = clampa(this.opacity);
		return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
	}
}));
function clamph(a) {
	return a = (a || 0) % 360, a < 0 ? a + 360 : a;
}
function clampt(a) {
	return Math.max(0, Math.min(1, a || 0));
}
function hsl2rgb(a, N, P) {
	return (a < 60 ? N + (P - N) * a / 60 : a < 180 ? P : a < 240 ? N + (P - N) * (240 - a) / 60 : N) * 255;
}
const radians = Math.PI / 180, degrees$1 = 180 / Math.PI;
var K = 18, Xn = .96422, Yn = 1, Zn = .82521, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1;
function labConvert(a) {
	if (a instanceof Lab) return new Lab(a.l, a.a, a.b, a.opacity);
	if (a instanceof Hcl) return hcl2lab(a);
	a instanceof Rgb || (a = rgbConvert(a));
	var N = rgb2lrgb(a.r), P = rgb2lrgb(a.g), F = rgb2lrgb(a.b), I = xyz2lab((.2225045 * N + .7168786 * P + .0606169 * F) / Yn), L, R;
	return N === P && P === F ? L = R = I : (L = xyz2lab((.4360747 * N + .3850649 * P + .1430804 * F) / Xn), R = xyz2lab((.0139322 * N + .0971045 * P + .7141733 * F) / Zn)), new Lab(116 * I - 16, 500 * (L - I), 200 * (I - R), a.opacity);
}
function lab$1(a, N, P, F) {
	return arguments.length === 1 ? labConvert(a) : new Lab(a, N, P, F ?? 1);
}
function Lab(a, N, P, F) {
	this.l = +a, this.a = +N, this.b = +P, this.opacity = +F;
}
define_default(Lab, lab$1, extend(Color, {
	brighter(a) {
		return new Lab(this.l + K * (a ?? 1), this.a, this.b, this.opacity);
	},
	darker(a) {
		return new Lab(this.l - K * (a ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var a = (this.l + 16) / 116, N = isNaN(this.a) ? a : a + this.a / 500, P = isNaN(this.b) ? a : a - this.b / 200;
		return N = Xn * lab2xyz(N), a = Yn * lab2xyz(a), P = Zn * lab2xyz(P), new Rgb(lrgb2rgb(3.1338561 * N - 1.6168667 * a - .4906146 * P), lrgb2rgb(-.9787684 * N + 1.9161415 * a + .033454 * P), lrgb2rgb(.0719453 * N - .2289914 * a + 1.4052427 * P), this.opacity);
	}
}));
function xyz2lab(a) {
	return a > t3 ? a ** (1 / 3) : a / t2 + t0;
}
function lab2xyz(a) {
	return a > t1 ? a * a * a : t2 * (a - t0);
}
function lrgb2rgb(a) {
	return 255 * (a <= .0031308 ? 12.92 * a : 1.055 * a ** (1 / 2.4) - .055);
}
function rgb2lrgb(a) {
	return (a /= 255) <= .04045 ? a / 12.92 : ((a + .055) / 1.055) ** 2.4;
}
function hclConvert(a) {
	if (a instanceof Hcl) return new Hcl(a.h, a.c, a.l, a.opacity);
	if (a instanceof Lab || (a = labConvert(a)), a.a === 0 && a.b === 0) return new Hcl(NaN, 0 < a.l && a.l < 100 ? 0 : NaN, a.l, a.opacity);
	var N = Math.atan2(a.b, a.a) * degrees$1;
	return new Hcl(N < 0 ? N + 360 : N, Math.sqrt(a.a * a.a + a.b * a.b), a.l, a.opacity);
}
function hcl(a, N, P, F) {
	return arguments.length === 1 ? hclConvert(a) : new Hcl(a, N, P, F ?? 1);
}
function Hcl(a, N, P, F) {
	this.h = +a, this.c = +N, this.l = +P, this.opacity = +F;
}
function hcl2lab(a) {
	if (isNaN(a.h)) return new Lab(a.l, 0, 0, a.opacity);
	var N = a.h * radians;
	return new Lab(a.l, Math.cos(N) * a.c, Math.sin(N) * a.c, a.opacity);
}
define_default(Hcl, hcl, extend(Color, {
	brighter(a) {
		return new Hcl(this.h, this.c, this.l + K * (a ?? 1), this.opacity);
	},
	darker(a) {
		return new Hcl(this.h, this.c, this.l - K * (a ?? 1), this.opacity);
	},
	rgb() {
		return hcl2lab(this).rgb();
	}
}));
var A = -.14861, B = 1.78277, C = -.29227, D = -.90649, E = 1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(a) {
	if (a instanceof Cubehelix) return new Cubehelix(a.h, a.s, a.l, a.opacity);
	a instanceof Rgb || (a = rgbConvert(a));
	var N = a.r / 255, P = a.g / 255, F = a.b / 255, I = (BC_DA * F + ED * N - EB * P) / (BC_DA + ED - EB), L = F - I, R = (E * (P - I) - C * L) / D, z = Math.sqrt(R * R + L * L) / (E * I * (1 - I)), V = z ? Math.atan2(R, L) * degrees$1 - 120 : NaN;
	return new Cubehelix(V < 0 ? V + 360 : V, z, I, a.opacity);
}
function cubehelix(a, N, P, F) {
	return arguments.length === 1 ? cubehelixConvert(a) : new Cubehelix(a, N, P, F ?? 1);
}
function Cubehelix(a, N, P, F) {
	this.h = +a, this.s = +N, this.l = +P, this.opacity = +F;
}
define_default(Cubehelix, cubehelix, extend(Color, {
	brighter(a) {
		return a = a == null ? brighter : brighter ** +a, new Cubehelix(this.h, this.s, this.l * a, this.opacity);
	},
	darker(a) {
		return a = a == null ? darker : darker ** +a, new Cubehelix(this.h, this.s, this.l * a, this.opacity);
	},
	rgb() {
		var a = isNaN(this.h) ? 0 : (this.h + 120) * radians, N = +this.l, P = isNaN(this.s) ? 0 : this.s * N * (1 - N), F = Math.cos(a), I = Math.sin(a);
		return new Rgb(255 * (N + P * (A * F + B * I)), 255 * (N + P * (C * F + D * I)), 255 * (N + P * (E * F)), this.opacity);
	}
}));
function basis(a, N, P, F, I) {
	var L = a * a, R = L * a;
	return ((1 - 3 * a + 3 * L - R) * N + (4 - 6 * L + 3 * R) * P + (1 + 3 * a + 3 * L - 3 * R) * F + R * I) / 6;
}
function basis_default(a) {
	var N = a.length - 1;
	return function(P) {
		var F = P <= 0 ? P = 0 : P >= 1 ? (P = 1, N - 1) : Math.floor(P * N), I = a[F], L = a[F + 1], R = F > 0 ? a[F - 1] : 2 * I - L, z = F < N - 1 ? a[F + 2] : 2 * L - I;
		return basis((P - F / N) * N, R, I, L, z);
	};
}
function basisClosed_default(a) {
	var N = a.length;
	return function(P) {
		var F = Math.floor(((P %= 1) < 0 ? ++P : P) * N), I = a[(F + N - 1) % N], L = a[F % N], R = a[(F + 1) % N], z = a[(F + 2) % N];
		return basis((P - F / N) * N, I, L, R, z);
	};
}
var constant_default = (a) => () => a;
function linear(a, N) {
	return function(P) {
		return a + P * N;
	};
}
function exponential(a, N, P) {
	return a **= +P, N = N ** +P - a, P = 1 / P, function(F) {
		return (a + F * N) ** +P;
	};
}
function hue(a, N) {
	var P = N - a;
	return P ? linear(a, P > 180 || P < -180 ? P - 360 * Math.round(P / 360) : P) : constant_default(isNaN(a) ? N : a);
}
function gamma(a) {
	return (a = +a) == 1 ? nogamma : function(N, P) {
		return P - N ? exponential(N, P, a) : constant_default(isNaN(N) ? P : N);
	};
}
function nogamma(a, N) {
	var P = N - a;
	return P ? linear(a, P) : constant_default(isNaN(a) ? N : a);
}
var rgb_default = (function a(N) {
	var P = gamma(N);
	function F(a, N) {
		var F = P((a = rgb(a)).r, (N = rgb(N)).r), I = P(a.g, N.g), L = P(a.b, N.b), R = nogamma(a.opacity, N.opacity);
		return function(N) {
			return a.r = F(N), a.g = I(N), a.b = L(N), a.opacity = R(N), a + "";
		};
	}
	return F.gamma = a, F;
})(1);
function rgbSpline(a) {
	return function(N) {
		var P = N.length, F = Array(P), I = Array(P), L = Array(P), R, z;
		for (R = 0; R < P; ++R) z = rgb(N[R]), F[R] = z.r || 0, I[R] = z.g || 0, L[R] = z.b || 0;
		return F = a(F), I = a(I), L = a(L), z.opacity = 1, function(a) {
			return z.r = F(a), z.g = I(a), z.b = L(a), z + "";
		};
	};
}
var rgbBasis = rgbSpline(basis_default), rgbBasisClosed = rgbSpline(basisClosed_default);
function numberArray_default(a, N) {
	N ||= [];
	var P = a ? Math.min(N.length, a.length) : 0, F = N.slice(), I;
	return function(L) {
		for (I = 0; I < P; ++I) F[I] = a[I] * (1 - L) + N[I] * L;
		return F;
	};
}
function isNumberArray(a) {
	return ArrayBuffer.isView(a) && !(a instanceof DataView);
}
function array_default(a, N) {
	return (isNumberArray(N) ? numberArray_default : genericArray)(a, N);
}
function genericArray(a, N) {
	var P = N ? N.length : 0, F = a ? Math.min(P, a.length) : 0, I = Array(F), L = Array(P), R;
	for (R = 0; R < F; ++R) I[R] = value_default(a[R], N[R]);
	for (; R < P; ++R) L[R] = N[R];
	return function(a) {
		for (R = 0; R < F; ++R) L[R] = I[R](a);
		return L;
	};
}
function date_default(a, N) {
	var P = /* @__PURE__ */ new Date();
	return a = +a, N = +N, function(F) {
		return P.setTime(a * (1 - F) + N * F), P;
	};
}
function number_default(a, N) {
	return a = +a, N = +N, function(P) {
		return a * (1 - P) + N * P;
	};
}
function object_default(a, N) {
	var P = {}, F = {}, I;
	for (I in (typeof a != "object" || !a) && (a = {}), (typeof N != "object" || !N) && (N = {}), N) I in a ? P[I] = value_default(a[I], N[I]) : F[I] = N[I];
	return function(a) {
		for (I in P) F[I] = P[I](a);
		return F;
	};
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(a) {
	return function() {
		return a;
	};
}
function one(a) {
	return function(N) {
		return a(N) + "";
	};
}
function string_default(a, N) {
	var P = reA.lastIndex = reB.lastIndex = 0, F, I, L, R = -1, z = [], V = [];
	for (a += "", N += ""; (F = reA.exec(a)) && (I = reB.exec(N));) (L = I.index) > P && (L = N.slice(P, L), z[R] ? z[R] += L : z[++R] = L), (F = F[0]) === (I = I[0]) ? z[R] ? z[R] += I : z[++R] = I : (z[++R] = null, V.push({
		i: R,
		x: number_default(F, I)
	})), P = reB.lastIndex;
	return P < N.length && (L = N.slice(P), z[R] ? z[R] += L : z[++R] = L), z.length < 2 ? V[0] ? one(V[0].x) : zero(N) : (N = V.length, function(a) {
		for (var P = 0, F; P < N; ++P) z[(F = V[P]).i] = F.x(a);
		return z.join("");
	});
}
function value_default(a, N) {
	var P = typeof N, F;
	return N == null || P === "boolean" ? constant_default(N) : (P === "number" ? number_default : P === "string" ? (F = color(N)) ? (N = F, rgb_default) : string_default : N instanceof color ? rgb_default : N instanceof Date ? date_default : isNumberArray(N) ? numberArray_default : Array.isArray(N) ? genericArray : typeof N.valueOf != "function" && typeof N.toString != "function" || isNaN(N) ? object_default : number_default)(a, N);
}
function discrete_default(a) {
	var N = a.length;
	return function(P) {
		return a[Math.max(0, Math.min(N - 1, Math.floor(P * N)))];
	};
}
function hue_default(a, N) {
	var P = hue(+a, +N);
	return function(a) {
		var N = P(a);
		return N - 360 * Math.floor(N / 360);
	};
}
function round_default(a, N) {
	return a = +a, N = +N, function(P) {
		return Math.round(a * (1 - P) + N * P);
	};
}
var degrees = 180 / Math.PI, identity = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function decompose_default(a, N, P, F, I, L) {
	var R, z, V;
	return (R = Math.sqrt(a * a + N * N)) && (a /= R, N /= R), (V = a * P + N * F) && (P -= a * V, F -= N * V), (z = Math.sqrt(P * P + F * F)) && (P /= z, F /= z, V /= z), a * F < N * P && (a = -a, N = -N, V = -V, R = -R), {
		translateX: I,
		translateY: L,
		rotate: Math.atan2(N, a) * degrees,
		skewX: Math.atan(V) * degrees,
		scaleX: R,
		scaleY: z
	};
}
var svgNode;
function parseCss(a) {
	let N = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(a + "");
	return N.isIdentity ? identity : decompose_default(N.a, N.b, N.c, N.d, N.e, N.f);
}
function parseSvg(a) {
	return a == null || (svgNode ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), svgNode.setAttribute("transform", a), !(a = svgNode.transform.baseVal.consolidate())) ? identity : (a = a.matrix, decompose_default(a.a, a.b, a.c, a.d, a.e, a.f));
}
function interpolateTransform(a, N, P, F) {
	function I(a) {
		return a.length ? a.pop() + " " : "";
	}
	function L(a, F, I, L, R, z) {
		if (a !== I || F !== L) {
			var V = R.push("translate(", null, N, null, P);
			z.push({
				i: V - 4,
				x: number_default(a, I)
			}, {
				i: V - 2,
				x: number_default(F, L)
			});
		} else (I || L) && R.push("translate(" + I + N + L + P);
	}
	function R(a, N, P, L) {
		a === N ? N && P.push(I(P) + "rotate(" + N + F) : (a - N > 180 ? N += 360 : N - a > 180 && (a += 360), L.push({
			i: P.push(I(P) + "rotate(", null, F) - 2,
			x: number_default(a, N)
		}));
	}
	function z(a, N, P, L) {
		a === N ? N && P.push(I(P) + "skewX(" + N + F) : L.push({
			i: P.push(I(P) + "skewX(", null, F) - 2,
			x: number_default(a, N)
		});
	}
	function V(a, N, P, F, L, R) {
		if (a !== P || N !== F) {
			var z = L.push(I(L) + "scale(", null, ",", null, ")");
			R.push({
				i: z - 4,
				x: number_default(a, P)
			}, {
				i: z - 2,
				x: number_default(N, F)
			});
		} else (P !== 1 || F !== 1) && L.push(I(L) + "scale(" + P + "," + F + ")");
	}
	return function(N, P) {
		var F = [], I = [];
		return N = a(N), P = a(P), L(N.translateX, N.translateY, P.translateX, P.translateY, F, I), R(N.rotate, P.rotate, F, I), z(N.skewX, P.skewX, F, I), V(N.scaleX, N.scaleY, P.scaleX, P.scaleY, F, I), N = P = null, function(a) {
			for (var N = -1, P = I.length, L; ++N < P;) F[(L = I[N]).i] = L.x(a);
			return F.join("");
		};
	};
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)"), interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")"), epsilon2 = 1e-12;
function cosh(a) {
	return ((a = Math.exp(a)) + 1 / a) / 2;
}
function sinh(a) {
	return ((a = Math.exp(a)) - 1 / a) / 2;
}
function tanh(a) {
	return ((a = Math.exp(2 * a)) - 1) / (a + 1);
}
var zoom_default = (function a(N, P, F) {
	function I(a, I) {
		var L = a[0], R = a[1], z = a[2], V = I[0], H = I[1], U = I[2], W = V - L, G = H - R, q = W * W + G * G, J, Y;
		if (q < epsilon2) Y = Math.log(U / z) / N, J = function(a) {
			return [
				L + a * W,
				R + a * G,
				z * Math.exp(N * a * Y)
			];
		};
		else {
			var X = Math.sqrt(q), Z = (U * U - z * z + F * q) / (2 * z * P * X), Q = (U * U - z * z - F * q) / (2 * U * P * X), $ = Math.log(Math.sqrt(Z * Z + 1) - Z);
			Y = (Math.log(Math.sqrt(Q * Q + 1) - Q) - $) / N, J = function(a) {
				var F = a * Y, I = cosh($), V = z / (P * X) * (I * tanh(N * F + $) - sinh($));
				return [
					L + V * W,
					R + V * G,
					z * I / cosh(N * F + $)
				];
			};
		}
		return J.duration = Y * 1e3 * N / Math.SQRT2, J;
	}
	return I.rho = function(N) {
		var P = Math.max(.001, +N), F = P * P;
		return a(P, F, F * F);
	}, I;
})(Math.SQRT2, 2, 4);
function hsl$1(a) {
	return function(N, P) {
		var F = a((N = hsl(N)).h, (P = hsl(P)).h), I = nogamma(N.s, P.s), L = nogamma(N.l, P.l), R = nogamma(N.opacity, P.opacity);
		return function(a) {
			return N.h = F(a), N.s = I(a), N.l = L(a), N.opacity = R(a), N + "";
		};
	};
}
var hsl_default = hsl$1(hue), hslLong = hsl$1(nogamma);
function lab(a, N) {
	var P = nogamma((a = lab$1(a)).l, (N = lab$1(N)).l), F = nogamma(a.a, N.a), I = nogamma(a.b, N.b), L = nogamma(a.opacity, N.opacity);
	return function(N) {
		return a.l = P(N), a.a = F(N), a.b = I(N), a.opacity = L(N), a + "";
	};
}
function hcl$1(a) {
	return function(N, P) {
		var F = a((N = hcl(N)).h, (P = hcl(P)).h), I = nogamma(N.c, P.c), L = nogamma(N.l, P.l), R = nogamma(N.opacity, P.opacity);
		return function(a) {
			return N.h = F(a), N.c = I(a), N.l = L(a), N.opacity = R(a), N + "";
		};
	};
}
var hcl_default = hcl$1(hue), hclLong = hcl$1(nogamma);
function cubehelix$1(a) {
	return (function N(P) {
		P = +P;
		function F(N, F) {
			var I = a((N = cubehelix(N)).h, (F = cubehelix(F)).h), L = nogamma(N.s, F.s), R = nogamma(N.l, F.l), z = nogamma(N.opacity, F.opacity);
			return function(a) {
				return N.h = I(a), N.s = L(a), N.l = R(a ** +P), N.opacity = z(a), N + "";
			};
		}
		return F.gamma = N, F;
	})(1);
}
var cubehelix_default = cubehelix$1(hue), cubehelixLong = cubehelix$1(nogamma);
function piecewise(a, N) {
	N === void 0 && (N = a, a = value_default);
	for (var P = 0, F = N.length - 1, I = N[0], L = Array(F < 0 ? 0 : F); P < F;) L[P] = a(I, I = N[++P]);
	return function(a) {
		var N = Math.max(0, Math.min(F - 1, Math.floor(a *= F)));
		return L[N](a - N);
	};
}
function quantize_default(a, N) {
	for (var P = Array(N), F = 0; F < N; ++F) P[F] = a(F / (N - 1));
	return P;
}
var src_exports = /* @__PURE__ */ __export({
	interpolate: () => value_default,
	interpolateArray: () => array_default,
	interpolateBasis: () => basis_default,
	interpolateBasisClosed: () => basisClosed_default,
	interpolateCubehelix: () => cubehelix_default,
	interpolateCubehelixLong: () => cubehelixLong,
	interpolateDate: () => date_default,
	interpolateDiscrete: () => discrete_default,
	interpolateHcl: () => hcl_default,
	interpolateHclLong: () => hclLong,
	interpolateHsl: () => hsl_default,
	interpolateHslLong: () => hslLong,
	interpolateHue: () => hue_default,
	interpolateLab: () => lab,
	interpolateNumber: () => number_default,
	interpolateNumberArray: () => numberArray_default,
	interpolateObject: () => object_default,
	interpolateRgb: () => rgb_default,
	interpolateRgbBasis: () => rgbBasis,
	interpolateRgbBasisClosed: () => rgbBasisClosed,
	interpolateRound: () => round_default,
	interpolateString: () => string_default,
	interpolateTransformCss: () => interpolateTransformCss,
	interpolateTransformSvg: () => interpolateTransformSvg,
	interpolateZoom: () => zoom_default,
	piecewise: () => piecewise,
	quantize: () => quantize_default
}), frame = 0, timeout = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance == "object" && performance.now ? performance : Date, setFrame = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(a) {
	setTimeout(a, 17);
};
function now() {
	return clockNow ||= (setFrame(clearNow), clock.now() + clockSkew);
}
function clearNow() {
	clockNow = 0;
}
function Timer() {
	this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
	constructor: Timer,
	restart: function(a, N, P) {
		if (typeof a != "function") throw TypeError("callback is not a function");
		P = (P == null ? now() : +P) + (N == null ? 0 : +N), !this._next && taskTail !== this && (taskTail ? taskTail._next = this : taskHead = this, taskTail = this), this._call = a, this._time = P, sleep();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, sleep());
	}
};
function timer(a, N, P) {
	var F = new Timer();
	return F.restart(a, N, P), F;
}
function timerFlush() {
	now(), ++frame;
	for (var a = taskHead, N; a;) (N = clockNow - a._time) >= 0 && a._call.call(void 0, N), a = a._next;
	--frame;
}
function wake() {
	clockNow = (clockLast = clock.now()) + clockSkew, frame = timeout = 0;
	try {
		timerFlush();
	} finally {
		frame = 0, nap(), clockNow = 0;
	}
}
function poke() {
	var a = clock.now(), N = a - clockLast;
	N > pokeDelay && (clockSkew -= N, clockLast = a);
}
function nap() {
	for (var a, N = taskHead, P, F = Infinity; N;) N._call ? (F > N._time && (F = N._time), a = N, N = N._next) : (P = N._next, N._next = null, N = a ? a._next = P : taskHead = P);
	taskTail = a, sleep(F);
}
function sleep(a) {
	frame || (timeout &&= clearTimeout(timeout), a - clockNow > 24 ? (a < Infinity && (timeout = setTimeout(wake, a - clock.now() - clockSkew)), interval &&= clearInterval(interval)) : (interval ||= (clockLast = clock.now(), setInterval(poke, pokeDelay)), frame = 1, setFrame(wake)));
}
export { hsl as _, piecewise as a, interpolateTransformSvg as c, string_default as d, number_default as f, color as g, lab$1 as h, src_exports as i, round_default as l, hcl as m, now as n, hcl_default as o, rgb_default as p, timer as r, interpolateTransformCss as s, Timer as t, value_default as u, rgb as v, dispatch_default as y };

//# sourceMappingURL=timer-Bp1bAW5T.js.map