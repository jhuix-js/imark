import { n as constant_default, t as withPath } from "./path-D7waZtl4.js";
import { a as cos, c as max, d as sin, f as sqrt, i as atan2, l as min, n as acos, o as epsilon, p as tau, r as asin, s as halfPi, t as abs, u as pi } from "./math-BN2TBOwX.js";
function arcInnerRadius(e) {
	return e.innerRadius;
}
function arcOuterRadius(e) {
	return e.outerRadius;
}
function arcStartAngle(e) {
	return e.startAngle;
}
function arcEndAngle(e) {
	return e.endAngle;
}
function arcPadAngle(e) {
	return e && e.padAngle;
}
function intersect(e, t, n, r, i, ee, a, o) {
	var s = n - e, c = r - t, l = a - i, u = o - ee, d = u * s - l * c;
	if (!(d * d < 1e-12)) return d = (l * (t - ee) - u * (e - i)) / d, [e + d * s, t + d * c];
}
function cornerTangents(e, t, n, i, a, o, s) {
	var c = e - n, l = t - i, u = (s ? o : -o) / sqrt(c * c + l * l), d = u * l, f = -u * c, p = e + d, m = t + f, h = n + d, g = i + f, _ = (p + h) / 2, v = (m + g) / 2, y = h - p, b = g - m, x = y * y + b * b, S = a - o, C = p * g - h * m, w = (b < 0 ? -1 : 1) * sqrt(max(0, S * S * x - C * C)), T = (C * b - y * w) / x, E = (-C * y - b * w) / x, D = (C * b + y * w) / x, O = (-C * y + b * w) / x, k = T - _, A = E - v, j = D - _, M = O - v;
	return k * k + A * A > j * j + M * M && (T = D, E = O), {
		cx: T,
		cy: E,
		x01: -d,
		y01: -f,
		x11: T * (a / S - 1),
		y11: E * (a / S - 1)
	};
}
function arc_default() {
	var r = arcInnerRadius, c = arcOuterRadius, x = constant_default(0), S = null, C = arcStartAngle, w = arcEndAngle, T = arcPadAngle, E = null, D = withPath(O);
	function O() {
		var e, t, m = +r.apply(this, arguments), h = +c.apply(this, arguments), g = C.apply(this, arguments) - halfPi, _ = w.apply(this, arguments) - halfPi, v = abs(_ - g), O = _ > g;
		if (E ||= e = D(), h < m && (t = h, h = m, m = t), !(h > 1e-12)) E.moveTo(0, 0);
		else if (v > tau - 1e-12) E.moveTo(h * cos(g), h * sin(g)), E.arc(0, 0, h, g, _, !O), m > 1e-12 && (E.moveTo(m * cos(_), m * sin(_)), E.arc(0, 0, m, _, g, O));
		else {
			var k = g, A = _, j = g, M = _, N = v, P = v, F = T.apply(this, arguments) / 2, I = F > 1e-12 && (S ? +S.apply(this, arguments) : sqrt(m * m + h * h)), L = min(abs(h - m) / 2, +x.apply(this, arguments)), R = L, z = L, B, V;
			if (I > 1e-12) {
				var H = asin(I / m * sin(F)), U = asin(I / h * sin(F));
				(N -= H * 2) > 1e-12 ? (H *= O ? 1 : -1, j += H, M -= H) : (N = 0, j = M = (g + _) / 2), (P -= U * 2) > 1e-12 ? (U *= O ? 1 : -1, k += U, A -= U) : (P = 0, k = A = (g + _) / 2);
			}
			var W = h * cos(k), G = h * sin(k), K = m * cos(M), q = m * sin(M);
			if (L > 1e-12) {
				var J = h * cos(A), Y = h * sin(A), X = m * cos(j), Z = m * sin(j), Q;
				if (v < pi) if (Q = intersect(W, G, X, Z, J, Y, K, q)) {
					var $ = W - Q[0], te = G - Q[1], ne = J - Q[0], re = Y - Q[1], ie = 1 / sin(acos(($ * ne + te * re) / (sqrt($ * $ + te * te) * sqrt(ne * ne + re * re))) / 2), ae = sqrt(Q[0] * Q[0] + Q[1] * Q[1]);
					R = min(L, (m - ae) / (ie - 1)), z = min(L, (h - ae) / (ie + 1));
				} else R = z = 0;
			}
			P > 1e-12 ? z > 1e-12 ? (B = cornerTangents(X, Z, W, G, h, z, O), V = cornerTangents(J, Y, K, q, h, z, O), E.moveTo(B.cx + B.x01, B.cy + B.y01), z < L ? E.arc(B.cx, B.cy, z, atan2(B.y01, B.x01), atan2(V.y01, V.x01), !O) : (E.arc(B.cx, B.cy, z, atan2(B.y01, B.x01), atan2(B.y11, B.x11), !O), E.arc(0, 0, h, atan2(B.cy + B.y11, B.cx + B.x11), atan2(V.cy + V.y11, V.cx + V.x11), !O), E.arc(V.cx, V.cy, z, atan2(V.y11, V.x11), atan2(V.y01, V.x01), !O))) : (E.moveTo(W, G), E.arc(0, 0, h, k, A, !O)) : E.moveTo(W, G), !(m > 1e-12) || !(N > 1e-12) ? E.lineTo(K, q) : R > 1e-12 ? (B = cornerTangents(K, q, J, Y, m, -R, O), V = cornerTangents(W, G, X, Z, m, -R, O), E.lineTo(B.cx + B.x01, B.cy + B.y01), R < L ? E.arc(B.cx, B.cy, R, atan2(B.y01, B.x01), atan2(V.y01, V.x01), !O) : (E.arc(B.cx, B.cy, R, atan2(B.y01, B.x01), atan2(B.y11, B.x11), !O), E.arc(0, 0, m, atan2(B.cy + B.y11, B.cx + B.x11), atan2(V.cy + V.y11, V.cx + V.x11), O), E.arc(V.cx, V.cy, R, atan2(V.y11, V.x11), atan2(V.y01, V.x01), !O))) : E.arc(0, 0, m, M, j, O);
		}
		if (E.closePath(), e) return E = null, e + "" || null;
	}
	return O.centroid = function() {
		var e = (+r.apply(this, arguments) + +c.apply(this, arguments)) / 2, t = (+C.apply(this, arguments) + +w.apply(this, arguments)) / 2 - pi / 2;
		return [cos(t) * e, sin(t) * e];
	}, O.innerRadius = function(t) {
		return arguments.length ? (r = typeof t == "function" ? t : constant_default(+t), O) : r;
	}, O.outerRadius = function(t) {
		return arguments.length ? (c = typeof t == "function" ? t : constant_default(+t), O) : c;
	}, O.cornerRadius = function(t) {
		return arguments.length ? (x = typeof t == "function" ? t : constant_default(+t), O) : x;
	}, O.padRadius = function(t) {
		return arguments.length ? (S = t == null ? null : typeof t == "function" ? t : constant_default(+t), O) : S;
	}, O.startAngle = function(t) {
		return arguments.length ? (C = typeof t == "function" ? t : constant_default(+t), O) : C;
	}, O.endAngle = function(t) {
		return arguments.length ? (w = typeof t == "function" ? t : constant_default(+t), O) : w;
	}, O.padAngle = function(t) {
		return arguments.length ? (T = typeof t == "function" ? t : constant_default(+t), O) : T;
	}, O.context = function(e) {
		return arguments.length ? (E = e ?? null, O) : E;
	}, O;
}
export { arc_default as t };

//# sourceMappingURL=arc-cZaP7Il9.js.map