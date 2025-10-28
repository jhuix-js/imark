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
import { B as setAccTitle, C as getDiagramTitle, T as getThemeVariables3, U as setDiagramTitle, _ as getAccDescription, a as clear, d as defaultConfig_default, v as getAccTitle, y as getConfig, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-CUheKjZU.js";
import { t as populateCommonDb } from "./chunk-4BX2VUAB-DbDv1R95.js";
import { t as parse } from "./mermaid-parser.core-D7DiBjb7.js";
var defaultOptions = {
	showLegend: !0,
	ticks: 5,
	max: null,
	min: 0,
	graticule: "circle"
}, defaultRadarData = {
	axes: [],
	curves: [],
	options: defaultOptions
}, data = structuredClone(defaultRadarData), DEFAULT_RADAR_CONFIG = defaultConfig_default.radar, getConfig2 = /* @__PURE__ */ __name(() => cleanAndMerge({
	...DEFAULT_RADAR_CONFIG,
	...getConfig().radar
}), "getConfig"), getAxes = /* @__PURE__ */ __name(() => data.axes, "getAxes"), getCurves = /* @__PURE__ */ __name(() => data.curves, "getCurves"), getOptions = /* @__PURE__ */ __name(() => data.options, "getOptions"), setAxes = /* @__PURE__ */ __name((t) => {
	data.axes = t.map((t) => ({
		name: t.name,
		label: t.label ?? t.name
	}));
}, "setAxes"), setCurves = /* @__PURE__ */ __name((t) => {
	data.curves = t.map((t) => ({
		name: t.name,
		label: t.label ?? t.name,
		entries: computeCurveEntries(t.entries)
	}));
}, "setCurves"), computeCurveEntries = /* @__PURE__ */ __name((t) => {
	if (t[0].axis == null) return t.map((t) => t.value);
	let k = getAxes();
	if (k.length === 0) throw Error("Axes must be populated before curves for reference entries");
	return k.map((k) => {
		let A = t.find((t) => t.axis?.$refText === k.name);
		if (A === void 0) throw Error("Missing entry for axis " + k.label);
		return A.value;
	});
}, "computeCurveEntries"), db = {
	getAxes,
	getCurves,
	getOptions,
	setAxes,
	setCurves,
	setOptions: /* @__PURE__ */ __name((t) => {
		let k = t.reduce((t, k) => (t[k.name] = k, t), {});
		data.options = {
			showLegend: k.showLegend?.value ?? defaultOptions.showLegend,
			ticks: k.ticks?.value ?? defaultOptions.ticks,
			max: k.max?.value ?? defaultOptions.max,
			min: k.min?.value ?? defaultOptions.min,
			graticule: k.graticule?.value ?? defaultOptions.graticule
		};
	}, "setOptions"),
	getConfig: getConfig2,
	clear: /* @__PURE__ */ __name(() => {
		clear(), data = structuredClone(defaultRadarData);
	}, "clear"),
	setAccTitle,
	getAccTitle,
	setDiagramTitle,
	getDiagramTitle,
	getAccDescription,
	setAccDescription
}, populate = /* @__PURE__ */ __name((t) => {
	populateCommonDb(t, db);
	let { axes: k, curves: A, options: j } = t;
	db.setAxes(k), db.setCurves(A), db.setOptions(j);
}, "populate"), parser = { parse: /* @__PURE__ */ __name(async (t) => {
	let A = await parse("radar", t);
	log.debug(A), populate(A);
}, "parse") }, draw = /* @__PURE__ */ __name((t, k, A, j) => {
	let M = j.db, N = M.getAxes(), P = M.getCurves(), F = M.getOptions(), I = M.getConfig(), L = M.getDiagramTitle(), R = drawFrame(selectSvgElement(k), I), z = F.max ?? Math.max(...P.map((t) => Math.max(...t.entries))), B = F.min, V = Math.min(I.width, I.height) / 2;
	drawGraticule(R, N, V, F.ticks, F.graticule), drawAxes(R, N, V, I), drawCurves(R, N, P, B, z, F.graticule, I), drawLegend(R, P, F.showLegend, I), R.append("text").attr("class", "radarTitle").text(L).attr("x", 0).attr("y", -I.height / 2 - I.marginTop);
}, "draw"), drawFrame = /* @__PURE__ */ __name((t, k) => {
	let A = k.width + k.marginLeft + k.marginRight, j = k.height + k.marginTop + k.marginBottom, M = {
		x: k.marginLeft + k.width / 2,
		y: k.marginTop + k.height / 2
	};
	return t.attr("viewbox", `0 0 ${A} ${j}`).attr("width", A).attr("height", j), t.append("g").attr("transform", `translate(${M.x}, ${M.y})`);
}, "drawFrame"), drawGraticule = /* @__PURE__ */ __name((t, k, A, j, M) => {
	if (M === "circle") for (let k = 0; k < j; k++) {
		let M = A * (k + 1) / j;
		t.append("circle").attr("r", M).attr("class", "radarGraticule");
	}
	else if (M === "polygon") {
		let M = k.length;
		for (let N = 0; N < j; N++) {
			let P = A * (N + 1) / j, F = k.map((t, k) => {
				let A = 2 * k * Math.PI / M - Math.PI / 2;
				return `${P * Math.cos(A)},${P * Math.sin(A)}`;
			}).join(" ");
			t.append("polygon").attr("points", F).attr("class", "radarGraticule");
		}
	}
}, "drawGraticule"), drawAxes = /* @__PURE__ */ __name((t, k, A, j) => {
	let M = k.length;
	for (let N = 0; N < M; N++) {
		let P = k[N].label, F = 2 * N * Math.PI / M - Math.PI / 2;
		t.append("line").attr("x1", 0).attr("y1", 0).attr("x2", A * j.axisScaleFactor * Math.cos(F)).attr("y2", A * j.axisScaleFactor * Math.sin(F)).attr("class", "radarAxisLine"), t.append("text").text(P).attr("x", A * j.axisLabelFactor * Math.cos(F)).attr("y", A * j.axisLabelFactor * Math.sin(F)).attr("class", "radarAxisLabel");
	}
}, "drawAxes");
function drawCurves(t, k, A, j, M, N, P) {
	let F = k.length, I = Math.min(P.width, P.height) / 2;
	A.forEach((k, A) => {
		if (k.entries.length !== F) return;
		let L = k.entries.map((t, k) => {
			let A = 2 * Math.PI * k / F - Math.PI / 2, N = relativeRadius(t, j, M, I);
			return {
				x: N * Math.cos(A),
				y: N * Math.sin(A)
			};
		});
		N === "circle" ? t.append("path").attr("d", closedRoundCurve(L, P.curveTension)).attr("class", `radarCurve-${A}`) : N === "polygon" && t.append("polygon").attr("points", L.map((t) => `${t.x},${t.y}`).join(" ")).attr("class", `radarCurve-${A}`);
	});
}
__name(drawCurves, "drawCurves");
function relativeRadius(t, k, A, j) {
	return j * (Math.min(Math.max(t, k), A) - k) / (A - k);
}
__name(relativeRadius, "relativeRadius");
function closedRoundCurve(t, k) {
	let A = t.length, j = `M${t[0].x},${t[0].y}`;
	for (let M = 0; M < A; M++) {
		let N = t[(M - 1 + A) % A], P = t[M], F = t[(M + 1) % A], I = t[(M + 2) % A], L = {
			x: P.x + (F.x - N.x) * k,
			y: P.y + (F.y - N.y) * k
		}, R = {
			x: F.x - (I.x - P.x) * k,
			y: F.y - (I.y - P.y) * k
		};
		j += ` C${L.x},${L.y} ${R.x},${R.y} ${F.x},${F.y}`;
	}
	return `${j} Z`;
}
__name(closedRoundCurve, "closedRoundCurve");
function drawLegend(t, k, A, j) {
	if (!A) return;
	let M = (j.width / 2 + j.marginRight) * 3 / 4, N = -(j.height / 2 + j.marginTop) * 3 / 4;
	k.forEach((k, A) => {
		let j = t.append("g").attr("transform", `translate(${M}, ${N + A * 20})`);
		j.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${A}`), j.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(k.label);
	});
}
__name(drawLegend, "drawLegend");
var renderer = { draw }, genIndexStyles = /* @__PURE__ */ __name((t, k) => {
	let A = "";
	for (let j = 0; j < t.THEME_COLOR_LIMIT; j++) {
		let M = t[`cScale${j}`];
		A += `
		.radarCurve-${j} {
			color: ${M};
			fill: ${M};
			fill-opacity: ${k.curveOpacity};
			stroke: ${M};
			stroke-width: ${k.curveStrokeWidth};
		}
		.radarLegendBox-${j} {
			fill: ${M};
			fill-opacity: ${k.curveOpacity};
			stroke: ${M};
		}
		`;
	}
	return A;
}, "genIndexStyles"), buildRadarStyleOptions = /* @__PURE__ */ __name((k) => {
	let A = cleanAndMerge(getThemeVariables3(), getConfig().themeVariables);
	return {
		themeVariables: A,
		radarOptions: cleanAndMerge(A.radar, k)
	};
}, "buildRadarStyleOptions"), diagram = {
	parser,
	db,
	renderer,
	styles: /* @__PURE__ */ __name(({ radar: t } = {}) => {
		let { themeVariables: k, radarOptions: A } = buildRadarStyleOptions(t);
		return `
	.radarTitle {
		font-size: ${k.fontSize};
		color: ${k.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${A.axisColor};
		stroke-width: ${A.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${A.axisLabelFontSize}px;
		color: ${A.axisColor};
	}
	.radarGraticule {
		fill: ${A.graticuleColor};
		fill-opacity: ${A.graticuleOpacity};
		stroke: ${A.graticuleColor};
		stroke-width: ${A.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${A.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${genIndexStyles(k, A)}
	`;
	}, "styles")
};
export { diagram };
