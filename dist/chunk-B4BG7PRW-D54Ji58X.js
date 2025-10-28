import { c as getEdgeId, g as utils_default } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { A as parseGenericTypes, B as setAccTitle, C as getDiagramTitle, I as sanitizeText, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, s as common_default, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as getIconStyles } from "./chunk-FMBD7UC4-D5HULJBc.js";
import { t as getDiagramElement } from "./chunk-55IACEB6-BKO4wDwb.js";
import { t as setupViewPortForSVG } from "./chunk-QN33PNHL-DXOPcIi5.js";
import { r as render, t as getRegisteredLayoutAlgorithm } from "./chunk-N4CR4FBY-BvPrzEpI.js";
var parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [1, 18], n = [1, 19], i = [1, 20], a = [1, 41], o = [1, 42], s = [1, 26], c = [1, 24], l = [1, 25], u = [1, 32], d = [1, 33], f = [1, 34], p = [1, 45], m = [1, 35], h = [1, 36], g = [1, 37], _ = [1, 38], v = [1, 27], y = [1, 28], b = [1, 29], x = [1, 30], S = [1, 31], C = [1, 44], w = [1, 46], T = [1, 43], E = [1, 47], D = [1, 9], O = [
		1,
		8,
		9
	], k = [1, 58], A = [1, 59], j = [1, 60], M = [1, 61], N = [1, 62], P = [1, 63], F = [1, 64], I = [
		1,
		8,
		9,
		41
	], ee = [1, 76], L = [
		1,
		8,
		9,
		12,
		13,
		22,
		39,
		41,
		44,
		68,
		69,
		70,
		71,
		72,
		73,
		74,
		79,
		81
	], R = [
		1,
		8,
		9,
		12,
		13,
		18,
		20,
		22,
		39,
		41,
		44,
		50,
		60,
		68,
		69,
		70,
		71,
		72,
		73,
		74,
		79,
		81,
		86,
		100,
		102,
		103
	], z = [
		13,
		60,
		86,
		100,
		102,
		103
	], B = [
		13,
		60,
		73,
		74,
		86,
		100,
		102,
		103
	], te = [
		13,
		60,
		68,
		69,
		70,
		71,
		72,
		86,
		100,
		102,
		103
	], ne = [1, 100], V = [1, 117], H = [1, 113], U = [1, 109], W = [1, 115], G = [1, 110], K = [1, 111], q = [1, 112], J = [1, 114], Y = [1, 116], re = [
		22,
		48,
		60,
		61,
		82,
		86,
		87,
		88,
		89,
		90
	], X = [
		1,
		8,
		9,
		39,
		41,
		44
	], Z = [
		1,
		8,
		9,
		22
	], ie = [1, 145], ae = [
		1,
		8,
		9,
		61
	], Q = [
		1,
		8,
		9,
		22,
		48,
		60,
		61,
		82,
		86,
		87,
		88,
		89,
		90
	], oe = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mermaidDoc: 4,
			statements: 5,
			graphConfig: 6,
			CLASS_DIAGRAM: 7,
			NEWLINE: 8,
			EOF: 9,
			statement: 10,
			classLabel: 11,
			SQS: 12,
			STR: 13,
			SQE: 14,
			namespaceName: 15,
			alphaNumToken: 16,
			classLiteralName: 17,
			DOT: 18,
			className: 19,
			GENERICTYPE: 20,
			relationStatement: 21,
			LABEL: 22,
			namespaceStatement: 23,
			classStatement: 24,
			memberStatement: 25,
			annotationStatement: 26,
			clickStatement: 27,
			styleStatement: 28,
			cssClassStatement: 29,
			noteStatement: 30,
			classDefStatement: 31,
			direction: 32,
			acc_title: 33,
			acc_title_value: 34,
			acc_descr: 35,
			acc_descr_value: 36,
			acc_descr_multiline_value: 37,
			namespaceIdentifier: 38,
			STRUCT_START: 39,
			classStatements: 40,
			STRUCT_STOP: 41,
			NAMESPACE: 42,
			classIdentifier: 43,
			STYLE_SEPARATOR: 44,
			members: 45,
			CLASS: 46,
			emptyBody: 47,
			SPACE: 48,
			ANNOTATION_START: 49,
			ANNOTATION_END: 50,
			MEMBER: 51,
			SEPARATOR: 52,
			relation: 53,
			NOTE_FOR: 54,
			noteText: 55,
			NOTE: 56,
			CLASSDEF: 57,
			classList: 58,
			stylesOpt: 59,
			ALPHA: 60,
			COMMA: 61,
			direction_tb: 62,
			direction_bt: 63,
			direction_rl: 64,
			direction_lr: 65,
			relationType: 66,
			lineType: 67,
			AGGREGATION: 68,
			EXTENSION: 69,
			COMPOSITION: 70,
			DEPENDENCY: 71,
			LOLLIPOP: 72,
			LINE: 73,
			DOTTED_LINE: 74,
			CALLBACK: 75,
			LINK: 76,
			LINK_TARGET: 77,
			CLICK: 78,
			CALLBACK_NAME: 79,
			CALLBACK_ARGS: 80,
			HREF: 81,
			STYLE: 82,
			CSSCLASS: 83,
			style: 84,
			styleComponent: 85,
			NUM: 86,
			COLON: 87,
			UNIT: 88,
			BRKT: 89,
			PCT: 90,
			commentToken: 91,
			textToken: 92,
			graphCodeTokens: 93,
			textNoTagsToken: 94,
			TAGSTART: 95,
			TAGEND: 96,
			"==": 97,
			"--": 98,
			DEFAULT: 99,
			MINUS: 100,
			keywords: 101,
			UNICODE_TEXT: 102,
			BQUOTE_STR: 103,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			7: "CLASS_DIAGRAM",
			8: "NEWLINE",
			9: "EOF",
			12: "SQS",
			13: "STR",
			14: "SQE",
			18: "DOT",
			20: "GENERICTYPE",
			22: "LABEL",
			33: "acc_title",
			34: "acc_title_value",
			35: "acc_descr",
			36: "acc_descr_value",
			37: "acc_descr_multiline_value",
			39: "STRUCT_START",
			41: "STRUCT_STOP",
			42: "NAMESPACE",
			44: "STYLE_SEPARATOR",
			46: "CLASS",
			48: "SPACE",
			49: "ANNOTATION_START",
			50: "ANNOTATION_END",
			51: "MEMBER",
			52: "SEPARATOR",
			54: "NOTE_FOR",
			56: "NOTE",
			57: "CLASSDEF",
			60: "ALPHA",
			61: "COMMA",
			62: "direction_tb",
			63: "direction_bt",
			64: "direction_rl",
			65: "direction_lr",
			68: "AGGREGATION",
			69: "EXTENSION",
			70: "COMPOSITION",
			71: "DEPENDENCY",
			72: "LOLLIPOP",
			73: "LINE",
			74: "DOTTED_LINE",
			75: "CALLBACK",
			76: "LINK",
			77: "LINK_TARGET",
			78: "CLICK",
			79: "CALLBACK_NAME",
			80: "CALLBACK_ARGS",
			81: "HREF",
			82: "STYLE",
			83: "CSSCLASS",
			86: "NUM",
			87: "COLON",
			88: "UNIT",
			89: "BRKT",
			90: "PCT",
			93: "graphCodeTokens",
			95: "TAGSTART",
			96: "TAGEND",
			97: "==",
			98: "--",
			99: "DEFAULT",
			100: "MINUS",
			101: "keywords",
			102: "UNICODE_TEXT",
			103: "BQUOTE_STR"
		},
		productions_: [
			0,
			[3, 1],
			[3, 1],
			[4, 1],
			[6, 4],
			[5, 1],
			[5, 2],
			[5, 3],
			[11, 3],
			[15, 1],
			[15, 1],
			[15, 3],
			[15, 2],
			[19, 1],
			[19, 3],
			[19, 1],
			[19, 2],
			[19, 2],
			[19, 2],
			[10, 1],
			[10, 2],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 2],
			[10, 2],
			[10, 1],
			[23, 4],
			[23, 5],
			[38, 2],
			[40, 1],
			[40, 2],
			[40, 3],
			[24, 1],
			[24, 3],
			[24, 4],
			[24, 3],
			[24, 6],
			[43, 2],
			[43, 3],
			[47, 0],
			[47, 2],
			[47, 2],
			[26, 4],
			[45, 1],
			[45, 2],
			[25, 1],
			[25, 2],
			[25, 1],
			[25, 1],
			[21, 3],
			[21, 4],
			[21, 4],
			[21, 5],
			[30, 3],
			[30, 2],
			[31, 3],
			[58, 1],
			[58, 3],
			[32, 1],
			[32, 1],
			[32, 1],
			[32, 1],
			[53, 3],
			[53, 2],
			[53, 2],
			[53, 1],
			[66, 1],
			[66, 1],
			[66, 1],
			[66, 1],
			[66, 1],
			[67, 1],
			[67, 1],
			[27, 3],
			[27, 4],
			[27, 3],
			[27, 4],
			[27, 4],
			[27, 5],
			[27, 3],
			[27, 4],
			[27, 4],
			[27, 5],
			[27, 4],
			[27, 5],
			[27, 5],
			[27, 6],
			[28, 3],
			[29, 3],
			[59, 1],
			[59, 3],
			[84, 1],
			[84, 2],
			[85, 1],
			[85, 1],
			[85, 1],
			[85, 1],
			[85, 1],
			[85, 1],
			[85, 1],
			[85, 1],
			[85, 1],
			[91, 1],
			[91, 1],
			[92, 1],
			[92, 1],
			[92, 1],
			[92, 1],
			[92, 1],
			[92, 1],
			[92, 1],
			[94, 1],
			[94, 1],
			[94, 1],
			[94, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[16, 1],
			[17, 1],
			[55, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 8:
					this.$ = a[s - 1];
					break;
				case 9:
				case 10:
				case 13:
				case 15:
					this.$ = a[s];
					break;
				case 11:
				case 14:
					this.$ = a[s - 2] + "." + a[s];
					break;
				case 12:
				case 16:
					this.$ = a[s - 1] + a[s];
					break;
				case 17:
				case 18:
					this.$ = a[s - 1] + "~" + a[s] + "~";
					break;
				case 19:
					r.addRelation(a[s]);
					break;
				case 20:
					a[s - 1].title = r.cleanupLabel(a[s]), r.addRelation(a[s - 1]);
					break;
				case 31:
					this.$ = a[s].trim(), r.setAccTitle(this.$);
					break;
				case 32:
				case 33:
					this.$ = a[s].trim(), r.setAccDescription(this.$);
					break;
				case 34:
					r.addClassesToNamespace(a[s - 3], a[s - 1]);
					break;
				case 35:
					r.addClassesToNamespace(a[s - 4], a[s - 1]);
					break;
				case 36:
					this.$ = a[s], r.addNamespace(a[s]);
					break;
				case 37:
					this.$ = [a[s]];
					break;
				case 38:
					this.$ = [a[s - 1]];
					break;
				case 39:
					a[s].unshift(a[s - 2]), this.$ = a[s];
					break;
				case 41:
					r.setCssClass(a[s - 2], a[s]);
					break;
				case 42:
					r.addMembers(a[s - 3], a[s - 1]);
					break;
				case 44:
					r.setCssClass(a[s - 5], a[s - 3]), r.addMembers(a[s - 5], a[s - 1]);
					break;
				case 45:
					this.$ = a[s], r.addClass(a[s]);
					break;
				case 46:
					this.$ = a[s - 1], r.addClass(a[s - 1]), r.setClassLabel(a[s - 1], a[s]);
					break;
				case 50:
					r.addAnnotation(a[s], a[s - 2]);
					break;
				case 51:
				case 64:
					this.$ = [a[s]];
					break;
				case 52:
					a[s].push(a[s - 1]), this.$ = a[s];
					break;
				case 53: break;
				case 54:
					r.addMember(a[s - 1], r.cleanupLabel(a[s]));
					break;
				case 55: break;
				case 56: break;
				case 57:
					this.$ = {
						id1: a[s - 2],
						id2: a[s],
						relation: a[s - 1],
						relationTitle1: "none",
						relationTitle2: "none"
					};
					break;
				case 58:
					this.$ = {
						id1: a[s - 3],
						id2: a[s],
						relation: a[s - 1],
						relationTitle1: a[s - 2],
						relationTitle2: "none"
					};
					break;
				case 59:
					this.$ = {
						id1: a[s - 3],
						id2: a[s],
						relation: a[s - 2],
						relationTitle1: "none",
						relationTitle2: a[s - 1]
					};
					break;
				case 60:
					this.$ = {
						id1: a[s - 4],
						id2: a[s],
						relation: a[s - 2],
						relationTitle1: a[s - 3],
						relationTitle2: a[s - 1]
					};
					break;
				case 61:
					r.addNote(a[s], a[s - 1]);
					break;
				case 62:
					r.addNote(a[s]);
					break;
				case 63:
					this.$ = a[s - 2], r.defineClass(a[s - 1], a[s]);
					break;
				case 65:
					this.$ = a[s - 2].concat([a[s]]);
					break;
				case 66:
					r.setDirection("TB");
					break;
				case 67:
					r.setDirection("BT");
					break;
				case 68:
					r.setDirection("RL");
					break;
				case 69:
					r.setDirection("LR");
					break;
				case 70:
					this.$ = {
						type1: a[s - 2],
						type2: a[s],
						lineType: a[s - 1]
					};
					break;
				case 71:
					this.$ = {
						type1: "none",
						type2: a[s],
						lineType: a[s - 1]
					};
					break;
				case 72:
					this.$ = {
						type1: a[s - 1],
						type2: "none",
						lineType: a[s]
					};
					break;
				case 73:
					this.$ = {
						type1: "none",
						type2: "none",
						lineType: a[s]
					};
					break;
				case 74:
					this.$ = r.relationType.AGGREGATION;
					break;
				case 75:
					this.$ = r.relationType.EXTENSION;
					break;
				case 76:
					this.$ = r.relationType.COMPOSITION;
					break;
				case 77:
					this.$ = r.relationType.DEPENDENCY;
					break;
				case 78:
					this.$ = r.relationType.LOLLIPOP;
					break;
				case 79:
					this.$ = r.lineType.LINE;
					break;
				case 80:
					this.$ = r.lineType.DOTTED_LINE;
					break;
				case 81:
				case 87:
					this.$ = a[s - 2], r.setClickEvent(a[s - 1], a[s]);
					break;
				case 82:
				case 88:
					this.$ = a[s - 3], r.setClickEvent(a[s - 2], a[s - 1]), r.setTooltip(a[s - 2], a[s]);
					break;
				case 83:
					this.$ = a[s - 2], r.setLink(a[s - 1], a[s]);
					break;
				case 84:
					this.$ = a[s - 3], r.setLink(a[s - 2], a[s - 1], a[s]);
					break;
				case 85:
					this.$ = a[s - 3], r.setLink(a[s - 2], a[s - 1]), r.setTooltip(a[s - 2], a[s]);
					break;
				case 86:
					this.$ = a[s - 4], r.setLink(a[s - 3], a[s - 2], a[s]), r.setTooltip(a[s - 3], a[s - 1]);
					break;
				case 89:
					this.$ = a[s - 3], r.setClickEvent(a[s - 2], a[s - 1], a[s]);
					break;
				case 90:
					this.$ = a[s - 4], r.setClickEvent(a[s - 3], a[s - 2], a[s - 1]), r.setTooltip(a[s - 3], a[s]);
					break;
				case 91:
					this.$ = a[s - 3], r.setLink(a[s - 2], a[s]);
					break;
				case 92:
					this.$ = a[s - 4], r.setLink(a[s - 3], a[s - 1], a[s]);
					break;
				case 93:
					this.$ = a[s - 4], r.setLink(a[s - 3], a[s - 1]), r.setTooltip(a[s - 3], a[s]);
					break;
				case 94:
					this.$ = a[s - 5], r.setLink(a[s - 4], a[s - 2], a[s]), r.setTooltip(a[s - 4], a[s - 1]);
					break;
				case 95:
					this.$ = a[s - 2], r.setCssStyle(a[s - 1], a[s]);
					break;
				case 96:
					r.setCssClass(a[s - 1], a[s]);
					break;
				case 97:
					this.$ = [a[s]];
					break;
				case 98:
					a[s - 2].push(a[s]), this.$ = a[s - 2];
					break;
				case 100:
					this.$ = a[s - 1] + a[s];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: 4,
				7: [1, 6],
				10: 5,
				16: 39,
				17: 40,
				19: 21,
				21: 7,
				23: 8,
				24: 9,
				25: 10,
				26: 11,
				27: 12,
				28: 13,
				29: 14,
				30: 15,
				31: 16,
				32: 17,
				33: t,
				35: n,
				37: i,
				38: 22,
				42: a,
				43: 23,
				46: o,
				49: s,
				51: c,
				52: l,
				54: u,
				56: d,
				57: f,
				60: p,
				62: m,
				63: h,
				64: g,
				65: _,
				75: v,
				76: y,
				78: b,
				82: x,
				83: S,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{ 1: [2, 2] },
			{ 1: [2, 3] },
			e(D, [2, 5], { 8: [1, 48] }),
			{ 8: [1, 49] },
			e(O, [2, 19], { 22: [1, 50] }),
			e(O, [2, 21]),
			e(O, [2, 22]),
			e(O, [2, 23]),
			e(O, [2, 24]),
			e(O, [2, 25]),
			e(O, [2, 26]),
			e(O, [2, 27]),
			e(O, [2, 28]),
			e(O, [2, 29]),
			e(O, [2, 30]),
			{ 34: [1, 51] },
			{ 36: [1, 52] },
			e(O, [2, 33]),
			e(O, [2, 53], {
				53: 53,
				66: 56,
				67: 57,
				13: [1, 54],
				22: [1, 55],
				68: k,
				69: A,
				70: j,
				71: M,
				72: N,
				73: P,
				74: F
			}),
			{ 39: [1, 65] },
			e(I, [2, 40], {
				39: [1, 67],
				44: [1, 66]
			}),
			e(O, [2, 55]),
			e(O, [2, 56]),
			{
				16: 68,
				60: p,
				86: C,
				100: w,
				102: T
			},
			{
				16: 39,
				17: 40,
				19: 69,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{
				16: 39,
				17: 40,
				19: 70,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{
				16: 39,
				17: 40,
				19: 71,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{ 60: [1, 72] },
			{ 13: [1, 73] },
			{
				16: 39,
				17: 40,
				19: 74,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{
				13: ee,
				55: 75
			},
			{
				58: 77,
				60: [1, 78]
			},
			e(O, [2, 66]),
			e(O, [2, 67]),
			e(O, [2, 68]),
			e(O, [2, 69]),
			e(L, [2, 13], {
				16: 39,
				17: 40,
				19: 80,
				18: [1, 79],
				20: [1, 81],
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			}),
			e(L, [2, 15], { 20: [1, 82] }),
			{
				15: 83,
				16: 84,
				17: 85,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{
				16: 39,
				17: 40,
				19: 86,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			e(R, [2, 123]),
			e(R, [2, 124]),
			e(R, [2, 125]),
			e(R, [2, 126]),
			e([
				1,
				8,
				9,
				12,
				13,
				20,
				22,
				39,
				41,
				44,
				68,
				69,
				70,
				71,
				72,
				73,
				74,
				79,
				81
			], [2, 127]),
			e(D, [2, 6], {
				10: 5,
				21: 7,
				23: 8,
				24: 9,
				25: 10,
				26: 11,
				27: 12,
				28: 13,
				29: 14,
				30: 15,
				31: 16,
				32: 17,
				19: 21,
				38: 22,
				43: 23,
				16: 39,
				17: 40,
				5: 87,
				33: t,
				35: n,
				37: i,
				42: a,
				46: o,
				49: s,
				51: c,
				52: l,
				54: u,
				56: d,
				57: f,
				60: p,
				62: m,
				63: h,
				64: g,
				65: _,
				75: v,
				76: y,
				78: b,
				82: x,
				83: S,
				86: C,
				100: w,
				102: T,
				103: E
			}),
			{
				5: 88,
				10: 5,
				16: 39,
				17: 40,
				19: 21,
				21: 7,
				23: 8,
				24: 9,
				25: 10,
				26: 11,
				27: 12,
				28: 13,
				29: 14,
				30: 15,
				31: 16,
				32: 17,
				33: t,
				35: n,
				37: i,
				38: 22,
				42: a,
				43: 23,
				46: o,
				49: s,
				51: c,
				52: l,
				54: u,
				56: d,
				57: f,
				60: p,
				62: m,
				63: h,
				64: g,
				65: _,
				75: v,
				76: y,
				78: b,
				82: x,
				83: S,
				86: C,
				100: w,
				102: T,
				103: E
			},
			e(O, [2, 20]),
			e(O, [2, 31]),
			e(O, [2, 32]),
			{
				13: [1, 90],
				16: 39,
				17: 40,
				19: 89,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{
				53: 91,
				66: 56,
				67: 57,
				68: k,
				69: A,
				70: j,
				71: M,
				72: N,
				73: P,
				74: F
			},
			e(O, [2, 54]),
			{
				67: 92,
				73: P,
				74: F
			},
			e(z, [2, 73], {
				66: 93,
				68: k,
				69: A,
				70: j,
				71: M,
				72: N
			}),
			e(B, [2, 74]),
			e(B, [2, 75]),
			e(B, [2, 76]),
			e(B, [2, 77]),
			e(B, [2, 78]),
			e(te, [2, 79]),
			e(te, [2, 80]),
			{
				8: [1, 95],
				24: 96,
				40: 94,
				43: 23,
				46: o
			},
			{
				16: 97,
				60: p,
				86: C,
				100: w,
				102: T
			},
			{
				41: [1, 99],
				45: 98,
				51: ne
			},
			{ 50: [1, 101] },
			{ 13: [1, 102] },
			{ 13: [1, 103] },
			{
				79: [1, 104],
				81: [1, 105]
			},
			{
				22: V,
				48: H,
				59: 106,
				60: U,
				82: W,
				84: 107,
				85: 108,
				86: G,
				87: K,
				88: q,
				89: J,
				90: Y
			},
			{ 60: [1, 118] },
			{
				13: ee,
				55: 119
			},
			e(O, [2, 62]),
			e(O, [2, 128]),
			{
				22: V,
				48: H,
				59: 120,
				60: U,
				61: [1, 121],
				82: W,
				84: 107,
				85: 108,
				86: G,
				87: K,
				88: q,
				89: J,
				90: Y
			},
			e(re, [2, 64]),
			{
				16: 39,
				17: 40,
				19: 122,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			e(L, [2, 16]),
			e(L, [2, 17]),
			e(L, [2, 18]),
			{ 39: [2, 36] },
			{
				15: 124,
				16: 84,
				17: 85,
				18: [1, 123],
				39: [2, 9],
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{ 39: [2, 10] },
			e(X, [2, 45], {
				11: 125,
				12: [1, 126]
			}),
			e(D, [2, 7]),
			{ 9: [1, 127] },
			e(Z, [2, 57]),
			{
				16: 39,
				17: 40,
				19: 128,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{
				13: [1, 130],
				16: 39,
				17: 40,
				19: 129,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			e(z, [2, 72], {
				66: 131,
				68: k,
				69: A,
				70: j,
				71: M,
				72: N
			}),
			e(z, [2, 71]),
			{ 41: [1, 132] },
			{
				24: 96,
				40: 133,
				43: 23,
				46: o
			},
			{
				8: [1, 134],
				41: [2, 37]
			},
			e(I, [2, 41], { 39: [1, 135] }),
			{ 41: [1, 136] },
			e(I, [2, 43]),
			{
				41: [2, 51],
				45: 137,
				51: ne
			},
			{
				16: 39,
				17: 40,
				19: 138,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			e(O, [2, 81], { 13: [1, 139] }),
			e(O, [2, 83], {
				13: [1, 141],
				77: [1, 140]
			}),
			e(O, [2, 87], {
				13: [1, 142],
				80: [1, 143]
			}),
			{ 13: [1, 144] },
			e(O, [2, 95], { 61: ie }),
			e(ae, [2, 97], {
				85: 146,
				22: V,
				48: H,
				60: U,
				82: W,
				86: G,
				87: K,
				88: q,
				89: J,
				90: Y
			}),
			e(Q, [2, 99]),
			e(Q, [2, 101]),
			e(Q, [2, 102]),
			e(Q, [2, 103]),
			e(Q, [2, 104]),
			e(Q, [2, 105]),
			e(Q, [2, 106]),
			e(Q, [2, 107]),
			e(Q, [2, 108]),
			e(Q, [2, 109]),
			e(O, [2, 96]),
			e(O, [2, 61]),
			e(O, [2, 63], { 61: ie }),
			{ 60: [1, 147] },
			e(L, [2, 14]),
			{
				15: 148,
				16: 84,
				17: 85,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			{ 39: [2, 12] },
			e(X, [2, 46]),
			{ 13: [1, 149] },
			{ 1: [2, 4] },
			e(Z, [2, 59]),
			e(Z, [2, 58]),
			{
				16: 39,
				17: 40,
				19: 150,
				60: p,
				86: C,
				100: w,
				102: T,
				103: E
			},
			e(z, [2, 70]),
			e(O, [2, 34]),
			{ 41: [1, 151] },
			{
				24: 96,
				40: 152,
				41: [2, 38],
				43: 23,
				46: o
			},
			{
				45: 153,
				51: ne
			},
			e(I, [2, 42]),
			{ 41: [2, 52] },
			e(O, [2, 50]),
			e(O, [2, 82]),
			e(O, [2, 84]),
			e(O, [2, 85], { 77: [1, 154] }),
			e(O, [2, 88]),
			e(O, [2, 89], { 13: [1, 155] }),
			e(O, [2, 91], {
				13: [1, 157],
				77: [1, 156]
			}),
			{
				22: V,
				48: H,
				60: U,
				82: W,
				84: 158,
				85: 108,
				86: G,
				87: K,
				88: q,
				89: J,
				90: Y
			},
			e(Q, [2, 100]),
			e(re, [2, 65]),
			{ 39: [2, 11] },
			{ 14: [1, 159] },
			e(Z, [2, 60]),
			e(O, [2, 35]),
			{ 41: [2, 39] },
			{ 41: [1, 160] },
			e(O, [2, 86]),
			e(O, [2, 90]),
			e(O, [2, 92]),
			e(O, [2, 93], { 77: [1, 161] }),
			e(ae, [2, 98], {
				85: 146,
				22: V,
				48: H,
				60: U,
				82: W,
				86: G,
				87: K,
				88: q,
				89: J,
				90: Y
			}),
			e(X, [2, 8]),
			e(I, [2, 44]),
			e(O, [2, 94])
		],
		defaultActions: {
			2: [2, 1],
			3: [2, 2],
			4: [2, 3],
			83: [2, 36],
			85: [2, 10],
			124: [2, 12],
			127: [2, 4],
			137: [2, 52],
			148: [2, 11],
			152: [2, 39]
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
	oe.lexer = /* @__PURE__ */ (function() {
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
			options: {},
			performAction: /* @__PURE__ */ __name(function(e, t, n, r) {
				switch (n) {
					case 0: return 62;
					case 1: return 63;
					case 2: return 64;
					case 3: return 65;
					case 4: break;
					case 5: break;
					case 6: return this.begin("acc_title"), 33;
					case 7: return this.popState(), "acc_title_value";
					case 8: return this.begin("acc_descr"), 35;
					case 9: return this.popState(), "acc_descr_value";
					case 10:
						this.begin("acc_descr_multiline");
						break;
					case 11:
						this.popState();
						break;
					case 12: return "acc_descr_multiline_value";
					case 13: return 8;
					case 14: break;
					case 15: return 7;
					case 16: return 7;
					case 17: return "EDGE_STATE";
					case 18:
						this.begin("callback_name");
						break;
					case 19:
						this.popState();
						break;
					case 20:
						this.popState(), this.begin("callback_args");
						break;
					case 21: return 79;
					case 22:
						this.popState();
						break;
					case 23: return 80;
					case 24:
						this.popState();
						break;
					case 25: return "STR";
					case 26:
						this.begin("string");
						break;
					case 27: return 82;
					case 28: return 57;
					case 29: return this.begin("namespace"), 42;
					case 30: return this.popState(), 8;
					case 31: break;
					case 32: return this.begin("namespace-body"), 39;
					case 33: return this.popState(), 41;
					case 34: return "EOF_IN_STRUCT";
					case 35: return 8;
					case 36: break;
					case 37: return "EDGE_STATE";
					case 38: return this.begin("class"), 46;
					case 39: return this.popState(), 8;
					case 40: break;
					case 41: return this.popState(), this.popState(), 41;
					case 42: return this.begin("class-body"), 39;
					case 43: return this.popState(), 41;
					case 44: return "EOF_IN_STRUCT";
					case 45: return "EDGE_STATE";
					case 46: return "OPEN_IN_STRUCT";
					case 47: break;
					case 48: return "MEMBER";
					case 49: return 83;
					case 50: return 75;
					case 51: return 76;
					case 52: return 78;
					case 53: return 54;
					case 54: return 56;
					case 55: return 49;
					case 56: return 50;
					case 57: return 81;
					case 58:
						this.popState();
						break;
					case 59: return "GENERICTYPE";
					case 60:
						this.begin("generic");
						break;
					case 61:
						this.popState();
						break;
					case 62: return "BQUOTE_STR";
					case 63:
						this.begin("bqstring");
						break;
					case 64: return 77;
					case 65: return 77;
					case 66: return 77;
					case 67: return 77;
					case 68: return 69;
					case 69: return 69;
					case 70: return 71;
					case 71: return 71;
					case 72: return 70;
					case 73: return 68;
					case 74: return 72;
					case 75: return 73;
					case 76: return 74;
					case 77: return 22;
					case 78: return 44;
					case 79: return 100;
					case 80: return 18;
					case 81: return "PLUS";
					case 82: return 87;
					case 83: return 61;
					case 84: return 89;
					case 85: return 89;
					case 86: return 90;
					case 87: return "EQUALS";
					case 88: return "EQUALS";
					case 89: return 60;
					case 90: return 12;
					case 91: return 14;
					case 92: return "PUNCTUATION";
					case 93: return 86;
					case 94: return 102;
					case 95: return 48;
					case 96: return 48;
					case 97: return 9;
				}
			}, "anonymous"),
			rules: [
				/^(?:.*direction\s+TB[^\n]*)/,
				/^(?:.*direction\s+BT[^\n]*)/,
				/^(?:.*direction\s+RL[^\n]*)/,
				/^(?:.*direction\s+LR[^\n]*)/,
				/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,
				/^(?:%%[^\n]*(\r?\n)*)/,
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:\s*(\r?\n)+)/,
				/^(?:\s+)/,
				/^(?:classDiagram-v2\b)/,
				/^(?:classDiagram\b)/,
				/^(?:\[\*\])/,
				/^(?:call[\s]+)/,
				/^(?:\([\s]*\))/,
				/^(?:\()/,
				/^(?:[^(]*)/,
				/^(?:\))/,
				/^(?:[^)]*)/,
				/^(?:["])/,
				/^(?:[^"]*)/,
				/^(?:["])/,
				/^(?:style\b)/,
				/^(?:classDef\b)/,
				/^(?:namespace\b)/,
				/^(?:\s*(\r?\n)+)/,
				/^(?:\s+)/,
				/^(?:[{])/,
				/^(?:[}])/,
				/^(?:$)/,
				/^(?:\s*(\r?\n)+)/,
				/^(?:\s+)/,
				/^(?:\[\*\])/,
				/^(?:class\b)/,
				/^(?:\s*(\r?\n)+)/,
				/^(?:\s+)/,
				/^(?:[}])/,
				/^(?:[{])/,
				/^(?:[}])/,
				/^(?:$)/,
				/^(?:\[\*\])/,
				/^(?:[{])/,
				/^(?:[\n])/,
				/^(?:[^{}\n]*)/,
				/^(?:cssClass\b)/,
				/^(?:callback\b)/,
				/^(?:link\b)/,
				/^(?:click\b)/,
				/^(?:note for\b)/,
				/^(?:note\b)/,
				/^(?:<<)/,
				/^(?:>>)/,
				/^(?:href\b)/,
				/^(?:[~])/,
				/^(?:[^~]*)/,
				/^(?:~)/,
				/^(?:[`])/,
				/^(?:[^`]+)/,
				/^(?:[`])/,
				/^(?:_self\b)/,
				/^(?:_blank\b)/,
				/^(?:_parent\b)/,
				/^(?:_top\b)/,
				/^(?:\s*<\|)/,
				/^(?:\s*\|>)/,
				/^(?:\s*>)/,
				/^(?:\s*<)/,
				/^(?:\s*\*)/,
				/^(?:\s*o\b)/,
				/^(?:\s*\(\))/,
				/^(?:--)/,
				/^(?:\.\.)/,
				/^(?::{1}[^:\n;]+)/,
				/^(?::{3})/,
				/^(?:-)/,
				/^(?:\.)/,
				/^(?:\+)/,
				/^(?::)/,
				/^(?:,)/,
				/^(?:#)/,
				/^(?:#)/,
				/^(?:%)/,
				/^(?:=)/,
				/^(?:=)/,
				/^(?:\w+)/,
				/^(?:\[)/,
				/^(?:\])/,
				/^(?:[!"#$%&'*+,-.`?\\/])/,
				/^(?:[0-9]+)/,
				/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,
				/^(?:\s)/,
				/^(?:\s)/,
				/^(?:$)/
			],
			conditions: {
				"namespace-body": {
					rules: [
						26,
						33,
						34,
						35,
						36,
						37,
						38,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				namespace: {
					rules: [
						26,
						29,
						30,
						31,
						32,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				"class-body": {
					rules: [
						26,
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
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				class: {
					rules: [
						26,
						39,
						40,
						41,
						42,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [
						11,
						12,
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				acc_descr: {
					rules: [
						9,
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				acc_title: {
					rules: [
						7,
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				callback_args: {
					rules: [
						22,
						23,
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				callback_name: {
					rules: [
						19,
						20,
						21,
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				href: {
					rules: [
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				struct: {
					rules: [
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				generic: {
					rules: [
						26,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				bqstring: {
					rules: [
						26,
						49,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
					inclusive: !1
				},
				string: {
					rules: [
						24,
						25,
						26,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
						80,
						81,
						86,
						87,
						88,
						89,
						90,
						91,
						92,
						93,
						94,
						95,
						97
					],
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
						8,
						10,
						13,
						14,
						15,
						16,
						17,
						18,
						26,
						27,
						28,
						29,
						38,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						60,
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
						76,
						77,
						78,
						79,
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
						90,
						91,
						92,
						93,
						94,
						95,
						96,
						97
					],
					inclusive: !0
				}
			}
		};
	})();
	function $() {
		this.yy = {};
	}
	return __name($, "Parser"), $.prototype = oe, oe.Parser = $, new $();
})();
parser.parser = parser;
var classDiagram_default = parser, visibilityValues = [
	"#",
	"+",
	"~",
	"-",
	""
], ClassMember = class {
	static #_ = __name(this, "ClassMember");
	constructor(e, t) {
		this.memberType = t, this.visibility = "", this.classifier = "", this.text = "";
		let n = sanitizeText(e, getConfig2());
		this.parseMember(n);
	}
	getDisplayDetails() {
		let e = this.visibility + parseGenericTypes(this.id);
		this.memberType === "method" && (e += `(${parseGenericTypes(this.parameters.trim())})`, this.returnType && (e += " : " + parseGenericTypes(this.returnType))), e = e.trim();
		let t = this.parseClassifier();
		return {
			displayText: e,
			cssStyle: t
		};
	}
	parseMember(e) {
		let t = "";
		if (this.memberType === "method") {
			let n = /([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/.exec(e);
			if (n) {
				let e = n[1] ? n[1].trim() : "";
				if (visibilityValues.includes(e) && (this.visibility = e), this.id = n[2], this.parameters = n[3] ? n[3].trim() : "", t = n[4] ? n[4].trim() : "", this.returnType = n[5] ? n[5].trim() : "", t === "") {
					let e = this.returnType.substring(this.returnType.length - 1);
					/[$*]/.exec(e) && (t = e, this.returnType = this.returnType.substring(0, this.returnType.length - 1));
				}
			}
		} else {
			let n = e.length, r = e.substring(0, 1), i = e.substring(n - 1);
			visibilityValues.includes(r) && (this.visibility = r), /[$*]/.exec(i) && (t = i), this.id = e.substring(this.visibility === "" ? 0 : 1, t === "" ? n : n - 1);
		}
		this.classifier = t, this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim(), this.text = `${this.visibility ? "\\" + this.visibility : ""}${parseGenericTypes(this.id)}${this.memberType === "method" ? `(${parseGenericTypes(this.parameters)})${this.returnType ? " : " + parseGenericTypes(this.returnType) : ""}` : ""}`.replaceAll("<", "&lt;").replaceAll(">", "&gt;"), this.text.startsWith("\\&lt;") && (this.text = this.text.replace("\\&lt;", "~"));
	}
	parseClassifier() {
		switch (this.classifier) {
			case "*": return "font-style:italic;";
			case "$": return "text-decoration:underline;";
			default: return "";
		}
	}
}, MERMAID_DOM_ID_PREFIX = "classId-", classCounter = 0, sanitizeText2 = /* @__PURE__ */ __name((e) => common_default.sanitizeText(e, getConfig2()), "sanitizeText"), ClassDB = class {
	constructor() {
		this.relations = [], this.classes = /* @__PURE__ */ new Map(), this.styleClasses = /* @__PURE__ */ new Map(), this.notes = [], this.interfaces = [], this.namespaces = /* @__PURE__ */ new Map(), this.namespaceCounter = 0, this.functions = [], this.lineType = {
			LINE: 0,
			DOTTED_LINE: 1
		}, this.relationType = {
			AGGREGATION: 0,
			EXTENSION: 1,
			COMPOSITION: 2,
			DEPENDENCY: 3,
			LOLLIPOP: 4
		}, this.setupToolTips = /* @__PURE__ */ __name((e) => {
			let t = select_default(".mermaidTooltip");
			(t._groups || t)[0][0] === null && (t = select_default("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0)), select_default(e).select("svg").selectAll("g.node").on("mouseover", (e) => {
				let n = select_default(e.currentTarget);
				if (n.attr("title") === null) return;
				let r = this.getBoundingClientRect();
				t.transition().duration(200).style("opacity", ".9"), t.text(n.attr("title")).style("left", window.scrollX + r.left + (r.right - r.left) / 2 + "px").style("top", window.scrollY + r.top - 14 + document.body.scrollTop + "px"), t.html(t.html().replace(/&lt;br\/&gt;/g, "<br/>")), n.classed("hover", !0);
			}).on("mouseout", (e) => {
				t.transition().duration(500).style("opacity", 0), select_default(e.currentTarget).classed("hover", !1);
			});
		}, "setupToolTips"), this.direction = "TB", this.setAccTitle = setAccTitle, this.getAccTitle = getAccTitle, this.setAccDescription = setAccDescription, this.getAccDescription = getAccDescription, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.getConfig = /* @__PURE__ */ __name(() => getConfig2().class, "getConfig"), this.functions.push(this.setupToolTips.bind(this)), this.clear(), this.addRelation = this.addRelation.bind(this), this.addClassesToNamespace = this.addClassesToNamespace.bind(this), this.addNamespace = this.addNamespace.bind(this), this.setCssClass = this.setCssClass.bind(this), this.addMembers = this.addMembers.bind(this), this.addClass = this.addClass.bind(this), this.setClassLabel = this.setClassLabel.bind(this), this.addAnnotation = this.addAnnotation.bind(this), this.addMember = this.addMember.bind(this), this.cleanupLabel = this.cleanupLabel.bind(this), this.addNote = this.addNote.bind(this), this.defineClass = this.defineClass.bind(this), this.setDirection = this.setDirection.bind(this), this.setLink = this.setLink.bind(this), this.bindFunctions = this.bindFunctions.bind(this), this.clear = this.clear.bind(this), this.setTooltip = this.setTooltip.bind(this), this.setClickEvent = this.setClickEvent.bind(this), this.setCssStyle = this.setCssStyle.bind(this);
	}
	static #_ = __name(this, "ClassDB");
	splitClassNameAndType(e) {
		let t = common_default.sanitizeText(e, getConfig2()), n = "", r = t;
		if (t.indexOf("~") > 0) {
			let e = t.split("~");
			r = sanitizeText2(e[0]), n = sanitizeText2(e[1]);
		}
		return {
			className: r,
			type: n
		};
	}
	setClassLabel(e, t) {
		let n = common_default.sanitizeText(e, getConfig2());
		t &&= sanitizeText2(t);
		let { className: r } = this.splitClassNameAndType(n);
		this.classes.get(r).label = t, this.classes.get(r).text = `${t}${this.classes.get(r).type ? `<${this.classes.get(r).type}>` : ""}`;
	}
	addClass(e) {
		let t = common_default.sanitizeText(e, getConfig2()), { className: n, type: r } = this.splitClassNameAndType(t);
		if (this.classes.has(n)) return;
		let i = common_default.sanitizeText(n, getConfig2());
		this.classes.set(i, {
			id: i,
			type: r,
			label: i,
			text: `${i}${r ? `&lt;${r}&gt;` : ""}`,
			shape: "classBox",
			cssClasses: "default",
			methods: [],
			members: [],
			annotations: [],
			styles: [],
			domId: MERMAID_DOM_ID_PREFIX + i + "-" + classCounter
		}), classCounter++;
	}
	addInterface(e, t) {
		let n = {
			id: `interface${this.interfaces.length}`,
			label: e,
			classId: t
		};
		this.interfaces.push(n);
	}
	lookUpDomId(e) {
		let t = common_default.sanitizeText(e, getConfig2());
		if (this.classes.has(t)) return this.classes.get(t).domId;
		throw Error("Class not found: " + t);
	}
	clear() {
		this.relations = [], this.classes = /* @__PURE__ */ new Map(), this.notes = [], this.interfaces = [], this.functions = [], this.functions.push(this.setupToolTips.bind(this)), this.namespaces = /* @__PURE__ */ new Map(), this.namespaceCounter = 0, this.direction = "TB", clear();
	}
	getClass(e) {
		return this.classes.get(e);
	}
	getClasses() {
		return this.classes;
	}
	getRelations() {
		return this.relations;
	}
	getNotes() {
		return this.notes;
	}
	addRelation(e) {
		log.debug("Adding relation: " + JSON.stringify(e));
		let t = [
			this.relationType.LOLLIPOP,
			this.relationType.AGGREGATION,
			this.relationType.COMPOSITION,
			this.relationType.DEPENDENCY,
			this.relationType.EXTENSION
		];
		e.relation.type1 === this.relationType.LOLLIPOP && !t.includes(e.relation.type2) ? (this.addClass(e.id2), this.addInterface(e.id1, e.id2), e.id1 = `interface${this.interfaces.length - 1}`) : e.relation.type2 === this.relationType.LOLLIPOP && !t.includes(e.relation.type1) ? (this.addClass(e.id1), this.addInterface(e.id2, e.id1), e.id2 = `interface${this.interfaces.length - 1}`) : (this.addClass(e.id1), this.addClass(e.id2)), e.id1 = this.splitClassNameAndType(e.id1).className, e.id2 = this.splitClassNameAndType(e.id2).className, e.relationTitle1 = common_default.sanitizeText(e.relationTitle1.trim(), getConfig2()), e.relationTitle2 = common_default.sanitizeText(e.relationTitle2.trim(), getConfig2()), this.relations.push(e);
	}
	addAnnotation(e, t) {
		let n = this.splitClassNameAndType(e).className;
		this.classes.get(n).annotations.push(t);
	}
	addMember(e, t) {
		this.addClass(e);
		let n = this.splitClassNameAndType(e).className, r = this.classes.get(n);
		if (typeof t == "string") {
			let e = t.trim();
			e.startsWith("<<") && e.endsWith(">>") ? r.annotations.push(sanitizeText2(e.substring(2, e.length - 2))) : e.indexOf(")") > 0 ? r.methods.push(new ClassMember(e, "method")) : e && r.members.push(new ClassMember(e, "attribute"));
		}
	}
	addMembers(e, t) {
		Array.isArray(t) && (t.reverse(), t.forEach((t) => this.addMember(e, t)));
	}
	addNote(e, t) {
		let n = {
			id: `note${this.notes.length}`,
			class: t,
			text: e
		};
		this.notes.push(n);
	}
	cleanupLabel(e) {
		return e.startsWith(":") && (e = e.substring(1)), sanitizeText2(e.trim());
	}
	setCssClass(e, t) {
		e.split(",").forEach((e) => {
			let n = e;
			/\d/.exec(e[0]) && (n = MERMAID_DOM_ID_PREFIX + n);
			let r = this.classes.get(n);
			r && (r.cssClasses += " " + t);
		});
	}
	defineClass(e, t) {
		for (let n of e) {
			let e = this.styleClasses.get(n);
			e === void 0 && (e = {
				id: n,
				styles: [],
				textStyles: []
			}, this.styleClasses.set(n, e)), t && t.forEach((t) => {
				if (/color/.exec(t)) {
					let n = t.replace("fill", "bgFill");
					e.textStyles.push(n);
				}
				e.styles.push(t);
			}), this.classes.forEach((e) => {
				e.cssClasses.includes(n) && e.styles.push(...t.flatMap((e) => e.split(",")));
			});
		}
	}
	setTooltip(e, t) {
		e.split(",").forEach((e) => {
			t !== void 0 && (this.classes.get(e).tooltip = sanitizeText2(t));
		});
	}
	getTooltip(e, t) {
		return t && this.namespaces.has(t) ? this.namespaces.get(t).classes.get(e).tooltip : this.classes.get(e).tooltip;
	}
	setLink(e, n, r) {
		let i = getConfig2();
		e.split(",").forEach((e) => {
			let a = e;
			/\d/.exec(e[0]) && (a = MERMAID_DOM_ID_PREFIX + a);
			let o = this.classes.get(a);
			o && (o.link = utils_default.formatUrl(n, i), i.securityLevel === "sandbox" ? o.linkTarget = "_top" : typeof r == "string" ? o.linkTarget = sanitizeText2(r) : o.linkTarget = "_blank");
		}), this.setCssClass(e, "clickable");
	}
	setClickEvent(e, t, n) {
		e.split(",").forEach((e) => {
			this.setClickFunc(e, t, n), this.classes.get(e).haveCallback = !0;
		}), this.setCssClass(e, "clickable");
	}
	setClickFunc(e, n, r) {
		let i = common_default.sanitizeText(e, getConfig2());
		if (getConfig2().securityLevel !== "loose" || n === void 0) return;
		let a = i;
		if (this.classes.has(a)) {
			let e = this.lookUpDomId(a), i = [];
			if (typeof r == "string") {
				i = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
				for (let e = 0; e < i.length; e++) {
					let t = i[e].trim();
					t.startsWith("\"") && t.endsWith("\"") && (t = t.substr(1, t.length - 2)), i[e] = t;
				}
			}
			i.length === 0 && i.push(e), this.functions.push(() => {
				let r = document.querySelector(`[id="${e}"]`);
				r !== null && r.addEventListener("click", () => {
					utils_default.runFunc(n, ...i);
				}, !1);
			});
		}
	}
	bindFunctions(e) {
		this.functions.forEach((t) => {
			t(e);
		});
	}
	getDirection() {
		return this.direction;
	}
	setDirection(e) {
		this.direction = e;
	}
	addNamespace(e) {
		this.namespaces.has(e) || (this.namespaces.set(e, {
			id: e,
			classes: /* @__PURE__ */ new Map(),
			children: {},
			domId: MERMAID_DOM_ID_PREFIX + e + "-" + this.namespaceCounter
		}), this.namespaceCounter++);
	}
	getNamespace(e) {
		return this.namespaces.get(e);
	}
	getNamespaces() {
		return this.namespaces;
	}
	addClassesToNamespace(e, t) {
		if (this.namespaces.has(e)) for (let n of t) {
			let { className: t } = this.splitClassNameAndType(n);
			this.classes.get(t).parent = e, this.namespaces.get(e).classes.set(t, this.classes.get(t));
		}
	}
	setCssStyle(e, t) {
		let n = this.classes.get(e);
		if (!(!t || !n)) for (let e of t) e.includes(",") ? n.styles.push(...e.split(",")) : n.styles.push(e);
	}
	getArrowMarker(e) {
		let t;
		switch (e) {
			case 0:
				t = "aggregation";
				break;
			case 1:
				t = "extension";
				break;
			case 2:
				t = "composition";
				break;
			case 3:
				t = "dependency";
				break;
			case 4:
				t = "lollipop";
				break;
			default: t = "none";
		}
		return t;
	}
	getData() {
		let t = [], n = [], r = getConfig2();
		for (let e of this.namespaces.keys()) {
			let n = this.namespaces.get(e);
			if (n) {
				let e = {
					id: n.id,
					label: n.id,
					isGroup: !0,
					padding: r.class.padding ?? 16,
					shape: "rect",
					cssStyles: ["fill: none", "stroke: black"],
					look: r.look
				};
				t.push(e);
			}
		}
		for (let e of this.classes.keys()) {
			let n = this.classes.get(e);
			if (n) {
				let e = n;
				e.parentId = n.parent, e.look = r.look, t.push(e);
			}
		}
		let i = 0;
		for (let e of this.notes) {
			i++;
			let a = {
				id: e.id,
				label: e.text,
				isGroup: !1,
				shape: "note",
				padding: r.class.padding ?? 6,
				cssStyles: [
					"text-align: left",
					"white-space: nowrap",
					`fill: ${r.themeVariables.noteBkgColor}`,
					`stroke: ${r.themeVariables.noteBorderColor}`
				],
				look: r.look
			};
			t.push(a);
			let o = this.classes.get(e.class)?.id ?? "";
			if (o) {
				let t = {
					id: `edgeNote${i}`,
					start: e.id,
					end: o,
					type: "normal",
					thickness: "normal",
					classes: "relation",
					arrowTypeStart: "none",
					arrowTypeEnd: "none",
					arrowheadStyle: "",
					labelStyle: [""],
					style: ["fill: none"],
					pattern: "dotted",
					look: r.look
				};
				n.push(t);
			}
		}
		for (let e of this.interfaces) {
			let n = {
				id: e.id,
				label: e.label,
				isGroup: !1,
				shape: "rect",
				cssStyles: ["opacity: 0;"],
				look: r.look
			};
			t.push(n);
		}
		i = 0;
		for (let t of this.relations) {
			i++;
			let a = {
				id: getEdgeId(t.id1, t.id2, {
					prefix: "id",
					counter: i
				}),
				start: t.id1,
				end: t.id2,
				type: "normal",
				label: t.title,
				labelpos: "c",
				thickness: "normal",
				classes: "relation",
				arrowTypeStart: this.getArrowMarker(t.relation.type1),
				arrowTypeEnd: this.getArrowMarker(t.relation.type2),
				startLabelRight: t.relationTitle1 === "none" ? "" : t.relationTitle1,
				endLabelLeft: t.relationTitle2 === "none" ? "" : t.relationTitle2,
				arrowheadStyle: "",
				labelStyle: ["display: inline-block"],
				style: t.style || "",
				pattern: t.relation.lineType == 1 ? "dashed" : "solid",
				look: r.look
			};
			n.push(a);
		}
		return {
			nodes: t,
			edges: n,
			other: {},
			config: r,
			direction: this.getDirection()
		};
	}
}, styles_default = /* @__PURE__ */ __name((e) => `g.classGroup text {
  fill: ${e.nodeBorder || e.classText};
  stroke: none;
  font-family: ${e.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${e.classText};
}
.edgeLabel .label rect {
  fill: ${e.mainBkg};
}
.label text {
  fill: ${e.classText};
}

.labelBkg {
  background: ${e.mainBkg};
}
.edgeLabel .label span {
  background: ${e.mainBkg};
}

.classTitle {
  font-weight: bolder;
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


.divider {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.classGroup line {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${e.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${e.lineColor};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
  line-height: initial;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
  ${getIconStyles()}
`, "getStyles"), classRenderer_v3_unified_default = {
	getClasses: /* @__PURE__ */ __name(function(e, t) {
		return t.db.getClasses();
	}, "getClasses"),
	draw: /* @__PURE__ */ __name(async function(e, r, i, a) {
		log.info("REF0:"), log.info("Drawing class diagram (v3)", r);
		let { securityLevel: o, state: s, layout: c } = getConfig2(), l = a.db.getData(), u = getDiagramElement(r, o);
		l.type = a.type, l.layoutAlgorithm = getRegisteredLayoutAlgorithm(c), l.nodeSpacing = s?.nodeSpacing || 50, l.rankSpacing = s?.rankSpacing || 50, l.markers = [
			"aggregation",
			"extension",
			"composition",
			"dependency",
			"lollipop"
		], l.diagramId = r, await render(l, u), utils_default.insertTitle(u, "classDiagramTitleText", s?.titleTopMargin ?? 25, a.db.getDiagramTitle()), setupViewPortForSVG(u, 8, "classDiagram", s?.useMaxWidth ?? !0);
	}, "draw"),
	getDir: /* @__PURE__ */ __name((e, t = "TB") => {
		if (!e.doc) return t;
		let n = t;
		for (let t of e.doc) t.stmt === "dir" && (n = t.value);
		return n;
	}, "getDir")
};
export { styles_default as i, classDiagram_default as n, classRenderer_v3_unified_default as r, ClassDB as t };
