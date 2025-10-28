import { d as TreemapGeneratedModule, f as __name, g as createDefaultSharedCoreModule, h as createDefaultCoreModule, m as inject, n as AbstractMermaidValueConverter, p as EmptyFileSystem, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder } from "./chunk-FPAJGGOC-BlFh-ztF.js";
var TreemapTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "TreemapTokenBuilder");
	constructor() {
		super(["treemap"]);
	}
}, classDefRegex = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, TreemapValueConverter = class extends AbstractMermaidValueConverter {
	static #_ = __name(this, "TreemapValueConverter");
	runCustomConverter(e, d, f) {
		if (e.name === "NUMBER2") return parseFloat(d.replace(/,/g, ""));
		if (e.name === "SEPARATOR" || e.name === "STRING2") return d.substring(1, d.length - 1);
		if (e.name === "INDENTATION") return d.length;
		if (e.name === "ClassDef") {
			if (typeof d != "string") return d;
			let e = classDefRegex.exec(d);
			if (e) return {
				$type: "ClassDefStatement",
				className: e[1],
				styleText: e[2] || void 0
			};
		}
	}
};
function registerValidationChecks(e) {
	let d = e.validation.TreemapValidator, f = e.validation.ValidationRegistry;
	if (f) {
		let e = { Treemap: d.checkSingleRoot.bind(d) };
		f.register(e, d);
	}
}
__name(registerValidationChecks, "registerValidationChecks");
var TreemapValidator = class {
	static #_ = __name(this, "TreemapValidator");
	checkSingleRoot(e, d) {
		let f;
		for (let p of e.TreemapRows) p.item && (f === void 0 && p.indent === void 0 ? f = 0 : (p.indent === void 0 || f !== void 0 && f >= parseInt(p.indent, 10)) && d("error", "Multiple root nodes are not allowed in a treemap.", {
			node: p,
			property: "item"
		}));
	}
}, TreemapModule = {
	parser: {
		TokenBuilder: /* @__PURE__ */ __name(() => new TreemapTokenBuilder(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ __name(() => new TreemapValueConverter(), "ValueConverter")
	},
	validation: { TreemapValidator: /* @__PURE__ */ __name(() => new TreemapValidator(), "TreemapValidator") }
};
function createTreemapServices(d = EmptyFileSystem) {
	let m = inject(createDefaultSharedCoreModule(d), MermaidGeneratedSharedModule), h = inject(createDefaultCoreModule({ shared: m }), TreemapGeneratedModule, TreemapModule);
	return m.ServiceRegistry.register(h), registerValidationChecks(h), {
		shared: m,
		Treemap: h
	};
}
__name(createTreemapServices, "createTreemapServices");
export { createTreemapServices as n, TreemapModule as t };
