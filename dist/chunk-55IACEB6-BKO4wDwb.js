import { r as __name, t as select_default } from "./src-B-gAGmo8.js";
var getDiagramElement = /* @__PURE__ */ __name((e, n) => {
	let r;
	return n === "sandbox" && (r = select_default("#i" + e)), select_default(n === "sandbox" ? r.nodes()[0].contentDocument.body : "body").select(`[id="${e}"]`);
}, "getDiagramElement");
export { getDiagramElement as t };
