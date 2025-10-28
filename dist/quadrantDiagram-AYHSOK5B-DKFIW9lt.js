import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, I as sanitizeText, T as getThemeVariables3, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, c as configureSvgSize, d as defaultConfig_default, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as linear } from "./linear-Csp1_tTx.js";
import "./timer-Bp1bAW5T.js";
import "./defaultLocale-BBsRvltv.js";
import "./init-ULMCeUqd.js";
var parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), n = [1, 3], r = [1, 4], i = [1, 5], a = [1, 6], o = [1, 7], s = [
		1,
		4,
		5,
		10,
		12,
		13,
		14,
		18,
		25,
		35,
		37,
		39,
		41,
		42,
		48,
		50,
		51,
		52,
		53,
		54,
		55,
		56,
		57,
		60,
		61,
		63,
		64,
		65,
		66,
		67
	], c = [
		1,
		4,
		5,
		10,
		12,
		13,
		14,
		18,
		25,
		28,
		35,
		37,
		39,
		41,
		42,
		48,
		50,
		51,
		52,
		53,
		54,
		55,
		56,
		57,
		60,
		61,
		63,
		64,
		65,
		66,
		67
	], l = [
		55,
		56,
		57
	], u = [2, 36], d = [1, 37], f = [1, 36], p = [1, 38], m = [1, 35], h = [1, 43], g = [1, 41], _ = [1, 14], v = [1, 23], y = [1, 18], b = [1, 19], x = [1, 20], S = [1, 21], C = [1, 22], w = [1, 24], T = [1, 25], E = [1, 26], D = [1, 27], O = [1, 28], k = [1, 29], A = [1, 32], j = [1, 33], M = [1, 34], N = [1, 39], P = [1, 40], F = [1, 42], I = [1, 44], L = [1, 62], R = [1, 61], z = [
		4,
		5,
		8,
		10,
		12,
		13,
		14,
		18,
		44,
		47,
		49,
		55,
		56,
		57,
		63,
		64,
		65,
		66,
		67
	], ee = [1, 65], te = [1, 66], ne = [1, 67], re = [1, 68], ie = [1, 69], ae = [1, 70], oe = [1, 71], se = [1, 72], ce = [1, 73], le = [1, 74], ue = [1, 75], de = [1, 76], B = [
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		18
	], V = [1, 90], H = [1, 91], U = [1, 92], W = [1, 99], G = [1, 93], K = [1, 96], q = [1, 94], J = [1, 95], Y = [1, 97], X = [1, 98], Z = [1, 102], fe = [
		10,
		55,
		56,
		57
	], Q = [
		4,
		5,
		6,
		8,
		10,
		11,
		13,
		17,
		18,
		19,
		20,
		55,
		56,
		57
	], pe = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			idStringToken: 3,
			ALPHA: 4,
			NUM: 5,
			NODE_STRING: 6,
			DOWN: 7,
			MINUS: 8,
			DEFAULT: 9,
			COMMA: 10,
			COLON: 11,
			AMP: 12,
			BRKT: 13,
			MULT: 14,
			UNICODE_TEXT: 15,
			styleComponent: 16,
			UNIT: 17,
			SPACE: 18,
			STYLE: 19,
			PCT: 20,
			idString: 21,
			style: 22,
			stylesOpt: 23,
			classDefStatement: 24,
			CLASSDEF: 25,
			start: 26,
			eol: 27,
			QUADRANT: 28,
			document: 29,
			line: 30,
			statement: 31,
			axisDetails: 32,
			quadrantDetails: 33,
			points: 34,
			title: 35,
			title_value: 36,
			acc_title: 37,
			acc_title_value: 38,
			acc_descr: 39,
			acc_descr_value: 40,
			acc_descr_multiline_value: 41,
			section: 42,
			text: 43,
			point_start: 44,
			point_x: 45,
			point_y: 46,
			class_name: 47,
			"X-AXIS": 48,
			"AXIS-TEXT-DELIMITER": 49,
			"Y-AXIS": 50,
			QUADRANT_1: 51,
			QUADRANT_2: 52,
			QUADRANT_3: 53,
			QUADRANT_4: 54,
			NEWLINE: 55,
			SEMI: 56,
			EOF: 57,
			alphaNumToken: 58,
			textNoTagsToken: 59,
			STR: 60,
			MD_STR: 61,
			alphaNum: 62,
			PUNCTUATION: 63,
			PLUS: 64,
			EQUALS: 65,
			DOT: 66,
			UNDERSCORE: 67,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "ALPHA",
			5: "NUM",
			6: "NODE_STRING",
			7: "DOWN",
			8: "MINUS",
			9: "DEFAULT",
			10: "COMMA",
			11: "COLON",
			12: "AMP",
			13: "BRKT",
			14: "MULT",
			15: "UNICODE_TEXT",
			17: "UNIT",
			18: "SPACE",
			19: "STYLE",
			20: "PCT",
			25: "CLASSDEF",
			28: "QUADRANT",
			35: "title",
			36: "title_value",
			37: "acc_title",
			38: "acc_title_value",
			39: "acc_descr",
			40: "acc_descr_value",
			41: "acc_descr_multiline_value",
			42: "section",
			44: "point_start",
			45: "point_x",
			46: "point_y",
			47: "class_name",
			48: "X-AXIS",
			49: "AXIS-TEXT-DELIMITER",
			50: "Y-AXIS",
			51: "QUADRANT_1",
			52: "QUADRANT_2",
			53: "QUADRANT_3",
			54: "QUADRANT_4",
			55: "NEWLINE",
			56: "SEMI",
			57: "EOF",
			60: "STR",
			61: "MD_STR",
			63: "PUNCTUATION",
			64: "PLUS",
			65: "EQUALS",
			66: "DOT",
			67: "UNDERSCORE"
		},
		productions_: [
			0,
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[3, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[21, 1],
			[21, 2],
			[22, 1],
			[22, 2],
			[23, 1],
			[23, 3],
			[24, 5],
			[26, 2],
			[26, 2],
			[26, 2],
			[29, 0],
			[29, 2],
			[30, 2],
			[31, 0],
			[31, 1],
			[31, 2],
			[31, 1],
			[31, 1],
			[31, 1],
			[31, 2],
			[31, 2],
			[31, 2],
			[31, 1],
			[31, 1],
			[34, 4],
			[34, 5],
			[34, 5],
			[34, 6],
			[32, 4],
			[32, 3],
			[32, 2],
			[32, 4],
			[32, 3],
			[32, 2],
			[33, 2],
			[33, 2],
			[33, 2],
			[33, 2],
			[27, 1],
			[27, 1],
			[27, 1],
			[43, 1],
			[43, 2],
			[43, 1],
			[43, 1],
			[62, 1],
			[62, 2],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[58, 1],
			[59, 1],
			[59, 1],
			[59, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 23:
					this.$ = a[s];
					break;
				case 24:
					this.$ = a[s - 1] + "" + a[s];
					break;
				case 26:
					this.$ = a[s - 1] + a[s];
					break;
				case 27:
					this.$ = [a[s].trim()];
					break;
				case 28:
					a[s - 2].push(a[s].trim()), this.$ = a[s - 2];
					break;
				case 29:
					this.$ = a[s - 4], r.addClass(a[s - 2], a[s]);
					break;
				case 37:
					this.$ = [];
					break;
				case 42:
					this.$ = a[s].trim(), r.setDiagramTitle(this.$);
					break;
				case 43:
					this.$ = a[s].trim(), r.setAccTitle(this.$);
					break;
				case 44:
				case 45:
					this.$ = a[s].trim(), r.setAccDescription(this.$);
					break;
				case 46:
					r.addSection(a[s].substr(8)), this.$ = a[s].substr(8);
					break;
				case 47:
					r.addPoint(a[s - 3], "", a[s - 1], a[s], []);
					break;
				case 48:
					r.addPoint(a[s - 4], a[s - 3], a[s - 1], a[s], []);
					break;
				case 49:
					r.addPoint(a[s - 4], "", a[s - 2], a[s - 1], a[s]);
					break;
				case 50:
					r.addPoint(a[s - 5], a[s - 4], a[s - 2], a[s - 1], a[s]);
					break;
				case 51:
					r.setXAxisLeftText(a[s - 2]), r.setXAxisRightText(a[s]);
					break;
				case 52:
					a[s - 1].text += " ⟶ ", r.setXAxisLeftText(a[s - 1]);
					break;
				case 53:
					r.setXAxisLeftText(a[s]);
					break;
				case 54:
					r.setYAxisBottomText(a[s - 2]), r.setYAxisTopText(a[s]);
					break;
				case 55:
					a[s - 1].text += " ⟶ ", r.setYAxisBottomText(a[s - 1]);
					break;
				case 56:
					r.setYAxisBottomText(a[s]);
					break;
				case 57:
					r.setQuadrant1Text(a[s]);
					break;
				case 58:
					r.setQuadrant2Text(a[s]);
					break;
				case 59:
					r.setQuadrant3Text(a[s]);
					break;
				case 60:
					r.setQuadrant4Text(a[s]);
					break;
				case 64:
					this.$ = {
						text: a[s],
						type: "text"
					};
					break;
				case 65:
					this.$ = {
						text: a[s - 1].text + "" + a[s],
						type: a[s - 1].type
					};
					break;
				case 66:
					this.$ = {
						text: a[s],
						type: "text"
					};
					break;
				case 67:
					this.$ = {
						text: a[s],
						type: "markdown"
					};
					break;
				case 68:
					this.$ = a[s];
					break;
				case 69:
					this.$ = a[s - 1] + "" + a[s];
					break;
			}
		}, "anonymous"),
		table: [
			{
				18: n,
				26: 1,
				27: 2,
				28: r,
				55: i,
				56: a,
				57: o
			},
			{ 1: [3] },
			{
				18: n,
				26: 8,
				27: 2,
				28: r,
				55: i,
				56: a,
				57: o
			},
			{
				18: n,
				26: 9,
				27: 2,
				28: r,
				55: i,
				56: a,
				57: o
			},
			e(s, [2, 33], { 29: 10 }),
			e(c, [2, 61]),
			e(c, [2, 62]),
			e(c, [2, 63]),
			{ 1: [2, 30] },
			{ 1: [2, 31] },
			e(l, u, {
				30: 11,
				31: 12,
				24: 13,
				32: 15,
				33: 16,
				34: 17,
				43: 30,
				58: 31,
				1: [2, 32],
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				18: _,
				25: v,
				35: y,
				37: b,
				39: x,
				41: S,
				42: C,
				48: w,
				50: T,
				51: E,
				52: D,
				53: O,
				54: k,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(s, [2, 34]),
			{
				27: 45,
				55: i,
				56: a,
				57: o
			},
			e(l, [2, 37]),
			e(l, u, {
				24: 13,
				32: 15,
				33: 16,
				34: 17,
				43: 30,
				58: 31,
				31: 46,
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				18: _,
				25: v,
				35: y,
				37: b,
				39: x,
				41: S,
				42: C,
				48: w,
				50: T,
				51: E,
				52: D,
				53: O,
				54: k,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 39]),
			e(l, [2, 40]),
			e(l, [2, 41]),
			{ 36: [1, 47] },
			{ 38: [1, 48] },
			{ 40: [1, 49] },
			e(l, [2, 45]),
			e(l, [2, 46]),
			{ 18: [1, 50] },
			{
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				43: 51,
				58: 31,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			},
			{
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				43: 52,
				58: 31,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			},
			{
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				43: 53,
				58: 31,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			},
			{
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				43: 54,
				58: 31,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			},
			{
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				43: 55,
				58: 31,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			},
			{
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				43: 56,
				58: 31,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			},
			{
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				44: [1, 57],
				47: [1, 58],
				58: 60,
				59: 59,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			},
			e(z, [2, 64]),
			e(z, [2, 66]),
			e(z, [2, 67]),
			e(z, [2, 70]),
			e(z, [2, 71]),
			e(z, [2, 72]),
			e(z, [2, 73]),
			e(z, [2, 74]),
			e(z, [2, 75]),
			e(z, [2, 76]),
			e(z, [2, 77]),
			e(z, [2, 78]),
			e(z, [2, 79]),
			e(z, [2, 80]),
			e(s, [2, 35]),
			e(l, [2, 38]),
			e(l, [2, 42]),
			e(l, [2, 43]),
			e(l, [2, 44]),
			{
				3: 64,
				4: ee,
				5: te,
				6: ne,
				7: re,
				8: ie,
				9: ae,
				10: oe,
				11: se,
				12: ce,
				13: le,
				14: ue,
				15: de,
				21: 63
			},
			e(l, [2, 53], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				49: [1, 77],
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 56], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				49: [1, 78],
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 57], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 58], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 59], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 60], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			{ 45: [1, 79] },
			{ 44: [1, 80] },
			e(z, [2, 65]),
			e(z, [2, 81]),
			e(z, [2, 82]),
			e(z, [2, 83]),
			{
				3: 82,
				4: ee,
				5: te,
				6: ne,
				7: re,
				8: ie,
				9: ae,
				10: oe,
				11: se,
				12: ce,
				13: le,
				14: ue,
				15: de,
				18: [1, 81]
			},
			e(B, [2, 23]),
			e(B, [2, 1]),
			e(B, [2, 2]),
			e(B, [2, 3]),
			e(B, [2, 4]),
			e(B, [2, 5]),
			e(B, [2, 6]),
			e(B, [2, 7]),
			e(B, [2, 8]),
			e(B, [2, 9]),
			e(B, [2, 10]),
			e(B, [2, 11]),
			e(B, [2, 12]),
			e(l, [2, 52], {
				58: 31,
				43: 83,
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 55], {
				58: 31,
				43: 84,
				4: d,
				5: f,
				10: p,
				12: m,
				13: h,
				14: g,
				60: A,
				61: j,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			{ 46: [1, 85] },
			{ 45: [1, 86] },
			{
				4: V,
				5: H,
				6: U,
				8: W,
				11: G,
				13: K,
				16: 89,
				17: q,
				18: J,
				19: Y,
				20: X,
				22: 88,
				23: 87
			},
			e(B, [2, 24]),
			e(l, [2, 51], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 54], {
				59: 59,
				58: 60,
				4: d,
				5: f,
				8: L,
				10: p,
				12: m,
				13: h,
				14: g,
				18: R,
				63: M,
				64: N,
				65: P,
				66: F,
				67: I
			}),
			e(l, [2, 47], {
				22: 88,
				16: 89,
				23: 100,
				4: V,
				5: H,
				6: U,
				8: W,
				11: G,
				13: K,
				17: q,
				18: J,
				19: Y,
				20: X
			}),
			{ 46: [1, 101] },
			e(l, [2, 29], { 10: Z }),
			e(fe, [2, 27], {
				16: 103,
				4: V,
				5: H,
				6: U,
				8: W,
				11: G,
				13: K,
				17: q,
				18: J,
				19: Y,
				20: X
			}),
			e(Q, [2, 25]),
			e(Q, [2, 13]),
			e(Q, [2, 14]),
			e(Q, [2, 15]),
			e(Q, [2, 16]),
			e(Q, [2, 17]),
			e(Q, [2, 18]),
			e(Q, [2, 19]),
			e(Q, [2, 20]),
			e(Q, [2, 21]),
			e(Q, [2, 22]),
			e(l, [2, 49], { 10: Z }),
			e(l, [2, 48], {
				22: 88,
				16: 89,
				23: 104,
				4: V,
				5: H,
				6: U,
				8: W,
				11: G,
				13: K,
				17: q,
				18: J,
				19: Y,
				20: X
			}),
			{
				4: V,
				5: H,
				6: U,
				8: W,
				11: G,
				13: K,
				16: 89,
				17: q,
				18: J,
				19: Y,
				20: X,
				22: 105
			},
			e(Q, [2, 26]),
			e(l, [2, 50], { 10: Z }),
			e(fe, [2, 28], {
				16: 103,
				4: V,
				5: H,
				6: U,
				8: W,
				11: G,
				13: K,
				17: q,
				18: J,
				19: Y,
				20: X
			})
		],
		defaultActions: {
			8: [2, 30],
			9: [2, 31]
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
	pe.lexer = /* @__PURE__ */ (function() {
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
					case 0: break;
					case 1: break;
					case 2: return 55;
					case 3: break;
					case 4: return this.begin("title"), 35;
					case 5: return this.popState(), "title_value";
					case 6: return this.begin("acc_title"), 37;
					case 7: return this.popState(), "acc_title_value";
					case 8: return this.begin("acc_descr"), 39;
					case 9: return this.popState(), "acc_descr_value";
					case 10:
						this.begin("acc_descr_multiline");
						break;
					case 11:
						this.popState();
						break;
					case 12: return "acc_descr_multiline_value";
					case 13: return 48;
					case 14: return 50;
					case 15: return 49;
					case 16: return 51;
					case 17: return 52;
					case 18: return 53;
					case 19: return 54;
					case 20: return 25;
					case 21:
						this.begin("md_string");
						break;
					case 22: return "MD_STR";
					case 23:
						this.popState();
						break;
					case 24:
						this.begin("string");
						break;
					case 25:
						this.popState();
						break;
					case 26: return "STR";
					case 27:
						this.begin("class_name");
						break;
					case 28: return this.popState(), 47;
					case 29: return this.begin("point_start"), 44;
					case 30: return this.begin("point_x"), 45;
					case 31:
						this.popState();
						break;
					case 32:
						this.popState(), this.begin("point_y");
						break;
					case 33: return this.popState(), 46;
					case 34: return 28;
					case 35: return 4;
					case 36: return 11;
					case 37: return 64;
					case 38: return 10;
					case 39: return 65;
					case 40: return 65;
					case 41: return 14;
					case 42: return 13;
					case 43: return 67;
					case 44: return 66;
					case 45: return 12;
					case 46: return 8;
					case 47: return 5;
					case 48: return 18;
					case 49: return 56;
					case 50: return 63;
					case 51: return 57;
				}
			}, "anonymous"),
			rules: [
				/^(?:%%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n\r]+)/i,
				/^(?:%%[^\n]*)/i,
				/^(?:title\b)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?: *x-axis *)/i,
				/^(?: *y-axis *)/i,
				/^(?: *--+> *)/i,
				/^(?: *quadrant-1 *)/i,
				/^(?: *quadrant-2 *)/i,
				/^(?: *quadrant-3 *)/i,
				/^(?: *quadrant-4 *)/i,
				/^(?:classDef\b)/i,
				/^(?:["][`])/i,
				/^(?:[^`"]+)/i,
				/^(?:[`]["])/i,
				/^(?:["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?::::)/i,
				/^(?:^\w+)/i,
				/^(?:\s*:\s*\[\s*)/i,
				/^(?:(1)|(0(.\d+)?))/i,
				/^(?:\s*\] *)/i,
				/^(?:\s*,\s*)/i,
				/^(?:(1)|(0(.\d+)?))/i,
				/^(?: *quadrantChart *)/i,
				/^(?:[A-Za-z]+)/i,
				/^(?::)/i,
				/^(?:\+)/i,
				/^(?:,)/i,
				/^(?:=)/i,
				/^(?:=)/i,
				/^(?:\*)/i,
				/^(?:#)/i,
				/^(?:[\_])/i,
				/^(?:\.)/i,
				/^(?:&)/i,
				/^(?:-)/i,
				/^(?:[0-9]+)/i,
				/^(?:\s)/i,
				/^(?:;)/i,
				/^(?:[!"#$%&'*+,-.`?\\_/])/i,
				/^(?:$)/i
			],
			conditions: {
				class_name: {
					rules: [28],
					inclusive: !1
				},
				point_y: {
					rules: [33],
					inclusive: !1
				},
				point_x: {
					rules: [32],
					inclusive: !1
				},
				point_start: {
					rules: [30, 31],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [11, 12],
					inclusive: !1
				},
				acc_descr: {
					rules: [9],
					inclusive: !1
				},
				acc_title: {
					rules: [7],
					inclusive: !1
				},
				title: {
					rules: [5],
					inclusive: !1
				},
				md_string: {
					rules: [22, 23],
					inclusive: !1
				},
				string: {
					rules: [25, 26],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						6,
						8,
						10,
						13,
						14,
						15,
						16,
						17,
						18,
						19,
						20,
						21,
						24,
						27,
						29,
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
						51
					],
					inclusive: !0
				}
			}
		};
	})();
	function $() {
		this.yy = {};
	}
	return __name($, "Parser"), $.prototype = pe, pe.Parser = $, new $();
})();
parser.parser = parser;
var quadrant_default = parser, defaultThemeVariables = getThemeVariables3(), QuadrantBuilder = class {
	constructor() {
		this.classes = /* @__PURE__ */ new Map(), this.config = this.getDefaultConfig(), this.themeConfig = this.getDefaultThemeConfig(), this.data = this.getDefaultData();
	}
	static #_ = __name(this, "QuadrantBuilder");
	getDefaultData() {
		return {
			titleText: "",
			quadrant1Text: "",
			quadrant2Text: "",
			quadrant3Text: "",
			quadrant4Text: "",
			xAxisLeftText: "",
			xAxisRightText: "",
			yAxisBottomText: "",
			yAxisTopText: "",
			points: []
		};
	}
	getDefaultConfig() {
		return {
			showXAxis: !0,
			showYAxis: !0,
			showTitle: !0,
			chartHeight: defaultConfig_default.quadrantChart?.chartWidth || 500,
			chartWidth: defaultConfig_default.quadrantChart?.chartHeight || 500,
			titlePadding: defaultConfig_default.quadrantChart?.titlePadding || 10,
			titleFontSize: defaultConfig_default.quadrantChart?.titleFontSize || 20,
			quadrantPadding: defaultConfig_default.quadrantChart?.quadrantPadding || 5,
			xAxisLabelPadding: defaultConfig_default.quadrantChart?.xAxisLabelPadding || 5,
			yAxisLabelPadding: defaultConfig_default.quadrantChart?.yAxisLabelPadding || 5,
			xAxisLabelFontSize: defaultConfig_default.quadrantChart?.xAxisLabelFontSize || 16,
			yAxisLabelFontSize: defaultConfig_default.quadrantChart?.yAxisLabelFontSize || 16,
			quadrantLabelFontSize: defaultConfig_default.quadrantChart?.quadrantLabelFontSize || 16,
			quadrantTextTopPadding: defaultConfig_default.quadrantChart?.quadrantTextTopPadding || 5,
			pointTextPadding: defaultConfig_default.quadrantChart?.pointTextPadding || 5,
			pointLabelFontSize: defaultConfig_default.quadrantChart?.pointLabelFontSize || 12,
			pointRadius: defaultConfig_default.quadrantChart?.pointRadius || 5,
			xAxisPosition: defaultConfig_default.quadrantChart?.xAxisPosition || "top",
			yAxisPosition: defaultConfig_default.quadrantChart?.yAxisPosition || "left",
			quadrantInternalBorderStrokeWidth: defaultConfig_default.quadrantChart?.quadrantInternalBorderStrokeWidth || 1,
			quadrantExternalBorderStrokeWidth: defaultConfig_default.quadrantChart?.quadrantExternalBorderStrokeWidth || 2
		};
	}
	getDefaultThemeConfig() {
		return {
			quadrant1Fill: defaultThemeVariables.quadrant1Fill,
			quadrant2Fill: defaultThemeVariables.quadrant2Fill,
			quadrant3Fill: defaultThemeVariables.quadrant3Fill,
			quadrant4Fill: defaultThemeVariables.quadrant4Fill,
			quadrant1TextFill: defaultThemeVariables.quadrant1TextFill,
			quadrant2TextFill: defaultThemeVariables.quadrant2TextFill,
			quadrant3TextFill: defaultThemeVariables.quadrant3TextFill,
			quadrant4TextFill: defaultThemeVariables.quadrant4TextFill,
			quadrantPointFill: defaultThemeVariables.quadrantPointFill,
			quadrantPointTextFill: defaultThemeVariables.quadrantPointTextFill,
			quadrantXAxisTextFill: defaultThemeVariables.quadrantXAxisTextFill,
			quadrantYAxisTextFill: defaultThemeVariables.quadrantYAxisTextFill,
			quadrantTitleFill: defaultThemeVariables.quadrantTitleFill,
			quadrantInternalBorderStrokeFill: defaultThemeVariables.quadrantInternalBorderStrokeFill,
			quadrantExternalBorderStrokeFill: defaultThemeVariables.quadrantExternalBorderStrokeFill
		};
	}
	clear() {
		this.config = this.getDefaultConfig(), this.themeConfig = this.getDefaultThemeConfig(), this.data = this.getDefaultData(), this.classes = /* @__PURE__ */ new Map(), log.info("clear called");
	}
	setData(e) {
		this.data = {
			...this.data,
			...e
		};
	}
	addPoints(e) {
		this.data.points = [...e, ...this.data.points];
	}
	addClass(e, t) {
		this.classes.set(e, t);
	}
	setConfig(t) {
		log.trace("setConfig called with: ", t), this.config = {
			...this.config,
			...t
		};
	}
	setThemeConfig(t) {
		log.trace("setThemeConfig called with: ", t), this.themeConfig = {
			...this.themeConfig,
			...t
		};
	}
	calculateSpace(e, t, n, r) {
		let i = this.config.xAxisLabelPadding * 2 + this.config.xAxisLabelFontSize, a = {
			top: e === "top" && t ? i : 0,
			bottom: e === "bottom" && t ? i : 0
		}, o = this.config.yAxisLabelPadding * 2 + this.config.yAxisLabelFontSize, s = {
			left: this.config.yAxisPosition === "left" && n ? o : 0,
			right: this.config.yAxisPosition === "right" && n ? o : 0
		}, c = this.config.titleFontSize + this.config.titlePadding * 2, l = { top: r ? c : 0 }, u = this.config.quadrantPadding + s.left, d = this.config.quadrantPadding + a.top + l.top, f = this.config.chartWidth - this.config.quadrantPadding * 2 - s.left - s.right, p = this.config.chartHeight - this.config.quadrantPadding * 2 - a.top - a.bottom - l.top;
		return {
			xAxisSpace: a,
			yAxisSpace: s,
			titleSpace: l,
			quadrantSpace: {
				quadrantLeft: u,
				quadrantTop: d,
				quadrantWidth: f,
				quadrantHalfWidth: f / 2,
				quadrantHeight: p,
				quadrantHalfHeight: p / 2
			}
		};
	}
	getAxisLabels(e, t, n, r) {
		let { quadrantSpace: i, titleSpace: a } = r, { quadrantHalfHeight: o, quadrantHeight: s, quadrantLeft: c, quadrantHalfWidth: l, quadrantTop: u, quadrantWidth: d } = i, f = !!this.data.xAxisRightText, p = !!this.data.yAxisTopText, m = [];
		return this.data.xAxisLeftText && t && m.push({
			text: this.data.xAxisLeftText,
			fill: this.themeConfig.quadrantXAxisTextFill,
			x: c + (f ? l / 2 : 0),
			y: e === "top" ? this.config.xAxisLabelPadding + a.top : this.config.xAxisLabelPadding + u + s + this.config.quadrantPadding,
			fontSize: this.config.xAxisLabelFontSize,
			verticalPos: f ? "center" : "left",
			horizontalPos: "top",
			rotation: 0
		}), this.data.xAxisRightText && t && m.push({
			text: this.data.xAxisRightText,
			fill: this.themeConfig.quadrantXAxisTextFill,
			x: c + l + (f ? l / 2 : 0),
			y: e === "top" ? this.config.xAxisLabelPadding + a.top : this.config.xAxisLabelPadding + u + s + this.config.quadrantPadding,
			fontSize: this.config.xAxisLabelFontSize,
			verticalPos: f ? "center" : "left",
			horizontalPos: "top",
			rotation: 0
		}), this.data.yAxisBottomText && n && m.push({
			text: this.data.yAxisBottomText,
			fill: this.themeConfig.quadrantYAxisTextFill,
			x: this.config.yAxisPosition === "left" ? this.config.yAxisLabelPadding : this.config.yAxisLabelPadding + c + d + this.config.quadrantPadding,
			y: u + s - (p ? o / 2 : 0),
			fontSize: this.config.yAxisLabelFontSize,
			verticalPos: p ? "center" : "left",
			horizontalPos: "top",
			rotation: -90
		}), this.data.yAxisTopText && n && m.push({
			text: this.data.yAxisTopText,
			fill: this.themeConfig.quadrantYAxisTextFill,
			x: this.config.yAxisPosition === "left" ? this.config.yAxisLabelPadding : this.config.yAxisLabelPadding + c + d + this.config.quadrantPadding,
			y: u + o - (p ? o / 2 : 0),
			fontSize: this.config.yAxisLabelFontSize,
			verticalPos: p ? "center" : "left",
			horizontalPos: "top",
			rotation: -90
		}), m;
	}
	getQuadrants(e) {
		let { quadrantSpace: t } = e, { quadrantHalfHeight: n, quadrantLeft: r, quadrantHalfWidth: i, quadrantTop: a } = t, o = [
			{
				text: {
					text: this.data.quadrant1Text,
					fill: this.themeConfig.quadrant1TextFill,
					x: 0,
					y: 0,
					fontSize: this.config.quadrantLabelFontSize,
					verticalPos: "center",
					horizontalPos: "middle",
					rotation: 0
				},
				x: r + i,
				y: a,
				width: i,
				height: n,
				fill: this.themeConfig.quadrant1Fill
			},
			{
				text: {
					text: this.data.quadrant2Text,
					fill: this.themeConfig.quadrant2TextFill,
					x: 0,
					y: 0,
					fontSize: this.config.quadrantLabelFontSize,
					verticalPos: "center",
					horizontalPos: "middle",
					rotation: 0
				},
				x: r,
				y: a,
				width: i,
				height: n,
				fill: this.themeConfig.quadrant2Fill
			},
			{
				text: {
					text: this.data.quadrant3Text,
					fill: this.themeConfig.quadrant3TextFill,
					x: 0,
					y: 0,
					fontSize: this.config.quadrantLabelFontSize,
					verticalPos: "center",
					horizontalPos: "middle",
					rotation: 0
				},
				x: r,
				y: a + n,
				width: i,
				height: n,
				fill: this.themeConfig.quadrant3Fill
			},
			{
				text: {
					text: this.data.quadrant4Text,
					fill: this.themeConfig.quadrant4TextFill,
					x: 0,
					y: 0,
					fontSize: this.config.quadrantLabelFontSize,
					verticalPos: "center",
					horizontalPos: "middle",
					rotation: 0
				},
				x: r + i,
				y: a + n,
				width: i,
				height: n,
				fill: this.themeConfig.quadrant4Fill
			}
		];
		for (let e of o) e.text.x = e.x + e.width / 2, this.data.points.length === 0 ? (e.text.y = e.y + e.height / 2, e.text.horizontalPos = "middle") : (e.text.y = e.y + this.config.quadrantTextTopPadding, e.text.horizontalPos = "top");
		return o;
	}
	getQuadrantPoints(e) {
		let { quadrantSpace: t } = e, { quadrantHeight: n, quadrantLeft: r, quadrantTop: i, quadrantWidth: a } = t, o = linear().domain([0, 1]).range([r, a + r]), s = linear().domain([0, 1]).range([n + i, i]);
		return this.data.points.map((e) => {
			let t = this.classes.get(e.className);
			return t && (e = {
				...t,
				...e
			}), {
				x: o(e.x),
				y: s(e.y),
				fill: e.color ?? this.themeConfig.quadrantPointFill,
				radius: e.radius ?? this.config.pointRadius,
				text: {
					text: e.text,
					fill: this.themeConfig.quadrantPointTextFill,
					x: o(e.x),
					y: s(e.y) + this.config.pointTextPadding,
					verticalPos: "center",
					horizontalPos: "top",
					fontSize: this.config.pointLabelFontSize,
					rotation: 0
				},
				strokeColor: e.strokeColor ?? this.themeConfig.quadrantPointFill,
				strokeWidth: e.strokeWidth ?? "0px"
			};
		});
	}
	getBorders(e) {
		let t = this.config.quadrantExternalBorderStrokeWidth / 2, { quadrantSpace: n } = e, { quadrantHalfHeight: r, quadrantHeight: i, quadrantLeft: a, quadrantHalfWidth: o, quadrantTop: s, quadrantWidth: c } = n;
		return [
			{
				strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
				strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
				x1: a - t,
				y1: s,
				x2: a + c + t,
				y2: s
			},
			{
				strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
				strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
				x1: a + c,
				y1: s + t,
				x2: a + c,
				y2: s + i - t
			},
			{
				strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
				strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
				x1: a - t,
				y1: s + i,
				x2: a + c + t,
				y2: s + i
			},
			{
				strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
				strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
				x1: a,
				y1: s + t,
				x2: a,
				y2: s + i - t
			},
			{
				strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
				strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
				x1: a + o,
				y1: s + t,
				x2: a + o,
				y2: s + i - t
			},
			{
				strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
				strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
				x1: a + t,
				y1: s + r,
				x2: a + c - t,
				y2: s + r
			}
		];
	}
	getTitle(e) {
		if (e) return {
			text: this.data.titleText,
			fill: this.themeConfig.quadrantTitleFill,
			fontSize: this.config.titleFontSize,
			horizontalPos: "top",
			verticalPos: "center",
			rotation: 0,
			y: this.config.titlePadding,
			x: this.config.chartWidth / 2
		};
	}
	build() {
		let e = this.config.showXAxis && !!(this.data.xAxisLeftText || this.data.xAxisRightText), t = this.config.showYAxis && !!(this.data.yAxisTopText || this.data.yAxisBottomText), n = this.config.showTitle && !!this.data.titleText, r = this.data.points.length > 0 ? "bottom" : this.config.xAxisPosition, i = this.calculateSpace(r, e, t, n);
		return {
			points: this.getQuadrantPoints(i),
			quadrants: this.getQuadrants(i),
			axisLabels: this.getAxisLabels(r, e, t, i),
			borderLines: this.getBorders(i),
			title: this.getTitle(n)
		};
	}
}, InvalidStyleError = class extends Error {
	static #_ = __name(this, "InvalidStyleError");
	constructor(e, t, n) {
		super(`value for ${e} ${t} is invalid, please use a valid ${n}`), this.name = "InvalidStyleError";
	}
};
function validateHexCode(e) {
	return !/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(e);
}
__name(validateHexCode, "validateHexCode");
function validateNumber(e) {
	return !/^\d+$/.test(e);
}
__name(validateNumber, "validateNumber");
function validateSizeInPixels(e) {
	return !/^\d+px$/.test(e);
}
__name(validateSizeInPixels, "validateSizeInPixels");
var config = getConfig2();
function textSanitizer(e) {
	return sanitizeText(e.trim(), config);
}
__name(textSanitizer, "textSanitizer");
var quadrantBuilder = new QuadrantBuilder();
function setQuadrant1Text(e) {
	quadrantBuilder.setData({ quadrant1Text: textSanitizer(e.text) });
}
__name(setQuadrant1Text, "setQuadrant1Text");
function setQuadrant2Text(e) {
	quadrantBuilder.setData({ quadrant2Text: textSanitizer(e.text) });
}
__name(setQuadrant2Text, "setQuadrant2Text");
function setQuadrant3Text(e) {
	quadrantBuilder.setData({ quadrant3Text: textSanitizer(e.text) });
}
__name(setQuadrant3Text, "setQuadrant3Text");
function setQuadrant4Text(e) {
	quadrantBuilder.setData({ quadrant4Text: textSanitizer(e.text) });
}
__name(setQuadrant4Text, "setQuadrant4Text");
function setXAxisLeftText(e) {
	quadrantBuilder.setData({ xAxisLeftText: textSanitizer(e.text) });
}
__name(setXAxisLeftText, "setXAxisLeftText");
function setXAxisRightText(e) {
	quadrantBuilder.setData({ xAxisRightText: textSanitizer(e.text) });
}
__name(setXAxisRightText, "setXAxisRightText");
function setYAxisTopText(e) {
	quadrantBuilder.setData({ yAxisTopText: textSanitizer(e.text) });
}
__name(setYAxisTopText, "setYAxisTopText");
function setYAxisBottomText(e) {
	quadrantBuilder.setData({ yAxisBottomText: textSanitizer(e.text) });
}
__name(setYAxisBottomText, "setYAxisBottomText");
function parseStyles(e) {
	let t = {};
	for (let n of e) {
		let [e, r] = n.trim().split(/\s*:\s*/);
		if (e === "radius") {
			if (validateNumber(r)) throw new InvalidStyleError(e, r, "number");
			t.radius = parseInt(r);
		} else if (e === "color") {
			if (validateHexCode(r)) throw new InvalidStyleError(e, r, "hex code");
			t.color = r;
		} else if (e === "stroke-color") {
			if (validateHexCode(r)) throw new InvalidStyleError(e, r, "hex code");
			t.strokeColor = r;
		} else if (e === "stroke-width") {
			if (validateSizeInPixels(r)) throw new InvalidStyleError(e, r, "number of pixels (eg. 10px)");
			t.strokeWidth = r;
		} else throw Error(`style named ${e} is not supported.`);
	}
	return t;
}
__name(parseStyles, "parseStyles");
function addPoint(e, t, n, r, i) {
	let a = parseStyles(i);
	quadrantBuilder.addPoints([{
		x: n,
		y: r,
		text: textSanitizer(e.text),
		className: t,
		...a
	}]);
}
__name(addPoint, "addPoint");
function addClass(e, t) {
	quadrantBuilder.addClass(e, parseStyles(t));
}
__name(addClass, "addClass");
function setWidth(e) {
	quadrantBuilder.setConfig({ chartWidth: e });
}
__name(setWidth, "setWidth");
function setHeight(e) {
	quadrantBuilder.setConfig({ chartHeight: e });
}
__name(setHeight, "setHeight");
function getQuadrantData() {
	let { themeVariables: e, quadrantChart: t } = getConfig2();
	return t && quadrantBuilder.setConfig(t), quadrantBuilder.setThemeConfig({
		quadrant1Fill: e.quadrant1Fill,
		quadrant2Fill: e.quadrant2Fill,
		quadrant3Fill: e.quadrant3Fill,
		quadrant4Fill: e.quadrant4Fill,
		quadrant1TextFill: e.quadrant1TextFill,
		quadrant2TextFill: e.quadrant2TextFill,
		quadrant3TextFill: e.quadrant3TextFill,
		quadrant4TextFill: e.quadrant4TextFill,
		quadrantPointFill: e.quadrantPointFill,
		quadrantPointTextFill: e.quadrantPointTextFill,
		quadrantXAxisTextFill: e.quadrantXAxisTextFill,
		quadrantYAxisTextFill: e.quadrantYAxisTextFill,
		quadrantExternalBorderStrokeFill: e.quadrantExternalBorderStrokeFill,
		quadrantInternalBorderStrokeFill: e.quadrantInternalBorderStrokeFill,
		quadrantTitleFill: e.quadrantTitleFill
	}), quadrantBuilder.setData({ titleText: getDiagramTitle() }), quadrantBuilder.build();
}
__name(getQuadrantData, "getQuadrantData");
var diagram = {
	parser: quadrant_default,
	db: {
		setWidth,
		setHeight,
		setQuadrant1Text,
		setQuadrant2Text,
		setQuadrant3Text,
		setQuadrant4Text,
		setXAxisLeftText,
		setXAxisRightText,
		setYAxisTopText,
		setYAxisBottomText,
		parseStyles,
		addPoint,
		addClass,
		getQuadrantData,
		clear: /* @__PURE__ */ __name(function() {
			quadrantBuilder.clear(), clear();
		}, "clear"),
		setAccTitle,
		getAccTitle,
		setDiagramTitle,
		getDiagramTitle,
		getAccDescription,
		setAccDescription
	},
	renderer: { draw: /* @__PURE__ */ __name((r, i, a, o) => {
		function s(e) {
			return e === "top" ? "hanging" : "middle";
		}
		__name(s, "getDominantBaseLine");
		function c(e) {
			return e === "left" ? "start" : "middle";
		}
		__name(c, "getTextAnchor");
		function l(e) {
			return `translate(${e.x}, ${e.y}) rotate(${e.rotation || 0})`;
		}
		__name(l, "getTransformation");
		let f = getConfig2();
		log.debug("Rendering quadrant chart\n" + r);
		let p = f.securityLevel, m;
		p === "sandbox" && (m = select_default("#i" + i));
		let h = select_default(p === "sandbox" ? m.nodes()[0].contentDocument.body : "body").select(`[id="${i}"]`), g = h.append("g").attr("class", "main"), _ = f.quadrantChart?.chartWidth ?? 500, v = f.quadrantChart?.chartHeight ?? 500;
		configureSvgSize(h, v, _, f.quadrantChart?.useMaxWidth ?? !0), h.attr("viewBox", "0 0 " + _ + " " + v), o.db.setHeight(v), o.db.setWidth(_);
		let y = o.db.getQuadrantData(), b = g.append("g").attr("class", "quadrants"), x = g.append("g").attr("class", "border"), S = g.append("g").attr("class", "data-points"), C = g.append("g").attr("class", "labels"), w = g.append("g").attr("class", "title");
		y.title && w.append("text").attr("x", 0).attr("y", 0).attr("fill", y.title.fill).attr("font-size", y.title.fontSize).attr("dominant-baseline", s(y.title.horizontalPos)).attr("text-anchor", c(y.title.verticalPos)).attr("transform", l(y.title)).text(y.title.text), y.borderLines && x.selectAll("line").data(y.borderLines).enter().append("line").attr("x1", (e) => e.x1).attr("y1", (e) => e.y1).attr("x2", (e) => e.x2).attr("y2", (e) => e.y2).style("stroke", (e) => e.strokeFill).style("stroke-width", (e) => e.strokeWidth);
		let T = b.selectAll("g.quadrant").data(y.quadrants).enter().append("g").attr("class", "quadrant");
		T.append("rect").attr("x", (e) => e.x).attr("y", (e) => e.y).attr("width", (e) => e.width).attr("height", (e) => e.height).attr("fill", (e) => e.fill), T.append("text").attr("x", 0).attr("y", 0).attr("fill", (e) => e.text.fill).attr("font-size", (e) => e.text.fontSize).attr("dominant-baseline", (e) => s(e.text.horizontalPos)).attr("text-anchor", (e) => c(e.text.verticalPos)).attr("transform", (e) => l(e.text)).text((e) => e.text.text), C.selectAll("g.label").data(y.axisLabels).enter().append("g").attr("class", "label").append("text").attr("x", 0).attr("y", 0).text((e) => e.text).attr("fill", (e) => e.fill).attr("font-size", (e) => e.fontSize).attr("dominant-baseline", (e) => s(e.horizontalPos)).attr("text-anchor", (e) => c(e.verticalPos)).attr("transform", (e) => l(e));
		let E = S.selectAll("g.data-point").data(y.points).enter().append("g").attr("class", "data-point");
		E.append("circle").attr("cx", (e) => e.x).attr("cy", (e) => e.y).attr("r", (e) => e.radius).attr("fill", (e) => e.fill).attr("stroke", (e) => e.strokeColor).attr("stroke-width", (e) => e.strokeWidth), E.append("text").attr("x", 0).attr("y", 0).text((e) => e.text.text).attr("fill", (e) => e.text.fill).attr("font-size", (e) => e.text.fontSize).attr("dominant-baseline", (e) => s(e.text.horizontalPos)).attr("text-anchor", (e) => c(e.text.verticalPos)).attr("transform", (e) => l(e.text));
	}, "draw") },
	styles: /* @__PURE__ */ __name(() => "", "styles")
};
export { diagram };

//# sourceMappingURL=quadrantDiagram-AYHSOK5B-DKFIW9lt.js.map