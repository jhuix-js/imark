import { s as __toESM } from "./chunk-DgPTj83v.js";
import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { g as utils_default, p as parseFontSize, t as ZERO_WIDTH_SPACE } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, E as getUrl, H as setConfig2, I as sanitizeText, N as renderKatexSanitized, O as hasKatex, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, c as configureSvgSize, i as calculateMathMLDimensions, r as assignWithDepth_default, s as common_default, v as getAccTitle, y as getConfig, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as require_dist } from "./dist-CUheKjZU.js";
import { i as drawRect, n as drawEmbeddedImage, o as getNoteRect, r as drawImage, s as getTextObj, t as drawBackgroundRect } from "./chunk-TZMSLE5B-DucqvWzX.js";
import { n as load, t as JSON_SCHEMA } from "./chunk-MI3HLSF2-DcxRTH2O.js";
import { t as ImperativeState } from "./chunk-QZHKN3VN-SsplSgnI.js";
var import_dist = /* @__PURE__ */ __toESM(require_dist(), 1), parser = (function() {
	var i = /* @__PURE__ */ __name(function(i, l, u, d) {
		for (u ||= {}, d = i.length; d--; u[i[d]] = l);
		return u;
	}, "o"), l = [1, 2], u = [1, 3], d = [1, 4], f = [2, 4], m = [1, 9], h = [1, 11], g = [1, 13], _ = [1, 14], v = [1, 16], y = [1, 17], b = [1, 18], x = [1, 24], S = [1, 25], C = [1, 26], w = [1, 27], T = [1, 28], E = [1, 29], D = [1, 30], O = [1, 31], k = [1, 32], A = [1, 33], j = [1, 34], M = [1, 35], N = [1, 36], P = [1, 37], F = [1, 38], I = [1, 39], L = [1, 41], R = [1, 42], z = [1, 43], B = [1, 44], V = [1, 45], H = [1, 46], U = [
		1,
		4,
		5,
		13,
		14,
		16,
		18,
		21,
		23,
		29,
		30,
		31,
		33,
		35,
		36,
		37,
		38,
		39,
		41,
		43,
		44,
		46,
		47,
		48,
		49,
		50,
		52,
		53,
		55,
		60,
		61,
		62,
		63,
		71
	], W = [2, 71], G = [
		4,
		5,
		16,
		50,
		52,
		53
	], K = [
		4,
		5,
		13,
		14,
		16,
		18,
		21,
		23,
		29,
		30,
		31,
		33,
		35,
		36,
		37,
		38,
		39,
		41,
		43,
		44,
		46,
		50,
		52,
		53,
		55,
		60,
		61,
		62,
		63,
		71
	], q = [
		4,
		5,
		13,
		14,
		16,
		18,
		21,
		23,
		29,
		30,
		31,
		33,
		35,
		36,
		37,
		38,
		39,
		41,
		43,
		44,
		46,
		49,
		50,
		52,
		53,
		55,
		60,
		61,
		62,
		63,
		71
	], J = [
		4,
		5,
		13,
		14,
		16,
		18,
		21,
		23,
		29,
		30,
		31,
		33,
		35,
		36,
		37,
		38,
		39,
		41,
		43,
		44,
		46,
		48,
		50,
		52,
		53,
		55,
		60,
		61,
		62,
		63,
		71
	], Y = [
		4,
		5,
		13,
		14,
		16,
		18,
		21,
		23,
		29,
		30,
		31,
		33,
		35,
		36,
		37,
		38,
		39,
		41,
		43,
		44,
		46,
		47,
		50,
		52,
		53,
		55,
		60,
		61,
		62,
		63,
		71
	], X = [
		69,
		70,
		71
	], Z = [1, 127], Q = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			SPACE: 4,
			NEWLINE: 5,
			SD: 6,
			document: 7,
			line: 8,
			statement: 9,
			box_section: 10,
			box_line: 11,
			participant_statement: 12,
			create: 13,
			box: 14,
			restOfLine: 15,
			end: 16,
			signal: 17,
			autonumber: 18,
			NUM: 19,
			off: 20,
			activate: 21,
			actor: 22,
			deactivate: 23,
			note_statement: 24,
			links_statement: 25,
			link_statement: 26,
			properties_statement: 27,
			details_statement: 28,
			title: 29,
			legacy_title: 30,
			acc_title: 31,
			acc_title_value: 32,
			acc_descr: 33,
			acc_descr_value: 34,
			acc_descr_multiline_value: 35,
			loop: 36,
			rect: 37,
			opt: 38,
			alt: 39,
			else_sections: 40,
			par: 41,
			par_sections: 42,
			par_over: 43,
			critical: 44,
			option_sections: 45,
			break: 46,
			option: 47,
			and: 48,
			else: 49,
			participant: 50,
			AS: 51,
			participant_actor: 52,
			destroy: 53,
			actor_with_config: 54,
			note: 55,
			placement: 56,
			text2: 57,
			over: 58,
			actor_pair: 59,
			links: 60,
			link: 61,
			properties: 62,
			details: 63,
			spaceList: 64,
			",": 65,
			left_of: 66,
			right_of: 67,
			signaltype: 68,
			"+": 69,
			"-": 70,
			ACTOR: 71,
			config_object: 72,
			CONFIG_START: 73,
			CONFIG_CONTENT: 74,
			CONFIG_END: 75,
			SOLID_OPEN_ARROW: 76,
			DOTTED_OPEN_ARROW: 77,
			SOLID_ARROW: 78,
			BIDIRECTIONAL_SOLID_ARROW: 79,
			DOTTED_ARROW: 80,
			BIDIRECTIONAL_DOTTED_ARROW: 81,
			SOLID_CROSS: 82,
			DOTTED_CROSS: 83,
			SOLID_POINT: 84,
			DOTTED_POINT: 85,
			TXT: 86,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SPACE",
			5: "NEWLINE",
			6: "SD",
			13: "create",
			14: "box",
			15: "restOfLine",
			16: "end",
			18: "autonumber",
			19: "NUM",
			20: "off",
			21: "activate",
			23: "deactivate",
			29: "title",
			30: "legacy_title",
			31: "acc_title",
			32: "acc_title_value",
			33: "acc_descr",
			34: "acc_descr_value",
			35: "acc_descr_multiline_value",
			36: "loop",
			37: "rect",
			38: "opt",
			39: "alt",
			41: "par",
			43: "par_over",
			44: "critical",
			46: "break",
			47: "option",
			48: "and",
			49: "else",
			50: "participant",
			51: "AS",
			52: "participant_actor",
			53: "destroy",
			55: "note",
			58: "over",
			60: "links",
			61: "link",
			62: "properties",
			63: "details",
			65: ",",
			66: "left_of",
			67: "right_of",
			69: "+",
			70: "-",
			71: "ACTOR",
			73: "CONFIG_START",
			74: "CONFIG_CONTENT",
			75: "CONFIG_END",
			76: "SOLID_OPEN_ARROW",
			77: "DOTTED_OPEN_ARROW",
			78: "SOLID_ARROW",
			79: "BIDIRECTIONAL_SOLID_ARROW",
			80: "DOTTED_ARROW",
			81: "BIDIRECTIONAL_DOTTED_ARROW",
			82: "SOLID_CROSS",
			83: "DOTTED_CROSS",
			84: "SOLID_POINT",
			85: "DOTTED_POINT",
			86: "TXT"
		},
		productions_: [
			0,
			[3, 2],
			[3, 2],
			[3, 2],
			[7, 0],
			[7, 2],
			[8, 2],
			[8, 1],
			[8, 1],
			[10, 0],
			[10, 2],
			[11, 2],
			[11, 1],
			[11, 1],
			[9, 1],
			[9, 2],
			[9, 4],
			[9, 2],
			[9, 4],
			[9, 3],
			[9, 3],
			[9, 2],
			[9, 3],
			[9, 3],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 4],
			[9, 4],
			[9, 4],
			[9, 4],
			[9, 4],
			[9, 4],
			[9, 4],
			[9, 4],
			[45, 1],
			[45, 4],
			[42, 1],
			[42, 4],
			[40, 1],
			[40, 4],
			[12, 5],
			[12, 3],
			[12, 5],
			[12, 3],
			[12, 3],
			[12, 3],
			[24, 4],
			[24, 4],
			[25, 3],
			[26, 3],
			[27, 3],
			[28, 3],
			[64, 2],
			[64, 1],
			[59, 3],
			[59, 1],
			[56, 1],
			[56, 1],
			[17, 5],
			[17, 5],
			[17, 4],
			[54, 2],
			[72, 3],
			[22, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[68, 1],
			[57, 1]
		],
		performAction: /* @__PURE__ */ __name(function(i, l, u, d, f, p, m) {
			var h = p.length - 1;
			switch (f) {
				case 3: return d.apply(p[h]), p[h];
				case 4:
				case 9:
					this.$ = [];
					break;
				case 5:
				case 10:
					p[h - 1].push(p[h]), this.$ = p[h - 1];
					break;
				case 6:
				case 7:
				case 11:
				case 12:
					this.$ = p[h];
					break;
				case 8:
				case 13:
					this.$ = [];
					break;
				case 15:
					p[h].type = "createParticipant", this.$ = p[h];
					break;
				case 16:
					p[h - 1].unshift({
						type: "boxStart",
						boxData: d.parseBoxData(p[h - 2])
					}), p[h - 1].push({
						type: "boxEnd",
						boxText: p[h - 2]
					}), this.$ = p[h - 1];
					break;
				case 18:
					this.$ = {
						type: "sequenceIndex",
						sequenceIndex: Number(p[h - 2]),
						sequenceIndexStep: Number(p[h - 1]),
						sequenceVisible: !0,
						signalType: d.LINETYPE.AUTONUMBER
					};
					break;
				case 19:
					this.$ = {
						type: "sequenceIndex",
						sequenceIndex: Number(p[h - 1]),
						sequenceIndexStep: 1,
						sequenceVisible: !0,
						signalType: d.LINETYPE.AUTONUMBER
					};
					break;
				case 20:
					this.$ = {
						type: "sequenceIndex",
						sequenceVisible: !1,
						signalType: d.LINETYPE.AUTONUMBER
					};
					break;
				case 21:
					this.$ = {
						type: "sequenceIndex",
						sequenceVisible: !0,
						signalType: d.LINETYPE.AUTONUMBER
					};
					break;
				case 22:
					this.$ = {
						type: "activeStart",
						signalType: d.LINETYPE.ACTIVE_START,
						actor: p[h - 1].actor
					};
					break;
				case 23:
					this.$ = {
						type: "activeEnd",
						signalType: d.LINETYPE.ACTIVE_END,
						actor: p[h - 1].actor
					};
					break;
				case 29:
					d.setDiagramTitle(p[h].substring(6)), this.$ = p[h].substring(6);
					break;
				case 30:
					d.setDiagramTitle(p[h].substring(7)), this.$ = p[h].substring(7);
					break;
				case 31:
					this.$ = p[h].trim(), d.setAccTitle(this.$);
					break;
				case 32:
				case 33:
					this.$ = p[h].trim(), d.setAccDescription(this.$);
					break;
				case 34:
					p[h - 1].unshift({
						type: "loopStart",
						loopText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.LOOP_START
					}), p[h - 1].push({
						type: "loopEnd",
						loopText: p[h - 2],
						signalType: d.LINETYPE.LOOP_END
					}), this.$ = p[h - 1];
					break;
				case 35:
					p[h - 1].unshift({
						type: "rectStart",
						color: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.RECT_START
					}), p[h - 1].push({
						type: "rectEnd",
						color: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.RECT_END
					}), this.$ = p[h - 1];
					break;
				case 36:
					p[h - 1].unshift({
						type: "optStart",
						optText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.OPT_START
					}), p[h - 1].push({
						type: "optEnd",
						optText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.OPT_END
					}), this.$ = p[h - 1];
					break;
				case 37:
					p[h - 1].unshift({
						type: "altStart",
						altText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.ALT_START
					}), p[h - 1].push({
						type: "altEnd",
						signalType: d.LINETYPE.ALT_END
					}), this.$ = p[h - 1];
					break;
				case 38:
					p[h - 1].unshift({
						type: "parStart",
						parText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.PAR_START
					}), p[h - 1].push({
						type: "parEnd",
						signalType: d.LINETYPE.PAR_END
					}), this.$ = p[h - 1];
					break;
				case 39:
					p[h - 1].unshift({
						type: "parStart",
						parText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.PAR_OVER_START
					}), p[h - 1].push({
						type: "parEnd",
						signalType: d.LINETYPE.PAR_END
					}), this.$ = p[h - 1];
					break;
				case 40:
					p[h - 1].unshift({
						type: "criticalStart",
						criticalText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.CRITICAL_START
					}), p[h - 1].push({
						type: "criticalEnd",
						signalType: d.LINETYPE.CRITICAL_END
					}), this.$ = p[h - 1];
					break;
				case 41:
					p[h - 1].unshift({
						type: "breakStart",
						breakText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.BREAK_START
					}), p[h - 1].push({
						type: "breakEnd",
						optText: d.parseMessage(p[h - 2]),
						signalType: d.LINETYPE.BREAK_END
					}), this.$ = p[h - 1];
					break;
				case 43:
					this.$ = p[h - 3].concat([{
						type: "option",
						optionText: d.parseMessage(p[h - 1]),
						signalType: d.LINETYPE.CRITICAL_OPTION
					}, p[h]]);
					break;
				case 45:
					this.$ = p[h - 3].concat([{
						type: "and",
						parText: d.parseMessage(p[h - 1]),
						signalType: d.LINETYPE.PAR_AND
					}, p[h]]);
					break;
				case 47:
					this.$ = p[h - 3].concat([{
						type: "else",
						altText: d.parseMessage(p[h - 1]),
						signalType: d.LINETYPE.ALT_ELSE
					}, p[h]]);
					break;
				case 48:
					p[h - 3].draw = "participant", p[h - 3].type = "addParticipant", p[h - 3].description = d.parseMessage(p[h - 1]), this.$ = p[h - 3];
					break;
				case 49:
					p[h - 1].draw = "participant", p[h - 1].type = "addParticipant", this.$ = p[h - 1];
					break;
				case 50:
					p[h - 3].draw = "actor", p[h - 3].type = "addParticipant", p[h - 3].description = d.parseMessage(p[h - 1]), this.$ = p[h - 3];
					break;
				case 51:
					p[h - 1].draw = "actor", p[h - 1].type = "addParticipant", this.$ = p[h - 1];
					break;
				case 52:
					p[h - 1].type = "destroyParticipant", this.$ = p[h - 1];
					break;
				case 53:
					p[h - 1].draw = "participant", p[h - 1].type = "addParticipant", this.$ = p[h - 1];
					break;
				case 54:
					this.$ = [p[h - 1], {
						type: "addNote",
						placement: p[h - 2],
						actor: p[h - 1].actor,
						text: p[h]
					}];
					break;
				case 55:
					p[h - 2] = [].concat(p[h - 1], p[h - 1]).slice(0, 2), p[h - 2][0] = p[h - 2][0].actor, p[h - 2][1] = p[h - 2][1].actor, this.$ = [p[h - 1], {
						type: "addNote",
						placement: d.PLACEMENT.OVER,
						actor: p[h - 2].slice(0, 2),
						text: p[h]
					}];
					break;
				case 56:
					this.$ = [p[h - 1], {
						type: "addLinks",
						actor: p[h - 1].actor,
						text: p[h]
					}];
					break;
				case 57:
					this.$ = [p[h - 1], {
						type: "addALink",
						actor: p[h - 1].actor,
						text: p[h]
					}];
					break;
				case 58:
					this.$ = [p[h - 1], {
						type: "addProperties",
						actor: p[h - 1].actor,
						text: p[h]
					}];
					break;
				case 59:
					this.$ = [p[h - 1], {
						type: "addDetails",
						actor: p[h - 1].actor,
						text: p[h]
					}];
					break;
				case 62:
					this.$ = [p[h - 2], p[h]];
					break;
				case 63:
					this.$ = p[h];
					break;
				case 64:
					this.$ = d.PLACEMENT.LEFTOF;
					break;
				case 65:
					this.$ = d.PLACEMENT.RIGHTOF;
					break;
				case 66:
					this.$ = [
						p[h - 4],
						p[h - 1],
						{
							type: "addMessage",
							from: p[h - 4].actor,
							to: p[h - 1].actor,
							signalType: p[h - 3],
							msg: p[h],
							activate: !0
						},
						{
							type: "activeStart",
							signalType: d.LINETYPE.ACTIVE_START,
							actor: p[h - 1].actor
						}
					];
					break;
				case 67:
					this.$ = [
						p[h - 4],
						p[h - 1],
						{
							type: "addMessage",
							from: p[h - 4].actor,
							to: p[h - 1].actor,
							signalType: p[h - 3],
							msg: p[h]
						},
						{
							type: "activeEnd",
							signalType: d.LINETYPE.ACTIVE_END,
							actor: p[h - 4].actor
						}
					];
					break;
				case 68:
					this.$ = [
						p[h - 3],
						p[h - 1],
						{
							type: "addMessage",
							from: p[h - 3].actor,
							to: p[h - 1].actor,
							signalType: p[h - 2],
							msg: p[h]
						}
					];
					break;
				case 69:
					this.$ = {
						type: "addParticipant",
						actor: p[h - 1],
						config: p[h]
					};
					break;
				case 70:
					this.$ = p[h - 1].trim();
					break;
				case 71:
					this.$ = {
						type: "addParticipant",
						actor: p[h]
					};
					break;
				case 72:
					this.$ = d.LINETYPE.SOLID_OPEN;
					break;
				case 73:
					this.$ = d.LINETYPE.DOTTED_OPEN;
					break;
				case 74:
					this.$ = d.LINETYPE.SOLID;
					break;
				case 75:
					this.$ = d.LINETYPE.BIDIRECTIONAL_SOLID;
					break;
				case 76:
					this.$ = d.LINETYPE.DOTTED;
					break;
				case 77:
					this.$ = d.LINETYPE.BIDIRECTIONAL_DOTTED;
					break;
				case 78:
					this.$ = d.LINETYPE.SOLID_CROSS;
					break;
				case 79:
					this.$ = d.LINETYPE.DOTTED_CROSS;
					break;
				case 80:
					this.$ = d.LINETYPE.SOLID_POINT;
					break;
				case 81:
					this.$ = d.LINETYPE.DOTTED_POINT;
					break;
				case 82:
					this.$ = d.parseMessage(p[h].trim().substring(1));
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: l,
				5: u,
				6: d
			},
			{ 1: [3] },
			{
				3: 5,
				4: l,
				5: u,
				6: d
			},
			{
				3: 6,
				4: l,
				5: u,
				6: d
			},
			i([
				1,
				4,
				5,
				13,
				14,
				18,
				21,
				23,
				29,
				30,
				31,
				33,
				35,
				36,
				37,
				38,
				39,
				41,
				43,
				44,
				46,
				50,
				52,
				53,
				55,
				60,
				61,
				62,
				63,
				71
			], f, { 7: 7 }),
			{ 1: [2, 1] },
			{ 1: [2, 2] },
			{
				1: [2, 3],
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			i(U, [2, 5]),
			{
				9: 47,
				12: 12,
				13: g,
				14: _,
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			i(U, [2, 7]),
			i(U, [2, 8]),
			i(U, [2, 14]),
			{
				12: 48,
				50: P,
				52: F,
				53: I
			},
			{ 15: [1, 49] },
			{ 5: [1, 50] },
			{
				5: [1, 53],
				19: [1, 51],
				20: [1, 52]
			},
			{
				22: 54,
				71: H
			},
			{
				22: 55,
				71: H
			},
			{ 5: [1, 56] },
			{ 5: [1, 57] },
			{ 5: [1, 58] },
			{ 5: [1, 59] },
			{ 5: [1, 60] },
			i(U, [2, 29]),
			i(U, [2, 30]),
			{ 32: [1, 61] },
			{ 34: [1, 62] },
			i(U, [2, 33]),
			{ 15: [1, 63] },
			{ 15: [1, 64] },
			{ 15: [1, 65] },
			{ 15: [1, 66] },
			{ 15: [1, 67] },
			{ 15: [1, 68] },
			{ 15: [1, 69] },
			{ 15: [1, 70] },
			{
				22: 71,
				54: 72,
				71: [1, 73]
			},
			{
				22: 74,
				71: H
			},
			{
				22: 75,
				71: H
			},
			{
				68: 76,
				76: [1, 77],
				77: [1, 78],
				78: [1, 79],
				79: [1, 80],
				80: [1, 81],
				81: [1, 82],
				82: [1, 83],
				83: [1, 84],
				84: [1, 85],
				85: [1, 86]
			},
			{
				56: 87,
				58: [1, 88],
				66: [1, 89],
				67: [1, 90]
			},
			{
				22: 91,
				71: H
			},
			{
				22: 92,
				71: H
			},
			{
				22: 93,
				71: H
			},
			{
				22: 94,
				71: H
			},
			i([
				5,
				51,
				65,
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
				86
			], W),
			i(U, [2, 6]),
			i(U, [2, 15]),
			i(G, [2, 9], { 10: 95 }),
			i(U, [2, 17]),
			{
				5: [1, 97],
				19: [1, 96]
			},
			{ 5: [1, 98] },
			i(U, [2, 21]),
			{ 5: [1, 99] },
			{ 5: [1, 100] },
			i(U, [2, 24]),
			i(U, [2, 25]),
			i(U, [2, 26]),
			i(U, [2, 27]),
			i(U, [2, 28]),
			i(U, [2, 31]),
			i(U, [2, 32]),
			i(K, f, { 7: 101 }),
			i(K, f, { 7: 102 }),
			i(K, f, { 7: 103 }),
			i(q, f, {
				40: 104,
				7: 105
			}),
			i(J, f, {
				42: 106,
				7: 107
			}),
			i(J, f, {
				7: 107,
				42: 108
			}),
			i(Y, f, {
				45: 109,
				7: 110
			}),
			i(K, f, { 7: 111 }),
			{
				5: [1, 113],
				51: [1, 112]
			},
			{ 5: [1, 114] },
			i([5, 51], W, {
				72: 115,
				73: [1, 116]
			}),
			{
				5: [1, 118],
				51: [1, 117]
			},
			{ 5: [1, 119] },
			{
				22: 122,
				69: [1, 120],
				70: [1, 121],
				71: H
			},
			i(X, [2, 72]),
			i(X, [2, 73]),
			i(X, [2, 74]),
			i(X, [2, 75]),
			i(X, [2, 76]),
			i(X, [2, 77]),
			i(X, [2, 78]),
			i(X, [2, 79]),
			i(X, [2, 80]),
			i(X, [2, 81]),
			{
				22: 123,
				71: H
			},
			{
				22: 125,
				59: 124,
				71: H
			},
			{ 71: [2, 64] },
			{ 71: [2, 65] },
			{
				57: 126,
				86: Z
			},
			{
				57: 128,
				86: Z
			},
			{
				57: 129,
				86: Z
			},
			{
				57: 130,
				86: Z
			},
			{
				4: [1, 133],
				5: [1, 135],
				11: 132,
				12: 134,
				16: [1, 131],
				50: P,
				52: F,
				53: I
			},
			{ 5: [1, 136] },
			i(U, [2, 19]),
			i(U, [2, 20]),
			i(U, [2, 22]),
			i(U, [2, 23]),
			{
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				16: [1, 137],
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			{
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				16: [1, 138],
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			{
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				16: [1, 139],
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			{ 16: [1, 140] },
			{
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				16: [2, 46],
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				49: [1, 141],
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			{ 16: [1, 142] },
			{
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				16: [2, 44],
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				48: [1, 143],
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			{ 16: [1, 144] },
			{ 16: [1, 145] },
			{
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				16: [2, 42],
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				47: [1, 146],
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			{
				4: m,
				5: h,
				8: 8,
				9: 10,
				12: 12,
				13: g,
				14: _,
				16: [1, 147],
				17: 15,
				18: v,
				21: y,
				22: 40,
				23: b,
				24: 19,
				25: 20,
				26: 21,
				27: 22,
				28: 23,
				29: x,
				30: S,
				31: C,
				33: w,
				35: T,
				36: E,
				37: D,
				38: O,
				39: k,
				41: A,
				43: j,
				44: M,
				46: N,
				50: P,
				52: F,
				53: I,
				55: L,
				60: R,
				61: z,
				62: B,
				63: V,
				71: H
			},
			{ 15: [1, 148] },
			i(U, [2, 49]),
			i(U, [2, 53]),
			{ 5: [2, 69] },
			{ 74: [1, 149] },
			{ 15: [1, 150] },
			i(U, [2, 51]),
			i(U, [2, 52]),
			{
				22: 151,
				71: H
			},
			{
				22: 152,
				71: H
			},
			{
				57: 153,
				86: Z
			},
			{
				57: 154,
				86: Z
			},
			{
				57: 155,
				86: Z
			},
			{
				65: [1, 156],
				86: [2, 63]
			},
			{ 5: [2, 56] },
			{ 5: [2, 82] },
			{ 5: [2, 57] },
			{ 5: [2, 58] },
			{ 5: [2, 59] },
			i(U, [2, 16]),
			i(G, [2, 10]),
			{
				12: 157,
				50: P,
				52: F,
				53: I
			},
			i(G, [2, 12]),
			i(G, [2, 13]),
			i(U, [2, 18]),
			i(U, [2, 34]),
			i(U, [2, 35]),
			i(U, [2, 36]),
			i(U, [2, 37]),
			{ 15: [1, 158] },
			i(U, [2, 38]),
			{ 15: [1, 159] },
			i(U, [2, 39]),
			i(U, [2, 40]),
			{ 15: [1, 160] },
			i(U, [2, 41]),
			{ 5: [1, 161] },
			{ 75: [1, 162] },
			{ 5: [1, 163] },
			{
				57: 164,
				86: Z
			},
			{
				57: 165,
				86: Z
			},
			{ 5: [2, 68] },
			{ 5: [2, 54] },
			{ 5: [2, 55] },
			{
				22: 166,
				71: H
			},
			i(G, [2, 11]),
			i(q, f, {
				7: 105,
				40: 167
			}),
			i(J, f, {
				7: 107,
				42: 168
			}),
			i(Y, f, {
				7: 110,
				45: 169
			}),
			i(U, [2, 48]),
			{ 5: [2, 70] },
			i(U, [2, 50]),
			{ 5: [2, 66] },
			{ 5: [2, 67] },
			{ 86: [2, 62] },
			{ 16: [2, 47] },
			{ 16: [2, 45] },
			{ 16: [2, 43] }
		],
		defaultActions: {
			5: [2, 1],
			6: [2, 2],
			89: [2, 64],
			90: [2, 65],
			115: [2, 69],
			126: [2, 56],
			127: [2, 82],
			128: [2, 57],
			129: [2, 58],
			130: [2, 59],
			153: [2, 68],
			154: [2, 54],
			155: [2, 55],
			162: [2, 70],
			164: [2, 66],
			165: [2, 67],
			166: [2, 62],
			167: [2, 47],
			168: [2, 45],
			169: [2, 43]
		},
		parseError: /* @__PURE__ */ __name(function(i, l) {
			if (l.recoverable) this.trace(i);
			else {
				var u = Error(i);
				throw u.hash = l, u;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(i) {
			var l = this, u = [0], d = [], f = [null], m = [], h = this.table, g = "", _ = 0, v = 0, y = 0, b = 2, x = 1, S = m.slice.call(arguments, 1), C = Object.create(this.lexer), w = { yy: {} };
			for (var T in this.yy) Object.prototype.hasOwnProperty.call(this.yy, T) && (w.yy[T] = this.yy[T]);
			C.setInput(i, w.yy), w.yy.lexer = C, w.yy.parser = this, C.yylloc === void 0 && (C.yylloc = {});
			var E = C.yylloc;
			m.push(E);
			var D = C.options && C.options.ranges;
			typeof w.yy.parseError == "function" ? this.parseError = w.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function O(i) {
				u.length -= 2 * i, f.length -= i, m.length -= i;
			}
			__name(O, "popStack");
			function k() {
				var i = d.pop() || C.lex() || x;
				return typeof i != "number" && (i instanceof Array && (d = i, i = d.pop()), i = l.symbols_[i] || i), i;
			}
			__name(k, "lex");
			for (var A, j, M, N, P, F = {}, I, L, R, z;;) {
				if (M = u[u.length - 1], this.defaultActions[M] ? N = this.defaultActions[M] : (A ??= k(), N = h[M] && h[M][A]), N === void 0 || !N.length || !N[0]) {
					var B = "";
					for (I in z = [], h[M]) this.terminals_[I] && I > b && z.push("'" + this.terminals_[I] + "'");
					B = C.showPosition ? "Parse error on line " + (_ + 1) + ":\n" + C.showPosition() + "\nExpecting " + z.join(", ") + ", got '" + (this.terminals_[A] || A) + "'" : "Parse error on line " + (_ + 1) + ": Unexpected " + (A == x ? "end of input" : "'" + (this.terminals_[A] || A) + "'"), this.parseError(B, {
						text: C.match,
						token: this.terminals_[A] || A,
						line: C.yylineno,
						loc: E,
						expected: z
					});
				}
				if (N[0] instanceof Array && N.length > 1) throw Error("Parse Error: multiple actions possible at state: " + M + ", token: " + A);
				switch (N[0]) {
					case 1:
						u.push(A), f.push(C.yytext), m.push(C.yylloc), u.push(N[1]), A = null, j ? (A = j, j = null) : (v = C.yyleng, g = C.yytext, _ = C.yylineno, E = C.yylloc, y > 0 && y--);
						break;
					case 2:
						if (L = this.productions_[N[1]][1], F.$ = f[f.length - L], F._$ = {
							first_line: m[m.length - (L || 1)].first_line,
							last_line: m[m.length - 1].last_line,
							first_column: m[m.length - (L || 1)].first_column,
							last_column: m[m.length - 1].last_column
						}, D && (F._$.range = [m[m.length - (L || 1)].range[0], m[m.length - 1].range[1]]), P = this.performAction.apply(F, [
							g,
							v,
							_,
							w.yy,
							N[1],
							f,
							m
						].concat(S)), P !== void 0) return P;
						L && (u = u.slice(0, -1 * L * 2), f = f.slice(0, -1 * L), m = m.slice(0, -1 * L)), u.push(this.productions_[N[1]][0]), f.push(F.$), m.push(F._$), R = h[u[u.length - 2]][u[u.length - 1]], u.push(R);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	Q.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(i, l) {
				if (this.yy.parser) this.yy.parser.parseError(i, l);
				else throw Error(i);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(i, l) {
				return this.yy = l || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var i = this._input[0];
				return this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i, i.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(i) {
				var l = i.length, u = i.split(/(?:\r\n?|\n)/g);
				this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - l), this.offset -= l;
				var d = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
				var f = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: u ? (u.length === d.length ? this.yylloc.first_column : 0) + d[d.length - u.length].length - u[0].length : this.yylloc.first_column - l
				}, this.options.ranges && (this.yylloc.range = [f[0], f[0] + this.yyleng - l]), this.yyleng = this.yytext.length, this;
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
			less: /* @__PURE__ */ __name(function(i) {
				this.unput(this.match.slice(i));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var i = this.matched.substr(0, this.matched.length - this.match.length);
				return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var i = this.match;
				return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var i = this.pastInput(), l = Array(i.length + 1).join("-");
				return i + this.upcomingInput() + "\n" + l + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(i, l) {
				var u, d, f;
				if (this.options.backtrack_lexer && (f = {
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
				}, this.options.ranges && (f.yylloc.range = this.yylloc.range.slice(0))), d = i[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
				}, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(i[0].length), this.matched += i[0], u = this.performAction.call(this, this.yy, this, l, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), u) return u;
				if (this._backtrack) {
					for (var p in f) this[p] = f[p];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var i, l, u, d;
				this._more || (this.yytext = "", this.match = "");
				for (var f = this._currentRules(), p = 0; p < f.length; p++) if (u = this._input.match(this.rules[f[p]]), u && (!l || u[0].length > l[0].length)) {
					if (l = u, d = p, this.options.backtrack_lexer) {
						if (i = this.test_match(u, f[p]), i !== !1) return i;
						if (this._backtrack) {
							l = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return l ? (i = this.test_match(l, f[d]), i === !1 ? !1 : i) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function(i) {
				this.conditionStack.push(i);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function(i) {
				return i = this.conditionStack.length - 1 - Math.abs(i || 0), i >= 0 ? this.conditionStack[i] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function(i) {
				this.begin(i);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ __name(function(i, l, u, d) {
				switch (u) {
					case 0: return 5;
					case 1: break;
					case 2: break;
					case 3: break;
					case 4: break;
					case 5: break;
					case 6: return 19;
					case 7: return this.begin("CONFIG"), 73;
					case 8: return 74;
					case 9: return this.popState(), this.popState(), 75;
					case 10: return l.yytext = l.yytext.trim(), 71;
					case 11: return l.yytext = l.yytext.trim(), this.begin("ALIAS"), 71;
					case 12: return this.begin("LINE"), 14;
					case 13: return this.begin("ID"), 50;
					case 14: return this.begin("ID"), 52;
					case 15: return 13;
					case 16: return this.begin("ID"), 53;
					case 17: return l.yytext = l.yytext.trim(), this.begin("ALIAS"), 71;
					case 18: return this.popState(), this.popState(), this.begin("LINE"), 51;
					case 19: return this.popState(), this.popState(), 5;
					case 20: return this.begin("LINE"), 36;
					case 21: return this.begin("LINE"), 37;
					case 22: return this.begin("LINE"), 38;
					case 23: return this.begin("LINE"), 39;
					case 24: return this.begin("LINE"), 49;
					case 25: return this.begin("LINE"), 41;
					case 26: return this.begin("LINE"), 43;
					case 27: return this.begin("LINE"), 48;
					case 28: return this.begin("LINE"), 44;
					case 29: return this.begin("LINE"), 47;
					case 30: return this.begin("LINE"), 46;
					case 31: return this.popState(), 15;
					case 32: return 16;
					case 33: return 66;
					case 34: return 67;
					case 35: return 60;
					case 36: return 61;
					case 37: return 62;
					case 38: return 63;
					case 39: return 58;
					case 40: return 55;
					case 41: return this.begin("ID"), 21;
					case 42: return this.begin("ID"), 23;
					case 43: return 29;
					case 44: return 30;
					case 45: return this.begin("acc_title"), 31;
					case 46: return this.popState(), "acc_title_value";
					case 47: return this.begin("acc_descr"), 33;
					case 48: return this.popState(), "acc_descr_value";
					case 49:
						this.begin("acc_descr_multiline");
						break;
					case 50:
						this.popState();
						break;
					case 51: return "acc_descr_multiline_value";
					case 52: return 6;
					case 53: return 18;
					case 54: return 20;
					case 55: return 65;
					case 56: return 5;
					case 57: return l.yytext = l.yytext.trim(), 71;
					case 58: return 78;
					case 59: return 79;
					case 60: return 80;
					case 61: return 81;
					case 62: return 76;
					case 63: return 77;
					case 64: return 82;
					case 65: return 83;
					case 66: return 84;
					case 67: return 85;
					case 68: return 86;
					case 69: return 86;
					case 70: return 69;
					case 71: return 70;
					case 72: return 5;
					case 73: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:((?!\n)\s)+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[0-9]+(?=[ \n]+))/i,
				/^(?:@\{)/i,
				/^(?:[^\}]+)/i,
				/^(?:\})/i,
				/^(?:[^\<->\->:\n,;@\s]+(?=@\{))/i,
				/^(?:[^\<->\->:\n,;@]+?([\-]*[^\<->\->:\n,;@]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i,
				/^(?:box\b)/i,
				/^(?:participant\b)/i,
				/^(?:actor\b)/i,
				/^(?:create\b)/i,
				/^(?:destroy\b)/i,
				/^(?:[^<\->\->:\n,;]+?([\-]*[^<\->\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i,
				/^(?:as\b)/i,
				/^(?:(?:))/i,
				/^(?:loop\b)/i,
				/^(?:rect\b)/i,
				/^(?:opt\b)/i,
				/^(?:alt\b)/i,
				/^(?:else\b)/i,
				/^(?:par\b)/i,
				/^(?:par_over\b)/i,
				/^(?:and\b)/i,
				/^(?:critical\b)/i,
				/^(?:option\b)/i,
				/^(?:break\b)/i,
				/^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i,
				/^(?:end\b)/i,
				/^(?:left of\b)/i,
				/^(?:right of\b)/i,
				/^(?:links\b)/i,
				/^(?:link\b)/i,
				/^(?:properties\b)/i,
				/^(?:details\b)/i,
				/^(?:over\b)/i,
				/^(?:note\b)/i,
				/^(?:activate\b)/i,
				/^(?:deactivate\b)/i,
				/^(?:title\s[^#\n;]+)/i,
				/^(?:title:\s[^#\n;]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:sequenceDiagram\b)/i,
				/^(?:autonumber\b)/i,
				/^(?:off\b)/i,
				/^(?:,)/i,
				/^(?:;)/i,
				/^(?:[^+<\->\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+<\->\->:\n,;]+)*)/i,
				/^(?:->>)/i,
				/^(?:<<->>)/i,
				/^(?:-->>)/i,
				/^(?:<<-->>)/i,
				/^(?:->)/i,
				/^(?:-->)/i,
				/^(?:-[x])/i,
				/^(?:--[x])/i,
				/^(?:-[\)])/i,
				/^(?:--[\)])/i,
				/^(?::(?:(?:no)?wrap)?[^#\n;]*)/i,
				/^(?::)/i,
				/^(?:\+)/i,
				/^(?:-)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [50, 51],
					inclusive: !1
				},
				acc_descr: {
					rules: [48],
					inclusive: !1
				},
				acc_title: {
					rules: [46],
					inclusive: !1
				},
				ID: {
					rules: [
						2,
						3,
						7,
						10,
						11,
						17
					],
					inclusive: !1
				},
				ALIAS: {
					rules: [
						2,
						3,
						18,
						19
					],
					inclusive: !1
				},
				LINE: {
					rules: [
						2,
						3,
						31
					],
					inclusive: !1
				},
				CONFIG: {
					rules: [8, 9],
					inclusive: !1
				},
				CONFIG_DATA: {
					rules: [],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						3,
						4,
						5,
						6,
						12,
						13,
						14,
						15,
						16,
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
						47,
						49,
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
						69,
						70,
						71,
						72,
						73
					],
					inclusive: !0
				}
			}
		};
	})();
	function $() {
		this.yy = {};
	}
	return __name($, "Parser"), $.prototype = Q, Q.Parser = $, new $();
})();
parser.parser = parser;
var sequenceDiagram_default = parser, LINETYPE = {
	SOLID: 0,
	DOTTED: 1,
	NOTE: 2,
	SOLID_CROSS: 3,
	DOTTED_CROSS: 4,
	SOLID_OPEN: 5,
	DOTTED_OPEN: 6,
	LOOP_START: 10,
	LOOP_END: 11,
	ALT_START: 12,
	ALT_ELSE: 13,
	ALT_END: 14,
	OPT_START: 15,
	OPT_END: 16,
	ACTIVE_START: 17,
	ACTIVE_END: 18,
	PAR_START: 19,
	PAR_AND: 20,
	PAR_END: 21,
	RECT_START: 22,
	RECT_END: 23,
	SOLID_POINT: 24,
	DOTTED_POINT: 25,
	AUTONUMBER: 26,
	CRITICAL_START: 27,
	CRITICAL_OPTION: 28,
	CRITICAL_END: 29,
	BREAK_START: 30,
	BREAK_END: 31,
	PAR_OVER_START: 32,
	BIDIRECTIONAL_SOLID: 33,
	BIDIRECTIONAL_DOTTED: 34
}, ARROWTYPE = {
	FILLED: 0,
	OPEN: 1
}, PLACEMENT = {
	LEFTOF: 0,
	RIGHTOF: 1,
	OVER: 2
}, PARTICIPANT_TYPE = {
	ACTOR: "actor",
	BOUNDARY: "boundary",
	COLLECTIONS: "collections",
	CONTROL: "control",
	DATABASE: "database",
	ENTITY: "entity",
	PARTICIPANT: "participant",
	QUEUE: "queue"
}, SequenceDB = class {
	constructor() {
		this.state = new ImperativeState(() => ({
			prevActor: void 0,
			actors: /* @__PURE__ */ new Map(),
			createdActors: /* @__PURE__ */ new Map(),
			destroyedActors: /* @__PURE__ */ new Map(),
			boxes: [],
			messages: [],
			notes: [],
			sequenceNumbersEnabled: !1,
			wrapEnabled: void 0,
			currentBox: void 0,
			lastCreated: void 0,
			lastDestroyed: void 0
		})), this.setAccTitle = setAccTitle, this.setAccDescription = setAccDescription, this.setDiagramTitle = setDiagramTitle, this.getAccTitle = getAccTitle, this.getAccDescription = getAccDescription, this.getDiagramTitle = getDiagramTitle, this.apply = this.apply.bind(this), this.parseBoxData = this.parseBoxData.bind(this), this.parseMessage = this.parseMessage.bind(this), this.clear(), this.setWrap(getConfig2().wrap), this.LINETYPE = LINETYPE, this.ARROWTYPE = ARROWTYPE, this.PLACEMENT = PLACEMENT;
	}
	static #_ = __name(this, "SequenceDB");
	addBox(i) {
		this.state.records.boxes.push({
			name: i.text,
			wrap: i.wrap ?? this.autoWrap(),
			fill: i.color,
			actorKeys: []
		}), this.state.records.currentBox = this.state.records.boxes.slice(-1)[0];
	}
	addActor(i, l, u, d, f) {
		let p = this.state.records.currentBox, m;
		if (f !== void 0) {
			let i;
			i = f.includes("\n") ? f + "\n" : "{\n" + f + "\n}", m = load(i, { schema: JSON_SCHEMA });
		}
		d = m?.type ?? d;
		let h = this.state.records.actors.get(i);
		if (h) {
			if (this.state.records.currentBox && h.box && this.state.records.currentBox !== h.box) throw Error(`A same participant should only be defined in one Box: ${h.name} can't be in '${h.box.name}' and in '${this.state.records.currentBox.name}' at the same time.`);
			if (p = h.box ? h.box : this.state.records.currentBox, h.box = p, h && l === h.name && u == null) return;
		}
		if (u?.text ?? (u = {
			text: l,
			type: d
		}), (d == null || u.text == null) && (u = {
			text: l,
			type: d
		}), this.state.records.actors.set(i, {
			box: p,
			name: l,
			description: u.text,
			wrap: u.wrap ?? this.autoWrap(),
			prevActor: this.state.records.prevActor,
			links: {},
			properties: {},
			actorCnt: null,
			rectData: null,
			type: d ?? "participant"
		}), this.state.records.prevActor) {
			let l = this.state.records.actors.get(this.state.records.prevActor);
			l && (l.nextActor = i);
		}
		this.state.records.currentBox && this.state.records.currentBox.actorKeys.push(i), this.state.records.prevActor = i;
	}
	activationCount(i) {
		let l, u = 0;
		if (!i) return 0;
		for (l = 0; l < this.state.records.messages.length; l++) this.state.records.messages[l].type === this.LINETYPE.ACTIVE_START && this.state.records.messages[l].from === i && u++, this.state.records.messages[l].type === this.LINETYPE.ACTIVE_END && this.state.records.messages[l].from === i && u--;
		return u;
	}
	addMessage(i, l, u, d) {
		this.state.records.messages.push({
			id: this.state.records.messages.length.toString(),
			from: i,
			to: l,
			message: u.text,
			wrap: u.wrap ?? this.autoWrap(),
			answer: d
		});
	}
	addSignal(i, l, u, d, f = !1) {
		if (d === this.LINETYPE.ACTIVE_END && this.activationCount(i ?? "") < 1) {
			let l = /* @__PURE__ */ Error("Trying to inactivate an inactive participant (" + i + ")");
			throw l.hash = {
				text: "->>-",
				token: "->>-",
				line: "1",
				loc: {
					first_line: 1,
					last_line: 1,
					first_column: 1,
					last_column: 1
				},
				expected: ["'ACTIVE_PARTICIPANT'"]
			}, l;
		}
		return this.state.records.messages.push({
			id: this.state.records.messages.length.toString(),
			from: i,
			to: l,
			message: u?.text ?? "",
			wrap: u?.wrap ?? this.autoWrap(),
			type: d,
			activate: f
		}), !0;
	}
	hasAtLeastOneBox() {
		return this.state.records.boxes.length > 0;
	}
	hasAtLeastOneBoxWithTitle() {
		return this.state.records.boxes.some((i) => i.name);
	}
	getMessages() {
		return this.state.records.messages;
	}
	getBoxes() {
		return this.state.records.boxes;
	}
	getActors() {
		return this.state.records.actors;
	}
	getCreatedActors() {
		return this.state.records.createdActors;
	}
	getDestroyedActors() {
		return this.state.records.destroyedActors;
	}
	getActor(i) {
		return this.state.records.actors.get(i);
	}
	getActorKeys() {
		return [...this.state.records.actors.keys()];
	}
	enableSequenceNumbers() {
		this.state.records.sequenceNumbersEnabled = !0;
	}
	disableSequenceNumbers() {
		this.state.records.sequenceNumbersEnabled = !1;
	}
	showSequenceNumbers() {
		return this.state.records.sequenceNumbersEnabled;
	}
	setWrap(i) {
		this.state.records.wrapEnabled = i;
	}
	extractWrap(i) {
		if (i === void 0) return {};
		i = i.trim();
		let l = /^:?wrap:/.exec(i) === null ? /^:?nowrap:/.exec(i) === null ? void 0 : !1 : !0;
		return {
			cleanedText: (l === void 0 ? i : i.replace(/^:?(?:no)?wrap:/, "")).trim(),
			wrap: l
		};
	}
	autoWrap() {
		return this.state.records.wrapEnabled === void 0 ? getConfig2().sequence?.wrap ?? !1 : this.state.records.wrapEnabled;
	}
	clear() {
		this.state.reset(), clear();
	}
	parseMessage(i) {
		let l = i.trim(), { wrap: u, cleanedText: d } = this.extractWrap(l), p = {
			text: d,
			wrap: u
		};
		return log.debug(`parseMessage: ${JSON.stringify(p)}`), p;
	}
	parseBoxData(i) {
		let l = /^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/.exec(i), u = l?.[1] ? l[1].trim() : "transparent", d = l?.[2] ? l[2].trim() : void 0;
		if (window?.CSS) window.CSS.supports("color", u) || (u = "transparent", d = i.trim());
		else {
			let l = new Option().style;
			l.color = u, l.color !== u && (u = "transparent", d = i.trim());
		}
		let { wrap: f, cleanedText: p } = this.extractWrap(d);
		return {
			text: p ? sanitizeText(p, getConfig2()) : void 0,
			color: u,
			wrap: f
		};
	}
	addNote(i, l, u) {
		let d = {
			actor: i,
			placement: l,
			message: u.text,
			wrap: u.wrap ?? this.autoWrap()
		}, f = [].concat(i, i);
		this.state.records.notes.push(d), this.state.records.messages.push({
			id: this.state.records.messages.length.toString(),
			from: f[0],
			to: f[1],
			message: u.text,
			wrap: u.wrap ?? this.autoWrap(),
			type: this.LINETYPE.NOTE,
			placement: l
		});
	}
	addLinks(i, l) {
		let u = this.getActor(i);
		try {
			let i = sanitizeText(l.text, getConfig2());
			i = i.replace(/&equals;/g, "="), i = i.replace(/&amp;/g, "&");
			let d = JSON.parse(i);
			this.insertLinks(u, d);
		} catch (i) {
			log.error("error while parsing actor link text", i);
		}
	}
	addALink(i, l) {
		let u = this.getActor(i);
		try {
			let i = {}, d = sanitizeText(l.text, getConfig2()), f = d.indexOf("@");
			d = d.replace(/&equals;/g, "="), d = d.replace(/&amp;/g, "&");
			let p = d.slice(0, f - 1).trim();
			i[p] = d.slice(f + 1).trim(), this.insertLinks(u, i);
		} catch (i) {
			log.error("error while parsing actor link text", i);
		}
	}
	insertLinks(i, l) {
		if (i.links == null) i.links = l;
		else for (let u in l) i.links[u] = l[u];
	}
	addProperties(i, l) {
		let u = this.getActor(i);
		try {
			let i = sanitizeText(l.text, getConfig2()), d = JSON.parse(i);
			this.insertProperties(u, d);
		} catch (i) {
			log.error("error while parsing actor properties text", i);
		}
	}
	insertProperties(i, l) {
		if (i.properties == null) i.properties = l;
		else for (let u in l) i.properties[u] = l[u];
	}
	boxEnd() {
		this.state.records.currentBox = void 0;
	}
	addDetails(i, l) {
		let u = this.getActor(i), d = document.getElementById(l.text);
		try {
			let i = d.innerHTML, l = JSON.parse(i);
			l.properties && this.insertProperties(u, l.properties), l.links && this.insertLinks(u, l.links);
		} catch (i) {
			log.error("error while parsing actor details text", i);
		}
	}
	getActorProperty(i, l) {
		if (i?.properties !== void 0) return i.properties[l];
	}
	apply(i) {
		if (Array.isArray(i)) i.forEach((i) => {
			this.apply(i);
		});
		else switch (i.type) {
			case "sequenceIndex":
				this.state.records.messages.push({
					id: this.state.records.messages.length.toString(),
					from: void 0,
					to: void 0,
					message: {
						start: i.sequenceIndex,
						step: i.sequenceIndexStep,
						visible: i.sequenceVisible
					},
					wrap: !1,
					type: i.signalType
				});
				break;
			case "addParticipant":
				this.addActor(i.actor, i.actor, i.description, i.draw, i.config);
				break;
			case "createParticipant":
				if (this.state.records.actors.has(i.actor)) throw Error("It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior");
				this.state.records.lastCreated = i.actor, this.addActor(i.actor, i.actor, i.description, i.draw, i.config), this.state.records.createdActors.set(i.actor, this.state.records.messages.length);
				break;
			case "destroyParticipant":
				this.state.records.lastDestroyed = i.actor, this.state.records.destroyedActors.set(i.actor, this.state.records.messages.length);
				break;
			case "activeStart":
				this.addSignal(i.actor, void 0, void 0, i.signalType);
				break;
			case "activeEnd":
				this.addSignal(i.actor, void 0, void 0, i.signalType);
				break;
			case "addNote":
				this.addNote(i.actor, i.placement, i.text);
				break;
			case "addLinks":
				this.addLinks(i.actor, i.text);
				break;
			case "addALink":
				this.addALink(i.actor, i.text);
				break;
			case "addProperties":
				this.addProperties(i.actor, i.text);
				break;
			case "addDetails":
				this.addDetails(i.actor, i.text);
				break;
			case "addMessage":
				if (this.state.records.lastCreated) {
					if (i.to !== this.state.records.lastCreated) throw Error("The created participant " + this.state.records.lastCreated.name + " does not have an associated creating message after its declaration. Please check the sequence diagram.");
					this.state.records.lastCreated = void 0;
				} else if (this.state.records.lastDestroyed) {
					if (i.to !== this.state.records.lastDestroyed && i.from !== this.state.records.lastDestroyed) throw Error("The destroyed participant " + this.state.records.lastDestroyed.name + " does not have an associated destroying message after its declaration. Please check the sequence diagram.");
					this.state.records.lastDestroyed = void 0;
				}
				this.addSignal(i.from, i.to, i.msg, i.signalType, i.activate);
				break;
			case "boxStart":
				this.addBox(i.boxData);
				break;
			case "boxEnd":
				this.boxEnd();
				break;
			case "loopStart":
				this.addSignal(void 0, void 0, i.loopText, i.signalType);
				break;
			case "loopEnd":
				this.addSignal(void 0, void 0, void 0, i.signalType);
				break;
			case "rectStart":
				this.addSignal(void 0, void 0, i.color, i.signalType);
				break;
			case "rectEnd":
				this.addSignal(void 0, void 0, void 0, i.signalType);
				break;
			case "optStart":
				this.addSignal(void 0, void 0, i.optText, i.signalType);
				break;
			case "optEnd":
				this.addSignal(void 0, void 0, void 0, i.signalType);
				break;
			case "altStart":
				this.addSignal(void 0, void 0, i.altText, i.signalType);
				break;
			case "else":
				this.addSignal(void 0, void 0, i.altText, i.signalType);
				break;
			case "altEnd":
				this.addSignal(void 0, void 0, void 0, i.signalType);
				break;
			case "setAccTitle":
				setAccTitle(i.text);
				break;
			case "parStart":
				this.addSignal(void 0, void 0, i.parText, i.signalType);
				break;
			case "and":
				this.addSignal(void 0, void 0, i.parText, i.signalType);
				break;
			case "parEnd":
				this.addSignal(void 0, void 0, void 0, i.signalType);
				break;
			case "criticalStart":
				this.addSignal(void 0, void 0, i.criticalText, i.signalType);
				break;
			case "option":
				this.addSignal(void 0, void 0, i.optionText, i.signalType);
				break;
			case "criticalEnd":
				this.addSignal(void 0, void 0, void 0, i.signalType);
				break;
			case "breakStart":
				this.addSignal(void 0, void 0, i.breakText, i.signalType);
				break;
			case "breakEnd":
				this.addSignal(void 0, void 0, void 0, i.signalType);
				break;
		}
	}
	getConfig() {
		return getConfig2().sequence;
	}
}, styles_default = /* @__PURE__ */ __name((i) => `.actor {
    stroke: ${i.actorBorder};
    fill: ${i.actorBkg};
  }

  text.actor > tspan {
    fill: ${i.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${i.actorLineColor};
  }
  
  .innerArc {
    stroke-width: 1.5;
    stroke-dasharray: none;
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${i.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${i.signalColor};
  }

  #arrowhead path {
    fill: ${i.signalColor};
    stroke: ${i.signalColor};
  }

  .sequenceNumber {
    fill: ${i.sequenceNumberColor};
  }

  #sequencenumber {
    fill: ${i.signalColor};
  }

  #crosshead path {
    fill: ${i.signalColor};
    stroke: ${i.signalColor};
  }

  .messageText {
    fill: ${i.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${i.labelBoxBorderColor};
    fill: ${i.labelBoxBkgColor};
  }

  .labelText, .labelText > tspan {
    fill: ${i.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${i.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${i.labelBoxBorderColor};
    fill: ${i.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${i.noteBorderColor};
    fill: ${i.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${i.noteTextColor};
    stroke: none;
  }

  .activation0 {
    fill: ${i.activationBkgColor};
    stroke: ${i.activationBorderColor};
  }

  .activation1 {
    fill: ${i.activationBkgColor};
    stroke: ${i.activationBorderColor};
  }

  .activation2 {
    fill: ${i.activationBkgColor};
    stroke: ${i.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${i.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man line {
    stroke: ${i.actorBorder};
    fill: ${i.actorBkg};
  }
  .actor-man circle, line {
    stroke: ${i.actorBorder};
    fill: ${i.actorBkg};
    stroke-width: 2px;
  }

`, "getStyles"), ACTOR_TYPE_WIDTH = 36, TOP_ACTOR_CLASS = "actor-top", BOTTOM_ACTOR_CLASS = "actor-bottom", ACTOR_BOX_CLASS = "actor-box", ACTOR_MAN_FIGURE_CLASS = "actor-man", drawRect2 = /* @__PURE__ */ __name(function(i, l) {
	return drawRect(i, l);
}, "drawRect"), drawPopup = /* @__PURE__ */ __name(function(i, l, u, d, f) {
	if (l.links === void 0 || l.links === null || Object.keys(l.links).length === 0) return {
		height: 0,
		width: 0
	};
	let p = l.links, m = l.actorCnt, h = l.rectData;
	var g = "none";
	f && (g = "block !important");
	let _ = i.append("g");
	_.attr("id", "actor" + m + "_popup"), _.attr("class", "actorPopupMenu"), _.attr("display", g);
	var v = "";
	h.class !== void 0 && (v = " " + h.class);
	let y = h.width > u ? h.width : u, b = _.append("rect");
	if (b.attr("class", "actorPopupMenuPanel" + v), b.attr("x", h.x), b.attr("y", h.height), b.attr("fill", h.fill), b.attr("stroke", h.stroke), b.attr("width", y), b.attr("height", h.height), b.attr("rx", h.rx), b.attr("ry", h.ry), p != null) {
		var x = 20;
		for (let i in p) {
			var S = _.append("a"), C = (0, import_dist.sanitizeUrl)(p[i]);
			S.attr("xlink:href", C), S.attr("target", "_blank"), _drawMenuItemTextCandidateFunc(d)(i, S, h.x + 10, h.height + x, y, 20, { class: "actor" }, d), x += 30;
		}
	}
	return b.attr("height", x), {
		height: h.height + x,
		width: y
	};
}, "drawPopup"), popupMenuToggle = /* @__PURE__ */ __name(function(i) {
	return "var pu = document.getElementById('" + i + "'); if (pu != null) { pu.style.display = pu.style.display == 'block' ? 'none' : 'block'; }";
}, "popupMenuToggle"), drawKatex = /* @__PURE__ */ __name(async function(i, l, u = null) {
	let d = i.append("foreignObject"), f = await renderKatexSanitized(l.text, getConfig()), p = d.append("xhtml:div").attr("style", "width: fit-content;").attr("xmlns", "http://www.w3.org/1999/xhtml").html(f).node().getBoundingClientRect();
	if (d.attr("height", Math.round(p.height)).attr("width", Math.round(p.width)), l.class === "noteText") {
		let u = i.node().firstChild;
		u.setAttribute("height", p.height + 2 * l.textMargin);
		let f = u.getBBox();
		d.attr("x", Math.round(f.x + f.width / 2 - p.width / 2)).attr("y", Math.round(f.y + f.height / 2 - p.height / 2));
	} else if (u) {
		let { startx: i, stopx: f, starty: m } = u;
		if (i > f) {
			let l = i;
			i = f, f = l;
		}
		d.attr("x", Math.round(i + Math.abs(i - f) / 2 - p.width / 2)), l.class === "loopText" ? d.attr("y", Math.round(m)) : d.attr("y", Math.round(m - p.height));
	}
	return [d];
}, "drawKatex"), drawText = /* @__PURE__ */ __name(function(i, l) {
	let d = 0, f = 0, m = l.text.split(common_default.lineBreakRegex), [h, g] = parseFontSize(l.fontSize), _ = [], v = 0, y = /* @__PURE__ */ __name(() => l.y, "yfunc");
	if (l.valign !== void 0 && l.textMargin !== void 0 && l.textMargin > 0) switch (l.valign) {
		case "top":
		case "start":
			y = /* @__PURE__ */ __name(() => Math.round(l.y + l.textMargin), "yfunc");
			break;
		case "middle":
		case "center":
			y = /* @__PURE__ */ __name(() => Math.round(l.y + (d + f + l.textMargin) / 2), "yfunc");
			break;
		case "bottom":
		case "end":
			y = /* @__PURE__ */ __name(() => Math.round(l.y + (d + f + 2 * l.textMargin) - l.textMargin), "yfunc");
			break;
	}
	if (l.anchor !== void 0 && l.textMargin !== void 0 && l.width !== void 0) switch (l.anchor) {
		case "left":
		case "start":
			l.x = Math.round(l.x + l.textMargin), l.anchor = "start", l.dominantBaseline = "middle", l.alignmentBaseline = "middle";
			break;
		case "middle":
		case "center":
			l.x = Math.round(l.x + l.width / 2), l.anchor = "middle", l.dominantBaseline = "middle", l.alignmentBaseline = "middle";
			break;
		case "right":
		case "end":
			l.x = Math.round(l.x + l.width - l.textMargin), l.anchor = "end", l.dominantBaseline = "middle", l.alignmentBaseline = "middle";
			break;
	}
	for (let [u, p] of m.entries()) {
		l.textMargin !== void 0 && l.textMargin === 0 && h !== void 0 && (v = u * h);
		let m = i.append("text");
		m.attr("x", l.x), m.attr("y", y()), l.anchor !== void 0 && m.attr("text-anchor", l.anchor).attr("dominant-baseline", l.dominantBaseline).attr("alignment-baseline", l.alignmentBaseline), l.fontFamily !== void 0 && m.style("font-family", l.fontFamily), g !== void 0 && m.style("font-size", g), l.fontWeight !== void 0 && m.style("font-weight", l.fontWeight), l.fill !== void 0 && m.attr("fill", l.fill), l.class !== void 0 && m.attr("class", l.class), l.dy === void 0 ? v !== 0 && m.attr("dy", v) : m.attr("dy", l.dy);
		let b = p || "​";
		if (l.tspan) {
			let i = m.append("tspan");
			i.attr("x", l.x), l.fill !== void 0 && i.attr("fill", l.fill), i.text(b);
		} else m.text(b);
		l.valign !== void 0 && l.textMargin !== void 0 && l.textMargin > 0 && (f += (m._groups || m)[0][0].getBBox().height, d = f), _.push(m);
	}
	return _;
}, "drawText"), drawLabel = /* @__PURE__ */ __name(function(i, l) {
	function u(i, l, u, d, f) {
		return i + "," + l + " " + (i + u) + "," + l + " " + (i + u) + "," + (l + d - f) + " " + (i + u - f * 1.2) + "," + (l + d) + " " + i + "," + (l + d);
	}
	__name(u, "genPoints");
	let d = i.append("polygon");
	return d.attr("points", u(l.x, l.y, l.width, l.height, 7)), d.attr("class", "labelBox"), l.y += l.height / 2, drawText(i, l), d;
}, "drawLabel"), actorCnt = -1, fixLifeLineHeights = /* @__PURE__ */ __name((i, l, u, d) => {
	i.select && u.forEach((u) => {
		let f = l.get(u), p = i.select("#actor" + f.actorCnt);
		!d.mirrorActors && f.stopy ? p.attr("y2", f.stopy + f.height / 2) : d.mirrorActors && p.attr("y2", f.stopy);
	});
}, "fixLifeLineHeights"), drawActorTypeParticipant = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + l.height, h = i.append("g").lower();
	var g = h;
	d || (actorCnt++, Object.keys(l.links || {}).length && !u.forceMenus && g.attr("onclick", popupMenuToggle(`actor${actorCnt}_popup`)).attr("cursor", "pointer"), g.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), g = h.append("g"), l.actorCnt = actorCnt, l.links != null && g.attr("id", "root-" + actorCnt));
	let _ = getNoteRect();
	var v = "actor";
	l.properties?.class ? v = l.properties.class : _.fill = "#eaeaea", d ? v += ` ${BOTTOM_ACTOR_CLASS}` : v += ` ${TOP_ACTOR_CLASS}`, _.x = l.x, _.y = f, _.width = l.width, _.height = l.height, _.class = v, _.rx = 3, _.ry = 3, _.name = l.name;
	let y = drawRect2(g, _);
	if (l.rectData = _, l.properties?.icon) {
		let i = l.properties.icon.trim();
		i.charAt(0) === "@" ? drawEmbeddedImage(g, _.x + _.width - 20, _.y + 10, i.substr(1)) : drawImage(g, _.x + _.width - 20, _.y + 10, i);
	}
	_drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, _.x, _.y, _.width, _.height, { class: `actor ${ACTOR_BOX_CLASS}` }, u);
	let b = l.height;
	if (y.node) {
		let i = y.node().getBBox();
		l.height = i.height, b = i.height;
	}
	return b;
}, "drawActorTypeParticipant"), drawActorTypeCollections = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + l.height, h = i.append("g").lower();
	var g = h;
	d || (actorCnt++, Object.keys(l.links || {}).length && !u.forceMenus && g.attr("onclick", popupMenuToggle(`actor${actorCnt}_popup`)).attr("cursor", "pointer"), g.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), g = h.append("g"), l.actorCnt = actorCnt, l.links != null && g.attr("id", "root-" + actorCnt));
	let _ = getNoteRect();
	var v = "actor";
	l.properties?.class ? v = l.properties.class : _.fill = "#eaeaea", d ? v += ` ${BOTTOM_ACTOR_CLASS}` : v += ` ${TOP_ACTOR_CLASS}`, _.x = l.x, _.y = f, _.width = l.width, _.height = l.height, _.class = v, _.name = l.name;
	let y = {
		..._,
		x: _.x + -6,
		y: _.y + 6,
		class: "actor"
	}, b = drawRect2(g, _);
	if (drawRect2(g, y), l.rectData = _, l.properties?.icon) {
		let i = l.properties.icon.trim();
		i.charAt(0) === "@" ? drawEmbeddedImage(g, _.x + _.width - 20, _.y + 10, i.substr(1)) : drawImage(g, _.x + _.width - 20, _.y + 10, i);
	}
	_drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, _.x - 6, _.y + 6, _.width, _.height, { class: `actor ${ACTOR_BOX_CLASS}` }, u);
	let S = l.height;
	if (b.node) {
		let i = b.node().getBBox();
		l.height = i.height, S = i.height;
	}
	return S;
}, "drawActorTypeCollections"), drawActorTypeQueue = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + l.height, h = i.append("g").lower(), g = h;
	d || (actorCnt++, Object.keys(l.links || {}).length && !u.forceMenus && g.attr("onclick", popupMenuToggle(`actor${actorCnt}_popup`)).attr("cursor", "pointer"), g.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), g = h.append("g"), l.actorCnt = actorCnt, l.links != null && g.attr("id", "root-" + actorCnt));
	let _ = getNoteRect(), v = "actor";
	l.properties?.class ? v = l.properties.class : _.fill = "#eaeaea", d ? v += ` ${BOTTOM_ACTOR_CLASS}` : v += ` ${TOP_ACTOR_CLASS}`, _.x = l.x, _.y = f, _.width = l.width, _.height = l.height, _.class = v, _.name = l.name;
	let y = _.height / 2, b = y / (2.5 + _.height / 50), S = g.append("g"), C = g.append("g");
	if (S.append("path").attr("d", `M ${_.x},${_.y + y}
    a ${b},${y} 0 0 0 0,${_.height}
    h ${_.width - 2 * b}
    a ${b},${y} 0 0 0 0,-${_.height}
    Z
  `).attr("class", v), C.append("path").attr("d", `M ${_.x},${_.y + y}
      a ${b},${y} 0 0 0 0,${_.height}`).attr("stroke", "#666").attr("stroke-width", "1px").attr("class", v), S.attr("transform", `translate(${b}, ${-(_.height / 2)})`), C.attr("transform", `translate(${_.width - b}, ${-_.height / 2})`), l.rectData = _, l.properties?.icon) {
		let i = l.properties.icon.trim(), u = _.x + _.width - 20, d = _.y + 10;
		i.charAt(0) === "@" ? drawEmbeddedImage(g, u, d, i.substr(1)) : drawImage(g, u, d, i);
	}
	_drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, _.x, _.y, _.width, _.height, { class: `actor ${ACTOR_BOX_CLASS}` }, u);
	let w = l.height, T = S.select("path:last-child");
	if (T.node()) {
		let i = T.node().getBBox();
		l.height = i.height, w = i.height;
	}
	return w;
}, "drawActorTypeQueue"), drawActorTypeControl = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + 75, h = i.append("g").lower();
	d || (actorCnt++, h.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), l.actorCnt = actorCnt);
	let g = i.append("g"), _ = ACTOR_MAN_FIGURE_CLASS;
	d ? _ += ` ${BOTTOM_ACTOR_CLASS}` : _ += ` ${TOP_ACTOR_CLASS}`, g.attr("class", _), g.attr("name", l.name);
	let v = getNoteRect();
	v.x = l.x, v.y = f, v.fill = "#eaeaea", v.width = l.width, v.height = l.height, v.class = "actor";
	let y = l.x + l.width / 2, b = f + 30;
	return g.append("defs").append("marker").attr("id", "filled-head-control").attr("refX", 11).attr("refY", 5.8).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "172.5").append("path").attr("d", "M 14.4 5.6 L 7.2 10.4 L 8.8 5.6 L 7.2 0.8 Z"), g.append("circle").attr("cx", y).attr("cy", b).attr("r", 18).attr("fill", "#eaeaf7").attr("stroke", "#666").attr("stroke-width", 1.2), g.append("line").attr("marker-end", "url(#filled-head-control)").attr("transform", `translate(${y}, ${b - 18})`), l.height = g.node().getBBox().height + 2 * (u?.sequence?.labelBoxHeight ?? 0), _drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, v.x, v.y + 18 + (d ? 5 : 10), v.width, v.height, { class: `actor ${ACTOR_MAN_FIGURE_CLASS}` }, u), l.height;
}, "drawActorTypeControl"), drawActorTypeEntity = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + 75, h = i.append("g").lower(), g = i.append("g"), _ = ACTOR_MAN_FIGURE_CLASS;
	d ? _ += ` ${BOTTOM_ACTOR_CLASS}` : _ += ` ${TOP_ACTOR_CLASS}`, g.attr("class", _), g.attr("name", l.name);
	let v = getNoteRect();
	v.x = l.x, v.y = f, v.fill = "#eaeaea", v.width = l.width, v.height = l.height, v.class = "actor";
	let y = l.x + l.width / 2, b = f + (d ? 10 : 25);
	return g.append("circle").attr("cx", y).attr("cy", b).attr("r", 18).attr("width", l.width).attr("height", l.height), g.append("line").attr("x1", y - 18).attr("x2", y + 18).attr("y1", b + 18).attr("y2", b + 18).attr("stroke", "#333").attr("stroke-width", 2), l.height = g.node().getBBox().height + (u?.sequence?.labelBoxHeight ?? 0), d || (actorCnt++, h.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), l.actorCnt = actorCnt), _drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, v.x, v.y + (d ? (b - f + 18 - 5) / 2 : (b + 18 - f) / 2), v.width, v.height, { class: `actor ${ACTOR_MAN_FIGURE_CLASS}` }, u), g.attr("transform", `translate(0, ${18 / 2})`), l.height;
}, "drawActorTypeEntity"), drawActorTypeDatabase = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + l.height + 2 * u.boxTextMargin, h = i.append("g").lower(), g = h;
	d || (actorCnt++, Object.keys(l.links || {}).length && !u.forceMenus && g.attr("onclick", popupMenuToggle(`actor${actorCnt}_popup`)).attr("cursor", "pointer"), g.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), g = h.append("g"), l.actorCnt = actorCnt, l.links != null && g.attr("id", "root-" + actorCnt));
	let _ = getNoteRect(), v = "actor";
	l.properties?.class ? v = l.properties.class : _.fill = "#eaeaea", d ? v += ` ${BOTTOM_ACTOR_CLASS}` : v += ` ${TOP_ACTOR_CLASS}`, _.x = l.x, _.y = f, _.width = l.width, _.height = l.height, _.class = v, _.name = l.name, _.x = l.x, _.y = f;
	let y = _.width / 4, b = _.width / 4, S = y / 2, C = S / (2.5 + y / 50), w = g.append("g"), T = `
  M ${_.x},${_.y + C}
  a ${S},${C} 0 0 0 ${y},0
  a ${S},${C} 0 0 0 -${y},0
  l 0,${b - 2 * C}
  a ${S},${C} 0 0 0 ${y},0
  l 0,-${b - 2 * C}
`;
	w.append("path").attr("d", T).attr("fill", "#eaeaea").attr("stroke", "#000").attr("stroke-width", 1).attr("class", v), d ? w.attr("transform", `translate(${y * 1.5}, ${_.height / 4 - 2 * C})`) : w.attr("transform", `translate(${y * 1.5}, ${(_.height + C) / 4})`), l.rectData = _, _drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, _.x, _.y + (d ? (_.height + b) / 4 : (_.height + C) / 2), _.width, _.height, { class: `actor ${ACTOR_BOX_CLASS}` }, u);
	let E = w.select("path:last-child");
	return E.node() && (l.height = E.node().getBBox().height + (u.sequence.labelBoxHeight ?? 0)), l.height;
}, "drawActorTypeDatabase"), drawActorTypeBoundary = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + 80, h = i.append("g").lower();
	d || (actorCnt++, h.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), l.actorCnt = actorCnt);
	let g = i.append("g"), _ = ACTOR_MAN_FIGURE_CLASS;
	d ? _ += ` ${BOTTOM_ACTOR_CLASS}` : _ += ` ${TOP_ACTOR_CLASS}`, g.attr("class", _), g.attr("name", l.name);
	let v = getNoteRect();
	return v.x = l.x, v.y = f, v.fill = "#eaeaea", v.width = l.width, v.height = l.height, v.class = "actor", g.append("line").attr("id", "actor-man-torso" + actorCnt).attr("x1", l.x + l.width / 2 - 30 * 2.5).attr("y1", f + 10).attr("x2", l.x + l.width / 2 - 15).attr("y2", f + 10), g.append("line").attr("id", "actor-man-arms" + actorCnt).attr("x1", l.x + l.width / 2 - 30 * 2.5).attr("y1", f + 0).attr("x2", l.x + l.width / 2 - 30 * 2.5).attr("y2", f + 20), g.append("circle").attr("cx", l.x + l.width / 2).attr("cy", f + 10).attr("r", 30), l.height = g.node().getBBox().height + (u.sequence.labelBoxHeight ?? 0), _drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, v.x, v.y + (d ? 30 / 2 - 4 : 18), v.width, v.height, { class: `actor ${ACTOR_MAN_FIGURE_CLASS}` }, u), g.attr("transform", "translate(0,22)"), l.height;
}, "drawActorTypeBoundary"), drawActorTypeActor = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = d ? l.stopy : l.starty, p = l.x + l.width / 2, m = f + 80, h = i.append("g").lower();
	d || (actorCnt++, h.append("line").attr("id", "actor" + actorCnt).attr("x1", p).attr("y1", m).attr("x2", p).attr("y2", 2e3).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", l.name), l.actorCnt = actorCnt);
	let g = i.append("g"), _ = ACTOR_MAN_FIGURE_CLASS;
	d ? _ += ` ${BOTTOM_ACTOR_CLASS}` : _ += ` ${TOP_ACTOR_CLASS}`, g.attr("class", _), g.attr("name", l.name);
	let v = getNoteRect();
	v.x = l.x, v.y = f, v.fill = "#eaeaea", v.width = l.width, v.height = l.height, v.class = "actor", v.rx = 3, v.ry = 3, g.append("line").attr("id", "actor-man-torso" + actorCnt).attr("x1", p).attr("y1", f + 25).attr("x2", p).attr("y2", f + 45), g.append("line").attr("id", "actor-man-arms" + actorCnt).attr("x1", p - ACTOR_TYPE_WIDTH / 2).attr("y1", f + 33).attr("x2", p + ACTOR_TYPE_WIDTH / 2).attr("y2", f + 33), g.append("line").attr("x1", p - ACTOR_TYPE_WIDTH / 2).attr("y1", f + 60).attr("x2", p).attr("y2", f + 45), g.append("line").attr("x1", p).attr("y1", f + 45).attr("x2", p + ACTOR_TYPE_WIDTH / 2 - 2).attr("y2", f + 60);
	let y = g.append("circle");
	return y.attr("cx", l.x + l.width / 2), y.attr("cy", f + 10), y.attr("r", 15), y.attr("width", l.width), y.attr("height", l.height), l.height = g.node().getBBox().height, _drawTextCandidateFunc(u, hasKatex(l.description))(l.description, g, v.x, v.y + 35, v.width, v.height, { class: `actor ${ACTOR_MAN_FIGURE_CLASS}` }, u), l.height;
}, "drawActorTypeActor"), drawActor = /* @__PURE__ */ __name(async function(i, l, u, d) {
	switch (l.type) {
		case "actor": return await drawActorTypeActor(i, l, u, d);
		case "participant": return await drawActorTypeParticipant(i, l, u, d);
		case "boundary": return await drawActorTypeBoundary(i, l, u, d);
		case "control": return await drawActorTypeControl(i, l, u, d);
		case "entity": return await drawActorTypeEntity(i, l, u, d);
		case "database": return await drawActorTypeDatabase(i, l, u, d);
		case "collections": return await drawActorTypeCollections(i, l, u, d);
		case "queue": return await drawActorTypeQueue(i, l, u, d);
	}
}, "drawActor"), drawBox = /* @__PURE__ */ __name(function(i, l, u) {
	let d = i.append("g");
	drawBackgroundRect2(d, l), l.name && _drawTextCandidateFunc(u)(l.name, d, l.x, l.y + u.boxTextMargin + (l.textMaxHeight || 0) / 2, l.width, 0, { class: "text" }, u), d.lower();
}, "drawBox"), anchorElement = /* @__PURE__ */ __name(function(i) {
	return i.append("g");
}, "anchorElement"), drawActivation = /* @__PURE__ */ __name(function(i, l, u, d, f) {
	let p = getNoteRect(), m = l.anchored;
	p.x = l.startx, p.y = l.starty, p.class = "activation" + f % 3, p.width = l.stopx - l.startx, p.height = u - l.starty, drawRect2(m, p);
}, "drawActivation"), drawLoop = /* @__PURE__ */ __name(async function(i, l, u, d) {
	let { boxMargin: f, boxTextMargin: m, labelBoxHeight: h, labelBoxWidth: g, messageFontFamily: _, messageFontSize: v, messageFontWeight: y } = d, b = i.append("g"), S = /* @__PURE__ */ __name(function(i, l, u, d) {
		return b.append("line").attr("x1", i).attr("y1", l).attr("x2", u).attr("y2", d).attr("class", "loopLine");
	}, "drawLoopLine");
	S(l.startx, l.starty, l.stopx, l.starty), S(l.stopx, l.starty, l.stopx, l.stopy), S(l.startx, l.stopy, l.stopx, l.stopy), S(l.startx, l.starty, l.startx, l.stopy), l.sections !== void 0 && l.sections.forEach(function(i) {
		S(l.startx, i.y, l.stopx, i.y).style("stroke-dasharray", "3, 3");
	});
	let C = getTextObj();
	C.text = u, C.x = l.startx, C.y = l.starty, C.fontFamily = _, C.fontSize = v, C.fontWeight = y, C.anchor = "middle", C.valign = "middle", C.tspan = !1, C.width = g || 50, C.height = h || 20, C.textMargin = m, C.class = "labelText", drawLabel(b, C), C = getTextObj2(), C.text = l.title, C.x = l.startx + g / 2 + (l.stopx - l.startx) / 2, C.y = l.starty + f + m, C.anchor = "middle", C.valign = "middle", C.textMargin = m, C.class = "loopText", C.fontFamily = _, C.fontSize = v, C.fontWeight = y, C.wrap = !0;
	let w = hasKatex(C.text) ? await drawKatex(b, C, l) : drawText(b, C);
	if (l.sectionTitles !== void 0) {
		for (let [i, u] of Object.entries(l.sectionTitles)) if (u.message) {
			C.text = u.message, C.x = l.startx + (l.stopx - l.startx) / 2, C.y = l.sections[i].y + f + m, C.class = "loopText", C.anchor = "middle", C.valign = "middle", C.tspan = !1, C.fontFamily = _, C.fontSize = v, C.fontWeight = y, C.wrap = l.wrap, hasKatex(C.text) ? (l.starty = l.sections[i].y, await drawKatex(b, C, l)) : drawText(b, C);
			let d = Math.round(w.map((i) => (i._groups || i)[0][0].getBBox().height).reduce((i, l) => i + l));
			l.sections[i].height += d - (f + m);
		}
	}
	return l.height = Math.round(l.stopy - l.starty), b;
}, "drawLoop"), drawBackgroundRect2 = /* @__PURE__ */ __name(function(i, l) {
	drawBackgroundRect(i, l);
}, "drawBackgroundRect"), insertDatabaseIcon = /* @__PURE__ */ __name(function(i) {
	i.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
}, "insertDatabaseIcon"), insertComputerIcon = /* @__PURE__ */ __name(function(i) {
	i.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
}, "insertComputerIcon"), insertClockIcon = /* @__PURE__ */ __name(function(i) {
	i.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
}, "insertClockIcon"), insertArrowHead = /* @__PURE__ */ __name(function(i) {
	i.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 7.9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto-start-reverse").append("path").attr("d", "M -1 0 L 10 5 L 0 10 z");
}, "insertArrowHead"), insertArrowFilledHead = /* @__PURE__ */ __name(function(i) {
	i.append("defs").append("marker").attr("id", "filled-head").attr("refX", 15.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "insertArrowFilledHead"), insertSequenceNumber = /* @__PURE__ */ __name(function(i) {
	i.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
}, "insertSequenceNumber"), insertArrowCrossHead = /* @__PURE__ */ __name(function(i) {
	i.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 4).attr("refY", 4.5).append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1pt").attr("d", "M 1,2 L 6,7 M 6,2 L 1,7");
}, "insertArrowCrossHead"), getTextObj2 = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: void 0,
		style: "#666",
		width: void 0,
		height: void 0,
		textMargin: 0,
		rx: 0,
		ry: 0,
		tspan: !0,
		valign: void 0
	};
}, "getTextObj"), getNoteRect2 = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		fill: "#EDF2AE",
		stroke: "#666",
		width: 100,
		anchor: "start",
		height: 100,
		rx: 0,
		ry: 0
	};
}, "getNoteRect"), _drawTextCandidateFunc = /* @__PURE__ */ (function() {
	function i(i, l, u, d, f, p, h) {
		m(l.append("text").attr("x", u + f / 2).attr("y", d + p / 2 + 5).style("text-anchor", "middle").text(i), h);
	}
	__name(i, "byText");
	function l(i, l, d, f, p, h, g, _) {
		let { actorFontSize: v, actorFontFamily: y, actorFontWeight: b } = _, [x, S] = parseFontSize(v), C = i.split(common_default.lineBreakRegex);
		for (let i = 0; i < C.length; i++) {
			let u = i * x - x * (C.length - 1) / 2, _ = l.append("text").attr("x", d + p / 2).attr("y", f).style("text-anchor", "middle").style("font-size", S).style("font-weight", b).style("font-family", y);
			_.append("tspan").attr("x", d + p / 2).attr("dy", u).text(C[i]), _.attr("y", f + h / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), m(_, g);
		}
	}
	__name(l, "byTspan");
	function d(i, u, d, f, p, h, g, _) {
		let v = u.append("switch"), y = v.append("foreignObject").attr("x", d).attr("y", f).attr("width", p).attr("height", h).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		y.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(i), l(i, v, d, f, p, h, g, _), m(y, g);
	}
	__name(d, "byFo");
	async function f(i, u, d, f, p, h, g, _) {
		let v = await calculateMathMLDimensions(i, getConfig()), y = u.append("switch"), x = y.append("foreignObject").attr("x", d + p / 2 - v.width / 2).attr("y", f + h / 2 - v.height / 2).attr("width", v.width).attr("height", v.height).append("xhtml:div").style("height", "100%").style("width", "100%");
		x.append("div").style("text-align", "center").style("vertical-align", "middle").html(await renderKatexSanitized(i, getConfig())), l(i, y, d, f, p, h, g, _), m(x, g);
	}
	__name(f, "byKatex");
	function m(i, l) {
		for (let u in l) l.hasOwnProperty(u) && i.attr(u, l[u]);
	}
	return __name(m, "_setTextAttrs"), function(u, p = !1) {
		return p ? f : u.textPlacement === "fo" ? d : u.textPlacement === "old" ? i : l;
	};
})(), _drawMenuItemTextCandidateFunc = /* @__PURE__ */ (function() {
	function i(i, l, u, f, p, m, h) {
		d(l.append("text").attr("x", u).attr("y", f).style("text-anchor", "start").text(i), h);
	}
	__name(i, "byText");
	function l(i, l, u, f, p, m, h, g) {
		let { actorFontSize: _, actorFontFamily: v, actorFontWeight: y } = g, b = i.split(common_default.lineBreakRegex);
		for (let i = 0; i < b.length; i++) {
			let p = i * _ - _ * (b.length - 1) / 2, g = l.append("text").attr("x", u).attr("y", f).style("text-anchor", "start").style("font-size", _).style("font-weight", y).style("font-family", v);
			g.append("tspan").attr("x", u).attr("dy", p).text(b[i]), g.attr("y", f + m / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), d(g, h);
		}
	}
	__name(l, "byTspan");
	function u(i, u, f, p, m, h, g, _) {
		let v = u.append("switch"), y = v.append("foreignObject").attr("x", f).attr("y", p).attr("width", m).attr("height", h).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		y.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(i), l(i, v, f, p, m, h, g, _), d(y, g);
	}
	__name(u, "byFo");
	function d(i, l) {
		for (let u in l) l.hasOwnProperty(u) && i.attr(u, l[u]);
	}
	return __name(d, "_setTextAttrs"), function(d) {
		return d.textPlacement === "fo" ? u : d.textPlacement === "old" ? i : l;
	};
})(), svgDraw_default = {
	drawRect: drawRect2,
	drawText,
	drawLabel,
	drawActor,
	drawBox,
	drawPopup,
	anchorElement,
	drawActivation,
	drawLoop,
	drawBackgroundRect: drawBackgroundRect2,
	insertArrowHead,
	insertArrowFilledHead,
	insertSequenceNumber,
	insertArrowCrossHead,
	insertDatabaseIcon,
	insertComputerIcon,
	insertClockIcon,
	getTextObj: getTextObj2,
	getNoteRect: getNoteRect2,
	fixLifeLineHeights,
	sanitizeUrl: import_dist.sanitizeUrl
}, conf = {}, bounds = {
	data: {
		startx: void 0,
		stopx: void 0,
		starty: void 0,
		stopy: void 0
	},
	verticalPos: 0,
	sequenceItems: [],
	activations: [],
	models: {
		getHeight: /* @__PURE__ */ __name(function() {
			return Math.max.apply(null, this.actors.length === 0 ? [0] : this.actors.map((i) => i.height || 0)) + (this.loops.length === 0 ? 0 : this.loops.map((i) => i.height || 0).reduce((i, l) => i + l)) + (this.messages.length === 0 ? 0 : this.messages.map((i) => i.height || 0).reduce((i, l) => i + l)) + (this.notes.length === 0 ? 0 : this.notes.map((i) => i.height || 0).reduce((i, l) => i + l));
		}, "getHeight"),
		clear: /* @__PURE__ */ __name(function() {
			this.actors = [], this.boxes = [], this.loops = [], this.messages = [], this.notes = [];
		}, "clear"),
		addBox: /* @__PURE__ */ __name(function(i) {
			this.boxes.push(i);
		}, "addBox"),
		addActor: /* @__PURE__ */ __name(function(i) {
			this.actors.push(i);
		}, "addActor"),
		addLoop: /* @__PURE__ */ __name(function(i) {
			this.loops.push(i);
		}, "addLoop"),
		addMessage: /* @__PURE__ */ __name(function(i) {
			this.messages.push(i);
		}, "addMessage"),
		addNote: /* @__PURE__ */ __name(function(i) {
			this.notes.push(i);
		}, "addNote"),
		lastActor: /* @__PURE__ */ __name(function() {
			return this.actors[this.actors.length - 1];
		}, "lastActor"),
		lastLoop: /* @__PURE__ */ __name(function() {
			return this.loops[this.loops.length - 1];
		}, "lastLoop"),
		lastMessage: /* @__PURE__ */ __name(function() {
			return this.messages[this.messages.length - 1];
		}, "lastMessage"),
		lastNote: /* @__PURE__ */ __name(function() {
			return this.notes[this.notes.length - 1];
		}, "lastNote"),
		actors: [],
		boxes: [],
		loops: [],
		messages: [],
		notes: []
	},
	init: /* @__PURE__ */ __name(function() {
		this.sequenceItems = [], this.activations = [], this.models.clear(), this.data = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0
		}, this.verticalPos = 0, setConf(getConfig2());
	}, "init"),
	updateVal: /* @__PURE__ */ __name(function(i, l, u, d) {
		i[l] === void 0 ? i[l] = u : i[l] = d(u, i[l]);
	}, "updateVal"),
	updateBounds: /* @__PURE__ */ __name(function(i, l, u, d) {
		let f = this, m = 0;
		function h(h) {
			return /* @__PURE__ */ __name(function(p) {
				m++;
				let g = f.sequenceItems.length - m + 1;
				f.updateVal(p, "starty", l - g * conf.boxMargin, Math.min), f.updateVal(p, "stopy", d + g * conf.boxMargin, Math.max), f.updateVal(bounds.data, "startx", i - g * conf.boxMargin, Math.min), f.updateVal(bounds.data, "stopx", u + g * conf.boxMargin, Math.max), h !== "activation" && (f.updateVal(p, "startx", i - g * conf.boxMargin, Math.min), f.updateVal(p, "stopx", u + g * conf.boxMargin, Math.max), f.updateVal(bounds.data, "starty", l - g * conf.boxMargin, Math.min), f.updateVal(bounds.data, "stopy", d + g * conf.boxMargin, Math.max));
			}, "updateItemBounds");
		}
		__name(h, "updateFn"), this.sequenceItems.forEach(h()), this.activations.forEach(h("activation"));
	}, "updateBounds"),
	insert: /* @__PURE__ */ __name(function(i, l, u, d) {
		let f = common_default.getMin(i, u), p = common_default.getMax(i, u), m = common_default.getMin(l, d), h = common_default.getMax(l, d);
		this.updateVal(bounds.data, "startx", f, Math.min), this.updateVal(bounds.data, "starty", m, Math.min), this.updateVal(bounds.data, "stopx", p, Math.max), this.updateVal(bounds.data, "stopy", h, Math.max), this.updateBounds(f, m, p, h);
	}, "insert"),
	newActivation: /* @__PURE__ */ __name(function(i, l, u) {
		let d = u.get(i.from), f = actorActivations(i.from).length || 0, p = d.x + d.width / 2 + (f - 1) * conf.activationWidth / 2;
		this.activations.push({
			startx: p,
			starty: this.verticalPos + 2,
			stopx: p + conf.activationWidth,
			stopy: void 0,
			actor: i.from,
			anchored: svgDraw_default.anchorElement(l)
		});
	}, "newActivation"),
	endActivation: /* @__PURE__ */ __name(function(i) {
		let l = this.activations.map(function(i) {
			return i.actor;
		}).lastIndexOf(i.from);
		return this.activations.splice(l, 1)[0];
	}, "endActivation"),
	createLoop: /* @__PURE__ */ __name(function(i = {
		message: void 0,
		wrap: !1,
		width: void 0
	}, l) {
		return {
			startx: void 0,
			starty: this.verticalPos,
			stopx: void 0,
			stopy: void 0,
			title: i.message,
			wrap: i.wrap,
			width: i.width,
			height: 0,
			fill: l
		};
	}, "createLoop"),
	newLoop: /* @__PURE__ */ __name(function(i = {
		message: void 0,
		wrap: !1,
		width: void 0
	}, l) {
		this.sequenceItems.push(this.createLoop(i, l));
	}, "newLoop"),
	endLoop: /* @__PURE__ */ __name(function() {
		return this.sequenceItems.pop();
	}, "endLoop"),
	isLoopOverlap: /* @__PURE__ */ __name(function() {
		return this.sequenceItems.length ? this.sequenceItems[this.sequenceItems.length - 1].overlap : !1;
	}, "isLoopOverlap"),
	addSectionToLoop: /* @__PURE__ */ __name(function(i) {
		let l = this.sequenceItems.pop();
		l.sections = l.sections || [], l.sectionTitles = l.sectionTitles || [], l.sections.push({
			y: bounds.getVerticalPos(),
			height: 0
		}), l.sectionTitles.push(i), this.sequenceItems.push(l);
	}, "addSectionToLoop"),
	saveVerticalPos: /* @__PURE__ */ __name(function() {
		this.isLoopOverlap() && (this.savedVerticalPos = this.verticalPos);
	}, "saveVerticalPos"),
	resetVerticalPos: /* @__PURE__ */ __name(function() {
		this.isLoopOverlap() && (this.verticalPos = this.savedVerticalPos);
	}, "resetVerticalPos"),
	bumpVerticalPos: /* @__PURE__ */ __name(function(i) {
		this.verticalPos += i, this.data.stopy = common_default.getMax(this.data.stopy, this.verticalPos);
	}, "bumpVerticalPos"),
	getVerticalPos: /* @__PURE__ */ __name(function() {
		return this.verticalPos;
	}, "getVerticalPos"),
	getBounds: /* @__PURE__ */ __name(function() {
		return {
			bounds: this.data,
			models: this.models
		};
	}, "getBounds")
}, drawNote = /* @__PURE__ */ __name(async function(i, l) {
	bounds.bumpVerticalPos(conf.boxMargin), l.height = conf.boxMargin, l.starty = bounds.getVerticalPos();
	let u = getNoteRect();
	u.x = l.startx, u.y = l.starty, u.width = l.width || conf.width, u.class = "note";
	let d = i.append("g"), f = svgDraw_default.drawRect(d, u), p = getTextObj();
	p.x = l.startx, p.y = l.starty, p.width = u.width, p.dy = "1em", p.text = l.message, p.class = "noteText", p.fontFamily = conf.noteFontFamily, p.fontSize = conf.noteFontSize, p.fontWeight = conf.noteFontWeight, p.anchor = conf.noteAlign, p.textMargin = conf.noteMargin, p.valign = "center";
	let m = hasKatex(p.text) ? await drawKatex(d, p) : drawText(d, p), h = Math.round(m.map((i) => (i._groups || i)[0][0].getBBox().height).reduce((i, l) => i + l));
	f.attr("height", h + 2 * conf.noteMargin), l.height += h + 2 * conf.noteMargin, bounds.bumpVerticalPos(h + 2 * conf.noteMargin), l.stopy = l.starty + h + 2 * conf.noteMargin, l.stopx = l.startx + u.width, bounds.insert(l.startx, l.starty, l.stopx, l.stopy), bounds.models.addNote(l);
}, "drawNote"), messageFont = /* @__PURE__ */ __name((i) => ({
	fontFamily: i.messageFontFamily,
	fontSize: i.messageFontSize,
	fontWeight: i.messageFontWeight
}), "messageFont"), noteFont = /* @__PURE__ */ __name((i) => ({
	fontFamily: i.noteFontFamily,
	fontSize: i.noteFontSize,
	fontWeight: i.noteFontWeight
}), "noteFont"), actorFont = /* @__PURE__ */ __name((i) => ({
	fontFamily: i.actorFontFamily,
	fontSize: i.actorFontSize,
	fontWeight: i.actorFontWeight
}), "actorFont");
async function boundMessage(i, u) {
	bounds.bumpVerticalPos(10);
	let { startx: d, stopx: f, message: p } = u, m = common_default.splitBreaks(p).length, h = hasKatex(p), g = h ? await calculateMathMLDimensions(p, getConfig2()) : utils_default.calculateTextDimensions(p, messageFont(conf));
	if (!h) {
		let i = g.height / m;
		u.height += i, bounds.bumpVerticalPos(i);
	}
	let _, v = g.height - 10, y = g.width;
	if (d === f) {
		_ = bounds.getVerticalPos() + v, conf.rightAngles || (v += conf.boxMargin, _ = bounds.getVerticalPos() + v), v += 30;
		let i = common_default.getMax(y / 2, conf.width / 2);
		bounds.insert(d - i, bounds.getVerticalPos() - 10 + v, f + i, bounds.getVerticalPos() + 30 + v);
	} else v += conf.boxMargin, _ = bounds.getVerticalPos() + v, bounds.insert(d, _ - 10, f, _);
	return bounds.bumpVerticalPos(v), u.height += v, u.stopy = u.starty + u.height, bounds.insert(u.fromBounds, u.starty, u.toBounds, u.stopy), _;
}
__name(boundMessage, "boundMessage");
var drawMessage = /* @__PURE__ */ __name(async function(i, u, d, f) {
	let { startx: p, stopx: m, starty: h, message: g, type: v, sequenceIndex: y, sequenceVisible: b } = u, S = utils_default.calculateTextDimensions(g, messageFont(conf)), C = getTextObj();
	C.x = p, C.y = h + 10, C.width = m - p, C.class = "messageText", C.dy = "1em", C.text = g, C.fontFamily = conf.messageFontFamily, C.fontSize = conf.messageFontSize, C.fontWeight = conf.messageFontWeight, C.anchor = conf.messageAlign, C.valign = "center", C.textMargin = conf.wrapPadding, C.tspan = !1, hasKatex(C.text) ? await drawKatex(i, C, {
		startx: p,
		stopx: m,
		starty: d
	}) : drawText(i, C);
	let w = S.width, T;
	p === m ? T = conf.rightAngles ? i.append("path").attr("d", `M  ${p},${d} H ${p + common_default.getMax(conf.width / 2, w / 2)} V ${d + 25} H ${p}`) : i.append("path").attr("d", "M " + p + "," + d + " C " + (p + 60) + "," + (d - 10) + " " + (p + 60) + "," + (d + 30) + " " + p + "," + (d + 20)) : (T = i.append("line"), T.attr("x1", p), T.attr("y1", d), T.attr("x2", m), T.attr("y2", d)), v === f.db.LINETYPE.DOTTED || v === f.db.LINETYPE.DOTTED_CROSS || v === f.db.LINETYPE.DOTTED_POINT || v === f.db.LINETYPE.DOTTED_OPEN || v === f.db.LINETYPE.BIDIRECTIONAL_DOTTED ? (T.style("stroke-dasharray", "3, 3"), T.attr("class", "messageLine1")) : T.attr("class", "messageLine0");
	let E = "";
	conf.arrowMarkerAbsolute && (E = getUrl(!0)), T.attr("stroke-width", 2), T.attr("stroke", "none"), T.style("fill", "none"), (v === f.db.LINETYPE.SOLID || v === f.db.LINETYPE.DOTTED) && T.attr("marker-end", "url(" + E + "#arrowhead)"), (v === f.db.LINETYPE.BIDIRECTIONAL_SOLID || v === f.db.LINETYPE.BIDIRECTIONAL_DOTTED) && (T.attr("marker-start", "url(" + E + "#arrowhead)"), T.attr("marker-end", "url(" + E + "#arrowhead)")), (v === f.db.LINETYPE.SOLID_POINT || v === f.db.LINETYPE.DOTTED_POINT) && T.attr("marker-end", "url(" + E + "#filled-head)"), (v === f.db.LINETYPE.SOLID_CROSS || v === f.db.LINETYPE.DOTTED_CROSS) && T.attr("marker-end", "url(" + E + "#crosshead)"), (b || conf.showSequenceNumbers) && ((v === f.db.LINETYPE.BIDIRECTIONAL_SOLID || v === f.db.LINETYPE.BIDIRECTIONAL_DOTTED) && (p < m ? T.attr("x1", p + 12) : T.attr("x1", p + 6)), i.append("line").attr("x1", p).attr("y1", d).attr("x2", p).attr("y2", d).attr("stroke-width", 0).attr("marker-start", "url(" + E + "#sequencenumber)"), i.append("text").attr("x", p).attr("y", d + 4).attr("font-family", "sans-serif").attr("font-size", "12px").attr("text-anchor", "middle").attr("class", "sequenceNumber").text(y));
}, "drawMessage"), addActorRenderingData = /* @__PURE__ */ __name(function(i, l, u, d, f, p, m) {
	let h = 0, g = 0, _, v = 0;
	for (let i of d) {
		let d = l.get(i), p = d.box;
		_ && _ != p && (m || bounds.models.addBox(_), g += conf.boxMargin + _.margin), p && p != _ && (m || (p.x = h + g, p.y = f), g += p.margin), d.width = d.width || conf.width, d.height = common_default.getMax(d.height || conf.height, conf.height), d.margin = d.margin || conf.actorMargin, v = common_default.getMax(v, d.height), u.get(d.name) && (g += d.width / 2), d.x = h + g, d.starty = bounds.getVerticalPos(), bounds.insert(d.x, f, d.x + d.width, d.height), h += d.width + g, d.box && (d.box.width = h + p.margin - d.box.x), g = d.margin, _ = d.box, bounds.models.addActor(d);
	}
	_ && !m && bounds.models.addBox(_), bounds.bumpVerticalPos(v);
}, "addActorRenderingData"), drawActors = /* @__PURE__ */ __name(async function(i, l, u, d) {
	if (d) {
		let d = 0;
		bounds.bumpVerticalPos(conf.boxMargin * 2);
		for (let f of u) {
			let u = l.get(f);
			u.stopy ||= bounds.getVerticalPos();
			let p = await svgDraw_default.drawActor(i, u, conf, !0);
			d = common_default.getMax(d, p);
		}
		bounds.bumpVerticalPos(d + conf.boxMargin);
	} else for (let d of u) {
		let u = l.get(d);
		await svgDraw_default.drawActor(i, u, conf, !1);
	}
}, "drawActors"), drawActorsPopup = /* @__PURE__ */ __name(function(i, l, u, d) {
	let f = 0, p = 0;
	for (let m of u) {
		let u = l.get(m), h = getRequiredPopupWidth(u), g = svgDraw_default.drawPopup(i, u, h, conf, conf.forceMenus, d);
		g.height > f && (f = g.height), g.width + u.x > p && (p = g.width + u.x);
	}
	return {
		maxHeight: f,
		maxWidth: p
	};
}, "drawActorsPopup"), setConf = /* @__PURE__ */ __name(function(i) {
	assignWithDepth_default(conf, i), i.fontFamily && (conf.actorFontFamily = conf.noteFontFamily = conf.messageFontFamily = i.fontFamily), i.fontSize && (conf.actorFontSize = conf.noteFontSize = conf.messageFontSize = i.fontSize), i.fontWeight && (conf.actorFontWeight = conf.noteFontWeight = conf.messageFontWeight = i.fontWeight);
}, "setConf"), actorActivations = /* @__PURE__ */ __name(function(i) {
	return bounds.activations.filter(function(l) {
		return l.actor === i;
	});
}, "actorActivations"), activationBounds = /* @__PURE__ */ __name(function(i, l) {
	let u = l.get(i), d = actorActivations(i);
	return [d.reduce(function(i, l) {
		return common_default.getMin(i, l.startx);
	}, u.x + u.width / 2 - 1), d.reduce(function(i, l) {
		return common_default.getMax(i, l.stopx);
	}, u.x + u.width / 2 + 1)];
}, "activationBounds");
function adjustLoopHeightForWrap(i, u, d, p, m) {
	bounds.bumpVerticalPos(d);
	let h = p;
	if (u.id && u.message && i[u.id]) {
		let d = i[u.id].width, m = messageFont(conf);
		u.message = utils_default.wrapLabel(`[${u.message}]`, d - 2 * conf.wrapPadding, m), u.width = d, u.wrap = !0;
		let g = utils_default.calculateTextDimensions(u.message, m), _ = common_default.getMax(g.height, conf.labelBoxHeight);
		h = p + _, log.debug(`${_} - ${u.message}`);
	}
	m(u), bounds.bumpVerticalPos(h);
}
__name(adjustLoopHeightForWrap, "adjustLoopHeightForWrap");
function adjustCreatedDestroyedData(i, l, u, d, f, m, h) {
	function g(u, d) {
		u.x < f.get(i.from).x ? (bounds.insert(l.stopx - d, l.starty, l.startx, l.stopy + u.height / 2 + conf.noteMargin), l.stopx += d) : (bounds.insert(l.startx, l.starty, l.stopx + d, l.stopy + u.height / 2 + conf.noteMargin), l.stopx -= d);
	}
	__name(g, "receiverAdjustment");
	function _(u, d) {
		u.x < f.get(i.to).x ? (bounds.insert(l.startx - d, l.starty, l.stopx, l.stopy + u.height / 2 + conf.noteMargin), l.startx += d) : (bounds.insert(l.stopx, l.starty, l.startx + d, l.stopy + u.height / 2 + conf.noteMargin), l.startx -= d);
	}
	__name(_, "senderAdjustment");
	let v = [
		PARTICIPANT_TYPE.ACTOR,
		PARTICIPANT_TYPE.CONTROL,
		PARTICIPANT_TYPE.ENTITY,
		PARTICIPANT_TYPE.DATABASE
	];
	if (m.get(i.to) == d) {
		let l = f.get(i.to);
		g(l, v.includes(l.type) ? ACTOR_TYPE_WIDTH / 2 + 3 : l.width / 2 + 3), l.starty = u - l.height / 2, bounds.bumpVerticalPos(l.height / 2);
	} else if (h.get(i.from) == d) {
		let l = f.get(i.from);
		conf.mirrorActors && _(l, v.includes(l.type) ? ACTOR_TYPE_WIDTH / 2 : l.width / 2), l.stopy = u - l.height / 2, bounds.bumpVerticalPos(l.height / 2);
	} else if (h.get(i.to) == d) {
		let l = f.get(i.to);
		conf.mirrorActors && g(l, v.includes(l.type) ? ACTOR_TYPE_WIDTH / 2 + 3 : l.width / 2 + 3), l.stopy = u - l.height / 2, bounds.bumpVerticalPos(l.height / 2);
	}
}
__name(adjustCreatedDestroyedData, "adjustCreatedDestroyedData");
var draw = /* @__PURE__ */ __name(async function(i, l, u, d) {
	let { securityLevel: h, sequence: g } = getConfig2();
	conf = g;
	let _;
	h === "sandbox" && (_ = select_default("#i" + l));
	let v = select_default(h === "sandbox" ? _.nodes()[0].contentDocument.body : "body"), y = h === "sandbox" ? _.nodes()[0].contentDocument : document;
	bounds.init(), log.debug(d.db);
	let b = h === "sandbox" ? v.select(`[id="${l}"]`) : select_default(`[id="${l}"]`), x = d.db.getActors(), S = d.db.getCreatedActors(), C = d.db.getDestroyedActors(), w = d.db.getBoxes(), D = d.db.getActorKeys(), O = d.db.getMessages(), k = d.db.getDiagramTitle(), A = d.db.hasAtLeastOneBox(), j = d.db.hasAtLeastOneBoxWithTitle(), M = await getMaxMessageWidthPerActor(x, O, d);
	if (conf.height = await calculateActorMargins(x, M, w), svgDraw_default.insertComputerIcon(b), svgDraw_default.insertDatabaseIcon(b), svgDraw_default.insertClockIcon(b), A && (bounds.bumpVerticalPos(conf.boxMargin), j && bounds.bumpVerticalPos(w[0].textMaxHeight)), conf.hideUnusedParticipants === !0) {
		let i = /* @__PURE__ */ new Set();
		O.forEach((l) => {
			i.add(l.from), i.add(l.to);
		}), D = D.filter((l) => i.has(l));
	}
	addActorRenderingData(b, x, S, D, 0, O, !1);
	let N = await calculateLoopBounds(O, x, M, d);
	svgDraw_default.insertArrowHead(b), svgDraw_default.insertArrowCrossHead(b), svgDraw_default.insertArrowFilledHead(b), svgDraw_default.insertSequenceNumber(b);
	function P(i, l) {
		let u = bounds.endActivation(i);
		u.starty + 18 > l && (u.starty = l - 6, l += 12), svgDraw_default.drawActivation(b, u, l, conf, actorActivations(i.from).length), bounds.insert(u.startx, l - 10, u.stopx, l);
	}
	__name(P, "activeEnd");
	let F = 1, I = 1, L = [], R = [], z = 0;
	for (let i of O) {
		let l, u, p;
		switch (i.type) {
			case d.db.LINETYPE.NOTE:
				bounds.resetVerticalPos(), u = i.noteModel, await drawNote(b, u);
				break;
			case d.db.LINETYPE.ACTIVE_START:
				bounds.newActivation(i, b, x);
				break;
			case d.db.LINETYPE.ACTIVE_END:
				P(i, bounds.getVerticalPos());
				break;
			case d.db.LINETYPE.LOOP_START:
				adjustLoopHeightForWrap(N, i, conf.boxMargin, conf.boxMargin + conf.boxTextMargin, (i) => bounds.newLoop(i));
				break;
			case d.db.LINETYPE.LOOP_END:
				l = bounds.endLoop(), await svgDraw_default.drawLoop(b, l, "loop", conf), bounds.bumpVerticalPos(l.stopy - bounds.getVerticalPos()), bounds.models.addLoop(l);
				break;
			case d.db.LINETYPE.RECT_START:
				adjustLoopHeightForWrap(N, i, conf.boxMargin, conf.boxMargin, (i) => bounds.newLoop(void 0, i.message));
				break;
			case d.db.LINETYPE.RECT_END:
				l = bounds.endLoop(), R.push(l), bounds.models.addLoop(l), bounds.bumpVerticalPos(l.stopy - bounds.getVerticalPos());
				break;
			case d.db.LINETYPE.OPT_START:
				adjustLoopHeightForWrap(N, i, conf.boxMargin, conf.boxMargin + conf.boxTextMargin, (i) => bounds.newLoop(i));
				break;
			case d.db.LINETYPE.OPT_END:
				l = bounds.endLoop(), await svgDraw_default.drawLoop(b, l, "opt", conf), bounds.bumpVerticalPos(l.stopy - bounds.getVerticalPos()), bounds.models.addLoop(l);
				break;
			case d.db.LINETYPE.ALT_START:
				adjustLoopHeightForWrap(N, i, conf.boxMargin, conf.boxMargin + conf.boxTextMargin, (i) => bounds.newLoop(i));
				break;
			case d.db.LINETYPE.ALT_ELSE:
				adjustLoopHeightForWrap(N, i, conf.boxMargin + conf.boxTextMargin, conf.boxMargin, (i) => bounds.addSectionToLoop(i));
				break;
			case d.db.LINETYPE.ALT_END:
				l = bounds.endLoop(), await svgDraw_default.drawLoop(b, l, "alt", conf), bounds.bumpVerticalPos(l.stopy - bounds.getVerticalPos()), bounds.models.addLoop(l);
				break;
			case d.db.LINETYPE.PAR_START:
			case d.db.LINETYPE.PAR_OVER_START:
				adjustLoopHeightForWrap(N, i, conf.boxMargin, conf.boxMargin + conf.boxTextMargin, (i) => bounds.newLoop(i)), bounds.saveVerticalPos();
				break;
			case d.db.LINETYPE.PAR_AND:
				adjustLoopHeightForWrap(N, i, conf.boxMargin + conf.boxTextMargin, conf.boxMargin, (i) => bounds.addSectionToLoop(i));
				break;
			case d.db.LINETYPE.PAR_END:
				l = bounds.endLoop(), await svgDraw_default.drawLoop(b, l, "par", conf), bounds.bumpVerticalPos(l.stopy - bounds.getVerticalPos()), bounds.models.addLoop(l);
				break;
			case d.db.LINETYPE.AUTONUMBER:
				F = i.message.start || F, I = i.message.step || I, i.message.visible ? d.db.enableSequenceNumbers() : d.db.disableSequenceNumbers();
				break;
			case d.db.LINETYPE.CRITICAL_START:
				adjustLoopHeightForWrap(N, i, conf.boxMargin, conf.boxMargin + conf.boxTextMargin, (i) => bounds.newLoop(i));
				break;
			case d.db.LINETYPE.CRITICAL_OPTION:
				adjustLoopHeightForWrap(N, i, conf.boxMargin + conf.boxTextMargin, conf.boxMargin, (i) => bounds.addSectionToLoop(i));
				break;
			case d.db.LINETYPE.CRITICAL_END:
				l = bounds.endLoop(), await svgDraw_default.drawLoop(b, l, "critical", conf), bounds.bumpVerticalPos(l.stopy - bounds.getVerticalPos()), bounds.models.addLoop(l);
				break;
			case d.db.LINETYPE.BREAK_START:
				adjustLoopHeightForWrap(N, i, conf.boxMargin, conf.boxMargin + conf.boxTextMargin, (i) => bounds.newLoop(i));
				break;
			case d.db.LINETYPE.BREAK_END:
				l = bounds.endLoop(), await svgDraw_default.drawLoop(b, l, "break", conf), bounds.bumpVerticalPos(l.stopy - bounds.getVerticalPos()), bounds.models.addLoop(l);
				break;
			default: try {
				p = i.msgModel, p.starty = bounds.getVerticalPos(), p.sequenceIndex = F, p.sequenceVisible = d.db.showSequenceNumbers();
				let l = await boundMessage(b, p);
				adjustCreatedDestroyedData(i, p, l, z, x, S, C), L.push({
					messageModel: p,
					lineStartY: l
				}), bounds.models.addMessage(p);
			} catch (i) {
				log.error("error while drawing message", i);
			}
		}
		[
			d.db.LINETYPE.SOLID_OPEN,
			d.db.LINETYPE.DOTTED_OPEN,
			d.db.LINETYPE.SOLID,
			d.db.LINETYPE.DOTTED,
			d.db.LINETYPE.SOLID_CROSS,
			d.db.LINETYPE.DOTTED_CROSS,
			d.db.LINETYPE.SOLID_POINT,
			d.db.LINETYPE.DOTTED_POINT,
			d.db.LINETYPE.BIDIRECTIONAL_SOLID,
			d.db.LINETYPE.BIDIRECTIONAL_DOTTED
		].includes(i.type) && (F += I), z++;
	}
	log.debug("createdActors", S), log.debug("destroyedActors", C), await drawActors(b, x, D, !1);
	for (let i of L) await drawMessage(b, i.messageModel, i.lineStartY, d);
	conf.mirrorActors && await drawActors(b, x, D, !0), R.forEach((i) => svgDraw_default.drawBackgroundRect(b, i)), fixLifeLineHeights(b, x, D, conf);
	for (let i of bounds.models.boxes) {
		i.height = bounds.getVerticalPos() - i.y, bounds.insert(i.x, i.y, i.x + i.width, i.height);
		let l = conf.boxMargin * 2;
		i.startx = i.x - l, i.starty = i.y - l * .25, i.stopx = i.startx + i.width + 2 * l, i.stopy = i.starty + i.height + l * .75, i.stroke = "rgb(0,0,0, 0.5)", svgDraw_default.drawBox(b, i, conf);
	}
	A && bounds.bumpVerticalPos(conf.boxMargin);
	let B = drawActorsPopup(b, x, D, y), { bounds: V } = bounds.getBounds();
	V.startx === void 0 && (V.startx = 0), V.starty === void 0 && (V.starty = 0), V.stopx === void 0 && (V.stopx = 0), V.stopy === void 0 && (V.stopy = 0);
	let H = V.stopy - V.starty;
	H < B.maxHeight && (H = B.maxHeight);
	let U = H + 2 * conf.diagramMarginY;
	conf.mirrorActors && (U = U - conf.boxMargin + conf.bottomMarginAdj);
	let W = V.stopx - V.startx;
	W < B.maxWidth && (W = B.maxWidth);
	let G = W + 2 * conf.diagramMarginX;
	k && b.append("text").text(k).attr("x", (V.stopx - V.startx) / 2 - 2 * conf.diagramMarginX).attr("y", -25), configureSvgSize(b, U, G, conf.useMaxWidth);
	let K = k ? 40 : 0;
	b.attr("viewBox", V.startx - conf.diagramMarginX + " -" + (conf.diagramMarginY + K) + " " + G + " " + (U + K)), log.debug("models:", bounds.models);
}, "draw");
async function getMaxMessageWidthPerActor(i, u, d) {
	let p = {};
	for (let f of u) if (i.get(f.to) && i.get(f.from)) {
		let u = i.get(f.to);
		if (f.placement === d.db.PLACEMENT.LEFTOF && !u.prevActor || f.placement === d.db.PLACEMENT.RIGHTOF && !u.nextActor) continue;
		let m = f.placement !== void 0, h = !m, g = m ? noteFont(conf) : messageFont(conf), _ = f.wrap ? utils_default.wrapLabel(f.message, conf.width - 2 * conf.wrapPadding, g) : f.message, v = (hasKatex(_) ? await calculateMathMLDimensions(f.message, getConfig2()) : utils_default.calculateTextDimensions(_, g)).width + 2 * conf.wrapPadding;
		h && f.from === u.nextActor ? p[f.to] = common_default.getMax(p[f.to] || 0, v) : h && f.from === u.prevActor ? p[f.from] = common_default.getMax(p[f.from] || 0, v) : h && f.from === f.to ? (p[f.from] = common_default.getMax(p[f.from] || 0, v / 2), p[f.to] = common_default.getMax(p[f.to] || 0, v / 2)) : f.placement === d.db.PLACEMENT.RIGHTOF ? p[f.from] = common_default.getMax(p[f.from] || 0, v) : f.placement === d.db.PLACEMENT.LEFTOF ? p[u.prevActor] = common_default.getMax(p[u.prevActor] || 0, v) : f.placement === d.db.PLACEMENT.OVER && (u.prevActor && (p[u.prevActor] = common_default.getMax(p[u.prevActor] || 0, v / 2)), u.nextActor && (p[f.from] = common_default.getMax(p[f.from] || 0, v / 2)));
	}
	return log.debug("maxMessageWidthPerActor:", p), p;
}
__name(getMaxMessageWidthPerActor, "getMaxMessageWidthPerActor");
var getRequiredPopupWidth = /* @__PURE__ */ __name(function(i) {
	let u = 0, d = actorFont(conf);
	for (let f in i.links) {
		let i = utils_default.calculateTextDimensions(f, d).width + 2 * conf.wrapPadding + 2 * conf.boxMargin;
		u < i && (u = i);
	}
	return u;
}, "getRequiredPopupWidth");
async function calculateActorMargins(i, u, d) {
	let f = 0;
	for (let u of i.keys()) {
		let d = i.get(u);
		d.wrap && (d.description = utils_default.wrapLabel(d.description, conf.width - 2 * conf.wrapPadding, actorFont(conf)));
		let p = hasKatex(d.description) ? await calculateMathMLDimensions(d.description, getConfig2()) : utils_default.calculateTextDimensions(d.description, actorFont(conf));
		d.width = d.wrap ? conf.width : common_default.getMax(conf.width, p.width + 2 * conf.wrapPadding), d.height = d.wrap ? common_default.getMax(p.height, conf.height) : conf.height, f = common_default.getMax(f, d.height);
	}
	for (let l in u) {
		let d = i.get(l);
		if (!d) continue;
		let f = i.get(d.nextActor);
		if (!f) {
			let i = u[l] + conf.actorMargin - d.width / 2;
			d.margin = common_default.getMax(i, conf.actorMargin);
			continue;
		}
		let p = u[l] + conf.actorMargin - d.width / 2 - f.width / 2;
		d.margin = common_default.getMax(p, conf.actorMargin);
	}
	let p = 0;
	return d.forEach((u) => {
		let d = messageFont(conf), f = u.actorKeys.reduce((l, u) => l += i.get(u).width + (i.get(u).margin || 0), 0), m = conf.boxMargin * 8;
		f += m, f -= 2 * conf.boxTextMargin, u.wrap && (u.name = utils_default.wrapLabel(u.name, f - 2 * conf.wrapPadding, d));
		let h = utils_default.calculateTextDimensions(u.name, d);
		p = common_default.getMax(h.height, p);
		let g = common_default.getMax(f, h.width + 2 * conf.wrapPadding);
		if (u.margin = conf.boxTextMargin, f < g) {
			let i = (g - f) / 2;
			u.margin += i;
		}
	}), d.forEach((i) => i.textMaxHeight = p), common_default.getMax(f, conf.height);
}
__name(calculateActorMargins, "calculateActorMargins");
var buildNoteModel = /* @__PURE__ */ __name(async function(i, u, d) {
	let p = u.get(i.from), m = u.get(i.to), h = p.x, g = m.x, _ = i.wrap && i.message, v = hasKatex(i.message) ? await calculateMathMLDimensions(i.message, getConfig2()) : utils_default.calculateTextDimensions(_ ? utils_default.wrapLabel(i.message, conf.width, noteFont(conf)) : i.message, noteFont(conf)), y = {
		width: _ ? conf.width : common_default.getMax(conf.width, v.width + 2 * conf.noteMargin),
		height: 0,
		startx: p.x,
		stopx: 0,
		starty: 0,
		stopy: 0,
		message: i.message
	};
	return i.placement === d.db.PLACEMENT.RIGHTOF ? (y.width = _ ? common_default.getMax(conf.width, v.width) : common_default.getMax(p.width / 2 + m.width / 2, v.width + 2 * conf.noteMargin), y.startx = h + (p.width + conf.actorMargin) / 2) : i.placement === d.db.PLACEMENT.LEFTOF ? (y.width = _ ? common_default.getMax(conf.width, v.width + 2 * conf.noteMargin) : common_default.getMax(p.width / 2 + m.width / 2, v.width + 2 * conf.noteMargin), y.startx = h - y.width + (p.width - conf.actorMargin) / 2) : i.to === i.from ? (v = utils_default.calculateTextDimensions(_ ? utils_default.wrapLabel(i.message, common_default.getMax(conf.width, p.width), noteFont(conf)) : i.message, noteFont(conf)), y.width = _ ? common_default.getMax(conf.width, p.width) : common_default.getMax(p.width, conf.width, v.width + 2 * conf.noteMargin), y.startx = h + (p.width - y.width) / 2) : (y.width = Math.abs(h + p.width / 2 - (g + m.width / 2)) + conf.actorMargin, y.startx = h < g ? h + p.width / 2 - conf.actorMargin / 2 : g + m.width / 2 - conf.actorMargin / 2), _ && (y.message = utils_default.wrapLabel(i.message, y.width - 2 * conf.wrapPadding, noteFont(conf))), log.debug(`NM:[${y.startx},${y.stopx},${y.starty},${y.stopy}:${y.width},${y.height}=${i.message}]`), y;
}, "buildNoteModel"), buildMessageModel = /* @__PURE__ */ __name(function(i, u, d) {
	if (![
		d.db.LINETYPE.SOLID_OPEN,
		d.db.LINETYPE.DOTTED_OPEN,
		d.db.LINETYPE.SOLID,
		d.db.LINETYPE.DOTTED,
		d.db.LINETYPE.SOLID_CROSS,
		d.db.LINETYPE.DOTTED_CROSS,
		d.db.LINETYPE.SOLID_POINT,
		d.db.LINETYPE.DOTTED_POINT,
		d.db.LINETYPE.BIDIRECTIONAL_SOLID,
		d.db.LINETYPE.BIDIRECTIONAL_DOTTED
	].includes(i.type)) return {};
	let [f, m] = activationBounds(i.from, u), [h, g] = activationBounds(i.to, u), _ = f <= h, v = _ ? m : f, y = _ ? h : g, b = Math.abs(h - g) > 2, x = /* @__PURE__ */ __name((i) => _ ? -i : i, "adjustValue");
	i.from === i.to ? y = v : (i.activate && !b && (y += x(conf.activationWidth / 2 - 1)), [d.db.LINETYPE.SOLID_OPEN, d.db.LINETYPE.DOTTED_OPEN].includes(i.type) || (y += x(3)), [d.db.LINETYPE.BIDIRECTIONAL_SOLID, d.db.LINETYPE.BIDIRECTIONAL_DOTTED].includes(i.type) && (v -= x(3)));
	let S = [
		f,
		m,
		h,
		g
	], C = Math.abs(v - y);
	i.wrap && i.message && (i.message = utils_default.wrapLabel(i.message, common_default.getMax(C + 2 * conf.wrapPadding, conf.width), messageFont(conf)));
	let w = utils_default.calculateTextDimensions(i.message, messageFont(conf));
	return {
		width: common_default.getMax(i.wrap ? 0 : w.width + 2 * conf.wrapPadding, C + 2 * conf.wrapPadding, conf.width),
		height: 0,
		startx: v,
		stopx: y,
		starty: 0,
		stopy: 0,
		message: i.message,
		type: i.type,
		wrap: i.wrap,
		fromBounds: Math.min.apply(null, S),
		toBounds: Math.max.apply(null, S)
	};
}, "buildMessageModel"), calculateLoopBounds = /* @__PURE__ */ __name(async function(i, l, u, d) {
	let p = {}, m = [], h, g, _;
	for (let u of i) {
		switch (u.type) {
			case d.db.LINETYPE.LOOP_START:
			case d.db.LINETYPE.ALT_START:
			case d.db.LINETYPE.OPT_START:
			case d.db.LINETYPE.PAR_START:
			case d.db.LINETYPE.PAR_OVER_START:
			case d.db.LINETYPE.CRITICAL_START:
			case d.db.LINETYPE.BREAK_START:
				m.push({
					id: u.id,
					msg: u.message,
					from: 2 ** 53 - 1,
					to: -(2 ** 53 - 1),
					width: 0
				});
				break;
			case d.db.LINETYPE.ALT_ELSE:
			case d.db.LINETYPE.PAR_AND:
			case d.db.LINETYPE.CRITICAL_OPTION:
				u.message && (h = m.pop(), p[h.id] = h, p[u.id] = h, m.push(h));
				break;
			case d.db.LINETYPE.LOOP_END:
			case d.db.LINETYPE.ALT_END:
			case d.db.LINETYPE.OPT_END:
			case d.db.LINETYPE.PAR_END:
			case d.db.LINETYPE.CRITICAL_END:
			case d.db.LINETYPE.BREAK_END:
				h = m.pop(), p[h.id] = h;
				break;
			case d.db.LINETYPE.ACTIVE_START:
				{
					let i = l.get(u.from ? u.from : u.to.actor), d = actorActivations(u.from ? u.from : u.to.actor).length, f = i.x + i.width / 2 + (d - 1) * conf.activationWidth / 2, p = {
						startx: f,
						stopx: f + conf.activationWidth,
						actor: u.from,
						enabled: !0
					};
					bounds.activations.push(p);
				}
				break;
			case d.db.LINETYPE.ACTIVE_END:
				{
					let i = bounds.activations.map((i) => i.actor).lastIndexOf(u.from);
					bounds.activations.splice(i, 1).splice(0, 1);
				}
				break;
		}
		u.placement === void 0 ? (_ = buildMessageModel(u, l, d), u.msgModel = _, _.startx && _.stopx && m.length > 0 && m.forEach((i) => {
			if (h = i, _.startx === _.stopx) {
				let i = l.get(u.from), d = l.get(u.to);
				h.from = common_default.getMin(i.x - _.width / 2, i.x - i.width / 2, h.from), h.to = common_default.getMax(d.x + _.width / 2, d.x + i.width / 2, h.to), h.width = common_default.getMax(h.width, Math.abs(h.to - h.from)) - conf.labelBoxWidth;
			} else h.from = common_default.getMin(_.startx, h.from), h.to = common_default.getMax(_.stopx, h.to), h.width = common_default.getMax(h.width, _.width) - conf.labelBoxWidth;
		})) : (g = await buildNoteModel(u, l, d), u.noteModel = g, m.forEach((i) => {
			h = i, h.from = common_default.getMin(h.from, g.startx), h.to = common_default.getMax(h.to, g.startx + g.width), h.width = common_default.getMax(h.width, Math.abs(h.from - h.to)) - conf.labelBoxWidth;
		}));
	}
	return bounds.activations = [], log.debug("Loop type widths:", p), p;
}, "calculateLoopBounds"), diagram = {
	parser: sequenceDiagram_default,
	get db() {
		return new SequenceDB();
	},
	renderer: {
		bounds,
		drawActors,
		drawActorsPopup,
		setConf,
		draw
	},
	styles: styles_default,
	init: /* @__PURE__ */ __name((i) => {
		i.sequence ||= {}, i.wrap && (i.sequence.wrap = i.wrap, setConfig2({ sequence: { wrap: i.wrap } }));
	}, "init")
};
export { diagram };

//# sourceMappingURL=sequenceDiagram-WL72ISMW-BJSz4ME3.js.map