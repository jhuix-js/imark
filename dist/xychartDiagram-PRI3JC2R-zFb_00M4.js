import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { i as cleanAndMerge } from "./chunk-S3R3BYOJ-CMSxLKou.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, I as sanitizeText, T as getThemeVariables3, U as setDiagramTitle, _ as getAccDescription, a as clear, c as configureSvgSize, d as defaultConfig_default, v as getAccTitle, y as getConfig, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as linear } from "./linear-Csp1_tTx.js";
import { n as ordinal } from "./ordinal-CN4lqhtQ.js";
import { t as range } from "./range-Dqg-lOu1.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./defaultLocale-BBsRvltv.js";
import { n as initRange } from "./init-ULMCeUqd.js";
import "./math-BN2TBOwX.js";
import "./array-BlABR2MP.js";
import "./step-DmjVsfVE.js";
import { t as line_default } from "./line-Cl_B2mnJ.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-h00w3lrS.js";
import { t as computeDimensionOfText } from "./chunk-JA3XYJ7Z-CCL57Eo5.js";
function band() {
	var e = ordinal().unknown(void 0), S = e.domain, C = e.range, w = 0, T = 1, E, D, O = !1, k = 0, A = 0, j = .5;
	delete e.unknown;
	function M() {
		var e = S().length, M = T < w, N = M ? T : w, P = M ? w : T;
		E = (P - N) / Math.max(1, e - k + A * 2), O && (E = Math.floor(E)), N += (P - N - E * (e - k)) * j, D = E * (1 - k), O && (N = Math.round(N), D = Math.round(D));
		var F = range(e).map(function(e) {
			return N + E * e;
		});
		return C(M ? F.reverse() : F);
	}
	return e.domain = function(e) {
		return arguments.length ? (S(e), M()) : S();
	}, e.range = function(e) {
		return arguments.length ? ([w, T] = e, w = +w, T = +T, M()) : [w, T];
	}, e.rangeRound = function(e) {
		return [w, T] = e, w = +w, T = +T, O = !0, M();
	}, e.bandwidth = function() {
		return D;
	}, e.step = function() {
		return E;
	}, e.round = function(e) {
		return arguments.length ? (O = !!e, M()) : O;
	}, e.padding = function(e) {
		return arguments.length ? (k = Math.min(1, A = +e), M()) : k;
	}, e.paddingInner = function(e) {
		return arguments.length ? (k = Math.min(1, e), M()) : k;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (A = +e, M()) : A;
	}, e.align = function(e) {
		return arguments.length ? (j = Math.max(0, Math.min(1, e)), M()) : j;
	}, e.copy = function() {
		return band(S(), [w, T]).round(O).paddingInner(k).paddingOuter(A).align(j);
	}, initRange.apply(M(), arguments);
}
var parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, S, C, w) {
		for (C ||= {}, w = e.length; w--; C[e[w]] = S);
		return C;
	}, "o"), S = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23
	], w = [2, 6], T = [1, 3], E = [1, 5], D = [1, 6], O = [1, 7], k = [
		1,
		5,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		34,
		35,
		36
	], A = [1, 25], j = [1, 26], M = [1, 28], N = [1, 29], P = [1, 30], F = [1, 31], I = [1, 32], L = [1, 33], R = [1, 34], z = [1, 35], B = [1, 36], V = [1, 37], H = [1, 43], U = [1, 42], W = [1, 47], G = [1, 50], K = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		34,
		35,
		36
	], q = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		24,
		26,
		27,
		28,
		34,
		35,
		36
	], J = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		24,
		26,
		27,
		28,
		34,
		35,
		36,
		41,
		42,
		43,
		44,
		45,
		46,
		47,
		48,
		49,
		50
	], Y = [1, 64], X = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			eol: 4,
			XYCHART: 5,
			chartConfig: 6,
			document: 7,
			CHART_ORIENTATION: 8,
			statement: 9,
			title: 10,
			text: 11,
			X_AXIS: 12,
			parseXAxis: 13,
			Y_AXIS: 14,
			parseYAxis: 15,
			LINE: 16,
			plotData: 17,
			BAR: 18,
			acc_title: 19,
			acc_title_value: 20,
			acc_descr: 21,
			acc_descr_value: 22,
			acc_descr_multiline_value: 23,
			SQUARE_BRACES_START: 24,
			commaSeparatedNumbers: 25,
			SQUARE_BRACES_END: 26,
			NUMBER_WITH_DECIMAL: 27,
			COMMA: 28,
			xAxisData: 29,
			bandData: 30,
			ARROW_DELIMITER: 31,
			commaSeparatedTexts: 32,
			yAxisData: 33,
			NEWLINE: 34,
			SEMI: 35,
			EOF: 36,
			alphaNum: 37,
			STR: 38,
			MD_STR: 39,
			alphaNumToken: 40,
			AMP: 41,
			NUM: 42,
			ALPHA: 43,
			PLUS: 44,
			EQUALS: 45,
			MULT: 46,
			DOT: 47,
			BRKT: 48,
			MINUS: 49,
			UNDERSCORE: 50,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			5: "XYCHART",
			8: "CHART_ORIENTATION",
			10: "title",
			12: "X_AXIS",
			14: "Y_AXIS",
			16: "LINE",
			18: "BAR",
			19: "acc_title",
			20: "acc_title_value",
			21: "acc_descr",
			22: "acc_descr_value",
			23: "acc_descr_multiline_value",
			24: "SQUARE_BRACES_START",
			26: "SQUARE_BRACES_END",
			27: "NUMBER_WITH_DECIMAL",
			28: "COMMA",
			31: "ARROW_DELIMITER",
			34: "NEWLINE",
			35: "SEMI",
			36: "EOF",
			38: "STR",
			39: "MD_STR",
			41: "AMP",
			42: "NUM",
			43: "ALPHA",
			44: "PLUS",
			45: "EQUALS",
			46: "MULT",
			47: "DOT",
			48: "BRKT",
			49: "MINUS",
			50: "UNDERSCORE"
		},
		productions_: [
			0,
			[3, 2],
			[3, 3],
			[3, 2],
			[3, 1],
			[6, 1],
			[7, 0],
			[7, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 3],
			[9, 2],
			[9, 3],
			[9, 2],
			[9, 2],
			[9, 1],
			[17, 3],
			[25, 3],
			[25, 1],
			[13, 1],
			[13, 2],
			[13, 1],
			[29, 1],
			[29, 3],
			[30, 3],
			[32, 3],
			[32, 1],
			[15, 1],
			[15, 2],
			[15, 1],
			[33, 3],
			[4, 1],
			[4, 1],
			[4, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[37, 1],
			[37, 2],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, S, C, w, T, E, D) {
			var O = E.length - 1;
			switch (T) {
				case 5:
					w.setOrientation(E[O]);
					break;
				case 9:
					w.setDiagramTitle(E[O].text.trim());
					break;
				case 12:
					w.setLineData({
						text: "",
						type: "text"
					}, E[O]);
					break;
				case 13:
					w.setLineData(E[O - 1], E[O]);
					break;
				case 14:
					w.setBarData({
						text: "",
						type: "text"
					}, E[O]);
					break;
				case 15:
					w.setBarData(E[O - 1], E[O]);
					break;
				case 16:
					this.$ = E[O].trim(), w.setAccTitle(this.$);
					break;
				case 17:
				case 18:
					this.$ = E[O].trim(), w.setAccDescription(this.$);
					break;
				case 19:
					this.$ = E[O - 1];
					break;
				case 20:
					this.$ = [Number(E[O - 2]), ...E[O]];
					break;
				case 21:
					this.$ = [Number(E[O])];
					break;
				case 22:
					w.setXAxisTitle(E[O]);
					break;
				case 23:
					w.setXAxisTitle(E[O - 1]);
					break;
				case 24:
					w.setXAxisTitle({
						type: "text",
						text: ""
					});
					break;
				case 25:
					w.setXAxisBand(E[O]);
					break;
				case 26:
					w.setXAxisRangeData(Number(E[O - 2]), Number(E[O]));
					break;
				case 27:
					this.$ = E[O - 1];
					break;
				case 28:
					this.$ = [E[O - 2], ...E[O]];
					break;
				case 29:
					this.$ = [E[O]];
					break;
				case 30:
					w.setYAxisTitle(E[O]);
					break;
				case 31:
					w.setYAxisTitle(E[O - 1]);
					break;
				case 32:
					w.setYAxisTitle({
						type: "text",
						text: ""
					});
					break;
				case 33:
					w.setYAxisRangeData(Number(E[O - 2]), Number(E[O]));
					break;
				case 37:
					this.$ = {
						text: E[O],
						type: "text"
					};
					break;
				case 38:
					this.$ = {
						text: E[O],
						type: "text"
					};
					break;
				case 39:
					this.$ = {
						text: E[O],
						type: "markdown"
					};
					break;
				case 40:
					this.$ = E[O];
					break;
				case 41:
					this.$ = E[O - 1] + "" + E[O];
					break;
			}
		}, "anonymous"),
		table: [
			e(S, w, {
				3: 1,
				4: 2,
				7: 4,
				5: T,
				34: E,
				35: D,
				36: O
			}),
			{ 1: [3] },
			e(S, w, {
				4: 2,
				7: 4,
				3: 8,
				5: T,
				34: E,
				35: D,
				36: O
			}),
			e(S, w, {
				4: 2,
				7: 4,
				6: 9,
				3: 10,
				5: T,
				8: [1, 11],
				34: E,
				35: D,
				36: O
			}),
			{
				1: [2, 4],
				9: 12,
				10: [1, 13],
				12: [1, 14],
				14: [1, 15],
				16: [1, 16],
				18: [1, 17],
				19: [1, 18],
				21: [1, 19],
				23: [1, 20]
			},
			e(k, [2, 34]),
			e(k, [2, 35]),
			e(k, [2, 36]),
			{ 1: [2, 1] },
			e(S, w, {
				4: 2,
				7: 4,
				3: 21,
				5: T,
				34: E,
				35: D,
				36: O
			}),
			{ 1: [2, 3] },
			e(k, [2, 5]),
			e(S, [2, 7], {
				4: 22,
				34: E,
				35: D,
				36: O
			}),
			{
				11: 23,
				37: 24,
				38: A,
				39: j,
				40: 27,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			},
			{
				11: 39,
				13: 38,
				24: H,
				27: U,
				29: 40,
				30: 41,
				37: 24,
				38: A,
				39: j,
				40: 27,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			},
			{
				11: 45,
				15: 44,
				27: W,
				33: 46,
				37: 24,
				38: A,
				39: j,
				40: 27,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			},
			{
				11: 49,
				17: 48,
				24: G,
				37: 24,
				38: A,
				39: j,
				40: 27,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			},
			{
				11: 52,
				17: 51,
				24: G,
				37: 24,
				38: A,
				39: j,
				40: 27,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			},
			{ 20: [1, 53] },
			{ 22: [1, 54] },
			e(K, [2, 18]),
			{ 1: [2, 2] },
			e(K, [2, 8]),
			e(K, [2, 9]),
			e(q, [2, 37], {
				40: 55,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			}),
			e(q, [2, 38]),
			e(q, [2, 39]),
			e(J, [2, 40]),
			e(J, [2, 42]),
			e(J, [2, 43]),
			e(J, [2, 44]),
			e(J, [2, 45]),
			e(J, [2, 46]),
			e(J, [2, 47]),
			e(J, [2, 48]),
			e(J, [2, 49]),
			e(J, [2, 50]),
			e(J, [2, 51]),
			e(K, [2, 10]),
			e(K, [2, 22], {
				30: 41,
				29: 56,
				24: H,
				27: U
			}),
			e(K, [2, 24]),
			e(K, [2, 25]),
			{ 31: [1, 57] },
			{
				11: 59,
				32: 58,
				37: 24,
				38: A,
				39: j,
				40: 27,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			},
			e(K, [2, 11]),
			e(K, [2, 30], {
				33: 60,
				27: W
			}),
			e(K, [2, 32]),
			{ 31: [1, 61] },
			e(K, [2, 12]),
			{
				17: 62,
				24: G
			},
			{
				25: 63,
				27: Y
			},
			e(K, [2, 14]),
			{
				17: 65,
				24: G
			},
			e(K, [2, 16]),
			e(K, [2, 17]),
			e(J, [2, 41]),
			e(K, [2, 23]),
			{ 27: [1, 66] },
			{ 26: [1, 67] },
			{
				26: [2, 29],
				28: [1, 68]
			},
			e(K, [2, 31]),
			{ 27: [1, 69] },
			e(K, [2, 13]),
			{ 26: [1, 70] },
			{
				26: [2, 21],
				28: [1, 71]
			},
			e(K, [2, 15]),
			e(K, [2, 26]),
			e(K, [2, 27]),
			{
				11: 59,
				32: 72,
				37: 24,
				38: A,
				39: j,
				40: 27,
				41: M,
				42: N,
				43: P,
				44: F,
				45: I,
				46: L,
				47: R,
				48: z,
				49: B,
				50: V
			},
			e(K, [2, 33]),
			e(K, [2, 19]),
			{
				25: 73,
				27: Y
			},
			{ 26: [2, 28] },
			{ 26: [2, 20] }
		],
		defaultActions: {
			8: [2, 1],
			10: [2, 3],
			21: [2, 2],
			72: [2, 28],
			73: [2, 20]
		},
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
	X.lexer = /* @__PURE__ */ (function() {
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
					case 2: return this.popState(), 34;
					case 3: return this.popState(), 34;
					case 4: return 34;
					case 5: break;
					case 6: return 10;
					case 7: return this.pushState("acc_title"), 19;
					case 8: return this.popState(), "acc_title_value";
					case 9: return this.pushState("acc_descr"), 21;
					case 10: return this.popState(), "acc_descr_value";
					case 11:
						this.pushState("acc_descr_multiline");
						break;
					case 12:
						this.popState();
						break;
					case 13: return "acc_descr_multiline_value";
					case 14: return 5;
					case 15: return 5;
					case 16: return 8;
					case 17: return this.pushState("axis_data"), "X_AXIS";
					case 18: return this.pushState("axis_data"), "Y_AXIS";
					case 19: return this.pushState("axis_band_data"), 24;
					case 20: return 31;
					case 21: return this.pushState("data"), 16;
					case 22: return this.pushState("data"), 18;
					case 23: return this.pushState("data_inner"), 24;
					case 24: return 27;
					case 25: return this.popState(), 26;
					case 26:
						this.popState();
						break;
					case 27:
						this.pushState("string");
						break;
					case 28:
						this.popState();
						break;
					case 29: return "STR";
					case 30: return 24;
					case 31: return 26;
					case 32: return 43;
					case 33: return "COLON";
					case 34: return 44;
					case 35: return 28;
					case 36: return 45;
					case 37: return 46;
					case 38: return 48;
					case 39: return 50;
					case 40: return 47;
					case 41: return 41;
					case 42: return 49;
					case 43: return 42;
					case 44: break;
					case 45: return 35;
					case 46: return 36;
				}
			}, "anonymous"),
			rules: [
				/^(?:%%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:(\r?\n))/i,
				/^(?:(\r?\n))/i,
				/^(?:[\n\r]+)/i,
				/^(?:%%[^\n]*)/i,
				/^(?:title\b)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:\{)/i,
				/^(?:[^\}]*)/i,
				/^(?:xychart-beta\b)/i,
				/^(?:xychart\b)/i,
				/^(?:(?:vertical|horizontal))/i,
				/^(?:x-axis\b)/i,
				/^(?:y-axis\b)/i,
				/^(?:\[)/i,
				/^(?:-->)/i,
				/^(?:line\b)/i,
				/^(?:bar\b)/i,
				/^(?:\[)/i,
				/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,
				/^(?:\])/i,
				/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,
				/^(?:["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:\[)/i,
				/^(?:\])/i,
				/^(?:[A-Za-z]+)/i,
				/^(?::)/i,
				/^(?:\+)/i,
				/^(?:,)/i,
				/^(?:=)/i,
				/^(?:\*)/i,
				/^(?:#)/i,
				/^(?:[\_])/i,
				/^(?:\.)/i,
				/^(?:&)/i,
				/^(?:-)/i,
				/^(?:[0-9]+)/i,
				/^(?:\s+)/i,
				/^(?:;)/i,
				/^(?:$)/i
			],
			conditions: {
				data_inner: {
					rules: [
						0,
						1,
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
						21,
						22,
						24,
						25,
						26,
						27,
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
						46
					],
					inclusive: !0
				},
				data: {
					rules: [
						0,
						1,
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
						21,
						22,
						23,
						26,
						27,
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
						46
					],
					inclusive: !0
				},
				axis_band_data: {
					rules: [
						0,
						1,
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
						21,
						22,
						25,
						26,
						27,
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
						46
					],
					inclusive: !0
				},
				axis_data: {
					rules: [
						0,
						1,
						2,
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
						19,
						20,
						21,
						22,
						24,
						26,
						27,
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
						46
					],
					inclusive: !0
				},
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
				title: {
					rules: [],
					inclusive: !1
				},
				md_string: {
					rules: [],
					inclusive: !1
				},
				string: {
					rules: [28, 29],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
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
						21,
						22,
						26,
						27,
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
						46
					],
					inclusive: !0
				}
			}
		};
	})();
	function Z() {
		this.yy = {};
	}
	return __name(Z, "Parser"), Z.prototype = X, X.Parser = Z, new Z();
})();
parser.parser = parser;
var xychart_default = parser;
function isBarPlot(e) {
	return e.type === "bar";
}
__name(isBarPlot, "isBarPlot");
function isBandAxisData(e) {
	return e.type === "band";
}
__name(isBandAxisData, "isBandAxisData");
function isLinearAxisData(e) {
	return e.type === "linear";
}
__name(isLinearAxisData, "isLinearAxisData");
var TextDimensionCalculatorWithFont = class {
	constructor(e) {
		this.parentGroup = e;
	}
	static #e = __name(this, "TextDimensionCalculatorWithFont");
	getMaxDimension(e, S) {
		if (!this.parentGroup) return {
			width: e.reduce((e, S) => Math.max(S.length, e), 0) * S,
			height: S
		};
		let C = {
			width: 0,
			height: 0
		}, w = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", S);
		for (let T of e) {
			let e = computeDimensionOfText(w, 1, T), E = e ? e.width : T.length * S, D = e ? e.height : S;
			C.width = Math.max(C.width, E), C.height = Math.max(C.height, D);
		}
		return w.remove(), C;
	}
}, BAR_WIDTH_TO_TICK_WIDTH_RATIO = .7, MAX_OUTER_PADDING_PERCENT_FOR_WRT_LABEL = .2, BaseAxis = class {
	constructor(e, S, C, w) {
		this.axisConfig = e, this.title = S, this.textDimensionCalculator = C, this.axisThemeConfig = w, this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, this.axisPosition = "left", this.showTitle = !1, this.showLabel = !1, this.showTick = !1, this.showAxisLine = !1, this.outerPadding = 0, this.titleTextHeight = 0, this.labelTextHeight = 0, this.range = [0, 10], this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, this.axisPosition = "left";
	}
	static #e = __name(this, "BaseAxis");
	setRange(e) {
		this.range = e, this.axisPosition === "left" || this.axisPosition === "right" ? this.boundingRect.height = e[1] - e[0] : this.boundingRect.width = e[1] - e[0], this.recalculateScale();
	}
	getRange() {
		return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
	}
	setAxisPosition(e) {
		this.axisPosition = e, this.setRange(this.range);
	}
	getTickDistance() {
		let e = this.getRange();
		return Math.abs(e[0] - e[1]) / this.getTickValues().length;
	}
	getAxisOuterPadding() {
		return this.outerPadding;
	}
	getLabelDimension() {
		return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map((e) => e.toString()), this.axisConfig.labelFontSize);
	}
	recalculateOuterPaddingToDrawBar() {
		BAR_WIDTH_TO_TICK_WIDTH_RATIO * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(BAR_WIDTH_TO_TICK_WIDTH_RATIO * this.getTickDistance() / 2)), this.recalculateScale();
	}
	calculateSpaceIfDrawnHorizontally(e) {
		let S = e.height;
		if (this.axisConfig.showAxisLine && S > this.axisConfig.axisLineWidth && (S -= this.axisConfig.axisLineWidth, this.showAxisLine = !0), this.axisConfig.showLabel) {
			let C = this.getLabelDimension(), w = MAX_OUTER_PADDING_PERCENT_FOR_WRT_LABEL * e.width;
			this.outerPadding = Math.min(C.width / 2, w);
			let T = C.height + this.axisConfig.labelPadding * 2;
			this.labelTextHeight = C.height, T <= S && (S -= T, this.showLabel = !0);
		}
		if (this.axisConfig.showTick && S >= this.axisConfig.tickLength && (this.showTick = !0, S -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
			let e = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize), C = e.height + this.axisConfig.titlePadding * 2;
			this.titleTextHeight = e.height, C <= S && (S -= C, this.showTitle = !0);
		}
		this.boundingRect.width = e.width, this.boundingRect.height = e.height - S;
	}
	calculateSpaceIfDrawnVertical(e) {
		let S = e.width;
		if (this.axisConfig.showAxisLine && S > this.axisConfig.axisLineWidth && (S -= this.axisConfig.axisLineWidth, this.showAxisLine = !0), this.axisConfig.showLabel) {
			let C = this.getLabelDimension(), w = MAX_OUTER_PADDING_PERCENT_FOR_WRT_LABEL * e.height;
			this.outerPadding = Math.min(C.height / 2, w);
			let T = C.width + this.axisConfig.labelPadding * 2;
			T <= S && (S -= T, this.showLabel = !0);
		}
		if (this.axisConfig.showTick && S >= this.axisConfig.tickLength && (this.showTick = !0, S -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
			let e = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize), C = e.height + this.axisConfig.titlePadding * 2;
			this.titleTextHeight = e.height, C <= S && (S -= C, this.showTitle = !0);
		}
		this.boundingRect.width = e.width - S, this.boundingRect.height = e.height;
	}
	calculateSpace(e) {
		return this.axisPosition === "left" || this.axisPosition === "right" ? this.calculateSpaceIfDrawnVertical(e) : this.calculateSpaceIfDrawnHorizontally(e), this.recalculateScale(), {
			width: this.boundingRect.width,
			height: this.boundingRect.height
		};
	}
	setBoundingBoxXY(e) {
		this.boundingRect.x = e.x, this.boundingRect.y = e.y;
	}
	getDrawableElementsForLeftAxis() {
		let e = [];
		if (this.showAxisLine) {
			let S = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
			e.push({
				type: "path",
				groupTexts: ["left-axis", "axisl-line"],
				data: [{
					path: `M ${S},${this.boundingRect.y} L ${S},${this.boundingRect.y + this.boundingRect.height} `,
					strokeFill: this.axisThemeConfig.axisLineColor,
					strokeWidth: this.axisConfig.axisLineWidth
				}]
			});
		}
		if (this.showLabel && e.push({
			type: "text",
			groupTexts: ["left-axis", "label"],
			data: this.getTickValues().map((e) => ({
				text: e.toString(),
				x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
				y: this.getScaleValue(e),
				fill: this.axisThemeConfig.labelColor,
				fontSize: this.axisConfig.labelFontSize,
				rotation: 0,
				verticalPos: "middle",
				horizontalPos: "right"
			}))
		}), this.showTick) {
			let S = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
			e.push({
				type: "path",
				groupTexts: ["left-axis", "ticks"],
				data: this.getTickValues().map((e) => ({
					path: `M ${S},${this.getScaleValue(e)} L ${S - this.axisConfig.tickLength},${this.getScaleValue(e)}`,
					strokeFill: this.axisThemeConfig.tickColor,
					strokeWidth: this.axisConfig.tickWidth
				}))
			});
		}
		return this.showTitle && e.push({
			type: "text",
			groupTexts: ["left-axis", "title"],
			data: [{
				text: this.title,
				x: this.boundingRect.x + this.axisConfig.titlePadding,
				y: this.boundingRect.y + this.boundingRect.height / 2,
				fill: this.axisThemeConfig.titleColor,
				fontSize: this.axisConfig.titleFontSize,
				rotation: 270,
				verticalPos: "top",
				horizontalPos: "center"
			}]
		}), e;
	}
	getDrawableElementsForBottomAxis() {
		let e = [];
		if (this.showAxisLine) {
			let S = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
			e.push({
				type: "path",
				groupTexts: ["bottom-axis", "axis-line"],
				data: [{
					path: `M ${this.boundingRect.x},${S} L ${this.boundingRect.x + this.boundingRect.width},${S}`,
					strokeFill: this.axisThemeConfig.axisLineColor,
					strokeWidth: this.axisConfig.axisLineWidth
				}]
			});
		}
		if (this.showLabel && e.push({
			type: "text",
			groupTexts: ["bottom-axis", "label"],
			data: this.getTickValues().map((e) => ({
				text: e.toString(),
				x: this.getScaleValue(e),
				y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
				fill: this.axisThemeConfig.labelColor,
				fontSize: this.axisConfig.labelFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}))
		}), this.showTick) {
			let S = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
			e.push({
				type: "path",
				groupTexts: ["bottom-axis", "ticks"],
				data: this.getTickValues().map((e) => ({
					path: `M ${this.getScaleValue(e)},${S} L ${this.getScaleValue(e)},${S + this.axisConfig.tickLength}`,
					strokeFill: this.axisThemeConfig.tickColor,
					strokeWidth: this.axisConfig.tickWidth
				}))
			});
		}
		return this.showTitle && e.push({
			type: "text",
			groupTexts: ["bottom-axis", "title"],
			data: [{
				text: this.title,
				x: this.range[0] + (this.range[1] - this.range[0]) / 2,
				y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
				fill: this.axisThemeConfig.titleColor,
				fontSize: this.axisConfig.titleFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}]
		}), e;
	}
	getDrawableElementsForTopAxis() {
		let e = [];
		if (this.showAxisLine) {
			let S = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
			e.push({
				type: "path",
				groupTexts: ["top-axis", "axis-line"],
				data: [{
					path: `M ${this.boundingRect.x},${S} L ${this.boundingRect.x + this.boundingRect.width},${S}`,
					strokeFill: this.axisThemeConfig.axisLineColor,
					strokeWidth: this.axisConfig.axisLineWidth
				}]
			});
		}
		if (this.showLabel && e.push({
			type: "text",
			groupTexts: ["top-axis", "label"],
			data: this.getTickValues().map((e) => ({
				text: e.toString(),
				x: this.getScaleValue(e),
				y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
				fill: this.axisThemeConfig.labelColor,
				fontSize: this.axisConfig.labelFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}))
		}), this.showTick) {
			let S = this.boundingRect.y;
			e.push({
				type: "path",
				groupTexts: ["top-axis", "ticks"],
				data: this.getTickValues().map((e) => ({
					path: `M ${this.getScaleValue(e)},${S + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(e)},${S + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
					strokeFill: this.axisThemeConfig.tickColor,
					strokeWidth: this.axisConfig.tickWidth
				}))
			});
		}
		return this.showTitle && e.push({
			type: "text",
			groupTexts: ["top-axis", "title"],
			data: [{
				text: this.title,
				x: this.boundingRect.x + this.boundingRect.width / 2,
				y: this.boundingRect.y + this.axisConfig.titlePadding,
				fill: this.axisThemeConfig.titleColor,
				fontSize: this.axisConfig.titleFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}]
		}), e;
	}
	getDrawableElements() {
		if (this.axisPosition === "left") return this.getDrawableElementsForLeftAxis();
		if (this.axisPosition === "right") throw Error("Drawing of right axis is not implemented");
		return this.axisPosition === "bottom" ? this.getDrawableElementsForBottomAxis() : this.axisPosition === "top" ? this.getDrawableElementsForTopAxis() : [];
	}
}, BandAxis = class extends BaseAxis {
	static #e = __name(this, "BandAxis");
	constructor(e, S, C, w, T) {
		super(e, w, T, S), this.categories = C, this.scale = band().domain(this.categories).range(this.getRange());
	}
	setRange(e) {
		super.setRange(e);
	}
	recalculateScale() {
		this.scale = band().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5), log.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
	}
	getTickValues() {
		return this.categories;
	}
	getScaleValue(e) {
		return this.scale(e) ?? this.getRange()[0];
	}
}, LinearAxis = class extends BaseAxis {
	static #e = __name(this, "LinearAxis");
	constructor(e, S, C, w, T) {
		super(e, w, T, S), this.domain = C, this.scale = linear().domain(this.domain).range(this.getRange());
	}
	getTickValues() {
		return this.scale.ticks();
	}
	recalculateScale() {
		let e = [...this.domain];
		this.axisPosition === "left" && e.reverse(), this.scale = linear().domain(e).range(this.getRange());
	}
	getScaleValue(e) {
		return this.scale(e);
	}
};
function getAxis(e, S, C, w) {
	let T = new TextDimensionCalculatorWithFont(w);
	return isBandAxisData(e) ? new BandAxis(S, C, e.categories, e.title, T) : new LinearAxis(S, C, [e.min, e.max], e.title, T);
}
__name(getAxis, "getAxis");
var ChartTitle = class {
	constructor(e, S, C, w) {
		this.textDimensionCalculator = e, this.chartConfig = S, this.chartData = C, this.chartThemeConfig = w, this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, this.showChartTitle = !1;
	}
	static #e = __name(this, "ChartTitle");
	setBoundingBoxXY(e) {
		this.boundingRect.x = e.x, this.boundingRect.y = e.y;
	}
	calculateSpace(e) {
		let S = this.textDimensionCalculator.getMaxDimension([this.chartData.title], this.chartConfig.titleFontSize), C = Math.max(S.width, e.width), w = S.height + 2 * this.chartConfig.titlePadding;
		return S.width <= C && S.height <= w && this.chartConfig.showTitle && this.chartData.title && (this.boundingRect.width = C, this.boundingRect.height = w, this.showChartTitle = !0), {
			width: this.boundingRect.width,
			height: this.boundingRect.height
		};
	}
	getDrawableElements() {
		let e = [];
		return this.showChartTitle && e.push({
			groupTexts: ["chart-title"],
			type: "text",
			data: [{
				fontSize: this.chartConfig.titleFontSize,
				text: this.chartData.title,
				verticalPos: "middle",
				horizontalPos: "center",
				x: this.boundingRect.x + this.boundingRect.width / 2,
				y: this.boundingRect.y + this.boundingRect.height / 2,
				fill: this.chartThemeConfig.titleColor,
				rotation: 0
			}]
		}), e;
	}
};
function getChartTitleComponent(e, S, C, w) {
	return new ChartTitle(new TextDimensionCalculatorWithFont(w), e, S, C);
}
__name(getChartTitleComponent, "getChartTitleComponent");
var LinePlot = class {
	constructor(e, S, C, w, T) {
		this.plotData = e, this.xAxis = S, this.yAxis = C, this.orientation = w, this.plotIndex = T;
	}
	static #e = __name(this, "LinePlot");
	getDrawableElement() {
		let e = this.plotData.data.map((e) => [this.xAxis.getScaleValue(e[0]), this.yAxis.getScaleValue(e[1])]), S;
		return S = this.orientation === "horizontal" ? line_default().y((e) => e[0]).x((e) => e[1])(e) : line_default().x((e) => e[0]).y((e) => e[1])(e), S ? [{
			groupTexts: ["plot", `line-plot-${this.plotIndex}`],
			type: "path",
			data: [{
				path: S,
				strokeFill: this.plotData.strokeFill,
				strokeWidth: this.plotData.strokeWidth
			}]
		}] : [];
	}
}, BarPlot = class {
	constructor(e, S, C, w, T, E) {
		this.barData = e, this.boundingRect = S, this.xAxis = C, this.yAxis = w, this.orientation = T, this.plotIndex = E;
	}
	static #e = __name(this, "BarPlot");
	getDrawableElement() {
		let e = this.barData.data.map((e) => [this.xAxis.getScaleValue(e[0]), this.yAxis.getScaleValue(e[1])]), S = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * .95, C = S / 2;
		return this.orientation === "horizontal" ? [{
			groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
			type: "rect",
			data: e.map((e) => ({
				x: this.boundingRect.x,
				y: e[0] - C,
				height: S,
				width: e[1] - this.boundingRect.x,
				fill: this.barData.fill,
				strokeWidth: 0,
				strokeFill: this.barData.fill
			}))
		}] : [{
			groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
			type: "rect",
			data: e.map((e) => ({
				x: e[0] - C,
				y: e[1],
				width: S,
				height: this.boundingRect.y + this.boundingRect.height - e[1],
				fill: this.barData.fill,
				strokeWidth: 0,
				strokeFill: this.barData.fill
			}))
		}];
	}
}, BasePlot = class {
	constructor(e, S, C) {
		this.chartConfig = e, this.chartData = S, this.chartThemeConfig = C, this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
	static #e = __name(this, "BasePlot");
	setAxes(e, S) {
		this.xAxis = e, this.yAxis = S;
	}
	setBoundingBoxXY(e) {
		this.boundingRect.x = e.x, this.boundingRect.y = e.y;
	}
	calculateSpace(e) {
		return this.boundingRect.width = e.width, this.boundingRect.height = e.height, {
			width: this.boundingRect.width,
			height: this.boundingRect.height
		};
	}
	getDrawableElements() {
		if (!(this.xAxis && this.yAxis)) throw Error("Axes must be passed to render Plots");
		let e = [];
		for (let [S, C] of this.chartData.plots.entries()) switch (C.type) {
			case "line":
				{
					let w = new LinePlot(C, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, S);
					e.push(...w.getDrawableElement());
				}
				break;
			case "bar":
				{
					let w = new BarPlot(C, this.boundingRect, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, S);
					e.push(...w.getDrawableElement());
				}
				break;
		}
		return e;
	}
};
function getPlotComponent(e, S, C) {
	return new BasePlot(e, S, C);
}
__name(getPlotComponent, "getPlotComponent");
var Orchestrator = class {
	constructor(e, S, C, w) {
		this.chartConfig = e, this.chartData = S, this.componentStore = {
			title: getChartTitleComponent(e, S, C, w),
			plot: getPlotComponent(e, S, C),
			xAxis: getAxis(S.xAxis, e.xAxis, {
				titleColor: C.xAxisTitleColor,
				labelColor: C.xAxisLabelColor,
				tickColor: C.xAxisTickColor,
				axisLineColor: C.xAxisLineColor
			}, w),
			yAxis: getAxis(S.yAxis, e.yAxis, {
				titleColor: C.yAxisTitleColor,
				labelColor: C.yAxisLabelColor,
				tickColor: C.yAxisTickColor,
				axisLineColor: C.yAxisLineColor
			}, w)
		};
	}
	static #e = __name(this, "Orchestrator");
	calculateVerticalSpace() {
		let e = this.chartConfig.width, S = this.chartConfig.height, C = 0, w = 0, T = Math.floor(e * this.chartConfig.plotReservedSpacePercent / 100), E = Math.floor(S * this.chartConfig.plotReservedSpacePercent / 100), D = this.componentStore.plot.calculateSpace({
			width: T,
			height: E
		});
		e -= D.width, S -= D.height, D = this.componentStore.title.calculateSpace({
			width: this.chartConfig.width,
			height: S
		}), w = D.height, S -= D.height, this.componentStore.xAxis.setAxisPosition("bottom"), D = this.componentStore.xAxis.calculateSpace({
			width: e,
			height: S
		}), S -= D.height, this.componentStore.yAxis.setAxisPosition("left"), D = this.componentStore.yAxis.calculateSpace({
			width: e,
			height: S
		}), C = D.width, e -= D.width, e > 0 && (T += e, e = 0), S > 0 && (E += S, S = 0), this.componentStore.plot.calculateSpace({
			width: T,
			height: E
		}), this.componentStore.plot.setBoundingBoxXY({
			x: C,
			y: w
		}), this.componentStore.xAxis.setRange([C, C + T]), this.componentStore.xAxis.setBoundingBoxXY({
			x: C,
			y: w + E
		}), this.componentStore.yAxis.setRange([w, w + E]), this.componentStore.yAxis.setBoundingBoxXY({
			x: 0,
			y: w
		}), this.chartData.plots.some((e) => isBarPlot(e)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
	}
	calculateHorizontalSpace() {
		let e = this.chartConfig.width, S = this.chartConfig.height, C = 0, w = 0, T = 0, E = Math.floor(e * this.chartConfig.plotReservedSpacePercent / 100), D = Math.floor(S * this.chartConfig.plotReservedSpacePercent / 100), O = this.componentStore.plot.calculateSpace({
			width: E,
			height: D
		});
		e -= O.width, S -= O.height, O = this.componentStore.title.calculateSpace({
			width: this.chartConfig.width,
			height: S
		}), C = O.height, S -= O.height, this.componentStore.xAxis.setAxisPosition("left"), O = this.componentStore.xAxis.calculateSpace({
			width: e,
			height: S
		}), e -= O.width, w = O.width, this.componentStore.yAxis.setAxisPosition("top"), O = this.componentStore.yAxis.calculateSpace({
			width: e,
			height: S
		}), S -= O.height, T = C + O.height, e > 0 && (E += e, e = 0), S > 0 && (D += S, S = 0), this.componentStore.plot.calculateSpace({
			width: E,
			height: D
		}), this.componentStore.plot.setBoundingBoxXY({
			x: w,
			y: T
		}), this.componentStore.yAxis.setRange([w, w + E]), this.componentStore.yAxis.setBoundingBoxXY({
			x: w,
			y: C
		}), this.componentStore.xAxis.setRange([T, T + D]), this.componentStore.xAxis.setBoundingBoxXY({
			x: 0,
			y: T
		}), this.chartData.plots.some((e) => isBarPlot(e)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
	}
	calculateSpace() {
		this.chartConfig.chartOrientation === "horizontal" ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
	}
	getDrawableElement() {
		this.calculateSpace();
		let e = [];
		this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
		for (let S of Object.values(this.componentStore)) e.push(...S.getDrawableElements());
		return e;
	}
}, XYChartBuilder = class {
	static #e = __name(this, "XYChartBuilder");
	static build(e, S, C, w) {
		return new Orchestrator(e, S, C, w).getDrawableElement();
	}
}, plotIndex = 0, tmpSVGGroup, xyChartConfig = getChartDefaultConfig(), xyChartThemeConfig = getChartDefaultThemeConfig(), xyChartData = getChartDefaultData(), plotColorPalette = xyChartThemeConfig.plotColorPalette.split(",").map((e) => e.trim()), hasSetXAxis = !1, hasSetYAxis = !1;
function getChartDefaultThemeConfig() {
	let S = getThemeVariables3(), C = getConfig();
	return cleanAndMerge(S.xyChart, C.themeVariables.xyChart);
}
__name(getChartDefaultThemeConfig, "getChartDefaultThemeConfig");
function getChartDefaultConfig() {
	let S = getConfig();
	return cleanAndMerge(defaultConfig_default.xyChart, S.xyChart);
}
__name(getChartDefaultConfig, "getChartDefaultConfig");
function getChartDefaultData() {
	return {
		yAxis: {
			type: "linear",
			title: "",
			min: Infinity,
			max: -Infinity
		},
		xAxis: {
			type: "band",
			title: "",
			categories: []
		},
		title: "",
		plots: []
	};
}
__name(getChartDefaultData, "getChartDefaultData");
function textSanitizer(e) {
	let S = getConfig();
	return sanitizeText(e.trim(), S);
}
__name(textSanitizer, "textSanitizer");
function setTmpSVGG(e) {
	tmpSVGGroup = e;
}
__name(setTmpSVGG, "setTmpSVGG");
function setOrientation(e) {
	e === "horizontal" ? xyChartConfig.chartOrientation = "horizontal" : xyChartConfig.chartOrientation = "vertical";
}
__name(setOrientation, "setOrientation");
function setXAxisTitle(e) {
	xyChartData.xAxis.title = textSanitizer(e.text);
}
__name(setXAxisTitle, "setXAxisTitle");
function setXAxisRangeData(e, S) {
	xyChartData.xAxis = {
		type: "linear",
		title: xyChartData.xAxis.title,
		min: e,
		max: S
	}, hasSetXAxis = !0;
}
__name(setXAxisRangeData, "setXAxisRangeData");
function setXAxisBand(e) {
	xyChartData.xAxis = {
		type: "band",
		title: xyChartData.xAxis.title,
		categories: e.map((e) => textSanitizer(e.text))
	}, hasSetXAxis = !0;
}
__name(setXAxisBand, "setXAxisBand");
function setYAxisTitle(e) {
	xyChartData.yAxis.title = textSanitizer(e.text);
}
__name(setYAxisTitle, "setYAxisTitle");
function setYAxisRangeData(e, S) {
	xyChartData.yAxis = {
		type: "linear",
		title: xyChartData.yAxis.title,
		min: e,
		max: S
	}, hasSetYAxis = !0;
}
__name(setYAxisRangeData, "setYAxisRangeData");
function setYAxisRangeFromPlotData(e) {
	let S = Math.min(...e), C = Math.max(...e), w = isLinearAxisData(xyChartData.yAxis) ? xyChartData.yAxis.min : Infinity, T = isLinearAxisData(xyChartData.yAxis) ? xyChartData.yAxis.max : -Infinity;
	xyChartData.yAxis = {
		type: "linear",
		title: xyChartData.yAxis.title,
		min: Math.min(w, S),
		max: Math.max(T, C)
	};
}
__name(setYAxisRangeFromPlotData, "setYAxisRangeFromPlotData");
function transformDataWithoutCategory(e) {
	let S = [];
	if (e.length === 0) return S;
	if (!hasSetXAxis) {
		let S = isLinearAxisData(xyChartData.xAxis) ? xyChartData.xAxis.min : Infinity, C = isLinearAxisData(xyChartData.xAxis) ? xyChartData.xAxis.max : -Infinity;
		setXAxisRangeData(Math.min(S, 1), Math.max(C, e.length));
	}
	if (hasSetYAxis || setYAxisRangeFromPlotData(e), isBandAxisData(xyChartData.xAxis) && (S = xyChartData.xAxis.categories.map((S, C) => [S, e[C]])), isLinearAxisData(xyChartData.xAxis)) {
		let C = xyChartData.xAxis.min, w = xyChartData.xAxis.max, T = (w - C) / (e.length - 1), E = [];
		for (let e = C; e <= w; e += T) E.push(`${e}`);
		S = E.map((S, C) => [S, e[C]]);
	}
	return S;
}
__name(transformDataWithoutCategory, "transformDataWithoutCategory");
function getPlotColorFromPalette(e) {
	return plotColorPalette[e === 0 ? 0 : e % plotColorPalette.length];
}
__name(getPlotColorFromPalette, "getPlotColorFromPalette");
function setLineData(e, S) {
	let C = transformDataWithoutCategory(S);
	xyChartData.plots.push({
		type: "line",
		strokeFill: getPlotColorFromPalette(plotIndex),
		strokeWidth: 2,
		data: C
	}), plotIndex++;
}
__name(setLineData, "setLineData");
function setBarData(e, S) {
	let C = transformDataWithoutCategory(S);
	xyChartData.plots.push({
		type: "bar",
		fill: getPlotColorFromPalette(plotIndex),
		data: C
	}), plotIndex++;
}
__name(setBarData, "setBarData");
function getDrawableElem() {
	if (xyChartData.plots.length === 0) throw Error("No Plot to render, please provide a plot with some data");
	return xyChartData.title = getDiagramTitle(), XYChartBuilder.build(xyChartConfig, xyChartData, xyChartThemeConfig, tmpSVGGroup);
}
__name(getDrawableElem, "getDrawableElem");
function getChartThemeConfig() {
	return xyChartThemeConfig;
}
__name(getChartThemeConfig, "getChartThemeConfig");
function getChartConfig() {
	return xyChartConfig;
}
__name(getChartConfig, "getChartConfig");
function getXYChartData() {
	return xyChartData;
}
__name(getXYChartData, "getXYChartData");
var diagram = {
	parser: xychart_default,
	db: {
		getDrawableElem,
		clear: /* @__PURE__ */ __name(function() {
			clear(), plotIndex = 0, xyChartConfig = getChartDefaultConfig(), xyChartData = getChartDefaultData(), xyChartThemeConfig = getChartDefaultThemeConfig(), plotColorPalette = xyChartThemeConfig.plotColorPalette.split(",").map((e) => e.trim()), hasSetXAxis = !1, hasSetYAxis = !1;
		}, "clear"),
		setAccTitle,
		getAccTitle,
		setDiagramTitle,
		getDiagramTitle,
		getAccDescription,
		setAccDescription,
		setOrientation,
		setXAxisTitle,
		setXAxisRangeData,
		setXAxisBand,
		setYAxisTitle,
		setYAxisRangeData,
		setLineData,
		setBarData,
		setTmpSVGG,
		getChartThemeConfig,
		getChartConfig,
		getXYChartData
	},
	renderer: { draw: /* @__PURE__ */ __name((e, w, T, E) => {
		let D = E.db, O = D.getChartThemeConfig(), k = D.getChartConfig(), A = D.getXYChartData().plots[0].data.map((e) => e[1]);
		function M(e) {
			return e === "top" ? "text-before-edge" : "middle";
		}
		__name(M, "getDominantBaseLine");
		function N(e) {
			return e === "left" ? "start" : e === "right" ? "end" : "middle";
		}
		__name(N, "getTextAnchor");
		function P(e) {
			return `translate(${e.x}, ${e.y}) rotate(${e.rotation || 0})`;
		}
		__name(P, "getTextTransformation"), log.debug("Rendering xychart chart\n" + e);
		let F = selectSvgElement(w), I = F.append("g").attr("class", "main"), L = I.append("rect").attr("width", k.width).attr("height", k.height).attr("class", "background");
		configureSvgSize(F, k.height, k.width, !0), F.attr("viewBox", `0 0 ${k.width} ${k.height}`), L.attr("fill", O.backgroundColor), D.setTmpSVGG(F.append("g").attr("class", "mermaid-tmp-group"));
		let R = D.getDrawableElem(), z = {};
		function B(e) {
			let S = I, C = "";
			for (let [w] of e.entries()) {
				let T = I;
				w > 0 && z[C] && (T = z[C]), C += e[w], S = z[C], S ||= z[C] = T.append("g").attr("class", e[w]);
			}
			return S;
		}
		__name(B, "getGroup");
		for (let e of R) {
			if (e.data.length === 0) continue;
			let S = B(e.groupTexts);
			switch (e.type) {
				case "rect":
					if (S.selectAll("rect").data(e.data).enter().append("rect").attr("x", (e) => e.x).attr("y", (e) => e.y).attr("width", (e) => e.width).attr("height", (e) => e.height).attr("fill", (e) => e.fill).attr("stroke", (e) => e.strokeFill).attr("stroke-width", (e) => e.strokeWidth), k.showDataLabel) if (k.chartOrientation === "horizontal") {
						let w = function(e, S) {
							let { data: C, label: w } = e;
							return S * w.length * T <= C.width - 10;
						};
						__name(w, "fitsHorizontally");
						let T = .7, E = e.data.map((e, S) => ({
							data: e,
							label: A[S].toString()
						})).filter((e) => e.data.width > 0 && e.data.height > 0), D = E.map((e) => {
							let { data: S } = e, C = S.height * .7;
							for (; !w(e, C) && C > 0;) --C;
							return C;
						}), O = Math.floor(Math.min(...D));
						S.selectAll("text").data(E).enter().append("text").attr("x", (e) => e.data.x + e.data.width - 10).attr("y", (e) => e.data.y + e.data.height / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").attr("fill", "black").attr("font-size", `${O}px`).text((e) => e.label);
					} else {
						let w = function(e, S, C) {
							let { data: w, label: T } = e, E = S * T.length * .7, D = w.x + w.width / 2, O = D - E / 2, k = D + E / 2, A = O >= w.x && k <= w.x + w.width, j = w.y + C + S <= w.y + w.height;
							return A && j;
						};
						__name(w, "fitsInBar");
						let T = e.data.map((e, S) => ({
							data: e,
							label: A[S].toString()
						})).filter((e) => e.data.width > 0 && e.data.height > 0), E = T.map((e) => {
							let { data: S, label: C } = e, T = S.width / (C.length * .7);
							for (; !w(e, T, 10) && T > 0;) --T;
							return T;
						}), D = Math.floor(Math.min(...E));
						S.selectAll("text").data(T).enter().append("text").attr("x", (e) => e.data.x + e.data.width / 2).attr("y", (e) => e.data.y + 10).attr("text-anchor", "middle").attr("dominant-baseline", "hanging").attr("fill", "black").attr("font-size", `${D}px`).text((e) => e.label);
					}
					break;
				case "text":
					S.selectAll("text").data(e.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (e) => e.fill).attr("font-size", (e) => e.fontSize).attr("dominant-baseline", (e) => M(e.verticalPos)).attr("text-anchor", (e) => N(e.horizontalPos)).attr("transform", (e) => P(e)).text((e) => e.text);
					break;
				case "path":
					S.selectAll("path").data(e.data).enter().append("path").attr("d", (e) => e.path).attr("fill", (e) => e.fill ? e.fill : "none").attr("stroke", (e) => e.strokeFill).attr("stroke-width", (e) => e.strokeWidth);
					break;
			}
		}
	}, "draw") }
};
export { diagram };
