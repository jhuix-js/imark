import { a as GitGraphGeneratedModule, f as __name, g as createDefaultSharedCoreModule, h as createDefaultCoreModule, i as CommonValueConverter, m as inject, p as EmptyFileSystem, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder } from "./chunk-FPAJGGOC-DKLJwj0H.js";
var GitGraphTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "GitGraphTokenBuilder");
	constructor() {
		super(["gitGraph"]);
	}
}, GitGraphModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new GitGraphTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createGitGraphServices(l = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(l), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), GitGraphGeneratedModule, GitGraphModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		GitGraph: d
	};
}
__name(createGitGraphServices, "createGitGraphServices");
export { createGitGraphServices as n, GitGraphModule as t };

//# sourceMappingURL=chunk-S6J4BHB3-Bl6daM-q.js.map