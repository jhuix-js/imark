import { o as epsilon } from "./math-BN2TBOwX.js";
function Linear(d) {
	this._context = d;
}
Linear.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(d, F) : this._context.moveTo(d, F);
				break;
			case 1: this._point = 2;
			default:
				this._context.lineTo(d, F);
				break;
		}
	}
};
function linear_default(d) {
	return new Linear(d);
}
function noop_default() {}
function point$3(d, F, I) {
	d._context.bezierCurveTo((2 * d._x0 + d._x1) / 3, (2 * d._y0 + d._y1) / 3, (d._x0 + 2 * d._x1) / 3, (d._y0 + 2 * d._y1) / 3, (d._x0 + 4 * d._x1 + F) / 6, (d._y0 + 4 * d._y1 + I) / 6);
}
function Basis(d) {
	this._context = d;
}
Basis.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: point$3(this, this._x1, this._y1);
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(d, F) : this._context.moveTo(d, F);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default:
				point$3(this, d, F);
				break;
		}
		this._x0 = this._x1, this._x1 = d, this._y0 = this._y1, this._y1 = F;
	}
};
function basis_default(d) {
	return new Basis(d);
}
function BasisClosed(d) {
	this._context = d;
}
BasisClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3:
				this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
				break;
		}
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1, this._x2 = d, this._y2 = F;
				break;
			case 1:
				this._point = 2, this._x3 = d, this._y3 = F;
				break;
			case 2:
				this._point = 3, this._x4 = d, this._y4 = F, this._context.moveTo((this._x0 + 4 * this._x1 + d) / 6, (this._y0 + 4 * this._y1 + F) / 6);
				break;
			default:
				point$3(this, d, F);
				break;
		}
		this._x0 = this._x1, this._x1 = d, this._y0 = this._y1, this._y1 = F;
	}
};
function basisClosed_default(d) {
	return new BasisClosed(d);
}
function BasisOpen(d) {
	this._context = d;
}
BasisOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var I = (this._x0 + 4 * this._x1 + d) / 6, L = (this._y0 + 4 * this._y1 + F) / 6;
				this._line ? this._context.lineTo(I, L) : this._context.moveTo(I, L);
				break;
			case 3: this._point = 4;
			default:
				point$3(this, d, F);
				break;
		}
		this._x0 = this._x1, this._x1 = d, this._y0 = this._y1, this._y1 = F;
	}
};
function basisOpen_default(d) {
	return new BasisOpen(d);
}
function Bundle(d, F) {
	this._basis = new Basis(d), this._beta = F;
}
Bundle.prototype = {
	lineStart: function() {
		this._x = [], this._y = [], this._basis.lineStart();
	},
	lineEnd: function() {
		var d = this._x, F = this._y, I = d.length - 1;
		if (I > 0) for (var L = d[0], R = F[0], z = d[I] - L, B = F[I] - R, V = -1, H; ++V <= I;) H = V / I, this._basis.point(this._beta * d[V] + (1 - this._beta) * (L + H * z), this._beta * F[V] + (1 - this._beta) * (R + H * B));
		this._x = this._y = null, this._basis.lineEnd();
	},
	point: function(d, F) {
		this._x.push(+d), this._y.push(+F);
	}
};
var bundle_default = (function d(F) {
	function I(d) {
		return F === 1 ? new Basis(d) : new Bundle(d, F);
	}
	return I.beta = function(F) {
		return d(+F);
	}, I;
})(.85);
function point$2(d, F, I) {
	d._context.bezierCurveTo(d._x1 + d._k * (d._x2 - d._x0), d._y1 + d._k * (d._y2 - d._y0), d._x2 + d._k * (d._x1 - F), d._y2 + d._k * (d._y1 - I), d._x2, d._y2);
}
function Cardinal(d, F) {
	this._context = d, this._k = (1 - F) / 6;
}
Cardinal.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				point$2(this, this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(d, F) : this._context.moveTo(d, F);
				break;
			case 1:
				this._point = 2, this._x1 = d, this._y1 = F;
				break;
			case 2: this._point = 3;
			default:
				point$2(this, d, F);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = d, this._y0 = this._y1, this._y1 = this._y2, this._y2 = F;
	}
};
var cardinal_default = (function d(F) {
	function I(d) {
		return new Cardinal(d, F);
	}
	return I.tension = function(F) {
		return d(+F);
	}, I;
})(0);
function CardinalClosed(d, F) {
	this._context = d, this._k = (1 - F) / 6;
}
CardinalClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1, this._x3 = d, this._y3 = F;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = d, this._y4 = F);
				break;
			case 2:
				this._point = 3, this._x5 = d, this._y5 = F;
				break;
			default:
				point$2(this, d, F);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = d, this._y0 = this._y1, this._y1 = this._y2, this._y2 = F;
	}
};
var cardinalClosed_default = (function d(F) {
	function I(d) {
		return new CardinalClosed(d, F);
	}
	return I.tension = function(F) {
		return d(+F);
	}, I;
})(0);
function CardinalOpen(d, F) {
	this._context = d, this._k = (1 - F) / 6;
}
CardinalOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				point$2(this, d, F);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = d, this._y0 = this._y1, this._y1 = this._y2, this._y2 = F;
	}
};
var cardinalOpen_default = (function d(F) {
	function I(d) {
		return new CardinalOpen(d, F);
	}
	return I.tension = function(F) {
		return d(+F);
	}, I;
})(0);
function point$1(d, F, I) {
	var L = d._x1, R = d._y1, z = d._x2, B = d._y2;
	if (d._l01_a > 1e-12) {
		var V = 2 * d._l01_2a + 3 * d._l01_a * d._l12_a + d._l12_2a, H = 3 * d._l01_a * (d._l01_a + d._l12_a);
		L = (L * V - d._x0 * d._l12_2a + d._x2 * d._l01_2a) / H, R = (R * V - d._y0 * d._l12_2a + d._y2 * d._l01_2a) / H;
	}
	if (d._l23_a > 1e-12) {
		var U = 2 * d._l23_2a + 3 * d._l23_a * d._l12_a + d._l12_2a, W = 3 * d._l23_a * (d._l23_a + d._l12_a);
		z = (z * U + d._x1 * d._l23_2a - F * d._l12_2a) / W, B = (B * U + d._y1 * d._l23_2a - I * d._l12_2a) / W;
	}
	d._context.bezierCurveTo(L, R, z, B, d._x2, d._y2);
}
function CatmullRom(d, F) {
	this._context = d, this._alpha = F;
}
CatmullRom.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				this.point(this._x2, this._y2);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		if (d = +d, F = +F, this._point) {
			var I = this._x2 - d, L = this._y2 - F;
			this._l23_a = Math.sqrt(this._l23_2a = (I * I + L * L) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(d, F) : this._context.moveTo(d, F);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3;
			default:
				point$1(this, d, F);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = d, this._y0 = this._y1, this._y1 = this._y2, this._y2 = F;
	}
};
var catmullRom_default = (function d(F) {
	function I(d) {
		return F ? new CatmullRom(d, F) : new Cardinal(d, 0);
	}
	return I.alpha = function(F) {
		return d(+F);
	}, I;
})(.5);
function CatmullRomClosed(d, F) {
	this._context = d, this._alpha = F;
}
CatmullRomClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(d, F) {
		if (d = +d, F = +F, this._point) {
			var I = this._x2 - d, L = this._y2 - F;
			this._l23_a = Math.sqrt(this._l23_2a = (I * I + L * L) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._x3 = d, this._y3 = F;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = d, this._y4 = F);
				break;
			case 2:
				this._point = 3, this._x5 = d, this._y5 = F;
				break;
			default:
				point$1(this, d, F);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = d, this._y0 = this._y1, this._y1 = this._y2, this._y2 = F;
	}
};
var catmullRomClosed_default = (function d(F) {
	function I(d) {
		return F ? new CatmullRomClosed(d, F) : new CardinalClosed(d, 0);
	}
	return I.alpha = function(F) {
		return d(+F);
	}, I;
})(.5);
function CatmullRomOpen(d, F) {
	this._context = d, this._alpha = F;
}
CatmullRomOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		if (d = +d, F = +F, this._point) {
			var I = this._x2 - d, L = this._y2 - F;
			this._l23_a = Math.sqrt(this._l23_2a = (I * I + L * L) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				point$1(this, d, F);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = d, this._y0 = this._y1, this._y1 = this._y2, this._y2 = F;
	}
};
var catmullRomOpen_default = (function d(F) {
	function I(d) {
		return F ? new CatmullRomOpen(d, F) : new CardinalOpen(d, 0);
	}
	return I.alpha = function(F) {
		return d(+F);
	}, I;
})(.5);
function LinearClosed(d) {
	this._context = d;
}
LinearClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._point && this._context.closePath();
	},
	point: function(d, F) {
		d = +d, F = +F, this._point ? this._context.lineTo(d, F) : (this._point = 1, this._context.moveTo(d, F));
	}
};
function linearClosed_default(d) {
	return new LinearClosed(d);
}
function sign(d) {
	return d < 0 ? -1 : 1;
}
function slope3(d, F, I) {
	var L = d._x1 - d._x0, R = F - d._x1, z = (d._y1 - d._y0) / (L || R < 0 && -0), B = (I - d._y1) / (R || L < 0 && -0), V = (z * R + B * L) / (L + R);
	return (sign(z) + sign(B)) * Math.min(Math.abs(z), Math.abs(B), .5 * Math.abs(V)) || 0;
}
function slope2(d, F) {
	var I = d._x1 - d._x0;
	return I ? (3 * (d._y1 - d._y0) / I - F) / 2 : F;
}
function point(d, F, I) {
	var L = d._x0, R = d._y0, z = d._x1, B = d._y1, V = (z - L) / 3;
	d._context.bezierCurveTo(L + V, R + V * F, z - V, B - V * I, z, B);
}
function MonotoneX(d) {
	this._context = d;
}
MonotoneX.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3:
				point(this, this._t0, slope2(this, this._t0));
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(d, F) {
		var I = NaN;
		if (d = +d, F = +F, !(d === this._x1 && F === this._y1)) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(d, F) : this._context.moveTo(d, F);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, point(this, slope2(this, I = slope3(this, d, F)), I);
					break;
				default:
					point(this, this._t0, I = slope3(this, d, F));
					break;
			}
			this._x0 = this._x1, this._x1 = d, this._y0 = this._y1, this._y1 = F, this._t0 = I;
		}
	}
};
function MonotoneY(d) {
	this._context = new ReflectContext(d);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(d, F) {
	MonotoneX.prototype.point.call(this, F, d);
};
function ReflectContext(d) {
	this._context = d;
}
ReflectContext.prototype = {
	moveTo: function(d, F) {
		this._context.moveTo(F, d);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(d, F) {
		this._context.lineTo(F, d);
	},
	bezierCurveTo: function(d, F, I, L, R, z) {
		this._context.bezierCurveTo(F, d, L, I, z, R);
	}
};
function monotoneX(d) {
	return new MonotoneX(d);
}
function monotoneY(d) {
	return new MonotoneY(d);
}
function Natural(d) {
	this._context = d;
}
Natural.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [], this._y = [];
	},
	lineEnd: function() {
		var d = this._x, F = this._y, I = d.length;
		if (I) if (this._line ? this._context.lineTo(d[0], F[0]) : this._context.moveTo(d[0], F[0]), I === 2) this._context.lineTo(d[1], F[1]);
		else for (var L = controlPoints(d), R = controlPoints(F), z = 0, B = 1; B < I; ++z, ++B) this._context.bezierCurveTo(L[0][z], R[0][z], L[1][z], R[1][z], d[B], F[B]);
		(this._line || this._line !== 0 && I === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(d, F) {
		this._x.push(+d), this._y.push(+F);
	}
};
function controlPoints(d) {
	var F, I = d.length - 1, L, R = Array(I), z = Array(I), B = Array(I);
	for (R[0] = 0, z[0] = 2, B[0] = d[0] + 2 * d[1], F = 1; F < I - 1; ++F) R[F] = 1, z[F] = 4, B[F] = 4 * d[F] + 2 * d[F + 1];
	for (R[I - 1] = 2, z[I - 1] = 7, B[I - 1] = 8 * d[I - 1] + d[I], F = 1; F < I; ++F) L = R[F] / z[F - 1], z[F] -= L, B[F] -= L * B[F - 1];
	for (R[I - 1] = B[I - 1] / z[I - 1], F = I - 2; F >= 0; --F) R[F] = (B[F] - R[F + 1]) / z[F];
	for (z[I - 1] = (d[I] + R[I - 1]) / 2, F = 0; F < I - 1; ++F) z[F] = 2 * d[F + 1] - R[F + 1];
	return [R, z];
}
function natural_default(d) {
	return new Natural(d);
}
function Step(d, F) {
	this._context = d, this._t = F;
}
Step.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN, this._point = 0;
	},
	lineEnd: function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	},
	point: function(d, F) {
		switch (d = +d, F = +F, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(d, F) : this._context.moveTo(d, F);
				break;
			case 1: this._point = 2;
			default:
				if (this._t <= 0) this._context.lineTo(this._x, F), this._context.lineTo(d, F);
				else {
					var I = this._x * (1 - this._t) + d * this._t;
					this._context.lineTo(I, this._y), this._context.lineTo(I, F);
				}
				break;
		}
		this._x = d, this._y = F;
	}
};
function step_default(d) {
	return new Step(d, .5);
}
function stepBefore(d) {
	return new Step(d, 0);
}
function stepAfter(d) {
	return new Step(d, 1);
}
export { basis_default as _, monotoneX as a, catmullRomOpen_default as c, cardinalOpen_default as d, cardinalClosed_default as f, basisClosed_default as g, basisOpen_default as h, natural_default as i, catmullRomClosed_default as l, bundle_default as m, stepBefore as n, monotoneY as o, cardinal_default as p, step_default as r, linearClosed_default as s, stepAfter as t, catmullRom_default as u, linear_default as v };

//# sourceMappingURL=step-DmjVsfVE.js.map