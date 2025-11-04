import "./dist-CoGdlYHY.js";
import "./isArrayLikeObject-DKHowMnG.js";
import { t as isEmpty_default } from "./isEmpty-D0b8WX4x.js";
import { a as decodeEntities, f as isDetailedError, g as utils_default, h as removeDirectives, i as cleanAndMerge, o as encodeEntities } from "./chunk-S3R3BYOJ-CMSxLKou.js";
import { a as setLogLevel, i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { J as themes_default, M as registerLazyLoadedDiagrams, P as reset, R as saveConfigFromInitialize, S as getDiagramLoader, V as setConfig, W as setSiteConfig, X as purify, Y as updateSiteConfig, c as configureSvgSize, f as detectType, g as frontMatterRegex, h as evaluate, j as registerDiagram, l as defaultConfig, n as addDirective, p as detectors, q as styles_default, r as assignWithDepth_default, t as UnknownDiagramError, w as getSiteConfig, x as getDiagram, y as getConfig } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./path-D7waZtl4.js";
import "./math-BN2TBOwX.js";
import "./array-BlABR2MP.js";
import "./step-DmjVsfVE.js";
import "./line-Cl_B2mnJ.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-h00w3lrS.js";
import { i as registerIconPacks, s as dedent } from "./chunk-JA3XYJ7Z-CCL57Eo5.js";
import "./chunk-HN2XXSSU-p3ji0EC3.js";
import "./chunk-CVBHYZKI-Cx9WXSzs.js";
import "./chunk-ATLVNIR6-DULmhiFu.js";
import "./chunk-JZLCHNYA-CQAmHRGq.js";
import "./chunk-QXUST7PY-Bv9fJ2zH.js";
import { n as registerLayoutLoaders } from "./chunk-N4CR4FBY-B_9wKuL9.js";
import { n as load, t as JSON_SCHEMA } from "./chunk-MI3HLSF2-DcxRTH2O.js";
import { t as package_default } from "./chunk-6MN3ZHY7-DipI9FhF.js";
var COMMENT = "comm", RULESET = "rule", DECLARATION = "decl", IMPORT = "@import", NAMESPACE = "@namespace", KEYFRAMES = "@keyframes", LAYER = "@layer", abs = Math.abs, from = String.fromCharCode;
function trim(e) {
	return e.trim();
}
function replace(e, S, C) {
	return e.replace(S, C);
}
function indexof(e, S, C) {
	return e.indexOf(S, C);
}
function charat(e, S) {
	return e.charCodeAt(S) | 0;
}
function substr(e, S, C) {
	return e.slice(S, C);
}
function strlen(e) {
	return e.length;
}
function sizeof(e) {
	return e.length;
}
function append(e, S) {
	return S.push(e), e;
}
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(e, S, C, w, T, E, D, O) {
	return {
		value: e,
		root: S,
		parent: C,
		type: w,
		props: T,
		children: E,
		line,
		column,
		length: D,
		return: "",
		siblings: O
	};
}
function char() {
	return character;
}
function prev() {
	return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
	return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
	return charat(characters, position);
}
function caret() {
	return position;
}
function slice(e, S) {
	return substr(characters, e, S);
}
function token(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function alloc(e) {
	return line = column = 1, length = strlen(characters = e), position = 0, [];
}
function dealloc(e) {
	return characters = "", e;
}
function delimit(e) {
	return trim(slice(position - 1, delimiter(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function whitespace(e) {
	for (; (character = peek()) && character < 33;) next();
	return token(e) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(e, S) {
	for (; --S && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97););
	return slice(e, caret() + (S < 6 && peek() == 32 && next() == 32));
}
function delimiter(e) {
	for (; next();) switch (character) {
		case e: return position;
		case 34:
		case 39:
			e !== 34 && e !== 39 && delimiter(character);
			break;
		case 40:
			e === 41 && delimiter(e);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
function commenter(e, S) {
	for (; next() && e + character !== 57 && !(e + character === 84 && peek() === 47););
	return "/*" + slice(S, position - 1) + "*" + from(e === 47 ? e : next());
}
function identifier(e) {
	for (; !token(peek());) next();
	return slice(e, position);
}
function compile(e) {
	return dealloc(parse$1("", null, null, null, [""], e = alloc(e), 0, [0], e));
}
function parse$1(e, S, C, w, T, E, D, O, k) {
	for (var A = 0, j = 0, M = D, N = 0, P = 0, F = 0, I = 1, L = 1, R = 1, z = 0, B = "", V = T, H = E, U = w, W = B; L;) switch (F = z, z = next()) {
		case 40: if (F != 108 && charat(W, M - 1) == 58) {
			indexof(W += replace(delimit(z), "&", "&\f"), "&\f", abs(A ? O[A - 1] : 0)) != -1 && (R = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			W += delimit(z);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			W += whitespace(F);
			break;
		case 92:
			W += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), S, C, k), k), (token(F || 1) == 5 || token(peek() || 1) == 5) && strlen(W) && substr(W, -1, void 0) !== " " && (W += " ");
					break;
				default: W += "/";
			}
			break;
		case 123 * I: O[A++] = strlen(W) * R;
		case 125 * I:
		case 59:
		case 0:
			switch (z) {
				case 0:
				case 125: L = 0;
				case 59 + j:
					R == -1 && (W = replace(W, /\f/g, "")), P > 0 && (strlen(W) - M || I === 0 && F === 47) && append(P > 32 ? declaration(W + ";", w, C, M - 1, k) : declaration(replace(W, " ", "") + ";", w, C, M - 2, k), k);
					break;
				case 59: W += ";";
				default: if (append(U = ruleset(W, S, C, A, j, T, O, B, V = [], H = [], M, E), E), z === 123) if (j === 0) parse$1(W, S, U, U, V, E, M, O, H);
				else {
					switch (N) {
						case 99: if (charat(W, 3) === 110) break;
						case 108: if (charat(W, 2) === 97) break;
						default: j = 0;
						case 100:
						case 109:
						case 115:
					}
					j ? parse$1(e, U, U, w && append(ruleset(e, U, U, 0, 0, T, O, B, T, V = [], M, H), H), T, H, M, O, w ? V : H) : parse$1(W, U, U, U, [""], H, 0, O, H);
				}
			}
			A = j = P = 0, I = R = 1, B = W = "", M = D;
			break;
		case 58: M = 1 + strlen(W), P = F;
		default:
			if (I < 1) {
				if (z == 123) --I;
				else if (z == 125 && I++ == 0 && prev() == 125) continue;
			}
			switch (W += from(z), z * I) {
				case 38:
					R = j > 0 ? 1 : (W += "\f", -1);
					break;
				case 44:
					O[A++] = (strlen(W) - 1) * R, R = 1;
					break;
				case 64:
					peek() === 45 && (W += delimit(next())), N = peek(), j = M = strlen(B = W += identifier(caret())), z++;
					break;
				case 45: F === 45 && strlen(W) == 2 && (I = 0);
			}
	}
	return E;
}
function ruleset(e, S, C, w, T, E, D, O, k, A, j, M) {
	for (var N = T - 1, P = T === 0 ? E : [""], F = sizeof(P), I = 0, L = 0, R = 0; I < w; ++I) for (var z = 0, B = substr(e, N + 1, N = abs(L = D[I])), V = e; z < F; ++z) (V = trim(L > 0 ? P[z] + " " + B : replace(B, /&\f/g, P[z]))) && (k[R++] = V);
	return node(e, S, C, T === 0 ? RULESET : O, k, A, j, M);
}
function comment(e, S, C, w) {
	return node(e, S, C, COMMENT, from(char()), substr(e, 2, -2), 0, w);
}
function declaration(e, S, C, w, T) {
	return node(e, S, C, DECLARATION, substr(e, 0, w), substr(e, w + 1, -1), w, T);
}
function serialize(e, S) {
	for (var C = "", w = 0; w < e.length; w++) C += S(e[w], w, e, S) || "";
	return C;
}
function stringify(e, S, C, w) {
	switch (e.type) {
		case LAYER: if (e.children.length) break;
		case IMPORT:
		case NAMESPACE:
		case DECLARATION: return e.return = e.return || e.value;
		case COMMENT: return "";
		case KEYFRAMES: return e.return = e.value + "{" + serialize(e.children, w) + "}";
		case RULESET: if (!strlen(e.value = e.props.join(","))) return "";
	}
	return strlen(C = serialize(e.children, w)) ? e.return = e.value + "{" + C + "}" : "";
}
var id = "c4", c4Detector_default = {
	id,
	detector: /* @__PURE__ */ __name((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./c4Diagram-YG6GDRKO-DCm4NNs-.js");
		return {
			id,
			diagram: e
		};
	}, "loader")
}, id2 = "flowchart", flowDetector_default = {
	id: id2,
	detector: /* @__PURE__ */ __name((e, S) => S?.flowchart?.defaultRenderer === "dagre-wrapper" || S?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./flowDiagram-NV44I4VS-B1CryNuf.js");
		return {
			id: id2,
			diagram: e
		};
	}, "loader")
}, id3 = "flowchart-v2", flowDetector_v2_default = {
	id: id3,
	detector: /* @__PURE__ */ __name((e, S) => S?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (S?.flowchart?.defaultRenderer === "elk" && (S.layout = "elk"), /^\s*graph/.test(e) && S?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./flowDiagram-NV44I4VS-B1CryNuf.js");
		return {
			id: id3,
			diagram: e
		};
	}, "loader")
}, id4 = "er", erDetector_default = {
	id: id4,
	detector: /* @__PURE__ */ __name((e) => /^\s*erDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./erDiagram-Q2GNP2WA-BIXaADt_.js");
		return {
			id: id4,
			diagram: e
		};
	}, "loader")
}, id5 = "gitGraph", gitGraphDetector_default = {
	id: id5,
	detector: /* @__PURE__ */ __name((e) => /^\s*gitGraph/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./gitGraphDiagram-NY62KEGX-CaRoHco0.js");
		return {
			id: id5,
			diagram: e
		};
	}, "loader")
}, id6 = "gantt", ganttDetector_default = {
	id: id6,
	detector: /* @__PURE__ */ __name((e) => /^\s*gantt/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./ganttDiagram-LVOFAZNH-BcUXcLsy.js");
		return {
			id: id6,
			diagram: e
		};
	}, "loader")
}, id7 = "info", info = {
	id: id7,
	detector: /* @__PURE__ */ __name((e) => /^\s*info/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./infoDiagram-ER5ION4S-Gs4J_V08.js");
		return {
			id: id7,
			diagram: e
		};
	}, "loader")
}, id8 = "pie", pie = {
	id: id8,
	detector: /* @__PURE__ */ __name((e) => /^\s*pie/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./pieDiagram-ADFJNKIX-DWbMdefm.js");
		return {
			id: id8,
			diagram: e
		};
	}, "loader")
}, id9 = "quadrantChart", quadrantDetector_default = {
	id: id9,
	detector: /* @__PURE__ */ __name((e) => /^\s*quadrantChart/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./quadrantDiagram-AYHSOK5B-DKFIW9lt.js");
		return {
			id: id9,
			diagram: e
		};
	}, "loader")
}, id10 = "xychart", xychartDetector_default = {
	id: id10,
	detector: /* @__PURE__ */ __name((e) => /^\s*xychart(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./xychartDiagram-PRI3JC2R-zFb_00M4.js");
		return {
			id: id10,
			diagram: e
		};
	}, "loader")
}, id11 = "requirement", requirementDetector_default = {
	id: id11,
	detector: /* @__PURE__ */ __name((e) => /^\s*requirement(Diagram)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./requirementDiagram-UZGBJVZJ-IQGsmWUA.js");
		return {
			id: id11,
			diagram: e
		};
	}, "loader")
}, id12 = "sequence", sequenceDetector_default = {
	id: id12,
	detector: /* @__PURE__ */ __name((e) => /^\s*sequenceDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./sequenceDiagram-WL72ISMW-CHNx-yso.js");
		return {
			id: id12,
			diagram: e
		};
	}, "loader")
}, id13 = "class", classDetector_default = {
	id: id13,
	detector: /* @__PURE__ */ __name((e, S) => S?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./classDiagram-2ON5EDUG-6eVKpX4i.js");
		return {
			id: id13,
			diagram: e
		};
	}, "loader")
}, id14 = "classDiagram", classDetector_V2_default = {
	id: id14,
	detector: /* @__PURE__ */ __name((e, S) => /^\s*classDiagram/.test(e) && S?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./classDiagram-v2-WZHVMYZB-moYjWxJa.js");
		return {
			id: id14,
			diagram: e
		};
	}, "loader")
}, id15 = "state", stateDetector_default = {
	id: id15,
	detector: /* @__PURE__ */ __name((e, S) => S?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./stateDiagram-FKZM4ZOC-DIHnAgaG.js");
		return {
			id: id15,
			diagram: e
		};
	}, "loader")
}, id16 = "stateDiagram", stateDetector_V2_default = {
	id: id16,
	detector: /* @__PURE__ */ __name((e, S) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && S?.state?.defaultRenderer === "dagre-wrapper"), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./stateDiagram-v2-4FDKWEC3-DSJrYFrE.js");
		return {
			id: id16,
			diagram: e
		};
	}, "loader")
}, id17 = "journey", journeyDetector_default = {
	id: id17,
	detector: /* @__PURE__ */ __name((e) => /^\s*journey/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./journeyDiagram-XKPGCS4Q-Bx6COsk_.js");
		return {
			id: id17,
			diagram: e
		};
	}, "loader")
}, renderer = { draw: /* @__PURE__ */ __name((e, S, C) => {
	log.debug("rendering svg for syntax error\n");
	let w = selectSvgElement(S), T = w.append("g");
	w.attr("viewBox", "0 0 2412 512"), configureSvgSize(w, 100, 512, !0), T.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), T.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), T.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), T.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), T.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), T.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), T.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), T.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${C}`);
}, "draw") }, errorRenderer_default = renderer, errorDiagram_default = {
	db: {},
	renderer,
	parser: { parse: /* @__PURE__ */ __name(() => {}, "parse") }
}, id18 = "flowchart-elk", detector_default = {
	id: id18,
	detector: /* @__PURE__ */ __name((e, S = {}) => /^\s*flowchart-elk/.test(e) || /^\s*(flowchart|graph)/.test(e) && S?.flowchart?.defaultRenderer === "elk" ? (S.layout = "elk", !0) : !1, "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./flowDiagram-NV44I4VS-B1CryNuf.js");
		return {
			id: id18,
			diagram: e
		};
	}, "loader")
}, id19 = "timeline", detector_default2 = {
	id: id19,
	detector: /* @__PURE__ */ __name((e) => /^\s*timeline/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./timeline-definition-IT6M3QCI-Dach8vBl.js");
		return {
			id: id19,
			diagram: e
		};
	}, "loader")
}, id20 = "mindmap", detector_default3 = {
	id: id20,
	detector: /* @__PURE__ */ __name((e) => /^\s*mindmap/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./mindmap-definition-VGOIOE7T-jXOfyiot.js");
		return {
			id: id20,
			diagram: e
		};
	}, "loader")
}, id21 = "kanban", detector_default4 = {
	id: id21,
	detector: /* @__PURE__ */ __name((e) => /^\s*kanban/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./kanban-definition-3W4ZIXB7-CL_Mlt2T.js");
		return {
			id: id21,
			diagram: e
		};
	}, "loader")
}, id22 = "sankey", sankeyDetector_default = {
	id: id22,
	detector: /* @__PURE__ */ __name((e) => /^\s*sankey(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./sankeyDiagram-TZEHDZUN-DFlixj-V.js");
		return {
			id: id22,
			diagram: e
		};
	}, "loader")
}, id23 = "packet", packet = {
	id: id23,
	detector: /* @__PURE__ */ __name((e) => /^\s*packet(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-S2PKOQOG-Qp-S3ini.js");
		return {
			id: id23,
			diagram: e
		};
	}, "loader")
}, id24 = "radar", radar = {
	id: id24,
	detector: /* @__PURE__ */ __name((e) => /^\s*radar-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-QEK2KX5R-CwzhyjmE.js");
		return {
			id: id24,
			diagram: e
		};
	}, "loader")
}, id25 = "block", blockDetector_default = {
	id: id25,
	detector: /* @__PURE__ */ __name((e) => /^\s*block(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./blockDiagram-VD42YOAC-B-bFMgBp.js");
		return {
			id: id25,
			diagram: e
		};
	}, "loader")
}, id26 = "architecture", architectureDetector_default = {
	id: id26,
	detector: /* @__PURE__ */ __name((e) => /^\s*architecture/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./architectureDiagram-VXUJARFQ-DtgsYzzv.js");
		return {
			id: id26,
			diagram: e
		};
	}, "loader")
}, id27 = "treemap", treemap = {
	id: id27,
	detector: /* @__PURE__ */ __name((e) => /^\s*treemap/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-PSM6KHXK-m8RJ-kc6.js");
		return {
			id: id27,
			diagram: e
		};
	}, "loader")
}, hasLoadedDiagrams = !1, addDiagrams = /* @__PURE__ */ __name(() => {
	hasLoadedDiagrams || (hasLoadedDiagrams = !0, registerDiagram("error", errorDiagram_default, (e) => e.toLowerCase().trim() === "error"), registerDiagram("---", {
		db: { clear: /* @__PURE__ */ __name(() => {}, "clear") },
		styles: {},
		renderer: { draw: /* @__PURE__ */ __name(() => {}, "draw") },
		parser: { parse: /* @__PURE__ */ __name(() => {
			throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
		}, "parse") },
		init: /* @__PURE__ */ __name(() => null, "init")
	}, (e) => e.toLowerCase().trimStart().startsWith("---")), registerLazyLoadedDiagrams(detector_default, detector_default3, architectureDetector_default), registerLazyLoadedDiagrams(c4Detector_default, detector_default4, classDetector_V2_default, classDetector_default, erDetector_default, ganttDetector_default, info, pie, requirementDetector_default, sequenceDetector_default, flowDetector_v2_default, flowDetector_default, detector_default2, gitGraphDetector_default, stateDetector_V2_default, stateDetector_default, journeyDetector_default, quadrantDetector_default, sankeyDetector_default, packet, xychartDetector_default, blockDetector_default, radar, treemap));
}, "addDiagrams"), loadRegisteredDiagrams = /* @__PURE__ */ __name(async () => {
	log.debug("Loading registered diagrams");
	let e = (await Promise.allSettled(Object.entries(detectors).map(async ([e, { detector: S, loader: C }]) => {
		if (C) try {
			getDiagram(e);
		} catch {
			try {
				let { diagram: e, id: w } = await C();
				registerDiagram(w, e, S);
			} catch (S) {
				throw log.error(`Failed to load external diagram with key ${e}. Removing from detectors.`), delete detectors[e], S;
			}
		}
	}))).filter((e) => e.status === "rejected");
	if (e.length > 0) {
		log.error(`Failed to load ${e.length} external diagrams`);
		for (let S of e) log.error(S);
		throw Error(`Failed to load ${e.length} external diagrams`);
	}
}, "loadRegisteredDiagrams"), SVG_ROLE = "graphics-document document";
function setA11yDiagramInfo(e, S) {
	e.attr("role", SVG_ROLE), S !== "" && e.attr("aria-roledescription", S);
}
__name(setA11yDiagramInfo, "setA11yDiagramInfo");
function addSVGa11yTitleDescription(e, S, C, w) {
	if (e.insert !== void 0) {
		if (C) {
			let S = `chart-desc-${w}`;
			e.attr("aria-describedby", S), e.insert("desc", ":first-child").attr("id", S).text(C);
		}
		if (S) {
			let C = `chart-title-${w}`;
			e.attr("aria-labelledby", C), e.insert("title", ":first-child").attr("id", C).text(S);
		}
	}
}
__name(addSVGa11yTitleDescription, "addSVGa11yTitleDescription");
var Diagram = class e {
	constructor(e, S, C, w, T) {
		this.type = e, this.text = S, this.db = C, this.parser = w, this.renderer = T;
	}
	static #e = __name(this, "Diagram");
	static async fromText(S, C = {}) {
		let w = getConfig(), T = detectType(S, w);
		S = encodeEntities(S) + "\n";
		try {
			getDiagram(T);
		} catch {
			let e = getDiagramLoader(T);
			if (!e) throw new UnknownDiagramError(`Diagram ${T} not found.`);
			let { id: S, diagram: C } = await e();
			registerDiagram(S, C);
		}
		let { db: E, parser: O, renderer: k, init: A } = getDiagram(T);
		return O.parser && (O.parser.yy = E), E.clear?.(), A?.(w), C.title && E.setDiagramTitle?.(C.title), await O.parse(S), new e(T, S, E, O, k);
	}
	async render(e, S) {
		await this.renderer.draw(this.text, e, S, this);
	}
	getParser() {
		return this.parser;
	}
	getType() {
		return this.type;
	}
}, interactionFunctions = [], attachFunctions = /* @__PURE__ */ __name(() => {
	interactionFunctions.forEach((e) => {
		e();
	}), interactionFunctions = [];
}, "attachFunctions"), cleanupComments = /* @__PURE__ */ __name((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function extractFrontMatter(e) {
	let S = e.match(frontMatterRegex);
	if (!S) return {
		text: e,
		metadata: {}
	};
	let C = load(S[1], { schema: JSON_SCHEMA }) ?? {};
	C = typeof C == "object" && !Array.isArray(C) ? C : {};
	let w = {};
	return C.displayMode && (w.displayMode = C.displayMode.toString()), C.title && (w.title = C.title.toString()), C.config && (w.config = C.config), {
		text: e.slice(S[0].length),
		metadata: w
	};
}
__name(extractFrontMatter, "extractFrontMatter");
var cleanupText = /* @__PURE__ */ __name((e) => e.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (e, S, C) => "<" + S + C.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), processFrontmatter = /* @__PURE__ */ __name((e) => {
	let { text: S, metadata: C } = extractFrontMatter(e), { displayMode: w, title: T, config: E = {} } = C;
	return w && (E.gantt ||= {}, E.gantt.displayMode = w), {
		title: T,
		config: E,
		text: S
	};
}, "processFrontmatter"), processDirectives = /* @__PURE__ */ __name((e) => {
	let S = utils_default.detectInit(e) ?? {}, C = utils_default.detectDirective(e, "wrap");
	return Array.isArray(C) ? S.wrap = C.some(({ type: e }) => e === "wrap") : C?.type === "wrap" && (S.wrap = !0), {
		text: removeDirectives(e),
		directive: S
	};
}, "processDirectives");
function preprocessDiagram(e) {
	let S = processFrontmatter(cleanupText(e)), C = processDirectives(S.text), w = cleanAndMerge(S.config, C.directive);
	return e = cleanupComments(C.text), {
		code: e,
		title: S.title,
		config: w
	};
}
__name(preprocessDiagram, "preprocessDiagram");
function toBase64(e) {
	let S = new TextEncoder().encode(e), C = Array.from(S, (e) => String.fromCodePoint(e)).join("");
	return btoa(C);
}
__name(toBase64, "toBase64");
var MAX_TEXTLENGTH = 5e4, MAX_TEXTLENGTH_EXCEEDED_MSG = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", SECURITY_LVL_SANDBOX = "sandbox", SECURITY_LVL_LOOSE = "loose", XMLNS_SVG_STD = "http://www.w3.org/2000/svg", XMLNS_XLINK_STD = "http://www.w3.org/1999/xlink", XMLNS_XHTML_STD = "http://www.w3.org/1999/xhtml", IFRAME_WIDTH = "100%", IFRAME_HEIGHT = "100%", IFRAME_STYLES = "border:0;margin:0;", IFRAME_BODY_STYLE = "margin:0", IFRAME_SANDBOX_OPTS = "allow-top-navigation-by-user-activation allow-popups", IFRAME_NOT_SUPPORTED_MSG = "The \"iframe\" tag is not supported by your browser.", DOMPURIFY_TAGS = ["foreignobject"], DOMPURIFY_ATTR = ["dominant-baseline"];
function processAndSetConfigs(e) {
	let S = preprocessDiagram(e);
	return reset(), addDirective(S.config ?? {}), S;
}
__name(processAndSetConfigs, "processAndSetConfigs");
async function parse(e, S) {
	addDiagrams();
	try {
		let { code: S, config: C } = processAndSetConfigs(e);
		return {
			diagramType: (await getDiagramFromText(S)).type,
			config: C
		};
	} catch (e) {
		if (S?.suppressErrors) return !1;
		throw e;
	}
}
__name(parse, "parse");
var cssImportantStyles = /* @__PURE__ */ __name((e, S, C = []) => `
.${e} ${S} { ${C.join(" !important; ")} !important; }`, "cssImportantStyles"), createCssStyles = /* @__PURE__ */ __name((S, C = /* @__PURE__ */ new Map()) => {
	let w = "";
	if (S.themeCSS !== void 0 && (w += `
