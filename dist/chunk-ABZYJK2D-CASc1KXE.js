import { a as setLogLevel, i as log, n as __export, r as __name } from "./src-B-gAGmo8.js";
var Channel = {
	min: {
		r: 0,
		g: 0,
		b: 0,
		s: 0,
		l: 0,
		a: 0
	},
	max: {
		r: 255,
		g: 255,
		b: 255,
		h: 360,
		s: 100,
		l: 100,
		a: 1
	},
	clamp: {
		r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
		g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
		b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
		h: (e) => e % 360,
		s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
		l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
		a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
	},
	toLinear: (e) => {
		let t = e / 255;
		return e > .03928 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92;
	},
	hue2rgb: (e, t, n) => (n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e),
	hsl2rgb: ({ h: e, s: t, l: n }, r) => {
		if (!t) return n * 2.55;
		e /= 360, t /= 100, n /= 100;
		let a = n < .5 ? n * (1 + t) : n + t - n * t, o = 2 * n - a;
		switch (r) {
			case "r": return Channel.hue2rgb(o, a, e + 1 / 3) * 255;
			case "g": return Channel.hue2rgb(o, a, e) * 255;
			case "b": return Channel.hue2rgb(o, a, e - 1 / 3) * 255;
		}
	},
	rgb2hsl: ({ r: e, g: t, b: n }, r) => {
		e /= 255, t /= 255, n /= 255;
		let i = Math.max(e, t, n), a = Math.min(e, t, n), o = (i + a) / 2;
		if (r === "l") return o * 100;
		if (i === a) return 0;
		let s = i - a, c = o > .5 ? s / (2 - i - a) : s / (i + a);
		if (r === "s") return c * 100;
		switch (i) {
			case e: return ((t - n) / s + (t < n ? 6 : 0)) * 60;
			case t: return ((n - e) / s + 2) * 60;
			case n: return ((e - t) / s + 4) * 60;
			default: return -1;
		}
	}
}, utils_default = {
	channel: Channel,
	lang: {
		clamp: (e, t, n) => t > n ? Math.min(t, Math.max(n, e)) : Math.min(n, Math.max(t, e)),
		round: (e) => Math.round(e * 1e10) / 1e10
	},
	unit: { dec2hex: (e) => {
		let t = Math.round(e).toString(16);
		return t.length > 1 ? t : `0${t}`;
	} }
}, DEC2HEX = {};
for (let e = 0; e <= 255; e++) DEC2HEX[e] = utils_default.unit.dec2hex(e);
var TYPE = {
	ALL: 0,
	RGB: 1,
	HSL: 2
}, type_default = class {
	constructor() {
		this.type = TYPE.ALL;
	}
	get() {
		return this.type;
	}
	set(e) {
		if (this.type && this.type !== e) throw Error("Cannot change both RGB and HSL channels at the same time");
		this.type = e;
	}
	reset() {
		this.type = TYPE.ALL;
	}
	is(e) {
		return this.type === e;
	}
}, reusable_default = new class {
	constructor(e, t) {
		this.color = t, this.changed = !1, this.data = e, this.type = new type_default();
	}
	set(e, t) {
		return this.color = t, this.changed = !1, this.data = e, this.type.type = TYPE.ALL, this;
	}
	_ensureHSL() {
		let e = this.data, { h: t, s: n, l: r } = e;
		t === void 0 && (e.h = utils_default.channel.rgb2hsl(e, "h")), n === void 0 && (e.s = utils_default.channel.rgb2hsl(e, "s")), r === void 0 && (e.l = utils_default.channel.rgb2hsl(e, "l"));
	}
	_ensureRGB() {
		let e = this.data, { r: t, g: n, b: r } = e;
		t === void 0 && (e.r = utils_default.channel.hsl2rgb(e, "r")), n === void 0 && (e.g = utils_default.channel.hsl2rgb(e, "g")), r === void 0 && (e.b = utils_default.channel.hsl2rgb(e, "b"));
	}
	get r() {
		let e = this.data, t = e.r;
		return !this.type.is(TYPE.HSL) && t !== void 0 ? t : (this._ensureHSL(), utils_default.channel.hsl2rgb(e, "r"));
	}
	get g() {
		let e = this.data, t = e.g;
		return !this.type.is(TYPE.HSL) && t !== void 0 ? t : (this._ensureHSL(), utils_default.channel.hsl2rgb(e, "g"));
	}
	get b() {
		let e = this.data, t = e.b;
		return !this.type.is(TYPE.HSL) && t !== void 0 ? t : (this._ensureHSL(), utils_default.channel.hsl2rgb(e, "b"));
	}
	get h() {
		let e = this.data, t = e.h;
		return !this.type.is(TYPE.RGB) && t !== void 0 ? t : (this._ensureRGB(), utils_default.channel.rgb2hsl(e, "h"));
	}
	get s() {
		let e = this.data, t = e.s;
		return !this.type.is(TYPE.RGB) && t !== void 0 ? t : (this._ensureRGB(), utils_default.channel.rgb2hsl(e, "s"));
	}
	get l() {
		let e = this.data, t = e.l;
		return !this.type.is(TYPE.RGB) && t !== void 0 ? t : (this._ensureRGB(), utils_default.channel.rgb2hsl(e, "l"));
	}
	get a() {
		return this.data.a;
	}
	set r(e) {
		this.type.set(TYPE.RGB), this.changed = !0, this.data.r = e;
	}
	set g(e) {
		this.type.set(TYPE.RGB), this.changed = !0, this.data.g = e;
	}
	set b(e) {
		this.type.set(TYPE.RGB), this.changed = !0, this.data.b = e;
	}
	set h(e) {
		this.type.set(TYPE.HSL), this.changed = !0, this.data.h = e;
	}
	set s(e) {
		this.type.set(TYPE.HSL), this.changed = !0, this.data.s = e;
	}
	set l(e) {
		this.type.set(TYPE.HSL), this.changed = !0, this.data.l = e;
	}
	set a(e) {
		this.changed = !0, this.data.a = e;
	}
}({
	r: 0,
	g: 0,
	b: 0,
	a: 0
}, "transparent"), Hex = {
	re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
	parse: (e) => {
		if (e.charCodeAt(0) !== 35) return;
		let t = e.match(Hex.re);
		if (!t) return;
		let n = t[1], r = parseInt(n, 16), i = n.length, a = i % 4 == 0, o = i > 4, s = o ? 1 : 17, c = o ? 8 : 4, d = a ? 0 : -1, f = o ? 255 : 15;
		return reusable_default.set({
			r: (r >> c * (d + 3) & f) * s,
			g: (r >> c * (d + 2) & f) * s,
			b: (r >> c * (d + 1) & f) * s,
			a: a ? (r & f) * s / 255 : 1
		}, e);
	},
	stringify: (e) => {
		let { r: t, g: n, b: r, a: i } = e;
		return i < 1 ? `#${DEC2HEX[Math.round(t)]}${DEC2HEX[Math.round(n)]}${DEC2HEX[Math.round(r)]}${DEC2HEX[Math.round(i * 255)]}` : `#${DEC2HEX[Math.round(t)]}${DEC2HEX[Math.round(n)]}${DEC2HEX[Math.round(r)]}`;
	}
}, hex_default = Hex, HSL = {
	re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
	hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
	_hue2deg: (e) => {
		let t = e.match(HSL.hueRe);
		if (t) {
			let [, e, n] = t;
			switch (n) {
				case "grad": return utils_default.channel.clamp.h(parseFloat(e) * .9);
				case "rad": return utils_default.channel.clamp.h(parseFloat(e) * 180 / Math.PI);
				case "turn": return utils_default.channel.clamp.h(parseFloat(e) * 360);
			}
		}
		return utils_default.channel.clamp.h(parseFloat(e));
	},
	parse: (e) => {
		let t = e.charCodeAt(0);
		if (t !== 104 && t !== 72) return;
		let n = e.match(HSL.re);
		if (!n) return;
		let [, r, i, o, s, c] = n;
		return reusable_default.set({
			h: HSL._hue2deg(r),
			s: utils_default.channel.clamp.s(parseFloat(i)),
			l: utils_default.channel.clamp.l(parseFloat(o)),
			a: s ? utils_default.channel.clamp.a(c ? parseFloat(s) / 100 : parseFloat(s)) : 1
		}, e);
	},
	stringify: (e) => {
		let { h: t, s: n, l: r, a: i } = e;
		return i < 1 ? `hsla(${utils_default.lang.round(t)}, ${utils_default.lang.round(n)}%, ${utils_default.lang.round(r)}%, ${i})` : `hsl(${utils_default.lang.round(t)}, ${utils_default.lang.round(n)}%, ${utils_default.lang.round(r)}%)`;
	}
}, hsl_default = HSL, Keyword = {
	colors: {
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#000000",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyanaqua: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkgrey: "#a9a9a9",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkslategrey: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dimgrey: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#008000",
		greenyellow: "#adff2f",
		grey: "#808080",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgray: "#d3d3d3",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightslategrey: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370db",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#db7093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#ffc0cb",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		rebeccapurple: "#663399",
		red: "#ff0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		slategrey: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		transparent: "#00000000",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#ffffff",
		whitesmoke: "#f5f5f5",
		yellow: "#ffff00",
		yellowgreen: "#9acd32"
	},
	parse: (e) => {
		e = e.toLowerCase();
		let t = Keyword.colors[e];
		if (t) return hex_default.parse(t);
	},
	stringify: (e) => {
		let t = hex_default.stringify(e);
		for (let e in Keyword.colors) if (Keyword.colors[e] === t) return e;
	}
}, keyword_default = Keyword, RGB = {
	re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
	parse: (e) => {
		let t = e.charCodeAt(0);
		if (t !== 114 && t !== 82) return;
		let n = e.match(RGB.re);
		if (!n) return;
		let [, r, i, o, s, c, u, d, f] = n;
		return reusable_default.set({
			r: utils_default.channel.clamp.r(i ? parseFloat(r) * 2.55 : parseFloat(r)),
			g: utils_default.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
			b: utils_default.channel.clamp.b(u ? parseFloat(c) * 2.55 : parseFloat(c)),
			a: d ? utils_default.channel.clamp.a(f ? parseFloat(d) / 100 : parseFloat(d)) : 1
		}, e);
	},
	stringify: (e) => {
		let { r: t, g: n, b: r, a: i } = e;
		return i < 1 ? `rgba(${utils_default.lang.round(t)}, ${utils_default.lang.round(n)}, ${utils_default.lang.round(r)}, ${utils_default.lang.round(i)})` : `rgb(${utils_default.lang.round(t)}, ${utils_default.lang.round(n)}, ${utils_default.lang.round(r)})`;
	}
}, rgb_default = RGB, color_default = {
	format: {
		keyword: keyword_default,
		hex: hex_default,
		rgb: rgb_default,
		rgba: rgb_default,
		hsl: hsl_default,
		hsla: hsl_default
	},
	parse: (e) => {
		if (typeof e != "string") return e;
		let t = hex_default.parse(e) || rgb_default.parse(e) || hsl_default.parse(e) || keyword_default.parse(e);
		if (t) return t;
		throw Error(`Unsupported color format: "${e}"`);
	},
	stringify: (e) => !e.changed && e.color ? e.color : e.type.is(TYPE.HSL) || e.data.r === void 0 ? hsl_default.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? rgb_default.stringify(e) : hex_default.stringify(e)
}, change_default = (e, t) => {
	let n = color_default.parse(e);
	for (let e in t) n[e] = utils_default.channel.clamp[e](t[e]);
	return color_default.stringify(n);
}, rgba_default = (e, t, n = 0, r = 1) => {
	if (typeof e != "number") return change_default(e, { a: t });
	let i = reusable_default.set({
		r: utils_default.channel.clamp.r(e),
		g: utils_default.channel.clamp.g(t),
		b: utils_default.channel.clamp.b(n),
		a: utils_default.channel.clamp.a(r)
	});
	return color_default.stringify(i);
}, luminance_default = (e) => {
	let { r: t, g: n, b: r } = color_default.parse(e), i = .2126 * utils_default.channel.toLinear(t) + .7152 * utils_default.channel.toLinear(n) + .0722 * utils_default.channel.toLinear(r);
	return utils_default.lang.round(i);
}, is_light_default = (e) => luminance_default(e) >= .5, is_dark_default = (e) => !is_light_default(e), adjust_channel_default = (e, t, n) => {
	let r = color_default.parse(e), i = r[t], o = utils_default.channel.clamp[t](i + n);
	return i !== o && (r[t] = o), color_default.stringify(r);
}, lighten_default = (e, t) => adjust_channel_default(e, "l", t), darken_default = (e, t) => adjust_channel_default(e, "l", -t), adjust_default = (e, t) => {
	let n = color_default.parse(e), r = {};
	for (let e in t) t[e] && (r[e] = n[e] + t[e]);
	return change_default(e, r);
}, mix_default = (e, t, n = 50) => {
	let { r, g: i, b: a, a: o } = color_default.parse(e), { r: s, g: c, b: l, a: u } = color_default.parse(t), d = n / 100, f = d * 2 - 1, p = o - u, m = ((f * p === -1 ? f : (f + p) / (1 + f * p)) + 1) / 2, h = 1 - m;
	return rgba_default(r * m + s * h, i * m + c * h, a * m + l * h, o * d + u * (1 - d));
}, invert_default = (e, t = 100) => {
	let n = color_default.parse(e);
	return n.r = 255 - n.r, n.g = 255 - n.g, n.b = 255 - n.b, mix_default(n, e, t);
}, { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object, { freeze, seal, create } = Object, { apply, construct } = typeof Reflect < "u" && Reflect;
freeze ||= function(e) {
	return e;
}, seal ||= function(e) {
	return e;
}, apply ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, construct ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var arrayForEach = unapply(Array.prototype.forEach), arrayLastIndexOf = unapply(Array.prototype.lastIndexOf), arrayPop = unapply(Array.prototype.pop), arrayPush = unapply(Array.prototype.push), arraySplice = unapply(Array.prototype.splice), stringToLowerCase = unapply(String.prototype.toLowerCase), stringToString = unapply(String.prototype.toString), stringMatch = unapply(String.prototype.match), stringReplace = unapply(String.prototype.replace), stringIndexOf = unapply(String.prototype.indexOf), stringTrim = unapply(String.prototype.trim), objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty), regExpTest = unapply(RegExp.prototype.test), typeErrorCreate = unconstruct(TypeError);
function unapply(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return apply(e, t, n);
	};
}
function unconstruct(e) {
	return function() {
		return construct(e, [...arguments]);
	};
}
function addToSet(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
	setPrototypeOf && setPrototypeOf(e, null);
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (isFrozen(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function cleanArray(e) {
	for (let t = 0; t < e.length; t++) objectHasOwnProperty(e, t) || (e[t] = null);
	return e;
}
function clone(e) {
	let t = create(null);
	for (let [n, r] of entries(e)) objectHasOwnProperty(e, n) && (Array.isArray(r) ? t[n] = cleanArray(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = clone(r) : t[n] = r);
	return t;
}
function lookupGetter(e, t) {
	for (; e !== null;) {
		let n = getOwnPropertyDescriptor(e, t);
		if (n) {
			if (n.get) return unapply(n.get);
			if (typeof n.value == "function") return unapply(n.value);
		}
		e = getPrototypeOf(e);
	}
	function n() {
		return null;
	}
	return n;
}
var html$1 = freeze(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), svg$1 = freeze(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), svgFilters = freeze([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), svgDisallowed = freeze([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), mathMl$1 = freeze(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), mathMlDisallowed = freeze([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), text = freeze(["#text"]), html = freeze(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(".")), svg = freeze(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), mathMl = freeze(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), xml = freeze([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm), TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm), DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/), ARIA_ATTR = seal(/^aria-[\-\w]+$/), IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i), ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), DOCTYPE_NAME = seal(/^html$/i), CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i), EXPRESSIONS = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	ARIA_ATTR,
	ATTR_WHITESPACE,
	CUSTOM_ELEMENT,
	DATA_ATTR,
	DOCTYPE_NAME,
	ERB_EXPR,
	IS_ALLOWED_URI,
	IS_SCRIPT_OR_DATA,
	MUSTACHE_EXPR,
	TMPLIT_EXPR
}), NODE_TYPE = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	progressingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, getGlobal = function() {
	return typeof window > "u" ? null : window;
}, _createTrustedTypesPolicy = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, _createHooksMap = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
};
function createDOMPurify() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal(), t = (e) => createDOMPurify(e);
	if (t.version = "3.3.0", t.removed = [], !e || !e.document || e.document.nodeType !== NODE_TYPE.document || !e.Element) return t.isSupported = !1, t;
	let { document: n } = e, r = n, i = r.currentScript, { DocumentFragment: a, HTMLTemplateElement: o, Node: s, Element: c, NodeFilter: l, NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: d, DOMParser: f, trustedTypes: p } = e, m = c.prototype, h = lookupGetter(m, "cloneNode"), Wt = lookupGetter(m, "remove"), Gt = lookupGetter(m, "nextSibling"), Kt = lookupGetter(m, "childNodes"), g = lookupGetter(m, "parentNode");
	if (typeof o == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let _, v = "", { implementation: y, createNodeIterator: qt, createDocumentFragment: Jt, getElementsByTagName: Yt } = n, { importNode: Xt } = r, b = _createHooksMap();
	t.isSupported = typeof entries == "function" && typeof g == "function" && y && y.createHTMLDocument !== void 0;
	let { MUSTACHE_EXPR: x, ERB_EXPR: Zt, TMPLIT_EXPR: Qt, DATA_ATTR: $t, ARIA_ATTR: en, IS_SCRIPT_OR_DATA: tn, ATTR_WHITESPACE: nn, CUSTOM_ELEMENT: rn } = EXPRESSIONS, { IS_ALLOWED_URI: an } = EXPRESSIONS, S = null, on = addToSet({}, [
		...html$1,
		...svg$1,
		...svgFilters,
		...mathMl$1,
		...text
	]), C = null, sn = addToSet({}, [
		...html,
		...svg,
		...mathMl,
		...xml
	]), w = Object.seal(create(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), T = null, E = null, D = Object.seal(create(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), cn = !0, O = !0, ln = !1, un = !0, k = !1, A = !0, j = !1, M = !1, N = !1, P = !1, F = !1, I = !1, dn = !0, fn = !1, L = !0, R = !1, z = {}, B = null, pn = addToSet({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]), mn = null, hn = addToSet({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), gn = null, _n = addToSet({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), V = "http://www.w3.org/1998/Math/MathML", H = "http://www.w3.org/2000/svg", U = "http://www.w3.org/1999/xhtml", W = U, vn = !1, yn = null, bn = addToSet({}, [
		V,
		H,
		U
	], stringToString), G = addToSet({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), K = addToSet({}, ["annotation-xml"]), xn = addToSet({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), q = null, Sn = ["application/xhtml+xml", "text/html"], J = null, Y = null, Cn = n.createElement("form"), wn = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Tn = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (!(Y && Y === e)) {
			if ((!e || typeof e != "object") && (e = {}), e = clone(e), q = Sn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, J = q === "application/xhtml+xml" ? stringToString : stringToLowerCase, S = objectHasOwnProperty(e, "ALLOWED_TAGS") ? addToSet({}, e.ALLOWED_TAGS, J) : on, C = objectHasOwnProperty(e, "ALLOWED_ATTR") ? addToSet({}, e.ALLOWED_ATTR, J) : sn, yn = objectHasOwnProperty(e, "ALLOWED_NAMESPACES") ? addToSet({}, e.ALLOWED_NAMESPACES, stringToString) : bn, gn = objectHasOwnProperty(e, "ADD_URI_SAFE_ATTR") ? addToSet(clone(_n), e.ADD_URI_SAFE_ATTR, J) : _n, mn = objectHasOwnProperty(e, "ADD_DATA_URI_TAGS") ? addToSet(clone(hn), e.ADD_DATA_URI_TAGS, J) : hn, B = objectHasOwnProperty(e, "FORBID_CONTENTS") ? addToSet({}, e.FORBID_CONTENTS, J) : pn, T = objectHasOwnProperty(e, "FORBID_TAGS") ? addToSet({}, e.FORBID_TAGS, J) : clone({}), E = objectHasOwnProperty(e, "FORBID_ATTR") ? addToSet({}, e.FORBID_ATTR, J) : clone({}), z = objectHasOwnProperty(e, "USE_PROFILES") ? e.USE_PROFILES : !1, cn = e.ALLOW_ARIA_ATTR !== !1, O = e.ALLOW_DATA_ATTR !== !1, ln = e.ALLOW_UNKNOWN_PROTOCOLS || !1, un = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, k = e.SAFE_FOR_TEMPLATES || !1, A = e.SAFE_FOR_XML !== !1, j = e.WHOLE_DOCUMENT || !1, P = e.RETURN_DOM || !1, F = e.RETURN_DOM_FRAGMENT || !1, I = e.RETURN_TRUSTED_TYPE || !1, N = e.FORCE_BODY || !1, dn = e.SANITIZE_DOM !== !1, fn = e.SANITIZE_NAMED_PROPS || !1, L = e.KEEP_CONTENT !== !1, R = e.IN_PLACE || !1, an = e.ALLOWED_URI_REGEXP || IS_ALLOWED_URI, W = e.NAMESPACE || U, G = e.MATHML_TEXT_INTEGRATION_POINTS || G, K = e.HTML_INTEGRATION_POINTS || K, w = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && wn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (w.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && wn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (w.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (w.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), k && (O = !1), F && (P = !0), z && (S = addToSet({}, text), C = [], z.html === !0 && (addToSet(S, html$1), addToSet(C, html)), z.svg === !0 && (addToSet(S, svg$1), addToSet(C, svg), addToSet(C, xml)), z.svgFilters === !0 && (addToSet(S, svgFilters), addToSet(C, svg), addToSet(C, xml)), z.mathMl === !0 && (addToSet(S, mathMl$1), addToSet(C, mathMl), addToSet(C, xml))), e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? D.tagCheck = e.ADD_TAGS : (S === on && (S = clone(S)), addToSet(S, e.ADD_TAGS, J))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? D.attributeCheck = e.ADD_ATTR : (C === sn && (C = clone(C)), addToSet(C, e.ADD_ATTR, J))), e.ADD_URI_SAFE_ATTR && addToSet(gn, e.ADD_URI_SAFE_ATTR, J), e.FORBID_CONTENTS && (B === pn && (B = clone(B)), addToSet(B, e.FORBID_CONTENTS, J)), L && (S["#text"] = !0), j && addToSet(S, [
				"html",
				"head",
				"body"
			]), S.table && (addToSet(S, ["tbody"]), delete T.tbody), e.TRUSTED_TYPES_POLICY) {
				if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				_ = e.TRUSTED_TYPES_POLICY, v = _.createHTML("");
			} else _ === void 0 && (_ = _createTrustedTypesPolicy(p, i)), _ !== null && typeof v == "string" && (v = _.createHTML(""));
			freeze && freeze(e), Y = e;
		}
	}, En = addToSet({}, [
		...svg$1,
		...svgFilters,
		...svgDisallowed
	]), Dn = addToSet({}, [...mathMl$1, ...mathMlDisallowed]), On = function(e) {
		let t = g(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: W,
			tagName: "template"
		});
		let n = stringToLowerCase(e.tagName), r = stringToLowerCase(t.tagName);
		return yn[e.namespaceURI] ? e.namespaceURI === H ? t.namespaceURI === U ? n === "svg" : t.namespaceURI === V ? n === "svg" && (r === "annotation-xml" || G[r]) : !!En[n] : e.namespaceURI === V ? t.namespaceURI === U ? n === "math" : t.namespaceURI === H ? n === "math" && K[r] : !!Dn[n] : e.namespaceURI === U ? t.namespaceURI === H && !K[r] || t.namespaceURI === V && !G[r] ? !1 : !Dn[n] && (xn[n] || !En[n]) : !!(q === "application/xhtml+xml" && yn[e.namespaceURI]) : !1;
	}, X = function(e) {
		arrayPush(t.removed, { element: e });
		try {
			g(e).removeChild(e);
		} catch {
			Wt(e);
		}
	}, Z = function(e, n) {
		try {
			arrayPush(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			arrayPush(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") if (P || F) try {
			X(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, kn = function(e) {
		let t = null, r = null;
		if (N) e = "<remove></remove>" + e;
		else {
			let t = stringMatch(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		q === "application/xhtml+xml" && W === U && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = _ ? _.createHTML(e) : e;
		if (W === U) try {
			t = new f().parseFromString(i, q);
		} catch {}
		if (!t || !t.documentElement) {
			t = y.createDocument(W, "template", null);
			try {
				t.documentElement.innerHTML = vn ? v : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), W === U ? Yt.call(t, j ? "html" : "body")[0] : j ? t.documentElement : a;
	}, An = function(e) {
		return qt.call(e.ownerDocument || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
	}, Q = function(e) {
		return e instanceof d && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof u) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
	}, jn = function(e) {
		return typeof s == "function" && e instanceof s;
	};
	function $(e, n, r) {
		arrayForEach(e, (e) => {
			e.call(t, n, r, Y);
		});
	}
	let Mn = function(e) {
		let n = null;
		if ($(b.beforeSanitizeElements, e, null), Q(e)) return X(e), !0;
		let r = J(e.nodeName);
		if ($(b.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: S
		}), A && e.hasChildNodes() && !jn(e.firstElementChild) && regExpTest(/<[/\w!]/g, e.innerHTML) && regExpTest(/<[/\w!]/g, e.textContent) || e.nodeType === NODE_TYPE.progressingInstruction || A && e.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, e.data)) return X(e), !0;
		if (!(D.tagCheck instanceof Function && D.tagCheck(r)) && (!S[r] || T[r])) {
			if (!T[r] && Pn(r) && (w.tagNameCheck instanceof RegExp && regExpTest(w.tagNameCheck, r) || w.tagNameCheck instanceof Function && w.tagNameCheck(r))) return !1;
			if (L && !B[r]) {
				let t = g(e) || e.parentNode, n = Kt(e) || e.childNodes;
				if (n && t) {
					let r = n.length;
					for (let i = r - 1; i >= 0; --i) {
						let r = h(n[i], !0);
						r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, Gt(e));
					}
				}
			}
			return X(e), !0;
		}
		return e instanceof c && !On(e) || (r === "noscript" || r === "noembed" || r === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, e.innerHTML) ? (X(e), !0) : (k && e.nodeType === NODE_TYPE.text && (n = e.textContent, arrayForEach([
			x,
			Zt,
			Qt
		], (e) => {
			n = stringReplace(n, e, " ");
		}), e.textContent !== n && (arrayPush(t.removed, { element: e.cloneNode() }), e.textContent = n)), $(b.afterSanitizeElements, e, null), !1);
	}, Nn = function(e, t, r) {
		if (dn && (t === "id" || t === "name") && (r in n || r in Cn)) return !1;
		if (!(O && !E[t] && regExpTest($t, t)) && !(cn && regExpTest(en, t)) && !(D.attributeCheck instanceof Function && D.attributeCheck(t, e))) {
			if (!C[t] || E[t]) {
				if (!(Pn(e) && (w.tagNameCheck instanceof RegExp && regExpTest(w.tagNameCheck, e) || w.tagNameCheck instanceof Function && w.tagNameCheck(e)) && (w.attributeNameCheck instanceof RegExp && regExpTest(w.attributeNameCheck, t) || w.attributeNameCheck instanceof Function && w.attributeNameCheck(t, e)) || t === "is" && w.allowCustomizedBuiltInElements && (w.tagNameCheck instanceof RegExp && regExpTest(w.tagNameCheck, r) || w.tagNameCheck instanceof Function && w.tagNameCheck(r)))) return !1;
			} else if (!gn[t] && !regExpTest(an, stringReplace(r, nn, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && stringIndexOf(r, "data:") === 0 && mn[e]) && !(ln && !regExpTest(tn, stringReplace(r, nn, ""))) && r) return !1;
		}
		return !0;
	}, Pn = function(e) {
		return e !== "annotation-xml" && stringMatch(e, rn);
	}, Fn = function(e) {
		$(b.beforeSanitizeAttributes, e, null);
		let { attributes: n } = e;
		if (!n || Q(e)) return;
		let r = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: C,
			forceKeepAttr: void 0
		}, i = n.length;
		for (; i--;) {
			let { name: a, namespaceURI: o, value: s } = n[i], c = J(a), l = s, u = a === "value" ? l : stringTrim(l);
			if (r.attrName = c, r.attrValue = u, r.keepAttr = !0, r.forceKeepAttr = void 0, $(b.uponSanitizeAttribute, e, r), u = r.attrValue, fn && (c === "id" || c === "name") && (Z(a, e), u = "user-content-" + u), A && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, u)) {
				Z(a, e);
				continue;
			}
			if (c === "attributename" && stringMatch(u, "href")) {
				Z(a, e);
				continue;
			}
			if (r.forceKeepAttr) continue;
			if (!r.keepAttr) {
				Z(a, e);
				continue;
			}
			if (!un && regExpTest(/\/>/i, u)) {
				Z(a, e);
				continue;
			}
			k && arrayForEach([
				x,
				Zt,
				Qt
			], (e) => {
				u = stringReplace(u, e, " ");
			});
			let d = J(e.nodeName);
			if (!Nn(d, c, u)) {
				Z(a, e);
				continue;
			}
			if (_ && typeof p == "object" && typeof p.getAttributeType == "function" && !o) switch (p.getAttributeType(d, c)) {
				case "TrustedHTML":
					u = _.createHTML(u);
					break;
				case "TrustedScriptURL":
					u = _.createScriptURL(u);
					break;
			}
			if (u !== l) try {
				o ? e.setAttributeNS(o, a, u) : e.setAttribute(a, u), Q(e) ? X(e) : arrayPop(t.removed);
			} catch {
				Z(a, e);
			}
		}
		$(b.afterSanitizeAttributes, e, null);
	}, In = function e(t) {
		let n = null, r = An(t);
		for ($(b.beforeSanitizeShadowDOM, t, null); n = r.nextNode();) $(b.uponSanitizeShadowNode, n, null), Mn(n), Fn(n), n.content instanceof a && e(n.content);
		$(b.afterSanitizeShadowDOM, t, null);
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, o = null, c = null, l = null;
		if (vn = !e, vn && (e = "<!-->"), typeof e != "string" && !jn(e)) if (typeof e.toString == "function") {
			if (e = e.toString(), typeof e != "string") throw typeErrorCreate("dirty is not a string, aborting");
		} else throw typeErrorCreate("toString is not a function");
		if (!t.isSupported) return e;
		if (M || Tn(n), t.removed = [], typeof e == "string" && (R = !1), R) {
			if (e.nodeName) {
				let t = J(e.nodeName);
				if (!S[t] || T[t]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
			}
		} else if (e instanceof s) i = kn("<!---->"), o = i.ownerDocument.importNode(e, !0), o.nodeType === NODE_TYPE.element && o.nodeName === "BODY" || o.nodeName === "HTML" ? i = o : i.appendChild(o);
		else {
			if (!P && !k && !j && e.indexOf("<") === -1) return _ && I ? _.createHTML(e) : e;
			if (i = kn(e), !i) return P ? null : I ? v : "";
		}
		i && N && X(i.firstChild);
		let u = An(R ? e : i);
		for (; c = u.nextNode();) Mn(c), Fn(c), c.content instanceof a && In(c.content);
		if (R) return e;
		if (P) {
			if (F) for (l = Jt.call(i.ownerDocument); i.firstChild;) l.appendChild(i.firstChild);
			else l = i;
			return (C.shadowroot || C.shadowrootmode) && (l = Xt.call(r, l, !0)), l;
		}
		let d = j ? i.outerHTML : i.innerHTML;
		return j && S["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, i.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + d), k && arrayForEach([
			x,
			Zt,
			Qt
		], (e) => {
			d = stringReplace(d, e, " ");
		}), _ && I ? _.createHTML(d) : d;
	}, t.setConfig = function() {
		Tn(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), M = !0;
	}, t.clearConfig = function() {
		Y = null, M = !1;
	}, t.isValidAttribute = function(e, t, n) {
		return Y || Tn({}), Nn(J(e), J(t), n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && arrayPush(b[e], t);
	}, t.removeHook = function(e, t) {
		if (t !== void 0) {
			let n = arrayLastIndexOf(b[e], t);
			return n === -1 ? void 0 : arraySplice(b[e], n, 1)[0];
		}
		return arrayPop(b[e]);
	}, t.removeHooks = function(e) {
		b[e] = [];
	}, t.removeAllHooks = function() {
		b = _createHooksMap();
	}, t;
}
var purify = createDOMPurify(), frontMatterRegex = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, directiveRegex = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, anyCommentRegex = /\s*%%.*\n/gm, UnknownDiagramError = class extends Error {
	static #e = __name(this, "UnknownDiagramError");
	constructor(e) {
		super(e), this.name = "UnknownDiagramError";
	}
}, detectors = {}, detectType = /* @__PURE__ */ __name(function(e, t) {
	e = e.replace(frontMatterRegex, "").replace(directiveRegex, "").replace(anyCommentRegex, "\n");
	for (let [n, { detector: r }] of Object.entries(detectors)) if (r(e, t)) return n;
	throw new UnknownDiagramError(`No diagram type detected matching given configuration for text: ${e}`);
}, "detectType"), registerLazyLoadedDiagrams = /* @__PURE__ */ __name((...e) => {
	for (let { id: t, detector: n, loader: r } of e) addDetector(t, n, r);
}, "registerLazyLoadedDiagrams"), addDetector = /* @__PURE__ */ __name((e, n, r) => {
	detectors[e] && log.warn(`Detector with key ${e} already exists. Overwriting.`), detectors[e] = {
		detector: n,
		loader: r
	}, log.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), getDiagramLoader = /* @__PURE__ */ __name((e) => detectors[e].loader, "getDiagramLoader"), assignWithDepth = /* @__PURE__ */ __name((e, t, { depth: n = 2, clobber: r = !1 } = {}) => {
	let i = {
		depth: n,
		clobber: r
	};
	return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((t) => assignWithDepth(e, t, i)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((t) => {
		e.includes(t) || e.push(t);
	}), e) : e === void 0 || n <= 0 ? typeof e == "object" && e && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((i) => {
		typeof t[i] == "object" && (e[i] === void 0 || typeof e[i] == "object") ? (e[i] === void 0 && (e[i] = Array.isArray(t[i]) ? [] : {}), e[i] = assignWithDepth(e[i], t[i], {
			depth: n - 1,
			clobber: r
		})) : (r || typeof e[i] != "object" && typeof t[i] != "object") && (e[i] = t[i]);
	}), e);
}, "assignWithDepth"), assignWithDepth_default = assignWithDepth, oldAttributeBackgroundColorOdd = "#ffffff", oldAttributeBackgroundColorEven = "#f2f2f2", mkBorder = /* @__PURE__ */ __name((e, t) => t ? adjust_default(e, {
	s: -40,
	l: 10
}) : adjust_default(e, {
	s: -40,
	l: -10
}), "mkBorder"), Theme = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || darken_default(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || darken_default(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || lighten_default(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.darkMode) for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = darken_default(this["cScale" + e], 75);
		else for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = darken_default(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || invert_default(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || lighten_default(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || darken_default(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		let e = this.darkMode ? -4 : -1;
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (5 + t * 3)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (8 + t * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, getThemeVariables = /* @__PURE__ */ __name((e) => {
	let t = new Theme();
	return t.calculate(e), t;
}, "getThemeVariables"), Theme2 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = lighten_default(this.primaryColor, 16), this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = invert_default(this.background), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = lighten_default(invert_default("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = rgba_default(255, 255, 255, .25), this.arrowheadColor = "calculated", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = darken_default("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = darken_default(this.sectionBkgColor, 10), this.taskBorderColor = rgba_default(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = rgba_default(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || darken_default(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
	}
	updateColors() {
		this.secondBkg = lighten_default(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = lighten_default(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = lighten_default(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || invert_default(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScalePeer" + e] = this["cScalePeer" + e] || lighten_default(this["cScale" + e], 10);
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-10 + e * 4)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-7 + e * 4)
		});
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["pie" + e] = this["cScale" + e];
		this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
		}, this.packet = {
			startByteColor: this.primaryTextColor,
			endByteColor: this.primaryTextColor,
			labelColor: this.primaryTextColor,
			titleColor: this.primaryTextColor,
			blockStrokeColor: this.primaryTextColor,
			blockFillColor: this.background
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = lighten_default(this.secondaryColor, 20), this.git1 = lighten_default(this.pie2 || this.secondaryColor, 20), this.git2 = lighten_default(this.pie3 || this.tertiaryColor, 20), this.git3 = lighten_default(this.pie4 || adjust_default(this.primaryColor, { h: -30 }), 20), this.git4 = lighten_default(this.pie5 || adjust_default(this.primaryColor, { h: -60 }), 20), this.git5 = lighten_default(this.pie6 || adjust_default(this.primaryColor, { h: -90 }), 10), this.git6 = lighten_default(this.pie7 || adjust_default(this.primaryColor, { h: 60 }), 10), this.git7 = lighten_default(this.pie8 || adjust_default(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || lighten_default(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || lighten_default(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, getThemeVariables2 = /* @__PURE__ */ __name((e) => {
	let t = new Theme2();
	return t.calculate(e), t;
}, "getThemeVariables"), Theme3 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = adjust_default(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = rgba_default(102, 102, 255, .49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
	}
	updateColors() {
		this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || darken_default(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || darken_default(this.tertiaryColor, 40);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = darken_default(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || darken_default(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || adjust_default(this["cScale" + e], { h: 180 });
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || adjust_default(this.mainBkg, {
			h: 30,
			l: -(5 + e * 5)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || adjust_default(this.mainBkg, {
			h: 30,
			l: -(7 + e * 5)
		});
		if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
			this.cScaleLabel0 = this.cScaleLabel0 || invert_default(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || invert_default(this.labelTextColor);
			for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
		}
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = lighten_default(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || lighten_default(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || lighten_default(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || adjust_default(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -40
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: -40
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -40
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -90,
			l: -40
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -30
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || darken_default(invert_default(this.git0), 25), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(e) {
		if (Object.keys(this).forEach((e) => {
			this[e] === "calculated" && (this[e] = void 0);
		}), typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, getThemeVariables3 = /* @__PURE__ */ __name((e) => {
	let t = new Theme3();
	return t.calculate(e), t;
}, "getThemeVariables"), Theme4 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.tertiaryColor = lighten_default("#cde498", 10), this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.primaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
	}
	updateColors() {
		this.actorBorder = darken_default(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || darken_default(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || darken_default(this.tertiaryColor, 40);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = darken_default(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || darken_default(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || adjust_default(this["cScale" + e], { h: 180 });
		this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(5 + e * 5)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(8 + e * 5)
		});
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || lighten_default(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, {
			h: 40,
			l: -40
		}), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -50
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -50
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -50
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
			startByteColor: this.primaryTextColor,
			endByteColor: this.primaryTextColor,
			labelColor: this.primaryTextColor,
			titleColor: this.primaryTextColor,
			blockStrokeColor: this.primaryTextColor,
			blockFillColor: this.mainBkg
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, getThemeVariables4 = /* @__PURE__ */ __name((e) => {
	let t = new Theme4();
	return t.calculate(e), t;
}, "getThemeVariables"), Theme5 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = lighten_default(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
	}
	updateColors() {
		this.secondBkg = lighten_default(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = lighten_default(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || invert_default(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || lighten_default(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || darken_default(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || adjust_default(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || adjust_default(this.mainBkg, { l: -(8 + e * 5) });
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = lighten_default(this.contrast, 30), this.sectionBkgColor2 = lighten_default(this.contrast, 30), this.taskBorderColor = darken_default(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = lighten_default(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = darken_default(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["pie" + e] = this["cScale" + e];
		this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = darken_default(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || adjust_default(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, themes_default = {
	base: { getThemeVariables },
	dark: { getThemeVariables: getThemeVariables2 },
	default: { getThemeVariables: getThemeVariables3 },
	forest: { getThemeVariables: getThemeVariables4 },
	neutral: { getThemeVariables: /* @__PURE__ */ __name((e) => {
		let t = new Theme5();
		return t.calculate(e), t;
	}, "getThemeVariables") }
}, config_schema_default = {
	flowchart: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		subGraphTitleMargin: {
			top: 0,
			bottom: 0
		},
		diagramPadding: 8,
		htmlLabels: !0,
		nodeSpacing: 50,
		rankSpacing: 50,
		curve: "basis",
		padding: 15,
		defaultRenderer: "dagre-wrapper",
		wrappingWidth: 200,
		inheritDir: !1
	},
	sequence: {
		useMaxWidth: !0,
		hideUnusedParticipants: !1,
		activationWidth: 10,
		diagramMarginX: 50,
		diagramMarginY: 10,
		actorMargin: 50,
		width: 150,
		height: 65,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		mirrorActors: !0,
		forceMenus: !1,
		bottomMarginAdj: 1,
		rightAngles: !1,
		showSequenceNumbers: !1,
		actorFontSize: 14,
		actorFontFamily: "\"Open Sans\", sans-serif",
		actorFontWeight: 400,
		noteFontSize: 14,
		noteFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		noteFontWeight: 400,
		noteAlign: "center",
		messageFontSize: 16,
		messageFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		messageFontWeight: 400,
		wrap: !1,
		wrapPadding: 10,
		labelBoxWidth: 50,
		labelBoxHeight: 20
	},
	gantt: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		barHeight: 20,
		barGap: 4,
		topPadding: 50,
		rightPadding: 75,
		leftPadding: 75,
		gridLineStartPadding: 35,
		fontSize: 11,
		sectionFontSize: 11,
		numberSectionStyles: 4,
		axisFormat: "%Y-%m-%d",
		topAxis: !1,
		displayMode: "",
		weekday: "sunday"
	},
	journey: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		leftMargin: 150,
		maxLabelWidth: 360,
		width: 150,
		height: 50,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		bottomMarginAdj: 1,
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
		taskMargin: 50,
		activationWidth: 10,
		textPlacement: "fo",
		actorColours: [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		sectionFills: [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		sectionColours: ["#fff"],
		titleColor: "",
		titleFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		titleFontSize: "4ex"
	},
	class: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		arrowMarkerAbsolute: !1,
		dividerMargin: 10,
		padding: 5,
		textHeight: 10,
		defaultRenderer: "dagre-wrapper",
		htmlLabels: !1,
		hideEmptyMembersBox: !1
	},
	state: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		dividerMargin: 10,
		sizeUnit: 5,
		padding: 8,
		textHeight: 10,
		titleShift: -15,
		noteMargin: 10,
		forkWidth: 70,
		forkHeight: 7,
		miniPadding: 2,
		fontSizeFactor: 5.02,
		fontSize: 24,
		labelHeight: 16,
		edgeLengthFactor: "20",
		compositTitleSize: 35,
		radius: 5,
		defaultRenderer: "dagre-wrapper"
	},
	er: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		diagramPadding: 20,
		layoutDirection: "TB",
		minEntityWidth: 100,
		minEntityHeight: 75,
		entityPadding: 15,
		nodeSpacing: 140,
		rankSpacing: 80,
		stroke: "gray",
		fill: "honeydew",
		fontSize: 12
	},
	pie: {
		useMaxWidth: !0,
		textPosition: .75
	},
	quadrantChart: {
		useMaxWidth: !0,
		chartWidth: 500,
		chartHeight: 500,
		titleFontSize: 20,
		titlePadding: 10,
		quadrantPadding: 5,
		xAxisLabelPadding: 5,
		yAxisLabelPadding: 5,
		xAxisLabelFontSize: 16,
		yAxisLabelFontSize: 16,
		quadrantLabelFontSize: 16,
		quadrantTextTopPadding: 5,
		pointTextPadding: 5,
		pointLabelFontSize: 12,
		pointRadius: 5,
		xAxisPosition: "top",
		yAxisPosition: "left",
		quadrantInternalBorderStrokeWidth: 1,
		quadrantExternalBorderStrokeWidth: 2
	},
	xyChart: {
		useMaxWidth: !0,
		width: 700,
		height: 500,
		titleFontSize: 20,
		titlePadding: 10,
		showDataLabel: !1,
		showTitle: !0,
		xAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2
		},
		yAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2
		},
		chartOrientation: "vertical",
		plotReservedSpacePercent: 50
	},
	requirement: {
		useMaxWidth: !0,
		rect_fill: "#f9f9f9",
		text_color: "#333",
		rect_border_size: "0.5px",
		rect_border_color: "#bbb",
		rect_min_width: 200,
		rect_min_height: 200,
		fontSize: 14,
		rect_padding: 10,
		line_height: 20
	},
	mindmap: {
		useMaxWidth: !0,
		padding: 10,
		maxNodeWidth: 200,
		layoutAlgorithm: "cose-bilkent"
	},
	kanban: {
		useMaxWidth: !0,
		padding: 8,
		sectionWidth: 200,
		ticketBaseUrl: ""
	},
	timeline: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		leftMargin: 150,
		width: 150,
		height: 50,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		bottomMarginAdj: 1,
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
		taskMargin: 50,
		activationWidth: 10,
		textPlacement: "fo",
		actorColours: [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		sectionFills: [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		sectionColours: ["#fff"],
		disableMulticolor: !1
	},
	gitGraph: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		diagramPadding: 8,
		nodeLabel: {
			width: 75,
			height: 100,
			x: -25,
			y: 0
		},
		mainBranchName: "main",
		mainBranchOrder: 0,
		showCommitLabel: !0,
		showBranches: !0,
		rotateCommitLabel: !0,
		parallelCommits: !1,
		arrowMarkerAbsolute: !1
	},
	c4: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		c4ShapeMargin: 50,
		c4ShapePadding: 20,
		width: 216,
		height: 60,
		boxMargin: 10,
		c4ShapeInRow: 4,
		nextLinePaddingX: 0,
		c4BoundaryInRow: 2,
		personFontSize: 14,
		personFontFamily: "\"Open Sans\", sans-serif",
		personFontWeight: "normal",
		external_personFontSize: 14,
		external_personFontFamily: "\"Open Sans\", sans-serif",
		external_personFontWeight: "normal",
		systemFontSize: 14,
		systemFontFamily: "\"Open Sans\", sans-serif",
		systemFontWeight: "normal",
		external_systemFontSize: 14,
		external_systemFontFamily: "\"Open Sans\", sans-serif",
		external_systemFontWeight: "normal",
		system_dbFontSize: 14,
		system_dbFontFamily: "\"Open Sans\", sans-serif",
		system_dbFontWeight: "normal",
		external_system_dbFontSize: 14,
		external_system_dbFontFamily: "\"Open Sans\", sans-serif",
		external_system_dbFontWeight: "normal",
		system_queueFontSize: 14,
		system_queueFontFamily: "\"Open Sans\", sans-serif",
		system_queueFontWeight: "normal",
		external_system_queueFontSize: 14,
		external_system_queueFontFamily: "\"Open Sans\", sans-serif",
		external_system_queueFontWeight: "normal",
		boundaryFontSize: 14,
		boundaryFontFamily: "\"Open Sans\", sans-serif",
		boundaryFontWeight: "normal",
		messageFontSize: 12,
		messageFontFamily: "\"Open Sans\", sans-serif",
		messageFontWeight: "normal",
		containerFontSize: 14,
		containerFontFamily: "\"Open Sans\", sans-serif",
		containerFontWeight: "normal",
		external_containerFontSize: 14,
		external_containerFontFamily: "\"Open Sans\", sans-serif",
		external_containerFontWeight: "normal",
		container_dbFontSize: 14,
		container_dbFontFamily: "\"Open Sans\", sans-serif",
		container_dbFontWeight: "normal",
		external_container_dbFontSize: 14,
		external_container_dbFontFamily: "\"Open Sans\", sans-serif",
		external_container_dbFontWeight: "normal",
		container_queueFontSize: 14,
		container_queueFontFamily: "\"Open Sans\", sans-serif",
		container_queueFontWeight: "normal",
		external_container_queueFontSize: 14,
		external_container_queueFontFamily: "\"Open Sans\", sans-serif",
		external_container_queueFontWeight: "normal",
		componentFontSize: 14,
		componentFontFamily: "\"Open Sans\", sans-serif",
		componentFontWeight: "normal",
		external_componentFontSize: 14,
		external_componentFontFamily: "\"Open Sans\", sans-serif",
		external_componentFontWeight: "normal",
		component_dbFontSize: 14,
		component_dbFontFamily: "\"Open Sans\", sans-serif",
		component_dbFontWeight: "normal",
		external_component_dbFontSize: 14,
		external_component_dbFontFamily: "\"Open Sans\", sans-serif",
		external_component_dbFontWeight: "normal",
		component_queueFontSize: 14,
		component_queueFontFamily: "\"Open Sans\", sans-serif",
		component_queueFontWeight: "normal",
		external_component_queueFontSize: 14,
		external_component_queueFontFamily: "\"Open Sans\", sans-serif",
		external_component_queueFontWeight: "normal",
		wrap: !0,
		wrapPadding: 10,
		person_bg_color: "#08427B",
		person_border_color: "#073B6F",
		external_person_bg_color: "#686868",
		external_person_border_color: "#8A8A8A",
		system_bg_color: "#1168BD",
		system_border_color: "#3C7FC0",
		system_db_bg_color: "#1168BD",
		system_db_border_color: "#3C7FC0",
		system_queue_bg_color: "#1168BD",
		system_queue_border_color: "#3C7FC0",
		external_system_bg_color: "#999999",
		external_system_border_color: "#8A8A8A",
		external_system_db_bg_color: "#999999",
		external_system_db_border_color: "#8A8A8A",
		external_system_queue_bg_color: "#999999",
		external_system_queue_border_color: "#8A8A8A",
		container_bg_color: "#438DD5",
		container_border_color: "#3C7FC0",
		container_db_bg_color: "#438DD5",
		container_db_border_color: "#3C7FC0",
		container_queue_bg_color: "#438DD5",
		container_queue_border_color: "#3C7FC0",
		external_container_bg_color: "#B3B3B3",
		external_container_border_color: "#A6A6A6",
		external_container_db_bg_color: "#B3B3B3",
		external_container_db_border_color: "#A6A6A6",
		external_container_queue_bg_color: "#B3B3B3",
		external_container_queue_border_color: "#A6A6A6",
		component_bg_color: "#85BBF0",
		component_border_color: "#78A8D8",
		component_db_bg_color: "#85BBF0",
		component_db_border_color: "#78A8D8",
		component_queue_bg_color: "#85BBF0",
		component_queue_border_color: "#78A8D8",
		external_component_bg_color: "#CCCCCC",
		external_component_border_color: "#BFBFBF",
		external_component_db_bg_color: "#CCCCCC",
		external_component_db_border_color: "#BFBFBF",
		external_component_queue_bg_color: "#CCCCCC",
		external_component_queue_border_color: "#BFBFBF"
	},
	sankey: {
		useMaxWidth: !0,
		width: 600,
		height: 400,
		linkColor: "gradient",
		nodeAlignment: "justify",
		showValues: !0,
		prefix: "",
		suffix: ""
	},
	block: {
		useMaxWidth: !0,
		padding: 8
	},
	packet: {
		useMaxWidth: !0,
		rowHeight: 32,
		bitWidth: 32,
		bitsPerRow: 32,
		showBits: !0,
		paddingX: 5,
		paddingY: 5
	},
	architecture: {
		useMaxWidth: !0,
		padding: 40,
		iconSize: 80,
		fontSize: 16
	},
	radar: {
		useMaxWidth: !0,
		width: 600,
		height: 600,
		marginTop: 50,
		marginRight: 50,
		marginBottom: 50,
		marginLeft: 50,
		axisScaleFactor: 1,
		axisLabelFactor: 1.05,
		curveTension: .17
	},
	theme: "default",
	look: "classic",
	handDrawnSeed: 0,
	layout: "dagre",
	maxTextSize: 5e4,
	maxEdges: 500,
	darkMode: !1,
	fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif;",
	logLevel: 5,
	securityLevel: "strict",
	startOnLoad: !0,
	arrowMarkerAbsolute: !1,
	secure: [
		"secure",
		"securityLevel",
		"startOnLoad",
		"maxTextSize",
		"suppressErrorRendering",
		"maxEdges"
	],
	legacyMathML: !1,
	forceLegacyMathML: !1,
	deterministicIds: !1,
	fontSize: 16,
	markdownAutoWrap: !0,
	suppressErrorRendering: !1
}, config = {
	...config_schema_default,
	deterministicIDSeed: void 0,
	elk: {
		mergeEdges: !1,
		nodePlacementStrategy: "BRANDES_KOEPF",
		forceNodeModelOrder: !1,
		considerModelOrder: "NODES_AND_EDGES"
	},
	themeCSS: void 0,
	themeVariables: themes_default.default.getThemeVariables(),
	sequence: {
		...config_schema_default.sequence,
		messageFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont"),
		noteFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.noteFontFamily,
				fontSize: this.noteFontSize,
				fontWeight: this.noteFontWeight
			};
		}, "noteFont"),
		actorFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.actorFontFamily,
				fontSize: this.actorFontSize,
				fontWeight: this.actorFontWeight
			};
		}, "actorFont")
	},
	class: { hideEmptyMembersBox: !1 },
	gantt: {
		...config_schema_default.gantt,
		tickInterval: void 0,
		useWidth: void 0
	},
	c4: {
		...config_schema_default.c4,
		useWidth: void 0,
		personFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.personFontFamily,
				fontSize: this.personFontSize,
				fontWeight: this.personFontWeight
			};
		}, "personFont"),
		flowchart: {
			...config_schema_default.flowchart,
			inheritDir: !1
		},
		external_personFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_personFontFamily,
				fontSize: this.external_personFontSize,
				fontWeight: this.external_personFontWeight
			};
		}, "external_personFont"),
		systemFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.systemFontFamily,
				fontSize: this.systemFontSize,
				fontWeight: this.systemFontWeight
			};
		}, "systemFont"),
		external_systemFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_systemFontFamily,
				fontSize: this.external_systemFontSize,
				fontWeight: this.external_systemFontWeight
			};
		}, "external_systemFont"),
		system_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.system_dbFontFamily,
				fontSize: this.system_dbFontSize,
				fontWeight: this.system_dbFontWeight
			};
		}, "system_dbFont"),
		external_system_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_system_dbFontFamily,
				fontSize: this.external_system_dbFontSize,
				fontWeight: this.external_system_dbFontWeight
			};
		}, "external_system_dbFont"),
		system_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.system_queueFontFamily,
				fontSize: this.system_queueFontSize,
				fontWeight: this.system_queueFontWeight
			};
		}, "system_queueFont"),
		external_system_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_system_queueFontFamily,
				fontSize: this.external_system_queueFontSize,
				fontWeight: this.external_system_queueFontWeight
			};
		}, "external_system_queueFont"),
		containerFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.containerFontFamily,
				fontSize: this.containerFontSize,
				fontWeight: this.containerFontWeight
			};
		}, "containerFont"),
		external_containerFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_containerFontFamily,
				fontSize: this.external_containerFontSize,
				fontWeight: this.external_containerFontWeight
			};
		}, "external_containerFont"),
		container_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.container_dbFontFamily,
				fontSize: this.container_dbFontSize,
				fontWeight: this.container_dbFontWeight
			};
		}, "container_dbFont"),
		external_container_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_container_dbFontFamily,
				fontSize: this.external_container_dbFontSize,
				fontWeight: this.external_container_dbFontWeight
			};
		}, "external_container_dbFont"),
		container_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.container_queueFontFamily,
				fontSize: this.container_queueFontSize,
				fontWeight: this.container_queueFontWeight
			};
		}, "container_queueFont"),
		external_container_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_container_queueFontFamily,
				fontSize: this.external_container_queueFontSize,
				fontWeight: this.external_container_queueFontWeight
			};
		}, "external_container_queueFont"),
		componentFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.componentFontFamily,
				fontSize: this.componentFontSize,
				fontWeight: this.componentFontWeight
			};
		}, "componentFont"),
		external_componentFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_componentFontFamily,
				fontSize: this.external_componentFontSize,
				fontWeight: this.external_componentFontWeight
			};
		}, "external_componentFont"),
		component_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.component_dbFontFamily,
				fontSize: this.component_dbFontSize,
				fontWeight: this.component_dbFontWeight
			};
		}, "component_dbFont"),
		external_component_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_component_dbFontFamily,
				fontSize: this.external_component_dbFontSize,
				fontWeight: this.external_component_dbFontWeight
			};
		}, "external_component_dbFont"),
		component_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.component_queueFontFamily,
				fontSize: this.component_queueFontSize,
				fontWeight: this.component_queueFontWeight
			};
		}, "component_queueFont"),
		external_component_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_component_queueFontFamily,
				fontSize: this.external_component_queueFontSize,
				fontWeight: this.external_component_queueFontWeight
			};
		}, "external_component_queueFont"),
		boundaryFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.boundaryFontFamily,
				fontSize: this.boundaryFontSize,
				fontWeight: this.boundaryFontWeight
			};
		}, "boundaryFont"),
		messageFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont")
	},
	pie: {
		...config_schema_default.pie,
		useWidth: 984
	},
	xyChart: {
		...config_schema_default.xyChart,
		useWidth: void 0
	},
	requirement: {
		...config_schema_default.requirement,
		useWidth: void 0
	},
	packet: { ...config_schema_default.packet },
	radar: { ...config_schema_default.radar },
	treemap: {
		useMaxWidth: !0,
		padding: 10,
		diagramPadding: 8,
		showValues: !0,
		nodeWidth: 100,
		nodeHeight: 40,
		borderWidth: 1,
		valueFontSize: 12,
		labelFontSize: 14,
		valueFormat: ","
	}
}, keyify = /* @__PURE__ */ __name((e, t = "") => Object.keys(e).reduce((n, r) => Array.isArray(e[r]) ? n : typeof e[r] == "object" && e[r] !== null ? [
	...n,
	t + r,
	...keyify(e[r], "")
] : [...n, t + r], []), "keyify"), configKeys = new Set(keyify(config, "")), defaultConfig_default = config, sanitizeDirective = /* @__PURE__ */ __name((e) => {
	if (log.debug("sanitizeDirective called with", e), !(typeof e != "object" || !e)) {
		if (Array.isArray(e)) {
			e.forEach((e) => sanitizeDirective(e));
			return;
		}
		for (let n of Object.keys(e)) {
			if (log.debug("Checking key", n), n.startsWith("__") || n.includes("proto") || n.includes("constr") || !configKeys.has(n) || e[n] == null) {
				log.debug("sanitize deleting key: ", n), delete e[n];
				continue;
			}
			if (typeof e[n] == "object") {
				log.debug("sanitizing object", n), sanitizeDirective(e[n]);
				continue;
			}
			for (let r of [
				"themeCSS",
				"fontFamily",
				"altFontFamily"
			]) n.includes(r) && (log.debug("sanitizing css option", n), e[n] = sanitizeCss(e[n]));
		}
		if (e.themeVariables) for (let t of Object.keys(e.themeVariables)) {
			let n = e.themeVariables[t];
			n?.match && !n.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
		}
		log.debug("After sanitization", e);
	}
}, "sanitizeDirective"), sanitizeCss = /* @__PURE__ */ __name((e) => {
	let t = 0, n = 0;
	for (let r of e) {
		if (t < n) return "{ /* ERROR: Unbalanced CSS */ }";
		r === "{" ? t++ : r === "}" && n++;
	}
	return t === n ? e : "{ /* ERROR: Unbalanced CSS */ }";
}, "sanitizeCss"), defaultConfig = Object.freeze(defaultConfig_default), siteConfig = assignWithDepth_default({}, defaultConfig), configFromInitialize, directives = [], currentConfig = assignWithDepth_default({}, defaultConfig), updateCurrentConfig = /* @__PURE__ */ __name((e, t) => {
	let n = assignWithDepth_default({}, e), r = {};
	for (let e of t) sanitize(e), r = assignWithDepth_default(r, e);
	if (n = assignWithDepth_default(n, r), r.theme && r.theme in themes_default) {
		let e = assignWithDepth_default(assignWithDepth_default({}, configFromInitialize).themeVariables || {}, r.themeVariables);
		n.theme && n.theme in themes_default && (n.themeVariables = themes_default[n.theme].getThemeVariables(e));
	}
	return currentConfig = n, checkConfig(currentConfig), currentConfig;
}, "updateCurrentConfig"), setSiteConfig = /* @__PURE__ */ __name((e) => (siteConfig = assignWithDepth_default({}, defaultConfig), siteConfig = assignWithDepth_default(siteConfig, e), e.theme && themes_default[e.theme] && (siteConfig.themeVariables = themes_default[e.theme].getThemeVariables(e.themeVariables)), updateCurrentConfig(siteConfig, directives), siteConfig), "setSiteConfig"), saveConfigFromInitialize = /* @__PURE__ */ __name((e) => {
	configFromInitialize = assignWithDepth_default({}, e);
}, "saveConfigFromInitialize"), updateSiteConfig = /* @__PURE__ */ __name((e) => (siteConfig = assignWithDepth_default(siteConfig, e), updateCurrentConfig(siteConfig, directives), siteConfig), "updateSiteConfig"), getSiteConfig = /* @__PURE__ */ __name(() => assignWithDepth_default({}, siteConfig), "getSiteConfig"), setConfig = /* @__PURE__ */ __name((e) => (checkConfig(e), assignWithDepth_default(currentConfig, e), getConfig()), "setConfig"), getConfig = /* @__PURE__ */ __name(() => assignWithDepth_default({}, currentConfig), "getConfig"), sanitize = /* @__PURE__ */ __name((e) => {
	e && (["secure", ...siteConfig.secure ?? []].forEach((n) => {
		Object.hasOwn(e, n) && (log.debug(`Denied attempt to modify a secure key ${n}`, e[n]), delete e[n]);
	}), Object.keys(e).forEach((t) => {
		t.startsWith("__") && delete e[t];
	}), Object.keys(e).forEach((t) => {
		typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && sanitize(e[t]);
	}));
}, "sanitize"), addDirective = /* @__PURE__ */ __name((e) => {
	sanitizeDirective(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
		...e.themeVariables,
		fontFamily: e.fontFamily
	}), directives.push(e), updateCurrentConfig(siteConfig, directives);
}, "addDirective"), reset = /* @__PURE__ */ __name((e = siteConfig) => {
	directives = [], updateCurrentConfig(e, directives);
}, "reset"), ConfigWarning = { LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead." }, issuedWarnings = {}, issueWarning = /* @__PURE__ */ __name((e) => {
	issuedWarnings[e] || (log.warn(ConfigWarning[e]), issuedWarnings[e] = !0);
}, "issueWarning"), checkConfig = /* @__PURE__ */ __name((e) => {
	e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && issueWarning("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), getUserDefinedConfig = /* @__PURE__ */ __name(() => {
	let e = {};
	configFromInitialize && (e = assignWithDepth_default(e, configFromInitialize));
	for (let t of directives) e = assignWithDepth_default(e, t);
	return e;
}, "getUserDefinedConfig"), lineBreakRegex = /<br\s*\/?>/gi, getRows = /* @__PURE__ */ __name((e) => e ? breakToPlaceholder(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), setupDompurifyHooksIfNotSetup = /* @__PURE__ */ (() => {
	let e = !1;
	return () => {
		e ||= (setupDompurifyHooks(), !0);
	};
})();
function setupDompurifyHooks() {
	let e = "data-temp-href-target";
	purify.addHook("beforeSanitizeAttributes", (t) => {
		t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
	}), purify.addHook("afterSanitizeAttributes", (t) => {
		t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
	});
}
__name(setupDompurifyHooks, "setupDompurifyHooks");
var removeScript = /* @__PURE__ */ __name((e) => (setupDompurifyHooksIfNotSetup(), purify.sanitize(e)), "removeScript"), sanitizeMore = /* @__PURE__ */ __name((e, t) => {
	if (t.flowchart?.htmlLabels !== !1) {
		let n = t.securityLevel;
		n === "antiscript" || n === "strict" ? e = removeScript(e) : n !== "loose" && (e = breakToPlaceholder(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = placeholderToBreak(e));
	}
	return e;
}, "sanitizeMore"), sanitizeText = /* @__PURE__ */ __name((e, t) => e && (e = t.dompurifyConfig ? purify.sanitize(sanitizeMore(e, t), t.dompurifyConfig).toString() : purify.sanitize(sanitizeMore(e, t), { FORBID_TAGS: ["style"] }).toString(), e), "sanitizeText"), sanitizeTextOrArray = /* @__PURE__ */ __name((e, t) => typeof e == "string" ? sanitizeText(e, t) : e.flat().map((e) => sanitizeText(e, t)), "sanitizeTextOrArray"), hasBreaks = /* @__PURE__ */ __name((e) => lineBreakRegex.test(e), "hasBreaks"), splitBreaks = /* @__PURE__ */ __name((e) => e.split(lineBreakRegex), "splitBreaks"), placeholderToBreak = /* @__PURE__ */ __name((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), breakToPlaceholder = /* @__PURE__ */ __name((e) => e.replace(lineBreakRegex, "#br#"), "breakToPlaceholder"), getUrl = /* @__PURE__ */ __name((e) => {
	let t = "";
	return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), evaluate = /* @__PURE__ */ __name((e) => !(e === !1 || [
	"false",
	"null",
	"0"
].includes(String(e).trim().toLowerCase())), "evaluate"), getMax = /* @__PURE__ */ __name(function(...e) {
	let t = e.filter((e) => !isNaN(e));
	return Math.max(...t);
}, "getMax"), getMin = /* @__PURE__ */ __name(function(...e) {
	let t = e.filter((e) => !isNaN(e));
	return Math.min(...t);
}, "getMin"), parseGenericTypes = /* @__PURE__ */ __name(function(e) {
	let t = e.split(/(,)/), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "," && e > 0 && e + 1 < t.length) {
			let i = t[e - 1], a = t[e + 1];
			shouldCombineSets(i, a) && (r = i + "," + a, e++, n.pop());
		}
		n.push(processSet(r));
	}
	return n.join("");
}, "parseGenericTypes"), countOccurrence = /* @__PURE__ */ __name((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), shouldCombineSets = /* @__PURE__ */ __name((e, t) => {
	let n = countOccurrence(e, "~"), r = countOccurrence(t, "~");
	return n === 1 && r === 1;
}, "shouldCombineSets"), processSet = /* @__PURE__ */ __name((e) => {
	let t = countOccurrence(e, "~"), n = !1;
	if (t <= 1) return e;
	t % 2 != 0 && e.startsWith("~") && (e = e.substring(1), n = !0);
	let r = [...e], i = r.indexOf("~"), a = r.lastIndexOf("~");
	for (; i !== -1 && a !== -1 && i !== a;) r[i] = "<", r[a] = ">", i = r.indexOf("~"), a = r.lastIndexOf("~");
	return n && r.unshift("~"), r.join("");
}, "processSet"), isMathMLSupported = /* @__PURE__ */ __name(() => window.MathMLElement !== void 0, "isMathMLSupported"), katexRegex = /\$\$(.*)\$\$/g, hasKatex = /* @__PURE__ */ __name((e) => (e.match(katexRegex)?.length ?? 0) > 0, "hasKatex"), calculateMathMLDimensions = /* @__PURE__ */ __name(async (e, t) => {
	let n = document.createElement("div");
	n.innerHTML = await renderKatexSanitized(e, t), n.id = "katex-temp", n.style.visibility = "hidden", n.style.position = "absolute", n.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", n);
	let r = {
		width: n.clientWidth,
		height: n.clientHeight
	};
	return n.remove(), r;
}, "calculateMathMLDimensions"), renderKatexUnsanitized = /* @__PURE__ */ __name(async (e, t) => {
	if (!hasKatex(e)) return e;
	if (!(isMathMLSupported() || t.legacyMathML || t.forceLegacyMathML)) return e.replace(katexRegex, "MathML is unsupported in this environment.");
	{
		let { default: n } = await import("./katex-Dzuf2Bdk.js"), r = t.forceLegacyMathML || !isMathMLSupported() && t.legacyMathML ? "htmlAndMathml" : "mathml";
		return e.split(lineBreakRegex).map((e) => hasKatex(e) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${e}</div>` : `<div>${e}</div>`).join("").replace(katexRegex, (e, t) => n.renderToString(t, {
			throwOnError: !0,
			displayMode: !0,
			output: r
		}).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
	}
	return e.replace(katexRegex, "Katex is not supported in @mermaid-js/tiny. Please use the full mermaid library.");
}, "renderKatexUnsanitized"), renderKatexSanitized = /* @__PURE__ */ __name(async (e, t) => sanitizeText(await renderKatexUnsanitized(e, t), t), "renderKatexSanitized"), common_default = {
	getRows,
	sanitizeText,
	sanitizeTextOrArray,
	hasBreaks,
	splitBreaks,
	lineBreakRegex,
	removeScript,
	getUrl,
	evaluate,
	getMax,
	getMin
}, d3Attrs = /* @__PURE__ */ __name(function(e, t) {
	for (let n of t) e.attr(n[0], n[1]);
}, "d3Attrs"), calculateSvgSizeAttrs = /* @__PURE__ */ __name(function(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	return n ? (r.set("width", "100%"), r.set("style", `max-width: ${t}px;`)) : (r.set("height", e), r.set("width", t)), r;
}, "calculateSvgSizeAttrs"), configureSvgSize = /* @__PURE__ */ __name(function(e, t, n, r) {
	d3Attrs(e, calculateSvgSizeAttrs(t, n, r));
}, "configureSvgSize"), setupGraphViewbox = /* @__PURE__ */ __name(function(e, n, r, i) {
	let a = n.node().getBBox(), o = a.width, s = a.height;
	log.info(`SVG bounds: ${o}x${s}`, a);
	let c = 0, l = 0;
	log.info(`Graph bounds: ${c}x${l}`, e), c = o + r * 2, l = s + r * 2, log.info(`Calculated bounds: ${c}x${l}`), configureSvgSize(n, l, c, i);
	let u = `${a.x - r} ${a.y - r} ${a.width + 2 * r} ${a.height + 2 * r}`;
	n.attr("viewBox", u);
}, "setupGraphViewbox"), themes = {}, getStyles = /* @__PURE__ */ __name((e, n, r) => {
	let i = "";
	return e in themes && themes[e] ? i = themes[e](r) : log.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${n}
`;
}, "getStyles"), addStylesForDiagram = /* @__PURE__ */ __name((e, t) => {
	t !== void 0 && (themes[e] = t);
}, "addStylesForDiagram"), styles_default = getStyles, commonDb_exports = {};
__export(commonDb_exports, {
	clear: () => clear,
	getAccDescription: () => getAccDescription,
	getAccTitle: () => getAccTitle,
	getDiagramTitle: () => getDiagramTitle,
	setAccDescription: () => setAccDescription,
	setAccTitle: () => setAccTitle,
	setDiagramTitle: () => setDiagramTitle
});
var accTitle = "", diagramTitle = "", accDescription = "", sanitizeText2 = /* @__PURE__ */ __name((e) => sanitizeText(e, getConfig()), "sanitizeText"), clear = /* @__PURE__ */ __name(() => {
	accTitle = "", accDescription = "", diagramTitle = "";
}, "clear"), setAccTitle = /* @__PURE__ */ __name((e) => {
	accTitle = sanitizeText2(e).replace(/^\s+/g, "");
}, "setAccTitle"), getAccTitle = /* @__PURE__ */ __name(() => accTitle, "getAccTitle"), setAccDescription = /* @__PURE__ */ __name((e) => {
	accDescription = sanitizeText2(e).replace(/\n\s+/g, "\n");
}, "setAccDescription"), getAccDescription = /* @__PURE__ */ __name(() => accDescription, "getAccDescription"), setDiagramTitle = /* @__PURE__ */ __name((e) => {
	diagramTitle = sanitizeText2(e);
}, "setDiagramTitle"), getDiagramTitle = /* @__PURE__ */ __name(() => diagramTitle, "getDiagramTitle"), log2 = log, setLogLevel2 = setLogLevel, getConfig2 = getConfig, setConfig2 = setConfig, defaultConfig2 = defaultConfig, sanitizeText3 = /* @__PURE__ */ __name((e) => sanitizeText(e, getConfig2()), "sanitizeText"), setupGraphViewbox2 = setupGraphViewbox, getCommonDb = /* @__PURE__ */ __name(() => commonDb_exports, "getCommonDb"), diagrams = {}, registerDiagram = /* @__PURE__ */ __name((e, t, n) => {
	diagrams[e] && log2.warn(`Diagram with id ${e} already registered. Overwriting.`), diagrams[e] = t, n && addDetector(e, n), addStylesForDiagram(e, t.styles), t.injectUtils?.(log2, setLogLevel2, getConfig2, sanitizeText3, setupGraphViewbox2, getCommonDb(), () => {});
}, "registerDiagram"), getDiagram = /* @__PURE__ */ __name((e) => {
	if (e in diagrams) return diagrams[e];
	throw new DiagramNotFoundError(e);
}, "getDiagram"), DiagramNotFoundError = class extends Error {
	static #e = __name(this, "DiagramNotFoundError");
	constructor(e) {
		super(`Diagram ${e} not found.`);
	}
};
export { is_dark_default as $, parseGenericTypes as A, setAccTitle as B, getDiagramTitle as C, getUserDefinedConfig as D, getUrl as E, sanitizeDirective as F, setupGraphViewbox as G, setConfig2 as H, sanitizeText as I, themes_default as J, setupGraphViewbox2 as K, sanitizeText3 as L, registerLazyLoadedDiagrams as M, renderKatexSanitized as N, hasKatex as O, reset as P, lighten_default as Q, saveConfigFromInitialize as R, getDiagramLoader as S, getThemeVariables3 as T, setDiagramTitle as U, setConfig as V, setSiteConfig as W, purify as X, updateSiteConfig as Y, darken_default as Z, getAccDescription as _, clear as a, getConfig2 as b, configureSvgSize as c, defaultConfig_default as d, rgba_default as et, detectType as f, frontMatterRegex as g, evaluate as h, calculateMathMLDimensions as i, registerDiagram as j, lineBreakRegex as k, defaultConfig as l, directiveRegex as m, addDirective as n, utils_default as nt, commonDb_exports as o, detectors as p, styles_default as q, assignWithDepth_default as r, common_default as s, UnknownDiagramError as t, color_default as tt, defaultConfig2 as u, getAccTitle as v, getSiteConfig as w, getDiagram as x, getConfig as y, setAccDescription as z };
