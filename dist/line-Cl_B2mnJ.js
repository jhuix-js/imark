import { n as constant_default, t as withPath } from "./path-D7waZtl4.js";
import { t as array_default } from "./array-BlABR2MP.js";
import { v as linear_default } from "./step-DmjVsfVE.js";
function x(e) {
	return e[0];
}
function y(e) {
	return e[1];
}
function line_default(o, s) {
	var c = constant_default(!0), l = null, u = linear_default, d = null, f = withPath(p);
	o = typeof o == "function" ? o : o === void 0 ? x : constant_default(o), s = typeof s == "function" ? s : s === void 0 ? y : constant_default(s);
	function p(e) {
		var n, r = (e = array_default(e)).length, i, a = !1, p;
		for (l ?? (d = u(p = f())), n = 0; n <= r; ++n) !(n < r && c(i = e[n], n, e)) === a && ((a = !a) ? d.lineStart() : d.lineEnd()), a && d.point(+o(i, n, e), +s(i, n, e));
		if (p) return d = null, p + "" || null;
	}
	return p.x = function(n) {
		return arguments.length ? (o = typeof n == "function" ? n : constant_default(+n), p) : o;
	}, p.y = function(n) {
		return arguments.length ? (s = typeof n == "function" ? n : constant_default(+n), p) : s;
	}, p.defined = function(n) {
		return arguments.length ? (c = typeof n == "function" ? n : constant_default(!!n), p) : c;
	}, p.curve = function(e) {
		return arguments.length ? (u = e, l != null && (d = u(l)), p) : u;
	}, p.context = function(e) {
		return arguments.length ? (e == null ? l = d = null : d = u(l = e), p) : l;
	}, p;
}
export { x as n, y as r, line_default as t };

//# sourceMappingURL=line-Cl_B2mnJ.js.map