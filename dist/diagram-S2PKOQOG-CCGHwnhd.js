import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-DKLJwj0H.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./_baseUniq-C5UuzJkR.js";
import "./_basePickBy-CFV2cYVn.js";
import "./isEmpty-D0b8WX4x.js";
import { i as cleanAndMerge } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import "./clone-XSAL9Gay.js";
import "./chunk-O7ZBX7Z2-BynjpHJ9.js";
import "./chunk-S6J4BHB3-Bl6daM-q.js";
import "./chunk-LBM3YZW2-BXQV7RQG.js";
import "./chunk-76Q3JFCE-0-FCuiwI.js";
import "./chunk-T53DSG4Q-DdmotRud.js";
import "./chunk-LHMN2FUI-DISVAfch.js";
import "./chunk-FWNWRKHM-CPZKx51-.js";
import { i as log, r as __name } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, U as setDiagramTitle, _ as getAccDescription, a as clear, c as configureSvgSize, d as defaultConfig_default, v as getAccTitle, y as getConfig, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-CUheKjZU.js";
import { t as populateCommonDb } from "./chunk-4BX2VUAB-DbDv1R95.js";
import { t as parse } from "./mermaid-parser.core-D7DiBjb7.js";
var DEFAULT_PACKET_CONFIG = defaultConfig_default.packet, PacketDB = class {
	constructor() {
		this.packet = [], this.setAccTitle = setAccTitle, this.getAccTitle = getAccTitle, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.getAccDescription = getAccDescription, this.setAccDescription = setAccDescription;
	}
	static #_ = __name(this, "PacketDB");
	getConfig() {
		let d = cleanAndMerge({
			...DEFAULT_PACKET_CONFIG,
			...getConfig().packet
		});
		return d.showBits && (d.paddingY += 10), d;
	}
	getPacket() {
		return this.packet;
	}
	pushWord(e) {
		e.length > 0 && this.packet.push(e);
	}
	clear() {
		clear(), this.packet = [];
	}
}, maxPacketSize = 1e4, populate = /* @__PURE__ */ __name((e, f) => {
	populateCommonDb(e, f);
	let p = -1, m = [], h = 1, { bitsPerRow: g } = f.getConfig();
	for (let { start: _, end: v, bits: y, label: b } of e.blocks) {
		if (_ !== void 0 && v !== void 0 && v < _) throw Error(`Packet block ${_} - ${v} is invalid. End must be greater than start.`);
		if (_ ??= p + 1, _ !== p + 1) throw Error(`Packet block ${_} - ${v ?? _} is not contiguous. It should start from ${p + 1}.`);
		if (y === 0) throw Error(`Packet block ${_} is invalid. Cannot have a zero bit field.`);
		for (v ??= _ + (y ?? 1) - 1, y ??= v - _ + 1, p = v, log.debug(`Packet block ${_} - ${p} with label ${b}`); m.length <= g + 1 && f.getPacket().length < maxPacketSize;) {
			let [e, d] = getNextFittingBlock({
				start: _,
				end: v,
				bits: y,
				label: b
			}, h, g);
			if (m.push(e), e.end + 1 === h * g && (f.pushWord(m), m = [], h++), !d) break;
			({start: _, end: v, bits: y, label: b} = d);
		}
	}
	f.pushWord(m);
}, "populate"), getNextFittingBlock = /* @__PURE__ */ __name((e, d, f) => {
	if (e.start === void 0) throw Error("start should have been set during first phase");
	if (e.end === void 0) throw Error("end should have been set during first phase");
	if (e.start > e.end) throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);
	if (e.end + 1 <= d * f) return [e, void 0];
	let p = d * f - 1, m = d * f;
	return [{
		start: e.start,
		end: p,
		label: e.label,
		bits: p - e.start
	}, {
		start: m,
		end: e.end,
		label: e.label,
		bits: e.end - m
	}];
}, "getNextFittingBlock"), parser = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ __name(async (e) => {
		let f = await parse("packet", e), p = parser.parser?.yy;
		if (!(p instanceof PacketDB)) throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		log.debug(f), populate(f, p);
	}, "parse")
}, draw = /* @__PURE__ */ __name((e, d, f, p) => {
	let m = p.db, h = m.getConfig(), { rowHeight: g, paddingY: _, bitWidth: y, bitsPerRow: b } = h, x = m.getPacket(), S = m.getDiagramTitle(), C = g + _, w = C * (x.length + 1) - (S ? 0 : g), T = y * b + 2, E = selectSvgElement(d);
	E.attr("viewbox", `0 0 ${T} ${w}`), configureSvgSize(E, w, T, h.useMaxWidth);
	for (let [e, d] of x.entries()) drawWord(E, d, e, h);
	E.append("text").text(S).attr("x", T / 2).attr("y", w - C / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), drawWord = /* @__PURE__ */ __name((e, d, f, { rowHeight: p, paddingX: m, paddingY: h, bitWidth: g, bitsPerRow: _, showBits: v }) => {
	let y = e.append("g"), b = f * (p + h) + h;
	for (let e of d) {
		let d = e.start % _ * g + 1, f = (e.end - e.start + 1) * g - m;
		if (y.append("rect").attr("x", d).attr("y", b).attr("width", f).attr("height", p).attr("class", "packetBlock"), y.append("text").attr("x", d + f / 2).attr("y", b + p / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(e.label), !v) continue;
		let h = e.end === e.start, x = b - 2;
		y.append("text").attr("x", d + (h ? f / 2 : 0)).attr("y", x).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", h ? "middle" : "start").text(e.start), h || y.append("text").attr("x", d + f).attr("y", x).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(e.end);
	}
}, "drawWord"), renderer = { draw }, defaultPacketStyleOptions = {
	byteFontSize: "10px",
	startByteColor: "black",
	endByteColor: "black",
	labelColor: "black",
	labelFontSize: "12px",
	titleColor: "black",
	titleFontSize: "14px",
	blockStrokeColor: "black",
	blockStrokeWidth: "1",
	blockFillColor: "#efefef"
}, diagram = {
	parser,
	get db() {
		return new PacketDB();
	},
	renderer,
	styles: /* @__PURE__ */ __name(({ packet: d } = {}) => {
		let f = cleanAndMerge(defaultPacketStyleOptions, d);
		return `
	.packetByte {
		font-size: ${f.byteFontSize};
	}
	.packetByte.start {
		fill: ${f.startByteColor};
	}
	.packetByte.end {
		fill: ${f.endByteColor};
	}
	.packetLabel {
		fill: ${f.labelColor};
		font-size: ${f.labelFontSize};
	}
	.packetTitle {
		fill: ${f.titleColor};
		font-size: ${f.titleFontSize};
	}
	.packetBlock {
		stroke: ${f.blockStrokeColor};
		stroke-width: ${f.blockStrokeWidth};
		fill: ${f.blockFillColor};
	}
	`;
	}, "styles")
};
export { diagram };

//# sourceMappingURL=diagram-S2PKOQOG-CCGHwnhd.js.map