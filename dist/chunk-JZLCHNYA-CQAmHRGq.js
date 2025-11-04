import { a as decodeEntities, p as parseFontSize, r as calculateTextWidth, u as handleUndefinedAttr } from "./chunk-S3R3BYOJ-CMSxLKou.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { A as parseGenericTypes, I as sanitizeText, L as sanitizeText3, N as renderKatexSanitized, O as hasKatex, b as getConfig2, d as defaultConfig_default, h as evaluate, s as common_default, y as getConfig } from "./chunk-ABZYJK2D-CASc1KXE.js";
import { n as createText, r as getIconSVG } from "./chunk-JA3XYJ7Z-CCL57Eo5.js";
import { t as getSubGraphTitleMargins } from "./chunk-CVBHYZKI-Cx9WXSzs.js";
import { a as userNodeOverrides, i as styles2String, r as solidStateFill, t as compileStyles } from "./chunk-ATLVNIR6-DULmhiFu.js";
function t(St, lr, ur) {
	if (St && St.length) {
		let [dr, fr] = lr, pr = Math.PI / 180 * ur, mr = Math.cos(pr), hr = Math.sin(pr);
		for (let lr of St) {
			let [St, ur] = lr;
			lr[0] = (St - dr) * mr - (ur - fr) * hr + dr, lr[1] = (St - dr) * hr + (ur - fr) * mr + fr;
		}
	}
}
function e(St, lr) {
	return St[0] === lr[0] && St[1] === lr[1];
}
function s(St, lr, ur, dr = 1) {
	let fr = ur, pr = Math.max(lr, .1), mr = St[0] && St[0][0] && typeof St[0][0] == "number" ? [St] : St, hr = [0, 0];
	if (fr) for (let St of mr) t(St, hr, fr);
	let gr = function(St, lr, ur) {
		let dr = [];
		for (let lr of St) {
			let St = [...lr];
			e(St[0], St[St.length - 1]) || St.push([St[0][0], St[0][1]]), St.length > 2 && dr.push(St);
		}
		let fr = [];
		lr = Math.max(lr, .1);
		let pr = [];
		for (let St of dr) for (let lr = 0; lr < St.length - 1; lr++) {
			let ur = St[lr], dr = St[lr + 1];
			if (ur[1] !== dr[1]) {
				let St = Math.min(ur[1], dr[1]);
				pr.push({
					ymin: St,
					ymax: Math.max(ur[1], dr[1]),
					x: St === ur[1] ? ur[0] : dr[0],
					islope: (dr[0] - ur[0]) / (dr[1] - ur[1])
				});
			}
		}
		if (pr.sort(((St, lr) => St.ymin < lr.ymin ? -1 : St.ymin > lr.ymin ? 1 : St.x < lr.x ? -1 : St.x > lr.x ? 1 : St.ymax === lr.ymax ? 0 : (St.ymax - lr.ymax) / Math.abs(St.ymax - lr.ymax))), !pr.length) return fr;
		let mr = [], hr = pr[0].ymin, gr = 0;
		for (; mr.length || pr.length;) {
			if (pr.length) {
				let St = -1;
				for (let lr = 0; lr < pr.length && !(pr[lr].ymin > hr); lr++) St = lr;
				pr.splice(0, St + 1).forEach(((St) => {
					mr.push({
						s: hr,
						edge: St
					});
				}));
			}
			if (mr = mr.filter(((St) => !(St.edge.ymax <= hr))), mr.sort(((St, lr) => St.edge.x === lr.edge.x ? 0 : (St.edge.x - lr.edge.x) / Math.abs(St.edge.x - lr.edge.x))), (ur !== 1 || gr % lr == 0) && mr.length > 1) for (let St = 0; St < mr.length; St += 2) {
				let lr = St + 1;
				if (lr >= mr.length) break;
				let ur = mr[St].edge, dr = mr[lr].edge;
				fr.push([[Math.round(ur.x), hr], [Math.round(dr.x), hr]]);
			}
			hr += ur, mr.forEach(((St) => {
				St.edge.x = St.edge.x + ur * St.edge.islope;
			})), gr++;
		}
		return fr;
	}(mr, pr, dr);
	if (fr) {
		for (let St of mr) t(St, hr, -fr);
		(function(St, lr, ur) {
			let dr = [];
			St.forEach(((St) => dr.push(...St))), t(dr, lr, ur);
		})(gr, hr, -fr);
	}
	return gr;
}
function n(St, lr) {
	let ur = lr.hachureAngle + 90, dr = lr.hachureGap;
	dr < 0 && (dr = 4 * lr.strokeWidth), dr = Math.round(Math.max(dr, .1));
	let fr = 1;
	return lr.roughness >= 1 && (lr.randomizer?.next() || Math.random()) > .7 && (fr = dr), s(St, dr, ur, fr || 1);
}
var o = class {
	constructor(St) {
		this.helper = St;
	}
	fillPolygons(St, lr) {
		return this._fillPolygons(St, lr);
	}
	_fillPolygons(St, lr) {
		let ur = n(St, lr);
		return {
			type: "fillSketch",
			ops: this.renderLines(ur, lr)
		};
	}
	renderLines(St, lr) {
		let ur = [];
		for (let dr of St) ur.push(...this.helper.doubleLineOps(dr[0][0], dr[0][1], dr[1][0], dr[1][1], lr));
		return ur;
	}
};
function a(St) {
	let lr = St[0], ur = St[1];
	return Math.sqrt((lr[0] - ur[0]) ** 2 + (lr[1] - ur[1]) ** 2);
}
var h = class extends o {
	fillPolygons(St, lr) {
		let ur = lr.hachureGap;
		ur < 0 && (ur = 4 * lr.strokeWidth), ur = Math.max(ur, .1);
		let dr = n(St, Object.assign({}, lr, { hachureGap: ur })), fr = Math.PI / 180 * lr.hachureAngle, pr = [], mr = .5 * ur * Math.cos(fr), hr = .5 * ur * Math.sin(fr);
		for (let [St, lr] of dr) a([St, lr]) && pr.push([[St[0] - mr, St[1] + hr], [...lr]], [[St[0] + mr, St[1] - hr], [...lr]]);
		return {
			type: "fillSketch",
			ops: this.renderLines(pr, lr)
		};
	}
}, r = class extends o {
	fillPolygons(St, lr) {
		let ur = this._fillPolygons(St, lr), dr = Object.assign({}, lr, { hachureAngle: lr.hachureAngle + 90 }), fr = this._fillPolygons(St, dr);
		return ur.ops = ur.ops.concat(fr.ops), ur;
	}
}, i = class {
	constructor(St) {
		this.helper = St;
	}
	fillPolygons(St, lr) {
		let ur = n(St, lr = Object.assign({}, lr, { hachureAngle: 0 }));
		return this.dotsOnLines(ur, lr);
	}
	dotsOnLines(St, lr) {
		let ur = [], dr = lr.hachureGap;
		dr < 0 && (dr = 4 * lr.strokeWidth), dr = Math.max(dr, .1);
		let fr = lr.fillWeight;
		fr < 0 && (fr = lr.strokeWidth / 2);
		let pr = dr / 4;
		for (let mr of St) {
			let St = a(mr), hr = St / dr, gr = Math.ceil(hr) - 1, _r = St - gr * dr, vr = (mr[0][0] + mr[1][0]) / 2 - dr / 4, yr = Math.min(mr[0][1], mr[1][1]);
			for (let St = 0; St < gr; St++) {
				let mr = yr + _r + St * dr, hr = vr - pr + 2 * Math.random() * pr, gr = mr - pr + 2 * Math.random() * pr, br = this.helper.ellipse(hr, gr, fr, fr, lr);
				ur.push(...br.ops);
			}
		}
		return {
			type: "fillSketch",
			ops: ur
		};
	}
}, c = class {
	constructor(St) {
		this.helper = St;
	}
	fillPolygons(St, lr) {
		let ur = n(St, lr);
		return {
			type: "fillSketch",
			ops: this.dashedLine(ur, lr)
		};
	}
	dashedLine(St, lr) {
		let ur = lr.dashOffset < 0 ? lr.hachureGap < 0 ? 4 * lr.strokeWidth : lr.hachureGap : lr.dashOffset, dr = lr.dashGap < 0 ? lr.hachureGap < 0 ? 4 * lr.strokeWidth : lr.hachureGap : lr.dashGap, fr = [];
		return St.forEach(((St) => {
			let pr = a(St), mr = Math.floor(pr / (ur + dr)), hr = (pr + dr - mr * (ur + dr)) / 2, gr = St[0], _r = St[1];
			gr[0] > _r[0] && (gr = St[1], _r = St[0]);
			let vr = Math.atan((_r[1] - gr[1]) / (_r[0] - gr[0]));
			for (let St = 0; St < mr; St++) {
				let pr = St * (ur + dr), mr = pr + ur, _r = [gr[0] + pr * Math.cos(vr) + hr * Math.cos(vr), gr[1] + pr * Math.sin(vr) + hr * Math.sin(vr)], yr = [gr[0] + mr * Math.cos(vr) + hr * Math.cos(vr), gr[1] + mr * Math.sin(vr) + hr * Math.sin(vr)];
				fr.push(...this.helper.doubleLineOps(_r[0], _r[1], yr[0], yr[1], lr));
			}
		})), fr;
	}
}, l = class {
	constructor(St) {
		this.helper = St;
	}
	fillPolygons(St, lr) {
		let ur = lr.hachureGap < 0 ? 4 * lr.strokeWidth : lr.hachureGap, dr = lr.zigzagOffset < 0 ? ur : lr.zigzagOffset, fr = n(St, lr = Object.assign({}, lr, { hachureGap: ur + dr }));
		return {
			type: "fillSketch",
			ops: this.zigzagLines(fr, dr, lr)
		};
	}
	zigzagLines(St, lr, ur) {
		let dr = [];
		return St.forEach(((St) => {
			let fr = a(St), pr = Math.round(fr / (2 * lr)), mr = St[0], hr = St[1];
			mr[0] > hr[0] && (mr = St[1], hr = St[0]);
			let gr = Math.atan((hr[1] - mr[1]) / (hr[0] - mr[0]));
			for (let St = 0; St < pr; St++) {
				let fr = 2 * St * lr, pr = 2 * (St + 1) * lr, hr = Math.sqrt(2 * lr ** 2), _r = [mr[0] + fr * Math.cos(gr), mr[1] + fr * Math.sin(gr)], vr = [mr[0] + pr * Math.cos(gr), mr[1] + pr * Math.sin(gr)], yr = [_r[0] + hr * Math.cos(gr + Math.PI / 4), _r[1] + hr * Math.sin(gr + Math.PI / 4)];
				dr.push(...this.helper.doubleLineOps(_r[0], _r[1], yr[0], yr[1], ur), ...this.helper.doubleLineOps(yr[0], yr[1], vr[0], vr[1], ur));
			}
		})), dr;
	}
}, u = {}, p = class {
	constructor(St) {
		this.seed = St;
	}
	next() {
		return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
	}
}, f = 0, d = 1, g = 2, M = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function k(St, lr) {
	return St.type === lr;
}
function b(St) {
	let lr = [], ur = function(St) {
		let lr = [];
		for (; St !== "";) if (St.match(/^([ \t\r\n,]+)/)) St = St.substr(RegExp.$1.length);
		else if (St.match(/^([aAcChHlLmMqQsStTvVzZ])/)) lr[lr.length] = {
			type: f,
			text: RegExp.$1
		}, St = St.substr(RegExp.$1.length);
		else {
			if (!St.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
			lr[lr.length] = {
				type: d,
				text: `${parseFloat(RegExp.$1)}`
			}, St = St.substr(RegExp.$1.length);
		}
		return lr[lr.length] = {
			type: g,
			text: ""
		}, lr;
	}(St), dr = "BOD", fr = 0, pr = ur[fr];
	for (; !k(pr, g);) {
		let mr = 0, hr = [];
		if (dr === "BOD") {
			if (pr.text !== "M" && pr.text !== "m") return b("M0,0" + St);
			fr++, mr = M[pr.text], dr = pr.text;
		} else k(pr, d) ? mr = M[dr] : (fr++, mr = M[pr.text], dr = pr.text);
		if (!(fr + mr < ur.length)) throw Error("Path data ended short");
		for (let St = fr; St < fr + mr; St++) {
			let lr = ur[St];
			if (!k(lr, d)) throw Error("Param not a number: " + dr + "," + lr.text);
			hr[hr.length] = +lr.text;
		}
		if (typeof M[dr] != "number") throw Error("Bad segment: " + dr);
		{
			let St = {
				key: dr,
				data: hr
			};
			lr.push(St), fr += mr, pr = ur[fr], dr === "M" && (dr = "L"), dr === "m" && (dr = "l");
		}
	}
	return lr;
}
function y(St) {
	let lr = 0, ur = 0, dr = 0, fr = 0, pr = [];
	for (let { key: mr, data: hr } of St) switch (mr) {
		case "M":
			pr.push({
				key: "M",
				data: [...hr]
			}), [lr, ur] = hr, [dr, fr] = hr;
			break;
		case "m":
			lr += hr[0], ur += hr[1], pr.push({
				key: "M",
				data: [lr, ur]
			}), dr = lr, fr = ur;
			break;
		case "L":
			pr.push({
				key: "L",
				data: [...hr]
			}), [lr, ur] = hr;
			break;
		case "l":
			lr += hr[0], ur += hr[1], pr.push({
				key: "L",
				data: [lr, ur]
			});
			break;
		case "C":
			pr.push({
				key: "C",
				data: [...hr]
			}), lr = hr[4], ur = hr[5];
			break;
		case "c": {
			let St = hr.map(((St, dr) => dr % 2 ? St + ur : St + lr));
			pr.push({
				key: "C",
				data: St
			}), lr = St[4], ur = St[5];
			break;
		}
		case "Q":
			pr.push({
				key: "Q",
				data: [...hr]
			}), lr = hr[2], ur = hr[3];
			break;
		case "q": {
			let St = hr.map(((St, dr) => dr % 2 ? St + ur : St + lr));
			pr.push({
				key: "Q",
				data: St
			}), lr = St[2], ur = St[3];
			break;
		}
		case "A":
			pr.push({
				key: "A",
				data: [...hr]
			}), lr = hr[5], ur = hr[6];
			break;
		case "a":
			lr += hr[5], ur += hr[6], pr.push({
				key: "A",
				data: [
					hr[0],
					hr[1],
					hr[2],
					hr[3],
					hr[4],
					lr,
					ur
				]
			});
			break;
		case "H":
			pr.push({
				key: "H",
				data: [...hr]
			}), lr = hr[0];
			break;
		case "h":
			lr += hr[0], pr.push({
				key: "H",
				data: [lr]
			});
			break;
		case "V":
			pr.push({
				key: "V",
				data: [...hr]
			}), ur = hr[0];
			break;
		case "v":
			ur += hr[0], pr.push({
				key: "V",
				data: [ur]
			});
			break;
		case "S":
			pr.push({
				key: "S",
				data: [...hr]
			}), lr = hr[2], ur = hr[3];
			break;
		case "s": {
			let St = hr.map(((St, dr) => dr % 2 ? St + ur : St + lr));
			pr.push({
				key: "S",
				data: St
			}), lr = St[2], ur = St[3];
			break;
		}
		case "T":
			pr.push({
				key: "T",
				data: [...hr]
			}), lr = hr[0], ur = hr[1];
			break;
		case "t":
			lr += hr[0], ur += hr[1], pr.push({
				key: "T",
				data: [lr, ur]
			});
			break;
		case "Z":
		case "z": pr.push({
			key: "Z",
			data: []
		}), lr = dr, ur = fr;
	}
	return pr;
}
function m(St) {
	let lr = [], ur = "", dr = 0, fr = 0, pr = 0, mr = 0, hr = 0, gr = 0;
	for (let { key: _r, data: vr } of St) {
		switch (_r) {
			case "M":
				lr.push({
					key: "M",
					data: [...vr]
				}), [dr, fr] = vr, [pr, mr] = vr;
				break;
			case "C":
				lr.push({
					key: "C",
					data: [...vr]
				}), dr = vr[4], fr = vr[5], hr = vr[2], gr = vr[3];
				break;
			case "L":
				lr.push({
					key: "L",
					data: [...vr]
				}), [dr, fr] = vr;
				break;
			case "H":
				dr = vr[0], lr.push({
					key: "L",
					data: [dr, fr]
				});
				break;
			case "V":
				fr = vr[0], lr.push({
					key: "L",
					data: [dr, fr]
				});
				break;
			case "S": {
				let St = 0, pr = 0;
				ur === "C" || ur === "S" ? (St = dr + (dr - hr), pr = fr + (fr - gr)) : (St = dr, pr = fr), lr.push({
					key: "C",
					data: [
						St,
						pr,
						...vr
					]
				}), hr = vr[0], gr = vr[1], dr = vr[2], fr = vr[3];
				break;
			}
			case "T": {
				let [St, pr] = vr, mr = 0, _r = 0;
				ur === "Q" || ur === "T" ? (mr = dr + (dr - hr), _r = fr + (fr - gr)) : (mr = dr, _r = fr);
				let yr = dr + 2 * (mr - dr) / 3, br = fr + 2 * (_r - fr) / 3, xr = St + 2 * (mr - St) / 3, Sr = pr + 2 * (_r - pr) / 3;
				lr.push({
					key: "C",
					data: [
						yr,
						br,
						xr,
						Sr,
						St,
						pr
					]
				}), hr = mr, gr = _r, dr = St, fr = pr;
				break;
			}
			case "Q": {
				let [St, ur, pr, mr] = vr, _r = dr + 2 * (St - dr) / 3, yr = fr + 2 * (ur - fr) / 3, br = pr + 2 * (St - pr) / 3, xr = mr + 2 * (ur - mr) / 3;
				lr.push({
					key: "C",
					data: [
						_r,
						yr,
						br,
						xr,
						pr,
						mr
					]
				}), hr = St, gr = ur, dr = pr, fr = mr;
				break;
			}
			case "A": {
				let St = Math.abs(vr[0]), ur = Math.abs(vr[1]), pr = vr[2], mr = vr[3], hr = vr[4], gr = vr[5], _r = vr[6];
				St === 0 || ur === 0 ? (lr.push({
					key: "C",
					data: [
						dr,
						fr,
						gr,
						_r,
						gr,
						_r
					]
				}), dr = gr, fr = _r) : (dr !== gr || fr !== _r) && (x(dr, fr, gr, _r, St, ur, pr, mr, hr).forEach((function(St) {
					lr.push({
						key: "C",
						data: St
					});
				})), dr = gr, fr = _r);
				break;
			}
			case "Z": lr.push({
				key: "Z",
				data: []
			}), dr = pr, fr = mr;
		}
		ur = _r;
	}
	return lr;
}
function w(St, lr, ur) {
	return [St * Math.cos(ur) - lr * Math.sin(ur), St * Math.sin(ur) + lr * Math.cos(ur)];
}
function x(St, lr, ur, dr, fr, pr, mr, hr, gr, _r) {
	let vr = (yr = mr, Math.PI * yr / 180);
	var yr;
	let br = [], xr = 0, Sr = 0, Cr = 0, wr = 0;
	if (_r) [xr, Sr, Cr, wr] = _r;
	else {
		[St, lr] = w(St, lr, -vr), [ur, dr] = w(ur, dr, -vr);
		let mr = (St - ur) / 2, _r = (lr - dr) / 2, yr = mr * mr / (fr * fr) + _r * _r / (pr * pr);
		yr > 1 && (yr = Math.sqrt(yr), fr *= yr, pr *= yr);
		let br = fr * fr, Tr = pr * pr, Er = br * Tr - br * _r * _r - Tr * mr * mr, Dr = br * _r * _r + Tr * mr * mr, Or = (hr === gr ? -1 : 1) * Math.sqrt(Math.abs(Er / Dr));
		Cr = Or * fr * _r / pr + (St + ur) / 2, wr = Or * -pr * mr / fr + (lr + dr) / 2, xr = Math.asin(parseFloat(((lr - wr) / pr).toFixed(9))), Sr = Math.asin(parseFloat(((dr - wr) / pr).toFixed(9))), St < Cr && (xr = Math.PI - xr), ur < Cr && (Sr = Math.PI - Sr), xr < 0 && (xr = 2 * Math.PI + xr), Sr < 0 && (Sr = 2 * Math.PI + Sr), gr && xr > Sr && (xr -= 2 * Math.PI), !gr && Sr > xr && (Sr -= 2 * Math.PI);
	}
	let Tr = Sr - xr;
	if (Math.abs(Tr) > 120 * Math.PI / 180) {
		let St = Sr, lr = ur, hr = dr;
		Sr = gr && Sr > xr ? xr + 120 * Math.PI / 180 * 1 : xr + 120 * Math.PI / 180 * -1, br = x(ur = Cr + fr * Math.cos(Sr), dr = wr + pr * Math.sin(Sr), lr, hr, fr, pr, mr, 0, gr, [
			Sr,
			St,
			Cr,
			wr
		]);
	}
	Tr = Sr - xr;
	let Er = Math.cos(xr), Dr = Math.sin(xr), Or = Math.cos(Sr), kr = Math.sin(Sr), Ar = Math.tan(Tr / 4), jr = 4 / 3 * fr * Ar, Mr = 4 / 3 * pr * Ar, Nr = [St, lr], Pr = [St + jr * Dr, lr - Mr * Er], Fr = [ur + jr * kr, dr - Mr * Or], Ir = [ur, dr];
	if (Pr[0] = 2 * Nr[0] - Pr[0], Pr[1] = 2 * Nr[1] - Pr[1], _r) return [
		Pr,
		Fr,
		Ir
	].concat(br);
	{
		br = [
			Pr,
			Fr,
			Ir
		].concat(br);
		let St = [];
		for (let lr = 0; lr < br.length; lr += 3) {
			let ur = w(br[lr][0], br[lr][1], vr), dr = w(br[lr + 1][0], br[lr + 1][1], vr), fr = w(br[lr + 2][0], br[lr + 2][1], vr);
			St.push([
				ur[0],
				ur[1],
				dr[0],
				dr[1],
				fr[0],
				fr[1]
			]);
		}
		return St;
	}
}
var P = {
	randOffset: function(St, lr) {
		return G(St, lr);
	},
	randOffsetWithRange: function(St, lr, ur) {
		return E(St, lr, ur);
	},
	ellipse: function(St, lr, ur, dr, fr) {
		return D(St, lr, fr, T(ur, dr, fr)).opset;
	},
	doubleLineOps: function(St, lr, ur, dr, fr) {
		return $(St, lr, ur, dr, fr, !0);
	}
};
function v(St, lr, ur, dr, fr) {
	return {
		type: "path",
		ops: $(St, lr, ur, dr, fr)
	};
}
function S(St, lr, ur) {
	let dr = (St || []).length;
	if (dr > 2) {
		let fr = [];
		for (let lr = 0; lr < dr - 1; lr++) fr.push(...$(St[lr][0], St[lr][1], St[lr + 1][0], St[lr + 1][1], ur));
		return lr && fr.push(...$(St[dr - 1][0], St[dr - 1][1], St[0][0], St[0][1], ur)), {
			type: "path",
			ops: fr
		};
	}
	return dr === 2 ? v(St[0][0], St[0][1], St[1][0], St[1][1], ur) : {
		type: "path",
		ops: []
	};
}
function O(St, lr, ur, dr, fr) {
	return function(St, lr) {
		return S(St, !0, lr);
	}([
		[St, lr],
		[St + ur, lr],
		[St + ur, lr + dr],
		[St, lr + dr]
	], fr);
}
function L(St, lr) {
	if (St.length) {
		let ur = typeof St[0][0] == "number" ? [St] : St, dr = j(ur[0], 1 * (1 + .2 * lr.roughness), lr), fr = lr.disableMultiStroke ? [] : j(ur[0], 1.5 * (1 + .22 * lr.roughness), z(lr));
		for (let St = 1; St < ur.length; St++) {
			let pr = ur[St];
			if (pr.length) {
				let St = j(pr, 1 * (1 + .2 * lr.roughness), lr), ur = lr.disableMultiStroke ? [] : j(pr, 1.5 * (1 + .22 * lr.roughness), z(lr));
				for (let lr of St) lr.op !== "move" && dr.push(lr);
				for (let St of ur) St.op !== "move" && fr.push(St);
			}
		}
		return {
			type: "path",
			ops: dr.concat(fr)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
function T(St, lr, ur) {
	let dr = Math.sqrt(2 * Math.PI * Math.sqrt(((St / 2) ** 2 + (lr / 2) ** 2) / 2)), fr = Math.ceil(Math.max(ur.curveStepCount, ur.curveStepCount / Math.sqrt(200) * dr)), pr = 2 * Math.PI / fr, mr = Math.abs(St / 2), hr = Math.abs(lr / 2), gr = 1 - ur.curveFitting;
	return mr += G(mr * gr, ur), hr += G(hr * gr, ur), {
		increment: pr,
		rx: mr,
		ry: hr
	};
}
function D(St, lr, ur, dr) {
	let [fr, pr] = F(dr.increment, St, lr, dr.rx, dr.ry, 1, dr.increment * E(.1, E(.4, 1, ur), ur), ur), mr = q(fr, null, ur);
	if (!ur.disableMultiStroke && ur.roughness !== 0) {
		let [fr] = F(dr.increment, St, lr, dr.rx, dr.ry, 1.5, 0, ur), pr = q(fr, null, ur);
		mr = mr.concat(pr);
	}
	return {
		estimatedPoints: pr,
		opset: {
			type: "path",
			ops: mr
		}
	};
}
function A(St, lr, ur, dr, fr, pr, mr, hr, gr) {
	let _r = St, vr = lr, yr = Math.abs(ur / 2), br = Math.abs(dr / 2);
	yr += G(.01 * yr, gr), br += G(.01 * br, gr);
	let xr = fr, Sr = pr;
	for (; xr < 0;) xr += 2 * Math.PI, Sr += 2 * Math.PI;
	Sr - xr > 2 * Math.PI && (xr = 0, Sr = 2 * Math.PI);
	let Cr = 2 * Math.PI / gr.curveStepCount, wr = Math.min(Cr / 2, (Sr - xr) / 2), Tr = V(wr, _r, vr, yr, br, xr, Sr, 1, gr);
	if (!gr.disableMultiStroke) {
		let St = V(wr, _r, vr, yr, br, xr, Sr, 1.5, gr);
		Tr.push(...St);
	}
	return mr && (hr ? Tr.push(...$(_r, vr, _r + yr * Math.cos(xr), vr + br * Math.sin(xr), gr), ...$(_r, vr, _r + yr * Math.cos(Sr), vr + br * Math.sin(Sr), gr)) : Tr.push({
		op: "lineTo",
		data: [_r, vr]
	}, {
		op: "lineTo",
		data: [_r + yr * Math.cos(xr), vr + br * Math.sin(xr)]
	})), {
		type: "path",
		ops: Tr
	};
}
function _(St, lr) {
	let ur = m(y(b(St))), dr = [], fr = [0, 0], pr = [0, 0];
	for (let { key: St, data: mr } of ur) switch (St) {
		case "M":
			pr = [mr[0], mr[1]], fr = [mr[0], mr[1]];
			break;
		case "L":
			dr.push(...$(pr[0], pr[1], mr[0], mr[1], lr)), pr = [mr[0], mr[1]];
			break;
		case "C": {
			let [St, ur, fr, hr, gr, _r] = mr;
			dr.push(...Z(St, ur, fr, hr, gr, _r, pr, lr)), pr = [gr, _r];
			break;
		}
		case "Z": dr.push(...$(pr[0], pr[1], fr[0], fr[1], lr)), pr = [fr[0], fr[1]];
	}
	return {
		type: "path",
		ops: dr
	};
}
function I(St, lr) {
	let ur = [];
	for (let dr of St) if (dr.length) {
		let St = lr.maxRandomnessOffset || 0, fr = dr.length;
		if (fr > 2) {
			ur.push({
				op: "move",
				data: [dr[0][0] + G(St, lr), dr[0][1] + G(St, lr)]
			});
			for (let pr = 1; pr < fr; pr++) ur.push({
				op: "lineTo",
				data: [dr[pr][0] + G(St, lr), dr[pr][1] + G(St, lr)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: ur
	};
}
function C(St, lr) {
	return function(St, lr) {
		let ur = St.fillStyle || "hachure";
		if (!u[ur]) switch (ur) {
			case "zigzag":
				u[ur] || (u[ur] = new h(lr));
				break;
			case "cross-hatch":
				u[ur] || (u[ur] = new r(lr));
				break;
			case "dots":
				u[ur] || (u[ur] = new i(lr));
				break;
			case "dashed":
				u[ur] || (u[ur] = new c(lr));
				break;
			case "zigzag-line":
				u[ur] || (u[ur] = new l(lr));
				break;
			default: ur = "hachure", u[ur] || (u[ur] = new o(lr));
		}
		return u[ur];
	}(lr, P).fillPolygons(St, lr);
}
function z(St) {
	let lr = Object.assign({}, St);
	return lr.randomizer = void 0, St.seed && (lr.seed = St.seed + 1), lr;
}
function W(St) {
	return St.randomizer ||= new p(St.seed || 0), St.randomizer.next();
}
function E(St, lr, ur, dr = 1) {
	return ur.roughness * dr * (W(ur) * (lr - St) + St);
}
function G(St, lr, ur = 1) {
	return E(-St, St, lr, ur);
}
function $(St, lr, ur, dr, fr, pr = !1) {
	let mr = pr ? fr.disableMultiStrokeFill : fr.disableMultiStroke, hr = R(St, lr, ur, dr, fr, !0, !1);
	if (mr) return hr;
	let gr = R(St, lr, ur, dr, fr, !0, !0);
	return hr.concat(gr);
}
function R(St, lr, ur, dr, fr, pr, mr) {
	let hr = (St - ur) ** 2 + (lr - dr) ** 2, gr = Math.sqrt(hr), _r = 1;
	_r = gr < 200 ? 1 : gr > 500 ? .4 : -.0016668 * gr + 1.233334;
	let vr = fr.maxRandomnessOffset || 0;
	vr * vr * 100 > hr && (vr = gr / 10);
	let yr = vr / 2, br = .2 + .2 * W(fr), xr = fr.bowing * fr.maxRandomnessOffset * (dr - lr) / 200, Sr = fr.bowing * fr.maxRandomnessOffset * (St - ur) / 200;
	xr = G(xr, fr, _r), Sr = G(Sr, fr, _r);
	let Cr = [], wr = () => G(yr, fr, _r), Tr = () => G(vr, fr, _r), Er = fr.preserveVertices;
	return pr && (mr ? Cr.push({
		op: "move",
		data: [St + (Er ? 0 : wr()), lr + (Er ? 0 : wr())]
	}) : Cr.push({
		op: "move",
		data: [St + (Er ? 0 : G(vr, fr, _r)), lr + (Er ? 0 : G(vr, fr, _r))]
	})), mr ? Cr.push({
		op: "bcurveTo",
		data: [
			xr + St + (ur - St) * br + wr(),
			Sr + lr + (dr - lr) * br + wr(),
			xr + St + 2 * (ur - St) * br + wr(),
			Sr + lr + 2 * (dr - lr) * br + wr(),
			ur + (Er ? 0 : wr()),
			dr + (Er ? 0 : wr())
		]
	}) : Cr.push({
		op: "bcurveTo",
		data: [
			xr + St + (ur - St) * br + Tr(),
			Sr + lr + (dr - lr) * br + Tr(),
			xr + St + 2 * (ur - St) * br + Tr(),
			Sr + lr + 2 * (dr - lr) * br + Tr(),
			ur + (Er ? 0 : Tr()),
			dr + (Er ? 0 : Tr())
		]
	}), Cr;
}
function j(St, lr, ur) {
	if (!St.length) return [];
	let dr = [];
	dr.push([St[0][0] + G(lr, ur), St[0][1] + G(lr, ur)]), dr.push([St[0][0] + G(lr, ur), St[0][1] + G(lr, ur)]);
	for (let fr = 1; fr < St.length; fr++) dr.push([St[fr][0] + G(lr, ur), St[fr][1] + G(lr, ur)]), fr === St.length - 1 && dr.push([St[fr][0] + G(lr, ur), St[fr][1] + G(lr, ur)]);
	return q(dr, null, ur);
}
function q(St, lr, ur) {
	let dr = St.length, fr = [];
	if (dr > 3) {
		let pr = [], mr = 1 - ur.curveTightness;
		fr.push({
			op: "move",
			data: [St[1][0], St[1][1]]
		});
		for (let lr = 1; lr + 2 < dr; lr++) {
			let ur = St[lr];
			pr[0] = [ur[0], ur[1]], pr[1] = [ur[0] + (mr * St[lr + 1][0] - mr * St[lr - 1][0]) / 6, ur[1] + (mr * St[lr + 1][1] - mr * St[lr - 1][1]) / 6], pr[2] = [St[lr + 1][0] + (mr * St[lr][0] - mr * St[lr + 2][0]) / 6, St[lr + 1][1] + (mr * St[lr][1] - mr * St[lr + 2][1]) / 6], pr[3] = [St[lr + 1][0], St[lr + 1][1]], fr.push({
				op: "bcurveTo",
				data: [
					pr[1][0],
					pr[1][1],
					pr[2][0],
					pr[2][1],
					pr[3][0],
					pr[3][1]
				]
			});
		}
		if (lr && lr.length === 2) {
			let St = ur.maxRandomnessOffset;
			fr.push({
				op: "lineTo",
				data: [lr[0] + G(St, ur), lr[1] + G(St, ur)]
			});
		}
	} else dr === 3 ? (fr.push({
		op: "move",
		data: [St[1][0], St[1][1]]
	}), fr.push({
		op: "bcurveTo",
		data: [
			St[1][0],
			St[1][1],
			St[2][0],
			St[2][1],
			St[2][0],
			St[2][1]
		]
	})) : dr === 2 && fr.push(...R(St[0][0], St[0][1], St[1][0], St[1][1], ur, !0, !0));
	return fr;
}
function F(St, lr, ur, dr, fr, pr, mr, hr) {
	let gr = [], _r = [];
	if (hr.roughness === 0) {
		St /= 4, _r.push([lr + dr * Math.cos(-St), ur + fr * Math.sin(-St)]);
		for (let pr = 0; pr <= 2 * Math.PI; pr += St) {
			let St = [lr + dr * Math.cos(pr), ur + fr * Math.sin(pr)];
			gr.push(St), _r.push(St);
		}
		_r.push([lr + dr * Math.cos(0), ur + fr * Math.sin(0)]), _r.push([lr + dr * Math.cos(St), ur + fr * Math.sin(St)]);
	} else {
		let vr = G(.5, hr) - Math.PI / 2;
		_r.push([G(pr, hr) + lr + .9 * dr * Math.cos(vr - St), G(pr, hr) + ur + .9 * fr * Math.sin(vr - St)]);
		let yr = 2 * Math.PI + vr - .01;
		for (let mr = vr; mr < yr; mr += St) {
			let St = [G(pr, hr) + lr + dr * Math.cos(mr), G(pr, hr) + ur + fr * Math.sin(mr)];
			gr.push(St), _r.push(St);
		}
		_r.push([G(pr, hr) + lr + dr * Math.cos(vr + 2 * Math.PI + .5 * mr), G(pr, hr) + ur + fr * Math.sin(vr + 2 * Math.PI + .5 * mr)]), _r.push([G(pr, hr) + lr + .98 * dr * Math.cos(vr + mr), G(pr, hr) + ur + .98 * fr * Math.sin(vr + mr)]), _r.push([G(pr, hr) + lr + .9 * dr * Math.cos(vr + .5 * mr), G(pr, hr) + ur + .9 * fr * Math.sin(vr + .5 * mr)]);
	}
	return [_r, gr];
}
function V(St, lr, ur, dr, fr, pr, mr, hr, gr) {
	let _r = pr + G(.1, gr), vr = [];
	vr.push([G(hr, gr) + lr + .9 * dr * Math.cos(_r - St), G(hr, gr) + ur + .9 * fr * Math.sin(_r - St)]);
	for (let pr = _r; pr <= mr; pr += St) vr.push([G(hr, gr) + lr + dr * Math.cos(pr), G(hr, gr) + ur + fr * Math.sin(pr)]);
	return vr.push([lr + dr * Math.cos(mr), ur + fr * Math.sin(mr)]), vr.push([lr + dr * Math.cos(mr), ur + fr * Math.sin(mr)]), q(vr, null, gr);
}
function Z(St, lr, ur, dr, fr, pr, mr, hr) {
	let gr = [], _r = [hr.maxRandomnessOffset || 1, (hr.maxRandomnessOffset || 1) + .3], vr = [0, 0], yr = hr.disableMultiStroke ? 1 : 2, br = hr.preserveVertices;
	for (let xr = 0; xr < yr; xr++) xr === 0 ? gr.push({
		op: "move",
		data: [mr[0], mr[1]]
	}) : gr.push({
		op: "move",
		data: [mr[0] + (br ? 0 : G(_r[0], hr)), mr[1] + (br ? 0 : G(_r[0], hr))]
	}), vr = br ? [fr, pr] : [fr + G(_r[xr], hr), pr + G(_r[xr], hr)], gr.push({
		op: "bcurveTo",
		data: [
			St + G(_r[xr], hr),
			lr + G(_r[xr], hr),
			ur + G(_r[xr], hr),
			dr + G(_r[xr], hr),
			vr[0],
			vr[1]
		]
	});
	return gr;
}
function Q(St) {
	return [...St];
}
function H(St, lr = 0) {
	let ur = St.length;
	if (ur < 3) throw Error("A curve must have at least three points.");
	let dr = [];
	if (ur === 3) dr.push(Q(St[0]), Q(St[1]), Q(St[2]), Q(St[2]));
	else {
		let ur = [];
		ur.push(St[0], St[0]);
		for (let lr = 1; lr < St.length; lr++) ur.push(St[lr]), lr === St.length - 1 && ur.push(St[lr]);
		let fr = [], pr = 1 - lr;
		dr.push(Q(ur[0]));
		for (let St = 1; St + 2 < ur.length; St++) {
			let lr = ur[St];
			fr[0] = [lr[0], lr[1]], fr[1] = [lr[0] + (pr * ur[St + 1][0] - pr * ur[St - 1][0]) / 6, lr[1] + (pr * ur[St + 1][1] - pr * ur[St - 1][1]) / 6], fr[2] = [ur[St + 1][0] + (pr * ur[St][0] - pr * ur[St + 2][0]) / 6, ur[St + 1][1] + (pr * ur[St][1] - pr * ur[St + 2][1]) / 6], fr[3] = [ur[St + 1][0], ur[St + 1][1]], dr.push(fr[1], fr[2], fr[3]);
		}
	}
	return dr;
}
function N(St, lr) {
	return (St[0] - lr[0]) ** 2 + (St[1] - lr[1]) ** 2;
}
function B(St, lr, ur) {
	let dr = N(lr, ur);
	if (dr === 0) return N(St, lr);
	let fr = ((St[0] - lr[0]) * (ur[0] - lr[0]) + (St[1] - lr[1]) * (ur[1] - lr[1])) / dr;
	return fr = Math.max(0, Math.min(1, fr)), N(St, J(lr, ur, fr));
}
function J(St, lr, ur) {
	return [St[0] + (lr[0] - St[0]) * ur, St[1] + (lr[1] - St[1]) * ur];
}
function K(St, lr, ur, dr) {
	let fr = dr || [];
	if (function(St, lr) {
		let ur = St[lr + 0], dr = St[lr + 1], fr = St[lr + 2], pr = St[lr + 3], mr = 3 * dr[0] - 2 * ur[0] - pr[0];
		mr *= mr;
		let hr = 3 * dr[1] - 2 * ur[1] - pr[1];
		hr *= hr;
		let gr = 3 * fr[0] - 2 * pr[0] - ur[0];
		gr *= gr;
		let _r = 3 * fr[1] - 2 * pr[1] - ur[1];
		return _r *= _r, mr < gr && (mr = gr), hr < _r && (hr = _r), mr + hr;
	}(St, lr) < ur) {
		let ur = St[lr + 0];
		fr.length ? (pr = fr[fr.length - 1], mr = ur, Math.sqrt(N(pr, mr))) > 1 && fr.push(ur) : fr.push(ur), fr.push(St[lr + 3]);
	} else {
		let dr = .5, pr = St[lr + 0], mr = St[lr + 1], hr = St[lr + 2], gr = St[lr + 3], _r = J(pr, mr, dr), vr = J(mr, hr, dr), yr = J(hr, gr, dr), br = J(_r, vr, dr), xr = J(vr, yr, dr), Sr = J(br, xr, dr);
		K([
			pr,
			_r,
			br,
			Sr
		], 0, ur, fr), K([
			Sr,
			xr,
			yr,
			gr
		], 0, ur, fr);
	}
	var pr, mr;
	return fr;
}
function U(St, lr) {
	return X(St, 0, St.length, lr);
}
function X(St, lr, ur, dr, fr) {
	let pr = fr || [], mr = St[lr], hr = St[ur - 1], gr = 0, _r = 1;
	for (let dr = lr + 1; dr < ur - 1; ++dr) {
		let lr = B(St[dr], mr, hr);
		lr > gr && (gr = lr, _r = dr);
	}
	return Math.sqrt(gr) > dr ? (X(St, lr, _r + 1, dr, pr), X(St, _r, ur, dr, pr)) : (pr.length || pr.push(mr), pr.push(hr)), pr;
}
function Y(St, lr = .15, ur) {
	let dr = [], fr = (St.length - 1) / 3;
	for (let ur = 0; ur < fr; ur++) K(St, 3 * ur, lr, dr);
	return ur && ur > 0 ? X(dr, 0, dr.length, ur) : dr;
}
var tt = "none", et = class {
	constructor(St) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: !1,
			disableMultiStrokeFill: !1,
			preserveVertices: !1,
			fillShapeRoughnessGain: .8
		}, this.config = St || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
	}
	static newSeed() {
		return Math.floor(Math.random() * 2 ** 31);
	}
	_o(St) {
		return St ? Object.assign({}, this.defaultOptions, St) : this.defaultOptions;
	}
	_d(St, lr, ur) {
		return {
			shape: St,
			sets: lr || [],
			options: ur || this.defaultOptions
		};
	}
	line(St, lr, ur, dr, fr) {
		let pr = this._o(fr);
		return this._d("line", [v(St, lr, ur, dr, pr)], pr);
	}
	rectangle(St, lr, ur, dr, fr) {
		let pr = this._o(fr), mr = [], hr = O(St, lr, ur, dr, pr);
		if (pr.fill) {
			let fr = [
				[St, lr],
				[St + ur, lr],
				[St + ur, lr + dr],
				[St, lr + dr]
			];
			pr.fillStyle === "solid" ? mr.push(I([fr], pr)) : mr.push(C([fr], pr));
		}
		return pr.stroke !== tt && mr.push(hr), this._d("rectangle", mr, pr);
	}
	ellipse(St, lr, ur, dr, fr) {
		let pr = this._o(fr), mr = [], hr = T(ur, dr, pr), gr = D(St, lr, pr, hr);
		if (pr.fill) if (pr.fillStyle === "solid") {
			let ur = D(St, lr, pr, hr).opset;
			ur.type = "fillPath", mr.push(ur);
		} else mr.push(C([gr.estimatedPoints], pr));
		return pr.stroke !== tt && mr.push(gr.opset), this._d("ellipse", mr, pr);
	}
	circle(St, lr, ur, dr) {
		let fr = this.ellipse(St, lr, ur, ur, dr);
		return fr.shape = "circle", fr;
	}
	linearPath(St, lr) {
		let ur = this._o(lr);
		return this._d("linearPath", [S(St, !1, ur)], ur);
	}
	arc(St, lr, ur, dr, fr, pr, mr = !1, hr) {
		let gr = this._o(hr), _r = [], vr = A(St, lr, ur, dr, fr, pr, mr, !0, gr);
		if (mr && gr.fill) if (gr.fillStyle === "solid") {
			let mr = Object.assign({}, gr);
			mr.disableMultiStroke = !0;
			let hr = A(St, lr, ur, dr, fr, pr, !0, !1, mr);
			hr.type = "fillPath", _r.push(hr);
		} else _r.push(function(St, lr, ur, dr, fr, pr, mr) {
			let hr = St, gr = lr, _r = Math.abs(ur / 2), vr = Math.abs(dr / 2);
			_r += G(.01 * _r, mr), vr += G(.01 * vr, mr);
			let yr = fr, br = pr;
			for (; yr < 0;) yr += 2 * Math.PI, br += 2 * Math.PI;
			br - yr > 2 * Math.PI && (yr = 0, br = 2 * Math.PI);
			let xr = (br - yr) / mr.curveStepCount, Sr = [];
			for (let St = yr; St <= br; St += xr) Sr.push([hr + _r * Math.cos(St), gr + vr * Math.sin(St)]);
			return Sr.push([hr + _r * Math.cos(br), gr + vr * Math.sin(br)]), Sr.push([hr, gr]), C([Sr], mr);
		}(St, lr, ur, dr, fr, pr, gr));
		return gr.stroke !== tt && _r.push(vr), this._d("arc", _r, gr);
	}
	curve(St, lr) {
		let ur = this._o(lr), dr = [], fr = L(St, ur);
		if (ur.fill && ur.fill !== tt) if (ur.fillStyle === "solid") {
			let lr = L(St, Object.assign(Object.assign({}, ur), {
				disableMultiStroke: !0,
				roughness: ur.roughness ? ur.roughness + ur.fillShapeRoughnessGain : 0
			}));
			dr.push({
				type: "fillPath",
				ops: this._mergedShape(lr.ops)
			});
		} else {
			let lr = [], fr = St;
			if (fr.length) {
				let St = typeof fr[0][0] == "number" ? [fr] : fr;
				for (let dr of St) dr.length < 3 ? lr.push(...dr) : dr.length === 3 ? lr.push(...Y(H([
					dr[0],
					dr[0],
					dr[1],
					dr[2]
				]), 10, (1 + ur.roughness) / 2)) : lr.push(...Y(H(dr), 10, (1 + ur.roughness) / 2));
			}
			lr.length && dr.push(C([lr], ur));
		}
		return ur.stroke !== tt && dr.push(fr), this._d("curve", dr, ur);
	}
	polygon(St, lr) {
		let ur = this._o(lr), dr = [], fr = S(St, !0, ur);
		return ur.fill && (ur.fillStyle === "solid" ? dr.push(I([St], ur)) : dr.push(C([St], ur))), ur.stroke !== tt && dr.push(fr), this._d("polygon", dr, ur);
	}
	path(St, lr) {
		let ur = this._o(lr), dr = [];
		if (!St) return this._d("path", dr, ur);
		St = (St || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let fr = ur.fill && ur.fill !== "transparent" && ur.fill !== tt, pr = ur.stroke !== tt, mr = !!(ur.simplification && ur.simplification < 1), hr = function(St, lr, ur) {
			let dr = m(y(b(St))), fr = [], pr = [], mr = [0, 0], hr = [], gr = () => {
				hr.length >= 4 && pr.push(...Y(hr, lr)), hr = [];
			}, _r = () => {
				gr(), pr.length && (fr.push(pr), pr = []);
			};
			for (let { key: St, data: lr } of dr) switch (St) {
				case "M":
					_r(), mr = [lr[0], lr[1]], pr.push(mr);
					break;
				case "L":
					gr(), pr.push([lr[0], lr[1]]);
					break;
				case "C":
					if (!hr.length) {
						let St = pr.length ? pr[pr.length - 1] : mr;
						hr.push([St[0], St[1]]);
					}
					hr.push([lr[0], lr[1]]), hr.push([lr[2], lr[3]]), hr.push([lr[4], lr[5]]);
					break;
				case "Z": gr(), pr.push([mr[0], mr[1]]);
			}
			if (_r(), !ur) return fr;
			let vr = [];
			for (let St of fr) {
				let lr = U(St, ur);
				lr.length && vr.push(lr);
			}
			return vr;
		}(St, 1, mr ? 4 - 4 * (ur.simplification || 1) : (1 + ur.roughness) / 2), gr = _(St, ur);
		if (fr) if (ur.fillStyle === "solid") if (hr.length === 1) {
			let lr = _(St, Object.assign(Object.assign({}, ur), {
				disableMultiStroke: !0,
				roughness: ur.roughness ? ur.roughness + ur.fillShapeRoughnessGain : 0
			}));
			dr.push({
				type: "fillPath",
				ops: this._mergedShape(lr.ops)
			});
		} else dr.push(I(hr, ur));
		else dr.push(C(hr, ur));
		return pr && (mr ? hr.forEach(((St) => {
			dr.push(S(St, !1, ur));
		})) : dr.push(gr)), this._d("path", dr, ur);
	}
	opsToPath(St, lr) {
		let ur = "";
		for (let dr of St.ops) {
			let St = typeof lr == "number" && lr >= 0 ? dr.data.map(((St) => +St.toFixed(lr))) : dr.data;
			switch (dr.op) {
				case "move":
					ur += `M${St[0]} ${St[1]} `;
					break;
				case "bcurveTo":
					ur += `C${St[0]} ${St[1]}, ${St[2]} ${St[3]}, ${St[4]} ${St[5]} `;
					break;
				case "lineTo": ur += `L${St[0]} ${St[1]} `;
			}
		}
		return ur.trim();
	}
	toPaths(St) {
		let lr = St.sets || [], ur = St.options || this.defaultOptions, dr = [];
		for (let St of lr) {
			let lr = null;
			switch (St.type) {
				case "path":
					lr = {
						d: this.opsToPath(St),
						stroke: ur.stroke,
						strokeWidth: ur.strokeWidth,
						fill: tt
					};
					break;
				case "fillPath":
					lr = {
						d: this.opsToPath(St),
						stroke: tt,
						strokeWidth: 0,
						fill: ur.fill || tt
					};
					break;
				case "fillSketch": lr = this.fillSketch(St, ur);
			}
			lr && dr.push(lr);
		}
		return dr;
	}
	fillSketch(St, lr) {
		let ur = lr.fillWeight;
		return ur < 0 && (ur = lr.strokeWidth / 2), {
			d: this.opsToPath(St),
			stroke: lr.fill || tt,
			strokeWidth: ur,
			fill: tt
		};
	}
	_mergedShape(St) {
		return St.filter(((St, lr) => lr === 0 || St.op !== "move"));
	}
}, st = class {
	constructor(St, lr) {
		this.canvas = St, this.ctx = this.canvas.getContext("2d"), this.gen = new et(lr);
	}
	draw(St) {
		let lr = St.sets || [], ur = St.options || this.getDefaultOptions(), dr = this.ctx, fr = St.options.fixedDecimalPlaceDigits;
		for (let pr of lr) switch (pr.type) {
			case "path":
				dr.save(), dr.strokeStyle = ur.stroke === "none" ? "transparent" : ur.stroke, dr.lineWidth = ur.strokeWidth, ur.strokeLineDash && dr.setLineDash(ur.strokeLineDash), ur.strokeLineDashOffset && (dr.lineDashOffset = ur.strokeLineDashOffset), this._drawToContext(dr, pr, fr), dr.restore();
				break;
			case "fillPath": {
				dr.save(), dr.fillStyle = ur.fill || "";
				let lr = St.shape === "curve" || St.shape === "polygon" || St.shape === "path" ? "evenodd" : "nonzero";
				this._drawToContext(dr, pr, fr, lr), dr.restore();
				break;
			}
			case "fillSketch": this.fillSketch(dr, pr, ur);
		}
	}
	fillSketch(St, lr, ur) {
		let dr = ur.fillWeight;
		dr < 0 && (dr = ur.strokeWidth / 2), St.save(), ur.fillLineDash && St.setLineDash(ur.fillLineDash), ur.fillLineDashOffset && (St.lineDashOffset = ur.fillLineDashOffset), St.strokeStyle = ur.fill || "", St.lineWidth = dr, this._drawToContext(St, lr, ur.fixedDecimalPlaceDigits), St.restore();
	}
	_drawToContext(St, lr, ur, dr = "nonzero") {
		St.beginPath();
		for (let dr of lr.ops) {
			let lr = typeof ur == "number" && ur >= 0 ? dr.data.map(((St) => +St.toFixed(ur))) : dr.data;
			switch (dr.op) {
				case "move":
					St.moveTo(lr[0], lr[1]);
					break;
				case "bcurveTo":
					St.bezierCurveTo(lr[0], lr[1], lr[2], lr[3], lr[4], lr[5]);
					break;
				case "lineTo": St.lineTo(lr[0], lr[1]);
			}
		}
		lr.type === "fillPath" ? St.fill(dr) : St.stroke();
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	line(St, lr, ur, dr, fr) {
		let pr = this.gen.line(St, lr, ur, dr, fr);
		return this.draw(pr), pr;
	}
	rectangle(St, lr, ur, dr, fr) {
		let pr = this.gen.rectangle(St, lr, ur, dr, fr);
		return this.draw(pr), pr;
	}
	ellipse(St, lr, ur, dr, fr) {
		let pr = this.gen.ellipse(St, lr, ur, dr, fr);
		return this.draw(pr), pr;
	}
	circle(St, lr, ur, dr) {
		let fr = this.gen.circle(St, lr, ur, dr);
		return this.draw(fr), fr;
	}
	linearPath(St, lr) {
		let ur = this.gen.linearPath(St, lr);
		return this.draw(ur), ur;
	}
	polygon(St, lr) {
		let ur = this.gen.polygon(St, lr);
		return this.draw(ur), ur;
	}
	arc(St, lr, ur, dr, fr, pr, mr = !1, hr) {
		let gr = this.gen.arc(St, lr, ur, dr, fr, pr, mr, hr);
		return this.draw(gr), gr;
	}
	curve(St, lr) {
		let ur = this.gen.curve(St, lr);
		return this.draw(ur), ur;
	}
	path(St, lr) {
		let ur = this.gen.path(St, lr);
		return this.draw(ur), ur;
	}
}, nt = "http://www.w3.org/2000/svg", ot = class {
	constructor(St, lr) {
		this.svg = St, this.gen = new et(lr);
	}
	draw(St) {
		let lr = St.sets || [], ur = St.options || this.getDefaultOptions(), dr = this.svg.ownerDocument || window.document, fr = dr.createElementNS(nt, "g"), pr = St.options.fixedDecimalPlaceDigits;
		for (let mr of lr) {
			let lr = null;
			switch (mr.type) {
				case "path":
					lr = dr.createElementNS(nt, "path"), lr.setAttribute("d", this.opsToPath(mr, pr)), lr.setAttribute("stroke", ur.stroke), lr.setAttribute("stroke-width", ur.strokeWidth + ""), lr.setAttribute("fill", "none"), ur.strokeLineDash && lr.setAttribute("stroke-dasharray", ur.strokeLineDash.join(" ").trim()), ur.strokeLineDashOffset && lr.setAttribute("stroke-dashoffset", `${ur.strokeLineDashOffset}`);
					break;
				case "fillPath":
					lr = dr.createElementNS(nt, "path"), lr.setAttribute("d", this.opsToPath(mr, pr)), lr.setAttribute("stroke", "none"), lr.setAttribute("stroke-width", "0"), lr.setAttribute("fill", ur.fill || ""), St.shape !== "curve" && St.shape !== "polygon" || lr.setAttribute("fill-rule", "evenodd");
					break;
				case "fillSketch": lr = this.fillSketch(dr, mr, ur);
			}
			lr && fr.appendChild(lr);
		}
		return fr;
	}
	fillSketch(St, lr, ur) {
		let dr = ur.fillWeight;
		dr < 0 && (dr = ur.strokeWidth / 2);
		let fr = St.createElementNS(nt, "path");
		return fr.setAttribute("d", this.opsToPath(lr, ur.fixedDecimalPlaceDigits)), fr.setAttribute("stroke", ur.fill || ""), fr.setAttribute("stroke-width", dr + ""), fr.setAttribute("fill", "none"), ur.fillLineDash && fr.setAttribute("stroke-dasharray", ur.fillLineDash.join(" ").trim()), ur.fillLineDashOffset && fr.setAttribute("stroke-dashoffset", `${ur.fillLineDashOffset}`), fr;
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	opsToPath(St, lr) {
		return this.gen.opsToPath(St, lr);
	}
	line(St, lr, ur, dr, fr) {
		let pr = this.gen.line(St, lr, ur, dr, fr);
		return this.draw(pr);
	}
	rectangle(St, lr, ur, dr, fr) {
		let pr = this.gen.rectangle(St, lr, ur, dr, fr);
		return this.draw(pr);
	}
	ellipse(St, lr, ur, dr, fr) {
		let pr = this.gen.ellipse(St, lr, ur, dr, fr);
		return this.draw(pr);
	}
	circle(St, lr, ur, dr) {
		let fr = this.gen.circle(St, lr, ur, dr);
		return this.draw(fr);
	}
	linearPath(St, lr) {
		let ur = this.gen.linearPath(St, lr);
		return this.draw(ur);
	}
	polygon(St, lr) {
		let ur = this.gen.polygon(St, lr);
		return this.draw(ur);
	}
	arc(St, lr, ur, dr, fr, pr, mr = !1, hr) {
		let gr = this.gen.arc(St, lr, ur, dr, fr, pr, mr, hr);
		return this.draw(gr);
	}
	curve(St, lr) {
		let ur = this.gen.curve(St, lr);
		return this.draw(ur);
	}
	path(St, lr) {
		let ur = this.gen.path(St, lr);
		return this.draw(ur);
	}
}, at = {
	canvas: (St, lr) => new st(St, lr),
	svg: (St, lr) => new ot(St, lr),
	generator: (St) => new et(St),
	newSeed: () => et.newSeed()
}, labelHelper = /* @__PURE__ */ __name(async (ur, fr, hr) => {
	let _r, vr = fr.useHtmlLabels || evaluate(getConfig2()?.htmlLabels);
	_r = hr || "node default";
	let yr = ur.insert("g").attr("class", _r).attr("id", fr.domId || fr.id), Cr = yr.insert("g").attr("class", "label").attr("style", handleUndefinedAttr(fr.labelStyle)), wr;
	wr = fr.label === void 0 ? "" : typeof fr.label == "string" ? fr.label : fr.label[0];
	let Er = await createText(Cr, sanitizeText(decodeEntities(wr), getConfig2()), {
		useHtmlLabels: vr,
		width: fr.width || getConfig2().flowchart?.wrappingWidth,
		cssClasses: "markdown-node-label",
		style: fr.labelStyle,
		addSvgBackground: !!fr.icon || !!fr.img
	}), Dr = Er.getBBox(), Or = (fr?.padding ?? 0) / 2;
	if (vr) {
		let St = Er.children[0], ur = select_default(Er), dr = St.getElementsByTagName("img");
		if (dr) {
			let St = wr.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all([...dr].map((ur) => new Promise((dr) => {
				function fr() {
					if (ur.style.display = "flex", ur.style.flexDirection = "column", St) {
						let [St = defaultConfig_default.fontSize] = parseFontSize(getConfig2().fontSize ? getConfig2().fontSize : window.getComputedStyle(document.body).fontSize), dr = St * 5 + "px";
						ur.style.minWidth = dr, ur.style.maxWidth = dr;
					} else ur.style.width = "100%";
					dr(ur);
				}
				__name(fr, "setupImage"), setTimeout(() => {
					ur.complete && fr();
				}), ur.addEventListener("error", fr), ur.addEventListener("load", fr);
			})));
		}
		Dr = St.getBoundingClientRect(), ur.attr("width", Dr.width), ur.attr("height", Dr.height);
	}
	return vr ? Cr.attr("transform", "translate(" + -Dr.width / 2 + ", " + -Dr.height / 2 + ")") : Cr.attr("transform", "translate(0, " + -Dr.height / 2 + ")"), fr.centerLabel && Cr.attr("transform", "translate(" + -Dr.width / 2 + ", " + -Dr.height / 2 + ")"), Cr.insert("rect", ":first-child"), {
		shapeSvg: yr,
		bbox: Dr,
		halfPadding: Or,
		label: Cr
	};
}, "labelHelper"), insertLabel = /* @__PURE__ */ __name(async (lr, ur, dr) => {
	let fr = dr.useHtmlLabels || evaluate(getConfig2()?.flowchart?.htmlLabels), pr = lr.insert("g").attr("class", "label").attr("style", dr.labelStyle || ""), hr = await createText(pr, sanitizeText(decodeEntities(ur), getConfig2()), {
		useHtmlLabels: fr,
		width: dr.width || getConfig2()?.flowchart?.wrappingWidth,
		style: dr.labelStyle,
		addSvgBackground: !!dr.icon || !!dr.img
	}), _r = hr.getBBox(), vr = dr.padding / 2;
	if (evaluate(getConfig2()?.flowchart?.htmlLabels)) {
		let St = hr.children[0], lr = select_default(hr);
		_r = St.getBoundingClientRect(), lr.attr("width", _r.width), lr.attr("height", _r.height);
	}
	return fr ? pr.attr("transform", "translate(" + -_r.width / 2 + ", " + -_r.height / 2 + ")") : pr.attr("transform", "translate(0, " + -_r.height / 2 + ")"), dr.centerLabel && pr.attr("transform", "translate(" + -_r.width / 2 + ", " + -_r.height / 2 + ")"), pr.insert("rect", ":first-child"), {
		shapeSvg: lr,
		bbox: _r,
		halfPadding: vr,
		label: pr
	};
}, "insertLabel"), updateNodeBounds = /* @__PURE__ */ __name((St, lr) => {
	let ur = lr.node().getBBox();
	St.width = ur.width, St.height = ur.height;
}, "updateNodeBounds"), getNodeClasses = /* @__PURE__ */ __name((St, lr) => (St.look === "handDrawn" ? "rough-node" : "node") + " " + St.cssClasses + " " + (lr || ""), "getNodeClasses");
function createPathFromPoints(St) {
	let lr = St.map((St, lr) => `${lr === 0 ? "M" : "L"}${St.x},${St.y}`);
	return lr.push("Z"), lr.join(" ");
}
__name(createPathFromPoints, "createPathFromPoints");
function generateFullSineWavePoints(St, lr, ur, dr, fr, pr) {
	let mr = [], hr = ur - St, gr = dr - lr, _r = hr / pr, vr = 2 * Math.PI / _r, yr = lr + gr / 2;
	for (let lr = 0; lr <= 50; lr++) {
		let ur = St + lr / 50 * hr, dr = yr + fr * Math.sin(vr * (ur - St));
		mr.push({
			x: ur,
			y: dr
		});
	}
	return mr;
}
__name(generateFullSineWavePoints, "generateFullSineWavePoints");
function generateCirclePoints(St, lr, ur, dr, fr, pr) {
	let mr = [], hr = fr * Math.PI / 180, gr = (pr * Math.PI / 180 - hr) / (dr - 1);
	for (let fr = 0; fr < dr; fr++) {
		let dr = hr + fr * gr, pr = St + ur * Math.cos(dr), _r = lr + ur * Math.sin(dr);
		mr.push({
			x: -pr,
			y: -_r
		});
	}
	return mr;
}
__name(generateCirclePoints, "generateCirclePoints");
var intersect_rect_default = /* @__PURE__ */ __name((St, lr) => {
	var ur = St.x, dr = St.y, fr = lr.x - ur, pr = lr.y - dr, mr = St.width / 2, hr = St.height / 2, gr, _r;
	return Math.abs(pr) * mr > Math.abs(fr) * hr ? (pr < 0 && (hr = -hr), gr = pr === 0 ? 0 : hr * fr / pr, _r = hr) : (fr < 0 && (mr = -mr), gr = mr, _r = fr === 0 ? 0 : mr * pr / fr), {
		x: ur + gr,
		y: dr + _r
	};
}, "intersectRect");
function applyStyle(St, lr) {
	lr && St.attr("style", lr);
}
__name(applyStyle, "applyStyle");
async function addHtmlLabel(St) {
	let lr = select_default(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), ur = lr.append("xhtml:div"), dr = getConfig2(), fr = St.label;
	St.label && hasKatex(St.label) && (fr = await renderKatexSanitized(St.label.replace(common_default.lineBreakRegex, "\n"), dr));
	let pr = "<span class=\"" + (St.isNode ? "nodeLabel" : "edgeLabel") + "\" " + (St.labelStyle ? "style=\"" + St.labelStyle + "\"" : "") + ">" + fr + "</span>";
	return ur.html(sanitizeText(pr, dr)), applyStyle(ur, St.labelStyle), ur.style("display", "inline-block"), ur.style("padding-right", "1px"), ur.style("white-space", "nowrap"), ur.attr("xmlns", "http://www.w3.org/1999/xhtml"), lr.node();
}
__name(addHtmlLabel, "addHtmlLabel");
var createLabel_default = /* @__PURE__ */ __name(async (lr, ur, dr, pr) => {
	let mr = lr || "";
	if (typeof mr == "object" && (mr = mr[0]), evaluate(getConfig2().flowchart.htmlLabels)) return mr = mr.replace(/\\n|\n/g, "<br />"), log.info("vertexText" + mr), await addHtmlLabel({
		isNode: pr,
		label: decodeEntities(mr).replace(/fa[blrs]?:fa-[\w-]+/g, (St) => `<i class='${St.replace(":", " ")}'></i>`),
		labelStyle: ur && ur.replace("fill:", "color:")
	});
	{
		let St = document.createElementNS("http://www.w3.org/2000/svg", "text");
		St.setAttribute("style", ur.replace("color:", "fill:"));
		let lr = [];
		lr = typeof mr == "string" ? mr.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(mr) ? mr : [];
		for (let ur of lr) {
			let lr = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			lr.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), lr.setAttribute("dy", "1em"), lr.setAttribute("x", "0"), dr ? lr.setAttribute("class", "title-row") : lr.setAttribute("class", "row"), lr.textContent = ur.trim(), St.appendChild(lr);
		}
		return St;
	}
}, "createLabel"), createRoundedRectPathD = /* @__PURE__ */ __name((St, lr, ur, dr, fr) => [
	"M",
	St + fr,
	lr,
	"H",
	St + ur - fr,
	"A",
	fr,
	fr,
	0,
	0,
	1,
	St + ur,
	lr + fr,
	"V",
	lr + dr - fr,
	"A",
	fr,
	fr,
	0,
	0,
	1,
	St + ur - fr,
	lr + dr,
	"H",
	St + fr,
	"A",
	fr,
	fr,
	0,
	0,
	1,
	St,
	lr + dr - fr,
	"V",
	lr + fr,
	"A",
	fr,
	fr,
	0,
	0,
	1,
	St + fr,
	lr,
	"Z"
].join(" "), "createRoundedRectPathD"), rect = /* @__PURE__ */ __name(async (St, lr) => {
	log.info("Creating subgraph rect for ", lr.id, lr);
	let ur = getConfig2(), { themeVariables: dr, handDrawnSeed: pr } = ur, { clusterBkg: hr, clusterBorder: gr } = dr, { labelStyles: _r, nodeStyles: vr, borderStyles: yr, backgroundStyles: xr } = styles2String(lr), Cr = St.insert("g").attr("class", "cluster " + lr.cssClasses).attr("id", lr.id).attr("data-look", lr.look), wr = evaluate(ur.flowchart.htmlLabels), Er = Cr.insert("g").attr("class", "cluster-label "), Ar = await createText(Er, lr.label, {
		style: lr.labelStyle,
		useHtmlLabels: wr,
		isNode: !0
	}), jr = Ar.getBBox();
	if (evaluate(ur.flowchart.htmlLabels)) {
		let St = Ar.children[0], lr = select_default(Ar);
		jr = St.getBoundingClientRect(), lr.attr("width", jr.width), lr.attr("height", jr.height);
	}
	let Mr = lr.width <= jr.width + lr.padding ? jr.width + lr.padding : lr.width;
	lr.width <= jr.width + lr.padding ? lr.diff = (Mr - lr.width) / 2 - lr.padding : lr.diff = -lr.padding;
	let Nr = lr.height, Pr = lr.x - Mr / 2, Fr = lr.y - Nr / 2;
	log.trace("Data ", lr, JSON.stringify(lr));
	let Ir;
	if (lr.look === "handDrawn") {
		let St = at.svg(Cr), ur = userNodeOverrides(lr, {
			roughness: .7,
			fill: hr,
			stroke: gr,
			fillWeight: 3,
			seed: pr
		}), dr = St.path(createRoundedRectPathD(Pr, Fr, Mr, Nr, 0), ur);
		Ir = Cr.insert(() => (log.debug("Rough node insert CXC", dr), dr), ":first-child"), Ir.select("path:nth-child(2)").attr("style", yr.join(";")), Ir.select("path").attr("style", xr.join(";").replace("fill", "stroke"));
	} else Ir = Cr.insert("rect", ":first-child"), Ir.attr("style", vr).attr("rx", lr.rx).attr("ry", lr.ry).attr("x", Pr).attr("y", Fr).attr("width", Mr).attr("height", Nr);
	let { subGraphTitleTopMargin: Lr } = getSubGraphTitleMargins(ur);
	if (Er.attr("transform", `translate(${lr.x - jr.width / 2}, ${lr.y - lr.height / 2 + Lr})`), _r) {
		let St = Er.select("span");
		St && St.attr("style", _r);
	}
	let Rr = Ir.node().getBBox();
	return lr.offsetX = 0, lr.width = Rr.width, lr.height = Rr.height, lr.offsetY = jr.height - lr.padding / 2, lr.intersect = function(St) {
		return intersect_rect_default(lr, St);
	}, {
		cluster: Cr,
		labelBBox: jr
	};
}, "rect"), shapes = {
	rect,
	squareRect: rect,
	roundedWithTitle: /* @__PURE__ */ __name(async (St, lr) => {
		let ur = getConfig2(), { themeVariables: dr, handDrawnSeed: fr } = ur, { altBackground: pr, compositeBackground: hr, compositeTitleBackground: gr, nodeBorder: _r } = dr, vr = St.insert("g").attr("class", lr.cssClasses).attr("id", lr.id).attr("data-id", lr.id).attr("data-look", lr.look), yr = vr.insert("g", ":first-child"), xr = vr.insert("g").attr("class", "cluster-label"), Cr = vr.append("rect"), wr = xr.node().appendChild(await createLabel_default(lr.label, lr.labelStyle, void 0, !0)), Tr = wr.getBBox();
		if (evaluate(ur.flowchart.htmlLabels)) {
			let St = wr.children[0], lr = select_default(wr);
			Tr = St.getBoundingClientRect(), lr.attr("width", Tr.width), lr.attr("height", Tr.height);
		}
		let Er = 0 * lr.padding, Dr = Er / 2, Or = (lr.width <= Tr.width + lr.padding ? Tr.width + lr.padding : lr.width) + Er;
		lr.width <= Tr.width + lr.padding ? lr.diff = (Or - lr.width) / 2 - lr.padding : lr.diff = -lr.padding;
		let kr = lr.height + Er, Ar = lr.height + Er - Tr.height - 6, jr = lr.x - Or / 2, Mr = lr.y - kr / 2;
		lr.width = Or;
		let Nr = lr.y - lr.height / 2 - Dr + Tr.height + 2, Pr;
		if (lr.look === "handDrawn") {
			let St = lr.cssClasses.includes("statediagram-cluster-alt"), ur = at.svg(vr), dr = lr.rx || lr.ry ? ur.path(createRoundedRectPathD(jr, Mr, Or, kr, 10), {
				roughness: .7,
				fill: gr,
				fillStyle: "solid",
				stroke: _r,
				seed: fr
			}) : ur.rectangle(jr, Mr, Or, kr, { seed: fr });
			Pr = vr.insert(() => dr, ":first-child");
			let mr = ur.rectangle(jr, Nr, Or, Ar, {
				fill: St ? pr : hr,
				fillStyle: St ? "hachure" : "solid",
				stroke: _r,
				seed: fr
			});
			Pr = vr.insert(() => dr, ":first-child"), Cr = vr.insert(() => mr);
		} else Pr = yr.insert("rect", ":first-child"), Pr.attr("class", "outer").attr("x", jr).attr("y", Mr).attr("width", Or).attr("height", kr).attr("data-look", lr.look), Cr.attr("class", "inner").attr("x", jr).attr("y", Nr).attr("width", Or).attr("height", Ar);
		return xr.attr("transform", `translate(${lr.x - Tr.width / 2}, ${Mr + 1 - (evaluate(ur.flowchart.htmlLabels) ? 0 : 3)})`), lr.height = Pr.node().getBBox().height, lr.offsetX = 0, lr.offsetY = Tr.height - lr.padding / 2, lr.labelBBox = Tr, lr.intersect = function(St) {
			return intersect_rect_default(lr, St);
		}, {
			cluster: vr,
			labelBBox: Tr
		};
	}, "roundedWithTitle"),
	noteGroup: /* @__PURE__ */ __name((St, lr) => {
		let ur = St.insert("g").attr("class", "note-cluster").attr("id", lr.id), dr = ur.insert("rect", ":first-child"), fr = 0 * lr.padding, pr = fr / 2;
		dr.attr("rx", lr.rx).attr("ry", lr.ry).attr("x", lr.x - lr.width / 2 - pr).attr("y", lr.y - lr.height / 2 - pr).attr("width", lr.width + fr).attr("height", lr.height + fr).attr("fill", "none");
		let mr = dr.node().getBBox();
		return lr.width = mr.width, lr.height = mr.height, lr.intersect = function(St) {
			return intersect_rect_default(lr, St);
		}, {
			cluster: ur,
			labelBBox: {
				width: 0,
				height: 0
			}
		};
	}, "noteGroup"),
	divider: /* @__PURE__ */ __name((St, lr) => {
		let { themeVariables: ur, handDrawnSeed: dr } = getConfig2(), { nodeBorder: fr } = ur, pr = St.insert("g").attr("class", lr.cssClasses).attr("id", lr.id).attr("data-look", lr.look), mr = pr.insert("g", ":first-child"), hr = 0 * lr.padding, gr = lr.width + hr;
		lr.diff = -lr.padding;
		let _r = lr.height + hr, vr = lr.x - gr / 2, yr = lr.y - _r / 2;
		lr.width = gr;
		let xr;
		if (lr.look === "handDrawn") {
			let St = at.svg(pr).rectangle(vr, yr, gr, _r, {
				fill: "lightgrey",
				roughness: .5,
				strokeLineDash: [5],
				stroke: fr,
				seed: dr
			});
			xr = pr.insert(() => St, ":first-child");
		} else xr = mr.insert("rect", ":first-child"), xr.attr("class", "divider").attr("x", vr).attr("y", yr).attr("width", gr).attr("height", _r).attr("data-look", lr.look);
		return lr.height = xr.node().getBBox().height, lr.offsetX = 0, lr.offsetY = 0, lr.intersect = function(St) {
			return intersect_rect_default(lr, St);
		}, {
			cluster: pr,
			labelBBox: {}
		};
	}, "divider"),
	kanbanSection: /* @__PURE__ */ __name(async (St, lr) => {
		log.info("Creating subgraph rect for ", lr.id, lr);
		let ur = getConfig2(), { themeVariables: dr, handDrawnSeed: pr } = ur, { clusterBkg: hr, clusterBorder: gr } = dr, { labelStyles: _r, nodeStyles: vr, borderStyles: yr, backgroundStyles: xr } = styles2String(lr), Cr = St.insert("g").attr("class", "cluster " + lr.cssClasses).attr("id", lr.id).attr("data-look", lr.look), wr = evaluate(ur.flowchart.htmlLabels), Er = Cr.insert("g").attr("class", "cluster-label "), Ar = await createText(Er, lr.label, {
			style: lr.labelStyle,
			useHtmlLabels: wr,
			isNode: !0,
			width: lr.width
		}), jr = Ar.getBBox();
		if (evaluate(ur.flowchart.htmlLabels)) {
			let St = Ar.children[0], lr = select_default(Ar);
			jr = St.getBoundingClientRect(), lr.attr("width", jr.width), lr.attr("height", jr.height);
		}
		let Mr = lr.width <= jr.width + lr.padding ? jr.width + lr.padding : lr.width;
		lr.width <= jr.width + lr.padding ? lr.diff = (Mr - lr.width) / 2 - lr.padding : lr.diff = -lr.padding;
		let Nr = lr.height, Pr = lr.x - Mr / 2, Fr = lr.y - Nr / 2;
		log.trace("Data ", lr, JSON.stringify(lr));
		let Ir;
		if (lr.look === "handDrawn") {
			let St = at.svg(Cr), ur = userNodeOverrides(lr, {
				roughness: .7,
				fill: hr,
				stroke: gr,
				fillWeight: 4,
				seed: pr
			}), dr = St.path(createRoundedRectPathD(Pr, Fr, Mr, Nr, lr.rx), ur);
			Ir = Cr.insert(() => (log.debug("Rough node insert CXC", dr), dr), ":first-child"), Ir.select("path:nth-child(2)").attr("style", yr.join(";")), Ir.select("path").attr("style", xr.join(";").replace("fill", "stroke"));
		} else Ir = Cr.insert("rect", ":first-child"), Ir.attr("style", vr).attr("rx", lr.rx).attr("ry", lr.ry).attr("x", Pr).attr("y", Fr).attr("width", Mr).attr("height", Nr);
		let { subGraphTitleTopMargin: Lr } = getSubGraphTitleMargins(ur);
		if (Er.attr("transform", `translate(${lr.x - jr.width / 2}, ${lr.y - lr.height / 2 + Lr})`), _r) {
			let St = Er.select("span");
			St && St.attr("style", _r);
		}
		let Rr = Ir.node().getBBox();
		return lr.offsetX = 0, lr.width = Rr.width, lr.height = Rr.height, lr.offsetY = jr.height - lr.padding / 2, lr.intersect = function(St) {
			return intersect_rect_default(lr, St);
		}, {
			cluster: Cr,
			labelBBox: jr
		};
	}, "kanbanSection")
}, clusterElems = /* @__PURE__ */ new Map(), insertCluster = /* @__PURE__ */ __name(async (St, lr) => {
	let ur = await shapes[lr.shape || "rect"](St, lr);
	return clusterElems.set(lr.id, ur), ur;
}, "insertCluster"), clear = /* @__PURE__ */ __name(() => {
	clusterElems = /* @__PURE__ */ new Map();
}, "clear");
function intersectNode(St, lr) {
	return St.intersect(lr);
}
__name(intersectNode, "intersectNode");
var intersect_node_default = intersectNode;
function intersectEllipse(St, lr, ur, dr) {
	var fr = St.x, pr = St.y, mr = fr - dr.x, hr = pr - dr.y, gr = Math.sqrt(lr * lr * hr * hr + ur * ur * mr * mr), _r = Math.abs(lr * ur * mr / gr);
	dr.x < fr && (_r = -_r);
	var vr = Math.abs(lr * ur * hr / gr);
	return dr.y < pr && (vr = -vr), {
		x: fr + _r,
		y: pr + vr
	};
}
__name(intersectEllipse, "intersectEllipse");
var intersect_ellipse_default = intersectEllipse;
function intersectCircle(St, lr, ur) {
	return intersect_ellipse_default(St, lr, lr, ur);
}
__name(intersectCircle, "intersectCircle");
var intersect_circle_default = intersectCircle;
function intersectLine(St, lr, ur, dr) {
	{
		let fr = lr.y - St.y, pr = St.x - lr.x, mr = lr.x * St.y - St.x * lr.y, hr = fr * ur.x + pr * ur.y + mr, gr = fr * dr.x + pr * dr.y + mr, _r = 1e-6;
		if (hr !== 0 && gr !== 0 && sameSign(hr, gr)) return;
		let vr = dr.y - ur.y, yr = ur.x - dr.x, br = dr.x * ur.y - ur.x * dr.y, xr = vr * St.x + yr * St.y + br, Sr = vr * lr.x + yr * lr.y + br;
		if (Math.abs(xr) < _r && Math.abs(Sr) < _r && sameSign(xr, Sr)) return;
		let Cr = fr * yr - vr * pr;
		if (Cr === 0) return;
		let wr = Math.abs(Cr / 2), Tr = pr * br - yr * mr, Er = Tr < 0 ? (Tr - wr) / Cr : (Tr + wr) / Cr;
		return Tr = vr * mr - fr * br, {
			x: Er,
			y: Tr < 0 ? (Tr - wr) / Cr : (Tr + wr) / Cr
		};
	}
}
__name(intersectLine, "intersectLine");
function sameSign(St, lr) {
	return St * lr > 0;
}
__name(sameSign, "sameSign");
var intersect_line_default = intersectLine;
function intersectPolygon(St, lr, ur) {
	let dr = St.x, fr = St.y, pr = [], mr = Infinity, hr = Infinity;
	typeof lr.forEach == "function" ? lr.forEach(function(St) {
		mr = Math.min(mr, St.x), hr = Math.min(hr, St.y);
	}) : (mr = Math.min(mr, lr.x), hr = Math.min(hr, lr.y));
	let gr = dr - St.width / 2 - mr, _r = fr - St.height / 2 - hr;
	for (let dr = 0; dr < lr.length; dr++) {
		let fr = lr[dr], mr = lr[dr < lr.length - 1 ? dr + 1 : 0], hr = intersect_line_default(St, ur, {
			x: gr + fr.x,
			y: _r + fr.y
		}, {
			x: gr + mr.x,
			y: _r + mr.y
		});
		hr && pr.push(hr);
	}
	return pr.length ? (pr.length > 1 && pr.sort(function(St, lr) {
		let dr = St.x - ur.x, fr = St.y - ur.y, pr = Math.sqrt(dr * dr + fr * fr), mr = lr.x - ur.x, hr = lr.y - ur.y, gr = Math.sqrt(mr * mr + hr * hr);
		return pr < gr ? -1 : pr === gr ? 0 : 1;
	}), pr[0]) : St;
}
__name(intersectPolygon, "intersectPolygon");
var intersect_default = {
	node: intersect_node_default,
	circle: intersect_circle_default,
	ellipse: intersect_ellipse_default,
	polygon: intersectPolygon,
	rect: intersect_rect_default
};
function anchor(St, lr) {
	let { labelStyles: ur } = styles2String(lr);
	lr.labelStyle = ur;
	let pr = getNodeClasses(lr), mr = pr;
	pr || (mr = "anchor");
	let hr = St.insert("g").attr("class", mr).attr("id", lr.domId || lr.id), { cssStyles: gr } = lr, _r = at.svg(hr), vr = userNodeOverrides(lr, {
		fill: "black",
		stroke: "none",
		fillStyle: "solid"
	});
	lr.look !== "handDrawn" && (vr.roughness = 0);
	let yr = _r.circle(0, 0, 2, vr), br = hr.insert(() => yr, ":first-child");
	return br.attr("class", "anchor").attr("style", handleUndefinedAttr(gr)), updateNodeBounds(lr, br), lr.intersect = function(St) {
		return log.info("Circle intersect", lr, 1, St), intersect_default.circle(lr, 1, St);
	}, hr;
}
__name(anchor, "anchor");
function generateArcPoints(St, lr, ur, dr, fr, pr, mr) {
	let hr = (St + ur) / 2, gr = (lr + dr) / 2, _r = Math.atan2(dr - lr, ur - St), vr = (ur - St) / 2, yr = (dr - lr) / 2, br = vr / fr, xr = yr / pr, Sr = Math.sqrt(br ** 2 + xr ** 2);
	if (Sr > 1) throw Error("The given radii are too small to create an arc between the points.");
	let Cr = Math.sqrt(1 - Sr ** 2), wr = hr + Cr * pr * Math.sin(_r) * (mr ? -1 : 1), Tr = gr - Cr * fr * Math.cos(_r) * (mr ? -1 : 1), Er = Math.atan2((lr - Tr) / pr, (St - wr) / fr), Dr = Math.atan2((dr - Tr) / pr, (ur - wr) / fr) - Er;
	mr && Dr < 0 && (Dr += 2 * Math.PI), !mr && Dr > 0 && (Dr -= 2 * Math.PI);
	let Or = [];
	for (let St = 0; St < 20; St++) {
		let lr = Er + St / 19 * Dr, ur = wr + fr * Math.cos(lr), dr = Tr + pr * Math.sin(lr);
		Or.push({
			x: ur,
			y: dr
		});
	}
	return Or;
}
__name(generateArcPoints, "generateArcPoints");
async function bowTieRect(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = pr.width + lr.padding + 20, hr = pr.height + lr.padding, gr = hr / 2, _r = gr / (2.5 + hr / 50), { cssStyles: vr } = lr, yr = [
		{
			x: mr / 2,
			y: -hr / 2
		},
		{
			x: -mr / 2,
			y: -hr / 2
		},
		...generateArcPoints(-mr / 2, -hr / 2, -mr / 2, hr / 2, _r, gr, !1),
		{
			x: mr / 2,
			y: hr / 2
		},
		...generateArcPoints(mr / 2, hr / 2, mr / 2, -hr / 2, _r, gr, !0)
	], br = at.svg(fr), xr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (xr.roughness = 0, xr.fillStyle = "solid");
	let Sr = createPathFromPoints(yr), Cr = br.path(Sr, xr), wr = fr.insert(() => Cr, ":first-child");
	return wr.attr("class", "basic label-container"), vr && lr.look !== "handDrawn" && wr.selectAll("path").attr("style", vr), dr && lr.look !== "handDrawn" && wr.selectAll("path").attr("style", dr), wr.attr("transform", `translate(${_r / 2}, 0)`), updateNodeBounds(lr, wr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, yr, St);
	}, fr;
}
__name(bowTieRect, "bowTieRect");
function insertPolygonShape(St, lr, ur, dr) {
	return St.insert("polygon", ":first-child").attr("points", dr.map(function(St) {
		return St.x + "," + St.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -lr / 2 + "," + ur / 2 + ")");
}
__name(insertPolygonShape, "insertPolygonShape");
async function card(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = pr.height + lr.padding, hr = pr.width + lr.padding + 12, gr = hr, _r = -mr, vr = [
		{
			x: 12,
			y: _r
		},
		{
			x: gr,
			y: _r
		},
		{
			x: gr,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: 0,
			y: _r + 12
		},
		{
			x: 12,
			y: _r
		}
	], yr, { cssStyles: br } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(fr), ur = userNodeOverrides(lr, {}), dr = createPathFromPoints(vr), pr = St.path(dr, ur);
		yr = fr.insert(() => pr, ":first-child").attr("transform", `translate(${-hr / 2}, ${mr / 2})`), br && yr.attr("style", br);
	} else yr = insertPolygonShape(fr, hr, mr, vr);
	return dr && yr.attr("style", dr), updateNodeBounds(lr, yr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, vr, St);
	}, fr;
}
__name(card, "card");
function choice(St, lr) {
	let { nodeStyles: ur } = styles2String(lr);
	lr.label = "";
	let dr = St.insert("g").attr("class", getNodeClasses(lr)).attr("id", lr.domId ?? lr.id), { cssStyles: fr } = lr, pr = Math.max(28, lr.width ?? 0), mr = [
		{
			x: 0,
			y: pr / 2
		},
		{
			x: pr / 2,
			y: 0
		},
		{
			x: 0,
			y: -pr / 2
		},
		{
			x: -pr / 2,
			y: 0
		}
	], hr = at.svg(dr), gr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (gr.roughness = 0, gr.fillStyle = "solid");
	let _r = createPathFromPoints(mr), vr = hr.path(_r, gr), yr = dr.insert(() => vr, ":first-child");
	return fr && lr.look !== "handDrawn" && yr.selectAll("path").attr("style", fr), ur && lr.look !== "handDrawn" && yr.selectAll("path").attr("style", ur), lr.width = 28, lr.height = 28, lr.intersect = function(St) {
		return intersect_default.polygon(lr, mr, St);
	}, dr;
}
__name(choice, "choice");
async function circle(St, lr, ur) {
	let { labelStyles: pr, nodeStyles: mr } = styles2String(lr);
	lr.labelStyle = pr;
	let { shapeSvg: hr, bbox: gr, halfPadding: _r } = await labelHelper(St, lr, getNodeClasses(lr)), vr = ur?.padding ?? _r, yr = gr.width / 2 + vr, br, { cssStyles: xr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(hr), ur = userNodeOverrides(lr, {}), fr = St.circle(0, 0, yr * 2, ur);
		br = hr.insert(() => fr, ":first-child"), br.attr("class", "basic label-container").attr("style", handleUndefinedAttr(xr));
	} else br = hr.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", mr).attr("r", yr).attr("cx", 0).attr("cy", 0);
	return updateNodeBounds(lr, br), lr.calcIntersect = function(St, lr) {
		let ur = St.width / 2;
		return intersect_default.circle(St, ur, lr);
	}, lr.intersect = function(St) {
		return log.info("Circle intersect", lr, yr, St), intersect_default.circle(lr, yr, St);
	}, hr;
}
__name(circle, "circle");
function createLine(St) {
	let lr = Math.cos(Math.PI / 4), ur = Math.sin(Math.PI / 4), dr = St * 2, fr = {
		x: dr / 2 * lr,
		y: dr / 2 * ur
	}, pr = {
		x: -(dr / 2) * lr,
		y: dr / 2 * ur
	}, mr = {
		x: -(dr / 2) * lr,
		y: -(dr / 2) * ur
	}, hr = {
		x: dr / 2 * lr,
		y: -(dr / 2) * ur
	};
	return `M ${pr.x},${pr.y} L ${hr.x},${hr.y}
                   M ${fr.x},${fr.y} L ${mr.x},${mr.y}`;
}
__name(createLine, "createLine");
function crossedCircle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur, lr.label = "";
	let pr = St.insert("g").attr("class", getNodeClasses(lr)).attr("id", lr.domId ?? lr.id), mr = Math.max(30, lr?.width ?? 0), { cssStyles: hr } = lr, gr = at.svg(pr), _r = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (_r.roughness = 0, _r.fillStyle = "solid");
	let vr = gr.circle(0, 0, mr * 2, _r), yr = createLine(mr), br = gr.path(yr, _r), xr = pr.insert(() => vr, ":first-child");
	return xr.insert(() => br), hr && lr.look !== "handDrawn" && xr.selectAll("path").attr("style", hr), dr && lr.look !== "handDrawn" && xr.selectAll("path").attr("style", dr), updateNodeBounds(lr, xr), lr.intersect = function(St) {
		return log.info("crossedCircle intersect", lr, {
			radius: mr,
			point: St
		}), intersect_default.circle(lr, mr, St);
	}, pr;
}
__name(crossedCircle, "crossedCircle");
function generateCirclePoints2(St, lr, ur, dr = 100, fr = 0, pr = 180) {
	let mr = [], hr = fr * Math.PI / 180, gr = (pr * Math.PI / 180 - hr) / (dr - 1);
	for (let fr = 0; fr < dr; fr++) {
		let dr = hr + fr * gr, pr = St + ur * Math.cos(dr), _r = lr + ur * Math.sin(dr);
		mr.push({
			x: -pr,
			y: -_r
		});
	}
	return mr;
}
__name(generateCirclePoints2, "generateCirclePoints");
async function curlyBraceLeft(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = pr.width + (lr.padding ?? 0), gr = pr.height + (lr.padding ?? 0), _r = Math.max(5, gr * .1), { cssStyles: vr } = lr, yr = [
		...generateCirclePoints2(hr / 2, -gr / 2, _r, 30, -90, 0),
		{
			x: -hr / 2 - _r,
			y: _r
		},
		...generateCirclePoints2(hr / 2 + _r * 2, -_r, _r, 20, -180, -270),
		...generateCirclePoints2(hr / 2 + _r * 2, _r, _r, 20, -90, -180),
		{
			x: -hr / 2 - _r,
			y: -gr / 2
		},
		...generateCirclePoints2(hr / 2, gr / 2, _r, 20, 0, 90)
	], br = [
		{
			x: hr / 2,
			y: -gr / 2 - _r
		},
		{
			x: -hr / 2,
			y: -gr / 2 - _r
		},
		...generateCirclePoints2(hr / 2, -gr / 2, _r, 20, -90, 0),
		{
			x: -hr / 2 - _r,
			y: -_r
		},
		...generateCirclePoints2(hr / 2 + hr * .1, -_r, _r, 20, -180, -270),
		...generateCirclePoints2(hr / 2 + hr * .1, _r, _r, 20, -90, -180),
		{
			x: -hr / 2 - _r,
			y: gr / 2
		},
		...generateCirclePoints2(hr / 2, gr / 2, _r, 20, 0, 90),
		{
			x: -hr / 2,
			y: gr / 2 + _r
		},
		{
			x: hr / 2,
			y: gr / 2 + _r
		}
	], xr = at.svg(fr), Sr = userNodeOverrides(lr, { fill: "none" });
	lr.look !== "handDrawn" && (Sr.roughness = 0, Sr.fillStyle = "solid");
	let Cr = createPathFromPoints(yr).replace("Z", ""), wr = xr.path(Cr, Sr), Tr = createPathFromPoints(br), Er = xr.path(Tr, { ...Sr }), Dr = fr.insert("g", ":first-child");
	return Dr.insert(() => Er, ":first-child").attr("stroke-opacity", 0), Dr.insert(() => wr, ":first-child"), Dr.attr("class", "text"), vr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", vr), dr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", dr), Dr.attr("transform", `translate(${_r}, 0)`), mr.attr("transform", `translate(${-hr / 2 + _r - (pr.x - (pr.left ?? 0))},${-gr / 2 + (lr.padding ?? 0) / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Dr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, br, St);
	}, fr;
}
__name(curlyBraceLeft, "curlyBraceLeft");
function generateCirclePoints3(St, lr, ur, dr = 100, fr = 0, pr = 180) {
	let mr = [], hr = fr * Math.PI / 180, gr = (pr * Math.PI / 180 - hr) / (dr - 1);
	for (let fr = 0; fr < dr; fr++) {
		let dr = hr + fr * gr, pr = St + ur * Math.cos(dr), _r = lr + ur * Math.sin(dr);
		mr.push({
			x: pr,
			y: _r
		});
	}
	return mr;
}
__name(generateCirclePoints3, "generateCirclePoints");
async function curlyBraceRight(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = pr.width + (lr.padding ?? 0), gr = pr.height + (lr.padding ?? 0), _r = Math.max(5, gr * .1), { cssStyles: vr } = lr, yr = [
		...generateCirclePoints3(hr / 2, -gr / 2, _r, 20, -90, 0),
		{
			x: hr / 2 + _r,
			y: -_r
		},
		...generateCirclePoints3(hr / 2 + _r * 2, -_r, _r, 20, -180, -270),
		...generateCirclePoints3(hr / 2 + _r * 2, _r, _r, 20, -90, -180),
		{
			x: hr / 2 + _r,
			y: gr / 2
		},
		...generateCirclePoints3(hr / 2, gr / 2, _r, 20, 0, 90)
	], br = [
		{
			x: -hr / 2,
			y: -gr / 2 - _r
		},
		{
			x: hr / 2,
			y: -gr / 2 - _r
		},
		...generateCirclePoints3(hr / 2, -gr / 2, _r, 20, -90, 0),
		{
			x: hr / 2 + _r,
			y: -_r
		},
		...generateCirclePoints3(hr / 2 + _r * 2, -_r, _r, 20, -180, -270),
		...generateCirclePoints3(hr / 2 + _r * 2, _r, _r, 20, -90, -180),
		{
			x: hr / 2 + _r,
			y: gr / 2
		},
		...generateCirclePoints3(hr / 2, gr / 2, _r, 20, 0, 90),
		{
			x: hr / 2,
			y: gr / 2 + _r
		},
		{
			x: -hr / 2,
			y: gr / 2 + _r
		}
	], xr = at.svg(fr), Sr = userNodeOverrides(lr, { fill: "none" });
	lr.look !== "handDrawn" && (Sr.roughness = 0, Sr.fillStyle = "solid");
	let Cr = createPathFromPoints(yr).replace("Z", ""), wr = xr.path(Cr, Sr), Tr = createPathFromPoints(br), Er = xr.path(Tr, { ...Sr }), Dr = fr.insert("g", ":first-child");
	return Dr.insert(() => Er, ":first-child").attr("stroke-opacity", 0), Dr.insert(() => wr, ":first-child"), Dr.attr("class", "text"), vr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", vr), dr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", dr), Dr.attr("transform", `translate(${-_r}, 0)`), mr.attr("transform", `translate(${-hr / 2 + (lr.padding ?? 0) / 2 - (pr.x - (pr.left ?? 0))},${-gr / 2 + (lr.padding ?? 0) / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Dr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, br, St);
	}, fr;
}
__name(curlyBraceRight, "curlyBraceRight");
function generateCirclePoints4(St, lr, ur, dr = 100, fr = 0, pr = 180) {
	let mr = [], hr = fr * Math.PI / 180, gr = (pr * Math.PI / 180 - hr) / (dr - 1);
	for (let fr = 0; fr < dr; fr++) {
		let dr = hr + fr * gr, pr = St + ur * Math.cos(dr), _r = lr + ur * Math.sin(dr);
		mr.push({
			x: -pr,
			y: -_r
		});
	}
	return mr;
}
__name(generateCirclePoints4, "generateCirclePoints");
async function curlyBraces(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = pr.width + (lr.padding ?? 0), gr = pr.height + (lr.padding ?? 0), _r = Math.max(5, gr * .1), { cssStyles: vr } = lr, yr = [
		...generateCirclePoints4(hr / 2, -gr / 2, _r, 30, -90, 0),
		{
			x: -hr / 2 - _r,
			y: _r
		},
		...generateCirclePoints4(hr / 2 + _r * 2, -_r, _r, 20, -180, -270),
		...generateCirclePoints4(hr / 2 + _r * 2, _r, _r, 20, -90, -180),
		{
			x: -hr / 2 - _r,
			y: -gr / 2
		},
		...generateCirclePoints4(hr / 2, gr / 2, _r, 20, 0, 90)
	], br = [
		...generateCirclePoints4(-hr / 2 + _r + _r / 2, -gr / 2, _r, 20, -90, -180),
		{
			x: hr / 2 - _r / 2,
			y: _r
		},
		...generateCirclePoints4(-hr / 2 - _r / 2, -_r, _r, 20, 0, 90),
		...generateCirclePoints4(-hr / 2 - _r / 2, _r, _r, 20, -90, 0),
		{
			x: hr / 2 - _r / 2,
			y: -_r
		},
		...generateCirclePoints4(-hr / 2 + _r + _r / 2, gr / 2, _r, 30, -180, -270)
	], xr = [
		{
			x: hr / 2,
			y: -gr / 2 - _r
		},
		{
			x: -hr / 2,
			y: -gr / 2 - _r
		},
		...generateCirclePoints4(hr / 2, -gr / 2, _r, 20, -90, 0),
		{
			x: -hr / 2 - _r,
			y: -_r
		},
		...generateCirclePoints4(hr / 2 + _r * 2, -_r, _r, 20, -180, -270),
		...generateCirclePoints4(hr / 2 + _r * 2, _r, _r, 20, -90, -180),
		{
			x: -hr / 2 - _r,
			y: gr / 2
		},
		...generateCirclePoints4(hr / 2, gr / 2, _r, 20, 0, 90),
		{
			x: -hr / 2,
			y: gr / 2 + _r
		},
		{
			x: hr / 2 - _r - _r / 2,
			y: gr / 2 + _r
		},
		...generateCirclePoints4(-hr / 2 + _r + _r / 2, -gr / 2, _r, 20, -90, -180),
		{
			x: hr / 2 - _r / 2,
			y: _r
		},
		...generateCirclePoints4(-hr / 2 - _r / 2, -_r, _r, 20, 0, 90),
		...generateCirclePoints4(-hr / 2 - _r / 2, _r, _r, 20, -90, 0),
		{
			x: hr / 2 - _r / 2,
			y: -_r
		},
		...generateCirclePoints4(-hr / 2 + _r + _r / 2, gr / 2, _r, 30, -180, -270)
	], Sr = at.svg(fr), Cr = userNodeOverrides(lr, { fill: "none" });
	lr.look !== "handDrawn" && (Cr.roughness = 0, Cr.fillStyle = "solid");
	let wr = createPathFromPoints(yr).replace("Z", ""), Tr = Sr.path(wr, Cr), Er = createPathFromPoints(br).replace("Z", ""), Dr = Sr.path(Er, Cr), Ar = createPathFromPoints(xr), jr = Sr.path(Ar, { ...Cr }), Mr = fr.insert("g", ":first-child");
	return Mr.insert(() => jr, ":first-child").attr("stroke-opacity", 0), Mr.insert(() => Tr, ":first-child"), Mr.insert(() => Dr, ":first-child"), Mr.attr("class", "text"), vr && lr.look !== "handDrawn" && Mr.selectAll("path").attr("style", vr), dr && lr.look !== "handDrawn" && Mr.selectAll("path").attr("style", dr), Mr.attr("transform", `translate(${_r - _r / 4}, 0)`), mr.attr("transform", `translate(${-hr / 2 + (lr.padding ?? 0) / 2 - (pr.x - (pr.left ?? 0))},${-gr / 2 + (lr.padding ?? 0) / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Mr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, xr, St);
	}, fr;
}
__name(curlyBraces, "curlyBraces");
async function curvedTrapezoid(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(80, (pr.width + (lr.padding ?? 0) * 2) * 1.25, lr?.width ?? 0), hr = Math.max(20, pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), gr = hr / 2, { cssStyles: _r } = lr, vr = at.svg(fr), yr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (yr.roughness = 0, yr.fillStyle = "solid");
	let br = mr, xr = hr, Sr = br - gr, Cr = xr / 4, wr = [
		{
			x: Sr,
			y: 0
		},
		{
			x: Cr,
			y: 0
		},
		{
			x: 0,
			y: xr / 2
		},
		{
			x: Cr,
			y: xr
		},
		{
			x: Sr,
			y: xr
		},
		...generateCirclePoints(-Sr, -xr / 2, gr, 50, 270, 90)
	], Tr = createPathFromPoints(wr), Er = vr.path(Tr, yr), Dr = fr.insert(() => Er, ":first-child");
	return Dr.attr("class", "basic label-container"), _r && lr.look !== "handDrawn" && Dr.selectChildren("path").attr("style", _r), dr && lr.look !== "handDrawn" && Dr.selectChildren("path").attr("style", dr), Dr.attr("transform", `translate(${-mr / 2}, ${-hr / 2})`), updateNodeBounds(lr, Dr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, wr, St);
	}, fr;
}
__name(curvedTrapezoid, "curvedTrapezoid");
var createCylinderPathD = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr) => [
	`M${St},${lr + pr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`,
	`a${fr},${pr} 0,0,0 ${-ur},0`,
	`l0,${dr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`,
	`l0,${-dr}`
].join(" "), "createCylinderPathD"), createOuterCylinderPathD = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr) => [
	`M${St},${lr + pr}`,
	`M${St + ur},${lr + pr}`,
	`a${fr},${pr} 0,0,0 ${-ur},0`,
	`l0,${dr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`,
	`l0,${-dr}`
].join(" "), "createOuterCylinderPathD"), createInnerCylinderPathD = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr) => [`M${St - ur / 2},${-dr / 2}`, `a${fr},${pr} 0,0,0 ${ur},0`].join(" "), "createInnerCylinderPathD");
async function cylinder(St, lr) {
	let { labelStyles: ur, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr, label: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = Math.max(mr.width + lr.padding, lr.width ?? 0), _r = gr / 2, vr = _r / (2.5 + gr / 50), yr = Math.max(mr.height + vr + lr.padding, lr.height ?? 0), br, { cssStyles: xr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(pr), ur = createOuterCylinderPathD(0, 0, gr, yr, _r, vr), dr = createInnerCylinderPathD(0, vr, gr, yr, _r, vr), fr = St.path(ur, userNodeOverrides(lr, {})), mr = St.path(dr, userNodeOverrides(lr, { fill: "none" }));
		br = pr.insert(() => mr, ":first-child"), br = pr.insert(() => fr, ":first-child"), br.attr("class", "basic label-container"), xr && br.attr("style", xr);
	} else {
		let St = createCylinderPathD(0, 0, gr, yr, _r, vr);
		br = pr.insert("path", ":first-child").attr("d", St).attr("class", "basic label-container").attr("style", handleUndefinedAttr(xr)).attr("style", fr);
	}
	return br.attr("label-offset-y", vr), br.attr("transform", `translate(${-gr / 2}, ${-(yr / 2 + vr)})`), updateNodeBounds(lr, br), hr.attr("transform", `translate(${-(mr.width / 2) - (mr.x - (mr.left ?? 0))}, ${-(mr.height / 2) + (lr.padding ?? 0) / 1.5 - (mr.y - (mr.top ?? 0))})`), lr.intersect = function(St) {
		let ur = intersect_default.rect(lr, St), dr = ur.x - (lr.x ?? 0);
		if (_r != 0 && (Math.abs(dr) < (lr.width ?? 0) / 2 || Math.abs(dr) == (lr.width ?? 0) / 2 && Math.abs(ur.y - (lr.y ?? 0)) > (lr.height ?? 0) / 2 - vr)) {
			let fr = vr * vr * (1 - dr * dr / (_r * _r));
			fr > 0 && (fr = Math.sqrt(fr)), fr = vr - fr, St.y - (lr.y ?? 0) > 0 && (fr = -fr), ur.y += fr;
		}
		return ur;
	}, pr;
}
__name(cylinder, "cylinder");
async function dividedRectangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = pr.width + lr.padding, gr = pr.height + lr.padding, _r = gr * .2, vr = -hr / 2, yr = -gr / 2 - _r / 2, { cssStyles: br } = lr, xr = at.svg(fr), Sr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Sr.roughness = 0, Sr.fillStyle = "solid");
	let Cr = [
		{
			x: vr,
			y: yr + _r
		},
		{
			x: -vr,
			y: yr + _r
		},
		{
			x: -vr,
			y: -yr
		},
		{
			x: vr,
			y: -yr
		},
		{
			x: vr,
			y: yr
		},
		{
			x: -vr,
			y: yr
		},
		{
			x: -vr,
			y: yr + _r
		}
	], wr = xr.polygon(Cr.map((St) => [St.x, St.y]), Sr), Tr = fr.insert(() => wr, ":first-child");
	return Tr.attr("class", "basic label-container"), br && lr.look !== "handDrawn" && Tr.selectAll("path").attr("style", br), dr && lr.look !== "handDrawn" && Tr.selectAll("path").attr("style", dr), mr.attr("transform", `translate(${vr + (lr.padding ?? 0) / 2 - (pr.x - (pr.left ?? 0))}, ${yr + _r + (lr.padding ?? 0) / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Tr), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, fr;
}
__name(dividedRectangle, "dividedRectangle");
async function doublecircle(St, lr) {
	let { labelStyles: ur, nodeStyles: pr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: mr, bbox: hr, halfPadding: gr } = await labelHelper(St, lr, getNodeClasses(lr)), _r = hr.width / 2 + gr + 5, vr = hr.width / 2 + gr, yr, { cssStyles: br } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(mr), ur = userNodeOverrides(lr, {
			roughness: .2,
			strokeWidth: 2.5
		}), fr = userNodeOverrides(lr, {
			roughness: .2,
			strokeWidth: 1.5
		}), pr = St.circle(0, 0, _r * 2, ur), hr = St.circle(0, 0, vr * 2, fr);
		yr = mr.insert("g", ":first-child"), yr.attr("class", handleUndefinedAttr(lr.cssClasses)).attr("style", handleUndefinedAttr(br)), yr.node()?.appendChild(pr), yr.node()?.appendChild(hr);
	} else {
		yr = mr.insert("g", ":first-child");
		let St = yr.insert("circle", ":first-child"), lr = yr.insert("circle");
		yr.attr("class", "basic label-container").attr("style", pr), St.attr("class", "outer-circle").attr("style", pr).attr("r", _r).attr("cx", 0).attr("cy", 0), lr.attr("class", "inner-circle").attr("style", pr).attr("r", vr).attr("cx", 0).attr("cy", 0);
	}
	return updateNodeBounds(lr, yr), lr.intersect = function(St) {
		return log.info("DoubleCircle intersect", lr, _r, St), intersect_default.circle(lr, _r, St);
	}, mr;
}
__name(doublecircle, "doublecircle");
function filledCircle(St, lr, { config: { themeVariables: ur } }) {
	let { labelStyles: dr, nodeStyles: pr } = styles2String(lr);
	lr.label = "", lr.labelStyle = dr;
	let mr = St.insert("g").attr("class", getNodeClasses(lr)).attr("id", lr.domId ?? lr.id), { cssStyles: hr } = lr, gr = at.svg(mr), { nodeBorder: _r } = ur, vr = userNodeOverrides(lr, { fillStyle: "solid" });
	lr.look !== "handDrawn" && (vr.roughness = 0);
	let yr = gr.circle(0, 0, 14, vr), br = mr.insert(() => yr, ":first-child");
	return br.selectAll("path").attr("style", `fill: ${_r} !important;`), hr && hr.length > 0 && lr.look !== "handDrawn" && br.selectAll("path").attr("style", hr), pr && lr.look !== "handDrawn" && br.selectAll("path").attr("style", pr), updateNodeBounds(lr, br), lr.intersect = function(St) {
		return log.info("filledCircle intersect", lr, {
			radius: 7,
			point: St
		}), intersect_default.circle(lr, 7, St);
	}, mr;
}
__name(filledCircle, "filledCircle");
async function flippedTriangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr, label: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = mr.width + (lr.padding ?? 0), _r = gr + mr.height, vr = gr + mr.height, yr = [
		{
			x: 0,
			y: -_r
		},
		{
			x: vr,
			y: -_r
		},
		{
			x: vr / 2,
			y: 0
		}
	], { cssStyles: br } = lr, xr = at.svg(pr), Sr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Sr.roughness = 0, Sr.fillStyle = "solid");
	let Cr = createPathFromPoints(yr), wr = xr.path(Cr, Sr), Tr = pr.insert(() => wr, ":first-child").attr("transform", `translate(${-_r / 2}, ${_r / 2})`);
	return br && lr.look !== "handDrawn" && Tr.selectChildren("path").attr("style", br), dr && lr.look !== "handDrawn" && Tr.selectChildren("path").attr("style", dr), lr.width = gr, lr.height = _r, updateNodeBounds(lr, Tr), hr.attr("transform", `translate(${-mr.width / 2 - (mr.x - (mr.left ?? 0))}, ${-_r / 2 + (lr.padding ?? 0) / 2 + (mr.y - (mr.top ?? 0))})`), lr.intersect = function(St) {
		return log.info("Triangle intersect", lr, yr, St), intersect_default.polygon(lr, yr, St);
	}, pr;
}
__name(flippedTriangle, "flippedTriangle");
function forkJoin(St, lr, { dir: ur, config: { state: dr, themeVariables: fr } }) {
	let { nodeStyles: pr } = styles2String(lr);
	lr.label = "";
	let mr = St.insert("g").attr("class", getNodeClasses(lr)).attr("id", lr.domId ?? lr.id), { cssStyles: hr } = lr, gr = Math.max(70, lr?.width ?? 0), _r = Math.max(10, lr?.height ?? 0);
	ur === "LR" && (gr = Math.max(10, lr?.width ?? 0), _r = Math.max(70, lr?.height ?? 0));
	let vr = -1 * gr / 2, yr = -1 * _r / 2, br = at.svg(mr), xr = userNodeOverrides(lr, {
		stroke: fr.lineColor,
		fill: fr.lineColor
	});
	lr.look !== "handDrawn" && (xr.roughness = 0, xr.fillStyle = "solid");
	let Sr = br.rectangle(vr, yr, gr, _r, xr), Cr = mr.insert(() => Sr, ":first-child");
	hr && lr.look !== "handDrawn" && Cr.selectAll("path").attr("style", hr), pr && lr.look !== "handDrawn" && Cr.selectAll("path").attr("style", pr), updateNodeBounds(lr, Cr);
	let wr = dr?.padding ?? 0;
	return lr.width && lr.height && (lr.width += wr / 2 || 0, lr.height += wr / 2 || 0), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, mr;
}
__name(forkJoin, "forkJoin");
async function halfRoundedRectangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(80, mr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(50, mr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = gr / 2, { cssStyles: vr } = lr, yr = at.svg(pr), br = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (br.roughness = 0, br.fillStyle = "solid");
	let xr = [
		{
			x: -hr / 2,
			y: -gr / 2
		},
		{
			x: hr / 2 - _r,
			y: -gr / 2
		},
		...generateCirclePoints(-hr / 2 + _r, 0, _r, 50, 90, 270),
		{
			x: hr / 2 - _r,
			y: gr / 2
		},
		{
			x: -hr / 2,
			y: gr / 2
		}
	], Sr = createPathFromPoints(xr), Cr = yr.path(Sr, br), wr = pr.insert(() => Cr, ":first-child");
	return wr.attr("class", "basic label-container"), vr && lr.look !== "handDrawn" && wr.selectChildren("path").attr("style", vr), dr && lr.look !== "handDrawn" && wr.selectChildren("path").attr("style", dr), updateNodeBounds(lr, wr), lr.intersect = function(St) {
		return log.info("Pill intersect", lr, {
			radius: _r,
			point: St
		}), intersect_default.polygon(lr, xr, St);
	}, pr;
}
__name(halfRoundedRectangle, "halfRoundedRectangle");
async function hexagon(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = pr.height + (lr.padding ?? 0), hr = pr.width + (lr.padding ?? 0) * 2.5, { cssStyles: gr } = lr, _r = at.svg(fr), vr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (vr.roughness = 0, vr.fillStyle = "solid");
	let yr = hr / 2, br = yr / 6;
	yr += br;
	let xr = mr / 2, Sr = xr / 2, Cr = yr - Sr, wr = [
		{
			x: -Cr,
			y: -xr
		},
		{
			x: 0,
			y: -xr
		},
		{
			x: Cr,
			y: -xr
		},
		{
			x: yr,
			y: 0
		},
		{
			x: Cr,
			y: xr
		},
		{
			x: 0,
			y: xr
		},
		{
			x: -Cr,
			y: xr
		},
		{
			x: -yr,
			y: 0
		}
	], Tr = createPathFromPoints(wr), Er = _r.path(Tr, vr), Dr = fr.insert(() => Er, ":first-child");
	return Dr.attr("class", "basic label-container"), gr && lr.look !== "handDrawn" && Dr.selectChildren("path").attr("style", gr), dr && lr.look !== "handDrawn" && Dr.selectChildren("path").attr("style", dr), lr.width = hr, lr.height = mr, updateNodeBounds(lr, Dr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, wr, St);
	}, fr;
}
__name(hexagon, "hexagon");
async function hourglass(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.label = "", lr.labelStyle = ur;
	let { shapeSvg: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(30, lr?.width ?? 0), hr = Math.max(30, lr?.height ?? 0), { cssStyles: gr } = lr, _r = at.svg(pr), vr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (vr.roughness = 0, vr.fillStyle = "solid");
	let yr = [
		{
			x: 0,
			y: 0
		},
		{
			x: mr,
			y: 0
		},
		{
			x: 0,
			y: hr
		},
		{
			x: mr,
			y: hr
		}
	], br = createPathFromPoints(yr), xr = _r.path(br, vr), Sr = pr.insert(() => xr, ":first-child");
	return Sr.attr("class", "basic label-container"), gr && lr.look !== "handDrawn" && Sr.selectChildren("path").attr("style", gr), dr && lr.look !== "handDrawn" && Sr.selectChildren("path").attr("style", dr), Sr.attr("transform", `translate(${-mr / 2}, ${-hr / 2})`), updateNodeBounds(lr, Sr), lr.intersect = function(St) {
		return log.info("Pill intersect", lr, { points: yr }), intersect_default.polygon(lr, yr, St);
	}, pr;
}
__name(hourglass, "hourglass");
async function icon(St, lr, { config: { themeVariables: ur, flowchart: dr } }) {
	let { labelStyles: pr } = styles2String(lr);
	lr.labelStyle = pr;
	let mr = lr.assetHeight ?? 48, hr = lr.assetWidth ?? 48, gr = Math.max(mr, hr), _r = dr?.wrappingWidth;
	lr.width = Math.max(gr, _r ?? 0);
	let { shapeSvg: vr, bbox: yr, label: br } = await labelHelper(St, lr, "icon-shape default"), xr = lr.pos === "t", Sr = gr, Cr = gr, { nodeBorder: wr } = ur, { stylesMap: Tr } = compileStyles(lr), Dr = -Cr / 2, Ar = -Sr / 2, Mr = lr.label ? 8 : 0, Nr = at.svg(vr), Pr = userNodeOverrides(lr, {
		stroke: "none",
		fill: "none"
	});
	lr.look !== "handDrawn" && (Pr.roughness = 0, Pr.fillStyle = "solid");
	let Fr = Nr.rectangle(Dr, Ar, Cr, Sr, Pr), Ir = Math.max(Cr, yr.width), Lr = Sr + yr.height + Mr, Rr = Nr.rectangle(-Ir / 2, -Lr / 2, Ir, Lr, {
		...Pr,
		fill: "transparent",
		stroke: "none"
	}), zr = vr.insert(() => Fr, ":first-child"), Br = vr.insert(() => Rr);
	if (lr.icon) {
		let St = vr.append("g");
		St.html(`<g>${await getIconSVG(lr.icon, {
			height: gr,
			width: gr,
			fallbackPrefix: ""
		})}</g>`);
		let ur = St.node().getBBox(), dr = ur.width, fr = ur.height, pr = ur.x, mr = ur.y;
		St.attr("transform", `translate(${-dr / 2 - pr},${xr ? yr.height / 2 + Mr / 2 - fr / 2 - mr : -yr.height / 2 - Mr / 2 - fr / 2 - mr})`), St.attr("style", `color: ${Tr.get("stroke") ?? wr};`);
	}
	return br.attr("transform", `translate(${-yr.width / 2 - (yr.x - (yr.left ?? 0))},${xr ? -Lr / 2 : Lr / 2 - yr.height})`), zr.attr("transform", `translate(0,${xr ? yr.height / 2 + Mr / 2 : -yr.height / 2 - Mr / 2})`), updateNodeBounds(lr, Br), lr.intersect = function(St) {
		if (log.info("iconSquare intersect", lr, St), !lr.label) return intersect_default.rect(lr, St);
		let ur = lr.x ?? 0, dr = lr.y ?? 0, pr = lr.height ?? 0, mr = [];
		return mr = xr ? [
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2 + yr.height + Mr
			},
			{
				x: ur + Cr / 2,
				y: dr - pr / 2 + yr.height + Mr
			},
			{
				x: ur + Cr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - Cr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - Cr / 2,
				y: dr - pr / 2 + yr.height + Mr
			},
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2 + yr.height + Mr
			}
		] : [
			{
				x: ur - Cr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + Cr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + Cr / 2,
				y: dr - pr / 2 + Sr
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2 + Sr
			},
			{
				x: ur + yr.width / 2 / 2,
				y: dr + pr / 2
			},
			{
				x: ur - yr.width / 2,
				y: dr + pr / 2
			},
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2 + Sr
			},
			{
				x: ur - Cr / 2,
				y: dr - pr / 2 + Sr
			}
		], intersect_default.polygon(lr, mr, St);
	}, vr;
}
__name(icon, "icon");
async function iconCircle(St, lr, { config: { themeVariables: ur, flowchart: dr } }) {
	let { labelStyles: pr } = styles2String(lr);
	lr.labelStyle = pr;
	let mr = lr.assetHeight ?? 48, hr = lr.assetWidth ?? 48, gr = Math.max(mr, hr), _r = dr?.wrappingWidth;
	lr.width = Math.max(gr, _r ?? 0);
	let { shapeSvg: vr, bbox: yr, label: br } = await labelHelper(St, lr, "icon-shape default"), xr = lr.label ? 8 : 0, Sr = lr.pos === "t", { nodeBorder: Cr, mainBkg: wr } = ur, { stylesMap: Tr } = compileStyles(lr), Dr = at.svg(vr), Ar = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Ar.roughness = 0, Ar.fillStyle = "solid"), Ar.stroke = Tr.get("fill") ?? wr;
	let Mr = vr.append("g");
	lr.icon && Mr.html(`<g>${await getIconSVG(lr.icon, {
		height: gr,
		width: gr,
		fallbackPrefix: ""
	})}</g>`);
	let Nr = Mr.node().getBBox(), Pr = Nr.width, Fr = Nr.height, Ir = Nr.x, Lr = Nr.y, Rr = Math.max(Pr, Fr) * Math.SQRT2 + 40, zr = Dr.circle(0, 0, Rr, Ar), Br = Math.max(Rr, yr.width), Vr = Rr + yr.height + xr, Hr = Dr.rectangle(-Br / 2, -Vr / 2, Br, Vr, {
		...Ar,
		fill: "transparent",
		stroke: "none"
	}), Ur = vr.insert(() => zr, ":first-child"), Wr = vr.insert(() => Hr);
	return Mr.attr("transform", `translate(${-Pr / 2 - Ir},${Sr ? yr.height / 2 + xr / 2 - Fr / 2 - Lr : -yr.height / 2 - xr / 2 - Fr / 2 - Lr})`), Mr.attr("style", `color: ${Tr.get("stroke") ?? Cr};`), br.attr("transform", `translate(${-yr.width / 2 - (yr.x - (yr.left ?? 0))},${Sr ? -Vr / 2 : Vr / 2 - yr.height})`), Ur.attr("transform", `translate(0,${Sr ? yr.height / 2 + xr / 2 : -yr.height / 2 - xr / 2})`), updateNodeBounds(lr, Wr), lr.intersect = function(St) {
		return log.info("iconSquare intersect", lr, St), intersect_default.rect(lr, St);
	}, vr;
}
__name(iconCircle, "iconCircle");
async function iconRounded(St, lr, { config: { themeVariables: ur, flowchart: dr } }) {
	let { labelStyles: pr } = styles2String(lr);
	lr.labelStyle = pr;
	let mr = lr.assetHeight ?? 48, hr = lr.assetWidth ?? 48, gr = Math.max(mr, hr), _r = dr?.wrappingWidth;
	lr.width = Math.max(gr, _r ?? 0);
	let { shapeSvg: vr, bbox: yr, halfPadding: br, label: xr } = await labelHelper(St, lr, "icon-shape default"), Sr = lr.pos === "t", Cr = gr + br * 2, wr = gr + br * 2, { nodeBorder: Tr, mainBkg: Dr } = ur, { stylesMap: Ar } = compileStyles(lr), Mr = -wr / 2, Nr = -Cr / 2, Pr = lr.label ? 8 : 0, Fr = at.svg(vr), Ir = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Ir.roughness = 0, Ir.fillStyle = "solid"), Ir.stroke = Ar.get("fill") ?? Dr;
	let Lr = Fr.path(createRoundedRectPathD(Mr, Nr, wr, Cr, 5), Ir), Rr = Math.max(wr, yr.width), zr = Cr + yr.height + Pr, Br = Fr.rectangle(-Rr / 2, -zr / 2, Rr, zr, {
		...Ir,
		fill: "transparent",
		stroke: "none"
	}), Vr = vr.insert(() => Lr, ":first-child").attr("class", "icon-shape2"), Hr = vr.insert(() => Br);
	if (lr.icon) {
		let St = vr.append("g");
		St.html(`<g>${await getIconSVG(lr.icon, {
			height: gr,
			width: gr,
			fallbackPrefix: ""
		})}</g>`);
		let ur = St.node().getBBox(), dr = ur.width, fr = ur.height, pr = ur.x, mr = ur.y;
		St.attr("transform", `translate(${-dr / 2 - pr},${Sr ? yr.height / 2 + Pr / 2 - fr / 2 - mr : -yr.height / 2 - Pr / 2 - fr / 2 - mr})`), St.attr("style", `color: ${Ar.get("stroke") ?? Tr};`);
	}
	return xr.attr("transform", `translate(${-yr.width / 2 - (yr.x - (yr.left ?? 0))},${Sr ? -zr / 2 : zr / 2 - yr.height})`), Vr.attr("transform", `translate(0,${Sr ? yr.height / 2 + Pr / 2 : -yr.height / 2 - Pr / 2})`), updateNodeBounds(lr, Hr), lr.intersect = function(St) {
		if (log.info("iconSquare intersect", lr, St), !lr.label) return intersect_default.rect(lr, St);
		let ur = lr.x ?? 0, dr = lr.y ?? 0, pr = lr.height ?? 0, mr = [];
		return mr = Sr ? [
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2 + yr.height + Pr
			},
			{
				x: ur + wr / 2,
				y: dr - pr / 2 + yr.height + Pr
			},
			{
				x: ur + wr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - wr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - wr / 2,
				y: dr - pr / 2 + yr.height + Pr
			},
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2 + yr.height + Pr
			}
		] : [
			{
				x: ur - wr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + wr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + wr / 2,
				y: dr - pr / 2 + Cr
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2 + Cr
			},
			{
				x: ur + yr.width / 2 / 2,
				y: dr + pr / 2
			},
			{
				x: ur - yr.width / 2,
				y: dr + pr / 2
			},
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2 + Cr
			},
			{
				x: ur - wr / 2,
				y: dr - pr / 2 + Cr
			}
		], intersect_default.polygon(lr, mr, St);
	}, vr;
}
__name(iconRounded, "iconRounded");
async function iconSquare(St, lr, { config: { themeVariables: ur, flowchart: dr } }) {
	let { labelStyles: pr } = styles2String(lr);
	lr.labelStyle = pr;
	let mr = lr.assetHeight ?? 48, hr = lr.assetWidth ?? 48, gr = Math.max(mr, hr), _r = dr?.wrappingWidth;
	lr.width = Math.max(gr, _r ?? 0);
	let { shapeSvg: vr, bbox: yr, halfPadding: br, label: xr } = await labelHelper(St, lr, "icon-shape default"), Sr = lr.pos === "t", Cr = gr + br * 2, wr = gr + br * 2, { nodeBorder: Tr, mainBkg: Dr } = ur, { stylesMap: Ar } = compileStyles(lr), Mr = -wr / 2, Nr = -Cr / 2, Pr = lr.label ? 8 : 0, Fr = at.svg(vr), Ir = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Ir.roughness = 0, Ir.fillStyle = "solid"), Ir.stroke = Ar.get("fill") ?? Dr;
	let Lr = Fr.path(createRoundedRectPathD(Mr, Nr, wr, Cr, .1), Ir), Rr = Math.max(wr, yr.width), zr = Cr + yr.height + Pr, Br = Fr.rectangle(-Rr / 2, -zr / 2, Rr, zr, {
		...Ir,
		fill: "transparent",
		stroke: "none"
	}), Vr = vr.insert(() => Lr, ":first-child"), Hr = vr.insert(() => Br);
	if (lr.icon) {
		let St = vr.append("g");
		St.html(`<g>${await getIconSVG(lr.icon, {
			height: gr,
			width: gr,
			fallbackPrefix: ""
		})}</g>`);
		let ur = St.node().getBBox(), dr = ur.width, fr = ur.height, pr = ur.x, mr = ur.y;
		St.attr("transform", `translate(${-dr / 2 - pr},${Sr ? yr.height / 2 + Pr / 2 - fr / 2 - mr : -yr.height / 2 - Pr / 2 - fr / 2 - mr})`), St.attr("style", `color: ${Ar.get("stroke") ?? Tr};`);
	}
	return xr.attr("transform", `translate(${-yr.width / 2 - (yr.x - (yr.left ?? 0))},${Sr ? -zr / 2 : zr / 2 - yr.height})`), Vr.attr("transform", `translate(0,${Sr ? yr.height / 2 + Pr / 2 : -yr.height / 2 - Pr / 2})`), updateNodeBounds(lr, Hr), lr.intersect = function(St) {
		if (log.info("iconSquare intersect", lr, St), !lr.label) return intersect_default.rect(lr, St);
		let ur = lr.x ?? 0, dr = lr.y ?? 0, pr = lr.height ?? 0, mr = [];
		return mr = Sr ? [
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2 + yr.height + Pr
			},
			{
				x: ur + wr / 2,
				y: dr - pr / 2 + yr.height + Pr
			},
			{
				x: ur + wr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - wr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - wr / 2,
				y: dr - pr / 2 + yr.height + Pr
			},
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2 + yr.height + Pr
			}
		] : [
			{
				x: ur - wr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + wr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + wr / 2,
				y: dr - pr / 2 + Cr
			},
			{
				x: ur + yr.width / 2,
				y: dr - pr / 2 + Cr
			},
			{
				x: ur + yr.width / 2 / 2,
				y: dr + pr / 2
			},
			{
				x: ur - yr.width / 2,
				y: dr + pr / 2
			},
			{
				x: ur - yr.width / 2,
				y: dr - pr / 2 + Cr
			},
			{
				x: ur - wr / 2,
				y: dr - pr / 2 + Cr
			}
		], intersect_default.polygon(lr, mr, St);
	}, vr;
}
__name(iconSquare, "iconSquare");
async function imageSquare(St, lr, { config: { flowchart: ur } }) {
	let dr = new Image();
	dr.src = lr?.img ?? "", await dr.decode();
	let pr = Number(dr.naturalWidth.toString().replace("px", "")), mr = Number(dr.naturalHeight.toString().replace("px", ""));
	lr.imageAspectRatio = pr / mr;
	let { labelStyles: hr } = styles2String(lr);
	lr.labelStyle = hr;
	let gr = ur?.wrappingWidth;
	lr.defaultWidth = ur?.wrappingWidth;
	let _r = Math.max(lr.label ? gr ?? 0 : 0, lr?.assetWidth ?? pr), vr = lr.constraint === "on" && lr?.assetHeight ? lr.assetHeight * lr.imageAspectRatio : _r, yr = lr.constraint === "on" ? vr / lr.imageAspectRatio : lr?.assetHeight ?? mr;
	lr.width = Math.max(vr, gr ?? 0);
	let { shapeSvg: br, bbox: xr, label: Sr } = await labelHelper(St, lr, "image-shape default"), Cr = lr.pos === "t", wr = -vr / 2, Tr = -yr / 2, Er = lr.label ? 8 : 0, Dr = at.svg(br), Ar = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Ar.roughness = 0, Ar.fillStyle = "solid");
	let jr = Dr.rectangle(wr, Tr, vr, yr, Ar), Mr = Math.max(vr, xr.width), Nr = yr + xr.height + Er, Pr = Dr.rectangle(-Mr / 2, -Nr / 2, Mr, Nr, {
		...Ar,
		fill: "none",
		stroke: "none"
	}), Fr = br.insert(() => jr, ":first-child"), Ir = br.insert(() => Pr);
	if (lr.img) {
		let St = br.append("image");
		St.attr("href", lr.img), St.attr("width", vr), St.attr("height", yr), St.attr("preserveAspectRatio", "none"), St.attr("transform", `translate(${-vr / 2},${Cr ? Nr / 2 - yr : -Nr / 2})`);
	}
	return Sr.attr("transform", `translate(${-xr.width / 2 - (xr.x - (xr.left ?? 0))},${Cr ? -yr / 2 - xr.height / 2 - Er / 2 : yr / 2 - xr.height / 2 + Er / 2})`), Fr.attr("transform", `translate(0,${Cr ? xr.height / 2 + Er / 2 : -xr.height / 2 - Er / 2})`), updateNodeBounds(lr, Ir), lr.intersect = function(St) {
		if (log.info("iconSquare intersect", lr, St), !lr.label) return intersect_default.rect(lr, St);
		let ur = lr.x ?? 0, dr = lr.y ?? 0, pr = lr.height ?? 0, mr = [];
		return mr = Cr ? [
			{
				x: ur - xr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + xr.width / 2,
				y: dr - pr / 2
			},
			{
				x: ur + xr.width / 2,
				y: dr - pr / 2 + xr.height + Er
			},
			{
				x: ur + vr / 2,
				y: dr - pr / 2 + xr.height + Er
			},
			{
				x: ur + vr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - vr / 2,
				y: dr + pr / 2
			},
			{
				x: ur - vr / 2,
				y: dr - pr / 2 + xr.height + Er
			},
			{
				x: ur - xr.width / 2,
				y: dr - pr / 2 + xr.height + Er
			}
		] : [
			{
				x: ur - vr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + vr / 2,
				y: dr - pr / 2
			},
			{
				x: ur + vr / 2,
				y: dr - pr / 2 + yr
			},
			{
				x: ur + xr.width / 2,
				y: dr - pr / 2 + yr
			},
			{
				x: ur + xr.width / 2 / 2,
				y: dr + pr / 2
			},
			{
				x: ur - xr.width / 2,
				y: dr + pr / 2
			},
			{
				x: ur - xr.width / 2,
				y: dr - pr / 2 + yr
			},
			{
				x: ur - vr / 2,
				y: dr - pr / 2 + yr
			}
		], intersect_default.polygon(lr, mr, St);
	}, br;
}
__name(imageSquare, "imageSquare");
async function inv_trapezoid(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), hr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), gr = [
		{
			x: 0,
			y: 0
		},
		{
			x: mr,
			y: 0
		},
		{
			x: mr + 3 * hr / 6,
			y: -hr
		},
		{
			x: -3 * hr / 6,
			y: -hr
		}
	], _r, { cssStyles: vr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(fr), ur = userNodeOverrides(lr, {}), dr = createPathFromPoints(gr), pr = St.path(dr, ur);
		_r = fr.insert(() => pr, ":first-child").attr("transform", `translate(${-mr / 2}, ${hr / 2})`), vr && _r.attr("style", vr);
	} else _r = insertPolygonShape(fr, mr, hr, gr);
	return dr && _r.attr("style", dr), lr.width = mr, lr.height = hr, updateNodeBounds(lr, _r), lr.intersect = function(St) {
		return intersect_default.polygon(lr, gr, St);
	}, fr;
}
__name(inv_trapezoid, "inv_trapezoid");
async function drawRect(St, lr, ur) {
	let { labelStyles: fr, nodeStyles: pr } = styles2String(lr);
	lr.labelStyle = fr;
	let { shapeSvg: mr, bbox: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = Math.max(hr.width + ur.labelPaddingX * 2, lr?.width || 0), _r = Math.max(hr.height + ur.labelPaddingY * 2, lr?.height || 0), vr = -gr / 2, yr = -_r / 2, br, { rx: xr, ry: Sr } = lr, { cssStyles: Cr } = lr;
	if (ur?.rx && ur.ry && (xr = ur.rx, Sr = ur.ry), lr.look === "handDrawn") {
		let St = at.svg(mr), ur = userNodeOverrides(lr, {}), fr = xr || Sr ? St.path(createRoundedRectPathD(vr, yr, gr, _r, xr || 0), ur) : St.rectangle(vr, yr, gr, _r, ur);
		br = mr.insert(() => fr, ":first-child"), br.attr("class", "basic label-container").attr("style", handleUndefinedAttr(Cr));
	} else br = mr.insert("rect", ":first-child"), br.attr("class", "basic label-container").attr("style", pr).attr("rx", handleUndefinedAttr(xr)).attr("ry", handleUndefinedAttr(Sr)).attr("x", vr).attr("y", yr).attr("width", gr).attr("height", _r);
	return updateNodeBounds(lr, br), lr.calcIntersect = function(St, lr) {
		return intersect_default.rect(St, lr);
	}, lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, mr;
}
__name(drawRect, "drawRect");
async function labelRect(St, lr) {
	let { shapeSvg: ur, bbox: dr, label: fr } = await labelHelper(St, lr, "label"), pr = ur.insert("rect", ":first-child");
	return pr.attr("width", .1).attr("height", .1), ur.attr("class", "label edgeLabel"), fr.attr("transform", `translate(${-(dr.width / 2) - (dr.x - (dr.left ?? 0))}, ${-(dr.height / 2) - (dr.y - (dr.top ?? 0))})`), updateNodeBounds(lr, pr), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, ur;
}
__name(labelRect, "labelRect");
async function lean_left(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(pr.width + (lr.padding ?? 0), lr?.width ?? 0), hr = Math.max(pr.height + (lr.padding ?? 0), lr?.height ?? 0), gr = [
		{
			x: 0,
			y: 0
		},
		{
			x: mr + 3 * hr / 6,
			y: 0
		},
		{
			x: mr,
			y: -hr
		},
		{
			x: -(3 * hr) / 6,
			y: -hr
		}
	], _r, { cssStyles: vr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(fr), ur = userNodeOverrides(lr, {}), dr = createPathFromPoints(gr), pr = St.path(dr, ur);
		_r = fr.insert(() => pr, ":first-child").attr("transform", `translate(${-mr / 2}, ${hr / 2})`), vr && _r.attr("style", vr);
	} else _r = insertPolygonShape(fr, mr, hr, gr);
	return dr && _r.attr("style", dr), lr.width = mr, lr.height = hr, updateNodeBounds(lr, _r), lr.intersect = function(St) {
		return intersect_default.polygon(lr, gr, St);
	}, fr;
}
__name(lean_left, "lean_left");
async function lean_right(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(pr.width + (lr.padding ?? 0), lr?.width ?? 0), hr = Math.max(pr.height + (lr.padding ?? 0), lr?.height ?? 0), gr = [
		{
			x: -3 * hr / 6,
			y: 0
		},
		{
			x: mr,
			y: 0
		},
		{
			x: mr + 3 * hr / 6,
			y: -hr
		},
		{
			x: 0,
			y: -hr
		}
	], _r, { cssStyles: vr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(fr), ur = userNodeOverrides(lr, {}), dr = createPathFromPoints(gr), pr = St.path(dr, ur);
		_r = fr.insert(() => pr, ":first-child").attr("transform", `translate(${-mr / 2}, ${hr / 2})`), vr && _r.attr("style", vr);
	} else _r = insertPolygonShape(fr, mr, hr, gr);
	return dr && _r.attr("style", dr), lr.width = mr, lr.height = hr, updateNodeBounds(lr, _r), lr.intersect = function(St) {
		return intersect_default.polygon(lr, gr, St);
	}, fr;
}
__name(lean_right, "lean_right");
function lightningBolt(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.label = "", lr.labelStyle = ur;
	let pr = St.insert("g").attr("class", getNodeClasses(lr)).attr("id", lr.domId ?? lr.id), { cssStyles: mr } = lr, hr = Math.max(35, lr?.width ?? 0), gr = Math.max(35, lr?.height ?? 0), _r = [
		{
			x: hr,
			y: 0
		},
		{
			x: 0,
			y: gr + 7 / 2
		},
		{
			x: hr - 14,
			y: gr + 7 / 2
		},
		{
			x: 0,
			y: 2 * gr
		},
		{
			x: hr,
			y: gr - 7 / 2
		},
		{
			x: 14,
			y: gr - 7 / 2
		}
	], vr = at.svg(pr), yr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (yr.roughness = 0, yr.fillStyle = "solid");
	let br = createPathFromPoints(_r), xr = vr.path(br, yr), Sr = pr.insert(() => xr, ":first-child");
	return mr && lr.look !== "handDrawn" && Sr.selectAll("path").attr("style", mr), dr && lr.look !== "handDrawn" && Sr.selectAll("path").attr("style", dr), Sr.attr("transform", `translate(-${hr / 2},${-gr})`), updateNodeBounds(lr, Sr), lr.intersect = function(St) {
		return log.info("lightningBolt intersect", lr, St), intersect_default.polygon(lr, _r, St);
	}, pr;
}
__name(lightningBolt, "lightningBolt");
var createCylinderPathD2 = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr, mr) => [
	`M${St},${lr + pr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`,
	`a${fr},${pr} 0,0,0 ${-ur},0`,
	`l0,${dr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`,
	`l0,${-dr}`,
	`M${St},${lr + pr + mr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`
].join(" "), "createCylinderPathD"), createOuterCylinderPathD2 = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr, mr) => [
	`M${St},${lr + pr}`,
	`M${St + ur},${lr + pr}`,
	`a${fr},${pr} 0,0,0 ${-ur},0`,
	`l0,${dr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`,
	`l0,${-dr}`,
	`M${St},${lr + pr + mr}`,
	`a${fr},${pr} 0,0,0 ${ur},0`
].join(" "), "createOuterCylinderPathD"), createInnerCylinderPathD2 = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr) => [`M${St - ur / 2},${-dr / 2}`, `a${fr},${pr} 0,0,0 ${ur},0`].join(" "), "createInnerCylinderPathD");
async function linedCylinder(St, lr) {
	let { labelStyles: ur, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr, label: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = Math.max(mr.width + (lr.padding ?? 0), lr.width ?? 0), _r = gr / 2, vr = _r / (2.5 + gr / 50), yr = Math.max(mr.height + vr + (lr.padding ?? 0), lr.height ?? 0), br = yr * .1, xr, { cssStyles: Sr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(pr), ur = createOuterCylinderPathD2(0, 0, gr, yr, _r, vr, br), dr = createInnerCylinderPathD2(0, vr, gr, yr, _r, vr), fr = userNodeOverrides(lr, {}), mr = St.path(ur, fr), hr = St.path(dr, fr);
		pr.insert(() => hr, ":first-child").attr("class", "line"), xr = pr.insert(() => mr, ":first-child"), xr.attr("class", "basic label-container"), Sr && xr.attr("style", Sr);
	} else {
		let St = createCylinderPathD2(0, 0, gr, yr, _r, vr, br);
		xr = pr.insert("path", ":first-child").attr("d", St).attr("class", "basic label-container").attr("style", handleUndefinedAttr(Sr)).attr("style", fr);
	}
	return xr.attr("label-offset-y", vr), xr.attr("transform", `translate(${-gr / 2}, ${-(yr / 2 + vr)})`), updateNodeBounds(lr, xr), hr.attr("transform", `translate(${-(mr.width / 2) - (mr.x - (mr.left ?? 0))}, ${-(mr.height / 2) + vr - (mr.y - (mr.top ?? 0))})`), lr.intersect = function(St) {
		let ur = intersect_default.rect(lr, St), dr = ur.x - (lr.x ?? 0);
		if (_r != 0 && (Math.abs(dr) < (lr.width ?? 0) / 2 || Math.abs(dr) == (lr.width ?? 0) / 2 && Math.abs(ur.y - (lr.y ?? 0)) > (lr.height ?? 0) / 2 - vr)) {
			let fr = vr * vr * (1 - dr * dr / (_r * _r));
			fr > 0 && (fr = Math.sqrt(fr)), fr = vr - fr, St.y - (lr.y ?? 0) > 0 && (fr = -fr), ur.y += fr;
		}
		return ur;
	}, pr;
}
__name(linedCylinder, "linedCylinder");
async function linedWaveEdgedRect(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = gr / 4, vr = gr + _r, { cssStyles: yr } = lr, br = at.svg(fr), xr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (xr.roughness = 0, xr.fillStyle = "solid");
	let Sr = [
		{
			x: -hr / 2 - hr / 2 * .1,
			y: -vr / 2
		},
		{
			x: -hr / 2 - hr / 2 * .1,
			y: vr / 2
		},
		...generateFullSineWavePoints(-hr / 2 - hr / 2 * .1, vr / 2, hr / 2 + hr / 2 * .1, vr / 2, _r, .8),
		{
			x: hr / 2 + hr / 2 * .1,
			y: -vr / 2
		},
		{
			x: -hr / 2 - hr / 2 * .1,
			y: -vr / 2
		},
		{
			x: -hr / 2,
			y: -vr / 2
		},
		{
			x: -hr / 2,
			y: vr / 2 * 1.1
		},
		{
			x: -hr / 2,
			y: -vr / 2
		}
	], Cr = br.polygon(Sr.map((St) => [St.x, St.y]), xr), wr = fr.insert(() => Cr, ":first-child");
	return wr.attr("class", "basic label-container"), yr && lr.look !== "handDrawn" && wr.selectAll("path").attr("style", yr), dr && lr.look !== "handDrawn" && wr.selectAll("path").attr("style", dr), wr.attr("transform", `translate(0,${-_r / 2})`), mr.attr("transform", `translate(${-hr / 2 + (lr.padding ?? 0) + hr / 2 * .1 / 2 - (pr.x - (pr.left ?? 0))},${-gr / 2 + (lr.padding ?? 0) - _r / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, wr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, Sr, St);
	}, fr;
}
__name(linedWaveEdgedRect, "linedWaveEdgedRect");
async function multiRect(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = -hr / 2, vr = -gr / 2, { cssStyles: yr } = lr, br = at.svg(fr), xr = userNodeOverrides(lr, {}), Sr = [
		{
			x: _r - 5,
			y: vr + 5
		},
		{
			x: _r - 5,
			y: vr + gr + 5
		},
		{
			x: _r + hr - 5,
			y: vr + gr + 5
		},
		{
			x: _r + hr - 5,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr + gr - 5
		},
		{
			x: _r + hr + 5,
			y: vr + gr - 5
		},
		{
			x: _r + hr + 5,
			y: vr - 5
		},
		{
			x: _r + 5,
			y: vr - 5
		},
		{
			x: _r + 5,
			y: vr
		},
		{
			x: _r,
			y: vr
		},
		{
			x: _r,
			y: vr + 5
		}
	], Cr = [
		{
			x: _r,
			y: vr + 5
		},
		{
			x: _r + hr - 5,
			y: vr + 5
		},
		{
			x: _r + hr - 5,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr
		},
		{
			x: _r,
			y: vr
		}
	];
	lr.look !== "handDrawn" && (xr.roughness = 0, xr.fillStyle = "solid");
	let wr = createPathFromPoints(Sr), Tr = br.path(wr, xr), Er = createPathFromPoints(Cr), Dr = br.path(Er, {
		...xr,
		fill: "none"
	}), Ar = fr.insert(() => Dr, ":first-child");
	return Ar.insert(() => Tr, ":first-child"), Ar.attr("class", "basic label-container"), yr && lr.look !== "handDrawn" && Ar.selectAll("path").attr("style", yr), dr && lr.look !== "handDrawn" && Ar.selectAll("path").attr("style", dr), mr.attr("transform", `translate(${-(pr.width / 2) - 5 - (pr.x - (pr.left ?? 0))}, ${-(pr.height / 2) + 5 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Ar), lr.intersect = function(St) {
		return intersect_default.polygon(lr, Sr, St);
	}, fr;
}
__name(multiRect, "multiRect");
async function multiWaveEdgedRectangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = gr / 4, vr = gr + _r, yr = -hr / 2, br = -vr / 2, { cssStyles: xr } = lr, Sr = generateFullSineWavePoints(yr - 5, br + vr + 5, yr + hr - 5, br + vr + 5, _r, .8), Cr = Sr?.[Sr.length - 1], wr = [
		{
			x: yr - 5,
			y: br + 5
		},
		{
			x: yr - 5,
			y: br + vr + 5
		},
		...Sr,
		{
			x: yr + hr - 5,
			y: Cr.y - 5
		},
		{
			x: yr + hr,
			y: Cr.y - 5
		},
		{
			x: yr + hr,
			y: Cr.y - 10
		},
		{
			x: yr + hr + 5,
			y: Cr.y - 10
		},
		{
			x: yr + hr + 5,
			y: br - 5
		},
		{
			x: yr + 5,
			y: br - 5
		},
		{
			x: yr + 5,
			y: br
		},
		{
			x: yr,
			y: br
		},
		{
			x: yr,
			y: br + 5
		}
	], Tr = [
		{
			x: yr,
			y: br + 5
		},
		{
			x: yr + hr - 5,
			y: br + 5
		},
		{
			x: yr + hr - 5,
			y: Cr.y - 5
		},
		{
			x: yr + hr,
			y: Cr.y - 5
		},
		{
			x: yr + hr,
			y: br
		},
		{
			x: yr,
			y: br
		}
	], Er = at.svg(fr), Dr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Dr.roughness = 0, Dr.fillStyle = "solid");
	let Ar = createPathFromPoints(wr), jr = Er.path(Ar, Dr), Mr = createPathFromPoints(Tr), Nr = Er.path(Mr, Dr), Pr = fr.insert(() => jr, ":first-child");
	return Pr.insert(() => Nr), Pr.attr("class", "basic label-container"), xr && lr.look !== "handDrawn" && Pr.selectAll("path").attr("style", xr), dr && lr.look !== "handDrawn" && Pr.selectAll("path").attr("style", dr), Pr.attr("transform", `translate(0,${-_r / 2})`), mr.attr("transform", `translate(${-(pr.width / 2) - 5 - (pr.x - (pr.left ?? 0))}, ${-(pr.height / 2) + 5 - _r / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Pr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, wr, St);
	}, fr;
}
__name(multiWaveEdgedRectangle, "multiWaveEdgedRectangle");
async function note(St, lr, { config: { themeVariables: ur } }) {
	let { labelStyles: dr, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = dr, lr.useHtmlLabels || getConfig().flowchart?.htmlLabels !== !1 || (lr.centerLabel = !0);
	let { shapeSvg: pr, bbox: mr, label: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = Math.max(mr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), _r = Math.max(mr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), vr = -gr / 2, yr = -_r / 2, { cssStyles: br } = lr, xr = at.svg(pr), Sr = userNodeOverrides(lr, {
		fill: ur.noteBkgColor,
		stroke: ur.noteBorderColor
	});
	lr.look !== "handDrawn" && (Sr.roughness = 0, Sr.fillStyle = "solid");
	let Cr = xr.rectangle(vr, yr, gr, _r, Sr), Tr = pr.insert(() => Cr, ":first-child");
	return Tr.attr("class", "basic label-container"), br && lr.look !== "handDrawn" && Tr.selectAll("path").attr("style", br), fr && lr.look !== "handDrawn" && Tr.selectAll("path").attr("style", fr), hr.attr("transform", `translate(${-mr.width / 2 - (mr.x - (mr.left ?? 0))}, ${-(mr.height / 2) - (mr.y - (mr.top ?? 0))})`), updateNodeBounds(lr, Tr), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, pr;
}
__name(note, "note");
var createDecisionBoxPathD = /* @__PURE__ */ __name((St, lr, ur) => [
	`M${St + ur / 2},${lr}`,
	`L${St + ur},${lr - ur / 2}`,
	`L${St + ur / 2},${lr - ur}`,
	`L${St},${lr - ur / 2}`,
	"Z"
].join(" "), "createDecisionBoxPathD");
async function question(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = pr.width + lr.padding + (pr.height + lr.padding), hr = .5, gr = [
		{
			x: mr / 2,
			y: 0
		},
		{
			x: mr,
			y: -mr / 2
		},
		{
			x: mr / 2,
			y: -mr
		},
		{
			x: 0,
			y: -mr / 2
		}
	], _r, { cssStyles: vr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(fr), ur = userNodeOverrides(lr, {}), dr = createDecisionBoxPathD(0, 0, mr), pr = St.path(dr, ur);
		_r = fr.insert(() => pr, ":first-child").attr("transform", `translate(${-mr / 2 + hr}, ${mr / 2})`), vr && _r.attr("style", vr);
	} else _r = insertPolygonShape(fr, mr, mr, gr), _r.attr("transform", `translate(${-mr / 2 + hr}, ${mr / 2})`);
	return dr && _r.attr("style", dr), updateNodeBounds(lr, _r), lr.calcIntersect = function(St, lr) {
		let ur = St.width, dr = [
			{
				x: ur / 2,
				y: 0
			},
			{
				x: ur,
				y: -ur / 2
			},
			{
				x: ur / 2,
				y: -ur
			},
			{
				x: 0,
				y: -ur / 2
			}
		], fr = intersect_default.polygon(St, dr, lr);
		return {
			x: fr.x - .5,
			y: fr.y - .5
		};
	}, lr.intersect = function(St) {
		return this.calcIntersect(lr, St);
	}, fr;
}
__name(question, "question");
async function rect_left_inv_arrow(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0), lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0), lr?.height ?? 0), _r = -hr / 2, vr = -gr / 2, yr = vr / 2, br = [
		{
			x: _r + yr,
			y: vr
		},
		{
			x: _r,
			y: 0
		},
		{
			x: _r + yr,
			y: -vr
		},
		{
			x: -_r,
			y: -vr
		},
		{
			x: -_r,
			y: vr
		}
	], { cssStyles: xr } = lr, Sr = at.svg(fr), Cr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Cr.roughness = 0, Cr.fillStyle = "solid");
	let wr = createPathFromPoints(br), Tr = Sr.path(wr, Cr), Er = fr.insert(() => Tr, ":first-child");
	return Er.attr("class", "basic label-container"), xr && lr.look !== "handDrawn" && Er.selectAll("path").attr("style", xr), dr && lr.look !== "handDrawn" && Er.selectAll("path").attr("style", dr), Er.attr("transform", `translate(${-yr / 2},0)`), mr.attr("transform", `translate(${-yr / 2 - pr.width / 2 - (pr.x - (pr.left ?? 0))}, ${-(pr.height / 2) - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Er), lr.intersect = function(St) {
		return intersect_default.polygon(lr, br, St);
	}, fr;
}
__name(rect_left_inv_arrow, "rect_left_inv_arrow");
async function rectWithTitle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let pr;
	pr = lr.cssClasses ? "node " + lr.cssClasses : "node default";
	let hr = St.insert("g").attr("class", pr).attr("id", lr.domId || lr.id), gr = hr.insert("g"), _r = hr.insert("g").attr("class", "label").attr("style", dr), vr = lr.description, yr = lr.label, xr = _r.node().appendChild(await createLabel_default(yr, lr.labelStyle, !0, !0)), Cr = {
		width: 0,
		height: 0
	};
	if (evaluate(getConfig2()?.flowchart?.htmlLabels)) {
		let St = xr.children[0], lr = select_default(xr);
		Cr = St.getBoundingClientRect(), lr.attr("width", Cr.width), lr.attr("height", Cr.height);
	}
	log.info("Text 2", vr);
	let wr = vr || [], Tr = xr.getBBox(), Er = _r.node().appendChild(await createLabel_default(wr.join ? wr.join("<br/>") : wr, lr.labelStyle, !0, !0)), Dr = Er.children[0], Ar = select_default(Er);
	Cr = Dr.getBoundingClientRect(), Ar.attr("width", Cr.width), Ar.attr("height", Cr.height);
	let jr = (lr.padding || 0) / 2;
	select_default(Er).attr("transform", "translate( " + (Cr.width > Tr.width ? 0 : (Tr.width - Cr.width) / 2) + ", " + (Tr.height + jr + 5) + ")"), select_default(xr).attr("transform", "translate( " + (Cr.width < Tr.width ? 0 : -(Tr.width - Cr.width) / 2) + ", 0)"), Cr = _r.node().getBBox(), _r.attr("transform", "translate(" + -Cr.width / 2 + ", " + (-Cr.height / 2 - jr + 3) + ")");
	let Mr = Cr.width + (lr.padding || 0), Nr = Cr.height + (lr.padding || 0), Pr = -Cr.width / 2 - jr, Fr = -Cr.height / 2 - jr, Ir, Lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(hr), ur = userNodeOverrides(lr, {}), dr = St.path(createRoundedRectPathD(Pr, Fr, Mr, Nr, lr.rx || 0), ur), pr = St.line(-Cr.width / 2 - jr, -Cr.height / 2 - jr + Tr.height + jr, Cr.width / 2 + jr, -Cr.height / 2 - jr + Tr.height + jr, ur);
		Lr = hr.insert(() => (log.debug("Rough node insert CXC", dr), pr), ":first-child"), Ir = hr.insert(() => (log.debug("Rough node insert CXC", dr), dr), ":first-child");
	} else Ir = gr.insert("rect", ":first-child"), Lr = gr.insert("line"), Ir.attr("class", "outer title-state").attr("style", dr).attr("x", -Cr.width / 2 - jr).attr("y", -Cr.height / 2 - jr).attr("width", Cr.width + (lr.padding || 0)).attr("height", Cr.height + (lr.padding || 0)), Lr.attr("class", "divider").attr("x1", -Cr.width / 2 - jr).attr("x2", Cr.width / 2 + jr).attr("y1", -Cr.height / 2 - jr + Tr.height + jr).attr("y2", -Cr.height / 2 - jr + Tr.height + jr);
	return updateNodeBounds(lr, Ir), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, hr;
}
__name(rectWithTitle, "rectWithTitle");
function generateArcPoints2(St, lr, ur, dr, fr, pr, mr) {
	let hr = (St + ur) / 2, gr = (lr + dr) / 2, _r = Math.atan2(dr - lr, ur - St), vr = (ur - St) / 2, yr = (dr - lr) / 2, br = vr / fr, xr = yr / pr, Sr = Math.sqrt(br ** 2 + xr ** 2);
	if (Sr > 1) throw Error("The given radii are too small to create an arc between the points.");
	let Cr = Math.sqrt(1 - Sr ** 2), wr = hr + Cr * pr * Math.sin(_r) * (mr ? -1 : 1), Tr = gr - Cr * fr * Math.cos(_r) * (mr ? -1 : 1), Er = Math.atan2((lr - Tr) / pr, (St - wr) / fr), Dr = Math.atan2((dr - Tr) / pr, (ur - wr) / fr) - Er;
	mr && Dr < 0 && (Dr += 2 * Math.PI), !mr && Dr > 0 && (Dr -= 2 * Math.PI);
	let Or = [];
	for (let St = 0; St < 20; St++) {
		let lr = Er + St / 19 * Dr, ur = wr + fr * Math.cos(lr), dr = Tr + pr * Math.sin(lr);
		Or.push({
			x: ur,
			y: dr
		});
	}
	return Or;
}
__name(generateArcPoints2, "generateArcPoints");
async function roundedRect(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = lr?.padding ?? 0, hr = lr?.padding ?? 0, gr = (lr?.width ? lr?.width : pr.width) + mr * 2, _r = (lr?.height ? lr?.height : pr.height) + hr * 2, vr = lr.radius || 5, yr = lr.taper || 5, { cssStyles: br } = lr, xr = at.svg(fr), Sr = userNodeOverrides(lr, {});
	lr.stroke && (Sr.stroke = lr.stroke), lr.look !== "handDrawn" && (Sr.roughness = 0, Sr.fillStyle = "solid");
	let Cr = [
		{
			x: -gr / 2 + yr,
			y: -_r / 2
		},
		{
			x: gr / 2 - yr,
			y: -_r / 2
		},
		...generateArcPoints2(gr / 2 - yr, -_r / 2, gr / 2, -_r / 2 + yr, vr, vr, !0),
		{
			x: gr / 2,
			y: -_r / 2 + yr
		},
		{
			x: gr / 2,
			y: _r / 2 - yr
		},
		...generateArcPoints2(gr / 2, _r / 2 - yr, gr / 2 - yr, _r / 2, vr, vr, !0),
		{
			x: gr / 2 - yr,
			y: _r / 2
		},
		{
			x: -gr / 2 + yr,
			y: _r / 2
		},
		...generateArcPoints2(-gr / 2 + yr, _r / 2, -gr / 2, _r / 2 - yr, vr, vr, !0),
		{
			x: -gr / 2,
			y: _r / 2 - yr
		},
		{
			x: -gr / 2,
			y: -_r / 2 + yr
		},
		...generateArcPoints2(-gr / 2, -_r / 2 + yr, -gr / 2 + yr, -_r / 2, vr, vr, !0)
	], wr = createPathFromPoints(Cr), Tr = xr.path(wr, Sr), Er = fr.insert(() => Tr, ":first-child");
	return Er.attr("class", "basic label-container outer-path"), br && lr.look !== "handDrawn" && Er.selectChildren("path").attr("style", br), dr && lr.look !== "handDrawn" && Er.selectChildren("path").attr("style", dr), updateNodeBounds(lr, Er), lr.intersect = function(St) {
		return intersect_default.polygon(lr, Cr, St);
	}, fr;
}
__name(roundedRect, "roundedRect");
async function shadedProcess(St, lr) {
	let { labelStyles: ur, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr, label: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = lr?.padding ?? 0, _r = Math.max(mr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), vr = Math.max(mr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), yr = -mr.width / 2 - gr, br = -mr.height / 2 - gr, { cssStyles: xr } = lr, Sr = at.svg(pr), Cr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Cr.roughness = 0, Cr.fillStyle = "solid");
	let wr = [
		{
			x: yr,
			y: br
		},
		{
			x: yr + _r + 8,
			y: br
		},
		{
			x: yr + _r + 8,
			y: br + vr
		},
		{
			x: yr - 8,
			y: br + vr
		},
		{
			x: yr - 8,
			y: br
		},
		{
			x: yr,
			y: br
		},
		{
			x: yr,
			y: br + vr
		}
	], Tr = Sr.polygon(wr.map((St) => [St.x, St.y]), Cr), Er = pr.insert(() => Tr, ":first-child");
	return Er.attr("class", "basic label-container").attr("style", handleUndefinedAttr(xr)), fr && lr.look !== "handDrawn" && Er.selectAll("path").attr("style", fr), xr && lr.look !== "handDrawn" && Er.selectAll("path").attr("style", fr), hr.attr("transform", `translate(${-_r / 2 + 4 + (lr.padding ?? 0) - (mr.x - (mr.left ?? 0))},${-vr / 2 + (lr.padding ?? 0) - (mr.y - (mr.top ?? 0))})`), updateNodeBounds(lr, Er), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, pr;
}
__name(shadedProcess, "shadedProcess");
async function slopedRect(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = -hr / 2, vr = -gr / 2, { cssStyles: yr } = lr, br = at.svg(fr), xr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (xr.roughness = 0, xr.fillStyle = "solid");
	let Sr = [
		{
			x: _r,
			y: vr
		},
		{
			x: _r,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr - gr / 2
		}
	], Cr = createPathFromPoints(Sr), wr = br.path(Cr, xr), Tr = fr.insert(() => wr, ":first-child");
	return Tr.attr("class", "basic label-container"), yr && lr.look !== "handDrawn" && Tr.selectChildren("path").attr("style", yr), dr && lr.look !== "handDrawn" && Tr.selectChildren("path").attr("style", dr), Tr.attr("transform", `translate(0, ${gr / 4})`), mr.attr("transform", `translate(${-hr / 2 + (lr.padding ?? 0) - (pr.x - (pr.left ?? 0))}, ${-gr / 4 + (lr.padding ?? 0) - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Tr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, Sr, St);
	}, fr;
}
__name(slopedRect, "slopedRect");
async function squareRect2(St, lr) {
	return drawRect(St, lr, {
		rx: 0,
		ry: 0,
		classes: "",
		labelPaddingX: lr.labelPaddingX ?? (lr?.padding || 0) * 2,
		labelPaddingY: (lr?.padding || 0) * 1
	});
}
__name(squareRect2, "squareRect");
async function stadium(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = pr.height + lr.padding, hr = pr.width + mr / 4 + lr.padding, gr = mr / 2, { cssStyles: _r } = lr, vr = at.svg(fr), yr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (yr.roughness = 0, yr.fillStyle = "solid");
	let br = [
		{
			x: -hr / 2 + gr,
			y: -mr / 2
		},
		{
			x: hr / 2 - gr,
			y: -mr / 2
		},
		...generateCirclePoints(-hr / 2 + gr, 0, gr, 50, 90, 270),
		{
			x: hr / 2 - gr,
			y: mr / 2
		},
		...generateCirclePoints(hr / 2 - gr, 0, gr, 50, 270, 450)
	], xr = createPathFromPoints(br), Sr = vr.path(xr, yr), Cr = fr.insert(() => Sr, ":first-child");
	return Cr.attr("class", "basic label-container outer-path"), _r && lr.look !== "handDrawn" && Cr.selectChildren("path").attr("style", _r), dr && lr.look !== "handDrawn" && Cr.selectChildren("path").attr("style", dr), updateNodeBounds(lr, Cr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, br, St);
	}, fr;
}
__name(stadium, "stadium");
async function state(St, lr) {
	return drawRect(St, lr, {
		rx: 5,
		ry: 5,
		classes: "flowchart-node"
	});
}
__name(state, "state");
function stateEnd(St, lr, { config: { themeVariables: ur } }) {
	let { labelStyles: dr, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = dr;
	let { cssStyles: pr } = lr, { lineColor: mr, stateBorder: hr, nodeBorder: gr } = ur, _r = St.insert("g").attr("class", "node default").attr("id", lr.domId || lr.id), vr = at.svg(_r), yr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (yr.roughness = 0, yr.fillStyle = "solid");
	let br = vr.circle(0, 0, 14, {
		...yr,
		stroke: mr,
		strokeWidth: 2
	}), xr = hr ?? gr, Sr = vr.circle(0, 0, 5, {
		...yr,
		fill: xr,
		stroke: xr,
		strokeWidth: 2,
		fillStyle: "solid"
	}), Cr = _r.insert(() => br, ":first-child");
	return Cr.insert(() => Sr), pr && Cr.selectAll("path").attr("style", pr), fr && Cr.selectAll("path").attr("style", fr), updateNodeBounds(lr, Cr), lr.intersect = function(St) {
		return intersect_default.circle(lr, 7, St);
	}, _r;
}
__name(stateEnd, "stateEnd");
function stateStart(St, lr, { config: { themeVariables: ur } }) {
	let { lineColor: dr } = ur, fr = St.insert("g").attr("class", "node default").attr("id", lr.domId || lr.id), pr;
	if (lr.look === "handDrawn") {
		let St = at.svg(fr).circle(0, 0, 14, solidStateFill(dr));
		pr = fr.insert(() => St), pr.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	} else pr = fr.insert("circle", ":first-child"), pr.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
	return updateNodeBounds(lr, pr), lr.intersect = function(St) {
		return intersect_default.circle(lr, 7, St);
	}, fr;
}
__name(stateStart, "stateStart");
async function subroutine(St, lr) {
	let { labelStyles: ur, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = (lr?.padding || 0) / 2, gr = mr.width + lr.padding, _r = mr.height + lr.padding, vr = -mr.width / 2 - hr, yr = -mr.height / 2 - hr, br = [
		{
			x: 0,
			y: 0
		},
		{
			x: gr,
			y: 0
		},
		{
			x: gr,
			y: -_r
		},
		{
			x: 0,
			y: -_r
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: gr + 8,
			y: 0
		},
		{
			x: gr + 8,
			y: -_r
		},
		{
			x: -8,
			y: -_r
		},
		{
			x: -8,
			y: 0
		}
	];
	if (lr.look === "handDrawn") {
		let St = at.svg(pr), ur = userNodeOverrides(lr, {}), fr = St.rectangle(vr - 8, yr, gr + 16, _r, ur), mr = St.line(vr, yr, vr, yr + _r, ur), hr = St.line(vr + gr, yr, vr + gr, yr + _r, ur);
		pr.insert(() => mr, ":first-child"), pr.insert(() => hr, ":first-child");
		let br = pr.insert(() => fr, ":first-child"), { cssStyles: xr } = lr;
		br.attr("class", "basic label-container").attr("style", handleUndefinedAttr(xr)), updateNodeBounds(lr, br);
	} else {
		let St = insertPolygonShape(pr, gr, _r, br);
		fr && St.attr("style", fr), updateNodeBounds(lr, St);
	}
	return lr.intersect = function(St) {
		return intersect_default.polygon(lr, br, St);
	}, pr;
}
__name(subroutine, "subroutine");
async function taggedRect(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), hr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), gr = -mr / 2, _r = -hr / 2, vr = .2 * hr, yr = .2 * hr, { cssStyles: br } = lr, xr = at.svg(fr), Sr = userNodeOverrides(lr, {}), Cr = [
		{
			x: gr - vr / 2,
			y: _r
		},
		{
			x: gr + mr + vr / 2,
			y: _r
		},
		{
			x: gr + mr + vr / 2,
			y: _r + hr
		},
		{
			x: gr - vr / 2,
			y: _r + hr
		}
	], wr = [
		{
			x: gr + mr - vr / 2,
			y: _r + hr
		},
		{
			x: gr + mr + vr / 2,
			y: _r + hr
		},
		{
			x: gr + mr + vr / 2,
			y: _r + hr - yr
		}
	];
	lr.look !== "handDrawn" && (Sr.roughness = 0, Sr.fillStyle = "solid");
	let Tr = createPathFromPoints(Cr), Er = xr.path(Tr, Sr), Dr = createPathFromPoints(wr), Ar = xr.path(Dr, {
		...Sr,
		fillStyle: "solid"
	}), jr = fr.insert(() => Ar, ":first-child");
	return jr.insert(() => Er, ":first-child"), jr.attr("class", "basic label-container"), br && lr.look !== "handDrawn" && jr.selectAll("path").attr("style", br), dr && lr.look !== "handDrawn" && jr.selectAll("path").attr("style", dr), updateNodeBounds(lr, jr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, Cr, St);
	}, fr;
}
__name(taggedRect, "taggedRect");
async function taggedWaveEdgedRectangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = gr / 4, vr = .2 * hr, yr = .2 * gr, br = gr + _r, { cssStyles: xr } = lr, Sr = at.svg(fr), Cr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Cr.roughness = 0, Cr.fillStyle = "solid");
	let wr = [
		{
			x: -hr / 2 - hr / 2 * .1,
			y: br / 2
		},
		...generateFullSineWavePoints(-hr / 2 - hr / 2 * .1, br / 2, hr / 2 + hr / 2 * .1, br / 2, _r, .8),
		{
			x: hr / 2 + hr / 2 * .1,
			y: -br / 2
		},
		{
			x: -hr / 2 - hr / 2 * .1,
			y: -br / 2
		}
	], Tr = -hr / 2 + hr / 2 * .1, Er = -br / 2 - yr * .4, Dr = [
		{
			x: Tr + hr - vr,
			y: (Er + gr) * 1.4
		},
		{
			x: Tr + hr,
			y: Er + gr - yr
		},
		{
			x: Tr + hr,
			y: (Er + gr) * .9
		},
		...generateFullSineWavePoints(Tr + hr, (Er + gr) * 1.3, Tr + hr - vr, (Er + gr) * 1.5, -gr * .03, .5)
	], Ar = createPathFromPoints(wr), jr = Sr.path(Ar, Cr), Mr = createPathFromPoints(Dr), Nr = Sr.path(Mr, {
		...Cr,
		fillStyle: "solid"
	}), Pr = fr.insert(() => Nr, ":first-child");
	return Pr.insert(() => jr, ":first-child"), Pr.attr("class", "basic label-container"), xr && lr.look !== "handDrawn" && Pr.selectAll("path").attr("style", xr), dr && lr.look !== "handDrawn" && Pr.selectAll("path").attr("style", dr), Pr.attr("transform", `translate(0,${-_r / 2})`), mr.attr("transform", `translate(${-hr / 2 + (lr.padding ?? 0) - (pr.x - (pr.left ?? 0))},${-gr / 2 + (lr.padding ?? 0) - _r / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Pr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, wr, St);
	}, fr;
}
__name(taggedWaveEdgedRectangle, "taggedWaveEdgedRectangle");
async function text(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(pr.width + lr.padding, lr?.width || 0), hr = Math.max(pr.height + lr.padding, lr?.height || 0), gr = -mr / 2, _r = -hr / 2, vr = fr.insert("rect", ":first-child");
	return vr.attr("class", "text").attr("style", dr).attr("rx", 0).attr("ry", 0).attr("x", gr).attr("y", _r).attr("width", mr).attr("height", hr), updateNodeBounds(lr, vr), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, fr;
}
__name(text, "text");
var createCylinderPathD3 = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr) => `M${St},${lr}
    a${fr},${pr} 0,0,1 0,${-dr}
    l${ur},0
    a${fr},${pr} 0,0,1 0,${dr}
    M${ur},${-dr}
    a${fr},${pr} 0,0,0 0,${dr}
    l${-ur},0`, "createCylinderPathD"), createOuterCylinderPathD3 = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr) => [
	`M${St},${lr}`,
	`M${St + ur},${lr}`,
	`a${fr},${pr} 0,0,0 0,${-dr}`,
	`l${-ur},0`,
	`a${fr},${pr} 0,0,0 0,${dr}`,
	`l${ur},0`
].join(" "), "createOuterCylinderPathD"), createInnerCylinderPathD3 = /* @__PURE__ */ __name((St, lr, ur, dr, fr, pr) => [`M${St + ur / 2},${-dr / 2}`, `a${fr},${pr} 0,0,0 0,${dr}`].join(" "), "createInnerCylinderPathD");
async function tiltedCylinder(St, lr) {
	let { labelStyles: ur, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr, label: hr, halfPadding: gr } = await labelHelper(St, lr, getNodeClasses(lr)), _r = lr.look === "neo" ? gr * 2 : gr, vr = mr.height + _r, yr = vr / 2, br = yr / (2.5 + vr / 50), xr = mr.width + br + _r, { cssStyles: Sr } = lr, Cr;
	if (lr.look === "handDrawn") {
		let St = at.svg(pr), ur = createOuterCylinderPathD3(0, 0, xr, vr, br, yr), dr = createInnerCylinderPathD3(0, 0, xr, vr, br, yr), fr = St.path(ur, userNodeOverrides(lr, {})), mr = St.path(dr, userNodeOverrides(lr, { fill: "none" }));
		Cr = pr.insert(() => mr, ":first-child"), Cr = pr.insert(() => fr, ":first-child"), Cr.attr("class", "basic label-container"), Sr && Cr.attr("style", Sr);
	} else {
		let St = createCylinderPathD3(0, 0, xr, vr, br, yr);
		Cr = pr.insert("path", ":first-child").attr("d", St).attr("class", "basic label-container").attr("style", handleUndefinedAttr(Sr)).attr("style", fr), Cr.attr("class", "basic label-container"), Sr && Cr.selectAll("path").attr("style", Sr), fr && Cr.selectAll("path").attr("style", fr);
	}
	return Cr.attr("label-offset-x", br), Cr.attr("transform", `translate(${-xr / 2}, ${vr / 2} )`), hr.attr("transform", `translate(${-(mr.width / 2) - br - (mr.x - (mr.left ?? 0))}, ${-(mr.height / 2) - (mr.y - (mr.top ?? 0))})`), updateNodeBounds(lr, Cr), lr.intersect = function(St) {
		let ur = intersect_default.rect(lr, St), dr = ur.y - (lr.y ?? 0);
		if (yr != 0 && (Math.abs(dr) < (lr.height ?? 0) / 2 || Math.abs(dr) == (lr.height ?? 0) / 2 && Math.abs(ur.x - (lr.x ?? 0)) > (lr.width ?? 0) / 2 - br)) {
			let fr = br * br * (1 - dr * dr / (yr * yr));
			fr != 0 && (fr = Math.sqrt(Math.abs(fr))), fr = br - fr, St.x - (lr.x ?? 0) > 0 && (fr = -fr), ur.x += fr;
		}
		return ur;
	}, pr;
}
__name(tiltedCylinder, "tiltedCylinder");
async function trapezoid(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = pr.width + lr.padding, hr = pr.height + lr.padding, gr = [
		{
			x: -3 * hr / 6,
			y: 0
		},
		{
			x: mr + 3 * hr / 6,
			y: 0
		},
		{
			x: mr,
			y: -hr
		},
		{
			x: 0,
			y: -hr
		}
	], _r, { cssStyles: vr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(fr), ur = userNodeOverrides(lr, {}), dr = createPathFromPoints(gr), pr = St.path(dr, ur);
		_r = fr.insert(() => pr, ":first-child").attr("transform", `translate(${-mr / 2}, ${hr / 2})`), vr && _r.attr("style", vr);
	} else _r = insertPolygonShape(fr, mr, hr, gr);
	return dr && _r.attr("style", dr), lr.width = mr, lr.height = hr, updateNodeBounds(lr, _r), lr.intersect = function(St) {
		return intersect_default.polygon(lr, gr, St);
	}, fr;
}
__name(trapezoid, "trapezoid");
async function trapezoidalPentagon(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(60, pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), hr = Math.max(20, pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), { cssStyles: gr } = lr, _r = at.svg(fr), vr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (vr.roughness = 0, vr.fillStyle = "solid");
	let yr = [
		{
			x: -mr / 2 * .8,
			y: -hr / 2
		},
		{
			x: mr / 2 * .8,
			y: -hr / 2
		},
		{
			x: mr / 2,
			y: -hr / 2 * .6
		},
		{
			x: mr / 2,
			y: hr / 2
		},
		{
			x: -mr / 2,
			y: hr / 2
		},
		{
			x: -mr / 2,
			y: -hr / 2 * .6
		}
	], br = createPathFromPoints(yr), xr = _r.path(br, vr), Sr = fr.insert(() => xr, ":first-child");
	return Sr.attr("class", "basic label-container"), gr && lr.look !== "handDrawn" && Sr.selectChildren("path").attr("style", gr), dr && lr.look !== "handDrawn" && Sr.selectChildren("path").attr("style", dr), updateNodeBounds(lr, Sr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, yr, St);
	}, fr;
}
__name(trapezoidalPentagon, "trapezoidalPentagon");
async function triangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: pr, bbox: mr, label: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = evaluate(getConfig2().flowchart?.htmlLabels), _r = mr.width + (lr.padding ?? 0), vr = _r + mr.height, yr = _r + mr.height, xr = [
		{
			x: 0,
			y: 0
		},
		{
			x: yr,
			y: 0
		},
		{
			x: yr / 2,
			y: -vr
		}
	], { cssStyles: Cr } = lr, wr = at.svg(pr), Tr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Tr.roughness = 0, Tr.fillStyle = "solid");
	let Er = createPathFromPoints(xr), Dr = wr.path(Er, Tr), Ar = pr.insert(() => Dr, ":first-child").attr("transform", `translate(${-vr / 2}, ${vr / 2})`);
	return Cr && lr.look !== "handDrawn" && Ar.selectChildren("path").attr("style", Cr), dr && lr.look !== "handDrawn" && Ar.selectChildren("path").attr("style", dr), lr.width = _r, lr.height = vr, updateNodeBounds(lr, Ar), hr.attr("transform", `translate(${-mr.width / 2 - (mr.x - (mr.left ?? 0))}, ${vr / 2 - (mr.height + (lr.padding ?? 0) / (gr ? 2 : 1) - (mr.y - (mr.top ?? 0)))})`), lr.intersect = function(St) {
		return log.info("Triangle intersect", lr, xr, St), intersect_default.polygon(lr, xr, St);
	}, pr;
}
__name(triangle, "triangle");
async function waveEdgedRectangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = gr / 8, vr = gr + _r, { cssStyles: yr } = lr, br = 70 - hr, xr = br > 0 ? br / 2 : 0, Sr = at.svg(fr), Cr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Cr.roughness = 0, Cr.fillStyle = "solid");
	let wr = [
		{
			x: -hr / 2 - xr,
			y: vr / 2
		},
		...generateFullSineWavePoints(-hr / 2 - xr, vr / 2, hr / 2 + xr, vr / 2, _r, .8),
		{
			x: hr / 2 + xr,
			y: -vr / 2
		},
		{
			x: -hr / 2 - xr,
			y: -vr / 2
		}
	], Tr = createPathFromPoints(wr), Er = Sr.path(Tr, Cr), Dr = fr.insert(() => Er, ":first-child");
	return Dr.attr("class", "basic label-container"), yr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", yr), dr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", dr), Dr.attr("transform", `translate(0,${-_r / 2})`), mr.attr("transform", `translate(${-hr / 2 + (lr.padding ?? 0) - (pr.x - (pr.left ?? 0))},${-gr / 2 + (lr.padding ?? 0) - _r - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Dr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, wr, St);
	}, fr;
}
__name(waveEdgedRectangle, "waveEdgedRectangle");
async function waveRectangle(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr } = await labelHelper(St, lr, getNodeClasses(lr)), mr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), hr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), gr = mr / hr, _r = mr, vr = hr;
	_r > vr * gr ? vr = _r / gr : _r = vr * gr, _r = Math.max(_r, 100), vr = Math.max(vr, 50);
	let yr = Math.min(vr * .2, vr / 4), br = vr + yr * 2, { cssStyles: xr } = lr, Sr = at.svg(fr), Cr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Cr.roughness = 0, Cr.fillStyle = "solid");
	let wr = [
		{
			x: -_r / 2,
			y: br / 2
		},
		...generateFullSineWavePoints(-_r / 2, br / 2, _r / 2, br / 2, yr, 1),
		{
			x: _r / 2,
			y: -br / 2
		},
		...generateFullSineWavePoints(_r / 2, -br / 2, -_r / 2, -br / 2, yr, -1)
	], Tr = createPathFromPoints(wr), Er = Sr.path(Tr, Cr), Dr = fr.insert(() => Er, ":first-child");
	return Dr.attr("class", "basic label-container"), xr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", xr), dr && lr.look !== "handDrawn" && Dr.selectAll("path").attr("style", dr), updateNodeBounds(lr, Dr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, wr, St);
	}, fr;
}
__name(waveRectangle, "waveRectangle");
async function windowPane(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, label: mr } = await labelHelper(St, lr, getNodeClasses(lr)), hr = Math.max(pr.width + (lr.padding ?? 0) * 2, lr?.width ?? 0), gr = Math.max(pr.height + (lr.padding ?? 0) * 2, lr?.height ?? 0), _r = -hr / 2, vr = -gr / 2, { cssStyles: yr } = lr, br = at.svg(fr), xr = userNodeOverrides(lr, {}), Sr = [
		{
			x: _r - 5,
			y: vr - 5
		},
		{
			x: _r - 5,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr + gr
		},
		{
			x: _r + hr,
			y: vr - 5
		}
	], Cr = `M${_r - 5},${vr - 5} L${_r + hr},${vr - 5} L${_r + hr},${vr + gr} L${_r - 5},${vr + gr} L${_r - 5},${vr - 5}
                M${_r - 5},${vr} L${_r + hr},${vr}
                M${_r},${vr - 5} L${_r},${vr + gr}`;
	lr.look !== "handDrawn" && (xr.roughness = 0, xr.fillStyle = "solid");
	let wr = br.path(Cr, xr), Tr = fr.insert(() => wr, ":first-child");
	return Tr.attr("transform", `translate(${5 / 2}, ${5 / 2})`), Tr.attr("class", "basic label-container"), yr && lr.look !== "handDrawn" && Tr.selectAll("path").attr("style", yr), dr && lr.look !== "handDrawn" && Tr.selectAll("path").attr("style", dr), mr.attr("transform", `translate(${-(pr.width / 2) + 5 / 2 - (pr.x - (pr.left ?? 0))}, ${-(pr.height / 2) + 5 / 2 - (pr.y - (pr.top ?? 0))})`), updateNodeBounds(lr, Tr), lr.intersect = function(St) {
		return intersect_default.polygon(lr, Sr, St);
	}, fr;
}
__name(windowPane, "windowPane");
async function erBox(St, lr) {
	let dr = lr;
	if (dr.alias && (lr.label = dr.alias), lr.look === "handDrawn") {
		let { themeVariables: ur } = getConfig(), { background: dr } = ur;
		await erBox(St, {
			...lr,
			id: lr.id + "-background",
			look: "default",
			cssStyles: ["stroke: none", `fill: ${dr}`]
		});
	}
	let fr = getConfig();
	lr.useHtmlLabels = fr.htmlLabels;
	let pr = fr.er?.diagramPadding ?? 10, hr = fr.er?.entityPadding ?? 6, { cssStyles: gr } = lr, { labelStyles: _r, nodeStyles: vr } = styles2String(lr);
	if (dr.attributes.length === 0 && lr.label) {
		let dr = {
			rx: 0,
			ry: 0,
			labelPaddingX: pr,
			labelPaddingY: pr * 1.5,
			classes: ""
		};
		calculateTextWidth(lr.label, fr) + dr.labelPaddingX * 2 < fr.er.minEntityWidth && (lr.width = fr.er.minEntityWidth);
		let mr = await drawRect(St, lr, dr);
		if (!evaluate(fr.htmlLabels)) {
			let St = mr.select("text"), lr = St.node()?.getBBox();
			St.attr("transform", `translate(${-lr.width / 2}, 0)`);
		}
		return mr;
	}
	fr.htmlLabels || (pr *= 1.25, hr *= 1.25);
	let yr = getNodeClasses(lr);
	yr ||= "node default";
	let br = St.insert("g").attr("class", yr).attr("id", lr.domId || lr.id), xr = await addText(br, lr.label ?? "", fr, 0, 0, ["name"], _r);
	xr.height += hr;
	let Cr = 0, Tr = [], Er = [], Dr = 0, Ar = 0, jr = 0, Mr = 0, Nr = !0, Pr = !0;
	for (let St of dr.attributes) {
		let lr = await addText(br, St.type, fr, 0, Cr, ["attribute-type"], _r);
		Dr = Math.max(Dr, lr.width + pr);
		let ur = await addText(br, St.name, fr, 0, Cr, ["attribute-name"], _r);
		Ar = Math.max(Ar, ur.width + pr);
		let dr = await addText(br, St.keys.join(), fr, 0, Cr, ["attribute-keys"], _r);
		jr = Math.max(jr, dr.width + pr);
		let mr = await addText(br, St.comment, fr, 0, Cr, ["attribute-comment"], _r);
		Mr = Math.max(Mr, mr.width + pr);
		let gr = Math.max(lr.height, ur.height, dr.height, mr.height) + hr;
		Er.push({
			yOffset: Cr,
			rowHeight: gr
		}), Cr += gr;
	}
	let Fr = 4;
	jr <= pr && (Nr = !1, jr = 0, Fr--), Mr <= pr && (Pr = !1, Mr = 0, Fr--);
	let Ir = br.node().getBBox();
	if (xr.width + pr * 2 - (Dr + Ar + jr + Mr) > 0) {
		let St = xr.width + pr * 2 - (Dr + Ar + jr + Mr);
		Dr += St / Fr, Ar += St / Fr, jr > 0 && (jr += St / Fr), Mr > 0 && (Mr += St / Fr);
	}
	let Lr = Dr + Ar + jr + Mr, Rr = at.svg(br), zr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (zr.roughness = 0, zr.fillStyle = "solid");
	let Br = 0;
	Er.length > 0 && (Br = Er.reduce((St, lr) => St + (lr?.rowHeight ?? 0), 0));
	let Vr = Math.max(Ir.width + pr * 2, lr?.width || 0, Lr), Hr = Math.max((Br ?? 0) + xr.height, lr?.height || 0), Ur = -Vr / 2, Wr = -Hr / 2;
	br.selectAll("g:not(:first-child)").each((St, lr, ur) => {
		let dr = select_default(ur[lr]), fr = dr.attr("transform"), gr = 0, _r = 0;
		if (fr) {
			let St = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(fr);
			St && (gr = parseFloat(St[1]), _r = parseFloat(St[2]), dr.attr("class").includes("attribute-name") ? gr += Dr : dr.attr("class").includes("attribute-keys") ? gr += Dr + Ar : dr.attr("class").includes("attribute-comment") && (gr += Dr + Ar + jr));
		}
		dr.attr("transform", `translate(${Ur + pr / 2 + gr}, ${_r + Wr + xr.height + hr / 2})`);
	}), br.select(".name").attr("transform", "translate(" + -xr.width / 2 + ", " + (Wr + hr / 2) + ")");
	let Gr = Rr.rectangle(Ur, Wr, Vr, Hr, zr), Kr = br.insert(() => Gr, ":first-child").attr("style", gr.join("")), { themeVariables: qr } = getConfig(), { rowEven: Jr, rowOdd: Yr, nodeBorder: Xr } = qr;
	Tr.push(0);
	for (let [St, lr] of Er.entries()) {
		let ur = (St + 1) % 2 == 0 && lr.yOffset !== 0, dr = Rr.rectangle(Ur, xr.height + Wr + lr?.yOffset, Vr, lr?.rowHeight, {
			...zr,
			fill: ur ? Jr : Yr,
			stroke: Xr
		});
		br.insert(() => dr, "g.label").attr("style", gr.join("")).attr("class", `row-rect-${ur ? "even" : "odd"}`);
	}
	let Zr = Rr.line(Ur, xr.height + Wr, Vr + Ur, xr.height + Wr, zr);
	br.insert(() => Zr).attr("class", "divider"), Zr = Rr.line(Dr + Ur, xr.height + Wr, Dr + Ur, Hr + Wr, zr), br.insert(() => Zr).attr("class", "divider"), Nr && (Zr = Rr.line(Dr + Ar + Ur, xr.height + Wr, Dr + Ar + Ur, Hr + Wr, zr), br.insert(() => Zr).attr("class", "divider")), Pr && (Zr = Rr.line(Dr + Ar + jr + Ur, xr.height + Wr, Dr + Ar + jr + Ur, Hr + Wr, zr), br.insert(() => Zr).attr("class", "divider"));
	for (let St of Tr) Zr = Rr.line(Ur, xr.height + Wr + St, Vr + Ur, xr.height + Wr + St, zr), br.insert(() => Zr).attr("class", "divider");
	if (updateNodeBounds(lr, Kr), vr && lr.look !== "handDrawn") {
		let St = vr.split(";")?.filter((St) => St.includes("stroke"))?.map((St) => `${St}`).join("; ");
		br.selectAll("path").attr("style", St ?? ""), br.selectAll(".row-rect-even path").attr("style", vr);
	}
	return lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, br;
}
__name(erBox, "erBox");
async function addText(St, lr, dr, fr = 0, pr = 0, gr = [], _r = "") {
	let vr = St.insert("g").attr("class", `label ${gr.join(" ")}`).attr("transform", `translate(${fr}, ${pr})`).attr("style", _r);
	lr !== parseGenericTypes(lr) && (lr = parseGenericTypes(lr), lr = lr.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
	let yr = vr.node().appendChild(await createText(vr, lr, {
		width: calculateTextWidth(lr, dr) + 100,
		style: _r,
		useHtmlLabels: dr.htmlLabels
	}, dr));
	if (lr.includes("&lt;") || lr.includes("&gt;")) {
		let St = yr.children[0];
		for (St.textContent = St.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); St.childNodes[0];) St = St.childNodes[0], St.textContent = St.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
	}
	let br = yr.getBBox();
	if (evaluate(dr.htmlLabels)) {
		let St = yr.children[0];
		St.style.textAlign = "start";
		let lr = select_default(yr);
		br = St.getBoundingClientRect(), lr.attr("width", br.width), lr.attr("height", br.height);
	}
	return br;
}
__name(addText, "addText");
async function textHelper(St, lr, ur, dr, fr = ur.class.padding ?? 12) {
	let pr = dr ? 0 : 3, mr = St.insert("g").attr("class", getNodeClasses(lr)).attr("id", lr.domId || lr.id), hr = null, gr = null, _r = null, vr = null, yr = 0, br = 0, xr = 0;
	if (hr = mr.insert("g").attr("class", "annotation-group text"), lr.annotations.length > 0) {
		let St = lr.annotations[0];
		await addText2(hr, { text: `\xAB${St}\xBB` }, 0), yr = hr.node().getBBox().height;
	}
	gr = mr.insert("g").attr("class", "label-group text"), await addText2(gr, lr, 0, ["font-weight: bolder"]);
	let Sr = gr.node().getBBox();
	br = Sr.height, _r = mr.insert("g").attr("class", "members-group text");
	let Cr = 0;
	for (let St of lr.members) {
		let lr = await addText2(_r, St, Cr, [St.parseClassifier()]);
		Cr += lr + pr;
	}
	xr = _r.node().getBBox().height, xr <= 0 && (xr = fr / 2), vr = mr.insert("g").attr("class", "methods-group text");
	let wr = 0;
	for (let St of lr.methods) {
		let lr = await addText2(vr, St, wr, [St.parseClassifier()]);
		wr += lr + pr;
	}
	let Tr = mr.node().getBBox();
	if (hr !== null) {
		let St = hr.node().getBBox();
		hr.attr("transform", `translate(${-St.width / 2})`);
	}
	return gr.attr("transform", `translate(${-Sr.width / 2}, ${yr})`), Tr = mr.node().getBBox(), _r.attr("transform", `translate(0, ${yr + br + fr * 2})`), Tr = mr.node().getBBox(), vr.attr("transform", `translate(0, ${yr + br + (xr ? xr + fr * 4 : fr * 2)})`), Tr = mr.node().getBBox(), {
		shapeSvg: mr,
		bbox: Tr
	};
}
__name(textHelper, "textHelper");
async function addText2(lr, dr, fr, hr = []) {
	let gr = lr.insert("g").attr("class", "label").attr("style", hr.join("; ")), vr = getConfig(), br = "useHtmlLabels" in dr ? dr.useHtmlLabels : evaluate(vr.htmlLabels) ?? !0, xr = "";
	xr = "text" in dr ? dr.text : dr.label, !br && xr.startsWith("\\") && (xr = xr.substring(1)), hasKatex(xr) && (br = !0);
	let Cr = await createText(gr, sanitizeText3(decodeEntities(xr)), {
		width: calculateTextWidth(xr, vr) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: br
	}, vr), Er, Dr = 1;
	if (br) {
		let St = Cr.children[0], lr = select_default(Cr);
		Dr = St.innerHTML.split("<br>").length, St.innerHTML.includes("</math>") && (Dr += St.innerHTML.split("<mrow>").length - 1);
		let ur = St.getElementsByTagName("img");
		if (ur) {
			let St = xr.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all([...ur].map((lr) => new Promise((ur) => {
				function dr() {
					if (lr.style.display = "flex", lr.style.flexDirection = "column", St) {
						let St = vr.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, ur = parseInt(St, 10) * 5 + "px";
						lr.style.minWidth = ur, lr.style.maxWidth = ur;
					} else lr.style.width = "100%";
					ur(lr);
				}
				__name(dr, "setupImage"), setTimeout(() => {
					lr.complete && dr();
				}), lr.addEventListener("error", dr), lr.addEventListener("load", dr);
			})));
		}
		Er = St.getBoundingClientRect(), lr.attr("width", Er.width), lr.attr("height", Er.height);
	} else {
		hr.includes("font-weight: bolder") && select_default(Cr).selectAll("tspan").attr("font-weight", ""), Dr = Cr.children.length;
		let St = Cr.children[0];
		(Cr.textContent === "" || Cr.textContent.includes("&gt")) && (St.textContent = xr[0] + xr.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), xr[1] === " " && (St.textContent = St.textContent[0] + " " + St.textContent.substring(1))), St.textContent === "undefined" && (St.textContent = ""), Er = Cr.getBBox();
	}
	return gr.attr("transform", "translate(0," + (-Er.height / (2 * Dr) + fr) + ")"), Er.height;
}
__name(addText2, "addText");
async function classBox(St, lr) {
	let ur = getConfig2(), dr = ur.class.padding ?? 12, fr = dr, pr = lr.useHtmlLabels ?? evaluate(ur.htmlLabels) ?? !0, hr = lr;
	hr.annotations = hr.annotations ?? [], hr.members = hr.members ?? [], hr.methods = hr.methods ?? [];
	let { shapeSvg: gr, bbox: _r } = await textHelper(St, lr, ur, pr, fr), { labelStyles: vr, nodeStyles: yr } = styles2String(lr);
	lr.labelStyle = vr, lr.cssStyles = hr.styles || "";
	let xr = hr.styles?.join(";") || yr || "";
	lr.cssStyles ||= xr.replaceAll("!important", "").split(";");
	let Cr = hr.members.length === 0 && hr.methods.length === 0 && !ur.class?.hideEmptyMembersBox, wr = at.svg(gr), Tr = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Tr.roughness = 0, Tr.fillStyle = "solid");
	let Er = _r.width, Dr = _r.height;
	hr.members.length === 0 && hr.methods.length === 0 ? Dr += fr : hr.members.length > 0 && hr.methods.length === 0 && (Dr += fr * 2);
	let Ar = -Er / 2, jr = -Dr / 2, Mr = wr.rectangle(Ar - dr, jr - dr - (Cr ? dr : hr.members.length === 0 && hr.methods.length === 0 ? -dr / 2 : 0), Er + 2 * dr, Dr + 2 * dr + (Cr ? dr * 2 : hr.members.length === 0 && hr.methods.length === 0 ? -dr : 0), Tr), Nr = gr.insert(() => Mr, ":first-child");
	Nr.attr("class", "basic label-container");
	let Pr = Nr.node().getBBox();
	gr.selectAll(".text").each((St, lr, ur) => {
		let fr = select_default(ur[lr]), _r = fr.attr("transform"), vr = 0;
		if (_r) {
			let St = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(_r);
			St && (vr = parseFloat(St[2]));
		}
		let yr = vr + jr + dr - (Cr ? dr : hr.members.length === 0 && hr.methods.length === 0 ? -dr / 2 : 0);
		pr || (yr -= 4);
		let br = Ar;
		(fr.attr("class").includes("label-group") || fr.attr("class").includes("annotation-group")) && (br = -fr.node()?.getBBox().width / 2 || 0, gr.selectAll("text").each(function(St, lr, ur) {
			window.getComputedStyle(ur[lr]).textAnchor === "middle" && (br = 0);
		})), fr.attr("transform", `translate(${br}, ${yr})`);
	});
	let Fr = gr.select(".annotation-group").node().getBBox().height - (Cr ? dr / 2 : 0) || 0, Ir = gr.select(".label-group").node().getBBox().height - (Cr ? dr / 2 : 0) || 0, Lr = gr.select(".members-group").node().getBBox().height - (Cr ? dr / 2 : 0) || 0;
	if (hr.members.length > 0 || hr.methods.length > 0 || Cr) {
		let St = wr.line(Pr.x, Fr + Ir + jr + dr, Pr.x + Pr.width, Fr + Ir + jr + dr, Tr);
		gr.insert(() => St).attr("class", "divider").attr("style", xr);
	}
	if (Cr || hr.members.length > 0 || hr.methods.length > 0) {
		let St = wr.line(Pr.x, Fr + Ir + Lr + jr + fr * 2 + dr, Pr.x + Pr.width, Fr + Ir + Lr + jr + dr + fr * 2, Tr);
		gr.insert(() => St).attr("class", "divider").attr("style", xr);
	}
	if (hr.look !== "handDrawn" && gr.selectAll("path").attr("style", xr), Nr.select(":nth-child(2)").attr("style", xr), gr.selectAll(".divider").select("path").attr("style", xr), lr.labelStyle ? gr.selectAll("span").attr("style", lr.labelStyle) : gr.selectAll("span").attr("style", xr), !pr) {
		let St = RegExp(/color\s*:\s*([^;]*)/), lr = St.exec(xr);
		if (lr) {
			let St = lr[0].replace("color", "fill");
			gr.selectAll("tspan").attr("style", St);
		} else if (vr) {
			let lr = St.exec(vr);
			if (lr) {
				let St = lr[0].replace("color", "fill");
				gr.selectAll("tspan").attr("style", St);
			}
		}
	}
	return updateNodeBounds(lr, Nr), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, gr;
}
__name(classBox, "classBox");
async function requirementBox(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let fr = lr, pr = lr, hr = "verifyMethod" in lr, gr = getNodeClasses(lr), _r = St.insert("g").attr("class", gr).attr("id", lr.domId ?? lr.id), vr;
	vr = hr ? await addText3(_r, `&lt;&lt;${fr.type}&gt;&gt;`, 0, lr.labelStyle) : await addText3(_r, "&lt;&lt;Element&gt;&gt;", 0, lr.labelStyle);
	let yr = vr, br = await addText3(_r, fr.name, yr, lr.labelStyle + "; font-weight: bold;");
	if (yr += br + 20, hr) {
		let St = await addText3(_r, `${fr.requirementId ? `ID: ${fr.requirementId}` : ""}`, yr, lr.labelStyle);
		yr += St;
		let ur = await addText3(_r, `${fr.text ? `Text: ${fr.text}` : ""}`, yr, lr.labelStyle);
		yr += ur;
		let dr = await addText3(_r, `${fr.risk ? `Risk: ${fr.risk}` : ""}`, yr, lr.labelStyle);
		yr += dr, await addText3(_r, `${fr.verifyMethod ? `Verification: ${fr.verifyMethod}` : ""}`, yr, lr.labelStyle);
	} else {
		let St = await addText3(_r, `${pr.type ? `Type: ${pr.type}` : ""}`, yr, lr.labelStyle);
		yr += St, await addText3(_r, `${pr.docRef ? `Doc Ref: ${pr.docRef}` : ""}`, yr, lr.labelStyle);
	}
	let xr = (_r.node()?.getBBox().width ?? 200) + 20, Sr = (_r.node()?.getBBox().height ?? 200) + 20, Cr = -xr / 2, wr = -Sr / 2, Tr = at.svg(_r), Er = userNodeOverrides(lr, {});
	lr.look !== "handDrawn" && (Er.roughness = 0, Er.fillStyle = "solid");
	let Dr = Tr.rectangle(Cr, wr, xr, Sr, Er), Ar = _r.insert(() => Dr, ":first-child");
	if (Ar.attr("class", "basic label-container").attr("style", dr), _r.selectAll(".label").each((St, lr, ur) => {
		let dr = select_default(ur[lr]), fr = dr.attr("transform"), pr = 0, hr = 0;
		if (fr) {
			let St = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(fr);
			St && (pr = parseFloat(St[1]), hr = parseFloat(St[2]));
		}
		let gr = hr - Sr / 2, _r = Cr + 20 / 2;
		(lr === 0 || lr === 1) && (_r = pr), dr.attr("transform", `translate(${_r}, ${gr + 20})`);
	}), yr > vr + br + 20) {
		let St = Tr.line(Cr, wr + vr + br + 20, Cr + xr, wr + vr + br + 20, Er);
		_r.insert(() => St).attr("style", dr);
	}
	return updateNodeBounds(lr, Ar), lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, _r;
}
__name(requirementBox, "requirementBox");
async function addText3(lr, dr, fr, pr = "") {
	if (dr === "") return 0;
	let hr = lr.insert("g").attr("class", "label").attr("style", pr), gr = getConfig2(), vr = gr.htmlLabels ?? !0, yr = await createText(hr, sanitizeText3(decodeEntities(dr)), {
		width: calculateTextWidth(dr, gr) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: vr,
		style: pr
	}, gr), xr;
	if (vr) {
		let St = yr.children[0], lr = select_default(yr);
		xr = St.getBoundingClientRect(), lr.attr("width", xr.width), lr.attr("height", xr.height);
	} else {
		let St = yr.children[0];
		for (let lr of St.children) lr.textContent = lr.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), pr && lr.setAttribute("style", pr);
		xr = yr.getBBox(), xr.height += 6;
	}
	return hr.attr("transform", `translate(${-xr.width / 2},${-xr.height / 2 + fr})`), xr.height;
}
__name(addText3, "addText");
var colorFromPriority = /* @__PURE__ */ __name((St) => {
	switch (St) {
		case "Very High": return "red";
		case "High": return "orange";
		case "Medium": return null;
		case "Low": return "blue";
		case "Very Low": return "lightblue";
	}
}, "colorFromPriority");
async function kanbanItem(St, lr, { config: ur }) {
	let { labelStyles: dr, nodeStyles: fr } = styles2String(lr);
	lr.labelStyle = dr || "";
	let pr = lr.width;
	lr.width = (lr.width ?? 200) - 10;
	let { shapeSvg: mr, bbox: hr, label: gr } = await labelHelper(St, lr, getNodeClasses(lr)), _r = lr.padding || 10, vr = "", yr;
	"ticket" in lr && lr.ticket && ur?.kanban?.ticketBaseUrl && (vr = ur?.kanban?.ticketBaseUrl.replace("#TICKET#", lr.ticket), yr = mr.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", vr).attr("target", "_blank"));
	let br = {
		useHtmlLabels: lr.useHtmlLabels,
		labelStyle: lr.labelStyle || "",
		width: lr.width,
		img: lr.img,
		padding: lr.padding || 8,
		centerLabel: !1
	}, xr, Sr;
	yr ? {label: xr, bbox: Sr} = await insertLabel(yr, "ticket" in lr && lr.ticket || "", br) : {label: xr, bbox: Sr} = await insertLabel(mr, "ticket" in lr && lr.ticket || "", br);
	let { label: Cr, bbox: wr } = await insertLabel(mr, "assigned" in lr && lr.assigned || "", br);
	lr.width = pr;
	let Tr = lr?.width || 0, Er = Math.max(Sr.height, wr.height) / 2, Dr = Math.max(hr.height + 20, lr?.height || 0) + Er, Ar = -Tr / 2, jr = -Dr / 2;
	gr.attr("transform", "translate(" + (_r - Tr / 2) + ", " + (-Er - hr.height / 2) + ")"), xr.attr("transform", "translate(" + (_r - Tr / 2) + ", " + (-Er + hr.height / 2) + ")"), Cr.attr("transform", "translate(" + (_r + Tr / 2 - wr.width - 20) + ", " + (-Er + hr.height / 2) + ")");
	let Mr, { rx: Nr, ry: Pr } = lr, { cssStyles: Fr } = lr;
	if (lr.look === "handDrawn") {
		let St = at.svg(mr), ur = userNodeOverrides(lr, {}), dr = Nr || Pr ? St.path(createRoundedRectPathD(Ar, jr, Tr, Dr, Nr || 0), ur) : St.rectangle(Ar, jr, Tr, Dr, ur);
		Mr = mr.insert(() => dr, ":first-child"), Mr.attr("class", "basic label-container").attr("style", Fr || null);
	} else {
		Mr = mr.insert("rect", ":first-child"), Mr.attr("class", "basic label-container __APA__").attr("style", fr).attr("rx", Nr ?? 5).attr("ry", Pr ?? 5).attr("x", Ar).attr("y", jr).attr("width", Tr).attr("height", Dr);
		let St = "priority" in lr && lr.priority;
		if (St) {
			let lr = mr.append("line"), ur = Ar + 2, dr = jr + Math.floor((Nr ?? 0) / 2), fr = jr + Dr - Math.floor((Nr ?? 0) / 2);
			lr.attr("x1", ur).attr("y1", dr).attr("x2", ur).attr("y2", fr).attr("stroke-width", "4").attr("stroke", colorFromPriority(St));
		}
	}
	return updateNodeBounds(lr, Mr), lr.height = Dr, lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, mr;
}
__name(kanbanItem, "kanbanItem");
async function bang(St, lr) {
	let { labelStyles: ur, nodeStyles: pr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: mr, bbox: hr, halfPadding: gr, label: _r } = await labelHelper(St, lr, getNodeClasses(lr)), vr = hr.width + 10 * gr, yr = hr.height + 8 * gr, br = .15 * vr, { cssStyles: xr } = lr, Sr = hr.width + 20, Cr = hr.height + 20, wr = Math.max(vr, Sr), Tr = Math.max(yr, Cr);
	_r.attr("transform", `translate(${-hr.width / 2}, ${-hr.height / 2})`);
	let Er, Dr = `M0 0 
    a${br},${br} 1 0,0 ${wr * .25},${-1 * Tr * .1}
    a${br},${br} 1 0,0 ${wr * .25},0
    a${br},${br} 1 0,0 ${wr * .25},0
    a${br},${br} 1 0,0 ${wr * .25},${Tr * .1}

    a${br},${br} 1 0,0 ${wr * .15},${Tr * .33}
    a${br * .8},${br * .8} 1 0,0 0,${Tr * .34}
    a${br},${br} 1 0,0 ${-1 * wr * .15},${Tr * .33}

    a${br},${br} 1 0,0 ${-1 * wr * .25},${Tr * .15}
    a${br},${br} 1 0,0 ${-1 * wr * .25},0
    a${br},${br} 1 0,0 ${-1 * wr * .25},0
    a${br},${br} 1 0,0 ${-1 * wr * .25},${-1 * Tr * .15}

    a${br},${br} 1 0,0 ${-1 * wr * .1},${-1 * Tr * .33}
    a${br * .8},${br * .8} 1 0,0 0,${-1 * Tr * .34}
    a${br},${br} 1 0,0 ${wr * .1},${-1 * Tr * .33}
  H0 V0 Z`;
	if (lr.look === "handDrawn") {
		let St = at.svg(mr), ur = userNodeOverrides(lr, {}), fr = St.path(Dr, ur);
		Er = mr.insert(() => fr, ":first-child"), Er.attr("class", "basic label-container").attr("style", handleUndefinedAttr(xr));
	} else Er = mr.insert("path", ":first-child").attr("class", "basic label-container").attr("style", pr).attr("d", Dr);
	return Er.attr("transform", `translate(${-wr / 2}, ${-Tr / 2})`), updateNodeBounds(lr, Er), lr.calcIntersect = function(St, lr) {
		return intersect_default.rect(St, lr);
	}, lr.intersect = function(St) {
		return log.info("Bang intersect", lr, St), intersect_default.rect(lr, St);
	}, mr;
}
__name(bang, "bang");
async function cloud(St, lr) {
	let { labelStyles: ur, nodeStyles: pr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: mr, bbox: hr, halfPadding: gr, label: _r } = await labelHelper(St, lr, getNodeClasses(lr)), vr = hr.width + 2 * gr, yr = hr.height + 2 * gr, br = .15 * vr, xr = .25 * vr, Sr = .35 * vr, Cr = .2 * vr, { cssStyles: wr } = lr, Tr, Er = `M0 0 
    a${br},${br} 0 0,1 ${vr * .25},${-1 * vr * .1}
    a${Sr},${Sr} 1 0,1 ${vr * .4},${-1 * vr * .1}
    a${xr},${xr} 1 0,1 ${vr * .35},${vr * .2}

    a${br},${br} 1 0,1 ${vr * .15},${yr * .35}
    a${Cr},${Cr} 1 0,1 ${-1 * vr * .15},${yr * .65}

    a${xr},${br} 1 0,1 ${-1 * vr * .25},${vr * .15}
    a${Sr},${Sr} 1 0,1 ${-1 * vr * .5},0
    a${br},${br} 1 0,1 ${-1 * vr * .25},${-1 * vr * .15}

    a${br},${br} 1 0,1 ${-1 * vr * .1},${-1 * yr * .35}
    a${Cr},${Cr} 1 0,1 ${vr * .1},${-1 * yr * .65}
  H0 V0 Z`;
	if (lr.look === "handDrawn") {
		let St = at.svg(mr), ur = userNodeOverrides(lr, {}), fr = St.path(Er, ur);
		Tr = mr.insert(() => fr, ":first-child"), Tr.attr("class", "basic label-container").attr("style", handleUndefinedAttr(wr));
	} else Tr = mr.insert("path", ":first-child").attr("class", "basic label-container").attr("style", pr).attr("d", Er);
	return _r.attr("transform", `translate(${-hr.width / 2}, ${-hr.height / 2})`), Tr.attr("transform", `translate(${-vr / 2}, ${-yr / 2})`), updateNodeBounds(lr, Tr), lr.calcIntersect = function(St, lr) {
		return intersect_default.rect(St, lr);
	}, lr.intersect = function(St) {
		return log.info("Cloud intersect", lr, St), intersect_default.rect(lr, St);
	}, mr;
}
__name(cloud, "cloud");
async function defaultMindmapNode(St, lr) {
	let { labelStyles: ur, nodeStyles: dr } = styles2String(lr);
	lr.labelStyle = ur;
	let { shapeSvg: fr, bbox: pr, halfPadding: mr, label: hr } = await labelHelper(St, lr, getNodeClasses(lr)), gr = pr.width + 8 * mr, _r = pr.height + 2 * mr, vr = `
    M${-gr / 2} ${_r / 2 - 5}
    v${-_r + 10}
    q0,-5 5,-5
    h${gr - 10}
    q5,0 5,5
    v${_r - 10}
    q0,5 -5,5
    h${-gr + 10}
    q-5,0 -5,-5
    Z
  `, yr = fr.append("path").attr("id", "node-" + lr.id).attr("class", "node-bkg node-" + lr.type).attr("style", dr).attr("d", vr);
	return fr.append("line").attr("class", "node-line-").attr("x1", -gr / 2).attr("y1", _r / 2).attr("x2", gr / 2).attr("y2", _r / 2), hr.attr("transform", `translate(${-pr.width / 2}, ${-pr.height / 2})`), fr.append(() => hr.node()), updateNodeBounds(lr, yr), lr.calcIntersect = function(St, lr) {
		return intersect_default.rect(St, lr);
	}, lr.intersect = function(St) {
		return intersect_default.rect(lr, St);
	}, fr;
}
__name(defaultMindmapNode, "defaultMindmapNode");
async function mindmapCircle(St, lr) {
	return circle(St, lr, { padding: lr.padding ?? 0 });
}
__name(mindmapCircle, "mindmapCircle");
var shapesDefs = [
	{
		semanticName: "Process",
		name: "Rectangle",
		shortName: "rect",
		description: "Standard process shape",
		aliases: [
			"proc",
			"process",
			"rectangle"
		],
		internalAliases: ["squareRect"],
		handler: squareRect2
	},
	{
		semanticName: "Event",
		name: "Rounded Rectangle",
		shortName: "rounded",
		description: "Represents an event",
		aliases: ["event"],
		internalAliases: ["roundedRect"],
		handler: roundedRect
	},
	{
		semanticName: "Terminal Point",
		name: "Stadium",
		shortName: "stadium",
		description: "Terminal point",
		aliases: ["terminal", "pill"],
		handler: stadium
	},
	{
		semanticName: "Subprocess",
		name: "Framed Rectangle",
		shortName: "fr-rect",
		description: "Subprocess",
		aliases: [
			"subprocess",
			"subproc",
			"framed-rectangle",
			"subroutine"
		],
		handler: subroutine
	},
	{
		semanticName: "Database",
		name: "Cylinder",
		shortName: "cyl",
		description: "Database storage",
		aliases: [
			"db",
			"database",
			"cylinder"
		],
		handler: cylinder
	},
	{
		semanticName: "Start",
		name: "Circle",
		shortName: "circle",
		description: "Starting point",
		aliases: ["circ"],
		handler: circle
	},
	{
		semanticName: "Bang",
		name: "Bang",
		shortName: "bang",
		description: "Bang",
		aliases: ["bang"],
		handler: bang
	},
	{
		semanticName: "Cloud",
		name: "Cloud",
		shortName: "cloud",
		description: "cloud",
		aliases: ["cloud"],
		handler: cloud
	},
	{
		semanticName: "Decision",
		name: "Diamond",
		shortName: "diam",
		description: "Decision-making step",
		aliases: [
			"decision",
			"diamond",
			"question"
		],
		handler: question
	},
	{
		semanticName: "Prepare Conditional",
		name: "Hexagon",
		shortName: "hex",
		description: "Preparation or condition step",
		aliases: ["hexagon", "prepare"],
		handler: hexagon
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Right",
		shortName: "lean-r",
		description: "Represents input or output",
		aliases: ["lean-right", "in-out"],
		internalAliases: ["lean_right"],
		handler: lean_right
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Left",
		shortName: "lean-l",
		description: "Represents output or input",
		aliases: ["lean-left", "out-in"],
		internalAliases: ["lean_left"],
		handler: lean_left
	},
	{
		semanticName: "Priority Action",
		name: "Trapezoid Base Bottom",
		shortName: "trap-b",
		description: "Priority action",
		aliases: [
			"priority",
			"trapezoid-bottom",
			"trapezoid"
		],
		handler: trapezoid
	},
	{
		semanticName: "Manual Operation",
		name: "Trapezoid Base Top",
		shortName: "trap-t",
		description: "Represents a manual task",
		aliases: [
			"manual",
			"trapezoid-top",
			"inv-trapezoid"
		],
		internalAliases: ["inv_trapezoid"],
		handler: inv_trapezoid
	},
	{
		semanticName: "Stop",
		name: "Double Circle",
		shortName: "dbl-circ",
		description: "Represents a stop point",
		aliases: ["double-circle"],
		internalAliases: ["doublecircle"],
		handler: doublecircle
	},
	{
		semanticName: "Text Block",
		name: "Text Block",
		shortName: "text",
		description: "Text block",
		handler: text
	},
	{
		semanticName: "Card",
		name: "Notched Rectangle",
		shortName: "notch-rect",
		description: "Represents a card",
		aliases: ["card", "notched-rectangle"],
		handler: card
	},
	{
		semanticName: "Lined/Shaded Process",
		name: "Lined Rectangle",
		shortName: "lin-rect",
		description: "Lined process shape",
		aliases: [
			"lined-rectangle",
			"lined-process",
			"lin-proc",
			"shaded-process"
		],
		handler: shadedProcess
	},
	{
		semanticName: "Start",
		name: "Small Circle",
		shortName: "sm-circ",
		description: "Small starting point",
		aliases: ["start", "small-circle"],
		internalAliases: ["stateStart"],
		handler: stateStart
	},
	{
		semanticName: "Stop",
		name: "Framed Circle",
		shortName: "fr-circ",
		description: "Stop point",
		aliases: ["stop", "framed-circle"],
		internalAliases: ["stateEnd"],
		handler: stateEnd
	},
	{
		semanticName: "Fork/Join",
		name: "Filled Rectangle",
		shortName: "fork",
		description: "Fork or join in process flow",
		aliases: ["join"],
		internalAliases: ["forkJoin"],
		handler: forkJoin
	},
	{
		semanticName: "Collate",
		name: "Hourglass",
		shortName: "hourglass",
		description: "Represents a collate operation",
		aliases: ["hourglass", "collate"],
		handler: hourglass
	},
	{
		semanticName: "Comment",
		name: "Curly Brace",
		shortName: "brace",
		description: "Adds a comment",
		aliases: ["comment", "brace-l"],
		handler: curlyBraceLeft
	},
	{
		semanticName: "Comment Right",
		name: "Curly Brace",
		shortName: "brace-r",
		description: "Adds a comment",
		handler: curlyBraceRight
	},
	{
		semanticName: "Comment with braces on both sides",
		name: "Curly Braces",
		shortName: "braces",
		description: "Adds a comment",
		handler: curlyBraces
	},
	{
		semanticName: "Com Link",
		name: "Lightning Bolt",
		shortName: "bolt",
		description: "Communication link",
		aliases: ["com-link", "lightning-bolt"],
		handler: lightningBolt
	},
	{
		semanticName: "Document",
		name: "Document",
		shortName: "doc",
		description: "Represents a document",
		aliases: ["doc", "document"],
		handler: waveEdgedRectangle
	},
	{
		semanticName: "Delay",
		name: "Half-Rounded Rectangle",
		shortName: "delay",
		description: "Represents a delay",
		aliases: ["half-rounded-rectangle"],
		handler: halfRoundedRectangle
	},
	{
		semanticName: "Direct Access Storage",
		name: "Horizontal Cylinder",
		shortName: "h-cyl",
		description: "Direct access storage",
		aliases: ["das", "horizontal-cylinder"],
		handler: tiltedCylinder
	},
	{
		semanticName: "Disk Storage",
		name: "Lined Cylinder",
		shortName: "lin-cyl",
		description: "Disk storage",
		aliases: ["disk", "lined-cylinder"],
		handler: linedCylinder
	},
	{
		semanticName: "Display",
		name: "Curved Trapezoid",
		shortName: "curv-trap",
		description: "Represents a display",
		aliases: ["curved-trapezoid", "display"],
		handler: curvedTrapezoid
	},
	{
		semanticName: "Divided Process",
		name: "Divided Rectangle",
		shortName: "div-rect",
		description: "Divided process shape",
		aliases: [
			"div-proc",
			"divided-rectangle",
			"divided-process"
		],
		handler: dividedRectangle
	},
	{
		semanticName: "Extract",
		name: "Triangle",
		shortName: "tri",
		description: "Extraction process",
		aliases: ["extract", "triangle"],
		handler: triangle
	},
	{
		semanticName: "Internal Storage",
		name: "Window Pane",
		shortName: "win-pane",
		description: "Internal storage",
		aliases: ["internal-storage", "window-pane"],
		handler: windowPane
	},
	{
		semanticName: "Junction",
		name: "Filled Circle",
		shortName: "f-circ",
		description: "Junction point",
		aliases: ["junction", "filled-circle"],
		handler: filledCircle
	},
	{
		semanticName: "Loop Limit",
		name: "Trapezoidal Pentagon",
		shortName: "notch-pent",
		description: "Loop limit step",
		aliases: ["loop-limit", "notched-pentagon"],
		handler: trapezoidalPentagon
	},
	{
		semanticName: "Manual File",
		name: "Flipped Triangle",
		shortName: "flip-tri",
		description: "Manual file operation",
		aliases: ["manual-file", "flipped-triangle"],
		handler: flippedTriangle
	},
	{
		semanticName: "Manual Input",
		name: "Sloped Rectangle",
		shortName: "sl-rect",
		description: "Manual input step",
		aliases: ["manual-input", "sloped-rectangle"],
		handler: slopedRect
	},
	{
		semanticName: "Multi-Document",
		name: "Stacked Document",
		shortName: "docs",
		description: "Multiple documents",
		aliases: [
			"documents",
			"st-doc",
			"stacked-document"
		],
		handler: multiWaveEdgedRectangle
	},
	{
		semanticName: "Multi-Process",
		name: "Stacked Rectangle",
		shortName: "st-rect",
		description: "Multiple processes",
		aliases: [
			"procs",
			"processes",
			"stacked-rectangle"
		],
		handler: multiRect
	},
	{
		semanticName: "Stored Data",
		name: "Bow Tie Rectangle",
		shortName: "bow-rect",
		description: "Stored data",
		aliases: ["stored-data", "bow-tie-rectangle"],
		handler: bowTieRect
	},
	{
		semanticName: "Summary",
		name: "Crossed Circle",
		shortName: "cross-circ",
		description: "Summary",
		aliases: ["summary", "crossed-circle"],
		handler: crossedCircle
	},
	{
		semanticName: "Tagged Document",
		name: "Tagged Document",
		shortName: "tag-doc",
		description: "Tagged document",
		aliases: ["tag-doc", "tagged-document"],
		handler: taggedWaveEdgedRectangle
	},
	{
		semanticName: "Tagged Process",
		name: "Tagged Rectangle",
		shortName: "tag-rect",
		description: "Tagged process",
		aliases: [
			"tagged-rectangle",
			"tag-proc",
			"tagged-process"
		],
		handler: taggedRect
	},
	{
		semanticName: "Paper Tape",
		name: "Flag",
		shortName: "flag",
		description: "Paper tape",
		aliases: ["paper-tape"],
		handler: waveRectangle
	},
	{
		semanticName: "Odd",
		name: "Odd",
		shortName: "odd",
		description: "Odd shape",
		internalAliases: ["rect_left_inv_arrow"],
		handler: rect_left_inv_arrow
	},
	{
		semanticName: "Lined Document",
		name: "Lined Document",
		shortName: "lin-doc",
		description: "Lined document",
		aliases: ["lined-document"],
		handler: linedWaveEdgedRect
	}
], shapes2 = (/* @__PURE__ */ __name(() => {
	let St = {
		state,
		choice,
		note,
		rectWithTitle,
		labelRect,
		iconSquare,
		iconCircle,
		icon,
		iconRounded,
		imageSquare,
		anchor,
		kanbanItem,
		mindmapCircle,
		defaultMindmapNode,
		classBox,
		erBox,
		requirementBox
	}, lr = [...Object.entries(St), ...shapesDefs.flatMap((St) => [
		St.shortName,
		..."aliases" in St ? St.aliases : [],
		..."internalAliases" in St ? St.internalAliases : []
	].map((lr) => [lr, St.handler]))];
	return Object.fromEntries(lr);
}, "generateShapeMap"))();
function isValidShape(St) {
	return St in shapes2;
}
__name(isValidShape, "isValidShape");
var nodeElems = /* @__PURE__ */ new Map();
async function insertNode(St, lr, ur) {
	let dr, fr;
	lr.shape === "rect" && (lr.rx && lr.ry ? lr.shape = "roundedRect" : lr.shape = "squareRect");
	let pr = lr.shape ? shapes2[lr.shape] : void 0;
	if (!pr) throw Error(`No such shape: ${lr.shape}. Please check your syntax.`);
	if (lr.link) {
		let mr;
		ur.config.securityLevel === "sandbox" ? mr = "_top" : lr.linkTarget && (mr = lr.linkTarget || "_blank"), dr = St.insert("svg:a").attr("xlink:href", lr.link).attr("target", mr ?? null), fr = await pr(dr, lr, ur);
	} else fr = await pr(St, lr, ur), dr = fr;
	return lr.tooltip && fr.attr("title", lr.tooltip), nodeElems.set(lr.id, dr), lr.haveCallback && dr.attr("class", dr.attr("class") + " clickable"), dr;
}
__name(insertNode, "insertNode");
var setNodeElem = /* @__PURE__ */ __name((St, lr) => {
	nodeElems.set(lr.id, St);
}, "setNodeElem"), clear2 = /* @__PURE__ */ __name(() => {
	nodeElems.clear();
}, "clear"), positionNode = /* @__PURE__ */ __name((St) => {
	let lr = nodeElems.get(St.id);
	log.trace("Transforming node", St.diff, St, "translate(" + (St.x - St.width / 2 - 5) + ", " + St.width / 2 + ")");
	let ur = St.diff || 0;
	return St.clusterNode ? lr.attr("transform", "translate(" + (St.x + ur - St.width / 2) + ", " + (St.y - St.height / 2 - 8) + ")") : lr.attr("transform", "translate(" + St.x + ", " + St.y + ")"), ur;
}, "positionNode");
export { insertNode as a, positionNode as c, at as d, insertCluster as i, setNodeElem as l, clear2 as n, isValidShape as o, createLabel_default as r, labelHelper as s, clear as t, updateNodeBounds as u };
