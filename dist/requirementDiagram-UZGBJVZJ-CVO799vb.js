import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { g as utils_default } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, n as __export, r as __name } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
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
var parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [1, 3], n = [1, 4], i = [1, 5], a = [1, 6], o = [
		5,
		6,
		8,
		9,
		11,
		13,
		21,
		22,
		23,
		24,
		41,
		42,
		43,
		44,
		45,
		46,
		54,
		72,
		74,
		77,
		89,
		90
	], s = [1, 22], c = [2, 7], l = [1, 26], u = [1, 27], d = [1, 28], f = [1, 29], p = [1, 33], m = [1, 34], h = [1, 35], g = [1, 36], _ = [1, 37], v = [1, 38], y = [1, 24], b = [1, 31], x = [1, 32], S = [1, 30], C = [1, 39], w = [1, 40], T = [
		5,
		8,
		9,
		11,
		13,
		21,
		22,
		23,
		24,
		41,
		42,
		43,
		44,
		45,
		46,
		54,
		72,
		74,
		77,
		89,
		90
	], E = [1, 61], D = [89, 90], O = [
		5,
		8,
		9,
		11,
		13,
		21,
		22,
		23,
		24,
		27,
		29,
		41,
		42,
		43,
		44,
		45,
		46,
		54,
		61,
		63,
		72,
		74,
		75,
		76,
		77,
		80,
		81,
		82,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90
	], k = [27, 29], ee = [1, 70], A = [1, 71], te = [1, 72], ne = [1, 73], re = [1, 74], ie = [1, 75], ae = [1, 76], j = [1, 83], M = [1, 80], N = [1, 84], P = [1, 85], F = [1, 86], I = [1, 87], L = [1, 88], R = [1, 89], z = [1, 90], B = [1, 91], V = [1, 92], oe = [
		5,
		8,
		9,
		11,
		13,
		21,
		22,
		23,
		24,
		27,
		41,
		42,
		43,
		44,
		45,
		46,
		54,
		72,
		74,
		75,
		76,
		77,
		80,
		81,
		82,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90
	], H = [63, 64], se = [1, 101], ce = [
		5,
		8,
		9,
		11,
		13,
		21,
		22,
		23,
		24,
		41,
		42,
		43,
		44,
		45,
		46,
		54,
		72,
		74,
		76,
		77,
		89,
		90
	], U = [
		5,
		8,
		9,
		11,
		13,
		21,
		22,
		23,
		24,
		41,
		42,
		43,
		44,
		45,
		46,
		54,
		72,
		74,
		75,
		76,
		77,
		80,
		81,
		82,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90
	], W = [1, 110], G = [1, 106], K = [1, 107], q = [1, 108], J = [1, 109], Y = [1, 111], X = [1, 116], Z = [1, 117], Q = [1, 114], $ = [1, 115], le = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			directive: 4,
			NEWLINE: 5,
			RD: 6,
			diagram: 7,
			EOF: 8,
			acc_title: 9,
			acc_title_value: 10,
			acc_descr: 11,
			acc_descr_value: 12,
			acc_descr_multiline_value: 13,
			requirementDef: 14,
			elementDef: 15,
			relationshipDef: 16,
			direction: 17,
			styleStatement: 18,
			classDefStatement: 19,
			classStatement: 20,
			direction_tb: 21,
			direction_bt: 22,
			direction_rl: 23,
			direction_lr: 24,
			requirementType: 25,
			requirementName: 26,
			STRUCT_START: 27,
			requirementBody: 28,
			STYLE_SEPARATOR: 29,
			idList: 30,
			ID: 31,
			COLONSEP: 32,
			id: 33,
			TEXT: 34,
			text: 35,
			RISK: 36,
			riskLevel: 37,
			VERIFYMTHD: 38,
			verifyType: 39,
			STRUCT_STOP: 40,
			REQUIREMENT: 41,
			FUNCTIONAL_REQUIREMENT: 42,
			INTERFACE_REQUIREMENT: 43,
			PERFORMANCE_REQUIREMENT: 44,
			PHYSICAL_REQUIREMENT: 45,
			DESIGN_CONSTRAINT: 46,
			LOW_RISK: 47,
			MED_RISK: 48,
			HIGH_RISK: 49,
			VERIFY_ANALYSIS: 50,
			VERIFY_DEMONSTRATION: 51,
			VERIFY_INSPECTION: 52,
			VERIFY_TEST: 53,
			ELEMENT: 54,
			elementName: 55,
			elementBody: 56,
			TYPE: 57,
			type: 58,
			DOCREF: 59,
			ref: 60,
			END_ARROW_L: 61,
			relationship: 62,
			LINE: 63,
			END_ARROW_R: 64,
			CONTAINS: 65,
			COPIES: 66,
			DERIVES: 67,
			SATISFIES: 68,
			VERIFIES: 69,
			REFINES: 70,
			TRACES: 71,
			CLASSDEF: 72,
			stylesOpt: 73,
			CLASS: 74,
			ALPHA: 75,
			COMMA: 76,
			STYLE: 77,
			style: 78,
			styleComponent: 79,
			NUM: 80,
			COLON: 81,
			UNIT: 82,
			SPACE: 83,
			BRKT: 84,
			PCT: 85,
			MINUS: 86,
			LABEL: 87,
			SEMICOLON: 88,
			unqString: 89,
			qString: 90,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			5: "NEWLINE",
			6: "RD",
			8: "EOF",
			9: "acc_title",
			10: "acc_title_value",
			11: "acc_descr",
			12: "acc_descr_value",
			13: "acc_descr_multiline_value",
			21: "direction_tb",
			22: "direction_bt",
			23: "direction_rl",
			24: "direction_lr",
			27: "STRUCT_START",
			29: "STYLE_SEPARATOR",
			31: "ID",
			32: "COLONSEP",
			34: "TEXT",
			36: "RISK",
			38: "VERIFYMTHD",
			40: "STRUCT_STOP",
			41: "REQUIREMENT",
			42: "FUNCTIONAL_REQUIREMENT",
			43: "INTERFACE_REQUIREMENT",
			44: "PERFORMANCE_REQUIREMENT",
			45: "PHYSICAL_REQUIREMENT",
			46: "DESIGN_CONSTRAINT",
			47: "LOW_RISK",
			48: "MED_RISK",
			49: "HIGH_RISK",
			50: "VERIFY_ANALYSIS",
			51: "VERIFY_DEMONSTRATION",
			52: "VERIFY_INSPECTION",
			53: "VERIFY_TEST",
			54: "ELEMENT",
			57: "TYPE",
			59: "DOCREF",
			61: "END_ARROW_L",
			63: "LINE",
			64: "END_ARROW_R",
			65: "CONTAINS",
			66: "COPIES",
			67: "DERIVES",
			68: "SATISFIES",
			69: "VERIFIES",
			70: "REFINES",
			71: "TRACES",
			72: "CLASSDEF",
			74: "CLASS",
			75: "ALPHA",
			76: "COMMA",
			77: "STYLE",
			80: "NUM",
			81: "COLON",
			82: "UNIT",
			83: "SPACE",
			84: "BRKT",
			85: "PCT",
			86: "MINUS",
			87: "LABEL",
			88: "SEMICOLON",
			89: "unqString",
			90: "qString"
		},
		productions_: [
			0,
			[3, 3],
			[3, 2],
			[3, 4],
			[4, 2],
			[4, 2],
			[4, 1],
			[7, 0],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[7, 2],
			[17, 1],
			[17, 1],
			[17, 1],
			[17, 1],
			[14, 5],
			[14, 7],
			[28, 5],
			[28, 5],
			[28, 5],
			[28, 5],
			[28, 2],
			[28, 1],
			[25, 1],
			[25, 1],
			[25, 1],
			[25, 1],
			[25, 1],
			[25, 1],
			[37, 1],
			[37, 1],
			[37, 1],
			[39, 1],
			[39, 1],
			[39, 1],
			[39, 1],
			[15, 5],
			[15, 7],
			[56, 5],
			[56, 5],
			[56, 2],
			[56, 1],
			[16, 5],
			[16, 5],
			[62, 1],
			[62, 1],
			[62, 1],
			[62, 1],
			[62, 1],
			[62, 1],
			[62, 1],
			[19, 3],
			[20, 3],
			[20, 3],
			[30, 1],
			[30, 3],
			[30, 1],
			[30, 3],
			[18, 3],
			[73, 1],
			[73, 3],
			[78, 1],
			[78, 2],
			[79, 1],
			[79, 1],
			[79, 1],
			[79, 1],
			[79, 1],
			[79, 1],
			[79, 1],
			[79, 1],
			[79, 1],
			[79, 1],
			[26, 1],
			[26, 1],
			[33, 1],
			[33, 1],
			[35, 1],
			[35, 1],
			[55, 1],
			[55, 1],
			[58, 1],
			[58, 1],
			[60, 1],
			[60, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 4:
					this.$ = a[s].trim(), r.setAccTitle(this.$);
					break;
				case 5:
				case 6:
					this.$ = a[s].trim(), r.setAccDescription(this.$);
					break;
				case 7:
					this.$ = [];
					break;
				case 17:
					r.setDirection("TB");
					break;
				case 18:
					r.setDirection("BT");
					break;
				case 19:
					r.setDirection("RL");
					break;
				case 20:
					r.setDirection("LR");
					break;
				case 21:
					r.addRequirement(a[s - 3], a[s - 4]);
					break;
				case 22:
					r.addRequirement(a[s - 5], a[s - 6]), r.setClass([a[s - 5]], a[s - 3]);
					break;
				case 23:
					r.setNewReqId(a[s - 2]);
					break;
				case 24:
					r.setNewReqText(a[s - 2]);
					break;
				case 25:
					r.setNewReqRisk(a[s - 2]);
					break;
				case 26:
					r.setNewReqVerifyMethod(a[s - 2]);
					break;
				case 29:
					this.$ = r.RequirementType.REQUIREMENT;
					break;
				case 30:
					this.$ = r.RequirementType.FUNCTIONAL_REQUIREMENT;
					break;
				case 31:
					this.$ = r.RequirementType.INTERFACE_REQUIREMENT;
					break;
				case 32:
					this.$ = r.RequirementType.PERFORMANCE_REQUIREMENT;
					break;
				case 33:
					this.$ = r.RequirementType.PHYSICAL_REQUIREMENT;
					break;
				case 34:
					this.$ = r.RequirementType.DESIGN_CONSTRAINT;
					break;
				case 35:
					this.$ = r.RiskLevel.LOW_RISK;
					break;
				case 36:
					this.$ = r.RiskLevel.MED_RISK;
					break;
				case 37:
					this.$ = r.RiskLevel.HIGH_RISK;
					break;
				case 38:
					this.$ = r.VerifyType.VERIFY_ANALYSIS;
					break;
				case 39:
					this.$ = r.VerifyType.VERIFY_DEMONSTRATION;
					break;
				case 40:
					this.$ = r.VerifyType.VERIFY_INSPECTION;
					break;
				case 41:
					this.$ = r.VerifyType.VERIFY_TEST;
					break;
				case 42:
					r.addElement(a[s - 3]);
					break;
				case 43:
					r.addElement(a[s - 5]), r.setClass([a[s - 5]], a[s - 3]);
					break;
				case 44:
					r.setNewElementType(a[s - 2]);
					break;
				case 45:
					r.setNewElementDocRef(a[s - 2]);
					break;
				case 48:
					r.addRelationship(a[s - 2], a[s], a[s - 4]);
					break;
				case 49:
					r.addRelationship(a[s - 2], a[s - 4], a[s]);
					break;
				case 50:
					this.$ = r.Relationships.CONTAINS;
					break;
				case 51:
					this.$ = r.Relationships.COPIES;
					break;
				case 52:
					this.$ = r.Relationships.DERIVES;
					break;
				case 53:
					this.$ = r.Relationships.SATISFIES;
					break;
				case 54:
					this.$ = r.Relationships.VERIFIES;
					break;
				case 55:
					this.$ = r.Relationships.REFINES;
					break;
				case 56:
					this.$ = r.Relationships.TRACES;
					break;
				case 57:
					this.$ = a[s - 2], r.defineClass(a[s - 1], a[s]);
					break;
				case 58:
					r.setClass(a[s - 1], a[s]);
					break;
				case 59:
					r.setClass([a[s - 2]], a[s]);
					break;
				case 60:
				case 62:
					this.$ = [a[s]];
					break;
				case 61:
				case 63:
					this.$ = a[s - 2].concat([a[s]]);
					break;
				case 64:
					this.$ = a[s - 2], r.setCssStyle(a[s - 1], a[s]);
					break;
				case 65:
					this.$ = [a[s]];
					break;
				case 66:
					a[s - 2].push(a[s]), this.$ = a[s - 2];
					break;
				case 68:
					this.$ = a[s - 1] + a[s];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				6: t,
				9: n,
				11: i,
				13: a
			},
			{ 1: [3] },
			{
				3: 8,
				4: 2,
				5: [1, 7],
				6: t,
				9: n,
				11: i,
				13: a
			},
			{ 5: [1, 9] },
			{ 10: [1, 10] },
			{ 12: [1, 11] },
			e(o, [2, 6]),
			{
				3: 12,
				4: 2,
				6: t,
				9: n,
				11: i,
				13: a
			},
			{ 1: [2, 2] },
			{
				4: 17,
				5: s,
				7: 13,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			e(o, [2, 4]),
			e(o, [2, 5]),
			{ 1: [2, 1] },
			{ 8: [1, 41] },
			{
				4: 17,
				5: s,
				7: 42,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 43,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 44,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 45,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 46,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 47,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 48,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 49,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				4: 17,
				5: s,
				7: 50,
				8: c,
				9: n,
				11: i,
				13: a,
				14: 14,
				15: 15,
				16: 16,
				17: 18,
				18: 19,
				19: 20,
				20: 21,
				21: l,
				22: u,
				23: d,
				24: f,
				25: 23,
				33: 25,
				41: p,
				42: m,
				43: h,
				44: g,
				45: _,
				46: v,
				54: y,
				72: b,
				74: x,
				77: S,
				89: C,
				90: w
			},
			{
				26: 51,
				89: [1, 52],
				90: [1, 53]
			},
			{
				55: 54,
				89: [1, 55],
				90: [1, 56]
			},
			{
				29: [1, 59],
				61: [1, 57],
				63: [1, 58]
			},
			e(T, [2, 17]),
			e(T, [2, 18]),
			e(T, [2, 19]),
			e(T, [2, 20]),
			{
				30: 60,
				33: 62,
				75: E,
				89: C,
				90: w
			},
			{
				30: 63,
				33: 62,
				75: E,
				89: C,
				90: w
			},
			{
				30: 64,
				33: 62,
				75: E,
				89: C,
				90: w
			},
			e(D, [2, 29]),
			e(D, [2, 30]),
			e(D, [2, 31]),
			e(D, [2, 32]),
			e(D, [2, 33]),
			e(D, [2, 34]),
			e(O, [2, 81]),
			e(O, [2, 82]),
			{ 1: [2, 3] },
			{ 8: [2, 8] },
			{ 8: [2, 9] },
			{ 8: [2, 10] },
			{ 8: [2, 11] },
			{ 8: [2, 12] },
			{ 8: [2, 13] },
			{ 8: [2, 14] },
			{ 8: [2, 15] },
			{ 8: [2, 16] },
			{
				27: [1, 65],
				29: [1, 66]
			},
			e(k, [2, 79]),
			e(k, [2, 80]),
			{
				27: [1, 67],
				29: [1, 68]
			},
			e(k, [2, 85]),
			e(k, [2, 86]),
			{
				62: 69,
				65: ee,
				66: A,
				67: te,
				68: ne,
				69: re,
				70: ie,
				71: ae
			},
			{
				62: 77,
				65: ee,
				66: A,
				67: te,
				68: ne,
				69: re,
				70: ie,
				71: ae
			},
			{
				30: 78,
				33: 62,
				75: E,
				89: C,
				90: w
			},
			{
				73: 79,
				75: j,
				76: M,
				78: 81,
				79: 82,
				80: N,
				81: P,
				82: F,
				83: I,
				84: L,
				85: R,
				86: z,
				87: B,
				88: V
			},
			e(oe, [2, 60]),
			e(oe, [2, 62]),
			{
				73: 93,
				75: j,
				76: M,
				78: 81,
				79: 82,
				80: N,
				81: P,
				82: F,
				83: I,
				84: L,
				85: R,
				86: z,
				87: B,
				88: V
			},
			{
				30: 94,
				33: 62,
				75: E,
				76: M,
				89: C,
				90: w
			},
			{ 5: [1, 95] },
			{
				30: 96,
				33: 62,
				75: E,
				89: C,
				90: w
			},
			{ 5: [1, 97] },
			{
				30: 98,
				33: 62,
				75: E,
				89: C,
				90: w
			},
			{ 63: [1, 99] },
			e(H, [2, 50]),
			e(H, [2, 51]),
			e(H, [2, 52]),
			e(H, [2, 53]),
			e(H, [2, 54]),
			e(H, [2, 55]),
			e(H, [2, 56]),
			{ 64: [1, 100] },
			e(T, [2, 59], { 76: M }),
			e(T, [2, 64], { 76: se }),
			{
				33: 103,
				75: [1, 102],
				89: C,
				90: w
			},
			e(ce, [2, 65], {
				79: 104,
				75: j,
				80: N,
				81: P,
				82: F,
				83: I,
				84: L,
				85: R,
				86: z,
				87: B,
				88: V
			}),
			e(U, [2, 67]),
			e(U, [2, 69]),
			e(U, [2, 70]),
			e(U, [2, 71]),
			e(U, [2, 72]),
			e(U, [2, 73]),
			e(U, [2, 74]),
			e(U, [2, 75]),
			e(U, [2, 76]),
			e(U, [2, 77]),
			e(U, [2, 78]),
			e(T, [2, 57], { 76: se }),
			e(T, [2, 58], { 76: M }),
			{
				5: W,
				28: 105,
				31: G,
				34: K,
				36: q,
				38: J,
				40: Y
			},
			{
				27: [1, 112],
				76: M
			},
			{
				5: X,
				40: Z,
				56: 113,
				57: Q,
				59: $
			},
			{
				27: [1, 118],
				76: M
			},
			{
				33: 119,
				89: C,
				90: w
			},
			{
				33: 120,
				89: C,
				90: w
			},
			{
				75: j,
				78: 121,
				79: 82,
				80: N,
				81: P,
				82: F,
				83: I,
				84: L,
				85: R,
				86: z,
				87: B,
				88: V
			},
			e(oe, [2, 61]),
			e(oe, [2, 63]),
			e(U, [2, 68]),
			e(T, [2, 21]),
			{ 32: [1, 122] },
			{ 32: [1, 123] },
			{ 32: [1, 124] },
			{ 32: [1, 125] },
			{
				5: W,
				28: 126,
				31: G,
				34: K,
				36: q,
				38: J,
				40: Y
			},
			e(T, [2, 28]),
			{ 5: [1, 127] },
			e(T, [2, 42]),
			{ 32: [1, 128] },
			{ 32: [1, 129] },
			{
				5: X,
				40: Z,
				56: 130,
				57: Q,
				59: $
			},
			e(T, [2, 47]),
			{ 5: [1, 131] },
			e(T, [2, 48]),
			e(T, [2, 49]),
			e(ce, [2, 66], {
				79: 104,
				75: j,
				80: N,
				81: P,
				82: F,
				83: I,
				84: L,
				85: R,
				86: z,
				87: B,
				88: V
			}),
			{
				33: 132,
				89: C,
				90: w
			},
			{
				35: 133,
				89: [1, 134],
				90: [1, 135]
			},
			{
				37: 136,
				47: [1, 137],
				48: [1, 138],
				49: [1, 139]
			},
			{
				39: 140,
				50: [1, 141],
				51: [1, 142],
				52: [1, 143],
				53: [1, 144]
			},
			e(T, [2, 27]),
			{
				5: W,
				28: 145,
				31: G,
				34: K,
				36: q,
				38: J,
				40: Y
			},
			{
				58: 146,
				89: [1, 147],
				90: [1, 148]
			},
			{
				60: 149,
				89: [1, 150],
				90: [1, 151]
			},
			e(T, [2, 46]),
			{
				5: X,
				40: Z,
				56: 152,
				57: Q,
				59: $
			},
			{ 5: [1, 153] },
			{ 5: [1, 154] },
			{ 5: [2, 83] },
			{ 5: [2, 84] },
			{ 5: [1, 155] },
			{ 5: [2, 35] },
			{ 5: [2, 36] },
			{ 5: [2, 37] },
			{ 5: [1, 156] },
			{ 5: [2, 38] },
			{ 5: [2, 39] },
			{ 5: [2, 40] },
			{ 5: [2, 41] },
			e(T, [2, 22]),
			{ 5: [1, 157] },
			{ 5: [2, 87] },
			{ 5: [2, 88] },
			{ 5: [1, 158] },
			{ 5: [2, 89] },
			{ 5: [2, 90] },
			e(T, [2, 43]),
			{
				5: W,
				28: 159,
				31: G,
				34: K,
				36: q,
				38: J,
				40: Y
			},
			{
				5: W,
				28: 160,
				31: G,
				34: K,
				36: q,
				38: J,
				40: Y
			},
			{
				5: W,
				28: 161,
				31: G,
				34: K,
				36: q,
				38: J,
				40: Y
			},
			{
				5: W,
				28: 162,
				31: G,
				34: K,
				36: q,
				38: J,
				40: Y
			},
			{
				5: X,
				40: Z,
				56: 163,
				57: Q,
				59: $
			},
			{
				5: X,
				40: Z,
				56: 164,
				57: Q,
				59: $
			},
			e(T, [2, 23]),
			e(T, [2, 24]),
			e(T, [2, 25]),
			e(T, [2, 26]),
			e(T, [2, 44]),
			e(T, [2, 45])
		],
		defaultActions: {
			8: [2, 2],
			12: [2, 1],
			41: [2, 3],
			42: [2, 8],
			43: [2, 9],
			44: [2, 10],
			45: [2, 11],
			46: [2, 12],
			47: [2, 13],
			48: [2, 14],
			49: [2, 15],
			50: [2, 16],
			134: [2, 83],
			135: [2, 84],
			137: [2, 35],
			138: [2, 36],
			139: [2, 37],
			141: [2, 38],
			142: [2, 39],
			143: [2, 40],
			144: [2, 41],
			147: [2, 87],
			148: [2, 88],
			150: [2, 89],
			151: [2, 90]
		},
		parseError: /* @__PURE__ */ __name(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var t = this, n = [0], i = [], a = [null], o = [], s = this.table, c = "", l = 0, u = 0, d = 0, f = 2, p = 1, m = o.slice.call(arguments, 1), h = Object.create(this.lexer), g = { yy: {} };
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
				var e = i.pop() || h.lex() || p;
				return typeof e != "number" && (e instanceof Array && (i = e, e = i.pop()), e = t.symbols_[e] || e), e;
			}
			__name(x, "lex");
			for (var S, C, w, T, E, D = {}, O, k, ee, A;;) {
				if (w = n[n.length - 1], this.defaultActions[w] ? T = this.defaultActions[w] : (S ??= x(), T = s[w] && s[w][S]), T === void 0 || !T.length || !T[0]) {
					var te = "";
					for (O in A = [], s[w]) this.terminals_[O] && O > f && A.push("'" + this.terminals_[O] + "'");
					te = h.showPosition ? "Parse error on line " + (l + 1) + ":\n" + h.showPosition() + "\nExpecting " + A.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (S == p ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(te, {
						text: h.match,
						token: this.terminals_[S] || S,
						line: h.yylineno,
						loc: v,
						expected: A
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
						k && (n = n.slice(0, -1 * k * 2), a = a.slice(0, -1 * k), o = o.slice(0, -1 * k)), n.push(this.productions_[T[1]][0]), a.push(D.$), o.push(D._$), ee = s[n[n.length - 2]][n[n.length - 1]], n.push(ee);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	le.lexer = /* @__PURE__ */ (function() {
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
					case 0: return "title";
					case 1: return this.begin("acc_title"), 9;
					case 2: return this.popState(), "acc_title_value";
					case 3: return this.begin("acc_descr"), 11;
					case 4: return this.popState(), "acc_descr_value";
					case 5:
						this.begin("acc_descr_multiline");
						break;
					case 6:
						this.popState();
						break;
					case 7: return "acc_descr_multiline_value";
					case 8: return 21;
					case 9: return 22;
					case 10: return 23;
					case 11: return 24;
					case 12: return 5;
					case 13: break;
					case 14: break;
					case 15: break;
					case 16: return 8;
					case 17: return 6;
					case 18: return 27;
					case 19: return 40;
					case 20: return 29;
					case 21: return 32;
					case 22: return 31;
					case 23: return 34;
					case 24: return 36;
					case 25: return 38;
					case 26: return 41;
					case 27: return 42;
					case 28: return 43;
					case 29: return 44;
					case 30: return 45;
					case 31: return 46;
					case 32: return 47;
					case 33: return 48;
					case 34: return 49;
					case 35: return 50;
					case 36: return 51;
					case 37: return 52;
					case 38: return 53;
					case 39: return 54;
					case 40: return 65;
					case 41: return 66;
					case 42: return 67;
					case 43: return 68;
					case 44: return 69;
					case 45: return 70;
					case 46: return 71;
					case 47: return 57;
					case 48: return 59;
					case 49: return this.begin("style"), 77;
					case 50: return 75;
					case 51: return 81;
					case 52: return 88;
					case 53: return "PERCENT";
					case 54: return 86;
					case 55: return 84;
					case 56: break;
					case 57:
						this.begin("string");
						break;
					case 58:
						this.popState();
						break;
					case 59: return this.begin("style"), 72;
					case 60: return this.begin("style"), 74;
					case 61: return 61;
					case 62: return 64;
					case 63: return 63;
					case 64:
						this.begin("string");
						break;
					case 65:
						this.popState();
						break;
					case 66: return "qString";
					case 67: return t.yytext = t.yytext.trim(), 89;
					case 68: return 75;
					case 69: return 80;
					case 70: return 76;
				}
			}, "anonymous"),
			rules: [
				/^(?:title\s[^#\n;]+)/i,
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
				/^(?:(\r?\n)+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:%[^\n]*)/i,
				/^(?:$)/i,
				/^(?:requirementDiagram\b)/i,
				/^(?:\{)/i,
				/^(?:\})/i,
				/^(?::{3})/i,
				/^(?::)/i,
				/^(?:id\b)/i,
				/^(?:text\b)/i,
				/^(?:risk\b)/i,
				/^(?:verifyMethod\b)/i,
				/^(?:requirement\b)/i,
				/^(?:functionalRequirement\b)/i,
				/^(?:interfaceRequirement\b)/i,
				/^(?:performanceRequirement\b)/i,
				/^(?:physicalRequirement\b)/i,
				/^(?:designConstraint\b)/i,
				/^(?:low\b)/i,
				/^(?:medium\b)/i,
				/^(?:high\b)/i,
				/^(?:analysis\b)/i,
				/^(?:demonstration\b)/i,
				/^(?:inspection\b)/i,
				/^(?:test\b)/i,
				/^(?:element\b)/i,
				/^(?:contains\b)/i,
				/^(?:copies\b)/i,
				/^(?:derives\b)/i,
				/^(?:satisfies\b)/i,
				/^(?:verifies\b)/i,
				/^(?:refines\b)/i,
				/^(?:traces\b)/i,
				/^(?:type\b)/i,
				/^(?:docref\b)/i,
				/^(?:style\b)/i,
				/^(?:\w+)/i,
				/^(?::)/i,
				/^(?:;)/i,
				/^(?:%)/i,
				/^(?:-)/i,
				/^(?:#)/i,
				/^(?: )/i,
				/^(?:["])/i,
				/^(?:\n)/i,
				/^(?:classDef\b)/i,
				/^(?:class\b)/i,
				/^(?:<-)/i,
				/^(?:->)/i,
				/^(?:-)/i,
				/^(?:["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:[\w][^:,\r\n\{\<\>\-\=]*)/i,
				/^(?:\w+)/i,
				/^(?:[0-9]+)/i,
				/^(?:,)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [
						6,
						7,
						68,
						69,
						70
					],
					inclusive: !1
				},
				acc_descr: {
					rules: [
						4,
						68,
						69,
						70
					],
					inclusive: !1
				},
				acc_title: {
					rules: [
						2,
						68,
						69,
						70
					],
					inclusive: !1
				},
				style: {
					rules: [
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						58,
						68,
						69,
						70
					],
					inclusive: !1
				},
				unqString: {
					rules: [
						68,
						69,
						70
					],
					inclusive: !1
				},
				token: {
					rules: [
						68,
						69,
						70
					],
					inclusive: !1
				},
				string: {
					rules: [
						65,
						66,
						68,
						69,
						70
					],
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
						15,
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
						59,
						60,
						61,
						62,
						63,
						64,
						67,
						68,
						69,
						70
					],
					inclusive: !0
				}
			}
		};
	})();
	function ue() {
		this.yy = {};
	}
	return __name(ue, "Parser"), ue.prototype = le, le.Parser = ue, new ue();
})();
parser.parser = parser;
var requirementDiagram_default = parser, RequirementDB = class {
	constructor() {
		this.relations = [], this.latestRequirement = this.getInitialRequirement(), this.requirements = /* @__PURE__ */ new Map(), this.latestElement = this.getInitialElement(), this.elements = /* @__PURE__ */ new Map(), this.classes = /* @__PURE__ */ new Map(), this.direction = "TB", this.RequirementType = {
			REQUIREMENT: "Requirement",
			FUNCTIONAL_REQUIREMENT: "Functional Requirement",
			INTERFACE_REQUIREMENT: "Interface Requirement",
			PERFORMANCE_REQUIREMENT: "Performance Requirement",
			PHYSICAL_REQUIREMENT: "Physical Requirement",
			DESIGN_CONSTRAINT: "Design Constraint"
		}, this.RiskLevel = {
			LOW_RISK: "Low",
			MED_RISK: "Medium",
			HIGH_RISK: "High"
		}, this.VerifyType = {
			VERIFY_ANALYSIS: "Analysis",
			VERIFY_DEMONSTRATION: "Demonstration",
			VERIFY_INSPECTION: "Inspection",
			VERIFY_TEST: "Test"
		}, this.Relationships = {
			CONTAINS: "contains",
			COPIES: "copies",
			DERIVES: "derives",
			SATISFIES: "satisfies",
			VERIFIES: "verifies",
			REFINES: "refines",
			TRACES: "traces"
		}, this.setAccTitle = setAccTitle, this.getAccTitle = getAccTitle, this.setAccDescription = setAccDescription, this.getAccDescription = getAccDescription, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.getConfig = /* @__PURE__ */ __name(() => getConfig2().requirement, "getConfig"), this.clear(), this.setDirection = this.setDirection.bind(this), this.addRequirement = this.addRequirement.bind(this), this.setNewReqId = this.setNewReqId.bind(this), this.setNewReqRisk = this.setNewReqRisk.bind(this), this.setNewReqText = this.setNewReqText.bind(this), this.setNewReqVerifyMethod = this.setNewReqVerifyMethod.bind(this), this.addElement = this.addElement.bind(this), this.setNewElementType = this.setNewElementType.bind(this), this.setNewElementDocRef = this.setNewElementDocRef.bind(this), this.addRelationship = this.addRelationship.bind(this), this.setCssStyle = this.setCssStyle.bind(this), this.setClass = this.setClass.bind(this), this.defineClass = this.defineClass.bind(this), this.setAccTitle = this.setAccTitle.bind(this), this.setAccDescription = this.setAccDescription.bind(this);
	}
	static #_ = __name(this, "RequirementDB");
	getDirection() {
		return this.direction;
	}
	setDirection(e) {
		this.direction = e;
	}
	resetLatestRequirement() {
		this.latestRequirement = this.getInitialRequirement();
	}
	resetLatestElement() {
		this.latestElement = this.getInitialElement();
	}
	getInitialRequirement() {
		return {
			requirementId: "",
			text: "",
			risk: "",
			verifyMethod: "",
			name: "",
			type: "",
			cssStyles: [],
			classes: ["default"]
		};
	}
	getInitialElement() {
		return {
			name: "",
			type: "",
			docRef: "",
			cssStyles: [],
			classes: ["default"]
		};
	}
	addRequirement(e, t) {
		return this.requirements.has(e) || this.requirements.set(e, {
			name: e,
			type: t,
			requirementId: this.latestRequirement.requirementId,
			text: this.latestRequirement.text,
			risk: this.latestRequirement.risk,
			verifyMethod: this.latestRequirement.verifyMethod,
			cssStyles: [],
			classes: ["default"]
		}), this.resetLatestRequirement(), this.requirements.get(e);
	}
	getRequirements() {
		return this.requirements;
	}
	setNewReqId(e) {
		this.latestRequirement !== void 0 && (this.latestRequirement.requirementId = e);
	}
	setNewReqText(e) {
		this.latestRequirement !== void 0 && (this.latestRequirement.text = e);
	}
	setNewReqRisk(e) {
		this.latestRequirement !== void 0 && (this.latestRequirement.risk = e);
	}
	setNewReqVerifyMethod(e) {
		this.latestRequirement !== void 0 && (this.latestRequirement.verifyMethod = e);
	}
	addElement(e) {
		return this.elements.has(e) || (this.elements.set(e, {
			name: e,
			type: this.latestElement.type,
			docRef: this.latestElement.docRef,
			cssStyles: [],
			classes: ["default"]
		}), log.info("Added new element: ", e)), this.resetLatestElement(), this.elements.get(e);
	}
	getElements() {
		return this.elements;
	}
	setNewElementType(e) {
		this.latestElement !== void 0 && (this.latestElement.type = e);
	}
	setNewElementDocRef(e) {
		this.latestElement !== void 0 && (this.latestElement.docRef = e);
	}
	addRelationship(e, t, n) {
		this.relations.push({
			type: e,
			src: t,
			dst: n
		});
	}
	getRelationships() {
		return this.relations;
	}
	clear() {
		this.relations = [], this.resetLatestRequirement(), this.requirements = /* @__PURE__ */ new Map(), this.resetLatestElement(), this.elements = /* @__PURE__ */ new Map(), this.classes = /* @__PURE__ */ new Map(), clear();
	}
	setCssStyle(e, t) {
		for (let n of e) {
			let e = this.requirements.get(n) ?? this.elements.get(n);
			if (!t || !e) return;
			for (let n of t) n.includes(",") ? e.cssStyles.push(...n.split(",")) : e.cssStyles.push(n);
		}
	}
	setClass(e, t) {
		for (let n of e) {
			let e = this.requirements.get(n) ?? this.elements.get(n);
			if (e) for (let n of t) {
				e.classes.push(n);
				let t = this.classes.get(n)?.styles;
				t && e.cssStyles.push(...t);
			}
		}
	}
	defineClass(e, t) {
		for (let n of e) {
			let e = this.classes.get(n);
			e === void 0 && (e = {
				id: n,
				styles: [],
				textStyles: []
			}, this.classes.set(n, e)), t && t.forEach(function(t) {
				if (/color/.exec(t)) {
					let n = t.replace("fill", "bgFill");
					e.textStyles.push(n);
				}
				e.styles.push(t);
			}), this.requirements.forEach((e) => {
				e.classes.includes(n) && e.cssStyles.push(...t.flatMap((e) => e.split(",")));
			}), this.elements.forEach((e) => {
				e.classes.includes(n) && e.cssStyles.push(...t.flatMap((e) => e.split(",")));
			});
		}
	}
	getClasses() {
		return this.classes;
	}
	getData() {
		let e = getConfig2(), t = [], n = [];
		for (let n of this.requirements.values()) {
			let r = n;
			r.id = n.name, r.cssStyles = n.cssStyles, r.cssClasses = n.classes.join(" "), r.shape = "requirementBox", r.look = e.look, t.push(r);
		}
		for (let n of this.elements.values()) {
			let r = n;
			r.shape = "requirementBox", r.look = e.look, r.id = n.name, r.cssStyles = n.cssStyles, r.cssClasses = n.classes.join(" "), t.push(r);
		}
		for (let t of this.relations) {
			let r = 0, i = t.type === this.Relationships.CONTAINS, a = {
				id: `${t.src}-${t.dst}-${r}`,
				start: this.requirements.get(t.src)?.name ?? this.elements.get(t.src)?.name,
				end: this.requirements.get(t.dst)?.name ?? this.elements.get(t.dst)?.name,
				label: `&lt;&lt;${t.type}&gt;&gt;`,
				classes: "relationshipLine",
				style: ["fill:none", i ? "" : "stroke-dasharray: 10,7"],
				labelpos: "c",
				thickness: "normal",
				type: "normal",
				pattern: i ? "normal" : "dashed",
				arrowTypeStart: i ? "requirement_contains" : "",
				arrowTypeEnd: i ? "" : "requirement_arrow",
				look: e.look
			};
			n.push(a), r++;
		}
		return {
			nodes: t,
			edges: n,
			other: {},
			config: e,
			direction: this.getDirection()
		};
	}
}, styles_default = /* @__PURE__ */ __name((e) => `

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }
  .divider {
    stroke: ${e.nodeBorder};
    stroke-width: 1;
  }
  .label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .label text,span {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }
  .labelBkg {
    background-color: ${e.edgeLabelBackground};
  }

`, "getStyles"), requirementRenderer_exports = {};
__export(requirementRenderer_exports, { draw: () => draw });
var draw = /* @__PURE__ */ __name(async function(n, r, i, a) {
	log.info("REF0:"), log.info("Drawing requirement diagram (unified)", r);
	let { securityLevel: o, state: s, layout: c } = getConfig2(), u = a.db.getData(), d = getDiagramElement(r, o);
	u.type = a.type, u.layoutAlgorithm = getRegisteredLayoutAlgorithm(c), u.nodeSpacing = s?.nodeSpacing ?? 50, u.rankSpacing = s?.rankSpacing ?? 50, u.markers = ["requirement_contains", "requirement_arrow"], u.diagramId = r, await render(u, d), utils_default.insertTitle(d, "requirementDiagramTitleText", s?.titleTopMargin ?? 25, a.db.getDiagramTitle()), setupViewPortForSVG(d, 8, "requirementDiagram", s?.useMaxWidth ?? !0);
}, "draw"), diagram = {
	parser: requirementDiagram_default,
	get db() {
		return new RequirementDB();
	},
	renderer: requirementRenderer_exports,
	styles: styles_default
};
export { diagram };

//# sourceMappingURL=requirementDiagram-UZGBJVZJ-CVO799vb.js.map