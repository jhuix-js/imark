import { n as init_dist, t as global } from "./dist-CoGdlYHY.js";
init_dist();
function _arrayLikeToArray(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function _arrayWithHoles(e) {
	if (Array.isArray(e)) return e;
}
function _arrayWithoutHoles(e) {
	if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _toPropertyKey(r.key), r);
	}
}
function _createClass(e, t, n) {
	return t && _defineProperties(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _createForOfIteratorHelper(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t) {
			n && (e = n);
			var r = 0, a = function() {};
			return {
				s: a,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: a
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var o, s = !0, c = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return s = e.done, e;
		},
		e: function(e) {
			c = !0, o = e;
		},
		f: function() {
			try {
				s || n.return == null || n.return();
			} finally {
				if (c) throw o;
			}
		}
	};
}
function _defineProperty$1(e, t, n) {
	return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _iterableToArray(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _iterableToArrayLimit(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, a, o, s, c = [], l = !0, u = !1;
		try {
			if (o = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				l = !1;
			} else for (; !(l = (r = o.call(n)).done) && (c.push(r.value), c.length !== t); l = !0);
		} catch (e) {
			u = !0, a = e;
		} finally {
			try {
				if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
			} finally {
				if (u) throw a;
			}
		}
		return c;
	}
}
function _nonIterableRest() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(e, t) {
	return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function _toConsumableArray(e) {
	return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _toPrimitive(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return String(e);
}
function _toPropertyKey(e) {
	var t = _toPrimitive(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _typeof(e) {
	"@babel/helpers - typeof";
	return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _typeof(e);
}
function _unsupportedIterableToArray(e, t) {
	if (e) {
		if (typeof e == "string") return _arrayLikeToArray(e, t);
		var r = {}.toString.call(e).slice(8, -1);
		return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
	}
}
var _window = typeof window > "u" ? null : window, navigator = _window ? _window.navigator : null;
_window && _window.document;
var typeofstr = _typeof(""), typeofobj = _typeof({}), typeoffn = _typeof(function() {}), typeofhtmlele = typeof HTMLElement > "u" ? "undefined" : _typeof(HTMLElement), instanceStr = function(e) {
	return e && e.instanceString && fn$6(e.instanceString) ? e.instanceString() : null;
}, string = function(e) {
	return e != null && _typeof(e) == typeofstr;
}, fn$6 = function(e) {
	return e != null && _typeof(e) === typeoffn;
}, array = function(e) {
	return !elementOrCollection(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, plainObject = function(e) {
	return e != null && _typeof(e) === typeofobj && !array(e) && e.constructor === Object;
}, object = function(e) {
	return e != null && _typeof(e) === typeofobj;
}, number$1 = function(e) {
	return e != null && _typeof(e) === _typeof(1) && !isNaN(e);
}, integer = function(e) {
	return number$1(e) && Math.floor(e) === e;
}, htmlElement = function(e) {
	if (typeofhtmlele !== "undefined") return e != null && e instanceof HTMLElement;
}, elementOrCollection = function(e) {
	return element(e) || collection(e);
}, element = function(e) {
	return instanceStr(e) === "collection" && e._private.single;
}, collection = function(e) {
	return instanceStr(e) === "collection" && !e._private.single;
}, core = function(e) {
	return instanceStr(e) === "core";
}, stylesheet = function(e) {
	return instanceStr(e) === "stylesheet";
}, event = function(e) {
	return instanceStr(e) === "event";
}, emptyString = function(e) {
	return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
}, domElement = function(e) {
	return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
}, boundingBox = function(e) {
	return plainObject(e) && number$1(e.x1) && number$1(e.x2) && number$1(e.y1) && number$1(e.y2);
}, promise = function(e) {
	return object(e) && fn$6(e.then);
}, ms = function() {
	return navigator && navigator.userAgent.match(/msie|trident|edge/i);
}, memoize = function(e, t) {
	t ||= function() {
		if (arguments.length === 1) return arguments[0];
		if (arguments.length === 0) return "undefined";
		for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
		return e.join("$");
	};
	var n = function() {
		var r = this, a = arguments, o, s = t.apply(r, a), c = n.cache;
		return (o = c[s]) || (o = c[s] = e.apply(r, a)), o;
	};
	return n.cache = {}, n;
}, camel2dash = memoize(function(e) {
	return e.replace(/([A-Z])/g, function(e) {
		return "-" + e.toLowerCase();
	});
}), dash2camel = memoize(function(e) {
	return e.replace(/(-\w)/g, function(e) {
		return e[1].toUpperCase();
	});
}), prependCamel = memoize(function(e, t) {
	return e + t[0].toUpperCase() + t.substring(1);
}, function(e, t) {
	return e + "$" + t;
}), capitalize = function(e) {
	return emptyString(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, endsWith = function(e, t) {
	return e.slice(-1 * t.length) === t;
}, number = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", rgba = "rgb[a]?\\((" + number + "[%]?)\\s*,\\s*(" + number + "[%]?)\\s*,\\s*(" + number + "[%]?)(?:\\s*,\\s*(" + number + "))?\\)", rgbaNoBackRefs = "rgb[a]?\\((?:" + number + "[%]?)\\s*,\\s*(?:" + number + "[%]?)\\s*,\\s*(?:" + number + "[%]?)(?:\\s*,\\s*(?:" + number + "))?\\)", hsla = "hsl[a]?\\((" + number + ")\\s*,\\s*(" + number + "[%])\\s*,\\s*(" + number + "[%])(?:\\s*,\\s*(" + number + "))?\\)", hslaNoBackRefs = "hsl[a]?\\((?:" + number + ")\\s*,\\s*(?:" + number + "[%])\\s*,\\s*(?:" + number + "[%])(?:\\s*,\\s*(?:" + number + "))?\\)", hex3 = "\\#[0-9a-fA-F]{3}", hex6 = "\\#[0-9a-fA-F]{6}", ascending = function(e, t) {
	return e < t ? -1 : e > t ? 1 : 0;
}, descending = function(e, t) {
	return -1 * ascending(e, t);
}, extend = Object.assign == null ? function(e) {
	for (var t = arguments, n = 1; n < t.length; n++) {
		var r = t[n];
		if (r != null) for (var a = Object.keys(r), o = 0; o < a.length; o++) {
			var s = a[o];
			e[s] = r[s];
		}
	}
	return e;
} : Object.assign.bind(Object), hex2tuple = function(e) {
	if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
		var t = e.length === 4, n, r, a, o = 16;
		return t ? (n = parseInt(e[1] + e[1], o), r = parseInt(e[2] + e[2], o), a = parseInt(e[3] + e[3], o)) : (n = parseInt(e[1] + e[2], o), r = parseInt(e[3] + e[4], o), a = parseInt(e[5] + e[6], o)), [
			n,
			r,
			a
		];
	}
}, hsl2tuple = function(e) {
	var t, n, r, a, o, s, c, l;
	function u(e, t, n) {
		return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
	}
	var d = (/* @__PURE__ */ RegExp("^" + hsla + "$")).exec(e);
	if (d) {
		if (n = parseInt(d[1]), n < 0 ? n = (360 - -1 * n % 360) % 360 : n > 360 && (n %= 360), n /= 360, r = parseFloat(d[2]), r < 0 || r > 100 || (r /= 100, a = parseFloat(d[3]), a < 0 || a > 100) || (a /= 100, o = d[4], o !== void 0 && (o = parseFloat(o), o < 0 || o > 1))) return;
		if (r === 0) s = c = l = Math.round(a * 255);
		else {
			var f = a < .5 ? a * (1 + r) : a + r - a * r, m = 2 * a - f;
			s = Math.round(255 * u(m, f, n + 1 / 3)), c = Math.round(255 * u(m, f, n)), l = Math.round(255 * u(m, f, n - 1 / 3));
		}
		t = [
			s,
			c,
			l,
			o
		];
	}
	return t;
}, rgb2tuple = function(e) {
	var t, n = (/* @__PURE__ */ RegExp("^" + rgba + "$")).exec(e);
	if (n) {
		t = [];
		for (var r = [], a = 1; a <= 3; a++) {
			var o = n[a];
			if (o[o.length - 1] === "%" && (r[a] = !0), o = parseFloat(o), r[a] && (o = o / 100 * 255), o < 0 || o > 255) return;
			t.push(Math.floor(o));
		}
		var s = r[1] || r[2] || r[3], c = r[1] && r[2] && r[3];
		if (s && !c) return;
		var l = n[4];
		if (l !== void 0) {
			if (l = parseFloat(l), l < 0 || l > 1) return;
			t.push(l);
		}
	}
	return t;
}, colorname2tuple = function(e) {
	return colors[e.toLowerCase()];
}, color2tuple = function(e) {
	return (array(e) ? e : null) || colorname2tuple(e) || hex2tuple(e) || rgb2tuple(e) || hsl2tuple(e);
}, colors = {
	transparent: [
		0,
		0,
		0,
		0
	],
	aliceblue: [
		240,
		248,
		255
	],
	antiquewhite: [
		250,
		235,
		215
	],
	aqua: [
		0,
		255,
		255
	],
	aquamarine: [
		127,
		255,
		212
	],
	azure: [
		240,
		255,
		255
	],
	beige: [
		245,
		245,
		220
	],
	bisque: [
		255,
		228,
		196
	],
	black: [
		0,
		0,
		0
	],
	blanchedalmond: [
		255,
		235,
		205
	],
	blue: [
		0,
		0,
		255
	],
	blueviolet: [
		138,
		43,
		226
	],
	brown: [
		165,
		42,
		42
	],
	burlywood: [
		222,
		184,
		135
	],
	cadetblue: [
		95,
		158,
		160
	],
	chartreuse: [
		127,
		255,
		0
	],
	chocolate: [
		210,
		105,
		30
	],
	coral: [
		255,
		127,
		80
	],
	cornflowerblue: [
		100,
		149,
		237
	],
	cornsilk: [
		255,
		248,
		220
	],
	crimson: [
		220,
		20,
		60
	],
	cyan: [
		0,
		255,
		255
	],
	darkblue: [
		0,
		0,
		139
	],
	darkcyan: [
		0,
		139,
		139
	],
	darkgoldenrod: [
		184,
		134,
		11
	],
	darkgray: [
		169,
		169,
		169
	],
	darkgreen: [
		0,
		100,
		0
	],
	darkgrey: [
		169,
		169,
		169
	],
	darkkhaki: [
		189,
		183,
		107
	],
	darkmagenta: [
		139,
		0,
		139
	],
	darkolivegreen: [
		85,
		107,
		47
	],
	darkorange: [
		255,
		140,
		0
	],
	darkorchid: [
		153,
		50,
		204
	],
	darkred: [
		139,
		0,
		0
	],
	darksalmon: [
		233,
		150,
		122
	],
	darkseagreen: [
		143,
		188,
		143
	],
	darkslateblue: [
		72,
		61,
		139
	],
	darkslategray: [
		47,
		79,
		79
	],
	darkslategrey: [
		47,
		79,
		79
	],
	darkturquoise: [
		0,
		206,
		209
	],
	darkviolet: [
		148,
		0,
		211
	],
	deeppink: [
		255,
		20,
		147
	],
	deepskyblue: [
		0,
		191,
		255
	],
	dimgray: [
		105,
		105,
		105
	],
	dimgrey: [
		105,
		105,
		105
	],
	dodgerblue: [
		30,
		144,
		255
	],
	firebrick: [
		178,
		34,
		34
	],
	floralwhite: [
		255,
		250,
		240
	],
	forestgreen: [
		34,
		139,
		34
	],
	fuchsia: [
		255,
		0,
		255
	],
	gainsboro: [
		220,
		220,
		220
	],
	ghostwhite: [
		248,
		248,
		255
	],
	gold: [
		255,
		215,
		0
	],
	goldenrod: [
		218,
		165,
		32
	],
	gray: [
		128,
		128,
		128
	],
	grey: [
		128,
		128,
		128
	],
	green: [
		0,
		128,
		0
	],
	greenyellow: [
		173,
		255,
		47
	],
	honeydew: [
		240,
		255,
		240
	],
	hotpink: [
		255,
		105,
		180
	],
	indianred: [
		205,
		92,
		92
	],
	indigo: [
		75,
		0,
		130
	],
	ivory: [
		255,
		255,
		240
	],
	khaki: [
		240,
		230,
		140
	],
	lavender: [
		230,
		230,
		250
	],
	lavenderblush: [
		255,
		240,
		245
	],
	lawngreen: [
		124,
		252,
		0
	],
	lemonchiffon: [
		255,
		250,
		205
	],
	lightblue: [
		173,
		216,
		230
	],
	lightcoral: [
		240,
		128,
		128
	],
	lightcyan: [
		224,
		255,
		255
	],
	lightgoldenrodyellow: [
		250,
		250,
		210
	],
	lightgray: [
		211,
		211,
		211
	],
	lightgreen: [
		144,
		238,
		144
	],
	lightgrey: [
		211,
		211,
		211
	],
	lightpink: [
		255,
		182,
		193
	],
	lightsalmon: [
		255,
		160,
		122
	],
	lightseagreen: [
		32,
		178,
		170
	],
	lightskyblue: [
		135,
		206,
		250
	],
	lightslategray: [
		119,
		136,
		153
	],
	lightslategrey: [
		119,
		136,
		153
	],
	lightsteelblue: [
		176,
		196,
		222
	],
	lightyellow: [
		255,
		255,
		224
	],
	lime: [
		0,
		255,
		0
	],
	limegreen: [
		50,
		205,
		50
	],
	linen: [
		250,
		240,
		230
	],
	magenta: [
		255,
		0,
		255
	],
	maroon: [
		128,
		0,
		0
	],
	mediumaquamarine: [
		102,
		205,
		170
	],
	mediumblue: [
		0,
		0,
		205
	],
	mediumorchid: [
		186,
		85,
		211
	],
	mediumpurple: [
		147,
		112,
		219
	],
	mediumseagreen: [
		60,
		179,
		113
	],
	mediumslateblue: [
		123,
		104,
		238
	],
	mediumspringgreen: [
		0,
		250,
		154
	],
	mediumturquoise: [
		72,
		209,
		204
	],
	mediumvioletred: [
		199,
		21,
		133
	],
	midnightblue: [
		25,
		25,
		112
	],
	mintcream: [
		245,
		255,
		250
	],
	mistyrose: [
		255,
		228,
		225
	],
	moccasin: [
		255,
		228,
		181
	],
	navajowhite: [
		255,
		222,
		173
	],
	navy: [
		0,
		0,
		128
	],
	oldlace: [
		253,
		245,
		230
	],
	olive: [
		128,
		128,
		0
	],
	olivedrab: [
		107,
		142,
		35
	],
	orange: [
		255,
		165,
		0
	],
	orangered: [
		255,
		69,
		0
	],
	orchid: [
		218,
		112,
		214
	],
	palegoldenrod: [
		238,
		232,
		170
	],
	palegreen: [
		152,
		251,
		152
	],
	paleturquoise: [
		175,
		238,
		238
	],
	palevioletred: [
		219,
		112,
		147
	],
	papayawhip: [
		255,
		239,
		213
	],
	peachpuff: [
		255,
		218,
		185
	],
	peru: [
		205,
		133,
		63
	],
	pink: [
		255,
		192,
		203
	],
	plum: [
		221,
		160,
		221
	],
	powderblue: [
		176,
		224,
		230
	],
	purple: [
		128,
		0,
		128
	],
	red: [
		255,
		0,
		0
	],
	rosybrown: [
		188,
		143,
		143
	],
	royalblue: [
		65,
		105,
		225
	],
	saddlebrown: [
		139,
		69,
		19
	],
	salmon: [
		250,
		128,
		114
	],
	sandybrown: [
		244,
		164,
		96
	],
	seagreen: [
		46,
		139,
		87
	],
	seashell: [
		255,
		245,
		238
	],
	sienna: [
		160,
		82,
		45
	],
	silver: [
		192,
		192,
		192
	],
	skyblue: [
		135,
		206,
		235
	],
	slateblue: [
		106,
		90,
		205
	],
	slategray: [
		112,
		128,
		144
	],
	slategrey: [
		112,
		128,
		144
	],
	snow: [
		255,
		250,
		250
	],
	springgreen: [
		0,
		255,
		127
	],
	steelblue: [
		70,
		130,
		180
	],
	tan: [
		210,
		180,
		140
	],
	teal: [
		0,
		128,
		128
	],
	thistle: [
		216,
		191,
		216
	],
	tomato: [
		255,
		99,
		71
	],
	turquoise: [
		64,
		224,
		208
	],
	violet: [
		238,
		130,
		238
	],
	wheat: [
		245,
		222,
		179
	],
	white: [
		255,
		255,
		255
	],
	whitesmoke: [
		245,
		245,
		245
	],
	yellow: [
		255,
		255,
		0
	],
	yellowgreen: [
		154,
		205,
		50
	]
}, setMap = function(e) {
	for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
		var o = n[a];
		if (plainObject(o)) throw Error("Tried to set map with object key");
		a < n.length - 1 ? (t[o] ?? (t[o] = {}), t = t[o]) : t[o] = e.value;
	}
}, getMap = function(e) {
	for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
		var o = n[a];
		if (plainObject(o)) throw Error("Tried to get map with object key");
		if (t = t[o], t == null) return t;
	}
	return t;
}, commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : global === void 0 ? typeof self < "u" ? self : {} : global;
function getDefaultExportFromCjs(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var isObject_1, hasRequiredIsObject;
function requireIsObject() {
	if (hasRequiredIsObject) return isObject_1;
	hasRequiredIsObject = 1;
	function e(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	return isObject_1 = e, isObject_1;
}
var _freeGlobal, hasRequired_freeGlobal;
function require_freeGlobal() {
	return hasRequired_freeGlobal ? _freeGlobal : (hasRequired_freeGlobal = 1, _freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, _freeGlobal);
}
var _root, hasRequired_root;
function require_root() {
	if (hasRequired_root) return _root;
	hasRequired_root = 1;
	var e = require_freeGlobal(), t = typeof self == "object" && self && self.Object === Object && self;
	return _root = e || t || Function("return this")(), _root;
}
var now_1, hasRequiredNow;
function requireNow() {
	if (hasRequiredNow) return now_1;
	hasRequiredNow = 1;
	var e = require_root();
	return now_1 = function() {
		return e.Date.now();
	}, now_1;
}
var _trimmedEndIndex, hasRequired_trimmedEndIndex;
function require_trimmedEndIndex() {
	if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
	hasRequired_trimmedEndIndex = 1;
	var e = /\s/;
	function t(t) {
		for (var n = t.length; n-- && e.test(t.charAt(n)););
		return n;
	}
	return _trimmedEndIndex = t, _trimmedEndIndex;
}
var _baseTrim, hasRequired_baseTrim;
function require_baseTrim() {
	if (hasRequired_baseTrim) return _baseTrim;
	hasRequired_baseTrim = 1;
	var e = require_trimmedEndIndex(), t = /^\s+/;
	function n(n) {
		return n && n.slice(0, e(n) + 1).replace(t, "");
	}
	return _baseTrim = n, _baseTrim;
}
var _Symbol, hasRequired_Symbol;
function require_Symbol() {
	return hasRequired_Symbol ? _Symbol : (hasRequired_Symbol = 1, _Symbol = require_root().Symbol, _Symbol);
}
var _getRawTag, hasRequired_getRawTag;
function require_getRawTag() {
	if (hasRequired_getRawTag) return _getRawTag;
	hasRequired_getRawTag = 1;
	var e = require_Symbol(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, a = e ? e.toStringTag : void 0;
	function o(e) {
		var t = n.call(e, a), o = e[a];
		try {
			e[a] = void 0;
			var s = !0;
		} catch {}
		var c = r.call(e);
		return s && (t ? e[a] = o : delete e[a]), c;
	}
	return _getRawTag = o, _getRawTag;
}
var _objectToString, hasRequired_objectToString;
function require_objectToString() {
	if (hasRequired_objectToString) return _objectToString;
	hasRequired_objectToString = 1;
	var e = Object.prototype.toString;
	function t(t) {
		return e.call(t);
	}
	return _objectToString = t, _objectToString;
}
var _baseGetTag, hasRequired_baseGetTag;
function require_baseGetTag() {
	if (hasRequired_baseGetTag) return _baseGetTag;
	hasRequired_baseGetTag = 1;
	var e = require_Symbol(), t = require_getRawTag(), n = require_objectToString(), r = "[object Null]", a = "[object Undefined]", o = e ? e.toStringTag : void 0;
	function s(e) {
		return e == null ? e === void 0 ? a : r : o && o in Object(e) ? t(e) : n(e);
	}
	return _baseGetTag = s, _baseGetTag;
}
var isObjectLike_1, hasRequiredIsObjectLike;
function requireIsObjectLike() {
	if (hasRequiredIsObjectLike) return isObjectLike_1;
	hasRequiredIsObjectLike = 1;
	function e(e) {
		return typeof e == "object" && !!e;
	}
	return isObjectLike_1 = e, isObjectLike_1;
}
var isSymbol_1, hasRequiredIsSymbol;
function requireIsSymbol() {
	if (hasRequiredIsSymbol) return isSymbol_1;
	hasRequiredIsSymbol = 1;
	var e = require_baseGetTag(), t = requireIsObjectLike(), n = "[object Symbol]";
	function r(r) {
		return typeof r == "symbol" || t(r) && e(r) == n;
	}
	return isSymbol_1 = r, isSymbol_1;
}
var toNumber_1, hasRequiredToNumber;
function requireToNumber() {
	if (hasRequiredToNumber) return toNumber_1;
	hasRequiredToNumber = 1;
	var e = require_baseTrim(), t = requireIsObject(), n = requireIsSymbol(), r = NaN, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, c = parseInt;
	function l(l) {
		if (typeof l == "number") return l;
		if (n(l)) return r;
		if (t(l)) {
			var u = typeof l.valueOf == "function" ? l.valueOf() : l;
			l = t(u) ? u + "" : u;
		}
		if (typeof l != "string") return l === 0 ? l : +l;
		l = e(l);
		var d = o.test(l);
		return d || s.test(l) ? c(l.slice(2), d ? 2 : 8) : a.test(l) ? r : +l;
	}
	return toNumber_1 = l, toNumber_1;
}
var debounce_1, hasRequiredDebounce;
function requireDebounce() {
	if (hasRequiredDebounce) return debounce_1;
	hasRequiredDebounce = 1;
	var e = requireIsObject(), t = requireNow(), n = requireToNumber(), r = "Expected a function", a = Math.max, o = Math.min;
	function s(s, c, l) {
		var u, d, f, m, h, g, _ = 0, v = !1, b = !1, S = !0;
		if (typeof s != "function") throw TypeError(r);
		c = n(c) || 0, e(l) && (v = !!l.leading, b = "maxWait" in l, f = b ? a(n(l.maxWait) || 0, c) : f, S = "trailing" in l ? !!l.trailing : S);
		function C(e) {
			var t = u, n = d;
			return u = d = void 0, _ = e, m = s.apply(n, t), m;
		}
		function w(e) {
			return _ = e, h = setTimeout(D, c), v ? C(e) : m;
		}
		function T(e) {
			var t = e - g, n = e - _, r = c - t;
			return b ? o(r, f - n) : r;
		}
		function E(e) {
			var t = e - g, n = e - _;
			return g === void 0 || t >= c || t < 0 || b && n >= f;
		}
		function D() {
			var e = t();
			if (E(e)) return O(e);
			h = setTimeout(D, T(e));
		}
		function O(e) {
			return h = void 0, S && u ? C(e) : (u = d = void 0, m);
		}
		function k() {
			h !== void 0 && clearTimeout(h), _ = 0, u = g = d = h = void 0;
		}
		function A() {
			return h === void 0 ? m : O(t());
		}
		function j() {
			var e = t(), n = E(e);
			if (u = arguments, d = this, g = e, n) {
				if (h === void 0) return w(g);
				if (b) return clearTimeout(h), h = setTimeout(D, c), C(g);
			}
			return h === void 0 && (h = setTimeout(D, c)), m;
		}
		return j.cancel = k, j.flush = A, j;
	}
	return debounce_1 = s, debounce_1;
}
var debounce = /* @__PURE__ */ getDefaultExportFromCjs(requireDebounce()), performance$1 = _window ? _window.performance : null, pnow = performance$1 && performance$1.now ? function() {
	return performance$1.now();
} : function() {
	return Date.now();
}, raf = function() {
	if (_window) {
		if (_window.requestAnimationFrame) return function(e) {
			_window.requestAnimationFrame(e);
		};
		if (_window.mozRequestAnimationFrame) return function(e) {
			_window.mozRequestAnimationFrame(e);
		};
		if (_window.webkitRequestAnimationFrame) return function(e) {
			_window.webkitRequestAnimationFrame(e);
		};
		if (_window.msRequestAnimationFrame) return function(e) {
			_window.msRequestAnimationFrame(e);
		};
	}
	return function(e) {
		e && setTimeout(function() {
			e(pnow());
		}, 1e3 / 60);
	};
}(), requestAnimationFrame = function(e) {
	return raf(e);
}, performanceNow = pnow, DEFAULT_HASH_SEED = 9261, K = 65599, DEFAULT_HASH_SEED_ALT = 5381, hashIterableInts = function(e) {
	for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_HASH_SEED, n; n = e.next(), !n.done;) t = t * K + n.value | 0;
	return t;
}, hashInt = function(e) {
	return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_HASH_SEED) * K + e | 0;
}, hashIntAlt = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_HASH_SEED_ALT;
	return (t << 5) + t + e | 0;
}, combineHashes = function(e, t) {
	return e * 2097152 + t;
}, combineHashesArray = function(e) {
	return e[0] * 2097152 + e[1];
}, hashArrays = function(e, t) {
	return [hashInt(e[0], t[0]), hashIntAlt(e[1], t[1])];
}, hashIntsArray = function(e, t) {
	var n = {
		value: 0,
		done: !1
	}, r = 0, a = e.length;
	return hashIterableInts({ next: function() {
		return r < a ? n.value = e[r++] : n.done = !0, n;
	} }, t);
}, hashString = function(e, t) {
	var n = {
		value: 0,
		done: !1
	}, r = 0, a = e.length;
	return hashIterableInts({ next: function() {
		return r < a ? n.value = e.charCodeAt(r++) : n.done = !0, n;
	} }, t);
}, hashStrings = function() {
	return hashStringsArray(arguments);
}, hashStringsArray = function(e) {
	for (var t, n = 0; n < e.length; n++) {
		var r = e[n];
		t = n === 0 ? hashString(r) : hashString(r, t);
	}
	return t;
};
function rotatePoint(e, t, n, r, a) {
	var o = a * Math.PI / 180;
	return {
		x: Math.cos(o) * (e - n) - Math.sin(o) * (t - r) + n,
		y: Math.sin(o) * (e - n) + Math.cos(o) * (t - r) + r
	};
}
var movePointByBoxAspect = function(e, t, n, r, a, o) {
	return {
		x: (e - n) * a + n,
		y: (t - r) * o + r
	};
};
function rotatePosAndSkewByBox(e, t, n) {
	if (n === 0) return e;
	var r = (t.x1 + t.x2) / 2, a = (t.y1 + t.y2) / 2, o = t.w / t.h, s = 1 / o, c = rotatePoint(e.x, e.y, r, a, n), l = movePointByBoxAspect(c.x, c.y, r, a, o, s);
	return {
		x: l.x,
		y: l.y
	};
}
var warningsEnabled = !0, warnSupported = console.warn != null, traceSupported = console.trace != null, MAX_INT$1 = 2 ** 53 - 1 || 9007199254740991, trueify = function() {
	return !0;
}, falsify = function() {
	return !1;
}, zeroify = function() {
	return 0;
}, noop$1 = function() {}, error = function(e) {
	throw Error(e);
}, warnings = function(e) {
	if (e !== void 0) warningsEnabled = !!e;
	else return warningsEnabled;
}, warn = function(e) {
	warnings() && (warnSupported ? console.warn(e) : (console.log(e), traceSupported && console.trace()));
}, clone = function(e) {
	return extend({}, e);
}, copy = function(e) {
	return e == null ? e : array(e) ? e.slice() : plainObject(e) ? clone(e) : e;
}, copyArray = function(e) {
	return e.slice();
}, uuid = function(e, t) {
	for (t = e = ""; e++ < 36; t += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-");
	return t;
}, _staticEmptyObject = {}, staticEmptyObject = function() {
	return _staticEmptyObject;
}, defaults$g = function(e) {
	var t = Object.keys(e);
	return function(n) {
		for (var r = {}, a = 0; a < t.length; a++) {
			var o = t[a], s = n?.[o];
			r[o] = s === void 0 ? e[o] : s;
		}
		return r;
	};
}, removeFromArray = function(e, t, n) {
	for (var r = e.length - 1; r >= 0; r--) e[r] === t && e.splice(r, 1);
}, clearArray = function(e) {
	e.splice(0, e.length);
}, push = function(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		e.push(r);
	}
}, getPrefixedProperty = function(e, t, n) {
	return n && (t = prependCamel(n, t)), e[t];
}, setPrefixedProperty = function(e, t, n, r) {
	n && (t = prependCamel(n, t)), e[t] = r;
}, ObjectMap = /* @__PURE__ */ function() {
	function e() {
		_classCallCheck(this, e), this._obj = {};
	}
	return _createClass(e, [
		{
			key: "set",
			value: function(e, t) {
				return this._obj[e] = t, this;
			}
		},
		{
			key: "delete",
			value: function(e) {
				return this._obj[e] = void 0, this;
			}
		},
		{
			key: "clear",
			value: function() {
				this._obj = {};
			}
		},
		{
			key: "has",
			value: function(e) {
				return this._obj[e] !== void 0;
			}
		},
		{
			key: "get",
			value: function(e) {
				return this._obj[e];
			}
		}
	]);
}(), Map$1 = typeof Map < "u" ? Map : ObjectMap, undef = "undefined", ObjectSet = /* @__PURE__ */ function() {
	function e(t) {
		if (_classCallCheck(this, e), this._obj = Object.create(null), this.size = 0, t != null) for (var n = t.instanceString != null && t.instanceString() === this.instanceString() ? t.toArray() : t, r = 0; r < n.length; r++) this.add(n[r]);
	}
	return _createClass(e, [
		{
			key: "instanceString",
			value: function() {
				return "set";
			}
		},
		{
			key: "add",
			value: function(e) {
				var t = this._obj;
				t[e] !== 1 && (t[e] = 1, this.size++);
			}
		},
		{
			key: "delete",
			value: function(e) {
				var t = this._obj;
				t[e] === 1 && (t[e] = 0, this.size--);
			}
		},
		{
			key: "clear",
			value: function() {
				this._obj = Object.create(null);
			}
		},
		{
			key: "has",
			value: function(e) {
				return this._obj[e] === 1;
			}
		},
		{
			key: "toArray",
			value: function() {
				var e = this;
				return Object.keys(this._obj).filter(function(t) {
					return e.has(t);
				});
			}
		},
		{
			key: "forEach",
			value: function(e, t) {
				return this.toArray().forEach(e, t);
			}
		}
	]);
}(), Set$1 = (typeof Set > "u" ? "undefined" : _typeof(Set)) === undef ? ObjectSet : Set, Element = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
	if (e === void 0 || t === void 0 || !core(e)) {
		error("An element must have a core reference and parameters set");
		return;
	}
	var r = t.group;
	if (r ??= t.data && t.data.source != null && t.data.target != null ? "edges" : "nodes", r !== "nodes" && r !== "edges") {
		error("An element must be of type `nodes` or `edges`; you specified `" + r + "`");
		return;
	}
	this.length = 1, this[0] = this;
	var a = this._private = {
		cy: e,
		single: !0,
		data: t.data || {},
		position: t.position || {
			x: 0,
			y: 0
		},
		autoWidth: void 0,
		autoHeight: void 0,
		autoPadding: void 0,
		compoundBoundsClean: !1,
		listeners: [],
		group: r,
		style: {},
		rstyle: {},
		styleCxts: [],
		styleKeys: {},
		removed: !0,
		selected: !!t.selected,
		selectable: t.selectable === void 0 ? !0 : !!t.selectable,
		locked: !!t.locked,
		grabbed: !1,
		grabbable: t.grabbable === void 0 ? !0 : !!t.grabbable,
		pannable: t.pannable === void 0 ? r === "edges" : !!t.pannable,
		active: !1,
		classes: new Set$1(),
		animation: {
			current: [],
			queue: []
		},
		rscratch: {},
		scratch: t.scratch || {},
		edges: [],
		children: [],
		parent: t.parent && t.parent.isNode() ? t.parent : null,
		traversalCache: {},
		backgrounding: !1,
		bbCache: null,
		bbCacheShift: {
			x: 0,
			y: 0
		},
		bodyBounds: null,
		overlayBounds: null,
		labelBounds: {
			all: null,
			source: null,
			target: null,
			main: null
		},
		arrowBounds: {
			source: null,
			target: null,
			"mid-source": null,
			"mid-target": null
		}
	};
	if (a.position.x ?? (a.position.x = 0), a.position.y ?? (a.position.y = 0), t.renderedPosition) {
		var o = t.renderedPosition, s = e.pan(), c = e.zoom();
		a.position = {
			x: (o.x - s.x) / c,
			y: (o.y - s.y) / c
		};
	}
	var l = [];
	array(t.classes) ? l = t.classes : string(t.classes) && (l = t.classes.split(/\s+/));
	for (var u = 0, d = l.length; u < d; u++) {
		var f = l[u];
		!f || f === "" || a.classes.add(f);
	}
	this.createEmitter(), (n === void 0 || n) && this.restore();
	var m = t.style || t.css;
	m && (warn("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(m));
}, defineSearch = function(e) {
	return e = {
		bfs: e.bfs || !e.dfs,
		dfs: e.dfs || !e.bfs
	}, function(t, n, r) {
		var a;
		plainObject(t) && !elementOrCollection(t) && (a = t, t = a.roots || a.root, n = a.visit, r = a.directed), r = arguments.length === 2 && !fn$6(n) ? n : r, n = fn$6(n) ? n : function() {};
		for (var o = this._private.cy, s = t = string(t) ? this.filter(t) : t, c = [], l = [], u = {}, d = {}, f = {}, m = 0, h, g = this.byGroup(), _ = g.nodes, v = g.edges, b = 0; b < s.length; b++) {
			var S = s[b], C = S.id();
			S.isNode() && (c.unshift(S), e.bfs && (f[C] = !0, l.push(S)), d[C] = 0);
		}
		for (var w = function() {
			var t = e.bfs ? c.shift() : c.pop(), a = t.id();
			if (e.dfs) {
				if (f[a]) return 0;
				f[a] = !0, l.push(t);
			}
			var o = d[a], s = u[a], g = s == null ? null : s.source(), b = s == null ? null : s.target(), S = s == null ? void 0 : t.same(g) ? b[0] : g[0], C = n(t, s, S, m++, o);
			if (C === !0) return h = t, 1;
			if (C === !1) return 1;
			for (var w = t.connectedEdges().filter(function(e) {
				return (!r || e.source().same(t)) && v.has(e);
			}), T = 0; T < w.length; T++) {
				var E = w[T], D = E.connectedNodes().filter(function(e) {
					return !e.same(t) && _.has(e);
				}), O = D.id();
				D.length !== 0 && !f[O] && (D = D[0], c.push(D), e.bfs && (f[O] = !0, l.push(D)), u[O] = E, d[O] = d[a] + 1);
			}
		}, T; c.length !== 0 && (T = w(), !(T !== 0 && T === 1)););
		for (var E = o.collection(), D = 0; D < l.length; D++) {
			var O = l[D], k = u[O.id()];
			k != null && E.push(k), E.push(O);
		}
		return {
			path: o.collection(E),
			found: o.collection(h)
		};
	};
}, elesfn$v = {
	breadthFirstSearch: defineSearch({ bfs: !0 }),
	depthFirstSearch: defineSearch({ dfs: !0 })
};
elesfn$v.bfs = elesfn$v.breadthFirstSearch, elesfn$v.dfs = elesfn$v.depthFirstSearch;
var heap$2 = { exports: {} }, heap$1 = heap$2.exports, hasRequiredHeap$1;
function requireHeap$1() {
	return hasRequiredHeap$1 ? heap$2.exports : (hasRequiredHeap$1 = 1, (function(e, t) {
		(function() {
			var t, n, r = Math.floor, a, o, s, c, l, u, d = Math.min, f, m, h, g, _;
			n = function(e, t) {
				return e < t ? -1 : e > t ? 1 : 0;
			}, u = function(e, t, a, o, s) {
				var c;
				if (a ??= 0, s ??= n, a < 0) throw Error("lo must be non-negative");
				for (o ??= e.length; a < o;) c = r((a + o) / 2), s(t, e[c]) < 0 ? o = c : a = c + 1;
				return [].splice.apply(e, [a, a - a].concat(t)), t;
			}, s = function(e, t, r) {
				return r ??= n, e.push(t), g(e, 0, e.length - 1, r);
			}, o = function(e, t) {
				var r, a;
				return t ??= n, r = e.pop(), e.length ? (a = e[0], e[0] = r, _(e, 0, t)) : a = r, a;
			}, l = function(e, t, r) {
				var a;
				return r ??= n, a = e[0], e[0] = t, _(e, 0, r), a;
			}, c = function(e, t, r) {
				var a;
				return r ??= n, e.length && r(e[0], t) < 0 && (a = [e[0], t], t = a[0], e[0] = a[1], _(e, 0, r)), t;
			}, a = function(e, t) {
				var a, o, s, c, l, u;
				for (t ??= n, c = (function() {
					u = [];
					for (var t = 0, n = r(e.length / 2); 0 <= n ? t < n : t > n; 0 <= n ? t++ : t--) u.push(t);
					return u;
				}).apply(this).reverse(), l = [], o = 0, s = c.length; o < s; o++) a = c[o], l.push(_(e, a, t));
				return l;
			}, h = function(e, t, r) {
				var a;
				if (r ??= n, a = e.indexOf(t), a !== -1) return g(e, 0, a, r), _(e, a, r);
			}, f = function(e, t, r) {
				var o, s, l, u, d;
				if (r ??= n, s = e.slice(0, t), !s.length) return s;
				for (a(s, r), d = e.slice(t), l = 0, u = d.length; l < u; l++) o = d[l], c(s, o, r);
				return s.sort(r).reverse();
			}, m = function(e, t, r) {
				var s, c, l, f, m, h, g, _, v;
				if (r ??= n, t * 10 <= e.length) {
					if (l = e.slice(0, t).sort(r), !l.length) return l;
					for (c = l[l.length - 1], g = e.slice(t), f = 0, h = g.length; f < h; f++) s = g[f], r(s, c) < 0 && (u(l, s, 0, null, r), l.pop(), c = l[l.length - 1]);
					return l;
				}
				for (a(e, r), v = [], m = 0, _ = d(t, e.length); 0 <= _ ? m < _ : m > _; 0 <= _ ? ++m : --m) v.push(o(e, r));
				return v;
			}, g = function(e, t, r, a) {
				var o, s, c;
				for (a ??= n, o = e[r]; r > t;) {
					if (c = r - 1 >> 1, s = e[c], a(o, s) < 0) {
						e[r] = s, r = c;
						continue;
					}
					break;
				}
				return e[r] = o;
			}, _ = function(e, t, r) {
				var a, o, s, c, l;
				for (r ??= n, o = e.length, l = t, s = e[t], a = 2 * t + 1; a < o;) c = a + 1, c < o && !(r(e[a], e[c]) < 0) && (a = c), e[t] = e[a], t = a, a = 2 * t + 1;
				return e[t] = s, g(e, l, t, r);
			}, t = (function() {
				e.push = s, e.pop = o, e.replace = l, e.pushpop = c, e.heapify = a, e.updateItem = h, e.nlargest = f, e.nsmallest = m;
				function e(e) {
					this.cmp = e ?? n, this.nodes = [];
				}
				return e.prototype.push = function(e) {
					return s(this.nodes, e, this.cmp);
				}, e.prototype.pop = function() {
					return o(this.nodes, this.cmp);
				}, e.prototype.peek = function() {
					return this.nodes[0];
				}, e.prototype.contains = function(e) {
					return this.nodes.indexOf(e) !== -1;
				}, e.prototype.replace = function(e) {
					return l(this.nodes, e, this.cmp);
				}, e.prototype.pushpop = function(e) {
					return c(this.nodes, e, this.cmp);
				}, e.prototype.heapify = function() {
					return a(this.nodes, this.cmp);
				}, e.prototype.updateItem = function(e) {
					return h(this.nodes, e, this.cmp);
				}, e.prototype.clear = function() {
					return this.nodes = [];
				}, e.prototype.empty = function() {
					return this.nodes.length === 0;
				}, e.prototype.size = function() {
					return this.nodes.length;
				}, e.prototype.clone = function() {
					var t = new e();
					return t.nodes = this.nodes.slice(0), t;
				}, e.prototype.toArray = function() {
					return this.nodes.slice(0);
				}, e.prototype.insert = e.prototype.push, e.prototype.top = e.prototype.peek, e.prototype.front = e.prototype.peek, e.prototype.has = e.prototype.contains, e.prototype.copy = e.prototype.clone, e;
			})(), (function(t, n) {
				return e.exports = n();
			})(this, function() {
				return t;
			});
		}).call(heap$1);
	})(heap$2), heap$2.exports);
}
var heap, hasRequiredHeap;
function requireHeap() {
	return hasRequiredHeap ? heap : (hasRequiredHeap = 1, heap = requireHeap$1(), heap);
}
var Heap = /* @__PURE__ */ getDefaultExportFromCjs(requireHeap()), dijkstraDefaults = defaults$g({
	root: null,
	weight: function(e) {
		return 1;
	},
	directed: !1
}), elesfn$u = { dijkstra: function(e) {
	if (!plainObject(e)) {
		var t = arguments;
		e = {
			root: t[0],
			weight: t[1],
			directed: t[2]
		};
	}
	var n = dijkstraDefaults(e), r = n.root, a = n.weight, o = n.directed, s = this, c = a, l = string(r) ? this.filter(r)[0] : r[0], u = {}, d = {}, f = {}, m = this.byGroup(), h = m.nodes, g = m.edges;
	g.unmergeBy(function(e) {
		return e.isLoop();
	});
	for (var _ = function(e) {
		return u[e.id()];
	}, v = function(e, t) {
		u[e.id()] = t, b.updateItem(e);
	}, b = new Heap(function(e, t) {
		return _(e) - _(t);
	}), S = 0; S < h.length; S++) {
		var C = h[S];
		u[C.id()] = C.same(l) ? 0 : Infinity, b.push(C);
	}
	for (var w = function(e, t) {
		for (var n = (o ? e.edgesTo(t) : e.edgesWith(t)).intersect(g), r = Infinity, a, s = 0; s < n.length; s++) {
			var l = n[s], u = c(l);
			(u < r || !a) && (r = u, a = l);
		}
		return {
			edge: a,
			dist: r
		};
	}; b.size() > 0;) {
		var T = b.pop(), E = _(T), D = T.id();
		if (f[D] = E, E !== Infinity) for (var O = T.neighborhood().intersect(h), k = 0; k < O.length; k++) {
			var A = O[k], M = A.id(), N = w(T, A), F = E + N.dist;
			F < _(A) && (v(A, F), d[M] = {
				node: T,
				edge: N.edge
			});
		}
	}
	return {
		distanceTo: function(e) {
			return f[(string(e) ? h.filter(e)[0] : e[0]).id()];
		},
		pathTo: function(e) {
			var t = string(e) ? h.filter(e)[0] : e[0], n = [], r = t, a = r.id();
			if (t.length > 0) for (n.unshift(t); d[a];) {
				var o = d[a];
				n.unshift(o.edge), n.unshift(o.node), r = o.node, a = r.id();
			}
			return s.spawn(n);
		}
	};
} }, elesfn$t = { kruskal: function(e) {
	e ||= function(e) {
		return 1;
	};
	for (var t = this.byGroup(), n = t.nodes, r = t.edges, a = n.length, o = Array(a), s = n, c = function(e) {
		for (var t = 0; t < o.length; t++) if (o[t].has(e)) return t;
	}, l = 0; l < a; l++) o[l] = this.spawn(n[l]);
	for (var u = r.sort(function(t, n) {
		return e(t) - e(n);
	}), d = 0; d < u.length; d++) {
		var f = u[d], m = f.source()[0], h = f.target()[0], g = c(m), _ = c(h), v = o[g], b = o[_];
		g !== _ && (s.merge(f), v.merge(b), o.splice(_, 1));
	}
	return s;
} }, aStarDefaults = defaults$g({
	root: null,
	goal: null,
	weight: function(e) {
		return 1;
	},
	heuristic: function(e) {
		return 0;
	},
	directed: !1
}), elesfn$s = { aStar: function(e) {
	var t = this.cy(), n = aStarDefaults(e), r = n.root, a = n.goal, o = n.heuristic, s = n.directed, c = n.weight;
	r = t.collection(r)[0], a = t.collection(a)[0];
	var l = r.id(), u = a.id(), d = {}, f = {}, m = {}, h = new Heap(function(e, t) {
		return f[e.id()] - f[t.id()];
	}), g = new Set$1(), _ = {}, v = {}, b = function(e, t) {
		h.push(e), g.add(t);
	}, S, C, w = function() {
		S = h.pop(), C = S.id(), g.delete(C);
	}, T = function(e) {
		return g.has(e);
	};
	b(r, l), d[l] = 0, f[l] = o(r);
	for (var E = 0; h.size() > 0;) {
		if (w(), E++, C === u) {
			for (var D = [], O = a, k = u, A = v[k]; D.unshift(O), A != null && D.unshift(A), O = _[k], O != null;) k = O.id(), A = v[k];
			return {
				found: !0,
				distance: d[C],
				path: this.spawn(D),
				steps: E
			};
		}
		m[C] = !0;
		for (var j = S._private.edges, M = 0; M < j.length; M++) {
			var N = j[M];
			if (this.hasElementWithId(N.id()) && !(s && N.data("source") !== C)) {
				var P = N.source(), F = N.target(), I = P.id() === C ? F : P, L = I.id();
				if (this.hasElementWithId(L) && !m[L]) {
					var R = d[C] + c(N);
					if (!T(L)) {
						d[L] = R, f[L] = R + o(I), b(I, L), _[L] = S, v[L] = N;
						continue;
					}
					R < d[L] && (d[L] = R, f[L] = R + o(I), _[L] = S, v[L] = N);
				}
			}
		}
	}
	return {
		found: !1,
		distance: void 0,
		path: void 0,
		steps: E
	};
} }, floydWarshallDefaults = defaults$g({
	weight: function(e) {
		return 1;
	},
	directed: !1
}), elesfn$r = { floydWarshall: function(e) {
	for (var t = this.cy(), n = floydWarshallDefaults(e), r = n.weight, a = n.directed, o = r, s = this.byGroup(), c = s.nodes, l = s.edges, u = c.length, d = u * u, f = function(e) {
		return c.indexOf(e);
	}, m = function(e) {
		return c[e];
	}, h = Array(d), g = 0; g < d; g++) {
		var _ = g % u;
		(g - _) / u === _ ? h[g] = 0 : h[g] = Infinity;
	}
	for (var v = Array(d), b = Array(d), S = 0; S < l.length; S++) {
		var C = l[S], w = C.source()[0], T = C.target()[0];
		if (w !== T) {
			var E = f(w), D = f(T), O = E * u + D, k = o(C);
			if (h[O] > k && (h[O] = k, v[O] = D, b[O] = C), !a) {
				var A = D * u + E;
				!a && h[A] > k && (h[A] = k, v[A] = E, b[A] = C);
			}
		}
	}
	for (var M = 0; M < u; M++) for (var N = 0; N < u; N++) for (var P = N * u + M, F = 0; F < u; F++) {
		var I = N * u + F, L = M * u + F;
		h[P] + h[L] < h[I] && (h[I] = h[P] + h[L], v[I] = v[P]);
	}
	var R = function(e) {
		return (string(e) ? t.filter(e) : e)[0];
	}, z = function(e) {
		return f(R(e));
	};
	return {
		distance: function(e, t) {
			var n = z(e), r = z(t);
			return h[n * u + r];
		},
		path: function(e, n) {
			var r = z(e), a = z(n), o = m(r);
			if (r === a) return o.collection();
			if (v[r * u + a] == null) return t.collection();
			var s = t.collection(), c = r, l;
			for (s.merge(o); r !== a;) c = r, r = v[r * u + a], l = b[c * u + r], s.merge(l), s.merge(m(r));
			return s;
		}
	};
} }, bellmanFordDefaults = defaults$g({
	weight: function(e) {
		return 1;
	},
	directed: !1,
	root: null
}), elesfn$q = { bellmanFord: function(e) {
	var t = this, n = bellmanFordDefaults(e), r = n.weight, a = n.directed, o = n.root, s = r, c = this, l = this.cy(), u = this.byGroup(), d = u.edges, f = u.nodes, m = f.length, h = new Map$1(), g = !1, _ = [];
	o = l.collection(o)[0], d.unmergeBy(function(e) {
		return e.isLoop();
	});
	for (var v = d.length, b = function(e) {
		var t = h.get(e.id());
		return t || (t = {}, h.set(e.id(), t)), t;
	}, S = function(e) {
		return (string(e) ? l.$(e) : e)[0];
	}, C = function(e) {
		return b(S(e)).dist;
	}, w = function(e) {
		for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, r = S(e), a = [], s = r;;) {
			if (s == null) return t.spawn();
			var l = b(s), u = l.edge, d = l.pred;
			if (a.unshift(s[0]), s.same(n) && a.length > 0) break;
			u != null && a.unshift(u), s = d;
		}
		return c.spawn(a);
	}, T = 0; T < m; T++) {
		var E = f[T], D = b(E);
		E.same(o) ? D.dist = 0 : D.dist = Infinity, D.pred = null, D.edge = null;
	}
	for (var O = !1, k = function(e, t, n, r, a, o) {
		var s = r.dist + o;
		s < a.dist && !n.same(r.edge) && (a.dist = s, a.pred = e, a.edge = n, O = !0);
	}, A = 1; A < m; A++) {
		O = !1;
		for (var M = 0; M < v; M++) {
			var N = d[M], P = N.source(), F = N.target(), I = s(N), L = b(P), R = b(F);
			k(P, F, N, L, R, I), a || k(F, P, N, R, L, I);
		}
		if (!O) break;
	}
	if (O) for (var z = [], B = 0; B < v; B++) {
		var V = d[B], H = V.source(), U = V.target(), W = s(V), G = b(H).dist, q = b(U).dist;
		if (G + W < q || !a && q + W < G) if (g ||= (warn("Graph contains a negative weight cycle for Bellman-Ford"), !0), e.findNegativeWeightCycles !== !1) {
			var J = [];
			G + W < q && J.push(H), !a && q + W < G && J.push(U);
			for (var Y = J.length, X = 0; X < Y; X++) {
				var Z = J[X], Q = [Z];
				Q.push(b(Z).edge);
				for (var $ = b(Z).pred; Q.indexOf($) === -1;) Q.push($), Q.push(b($).edge), $ = b($).pred;
				Q = Q.slice(Q.indexOf($));
				for (var kh = Q[0].id(), Ah = 0, jh = 2; jh < Q.length; jh += 2) Q[jh].id() < kh && (kh = Q[jh].id(), Ah = jh);
				Q = Q.slice(Ah).concat(Q.slice(0, Ah)), Q.push(Q[0]);
				var Mh = Q.map(function(e) {
					return e.id();
				}).join(",");
				z.indexOf(Mh) === -1 && (_.push(c.spawn(Q)), z.push(Mh));
			}
		} else break;
	}
	return {
		distanceTo: C,
		pathTo: w,
		hasNegativeWeightCycle: g,
		negativeWeightCycles: _
	};
} }, sqrt2 = Math.sqrt(2), collapse = function(e, t, n) {
	n.length === 0 && error("Karger-Stein must be run on a connected (sub)graph");
	for (var r = n[e], a = r[1], o = r[2], s = t[a], c = t[o], l = n, u = l.length - 1; u >= 0; u--) {
		var d = l[u], f = d[1], m = d[2];
		(t[f] === s && t[m] === c || t[f] === c && t[m] === s) && l.splice(u, 1);
	}
	for (var h = 0; h < l.length; h++) {
		var g = l[h];
		g[1] === c ? (l[h] = g.slice(), l[h][1] = s) : g[2] === c && (l[h] = g.slice(), l[h][2] = s);
	}
	for (var _ = 0; _ < t.length; _++) t[_] === c && (t[_] = s);
	return l;
}, contractUntil = function(e, t, n, r) {
	for (; n > r;) t = collapse(Math.floor(Math.random() * t.length), e, t), n--;
	return t;
}, elesfn$p = { kargerStein: function() {
	var e = this, t = this.byGroup(), n = t.nodes, r = t.edges;
	r.unmergeBy(function(e) {
		return e.isLoop();
	});
	var a = n.length, o = r.length, s = Math.ceil((Math.log(a) / Math.LN2) ** 2), c = Math.floor(a / sqrt2);
	if (a < 2) {
		error("At least 2 nodes are required for Karger-Stein algorithm");
		return;
	}
	for (var l = [], u = 0; u < o; u++) {
		var d = r[u];
		l.push([
			u,
			n.indexOf(d.source()),
			n.indexOf(d.target())
		]);
	}
	for (var f = Infinity, m = [], h = Array(a), g = Array(a), _ = Array(a), v = function(e, t) {
		for (var n = 0; n < a; n++) t[n] = e[n];
	}, b = 0; b <= s; b++) {
		for (var S = 0; S < a; S++) g[S] = S;
		var C = contractUntil(g, l.slice(), a, c), w = C.slice();
		v(g, _);
		var T = contractUntil(g, C, c, 2), E = contractUntil(_, w, c, 2);
		T.length <= E.length && T.length < f ? (f = T.length, m = T, v(g, h)) : E.length <= T.length && E.length < f && (f = E.length, m = E, v(_, h));
	}
	for (var D = this.spawn(m.map(function(e) {
		return r[e[0]];
	})), O = this.spawn(), k = this.spawn(), A = h[0], j = 0; j < h.length; j++) {
		var M = h[j], N = n[j];
		M === A ? O.merge(N) : k.merge(N);
	}
	var P = function(t) {
		var n = e.spawn();
		return t.forEach(function(t) {
			n.merge(t), t.connectedEdges().forEach(function(t) {
				e.contains(t) && !D.contains(t) && n.merge(t);
			});
		}), n;
	};
	return {
		cut: D,
		components: [P(O), P(k)],
		partition1: O,
		partition2: k
	};
} }, copyPosition = function(e) {
	return {
		x: e.x,
		y: e.y
	};
}, modelToRenderedPosition$1 = function(e, t, n) {
	return {
		x: e.x * t + n.x,
		y: e.y * t + n.y
	};
}, renderedToModelPosition = function(e, t, n) {
	return {
		x: (e.x - n.x) / t,
		y: (e.y - n.y) / t
	};
}, array2point = function(e) {
	return {
		x: e[0],
		y: e[1]
	};
}, min = function(e) {
	for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = Infinity, a = t; a < n; a++) {
		var o = e[a];
		isFinite(o) && (r = Math.min(o, r));
	}
	return r;
}, max = function(e) {
	for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = -Infinity, a = t; a < n; a++) {
		var o = e[a];
		isFinite(o) && (r = Math.max(o, r));
	}
	return r;
}, mean = function(e) {
	for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = 0, a = 0, o = t; o < n; o++) {
		var s = e[o];
		isFinite(s) && (r += s, a++);
	}
	return r / a;
}, median = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
	r ? e = e.slice(t, n) : (n < e.length && e.splice(n, e.length - n), t > 0 && e.splice(0, t));
	for (var s = 0, c = e.length - 1; c >= 0; c--) {
		var l = e[c];
		o ? isFinite(l) || (e[c] = -Infinity, s++) : e.splice(c, 1);
	}
	a && e.sort(function(e, t) {
		return e - t;
	});
	var u = e.length, d = Math.floor(u / 2);
	return u % 2 == 0 ? (e[d - 1 + s] + e[d + s]) / 2 : e[d + 1 + s];
}, deg2rad = function(e) {
	return Math.PI * e / 180;
}, getAngleFromDisp = function(e, t) {
	return Math.atan2(t, e) - Math.PI / 2;
}, log2 = Math.log2 || function(e) {
	return Math.log(e) / Math.log(2);
}, signum = function(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}, dist = function(e, t) {
	return Math.sqrt(sqdist(e, t));
}, sqdist = function(e, t) {
	var n = t.x - e.x, r = t.y - e.y;
	return n * n + r * r;
}, inPlaceSumNormalize = function(e) {
	for (var t = e.length, n = 0, r = 0; r < t; r++) n += e[r];
	for (var a = 0; a < t; a++) e[a] = e[a] / n;
	return e;
}, qbezierAt = function(e, t, n, r) {
	return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * t + r * r * n;
}, qbezierPtAt = function(e, t, n, r) {
	return {
		x: qbezierAt(e.x, t.x, n.x, r),
		y: qbezierAt(e.y, t.y, n.y, r)
	};
}, lineAt = function(e, t, n, r) {
	var a = {
		x: t.x - e.x,
		y: t.y - e.y
	}, o = dist(e, t), s = {
		x: a.x / o,
		y: a.y / o
	};
	return n ??= 0, r ??= n * o, {
		x: e.x + s.x * r,
		y: e.y + s.y * r
	};
}, bound = function(e, t, n) {
	return Math.max(e, Math.min(n, t));
}, makeBoundingBox = function(e) {
	if (e == null) return {
		x1: Infinity,
		y1: Infinity,
		x2: -Infinity,
		y2: -Infinity,
		w: 0,
		h: 0
	};
	if (e.x1 != null && e.y1 != null) {
		if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1) return {
			x1: e.x1,
			y1: e.y1,
			x2: e.x2,
			y2: e.y2,
			w: e.x2 - e.x1,
			h: e.y2 - e.y1
		};
		if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0) return {
			x1: e.x1,
			y1: e.y1,
			x2: e.x1 + e.w,
			y2: e.y1 + e.h,
			w: e.w,
			h: e.h
		};
	}
}, copyBoundingBox = function(e) {
	return {
		x1: e.x1,
		x2: e.x2,
		w: e.w,
		y1: e.y1,
		y2: e.y2,
		h: e.h
	};
}, clearBoundingBox = function(e) {
	e.x1 = Infinity, e.y1 = Infinity, e.x2 = -Infinity, e.y2 = -Infinity, e.w = 0, e.h = 0;
}, updateBoundingBox = function(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.x2 = Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, t.y1), e.y2 = Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
}, expandBoundingBoxByPoint = function(e, t, n) {
	e.x1 = Math.min(e.x1, t), e.x2 = Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, n), e.y2 = Math.max(e.y2, n), e.h = e.y2 - e.y1;
}, expandBoundingBox = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, expandBoundingBoxSides = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], n, r, a, o;
	if (t.length === 1) n = r = a = o = t[0];
	else if (t.length === 2) n = a = t[0], o = r = t[1];
	else if (t.length === 4) {
		var s = _slicedToArray(t, 4);
		n = s[0], r = s[1], a = s[2], o = s[3];
	}
	return e.x1 -= o, e.x2 += r, e.y1 -= n, e.y2 += a, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, assignBoundingBox = function(e, t) {
	e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, boundingBoxesIntersect = function(e, t) {
	return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
}, inBoundingBox = function(e, t, n) {
	return e.x1 <= t && t <= e.x2 && e.y1 <= n && n <= e.y2;
}, pointInBoundingBox = function(e, t) {
	return inBoundingBox(e, t.x, t.y);
}, boundingBoxInBoundingBox = function(e, t) {
	return inBoundingBox(e, t.x1, t.y1) && inBoundingBox(e, t.x2, t.y2);
}, hypot = Math.hypot ?? function(e, t) {
	return Math.sqrt(e * e + t * t);
};
function inflatePolygon(e, t) {
	if (e.length < 3) throw Error("Need at least 3 vertices");
	var n = function(e, t) {
		return {
			x: e.x + t.x,
			y: e.y + t.y
		};
	}, r = function(e, t) {
		return {
			x: e.x - t.x,
			y: e.y - t.y
		};
	}, a = function(e, t) {
		return {
			x: e.x * t,
			y: e.y * t
		};
	}, o = function(e, t) {
		return e.x * t.y - e.y * t.x;
	}, s = function(e) {
		var t = hypot(e.x, e.y);
		return t === 0 ? {
			x: 0,
			y: 0
		} : {
			x: e.x / t,
			y: e.y / t
		};
	}, c = function(e) {
		for (var t = 0, n = 0; n < e.length; n++) {
			var r = e[n], a = e[(n + 1) % e.length];
			t += r.x * a.y - a.x * r.y;
		}
		return t / 2;
	}, l = function(e, t, s, c) {
		var l = r(t, e), u = r(c, s), d = o(l, u);
		return Math.abs(d) < 1e-9 ? n(e, a(l, .5)) : n(e, a(l, o(r(s, e), u) / d));
	}, u = e.map(function(e) {
		return {
			x: e.x,
			y: e.y
		};
	});
	c(u) < 0 && u.reverse();
	for (var d = u.length, f = [], m = 0; m < d; m++) {
		var h = u[m], g = u[(m + 1) % d], _ = r(g, h), v = s({
			x: _.y,
			y: -_.x
		});
		f.push(v);
	}
	for (var b = f.map(function(e, r) {
		return {
			p1: n(u[r], a(e, t)),
			p2: n(u[(r + 1) % d], a(e, t))
		};
	}), S = [], C = 0; C < d; C++) {
		var w = b[(C - 1 + d) % d], T = b[C], E = l(w.p1, w.p2, T.p1, T.p2);
		S.push(E);
	}
	return S;
}
function miterBox(e, t, n, r, a, o) {
	var s = inflatePolygon(transformPoints(e, t, n, r, a), o), c = makeBoundingBox();
	return s.forEach(function(e) {
		return expandBoundingBoxByPoint(c, e.x, e.y);
	}), c;
}
var roundRectangleIntersectLine = function(e, t, n, r, a, o, s) {
	var c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", l = c === "auto" ? getRoundRectangleRadius(a, o) : c, u = a / 2, d = o / 2;
	l = Math.min(l, u, d);
	var f = l !== u, m = l !== d, h;
	if (f) {
		var g = n - u + l - s, _ = r - d - s;
		if (h = finiteLinesIntersect(e, t, n, r, g, _, n + u - l + s, _, !1), h.length > 0) return h;
	}
	if (m) {
		var v = n + u + s;
		if (h = finiteLinesIntersect(e, t, n, r, v, r - d + l - s, v, r + d - l + s, !1), h.length > 0) return h;
	}
	if (f) {
		var b = n - u + l - s, S = r + d + s;
		if (h = finiteLinesIntersect(e, t, n, r, b, S, n + u - l + s, S, !1), h.length > 0) return h;
	}
	if (m) {
		var C = n - u - s;
		if (h = finiteLinesIntersect(e, t, n, r, C, r - d + l - s, C, r + d - l + s, !1), h.length > 0) return h;
	}
	var w, T = n - u + l, E = r - d + l;
	if (w = intersectLineCircle(e, t, n, r, T, E, l + s), w.length > 0 && w[0] <= T && w[1] <= E) return [w[0], w[1]];
	var D = n + u - l, O = r - d + l;
	if (w = intersectLineCircle(e, t, n, r, D, O, l + s), w.length > 0 && w[0] >= D && w[1] <= O) return [w[0], w[1]];
	var k = n + u - l, A = r + d - l;
	if (w = intersectLineCircle(e, t, n, r, k, A, l + s), w.length > 0 && w[0] >= k && w[1] >= A) return [w[0], w[1]];
	var j = n - u + l, M = r + d - l;
	return w = intersectLineCircle(e, t, n, r, j, M, l + s), w.length > 0 && w[0] <= j && w[1] >= M ? [w[0], w[1]] : [];
}, inLineVicinity = function(e, t, n, r, a, o, s) {
	var c = s, l = Math.min(n, a), u = Math.max(n, a), d = Math.min(r, o), f = Math.max(r, o);
	return l - c <= e && e <= u + c && d - c <= t && t <= f + c;
}, inBezierVicinity = function(e, t, n, r, a, o, s, c, l) {
	var u = {
		x1: Math.min(n, s, a) - l,
		x2: Math.max(n, s, a) + l,
		y1: Math.min(r, c, o) - l,
		y2: Math.max(r, c, o) + l
	};
	return !(e < u.x1 || e > u.x2 || t < u.y1 || t > u.y2);
}, solveQuadratic = function(e, t, n, r) {
	n -= r;
	var a = t * t - 4 * e * n;
	if (a < 0) return [];
	var o = Math.sqrt(a), s = 2 * e;
	return [(-t + o) / s, (-t - o) / s];
}, solveCubic = function(e, t, n, r, a) {
	e === 0 && (e = 1e-5), t /= e, n /= e, r /= e;
	var o, s = (3 * n - t * t) / 9, c = -(27 * r) + t * (9 * n - 2 * (t * t)), l, u, d, f, m;
	if (c /= 54, o = s * s * s + c * c, a[1] = 0, f = t / 3, o > 0) {
		u = c + Math.sqrt(o), u = u < 0 ? -((-u) ** (1 / 3)) : u ** (1 / 3), d = c - Math.sqrt(o), d = d < 0 ? -((-d) ** (1 / 3)) : d ** (1 / 3), a[0] = -f + u + d, f += (u + d) / 2, a[4] = a[2] = -f, f = Math.sqrt(3) * (-d + u) / 2, a[3] = f, a[5] = -f;
		return;
	}
	if (a[5] = a[3] = 0, o === 0) {
		m = c < 0 ? -((-c) ** (1 / 3)) : c ** (1 / 3), a[0] = -f + 2 * m, a[4] = a[2] = -(m + f);
		return;
	}
	s = -s, l = s * s * s, l = Math.acos(c / Math.sqrt(l)), m = 2 * Math.sqrt(s), a[0] = -f + m * Math.cos(l / 3), a[2] = -f + m * Math.cos((l + 2 * Math.PI) / 3), a[4] = -f + m * Math.cos((l + 4 * Math.PI) / 3);
}, sqdistToQuadraticBezier = function(e, t, n, r, a, o, s, c) {
	var l = 1 * n * n - 4 * n * a + 2 * n * s + 4 * a * a - 4 * a * s + s * s + r * r - 4 * r * o + 2 * r * c + 4 * o * o - 4 * o * c + c * c, u = 9 * n * a - 3 * n * n - 3 * n * s - 6 * a * a + 3 * a * s + 9 * r * o - 3 * r * r - 3 * r * c - 6 * o * o + 3 * o * c, d = 3 * n * n - 6 * n * a + n * s - n * e + 2 * a * a + 2 * a * e - s * e + 3 * r * r - 6 * r * o + r * c - r * t + 2 * o * o + 2 * o * t - c * t, f = 1 * n * a - n * n + n * e - a * e + r * o - r * r + r * t - o * t, m = [];
	solveCubic(l, u, d, f, m);
	for (var h = 1e-7, g = [], _ = 0; _ < 6; _ += 2) Math.abs(m[_ + 1]) < h && m[_] >= 0 && m[_] <= 1 && g.push(m[_]);
	g.push(1), g.push(0);
	for (var v = -1, b, S, C, w = 0; w < g.length; w++) b = (1 - g[w]) ** 2 * n + 2 * (1 - g[w]) * g[w] * a + g[w] * g[w] * s, S = (1 - g[w]) ** 2 * r + 2 * (1 - g[w]) * g[w] * o + g[w] * g[w] * c, C = (b - e) ** 2 + (S - t) ** 2, v >= 0 ? C < v && (v = C) : v = C;
	return v;
}, sqdistToFiniteLine = function(e, t, n, r, a, o) {
	var s = [e - n, t - r], c = [a - n, o - r], l = c[0] * c[0] + c[1] * c[1], u = s[0] * s[0] + s[1] * s[1], d = s[0] * c[0] + s[1] * c[1], f = d * d / l;
	return d < 0 ? u : f > l ? (e - a) * (e - a) + (t - o) * (t - o) : u - f;
}, pointInsidePolygonPoints = function(e, t, n) {
	for (var r, a, o, s, c, l = 0, u = 0; u < n.length / 2; u++) if (r = n[u * 2], a = n[u * 2 + 1], u + 1 < n.length / 2 ? (o = n[(u + 1) * 2], s = n[(u + 1) * 2 + 1]) : (o = n[(u + 1 - n.length / 2) * 2], s = n[(u + 1 - n.length / 2) * 2 + 1]), !(r == e && o == e)) if (r >= e && e >= o || r <= e && e <= o) c = (e - r) / (o - r) * (s - a) + a, c > t && l++;
	else continue;
	return l % 2 != 0;
}, pointInsidePolygon = function(e, t, n, r, a, o, s, c, l) {
	var u = Array(n.length), d;
	c[0] == null ? d = c : (d = Math.atan(c[1] / c[0]), c[0] < 0 ? d += Math.PI / 2 : d = -d - Math.PI / 2);
	for (var f = Math.cos(-d), m = Math.sin(-d), h = 0; h < u.length / 2; h++) u[h * 2] = o / 2 * (n[h * 2] * f - n[h * 2 + 1] * m), u[h * 2 + 1] = s / 2 * (n[h * 2 + 1] * f + n[h * 2] * m), u[h * 2] += r, u[h * 2 + 1] += a;
	return pointInsidePolygonPoints(e, t, l > 0 ? joinLines(expandPolygon(u, -l)) : u);
}, pointInsideRoundPolygon = function(e, t, n, r, a, o, s, c) {
	for (var l = Array(n.length * 2), u = 0; u < c.length; u++) {
		var d = c[u];
		if (l[u * 4 + 0] = d.startX, l[u * 4 + 1] = d.startY, l[u * 4 + 2] = d.stopX, l[u * 4 + 3] = d.stopY, (d.cx - e) ** 2 + (d.cy - t) ** 2 <= d.radius ** 2) return !0;
	}
	return pointInsidePolygonPoints(e, t, l);
}, joinLines = function(e) {
	for (var t = Array(e.length / 2), n, r, a, o, s, c, l, u, d = 0; d < e.length / 4; d++) {
		n = e[d * 4], r = e[d * 4 + 1], a = e[d * 4 + 2], o = e[d * 4 + 3], d < e.length / 4 - 1 ? (s = e[(d + 1) * 4], c = e[(d + 1) * 4 + 1], l = e[(d + 1) * 4 + 2], u = e[(d + 1) * 4 + 3]) : (s = e[0], c = e[1], l = e[2], u = e[3]);
		var f = finiteLinesIntersect(n, r, a, o, s, c, l, u, !0);
		t[d * 2] = f[0], t[d * 2 + 1] = f[1];
	}
	return t;
}, expandPolygon = function(e, t) {
	for (var n = Array(e.length * 2), r, a, o, s, c = 0; c < e.length / 2; c++) {
		r = e[c * 2], a = e[c * 2 + 1], c < e.length / 2 - 1 ? (o = e[(c + 1) * 2], s = e[(c + 1) * 2 + 1]) : (o = e[0], s = e[1]);
		var l = s - a, u = -(o - r), d = Math.sqrt(l * l + u * u), f = l / d, m = u / d;
		n[c * 4] = r + f * t, n[c * 4 + 1] = a + m * t, n[c * 4 + 2] = o + f * t, n[c * 4 + 3] = s + m * t;
	}
	return n;
}, intersectLineEllipse = function(e, t, n, r, a, o) {
	var s = n - e, c = r - t;
	s /= a, c /= o;
	var l = Math.sqrt(s * s + c * c), u = l - 1;
	if (u < 0) return [];
	var d = u / l;
	return [(n - e) * d + e, (r - t) * d + t];
}, checkInEllipse = function(e, t, n, r, a, o, s) {
	return e -= a, t -= o, e /= n / 2 + s, t /= r / 2 + s, e * e + t * t <= 1;
}, intersectLineCircle = function(e, t, n, r, a, o, s) {
	var c = [n - e, r - t], l = [e - a, t - o], u = c[0] * c[0] + c[1] * c[1], d = 2 * (l[0] * c[0] + l[1] * c[1]), f = l[0] * l[0] + l[1] * l[1] - s * s, m = d * d - 4 * u * f;
	if (m < 0) return [];
	var h = (-d + Math.sqrt(m)) / (2 * u), g = (-d - Math.sqrt(m)) / (2 * u), _ = Math.min(h, g), v = Math.max(h, g), b = [];
	if (_ >= 0 && _ <= 1 && b.push(_), v >= 0 && v <= 1 && b.push(v), b.length === 0) return [];
	var S = b[0] * c[0] + e, C = b[0] * c[1] + t;
	return b.length > 1 ? b[0] == b[1] ? [S, C] : [
		S,
		C,
		b[1] * c[0] + e,
		b[1] * c[1] + t
	] : [S, C];
}, midOfThree = function(e, t, n) {
	return t <= e && e <= n || n <= e && e <= t ? e : e <= t && t <= n || n <= t && t <= e ? t : n;
}, finiteLinesIntersect = function(e, t, n, r, a, o, s, c, l) {
	var u = e - a, d = n - e, f = s - a, m = t - o, h = r - t, g = c - o, _ = f * m - g * u, v = d * m - h * u, b = g * d - f * h;
	if (b !== 0) {
		var S = _ / b, C = v / b, w = .001, T = 0 - w, E = 1 + w;
		return T <= S && S <= E && T <= C && C <= E || l ? [e + S * d, t + S * h] : [];
	} else if (_ === 0 || v === 0) return midOfThree(e, n, s) === s ? [s, c] : midOfThree(e, n, a) === a ? [a, o] : midOfThree(a, s, n) === n ? [n, r] : [];
	else return [];
}, transformPoints = function(e, t, n, r, a) {
	var o = [], s = r / 2, c = a / 2, l = t, u = n;
	o.push({
		x: l + s * e[0],
		y: u + c * e[1]
	});
	for (var d = 1; d < e.length / 2; d++) o.push({
		x: l + s * e[d * 2],
		y: u + c * e[d * 2 + 1]
	});
	return o;
}, polygonIntersectLine = function(e, t, n, r, a, o, s, c) {
	var l = [], u, d = Array(n.length), f = !0;
	o ?? (f = !1);
	var m;
	if (f) {
		for (var h = 0; h < d.length / 2; h++) d[h * 2] = n[h * 2] * o + r, d[h * 2 + 1] = n[h * 2 + 1] * s + a;
		m = c > 0 ? joinLines(expandPolygon(d, -c)) : d;
	} else m = n;
	for (var g, _, v, b, S = 0; S < m.length / 2; S++) g = m[S * 2], _ = m[S * 2 + 1], S < m.length / 2 - 1 ? (v = m[(S + 1) * 2], b = m[(S + 1) * 2 + 1]) : (v = m[0], b = m[1]), u = finiteLinesIntersect(e, t, r, a, g, _, v, b), u.length !== 0 && l.push(u[0], u[1]);
	return l;
}, roundPolygonIntersectLine = function(e, t, n, r, a, o, s, c, l) {
	var u = [], d, f = Array(n.length * 2);
	l.forEach(function(n, o) {
		o === 0 ? (f[f.length - 2] = n.startX, f[f.length - 1] = n.startY) : (f[o * 4 - 2] = n.startX, f[o * 4 - 1] = n.startY), f[o * 4] = n.stopX, f[o * 4 + 1] = n.stopY, d = intersectLineCircle(e, t, r, a, n.cx, n.cy, n.radius), d.length !== 0 && u.push(d[0], d[1]);
	});
	for (var m = 0; m < f.length / 4; m++) d = finiteLinesIntersect(e, t, r, a, f[m * 4], f[m * 4 + 1], f[m * 4 + 2], f[m * 4 + 3], !1), d.length !== 0 && u.push(d[0], d[1]);
	if (u.length > 2) {
		for (var h = [u[0], u[1]], g = (h[0] - e) ** 2 + (h[1] - t) ** 2, _ = 1; _ < u.length / 2; _++) {
			var v = (u[_ * 2] - e) ** 2 + (u[_ * 2 + 1] - t) ** 2;
			v <= g && (h[0] = u[_ * 2], h[1] = u[_ * 2 + 1], g = v);
		}
		return h;
	}
	return u;
}, shortenIntersection = function(e, t, n) {
	var r = [e[0] - t[0], e[1] - t[1]], a = Math.sqrt(r[0] * r[0] + r[1] * r[1]), o = (a - n) / a;
	return o < 0 && (o = 1e-5), [t[0] + o * r[0], t[1] + o * r[1]];
}, generateUnitNgonPointsFitToSquare = function(e, t) {
	var n = generateUnitNgonPoints(e, t);
	return n = fitPolygonToSquare(n), n;
}, fitPolygonToSquare = function(e) {
	for (var t, n, r = e.length / 2, a = Infinity, o = Infinity, s = -Infinity, c = -Infinity, l = 0; l < r; l++) t = e[2 * l], n = e[2 * l + 1], a = Math.min(a, t), s = Math.max(s, t), o = Math.min(o, n), c = Math.max(c, n);
	for (var u = 2 / (s - a), d = 2 / (c - o), f = 0; f < r; f++) t = e[2 * f] = e[2 * f] * u, n = e[2 * f + 1] = e[2 * f + 1] * d, a = Math.min(a, t), s = Math.max(s, t), o = Math.min(o, n), c = Math.max(c, n);
	if (o < -1) for (var m = 0; m < r; m++) n = e[2 * m + 1] = e[2 * m + 1] + (-1 - o);
	return e;
}, generateUnitNgonPoints = function(e, t) {
	var n = 1 / e * 2 * Math.PI, r = e % 2 == 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
	r += t;
	for (var a = Array(e * 2), o, s = 0; s < e; s++) o = s * n + r, a[2 * s] = Math.cos(o), a[2 * s + 1] = Math.sin(-o);
	return a;
}, getRoundRectangleRadius = function(e, t) {
	return Math.min(e / 4, t / 4, 8);
}, getRoundPolygonRadius = function(e, t) {
	return Math.min(e / 10, t / 10, 8);
}, getCutRectangleCornerLength = function() {
	return 8;
}, bezierPtsToQuadCoeff = function(e, t, n) {
	return [
		e - 2 * t + n,
		2 * (t - e),
		e
	];
}, getBarrelCurveConstants = function(e, t) {
	return {
		heightOffset: Math.min(15, .05 * t),
		widthOffset: Math.min(100, .25 * e),
		ctrlPtOffsetPct: .05
	};
};
function satPolygonIntersection(e, t) {
	function n(e) {
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n], a = e[(n + 1) % e.length], o = {
				x: a.x - r.x,
				y: a.y - r.y
			}, s = {
				x: -o.y,
				y: o.x
			}, c = Math.sqrt(s.x * s.x + s.y * s.y);
			t.push({
				x: s.x / c,
				y: s.y / c
			});
		}
		return t;
	}
	function r(e, t) {
		var n = Infinity, r = -Infinity, a = _createForOfIteratorHelper(e), o;
		try {
			for (a.s(); !(o = a.n()).done;) {
				var s = o.value, c = s.x * t.x + s.y * t.y;
				n = Math.min(n, c), r = Math.max(r, c);
			}
		} catch (e) {
			a.e(e);
		} finally {
			a.f();
		}
		return {
			min: n,
			max: r
		};
	}
	function a(e, t) {
		return !(e.max < t.min || t.max < e.min);
	}
	var o = _createForOfIteratorHelper([].concat(_toConsumableArray(n(e)), _toConsumableArray(n(t)))), s;
	try {
		for (o.s(); !(s = o.n()).done;) {
			var c = s.value;
			if (!a(r(e, c), r(t, c))) return !1;
		}
	} catch (e) {
		o.e(e);
	} finally {
		o.f();
	}
	return !0;
}
var pageRankDefaults = defaults$g({
	dampingFactor: .8,
	precision: 1e-6,
	iterations: 200,
	weight: function(e) {
		return 1;
	}
}), elesfn$o = { pageRank: function(e) {
	for (var t = pageRankDefaults(e), n = t.dampingFactor, r = t.precision, a = t.iterations, o = t.weight, s = this._private.cy, c = this.byGroup(), l = c.nodes, u = c.edges, d = l.length, f = d * d, m = u.length, h = Array(f), g = Array(d), _ = (1 - n) / d, v = 0; v < d; v++) {
		for (var b = 0; b < d; b++) {
			var S = v * d + b;
			h[S] = 0;
		}
		g[v] = 0;
	}
	for (var C = 0; C < m; C++) {
		var w = u[C], T = w.data("source"), E = w.data("target");
		if (T !== E) {
			var D = l.indexOfId(T), O = l.indexOfId(E), k = o(w), A = O * d + D;
			h[A] += k, g[D] += k;
		}
	}
	for (var j = 1 / d + _, M = 0; M < d; M++) if (g[M] === 0) for (var N = 0; N < d; N++) {
		var P = N * d + M;
		h[P] = j;
	}
	else for (var F = 0; F < d; F++) {
		var I = F * d + M;
		h[I] = h[I] / g[M] + _;
	}
	for (var L = Array(d), R = Array(d), z, B = 0; B < d; B++) L[B] = 1;
	for (var V = 0; V < a; V++) {
		for (var H = 0; H < d; H++) R[H] = 0;
		for (var U = 0; U < d; U++) for (var W = 0; W < d; W++) {
			var G = U * d + W;
			R[U] += h[G] * L[W];
		}
		inPlaceSumNormalize(R), z = L, L = R, R = z;
		for (var q = 0, J = 0; J < d; J++) {
			var Y = z[J] - L[J];
			q += Y * Y;
		}
		if (q < r) break;
	}
	return { rank: function(e) {
		return e = s.collection(e)[0], L[l.indexOf(e)];
	} };
} }, defaults$f = defaults$g({
	root: null,
	weight: function(e) {
		return 1;
	},
	directed: !1,
	alpha: 0
}), elesfn$n = {
	degreeCentralityNormalized: function(e) {
		e = defaults$f(e);
		var t = this.cy(), n = this.nodes(), r = n.length;
		if (e.directed) {
			for (var a = {}, o = {}, s = 0, c = 0, l = 0; l < r; l++) {
				var u = n[l], d = u.id();
				e.root = u;
				var f = this.degreeCentrality(e);
				s < f.indegree && (s = f.indegree), c < f.outdegree && (c = f.outdegree), a[d] = f.indegree, o[d] = f.outdegree;
			}
			return {
				indegree: function(e) {
					return s == 0 ? 0 : (string(e) && (e = t.filter(e)), a[e.id()] / s);
				},
				outdegree: function(e) {
					return c === 0 ? 0 : (string(e) && (e = t.filter(e)), o[e.id()] / c);
				}
			};
		} else {
			for (var m = {}, h = 0, g = 0; g < r; g++) {
				var _ = n[g];
				e.root = _;
				var v = this.degreeCentrality(e);
				h < v.degree && (h = v.degree), m[_.id()] = v.degree;
			}
			return { degree: function(e) {
				return h === 0 ? 0 : (string(e) && (e = t.filter(e)), m[e.id()] / h);
			} };
		}
	},
	degreeCentrality: function(e) {
		e = defaults$f(e);
		var t = this.cy(), n = this, r = e, a = r.root, o = r.weight, s = r.directed, c = r.alpha;
		if (a = t.collection(a)[0], s) {
			for (var l = a.connectedEdges(), u = l.filter(function(e) {
				return e.target().same(a) && n.has(e);
			}), d = l.filter(function(e) {
				return e.source().same(a) && n.has(e);
			}), f = u.length, m = d.length, h = 0, g = 0, _ = 0; _ < u.length; _++) h += o(u[_]);
			for (var v = 0; v < d.length; v++) g += o(d[v]);
			return {
				indegree: f ** (1 - c) * h ** +c,
				outdegree: m ** (1 - c) * g ** +c
			};
		} else {
			for (var b = a.connectedEdges().intersection(n), S = b.length, C = 0, w = 0; w < b.length; w++) C += o(b[w]);
			return { degree: S ** (1 - c) * C ** +c };
		}
	}
};
elesfn$n.dc = elesfn$n.degreeCentrality, elesfn$n.dcn = elesfn$n.degreeCentralityNormalised = elesfn$n.degreeCentralityNormalized;
var defaults$e = defaults$g({
	harmonic: !0,
	weight: function() {
		return 1;
	},
	directed: !1,
	root: null
}), elesfn$m = {
	closenessCentralityNormalized: function(e) {
		for (var t = defaults$e(e), n = t.harmonic, r = t.weight, a = t.directed, o = this.cy(), s = {}, c = 0, l = this.nodes(), u = this.floydWarshall({
			weight: r,
			directed: a
		}), d = 0; d < l.length; d++) {
			for (var f = 0, m = l[d], h = 0; h < l.length; h++) if (d !== h) {
				var g = u.distance(m, l[h]);
				n ? f += 1 / g : f += g;
			}
			n || (f = 1 / f), c < f && (c = f), s[m.id()] = f;
		}
		return { closeness: function(e) {
			return c == 0 ? 0 : (e = string(e) ? o.filter(e)[0].id() : e.id(), s[e] / c);
		} };
	},
	closenessCentrality: function(e) {
		var t = defaults$e(e), n = t.root, r = t.weight, a = t.directed, o = t.harmonic;
		n = this.filter(n)[0];
		for (var s = this.dijkstra({
			root: n,
			weight: r,
			directed: a
		}), c = 0, l = this.nodes(), u = 0; u < l.length; u++) {
			var d = l[u];
			if (!d.same(n)) {
				var f = s.distanceTo(d);
				o ? c += 1 / f : c += f;
			}
		}
		return o ? c : 1 / c;
	}
};
elesfn$m.cc = elesfn$m.closenessCentrality, elesfn$m.ccn = elesfn$m.closenessCentralityNormalised = elesfn$m.closenessCentralityNormalized;
var defaults$d = defaults$g({
	weight: null,
	directed: !1
}), elesfn$l = { betweennessCentrality: function(e) {
	for (var t = defaults$d(e), n = t.directed, r = t.weight, a = r != null, o = this.cy(), s = this.nodes(), c = {}, l = {}, u = 0, d = {
		set: function(e, t) {
			l[e] = t, t > u && (u = t);
		},
		get: function(e) {
			return l[e];
		}
	}, f = 0; f < s.length; f++) {
		var m = s[f], h = m.id();
		n ? c[h] = m.outgoers().nodes() : c[h] = m.openNeighborhood().nodes(), d.set(h, 0);
	}
	for (var g = function() {
		for (var e = s[_].id(), t = [], n = {}, l = {}, u = {}, f = new Heap(function(e, t) {
			return u[e] - u[t];
		}), m = 0; m < s.length; m++) {
			var h = s[m].id();
			n[h] = [], l[h] = 0, u[h] = Infinity;
		}
		for (l[e] = 1, u[e] = 0, f.push(e); !f.empty();) {
			var g = f.pop();
			if (t.push(g), a) for (var v = 0; v < c[g].length; v++) {
				var b = c[g][v], S = o.getElementById(g), C = void 0;
				C = S.edgesTo(b).length > 0 ? S.edgesTo(b)[0] : b.edgesTo(S)[0];
				var w = r(C);
				b = b.id(), u[b] > u[g] + w && (u[b] = u[g] + w, f.nodes.indexOf(b) < 0 ? f.push(b) : f.updateItem(b), l[b] = 0, n[b] = []), u[b] == u[g] + w && (l[b] = l[b] + l[g], n[b].push(g));
			}
			else for (var T = 0; T < c[g].length; T++) {
				var E = c[g][T].id();
				u[E] == Infinity && (f.push(E), u[E] = u[g] + 1), u[E] == u[g] + 1 && (l[E] = l[E] + l[g], n[E].push(g));
			}
		}
		for (var D = {}, O = 0; O < s.length; O++) D[s[O].id()] = 0;
		for (; t.length > 0;) {
			for (var k = t.pop(), A = 0; A < n[k].length; A++) {
				var j = n[k][A];
				D[j] = D[j] + l[j] / l[k] * (1 + D[k]);
			}
			k != s[_].id() && d.set(k, d.get(k) + D[k]);
		}
	}, _ = 0; _ < s.length; _++) g();
	var v = {
		betweenness: function(e) {
			var t = o.collection(e).id();
			return d.get(t);
		},
		betweennessNormalized: function(e) {
			if (u == 0) return 0;
			var t = o.collection(e).id();
			return d.get(t) / u;
		}
	};
	return v.betweennessNormalised = v.betweennessNormalized, v;
} };
elesfn$l.bc = elesfn$l.betweennessCentrality;
var defaults$c = defaults$g({
	expandFactor: 2,
	inflateFactor: 2,
	multFactor: 1,
	maxIterations: 20,
	attributes: [function(e) {
		return 1;
	}]
}), setOptions$3 = function(e) {
	return defaults$c(e);
}, getSimilarity$1 = function(e, t) {
	for (var n = 0, r = 0; r < t.length; r++) n += t[r](e);
	return n;
}, addLoops = function(e, t, n) {
	for (var r = 0; r < t; r++) e[r * t + r] = n;
}, normalize = function(e, t) {
	for (var n, r = 0; r < t; r++) {
		n = 0;
		for (var a = 0; a < t; a++) n += e[a * t + r];
		for (var o = 0; o < t; o++) e[o * t + r] = e[o * t + r] / n;
	}
}, mmult = function(e, t, n) {
	for (var r = Array(n * n), a = 0; a < n; a++) {
		for (var o = 0; o < n; o++) r[a * n + o] = 0;
		for (var s = 0; s < n; s++) for (var c = 0; c < n; c++) r[a * n + c] += e[a * n + s] * t[s * n + c];
	}
	return r;
}, expand = function(e, t, n) {
	for (var r = e.slice(0), a = 1; a < n; a++) e = mmult(e, r, t);
	return e;
}, inflate = function(e, t, n) {
	for (var r = Array(t * t), a = 0; a < t * t; a++) r[a] = e[a] ** +n;
	return normalize(r, t), r;
}, hasConverged = function(e, t, n, r) {
	for (var a = 0; a < n; a++) if (Math.round(e[a] * 10 ** r) / 10 ** r != Math.round(t[a] * 10 ** r) / 10 ** r) return !1;
	return !0;
}, assign$2 = function(e, t, n, r) {
	for (var a = [], o = 0; o < t; o++) {
		for (var s = [], c = 0; c < t; c++) Math.round(e[o * t + c] * 1e3) / 1e3 > 0 && s.push(n[c]);
		s.length !== 0 && a.push(r.collection(s));
	}
	return a;
}, isDuplicate = function(e, t) {
	for (var n = 0; n < e.length; n++) if (!t[n] || e[n].id() !== t[n].id()) return !1;
	return !0;
}, removeDuplicates = function(e) {
	for (var t = 0; t < e.length; t++) for (var n = 0; n < e.length; n++) t != n && isDuplicate(e[t], e[n]) && e.splice(n, 1);
	return e;
}, markovClustering = function(e) {
	for (var t = this.nodes(), n = this.edges(), r = this.cy(), a = setOptions$3(e), o = {}, s = 0; s < t.length; s++) o[t[s].id()] = s;
	for (var c = t.length, l = c * c, u = Array(l), d, f = 0; f < l; f++) u[f] = 0;
	for (var m = 0; m < n.length; m++) {
		var h = n[m], g = o[h.source().id()], _ = o[h.target().id()], v = getSimilarity$1(h, a.attributes);
		u[g * c + _] += v, u[_ * c + g] += v;
	}
	addLoops(u, c, a.multFactor), normalize(u, c);
	for (var b = !0, S = 0; b && S < a.maxIterations;) b = !1, d = expand(u, c, a.expandFactor), u = inflate(d, c, a.inflateFactor), hasConverged(u, d, l, 4) || (b = !0), S++;
	var C = assign$2(u, c, t, r);
	return C = removeDuplicates(C), C;
}, markovClustering$1 = {
	markovClustering,
	mcl: markovClustering
}, identity$1 = function(e) {
	return e;
}, absDiff = function(e, t) {
	return Math.abs(t - e);
}, addAbsDiff = function(e, t, n) {
	return e + absDiff(t, n);
}, addSquaredDiff = function(e, t, n) {
	return e + (n - t) ** 2;
}, sqrt = function(e) {
	return Math.sqrt(e);
}, maxAbsDiff = function(e, t, n) {
	return Math.max(e, absDiff(t, n));
}, getDistance = function(e, t, n, r, a) {
	for (var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : identity$1, s = r, c, l, u = 0; u < e; u++) c = t(u), l = n(u), s = a(s, c, l);
	return o(s);
}, distances = {
	euclidean: function(e, t, n) {
		return e >= 2 ? getDistance(e, t, n, 0, addSquaredDiff, sqrt) : getDistance(e, t, n, 0, addAbsDiff);
	},
	squaredEuclidean: function(e, t, n) {
		return getDistance(e, t, n, 0, addSquaredDiff);
	},
	manhattan: function(e, t, n) {
		return getDistance(e, t, n, 0, addAbsDiff);
	},
	max: function(e, t, n) {
		return getDistance(e, t, n, -Infinity, maxAbsDiff);
	}
};
distances["squared-euclidean"] = distances.squaredEuclidean, distances.squaredeuclidean = distances.squaredEuclidean;
function clusteringDistance(e, t, n, r, a, o) {
	var s = fn$6(e) ? e : distances[e] || distances.euclidean;
	return t === 0 && fn$6(e) ? s(a, o) : s(t, n, r, a, o);
}
var defaults$b = defaults$g({
	k: 2,
	m: 2,
	sensitivityThreshold: 1e-4,
	distance: "euclidean",
	maxIterations: 10,
	attributes: [],
	testMode: !1,
	testCentroids: null
}), setOptions$2 = function(e) {
	return defaults$b(e);
}, getDist = function(e, t, n, r, a) {
	var o = a === "kMedoids" ? function(e) {
		return r[e](n);
	} : function(e) {
		return n[e];
	}, s = function(e) {
		return r[e](t);
	}, c = n, l = t;
	return clusteringDistance(e, r.length, o, s, c, l);
}, randomCentroids = function(e, t, n) {
	for (var r = n.length, a = Array(r), o = Array(r), s = Array(t), c = null, l = 0; l < r; l++) a[l] = e.min(n[l]).value, o[l] = e.max(n[l]).value;
	for (var u = 0; u < t; u++) {
		c = [];
		for (var d = 0; d < r; d++) c[d] = Math.random() * (o[d] - a[d]) + a[d];
		s[u] = c;
	}
	return s;
}, classify = function(e, t, n, r, a) {
	for (var o = Infinity, s = 0, c = 0; c < t.length; c++) {
		var l = getDist(n, e, t[c], r, a);
		l < o && (o = l, s = c);
	}
	return s;
}, buildCluster = function(e, t, n) {
	for (var r = [], a = null, o = 0; o < t.length; o++) a = t[o], n[a.id()] === e && r.push(a);
	return r;
}, haveValuesConverged = function(e, t, n) {
	return Math.abs(t - e) <= n;
}, haveMatricesConverged = function(e, t, n) {
	for (var r = 0; r < e.length; r++) for (var a = 0; a < e[r].length; a++) if (Math.abs(e[r][a] - t[r][a]) > n) return !1;
	return !0;
}, seenBefore = function(e, t, n) {
	for (var r = 0; r < n; r++) if (e === t[r]) return !0;
	return !1;
}, randomMedoids = function(e, t) {
	var n = Array(t);
	if (e.length < 50) for (var r = 0; r < t; r++) {
		for (var a = e[Math.floor(Math.random() * e.length)]; seenBefore(a, n, r);) a = e[Math.floor(Math.random() * e.length)];
		n[r] = a;
	}
	else for (var o = 0; o < t; o++) n[o] = e[Math.floor(Math.random() * e.length)];
	return n;
}, findCost = function(e, t, n) {
	for (var r = 0, a = 0; a < t.length; a++) r += getDist("manhattan", t[a], e, n, "kMedoids");
	return r;
}, kMeans = function(e) {
	var t = this.cy(), n = this.nodes(), r = null, a = setOptions$2(e), o = Array(a.k), s = {}, c;
	a.testMode ? typeof a.testCentroids == "number" ? (a.testCentroids, c = randomCentroids(n, a.k, a.attributes)) : c = _typeof(a.testCentroids) === "object" ? a.testCentroids : randomCentroids(n, a.k, a.attributes) : c = randomCentroids(n, a.k, a.attributes);
	for (var l = !0, u = 0; l && u < a.maxIterations;) {
		for (var d = 0; d < n.length; d++) r = n[d], s[r.id()] = classify(r, c, a.distance, a.attributes, "kMeans");
		l = !1;
		for (var f = 0; f < a.k; f++) {
			var m = buildCluster(f, n, s);
			if (m.length !== 0) {
				for (var h = a.attributes.length, g = c[f], _ = Array(h), v = Array(h), b = 0; b < h; b++) {
					v[b] = 0;
					for (var C = 0; C < m.length; C++) r = m[C], v[b] += a.attributes[b](r);
					_[b] = v[b] / m.length, haveValuesConverged(_[b], g[b], a.sensitivityThreshold) || (l = !0);
				}
				c[f] = _, o[f] = t.collection(m);
			}
		}
		u++;
	}
	return o;
}, kMedoids = function(e) {
	var t = this.cy(), n = this.nodes(), r = null, a = setOptions$2(e), o = Array(a.k), s, c = {}, l, u = Array(a.k);
	a.testMode ? typeof a.testCentroids == "number" || (s = _typeof(a.testCentroids) === "object" ? a.testCentroids : randomMedoids(n, a.k)) : s = randomMedoids(n, a.k);
	for (var d = !0, f = 0; d && f < a.maxIterations;) {
		for (var m = 0; m < n.length; m++) r = n[m], c[r.id()] = classify(r, s, a.distance, a.attributes, "kMedoids");
		d = !1;
		for (var h = 0; h < s.length; h++) {
			var g = buildCluster(h, n, c);
			if (g.length !== 0) {
				u[h] = findCost(s[h], g, a.attributes);
				for (var _ = 0; _ < g.length; _++) l = findCost(g[_], g, a.attributes), l < u[h] && (u[h] = l, s[h] = g[_], d = !0);
				o[h] = t.collection(g);
			}
		}
		f++;
	}
	return o;
}, updateCentroids = function(e, t, n, r, a) {
	for (var o, s, c = 0; c < t.length; c++) for (var l = 0; l < e.length; l++) r[c][l] = n[c][l] ** +a.m;
	for (var u = 0; u < e.length; u++) for (var d = 0; d < a.attributes.length; d++) {
		o = 0, s = 0;
		for (var f = 0; f < t.length; f++) o += r[f][u] * a.attributes[d](t[f]), s += r[f][u];
		e[u][d] = o / s;
	}
}, updateMembership = function(e, t, n, r, a) {
	for (var o = 0; o < e.length; o++) t[o] = e[o].slice();
	for (var s, c, l, u = 2 / (a.m - 1), d = 0; d < n.length; d++) for (var f = 0; f < r.length; f++) {
		s = 0;
		for (var m = 0; m < n.length; m++) c = getDist(a.distance, r[f], n[d], a.attributes, "cmeans"), l = getDist(a.distance, r[f], n[m], a.attributes, "cmeans"), s += (c / l) ** +u;
		e[f][d] = 1 / s;
	}
}, assign$1 = function(e, t, n, r) {
	for (var a = Array(n.k), o = 0; o < a.length; o++) a[o] = [];
	for (var s, c, l = 0; l < t.length; l++) {
		s = -Infinity, c = -1;
		for (var u = 0; u < t[0].length; u++) t[l][u] > s && (s = t[l][u], c = u);
		a[c].push(e[l]);
	}
	for (var d = 0; d < a.length; d++) a[d] = r.collection(a[d]);
	return a;
}, fuzzyCMeans = function(e) {
	for (var t = this.cy(), n = this.nodes(), r = setOptions$2(e), a, o, s, c = Array(n.length), l, u = 0; u < n.length; u++) c[u] = Array(r.k);
	s = Array(n.length);
	for (var d = 0; d < n.length; d++) s[d] = Array(r.k);
	for (var f = 0; f < n.length; f++) {
		for (var m = 0, h = 0; h < r.k; h++) s[f][h] = Math.random(), m += s[f][h];
		for (var g = 0; g < r.k; g++) s[f][g] = s[f][g] / m;
	}
	o = Array(r.k);
	for (var _ = 0; _ < r.k; _++) o[_] = Array(r.attributes.length);
	l = Array(n.length);
	for (var v = 0; v < n.length; v++) l[v] = Array(r.k);
	for (var b = !0, S = 0; b && S < r.maxIterations;) b = !1, updateCentroids(o, n, s, l, r), updateMembership(s, c, o, n, r), haveMatricesConverged(s, c, r.sensitivityThreshold) || (b = !0), S++;
	return a = assign$1(n, s, r, t), {
		clusters: a,
		degreeOfMembership: s
	};
}, kClustering = {
	kMeans,
	kMedoids,
	fuzzyCMeans,
	fcm: fuzzyCMeans
}, defaults$a = defaults$g({
	distance: "euclidean",
	linkage: "min",
	mode: "threshold",
	threshold: Infinity,
	addDendrogram: !1,
	dendrogramDepth: 0,
	attributes: []
}), linkageAliases = {
	single: "min",
	complete: "max"
}, setOptions$1 = function(e) {
	var t = defaults$a(e), n = linkageAliases[t.linkage];
	return n != null && (t.linkage = n), t;
}, mergeClosest = function(e, t, n, r, a) {
	for (var o = 0, s = Infinity, c, l = a.attributes, u = function(e, t) {
		return clusteringDistance(a.distance, l.length, function(t) {
			return l[t](e);
		}, function(e) {
			return l[e](t);
		}, e, t);
	}, d = 0; d < e.length; d++) {
		var f = e[d].key, m = n[f][r[f]];
		m < s && (o = f, s = m);
	}
	if (a.mode === "threshold" && s >= a.threshold || a.mode === "dendrogram" && e.length === 1) return !1;
	var h = t[o], g = t[r[o]], _ = a.mode === "dendrogram" ? {
		left: h,
		right: g,
		key: h.key
	} : {
		value: h.value.concat(g.value),
		key: h.key
	};
	e[h.index] = _, e.splice(g.index, 1), t[h.key] = _;
	for (var v = 0; v < e.length; v++) {
		var b = e[v];
		h.key === b.key ? c = Infinity : a.linkage === "min" ? (c = n[h.key][b.key], n[h.key][b.key] > n[g.key][b.key] && (c = n[g.key][b.key])) : a.linkage === "max" ? (c = n[h.key][b.key], n[h.key][b.key] < n[g.key][b.key] && (c = n[g.key][b.key])) : c = a.linkage === "mean" ? (n[h.key][b.key] * h.size + n[g.key][b.key] * g.size) / (h.size + g.size) : a.mode === "dendrogram" ? u(b.value, h.value) : u(b.value[0], h.value[0]), n[h.key][b.key] = n[b.key][h.key] = c;
	}
	for (var S = 0; S < e.length; S++) {
		var C = e[S].key;
		if (r[C] === h.key || r[C] === g.key) {
			for (var w = C, T = 0; T < e.length; T++) {
				var E = e[T].key;
				n[C][E] < n[C][w] && (w = E);
			}
			r[C] = w;
		}
		e[S].index = S;
	}
	return h.key = g.key = h.index = g.index = null, !0;
}, _getAllChildren = function(e, t, n) {
	e && (e.value ? t.push(e.value) : (e.left && _getAllChildren(e.left, t), e.right && _getAllChildren(e.right, t)));
}, _buildDendrogram = function(e, t) {
	if (!e) return "";
	if (e.left && e.right) {
		var n = _buildDendrogram(e.left, t), r = _buildDendrogram(e.right, t), a = t.add({
			group: "nodes",
			data: { id: n + "," + r }
		});
		return t.add({
			group: "edges",
			data: {
				source: n,
				target: a.id()
			}
		}), t.add({
			group: "edges",
			data: {
				source: r,
				target: a.id()
			}
		}), a.id();
	} else if (e.value) return e.value.id();
}, _buildClustersFromTree = function(e, t, n) {
	if (!e) return [];
	var r = [], a = [], o = [];
	return t === 0 ? (e.left && _getAllChildren(e.left, r), e.right && _getAllChildren(e.right, a), o = r.concat(a), [n.collection(o)]) : t === 1 ? e.value ? [n.collection(e.value)] : (e.left && _getAllChildren(e.left, r), e.right && _getAllChildren(e.right, a), [n.collection(r), n.collection(a)]) : e.value ? [n.collection(e.value)] : (e.left && (r = _buildClustersFromTree(e.left, t - 1, n)), e.right && (a = _buildClustersFromTree(e.right, t - 1, n)), r.concat(a));
}, hierarchicalClustering = function(e) {
	for (var t = this.cy(), n = this.nodes(), r = setOptions$1(e), a = r.attributes, o = function(e, t) {
		return clusteringDistance(r.distance, a.length, function(t) {
			return a[t](e);
		}, function(e) {
			return a[e](t);
		}, e, t);
	}, s = [], c = [], l = [], u = [], d = 0; d < n.length; d++) {
		var f = {
			value: r.mode === "dendrogram" ? n[d] : [n[d]],
			key: d,
			index: d
		};
		s[d] = f, u[d] = f, c[d] = [], l[d] = 0;
	}
	for (var m = 0; m < s.length; m++) for (var h = 0; h <= m; h++) {
		var g = void 0;
		g = r.mode === "dendrogram" ? m === h ? Infinity : o(s[m].value, s[h].value) : m === h ? Infinity : o(s[m].value[0], s[h].value[0]), c[m][h] = g, c[h][m] = g, g < c[m][l[m]] && (l[m] = h);
	}
	for (var _ = mergeClosest(s, u, c, l, r); _;) _ = mergeClosest(s, u, c, l, r);
	var v;
	return r.mode === "dendrogram" ? (v = _buildClustersFromTree(s[0], r.dendrogramDepth, t), r.addDendrogram && _buildDendrogram(s[0], t)) : (v = Array(s.length), s.forEach(function(e, n) {
		e.key = e.index = null, v[n] = t.collection(e.value);
	})), v;
}, hierarchicalClustering$1 = {
	hierarchicalClustering,
	hca: hierarchicalClustering
}, defaults$9 = defaults$g({
	distance: "euclidean",
	preference: "median",
	damping: .8,
	maxIterations: 1e3,
	minIterations: 100,
	attributes: []
}), setOptions = function(e) {
	var t = e.damping, n = e.preference;
	.5 <= t && t < 1 || error(`Damping must range on [0.5, 1).  Got: ${t}`);
	var r = [
		"median",
		"mean",
		"min",
		"max"
	];
	return r.some(function(e) {
		return e === n;
	}) || number$1(n) || error(`Preference must be one of [${r.map(function(e) {
		return `'${e}'`;
	}).join(", ")}] or a number.  Got: ${n}`), defaults$9(e);
}, getSimilarity = function(e, t, n, r) {
	var a = function(e, t) {
		return r[t](e);
	};
	return -clusteringDistance(e, r.length, function(e) {
		return a(t, e);
	}, function(e) {
		return a(n, e);
	}, t, n);
}, getPreference = function(e, t) {
	var n = null;
	return n = t === "median" ? median(e) : t === "mean" ? mean(e) : t === "min" ? min(e) : t === "max" ? max(e) : t, n;
}, findExemplars = function(e, t, n) {
	for (var r = [], a = 0; a < e; a++) t[a * e + a] + n[a * e + a] > 0 && r.push(a);
	return r;
}, assignClusters = function(e, t, n) {
	for (var r = [], a = 0; a < e; a++) {
		for (var o = -1, s = -Infinity, c = 0; c < n.length; c++) {
			var l = n[c];
			t[a * e + l] > s && (o = l, s = t[a * e + l]);
		}
		o > 0 && r.push(o);
	}
	for (var u = 0; u < n.length; u++) r[n[u]] = n[u];
	return r;
}, assign = function(e, t, n) {
	for (var r = assignClusters(e, t, n), a = 0; a < n.length; a++) {
		for (var o = [], s = 0; s < r.length; s++) r[s] === n[a] && o.push(s);
		for (var c = -1, l = -Infinity, u = 0; u < o.length; u++) {
			for (var d = 0, f = 0; f < o.length; f++) d += t[o[f] * e + o[u]];
			d > l && (c = u, l = d);
		}
		n[a] = o[c];
	}
	return r = assignClusters(e, t, n), r;
}, affinityPropagation = function(e) {
	for (var t = this.cy(), n = this.nodes(), r = setOptions(e), a = {}, o = 0; o < n.length; o++) a[n[o].id()] = o;
	for (var s = n.length, c = s * s, l = Array(c), u, d, f, m = 0; m < c; m++) l[m] = -Infinity;
	for (var h = 0; h < s; h++) for (var g = 0; g < s; g++) h !== g && (l[h * s + g] = getSimilarity(r.distance, n[h], n[g], r.attributes));
	u = getPreference(l, r.preference);
	for (var _ = 0; _ < s; _++) l[_ * s + _] = u;
	d = Array(c);
	for (var v = 0; v < c; v++) d[v] = 0;
	f = Array(c);
	for (var b = 0; b < c; b++) f[b] = 0;
	for (var S = Array(s), C = Array(s), w = Array(s), T = 0; T < s; T++) S[T] = 0, C[T] = 0, w[T] = 0;
	for (var E = Array(s * r.minIterations), D = 0; D < E.length; D++) E[D] = 0;
	var O;
	for (O = 0; O < r.maxIterations; O++) {
		for (var k = 0; k < s; k++) {
			for (var A = -Infinity, j = -Infinity, M = -1, N = 0, P = 0; P < s; P++) S[P] = d[k * s + P], N = f[k * s + P] + l[k * s + P], N >= A ? (j = A, A = N, M = P) : N > j && (j = N);
			for (var F = 0; F < s; F++) d[k * s + F] = (1 - r.damping) * (l[k * s + F] - A) + r.damping * S[F];
			d[k * s + M] = (1 - r.damping) * (l[k * s + M] - j) + r.damping * S[M];
		}
		for (var I = 0; I < s; I++) {
			for (var L = 0, R = 0; R < s; R++) S[R] = f[R * s + I], C[R] = Math.max(0, d[R * s + I]), L += C[R];
			L -= C[I], C[I] = d[I * s + I], L += C[I];
			for (var z = 0; z < s; z++) f[z * s + I] = (1 - r.damping) * Math.min(0, L - C[z]) + r.damping * S[z];
			f[I * s + I] = (1 - r.damping) * (L - C[I]) + r.damping * S[I];
		}
		for (var B = 0, V = 0; V < s; V++) {
			var H = f[V * s + V] + d[V * s + V] > 0 ? 1 : 0;
			E[O % r.minIterations * s + V] = H, B += H;
		}
		if (B > 0 && (O >= r.minIterations - 1 || O == r.maxIterations - 1)) {
			for (var U = 0, W = 0; W < s; W++) {
				w[W] = 0;
				for (var G = 0; G < r.minIterations; G++) w[W] += E[G * s + W];
				(w[W] === 0 || w[W] === r.minIterations) && U++;
			}
			if (U === s) break;
		}
	}
	for (var q = findExemplars(s, d, f), J = assign(s, l, q), Y = {}, X = 0; X < q.length; X++) Y[q[X]] = [];
	for (var Z = 0; Z < n.length; Z++) {
		var Q = J[a[n[Z].id()]];
		Q != null && Y[Q].push(n[Z]);
	}
	for (var $ = Array(q.length), kh = 0; kh < q.length; kh++) $[kh] = t.collection(Y[q[kh]]);
	return $;
}, affinityPropagation$1 = {
	affinityPropagation,
	ap: affinityPropagation
}, hierholzerDefaults = defaults$g({
	root: void 0,
	directed: !1
}), elesfn$k = { hierholzer: function(e) {
	if (!plainObject(e)) {
		var t = arguments;
		e = {
			root: t[0],
			directed: t[1]
		};
	}
	var n = hierholzerDefaults(e), r = n.root, a = n.directed, o = this, s = !1, c, l, u;
	r && (u = string(r) ? this.filter(r)[0].id() : r[0].id());
	var d = {}, f = {};
	a ? o.forEach(function(e) {
		var t = e.id();
		if (e.isNode()) {
			var n = e.indegree(!0), r = e.outdegree(!0), a = n - r, o = r - n;
			a == 1 ? c ? s = !0 : c = t : o == 1 ? l ? s = !0 : l = t : (o > 1 || a > 1) && (s = !0), d[t] = [], e.outgoers().forEach(function(e) {
				e.isEdge() && d[t].push(e.id());
			});
		} else f[t] = [void 0, e.target().id()];
	}) : o.forEach(function(e) {
		var t = e.id();
		e.isNode() ? (e.degree(!0) % 2 && (c ? l ? s = !0 : l = t : c = t), d[t] = [], e.connectedEdges().forEach(function(e) {
			return d[t].push(e.id());
		})) : f[t] = [e.source().id(), e.target().id()];
	});
	var m = {
		found: !1,
		trail: void 0
	};
	if (s) return m;
	if (l && c) if (a) {
		if (u && l != u) return m;
		u = l;
	} else if (u && l != u && c != u) return m;
	else u ||= l;
	else u ||= o[0].id();
	var h = function(e) {
		for (var t = e, n = [e], r, o, s; d[t].length;) r = d[t].shift(), o = f[r][0], s = f[r][1], t == s ? !a && t != o && (d[o] = d[o].filter(function(e) {
			return e != r;
		}), t = o) : (d[s] = d[s].filter(function(e) {
			return e != r;
		}), t = s), n.unshift(r), n.unshift(t);
		return n;
	}, g = [], _ = [];
	for (_ = h(u); _.length != 1;) d[_[0]].length == 0 ? (g.unshift(o.getElementById(_.shift())), g.unshift(o.getElementById(_.shift()))) : _ = h(_.shift()).concat(_);
	for (var v in g.unshift(o.getElementById(_.shift())), d) if (d[v].length) return m;
	return m.found = !0, m.trail = this.spawn(g, !0), m;
} }, hopcroftTarjanBiconnected = function() {
	var e = this, t = {}, n = 0, r = 0, a = [], o = [], s = {}, c = function(n, r) {
		for (var s = o.length - 1, c = [], l = e.spawn(); o[s].x != n || o[s].y != r;) c.push(o.pop().edge), s--;
		c.push(o.pop().edge), c.forEach(function(n) {
			var r = n.connectedNodes().intersection(e);
			l.merge(n), r.forEach(function(n) {
				var r = n.id(), a = n.connectedEdges().intersection(e);
				l.merge(n), t[r].cutVertex ? l.merge(a.filter(function(e) {
					return e.isLoop();
				})) : l.merge(a);
			});
		}), a.push(l);
	}, l = function(u, d, f) {
		u === f && (r += 1), t[d] = {
			id: n,
			low: n++,
			cutVertex: !1
		};
		var m = e.getElementById(d).connectedEdges().intersection(e);
		if (m.size() === 0) a.push(e.spawn(e.getElementById(d)));
		else {
			var h, g, _, v;
			m.forEach(function(e) {
				h = e.source().id(), g = e.target().id(), _ = h === d ? g : h, _ !== f && (v = e.id(), s[v] || (s[v] = !0, o.push({
					x: d,
					y: _,
					edge: e
				})), _ in t ? t[d].low = Math.min(t[d].low, t[_].id) : (l(u, _, d), t[d].low = Math.min(t[d].low, t[_].low), t[d].id <= t[_].low && (t[d].cutVertex = !0, c(d, _))));
			});
		}
	};
	e.forEach(function(e) {
		if (e.isNode()) {
			var n = e.id();
			n in t || (r = 0, l(n, n), t[n].cutVertex = r > 1);
		}
	});
	var u = Object.keys(t).filter(function(e) {
		return t[e].cutVertex;
	}).map(function(t) {
		return e.getElementById(t);
	});
	return {
		cut: e.spawn(u),
		components: a
	};
}, hopcroftTarjanBiconnected$1 = {
	hopcroftTarjanBiconnected,
	htbc: hopcroftTarjanBiconnected,
	htb: hopcroftTarjanBiconnected,
	hopcroftTarjanBiconnectedComponents: hopcroftTarjanBiconnected
}, tarjanStronglyConnected = function() {
	var e = this, t = {}, n = 0, r = [], a = [], o = e.spawn(e), s = function(c) {
		if (a.push(c), t[c] = {
			index: n,
			low: n++,
			explored: !1
		}, e.getElementById(c).connectedEdges().intersection(e).forEach(function(e) {
			var n = e.target().id();
			n !== c && (n in t || s(n), t[n].explored || (t[c].low = Math.min(t[c].low, t[n].low)));
		}), t[c].index === t[c].low) {
			for (var l = e.spawn();;) {
				var u = a.pop();
				if (l.merge(e.getElementById(u)), t[u].low = t[c].index, t[u].explored = !0, u === c) break;
			}
			var d = l.edgesWith(l), f = l.merge(d);
			r.push(f), o = o.difference(f);
		}
	};
	return e.forEach(function(e) {
		if (e.isNode()) {
			var n = e.id();
			n in t || s(n);
		}
	}), {
		cut: o,
		components: r
	};
}, tarjanStronglyConnected$1 = {
	tarjanStronglyConnected,
	tsc: tarjanStronglyConnected,
	tscc: tarjanStronglyConnected,
	tarjanStronglyConnectedComponents: tarjanStronglyConnected
}, elesfn$j = {};
[
	elesfn$v,
	elesfn$u,
	elesfn$t,
	elesfn$s,
	elesfn$r,
	elesfn$q,
	elesfn$p,
	elesfn$o,
	elesfn$n,
	elesfn$m,
	elesfn$l,
	markovClustering$1,
	kClustering,
	hierarchicalClustering$1,
	affinityPropagation$1,
	elesfn$k,
	hopcroftTarjanBiconnected$1,
	tarjanStronglyConnected$1
].forEach(function(e) {
	extend(elesfn$j, e);
});
/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/
var STATE_PENDING = 0, STATE_FULFILLED = 1, STATE_REJECTED = 2, _api = function(e) {
	if (!(this instanceof _api)) return new _api(e);
	this.id = "Thenable/1.0.7", this.state = STATE_PENDING, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = { then: this.then.bind(this) }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
_api.prototype = {
	fulfill: function(e) {
		return deliver(this, STATE_FULFILLED, "fulfillValue", e);
	},
	reject: function(e) {
		return deliver(this, STATE_REJECTED, "rejectReason", e);
	},
	then: function(e, t) {
		var n = this, r = new _api();
		return n.onFulfilled.push(resolver(e, r, "fulfill")), n.onRejected.push(resolver(t, r, "reject")), execute(n), r.proxy;
	}
};
var deliver = function(e, t, n, r) {
	return e.state === STATE_PENDING && (e.state = t, e[n] = r, execute(e)), e;
}, execute = function(e) {
	e.state === STATE_FULFILLED ? execute_handlers(e, "onFulfilled", e.fulfillValue) : e.state === STATE_REJECTED && execute_handlers(e, "onRejected", e.rejectReason);
}, execute_handlers = function(e, t, n) {
	if (e[t].length !== 0) {
		var r = e[t];
		e[t] = [];
		var a = function() {
			for (var e = 0; e < r.length; e++) r[e](n);
		};
		typeof setImmediate == "function" ? setImmediate(a) : setTimeout(a, 0);
	}
}, resolver = function(e, t, n) {
	return function(r) {
		if (typeof e != "function") t[n].call(t, r);
		else {
			var a;
			try {
				a = e(r);
			} catch (e) {
				t.reject(e);
				return;
			}
			_resolve(t, a);
		}
	};
}, _resolve = function(e, t) {
	if (e === t || e.proxy === t) {
		e.reject(/* @__PURE__ */ TypeError("cannot resolve promise with itself"));
		return;
	}
	var n;
	if (_typeof(t) === "object" && t !== null || typeof t == "function") try {
		n = t.then;
	} catch (t) {
		e.reject(t);
		return;
	}
	if (typeof n == "function") {
		var r = !1;
		try {
			n.call(t, function(n) {
				r || (r = !0, n === t ? e.reject(/* @__PURE__ */ TypeError("circular thenable chain")) : _resolve(e, n));
			}, function(t) {
				r || (r = !0, e.reject(t));
			});
		} catch (t) {
			r || e.reject(t);
		}
		return;
	}
	e.fulfill(t);
};
_api.all = function(e) {
	return new _api(function(t, n) {
		for (var r = Array(e.length), a = 0, o = function(n, o) {
			r[n] = o, a++, a === e.length && t(r);
		}, s = 0; s < e.length; s++) (function(t) {
			var r = e[t];
			r != null && r.then != null ? r.then(function(e) {
				o(t, e);
			}, function(e) {
				n(e);
			}) : o(t, r);
		})(s);
	});
}, _api.resolve = function(e) {
	return new _api(function(t, n) {
		t(e);
	});
}, _api.reject = function(e) {
	return new _api(function(t, n) {
		n(e);
	});
};
var Promise$1 = typeof Promise < "u" ? Promise : _api, Animation = function(e, t, n) {
	var r = core(e), a = !r, o = this._private = extend({ duration: 1e3 }, t, n);
	if (o.target = e, o.style = o.style || o.css, o.started = !1, o.playing = !1, o.hooked = !1, o.applying = !1, o.progress = 0, o.completes = [], o.frames = [], o.complete && fn$6(o.complete) && o.completes.push(o.complete), a) {
		var s = e.position();
		o.startPosition = o.startPosition || {
			x: s.x,
			y: s.y
		}, o.startStyle = o.startStyle || e.cy().style().getAnimationStartStyle(e, o.style);
	}
	if (r) {
		var c = e.pan();
		o.startPan = {
			x: c.x,
			y: c.y
		}, o.startZoom = e.zoom();
	}
	this.length = 1, this[0] = this;
}, anifn = Animation.prototype;
extend(anifn, {
	instanceString: function() {
		return "animation";
	},
	hook: function() {
		var e = this._private;
		if (!e.hooked) {
			var t, n = e.target._private.animation;
			t = e.queue ? n.queue : n.current, t.push(this), elementOrCollection(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
		}
		return this;
	},
	play: function() {
		var e = this._private;
		return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
	},
	playing: function() {
		return this._private.playing;
	},
	apply: function() {
		var e = this._private;
		return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
	},
	applying: function() {
		return this._private.applying;
	},
	pause: function() {
		var e = this._private;
		return e.playing = !1, e.started = !1, this;
	},
	stop: function() {
		var e = this._private;
		return e.playing = !1, e.started = !1, e.stopped = !0, this;
	},
	rewind: function() {
		return this.progress(0);
	},
	fastforward: function() {
		return this.progress(1);
	},
	time: function(e) {
		var t = this._private;
		return e === void 0 ? t.progress * t.duration : this.progress(e / t.duration);
	},
	progress: function(e) {
		var t = this._private, n = t.playing;
		return e === void 0 ? t.progress : (n && this.pause(), t.progress = e, t.started = !1, n && this.play(), this);
	},
	completed: function() {
		return this._private.progress === 1;
	},
	reverse: function() {
		var e = this._private, t = e.playing;
		t && this.pause(), e.progress = 1 - e.progress, e.started = !1;
		var n = function(t, n) {
			var r = e[t];
			r != null && (e[t] = e[n], e[n] = r);
		};
		if (n("zoom", "startZoom"), n("pan", "startPan"), n("position", "startPosition"), e.style) for (var r = 0; r < e.style.length; r++) {
			var a = e.style[r], o = a.name, s = e.startStyle[o];
			e.startStyle[o] = a, e.style[r] = s;
		}
		return t && this.play(), this;
	},
	promise: function(e) {
		var t = this._private, n;
		switch (e) {
			case "frame":
				n = t.frames;
				break;
			default:
			case "complete":
			case "completed": n = t.completes;
		}
		return new Promise$1(function(e, t) {
			n.push(function() {
				e();
			});
		});
	}
}), anifn.complete = anifn.completed, anifn.run = anifn.play, anifn.running = anifn.playing;
var define$3 = {
	animated: function() {
		return function() {
			var e = this, t = e.length === void 0 ? [e] : e;
			if (!(this._private.cy || this).styleEnabled()) return !1;
			var n = t[0];
			if (n) return n._private.animation.current.length > 0;
		};
	},
	clearQueue: function() {
		return function() {
			var e = this, t = e.length === void 0 ? [e] : e;
			if (!(this._private.cy || this).styleEnabled()) return this;
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r._private.animation.queue = [];
			}
			return this;
		};
	},
	delay: function() {
		return function(e, t) {
			return (this._private.cy || this).styleEnabled() ? this.animate({
				delay: e,
				duration: e,
				complete: t
			}) : this;
		};
	},
	delayAnimation: function() {
		return function(e, t) {
			return (this._private.cy || this).styleEnabled() ? this.animation({
				delay: e,
				duration: e,
				complete: t
			}) : this;
		};
	},
	animation: function() {
		return function(e, t) {
			var n = this, r = n.length !== void 0, a = r ? n : [n], o = this._private.cy || this, s = !r, c = !s;
			if (!o.styleEnabled()) return this;
			var l = o.style();
			if (e = extend({}, e, t), Object.keys(e).length === 0) return new Animation(a[0], e);
			switch (e.duration === void 0 && (e.duration = 400), e.duration) {
				case "slow":
					e.duration = 600;
					break;
				case "fast":
					e.duration = 200;
					break;
			}
			if (c && (e.style = l.getPropsList(e.style || e.css), e.css = void 0), c && e.renderedPosition != null) {
				var u = e.renderedPosition, d = o.pan();
				e.position = renderedToModelPosition(u, o.zoom(), d);
			}
			if (s && e.panBy != null) {
				var f = e.panBy, m = o.pan();
				e.pan = {
					x: m.x + f.x,
					y: m.y + f.y
				};
			}
			var h = e.center || e.centre;
			if (s && h != null) {
				var g = o.getCenterPan(h.eles, e.zoom);
				g != null && (e.pan = g);
			}
			if (s && e.fit != null) {
				var _ = e.fit, v = o.getFitViewport(_.eles || _.boundingBox, _.padding);
				v != null && (e.pan = v.pan, e.zoom = v.zoom);
			}
			if (s && plainObject(e.zoom)) {
				var b = o.getZoomedViewport(e.zoom);
				b == null ? e.zoom = null : (b.zoomed && (e.zoom = b.zoom), b.panned && (e.pan = b.pan));
			}
			return new Animation(a[0], e);
		};
	},
	animate: function() {
		return function(e, t) {
			var n = this, r = n.length === void 0 ? [n] : n;
			if (!(this._private.cy || this).styleEnabled()) return this;
			t && (e = extend({}, e, t));
			for (var a = 0; a < r.length; a++) {
				var o = r[a], s = o.animated() && (e.queue === void 0 || e.queue);
				o.animation(e, s ? { queue: !0 } : void 0).play();
			}
			return this;
		};
	},
	stop: function() {
		return function(e, t) {
			var n = this, r = n.length === void 0 ? [n] : n, a = this._private.cy || this;
			if (!a.styleEnabled()) return this;
			for (var o = 0; o < r.length; o++) {
				for (var s = r[o]._private, c = s.animation.current, l = 0; l < c.length; l++) {
					var u = c[l]._private;
					t && (u.duration = 0);
				}
				e && (s.animation.queue = []), t || (s.animation.current = []);
			}
			return a.notify("draw"), this;
		};
	}
}, isArray_1, hasRequiredIsArray;
function requireIsArray() {
	return hasRequiredIsArray ? isArray_1 : (hasRequiredIsArray = 1, isArray_1 = Array.isArray, isArray_1);
}
var _isKey, hasRequired_isKey;
function require_isKey() {
	if (hasRequired_isKey) return _isKey;
	hasRequired_isKey = 1;
	var e = requireIsArray(), t = requireIsSymbol(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
	function a(a, o) {
		if (e(a)) return !1;
		var s = typeof a;
		return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : r.test(a) || !n.test(a) || o != null && a in Object(o);
	}
	return _isKey = a, _isKey;
}
var isFunction_1, hasRequiredIsFunction;
function requireIsFunction() {
	if (hasRequiredIsFunction) return isFunction_1;
	hasRequiredIsFunction = 1;
	var e = require_baseGetTag(), t = requireIsObject(), n = "[object AsyncFunction]", r = "[object Function]", a = "[object GeneratorFunction]", o = "[object Proxy]";
	function s(s) {
		if (!t(s)) return !1;
		var c = e(s);
		return c == r || c == a || c == n || c == o;
	}
	return isFunction_1 = s, isFunction_1;
}
var _coreJsData, hasRequired_coreJsData;
function require_coreJsData() {
	return hasRequired_coreJsData ? _coreJsData : (hasRequired_coreJsData = 1, _coreJsData = require_root()["__core-js_shared__"], _coreJsData);
}
var _isMasked, hasRequired_isMasked;
function require_isMasked() {
	if (hasRequired_isMasked) return _isMasked;
	hasRequired_isMasked = 1;
	var e = require_coreJsData(), t = function() {
		var t = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
		return t ? "Symbol(src)_1." + t : "";
	}();
	function n(e) {
		return !!t && t in e;
	}
	return _isMasked = n, _isMasked;
}
var _toSource, hasRequired_toSource;
function require_toSource() {
	if (hasRequired_toSource) return _toSource;
	hasRequired_toSource = 1;
	var e = Function.prototype.toString;
	function t(t) {
		if (t != null) {
			try {
				return e.call(t);
			} catch {}
			try {
				return t + "";
			} catch {}
		}
		return "";
	}
	return _toSource = t, _toSource;
}
var _baseIsNative, hasRequired_baseIsNative;
function require_baseIsNative() {
	if (hasRequired_baseIsNative) return _baseIsNative;
	hasRequired_baseIsNative = 1;
	var e = requireIsFunction(), t = require_isMasked(), n = requireIsObject(), r = require_toSource(), a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = Function.prototype, c = Object.prototype, l = s.toString, u = c.hasOwnProperty, d = RegExp("^" + l.call(u).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function f(a) {
		return !n(a) || t(a) ? !1 : (e(a) ? d : o).test(r(a));
	}
	return _baseIsNative = f, _baseIsNative;
}
var _getValue, hasRequired_getValue;
function require_getValue() {
	if (hasRequired_getValue) return _getValue;
	hasRequired_getValue = 1;
	function e(e, t) {
		return e?.[t];
	}
	return _getValue = e, _getValue;
}
var _getNative, hasRequired_getNative;
function require_getNative() {
	if (hasRequired_getNative) return _getNative;
	hasRequired_getNative = 1;
	var e = require_baseIsNative(), t = require_getValue();
	function n(n, r) {
		var a = t(n, r);
		return e(a) ? a : void 0;
	}
	return _getNative = n, _getNative;
}
var _nativeCreate, hasRequired_nativeCreate;
function require_nativeCreate() {
	return hasRequired_nativeCreate ? _nativeCreate : (hasRequired_nativeCreate = 1, _nativeCreate = require_getNative()(Object, "create"), _nativeCreate);
}
var _hashClear, hasRequired_hashClear;
function require_hashClear() {
	if (hasRequired_hashClear) return _hashClear;
	hasRequired_hashClear = 1;
	var e = require_nativeCreate();
	function t() {
		this.__data__ = e ? e(null) : {}, this.size = 0;
	}
	return _hashClear = t, _hashClear;
}
var _hashDelete, hasRequired_hashDelete;
function require_hashDelete() {
	if (hasRequired_hashDelete) return _hashDelete;
	hasRequired_hashDelete = 1;
	function e(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= t ? 1 : 0, t;
	}
	return _hashDelete = e, _hashDelete;
}
var _hashGet, hasRequired_hashGet;
function require_hashGet() {
	if (hasRequired_hashGet) return _hashGet;
	hasRequired_hashGet = 1;
	var e = require_nativeCreate(), t = "__lodash_hash_undefined__", n = Object.prototype.hasOwnProperty;
	function r(r) {
		var a = this.__data__;
		if (e) {
			var o = a[r];
			return o === t ? void 0 : o;
		}
		return n.call(a, r) ? a[r] : void 0;
	}
	return _hashGet = r, _hashGet;
}
var _hashHas, hasRequired_hashHas;
function require_hashHas() {
	if (hasRequired_hashHas) return _hashHas;
	hasRequired_hashHas = 1;
	var e = require_nativeCreate(), t = Object.prototype.hasOwnProperty;
	function n(n) {
		var r = this.__data__;
		return e ? r[n] !== void 0 : t.call(r, n);
	}
	return _hashHas = n, _hashHas;
}
var _hashSet, hasRequired_hashSet;
function require_hashSet() {
	if (hasRequired_hashSet) return _hashSet;
	hasRequired_hashSet = 1;
	var e = require_nativeCreate(), t = "__lodash_hash_undefined__";
	function n(n, r) {
		var a = this.__data__;
		return this.size += this.has(n) ? 0 : 1, a[n] = e && r === void 0 ? t : r, this;
	}
	return _hashSet = n, _hashSet;
}
var _Hash, hasRequired_Hash;
function require_Hash() {
	if (hasRequired_Hash) return _Hash;
	hasRequired_Hash = 1;
	var e = require_hashClear(), t = require_hashDelete(), n = require_hashGet(), r = require_hashHas(), a = require_hashSet();
	function o(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, _Hash = o, _Hash;
}
var _listCacheClear, hasRequired_listCacheClear;
function require_listCacheClear() {
	if (hasRequired_listCacheClear) return _listCacheClear;
	hasRequired_listCacheClear = 1;
	function e() {
		this.__data__ = [], this.size = 0;
	}
	return _listCacheClear = e, _listCacheClear;
}
var eq_1, hasRequiredEq;
function requireEq() {
	if (hasRequiredEq) return eq_1;
	hasRequiredEq = 1;
	function e(e, t) {
		return e === t || e !== e && t !== t;
	}
	return eq_1 = e, eq_1;
}
var _assocIndexOf, hasRequired_assocIndexOf;
function require_assocIndexOf() {
	if (hasRequired_assocIndexOf) return _assocIndexOf;
	hasRequired_assocIndexOf = 1;
	var e = requireEq();
	function t(t, n) {
		for (var r = t.length; r--;) if (e(t[r][0], n)) return r;
		return -1;
	}
	return _assocIndexOf = t, _assocIndexOf;
}
var _listCacheDelete, hasRequired_listCacheDelete;
function require_listCacheDelete() {
	if (hasRequired_listCacheDelete) return _listCacheDelete;
	hasRequired_listCacheDelete = 1;
	var e = require_assocIndexOf(), t = Array.prototype.splice;
	function n(n) {
		var r = this.__data__, a = e(r, n);
		return a < 0 ? !1 : (a == r.length - 1 ? r.pop() : t.call(r, a, 1), --this.size, !0);
	}
	return _listCacheDelete = n, _listCacheDelete;
}
var _listCacheGet, hasRequired_listCacheGet;
function require_listCacheGet() {
	if (hasRequired_listCacheGet) return _listCacheGet;
	hasRequired_listCacheGet = 1;
	var e = require_assocIndexOf();
	function t(t) {
		var n = this.__data__, r = e(n, t);
		return r < 0 ? void 0 : n[r][1];
	}
	return _listCacheGet = t, _listCacheGet;
}
var _listCacheHas, hasRequired_listCacheHas;
function require_listCacheHas() {
	if (hasRequired_listCacheHas) return _listCacheHas;
	hasRequired_listCacheHas = 1;
	var e = require_assocIndexOf();
	function t(t) {
		return e(this.__data__, t) > -1;
	}
	return _listCacheHas = t, _listCacheHas;
}
var _listCacheSet, hasRequired_listCacheSet;
function require_listCacheSet() {
	if (hasRequired_listCacheSet) return _listCacheSet;
	hasRequired_listCacheSet = 1;
	var e = require_assocIndexOf();
	function t(t, n) {
		var r = this.__data__, a = e(r, t);
		return a < 0 ? (++this.size, r.push([t, n])) : r[a][1] = n, this;
	}
	return _listCacheSet = t, _listCacheSet;
}
var _ListCache, hasRequired_ListCache;
function require_ListCache() {
	if (hasRequired_ListCache) return _ListCache;
	hasRequired_ListCache = 1;
	var e = require_listCacheClear(), t = require_listCacheDelete(), n = require_listCacheGet(), r = require_listCacheHas(), a = require_listCacheSet();
	function o(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, _ListCache = o, _ListCache;
}
var _Map, hasRequired_Map;
function require_Map() {
	return hasRequired_Map ? _Map : (hasRequired_Map = 1, _Map = require_getNative()(require_root(), "Map"), _Map);
}
var _mapCacheClear, hasRequired_mapCacheClear;
function require_mapCacheClear() {
	if (hasRequired_mapCacheClear) return _mapCacheClear;
	hasRequired_mapCacheClear = 1;
	var e = require_Hash(), t = require_ListCache(), n = require_Map();
	function r() {
		this.size = 0, this.__data__ = {
			hash: new e(),
			map: new (n || t)(),
			string: new e()
		};
	}
	return _mapCacheClear = r, _mapCacheClear;
}
var _isKeyable, hasRequired_isKeyable;
function require_isKeyable() {
	if (hasRequired_isKeyable) return _isKeyable;
	hasRequired_isKeyable = 1;
	function e(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	return _isKeyable = e, _isKeyable;
}
var _getMapData, hasRequired_getMapData;
function require_getMapData() {
	if (hasRequired_getMapData) return _getMapData;
	hasRequired_getMapData = 1;
	var e = require_isKeyable();
	function t(t, n) {
		var r = t.__data__;
		return e(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
	}
	return _getMapData = t, _getMapData;
}
var _mapCacheDelete, hasRequired_mapCacheDelete;
function require_mapCacheDelete() {
	if (hasRequired_mapCacheDelete) return _mapCacheDelete;
	hasRequired_mapCacheDelete = 1;
	var e = require_getMapData();
	function t(t) {
		var n = e(this, t).delete(t);
		return this.size -= n ? 1 : 0, n;
	}
	return _mapCacheDelete = t, _mapCacheDelete;
}
var _mapCacheGet, hasRequired_mapCacheGet;
function require_mapCacheGet() {
	if (hasRequired_mapCacheGet) return _mapCacheGet;
	hasRequired_mapCacheGet = 1;
	var e = require_getMapData();
	function t(t) {
		return e(this, t).get(t);
	}
	return _mapCacheGet = t, _mapCacheGet;
}
var _mapCacheHas, hasRequired_mapCacheHas;
function require_mapCacheHas() {
	if (hasRequired_mapCacheHas) return _mapCacheHas;
	hasRequired_mapCacheHas = 1;
	var e = require_getMapData();
	function t(t) {
		return e(this, t).has(t);
	}
	return _mapCacheHas = t, _mapCacheHas;
}
var _mapCacheSet, hasRequired_mapCacheSet;
function require_mapCacheSet() {
	if (hasRequired_mapCacheSet) return _mapCacheSet;
	hasRequired_mapCacheSet = 1;
	var e = require_getMapData();
	function t(t, n) {
		var r = e(this, t), a = r.size;
		return r.set(t, n), this.size += r.size == a ? 0 : 1, this;
	}
	return _mapCacheSet = t, _mapCacheSet;
}
var _MapCache, hasRequired_MapCache;
function require_MapCache() {
	if (hasRequired_MapCache) return _MapCache;
	hasRequired_MapCache = 1;
	var e = require_mapCacheClear(), t = require_mapCacheDelete(), n = require_mapCacheGet(), r = require_mapCacheHas(), a = require_mapCacheSet();
	function o(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = a, _MapCache = o, _MapCache;
}
var memoize_1, hasRequiredMemoize;
function requireMemoize() {
	if (hasRequiredMemoize) return memoize_1;
	hasRequiredMemoize = 1;
	var e = require_MapCache(), t = "Expected a function";
	function n(r, a) {
		if (typeof r != "function" || a != null && typeof a != "function") throw TypeError(t);
		var o = function() {
			var e = arguments, t = a ? a.apply(this, e) : e[0], n = o.cache;
			if (n.has(t)) return n.get(t);
			var s = r.apply(this, e);
			return o.cache = n.set(t, s) || n, s;
		};
		return o.cache = new (n.Cache || e)(), o;
	}
	return n.Cache = e, memoize_1 = n, memoize_1;
}
var _memoizeCapped, hasRequired_memoizeCapped;
function require_memoizeCapped() {
	if (hasRequired_memoizeCapped) return _memoizeCapped;
	hasRequired_memoizeCapped = 1;
	var e = requireMemoize(), t = 500;
	function n(n) {
		var r = e(n, function(e) {
			return a.size === t && a.clear(), e;
		}), a = r.cache;
		return r;
	}
	return _memoizeCapped = n, _memoizeCapped;
}
var _stringToPath, hasRequired_stringToPath;
function require_stringToPath() {
	if (hasRequired_stringToPath) return _stringToPath;
	hasRequired_stringToPath = 1;
	var e = require_memoizeCapped(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g;
	return _stringToPath = e(function(e) {
		var r = [];
		return e.charCodeAt(0) === 46 && r.push(""), e.replace(t, function(e, t, a, o) {
			r.push(a ? o.replace(n, "$1") : t || e);
		}), r;
	}), _stringToPath;
}
var _arrayMap, hasRequired_arrayMap;
function require_arrayMap() {
	if (hasRequired_arrayMap) return _arrayMap;
	hasRequired_arrayMap = 1;
	function e(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
		return a;
	}
	return _arrayMap = e, _arrayMap;
}
var _baseToString, hasRequired_baseToString;
function require_baseToString() {
	if (hasRequired_baseToString) return _baseToString;
	hasRequired_baseToString = 1;
	var e = require_Symbol(), t = require_arrayMap(), n = requireIsArray(), r = requireIsSymbol(), a = e ? e.prototype : void 0, o = a ? a.toString : void 0;
	function s(e) {
		if (typeof e == "string") return e;
		if (n(e)) return t(e, s) + "";
		if (r(e)) return o ? o.call(e) : "";
		var a = e + "";
		return a == "0" && 1 / e == -Infinity ? "-0" : a;
	}
	return _baseToString = s, _baseToString;
}
var toString_1, hasRequiredToString;
function requireToString() {
	if (hasRequiredToString) return toString_1;
	hasRequiredToString = 1;
	var e = require_baseToString();
	function t(t) {
		return t == null ? "" : e(t);
	}
	return toString_1 = t, toString_1;
}
var _castPath, hasRequired_castPath;
function require_castPath() {
	if (hasRequired_castPath) return _castPath;
	hasRequired_castPath = 1;
	var e = requireIsArray(), t = require_isKey(), n = require_stringToPath(), r = requireToString();
	function a(a, o) {
		return e(a) ? a : t(a, o) ? [a] : n(r(a));
	}
	return _castPath = a, _castPath;
}
var _toKey, hasRequired_toKey;
function require_toKey() {
	if (hasRequired_toKey) return _toKey;
	hasRequired_toKey = 1;
	var e = requireIsSymbol();
	function t(t) {
		if (typeof t == "string" || e(t)) return t;
		var n = t + "";
		return n == "0" && 1 / t == -Infinity ? "-0" : n;
	}
	return _toKey = t, _toKey;
}
var _baseGet, hasRequired_baseGet;
function require_baseGet() {
	if (hasRequired_baseGet) return _baseGet;
	hasRequired_baseGet = 1;
	var e = require_castPath(), t = require_toKey();
	function n(n, r) {
		r = e(r, n);
		for (var a = 0, o = r.length; n != null && a < o;) n = n[t(r[a++])];
		return a && a == o ? n : void 0;
	}
	return _baseGet = n, _baseGet;
}
var get_1, hasRequiredGet;
function requireGet() {
	if (hasRequiredGet) return get_1;
	hasRequiredGet = 1;
	var e = require_baseGet();
	function t(t, n, r) {
		var a = t == null ? void 0 : e(t, n);
		return a === void 0 ? r : a;
	}
	return get_1 = t, get_1;
}
var get = /* @__PURE__ */ getDefaultExportFromCjs(requireGet()), _defineProperty, hasRequired_defineProperty;
function require_defineProperty() {
	if (hasRequired_defineProperty) return _defineProperty;
	hasRequired_defineProperty = 1;
	var e = require_getNative();
	return _defineProperty = function() {
		try {
			var t = e(Object, "defineProperty");
			return t({}, "", {}), t;
		} catch {}
	}(), _defineProperty;
}
var _baseAssignValue, hasRequired_baseAssignValue;
function require_baseAssignValue() {
	if (hasRequired_baseAssignValue) return _baseAssignValue;
	hasRequired_baseAssignValue = 1;
	var e = require_defineProperty();
	function t(t, n, r) {
		n == "__proto__" && e ? e(t, n, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : t[n] = r;
	}
	return _baseAssignValue = t, _baseAssignValue;
}
var _assignValue, hasRequired_assignValue;
function require_assignValue() {
	if (hasRequired_assignValue) return _assignValue;
	hasRequired_assignValue = 1;
	var e = require_baseAssignValue(), t = requireEq(), n = Object.prototype.hasOwnProperty;
	function r(r, a, o) {
		var s = r[a];
		(!(n.call(r, a) && t(s, o)) || o === void 0 && !(a in r)) && e(r, a, o);
	}
	return _assignValue = r, _assignValue;
}
var _isIndex, hasRequired_isIndex;
function require_isIndex() {
	if (hasRequired_isIndex) return _isIndex;
	hasRequired_isIndex = 1;
	var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
	function n(n, r) {
		var a = typeof n;
		return r ??= e, !!r && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < r;
	}
	return _isIndex = n, _isIndex;
}
var _baseSet, hasRequired_baseSet;
function require_baseSet() {
	if (hasRequired_baseSet) return _baseSet;
	hasRequired_baseSet = 1;
	var e = require_assignValue(), t = require_castPath(), n = require_isIndex(), r = requireIsObject(), a = require_toKey();
	function o(o, s, c, l) {
		if (!r(o)) return o;
		s = t(s, o);
		for (var u = -1, d = s.length, f = d - 1, m = o; m != null && ++u < d;) {
			var h = a(s[u]), g = c;
			if (h === "__proto__" || h === "constructor" || h === "prototype") return o;
			if (u != f) {
				var _ = m[h];
				g = l ? l(_, h, m) : void 0, g === void 0 && (g = r(_) ? _ : n(s[u + 1]) ? [] : {});
			}
			e(m, h, g), m = m[h];
		}
		return o;
	}
	return _baseSet = o, _baseSet;
}
var set_1, hasRequiredSet;
function requireSet() {
	if (hasRequiredSet) return set_1;
	hasRequiredSet = 1;
	var e = require_baseSet();
	function t(t, n, r) {
		return t == null ? t : e(t, n, r);
	}
	return set_1 = t, set_1;
}
var set = /* @__PURE__ */ getDefaultExportFromCjs(requireSet()), _copyArray, hasRequired_copyArray;
function require_copyArray() {
	if (hasRequired_copyArray) return _copyArray;
	hasRequired_copyArray = 1;
	function e(e, t) {
		var n = -1, r = e.length;
		for (t ||= Array(r); ++n < r;) t[n] = e[n];
		return t;
	}
	return _copyArray = e, _copyArray;
}
var toPath_1, hasRequiredToPath;
function requireToPath() {
	if (hasRequiredToPath) return toPath_1;
	hasRequiredToPath = 1;
	var e = require_arrayMap(), t = require_copyArray(), n = requireIsArray(), r = requireIsSymbol(), a = require_stringToPath(), o = require_toKey(), s = requireToString();
	function c(c) {
		return n(c) ? e(c, o) : r(c) ? [c] : t(a(s(c)));
	}
	return toPath_1 = c, toPath_1;
}
var toPath = /* @__PURE__ */ getDefaultExportFromCjs(requireToPath()), define$2 = {
	data: function(e) {
		return e = extend({}, {
			field: "data",
			bindingEvent: "data",
			allowBinding: !1,
			allowSetting: !1,
			allowGetting: !1,
			settingEvent: "data",
			settingTriggersEvent: !1,
			triggerFnName: "trigger",
			immutableKeys: {},
			updateStyle: !1,
			beforeGet: function(e) {},
			beforeSet: function(e, t) {},
			onSet: function(e) {},
			canSet: function(e) {
				return !0;
			}
		}, e), function(t, n) {
			var r = e, a = this, o = a.length !== void 0, s = o ? a : [a], c = o ? a[0] : a;
			if (string(t)) {
				var l = t.indexOf(".") !== -1 && toPath(t);
				if (r.allowGetting && n === void 0) {
					var d;
					return c && (r.beforeGet(c), d = l && c._private[r.field][t] === void 0 ? get(c._private[r.field], l) : c._private[r.field][t]), d;
				} else if (r.allowSetting && n !== void 0 && !r.immutableKeys[t]) {
					var f = _defineProperty$1({}, t, n);
					r.beforeSet(a, f);
					for (var m = 0, h = s.length; m < h; m++) {
						var g = s[m];
						r.canSet(g) && (l && c._private[r.field][t] === void 0 ? set(g._private[r.field], l, n) : g._private[r.field][t] = n);
					}
					r.updateStyle && a.updateStyle(), r.onSet(a), r.settingTriggersEvent && a[r.triggerFnName](r.settingEvent);
				}
			} else if (r.allowSetting && plainObject(t)) {
				var _ = t, v, b, S = Object.keys(_);
				r.beforeSet(a, _);
				for (var C = 0; C < S.length; C++) if (v = S[C], b = _[v], !r.immutableKeys[v]) for (var w = 0; w < s.length; w++) {
					var T = s[w];
					r.canSet(T) && (T._private[r.field][v] = b);
				}
				r.updateStyle && a.updateStyle(), r.onSet(a), r.settingTriggersEvent && a[r.triggerFnName](r.settingEvent);
			} else if (r.allowBinding && fn$6(t)) {
				var E = t;
				a.on(r.bindingEvent, E);
			} else if (r.allowGetting && t === void 0) {
				var D;
				return c && (r.beforeGet(c), D = c._private[r.field]), D;
			}
			return a;
		};
	},
	removeData: function(e) {
		return e = extend({}, {
			field: "data",
			event: "data",
			triggerFnName: "trigger",
			triggerEvent: !1,
			immutableKeys: {}
		}, e), function(t) {
			var n = e, r = this, a = r.length === void 0 ? [r] : r;
			if (string(t)) {
				for (var o = t.split(/\s+/), s = o.length, c = 0; c < s; c++) {
					var l = o[c];
					if (!emptyString(l) && !n.immutableKeys[l]) for (var u = 0, d = a.length; u < d; u++) a[u]._private[n.field][l] = void 0;
				}
				n.triggerEvent && r[n.triggerFnName](n.event);
			} else if (t === void 0) {
				for (var f = 0, m = a.length; f < m; f++) for (var h = a[f]._private[n.field], g = Object.keys(h), _ = 0; _ < g.length; _++) {
					var v = g[_];
					n.immutableKeys[v] || (h[v] = void 0);
				}
				n.triggerEvent && r[n.triggerFnName](n.event);
			}
			return r;
		};
	}
}, define$1 = { eventAliasesOn: function(e) {
	var t = e;
	t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(e, t) {
		var n = this, r = Array.prototype.slice.call(arguments, 0);
		return new Promise$1(function(e, t) {
			var a = r.concat([function(t) {
				n.off.apply(n, o), e(t);
			}]), o = a.concat([]);
			n.on.apply(n, a);
		});
	};
} }, define = {};
[
	define$3,
	define$2,
	define$1
].forEach(function(e) {
	extend(define, e);
});
var elesfn$i = {
	animate: define.animate(),
	animation: define.animation(),
	animated: define.animated(),
	clearQueue: define.clearQueue(),
	delay: define.delay(),
	delayAnimation: define.delayAnimation(),
	stop: define.stop()
}, elesfn$h = {
	classes: function(e) {
		var t = this;
		if (e === void 0) {
			var n = [];
			return t[0]._private.classes.forEach(function(e) {
				return n.push(e);
			}), n;
		} else array(e) || (e = (e || "").match(/\S+/g) || []);
		for (var r = [], a = new Set$1(e), o = 0; o < t.length; o++) {
			for (var s = t[o], c = s._private, l = c.classes, u = !1, d = 0; d < e.length; d++) {
				var f = e[d];
				if (!l.has(f)) {
					u = !0;
					break;
				}
			}
			u ||= l.size !== e.length, u && (c.classes = a, r.push(s));
		}
		return r.length > 0 && this.spawn(r).updateStyle().emit("class"), t;
	},
	addClass: function(e) {
		return this.toggleClass(e, !0);
	},
	hasClass: function(e) {
		var t = this[0];
		return t != null && t._private.classes.has(e);
	},
	toggleClass: function(e, t) {
		array(e) || (e = e.match(/\S+/g) || []);
		for (var n = this, r = t === void 0, a = [], o = 0, s = n.length; o < s; o++) for (var c = n[o], l = c._private.classes, u = !1, d = 0; d < e.length; d++) {
			var f = e[d], m = l.has(f), h = !1;
			t || r && !m ? (l.add(f), h = !0) : (!t || r && m) && (l.delete(f), h = !0), !u && h && (a.push(c), u = !0);
		}
		return a.length > 0 && this.spawn(a).updateStyle().emit("class"), n;
	},
	removeClass: function(e) {
		return this.toggleClass(e, !1);
	},
	flashClass: function(e, t) {
		var n = this;
		if (t == null) t = 250;
		else if (t === 0) return n;
		return n.addClass(e), setTimeout(function() {
			n.removeClass(e);
		}, t), n;
	}
};
elesfn$h.className = elesfn$h.classNames = elesfn$h.classes;
var tokens = {
	metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
	comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
	boolOp: "\\?|\\!|\\^",
	string: "\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'",
	number,
	meta: "degree|indegree|outdegree",
	separator: "\\s*,\\s*",
	descendant: "\\s+",
	child: "\\s+>\\s+",
	subject: "\\$",
	group: "node|edge|\\*",
	directedEdge: "\\s+->\\s+",
	undirectedEdge: "\\s+<->\\s+"
};
tokens.variable = "(?:[\\w-.]|(?:\\\\" + tokens.metaChar + "))+", tokens.className = "(?:[\\w-]|(?:\\\\" + tokens.metaChar + "))+", tokens.value = tokens.string + "|" + tokens.number, tokens.id = tokens.variable, (function() {
	var e = tokens.comparatorOp.split("|"), t, n;
	for (n = 0; n < e.length; n++) t = e[n], tokens.comparatorOp += "|@" + t;
	for (e = tokens.comparatorOp.split("|"), n = 0; n < e.length; n++) t = e[n], !(t.indexOf("!") >= 0) && t !== "=" && (tokens.comparatorOp += "|\\!" + t);
})();
var newQuery = function() {
	return { checks: [] };
}, Type = {
	GROUP: 0,
	COLLECTION: 1,
	FILTER: 2,
	DATA_COMPARE: 3,
	DATA_EXIST: 4,
	DATA_BOOL: 5,
	META_COMPARE: 6,
	STATE: 7,
	ID: 8,
	CLASS: 9,
	UNDIRECTED_EDGE: 10,
	DIRECTED_EDGE: 11,
	NODE_SOURCE: 12,
	NODE_TARGET: 13,
	NODE_NEIGHBOR: 14,
	CHILD: 15,
	DESCENDANT: 16,
	PARENT: 17,
	ANCESTOR: 18,
	COMPOUND_SPLIT: 19,
	TRUE: 20
}, stateSelectors = [
	{
		selector: ":selected",
		matches: function(e) {
			return e.selected();
		}
	},
	{
		selector: ":unselected",
		matches: function(e) {
			return !e.selected();
		}
	},
	{
		selector: ":selectable",
		matches: function(e) {
			return e.selectable();
		}
	},
	{
		selector: ":unselectable",
		matches: function(e) {
			return !e.selectable();
		}
	},
	{
		selector: ":locked",
		matches: function(e) {
			return e.locked();
		}
	},
	{
		selector: ":unlocked",
		matches: function(e) {
			return !e.locked();
		}
	},
	{
		selector: ":visible",
		matches: function(e) {
			return e.visible();
		}
	},
	{
		selector: ":hidden",
		matches: function(e) {
			return !e.visible();
		}
	},
	{
		selector: ":transparent",
		matches: function(e) {
			return e.transparent();
		}
	},
	{
		selector: ":grabbed",
		matches: function(e) {
			return e.grabbed();
		}
	},
	{
		selector: ":free",
		matches: function(e) {
			return !e.grabbed();
		}
	},
	{
		selector: ":removed",
		matches: function(e) {
			return e.removed();
		}
	},
	{
		selector: ":inside",
		matches: function(e) {
			return !e.removed();
		}
	},
	{
		selector: ":grabbable",
		matches: function(e) {
			return e.grabbable();
		}
	},
	{
		selector: ":ungrabbable",
		matches: function(e) {
			return !e.grabbable();
		}
	},
	{
		selector: ":animated",
		matches: function(e) {
			return e.animated();
		}
	},
	{
		selector: ":unanimated",
		matches: function(e) {
			return !e.animated();
		}
	},
	{
		selector: ":parent",
		matches: function(e) {
			return e.isParent();
		}
	},
	{
		selector: ":childless",
		matches: function(e) {
			return e.isChildless();
		}
	},
	{
		selector: ":child",
		matches: function(e) {
			return e.isChild();
		}
	},
	{
		selector: ":orphan",
		matches: function(e) {
			return e.isOrphan();
		}
	},
	{
		selector: ":nonorphan",
		matches: function(e) {
			return e.isChild();
		}
	},
	{
		selector: ":compound",
		matches: function(e) {
			return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
		}
	},
	{
		selector: ":loop",
		matches: function(e) {
			return e.isLoop();
		}
	},
	{
		selector: ":simple",
		matches: function(e) {
			return e.isSimple();
		}
	},
	{
		selector: ":active",
		matches: function(e) {
			return e.active();
		}
	},
	{
		selector: ":inactive",
		matches: function(e) {
			return !e.active();
		}
	},
	{
		selector: ":backgrounding",
		matches: function(e) {
			return e.backgrounding();
		}
	},
	{
		selector: ":nonbackgrounding",
		matches: function(e) {
			return !e.backgrounding();
		}
	}
].sort(function(e, t) {
	return descending(e.selector, t.selector);
}), lookup = function() {
	for (var e = {}, t, n = 0; n < stateSelectors.length; n++) t = stateSelectors[n], e[t.selector] = t.matches;
	return e;
}(), stateSelectorMatches = function(e, t) {
	return lookup[e](t);
}, stateSelectorRegex = "(" + stateSelectors.map(function(e) {
	return e.selector;
}).join("|") + ")", cleanMetaChars = function(e) {
	return e.replace(RegExp("\\\\(" + tokens.metaChar + ")", "g"), function(e, t) {
		return t;
	});
}, replaceLastQuery = function(e, t, n) {
	e[e.length - 1] = n;
}, exprs = [
	{
		name: "group",
		query: !0,
		regex: "(" + tokens.group + ")",
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 1)[0];
			t.checks.push({
				type: Type.GROUP,
				value: r === "*" ? r : r + "s"
			});
		}
	},
	{
		name: "state",
		query: !0,
		regex: stateSelectorRegex,
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 1)[0];
			t.checks.push({
				type: Type.STATE,
				value: r
			});
		}
	},
	{
		name: "id",
		query: !0,
		regex: "\\#(" + tokens.id + ")",
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 1)[0];
			t.checks.push({
				type: Type.ID,
				value: cleanMetaChars(r)
			});
		}
	},
	{
		name: "className",
		query: !0,
		regex: "\\.(" + tokens.className + ")",
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 1)[0];
			t.checks.push({
				type: Type.CLASS,
				value: cleanMetaChars(r)
			});
		}
	},
	{
		name: "dataExists",
		query: !0,
		regex: "\\[\\s*(" + tokens.variable + ")\\s*\\]",
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 1)[0];
			t.checks.push({
				type: Type.DATA_EXIST,
				field: cleanMetaChars(r)
			});
		}
	},
	{
		name: "dataCompare",
		query: !0,
		regex: "\\[\\s*(" + tokens.variable + ")\\s*(" + tokens.comparatorOp + ")\\s*(" + tokens.value + ")\\s*\\]",
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 3), a = r[0], o = r[1], s = r[2];
			s = (/* @__PURE__ */ RegExp("^" + tokens.string + "$")).exec(s) == null ? parseFloat(s) : s.substring(1, s.length - 1), t.checks.push({
				type: Type.DATA_COMPARE,
				field: cleanMetaChars(a),
				operator: o,
				value: s
			});
		}
	},
	{
		name: "dataBool",
		query: !0,
		regex: "\\[\\s*(" + tokens.boolOp + ")\\s*(" + tokens.variable + ")\\s*\\]",
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 2), a = r[0], o = r[1];
			t.checks.push({
				type: Type.DATA_BOOL,
				field: cleanMetaChars(o),
				operator: a
			});
		}
	},
	{
		name: "metaCompare",
		query: !0,
		regex: "\\[\\[\\s*(" + tokens.meta + ")\\s*(" + tokens.comparatorOp + ")\\s*(" + tokens.number + ")\\s*\\]\\]",
		populate: function(e, t, n) {
			var r = _slicedToArray(n, 3), a = r[0], o = r[1], s = r[2];
			t.checks.push({
				type: Type.META_COMPARE,
				field: cleanMetaChars(a),
				operator: o,
				value: parseFloat(s)
			});
		}
	},
	{
		name: "nextQuery",
		separator: !0,
		regex: tokens.separator,
		populate: function(e, t) {
			var n = e.currentSubject, r = e.edgeCount, a = e.compoundCount, o = e[e.length - 1];
			return n != null && (o.subject = n, e.currentSubject = null), o.edgeCount = r, o.compoundCount = a, e.edgeCount = 0, e.compoundCount = 0, e[e.length++] = newQuery();
		}
	},
	{
		name: "directedEdge",
		separator: !0,
		regex: tokens.directedEdge,
		populate: function(e, t) {
			if (e.currentSubject == null) {
				var n = newQuery(), r = t, a = newQuery();
				return n.checks.push({
					type: Type.DIRECTED_EDGE,
					source: r,
					target: a
				}), replaceLastQuery(e, t, n), e.edgeCount++, a;
			} else {
				var o = newQuery(), s = t, c = newQuery();
				return o.checks.push({
					type: Type.NODE_SOURCE,
					source: s,
					target: c
				}), replaceLastQuery(e, t, o), e.edgeCount++, c;
			}
		}
	},
	{
		name: "undirectedEdge",
		separator: !0,
		regex: tokens.undirectedEdge,
		populate: function(e, t) {
			if (e.currentSubject == null) {
				var n = newQuery(), r = t, a = newQuery();
				return n.checks.push({
					type: Type.UNDIRECTED_EDGE,
					nodes: [r, a]
				}), replaceLastQuery(e, t, n), e.edgeCount++, a;
			} else {
				var o = newQuery(), s = t, c = newQuery();
				return o.checks.push({
					type: Type.NODE_NEIGHBOR,
					node: s,
					neighbor: c
				}), replaceLastQuery(e, t, o), c;
			}
		}
	},
	{
		name: "child",
		separator: !0,
		regex: tokens.child,
		populate: function(e, t) {
			if (e.currentSubject == null) {
				var n = newQuery(), r = newQuery(), a = e[e.length - 1];
				return n.checks.push({
					type: Type.CHILD,
					parent: a,
					child: r
				}), replaceLastQuery(e, t, n), e.compoundCount++, r;
			} else if (e.currentSubject === t) {
				var o = newQuery(), s = e[e.length - 1], c = newQuery(), l = newQuery(), u = newQuery(), d = newQuery();
				return o.checks.push({
					type: Type.COMPOUND_SPLIT,
					left: s,
					right: c,
					subject: l
				}), l.checks = t.checks, t.checks = [{ type: Type.TRUE }], d.checks.push({ type: Type.TRUE }), c.checks.push({
					type: Type.PARENT,
					parent: d,
					child: u
				}), replaceLastQuery(e, s, o), e.currentSubject = l, e.compoundCount++, u;
			} else {
				var f = newQuery(), m = newQuery(), h = [{
					type: Type.PARENT,
					parent: f,
					child: m
				}];
				return f.checks = t.checks, t.checks = h, e.compoundCount++, m;
			}
		}
	},
	{
		name: "descendant",
		separator: !0,
		regex: tokens.descendant,
		populate: function(e, t) {
			if (e.currentSubject == null) {
				var n = newQuery(), r = newQuery(), a = e[e.length - 1];
				return n.checks.push({
					type: Type.DESCENDANT,
					ancestor: a,
					descendant: r
				}), replaceLastQuery(e, t, n), e.compoundCount++, r;
			} else if (e.currentSubject === t) {
				var o = newQuery(), s = e[e.length - 1], c = newQuery(), l = newQuery(), u = newQuery(), d = newQuery();
				return o.checks.push({
					type: Type.COMPOUND_SPLIT,
					left: s,
					right: c,
					subject: l
				}), l.checks = t.checks, t.checks = [{ type: Type.TRUE }], d.checks.push({ type: Type.TRUE }), c.checks.push({
					type: Type.ANCESTOR,
					ancestor: d,
					descendant: u
				}), replaceLastQuery(e, s, o), e.currentSubject = l, e.compoundCount++, u;
			} else {
				var f = newQuery(), m = newQuery(), h = [{
					type: Type.ANCESTOR,
					ancestor: f,
					descendant: m
				}];
				return f.checks = t.checks, t.checks = h, e.compoundCount++, m;
			}
		}
	},
	{
		name: "subject",
		modifier: !0,
		regex: tokens.subject,
		populate: function(e, t) {
			if (e.currentSubject != null && e.currentSubject !== t) return warn("Redefinition of subject in selector `" + e.toString() + "`"), !1;
			e.currentSubject = t;
			var n = e[e.length - 1].checks[0], r = n == null ? null : n.type;
			r === Type.DIRECTED_EDGE ? n.type = Type.NODE_TARGET : r === Type.UNDIRECTED_EDGE && (n.type = Type.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
		}
	}
];
exprs.forEach(function(e) {
	return e.regexObj = /* @__PURE__ */ RegExp("^" + e.regex);
});
var consumeExpr = function(e) {
	for (var t, n, r, a = 0; a < exprs.length; a++) {
		var o = exprs[a], s = o.name, c = e.match(o.regexObj);
		if (c != null) {
			n = c, t = o, r = s;
			var l = c[0];
			e = e.substring(l.length);
			break;
		}
	}
	return {
		expr: t,
		match: n,
		name: r,
		remaining: e
	};
}, consumeWhitespace = function(e) {
	var t = e.match(/^\s+/);
	if (t) {
		var n = t[0];
		e = e.substring(n.length);
	}
	return e;
}, parse$1 = {
	parse: function(e) {
		var t = this, n = t.inputText = e, r = t[0] = newQuery();
		for (t.length = 1, n = consumeWhitespace(n);;) {
			var a = consumeExpr(n);
			if (a.expr == null) return warn("The selector `" + e + "`is invalid"), !1;
			var o = a.match.slice(1), s = a.expr.populate(t, r, o);
			if (s === !1) return !1;
			if (s != null && (r = s), n = a.remaining, n.match(/^\s*$/)) break;
		}
		var c = t[t.length - 1];
		t.currentSubject != null && (c.subject = t.currentSubject), c.edgeCount = t.edgeCount, c.compoundCount = t.compoundCount;
		for (var l = 0; l < t.length; l++) {
			var u = t[l];
			if (u.compoundCount > 0 && u.edgeCount > 0) return warn("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
			if (u.edgeCount > 1) return warn("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
			u.edgeCount === 1 && warn("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
		}
		return !0;
	},
	toString: function() {
		if (this.toStringCache != null) return this.toStringCache;
		for (var e = function(e) {
			return e ?? "";
		}, t = function(t) {
			return string(t) ? "\"" + t + "\"" : e(t);
		}, n = function(e) {
			return " " + e + " ";
		}, r = function(r, o) {
			var s = r.type, c = r.value;
			switch (s) {
				case Type.GROUP:
					var l = e(c);
					return l.substring(0, l.length - 1);
				case Type.DATA_COMPARE:
					var u = r.field, d = r.operator;
					return "[" + u + n(e(d)) + t(c) + "]";
				case Type.DATA_BOOL:
					var f = r.operator, m = r.field;
					return "[" + e(f) + m + "]";
				case Type.DATA_EXIST: return "[" + r.field + "]";
				case Type.META_COMPARE:
					var h = r.operator;
					return "[[" + r.field + n(e(h)) + t(c) + "]]";
				case Type.STATE: return c;
				case Type.ID: return "#" + c;
				case Type.CLASS: return "." + c;
				case Type.PARENT:
				case Type.CHILD: return a(r.parent, o) + n(">") + a(r.child, o);
				case Type.ANCESTOR:
				case Type.DESCENDANT: return a(r.ancestor, o) + " " + a(r.descendant, o);
				case Type.COMPOUND_SPLIT:
					var g = a(r.left, o), _ = a(r.subject, o), v = a(r.right, o);
					return g + (g.length > 0 ? " " : "") + _ + v;
				case Type.TRUE: return "";
			}
		}, a = function(e, t) {
			return e.checks.reduce(function(n, a, o) {
				return n + (t === e && o === 0 ? "$" : "") + r(a, t);
			}, "");
		}, o = "", s = 0; s < this.length; s++) {
			var c = this[s];
			o += a(c, c.subject), this.length > 1 && s < this.length - 1 && (o += ", ");
		}
		return this.toStringCache = o, o;
	}
}, valCmp = function(e, t, n) {
	var r, a = string(e), o = number$1(e), s = string(n), c, l, u = !1, d = !1, f = !1;
	switch (t.indexOf("!") >= 0 && (t = t.replace("!", ""), d = !0), t.indexOf("@") >= 0 && (t = t.replace("@", ""), u = !0), (a || s || u) && (c = !a && !o ? "" : "" + e, l = "" + n), u && (e = c = c.toLowerCase(), n = l = l.toLowerCase()), t) {
		case "*=":
			r = c.indexOf(l) >= 0;
			break;
		case "$=":
			r = c.indexOf(l, c.length - l.length) >= 0;
			break;
		case "^=":
			r = c.indexOf(l) === 0;
			break;
		case "=":
			r = e === n;
			break;
		case ">":
			f = !0, r = e > n;
			break;
		case ">=":
			f = !0, r = e >= n;
			break;
		case "<":
			f = !0, r = e < n;
			break;
		case "<=":
			f = !0, r = e <= n;
			break;
		default:
			r = !1;
			break;
	}
	return d && (e != null || !f) && (r = !r), r;
}, boolCmp = function(e, t) {
	switch (t) {
		case "?": return !!e;
		case "!": return !e;
		case "^": return e === void 0;
	}
}, existCmp = function(e) {
	return e !== void 0;
}, data$1 = function(e, t) {
	return e.data(t);
}, meta = function(e, t) {
	return e[t]();
}, match = [], matches$1 = function(e, t) {
	return e.checks.every(function(e) {
		return match[e.type](e, t);
	});
};
match[Type.GROUP] = function(e, t) {
	var n = e.value;
	return n === "*" || n === t.group();
}, match[Type.STATE] = function(e, t) {
	var n = e.value;
	return stateSelectorMatches(n, t);
}, match[Type.ID] = function(e, t) {
	var n = e.value;
	return t.id() === n;
}, match[Type.CLASS] = function(e, t) {
	var n = e.value;
	return t.hasClass(n);
}, match[Type.META_COMPARE] = function(e, t) {
	var n = e.field, r = e.operator, a = e.value;
	return valCmp(meta(t, n), r, a);
}, match[Type.DATA_COMPARE] = function(e, t) {
	var n = e.field, r = e.operator, a = e.value;
	return valCmp(data$1(t, n), r, a);
}, match[Type.DATA_BOOL] = function(e, t) {
	var n = e.field, r = e.operator;
	return boolCmp(data$1(t, n), r);
}, match[Type.DATA_EXIST] = function(e, t) {
	var n = e.field;
	return e.operator, existCmp(data$1(t, n));
}, match[Type.UNDIRECTED_EDGE] = function(e, t) {
	var n = e.nodes[0], r = e.nodes[1], a = t.source(), o = t.target();
	return matches$1(n, a) && matches$1(r, o) || matches$1(r, a) && matches$1(n, o);
}, match[Type.NODE_NEIGHBOR] = function(e, t) {
	return matches$1(e.node, t) && t.neighborhood().some(function(t) {
		return t.isNode() && matches$1(e.neighbor, t);
	});
}, match[Type.DIRECTED_EDGE] = function(e, t) {
	return matches$1(e.source, t.source()) && matches$1(e.target, t.target());
}, match[Type.NODE_SOURCE] = function(e, t) {
	return matches$1(e.source, t) && t.outgoers().some(function(t) {
		return t.isNode() && matches$1(e.target, t);
	});
}, match[Type.NODE_TARGET] = function(e, t) {
	return matches$1(e.target, t) && t.incomers().some(function(t) {
		return t.isNode() && matches$1(e.source, t);
	});
}, match[Type.CHILD] = function(e, t) {
	return matches$1(e.child, t) && matches$1(e.parent, t.parent());
}, match[Type.PARENT] = function(e, t) {
	return matches$1(e.parent, t) && t.children().some(function(t) {
		return matches$1(e.child, t);
	});
}, match[Type.DESCENDANT] = function(e, t) {
	return matches$1(e.descendant, t) && t.ancestors().some(function(t) {
		return matches$1(e.ancestor, t);
	});
}, match[Type.ANCESTOR] = function(e, t) {
	return matches$1(e.ancestor, t) && t.descendants().some(function(t) {
		return matches$1(e.descendant, t);
	});
}, match[Type.COMPOUND_SPLIT] = function(e, t) {
	return matches$1(e.subject, t) && matches$1(e.left, t) && matches$1(e.right, t);
}, match[Type.TRUE] = function() {
	return !0;
}, match[Type.COLLECTION] = function(e, t) {
	return e.value.has(t);
}, match[Type.FILTER] = function(e, t) {
	var n = e.value;
	return n(t);
};
var matching = {
	matches: function(e) {
		for (var t = this, n = 0; n < t.length; n++) {
			var r = t[n];
			if (matches$1(r, e)) return !0;
		}
		return !1;
	},
	filter: function(e) {
		var t = this;
		if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === Type.ID) return e.getElementById(t[0].checks[0].value).collection();
		var n = function(e) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				if (matches$1(r, e)) return !0;
			}
			return !1;
		};
		return t.text() ?? (n = function() {
			return !0;
		}), e.filter(n);
	}
}, Selector = function(e) {
	this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || string(e) && e.match(/^\s*$/) || (elementOrCollection(e) ? this.addQuery({ checks: [{
		type: Type.COLLECTION,
		value: e.collection()
	}] }) : fn$6(e) ? this.addQuery({ checks: [{
		type: Type.FILTER,
		value: e
	}] }) : string(e) ? this.parse(e) || (this.invalid = !0) : error("A selector must be created from a string; found "));
}, selfn = Selector.prototype;
[parse$1, matching].forEach(function(e) {
	return extend(selfn, e);
}), selfn.text = function() {
	return this.inputText;
}, selfn.size = function() {
	return this.length;
}, selfn.eq = function(e) {
	return this[e];
}, selfn.sameText = function(e) {
	return !this.invalid && !e.invalid && this.text() === e.text();
}, selfn.addQuery = function(e) {
	this[this.length++] = e;
}, selfn.selector = selfn.toString;
var elesfn$g = {
	allAre: function(e) {
		var t = new Selector(e);
		return this.every(function(e) {
			return t.matches(e);
		});
	},
	is: function(e) {
		var t = new Selector(e);
		return this.some(function(e) {
			return t.matches(e);
		});
	},
	some: function(e, t) {
		for (var n = 0; n < this.length; n++) if (t ? e.apply(t, [
			this[n],
			n,
			this
		]) : e(this[n], n, this)) return !0;
		return !1;
	},
	every: function(e, t) {
		for (var n = 0; n < this.length; n++) if (!(t ? e.apply(t, [
			this[n],
			n,
			this
		]) : e(this[n], n, this))) return !1;
		return !0;
	},
	same: function(e) {
		if (this === e) return !0;
		e = this.cy().collection(e);
		var t = this.length;
		return t === e.length ? t === 1 ? this[0] === e[0] : this.every(function(t) {
			return e.hasElementWithId(t.id());
		}) : !1;
	},
	anySame: function(e) {
		return e = this.cy().collection(e), this.some(function(t) {
			return e.hasElementWithId(t.id());
		});
	},
	allAreNeighbors: function(e) {
		e = this.cy().collection(e);
		var t = this.neighborhood();
		return e.every(function(e) {
			return t.hasElementWithId(e.id());
		});
	},
	contains: function(e) {
		e = this.cy().collection(e);
		var t = this;
		return e.every(function(e) {
			return t.hasElementWithId(e.id());
		});
	}
};
elesfn$g.allAreNeighbours = elesfn$g.allAreNeighbors, elesfn$g.has = elesfn$g.contains, elesfn$g.equal = elesfn$g.equals = elesfn$g.same;
var cache = function(e, t) {
	return function(n, r, a, o) {
		var s = n, c = this, l;
		if (s == null ? l = "" : elementOrCollection(s) && s.length === 1 && (l = s.id()), c.length === 1 && l) {
			var u = c[0]._private, d = u.traversalCache = u.traversalCache || {}, f = d[t] = d[t] || [], m = hashString(l);
			return f[m] || (f[m] = e.call(c, n, r, a, o));
		} else return e.call(c, n, r, a, o);
	};
}, elesfn$f = {
	parent: function(e) {
		var t = [];
		if (this.length === 1) {
			var n = this[0]._private.parent;
			if (n) return n;
		}
		for (var r = 0; r < this.length; r++) {
			var a = this[r]._private.parent;
			a && t.push(a);
		}
		return this.spawn(t, !0).filter(e);
	},
	parents: function(e) {
		for (var t = [], n = this.parent(); n.nonempty();) {
			for (var r = 0; r < n.length; r++) {
				var a = n[r];
				t.push(a);
			}
			n = n.parent();
		}
		return this.spawn(t, !0).filter(e);
	},
	commonAncestors: function(e) {
		for (var t, n = 0; n < this.length; n++) {
			var r = this[n].parents();
			t ||= r, t = t.intersect(r);
		}
		return t.filter(e);
	},
	orphans: function(e) {
		return this.stdFilter(function(e) {
			return e.isOrphan();
		}).filter(e);
	},
	nonorphans: function(e) {
		return this.stdFilter(function(e) {
			return e.isChild();
		}).filter(e);
	},
	children: cache(function(e) {
		for (var t = [], n = 0; n < this.length; n++) for (var r = this[n]._private.children, a = 0; a < r.length; a++) t.push(r[a]);
		return this.spawn(t, !0).filter(e);
	}, "children"),
	siblings: function(e) {
		return this.parent().children().not(this).filter(e);
	},
	isParent: function() {
		var e = this[0];
		if (e) return e.isNode() && e._private.children.length !== 0;
	},
	isChildless: function() {
		var e = this[0];
		if (e) return e.isNode() && e._private.children.length === 0;
	},
	isChild: function() {
		var e = this[0];
		if (e) return e.isNode() && e._private.parent != null;
	},
	isOrphan: function() {
		var e = this[0];
		if (e) return e.isNode() && e._private.parent == null;
	},
	descendants: function(e) {
		var t = [];
		function n(e) {
			for (var r = 0; r < e.length; r++) {
				var a = e[r];
				t.push(a), a.children().nonempty() && n(a.children());
			}
		}
		return n(this.children()), this.spawn(t, !0).filter(e);
	}
};
function forEachCompound(e, t, n, r) {
	for (var a = [], o = new Set$1(), s = e.cy().hasCompoundNodes(), c = 0; c < e.length; c++) {
		var l = e[c];
		n ? a.push(l) : s && r(a, o, l);
	}
	for (; a.length > 0;) {
		var u = a.shift();
		t(u), o.add(u.id()), s && r(a, o, u);
	}
	return e;
}
function addChildren(e, t, n) {
	if (n.isParent()) for (var r = n._private.children, a = 0; a < r.length; a++) {
		var o = r[a];
		t.has(o.id()) || e.push(o);
	}
}
elesfn$f.forEachDown = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return forEachCompound(this, e, t, addChildren);
};
function addParent(e, t, n) {
	if (n.isChild()) {
		var r = n._private.parent;
		t.has(r.id()) || e.push(r);
	}
}
elesfn$f.forEachUp = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return forEachCompound(this, e, t, addParent);
};
function addParentAndChildren(e, t, n) {
	addParent(e, t, n), addChildren(e, t, n);
}
elesfn$f.forEachUpAndDown = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return forEachCompound(this, e, t, addParentAndChildren);
}, elesfn$f.ancestors = elesfn$f.parents;
var fn$5 = elesfn$e = {
	data: define.data({
		field: "data",
		bindingEvent: "data",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "data",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		immutableKeys: {
			id: !0,
			source: !0,
			target: !0,
			parent: !0
		},
		updateStyle: !0
	}),
	removeData: define.removeData({
		field: "data",
		event: "data",
		triggerFnName: "trigger",
		triggerEvent: !0,
		immutableKeys: {
			id: !0,
			source: !0,
			target: !0,
			parent: !0
		},
		updateStyle: !0
	}),
	scratch: define.data({
		field: "scratch",
		bindingEvent: "scratch",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "scratch",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		updateStyle: !0
	}),
	removeScratch: define.removeData({
		field: "scratch",
		event: "scratch",
		triggerFnName: "trigger",
		triggerEvent: !0,
		updateStyle: !0
	}),
	rscratch: define.data({
		field: "rscratch",
		allowBinding: !1,
		allowSetting: !0,
		settingTriggersEvent: !1,
		allowGetting: !0
	}),
	removeRscratch: define.removeData({
		field: "rscratch",
		triggerEvent: !1
	}),
	id: function() {
		var e = this[0];
		if (e) return e._private.data.id;
	}
}, elesfn$e;
fn$5.attr = fn$5.data, fn$5.removeAttr = fn$5.removeData;
var data = elesfn$e, elesfn$d = {};
function defineDegreeFunction(e) {
	return function(t) {
		var n = this;
		if (t === void 0 && (t = !0), n.length !== 0) if (n.isNode() && !n.removed()) {
			for (var r = 0, a = n[0], o = a._private.edges, s = 0; s < o.length; s++) {
				var c = o[s];
				!t && c.isLoop() || (r += e(a, c));
			}
			return r;
		} else return;
	};
}
extend(elesfn$d, {
	degree: defineDegreeFunction(function(e, t) {
		return t.source().same(t.target()) ? 2 : 1;
	}),
	indegree: defineDegreeFunction(function(e, t) {
		return t.target().same(e) ? 1 : 0;
	}),
	outdegree: defineDegreeFunction(function(e, t) {
		return t.source().same(e) ? 1 : 0;
	})
});
function defineDegreeBoundsFunction(e, t) {
	return function(n) {
		for (var r, a = this.nodes(), o = 0; o < a.length; o++) {
			var s = a[o][e](n);
			s !== void 0 && (r === void 0 || t(s, r)) && (r = s);
		}
		return r;
	};
}
extend(elesfn$d, {
	minDegree: defineDegreeBoundsFunction("degree", function(e, t) {
		return e < t;
	}),
	maxDegree: defineDegreeBoundsFunction("degree", function(e, t) {
		return e > t;
	}),
	minIndegree: defineDegreeBoundsFunction("indegree", function(e, t) {
		return e < t;
	}),
	maxIndegree: defineDegreeBoundsFunction("indegree", function(e, t) {
		return e > t;
	}),
	minOutdegree: defineDegreeBoundsFunction("outdegree", function(e, t) {
		return e < t;
	}),
	maxOutdegree: defineDegreeBoundsFunction("outdegree", function(e, t) {
		return e > t;
	})
}), extend(elesfn$d, { totalDegree: function(e) {
	for (var t = 0, n = this.nodes(), r = 0; r < n.length; r++) t += n[r].degree(e);
	return t;
} });
var fn$4, elesfn$c, beforePositionSet = function(e, t, n) {
	for (var r = 0; r < e.length; r++) {
		var a = e[r];
		if (!a.locked()) {
			var o = a._private.position, s = {
				x: t.x == null ? 0 : t.x - o.x,
				y: t.y == null ? 0 : t.y - o.y
			};
			a.isParent() && !(s.x === 0 && s.y === 0) && a.children().shift(s, n), a.dirtyBoundingBoxCache();
		}
	}
}, positionDef = {
	field: "position",
	bindingEvent: "position",
	allowBinding: !0,
	allowSetting: !0,
	settingEvent: "position",
	settingTriggersEvent: !0,
	triggerFnName: "emitAndNotify",
	allowGetting: !0,
	validKeys: ["x", "y"],
	beforeGet: function(e) {
		e.updateCompoundBounds();
	},
	beforeSet: function(e, t) {
		beforePositionSet(e, t, !1);
	},
	onSet: function(e) {
		e.dirtyCompoundBoundsCache();
	},
	canSet: function(e) {
		return !e.locked();
	}
};
fn$4 = elesfn$c = {
	position: define.data(positionDef),
	silentPosition: define.data(extend({}, positionDef, {
		allowBinding: !1,
		allowSetting: !0,
		settingTriggersEvent: !1,
		allowGetting: !1,
		beforeSet: function(e, t) {
			beforePositionSet(e, t, !0);
		},
		onSet: function(e) {
			e.dirtyCompoundBoundsCache();
		}
	})),
	positions: function(e, t) {
		if (plainObject(e)) t ? this.silentPosition(e) : this.position(e);
		else if (fn$6(e)) {
			var n = e, r = this.cy();
			r.startBatch();
			for (var a = 0; a < this.length; a++) {
				var o = this[a], s = void 0;
				(s = n(o, a)) && (t ? o.silentPosition(s) : o.position(s));
			}
			r.endBatch();
		}
		return this;
	},
	silentPositions: function(e) {
		return this.positions(e, !0);
	},
	shift: function(e, t, n) {
		var r;
		if (plainObject(e) ? (r = {
			x: number$1(e.x) ? e.x : 0,
			y: number$1(e.y) ? e.y : 0
		}, n = t) : string(e) && number$1(t) && (r = {
			x: 0,
			y: 0
		}, r[e] = t), r != null) {
			var a = this.cy();
			a.startBatch();
			for (var o = 0; o < this.length; o++) {
				var s = this[o];
				if (!(a.hasCompoundNodes() && s.isChild() && s.ancestors().anySame(this))) {
					var c = s.position(), l = {
						x: c.x + r.x,
						y: c.y + r.y
					};
					n ? s.silentPosition(l) : s.position(l);
				}
			}
			a.endBatch();
		}
		return this;
	},
	silentShift: function(e, t) {
		return plainObject(e) ? this.shift(e, !0) : string(e) && number$1(t) && this.shift(e, t, !0), this;
	},
	renderedPosition: function(e, t) {
		var n = this[0], r = this.cy(), a = r.zoom(), o = r.pan(), s = plainObject(e) ? e : void 0, c = s !== void 0 || t !== void 0 && string(e);
		if (n && n.isNode()) if (c) for (var l = 0; l < this.length; l++) {
			var u = this[l];
			t === void 0 ? s !== void 0 && u.position(renderedToModelPosition(s, a, o)) : u.position(e, (t - o[e]) / a);
		}
		else return s = modelToRenderedPosition$1(n.position(), a, o), e === void 0 ? s : s[e];
		else if (!c) return;
		return this;
	},
	relativePosition: function(e, t) {
		var n = this[0], r = this.cy(), a = plainObject(e) ? e : void 0, o = a !== void 0 || t !== void 0 && string(e), s = r.hasCompoundNodes();
		if (n && n.isNode()) if (o) for (var c = 0; c < this.length; c++) {
			var l = this[c], u = s ? l.parent() : null, d = u && u.length > 0, f = d;
			d && (u = u[0]);
			var m = f ? u.position() : {
				x: 0,
				y: 0
			};
			t === void 0 ? a !== void 0 && l.position({
				x: a.x + m.x,
				y: a.y + m.y
			}) : l.position(e, t + m[e]);
		}
		else {
			var h = n.position(), g = s ? n.parent() : null, _ = g && g.length > 0, v = _;
			_ && (g = g[0]);
			var b = v ? g.position() : {
				x: 0,
				y: 0
			};
			return a = {
				x: h.x - b.x,
				y: h.y - b.y
			}, e === void 0 ? a : a[e];
		}
		else if (!o) return;
		return this;
	}
}, fn$4.modelPosition = fn$4.point = fn$4.position, fn$4.modelPositions = fn$4.points = fn$4.positions, fn$4.renderedPoint = fn$4.renderedPosition, fn$4.relativePoint = fn$4.relativePosition;
var position = elesfn$c, fn$3 = elesfn$b = {}, elesfn$b;
elesfn$b.renderedBoundingBox = function(e) {
	var t = this.boundingBox(e), n = this.cy(), r = n.zoom(), a = n.pan(), o = t.x1 * r + a.x, s = t.x2 * r + a.x, c = t.y1 * r + a.y, l = t.y2 * r + a.y;
	return {
		x1: o,
		x2: s,
		y1: c,
		y2: l,
		w: s - o,
		h: l - c
	};
}, elesfn$b.dirtyCompoundBoundsCache = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.cy();
	return !t.styleEnabled() || !t.hasCompoundNodes() || this.forEachUp(function(t) {
		if (t.isParent()) {
			var n = t._private;
			n.compoundBoundsClean = !1, n.bbCache = null, e || t.emitAndNotify("bounds");
		}
	}), this;
}, elesfn$b.updateCompoundBounds = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.cy();
	if (!t.styleEnabled() || !t.hasCompoundNodes() || !e && t.batching()) return this;
	function n(e) {
		if (!e.isParent()) return;
		var t = e._private, n = e.children(), r = e.pstyle("compound-sizing-wrt-labels").value === "include", a = {
			width: {
				val: e.pstyle("min-width").pfValue,
				left: e.pstyle("min-width-bias-left"),
				right: e.pstyle("min-width-bias-right")
			},
			height: {
				val: e.pstyle("min-height").pfValue,
				top: e.pstyle("min-height-bias-top"),
				bottom: e.pstyle("min-height-bias-bottom")
			}
		}, o = n.boundingBox({
			includeLabels: r,
			includeOverlays: !1,
			useCache: !1
		}), s = t.position;
		(o.w === 0 || o.h === 0) && (o = {
			w: e.pstyle("width").pfValue,
			h: e.pstyle("height").pfValue
		}, o.x1 = s.x - o.w / 2, o.x2 = s.x + o.w / 2, o.y1 = s.y - o.h / 2, o.y2 = s.y + o.h / 2);
		function c(e, t, n) {
			var r = 0, a = 0, o = t + n;
			return e > 0 && o > 0 && (r = t / o * e, a = n / o * e), {
				biasDiff: r,
				biasComplementDiff: a
			};
		}
		function l(e, t, n, r) {
			if (n.units === "%") switch (r) {
				case "width": return e > 0 ? n.pfValue * e : 0;
				case "height": return t > 0 ? n.pfValue * t : 0;
				case "average": return e > 0 && t > 0 ? n.pfValue * (e + t) / 2 : 0;
				case "min": return e > 0 && t > 0 ? e > t ? n.pfValue * t : n.pfValue * e : 0;
				case "max": return e > 0 && t > 0 ? e > t ? n.pfValue * e : n.pfValue * t : 0;
				default: return 0;
			}
			else if (n.units === "px") return n.pfValue;
			else return 0;
		}
		var u = a.width.left.value;
		a.width.left.units === "px" && a.width.val > 0 && (u = u * 100 / a.width.val);
		var d = a.width.right.value;
		a.width.right.units === "px" && a.width.val > 0 && (d = d * 100 / a.width.val);
		var f = a.height.top.value;
		a.height.top.units === "px" && a.height.val > 0 && (f = f * 100 / a.height.val);
		var m = a.height.bottom.value;
		a.height.bottom.units === "px" && a.height.val > 0 && (m = m * 100 / a.height.val);
		var h = c(a.width.val - o.w, u, d), g = h.biasDiff, _ = h.biasComplementDiff, v = c(a.height.val - o.h, f, m), b = v.biasDiff, S = v.biasComplementDiff;
		t.autoPadding = l(o.w, o.h, e.pstyle("padding"), e.pstyle("padding-relative-to").value), t.autoWidth = Math.max(o.w, a.width.val), s.x = (-g + o.x1 + o.x2 + _) / 2, t.autoHeight = Math.max(o.h, a.height.val), s.y = (-b + o.y1 + o.y2 + S) / 2;
	}
	for (var r = 0; r < this.length; r++) {
		var a = this[r], o = a._private;
		(!o.compoundBoundsClean || e) && (n(a), t.batching() || (o.compoundBoundsClean = !0));
	}
	return this;
};
var noninf = function(e) {
	return e === Infinity || e === -Infinity ? 0 : e;
}, updateBounds = function(e, t, n, r, a) {
	r - t === 0 || a - n === 0 || t == null || n == null || r == null || a == null || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = r > e.x2 ? r : e.x2, e.y1 = n < e.y1 ? n : e.y1, e.y2 = a > e.y2 ? a : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, updateBoundsFromBox = function(e, t) {
	return t == null ? e : updateBounds(e, t.x1, t.y1, t.x2, t.y2);
}, prefixedProperty = function(e, t, n) {
	return getPrefixedProperty(e, t, n);
}, updateBoundsFromArrow = function(e, t, n) {
	if (!t.cy().headless()) {
		var r = t._private, a = r.rstyle, o = a.arrowWidth / 2, s = t.pstyle(n + "-arrow-shape").value, c, l;
		if (s !== "none") {
			n === "source" ? (c = a.srcX, l = a.srcY) : n === "target" ? (c = a.tgtX, l = a.tgtY) : (c = a.midX, l = a.midY);
			var u = r.arrowBounds = r.arrowBounds || {}, d = u[n] = u[n] || {};
			d.x1 = c - o, d.y1 = l - o, d.x2 = c + o, d.y2 = l + o, d.w = d.x2 - d.x1, d.h = d.y2 - d.y1, expandBoundingBox(d, 1), updateBounds(e, d.x1, d.y1, d.x2, d.y2);
		}
	}
}, updateBoundsFromLabel = function(e, t, n) {
	if (!t.cy().headless()) {
		var r = n ? n + "-" : "", a = t._private, o = a.rstyle;
		if (t.pstyle(r + "label").strValue) {
			var s = t.pstyle("text-halign"), c = t.pstyle("text-valign"), l = prefixedProperty(o, "labelWidth", n), u = prefixedProperty(o, "labelHeight", n), d = prefixedProperty(o, "labelX", n), f = prefixedProperty(o, "labelY", n), m = t.pstyle(r + "text-margin-x").pfValue, h = t.pstyle(r + "text-margin-y").pfValue, g = t.isEdge(), _ = t.pstyle(r + "text-rotation"), v = t.pstyle("text-outline-width").pfValue, b = t.pstyle("text-border-width").pfValue / 2, S = t.pstyle("text-background-padding").pfValue, C = 2, w = u, T = l, E = T / 2, D = w / 2, O, k, A, j;
			if (g) O = d - E, k = d + E, A = f - D, j = f + D;
			else {
				switch (s.value) {
					case "left":
						O = d - T, k = d;
						break;
					case "center":
						O = d - E, k = d + E;
						break;
					case "right":
						O = d, k = d + T;
						break;
				}
				switch (c.value) {
					case "top":
						A = f - w, j = f;
						break;
					case "center":
						A = f - D, j = f + D;
						break;
					case "bottom":
						A = f, j = f + w;
						break;
				}
			}
			var M = m - Math.max(v, b) - S - C, N = m + Math.max(v, b) + S + C, P = h - Math.max(v, b) - S - C, F = h + Math.max(v, b) + S + C;
			O += M, k += N, A += P, j += F;
			var I = n || "main", L = a.labelBounds, R = L[I] = L[I] || {};
			R.x1 = O, R.y1 = A, R.x2 = k, R.y2 = j, R.w = k - O, R.h = j - A, R.leftPad = M, R.rightPad = N, R.topPad = P, R.botPad = F;
			var z = g && _.strValue === "autorotate", B = _.pfValue != null && _.pfValue !== 0;
			if (z || B) {
				var V = z ? prefixedProperty(a.rstyle, "labelAngle", n) : _.pfValue, H = Math.cos(V), U = Math.sin(V), W = (O + k) / 2, G = (A + j) / 2;
				if (!g) {
					switch (s.value) {
						case "left":
							W = k;
							break;
						case "right":
							W = O;
							break;
					}
					switch (c.value) {
						case "top":
							G = j;
							break;
						case "bottom":
							G = A;
							break;
					}
				}
				var q = function(e, t) {
					return e -= W, t -= G, {
						x: e * H - t * U + W,
						y: e * U + t * H + G
					};
				}, J = q(O, A), Y = q(O, j), X = q(k, A), Z = q(k, j);
				O = Math.min(J.x, Y.x, X.x, Z.x), k = Math.max(J.x, Y.x, X.x, Z.x), A = Math.min(J.y, Y.y, X.y, Z.y), j = Math.max(J.y, Y.y, X.y, Z.y);
			}
			var Q = I + "Rot", $ = L[Q] = L[Q] || {};
			$.x1 = O, $.y1 = A, $.x2 = k, $.y2 = j, $.w = k - O, $.h = j - A, updateBounds(e, O, A, k, j), updateBounds(a.labelBounds.all, O, A, k, j);
		}
		return e;
	}
}, updateBoundsFromOutline = function(e, t) {
	if (!t.cy().headless()) {
		var n = t.pstyle("outline-opacity").value, r = t.pstyle("outline-width").value + t.pstyle("outline-offset").value;
		updateBoundsFromMiter(e, t, n, r, "outside", r / 2);
	}
}, updateBoundsFromMiter = function(e, t, n, r, a, o) {
	if (!(n === 0 || r <= 0 || a === "inside")) {
		var s = t.cy(), c = t.pstyle("shape").value, l = s.renderer().nodeShapes[c], u = t.position(), d = u.x, f = u.y, m = t.width(), h = t.height();
		l.hasMiterBounds ? (a === "center" && (r /= 2), updateBoundsFromBox(e, l.miterBounds(d, f, m, h, r))) : o != null && o > 0 && expandBoundingBoxSides(e, [
			o,
			o,
			o,
			o
		]);
	}
}, updateBoundsFromMiterBorder = function(e, t) {
	if (!t.cy().headless()) {
		var n = t.pstyle("border-opacity").value, r = t.pstyle("border-width").pfValue, a = t.pstyle("border-position").value;
		updateBoundsFromMiter(e, t, n, r, a);
	}
}, boundingBoxImpl = function(e, t) {
	var n = e._private.cy, r = n.styleEnabled(), a = n.headless(), o = makeBoundingBox(), s = e._private, c = e.isNode(), l = e.isEdge(), u, d, f, m, h, g, _ = s.rstyle, v = c && r ? e.pstyle("bounds-expansion").pfValue : [0], b = function(e) {
		return e.pstyle("display").value !== "none";
	}, S = !r || b(e) && (!l || b(e.source()) && b(e.target()));
	if (S) {
		var C = 0, w = 0;
		r && t.includeOverlays && (C = e.pstyle("overlay-opacity").value, C !== 0 && (w = e.pstyle("overlay-padding").value));
		var T = 0, E = 0;
		r && t.includeUnderlays && (T = e.pstyle("underlay-opacity").value, T !== 0 && (E = e.pstyle("underlay-padding").value));
		var D = Math.max(w, E), O = 0, k = 0;
		if (r && (O = e.pstyle("width").pfValue, k = O / 2), c && t.includeNodes) {
			var A = e.position();
			h = A.x, g = A.y;
			var j = e.outerWidth() / 2, M = e.outerHeight() / 2;
			u = h - j, d = h + j, f = g - M, m = g + M, updateBounds(o, u, f, d, m), r && updateBoundsFromOutline(o, e), r && t.includeOutlines && !a && updateBoundsFromOutline(o, e), r && updateBoundsFromMiterBorder(o, e);
		} else if (l && t.includeEdges) if (r && !a) {
			var N = e.pstyle("curve-style").strValue;
			if (u = Math.min(_.srcX, _.midX, _.tgtX), d = Math.max(_.srcX, _.midX, _.tgtX), f = Math.min(_.srcY, _.midY, _.tgtY), m = Math.max(_.srcY, _.midY, _.tgtY), u -= k, d += k, f -= k, m += k, updateBounds(o, u, f, d, m), N === "haystack") {
				var P = _.haystackPts;
				if (P && P.length === 2) {
					if (u = P[0].x, f = P[0].y, d = P[1].x, m = P[1].y, u > d) {
						var F = u;
						u = d, d = F;
					}
					if (f > m) {
						var I = f;
						f = m, m = I;
					}
					updateBounds(o, u - k, f - k, d + k, m + k);
				}
			} else if (N === "bezier" || N === "unbundled-bezier" || endsWith(N, "segments") || endsWith(N, "taxi")) {
				var L;
				switch (N) {
					case "bezier":
					case "unbundled-bezier":
						L = _.bezierPts;
						break;
					case "segments":
					case "taxi":
					case "round-segments":
					case "round-taxi":
						L = _.linePts;
						break;
				}
				if (L != null) for (var R = 0; R < L.length; R++) {
					var z = L[R];
					u = z.x - k, d = z.x + k, f = z.y - k, m = z.y + k, updateBounds(o, u, f, d, m);
				}
			}
		} else {
			var B = e.source().position(), V = e.target().position();
			if (u = B.x, d = V.x, f = B.y, m = V.y, u > d) {
				var H = u;
				u = d, d = H;
			}
			if (f > m) {
				var U = f;
				f = m, m = U;
			}
			u -= k, d += k, f -= k, m += k, updateBounds(o, u, f, d, m);
		}
		if (r && t.includeEdges && l && (updateBoundsFromArrow(o, e, "mid-source"), updateBoundsFromArrow(o, e, "mid-target"), updateBoundsFromArrow(o, e, "source"), updateBoundsFromArrow(o, e, "target")), r && e.pstyle("ghost").value === "yes") {
			var W = e.pstyle("ghost-offset-x").pfValue, G = e.pstyle("ghost-offset-y").pfValue;
			updateBounds(o, o.x1 + W, o.y1 + G, o.x2 + W, o.y2 + G);
		}
		var q = s.bodyBounds = s.bodyBounds || {};
		assignBoundingBox(q, o), expandBoundingBoxSides(q, v), expandBoundingBox(q, 1), r && (u = o.x1, d = o.x2, f = o.y1, m = o.y2, updateBounds(o, u - D, f - D, d + D, m + D));
		var J = s.overlayBounds = s.overlayBounds || {};
		assignBoundingBox(J, o), expandBoundingBoxSides(J, v), expandBoundingBox(J, 1);
		var Y = s.labelBounds = s.labelBounds || {};
		Y.all == null ? Y.all = makeBoundingBox() : clearBoundingBox(Y.all), r && t.includeLabels && (t.includeMainLabels && updateBoundsFromLabel(o, e, null), l && (t.includeSourceLabels && updateBoundsFromLabel(o, e, "source"), t.includeTargetLabels && updateBoundsFromLabel(o, e, "target")));
	}
	return o.x1 = noninf(o.x1), o.y1 = noninf(o.y1), o.x2 = noninf(o.x2), o.y2 = noninf(o.y2), o.w = noninf(o.x2 - o.x1), o.h = noninf(o.y2 - o.y1), o.w > 0 && o.h > 0 && S && (expandBoundingBoxSides(o, v), expandBoundingBox(o, 1)), o;
}, getKey = function(e) {
	var t = 0, n = function(e) {
		return (e ? 1 : 0) << t++;
	}, r = 0;
	return r += n(e.incudeNodes), r += n(e.includeEdges), r += n(e.includeLabels), r += n(e.includeMainLabels), r += n(e.includeSourceLabels), r += n(e.includeTargetLabels), r += n(e.includeOverlays), r += n(e.includeOutlines), r;
}, getBoundingBoxPosKey = function(e) {
	var t = function(e) {
		return Math.round(e);
	};
	if (e.isEdge()) {
		var n = e.source().position(), r = e.target().position();
		return hashIntsArray([
			t(n.x),
			t(n.y),
			t(r.x),
			t(r.y)
		]);
	} else {
		var a = e.position();
		return hashIntsArray([t(a.x), t(a.y)]);
	}
}, cachedBoundingBoxImpl = function(e, t) {
	var n = e._private, r, a = e.isEdge(), o = (t == null ? defBbOptsKey : getKey(t)) === defBbOptsKey;
	if (n.bbCache == null ? (r = boundingBoxImpl(e, defBbOpts), n.bbCache = r, n.bbCachePosKey = getBoundingBoxPosKey(e)) : r = n.bbCache, !o) {
		var s = e.isNode();
		r = makeBoundingBox(), (t.includeNodes && s || t.includeEdges && !s) && (t.includeOverlays ? updateBoundsFromBox(r, n.overlayBounds) : updateBoundsFromBox(r, n.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!a || t.includeSourceLabels && t.includeTargetLabels) ? updateBoundsFromBox(r, n.labelBounds.all) : (t.includeMainLabels && updateBoundsFromBox(r, n.labelBounds.mainRot), t.includeSourceLabels && updateBoundsFromBox(r, n.labelBounds.sourceRot), t.includeTargetLabels && updateBoundsFromBox(r, n.labelBounds.targetRot))), r.w = r.x2 - r.x1, r.h = r.y2 - r.y1;
	}
	return r;
}, defBbOpts = {
	includeNodes: !0,
	includeEdges: !0,
	includeLabels: !0,
	includeMainLabels: !0,
	includeSourceLabels: !0,
	includeTargetLabels: !0,
	includeOverlays: !0,
	includeUnderlays: !0,
	includeOutlines: !0,
	useCache: !0
}, defBbOptsKey = getKey(defBbOpts), filledBbOpts = defaults$g(defBbOpts);
elesfn$b.boundingBox = function(e) {
	var t, n = e === void 0 || e.useCache === void 0 || e.useCache === !0, r = memoize(function(e) {
		var t = e._private;
		return t.bbCache == null || t.styleDirty || t.bbCachePosKey !== getBoundingBoxPosKey(e);
	}, function(e) {
		return e.id();
	});
	if (n && this.length === 1 && !r(this[0])) e = e === void 0 ? defBbOpts : filledBbOpts(e), t = cachedBoundingBoxImpl(this[0], e);
	else {
		t = makeBoundingBox(), e ||= defBbOpts;
		var a = filledBbOpts(e), o = this, s = o.cy().styleEnabled();
		this.edges().forEach(r), this.nodes().forEach(r), s && this.recalculateRenderedStyle(n), this.updateCompoundBounds(!n);
		for (var c = 0; c < o.length; c++) {
			var l = o[c];
			r(l) && l.dirtyBoundingBoxCache(), updateBoundsFromBox(t, cachedBoundingBoxImpl(l, a));
		}
	}
	return t.x1 = noninf(t.x1), t.y1 = noninf(t.y1), t.x2 = noninf(t.x2), t.y2 = noninf(t.y2), t.w = noninf(t.x2 - t.x1), t.h = noninf(t.y2 - t.y1), t;
}, elesfn$b.dirtyBoundingBoxCache = function() {
	for (var e = 0; e < this.length; e++) {
		var t = this[e]._private;
		t.bbCache = null, t.bbCachePosKey = null, t.bodyBounds = null, t.overlayBounds = null, t.labelBounds.all = null, t.labelBounds.source = null, t.labelBounds.target = null, t.labelBounds.main = null, t.labelBounds.sourceRot = null, t.labelBounds.targetRot = null, t.labelBounds.mainRot = null, t.arrowBounds.source = null, t.arrowBounds.target = null, t.arrowBounds["mid-source"] = null, t.arrowBounds["mid-target"] = null;
	}
	return this.emitAndNotify("bounds"), this;
}, elesfn$b.boundingBoxAt = function(e) {
	var t = this.nodes(), n = this.cy(), r = n.hasCompoundNodes(), a = n.collection();
	if (r && (a = t.filter(function(e) {
		return e.isParent();
	}), t = t.not(a)), plainObject(e)) {
		var o = e;
		e = function() {
			return o;
		};
	}
	var s = function(t, n) {
		return t._private.bbAtOldPos = e(t, n);
	}, c = function(e) {
		return e._private.bbAtOldPos;
	};
	n.startBatch(), t.forEach(s).silentPositions(e), r && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(!0));
	var l = copyBoundingBox(this.boundingBox({ useCache: !1 }));
	return t.silentPositions(c), r && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(!0)), n.endBatch(), l;
}, fn$3.boundingbox = fn$3.bb = fn$3.boundingBox, fn$3.renderedBoundingbox = fn$3.renderedBoundingBox;
var bounds = elesfn$b, fn$2 = elesfn$a = {}, elesfn$a, defineDimFns = function(e) {
	e.uppercaseName = capitalize(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = capitalize(e.outerName), fn$2[e.name] = function() {
		var t = this[0], n = t._private, r = n.cy._private.styleEnabled;
		if (t) if (r) {
			if (t.isParent()) return t.updateCompoundBounds(), n[e.autoName] || 0;
			var a = t.pstyle(e.name);
			switch (a.strValue) {
				case "label": return t.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
				default: return a.pfValue;
			}
		} else return 1;
	}, fn$2["outer" + e.uppercaseName] = function() {
		var t = this[0], n = t._private.cy._private.styleEnabled;
		if (t) if (n) {
			var r = t[e.name](), a = t.pstyle("border-position").value, o = a === "center" ? t.pstyle("border-width").pfValue : a === "outside" ? 2 * t.pstyle("border-width").pfValue : 0, s = 2 * t.padding();
			return r + o + s;
		} else return 1;
	}, fn$2["rendered" + e.uppercaseName] = function() {
		var t = this[0];
		if (t) return t[e.name]() * this.cy().zoom();
	}, fn$2["rendered" + e.uppercaseOuterName] = function() {
		var t = this[0];
		if (t) return t[e.outerName]() * this.cy().zoom();
	};
};
defineDimFns({ name: "width" }), defineDimFns({ name: "height" }), elesfn$a.padding = function() {
	var e = this[0], t = e._private;
	return e.isParent() ? (e.updateCompoundBounds(), t.autoPadding === void 0 ? e.pstyle("padding").pfValue : t.autoPadding) : e.pstyle("padding").pfValue;
}, elesfn$a.paddedHeight = function() {
	var e = this[0];
	return e.height() + 2 * e.padding();
}, elesfn$a.paddedWidth = function() {
	var e = this[0];
	return e.width() + 2 * e.padding();
};
var widthHeight = elesfn$a, ifEdge = function(e, t) {
	if (e.isEdge() && e.takesUpSpace()) return t(e);
}, ifEdgeRenderedPosition = function(e, t) {
	if (e.isEdge() && e.takesUpSpace()) {
		var n = e.cy();
		return modelToRenderedPosition$1(t(e), n.zoom(), n.pan());
	}
}, ifEdgeRenderedPositions = function(e, t) {
	if (e.isEdge() && e.takesUpSpace()) {
		var n = e.cy(), r = n.pan(), a = n.zoom();
		return t(e).map(function(e) {
			return modelToRenderedPosition$1(e, a, r);
		});
	}
}, pts = {
	controlPoints: {
		get: function(e) {
			return e.renderer().getControlPoints(e);
		},
		mult: !0
	},
	segmentPoints: {
		get: function(e) {
			return e.renderer().getSegmentPoints(e);
		},
		mult: !0
	},
	sourceEndpoint: { get: function(e) {
		return e.renderer().getSourceEndpoint(e);
	} },
	targetEndpoint: { get: function(e) {
		return e.renderer().getTargetEndpoint(e);
	} },
	midpoint: { get: function(e) {
		return e.renderer().getEdgeMidpoint(e);
	} }
}, renderedName = function(e) {
	return "rendered" + e[0].toUpperCase() + e.substr(1);
}, dimensions = extend({}, position, bounds, widthHeight, Object.keys(pts).reduce(function(e, t) {
	var n = pts[t], r = renderedName(t);
	return e[t] = function() {
		return ifEdge(this, n.get);
	}, n.mult ? e[r] = function() {
		return ifEdgeRenderedPositions(this, n.get);
	} : e[r] = function() {
		return ifEdgeRenderedPosition(this, n.get);
	}, e;
}, {})), Event = function(e, t) {
	this.recycle(e, t);
};
function returnFalse() {
	return !1;
}
function returnTrue() {
	return !0;
}
Event.prototype = {
	instanceString: function() {
		return "event";
	},
	recycle: function(e, t) {
		if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = returnFalse, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? returnTrue : returnFalse) : e != null && e.type ? t = e : this.type = e, t != null && (this.originalEvent = t.originalEvent, this.type = t.type == null ? this.type : t.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
			var n = this.position, r = this.cy.zoom(), a = this.cy.pan();
			this.renderedPosition = {
				x: n.x * r + a.x,
				y: n.y * r + a.y
			};
		}
		this.timeStamp = e && e.timeStamp || Date.now();
	},
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;
		var e = this.originalEvent;
		e && e.preventDefault && e.preventDefault();
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;
		var e = this.originalEvent;
		e && e.stopPropagation && e.stopPropagation();
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue, this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};
var eventRegex = /^([^.]+)(\.(?:[^.]+))?$/, universalNamespace = ".*", defaults$8 = {
	qualifierCompare: function(e, t) {
		return e === t;
	},
	eventMatches: function() {
		return !0;
	},
	addEventFields: function() {},
	callbackContext: function(e) {
		return e;
	},
	beforeEmit: function() {},
	afterEmit: function() {},
	bubble: function() {
		return !1;
	},
	parent: function() {
		return null;
	},
	context: null
}, defaultsKeys = Object.keys(defaults$8), emptyOpts = {};
function Emitter() {
	for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emptyOpts, t = arguments.length > 1 ? arguments[1] : void 0, n = 0; n < defaultsKeys.length; n++) {
		var r = defaultsKeys[n];
		this[r] = e[r] || defaults$8[r];
	}
	this.context = t || this.context, this.listeners = [], this.emitting = 0;
}
var p = Emitter.prototype, forEachEvent = function(e, t, n, r, a, o, s) {
	fn$6(r) && (a = r, r = null), s && (o = o == null ? s : extend({}, o, s));
	for (var c = array(n) ? n : n.split(/\s+/), l = 0; l < c.length; l++) {
		var u = c[l];
		if (!emptyString(u)) {
			var d = u.match(eventRegex);
			if (d) {
				var f = d[1];
				if (t(e, u, f, d[2] ? d[2] : null, r, a, o) === !1) break;
			}
		}
	}
}, makeEventObj = function(e, t) {
	return e.addEventFields(e.context, t), new Event(t.type, t);
}, forEachEventObj = function(e, t, n) {
	if (event(n)) {
		t(e, n);
		return;
	} else if (plainObject(n)) {
		t(e, makeEventObj(e, n));
		return;
	}
	for (var r = array(n) ? n : n.split(/\s+/), a = 0; a < r.length; a++) {
		var o = r[a];
		if (!emptyString(o)) {
			var s = o.match(eventRegex);
			if (s) {
				var c = s[1];
				t(e, makeEventObj(e, {
					type: c,
					namespace: s[2] ? s[2] : null,
					target: e.context
				}));
			}
		}
	}
};
p.on = p.addListener = function(e, t, n, r, a) {
	return forEachEvent(this, function(e, t, n, r, a, o, s) {
		fn$6(o) && e.listeners.push({
			event: t,
			callback: o,
			type: n,
			namespace: r,
			qualifier: a,
			conf: s
		});
	}, e, t, n, r, a), this;
}, p.one = function(e, t, n, r) {
	return this.on(e, t, n, r, { one: !0 });
}, p.removeListener = p.off = function(e, t, n, r) {
	var a = this;
	this.emitting !== 0 && (this.listeners = copyArray(this.listeners));
	for (var o = this.listeners, s = function(s) {
		var c = o[s];
		forEachEvent(a, function(t, n, r, a, l, u) {
			if ((c.type === r || e === "*") && (!a && c.namespace !== ".*" || c.namespace === a) && (!l || t.qualifierCompare(c.qualifier, l)) && (!u || c.callback === u)) return o.splice(s, 1), !1;
		}, e, t, n, r);
	}, c = o.length - 1; c >= 0; c--) s(c);
	return this;
}, p.removeAllListeners = function() {
	return this.removeListener("*");
}, p.emit = p.trigger = function(e, t, n) {
	var r = this.listeners, a = r.length;
	return this.emitting++, array(t) || (t = [t]), forEachEventObj(this, function(e, o) {
		n != null && (r = [{
			event: o.event,
			type: o.type,
			namespace: o.namespace,
			callback: n
		}], a = r.length);
		for (var s = function() {
			var n = r[c];
			if (n.type === o.type && (!n.namespace || n.namespace === o.namespace || n.namespace === universalNamespace) && e.eventMatches(e.context, n, o)) {
				var a = [o];
				t != null && push(a, t), e.beforeEmit(e.context, n, o), n.conf && n.conf.one && (e.listeners = e.listeners.filter(function(e) {
					return e !== n;
				}));
				var s = e.callbackContext(e.context, n, o), l = n.callback.apply(s, a);
				e.afterEmit(e.context, n, o), l === !1 && (o.stopPropagation(), o.preventDefault());
			}
		}, c = 0; c < a; c++) s();
		e.bubble(e.context) && !o.isPropagationStopped() && e.parent(e.context).emit(o, t);
	}, e), this.emitting--, this;
};
var emitterOptions$1 = {
	qualifierCompare: function(e, t) {
		return e == null || t == null ? e == null && t == null : e.sameText(t);
	},
	eventMatches: function(e, t, n) {
		var r = t.qualifier;
		return r == null ? !0 : e !== n.target && element(n.target) && r.matches(n.target);
	},
	addEventFields: function(e, t) {
		t.cy = e.cy(), t.target = e;
	},
	callbackContext: function(e, t, n) {
		return t.qualifier == null ? e : n.target;
	},
	beforeEmit: function(e, t) {
		t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
	},
	bubble: function() {
		return !0;
	},
	parent: function(e) {
		return e.isChild() ? e.parent() : e.cy();
	}
}, argSelector$1 = function(e) {
	return string(e) ? new Selector(e) : e;
}, elesfn$9 = {
	createEmitter: function() {
		for (var e = 0; e < this.length; e++) {
			var t = this[e], n = t._private;
			n.emitter ||= new Emitter(emitterOptions$1, t);
		}
		return this;
	},
	emitter: function() {
		return this._private.emitter;
	},
	on: function(e, t, n) {
		for (var r = argSelector$1(t), a = 0; a < this.length; a++) this[a].emitter().on(e, r, n);
		return this;
	},
	removeListener: function(e, t, n) {
		for (var r = argSelector$1(t), a = 0; a < this.length; a++) this[a].emitter().removeListener(e, r, n);
		return this;
	},
	removeAllListeners: function() {
		for (var e = 0; e < this.length; e++) this[e].emitter().removeAllListeners();
		return this;
	},
	one: function(e, t, n) {
		for (var r = argSelector$1(t), a = 0; a < this.length; a++) this[a].emitter().one(e, r, n);
		return this;
	},
	once: function(e, t, n) {
		for (var r = argSelector$1(t), a = 0; a < this.length; a++) this[a].emitter().on(e, r, n, {
			once: !0,
			onceCollection: this
		});
	},
	emit: function(e, t) {
		for (var n = 0; n < this.length; n++) this[n].emitter().emit(e, t);
		return this;
	},
	emitAndNotify: function(e, t) {
		if (this.length !== 0) return this.cy().notify(e, this), this.emit(e, t), this;
	}
};
define.eventAliasesOn(elesfn$9);
var elesfn$8 = {
	nodes: function(e) {
		return this.filter(function(e) {
			return e.isNode();
		}).filter(e);
	},
	edges: function(e) {
		return this.filter(function(e) {
			return e.isEdge();
		}).filter(e);
	},
	byGroup: function() {
		for (var e = this.spawn(), t = this.spawn(), n = 0; n < this.length; n++) {
			var r = this[n];
			r.isNode() ? e.push(r) : t.push(r);
		}
		return {
			nodes: e,
			edges: t
		};
	},
	filter: function(e, t) {
		if (e === void 0) return this;
		if (string(e) || elementOrCollection(e)) return new Selector(e).filter(this);
		if (fn$6(e)) {
			for (var n = this.spawn(), r = this, a = 0; a < r.length; a++) {
				var o = r[a];
				(t ? e.apply(t, [
					o,
					a,
					r
				]) : e(o, a, r)) && n.push(o);
			}
			return n;
		}
		return this.spawn();
	},
	not: function(e) {
		if (e) {
			string(e) && (e = this.filter(e));
			for (var t = this.spawn(), n = 0; n < this.length; n++) {
				var r = this[n];
				e.has(r) || t.push(r);
			}
			return t;
		} else return this;
	},
	absoluteComplement: function() {
		return this.cy().mutableElements().not(this);
	},
	intersect: function(e) {
		if (string(e)) {
			var t = e;
			return this.filter(t);
		}
		for (var n = this.spawn(), r = this, a = e, o = this.length < e.length, s = o ? r : a, c = o ? a : r, l = 0; l < s.length; l++) {
			var u = s[l];
			c.has(u) && n.push(u);
		}
		return n;
	},
	xor: function(e) {
		var t = this._private.cy;
		string(e) && (e = t.$(e));
		var n = this.spawn(), r = this, a = e, o = function(e, t) {
			for (var r = 0; r < e.length; r++) {
				var a = e[r], o = a._private.data.id;
				t.hasElementWithId(o) || n.push(a);
			}
		};
		return o(r, a), o(a, r), n;
	},
	diff: function(e) {
		var t = this._private.cy;
		string(e) && (e = t.$(e));
		var n = this.spawn(), r = this.spawn(), a = this.spawn(), o = this, s = e, c = function(e, t, n) {
			for (var r = 0; r < e.length; r++) {
				var o = e[r], s = o._private.data.id;
				t.hasElementWithId(s) ? a.merge(o) : n.push(o);
			}
		};
		return c(o, s, n), c(s, o, r), {
			left: n,
			right: r,
			both: a
		};
	},
	add: function(e) {
		var t = this._private.cy;
		if (!e) return this;
		if (string(e)) {
			var n = e;
			e = t.mutableElements().filter(n);
		}
		for (var r = this.spawnSelf(), a = 0; a < e.length; a++) {
			var o = e[a];
			this.has(o) || r.push(o);
		}
		return r;
	},
	merge: function(e) {
		var t = this._private, n = t.cy;
		if (!e) return this;
		if (e && string(e)) {
			var r = e;
			e = n.mutableElements().filter(r);
		}
		for (var a = t.map, o = 0; o < e.length; o++) {
			var s = e[o], c = s._private.data.id;
			if (!a.has(c)) {
				var l = this.length++;
				this[l] = s, a.set(c, {
					ele: s,
					index: l
				});
			}
		}
		return this;
	},
	unmergeAt: function(e) {
		var t = this[e].id(), n = this._private.map;
		this[e] = void 0, n.delete(t);
		var r = e === this.length - 1;
		if (this.length > 1 && !r) {
			var a = this.length - 1, o = this[a], s = o._private.data.id;
			this[a] = void 0, this[e] = o, n.set(s, {
				ele: o,
				index: e
			});
		}
		return this.length--, this;
	},
	unmergeOne: function(e) {
		e = e[0];
		var t = this._private, n = e._private.data.id, r = t.map.get(n);
		if (!r) return this;
		var a = r.index;
		return this.unmergeAt(a), this;
	},
	unmerge: function(e) {
		var t = this._private.cy;
		if (!e) return this;
		if (e && string(e)) {
			var n = e;
			e = t.mutableElements().filter(n);
		}
		for (var r = 0; r < e.length; r++) this.unmergeOne(e[r]);
		return this;
	},
	unmergeBy: function(e) {
		for (var t = this.length - 1; t >= 0; t--) {
			var n = this[t];
			e(n) && this.unmergeAt(t);
		}
		return this;
	},
	map: function(e, t) {
		for (var n = [], r = this, a = 0; a < r.length; a++) {
			var o = r[a], s = t ? e.apply(t, [
				o,
				a,
				r
			]) : e(o, a, r);
			n.push(s);
		}
		return n;
	},
	reduce: function(e, t) {
		for (var n = t, r = this, a = 0; a < r.length; a++) n = e(n, r[a], a, r);
		return n;
	},
	max: function(e, t) {
		for (var n = -Infinity, r, a = this, o = 0; o < a.length; o++) {
			var s = a[o], c = t ? e.apply(t, [
				s,
				o,
				a
			]) : e(s, o, a);
			c > n && (n = c, r = s);
		}
		return {
			value: n,
			ele: r
		};
	},
	min: function(e, t) {
		for (var n = Infinity, r, a = this, o = 0; o < a.length; o++) {
			var s = a[o], c = t ? e.apply(t, [
				s,
				o,
				a
			]) : e(s, o, a);
			c < n && (n = c, r = s);
		}
		return {
			value: n,
			ele: r
		};
	}
}, fn$1 = elesfn$8;
fn$1.u = fn$1["|"] = fn$1["+"] = fn$1.union = fn$1.or = fn$1.add, fn$1["\\"] = fn$1["!"] = fn$1["-"] = fn$1.difference = fn$1.relativeComplement = fn$1.subtract = fn$1.not, fn$1.n = fn$1["&"] = fn$1["."] = fn$1.and = fn$1.intersection = fn$1.intersect, fn$1["^"] = fn$1["(+)"] = fn$1["(-)"] = fn$1.symmetricDifference = fn$1.symdiff = fn$1.xor, fn$1.fnFilter = fn$1.filterFn = fn$1.stdFilter = fn$1.filter, fn$1.complement = fn$1.abscomp = fn$1.absoluteComplement;
var elesfn$7 = {
	isNode: function() {
		return this.group() === "nodes";
	},
	isEdge: function() {
		return this.group() === "edges";
	},
	isLoop: function() {
		return this.isEdge() && this.source()[0] === this.target()[0];
	},
	isSimple: function() {
		return this.isEdge() && this.source()[0] !== this.target()[0];
	},
	group: function() {
		var e = this[0];
		if (e) return e._private.group;
	}
}, zIndexSort = function(e, t) {
	var n = e.cy().hasCompoundNodes();
	function r(e) {
		var t = e.pstyle("z-compound-depth");
		return t.value === "auto" ? n ? e.zDepth() : 0 : t.value === "bottom" ? -1 : t.value === "top" ? MAX_INT$1 : 0;
	}
	var a = r(e) - r(t);
	if (a !== 0) return a;
	function o(e) {
		return e.pstyle("z-index-compare").value === "auto" && e.isNode() ? 1 : 0;
	}
	var s = o(e) - o(t);
	if (s !== 0) return s;
	var c = e.pstyle("z-index").value - t.pstyle("z-index").value;
	return c === 0 ? e.poolIndex() - t.poolIndex() : c;
}, elesfn$6 = {
	forEach: function(e, t) {
		if (fn$6(e)) for (var n = this.length, r = 0; r < n; r++) {
			var a = this[r];
			if ((t ? e.apply(t, [
				a,
				r,
				this
			]) : e(a, r, this)) === !1) break;
		}
		return this;
	},
	toArray: function() {
		for (var e = [], t = 0; t < this.length; t++) e.push(this[t]);
		return e;
	},
	slice: function(e, t) {
		var n = [], r = this.length;
		t ??= r, e ??= 0, e < 0 && (e = r + e), t < 0 && (t = r + t);
		for (var a = e; a >= 0 && a < t && a < r; a++) n.push(this[a]);
		return this.spawn(n);
	},
	size: function() {
		return this.length;
	},
	eq: function(e) {
		return this[e] || this.spawn();
	},
	first: function() {
		return this[0] || this.spawn();
	},
	last: function() {
		return this[this.length - 1] || this.spawn();
	},
	empty: function() {
		return this.length === 0;
	},
	nonempty: function() {
		return !this.empty();
	},
	sort: function(e) {
		if (!fn$6(e)) return this;
		var t = this.toArray().sort(e);
		return this.spawn(t);
	},
	sortByZIndex: function() {
		return this.sort(zIndexSort);
	},
	zDepth: function() {
		var e = this[0];
		if (e) {
			var t = e._private;
			if (t.group === "nodes") {
				var n = t.data.parent ? e.parents().size() : 0;
				return e.isParent() ? n : MAX_INT$1 - 1;
			} else {
				var r = t.source, a = t.target, o = r.zDepth(), s = a.zDepth();
				return Math.max(o, s, 0);
			}
		}
	}
};
elesfn$6.each = elesfn$6.forEach, (function() {
	var e = "undefined";
	(typeof Symbol > "u" ? "undefined" : _typeof(Symbol)) != e && _typeof(Symbol.iterator) != e && (elesfn$6[Symbol.iterator] = function() {
		var e = this, t = {
			value: void 0,
			done: !1
		}, n = 0, r = this.length;
		return _defineProperty$1({ next: function() {
			return n < r ? t.value = e[n++] : (t.value = void 0, t.done = !0), t;
		} }, Symbol.iterator, function() {
			return this;
		});
	});
})();
var getLayoutDimensionOptions = defaults$g({ nodeDimensionsIncludeLabels: !1 }), elesfn$5 = {
	layoutDimensions: function(e) {
		e = getLayoutDimensionOptions(e);
		var t;
		if (!this.takesUpSpace()) t = {
			w: 0,
			h: 0
		};
		else if (e.nodeDimensionsIncludeLabels) {
			var n = this.boundingBox();
			t = {
				w: n.w,
				h: n.h
			};
		} else t = {
			w: this.outerWidth(),
			h: this.outerHeight()
		};
		return (t.w === 0 || t.h === 0) && (t.w = t.h = 1), t;
	},
	layoutPositions: function(e, t, n) {
		var r = this.nodes().filter(function(e) {
			return !e.isParent();
		}), a = this.cy(), o = t.eles, s = function(e) {
			return e.id();
		}, c = memoize(n, s);
		e.emit({
			type: "layoutstart",
			layout: e
		}), e.animations = [];
		var l = function(e, t, n) {
			var r = {
				x: t.x1 + t.w / 2,
				y: t.y1 + t.h / 2
			}, a = {
				x: (n.x - r.x) * e,
				y: (n.y - r.y) * e
			};
			return {
				x: r.x + a.x,
				y: r.y + a.y
			};
		}, u = t.spacingFactor && t.spacingFactor !== 1, d = function() {
			if (!u) return null;
			for (var e = makeBoundingBox(), t = 0; t < r.length; t++) {
				var n = r[t], a = c(n, t);
				expandBoundingBoxByPoint(e, a.x, a.y);
			}
			return e;
		}(), f = memoize(function(e, n) {
			var r = c(e, n);
			return u && (r = l(Math.abs(t.spacingFactor), d, r)), t.transform != null && (r = t.transform(e, r)), r;
		}, s);
		if (t.animate) {
			for (var m = 0; m < r.length; m++) {
				var h = r[m], g = f(h, m);
				if (t.animateFilter == null || t.animateFilter(h, m)) {
					var _ = h.animation({
						position: g,
						duration: t.animationDuration,
						easing: t.animationEasing
					});
					e.animations.push(_);
				} else h.position(g);
			}
			if (t.fit) {
				var v = a.animation({
					fit: {
						boundingBox: o.boundingBoxAt(f),
						padding: t.padding
					},
					duration: t.animationDuration,
					easing: t.animationEasing
				});
				e.animations.push(v);
			} else if (t.zoom !== void 0 && t.pan !== void 0) {
				var b = a.animation({
					zoom: t.zoom,
					pan: t.pan,
					duration: t.animationDuration,
					easing: t.animationEasing
				});
				e.animations.push(b);
			}
			e.animations.forEach(function(e) {
				return e.play();
			}), e.one("layoutready", t.ready), e.emit({
				type: "layoutready",
				layout: e
			}), Promise$1.all(e.animations.map(function(e) {
				return e.promise();
			})).then(function() {
				e.one("layoutstop", t.stop), e.emit({
					type: "layoutstop",
					layout: e
				});
			});
		} else r.positions(f), t.fit && a.fit(t.eles, t.padding), t.zoom != null && a.zoom(t.zoom), t.pan && a.pan(t.pan), e.one("layoutready", t.ready), e.emit({
			type: "layoutready",
			layout: e
		}), e.one("layoutstop", t.stop), e.emit({
			type: "layoutstop",
			layout: e
		});
		return this;
	},
	layout: function(e) {
		return this.cy().makeLayout(extend({}, e, { eles: this }));
	}
};
elesfn$5.createLayout = elesfn$5.makeLayout = elesfn$5.layout;
function styleCache(e, t, n) {
	var r = n._private, a = r.styleCache = r.styleCache || [], o;
	return (o = a[e]) ?? (o = a[e] = t(n)), o;
}
function cacheStyleFunction(e, t) {
	return e = hashString(e), function(n) {
		return styleCache(e, t, n);
	};
}
function cachePrototypeStyleFunction(e, t) {
	e = hashString(e);
	var n = function(e) {
		return t.call(e);
	};
	return function() {
		var t = this[0];
		if (t) return styleCache(e, n, t);
	};
}
var elesfn$4 = {
	recalculateRenderedStyle: function(e) {
		var t = this.cy(), n = t.renderer(), r = t.styleEnabled();
		return n && r && n.recalculateRenderedStyle(this, e), this;
	},
	dirtyStyleCache: function() {
		var e = this.cy(), t = function(e) {
			return e._private.styleCache = null;
		};
		if (e.hasCompoundNodes()) {
			var n = this.spawnSelf().merge(this.descendants()).merge(this.parents());
			n.merge(n.connectedEdges()), n.forEach(t);
		} else this.forEach(function(e) {
			t(e), e.connectedEdges().forEach(t);
		});
		return this;
	},
	updateStyle: function(e) {
		var t = this._private.cy;
		if (!t.styleEnabled()) return this;
		if (t.batching()) return t._private.batchStyleEles.merge(this), this;
		var n = t.hasCompoundNodes(), r = this;
		e = !!(e || e === void 0), n && (r = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
		var a = r;
		return e ? a.emitAndNotify("style") : a.emit("style"), r.forEach(function(e) {
			return e._private.styleDirty = !0;
		}), this;
	},
	cleanStyle: function() {
		var e = this.cy();
		if (e.styleEnabled()) for (var t = 0; t < this.length; t++) {
			var n = this[t];
			n._private.styleDirty && (n._private.styleDirty = !1, e.style().apply(n));
		}
	},
	parsedStyle: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = this[0], r = n.cy();
		if (r.styleEnabled() && n) return n._private.styleDirty && (n._private.styleDirty = !1, r.style().apply(n)), n._private.style[e] ?? (t ? r.style().getDefaultProperty(e) : null);
	},
	numericStyle: function(e) {
		var t = this[0];
		if (t.cy().styleEnabled() && t) {
			var n = t.pstyle(e);
			return n.pfValue === void 0 ? n.value : n.pfValue;
		}
	},
	numericStyleUnits: function(e) {
		var t = this[0];
		if (t.cy().styleEnabled() && t) return t.pstyle(e).units;
	},
	renderedStyle: function(e) {
		var t = this.cy();
		if (!t.styleEnabled()) return this;
		var n = this[0];
		if (n) return t.style().getRenderedStyle(n, e);
	},
	style: function(e, t) {
		var n = this.cy();
		if (!n.styleEnabled()) return this;
		var r = !1, a = n.style();
		if (plainObject(e)) {
			var o = e;
			a.applyBypass(this, o, r), this.emitAndNotify("style");
		} else if (string(e)) if (t === void 0) {
			var s = this[0];
			return s ? a.getStylePropertyValue(s, e) : void 0;
		} else a.applyBypass(this, e, t, r), this.emitAndNotify("style");
		else if (e === void 0) {
			var c = this[0];
			return c ? a.getRawStyle(c) : void 0;
		}
		return this;
	},
	removeStyle: function(e) {
		var t = this.cy();
		if (!t.styleEnabled()) return this;
		var n = !1, r = t.style(), a = this;
		if (e === void 0) for (var o = 0; o < a.length; o++) {
			var s = a[o];
			r.removeAllBypasses(s, n);
		}
		else {
			e = e.split(/\s+/);
			for (var c = 0; c < a.length; c++) {
				var l = a[c];
				r.removeBypasses(l, e, n);
			}
		}
		return this.emitAndNotify("style"), this;
	},
	show: function() {
		return this.css("display", "element"), this;
	},
	hide: function() {
		return this.css("display", "none"), this;
	},
	effectiveOpacity: function() {
		var e = this.cy();
		if (!e.styleEnabled()) return 1;
		var t = e.hasCompoundNodes(), n = this[0];
		if (n) {
			var r = n._private, a = n.pstyle("opacity").value;
			if (!t) return a;
			var o = r.data.parent ? n.parents() : null;
			if (o) for (var s = 0; s < o.length; s++) a = o[s].pstyle("opacity").value * a;
			return a;
		}
	},
	transparent: function() {
		if (!this.cy().styleEnabled()) return !1;
		var e = this[0], t = e.cy().hasCompoundNodes();
		if (e) return t ? e.effectiveOpacity() === 0 : e.pstyle("opacity").value === 0;
	},
	backgrounding: function() {
		return this.cy().styleEnabled() ? !!this[0]._private.backgrounding : !1;
	}
};
function checkCompound(e, t) {
	var n = e._private.data.parent ? e.parents() : null;
	if (n) for (var r = 0; r < n.length; r++) {
		var a = n[r];
		if (!t(a)) return !1;
	}
	return !0;
}
function defineDerivedStateFunction(e) {
	var t = e.ok, n = e.edgeOkViaNode || e.ok, r = e.parentOk || e.ok;
	return function() {
		var e = this.cy();
		if (!e.styleEnabled()) return !0;
		var a = this[0], o = e.hasCompoundNodes();
		if (a) {
			var s = a._private;
			if (!t(a)) return !1;
			if (a.isNode()) return !o || checkCompound(a, r);
			var c = s.source, l = s.target;
			return n(c) && (!o || checkCompound(c, n)) && (c === l || n(l) && (!o || checkCompound(l, n)));
		}
	};
}
var eleTakesUpSpace = cacheStyleFunction("eleTakesUpSpace", function(e) {
	return e.pstyle("display").value === "element" && e.width() !== 0 && (e.isNode() ? e.height() !== 0 : !0);
});
elesfn$4.takesUpSpace = cachePrototypeStyleFunction("takesUpSpace", defineDerivedStateFunction({ ok: eleTakesUpSpace })), elesfn$4.interactive = cachePrototypeStyleFunction("interactive", defineDerivedStateFunction({
	ok: cacheStyleFunction("eleInteractive", function(e) {
		return e.pstyle("events").value === "yes" && e.pstyle("visibility").value === "visible" && eleTakesUpSpace(e);
	}),
	parentOk: cacheStyleFunction("parentInteractive", function(e) {
		return e.pstyle("visibility").value === "visible" && eleTakesUpSpace(e);
	}),
	edgeOkViaNode: eleTakesUpSpace
})), elesfn$4.noninteractive = function() {
	var e = this[0];
	if (e) return !e.interactive();
}, elesfn$4.visible = cachePrototypeStyleFunction("visible", defineDerivedStateFunction({
	ok: cacheStyleFunction("eleVisible", function(e) {
		return e.pstyle("visibility").value === "visible" && e.pstyle("opacity").pfValue !== 0 && eleTakesUpSpace(e);
	}),
	edgeOkViaNode: eleTakesUpSpace
})), elesfn$4.hidden = function() {
	var e = this[0];
	if (e) return !e.visible();
}, elesfn$4.isBundledBezier = cachePrototypeStyleFunction("isBundledBezier", function() {
	return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
}), elesfn$4.bypass = elesfn$4.css = elesfn$4.style, elesfn$4.renderedCss = elesfn$4.renderedStyle, elesfn$4.removeBypass = elesfn$4.removeCss = elesfn$4.removeStyle, elesfn$4.pstyle = elesfn$4.parsedStyle;
var elesfn$3 = {};
function defineSwitchFunction(e) {
	return function() {
		var t = arguments, n = [];
		if (t.length === 2) {
			var r = t[0], a = t[1];
			this.on(e.event, r, a);
		} else if (t.length === 1 && fn$6(t[0])) {
			var o = t[0];
			this.on(e.event, o);
		} else if (t.length === 0 || t.length === 1 && array(t[0])) {
			for (var s = t.length === 1 ? t[0] : null, c = 0; c < this.length; c++) {
				var l = this[c], u = !e.ableField || l._private[e.ableField], d = l._private[e.field] != e.value;
				if (e.overrideAble) {
					var f = e.overrideAble(l);
					if (f !== void 0 && (u = f, !f)) return this;
				}
				u && (l._private[e.field] = e.value, d && n.push(l));
			}
			var m = this.spawn(n);
			m.updateStyle(), m.emit(e.event), s && m.emit(s);
		}
		return this;
	};
}
function defineSwitchSet(e) {
	elesfn$3[e.field] = function() {
		var t = this[0];
		if (t) {
			if (e.overrideField) {
				var n = e.overrideField(t);
				if (n !== void 0) return n;
			}
			return t._private[e.field];
		}
	}, elesfn$3[e.on] = defineSwitchFunction({
		event: e.on,
		field: e.field,
		ableField: e.ableField,
		overrideAble: e.overrideAble,
		value: !0
	}), elesfn$3[e.off] = defineSwitchFunction({
		event: e.off,
		field: e.field,
		ableField: e.ableField,
		overrideAble: e.overrideAble,
		value: !1
	});
}
defineSwitchSet({
	field: "locked",
	overrideField: function(e) {
		return e.cy().autolock() ? !0 : void 0;
	},
	on: "lock",
	off: "unlock"
}), defineSwitchSet({
	field: "grabbable",
	overrideField: function(e) {
		return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
	},
	on: "grabify",
	off: "ungrabify"
}), defineSwitchSet({
	field: "selected",
	ableField: "selectable",
	overrideAble: function(e) {
		return e.cy().autounselectify() ? !1 : void 0;
	},
	on: "select",
	off: "unselect"
}), defineSwitchSet({
	field: "selectable",
	overrideField: function(e) {
		return e.cy().autounselectify() ? !1 : void 0;
	},
	on: "selectify",
	off: "unselectify"
}), elesfn$3.deselect = elesfn$3.unselect, elesfn$3.grabbed = function() {
	var e = this[0];
	if (e) return e._private.grabbed;
}, defineSwitchSet({
	field: "active",
	on: "activate",
	off: "unactivate"
}), defineSwitchSet({
	field: "pannable",
	on: "panify",
	off: "unpanify"
}), elesfn$3.inactive = function() {
	var e = this[0];
	if (e) return !e._private.active;
};
var elesfn$2 = {}, defineDagExtremity = function(e) {
	return function(t) {
		for (var n = this, r = [], a = 0; a < n.length; a++) {
			var o = n[a];
			if (o.isNode()) {
				for (var s = !1, c = o.connectedEdges(), l = 0; l < c.length; l++) {
					var u = c[l], d = u.source(), f = u.target();
					if (e.noIncomingEdges && f === o && d !== o || e.noOutgoingEdges && d === o && f !== o) {
						s = !0;
						break;
					}
				}
				s || r.push(o);
			}
		}
		return this.spawn(r, !0).filter(t);
	};
}, defineDagOneHop = function(e) {
	return function(t) {
		for (var n = this, r = [], a = 0; a < n.length; a++) {
			var o = n[a];
			if (o.isNode()) for (var s = o.connectedEdges(), c = 0; c < s.length; c++) {
				var l = s[c], u = l.source(), d = l.target();
				e.outgoing && u === o ? (r.push(l), r.push(d)) : e.incoming && d === o && (r.push(l), r.push(u));
			}
		}
		return this.spawn(r, !0).filter(t);
	};
}, defineDagAllHops = function(e) {
	return function(t) {
		for (var n = this, r = [], a = {};;) {
			var o = e.outgoing ? n.outgoers() : n.incomers();
			if (o.length === 0) break;
			for (var s = !1, c = 0; c < o.length; c++) {
				var l = o[c], u = l.id();
				a[u] || (a[u] = !0, r.push(l), s = !0);
			}
			if (!s) break;
			n = o;
		}
		return this.spawn(r, !0).filter(t);
	};
};
elesfn$2.clearTraversalCache = function() {
	for (var e = 0; e < this.length; e++) this[e]._private.traversalCache = null;
}, extend(elesfn$2, {
	roots: defineDagExtremity({ noIncomingEdges: !0 }),
	leaves: defineDagExtremity({ noOutgoingEdges: !0 }),
	outgoers: cache(defineDagOneHop({ outgoing: !0 }), "outgoers"),
	successors: defineDagAllHops({ outgoing: !0 }),
	incomers: cache(defineDagOneHop({ incoming: !0 }), "incomers"),
	predecessors: defineDagAllHops({})
}), extend(elesfn$2, {
	neighborhood: cache(function(e) {
		for (var t = [], n = this.nodes(), r = 0; r < n.length; r++) for (var a = n[r], o = a.connectedEdges(), s = 0; s < o.length; s++) {
			var c = o[s], l = c.source(), u = c.target(), d = a === l ? u : l;
			d.length > 0 && t.push(d[0]), t.push(c[0]);
		}
		return this.spawn(t, !0).filter(e);
	}, "neighborhood"),
	closedNeighborhood: function(e) {
		return this.neighborhood().add(this).filter(e);
	},
	openNeighborhood: function(e) {
		return this.neighborhood(e);
	}
}), elesfn$2.neighbourhood = elesfn$2.neighborhood, elesfn$2.closedNeighbourhood = elesfn$2.closedNeighborhood, elesfn$2.openNeighbourhood = elesfn$2.openNeighborhood, extend(elesfn$2, {
	source: cache(function(e) {
		var t = this[0], n;
		return t && (n = t._private.source || t.cy().collection()), n && e ? n.filter(e) : n;
	}, "source"),
	target: cache(function(e) {
		var t = this[0], n;
		return t && (n = t._private.target || t.cy().collection()), n && e ? n.filter(e) : n;
	}, "target"),
	sources: defineSourceFunction({ attr: "source" }),
	targets: defineSourceFunction({ attr: "target" })
});
function defineSourceFunction(e) {
	return function(t) {
		for (var n = [], r = 0; r < this.length; r++) {
			var a = this[r]._private[e.attr];
			a && n.push(a);
		}
		return this.spawn(n, !0).filter(t);
	};
}
extend(elesfn$2, {
	edgesWith: cache(defineEdgesWithFunction(), "edgesWith"),
	edgesTo: cache(defineEdgesWithFunction({ thisIsSrc: !0 }), "edgesTo")
});
function defineEdgesWithFunction(e) {
	return function(t) {
		var n = [], r = this._private.cy, a = e || {};
		string(t) && (t = r.$(t));
		for (var o = 0; o < t.length; o++) for (var s = t[o]._private.edges, c = 0; c < s.length; c++) {
			var l = s[c], u = l._private.data, d = this.hasElementWithId(u.source) && t.hasElementWithId(u.target), f = t.hasElementWithId(u.source) && this.hasElementWithId(u.target);
			(d || f) && ((a.thisIsSrc || a.thisIsTgt) && (a.thisIsSrc && !d || a.thisIsTgt && !f) || n.push(l));
		}
		return this.spawn(n, !0);
	};
}
extend(elesfn$2, {
	connectedEdges: cache(function(e) {
		for (var t = [], n = this, r = 0; r < n.length; r++) {
			var a = n[r];
			if (a.isNode()) for (var o = a._private.edges, s = 0; s < o.length; s++) {
				var c = o[s];
				t.push(c);
			}
		}
		return this.spawn(t, !0).filter(e);
	}, "connectedEdges"),
	connectedNodes: cache(function(e) {
		for (var t = [], n = this, r = 0; r < n.length; r++) {
			var a = n[r];
			a.isEdge() && (t.push(a.source()[0]), t.push(a.target()[0]));
		}
		return this.spawn(t, !0).filter(e);
	}, "connectedNodes"),
	parallelEdges: cache(defineParallelEdgesFunction(), "parallelEdges"),
	codirectedEdges: cache(defineParallelEdgesFunction({ codirected: !0 }), "codirectedEdges")
});
function defineParallelEdgesFunction(e) {
	return e = extend({}, { codirected: !1 }, e), function(t) {
		for (var n = [], r = this.edges(), a = e, o = 0; o < r.length; o++) for (var s = r[o]._private, c = s.source, l = c._private.data.id, u = s.data.target, d = c._private.edges, f = 0; f < d.length; f++) {
			var m = d[f], h = m._private.data, g = h.target, _ = h.source, v = g === u && _ === l, b = l === g && u === _;
			(a.codirected && v || !a.codirected && (v || b)) && n.push(m);
		}
		return this.spawn(n, !0).filter(t);
	};
}
extend(elesfn$2, {
	components: function(e) {
		var t = this, n = t.cy(), r = n.collection(), a = e == null ? t.nodes() : e.nodes(), o = [];
		e != null && a.empty() && (a = e.sources());
		var s = function(e, t) {
			r.merge(e), a.unmerge(e), t.merge(e);
		};
		if (a.empty()) return t.spawn();
		var c = function() {
			var e = n.collection();
			o.push(e);
			var r = a[0];
			s(r, e), t.bfs({
				directed: !1,
				roots: r,
				visit: function(t) {
					return s(t, e);
				}
			}), e.forEach(function(n) {
				n.connectedEdges().forEach(function(n) {
					t.has(n) && e.has(n.source()) && e.has(n.target()) && e.merge(n);
				});
			});
		};
		do
			c();
		while (a.length > 0);
		return o;
	},
	component: function() {
		var e = this[0];
		return e.cy().mutableElements().components(e)[0];
	}
}), elesfn$2.componentsOf = elesfn$2.components;
var Collection = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
	if (e === void 0) {
		error("A collection must have a reference to the core");
		return;
	}
	var a = new Map$1(), o = !1;
	if (!t) t = [];
	else if (t.length > 0 && plainObject(t[0]) && !element(t[0])) {
		o = !0;
		for (var s = [], c = new Set$1(), l = 0, u = t.length; l < u; l++) {
			var d = t[l];
			d.data ??= {};
			var f = d.data;
			if (f.id == null) f.id = uuid();
			else if (e.hasElementWithId(f.id) || c.has(f.id)) continue;
			var m = new Element(e, d, !1);
			s.push(m), c.add(f.id);
		}
		t = s;
	}
	this.length = 0;
	for (var h = 0, g = t.length; h < g; h++) {
		var _ = t[h][0];
		if (_ != null) {
			var v = _._private.data.id;
			(!n || !a.has(v)) && (n && a.set(v, {
				index: this.length,
				ele: _
			}), this[this.length] = _, this.length++);
		}
	}
	this._private = {
		eles: this,
		cy: e,
		get map() {
			return this.lazyMap ?? this.rebuildMap(), this.lazyMap;
		},
		set map(e) {
			this.lazyMap = e;
		},
		rebuildMap: function() {
			for (var e = this.lazyMap = new Map$1(), t = this.eles, n = 0; n < t.length; n++) {
				var r = t[n];
				e.set(r.id(), {
					index: n,
					ele: r
				});
			}
		}
	}, n && (this._private.map = a), o && !r && this.restore();
}, elesfn$1 = Element.prototype = Collection.prototype = Object.create(Array.prototype);
elesfn$1.instanceString = function() {
	return "collection";
}, elesfn$1.spawn = function(e, t) {
	return new Collection(this.cy(), e, t);
}, elesfn$1.spawnSelf = function() {
	return this.spawn(this);
}, elesfn$1.cy = function() {
	return this._private.cy;
}, elesfn$1.renderer = function() {
	return this._private.cy.renderer();
}, elesfn$1.element = function() {
	return this[0];
}, elesfn$1.collection = function() {
	return collection(this) ? this : new Collection(this._private.cy, [this]);
}, elesfn$1.unique = function() {
	return new Collection(this._private.cy, this, !0);
}, elesfn$1.hasElementWithId = function(e) {
	return e = "" + e, this._private.map.has(e);
}, elesfn$1.getElementById = function(e) {
	e = "" + e;
	var t = this._private.cy, n = this._private.map.get(e);
	return n ? n.ele : new Collection(t);
}, elesfn$1.$id = elesfn$1.getElementById, elesfn$1.poolIndex = function() {
	var e = this._private.cy._private.elements, t = this[0]._private.data.id;
	return e._private.map.get(t).index;
}, elesfn$1.indexOf = function(e) {
	var t = e[0]._private.data.id;
	return this._private.map.get(t).index;
}, elesfn$1.indexOfId = function(e) {
	return e = "" + e, this._private.map.get(e).index;
}, elesfn$1.json = function(e) {
	var t = this.element(), n = this.cy();
	if (t == null && e) return this;
	if (t != null) {
		var r = t._private;
		if (plainObject(e)) {
			if (n.startBatch(), e.data) {
				t.data(e.data);
				var a = r.data;
				if (t.isEdge()) {
					var o = !1, s = {}, c = e.data.source, l = e.data.target;
					c != null && c != a.source && (s.source = "" + c, o = !0), l != null && l != a.target && (s.target = "" + l, o = !0), o && (t = t.move(s));
				} else {
					var u = "parent" in e.data, d = e.data.parent;
					u && (d != null || a.parent != null) && d != a.parent && (d === void 0 && (d = null), d != null && (d = "" + d), t = t.move({ parent: d }));
				}
			}
			e.position && t.position(e.position);
			var f = function(n, a, o) {
				var s = e[n];
				s != null && s !== r[n] && (s ? t[a]() : t[o]());
			};
			return f("removed", "remove", "restore"), f("selected", "select", "unselect"), f("selectable", "selectify", "unselectify"), f("locked", "lock", "unlock"), f("grabbable", "grabify", "ungrabify"), f("pannable", "panify", "unpanify"), e.classes != null && t.classes(e.classes), n.endBatch(), this;
		} else if (e === void 0) {
			var m = {
				data: copy(r.data),
				position: copy(r.position),
				group: r.group,
				removed: r.removed,
				selected: r.selected,
				selectable: r.selectable,
				locked: r.locked,
				grabbable: r.grabbable,
				pannable: r.pannable,
				classes: null
			};
			m.classes = "";
			var h = 0;
			return r.classes.forEach(function(e) {
				return m.classes += h++ === 0 ? e : " " + e;
			}), m;
		}
	}
}, elesfn$1.jsons = function() {
	for (var e = [], t = 0; t < this.length; t++) {
		var n = this[t].json();
		e.push(n);
	}
	return e;
}, elesfn$1.clone = function() {
	for (var e = this.cy(), t = [], n = 0; n < this.length; n++) {
		var r = new Element(e, this[n].json(), !1);
		t.push(r);
	}
	return new Collection(e, t);
}, elesfn$1.copy = elesfn$1.clone, elesfn$1.restore = function() {
	for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = this, r = n.cy(), a = r._private, o = [], s = [], c, l = 0, u = n.length; l < u; l++) {
		var d = n[l];
		t && !d.removed() || (d.isNode() ? o.push(d) : s.push(d));
	}
	c = o.concat(s);
	var f, m = function() {
		c.splice(f, 1), f--;
	};
	for (f = 0; f < c.length; f++) {
		var h = c[f], g = h._private, _ = g.data;
		if (h.clearTraversalCache(), !(!t && !g.removed)) {
			if (_.id === void 0) _.id = uuid();
			else if (number$1(_.id)) _.id = "" + _.id;
			else if (emptyString(_.id) || !string(_.id)) {
				error("Can not create element with invalid string ID `" + _.id + "`"), m();
				continue;
			} else if (r.hasElementWithId(_.id)) {
				error("Can not create second element with ID `" + _.id + "`"), m();
				continue;
			}
		}
		var v = _.id;
		if (h.isNode()) {
			var b = g.position;
			b.x ??= 0, b.y ??= 0;
		}
		if (h.isEdge()) {
			for (var S = h, C = ["source", "target"], w = C.length, T = !1, E = 0; E < w; E++) {
				var D = C[E], O = _[D];
				number$1(O) && (O = _[D] = "" + _[D]), O == null || O === "" ? (error("Can not create edge `" + v + "` with unspecified " + D), T = !0) : r.hasElementWithId(O) || (error("Can not create edge `" + v + "` with nonexistant " + D + " `" + O + "`"), T = !0);
			}
			if (T) {
				m();
				continue;
			}
			var k = r.getElementById(_.source), A = r.getElementById(_.target);
			k.same(A) ? k._private.edges.push(S) : (k._private.edges.push(S), A._private.edges.push(S)), S._private.source = k, S._private.target = A;
		}
		g.map = new Map$1(), g.map.set(v, {
			ele: h,
			index: 0
		}), g.removed = !1, t && r.addToPool(h);
	}
	for (var M = 0; M < o.length; M++) {
		var N = o[M], P = N._private.data;
		number$1(P.parent) && (P.parent = "" + P.parent);
		var F = P.parent;
		if (F != null || N._private.parent) {
			var L = N._private.parent ? r.collection().merge(N._private.parent) : r.getElementById(F);
			if (L.empty()) P.parent = void 0;
			else if (L[0].removed()) warn("Node added with missing parent, reference to parent removed"), P.parent = void 0, N._private.parent = null;
			else {
				for (var R = !1, z = L; !z.empty();) {
					if (N.same(z)) {
						R = !0, P.parent = void 0;
						break;
					}
					z = z.parent();
				}
				R || (L[0]._private.children.push(N), N._private.parent = L[0], a.hasCompoundNodes = !0);
			}
		}
	}
	if (c.length > 0) {
		for (var B = c.length === n.length ? n : new Collection(r, c), V = 0; V < B.length; V++) {
			var H = B[V];
			H.isNode() || (H.parallelEdges().clearTraversalCache(), H.source().clearTraversalCache(), H.target().clearTraversalCache());
		}
		(a.hasCompoundNodes ? r.collection().merge(B).merge(B.connectedNodes()).merge(B.parent()) : B).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(e), e ? B.emitAndNotify("add") : t && B.emit("add");
	}
	return n;
}, elesfn$1.removed = function() {
	var e = this[0];
	return e && e._private.removed;
}, elesfn$1.inside = function() {
	var e = this[0];
	return e && !e._private.removed;
}, elesfn$1.remove = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = this, r = [], a = {}, o = n._private.cy;
	function s(e) {
		for (var t = e._private.edges, n = 0; n < t.length; n++) l(t[n]);
	}
	function c(e) {
		for (var t = e._private.children, n = 0; n < t.length; n++) l(t[n]);
	}
	function l(e) {
		var n = a[e.id()];
		t && e.removed() || n || (a[e.id()] = !0, e.isNode() ? (r.push(e), s(e), c(e)) : r.unshift(e));
	}
	for (var u = 0, d = n.length; u < d; u++) {
		var f = n[u];
		l(f);
	}
	function m(e, t) {
		var n = e._private.edges;
		removeFromArray(n, t), e.clearTraversalCache();
	}
	function h(e) {
		e.clearTraversalCache();
	}
	var g = [];
	g.ids = {};
	function _(e, t) {
		t = t[0], e = e[0];
		var n = e._private.children, r = e.id();
		removeFromArray(n, t), t._private.parent = null, g.ids[r] || (g.ids[r] = !0, g.push(e));
	}
	n.dirtyCompoundBoundsCache(), t && o.removeFromPool(r);
	for (var v = 0; v < r.length; v++) {
		var b = r[v];
		if (b.isEdge()) {
			var S = b.source()[0], C = b.target()[0];
			m(S, b), m(C, b);
			for (var w = b.parallelEdges(), T = 0; T < w.length; T++) {
				var E = w[T];
				h(E), E.isBundledBezier() && E.dirtyBoundingBoxCache();
			}
		} else {
			var D = b.parent();
			D.length !== 0 && _(D, b);
		}
		t && (b._private.removed = !0);
	}
	var O = o._private.elements;
	o._private.hasCompoundNodes = !1;
	for (var k = 0; k < O.length; k++) if (O[k].isParent()) {
		o._private.hasCompoundNodes = !0;
		break;
	}
	var A = new Collection(this.cy(), r);
	A.size() > 0 && (e ? A.emitAndNotify("remove") : t && A.emit("remove"));
	for (var j = 0; j < g.length; j++) {
		var M = g[j];
		(!t || !M.removed()) && M.updateStyle();
	}
	return A;
}, elesfn$1.move = function(e) {
	var t = this._private.cy, n = this, r = !1, a = !1, o = function(e) {
		return e == null ? e : "" + e;
	};
	if (e.source !== void 0 || e.target !== void 0) {
		var s = o(e.source), c = o(e.target), l = s != null && t.hasElementWithId(s), u = c != null && t.hasElementWithId(c);
		(l || u) && (t.batch(function() {
			n.remove(r, a), n.emitAndNotify("moveout");
			for (var e = 0; e < n.length; e++) {
				var t = n[e], o = t._private.data;
				t.isEdge() && (l && (o.source = s), u && (o.target = c));
			}
			n.restore(r, a);
		}), n.emitAndNotify("move"));
	} else if (e.parent !== void 0) {
		var d = o(e.parent);
		if (d === null || t.hasElementWithId(d)) {
			var f = d === null ? void 0 : d;
			t.batch(function() {
				var e = n.remove(r, a);
				e.emitAndNotify("moveout");
				for (var t = 0; t < n.length; t++) {
					var o = n[t], s = o._private.data;
					o.isNode() && (s.parent = f);
				}
				e.restore(r, a);
			}), n.emitAndNotify("move");
		}
	}
	return this;
}, [
	elesfn$j,
	elesfn$i,
	elesfn$h,
	elesfn$g,
	elesfn$f,
	data,
	elesfn$d,
	dimensions,
	elesfn$9,
	elesfn$8,
	elesfn$7,
	elesfn$6,
	elesfn$5,
	elesfn$4,
	elesfn$3,
	elesfn$2
].forEach(function(e) {
	extend(elesfn$1, e);
});
var corefn$9 = {
	add: function(e) {
		var t, n = this;
		if (elementOrCollection(e)) {
			var r = e;
			if (r._private.cy === n) t = r.restore();
			else {
				for (var a = [], o = 0; o < r.length; o++) {
					var s = r[o];
					a.push(s.json());
				}
				t = new Collection(n, a);
			}
		} else if (array(e)) t = new Collection(n, e);
		else if (plainObject(e) && (array(e.nodes) || array(e.edges))) {
			for (var c = e, l = [], u = ["nodes", "edges"], d = 0, f = u.length; d < f; d++) {
				var m = u[d], h = c[m];
				if (array(h)) for (var g = 0, _ = h.length; g < _; g++) {
					var v = extend({ group: m }, h[g]);
					l.push(v);
				}
			}
			t = new Collection(n, l);
		} else t = new Element(n, e).collection();
		return t;
	},
	remove: function(e) {
		if (!elementOrCollection(e) && string(e)) {
			var t = e;
			e = this.$(t);
		}
		return e.remove();
	}
};
/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function generateCubicBezier(e, t, n, r) {
	var a = 4, o = .001, s = 1e-7, c = 10, l = 11, u = 1 / (l - 1), d = typeof Float32Array < "u";
	if (arguments.length !== 4) return !1;
	for (var f = 0; f < 4; ++f) if (typeof arguments[f] != "number" || isNaN(arguments[f]) || !isFinite(arguments[f])) return !1;
	e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
	var m = d ? new Float32Array(l) : Array(l);
	function h(e, t) {
		return 1 - 3 * t + 3 * e;
	}
	function g(e, t) {
		return 3 * t - 6 * e;
	}
	function _(e) {
		return 3 * e;
	}
	function v(e, t, n) {
		return ((h(t, n) * e + g(t, n)) * e + _(t)) * e;
	}
	function b(e, t, n) {
		return 3 * h(t, n) * e * e + 2 * g(t, n) * e + _(t);
	}
	function S(t, r) {
		for (var o = 0; o < a; ++o) {
			var s = b(r, e, n);
			if (s === 0) return r;
			var c = v(r, e, n) - t;
			r -= c / s;
		}
		return r;
	}
	function C() {
		for (var t = 0; t < l; ++t) m[t] = v(t * u, e, n);
	}
	function w(t, r, a) {
		var o, l, u = 0;
		do
			l = r + (a - r) / 2, o = v(l, e, n) - t, o > 0 ? a = l : r = l;
		while (Math.abs(o) > s && ++u < c);
		return l;
	}
	function T(t) {
		for (var r = 0, a = 1, s = l - 1; a !== s && m[a] <= t; ++a) r += u;
		--a;
		var c = (t - m[a]) / (m[a + 1] - m[a]), d = r + c * u, f = b(d, e, n);
		return f >= o ? S(t, d) : f === 0 ? d : w(t, r, r + u);
	}
	var E = !1;
	function D() {
		E = !0, (e !== t || n !== r) && C();
	}
	var O = function(a) {
		return E || D(), e === t && n === r ? a : a === 0 ? 0 : a === 1 ? 1 : v(T(a), t, r);
	};
	O.getControlPoints = function() {
		return [{
			x: e,
			y: t
		}, {
			x: n,
			y: r
		}];
	};
	var k = "generateBezier(" + [
		e,
		t,
		n,
		r
	] + ")";
	return O.toString = function() {
		return k;
	}, O;
}
/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var generateSpringRK4 = function() {
	function e(e) {
		return -e.tension * e.x - e.friction * e.v;
	}
	function t(t, n, r) {
		var a = {
			x: t.x + r.dx * n,
			v: t.v + r.dv * n,
			tension: t.tension,
			friction: t.friction
		};
		return {
			dx: a.v,
			dv: e(a)
		};
	}
	function n(n, r) {
		var a = {
			dx: n.v,
			dv: e(n)
		}, o = t(n, r * .5, a), s = t(n, r * .5, o), c = t(n, r, s), l = 1 / 6 * (a.dx + 2 * (o.dx + s.dx) + c.dx), u = 1 / 6 * (a.dv + 2 * (o.dv + s.dv) + c.dv);
		return n.x += l * r, n.v += u * r, n;
	}
	return function e(t, r, a) {
		var o = {
			x: -1,
			v: 0,
			tension: null,
			friction: null
		}, s = [0], c = 0, l = 1 / 1e4, u = 16 / 1e3, d, f, m;
		for (t = parseFloat(t) || 500, r = parseFloat(r) || 20, a ||= null, o.tension = t, o.friction = r, d = a !== null, d ? (c = e(t, r), f = c / a * u) : f = u; m = n(m || o, f), s.push(1 + m.x), c += 16, Math.abs(m.x) > l && Math.abs(m.v) > l;);
		return d ? function(e) {
			return s[e * (s.length - 1) | 0];
		} : c;
	};
}(), cubicBezier = function(e, t, n, r) {
	var a = generateCubicBezier(e, t, n, r);
	return function(e, t, n) {
		return e + (t - e) * a(n);
	};
}, easings = {
	linear: function(e, t, n) {
		return e + (t - e) * n;
	},
	ease: cubicBezier(.25, .1, .25, 1),
	"ease-in": cubicBezier(.42, 0, 1, 1),
	"ease-out": cubicBezier(0, 0, .58, 1),
	"ease-in-out": cubicBezier(.42, 0, .58, 1),
	"ease-in-sine": cubicBezier(.47, 0, .745, .715),
	"ease-out-sine": cubicBezier(.39, .575, .565, 1),
	"ease-in-out-sine": cubicBezier(.445, .05, .55, .95),
	"ease-in-quad": cubicBezier(.55, .085, .68, .53),
	"ease-out-quad": cubicBezier(.25, .46, .45, .94),
	"ease-in-out-quad": cubicBezier(.455, .03, .515, .955),
	"ease-in-cubic": cubicBezier(.55, .055, .675, .19),
	"ease-out-cubic": cubicBezier(.215, .61, .355, 1),
	"ease-in-out-cubic": cubicBezier(.645, .045, .355, 1),
	"ease-in-quart": cubicBezier(.895, .03, .685, .22),
	"ease-out-quart": cubicBezier(.165, .84, .44, 1),
	"ease-in-out-quart": cubicBezier(.77, 0, .175, 1),
	"ease-in-quint": cubicBezier(.755, .05, .855, .06),
	"ease-out-quint": cubicBezier(.23, 1, .32, 1),
	"ease-in-out-quint": cubicBezier(.86, 0, .07, 1),
	"ease-in-expo": cubicBezier(.95, .05, .795, .035),
	"ease-out-expo": cubicBezier(.19, 1, .22, 1),
	"ease-in-out-expo": cubicBezier(1, 0, 0, 1),
	"ease-in-circ": cubicBezier(.6, .04, .98, .335),
	"ease-out-circ": cubicBezier(.075, .82, .165, 1),
	"ease-in-out-circ": cubicBezier(.785, .135, .15, .86),
	spring: function(e, t, n) {
		if (n === 0) return easings.linear;
		var r = generateSpringRK4(e, t, n);
		return function(e, t, n) {
			return e + (t - e) * r(n);
		};
	},
	"cubic-bezier": cubicBezier
};
function getEasedValue(e, t, n, r, a) {
	if (r === 1 || t === n) return n;
	var o = a(t, n, r);
	return e == null ? o : ((e.roundValue || e.color) && (o = Math.round(o)), e.min !== void 0 && (o = Math.max(o, e.min)), e.max !== void 0 && (o = Math.min(o, e.max)), o);
}
function getValue(e, t) {
	return e.pfValue != null || e.value != null ? e.pfValue != null && (t == null || t.type.units !== "%") ? e.pfValue : e.value : e;
}
function ease(e, t, n, r, a) {
	var o = a == null ? null : a.type;
	n < 0 ? n = 0 : n > 1 && (n = 1);
	var s = getValue(e, a), c = getValue(t, a);
	if (number$1(s) && number$1(c)) return getEasedValue(o, s, c, n, r);
	if (array(s) && array(c)) {
		for (var l = [], u = 0; u < c.length; u++) {
			var d = s[u], f = c[u];
			if (d != null && f != null) {
				var m = getEasedValue(o, d, f, n, r);
				l.push(m);
			} else l.push(f);
		}
		return l;
	}
}
function step$1(e, t, n, r) {
	var a = !r, o = e._private, s = t._private, c = s.easing, l = s.startTime, u = (r ? e : e.cy()).style();
	if (!s.easingImpl) if (c == null) s.easingImpl = easings.linear;
	else {
		var d = string(c) ? u.parse("transition-timing-function", c).value : c, f, m;
		string(d) ? (f = d, m = []) : (f = d[1], m = d.slice(2).map(function(e) {
			return +e;
		})), m.length > 0 ? (f === "spring" && m.push(s.duration), s.easingImpl = easings[f].apply(null, m)) : s.easingImpl = easings[f];
	}
	var h = s.easingImpl, g = s.duration === 0 ? 1 : (n - l) / s.duration;
	if (s.applying && (g = s.progress), g < 0 ? g = 0 : g > 1 && (g = 1), s.delay == null) {
		var _ = s.startPosition, v = s.position;
		if (v && a && !e.locked()) {
			var b = {};
			valid(_.x, v.x) && (b.x = ease(_.x, v.x, g, h)), valid(_.y, v.y) && (b.y = ease(_.y, v.y, g, h)), e.position(b);
		}
		var S = s.startPan, C = s.pan, w = o.pan, T = C != null && r;
		T && (valid(S.x, C.x) && (w.x = ease(S.x, C.x, g, h)), valid(S.y, C.y) && (w.y = ease(S.y, C.y, g, h)), e.emit("pan"));
		var E = s.startZoom, D = s.zoom, O = D != null && r;
		O && (valid(E, D) && (o.zoom = bound(o.minZoom, ease(E, D, g, h), o.maxZoom)), e.emit("zoom")), (T || O) && e.emit("viewport");
		var k = s.style;
		if (k && k.length > 0 && a) {
			for (var A = 0; A < k.length; A++) {
				var M = k[A], N = M.name, P = M, F = s.startStyle[N], I = u.properties[F.name], L = ease(F, P, g, h, I);
				u.overrideBypass(e, N, L);
			}
			e.emit("style");
		}
	}
	return s.progress = g, g;
}
function valid(e, t) {
	return e == null || t == null ? !1 : number$1(e) && number$1(t) ? !0 : !!(e && t);
}
function startAnimation(e, t, n, r) {
	var a = t._private;
	a.started = !0, a.startTime = n - a.progress * a.duration;
}
function stepAll(e, t) {
	var n = t._private.aniEles, r = [];
	function a(t, n) {
		var a = t._private, o = a.animation.current, s = a.animation.queue, c = !1;
		if (o.length === 0) {
			var l = s.shift();
			l && o.push(l);
		}
		for (var u = function(e) {
			for (var t = e.length - 1; t >= 0; t--) {
				var n = e[t];
				n();
			}
			e.splice(0, e.length);
		}, d = o.length - 1; d >= 0; d--) {
			var f = o[d], m = f._private;
			if (m.stopped) {
				o.splice(d, 1), m.hooked = !1, m.playing = !1, m.started = !1, u(m.frames);
				continue;
			}
			!m.playing && !m.applying || (m.playing && m.applying && (m.applying = !1), m.started || startAnimation(t, f, e), step$1(t, f, e, n), m.applying &&= !1, u(m.frames), m.step != null && m.step(e), f.completed() && (o.splice(d, 1), m.hooked = !1, m.playing = !1, m.started = !1, u(m.completes)), c = !0);
		}
		return !n && o.length === 0 && s.length === 0 && r.push(t), c;
	}
	for (var o = !1, s = 0; s < n.length; s++) {
		var c = n[s], l = a(c);
		o ||= l;
	}
	var u = a(t, !0);
	(o || u) && (n.length > 0 ? t.notify("draw", n) : t.notify("draw")), n.unmerge(r), t.emit("step");
}
var corefn$8 = {
	animate: define.animate(),
	animation: define.animation(),
	animated: define.animated(),
	clearQueue: define.clearQueue(),
	delay: define.delay(),
	delayAnimation: define.delayAnimation(),
	stop: define.stop(),
	addToAnimationPool: function(e) {
		var t = this;
		t.styleEnabled() && t._private.aniEles.merge(e);
	},
	stopAnimationLoop: function() {
		this._private.animationsRunning = !1;
	},
	startAnimationLoop: function() {
		var e = this;
		if (e._private.animationsRunning = !0, !e.styleEnabled()) return;
		function t() {
			e._private.animationsRunning && requestAnimationFrame(function(n) {
				stepAll(n, e), t();
			});
		}
		var n = e.renderer();
		n && n.beforeRender ? n.beforeRender(function(t, n) {
			stepAll(n, e);
		}, n.beforeRenderPriorities.animations) : t();
	}
}, emitterOptions = {
	qualifierCompare: function(e, t) {
		return e == null || t == null ? e == null && t == null : e.sameText(t);
	},
	eventMatches: function(e, t, n) {
		var r = t.qualifier;
		return r == null ? !0 : e !== n.target && element(n.target) && r.matches(n.target);
	},
	addEventFields: function(e, t) {
		t.cy = e, t.target = e;
	},
	callbackContext: function(e, t, n) {
		return t.qualifier == null ? e : n.target;
	}
}, argSelector = function(e) {
	return string(e) ? new Selector(e) : e;
}, elesfn = {
	createEmitter: function() {
		var e = this._private;
		return e.emitter ||= new Emitter(emitterOptions, this), this;
	},
	emitter: function() {
		return this._private.emitter;
	},
	on: function(e, t, n) {
		return this.emitter().on(e, argSelector(t), n), this;
	},
	removeListener: function(e, t, n) {
		return this.emitter().removeListener(e, argSelector(t), n), this;
	},
	removeAllListeners: function() {
		return this.emitter().removeAllListeners(), this;
	},
	one: function(e, t, n) {
		return this.emitter().one(e, argSelector(t), n), this;
	},
	once: function(e, t, n) {
		return this.emitter().one(e, argSelector(t), n), this;
	},
	emit: function(e, t) {
		return this.emitter().emit(e, t), this;
	},
	emitAndNotify: function(e, t) {
		return this.emit(e), this.notify(e, t), this;
	}
};
define.eventAliasesOn(elesfn);
var corefn$7 = {
	png: function(e) {
		var t = this._private.renderer;
		return e ||= {}, t.png(e);
	},
	jpg: function(e) {
		var t = this._private.renderer;
		return e ||= {}, e.bg = e.bg || "#fff", t.jpg(e);
	}
};
corefn$7.jpeg = corefn$7.jpg;
var corefn$6 = { layout: function(e) {
	var t = this;
	if (e == null) {
		error("Layout options must be specified to make a layout");
		return;
	}
	if (e.name == null) {
		error("A `name` must be specified to make a layout");
		return;
	}
	var n = e.name, r = t.extension("layout", n);
	if (r == null) {
		error("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?");
		return;
	}
	return new r(extend({}, e, {
		cy: t,
		eles: string(e.eles) ? t.$(e.eles) : e.eles == null ? t.$() : e.eles
	}));
} };
corefn$6.createLayout = corefn$6.makeLayout = corefn$6.layout;
var corefn$5 = {
	notify: function(e, t) {
		var n = this._private;
		if (this.batching()) {
			n.batchNotifications = n.batchNotifications || {};
			var r = n.batchNotifications[e] = n.batchNotifications[e] || this.collection();
			t != null && r.merge(t);
			return;
		}
		if (n.notificationsEnabled) {
			var a = this.renderer();
			this.destroyed() || !a || a.notify(e, t);
		}
	},
	notifications: function(e) {
		var t = this._private;
		return e === void 0 ? t.notificationsEnabled : (t.notificationsEnabled = !!e, this);
	},
	noNotifications: function(e) {
		this.notifications(!1), e(), this.notifications(!0);
	},
	batching: function() {
		return this._private.batchCount > 0;
	},
	startBatch: function() {
		var e = this._private;
		return e.batchCount ??= 0, e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
	},
	endBatch: function() {
		var e = this._private;
		if (e.batchCount === 0) return this;
		if (e.batchCount--, e.batchCount === 0) {
			e.batchStyleEles.updateStyle();
			var t = this.renderer();
			Object.keys(e.batchNotifications).forEach(function(n) {
				var r = e.batchNotifications[n];
				r.empty() ? t.notify(n) : t.notify(n, r);
			});
		}
		return this;
	},
	batch: function(e) {
		return this.startBatch(), e(), this.endBatch(), this;
	},
	batchData: function(e) {
		var t = this;
		return this.batch(function() {
			for (var n = Object.keys(e), r = 0; r < n.length; r++) {
				var a = n[r], o = e[a];
				t.getElementById(a).data(o);
			}
		});
	}
}, rendererDefaults = defaults$g({
	hideEdgesOnViewport: !1,
	textureOnViewport: !1,
	motionBlur: !1,
	motionBlurOpacity: .05,
	pixelRatio: void 0,
	desktopTapThreshold: 4,
	touchTapThreshold: 8,
	wheelSensitivity: 1,
	debug: !1,
	showFps: !1,
	webgl: !1,
	webglDebug: !1,
	webglDebugShowAtlases: !1,
	webglTexSize: 2048,
	webglTexRows: 36,
	webglTexRowsNodes: 18,
	webglBatchSize: 2048,
	webglTexPerBatch: 14,
	webglBgColor: [
		255,
		255,
		255
	]
}), corefn$4 = {
	renderTo: function(e, t, n, r) {
		return this._private.renderer.renderTo(e, t, n, r), this;
	},
	renderer: function() {
		return this._private.renderer;
	},
	forceRender: function() {
		return this.notify("draw"), this;
	},
	resize: function() {
		return this.invalidateSize(), this.emitAndNotify("resize"), this;
	},
	initRenderer: function(e) {
		var t = this, n = t.extension("renderer", e.name);
		if (n == null) {
			error(`Can not initialise: No such renderer \`${e.name}\` found. Did you forget to import it and \`cytoscape.use()\` it?`);
			return;
		}
		e.wheelSensitivity !== void 0 && warn("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
		var r = rendererDefaults(e);
		r.cy = t, t._private.renderer = new n(r), this.notify("init");
	},
	destroyRenderer: function() {
		var e = this;
		e.notify("destroy");
		var t = e.container();
		if (t) for (t._cyreg = null; t.childNodes.length > 0;) t.removeChild(t.childNodes[0]);
		e._private.renderer = null, e.mutableElements().forEach(function(e) {
			var t = e._private;
			t.rscratch = {}, t.rstyle = {}, t.animation.current = [], t.animation.queue = [];
		});
	},
	onRender: function(e) {
		return this.on("render", e);
	},
	offRender: function(e) {
		return this.off("render", e);
	}
};
corefn$4.invalidateDimensions = corefn$4.resize;
var corefn$3 = {
	collection: function(e, t) {
		return string(e) ? this.$(e) : elementOrCollection(e) ? e.collection() : array(e) ? (t ||= {}, new Collection(this, e, t.unique, t.removed)) : new Collection(this);
	},
	nodes: function(e) {
		var t = this.$(function(e) {
			return e.isNode();
		});
		return e ? t.filter(e) : t;
	},
	edges: function(e) {
		var t = this.$(function(e) {
			return e.isEdge();
		});
		return e ? t.filter(e) : t;
	},
	$: function(e) {
		var t = this._private.elements;
		return e ? t.filter(e) : t.spawnSelf();
	},
	mutableElements: function() {
		return this._private.elements;
	}
};
corefn$3.elements = corefn$3.filter = corefn$3.$;
var styfn$8 = {}, TRUE = "t", FALSE = "f";
styfn$8.apply = function(e) {
	for (var t = this, n = t._private.cy.collection(), r = 0; r < e.length; r++) {
		var a = e[r], o = t.getContextMeta(a);
		if (!o.empty) {
			var s = t.getContextStyle(o), c = t.applyContextStyle(o, s, a);
			a._private.appliedInitStyle ? t.updateTransitions(a, c.diffProps) : a._private.appliedInitStyle = !0, t.updateStyleHints(a) && n.push(a);
		}
	}
	return n;
}, styfn$8.getPropertiesDiff = function(e, t) {
	var n = this, r = n._private.propDiffs = n._private.propDiffs || {}, a = e + "-" + t, o = r[a];
	if (o) return o;
	for (var s = [], c = {}, l = 0; l < n.length; l++) {
		var u = n[l], d = e[l] === TRUE, f = t[l] === TRUE, m = d !== f, h = u.mappedProperties.length > 0;
		if (m || f && h) {
			var g = void 0;
			m && h || m ? g = u.properties : h && (g = u.mappedProperties);
			for (var _ = 0; _ < g.length; _++) {
				for (var v = g[_], b = v.name, S = !1, C = l + 1; C < n.length; C++) {
					var w = n[C];
					if (t[C] === TRUE && (S = w.properties[v.name] != null, S)) break;
				}
				!c[b] && !S && (c[b] = !0, s.push(b));
			}
		}
	}
	return r[a] = s, s;
}, styfn$8.getContextMeta = function(e) {
	for (var t = this, n = "", r, a = e._private.styleCxtKey || "", o = 0; o < t.length; o++) {
		var s = t[o];
		s.selector && s.selector.matches(e) ? n += TRUE : n += FALSE;
	}
	return r = t.getPropertiesDiff(a, n), e._private.styleCxtKey = n, {
		key: n,
		diffPropNames: r,
		empty: r.length === 0
	};
}, styfn$8.getContextStyle = function(e) {
	var t = e.key, n = this, r = this._private.contextStyles = this._private.contextStyles || {};
	if (r[t]) return r[t];
	for (var a = { _private: { key: t } }, o = 0; o < n.length; o++) {
		var s = n[o];
		if (t[o] === TRUE) for (var c = 0; c < s.properties.length; c++) {
			var l = s.properties[c];
			a[l.name] = l;
		}
	}
	return r[t] = a, a;
}, styfn$8.applyContextStyle = function(e, t, n) {
	for (var r = this, a = e.diffPropNames, o = {}, s = r.types, c = 0; c < a.length; c++) {
		var l = a[c], u = t[l], d = n.pstyle(l);
		if (!u) if (d) u = d.bypass ? {
			name: l,
			deleteBypassed: !0
		} : {
			name: l,
			delete: !0
		};
		else continue;
		if (d !== u) {
			if (u.mapped === s.fn && d != null && d.mapping != null && d.mapping.value === u.value) {
				var f = d.mapping;
				if ((f.fnValue = u.value(n)) === f.prevFnValue) continue;
			}
			var m = o[l] = { prev: d };
			r.applyParsedProperty(n, u), m.next = n.pstyle(l), m.next && m.next.bypass && (m.next = m.next.bypassed);
		}
	}
	return { diffProps: o };
}, styfn$8.updateStyleHints = function(e) {
	var t = e._private, n = this, r = n.propertyGroupNames, a = n.propertyGroupKeys, o = function(e, t, r) {
		return n.getPropertiesHash(e, t, r);
	}, s = t.styleKey;
	if (e.removed()) return !1;
	var c = t.group === "nodes", l = e._private.style;
	r = Object.keys(l);
	for (var u = 0; u < a.length; u++) {
		var d = a[u];
		t.styleKeys[d] = [DEFAULT_HASH_SEED, DEFAULT_HASH_SEED_ALT];
	}
	for (var f = function(e, n) {
		return t.styleKeys[n][0] = hashInt(e, t.styleKeys[n][0]);
	}, m = function(e, n) {
		return t.styleKeys[n][1] = hashIntAlt(e, t.styleKeys[n][1]);
	}, h = function(e, t) {
		f(e, t), m(e, t);
	}, g = function(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = e.charCodeAt(n);
			f(r, t), m(r, t);
		}
	}, _ = 2e9, v = function(e) {
		return -128 < e && e < 128 && Math.floor(e) !== e ? _ - (e * 1024 | 0) : e;
	}, b = 0; b < r.length; b++) {
		var S = r[b], C = l[S];
		if (C != null) {
			var w = this.properties[S], T = w.type, E = w.groupKey, D = void 0;
			w.hashOverride == null ? C.pfValue != null && (D = C.pfValue) : D = w.hashOverride(e, C);
			var O = w.enums == null ? C.value : null, k = D != null, A = k || O != null, j = C.units;
			T.number && A && !T.multiple ? (h(v(k ? D : O), E), !k && j != null && g(j, E)) : g(C.strValue, E);
		}
	}
	for (var M = [DEFAULT_HASH_SEED, DEFAULT_HASH_SEED_ALT], N = 0; N < a.length; N++) {
		var P = a[N], F = t.styleKeys[P];
		M[0] = hashInt(F[0], M[0]), M[1] = hashIntAlt(F[1], M[1]);
	}
	t.styleKey = combineHashes(M[0], M[1]);
	var I = t.styleKeys;
	t.labelDimsKey = combineHashesArray(I.labelDimensions);
	var L = o(e, ["label"], I.labelDimensions);
	if (t.labelKey = combineHashesArray(L), t.labelStyleKey = combineHashesArray(hashArrays(I.commonLabel, L)), !c) {
		var R = o(e, ["source-label"], I.labelDimensions);
		t.sourceLabelKey = combineHashesArray(R), t.sourceLabelStyleKey = combineHashesArray(hashArrays(I.commonLabel, R));
		var z = o(e, ["target-label"], I.labelDimensions);
		t.targetLabelKey = combineHashesArray(z), t.targetLabelStyleKey = combineHashesArray(hashArrays(I.commonLabel, z));
	}
	if (c) {
		var B = t.styleKeys, V = B.nodeBody, H = B.nodeBorder, U = B.nodeOutline, W = B.backgroundImage, G = B.compound, q = B.pie, J = B.stripe;
		t.nodeKey = combineHashesArray([
			V,
			H,
			U,
			W,
			G,
			q,
			J
		].filter(function(e) {
			return e != null;
		}).reduce(hashArrays, [DEFAULT_HASH_SEED, DEFAULT_HASH_SEED_ALT])), t.hasPie = q != null && q[0] !== DEFAULT_HASH_SEED && q[1] !== DEFAULT_HASH_SEED_ALT, t.hasStripe = J != null && J[0] !== DEFAULT_HASH_SEED && J[1] !== DEFAULT_HASH_SEED_ALT;
	}
	return s !== t.styleKey;
}, styfn$8.clearStyleHints = function(e) {
	var t = e._private;
	t.styleCxtKey = "", t.styleKeys = {}, t.styleKey = null, t.labelKey = null, t.labelStyleKey = null, t.sourceLabelKey = null, t.sourceLabelStyleKey = null, t.targetLabelKey = null, t.targetLabelStyleKey = null, t.nodeKey = null, t.hasPie = null, t.hasStripe = null;
}, styfn$8.applyParsedProperty = function(e, t) {
	var n = this, r = t, a = e._private.style, o, s = n.types, c = n.properties[r.name].type, l = r.bypass, u = a[r.name], d = u && u.bypass, f = e._private, m = "mapping", h = function(e) {
		return e == null ? null : e.pfValue == null ? e.value : e.pfValue;
	}, g = function() {
		var t = h(u), a = h(r);
		n.checkTriggers(e, r.name, t, a);
	};
	if (t.name === "curve-style" && e.isEdge() && (t.value !== "bezier" && e.isLoop() || t.value === "haystack" && (e.source().isParent() || e.target().isParent())) && (r = t = this.parse(t.name, "bezier", l)), r.delete) return a[r.name] = void 0, g(), !0;
	if (r.deleteBypassed) return u ? u.bypass ? (u.bypassed = void 0, g(), !0) : !1 : (g(), !0);
	if (r.deleteBypass) return u ? u.bypass ? (a[r.name] = u.bypassed, g(), !0) : !1 : (g(), !0);
	var _ = function() {
		warn("Do not assign mappings to elements without corresponding data (i.e. ele `" + e.id() + "` has no mapping for property `" + r.name + "` with data field `" + r.field + "`); try a `[" + r.field + "]` selector to limit scope to elements with `" + r.field + "` defined");
	};
	switch (r.mapped) {
		case s.mapData:
			for (var v = r.field.split("."), b = f.data, S = 0; S < v.length && b; S++) {
				var C = v[S];
				b = b[C];
			}
			if (b == null) return _(), !1;
			var w;
			if (number$1(b)) {
				var T = r.fieldMax - r.fieldMin;
				w = T === 0 ? 0 : (b - r.fieldMin) / T;
			} else return warn("Do not use continuous mappers without specifying numeric data (i.e. `" + r.field + ": " + b + "` for `" + e.id() + "` is non-numeric)"), !1;
			if (w < 0 ? w = 0 : w > 1 && (w = 1), c.color) {
				var E = r.valueMin[0], D = r.valueMax[0], O = r.valueMin[1], k = r.valueMax[1], A = r.valueMin[2], j = r.valueMax[2], M = r.valueMin[3] == null ? 1 : r.valueMin[3], N = r.valueMax[3] == null ? 1 : r.valueMax[3], P = [
					Math.round(E + (D - E) * w),
					Math.round(O + (k - O) * w),
					Math.round(A + (j - A) * w),
					Math.round(M + (N - M) * w)
				];
				o = {
					bypass: r.bypass,
					name: r.name,
					value: P,
					strValue: "rgb(" + P[0] + ", " + P[1] + ", " + P[2] + ")"
				};
			} else if (c.number) {
				var F = r.valueMin + (r.valueMax - r.valueMin) * w;
				o = this.parse(r.name, F, r.bypass, m);
			} else return !1;
			if (!o) return _(), !1;
			o.mapping = r, r = o;
			break;
		case s.data:
			for (var L = r.field.split("."), R = f.data, z = 0; z < L.length && R; z++) {
				var B = L[z];
				R = R[B];
			}
			if (R != null && (o = this.parse(r.name, R, r.bypass, m)), !o) return _(), !1;
			o.mapping = r, r = o;
			break;
		case s.fn:
			var V = r.value, H = r.fnValue == null ? V(e) : r.fnValue;
			if (r.prevFnValue = H, H == null) return warn("Custom function mappers may not return null (i.e. `" + r.name + "` for ele `" + e.id() + "` is null)"), !1;
			if (o = this.parse(r.name, H, r.bypass, m), !o) return warn("Custom function mappers may not return invalid values for the property type (i.e. `" + r.name + "` for ele `" + e.id() + "` is invalid)"), !1;
			o.mapping = copy(r), r = o;
			break;
		case void 0: break;
		default: return !1;
	}
	return l ? (d ? r.bypassed = u.bypassed : r.bypassed = u, a[r.name] = r) : d ? u.bypassed = r : a[r.name] = r, g(), !0;
}, styfn$8.cleanElements = function(e, t) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		if (this.clearStyleHints(r), r.dirtyCompoundBoundsCache(), r.dirtyBoundingBoxCache(), !t) r._private.style = {};
		else for (var a = r._private.style, o = Object.keys(a), s = 0; s < o.length; s++) {
			var c = o[s], l = a[c];
			l != null && (l.bypass ? l.bypassed = null : a[c] = null);
		}
	}
}, styfn$8.update = function() {
	this._private.cy.mutableElements().updateStyle();
}, styfn$8.updateTransitions = function(e, t) {
	var n = this, r = e._private, a = e.pstyle("transition-property").value, o = e.pstyle("transition-duration").pfValue, s = e.pstyle("transition-delay").pfValue;
	if (a.length > 0 && o > 0) {
		for (var c = {}, l = !1, u = 0; u < a.length; u++) {
			var d = a[u], f = e.pstyle(d), m = t[d];
			if (m) {
				var h = m.prev, g = m.next == null ? f : m.next, _ = !1, v = void 0, b = 1e-6;
				h && (number$1(h.pfValue) && number$1(g.pfValue) ? (_ = g.pfValue - h.pfValue, v = h.pfValue + b * _) : number$1(h.value) && number$1(g.value) ? (_ = g.value - h.value, v = h.value + b * _) : array(h.value) && array(g.value) && (_ = h.value[0] !== g.value[0] || h.value[1] !== g.value[1] || h.value[2] !== g.value[2], v = h.strValue), _ && (c[d] = g.strValue, this.applyBypass(e, d, v), l = !0));
			}
		}
		if (!l) return;
		r.transitioning = !0, new Promise$1(function(t) {
			s > 0 ? e.delayAnimation(s).play().promise().then(t) : t();
		}).then(function() {
			return e.animation({
				style: c,
				duration: o,
				easing: e.pstyle("transition-timing-function").value,
				queue: !1
			}).play().promise();
		}).then(function() {
			n.removeBypasses(e, a), e.emitAndNotify("style"), r.transitioning = !1;
		});
	} else r.transitioning &&= (this.removeBypasses(e, a), e.emitAndNotify("style"), !1);
}, styfn$8.checkTrigger = function(e, t, n, r, a, o) {
	var s = this.properties[t], c = a(s);
	e.removed() || c != null && c(n, r, e) && o(s);
}, styfn$8.checkZOrderTrigger = function(e, t, n, r) {
	var a = this;
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersZOrder;
	}, function() {
		a._private.cy.notify("zorder", e);
	});
}, styfn$8.checkBoundsTrigger = function(e, t, n, r) {
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersBounds;
	}, function(t) {
		e.dirtyCompoundBoundsCache(), e.dirtyBoundingBoxCache();
	});
}, styfn$8.checkConnectedEdgesBoundsTrigger = function(e, t, n, r) {
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersBoundsOfConnectedEdges;
	}, function(t) {
		e.connectedEdges().forEach(function(e) {
			e.dirtyBoundingBoxCache();
		});
	});
}, styfn$8.checkParallelEdgesBoundsTrigger = function(e, t, n, r) {
	this.checkTrigger(e, t, n, r, function(e) {
		return e.triggersBoundsOfParallelEdges;
	}, function(t) {
		e.parallelEdges().forEach(function(e) {
			e.dirtyBoundingBoxCache();
		});
	});
}, styfn$8.checkTriggers = function(e, t, n, r) {
	e.dirtyStyleCache(), this.checkZOrderTrigger(e, t, n, r), this.checkBoundsTrigger(e, t, n, r), this.checkConnectedEdgesBoundsTrigger(e, t, n, r), this.checkParallelEdgesBoundsTrigger(e, t, n, r);
};
var styfn$7 = {};
styfn$7.applyBypass = function(e, t, n, r) {
	var a = this, o = [], s = !0;
	if (t === "*" || t === "**") {
		if (n !== void 0) for (var c = 0; c < a.properties.length; c++) {
			var l = a.properties[c].name, u = this.parse(l, n, !0);
			u && o.push(u);
		}
	} else if (string(t)) {
		var d = this.parse(t, n, !0);
		d && o.push(d);
	} else if (plainObject(t)) {
		var f = t;
		r = n;
		for (var m = Object.keys(f), h = 0; h < m.length; h++) {
			var g = m[h], _ = f[g];
			if (_ === void 0 && (_ = f[dash2camel(g)]), _ !== void 0) {
				var v = this.parse(g, _, !0);
				v && o.push(v);
			}
		}
	} else return !1;
	if (o.length === 0) return !1;
	for (var b = !1, S = 0; S < e.length; S++) {
		for (var C = e[S], w = {}, T = void 0, E = 0; E < o.length; E++) {
			var D = o[E];
			if (r) {
				var O = C.pstyle(D.name);
				T = w[D.name] = { prev: O };
			}
			b = this.applyParsedProperty(C, copy(D)) || b, r && (T.next = C.pstyle(D.name));
		}
		b && this.updateStyleHints(C), r && this.updateTransitions(C, w, s);
	}
	return b;
}, styfn$7.overrideBypass = function(e, t, n) {
	t = camel2dash(t);
	for (var r = 0; r < e.length; r++) {
		var a = e[r], o = a._private.style[t], s = this.properties[t].type, c = s.color, l = s.mutiple, u = o ? o.pfValue == null ? o.value : o.pfValue : null;
		!o || !o.bypass ? this.applyBypass(a, t, n) : (o.value = n, o.pfValue != null && (o.pfValue = n), c ? o.strValue = "rgb(" + n.join(",") + ")" : l ? o.strValue = n.join(" ") : o.strValue = "" + n, this.updateStyleHints(a)), this.checkTriggers(a, t, u, n);
	}
}, styfn$7.removeAllBypasses = function(e, t) {
	return this.removeBypasses(e, this.propertyNames, t);
}, styfn$7.removeBypasses = function(e, t, n) {
	for (var r = !0, a = 0; a < e.length; a++) {
		for (var o = e[a], s = {}, c = 0; c < t.length; c++) {
			var l = t[c], u = this.properties[l], d = o.pstyle(u.name);
			if (!(!d || !d.bypass)) {
				var f = this.parse(l, "", !0), m = s[u.name] = { prev: d };
				this.applyParsedProperty(o, f), m.next = o.pstyle(u.name);
			}
		}
		this.updateStyleHints(o), n && this.updateTransitions(o, s, r);
	}
};
var styfn$6 = {};
styfn$6.getEmSizeInPixels = function() {
	var e = this.containerCss("font-size");
	return e == null ? 1 : parseFloat(e);
}, styfn$6.containerCss = function(e) {
	var t = this._private.cy, n = t.container(), r = t.window();
	if (r && n && r.getComputedStyle) return r.getComputedStyle(n).getPropertyValue(e);
};
var styfn$5 = {};
styfn$5.getRenderedStyle = function(e, t) {
	return t ? this.getStylePropertyValue(e, t, !0) : this.getRawStyle(e, !0);
}, styfn$5.getRawStyle = function(e, t) {
	var n = this;
	if (e = e[0], e) {
		for (var r = {}, a = 0; a < n.properties.length; a++) {
			var o = n.properties[a], s = n.getStylePropertyValue(e, o.name, t);
			s != null && (r[o.name] = s, r[dash2camel(o.name)] = s);
		}
		return r;
	}
}, styfn$5.getIndexedStyle = function(e, t, n, r) {
	return e.pstyle(t)[n][r] ?? e.cy().style().getDefaultProperty(t)[n][0];
}, styfn$5.getStylePropertyValue = function(e, t, n) {
	var r = this;
	if (e = e[0], e) {
		var a = r.properties[t];
		a.alias && (a = a.pointsTo);
		var o = a.type, s = e.pstyle(a.name);
		if (s) {
			var c = s.value, l = s.units, u = s.strValue;
			if (n && o.number && c != null && number$1(c)) {
				var d = e.cy().zoom(), f = function(e) {
					return e * d;
				}, m = function(e, t) {
					return f(e) + t;
				}, h = array(c);
				return (h ? l.every(function(e) {
					return e != null;
				}) : l != null) ? h ? c.map(function(e, t) {
					return m(e, l[t]);
				}).join(" ") : m(c, l) : h ? c.map(function(e) {
					return string(e) ? e : "" + f(e);
				}).join(" ") : "" + f(c);
			} else if (u != null) return u;
		}
		return null;
	}
}, styfn$5.getAnimationStartStyle = function(e, t) {
	for (var n = {}, r = 0; r < t.length; r++) {
		var a = t[r].name, o = e.pstyle(a);
		o !== void 0 && (o = plainObject(o) ? this.parse(a, o.strValue) : this.parse(a, o)), o && (n[a] = o);
	}
	return n;
}, styfn$5.getPropsList = function(e) {
	var t = this, n = [], r = e, a = t.properties;
	if (r) for (var o = Object.keys(r), s = 0; s < o.length; s++) {
		var c = o[s], l = r[c], u = a[c] || a[camel2dash(c)], d = this.parse(u.name, l);
		d && n.push(d);
	}
	return n;
}, styfn$5.getNonDefaultPropertiesHash = function(e, t, n) {
	var r = n.slice(), a, o, s, c, l, u;
	for (l = 0; l < t.length; l++) if (a = t[l], o = e.pstyle(a, !1), o != null) if (o.pfValue != null) r[0] = hashInt(c, r[0]), r[1] = hashIntAlt(c, r[1]);
	else for (s = o.strValue, u = 0; u < s.length; u++) c = s.charCodeAt(u), r[0] = hashInt(c, r[0]), r[1] = hashIntAlt(c, r[1]);
	return r;
}, styfn$5.getPropertiesHash = styfn$5.getNonDefaultPropertiesHash;
var styfn$4 = {};
styfn$4.appendFromJson = function(e) {
	for (var t = this, n = 0; n < e.length; n++) {
		var r = e[n], a = r.selector, o = r.style || r.css, s = Object.keys(o);
		t.selector(a);
		for (var c = 0; c < s.length; c++) {
			var l = s[c], u = o[l];
			t.css(l, u);
		}
	}
	return t;
}, styfn$4.fromJson = function(e) {
	var t = this;
	return t.resetToDefault(), t.appendFromJson(e), t;
}, styfn$4.json = function() {
	for (var e = [], t = this.defaultLength; t < this.length; t++) {
		for (var n = this[t], r = n.selector, a = n.properties, o = {}, s = 0; s < a.length; s++) {
			var c = a[s];
			o[c.name] = c.strValue;
		}
		e.push({
			selector: r ? r.toString() : "core",
			style: o
		});
	}
	return e;
};
var styfn$3 = {};
styfn$3.appendFromString = function(e) {
	var t = this, n = this, r = "" + e, a, o, s;
	r = r.replace(/[/][*](\s|.)+?[*][/]/g, "");
	function c() {
		r = r.length > a.length ? r.substr(a.length) : "";
	}
	function l() {
		o = o.length > s.length ? o.substr(s.length) : "";
	}
	for (; !r.match(/^\s*$/);) {
		var u = r.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
		if (!u) {
			warn("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + r);
			break;
		}
		a = u[0];
		var d = u[1];
		if (d !== "core" && new Selector(d).invalid) {
			warn("Skipping parsing of block: Invalid selector found in string stylesheet: " + d), c();
			continue;
		}
		var f = u[2], m = !1;
		o = f;
		for (var h = []; !o.match(/^\s*$/);) {
			var g = o.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
			if (!g) {
				warn("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + f), m = !0;
				break;
			}
			s = g[0];
			var _ = g[1], v = g[2];
			if (!t.properties[_]) {
				warn("Skipping property: Invalid property name in: " + s), l();
				continue;
			}
			if (!n.parse(_, v)) {
				warn("Skipping property: Invalid property definition in: " + s), l();
				continue;
			}
			h.push({
				name: _,
				val: v
			}), l();
		}
		if (m) {
			c();
			break;
		}
		n.selector(d);
		for (var b = 0; b < h.length; b++) {
			var S = h[b];
			n.css(S.name, S.val);
		}
		c();
	}
	return n;
}, styfn$3.fromString = function(e) {
	var t = this;
	return t.resetToDefault(), t.appendFromString(e), t;
};
var styfn$2 = {};
(function() {
	var e = number, t = rgbaNoBackRefs, n = hslaNoBackRefs, r = hex3, a = hex6, o = function(e) {
		return "^" + e + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
	}, s = function(o) {
		var s = e + "|\\w+|" + t + "|" + n + "|" + r + "|" + a;
		return "^" + o + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + e + ")\\s*\\,\\s*(" + e + ")\\s*,\\s*(" + s + ")\\s*\\,\\s*(" + s + ")\\)$";
	}, c = [
		"^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$",
		"^(none)$",
		"^(.+)$"
	];
	styfn$2.types = {
		time: {
			number: !0,
			min: 0,
			units: "s|ms",
			implicitUnits: "ms"
		},
		percent: {
			number: !0,
			min: 0,
			max: 100,
			units: "%",
			implicitUnits: "%"
		},
		percentages: {
			number: !0,
			min: 0,
			max: 100,
			units: "%",
			implicitUnits: "%",
			multiple: !0
		},
		zeroOneNumber: {
			number: !0,
			min: 0,
			max: 1,
			unitless: !0
		},
		zeroOneNumbers: {
			number: !0,
			min: 0,
			max: 1,
			unitless: !0,
			multiple: !0
		},
		nOneOneNumber: {
			number: !0,
			min: -1,
			max: 1,
			unitless: !0
		},
		nonNegativeInt: {
			number: !0,
			min: 0,
			integer: !0,
			unitless: !0
		},
		nonNegativeNumber: {
			number: !0,
			min: 0,
			unitless: !0
		},
		position: { enums: ["parent", "origin"] },
		nodeSize: {
			number: !0,
			min: 0,
			enums: ["label"]
		},
		number: {
			number: !0,
			unitless: !0
		},
		numbers: {
			number: !0,
			unitless: !0,
			multiple: !0
		},
		positiveNumber: {
			number: !0,
			unitless: !0,
			min: 0,
			strictMin: !0
		},
		size: {
			number: !0,
			min: 0
		},
		bidirectionalSize: { number: !0 },
		bidirectionalSizeMaybePercent: {
			number: !0,
			allowPercent: !0
		},
		bidirectionalSizes: {
			number: !0,
			multiple: !0
		},
		sizeMaybePercent: {
			number: !0,
			min: 0,
			allowPercent: !0
		},
		axisDirection: { enums: [
			"horizontal",
			"leftward",
			"rightward",
			"vertical",
			"upward",
			"downward",
			"auto"
		] },
		axisDirectionExplicit: { enums: [
			"leftward",
			"rightward",
			"upward",
			"downward"
		] },
		axisDirectionPrimary: { enums: ["horizontal", "vertical"] },
		paddingRelativeTo: { enums: [
			"width",
			"height",
			"average",
			"min",
			"max"
		] },
		bgWH: {
			number: !0,
			min: 0,
			allowPercent: !0,
			enums: ["auto"],
			multiple: !0
		},
		bgPos: {
			number: !0,
			allowPercent: !0,
			multiple: !0
		},
		bgRelativeTo: {
			enums: ["inner", "include-padding"],
			multiple: !0
		},
		bgRepeat: {
			enums: [
				"repeat",
				"repeat-x",
				"repeat-y",
				"no-repeat"
			],
			multiple: !0
		},
		bgFit: {
			enums: [
				"none",
				"contain",
				"cover"
			],
			multiple: !0
		},
		bgCrossOrigin: {
			enums: [
				"anonymous",
				"use-credentials",
				"null"
			],
			multiple: !0
		},
		bgClip: {
			enums: ["none", "node"],
			multiple: !0
		},
		bgContainment: {
			enums: ["inside", "over"],
			multiple: !0
		},
		boxSelection: { enums: [
			"contain",
			"overlap",
			"none"
		] },
		color: { color: !0 },
		colors: {
			color: !0,
			multiple: !0
		},
		fill: { enums: [
			"solid",
			"linear-gradient",
			"radial-gradient"
		] },
		bool: { enums: ["yes", "no"] },
		bools: {
			enums: ["yes", "no"],
			multiple: !0
		},
		lineStyle: { enums: [
			"solid",
			"dotted",
			"dashed"
		] },
		lineCap: { enums: [
			"butt",
			"round",
			"square"
		] },
		linePosition: { enums: [
			"center",
			"inside",
			"outside"
		] },
		lineJoin: { enums: [
			"round",
			"bevel",
			"miter"
		] },
		borderStyle: { enums: [
			"solid",
			"dotted",
			"dashed",
			"double"
		] },
		curveStyle: { enums: [
			"bezier",
			"unbundled-bezier",
			"haystack",
			"segments",
			"straight",
			"straight-triangle",
			"taxi",
			"round-segments",
			"round-taxi"
		] },
		radiusType: {
			enums: ["arc-radius", "influence-radius"],
			multiple: !0
		},
		fontFamily: { regex: "^([\\w- \\\"]+(?:\\s*,\\s*[\\w- \\\"]+)*)$" },
		fontStyle: { enums: [
			"italic",
			"normal",
			"oblique"
		] },
		fontWeight: { enums: [
			"normal",
			"bold",
			"bolder",
			"lighter",
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"800",
			"900",
			100,
			200,
			300,
			400,
			500,
			600,
			700,
			800,
			900
		] },
		textDecoration: { enums: [
			"none",
			"underline",
			"overline",
			"line-through"
		] },
		textTransform: { enums: [
			"none",
			"uppercase",
			"lowercase"
		] },
		textWrap: { enums: [
			"none",
			"wrap",
			"ellipsis"
		] },
		textOverflowWrap: { enums: ["whitespace", "anywhere"] },
		textBackgroundShape: { enums: [
			"rectangle",
			"roundrectangle",
			"round-rectangle",
			"circle"
		] },
		nodeShape: { enums: /* @__PURE__ */ "rectangle.roundrectangle.round-rectangle.cutrectangle.cut-rectangle.bottomroundrectangle.bottom-round-rectangle.barrel.ellipse.triangle.round-triangle.square.pentagon.round-pentagon.hexagon.round-hexagon.concavehexagon.concave-hexagon.heptagon.round-heptagon.octagon.round-octagon.tag.round-tag.star.diamond.round-diamond.vee.rhomboid.right-rhomboid.polygon".split(".") },
		overlayShape: { enums: [
			"roundrectangle",
			"round-rectangle",
			"ellipse"
		] },
		cornerRadius: {
			number: !0,
			min: 0,
			units: "px|em",
			implicitUnits: "px",
			enums: ["auto"]
		},
		compoundIncludeLabels: { enums: ["include", "exclude"] },
		arrowShape: { enums: [
			"tee",
			"triangle",
			"triangle-tee",
			"circle-triangle",
			"triangle-cross",
			"triangle-backcurve",
			"vee",
			"square",
			"circle",
			"diamond",
			"chevron",
			"none"
		] },
		arrowFill: { enums: ["filled", "hollow"] },
		arrowWidth: {
			number: !0,
			units: "%|px|em",
			implicitUnits: "px",
			enums: ["match-line"]
		},
		display: { enums: ["element", "none"] },
		visibility: { enums: ["hidden", "visible"] },
		zCompoundDepth: { enums: [
			"bottom",
			"orphan",
			"auto",
			"top"
		] },
		zIndexCompare: { enums: ["auto", "manual"] },
		valign: { enums: [
			"top",
			"center",
			"bottom"
		] },
		halign: { enums: [
			"left",
			"center",
			"right"
		] },
		justification: { enums: [
			"left",
			"center",
			"right",
			"auto"
		] },
		text: { string: !0 },
		data: {
			mapping: !0,
			regex: o("data")
		},
		layoutData: {
			mapping: !0,
			regex: o("layoutData")
		},
		scratch: {
			mapping: !0,
			regex: o("scratch")
		},
		mapData: {
			mapping: !0,
			regex: s("mapData")
		},
		mapLayoutData: {
			mapping: !0,
			regex: s("mapLayoutData")
		},
		mapScratch: {
			mapping: !0,
			regex: s("mapScratch")
		},
		fn: {
			mapping: !0,
			fn: !0
		},
		url: {
			regexes: c,
			singleRegexMatchValue: !0
		},
		urls: {
			regexes: c,
			singleRegexMatchValue: !0,
			multiple: !0
		},
		propList: { propList: !0 },
		angle: {
			number: !0,
			units: "deg|rad",
			implicitUnits: "rad"
		},
		textRotation: {
			number: !0,
			units: "deg|rad",
			implicitUnits: "rad",
			enums: ["none", "autorotate"]
		},
		polygonPointList: {
			number: !0,
			multiple: !0,
			evenMultiple: !0,
			min: -1,
			max: 1,
			unitless: !0
		},
		edgeDistances: { enums: [
			"intersection",
			"node-position",
			"endpoints"
		] },
		edgeEndpoint: {
			number: !0,
			multiple: !0,
			units: "%|px|em|deg|rad",
			implicitUnits: "px",
			enums: [
				"inside-to-node",
				"outside-to-node",
				"outside-to-node-or-label",
				"outside-to-line",
				"outside-to-line-or-label"
			],
			singleEnum: !0,
			validate: function(e, t) {
				switch (e.length) {
					case 2: return t[0] !== "deg" && t[0] !== "rad" && t[1] !== "deg" && t[1] !== "rad";
					case 1: return string(e[0]) || t[0] === "deg" || t[0] === "rad";
					default: return !1;
				}
			}
		},
		easing: {
			regexes: ["^(spring)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$"],
			enums: /* @__PURE__ */ "linear.ease.ease-in.ease-out.ease-in-out.ease-in-sine.ease-out-sine.ease-in-out-sine.ease-in-quad.ease-out-quad.ease-in-out-quad.ease-in-cubic.ease-out-cubic.ease-in-out-cubic.ease-in-quart.ease-out-quart.ease-in-out-quart.ease-in-quint.ease-out-quint.ease-in-out-quint.ease-in-expo.ease-out-expo.ease-in-out-expo.ease-in-circ.ease-out-circ.ease-in-out-circ".split(".")
		},
		gradientDirection: { enums: [
			"to-bottom",
			"to-top",
			"to-left",
			"to-right",
			"to-bottom-right",
			"to-bottom-left",
			"to-top-right",
			"to-top-left",
			"to-right-bottom",
			"to-left-bottom",
			"to-right-top",
			"to-left-top"
		] },
		boundsExpansion: {
			number: !0,
			multiple: !0,
			min: 0,
			validate: function(e) {
				var t = e.length;
				return t === 1 || t === 2 || t === 4;
			}
		}
	};
	var l = {
		zeroNonZero: function(e, t) {
			return (e == null || t == null) && e !== t || e == 0 && t != 0 ? !0 : e != 0 && t == 0;
		},
		any: function(e, t) {
			return e != t;
		},
		emptyNonEmpty: function(e, t) {
			var n = emptyString(e), r = emptyString(t);
			return n && !r || !n && r;
		}
	}, u = styfn$2.types, d = [
		{
			name: "label",
			type: u.text,
			triggersBounds: l.any,
			triggersZOrder: l.emptyNonEmpty
		},
		{
			name: "text-rotation",
			type: u.textRotation,
			triggersBounds: l.any
		},
		{
			name: "text-margin-x",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		},
		{
			name: "text-margin-y",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		}
	], f = [
		{
			name: "source-label",
			type: u.text,
			triggersBounds: l.any
		},
		{
			name: "source-text-rotation",
			type: u.textRotation,
			triggersBounds: l.any
		},
		{
			name: "source-text-margin-x",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		},
		{
			name: "source-text-margin-y",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		},
		{
			name: "source-text-offset",
			type: u.size,
			triggersBounds: l.any
		}
	], m = [
		{
			name: "target-label",
			type: u.text,
			triggersBounds: l.any
		},
		{
			name: "target-text-rotation",
			type: u.textRotation,
			triggersBounds: l.any
		},
		{
			name: "target-text-margin-x",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		},
		{
			name: "target-text-margin-y",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		},
		{
			name: "target-text-offset",
			type: u.size,
			triggersBounds: l.any
		}
	], h = [
		{
			name: "font-family",
			type: u.fontFamily,
			triggersBounds: l.any
		},
		{
			name: "font-style",
			type: u.fontStyle,
			triggersBounds: l.any
		},
		{
			name: "font-weight",
			type: u.fontWeight,
			triggersBounds: l.any
		},
		{
			name: "font-size",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "text-transform",
			type: u.textTransform,
			triggersBounds: l.any
		},
		{
			name: "text-wrap",
			type: u.textWrap,
			triggersBounds: l.any
		},
		{
			name: "text-overflow-wrap",
			type: u.textOverflowWrap,
			triggersBounds: l.any
		},
		{
			name: "text-max-width",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "text-outline-width",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "line-height",
			type: u.positiveNumber,
			triggersBounds: l.any
		}
	], g = [
		{
			name: "text-valign",
			type: u.valign,
			triggersBounds: l.any
		},
		{
			name: "text-halign",
			type: u.halign,
			triggersBounds: l.any
		},
		{
			name: "color",
			type: u.color
		},
		{
			name: "text-outline-color",
			type: u.color
		},
		{
			name: "text-outline-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "text-background-color",
			type: u.color
		},
		{
			name: "text-background-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "text-background-padding",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "text-border-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "text-border-color",
			type: u.color
		},
		{
			name: "text-border-width",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "text-border-style",
			type: u.borderStyle,
			triggersBounds: l.any
		},
		{
			name: "text-background-shape",
			type: u.textBackgroundShape,
			triggersBounds: l.any
		},
		{
			name: "text-justification",
			type: u.justification
		},
		{
			name: "box-select-labels",
			type: u.bool,
			triggersBounds: l.any
		}
	], _ = [
		{
			name: "events",
			type: u.bool,
			triggersZOrder: l.any
		},
		{
			name: "text-events",
			type: u.bool,
			triggersZOrder: l.any
		},
		{
			name: "box-selection",
			type: u.boxSelection,
			triggersZOrder: l.any
		}
	], v = [
		{
			name: "display",
			type: u.display,
			triggersZOrder: l.any,
			triggersBounds: l.any,
			triggersBoundsOfConnectedEdges: l.any,
			triggersBoundsOfParallelEdges: function(e, t, n) {
				return e === t ? !1 : n.pstyle("curve-style").value === "bezier";
			}
		},
		{
			name: "visibility",
			type: u.visibility,
			triggersZOrder: l.any
		},
		{
			name: "opacity",
			type: u.zeroOneNumber,
			triggersZOrder: l.zeroNonZero
		},
		{
			name: "text-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "min-zoomed-font-size",
			type: u.size
		},
		{
			name: "z-compound-depth",
			type: u.zCompoundDepth,
			triggersZOrder: l.any
		},
		{
			name: "z-index-compare",
			type: u.zIndexCompare,
			triggersZOrder: l.any
		},
		{
			name: "z-index",
			type: u.number,
			triggersZOrder: l.any
		}
	], b = [
		{
			name: "overlay-padding",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "overlay-color",
			type: u.color
		},
		{
			name: "overlay-opacity",
			type: u.zeroOneNumber,
			triggersBounds: l.zeroNonZero
		},
		{
			name: "overlay-shape",
			type: u.overlayShape,
			triggersBounds: l.any
		},
		{
			name: "overlay-corner-radius",
			type: u.cornerRadius
		}
	], S = [
		{
			name: "underlay-padding",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "underlay-color",
			type: u.color
		},
		{
			name: "underlay-opacity",
			type: u.zeroOneNumber,
			triggersBounds: l.zeroNonZero
		},
		{
			name: "underlay-shape",
			type: u.overlayShape,
			triggersBounds: l.any
		},
		{
			name: "underlay-corner-radius",
			type: u.cornerRadius
		}
	], C = [
		{
			name: "transition-property",
			type: u.propList
		},
		{
			name: "transition-duration",
			type: u.time
		},
		{
			name: "transition-delay",
			type: u.time
		},
		{
			name: "transition-timing-function",
			type: u.easing
		}
	], w = function(e, t) {
		return t.value === "label" ? -e.poolIndex() : t.pfValue;
	}, T = [
		{
			name: "height",
			type: u.nodeSize,
			triggersBounds: l.any,
			hashOverride: w
		},
		{
			name: "width",
			type: u.nodeSize,
			triggersBounds: l.any,
			hashOverride: w
		},
		{
			name: "shape",
			type: u.nodeShape,
			triggersBounds: l.any
		},
		{
			name: "shape-polygon-points",
			type: u.polygonPointList,
			triggersBounds: l.any
		},
		{
			name: "corner-radius",
			type: u.cornerRadius
		},
		{
			name: "background-color",
			type: u.color
		},
		{
			name: "background-fill",
			type: u.fill
		},
		{
			name: "background-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "background-blacken",
			type: u.nOneOneNumber
		},
		{
			name: "background-gradient-stop-colors",
			type: u.colors
		},
		{
			name: "background-gradient-stop-positions",
			type: u.percentages
		},
		{
			name: "background-gradient-direction",
			type: u.gradientDirection
		},
		{
			name: "padding",
			type: u.sizeMaybePercent,
			triggersBounds: l.any
		},
		{
			name: "padding-relative-to",
			type: u.paddingRelativeTo,
			triggersBounds: l.any
		},
		{
			name: "bounds-expansion",
			type: u.boundsExpansion,
			triggersBounds: l.any
		}
	], E = [
		{
			name: "border-color",
			type: u.color
		},
		{
			name: "border-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "border-width",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "border-style",
			type: u.borderStyle
		},
		{
			name: "border-cap",
			type: u.lineCap
		},
		{
			name: "border-join",
			type: u.lineJoin
		},
		{
			name: "border-dash-pattern",
			type: u.numbers
		},
		{
			name: "border-dash-offset",
			type: u.number
		},
		{
			name: "border-position",
			type: u.linePosition
		}
	], D = [
		{
			name: "outline-color",
			type: u.color
		},
		{
			name: "outline-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "outline-width",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "outline-style",
			type: u.borderStyle
		},
		{
			name: "outline-offset",
			type: u.size,
			triggersBounds: l.any
		}
	], O = [
		{
			name: "background-image",
			type: u.urls
		},
		{
			name: "background-image-crossorigin",
			type: u.bgCrossOrigin
		},
		{
			name: "background-image-opacity",
			type: u.zeroOneNumbers
		},
		{
			name: "background-image-containment",
			type: u.bgContainment
		},
		{
			name: "background-image-smoothing",
			type: u.bools
		},
		{
			name: "background-position-x",
			type: u.bgPos
		},
		{
			name: "background-position-y",
			type: u.bgPos
		},
		{
			name: "background-width-relative-to",
			type: u.bgRelativeTo
		},
		{
			name: "background-height-relative-to",
			type: u.bgRelativeTo
		},
		{
			name: "background-repeat",
			type: u.bgRepeat
		},
		{
			name: "background-fit",
			type: u.bgFit
		},
		{
			name: "background-clip",
			type: u.bgClip
		},
		{
			name: "background-width",
			type: u.bgWH
		},
		{
			name: "background-height",
			type: u.bgWH
		},
		{
			name: "background-offset-x",
			type: u.bgPos
		},
		{
			name: "background-offset-y",
			type: u.bgPos
		}
	], k = [
		{
			name: "position",
			type: u.position,
			triggersBounds: l.any
		},
		{
			name: "compound-sizing-wrt-labels",
			type: u.compoundIncludeLabels,
			triggersBounds: l.any
		},
		{
			name: "min-width",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "min-width-bias-left",
			type: u.sizeMaybePercent,
			triggersBounds: l.any
		},
		{
			name: "min-width-bias-right",
			type: u.sizeMaybePercent,
			triggersBounds: l.any
		},
		{
			name: "min-height",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "min-height-bias-top",
			type: u.sizeMaybePercent,
			triggersBounds: l.any
		},
		{
			name: "min-height-bias-bottom",
			type: u.sizeMaybePercent,
			triggersBounds: l.any
		}
	], A = [
		{
			name: "line-style",
			type: u.lineStyle
		},
		{
			name: "line-color",
			type: u.color
		},
		{
			name: "line-fill",
			type: u.fill
		},
		{
			name: "line-cap",
			type: u.lineCap
		},
		{
			name: "line-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "line-dash-pattern",
			type: u.numbers
		},
		{
			name: "line-dash-offset",
			type: u.number
		},
		{
			name: "line-outline-width",
			type: u.size
		},
		{
			name: "line-outline-color",
			type: u.color
		},
		{
			name: "line-gradient-stop-colors",
			type: u.colors
		},
		{
			name: "line-gradient-stop-positions",
			type: u.percentages
		},
		{
			name: "curve-style",
			type: u.curveStyle,
			triggersBounds: l.any,
			triggersBoundsOfParallelEdges: function(e, t) {
				return e === t ? !1 : e === "bezier" || t === "bezier";
			}
		},
		{
			name: "haystack-radius",
			type: u.zeroOneNumber,
			triggersBounds: l.any
		},
		{
			name: "source-endpoint",
			type: u.edgeEndpoint,
			triggersBounds: l.any
		},
		{
			name: "target-endpoint",
			type: u.edgeEndpoint,
			triggersBounds: l.any
		},
		{
			name: "control-point-step-size",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "control-point-distances",
			type: u.bidirectionalSizes,
			triggersBounds: l.any
		},
		{
			name: "control-point-weights",
			type: u.numbers,
			triggersBounds: l.any
		},
		{
			name: "segment-distances",
			type: u.bidirectionalSizes,
			triggersBounds: l.any
		},
		{
			name: "segment-weights",
			type: u.numbers,
			triggersBounds: l.any
		},
		{
			name: "segment-radii",
			type: u.numbers,
			triggersBounds: l.any
		},
		{
			name: "radius-type",
			type: u.radiusType,
			triggersBounds: l.any
		},
		{
			name: "taxi-turn",
			type: u.bidirectionalSizeMaybePercent,
			triggersBounds: l.any
		},
		{
			name: "taxi-turn-min-distance",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "taxi-direction",
			type: u.axisDirection,
			triggersBounds: l.any
		},
		{
			name: "taxi-radius",
			type: u.number,
			triggersBounds: l.any
		},
		{
			name: "edge-distances",
			type: u.edgeDistances,
			triggersBounds: l.any
		},
		{
			name: "arrow-scale",
			type: u.positiveNumber,
			triggersBounds: l.any
		},
		{
			name: "loop-direction",
			type: u.angle,
			triggersBounds: l.any
		},
		{
			name: "loop-sweep",
			type: u.angle,
			triggersBounds: l.any
		},
		{
			name: "source-distance-from-node",
			type: u.size,
			triggersBounds: l.any
		},
		{
			name: "target-distance-from-node",
			type: u.size,
			triggersBounds: l.any
		}
	], M = [
		{
			name: "ghost",
			type: u.bool,
			triggersBounds: l.any
		},
		{
			name: "ghost-offset-x",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		},
		{
			name: "ghost-offset-y",
			type: u.bidirectionalSize,
			triggersBounds: l.any
		},
		{
			name: "ghost-opacity",
			type: u.zeroOneNumber
		}
	], N = [
		{
			name: "selection-box-color",
			type: u.color
		},
		{
			name: "selection-box-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "selection-box-border-color",
			type: u.color
		},
		{
			name: "selection-box-border-width",
			type: u.size
		},
		{
			name: "active-bg-color",
			type: u.color
		},
		{
			name: "active-bg-opacity",
			type: u.zeroOneNumber
		},
		{
			name: "active-bg-size",
			type: u.size
		},
		{
			name: "outside-texture-bg-color",
			type: u.color
		},
		{
			name: "outside-texture-bg-opacity",
			type: u.zeroOneNumber
		}
	], P = [];
	styfn$2.pieBackgroundN = 16, P.push({
		name: "pie-size",
		type: u.sizeMaybePercent
	}), P.push({
		name: "pie-hole",
		type: u.sizeMaybePercent
	}), P.push({
		name: "pie-start-angle",
		type: u.angle
	});
	for (var F = 1; F <= styfn$2.pieBackgroundN; F++) P.push({
		name: "pie-" + F + "-background-color",
		type: u.color
	}), P.push({
		name: "pie-" + F + "-background-size",
		type: u.percent
	}), P.push({
		name: "pie-" + F + "-background-opacity",
		type: u.zeroOneNumber
	});
	var I = [];
	styfn$2.stripeBackgroundN = 16, I.push({
		name: "stripe-size",
		type: u.sizeMaybePercent
	}), I.push({
		name: "stripe-direction",
		type: u.axisDirectionPrimary
	});
	for (var L = 1; L <= styfn$2.stripeBackgroundN; L++) I.push({
		name: "stripe-" + L + "-background-color",
		type: u.color
	}), I.push({
		name: "stripe-" + L + "-background-size",
		type: u.percent
	}), I.push({
		name: "stripe-" + L + "-background-opacity",
		type: u.zeroOneNumber
	});
	var R = [], z = styfn$2.arrowPrefixes = [
		"source",
		"mid-source",
		"target",
		"mid-target"
	];
	[
		{
			name: "arrow-shape",
			type: u.arrowShape,
			triggersBounds: l.any
		},
		{
			name: "arrow-color",
			type: u.color
		},
		{
			name: "arrow-fill",
			type: u.arrowFill
		},
		{
			name: "arrow-width",
			type: u.arrowWidth
		}
	].forEach(function(e) {
		z.forEach(function(t) {
			var n = t + "-" + e.name, r = e.type, a = e.triggersBounds;
			R.push({
				name: n,
				type: r,
				triggersBounds: a
			});
		});
	}, {});
	var B = styfn$2.properties = [].concat(_, C, v, b, S, M, g, h, d, f, m, T, E, D, O, P, I, k, A, R, N), V = styfn$2.propertyGroups = {
		behavior: _,
		transition: C,
		visibility: v,
		overlay: b,
		underlay: S,
		ghost: M,
		commonLabel: g,
		labelDimensions: h,
		mainLabel: d,
		sourceLabel: f,
		targetLabel: m,
		nodeBody: T,
		nodeBorder: E,
		nodeOutline: D,
		backgroundImage: O,
		pie: P,
		stripe: I,
		compound: k,
		edgeLine: A,
		edgeArrow: R,
		core: N
	}, H = styfn$2.propertyGroupNames = {};
	(styfn$2.propertyGroupKeys = Object.keys(V)).forEach(function(e) {
		H[e] = V[e].map(function(e) {
			return e.name;
		}), V[e].forEach(function(t) {
			return t.groupKey = e;
		});
	});
	var U = styfn$2.aliases = [
		{
			name: "content",
			pointsTo: "label"
		},
		{
			name: "control-point-distance",
			pointsTo: "control-point-distances"
		},
		{
			name: "control-point-weight",
			pointsTo: "control-point-weights"
		},
		{
			name: "segment-distance",
			pointsTo: "segment-distances"
		},
		{
			name: "segment-weight",
			pointsTo: "segment-weights"
		},
		{
			name: "segment-radius",
			pointsTo: "segment-radii"
		},
		{
			name: "edge-text-rotation",
			pointsTo: "text-rotation"
		},
		{
			name: "padding-left",
			pointsTo: "padding"
		},
		{
			name: "padding-right",
			pointsTo: "padding"
		},
		{
			name: "padding-top",
			pointsTo: "padding"
		},
		{
			name: "padding-bottom",
			pointsTo: "padding"
		}
	];
	styfn$2.propertyNames = B.map(function(e) {
		return e.name;
	});
	for (var W = 0; W < B.length; W++) {
		var q = B[W];
		B[q.name] = q;
	}
	for (var J = 0; J < U.length; J++) {
		var Y = U[J], X = B[Y.pointsTo], Z = {
			name: Y.name,
			alias: !0,
			pointsTo: X
		};
		B.push(Z), B[Y.name] = Z;
	}
})(), styfn$2.getDefaultProperty = function(e) {
	return this.getDefaultProperties()[e];
}, styfn$2.getDefaultProperties = function() {
	var e = this._private;
	if (e.defaultProperties != null) return e.defaultProperties;
	for (var t = extend({
		"selection-box-color": "#ddd",
		"selection-box-opacity": .65,
		"selection-box-border-color": "#aaa",
		"selection-box-border-width": 1,
		"active-bg-color": "black",
		"active-bg-opacity": .15,
		"active-bg-size": 30,
		"outside-texture-bg-color": "#000",
		"outside-texture-bg-opacity": .125,
		events: "yes",
		"text-events": "no",
		"text-valign": "top",
		"text-halign": "center",
		"text-justification": "auto",
		"line-height": 1,
		color: "#000",
		"box-selection": "contain",
		"text-outline-color": "#000",
		"text-outline-width": 0,
		"text-outline-opacity": 1,
		"text-opacity": 1,
		"text-decoration": "none",
		"text-transform": "none",
		"text-wrap": "none",
		"text-overflow-wrap": "whitespace",
		"text-max-width": 9999,
		"text-background-color": "#000",
		"text-background-opacity": 0,
		"text-background-shape": "rectangle",
		"text-background-padding": 0,
		"text-border-opacity": 0,
		"text-border-width": 0,
		"text-border-style": "solid",
		"text-border-color": "#000",
		"font-family": "Helvetica Neue, Helvetica, sans-serif",
		"font-style": "normal",
		"font-weight": "normal",
		"font-size": 16,
		"min-zoomed-font-size": 0,
		"text-rotation": "none",
		"source-text-rotation": "none",
		"target-text-rotation": "none",
		visibility: "visible",
		display: "element",
		opacity: 1,
		"z-compound-depth": "auto",
		"z-index-compare": "auto",
		"z-index": 0,
		label: "",
		"text-margin-x": 0,
		"text-margin-y": 0,
		"source-label": "",
		"source-text-offset": 0,
		"source-text-margin-x": 0,
		"source-text-margin-y": 0,
		"target-label": "",
		"target-text-offset": 0,
		"target-text-margin-x": 0,
		"target-text-margin-y": 0,
		"overlay-opacity": 0,
		"overlay-color": "#000",
		"overlay-padding": 10,
		"overlay-shape": "round-rectangle",
		"overlay-corner-radius": "auto",
		"underlay-opacity": 0,
		"underlay-color": "#000",
		"underlay-padding": 10,
		"underlay-shape": "round-rectangle",
		"underlay-corner-radius": "auto",
		"transition-property": "none",
		"transition-duration": 0,
		"transition-delay": 0,
		"transition-timing-function": "linear",
		"box-select-labels": "no",
		"background-blacken": 0,
		"background-color": "#999",
		"background-fill": "solid",
		"background-opacity": 1,
		"background-image": "none",
		"background-image-crossorigin": "anonymous",
		"background-image-opacity": 1,
		"background-image-containment": "inside",
		"background-image-smoothing": "yes",
		"background-position-x": "50%",
		"background-position-y": "50%",
		"background-offset-x": 0,
		"background-offset-y": 0,
		"background-width-relative-to": "include-padding",
		"background-height-relative-to": "include-padding",
		"background-repeat": "no-repeat",
		"background-fit": "none",
		"background-clip": "node",
		"background-width": "auto",
		"background-height": "auto",
		"border-color": "#000",
		"border-opacity": 1,
		"border-width": 0,
		"border-style": "solid",
		"border-dash-pattern": [4, 2],
		"border-dash-offset": 0,
		"border-cap": "butt",
		"border-join": "miter",
		"border-position": "center",
		"outline-color": "#999",
		"outline-opacity": 1,
		"outline-width": 0,
		"outline-offset": 0,
		"outline-style": "solid",
		height: 30,
		width: 30,
		shape: "ellipse",
		"shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
		"corner-radius": "auto",
		"bounds-expansion": 0,
		"background-gradient-direction": "to-bottom",
		"background-gradient-stop-colors": "#999",
		"background-gradient-stop-positions": "0%",
		ghost: "no",
		"ghost-offset-y": 0,
		"ghost-offset-x": 0,
		"ghost-opacity": 0,
		padding: 0,
		"padding-relative-to": "width",
		position: "origin",
		"compound-sizing-wrt-labels": "include",
		"min-width": 0,
		"min-width-bias-left": 0,
		"min-width-bias-right": 0,
		"min-height": 0,
		"min-height-bias-top": 0,
		"min-height-bias-bottom": 0
	}, {
		"pie-size": "100%",
		"pie-hole": 0,
		"pie-start-angle": "0deg"
	}, [
		{
			name: "pie-{{i}}-background-color",
			value: "black"
		},
		{
			name: "pie-{{i}}-background-size",
			value: "0%"
		},
		{
			name: "pie-{{i}}-background-opacity",
			value: 1
		}
	].reduce(function(e, t) {
		for (var n = 1; n <= styfn$2.pieBackgroundN; n++) {
			var r = t.name.replace("{{i}}", n);
			e[r] = t.value;
		}
		return e;
	}, {}), {
		"stripe-size": "100%",
		"stripe-direction": "horizontal"
	}, [
		{
			name: "stripe-{{i}}-background-color",
			value: "black"
		},
		{
			name: "stripe-{{i}}-background-size",
			value: "0%"
		},
		{
			name: "stripe-{{i}}-background-opacity",
			value: 1
		}
	].reduce(function(e, t) {
		for (var n = 1; n <= styfn$2.stripeBackgroundN; n++) {
			var r = t.name.replace("{{i}}", n);
			e[r] = t.value;
		}
		return e;
	}, {}), {
		"line-style": "solid",
		"line-color": "#999",
		"line-fill": "solid",
		"line-cap": "butt",
		"line-opacity": 1,
		"line-outline-width": 0,
		"line-outline-color": "#000",
		"line-gradient-stop-colors": "#999",
		"line-gradient-stop-positions": "0%",
		"control-point-step-size": 40,
		"control-point-weights": .5,
		"segment-weights": .5,
		"segment-distances": 20,
		"segment-radii": 15,
		"radius-type": "arc-radius",
		"taxi-turn": "50%",
		"taxi-radius": 15,
		"taxi-turn-min-distance": 10,
		"taxi-direction": "auto",
		"edge-distances": "intersection",
		"curve-style": "haystack",
		"haystack-radius": 0,
		"arrow-scale": 1,
		"loop-direction": "-45deg",
		"loop-sweep": "-90deg",
		"source-distance-from-node": 0,
		"target-distance-from-node": 0,
		"source-endpoint": "outside-to-node",
		"target-endpoint": "outside-to-node",
		"line-dash-pattern": [6, 3],
		"line-dash-offset": 0
	}, [
		{
			name: "arrow-shape",
			value: "none"
		},
		{
			name: "arrow-color",
			value: "#999"
		},
		{
			name: "arrow-fill",
			value: "filled"
		},
		{
			name: "arrow-width",
			value: 1
		}
	].reduce(function(e, t) {
		return styfn$2.arrowPrefixes.forEach(function(n) {
			var r = n + "-" + t.name;
			e[r] = t.value;
		}), e;
	}, {})), n = {}, r = 0; r < this.properties.length; r++) {
		var a = this.properties[r];
		if (!a.pointsTo) {
			var o = a.name, s = t[o];
			n[o] = this.parse(o, s);
		}
	}
	return e.defaultProperties = n, e.defaultProperties;
}, styfn$2.addDefaultStylesheet = function() {
	this.selector(":parent").css({
		shape: "rectangle",
		padding: 10,
		"background-color": "#eee",
		"border-color": "#ccc",
		"border-width": 1
	}).selector("edge").css({ width: 3 }).selector(":loop").css({ "curve-style": "bezier" }).selector("edge:compound").css({
		"curve-style": "bezier",
		"source-endpoint": "outside-to-line",
		"target-endpoint": "outside-to-line"
	}).selector(":selected").css({
		"background-color": "#0169D9",
		"line-color": "#0169D9",
		"source-arrow-color": "#0169D9",
		"target-arrow-color": "#0169D9",
		"mid-source-arrow-color": "#0169D9",
		"mid-target-arrow-color": "#0169D9"
	}).selector(":parent:selected").css({
		"background-color": "#CCE1F9",
		"border-color": "#aec8e5"
	}).selector(":active").css({
		"overlay-color": "black",
		"overlay-padding": 10,
		"overlay-opacity": .25
	}), this.defaultLength = this.length;
};
var styfn$1 = {};
styfn$1.parse = function(e, t, n, r) {
	var a = this;
	if (fn$6(t)) return a.parseImplWarn(e, t, n, r);
	var o = r === "mapping" || r === !0 || r === !1 || r == null ? "dontcare" : r, s = n ? "t" : "f", c = hashStrings(e, "" + t, s, o), l = a.propCache = a.propCache || [], u;
	return (u = l[c]) || (u = l[c] = a.parseImplWarn(e, t, n, r)), (n || r === "mapping") && (u = copy(u), u && (u.value = copy(u.value))), u;
}, styfn$1.parseImplWarn = function(e, t, n, r) {
	var a = this.parseImpl(e, t, n, r);
	return !a && t != null && warn(`The style property \`${e}: ${t}\` is invalid`), a && (a.name === "width" || a.name === "height") && t === "label" && warn("The style value of `label` is deprecated for `" + a.name + "`"), a;
}, styfn$1.parseImpl = function(e, t, n, r) {
	var a = this;
	e = camel2dash(e);
	var o = a.properties[e], s = t, c = a.types;
	if (!o || t === void 0) return null;
	o.alias && (o = o.pointsTo, e = o.name);
	var l = string(t);
	l && (t = t.trim());
	var u = o.type;
	if (!u) return null;
	if (n && (t === "" || t === null)) return {
		name: e,
		value: t,
		bypass: !0,
		deleteBypass: !0
	};
	if (fn$6(t)) return {
		name: e,
		value: t,
		strValue: "fn",
		mapped: c.fn,
		bypass: n
	};
	var d, f;
	if (!(!l || r || t.length < 7 || t[1] !== "a")) {
		if (t.length >= 7 && t[0] === "d" && (d = new RegExp(c.data.regex).exec(t))) {
			if (n) return !1;
			var m = c.data;
			return {
				name: e,
				value: d,
				strValue: "" + t,
				mapped: m,
				field: d[1],
				bypass: n
			};
		} else if (t.length >= 10 && t[0] === "m" && (f = new RegExp(c.mapData.regex).exec(t))) {
			if (n || u.multiple) return !1;
			var h = c.mapData;
			if (!(u.color || u.number)) return !1;
			var g = this.parse(e, f[4]);
			if (!g || g.mapped) return !1;
			var _ = this.parse(e, f[5]);
			if (!_ || _.mapped) return !1;
			if (g.pfValue === _.pfValue || g.strValue === _.strValue) return warn("`" + e + ": " + t + "` is not a valid mapper because the output range is zero; converting to `" + e + ": " + g.strValue + "`"), this.parse(e, g.strValue);
			if (u.color) {
				var v = g.value, b = _.value;
				if (v[0] === b[0] && v[1] === b[1] && v[2] === b[2] && (v[3] === b[3] || (v[3] == null || v[3] === 1) && (b[3] == null || b[3] === 1))) return !1;
			}
			return {
				name: e,
				value: f,
				strValue: "" + t,
				mapped: h,
				field: f[1],
				fieldMin: parseFloat(f[2]),
				fieldMax: parseFloat(f[3]),
				valueMin: g.value,
				valueMax: _.value,
				bypass: n
			};
		}
	}
	if (u.multiple && r !== "multiple") {
		var S = l ? t.split(/\s+/) : array(t) ? t : [t];
		if (u.evenMultiple && S.length % 2 != 0) return null;
		for (var C = [], w = [], T = [], E = "", D = !1, O = 0; O < S.length; O++) {
			var k = a.parse(e, S[O], n, "multiple");
			D ||= string(k.value), C.push(k.value), T.push(k.pfValue == null ? k.value : k.pfValue), w.push(k.units), E += (O > 0 ? " " : "") + k.strValue;
		}
		return u.validate && !u.validate(C, w) ? null : u.singleEnum && D ? C.length === 1 && string(C[0]) ? {
			name: e,
			value: C[0],
			strValue: C[0],
			bypass: n
		} : null : {
			name: e,
			value: C,
			pfValue: T,
			strValue: E,
			bypass: n,
			units: w
		};
	}
	var A = function() {
		for (var r = 0; r < u.enums.length; r++) if (u.enums[r] === t) return {
			name: e,
			value: t,
			strValue: "" + t,
			bypass: n
		};
		return null;
	};
	if (u.number) {
		var P, F = "px";
		if (u.units && (P = u.units), u.implicitUnits && (F = u.implicitUnits), !u.unitless) if (l) {
			var I = "px|em" + (u.allowPercent ? "|\\%" : "");
			P && (I = P);
			var R = t.match("^(" + number + ")(" + I + ")?$");
			R && (t = R[1], P = R[2] || F);
		} else (!P || u.implicitUnits) && (P = F);
		if (t = parseFloat(t), isNaN(t) && u.enums === void 0) return null;
		if (isNaN(t) && u.enums !== void 0) return t = s, A();
		if (u.integer && !integer(t) || u.min !== void 0 && (t < u.min || u.strictMin && t === u.min) || u.max !== void 0 && (t > u.max || u.strictMax && t === u.max)) return null;
		var z = {
			name: e,
			value: t,
			strValue: "" + t + (P || ""),
			units: P,
			bypass: n
		};
		return u.unitless || P !== "px" && P !== "em" ? z.pfValue = t : z.pfValue = P === "px" || !P ? t : this.getEmSizeInPixels() * t, (P === "ms" || P === "s") && (z.pfValue = P === "ms" ? t : 1e3 * t), (P === "deg" || P === "rad") && (z.pfValue = P === "rad" ? t : deg2rad(t)), P === "%" && (z.pfValue = t / 100), z;
	} else if (u.propList) {
		var B = [], V = "" + t;
		if (V !== "none") {
			for (var H = V.split(/\s*,\s*|\s+/), U = 0; U < H.length; U++) {
				var W = H[U].trim();
				a.properties[W] ? B.push(W) : warn("`" + W + "` is not a valid property name");
			}
			if (B.length === 0) return null;
		}
		return {
			name: e,
			value: B,
			strValue: B.length === 0 ? "none" : B.join(" "),
			bypass: n
		};
	} else if (u.color) {
		var G = color2tuple(t);
		return G ? {
			name: e,
			value: G,
			pfValue: G,
			strValue: "rgb(" + G[0] + "," + G[1] + "," + G[2] + ")",
			bypass: n
		} : null;
	} else if (u.regex || u.regexes) {
		if (u.enums) {
			var q = A();
			if (q) return q;
		}
		for (var J = u.regexes ? u.regexes : [u.regex], Y = 0; Y < J.length; Y++) {
			var X = new RegExp(J[Y]).exec(t);
			if (X) return {
				name: e,
				value: u.singleRegexMatchValue ? X[1] : X,
				strValue: "" + t,
				bypass: n
			};
		}
		return null;
	} else if (u.string) return {
		name: e,
		value: "" + t,
		strValue: "" + t,
		bypass: n
	};
	else if (u.enums) return A();
	else return null;
};
var _Style = function(e) {
	if (!(this instanceof _Style)) return new _Style(e);
	if (!core(e)) {
		error("A style must have a core reference");
		return;
	}
	this._private = {
		cy: e,
		coreStyle: {}
	}, this.length = 0, this.resetToDefault();
}, styfn = _Style.prototype;
styfn.instanceString = function() {
	return "style";
}, styfn.clear = function() {
	for (var e = this._private, t = e.cy.elements(), n = 0; n < this.length; n++) this[n] = void 0;
	return this.length = 0, e.contextStyles = {}, e.propDiffs = {}, this.cleanElements(t, !0), t.forEach(function(e) {
		var t = e[0]._private;
		t.styleDirty = !0, t.appliedInitStyle = !1;
	}), this;
}, styfn.resetToDefault = function() {
	return this.clear(), this.addDefaultStylesheet(), this;
}, styfn.core = function(e) {
	return this._private.coreStyle[e] || this.getDefaultProperty(e);
}, styfn.selector = function(e) {
	var t = e === "core" ? null : new Selector(e), n = this.length++;
	return this[n] = {
		selector: t,
		properties: [],
		mappedProperties: [],
		index: n
	}, this;
}, styfn.css = function() {
	var e = this, t = arguments;
	if (t.length === 1) for (var n = t[0], r = 0; r < e.properties.length; r++) {
		var a = e.properties[r], o = n[a.name];
		o === void 0 && (o = n[dash2camel(a.name)]), o !== void 0 && this.cssRule(a.name, o);
	}
	else t.length === 2 && this.cssRule(t[0], t[1]);
	return this;
}, styfn.style = styfn.css, styfn.cssRule = function(e, t) {
	var n = this.parse(e, t);
	if (n) {
		var r = this.length - 1;
		this[r].properties.push(n), this[r].properties[n.name] = n, n.name.match(/pie-(\d+)-background-size/) && n.value && (this._private.hasPie = !0), n.name.match(/stripe-(\d+)-background-size/) && n.value && (this._private.hasStripe = !0), n.mapped && this[r].mappedProperties.push(n), this[r].selector || (this._private.coreStyle[n.name] = n);
	}
	return this;
}, styfn.append = function(e) {
	return stylesheet(e) ? e.appendToStyle(this) : array(e) ? this.appendFromJson(e) : string(e) && this.appendFromString(e), this;
}, _Style.fromJson = function(e, t) {
	var n = new _Style(e);
	return n.fromJson(t), n;
}, _Style.fromString = function(e, t) {
	return new _Style(e).fromString(t);
}, [
	styfn$8,
	styfn$7,
	styfn$6,
	styfn$5,
	styfn$4,
	styfn$3,
	styfn$2,
	styfn$1
].forEach(function(e) {
	extend(styfn, e);
}), _Style.types = styfn.types, _Style.properties = styfn.properties, _Style.propertyGroups = styfn.propertyGroups, _Style.propertyGroupNames = styfn.propertyGroupNames, _Style.propertyGroupKeys = styfn.propertyGroupKeys;
var corefn$2 = {
	style: function(e) {
		return e && this.setStyle(e).update(), this._private.style;
	},
	setStyle: function(e) {
		var t = this._private;
		return stylesheet(e) ? t.style = e.generateStyle(this) : array(e) ? t.style = _Style.fromJson(this, e) : string(e) ? t.style = _Style.fromString(this, e) : t.style = _Style(this), t.style;
	},
	updateStyle: function() {
		this.mutableElements().updateStyle();
	}
}, defaultSelectionType = "single", corefn$1 = {
	autolock: function(e) {
		if (e !== void 0) this._private.autolock = !!e;
		else return this._private.autolock;
		return this;
	},
	autoungrabify: function(e) {
		if (e !== void 0) this._private.autoungrabify = !!e;
		else return this._private.autoungrabify;
		return this;
	},
	autounselectify: function(e) {
		if (e !== void 0) this._private.autounselectify = !!e;
		else return this._private.autounselectify;
		return this;
	},
	selectionType: function(e) {
		var t = this._private;
		if (t.selectionType ??= defaultSelectionType, e !== void 0) (e === "additive" || e === "single") && (t.selectionType = e);
		else return t.selectionType;
		return this;
	},
	panningEnabled: function(e) {
		if (e !== void 0) this._private.panningEnabled = !!e;
		else return this._private.panningEnabled;
		return this;
	},
	userPanningEnabled: function(e) {
		if (e !== void 0) this._private.userPanningEnabled = !!e;
		else return this._private.userPanningEnabled;
		return this;
	},
	zoomingEnabled: function(e) {
		if (e !== void 0) this._private.zoomingEnabled = !!e;
		else return this._private.zoomingEnabled;
		return this;
	},
	userZoomingEnabled: function(e) {
		if (e !== void 0) this._private.userZoomingEnabled = !!e;
		else return this._private.userZoomingEnabled;
		return this;
	},
	boxSelectionEnabled: function(e) {
		if (e !== void 0) this._private.boxSelectionEnabled = !!e;
		else return this._private.boxSelectionEnabled;
		return this;
	},
	pan: function() {
		var e = arguments, t = this._private.pan, n, r, a, o, s;
		switch (e.length) {
			case 0: return t;
			case 1:
				if (string(e[0])) return n = e[0], t[n];
				if (plainObject(e[0])) {
					if (!this._private.panningEnabled) return this;
					a = e[0], o = a.x, s = a.y, number$1(o) && (t.x = o), number$1(s) && (t.y = s), this.emit("pan viewport");
				}
				break;
			case 2:
				if (!this._private.panningEnabled) return this;
				n = e[0], r = e[1], (n === "x" || n === "y") && number$1(r) && (t[n] = r), this.emit("pan viewport");
				break;
		}
		return this.notify("viewport"), this;
	},
	panBy: function(e, t) {
		var n = arguments, r = this._private.pan, a, o, s, c, l;
		if (!this._private.panningEnabled) return this;
		switch (n.length) {
			case 1:
				plainObject(e) && (s = n[0], c = s.x, l = s.y, number$1(c) && (r.x += c), number$1(l) && (r.y += l), this.emit("pan viewport"));
				break;
			case 2:
				a = e, o = t, (a === "x" || a === "y") && number$1(o) && (r[a] += o), this.emit("pan viewport");
				break;
		}
		return this.notify("viewport"), this;
	},
	gc: function() {
		this.notify("gc");
	},
	fit: function(e, t) {
		var n = this.getFitViewport(e, t);
		if (n) {
			var r = this._private;
			r.zoom = n.zoom, r.pan = n.pan, this.emit("pan zoom viewport"), this.notify("viewport");
		}
		return this;
	},
	getFitViewport: function(e, t) {
		if (number$1(e) && t === void 0 && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
			var n;
			if (string(e)) {
				var r = e;
				e = this.$(r);
			} else if (boundingBox(e)) {
				var a = e;
				n = {
					x1: a.x1,
					y1: a.y1,
					x2: a.x2,
					y2: a.y2
				}, n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
			} else elementOrCollection(e) || (e = this.mutableElements());
			if (!(elementOrCollection(e) && e.empty())) {
				n ||= e.boundingBox();
				var o = this.width(), s = this.height(), c;
				if (t = number$1(t) ? t : 0, !isNaN(o) && !isNaN(s) && o > 0 && s > 0 && !isNaN(n.w) && !isNaN(n.h) && n.w > 0 && n.h > 0) {
					c = Math.min((o - 2 * t) / n.w, (s - 2 * t) / n.h), c = c > this._private.maxZoom ? this._private.maxZoom : c, c = c < this._private.minZoom ? this._private.minZoom : c;
					var l = {
						x: (o - c * (n.x1 + n.x2)) / 2,
						y: (s - c * (n.y1 + n.y2)) / 2
					};
					return {
						zoom: c,
						pan: l
					};
				}
			}
		}
	},
	zoomRange: function(e, t) {
		var n = this._private;
		if (t == null) {
			var r = e;
			e = r.min, t = r.max;
		}
		return number$1(e) && number$1(t) && e <= t ? (n.minZoom = e, n.maxZoom = t) : number$1(e) && t === void 0 && e <= n.maxZoom ? n.minZoom = e : number$1(t) && e === void 0 && t >= n.minZoom && (n.maxZoom = t), this;
	},
	minZoom: function(e) {
		return e === void 0 ? this._private.minZoom : this.zoomRange({ min: e });
	},
	maxZoom: function(e) {
		return e === void 0 ? this._private.maxZoom : this.zoomRange({ max: e });
	},
	getZoomedViewport: function(e) {
		var t = this._private, n = t.pan, r = t.zoom, a, o, s = !1;
		if (t.zoomingEnabled || (s = !0), number$1(e) ? o = e : plainObject(e) && (o = e.level, e.position == null ? e.renderedPosition != null && (a = e.renderedPosition) : a = modelToRenderedPosition$1(e.position, r, n), a != null && !t.panningEnabled && (s = !0)), o = o > t.maxZoom ? t.maxZoom : o, o = o < t.minZoom ? t.minZoom : o, s || !number$1(o) || o === r || a != null && (!number$1(a.x) || !number$1(a.y))) return null;
		if (a != null) {
			var c = n, l = r, u = o;
			return {
				zoomed: !0,
				panned: !0,
				zoom: u,
				pan: {
					x: -u / l * (a.x - c.x) + a.x,
					y: -u / l * (a.y - c.y) + a.y
				}
			};
		} else return {
			zoomed: !0,
			panned: !1,
			zoom: o,
			pan: n
		};
	},
	zoom: function(e) {
		if (e === void 0) return this._private.zoom;
		var t = this.getZoomedViewport(e), n = this._private;
		return t == null || !t.zoomed ? this : (n.zoom = t.zoom, t.panned && (n.pan.x = t.pan.x, n.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
	},
	viewport: function(e) {
		var t = this._private, n = !0, r = !0, a = [], o = !1, s = !1;
		if (!e || (number$1(e.zoom) || (n = !1), plainObject(e.pan) || (r = !1), !n && !r)) return this;
		if (n) {
			var c = e.zoom;
			c < t.minZoom || c > t.maxZoom || !t.zoomingEnabled ? o = !0 : (t.zoom = c, a.push("zoom"));
		}
		if (r && (!o || !e.cancelOnFailedZoom) && t.panningEnabled) {
			var l = e.pan;
			number$1(l.x) && (t.pan.x = l.x, s = !1), number$1(l.y) && (t.pan.y = l.y, s = !1), s || a.push("pan");
		}
		return a.length > 0 && (a.push("viewport"), this.emit(a.join(" ")), this.notify("viewport")), this;
	},
	center: function(e) {
		var t = this.getCenterPan(e);
		return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
	},
	getCenterPan: function(e, t) {
		if (this._private.panningEnabled) {
			if (string(e)) {
				var n = e;
				e = this.mutableElements().filter(n);
			} else elementOrCollection(e) || (e = this.mutableElements());
			if (e.length !== 0) {
				var r = e.boundingBox(), a = this.width(), o = this.height();
				return t = t === void 0 ? this._private.zoom : t, {
					x: (a - t * (r.x1 + r.x2)) / 2,
					y: (o - t * (r.y1 + r.y2)) / 2
				};
			}
		}
	},
	reset: function() {
		return !this._private.panningEnabled || !this._private.zoomingEnabled || this.viewport({
			pan: {
				x: 0,
				y: 0
			},
			zoom: 1
		}), this;
	},
	invalidateSize: function() {
		this._private.sizeCache = null;
	},
	size: function() {
		var e = this._private, t = e.container, n = this;
		return e.sizeCache = e.sizeCache || (t ? function() {
			var e = n.window().getComputedStyle(t), r = function(t) {
				return parseFloat(e.getPropertyValue(t));
			};
			return {
				width: t.clientWidth - r("padding-left") - r("padding-right"),
				height: t.clientHeight - r("padding-top") - r("padding-bottom")
			};
		}() : {
			width: 1,
			height: 1
		});
	},
	width: function() {
		return this.size().width;
	},
	height: function() {
		return this.size().height;
	},
	extent: function() {
		var e = this._private.pan, t = this._private.zoom, n = this.renderedExtent(), r = {
			x1: (n.x1 - e.x) / t,
			x2: (n.x2 - e.x) / t,
			y1: (n.y1 - e.y) / t,
			y2: (n.y2 - e.y) / t
		};
		return r.w = r.x2 - r.x1, r.h = r.y2 - r.y1, r;
	},
	renderedExtent: function() {
		var e = this.width(), t = this.height();
		return {
			x1: 0,
			y1: 0,
			x2: e,
			y2: t,
			w: e,
			h: t
		};
	},
	multiClickDebounceTime: function(e) {
		if (e) this._private.multiClickDebounceTime = e;
		else return this._private.multiClickDebounceTime;
		return this;
	}
};
corefn$1.centre = corefn$1.center, corefn$1.autolockNodes = corefn$1.autolock, corefn$1.autoungrabifyNodes = corefn$1.autoungrabify;
var fn = {
	data: define.data({
		field: "data",
		bindingEvent: "data",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "data",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		updateStyle: !0
	}),
	removeData: define.removeData({
		field: "data",
		event: "data",
		triggerFnName: "trigger",
		triggerEvent: !0,
		updateStyle: !0
	}),
	scratch: define.data({
		field: "scratch",
		bindingEvent: "scratch",
		allowBinding: !0,
		allowSetting: !0,
		settingEvent: "scratch",
		settingTriggersEvent: !0,
		triggerFnName: "trigger",
		allowGetting: !0,
		updateStyle: !0
	}),
	removeScratch: define.removeData({
		field: "scratch",
		event: "scratch",
		triggerFnName: "trigger",
		triggerEvent: !0,
		updateStyle: !0
	})
};
fn.attr = fn.data, fn.removeAttr = fn.removeData;
var Core = function(e) {
	var t = this;
	e = extend({}, e);
	var n = e.container;
	n && !htmlElement(n) && htmlElement(n[0]) && (n = n[0]);
	var r = n ? n._cyreg : null;
	r ||= {}, r && r.cy && (r.cy.destroy(), r = {});
	var a = r.readies = r.readies || [];
	n && (n._cyreg = r), r.cy = t;
	var o = _window !== void 0 && n !== void 0 && !e.headless, s = e;
	s.layout = extend({ name: o ? "grid" : "null" }, s.layout), s.renderer = extend({ name: o ? "canvas" : "null" }, s.renderer);
	var c = function(e, t, n) {
		return t === void 0 ? n === void 0 ? e : n : t;
	}, l = this._private = {
		container: n,
		ready: !1,
		options: s,
		elements: new Collection(this),
		listeners: [],
		aniEles: new Collection(this),
		data: s.data || {},
		scratch: {},
		layout: null,
		renderer: null,
		destroyed: !1,
		notificationsEnabled: !0,
		minZoom: 1e-50,
		maxZoom: 1e50,
		zoomingEnabled: c(!0, s.zoomingEnabled),
		userZoomingEnabled: c(!0, s.userZoomingEnabled),
		panningEnabled: c(!0, s.panningEnabled),
		userPanningEnabled: c(!0, s.userPanningEnabled),
		boxSelectionEnabled: c(!0, s.boxSelectionEnabled),
		autolock: c(!1, s.autolock, s.autolockNodes),
		autoungrabify: c(!1, s.autoungrabify, s.autoungrabifyNodes),
		autounselectify: c(!1, s.autounselectify),
		styleEnabled: s.styleEnabled === void 0 ? o : s.styleEnabled,
		zoom: number$1(s.zoom) ? s.zoom : 1,
		pan: {
			x: plainObject(s.pan) && number$1(s.pan.x) ? s.pan.x : 0,
			y: plainObject(s.pan) && number$1(s.pan.y) ? s.pan.y : 0
		},
		animation: {
			current: [],
			queue: []
		},
		hasCompoundNodes: !1,
		multiClickDebounceTime: c(250, s.multiClickDebounceTime)
	};
	this.createEmitter(), this.selectionType(s.selectionType), this.zoomRange({
		min: s.minZoom,
		max: s.maxZoom
	});
	var u = function(e, t) {
		if (e.some(promise)) return Promise$1.all(e).then(t);
		t(e);
	};
	l.styleEnabled && t.setStyle([]);
	var d = extend({}, s, s.renderer);
	t.initRenderer(d);
	var f = function(e, n, r) {
		t.notifications(!1);
		var a = t.mutableElements();
		a.length > 0 && a.remove(), e != null && (plainObject(e) || array(e)) && t.add(e), t.one("layoutready", function(e) {
			t.notifications(!0), t.emit(e), t.one("load", n), t.emitAndNotify("load");
		}).one("layoutstop", function() {
			t.one("done", r), t.emit("done");
		});
		var o = extend({}, t._private.options.layout);
		o.eles = t.elements(), t.layout(o).run();
	};
	u([s.style, s.elements], function(e) {
		var n = e[0], o = e[1];
		l.styleEnabled && t.style().append(n), f(o, function() {
			t.startAnimationLoop(), l.ready = !0, fn$6(s.ready) && t.on("ready", s.ready);
			for (var e = 0; e < a.length; e++) {
				var n = a[e];
				t.on("ready", n);
			}
			r && (r.readies = []), t.emit("ready");
		}, s.done);
	});
}, corefn = Core.prototype;
extend(corefn, {
	instanceString: function() {
		return "core";
	},
	isReady: function() {
		return this._private.ready;
	},
	destroyed: function() {
		return this._private.destroyed;
	},
	ready: function(e) {
		return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
	},
	destroy: function() {
		var e = this;
		if (!e.destroyed()) return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
	},
	hasElementWithId: function(e) {
		return this._private.elements.hasElementWithId(e);
	},
	getElementById: function(e) {
		return this._private.elements.getElementById(e);
	},
	hasCompoundNodes: function() {
		return this._private.hasCompoundNodes;
	},
	headless: function() {
		return this._private.renderer.isHeadless();
	},
	styleEnabled: function() {
		return this._private.styleEnabled;
	},
	addToPool: function(e) {
		return this._private.elements.merge(e), this;
	},
	removeFromPool: function(e) {
		return this._private.elements.unmerge(e), this;
	},
	container: function() {
		return this._private.container || null;
	},
	window: function() {
		if (this._private.container == null) return _window;
		var e = this._private.container.ownerDocument;
		return e === void 0 || e == null ? _window : e.defaultView || _window;
	},
	mount: function(e) {
		if (e != null) {
			var t = this, n = t._private, r = n.options;
			return !htmlElement(e) && htmlElement(e[0]) && (e = e[0]), t.stopAnimationLoop(), t.destroyRenderer(), n.container = e, n.styleEnabled = !0, t.invalidateSize(), t.initRenderer(extend({}, r, r.renderer, { name: r.renderer.name === "null" ? "canvas" : r.renderer.name })), t.startAnimationLoop(), t.style(r.style), t.emit("mount"), t;
		}
	},
	unmount: function() {
		var e = this;
		return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({ name: "null" }), e.emit("unmount"), e;
	},
	options: function() {
		return copy(this._private.options);
	},
	json: function(e) {
		var t = this, n = t._private, r = t.mutableElements(), a = function(e) {
			return t.getElementById(e.id());
		};
		if (plainObject(e)) {
			if (t.startBatch(), e.elements) {
				var o = {}, s = function(e, n) {
					for (var r = [], a = [], s = 0; s < e.length; s++) {
						var c = e[s];
						if (!c.data.id) {
							warn("cy.json() cannot handle elements without an ID attribute");
							continue;
						}
						var l = "" + c.data.id, u = t.getElementById(l);
						o[l] = !0, u.length === 0 ? (n && (c.group = n), r.push(c)) : a.push({
							ele: u,
							json: c
						});
					}
					t.add(r);
					for (var d = 0; d < a.length; d++) {
						var f = a[d], m = f.ele, h = f.json;
						m.json(h);
					}
				};
				if (array(e.elements)) s(e.elements);
				else for (var c = ["nodes", "edges"], l = 0; l < c.length; l++) {
					var u = c[l], d = e.elements[u];
					array(d) && s(d, u);
				}
				var f = t.collection();
				r.filter(function(e) {
					return !o[e.id()];
				}).forEach(function(e) {
					e.isParent() ? f.merge(e) : e.remove();
				}), f.forEach(function(e) {
					return e.children().move({ parent: null });
				}), f.forEach(function(e) {
					return a(e).remove();
				});
			}
			e.style && t.style(e.style), e.zoom != null && e.zoom !== n.zoom && t.zoom(e.zoom), e.pan && (e.pan.x !== n.pan.x || e.pan.y !== n.pan.y) && t.pan(e.pan), e.data && t.data(e.data);
			for (var m = [
				"minZoom",
				"maxZoom",
				"zoomingEnabled",
				"userZoomingEnabled",
				"panningEnabled",
				"userPanningEnabled",
				"boxSelectionEnabled",
				"autolock",
				"autoungrabify",
				"autounselectify",
				"multiClickDebounceTime"
			], h = 0; h < m.length; h++) {
				var g = m[h];
				e[g] != null && t[g](e[g]);
			}
			return t.endBatch(), this;
		} else {
			var _ = !!e, v = {};
			_ ? v.elements = this.elements().map(function(e) {
				return e.json();
			}) : (v.elements = {}, r.forEach(function(e) {
				var t = e.group();
				v.elements[t] || (v.elements[t] = []), v.elements[t].push(e.json());
			})), this._private.styleEnabled && (v.style = t.style().json()), v.data = copy(t.data());
			var b = n.options;
			return v.zoomingEnabled = n.zoomingEnabled, v.userZoomingEnabled = n.userZoomingEnabled, v.zoom = n.zoom, v.minZoom = n.minZoom, v.maxZoom = n.maxZoom, v.panningEnabled = n.panningEnabled, v.userPanningEnabled = n.userPanningEnabled, v.pan = copy(n.pan), v.boxSelectionEnabled = n.boxSelectionEnabled, v.renderer = copy(b.renderer), v.hideEdgesOnViewport = b.hideEdgesOnViewport, v.textureOnViewport = b.textureOnViewport, v.wheelSensitivity = b.wheelSensitivity, v.motionBlur = b.motionBlur, v.multiClickDebounceTime = b.multiClickDebounceTime, v;
		}
	}
}), corefn.$id = corefn.getElementById, [
	corefn$9,
	corefn$8,
	elesfn,
	corefn$7,
	corefn$6,
	corefn$5,
	corefn$4,
	corefn$3,
	corefn$2,
	corefn$1,
	fn
].forEach(function(e) {
	extend(corefn, e);
});
var defaults$7 = {
	fit: !0,
	directed: !1,
	direction: "downward",
	padding: 30,
	circle: !1,
	grid: !1,
	spacingFactor: 1.75,
	boundingBox: void 0,
	avoidOverlap: !0,
	nodeDimensionsIncludeLabels: !1,
	roots: void 0,
	depthSort: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: function(e, t) {
		return !0;
	},
	ready: void 0,
	stop: void 0,
	transform: function(e, t) {
		return t;
	}
}, deprecatedOptionDefaults = {
	maximal: !1,
	acyclic: !1
}, getInfo = function(e) {
	return e.scratch("breadthfirst");
}, setInfo = function(e, t) {
	return e.scratch("breadthfirst", t);
};
function BreadthFirstLayout(e) {
	this.options = extend({}, defaults$7, deprecatedOptionDefaults, e);
}
BreadthFirstLayout.prototype.run = function() {
	var e = this.options, t = e.cy, n = e.eles, r = n.nodes().filter(function(e) {
		return e.isChildless();
	}), a = n, o = e.directed, s = e.acyclic || e.maximal || e.maximalAdjustments > 0, c = !!e.boundingBox, l = makeBoundingBox(c ? e.boundingBox : structuredClone(t.extent())), u;
	if (elementOrCollection(e.roots)) u = e.roots;
	else if (array(e.roots)) {
		for (var d = [], f = 0; f < e.roots.length; f++) {
			var m = e.roots[f], h = t.getElementById(m);
			d.push(h);
		}
		u = t.collection(d);
	} else if (string(e.roots)) u = t.$(e.roots);
	else if (o) u = r.roots();
	else {
		var g = n.components();
		u = t.collection();
		for (var _ = function() {
			var e = g[v], t = e.maxDegree(!1), n = e.filter(function(e) {
				return e.degree(!1) === t;
			});
			u = u.add(n);
		}, v = 0; v < g.length; v++) _();
	}
	var b = [], S = {}, C = function(e, t) {
		b[t] ?? (b[t] = []);
		var n = b[t].length;
		b[t].push(e), setInfo(e, {
			index: n,
			depth: t
		});
	}, w = function(e, t) {
		var n = getInfo(e), r = n.depth, a = n.index;
		b[r][a] = null, e.isChildless() && C(e, t);
	};
	a.bfs({
		roots: u,
		directed: e.directed,
		visit: function(e, t, n, r, a) {
			var o = e[0], s = o.id();
			o.isChildless() && C(o, a), S[s] = !0;
		}
	});
	for (var T = [], E = 0; E < r.length; E++) {
		var D = r[E];
		S[D.id()] || T.push(D);
	}
	var O = function(e) {
		for (var t = b[e], n = 0; n < t.length; n++) {
			var r = t[n];
			if (r == null) {
				t.splice(n, 1), n--;
				continue;
			}
			setInfo(r, {
				depth: e,
				index: n
			});
		}
	}, k = function(t, r) {
		for (var a = getInfo(t), o = t.incomers().filter(function(e) {
			return e.isNode() && n.has(e);
		}), s = -1, c = t.id(), l = 0; l < o.length; l++) {
			var u = o[l], d = getInfo(u);
			s = Math.max(s, d.depth);
		}
		if (a.depth <= s) {
			if (!e.acyclic && r[c]) return null;
			var f = s + 1;
			return w(t, f), r[c] = f, !0;
		}
		return !1;
	};
	if (o && s) {
		var A = [], M = {}, P = function(e) {
			return A.push(e);
		}, F = function() {
			return A.shift();
		};
		for (r.forEach(function(e) {
			return A.push(e);
		}); A.length > 0;) {
			var I = F(), L = k(I, M);
			if (L) I.outgoers().filter(function(e) {
				return e.isNode() && n.has(e);
			}).forEach(P);
			else if (L === null) {
				warn("Detected double maximal shift for node `" + I.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
				break;
			}
		}
	}
	var R = 0;
	if (e.avoidOverlap) for (var B = 0; B < r.length; B++) {
		var V = r[B].layoutDimensions(e), H = V.w, U = V.h;
		R = Math.max(R, H, U);
	}
	var W = {}, G = function(e) {
		if (W[e.id()]) return W[e.id()];
		for (var t = getInfo(e).depth, n = e.neighborhood(), a = 0, o = 0, s = 0; s < n.length; s++) {
			var c = n[s];
			if (!(c.isEdge() || c.isParent() || !r.has(c))) {
				var l = getInfo(c);
				if (l != null) {
					var u = l.index, d = l.depth;
					if (!(u == null || d == null)) {
						var f = b[d].length;
						d < t && (a += u / f, o++);
					}
				}
			}
		}
		return o = Math.max(1, o), a /= o, o === 0 && (a = 0), W[e.id()] = a, a;
	}, q = function(e, t) {
		var n = G(e) - G(t);
		return n === 0 ? ascending(e.id(), t.id()) : n;
	};
	e.depthSort !== void 0 && (q = e.depthSort);
	for (var J = b.length, Y = 0; Y < J; Y++) b[Y].sort(q), O(Y);
	for (var X = [], Z = 0; Z < T.length; Z++) X.push(T[Z]);
	X.length && (b.unshift(X), J = b.length, function() {
		for (var e = 0; e < J; e++) O(e);
	}());
	for (var Q = 0, $ = 0; $ < J; $++) Q = Math.max(b[$].length, Q);
	var kh = {
		x: l.x1 + l.w / 2,
		y: l.y1 + l.h / 2
	}, Ah = r.reduce(function(t, n) {
		return function(e) {
			return {
				w: t.w === -1 ? e.w : (t.w + e.w) / 2,
				h: t.h === -1 ? e.h : (t.h + e.h) / 2
			};
		}(n.boundingBox({ includeLabels: e.nodeDimensionsIncludeLabels }));
	}, {
		w: -1,
		h: -1
	}), jh = Math.max(J === 1 ? 0 : c ? (l.h - e.padding * 2 - Ah.h) / (J - 1) : (l.h - e.padding * 2 - Ah.h) / (J + 1), R), Mh = b.reduce(function(e, t) {
		return Math.max(e, t.length);
	}, 0), Nh = function(t) {
		var n = getInfo(t), r = n.depth, a = n.index;
		if (e.circle) {
			var o = Math.min(l.w / 2 / J, l.h / 2 / J);
			o = Math.max(o, R);
			var s = o * r + o - (J > 0 && b[0].length <= 3 ? o / 2 : 0), u = 2 * Math.PI / b[r].length * a;
			return r === 0 && b[0].length === 1 && (s = 1), {
				x: kh.x + s * Math.cos(u),
				y: kh.y + s * Math.sin(u)
			};
		} else {
			var d = b[r].length, f = Math.max(d === 1 ? 0 : c ? (l.w - e.padding * 2 - Ah.w) / ((e.grid ? Mh : d) - 1) : (l.w - e.padding * 2 - Ah.w) / ((e.grid ? Mh : d) + 1), R);
			return {
				x: kh.x + (a + 1 - (d + 1) / 2) * f,
				y: kh.y + (r + 1 - (J + 1) / 2) * jh
			};
		}
	}, Ph = {
		downward: 0,
		leftward: 90,
		upward: 180,
		rightward: -90
	};
	return Object.keys(Ph).indexOf(e.direction) === -1 && error(`Invalid direction '${e.direction}' specified for breadthfirst layout. Valid values are: ${Object.keys(Ph).join(", ")}`), n.nodes().layoutPositions(this, e, function(t) {
		return rotatePosAndSkewByBox(Nh(t), l, Ph[e.direction]);
	}), this;
};
var defaults$6 = {
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	avoidOverlap: !0,
	nodeDimensionsIncludeLabels: !1,
	spacingFactor: void 0,
	radius: void 0,
	startAngle: 3 / 2 * Math.PI,
	sweep: void 0,
	clockwise: !0,
	sort: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: function(e, t) {
		return !0;
	},
	ready: void 0,
	stop: void 0,
	transform: function(e, t) {
		return t;
	}
};
function CircleLayout(e) {
	this.options = extend({}, defaults$6, e);
}
CircleLayout.prototype.run = function() {
	var e = this.options, t = e, n = e.cy, r = t.eles, a = t.counterclockwise === void 0 ? t.clockwise : !t.counterclockwise, o = r.nodes().not(":parent");
	t.sort && (o = o.sort(t.sort));
	for (var s = makeBoundingBox(t.boundingBox ? t.boundingBox : {
		x1: 0,
		y1: 0,
		w: n.width(),
		h: n.height()
	}), c = {
		x: s.x1 + s.w / 2,
		y: s.y1 + s.h / 2
	}, l = (t.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / o.length : t.sweep) / Math.max(1, o.length - 1), u, d = 0, f = 0; f < o.length; f++) {
		var m = o[f].layoutDimensions(t), h = m.w, g = m.h;
		d = Math.max(d, h, g);
	}
	if (u = number$1(t.radius) ? t.radius : o.length <= 1 ? 0 : Math.min(s.h, s.w) / 2 - d, o.length > 1 && t.avoidOverlap) {
		d *= 1.75;
		var _ = Math.cos(l) - Math.cos(0), v = Math.sin(l) - Math.sin(0), b = Math.sqrt(d * d / (_ * _ + v * v));
		u = Math.max(b, u);
	}
	return r.nodes().layoutPositions(this, t, function(e, n) {
		var r = t.startAngle + n * l * (a ? 1 : -1), o = u * Math.cos(r), s = u * Math.sin(r);
		return {
			x: c.x + o,
			y: c.y + s
		};
	}), this;
};
var defaults$5 = {
	fit: !0,
	padding: 30,
	startAngle: 3 / 2 * Math.PI,
	sweep: void 0,
	clockwise: !0,
	equidistant: !1,
	minNodeSpacing: 10,
	boundingBox: void 0,
	avoidOverlap: !0,
	nodeDimensionsIncludeLabels: !1,
	height: void 0,
	width: void 0,
	spacingFactor: void 0,
	concentric: function(e) {
		return e.degree();
	},
	levelWidth: function(e) {
		return e.maxDegree() / 4;
	},
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: function(e, t) {
		return !0;
	},
	ready: void 0,
	stop: void 0,
	transform: function(e, t) {
		return t;
	}
};
function ConcentricLayout(e) {
	this.options = extend({}, defaults$5, e);
}
ConcentricLayout.prototype.run = function() {
	for (var e = this.options, t = e, n = t.counterclockwise === void 0 ? t.clockwise : !t.counterclockwise, r = e.cy, a = t.eles, o = a.nodes().not(":parent"), s = makeBoundingBox(t.boundingBox ? t.boundingBox : {
		x1: 0,
		y1: 0,
		w: r.width(),
		h: r.height()
	}), c = {
		x: s.x1 + s.w / 2,
		y: s.y1 + s.h / 2
	}, l = [], u = 0, d = 0; d < o.length; d++) {
		var f = o[d], m = void 0;
		m = t.concentric(f), l.push({
			value: m,
			node: f
		}), f._private.scratch.concentric = m;
	}
	o.updateStyle();
	for (var h = 0; h < o.length; h++) {
		var g = o[h].layoutDimensions(t);
		u = Math.max(u, g.w, g.h);
	}
	l.sort(function(e, t) {
		return t.value - e.value;
	});
	for (var _ = t.levelWidth(o), v = [[]], b = v[0], S = 0; S < l.length; S++) {
		var C = l[S];
		b.length > 0 && Math.abs(b[0].value - C.value) >= _ && (b = [], v.push(b)), b.push(C);
	}
	var w = u + t.minNodeSpacing;
	if (!t.avoidOverlap) {
		var T = v.length > 0 && v[0].length > 1, E = (Math.min(s.w, s.h) / 2 - w) / (v.length + T ? 1 : 0);
		w = Math.min(w, E);
	}
	for (var D = 0, O = 0; O < v.length; O++) {
		var k = v[O], A = k.dTheta = (t.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / k.length : t.sweep) / Math.max(1, k.length - 1);
		if (k.length > 1 && t.avoidOverlap) {
			var j = Math.cos(A) - Math.cos(0), M = Math.sin(A) - Math.sin(0), N = Math.sqrt(w * w / (j * j + M * M));
			D = Math.max(N, D);
		}
		k.r = D, D += w;
	}
	if (t.equidistant) {
		for (var P = 0, F = 0, I = 0; I < v.length; I++) {
			var L = v[I].r - F;
			P = Math.max(P, L);
		}
		F = 0;
		for (var R = 0; R < v.length; R++) {
			var z = v[R];
			R === 0 && (F = z.r), z.r = F, F += P;
		}
	}
	for (var B = {}, V = 0; V < v.length; V++) for (var H = v[V], U = H.dTheta, W = H.r, G = 0; G < H.length; G++) {
		var q = H[G], J = t.startAngle + (n ? 1 : -1) * U * G, Y = {
			x: c.x + W * Math.cos(J),
			y: c.y + W * Math.sin(J)
		};
		B[q.node.id()] = Y;
	}
	return a.nodes().layoutPositions(this, t, function(e) {
		return B[e.id()];
	}), this;
};
var DEBUG, defaults$4 = {
	ready: function() {},
	stop: function() {},
	animate: !0,
	animationEasing: void 0,
	animationDuration: void 0,
	animateFilter: function(e, t) {
		return !0;
	},
	animationThreshold: 250,
	refresh: 20,
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	nodeDimensionsIncludeLabels: !1,
	randomize: !1,
	componentSpacing: 40,
	nodeRepulsion: function(e) {
		return 2048;
	},
	nodeOverlap: 4,
	idealEdgeLength: function(e) {
		return 32;
	},
	edgeElasticity: function(e) {
		return 32;
	},
	nestingFactor: 1.2,
	gravity: 1,
	numIter: 1e3,
	initialTemp: 1e3,
	coolingFactor: .99,
	minTemp: 1
};
function CoseLayout(e) {
	this.options = extend({}, defaults$4, e), this.options.layout = this;
	var t = this.options.eles.nodes(), n = this.options.eles.edges().filter(function(e) {
		var n = e.source().data("id"), r = e.target().data("id"), a = t.some(function(e) {
			return e.data("id") === n;
		}), o = t.some(function(e) {
			return e.data("id") === r;
		});
		return !a || !o;
	});
	this.options.eles = this.options.eles.not(n);
}
CoseLayout.prototype.run = function() {
	var e = this.options, t = e.cy, n = this;
	n.stopped = !1, (e.animate === !0 || e.animate === !1) && n.emit({
		type: "layoutstart",
		layout: n
	}), DEBUG = !0 === e.debug;
	var r = createLayoutInfo(t, n, e);
	DEBUG && printLayoutInfo(r), e.randomize && randomizePositions(r);
	var a = performanceNow(), o = function() {
		refreshPositions(r, t, e), !0 === e.fit && t.fit(e.padding);
	}, s = function(t) {
		return !(n.stopped || t >= e.numIter || (step(r, e), r.temperature *= e.coolingFactor, r.temperature < e.minTemp));
	}, c = function() {
		if (e.animate === !0 || e.animate === !1) o(), n.one("layoutstop", e.stop), n.emit({
			type: "layoutstop",
			layout: n
		});
		else {
			var t = e.eles.nodes(), a = getScaleInBoundsFn(r, e, t);
			t.layoutPositions(n, e, a);
		}
	}, l = 0, u = !0;
	if (e.animate === !0) {
		var d = function() {
			for (var t = 0; u && t < e.refresh;) u = s(l), l++, t++;
			u ? (performanceNow() - a >= e.animationThreshold && o(), requestAnimationFrame(d)) : (separateComponents(r, e), c());
		};
		d();
	} else {
		for (; u;) u = s(l), l++;
		separateComponents(r, e), c();
	}
	return this;
}, CoseLayout.prototype.stop = function() {
	return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
}, CoseLayout.prototype.destroy = function() {
	return this.thread && this.thread.stop(), this;
};
var createLayoutInfo = function(e, t, n) {
	for (var r = n.eles.edges(), a = n.eles.nodes(), o = makeBoundingBox(n.boundingBox ? n.boundingBox : {
		x1: 0,
		y1: 0,
		w: e.width(),
		h: e.height()
	}), s = {
		isCompound: e.hasCompoundNodes(),
		layoutNodes: [],
		idToIndex: {},
		nodeSize: a.size(),
		graphSet: [],
		indexToGraph: [],
		layoutEdges: [],
		edgeSize: r.size(),
		temperature: n.initialTemp,
		clientWidth: o.w,
		clientHeight: o.h,
		boundingBox: o
	}, c = n.eles.components(), l = {}, u = 0; u < c.length; u++) for (var d = c[u], f = 0; f < d.length; f++) {
		var m = d[f];
		l[m.id()] = u;
	}
	for (var u = 0; u < s.nodeSize; u++) {
		var h = a[u], g = h.layoutDimensions(n), _ = {};
		_.isLocked = h.locked(), _.id = h.data("id"), _.parentId = h.data("parent"), _.cmptId = l[h.id()], _.children = [], _.positionX = h.position("x"), _.positionY = h.position("y"), _.offsetX = 0, _.offsetY = 0, _.height = g.w, _.width = g.h, _.maxX = _.positionX + _.width / 2, _.minX = _.positionX - _.width / 2, _.maxY = _.positionY + _.height / 2, _.minY = _.positionY - _.height / 2, _.padLeft = parseFloat(h.style("padding")), _.padRight = parseFloat(h.style("padding")), _.padTop = parseFloat(h.style("padding")), _.padBottom = parseFloat(h.style("padding")), _.nodeRepulsion = fn$6(n.nodeRepulsion) ? n.nodeRepulsion(h) : n.nodeRepulsion, s.layoutNodes.push(_), s.idToIndex[_.id] = u;
	}
	for (var v = [], b = 0, S = -1, C = [], u = 0; u < s.nodeSize; u++) {
		var h = s.layoutNodes[u], w = h.parentId;
		w == null ? (v[++S] = h.id, C.push(h.id)) : s.layoutNodes[s.idToIndex[w]].children.push(h.id);
	}
	for (s.graphSet.push(C); b <= S;) {
		var T = v[b++], E = s.idToIndex[T], m = s.layoutNodes[E], D = m.children;
		if (D.length > 0) {
			s.graphSet.push(D);
			for (var u = 0; u < D.length; u++) v[++S] = D[u];
		}
	}
	for (var u = 0; u < s.graphSet.length; u++) for (var O = s.graphSet[u], f = 0; f < O.length; f++) {
		var k = s.idToIndex[O[f]];
		s.indexToGraph[k] = u;
	}
	for (var u = 0; u < s.edgeSize; u++) {
		var A = r[u], j = {};
		j.id = A.data("id"), j.sourceId = A.data("source"), j.targetId = A.data("target");
		var N = fn$6(n.idealEdgeLength) ? n.idealEdgeLength(A) : n.idealEdgeLength, P = fn$6(n.edgeElasticity) ? n.edgeElasticity(A) : n.edgeElasticity, F = s.idToIndex[j.sourceId], I = s.idToIndex[j.targetId];
		if (s.indexToGraph[F] != s.indexToGraph[I]) {
			for (var L = findLCA(j.sourceId, j.targetId, s), R = s.graphSet[L], z = 0, _ = s.layoutNodes[F]; R.indexOf(_.id) === -1;) _ = s.layoutNodes[s.idToIndex[_.parentId]], z++;
			for (_ = s.layoutNodes[I]; R.indexOf(_.id) === -1;) _ = s.layoutNodes[s.idToIndex[_.parentId]], z++;
			N *= z * n.nestingFactor;
		}
		j.idealLength = N, j.elasticity = P, s.layoutEdges.push(j);
	}
	return s;
}, findLCA = function(e, t, n) {
	var r = _findLCA_aux(e, t, 0, n);
	return 2 > r.count ? 0 : r.graph;
}, _findLCA_aux = function(e, t, n, r) {
	var a = r.graphSet[n];
	if (-1 < a.indexOf(e) && -1 < a.indexOf(t)) return {
		count: 2,
		graph: n
	};
	for (var o = 0, s = 0; s < a.length; s++) {
		var c = a[s], l = r.idToIndex[c], u = r.layoutNodes[l].children;
		if (u.length !== 0) {
			var d = r.indexToGraph[r.idToIndex[u[0]]], f = _findLCA_aux(e, t, d, r);
			if (f.count !== 0) if (f.count === 1) {
				if (o++, o === 2) break;
			} else return f;
		}
	}
	return {
		count: o,
		graph: n
	};
}, printLayoutInfo, randomizePositions = function(e, t) {
	for (var n = e.clientWidth, r = e.clientHeight, a = 0; a < e.nodeSize; a++) {
		var o = e.layoutNodes[a];
		o.children.length === 0 && !o.isLocked && (o.positionX = Math.random() * n, o.positionY = Math.random() * r);
	}
}, getScaleInBoundsFn = function(e, t, n) {
	var r = e.boundingBox, a = {
		x1: Infinity,
		x2: -Infinity,
		y1: Infinity,
		y2: -Infinity
	};
	return t.boundingBox && (n.forEach(function(t) {
		var n = e.layoutNodes[e.idToIndex[t.data("id")]];
		a.x1 = Math.min(a.x1, n.positionX), a.x2 = Math.max(a.x2, n.positionX), a.y1 = Math.min(a.y1, n.positionY), a.y2 = Math.max(a.y2, n.positionY);
	}), a.w = a.x2 - a.x1, a.h = a.y2 - a.y1), function(n, o) {
		var s = e.layoutNodes[e.idToIndex[n.data("id")]];
		if (t.boundingBox) {
			var c = a.w === 0 ? .5 : (s.positionX - a.x1) / a.w, l = a.h === 0 ? .5 : (s.positionY - a.y1) / a.h;
			return {
				x: r.x1 + c * r.w,
				y: r.y1 + l * r.h
			};
		} else return {
			x: s.positionX,
			y: s.positionY
		};
	};
}, refreshPositions = function(e, t, n) {
	var r = n.layout, a = n.eles.nodes(), o = getScaleInBoundsFn(e, n, a);
	a.positions(o), !0 !== e.ready && (e.ready = !0, r.one("layoutready", n.ready), r.emit({
		type: "layoutready",
		layout: this
	}));
}, step = function(e, t, n) {
	calculateNodeForces(e, t), calculateEdgeForces(e), calculateGravityForces(e, t), propagateForces(e), updatePositions(e);
}, calculateNodeForces = function(e, t) {
	for (var n = 0; n < e.graphSet.length; n++) for (var r = e.graphSet[n], a = r.length, o = 0; o < a; o++) for (var s = e.layoutNodes[e.idToIndex[r[o]]], c = o + 1; c < a; c++) {
		var l = e.layoutNodes[e.idToIndex[r[c]]];
		nodeRepulsion(s, l, e, t);
	}
}, randomDistance = function(e) {
	return -1 + 2 * e * Math.random();
}, nodeRepulsion = function(e, t, n, r) {
	if (!(e.cmptId !== t.cmptId && !n.isCompound)) {
		var a = t.positionX - e.positionX, o = t.positionY - e.positionY, s = 1;
		a === 0 && o === 0 && (a = randomDistance(s), o = randomDistance(s));
		var c = nodesOverlap(e, t, a, o);
		if (c > 0) var l = r.nodeOverlap * c, u = Math.sqrt(a * a + o * o), d = l * a / u, f = l * o / u;
		else var m = findClippingPoint(e, a, o), h = findClippingPoint(t, -1 * a, -1 * o), g = h.x - m.x, _ = h.y - m.y, v = g * g + _ * _, u = Math.sqrt(v), l = (e.nodeRepulsion + t.nodeRepulsion) / v, d = l * g / u, f = l * _ / u;
		e.isLocked || (e.offsetX -= d, e.offsetY -= f), t.isLocked || (t.offsetX += d, t.offsetY += f);
	}
}, nodesOverlap = function(e, t, n, r) {
	if (n > 0) var a = e.maxX - t.minX;
	else var a = t.maxX - e.minX;
	if (r > 0) var o = e.maxY - t.minY;
	else var o = t.maxY - e.minY;
	return a >= 0 && o >= 0 ? Math.sqrt(a * a + o * o) : 0;
}, findClippingPoint = function(e, t, n) {
	var r = e.positionX, a = e.positionY, o = e.height || 1, s = e.width || 1, c = n / t, l = o / s, u = {};
	return t === 0 && 0 < n || t === 0 && 0 > n ? (u.x = r, u.y = a + o / 2, u) : 0 < t && -1 * l <= c && c <= l ? (u.x = r + s / 2, u.y = a + s * n / 2 / t, u) : 0 > t && -1 * l <= c && c <= l ? (u.x = r - s / 2, u.y = a - s * n / 2 / t, u) : 0 < n && (c <= -1 * l || c >= l) ? (u.x = r + o * t / 2 / n, u.y = a + o / 2, u) : 0 > n && (c <= -1 * l || c >= l) ? (u.x = r - o * t / 2 / n, u.y = a - o / 2, u) : u;
}, calculateEdgeForces = function(e, t) {
	for (var n = 0; n < e.edgeSize; n++) {
		var r = e.layoutEdges[n], a = e.idToIndex[r.sourceId], o = e.layoutNodes[a], s = e.idToIndex[r.targetId], c = e.layoutNodes[s], l = c.positionX - o.positionX, u = c.positionY - o.positionY;
		if (!(l === 0 && u === 0)) {
			var d = findClippingPoint(o, l, u), f = findClippingPoint(c, -1 * l, -1 * u), m = f.x - d.x, h = f.y - d.y, g = Math.sqrt(m * m + h * h), _ = (r.idealLength - g) ** 2 / r.elasticity;
			if (g !== 0) var v = _ * m / g, b = _ * h / g;
			else var v = 0, b = 0;
			o.isLocked || (o.offsetX += v, o.offsetY += b), c.isLocked || (c.offsetX -= v, c.offsetY -= b);
		}
	}
}, calculateGravityForces = function(e, t) {
	if (t.gravity !== 0) for (var n = 1, r = 0; r < e.graphSet.length; r++) {
		var a = e.graphSet[r], o = a.length;
		if (r === 0) var s = e.clientHeight / 2, c = e.clientWidth / 2;
		else var l = e.layoutNodes[e.idToIndex[a[0]]], u = e.layoutNodes[e.idToIndex[l.parentId]], s = u.positionX, c = u.positionY;
		for (var d = 0; d < o; d++) {
			var f = e.layoutNodes[e.idToIndex[a[d]]];
			if (!f.isLocked) {
				var m = s - f.positionX, h = c - f.positionY, g = Math.sqrt(m * m + h * h);
				if (g > n) {
					var _ = t.gravity * m / g, v = t.gravity * h / g;
					f.offsetX += _, f.offsetY += v;
				}
			}
		}
	}
}, propagateForces = function(e, t) {
	var n = [], r = 0, a = -1;
	for (n.push.apply(n, e.graphSet[0]), a += e.graphSet[0].length; r <= a;) {
		var o = n[r++], s = e.idToIndex[o], c = e.layoutNodes[s], l = c.children;
		if (0 < l.length && !c.isLocked) {
			for (var u = c.offsetX, d = c.offsetY, f = 0; f < l.length; f++) {
				var m = e.layoutNodes[e.idToIndex[l[f]]];
				m.offsetX += u, m.offsetY += d, n[++a] = l[f];
			}
			c.offsetX = 0, c.offsetY = 0;
		}
	}
}, updatePositions = function(e, t) {
	for (var n = 0; n < e.nodeSize; n++) {
		var r = e.layoutNodes[n];
		0 < r.children.length && (r.maxX = void 0, r.minX = void 0, r.maxY = void 0, r.minY = void 0);
	}
	for (var n = 0; n < e.nodeSize; n++) {
		var r = e.layoutNodes[n];
		if (!(0 < r.children.length || r.isLocked)) {
			var a = limitForce(r.offsetX, r.offsetY, e.temperature);
			r.positionX += a.x, r.positionY += a.y, r.offsetX = 0, r.offsetY = 0, r.minX = r.positionX - r.width, r.maxX = r.positionX + r.width, r.minY = r.positionY - r.height, r.maxY = r.positionY + r.height, _updateAncestryBoundaries(r, e);
		}
	}
	for (var n = 0; n < e.nodeSize; n++) {
		var r = e.layoutNodes[n];
		0 < r.children.length && !r.isLocked && (r.positionX = (r.maxX + r.minX) / 2, r.positionY = (r.maxY + r.minY) / 2, r.width = r.maxX - r.minX, r.height = r.maxY - r.minY);
	}
}, limitForce = function(e, t, n) {
	var r = Math.sqrt(e * e + t * t);
	if (r > n) var a = {
		x: n * e / r,
		y: n * t / r
	};
	else var a = {
		x: e,
		y: t
	};
	return a;
}, _updateAncestryBoundaries = function(e, t) {
	var n = e.parentId;
	if (n != null) {
		var r = t.layoutNodes[t.idToIndex[n]], a = !1;
		if ((r.maxX == null || e.maxX + r.padRight > r.maxX) && (r.maxX = e.maxX + r.padRight, a = !0), (r.minX == null || e.minX - r.padLeft < r.minX) && (r.minX = e.minX - r.padLeft, a = !0), (r.maxY == null || e.maxY + r.padBottom > r.maxY) && (r.maxY = e.maxY + r.padBottom, a = !0), (r.minY == null || e.minY - r.padTop < r.minY) && (r.minY = e.minY - r.padTop, a = !0), a) return _updateAncestryBoundaries(r, t);
	}
}, separateComponents = function(e, t) {
	for (var n = e.layoutNodes, r = [], a = 0; a < n.length; a++) {
		var o = n[a], s = o.cmptId;
		(r[s] = r[s] || []).push(o);
	}
	for (var c = 0, a = 0; a < r.length; a++) {
		var l = r[a];
		if (l) {
			l.x1 = Infinity, l.x2 = -Infinity, l.y1 = Infinity, l.y2 = -Infinity;
			for (var u = 0; u < l.length; u++) {
				var d = l[u];
				l.x1 = Math.min(l.x1, d.positionX - d.width / 2), l.x2 = Math.max(l.x2, d.positionX + d.width / 2), l.y1 = Math.min(l.y1, d.positionY - d.height / 2), l.y2 = Math.max(l.y2, d.positionY + d.height / 2);
			}
			l.w = l.x2 - l.x1, l.h = l.y2 - l.y1, c += l.w * l.h;
		}
	}
	r.sort(function(e, t) {
		return t.w * t.h - e.w * e.h;
	});
	for (var f = 0, m = 0, h = 0, g = 0, _ = Math.sqrt(c) * e.clientWidth / e.clientHeight, a = 0; a < r.length; a++) {
		var l = r[a];
		if (l) {
			for (var u = 0; u < l.length; u++) {
				var d = l[u];
				d.isLocked || (d.positionX += f - l.x1, d.positionY += m - l.y1);
			}
			f += l.w + t.componentSpacing, h += l.w + t.componentSpacing, g = Math.max(g, l.h), h > _ && (m += g + t.componentSpacing, f = 0, h = 0, g = 0);
		}
	}
}, defaults$3 = {
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	avoidOverlap: !0,
	avoidOverlapPadding: 10,
	nodeDimensionsIncludeLabels: !1,
	spacingFactor: void 0,
	condense: !1,
	rows: void 0,
	cols: void 0,
	position: function(e) {},
	sort: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: function(e, t) {
		return !0;
	},
	ready: void 0,
	stop: void 0,
	transform: function(e, t) {
		return t;
	}
};
function GridLayout(e) {
	this.options = extend({}, defaults$3, e);
}
GridLayout.prototype.run = function() {
	var e = this.options, t = e, n = e.cy, r = t.eles, a = r.nodes().not(":parent");
	t.sort && (a = a.sort(t.sort));
	var o = makeBoundingBox(t.boundingBox ? t.boundingBox : {
		x1: 0,
		y1: 0,
		w: n.width(),
		h: n.height()
	});
	if (o.h === 0 || o.w === 0) r.nodes().layoutPositions(this, t, function(e) {
		return {
			x: o.x1,
			y: o.y1
		};
	});
	else {
		var s = a.size(), c = Math.sqrt(s * o.h / o.w), l = Math.round(c), u = Math.round(o.w / o.h * c), d = function(e) {
			if (e == null) return Math.min(l, u);
			Math.min(l, u) == l ? l = e : u = e;
		}, f = function(e) {
			if (e == null) return Math.max(l, u);
			Math.max(l, u) == l ? l = e : u = e;
		}, m = t.rows, h = t.cols == null ? t.columns : t.cols;
		if (m != null && h != null) l = m, u = h;
		else if (m != null && h == null) l = m, u = Math.ceil(s / l);
		else if (m == null && h != null) u = h, l = Math.ceil(s / u);
		else if (u * l > s) {
			var g = d(), _ = f();
			(g - 1) * _ >= s ? d(g - 1) : (_ - 1) * g >= s && f(_ - 1);
		} else for (; u * l < s;) {
			var v = d(), b = f();
			(b + 1) * v >= s ? f(b + 1) : d(v + 1);
		}
		var S = o.w / u, C = o.h / l;
		if (t.condense && (S = 0, C = 0), t.avoidOverlap) for (var w = 0; w < a.length; w++) {
			var T = a[w], E = T._private.position;
			(E.x == null || E.y == null) && (E.x = 0, E.y = 0);
			var D = T.layoutDimensions(t), O = t.avoidOverlapPadding, k = D.w + O, A = D.h + O;
			S = Math.max(S, k), C = Math.max(C, A);
		}
		for (var j = {}, M = function(e, t) {
			return !!j["c-" + e + "-" + t];
		}, N = function(e, t) {
			j["c-" + e + "-" + t] = !0;
		}, P = 0, F = 0, I = function() {
			F++, F >= u && (F = 0, P++);
		}, L = {}, R = 0; R < a.length; R++) {
			var z = a[R], B = t.position(z);
			if (B && (B.row !== void 0 || B.col !== void 0)) {
				var V = {
					row: B.row,
					col: B.col
				};
				if (V.col === void 0) for (V.col = 0; M(V.row, V.col);) V.col++;
				else if (V.row === void 0) for (V.row = 0; M(V.row, V.col);) V.row++;
				L[z.id()] = V, N(V.row, V.col);
			}
		}
		a.layoutPositions(this, t, function(e, t) {
			var n, r;
			if (e.locked() || e.isParent()) return !1;
			var a = L[e.id()];
			if (a) n = a.col * S + S / 2 + o.x1, r = a.row * C + C / 2 + o.y1;
			else {
				for (; M(P, F);) I();
				n = F * S + S / 2 + o.x1, r = P * C + C / 2 + o.y1, N(P, F), I();
			}
			return {
				x: n,
				y: r
			};
		});
	}
	return this;
};
var defaults$2 = {
	ready: function() {},
	stop: function() {}
};
function NullLayout(e) {
	this.options = extend({}, defaults$2, e);
}
NullLayout.prototype.run = function() {
	var e = this.options, t = e.eles, n = this;
	return e.cy, n.emit("layoutstart"), t.nodes().positions(function() {
		return {
			x: 0,
			y: 0
		};
	}), n.one("layoutready", e.ready), n.emit("layoutready"), n.one("layoutstop", e.stop), n.emit("layoutstop"), this;
}, NullLayout.prototype.stop = function() {
	return this;
};
var defaults$1 = {
	positions: void 0,
	zoom: void 0,
	pan: void 0,
	fit: !0,
	padding: 30,
	spacingFactor: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: function(e, t) {
		return !0;
	},
	ready: void 0,
	stop: void 0,
	transform: function(e, t) {
		return t;
	}
};
function PresetLayout(e) {
	this.options = extend({}, defaults$1, e);
}
PresetLayout.prototype.run = function() {
	var e = this.options, t = e.eles.nodes(), n = fn$6(e.positions);
	function r(t) {
		return e.positions == null ? copyPosition(t.position()) : n ? e.positions(t) : e.positions[t._private.data.id] ?? null;
	}
	return t.layoutPositions(this, e, function(e, t) {
		var n = r(e);
		return e.locked() || n == null ? !1 : n;
	}), this;
};
var defaults = {
	fit: !0,
	padding: 30,
	boundingBox: void 0,
	animate: !1,
	animationDuration: 500,
	animationEasing: void 0,
	animateFilter: function(e, t) {
		return !0;
	},
	ready: void 0,
	stop: void 0,
	transform: function(e, t) {
		return t;
	}
};
function RandomLayout(e) {
	this.options = extend({}, defaults, e);
}
RandomLayout.prototype.run = function() {
	var e = this.options, t = e.cy, n = e.eles, r = makeBoundingBox(e.boundingBox ? e.boundingBox : {
		x1: 0,
		y1: 0,
		w: t.width(),
		h: t.height()
	});
	return n.nodes().layoutPositions(this, e, function(e, t) {
		return {
			x: r.x1 + Math.round(Math.random() * r.w),
			y: r.y1 + Math.round(Math.random() * r.h)
		};
	}), this;
};
var layout = [
	{
		name: "breadthfirst",
		impl: BreadthFirstLayout
	},
	{
		name: "circle",
		impl: CircleLayout
	},
	{
		name: "concentric",
		impl: ConcentricLayout
	},
	{
		name: "cose",
		impl: CoseLayout
	},
	{
		name: "grid",
		impl: GridLayout
	},
	{
		name: "null",
		impl: NullLayout
	},
	{
		name: "preset",
		impl: PresetLayout
	},
	{
		name: "random",
		impl: RandomLayout
	}
];
function NullRenderer(e) {
	this.options = e, this.notifications = 0;
}
var noop = function() {}, throwImgErr = function() {
	throw Error("A headless instance can not render images");
};
NullRenderer.prototype = {
	recalculateRenderedStyle: noop,
	notify: function() {
		this.notifications++;
	},
	init: noop,
	isHeadless: function() {
		return !0;
	},
	png: throwImgErr,
	jpg: throwImgErr
};
var BRp$f = {};
BRp$f.arrowShapeWidth = .3, BRp$f.registerArrowShapes = function() {
	var e = this.arrowShapes = {}, t = this, n = function(e, t, n, r, a, o, s) {
		var c = a.x - n / 2 - s, l = a.x + n / 2 + s, u = a.y - n / 2 - s, d = a.y + n / 2 + s;
		return c <= e && e <= l && u <= t && t <= d;
	}, r = function(e, t, n, r, a) {
		var o = e * Math.cos(r) - t * Math.sin(r), s = e * Math.sin(r) + t * Math.cos(r), c = o * n, l = s * n;
		return {
			x: c + a.x,
			y: l + a.y
		};
	}, a = function(e, t, n, a) {
		for (var o = [], s = 0; s < e.length; s += 2) {
			var c = e[s], l = e[s + 1];
			o.push(r(c, l, t, n, a));
		}
		return o;
	}, o = function(e) {
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n];
			t.push(r.x, r.y);
		}
		return t;
	}, s = function(e) {
		return e.pstyle("width").pfValue * e.pstyle("arrow-scale").pfValue * 2;
	}, c = function(r, c) {
		string(c) && (c = e[c]), e[r] = extend({
			name: r,
			points: [
				-.15,
				-.3,
				.15,
				-.3,
				.15,
				.3,
				-.15,
				.3
			],
			collide: function(e, t, n, r, s, c) {
				return pointInsidePolygonPoints(e, t, o(a(this.points, n + 2 * c, r, s)));
			},
			roughCollide: n,
			draw: function(e, n, r, o) {
				var s = a(this.points, n, r, o);
				t.arrowShapeImpl("polygon")(e, s);
			},
			spacing: function(e) {
				return 0;
			},
			gap: s
		}, c);
	};
	c("none", {
		collide: falsify,
		roughCollide: falsify,
		draw: noop$1,
		spacing: zeroify,
		gap: zeroify
	}), c("triangle", { points: [
		-.15,
		-.3,
		0,
		0,
		.15,
		-.3
	] }), c("arrow", "triangle"), c("triangle-backcurve", {
		points: e.triangle.points,
		controlPoint: [0, -.15],
		roughCollide: n,
		draw: function(e, n, o, s, c) {
			var l = a(this.points, n, o, s), u = this.controlPoint, d = r(u[0], u[1], n, o, s);
			t.arrowShapeImpl(this.name)(e, l, d);
		},
		gap: function(e) {
			return s(e) * .8;
		}
	}), c("triangle-tee", {
		points: [
			0,
			0,
			.15,
			-.3,
			-.15,
			-.3,
			0,
			0
		],
		pointsTee: [
			-.15,
			-.4,
			-.15,
			-.5,
			.15,
			-.5,
			.15,
			-.4
		],
		collide: function(e, t, n, r, s, c, l) {
			var u = o(a(this.points, n + 2 * l, r, s)), d = o(a(this.pointsTee, n + 2 * l, r, s));
			return pointInsidePolygonPoints(e, t, u) || pointInsidePolygonPoints(e, t, d);
		},
		draw: function(e, n, r, o, s) {
			var c = a(this.points, n, r, o), l = a(this.pointsTee, n, r, o);
			t.arrowShapeImpl(this.name)(e, c, l);
		}
	}), c("circle-triangle", {
		radius: .15,
		pointsTr: [
			0,
			-.15,
			.15,
			-.45,
			-.15,
			-.45,
			0,
			-.15
		],
		collide: function(e, t, n, r, s, c, l) {
			var u = s, d = (u.x - e) ** 2 + (u.y - t) ** 2 <= ((n + 2 * l) * this.radius) ** 2;
			return pointInsidePolygonPoints(e, t, o(a(this.points, n + 2 * l, r, s))) || d;
		},
		draw: function(e, n, r, o, s) {
			var c = a(this.pointsTr, n, r, o);
			t.arrowShapeImpl(this.name)(e, c, o.x, o.y, this.radius * n);
		},
		spacing: function(e) {
			return t.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.radius;
		}
	}), c("triangle-cross", {
		points: [
			0,
			0,
			.15,
			-.3,
			-.15,
			-.3,
			0,
			0
		],
		baseCrossLinePts: [
			-.15,
			-.4,
			-.15,
			-.4,
			.15,
			-.4,
			.15,
			-.4
		],
		crossLinePts: function(e, t) {
			var n = this.baseCrossLinePts.slice(), r = t / e, a = 3, o = 5;
			return n[a] = n[a] - r, n[o] = n[o] - r, n;
		},
		collide: function(e, t, n, r, s, c, l) {
			var u = o(a(this.points, n + 2 * l, r, s)), d = o(a(this.crossLinePts(n, c), n + 2 * l, r, s));
			return pointInsidePolygonPoints(e, t, u) || pointInsidePolygonPoints(e, t, d);
		},
		draw: function(e, n, r, o, s) {
			var c = a(this.points, n, r, o), l = a(this.crossLinePts(n, s), n, r, o);
			t.arrowShapeImpl(this.name)(e, c, l);
		}
	}), c("vee", {
		points: [
			-.15,
			-.3,
			0,
			0,
			.15,
			-.3,
			0,
			-.15
		],
		gap: function(e) {
			return s(e) * .525;
		}
	}), c("circle", {
		radius: .15,
		collide: function(e, t, n, r, a, o, s) {
			var c = a;
			return (c.x - e) ** 2 + (c.y - t) ** 2 <= ((n + 2 * s) * this.radius) ** 2;
		},
		draw: function(e, n, r, a, o) {
			t.arrowShapeImpl(this.name)(e, a.x, a.y, this.radius * n);
		},
		spacing: function(e) {
			return t.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.radius;
		}
	}), c("tee", {
		points: [
			-.15,
			0,
			-.15,
			-.1,
			.15,
			-.1,
			.15,
			0
		],
		spacing: function(e) {
			return 1;
		},
		gap: function(e) {
			return 1;
		}
	}), c("square", { points: [
		-.15,
		0,
		.15,
		0,
		.15,
		-.3,
		-.15,
		-.3
	] }), c("diamond", {
		points: [
			-.15,
			-.15,
			0,
			-.3,
			.15,
			-.15,
			0,
			0
		],
		gap: function(e) {
			return e.pstyle("width").pfValue * e.pstyle("arrow-scale").value;
		}
	}), c("chevron", {
		points: [
			0,
			0,
			-.15,
			-.15,
			-.1,
			-.2,
			0,
			-.1,
			.1,
			-.2,
			.15,
			-.15
		],
		gap: function(e) {
			return .95 * e.pstyle("width").pfValue * e.pstyle("arrow-scale").value;
		}
	});
};
var BRp$e = {};
BRp$e.projectIntoViewport = function(e, t) {
	var n = this.cy, r = this.findContainerClientCoords(), a = r[0], o = r[1], s = r[4], c = n.pan(), l = n.zoom();
	return [((e - a) / s - c.x) / l, ((t - o) / s - c.y) / l];
}, BRp$e.findContainerClientCoords = function() {
	if (this.containerBB) return this.containerBB;
	var e = this.container, t = e.getBoundingClientRect(), n = this.cy.window().getComputedStyle(e), r = function(e) {
		return parseFloat(n.getPropertyValue(e));
	}, a = {
		left: r("padding-left"),
		right: r("padding-right"),
		top: r("padding-top"),
		bottom: r("padding-bottom")
	}, o = {
		left: r("border-left-width"),
		right: r("border-right-width"),
		top: r("border-top-width"),
		bottom: r("border-bottom-width")
	}, s = e.clientWidth, c = e.clientHeight, l = a.left + a.right, u = a.top + a.bottom, d = o.left + o.right, f = t.width / (s + d), m = s - l, h = c - u;
	return this.containerBB = [
		t.left + a.left + o.left,
		t.top + a.top + o.top,
		m,
		h,
		f
	];
}, BRp$e.invalidateContainerClientCoordsCache = function() {
	this.containerBB = null;
}, BRp$e.findNearestElement = function(e, t, n, r) {
	return this.findNearestElements(e, t, n, r)[0];
}, BRp$e.findNearestElements = function(e, t, n, r) {
	var a = this, o = this, s = o.getCachedZSortedEles(), c = [], l = o.cy.zoom(), u = o.cy.hasCompoundNodes(), d = (r ? 24 : 8) / l, f = (r ? 8 : 2) / l, m = (r ? 8 : 2) / l, h = Infinity, g, _;
	n && (s = s.interactive);
	function v(e, t) {
		if (e.isNode()) {
			if (_) return;
			_ = e, c.push(e);
		}
		if (e.isEdge() && (t == null || t < h)) if (g) {
			if (g.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value && g.pstyle("z-compound-depth").value === e.pstyle("z-compound-depth").value) {
				for (var n = 0; n < c.length; n++) if (c[n].isEdge()) {
					c[n] = e, g = e, h = t ?? h;
					break;
				}
			}
		} else c.push(e), g = e, h = t ?? h;
	}
	function b(n) {
		var r = n.outerWidth() + 2 * f, s = n.outerHeight() + 2 * f, c = r / 2, l = s / 2, u = n.position(), d = n.pstyle("corner-radius").value === "auto" ? "auto" : n.pstyle("corner-radius").pfValue, m = n._private.rscratch;
		if (u.x - c <= e && e <= u.x + c && u.y - l <= t && t <= u.y + l && o.nodeShapes[a.getNodeShape(n)].checkPoint(e, t, 0, r, s, u.x, u.y, d, m)) return v(n, 0), !0;
	}
	function S(n) {
		var r = n._private, s = r.rscratch, l = n.pstyle("width").pfValue, f = n.pstyle("arrow-scale").value, m = l / 2 + d, h = m * m, g = m * 2, _ = r.source, S = r.target, C;
		if (s.edgeType === "segments" || s.edgeType === "straight" || s.edgeType === "haystack") {
			for (var w = s.allpts, T = 0; T + 3 < w.length; T += 2) if (inLineVicinity(e, t, w[T], w[T + 1], w[T + 2], w[T + 3], g) && h > (C = sqdistToFiniteLine(e, t, w[T], w[T + 1], w[T + 2], w[T + 3]))) return v(n, C), !0;
		} else if (s.edgeType === "bezier" || s.edgeType === "multibezier" || s.edgeType === "self" || s.edgeType === "compound") {
			for (var w = s.allpts, T = 0; T + 5 < s.allpts.length; T += 4) if (inBezierVicinity(e, t, w[T], w[T + 1], w[T + 2], w[T + 3], w[T + 4], w[T + 5], g) && h > (C = sqdistToQuadraticBezier(e, t, w[T], w[T + 1], w[T + 2], w[T + 3], w[T + 4], w[T + 5]))) return v(n, C), !0;
		}
		for (var _ = _ || r.source, S = S || r.target, E = a.getArrowWidth(l, f), D = [
			{
				name: "source",
				x: s.arrowStartX,
				y: s.arrowStartY,
				angle: s.srcArrowAngle
			},
			{
				name: "target",
				x: s.arrowEndX,
				y: s.arrowEndY,
				angle: s.tgtArrowAngle
			},
			{
				name: "mid-source",
				x: s.midX,
				y: s.midY,
				angle: s.midsrcArrowAngle
			},
			{
				name: "mid-target",
				x: s.midX,
				y: s.midY,
				angle: s.midtgtArrowAngle
			}
		], T = 0; T < D.length; T++) {
			var O = D[T], k = o.arrowShapes[n.pstyle(O.name + "-arrow-shape").value], A = n.pstyle("width").pfValue;
			if (k.roughCollide(e, t, E, O.angle, {
				x: O.x,
				y: O.y
			}, A, d) && k.collide(e, t, E, O.angle, {
				x: O.x,
				y: O.y
			}, A, d)) return v(n), !0;
		}
		u && c.length > 0 && (b(_), b(S));
	}
	function C(e, t, n) {
		return getPrefixedProperty(e, t, n);
	}
	function w(n, r) {
		var a = n._private, o = m, s = r ? r + "-" : "";
		n.boundingBox();
		var c = a.labelBounds[r || "main"], l = n.pstyle(s + "label").value;
		if (!(n.pstyle("text-events").strValue !== "yes" || !l)) {
			var u = C(a.rscratch, "labelX", r), d = C(a.rscratch, "labelY", r), f = C(a.rscratch, "labelAngle", r), h = n.pstyle(s + "text-margin-x").pfValue, g = n.pstyle(s + "text-margin-y").pfValue, _ = c.x1 - o - h, b = c.x2 + o - h, S = c.y1 - o - g, w = c.y2 + o - g;
			if (f) {
				var T = Math.cos(f), E = Math.sin(f), D = function(e, t) {
					return e -= u, t -= d, {
						x: e * T - t * E + u,
						y: e * E + t * T + d
					};
				}, O = D(_, S), k = D(_, w), A = D(b, S), j = D(b, w);
				if (pointInsidePolygonPoints(e, t, [
					O.x + h,
					O.y + g,
					A.x + h,
					A.y + g,
					j.x + h,
					j.y + g,
					k.x + h,
					k.y + g
				])) return v(n), !0;
			} else if (inBoundingBox(c, e, t)) return v(n), !0;
		}
	}
	for (var T = s.length - 1; T >= 0; T--) {
		var E = s[T];
		E.isNode() ? b(E) || w(E) : S(E) || w(E) || w(E, "source") || w(E, "target");
	}
	return c;
}, BRp$e.getAllInBox = function(e, t, n, r) {
	var a = this.getCachedZSortedEles().interactive, o = 2 / this.cy.zoom(), s = [], c = Math.min(e, n), l = Math.max(e, n), u = Math.min(t, r), d = Math.max(t, r);
	e = c, n = l, t = u, r = d;
	var f = makeBoundingBox({
		x1: e,
		y1: t,
		x2: n,
		y2: r
	}), m = [
		{
			x: f.x1,
			y: f.y1
		},
		{
			x: f.x2,
			y: f.y1
		},
		{
			x: f.x2,
			y: f.y2
		},
		{
			x: f.x1,
			y: f.y2
		}
	], h = [
		[m[0], m[1]],
		[m[1], m[2]],
		[m[2], m[3]],
		[m[3], m[0]]
	];
	function _(e, t, n) {
		return getPrefixedProperty(e, t, n);
	}
	function v(e, t) {
		var n = e._private, r = o, a = "";
		e.boundingBox();
		var s = n.labelBounds.main;
		if (!s) return null;
		var c = _(n.rscratch, "labelX", t), l = _(n.rscratch, "labelY", t), u = _(n.rscratch, "labelAngle", t), d = e.pstyle(a + "text-margin-x").pfValue, f = e.pstyle(a + "text-margin-y").pfValue, m = s.x1 - r - d, h = s.x2 + r - d, g = s.y1 - r - f, v = s.y2 + r - f;
		if (u) {
			var b = Math.cos(u), S = Math.sin(u), C = function(e, t) {
				return e -= c, t -= l, {
					x: e * b - t * S + c,
					y: e * S + t * b + l
				};
			};
			return [
				C(m, g),
				C(h, g),
				C(h, v),
				C(m, v)
			];
		} else return [
			{
				x: m,
				y: g
			},
			{
				x: h,
				y: g
			},
			{
				x: h,
				y: v
			},
			{
				x: m,
				y: v
			}
		];
	}
	function b(e, t, n, r) {
		function a(e, t, n) {
			return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
		}
		return a(e, n, r) !== a(t, n, r) && a(e, t, n) !== a(e, t, r);
	}
	for (var S = 0; S < a.length; S++) {
		var C = a[S];
		if (C.isNode()) {
			var w = C, T = w.pstyle("text-events").strValue === "yes", E = w.pstyle("box-selection").strValue, D = w.pstyle("box-select-labels").strValue === "yes";
			if (E === "none") continue;
			var O = (E === "overlap" || D) && T, k = w.boundingBox({
				includeNodes: !0,
				includeEdges: !1,
				includeLabels: O
			});
			if (E === "contain") {
				var A = !1;
				if (D && T) {
					var j = v(w);
					j && satPolygonIntersection(j, m) && (s.push(w), A = !0);
				}
				!A && boundingBoxInBoundingBox(f, k) && s.push(w);
			} else if (E === "overlap" && boundingBoxesIntersect(f, k)) {
				var M = w.boundingBox({
					includeNodes: !0,
					includeEdges: !0,
					includeLabels: !1,
					includeMainLabels: !1,
					includeSourceLabels: !1,
					includeTargetLabels: !1
				});
				if (satPolygonIntersection([
					{
						x: M.x1,
						y: M.y1
					},
					{
						x: M.x2,
						y: M.y1
					},
					{
						x: M.x2,
						y: M.y2
					},
					{
						x: M.x1,
						y: M.y2
					}
				], m)) s.push(w);
				else {
					var N = v(w);
					N && satPolygonIntersection(N, m) && s.push(w);
				}
			}
		} else {
			var P = C, F = P._private, I = F.rscratch, L = P.pstyle("box-selection").strValue;
			if (L === "none") continue;
			if (L === "contain") {
				if (I.startX != null && I.startY != null && !inBoundingBox(f, I.startX, I.startY) || I.endX != null && I.endY != null && !inBoundingBox(f, I.endX, I.endY)) continue;
				if (I.edgeType === "bezier" || I.edgeType === "multibezier" || I.edgeType === "self" || I.edgeType === "compound" || I.edgeType === "segments" || I.edgeType === "haystack") {
					for (var R = F.rstyle.bezierPts || F.rstyle.linePts || F.rstyle.haystackPts, z = !0, B = 0; B < R.length; B++) if (!pointInBoundingBox(f, R[B])) {
						z = !1;
						break;
					}
					z && s.push(P);
				} else I.edgeType === "straight" && s.push(P);
			} else if (L === "overlap") {
				var V = !1;
				if (I.startX != null && I.startY != null && I.endX != null && I.endY != null && (inBoundingBox(f, I.startX, I.startY) || inBoundingBox(f, I.endX, I.endY))) s.push(P), V = !0;
				else if (!V && I.edgeType === "haystack") {
					for (var H = F.rstyle.haystackPts, U = 0; U < H.length; U++) if (pointInBoundingBox(f, H[U])) {
						s.push(P), V = !0;
						break;
					}
				}
				if (!V) {
					var W = F.rstyle.bezierPts || F.rstyle.linePts || F.rstyle.haystackPts;
					if ((!W || W.length < 2) && I.edgeType === "straight" && I.startX != null && I.startY != null && I.endX != null && I.endY != null && (W = [{
						x: I.startX,
						y: I.startY
					}, {
						x: I.endX,
						y: I.endY
					}]), !W || W.length < 2) continue;
					for (var G = 0; G < W.length - 1; G++) {
						for (var q = W[G], J = W[G + 1], Y = 0; Y < h.length; Y++) {
							var X = _slicedToArray(h[Y], 2), Z = X[0], Q = X[1];
							if (b(q, J, Z, Q)) {
								s.push(P), V = !0;
								break;
							}
						}
						if (V) break;
					}
				}
			}
		}
	}
	return s;
};
var BRp$d = {};
BRp$d.calculateArrowAngles = function(e) {
	var t = e._private.rscratch, n = t.edgeType === "haystack", r = t.edgeType === "bezier", a = t.edgeType === "multibezier", o = t.edgeType === "segments", s = t.edgeType === "compound", c = t.edgeType === "self", l, u, d, f, m, h, g, _;
	if (n ? (d = t.haystackPts[0], f = t.haystackPts[1], m = t.haystackPts[2], h = t.haystackPts[3]) : (d = t.arrowStartX, f = t.arrowStartY, m = t.arrowEndX, h = t.arrowEndY), g = t.midX, _ = t.midY, o) l = d - t.segpts[0], u = f - t.segpts[1];
	else if (a || s || c || r) {
		var v = t.allpts, b = qbezierAt(v[0], v[2], v[4], .1), S = qbezierAt(v[1], v[3], v[5], .1);
		l = d - b, u = f - S;
	} else l = d - g, u = f - _;
	t.srcArrowAngle = getAngleFromDisp(l, u);
	var g = t.midX, _ = t.midY;
	if (n && (g = (d + m) / 2, _ = (f + h) / 2), l = m - d, u = h - f, o) {
		var v = t.allpts;
		if (v.length / 2 % 2 == 0) {
			var C = v.length / 2, w = C - 2;
			l = v[C] - v[w], u = v[C + 1] - v[w + 1];
		} else if (t.isRound) l = t.midVector[1], u = -t.midVector[0];
		else {
			var C = v.length / 2 - 1, w = C - 2;
			l = v[C] - v[w], u = v[C + 1] - v[w + 1];
		}
	} else if (a || s || c) {
		var v = t.allpts, T = t.ctrlpts, E, D, O, k;
		if (T.length / 2 % 2 == 0) {
			var A = v.length / 2 - 1, j = A + 2, M = j + 2;
			E = qbezierAt(v[A], v[j], v[M], 0), D = qbezierAt(v[A + 1], v[j + 1], v[M + 1], 0), O = qbezierAt(v[A], v[j], v[M], 1e-4), k = qbezierAt(v[A + 1], v[j + 1], v[M + 1], 1e-4);
		} else {
			var j = v.length / 2 - 1, A = j - 2, M = j + 2;
			E = qbezierAt(v[A], v[j], v[M], .4999), D = qbezierAt(v[A + 1], v[j + 1], v[M + 1], .4999), O = qbezierAt(v[A], v[j], v[M], .5), k = qbezierAt(v[A + 1], v[j + 1], v[M + 1], .5);
		}
		l = O - E, u = k - D;
	}
	if (t.midtgtArrowAngle = getAngleFromDisp(l, u), t.midDispX = l, t.midDispY = u, l *= -1, u *= -1, o) {
		var v = t.allpts;
		if (v.length / 2 % 2 != 0 && !t.isRound) {
			var C = v.length / 2 - 1, N = C + 2;
			l = -(v[N] - v[C]), u = -(v[N + 1] - v[C + 1]);
		}
	}
	if (t.midsrcArrowAngle = getAngleFromDisp(l, u), o) l = m - t.segpts[t.segpts.length - 2], u = h - t.segpts[t.segpts.length - 1];
	else if (a || s || c || r) {
		var v = t.allpts, P = v.length, b = qbezierAt(v[P - 6], v[P - 4], v[P - 2], .9), S = qbezierAt(v[P - 5], v[P - 3], v[P - 1], .9);
		l = m - b, u = h - S;
	} else l = m - g, u = h - _;
	t.tgtArrowAngle = getAngleFromDisp(l, u);
}, BRp$d.getArrowWidth = BRp$d.getArrowHeight = function(e, t) {
	var n = this.arrowWidthCache = this.arrowWidthCache || {}, r = n[e + ", " + t];
	return r || (r = Math.max((e * 13.37) ** .9, 29) * t, n[e + ", " + t] = r, r);
};
var x, y, v1 = {}, v2 = {}, sinA, sinA90, radDirection, drawDirection, angle, halfAngle, cRadius, lenOut, radius, limit, startX, startY, stopX, stopY, lastPoint, asVec = function(e, t, n) {
	n.x = t.x - e.x, n.y = t.y - e.y, n.len = Math.sqrt(n.x * n.x + n.y * n.y), n.nx = n.x / n.len, n.ny = n.y / n.len, n.ang = Math.atan2(n.ny, n.nx);
}, invertVec = function(e, t) {
	t.x = e.x * -1, t.y = e.y * -1, t.nx = e.nx * -1, t.ny = e.ny * -1, t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, calcCornerArc = function(e, t, n, r, a) {
	if (e === lastPoint ? invertVec(v2, v1) : asVec(t, e, v1), asVec(t, n, v2), sinA = v1.nx * v2.ny - v1.ny * v2.nx, sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny, angle = Math.asin(Math.max(-1, Math.min(1, sinA))), Math.abs(angle) < 1e-6) {
		x = t.x, y = t.y, cRadius = radius = 0;
		return;
	}
	radDirection = 1, drawDirection = !1, sinA90 < 0 ? angle < 0 ? angle = Math.PI + angle : (angle = Math.PI - angle, radDirection = -1, drawDirection = !0) : angle > 0 && (radDirection = -1, drawDirection = !0), radius = t.radius === void 0 ? r : t.radius, halfAngle = angle / 2, limit = Math.min(v1.len / 2, v2.len / 2), a ? (lenOut = Math.abs(Math.cos(halfAngle) * radius / Math.sin(halfAngle)), lenOut > limit ? (lenOut = limit, cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle))) : cRadius = radius) : (lenOut = Math.min(limit, radius), cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle))), stopX = t.x + v2.nx * lenOut, stopY = t.y + v2.ny * lenOut, x = stopX - v2.ny * cRadius * radDirection, y = stopY + v2.nx * cRadius * radDirection, startX = t.x + v1.nx * lenOut, startY = t.y + v1.ny * lenOut, lastPoint = t;
};
function drawPreparedRoundCorner(e, t) {
	t.radius === 0 ? e.lineTo(t.cx, t.cy) : e.arc(t.cx, t.cy, t.radius, t.startAngle, t.endAngle, t.counterClockwise);
}
function getRoundCorner(e, t, n, r) {
	var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
	return r === 0 || t.radius === 0 ? {
		cx: t.x,
		cy: t.y,
		radius: 0,
		startX: t.x,
		startY: t.y,
		stopX: t.x,
		stopY: t.y,
		startAngle: void 0,
		endAngle: void 0,
		counterClockwise: void 0
	} : (calcCornerArc(e, t, n, r, a), {
		cx: x,
		cy: y,
		radius: cRadius,
		startX,
		startY,
		stopX,
		stopY,
		startAngle: v1.ang + Math.PI / 2 * radDirection,
		endAngle: v2.ang - Math.PI / 2 * radDirection,
		counterClockwise: drawDirection
	});
}
var AVOID_IMPOSSIBLE_BEZIER_CONSTANT = .01, AVOID_IMPOSSIBLE_BEZIER_CONSTANT_L = Math.sqrt(2 * AVOID_IMPOSSIBLE_BEZIER_CONSTANT), BRp$c = {};
BRp$c.findMidptPtsEtc = function(e, t) {
	var n = t.posPts, r = t.intersectionPts, a = t.vectorNormInverse, o, s = e.pstyle("source-endpoint"), c = e.pstyle("target-endpoint"), l = s.units != null && c.units != null, u = function(e, t, n, r) {
		var a = r - t, o = n - e, s = Math.sqrt(o * o + a * a);
		return {
			x: -a / s,
			y: o / s
		};
	};
	switch (e.pstyle("edge-distances").value) {
		case "node-position":
			o = n;
			break;
		case "intersection":
			o = r;
			break;
		case "endpoints":
			if (l) {
				var d = _slicedToArray(this.manualEndptToPx(e.source()[0], s), 2), f = d[0], m = d[1], h = _slicedToArray(this.manualEndptToPx(e.target()[0], c), 2), _ = h[0], v = h[1], b = {
					x1: f,
					y1: m,
					x2: _,
					y2: v
				};
				a = u(f, m, _, v), o = b;
			} else warn(`Edge ${e.id()} has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).`), o = r;
			break;
	}
	return {
		midptPts: o,
		vectorNormInverse: a
	};
}, BRp$c.findHaystackPoints = function(e) {
	for (var t = 0; t < e.length; t++) {
		var n = e[t], r = n._private, a = r.rscratch;
		if (!a.haystack) {
			var o = Math.random() * 2 * Math.PI;
			a.source = {
				x: Math.cos(o),
				y: Math.sin(o)
			}, o = Math.random() * 2 * Math.PI, a.target = {
				x: Math.cos(o),
				y: Math.sin(o)
			};
		}
		var s = r.source, c = r.target, l = s.position(), u = c.position(), d = s.width(), f = c.width(), m = s.height(), h = c.height(), g = n.pstyle("haystack-radius").value / 2;
		a.haystackPts = a.allpts = [
			a.source.x * d * g + l.x,
			a.source.y * m * g + l.y,
			a.target.x * f * g + u.x,
			a.target.y * h * g + u.y
		], a.midX = (a.allpts[0] + a.allpts[2]) / 2, a.midY = (a.allpts[1] + a.allpts[3]) / 2, a.edgeType = "haystack", a.haystack = !0, this.storeEdgeProjections(n), this.calculateArrowAngles(n), this.recalculateEdgeLabelProjections(n), this.calculateLabelAngles(n);
	}
}, BRp$c.findSegmentsPoints = function(e, t) {
	var n = e._private.rscratch, r = e.pstyle("segment-weights"), a = e.pstyle("segment-distances"), o = e.pstyle("segment-radii"), s = e.pstyle("radius-type"), c = Math.min(r.pfValue.length, a.pfValue.length), l = o.pfValue[o.pfValue.length - 1], u = s.pfValue[s.pfValue.length - 1];
	n.edgeType = "segments", n.segpts = [], n.radii = [], n.isArcRadius = [];
	for (var d = 0; d < c; d++) {
		var f = r.pfValue[d], m = a.pfValue[d], h = 1 - f, g = f, _ = this.findMidptPtsEtc(e, t), v = _.midptPts, b = _.vectorNormInverse, S = {
			x: v.x1 * h + v.x2 * g,
			y: v.y1 * h + v.y2 * g
		};
		n.segpts.push(S.x + b.x * m, S.y + b.y * m), n.radii.push(o.pfValue[d] === void 0 ? l : o.pfValue[d]), n.isArcRadius.push((s.pfValue[d] === void 0 ? u : s.pfValue[d]) === "arc-radius");
	}
}, BRp$c.findLoopPoints = function(e, t, n, r) {
	var a = e._private.rscratch, o = t.dirCounts, s = t.srcPos, c = e.pstyle("control-point-distances"), l = c ? c.pfValue[0] : void 0, u = e.pstyle("loop-direction").pfValue, d = e.pstyle("loop-sweep").pfValue, f = e.pstyle("control-point-step-size").pfValue;
	a.edgeType = "self";
	var m = n, h = f;
	r && (m = 0, h = l);
	var g = u - Math.PI / 2, _ = g - d / 2, v = g + d / 2, b = String(u + "_" + d);
	m = o[b] === void 0 ? o[b] = 0 : ++o[b], a.ctrlpts = [
		s.x + Math.cos(_) * 1.4 * h * (m / 3 + 1),
		s.y + Math.sin(_) * 1.4 * h * (m / 3 + 1),
		s.x + Math.cos(v) * 1.4 * h * (m / 3 + 1),
		s.y + Math.sin(v) * 1.4 * h * (m / 3 + 1)
	];
}, BRp$c.findCompoundLoopPoints = function(e, t, n, r) {
	var a = e._private.rscratch;
	a.edgeType = "compound";
	var o = t.srcPos, s = t.tgtPos, c = t.srcW, l = t.srcH, u = t.tgtW, d = t.tgtH, f = e.pstyle("control-point-step-size").pfValue, m = e.pstyle("control-point-distances"), h = m ? m.pfValue[0] : void 0, g = n, _ = f;
	r && (g = 0, _ = h);
	var v = 50, b = {
		x: o.x - c / 2,
		y: o.y - l / 2
	}, S = {
		x: s.x - u / 2,
		y: s.y - d / 2
	}, C = {
		x: Math.min(b.x, S.x),
		y: Math.min(b.y, S.y)
	}, w = .5, T = Math.max(w, Math.log(c * AVOID_IMPOSSIBLE_BEZIER_CONSTANT)), E = Math.max(w, Math.log(u * AVOID_IMPOSSIBLE_BEZIER_CONSTANT));
	a.ctrlpts = [
		C.x,
		C.y - (1 + v ** 1.12 / 100) * _ * (g / 3 + 1) * T,
		C.x - (1 + v ** 1.12 / 100) * _ * (g / 3 + 1) * E,
		C.y
	];
}, BRp$c.findStraightEdgePoints = function(e) {
	e._private.rscratch.edgeType = "straight";
}, BRp$c.findBezierPoints = function(e, t, n, r, a) {
	var o = e._private.rscratch, s = e.pstyle("control-point-step-size").pfValue, c = e.pstyle("control-point-distances"), l = e.pstyle("control-point-weights"), u = c && l ? Math.min(c.value.length, l.value.length) : 1, d = c ? c.pfValue[0] : void 0, f = l.value[0], m = r;
	o.edgeType = m ? "multibezier" : "bezier", o.ctrlpts = [];
	for (var h = 0; h < u; h++) {
		var g = (.5 - t.eles.length / 2 + n) * s * (a ? -1 : 1), _ = void 0, v = signum(g);
		m && (d = c ? c.pfValue[h] : s, f = l.value[h]), _ = r ? d : d === void 0 ? void 0 : v * d;
		var b = _ === void 0 ? g : _, S = 1 - f, C = f, w = this.findMidptPtsEtc(e, t), T = w.midptPts, E = w.vectorNormInverse, D = {
			x: T.x1 * S + T.x2 * C,
			y: T.y1 * S + T.y2 * C
		};
		o.ctrlpts.push(D.x + E.x * b, D.y + E.y * b);
	}
}, BRp$c.findTaxiPoints = function(e, t) {
	var n = e._private.rscratch;
	n.edgeType = "segments";
	var r = "vertical", a = "horizontal", o = "leftward", s = "rightward", c = "downward", l = "upward", u = "auto", d = t.posPts, f = t.srcW, m = t.srcH, h = t.tgtW, g = t.tgtH, _ = e.pstyle("edge-distances").value !== "node-position", v = e.pstyle("taxi-direction").value, b = v, S = e.pstyle("taxi-turn"), C = S.units === "%", w = S.pfValue, T = w < 0, E = e.pstyle("taxi-turn-min-distance").pfValue, D = _ ? (f + h) / 2 : 0, O = _ ? (m + g) / 2 : 0, k = d.x2 - d.x1, A = d.y2 - d.y1, j = function(e, t) {
		return e > 0 ? Math.max(e - t, 0) : Math.min(e + t, 0);
	}, M = j(k, D), N = j(A, O), P = !1;
	b === u ? v = Math.abs(M) > Math.abs(N) ? a : r : b === l || b === c ? (v = r, P = !0) : (b === o || b === s) && (v = a, P = !0);
	var F = v === r, I = F ? N : M, L = F ? A : k, R = signum(L), z = !1;
	!(P && (C || T)) && (b === c && L < 0 || b === l && L > 0 || b === o && L > 0 || b === s && L < 0) && (R *= -1, I = R * Math.abs(I), z = !0);
	var B = C ? (w < 0 ? 1 + w : w) * I : (w < 0 ? I : 0) + w * R, V = function(e) {
		return Math.abs(e) < E || Math.abs(e) >= Math.abs(I);
	}, H = V(B), U = V(Math.abs(I) - Math.abs(B));
	if ((H || U) && !z) if (F) {
		var W = Math.abs(L) <= m / 2, G = Math.abs(k) <= h / 2;
		if (W) {
			var q = (d.x1 + d.x2) / 2;
			n.segpts = [
				q,
				d.y1,
				q,
				d.y2
			];
		} else if (G) {
			var J = (d.y1 + d.y2) / 2;
			n.segpts = [
				d.x1,
				J,
				d.x2,
				J
			];
		} else n.segpts = [d.x1, d.y2];
	} else {
		var Y = Math.abs(L) <= f / 2, X = Math.abs(A) <= g / 2;
		if (Y) {
			var Z = (d.y1 + d.y2) / 2;
			n.segpts = [
				d.x1,
				Z,
				d.x2,
				Z
			];
		} else if (X) {
			var Q = (d.x1 + d.x2) / 2;
			n.segpts = [
				Q,
				d.y1,
				Q,
				d.y2
			];
		} else n.segpts = [d.x2, d.y1];
	}
	else if (F) {
		var $ = d.y1 + B + (_ ? m / 2 * R : 0);
		n.segpts = [
			d.x1,
			$,
			d.x2,
			$
		];
	} else {
		var kh = d.x1 + B + (_ ? f / 2 * R : 0);
		n.segpts = [
			kh,
			d.y1,
			kh,
			d.y2
		];
	}
	if (n.isRound) {
		var Ah = e.pstyle("taxi-radius").value, jh = e.pstyle("radius-type").value[0] === "arc-radius";
		n.radii = Array(n.segpts.length / 2).fill(Ah), n.isArcRadius = Array(n.segpts.length / 2).fill(jh);
	}
}, BRp$c.tryToCorrectInvalidPoints = function(e, t) {
	var n = e._private.rscratch;
	if (n.edgeType === "bezier") {
		var r = t.srcPos, a = t.tgtPos, o = t.srcW, s = t.srcH, c = t.tgtW, l = t.tgtH, u = t.srcShape, d = t.tgtShape, f = t.srcCornerRadius, m = t.tgtCornerRadius, h = t.srcRs, g = t.tgtRs, _ = !number$1(n.startX) || !number$1(n.startY), v = !number$1(n.arrowStartX) || !number$1(n.arrowStartY), b = !number$1(n.endX) || !number$1(n.endY), S = !number$1(n.arrowEndX) || !number$1(n.arrowEndY), C = 3 * (this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth), w = dist({
			x: n.ctrlpts[0],
			y: n.ctrlpts[1]
		}, {
			x: n.startX,
			y: n.startY
		}), T = w < C, E = dist({
			x: n.ctrlpts[0],
			y: n.ctrlpts[1]
		}, {
			x: n.endX,
			y: n.endY
		}), D = E < C, O = !1;
		if (_ || v || T) {
			O = !0;
			var k = {
				x: n.ctrlpts[0] - r.x,
				y: n.ctrlpts[1] - r.y
			}, A = Math.sqrt(k.x * k.x + k.y * k.y), j = {
				x: k.x / A,
				y: k.y / A
			}, M = Math.max(o, s), N = {
				x: n.ctrlpts[0] + j.x * 2 * M,
				y: n.ctrlpts[1] + j.y * 2 * M
			}, P = u.intersectLine(r.x, r.y, o, s, N.x, N.y, 0, f, h);
			T ? (n.ctrlpts[0] = n.ctrlpts[0] + j.x * (C - w), n.ctrlpts[1] = n.ctrlpts[1] + j.y * (C - w)) : (n.ctrlpts[0] = P[0] + j.x * C, n.ctrlpts[1] = P[1] + j.y * C);
		}
		if (b || S || D) {
			O = !0;
			var F = {
				x: n.ctrlpts[0] - a.x,
				y: n.ctrlpts[1] - a.y
			}, L = Math.sqrt(F.x * F.x + F.y * F.y), R = {
				x: F.x / L,
				y: F.y / L
			}, z = Math.max(o, s), B = {
				x: n.ctrlpts[0] + R.x * 2 * z,
				y: n.ctrlpts[1] + R.y * 2 * z
			}, V = d.intersectLine(a.x, a.y, c, l, B.x, B.y, 0, m, g);
			D ? (n.ctrlpts[0] = n.ctrlpts[0] + R.x * (C - E), n.ctrlpts[1] = n.ctrlpts[1] + R.y * (C - E)) : (n.ctrlpts[0] = V[0] + R.x * C, n.ctrlpts[1] = V[1] + R.y * C);
		}
		O && this.findEndpoints(e);
	}
}, BRp$c.storeAllpts = function(e) {
	var t = e._private.rscratch;
	if (t.edgeType === "multibezier" || t.edgeType === "bezier" || t.edgeType === "self" || t.edgeType === "compound") {
		t.allpts = [], t.allpts.push(t.startX, t.startY);
		for (var n = 0; n + 1 < t.ctrlpts.length; n += 2) t.allpts.push(t.ctrlpts[n], t.ctrlpts[n + 1]), n + 3 < t.ctrlpts.length && t.allpts.push((t.ctrlpts[n] + t.ctrlpts[n + 2]) / 2, (t.ctrlpts[n + 1] + t.ctrlpts[n + 3]) / 2);
		t.allpts.push(t.endX, t.endY);
		var r, a;
		t.ctrlpts.length / 2 % 2 == 0 ? (r = t.allpts.length / 2 - 1, t.midX = t.allpts[r], t.midY = t.allpts[r + 1]) : (r = t.allpts.length / 2 - 3, a = .5, t.midX = qbezierAt(t.allpts[r], t.allpts[r + 2], t.allpts[r + 4], a), t.midY = qbezierAt(t.allpts[r + 1], t.allpts[r + 3], t.allpts[r + 5], a));
	} else if (t.edgeType === "straight") t.allpts = [
		t.startX,
		t.startY,
		t.endX,
		t.endY
	], t.midX = (t.startX + t.endX + t.arrowStartX + t.arrowEndX) / 4, t.midY = (t.startY + t.endY + t.arrowStartY + t.arrowEndY) / 4;
	else if (t.edgeType === "segments") {
		if (t.allpts = [], t.allpts.push(t.startX, t.startY), t.allpts.push.apply(t.allpts, t.segpts), t.allpts.push(t.endX, t.endY), t.isRound) {
			t.roundCorners = [];
			for (var o = 2; o + 3 < t.allpts.length; o += 2) {
				var s = t.radii[o / 2 - 1], c = t.isArcRadius[o / 2 - 1];
				t.roundCorners.push(getRoundCorner({
					x: t.allpts[o - 2],
					y: t.allpts[o - 1]
				}, {
					x: t.allpts[o],
					y: t.allpts[o + 1],
					radius: s
				}, {
					x: t.allpts[o + 2],
					y: t.allpts[o + 3]
				}, s, c));
			}
		}
		if (t.segpts.length % 4 == 0) {
			var l = t.segpts.length / 2, u = l - 2;
			t.midX = (t.segpts[u] + t.segpts[l]) / 2, t.midY = (t.segpts[u + 1] + t.segpts[l + 1]) / 2;
		} else {
			var d = t.segpts.length / 2 - 1;
			if (!t.isRound) t.midX = t.segpts[d], t.midY = t.segpts[d + 1];
			else {
				var f = {
					x: t.segpts[d],
					y: t.segpts[d + 1]
				}, m = t.roundCorners[d / 2];
				if (m.radius === 0) {
					var h = {
						x: t.segpts[d + 2],
						y: t.segpts[d + 3]
					};
					t.midX = f.x, t.midY = f.y, t.midVector = [f.y - h.y, h.x - f.x];
				} else {
					var g = [f.x - m.cx, f.y - m.cy], _ = m.radius / Math.sqrt(g[0] ** 2 + g[1] ** 2);
					g = g.map(function(e) {
						return e * _;
					}), t.midX = m.cx + g[0], t.midY = m.cy + g[1], t.midVector = g;
				}
			}
		}
	}
}, BRp$c.checkForInvalidEdgeWarning = function(e) {
	var t = e[0]._private.rscratch;
	t.nodesOverlap || number$1(t.startX) && number$1(t.startY) && number$1(t.endX) && number$1(t.endY) ? t.loggedErr = !1 : t.loggedErr || (t.loggedErr = !0, warn("Edge `" + e.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
}, BRp$c.findEdgeControlPoints = function(e) {
	var t = this;
	if (!(!e || e.length === 0)) {
		for (var n = this, r = n.cy.hasCompoundNodes(), a = new Map$1(), o = function(e, t) {
			return [].concat(_toConsumableArray(e), [t ? 1 : 0]).join("-");
		}, s = [], c = [], l = 0; l < e.length; l++) {
			var u = e[l], d = u._private, f = u.pstyle("curve-style").value;
			if (!(u.removed() || !u.takesUpSpace())) {
				if (f === "haystack") {
					c.push(u);
					continue;
				}
				var m = f === "unbundled-bezier" || endsWith(f, "segments") || f === "straight" || f === "straight-triangle" || endsWith(f, "taxi"), h = f === "unbundled-bezier" || f === "bezier", g = d.source, v = d.target, b = [g.poolIndex(), v.poolIndex()].sort(), S = o(b, m), C = a.get(S);
				C ?? (C = { eles: [] }, s.push({
					pairId: b,
					edgeIsUnbundled: m
				}), a.set(S, C)), C.eles.push(u), m && (C.hasUnbundled = !0), h && (C.hasBezier = !0);
			}
		}
		for (var w = function() {
			var e = s[T], c = e.pairId, l = e.edgeIsUnbundled, u = o(c, l), d = a.get(u), f;
			if (!d.hasUnbundled) {
				var m = d.eles[0].parallelEdges().filter(function(e) {
					return e.isBundledBezier();
				});
				clearArray(d.eles), m.forEach(function(e) {
					return d.eles.push(e);
				}), d.eles.sort(function(e, t) {
					return e.poolIndex() - t.poolIndex();
				});
			}
			var h = d.eles[0], g = h.source(), _ = h.target();
			if (g.poolIndex() > _.poolIndex()) {
				var v = g;
				g = _, _ = v;
			}
			var b = d.srcPos = g.position(), S = d.tgtPos = _.position(), C = d.srcW = g.outerWidth(), w = d.srcH = g.outerHeight(), E = d.tgtW = _.outerWidth(), D = d.tgtH = _.outerHeight(), O = d.srcShape = n.nodeShapes[t.getNodeShape(g)], k = d.tgtShape = n.nodeShapes[t.getNodeShape(_)], A = d.srcCornerRadius = g.pstyle("corner-radius").value === "auto" ? "auto" : g.pstyle("corner-radius").pfValue, j = d.tgtCornerRadius = _.pstyle("corner-radius").value === "auto" ? "auto" : _.pstyle("corner-radius").pfValue, M = d.tgtRs = _._private.rscratch, N = d.srcRs = g._private.rscratch;
			d.dirCounts = {
				north: 0,
				west: 0,
				south: 0,
				east: 0,
				northwest: 0,
				southwest: 0,
				northeast: 0,
				southeast: 0
			};
			for (var P = 0; P < d.eles.length; P++) {
				var F = d.eles[P], L = F[0]._private.rscratch, R = F.pstyle("curve-style").value, z = R === "unbundled-bezier" || endsWith(R, "segments") || endsWith(R, "taxi"), B = !g.same(F.source());
				if (!d.calculatedIntersection && g !== _ && (d.hasBezier || d.hasUnbundled)) {
					d.calculatedIntersection = !0;
					var V = O.intersectLine(b.x, b.y, C, w, S.x, S.y, 0, A, N), H = d.srcIntn = V, U = k.intersectLine(S.x, S.y, E, D, b.x, b.y, 0, j, M), W = d.tgtIntn = U, G = d.intersectionPts = {
						x1: V[0],
						x2: U[0],
						y1: V[1],
						y2: U[1]
					}, q = d.posPts = {
						x1: b.x,
						x2: S.x,
						y1: b.y,
						y2: S.y
					}, J = U[1] - V[1], Y = U[0] - V[0], X = Math.sqrt(Y * Y + J * J);
					number$1(X) && X >= AVOID_IMPOSSIBLE_BEZIER_CONSTANT_L || (X = Math.sqrt(Math.max(Y * Y, AVOID_IMPOSSIBLE_BEZIER_CONSTANT) + Math.max(J * J, AVOID_IMPOSSIBLE_BEZIER_CONSTANT)));
					var Z = d.vector = {
						x: Y,
						y: J
					}, Q = d.vectorNorm = {
						x: Z.x / X,
						y: Z.y / X
					}, $ = {
						x: -Q.y,
						y: Q.x
					};
					d.nodesOverlap = !number$1(X) || k.checkPoint(V[0], V[1], 0, E, D, S.x, S.y, j, M) || O.checkPoint(U[0], U[1], 0, C, w, b.x, b.y, A, N), d.vectorNormInverse = $, f = {
						nodesOverlap: d.nodesOverlap,
						dirCounts: d.dirCounts,
						calculatedIntersection: !0,
						hasBezier: d.hasBezier,
						hasUnbundled: d.hasUnbundled,
						eles: d.eles,
						srcPos: S,
						srcRs: M,
						tgtPos: b,
						tgtRs: N,
						srcW: E,
						srcH: D,
						tgtW: C,
						tgtH: w,
						srcIntn: W,
						tgtIntn: H,
						srcShape: k,
						tgtShape: O,
						posPts: {
							x1: q.x2,
							y1: q.y2,
							x2: q.x1,
							y2: q.y1
						},
						intersectionPts: {
							x1: G.x2,
							y1: G.y2,
							x2: G.x1,
							y2: G.y1
						},
						vector: {
							x: -Z.x,
							y: -Z.y
						},
						vectorNorm: {
							x: -Q.x,
							y: -Q.y
						},
						vectorNormInverse: {
							x: -$.x,
							y: -$.y
						}
					};
				}
				var kh = B ? f : d;
				L.nodesOverlap = kh.nodesOverlap, L.srcIntn = kh.srcIntn, L.tgtIntn = kh.tgtIntn, L.isRound = R.startsWith("round"), r && (g.isParent() || g.isChild() || _.isParent() || _.isChild()) && (g.parents().anySame(_) || _.parents().anySame(g) || g.same(_) && g.isParent()) ? t.findCompoundLoopPoints(F, kh, P, z) : g === _ ? t.findLoopPoints(F, kh, P, z) : R.endsWith("segments") ? t.findSegmentsPoints(F, kh) : R.endsWith("taxi") ? t.findTaxiPoints(F, kh) : R === "straight" || !z && d.eles.length % 2 == 1 && P === Math.floor(d.eles.length / 2) ? t.findStraightEdgePoints(F) : t.findBezierPoints(F, kh, P, z, B), t.findEndpoints(F), t.tryToCorrectInvalidPoints(F, kh), t.checkForInvalidEdgeWarning(F), t.storeAllpts(F), t.storeEdgeProjections(F), t.calculateArrowAngles(F), t.recalculateEdgeLabelProjections(F), t.calculateLabelAngles(F);
			}
		}, T = 0; T < s.length; T++) w();
		this.findHaystackPoints(c);
	}
};
function getPts(e) {
	var t = [];
	if (e != null) {
		for (var n = 0; n < e.length; n += 2) {
			var r = e[n], a = e[n + 1];
			t.push({
				x: r,
				y: a
			});
		}
		return t;
	}
}
BRp$c.getSegmentPoints = function(e) {
	var t = e[0]._private.rscratch;
	if (this.recalculateRenderedStyle(e), t.edgeType === "segments") return getPts(t.segpts);
}, BRp$c.getControlPoints = function(e) {
	var t = e[0]._private.rscratch;
	this.recalculateRenderedStyle(e);
	var n = t.edgeType;
	if (n === "bezier" || n === "multibezier" || n === "self" || n === "compound") return getPts(t.ctrlpts);
}, BRp$c.getEdgeMidpoint = function(e) {
	var t = e[0]._private.rscratch;
	return this.recalculateRenderedStyle(e), {
		x: t.midX,
		y: t.midY
	};
};
var BRp$b = {};
BRp$b.manualEndptToPx = function(e, t) {
	var n = this, r = e.position(), a = e.outerWidth(), o = e.outerHeight(), s = e._private.rscratch;
	if (t.value.length === 2) {
		var c = [t.pfValue[0], t.pfValue[1]];
		return t.units[0] === "%" && (c[0] *= a), t.units[1] === "%" && (c[1] *= o), c[0] += r.x, c[1] += r.y, c;
	} else {
		var l = t.pfValue[0];
		l = -Math.PI / 2 + l;
		var u = 2 * Math.max(a, o), d = [r.x + Math.cos(l) * u, r.y + Math.sin(l) * u];
		return n.nodeShapes[this.getNodeShape(e)].intersectLine(r.x, r.y, a, o, d[0], d[1], 0, e.pstyle("corner-radius").value === "auto" ? "auto" : e.pstyle("corner-radius").pfValue, s);
	}
}, BRp$b.findEndpoints = function(e) {
	var t, n, r = this, a, o = e.source()[0], s = e.target()[0], c = o.position(), l = s.position(), u = e.pstyle("target-arrow-shape").value, d = e.pstyle("source-arrow-shape").value, f = e.pstyle("target-distance-from-node").pfValue, m = e.pstyle("source-distance-from-node").pfValue, h = o._private.rscratch, g = s._private.rscratch, _ = e.pstyle("curve-style").value, v = e._private.rscratch, b = v.edgeType, S = endsWith(_, "taxi"), C = b === "self" || b === "compound", w = b === "bezier" || b === "multibezier" || C, T = b !== "bezier", E = b === "straight" || b === "segments", D = b === "segments", O = w || T || E, k = C || S, A = e.pstyle("source-endpoint"), j = k ? "outside-to-node" : A.value, M = o.pstyle("corner-radius").value === "auto" ? "auto" : o.pstyle("corner-radius").pfValue, N = e.pstyle("target-endpoint"), P = k ? "outside-to-node" : N.value, F = s.pstyle("corner-radius").value === "auto" ? "auto" : s.pstyle("corner-radius").pfValue;
	v.srcManEndpt = A, v.tgtManEndpt = N;
	var L, R, z, B, V = ((N == null || (t = N.pfValue) == null ? void 0 : t.length) === 2 ? N.pfValue : null) ?? [0, 0], H = ((A == null || (n = A.pfValue) == null ? void 0 : n.length) === 2 ? A.pfValue : null) ?? [0, 0];
	if (w) {
		var U = [v.ctrlpts[0], v.ctrlpts[1]];
		L = T ? [v.ctrlpts[v.ctrlpts.length - 2], v.ctrlpts[v.ctrlpts.length - 1]] : U, R = U;
	} else if (E) {
		var W = D ? v.segpts.slice(0, 2) : [l.x + V[0], l.y + V[1]];
		L = D ? v.segpts.slice(v.segpts.length - 2) : [c.x + H[0], c.y + H[1]], R = W;
	}
	if (P === "inside-to-node") a = [l.x, l.y];
	else if (N.units) a = this.manualEndptToPx(s, N);
	else if (P === "outside-to-line") a = v.tgtIntn;
	else if (P === "outside-to-node" || P === "outside-to-node-or-label" ? z = L : (P === "outside-to-line" || P === "outside-to-line-or-label") && (z = [c.x, c.y]), a = r.nodeShapes[this.getNodeShape(s)].intersectLine(l.x, l.y, s.outerWidth(), s.outerHeight(), z[0], z[1], 0, F, g), P === "outside-to-node-or-label" || P === "outside-to-line-or-label") {
		var G = s._private.rscratch, q = G.labelWidth, J = G.labelHeight, Y = G.labelX, X = G.labelY, Z = q / 2, Q = J / 2, $ = s.pstyle("text-valign").value;
		$ === "top" ? X -= Q : $ === "bottom" && (X += Q);
		var kh = s.pstyle("text-halign").value;
		kh === "left" ? Y -= Z : kh === "right" && (Y += Z);
		var Ah = polygonIntersectLine(z[0], z[1], [
			Y - Z,
			X - Q,
			Y + Z,
			X - Q,
			Y + Z,
			X + Q,
			Y - Z,
			X + Q
		], l.x, l.y);
		if (Ah.length > 0) {
			var Mh = c, Nh = sqdist(Mh, array2point(a)), Ph = sqdist(Mh, array2point(Ah)), Fh = Nh;
			Ph < Nh && (a = Ah, Fh = Ph), Ah.length > 2 && sqdist(Mh, {
				x: Ah[2],
				y: Ah[3]
			}) < Fh && (a = [Ah[2], Ah[3]]);
		}
	}
	var Ih = shortenIntersection(a, L, r.arrowShapes[u].spacing(e) + f), Lh = shortenIntersection(a, L, r.arrowShapes[u].gap(e) + f);
	if (v.endX = Lh[0], v.endY = Lh[1], v.arrowEndX = Ih[0], v.arrowEndY = Ih[1], j === "inside-to-node") a = [c.x, c.y];
	else if (A.units) a = this.manualEndptToPx(o, A);
	else if (j === "outside-to-line") a = v.srcIntn;
	else if (j === "outside-to-node" || j === "outside-to-node-or-label" ? B = R : (j === "outside-to-line" || j === "outside-to-line-or-label") && (B = [l.x, l.y]), a = r.nodeShapes[this.getNodeShape(o)].intersectLine(c.x, c.y, o.outerWidth(), o.outerHeight(), B[0], B[1], 0, M, h), j === "outside-to-node-or-label" || j === "outside-to-line-or-label") {
		var Rh = o._private.rscratch, zh = Rh.labelWidth, Bh = Rh.labelHeight, Vh = Rh.labelX, Hh = Rh.labelY, Uh = zh / 2, Wh = Bh / 2, Gh = o.pstyle("text-valign").value;
		Gh === "top" ? Hh -= Wh : Gh === "bottom" && (Hh += Wh);
		var Kh = o.pstyle("text-halign").value;
		Kh === "left" ? Vh -= Uh : Kh === "right" && (Vh += Uh);
		var qh = polygonIntersectLine(B[0], B[1], [
			Vh - Uh,
			Hh - Wh,
			Vh + Uh,
			Hh - Wh,
			Vh + Uh,
			Hh + Wh,
			Vh - Uh,
			Hh + Wh
		], c.x, c.y);
		if (qh.length > 0) {
			var Jh = l, Yh = sqdist(Jh, array2point(a)), Xh = sqdist(Jh, array2point(qh)), Zh = Yh;
			Xh < Yh && (a = [qh[0], qh[1]], Zh = Xh), qh.length > 2 && sqdist(Jh, {
				x: qh[2],
				y: qh[3]
			}) < Zh && (a = [qh[2], qh[3]]);
		}
	}
	var Qh = shortenIntersection(a, R, r.arrowShapes[d].spacing(e) + m), $h = shortenIntersection(a, R, r.arrowShapes[d].gap(e) + m);
	v.startX = $h[0], v.startY = $h[1], v.arrowStartX = Qh[0], v.arrowStartY = Qh[1], O && (!number$1(v.startX) || !number$1(v.startY) || !number$1(v.endX) || !number$1(v.endY) ? v.badLine = !0 : v.badLine = !1);
}, BRp$b.getSourceEndpoint = function(e) {
	var t = e[0]._private.rscratch;
	switch (this.recalculateRenderedStyle(e), t.edgeType) {
		case "haystack": return {
			x: t.haystackPts[0],
			y: t.haystackPts[1]
		};
		default: return {
			x: t.arrowStartX,
			y: t.arrowStartY
		};
	}
}, BRp$b.getTargetEndpoint = function(e) {
	var t = e[0]._private.rscratch;
	switch (this.recalculateRenderedStyle(e), t.edgeType) {
		case "haystack": return {
			x: t.haystackPts[2],
			y: t.haystackPts[3]
		};
		default: return {
			x: t.arrowEndX,
			y: t.arrowEndY
		};
	}
};
var BRp$a = {};
function pushBezierPts(e, t, n) {
	for (var r = function(e, t, n, r) {
		return qbezierAt(e, t, n, r);
	}, a = t._private.rstyle.bezierPts, o = 0; o < e.bezierProjPcts.length; o++) {
		var s = e.bezierProjPcts[o];
		a.push({
			x: r(n[0], n[2], n[4], s),
			y: r(n[1], n[3], n[5], s)
		});
	}
}
BRp$a.storeEdgeProjections = function(e) {
	var t = e._private, n = t.rscratch, r = n.edgeType;
	if (t.rstyle.bezierPts = null, t.rstyle.linePts = null, t.rstyle.haystackPts = null, r === "multibezier" || r === "bezier" || r === "self" || r === "compound") {
		t.rstyle.bezierPts = [];
		for (var a = 0; a + 5 < n.allpts.length; a += 4) pushBezierPts(this, e, n.allpts.slice(a, a + 6));
	} else if (r === "segments") for (var o = t.rstyle.linePts = [], a = 0; a + 1 < n.allpts.length; a += 2) o.push({
		x: n.allpts[a],
		y: n.allpts[a + 1]
	});
	else if (r === "haystack") {
		var s = n.haystackPts;
		t.rstyle.haystackPts = [{
			x: s[0],
			y: s[1]
		}, {
			x: s[2],
			y: s[3]
		}];
	}
	t.rstyle.arrowWidth = this.getArrowWidth(e.pstyle("width").pfValue, e.pstyle("arrow-scale").value) * this.arrowShapeWidth;
}, BRp$a.recalculateEdgeProjections = function(e) {
	this.findEdgeControlPoints(e);
};
var BRp$9 = {};
BRp$9.recalculateNodeLabelProjection = function(e) {
	var t = e.pstyle("label").strValue;
	if (!emptyString(t)) {
		var n, r, a = e._private, o = e.width(), s = e.height(), c = e.padding(), l = e.position(), u = e.pstyle("text-halign").strValue, d = e.pstyle("text-valign").strValue, f = a.rscratch, m = a.rstyle;
		switch (u) {
			case "left":
				n = l.x - o / 2 - c;
				break;
			case "right":
				n = l.x + o / 2 + c;
				break;
			default: n = l.x;
		}
		switch (d) {
			case "top":
				r = l.y - s / 2 - c;
				break;
			case "bottom":
				r = l.y + s / 2 + c;
				break;
			default: r = l.y;
		}
		f.labelX = n, f.labelY = r, m.labelX = n, m.labelY = r, this.calculateLabelAngles(e), this.applyLabelDimensions(e);
	}
};
var lineAngleFromDelta = function(e, t) {
	var n = Math.atan(t / e);
	return e === 0 && n < 0 && (n *= -1), n;
}, lineAngle = function(e, t) {
	return lineAngleFromDelta(t.x - e.x, t.y - e.y);
}, bezierAngle = function(e, t, n, r) {
	var a = bound(0, r - .001, 1), o = bound(0, r + .001, 1);
	return lineAngle(qbezierPtAt(e, t, n, a), qbezierPtAt(e, t, n, o));
};
BRp$9.recalculateEdgeLabelProjections = function(e) {
	var t, n = e._private, r = n.rscratch, a = this, o = {
		mid: e.pstyle("label").strValue,
		source: e.pstyle("source-label").strValue,
		target: e.pstyle("target-label").strValue
	};
	if (o.mid || o.source || o.target) {
		t = {
			x: r.midX,
			y: r.midY
		};
		var s = function(e, t, r) {
			setPrefixedProperty(n.rscratch, e, t, r), setPrefixedProperty(n.rstyle, e, t, r);
		};
		s("labelX", null, t.x), s("labelY", null, t.y), s("labelAutoAngle", null, lineAngleFromDelta(r.midDispX, r.midDispY));
		var c = function() {
			if (c.cache) return c.cache;
			for (var e = [], t = 0; t + 5 < r.allpts.length; t += 4) {
				var o = {
					x: r.allpts[t],
					y: r.allpts[t + 1]
				}, s = {
					x: r.allpts[t + 2],
					y: r.allpts[t + 3]
				}, l = {
					x: r.allpts[t + 4],
					y: r.allpts[t + 5]
				};
				e.push({
					p0: o,
					p1: s,
					p2: l,
					startDist: 0,
					length: 0,
					segments: []
				});
			}
			var u = n.rstyle.bezierPts, d = a.bezierProjPcts.length;
			function f(e, t, n, r, a) {
				var o = dist(t, n), s = e.segments[e.segments.length - 1], c = {
					p0: t,
					p1: n,
					t0: r,
					t1: a,
					startDist: s ? s.startDist + s.length : 0,
					length: o
				};
				e.segments.push(c), e.length += o;
			}
			for (var m = 0; m < e.length; m++) {
				var h = e[m], g = e[m - 1];
				g && (h.startDist = g.startDist + g.length), f(h, h.p0, u[m * d], 0, a.bezierProjPcts[0]);
				for (var _ = 0; _ < d - 1; _++) f(h, u[m * d + _], u[m * d + _ + 1], a.bezierProjPcts[_], a.bezierProjPcts[_ + 1]);
				f(h, u[m * d + d - 1], h.p2, a.bezierProjPcts[d - 1], 1);
			}
			return c.cache = e;
		}, l = function(n) {
			var a, l = n === "source";
			if (o[n]) {
				var u = e.pstyle(n + "-text-offset").pfValue;
				switch (r.edgeType) {
					case "self":
					case "compound":
					case "bezier":
					case "multibezier":
						for (var d = c(), f, m = 0, h = 0, g = 0; g < d.length; g++) {
							for (var _ = d[l ? g : d.length - 1 - g], v = 0; v < _.segments.length; v++) {
								var b = _.segments[l ? v : _.segments.length - 1 - v], S = g === d.length - 1 && v === _.segments.length - 1;
								if (m = h, h += b.length, h >= u || S) {
									f = {
										cp: _,
										segment: b
									};
									break;
								}
							}
							if (f) break;
						}
						var C = f.cp, w = f.segment, T = (u - m) / w.length, E = w.t1 - w.t0, D = l ? w.t0 + E * T : w.t1 - E * T;
						D = bound(0, D, 1), t = qbezierPtAt(C.p0, C.p1, C.p2, D), a = bezierAngle(C.p0, C.p1, C.p2, D);
						break;
					case "straight":
					case "segments":
					case "haystack":
						for (var O = 0, k, A, j, M, N = r.allpts.length, P = 0; P + 3 < N && (l ? (j = {
							x: r.allpts[P],
							y: r.allpts[P + 1]
						}, M = {
							x: r.allpts[P + 2],
							y: r.allpts[P + 3]
						}) : (j = {
							x: r.allpts[N - 2 - P],
							y: r.allpts[N - 1 - P]
						}, M = {
							x: r.allpts[N - 4 - P],
							y: r.allpts[N - 3 - P]
						}), k = dist(j, M), A = O, O += k, !(O >= u)); P += 2);
						var F = (u - A) / k;
						F = bound(0, F, 1), t = lineAt(j, M, F), a = lineAngle(j, M);
						break;
				}
				s("labelX", n, t.x), s("labelY", n, t.y), s("labelAutoAngle", n, a);
			}
		};
		l("source"), l("target"), this.applyLabelDimensions(e);
	}
}, BRp$9.applyLabelDimensions = function(e) {
	this.applyPrefixedLabelDimensions(e), e.isEdge() && (this.applyPrefixedLabelDimensions(e, "source"), this.applyPrefixedLabelDimensions(e, "target"));
}, BRp$9.applyPrefixedLabelDimensions = function(e, t) {
	var n = e._private, r = this.getLabelText(e, t), a = hashString(r, e._private.labelDimsKey);
	if (getPrefixedProperty(n.rscratch, "prefixedLabelDimsKey", t) !== a) {
		setPrefixedProperty(n.rscratch, "prefixedLabelDimsKey", t, a);
		var o = this.calculateLabelDimensions(e, r), s = e.pstyle("line-height").pfValue, c = e.pstyle("text-wrap").strValue, l = getPrefixedProperty(n.rscratch, "labelWrapCachedLines", t) || [], u = c === "wrap" ? Math.max(l.length, 1) : 1, d = o.height / u, f = d * s, m = o.width, h = o.height + (u - 1) * (s - 1) * d;
		setPrefixedProperty(n.rstyle, "labelWidth", t, m), setPrefixedProperty(n.rscratch, "labelWidth", t, m), setPrefixedProperty(n.rstyle, "labelHeight", t, h), setPrefixedProperty(n.rscratch, "labelHeight", t, h), setPrefixedProperty(n.rscratch, "labelLineHeight", t, f);
	}
}, BRp$9.getLabelText = function(e, t) {
	var n = e._private, r = t ? t + "-" : "", a = e.pstyle(r + "label").strValue, o = e.pstyle("text-transform").value, s = function(e, r) {
		return r ? (setPrefixedProperty(n.rscratch, e, t, r), r) : getPrefixedProperty(n.rscratch, e, t);
	};
	if (!a) return "";
	o == "none" || (o == "uppercase" ? a = a.toUpperCase() : o == "lowercase" && (a = a.toLowerCase()));
	var c = e.pstyle("text-wrap").value;
	if (c === "wrap") {
		var u = s("labelKey");
		if (u != null && s("labelWrapKey") === u) return s("labelWrapCachedText");
		for (var d = "​", f = a.split("\n"), m = e.pstyle("text-max-width").pfValue, h = e.pstyle("text-overflow-wrap").value === "anywhere", g = [], _ = /[\s\u200b]+|$/g, v = 0; v < f.length; v++) {
			var b = f[v], S = this.calculateLabelDimensions(e, b).width;
			if (h && (b = b.split("").join(d)), S > m) {
				var C = b.matchAll(_), w = "", T = 0, E = _createForOfIteratorHelper(C), D;
				try {
					for (E.s(); !(D = E.n()).done;) {
						var O = D.value, k = O[0], A = b.substring(T, O.index);
						T = O.index + k.length;
						var j = w.length === 0 ? A : w + A + k;
						this.calculateLabelDimensions(e, j).width <= m ? w += A + k : (w && g.push(w), w = A + k);
					}
				} catch (e) {
					E.e(e);
				} finally {
					E.f();
				}
				w.match(/^[\s\u200b]+$/) || g.push(w);
			} else g.push(b);
		}
		s("labelWrapCachedLines", g), a = s("labelWrapCachedText", g.join("\n")), s("labelWrapKey", u);
	} else if (c === "ellipsis") {
		var M = e.pstyle("text-max-width").pfValue, N = "", P = "…", F = !1;
		if (this.calculateLabelDimensions(e, a).width < M) return a;
		for (var I = 0; I < a.length && !(this.calculateLabelDimensions(e, N + a[I] + P).width > M); I++) N += a[I], I === a.length - 1 && (F = !0);
		return F || (N += P), N;
	}
	return a;
}, BRp$9.getLabelJustification = function(e) {
	var t = e.pstyle("text-justification").strValue, n = e.pstyle("text-halign").strValue;
	if (t === "auto") if (e.isNode()) switch (n) {
		case "left": return "right";
		case "right": return "left";
		default: return "center";
	}
	else return "center";
	else return t;
}, BRp$9.calculateLabelDimensions = function(e, t) {
	var n = this.cy.window().document, r = 0, a = e.pstyle("font-style").strValue, o = e.pstyle("font-size").pfValue, s = e.pstyle("font-family").strValue, c = e.pstyle("font-weight").strValue, l = this.labelCalcCanvas, u = this.labelCalcCanvasContext;
	if (!l) {
		l = this.labelCalcCanvas = n.createElement("canvas"), u = this.labelCalcCanvasContext = l.getContext("2d");
		var d = l.style;
		d.position = "absolute", d.left = "-9999px", d.top = "-9999px", d.zIndex = "-1", d.visibility = "hidden", d.pointerEvents = "none";
	}
	u.font = `${a} ${c} ${o}px ${s}`;
	for (var f = 0, m = 0, h = t.split("\n"), g = 0; g < h.length; g++) {
		var _ = h[g], v = u.measureText(_), b = Math.ceil(v.width), S = o;
		f = Math.max(b, f), m += S;
	}
	return f += r, m += r, {
		width: f,
		height: m
	};
}, BRp$9.calculateLabelAngle = function(e, t) {
	var n = e._private.rscratch, r = e.isEdge(), a = t ? t + "-" : "", o = e.pstyle(a + "text-rotation"), s = o.strValue;
	return s === "none" ? 0 : r && s === "autorotate" ? n.labelAutoAngle : s === "autorotate" ? 0 : o.pfValue;
}, BRp$9.calculateLabelAngles = function(e) {
	var t = this, n = e.isEdge(), r = e._private.rscratch;
	r.labelAngle = t.calculateLabelAngle(e), n && (r.sourceLabelAngle = t.calculateLabelAngle(e, "source"), r.targetLabelAngle = t.calculateLabelAngle(e, "target"));
};
var BRp$8 = {}, TOO_SMALL_CUT_RECT = 28, warnedCutRect = !1;
BRp$8.getNodeShape = function(e) {
	var t = this, n = e.pstyle("shape").value;
	if (n === "cutrectangle" && (e.width() < TOO_SMALL_CUT_RECT || e.height() < TOO_SMALL_CUT_RECT)) return warnedCutRect ||= (warn("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), !0), "rectangle";
	if (e.isParent()) return n === "rectangle" || n === "roundrectangle" || n === "round-rectangle" || n === "cutrectangle" || n === "cut-rectangle" || n === "barrel" ? n : "rectangle";
	if (n === "polygon") {
		var r = e.pstyle("shape-polygon-points").value;
		return t.nodeShapes.makePolygon(r).name;
	}
	return n;
};
var BRp$7 = {};
BRp$7.registerCalculationListeners = function() {
	var e = this.cy, t = e.collection(), n = this, r = function(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
		if (t.merge(e), n) for (var r = 0; r < e.length; r++) {
			var a = e[r]._private.rstyle;
			a.clean = !1, a.cleanConnected = !1;
		}
	};
	n.binder(e).on("bounds.* dirty.*", function(e) {
		var t = e.target;
		r(t);
	}).on("style.* background.*", function(e) {
		var t = e.target;
		r(t, !1);
	});
	var a = function(a) {
		if (a) {
			var o = n.onUpdateEleCalcsFns;
			t.cleanStyle();
			for (var s = 0; s < t.length; s++) {
				var c = t[s], l = c._private.rstyle;
				c.isNode() && !l.cleanConnected && (r(c.connectedEdges()), l.cleanConnected = !0);
			}
			if (o) for (var u = 0; u < o.length; u++) {
				var d = o[u];
				d(a, t);
			}
			n.recalculateRenderedStyle(t), t = e.collection();
		}
	};
	n.flushRenderedStyleQueue = function() {
		a(!0);
	}, n.beforeRender(a, n.beforeRenderPriorities.eleCalcs);
}, BRp$7.onUpdateEleCalcs = function(e) {
	(this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e);
}, BRp$7.recalculateRenderedStyle = function(e, t) {
	var n = function(e) {
		return e._private.rstyle.cleanConnected;
	};
	if (e.length !== 0) {
		var r = [], a = [];
		if (!this.destroyed) {
			t === void 0 && (t = !0);
			for (var o = 0; o < e.length; o++) {
				var s = e[o], c = s._private, l = c.rstyle;
				s.isEdge() && (!n(s.source()) || !n(s.target())) && (l.clean = !1), s.isEdge() && s.isBundledBezier() && s.parallelEdges().some(function(e) {
					return !e._private.rstyle.clean && e.isBundledBezier();
				}) && (l.clean = !1), !(t && l.clean || s.removed()) && s.pstyle("display").value !== "none" && (c.group === "nodes" ? a.push(s) : r.push(s), l.clean = !0);
			}
			for (var u = 0; u < a.length; u++) {
				var d = a[u], f = d._private.rstyle, m = d.position();
				this.recalculateNodeLabelProjection(d), f.nodeX = m.x, f.nodeY = m.y, f.nodeW = d.pstyle("width").pfValue, f.nodeH = d.pstyle("height").pfValue;
			}
			this.recalculateEdgeProjections(r);
			for (var h = 0; h < r.length; h++) {
				var g = r[h]._private, _ = g.rstyle, v = g.rscratch;
				_.srcX = v.arrowStartX, _.srcY = v.arrowStartY, _.tgtX = v.arrowEndX, _.tgtY = v.arrowEndY, _.midX = v.midX, _.midY = v.midY, _.labelAngle = v.labelAngle, _.sourceLabelAngle = v.sourceLabelAngle, _.targetLabelAngle = v.targetLabelAngle;
			}
		}
	}
};
var BRp$6 = {};
BRp$6.updateCachedGrabbedEles = function() {
	var e = this.cachedZSortedEles;
	if (e) {
		e.drag = [], e.nondrag = [];
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n], a = r._private.rscratch;
			r.grabbed() && !r.isParent() ? t.push(r) : a.inDragLayer ? e.drag.push(r) : e.nondrag.push(r);
		}
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			e.drag.push(r);
		}
	}
}, BRp$6.invalidateCachedZSortedEles = function() {
	this.cachedZSortedEles = null;
}, BRp$6.getCachedZSortedEles = function(e) {
	if (e || !this.cachedZSortedEles) {
		var t = this.cy.mutableElements().toArray();
		t.sort(zIndexSort), t.interactive = t.filter(function(e) {
			return e.interactive();
		}), this.cachedZSortedEles = t, this.updateCachedGrabbedEles();
	} else t = this.cachedZSortedEles;
	return t;
};
var BRp$5 = {};
[
	BRp$e,
	BRp$d,
	BRp$c,
	BRp$b,
	BRp$a,
	BRp$9,
	BRp$8,
	BRp$7,
	BRp$6
].forEach(function(e) {
	extend(BRp$5, e);
});
var BRp$4 = {};
BRp$4.getCachedImage = function(e, t, n) {
	var r = this, a = r.imageCache = r.imageCache || {}, o = a[e];
	if (o) return o.image.complete || o.image.addEventListener("load", n), o.image;
	o = a[e] = a[e] || {};
	var s = o.image = new Image();
	s.addEventListener("load", n), s.addEventListener("error", function() {
		s.error = !0;
	});
	var c = "data:";
	return e.substring(0, c.length).toLowerCase() !== c && (t = t === "null" ? null : t, s.crossOrigin = t), s.src = e, s;
};
var BRp$3 = {};
BRp$3.registerBinding = function(e, t, n, r) {
	var a = Array.prototype.slice.apply(arguments, [1]);
	if (Array.isArray(e)) {
		for (var o = [], s = 0; s < e.length; s++) {
			var c = e[s];
			if (c !== void 0) {
				var l = this.binder(c);
				o.push(l.on.apply(l, a));
			}
		}
		return o;
	}
	var l = this.binder(e);
	return l.on.apply(l, a);
}, BRp$3.binder = function(e) {
	var t = this, n = t.cy.window(), r = e === n || e === n.document || e === n.document.body || domElement(e);
	if (t.supportsPassiveEvents == null) {
		var a = !1;
		try {
			var o = Object.defineProperty({}, "passive", { get: function() {
				return a = !0, !0;
			} });
			n.addEventListener("test", null, o);
		} catch {}
		t.supportsPassiveEvents = a;
	}
	var s = function(n, a, o) {
		var s = Array.prototype.slice.call(arguments);
		return r && t.supportsPassiveEvents && (s[2] = {
			capture: o ?? !1,
			passive: !1,
			once: !1
		}), t.bindings.push({
			target: e,
			args: s
		}), (e.addEventListener || e.on).apply(e, s), this;
	};
	return {
		on: s,
		addEventListener: s,
		addListener: s,
		bind: s
	};
}, BRp$3.nodeIsDraggable = function(e) {
	return e && e.isNode() && !e.locked() && e.grabbable();
}, BRp$3.nodeIsGrabbable = function(e) {
	return this.nodeIsDraggable(e) && e.interactive();
}, BRp$3.load = function() {
	var e = this, t = e.cy.window(), n = function(e) {
		return e.selected();
	}, r = function(e) {
		var t = e.getRootNode();
		if (t && t.nodeType === 11 && t.host !== void 0) return t;
	}, a = function(t, n, r, a) {
		t ??= e.cy;
		for (var o = 0; o < n.length; o++) {
			var s = n[o];
			t.emit({
				originalEvent: r,
				type: s,
				position: a
			});
		}
	}, o = function(e) {
		return e.shiftKey || e.metaKey || e.ctrlKey;
	}, s = function(t, n) {
		var r = !0;
		if (e.cy.hasCompoundNodes() && t && t.pannable()) for (var a = 0; n && a < n.length; a++) {
			var t = n[a];
			if (t.isNode() && t.isParent() && !t.pannable()) {
				r = !1;
				break;
			}
		}
		else r = !0;
		return r;
	}, c = function(e) {
		e[0]._private.grabbed = !0;
	}, l = function(e) {
		e[0]._private.grabbed = !1;
	}, u = function(e) {
		e[0]._private.rscratch.inDragLayer = !0;
	}, d = function(e) {
		e[0]._private.rscratch.inDragLayer = !1;
	}, f = function(e) {
		e[0]._private.rscratch.isGrabTarget = !0;
	}, m = function(e) {
		e[0]._private.rscratch.isGrabTarget = !1;
	}, h = function(e, t) {
		var n = t.addToList;
		!n.has(e) && e.grabbable() && !e.locked() && (n.merge(e), c(e));
	}, g = function(e, t) {
		if (e.cy().hasCompoundNodes() && !(t.inDragLayer == null && t.addToList == null)) {
			var n = e.descendants();
			t.inDragLayer && (n.forEach(u), n.connectedEdges().forEach(u)), t.addToList && h(n, t);
		}
	}, _ = function(t, n) {
		n ||= {};
		var r = t.cy().hasCompoundNodes();
		n.inDragLayer && (t.forEach(u), t.neighborhood().stdFilter(function(e) {
			return !r || e.isEdge();
		}).forEach(u)), n.addToList && t.forEach(function(e) {
			h(e, n);
		}), g(t, n), S(t, { inDragLayer: n.inDragLayer }), e.updateCachedGrabbedEles();
	}, v = _, b = function(t) {
		t && (e.getCachedZSortedEles().forEach(function(e) {
			l(e), d(e), m(e);
		}), e.updateCachedGrabbedEles());
	}, S = function(e, t) {
		if (!(t.inDragLayer == null && t.addToList == null) && e.cy().hasCompoundNodes()) {
			var n = e.ancestors().orphans();
			if (!n.same(e)) {
				var r = n.descendants().spawnSelf().merge(n).unmerge(e).unmerge(e.descendants()), a = r.connectedEdges();
				t.inDragLayer && (a.forEach(u), r.forEach(u)), t.addToList && r.forEach(function(e) {
					h(e, t);
				});
			}
		}
	}, C = function() {
		document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
	}, w = typeof MutationObserver < "u", T = typeof ResizeObserver < "u";
	w ? (e.removeObserver = new MutationObserver(function(t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n].removedNodes;
			if (r) {
				for (var a = 0; a < r.length; a++) if (r[a] === e.container) {
					e.destroy();
					break;
				}
			}
		}
	}), e.container.parentNode && e.removeObserver.observe(e.container.parentNode, { childList: !0 })) : e.registerBinding(e.container, "DOMNodeRemoved", function(t) {
		e.destroy();
	});
	var E = debounce(function() {
		e.cy.resize();
	}, 100);
	w && (e.styleObserver = new MutationObserver(E), e.styleObserver.observe(e.container, { attributes: !0 })), e.registerBinding(t, "resize", E), T && (e.resizeObserver = new ResizeObserver(E), e.resizeObserver.observe(e.container));
	var D = function(e, t) {
		for (; e != null;) t(e), e = e.parentNode;
	}, O = function() {
		e.invalidateContainerClientCoordsCache();
	};
	D(e.container, function(t) {
		e.registerBinding(t, "transitionend", O), e.registerBinding(t, "animationend", O), e.registerBinding(t, "scroll", O);
	}), e.registerBinding(e.container, "contextmenu", function(e) {
		e.preventDefault();
	});
	var k = function() {
		return e.selection[4] !== 0;
	}, A = function(t) {
		for (var n = e.findContainerClientCoords(), r = n[0], a = n[1], o = n[2], s = n[3], c = t.touches ? t.touches : [t], l = !1, u = 0; u < c.length; u++) {
			var d = c[u];
			if (r <= d.clientX && d.clientX <= r + o && a <= d.clientY && d.clientY <= a + s) {
				l = !0;
				break;
			}
		}
		if (!l) return !1;
		for (var f = e.container, m = t.target.parentNode, h = !1; m;) {
			if (m === f) {
				h = !0;
				break;
			}
			m = m.parentNode;
		}
		return !!h;
	};
	e.registerBinding(e.container, "mousedown", function(t) {
		if (A(t) && !(e.hoverData.which === 1 && t.which !== 1)) {
			t.preventDefault(), C(), e.hoverData.capture = !0, e.hoverData.which = t.which;
			var n = e.cy, r = [t.clientX, t.clientY], o = e.projectIntoViewport(r[0], r[1]), s = e.selection, c = e.findNearestElements(o[0], o[1], !0, !1), l = c[0], u = e.dragData.possibleDragElements;
			e.hoverData.mdownPos = o, e.hoverData.mdownGPos = r;
			var d = function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: o[0],
						y: o[1]
					}
				};
			}, m = function() {
				e.hoverData.tapholdCancelled = !1, clearTimeout(e.hoverData.tapholdTimeout), e.hoverData.tapholdTimeout = setTimeout(function() {
					if (!e.hoverData.tapholdCancelled) {
						var t = e.hoverData.down;
						t ? t.emit(d("taphold")) : n.emit(d("taphold"));
					}
				}, e.tapholdDuration);
			};
			if (t.which == 3) {
				e.hoverData.cxtStarted = !0;
				var h = {
					originalEvent: t,
					type: "cxttapstart",
					position: {
						x: o[0],
						y: o[1]
					}
				};
				l ? (l.activate(), l.emit(h), e.hoverData.down = l) : n.emit(h), e.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), e.hoverData.cxtDragged = !1;
			} else if (t.which == 1) {
				if (l && l.activate(), l != null && e.nodeIsGrabbable(l)) {
					var g = function(e) {
						e.emit(d("grab"));
					};
					if (f(l), !l.selected()) u = e.dragData.possibleDragElements = n.collection(), v(l, { addToList: u }), l.emit(d("grabon")).emit(d("grab"));
					else {
						u = e.dragData.possibleDragElements = n.collection();
						var b = n.$(function(t) {
							return t.isNode() && t.selected() && e.nodeIsGrabbable(t);
						});
						_(b, { addToList: u }), l.emit(d("grabon")), b.forEach(g);
					}
					e.redrawHint("eles", !0), e.redrawHint("drag", !0);
				}
				e.hoverData.down = l, e.hoverData.downs = c, e.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), a(l, [
					"mousedown",
					"tapstart",
					"vmousedown"
				], t, {
					x: o[0],
					y: o[1]
				}), l == null ? (s[4] = 1, e.data.bgActivePosistion = {
					x: o[0],
					y: o[1]
				}, e.redrawHint("select", !0), e.redraw()) : l.pannable() && (s[4] = 1), m();
			}
			s[0] = s[2] = o[0], s[1] = s[3] = o[1];
		}
	}, !1);
	var j = r(e.container);
	e.registerBinding([t, j], "mousemove", function(t) {
		if (!(!e.hoverData.capture && !A(t))) {
			var n = !1, r = e.cy, c = r.zoom(), l = [t.clientX, t.clientY], u = e.projectIntoViewport(l[0], l[1]), d = e.hoverData.mdownPos, f = e.hoverData.mdownGPos, m = e.selection, h = null;
			!e.hoverData.draggingEles && !e.hoverData.dragging && !e.hoverData.selecting && (h = e.findNearestElement(u[0], u[1], !0, !1));
			var g = e.hoverData.last, v = e.hoverData.down, S = [u[0] - m[2], u[1] - m[3]], C = e.dragData.possibleDragElements, w;
			if (f) {
				var T = l[0] - f[0], E = T * T, D = l[1] - f[1], O = E + D * D;
				e.hoverData.isOverThresholdDrag = w = O >= e.desktopTapThreshold2;
			}
			var k = o(t);
			w && (e.hoverData.tapholdCancelled = !0);
			var j = function() {
				var t = e.hoverData.dragDelta = e.hoverData.dragDelta || [];
				t.length === 0 ? (t.push(S[0]), t.push(S[1])) : (t[0] += S[0], t[1] += S[1]);
			};
			n = !0, a(h, [
				"mousemove",
				"vmousemove",
				"tapdrag"
			], t, {
				x: u[0],
				y: u[1]
			});
			var M = function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: u[0],
						y: u[1]
					}
				};
			}, N = function() {
				e.data.bgActivePosistion = void 0, e.hoverData.selecting || r.emit(M("boxstart")), m[4] = 1, e.hoverData.selecting = !0, e.redrawHint("select", !0), e.redraw();
			};
			if (e.hoverData.which === 3) {
				if (w) {
					var P = M("cxtdrag");
					v ? v.emit(P) : r.emit(P), e.hoverData.cxtDragged = !0, (!e.hoverData.cxtOver || h !== e.hoverData.cxtOver) && (e.hoverData.cxtOver && e.hoverData.cxtOver.emit(M("cxtdragout")), e.hoverData.cxtOver = h, h && h.emit(M("cxtdragover")));
				}
			} else if (e.hoverData.dragging) {
				if (n = !0, r.panningEnabled() && r.userPanningEnabled()) {
					var F;
					if (e.hoverData.justStartedPan) {
						var L = e.hoverData.mdownPos;
						F = {
							x: (u[0] - L[0]) * c,
							y: (u[1] - L[1]) * c
						}, e.hoverData.justStartedPan = !1;
					} else F = {
						x: S[0] * c,
						y: S[1] * c
					};
					r.panBy(F), r.emit(M("dragpan")), e.hoverData.dragged = !0;
				}
				u = e.projectIntoViewport(t.clientX, t.clientY);
			} else if (m[4] == 1 && (v == null || v.pannable())) w && (!e.hoverData.dragging && r.boxSelectionEnabled() && (k || !r.panningEnabled() || !r.userPanningEnabled()) ? N() : !e.hoverData.selecting && r.panningEnabled() && r.userPanningEnabled() && s(v, e.hoverData.downs) && (e.hoverData.dragging = !0, e.hoverData.justStartedPan = !0, m[4] = 0, e.data.bgActivePosistion = array2point(d), e.redrawHint("select", !0), e.redraw()), v && v.pannable() && v.active() && v.unactivate());
			else {
				if (v && v.pannable() && v.active() && v.unactivate(), (!v || !v.grabbed()) && h != g && (g && a(g, ["mouseout", "tapdragout"], t, {
					x: u[0],
					y: u[1]
				}), h && a(h, ["mouseover", "tapdragover"], t, {
					x: u[0],
					y: u[1]
				}), e.hoverData.last = h), v) if (w) {
					if (r.boxSelectionEnabled() && k) v && v.grabbed() && (b(C), v.emit(M("freeon")), C.emit(M("free")), e.dragData.didDrag && (v.emit(M("dragfreeon")), C.emit(M("dragfree")))), N();
					else if (v && v.grabbed() && e.nodeIsDraggable(v)) {
						var R = !e.dragData.didDrag;
						R && e.redrawHint("eles", !0), e.dragData.didDrag = !0, e.hoverData.draggingEles || _(C, { inDragLayer: !0 });
						var z = {
							x: 0,
							y: 0
						};
						if (number$1(S[0]) && number$1(S[1]) && (z.x += S[0], z.y += S[1], R)) {
							var B = e.hoverData.dragDelta;
							B && number$1(B[0]) && number$1(B[1]) && (z.x += B[0], z.y += B[1]);
						}
						e.hoverData.draggingEles = !0, C.silentShift(z).emit(M("position")).emit(M("drag")), e.redrawHint("drag", !0), e.redraw();
					}
				} else j();
				n = !0;
			}
			if (m[2] = u[0], m[3] = u[1], n) return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), !1;
		}
	}, !1);
	var M, N, P;
	e.registerBinding(t, "mouseup", function(t) {
		if (!(e.hoverData.which === 1 && t.which !== 1 && e.hoverData.capture) && e.hoverData.capture) {
			e.hoverData.capture = !1;
			var r = e.cy, s = e.projectIntoViewport(t.clientX, t.clientY), c = e.selection, l = e.findNearestElement(s[0], s[1], !0, !1), u = e.dragData.possibleDragElements, d = e.hoverData.down, f = o(t);
			e.data.bgActivePosistion && (e.redrawHint("select", !0), e.redraw()), e.hoverData.tapholdCancelled = !0, e.data.bgActivePosistion = void 0, d && d.unactivate();
			var m = function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: s[0],
						y: s[1]
					}
				};
			};
			if (e.hoverData.which === 3) {
				var h = m("cxttapend");
				if (d ? d.emit(h) : r.emit(h), !e.hoverData.cxtDragged) {
					var g = m("cxttap");
					d ? d.emit(g) : r.emit(g);
				}
				e.hoverData.cxtDragged = !1, e.hoverData.which = null;
			} else if (e.hoverData.which === 1) {
				if (a(l, [
					"mouseup",
					"tapend",
					"vmouseup"
				], t, {
					x: s[0],
					y: s[1]
				}), !e.dragData.didDrag && !e.hoverData.dragged && !e.hoverData.selecting && !e.hoverData.isOverThresholdDrag && (a(d, [
					"click",
					"tap",
					"vclick"
				], t, {
					x: s[0],
					y: s[1]
				}), N = !1, t.timeStamp - P <= r.multiClickDebounceTime() ? (M && clearTimeout(M), N = !0, P = null, a(d, [
					"dblclick",
					"dbltap",
					"vdblclick"
				], t, {
					x: s[0],
					y: s[1]
				})) : (M = setTimeout(function() {
					N || a(d, [
						"oneclick",
						"onetap",
						"voneclick"
					], t, {
						x: s[0],
						y: s[1]
					});
				}, r.multiClickDebounceTime()), P = t.timeStamp)), d == null && !e.dragData.didDrag && !e.hoverData.selecting && !e.hoverData.dragged && !o(t) && (r.$(n).unselect(["tapunselect"]), u.length > 0 && e.redrawHint("eles", !0), e.dragData.possibleDragElements = u = r.collection()), l == d && !e.dragData.didDrag && !e.hoverData.selecting && l != null && l._private.selectable && (e.hoverData.dragging || (r.selectionType() === "additive" || f ? l.selected() ? l.unselect(["tapunselect"]) : l.select(["tapselect"]) : f || (r.$(n).unmerge(l).unselect(["tapunselect"]), l.select(["tapselect"]))), e.redrawHint("eles", !0)), e.hoverData.selecting) {
					var _ = r.collection(e.getAllInBox(c[0], c[1], c[2], c[3]));
					e.redrawHint("select", !0), _.length > 0 && e.redrawHint("eles", !0), r.emit(m("boxend")), r.selectionType() === "additive" || f || r.$(n).unmerge(_).unselect(), _.emit(m("box")).stdFilter(function(e) {
						return e.selectable() && !e.selected();
					}).select().emit(m("boxselect")), e.redraw();
				}
				if (e.hoverData.dragging && (e.hoverData.dragging = !1, e.redrawHint("select", !0), e.redrawHint("eles", !0), e.redraw()), !c[4]) {
					e.redrawHint("drag", !0), e.redrawHint("eles", !0);
					var v = d && d.grabbed();
					b(u), v && (d.emit(m("freeon")), u.emit(m("free")), e.dragData.didDrag && (d.emit(m("dragfreeon")), u.emit(m("dragfree"))));
				}
			}
			c[4] = 0, e.hoverData.down = null, e.hoverData.cxtStarted = !1, e.hoverData.draggingEles = !1, e.hoverData.selecting = !1, e.hoverData.isOverThresholdDrag = !1, e.dragData.didDrag = !1, e.hoverData.dragged = !1, e.hoverData.dragDelta = [], e.hoverData.mdownPos = null, e.hoverData.mdownGPos = null, e.hoverData.which = null;
		}
	}, !1);
	var F = [], L = 4, R, z = 1e5, B = function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n] % t !== 0) return !1;
		return !0;
	}, V = function(e) {
		for (var t = Math.abs(e[0]), n = 1; n < e.length; n++) if (Math.abs(e[n]) !== t) return !1;
		return !0;
	}, H = function(t) {
		var n = !1, r = t.deltaY;
		if (r ?? (t.wheelDeltaY == null ? t.wheelDelta != null && (r = t.wheelDelta / 4) : r = t.wheelDeltaY / 4), r !== 0) {
			if (R == null) if (F.length >= L) {
				var a = F;
				if (R = B(a, 5), !R) {
					var o = Math.abs(a[0]);
					R = V(a) && o > 5;
				}
				if (R) for (var s = 0; s < a.length; s++) z = Math.min(Math.abs(a[s]), z);
			} else F.push(r), n = !0;
			else R && (z = Math.min(Math.abs(r), z));
			if (!e.scrollingPage) {
				var c = e.cy, l = c.zoom(), u = c.pan(), d = e.projectIntoViewport(t.clientX, t.clientY), f = [d[0] * l + u.x, d[1] * l + u.y];
				if (e.hoverData.draggingEles || e.hoverData.dragging || e.hoverData.cxtStarted || k()) {
					t.preventDefault();
					return;
				}
				if (c.panningEnabled() && c.userPanningEnabled() && c.zoomingEnabled() && c.userZoomingEnabled()) {
					t.preventDefault(), e.data.wheelZooming = !0, clearTimeout(e.data.wheelTimeout), e.data.wheelTimeout = setTimeout(function() {
						e.data.wheelZooming = !1, e.redrawHint("eles", !0), e.redraw();
					}, 150);
					var m;
					n && Math.abs(r) > 5 && (r = signum(r) * 5), m = r / -250, R && (m /= z, m *= 3), m *= e.wheelSensitivity, t.deltaMode === 1 && (m *= 33);
					var h = c.zoom() * 10 ** m;
					t.type === "gesturechange" && (h = e.gestureStartZoom * t.scale), c.zoom({
						level: h,
						renderedPosition: {
							x: f[0],
							y: f[1]
						}
					}), c.emit({
						type: t.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
						originalEvent: t,
						position: {
							x: d[0],
							y: d[1]
						}
					});
				}
			}
		}
	};
	e.registerBinding(e.container, "wheel", H, !0), e.registerBinding(t, "scroll", function(t) {
		e.scrollingPage = !0, clearTimeout(e.scrollingPageTimeout), e.scrollingPageTimeout = setTimeout(function() {
			e.scrollingPage = !1;
		}, 250);
	}, !0), e.registerBinding(e.container, "gesturestart", function(t) {
		e.gestureStartZoom = e.cy.zoom(), e.hasTouchStarted || t.preventDefault();
	}, !0), e.registerBinding(e.container, "gesturechange", function(t) {
		e.hasTouchStarted || H(t);
	}, !0), e.registerBinding(e.container, "mouseout", function(t) {
		var n = e.projectIntoViewport(t.clientX, t.clientY);
		e.cy.emit({
			originalEvent: t,
			type: "mouseout",
			position: {
				x: n[0],
				y: n[1]
			}
		});
	}, !1), e.registerBinding(e.container, "mouseover", function(t) {
		var n = e.projectIntoViewport(t.clientX, t.clientY);
		e.cy.emit({
			originalEvent: t,
			type: "mouseover",
			position: {
				x: n[0],
				y: n[1]
			}
		});
	}, !1);
	var U, W, G, q, J, Y, X, Z, Q, $, kh, Ah, jh, Mh = function(e, t, n, r) {
		return Math.sqrt((n - e) * (n - e) + (r - t) * (r - t));
	}, Nh = function(e, t, n, r) {
		return (n - e) * (n - e) + (r - t) * (r - t);
	}, Ph;
	e.registerBinding(e.container, "touchstart", Ph = function(t) {
		if (e.hasTouchStarted = !0, A(t)) {
			C(), e.touchData.capture = !0, e.data.bgActivePosistion = void 0;
			var n = e.cy, r = e.touchData.now, o = e.touchData.earlier;
			if (t.touches[0]) {
				var s = e.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
				r[0] = s[0], r[1] = s[1];
			}
			if (t.touches[1]) {
				var s = e.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
				r[2] = s[0], r[3] = s[1];
			}
			if (t.touches[2]) {
				var s = e.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
				r[4] = s[0], r[5] = s[1];
			}
			var c = function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: r[0],
						y: r[1]
					}
				};
			};
			if (t.touches[1]) {
				e.touchData.singleTouchMoved = !0, b(e.dragData.touchDragEles);
				var l = e.findContainerClientCoords();
				Q = l[0], $ = l[1], kh = l[2], Ah = l[3], U = t.touches[0].clientX - Q, W = t.touches[0].clientY - $, G = t.touches[1].clientX - Q, q = t.touches[1].clientY - $, jh = 0 <= U && U <= kh && 0 <= G && G <= kh && 0 <= W && W <= Ah && 0 <= q && q <= Ah;
				var u = n.pan(), d = n.zoom();
				J = Mh(U, W, G, q), Y = Nh(U, W, G, q), X = [(U + G) / 2, (W + q) / 2], Z = [(X[0] - u.x) / d, (X[1] - u.y) / d];
				var m = 200, h = m * m;
				if (Y < h && !t.touches[2]) {
					var g = e.findNearestElement(r[0], r[1], !0, !0), S = e.findNearestElement(r[2], r[3], !0, !0);
					g && g.isNode() ? (g.activate().emit(c("cxttapstart")), e.touchData.start = g) : S && S.isNode() ? (S.activate().emit(c("cxttapstart")), e.touchData.start = S) : n.emit(c("cxttapstart")), e.touchData.start && (e.touchData.start._private.grabbed = !1), e.touchData.cxt = !0, e.touchData.cxtDragged = !1, e.data.bgActivePosistion = void 0, e.redraw();
					return;
				}
			}
			if (t.touches[2]) n.boxSelectionEnabled() && t.preventDefault();
			else if (!t.touches[1] && t.touches[0]) {
				var w = e.findNearestElements(r[0], r[1], !0, !0), T = w[0];
				if (T != null && (T.activate(), e.touchData.start = T, e.touchData.starts = w, e.nodeIsGrabbable(T))) {
					var E = e.dragData.touchDragEles = n.collection(), D = null;
					e.redrawHint("eles", !0), e.redrawHint("drag", !0), T.selected() ? (D = n.$(function(t) {
						return t.selected() && e.nodeIsGrabbable(t);
					}), _(D, { addToList: E })) : v(T, { addToList: E }), f(T), T.emit(c("grabon")), D ? D.forEach(function(e) {
						e.emit(c("grab"));
					}) : T.emit(c("grab"));
				}
				a(T, [
					"touchstart",
					"tapstart",
					"vmousedown"
				], t, {
					x: r[0],
					y: r[1]
				}), T ?? (e.data.bgActivePosistion = {
					x: s[0],
					y: s[1]
				}, e.redrawHint("select", !0), e.redraw()), e.touchData.singleTouchMoved = !1, e.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(e.touchData.tapholdTimeout), e.touchData.tapholdTimeout = setTimeout(function() {
					e.touchData.singleTouchMoved === !1 && !e.pinching && !e.touchData.selecting && a(e.touchData.start, ["taphold"], t, {
						x: r[0],
						y: r[1]
					});
				}, e.tapholdDuration);
			}
			if (t.touches.length >= 1) {
				for (var O = e.touchData.startPosition = [
					null,
					null,
					null,
					null,
					null,
					null
				], k = 0; k < r.length; k++) O[k] = o[k] = r[k];
				var j = t.touches[0];
				e.touchData.startGPosition = [j.clientX, j.clientY];
			}
		}
	}, !1);
	var Fh;
	e.registerBinding(t, "touchmove", Fh = function(t) {
		var n = e.touchData.capture;
		if (!(!n && !A(t))) {
			var r = e.selection, o = e.cy, c = e.touchData.now, l = e.touchData.earlier, u = o.zoom();
			if (t.touches[0]) {
				var d = e.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
				c[0] = d[0], c[1] = d[1];
			}
			if (t.touches[1]) {
				var d = e.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
				c[2] = d[0], c[3] = d[1];
			}
			if (t.touches[2]) {
				var d = e.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
				c[4] = d[0], c[5] = d[1];
			}
			var f = function(e) {
				return {
					originalEvent: t,
					type: e,
					position: {
						x: c[0],
						y: c[1]
					}
				};
			}, m = e.touchData.startGPosition, h;
			if (n && t.touches[0] && m) {
				for (var g = [], v = 0; v < c.length; v++) g[v] = c[v] - l[v];
				var S = t.touches[0].clientX - m[0], C = S * S, w = t.touches[0].clientY - m[1];
				h = C + w * w >= e.touchTapThreshold2;
			}
			if (n && e.touchData.cxt) {
				t.preventDefault();
				var T = t.touches[0].clientX - Q, E = t.touches[0].clientY - $, D = t.touches[1].clientX - Q, O = t.touches[1].clientY - $, k = Nh(T, E, D, O), j = k / Y, M = 150, N = M * M, P = 1.5;
				if (j >= P * P || k >= N) {
					e.touchData.cxt = !1, e.data.bgActivePosistion = void 0, e.redrawHint("select", !0);
					var F = f("cxttapend");
					e.touchData.start ? (e.touchData.start.unactivate().emit(F), e.touchData.start = null) : o.emit(F);
				}
			}
			if (n && e.touchData.cxt) {
				var F = f("cxtdrag");
				e.data.bgActivePosistion = void 0, e.redrawHint("select", !0), e.touchData.start ? e.touchData.start.emit(F) : o.emit(F), e.touchData.start && (e.touchData.start._private.grabbed = !1), e.touchData.cxtDragged = !0;
				var L = e.findNearestElement(c[0], c[1], !0, !0);
				(!e.touchData.cxtOver || L !== e.touchData.cxtOver) && (e.touchData.cxtOver && e.touchData.cxtOver.emit(f("cxtdragout")), e.touchData.cxtOver = L, L && L.emit(f("cxtdragover")));
			} else if (n && t.touches[2] && o.boxSelectionEnabled()) t.preventDefault(), e.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), e.touchData.selecting || o.emit(f("boxstart")), e.touchData.selecting = !0, e.touchData.didSelect = !0, r[4] = 1, !r || r.length === 0 || r[0] === void 0 ? (r[0] = (c[0] + c[2] + c[4]) / 3, r[1] = (c[1] + c[3] + c[5]) / 3, r[2] = (c[0] + c[2] + c[4]) / 3 + 1, r[3] = (c[1] + c[3] + c[5]) / 3 + 1) : (r[2] = (c[0] + c[2] + c[4]) / 3, r[3] = (c[1] + c[3] + c[5]) / 3), e.redrawHint("select", !0), e.redraw();
			else if (n && t.touches[1] && !e.touchData.didSelect && o.zoomingEnabled() && o.panningEnabled() && o.userZoomingEnabled() && o.userPanningEnabled()) {
				t.preventDefault(), e.data.bgActivePosistion = void 0, e.redrawHint("select", !0);
				var R = e.dragData.touchDragEles;
				if (R) {
					e.redrawHint("drag", !0);
					for (var z = 0; z < R.length; z++) {
						var B = R[z]._private;
						B.grabbed = !1, B.rscratch.inDragLayer = !1;
					}
				}
				var V = e.touchData.start, T = t.touches[0].clientX - Q, E = t.touches[0].clientY - $, D = t.touches[1].clientX - Q, O = t.touches[1].clientY - $, H = Mh(T, E, D, O), X = H / J;
				if (jh) {
					var kh = T - U, Ah = E - W, Ph = D - G, Fh = O - q, Ih = (kh + Ph) / 2, Lh = (Ah + Fh) / 2, Rh = o.zoom(), zh = Rh * X, Bh = o.pan(), Vh = Z[0] * Rh + Bh.x, Hh = Z[1] * Rh + Bh.y, Uh = {
						x: -zh / Rh * (Vh - Bh.x - Ih) + Vh,
						y: -zh / Rh * (Hh - Bh.y - Lh) + Hh
					};
					if (V && V.active()) {
						var R = e.dragData.touchDragEles;
						b(R), e.redrawHint("drag", !0), e.redrawHint("eles", !0), V.unactivate().emit(f("freeon")), R.emit(f("free")), e.dragData.didDrag && (V.emit(f("dragfreeon")), R.emit(f("dragfree")));
					}
					o.viewport({
						zoom: zh,
						pan: Uh,
						cancelOnFailedZoom: !0
					}), o.emit(f("pinchzoom")), J = H, U = T, W = E, G = D, q = O, e.pinching = !0;
				}
				if (t.touches[0]) {
					var d = e.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
					c[0] = d[0], c[1] = d[1];
				}
				if (t.touches[1]) {
					var d = e.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
					c[2] = d[0], c[3] = d[1];
				}
				if (t.touches[2]) {
					var d = e.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
					c[4] = d[0], c[5] = d[1];
				}
			} else if (t.touches[0] && !e.touchData.didSelect) {
				var Wh = e.touchData.start, Gh = e.touchData.last, L;
				if (!e.hoverData.draggingEles && !e.swipePanning && (L = e.findNearestElement(c[0], c[1], !0, !0)), n && Wh != null && t.preventDefault(), n && Wh != null && e.nodeIsDraggable(Wh)) if (h) {
					var R = e.dragData.touchDragEles, Kh = !e.dragData.didDrag;
					Kh && _(R, { inDragLayer: !0 }), e.dragData.didDrag = !0;
					var qh = {
						x: 0,
						y: 0
					};
					if (number$1(g[0]) && number$1(g[1]) && (qh.x += g[0], qh.y += g[1], Kh)) {
						e.redrawHint("eles", !0);
						var Jh = e.touchData.dragDelta;
						Jh && number$1(Jh[0]) && number$1(Jh[1]) && (qh.x += Jh[0], qh.y += Jh[1]);
					}
					e.hoverData.draggingEles = !0, R.silentShift(qh).emit(f("position")).emit(f("drag")), e.redrawHint("drag", !0), e.touchData.startPosition[0] == l[0] && e.touchData.startPosition[1] == l[1] && e.redrawHint("eles", !0), e.redraw();
				} else {
					var Jh = e.touchData.dragDelta = e.touchData.dragDelta || [];
					Jh.length === 0 ? (Jh.push(g[0]), Jh.push(g[1])) : (Jh[0] += g[0], Jh[1] += g[1]);
				}
				if (a(Wh || L, [
					"touchmove",
					"tapdrag",
					"vmousemove"
				], t, {
					x: c[0],
					y: c[1]
				}), (!Wh || !Wh.grabbed()) && L != Gh && (Gh && Gh.emit(f("tapdragout")), L && L.emit(f("tapdragover"))), e.touchData.last = L, n) for (var z = 0; z < c.length; z++) c[z] && e.touchData.startPosition[z] && h && (e.touchData.singleTouchMoved = !0);
				if (n && (Wh == null || Wh.pannable()) && o.panningEnabled() && o.userPanningEnabled()) {
					s(Wh, e.touchData.starts) && (t.preventDefault(), e.data.bgActivePosistion || (e.data.bgActivePosistion = array2point(e.touchData.startPosition)), e.swipePanning ? (o.panBy({
						x: g[0] * u,
						y: g[1] * u
					}), o.emit(f("dragpan"))) : h && (e.swipePanning = !0, o.panBy({
						x: S * u,
						y: w * u
					}), o.emit(f("dragpan")), Wh && (Wh.unactivate(), e.redrawHint("select", !0), e.touchData.start = null)));
					var d = e.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
					c[0] = d[0], c[1] = d[1];
				}
			}
			for (var v = 0; v < c.length; v++) l[v] = c[v];
			n && t.touches.length > 0 && !e.hoverData.draggingEles && !e.swipePanning && e.data.bgActivePosistion != null && (e.data.bgActivePosistion = void 0, e.redrawHint("select", !0), e.redraw());
		}
	}, !1);
	var Ih;
	e.registerBinding(t, "touchcancel", Ih = function(t) {
		var n = e.touchData.start;
		e.touchData.capture = !1, n && n.unactivate();
	});
	var Lh, Rh, zh, Bh;
	if (e.registerBinding(t, "touchend", Lh = function(t) {
		var r = e.touchData.start;
		if (e.touchData.capture) t.touches.length === 0 && (e.touchData.capture = !1), t.preventDefault();
		else return;
		var o = e.selection;
		e.swipePanning = !1, e.hoverData.draggingEles = !1;
		var s = e.cy, c = s.zoom(), l = e.touchData.now, u = e.touchData.earlier;
		if (t.touches[0]) {
			var d = e.projectIntoViewport(t.touches[0].clientX, t.touches[0].clientY);
			l[0] = d[0], l[1] = d[1];
		}
		if (t.touches[1]) {
			var d = e.projectIntoViewport(t.touches[1].clientX, t.touches[1].clientY);
			l[2] = d[0], l[3] = d[1];
		}
		if (t.touches[2]) {
			var d = e.projectIntoViewport(t.touches[2].clientX, t.touches[2].clientY);
			l[4] = d[0], l[5] = d[1];
		}
		var f = function(e) {
			return {
				originalEvent: t,
				type: e,
				position: {
					x: l[0],
					y: l[1]
				}
			};
		};
		r && r.unactivate();
		var m;
		if (e.touchData.cxt) {
			if (m = f("cxttapend"), r ? r.emit(m) : s.emit(m), !e.touchData.cxtDragged) {
				var h = f("cxttap");
				r ? r.emit(h) : s.emit(h);
			}
			e.touchData.start && (e.touchData.start._private.grabbed = !1), e.touchData.cxt = !1, e.touchData.start = null, e.redraw();
			return;
		}
		if (!t.touches[2] && s.boxSelectionEnabled() && e.touchData.selecting) {
			e.touchData.selecting = !1;
			var g = s.collection(e.getAllInBox(o[0], o[1], o[2], o[3]));
			o[0] = void 0, o[1] = void 0, o[2] = void 0, o[3] = void 0, o[4] = 0, e.redrawHint("select", !0), s.emit(f("boxend")), g.emit(f("box")).stdFilter(function(e) {
				return e.selectable() && !e.selected();
			}).select().emit(f("boxselect")), g.nonempty() && e.redrawHint("eles", !0), e.redraw();
		}
		if (r?.unactivate(), t.touches[2]) e.data.bgActivePosistion = void 0, e.redrawHint("select", !0);
		else if (!t.touches[1] && !t.touches[0] && !t.touches[0]) {
			e.data.bgActivePosistion = void 0, e.redrawHint("select", !0);
			var _ = e.dragData.touchDragEles;
			if (r != null) {
				var v = r._private.grabbed;
				b(_), e.redrawHint("drag", !0), e.redrawHint("eles", !0), v && (r.emit(f("freeon")), _.emit(f("free")), e.dragData.didDrag && (r.emit(f("dragfreeon")), _.emit(f("dragfree")))), a(r, [
					"touchend",
					"tapend",
					"vmouseup",
					"tapdragout"
				], t, {
					x: l[0],
					y: l[1]
				}), r.unactivate(), e.touchData.start = null;
			} else a(e.findNearestElement(l[0], l[1], !0, !0), [
				"touchend",
				"tapend",
				"vmouseup",
				"tapdragout"
			], t, {
				x: l[0],
				y: l[1]
			});
			var S = e.touchData.startPosition[0] - l[0], C = S * S, w = e.touchData.startPosition[1] - l[1], T = (C + w * w) * c * c;
			e.touchData.singleTouchMoved || (r || s.$(":selected").unselect(["tapunselect"]), a(r, ["tap", "vclick"], t, {
				x: l[0],
				y: l[1]
			}), Rh = !1, t.timeStamp - Bh <= s.multiClickDebounceTime() ? (zh && clearTimeout(zh), Rh = !0, Bh = null, a(r, ["dbltap", "vdblclick"], t, {
				x: l[0],
				y: l[1]
			})) : (zh = setTimeout(function() {
				Rh || a(r, ["onetap", "voneclick"], t, {
					x: l[0],
					y: l[1]
				});
			}, s.multiClickDebounceTime()), Bh = t.timeStamp)), r != null && !e.dragData.didDrag && r._private.selectable && T < e.touchTapThreshold2 && !e.pinching && (s.selectionType() === "single" ? (s.$(n).unmerge(r).unselect(["tapunselect"]), r.select(["tapselect"])) : r.selected() ? r.unselect(["tapunselect"]) : r.select(["tapselect"]), e.redrawHint("eles", !0)), e.touchData.singleTouchMoved = !0;
		}
		for (var E = 0; E < l.length; E++) u[E] = l[E];
		e.dragData.didDrag = !1, t.touches.length === 0 && (e.touchData.dragDelta = [], e.touchData.startPosition = [
			null,
			null,
			null,
			null,
			null,
			null
		], e.touchData.startGPosition = null, e.touchData.didSelect = !1), t.touches.length < 2 && (t.touches.length === 1 && (e.touchData.startGPosition = [t.touches[0].clientX, t.touches[0].clientY]), e.pinching = !1, e.redrawHint("eles", !0), e.redraw());
	}, !1), typeof TouchEvent > "u") {
		var Vh = [], Hh = function(e) {
			return {
				clientX: e.clientX,
				clientY: e.clientY,
				force: 1,
				identifier: e.pointerId,
				pageX: e.pageX,
				pageY: e.pageY,
				radiusX: e.width / 2,
				radiusY: e.height / 2,
				screenX: e.screenX,
				screenY: e.screenY,
				target: e.target
			};
		}, Uh = function(e) {
			return {
				event: e,
				touch: Hh(e)
			};
		}, Wh = function(e) {
			Vh.push(Uh(e));
		}, Gh = function(e) {
			for (var t = 0; t < Vh.length; t++) if (Vh[t].event.pointerId === e.pointerId) {
				Vh.splice(t, 1);
				return;
			}
		}, Kh = function(e) {
			var t = Vh.filter(function(t) {
				return t.event.pointerId === e.pointerId;
			})[0];
			t.event = e, t.touch = Hh(e);
		}, qh = function(e) {
			e.touches = Vh.map(function(e) {
				return e.touch;
			});
		}, Jh = function(e) {
			return e.pointerType === "mouse" || e.pointerType === 4;
		};
		e.registerBinding(e.container, "pointerdown", function(e) {
			Jh(e) || (e.preventDefault(), Wh(e), qh(e), Ph(e));
		}), e.registerBinding(e.container, "pointerup", function(e) {
			Jh(e) || (Gh(e), qh(e), Lh(e));
		}), e.registerBinding(e.container, "pointercancel", function(e) {
			Jh(e) || (Gh(e), qh(e), Ih(e));
		}), e.registerBinding(e.container, "pointermove", function(e) {
			Jh(e) || (e.preventDefault(), Kh(e), qh(e), Fh(e));
		});
	}
};
var BRp$2 = {};
BRp$2.generatePolygon = function(e, t) {
	return this.nodeShapes[e] = {
		renderer: this,
		name: e,
		points: t,
		draw: function(e, t, n, r, a, o) {
			this.renderer.nodeShapeImpl("polygon", e, t, n, r, a, this.points);
		},
		intersectLine: function(e, t, n, r, a, o, s, c) {
			return polygonIntersectLine(a, o, this.points, e, t, n / 2, r / 2, s);
		},
		checkPoint: function(e, t, n, r, a, o, s, c) {
			return pointInsidePolygon(e, t, this.points, o, s, r, a, [0, -1], n);
		},
		hasMiterBounds: e !== "rectangle",
		miterBounds: function(e, t, n, r, a, o) {
			return miterBox(this.points, e, t, n, r, a);
		}
	};
}, BRp$2.generateEllipse = function() {
	return this.nodeShapes.ellipse = {
		renderer: this,
		name: "ellipse",
		draw: function(e, t, n, r, a, o) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
		},
		intersectLine: function(e, t, n, r, a, o, s, c) {
			return intersectLineEllipse(a, o, e, t, n / 2 + s, r / 2 + s);
		},
		checkPoint: function(e, t, n, r, a, o, s, c) {
			return checkInEllipse(e, t, r, a, o, s, n);
		}
	};
}, BRp$2.generateRoundPolygon = function(e, t) {
	return this.nodeShapes[e] = {
		renderer: this,
		name: e,
		points: t,
		getOrCreateCorners: function(e, n, r, a, o, s, c) {
			if (s[c] !== void 0 && s[c + "-cx"] === e && s[c + "-cy"] === n) return s[c];
			s[c] = Array(t.length / 2), s[c + "-cx"] = e, s[c + "-cy"] = n;
			var l = r / 2, u = a / 2;
			o = o === "auto" ? getRoundPolygonRadius(r, a) : o;
			for (var d = Array(t.length / 2), f = 0; f < t.length / 2; f++) d[f] = {
				x: e + l * t[f * 2],
				y: n + u * t[f * 2 + 1]
			};
			var m, h, g, _, v = d.length;
			for (h = d[v - 1], m = 0; m < v; m++) g = d[m % v], _ = d[(m + 1) % v], s[c][m] = getRoundCorner(h, g, _, o), h = g, g = _;
			return s[c];
		},
		draw: function(e, t, n, r, a, o, s) {
			this.renderer.nodeShapeImpl("round-polygon", e, t, n, r, a, this.points, this.getOrCreateCorners(t, n, r, a, o, s, "drawCorners"));
		},
		intersectLine: function(e, t, n, r, a, o, s, c, l) {
			return roundPolygonIntersectLine(a, o, this.points, e, t, n, r, s, this.getOrCreateCorners(e, t, n, r, c, l, "corners"));
		},
		checkPoint: function(e, t, n, r, a, o, s, c, l) {
			return pointInsideRoundPolygon(e, t, this.points, o, s, r, a, this.getOrCreateCorners(o, s, r, a, c, l, "corners"));
		}
	};
}, BRp$2.generateRoundRectangle = function() {
	return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
		renderer: this,
		name: "round-rectangle",
		points: generateUnitNgonPointsFitToSquare(4, 0),
		draw: function(e, t, n, r, a, o) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, this.points, o);
		},
		intersectLine: function(e, t, n, r, a, o, s, c) {
			return roundRectangleIntersectLine(a, o, e, t, n, r, s, c);
		},
		checkPoint: function(e, t, n, r, a, o, s, c) {
			var l = r / 2, u = a / 2;
			c = c === "auto" ? getRoundRectangleRadius(r, a) : c, c = Math.min(l, u, c);
			var d = c * 2;
			return !!(pointInsidePolygon(e, t, this.points, o, s, r, a - d, [0, -1], n) || pointInsidePolygon(e, t, this.points, o, s, r - d, a, [0, -1], n) || checkInEllipse(e, t, d, d, o - l + c, s - u + c, n) || checkInEllipse(e, t, d, d, o + l - c, s - u + c, n) || checkInEllipse(e, t, d, d, o + l - c, s + u - c, n) || checkInEllipse(e, t, d, d, o - l + c, s + u - c, n));
		}
	};
}, BRp$2.generateCutRectangle = function() {
	return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
		renderer: this,
		name: "cut-rectangle",
		cornerLength: getCutRectangleCornerLength(),
		points: generateUnitNgonPointsFitToSquare(4, 0),
		draw: function(e, t, n, r, a, o) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, null, o);
		},
		generateCutTrianglePts: function(e, t, n, r, a) {
			var o = a === "auto" ? this.cornerLength : a, s = t / 2, c = e / 2, l = n - c, u = n + c, d = r - s, f = r + s;
			return {
				topLeft: [
					l,
					d + o,
					l + o,
					d,
					l + o,
					d + o
				],
				topRight: [
					u - o,
					d,
					u,
					d + o,
					u - o,
					d + o
				],
				bottomRight: [
					u,
					f - o,
					u - o,
					f,
					u - o,
					f - o
				],
				bottomLeft: [
					l + o,
					f,
					l,
					f - o,
					l + o,
					f - o
				]
			};
		},
		intersectLine: function(e, t, n, r, a, o, s, c) {
			var l = this.generateCutTrianglePts(n + 2 * s, r + 2 * s, e, t, c);
			return polygonIntersectLine(a, o, [].concat.apply([], [
				l.topLeft.splice(0, 4),
				l.topRight.splice(0, 4),
				l.bottomRight.splice(0, 4),
				l.bottomLeft.splice(0, 4)
			]), e, t);
		},
		checkPoint: function(e, t, n, r, a, o, s, c) {
			var l = c === "auto" ? this.cornerLength : c;
			if (pointInsidePolygon(e, t, this.points, o, s, r, a - 2 * l, [0, -1], n) || pointInsidePolygon(e, t, this.points, o, s, r - 2 * l, a, [0, -1], n)) return !0;
			var u = this.generateCutTrianglePts(r, a, o, s);
			return pointInsidePolygonPoints(e, t, u.topLeft) || pointInsidePolygonPoints(e, t, u.topRight) || pointInsidePolygonPoints(e, t, u.bottomRight) || pointInsidePolygonPoints(e, t, u.bottomLeft);
		}
	};
}, BRp$2.generateBarrel = function() {
	return this.nodeShapes.barrel = {
		renderer: this,
		name: "barrel",
		points: generateUnitNgonPointsFitToSquare(4, 0),
		draw: function(e, t, n, r, a, o) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
		},
		intersectLine: function(e, t, n, r, a, o, s, c) {
			var l = .15, u = .5, d = .85, f = this.generateBarrelBezierPts(n + 2 * s, r + 2 * s, e, t), m = function(e) {
				var t = qbezierPtAt({
					x: e[0],
					y: e[1]
				}, {
					x: e[2],
					y: e[3]
				}, {
					x: e[4],
					y: e[5]
				}, l), n = qbezierPtAt({
					x: e[0],
					y: e[1]
				}, {
					x: e[2],
					y: e[3]
				}, {
					x: e[4],
					y: e[5]
				}, u), r = qbezierPtAt({
					x: e[0],
					y: e[1]
				}, {
					x: e[2],
					y: e[3]
				}, {
					x: e[4],
					y: e[5]
				}, d);
				return [
					e[0],
					e[1],
					t.x,
					t.y,
					n.x,
					n.y,
					r.x,
					r.y,
					e[4],
					e[5]
				];
			};
			return polygonIntersectLine(a, o, [].concat(m(f.topLeft), m(f.topRight), m(f.bottomRight), m(f.bottomLeft)), e, t);
		},
		generateBarrelBezierPts: function(e, t, n, r) {
			var a = t / 2, o = e / 2, s = n - o, c = n + o, l = r - a, u = r + a, d = getBarrelCurveConstants(e, t), f = d.heightOffset, m = d.widthOffset, h = d.ctrlPtOffsetPct * e, g = {
				topLeft: [
					s,
					l + f,
					s + h,
					l,
					s + m,
					l
				],
				topRight: [
					c - m,
					l,
					c - h,
					l,
					c,
					l + f
				],
				bottomRight: [
					c,
					u - f,
					c - h,
					u,
					c - m,
					u
				],
				bottomLeft: [
					s + m,
					u,
					s + h,
					u,
					s,
					u - f
				]
			};
			return g.topLeft.isTop = !0, g.topRight.isTop = !0, g.bottomLeft.isBottom = !0, g.bottomRight.isBottom = !0, g;
		},
		checkPoint: function(e, t, n, r, a, o, s, c) {
			var l = getBarrelCurveConstants(r, a), u = l.heightOffset, d = l.widthOffset;
			if (pointInsidePolygon(e, t, this.points, o, s, r, a - 2 * u, [0, -1], n) || pointInsidePolygon(e, t, this.points, o, s, r - 2 * d, a, [0, -1], n)) return !0;
			for (var f = this.generateBarrelBezierPts(r, a, o, s), m = function(e, t, n) {
				var r = n[4], a = n[2], o = n[0], s = n[5], c = n[1];
				if (Math.min(r, o) <= e && e <= Math.max(r, o) && Math.min(s, c) <= t && t <= Math.max(s, c)) {
					var l = bezierPtsToQuadCoeff(r, a, o), u = solveQuadratic(l[0], l[1], l[2], e).filter(function(e) {
						return 0 <= e && e <= 1;
					});
					if (u.length > 0) return u[0];
				}
				return null;
			}, h = Object.keys(f), g = 0; g < h.length; g++) {
				var _ = f[h[g]], v = m(e, t, _);
				if (v != null) {
					var b = _[5], S = _[3], C = _[1], w = qbezierAt(b, S, C, v);
					if (_.isTop && w <= t || _.isBottom && t <= w) return !0;
				}
			}
			return !1;
		}
	};
}, BRp$2.generateBottomRoundrectangle = function() {
	return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
		renderer: this,
		name: "bottom-round-rectangle",
		points: generateUnitNgonPointsFitToSquare(4, 0),
		draw: function(e, t, n, r, a, o) {
			this.renderer.nodeShapeImpl(this.name, e, t, n, r, a, this.points, o);
		},
		intersectLine: function(e, t, n, r, a, o, s, c) {
			var l = e - (n / 2 + s), u = t - (r / 2 + s), d = u, f = finiteLinesIntersect(a, o, e, t, l, u, e + (n / 2 + s), d, !1);
			return f.length > 0 ? f : roundRectangleIntersectLine(a, o, e, t, n, r, s, c);
		},
		checkPoint: function(e, t, n, r, a, o, s, c) {
			c = c === "auto" ? getRoundRectangleRadius(r, a) : c;
			var l = 2 * c;
			if (pointInsidePolygon(e, t, this.points, o, s, r, a - l, [0, -1], n) || pointInsidePolygon(e, t, this.points, o, s, r - l, a, [0, -1], n)) return !0;
			var u = r / 2 + 2 * n, d = a / 2 + 2 * n;
			return !!(pointInsidePolygonPoints(e, t, [
				o - u,
				s - d,
				o - u,
				s,
				o + u,
				s,
				o + u,
				s - d
			]) || checkInEllipse(e, t, l, l, o + r / 2 - c, s + a / 2 - c, n) || checkInEllipse(e, t, l, l, o - r / 2 + c, s + a / 2 - c, n));
		}
	};
}, BRp$2.registerNodeShapes = function() {
	var e = this.nodeShapes = {}, t = this;
	this.generateEllipse(), this.generatePolygon("triangle", generateUnitNgonPointsFitToSquare(3, 0)), this.generateRoundPolygon("round-triangle", generateUnitNgonPointsFitToSquare(3, 0)), this.generatePolygon("rectangle", generateUnitNgonPointsFitToSquare(4, 0)), e.square = e.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
	var n = [
		0,
		1,
		1,
		0,
		0,
		-1,
		-1,
		0
	];
	this.generatePolygon("diamond", n), this.generateRoundPolygon("round-diamond", n), this.generatePolygon("pentagon", generateUnitNgonPointsFitToSquare(5, 0)), this.generateRoundPolygon("round-pentagon", generateUnitNgonPointsFitToSquare(5, 0)), this.generatePolygon("hexagon", generateUnitNgonPointsFitToSquare(6, 0)), this.generateRoundPolygon("round-hexagon", generateUnitNgonPointsFitToSquare(6, 0)), this.generatePolygon("heptagon", generateUnitNgonPointsFitToSquare(7, 0)), this.generateRoundPolygon("round-heptagon", generateUnitNgonPointsFitToSquare(7, 0)), this.generatePolygon("octagon", generateUnitNgonPointsFitToSquare(8, 0)), this.generateRoundPolygon("round-octagon", generateUnitNgonPointsFitToSquare(8, 0));
	var r = Array(20), a = generateUnitNgonPoints(5, 0), o = generateUnitNgonPoints(5, Math.PI / 5), s = .5 * (3 - Math.sqrt(5));
	s *= 1.57;
	for (var c = 0; c < o.length / 2; c++) o[c * 2] *= s, o[c * 2 + 1] *= s;
	for (var c = 0; c < 20 / 4; c++) r[c * 4] = a[c * 2], r[c * 4 + 1] = a[c * 2 + 1], r[c * 4 + 2] = o[c * 2], r[c * 4 + 3] = o[c * 2 + 1];
	r = fitPolygonToSquare(r), this.generatePolygon("star", r), this.generatePolygon("vee", [
		-1,
		-1,
		0,
		-.333,
		1,
		-1,
		0,
		1
	]), this.generatePolygon("rhomboid", [
		-1,
		-1,
		.333,
		-1,
		1,
		1,
		-.333,
		1
	]), this.generatePolygon("right-rhomboid", [
		-.333,
		-1,
		1,
		-1,
		.333,
		1,
		-1,
		1
	]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [
		-1,
		-.95,
		-.75,
		0,
		-1,
		.95,
		1,
		.95,
		.75,
		0,
		1,
		-.95
	]);
	var l = [
		-1,
		-1,
		.25,
		-1,
		1,
		0,
		.25,
		1,
		-1,
		1
	];
	this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l), e.makePolygon = function(e) {
		var n = "polygon-" + e.join("$"), r;
		return (r = this[n]) ? r : t.generatePolygon(n, e);
	};
};
var BRp$1 = {};
BRp$1.timeToRender = function() {
	return this.redrawTotalTime / this.redrawCount;
}, BRp$1.redraw = function(e) {
	e ||= staticEmptyObject();
	var t = this;
	t.averageRedrawTime === void 0 && (t.averageRedrawTime = 0), t.lastRedrawTime === void 0 && (t.lastRedrawTime = 0), t.lastDrawTime === void 0 && (t.lastDrawTime = 0), t.requestedFrame = !0, t.renderOptions = e;
}, BRp$1.beforeRender = function(e, t) {
	if (!this.destroyed) {
		t ?? error("Priority is not optional for beforeRender");
		var n = this.beforeRenderCallbacks;
		n.push({
			fn: e,
			priority: t
		}), n.sort(function(e, t) {
			return t.priority - e.priority;
		});
	}
};
var beforeRenderCallbacks = function(e, t, n) {
	for (var r = e.beforeRenderCallbacks, a = 0; a < r.length; a++) r[a].fn(t, n);
};
BRp$1.startRenderLoop = function() {
	var e = this, t = e.cy;
	if (!e.renderLoopStarted) {
		e.renderLoopStarted = !0;
		var n = function(r) {
			if (!e.destroyed) {
				if (!t.batching()) if (e.requestedFrame && !e.skipFrame) {
					beforeRenderCallbacks(e, !0, r);
					var a = performanceNow();
					e.render(e.renderOptions);
					var o = e.lastDrawTime = performanceNow();
					e.averageRedrawTime === void 0 && (e.averageRedrawTime = o - a), e.redrawCount === void 0 && (e.redrawCount = 0), e.redrawCount++, e.redrawTotalTime === void 0 && (e.redrawTotalTime = 0);
					var s = o - a;
					e.redrawTotalTime += s, e.lastRedrawTime = s, e.averageRedrawTime = e.averageRedrawTime / 2 + s / 2, e.requestedFrame = !1;
				} else beforeRenderCallbacks(e, !1, r);
				e.skipFrame = !1, requestAnimationFrame(n);
			}
		};
		requestAnimationFrame(n);
	}
};
var BR = function(e) {
	this.init(e);
}, BRp = BR.prototype;
BRp.clientFunctions = [
	"redrawHint",
	"render",
	"renderTo",
	"matchCanvasSize",
	"nodeShapeImpl",
	"arrowShapeImpl"
], BRp.init = function(e) {
	var t = this;
	t.options = e, t.cy = e.cy;
	var n = t.container = e.cy.container(), r = t.cy.window();
	if (r) {
		var a = r.document, o = a.head, s = "__________cytoscape_stylesheet", c = "__________cytoscape_container", l = a.getElementById(s) != null;
		if (n.className.indexOf(c) < 0 && (n.className = (n.className || "") + " " + c), !l) {
			var u = a.createElement("style");
			u.id = s, u.textContent = "." + c + " { position: relative; }", o.insertBefore(u, o.children[0]);
		}
		r.getComputedStyle(n).getPropertyValue("position") === "static" && warn("A Cytoscape container has style position:static and so can not use UI extensions properly");
	}
	t.selection = [
		void 0,
		void 0,
		void 0,
		void 0,
		0
	], t.bezierProjPcts = [
		.05,
		.225,
		.4,
		.5,
		.6,
		.775,
		.95
	], t.hoverData = {
		down: null,
		last: null,
		downTime: null,
		triggerMode: null,
		dragging: !1,
		initialPan: [null, null],
		capture: !1
	}, t.dragData = { possibleDragElements: [] }, t.touchData = {
		start: null,
		capture: !1,
		startPosition: [
			null,
			null,
			null,
			null,
			null,
			null
		],
		singleTouchStartTime: null,
		singleTouchMoved: !0,
		now: [
			null,
			null,
			null,
			null,
			null,
			null
		],
		earlier: [
			null,
			null,
			null,
			null,
			null,
			null
		]
	}, t.redraws = 0, t.showFps = e.showFps, t.debug = e.debug, t.webgl = e.webgl, t.hideEdgesOnViewport = e.hideEdgesOnViewport, t.textureOnViewport = e.textureOnViewport, t.wheelSensitivity = e.wheelSensitivity, t.motionBlurEnabled = e.motionBlur, t.forcedPixelRatio = number$1(e.pixelRatio) ? e.pixelRatio : null, t.motionBlur = e.motionBlur, t.motionBlurOpacity = e.motionBlurOpacity, t.motionBlurTransparency = 1 - t.motionBlurOpacity, t.motionBlurPxRatio = 1, t.mbPxRBlurry = 1, t.minMbLowQualFrames = 4, t.fullQualityMb = !1, t.clearedForMotionBlur = [], t.desktopTapThreshold = e.desktopTapThreshold, t.desktopTapThreshold2 = e.desktopTapThreshold * e.desktopTapThreshold, t.touchTapThreshold = e.touchTapThreshold, t.touchTapThreshold2 = e.touchTapThreshold * e.touchTapThreshold, t.tapholdDuration = 500, t.bindings = [], t.beforeRenderCallbacks = [], t.beforeRenderPriorities = {
		animations: 400,
		eleCalcs: 300,
		eleTxrDeq: 200,
		lyrTxrDeq: 150,
		lyrTxrSkip: 100
	}, t.registerNodeShapes(), t.registerArrowShapes(), t.registerCalculationListeners();
}, BRp.notify = function(e, t) {
	var n = this, r = n.cy;
	if (!this.destroyed) {
		if (e === "init") {
			n.load();
			return;
		}
		if (e === "destroy") {
			n.destroy();
			return;
		}
		(e === "add" || e === "remove" || e === "move" && r.hasCompoundNodes() || e === "load" || e === "zorder" || e === "mount") && n.invalidateCachedZSortedEles(), e === "viewport" && n.redrawHint("select", !0), e === "gc" && n.redrawHint("gc", !0), (e === "load" || e === "resize" || e === "mount") && (n.invalidateContainerClientCoordsCache(), n.matchCanvasSize(n.container)), n.redrawHint("eles", !0), n.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
	}
}, BRp.destroy = function() {
	var e = this;
	e.destroyed = !0, e.cy.stopAnimationLoop();
	for (var t = 0; t < e.bindings.length; t++) {
		var n = e.bindings[t], r = n.target;
		(r.off || r.removeEventListener).apply(r, n.args);
	}
	if (e.bindings = [], e.beforeRenderCallbacks = [], e.onUpdateEleCalcsFns = [], e.removeObserver && e.removeObserver.disconnect(), e.styleObserver && e.styleObserver.disconnect(), e.resizeObserver && e.resizeObserver.disconnect(), e.labelCalcDiv) try {
		document.body.removeChild(e.labelCalcDiv);
	} catch {}
}, BRp.isHeadless = function() {
	return !1;
}, [
	BRp$f,
	BRp$5,
	BRp$4,
	BRp$3,
	BRp$2,
	BRp$1
].forEach(function(e) {
	extend(BRp, e);
});
var fullFpsTime = 1e3 / 60, defs = { setupDequeueing: function(e) {
	return function() {
		var t = this, n = this.renderer;
		if (!t.dequeueingSetup) {
			t.dequeueingSetup = !0;
			var r = debounce(function() {
				n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
			}, e.deqRedrawThreshold), a = function(a, o) {
				var s = performanceNow(), c = n.averageRedrawTime, l = n.lastRedrawTime, u = [], d = n.cy.extent(), f = n.getPixelRatio();
				for (a || n.flushRenderedStyleQueue();;) {
					var m = performanceNow(), h = m - s, g = m - o;
					if (l < fullFpsTime) {
						var _ = fullFpsTime - (a ? c : 0);
						if (g >= e.deqFastCost * _) break;
					} else if (a) {
						if (h >= e.deqCost * l || h >= e.deqAvgCost * c) break;
					} else if (g >= e.deqNoDrawCost * fullFpsTime) break;
					var v = e.deq(t, f, d);
					if (v.length > 0) for (var b = 0; b < v.length; b++) u.push(v[b]);
					else break;
				}
				u.length > 0 && (e.onDeqd(t, u), !a && e.shouldRedraw(t, u, f, d) && r());
			}, o = e.priority || noop$1;
			n.beforeRender(a, o(t));
		}
	};
} }, ElementTextureCacheLookup = /* @__PURE__ */ function() {
	function e(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : falsify;
		_classCallCheck(this, e), this.idsByKey = new Map$1(), this.keyForId = new Map$1(), this.cachesByLvl = new Map$1(), this.lvls = [], this.getKey = t, this.doesEleInvalidateKey = n;
	}
	return _createClass(e, [
		{
			key: "getIdsFor",
			value: function(e) {
				e ?? error("Can not get id list for null key");
				var t = this.idsByKey, n = this.idsByKey.get(e);
				return n || (n = new Set$1(), t.set(e, n)), n;
			}
		},
		{
			key: "addIdForKey",
			value: function(e, t) {
				e != null && this.getIdsFor(e).add(t);
			}
		},
		{
			key: "deleteIdForKey",
			value: function(e, t) {
				e != null && this.getIdsFor(e).delete(t);
			}
		},
		{
			key: "getNumberOfIdsForKey",
			value: function(e) {
				return e == null ? 0 : this.getIdsFor(e).size;
			}
		},
		{
			key: "updateKeyMappingFor",
			value: function(e) {
				var t = e.id(), n = this.keyForId.get(t), r = this.getKey(e);
				this.deleteIdForKey(n, t), this.addIdForKey(r, t), this.keyForId.set(t, r);
			}
		},
		{
			key: "deleteKeyMappingFor",
			value: function(e) {
				var t = e.id(), n = this.keyForId.get(t);
				this.deleteIdForKey(n, t), this.keyForId.delete(t);
			}
		},
		{
			key: "keyHasChangedFor",
			value: function(e) {
				var t = e.id();
				return this.keyForId.get(t) !== this.getKey(e);
			}
		},
		{
			key: "isInvalid",
			value: function(e) {
				return this.keyHasChangedFor(e) || this.doesEleInvalidateKey(e);
			}
		},
		{
			key: "getCachesAt",
			value: function(e) {
				var t = this.cachesByLvl, n = this.lvls, r = t.get(e);
				return r || (r = new Map$1(), t.set(e, r), n.push(e)), r;
			}
		},
		{
			key: "getCache",
			value: function(e, t) {
				return this.getCachesAt(t).get(e);
			}
		},
		{
			key: "get",
			value: function(e, t) {
				var n = this.getKey(e), r = this.getCache(n, t);
				return r != null && this.updateKeyMappingFor(e), r;
			}
		},
		{
			key: "getForCachedKey",
			value: function(e, t) {
				var n = this.keyForId.get(e.id());
				return this.getCache(n, t);
			}
		},
		{
			key: "hasCache",
			value: function(e, t) {
				return this.getCachesAt(t).has(e);
			}
		},
		{
			key: "has",
			value: function(e, t) {
				var n = this.getKey(e);
				return this.hasCache(n, t);
			}
		},
		{
			key: "setCache",
			value: function(e, t, n) {
				n.key = e, this.getCachesAt(t).set(e, n);
			}
		},
		{
			key: "set",
			value: function(e, t, n) {
				var r = this.getKey(e);
				this.setCache(r, t, n), this.updateKeyMappingFor(e);
			}
		},
		{
			key: "deleteCache",
			value: function(e, t) {
				this.getCachesAt(t).delete(e);
			}
		},
		{
			key: "delete",
			value: function(e, t) {
				var n = this.getKey(e);
				this.deleteCache(n, t);
			}
		},
		{
			key: "invalidateKey",
			value: function(e) {
				var t = this;
				this.lvls.forEach(function(n) {
					return t.deleteCache(e, n);
				});
			}
		},
		{
			key: "invalidate",
			value: function(e) {
				var t = e.id(), n = this.keyForId.get(t);
				this.deleteKeyMappingFor(e);
				var r = this.doesEleInvalidateKey(e);
				return r && this.invalidateKey(n), r || this.getNumberOfIdsForKey(n) === 0;
			}
		}
	]);
}(), minTxrH = 25, txrStepH = 50, minLvl$1 = -4, maxLvl$1 = 3, maxZoom$1 = 7.99, eleTxrSpacing = 8, defTxrWidth = 1024, maxTxrW = 1024, maxTxrH = 1024, minUtility = .2, maxFullness = .8, maxFullnessChecks = 10, deqCost$1 = .15, deqAvgCost$1 = .1, deqNoDrawCost$1 = .9, deqFastCost$1 = .9, deqRedrawThreshold$1 = 100, maxDeqSize$1 = 1, getTxrReasons = {
	dequeue: "dequeue",
	downscale: "downscale",
	highQuality: "highQuality"
}, initDefaults = defaults$g({
	getKey: null,
	doesEleInvalidateKey: falsify,
	drawElement: null,
	getBoundingBox: null,
	getRotationPoint: null,
	getRotationOffset: null,
	isVisible: trueify,
	allowEdgeTxrCaching: !0,
	allowParentTxrCaching: !0
}), ElementTextureCache = function(e, t) {
	var n = this;
	n.renderer = e, n.onDequeues = [];
	var r = initDefaults(t);
	extend(n, r), n.lookup = new ElementTextureCacheLookup(r.getKey, r.doesEleInvalidateKey), n.setupDequeueing();
}, ETCp = ElementTextureCache.prototype;
ETCp.reasons = getTxrReasons, ETCp.getTextureQueue = function(e) {
	var t = this;
	return t.eleImgCaches = t.eleImgCaches || {}, t.eleImgCaches[e] = t.eleImgCaches[e] || [];
}, ETCp.getRetiredTextureQueue = function(e) {
	var t = this, n = t.eleImgCaches.retired = t.eleImgCaches.retired || {};
	return n[e] = n[e] || [];
}, ETCp.getElementQueue = function() {
	var e = this;
	return e.eleCacheQueue = e.eleCacheQueue || new Heap(function(e, t) {
		return t.reqs - e.reqs;
	});
}, ETCp.getElementKeyToQueue = function() {
	var e = this;
	return e.eleKeyToCacheQueue = e.eleKeyToCacheQueue || {};
}, ETCp.getElement = function(e, t, n, r, a) {
	var o = this, s = this.renderer, c = s.cy.zoom(), l = this.lookup;
	if (!t || t.w === 0 || t.h === 0 || isNaN(t.w) || isNaN(t.h) || !e.visible() || e.removed() || !o.allowEdgeTxrCaching && e.isEdge() || !o.allowParentTxrCaching && e.isParent()) return null;
	if (r ??= Math.ceil(log2(c * n)), r < minLvl$1) r = minLvl$1;
	else if (c >= maxZoom$1 || r > maxLvl$1) return null;
	var u = 2 ** r, d = t.h * u, f = t.w * u, m = s.eleTextBiggerThanMin(e, u);
	if (!this.isVisible(e, m)) return null;
	var h = l.get(e, r);
	if (h && h.invalidated && (h.invalidated = !1, h.texture.invalidatedWidth -= h.width), h) return h;
	var g = d <= minTxrH ? minTxrH : d <= txrStepH ? txrStepH : Math.ceil(d / txrStepH) * txrStepH;
	if (d > maxTxrH || f > maxTxrW) return null;
	var _ = o.getTextureQueue(g), v = _[_.length - 2], b = function() {
		return o.recycleTexture(g, f) || o.addTexture(g, f);
	};
	v ||= _[_.length - 1], v ||= b(), v.width - v.usedWidth < f && (v = b());
	for (var S = function(e) {
		return e && e.scaledLabelShown === m;
	}, C = a && a === getTxrReasons.dequeue, w = a && a === getTxrReasons.highQuality, T = a && a === getTxrReasons.downscale, E, D = r + 1; D <= maxLvl$1; D++) {
		var O = l.get(e, D);
		if (O) {
			E = O;
			break;
		}
	}
	var k = E && E.level === r + 1 ? E : null, A = function() {
		v.context.drawImage(k.texture.canvas, k.x, 0, k.width, k.height, v.usedWidth, 0, f, d);
	};
	if (v.context.setTransform(1, 0, 0, 1, 0, 0), v.context.clearRect(v.usedWidth, 0, f, g), S(k)) A();
	else if (S(E)) if (w) {
		for (var j = E.level; j > r; j--) k = o.getElement(e, t, n, j, getTxrReasons.downscale);
		A();
	} else return o.queueElement(e, E.level - 1), E;
	else {
		var M;
		if (!C && !w && !T) for (var N = r - 1; N >= minLvl$1; N--) {
			var P = l.get(e, N);
			if (P) {
				M = P;
				break;
			}
		}
		if (S(M)) return o.queueElement(e, r), M;
		v.context.translate(v.usedWidth, 0), v.context.scale(u, u), this.drawElement(v.context, e, t, m, !1), v.context.scale(1 / u, 1 / u), v.context.translate(-v.usedWidth, 0);
	}
	return h = {
		x: v.usedWidth,
		texture: v,
		level: r,
		scale: u,
		width: f,
		height: d,
		scaledLabelShown: m
	}, v.usedWidth += Math.ceil(f + eleTxrSpacing), v.eleCaches.push(h), l.set(e, r, h), o.checkTextureFullness(v), h;
}, ETCp.invalidateElements = function(e) {
	for (var t = 0; t < e.length; t++) this.invalidateElement(e[t]);
}, ETCp.invalidateElement = function(e) {
	var t = this, n = t.lookup, r = [];
	if (n.isInvalid(e)) {
		for (var a = minLvl$1; a <= maxLvl$1; a++) {
			var o = n.getForCachedKey(e, a);
			o && r.push(o);
		}
		if (n.invalidate(e)) for (var s = 0; s < r.length; s++) {
			var c = r[s], l = c.texture;
			l.invalidatedWidth += c.width, c.invalidated = !0, t.checkTextureUtility(l);
		}
		t.removeFromQueue(e);
	}
}, ETCp.checkTextureUtility = function(e) {
	e.invalidatedWidth >= minUtility * e.width && this.retireTexture(e);
}, ETCp.checkTextureFullness = function(e) {
	var t = this.getTextureQueue(e.height);
	e.usedWidth / e.width > maxFullness && e.fullnessChecks >= maxFullnessChecks ? removeFromArray(t, e) : e.fullnessChecks++;
}, ETCp.retireTexture = function(e) {
	var t = this, n = e.height, r = t.getTextureQueue(n), a = this.lookup;
	removeFromArray(r, e), e.retired = !0;
	for (var o = e.eleCaches, s = 0; s < o.length; s++) {
		var c = o[s];
		a.deleteCache(c.key, c.level);
	}
	clearArray(o), t.getRetiredTextureQueue(n).push(e);
}, ETCp.addTexture = function(e, t) {
	var n = this, r = n.getTextureQueue(e), a = {};
	return r.push(a), a.eleCaches = [], a.height = e, a.width = Math.max(defTxrWidth, t), a.usedWidth = 0, a.invalidatedWidth = 0, a.fullnessChecks = 0, a.canvas = n.renderer.makeOffscreenCanvas(a.width, a.height), a.context = a.canvas.getContext("2d"), a;
}, ETCp.recycleTexture = function(e, t) {
	for (var n = this, r = n.getTextureQueue(e), a = n.getRetiredTextureQueue(e), o = 0; o < a.length; o++) {
		var s = a[o];
		if (s.width >= t) return s.retired = !1, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, clearArray(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), removeFromArray(a, s), r.push(s), s;
	}
}, ETCp.queueElement = function(e, t) {
	var n = this, r = n.getElementQueue(), a = n.getElementKeyToQueue(), o = this.getKey(e), s = a[o];
	if (s) s.level = Math.max(s.level, t), s.eles.merge(e), s.reqs++, r.updateItem(s);
	else {
		var c = {
			eles: e.spawn().merge(e),
			level: t,
			reqs: 1,
			key: o
		};
		r.push(c), a[o] = c;
	}
}, ETCp.dequeue = function(e) {
	for (var t = this, n = t.getElementQueue(), r = t.getElementKeyToQueue(), a = [], o = t.lookup, s = 0; s < maxDeqSize$1 && n.size() > 0; s++) {
		var c = n.pop(), l = c.key, u = c.eles[0], d = o.hasCache(u, c.level);
		if (r[l] = null, !d) {
			a.push(c);
			var f = t.getBoundingBox(u);
			t.getElement(u, f, e, c.level, getTxrReasons.dequeue);
		}
	}
	return a;
}, ETCp.removeFromQueue = function(e) {
	var t = this, n = t.getElementQueue(), r = t.getElementKeyToQueue(), a = this.getKey(e), o = r[a];
	o != null && (o.eles.length === 1 ? (o.reqs = MAX_INT$1, n.updateItem(o), n.pop(), r[a] = null) : o.eles.unmerge(e));
}, ETCp.onDequeue = function(e) {
	this.onDequeues.push(e);
}, ETCp.offDequeue = function(e) {
	removeFromArray(this.onDequeues, e);
}, ETCp.setupDequeueing = defs.setupDequeueing({
	deqRedrawThreshold: deqRedrawThreshold$1,
	deqCost: deqCost$1,
	deqAvgCost: deqAvgCost$1,
	deqNoDrawCost: deqNoDrawCost$1,
	deqFastCost: deqFastCost$1,
	deq: function(e, t, n) {
		return e.dequeue(t, n);
	},
	onDeqd: function(e, t) {
		for (var n = 0; n < e.onDequeues.length; n++) {
			var r = e.onDequeues[n];
			r(t);
		}
	},
	shouldRedraw: function(e, t, n, r) {
		for (var a = 0; a < t.length; a++) for (var o = t[a].eles, s = 0; s < o.length; s++) if (boundingBoxesIntersect(o[s].boundingBox(), r)) return !0;
		return !1;
	},
	priority: function(e) {
		return e.renderer.beforeRenderPriorities.eleTxrDeq;
	}
});
var defNumLayers = 1, minLvl = -4, maxLvl = 2, maxZoom = 3.99, deqRedrawThreshold = 50, refineEleDebounceTime = 50, deqCost = .15, deqAvgCost = .1, deqNoDrawCost = .9, deqFastCost = .9, maxDeqSize = 1, invalidThreshold = 250, maxLayerArea = 4e3 * 4e3, maxLayerDim = 32767, useHighQualityEleTxrReqs = !0, LayeredTextureCache = function(e) {
	var t = this, n = t.renderer = e, r = n.cy;
	t.layersByLevel = {}, t.firstGet = !0, t.lastInvalidationTime = performanceNow() - 2 * invalidThreshold, t.skipping = !1, t.eleTxrDeqs = r.collection(), t.scheduleElementRefinement = debounce(function() {
		t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
	}, refineEleDebounceTime), n.beforeRender(function(e, n) {
		n - t.lastInvalidationTime <= invalidThreshold ? t.skipping = !0 : t.skipping = !1;
	}, n.beforeRenderPriorities.lyrTxrSkip), t.layersQueue = new Heap(function(e, t) {
		return t.reqs - e.reqs;
	}), t.setupDequeueing();
}, LTCp = LayeredTextureCache.prototype, layerIdPool = 0, MAX_INT = 2 ** 53 - 1;
LTCp.makeLayer = function(e, t) {
	var n = 2 ** t, r = Math.ceil(e.w * n), a = Math.ceil(e.h * n), o = this.renderer.makeOffscreenCanvas(r, a), s = {
		id: layerIdPool = ++layerIdPool % MAX_INT,
		bb: e,
		level: t,
		width: r,
		height: a,
		canvas: o,
		context: o.getContext("2d"),
		eles: [],
		elesQueue: [],
		reqs: 0
	}, c = s.context, l = -s.bb.x1, u = -s.bb.y1;
	return c.scale(n, n), c.translate(l, u), s;
}, LTCp.getLayers = function(e, t, n) {
	var r = this, a = r.renderer.cy.zoom(), o = r.firstGet;
	if (r.firstGet = !1, n == null) {
		if (n = Math.ceil(log2(a * t)), n < minLvl) n = minLvl;
		else if (a >= maxZoom || n > maxLvl) return null;
	}
	r.validateLayersElesOrdering(n, e);
	var s = r.layersByLevel, c = 2 ** n, l = s[n] = s[n] || [], u, d = r.levelIsComplete(n, e), f, m = function() {
		var t = function(t) {
			if (r.validateLayersElesOrdering(t, e), r.levelIsComplete(t, e)) return f = s[t], !0;
		}, a = function(e) {
			if (!f) for (var r = n + e; minLvl <= r && r <= maxLvl && !t(r); r += e);
		};
		a(1), a(-1);
		for (var o = l.length - 1; o >= 0; o--) {
			var c = l[o];
			c.invalid && removeFromArray(l, c);
		}
	};
	if (!d) m();
	else return l;
	var h = function() {
		if (!u) {
			u = makeBoundingBox();
			for (var t = 0; t < e.length; t++) updateBoundingBox(u, e[t].boundingBox());
		}
		return u;
	}, g = function(e) {
		e ||= {};
		var t = e.after;
		h();
		var a = Math.ceil(u.w * c), o = Math.ceil(u.h * c);
		if (a > maxLayerDim || o > maxLayerDim || a * o > maxLayerArea) return null;
		var s = r.makeLayer(u, n);
		if (t != null) {
			var d = l.indexOf(t) + 1;
			l.splice(d, 0, s);
		} else (e.insert === void 0 || e.insert) && l.unshift(s);
		return s;
	};
	if (r.skipping && !o) return null;
	for (var _ = null, v = e.length / defNumLayers, b = !o, S = 0; S < e.length; S++) {
		var C = e[S], w = C._private.rscratch, T = w.imgLayerCaches = w.imgLayerCaches || {}, E = T[n];
		if (E) {
			_ = E;
			continue;
		}
		if ((!_ || _.eles.length >= v || !boundingBoxInBoundingBox(_.bb, C.boundingBox())) && (_ = g({
			insert: !0,
			after: _
		}), !_)) return null;
		f || b ? r.queueLayer(_, C) : r.drawEleInLayer(_, C, n, t), _.eles.push(C), T[n] = _;
	}
	return f || (b ? null : l);
}, LTCp.getEleLevelForLayerLevel = function(e, t) {
	return e;
}, LTCp.drawEleInLayer = function(e, t, n, r) {
	var a = this, o = this.renderer, s = e.context, c = t.boundingBox();
	c.w === 0 || c.h === 0 || !t.visible() || (n = a.getEleLevelForLayerLevel(n, r), o.setImgSmoothing(s, !1), o.drawCachedElement(s, t, null, null, n, useHighQualityEleTxrReqs), o.setImgSmoothing(s, !0));
}, LTCp.levelIsComplete = function(e, t) {
	var n = this.layersByLevel[e];
	if (!n || n.length === 0) return !1;
	for (var r = 0, a = 0; a < n.length; a++) {
		var o = n[a];
		if (o.reqs > 0 || o.invalid) return !1;
		r += o.eles.length;
	}
	return r === t.length;
}, LTCp.validateLayersElesOrdering = function(e, t) {
	var n = this.layersByLevel[e];
	if (n) for (var r = 0; r < n.length; r++) {
		for (var a = n[r], o = -1, s = 0; s < t.length; s++) if (a.eles[0] === t[s]) {
			o = s;
			break;
		}
		if (o < 0) {
			this.invalidateLayer(a);
			continue;
		}
		for (var c = o, s = 0; s < a.eles.length; s++) if (a.eles[s] !== t[c + s]) {
			this.invalidateLayer(a);
			break;
		}
	}
}, LTCp.updateElementsInLayers = function(e, t) {
	for (var n = this, r = element(e[0]), a = 0; a < e.length; a++) for (var o = r ? null : e[a], s = r ? e[a] : e[a].ele, c = s._private.rscratch, l = c.imgLayerCaches = c.imgLayerCaches || {}, u = minLvl; u <= maxLvl; u++) {
		var d = l[u];
		d && (o && n.getEleLevelForLayerLevel(d.level) !== o.level || t(d, s, o));
	}
}, LTCp.haveLayers = function() {
	for (var e = this, t = !1, n = minLvl; n <= maxLvl; n++) {
		var r = e.layersByLevel[n];
		if (r && r.length > 0) {
			t = !0;
			break;
		}
	}
	return t;
}, LTCp.invalidateElements = function(e) {
	var t = this;
	e.length !== 0 && (t.lastInvalidationTime = performanceNow(), !(e.length === 0 || !t.haveLayers()) && t.updateElementsInLayers(e, function(e, n, r) {
		t.invalidateLayer(e);
	}));
}, LTCp.invalidateLayer = function(e) {
	if (this.lastInvalidationTime = performanceNow(), !e.invalid) {
		var t = e.level, n = e.eles, r = this.layersByLevel[t];
		removeFromArray(r, e), e.elesQueue = [], e.invalid = !0, e.replacement && (e.replacement.invalid = !0);
		for (var a = 0; a < n.length; a++) {
			var o = n[a]._private.rscratch.imgLayerCaches;
			o && (o[t] = null);
		}
	}
}, LTCp.refineElementTextures = function(e) {
	var t = this;
	t.updateElementsInLayers(e, function(e, n, r) {
		var a = e.replacement;
		if (a || (a = e.replacement = t.makeLayer(e.bb, e.level), a.replaces = e, a.eles = e.eles), !a.reqs) for (var o = 0; o < a.eles.length; o++) t.queueLayer(a, a.eles[o]);
	});
}, LTCp.enqueueElementRefinement = function(e) {
	this.eleTxrDeqs.merge(e), this.scheduleElementRefinement();
}, LTCp.queueLayer = function(e, t) {
	var n = this.layersQueue, r = e.elesQueue, a = r.hasId = r.hasId || {};
	if (!e.replacement) {
		if (t) {
			if (a[t.id()]) return;
			r.push(t), a[t.id()] = !0;
		}
		e.reqs ? (e.reqs++, n.updateItem(e)) : (e.reqs = 1, n.push(e));
	}
}, LTCp.dequeue = function(e) {
	for (var t = this, n = t.layersQueue, r = [], a = 0; a < maxDeqSize && n.size() !== 0;) {
		var o = n.peek();
		if (o.replacement) {
			n.pop();
			continue;
		}
		if (o.replaces && o !== o.replaces.replacement) {
			n.pop();
			continue;
		}
		if (o.invalid) {
			n.pop();
			continue;
		}
		var s = o.elesQueue.shift();
		s && (t.drawEleInLayer(o, s, o.level, e), a++), r.length === 0 && r.push(!0), o.elesQueue.length === 0 && (n.pop(), o.reqs = 0, o.replaces && t.applyLayerReplacement(o), t.requestRedraw());
	}
	return r;
}, LTCp.applyLayerReplacement = function(e) {
	var t = this, n = t.layersByLevel[e.level], r = e.replaces, a = n.indexOf(r);
	if (!(a < 0 || r.invalid)) {
		n[a] = e;
		for (var o = 0; o < e.eles.length; o++) {
			var s = e.eles[o]._private, c = s.imgLayerCaches = s.imgLayerCaches || {};
			c && (c[e.level] = e);
		}
		t.requestRedraw();
	}
}, LTCp.requestRedraw = debounce(function() {
	var e = this.renderer;
	e.redrawHint("eles", !0), e.redrawHint("drag", !0), e.redraw();
}, 100), LTCp.setupDequeueing = defs.setupDequeueing({
	deqRedrawThreshold,
	deqCost,
	deqAvgCost,
	deqNoDrawCost,
	deqFastCost,
	deq: function(e, t) {
		return e.dequeue(t);
	},
	onDeqd: noop$1,
	shouldRedraw: trueify,
	priority: function(e) {
		return e.renderer.beforeRenderPriorities.lyrTxrDeq;
	}
});
var CRp$b = {}, impl;
function polygon(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		e.lineTo(r.x, r.y);
	}
}
function triangleBackcurve(e, t, n) {
	for (var r, a = 0; a < t.length; a++) {
		var o = t[a];
		a === 0 && (r = o), e.lineTo(o.x, o.y);
	}
	e.quadraticCurveTo(n.x, n.y, r.x, r.y);
}
function triangleTee(e, t, n) {
	e.beginPath && e.beginPath();
	for (var r = t, a = 0; a < r.length; a++) {
		var o = r[a];
		e.lineTo(o.x, o.y);
	}
	var s = n, c = n[0];
	e.moveTo(c.x, c.y);
	for (var a = 1; a < s.length; a++) {
		var o = s[a];
		e.lineTo(o.x, o.y);
	}
	e.closePath && e.closePath();
}
function circleTriangle(e, t, n, r, a) {
	e.beginPath && e.beginPath(), e.arc(n, r, a, 0, Math.PI * 2, !1);
	var o = t, s = o[0];
	e.moveTo(s.x, s.y);
	for (var c = 0; c < o.length; c++) {
		var l = o[c];
		e.lineTo(l.x, l.y);
	}
	e.closePath && e.closePath();
}
function circle$1(e, t, n, r) {
	e.arc(t, n, r, 0, Math.PI * 2, !1);
}
CRp$b.arrowShapeImpl = function(e) {
	return (impl ||= {
		polygon,
		"triangle-backcurve": triangleBackcurve,
		"triangle-tee": triangleTee,
		"circle-triangle": circleTriangle,
		"triangle-cross": triangleTee,
		circle: circle$1
	})[e];
};
var CRp$a = {};
CRp$a.drawElement = function(e, t, n, r, a, o) {
	var s = this;
	t.isNode() ? s.drawNode(e, t, n, r, a, o) : s.drawEdge(e, t, n, r, a, o);
}, CRp$a.drawElementOverlay = function(e, t) {
	var n = this;
	t.isNode() ? n.drawNodeOverlay(e, t) : n.drawEdgeOverlay(e, t);
}, CRp$a.drawElementUnderlay = function(e, t) {
	var n = this;
	t.isNode() ? n.drawNodeUnderlay(e, t) : n.drawEdgeUnderlay(e, t);
}, CRp$a.drawCachedElementPortion = function(e, t, n, r, a, o, s, c) {
	var l = this, u = n.getBoundingBox(t);
	if (!(u.w === 0 || u.h === 0)) {
		var d = n.getElement(t, u, r, a, o);
		if (d != null) {
			var f = c(l, t);
			if (f === 0) return;
			var m = s(l, t), h = u.x1, g = u.y1, _ = u.w, v = u.h, b, S, C, w, T;
			if (m !== 0) {
				var E = n.getRotationPoint(t);
				C = E.x, w = E.y, e.translate(C, w), e.rotate(m), T = l.getImgSmoothing(e), T || l.setImgSmoothing(e, !0);
				var D = n.getRotationOffset(t);
				b = D.x, S = D.y;
			} else b = h, S = g;
			var O;
			f !== 1 && (O = e.globalAlpha, e.globalAlpha = O * f), e.drawImage(d.texture.canvas, d.x, 0, d.width, d.height, b, S, _, v), f !== 1 && (e.globalAlpha = O), m !== 0 && (e.rotate(-m), e.translate(-C, -w), T || l.setImgSmoothing(e, !1));
		} else n.drawElement(e, t);
	}
};
var getZeroRotation = function() {
	return 0;
}, getLabelRotation = function(e, t) {
	return e.getTextAngle(t, null);
}, getSourceLabelRotation = function(e, t) {
	return e.getTextAngle(t, "source");
}, getTargetLabelRotation = function(e, t) {
	return e.getTextAngle(t, "target");
}, getOpacity = function(e, t) {
	return t.effectiveOpacity();
}, getTextOpacity = function(e, t) {
	return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
};
CRp$a.drawCachedElement = function(e, t, n, r, a, o) {
	var s = this, c = s.data, l = c.eleTxrCache, u = c.lblTxrCache, d = c.slbTxrCache, f = c.tlbTxrCache, m = t.boundingBox(), h = o === !0 ? l.reasons.highQuality : null;
	if (!(m.w === 0 || m.h === 0 || !t.visible()) && (!r || boundingBoxesIntersect(m, r))) {
		var g = t.isEdge(), _ = t.element()._private.rscratch.badLine;
		s.drawElementUnderlay(e, t), s.drawCachedElementPortion(e, t, l, n, a, h, getZeroRotation, getOpacity), (!g || !_) && s.drawCachedElementPortion(e, t, u, n, a, h, getLabelRotation, getTextOpacity), g && !_ && (s.drawCachedElementPortion(e, t, d, n, a, h, getSourceLabelRotation, getTextOpacity), s.drawCachedElementPortion(e, t, f, n, a, h, getTargetLabelRotation, getTextOpacity)), s.drawElementOverlay(e, t);
	}
}, CRp$a.drawElements = function(e, t) {
	for (var n = this, r = 0; r < t.length; r++) {
		var a = t[r];
		n.drawElement(e, a);
	}
}, CRp$a.drawCachedElements = function(e, t, n, r) {
	for (var a = this, o = 0; o < t.length; o++) {
		var s = t[o];
		a.drawCachedElement(e, s, n, r);
	}
}, CRp$a.drawCachedNodes = function(e, t, n, r) {
	for (var a = this, o = 0; o < t.length; o++) {
		var s = t[o];
		s.isNode() && a.drawCachedElement(e, s, n, r);
	}
}, CRp$a.drawLayeredElements = function(e, t, n, r) {
	var a = this, o = a.data.lyrTxrCache.getLayers(t, n);
	if (o) for (var s = 0; s < o.length; s++) {
		var c = o[s], l = c.bb;
		l.w === 0 || l.h === 0 || e.drawImage(c.canvas, l.x1, l.y1, l.w, l.h);
	}
	else a.drawCachedElements(e, t, n, r);
};
var CRp$9 = {};
CRp$9.drawEdge = function(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, c = t._private.rscratch;
	if (!(o && !t.visible()) && !(c.badLine || c.allpts == null || isNaN(c.allpts[0]))) {
		var l;
		n && (l = n, e.translate(-l.x1, -l.y1));
		var u = o ? t.pstyle("opacity").value : 1, d = o ? t.pstyle("line-opacity").value : 1, f = t.pstyle("curve-style").value, m = t.pstyle("line-style").value, h = t.pstyle("width").pfValue, g = t.pstyle("line-cap").value, _ = t.pstyle("line-outline-width").value, v = t.pstyle("line-outline-color").value, b = u * d, S = u * d, C = function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b;
			f === "straight-triangle" ? (s.eleStrokeStyle(e, t, n), s.drawEdgeTrianglePath(t, e, c.allpts)) : (e.lineWidth = h, e.lineCap = g, s.eleStrokeStyle(e, t, n), s.drawEdgePath(t, e, c.allpts, m), e.lineCap = "butt");
		}, w = function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b;
			if (e.lineWidth = h + _, e.lineCap = g, _ > 0) s.colorStrokeStyle(e, v[0], v[1], v[2], n);
			else {
				e.lineCap = "butt";
				return;
			}
			f === "straight-triangle" ? s.drawEdgeTrianglePath(t, e, c.allpts) : (s.drawEdgePath(t, e, c.allpts, m), e.lineCap = "butt");
		}, T = function() {
			a && s.drawEdgeOverlay(e, t);
		}, E = function() {
			a && s.drawEdgeUnderlay(e, t);
		}, D = function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S;
			s.drawArrowheads(e, t, n);
		}, O = function() {
			s.drawElementText(e, t, null, r);
		};
		if (e.lineJoin = "round", t.pstyle("ghost").value === "yes") {
			var k = t.pstyle("ghost-offset-x").pfValue, A = t.pstyle("ghost-offset-y").pfValue, j = b * t.pstyle("ghost-opacity").value;
			e.translate(k, A), C(j), D(j), e.translate(-k, -A);
		} else w();
		E(), C(), D(), T(), O(), n && e.translate(l.x1, l.y1);
	}
};
var drawEdgeOverlayUnderlay = function(e) {
	if (!["overlay", "underlay"].includes(e)) throw Error("Invalid state");
	return function(t, n) {
		if (n.visible()) {
			var r = n.pstyle(`${e}-opacity`).value;
			if (r !== 0) {
				var a = this, o = a.usePaths(), s = n._private.rscratch, c = 2 * n.pstyle(`${e}-padding`).pfValue, l = n.pstyle(`${e}-color`).value;
				t.lineWidth = c, s.edgeType === "self" && !o ? t.lineCap = "butt" : t.lineCap = "round", a.colorStrokeStyle(t, l[0], l[1], l[2], r), a.drawEdgePath(n, t, s.allpts, "solid");
			}
		}
	};
};
CRp$9.drawEdgeOverlay = drawEdgeOverlayUnderlay("overlay"), CRp$9.drawEdgeUnderlay = drawEdgeOverlayUnderlay("underlay"), CRp$9.drawEdgePath = function(e, t, n, r) {
	var a = e._private.rscratch, o = t, s, c = !1, u = this.usePaths(), d = e.pstyle("line-dash-pattern").pfValue, f = e.pstyle("line-dash-offset").pfValue;
	if (u) {
		var m = n.join("$");
		a.pathCacheKey && a.pathCacheKey === m ? (s = t = a.pathCache, c = !0) : (s = t = new Path2D(), a.pathCacheKey = m, a.pathCache = s);
	}
	if (o.setLineDash) switch (r) {
		case "dotted":
			o.setLineDash([1, 1]);
			break;
		case "dashed":
			o.setLineDash(d), o.lineDashOffset = f;
			break;
		case "solid":
			o.setLineDash([]);
			break;
	}
	if (!c && !a.badLine) switch (t.beginPath && t.beginPath(), t.moveTo(n[0], n[1]), a.edgeType) {
		case "bezier":
		case "self":
		case "compound":
		case "multibezier":
			for (var h = 2; h + 3 < n.length; h += 4) t.quadraticCurveTo(n[h], n[h + 1], n[h + 2], n[h + 3]);
			break;
		case "straight":
		case "haystack":
			for (var g = 2; g + 1 < n.length; g += 2) t.lineTo(n[g], n[g + 1]);
			break;
		case "segments":
			if (a.isRound) {
				var _ = _createForOfIteratorHelper(a.roundCorners), v;
				try {
					for (_.s(); !(v = _.n()).done;) {
						var b = v.value;
						drawPreparedRoundCorner(t, b);
					}
				} catch (e) {
					_.e(e);
				} finally {
					_.f();
				}
				t.lineTo(n[n.length - 2], n[n.length - 1]);
			} else for (var S = 2; S + 1 < n.length; S += 2) t.lineTo(n[S], n[S + 1]);
			break;
	}
	t = o, u ? t.stroke(s) : t.stroke(), t.setLineDash && t.setLineDash([]);
}, CRp$9.drawEdgeTrianglePath = function(e, t, n) {
	t.fillStyle = t.strokeStyle;
	for (var r = e.pstyle("width").pfValue, a = 0; a + 1 < n.length; a += 2) {
		var o = [n[a + 2] - n[a], n[a + 3] - n[a + 1]], s = Math.sqrt(o[0] * o[0] + o[1] * o[1]), c = [o[1] / s, -o[0] / s], l = [c[0] * r / 2, c[1] * r / 2];
		t.beginPath(), t.moveTo(n[a] - l[0], n[a + 1] - l[1]), t.lineTo(n[a] + l[0], n[a + 1] + l[1]), t.lineTo(n[a + 2], n[a + 3]), t.closePath(), t.fill();
	}
}, CRp$9.drawArrowheads = function(e, t, n) {
	var r = t._private.rscratch, a = r.edgeType === "haystack";
	a || this.drawArrowhead(e, t, "source", r.arrowStartX, r.arrowStartY, r.srcArrowAngle, n), this.drawArrowhead(e, t, "mid-target", r.midX, r.midY, r.midtgtArrowAngle, n), this.drawArrowhead(e, t, "mid-source", r.midX, r.midY, r.midsrcArrowAngle, n), a || this.drawArrowhead(e, t, "target", r.arrowEndX, r.arrowEndY, r.tgtArrowAngle, n);
}, CRp$9.drawArrowhead = function(e, t, n, r, a, o, s) {
	if (!(isNaN(r) || r == null || isNaN(a) || a == null || isNaN(o) || o == null)) {
		var c = this, l = t.pstyle(n + "-arrow-shape").value;
		if (l !== "none") {
			var u = t.pstyle(n + "-arrow-fill").value === "hollow" ? "both" : "filled", d = t.pstyle(n + "-arrow-fill").value, f = t.pstyle("width").pfValue, m = t.pstyle(n + "-arrow-width"), h = m.value === "match-line" ? f : m.pfValue;
			m.units === "%" && (h *= f);
			var g = t.pstyle("opacity").value;
			s === void 0 && (s = g);
			var _ = e.globalCompositeOperation;
			(s !== 1 || d === "hollow") && (e.globalCompositeOperation = "destination-out", c.colorFillStyle(e, 255, 255, 255, 1), c.colorStrokeStyle(e, 255, 255, 255, 1), c.drawArrowShape(t, e, u, f, l, h, r, a, o), e.globalCompositeOperation = _);
			var v = t.pstyle(n + "-arrow-color").value;
			c.colorFillStyle(e, v[0], v[1], v[2], s), c.colorStrokeStyle(e, v[0], v[1], v[2], s), c.drawArrowShape(t, e, d, f, l, h, r, a, o);
		}
	}
}, CRp$9.drawArrowShape = function(e, t, n, r, a, o, s, c, l) {
	var u = this, d = this.usePaths() && a !== "triangle-cross", f = !1, m, h = t, g = {
		x: s,
		y: c
	}, _ = e.pstyle("arrow-scale").value, v = this.getArrowWidth(r, _), b = u.arrowShapes[a];
	if (d) {
		var S = u.arrowPathCache = u.arrowPathCache || [], C = hashString(a), w = S[C];
		w == null ? (m = t = new Path2D(), S[C] = m) : (m = t = w, f = !0);
	}
	f || (t.beginPath && t.beginPath(), d ? b.draw(t, 1, 0, {
		x: 0,
		y: 0
	}, 1) : b.draw(t, v, l, g, r), t.closePath && t.closePath()), t = h, d && (t.translate(s, c), t.rotate(l), t.scale(v, v)), (n === "filled" || n === "both") && (d ? t.fill(m) : t.fill()), (n === "hollow" || n === "both") && (t.lineWidth = o / (d ? v : 1), t.lineJoin = "miter", d ? t.stroke(m) : t.stroke()), d && (t.scale(1 / v, 1 / v), t.rotate(-l), t.translate(-s, -c));
};
var CRp$8 = {};
CRp$8.safeDrawImage = function(e, t, n, r, a, o, s, c, l, u) {
	if (!(a <= 0 || o <= 0 || l <= 0 || u <= 0)) try {
		e.drawImage(t, n, r, a, o, s, c, l, u);
	} catch (e) {
		warn(e);
	}
}, CRp$8.drawInscribedImage = function(e, t, n, r, a) {
	var o = this, s = n.position(), c = s.x, l = s.y, u = n.cy().style(), d = u.getIndexedStyle.bind(u), f = d(n, "background-fit", "value", r), m = d(n, "background-repeat", "value", r), h = n.width(), g = n.height(), _ = n.padding() * 2, v = h + (d(n, "background-width-relative-to", "value", r) === "inner" ? 0 : _), b = g + (d(n, "background-height-relative-to", "value", r) === "inner" ? 0 : _), S = n._private.rscratch, C = d(n, "background-clip", "value", r) === "node", w = d(n, "background-image-opacity", "value", r) * a, T = d(n, "background-image-smoothing", "value", r), E = n.pstyle("corner-radius").value;
	E !== "auto" && (E = n.pstyle("corner-radius").pfValue);
	var D = t.width || t.cachedW, O = t.height || t.cachedH;
	(D == null || O == null) && (document.body.appendChild(t), D = t.cachedW = t.width || t.offsetWidth, O = t.cachedH = t.height || t.offsetHeight, document.body.removeChild(t));
	var k = D, A = O;
	if (d(n, "background-width", "value", r) !== "auto" && (k = d(n, "background-width", "units", r) === "%" ? d(n, "background-width", "pfValue", r) * v : d(n, "background-width", "pfValue", r)), d(n, "background-height", "value", r) !== "auto" && (A = d(n, "background-height", "units", r) === "%" ? d(n, "background-height", "pfValue", r) * b : d(n, "background-height", "pfValue", r)), !(k === 0 || A === 0)) {
		if (f === "contain") {
			var j = Math.min(v / k, b / A);
			k *= j, A *= j;
		} else if (f === "cover") {
			var j = Math.max(v / k, b / A);
			k *= j, A *= j;
		}
		var M = c - v / 2, N = d(n, "background-position-x", "units", r), P = d(n, "background-position-x", "pfValue", r);
		N === "%" ? M += (v - k) * P : M += P;
		var F = d(n, "background-offset-x", "units", r), I = d(n, "background-offset-x", "pfValue", r);
		F === "%" ? M += (v - k) * I : M += I;
		var L = l - b / 2, R = d(n, "background-position-y", "units", r), z = d(n, "background-position-y", "pfValue", r);
		R === "%" ? L += (b - A) * z : L += z;
		var B = d(n, "background-offset-y", "units", r), V = d(n, "background-offset-y", "pfValue", r);
		B === "%" ? L += (b - A) * V : L += V, S.pathCache && (M -= c, L -= l, c = 0, l = 0);
		var H = e.globalAlpha;
		e.globalAlpha = w;
		var U = o.getImgSmoothing(e), W = !1;
		T === "no" && U ? (o.setImgSmoothing(e, !1), W = !0) : T === "yes" && !U && (o.setImgSmoothing(e, !0), W = !0), m === "no-repeat" ? (C && (e.save(), S.pathCache ? e.clip(S.pathCache) : (o.nodeShapes[o.getNodeShape(n)].draw(e, c, l, v, b, E, S), e.clip())), o.safeDrawImage(e, t, 0, 0, D, O, M, L, k, A), C && e.restore()) : (e.fillStyle = e.createPattern(t, m), o.nodeShapes[o.getNodeShape(n)].draw(e, c, l, v, b, E, S), e.translate(M, L), e.fill(), e.translate(-M, -L)), e.globalAlpha = H, W && o.setImgSmoothing(e, U);
	}
};
var CRp$7 = {};
CRp$7.eleTextBiggerThanMin = function(e, t) {
	if (!t) {
		var n = e.cy().zoom(), r = this.getPixelRatio();
		t = 2 ** Math.ceil(log2(n * r));
	}
	return !(e.pstyle("font-size").pfValue * t < e.pstyle("min-zoomed-font-size").pfValue);
}, CRp$7.drawElementText = function(e, t, n, r, a) {
	var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this;
	if (r == null) {
		if (o && !s.eleTextBiggerThanMin(t)) return;
	} else if (r === !1) return;
	if (t.isNode()) {
		var c = t.pstyle("label");
		if (!c || !c.value) return;
		e.textAlign = s.getLabelJustification(t), e.textBaseline = "bottom";
	} else {
		var l = t.element()._private.rscratch.badLine, u = t.pstyle("label"), d = t.pstyle("source-label"), f = t.pstyle("target-label");
		if (l || (!u || !u.value) && (!d || !d.value) && (!f || !f.value)) return;
		e.textAlign = "center", e.textBaseline = "bottom";
	}
	var m = !n, h;
	n && (h = n, e.translate(-h.x1, -h.y1)), a == null ? (s.drawText(e, t, null, m, o), t.isEdge() && (s.drawText(e, t, "source", m, o), s.drawText(e, t, "target", m, o))) : s.drawText(e, t, a, m, o), n && e.translate(h.x1, h.y1);
}, CRp$7.getFontCache = function(e) {
	var t;
	this.fontCaches = this.fontCaches || [];
	for (var n = 0; n < this.fontCaches.length; n++) if (t = this.fontCaches[n], t.context === e) return t;
	return t = { context: e }, this.fontCaches.push(t), t;
}, CRp$7.setupTextStyle = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = t.pstyle("font-style").strValue, a = t.pstyle("font-size").pfValue + "px", o = t.pstyle("font-family").strValue, s = t.pstyle("font-weight").strValue, c = n ? t.effectiveOpacity() * t.pstyle("text-opacity").value : 1, l = t.pstyle("text-outline-opacity").value * c, u = t.pstyle("color").value, d = t.pstyle("text-outline-color").value;
	e.font = r + " " + s + " " + a + " " + o, e.lineJoin = "round", this.colorFillStyle(e, u[0], u[1], u[2], c), this.colorStrokeStyle(e, d[0], d[1], d[2], l);
};
function circle(e, t, n, r, a) {
	var o = Math.min(r, a) / 2, s = t + r / 2, c = n + a / 2;
	e.beginPath(), e.arc(s, c, o, 0, Math.PI * 2), e.closePath();
}
function roundRect(e, t, n, r, a) {
	var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = Math.min(o, r / 2, a / 2);
	e.beginPath(), e.moveTo(t + s, n), e.lineTo(t + r - s, n), e.quadraticCurveTo(t + r, n, t + r, n + s), e.lineTo(t + r, n + a - s), e.quadraticCurveTo(t + r, n + a, t + r - s, n + a), e.lineTo(t + s, n + a), e.quadraticCurveTo(t, n + a, t, n + a - s), e.lineTo(t, n + s), e.quadraticCurveTo(t, n, t + s, n), e.closePath();
}
CRp$7.getTextAngle = function(e, t) {
	var n, r = e._private.rscratch, a = t ? t + "-" : "", o = e.pstyle(a + "text-rotation");
	if (o.strValue === "autorotate") {
		var s = getPrefixedProperty(r, "labelAngle", t);
		n = e.isEdge() ? s : 0;
	} else n = o.strValue === "none" ? 0 : o.pfValue;
	return n;
}, CRp$7.drawText = function(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = t._private.rscratch, s = a ? t.effectiveOpacity() : 1;
	if (!(a && (s === 0 || t.pstyle("text-opacity").value === 0))) {
		n === "main" && (n = null);
		var c = getPrefixedProperty(o, "labelX", n), l = getPrefixedProperty(o, "labelY", n), u, d, f = this.getLabelText(t, n);
		if (f != null && f !== "" && !isNaN(c) && !isNaN(l)) {
			this.setupTextStyle(e, t, a);
			var m = n ? n + "-" : "", h = getPrefixedProperty(o, "labelWidth", n), g = getPrefixedProperty(o, "labelHeight", n), _ = t.pstyle(m + "text-margin-x").pfValue, v = t.pstyle(m + "text-margin-y").pfValue, b = t.isEdge(), S = t.pstyle("text-halign").value, C = t.pstyle("text-valign").value;
			b && (S = "center", C = "center"), c += _, l += v;
			var w = r ? this.getTextAngle(t, n) : 0;
			switch (w !== 0 && (u = c, d = l, e.translate(u, d), e.rotate(w), c = 0, l = 0), C) {
				case "top": break;
				case "center":
					l += g / 2;
					break;
				case "bottom":
					l += g;
					break;
			}
			var T = t.pstyle("text-background-opacity").value, E = t.pstyle("text-border-opacity").value, D = t.pstyle("text-border-width").pfValue, O = t.pstyle("text-background-padding").pfValue, k = t.pstyle("text-background-shape").strValue, A = k === "round-rectangle" || k === "roundrectangle", j = k === "circle", M = 2;
			if (T > 0 || D > 0 && E > 0) {
				var N = e.fillStyle, P = e.strokeStyle, F = e.lineWidth, I = t.pstyle("text-background-color").value, L = t.pstyle("text-border-color").value, R = t.pstyle("text-border-style").value, z = T > 0, B = D > 0 && E > 0, V = c - O;
				switch (S) {
					case "left":
						V -= h;
						break;
					case "center":
						V -= h / 2;
						break;
				}
				var H = l - g - O, U = h + 2 * O, W = g + 2 * O;
				if (z && (e.fillStyle = `rgba(${I[0]},${I[1]},${I[2]},${T * s})`), B && (e.strokeStyle = `rgba(${L[0]},${L[1]},${L[2]},${E * s})`, e.lineWidth = D, e.setLineDash)) switch (R) {
					case "dotted":
						e.setLineDash([1, 1]);
						break;
					case "dashed":
						e.setLineDash([4, 2]);
						break;
					case "double":
						e.lineWidth = D / 4, e.setLineDash([]);
						break;
					case "solid":
					default:
						e.setLineDash([]);
						break;
				}
				if (A ? (e.beginPath(), roundRect(e, V, H, U, W, M)) : j ? (e.beginPath(), circle(e, V, H, U, W)) : (e.beginPath(), e.rect(V, H, U, W)), z && e.fill(), B && e.stroke(), B && R === "double") {
					var G = D / 2;
					e.beginPath(), A ? roundRect(e, V + G, H + G, U - 2 * G, W - 2 * G, M) : e.rect(V + G, H + G, U - 2 * G, W - 2 * G), e.stroke();
				}
				e.fillStyle = N, e.strokeStyle = P, e.lineWidth = F, e.setLineDash && e.setLineDash([]);
			}
			var q = 2 * t.pstyle("text-outline-width").pfValue;
			if (q > 0 && (e.lineWidth = q), t.pstyle("text-wrap").value === "wrap") {
				var J = getPrefixedProperty(o, "labelWrapCachedLines", n), Y = getPrefixedProperty(o, "labelLineHeight", n), X = h / 2, Z = this.getLabelJustification(t);
				switch (Z === "auto" || (S === "left" ? Z === "left" ? c += -h : Z === "center" && (c += -X) : S === "center" ? Z === "left" ? c += -X : Z === "right" && (c += X) : S === "right" && (Z === "center" ? c += X : Z === "right" && (c += h))), C) {
					case "top":
						l -= (J.length - 1) * Y;
						break;
					case "center":
					case "bottom":
						l -= (J.length - 1) * Y;
						break;
				}
				for (var Q = 0; Q < J.length; Q++) q > 0 && e.strokeText(J[Q], c, l), e.fillText(J[Q], c, l), l += Y;
			} else q > 0 && e.strokeText(f, c, l), e.fillText(f, c, l);
			w !== 0 && (e.rotate(-w), e.translate(-u, -d));
		}
	}
};
var CRp$6 = {};
CRp$6.drawNode = function(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, c, l, u = t._private, d = u.rscratch, f = t.position();
	if (!(!number$1(f.x) || !number$1(f.y)) && !(o && !t.visible())) {
		var m = o ? t.effectiveOpacity() : 1, h = s.usePaths(), g, _ = !1, v = t.padding();
		c = t.width() + 2 * v, l = t.height() + 2 * v;
		var b;
		n && (b = n, e.translate(-b.x1, -b.y1));
		for (var S = t.pstyle("background-image").value, C = Array(S.length), w = Array(S.length), T = 0, E = 0; E < S.length; E++) {
			var D = S[E];
			if (C[E] = D != null && D !== "none") {
				var O = t.cy().style().getIndexedStyle(t, "background-image-crossorigin", "value", E);
				T++, w[E] = s.getCachedImage(D, O, function() {
					u.backgroundTimestamp = Date.now(), t.emitAndNotify("background");
				});
			}
		}
		var k = t.pstyle("background-blacken").value, A = t.pstyle("border-width").pfValue, j = t.pstyle("background-opacity").value * m, M = t.pstyle("border-color").value, N = t.pstyle("border-style").value, P = t.pstyle("border-join").value, F = t.pstyle("border-cap").value, L = t.pstyle("border-position").value, R = t.pstyle("border-dash-pattern").pfValue, z = t.pstyle("border-dash-offset").pfValue, B = t.pstyle("border-opacity").value * m, V = t.pstyle("outline-width").pfValue, H = t.pstyle("outline-color").value, U = t.pstyle("outline-style").value, W = t.pstyle("outline-opacity").value * m, G = t.pstyle("outline-offset").value, q = t.pstyle("corner-radius").value;
		q !== "auto" && (q = t.pstyle("corner-radius").pfValue);
		var J = function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : j;
			s.eleFillStyle(e, t, n);
		}, Y = function() {
			var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B;
			s.colorStrokeStyle(e, M[0], M[1], M[2], t);
		}, X = function() {
			var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W;
			s.colorStrokeStyle(e, H[0], H[1], H[2], t);
		}, Z = function(e, t, n, r) {
			var a = s.nodePathCache = s.nodePathCache || [], o = hashStrings(n === "polygon" ? n + "," + r.join(",") : n, "" + t, "" + e, "" + q), c = a[o], l, u = !1;
			return c == null ? (l = new Path2D(), a[o] = d.pathCache = l) : (l = c, u = !0, d.pathCache = l), {
				path: l,
				cacheHit: u
			};
		}, Q = t.pstyle("shape").strValue, $ = t.pstyle("shape-polygon-points").pfValue;
		if (h) {
			e.translate(f.x, f.y);
			var kh = Z(c, l, Q, $);
			g = kh.path, _ = kh.cacheHit;
		}
		var Ah = function() {
			if (!_) {
				var n = f;
				h && (n = {
					x: 0,
					y: 0
				}), s.nodeShapes[s.getNodeShape(t)].draw(g || e, n.x, n.y, c, l, q, d);
			}
			h ? e.fill(g) : e.fill();
		}, jh = function() {
			for (var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = u.backgrounding, o = 0, c = 0; c < w.length; c++) {
				var l = t.cy().style().getIndexedStyle(t, "background-image-containment", "value", c);
				if (r && l === "over" || !r && l === "inside") {
					o++;
					continue;
				}
				C[c] && w[c].complete && !w[c].error && (o++, s.drawInscribedImage(e, w[c], t, c, n));
			}
			u.backgrounding = o !== T, a !== u.backgrounding && t.updateStyle(!1);
		}, Mh = function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m;
			s.hasPie(t) && (s.drawPie(e, t, r), n && (h || s.nodeShapes[s.getNodeShape(t)].draw(e, f.x, f.y, c, l, q, d)));
		}, Nh = function() {
			var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m;
			s.hasStripe(t) && (e.save(), h ? e.clip(d.pathCache) : (s.nodeShapes[s.getNodeShape(t)].draw(e, f.x, f.y, c, l, q, d), e.clip()), s.drawStripe(e, t, r), e.restore(), n && (h || s.nodeShapes[s.getNodeShape(t)].draw(e, f.x, f.y, c, l, q, d)));
		}, Ph = function() {
			var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m, n = (k > 0 ? k : -k) * t, r = k > 0 ? 0 : 255;
			k !== 0 && (s.colorFillStyle(e, r, r, r, n), h ? e.fill(g) : e.fill());
		}, Fh = function() {
			if (A > 0) {
				if (e.lineWidth = A, e.lineCap = F, e.lineJoin = P, e.setLineDash) switch (N) {
					case "dotted":
						e.setLineDash([1, 1]);
						break;
					case "dashed":
						e.setLineDash(R), e.lineDashOffset = z;
						break;
					case "solid":
					case "double":
						e.setLineDash([]);
						break;
				}
				if (L !== "center") {
					if (e.save(), e.lineWidth *= 2, L === "inside") h ? e.clip(g) : e.clip();
					else {
						var t = new Path2D();
						t.rect(-c / 2 - A, -l / 2 - A, c + 2 * A, l + 2 * A), t.addPath(g), e.clip(t, "evenodd");
					}
					h ? e.stroke(g) : e.stroke(), e.restore();
				} else h ? e.stroke(g) : e.stroke();
				if (N === "double") {
					e.lineWidth = A / 3;
					var n = e.globalCompositeOperation;
					e.globalCompositeOperation = "destination-out", h ? e.stroke(g) : e.stroke(), e.globalCompositeOperation = n;
				}
				e.setLineDash && e.setLineDash([]);
			}
		}, Ih = function() {
			if (V > 0) {
				if (e.lineWidth = V, e.lineCap = "butt", e.setLineDash) switch (U) {
					case "dotted":
						e.setLineDash([1, 1]);
						break;
					case "dashed":
						e.setLineDash([4, 2]);
						break;
					case "solid":
					case "double":
						e.setLineDash([]);
						break;
				}
				var n = f;
				h && (n = {
					x: 0,
					y: 0
				});
				var r = s.getNodeShape(t), a = A;
				L === "inside" && (a = 0), L === "outside" && (a *= 2);
				var o = (c + a + (V + G)) / c, u = (l + a + (V + G)) / l, d = c * o, m = l * u, g = s.nodeShapes[r].points, _;
				if (h && (_ = Z(d, m, r, g).path), r === "ellipse") s.drawEllipsePath(_ || e, n.x, n.y, d, m);
				else if ([
					"round-diamond",
					"round-heptagon",
					"round-hexagon",
					"round-octagon",
					"round-pentagon",
					"round-polygon",
					"round-triangle",
					"round-tag"
				].includes(r)) {
					var v = 0, b = 0, S = 0;
					r === "round-diamond" ? v = (a + G + V) * 1.4 : r === "round-heptagon" ? (v = (a + G + V) * 1.075, S = -(a / 2 + G + V) / 35) : r === "round-hexagon" ? v = (a + G + V) * 1.12 : r === "round-pentagon" ? (v = (a + G + V) * 1.13, S = -(a / 2 + G + V) / 15) : r === "round-tag" ? (v = (a + G + V) * 1.12, b = (a / 2 + V + G) * .07) : r === "round-triangle" && (v = (a + G + V) * (Math.PI / 2), S = -(a + G / 2 + V) / Math.PI), v !== 0 && (o = (c + v) / c, d = c * o, ["round-hexagon", "round-tag"].includes(r) || (u = (l + v) / l, m = l * u)), q = q === "auto" ? getRoundPolygonRadius(d, m) : q;
					for (var C = d / 2, w = m / 2, T = q + (a + V + G) / 2, E = Array(g.length / 2), D = Array(g.length / 2), O = 0; O < g.length / 2; O++) E[O] = {
						x: n.x + b + C * g[O * 2],
						y: n.y + S + w * g[O * 2 + 1]
					};
					var k, j, M, N, P = E.length;
					for (j = E[P - 1], k = 0; k < P; k++) M = E[k % P], N = E[(k + 1) % P], D[k] = getRoundCorner(j, M, N, T), j = M, M = N;
					s.drawRoundPolygonPath(_ || e, n.x + b, n.y + S, c * o, l * u, g, D);
				} else if (["roundrectangle", "round-rectangle"].includes(r)) q = q === "auto" ? getRoundRectangleRadius(d, m) : q, s.drawRoundRectanglePath(_ || e, n.x, n.y, d, m, q + (a + V + G) / 2);
				else if (["cutrectangle", "cut-rectangle"].includes(r)) q = q === "auto" ? getCutRectangleCornerLength() : q, s.drawCutRectanglePath(_ || e, n.x, n.y, d, m, null, q + (a + V + G) / 4);
				else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(r)) q = q === "auto" ? getRoundRectangleRadius(d, m) : q, s.drawBottomRoundRectanglePath(_ || e, n.x, n.y, d, m, q + (a + V + G) / 2);
				else if (r === "barrel") s.drawBarrelPath(_ || e, n.x, n.y, d, m);
				else if (r.startsWith("polygon") || [
					"rhomboid",
					"right-rhomboid",
					"round-tag",
					"tag",
					"vee"
				].includes(r)) {
					var F = (a + V + G) / c;
					g = joinLines(expandPolygon(g, F)), s.drawPolygonPath(_ || e, n.x, n.y, c, l, g);
				} else {
					var I = (a + V + G) / c;
					g = joinLines(expandPolygon(g, -I)), s.drawPolygonPath(_ || e, n.x, n.y, c, l, g);
				}
				if (h ? e.stroke(_) : e.stroke(), U === "double") {
					e.lineWidth = a / 3;
					var R = e.globalCompositeOperation;
					e.globalCompositeOperation = "destination-out", h ? e.stroke(_) : e.stroke(), e.globalCompositeOperation = R;
				}
				e.setLineDash && e.setLineDash([]);
			}
		}, Lh = function() {
			a && s.drawNodeOverlay(e, t, f, c, l);
		}, Rh = function() {
			a && s.drawNodeUnderlay(e, t, f, c, l);
		}, zh = function() {
			s.drawElementText(e, t, null, r);
		};
		if (t.pstyle("ghost").value === "yes") {
			var Bh = t.pstyle("ghost-offset-x").pfValue, Vh = t.pstyle("ghost-offset-y").pfValue, Hh = t.pstyle("ghost-opacity").value, Uh = Hh * m;
			e.translate(Bh, Vh), X(), Ih(), J(Hh * j), Ah(), jh(Uh, !0), Y(Hh * B), Fh(), Mh(k !== 0 || A !== 0), Nh(k !== 0 || A !== 0), jh(Uh, !1), Ph(Uh), e.translate(-Bh, -Vh);
		}
		h && e.translate(-f.x, -f.y), Rh(), h && e.translate(f.x, f.y), X(), Ih(), J(), Ah(), jh(m, !0), Y(), Fh(), Mh(k !== 0 || A !== 0), Nh(k !== 0 || A !== 0), jh(m, !1), Ph(), h && e.translate(-f.x, -f.y), zh(), Lh(), n && e.translate(b.x1, b.y1);
	}
};
var drawNodeOverlayUnderlay = function(e) {
	if (!["overlay", "underlay"].includes(e)) throw Error("Invalid state");
	return function(t, n, r, a, o) {
		var s = this;
		if (n.visible()) {
			var c = n.pstyle(`${e}-padding`).pfValue, l = n.pstyle(`${e}-opacity`).value, u = n.pstyle(`${e}-color`).value, d = n.pstyle(`${e}-shape`).value, f = n.pstyle(`${e}-corner-radius`).value;
			if (l > 0) {
				if (r ||= n.position(), a == null || o == null) {
					var m = n.padding();
					a = n.width() + 2 * m, o = n.height() + 2 * m;
				}
				s.colorFillStyle(t, u[0], u[1], u[2], l), s.nodeShapes[d].draw(t, r.x, r.y, a + c * 2, o + c * 2, f), t.fill();
			}
		}
	};
};
CRp$6.drawNodeOverlay = drawNodeOverlayUnderlay("overlay"), CRp$6.drawNodeUnderlay = drawNodeOverlayUnderlay("underlay"), CRp$6.hasPie = function(e) {
	return e = e[0], e._private.hasPie;
}, CRp$6.hasStripe = function(e) {
	return e = e[0], e._private.hasStripe;
}, CRp$6.drawPie = function(e, t, n, r) {
	t = t[0], r ||= t.position();
	var a = t.cy().style(), o = t.pstyle("pie-size"), s = t.pstyle("pie-hole"), c = t.pstyle("pie-start-angle").pfValue, l = r.x, u = r.y, d = t.width(), f = t.height(), m = Math.min(d, f) / 2, h, g = 0;
	if (this.usePaths() && (l = 0, u = 0), o.units === "%" ? m *= o.pfValue : o.pfValue !== void 0 && (m = o.pfValue / 2), s.units === "%" ? h = m * s.pfValue : s.pfValue !== void 0 && (h = s.pfValue / 2), !(h >= m)) for (var _ = 1; _ <= a.pieBackgroundN; _++) {
		var v = t.pstyle("pie-" + _ + "-background-size").value, b = t.pstyle("pie-" + _ + "-background-color").value, S = t.pstyle("pie-" + _ + "-background-opacity").value * n, C = v / 100;
		C + g > 1 && (C = 1 - g);
		var w = 1.5 * Math.PI + 2 * Math.PI * g;
		w += c;
		var T = 2 * Math.PI * C, E = w + T;
		v === 0 || g >= 1 || g + C > 1 || (h === 0 ? (e.beginPath(), e.moveTo(l, u), e.arc(l, u, m, w, E), e.closePath()) : (e.beginPath(), e.arc(l, u, m, w, E), e.arc(l, u, h, E, w, !0), e.closePath()), this.colorFillStyle(e, b[0], b[1], b[2], S), e.fill(), g += C);
	}
}, CRp$6.drawStripe = function(e, t, n, r) {
	t = t[0], r ||= t.position();
	var a = t.cy().style(), o = r.x, s = r.y, c = t.width(), l = t.height(), u = 0, d = this.usePaths();
	e.save();
	var f = t.pstyle("stripe-direction").value, m = t.pstyle("stripe-size");
	switch (f) {
		case "vertical": break;
		case "righward":
			e.rotate(-Math.PI / 2);
			break;
	}
	var h = c, g = l;
	m.units === "%" ? (h *= m.pfValue, g *= m.pfValue) : m.pfValue !== void 0 && (h = m.pfValue, g = m.pfValue), d && (o = 0, s = 0), s -= h / 2, o -= g / 2;
	for (var _ = 1; _ <= a.stripeBackgroundN; _++) {
		var v = t.pstyle("stripe-" + _ + "-background-size").value, b = t.pstyle("stripe-" + _ + "-background-color").value, S = t.pstyle("stripe-" + _ + "-background-opacity").value * n, C = v / 100;
		C + u > 1 && (C = 1 - u), !(v === 0 || u >= 1 || u + C > 1) && (e.beginPath(), e.rect(o, s + g * u, h, g * C), e.closePath(), this.colorFillStyle(e, b[0], b[1], b[2], S), e.fill(), u += C);
	}
	e.restore();
};
var CRp$5 = {}, motionBlurDelay = 100;
CRp$5.getPixelRatio = function() {
	var e = this.data.contexts[0];
	if (this.forcedPixelRatio != null) return this.forcedPixelRatio;
	var t = this.cy.window(), n = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
	return (t.devicePixelRatio || 1) / n;
}, CRp$5.paintCache = function(e) {
	for (var t = this.paintCaches = this.paintCaches || [], n = !0, r, a = 0; a < t.length; a++) if (r = t[a], r.context === e) {
		n = !1;
		break;
	}
	return n && (r = { context: e }, t.push(r)), r;
}, CRp$5.createGradientStyleFor = function(e, t, n, r, a) {
	var o, s = this.usePaths(), c = n.pstyle(t + "-gradient-stop-colors").value, l = n.pstyle(t + "-gradient-stop-positions").pfValue;
	if (r === "radial-gradient") if (n.isEdge()) {
		var u = n.sourceEndpoint(), d = n.targetEndpoint(), f = n.midpoint(), m = dist(u, f), h = dist(d, f);
		o = e.createRadialGradient(f.x, f.y, 0, f.x, f.y, Math.max(m, h));
	} else {
		var g = s ? {
			x: 0,
			y: 0
		} : n.position(), _ = n.paddedWidth(), v = n.paddedHeight();
		o = e.createRadialGradient(g.x, g.y, 0, g.x, g.y, Math.max(_, v));
	}
	else if (n.isEdge()) {
		var b = n.sourceEndpoint(), S = n.targetEndpoint();
		o = e.createLinearGradient(b.x, b.y, S.x, S.y);
	} else {
		var C = s ? {
			x: 0,
			y: 0
		} : n.position(), w = n.paddedWidth(), T = n.paddedHeight(), E = w / 2, D = T / 2;
		switch (n.pstyle("background-gradient-direction").value) {
			case "to-bottom":
				o = e.createLinearGradient(C.x, C.y - D, C.x, C.y + D);
				break;
			case "to-top":
				o = e.createLinearGradient(C.x, C.y + D, C.x, C.y - D);
				break;
			case "to-left":
				o = e.createLinearGradient(C.x + E, C.y, C.x - E, C.y);
				break;
			case "to-right":
				o = e.createLinearGradient(C.x - E, C.y, C.x + E, C.y);
				break;
			case "to-bottom-right":
			case "to-right-bottom":
				o = e.createLinearGradient(C.x - E, C.y - D, C.x + E, C.y + D);
				break;
			case "to-top-right":
			case "to-right-top":
				o = e.createLinearGradient(C.x - E, C.y + D, C.x + E, C.y - D);
				break;
			case "to-bottom-left":
			case "to-left-bottom":
				o = e.createLinearGradient(C.x + E, C.y - D, C.x - E, C.y + D);
				break;
			case "to-top-left":
			case "to-left-top":
				o = e.createLinearGradient(C.x + E, C.y + D, C.x - E, C.y - D);
				break;
		}
	}
	if (!o) return null;
	for (var O = l.length === c.length, k = c.length, A = 0; A < k; A++) o.addColorStop(O ? l[A] : A / (k - 1), "rgba(" + c[A][0] + "," + c[A][1] + "," + c[A][2] + "," + a + ")");
	return o;
}, CRp$5.gradientFillStyle = function(e, t, n, r) {
	var a = this.createGradientStyleFor(e, "background", t, n, r);
	if (!a) return null;
	e.fillStyle = a;
}, CRp$5.colorFillStyle = function(e, t, n, r, a) {
	e.fillStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
}, CRp$5.eleFillStyle = function(e, t, n) {
	var r = t.pstyle("background-fill").value;
	if (r === "linear-gradient" || r === "radial-gradient") this.gradientFillStyle(e, t, r, n);
	else {
		var a = t.pstyle("background-color").value;
		this.colorFillStyle(e, a[0], a[1], a[2], n);
	}
}, CRp$5.gradientStrokeStyle = function(e, t, n, r) {
	var a = this.createGradientStyleFor(e, "line", t, n, r);
	if (!a) return null;
	e.strokeStyle = a;
}, CRp$5.colorStrokeStyle = function(e, t, n, r, a) {
	e.strokeStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
}, CRp$5.eleStrokeStyle = function(e, t, n) {
	var r = t.pstyle("line-fill").value;
	if (r === "linear-gradient" || r === "radial-gradient") this.gradientStrokeStyle(e, t, r, n);
	else {
		var a = t.pstyle("line-color").value;
		this.colorStrokeStyle(e, a[0], a[1], a[2], n);
	}
}, CRp$5.matchCanvasSize = function(e) {
	var t = this, n = t.data, r = t.findContainerClientCoords(), a = r[2], o = r[3], s = t.getPixelRatio(), c = t.motionBlurPxRatio;
	(e === t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE] || e === t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG]) && (s = c);
	var l = a * s, u = o * s, d;
	if (!(l === t.canvasWidth && u === t.canvasHeight)) {
		t.fontCaches = null;
		var f = n.canvasContainer;
		f.style.width = a + "px", f.style.height = o + "px";
		for (var m = 0; m < t.CANVAS_LAYERS; m++) d = n.canvases[m], d.width = l, d.height = u, d.style.width = a + "px", d.style.height = o + "px";
		for (var m = 0; m < t.BUFFER_COUNT; m++) d = n.bufferCanvases[m], d.width = l, d.height = u, d.style.width = a + "px", d.style.height = o + "px";
		t.textureMult = 1, s <= 1 && (d = n.bufferCanvases[t.TEXTURE_BUFFER], t.textureMult = 2, d.width = l * t.textureMult, d.height = u * t.textureMult), t.canvasWidth = l, t.canvasHeight = u, t.pixelRatio = s;
	}
}, CRp$5.renderTo = function(e, t, n, r) {
	this.render({
		forcedContext: e,
		forcedZoom: t,
		forcedPan: n,
		drawAllLayers: !0,
		forcedPxRatio: r
	});
}, CRp$5.clearCanvas = function() {
	var e = this, t = e.data;
	function n(t) {
		t.clearRect(0, 0, e.canvasWidth, e.canvasHeight);
	}
	n(t.contexts[e.NODE]), n(t.contexts[e.DRAG]);
}, CRp$5.render = function(e) {
	var t = this;
	e ||= staticEmptyObject();
	var n = t.cy, r = e.forcedContext, a = e.drawAllLayers, o = e.drawOnlyNodeLayer, s = e.forcedZoom, c = e.forcedPan, l = e.forcedPxRatio === void 0 ? this.getPixelRatio() : e.forcedPxRatio, u = t.data, d = u.canvasNeedsRedraw, f = t.textureOnViewport && !r && (t.pinching || t.hoverData.dragging || t.swipePanning || t.data.wheelZooming), m = e.motionBlur === void 0 ? t.motionBlur : e.motionBlur, h = t.motionBlurPxRatio, g = n.hasCompoundNodes(), _ = t.hoverData.draggingEles, v = !!(t.hoverData.selecting || t.touchData.selecting);
	m = m && !r && t.motionBlurEnabled && !v;
	var b = m;
	r || (t.prevPxRatio !== l && (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container), t.redrawHint("eles", !0), t.redrawHint("drag", !0)), t.prevPxRatio = l), !r && t.motionBlurTimeout && clearTimeout(t.motionBlurTimeout), m && (t.mbFrames ??= 0, t.mbFrames++, t.mbFrames < 3 && (b = !1), t.mbFrames > t.minMbLowQualFrames && (t.motionBlurPxRatio = t.mbPxRBlurry)), t.clearingMotionBlur && (t.motionBlurPxRatio = 1), t.textureDrawLastFrame && !f && (d[t.NODE] = !0, d[t.SELECT_BOX] = !0);
	var S = n.style(), C = n.zoom(), w = s === void 0 ? C : s, T = n.pan(), E = {
		x: T.x,
		y: T.y
	}, D = {
		zoom: C,
		pan: {
			x: T.x,
			y: T.y
		}
	}, O = t.prevViewport;
	!(O === void 0 || D.zoom !== O.zoom || D.pan.x !== O.pan.x || D.pan.y !== O.pan.y) && !(_ && !g) && (t.motionBlurPxRatio = 1), c && (E = c), w *= l, E.x *= l, E.y *= l;
	var k = t.getCachedZSortedEles();
	function A(e, n, r, a, o) {
		var s = e.globalCompositeOperation;
		e.globalCompositeOperation = "destination-out", t.colorFillStyle(e, 255, 255, 255, t.motionBlurTransparency), e.fillRect(n, r, a, o), e.globalCompositeOperation = s;
	}
	function j(e, n) {
		var o, l, d, f;
		!t.clearingMotionBlur && (e === u.bufferContexts[t.MOTIONBLUR_BUFFER_NODE] || e === u.bufferContexts[t.MOTIONBLUR_BUFFER_DRAG]) ? (o = {
			x: T.x * h,
			y: T.y * h
		}, l = C * h, d = t.canvasWidth * h, f = t.canvasHeight * h) : (o = E, l = w, d = t.canvasWidth, f = t.canvasHeight), e.setTransform(1, 0, 0, 1, 0, 0), n === "motionBlur" ? A(e, 0, 0, d, f) : !r && (n === void 0 || n) && e.clearRect(0, 0, d, f), a || (e.translate(o.x, o.y), e.scale(l, l)), c && e.translate(c.x, c.y), s && e.scale(s, s);
	}
	if (f || (t.textureDrawLastFrame = !1), f) {
		if (t.textureDrawLastFrame = !0, !t.textureCache) {
			t.textureCache = {}, t.textureCache.bb = n.mutableElements().boundingBox(), t.textureCache.texture = t.data.bufferCanvases[t.TEXTURE_BUFFER];
			var M = t.data.bufferContexts[t.TEXTURE_BUFFER];
			M.setTransform(1, 0, 0, 1, 0, 0), M.clearRect(0, 0, t.canvasWidth * t.textureMult, t.canvasHeight * t.textureMult), t.render({
				forcedContext: M,
				drawOnlyNodeLayer: !0,
				forcedPxRatio: l * t.textureMult
			});
			var D = t.textureCache.viewport = {
				zoom: n.zoom(),
				pan: n.pan(),
				width: t.canvasWidth,
				height: t.canvasHeight
			};
			D.mpan = {
				x: (0 - D.pan.x) / D.zoom,
				y: (0 - D.pan.y) / D.zoom
			};
		}
		d[t.DRAG] = !1, d[t.NODE] = !1;
		var N = u.contexts[t.NODE], P = t.textureCache.texture, D = t.textureCache.viewport;
		N.setTransform(1, 0, 0, 1, 0, 0), m ? A(N, 0, 0, D.width, D.height) : N.clearRect(0, 0, D.width, D.height);
		var F = S.core("outside-texture-bg-color").value, I = S.core("outside-texture-bg-opacity").value;
		t.colorFillStyle(N, F[0], F[1], F[2], I), N.fillRect(0, 0, D.width, D.height);
		var C = n.zoom();
		j(N, !1), N.clearRect(D.mpan.x, D.mpan.y, D.width / D.zoom / l, D.height / D.zoom / l), N.drawImage(P, D.mpan.x, D.mpan.y, D.width / D.zoom / l, D.height / D.zoom / l);
	} else t.textureOnViewport && !r && (t.textureCache = null);
	var L = n.extent(), R = t.pinching || t.hoverData.dragging || t.swipePanning || t.data.wheelZooming || t.hoverData.draggingEles || t.cy.animated(), z = t.hideEdgesOnViewport && R, B = [];
	if (B[t.NODE] = !d[t.NODE] && m && !t.clearedForMotionBlur[t.NODE] || t.clearingMotionBlur, B[t.NODE] && (t.clearedForMotionBlur[t.NODE] = !0), B[t.DRAG] = !d[t.DRAG] && m && !t.clearedForMotionBlur[t.DRAG] || t.clearingMotionBlur, B[t.DRAG] && (t.clearedForMotionBlur[t.DRAG] = !0), d[t.NODE] || a || o || B[t.NODE]) {
		var V = m && !B[t.NODE] && h !== 1, N = r || (V ? t.data.bufferContexts[t.MOTIONBLUR_BUFFER_NODE] : u.contexts[t.NODE]);
		j(N, m && !V ? "motionBlur" : void 0), z ? t.drawCachedNodes(N, k.nondrag, l, L) : t.drawLayeredElements(N, k.nondrag, l, L), t.debug && t.drawDebugPoints(N, k.nondrag), !a && !m && (d[t.NODE] = !1);
	}
	if (!o && (d[t.DRAG] || a || B[t.DRAG])) {
		var V = m && !B[t.DRAG] && h !== 1, N = r || (V ? t.data.bufferContexts[t.MOTIONBLUR_BUFFER_DRAG] : u.contexts[t.DRAG]);
		j(N, m && !V ? "motionBlur" : void 0), z ? t.drawCachedNodes(N, k.drag, l, L) : t.drawCachedElements(N, k.drag, l, L), t.debug && t.drawDebugPoints(N, k.drag), !a && !m && (d[t.DRAG] = !1);
	}
	if (this.drawSelectionRectangle(e, j), m && h !== 1) {
		var H = u.contexts[t.NODE], U = t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE], W = u.contexts[t.DRAG], G = t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG], q = function(e, n, r) {
			e.setTransform(1, 0, 0, 1, 0, 0), r || !b ? e.clearRect(0, 0, t.canvasWidth, t.canvasHeight) : A(e, 0, 0, t.canvasWidth, t.canvasHeight);
			var a = h;
			e.drawImage(n, 0, 0, t.canvasWidth * a, t.canvasHeight * a, 0, 0, t.canvasWidth, t.canvasHeight);
		};
		(d[t.NODE] || B[t.NODE]) && (q(H, U, B[t.NODE]), d[t.NODE] = !1), (d[t.DRAG] || B[t.DRAG]) && (q(W, G, B[t.DRAG]), d[t.DRAG] = !1);
	}
	t.prevViewport = D, t.clearingMotionBlur && (t.clearingMotionBlur = !1, t.motionBlurCleared = !0, t.motionBlur = !0), m && (t.motionBlurTimeout = setTimeout(function() {
		t.motionBlurTimeout = null, t.clearedForMotionBlur[t.NODE] = !1, t.clearedForMotionBlur[t.DRAG] = !1, t.motionBlur = !1, t.clearingMotionBlur = !f, t.mbFrames = 0, d[t.NODE] = !0, d[t.DRAG] = !0, t.redraw();
	}, motionBlurDelay)), r || n.emit("render");
};
var fpsHeight;
CRp$5.drawSelectionRectangle = function(e, t) {
	var n = this, r = n.cy, a = n.data, o = r.style(), s = e.drawOnlyNodeLayer, c = e.drawAllLayers, l = a.canvasNeedsRedraw, u = e.forcedContext;
	if (n.showFps || !s && l[n.SELECT_BOX] && !c) {
		var d = u || a.contexts[n.SELECT_BOX];
		if (t(d), n.selection[4] == 1 && (n.hoverData.selecting || n.touchData.selecting)) {
			var f = n.cy.zoom(), m = o.core("selection-box-border-width").value / f;
			d.lineWidth = m, d.fillStyle = "rgba(" + o.core("selection-box-color").value[0] + "," + o.core("selection-box-color").value[1] + "," + o.core("selection-box-color").value[2] + "," + o.core("selection-box-opacity").value + ")", d.fillRect(n.selection[0], n.selection[1], n.selection[2] - n.selection[0], n.selection[3] - n.selection[1]), m > 0 && (d.strokeStyle = "rgba(" + o.core("selection-box-border-color").value[0] + "," + o.core("selection-box-border-color").value[1] + "," + o.core("selection-box-border-color").value[2] + "," + o.core("selection-box-opacity").value + ")", d.strokeRect(n.selection[0], n.selection[1], n.selection[2] - n.selection[0], n.selection[3] - n.selection[1]));
		}
		if (a.bgActivePosistion && !n.hoverData.selecting) {
			var f = n.cy.zoom(), h = a.bgActivePosistion;
			d.fillStyle = "rgba(" + o.core("active-bg-color").value[0] + "," + o.core("active-bg-color").value[1] + "," + o.core("active-bg-color").value[2] + "," + o.core("active-bg-opacity").value + ")", d.beginPath(), d.arc(h.x, h.y, o.core("active-bg-size").pfValue / f, 0, 2 * Math.PI), d.fill();
		}
		var g = n.lastRedrawTime;
		if (n.showFps && g) {
			g = Math.round(g);
			var _ = Math.round(1e3 / g), v = "1 frame = " + g + " ms = " + _ + " fps";
			d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "rgba(255, 0, 0, 0.75)", d.strokeStyle = "rgba(255, 0, 0, 0.75)", d.font = "30px Arial", fpsHeight ||= d.measureText(v).actualBoundingBoxAscent, d.fillText(v, 0, fpsHeight), d.strokeRect(0, fpsHeight + 10, 250, 20), d.fillRect(0, fpsHeight + 10, 250 * Math.min(_ / 60, 1), 20);
		}
		c || (l[n.SELECT_BOX] = !1);
	}
};
function compileShader(e, t, n) {
	var r = e.createShader(t);
	if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) throw Error(e.getShaderInfoLog(r));
	return r;
}
function createProgram(e, t, n) {
	var r = compileShader(e, e.VERTEX_SHADER, t), a = compileShader(e, e.FRAGMENT_SHADER, n), o = e.createProgram();
	if (e.attachShader(o, r), e.attachShader(o, a), e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS)) throw Error("Could not initialize shaders");
	return o;
}
function createTextureCanvas(e, t, n) {
	n === void 0 && (n = t);
	var r = e.makeOffscreenCanvas(t, n), a = r.context = r.getContext("2d");
	return r.clear = function() {
		return a.clearRect(0, 0, r.width, r.height);
	}, r.clear(), r;
}
function getEffectivePanZoom(e) {
	var t = e.pixelRatio, n = e.cy.zoom(), r = e.cy.pan();
	return {
		zoom: n * t,
		pan: {
			x: r.x * t,
			y: r.y * t
		}
	};
}
function getEffectiveZoom(e) {
	var t = e.pixelRatio;
	return e.cy.zoom() * t;
}
function modelToRenderedPosition(e, t, n, r, a) {
	var o = r * n + t.x, s = a * n + t.y;
	return s = Math.round(e.canvasHeight - s), [o, s];
}
function isSimpleShape(e) {
	return e.pstyle("background-fill").value !== "solid" || e.pstyle("background-image").strValue !== "none" ? !1 : e.pstyle("border-width").value === 0 || e.pstyle("border-opacity").value === 0 ? !0 : e.pstyle("border-style").value === "solid";
}
function arrayEqual(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function toWebGLColor(e, t, n) {
	var r = e[0] / 255, a = e[1] / 255, o = e[2] / 255, s = t, c = n || [
		,
		,
		,
		,
	];
	return c[0] = r * s, c[1] = a * s, c[2] = o * s, c[3] = s, c;
}
function indexToVec4(e, t) {
	var n = t || [
		,
		,
		,
		,
	];
	return n[0] = (e >> 0 & 255) / 255, n[1] = (e >> 8 & 255) / 255, n[2] = (e >> 16 & 255) / 255, n[3] = (e >> 24 & 255) / 255, n;
}
function vec4ToIndex(e) {
	return e[0] + (e[1] << 8) + (e[2] << 16) + (e[3] << 24);
}
function createTexture(e, t) {
	var n = e.createTexture();
	return n.buffer = function(t) {
		e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), e.generateMipmap(e.TEXTURE_2D), e.bindTexture(e.TEXTURE_2D, null);
	}, n.deleteTexture = function() {
		e.deleteTexture(n);
	}, n;
}
function getTypeInfo(e, t) {
	switch (t) {
		case "float": return [
			1,
			e.FLOAT,
			4
		];
		case "vec2": return [
			2,
			e.FLOAT,
			4
		];
		case "vec3": return [
			3,
			e.FLOAT,
			4
		];
		case "vec4": return [
			4,
			e.FLOAT,
			4
		];
		case "int": return [
			1,
			e.INT,
			4
		];
		case "ivec2": return [
			2,
			e.INT,
			4
		];
	}
}
function createTypedArray(e, t, n) {
	switch (t) {
		case e.FLOAT: return new Float32Array(n);
		case e.INT: return new Int32Array(n);
	}
}
function createTypedArrayView(e, t, n, r, a, o) {
	switch (t) {
		case e.FLOAT: return new Float32Array(n.buffer, o * r, a);
		case e.INT: return new Int32Array(n.buffer, o * r, a);
	}
}
function createBufferStaticDraw(e, t, n, r) {
	var a = _slicedToArray(getTypeInfo(e, t), 2), o = a[0], s = a[1], c = createTypedArray(e, s, r), l = e.createBuffer();
	return e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, c, e.STATIC_DRAW), s === e.FLOAT ? e.vertexAttribPointer(n, o, s, !1, 0, 0) : s === e.INT && e.vertexAttribIPointer(n, o, s, 0, 0), e.enableVertexAttribArray(n), e.bindBuffer(e.ARRAY_BUFFER, null), l;
}
function createBufferDynamicDraw(e, t, n, r) {
	var a = _slicedToArray(getTypeInfo(e, n), 3), o = a[0], s = a[1], c = a[2], l = createTypedArray(e, s, t * o), u = o * c, d = e.createBuffer();
	e.bindBuffer(e.ARRAY_BUFFER, d), e.bufferData(e.ARRAY_BUFFER, t * u, e.DYNAMIC_DRAW), e.enableVertexAttribArray(r), s === e.FLOAT ? e.vertexAttribPointer(r, o, s, !1, u, 0) : s === e.INT && e.vertexAttribIPointer(r, o, s, u, 0), e.vertexAttribDivisor(r, 1), e.bindBuffer(e.ARRAY_BUFFER, null);
	for (var f = Array(t), m = 0; m < t; m++) f[m] = createTypedArrayView(e, s, l, u, o, m);
	return d.dataArray = l, d.stride = u, d.size = o, d.getView = function(e) {
		return f[e];
	}, d.setPoint = function(e, t, n) {
		var r = f[e];
		r[0] = t, r[1] = n;
	}, d.bufferSubData = function(t) {
		e.bindBuffer(e.ARRAY_BUFFER, d), t ? e.bufferSubData(e.ARRAY_BUFFER, 0, l, 0, t * o) : e.bufferSubData(e.ARRAY_BUFFER, 0, l);
	}, d;
}
function create3x3MatrixBufferDynamicDraw(e, t, n) {
	for (var r = 9, a = new Float32Array(t * r), o = Array(t), s = 0; s < t; s++) {
		var c = s * r * 4;
		o[s] = new Float32Array(a.buffer, c, r);
	}
	var l = e.createBuffer();
	e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferData(e.ARRAY_BUFFER, a.byteLength, e.DYNAMIC_DRAW);
	for (var u = 0; u < 3; u++) {
		var d = n + u;
		e.enableVertexAttribArray(d), e.vertexAttribPointer(d, 3, e.FLOAT, !1, 36, u * 12), e.vertexAttribDivisor(d, 1);
	}
	return e.bindBuffer(e.ARRAY_BUFFER, null), l.getMatrixView = function(e) {
		return o[e];
	}, l.setData = function(e, t) {
		o[t].set(e, 0);
	}, l.bufferSubData = function() {
		e.bindBuffer(e.ARRAY_BUFFER, l), e.bufferSubData(e.ARRAY_BUFFER, 0, a);
	}, l;
}
function createPickingFrameBuffer(e) {
	var t = e.createFramebuffer();
	e.bindFramebuffer(e.FRAMEBUFFER, t);
	var n = e.createTexture();
	return e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0), e.bindFramebuffer(e.FRAMEBUFFER, null), t.setFramebufferAttachmentSizes = function(t, r) {
		e.bindTexture(e.TEXTURE_2D, n), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, r, 0, e.RGBA, e.UNSIGNED_BYTE, null);
	}, t;
}
var ARRAY_TYPE = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
	for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
	return Math.sqrt(e);
});
function create() {
	var e = new ARRAY_TYPE(9);
	return ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e;
}
function identity(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
}
function multiply(e, t, n) {
	var r = t[0], a = t[1], o = t[2], s = t[3], c = t[4], l = t[5], u = t[6], d = t[7], f = t[8], m = n[0], h = n[1], g = n[2], _ = n[3], v = n[4], b = n[5], S = n[6], C = n[7], w = n[8];
	return e[0] = m * r + h * s + g * u, e[1] = m * a + h * c + g * d, e[2] = m * o + h * l + g * f, e[3] = _ * r + v * s + b * u, e[4] = _ * a + v * c + b * d, e[5] = _ * o + v * l + b * f, e[6] = S * r + C * s + w * u, e[7] = S * a + C * c + w * d, e[8] = S * o + C * l + w * f, e;
}
function translate(e, t, n) {
	var r = t[0], a = t[1], o = t[2], s = t[3], c = t[4], l = t[5], u = t[6], d = t[7], f = t[8], m = n[0], h = n[1];
	return e[0] = r, e[1] = a, e[2] = o, e[3] = s, e[4] = c, e[5] = l, e[6] = m * r + h * s + u, e[7] = m * a + h * c + d, e[8] = m * o + h * l + f, e;
}
function rotate(e, t, n) {
	var r = t[0], a = t[1], o = t[2], s = t[3], c = t[4], l = t[5], u = t[6], d = t[7], f = t[8], m = Math.sin(n), h = Math.cos(n);
	return e[0] = h * r + m * s, e[1] = h * a + m * c, e[2] = h * o + m * l, e[3] = h * s - m * r, e[4] = h * c - m * a, e[5] = h * l - m * o, e[6] = u, e[7] = d, e[8] = f, e;
}
function scale(e, t, n) {
	var r = n[0], a = n[1];
	return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = a * t[3], e[4] = a * t[4], e[5] = a * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function projection(e, t, n) {
	return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / n, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e;
}
var Atlas = /* @__PURE__ */ function() {
	function e(t, n, r, a) {
		_classCallCheck(this, e), this.debugID = Math.floor(Math.random() * 1e4), this.r = t, this.texSize = n, this.texRows = r, this.texHeight = Math.floor(n / r), this.enableWrapping = !0, this.locked = !1, this.texture = null, this.needsBuffer = !0, this.freePointer = {
			x: 0,
			row: 0
		}, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = a(t, n, n), this.scratch = a(t, n, this.texHeight, "scratch");
	}
	return _createClass(e, [
		{
			key: "lock",
			value: function() {
				this.locked = !0;
			}
		},
		{
			key: "getKeys",
			value: function() {
				return new Set(this.keyToLocation.keys());
			}
		},
		{
			key: "getScale",
			value: function(e) {
				var t = e.w, n = e.h, r = this.texHeight, a = this.texSize, o = r / n, s = t * o, c = n * o;
				return s > a && (o = a / t, s = t * o, c = n * o), {
					scale: o,
					texW: s,
					texH: c
				};
			}
		},
		{
			key: "draw",
			value: function(e, t, n) {
				var r = this;
				if (this.locked) throw Error("can't draw, atlas is locked");
				var a = this.texSize, o = this.texRows, s = this.texHeight, c = this.getScale(t), l = c.scale, u = c.texW, d = c.texH, f = function(e, r) {
					if (n && r) {
						var a = r.context, o = e.x, c = e.row, u = o, d = s * c;
						a.save(), a.translate(u, d), a.scale(l, l), n(a, t), a.restore();
					}
				}, m = [null, null], h = function() {
					f(r.freePointer, r.canvas), m[0] = {
						x: r.freePointer.x,
						y: r.freePointer.row * s,
						w: u,
						h: d
					}, m[1] = {
						x: r.freePointer.x + u,
						y: r.freePointer.row * s,
						w: 0,
						h: d
					}, r.freePointer.x += u, r.freePointer.x == a && (r.freePointer.x = 0, r.freePointer.row++);
				}, g = function() {
					var e = r.scratch, t = r.canvas;
					e.clear(), f({
						x: 0,
						row: 0
					}, e);
					var n = a - r.freePointer.x, o = u - n, c = s, l = r.freePointer.x, h = r.freePointer.row * s, g = n;
					t.context.drawImage(e, 0, 0, g, c, l, h, g, c), m[0] = {
						x: l,
						y: h,
						w: g,
						h: d
					};
					var _ = n, v = (r.freePointer.row + 1) * s, b = o;
					t && t.context.drawImage(e, _, 0, b, c, 0, v, b, c), m[1] = {
						x: 0,
						y: v,
						w: b,
						h: d
					}, r.freePointer.x = o, r.freePointer.row++;
				}, _ = function() {
					r.freePointer.x = 0, r.freePointer.row++;
				};
				if (this.freePointer.x + u <= a) h();
				else if (this.freePointer.row >= o - 1) return !1;
				else this.freePointer.x === a ? (_(), h()) : this.enableWrapping ? g() : (_(), h());
				return this.keyToLocation.set(e, m), this.needsBuffer = !0, m;
			}
		},
		{
			key: "getOffsets",
			value: function(e) {
				return this.keyToLocation.get(e);
			}
		},
		{
			key: "isEmpty",
			value: function() {
				return this.freePointer.x === 0 && this.freePointer.row === 0;
			}
		},
		{
			key: "canFit",
			value: function(e) {
				if (this.locked) return !1;
				var t = this.texSize, n = this.texRows, r = this.getScale(e).texW;
				return this.freePointer.x + r > t ? this.freePointer.row < n - 1 : !0;
			}
		},
		{
			key: "bufferIfNeeded",
			value: function(e) {
				this.texture ||= createTexture(e, this.debugID), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = !1, this.locked && (this.canvas = null, this.scratch = null));
			}
		},
		{
			key: "dispose",
			value: function() {
				this.texture &&= (this.texture.deleteTexture(), null), this.canvas = null, this.scratch = null, this.locked = !0;
			}
		}
	]);
}(), AtlasCollection = /* @__PURE__ */ function() {
	function e(t, n, r, a) {
		_classCallCheck(this, e), this.r = t, this.texSize = n, this.texRows = r, this.createTextureCanvas = a, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
	}
	return _createClass(e, [
		{
			key: "getKeys",
			value: function() {
				return new Set(this.styleKeyToAtlas.keys());
			}
		},
		{
			key: "_createAtlas",
			value: function() {
				var e = this.r, t = this.texSize, n = this.texRows, r = this.createTextureCanvas;
				return new Atlas(e, t, n, r);
			}
		},
		{
			key: "_getScratchCanvas",
			value: function() {
				if (!this.scratch) {
					var e = this.r, t = this.texSize, n = this.texRows, r = this.createTextureCanvas;
					this.scratch = r(e, t, Math.floor(t / n), "scratch");
				}
				return this.scratch;
			}
		},
		{
			key: "draw",
			value: function(e, t, n) {
				var r = this.styleKeyToAtlas.get(e);
				return r || (r = this.atlases[this.atlases.length - 1], (!r || !r.canFit(t)) && (r && r.lock(), r = this._createAtlas(), this.atlases.push(r)), r.draw(e, t, n), this.styleKeyToAtlas.set(e, r)), r;
			}
		},
		{
			key: "getAtlas",
			value: function(e) {
				return this.styleKeyToAtlas.get(e);
			}
		},
		{
			key: "hasAtlas",
			value: function(e) {
				return this.styleKeyToAtlas.has(e);
			}
		},
		{
			key: "markKeyForGC",
			value: function(e) {
				this.markedKeys.add(e);
			}
		},
		{
			key: "gc",
			value: function() {
				var e = this, t = this.markedKeys;
				if (t.size === 0) {
					console.log("nothing to garbage collect");
					return;
				}
				var n = [], r = /* @__PURE__ */ new Map(), a = null, o = _createForOfIteratorHelper(this.atlases), s;
				try {
					var c = function() {
						var o = s.value, c = o.getKeys(), u = intersection(t, c);
						if (u.size === 0) return n.push(o), c.forEach(function(e) {
							return r.set(e, o);
						}), 1;
						a || (a = e._createAtlas(), n.push(a));
						var d = _createForOfIteratorHelper(c), f;
						try {
							for (d.s(); !(f = d.n()).done;) {
								var m = f.value;
								if (!u.has(m)) {
									var h = _slicedToArray(o.getOffsets(m), 2), _ = h[0], v = h[1];
									a.canFit({
										w: _.w + v.w,
										h: _.h
									}) || (a.lock(), a = e._createAtlas(), n.push(a)), o.canvas && (e._copyTextureToNewAtlas(m, o, a), r.set(m, a));
								}
							}
						} catch (e) {
							d.e(e);
						} finally {
							d.f();
						}
						o.dispose();
					};
					for (o.s(); !(s = o.n()).done;) if (c()) continue;
				} catch (e) {
					o.e(e);
				} finally {
					o.f();
				}
				this.atlases = n, this.styleKeyToAtlas = r, this.markedKeys = /* @__PURE__ */ new Set();
			}
		},
		{
			key: "_copyTextureToNewAtlas",
			value: function(e, t, n) {
				var r = _slicedToArray(t.getOffsets(e), 2), a = r[0], o = r[1];
				if (o.w === 0) n.draw(e, a, function(e) {
					e.drawImage(t.canvas, a.x, a.y, a.w, a.h, 0, 0, a.w, a.h);
				});
				else {
					var s = this._getScratchCanvas();
					s.clear(), s.context.drawImage(t.canvas, a.x, a.y, a.w, a.h, 0, 0, a.w, a.h), s.context.drawImage(t.canvas, o.x, o.y, o.w, o.h, a.w, 0, o.w, o.h);
					var c = a.w + o.w, l = a.h;
					n.draw(e, {
						w: c,
						h: l
					}, function(e) {
						e.drawImage(s, 0, 0, c, l, 0, 0, c, l);
					});
				}
			}
		},
		{
			key: "getCounts",
			value: function() {
				return {
					keyCount: this.styleKeyToAtlas.size,
					atlasCount: new Set(this.styleKeyToAtlas.values()).size
				};
			}
		}
	]);
}();
function intersection(e, t) {
	return e.intersection ? e.intersection(t) : new Set(_toConsumableArray(e).filter(function(e) {
		return t.has(e);
	}));
}
var AtlasManager = /* @__PURE__ */ function() {
	function e(t, n) {
		_classCallCheck(this, e), this.r = t, this.globalOptions = n, this.atlasSize = n.webglTexSize, this.maxAtlasesPerBatch = n.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
	}
	return _createClass(e, [
		{
			key: "getAtlasSize",
			value: function() {
				return this.atlasSize;
			}
		},
		{
			key: "addAtlasCollection",
			value: function(e, t) {
				var n = this.globalOptions, r = n.webglTexSize, a = n.createTextureCanvas, o = t.texRows, s = this._cacheScratchCanvas(a), c = new AtlasCollection(this.r, r, o, s);
				this.collections.set(e, c);
			}
		},
		{
			key: "addRenderType",
			value: function(e, t) {
				var n = t.collection;
				if (!this.collections.has(n)) throw Error(`invalid atlas collection name '${n}'`);
				var r = extend({
					type: e,
					atlasCollection: this.collections.get(n)
				}, t);
				this.renderTypes.set(e, r);
			}
		},
		{
			key: "getRenderTypeOpts",
			value: function(e) {
				return this.renderTypes.get(e);
			}
		},
		{
			key: "getAtlasCollection",
			value: function(e) {
				return this.collections.get(e);
			}
		},
		{
			key: "_cacheScratchCanvas",
			value: function(e) {
				var t = -1, n = -1, r = null;
				return function(a, o, s, c) {
					return c ? ((!r || o != t || s != n) && (t = o, n = s, r = e(a, o, s)), r) : e(a, o, s);
				};
			}
		},
		{
			key: "_key",
			value: function(e, t) {
				return `${e}-${t}`;
			}
		},
		{
			key: "invalidate",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.forceRedraw, a = r === void 0 ? !1 : r, o = n.filterEle, s = o === void 0 ? function() {
					return !0;
				} : o, c = n.filterType, u = c === void 0 ? function() {
					return !0;
				} : c, d = !1, f = !1, m = _createForOfIteratorHelper(e), h;
				try {
					for (m.s(); !(h = m.n()).done;) {
						var g = h.value;
						if (s(g)) {
							var _ = _createForOfIteratorHelper(this.renderTypes.values()), v;
							try {
								var b = function() {
									var e = v.value, n = e.type;
									if (u(n)) {
										var r = t.collections.get(e.collection), o = e.getKey(g), s = Array.isArray(o) ? o : [o];
										if (a) s.forEach(function(e) {
											return r.markKeyForGC(e);
										}), f = !0;
										else {
											var c = e.getID ? e.getID(g) : g.id(), l = t._key(n, c), m = t.typeAndIdToKey.get(l);
											m !== void 0 && !arrayEqual(s, m) && (d = !0, t.typeAndIdToKey.delete(l), m.forEach(function(e) {
												return r.markKeyForGC(e);
											}));
										}
									}
								};
								for (_.s(); !(v = _.n()).done;) b();
							} catch (e) {
								_.e(e);
							} finally {
								_.f();
							}
						}
					}
				} catch (e) {
					m.e(e);
				} finally {
					m.f();
				}
				return f && (this.gc(), d = !1), d;
			}
		},
		{
			key: "gc",
			value: function() {
				var e = _createForOfIteratorHelper(this.collections.values()), t;
				try {
					for (e.s(); !(t = e.n()).done;) t.value.gc();
				} catch (t) {
					e.e(t);
				} finally {
					e.f();
				}
			}
		},
		{
			key: "getOrCreateAtlas",
			value: function(e, t, n, r) {
				var a = this.renderTypes.get(t), o = this.collections.get(a.collection), s = !1, c = o.draw(r, n, function(t) {
					a.drawClipped ? (t.save(), t.beginPath(), t.rect(0, 0, n.w, n.h), t.clip(), a.drawElement(t, e, n, !0, !0), t.restore()) : a.drawElement(t, e, n, !0, !0), s = !0;
				});
				if (s) {
					var l = a.getID ? a.getID(e) : e.id(), u = this._key(t, l);
					this.typeAndIdToKey.has(u) ? this.typeAndIdToKey.get(u).push(r) : this.typeAndIdToKey.set(u, [r]);
				}
				return c;
			}
		},
		{
			key: "getAtlasInfo",
			value: function(e, t) {
				var n = this, r = this.renderTypes.get(t), a = r.getKey(e);
				return (Array.isArray(a) ? a : [a]).map(function(a) {
					var o = r.getBoundingBox(e, a), s = n.getOrCreateAtlas(e, t, o, a), c = _slicedToArray(s.getOffsets(a), 2), l = c[0];
					return {
						atlas: s,
						tex: l,
						tex1: l,
						tex2: c[1],
						bb: o
					};
				});
			}
		},
		{
			key: "getDebugInfo",
			value: function() {
				var e = [], t = _createForOfIteratorHelper(this.collections), n;
				try {
					for (t.s(); !(n = t.n()).done;) {
						var r = _slicedToArray(n.value, 2), a = r[0], o = r[1].getCounts(), s = o.keyCount, c = o.atlasCount;
						e.push({
							type: a,
							keyCount: s,
							atlasCount: c
						});
					}
				} catch (e) {
					t.e(e);
				} finally {
					t.f();
				}
				return e;
			}
		}
	]);
}(), AtlasBatchManager = /* @__PURE__ */ function() {
	function e(t) {
		_classCallCheck(this, e), this.globalOptions = t, this.atlasSize = t.webglTexSize, this.maxAtlasesPerBatch = t.webglTexPerBatch, this.batchAtlases = [];
	}
	return _createClass(e, [
		{
			key: "getMaxAtlasesPerBatch",
			value: function() {
				return this.maxAtlasesPerBatch;
			}
		},
		{
			key: "getAtlasSize",
			value: function() {
				return this.atlasSize;
			}
		},
		{
			key: "getIndexArray",
			value: function() {
				return Array.from({ length: this.maxAtlasesPerBatch }, function(e, t) {
					return t;
				});
			}
		},
		{
			key: "startBatch",
			value: function() {
				this.batchAtlases = [];
			}
		},
		{
			key: "getAtlasCount",
			value: function() {
				return this.batchAtlases.length;
			}
		},
		{
			key: "getAtlases",
			value: function() {
				return this.batchAtlases;
			}
		},
		{
			key: "canAddToCurrentBatch",
			value: function(e) {
				return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(e) : !0;
			}
		},
		{
			key: "getAtlasIndexForBatch",
			value: function(e) {
				var t = this.batchAtlases.indexOf(e);
				if (t < 0) {
					if (this.batchAtlases.length === this.maxAtlasesPerBatch) throw Error("cannot add more atlases to batch");
					this.batchAtlases.push(e), t = this.batchAtlases.length - 1;
				}
				return t;
			}
		}
	]);
}(), circleSD = "\n  float circleSD(vec2 p, float r) {\n    return distance(vec2(0), p) - r; // signed distance\n  }\n", rectangleSD = "\n  float rectangleSD(vec2 p, vec2 b) {\n    vec2 d = abs(p)-b;\n    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);\n  }\n", roundRectangleSD = "\n  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {\n    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;\n    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;\n    vec2 q = abs(p) - b + cr.x;\n    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;\n  }\n", ellipseSD = "\n  float ellipseSD(vec2 p, vec2 ab) {\n    p = abs( p ); // symmetry\n\n    // find root with Newton solver\n    vec2 q = ab*(p-ab);\n    float w = (q.x<q.y)? 1.570796327 : 0.0;\n    for( int i=0; i<5; i++ ) {\n      vec2 cs = vec2(cos(w),sin(w));\n      vec2 u = ab*vec2( cs.x,cs.y);\n      vec2 v = ab*vec2(-cs.y,cs.x);\n      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));\n    }\n    \n    // compute final point and distance\n    float d = length(p-ab*vec2(cos(w),sin(w)));\n    \n    // return signed distance\n    return (dot(p/ab,p/ab)>1.0) ? d : -d;\n  }\n", RENDER_TARGET = {
	SCREEN: {
		name: "screen",
		screen: !0
	},
	PICKING: {
		name: "picking",
		picking: !0
	}
}, TEX_PICKING_MODE = {
	IGNORE: 1,
	USE_BB: 2
}, TEXTURE = 0, EDGE_STRAIGHT = 1, EDGE_CURVE_SEGMENT = 2, EDGE_ARROW = 3, RECTANGLE = 4, ROUND_RECTANGLE = 5, BOTTOM_ROUND_RECTANGLE = 6, ELLIPSE = 7, ElementDrawingWebGL = /* @__PURE__ */ function() {
	function e(t, n, r) {
		_classCallCheck(this, e), this.r = t, this.gl = n, this.maxInstances = r.webglBatchSize, this.atlasSize = r.webglTexSize, this.bgColor = r.bgColor, this.debug = r.webglDebug, this.batchDebugInfo = [], r.enableWrapping = !0, r.createTextureCanvas = createTextureCanvas, this.atlasManager = new AtlasManager(t, r), this.batchManager = new AtlasBatchManager(r), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(RENDER_TARGET.SCREEN), this.pickingProgram = this._createShaderProgram(RENDER_TARGET.PICKING), this.vao = this._createVAO();
	}
	return _createClass(e, [
		{
			key: "addAtlasCollection",
			value: function(e, t) {
				this.atlasManager.addAtlasCollection(e, t);
			}
		},
		{
			key: "addTextureAtlasRenderType",
			value: function(e, t) {
				this.atlasManager.addRenderType(e, t);
			}
		},
		{
			key: "addSimpleShapeRenderType",
			value: function(e, t) {
				this.simpleShapeOptions.set(e, t);
			}
		},
		{
			key: "invalidate",
			value: function(e) {
				var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).type, n = this.atlasManager;
				return t ? n.invalidate(e, {
					filterType: function(e) {
						return e === t;
					},
					forceRedraw: !0
				}) : n.invalidate(e);
			}
		},
		{
			key: "gc",
			value: function() {
				this.atlasManager.gc();
			}
		},
		{
			key: "_createShaderProgram",
			value: function(e) {
				var t = this.gl, n = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == ${TEXTURE}) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == ${RECTANGLE} || aVertType == ${ELLIPSE} 
             || aVertType == ${ROUND_RECTANGLE} || aVertType == ${BOTTOM_ROUND_RECTANGLE}) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == ${EDGE_STRAIGHT}) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == ${EDGE_CURVE_SEGMENT}) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == ${EDGE_ARROW} && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `, r = this.batchManager.getIndexArray(), a = createProgram(t, n, `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      ${r.map(function(e) {
					return `uniform sampler2D uTexture${e};`;
				}).join("\n	")}

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      ${circleSD}
      ${rectangleSD}
      ${roundRectangleSD}
      ${ellipseSD}

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == ${TEXTURE}) {
          // look up the texel from the texture unit
          ${r.map(function(e) {
					return `if(vAtlasId == ${e}) outColor = texture(uTexture${e}, vTexCoord);`;
				}).join("\n	else ")}
        } 
        else if(vVertType == ${EDGE_ARROW}) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == ${RECTANGLE} && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == ${RECTANGLE} || vVertType == ${ELLIPSE} 
          || vVertType == ${ROUND_RECTANGLE} || vVertType == ${BOTTOM_ROUND_RECTANGLE}) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == ${RECTANGLE}) {
            d = rectangleSD(p, b);
          } else if(vVertType == ${ELLIPSE} && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == ${ELLIPSE}) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        ${e.picking ? "if(outColor.a == 0.0) discard;\n             else outColor = vIndex;" : ""}
      }
    `);
				a.aPosition = t.getAttribLocation(a, "aPosition"), a.aIndex = t.getAttribLocation(a, "aIndex"), a.aVertType = t.getAttribLocation(a, "aVertType"), a.aTransform = t.getAttribLocation(a, "aTransform"), a.aAtlasId = t.getAttribLocation(a, "aAtlasId"), a.aTex = t.getAttribLocation(a, "aTex"), a.aPointAPointB = t.getAttribLocation(a, "aPointAPointB"), a.aPointCPointD = t.getAttribLocation(a, "aPointCPointD"), a.aLineWidth = t.getAttribLocation(a, "aLineWidth"), a.aColor = t.getAttribLocation(a, "aColor"), a.aCornerRadius = t.getAttribLocation(a, "aCornerRadius"), a.aBorderColor = t.getAttribLocation(a, "aBorderColor"), a.uPanZoomMatrix = t.getUniformLocation(a, "uPanZoomMatrix"), a.uAtlasSize = t.getUniformLocation(a, "uAtlasSize"), a.uBGColor = t.getUniformLocation(a, "uBGColor"), a.uZoom = t.getUniformLocation(a, "uZoom"), a.uTextures = [];
				for (var o = 0; o < this.batchManager.getMaxAtlasesPerBatch(); o++) a.uTextures.push(t.getUniformLocation(a, `uTexture${o}`));
				return a;
			}
		},
		{
			key: "_createVAO",
			value: function() {
				var e = [
					0,
					0,
					1,
					0,
					1,
					1,
					0,
					0,
					1,
					1,
					0,
					1
				];
				this.vertexCount = e.length / 2;
				var t = this.maxInstances, n = this.gl, r = this.program, a = n.createVertexArray();
				return n.bindVertexArray(a), createBufferStaticDraw(n, "vec2", r.aPosition, e), this.transformBuffer = create3x3MatrixBufferDynamicDraw(n, t, r.aTransform), this.indexBuffer = createBufferDynamicDraw(n, t, "vec4", r.aIndex), this.vertTypeBuffer = createBufferDynamicDraw(n, t, "int", r.aVertType), this.atlasIdBuffer = createBufferDynamicDraw(n, t, "int", r.aAtlasId), this.texBuffer = createBufferDynamicDraw(n, t, "vec4", r.aTex), this.pointAPointBBuffer = createBufferDynamicDraw(n, t, "vec4", r.aPointAPointB), this.pointCPointDBuffer = createBufferDynamicDraw(n, t, "vec4", r.aPointCPointD), this.lineWidthBuffer = createBufferDynamicDraw(n, t, "vec2", r.aLineWidth), this.colorBuffer = createBufferDynamicDraw(n, t, "vec4", r.aColor), this.cornerRadiusBuffer = createBufferDynamicDraw(n, t, "vec4", r.aCornerRadius), this.borderColorBuffer = createBufferDynamicDraw(n, t, "vec4", r.aBorderColor), n.bindVertexArray(null), a;
			}
		},
		{
			key: "buffers",
			get: function() {
				var e = this;
				return this._buffers ||= Object.keys(this).filter(function(e) {
					return endsWith(e, "Buffer");
				}).map(function(t) {
					return e[t];
				}), this._buffers;
			}
		},
		{
			key: "startFrame",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : RENDER_TARGET.SCREEN;
				this.panZoomMatrix = e, this.renderTarget = t, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
			}
		},
		{
			key: "startBatch",
			value: function() {
				this.instanceCount = 0, this.batchManager.startBatch();
			}
		},
		{
			key: "endFrame",
			value: function() {
				this.endBatch();
			}
		},
		{
			key: "_isVisible",
			value: function(e, t) {
				return e.visible() ? t && t.isVisible ? t.isVisible(e) : !0 : !1;
			}
		},
		{
			key: "drawTexture",
			value: function(e, t, n) {
				var r = this.atlasManager, a = this.batchManager, o = r.getRenderTypeOpts(n);
				if (this._isVisible(e, o) && !(e.isEdge() && !this._isValidEdge(e))) {
					if (this.renderTarget.picking && o.getTexPickingMode) {
						var s = o.getTexPickingMode(e);
						if (s === TEX_PICKING_MODE.IGNORE) return;
						if (s == TEX_PICKING_MODE.USE_BB) {
							this.drawPickingRectangle(e, t, n);
							return;
						}
					}
					var c = _createForOfIteratorHelper(r.getAtlasInfo(e, n)), u;
					try {
						for (c.s(); !(u = c.n()).done;) {
							var d = u.value, f = d.atlas, m = d.tex1, h = d.tex2;
							a.canAddToCurrentBatch(f) || this.endBatch();
							for (var _ = a.getAtlasIndexForBatch(f), v = 0, b = [[m, !0], [h, !1]]; v < b.length; v++) {
								var S = _slicedToArray(b[v], 2), C = S[0], w = S[1];
								if (C.w != 0) {
									var T = this.instanceCount;
									this.vertTypeBuffer.getView(T)[0] = TEXTURE, indexToVec4(t, this.indexBuffer.getView(T));
									var E = this.atlasIdBuffer.getView(T);
									E[0] = _;
									var D = this.texBuffer.getView(T);
									D[0] = C.x, D[1] = C.y, D[2] = C.w, D[3] = C.h;
									var O = this.transformBuffer.getMatrixView(T);
									this.setTransformMatrix(e, O, o, d, w), this.instanceCount++, w || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
								}
							}
						}
					} catch (e) {
						c.e(e);
					} finally {
						c.f();
					}
				}
			}
		},
		{
			key: "setTransformMatrix",
			value: function(e, t, n, r) {
				var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = 0;
				if (n.shapeProps && n.shapeProps.padding && (o = e.pstyle(n.shapeProps.padding).pfValue), r) {
					var s = r.bb, c = r.tex1, l = r.tex2, u = c.w / (c.w + l.w);
					a || (u = 1 - u);
					var d = this._getAdjustedBB(s, o, a, u);
					this._applyTransformMatrix(t, d, n, e);
				} else {
					var f = n.getBoundingBox(e), m = this._getAdjustedBB(f, o, !0, 1);
					this._applyTransformMatrix(t, m, n, e);
				}
			}
		},
		{
			key: "_applyTransformMatrix",
			value: function(e, t, n, r) {
				var a, o;
				identity(e);
				var s = n.getRotation ? n.getRotation(r) : 0;
				if (s !== 0) {
					var c = n.getRotationPoint(r), l = c.x, u = c.y;
					translate(e, e, [l, u]), rotate(e, e, s);
					var d = n.getRotationOffset(r);
					a = d.x + (t.xOffset || 0), o = d.y + (t.yOffset || 0);
				} else a = t.x1, o = t.y1;
				translate(e, e, [a, o]), scale(e, e, [t.w, t.h]);
			}
		},
		{
			key: "_getAdjustedBB",
			value: function(e, t, n, r) {
				var a = e.x1, o = e.y1, s = e.w, c = e.h, l = e.yOffset;
				t && (a -= t, o -= t, s += 2 * t, c += 2 * t);
				var u = 0, d = s * r;
				return n && r < 1 ? s = d : !n && r < 1 && (u = s - d, a += u, s = d), {
					x1: a,
					y1: o,
					w: s,
					h: c,
					xOffset: u,
					yOffset: l
				};
			}
		},
		{
			key: "drawPickingRectangle",
			value: function(e, t, n) {
				var r = this.atlasManager.getRenderTypeOpts(n), a = this.instanceCount;
				this.vertTypeBuffer.getView(a)[0] = RECTANGLE, indexToVec4(t, this.indexBuffer.getView(a)), toWebGLColor([
					0,
					0,
					0
				], 1, this.colorBuffer.getView(a));
				var o = this.transformBuffer.getMatrixView(a);
				this.setTransformMatrix(e, o, r), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
			}
		},
		{
			key: "drawNode",
			value: function(e, t, n) {
				var r = this.simpleShapeOptions.get(n);
				if (this._isVisible(e, r)) {
					var a = r.shapeProps, o = this._getVertTypeForShape(e, a.shape);
					if (o === void 0 || r.isSimple && !r.isSimple(e)) {
						this.drawTexture(e, t, n);
						return;
					}
					var s = this.instanceCount;
					if (this.vertTypeBuffer.getView(s)[0] = o, o === ROUND_RECTANGLE || o === BOTTOM_ROUND_RECTANGLE) {
						var c = r.getBoundingBox(e), l = this._getCornerRadius(e, a.radius, c), u = this.cornerRadiusBuffer.getView(s);
						u[0] = l, u[1] = l, u[2] = l, u[3] = l, o === BOTTOM_ROUND_RECTANGLE && (u[0] = 0, u[2] = 0);
					}
					indexToVec4(t, this.indexBuffer.getView(s));
					var d = e.pstyle(a.color).value, f = e.pstyle(a.opacity).value;
					toWebGLColor(d, f, this.colorBuffer.getView(s));
					var m = this.lineWidthBuffer.getView(s);
					if (m[0] = 0, m[1] = 0, a.border) {
						var h = e.pstyle("border-width").value;
						if (h > 0) {
							var g = e.pstyle("border-color").value, _ = e.pstyle("border-opacity").value;
							toWebGLColor(g, _, this.borderColorBuffer.getView(s));
							var v = e.pstyle("border-position").value;
							if (v === "inside") m[0] = 0, m[1] = -h;
							else if (v === "outside") m[0] = h, m[1] = 0;
							else {
								var b = h / 2;
								m[0] = b, m[1] = -b;
							}
						}
					}
					var S = this.transformBuffer.getMatrixView(s);
					this.setTransformMatrix(e, S, r), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
				}
			}
		},
		{
			key: "_getVertTypeForShape",
			value: function(e, t) {
				switch (e.pstyle(t).value) {
					case "rectangle": return RECTANGLE;
					case "ellipse": return ELLIPSE;
					case "roundrectangle":
					case "round-rectangle": return ROUND_RECTANGLE;
					case "bottom-round-rectangle": return BOTTOM_ROUND_RECTANGLE;
					default: return;
				}
			}
		},
		{
			key: "_getCornerRadius",
			value: function(e, t, n) {
				var r = n.w, a = n.h;
				if (e.pstyle(t).value === "auto") return getRoundRectangleRadius(r, a);
				var o = e.pstyle(t).pfValue, s = r / 2, c = a / 2;
				return Math.min(o, c, s);
			}
		},
		{
			key: "drawEdgeArrow",
			value: function(e, t, n) {
				if (e.visible()) {
					var r = e._private.rscratch, a, o, s;
					if (n === "source" ? (a = r.arrowStartX, o = r.arrowStartY, s = r.srcArrowAngle) : (a = r.arrowEndX, o = r.arrowEndY, s = r.tgtArrowAngle), !(isNaN(a) || a == null || isNaN(o) || o == null || isNaN(s) || s == null) && e.pstyle(n + "-arrow-shape").value !== "none") {
						var c = e.pstyle(n + "-arrow-color").value, l = e.pstyle("opacity").value * e.pstyle("line-opacity").value, u = e.pstyle("width").pfValue, d = e.pstyle("arrow-scale").value, f = this.r.getArrowWidth(u, d), m = this.instanceCount, h = this.transformBuffer.getMatrixView(m);
						identity(h), translate(h, h, [a, o]), scale(h, h, [f, f]), rotate(h, h, s), this.vertTypeBuffer.getView(m)[0] = EDGE_ARROW, indexToVec4(t, this.indexBuffer.getView(m)), toWebGLColor(c, l, this.colorBuffer.getView(m)), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
					}
				}
			}
		},
		{
			key: "drawEdgeLine",
			value: function(e, t) {
				if (e.visible()) {
					var n = this._getEdgePoints(e);
					if (n) {
						var r = e.pstyle("opacity").value, a = e.pstyle("line-opacity").value, o = e.pstyle("width").pfValue, s = e.pstyle("line-color").value, c = r * a;
						if (n.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), n.length == 4) {
							var l = this.instanceCount;
							this.vertTypeBuffer.getView(l)[0] = EDGE_STRAIGHT, indexToVec4(t, this.indexBuffer.getView(l)), toWebGLColor(s, c, this.colorBuffer.getView(l));
							var u = this.lineWidthBuffer.getView(l);
							u[0] = o;
							var d = this.pointAPointBBuffer.getView(l);
							d[0] = n[0], d[1] = n[1], d[2] = n[2], d[3] = n[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
						} else for (var f = 0; f < n.length - 2; f += 2) {
							var m = this.instanceCount;
							this.vertTypeBuffer.getView(m)[0] = EDGE_CURVE_SEGMENT, indexToVec4(t, this.indexBuffer.getView(m)), toWebGLColor(s, c, this.colorBuffer.getView(m));
							var h = this.lineWidthBuffer.getView(m);
							h[0] = o;
							var g = n[f - 2], _ = n[f - 1], v = n[f], b = n[f + 1], S = n[f + 2], C = n[f + 3], w = n[f + 4], T = n[f + 5];
							f == 0 && (g = 2 * v - S + .001, _ = 2 * b - C + .001), f == n.length - 4 && (w = 2 * S - v + .001, T = 2 * C - b + .001);
							var E = this.pointAPointBBuffer.getView(m);
							E[0] = g, E[1] = _, E[2] = v, E[3] = b;
							var D = this.pointCPointDBuffer.getView(m);
							D[0] = S, D[1] = C, D[2] = w, D[3] = T, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
						}
					}
				}
			}
		},
		{
			key: "_isValidEdge",
			value: function(e) {
				var t = e._private.rscratch;
				return !(t.badLine || t.allpts == null || isNaN(t.allpts[0]));
			}
		},
		{
			key: "_getEdgePoints",
			value: function(e) {
				var t = e._private.rscratch;
				if (this._isValidEdge(e)) {
					var n = t.allpts;
					if (n.length == 4) return n;
					var r = this._getNumSegments(e);
					return this._getCurveSegmentPoints(n, r);
				}
			}
		},
		{
			key: "_getNumSegments",
			value: function(e) {
				return Math.min(15, this.maxInstances);
			}
		},
		{
			key: "_getCurveSegmentPoints",
			value: function(e, t) {
				if (e.length == 4) return e;
				for (var n = Array((t + 1) * 2), r = 0; r <= t; r++) if (r == 0) n[0] = e[0], n[1] = e[1];
				else if (r == t) n[r * 2] = e[e.length - 2], n[r * 2 + 1] = e[e.length - 1];
				else {
					var a = r / t;
					this._setCurvePoint(e, a, n, r * 2);
				}
				return n;
			}
		},
		{
			key: "_setCurvePoint",
			value: function(e, t, n, r) {
				if (e.length <= 2) n[r] = e[0], n[r + 1] = e[1];
				else {
					for (var a = Array(e.length - 2), o = 0; o < a.length; o += 2) {
						var s = (1 - t) * e[o] + t * e[o + 2], c = (1 - t) * e[o + 1] + t * e[o + 3];
						a[o] = s, a[o + 1] = c;
					}
					return this._setCurvePoint(a, t, n, r);
				}
			}
		},
		{
			key: "endBatch",
			value: function() {
				var e = this.gl, t = this.vao, n = this.vertexCount, r = this.instanceCount;
				if (r !== 0) {
					var a = this.renderTarget.picking ? this.pickingProgram : this.program;
					e.useProgram(a), e.bindVertexArray(t);
					var o = _createForOfIteratorHelper(this.buffers), s;
					try {
						for (o.s(); !(s = o.n()).done;) s.value.bufferSubData(r);
					} catch (e) {
						o.e(e);
					} finally {
						o.f();
					}
					for (var c = this.batchManager.getAtlases(), u = 0; u < c.length; u++) c[u].bufferIfNeeded(e);
					for (var d = 0; d < c.length; d++) e.activeTexture(e.TEXTURE0 + d), e.bindTexture(e.TEXTURE_2D, c[d].texture), e.uniform1i(a.uTextures[d], d);
					e.uniform1f(a.uZoom, getEffectiveZoom(this.r)), e.uniformMatrix3fv(a.uPanZoomMatrix, !1, this.panZoomMatrix), e.uniform1i(a.uAtlasSize, this.batchManager.getAtlasSize());
					var f = toWebGLColor(this.bgColor, 1);
					e.uniform4fv(a.uBGColor, f), e.drawArraysInstanced(e.TRIANGLES, 0, n, r), e.bindVertexArray(null), e.bindTexture(e.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
						count: r,
						atlasCount: c.length
					}), this.startBatch();
				}
			}
		},
		{
			key: "getDebugInfo",
			value: function() {
				var e = this.atlasManager.getDebugInfo(), t = e.reduce(function(e, t) {
					return e + t.atlasCount;
				}, 0), n = this.batchDebugInfo, r = n.reduce(function(e, t) {
					return e + t.count;
				}, 0);
				return {
					atlasInfo: e,
					totalAtlases: t,
					wrappedCount: this.wrappedCount,
					simpleCount: this.simpleCount,
					batchCount: n.length,
					batchInfo: n,
					totalInstances: r
				};
			}
		}
	]);
}(), CRp$4 = {};
CRp$4.initWebgl = function(e, t) {
	var n = this, r = n.data.contexts[n.WEBGL];
	e.bgColor = getBGColor(n), e.webglTexSize = Math.min(e.webglTexSize, r.getParameter(r.MAX_TEXTURE_SIZE)), e.webglTexRows = Math.min(e.webglTexRows, 54), e.webglTexRowsNodes = Math.min(e.webglTexRowsNodes, 54), e.webglBatchSize = Math.min(e.webglBatchSize, 16384), e.webglTexPerBatch = Math.min(e.webglTexPerBatch, r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS)), n.webglDebug = e.webglDebug, n.webglDebugShowAtlases = e.webglDebugShowAtlases, n.pickingFrameBuffer = createPickingFrameBuffer(r), n.pickingFrameBuffer.needsDraw = !0, n.drawing = new ElementDrawingWebGL(n, r, e);
	var a = function(e) {
		return function(t) {
			return n.getTextAngle(t, e);
		};
	}, o = function(e) {
		return function(t) {
			var n = t.pstyle(e);
			return n && n.value;
		};
	}, s = function(e) {
		return function(t) {
			return t.pstyle(`${e}-opacity`).value > 0;
		};
	}, c = function(e) {
		return e.pstyle("text-events").strValue === "yes" ? TEX_PICKING_MODE.USE_BB : TEX_PICKING_MODE.IGNORE;
	}, l = function(e) {
		var t = e.position(), n = t.x, r = t.y, a = e.outerWidth(), o = e.outerHeight();
		return {
			w: a,
			h: o,
			x1: n - a / 2,
			y1: r - o / 2
		};
	};
	n.drawing.addAtlasCollection("node", { texRows: e.webglTexRowsNodes }), n.drawing.addAtlasCollection("label", { texRows: e.webglTexRows }), n.drawing.addTextureAtlasRenderType("node-body", {
		collection: "node",
		getKey: t.getStyleKey,
		getBoundingBox: t.getElementBox,
		drawElement: t.drawElement
	}), n.drawing.addSimpleShapeRenderType("node-body", {
		getBoundingBox: l,
		isSimple: isSimpleShape,
		shapeProps: {
			shape: "shape",
			color: "background-color",
			opacity: "background-opacity",
			radius: "corner-radius",
			border: !0
		}
	}), n.drawing.addSimpleShapeRenderType("node-overlay", {
		getBoundingBox: l,
		isVisible: s("overlay"),
		shapeProps: {
			shape: "overlay-shape",
			color: "overlay-color",
			opacity: "overlay-opacity",
			padding: "overlay-padding",
			radius: "overlay-corner-radius"
		}
	}), n.drawing.addSimpleShapeRenderType("node-underlay", {
		getBoundingBox: l,
		isVisible: s("underlay"),
		shapeProps: {
			shape: "underlay-shape",
			color: "underlay-color",
			opacity: "underlay-opacity",
			padding: "underlay-padding",
			radius: "underlay-corner-radius"
		}
	}), n.drawing.addTextureAtlasRenderType("label", {
		collection: "label",
		getTexPickingMode: c,
		getKey: getStyleKeysForLabel(t.getLabelKey, null),
		getBoundingBox: getBoundingBoxForLabel(t.getLabelBox, null),
		drawClipped: !0,
		drawElement: t.drawLabel,
		getRotation: a(null),
		getRotationPoint: t.getLabelRotationPoint,
		getRotationOffset: t.getLabelRotationOffset,
		isVisible: o("label")
	}), n.drawing.addTextureAtlasRenderType("edge-source-label", {
		collection: "label",
		getTexPickingMode: c,
		getKey: getStyleKeysForLabel(t.getSourceLabelKey, "source"),
		getBoundingBox: getBoundingBoxForLabel(t.getSourceLabelBox, "source"),
		drawClipped: !0,
		drawElement: t.drawSourceLabel,
		getRotation: a("source"),
		getRotationPoint: t.getSourceLabelRotationPoint,
		getRotationOffset: t.getSourceLabelRotationOffset,
		isVisible: o("source-label")
	}), n.drawing.addTextureAtlasRenderType("edge-target-label", {
		collection: "label",
		getTexPickingMode: c,
		getKey: getStyleKeysForLabel(t.getTargetLabelKey, "target"),
		getBoundingBox: getBoundingBoxForLabel(t.getTargetLabelBox, "target"),
		drawClipped: !0,
		drawElement: t.drawTargetLabel,
		getRotation: a("target"),
		getRotationPoint: t.getTargetLabelRotationPoint,
		getRotationOffset: t.getTargetLabelRotationOffset,
		isVisible: o("target-label")
	});
	var u = debounce(function() {
		console.log("garbage collect flag set"), n.data.gc = !0;
	}, 1e4);
	n.onUpdateEleCalcs(function(e, t) {
		var r = !1;
		t && t.length > 0 && (r |= n.drawing.invalidate(t)), r && u();
	}), overrideCanvasRendererFunctions(n);
};
function getBGColor(e) {
	var t = e.cy.container();
	return color2tuple(t && t.style && t.style.backgroundColor || "white");
}
function getLabelLines(e, t) {
	var n = e._private.rscratch;
	return getPrefixedProperty(n, "labelWrapCachedLines", t) || [];
}
var getStyleKeysForLabel = function(e, t) {
	return function(n) {
		var r = e(n), a = getLabelLines(n, t);
		return a.length > 1 ? a.map(function(e, t) {
			return `${r}_${t}`;
		}) : r;
	};
}, getBoundingBoxForLabel = function(e, t) {
	return function(n, r) {
		var a = e(n);
		if (typeof r == "string") {
			var o = r.indexOf("_");
			if (o > 0) {
				var s = Number(r.substring(o + 1)), c = getLabelLines(n, t), l = a.h / c.length, u = l * s, d = a.y1 + u;
				return {
					x1: a.x1,
					w: a.w,
					y1: d,
					h: l,
					yOffset: u
				};
			}
		}
		return a;
	};
};
function overrideCanvasRendererFunctions(e) {
	var t = e.render;
	e.render = function(n) {
		n ||= {};
		var r = e.cy;
		e.webgl && (r.zoom() > maxZoom$1 ? (clearWebgl(e), t.call(e, n)) : (clearCanvas(e), renderWebgl(e, n, RENDER_TARGET.SCREEN)));
	};
	var n = e.matchCanvasSize;
	e.matchCanvasSize = function(t) {
		n.call(e, t), e.pickingFrameBuffer.setFramebufferAttachmentSizes(e.canvasWidth, e.canvasHeight), e.pickingFrameBuffer.needsDraw = !0;
	}, e.findNearestElements = function(t, n, r, a) {
		return findNearestElementsWebgl(e, t, n);
	};
	var r = e.invalidateCachedZSortedEles;
	e.invalidateCachedZSortedEles = function() {
		r.call(e), e.pickingFrameBuffer.needsDraw = !0;
	};
	var a = e.notify;
	e.notify = function(t, n) {
		a.call(e, t, n), t === "viewport" || t === "bounds" ? e.pickingFrameBuffer.needsDraw = !0 : t === "background" && e.drawing.invalidate(n, { type: "node-body" });
	};
}
function clearWebgl(e) {
	var t = e.data.contexts[e.WEBGL];
	t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
}
function clearCanvas(e) {
	var t = function(t) {
		t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, e.canvasWidth, e.canvasHeight), t.restore();
	};
	t(e.data.contexts[e.NODE]), t(e.data.contexts[e.DRAG]);
}
function createPanZoomMatrix(e) {
	var t = e.canvasWidth, n = e.canvasHeight, r = getEffectivePanZoom(e), a = r.pan, o = r.zoom, s = create();
	translate(s, s, [a.x, a.y]), scale(s, s, [o, o]);
	var c = create();
	projection(c, t, n);
	var l = create();
	return multiply(l, c, s), l;
}
function setContextTransform(e, t) {
	var n = e.canvasWidth, r = e.canvasHeight, a = getEffectivePanZoom(e), o = a.pan, s = a.zoom;
	t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, n, r), t.translate(o.x, o.y), t.scale(s, s);
}
function drawSelectionRectangle(e, t) {
	e.drawSelectionRectangle(t, function(t) {
		return setContextTransform(e, t);
	});
}
function drawAxes(e) {
	var t = e.data.contexts[e.NODE];
	t.save(), setContextTransform(e, t), t.strokeStyle = "rgba(0, 0, 0, 0.3)", t.beginPath(), t.moveTo(-1e3, 0), t.lineTo(1e3, 0), t.stroke(), t.beginPath(), t.moveTo(0, -1e3), t.lineTo(0, 1e3), t.stroke(), t.restore();
}
function drawAtlases(e) {
	var t = function(t, n, r) {
		for (var a = t.atlasManager.getAtlasCollection(n), o = e.data.contexts[e.NODE], s = a.atlases, c = 0; c < s.length; c++) {
			var l = s[c].canvas;
			if (l) {
				var u = l.width, d = l.height, f = u * c, m = l.height * r, h = .4;
				o.save(), o.scale(h, h), o.drawImage(l, f, m), o.strokeStyle = "black", o.rect(f, m, u, d), o.stroke(), o.restore();
			}
		}
	}, n = 0;
	t(e.drawing, "node", n++), t(e.drawing, "label", n++);
}
function getPickingIndexes(e, t, n, r, a) {
	var o, s, c, l, u = getEffectivePanZoom(e), d = u.pan, f = u.zoom, m = _slicedToArray(modelToRenderedPosition(e, d, f, t, n), 2), h = m[0], _ = m[1], v = 6;
	if (o = h - v / 2, s = _ - v / 2, c = v, l = v, c === 0 || l === 0) return [];
	var b = e.data.contexts[e.WEBGL];
	b.bindFramebuffer(b.FRAMEBUFFER, e.pickingFrameBuffer), e.pickingFrameBuffer.needsDraw && (b.viewport(0, 0, b.canvas.width, b.canvas.height), renderWebgl(e, null, RENDER_TARGET.PICKING), e.pickingFrameBuffer.needsDraw = !1);
	var S = c * l, C = new Uint8Array(S * 4);
	b.readPixels(o, s, c, l, b.RGBA, b.UNSIGNED_BYTE, C), b.bindFramebuffer(b.FRAMEBUFFER, null);
	for (var w = /* @__PURE__ */ new Set(), T = 0; T < S; T++) {
		var E = vec4ToIndex(C.slice(T * 4, T * 4 + 4)) - 1;
		E >= 0 && w.add(E);
	}
	return w;
}
function findNearestElementsWebgl(e, t, n) {
	var r = getPickingIndexes(e, t, n), a = e.getCachedZSortedEles(), o, s, c = _createForOfIteratorHelper(r), u;
	try {
		for (c.s(); !(u = c.n()).done;) {
			var d = a[u.value];
			if (!o && d.isNode() && (o = d), !s && d.isEdge() && (s = d), o && s) break;
		}
	} catch (e) {
		c.e(e);
	} finally {
		c.f();
	}
	return [o, s].filter(Boolean);
}
function drawEle(e, t, n) {
	var r = e.drawing;
	t += 1, n.isNode() ? (r.drawNode(n, t, "node-underlay"), r.drawNode(n, t, "node-body"), r.drawTexture(n, t, "label"), r.drawNode(n, t, "node-overlay")) : (r.drawEdgeLine(n, t), r.drawEdgeArrow(n, t, "source"), r.drawEdgeArrow(n, t, "target"), r.drawTexture(n, t, "label"), r.drawTexture(n, t, "edge-source-label"), r.drawTexture(n, t, "edge-target-label"));
}
function renderWebgl(e, t, n) {
	var r;
	e.webglDebug && (r = performance.now());
	var a = e.drawing, o = 0;
	if (n.screen && e.data.canvasNeedsRedraw[e.SELECT_BOX] && drawSelectionRectangle(e, t), e.data.canvasNeedsRedraw[e.NODE] || n.picking) {
		var s = e.data.contexts[e.WEBGL];
		n.screen ? (s.clearColor(0, 0, 0, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA)) : s.disable(s.BLEND), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.viewport(0, 0, s.canvas.width, s.canvas.height);
		var c = createPanZoomMatrix(e), u = e.getCachedZSortedEles();
		if (o = u.length, a.startFrame(c, n), n.screen) {
			for (var d = 0; d < u.nondrag.length; d++) drawEle(e, d, u.nondrag[d]);
			for (var f = 0; f < u.drag.length; f++) drawEle(e, f, u.drag[f]);
		} else if (n.picking) for (var m = 0; m < u.length; m++) drawEle(e, m, u[m]);
		a.endFrame(), n.screen && e.webglDebugShowAtlases && (drawAxes(e), drawAtlases(e)), e.data.canvasNeedsRedraw[e.NODE] = !1, e.data.canvasNeedsRedraw[e.DRAG] = !1;
	}
	if (e.webglDebug) {
		var h = performance.now(), g = !1, _ = Math.ceil(h - r), v = a.getDebugInfo(), b = [
			`${o} elements`,
			`${v.totalInstances} instances`,
			`${v.batchCount} batches`,
			`${v.totalAtlases} atlases`,
			`${v.wrappedCount} wrapped textures`,
			`${v.simpleCount} simple shapes`
		].join(", ");
		if (g) console.log(`WebGL (${n.name}) - time ${_}ms, ${b}`);
		else {
			console.log(`WebGL (${n.name}) - frame time ${_}ms`), console.log("Totals:"), console.log(`  ${b}`), console.log("Texture Atlases Used:");
			var S = v.atlasInfo, C = _createForOfIteratorHelper(S), w;
			try {
				for (C.s(); !(w = C.n()).done;) {
					var T = w.value;
					console.log(`  ${T.type}: ${T.keyCount} keys, ${T.atlasCount} atlases`);
				}
			} catch (e) {
				C.e(e);
			} finally {
				C.f();
			}
			console.log("");
		}
	}
	e.data.gc && (console.log("Garbage Collect!"), e.data.gc = !1, a.gc());
}
var CRp$3 = {};
CRp$3.drawPolygonPath = function(e, t, n, r, a, o) {
	var s = r / 2, c = a / 2;
	e.beginPath && e.beginPath(), e.moveTo(t + s * o[0], n + c * o[1]);
	for (var l = 1; l < o.length / 2; l++) e.lineTo(t + s * o[l * 2], n + c * o[l * 2 + 1]);
	e.closePath();
}, CRp$3.drawRoundPolygonPath = function(e, t, n, r, a, o, s) {
	s.forEach(function(t) {
		return drawPreparedRoundCorner(e, t);
	}), e.closePath();
}, CRp$3.drawRoundRectanglePath = function(e, t, n, r, a, o) {
	var s = r / 2, c = a / 2, l = o === "auto" ? getRoundRectangleRadius(r, a) : Math.min(o, c, s);
	e.beginPath && e.beginPath(), e.moveTo(t, n - c), e.arcTo(t + s, n - c, t + s, n, l), e.arcTo(t + s, n + c, t, n + c, l), e.arcTo(t - s, n + c, t - s, n, l), e.arcTo(t - s, n - c, t, n - c, l), e.lineTo(t, n - c), e.closePath();
}, CRp$3.drawBottomRoundRectanglePath = function(e, t, n, r, a, o) {
	var s = r / 2, c = a / 2, l = o === "auto" ? getRoundRectangleRadius(r, a) : o;
	e.beginPath && e.beginPath(), e.moveTo(t, n - c), e.lineTo(t + s, n - c), e.lineTo(t + s, n), e.arcTo(t + s, n + c, t, n + c, l), e.arcTo(t - s, n + c, t - s, n, l), e.lineTo(t - s, n - c), e.lineTo(t, n - c), e.closePath();
}, CRp$3.drawCutRectanglePath = function(e, t, n, r, a, o, s) {
	var c = r / 2, l = a / 2, u = s === "auto" ? getCutRectangleCornerLength() : s;
	e.beginPath && e.beginPath(), e.moveTo(t - c + u, n - l), e.lineTo(t + c - u, n - l), e.lineTo(t + c, n - l + u), e.lineTo(t + c, n + l - u), e.lineTo(t + c - u, n + l), e.lineTo(t - c + u, n + l), e.lineTo(t - c, n + l - u), e.lineTo(t - c, n - l + u), e.closePath();
}, CRp$3.drawBarrelPath = function(e, t, n, r, a) {
	var o = r / 2, s = a / 2, c = t - o, l = t + o, u = n - s, d = n + s, f = getBarrelCurveConstants(r, a), m = f.widthOffset, h = f.heightOffset, g = f.ctrlPtOffsetPct * m;
	e.beginPath && e.beginPath(), e.moveTo(c, u + h), e.lineTo(c, d - h), e.quadraticCurveTo(c + g, d, c + m, d), e.lineTo(l - m, d), e.quadraticCurveTo(l - g, d, l, d - h), e.lineTo(l, u + h), e.quadraticCurveTo(l - g, u, l - m, u), e.lineTo(c + m, u), e.quadraticCurveTo(c + g, u, c, u + h), e.closePath();
};
for (var sin0 = Math.sin(0), cos0 = Math.cos(0), sin = {}, cos = {}, ellipseStepSize = Math.PI / 40, i = 0 * Math.PI; i < 2 * Math.PI; i += ellipseStepSize) sin[i] = Math.sin(i), cos[i] = Math.cos(i);
CRp$3.drawEllipsePath = function(e, t, n, r, a) {
	if (e.beginPath && e.beginPath(), e.ellipse) e.ellipse(t, n, r / 2, a / 2, 0, 0, 2 * Math.PI);
	else for (var o, s, c = r / 2, l = a / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += ellipseStepSize) o = t - c * sin[u] * sin0 + c * cos[u] * cos0, s = n + l * cos[u] * sin0 + l * sin[u] * cos0, u === 0 ? e.moveTo(o, s) : e.lineTo(o, s);
	e.closePath();
};
var CRp$2 = {};
CRp$2.createBuffer = function(e, t) {
	var n = document.createElement("canvas");
	return n.width = e, n.height = t, [n, n.getContext("2d")];
}, CRp$2.bufferCanvasImage = function(e) {
	var t = this.cy, n = t.mutableElements().boundingBox(), r = this.findContainerClientCoords(), a = e.full ? Math.ceil(n.w) : r[2], o = e.full ? Math.ceil(n.h) : r[3], s = number$1(e.maxWidth) || number$1(e.maxHeight), c = this.getPixelRatio(), l = 1;
	if (e.scale !== void 0) a *= e.scale, o *= e.scale, l = e.scale;
	else if (s) {
		var u = Infinity, d = Infinity;
		number$1(e.maxWidth) && (u = l * e.maxWidth / a), number$1(e.maxHeight) && (d = l * e.maxHeight / o), l = Math.min(u, d), a *= l, o *= l;
	}
	s || (a *= c, o *= c, l *= c);
	var f = document.createElement("canvas");
	f.width = a, f.height = o, f.style.width = a + "px", f.style.height = o + "px";
	var m = f.getContext("2d");
	if (a > 0 && o > 0) {
		m.clearRect(0, 0, a, o), m.globalCompositeOperation = "source-over";
		var h = this.getCachedZSortedEles();
		if (e.full) m.translate(-n.x1 * l, -n.y1 * l), m.scale(l, l), this.drawElements(m, h), m.scale(1 / l, 1 / l), m.translate(n.x1 * l, n.y1 * l);
		else {
			var g = t.pan(), _ = {
				x: g.x * l,
				y: g.y * l
			};
			l *= t.zoom(), m.translate(_.x, _.y), m.scale(l, l), this.drawElements(m, h), m.scale(1 / l, 1 / l), m.translate(-_.x, -_.y);
		}
		e.bg && (m.globalCompositeOperation = "destination-over", m.fillStyle = e.bg, m.rect(0, 0, a, o), m.fill());
	}
	return f;
};
function b64ToBlob(e, t) {
	for (var n = atob(e), r = new ArrayBuffer(n.length), a = new Uint8Array(r), o = 0; o < n.length; o++) a[o] = n.charCodeAt(o);
	return new Blob([r], { type: t });
}
function b64UriToB64(e) {
	var t = e.indexOf(",");
	return e.substr(t + 1);
}
function output(e, t, n) {
	var r = function() {
		return t.toDataURL(n, e.quality);
	};
	switch (e.output) {
		case "blob-promise": return new Promise$1(function(r, a) {
			try {
				t.toBlob(function(e) {
					e == null ? a(/* @__PURE__ */ Error("`canvas.toBlob()` sent a null value in its callback")) : r(e);
				}, n, e.quality);
			} catch (e) {
				a(e);
			}
		});
		case "blob": return b64ToBlob(b64UriToB64(r()), n);
		case "base64": return b64UriToB64(r());
		case "base64uri":
		default: return r();
	}
}
CRp$2.png = function(e) {
	return output(e, this.bufferCanvasImage(e), "image/png");
}, CRp$2.jpg = function(e) {
	return output(e, this.bufferCanvasImage(e), "image/jpeg");
};
var CRp$1 = {};
CRp$1.nodeShapeImpl = function(e, t, n, r, a, o, s, c) {
	switch (e) {
		case "ellipse": return this.drawEllipsePath(t, n, r, a, o);
		case "polygon": return this.drawPolygonPath(t, n, r, a, o, s);
		case "round-polygon": return this.drawRoundPolygonPath(t, n, r, a, o, s, c);
		case "roundrectangle":
		case "round-rectangle": return this.drawRoundRectanglePath(t, n, r, a, o, c);
		case "cutrectangle":
		case "cut-rectangle": return this.drawCutRectanglePath(t, n, r, a, o, s, c);
		case "bottomroundrectangle":
		case "bottom-round-rectangle": return this.drawBottomRoundRectanglePath(t, n, r, a, o, c);
		case "barrel": return this.drawBarrelPath(t, n, r, a, o);
	}
};
var CR = CanvasRenderer, CRp = CanvasRenderer.prototype;
CRp.CANVAS_LAYERS = 3, CRp.SELECT_BOX = 0, CRp.DRAG = 1, CRp.NODE = 2, CRp.WEBGL = 3, CRp.CANVAS_TYPES = [
	"2d",
	"2d",
	"2d",
	"webgl2"
], CRp.BUFFER_COUNT = 3, CRp.TEXTURE_BUFFER = 0, CRp.MOTIONBLUR_BUFFER_NODE = 1, CRp.MOTIONBLUR_BUFFER_DRAG = 2;
function CanvasRenderer(e) {
	var t = this, n = t.cy.window().document;
	e.webgl && (CRp.CANVAS_LAYERS = t.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), t.data = {
		canvases: Array(CRp.CANVAS_LAYERS),
		contexts: Array(CRp.CANVAS_LAYERS),
		canvasNeedsRedraw: Array(CRp.CANVAS_LAYERS),
		bufferCanvases: Array(CRp.BUFFER_COUNT),
		bufferContexts: Array(CRp.CANVAS_LAYERS)
	};
	var r = "-webkit-tap-highlight-color", a = "rgba(0,0,0,0)";
	t.data.canvasContainer = n.createElement("div");
	var o = t.data.canvasContainer.style;
	t.data.canvasContainer.style[r] = a, o.position = "relative", o.zIndex = "0", o.overflow = "hidden";
	var s = e.cy.container();
	s.appendChild(t.data.canvasContainer), s.style[r] = a;
	var c = {
		"-webkit-user-select": "none",
		"-moz-user-select": "-moz-none",
		"user-select": "none",
		"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
		"outline-style": "none"
	};
	ms() && (c["-ms-touch-action"] = "none", c["touch-action"] = "none");
	for (var l = 0; l < CRp.CANVAS_LAYERS; l++) {
		var u = t.data.canvases[l] = n.createElement("canvas"), d = CRp.CANVAS_TYPES[l];
		t.data.contexts[l] = u.getContext(d), t.data.contexts[l] || error("Could not create canvas of type " + d), Object.keys(c).forEach(function(e) {
			u.style[e] = c[e];
		}), u.style.position = "absolute", u.setAttribute("data-id", "layer" + l), u.style.zIndex = String(CRp.CANVAS_LAYERS - l), t.data.canvasContainer.appendChild(u), t.data.canvasNeedsRedraw[l] = !1;
	}
	t.data.topCanvas = t.data.canvases[0], t.data.canvases[CRp.NODE].setAttribute("data-id", "layer" + CRp.NODE + "-node"), t.data.canvases[CRp.SELECT_BOX].setAttribute("data-id", "layer" + CRp.SELECT_BOX + "-selectbox"), t.data.canvases[CRp.DRAG].setAttribute("data-id", "layer" + CRp.DRAG + "-drag"), t.data.canvases[CRp.WEBGL] && t.data.canvases[CRp.WEBGL].setAttribute("data-id", "layer" + CRp.WEBGL + "-webgl");
	for (var l = 0; l < CRp.BUFFER_COUNT; l++) t.data.bufferCanvases[l] = n.createElement("canvas"), t.data.bufferContexts[l] = t.data.bufferCanvases[l].getContext("2d"), t.data.bufferCanvases[l].style.position = "absolute", t.data.bufferCanvases[l].setAttribute("data-id", "buffer" + l), t.data.bufferCanvases[l].style.zIndex = String(-l - 1), t.data.bufferCanvases[l].style.visibility = "hidden";
	t.pathsEnabled = !0;
	var f = makeBoundingBox(), m = function(e) {
		return {
			x: (e.x1 + e.x2) / 2,
			y: (e.y1 + e.y2) / 2
		};
	}, h = function(e) {
		return {
			x: -e.w / 2,
			y: -e.h / 2
		};
	}, g = function(e) {
		var t = e[0]._private;
		return t.oldBackgroundTimestamp !== t.backgroundTimestamp;
	}, _ = function(e) {
		return e[0]._private.nodeKey;
	}, v = function(e) {
		return e[0]._private.labelStyleKey;
	}, b = function(e) {
		return e[0]._private.sourceLabelStyleKey;
	}, S = function(e) {
		return e[0]._private.targetLabelStyleKey;
	}, C = function(e, n, r, a, o) {
		return t.drawElement(e, n, r, !1, !1, o);
	}, w = function(e, n, r, a, o) {
		return t.drawElementText(e, n, r, a, "main", o);
	}, T = function(e, n, r, a, o) {
		return t.drawElementText(e, n, r, a, "source", o);
	}, E = function(e, n, r, a, o) {
		return t.drawElementText(e, n, r, a, "target", o);
	}, D = function(e) {
		return e.boundingBox(), e[0]._private.bodyBounds;
	}, O = function(e) {
		return e.boundingBox(), e[0]._private.labelBounds.main || f;
	}, k = function(e) {
		return e.boundingBox(), e[0]._private.labelBounds.source || f;
	}, A = function(e) {
		return e.boundingBox(), e[0]._private.labelBounds.target || f;
	}, j = function(e, t) {
		return t;
	}, M = function(e) {
		return m(D(e));
	}, N = function(e, t, n) {
		var r = e ? e + "-" : "";
		return {
			x: t.x + n.pstyle(r + "text-margin-x").pfValue,
			y: t.y + n.pstyle(r + "text-margin-y").pfValue
		};
	}, P = function(e, t, n) {
		var r = e[0]._private.rscratch;
		return {
			x: r[t],
			y: r[n]
		};
	}, F = function(e) {
		return N("", P(e, "labelX", "labelY"), e);
	}, I = function(e) {
		return N("source", P(e, "sourceLabelX", "sourceLabelY"), e);
	}, L = function(e) {
		return N("target", P(e, "targetLabelX", "targetLabelY"), e);
	}, R = function(e) {
		return h(D(e));
	}, z = function(e) {
		return h(k(e));
	}, B = function(e) {
		return h(A(e));
	}, V = function(e) {
		var t = O(e), n = h(O(e));
		if (e.isNode()) {
			switch (e.pstyle("text-halign").value) {
				case "left":
					n.x = -t.w - (t.leftPad || 0);
					break;
				case "right":
					n.x = -(t.rightPad || 0);
					break;
			}
			switch (e.pstyle("text-valign").value) {
				case "top":
					n.y = -t.h - (t.topPad || 0);
					break;
				case "bottom":
					n.y = -(t.botPad || 0);
					break;
			}
		}
		return n;
	}, H = t.data.eleTxrCache = new ElementTextureCache(t, {
		getKey: _,
		doesEleInvalidateKey: g,
		drawElement: C,
		getBoundingBox: D,
		getRotationPoint: M,
		getRotationOffset: R,
		allowEdgeTxrCaching: !1,
		allowParentTxrCaching: !1
	}), U = t.data.lblTxrCache = new ElementTextureCache(t, {
		getKey: v,
		drawElement: w,
		getBoundingBox: O,
		getRotationPoint: F,
		getRotationOffset: V,
		isVisible: j
	}), W = t.data.slbTxrCache = new ElementTextureCache(t, {
		getKey: b,
		drawElement: T,
		getBoundingBox: k,
		getRotationPoint: I,
		getRotationOffset: z,
		isVisible: j
	}), G = t.data.tlbTxrCache = new ElementTextureCache(t, {
		getKey: S,
		drawElement: E,
		getBoundingBox: A,
		getRotationPoint: L,
		getRotationOffset: B,
		isVisible: j
	}), q = t.data.lyrTxrCache = new LayeredTextureCache(t);
	t.onUpdateEleCalcs(function(e, t) {
		H.invalidateElements(t), U.invalidateElements(t), W.invalidateElements(t), G.invalidateElements(t), q.invalidateElements(t);
		for (var n = 0; n < t.length; n++) {
			var r = t[n]._private;
			r.oldBackgroundTimestamp = r.backgroundTimestamp;
		}
	});
	var J = function(e) {
		for (var t = 0; t < e.length; t++) q.enqueueElementRefinement(e[t].ele);
	};
	H.onDequeue(J), U.onDequeue(J), W.onDequeue(J), G.onDequeue(J), e.webgl && t.initWebgl(e, {
		getStyleKey: _,
		getLabelKey: v,
		getSourceLabelKey: b,
		getTargetLabelKey: S,
		drawElement: C,
		drawLabel: w,
		drawSourceLabel: T,
		drawTargetLabel: E,
		getElementBox: D,
		getLabelBox: O,
		getSourceLabelBox: k,
		getTargetLabelBox: A,
		getElementRotationPoint: M,
		getElementRotationOffset: R,
		getLabelRotationPoint: F,
		getSourceLabelRotationPoint: I,
		getTargetLabelRotationPoint: L,
		getLabelRotationOffset: V,
		getSourceLabelRotationOffset: z,
		getTargetLabelRotationOffset: B
	});
}
CRp.redrawHint = function(e, t) {
	var n = this;
	switch (e) {
		case "eles":
			n.data.canvasNeedsRedraw[CRp.NODE] = t;
			break;
		case "drag":
			n.data.canvasNeedsRedraw[CRp.DRAG] = t;
			break;
		case "select":
			n.data.canvasNeedsRedraw[CRp.SELECT_BOX] = t;
			break;
		case "gc":
			n.data.gc = !0;
			break;
	}
};
var pathsImpld = typeof Path2D < "u";
CRp.path2dEnabled = function(e) {
	if (e === void 0) return this.pathsEnabled;
	this.pathsEnabled = !!e;
}, CRp.usePaths = function() {
	return pathsImpld && this.pathsEnabled;
}, CRp.setImgSmoothing = function(e, t) {
	e.imageSmoothingEnabled == null ? (e.webkitImageSmoothingEnabled = t, e.mozImageSmoothingEnabled = t, e.msImageSmoothingEnabled = t) : e.imageSmoothingEnabled = t;
}, CRp.getImgSmoothing = function(e) {
	return e.imageSmoothingEnabled == null ? e.webkitImageSmoothingEnabled || e.mozImageSmoothingEnabled || e.msImageSmoothingEnabled : e.imageSmoothingEnabled;
}, CRp.makeOffscreenCanvas = function(e, t) {
	var n;
	return (typeof OffscreenCanvas > "u" ? "undefined" : _typeof(OffscreenCanvas)) === "undefined" ? (n = this.cy.window().document.createElement("canvas"), n.width = e, n.height = t) : n = new OffscreenCanvas(e, t), n;
}, [
	CRp$b,
	CRp$a,
	CRp$9,
	CRp$8,
	CRp$7,
	CRp$6,
	CRp$5,
	CRp$4,
	CRp$3,
	CRp$2,
	CRp$1
].forEach(function(e) {
	extend(CRp, e);
});
var incExts = [{
	type: "layout",
	extensions: layout
}, {
	type: "renderer",
	extensions: [
		{
			name: "null",
			impl: NullRenderer
		},
		{
			name: "base",
			impl: BR
		},
		{
			name: "canvas",
			impl: CR
		}
	]
}], extensions = {}, modules = {};
function setExtension(e, t, n) {
	var r = n, a = function(n) {
		warn("Can not register `" + t + "` for `" + e + "` since `" + n + "` already exists in the prototype and can not be overridden");
	};
	if (e === "core") {
		if (Core.prototype[t]) return a(t);
		Core.prototype[t] = n;
	} else if (e === "collection") {
		if (Collection.prototype[t]) return a(t);
		Collection.prototype[t] = n;
	} else if (e === "layout") {
		for (var o = function(e) {
			this.options = e, n.call(this, e), plainObject(this._private) || (this._private = {}), this._private.cy = e.cy, this._private.listeners = [], this.createEmitter();
		}, s = o.prototype = Object.create(n.prototype), c = [], l = 0; l < c.length; l++) {
			var u = c[l];
			s[u] = s[u] || function() {
				return this;
			};
		}
		s.start && !s.run ? s.run = function() {
			return this.start(), this;
		} : !s.start && s.run && (s.start = function() {
			return this.run(), this;
		});
		var d = n.prototype.stop;
		s.stop = function() {
			var e = this.options;
			if (e && e.animate) {
				var t = this.animations;
				if (t) for (var n = 0; n < t.length; n++) t[n].stop();
			}
			return d ? d.call(this) : this.emit("layoutstop"), this;
		}, s.destroy ||= function() {
			return this;
		}, s.cy = function() {
			return this._private.cy;
		};
		var f = function(e) {
			return e._private.cy;
		}, m = {
			addEventFields: function(e, t) {
				t.layout = e, t.cy = f(e), t.target = e;
			},
			bubble: function() {
				return !0;
			},
			parent: function(e) {
				return f(e);
			}
		};
		extend(s, {
			createEmitter: function() {
				return this._private.emitter = new Emitter(m, this), this;
			},
			emitter: function() {
				return this._private.emitter;
			},
			on: function(e, t) {
				return this.emitter().on(e, t), this;
			},
			one: function(e, t) {
				return this.emitter().one(e, t), this;
			},
			once: function(e, t) {
				return this.emitter().one(e, t), this;
			},
			removeListener: function(e, t) {
				return this.emitter().removeListener(e, t), this;
			},
			removeAllListeners: function() {
				return this.emitter().removeAllListeners(), this;
			},
			emit: function(e, t) {
				return this.emitter().emit(e, t), this;
			}
		}), define.eventAliasesOn(s), r = o;
	} else if (e === "renderer" && t !== "null" && t !== "base") {
		var h = getExtension("renderer", "base"), g = h.prototype, _ = n, v = n.prototype, b = function() {
			h.apply(this, arguments), _.apply(this, arguments);
		}, S = b.prototype;
		for (var C in g) {
			var w = g[C];
			if (v[C] != null) return a(C);
			S[C] = w;
		}
		for (var T in v) S[T] = v[T];
		g.clientFunctions.forEach(function(e) {
			S[e] = S[e] || function() {
				error("Renderer does not implement `renderer." + e + "()` on its prototype");
			};
		}), r = b;
	} else if (e === "__proto__" || e === "constructor" || e === "prototype") return error(e + " is an illegal type to be registered, possibly lead to prototype pollutions");
	return setMap({
		map: extensions,
		keys: [e, t],
		value: r
	});
}
function getExtension(e, t) {
	return getMap({
		map: extensions,
		keys: [e, t]
	});
}
function setModule(e, t, n, r, a) {
	return setMap({
		map: modules,
		keys: [
			e,
			t,
			n,
			r
		],
		value: a
	});
}
function getModule(e, t, n, r) {
	return getMap({
		map: modules,
		keys: [
			e,
			t,
			n,
			r
		]
	});
}
var extension = function() {
	if (arguments.length === 2) return getExtension.apply(null, arguments);
	if (arguments.length === 3) return setExtension.apply(null, arguments);
	if (arguments.length === 4) return getModule.apply(null, arguments);
	if (arguments.length === 5) return setModule.apply(null, arguments);
	error("Invalid extension access syntax");
};
Core.prototype.extension = extension, incExts.forEach(function(e) {
	e.extensions.forEach(function(t) {
		setExtension(e.type, t.name, t.impl);
	});
});
var _Stylesheet = function() {
	if (!(this instanceof _Stylesheet)) return new _Stylesheet();
	this.length = 0;
}, sheetfn = _Stylesheet.prototype;
sheetfn.instanceString = function() {
	return "stylesheet";
}, sheetfn.selector = function(e) {
	var t = this.length++;
	return this[t] = {
		selector: e,
		properties: []
	}, this;
}, sheetfn.css = function(e, t) {
	var n = this.length - 1;
	if (string(e)) this[n].properties.push({
		name: e,
		value: t
	});
	else if (plainObject(e)) for (var r = e, a = Object.keys(r), o = 0; o < a.length; o++) {
		var s = a[o], c = r[s];
		if (c != null) {
			var l = _Style.properties[s] || _Style.properties[dash2camel(s)];
			if (l != null) {
				var u = l.name, d = c;
				this[n].properties.push({
					name: u,
					value: d
				});
			}
		}
	}
	return this;
}, sheetfn.style = sheetfn.css, sheetfn.generateStyle = function(e) {
	var t = new _Style(e);
	return this.appendToStyle(t);
}, sheetfn.appendToStyle = function(e) {
	for (var t = 0; t < this.length; t++) {
		var n = this[t], r = n.selector, a = n.properties;
		e.selector(r);
		for (var o = 0; o < a.length; o++) {
			var s = a[o];
			e.css(s.name, s.value);
		}
	}
	return e;
};
var version = "3.33.1", cytoscape = function(e) {
	if (e === void 0 && (e = {}), plainObject(e)) return new Core(e);
	if (string(e)) return extension.apply(extension, arguments);
};
cytoscape.use = function(e) {
	var t = Array.prototype.slice.call(arguments, 1);
	return t.unshift(cytoscape), e.apply(null, t), this;
}, cytoscape.warnings = function(e) {
	return warnings(e);
}, cytoscape.version = version, cytoscape.stylesheet = cytoscape.Stylesheet = _Stylesheet;
export { cytoscape as t };

//# sourceMappingURL=cytoscape.esm-DEQqGYaL.js.map