${S.themeCSS}`), S.fontFamily !== void 0 && (w += `
:root { --mermaid-font-family: ${S.fontFamily}}`), S.altFontFamily !== void 0 && (w += `
:root { --mermaid-alt-font-family: ${S.altFontFamily}}`), C instanceof Map) {
		let T = S.htmlLabels ?? S.flowchart?.htmlLabels ? ["> *", "span"] : [
			"rect",
			"polygon",
			"ellipse",
			"circle",
			"path"
		];
		C.forEach((S) => {
			isEmpty_default(S.styles) || T.forEach((e) => {
				w += cssImportantStyles(S.id, e, S.styles);
			}), isEmpty_default(S.textStyles) || (w += cssImportantStyles(S.id, "tspan", (S?.textStyles || []).map((e) => e.replace("color", "fill"))));
		});
	}
	return w;
}, "createCssStyles"), createUserStyles = /* @__PURE__ */ __name((e, S, C, w) => serialize(compile(`${w}{${styles_default(S, createCssStyles(e, C), e.themeVariables)}}`), stringify), "createUserStyles"), cleanUpSvgCode = /* @__PURE__ */ __name((e = "", C, w) => {
	let T = e;
	return !w && !C && (T = T.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#")), T = decodeEntities(T), T = T.replace(/<br>/g, "<br/>"), T;
}, "cleanUpSvgCode"), putIntoIFrame = /* @__PURE__ */ __name((e = "", S) => `<iframe style="width:${IFRAME_WIDTH};height:${S?.viewBox?.baseVal?.height ? S.viewBox.baseVal.height + "px" : IFRAME_HEIGHT};${IFRAME_STYLES}" src="data:text/html;charset=UTF-8;base64,${toBase64(`<body style="${IFRAME_BODY_STYLE}">${e}</body>`)}" sandbox="${IFRAME_SANDBOX_OPTS}">
  ${IFRAME_NOT_SUPPORTED_MSG}
