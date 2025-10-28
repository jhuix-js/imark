import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { c as getEdgeId, g as utils_default } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, n as __export, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, et as rgba_default, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as channel_default } from "./channel-C2PC5s-o.js";
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
import { r as render, t as getRegisteredLayoutAlgorithm } from "./chunk-N4CR4FBY-BvPrzEpI.js";
var parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [
		6,
		8,
		10,
		22,
		24,
		26,
		28,
		33,
		34,
		35,
		36,
		37,
		40,
		43,
		44,
		50
	], n = [1, 10], r = [1, 11], a = [1, 12], o = [1, 13], s = [1, 20], c = [1, 21], l = [1, 22], u = [1, 23], d = [1, 24], f = [1, 19], p = [1, 25], m = [1, 26], h = [1, 18], g = [1, 33], _ = [1, 34], v = [1, 35], y = [1, 36], b = [1, 37], x = [
		6,
		8,
		10,
		13,
		15,
		17,
		20,
		21,
		22,
		24,
		26,
		28,
		33,
		34,
		35,
		36,
		37,
		40,
		43,
		44,
		50,
		63,
		64,
		65,
		66,
		67
	], S = [1, 42], C = [1, 43], w = [1, 52], T = [
		40,
		50,
		68,
		69
	], E = [1, 63], D = [1, 61], O = [1, 58], k = [1, 62], A = [1, 64], j = [
		6,
		8,
		10,
		13,
		17,
		22,
		24,
		26,
		28,
		33,
		34,
		35,
		36,
		37,
		40,
		41,
		42,
		43,
		44,
		48,
		49,
		50,
		63,
		64,
		65,
		66,
		67
	], M = [
		63,
		64,
		65,
		66,
		67
	], N = [1, 81], P = [1, 80], F = [1, 78], I = [1, 79], L = [
		6,
		10,
		42,
		47
	], R = [
		6,
		10,
		13,
		41,
		42,
		47,
		48,
		49
	], z = [1, 89], B = [1, 88], V = [1, 87], H = [19, 56], U = [1, 98], W = [1, 97], G = [
		19,
		56,
		58,
		60
	], K = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			ER_DIAGRAM: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NEWLINE: 10,
			entityName: 11,
			relSpec: 12,
			COLON: 13,
			role: 14,
			STYLE_SEPARATOR: 15,
			idList: 16,
			BLOCK_START: 17,
			attributes: 18,
			BLOCK_STOP: 19,
			SQS: 20,
			SQE: 21,
			title: 22,
			title_value: 23,
			acc_title: 24,
			acc_title_value: 25,
			acc_descr: 26,
			acc_descr_value: 27,
			acc_descr_multiline_value: 28,
			direction: 29,
			classDefStatement: 30,
			classStatement: 31,
			styleStatement: 32,
			direction_tb: 33,
			direction_bt: 34,
			direction_rl: 35,
			direction_lr: 36,
			CLASSDEF: 37,
			stylesOpt: 38,
			separator: 39,
			UNICODE_TEXT: 40,
			STYLE_TEXT: 41,
			COMMA: 42,
			CLASS: 43,
			STYLE: 44,
			style: 45,
			styleComponent: 46,
			SEMI: 47,
			NUM: 48,
			BRKT: 49,
			ENTITY_NAME: 50,
			attribute: 51,
			attributeType: 52,
			attributeName: 53,
			attributeKeyTypeList: 54,
			attributeComment: 55,
			ATTRIBUTE_WORD: 56,
			attributeKeyType: 57,
			",": 58,
			ATTRIBUTE_KEY: 59,
			COMMENT: 60,
			cardinality: 61,
			relType: 62,
			ZERO_OR_ONE: 63,
			ZERO_OR_MORE: 64,
			ONE_OR_MORE: 65,
			ONLY_ONE: 66,
			MD_PARENT: 67,
			NON_IDENTIFYING: 68,
			IDENTIFYING: 69,
			WORD: 70,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "ER_DIAGRAM",
			6: "EOF",
			8: "SPACE",
			10: "NEWLINE",
			13: "COLON",
			15: "STYLE_SEPARATOR",
			17: "BLOCK_START",
			19: "BLOCK_STOP",
			20: "SQS",
			21: "SQE",
			22: "title",
			23: "title_value",
			24: "acc_title",
			25: "acc_title_value",
			26: "acc_descr",
			27: "acc_descr_value",
			28: "acc_descr_multiline_value",
			33: "direction_tb",
			34: "direction_bt",
			35: "direction_rl",
			36: "direction_lr",
			37: "CLASSDEF",
			40: "UNICODE_TEXT",
			41: "STYLE_TEXT",
			42: "COMMA",
			43: "CLASS",
			44: "STYLE",
			47: "SEMI",
			48: "NUM",
			49: "BRKT",
			50: "ENTITY_NAME",
			56: "ATTRIBUTE_WORD",
			58: ",",
			59: "ATTRIBUTE_KEY",
			60: "COMMENT",
			63: "ZERO_OR_ONE",
			64: "ZERO_OR_MORE",
			65: "ONE_OR_MORE",
			66: "ONLY_ONE",
			67: "MD_PARENT",
			68: "NON_IDENTIFYING",
			69: "IDENTIFYING",
			70: "WORD"
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
			[9, 5],
			[9, 9],
			[9, 7],
			[9, 7],
			[9, 4],
			[9, 6],
			[9, 3],
			[9, 5],
			[9, 1],
			[9, 3],
			[9, 7],
			[9, 9],
			[9, 6],
			[9, 8],
			[9, 4],
			[9, 6],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[29, 1],
			[29, 1],
			[29, 1],
			[29, 1],
			[30, 4],
			[16, 1],
			[16, 1],
			[16, 3],
			[16, 3],
			[31, 3],
			[32, 4],
			[38, 1],
			[38, 3],
			[45, 1],
			[45, 2],
			[39, 1],
			[39, 1],
			[39, 1],
			[46, 1],
			[46, 1],
			[46, 1],
			[46, 1],
			[11, 1],
			[11, 1],
			[18, 1],
			[18, 2],
			[51, 2],
			[51, 3],
			[51, 3],
			[51, 4],
			[52, 1],
			[53, 1],
			[54, 1],
			[54, 3],
			[57, 1],
			[55, 1],
			[12, 3],
			[61, 1],
			[61, 1],
			[61, 1],
			[61, 1],
			[61, 1],
			[62, 1],
			[62, 1],
			[14, 1],
			[14, 1],
			[14, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 1: break;
				case 2:
					this.$ = [];
					break;
				case 3:
					a[s - 1].push(a[s]), this.$ = a[s - 1];
					break;
				case 4:
				case 5:
					this.$ = a[s];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					r.addEntity(a[s - 4]), r.addEntity(a[s - 2]), r.addRelationship(a[s - 4], a[s], a[s - 2], a[s - 3]);
					break;
				case 9:
					r.addEntity(a[s - 8]), r.addEntity(a[s - 4]), r.addRelationship(a[s - 8], a[s], a[s - 4], a[s - 5]), r.setClass([a[s - 8]], a[s - 6]), r.setClass([a[s - 4]], a[s - 2]);
					break;
				case 10:
					r.addEntity(a[s - 6]), r.addEntity(a[s - 2]), r.addRelationship(a[s - 6], a[s], a[s - 2], a[s - 3]), r.setClass([a[s - 6]], a[s - 4]);
					break;
				case 11:
					r.addEntity(a[s - 6]), r.addEntity(a[s - 4]), r.addRelationship(a[s - 6], a[s], a[s - 4], a[s - 5]), r.setClass([a[s - 4]], a[s - 2]);
					break;
				case 12:
					r.addEntity(a[s - 3]), r.addAttributes(a[s - 3], a[s - 1]);
					break;
				case 13:
					r.addEntity(a[s - 5]), r.addAttributes(a[s - 5], a[s - 1]), r.setClass([a[s - 5]], a[s - 3]);
					break;
				case 14:
					r.addEntity(a[s - 2]);
					break;
				case 15:
					r.addEntity(a[s - 4]), r.setClass([a[s - 4]], a[s - 2]);
					break;
				case 16:
					r.addEntity(a[s]);
					break;
				case 17:
					r.addEntity(a[s - 2]), r.setClass([a[s - 2]], a[s]);
					break;
				case 18:
					r.addEntity(a[s - 6], a[s - 4]), r.addAttributes(a[s - 6], a[s - 1]);
					break;
				case 19:
					r.addEntity(a[s - 8], a[s - 6]), r.addAttributes(a[s - 8], a[s - 1]), r.setClass([a[s - 8]], a[s - 3]);
					break;
				case 20:
					r.addEntity(a[s - 5], a[s - 3]);
					break;
				case 21:
					r.addEntity(a[s - 7], a[s - 5]), r.setClass([a[s - 7]], a[s - 2]);
					break;
				case 22:
					r.addEntity(a[s - 3], a[s - 1]);
					break;
				case 23:
					r.addEntity(a[s - 5], a[s - 3]), r.setClass([a[s - 5]], a[s]);
					break;
				case 24:
				case 25:
					this.$ = a[s].trim(), r.setAccTitle(this.$);
					break;
				case 26:
				case 27:
					this.$ = a[s].trim(), r.setAccDescription(this.$);
					break;
				case 32:
					r.setDirection("TB");
					break;
				case 33:
					r.setDirection("BT");
					break;
				case 34:
					r.setDirection("RL");
					break;
				case 35:
					r.setDirection("LR");
					break;
				case 36:
					this.$ = a[s - 3], r.addClass(a[s - 2], a[s - 1]);
					break;
				case 37:
				case 38:
				case 56:
				case 64:
					this.$ = [a[s]];
					break;
				case 39:
				case 40:
					this.$ = a[s - 2].concat([a[s]]);
					break;
				case 41:
					this.$ = a[s - 2], r.setClass(a[s - 1], a[s]);
					break;
				case 42:
					this.$ = a[s - 3], r.addCssStyles(a[s - 2], a[s - 1]);
					break;
				case 43:
					this.$ = [a[s]];
					break;
				case 44:
					a[s - 2].push(a[s]), this.$ = a[s - 2];
					break;
				case 46:
					this.$ = a[s - 1] + a[s];
					break;
				case 54:
				case 76:
				case 77:
					this.$ = a[s].replace(/"/g, "");
					break;
				case 55:
				case 78:
					this.$ = a[s];
					break;
				case 57:
					a[s].push(a[s - 1]), this.$ = a[s];
					break;
				case 58:
					this.$ = {
						type: a[s - 1],
						name: a[s]
					};
					break;
				case 59:
					this.$ = {
						type: a[s - 2],
						name: a[s - 1],
						keys: a[s]
					};
					break;
				case 60:
					this.$ = {
						type: a[s - 2],
						name: a[s - 1],
						comment: a[s]
					};
					break;
				case 61:
					this.$ = {
						type: a[s - 3],
						name: a[s - 2],
						keys: a[s - 1],
						comment: a[s]
					};
					break;
				case 62:
				case 63:
				case 66:
					this.$ = a[s];
					break;
				case 65:
					a[s - 2].push(a[s]), this.$ = a[s - 2];
					break;
				case 67:
					this.$ = a[s].replace(/"/g, "");
					break;
				case 68:
					this.$ = {
						cardA: a[s],
						relType: a[s - 1],
						cardB: a[s - 2]
					};
					break;
				case 69:
					this.$ = r.Cardinality.ZERO_OR_ONE;
					break;
				case 70:
					this.$ = r.Cardinality.ZERO_OR_MORE;
					break;
				case 71:
					this.$ = r.Cardinality.ONE_OR_MORE;
					break;
				case 72:
					this.$ = r.Cardinality.ONLY_ONE;
					break;
				case 73:
					this.$ = r.Cardinality.MD_PARENT;
					break;
				case 74:
					this.$ = r.Identification.NON_IDENTIFYING;
					break;
				case 75:
					this.$ = r.Identification.IDENTIFYING;
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			e(t, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: 9,
				22: n,
				24: r,
				26: a,
				28: o,
				29: 14,
				30: 15,
				31: 16,
				32: 17,
				33: s,
				34: c,
				35: l,
				36: u,
				37: d,
				40: f,
				43: p,
				44: m,
				50: h
			},
			e(t, [2, 7], { 1: [2, 1] }),
			e(t, [2, 3]),
			{
				9: 27,
				11: 9,
				22: n,
				24: r,
				26: a,
				28: o,
				29: 14,
				30: 15,
				31: 16,
				32: 17,
				33: s,
				34: c,
				35: l,
				36: u,
				37: d,
				40: f,
				43: p,
				44: m,
				50: h
			},
			e(t, [2, 5]),
			e(t, [2, 6]),
			e(t, [2, 16], {
				12: 28,
				61: 32,
				15: [1, 29],
				17: [1, 30],
				20: [1, 31],
				63: g,
				64: _,
				65: v,
				66: y,
				67: b
			}),
			{ 23: [1, 38] },
			{ 25: [1, 39] },
			{ 27: [1, 40] },
			e(t, [2, 27]),
			e(t, [2, 28]),
			e(t, [2, 29]),
			e(t, [2, 30]),
			e(t, [2, 31]),
			e(x, [2, 54]),
			e(x, [2, 55]),
			e(t, [2, 32]),
			e(t, [2, 33]),
			e(t, [2, 34]),
			e(t, [2, 35]),
			{
				16: 41,
				40: S,
				41: C
			},
			{
				16: 44,
				40: S,
				41: C
			},
			{
				16: 45,
				40: S,
				41: C
			},
			e(t, [2, 4]),
			{
				11: 46,
				40: f,
				50: h
			},
			{
				16: 47,
				40: S,
				41: C
			},
			{
				18: 48,
				19: [1, 49],
				51: 50,
				52: 51,
				56: w
			},
			{
				11: 53,
				40: f,
				50: h
			},
			{
				62: 54,
				68: [1, 55],
				69: [1, 56]
			},
			e(T, [2, 69]),
			e(T, [2, 70]),
			e(T, [2, 71]),
			e(T, [2, 72]),
			e(T, [2, 73]),
			e(t, [2, 24]),
			e(t, [2, 25]),
			e(t, [2, 26]),
			{
				13: E,
				38: 57,
				41: D,
				42: O,
				45: 59,
				46: 60,
				48: k,
				49: A
			},
			e(j, [2, 37]),
			e(j, [2, 38]),
			{
				16: 65,
				40: S,
				41: C,
				42: O
			},
			{
				13: E,
				38: 66,
				41: D,
				42: O,
				45: 59,
				46: 60,
				48: k,
				49: A
			},
			{
				13: [1, 67],
				15: [1, 68]
			},
			e(t, [2, 17], {
				61: 32,
				12: 69,
				17: [1, 70],
				42: O,
				63: g,
				64: _,
				65: v,
				66: y,
				67: b
			}),
			{ 19: [1, 71] },
			e(t, [2, 14]),
			{
				18: 72,
				19: [2, 56],
				51: 50,
				52: 51,
				56: w
			},
			{
				53: 73,
				56: [1, 74]
			},
			{ 56: [2, 62] },
			{ 21: [1, 75] },
			{
				61: 76,
				63: g,
				64: _,
				65: v,
				66: y,
				67: b
			},
			e(M, [2, 74]),
			e(M, [2, 75]),
			{
				6: N,
				10: P,
				39: 77,
				42: F,
				47: I
			},
			{
				40: [1, 82],
				41: [1, 83]
			},
			e(L, [2, 43], {
				46: 84,
				13: E,
				41: D,
				48: k,
				49: A
			}),
			e(R, [2, 45]),
			e(R, [2, 50]),
			e(R, [2, 51]),
			e(R, [2, 52]),
			e(R, [2, 53]),
			e(t, [2, 41], { 42: O }),
			{
				6: N,
				10: P,
				39: 85,
				42: F,
				47: I
			},
			{
				14: 86,
				40: z,
				50: B,
				70: V
			},
			{
				16: 90,
				40: S,
				41: C
			},
			{
				11: 91,
				40: f,
				50: h
			},
			{
				18: 92,
				19: [1, 93],
				51: 50,
				52: 51,
				56: w
			},
			e(t, [2, 12]),
			{ 19: [2, 57] },
			e(H, [2, 58], {
				54: 94,
				55: 95,
				57: 96,
				59: U,
				60: W
			}),
			e([
				19,
				56,
				59,
				60
			], [2, 63]),
			e(t, [2, 22], {
				15: [1, 100],
				17: [1, 99]
			}),
			e([40, 50], [2, 68]),
			e(t, [2, 36]),
			{
				13: E,
				41: D,
				45: 101,
				46: 60,
				48: k,
				49: A
			},
			e(t, [2, 47]),
			e(t, [2, 48]),
			e(t, [2, 49]),
			e(j, [2, 39]),
			e(j, [2, 40]),
			e(R, [2, 46]),
			e(t, [2, 42]),
			e(t, [2, 8]),
			e(t, [2, 76]),
			e(t, [2, 77]),
			e(t, [2, 78]),
			{
				13: [1, 102],
				42: O
			},
			{
				13: [1, 104],
				15: [1, 103]
			},
			{ 19: [1, 105] },
			e(t, [2, 15]),
			e(H, [2, 59], {
				55: 106,
				58: [1, 107],
				60: W
			}),
			e(H, [2, 60]),
			e(G, [2, 64]),
			e(H, [2, 67]),
			e(G, [2, 66]),
			{
				18: 108,
				19: [1, 109],
				51: 50,
				52: 51,
				56: w
			},
			{
				16: 110,
				40: S,
				41: C
			},
			e(L, [2, 44], {
				46: 84,
				13: E,
				41: D,
				48: k,
				49: A
			}),
			{
				14: 111,
				40: z,
				50: B,
				70: V
			},
			{
				16: 112,
				40: S,
				41: C
			},
			{
				14: 113,
				40: z,
				50: B,
				70: V
			},
			e(t, [2, 13]),
			e(H, [2, 61]),
			{
				57: 114,
				59: U
			},
			{ 19: [1, 115] },
			e(t, [2, 20]),
			e(t, [2, 23], {
				17: [1, 116],
				42: O
			}),
			e(t, [2, 11]),
			{
				13: [1, 117],
				42: O
			},
			e(t, [2, 10]),
			e(G, [2, 65]),
			e(t, [2, 18]),
			{
				18: 118,
				19: [1, 119],
				51: 50,
				52: 51,
				56: w
			},
			{
				14: 120,
				40: z,
				50: B,
				70: V
			},
			{ 19: [1, 121] },
			e(t, [2, 21]),
			e(t, [2, 9]),
			e(t, [2, 19])
		],
		defaultActions: {
			52: [2, 62],
			72: [2, 57]
		},
		parseError: /* @__PURE__ */ __name(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var t = this, n = [0], r = [], a = [null], o = [], s = this.table, c = "", l = 0, u = 0, d = 0, f = 2, p = 1, m = o.slice.call(arguments, 1), h = Object.create(this.lexer), g = { yy: {} };
			for (var _ in this.yy) Object.prototype.hasOwnProperty.call(this.yy, _) && (g.yy[_] = this.yy[_]);
			h.setInput(e, g.yy), g.yy.lexer = h, g.yy.parser = this, h.yylloc === void 0 && (h.yylloc = {});
			var v = h.yylloc;
			o.push(v);
			var y = h.options && h.options.ranges;
			typeof g.yy.parseError == "function" ? this.parseError = g.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function b(e) {
				n.length -= 2 * e, a.length -= e, o.length -= e;
			}
			__name(b, "popStack");
			function x() {
				var e = r.pop() || h.lex() || p;
				return typeof e != "number" && (e instanceof Array && (r = e, e = r.pop()), e = t.symbols_[e] || e), e;
			}
			__name(x, "lex");
			for (var S, C, w, T, E, D = {}, O, k, A, j;;) {
				if (w = n[n.length - 1], this.defaultActions[w] ? T = this.defaultActions[w] : (S ??= x(), T = s[w] && s[w][S]), T === void 0 || !T.length || !T[0]) {
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
						n.push(S), a.push(h.yytext), o.push(h.yylloc), n.push(T[1]), S = null, C ? (S = C, C = null) : (u = h.yyleng, c = h.yytext, l = h.yylineno, v = h.yylloc, d > 0 && d--);
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
						k && (n = n.slice(0, -1 * k * 2), a = a.slice(0, -1 * k), o = o.slice(0, -1 * k)), n.push(this.productions_[T[1]][0]), a.push(D.$), o.push(D._$), A = s[n[n.length - 2]][n[n.length - 1]], n.push(A);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	K.lexer = /* @__PURE__ */ (function() {
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
					case 0: return this.begin("acc_title"), 24;
					case 1: return this.popState(), "acc_title_value";
					case 2: return this.begin("acc_descr"), 26;
					case 3: return this.popState(), "acc_descr_value";
					case 4:
						this.begin("acc_descr_multiline");
						break;
					case 5:
						this.popState();
						break;
					case 6: return "acc_descr_multiline_value";
					case 7: return 33;
					case 8: return 34;
					case 9: return 35;
					case 10: return 36;
					case 11: return 10;
					case 12: break;
					case 13: return 8;
					case 14: return 50;
					case 15: return 70;
					case 16: return 4;
					case 17: return this.begin("block"), 17;
					case 18: return 49;
					case 19: return 49;
					case 20: return 42;
					case 21: return 15;
					case 22: return 13;
					case 23: break;
					case 24: return 59;
					case 25: return 56;
					case 26: return 56;
					case 27: return 60;
					case 28: break;
					case 29: return this.popState(), 19;
					case 30: return t.yytext[0];
					case 31: return 20;
					case 32: return 21;
					case 33: return this.begin("style"), 44;
					case 34: return this.popState(), 10;
					case 35: break;
					case 36: return 13;
					case 37: return 42;
					case 38: return 49;
					case 39: return this.begin("style"), 37;
					case 40: return 43;
					case 41: return 63;
					case 42: return 65;
					case 43: return 65;
					case 44: return 65;
					case 45: return 63;
					case 46: return 63;
					case 47: return 64;
					case 48: return 64;
					case 49: return 64;
					case 50: return 64;
					case 51: return 64;
					case 52: return 65;
					case 53: return 64;
					case 54: return 65;
					case 55: return 66;
					case 56: return 66;
					case 57: return 66;
					case 58: return 66;
					case 59: return 63;
					case 60: return 64;
					case 61: return 65;
					case 62: return 67;
					case 63: return 68;
					case 64: return 69;
					case 65: return 69;
					case 66: return 68;
					case 67: return 68;
					case 68: return 68;
					case 69: return 41;
					case 70: return 47;
					case 71: return 40;
					case 72: return 48;
					case 73: return t.yytext[0];
					case 74: return 6;
				}
			}, "anonymous"),
			rules: [
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:.*direction\s+TB[^\n]*)/i,
				/^(?:.*direction\s+BT[^\n]*)/i,
				/^(?:.*direction\s+RL[^\n]*)/i,
				/^(?:.*direction\s+LR[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:[\s]+)/i,
				/^(?:"[^"%\r\n\v\b\\]+")/i,
				/^(?:"[^"]*")/i,
				/^(?:erDiagram\b)/i,
				/^(?:\{)/i,
				/^(?:#)/i,
				/^(?:#)/i,
				/^(?:,)/i,
				/^(?::::)/i,
				/^(?::)/i,
				/^(?:\s+)/i,
				/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,
				/^(?:([^\s]*)[~].*[~]([^\s]*))/i,
				/^(?:([\*A-Za-z_\u00C0-\uFFFF][A-Za-z0-9\-\_\[\]\(\)\u00C0-\uFFFF\*]*))/i,
				/^(?:"[^"]*")/i,
				/^(?:[\n]+)/i,
				/^(?:\})/i,
				/^(?:.)/i,
				/^(?:\[)/i,
				/^(?:\])/i,
				/^(?:style\b)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?::)/i,
				/^(?:,)/i,
				/^(?:#)/i,
				/^(?:classDef\b)/i,
				/^(?:class\b)/i,
				/^(?:one or zero\b)/i,
				/^(?:one or more\b)/i,
				/^(?:one or many\b)/i,
				/^(?:1\+)/i,
				/^(?:\|o\b)/i,
				/^(?:zero or one\b)/i,
				/^(?:zero or more\b)/i,
				/^(?:zero or many\b)/i,
				/^(?:0\+)/i,
				/^(?:\}o\b)/i,
				/^(?:many\(0\))/i,
				/^(?:many\(1\))/i,
				/^(?:many\b)/i,
				/^(?:\}\|)/i,
				/^(?:one\b)/i,
				/^(?:only one\b)/i,
				/^(?:1\b)/i,
				/^(?:\|\|)/i,
				/^(?:o\|)/i,
				/^(?:o\{)/i,
				/^(?:\|\{)/i,
				/^(?:\s*u\b)/i,
				/^(?:\.\.)/i,
				/^(?:--)/i,
				/^(?:to\b)/i,
				/^(?:optionally to\b)/i,
				/^(?:\.-)/i,
				/^(?:-\.)/i,
				/^(?:([^\x00-\x7F]|\w|-|\*)+)/i,
				/^(?:;)/i,
				/^(?:([^\x00-\x7F]|\w|-|\*)+)/i,
				/^(?:[0-9])/i,
				/^(?:.)/i,
				/^(?:$)/i
			],
			conditions: {
				style: {
					rules: [
						34,
						35,
						36,
						37,
						38,
						69,
						70
					],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [5, 6],
					inclusive: !1
				},
				acc_descr: {
					rules: [3],
					inclusive: !1
				},
				acc_title: {
					rules: [1],
					inclusive: !1
				},
				block: {
					rules: [
						23,
						24,
						25,
						26,
						27,
						28,
						29,
						30
					],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						2,
						4,
						7,
						8,
						9,
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
						20,
						21,
						22,
						31,
						32,
						33,
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
						71,
						72,
						73,
						74
					],
					inclusive: !0
				}
			}
		};
	})();
	function q() {
		this.yy = {};
	}
	return __name(q, "Parser"), q.prototype = K, K.Parser = q, new q();
})();
parser.parser = parser;
var erDiagram_default = parser, ErDB = class {
	constructor() {
		this.entities = /* @__PURE__ */ new Map(), this.relationships = [], this.classes = /* @__PURE__ */ new Map(), this.direction = "TB", this.Cardinality = {
			ZERO_OR_ONE: "ZERO_OR_ONE",
			ZERO_OR_MORE: "ZERO_OR_MORE",
			ONE_OR_MORE: "ONE_OR_MORE",
			ONLY_ONE: "ONLY_ONE",
			MD_PARENT: "MD_PARENT"
		}, this.Identification = {
			NON_IDENTIFYING: "NON_IDENTIFYING",
			IDENTIFYING: "IDENTIFYING"
		}, this.setAccTitle = setAccTitle, this.getAccTitle = getAccTitle, this.setAccDescription = setAccDescription, this.getAccDescription = getAccDescription, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.getConfig = /* @__PURE__ */ __name(() => getConfig2().er, "getConfig"), this.clear(), this.addEntity = this.addEntity.bind(this), this.addAttributes = this.addAttributes.bind(this), this.addRelationship = this.addRelationship.bind(this), this.setDirection = this.setDirection.bind(this), this.addCssStyles = this.addCssStyles.bind(this), this.addClass = this.addClass.bind(this), this.setClass = this.setClass.bind(this), this.setAccTitle = this.setAccTitle.bind(this), this.setAccDescription = this.setAccDescription.bind(this);
	}
	static #_ = __name(this, "ErDB");
	addEntity(e, t = "") {
		return this.entities.has(e) ? !this.entities.get(e)?.alias && t && (this.entities.get(e).alias = t, log.info(`Add alias '${t}' to entity '${e}'`)) : (this.entities.set(e, {
			id: `entity-${e}-${this.entities.size}`,
			label: e,
			attributes: [],
			alias: t,
			shape: "erBox",
			look: getConfig2().look ?? "default",
			cssClasses: "default",
			cssStyles: []
		}), log.info("Added new entity :", e)), this.entities.get(e);
	}
	getEntity(e) {
		return this.entities.get(e);
	}
	getEntities() {
		return this.entities;
	}
	getClasses() {
		return this.classes;
	}
	addAttributes(e, t) {
		let r = this.addEntity(e), i;
		for (i = t.length - 1; i >= 0; i--) t[i].keys || (t[i].keys = []), t[i].comment || (t[i].comment = ""), r.attributes.push(t[i]), log.debug("Added attribute ", t[i].name);
	}
	addRelationship(e, t, r, i) {
		let a = this.entities.get(e), o = this.entities.get(r);
		if (!a || !o) return;
		let s = {
			entityA: a.id,
			roleA: t,
			entityB: o.id,
			relSpec: i
		};
		this.relationships.push(s), log.debug("Added new relationship :", s);
	}
	getRelationships() {
		return this.relationships;
	}
	getDirection() {
		return this.direction;
	}
	setDirection(e) {
		this.direction = e;
	}
	getCompiledStyles(e) {
		let t = [];
		for (let n of e) {
			let e = this.classes.get(n);
			e?.styles && (t = [...t, ...e.styles ?? []].map((e) => e.trim())), e?.textStyles && (t = [...t, ...e.textStyles ?? []].map((e) => e.trim()));
		}
		return t;
	}
	addCssStyles(e, t) {
		for (let n of e) {
			let e = this.entities.get(n);
			if (!t || !e) return;
			for (let n of t) e.cssStyles.push(n);
		}
	}
	addClass(e, t) {
		e.forEach((e) => {
			let n = this.classes.get(e);
			n === void 0 && (n = {
				id: e,
				styles: [],
				textStyles: []
			}, this.classes.set(e, n)), t && t.forEach(function(e) {
				if (/color/.exec(e)) {
					let t = e.replace("fill", "bgFill");
					n.textStyles.push(t);
				}
				n.styles.push(e);
			});
		});
	}
	setClass(e, t) {
		for (let n of e) {
			let e = this.entities.get(n);
			if (e) for (let n of t) e.cssClasses += " " + n;
		}
	}
	clear() {
		this.entities = /* @__PURE__ */ new Map(), this.classes = /* @__PURE__ */ new Map(), this.relationships = [], clear();
	}
	getData() {
		let t = [], n = [], r = getConfig2();
		for (let e of this.entities.keys()) {
			let n = this.entities.get(e);
			n && (n.cssCompiledStyles = this.getCompiledStyles(n.cssClasses.split(" ")), t.push(n));
		}
		let i = 0;
		for (let t of this.relationships) {
			let a = {
				id: getEdgeId(t.entityA, t.entityB, {
					prefix: "id",
					counter: i++
				}),
				type: "normal",
				curve: "basis",
				start: t.entityA,
				end: t.entityB,
				label: t.roleA,
				labelpos: "c",
				thickness: "normal",
				classes: "relationshipLine",
				arrowTypeStart: t.relSpec.cardB.toLowerCase(),
				arrowTypeEnd: t.relSpec.cardA.toLowerCase(),
				pattern: t.relSpec.relType == "IDENTIFYING" ? "solid" : "dashed",
				look: r.look
			};
			n.push(a);
		}
		return {
			nodes: t,
			edges: n,
			other: {},
			config: r,
			direction: "TB"
		};
	}
}, erRenderer_unified_exports = {};
__export(erRenderer_unified_exports, { draw: () => draw });
var draw = /* @__PURE__ */ __name(async function(e, r, i, o) {
	log.info("REF0:"), log.info("Drawing er diagram (unified)", r);
	let { securityLevel: s, er: c, layout: l } = getConfig2(), u = o.db.getData(), f = getDiagramElement(r, s);
	u.type = o.type, u.layoutAlgorithm = getRegisteredLayoutAlgorithm(l), u.config.flowchart.nodeSpacing = c?.nodeSpacing || 140, u.config.flowchart.rankSpacing = c?.rankSpacing || 80, u.direction = o.db.getDirection(), u.markers = [
		"only_one",
		"zero_or_one",
		"one_or_more",
		"zero_or_more"
	], u.diagramId = r, await render(u, f), u.layoutAlgorithm === "elk" && f.select(".edges").lower();
	let p = f.selectAll("[id*=\"-background\"]");
	Array.from(p).length > 0 && p.each(function() {
		let e = select_default(this), t = e.attr("id").replace("-background", ""), n = f.select(`#${CSS.escape(t)}`);
		if (!n.empty()) {
			let t = n.attr("transform");
			e.attr("transform", t);
		}
	}), utils_default.insertTitle(f, "erDiagramTitleText", c?.titleTopMargin ?? 25, o.db.getDiagramTitle()), setupViewPortForSVG(f, 8, "erDiagram", c?.useMaxWidth ?? !0);
}, "draw"), fade = /* @__PURE__ */ __name((e, t) => {
	let n = channel_default;
	return rgba_default(n(e, "r"), n(e, "g"), n(e, "b"), t);
}, "fade"), diagram = {
	parser: erDiagram_default,
	get db() {
		return new ErDB();
	},
	renderer: erRenderer_unified_exports,
	styles: /* @__PURE__ */ __name((e) => `
  .entityBox {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${e.tertiaryColor};
    opacity: 0.7;
    background-color: ${e.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

  .labelBkg {
    background-color: ${fade(e.tertiaryColor, .5)};
  }

  .edgeLabel .label {
    fill: ${e.nodeBorder};
    font-size: 14px;
  }

  .label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }

  .edge-pattern-dashed {
    stroke-dasharray: 8,8;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon
  {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .relationshipLine {
    stroke: ${e.lineColor};
    stroke-width: 1;
    fill: none;
  }

  .marker {
    fill: none !important;
    stroke: ${e.lineColor} !important;
    stroke-width: 1;
  }
`, "getStyles")
};
export { diagram };
