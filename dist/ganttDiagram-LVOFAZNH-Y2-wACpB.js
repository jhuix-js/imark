import { s as __toESM, t as __commonJSMin } from "./chunk-DgPTj83v.js";
import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { g as utils_default } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, o as require_dayjs_min, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, c as configureSvgSize, s as common_default, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as linear } from "./linear-Csp1_tTx.js";
import { E as timeMinute, M as max, O as second, S as timeDay, _ as timeSunday, b as timeWednesday, f as timeMonth, g as timeSaturday, h as timeMonday, j as min, k as millisecond, m as timeFriday, n as time, r as timeFormat, v as timeThursday, w as timeHour, y as timeTuesday } from "./time-ovHtQUyN.js";
import { o as hcl_default } from "./timer-Bp1bAW5T.js";
import "./defaultLocale-BBsRvltv.js";
import "./init-ULMCeUqd.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as require_dist } from "./dist-CUheKjZU.js";
function identity_default(e) {
	return e;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
function translateX(e) {
	return "translate(" + e + ",0)";
}
function translateY(e) {
	return "translate(0," + e + ")";
}
function number(e) {
	return (m) => +e(m);
}
function center(e, m) {
	return m = Math.max(0, e.bandwidth() - m * 2) / 2, e.round() && (m = Math.round(m)), (h) => +e(h) + m;
}
function entering() {
	return !this.__axis;
}
function axis(e, m) {
	var h = [], g = null, _ = null, v = 6, y = 6, b = 3, x = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, S = e === top || e === left ? -1 : 1, C = e === left || e === right ? "x" : "y", T = e === top || e === bottom ? translateX : translateY;
	function E(E) {
		var D = g ?? (m.ticks ? m.ticks.apply(m, h) : m.domain()), O = _ ?? (m.tickFormat ? m.tickFormat.apply(m, h) : identity_default), k = Math.max(v, 0) + b, A = m.range(), j = +A[0] + x, M = +A[A.length - 1] + x, N = (m.bandwidth ? center : number)(m.copy(), x), P = E.selection ? E.selection() : E, F = P.selectAll(".domain").data([null]), I = P.selectAll(".tick").data(D, m).order(), L = I.exit(), R = I.enter().append("g").attr("class", "tick"), z = I.select("line"), B = I.select("text");
		F = F.merge(F.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), I = I.merge(R), z = z.merge(R.append("line").attr("stroke", "currentColor").attr(C + "2", S * v)), B = B.merge(R.append("text").attr("fill", "currentColor").attr(C, S * k).attr("dy", e === top ? "0em" : e === bottom ? "0.71em" : "0.32em")), E !== P && (F = F.transition(E), I = I.transition(E), z = z.transition(E), B = B.transition(E), L = L.transition(E).attr("opacity", epsilon).attr("transform", function(e) {
			return isFinite(e = N(e)) ? T(e + x) : this.getAttribute("transform");
		}), R.attr("opacity", epsilon).attr("transform", function(e) {
			var m = this.parentNode.__axis;
			return T((m && isFinite(m = m(e)) ? m : N(e)) + x);
		})), L.remove(), F.attr("d", e === left || e === right ? y ? "M" + S * y + "," + j + "H" + x + "V" + M + "H" + S * y : "M" + x + "," + j + "V" + M : y ? "M" + j + "," + S * y + "V" + x + "H" + M + "V" + S * y : "M" + j + "," + x + "H" + M), I.attr("opacity", 1).attr("transform", function(e) {
			return T(N(e) + x);
		}), z.attr(C + "2", S * v), B.attr(C, S * k).text(O), P.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === right ? "start" : e === left ? "end" : "middle"), P.each(function() {
			this.__axis = N;
		});
	}
	return E.scale = function(e) {
		return arguments.length ? (m = e, E) : m;
	}, E.ticks = function() {
		return h = Array.from(arguments), E;
	}, E.tickArguments = function(e) {
		return arguments.length ? (h = e == null ? [] : Array.from(e), E) : h.slice();
	}, E.tickValues = function(e) {
		return arguments.length ? (g = e == null ? null : Array.from(e), E) : g && g.slice();
	}, E.tickFormat = function(e) {
		return arguments.length ? (_ = e, E) : _;
	}, E.tickSize = function(e) {
		return arguments.length ? (v = y = +e, E) : v;
	}, E.tickSizeInner = function(e) {
		return arguments.length ? (v = +e, E) : v;
	}, E.tickSizeOuter = function(e) {
		return arguments.length ? (y = +e, E) : y;
	}, E.tickPadding = function(e) {
		return arguments.length ? (b = +e, E) : b;
	}, E.offset = function(e) {
		return arguments.length ? (x = +e, E) : x;
	}, E;
}
function axisTop(e) {
	return axis(top, e);
}
function axisBottom(e) {
	return axis(bottom, e);
}
var require_isoWeek = /* @__PURE__ */ __commonJSMin(((e, m) => {
	(function(h, g) {
		typeof e == "object" && m !== void 0 ? m.exports = g() : typeof define == "function" && define.amd ? define(g) : (h = typeof globalThis < "u" ? globalThis : h || self).dayjs_plugin_isoWeek = g();
	})(e, (function() {
		var e = "day";
		return function(m, h, g) {
			var _ = function(m) {
				return m.add(4 - m.isoWeekday(), e);
			}, v = h.prototype;
			v.isoWeekYear = function() {
				return _(this).year();
			}, v.isoWeek = function(m) {
				if (!this.$utils().u(m)) return this.add(7 * (m - this.isoWeek()), e);
				var h, v, y, b, x = _(this), S = (h = this.isoWeekYear(), v = this.$u, y = (v ? g.utc : g)().year(h).startOf("year"), b = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (b += 7), y.add(b, e));
				return x.diff(S, "week") + 1;
			}, v.isoWeekday = function(e) {
				return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7);
			};
			var y = v.startOf;
			v.startOf = function(e, m) {
				var h = this.$utils(), g = !!h.u(m) || m;
				return h.p(e) === "isoweek" ? g ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : y.bind(this)(e, m);
			};
		};
	}));
})), require_customParseFormat = /* @__PURE__ */ __commonJSMin(((e, m) => {
	(function(h, g) {
		typeof e == "object" && m !== void 0 ? m.exports = g() : typeof define == "function" && define.amd ? define(g) : (h = typeof globalThis < "u" ? globalThis : h || self).dayjs_plugin_customParseFormat = g();
	})(e, (function() {
		var e = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		}, m = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, h = /\d/, g = /\d\d/, _ = /\d\d?/, v = /\d*[^-_:/,()\s\d]+/, y = {}, b = function(e) {
			return (e = +e) + (e > 68 ? 1900 : 2e3);
		}, x = function(e) {
			return function(m) {
				this[e] = +m;
			};
		}, S = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
			(this.zone ||= {}).offset = function(e) {
				if (!e || e === "Z") return 0;
				var m = e.match(/([+-]|\d\d)/g), h = 60 * m[1] + (+m[2] || 0);
				return h === 0 ? 0 : m[0] === "+" ? -h : h;
			}(e);
		}], C = function(e) {
			var m = y[e];
			return m && (m.indexOf ? m : m.s.concat(m.f));
		}, T = function(e, m) {
			var h, g = y.meridiem;
			if (g) {
				for (var _ = 1; _ <= 24; _ += 1) if (e.indexOf(g(_, 0, m)) > -1) {
					h = _ > 12;
					break;
				}
			} else h = e === (m ? "pm" : "PM");
			return h;
		}, E = {
			A: [v, function(e) {
				this.afternoon = T(e, !1);
			}],
			a: [v, function(e) {
				this.afternoon = T(e, !0);
			}],
			Q: [h, function(e) {
				this.month = 3 * (e - 1) + 1;
			}],
			S: [h, function(e) {
				this.milliseconds = 100 * e;
			}],
			SS: [g, function(e) {
				this.milliseconds = 10 * e;
			}],
			SSS: [/\d{3}/, function(e) {
				this.milliseconds = +e;
			}],
			s: [_, x("seconds")],
			ss: [_, x("seconds")],
			m: [_, x("minutes")],
			mm: [_, x("minutes")],
			H: [_, x("hours")],
			h: [_, x("hours")],
			HH: [_, x("hours")],
			hh: [_, x("hours")],
			D: [_, x("day")],
			DD: [g, x("day")],
			Do: [v, function(e) {
				var m = y.ordinal;
				if (this.day = e.match(/\d+/)[0], m) for (var h = 1; h <= 31; h += 1) m(h).replace(/\[|\]/g, "") === e && (this.day = h);
			}],
			w: [_, x("week")],
			ww: [g, x("week")],
			M: [_, x("month")],
			MM: [g, x("month")],
			MMM: [v, function(e) {
				var m = C("months"), h = (C("monthsShort") || m.map((function(e) {
					return e.slice(0, 3);
				}))).indexOf(e) + 1;
				if (h < 1) throw Error();
				this.month = h % 12 || h;
			}],
			MMMM: [v, function(e) {
				var m = C("months").indexOf(e) + 1;
				if (m < 1) throw Error();
				this.month = m % 12 || m;
			}],
			Y: [/[+-]?\d+/, x("year")],
			YY: [g, function(e) {
				this.year = b(e);
			}],
			YYYY: [/\d{4}/, x("year")],
			Z: S,
			ZZ: S
		};
		function D(h) {
			for (var g = h, _ = y && y.formats, v = (h = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(m, h, g) {
				var v = g && g.toUpperCase();
				return h || _[g] || e[g] || _[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, m, h) {
					return m || h.slice(1);
				}));
			}))).match(m), b = v.length, x = 0; x < b; x += 1) {
				var S = v[x], C = E[S], T = C && C[0], D = C && C[1];
				v[x] = D ? {
					regex: T,
					parser: D
				} : S.replace(/^\[|\]$/g, "");
			}
			return function(e) {
				for (var m = {}, h = 0, g = 0; h < b; h += 1) {
					var _ = v[h];
					if (typeof _ == "string") g += _.length;
					else {
						var y = _.regex, x = _.parser, S = e.slice(g), C = y.exec(S)[0];
						x.call(m, C), e = e.replace(C, "");
					}
				}
				return function(e) {
					var m = e.afternoon;
					if (m !== void 0) {
						var h = e.hours;
						m ? h < 12 && (e.hours += 12) : h === 12 && (e.hours = 0), delete e.afternoon;
					}
				}(m), m;
			};
		}
		return function(e, m, h) {
			h.p.customParseFormat = !0, e && e.parseTwoDigitYear && (b = e.parseTwoDigitYear);
			var g = m.prototype, _ = g.parse;
			g.parse = function(e) {
				var m = e.date, g = e.utc, v = e.args;
				this.$u = g;
				var b = v[1];
				if (typeof b == "string") {
					var x = !0 === v[2], S = !0 === v[3], C = x || S, T = v[2];
					S && (T = v[2]), y = this.$locale(), !x && T && (y = h.Ls[T]), this.$d = function(e, m, h, g) {
						try {
							if (["x", "X"].indexOf(m) > -1) return /* @__PURE__ */ new Date((m === "X" ? 1e3 : 1) * e);
							var _ = D(m)(e), v = _.year, y = _.month, b = _.day, x = _.hours, S = _.minutes, C = _.seconds, T = _.milliseconds, E = _.zone, O = _.week, k = /* @__PURE__ */ new Date(), A = b || (v || y ? 1 : k.getDate()), j = v || k.getFullYear(), M = 0;
							v && !y || (M = y > 0 ? y - 1 : k.getMonth());
							var N, P = x || 0, F = S || 0, I = C || 0, L = T || 0;
							return E ? new Date(Date.UTC(j, M, A, P, F, I, L + 60 * E.offset * 1e3)) : h ? new Date(Date.UTC(j, M, A, P, F, I, L)) : (N = new Date(j, M, A, P, F, I, L), O && (N = g(N).week(O).toDate()), N);
						} catch {
							return /* @__PURE__ */ new Date("");
						}
					}(m, b, g, h), this.init(), T && !0 !== T && (this.$L = this.locale(T).$L), C && m != this.format(b) && (this.$d = /* @__PURE__ */ new Date("")), y = {};
				} else if (b instanceof Array) for (var E = b.length, O = 1; O <= E; O += 1) {
					v[1] = b[O - 1];
					var k = h.apply(this, v);
					if (k.isValid()) {
						this.$d = k.$d, this.$L = k.$L, this.init();
						break;
					}
					O === E && (this.$d = /* @__PURE__ */ new Date(""));
				}
				else _.call(this, e);
			};
		};
	}));
})), require_advancedFormat = /* @__PURE__ */ __commonJSMin(((e, m) => {
	(function(h, g) {
		typeof e == "object" && m !== void 0 ? m.exports = g() : typeof define == "function" && define.amd ? define(g) : (h = typeof globalThis < "u" ? globalThis : h || self).dayjs_plugin_advancedFormat = g();
	})(e, (function() {
		return function(e, m) {
			var h = m.prototype, g = h.format;
			h.format = function(e) {
				var m = this, h = this.$locale();
				if (!this.isValid()) return g.bind(this)(e);
				var _ = this.$utils(), v = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e) {
					switch (e) {
						case "Q": return Math.ceil((m.$M + 1) / 3);
						case "Do": return h.ordinal(m.$D);
						case "gggg": return m.weekYear();
						case "GGGG": return m.isoWeekYear();
						case "wo": return h.ordinal(m.week(), "W");
						case "w":
						case "ww": return _.s(m.week(), e === "w" ? 1 : 2, "0");
						case "W":
						case "WW": return _.s(m.isoWeek(), e === "W" ? 1 : 2, "0");
						case "k":
						case "kk": return _.s(String(m.$H === 0 ? 24 : m.$H), e === "k" ? 1 : 2, "0");
						case "X": return Math.floor(m.$d.getTime() / 1e3);
						case "x": return m.$d.getTime();
						case "z": return "[" + m.offsetName() + "]";
						case "zzz": return "[" + m.offsetName("long") + "]";
						default: return e;
					}
				}));
				return g.bind(this)(v);
			};
		};
	}));
})), import_dist = /* @__PURE__ */ __toESM(require_dist(), 1), import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1), import_isoWeek = /* @__PURE__ */ __toESM(require_isoWeek(), 1), import_customParseFormat = /* @__PURE__ */ __toESM(require_customParseFormat(), 1), import_advancedFormat = /* @__PURE__ */ __toESM(require_advancedFormat(), 1), import_dayjs_min$1 = /* @__PURE__ */ __toESM(require_dayjs_min(), 1), parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, m, h, g) {
		for (h ||= {}, g = e.length; g--; h[e[g]] = m);
		return h;
	}, "o"), m = [
		6,
		8,
		10,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		33,
		35,
		36,
		38,
		40
	], h = [1, 26], g = [1, 27], _ = [1, 28], y = [1, 29], b = [1, 30], x = [1, 31], S = [1, 32], C = [1, 33], T = [1, 34], E = [1, 9], D = [1, 10], O = [1, 11], k = [1, 12], A = [1, 13], j = [1, 14], M = [1, 15], N = [1, 16], P = [1, 19], F = [1, 20], I = [1, 21], L = [1, 22], R = [1, 23], z = [1, 25], B = [1, 35], V = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			gantt: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NL: 10,
			weekday: 11,
			weekday_monday: 12,
			weekday_tuesday: 13,
			weekday_wednesday: 14,
			weekday_thursday: 15,
			weekday_friday: 16,
			weekday_saturday: 17,
			weekday_sunday: 18,
			weekend: 19,
			weekend_friday: 20,
			weekend_saturday: 21,
			dateFormat: 22,
			inclusiveEndDates: 23,
			topAxis: 24,
			axisFormat: 25,
			tickInterval: 26,
			excludes: 27,
			includes: 28,
			todayMarker: 29,
			title: 30,
			acc_title: 31,
			acc_title_value: 32,
			acc_descr: 33,
			acc_descr_value: 34,
			acc_descr_multiline_value: 35,
			section: 36,
			clickStatement: 37,
			taskTxt: 38,
			taskData: 39,
			click: 40,
			callbackname: 41,
			callbackargs: 42,
			href: 43,
			clickStatementDebug: 44,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "gantt",
			6: "EOF",
			8: "SPACE",
			10: "NL",
			12: "weekday_monday",
			13: "weekday_tuesday",
			14: "weekday_wednesday",
			15: "weekday_thursday",
			16: "weekday_friday",
			17: "weekday_saturday",
			18: "weekday_sunday",
			20: "weekend_friday",
			21: "weekend_saturday",
			22: "dateFormat",
			23: "inclusiveEndDates",
			24: "topAxis",
			25: "axisFormat",
			26: "tickInterval",
			27: "excludes",
			28: "includes",
			29: "todayMarker",
			30: "title",
			31: "acc_title",
			32: "acc_title_value",
			33: "acc_descr",
			34: "acc_descr_value",
			35: "acc_descr_multiline_value",
			36: "section",
			38: "taskTxt",
			39: "taskData",
			40: "click",
			41: "callbackname",
			42: "callbackargs",
			43: "href"
		},
		productions_: [
			0,
			[3, 3],
			[5, 0],
			[5, 2],
			[7, 2],
			[7, 1],
			[7, 1],
			[7, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[19, 1],
			[19, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[37, 2],
			[37, 3],
			[37, 3],
			[37, 4],
			[37, 3],
			[37, 4],
			[37, 2],
			[44, 2],
			[44, 3],
			[44, 3],
			[44, 4],
			[44, 3],
			[44, 4],
			[44, 2]
		],
		performAction: /* @__PURE__ */ __name(function(e, m, h, g, _, v, y) {
			var b = v.length - 1;
			switch (_) {
				case 1: return v[b - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					v[b - 1].push(v[b]), this.$ = v[b - 1];
					break;
				case 4:
				case 5:
					this.$ = v[b];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					g.setWeekday("monday");
					break;
				case 9:
					g.setWeekday("tuesday");
					break;
				case 10:
					g.setWeekday("wednesday");
					break;
				case 11:
					g.setWeekday("thursday");
					break;
				case 12:
					g.setWeekday("friday");
					break;
				case 13:
					g.setWeekday("saturday");
					break;
				case 14:
					g.setWeekday("sunday");
					break;
				case 15:
					g.setWeekend("friday");
					break;
				case 16:
					g.setWeekend("saturday");
					break;
				case 17:
					g.setDateFormat(v[b].substr(11)), this.$ = v[b].substr(11);
					break;
				case 18:
					g.enableInclusiveEndDates(), this.$ = v[b].substr(18);
					break;
				case 19:
					g.TopAxis(), this.$ = v[b].substr(8);
					break;
				case 20:
					g.setAxisFormat(v[b].substr(11)), this.$ = v[b].substr(11);
					break;
				case 21:
					g.setTickInterval(v[b].substr(13)), this.$ = v[b].substr(13);
					break;
				case 22:
					g.setExcludes(v[b].substr(9)), this.$ = v[b].substr(9);
					break;
				case 23:
					g.setIncludes(v[b].substr(9)), this.$ = v[b].substr(9);
					break;
				case 24:
					g.setTodayMarker(v[b].substr(12)), this.$ = v[b].substr(12);
					break;
				case 27:
					g.setDiagramTitle(v[b].substr(6)), this.$ = v[b].substr(6);
					break;
				case 28:
					this.$ = v[b].trim(), g.setAccTitle(this.$);
					break;
				case 29:
				case 30:
					this.$ = v[b].trim(), g.setAccDescription(this.$);
					break;
				case 31:
					g.addSection(v[b].substr(8)), this.$ = v[b].substr(8);
					break;
				case 33:
					g.addTask(v[b - 1], v[b]), this.$ = "task";
					break;
				case 34:
					this.$ = v[b - 1], g.setClickEvent(v[b - 1], v[b], null);
					break;
				case 35:
					this.$ = v[b - 2], g.setClickEvent(v[b - 2], v[b - 1], v[b]);
					break;
				case 36:
					this.$ = v[b - 2], g.setClickEvent(v[b - 2], v[b - 1], null), g.setLink(v[b - 2], v[b]);
					break;
				case 37:
					this.$ = v[b - 3], g.setClickEvent(v[b - 3], v[b - 2], v[b - 1]), g.setLink(v[b - 3], v[b]);
					break;
				case 38:
					this.$ = v[b - 2], g.setClickEvent(v[b - 2], v[b], null), g.setLink(v[b - 2], v[b - 1]);
					break;
				case 39:
					this.$ = v[b - 3], g.setClickEvent(v[b - 3], v[b - 1], v[b]), g.setLink(v[b - 3], v[b - 2]);
					break;
				case 40:
					this.$ = v[b - 1], g.setLink(v[b - 1], v[b]);
					break;
				case 41:
				case 47:
					this.$ = v[b - 1] + " " + v[b];
					break;
				case 42:
				case 43:
				case 45:
					this.$ = v[b - 2] + " " + v[b - 1] + " " + v[b];
					break;
				case 44:
				case 46:
					this.$ = v[b - 3] + " " + v[b - 2] + " " + v[b - 1] + " " + v[b];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			e(m, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: 17,
				12: h,
				13: g,
				14: _,
				15: y,
				16: b,
				17: x,
				18: S,
				19: 18,
				20: C,
				21: T,
				22: E,
				23: D,
				24: O,
				25: k,
				26: A,
				27: j,
				28: M,
				29: N,
				30: P,
				31: F,
				33: I,
				35: L,
				36: R,
				37: 24,
				38: z,
				40: B
			},
			e(m, [2, 7], { 1: [2, 1] }),
			e(m, [2, 3]),
			{
				9: 36,
				11: 17,
				12: h,
				13: g,
				14: _,
				15: y,
				16: b,
				17: x,
				18: S,
				19: 18,
				20: C,
				21: T,
				22: E,
				23: D,
				24: O,
				25: k,
				26: A,
				27: j,
				28: M,
				29: N,
				30: P,
				31: F,
				33: I,
				35: L,
				36: R,
				37: 24,
				38: z,
				40: B
			},
			e(m, [2, 5]),
			e(m, [2, 6]),
			e(m, [2, 17]),
			e(m, [2, 18]),
			e(m, [2, 19]),
			e(m, [2, 20]),
			e(m, [2, 21]),
			e(m, [2, 22]),
			e(m, [2, 23]),
			e(m, [2, 24]),
			e(m, [2, 25]),
			e(m, [2, 26]),
			e(m, [2, 27]),
			{ 32: [1, 37] },
			{ 34: [1, 38] },
			e(m, [2, 30]),
			e(m, [2, 31]),
			e(m, [2, 32]),
			{ 39: [1, 39] },
			e(m, [2, 8]),
			e(m, [2, 9]),
			e(m, [2, 10]),
			e(m, [2, 11]),
			e(m, [2, 12]),
			e(m, [2, 13]),
			e(m, [2, 14]),
			e(m, [2, 15]),
			e(m, [2, 16]),
			{
				41: [1, 40],
				43: [1, 41]
			},
			e(m, [2, 4]),
			e(m, [2, 28]),
			e(m, [2, 29]),
			e(m, [2, 33]),
			e(m, [2, 34], {
				42: [1, 42],
				43: [1, 43]
			}),
			e(m, [2, 40], { 41: [1, 44] }),
			e(m, [2, 35], { 43: [1, 45] }),
			e(m, [2, 36]),
			e(m, [2, 38], { 42: [1, 46] }),
			e(m, [2, 37]),
			e(m, [2, 39])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ __name(function(e, m) {
			if (m.recoverable) this.trace(e);
			else {
				var h = Error(e);
				throw h.hash = m, h;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var m = this, h = [0], g = [], _ = [null], y = [], b = this.table, x = "", S = 0, C = 0, T = 0, E = 2, D = 1, O = y.slice.call(arguments, 1), k = Object.create(this.lexer), A = { yy: {} };
			for (var j in this.yy) Object.prototype.hasOwnProperty.call(this.yy, j) && (A.yy[j] = this.yy[j]);
			k.setInput(e, A.yy), A.yy.lexer = k, A.yy.parser = this, k.yylloc === void 0 && (k.yylloc = {});
			var M = k.yylloc;
			y.push(M);
			var N = k.options && k.options.ranges;
			typeof A.yy.parseError == "function" ? this.parseError = A.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function P(e) {
				h.length -= 2 * e, _.length -= e, y.length -= e;
			}
			__name(P, "popStack");
			function F() {
				var e = g.pop() || k.lex() || D;
				return typeof e != "number" && (e instanceof Array && (g = e, e = g.pop()), e = m.symbols_[e] || e), e;
			}
			__name(F, "lex");
			for (var I, L, R, z, B, V = {}, H, U, W, G;;) {
				if (R = h[h.length - 1], this.defaultActions[R] ? z = this.defaultActions[R] : (I ??= F(), z = b[R] && b[R][I]), z === void 0 || !z.length || !z[0]) {
					var K = "";
					for (H in G = [], b[R]) this.terminals_[H] && H > E && G.push("'" + this.terminals_[H] + "'");
					K = k.showPosition ? "Parse error on line " + (S + 1) + ":\n" + k.showPosition() + "\nExpecting " + G.join(", ") + ", got '" + (this.terminals_[I] || I) + "'" : "Parse error on line " + (S + 1) + ": Unexpected " + (I == D ? "end of input" : "'" + (this.terminals_[I] || I) + "'"), this.parseError(K, {
						text: k.match,
						token: this.terminals_[I] || I,
						line: k.yylineno,
						loc: M,
						expected: G
					});
				}
				if (z[0] instanceof Array && z.length > 1) throw Error("Parse Error: multiple actions possible at state: " + R + ", token: " + I);
				switch (z[0]) {
					case 1:
						h.push(I), _.push(k.yytext), y.push(k.yylloc), h.push(z[1]), I = null, L ? (I = L, L = null) : (C = k.yyleng, x = k.yytext, S = k.yylineno, M = k.yylloc, T > 0 && T--);
						break;
					case 2:
						if (U = this.productions_[z[1]][1], V.$ = _[_.length - U], V._$ = {
							first_line: y[y.length - (U || 1)].first_line,
							last_line: y[y.length - 1].last_line,
							first_column: y[y.length - (U || 1)].first_column,
							last_column: y[y.length - 1].last_column
						}, N && (V._$.range = [y[y.length - (U || 1)].range[0], y[y.length - 1].range[1]]), B = this.performAction.apply(V, [
							x,
							C,
							S,
							A.yy,
							z[1],
							_,
							y
						].concat(O)), B !== void 0) return B;
						U && (h = h.slice(0, -1 * U * 2), _ = _.slice(0, -1 * U), y = y.slice(0, -1 * U)), h.push(this.productions_[z[1]][0]), _.push(V.$), y.push(V._$), W = b[h[h.length - 2]][h[h.length - 1]], h.push(W);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	V.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, m) {
				if (this.yy.parser) this.yy.parser.parseError(e, m);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, m) {
				return this.yy = m || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var e = this._input[0];
				return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(e) {
				var m = e.length, h = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - m), this.offset -= m;
				var g = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), h.length - 1 && (this.yylineno -= h.length - 1);
				var _ = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: h ? (h.length === g.length ? this.yylloc.first_column : 0) + g[g.length - h.length].length - h[0].length : this.yylloc.first_column - m
				}, this.options.ranges && (this.yylloc.range = [_[0], _[0] + this.yyleng - m]), this.yyleng = this.yytext.length, this;
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
			less: /* @__PURE__ */ __name(function(e) {
				this.unput(this.match.slice(e));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var e = this.matched.substr(0, this.matched.length - this.match.length);
				return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var e = this.match;
				return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var e = this.pastInput(), m = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + m + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, m) {
				var h, g, _;
				if (this.options.backtrack_lexer && (_ = {
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
				}, this.options.ranges && (_.yylloc.range = this.yylloc.range.slice(0))), g = e[0].match(/(?:\r\n?|\n).*/g), g && (this.yylineno += g.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: g ? g[g.length - 1].length - g[g.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], h = this.performAction.call(this, this.yy, this, m, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h) return h;
				if (this._backtrack) {
					for (var v in _) this[v] = _[v];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, m, h, g;
				this._more || (this.yytext = "", this.match = "");
				for (var _ = this._currentRules(), v = 0; v < _.length; v++) if (h = this._input.match(this.rules[_[v]]), h && (!m || h[0].length > m[0].length)) {
					if (m = h, g = v, this.options.backtrack_lexer) {
						if (e = this.test_match(h, _[v]), e !== !1) return e;
						if (this._backtrack) {
							m = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return m ? (e = this.test_match(m, _[g]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function(e) {
				this.conditionStack.push(e);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function(e) {
				return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function(e) {
				this.begin(e);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ __name(function(e, m, h, g) {
				switch (h) {
					case 0: return this.begin("open_directive"), "open_directive";
					case 1: return this.begin("acc_title"), 31;
					case 2: return this.popState(), "acc_title_value";
					case 3: return this.begin("acc_descr"), 33;
					case 4: return this.popState(), "acc_descr_value";
					case 5:
						this.begin("acc_descr_multiline");
						break;
					case 6:
						this.popState();
						break;
					case 7: return "acc_descr_multiline_value";
					case 8: break;
					case 9: break;
					case 10: break;
					case 11: return 10;
					case 12: break;
					case 13: break;
					case 14:
						this.begin("href");
						break;
					case 15:
						this.popState();
						break;
					case 16: return 43;
					case 17:
						this.begin("callbackname");
						break;
					case 18:
						this.popState();
						break;
					case 19:
						this.popState(), this.begin("callbackargs");
						break;
					case 20: return 41;
					case 21:
						this.popState();
						break;
					case 22: return 42;
					case 23:
						this.begin("click");
						break;
					case 24:
						this.popState();
						break;
					case 25: return 40;
					case 26: return 4;
					case 27: return 22;
					case 28: return 23;
					case 29: return 24;
					case 30: return 25;
					case 31: return 26;
					case 32: return 28;
					case 33: return 27;
					case 34: return 29;
					case 35: return 12;
					case 36: return 13;
					case 37: return 14;
					case 38: return 15;
					case 39: return 16;
					case 40: return 17;
					case 41: return 18;
					case 42: return 20;
					case 43: return 21;
					case 44: return "date";
					case 45: return 30;
					case 46: return "accDescription";
					case 47: return 36;
					case 48: return 38;
					case 49: return 39;
					case 50: return ":";
					case 51: return 6;
					case 52: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%%\{)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:%%(?!\{)*[^\n]*)/i,
				/^(?:[^\}]%%*[^\n]*)/i,
				/^(?:%%*[^\n]*[\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:%[^\n]*)/i,
				/^(?:href[\s]+["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:call[\s]+)/i,
				/^(?:\([\s]*\))/i,
				/^(?:\()/i,
				/^(?:[^(]*)/i,
				/^(?:\))/i,
				/^(?:[^)]*)/i,
				/^(?:click[\s]+)/i,
				/^(?:[\s\n])/i,
				/^(?:[^\s\n]*)/i,
				/^(?:gantt\b)/i,
				/^(?:dateFormat\s[^#\n;]+)/i,
				/^(?:inclusiveEndDates\b)/i,
				/^(?:topAxis\b)/i,
				/^(?:axisFormat\s[^#\n;]+)/i,
				/^(?:tickInterval\s[^#\n;]+)/i,
				/^(?:includes\s[^#\n;]+)/i,
				/^(?:excludes\s[^#\n;]+)/i,
				/^(?:todayMarker\s[^\n;]+)/i,
				/^(?:weekday\s+monday\b)/i,
				/^(?:weekday\s+tuesday\b)/i,
				/^(?:weekday\s+wednesday\b)/i,
				/^(?:weekday\s+thursday\b)/i,
				/^(?:weekday\s+friday\b)/i,
				/^(?:weekday\s+saturday\b)/i,
				/^(?:weekday\s+sunday\b)/i,
				/^(?:weekend\s+friday\b)/i,
				/^(?:weekend\s+saturday\b)/i,
				/^(?:\d\d\d\d-\d\d-\d\d\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accDescription\s[^#\n;]+)/i,
				/^(?:section\s[^\n]+)/i,
				/^(?:[^:\n]+)/i,
				/^(?::[^#\n;]+)/i,
				/^(?::)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [6, 7],
					inclusive: !1
				},
				acc_descr: {
					rules: [4],
					inclusive: !1
				},
				acc_title: {
					rules: [2],
					inclusive: !1
				},
				callbackargs: {
					rules: [21, 22],
					inclusive: !1
				},
				callbackname: {
					rules: [
						18,
						19,
						20
					],
					inclusive: !1
				},
				href: {
					rules: [15, 16],
					inclusive: !1
				},
				click: {
					rules: [24, 25],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						3,
						5,
						8,
						9,
						10,
						11,
						12,
						13,
						14,
						17,
						23,
						26,
						27,
						28,
						29,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52
					],
					inclusive: !0
				}
			}
		};
	})();
	function H() {
		this.yy = {};
	}
	return __name(H, "Parser"), H.prototype = V, V.Parser = H, new H();
})();
parser.parser = parser;
var gantt_default = parser;
import_dayjs_min.default.extend(import_isoWeek.default), import_dayjs_min.default.extend(import_customParseFormat.default), import_dayjs_min.default.extend(import_advancedFormat.default);
var WEEKEND_START_DAY = {
	friday: 5,
	saturday: 6
}, dateFormat = "", axisFormat = "", tickInterval = void 0, todayMarker = "", includes = [], excludes = [], links = /* @__PURE__ */ new Map(), sections = [], tasks = [], currentSection = "", displayMode = "", tags = [
	"active",
	"done",
	"crit",
	"milestone",
	"vert"
], funs = [], inclusiveEndDates = !1, topAxis = !1, weekday = "sunday", weekend = "saturday", lastOrder = 0, clear2 = /* @__PURE__ */ __name(function() {
	sections = [], tasks = [], currentSection = "", funs = [], taskCnt = 0, lastTask = void 0, lastTaskID = void 0, rawTasks = [], dateFormat = "", axisFormat = "", displayMode = "", tickInterval = void 0, todayMarker = "", includes = [], excludes = [], inclusiveEndDates = !1, topAxis = !1, lastOrder = 0, links = /* @__PURE__ */ new Map(), clear(), weekday = "sunday", weekend = "saturday";
}, "clear"), setAxisFormat = /* @__PURE__ */ __name(function(e) {
	axisFormat = e;
}, "setAxisFormat"), getAxisFormat = /* @__PURE__ */ __name(function() {
	return axisFormat;
}, "getAxisFormat"), setTickInterval = /* @__PURE__ */ __name(function(e) {
	tickInterval = e;
}, "setTickInterval"), getTickInterval = /* @__PURE__ */ __name(function() {
	return tickInterval;
}, "getTickInterval"), setTodayMarker = /* @__PURE__ */ __name(function(e) {
	todayMarker = e;
}, "setTodayMarker"), getTodayMarker = /* @__PURE__ */ __name(function() {
	return todayMarker;
}, "getTodayMarker"), setDateFormat = /* @__PURE__ */ __name(function(e) {
	dateFormat = e;
}, "setDateFormat"), enableInclusiveEndDates = /* @__PURE__ */ __name(function() {
	inclusiveEndDates = !0;
}, "enableInclusiveEndDates"), endDatesAreInclusive = /* @__PURE__ */ __name(function() {
	return inclusiveEndDates;
}, "endDatesAreInclusive"), enableTopAxis = /* @__PURE__ */ __name(function() {
	topAxis = !0;
}, "enableTopAxis"), topAxisEnabled = /* @__PURE__ */ __name(function() {
	return topAxis;
}, "topAxisEnabled"), setDisplayMode = /* @__PURE__ */ __name(function(e) {
	displayMode = e;
}, "setDisplayMode"), getDisplayMode = /* @__PURE__ */ __name(function() {
	return displayMode;
}, "getDisplayMode"), getDateFormat = /* @__PURE__ */ __name(function() {
	return dateFormat;
}, "getDateFormat"), setIncludes = /* @__PURE__ */ __name(function(e) {
	includes = e.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), getIncludes = /* @__PURE__ */ __name(function() {
	return includes;
}, "getIncludes"), setExcludes = /* @__PURE__ */ __name(function(e) {
	excludes = e.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), getExcludes = /* @__PURE__ */ __name(function() {
	return excludes;
}, "getExcludes"), getLinks = /* @__PURE__ */ __name(function() {
	return links;
}, "getLinks"), addSection = /* @__PURE__ */ __name(function(e) {
	currentSection = e, sections.push(e);
}, "addSection"), getSections = /* @__PURE__ */ __name(function() {
	return sections;
}, "getSections"), getTasks = /* @__PURE__ */ __name(function() {
	let e = compileTasks(), m = 0;
	for (; !e && m < 10;) e = compileTasks(), m++;
	return tasks = rawTasks, tasks;
}, "getTasks"), isInvalidDate = /* @__PURE__ */ __name(function(e, m, h, g) {
	let _ = e.format(m.trim()), v = e.format("YYYY-MM-DD");
	return g.includes(_) || g.includes(v) ? !1 : h.includes("weekends") && (e.isoWeekday() === WEEKEND_START_DAY[weekend] || e.isoWeekday() === WEEKEND_START_DAY[weekend] + 1) || h.includes(e.format("dddd").toLowerCase()) ? !0 : h.includes(_) || h.includes(v);
}, "isInvalidDate"), setWeekday = /* @__PURE__ */ __name(function(e) {
	weekday = e;
}, "setWeekday"), getWeekday = /* @__PURE__ */ __name(function() {
	return weekday;
}, "getWeekday"), setWeekend = /* @__PURE__ */ __name(function(e) {
	weekend = e;
}, "setWeekend"), checkTaskDates = /* @__PURE__ */ __name(function(e, m, h, g) {
	if (!h.length || e.manualEndTime) return;
	let _;
	_ = e.startTime instanceof Date ? (0, import_dayjs_min.default)(e.startTime) : (0, import_dayjs_min.default)(e.startTime, m, !0), _ = _.add(1, "d");
	let v;
	v = e.endTime instanceof Date ? (0, import_dayjs_min.default)(e.endTime) : (0, import_dayjs_min.default)(e.endTime, m, !0);
	let [y, b] = fixTaskDates(_, v, m, h, g);
	e.endTime = y.toDate(), e.renderEndTime = b;
}, "checkTaskDates"), fixTaskDates = /* @__PURE__ */ __name(function(e, m, h, g, _) {
	let v = !1, y = null;
	for (; e <= m;) v || (y = m.toDate()), v = isInvalidDate(e, h, g, _), v && (m = m.add(1, "d")), e = e.add(1, "d");
	return [m, y];
}, "fixTaskDates"), getStartDate = /* @__PURE__ */ __name(function(e, m, h) {
	if (h = h.trim(), (m.trim() === "x" || m.trim() === "X") && /^\d+$/.test(h)) return new Date(Number(h));
	let _ = /^after\s+(?<ids>[\d\w- ]+)/.exec(h);
	if (_ !== null) {
		let e = null;
		for (let m of _.groups.ids.split(" ")) {
			let h = findTaskById(m);
			h !== void 0 && (!e || h.endTime > e.endTime) && (e = h);
		}
		if (e) return e.endTime;
		let m = /* @__PURE__ */ new Date();
		return m.setHours(0, 0, 0, 0), m;
	}
	let v = (0, import_dayjs_min.default)(h, m.trim(), !0);
	if (v.isValid()) return v.toDate();
	{
		log.debug("Invalid date:" + h), log.debug("With date format:" + m.trim());
		let e = new Date(h);
		if (e === void 0 || isNaN(e.getTime()) || e.getFullYear() < -1e4 || e.getFullYear() > 1e4) throw Error("Invalid date:" + h);
		return e;
	}
}, "getStartDate"), parseDuration = /* @__PURE__ */ __name(function(e) {
	let m = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());
	return m === null ? [NaN, "ms"] : [Number.parseFloat(m[1]), m[2]];
}, "parseDuration"), getEndDate = /* @__PURE__ */ __name(function(e, m, h, g = !1) {
	h = h.trim();
	let _ = /^until\s+(?<ids>[\d\w- ]+)/.exec(h);
	if (_ !== null) {
		let e = null;
		for (let m of _.groups.ids.split(" ")) {
			let h = findTaskById(m);
			h !== void 0 && (!e || h.startTime < e.startTime) && (e = h);
		}
		if (e) return e.startTime;
		let m = /* @__PURE__ */ new Date();
		return m.setHours(0, 0, 0, 0), m;
	}
	let v = (0, import_dayjs_min.default)(h, m.trim(), !0);
	if (v.isValid()) return g && (v = v.add(1, "d")), v.toDate();
	let y = (0, import_dayjs_min.default)(e), [b, x] = parseDuration(h);
	if (!Number.isNaN(b)) {
		let e = y.add(b, x);
		e.isValid() && (y = e);
	}
	return y.toDate();
}, "getEndDate"), taskCnt = 0, parseId = /* @__PURE__ */ __name(function(e) {
	return e === void 0 ? (taskCnt += 1, "task" + taskCnt) : e;
}, "parseId"), compileData = /* @__PURE__ */ __name(function(e, m) {
	let h;
	h = m.substr(0, 1) === ":" ? m.substr(1, m.length) : m;
	let g = h.split(","), _ = {};
	getTaskTags(g, _, tags);
	for (let e = 0; e < g.length; e++) g[e] = g[e].trim();
	let v = "";
	switch (g.length) {
		case 1:
			_.id = parseId(), _.startTime = e.endTime, v = g[0];
			break;
		case 2:
			_.id = parseId(), _.startTime = getStartDate(void 0, dateFormat, g[0]), v = g[1];
			break;
		case 3:
			_.id = parseId(g[0]), _.startTime = getStartDate(void 0, dateFormat, g[1]), v = g[2];
			break;
		default:
	}
	return v && (_.endTime = getEndDate(_.startTime, dateFormat, v, inclusiveEndDates), _.manualEndTime = (0, import_dayjs_min.default)(v, "YYYY-MM-DD", !0).isValid(), checkTaskDates(_, dateFormat, excludes, includes)), _;
}, "compileData"), parseData = /* @__PURE__ */ __name(function(e, m) {
	let h;
	h = m.substr(0, 1) === ":" ? m.substr(1, m.length) : m;
	let g = h.split(","), _ = {};
	getTaskTags(g, _, tags);
	for (let e = 0; e < g.length; e++) g[e] = g[e].trim();
	switch (g.length) {
		case 1:
			_.id = parseId(), _.startTime = {
				type: "prevTaskEnd",
				id: e
			}, _.endTime = { data: g[0] };
			break;
		case 2:
			_.id = parseId(), _.startTime = {
				type: "getStartDate",
				startData: g[0]
			}, _.endTime = { data: g[1] };
			break;
		case 3:
			_.id = parseId(g[0]), _.startTime = {
				type: "getStartDate",
				startData: g[1]
			}, _.endTime = { data: g[2] };
			break;
		default:
	}
	return _;
}, "parseData"), lastTask, lastTaskID, rawTasks = [], taskDb = {}, addTask = /* @__PURE__ */ __name(function(e, m) {
	let h = {
		section: currentSection,
		type: currentSection,
		processed: !1,
		manualEndTime: !1,
		renderEndTime: null,
		raw: { data: m },
		task: e,
		classes: []
	}, g = parseData(lastTaskID, m);
	h.raw.startTime = g.startTime, h.raw.endTime = g.endTime, h.id = g.id, h.prevTaskId = lastTaskID, h.active = g.active, h.done = g.done, h.crit = g.crit, h.milestone = g.milestone, h.vert = g.vert, h.order = lastOrder, lastOrder++;
	let _ = rawTasks.push(h);
	lastTaskID = h.id, taskDb[h.id] = _ - 1;
}, "addTask"), findTaskById = /* @__PURE__ */ __name(function(e) {
	let m = taskDb[e];
	return rawTasks[m];
}, "findTaskById"), addTaskOrg = /* @__PURE__ */ __name(function(e, m) {
	let h = {
		section: currentSection,
		type: currentSection,
		description: e,
		task: e,
		classes: []
	}, g = compileData(lastTask, m);
	h.startTime = g.startTime, h.endTime = g.endTime, h.id = g.id, h.active = g.active, h.done = g.done, h.crit = g.crit, h.milestone = g.milestone, h.vert = g.vert, lastTask = h, tasks.push(h);
}, "addTaskOrg"), compileTasks = /* @__PURE__ */ __name(function() {
	let e = /* @__PURE__ */ __name(function(e) {
		let m = rawTasks[e], h = "";
		switch (rawTasks[e].raw.startTime.type) {
			case "prevTaskEnd":
				m.startTime = findTaskById(m.prevTaskId).endTime;
				break;
			case "getStartDate":
				h = getStartDate(void 0, dateFormat, rawTasks[e].raw.startTime.startData), h && (rawTasks[e].startTime = h);
				break;
		}
		return rawTasks[e].startTime && (rawTasks[e].endTime = getEndDate(rawTasks[e].startTime, dateFormat, rawTasks[e].raw.endTime.data, inclusiveEndDates), rawTasks[e].endTime && (rawTasks[e].processed = !0, rawTasks[e].manualEndTime = (0, import_dayjs_min.default)(rawTasks[e].raw.endTime.data, "YYYY-MM-DD", !0).isValid(), checkTaskDates(rawTasks[e], dateFormat, excludes, includes))), rawTasks[e].processed;
	}, "compileTask"), m = !0;
	for (let [h, g] of rawTasks.entries()) e(h), m &&= g.processed;
	return m;
}, "compileTasks"), setLink = /* @__PURE__ */ __name(function(e, m) {
	let h = m;
	getConfig2().securityLevel !== "loose" && (h = (0, import_dist.sanitizeUrl)(m)), e.split(",").forEach(function(e) {
		findTaskById(e) !== void 0 && (pushFun(e, () => {
			window.open(h, "_self");
		}), links.set(e, h));
	}), setClass(e, "clickable");
}, "setLink"), setClass = /* @__PURE__ */ __name(function(e, m) {
	e.split(",").forEach(function(e) {
		let h = findTaskById(e);
		h !== void 0 && h.classes.push(m);
	});
}, "setClass"), setClickFun = /* @__PURE__ */ __name(function(e, m, g) {
	if (getConfig2().securityLevel !== "loose" || m === void 0) return;
	let _ = [];
	if (typeof g == "string") {
		_ = g.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		for (let e = 0; e < _.length; e++) {
			let m = _[e].trim();
			m.startsWith("\"") && m.endsWith("\"") && (m = m.substr(1, m.length - 2)), _[e] = m;
		}
	}
	_.length === 0 && _.push(e), findTaskById(e) !== void 0 && pushFun(e, () => {
		utils_default.runFunc(m, ..._);
	});
}, "setClickFun"), pushFun = /* @__PURE__ */ __name(function(e, m) {
	funs.push(function() {
		let h = document.querySelector(`[id="${e}"]`);
		h !== null && h.addEventListener("click", function() {
			m();
		});
	}, function() {
		let h = document.querySelector(`[id="${e}-text"]`);
		h !== null && h.addEventListener("click", function() {
			m();
		});
	});
}, "pushFun"), ganttDb_default = {
	getConfig: /* @__PURE__ */ __name(() => getConfig2().gantt, "getConfig"),
	clear: clear2,
	setDateFormat,
	getDateFormat,
	enableInclusiveEndDates,
	endDatesAreInclusive,
	enableTopAxis,
	topAxisEnabled,
	setAxisFormat,
	getAxisFormat,
	setTickInterval,
	getTickInterval,
	setTodayMarker,
	getTodayMarker,
	setAccTitle,
	getAccTitle,
	setDiagramTitle,
	getDiagramTitle,
	setDisplayMode,
	getDisplayMode,
	setAccDescription,
	getAccDescription,
	addSection,
	getSections,
	getTasks,
	addTask,
	findTaskById,
	addTaskOrg,
	setIncludes,
	getIncludes,
	setExcludes,
	getExcludes,
	setClickEvent: /* @__PURE__ */ __name(function(e, m, h) {
		e.split(",").forEach(function(e) {
			setClickFun(e, m, h);
		}), setClass(e, "clickable");
	}, "setClickEvent"),
	setLink,
	getLinks,
	bindFunctions: /* @__PURE__ */ __name(function(e) {
		funs.forEach(function(m) {
			m(e);
		});
	}, "bindFunctions"),
	parseDuration,
	isInvalidDate,
	setWeekday,
	getWeekday,
	setWeekend
};
function getTaskTags(e, m, h) {
	let g = !0;
	for (; g;) g = !1, h.forEach(function(h) {
		let _ = "^\\s*" + h + "\\s*$", v = new RegExp(_);
		e[0].match(v) && (m[h] = !0, e.shift(1), g = !0);
	});
}
__name(getTaskTags, "getTaskTags");
var setConf = /* @__PURE__ */ __name(function() {
	log.debug("Something is calling, setConf, remove the call");
}, "setConf"), mapWeekdayToTimeFunction = {
	monday: timeMonday,
	tuesday: timeTuesday,
	wednesday: timeWednesday,
	thursday: timeThursday,
	friday: timeFriday,
	saturday: timeSaturday,
	sunday: timeSunday
}, getMaxIntersections = /* @__PURE__ */ __name((e, m) => {
	let h = [...e].map(() => -Infinity), g = [...e].sort((e, m) => e.startTime - m.startTime || e.order - m.order), _ = 0;
	for (let e of g) for (let g = 0; g < h.length; g++) if (e.startTime >= h[g]) {
		h[g] = e.endTime, e.order = g + m, g > _ && (_ = g);
		break;
	}
	return _;
}, "getMaxIntersections"), w, diagram = {
	parser: gantt_default,
	db: ganttDb_default,
	renderer: {
		setConf,
		draw: /* @__PURE__ */ __name(function(e, m, h, _) {
			let b = getConfig2().gantt, x = getConfig2().securityLevel, S;
			x === "sandbox" && (S = select_default("#i" + m));
			let C = select_default(x === "sandbox" ? S.nodes()[0].contentDocument.body : "body"), T = x === "sandbox" ? S.nodes()[0].contentDocument : document, k = T.getElementById(m);
			w = k.parentElement.offsetWidth, w === void 0 && (w = 1200), b.useWidth !== void 0 && (w = b.useWidth);
			let A = _.db.getTasks(), I = [];
			for (let e of A) I.push(e.type);
			I = $(I);
			let L = {}, z = 2 * b.topPadding;
			if (_.db.getDisplayMode() === "compact" || b.displayMode === "compact") {
				let e = {};
				for (let m of A) e[m.section] === void 0 ? e[m.section] = [m] : e[m.section].push(m);
				let m = 0;
				for (let h of Object.keys(e)) {
					let g = getMaxIntersections(e[h], m) + 1;
					m += g, z += g * (b.barHeight + b.barGap), L[h] = g;
				}
			} else {
				z += A.length * (b.barHeight + b.barGap);
				for (let e of I) L[e] = A.filter((m) => m.type === e).length;
			}
			k.setAttribute("viewBox", "0 0 " + w + " " + z);
			let B = C.select(`[id="${m}"]`), U = time().domain([min(A, function(e) {
				return e.startTime;
			}), max(A, function(e) {
				return e.endTime;
			})]).rangeRound([0, w - b.leftPadding - b.rightPadding]);
			function K(e, m) {
				let h = e.startTime, g = m.startTime, _ = 0;
				return h > g ? _ = 1 : h < g && (_ = -1), _;
			}
			__name(K, "taskCompare"), A.sort(K), q(A, w, z), configureSvgSize(B, z, w, b.useMaxWidth), B.append("text").text(_.db.getDiagramTitle()).attr("x", w / 2).attr("y", b.titleTopMargin).attr("class", "titleText");
			function q(e, m, h) {
				let g = b.barHeight, v = g + b.barGap, y = b.topPadding, x = b.leftPadding, S = linear().domain([0, I.length]).range(["#00B9FA", "#F95002"]).interpolate(hcl_default);
				Y(v, y, x, m, h, e, _.db.getExcludes(), _.db.getIncludes()), X(x, y, m, h), J(e, v, y, x, g, S, m, h), Z(v, y, x, g, S), Q(x, y, m, h);
			}
			__name(q, "makeGantt");
			function J(e, h, g, v, x, S, C) {
				e.sort((e, m) => e.vert === m.vert ? 0 : e.vert ? 1 : -1);
				let T = [...new Set(e.map((e) => e.order))].map((m) => e.find((e) => e.order === m));
				B.append("g").selectAll("rect").data(T).enter().append("rect").attr("x", 0).attr("y", function(e, m) {
					return m = e.order, m * h + g - 2;
				}).attr("width", function() {
					return C - b.rightPadding / 2;
				}).attr("height", h).attr("class", function(e) {
					for (let [m, h] of I.entries()) if (e.type === h) return "section section" + m % b.numberSectionStyles;
					return "section section0";
				}).enter();
				let D = B.append("g").selectAll("rect").data(e).enter(), O = _.db.getLinks();
				if (D.append("rect").attr("id", function(e) {
					return e.id;
				}).attr("rx", 3).attr("ry", 3).attr("x", function(e) {
					return e.milestone ? U(e.startTime) + v + .5 * (U(e.endTime) - U(e.startTime)) - .5 * x : U(e.startTime) + v;
				}).attr("y", function(e, m) {
					return m = e.order, e.vert ? b.gridLineStartPadding : m * h + g;
				}).attr("width", function(e) {
					return e.milestone ? x : e.vert ? .08 * x : U(e.renderEndTime || e.endTime) - U(e.startTime);
				}).attr("height", function(e) {
					return e.vert ? A.length * (b.barHeight + b.barGap) + b.barHeight * 2 : x;
				}).attr("transform-origin", function(e, m) {
					return m = e.order, (U(e.startTime) + v + .5 * (U(e.endTime) - U(e.startTime))).toString() + "px " + (m * h + g + .5 * x).toString() + "px";
				}).attr("class", function(e) {
					let m = "";
					e.classes.length > 0 && (m = e.classes.join(" "));
					let h = 0;
					for (let [m, g] of I.entries()) e.type === g && (h = m % b.numberSectionStyles);
					let g = "";
					return e.active ? e.crit ? g += " activeCrit" : g = " active" : e.done ? g = e.crit ? " doneCrit" : " done" : e.crit && (g += " crit"), g.length === 0 && (g = " task"), e.milestone && (g = " milestone " + g), e.vert && (g = " vert " + g), g += h, g += " " + m, "task" + g;
				}), D.append("text").attr("id", function(e) {
					return e.id + "-text";
				}).text(function(e) {
					return e.task;
				}).attr("font-size", b.fontSize).attr("x", function(e) {
					let m = U(e.startTime), h = U(e.renderEndTime || e.endTime);
					if (e.milestone && (m += .5 * (U(e.endTime) - U(e.startTime)) - .5 * x, h = m + x), e.vert) return U(e.startTime) + v;
					let g = this.getBBox().width;
					return g > h - m ? h + g + 1.5 * b.leftPadding > C ? m + v - 5 : h + v + 5 : (h - m) / 2 + m + v;
				}).attr("y", function(e, m) {
					return e.vert ? b.gridLineStartPadding + A.length * (b.barHeight + b.barGap) + 60 : (m = e.order, m * h + b.barHeight / 2 + (b.fontSize / 2 - 2) + g);
				}).attr("text-height", x).attr("class", function(e) {
					let m = U(e.startTime), h = U(e.endTime);
					e.milestone && (h = m + x);
					let g = this.getBBox().width, _ = "";
					e.classes.length > 0 && (_ = e.classes.join(" "));
					let v = 0;
					for (let [m, h] of I.entries()) e.type === h && (v = m % b.numberSectionStyles);
					let y = "";
					return e.active && (y = e.crit ? "activeCritText" + v : "activeText" + v), e.done ? y = e.crit ? y + " doneCritText" + v : y + " doneText" + v : e.crit && (y = y + " critText" + v), e.milestone && (y += " milestoneText"), e.vert && (y += " vertText"), g > h - m ? h + g + 1.5 * b.leftPadding > C ? _ + " taskTextOutsideLeft taskTextOutside" + v + " " + y : _ + " taskTextOutsideRight taskTextOutside" + v + " " + y + " width-" + g : _ + " taskText taskText" + v + " " + y + " width-" + g;
				}), getConfig2().securityLevel === "sandbox") {
					let e;
					e = select_default("#i" + m);
					let h = e.nodes()[0].contentDocument;
					D.filter(function(e) {
						return O.has(e.id);
					}).each(function(e) {
						var m = h.querySelector("#" + e.id), g = h.querySelector("#" + e.id + "-text");
						let _ = m.parentNode;
						var v = h.createElement("a");
						v.setAttribute("xlink:href", O.get(e.id)), v.setAttribute("target", "_top"), _.appendChild(v), v.appendChild(m), v.appendChild(g);
					});
				}
			}
			__name(J, "drawRects");
			function Y(e, m, h, v, y, x, S, C) {
				if (S.length === 0 && C.length === 0) return;
				let T, E;
				for (let { startTime: e, endTime: m } of x) (T === void 0 || e < T) && (T = e), (E === void 0 || m > E) && (E = m);
				if (!T || !E) return;
				if ((0, import_dayjs_min$1.default)(E).diff((0, import_dayjs_min$1.default)(T), "year") > 5) {
					log.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
					return;
				}
				let D = _.db.getDateFormat(), O = [], k = null, A = (0, import_dayjs_min$1.default)(T);
				for (; A.valueOf() <= E;) _.db.isInvalidDate(A, D, S, C) ? k ? k.end = A : k = {
					start: A,
					end: A
				} : k &&= (O.push(k), null), A = A.add(1, "d");
				B.append("g").selectAll("rect").data(O).enter().append("rect").attr("id", (e) => "exclude-" + e.start.format("YYYY-MM-DD")).attr("x", (e) => U(e.start.startOf("day")) + h).attr("y", b.gridLineStartPadding).attr("width", (e) => U(e.end.endOf("day")) - U(e.start.startOf("day"))).attr("height", y - m - b.gridLineStartPadding).attr("transform-origin", function(m, g) {
					return (U(m.start) + h + .5 * (U(m.end) - U(m.start))).toString() + "px " + (g * e + .5 * y).toString() + "px";
				}).attr("class", "exclude-range");
			}
			__name(Y, "drawExcludeDays");
			function X(e, m, h, g) {
				let v = _.db.getDateFormat(), y = _.db.getAxisFormat(), x;
				x = y || (v === "D" ? "%d" : b.axisFormat ?? "%Y-%m-%d");
				let S = axisBottom(U).tickSize(-g + m + b.gridLineStartPadding).tickFormat(timeFormat(x)), C = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(_.db.getTickInterval() || b.tickInterval);
				if (C !== null) {
					let e = C[1], m = C[2], h = _.db.getWeekday() || b.weekday;
					switch (m) {
						case "millisecond":
							S.ticks(millisecond.every(e));
							break;
						case "second":
							S.ticks(second.every(e));
							break;
						case "minute":
							S.ticks(timeMinute.every(e));
							break;
						case "hour":
							S.ticks(timeHour.every(e));
							break;
						case "day":
							S.ticks(timeDay.every(e));
							break;
						case "week":
							S.ticks(mapWeekdayToTimeFunction[h].every(e));
							break;
						case "month":
							S.ticks(timeMonth.every(e));
							break;
					}
				}
				if (B.append("g").attr("class", "grid").attr("transform", "translate(" + e + ", " + (g - 50) + ")").call(S).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), _.db.topAxisEnabled() || b.topAxis) {
					let h = axisTop(U).tickSize(-g + m + b.gridLineStartPadding).tickFormat(timeFormat(x));
					if (C !== null) {
						let e = C[1], m = C[2], g = _.db.getWeekday() || b.weekday;
						switch (m) {
							case "millisecond":
								h.ticks(millisecond.every(e));
								break;
							case "second":
								h.ticks(second.every(e));
								break;
							case "minute":
								h.ticks(timeMinute.every(e));
								break;
							case "hour":
								h.ticks(timeHour.every(e));
								break;
							case "day":
								h.ticks(timeDay.every(e));
								break;
							case "week":
								h.ticks(mapWeekdayToTimeFunction[g].every(e));
								break;
							case "month":
								h.ticks(timeMonth.every(e));
								break;
						}
					}
					B.append("g").attr("class", "grid").attr("transform", "translate(" + e + ", " + m + ")").call(h).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
				}
			}
			__name(X, "makeGrid");
			function Z(e, m) {
				let h = 0, g = Object.keys(L).map((e) => [e, L[e]]);
				B.append("g").selectAll("text").data(g).enter().append(function(e) {
					let m = e[0].split(common_default.lineBreakRegex), h = -(m.length - 1) / 2, g = T.createElementNS("http://www.w3.org/2000/svg", "text");
					g.setAttribute("dy", h + "em");
					for (let [e, h] of m.entries()) {
						let m = T.createElementNS("http://www.w3.org/2000/svg", "tspan");
						m.setAttribute("alignment-baseline", "central"), m.setAttribute("x", "10"), e > 0 && m.setAttribute("dy", "1em"), m.textContent = h, g.appendChild(m);
					}
					return g;
				}).attr("x", 10).attr("y", function(_, v) {
					if (v > 0) for (let y = 0; y < v; y++) return h += g[v - 1][1], _[1] * e / 2 + h * e + m;
					else return _[1] * e / 2 + m;
				}).attr("font-size", b.sectionFontSize).attr("class", function(e) {
					for (let [m, h] of I.entries()) if (e[0] === h) return "sectionTitle sectionTitle" + m % b.numberSectionStyles;
					return "sectionTitle";
				});
			}
			__name(Z, "vertLabels");
			function Q(e, m, h, g) {
				let v = _.db.getTodayMarker();
				if (v === "off") return;
				let y = B.append("g").attr("class", "today"), x = /* @__PURE__ */ new Date(), S = y.append("line");
				S.attr("x1", U(x) + e).attr("x2", U(x) + e).attr("y1", b.titleTopMargin).attr("y2", g - b.titleTopMargin).attr("class", "today"), v !== "" && S.attr("style", v.replace(/,/g, ";"));
			}
			__name(Q, "drawToday");
			function $(e) {
				let m = {}, h = [];
				for (let g = 0, _ = e.length; g < _; ++g) Object.prototype.hasOwnProperty.call(m, e[g]) || (m[e[g]] = !0, h.push(e[g]));
				return h;
			}
			__name($, "checkUnique");
		}, "draw")
	},
	styles: /* @__PURE__ */ __name((e) => `
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor || e.textColor};
    font-family: ${e.fontFamily};
  }
`, "getStyles")
};
export { diagram };