</iframe>`, "putIntoIFrame"), appendDivSvgG = /* @__PURE__ */ __name((e, S, C, w, T) => {
	let E = e.append("div");
	E.attr("id", C), w && E.attr("style", w);
	let D = E.append("svg").attr("id", S).attr("width", "100%").attr("xmlns", XMLNS_SVG_STD);
	return T && D.attr("xmlns:xlink", T), D.append("g"), e;
}, "appendDivSvgG");
function sandboxedIframe(e, S) {
	return e.append("iframe").attr("id", S).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
__name(sandboxedIframe, "sandboxedIframe");
var removeExistingElements = /* @__PURE__ */ __name((e, S, C, w) => {
	e.getElementById(S)?.remove(), e.getElementById(C)?.remove(), e.getElementById(w)?.remove();
}, "removeExistingElements"), render = /* @__PURE__ */ __name(async function(e, S, C) {
	addDiagrams();
	let w = processAndSetConfigs(S);
	S = w.code;
	let T = getConfig();
	log.debug(T), S.length > (T?.maxTextSize ?? MAX_TEXTLENGTH) && (S = MAX_TEXTLENGTH_EXCEEDED_MSG);
	let E = "#" + e, D = "i" + e, O = "#" + D, M = "d" + e, N = "#" + M, P = /* @__PURE__ */ __name(() => {
		let e = select_default(I ? O : N).node();
		e && "remove" in e && e.remove();
	}, "removeTempElements"), F = select_default("body"), I = T.securityLevel === SECURITY_LVL_SANDBOX, L = T.securityLevel === SECURITY_LVL_LOOSE, R = T.fontFamily;
	C === void 0 ? (removeExistingElements(document, e, M, D), I ? (F = select_default(sandboxedIframe(select_default("body"), D).nodes()[0].contentDocument.body), F.node().style.margin = 0) : F = select_default("body"), appendDivSvgG(F, e, M)) : (C && (C.innerHTML = ""), I ? (F = select_default(sandboxedIframe(select_default(C), D).nodes()[0].contentDocument.body), F.node().style.margin = 0) : F = select_default(C), appendDivSvgG(F, e, M, `font-family: ${R}`, XMLNS_XLINK_STD));
	let B, V;
	try {
		B = await Diagram.fromText(S, { title: w.title });
	} catch (e) {
		if (T.suppressErrorRendering) throw P(), e;
		B = await Diagram.fromText("error"), V = e;
	}
	let H = F.select(N).node(), U = B.type, G = H.firstChild, K = G.firstChild, q = B.renderer.getClasses?.(S, B), J = createUserStyles(T, U, q, E), Y = document.createElement("style");
	Y.innerHTML = J, G.insertBefore(Y, K);
	try {
		await B.renderer.draw(S, e, package_default.version, B);
	} catch (C) {
		throw T.suppressErrorRendering ? P() : errorRenderer_default.draw(S, e, package_default.version), C;
	}
	let X = F.select(`${N} svg`), Z = B.db.getAccTitle?.(), Q = B.db.getAccDescription?.();
	addA11yInfo(U, X, Z, Q), F.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", XMLNS_XHTML_STD);
	let $ = F.select(N).node().innerHTML;
	if (log.debug("config.arrowMarkerAbsolute", T.arrowMarkerAbsolute), $ = cleanUpSvgCode($, I, evaluate(T.arrowMarkerAbsolute)), I) {
		let e = F.select(N + " svg").node();
		$ = putIntoIFrame($, e);
	} else L || ($ = purify.sanitize($, {
		ADD_TAGS: DOMPURIFY_TAGS,
		ADD_ATTR: DOMPURIFY_ATTR,
		HTML_INTEGRATION_POINTS: { foreignobject: !0 }
	}));
	if (attachFunctions(), V) throw V;
	return P(), {
		diagramType: U,
		svg: $,
		bindFunctions: B.db.bindFunctions
	};
}, "render");
function initialize(e = {}) {
	let S = assignWithDepth_default({}, e);
	S?.fontFamily && !S.themeVariables?.fontFamily && (S.themeVariables ||= {}, S.themeVariables.fontFamily = S.fontFamily), saveConfigFromInitialize(S), S?.theme && S.theme in themes_default ? S.themeVariables = themes_default[S.theme].getThemeVariables(S.themeVariables) : S && (S.themeVariables = themes_default.default.getThemeVariables(S.themeVariables)), setLogLevel((typeof S == "object" ? setSiteConfig(S) : getSiteConfig()).logLevel), addDiagrams();
}
__name(initialize, "initialize");
var getDiagramFromText = /* @__PURE__ */ __name((e, S = {}) => {
	let { code: C } = preprocessDiagram(e);
	return Diagram.fromText(C, S);
}, "getDiagramFromText");
function addA11yInfo(e, S, C, w) {
	setA11yDiagramInfo(S, e), addSVGa11yTitleDescription(S, C, w, S.attr("id"));
}
__name(addA11yInfo, "addA11yInfo");
var mermaidAPI = Object.freeze({
	render,
	parse,
	getDiagramFromText,
	initialize,
	getConfig,
	setConfig,
	getSiteConfig,
	updateSiteConfig,
	reset: /* @__PURE__ */ __name(() => {
		reset();
	}, "reset"),
	globalReset: /* @__PURE__ */ __name(() => {
		reset(defaultConfig);
	}, "globalReset"),
	defaultConfig
});
setLogLevel(getConfig().logLevel), reset(getConfig());
var handleError = /* @__PURE__ */ __name((e, S, w) => {
	log.warn(e), isDetailedError(e) ? (w && w(e.str, e.hash), S.push({
		...e,
		message: e.str,
		error: e
	})) : (w && w(e), e instanceof Error && S.push({
		str: e.message,
		message: e.message,
		hash: e.name,
		error: e
	}));
}, "handleError"), run = /* @__PURE__ */ __name(async function(e = { querySelector: ".mermaid" }) {
	try {
		await runThrowsErrors(e);
	} catch (S) {
		if (isDetailedError(S) && log.error(S.str), mermaid.parseError && mermaid.parseError(S), !e.suppressErrors) throw log.error("Use the suppressErrors option to suppress these errors"), S;
	}
}, "run"), runThrowsErrors = /* @__PURE__ */ __name(async function({ postRenderCallback: e, querySelector: S, nodes: C } = { querySelector: ".mermaid" }) {
	let T = mermaidAPI.getConfig();
	log.debug(`${e ? "" : "No "}Callback function found`);
	let E;
	if (C) E = C;
	else if (S) E = document.querySelectorAll(S);
	else throw Error("Nodes and querySelector are both undefined");
	log.debug(`Found ${E.length} diagrams`), T?.startOnLoad !== void 0 && (log.debug("Start On Load: " + T?.startOnLoad), mermaidAPI.updateSiteConfig({ startOnLoad: T?.startOnLoad }));
	let D = new utils_default.InitIDGenerator(T.deterministicIds, T.deterministicIDSeed), O, A = [];
	for (let S of Array.from(E)) {
		if (log.info("Rendering diagram: " + S.id), S.getAttribute("data-processed")) continue;
		S.setAttribute("data-processed", "true");
		let C = `mermaid-${D.next()}`;
		O = S.innerHTML, O = dedent(utils_default.entityDecode(O)).trim().replace(/<br\s*\/?>/gi, "<br/>");
		let T = utils_default.detectInit(O);
		T && log.debug("Detected early reinit: ", T);
		try {
			let { svg: w, bindFunctions: T } = await render2(C, O, S);
			S.innerHTML = w, e && await e(C), T && T(S);
		} catch (e) {
			handleError(e, A, mermaid.parseError);
		}
	}
	if (A.length > 0) throw A[0];
}, "runThrowsErrors"), initialize2 = /* @__PURE__ */ __name(function(e) {
	mermaidAPI.initialize(e);
}, "initialize"), init = /* @__PURE__ */ __name(async function(e, S, C) {
	log.warn("mermaid.init is deprecated. Please use run instead."), e && initialize2(e);
	let w = {
		postRenderCallback: C,
		querySelector: ".mermaid"
	};
	typeof S == "string" ? w.querySelector = S : S && (S instanceof HTMLElement ? w.nodes = [S] : w.nodes = S), await run(w);
}, "init"), registerExternalDiagrams = /* @__PURE__ */ __name(async (e, { lazyLoad: S = !0 } = {}) => {
	addDiagrams(), registerLazyLoadedDiagrams(...e), S === !1 && await loadRegisteredDiagrams();
}, "registerExternalDiagrams"), contentLoaded = /* @__PURE__ */ __name(function() {
	if (mermaid.startOnLoad) {
		let { startOnLoad: e } = mermaidAPI.getConfig();
		e && mermaid.run().catch((e) => log.error("Mermaid failed to initialize", e));
	}
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", contentLoaded, !1);
var setParseErrorHandler = /* @__PURE__ */ __name(function(e) {
	mermaid.parseError = e;
}, "setParseErrorHandler"), executionQueue = [], executionQueueRunning = !1, executeQueue = /* @__PURE__ */ __name(async () => {
	if (!executionQueueRunning) {
		for (executionQueueRunning = !0; executionQueue.length > 0;) {
			let e = executionQueue.shift();
			if (e) try {
				await e();
			} catch (e) {
				log.error("Error executing queue", e);
			}
		}
		executionQueueRunning = !1;
	}
}, "executeQueue"), parse2 = /* @__PURE__ */ __name(async (e, S) => new Promise((C, w) => {
	let T = /* @__PURE__ */ __name(() => new Promise((T, E) => {
		mermaidAPI.parse(e, S).then((e) => {
			T(e), C(e);
		}, (e) => {
			log.error("Error parsing", e), mermaid.parseError?.(e), E(e), w(e);
		});
	}), "performCall");
	executionQueue.push(T), executeQueue().catch(w);
}), "parse"), render2 = /* @__PURE__ */ __name((e, S, C) => new Promise((w, T) => {
	let E = /* @__PURE__ */ __name(() => new Promise((E, D) => {
		mermaidAPI.render(e, S, C).then((e) => {
			E(e), w(e);
		}, (e) => {
			log.error("Error parsing", e), mermaid.parseError?.(e), D(e), T(e);
		});
	}), "performCall");
	executionQueue.push(E), executeQueue().catch(T);
}), "render"), mermaid = {
	startOnLoad: !0,
	mermaidAPI,
	parse: parse2,
	render: render2,
	init,
	run,
	registerExternalDiagrams,
	registerLayoutLoaders,
	initialize: initialize2,
	parseError: void 0,
	contentLoaded,
	setParseErrorHandler,
	detectType,
	registerIconPacks,
	getRegisteredDiagramsMetadata: /* @__PURE__ */ __name(() => Object.keys(detectors).map((e) => ({ id: e })), "getRegisteredDiagramsMetadata")
}, mermaid_default = mermaid;
/*! Check if previously processed */
/*!
* Wait for document loaded before starting the execution
*/
export { mermaid_default as default };
