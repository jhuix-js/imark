import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-CUqTR23j.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./baseUniq-B8xWFlw1.js";
import "./basePickBy-BzM66dBW.js";
import "./isEmpty-D0b8WX4x.js";
import "./clone-DNjDWJNG.js";
import "./chunk-O7ZBX7Z2-DkH2IB4v.js";
import "./chunk-S6J4BHB3-BuoZ2Y_X.js";
import "./chunk-LBM3YZW2-RQqDNIS5.js";
import "./chunk-76Q3JFCE-8whOOpEP.js";
import "./chunk-T53DSG4Q-DCHRTQe1.js";
import "./chunk-LHMN2FUI-B6i1C9xh.js";
import "./chunk-FWNWRKHM-hV0_BTJK.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { c as configureSvgSize } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import { t as parse } from "./mermaid-parser.core-LexIrq8w.js";
import { t as package_default } from "./chunk-6MN3ZHY7-DipI9FhF.js";
var parser = { parse: /* @__PURE__ */ __name(async (i) => {
	let a = await parse("info", i);
	log.debug(a);
}, "parse") }, DEFAULT_INFO_DB = { version: package_default.version + "" }, diagram = {
	parser,
	db: { getVersion: /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ __name((i, o, s) => {
		log.debug("rendering info diagram\n" + i);
		let c = selectSvgElement(o);
		configureSvgSize(c, 100, 400, !0), c.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${s}`);
	}, "draw") }
};
export { diagram };
