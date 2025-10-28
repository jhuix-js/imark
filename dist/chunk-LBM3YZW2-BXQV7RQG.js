import { f as __name, g as createDefaultSharedCoreModule, h as createDefaultCoreModule, i as CommonValueConverter, m as inject, o as InfoGeneratedModule, p as EmptyFileSystem, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder } from "./chunk-FPAJGGOC-DKLJwj0H.js";
var InfoTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "InfoTokenBuilder");
	constructor() {
		super(["info", "showInfo"]);
	}
}, InfoModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new InfoTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createInfoServices(e = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(e), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), InfoGeneratedModule, InfoModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		Info: d
	};
}
__name(createInfoServices, "createInfoServices");
export { createInfoServices as n, InfoModule as t };

//# sourceMappingURL=chunk-LBM3YZW2-BXQV7RQG.js.map