import { f as __name, g as createDefaultSharedCoreModule, h as createDefaultCoreModule, i as CommonValueConverter, m as inject, p as EmptyFileSystem, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, u as RadarGeneratedModule } from "./chunk-FPAJGGOC-DKLJwj0H.js";
var RadarTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "RadarTokenBuilder");
	constructor() {
		super(["radar-beta"]);
	}
}, RadarModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new RadarTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createRadarServices(e = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(e), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), RadarGeneratedModule, RadarModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		Radar: d
	};
}
__name(createRadarServices, "createRadarServices");
export { createRadarServices as n, RadarModule as t };
