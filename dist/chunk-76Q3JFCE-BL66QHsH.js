import { c as PacketGeneratedModule, f as __name, g as createDefaultSharedCoreModule, h as createDefaultCoreModule, i as CommonValueConverter, m as inject, p as EmptyFileSystem, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder } from "./chunk-FPAJGGOC-BlFh-ztF.js";
var PacketTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "PacketTokenBuilder");
	constructor() {
		super(["packet"]);
	}
}, PacketModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new PacketTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createPacketServices(l = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(l), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), PacketGeneratedModule, PacketModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		Packet: d
	};
}
__name(createPacketServices, "createPacketServices");
export { createPacketServices as n, PacketModule as t };
