import { f as __name, g as createDefaultSharedCoreModule, h as createDefaultCoreModule, l as PieGeneratedModule, m as inject, n as AbstractMermaidValueConverter, p as EmptyFileSystem, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder } from "./chunk-FPAJGGOC-BlFh-ztF.js";
var PieTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "PieTokenBuilder");
	constructor() {
		super(["pie", "showData"]);
	}
}, PieValueConverter = class extends AbstractMermaidValueConverter {
	static #_ = __name(this, "PieValueConverter");
	runCustomConverter(e, l, u) {
		if (e.name === "PIE_SECTION_LABEL") return l.replace(/"/g, "").trim();
	}
}, PieModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new PieTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new PieValueConverter(), "ValueConverter")
} };
function createPieServices(e = EmptyFileSystem) {
	let d = inject(createDefaultSharedCoreModule(e), MermaidGeneratedSharedModule), f = inject(createDefaultCoreModule({ shared: d }), PieGeneratedModule, PieModule);
	return d.ServiceRegistry.register(f), {
		shared: d,
		Pie: f
	};
}
__name(createPieServices, "createPieServices");
export { createPieServices as n, PieModule as t };
