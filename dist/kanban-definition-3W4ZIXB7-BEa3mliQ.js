import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { $ as is_dark_default, G as setupGraphViewbox, I as sanitizeText, Q as lighten_default, Z as darken_default, b as getConfig2, d as defaultConfig_default } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-CUheKjZU.js";
import "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import { t as getIconStyles } from "./chunk-FMBD7UC4-D5HULJBc.js";
import "./chunk-CVBHYZKI-Cx9WXSzs.js";
import "./chunk-ATLVNIR6-DULmhiFu.js";
import { a as insertNode, c as positionNode, i as insertCluster } from "./chunk-JZLCHNYA-Cqf7Lizt.js";
import { n as load, t as JSON_SCHEMA } from "./chunk-MI3HLSF2-DcxRTH2O.js";
var parser = (function() {
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
	], m = [1, 31], h = [
		6,
		7,
		11,
		24
	], g = [
		1,
		6,
		13,
		16,
		17,
		20,
		23
	], _ = [1, 35], v = [1, 36], y = [
		1,
		6,
		7,
		11,
		13,
		16,
		17,
		20,
		23
	], b = [1, 38], x = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mindMap: 4,
			spaceLines: 5,
			SPACELINE: 6,
			NL: 7,
			KANBAN: 8,
			document: 9,
			stop: 10,
			EOF: 11,
			statement: 12,
			SPACELIST: 13,
			node: 14,
			shapeData: 15,
			ICON: 16,
			CLASS: 17,
			nodeWithId: 18,
			nodeWithoutId: 19,
			NODE_DSTART: 20,
			NODE_DESCR: 21,
			NODE_DEND: 22,
			NODE_ID: 23,
			SHAPE_DATA: 24,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "SPACELINE",
			7: "NL",
			8: "KANBAN",
			11: "EOF",
			13: "SPACELIST",
			16: "ICON",
			17: "CLASS",
			20: "NODE_DSTART",
			21: "NODE_DESCR",
			22: "NODE_DEND",
			23: "NODE_ID",
			24: "SHAPE_DATA"
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
			[12, 3],
			[12, 2],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[14, 1],
			[14, 1],
			[19, 3],
			[18, 1],
			[18, 4],
			[15, 2],
			[15, 1]
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
					r.getLogger().info("Node: ", a[s - 1].id), r.addNode(a[s - 2].length, a[s - 1].id, a[s - 1].descr, a[s - 1].type, a[s]);
					break;
				case 16:
					r.getLogger().info("Node: ", a[s].id), r.addNode(a[s - 1].length, a[s].id, a[s].descr, a[s].type);
					break;
				case 17:
					r.getLogger().trace("Icon: ", a[s]), r.decorateNode({ icon: a[s] });
					break;
				case 18:
				case 23:
					r.decorateNode({ class: a[s] });
					break;
				case 19:
					r.getLogger().trace("SPACELIST");
					break;
				case 20:
					r.getLogger().trace("Node: ", a[s - 1].id), r.addNode(0, a[s - 1].id, a[s - 1].descr, a[s - 1].type, a[s]);
					break;
				case 21:
					r.getLogger().trace("Node: ", a[s].id), r.addNode(0, a[s].id, a[s].descr, a[s].type);
					break;
				case 22:
					r.decorateNode({ icon: a[s] });
					break;
				case 27:
					r.getLogger().trace("node found ..", a[s - 2]), this.$ = {
						id: a[s - 1],
						descr: a[s - 1],
						type: r.getType(a[s - 2], a[s])
					};
					break;
				case 28:
					this.$ = {
						id: a[s],
						descr: a[s],
						type: 0
					};
					break;
				case 29:
					r.getLogger().trace("node found ..", a[s - 3]), this.$ = {
						id: a[s - 3],
						descr: a[s - 1],
						type: r.getType(a[s - 2], a[s])
					};
					break;
				case 30:
					this.$ = a[s - 1] + a[s];
					break;
				case 31:
					this.$ = a[s];
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
				16: a,
				17: o,
				18: 17,
				19: 18,
				20: s,
				23: c
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
				16: a,
				17: o,
				18: 17,
				19: 18,
				20: s,
				23: c
			},
			{
				6: r,
				9: 22,
				12: 11,
				13: i,
				14: 14,
				16: a,
				17: o,
				18: 17,
				19: 18,
				20: s,
				23: c
			},
			{
				6: u,
				7: d,
				10: 23,
				11: f
			},
			e(p, [2, 24], {
				18: 17,
				19: 18,
				14: 27,
				16: [1, 28],
				17: [1, 29],
				20: s,
				23: c
			}),
			e(p, [2, 19]),
			e(p, [2, 21], {
				15: 30,
				24: m
			}),
			e(p, [2, 22]),
			e(p, [2, 23]),
			e(h, [2, 25]),
			e(h, [2, 26]),
			e(h, [2, 28], { 20: [1, 32] }),
			{ 21: [1, 33] },
			{
				6: u,
				7: d,
				10: 34,
				11: f
			},
			{
				1: [2, 7],
				6: r,
				12: 21,
				13: i,
				14: 14,
				16: a,
				17: o,
				18: 17,
				19: 18,
				20: s,
				23: c
			},
			e(g, [2, 14], {
				7: _,
				11: v
			}),
			e(y, [2, 8]),
			e(y, [2, 9]),
			e(y, [2, 10]),
			e(p, [2, 16], {
				15: 37,
				24: m
			}),
			e(p, [2, 17]),
			e(p, [2, 18]),
			e(p, [2, 20], { 24: b }),
			e(h, [2, 31]),
			{ 21: [1, 39] },
			{ 22: [1, 40] },
			e(g, [2, 13], {
				7: _,
				11: v
			}),
			e(y, [2, 11]),
			e(y, [2, 12]),
			e(p, [2, 15], { 24: b }),
			e(h, [2, 30]),
			{ 22: [1, 41] },
			e(h, [2, 27]),
			e(h, [2, 29])
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
	x.lexer = /* @__PURE__ */ (function() {
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
					case 0: return this.pushState("shapeData"), t.yytext = "", 24;
					case 1: return this.pushState("shapeDataStr"), 24;
					case 2: return this.popState(), 24;
					case 3: return t.yytext = t.yytext.replace(/\n\s*/g, "<br/>"), 24;
					case 4: return 24;
					case 5:
						this.popState();
						break;
					case 6: return e.getLogger().trace("Found comment", t.yytext), 6;
					case 7: return 8;
					case 8:
						this.begin("CLASS");
						break;
					case 9: return this.popState(), 17;
					case 10:
						this.popState();
						break;
					case 11:
						e.getLogger().trace("Begin icon"), this.begin("ICON");
						break;
					case 12: return e.getLogger().trace("SPACELINE"), 6;
					case 13: return 7;
					case 14: return 16;
					case 15:
						e.getLogger().trace("end icon"), this.popState();
						break;
					case 16: return e.getLogger().trace("Exploding node"), this.begin("NODE"), 20;
					case 17: return e.getLogger().trace("Cloud"), this.begin("NODE"), 20;
					case 18: return e.getLogger().trace("Explosion Bang"), this.begin("NODE"), 20;
					case 19: return e.getLogger().trace("Cloud Bang"), this.begin("NODE"), 20;
					case 20: return this.begin("NODE"), 20;
					case 21: return this.begin("NODE"), 20;
					case 22: return this.begin("NODE"), 20;
					case 23: return this.begin("NODE"), 20;
					case 24: return 13;
					case 25: return 23;
					case 26: return 11;
					case 27:
						this.begin("NSTR2");
						break;
					case 28: return "NODE_DESCR";
					case 29:
						this.popState();
						break;
					case 30:
						e.getLogger().trace("Starting NSTR"), this.begin("NSTR");
						break;
					case 31: return e.getLogger().trace("description:", t.yytext), "NODE_DESCR";
					case 32:
						this.popState();
						break;
					case 33: return this.popState(), e.getLogger().trace("node end ))"), "NODE_DEND";
					case 34: return this.popState(), e.getLogger().trace("node end )"), "NODE_DEND";
					case 35: return this.popState(), e.getLogger().trace("node end ...", t.yytext), "NODE_DEND";
					case 36: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 37: return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
					case 38: return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
					case 39: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 40: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 41: return e.getLogger().trace("Long description:", t.yytext), 21;
					case 42: return e.getLogger().trace("Long description:", t.yytext), 21;
				}
			}, "anonymous"),
			rules: [
				/^(?:@\{)/i,
				/^(?:["])/i,
				/^(?:["])/i,
				/^(?:[^\"]+)/i,
				/^(?:[^}^"]+)/i,
				/^(?:\})/i,
				/^(?:\s*%%.*)/i,
				/^(?:kanban\b)/i,
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
				/^(?:[^\(\[\n\)\{\}@]+)/i,
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
				shapeDataEndBracket: {
					rules: [],
					inclusive: !1
				},
				shapeDataStr: {
					rules: [2, 3],
					inclusive: !1
				},
				shapeData: {
					rules: [
						1,
						4,
						5
					],
					inclusive: !1
				},
				CLASS: {
					rules: [9, 10],
					inclusive: !1
				},
				ICON: {
					rules: [14, 15],
					inclusive: !1
				},
				NSTR2: {
					rules: [28, 29],
					inclusive: !1
				},
				NSTR: {
					rules: [31, 32],
					inclusive: !1
				},
				NODE: {
					rules: [
						27,
						30,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42
					],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						6,
						7,
						8,
						11,
						12,
						13,
						16,
						17,
						18,
						19,
						20,
						21,
						22,
						23,
						24,
						25,
						26
					],
					inclusive: !0
				}
			}
		};
	})();
	function S() {
		this.yy = {};
	}
	return __name(S, "Parser"), S.prototype = x, x.Parser = S, new S();
})();
parser.parser = parser;
var kanban_default = parser, nodes = [], sections = [], cnt = 0, elements = {}, clear = /* @__PURE__ */ __name(() => {
	nodes = [], sections = [], cnt = 0, elements = {};
}, "clear"), getSection = /* @__PURE__ */ __name((e) => {
	if (nodes.length === 0) return null;
	let t = nodes[0].level, n = null;
	for (let e = nodes.length - 1; e >= 0; e--) if (nodes[e].level === t && !n && (n = nodes[e]), nodes[e].level < t) throw Error("Items without section detected, found section (\"" + nodes[e].label + "\")");
	return e === n?.level ? null : n;
}, "getSection"), getSections = /* @__PURE__ */ __name(function() {
	return sections;
}, "getSections"), getData = /* @__PURE__ */ __name(function() {
	let e = [], t = [], n = getSections(), r = getConfig2();
	for (let e of n) {
		let n = {
			id: e.id,
			label: sanitizeText(e.label ?? "", r),
			isGroup: !0,
			ticket: e.ticket,
			shape: "kanbanSection",
			level: e.level,
			look: r.look
		};
		t.push(n);
		let a = nodes.filter((t) => t.parentId === e.id);
		for (let n of a) {
			let a = {
				id: n.id,
				parentId: e.id,
				label: sanitizeText(n.label ?? "", r),
				isGroup: !1,
				ticket: n?.ticket,
				priority: n?.priority,
				assigned: n?.assigned,
				icon: n?.icon,
				shape: "kanbanItem",
				level: n.level,
				rx: 5,
				ry: 5,
				cssStyles: ["text-align: left"]
			};
			t.push(a);
		}
	}
	return {
		nodes: t,
		edges: e,
		other: {},
		config: getConfig2()
	};
}, "getData"), addNode = /* @__PURE__ */ __name((e, t, n, r, a) => {
	let o = getConfig2(), l = o.mindmap?.padding ?? defaultConfig_default.mindmap.padding;
	switch (r) {
		case nodeType.ROUNDED_RECT:
		case nodeType.RECT:
		case nodeType.HEXAGON: l *= 2;
	}
	let u = {
		id: sanitizeText(t, o) || "kbn" + cnt++,
		level: e,
		label: sanitizeText(n, o),
		width: o.mindmap?.maxNodeWidth ?? defaultConfig_default.mindmap.maxNodeWidth,
		padding: l,
		isGroup: !1
	};
	if (a !== void 0) {
		let e;
		e = a.includes("\n") ? a + "\n" : "{\n" + a + "\n}";
		let t = load(e, { schema: JSON_SCHEMA });
		if (t.shape && (t.shape !== t.shape.toLowerCase() || t.shape.includes("_"))) throw Error(`No such shape: ${t.shape}. Shape names should be lowercase.`);
		t?.shape && t.shape === "kanbanItem" && (u.shape = t?.shape), t?.label && (u.label = t?.label), t?.icon && (u.icon = t?.icon.toString()), t?.assigned && (u.assigned = t?.assigned.toString()), t?.ticket && (u.ticket = t?.ticket.toString()), t?.priority && (u.priority = t?.priority);
	}
	let d = getSection(e);
	d ? u.parentId = d.id || "kbn" + cnt++ : sections.push(u), nodes.push(u);
}, "addNode"), nodeType = {
	DEFAULT: 0,
	NO_BORDER: 0,
	ROUNDED_RECT: 1,
	RECT: 2,
	CIRCLE: 3,
	CLOUD: 4,
	BANG: 5,
	HEXAGON: 6
}, kanbanDb_default = {
	clear,
	addNode,
	getSections,
	getData,
	nodeType,
	getType: /* @__PURE__ */ __name((t, n) => {
		switch (log.debug("In get type", t, n), t) {
			case "[": return nodeType.RECT;
			case "(": return n === ")" ? nodeType.ROUNDED_RECT : nodeType.CLOUD;
			case "((": return nodeType.CIRCLE;
			case ")": return nodeType.CLOUD;
			case "))": return nodeType.BANG;
			case "{{": return nodeType.HEXAGON;
			default: return nodeType.DEFAULT;
		}
	}, "getType"),
	setElementForId: /* @__PURE__ */ __name((e, t) => {
		elements[e] = t;
	}, "setElementForId"),
	decorateNode: /* @__PURE__ */ __name((e) => {
		if (!e) return;
		let t = getConfig2(), n = nodes[nodes.length - 1];
		e.icon && (n.icon = sanitizeText(e.icon, t)), e.class && (n.cssClasses = sanitizeText(e.class, t));
	}, "decorateNode"),
	type2Str: /* @__PURE__ */ __name((e) => {
		switch (e) {
			case nodeType.DEFAULT: return "no-border";
			case nodeType.RECT: return "rect";
			case nodeType.ROUNDED_RECT: return "rounded-rect";
			case nodeType.CIRCLE: return "circle";
			case nodeType.CLOUD: return "cloud";
			case nodeType.BANG: return "bang";
			case nodeType.HEXAGON: return "hexgon";
			default: return "no-border";
		}
	}, "type2Str"),
	getLogger: /* @__PURE__ */ __name(() => log, "getLogger"),
	getElementById: /* @__PURE__ */ __name((e) => elements[e], "getElementById")
}, kanbanRenderer_default = { draw: /* @__PURE__ */ __name(async (t, n, i, a) => {
	log.debug("Rendering kanban diagram\n" + t);
	let o = a.db.getData(), u = getConfig2();
	u.htmlLabels = !1;
	let m = selectSvgElement(n), h = m.append("g");
	h.attr("class", "sections");
	let g = m.append("g");
	g.attr("class", "items");
	let _ = o.nodes.filter((e) => e.isGroup), v = 0, y = [], b = 25;
	for (let e of _) {
		let t = u?.kanban?.sectionWidth || 200;
		v += 1, e.x = t * v + (v - 1) * 10 / 2, e.width = t, e.y = 0, e.height = t * 3, e.rx = 5, e.ry = 5, e.cssClasses = e.cssClasses + " section-" + v;
		let n = await insertCluster(h, e);
		b = Math.max(b, n?.labelBBox?.height), y.push(n);
	}
	let x = 0;
	for (let e of _) {
		let t = y[x];
		x += 1;
		let n = u?.kanban?.sectionWidth || 200, r = -n * 3 / 2 + b, i = r, a = o.nodes.filter((t) => t.parentId === e.id);
		for (let t of a) {
			if (t.isGroup) throw Error("Groups within groups are not allowed in Kanban diagrams");
			t.x = e.x, t.width = n - 1.5 * 10;
			let r = (await insertNode(g, t, { config: u })).node().getBBox();
			t.y = i + r.height / 2, await positionNode(t), i = t.y + r.height / 2 + 10 / 2;
		}
		let s = t.cluster.select("rect"), c = Math.max(i - r + 30, 50) + (b - 25);
		s.attr("height", c);
	}
	setupGraphViewbox(void 0, m, u.mindmap?.padding ?? defaultConfig_default.kanban.padding, u.mindmap?.useMaxWidth ?? defaultConfig_default.kanban.useMaxWidth);
}, "draw") }, genSections = /* @__PURE__ */ __name((e) => {
	let r = "";
	for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) e["lineColor" + t] = e["lineColor" + t] || e["cScaleInv" + t], is_dark_default(e["lineColor" + t]) ? e["lineColor" + t] = lighten_default(e["lineColor" + t], 20) : e["lineColor" + t] = darken_default(e["lineColor" + t], 20);
	let i = /* @__PURE__ */ __name((t, n) => e.darkMode ? darken_default(t, n) : lighten_default(t, n), "adjuster");
	for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) {
		let n = "" + (17 - 3 * t);
		r += `
    .section-${t - 1} rect, .section-${t - 1} path, .section-${t - 1} circle, .section-${t - 1} polygon, .section-${t - 1} path  {
      fill: ${i(e["cScale" + t], 10)};
      stroke: ${i(e["cScale" + t], 10)};

    }
    .section-${t - 1} text {
     fill: ${e["cScaleLabel" + t]};
    }
    .node-icon-${t - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + t]};
    }
    .section-edge-${t - 1}{
      stroke: ${e["cScale" + t]};
    }
    .edge-depth-${t - 1}{
      stroke-width: ${n};
    }
    .section-${t - 1} line {
      stroke: ${e["cScaleInv" + t]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `;
	}
	return r;
}, "genSections"), diagram = {
	db: kanbanDb_default,
	renderer: kanbanRenderer_default,
	parser: kanban_default,
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
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${getIconStyles()}
`, "getStyles")
};
export { diagram };

//# sourceMappingURL=kanban-definition-3W4ZIXB7-BEa3mliQ.js.map