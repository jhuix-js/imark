import { r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, c as configureSvgSize, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import { t as arc_default } from "./arc-cZaP7Il9.js";
import "./dist-h00w3lrS.js";
import { t as getIconStyles } from "./chunk-FMBD7UC4-D5HULJBc.js";
import { a as drawText, i as drawRect, o as getNoteRect, t as drawBackgroundRect } from "./chunk-TZMSLE5B-BiNmt9Kz.js";
var parser = (function() {
	var S = /* @__PURE__ */ __name(function(e, S, C, w) {
		for (C ||= {}, w = e.length; w--; C[e[w]] = S);
		return C;
	}, "o"), C = [
		6,
		8,
		10,
		11,
		12,
		14,
		16,
		17,
		18
	], w = [1, 9], T = [1, 10], E = [1, 11], D = [1, 12], O = [1, 13], k = [1, 14], A = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			journey: 4,
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
			taskName: 18,
			taskData: 19,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "journey",
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
			18: "taskName",
			19: "taskData"
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
			[9, 2]
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
					w.setDiagramTitle(E[O].substr(6)), this.$ = E[O].substr(6);
					break;
				case 9:
					this.$ = E[O].trim(), w.setAccTitle(this.$);
					break;
				case 10:
				case 11:
					this.$ = E[O].trim(), w.setAccDescription(this.$);
					break;
				case 12:
					w.addSection(E[O].substr(8)), this.$ = E[O].substr(8);
					break;
				case 13:
					w.addTask(E[O - 1], E[O]), this.$ = "task";
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			S(C, [2, 2], { 5: 3 }),
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
				18: k
			},
			S(C, [2, 7], { 1: [2, 1] }),
			S(C, [2, 3]),
			{
				9: 15,
				11: w,
				12: T,
				14: E,
				16: D,
				17: O,
				18: k
			},
			S(C, [2, 5]),
			S(C, [2, 6]),
			S(C, [2, 8]),
			{ 13: [1, 16] },
			{ 15: [1, 17] },
			S(C, [2, 11]),
			S(C, [2, 12]),
			{ 19: [1, 18] },
			S(C, [2, 4]),
			S(C, [2, 9]),
			S(C, [2, 10]),
			S(C, [2, 13])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ __name(function(e, S) {
			if (S.recoverable) this.trace(e);
			else {
				var C = Error(e);
				throw C.hash = S, C;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(S) {
			var C = this, w = [0], T = [], E = [null], D = [], O = this.table, k = "", A = 0, j = 0, M = 0, N = 2, P = 1, F = D.slice.call(arguments, 1), I = Object.create(this.lexer), L = { yy: {} };
			for (var R in this.yy) Object.prototype.hasOwnProperty.call(this.yy, R) && (L.yy[R] = this.yy[R]);
			I.setInput(S, L.yy), L.yy.lexer = I, L.yy.parser = this, I.yylloc === void 0 && (I.yylloc = {});
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
				return typeof e != "number" && (e instanceof Array && (T = e, e = T.pop()), e = C.symbols_[e] || e), e;
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
	A.lexer = /* @__PURE__ */ (function() {
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
					case 15: return 18;
					case 16: return 19;
					case 17: return ":";
					case 18: return 6;
					case 19: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:journey\b)/i,
				/^(?:title\s[^#\n;]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:section\s[^#:\n;]+)/i,
				/^(?:[^#:\n;]+)/i,
				/^(?::[^#\n;]+)/i,
				/^(?::)/i,
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
						18,
						19
					],
					inclusive: !0
				}
			}
		};
	})();
	function j() {
		this.yy = {};
	}
	return __name(j, "Parser"), j.prototype = A, A.Parser = j, new j();
})();
parser.parser = parser;
var journey_default = parser, currentSection = "", sections = [], tasks = [], rawTasks = [], clear2 = /* @__PURE__ */ __name(function() {
	sections.length = 0, tasks.length = 0, currentSection = "", rawTasks.length = 0, clear();
}, "clear"), addSection = /* @__PURE__ */ __name(function(e) {
	currentSection = e, sections.push(e);
}, "addSection"), getSections = /* @__PURE__ */ __name(function() {
	return sections;
}, "getSections"), getTasks = /* @__PURE__ */ __name(function() {
	let e = compileTasks(), S = 0;
	for (; !e && S < 100;) e = compileTasks(), S++;
	return tasks.push(...rawTasks), tasks;
}, "getTasks"), updateActors = /* @__PURE__ */ __name(function() {
	let e = [];
	return tasks.forEach((S) => {
		S.people && e.push(...S.people);
	}), [...new Set(e)].sort();
}, "updateActors"), addTask = /* @__PURE__ */ __name(function(e, S) {
	let C = S.substr(1).split(":"), w = 0, T = [];
	C.length === 1 ? (w = Number(C[0]), T = []) : (w = Number(C[0]), T = C[1].split(","));
	let E = T.map((e) => e.trim()), D = {
		section: currentSection,
		type: currentSection,
		people: E,
		task: e,
		score: w
	};
	rawTasks.push(D);
}, "addTask"), addTaskOrg = /* @__PURE__ */ __name(function(e) {
	let S = {
		section: currentSection,
		type: currentSection,
		description: e,
		task: e,
		classes: []
	};
	tasks.push(S);
}, "addTaskOrg"), compileTasks = /* @__PURE__ */ __name(function() {
	let S = /* @__PURE__ */ __name(function(e) {
		return rawTasks[e].processed;
	}, "compileTask"), C = !0;
	for (let [e, w] of rawTasks.entries()) S(e), C &&= w.processed;
	return C;
}, "compileTasks"), journeyDb_default = {
	getConfig: /* @__PURE__ */ __name(() => getConfig2().journey, "getConfig"),
	clear: clear2,
	setDiagramTitle,
	getDiagramTitle,
	setAccTitle,
	getAccTitle,
	setAccDescription,
	getAccDescription,
	addSection,
	getSections,
	getTasks,
	addTask,
	addTaskOrg,
	getActors: /* @__PURE__ */ __name(function() {
		return updateActors();
	}, "getActors")
}, styles_default = /* @__PURE__ */ __name((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${e.textColor}
  }

  .legend {
    fill: ${e.textColor};
    font-family: ${e.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${e.textColor}
  }

  .face {
    ${e.faceColor ? `fill: ${e.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${e.fillType0 ? `fill: ${e.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${e.fillType0 ? `fill: ${e.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${e.fillType0 ? `fill: ${e.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${e.fillType0 ? `fill: ${e.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${e.fillType0 ? `fill: ${e.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${e.fillType0 ? `fill: ${e.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${e.fillType0 ? `fill: ${e.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${e.fillType0 ? `fill: ${e.fillType7}` : ""};
  }

  .actor-0 {
    ${e.actor0 ? `fill: ${e.actor0}` : ""};
  }
  .actor-1 {
    ${e.actor1 ? `fill: ${e.actor1}` : ""};
  }
  .actor-2 {
    ${e.actor2 ? `fill: ${e.actor2}` : ""};
  }
  .actor-3 {
    ${e.actor3 ? `fill: ${e.actor3}` : ""};
  }
  .actor-4 {
    ${e.actor4 ? `fill: ${e.actor4}` : ""};
  }
  .actor-5 {
    ${e.actor5 ? `fill: ${e.actor5}` : ""};
  }
  ${getIconStyles()}
`, "getStyles"), drawRect2 = /* @__PURE__ */ __name(function(e, S) {
	return drawRect(e, S);
}, "drawRect"), drawFace = /* @__PURE__ */ __name(function(S, C) {
	let w = S.append("circle").attr("cx", C.cx).attr("cy", C.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), T = S.append("g");
	T.append("circle").attr("cx", C.cx - 15 / 3).attr("cy", C.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), T.append("circle").attr("cx", C.cx + 15 / 3).attr("cy", C.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
	function E(e) {
		let S = arc_default().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
		e.append("path").attr("class", "mouth").attr("d", S).attr("transform", "translate(" + C.cx + "," + (C.cy + 2) + ")");
	}
	__name(E, "smile");
	function D(e) {
		let S = arc_default().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
		e.append("path").attr("class", "mouth").attr("d", S).attr("transform", "translate(" + C.cx + "," + (C.cy + 7) + ")");
	}
	__name(D, "sad");
	function O(e) {
		e.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", C.cx - 5).attr("y1", C.cy + 7).attr("x2", C.cx + 5).attr("y2", C.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return __name(O, "ambivalent"), C.score > 3 ? E(T) : C.score < 3 ? D(T) : O(T), w;
}, "drawFace"), drawCircle = /* @__PURE__ */ __name(function(e, S) {
	let C = e.append("circle");
	return C.attr("cx", S.cx), C.attr("cy", S.cy), C.attr("class", "actor-" + S.pos), C.attr("fill", S.fill), C.attr("stroke", S.stroke), C.attr("r", S.r), C.class !== void 0 && C.attr("class", C.class), S.title !== void 0 && C.append("title").text(S.title), C;
}, "drawCircle"), drawText2 = /* @__PURE__ */ __name(function(e, S) {
	return drawText(e, S);
}, "drawText"), drawLabel = /* @__PURE__ */ __name(function(S, C) {
	function w(e, S, C, w, T) {
		return e + "," + S + " " + (e + C) + "," + S + " " + (e + C) + "," + (S + w - T) + " " + (e + C - T * 1.2) + "," + (S + w) + " " + e + "," + (S + w);
	}
	__name(w, "genPoints");
	let T = S.append("polygon");
	T.attr("points", w(C.x, C.y, 50, 20, 7)), T.attr("class", "labelBox"), C.y += C.labelMargin, C.x += .5 * C.labelMargin, drawText2(S, C);
}, "drawLabel"), drawSection = /* @__PURE__ */ __name(function(e, S, C) {
	let w = e.append("g"), T = getNoteRect();
	T.x = S.x, T.y = S.y, T.fill = S.fill, T.width = C.width * S.taskCount + C.diagramMarginX * (S.taskCount - 1), T.height = C.height, T.class = "journey-section section-type-" + S.num, T.rx = 3, T.ry = 3, drawRect2(w, T), _drawTextCandidateFunc(C)(S.text, w, T.x, T.y, T.width, T.height, { class: "journey-section section-type-" + S.num }, C, S.colour);
}, "drawSection"), taskCount = -1, drawTask = /* @__PURE__ */ __name(function(e, S, C) {
	let w = S.x + C.width / 2, T = e.append("g");
	taskCount++, T.append("line").attr("id", "task" + taskCount).attr("x1", w).attr("y1", S.y).attr("x2", w).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), drawFace(T, {
		cx: w,
		cy: 300 + (5 - S.score) * 30,
		score: S.score
	});
	let E = getNoteRect();
	E.x = S.x, E.y = S.y, E.fill = S.fill, E.width = C.width, E.height = C.height, E.class = "task task-type-" + S.num, E.rx = 3, E.ry = 3, drawRect2(T, E);
	let D = S.x + 14;
	S.people.forEach((e) => {
		let C = S.actors[e].color;
		drawCircle(T, {
			cx: D,
			cy: S.y,
			r: 7,
			fill: C,
			stroke: "#000",
			title: e,
			pos: S.actors[e].position
		}), D += 10;
	}), _drawTextCandidateFunc(C)(S.task, T, E.x, E.y, E.width, E.height, { class: "task" }, C, S.colour);
}, "drawTask"), drawBackgroundRect2 = /* @__PURE__ */ __name(function(e, S) {
	drawBackgroundRect(e, S);
}, "drawBackgroundRect"), _drawTextCandidateFunc = /* @__PURE__ */ (function() {
	function S(e, S, C, w, E, D, O, k) {
		T(S.append("text").attr("x", C + E / 2).attr("y", w + D / 2 + 5).style("font-color", k).style("text-anchor", "middle").text(e), O);
	}
	__name(S, "byText");
	function C(e, S, C, w, E, D, O, k, A) {
		let { taskFontSize: j, taskFontFamily: M } = k, N = e.split(/<br\s*\/?>/gi);
		for (let e = 0; e < N.length; e++) {
			let k = e * j - j * (N.length - 1) / 2, P = S.append("text").attr("x", C + E / 2).attr("y", w).attr("fill", A).style("text-anchor", "middle").style("font-size", j).style("font-family", M);
			P.append("tspan").attr("x", C + E / 2).attr("dy", k).text(N[e]), P.attr("y", w + D / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), T(P, O);
		}
	}
	__name(C, "byTspan");
	function w(e, S, w, E, D, O, k, A) {
		let j = S.append("switch"), M = j.append("foreignObject").attr("x", w).attr("y", E).attr("width", D).attr("height", O).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		M.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(e), C(e, j, w, E, D, O, k, A), T(M, k);
	}
	__name(w, "byFo");
	function T(e, S) {
		for (let C in S) C in S && e.attr(C, S[C]);
	}
	return __name(T, "_setTextAttrs"), function(e) {
		return e.textPlacement === "fo" ? w : e.textPlacement === "old" ? S : C;
	};
})(), svgDraw_default = {
	drawRect: drawRect2,
	drawCircle,
	drawSection,
	drawText: drawText2,
	drawLabel,
	drawTask,
	drawBackgroundRect: drawBackgroundRect2,
	initGraphics: /* @__PURE__ */ __name(function(e) {
		e.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
	}, "initGraphics")
}, setConf = /* @__PURE__ */ __name(function(e) {
	Object.keys(e).forEach(function(S) {
		conf[S] = e[S];
	});
}, "setConf"), actors = {}, maxWidth = 0;
function drawActorLegend(e) {
	let S = getConfig2().journey, C = S.maxLabelWidth;
	maxWidth = 0;
	let w = 60;
	Object.keys(actors).forEach((T) => {
		let E = actors[T].color, D = {
			cx: 20,
			cy: w,
			r: 7,
			fill: E,
			stroke: "#000",
			pos: actors[T].position
		};
		svgDraw_default.drawCircle(e, D);
		let O = e.append("text").attr("visibility", "hidden").text(T), k = O.node().getBoundingClientRect().width;
		O.remove();
		let A = [];
		if (k <= C) A = [T];
		else {
			let S = T.split(" "), w = "";
			O = e.append("text").attr("visibility", "hidden"), S.forEach((e) => {
				let S = w ? `${w} ${e}` : e;
				if (O.text(S), O.node().getBoundingClientRect().width > C) {
					if (w && A.push(w), w = e, O.text(e), O.node().getBoundingClientRect().width > C) {
						let S = "";
						for (let w of e) S += w, O.text(S + "-"), O.node().getBoundingClientRect().width > C && (A.push(S.slice(0, -1) + "-"), S = w);
						w = S;
					}
				} else w = S;
			}), w && A.push(w), O.remove();
		}
		A.forEach((C, T) => {
			let E = {
				x: 40,
				y: w + 7 + T * 20,
				fill: "#666",
				text: C,
				textMargin: S.boxTextMargin ?? 5
			}, D = svgDraw_default.drawText(e, E).node().getBoundingClientRect().width;
			D > maxWidth && D > S.leftMargin - D && (maxWidth = D);
		}), w += Math.max(20, A.length * 20);
	});
}
__name(drawActorLegend, "drawActorLegend");
var conf = getConfig2().journey, leftMargin = 0, draw = /* @__PURE__ */ __name(function(e, C, w, T) {
	let E = getConfig2(), D = E.journey.titleColor, A = E.journey.titleFontSize, j = E.journey.titleFontFamily, M = E.securityLevel, N;
	M === "sandbox" && (N = select_default("#i" + C));
	let P = select_default(M === "sandbox" ? N.nodes()[0].contentDocument.body : "body");
	bounds.init();
	let F = P.select("#" + C);
	svgDraw_default.initGraphics(F);
	let I = T.db.getTasks(), L = T.db.getDiagramTitle(), R = T.db.getActors();
	for (let e in actors) delete actors[e];
	let z = 0;
	R.forEach((e) => {
		actors[e] = {
			color: conf.actorColours[z % conf.actorColours.length],
			position: z
		}, z++;
	}), drawActorLegend(F), leftMargin = conf.leftMargin + maxWidth, bounds.insert(0, 0, leftMargin, Object.keys(actors).length * 50), drawTasks(F, I, 0);
	let B = bounds.getBounds();
	L && F.append("text").text(L).attr("x", leftMargin).attr("font-size", A).attr("font-weight", "bold").attr("y", 25).attr("fill", D).attr("font-family", j);
	let V = B.stopy - B.starty + 2 * conf.diagramMarginY, H = leftMargin + B.stopx + 2 * conf.diagramMarginX;
	configureSvgSize(F, V, H, conf.useMaxWidth), F.append("line").attr("x1", leftMargin).attr("y1", conf.height * 4).attr("x2", H - leftMargin - 4).attr("y2", conf.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
	let U = L ? 70 : 0;
	F.attr("viewBox", `${B.startx} -25 ${H} ${V + U}`), F.attr("preserveAspectRatio", "xMinYMin meet"), F.attr("height", V + U + 25);
}, "draw"), bounds = {
	data: {
		startx: void 0,
		stopx: void 0,
		starty: void 0,
		stopy: void 0
	},
	verticalPos: 0,
	sequenceItems: [],
	init: /* @__PURE__ */ __name(function() {
		this.sequenceItems = [], this.data = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0
		}, this.verticalPos = 0;
	}, "init"),
	updateVal: /* @__PURE__ */ __name(function(e, S, C, w) {
		e[S] === void 0 ? e[S] = C : e[S] = w(C, e[S]);
	}, "updateVal"),
	updateBounds: /* @__PURE__ */ __name(function(S, C, w, T) {
		let E = getConfig2().journey, D = this, k = 0;
		function A(O) {
			return /* @__PURE__ */ __name(function(e) {
				k++;
				let A = D.sequenceItems.length - k + 1;
				D.updateVal(e, "starty", C - A * E.boxMargin, Math.min), D.updateVal(e, "stopy", T + A * E.boxMargin, Math.max), D.updateVal(bounds.data, "startx", S - A * E.boxMargin, Math.min), D.updateVal(bounds.data, "stopx", w + A * E.boxMargin, Math.max), O !== "activation" && (D.updateVal(e, "startx", S - A * E.boxMargin, Math.min), D.updateVal(e, "stopx", w + A * E.boxMargin, Math.max), D.updateVal(bounds.data, "starty", C - A * E.boxMargin, Math.min), D.updateVal(bounds.data, "stopy", T + A * E.boxMargin, Math.max));
			}, "updateItemBounds");
		}
		__name(A, "updateFn"), this.sequenceItems.forEach(A());
	}, "updateBounds"),
	insert: /* @__PURE__ */ __name(function(e, S, C, w) {
		let T = Math.min(e, C), E = Math.max(e, C), D = Math.min(S, w), O = Math.max(S, w);
		this.updateVal(bounds.data, "startx", T, Math.min), this.updateVal(bounds.data, "starty", D, Math.min), this.updateVal(bounds.data, "stopx", E, Math.max), this.updateVal(bounds.data, "stopy", O, Math.max), this.updateBounds(T, D, E, O);
	}, "insert"),
	bumpVerticalPos: /* @__PURE__ */ __name(function(e) {
		this.verticalPos += e, this.data.stopy = this.verticalPos;
	}, "bumpVerticalPos"),
	getVerticalPos: /* @__PURE__ */ __name(function() {
		return this.verticalPos;
	}, "getVerticalPos"),
	getBounds: /* @__PURE__ */ __name(function() {
		return this.data;
	}, "getBounds")
}, fills = conf.sectionFills, textColours = conf.sectionColours, drawTasks = /* @__PURE__ */ __name(function(e, S, C) {
	let w = getConfig2().journey, T = "", E = C + (w.height * 2 + w.diagramMarginY), D = 0, k = "#CCC", A = "black", j = 0;
	for (let [C, O] of S.entries()) {
		if (T !== O.section) {
			k = fills[D % fills.length], j = D % fills.length, A = textColours[D % textColours.length];
			let E = 0, M = O.section;
			for (let e = C; e < S.length && S[e].section == M; e++) E += 1;
			let N = {
				x: C * w.taskMargin + C * w.width + leftMargin,
				y: 50,
				text: O.section,
				fill: k,
				num: j,
				colour: A,
				taskCount: E
			};
			svgDraw_default.drawSection(e, N, w), T = O.section, D++;
		}
		let M = O.people.reduce((e, S) => (actors[S] && (e[S] = actors[S]), e), {});
		O.x = C * w.taskMargin + C * w.width + leftMargin, O.y = E, O.width = w.diagramMarginX, O.height = w.diagramMarginY, O.colour = A, O.fill = k, O.num = j, O.actors = M, svgDraw_default.drawTask(e, O, w), bounds.insert(O.x, O.y, O.x + O.width + w.taskMargin, 450);
	}
}, "drawTasks"), journeyRenderer_default = {
	setConf,
	draw
}, diagram = {
	parser: journey_default,
	db: journeyDb_default,
	renderer: journeyRenderer_default,
	styles: styles_default,
	init: /* @__PURE__ */ __name((e) => {
		journeyRenderer_default.setConf(e.journey), journeyDb_default.clear();
	}, "init")
};
export { diagram };
