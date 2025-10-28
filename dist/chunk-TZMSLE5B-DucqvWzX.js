import { s as __toESM } from "./chunk-DgPTj83v.js";
import { r as __name } from "./src-B-gAGmo8.js";
import { k as lineBreakRegex } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { t as require_dist } from "./dist-CUheKjZU.js";
var import_dist = /* @__PURE__ */ __toESM(require_dist(), 1), drawRect = /* @__PURE__ */ __name((e, o) => {
	let s = e.append("rect");
	if (s.attr("x", o.x), s.attr("y", o.y), s.attr("fill", o.fill), s.attr("stroke", o.stroke), s.attr("width", o.width), s.attr("height", o.height), o.name && s.attr("name", o.name), o.rx && s.attr("rx", o.rx), o.ry && s.attr("ry", o.ry), o.attrs !== void 0) for (let e in o.attrs) s.attr(e, o.attrs[e]);
	return o.class && s.attr("class", o.class), s;
}, "drawRect"), drawBackgroundRect = /* @__PURE__ */ __name((e, o) => {
	drawRect(e, {
		x: o.startx,
		y: o.starty,
		width: o.stopx - o.startx,
		height: o.stopy - o.starty,
		fill: o.fill,
		stroke: o.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), drawText = /* @__PURE__ */ __name((e, o) => {
	let c = o.text.replace(lineBreakRegex, " "), l = e.append("text");
	l.attr("x", o.x), l.attr("y", o.y), l.attr("class", "legend"), l.style("text-anchor", o.anchor), o.class && l.attr("class", o.class);
	let u = l.append("tspan");
	return u.attr("x", o.x + o.textMargin * 2), u.text(c), l;
}, "drawText"), drawImage = /* @__PURE__ */ __name((e, o, s, c) => {
	let u = e.append("image");
	u.attr("x", o), u.attr("y", s);
	let d = (0, import_dist.sanitizeUrl)(c);
	u.attr("xlink:href", d);
}, "drawImage"), drawEmbeddedImage = /* @__PURE__ */ __name((e, o, s, c) => {
	let u = e.append("use");
	u.attr("x", o), u.attr("y", s);
	let d = (0, import_dist.sanitizeUrl)(c);
	u.attr("xlink:href", `#${d}`);
}, "drawEmbeddedImage"), getNoteRect = /* @__PURE__ */ __name(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), getTextObj = /* @__PURE__ */ __name(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	"text-anchor": "start",
	style: "#666",
	textMargin: 0,
	rx: 0,
	ry: 0,
	tspan: !0
}), "getTextObj");
export { drawText as a, drawRect as i, drawEmbeddedImage as n, getNoteRect as o, drawImage as r, getTextObj as s, drawBackgroundRect as t };
