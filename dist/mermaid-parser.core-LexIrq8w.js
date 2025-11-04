import { f as __name } from "./chunk-FPAJGGOC-CUqTR23j.js";
var parsers = {}, initializers = {
	info: /* @__PURE__ */ __name(async () => {
		let { createInfoServices: e } = await import("./info-NVLQJR56-CydcUoOW.js");
		parsers.info = e().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ __name(async () => {
		let { createPacketServices: e } = await import("./packet-BFZMPI3H--RswxXwh.js");
		parsers.packet = e().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ __name(async () => {
		let { createPieServices: e } = await import("./pie-7BOR55EZ-COFKsnj6.js");
		parsers.pie = e().Pie.parser.LangiumParser;
	}, "pie"),
	architecture: /* @__PURE__ */ __name(async () => {
		let { createArchitectureServices: e } = await import("./architecture-U656AL7Q-CR_agKJQ.js");
		parsers.architecture = e().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ __name(async () => {
		let { createGitGraphServices: e } = await import("./gitGraph-F6HP7TQM-DgTvTxC1.js");
		parsers.gitGraph = e().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	radar: /* @__PURE__ */ __name(async () => {
		let { createRadarServices: e } = await import("./radar-NHE76QYJ-BEtjC015.js");
		parsers.radar = e().Radar.parser.LangiumParser;
	}, "radar"),
	treemap: /* @__PURE__ */ __name(async () => {
		let { createTreemapServices: e } = await import("./treemap-KMMF4GRG-Bp5lCKao.js");
		parsers.treemap = e().Treemap.parser.LangiumParser;
	}, "treemap")
};
async function parse(e, i) {
	let a = initializers[e];
	if (!a) throw Error(`Unknown diagram type: ${e}`);
	parsers[e] || await a();
	let o = parsers[e].parse(i);
	if (o.lexerErrors.length > 0 || o.parserErrors.length > 0) throw new MermaidParseError(o);
	return o.value;
}
__name(parse, "parse");
var MermaidParseError = class extends Error {
	constructor(e) {
		let n = e.lexerErrors.map((e) => e.message).join("\n"), r = e.parserErrors.map((e) => e.message).join("\n");
		super(`Parsing failed: ${n} ${r}`), this.result = e;
	}
	static #e = __name(this, "MermaidParseError");
};
export { parse as t };
