const abs = Math.abs, atan2 = Math.atan2, cos = Math.cos, max = Math.max, min = Math.min, sin = Math.sin, sqrt = Math.sqrt, epsilon = 1e-12, pi = Math.PI, halfPi = pi / 2, tau = 2 * pi;
function acos(e) {
	return e > 1 ? 0 : e < -1 ? pi : Math.acos(e);
}
function asin(e) {
	return e >= 1 ? halfPi : e <= -1 ? -halfPi : Math.asin(e);
}
export { cos as a, max as c, sin as d, sqrt as f, atan2 as i, min as l, acos as n, epsilon as o, tau as p, asin as r, halfPi as s, abs as t, pi as u };

//# sourceMappingURL=math-BN2TBOwX.js.map