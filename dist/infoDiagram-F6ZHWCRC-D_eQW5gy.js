import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-DKLJwj0H.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./_baseUniq-C5UuzJkR.js";
import "./_basePickBy-CFV2cYVn.js";
import "./isEmpty-D0b8WX4x.js";
import "./clone-XSAL9Gay.js";
import "./chunk-O7ZBX7Z2-BynjpHJ9.js";
import "./chunk-S6J4BHB3-Bl6daM-q.js";
import "./chunk-LBM3YZW2-BXQV7RQG.js";
import "./chunk-76Q3JFCE-0-FCuiwI.js";
import "./chunk-T53DSG4Q-DdmotRud.js";
import "./chunk-LHMN2FUI-DISVAfch.js";
import "./chunk-FWNWRKHM-CPZKx51-.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { c as configureSvgSize } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import { t as parse } from "./mermaid-parser.core-D7DiBjb7.js";
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
