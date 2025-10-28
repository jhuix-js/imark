import { f as __name, g as createDefaultSharedCoreModule, h as createDefaultCoreModule, m as inject, n as AbstractMermaidValueConverter, p as EmptyFileSystem, r as ArchitectureGeneratedModule, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder } from "./chunk-FPAJGGOC-DKLJwj0H.js";
var ArchitectureTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "ArchitectureTokenBuilder");
	constructor() {
		super(["architecture"]);
	}
}, ArchitectureValueConverter = class extends AbstractMermaidValueConverter {
	static #_ = __name(this, "ArchitectureValueConverter");
	runCustomConverter(e, l, u) {
		if (e.name === "ARCH_ICON") return l.replace(/[()]/g, "").trim();
		if (e.name === "ARCH_TEXT_ICON") return l.replace(/["()]/g, "");
		if (e.name === "ARCH_TITLE") return l.replace(/[[\]]/g, "").trim();
	}
}, ArchitectureModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new ArchitectureTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new ArchitectureValueConverter(), "ValueConverter")
} };
function createArchitectureServices(e = EmptyFileSystem) {
	let d = inject(createDefaultSharedCoreModule(e), MermaidGeneratedSharedModule), f = inject(createDefaultCoreModule({ shared: d }), ArchitectureGeneratedModule, ArchitectureModule);
	return d.ServiceRegistry.register(f), {
		shared: d,
		Architecture: f
	};
}
__name(createArchitectureServices, "createArchitectureServices");
export { createArchitectureServices as n, ArchitectureModule as t };
