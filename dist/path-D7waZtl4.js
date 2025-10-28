var pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function append(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function appendRound(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return append;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var Path = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? append : appendRound(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(t, r, i, a, o) {
		if (t = +t, r = +r, i = +i, a = +a, o = +o, o < 0) throw Error(`negative radius: ${o}`);
		let s = this._x1, c = this._y1, l = i - t, u = a - r, d = s - t, f = c - r, p = d * d + f * f;
		if (this._x1 === null) this._append`M${this._x1 = t},${this._y1 = r}`;
		else if (p > epsilon) if (!(Math.abs(f * l - u * d) > epsilon) || !o) this._append`L${this._x1 = t},${this._y1 = r}`;
		else {
			let m = i - s, h = a - c, g = l * l + u * u, _ = m * m + h * h, v = Math.sqrt(g), y = Math.sqrt(p), b = o * Math.tan((pi - Math.acos((g + p - _) / (2 * v * y))) / 2), x = b / y, S = b / v;
			Math.abs(x - 1) > epsilon && this._append`L${t + x * d},${r + x * f}`, this._append`A${o},${o},0,0,${+(f * m > d * h)},${this._x1 = t + S * l},${this._y1 = r + S * u}`;
		}
	}
	arc(i, a, o, s, c, l) {
		if (i = +i, a = +a, o = +o, l = !!l, o < 0) throw Error(`negative radius: ${o}`);
		let u = o * Math.cos(s), d = o * Math.sin(s), f = i + u, p = a + d, m = 1 ^ l, h = l ? s - c : c - s;
		this._x1 === null ? this._append`M${f},${p}` : (Math.abs(this._x1 - f) > epsilon || Math.abs(this._y1 - p) > epsilon) && this._append`L${f},${p}`, o && (h < 0 && (h = h % tau + tau), h > tauEpsilon ? this._append`A${o},${o},0,1,${m},${i - u},${a - d}A${o},${o},0,1,${m},${this._x1 = f},${this._y1 = p}` : h > epsilon && this._append`A${o},${o},0,${+(h >= pi)},${m},${this._x1 = i + o * Math.cos(c)},${this._y1 = a + o * Math.sin(c)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
function path() {
	return new Path();
}
path.prototype = Path.prototype;
function constant_default(e) {
	return function() {
		return e;
	};
}
function withPath(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new Path(t);
}
export { constant_default as n, path as r, withPath as t };

//# sourceMappingURL=path-D7waZtl4.js.map