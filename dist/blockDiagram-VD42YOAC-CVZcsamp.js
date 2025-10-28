import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./_baseUniq-C5UuzJkR.js";
import "./isEmpty-D0b8WX4x.js";
import { a as decodeEntities, g as utils_default, l as getStylesFromArray } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { t as clone_default } from "./clone-XSAL9Gay.js";
import { t as Graph } from "./graphlib-MJWczo1S.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { E as getUrl, I as sanitizeText, a as clear, b as getConfig2, c as configureSvgSize, et as rgba_default, h as evaluate, s as common_default, y as getConfig } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as channel_default } from "./channel-C2PC5s-o.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import "./array-BlABR2MP.js";
import { _ as basis_default } from "./step-DmjVsfVE.js";
import { t as line_default } from "./line-Cl_B2mnJ.js";
import "./dist-CUheKjZU.js";
import { a as replaceIconSubstring, n as createText } from "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import { t as getIconStyles } from "./chunk-FMBD7UC4-D5HULJBc.js";
import { t as getLineFunctionsWithOffset } from "./chunk-HN2XXSSU-p3ji0EC3.js";
import { t as getSubGraphTitleMargins } from "./chunk-CVBHYZKI-Cx9WXSzs.js";
var parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, S, C, w) {
		for (C ||= {}, w = e.length; w--; C[e[w]] = S);
		return C;
	}, "o"), S = [1, 15], C = [1, 7], w = [1, 13], T = [1, 14], E = [1, 19], O = [1, 16], k = [1, 17], A = [1, 18], j = [8, 30], M = [
		8,
		10,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], N = [1, 23], P = [1, 24], F = [
		8,
		10,
		15,
		16,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], I = [
		8,
		10,
		15,
		16,
		21,
		27,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], L = [1, 49], R = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			spaceLines: 3,
			SPACELINE: 4,
			NL: 5,
			separator: 6,
			SPACE: 7,
			EOF: 8,
			start: 9,
			BLOCK_DIAGRAM_KEY: 10,
			document: 11,
			stop: 12,
			statement: 13,
			link: 14,
			LINK: 15,
			START_LINK: 16,
			LINK_LABEL: 17,
			STR: 18,
			nodeStatement: 19,
			columnsStatement: 20,
			SPACE_BLOCK: 21,
			blockStatement: 22,
			classDefStatement: 23,
			cssClassStatement: 24,
			styleStatement: 25,
			node: 26,
			SIZE: 27,
			COLUMNS: 28,
			"id-block": 29,
			end: 30,
			NODE_ID: 31,
			nodeShapeNLabel: 32,
			dirList: 33,
			DIR: 34,
			NODE_DSTART: 35,
			NODE_DEND: 36,
			BLOCK_ARROW_START: 37,
			BLOCK_ARROW_END: 38,
			classDef: 39,
			CLASSDEF_ID: 40,
			CLASSDEF_STYLEOPTS: 41,
			DEFAULT: 42,
			class: 43,
			CLASSENTITY_IDS: 44,
			STYLECLASS: 45,
			style: 46,
			STYLE_ENTITY_IDS: 47,
			STYLE_DEFINITION_DATA: 48,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SPACELINE",
			5: "NL",
			7: "SPACE",
			8: "EOF",
			10: "BLOCK_DIAGRAM_KEY",
			15: "LINK",
			16: "START_LINK",
			17: "LINK_LABEL",
			18: "STR",
			21: "SPACE_BLOCK",
			27: "SIZE",
			28: "COLUMNS",
			29: "id-block",
			30: "end",
			31: "NODE_ID",
			34: "DIR",
			35: "NODE_DSTART",
			36: "NODE_DEND",
			37: "BLOCK_ARROW_START",
			38: "BLOCK_ARROW_END",
			39: "classDef",
			40: "CLASSDEF_ID",
			41: "CLASSDEF_STYLEOPTS",
			42: "DEFAULT",
			43: "class",
			44: "CLASSENTITY_IDS",
			45: "STYLECLASS",
			46: "style",
			47: "STYLE_ENTITY_IDS",
			48: "STYLE_DEFINITION_DATA"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[3, 2],
			[6, 1],
			[6, 1],
			[6, 1],
			[9, 3],
			[12, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[11, 1],
			[11, 2],
			[14, 1],
			[14, 4],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[19, 3],
			[19, 2],
			[19, 1],
			[20, 1],
			[22, 4],
			[22, 3],
			[26, 1],
			[26, 2],
			[33, 1],
			[33, 2],
			[32, 3],
			[32, 4],
			[23, 3],
			[23, 3],
			[24, 3],
			[25, 3]
		],
		performAction: /* @__PURE__ */ __name(function(e, S, C, w, T, E, D) {
			var O = E.length - 1;
			switch (T) {
				case 4:
					w.getLogger().debug("Rule: separator (NL) ");
					break;
				case 5:
					w.getLogger().debug("Rule: separator (Space) ");
					break;
				case 6:
					w.getLogger().debug("Rule: separator (EOF) ");
					break;
				case 7:
					w.getLogger().debug("Rule: hierarchy: ", E[O - 1]), w.setHierarchy(E[O - 1]);
					break;
				case 8:
					w.getLogger().debug("Stop NL ");
					break;
				case 9:
					w.getLogger().debug("Stop EOF ");
					break;
				case 10:
					w.getLogger().debug("Stop NL2 ");
					break;
				case 11:
					w.getLogger().debug("Stop EOF2 ");
					break;
				case 12:
					w.getLogger().debug("Rule: statement: ", E[O]), typeof E[O].length == "number" ? this.$ = E[O] : this.$ = [E[O]];
					break;
				case 13:
					w.getLogger().debug("Rule: statement #2: ", E[O - 1]), this.$ = [E[O - 1]].concat(E[O]);
					break;
				case 14:
					w.getLogger().debug("Rule: link: ", E[O], e), this.$ = {
						edgeTypeStr: E[O],
						label: ""
					};
					break;
				case 15:
					w.getLogger().debug("Rule: LABEL link: ", E[O - 3], E[O - 1], E[O]), this.$ = {
						edgeTypeStr: E[O],
						label: E[O - 1]
					};
					break;
				case 18:
					let S = parseInt(E[O]);
					this.$ = {
						id: w.generateId(),
						type: "space",
						label: "",
						width: S,
						children: []
					};
					break;
				case 23:
					w.getLogger().debug("Rule: (nodeStatement link node) ", E[O - 2], E[O - 1], E[O], " typestr: ", E[O - 1].edgeTypeStr);
					let C = w.edgeStrToEdgeData(E[O - 1].edgeTypeStr);
					this.$ = [
						{
							id: E[O - 2].id,
							label: E[O - 2].label,
							type: E[O - 2].type,
							directions: E[O - 2].directions
						},
						{
							id: E[O - 2].id + "-" + E[O].id,
							start: E[O - 2].id,
							end: E[O].id,
							label: E[O - 1].label,
							type: "edge",
							directions: E[O].directions,
							arrowTypeEnd: C,
							arrowTypeStart: "arrow_open"
						},
						{
							id: E[O].id,
							label: E[O].label,
							type: w.typeStr2Type(E[O].typeStr),
							directions: E[O].directions
						}
					];
					break;
				case 24:
					w.getLogger().debug("Rule: nodeStatement (abc88 node size) ", E[O - 1], E[O]), this.$ = {
						id: E[O - 1].id,
						label: E[O - 1].label,
						type: w.typeStr2Type(E[O - 1].typeStr),
						directions: E[O - 1].directions,
						widthInColumns: parseInt(E[O], 10)
					};
					break;
				case 25:
					w.getLogger().debug("Rule: nodeStatement (node) ", E[O]), this.$ = {
						id: E[O].id,
						label: E[O].label,
						type: w.typeStr2Type(E[O].typeStr),
						directions: E[O].directions,
						widthInColumns: 1
					};
					break;
				case 26:
					w.getLogger().debug("APA123", this ? this : "na"), w.getLogger().debug("COLUMNS: ", E[O]), this.$ = {
						type: "column-setting",
						columns: E[O] === "auto" ? -1 : parseInt(E[O])
					};
					break;
				case 27:
					w.getLogger().debug("Rule: id-block statement : ", E[O - 2], E[O - 1]), w.generateId(), this.$ = {
						...E[O - 2],
						type: "composite",
						children: E[O - 1]
					};
					break;
				case 28:
					w.getLogger().debug("Rule: blockStatement : ", E[O - 2], E[O - 1], E[O]), this.$ = {
						id: w.generateId(),
						type: "composite",
						label: "",
						children: E[O - 1]
					};
					break;
				case 29:
					w.getLogger().debug("Rule: node (NODE_ID separator): ", E[O]), this.$ = { id: E[O] };
					break;
				case 30:
					w.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", E[O - 1], E[O]), this.$ = {
						id: E[O - 1],
						label: E[O].label,
						typeStr: E[O].typeStr,
						directions: E[O].directions
					};
					break;
				case 31:
					w.getLogger().debug("Rule: dirList: ", E[O]), this.$ = [E[O]];
					break;
				case 32:
					w.getLogger().debug("Rule: dirList: ", E[O - 1], E[O]), this.$ = [E[O - 1]].concat(E[O]);
					break;
				case 33:
					w.getLogger().debug("Rule: nodeShapeNLabel: ", E[O - 2], E[O - 1], E[O]), this.$ = {
						typeStr: E[O - 2] + E[O],
						label: E[O - 1]
					};
					break;
				case 34:
					w.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", E[O - 3], E[O - 2], " #3:", E[O - 1], E[O]), this.$ = {
						typeStr: E[O - 3] + E[O],
						label: E[O - 2],
						directions: E[O - 1]
					};
					break;
				case 35:
				case 36:
					this.$ = {
						type: "classDef",
						id: E[O - 1].trim(),
						css: E[O].trim()
					};
					break;
				case 37:
					this.$ = {
						type: "applyClass",
						id: E[O - 1].trim(),
						styleClass: E[O].trim()
					};
					break;
				case 38:
					this.$ = {
						type: "applyStyles",
						id: E[O - 1].trim(),
						stylesStr: E[O].trim()
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				9: 1,
				10: [1, 2]
			},
			{ 1: [3] },
			{
				10: S,
				11: 3,
				13: 4,
				19: 5,
				20: 6,
				21: C,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: w,
				29: T,
				31: E,
				39: O,
				43: k,
				46: A
			},
			{ 8: [1, 20] },
			e(j, [2, 12], {
				13: 4,
				19: 5,
				20: 6,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				11: 21,
				10: S,
				21: C,
				28: w,
				29: T,
				31: E,
				39: O,
				43: k,
				46: A
			}),
			e(M, [2, 16], {
				14: 22,
				15: N,
				16: P
			}),
			e(M, [2, 17]),
			e(M, [2, 18]),
			e(M, [2, 19]),
			e(M, [2, 20]),
			e(M, [2, 21]),
			e(M, [2, 22]),
			e(F, [2, 25], { 27: [1, 25] }),
			e(M, [2, 26]),
			{
				19: 26,
				26: 12,
				31: E
			},
			{
				10: S,
				11: 27,
				13: 4,
				19: 5,
				20: 6,
				21: C,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: w,
				29: T,
				31: E,
				39: O,
				43: k,
				46: A
			},
			{
				40: [1, 28],
				42: [1, 29]
			},
			{ 44: [1, 30] },
			{ 47: [1, 31] },
			e(I, [2, 29], {
				32: 32,
				35: [1, 33],
				37: [1, 34]
			}),
			{ 1: [2, 7] },
			e(j, [2, 13]),
			{
				26: 35,
				31: E
			},
			{ 31: [2, 14] },
			{ 17: [1, 36] },
			e(F, [2, 24]),
			{
				10: S,
				11: 37,
				13: 4,
				14: 22,
				15: N,
				16: P,
				19: 5,
				20: 6,
				21: C,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: w,
				29: T,
				31: E,
				39: O,
				43: k,
				46: A
			},
			{ 30: [1, 38] },
			{ 41: [1, 39] },
			{ 41: [1, 40] },
			{ 45: [1, 41] },
			{ 48: [1, 42] },
			e(I, [2, 30]),
			{ 18: [1, 43] },
			{ 18: [1, 44] },
			e(F, [2, 23]),
			{ 18: [1, 45] },
			{ 30: [1, 46] },
			e(M, [2, 28]),
			e(M, [2, 35]),
			e(M, [2, 36]),
			e(M, [2, 37]),
			e(M, [2, 38]),
			{ 36: [1, 47] },
			{
				33: 48,
				34: L
			},
			{ 15: [1, 50] },
			e(M, [2, 27]),
			e(I, [2, 33]),
			{ 38: [1, 51] },
			{
				33: 52,
				34: L,
				38: [2, 31]
			},
			{ 31: [2, 15] },
			e(I, [2, 34]),
			{ 38: [2, 32] }
		],
		defaultActions: {
			20: [2, 7],
			23: [2, 14],
			50: [2, 15],
			52: [2, 32]
		},
		parseError: /* @__PURE__ */ __name(function(e, S) {
			if (S.recoverable) this.trace(e);
			else {
				var C = Error(e);
				throw C.hash = S, C;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var S = this, C = [0], w = [], T = [null], E = [], O = this.table, k = "", A = 0, j = 0, M = 0, N = 2, P = 1, F = E.slice.call(arguments, 1), I = Object.create(this.lexer), L = { yy: {} };
			for (var R in this.yy) Object.prototype.hasOwnProperty.call(this.yy, R) && (L.yy[R] = this.yy[R]);
			I.setInput(e, L.yy), L.yy.lexer = I, L.yy.parser = this, I.yylloc === void 0 && (I.yylloc = {});
			var z = I.yylloc;
			E.push(z);
			var B = I.options && I.options.ranges;
			typeof L.yy.parseError == "function" ? this.parseError = L.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function V(e) {
				C.length -= 2 * e, T.length -= e, E.length -= e;
			}
			__name(V, "popStack");
			function H() {
				var e = w.pop() || I.lex() || P;
				return typeof e != "number" && (e instanceof Array && (w = e, e = w.pop()), e = S.symbols_[e] || e), e;
			}
			__name(H, "lex");
			for (var U, W, G, K, q, J = {}, Y, X, Z, Q;;) {
				if (G = C[C.length - 1], this.defaultActions[G] ? K = this.defaultActions[G] : (U ??= H(), K = O[G] && O[G][U]), K === void 0 || !K.length || !K[0]) {
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
						C.push(U), T.push(I.yytext), E.push(I.yylloc), C.push(K[1]), U = null, W ? (U = W, W = null) : (j = I.yyleng, k = I.yytext, A = I.yylineno, z = I.yylloc, M > 0 && M--);
						break;
					case 2:
						if (X = this.productions_[K[1]][1], J.$ = T[T.length - X], J._$ = {
							first_line: E[E.length - (X || 1)].first_line,
							last_line: E[E.length - 1].last_line,
							first_column: E[E.length - (X || 1)].first_column,
							last_column: E[E.length - 1].last_column
						}, B && (J._$.range = [E[E.length - (X || 1)].range[0], E[E.length - 1].range[1]]), q = this.performAction.apply(J, [
							k,
							j,
							A,
							L.yy,
							K[1],
							T,
							E
						].concat(F)), q !== void 0) return q;
						X && (C = C.slice(0, -1 * X * 2), T = T.slice(0, -1 * X), E = E.slice(0, -1 * X)), C.push(this.productions_[K[1]][0]), T.push(J.$), E.push(J._$), Z = O[C[C.length - 2]][C[C.length - 1]], C.push(Z);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	R.lexer = /* @__PURE__ */ (function() {
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
			options: {},
			performAction: /* @__PURE__ */ __name(function(e, S, C, w) {
				switch (C) {
					case 0: return e.getLogger().debug("Found block-beta"), 10;
					case 1: return e.getLogger().debug("Found id-block"), 29;
					case 2: return e.getLogger().debug("Found block"), 10;
					case 3:
						e.getLogger().debug(".", S.yytext);
						break;
					case 4:
						e.getLogger().debug("_", S.yytext);
						break;
					case 5: return 5;
					case 6: return S.yytext = -1, 28;
					case 7: return S.yytext = S.yytext.replace(/columns\s+/, ""), e.getLogger().debug("COLUMNS (LEX)", S.yytext), 28;
					case 8:
						this.pushState("md_string");
						break;
					case 9: return "MD_STR";
					case 10:
						this.popState();
						break;
					case 11:
						this.pushState("string");
						break;
					case 12:
						e.getLogger().debug("LEX: POPPING STR:", S.yytext), this.popState();
						break;
					case 13: return e.getLogger().debug("LEX: STR end:", S.yytext), "STR";
					case 14: return S.yytext = S.yytext.replace(/space\:/, ""), e.getLogger().debug("SPACE NUM (LEX)", S.yytext), 21;
					case 15: return S.yytext = "1", e.getLogger().debug("COLUMNS (LEX)", S.yytext), 21;
					case 16: return 42;
					case 17: return "LINKSTYLE";
					case 18: return "INTERPOLATE";
					case 19: return this.pushState("CLASSDEF"), 39;
					case 20: return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
					case 21: return this.popState(), this.pushState("CLASSDEFID"), 40;
					case 22: return this.popState(), 41;
					case 23: return this.pushState("CLASS"), 43;
					case 24: return this.popState(), this.pushState("CLASS_STYLE"), 44;
					case 25: return this.popState(), 45;
					case 26: return this.pushState("STYLE_STMNT"), 46;
					case 27: return this.popState(), this.pushState("STYLE_DEFINITION"), 47;
					case 28: return this.popState(), 48;
					case 29: return this.pushState("acc_title"), "acc_title";
					case 30: return this.popState(), "acc_title_value";
					case 31: return this.pushState("acc_descr"), "acc_descr";
					case 32: return this.popState(), "acc_descr_value";
					case 33:
						this.pushState("acc_descr_multiline");
						break;
					case 34:
						this.popState();
						break;
					case 35: return "acc_descr_multiline_value";
					case 36: return 30;
					case 37: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 38: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 39: return this.popState(), e.getLogger().debug("Lex: ))"), "NODE_DEND";
					case 40: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 41: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 42: return this.popState(), e.getLogger().debug("Lex: (-"), "NODE_DEND";
					case 43: return this.popState(), e.getLogger().debug("Lex: -)"), "NODE_DEND";
					case 44: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 45: return this.popState(), e.getLogger().debug("Lex: ]]"), "NODE_DEND";
					case 46: return this.popState(), e.getLogger().debug("Lex: ("), "NODE_DEND";
					case 47: return this.popState(), e.getLogger().debug("Lex: ])"), "NODE_DEND";
					case 48: return this.popState(), e.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 49: return this.popState(), e.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 50: return this.popState(), e.getLogger().debug("Lex: )]"), "NODE_DEND";
					case 51: return this.popState(), e.getLogger().debug("Lex: )"), "NODE_DEND";
					case 52: return this.popState(), e.getLogger().debug("Lex: ]>"), "NODE_DEND";
					case 53: return this.popState(), e.getLogger().debug("Lex: ]"), "NODE_DEND";
					case 54: return e.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 35;
					case 55: return e.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 35;
					case 56: return e.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 35;
					case 57: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 58: return e.getLogger().debug("Lex: ((("), this.pushState("NODE"), 35;
					case 59: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 60: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 61: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 62: return e.getLogger().debug("Lexc: >"), this.pushState("NODE"), 35;
					case 63: return e.getLogger().debug("Lexa: (["), this.pushState("NODE"), 35;
					case 64: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 65: return this.pushState("NODE"), 35;
					case 66: return this.pushState("NODE"), 35;
					case 67: return this.pushState("NODE"), 35;
					case 68: return this.pushState("NODE"), 35;
					case 69: return this.pushState("NODE"), 35;
					case 70: return this.pushState("NODE"), 35;
					case 71: return this.pushState("NODE"), 35;
					case 72: return e.getLogger().debug("Lexa: ["), this.pushState("NODE"), 35;
					case 73: return this.pushState("BLOCK_ARROW"), e.getLogger().debug("LEX ARR START"), 37;
					case 74: return e.getLogger().debug("Lex: NODE_ID", S.yytext), 31;
					case 75: return e.getLogger().debug("Lex: EOF", S.yytext), 8;
					case 76:
						this.pushState("md_string");
						break;
					case 77:
						this.pushState("md_string");
						break;
					case 78: return "NODE_DESCR";
					case 79:
						this.popState();
						break;
					case 80:
						e.getLogger().debug("Lex: Starting string"), this.pushState("string");
						break;
					case 81:
						e.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
						break;
					case 82: return e.getLogger().debug("LEX: NODE_DESCR:", S.yytext), "NODE_DESCR";
					case 83:
						e.getLogger().debug("LEX POPPING"), this.popState();
						break;
					case 84:
						e.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
						break;
					case 85: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (right): dir:", S.yytext), "DIR";
					case 86: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (left):", S.yytext), "DIR";
					case 87: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (x):", S.yytext), "DIR";
					case 88: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (y):", S.yytext), "DIR";
					case 89: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (up):", S.yytext), "DIR";
					case 90: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (down):", S.yytext), "DIR";
					case 91: return S.yytext = "]>", e.getLogger().debug("Lex (ARROW_DIR end):", S.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
					case 92: return e.getLogger().debug("Lex: LINK", "#" + S.yytext + "#"), 15;
					case 93: return e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 94: return e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 95: return e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 96: return e.getLogger().debug("Lex: START_LINK", S.yytext), this.pushState("LLABEL"), 16;
					case 97: return e.getLogger().debug("Lex: START_LINK", S.yytext), this.pushState("LLABEL"), 16;
					case 98: return e.getLogger().debug("Lex: START_LINK", S.yytext), this.pushState("LLABEL"), 16;
					case 99:
						this.pushState("md_string");
						break;
					case 100: return e.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
					case 101: return this.popState(), e.getLogger().debug("Lex: LINK", "#" + S.yytext + "#"), 15;
					case 102: return this.popState(), e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 103: return this.popState(), e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 104: return e.getLogger().debug("Lex: COLON", S.yytext), S.yytext = S.yytext.slice(1), 27;
				}
			}, "anonymous"),
			rules: [
				/^(?:block-beta\b)/,
				/^(?:block:)/,
				/^(?:block\b)/,
				/^(?:[\s]+)/,
				/^(?:[\n]+)/,
				/^(?:((\u000D\u000A)|(\u000A)))/,
				/^(?:columns\s+auto\b)/,
				/^(?:columns\s+[\d]+)/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]*)/,
				/^(?:space[:]\d+)/,
				/^(?:space\b)/,
				/^(?:default\b)/,
				/^(?:linkStyle\b)/,
				/^(?:interpolate\b)/,
				/^(?:classDef\s+)/,
				/^(?:DEFAULT\s+)/,
				/^(?:\w+\s+)/,
				/^(?:[^\n]*)/,
				/^(?:class\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:style\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:end\b\s*)/,
				/^(?:\(\(\()/,
				/^(?:\)\)\))/,
				/^(?:[\)]\))/,
				/^(?:\}\})/,
				/^(?:\})/,
				/^(?:\(-)/,
				/^(?:-\))/,
				/^(?:\(\()/,
				/^(?:\]\])/,
				/^(?:\()/,
				/^(?:\]\))/,
				/^(?:\\\])/,
				/^(?:\/\])/,
				/^(?:\)\])/,
				/^(?:[\)])/,
				/^(?:\]>)/,
				/^(?:[\]])/,
				/^(?:-\))/,
				/^(?:\(-)/,
				/^(?:\)\))/,
				/^(?:\))/,
				/^(?:\(\(\()/,
				/^(?:\(\()/,
				/^(?:\{\{)/,
				/^(?:\{)/,
				/^(?:>)/,
				/^(?:\(\[)/,
				/^(?:\()/,
				/^(?:\[\[)/,
				/^(?:\[\|)/,
				/^(?:\[\()/,
				/^(?:\)\)\))/,
				/^(?:\[\\)/,
				/^(?:\[\/)/,
				/^(?:\[\\)/,
				/^(?:\[)/,
				/^(?:<\[)/,
				/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,
				/^(?:$)/,
				/^(?:["][`])/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]+)/,
				/^(?:["])/,
				/^(?:\]>\s*\()/,
				/^(?:,?\s*right\s*)/,
				/^(?:,?\s*left\s*)/,
				/^(?:,?\s*x\s*)/,
				/^(?:,?\s*y\s*)/,
				/^(?:,?\s*up\s*)/,
				/^(?:,?\s*down\s*)/,
				/^(?:\)\s*)/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?:\s*~~[\~]+\s*)/,
				/^(?:\s*[xo<]?--\s*)/,
				/^(?:\s*[xo<]?==\s*)/,
				/^(?:\s*[xo<]?-\.\s*)/,
				/^(?:["][`])/,
				/^(?:["])/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?::\d+)/
			],
			conditions: {
				STYLE_DEFINITION: {
					rules: [28],
					inclusive: !1
				},
				STYLE_STMNT: {
					rules: [27],
					inclusive: !1
				},
				CLASSDEFID: {
					rules: [22],
					inclusive: !1
				},
				CLASSDEF: {
					rules: [20, 21],
					inclusive: !1
				},
				CLASS_STYLE: {
					rules: [25],
					inclusive: !1
				},
				CLASS: {
					rules: [24],
					inclusive: !1
				},
				LLABEL: {
					rules: [
						99,
						100,
						101,
						102,
						103
					],
					inclusive: !1
				},
				ARROW_DIR: {
					rules: [
						85,
						86,
						87,
						88,
						89,
						90,
						91
					],
					inclusive: !1
				},
				BLOCK_ARROW: {
					rules: [
						76,
						81,
						84
					],
					inclusive: !1
				},
				NODE: {
					rules: [
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
						52,
						53,
						77,
						80
					],
					inclusive: !1
				},
				md_string: {
					rules: [
						9,
						10,
						78,
						79
					],
					inclusive: !1
				},
				space: {
					rules: [],
					inclusive: !1
				},
				string: {
					rules: [
						12,
						13,
						82,
						83
					],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [34, 35],
					inclusive: !1
				},
				acc_descr: {
					rules: [32],
					inclusive: !1
				},
				acc_title: {
					rules: [30],
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
						8,
						11,
						14,
						15,
						16,
						17,
						18,
						19,
						23,
						26,
						29,
						31,
						33,
						36,
						54,
						55,
						56,
						57,
						58,
						59,
						60,
						61,
						62,
						63,
						64,
						65,
						66,
						67,
						68,
						69,
						70,
						71,
						72,
						73,
						74,
						75,
						92,
						93,
						94,
						95,
						96,
						97,
						98,
						104
					],
					inclusive: !0
				}
			}
		};
	})();
	function z() {
		this.yy = {};
	}
	return __name(z, "Parser"), z.prototype = R, R.Parser = z, new z();
})();
parser.parser = parser;
var block_default = parser, blockDatabase = /* @__PURE__ */ new Map(), edgeList = [], edgeCount = /* @__PURE__ */ new Map(), COLOR_KEYWORD = "color", FILL_KEYWORD = "fill", BG_FILL = "bgFill", STYLECLASS_SEP = ",", config = getConfig2(), classes = /* @__PURE__ */ new Map(), sanitizeText2 = /* @__PURE__ */ __name((e) => common_default.sanitizeText(e, config), "sanitizeText"), addStyleClass = /* @__PURE__ */ __name(function(e, S = "") {
	let C = classes.get(e);
	C || (C = {
		id: e,
		styles: [],
		textStyles: []
	}, classes.set(e, C)), S?.split(STYLECLASS_SEP).forEach((e) => {
		let S = e.replace(/([^;]*);/, "$1").trim();
		if (RegExp(COLOR_KEYWORD).exec(e)) {
			let e = S.replace(FILL_KEYWORD, BG_FILL).replace(COLOR_KEYWORD, FILL_KEYWORD);
			C.textStyles.push(e);
		}
		C.styles.push(S);
	});
}, "addStyleClass"), addStyle2Node = /* @__PURE__ */ __name(function(e, S = "") {
	let C = blockDatabase.get(e);
	S != null && (C.styles = S.split(STYLECLASS_SEP));
}, "addStyle2Node"), setCssClass = /* @__PURE__ */ __name(function(e, S) {
	e.split(",").forEach(function(e) {
		let C = blockDatabase.get(e);
		if (C === void 0) {
			let S = e.trim();
			C = {
				id: S,
				type: "na",
				children: []
			}, blockDatabase.set(S, C);
		}
		C.classes ||= [], C.classes.push(S);
	});
}, "setCssClass"), populateBlockDatabase = /* @__PURE__ */ __name((e, S) => {
	let C = e.flat(), T = [], D = C.find((e) => e?.type === "column-setting")?.columns ?? -1;
	for (let e of C) {
		if (typeof D == "number" && D > 0 && e.type !== "column-setting" && typeof e.widthInColumns == "number" && e.widthInColumns > D && log.warn(`Block ${e.id} width ${e.widthInColumns} exceeds configured column width ${D}`), e.label &&= sanitizeText2(e.label), e.type === "classDef") {
			addStyleClass(e.id, e.css);
			continue;
		}
		if (e.type === "applyClass") {
			setCssClass(e.id, e?.styleClass ?? "");
			continue;
		}
		if (e.type === "applyStyles") {
			e?.stylesStr && addStyle2Node(e.id, e?.stylesStr);
			continue;
		}
		if (e.type === "column-setting") S.columns = e.columns ?? -1;
		else if (e.type === "edge") {
			let S = (edgeCount.get(e.id) ?? 0) + 1;
			edgeCount.set(e.id, S), e.id = S + "-" + e.id, edgeList.push(e);
		} else {
			e.label || (e.type === "composite" ? e.label = "" : e.label = e.id);
			let S = blockDatabase.get(e.id);
			if (S === void 0 ? blockDatabase.set(e.id, e) : (e.type !== "na" && (S.type = e.type), e.label !== e.id && (S.label = e.label)), e.children && populateBlockDatabase(e.children, e), e.type === "space") {
				let S = e.width ?? 1;
				for (let C = 0; C < S; C++) {
					let S = clone_default(e);
					S.id = S.id + "-" + C, blockDatabase.set(S.id, S), T.push(S);
				}
			} else S === void 0 && T.push(e);
		}
	}
	S.children = T;
}, "populateBlockDatabase"), blocks = [], rootBlock = {
	id: "root",
	type: "composite",
	children: [],
	columns: -1
}, clear2 = /* @__PURE__ */ __name(() => {
	log.debug("Clear called"), clear(), rootBlock = {
		id: "root",
		type: "composite",
		children: [],
		columns: -1
	}, blockDatabase = /* @__PURE__ */ new Map([["root", rootBlock]]), blocks = [], classes = /* @__PURE__ */ new Map(), edgeList = [], edgeCount = /* @__PURE__ */ new Map();
}, "clear");
function typeStr2Type(e) {
	switch (log.debug("typeStr2Type", e), e) {
		case "[]": return "square";
		case "()": return log.debug("we have a round"), "round";
		case "(())": return "circle";
		case ">]": return "rect_left_inv_arrow";
		case "{}": return "diamond";
		case "{{}}": return "hexagon";
		case "([])": return "stadium";
		case "[[]]": return "subroutine";
		case "[()]": return "cylinder";
		case "((()))": return "doublecircle";
		case "[//]": return "lean_right";
		case "[\\\\]": return "lean_left";
		case "[/\\]": return "trapezoid";
		case "[\\/]": return "inv_trapezoid";
		case "<[]>": return "block_arrow";
		default: return "na";
	}
}
__name(typeStr2Type, "typeStr2Type");
function edgeTypeStr2Type(e) {
	switch (log.debug("typeStr2Type", e), e) {
		case "==": return "thick";
		default: return "normal";
	}
}
__name(edgeTypeStr2Type, "edgeTypeStr2Type");
function edgeStrToEdgeData(e) {
	switch (e.replace(/^[\s-]+|[\s-]+$/g, "")) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case ">": return "arrow_point";
		default: return "";
	}
}
__name(edgeStrToEdgeData, "edgeStrToEdgeData");
var cnt = 0, blockDB_default = {
	getConfig: /* @__PURE__ */ __name(() => getConfig().block, "getConfig"),
	typeStr2Type,
	edgeTypeStr2Type,
	edgeStrToEdgeData,
	getLogger: /* @__PURE__ */ __name(() => log, "getLogger"),
	getBlocksFlat: /* @__PURE__ */ __name(() => [...blockDatabase.values()], "getBlocksFlat"),
	getBlocks: /* @__PURE__ */ __name(() => blocks || [], "getBlocks"),
	getEdges: /* @__PURE__ */ __name(() => edgeList, "getEdges"),
	setHierarchy: /* @__PURE__ */ __name((e) => {
		rootBlock.children = e, populateBlockDatabase(e, rootBlock), blocks = rootBlock.children;
	}, "setHierarchy"),
	getBlock: /* @__PURE__ */ __name((e) => blockDatabase.get(e), "getBlock"),
	setBlock: /* @__PURE__ */ __name((e) => {
		blockDatabase.set(e.id, e);
	}, "setBlock"),
	getColumns: /* @__PURE__ */ __name((e) => {
		let S = blockDatabase.get(e);
		return S ? S.columns ? S.columns : S.children ? S.children.length : -1 : -1;
	}, "getColumns"),
	getClasses: /* @__PURE__ */ __name(function() {
		return classes;
	}, "getClasses"),
	clear: clear2,
	generateId: /* @__PURE__ */ __name(() => (cnt++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt), "generateId")
}, fade = /* @__PURE__ */ __name((e, S) => {
	let C = channel_default;
	return rgba_default(C(e, "r"), C(e, "g"), C(e, "b"), S);
}, "fade"), styles_default = /* @__PURE__ */ __name((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
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
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

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
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(e.edgeLabelBackground, .5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${fade(e.mainBkg, .5)};
    fill: ${fade(e.clusterBkg, .5)};
    stroke: ${fade(e.clusterBorder, .2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

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

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  ${getIconStyles()}
`, "getStyles"), insertMarkers = /* @__PURE__ */ __name((e, S, C, w) => {
	S.forEach((S) => {
		markers[S](e, C, w);
	});
}, "insertMarkers"), markers = {
	extension: /* @__PURE__ */ __name((e, S, C) => {
		log.trace("Making markers for ", C), e.append("defs").append("marker").attr("id", C + "_" + S + "-extensionStart").attr("class", "marker extension " + S).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", C + "_" + S + "-extensionEnd").attr("class", "marker extension " + S).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
	}, "extension"),
	composition: /* @__PURE__ */ __name((e, S, C) => {
		e.append("defs").append("marker").attr("id", C + "_" + S + "-compositionStart").attr("class", "marker composition " + S).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", C + "_" + S + "-compositionEnd").attr("class", "marker composition " + S).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ __name((e, S, C) => {
		e.append("defs").append("marker").attr("id", C + "_" + S + "-aggregationStart").attr("class", "marker aggregation " + S).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", C + "_" + S + "-aggregationEnd").attr("class", "marker aggregation " + S).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ __name((e, S, C) => {
		e.append("defs").append("marker").attr("id", C + "_" + S + "-dependencyStart").attr("class", "marker dependency " + S).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", C + "_" + S + "-dependencyEnd").attr("class", "marker dependency " + S).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ __name((e, S, C) => {
		e.append("defs").append("marker").attr("id", C + "_" + S + "-lollipopStart").attr("class", "marker lollipop " + S).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", C + "_" + S + "-lollipopEnd").attr("class", "marker lollipop " + S).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
	}, "lollipop"),
	point: /* @__PURE__ */ __name((e, S, C) => {
		e.append("marker").attr("id", C + "_" + S + "-pointEnd").attr("class", "marker " + S).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", C + "_" + S + "-pointStart").attr("class", "marker " + S).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ __name((e, S, C) => {
		e.append("marker").attr("id", C + "_" + S + "-circleEnd").attr("class", "marker " + S).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", C + "_" + S + "-circleStart").attr("class", "marker " + S).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ __name((e, S, C) => {
		e.append("marker").attr("id", C + "_" + S + "-crossEnd").attr("class", "marker cross " + S).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", C + "_" + S + "-crossStart").attr("class", "marker cross " + S).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ __name((e, S, C) => {
		e.append("defs").append("marker").attr("id", C + "_" + S + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb")
}, markers_default = insertMarkers, padding = getConfig2()?.block?.padding ?? 8;
function calculateBlockPosition(e, S) {
	if (e === 0 || !Number.isInteger(e)) throw Error("Columns must be an integer !== 0.");
	if (S < 0 || !Number.isInteger(S)) throw Error("Position must be a non-negative integer." + S);
	return e < 0 ? {
		px: S,
		py: 0
	} : e === 1 ? {
		px: 0,
		py: S
	} : {
		px: S % e,
		py: Math.floor(S / e)
	};
}
__name(calculateBlockPosition, "calculateBlockPosition");
var getMaxChildSize = /* @__PURE__ */ __name((e) => {
	let S = 0, C = 0;
	for (let w of e.children) {
		let { width: T, height: D, x: O, y: k } = w.size ?? {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		log.debug("getMaxChildSize abc95 child:", w.id, "width:", T, "height:", D, "x:", O, "y:", k, w.type), w.type !== "space" && (T > S && (S = T / (e.widthInColumns ?? 1)), D > C && (C = D));
	}
	return {
		width: S,
		height: C
	};
}, "getMaxChildSize");
function setBlockSizes(e, S, C = 0, w = 0) {
	log.debug("setBlockSizes abc95 (start)", e.id, e?.size?.x, "block width =", e?.size, "siblingWidth", C), e?.size?.width || (e.size = {
		width: C,
		height: w,
		x: 0,
		y: 0
	});
	let T = 0, D = 0;
	if (e.children?.length > 0) {
		for (let C of e.children) setBlockSizes(C, S);
		let O = getMaxChildSize(e);
		T = O.width, D = O.height, log.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", T, D);
		for (let S of e.children) S.size && (log.debug(`abc95 Setting size of children of ${e.id} id=${S.id} ${T} ${D} ${JSON.stringify(S.size)}`), S.size.width = T * (S.widthInColumns ?? 1) + padding * ((S.widthInColumns ?? 1) - 1), S.size.height = D, S.size.x = 0, S.size.y = 0, log.debug(`abc95 updating size of ${e.id} children child:${S.id} maxWidth:${T} maxHeight:${D}`));
		for (let C of e.children) setBlockSizes(C, S, T, D);
		let k = e.columns ?? -1, A = 0;
		for (let S of e.children) A += S.widthInColumns ?? 1;
		let j = e.children.length;
		k > 0 && k < A && (j = k);
		let M = Math.ceil(A / j), N = j * (T + padding) + padding, P = M * (D + padding) + padding;
		if (N < C) {
			log.debug(`Detected to small sibling: abc95 ${e.id} siblingWidth ${C} siblingHeight ${w} width ${N}`), N = C, P = w;
			let S = (C - j * padding - padding) / j, O = (w - M * padding - padding) / M;
			log.debug("Size indata abc88", e.id, "childWidth", S, "maxWidth", T), log.debug("Size indata abc88", e.id, "childHeight", O, "maxHeight", D), log.debug("Size indata abc88 xSize", j, "padding", padding);
			for (let C of e.children) C.size && (C.size.width = S, C.size.height = O, C.size.x = 0, C.size.y = 0);
		}
		if (log.debug(`abc95 (finale calc) ${e.id} xSize ${j} ySize ${M} columns ${k}${e.children.length} width=${Math.max(N, e.size?.width || 0)}`), N < (e?.size?.width || 0)) {
			N = e?.size?.width || 0;
			let S = k > 0 ? Math.min(e.children.length, k) : e.children.length;
			if (S > 0) {
				let C = (N - S * padding - padding) / S;
				log.debug("abc95 (growing to fit) width", e.id, N, e.size?.width, C);
				for (let S of e.children) S.size && (S.size.width = C);
			}
		}
		e.size = {
			width: N,
			height: P,
			x: 0,
			y: 0
		};
	}
	log.debug("setBlockSizes abc94 (done)", e.id, e?.size?.x, e?.size?.width, e?.size?.y, e?.size?.height);
}
__name(setBlockSizes, "setBlockSizes");
function layoutBlocks(e, S) {
	log.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
	let C = e.columns ?? -1;
	if (log.debug("layoutBlocks columns abc95", e.id, "=>", C, e), e.children && e.children.length > 0) {
		let w = e?.children[0]?.size?.width ?? 0, T = e.children.length * w + (e.children.length - 1) * padding;
		log.debug("widthOfChildren 88", T, "posX");
		let D = 0;
		log.debug("abc91 block?.size?.x", e.id, e?.size?.x);
		let O = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -padding, k = 0;
		for (let w of e.children) {
			let T = e;
			if (!w.size) continue;
			let { width: A, height: j } = w.size, { px: M, py: N } = calculateBlockPosition(C, D);
			if (N != k && (k = N, O = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -padding, log.debug("New row in layout for block", e.id, " and child ", w.id, k)), log.debug(`abc89 layout blocks (child) id: ${w.id} Pos: ${D} (px, py) ${M},${N} (${T?.size?.x},${T?.size?.y}) parent: ${T.id} width: ${A}${padding}`), T.size) {
				let e = A / 2;
				w.size.x = O + padding + e, log.debug(`abc91 layout blocks (calc) px, pyid:${w.id} startingPos=X${O} new startingPosX${w.size.x} ${e} padding=${padding} width=${A} halfWidth=${e} => x:${w.size.x} y:${w.size.y} ${w.widthInColumns} (width * (child?.w || 1)) / 2 ${A * (w?.widthInColumns ?? 1) / 2}`), O = w.size.x + e, w.size.y = T.size.y - T.size.height / 2 + N * (j + padding) + j / 2 + padding, log.debug(`abc88 layout blocks (calc) px, pyid:${w.id}startingPosX${O}${padding}${e}=>x:${w.size.x}y:${w.size.y}${w.widthInColumns}(width * (child?.w || 1)) / 2${A * (w?.widthInColumns ?? 1) / 2}`);
			}
			w.children && layoutBlocks(w, S);
			let P = w?.widthInColumns ?? 1;
			C > 0 && (P = Math.min(P, C - D % C)), D += P, log.debug("abc88 columnsPos", w, D);
		}
	}
	log.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
}
__name(layoutBlocks, "layoutBlocks");
function findBounds(e, { minX: S, minY: C, maxX: w, maxY: T } = {
	minX: 0,
	minY: 0,
	maxX: 0,
	maxY: 0
}) {
	if (e.size && e.id !== "root") {
		let { x: E, y: D, width: O, height: k } = e.size;
		E - O / 2 < S && (S = E - O / 2), D - k / 2 < C && (C = D - k / 2), E + O / 2 > w && (w = E + O / 2), D + k / 2 > T && (T = D + k / 2);
	}
	if (e.children) for (let E of e.children) ({minX: S, minY: C, maxX: w, maxY: T} = findBounds(E, {
		minX: S,
		minY: C,
		maxX: w,
		maxY: T
	}));
	return {
		minX: S,
		minY: C,
		maxX: w,
		maxY: T
	};
}
__name(findBounds, "findBounds");
function layout(e) {
	let S = e.getBlock("root");
	if (!S) return;
	setBlockSizes(S, e, 0, 0), layoutBlocks(S, e), log.debug("getBlocks", JSON.stringify(S, null, 2));
	let { minX: C, minY: w, maxX: T, maxY: D } = findBounds(S), O = D - w;
	return {
		x: C,
		y: w,
		width: T - C,
		height: O
	};
}
__name(layout, "layout");
function applyStyle(e, S) {
	S && e.attr("style", S);
}
__name(applyStyle, "applyStyle");
function addHtmlLabel(e, S) {
	let C = select_default(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), w = C.append("xhtml:div"), T = e.label, E = e.isNode ? "nodeLabel" : "edgeLabel", D = w.append("span");
	return D.html(sanitizeText(T, S)), applyStyle(D, e.labelStyle), D.attr("class", E), applyStyle(w, e.labelStyle), w.style("display", "inline-block"), w.style("white-space", "nowrap"), w.attr("xmlns", "http://www.w3.org/1999/xhtml"), C.node();
}
__name(addHtmlLabel, "addHtmlLabel");
var createLabel_default = /* @__PURE__ */ __name(async (S, C, w, T) => {
	let D = S || "";
	typeof D == "object" && (D = D[0]);
	let O = getConfig2();
	if (evaluate(O.flowchart.htmlLabels)) return D = D.replace(/\\n|\n/g, "<br />"), log.debug("vertexText" + D), addHtmlLabel({
		isNode: T,
		label: await replaceIconSubstring(decodeEntities(D)),
		labelStyle: C.replace("fill:", "color:")
	}, O);
	{
		let e = document.createElementNS("http://www.w3.org/2000/svg", "text");
		e.setAttribute("style", C.replace("color:", "fill:"));
		let S = [];
		S = typeof D == "string" ? D.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(D) ? D : [];
		for (let C of S) {
			let S = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			S.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), S.setAttribute("dy", "1em"), S.setAttribute("x", "0"), w ? S.setAttribute("class", "title-row") : S.setAttribute("class", "row"), S.textContent = C.trim(), e.appendChild(S);
		}
		return e;
	}
}, "createLabel"), addEdgeMarkers = /* @__PURE__ */ __name((e, S, C, w, T) => {
	S.arrowTypeStart && addEdgeMarker(e, "start", S.arrowTypeStart, C, w, T), S.arrowTypeEnd && addEdgeMarker(e, "end", S.arrowTypeEnd, C, w, T);
}, "addEdgeMarkers"), arrowTypesMap = {
	arrow_cross: "cross",
	arrow_point: "point",
	arrow_barb: "barb",
	arrow_circle: "circle",
	aggregation: "aggregation",
	extension: "extension",
	composition: "composition",
	dependency: "dependency",
	lollipop: "lollipop"
}, addEdgeMarker = /* @__PURE__ */ __name((e, S, C, w, T, D) => {
	let O = arrowTypesMap[C];
	if (!O) {
		log.warn(`Unknown arrow type: ${C}`);
		return;
	}
	let k = S === "start" ? "Start" : "End";
	e.attr(`marker-${S}`, `url(${w}#${T}_${D}-${O}${k})`);
}, "addEdgeMarker"), edgeLabels = {}, terminalLabels = {}, insertEdgeLabel = /* @__PURE__ */ __name(async (e, S) => {
	let C = getConfig2(), w = evaluate(C.flowchart.htmlLabels), T = S.labelType === "markdown" ? createText(e, S.label, {
		style: S.labelStyle,
		useHtmlLabels: w,
		addSvgBackground: !0
	}, C) : await createLabel_default(S.label, S.labelStyle), E = e.insert("g").attr("class", "edgeLabel"), D = E.insert("g").attr("class", "label");
	D.node().appendChild(T);
	let k = T.getBBox();
	if (w) {
		let e = T.children[0], S = select_default(T);
		k = e.getBoundingClientRect(), S.attr("width", k.width), S.attr("height", k.height);
	}
	D.attr("transform", "translate(" + -k.width / 2 + ", " + -k.height / 2 + ")"), edgeLabels[S.id] = E, S.width = k.width, S.height = k.height;
	let A;
	if (S.startLabelLeft) {
		let C = await createLabel_default(S.startLabelLeft, S.labelStyle), w = e.insert("g").attr("class", "edgeTerminals"), T = w.insert("g").attr("class", "inner");
		A = T.node().appendChild(C);
		let E = C.getBBox();
		T.attr("transform", "translate(" + -E.width / 2 + ", " + -E.height / 2 + ")"), terminalLabels[S.id] || (terminalLabels[S.id] = {}), terminalLabels[S.id].startLeft = w, setTerminalWidth(A, S.startLabelLeft);
	}
	if (S.startLabelRight) {
		let C = await createLabel_default(S.startLabelRight, S.labelStyle), w = e.insert("g").attr("class", "edgeTerminals"), T = w.insert("g").attr("class", "inner");
		A = w.node().appendChild(C), T.node().appendChild(C);
		let E = C.getBBox();
		T.attr("transform", "translate(" + -E.width / 2 + ", " + -E.height / 2 + ")"), terminalLabels[S.id] || (terminalLabels[S.id] = {}), terminalLabels[S.id].startRight = w, setTerminalWidth(A, S.startLabelRight);
	}
	if (S.endLabelLeft) {
		let C = await createLabel_default(S.endLabelLeft, S.labelStyle), w = e.insert("g").attr("class", "edgeTerminals"), T = w.insert("g").attr("class", "inner");
		A = T.node().appendChild(C);
		let E = C.getBBox();
		T.attr("transform", "translate(" + -E.width / 2 + ", " + -E.height / 2 + ")"), w.node().appendChild(C), terminalLabels[S.id] || (terminalLabels[S.id] = {}), terminalLabels[S.id].endLeft = w, setTerminalWidth(A, S.endLabelLeft);
	}
	if (S.endLabelRight) {
		let C = await createLabel_default(S.endLabelRight, S.labelStyle), w = e.insert("g").attr("class", "edgeTerminals"), T = w.insert("g").attr("class", "inner");
		A = T.node().appendChild(C);
		let E = C.getBBox();
		T.attr("transform", "translate(" + -E.width / 2 + ", " + -E.height / 2 + ")"), w.node().appendChild(C), terminalLabels[S.id] || (terminalLabels[S.id] = {}), terminalLabels[S.id].endRight = w, setTerminalWidth(A, S.endLabelRight);
	}
	return T;
}, "insertEdgeLabel");
function setTerminalWidth(e, S) {
	getConfig2().flowchart.htmlLabels && e && (e.style.width = S.length * 9 + "px", e.style.height = "12px");
}
__name(setTerminalWidth, "setTerminalWidth");
var positionEdgeLabel = /* @__PURE__ */ __name((e, C) => {
	log.debug("Moving label abc88 ", e.id, e.label, edgeLabels[e.id], C);
	let w = C.updatedPath ? C.updatedPath : C.originalPath, { subGraphTitleTotalMargin: T } = getSubGraphTitleMargins(getConfig2());
	if (e.label) {
		let D = edgeLabels[e.id], O = e.x, k = e.y;
		if (w) {
			let T = utils_default.calcLabelPosition(w);
			log.debug("Moving label " + e.label + " from (", O, ",", k, ") to (", T.x, ",", T.y, ") abc88"), C.updatedPath && (O = T.x, k = T.y);
		}
		D.attr("transform", `translate(${O}, ${k + T / 2})`);
	}
	if (e.startLabelLeft) {
		let C = terminalLabels[e.id].startLeft, T = e.x, E = e.y;
		if (w) {
			let C = utils_default.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", w);
			T = C.x, E = C.y;
		}
		C.attr("transform", `translate(${T}, ${E})`);
	}
	if (e.startLabelRight) {
		let C = terminalLabels[e.id].startRight, T = e.x, E = e.y;
		if (w) {
			let C = utils_default.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", w);
			T = C.x, E = C.y;
		}
		C.attr("transform", `translate(${T}, ${E})`);
	}
	if (e.endLabelLeft) {
		let C = terminalLabels[e.id].endLeft, T = e.x, E = e.y;
		if (w) {
			let C = utils_default.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", w);
			T = C.x, E = C.y;
		}
		C.attr("transform", `translate(${T}, ${E})`);
	}
	if (e.endLabelRight) {
		let C = terminalLabels[e.id].endRight, T = e.x, E = e.y;
		if (w) {
			let C = utils_default.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", w);
			T = C.x, E = C.y;
		}
		C.attr("transform", `translate(${T}, ${E})`);
	}
}, "positionEdgeLabel"), outsideNode = /* @__PURE__ */ __name((e, S) => {
	let C = e.x, w = e.y, T = Math.abs(S.x - C), E = Math.abs(S.y - w), D = e.width / 2, O = e.height / 2;
	return T >= D || E >= O;
}, "outsideNode"), intersection = /* @__PURE__ */ __name((e, S, C) => {
	log.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(S)}
  insidePoint : ${JSON.stringify(C)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
	let w = e.x, T = e.y, D = Math.abs(w - C.x), O = e.width / 2, k = C.x < S.x ? O - D : O + D, A = e.height / 2, j = Math.abs(S.y - C.y), M = Math.abs(S.x - C.x);
	if (Math.abs(T - S.y) * O > Math.abs(w - S.x) * A) {
		let e = C.y < S.y ? S.y - A - T : T - A - S.y;
		k = M * e / j;
		let w = {
			x: C.x < S.x ? C.x + k : C.x - M + k,
			y: C.y < S.y ? C.y + j - e : C.y - j + e
		};
		return k === 0 && (w.x = S.x, w.y = S.y), M === 0 && (w.x = S.x), j === 0 && (w.y = S.y), log.debug(`abc89 topp/bott calc, Q ${j}, q ${e}, R ${M}, r ${k}`, w), w;
	} else {
		k = C.x < S.x ? S.x - O - w : w - O - S.x;
		let e = j * k / M, T = C.x < S.x ? C.x + M - k : C.x - M + k, D = C.y < S.y ? C.y + e : C.y - e;
		return log.debug(`sides calc abc89, Q ${j}, q ${e}, R ${M}, r ${k}`, {
			_x: T,
			_y: D
		}), k === 0 && (T = S.x, D = S.y), M === 0 && (T = S.x), j === 0 && (D = S.y), {
			x: T,
			y: D
		};
	}
}, "intersection"), cutPathAtIntersect = /* @__PURE__ */ __name((e, S) => {
	log.debug("abc88 cutPathAtIntersect", e, S);
	let C = [], w = e[0], T = !1;
	return e.forEach((e) => {
		if (!outsideNode(S, e) && !T) {
			let E = intersection(S, w, e), D = !1;
			C.forEach((e) => {
				D ||= e.x === E.x && e.y === E.y;
			}), C.some((e) => e.x === E.x && e.y === E.y) || C.push(E), T = !0;
		} else w = e, T || C.push(e);
	}), C;
}, "cutPathAtIntersect"), insertEdge = /* @__PURE__ */ __name(function(e, S, C, w, T, D, O) {
	let A = C.points;
	log.debug("abc88 InsertEdge: edge=", C, "e=", S);
	let j = !1, N = D.node(S.v);
	var P = D.node(S.w);
	P?.intersect && N?.intersect && (A = A.slice(1, C.points.length - 1), A.unshift(N.intersect(A[0])), A.push(P.intersect(A[A.length - 1]))), C.toCluster && (log.debug("to cluster abc88", w[C.toCluster]), A = cutPathAtIntersect(C.points, w[C.toCluster].node), j = !0), C.fromCluster && (log.debug("from cluster abc88", w[C.fromCluster]), A = cutPathAtIntersect(A.reverse(), w[C.fromCluster].node).reverse(), j = !0);
	let F = A.filter((e) => !Number.isNaN(e.y)), I = basis_default;
	C.curve && (T === "graph" || T === "flowchart") && (I = C.curve);
	let { x: L, y: R } = getLineFunctionsWithOffset(C), V = line_default().x(L).y(R).curve(I), H;
	switch (C.thickness) {
		case "normal":
			H = "edge-thickness-normal";
			break;
		case "thick":
			H = "edge-thickness-thick";
			break;
		case "invisible":
			H = "edge-thickness-thick";
			break;
		default: H = "";
	}
	switch (C.pattern) {
		case "solid":
			H += " edge-pattern-solid";
			break;
		case "dotted":
			H += " edge-pattern-dotted";
			break;
		case "dashed":
			H += " edge-pattern-dashed";
			break;
	}
	let U = e.append("path").attr("d", V(F)).attr("id", C.id).attr("class", " " + H + (C.classes ? " " + C.classes : "")).attr("style", C.style), G = "";
	(getConfig2().flowchart.arrowMarkerAbsolute || getConfig2().state.arrowMarkerAbsolute) && (G = getUrl(!0)), addEdgeMarkers(U, C, G, O, T);
	let K = {};
	return j && (K.updatedPath = A), K.originalPath = C.points, K;
}, "insertEdge"), expandAndDeduplicateDirections = /* @__PURE__ */ __name((e) => {
	let S = /* @__PURE__ */ new Set();
	for (let C of e) switch (C) {
		case "x":
			S.add("right"), S.add("left");
			break;
		case "y":
			S.add("up"), S.add("down");
			break;
		default:
			S.add(C);
			break;
	}
	return S;
}, "expandAndDeduplicateDirections"), getArrowPoints = /* @__PURE__ */ __name((e, S, C) => {
	let w = expandAndDeduplicateDirections(e), T = S.height + 2 * C.padding, E = T / 2, D = S.width + 2 * E + C.padding, O = C.padding / 2;
	return w.has("right") && w.has("left") && w.has("up") && w.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: E,
			y: 0
		},
		{
			x: D / 2,
			y: 2 * O
		},
		{
			x: D - E,
			y: 0
		},
		{
			x: D,
			y: 0
		},
		{
			x: D,
			y: -T / 3
		},
		{
			x: D + 2 * O,
			y: -T / 2
		},
		{
			x: D,
			y: -2 * T / 3
		},
		{
			x: D,
			y: -T
		},
		{
			x: D - E,
			y: -T
		},
		{
			x: D / 2,
			y: -T - 2 * O
		},
		{
			x: E,
			y: -T
		},
		{
			x: 0,
			y: -T
		},
		{
			x: 0,
			y: -2 * T / 3
		},
		{
			x: -2 * O,
			y: -T / 2
		},
		{
			x: 0,
			y: -T / 3
		}
	] : w.has("right") && w.has("left") && w.has("up") ? [
		{
			x: E,
			y: 0
		},
		{
			x: D - E,
			y: 0
		},
		{
			x: D,
			y: -T / 2
		},
		{
			x: D - E,
			y: -T
		},
		{
			x: E,
			y: -T
		},
		{
			x: 0,
			y: -T / 2
		}
	] : w.has("right") && w.has("left") && w.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: E,
			y: -T
		},
		{
			x: D - E,
			y: -T
		},
		{
			x: D,
			y: 0
		}
	] : w.has("right") && w.has("up") && w.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: D,
			y: -E
		},
		{
			x: D,
			y: -T + E
		},
		{
			x: 0,
			y: -T
		}
	] : w.has("left") && w.has("up") && w.has("down") ? [
		{
			x: D,
			y: 0
		},
		{
			x: 0,
			y: -E
		},
		{
			x: 0,
			y: -T + E
		},
		{
			x: D,
			y: -T
		}
	] : w.has("right") && w.has("left") ? [
		{
			x: E,
			y: 0
		},
		{
			x: E,
			y: -O
		},
		{
			x: D - E,
			y: -O
		},
		{
			x: D - E,
			y: 0
		},
		{
			x: D,
			y: -T / 2
		},
		{
			x: D - E,
			y: -T
		},
		{
			x: D - E,
			y: -T + O
		},
		{
			x: E,
			y: -T + O
		},
		{
			x: E,
			y: -T
		},
		{
			x: 0,
			y: -T / 2
		}
	] : w.has("up") && w.has("down") ? [
		{
			x: D / 2,
			y: 0
		},
		{
			x: 0,
			y: -O
		},
		{
			x: E,
			y: -O
		},
		{
			x: E,
			y: -T + O
		},
		{
			x: 0,
			y: -T + O
		},
		{
			x: D / 2,
			y: -T
		},
		{
			x: D,
			y: -T + O
		},
		{
			x: D - E,
			y: -T + O
		},
		{
			x: D - E,
			y: -O
		},
		{
			x: D,
			y: -O
		}
	] : w.has("right") && w.has("up") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: D,
			y: -E
		},
		{
			x: 0,
			y: -T
		}
	] : w.has("right") && w.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: D,
			y: 0
		},
		{
			x: 0,
			y: -T
		}
	] : w.has("left") && w.has("up") ? [
		{
			x: D,
			y: 0
		},
		{
			x: 0,
			y: -E
		},
		{
			x: D,
			y: -T
		}
	] : w.has("left") && w.has("down") ? [
		{
			x: D,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: D,
			y: -T
		}
	] : w.has("right") ? [
		{
			x: E,
			y: -O
		},
		{
			x: E,
			y: -O
		},
		{
			x: D - E,
			y: -O
		},
		{
			x: D - E,
			y: 0
		},
		{
			x: D,
			y: -T / 2
		},
		{
			x: D - E,
			y: -T
		},
		{
			x: D - E,
			y: -T + O
		},
		{
			x: E,
			y: -T + O
		},
		{
			x: E,
			y: -T + O
		}
	] : w.has("left") ? [
		{
			x: E,
			y: 0
		},
		{
			x: E,
			y: -O
		},
		{
			x: D - E,
			y: -O
		},
		{
			x: D - E,
			y: -T + O
		},
		{
			x: E,
			y: -T + O
		},
		{
			x: E,
			y: -T
		},
		{
			x: 0,
			y: -T / 2
		}
	] : w.has("up") ? [
		{
			x: E,
			y: -O
		},
		{
			x: E,
			y: -T + O
		},
		{
			x: 0,
			y: -T + O
		},
		{
			x: D / 2,
			y: -T
		},
		{
			x: D,
			y: -T + O
		},
		{
			x: D - E,
			y: -T + O
		},
		{
			x: D - E,
			y: -O
		}
	] : w.has("down") ? [
		{
			x: D / 2,
			y: 0
		},
		{
			x: 0,
			y: -O
		},
		{
			x: E,
			y: -O
		},
		{
			x: E,
			y: -T + O
		},
		{
			x: D - E,
			y: -T + O
		},
		{
			x: D - E,
			y: -O
		},
		{
			x: D,
			y: -O
		}
	] : [{
		x: 0,
		y: 0
	}];
}, "getArrowPoints");
function intersectNode(e, S) {
	return e.intersect(S);
}
__name(intersectNode, "intersectNode");
var intersect_node_default = intersectNode;
function intersectEllipse(e, S, C, w) {
	var T = e.x, E = e.y, D = T - w.x, O = E - w.y, k = Math.sqrt(S * S * O * O + C * C * D * D), A = Math.abs(S * C * D / k);
	w.x < T && (A = -A);
	var j = Math.abs(S * C * O / k);
	return w.y < E && (j = -j), {
		x: T + A,
		y: E + j
	};
}
__name(intersectEllipse, "intersectEllipse");
var intersect_ellipse_default = intersectEllipse;
function intersectCircle(e, S, C) {
	return intersect_ellipse_default(e, S, S, C);
}
__name(intersectCircle, "intersectCircle");
var intersect_circle_default = intersectCircle;
function intersectLine(e, S, C, w) {
	var T = S.y - e.y, E, D = e.x - S.x, O, k = S.x * e.y - e.x * S.y, A, j, M, N = T * C.x + D * C.y + k, P = T * w.x + D * w.y + k, F, I, L, R, z;
	if (!(N !== 0 && P !== 0 && sameSign(N, P)) && (E = w.y - C.y, O = C.x - w.x, A = w.x * C.y - C.x * w.y, j = E * e.x + O * e.y + A, M = E * S.x + O * S.y + A, !(j !== 0 && M !== 0 && sameSign(j, M)) && (F = T * O - E * D, F !== 0))) return I = Math.abs(F / 2), L = D * A - O * k, R = L < 0 ? (L - I) / F : (L + I) / F, L = E * k - T * A, z = L < 0 ? (L - I) / F : (L + I) / F, {
		x: R,
		y: z
	};
}
__name(intersectLine, "intersectLine");
function sameSign(e, S) {
	return e * S > 0;
}
__name(sameSign, "sameSign");
var intersect_line_default = intersectLine, intersect_polygon_default = intersectPolygon;
function intersectPolygon(e, S, C) {
	var w = e.x, T = e.y, E = [], D = Infinity, O = Infinity;
	typeof S.forEach == "function" ? S.forEach(function(e) {
		D = Math.min(D, e.x), O = Math.min(O, e.y);
	}) : (D = Math.min(D, S.x), O = Math.min(O, S.y));
	for (var k = w - e.width / 2 - D, A = T - e.height / 2 - O, j = 0; j < S.length; j++) {
		var M = S[j], N = S[j < S.length - 1 ? j + 1 : 0], P = intersect_line_default(e, C, {
			x: k + M.x,
			y: A + M.y
		}, {
			x: k + N.x,
			y: A + N.y
		});
		P && E.push(P);
	}
	return E.length ? (E.length > 1 && E.sort(function(e, S) {
		var w = e.x - C.x, T = e.y - C.y, E = Math.sqrt(w * w + T * T), D = S.x - C.x, O = S.y - C.y, k = Math.sqrt(D * D + O * O);
		return E < k ? -1 : E === k ? 0 : 1;
	}), E[0]) : e;
}
__name(intersectPolygon, "intersectPolygon");
var intersect_default = {
	node: intersect_node_default,
	circle: intersect_circle_default,
	ellipse: intersect_ellipse_default,
	polygon: intersect_polygon_default,
	rect: /* @__PURE__ */ __name((e, S) => {
		var C = e.x, w = e.y, T = S.x - C, E = S.y - w, D = e.width / 2, O = e.height / 2, k, A;
		return Math.abs(E) * D > Math.abs(T) * O ? (E < 0 && (O = -O), k = E === 0 ? 0 : O * T / E, A = O) : (T < 0 && (D = -D), k = D, A = T === 0 ? 0 : D * E / T), {
			x: C + k,
			y: w + A
		};
	}, "intersectRect")
}, labelHelper = /* @__PURE__ */ __name(async (S, C, w, T) => {
	let E = getConfig2(), k, j = C.useHtmlLabels || evaluate(E.flowchart.htmlLabels);
	k = w || "node default";
	let N = S.insert("g").attr("class", k).attr("id", C.domId || C.id), P = N.insert("g").attr("class", "label").attr("style", C.labelStyle), I;
	I = C.labelText === void 0 ? "" : typeof C.labelText == "string" ? C.labelText : C.labelText[0];
	let L = P.node(), R;
	R = C.labelType === "markdown" ? createText(P, sanitizeText(decodeEntities(I), E), {
		useHtmlLabels: j,
		width: C.width || E.flowchart.wrappingWidth,
		classes: "markdown-node-label"
	}, E) : L.appendChild(await createLabel_default(sanitizeText(decodeEntities(I), E), C.labelStyle, !1, T));
	let z = R.getBBox(), B = C.padding / 2;
	if (evaluate(E.flowchart.htmlLabels)) {
		let e = R.children[0], S = select_default(R), C = e.getElementsByTagName("img");
		if (C) {
			let e = I.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all([...C].map((S) => new Promise((C) => {
				function w() {
					if (S.style.display = "flex", S.style.flexDirection = "column", e) {
						let e = E.fontSize ? E.fontSize : window.getComputedStyle(document.body).fontSize, C = parseInt(e, 10) * 5 + "px";
						S.style.minWidth = C, S.style.maxWidth = C;
					} else S.style.width = "100%";
					C(S);
				}
				__name(w, "setupImage"), setTimeout(() => {
					S.complete && w();
				}), S.addEventListener("error", w), S.addEventListener("load", w);
			})));
		}
		z = e.getBoundingClientRect(), S.attr("width", z.width), S.attr("height", z.height);
	}
	return j ? P.attr("transform", "translate(" + -z.width / 2 + ", " + -z.height / 2 + ")") : P.attr("transform", "translate(0, " + -z.height / 2 + ")"), C.centerLabel && P.attr("transform", "translate(" + -z.width / 2 + ", " + -z.height / 2 + ")"), P.insert("rect", ":first-child"), {
		shapeSvg: N,
		bbox: z,
		halfPadding: B,
		label: P
	};
}, "labelHelper"), updateNodeBounds = /* @__PURE__ */ __name((e, S) => {
	let C = S.node().getBBox();
	e.width = C.width, e.height = C.height;
}, "updateNodeBounds");
function insertPolygonShape(e, S, C, w) {
	return e.insert("polygon", ":first-child").attr("points", w.map(function(e) {
		return e.x + "," + e.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -S / 2 + "," + C / 2 + ")");
}
__name(insertPolygonShape, "insertPolygonShape");
var note_default = /* @__PURE__ */ __name(async (e, S) => {
	S.useHtmlLabels || getConfig2().flowchart.htmlLabels || (S.centerLabel = !0);
	let { shapeSvg: C, bbox: w, halfPadding: T } = await labelHelper(e, S, "node " + S.classes, !0);
	log.info("Classes = ", S.classes);
	let D = C.insert("rect", ":first-child");
	return D.attr("rx", S.rx).attr("ry", S.ry).attr("x", -w.width / 2 - T).attr("y", -w.height / 2 - T).attr("width", w.width + S.padding).attr("height", w.height + S.padding), updateNodeBounds(S, D), S.intersect = function(e) {
		return intersect_default.rect(S, e);
	}, C;
}, "note"), formatClass = /* @__PURE__ */ __name((e) => e ? " " + e : "", "formatClass"), getClassesFromNode = /* @__PURE__ */ __name((e, S) => `${S || "node default"}${formatClass(e.classes)} ${formatClass(e.class)}`, "getClassesFromNode"), question = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding + (w.height + S.padding), D = [
		{
			x: T / 2,
			y: 0
		},
		{
			x: T,
			y: -T / 2
		},
		{
			x: T / 2,
			y: -T
		},
		{
			x: 0,
			y: -T / 2
		}
	];
	log.info("Question main (Circle)");
	let O = insertPolygonShape(C, T, T, D);
	return O.attr("style", S.style), updateNodeBounds(S, O), S.intersect = function(e) {
		return log.warn("Intersect called"), intersect_default.polygon(S, D, e);
	}, C;
}, "question"), choice = /* @__PURE__ */ __name((e, S) => {
	let C = e.insert("g").attr("class", "node default").attr("id", S.domId || S.id);
	return C.insert("polygon", ":first-child").attr("points", [
		{
			x: 0,
			y: 28 / 2
		},
		{
			x: 28 / 2,
			y: 0
		},
		{
			x: 0,
			y: -28 / 2
		},
		{
			x: -28 / 2,
			y: 0
		}
	].map(function(e) {
		return e.x + "," + e.y;
	}).join(" ")).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), S.width = 28, S.height = 28, S.intersect = function(e) {
		return intersect_default.circle(S, 14, e);
	}, C;
}, "choice"), hexagon = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.height + S.padding, E = T / 4, D = w.width + 2 * E + S.padding, O = [
		{
			x: E,
			y: 0
		},
		{
			x: D - E,
			y: 0
		},
		{
			x: D,
			y: -T / 2
		},
		{
			x: D - E,
			y: -T
		},
		{
			x: E,
			y: -T
		},
		{
			x: 0,
			y: -T / 2
		}
	], k = insertPolygonShape(C, D, T, O);
	return k.attr("style", S.style), updateNodeBounds(S, k), S.intersect = function(e) {
		return intersect_default.polygon(S, O, e);
	}, C;
}, "hexagon"), block_arrow = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, void 0, !0), T = w.height + 2 * S.padding, E = T / 2, D = w.width + 2 * E + S.padding, O = getArrowPoints(S.directions, w, S), k = insertPolygonShape(C, D, T, O);
	return k.attr("style", S.style), updateNodeBounds(S, k), S.intersect = function(e) {
		return intersect_default.polygon(S, O, e);
	}, C;
}, "block_arrow"), rect_left_inv_arrow = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding, E = w.height + S.padding, D = [
		{
			x: -E / 2,
			y: 0
		},
		{
			x: T,
			y: 0
		},
		{
			x: T,
			y: -E
		},
		{
			x: -E / 2,
			y: -E
		},
		{
			x: 0,
			y: -E / 2
		}
	];
	return insertPolygonShape(C, T, E, D).attr("style", S.style), S.width = T + E, S.height = E, S.intersect = function(e) {
		return intersect_default.polygon(S, D, e);
	}, C;
}, "rect_left_inv_arrow"), lean_right = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S), !0), T = w.width + S.padding, E = w.height + S.padding, D = [
		{
			x: -2 * E / 6,
			y: 0
		},
		{
			x: T - E / 6,
			y: 0
		},
		{
			x: T + 2 * E / 6,
			y: -E
		},
		{
			x: E / 6,
			y: -E
		}
	], O = insertPolygonShape(C, T, E, D);
	return O.attr("style", S.style), updateNodeBounds(S, O), S.intersect = function(e) {
		return intersect_default.polygon(S, D, e);
	}, C;
}, "lean_right"), lean_left = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding, E = w.height + S.padding, D = [
		{
			x: 2 * E / 6,
			y: 0
		},
		{
			x: T + E / 6,
			y: 0
		},
		{
			x: T - 2 * E / 6,
			y: -E
		},
		{
			x: -E / 6,
			y: -E
		}
	], O = insertPolygonShape(C, T, E, D);
	return O.attr("style", S.style), updateNodeBounds(S, O), S.intersect = function(e) {
		return intersect_default.polygon(S, D, e);
	}, C;
}, "lean_left"), trapezoid = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding, E = w.height + S.padding, D = [
		{
			x: -2 * E / 6,
			y: 0
		},
		{
			x: T + 2 * E / 6,
			y: 0
		},
		{
			x: T - E / 6,
			y: -E
		},
		{
			x: E / 6,
			y: -E
		}
	], O = insertPolygonShape(C, T, E, D);
	return O.attr("style", S.style), updateNodeBounds(S, O), S.intersect = function(e) {
		return intersect_default.polygon(S, D, e);
	}, C;
}, "trapezoid"), inv_trapezoid = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding, E = w.height + S.padding, D = [
		{
			x: E / 6,
			y: 0
		},
		{
			x: T - E / 6,
			y: 0
		},
		{
			x: T + 2 * E / 6,
			y: -E
		},
		{
			x: -2 * E / 6,
			y: -E
		}
	], O = insertPolygonShape(C, T, E, D);
	return O.attr("style", S.style), updateNodeBounds(S, O), S.intersect = function(e) {
		return intersect_default.polygon(S, D, e);
	}, C;
}, "inv_trapezoid"), rect_right_inv_arrow = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding, E = w.height + S.padding, D = [
		{
			x: 0,
			y: 0
		},
		{
			x: T + E / 2,
			y: 0
		},
		{
			x: T,
			y: -E / 2
		},
		{
			x: T + E / 2,
			y: -E
		},
		{
			x: 0,
			y: -E
		}
	], O = insertPolygonShape(C, T, E, D);
	return O.attr("style", S.style), updateNodeBounds(S, O), S.intersect = function(e) {
		return intersect_default.polygon(S, D, e);
	}, C;
}, "rect_right_inv_arrow"), cylinder = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding, E = T / 2, D = E / (2.5 + T / 50), O = w.height + D + S.padding, k = "M 0," + D + " a " + E + "," + D + " 0,0,0 " + T + " 0 a " + E + "," + D + " 0,0,0 " + -T + " 0 l 0," + O + " a " + E + "," + D + " 0,0,0 " + T + " 0 l 0," + -O;
	return updateNodeBounds(S, C.attr("label-offset-y", D).insert("path", ":first-child").attr("style", S.style).attr("d", k).attr("transform", "translate(" + -T / 2 + "," + -(O / 2 + D) + ")")), S.intersect = function(e) {
		let C = intersect_default.rect(S, e), w = C.x - S.x;
		if (E != 0 && (Math.abs(w) < S.width / 2 || Math.abs(w) == S.width / 2 && Math.abs(C.y - S.y) > S.height / 2 - D)) {
			let T = D * D * (1 - w * w / (E * E));
			T != 0 && (T = Math.sqrt(T)), T = D - T, e.y - S.y > 0 && (T = -T), C.y += T;
		}
		return C;
	}, C;
}, "cylinder"), rect = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w, halfPadding: T } = await labelHelper(e, S, "node " + S.classes + " " + S.class, !0), D = C.insert("rect", ":first-child"), O = S.positioned ? S.width : w.width + S.padding, k = S.positioned ? S.height : w.height + S.padding, A = S.positioned ? -O / 2 : -w.width / 2 - T, j = S.positioned ? -k / 2 : -w.height / 2 - T;
	if (D.attr("class", "basic label-container").attr("style", S.style).attr("rx", S.rx).attr("ry", S.ry).attr("x", A).attr("y", j).attr("width", O).attr("height", k), S.props) {
		let e = new Set(Object.keys(S.props));
		S.props.borders && (applyNodePropertyBorders(D, S.props.borders, O, k), e.delete("borders")), e.forEach((e) => {
			log.warn(`Unknown node property ${e}`);
		});
	}
	return updateNodeBounds(S, D), S.intersect = function(e) {
		return intersect_default.rect(S, e);
	}, C;
}, "rect"), composite = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w, halfPadding: T } = await labelHelper(e, S, "node " + S.classes, !0), D = C.insert("rect", ":first-child"), O = S.positioned ? S.width : w.width + S.padding, k = S.positioned ? S.height : w.height + S.padding, A = S.positioned ? -O / 2 : -w.width / 2 - T, j = S.positioned ? -k / 2 : -w.height / 2 - T;
	if (D.attr("class", "basic cluster composite label-container").attr("style", S.style).attr("rx", S.rx).attr("ry", S.ry).attr("x", A).attr("y", j).attr("width", O).attr("height", k), S.props) {
		let e = new Set(Object.keys(S.props));
		S.props.borders && (applyNodePropertyBorders(D, S.props.borders, O, k), e.delete("borders")), e.forEach((e) => {
			log.warn(`Unknown node property ${e}`);
		});
	}
	return updateNodeBounds(S, D), S.intersect = function(e) {
		return intersect_default.rect(S, e);
	}, C;
}, "composite"), labelRect = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C } = await labelHelper(e, S, "label", !0);
	log.trace("Classes = ", S.class);
	let w = C.insert("rect", ":first-child");
	if (w.attr("width", 0).attr("height", 0), C.attr("class", "label edgeLabel"), S.props) {
		let e = new Set(Object.keys(S.props));
		S.props.borders && (applyNodePropertyBorders(w, S.props.borders, 0, 0), e.delete("borders")), e.forEach((e) => {
			log.warn(`Unknown node property ${e}`);
		});
	}
	return updateNodeBounds(S, w), S.intersect = function(e) {
		return intersect_default.rect(S, e);
	}, C;
}, "labelRect");
function applyNodePropertyBorders(e, S, C, w) {
	let T = [], O = /* @__PURE__ */ __name((e) => {
		T.push(e, 0);
	}, "addBorder"), k = /* @__PURE__ */ __name((e) => {
		T.push(0, e);
	}, "skipBorder");
	S.includes("t") ? (log.debug("add top border"), O(C)) : k(C), S.includes("r") ? (log.debug("add right border"), O(w)) : k(w), S.includes("b") ? (log.debug("add bottom border"), O(C)) : k(C), S.includes("l") ? (log.debug("add left border"), O(w)) : k(w), e.attr("stroke-dasharray", T.join(" "));
}
__name(applyNodePropertyBorders, "applyNodePropertyBorders");
var rectWithTitle = /* @__PURE__ */ __name(async (e, S) => {
	let C;
	C = S.classes ? "node " + S.classes : "node default";
	let w = e.insert("g").attr("class", C).attr("id", S.domId || S.id), T = w.insert("rect", ":first-child"), D = w.insert("line"), k = w.insert("g").attr("class", "label"), A = S.labelText.flat ? S.labelText.flat() : S.labelText, j = "";
	j = typeof A == "object" ? A[0] : A, log.info("Label text abc79", j, A, typeof A == "object");
	let N = k.node().appendChild(await createLabel_default(j, S.labelStyle, !0, !0)), P = {
		width: 0,
		height: 0
	};
	if (evaluate(getConfig2().flowchart.htmlLabels)) {
		let e = N.children[0], S = select_default(N);
		P = e.getBoundingClientRect(), S.attr("width", P.width), S.attr("height", P.height);
	}
	log.info("Text 2", A);
	let I = A.slice(1, A.length), L = N.getBBox(), R = k.node().appendChild(await createLabel_default(I.join ? I.join("<br/>") : I, S.labelStyle, !0, !0));
	if (evaluate(getConfig2().flowchart.htmlLabels)) {
		let e = R.children[0], S = select_default(R);
		P = e.getBoundingClientRect(), S.attr("width", P.width), S.attr("height", P.height);
	}
	let z = S.padding / 2;
	return select_default(R).attr("transform", "translate( " + (P.width > L.width ? 0 : (L.width - P.width) / 2) + ", " + (L.height + z + 5) + ")"), select_default(N).attr("transform", "translate( " + (P.width < L.width ? 0 : -(L.width - P.width) / 2) + ", 0)"), P = k.node().getBBox(), k.attr("transform", "translate(" + -P.width / 2 + ", " + (-P.height / 2 - z + 3) + ")"), T.attr("class", "outer title-state").attr("x", -P.width / 2 - z).attr("y", -P.height / 2 - z).attr("width", P.width + S.padding).attr("height", P.height + S.padding), D.attr("class", "divider").attr("x1", -P.width / 2 - z).attr("x2", P.width / 2 + z).attr("y1", -P.height / 2 - z + L.height + z).attr("y2", -P.height / 2 - z + L.height + z), updateNodeBounds(S, T), S.intersect = function(e) {
		return intersect_default.rect(S, e);
	}, w;
}, "rectWithTitle"), stadium = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.height + S.padding, E = w.width + T / 4 + S.padding;
	return updateNodeBounds(S, C.insert("rect", ":first-child").attr("style", S.style).attr("rx", T / 2).attr("ry", T / 2).attr("x", -E / 2).attr("y", -T / 2).attr("width", E).attr("height", T)), S.intersect = function(e) {
		return intersect_default.rect(S, e);
	}, C;
}, "stadium"), circle2 = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w, halfPadding: T } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), D = C.insert("circle", ":first-child");
	return D.attr("style", S.style).attr("rx", S.rx).attr("ry", S.ry).attr("r", w.width / 2 + T).attr("width", w.width + S.padding).attr("height", w.height + S.padding), log.info("Circle main"), updateNodeBounds(S, D), S.intersect = function(e) {
		return log.info("Circle intersect", S, w.width / 2 + T, e), intersect_default.circle(S, w.width / 2 + T, e);
	}, C;
}, "circle"), doublecircle = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w, halfPadding: T } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), D = C.insert("g", ":first-child"), O = D.insert("circle"), k = D.insert("circle");
	return D.attr("class", S.class), O.attr("style", S.style).attr("rx", S.rx).attr("ry", S.ry).attr("r", w.width / 2 + T + 5).attr("width", w.width + S.padding + 10).attr("height", w.height + S.padding + 10), k.attr("style", S.style).attr("rx", S.rx).attr("ry", S.ry).attr("r", w.width / 2 + T).attr("width", w.width + S.padding).attr("height", w.height + S.padding), log.info("DoubleCircle main"), updateNodeBounds(S, O), S.intersect = function(e) {
		return log.info("DoubleCircle intersect", S, w.width / 2 + T + 5, e), intersect_default.circle(S, w.width / 2 + T + 5, e);
	}, C;
}, "doublecircle"), subroutine = /* @__PURE__ */ __name(async (e, S) => {
	let { shapeSvg: C, bbox: w } = await labelHelper(e, S, getClassesFromNode(S, void 0), !0), T = w.width + S.padding, E = w.height + S.padding, D = [
		{
			x: 0,
			y: 0
		},
		{
			x: T,
			y: 0
		},
		{
			x: T,
			y: -E
		},
		{
			x: 0,
			y: -E
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: T + 8,
			y: 0
		},
		{
			x: T + 8,
			y: -E
		},
		{
			x: -8,
			y: -E
		},
		{
			x: -8,
			y: 0
		}
	], O = insertPolygonShape(C, T, E, D);
	return O.attr("style", S.style), updateNodeBounds(S, O), S.intersect = function(e) {
		return intersect_default.polygon(S, D, e);
	}, C;
}, "subroutine"), start = /* @__PURE__ */ __name((e, S) => {
	let C = e.insert("g").attr("class", "node default").attr("id", S.domId || S.id), w = C.insert("circle", ":first-child");
	return w.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), updateNodeBounds(S, w), S.intersect = function(e) {
		return intersect_default.circle(S, 7, e);
	}, C;
}, "start"), forkJoin = /* @__PURE__ */ __name((e, S, C) => {
	let w = e.insert("g").attr("class", "node default").attr("id", S.domId || S.id), T = 70, E = 10;
	return C === "LR" && (T = 10, E = 70), updateNodeBounds(S, w.append("rect").attr("x", -1 * T / 2).attr("y", -1 * E / 2).attr("width", T).attr("height", E).attr("class", "fork-join")), S.height += S.padding / 2, S.width += S.padding / 2, S.intersect = function(e) {
		return intersect_default.rect(S, e);
	}, w;
}, "forkJoin"), shapes = {
	rhombus: question,
	composite,
	question,
	rect,
	labelRect,
	rectWithTitle,
	choice,
	circle: circle2,
	doublecircle,
	stadium,
	hexagon,
	block_arrow,
	rect_left_inv_arrow,
	lean_right,
	lean_left,
	trapezoid,
	inv_trapezoid,
	rect_right_inv_arrow,
	cylinder,
	start,
	end: /* @__PURE__ */ __name((e, S) => {
		let C = e.insert("g").attr("class", "node default").attr("id", S.domId || S.id), w = C.insert("circle", ":first-child"), T = C.insert("circle", ":first-child");
		return T.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), w.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), updateNodeBounds(S, T), S.intersect = function(e) {
			return intersect_default.circle(S, 7, e);
		}, C;
	}, "end"),
	note: note_default,
	subroutine,
	fork: forkJoin,
	join: forkJoin,
	class_box: /* @__PURE__ */ __name(async (e, S) => {
		let C = S.padding / 2, w;
		w = S.classes ? "node " + S.classes : "node default";
		let T = e.insert("g").attr("class", w).attr("id", S.domId || S.id), E = T.insert("rect", ":first-child"), D = T.insert("line"), k = T.insert("line"), A = 0, j = 4, N = T.insert("g").attr("class", "label"), P = 0, I = S.classData.annotations?.[0], L = S.classData.annotations[0] ? "«" + S.classData.annotations[0] + "»" : "", R = N.node().appendChild(await createLabel_default(L, S.labelStyle, !0, !0)), z = R.getBBox();
		if (evaluate(getConfig2().flowchart.htmlLabels)) {
			let e = R.children[0], S = select_default(R);
			z = e.getBoundingClientRect(), S.attr("width", z.width), S.attr("height", z.height);
		}
		S.classData.annotations[0] && (j += z.height + 4, A += z.width);
		let B = S.classData.label;
		S.classData.type !== void 0 && S.classData.type !== "" && (getConfig2().flowchart.htmlLabels ? B += "&lt;" + S.classData.type + "&gt;" : B += "<" + S.classData.type + ">");
		let V = N.node().appendChild(await createLabel_default(B, S.labelStyle, !0, !0));
		select_default(V).attr("class", "classTitle");
		let H = V.getBBox();
		if (evaluate(getConfig2().flowchart.htmlLabels)) {
			let e = V.children[0], S = select_default(V);
			H = e.getBoundingClientRect(), S.attr("width", H.width), S.attr("height", H.height);
		}
		j += H.height + 4, H.width > A && (A = H.width);
		let U = [];
		S.classData.members.forEach(async (e) => {
			let C = e.getDisplayDetails(), w = C.displayText;
			getConfig2().flowchart.htmlLabels && (w = w.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			let T = N.node().appendChild(await createLabel_default(w, C.cssStyle ? C.cssStyle : S.labelStyle, !0, !0)), E = T.getBBox();
			if (evaluate(getConfig2().flowchart.htmlLabels)) {
				let e = T.children[0], S = select_default(T);
				E = e.getBoundingClientRect(), S.attr("width", E.width), S.attr("height", E.height);
			}
			E.width > A && (A = E.width), j += E.height + 4, U.push(T);
		}), j += 8;
		let W = [];
		if (S.classData.methods.forEach(async (e) => {
			let C = e.getDisplayDetails(), w = C.displayText;
			getConfig2().flowchart.htmlLabels && (w = w.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			let T = N.node().appendChild(await createLabel_default(w, C.cssStyle ? C.cssStyle : S.labelStyle, !0, !0)), E = T.getBBox();
			if (evaluate(getConfig2().flowchart.htmlLabels)) {
				let e = T.children[0], S = select_default(T);
				E = e.getBoundingClientRect(), S.attr("width", E.width), S.attr("height", E.height);
			}
			E.width > A && (A = E.width), j += E.height + 4, W.push(T);
		}), j += 8, I) {
			let e = (A - z.width) / 2;
			select_default(R).attr("transform", "translate( " + (-1 * A / 2 + e) + ", " + -1 * j / 2 + ")"), P = z.height + 4;
		}
		let G = (A - H.width) / 2;
		return select_default(V).attr("transform", "translate( " + (-1 * A / 2 + G) + ", " + (-1 * j / 2 + P) + ")"), P += H.height + 4, D.attr("class", "divider").attr("x1", -A / 2 - C).attr("x2", A / 2 + C).attr("y1", -j / 2 - C + 8 + P).attr("y2", -j / 2 - C + 8 + P), P += 8, U.forEach((e) => {
			select_default(e).attr("transform", "translate( " + -A / 2 + ", " + (-1 * j / 2 + P + 8 / 2) + ")");
			let S = e?.getBBox();
			P += (S?.height ?? 0) + 4;
		}), P += 8, k.attr("class", "divider").attr("x1", -A / 2 - C).attr("x2", A / 2 + C).attr("y1", -j / 2 - C + 8 + P).attr("y2", -j / 2 - C + 8 + P), P += 8, W.forEach((e) => {
			select_default(e).attr("transform", "translate( " + -A / 2 + ", " + (-1 * j / 2 + P) + ")");
			let S = e?.getBBox();
			P += (S?.height ?? 0) + 4;
		}), E.attr("style", S.style).attr("class", "outer title-state").attr("x", -A / 2 - C).attr("y", -(j / 2) - C).attr("width", A + S.padding).attr("height", j + S.padding), updateNodeBounds(S, E), S.intersect = function(e) {
			return intersect_default.rect(S, e);
		}, T;
	}, "class_box")
}, nodeElems = {}, insertNode = /* @__PURE__ */ __name(async (e, S, C) => {
	let w, T;
	if (S.link) {
		let E;
		getConfig2().securityLevel === "sandbox" ? E = "_top" : S.linkTarget && (E = S.linkTarget || "_blank"), w = e.insert("svg:a").attr("xlink:href", S.link).attr("target", E), T = await shapes[S.shape](w, S, C);
	} else T = await shapes[S.shape](e, S, C), w = T;
	return S.tooltip && T.attr("title", S.tooltip), S.class && T.attr("class", "node default " + S.class), nodeElems[S.id] = w, S.haveCallback && nodeElems[S.id].attr("class", nodeElems[S.id].attr("class") + " clickable"), w;
}, "insertNode"), positionNode = /* @__PURE__ */ __name((e) => {
	let S = nodeElems[e.id];
	log.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
	let C = e.diff || 0;
	return e.clusterNode ? S.attr("transform", "translate(" + (e.x + C - e.width / 2) + ", " + (e.y - e.height / 2 - 8) + ")") : S.attr("transform", "translate(" + e.x + ", " + e.y + ")"), C;
}, "positionNode");
function getNodeFromBlock(e, S, w = !1) {
	let T = e, E = "default";
	(T?.classes?.length || 0) > 0 && (E = (T?.classes ?? []).join(" ")), E += " flowchart-label";
	let D = 0, O = "", k;
	switch (T.type) {
		case "round":
			D = 5, O = "rect";
			break;
		case "composite":
			D = 0, O = "composite", k = 0;
			break;
		case "square":
			O = "rect";
			break;
		case "diamond":
			O = "question";
			break;
		case "hexagon":
			O = "hexagon";
			break;
		case "block_arrow":
			O = "block_arrow";
			break;
		case "odd":
			O = "rect_left_inv_arrow";
			break;
		case "lean_right":
			O = "lean_right";
			break;
		case "lean_left":
			O = "lean_left";
			break;
		case "trapezoid":
			O = "trapezoid";
			break;
		case "inv_trapezoid":
			O = "inv_trapezoid";
			break;
		case "rect_left_inv_arrow":
			O = "rect_left_inv_arrow";
			break;
		case "circle":
			O = "circle";
			break;
		case "ellipse":
			O = "ellipse";
			break;
		case "stadium":
			O = "stadium";
			break;
		case "subroutine":
			O = "subroutine";
			break;
		case "cylinder":
			O = "cylinder";
			break;
		case "group":
			O = "rect";
			break;
		case "doublecircle":
			O = "doublecircle";
			break;
		default: O = "rect";
	}
	let A = getStylesFromArray(T?.styles ?? []), j = T.label, M = T.size ?? {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		labelStyle: A.labelStyle,
		shape: O,
		labelText: j,
		rx: D,
		ry: D,
		class: E,
		style: A.style,
		id: T.id,
		directions: T.directions,
		width: M.width,
		height: M.height,
		x: M.x,
		y: M.y,
		positioned: w,
		intersect: void 0,
		type: T.type,
		padding: k ?? getConfig()?.block?.padding ?? 0
	};
}
__name(getNodeFromBlock, "getNodeFromBlock");
async function calculateBlockSize(e, S, C) {
	let w = getNodeFromBlock(S, C, !1);
	if (w.type === "group") return;
	let T = await insertNode(e, w, { config: getConfig() }), E = T.node().getBBox(), D = C.getBlock(w.id);
	D.size = {
		width: E.width,
		height: E.height,
		x: 0,
		y: 0,
		node: T
	}, C.setBlock(D), T.remove();
}
__name(calculateBlockSize, "calculateBlockSize");
async function insertBlockPositioned(e, S, C) {
	let w = getNodeFromBlock(S, C, !0);
	C.getBlock(w.id).type !== "space" && (await insertNode(e, w, { config: getConfig() }), S.intersect = w?.intersect, positionNode(w));
}
__name(insertBlockPositioned, "insertBlockPositioned");
async function performOperations(e, S, C, w) {
	for (let T of S) await w(e, T, C), T.children && await performOperations(e, T.children, C, w);
}
__name(performOperations, "performOperations");
async function calculateBlockSizes(e, S, C) {
	await performOperations(e, S, C, calculateBlockSize);
}
__name(calculateBlockSizes, "calculateBlockSizes");
async function insertBlocks(e, S, C) {
	await performOperations(e, S, C, insertBlockPositioned);
}
__name(insertBlocks, "insertBlocks");
async function insertEdges(e, S, C, w, E) {
	let D = new Graph({
		multigraph: !0,
		compound: !0
	});
	D.setGraph({
		rankdir: "TB",
		nodesep: 10,
		ranksep: 10,
		marginx: 8,
		marginy: 8
	});
	for (let e of C) e.size && D.setNode(e.id, {
		width: e.size.width,
		height: e.size.height,
		intersect: e.intersect
	});
	for (let C of S) if (C.start && C.end) {
		let S = w.getBlock(C.start), T = w.getBlock(C.end);
		if (S?.size && T?.size) {
			let w = S.size, O = T.size, k = [
				{
					x: w.x,
					y: w.y
				},
				{
					x: w.x + (O.x - w.x) / 2,
					y: w.y + (O.y - w.y) / 2
				},
				{
					x: O.x,
					y: O.y
				}
			];
			insertEdge(e, {
				v: C.start,
				w: C.end,
				name: C.id
			}, {
				...C,
				arrowTypeEnd: C.arrowTypeEnd,
				arrowTypeStart: C.arrowTypeStart,
				points: k,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}, void 0, "block", D, E), C.label && (await insertEdgeLabel(e, {
				...C,
				label: C.label,
				labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
				arrowTypeEnd: C.arrowTypeEnd,
				arrowTypeStart: C.arrowTypeStart,
				points: k,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}), positionEdgeLabel({
				...C,
				x: k[1].x,
				y: k[1].y
			}, { originalPath: k }));
		}
	}
}
__name(insertEdges, "insertEdges");
var diagram = {
	parser: block_default,
	db: blockDB_default,
	renderer: {
		draw: /* @__PURE__ */ __name(async function(e, S, C, w) {
			let { securityLevel: T, block: D } = getConfig(), k = w.db, A;
			T === "sandbox" && (A = select_default("#i" + S));
			let j = select_default(T === "sandbox" ? A.nodes()[0].contentDocument.body : "body"), M = T === "sandbox" ? j.select(`[id="${S}"]`) : select_default(`[id="${S}"]`);
			markers_default(M, [
				"point",
				"circle",
				"cross"
			], w.type, S);
			let P = k.getBlocks(), F = k.getBlocksFlat(), I = k.getEdges(), R = M.insert("g").attr("class", "block");
			await calculateBlockSizes(R, P, k);
			let z = layout(k);
			if (await insertBlocks(R, P, k), await insertEdges(R, I, F, k, S), z) {
				let e = z, S = Math.max(1, Math.round(.125 * (e.width / e.height))), C = e.height + S + 10, w = e.width + 10, { useMaxWidth: T } = D;
				configureSvgSize(M, C, w, !!T), log.debug("Here Bounds", z, e), M.attr("viewBox", `${e.x - 5} ${e.y - 5} ${e.width + 10} ${e.height + 10}`);
			}
		}, "draw"),
		getClasses: /* @__PURE__ */ __name(function(e, S) {
			return S.db.getClasses();
		}, "getClasses")
	},
	styles: styles_default
};
export { diagram };
