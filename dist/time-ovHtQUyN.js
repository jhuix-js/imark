import { a as copy, f as tickStep, i as continuous, y as bisector } from "./linear-Csp1_tTx.js";
import { n as initRange } from "./init-ULMCeUqd.js";
function max(i, l) {
	let u;
	if (l === void 0) for (let l of i) l != null && (u < l || u === void 0 && l >= l) && (u = l);
	else {
		let d = -1;
		for (let f of i) (f = l(f, ++d, i)) != null && (u < f || u === void 0 && f >= f) && (u = f);
	}
	return u;
}
function min(i, l) {
	let u;
	if (l === void 0) for (let l of i) l != null && (u > l || u === void 0 && l >= l) && (u = l);
	else {
		let d = -1;
		for (let f of i) (f = l(f, ++d, i)) != null && (u > f || u === void 0 && f >= f) && (u = f);
	}
	return u;
}
function nice(i, l) {
	i = i.slice();
	var u = 0, d = i.length - 1, f = i[u], p = i[d], m;
	return p < f && (m = u, u = d, d = m, m = f, f = p, p = m), i[u] = l.floor(f), i[d] = l.ceil(p), i;
}
var t0 = /* @__PURE__ */ new Date(), t1 = /* @__PURE__ */ new Date();
function timeInterval(i, l, u, d) {
	function f(l) {
		return i(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
	}
	return f.floor = (l) => (i(l = /* @__PURE__ */ new Date(+l)), l), f.ceil = (u) => (i(u = /* @__PURE__ */ new Date(u - 1)), l(u, 1), i(u), u), f.round = (i) => {
		let l = f(i), u = f.ceil(i);
		return i - l < u - i ? l : u;
	}, f.offset = (i, u) => (l(i = /* @__PURE__ */ new Date(+i), u == null ? 1 : Math.floor(u)), i), f.range = (u, d, p) => {
		let m = [];
		if (u = f.ceil(u), p = p == null ? 1 : Math.floor(p), !(u < d) || !(p > 0)) return m;
		let h;
		do
			m.push(h = /* @__PURE__ */ new Date(+u)), l(u, p), i(u);
		while (h < u && u < d);
		return m;
	}, f.filter = (u) => timeInterval((l) => {
		if (l >= l) for (; i(l), !u(l);) l.setTime(l - 1);
	}, (i, d) => {
		if (i >= i) if (d < 0) for (; ++d <= 0;) for (; l(i, -1), !u(i););
		else for (; --d >= 0;) for (; l(i, 1), !u(i););
	}), u && (f.count = (l, d) => (t0.setTime(+l), t1.setTime(+d), i(t0), i(t1), Math.floor(u(t0, t1))), f.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? f.filter(d ? (l) => d(l) % i === 0 : (l) => f.count(0, l) % i === 0) : f)), f;
}
const millisecond = timeInterval(() => {}, (i, l) => {
	i.setTime(+i + l);
}, (i, l) => l - i);
millisecond.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? timeInterval((l) => {
	l.setTime(Math.floor(l / i) * i);
}, (l, u) => {
	l.setTime(+l + u * i);
}, (l, u) => (u - l) / i) : millisecond), millisecond.range;
const durationSecond = 1e3, durationMinute = durationSecond * 60, durationHour = durationMinute * 60, durationDay = durationHour * 24, durationWeek = durationDay * 7, durationMonth = durationDay * 30, durationYear = durationDay * 365, second = timeInterval((i) => {
	i.setTime(i - i.getMilliseconds());
}, (i, l) => {
	i.setTime(+i + l * durationSecond);
}, (i, l) => (l - i) / durationSecond, (i) => i.getUTCSeconds());
second.range;
const timeMinute = timeInterval((i) => {
	i.setTime(i - i.getMilliseconds() - i.getSeconds() * durationSecond);
}, (i, l) => {
	i.setTime(+i + l * durationMinute);
}, (i, l) => (l - i) / durationMinute, (i) => i.getMinutes());
timeMinute.range;
const utcMinute = timeInterval((i) => {
	i.setUTCSeconds(0, 0);
}, (i, l) => {
	i.setTime(+i + l * durationMinute);
}, (i, l) => (l - i) / durationMinute, (i) => i.getUTCMinutes());
utcMinute.range;
const timeHour = timeInterval((i) => {
	i.setTime(i - i.getMilliseconds() - i.getSeconds() * durationSecond - i.getMinutes() * durationMinute);
}, (i, l) => {
	i.setTime(+i + l * durationHour);
}, (i, l) => (l - i) / durationHour, (i) => i.getHours());
timeHour.range;
const utcHour = timeInterval((i) => {
	i.setUTCMinutes(0, 0, 0);
}, (i, l) => {
	i.setTime(+i + l * durationHour);
}, (i, l) => (l - i) / durationHour, (i) => i.getUTCHours());
utcHour.range;
const timeDay = timeInterval((i) => i.setHours(0, 0, 0, 0), (i, l) => i.setDate(i.getDate() + l), (i, l) => (l - i - (l.getTimezoneOffset() - i.getTimezoneOffset()) * durationMinute) / durationDay, (i) => i.getDate() - 1);
timeDay.range;
const utcDay = timeInterval((i) => {
	i.setUTCHours(0, 0, 0, 0);
}, (i, l) => {
	i.setUTCDate(i.getUTCDate() + l);
}, (i, l) => (l - i) / durationDay, (i) => i.getUTCDate() - 1);
utcDay.range;
const unixDay = timeInterval((i) => {
	i.setUTCHours(0, 0, 0, 0);
}, (i, l) => {
	i.setUTCDate(i.getUTCDate() + l);
}, (i, l) => (l - i) / durationDay, (i) => Math.floor(i / durationDay));
unixDay.range;
function timeWeekday(i) {
	return timeInterval((l) => {
		l.setDate(l.getDate() - (l.getDay() + 7 - i) % 7), l.setHours(0, 0, 0, 0);
	}, (i, l) => {
		i.setDate(i.getDate() + l * 7);
	}, (i, l) => (l - i - (l.getTimezoneOffset() - i.getTimezoneOffset()) * durationMinute) / durationWeek);
}
const timeSunday = timeWeekday(0), timeMonday = timeWeekday(1), timeTuesday = timeWeekday(2), timeWednesday = timeWeekday(3), timeThursday = timeWeekday(4), timeFriday = timeWeekday(5), timeSaturday = timeWeekday(6);
timeSunday.range, timeMonday.range, timeTuesday.range, timeWednesday.range, timeThursday.range, timeFriday.range, timeSaturday.range;
function utcWeekday(i) {
	return timeInterval((l) => {
		l.setUTCDate(l.getUTCDate() - (l.getUTCDay() + 7 - i) % 7), l.setUTCHours(0, 0, 0, 0);
	}, (i, l) => {
		i.setUTCDate(i.getUTCDate() + l * 7);
	}, (i, l) => (l - i) / durationWeek);
}
const utcSunday = utcWeekday(0), utcMonday = utcWeekday(1), utcTuesday = utcWeekday(2), utcWednesday = utcWeekday(3), utcThursday = utcWeekday(4), utcFriday = utcWeekday(5), utcSaturday = utcWeekday(6);
utcSunday.range, utcMonday.range, utcTuesday.range, utcWednesday.range, utcThursday.range, utcFriday.range, utcSaturday.range;
const timeMonth = timeInterval((i) => {
	i.setDate(1), i.setHours(0, 0, 0, 0);
}, (i, l) => {
	i.setMonth(i.getMonth() + l);
}, (i, l) => l.getMonth() - i.getMonth() + (l.getFullYear() - i.getFullYear()) * 12, (i) => i.getMonth());
timeMonth.range;
const utcMonth = timeInterval((i) => {
	i.setUTCDate(1), i.setUTCHours(0, 0, 0, 0);
}, (i, l) => {
	i.setUTCMonth(i.getUTCMonth() + l);
}, (i, l) => l.getUTCMonth() - i.getUTCMonth() + (l.getUTCFullYear() - i.getUTCFullYear()) * 12, (i) => i.getUTCMonth());
utcMonth.range;
const timeYear = timeInterval((i) => {
	i.setMonth(0, 1), i.setHours(0, 0, 0, 0);
}, (i, l) => {
	i.setFullYear(i.getFullYear() + l);
}, (i, l) => l.getFullYear() - i.getFullYear(), (i) => i.getFullYear());
timeYear.every = (i) => !isFinite(i = Math.floor(i)) || !(i > 0) ? null : timeInterval((l) => {
	l.setFullYear(Math.floor(l.getFullYear() / i) * i), l.setMonth(0, 1), l.setHours(0, 0, 0, 0);
}, (l, u) => {
	l.setFullYear(l.getFullYear() + u * i);
}), timeYear.range;
const utcYear = timeInterval((i) => {
	i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
}, (i, l) => {
	i.setUTCFullYear(i.getUTCFullYear() + l);
}, (i, l) => l.getUTCFullYear() - i.getUTCFullYear(), (i) => i.getUTCFullYear());
utcYear.every = (i) => !isFinite(i = Math.floor(i)) || !(i > 0) ? null : timeInterval((l) => {
	l.setUTCFullYear(Math.floor(l.getUTCFullYear() / i) * i), l.setUTCMonth(0, 1), l.setUTCHours(0, 0, 0, 0);
}, (l, u) => {
	l.setUTCFullYear(l.getUTCFullYear() + u * i);
}), utcYear.range;
function ticker(i, u, f, p, m, h) {
	let g = [
		[
			second,
			1,
			durationSecond
		],
		[
			second,
			5,
			5 * durationSecond
		],
		[
			second,
			15,
			15 * durationSecond
		],
		[
			second,
			30,
			30 * durationSecond
		],
		[
			h,
			1,
			durationMinute
		],
		[
			h,
			5,
			5 * durationMinute
		],
		[
			h,
			15,
			15 * durationMinute
		],
		[
			h,
			30,
			30 * durationMinute
		],
		[
			m,
			1,
			durationHour
		],
		[
			m,
			3,
			3 * durationHour
		],
		[
			m,
			6,
			6 * durationHour
		],
		[
			m,
			12,
			12 * durationHour
		],
		[
			p,
			1,
			durationDay
		],
		[
			p,
			2,
			2 * durationDay
		],
		[
			f,
			1,
			durationWeek
		],
		[
			u,
			1,
			durationMonth
		],
		[
			u,
			3,
			3 * durationMonth
		],
		[
			i,
			1,
			durationYear
		]
	];
	function _(i, l, u) {
		let d = l < i;
		d && ([i, l] = [l, i]);
		let f = u && typeof u.range == "function" ? u : v(i, l, u), p = f ? f.range(i, +l + 1) : [];
		return d ? p.reverse() : p;
	}
	function v(u, f, p) {
		let m = Math.abs(f - u) / p, h = bisector(([, , i]) => i).right(g, m);
		if (h === g.length) return i.every(tickStep(u / durationYear, f / durationYear, p));
		if (h === 0) return millisecond.every(Math.max(tickStep(u, f, p), 1));
		let [_, v] = g[m / g[h - 1][2] < g[h][2] / m ? h - 1 : h];
		return _.every(v);
	}
	return [_, v];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute), [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
function localDate(i) {
	if (0 <= i.y && i.y < 100) {
		var l = new Date(-1, i.m, i.d, i.H, i.M, i.S, i.L);
		return l.setFullYear(i.y), l;
	}
	return new Date(i.y, i.m, i.d, i.H, i.M, i.S, i.L);
}
function utcDate(i) {
	if (0 <= i.y && i.y < 100) {
		var l = new Date(Date.UTC(-1, i.m, i.d, i.H, i.M, i.S, i.L));
		return l.setUTCFullYear(i.y), l;
	}
	return new Date(Date.UTC(i.y, i.m, i.d, i.H, i.M, i.S, i.L));
}
function newDate(i, l, u) {
	return {
		y: i,
		m: l,
		d: u,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function formatLocale(i) {
	var l = i.dateTime, u = i.date, d = i.time, f = i.periods, p = i.days, m = i.shortDays, h = i.months, g = i.shortMonths, _ = formatRe(f), v = formatLookup(f), y = formatRe(p), b = formatLookup(p), x = formatRe(m), S = formatLookup(m), C = formatRe(h), w = formatLookup(h), T = formatRe(g), E = formatLookup(g), D = {
		a: H,
		A: U,
		b: W,
		B: G,
		c: null,
		d: formatDayOfMonth,
		e: formatDayOfMonth,
		f: formatMicroseconds,
		g: formatYearISO,
		G: formatFullYearISO,
		H: formatHour24,
		I: formatHour12,
		j: formatDayOfYear,
		L: formatMilliseconds,
		m: formatMonthNumber,
		M: formatMinutes,
		p: K,
		q,
		Q: formatUnixTimestamp,
		s: formatUnixTimestampSeconds,
		S: formatSeconds,
		u: formatWeekdayNumberMonday,
		U: formatWeekNumberSunday,
		V: formatWeekNumberISO,
		w: formatWeekdayNumberSunday,
		W: formatWeekNumberMonday,
		x: null,
		X: null,
		y: formatYear,
		Y: formatFullYear,
		Z: formatZone,
		"%": formatLiteralPercent
	}, O = {
		a: J,
		A: Y,
		b: X,
		B: Z,
		c: null,
		d: formatUTCDayOfMonth,
		e: formatUTCDayOfMonth,
		f: formatUTCMicroseconds,
		g: formatUTCYearISO,
		G: formatUTCFullYearISO,
		H: formatUTCHour24,
		I: formatUTCHour12,
		j: formatUTCDayOfYear,
		L: formatUTCMilliseconds,
		m: formatUTCMonthNumber,
		M: formatUTCMinutes,
		p: Q,
		q: $,
		Q: formatUnixTimestamp,
		s: formatUnixTimestampSeconds,
		S: formatUTCSeconds,
		u: formatUTCWeekdayNumberMonday,
		U: formatUTCWeekNumberSunday,
		V: formatUTCWeekNumberISO,
		w: formatUTCWeekdayNumberSunday,
		W: formatUTCWeekNumberMonday,
		x: null,
		X: null,
		y: formatUTCYear,
		Y: formatUTCFullYear,
		Z: formatUTCZone,
		"%": formatLiteralPercent
	}, k = {
		a: F,
		A: I,
		b: L,
		B: R,
		c: z,
		d: parseDayOfMonth,
		e: parseDayOfMonth,
		f: parseMicroseconds,
		g: parseYear,
		G: parseFullYear,
		H: parseHour24,
		I: parseHour24,
		j: parseDayOfYear,
		L: parseMilliseconds,
		m: parseMonthNumber,
		M: parseMinutes,
		p: P,
		q: parseQuarter,
		Q: parseUnixTimestamp,
		s: parseUnixTimestampSeconds,
		S: parseSeconds,
		u: parseWeekdayNumberMonday,
		U: parseWeekNumberSunday,
		V: parseWeekNumberISO,
		w: parseWeekdayNumberSunday,
		W: parseWeekNumberMonday,
		x: B,
		X: V,
		y: parseYear,
		Y: parseFullYear,
		Z: parseZone,
		"%": parseLiteralPercent
	};
	D.x = A(u, D), D.X = A(d, D), D.c = A(l, D), O.x = A(u, O), O.X = A(d, O), O.c = A(l, O);
	function A(i, l) {
		return function(u) {
			var d = [], f = -1, p = 0, m = i.length, h, g, _;
			for (u instanceof Date || (u = /* @__PURE__ */ new Date(+u)); ++f < m;) i.charCodeAt(f) === 37 && (d.push(i.slice(p, f)), (g = pads[h = i.charAt(++f)]) == null ? g = h === "e" ? " " : "0" : h = i.charAt(++f), (_ = l[h]) && (h = _(u, g)), d.push(h), p = f + 1);
			return d.push(i.slice(p, f)), d.join("");
		};
	}
	function j(i, l) {
		return function(u) {
			var d = newDate(1900, void 0, 1), f = N(d, i, u += "", 0), p, m;
			if (f != u.length) return null;
			if ("Q" in d) return new Date(d.Q);
			if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
			if (l && !("Z" in d) && (d.Z = 0), "p" in d && (d.H = d.H % 12 + d.p * 12), d.m === void 0 && (d.m = "q" in d ? d.q : 0), "V" in d) {
				if (d.V < 1 || d.V > 53) return null;
				"w" in d || (d.w = 1), "Z" in d ? (p = utcDate(newDate(d.y, 0, 1)), m = p.getUTCDay(), p = m > 4 || m === 0 ? utcMonday.ceil(p) : utcMonday(p), p = utcDay.offset(p, (d.V - 1) * 7), d.y = p.getUTCFullYear(), d.m = p.getUTCMonth(), d.d = p.getUTCDate() + (d.w + 6) % 7) : (p = localDate(newDate(d.y, 0, 1)), m = p.getDay(), p = m > 4 || m === 0 ? timeMonday.ceil(p) : timeMonday(p), p = timeDay.offset(p, (d.V - 1) * 7), d.y = p.getFullYear(), d.m = p.getMonth(), d.d = p.getDate() + (d.w + 6) % 7);
			} else ("W" in d || "U" in d) && ("w" in d || (d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0), m = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay(), d.m = 0, d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (m + 5) % 7 : d.w + d.U * 7 - (m + 6) % 7);
			return "Z" in d ? (d.H += d.Z / 100 | 0, d.M += d.Z % 100, utcDate(d)) : localDate(d);
		};
	}
	function N(i, l, u, d) {
		for (var f = 0, p = l.length, m = u.length, h, g; f < p;) {
			if (d >= m) return -1;
			if (h = l.charCodeAt(f++), h === 37) {
				if (h = l.charAt(f++), g = k[h in pads ? l.charAt(f++) : h], !g || (d = g(i, u, d)) < 0) return -1;
			} else if (h != u.charCodeAt(d++)) return -1;
		}
		return d;
	}
	function P(i, l, u) {
		var d = _.exec(l.slice(u));
		return d ? (i.p = v.get(d[0].toLowerCase()), u + d[0].length) : -1;
	}
	function F(i, l, u) {
		var d = x.exec(l.slice(u));
		return d ? (i.w = S.get(d[0].toLowerCase()), u + d[0].length) : -1;
	}
	function I(i, l, u) {
		var d = y.exec(l.slice(u));
		return d ? (i.w = b.get(d[0].toLowerCase()), u + d[0].length) : -1;
	}
	function L(i, l, u) {
		var d = T.exec(l.slice(u));
		return d ? (i.m = E.get(d[0].toLowerCase()), u + d[0].length) : -1;
	}
	function R(i, l, u) {
		var d = C.exec(l.slice(u));
		return d ? (i.m = w.get(d[0].toLowerCase()), u + d[0].length) : -1;
	}
	function z(i, u, d) {
		return N(i, l, u, d);
	}
	function B(i, l, d) {
		return N(i, u, l, d);
	}
	function V(i, l, u) {
		return N(i, d, l, u);
	}
	function H(i) {
		return m[i.getDay()];
	}
	function U(i) {
		return p[i.getDay()];
	}
	function W(i) {
		return g[i.getMonth()];
	}
	function G(i) {
		return h[i.getMonth()];
	}
	function K(i) {
		return f[+(i.getHours() >= 12)];
	}
	function q(i) {
		return 1 + ~~(i.getMonth() / 3);
	}
	function J(i) {
		return m[i.getUTCDay()];
	}
	function Y(i) {
		return p[i.getUTCDay()];
	}
	function X(i) {
		return g[i.getUTCMonth()];
	}
	function Z(i) {
		return h[i.getUTCMonth()];
	}
	function Q(i) {
		return f[+(i.getUTCHours() >= 12)];
	}
	function $(i) {
		return 1 + ~~(i.getUTCMonth() / 3);
	}
	return {
		format: function(i) {
			var l = A(i += "", D);
			return l.toString = function() {
				return i;
			}, l;
		},
		parse: function(i) {
			var l = j(i += "", !1);
			return l.toString = function() {
				return i;
			}, l;
		},
		utcFormat: function(i) {
			var l = A(i += "", O);
			return l.toString = function() {
				return i;
			}, l;
		},
		utcParse: function(i) {
			var l = j(i += "", !0);
			return l.toString = function() {
				return i;
			}, l;
		}
	};
}
var pads = {
	"-": "",
	_: " ",
	0: "0"
}, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(i, l, u) {
	var d = i < 0 ? "-" : "", f = (d ? -i : i) + "", p = f.length;
	return d + (p < u ? Array(u - p + 1).join(l) + f : f);
}
function requote(i) {
	return i.replace(requoteRe, "\\$&");
}
function formatRe(i) {
	return RegExp("^(?:" + i.map(requote).join("|") + ")", "i");
}
function formatLookup(i) {
	return new Map(i.map((i, l) => [i.toLowerCase(), l]));
}
function parseWeekdayNumberSunday(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 1));
	return d ? (i.w = +d[0], u + d[0].length) : -1;
}
function parseWeekdayNumberMonday(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 1));
	return d ? (i.u = +d[0], u + d[0].length) : -1;
}
function parseWeekNumberSunday(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.U = +d[0], u + d[0].length) : -1;
}
function parseWeekNumberISO(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.V = +d[0], u + d[0].length) : -1;
}
function parseWeekNumberMonday(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.W = +d[0], u + d[0].length) : -1;
}
function parseFullYear(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 4));
	return d ? (i.y = +d[0], u + d[0].length) : -1;
}
function parseYear(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.y = +d[0] + (+d[0] > 68 ? 1900 : 2e3), u + d[0].length) : -1;
}
function parseZone(i, l, u) {
	var d = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(l.slice(u, u + 6));
	return d ? (i.Z = d[1] ? 0 : -(d[2] + (d[3] || "00")), u + d[0].length) : -1;
}
function parseQuarter(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 1));
	return d ? (i.q = d[0] * 3 - 3, u + d[0].length) : -1;
}
function parseMonthNumber(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.m = d[0] - 1, u + d[0].length) : -1;
}
function parseDayOfMonth(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.d = +d[0], u + d[0].length) : -1;
}
function parseDayOfYear(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 3));
	return d ? (i.m = 0, i.d = +d[0], u + d[0].length) : -1;
}
function parseHour24(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.H = +d[0], u + d[0].length) : -1;
}
function parseMinutes(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.M = +d[0], u + d[0].length) : -1;
}
function parseSeconds(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 2));
	return d ? (i.S = +d[0], u + d[0].length) : -1;
}
function parseMilliseconds(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 3));
	return d ? (i.L = +d[0], u + d[0].length) : -1;
}
function parseMicroseconds(i, l, u) {
	var d = numberRe.exec(l.slice(u, u + 6));
	return d ? (i.L = Math.floor(d[0] / 1e3), u + d[0].length) : -1;
}
function parseLiteralPercent(i, l, u) {
	var d = percentRe.exec(l.slice(u, u + 1));
	return d ? u + d[0].length : -1;
}
function parseUnixTimestamp(i, l, u) {
	var d = numberRe.exec(l.slice(u));
	return d ? (i.Q = +d[0], u + d[0].length) : -1;
}
function parseUnixTimestampSeconds(i, l, u) {
	var d = numberRe.exec(l.slice(u));
	return d ? (i.s = +d[0], u + d[0].length) : -1;
}
function formatDayOfMonth(i, l) {
	return pad(i.getDate(), l, 2);
}
function formatHour24(i, l) {
	return pad(i.getHours(), l, 2);
}
function formatHour12(i, l) {
	return pad(i.getHours() % 12 || 12, l, 2);
}
function formatDayOfYear(i, l) {
	return pad(1 + timeDay.count(timeYear(i), i), l, 3);
}
function formatMilliseconds(i, l) {
	return pad(i.getMilliseconds(), l, 3);
}
function formatMicroseconds(i, l) {
	return formatMilliseconds(i, l) + "000";
}
function formatMonthNumber(i, l) {
	return pad(i.getMonth() + 1, l, 2);
}
function formatMinutes(i, l) {
	return pad(i.getMinutes(), l, 2);
}
function formatSeconds(i, l) {
	return pad(i.getSeconds(), l, 2);
}
function formatWeekdayNumberMonday(i) {
	var l = i.getDay();
	return l === 0 ? 7 : l;
}
function formatWeekNumberSunday(i, l) {
	return pad(timeSunday.count(timeYear(i) - 1, i), l, 2);
}
function dISO(i) {
	var l = i.getDay();
	return l >= 4 || l === 0 ? timeThursday(i) : timeThursday.ceil(i);
}
function formatWeekNumberISO(i, l) {
	return i = dISO(i), pad(timeThursday.count(timeYear(i), i) + (timeYear(i).getDay() === 4), l, 2);
}
function formatWeekdayNumberSunday(i) {
	return i.getDay();
}
function formatWeekNumberMonday(i, l) {
	return pad(timeMonday.count(timeYear(i) - 1, i), l, 2);
}
function formatYear(i, l) {
	return pad(i.getFullYear() % 100, l, 2);
}
function formatYearISO(i, l) {
	return i = dISO(i), pad(i.getFullYear() % 100, l, 2);
}
function formatFullYear(i, l) {
	return pad(i.getFullYear() % 1e4, l, 4);
}
function formatFullYearISO(i, l) {
	var u = i.getDay();
	return i = u >= 4 || u === 0 ? timeThursday(i) : timeThursday.ceil(i), pad(i.getFullYear() % 1e4, l, 4);
}
function formatZone(i) {
	var l = i.getTimezoneOffset();
	return (l > 0 ? "-" : (l *= -1, "+")) + pad(l / 60 | 0, "0", 2) + pad(l % 60, "0", 2);
}
function formatUTCDayOfMonth(i, l) {
	return pad(i.getUTCDate(), l, 2);
}
function formatUTCHour24(i, l) {
	return pad(i.getUTCHours(), l, 2);
}
function formatUTCHour12(i, l) {
	return pad(i.getUTCHours() % 12 || 12, l, 2);
}
function formatUTCDayOfYear(i, l) {
	return pad(1 + utcDay.count(utcYear(i), i), l, 3);
}
function formatUTCMilliseconds(i, l) {
	return pad(i.getUTCMilliseconds(), l, 3);
}
function formatUTCMicroseconds(i, l) {
	return formatUTCMilliseconds(i, l) + "000";
}
function formatUTCMonthNumber(i, l) {
	return pad(i.getUTCMonth() + 1, l, 2);
}
function formatUTCMinutes(i, l) {
	return pad(i.getUTCMinutes(), l, 2);
}
function formatUTCSeconds(i, l) {
	return pad(i.getUTCSeconds(), l, 2);
}
function formatUTCWeekdayNumberMonday(i) {
	var l = i.getUTCDay();
	return l === 0 ? 7 : l;
}
function formatUTCWeekNumberSunday(i, l) {
	return pad(utcSunday.count(utcYear(i) - 1, i), l, 2);
}
function UTCdISO(i) {
	var l = i.getUTCDay();
	return l >= 4 || l === 0 ? utcThursday(i) : utcThursday.ceil(i);
}
function formatUTCWeekNumberISO(i, l) {
	return i = UTCdISO(i), pad(utcThursday.count(utcYear(i), i) + (utcYear(i).getUTCDay() === 4), l, 2);
}
function formatUTCWeekdayNumberSunday(i) {
	return i.getUTCDay();
}
function formatUTCWeekNumberMonday(i, l) {
	return pad(utcMonday.count(utcYear(i) - 1, i), l, 2);
}
function formatUTCYear(i, l) {
	return pad(i.getUTCFullYear() % 100, l, 2);
}
function formatUTCYearISO(i, l) {
	return i = UTCdISO(i), pad(i.getUTCFullYear() % 100, l, 2);
}
function formatUTCFullYear(i, l) {
	return pad(i.getUTCFullYear() % 1e4, l, 4);
}
function formatUTCFullYearISO(i, l) {
	var u = i.getUTCDay();
	return i = u >= 4 || u === 0 ? utcThursday(i) : utcThursday.ceil(i), pad(i.getUTCFullYear() % 1e4, l, 4);
}
function formatUTCZone() {
	return "+0000";
}
function formatLiteralPercent() {
	return "%";
}
function formatUnixTimestamp(i) {
	return +i;
}
function formatUnixTimestampSeconds(i) {
	return Math.floor(i / 1e3);
}
var locale, timeFormat, timeParse, utcFormat, utcParse;
defaultLocale({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function defaultLocale(i) {
	return locale = formatLocale(i), timeFormat = locale.format, timeParse = locale.parse, utcFormat = locale.utcFormat, utcParse = locale.utcParse, locale;
}
function date(i) {
	return new Date(i);
}
function number(i) {
	return i instanceof Date ? +i : +/* @__PURE__ */ new Date(+i);
}
function calendar(l, d, f, p, m, g, _, v, y, b) {
	var x = continuous(), S = x.invert, C = x.domain, w = b(".%L"), T = b(":%S"), E = b("%I:%M"), D = b("%I %p"), O = b("%a %d"), k = b("%b %d"), A = b("%B"), j = b("%Y");
	function M(i) {
		return (y(i) < i ? w : v(i) < i ? T : _(i) < i ? E : g(i) < i ? D : p(i) < i ? m(i) < i ? O : k : f(i) < i ? A : j)(i);
	}
	return x.invert = function(i) {
		return new Date(S(i));
	}, x.domain = function(i) {
		return arguments.length ? C(Array.from(i, number)) : C().map(date);
	}, x.ticks = function(i) {
		var u = C();
		return l(u[0], u[u.length - 1], i ?? 10);
	}, x.tickFormat = function(i, l) {
		return l == null ? M : b(l);
	}, x.nice = function(i) {
		var l = C();
		return (!i || typeof i.range != "function") && (i = d(l[0], l[l.length - 1], i ?? 10)), i ? C(nice(l, i)) : x;
	}, x.copy = function() {
		return copy(x, calendar(l, d, f, p, m, g, _, v, y, b));
	}, x;
}
function time() {
	return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
export { nice as A, utcDay as C, utcMinute as D, timeMinute as E, max as M, second as O, timeDay as S, utcHour as T, timeSunday as _, utcFormat as a, timeWednesday as b, utcTickInterval as c, utcYear as d, timeMonth as f, timeSaturday as g, timeMonday as h, timeParse as i, min as j, millisecond as k, utcTicks as l, timeFriday as m, time as n, utcParse as o, utcMonth as p, timeFormat as r, formatLocale as s, calendar as t, timeYear as u, timeThursday as v, timeHour as w, utcSunday as x, timeTuesday as y };

//# sourceMappingURL=time-ovHtQUyN.js.map