import { i as log, n as __export, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { $ as is_dark_default, G as setupGraphViewbox, Q as lighten_default, Z as darken_default, a as clear, b as getConfig2, o as commonDb_exports } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import { t as arc_default } from "./arc-cZaP7Il9.js";
var parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, S, C, w) {
		for (C ||= {}, w = e.length; w--; C[e[w]] = S);
		return C;
	}, "o"), S = [
		6,
		8,
		10,
		11,
		12,
		14,
		16,
		17,
		20,
		21
	], w = [1, 9], T = [1, 10], E = [1, 11], D = [1, 12], O = [1, 13], k = [1, 16], A = [1, 17], j = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			timeline: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NEWLINE: 10,
			title: 11,
			acc_title: 12,
			acc_title_value: 13,
			acc_descr: 14,
			acc_descr_value: 15,
			acc_descr_multiline_value: 16,
			section: 17,
			period_statement: 18,
			event_statement: 19,
			period: 20,
			event: 21,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "timeline",
			6: "EOF",
			8: "SPACE",
			10: "NEWLINE",
			11: "title",
			12: "acc_title",
			13: "acc_title_value",
			14: "acc_descr",
			15: "acc_descr_value",
			16: "acc_descr_multiline_value",
			17: "section",
			20: "period",
			21: "event"
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
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[18, 1],
			[19, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, S, C, w, T, E, D) {
			var O = E.length - 1;
			switch (T) {
				case 1: return E[O - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					E[O - 1].push(E[O]), this.$ = E[O - 1];
					break;
				case 4:
				case 5:
					this.$ = E[O];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					w.getCommonDb().setDiagramTitle(E[O].substr(6)), this.$ = E[O].substr(6);
					break;
				case 9:
					this.$ = E[O].trim(), w.getCommonDb().setAccTitle(this.$);
					break;
				case 10:
				case 11:
					this.$ = E[O].trim(), w.getCommonDb().setAccDescription(this.$);
					break;
				case 12:
					w.addSection(E[O].substr(8)), this.$ = E[O].substr(8);
					break;
				case 15:
					w.addTask(E[O], 0, ""), this.$ = E[O];
					break;
				case 16:
					w.addEvent(E[O].substr(2)), this.$ = E[O];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			e(S, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: w,
				12: T,
				14: E,
				16: D,
				17: O,
				18: 14,
				19: 15,
				20: k,
				21: A
			},
			e(S, [2, 7], { 1: [2, 1] }),
			e(S, [2, 3]),
			{
				9: 18,
				11: w,
				12: T,
				14: E,
				16: D,
				17: O,
				18: 14,
				19: 15,
				20: k,
				21: A
			},
			e(S, [2, 5]),
			e(S, [2, 6]),
			e(S, [2, 8]),
			{ 13: [1, 19] },
			{ 15: [1, 20] },
			e(S, [2, 11]),
			e(S, [2, 12]),
			e(S, [2, 13]),
			e(S, [2, 14]),
			e(S, [2, 15]),
			e(S, [2, 16]),
			e(S, [2, 4]),
			e(S, [2, 9]),
			e(S, [2, 10])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ __name(function(e, S) {
			if (S.recoverable) this.trace(e);
			else {
				var C = Error(e);
				throw C.hash = S, C;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var S = this, w = [0], T = [], E = [null], D = [], O = this.table, k = "", A = 0, j = 0, M = 0, N = 2, P = 1, F = D.slice.call(arguments, 1), I = Object.create(this.lexer), L = { yy: {} };
			for (var R in this.yy) Object.prototype.hasOwnProperty.call(this.yy, R) && (L.yy[R] = this.yy[R]);
			I.setInput(e, L.yy), L.yy.lexer = I, L.yy.parser = this, I.yylloc === void 0 && (I.yylloc = {});
			var z = I.yylloc;
			D.push(z);
			var B = I.options && I.options.ranges;
			typeof L.yy.parseError == "function" ? this.parseError = L.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function V(e) {
				w.length -= 2 * e, E.length -= e, D.length -= e;
			}
			__name(V, "popStack");
			function H() {
				var e = T.pop() || I.lex() || P;
				return typeof e != "number" && (e instanceof Array && (T = e, e = T.pop()), e = S.symbols_[e] || e), e;
			}
			__name(H, "lex");
			for (var U, W, G, K, q, J = {}, Y, X, Z, Q;;) {
				if (G = w[w.length - 1], this.defaultActions[G] ? K = this.defaultActions[G] : (U ??= H(), K = O[G] && O[G][U]), K === void 0 || !K.length || !K[0]) {
					var $ = "";
					for (Y in Q = [], O[G]) this.terminals_[Y] && Y > N && Q.push("'" + this.terminals_[Y] + "'");
					$ = I.showPosition ? "Parse error on line " + (A + 1) + ":\n" + I.showPosition() + "\nExpecting " + Q.join(", ") + ", got '" + (this.terminals_[U] || U) + "'" : "Parse error on line " + (A + 1) + ": Unexpected " + (U == P ? "end of input" : "'" + (this.terminals_[U] || U) + "'"), this.parseError($, {
						text: I.match,
						token: this.terminals_[U] || U,
						line: I.yylineno,
						loc: z,
						expected: Q
					});
				}
				if (K[0] instanceof Array && K.length > 1) throw Error("Parse Error: multiple actions possible at state: " + G + ", token: " + U);
				switch (K[0]) {
					case 1:
						w.push(U), E.push(I.yytext), D.push(I.yylloc), w.push(K[1]), U = null, W ? (U = W, W = null) : (j = I.yyleng, k = I.yytext, A = I.yylineno, z = I.yylloc, M > 0 && M--);
						break;
					case 2:
						if (X = this.productions_[K[1]][1], J.$ = E[E.length - X], J._$ = {
							first_line: D[D.length - (X || 1)].first_line,
							last_line: D[D.length - 1].last_line,
							first_column: D[D.length - (X || 1)].first_column,
							last_column: D[D.length - 1].last_column
						}, B && (J._$.range = [D[D.length - (X || 1)].range[0], D[D.length - 1].range[1]]), q = this.performAction.apply(J, [
							k,
							j,
							A,
							L.yy,
							K[1],
							E,
							D
						].concat(F)), q !== void 0) return q;
						X && (w = w.slice(0, -1 * X * 2), E = E.slice(0, -1 * X), D = D.slice(0, -1 * X)), w.push(this.productions_[K[1]][0]), E.push(J.$), D.push(J._$), Z = O[w[w.length - 2]][w[w.length - 1]], w.push(Z);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	j.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, S) {
				if (this.yy.parser) this.yy.parser.parseError(e, S);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, S) {
				return this.yy = S || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
				var S = e.length, C = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - S), this.offset -= S;
				var w = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), C.length - 1 && (this.yylineno -= C.length - 1);
				var T = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: C ? (C.length === w.length ? this.yylloc.first_column : 0) + w[w.length - C.length].length - C[0].length : this.yylloc.first_column - S
				}, this.options.ranges && (this.yylloc.range = [T[0], T[0] + this.yyleng - S]), this.yyleng = this.yytext.length, this;
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
				var e = this.pastInput(), S = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + S + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, S) {
				var C, w, T;
				if (this.options.backtrack_lexer && (T = {
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
				}, this.options.ranges && (T.yylloc.range = this.yylloc.range.slice(0))), w = e[0].match(/(?:\r\n?|\n).*/g), w && (this.yylineno += w.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: w ? w[w.length - 1].length - w[w.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], C = this.performAction.call(this, this.yy, this, S, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), C) return C;
				if (this._backtrack) {
					for (var E in T) this[E] = T[E];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, S, C, w;
				this._more || (this.yytext = "", this.match = "");
				for (var T = this._currentRules(), E = 0; E < T.length; E++) if (C = this._input.match(this.rules[T[E]]), C && (!S || C[0].length > S[0].length)) {
					if (S = C, w = E, this.options.backtrack_lexer) {
						if (e = this.test_match(C, T[E]), e !== !1) return e;
						if (this._backtrack) {
							S = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return S ? (e = this.test_match(S, T[w]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
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
			performAction: /* @__PURE__ */ __name(function(e, S, C, w) {
				switch (C) {
					case 0: break;
					case 1: break;
					case 2: return 10;
					case 3: break;
					case 4: break;
					case 5: return 4;
					case 6: return 11;
					case 7: return this.begin("acc_title"), 12;
					case 8: return this.popState(), "acc_title_value";
					case 9: return this.begin("acc_descr"), 14;
					case 10: return this.popState(), "acc_descr_value";
					case 11:
						this.begin("acc_descr_multiline");
						break;
					case 12:
						this.popState();
						break;
					case 13: return "acc_descr_multiline_value";
					case 14: return 17;
					case 15: return 21;
					case 16: return 20;
					case 17: return 6;
					case 18: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:timeline\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:section\s[^:\n]+)/i,
				/^(?::\s(?:[^:\n]|:(?!\s))+)/i,
				/^(?:[^#:\n]+)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [12, 13],
					inclusive: !1
				},
				acc_descr: {
					rules: [10],
					inclusive: !1
				},
				acc_title: {
					rules: [8],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						9,
						11,
						14,
						15,
						16,
						17,
						18
					],
					inclusive: !0
				}
			}
		};
	})();
	function M() {
		this.yy = {};
	}
	return __name(M, "Parser"), M.prototype = j, j.Parser = M, new M();
})();
parser.parser = parser;
var timeline_default = parser, timelineDb_exports = {};
__export(timelineDb_exports, {
	addEvent: () => addEvent,
	addSection: () => addSection,
	addTask: () => addTask,
	addTaskOrg: () => addTaskOrg,
	clear: () => clear2,
	default: () => timelineDb_default,
	getCommonDb: () => getCommonDb,
	getSections: () => getSections,
	getTasks: () => getTasks
});
var currentSection = "", currentTaskId = 0, sections = [], tasks = [], rawTasks = [], getCommonDb = /* @__PURE__ */ __name(() => commonDb_exports, "getCommonDb"), clear2 = /* @__PURE__ */ __name(function() {
	sections.length = 0, tasks.length = 0, currentSection = "", rawTasks.length = 0, clear();
}, "clear"), addSection = /* @__PURE__ */ __name(function(e) {
	currentSection = e, sections.push(e);
}, "addSection"), getSections = /* @__PURE__ */ __name(function() {
	return sections;
}, "getSections"), getTasks = /* @__PURE__ */ __name(function() {
	let e = compileTasks(), S = 0;
	for (; !e && S < 100;) e = compileTasks(), S++;
	return tasks.push(...rawTasks), tasks;
}, "getTasks"), addTask = /* @__PURE__ */ __name(function(e, S, C) {
	let w = {
		id: currentTaskId++,
		section: currentSection,
		type: currentSection,
		task: e,
		score: S || 0,
		events: C ? [C] : []
	};
	rawTasks.push(w);
}, "addTask"), addEvent = /* @__PURE__ */ __name(function(e) {
	rawTasks.find((e) => e.id === currentTaskId - 1).events.push(e);
}, "addEvent"), addTaskOrg = /* @__PURE__ */ __name(function(e) {
	let S = {
		section: currentSection,
		type: currentSection,
		description: e,
		task: e,
		classes: []
	};
	tasks.push(S);
}, "addTaskOrg"), compileTasks = /* @__PURE__ */ __name(function() {
	let e = /* @__PURE__ */ __name(function(e) {
		return rawTasks[e].processed;
	}, "compileTask"), S = !0;
	for (let [C, w] of rawTasks.entries()) e(C), S &&= w.processed;
	return S;
}, "compileTasks"), timelineDb_default = {
	clear: clear2,
	getCommonDb,
	addSection,
	getSections,
	getTasks,
	addTask,
	addTaskOrg,
	addEvent
}, MAX_SECTIONS = 12, drawRect = /* @__PURE__ */ __name(function(e, S) {
	let C = e.append("rect");
	return C.attr("x", S.x), C.attr("y", S.y), C.attr("fill", S.fill), C.attr("stroke", S.stroke), C.attr("width", S.width), C.attr("height", S.height), C.attr("rx", S.rx), C.attr("ry", S.ry), S.class !== void 0 && C.attr("class", S.class), C;
}, "drawRect"), drawFace = /* @__PURE__ */ __name(function(e, S) {
	let w = e.append("circle").attr("cx", S.cx).attr("cy", S.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), T = e.append("g");
	T.append("circle").attr("cx", S.cx - 15 / 3).attr("cy", S.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), T.append("circle").attr("cx", S.cx + 15 / 3).attr("cy", S.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
	function E(e) {
		let C = arc_default().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
		e.append("path").attr("class", "mouth").attr("d", C).attr("transform", "translate(" + S.cx + "," + (S.cy + 2) + ")");
	}
	__name(E, "smile");
	function D(e) {
		let C = arc_default().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
		e.append("path").attr("class", "mouth").attr("d", C).attr("transform", "translate(" + S.cx + "," + (S.cy + 7) + ")");
	}
	__name(D, "sad");
	function O(e) {
		e.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", S.cx - 5).attr("y1", S.cy + 7).attr("x2", S.cx + 5).attr("y2", S.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return __name(O, "ambivalent"), S.score > 3 ? E(T) : S.score < 3 ? D(T) : O(T), w;
}, "drawFace"), drawCircle = /* @__PURE__ */ __name(function(e, S) {
	let C = e.append("circle");
	return C.attr("cx", S.cx), C.attr("cy", S.cy), C.attr("class", "actor-" + S.pos), C.attr("fill", S.fill), C.attr("stroke", S.stroke), C.attr("r", S.r), C.class !== void 0 && C.attr("class", C.class), S.title !== void 0 && C.append("title").text(S.title), C;
}, "drawCircle"), drawText = /* @__PURE__ */ __name(function(e, S) {
	let C = S.text.replace(/<br\s*\/?>/gi, " "), w = e.append("text");
	w.attr("x", S.x), w.attr("y", S.y), w.attr("class", "legend"), w.style("text-anchor", S.anchor), S.class !== void 0 && w.attr("class", S.class);
	let T = w.append("tspan");
	return T.attr("x", S.x + S.textMargin * 2), T.text(C), w;
}, "drawText"), drawLabel = /* @__PURE__ */ __name(function(e, S) {
	function w(e, S, C, w, T) {
		return e + "," + S + " " + (e + C) + "," + S + " " + (e + C) + "," + (S + w - T) + " " + (e + C - T * 1.2) + "," + (S + w) + " " + e + "," + (S + w);
	}
	__name(w, "genPoints");
	let T = e.append("polygon");
	T.attr("points", w(S.x, S.y, 50, 20, 7)), T.attr("class", "labelBox"), S.y += S.labelMargin, S.x += .5 * S.labelMargin, drawText(e, S);
}, "drawLabel"), drawSection = /* @__PURE__ */ __name(function(e, S, C) {
	let w = e.append("g"), T = getNoteRect();
	T.x = S.x, T.y = S.y, T.fill = S.fill, T.width = C.width, T.height = C.height, T.class = "journey-section section-type-" + S.num, T.rx = 3, T.ry = 3, drawRect(w, T), _drawTextCandidateFunc(C)(S.text, w, T.x, T.y, T.width, T.height, { class: "journey-section section-type-" + S.num }, C, S.colour);
}, "drawSection"), taskCount = -1, drawTask = /* @__PURE__ */ __name(function(e, S, C) {
	let w = S.x + C.width / 2, T = e.append("g");
	taskCount++, T.append("line").attr("id", "task" + taskCount).attr("x1", w).attr("y1", S.y).attr("x2", w).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), drawFace(T, {
		cx: w,
		cy: 300 + (5 - S.score) * 30,
		score: S.score
	});
	let E = getNoteRect();
	E.x = S.x, E.y = S.y, E.fill = S.fill, E.width = C.width, E.height = C.height, E.class = "task task-type-" + S.num, E.rx = 3, E.ry = 3, drawRect(T, E), _drawTextCandidateFunc(C)(S.task, T, E.x, E.y, E.width, E.height, { class: "task" }, C, S.colour);
}, "drawTask"), drawBackgroundRect = /* @__PURE__ */ __name(function(e, S) {
	drawRect(e, {
		x: S.startx,
		y: S.starty,
		width: S.stopx - S.startx,
		height: S.stopy - S.starty,
		fill: S.fill,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), getTextObj = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		"text-anchor": "start",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0
	};
}, "getTextObj"), getNoteRect = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		width: 100,
		anchor: "start",
		height: 100,
		rx: 0,
		ry: 0
	};
}, "getNoteRect"), _drawTextCandidateFunc = /* @__PURE__ */ (function() {
	function e(e, S, C, w, E, D, O, k) {
		T(S.append("text").attr("x", C + E / 2).attr("y", w + D / 2 + 5).style("font-color", k).style("text-anchor", "middle").text(e), O);
	}
	__name(e, "byText");
	function S(e, S, C, w, E, D, O, k, A) {
		let { taskFontSize: j, taskFontFamily: M } = k, N = e.split(/<br\s*\/?>/gi);
		for (let e = 0; e < N.length; e++) {
			let k = e * j - j * (N.length - 1) / 2, P = S.append("text").attr("x", C + E / 2).attr("y", w).attr("fill", A).style("text-anchor", "middle").style("font-size", j).style("font-family", M);
			P.append("tspan").attr("x", C + E / 2).attr("dy", k).text(N[e]), P.attr("y", w + D / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), T(P, O);
		}
	}
	__name(S, "byTspan");
	function w(e, C, w, E, D, O, k, A) {
		let j = C.append("switch"), M = j.append("foreignObject").attr("x", w).attr("y", E).attr("width", D).attr("height", O).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		M.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(e), S(e, j, w, E, D, O, k, A), T(M, k);
	}
	__name(w, "byFo");
	function T(e, S) {
		for (let C in S) C in S && e.attr(C, S[C]);
	}
	return __name(T, "_setTextAttrs"), function(C) {
		return C.textPlacement === "fo" ? w : C.textPlacement === "old" ? e : S;
	};
})(), initGraphics = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function wrap(e, S) {
	e.each(function() {
		var e = select_default(this), C = e.text().split(/(\s+|<br>)/).reverse(), T, E = [], D = 1.1, O = e.attr("y"), k = parseFloat(e.attr("dy")), A = e.text(null).append("tspan").attr("x", 0).attr("y", O).attr("dy", k + "em");
		for (let w = 0; w < C.length; w++) T = C[C.length - 1 - w], E.push(T), A.text(E.join(" ").trim()), (A.node().getComputedTextLength() > S || T === "<br>") && (E.pop(), A.text(E.join(" ").trim()), E = T === "<br>" ? [""] : [T], A = e.append("tspan").attr("x", 0).attr("y", O).attr("dy", D + "em").text(T));
	});
}
__name(wrap, "wrap");
var drawNode = /* @__PURE__ */ __name(function(e, S, C, w) {
	let T = C % MAX_SECTIONS - 1, E = e.append("g");
	S.section = T, E.attr("class", (S.class ? S.class + " " : "") + "timeline-node " + ("section-" + T));
	let D = E.append("g"), O = E.append("g"), k = O.append("text").text(S.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, S.width).node().getBBox(), A = w.fontSize?.replace ? w.fontSize.replace("px", "") : w.fontSize;
	return S.height = k.height + A * 1.1 * .5 + S.padding, S.height = Math.max(S.height, S.maxHeight), S.width += 2 * S.padding, O.attr("transform", "translate(" + S.width / 2 + ", " + S.padding / 2 + ")"), defaultBkg(D, S, T, w), S;
}, "drawNode"), getVirtualNodeHeight = /* @__PURE__ */ __name(function(e, S, C) {
	let w = e.append("g"), T = w.append("text").text(S.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, S.width).node().getBBox(), E = C.fontSize?.replace ? C.fontSize.replace("px", "") : C.fontSize;
	return w.remove(), T.height + E * 1.1 * .5 + S.padding;
}, "getVirtualNodeHeight"), defaultBkg = /* @__PURE__ */ __name(function(e, S, C) {
	e.append("path").attr("id", "node-" + S.id).attr("class", "node-bkg node-" + S.type).attr("d", `M0 ${S.height - 5} v${-S.height + 10} q0,-5 5,-5 h${S.width - 10} q5,0 5,5 v${S.height - 5} H0 Z`), e.append("line").attr("class", "node-line-" + C).attr("x1", 0).attr("y1", S.height).attr("x2", S.width).attr("y2", S.height);
}, "defaultBkg"), svgDraw_default = {
	drawRect,
	drawCircle,
	drawSection,
	drawText,
	drawLabel,
	drawTask,
	drawBackgroundRect,
	getTextObj,
	getNoteRect,
	initGraphics,
	drawNode,
	getVirtualNodeHeight
}, draw = /* @__PURE__ */ __name(function(S, C, T, D) {
	let O = getConfig2(), k = O.timeline?.leftMargin ?? 50;
	log.debug("timeline", D.db);
	let j = O.securityLevel, M;
	j === "sandbox" && (M = select_default("#i" + C));
	let N = select_default(j === "sandbox" ? M.nodes()[0].contentDocument.body : "body").select("#" + C);
	N.append("g");
	let P = D.db.getTasks(), F = D.db.getCommonDb().getDiagramTitle();
	log.debug("task", P), svgDraw_default.initGraphics(N);
	let I = D.db.getSections();
	log.debug("sections", I);
	let L = 0, R = 0, z = 0, B = 0, V = 50 + k, H = 50;
	B = 50;
	let U = 0, W = !0;
	I.forEach(function(S) {
		let C = {
			number: U,
			descr: S,
			section: U,
			width: 150,
			padding: 20,
			maxHeight: L
		}, w = svgDraw_default.getVirtualNodeHeight(N, C, O);
		log.debug("sectionHeight before draw", w), L = Math.max(L, w + 20);
	});
	let G = 0, K = 0;
	log.debug("tasks.length", P.length);
	for (let [S, C] of P.entries()) {
		let w = {
			number: S,
			descr: C,
			section: C.section,
			width: 150,
			padding: 20,
			maxHeight: R
		}, T = svgDraw_default.getVirtualNodeHeight(N, w, O);
		log.debug("taskHeight before draw", T), R = Math.max(R, T + 20), G = Math.max(G, C.events.length);
		let E = 0;
		for (let e of C.events) {
			let S = {
				descr: e,
				section: C.section,
				number: C.section,
				width: 150,
				padding: 20,
				maxHeight: 50
			};
			E += svgDraw_default.getVirtualNodeHeight(N, S, O);
		}
		C.events.length > 0 && (E += (C.events.length - 1) * 10), K = Math.max(K, E);
	}
	log.debug("maxSectionHeight before draw", L), log.debug("maxTaskHeight before draw", R), I && I.length > 0 ? I.forEach((S) => {
		let C = P.filter((e) => e.section === S), w = {
			number: U,
			descr: S,
			section: U,
			width: 200 * Math.max(C.length, 1) - 50,
			padding: 20,
			maxHeight: L
		};
		log.debug("sectionNode", w);
		let T = N.append("g"), E = svgDraw_default.drawNode(T, w, U, O);
		log.debug("sectionNode output", E), T.attr("transform", `translate(${V}, ${B})`), H += L + 50, C.length > 0 && drawTasks(N, C, U, V, H, R, O, G, K, L, !1), V += 200 * Math.max(C.length, 1), H = B, U++;
	}) : (W = !1, drawTasks(N, P, U, V, H, R, O, G, K, L, !0));
	let q = N.node().getBBox();
	log.debug("bounds", q), F && N.append("text").text(F).attr("x", q.width / 2 - k).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), z = W ? L + R + 150 : R + 100, N.append("g").attr("class", "lineWrapper").append("line").attr("x1", k).attr("y1", z).attr("x2", q.width + 3 * k).attr("y2", z).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), setupGraphViewbox(void 0, N, O.timeline?.padding ?? 50, O.timeline?.useMaxWidth ?? !1);
}, "draw"), drawTasks = /* @__PURE__ */ __name(function(S, C, w, T, E, D, O, k, A, j, M) {
	for (let k of C) {
		let C = {
			descr: k.task,
			section: w,
			number: w,
			width: 150,
			padding: 20,
			maxHeight: D
		};
		log.debug("taskNode", C);
		let j = S.append("g").attr("class", "taskWrapper"), N = svgDraw_default.drawNode(j, C, w, O).height;
		if (log.debug("taskHeight after draw", N), j.attr("transform", `translate(${T}, ${E})`), D = Math.max(D, N), k.events) {
			let e = S.append("g").attr("class", "lineWrapper"), C = D;
			E += 100, C += drawEvents(S, k.events, w, T, E, O), E -= 100, e.append("line").attr("x1", T + 190 / 2).attr("y1", E + D).attr("x2", T + 190 / 2).attr("y2", E + D + 100 + A + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
		}
		T += 200, M && !O.timeline?.disableMulticolor && w++;
	}
	E -= 10;
}, "drawTasks"), drawEvents = /* @__PURE__ */ __name(function(S, C, w, T, E, D) {
	let O = 0, k = E;
	E += 100;
	for (let k of C) {
		let C = {
			descr: k,
			section: w,
			number: w,
			width: 150,
			padding: 20,
			maxHeight: 50
		};
		log.debug("eventNode", C);
		let A = S.append("g").attr("class", "eventWrapper"), j = svgDraw_default.drawNode(A, C, w, D).height;
		O += j, A.attr("transform", `translate(${T}, ${E})`), E = E + 10 + j;
	}
	return E = k, O;
}, "drawEvents"), timelineRenderer_default = {
	setConf: /* @__PURE__ */ __name(() => {}, "setConf"),
	draw
}, genSections = /* @__PURE__ */ __name((e) => {
	let S = "";
	for (let S = 0; S < e.THEME_COLOR_LIMIT; S++) e["lineColor" + S] = e["lineColor" + S] || e["cScaleInv" + S], is_dark_default(e["lineColor" + S]) ? e["lineColor" + S] = lighten_default(e["lineColor" + S], 20) : e["lineColor" + S] = darken_default(e["lineColor" + S], 20);
	for (let C = 0; C < e.THEME_COLOR_LIMIT; C++) {
		let w = "" + (17 - 3 * C);
		S += `
    .section-${C - 1} rect, .section-${C - 1} path, .section-${C - 1} circle, .section-${C - 1} path  {
      fill: ${e["cScale" + C]};
    }
    .section-${C - 1} text {
     fill: ${e["cScaleLabel" + C]};
    }
    .node-icon-${C - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + C]};
    }
    .section-edge-${C - 1}{
      stroke: ${e["cScale" + C]};
    }
    .edge-depth-${C - 1}{
      stroke-width: ${w};
    }
    .section-${C - 1} line {
      stroke: ${e["cScaleInv" + C]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${e["cScaleLabel" + C]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
	}
	return S;
}, "genSections"), diagram = {
	db: timelineDb_exports,
	renderer: timelineRenderer_default,
	parser: timeline_default,
	styles: /* @__PURE__ */ __name((e) => `
  .edge {
    stroke-width: 3;
  }
  ${genSections(e)}
  .section-root rect, .section-root path, .section-root circle  {
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`, "getStyles")
};
export { diagram };

//# sourceMappingURL=timeline-definition-IT6M3QCI-Dach8vBl.js.map