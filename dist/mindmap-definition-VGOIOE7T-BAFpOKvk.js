import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { $ as is_dark_default, D as getUserDefinedConfig, I as sanitizeText, Q as lighten_default, Z as darken_default, b as getConfig2, d as defaultConfig_default } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import "./array-BlABR2MP.js";
import "./step-DmjVsfVE.js";
import "./line-Cl_B2mnJ.js";
import "./dist-CUheKjZU.js";
import "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import "./chunk-HN2XXSSU-p3ji0EC3.js";
import "./chunk-CVBHYZKI-Cx9WXSzs.js";
import { t as getDiagramElement } from "./chunk-55IACEB6-BKO4wDwb.js";
import { t as setupViewPortForSVG } from "./chunk-QN33PNHL-DXOPcIi5.js";
import "./chunk-ATLVNIR6-DULmhiFu.js";
import "./chunk-JZLCHNYA-Cqf7Lizt.js";
import "./chunk-QXUST7PY-DE6lURYz.js";
import { r as render, t as getRegisteredLayoutAlgorithm } from "./chunk-N4CR4FBY-vW6kPLGX.js";
var byteToHex = [];
for (let e = 0; e < 256; ++e) byteToHex.push((e + 256).toString(16).slice(1));
function unsafeStringify(e, t = 0) {
	return (byteToHex[e[t + 0]] + byteToHex[e[t + 1]] + byteToHex[e[t + 2]] + byteToHex[e[t + 3]] + "-" + byteToHex[e[t + 4]] + byteToHex[e[t + 5]] + "-" + byteToHex[e[t + 6]] + byteToHex[e[t + 7]] + "-" + byteToHex[e[t + 8]] + byteToHex[e[t + 9]] + "-" + byteToHex[e[t + 10]] + byteToHex[e[t + 11]] + byteToHex[e[t + 12]] + byteToHex[e[t + 13]] + byteToHex[e[t + 14]] + byteToHex[e[t + 15]]).toLowerCase();
}
var getRandomValues, rnds8 = new Uint8Array(16);
function rng() {
	if (!getRandomValues) {
		if (typeof crypto > "u" || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
		getRandomValues = crypto.getRandomValues.bind(crypto);
	}
	return getRandomValues(rnds8);
}
var native_default = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function v4(e, t, n) {
	if (native_default.randomUUID && !t && !e) return native_default.randomUUID();
	e ||= {};
	let r = e.random ?? e.rng?.() ?? rng();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return unsafeStringify(r);
}
var v4_default = v4, parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), n = [1, 4], r = [1, 13], i = [1, 12], a = [1, 15], o = [1, 16], s = [1, 20], c = [1, 19], l = [
		6,
		7,
		8
	], u = [1, 26], d = [1, 24], f = [1, 25], p = [
		6,
		7,
		11
	], m = [
		1,
		6,
		13,
		15,
		16,
		19,
		22
	], h = [1, 33], g = [1, 34], _ = [
		1,
		6,
		7,
		11,
		13,
		15,
		16,
		19,
		22
	], v = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mindMap: 4,
			spaceLines: 5,
			SPACELINE: 6,
			NL: 7,
			MINDMAP: 8,
			document: 9,
			stop: 10,
			EOF: 11,
			statement: 12,
			SPACELIST: 13,
			node: 14,
			ICON: 15,
			CLASS: 16,
			nodeWithId: 17,
			nodeWithoutId: 18,
			NODE_DSTART: 19,
			NODE_DESCR: 20,
			NODE_DEND: 21,
			NODE_ID: 22,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "SPACELINE",
			7: "NL",
			8: "MINDMAP",
			11: "EOF",
			13: "SPACELIST",
			15: "ICON",
			16: "CLASS",
			19: "NODE_DSTART",
			20: "NODE_DESCR",
			21: "NODE_DEND",
			22: "NODE_ID"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[5, 1],
			[5, 2],
			[5, 2],
			[4, 2],
			[4, 3],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 2],
			[10, 2],
			[9, 3],
			[9, 2],
			[12, 2],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[14, 1],
			[14, 1],
			[18, 3],
			[17, 1],
			[17, 4]
		],
		performAction: /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 6:
				case 7: return r;
				case 8:
					r.getLogger().trace("Stop NL ");
					break;
				case 9:
					r.getLogger().trace("Stop EOF ");
					break;
				case 11:
					r.getLogger().trace("Stop NL2 ");
					break;
				case 12:
					r.getLogger().trace("Stop EOF2 ");
					break;
				case 15:
					r.getLogger().info("Node: ", a[s].id), r.addNode(a[s - 1].length, a[s].id, a[s].descr, a[s].type);
					break;
				case 16:
					r.getLogger().trace("Icon: ", a[s]), r.decorateNode({ icon: a[s] });
					break;
				case 17:
				case 21:
					r.decorateNode({ class: a[s] });
					break;
				case 18:
					r.getLogger().trace("SPACELIST");
					break;
				case 19:
					r.getLogger().trace("Node: ", a[s].id), r.addNode(0, a[s].id, a[s].descr, a[s].type);
					break;
				case 20:
					r.decorateNode({ icon: a[s] });
					break;
				case 25:
					r.getLogger().trace("node found ..", a[s - 2]), this.$ = {
						id: a[s - 1],
						descr: a[s - 1],
						type: r.getType(a[s - 2], a[s])
					};
					break;
				case 26:
					this.$ = {
						id: a[s],
						descr: a[s],
						type: r.nodeType.DEFAULT
					};
					break;
				case 27:
					r.getLogger().trace("node found ..", a[s - 3]), this.$ = {
						id: a[s - 3],
						descr: a[s - 1],
						type: r.getType(a[s - 2], a[s])
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: [1, 5],
				8: n
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{
				4: 6,
				6: [1, 7],
				7: [1, 8],
				8: n
			},
			{
				6: r,
				7: [1, 10],
				9: 9,
				12: 11,
				13: i,
				14: 14,
				15: a,
				16: o,
				17: 17,
				18: 18,
				19: s,
				22: c
			},
			e(l, [2, 3]),
			{ 1: [2, 2] },
			e(l, [2, 4]),
			e(l, [2, 5]),
			{
				1: [2, 6],
				6: r,
				12: 21,
				13: i,
				14: 14,
				15: a,
				16: o,
				17: 17,
				18: 18,
				19: s,
				22: c
			},
			{
				6: r,
				9: 22,
				12: 11,
				13: i,
				14: 14,
				15: a,
				16: o,
				17: 17,
				18: 18,
				19: s,
				22: c
			},
			{
				6: u,
				7: d,
				10: 23,
				11: f
			},
			e(p, [2, 22], {
				17: 17,
				18: 18,
				14: 27,
				15: [1, 28],
				16: [1, 29],
				19: s,
				22: c
			}),
			e(p, [2, 18]),
			e(p, [2, 19]),
			e(p, [2, 20]),
			e(p, [2, 21]),
			e(p, [2, 23]),
			e(p, [2, 24]),
			e(p, [2, 26], { 19: [1, 30] }),
			{ 20: [1, 31] },
			{
				6: u,
				7: d,
				10: 32,
				11: f
			},
			{
				1: [2, 7],
				6: r,
				12: 21,
				13: i,
				14: 14,
				15: a,
				16: o,
				17: 17,
				18: 18,
				19: s,
				22: c
			},
			e(m, [2, 14], {
				7: h,
				11: g
			}),
			e(_, [2, 8]),
			e(_, [2, 9]),
			e(_, [2, 10]),
			e(p, [2, 15]),
			e(p, [2, 16]),
			e(p, [2, 17]),
			{ 20: [1, 35] },
			{ 21: [1, 36] },
			e(m, [2, 13], {
				7: h,
				11: g
			}),
			e(_, [2, 11]),
			e(_, [2, 12]),
			{ 21: [1, 37] },
			e(p, [2, 25]),
			e(p, [2, 27])
		],
		defaultActions: {
			2: [2, 1],
			6: [2, 2]
		},
		parseError: /* @__PURE__ */ __name(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var n = this, r = [0], i = [], a = [null], o = [], s = this.table, c = "", l = 0, u = 0, d = 0, f = 2, p = 1, m = o.slice.call(arguments, 1), h = Object.create(this.lexer), g = { yy: {} };
			for (var _ in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _) && (g.yy[_] = this.yy[_]);
			h.setInput(e, g.yy), g.yy.lexer = h, g.yy.parser = this, h.yylloc === void 0 && (h.yylloc = {});
			var v = h.yylloc;
			o.push(v);
			var y = h.options && h.options.ranges;
			typeof g.yy.parseError == "function" ? this.parseError = g.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function b(e) {
				r.length -= 2 * e, a.length -= e, o.length -= e;
			}
			__name(b, "popStack");
			function x() {
				var e = i.pop() || h.lex() || p;
				return typeof e != "number" && (e instanceof Array && (i = e, e = i.pop()), e = n.symbols_[e] || e), e;
			}
			__name(x, "lex");
			for (var S, C, w, T, E, D = {}, O, k, A, j;;) {
				if (w = r[r.length - 1], this.defaultActions[w] ? T = this.defaultActions[w] : (S ??= x(), T = s[w] && s[w][S]), T === void 0 || !T.length || !T[0]) {
					var M = "";
					for (O in j = [], s[w]) this.terminals_[O] && O > f && j.push("'" + this.terminals_[O] + "'");
					M = h.showPosition ? "Parse error on line " + (l + 1) + ":\n" + h.showPosition() + "\nExpecting " + j.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (S == p ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(M, {
						text: h.match,
						token: this.terminals_[S] || S,
						line: h.yylineno,
						loc: v,
						expected: j
					});
				}
				if (T[0] instanceof Array && T.length > 1) throw Error("Parse Error: multiple actions possible at state: " + w + ", token: " + S);
				switch (T[0]) {
					case 1:
						r.push(S), a.push(h.yytext), o.push(h.yylloc), r.push(T[1]), S = null, C ? (S = C, C = null) : (u = h.yyleng, c = h.yytext, l = h.yylineno, v = h.yylloc, d > 0 && d--);
						break;
					case 2:
						if (k = this.productions_[T[1]][1], D.$ = a[a.length - k], D._$ = {
							first_line: o[o.length - (k || 1)].first_line,
							last_line: o[o.length - 1].last_line,
							first_column: o[o.length - (k || 1)].first_column,
							last_column: o[o.length - 1].last_column
						}, y && (D._$.range = [o[o.length - (k || 1)].range[0], o[o.length - 1].range[1]]), E = this.performAction.apply(D, [
							c,
							u,
							l,
							g.yy,
							T[1],
							a,
							o
						].concat(m)), E !== void 0) return E;
						k && (r = r.slice(0, -1 * k * 2), a = a.slice(0, -1 * k), o = o.slice(0, -1 * k)), r.push(this.productions_[T[1]][0]), a.push(D.$), o.push(D._$), A = s[r[r.length - 2]][r[r.length - 1]], r.push(A);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	v.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, t) {
				if (this.yy.parser) this.yy.parser.parseError(e, t);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, t) {
				return this.yy = t || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
				var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t), this.offset -= t;
				var r = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
				var i = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
				}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this;
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
				var e = this.pastInput(), t = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + t + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, t) {
				var n, r, i;
				if (this.options.backtrack_lexer && (i = {
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
				}, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), r = e[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], n = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
				if (this._backtrack) {
					for (var a in i) this[a] = i[a];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, t, n, r;
				this._more || (this.yytext = "", this.match = "");
				for (var i = this._currentRules(), a = 0; a < i.length; a++) if (n = this._input.match(this.rules[i[a]]), n && (!t || n[0].length > t[0].length)) {
					if (t = n, r = a, this.options.backtrack_lexer) {
						if (e = this.test_match(n, i[a]), e !== !1) return e;
						if (this._backtrack) {
							t = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return t ? (e = this.test_match(t, i[r]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
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
			performAction: /* @__PURE__ */ __name(function(e, t, n, r) {
				switch (n) {
					case 0: return e.getLogger().trace("Found comment", t.yytext), 6;
					case 1: return 8;
					case 2:
						this.begin("CLASS");
						break;
					case 3: return this.popState(), 16;
					case 4:
						this.popState();
						break;
					case 5:
						e.getLogger().trace("Begin icon"), this.begin("ICON");
						break;
					case 6: return e.getLogger().trace("SPACELINE"), 6;
					case 7: return 7;
					case 8: return 15;
					case 9:
						e.getLogger().trace("end icon"), this.popState();
						break;
					case 10: return e.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
					case 11: return e.getLogger().trace("Cloud"), this.begin("NODE"), 19;
					case 12: return e.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
					case 13: return e.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
					case 14: return this.begin("NODE"), 19;
					case 15: return this.begin("NODE"), 19;
					case 16: return this.begin("NODE"), 19;
					case 17: return this.begin("NODE"), 19;
					case 18: return 13;
					case 19: return 22;
					case 20: return 11;
					case 21:
						this.begin("NSTR2");
						break;
					case 22: return "NODE_DESCR";
					case 23:
						this.popState();
						break;
					case 24:
						e.getLogger().trace("Starting NSTR"), this.begin("NSTR");
						break;
					case 25: return e.getLogger().trace("description:", t.yytext), "NODE_DESCR";
					case 26:
						this.popState();
						break;
					case 27: return this.popState(), e.getLogger().trace("node end ))"), "NODE_DEND";
					case 28: return this.popState(), e.getLogger().trace("node end )"), "NODE_DEND";
					case 29: return this.popState(), e.getLogger().trace("node end ...", t.yytext), "NODE_DEND";
					case 30: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 31: return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
					case 32: return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
					case 33: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 34: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 35: return e.getLogger().trace("Long description:", t.yytext), 20;
					case 36: return e.getLogger().trace("Long description:", t.yytext), 20;
				}
			}, "anonymous"),
			rules: [
				/^(?:\s*%%.*)/i,
				/^(?:mindmap\b)/i,
				/^(?::::)/i,
				/^(?:.+)/i,
				/^(?:\n)/i,
				/^(?:::icon\()/i,
				/^(?:[\s]+[\n])/i,
				/^(?:[\n]+)/i,
				/^(?:[^\)]+)/i,
				/^(?:\))/i,
				/^(?:-\))/i,
				/^(?:\(-)/i,
				/^(?:\)\))/i,
				/^(?:\))/i,
				/^(?:\(\()/i,
				/^(?:\{\{)/i,
				/^(?:\()/i,
				/^(?:\[)/i,
				/^(?:[\s]+)/i,
				/^(?:[^\(\[\n\)\{\}]+)/i,
				/^(?:$)/i,
				/^(?:["][`])/i,
				/^(?:[^`"]+)/i,
				/^(?:[`]["])/i,
				/^(?:["])/i,
				/^(?:[^"]+)/i,
				/^(?:["])/i,
				/^(?:[\)]\))/i,
				/^(?:[\)])/i,
				/^(?:[\]])/i,
				/^(?:\}\})/i,
				/^(?:\(-)/i,
				/^(?:-\))/i,
				/^(?:\(\()/i,
				/^(?:\()/i,
				/^(?:[^\)\]\(\}]+)/i,
				/^(?:.+(?!\(\())/i
			],
			conditions: {
				CLASS: {
					rules: [3, 4],
					inclusive: !1
				},
				ICON: {
					rules: [8, 9],
					inclusive: !1
				},
				NSTR2: {
					rules: [22, 23],
					inclusive: !1
				},
				NSTR: {
					rules: [25, 26],
					inclusive: !1
				},
				NODE: {
					rules: [
						21,
						24,
						27,
						28,
						29,
						30,
						31,
						32,
						33,
						34,
						35,
						36
					],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						5,
						6,
						7,
						10,
						11,
						12,
						13,
						14,
						15,
						16,
						17,
						18,
						19,
						20
					],
					inclusive: !0
				}
			}
		};
	})();
	function y() {
		this.yy = {};
	}
	return __name(y, "Parser"), y.prototype = v, v.Parser = y, new y();
})();
parser.parser = parser;
var mindmap_default = parser, nodeType = {
	DEFAULT: 0,
	NO_BORDER: 0,
	ROUNDED_RECT: 1,
	RECT: 2,
	CIRCLE: 3,
	CLOUD: 4,
	BANG: 5,
	HEXAGON: 6
}, MindmapDB = class {
	constructor() {
		this.nodes = [], this.count = 0, this.elements = {}, this.getLogger = this.getLogger.bind(this), this.nodeType = nodeType, this.clear(), this.getType = this.getType.bind(this), this.getElementById = this.getElementById.bind(this), this.getParent = this.getParent.bind(this), this.getMindmap = this.getMindmap.bind(this), this.addNode = this.addNode.bind(this), this.decorateNode = this.decorateNode.bind(this);
	}
	static #_ = __name(this, "MindmapDB");
	clear() {
		this.nodes = [], this.count = 0, this.elements = {}, this.baseLevel = void 0;
	}
	getParent(e) {
		for (let t = this.nodes.length - 1; t >= 0; t--) if (this.nodes[t].level < e) return this.nodes[t];
		return null;
	}
	getMindmap() {
		return this.nodes.length > 0 ? this.nodes[0] : null;
	}
	addNode(t, n, r, a) {
		log.info("addNode", t, n, r, a);
		let o = !1;
		this.nodes.length === 0 ? (this.baseLevel = t, t = 0, o = !0) : this.baseLevel !== void 0 && (t -= this.baseLevel, o = !1);
		let l = getConfig2(), u = l.mindmap?.padding ?? defaultConfig_default.mindmap.padding;
		switch (a) {
			case this.nodeType.ROUNDED_RECT:
			case this.nodeType.RECT:
			case this.nodeType.HEXAGON:
				u *= 2;
				break;
		}
		let d = {
			id: this.count++,
			nodeId: sanitizeText(n, l),
			level: t,
			descr: sanitizeText(r, l),
			type: a,
			children: [],
			width: l.mindmap?.maxNodeWidth ?? defaultConfig_default.mindmap.maxNodeWidth,
			padding: u,
			isRoot: o
		}, f = this.getParent(t);
		if (f) f.children.push(d), this.nodes.push(d);
		else if (o) this.nodes.push(d);
		else throw Error(`There can be only one root. No parent could be found for ("${d.descr}")`);
	}
	getType(t, n) {
		switch (log.debug("In get type", t, n), t) {
			case "[": return this.nodeType.RECT;
			case "(": return n === ")" ? this.nodeType.ROUNDED_RECT : this.nodeType.CLOUD;
			case "((": return this.nodeType.CIRCLE;
			case ")": return this.nodeType.CLOUD;
			case "))": return this.nodeType.BANG;
			case "{{": return this.nodeType.HEXAGON;
			default: return this.nodeType.DEFAULT;
		}
	}
	setElementForId(e, t) {
		this.elements[e] = t;
	}
	getElementById(e) {
		return this.elements[e];
	}
	decorateNode(e) {
		if (!e) return;
		let t = getConfig2(), n = this.nodes[this.nodes.length - 1];
		e.icon && (n.icon = sanitizeText(e.icon, t)), e.class && (n.class = sanitizeText(e.class, t));
	}
	type2Str(e) {
		switch (e) {
			case this.nodeType.DEFAULT: return "no-border";
			case this.nodeType.RECT: return "rect";
			case this.nodeType.ROUNDED_RECT: return "rounded-rect";
			case this.nodeType.CIRCLE: return "circle";
			case this.nodeType.CLOUD: return "cloud";
			case this.nodeType.BANG: return "bang";
			case this.nodeType.HEXAGON: return "hexgon";
			default: return "no-border";
		}
	}
	assignSections(e, t) {
		if (e.level === 0 ? e.section = void 0 : e.section = t, e.children) for (let [n, r] of e.children.entries()) {
			let i = e.level === 0 ? n : t;
			this.assignSections(r, i);
		}
	}
	flattenNodes(e, n) {
		let r = ["mindmap-node"];
		e.isRoot === !0 ? r.push("section-root", "section--1") : e.section !== void 0 && r.push(`section-${e.section}`), e.class && r.push(e.class);
		let i = r.join(" "), a = /* @__PURE__ */ __name((e) => {
			switch (e) {
				case nodeType.CIRCLE: return "mindmapCircle";
				case nodeType.RECT: return "rect";
				case nodeType.ROUNDED_RECT: return "rounded";
				case nodeType.CLOUD: return "cloud";
				case nodeType.BANG: return "bang";
				case nodeType.HEXAGON: return "hexagon";
				case nodeType.DEFAULT: return "defaultMindmapNode";
				case nodeType.NO_BORDER:
				default: return "rect";
			}
		}, "getShapeFromType"), o = {
			id: e.id.toString(),
			domId: "node_" + e.id.toString(),
			label: e.descr,
			isGroup: !1,
			shape: a(e.type),
			width: e.width,
			height: e.height ?? 0,
			padding: e.padding,
			cssClasses: i,
			cssStyles: [],
			look: "default",
			icon: e.icon,
			x: e.x,
			y: e.y,
			level: e.level,
			nodeId: e.nodeId,
			type: e.type,
			section: e.section
		};
		if (n.push(o), e.children) for (let t of e.children) this.flattenNodes(t, n);
	}
	generateEdges(e, t) {
		if (e.children) for (let n of e.children) {
			let r = "edge";
			n.section !== void 0 && (r += ` section-edge-${n.section}`);
			let i = e.level + 1;
			r += ` edge-depth-${i}`;
			let a = {
				id: `edge_${e.id}_${n.id}`,
				start: e.id.toString(),
				end: n.id.toString(),
				type: "normal",
				curve: "basis",
				thickness: "normal",
				look: "default",
				classes: r,
				depth: e.level,
				section: n.section
			};
			t.push(a), this.generateEdges(n, t);
		}
	}
	getData() {
		let t = this.getMindmap(), n = getConfig2(), i = getUserDefinedConfig().layout !== void 0, a = n;
		if (i || (a.layout = "cose-bilkent"), !t) return {
			nodes: [],
			edges: [],
			config: a
		};
		log.debug("getData: mindmapRoot", t, n), this.assignSections(t);
		let o = [], c = [];
		this.flattenNodes(t, o), this.generateEdges(t, c), log.debug(`getData: processed ${o.length} nodes and ${c.length} edges`);
		let l = /* @__PURE__ */ new Map();
		for (let e of o) l.set(e.id, {
			shape: e.shape,
			width: e.width,
			height: e.height,
			padding: e.padding
		});
		return {
			nodes: o,
			edges: c,
			config: a,
			rootNode: t,
			markers: ["point"],
			direction: "TB",
			nodeSpacing: 50,
			rankSpacing: 50,
			shapes: Object.fromEntries(l),
			type: "mindmap",
			diagramId: "mindmap-" + v4_default()
		};
	}
	getLogger() {
		return log;
	}
}, mindmapRenderer_default = { draw: /* @__PURE__ */ __name(async (t, n, r, i) => {
	log.debug("Rendering mindmap diagram\n" + t);
	let a = i.db, o = a.getData(), s = getDiagramElement(n, o.config.securityLevel);
	o.type = i.type, o.layoutAlgorithm = getRegisteredLayoutAlgorithm(o.config.layout, { fallback: "cose-bilkent" }), o.diagramId = n, a.getMindmap() && (o.nodes.forEach((e) => {
		e.shape === "rounded" ? (e.radius = 15, e.taper = 15, e.stroke = "none", e.width = 0, e.padding = 15) : e.shape === "circle" ? e.padding = 10 : e.shape === "rect" && (e.width = 0, e.padding = 10);
	}), await render(o, s), setupViewPortForSVG(s, o.config.mindmap?.padding ?? defaultConfig_default.mindmap.padding, "mindmapDiagram", o.config.mindmap?.useMaxWidth ?? defaultConfig_default.mindmap.useMaxWidth));
}, "draw") }, genSections = /* @__PURE__ */ __name((e) => {
	let t = "";
	for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) e["lineColor" + t] = e["lineColor" + t] || e["cScaleInv" + t], is_dark_default(e["lineColor" + t]) ? e["lineColor" + t] = lighten_default(e["lineColor" + t], 20) : e["lineColor" + t] = darken_default(e["lineColor" + t], 20);
	for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) {
		let r = "" + (17 - 3 * n);
		t += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} polygon, .section-${n - 1} path  {
      fill: ${e["cScale" + n]};
    }
    .section-${n - 1} text {
     fill: ${e["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${e["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${r};
    }
    .section-${n - 1} line {
      stroke: ${e["cScaleInv" + n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
	}
	return t;
}, "genSections"), diagram = {
	get db() {
		return new MindmapDB();
	},
	renderer: mindmapRenderer_default,
	parser: mindmap_default,
	styles: /* @__PURE__ */ __name((e) => `
  .edge {
    stroke-width: 3;
  }
  ${genSections(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .section-root span {
    color: ${e.gitBranchLabel0};
  }
  .section-2 span {
    color: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles")
};
export { diagram };
