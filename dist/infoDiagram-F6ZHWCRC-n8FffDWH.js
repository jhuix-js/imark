import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-BlFh-ztF.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./baseUniq-B8xWFlw1.js";
import "./basePickBy-BzM66dBW.js";
import "./isEmpty-D0b8WX4x.js";
import "./clone-DNjDWJNG.js";
import "./chunk-O7ZBX7Z2-CxVFMAjj.js";
import "./chunk-S6J4BHB3-BApfhtzd.js";
import "./chunk-LBM3YZW2-A3HnNQYy.js";
import "./chunk-76Q3JFCE-BL66QHsH.js";
import "./chunk-T53DSG4Q-BMK1VS9O.js";
import "./chunk-LHMN2FUI-Bkmti0z_.js";
import "./chunk-FWNWRKHM-Cr68sCBC.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { c as configureSvgSize } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import { t as parse } from "./mermaid-parser.core-DhVi83X6.js";
import { t as package_default } from "./chunk-KS23V3DP-BUEcBgmY.js";
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
