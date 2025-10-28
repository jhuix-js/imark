import { s as __toESM } from "./chunk-DgPTj83v.js";
import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { _ as wrapLabel, n as calculateTextHeight, r as calculateTextWidth } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, I as sanitizeText, _ as getAccDescription, b as getConfig2, c as configureSvgSize, r as assignWithDepth_default, s as common_default, v as getAccTitle, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as require_dist } from "./dist-CUheKjZU.js";
import { i as drawRect, o as getNoteRect } from "./chunk-TZMSLE5B-DucqvWzX.js";
var import_dist = /* @__PURE__ */ __toESM(require_dist(), 1), parser = (function() {
	var e = /* @__PURE__ */ __name(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [1, 24], n = [1, 25], r = [1, 26], i = [1, 27], o = [1, 28], s = [1, 63], l = [1, 64], u = [1, 65], d = [1, 66], f = [1, 67], p = [1, 68], m = [1, 69], h = [1, 29], g = [1, 30], _ = [1, 31], v = [1, 32], y = [1, 33], b = [1, 34], x = [1, 35], S = [1, 36], C = [1, 37], w = [1, 38], T = [1, 39], E = [1, 40], D = [1, 41], O = [1, 42], k = [1, 43], A = [1, 44], j = [1, 45], M = [1, 46], N = [1, 47], P = [1, 48], F = [1, 50], I = [1, 51], L = [1, 52], R = [1, 53], z = [1, 54], B = [1, 55], V = [1, 56], H = [1, 57], U = [1, 58], W = [1, 59], G = [1, 60], K = [14, 42], Le = [
		14,
		34,
		36,
		37,
		38,
		39,
		40,
		41,
		42,
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
		69,
		70,
		71,
		72,
		73,
		74
	], q = [
		12,
		14,
		34,
		36,
		37,
		38,
		39,
		40,
		41,
		42,
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
		69,
		70,
		71,
		72,
		73,
		74
	], J = [1, 82], Y = [1, 83], X = [1, 84], Z = [1, 85], Q = [
		12,
		14,
		42
	], Re = [
		12,
		14,
		33,
		42
	], ze = [
		12,
		14,
		33,
		42,
		76,
		77,
		79,
		80
	], $ = [12, 33], Be = [
		34,
		36,
		37,
		38,
		39,
		40,
		41,
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
		69,
		70,
		71,
		72,
		73,
		74
	], Ve = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mermaidDoc: 4,
			direction: 5,
			direction_tb: 6,
			direction_bt: 7,
			direction_rl: 8,
			direction_lr: 9,
			graphConfig: 10,
			C4_CONTEXT: 11,
			NEWLINE: 12,
			statements: 13,
			EOF: 14,
			C4_CONTAINER: 15,
			C4_COMPONENT: 16,
			C4_DYNAMIC: 17,
			C4_DEPLOYMENT: 18,
			otherStatements: 19,
			diagramStatements: 20,
			otherStatement: 21,
			title: 22,
			accDescription: 23,
			acc_title: 24,
			acc_title_value: 25,
			acc_descr: 26,
			acc_descr_value: 27,
			acc_descr_multiline_value: 28,
			boundaryStatement: 29,
			boundaryStartStatement: 30,
			boundaryStopStatement: 31,
			boundaryStart: 32,
			LBRACE: 33,
			ENTERPRISE_BOUNDARY: 34,
			attributes: 35,
			SYSTEM_BOUNDARY: 36,
			BOUNDARY: 37,
			CONTAINER_BOUNDARY: 38,
			NODE: 39,
			NODE_L: 40,
			NODE_R: 41,
			RBRACE: 42,
			diagramStatement: 43,
			PERSON: 44,
			PERSON_EXT: 45,
			SYSTEM: 46,
			SYSTEM_DB: 47,
			SYSTEM_QUEUE: 48,
			SYSTEM_EXT: 49,
			SYSTEM_EXT_DB: 50,
			SYSTEM_EXT_QUEUE: 51,
			CONTAINER: 52,
			CONTAINER_DB: 53,
			CONTAINER_QUEUE: 54,
			CONTAINER_EXT: 55,
			CONTAINER_EXT_DB: 56,
			CONTAINER_EXT_QUEUE: 57,
			COMPONENT: 58,
			COMPONENT_DB: 59,
			COMPONENT_QUEUE: 60,
			COMPONENT_EXT: 61,
			COMPONENT_EXT_DB: 62,
			COMPONENT_EXT_QUEUE: 63,
			REL: 64,
			BIREL: 65,
			REL_U: 66,
			REL_D: 67,
			REL_L: 68,
			REL_R: 69,
			REL_B: 70,
			REL_INDEX: 71,
			UPDATE_EL_STYLE: 72,
			UPDATE_REL_STYLE: 73,
			UPDATE_LAYOUT_CONFIG: 74,
			attribute: 75,
			STR: 76,
			STR_KEY: 77,
			STR_VALUE: 78,
			ATTRIBUTE: 79,
			ATTRIBUTE_EMPTY: 80,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "direction_tb",
			7: "direction_bt",
			8: "direction_rl",
			9: "direction_lr",
			11: "C4_CONTEXT",
			12: "NEWLINE",
			14: "EOF",
			15: "C4_CONTAINER",
			16: "C4_COMPONENT",
			17: "C4_DYNAMIC",
			18: "C4_DEPLOYMENT",
			22: "title",
			23: "accDescription",
			24: "acc_title",
			25: "acc_title_value",
			26: "acc_descr",
			27: "acc_descr_value",
			28: "acc_descr_multiline_value",
			33: "LBRACE",
			34: "ENTERPRISE_BOUNDARY",
			36: "SYSTEM_BOUNDARY",
			37: "BOUNDARY",
			38: "CONTAINER_BOUNDARY",
			39: "NODE",
			40: "NODE_L",
			41: "NODE_R",
			42: "RBRACE",
			44: "PERSON",
			45: "PERSON_EXT",
			46: "SYSTEM",
			47: "SYSTEM_DB",
			48: "SYSTEM_QUEUE",
			49: "SYSTEM_EXT",
			50: "SYSTEM_EXT_DB",
			51: "SYSTEM_EXT_QUEUE",
			52: "CONTAINER",
			53: "CONTAINER_DB",
			54: "CONTAINER_QUEUE",
			55: "CONTAINER_EXT",
			56: "CONTAINER_EXT_DB",
			57: "CONTAINER_EXT_QUEUE",
			58: "COMPONENT",
			59: "COMPONENT_DB",
			60: "COMPONENT_QUEUE",
			61: "COMPONENT_EXT",
			62: "COMPONENT_EXT_DB",
			63: "COMPONENT_EXT_QUEUE",
			64: "REL",
			65: "BIREL",
			66: "REL_U",
			67: "REL_D",
			68: "REL_L",
			69: "REL_R",
			70: "REL_B",
			71: "REL_INDEX",
			72: "UPDATE_EL_STYLE",
			73: "UPDATE_REL_STYLE",
			74: "UPDATE_LAYOUT_CONFIG",
			76: "STR",
			77: "STR_KEY",
			78: "STR_VALUE",
			79: "ATTRIBUTE",
			80: "ATTRIBUTE_EMPTY"
		},
		productions_: [
			0,
			[3, 1],
			[3, 1],
			[5, 1],
			[5, 1],
			[5, 1],
			[5, 1],
			[4, 1],
			[10, 4],
			[10, 4],
			[10, 4],
			[10, 4],
			[10, 4],
			[13, 1],
			[13, 1],
			[13, 2],
			[19, 1],
			[19, 2],
			[19, 3],
			[21, 1],
			[21, 1],
			[21, 2],
			[21, 2],
			[21, 1],
			[29, 3],
			[30, 3],
			[30, 3],
			[30, 4],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[32, 2],
			[31, 1],
			[20, 1],
			[20, 2],
			[20, 3],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 1],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[43, 2],
			[35, 1],
			[35, 2],
			[75, 1],
			[75, 2],
			[75, 1],
			[75, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 3:
					r.setDirection("TB");
					break;
				case 4:
					r.setDirection("BT");
					break;
				case 5:
					r.setDirection("RL");
					break;
				case 6:
					r.setDirection("LR");
					break;
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
					r.setC4Type(a[s - 3]);
					break;
				case 19:
					r.setTitle(a[s].substring(6)), this.$ = a[s].substring(6);
					break;
				case 20:
					r.setAccDescription(a[s].substring(15)), this.$ = a[s].substring(15);
					break;
				case 21:
					this.$ = a[s].trim(), r.setTitle(this.$);
					break;
				case 22:
				case 23:
					this.$ = a[s].trim(), r.setAccDescription(this.$);
					break;
				case 28:
					a[s].splice(2, 0, "ENTERPRISE"), r.addPersonOrSystemBoundary(...a[s]), this.$ = a[s];
					break;
				case 29:
					a[s].splice(2, 0, "SYSTEM"), r.addPersonOrSystemBoundary(...a[s]), this.$ = a[s];
					break;
				case 30:
					r.addPersonOrSystemBoundary(...a[s]), this.$ = a[s];
					break;
				case 31:
					a[s].splice(2, 0, "CONTAINER"), r.addContainerBoundary(...a[s]), this.$ = a[s];
					break;
				case 32:
					r.addDeploymentNode("node", ...a[s]), this.$ = a[s];
					break;
				case 33:
					r.addDeploymentNode("nodeL", ...a[s]), this.$ = a[s];
					break;
				case 34:
					r.addDeploymentNode("nodeR", ...a[s]), this.$ = a[s];
					break;
				case 35:
					r.popBoundaryParseStack();
					break;
				case 39:
					r.addPersonOrSystem("person", ...a[s]), this.$ = a[s];
					break;
				case 40:
					r.addPersonOrSystem("external_person", ...a[s]), this.$ = a[s];
					break;
				case 41:
					r.addPersonOrSystem("system", ...a[s]), this.$ = a[s];
					break;
				case 42:
					r.addPersonOrSystem("system_db", ...a[s]), this.$ = a[s];
					break;
				case 43:
					r.addPersonOrSystem("system_queue", ...a[s]), this.$ = a[s];
					break;
				case 44:
					r.addPersonOrSystem("external_system", ...a[s]), this.$ = a[s];
					break;
				case 45:
					r.addPersonOrSystem("external_system_db", ...a[s]), this.$ = a[s];
					break;
				case 46:
					r.addPersonOrSystem("external_system_queue", ...a[s]), this.$ = a[s];
					break;
				case 47:
					r.addContainer("container", ...a[s]), this.$ = a[s];
					break;
				case 48:
					r.addContainer("container_db", ...a[s]), this.$ = a[s];
					break;
				case 49:
					r.addContainer("container_queue", ...a[s]), this.$ = a[s];
					break;
				case 50:
					r.addContainer("external_container", ...a[s]), this.$ = a[s];
					break;
				case 51:
					r.addContainer("external_container_db", ...a[s]), this.$ = a[s];
					break;
				case 52:
					r.addContainer("external_container_queue", ...a[s]), this.$ = a[s];
					break;
				case 53:
					r.addComponent("component", ...a[s]), this.$ = a[s];
					break;
				case 54:
					r.addComponent("component_db", ...a[s]), this.$ = a[s];
					break;
				case 55:
					r.addComponent("component_queue", ...a[s]), this.$ = a[s];
					break;
				case 56:
					r.addComponent("external_component", ...a[s]), this.$ = a[s];
					break;
				case 57:
					r.addComponent("external_component_db", ...a[s]), this.$ = a[s];
					break;
				case 58:
					r.addComponent("external_component_queue", ...a[s]), this.$ = a[s];
					break;
				case 60:
					r.addRel("rel", ...a[s]), this.$ = a[s];
					break;
				case 61:
					r.addRel("birel", ...a[s]), this.$ = a[s];
					break;
				case 62:
					r.addRel("rel_u", ...a[s]), this.$ = a[s];
					break;
				case 63:
					r.addRel("rel_d", ...a[s]), this.$ = a[s];
					break;
				case 64:
					r.addRel("rel_l", ...a[s]), this.$ = a[s];
					break;
				case 65:
					r.addRel("rel_r", ...a[s]), this.$ = a[s];
					break;
				case 66:
					r.addRel("rel_b", ...a[s]), this.$ = a[s];
					break;
				case 67:
					a[s].splice(0, 1), r.addRel("rel", ...a[s]), this.$ = a[s];
					break;
				case 68:
					r.updateElStyle("update_el_style", ...a[s]), this.$ = a[s];
					break;
				case 69:
					r.updateRelStyle("update_rel_style", ...a[s]), this.$ = a[s];
					break;
				case 70:
					r.updateLayoutConfig("update_layout_config", ...a[s]), this.$ = a[s];
					break;
				case 71:
					this.$ = [a[s]];
					break;
				case 72:
					a[s].unshift(a[s - 1]), this.$ = a[s];
					break;
				case 73:
				case 75:
					this.$ = a[s].trim();
					break;
				case 74:
					let e = {};
					e[a[s - 1].trim()] = a[s].trim(), this.$ = e;
					break;
				case 76:
					this.$ = "";
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: [1, 5],
				7: [1, 6],
				8: [1, 7],
				9: [1, 8],
				10: 4,
				11: [1, 9],
				15: [1, 10],
				16: [1, 11],
				17: [1, 12],
				18: [1, 13]
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{ 1: [2, 2] },
			{ 1: [2, 7] },
			{ 1: [2, 3] },
			{ 1: [2, 4] },
			{ 1: [2, 5] },
			{ 1: [2, 6] },
			{ 12: [1, 14] },
			{ 12: [1, 15] },
			{ 12: [1, 16] },
			{ 12: [1, 17] },
			{ 12: [1, 18] },
			{
				13: 19,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: n,
				24: r,
				26: i,
				28: o,
				29: 49,
				30: 61,
				32: 62,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				43: 23,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			},
			{
				13: 70,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: n,
				24: r,
				26: i,
				28: o,
				29: 49,
				30: 61,
				32: 62,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				43: 23,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			},
			{
				13: 71,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: n,
				24: r,
				26: i,
				28: o,
				29: 49,
				30: 61,
				32: 62,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				43: 23,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			},
			{
				13: 72,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: n,
				24: r,
				26: i,
				28: o,
				29: 49,
				30: 61,
				32: 62,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				43: 23,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			},
			{
				13: 73,
				19: 20,
				20: 21,
				21: 22,
				22: t,
				23: n,
				24: r,
				26: i,
				28: o,
				29: 49,
				30: 61,
				32: 62,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				43: 23,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			},
			{ 14: [1, 74] },
			e(K, [2, 13], {
				43: 23,
				29: 49,
				30: 61,
				32: 62,
				20: 75,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			}),
			e(K, [2, 14]),
			e(Le, [2, 16], { 12: [1, 76] }),
			e(K, [2, 36], { 12: [1, 77] }),
			e(q, [2, 19]),
			e(q, [2, 20]),
			{ 25: [1, 78] },
			{ 27: [1, 79] },
			e(q, [2, 23]),
			{
				35: 80,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 86,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 87,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 88,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 89,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 90,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 91,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 92,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 93,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 94,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 95,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 96,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 97,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 98,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 99,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 100,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 101,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 102,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 103,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 104,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			e(Q, [2, 59]),
			{
				35: 105,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 106,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 107,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 108,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 109,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 110,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 111,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 112,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 113,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 114,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 115,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				20: 116,
				29: 49,
				30: 61,
				32: 62,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				43: 23,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			},
			{
				12: [1, 118],
				33: [1, 117]
			},
			{
				35: 119,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 120,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 121,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 122,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 123,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 124,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{
				35: 125,
				75: 81,
				76: J,
				77: Y,
				79: X,
				80: Z
			},
			{ 14: [1, 126] },
			{ 14: [1, 127] },
			{ 14: [1, 128] },
			{ 14: [1, 129] },
			{ 1: [2, 8] },
			e(K, [2, 15]),
			e(Le, [2, 17], {
				21: 22,
				19: 130,
				22: t,
				23: n,
				24: r,
				26: i,
				28: o
			}),
			e(K, [2, 37], {
				19: 20,
				20: 21,
				21: 22,
				43: 23,
				29: 49,
				30: 61,
				32: 62,
				13: 131,
				22: t,
				23: n,
				24: r,
				26: i,
				28: o,
				34: s,
				36: l,
				37: u,
				38: d,
				39: f,
				40: p,
				41: m,
				44: h,
				45: g,
				46: _,
				47: v,
				48: y,
				49: b,
				50: x,
				51: S,
				52: C,
				53: w,
				54: T,
				55: E,
				56: D,
				57: O,
				58: k,
				59: A,
				60: j,
				61: M,
				62: N,
				63: P,
				64: F,
				65: I,
				66: L,
				67: R,
				68: z,
				69: B,
				70: V,
				71: H,
				72: U,
				73: W,
				74: G
			}),
			e(q, [2, 21]),
			e(q, [2, 22]),
			e(Q, [2, 39]),
			e(Re, [2, 71], {
				75: 81,
				35: 132,
				76: J,
				77: Y,
				79: X,
				80: Z
			}),
			e(ze, [2, 73]),
			{ 78: [1, 133] },
			e(ze, [2, 75]),
			e(ze, [2, 76]),
			e(Q, [2, 40]),
			e(Q, [2, 41]),
			e(Q, [2, 42]),
			e(Q, [2, 43]),
			e(Q, [2, 44]),
			e(Q, [2, 45]),
			e(Q, [2, 46]),
			e(Q, [2, 47]),
			e(Q, [2, 48]),
			e(Q, [2, 49]),
			e(Q, [2, 50]),
			e(Q, [2, 51]),
			e(Q, [2, 52]),
			e(Q, [2, 53]),
			e(Q, [2, 54]),
			e(Q, [2, 55]),
			e(Q, [2, 56]),
			e(Q, [2, 57]),
			e(Q, [2, 58]),
			e(Q, [2, 60]),
			e(Q, [2, 61]),
			e(Q, [2, 62]),
			e(Q, [2, 63]),
			e(Q, [2, 64]),
			e(Q, [2, 65]),
			e(Q, [2, 66]),
			e(Q, [2, 67]),
			e(Q, [2, 68]),
			e(Q, [2, 69]),
			e(Q, [2, 70]),
			{
				31: 134,
				42: [1, 135]
			},
			{ 12: [1, 136] },
			{ 33: [1, 137] },
			e($, [2, 28]),
			e($, [2, 29]),
			e($, [2, 30]),
			e($, [2, 31]),
			e($, [2, 32]),
			e($, [2, 33]),
			e($, [2, 34]),
			{ 1: [2, 9] },
			{ 1: [2, 10] },
			{ 1: [2, 11] },
			{ 1: [2, 12] },
			e(Le, [2, 18]),
			e(K, [2, 38]),
			e(Re, [2, 72]),
			e(ze, [2, 74]),
			e(Q, [2, 24]),
			e(Q, [2, 35]),
			e(Be, [2, 25]),
			e(Be, [2, 26], { 12: [1, 138] }),
			e(Be, [2, 27])
		],
		defaultActions: {
			2: [2, 1],
			3: [2, 2],
			4: [2, 7],
			5: [2, 3],
			6: [2, 4],
			7: [2, 5],
			8: [2, 6],
			74: [2, 8],
			126: [2, 9],
			127: [2, 10],
			128: [2, 11],
			129: [2, 12]
		},
		parseError: /* @__PURE__ */ __name(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(e) {
			var t = this, n = [0], r = [], i = [null], o = [], s = this.table, l = "", u = 0, d = 0, f = 0, p = 2, m = 1, h = o.slice.call(arguments, 1), g = Object.create(this.lexer), _ = { yy: {} };
			for (var v in this.yy) Object.prototype.hasOwnProperty.call(this.yy, v) && (_.yy[v] = this.yy[v]);
			g.setInput(e, _.yy), _.yy.lexer = g, _.yy.parser = this, g.yylloc === void 0 && (g.yylloc = {});
			var y = g.yylloc;
			o.push(y);
			var b = g.options && g.options.ranges;
			typeof _.yy.parseError == "function" ? this.parseError = _.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function x(e) {
				n.length -= 2 * e, i.length -= e, o.length -= e;
			}
			__name(x, "popStack");
			function S() {
				var e = r.pop() || g.lex() || m;
				return typeof e != "number" && (e instanceof Array && (r = e, e = r.pop()), e = t.symbols_[e] || e), e;
			}
			__name(S, "lex");
			for (var C, w, T, E, D, O = {}, k, A, j, M;;) {
				if (T = n[n.length - 1], this.defaultActions[T] ? E = this.defaultActions[T] : (C ??= S(), E = s[T] && s[T][C]), E === void 0 || !E.length || !E[0]) {
					var N = "";
					for (k in M = [], s[T]) this.terminals_[k] && k > p && M.push("'" + this.terminals_[k] + "'");
					N = g.showPosition ? "Parse error on line " + (u + 1) + ":\n" + g.showPosition() + "\nExpecting " + M.join(", ") + ", got '" + (this.terminals_[C] || C) + "'" : "Parse error on line " + (u + 1) + ": Unexpected " + (C == m ? "end of input" : "'" + (this.terminals_[C] || C) + "'"), this.parseError(N, {
						text: g.match,
						token: this.terminals_[C] || C,
						line: g.yylineno,
						loc: y,
						expected: M
					});
				}
				if (E[0] instanceof Array && E.length > 1) throw Error("Parse Error: multiple actions possible at state: " + T + ", token: " + C);
				switch (E[0]) {
					case 1:
						n.push(C), i.push(g.yytext), o.push(g.yylloc), n.push(E[1]), C = null, w ? (C = w, w = null) : (d = g.yyleng, l = g.yytext, u = g.yylineno, y = g.yylloc, f > 0 && f--);
						break;
					case 2:
						if (A = this.productions_[E[1]][1], O.$ = i[i.length - A], O._$ = {
							first_line: o[o.length - (A || 1)].first_line,
							last_line: o[o.length - 1].last_line,
							first_column: o[o.length - (A || 1)].first_column,
							last_column: o[o.length - 1].last_column
						}, b && (O._$.range = [o[o.length - (A || 1)].range[0], o[o.length - 1].range[1]]), D = this.performAction.apply(O, [
							l,
							d,
							u,
							_.yy,
							E[1],
							i,
							o
						].concat(h)), D !== void 0) return D;
						A && (n = n.slice(0, -1 * A * 2), i = i.slice(0, -1 * A), o = o.slice(0, -1 * A)), n.push(this.productions_[E[1]][0]), i.push(O.$), o.push(O._$), j = s[n[n.length - 2]][n[n.length - 1]], n.push(j);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	Ve.lexer = /* @__PURE__ */ (function() {
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
					case 0: return 6;
					case 1: return 7;
					case 2: return 8;
					case 3: return 9;
					case 4: return 22;
					case 5: return 23;
					case 6: return this.begin("acc_title"), 24;
					case 7: return this.popState(), "acc_title_value";
					case 8: return this.begin("acc_descr"), 26;
					case 9: return this.popState(), "acc_descr_value";
					case 10:
						this.begin("acc_descr_multiline");
						break;
					case 11:
						this.popState();
						break;
					case 12: return "acc_descr_multiline_value";
					case 13: break;
					case 14:
						c;
						break;
					case 15: return 12;
					case 16: break;
					case 17: return 11;
					case 18: return 15;
					case 19: return 16;
					case 20: return 17;
					case 21: return 18;
					case 22: return this.begin("person_ext"), 45;
					case 23: return this.begin("person"), 44;
					case 24: return this.begin("system_ext_queue"), 51;
					case 25: return this.begin("system_ext_db"), 50;
					case 26: return this.begin("system_ext"), 49;
					case 27: return this.begin("system_queue"), 48;
					case 28: return this.begin("system_db"), 47;
					case 29: return this.begin("system"), 46;
					case 30: return this.begin("boundary"), 37;
					case 31: return this.begin("enterprise_boundary"), 34;
					case 32: return this.begin("system_boundary"), 36;
					case 33: return this.begin("container_ext_queue"), 57;
					case 34: return this.begin("container_ext_db"), 56;
					case 35: return this.begin("container_ext"), 55;
					case 36: return this.begin("container_queue"), 54;
					case 37: return this.begin("container_db"), 53;
					case 38: return this.begin("container"), 52;
					case 39: return this.begin("container_boundary"), 38;
					case 40: return this.begin("component_ext_queue"), 63;
					case 41: return this.begin("component_ext_db"), 62;
					case 42: return this.begin("component_ext"), 61;
					case 43: return this.begin("component_queue"), 60;
					case 44: return this.begin("component_db"), 59;
					case 45: return this.begin("component"), 58;
					case 46: return this.begin("node"), 39;
					case 47: return this.begin("node"), 39;
					case 48: return this.begin("node_l"), 40;
					case 49: return this.begin("node_r"), 41;
					case 50: return this.begin("rel"), 64;
					case 51: return this.begin("birel"), 65;
					case 52: return this.begin("rel_u"), 66;
					case 53: return this.begin("rel_u"), 66;
					case 54: return this.begin("rel_d"), 67;
					case 55: return this.begin("rel_d"), 67;
					case 56: return this.begin("rel_l"), 68;
					case 57: return this.begin("rel_l"), 68;
					case 58: return this.begin("rel_r"), 69;
					case 59: return this.begin("rel_r"), 69;
					case 60: return this.begin("rel_b"), 70;
					case 61: return this.begin("rel_index"), 71;
					case 62: return this.begin("update_el_style"), 72;
					case 63: return this.begin("update_rel_style"), 73;
					case 64: return this.begin("update_layout_config"), 74;
					case 65: return "EOF_IN_STRUCT";
					case 66: return this.begin("attribute"), "ATTRIBUTE_EMPTY";
					case 67:
						this.begin("attribute");
						break;
					case 68:
						this.popState(), this.popState();
						break;
					case 69: return 80;
					case 70: break;
					case 71: return 80;
					case 72:
						this.begin("string");
						break;
					case 73:
						this.popState();
						break;
					case 74: return "STR";
					case 75:
						this.begin("string_kv");
						break;
					case 76: return this.begin("string_kv_key"), "STR_KEY";
					case 77:
						this.popState(), this.begin("string_kv_value");
						break;
					case 78: return "STR_VALUE";
					case 79:
						this.popState(), this.popState();
						break;
					case 80: return "STR";
					case 81: return "LBRACE";
					case 82: return "RBRACE";
					case 83: return "SPACE";
					case 84: return "EOL";
					case 85: return 14;
				}
			}, "anonymous"),
			rules: [
				/^(?:.*direction\s+TB[^\n]*)/,
				/^(?:.*direction\s+BT[^\n]*)/,
				/^(?:.*direction\s+RL[^\n]*)/,
				/^(?:.*direction\s+LR[^\n]*)/,
				/^(?:title\s[^#\n;]+)/,
				/^(?:accDescription\s[^#\n;]+)/,
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,
				/^(?:%%[^\n]*(\r?\n)*)/,
				/^(?:\s*(\r?\n)+)/,
				/^(?:\s+)/,
				/^(?:C4Context\b)/,
				/^(?:C4Container\b)/,
				/^(?:C4Component\b)/,
				/^(?:C4Dynamic\b)/,
				/^(?:C4Deployment\b)/,
				/^(?:Person_Ext\b)/,
				/^(?:Person\b)/,
				/^(?:SystemQueue_Ext\b)/,
				/^(?:SystemDb_Ext\b)/,
				/^(?:System_Ext\b)/,
				/^(?:SystemQueue\b)/,
				/^(?:SystemDb\b)/,
				/^(?:System\b)/,
				/^(?:Boundary\b)/,
				/^(?:Enterprise_Boundary\b)/,
				/^(?:System_Boundary\b)/,
				/^(?:ContainerQueue_Ext\b)/,
				/^(?:ContainerDb_Ext\b)/,
				/^(?:Container_Ext\b)/,
				/^(?:ContainerQueue\b)/,
				/^(?:ContainerDb\b)/,
				/^(?:Container\b)/,
				/^(?:Container_Boundary\b)/,
				/^(?:ComponentQueue_Ext\b)/,
				/^(?:ComponentDb_Ext\b)/,
				/^(?:Component_Ext\b)/,
				/^(?:ComponentQueue\b)/,
				/^(?:ComponentDb\b)/,
				/^(?:Component\b)/,
				/^(?:Deployment_Node\b)/,
				/^(?:Node\b)/,
				/^(?:Node_L\b)/,
				/^(?:Node_R\b)/,
				/^(?:Rel\b)/,
				/^(?:BiRel\b)/,
				/^(?:Rel_Up\b)/,
				/^(?:Rel_U\b)/,
				/^(?:Rel_Down\b)/,
				/^(?:Rel_D\b)/,
				/^(?:Rel_Left\b)/,
				/^(?:Rel_L\b)/,
				/^(?:Rel_Right\b)/,
				/^(?:Rel_R\b)/,
				/^(?:Rel_Back\b)/,
				/^(?:RelIndex\b)/,
				/^(?:UpdateElementStyle\b)/,
				/^(?:UpdateRelStyle\b)/,
				/^(?:UpdateLayoutConfig\b)/,
				/^(?:$)/,
				/^(?:[(][ ]*[,])/,
				/^(?:[(])/,
				/^(?:[)])/,
				/^(?:,,)/,
				/^(?:,)/,
				/^(?:[ ]*["]["])/,
				/^(?:[ ]*["])/,
				/^(?:["])/,
				/^(?:[^"]*)/,
				/^(?:[ ]*[\$])/,
				/^(?:[^=]*)/,
				/^(?:[=][ ]*["])/,
				/^(?:[^"]+)/,
				/^(?:["])/,
				/^(?:[^,]+)/,
				/^(?:\{)/,
				/^(?:\})/,
				/^(?:[\s]+)/,
				/^(?:[\n\r]+)/,
				/^(?:$)/
			],
			conditions: {
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
				string_kv_value: {
					rules: [78, 79],
					inclusive: !1
				},
				string_kv_key: {
					rules: [77],
					inclusive: !1
				},
				string_kv: {
					rules: [76],
					inclusive: !1
				},
				string: {
					rules: [73, 74],
					inclusive: !1
				},
				attribute: {
					rules: [
						68,
						69,
						70,
						71,
						72,
						75,
						80
					],
					inclusive: !1
				},
				update_layout_config: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				update_rel_style: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				update_el_style: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_b: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_r: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_l: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_d: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_u: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				rel_bi: {
					rules: [],
					inclusive: !1
				},
				rel: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				node_r: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				node_l: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				node: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				index: {
					rules: [],
					inclusive: !1
				},
				rel_index: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_ext_queue: {
					rules: [],
					inclusive: !1
				},
				component_ext_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				component: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_ext_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_ext_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				container: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				birel: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				enterprise_boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				boundary: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_ext_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_ext_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_queue: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system_db: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				system: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				person_ext: {
					rules: [
						65,
						66,
						67,
						68
					],
					inclusive: !1
				},
				person: {
					rules: [
						65,
						66,
						67,
						68
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
						81,
						82,
						83,
						84,
						85
					],
					inclusive: !0
				}
			}
		};
	})();
	function He() {
		this.yy = {};
	}
	return __name(He, "Parser"), He.prototype = Ve, Ve.Parser = He, new He();
})();
parser.parser = parser;
var c4Diagram_default = parser, c4ShapeArray = [], boundaryParseStack = [""], currentBoundaryParse = "global", parentBoundaryParse = "", boundaries = [{
	alias: "global",
	label: { text: "global" },
	type: { text: "global" },
	tags: null,
	link: null,
	parentBoundary: ""
}], rels = [], title = "", wrapEnabled = !1, c4ShapeInRow = 4, c4BoundaryInRow = 2, c4Type, getC4Type = /* @__PURE__ */ __name(function() {
	return c4Type;
}, "getC4Type"), setC4Type = /* @__PURE__ */ __name(function(e) {
	c4Type = sanitizeText(e, getConfig2());
}, "setC4Type"), addRel = /* @__PURE__ */ __name(function(e, t, n, r, i, a, o, s, l) {
	if (e == null || t == null || n == null || r == null) return;
	let u = {}, d = rels.find((e) => e.from === t && e.to === n);
	if (d ? u = d : rels.push(u), u.type = e, u.from = t, u.to = n, u.label = { text: r }, i == null) u.techn = { text: "" };
	else if (typeof i == "object") {
		let [e, t] = Object.entries(i)[0];
		u[e] = { text: t };
	} else u.techn = { text: i };
	if (a == null) u.descr = { text: "" };
	else if (typeof a == "object") {
		let [e, t] = Object.entries(a)[0];
		u[e] = { text: t };
	} else u.descr = { text: a };
	if (typeof o == "object") {
		let [e, t] = Object.entries(o)[0];
		u[e] = t;
	} else u.sprite = o;
	if (typeof s == "object") {
		let [e, t] = Object.entries(s)[0];
		u[e] = t;
	} else u.tags = s;
	if (typeof l == "object") {
		let [e, t] = Object.entries(l)[0];
		u[e] = t;
	} else u.link = l;
	u.wrap = autoWrap();
}, "addRel"), addPersonOrSystem = /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
	if (t === null || n === null) return;
	let s = {}, l = c4ShapeArray.find((e) => e.alias === t);
	if (l && t === l.alias ? s = l : (s.alias = t, c4ShapeArray.push(s)), n == null ? s.label = { text: "" } : s.label = { text: n }, r == null) s.descr = { text: "" };
	else if (typeof r == "object") {
		let [e, t] = Object.entries(r)[0];
		s[e] = { text: t };
	} else s.descr = { text: r };
	if (typeof i == "object") {
		let [e, t] = Object.entries(i)[0];
		s[e] = t;
	} else s.sprite = i;
	if (typeof a == "object") {
		let [e, t] = Object.entries(a)[0];
		s[e] = t;
	} else s.tags = a;
	if (typeof o == "object") {
		let [e, t] = Object.entries(o)[0];
		s[e] = t;
	} else s.link = o;
	s.typeC4Shape = { text: e }, s.parentBoundary = currentBoundaryParse, s.wrap = autoWrap();
}, "addPersonOrSystem"), addContainer = /* @__PURE__ */ __name(function(e, t, n, r, i, a, o, s) {
	if (t === null || n === null) return;
	let l = {}, u = c4ShapeArray.find((e) => e.alias === t);
	if (u && t === u.alias ? l = u : (l.alias = t, c4ShapeArray.push(l)), n == null ? l.label = { text: "" } : l.label = { text: n }, r == null) l.techn = { text: "" };
	else if (typeof r == "object") {
		let [e, t] = Object.entries(r)[0];
		l[e] = { text: t };
	} else l.techn = { text: r };
	if (i == null) l.descr = { text: "" };
	else if (typeof i == "object") {
		let [e, t] = Object.entries(i)[0];
		l[e] = { text: t };
	} else l.descr = { text: i };
	if (typeof a == "object") {
		let [e, t] = Object.entries(a)[0];
		l[e] = t;
	} else l.sprite = a;
	if (typeof o == "object") {
		let [e, t] = Object.entries(o)[0];
		l[e] = t;
	} else l.tags = o;
	if (typeof s == "object") {
		let [e, t] = Object.entries(s)[0];
		l[e] = t;
	} else l.link = s;
	l.wrap = autoWrap(), l.typeC4Shape = { text: e }, l.parentBoundary = currentBoundaryParse;
}, "addContainer"), addComponent = /* @__PURE__ */ __name(function(e, t, n, r, i, a, o, s) {
	if (t === null || n === null) return;
	let l = {}, u = c4ShapeArray.find((e) => e.alias === t);
	if (u && t === u.alias ? l = u : (l.alias = t, c4ShapeArray.push(l)), n == null ? l.label = { text: "" } : l.label = { text: n }, r == null) l.techn = { text: "" };
	else if (typeof r == "object") {
		let [e, t] = Object.entries(r)[0];
		l[e] = { text: t };
	} else l.techn = { text: r };
	if (i == null) l.descr = { text: "" };
	else if (typeof i == "object") {
		let [e, t] = Object.entries(i)[0];
		l[e] = { text: t };
	} else l.descr = { text: i };
	if (typeof a == "object") {
		let [e, t] = Object.entries(a)[0];
		l[e] = t;
	} else l.sprite = a;
	if (typeof o == "object") {
		let [e, t] = Object.entries(o)[0];
		l[e] = t;
	} else l.tags = o;
	if (typeof s == "object") {
		let [e, t] = Object.entries(s)[0];
		l[e] = t;
	} else l.link = s;
	l.wrap = autoWrap(), l.typeC4Shape = { text: e }, l.parentBoundary = currentBoundaryParse;
}, "addComponent"), addPersonOrSystemBoundary = /* @__PURE__ */ __name(function(e, t, n, r, i) {
	if (e === null || t === null) return;
	let a = {}, o = boundaries.find((t) => t.alias === e);
	if (o && e === o.alias ? a = o : (a.alias = e, boundaries.push(a)), t == null ? a.label = { text: "" } : a.label = { text: t }, n == null) a.type = { text: "system" };
	else if (typeof n == "object") {
		let [e, t] = Object.entries(n)[0];
		a[e] = { text: t };
	} else a.type = { text: n };
	if (typeof r == "object") {
		let [e, t] = Object.entries(r)[0];
		a[e] = t;
	} else a.tags = r;
	if (typeof i == "object") {
		let [e, t] = Object.entries(i)[0];
		a[e] = t;
	} else a.link = i;
	a.parentBoundary = currentBoundaryParse, a.wrap = autoWrap(), parentBoundaryParse = currentBoundaryParse, currentBoundaryParse = e, boundaryParseStack.push(parentBoundaryParse);
}, "addPersonOrSystemBoundary"), addContainerBoundary = /* @__PURE__ */ __name(function(e, t, n, r, i) {
	if (e === null || t === null) return;
	let a = {}, o = boundaries.find((t) => t.alias === e);
	if (o && e === o.alias ? a = o : (a.alias = e, boundaries.push(a)), t == null ? a.label = { text: "" } : a.label = { text: t }, n == null) a.type = { text: "container" };
	else if (typeof n == "object") {
		let [e, t] = Object.entries(n)[0];
		a[e] = { text: t };
	} else a.type = { text: n };
	if (typeof r == "object") {
		let [e, t] = Object.entries(r)[0];
		a[e] = t;
	} else a.tags = r;
	if (typeof i == "object") {
		let [e, t] = Object.entries(i)[0];
		a[e] = t;
	} else a.link = i;
	a.parentBoundary = currentBoundaryParse, a.wrap = autoWrap(), parentBoundaryParse = currentBoundaryParse, currentBoundaryParse = e, boundaryParseStack.push(parentBoundaryParse);
}, "addContainerBoundary"), addDeploymentNode = /* @__PURE__ */ __name(function(e, t, n, r, i, a, o, s) {
	if (t === null || n === null) return;
	let l = {}, u = boundaries.find((e) => e.alias === t);
	if (u && t === u.alias ? l = u : (l.alias = t, boundaries.push(l)), n == null ? l.label = { text: "" } : l.label = { text: n }, r == null) l.type = { text: "node" };
	else if (typeof r == "object") {
		let [e, t] = Object.entries(r)[0];
		l[e] = { text: t };
	} else l.type = { text: r };
	if (i == null) l.descr = { text: "" };
	else if (typeof i == "object") {
		let [e, t] = Object.entries(i)[0];
		l[e] = { text: t };
	} else l.descr = { text: i };
	if (typeof o == "object") {
		let [e, t] = Object.entries(o)[0];
		l[e] = t;
	} else l.tags = o;
	if (typeof s == "object") {
		let [e, t] = Object.entries(s)[0];
		l[e] = t;
	} else l.link = s;
	l.nodeType = e, l.parentBoundary = currentBoundaryParse, l.wrap = autoWrap(), parentBoundaryParse = currentBoundaryParse, currentBoundaryParse = t, boundaryParseStack.push(parentBoundaryParse);
}, "addDeploymentNode"), popBoundaryParseStack = /* @__PURE__ */ __name(function() {
	currentBoundaryParse = parentBoundaryParse, boundaryParseStack.pop(), parentBoundaryParse = boundaryParseStack.pop(), boundaryParseStack.push(parentBoundaryParse);
}, "popBoundaryParseStack"), updateElStyle = /* @__PURE__ */ __name(function(e, t, n, r, i, a, o, s, l, u, d) {
	let f = c4ShapeArray.find((e) => e.alias === t);
	if (!(f === void 0 && (f = boundaries.find((e) => e.alias === t), f === void 0))) {
		if (n != null) if (typeof n == "object") {
			let [e, t] = Object.entries(n)[0];
			f[e] = t;
		} else f.bgColor = n;
		if (r != null) if (typeof r == "object") {
			let [e, t] = Object.entries(r)[0];
			f[e] = t;
		} else f.fontColor = r;
		if (i != null) if (typeof i == "object") {
			let [e, t] = Object.entries(i)[0];
			f[e] = t;
		} else f.borderColor = i;
		if (a != null) if (typeof a == "object") {
			let [e, t] = Object.entries(a)[0];
			f[e] = t;
		} else f.shadowing = a;
		if (o != null) if (typeof o == "object") {
			let [e, t] = Object.entries(o)[0];
			f[e] = t;
		} else f.shape = o;
		if (s != null) if (typeof s == "object") {
			let [e, t] = Object.entries(s)[0];
			f[e] = t;
		} else f.sprite = s;
		if (l != null) if (typeof l == "object") {
			let [e, t] = Object.entries(l)[0];
			f[e] = t;
		} else f.techn = l;
		if (u != null) if (typeof u == "object") {
			let [e, t] = Object.entries(u)[0];
			f[e] = t;
		} else f.legendText = u;
		if (d != null) if (typeof d == "object") {
			let [e, t] = Object.entries(d)[0];
			f[e] = t;
		} else f.legendSprite = d;
	}
}, "updateElStyle"), updateRelStyle = /* @__PURE__ */ __name(function(e, t, n, r, i, a, o) {
	let s = rels.find((e) => e.from === t && e.to === n);
	if (s !== void 0) {
		if (r != null) if (typeof r == "object") {
			let [e, t] = Object.entries(r)[0];
			s[e] = t;
		} else s.textColor = r;
		if (i != null) if (typeof i == "object") {
			let [e, t] = Object.entries(i)[0];
			s[e] = t;
		} else s.lineColor = i;
		if (a != null) if (typeof a == "object") {
			let [e, t] = Object.entries(a)[0];
			s[e] = parseInt(t);
		} else s.offsetX = parseInt(a);
		if (o != null) if (typeof o == "object") {
			let [e, t] = Object.entries(o)[0];
			s[e] = parseInt(t);
		} else s.offsetY = parseInt(o);
	}
}, "updateRelStyle"), updateLayoutConfig = /* @__PURE__ */ __name(function(e, t, n) {
	let r = c4ShapeInRow, i = c4BoundaryInRow;
	if (typeof t == "object") {
		let e = Object.values(t)[0];
		r = parseInt(e);
	} else r = parseInt(t);
	if (typeof n == "object") {
		let e = Object.values(n)[0];
		i = parseInt(e);
	} else i = parseInt(n);
	r >= 1 && (c4ShapeInRow = r), i >= 1 && (c4BoundaryInRow = i);
}, "updateLayoutConfig"), getC4ShapeInRow = /* @__PURE__ */ __name(function() {
	return c4ShapeInRow;
}, "getC4ShapeInRow"), getC4BoundaryInRow = /* @__PURE__ */ __name(function() {
	return c4BoundaryInRow;
}, "getC4BoundaryInRow"), getCurrentBoundaryParse = /* @__PURE__ */ __name(function() {
	return currentBoundaryParse;
}, "getCurrentBoundaryParse"), getParentBoundaryParse = /* @__PURE__ */ __name(function() {
	return parentBoundaryParse;
}, "getParentBoundaryParse"), getC4ShapeArray = /* @__PURE__ */ __name(function(e) {
	return e == null ? c4ShapeArray : c4ShapeArray.filter((t) => t.parentBoundary === e);
}, "getC4ShapeArray"), getC4Shape = /* @__PURE__ */ __name(function(e) {
	return c4ShapeArray.find((t) => t.alias === e);
}, "getC4Shape"), getC4ShapeKeys = /* @__PURE__ */ __name(function(e) {
	return Object.keys(getC4ShapeArray(e));
}, "getC4ShapeKeys"), getBoundaries = /* @__PURE__ */ __name(function(e) {
	return e == null ? boundaries : boundaries.filter((t) => t.parentBoundary === e);
}, "getBoundaries"), getBoundarys = getBoundaries, getRels = /* @__PURE__ */ __name(function() {
	return rels;
}, "getRels"), getTitle = /* @__PURE__ */ __name(function() {
	return title;
}, "getTitle"), setWrap = /* @__PURE__ */ __name(function(e) {
	wrapEnabled = e;
}, "setWrap"), autoWrap = /* @__PURE__ */ __name(function() {
	return wrapEnabled;
}, "autoWrap"), c4Db_default = {
	addPersonOrSystem,
	addPersonOrSystemBoundary,
	addContainer,
	addContainerBoundary,
	addComponent,
	addDeploymentNode,
	popBoundaryParseStack,
	addRel,
	updateElStyle,
	updateRelStyle,
	updateLayoutConfig,
	autoWrap,
	setWrap,
	getC4ShapeArray,
	getC4Shape,
	getC4ShapeKeys,
	getBoundaries,
	getBoundarys,
	getCurrentBoundaryParse,
	getParentBoundaryParse,
	getRels,
	getTitle,
	getC4Type,
	getC4ShapeInRow,
	getC4BoundaryInRow,
	setAccTitle,
	getAccTitle,
	getAccDescription,
	setAccDescription,
	getConfig: /* @__PURE__ */ __name(() => getConfig2().c4, "getConfig"),
	clear: /* @__PURE__ */ __name(function() {
		c4ShapeArray = [], boundaries = [{
			alias: "global",
			label: { text: "global" },
			type: { text: "global" },
			tags: null,
			link: null,
			parentBoundary: ""
		}], parentBoundaryParse = "", currentBoundaryParse = "global", boundaryParseStack = [""], rels = [], boundaryParseStack = [""], title = "", wrapEnabled = !1, c4ShapeInRow = 4, c4BoundaryInRow = 2;
	}, "clear"),
	LINETYPE: {
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
		DOTTED_POINT: 25
	},
	ARROWTYPE: {
		FILLED: 0,
		OPEN: 1
	},
	PLACEMENT: {
		LEFTOF: 0,
		RIGHTOF: 1,
		OVER: 2
	},
	setTitle: /* @__PURE__ */ __name(function(e) {
		title = sanitizeText(e, getConfig2());
	}, "setTitle"),
	setC4Type
}, drawRect2 = /* @__PURE__ */ __name(function(e, t) {
	return drawRect(e, t);
}, "drawRect"), drawImage = /* @__PURE__ */ __name(function(e, t, n, r, i, a) {
	let o = e.append("image");
	o.attr("width", t), o.attr("height", n), o.attr("x", r), o.attr("y", i);
	let s = a.startsWith("data:image/png;base64") ? a : (0, import_dist.sanitizeUrl)(a);
	o.attr("xlink:href", s);
}, "drawImage"), drawRels = /* @__PURE__ */ __name((e, t, n) => {
	let r = e.append("g"), i = 0;
	for (let e of t) {
		let t = e.textColor ? e.textColor : "#444444", a = e.lineColor ? e.lineColor : "#444444", o = e.offsetX ? parseInt(e.offsetX) : 0, s = e.offsetY ? parseInt(e.offsetY) : 0;
		if (i === 0) {
			let t = r.append("line");
			t.attr("x1", e.startPoint.x), t.attr("y1", e.startPoint.y), t.attr("x2", e.endPoint.x), t.attr("y2", e.endPoint.y), t.attr("stroke-width", "1"), t.attr("stroke", a), t.style("fill", "none"), e.type !== "rel_b" && t.attr("marker-end", "url(#arrowhead)"), (e.type === "birel" || e.type === "rel_b") && t.attr("marker-start", "url(#arrowend)"), i = -1;
		} else {
			let t = r.append("path");
			t.attr("fill", "none").attr("stroke-width", "1").attr("stroke", a).attr("d", "Mstartx,starty Qcontrolx,controly stopx,stopy ".replaceAll("startx", e.startPoint.x).replaceAll("starty", e.startPoint.y).replaceAll("controlx", e.startPoint.x + (e.endPoint.x - e.startPoint.x) / 2 - (e.endPoint.x - e.startPoint.x) / 4).replaceAll("controly", e.startPoint.y + (e.endPoint.y - e.startPoint.y) / 2).replaceAll("stopx", e.endPoint.x).replaceAll("stopy", e.endPoint.y)), e.type !== "rel_b" && t.attr("marker-end", "url(#arrowhead)"), (e.type === "birel" || e.type === "rel_b") && t.attr("marker-start", "url(#arrowend)");
		}
		let l = n.messageFont();
		_drawTextCandidateFunc(n)(e.label.text, r, Math.min(e.startPoint.x, e.endPoint.x) + Math.abs(e.endPoint.x - e.startPoint.x) / 2 + o, Math.min(e.startPoint.y, e.endPoint.y) + Math.abs(e.endPoint.y - e.startPoint.y) / 2 + s, e.label.width, e.label.height, { fill: t }, l), e.techn && e.techn.text !== "" && (l = n.messageFont(), _drawTextCandidateFunc(n)("[" + e.techn.text + "]", r, Math.min(e.startPoint.x, e.endPoint.x) + Math.abs(e.endPoint.x - e.startPoint.x) / 2 + o, Math.min(e.startPoint.y, e.endPoint.y) + Math.abs(e.endPoint.y - e.startPoint.y) / 2 + n.messageFontSize + 5 + s, Math.max(e.label.width, e.techn.width), e.techn.height, {
			fill: t,
			"font-style": "italic"
		}, l));
	}
}, "drawRels"), drawBoundary = /* @__PURE__ */ __name(function(e, t, n) {
	let r = e.append("g"), i = t.bgColor ? t.bgColor : "none", a = t.borderColor ? t.borderColor : "#444444", o = t.fontColor ? t.fontColor : "black", s = {
		"stroke-width": 1,
		"stroke-dasharray": "7.0,7.0"
	};
	t.nodeType && (s = { "stroke-width": 1 }), drawRect2(r, {
		x: t.x,
		y: t.y,
		fill: i,
		stroke: a,
		width: t.width,
		height: t.height,
		rx: 2.5,
		ry: 2.5,
		attrs: s
	});
	let l = n.boundaryFont();
	l.fontWeight = "bold", l.fontSize += 2, l.fontColor = o, _drawTextCandidateFunc(n)(t.label.text, r, t.x, t.y + t.label.Y, t.width, t.height, { fill: "#444444" }, l), t.type && t.type.text !== "" && (l = n.boundaryFont(), l.fontColor = o, _drawTextCandidateFunc(n)(t.type.text, r, t.x, t.y + t.type.Y, t.width, t.height, { fill: "#444444" }, l)), t.descr && t.descr.text !== "" && (l = n.boundaryFont(), l.fontSize -= 2, l.fontColor = o, _drawTextCandidateFunc(n)(t.descr.text, r, t.x, t.y + t.descr.Y, t.width, t.height, { fill: "#444444" }, l));
}, "drawBoundary"), drawC4Shape = /* @__PURE__ */ __name(function(e, t, n) {
	let r = t.bgColor ? t.bgColor : n[t.typeC4Shape.text + "_bg_color"], i = t.borderColor ? t.borderColor : n[t.typeC4Shape.text + "_border_color"], a = t.fontColor ? t.fontColor : "#FFFFFF", o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
	switch (t.typeC4Shape.text) {
		case "person":
			o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
			break;
		case "external_person":
			o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAB6ElEQVR4Xu2YLY+EMBCG9+dWr0aj0Wg0Go1Go0+j8Xdv2uTCvv1gpt0ebHKPuhDaeW4605Z9mJvx4AdXUyTUdd08z+u6flmWZRnHsWkafk9DptAwDPu+f0eAYtu2PEaGWuj5fCIZrBAC2eLBAnRCsEkkxmeaJp7iDJ2QMDdHsLg8SxKFEJaAo8lAXnmuOFIhTMpxxKATebo4UiFknuNo4OniSIXQyRxEA3YsnjGCVEjVXD7yLUAqxBGUyPv/Y4W2beMgGuS7kVQIBycH0fD+oi5pezQETxdHKmQKGk1eQEYldK+jw5GxPfZ9z7Mk0Qnhf1W1m3w//EUn5BDmSZsbR44QQLBEqrBHqOrmSKaQAxdnLArCrxZcM7A7ZKs4ioRq8LFC+NpC3WCBJsvpVw5edm9iEXFuyNfxXAgSwfrFQ1c0iNda8AdejvUgnktOtJQQxmcfFzGglc5WVCj7oDgFqU18boeFSs52CUh8LE8BIVQDT1ABrB0HtgSEYlX5doJnCwv9TXocKCaKbnwhdDKPq4lf3SwU3HLq4V/+WYhHVMa/3b4IlfyikAduCkcBc7mQ3/z/Qq/cTuikhkzB12Ae/mcJC9U+Vo8Ej1gWAtgbeGgFsAMHr50BIWOLCbezvhpBFUdY6EJuJ/QDW0XoMX60zZ0AAAAASUVORK5CYII=";
			break;
	}
	let s = e.append("g");
	s.attr("class", "person-man");
	let l = getNoteRect();
	switch (t.typeC4Shape.text) {
		case "person":
		case "external_person":
		case "system":
		case "external_system":
		case "container":
		case "external_container":
		case "component":
		case "external_component":
			l.x = t.x, l.y = t.y, l.fill = r, l.width = t.width, l.height = t.height, l.stroke = i, l.rx = 2.5, l.ry = 2.5, l.attrs = { "stroke-width": .5 }, drawRect2(s, l);
			break;
		case "system_db":
		case "external_system_db":
		case "container_db":
		case "external_container_db":
		case "component_db":
		case "external_component_db":
			s.append("path").attr("fill", r).attr("stroke-width", "0.5").attr("stroke", i).attr("d", "Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height".replaceAll("startx", t.x).replaceAll("starty", t.y).replaceAll("half", t.width / 2).replaceAll("height", t.height)), s.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", i).attr("d", "Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10".replaceAll("startx", t.x).replaceAll("starty", t.y).replaceAll("half", t.width / 2));
			break;
		case "system_queue":
		case "external_system_queue":
		case "container_queue":
		case "external_container_queue":
		case "component_queue":
		case "external_component_queue":
			s.append("path").attr("fill", r).attr("stroke-width", "0.5").attr("stroke", i).attr("d", "Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half".replaceAll("startx", t.x).replaceAll("starty", t.y).replaceAll("width", t.width).replaceAll("half", t.height / 2)), s.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", i).attr("d", "Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half".replaceAll("startx", t.x + t.width).replaceAll("starty", t.y).replaceAll("half", t.height / 2));
			break;
	}
	let u = getC4ShapeFont(n, t.typeC4Shape.text);
	switch (s.append("text").attr("fill", a).attr("font-family", u.fontFamily).attr("font-size", u.fontSize - 2).attr("font-style", "italic").attr("lengthAdjust", "spacing").attr("textLength", t.typeC4Shape.width).attr("x", t.x + t.width / 2 - t.typeC4Shape.width / 2).attr("y", t.y + t.typeC4Shape.Y).text("<<" + t.typeC4Shape.text + ">>"), t.typeC4Shape.text) {
		case "person":
		case "external_person":
			drawImage(s, 48, 48, t.x + t.width / 2 - 24, t.y + t.image.Y, o);
			break;
	}
	let d = n[t.typeC4Shape.text + "Font"]();
	return d.fontWeight = "bold", d.fontSize += 2, d.fontColor = a, _drawTextCandidateFunc(n)(t.label.text, s, t.x, t.y + t.label.Y, t.width, t.height, { fill: a }, d), d = n[t.typeC4Shape.text + "Font"](), d.fontColor = a, t.techn && t.techn?.text !== "" ? _drawTextCandidateFunc(n)(t.techn.text, s, t.x, t.y + t.techn.Y, t.width, t.height, {
		fill: a,
		"font-style": "italic"
	}, d) : t.type && t.type.text !== "" && _drawTextCandidateFunc(n)(t.type.text, s, t.x, t.y + t.type.Y, t.width, t.height, {
		fill: a,
		"font-style": "italic"
	}, d), t.descr && t.descr.text !== "" && (d = n.personFont(), d.fontColor = a, _drawTextCandidateFunc(n)(t.descr.text, s, t.x, t.y + t.descr.Y, t.width, t.height, { fill: a }, d)), t.height;
}, "drawC4Shape"), insertDatabaseIcon = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
}, "insertDatabaseIcon"), insertComputerIcon = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
}, "insertComputerIcon"), insertClockIcon = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
}, "insertClockIcon"), insertArrowHead = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
}, "insertArrowHead"), insertArrowEnd = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("marker").attr("id", "arrowend").attr("refX", 1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 z");
}, "insertArrowEnd"), insertArrowFilledHead = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("marker").attr("id", "filled-head").attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "insertArrowFilledHead"), insertDynamicNumber = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
}, "insertDynamicNumber"), insertArrowCrossHead = /* @__PURE__ */ __name(function(e) {
	let t = e.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 16).attr("refY", 4);
	t.append("path").attr("fill", "black").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 9,2 V 6 L16,4 Z"), t.append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 0,1 L 6,7 M 6,1 L 0,7");
}, "insertArrowCrossHead"), getC4ShapeFont = /* @__PURE__ */ __name((e, t) => ({
	fontFamily: e[t + "FontFamily"],
	fontSize: e[t + "FontSize"],
	fontWeight: e[t + "FontWeight"]
}), "getC4ShapeFont"), _drawTextCandidateFunc = /* @__PURE__ */ (function() {
	function e(e, t, n, i, a, o, s) {
		r(t.append("text").attr("x", n + a / 2).attr("y", i + o / 2 + 5).style("text-anchor", "middle").text(e), s);
	}
	__name(e, "byText");
	function t(e, t, n, i, a, o, s, l) {
		let { fontSize: u, fontFamily: d, fontWeight: f } = l, p = e.split(common_default.lineBreakRegex);
		for (let e = 0; e < p.length; e++) {
			let o = e * u - u * (p.length - 1) / 2, l = t.append("text").attr("x", n + a / 2).attr("y", i).style("text-anchor", "middle").attr("dominant-baseline", "middle").style("font-size", u).style("font-weight", f).style("font-family", d);
			l.append("tspan").attr("dy", o).text(p[e]).attr("alignment-baseline", "mathematical"), r(l, s);
		}
	}
	__name(t, "byTspan");
	function n(e, n, i, a, o, s, l, u) {
		let d = n.append("switch"), f = d.append("foreignObject").attr("x", i).attr("y", a).attr("width", o).attr("height", s).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		f.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(e), t(e, d, i, a, o, s, l, u), r(f, l);
	}
	__name(n, "byFo");
	function r(e, t) {
		for (let n in t) t.hasOwnProperty(n) && e.attr(n, t[n]);
	}
	return __name(r, "_setTextAttrs"), function(r) {
		return r.textPlacement === "fo" ? n : r.textPlacement === "old" ? e : t;
	};
})(), svgDraw_default = {
	drawRect: drawRect2,
	drawBoundary,
	drawC4Shape,
	drawRels,
	drawImage,
	insertArrowHead,
	insertArrowEnd,
	insertArrowFilledHead,
	insertDynamicNumber,
	insertArrowCrossHead,
	insertDatabaseIcon,
	insertComputerIcon,
	insertClockIcon
}, globalBoundaryMaxX = 0, globalBoundaryMaxY = 0, c4ShapeInRow2 = 4, c4BoundaryInRow2 = 2;
parser.yy = c4Db_default;
var conf = {}, Bounds = class {
	static #_ = __name(this, "Bounds");
	constructor(e) {
		this.name = "", this.data = {}, this.data.startx = void 0, this.data.stopx = void 0, this.data.starty = void 0, this.data.stopy = void 0, this.data.widthLimit = void 0, this.nextData = {}, this.nextData.startx = void 0, this.nextData.stopx = void 0, this.nextData.starty = void 0, this.nextData.stopy = void 0, this.nextData.cnt = 0, setConf(e.db.getConfig());
	}
	setData(e, t, n, r) {
		this.nextData.startx = this.data.startx = e, this.nextData.stopx = this.data.stopx = t, this.nextData.starty = this.data.starty = n, this.nextData.stopy = this.data.stopy = r;
	}
	updateVal(e, t, n, r) {
		e[t] === void 0 ? e[t] = n : e[t] = r(n, e[t]);
	}
	insert(e) {
		this.nextData.cnt = this.nextData.cnt + 1;
		let t = this.nextData.startx === this.nextData.stopx ? this.nextData.stopx + e.margin : this.nextData.stopx + e.margin * 2, n = t + e.width, r = this.nextData.starty + e.margin * 2, i = r + e.height;
		(t >= this.data.widthLimit || n >= this.data.widthLimit || this.nextData.cnt > c4ShapeInRow2) && (t = this.nextData.startx + e.margin + conf.nextLinePaddingX, r = this.nextData.stopy + e.margin * 2, this.nextData.stopx = n = t + e.width, this.nextData.starty = this.nextData.stopy, this.nextData.stopy = i = r + e.height, this.nextData.cnt = 1), e.x = t, e.y = r, this.updateVal(this.data, "startx", t, Math.min), this.updateVal(this.data, "starty", r, Math.min), this.updateVal(this.data, "stopx", n, Math.max), this.updateVal(this.data, "stopy", i, Math.max), this.updateVal(this.nextData, "startx", t, Math.min), this.updateVal(this.nextData, "starty", r, Math.min), this.updateVal(this.nextData, "stopx", n, Math.max), this.updateVal(this.nextData, "stopy", i, Math.max);
	}
	init(e) {
		this.name = "", this.data = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0,
			widthLimit: void 0
		}, this.nextData = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0,
			cnt: 0
		}, setConf(e.db.getConfig());
	}
	bumpLastMargin(e) {
		this.data.stopx += e, this.data.stopy += e;
	}
}, setConf = /* @__PURE__ */ __name(function(e) {
	assignWithDepth_default(conf, e), e.fontFamily && (conf.personFontFamily = conf.systemFontFamily = conf.messageFontFamily = e.fontFamily), e.fontSize && (conf.personFontSize = conf.systemFontSize = conf.messageFontSize = e.fontSize), e.fontWeight && (conf.personFontWeight = conf.systemFontWeight = conf.messageFontWeight = e.fontWeight);
}, "setConf"), c4ShapeFont = /* @__PURE__ */ __name((e, t) => ({
	fontFamily: e[t + "FontFamily"],
	fontSize: e[t + "FontSize"],
	fontWeight: e[t + "FontWeight"]
}), "c4ShapeFont"), boundaryFont = /* @__PURE__ */ __name((e) => ({
	fontFamily: e.boundaryFontFamily,
	fontSize: e.boundaryFontSize,
	fontWeight: e.boundaryFontWeight
}), "boundaryFont"), messageFont = /* @__PURE__ */ __name((e) => ({
	fontFamily: e.messageFontFamily,
	fontSize: e.messageFontSize,
	fontWeight: e.messageFontWeight
}), "messageFont");
function calcC4ShapeTextWH(e, i, a, o, s) {
	if (!i[e].width) if (a) i[e].text = wrapLabel(i[e].text, s, o), i[e].textLines = i[e].text.split(common_default.lineBreakRegex).length, i[e].width = s, i[e].height = calculateTextHeight(i[e].text, o);
	else {
		let t = i[e].text.split(common_default.lineBreakRegex);
		i[e].textLines = t.length;
		let a = 0;
		i[e].height = 0, i[e].width = 0;
		for (let s of t) i[e].width = Math.max(calculateTextWidth(s, o), i[e].width), a = calculateTextHeight(s, o), i[e].height = i[e].height + a;
	}
}
__name(calcC4ShapeTextWH, "calcC4ShapeTextWH");
var drawBoundary2 = /* @__PURE__ */ __name(function(e, t, n) {
	t.x = n.data.startx, t.y = n.data.starty, t.width = n.data.stopx - n.data.startx, t.height = n.data.stopy - n.data.starty, t.label.y = conf.c4ShapeMargin - 35;
	let i = t.wrap && conf.wrap, a = boundaryFont(conf);
	a.fontSize += 2, a.fontWeight = "bold", calcC4ShapeTextWH("label", t, i, a, calculateTextWidth(t.label.text, a)), svgDraw_default.drawBoundary(e, t, conf);
}, "drawBoundary"), drawC4ShapeArray = /* @__PURE__ */ __name(function(e, t, n, i) {
	let a = 0;
	for (let o of i) {
		a = 0;
		let i = n[o], s = c4ShapeFont(conf, i.typeC4Shape.text);
		switch (s.fontSize -= 2, i.typeC4Shape.width = calculateTextWidth("«" + i.typeC4Shape.text + "»", s), i.typeC4Shape.height = s.fontSize + 2, i.typeC4Shape.Y = conf.c4ShapePadding, a = i.typeC4Shape.Y + i.typeC4Shape.height - 4, i.image = {
			width: 0,
			height: 0,
			Y: 0
		}, i.typeC4Shape.text) {
			case "person":
			case "external_person":
				i.image.width = 48, i.image.height = 48, i.image.Y = a, a = i.image.Y + i.image.height;
				break;
		}
		i.sprite && (i.image.width = 48, i.image.height = 48, i.image.Y = a, a = i.image.Y + i.image.height);
		let l = i.wrap && conf.wrap, u = conf.width - conf.c4ShapePadding * 2, d = c4ShapeFont(conf, i.typeC4Shape.text);
		d.fontSize += 2, d.fontWeight = "bold", calcC4ShapeTextWH("label", i, l, d, u), i.label.Y = a + 8, a = i.label.Y + i.label.height, i.type && i.type.text !== "" ? (i.type.text = "[" + i.type.text + "]", calcC4ShapeTextWH("type", i, l, c4ShapeFont(conf, i.typeC4Shape.text), u), i.type.Y = a + 5, a = i.type.Y + i.type.height) : i.techn && i.techn.text !== "" && (i.techn.text = "[" + i.techn.text + "]", calcC4ShapeTextWH("techn", i, l, c4ShapeFont(conf, i.techn.text), u), i.techn.Y = a + 5, a = i.techn.Y + i.techn.height);
		let f = a, p = i.label.width;
		i.descr && i.descr.text !== "" && (calcC4ShapeTextWH("descr", i, l, c4ShapeFont(conf, i.typeC4Shape.text), u), i.descr.Y = a + 20, a = i.descr.Y + i.descr.height, p = Math.max(i.label.width, i.descr.width), f = a - i.descr.textLines * 5), p += conf.c4ShapePadding, i.width = Math.max(i.width || conf.width, p, conf.width), i.height = Math.max(i.height || conf.height, f, conf.height), i.margin = i.margin || conf.c4ShapeMargin, e.insert(i), svgDraw_default.drawC4Shape(t, i, conf);
	}
	e.bumpLastMargin(conf.c4ShapeMargin);
}, "drawC4ShapeArray"), Point = class {
	static #_ = __name(this, "Point");
	constructor(e, t) {
		this.x = e, this.y = t;
	}
}, getIntersectPoint = /* @__PURE__ */ __name(function(e, t) {
	let n = e.x, r = e.y, i = t.x, a = t.y, o = n + e.width / 2, s = r + e.height / 2, l = Math.abs(n - i), u = Math.abs(r - a), d = u / l, f = e.height / e.width, p = null;
	return r == a && n < i ? p = new Point(n + e.width, s) : r == a && n > i ? p = new Point(n, s) : n == i && r < a ? p = new Point(o, r + e.height) : n == i && r > a && (p = new Point(o, r)), n > i && r < a ? p = f >= d ? new Point(n, s + d * e.width / 2) : new Point(o - l / u * e.height / 2, r + e.height) : n < i && r < a ? p = f >= d ? new Point(n + e.width, s + d * e.width / 2) : new Point(o + l / u * e.height / 2, r + e.height) : n < i && r > a ? p = f >= d ? new Point(n + e.width, s - d * e.width / 2) : new Point(o + e.height / 2 * l / u, r) : n > i && r > a && (p = f >= d ? new Point(n, s - e.width / 2 * d) : new Point(o - e.height / 2 * l / u, r)), p;
}, "getIntersectPoint"), getIntersectPoints = /* @__PURE__ */ __name(function(e, t) {
	let n = {
		x: 0,
		y: 0
	};
	n.x = t.x + t.width / 2, n.y = t.y + t.height / 2;
	let r = getIntersectPoint(e, n);
	return n.x = e.x + e.width / 2, n.y = e.y + e.height / 2, {
		startPoint: r,
		endPoint: getIntersectPoint(t, n)
	};
}, "getIntersectPoints"), drawRels2 = /* @__PURE__ */ __name(function(e, t, n, i) {
	let a = 0;
	for (let e of t) {
		a += 1;
		let t = e.wrap && conf.wrap, o = messageFont(conf);
		i.db.getC4Type() === "C4Dynamic" && (e.label.text = a + ": " + e.label.text);
		let s = calculateTextWidth(e.label.text, o);
		calcC4ShapeTextWH("label", e, t, o, s), e.techn && e.techn.text !== "" && (s = calculateTextWidth(e.techn.text, o), calcC4ShapeTextWH("techn", e, t, o, s)), e.descr && e.descr.text !== "" && (s = calculateTextWidth(e.descr.text, o), calcC4ShapeTextWH("descr", e, t, o, s));
		let l = getIntersectPoints(n(e.from), n(e.to));
		e.startPoint = l.startPoint, e.endPoint = l.endPoint;
	}
	svgDraw_default.drawRels(e, t, conf);
}, "drawRels");
function drawInsideBoundary(e, t, n, r, i) {
	let a = new Bounds(i);
	a.data.widthLimit = n.data.widthLimit / Math.min(c4BoundaryInRow2, r.length);
	for (let [o, s] of r.entries()) {
		let r = 0;
		s.image = {
			width: 0,
			height: 0,
			Y: 0
		}, s.sprite && (s.image.width = 48, s.image.height = 48, s.image.Y = r, r = s.image.Y + s.image.height);
		let l = s.wrap && conf.wrap, u = boundaryFont(conf);
		if (u.fontSize += 2, u.fontWeight = "bold", calcC4ShapeTextWH("label", s, l, u, a.data.widthLimit), s.label.Y = r + 8, r = s.label.Y + s.label.height, s.type && s.type.text !== "" && (s.type.text = "[" + s.type.text + "]", calcC4ShapeTextWH("type", s, l, boundaryFont(conf), a.data.widthLimit), s.type.Y = r + 5, r = s.type.Y + s.type.height), s.descr && s.descr.text !== "") {
			let e = boundaryFont(conf);
			e.fontSize -= 2, calcC4ShapeTextWH("descr", s, l, e, a.data.widthLimit), s.descr.Y = r + 20, r = s.descr.Y + s.descr.height;
		}
		if (o == 0 || o % c4BoundaryInRow2 === 0) {
			let e = n.data.startx + conf.diagramMarginX, t = n.data.stopy + conf.diagramMarginY + r;
			a.setData(e, e, t, t);
		} else {
			let e = a.data.stopx === a.data.startx ? a.data.startx : a.data.stopx + conf.diagramMarginX, t = a.data.starty;
			a.setData(e, e, t, t);
		}
		a.name = s.alias;
		let d = i.db.getC4ShapeArray(s.alias), f = i.db.getC4ShapeKeys(s.alias);
		f.length > 0 && drawC4ShapeArray(a, e, d, f), t = s.alias;
		let p = i.db.getBoundaries(t);
		p.length > 0 && drawInsideBoundary(e, t, a, p, i), s.alias !== "global" && drawBoundary2(e, s, a), n.data.stopy = Math.max(a.data.stopy + conf.c4ShapeMargin, n.data.stopy), n.data.stopx = Math.max(a.data.stopx + conf.c4ShapeMargin, n.data.stopx), globalBoundaryMaxX = Math.max(globalBoundaryMaxX, n.data.stopx), globalBoundaryMaxY = Math.max(globalBoundaryMaxY, n.data.stopy);
	}
}
__name(drawInsideBoundary, "drawInsideBoundary");
var c4Renderer_default = {
	drawPersonOrSystemArray: drawC4ShapeArray,
	drawBoundary: drawBoundary2,
	setConf,
	draw: /* @__PURE__ */ __name(function(e, t, n, r) {
		conf = getConfig2().c4;
		let a = getConfig2().securityLevel, s;
		a === "sandbox" && (s = select_default("#i" + t));
		let l = select_default(a === "sandbox" ? s.nodes()[0].contentDocument.body : "body"), u = r.db;
		r.db.setWrap(conf.wrap), c4ShapeInRow2 = u.getC4ShapeInRow(), c4BoundaryInRow2 = u.getC4BoundaryInRow(), log.debug(`C:${JSON.stringify(conf, null, 2)}`);
		let p = a === "sandbox" ? l.select(`[id="${t}"]`) : select_default(`[id="${t}"]`);
		svgDraw_default.insertComputerIcon(p), svgDraw_default.insertDatabaseIcon(p), svgDraw_default.insertClockIcon(p);
		let m = new Bounds(r);
		m.setData(conf.diagramMarginX, conf.diagramMarginX, conf.diagramMarginY, conf.diagramMarginY), m.data.widthLimit = screen.availWidth, globalBoundaryMaxX = conf.diagramMarginX, globalBoundaryMaxY = conf.diagramMarginY;
		let h = r.db.getTitle();
		drawInsideBoundary(p, "", m, r.db.getBoundaries(""), r), svgDraw_default.insertArrowHead(p), svgDraw_default.insertArrowEnd(p), svgDraw_default.insertArrowCrossHead(p), svgDraw_default.insertArrowFilledHead(p), drawRels2(p, r.db.getRels(), r.db.getC4Shape, r), m.data.stopx = globalBoundaryMaxX, m.data.stopy = globalBoundaryMaxY;
		let g = m.data, _ = g.stopy - g.starty + 2 * conf.diagramMarginY, v = g.stopx - g.startx + 2 * conf.diagramMarginX;
		h && p.append("text").text(h).attr("x", (g.stopx - g.startx) / 2 - 4 * conf.diagramMarginX).attr("y", g.starty + conf.diagramMarginY), configureSvgSize(p, _, v, conf.useMaxWidth);
		let y = h ? 60 : 0;
		p.attr("viewBox", g.startx - conf.diagramMarginX + " -" + (conf.diagramMarginY + y) + " " + v + " " + (_ + y)), log.debug("models:", g);
	}, "draw")
}, diagram = {
	parser: c4Diagram_default,
	db: c4Db_default,
	renderer: c4Renderer_default,
	styles: /* @__PURE__ */ __name((e) => `.person {
    stroke: ${e.personBorder};
    fill: ${e.personBkg};
  }
`, "getStyles"),
	init: /* @__PURE__ */ __name(({ c4: e, wrap: t }) => {
		c4Renderer_default.setConf(e), c4Db_default.setWrap(t);
	}, "init")
};
export { diagram };

//# sourceMappingURL=c4Diagram-YG6GDRKO-dlOaWF1g.js.map