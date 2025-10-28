import { f as number_default, l as round_default, u as value_default } from "./timer-Bp1bAW5T.js";
import { a as exponent_default, i as formatSpecifier, n as formatPrefix, t as format } from "./defaultLocale-BBsRvltv.js";
import { n as initRange } from "./init-ULMCeUqd.js";
function ascending(s, O) {
	return s == null || O == null ? NaN : s < O ? -1 : s > O ? 1 : s >= O ? 0 : NaN;
}
function descending(s, O) {
	return s == null || O == null ? NaN : O < s ? -1 : O > s ? 1 : O >= s ? 0 : NaN;
}
function bisector(s) {
	let O, k, A;
	s.length === 2 ? (O = s === ascending || s === descending ? s : zero, k = s, A = s) : (O = ascending, k = (O, k) => ascending(s(O), k), A = (O, k) => s(O) - k);
	function j(s, A, j = 0, M = s.length) {
		if (j < M) {
			if (O(A, A) !== 0) return M;
			do {
				let O = j + M >>> 1;
				k(s[O], A) < 0 ? j = O + 1 : M = O;
			} while (j < M);
		}
		return j;
	}
	function M(s, A, j = 0, M = s.length) {
		if (j < M) {
			if (O(A, A) !== 0) return M;
			do {
				let O = j + M >>> 1;
				k(s[O], A) <= 0 ? j = O + 1 : M = O;
			} while (j < M);
		}
		return j;
	}
	function N(s, O, k = 0, M = s.length) {
		let N = j(s, O, k, M - 1);
		return N > k && A(s[N - 1], O) > -A(s[N], O) ? N - 1 : N;
	}
	return {
		left: j,
		center: N,
		right: M
	};
}
function zero() {
	return 0;
}
function number$1(s) {
	return s === null ? NaN : +s;
}
function* numbers(s, O) {
	if (O === void 0) for (let O of s) O != null && (O = +O) >= O && (yield O);
	else {
		let k = -1;
		for (let A of s) (A = O(A, ++k, s)) != null && (A = +A) >= A && (yield A);
	}
}
var ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right, bisectLeft = ascendingBisect.left;
bisector(number$1).center;
var bisect_default = bisectRight, e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(s, O, k) {
	let A = (O - s) / Math.max(0, k), j = Math.floor(Math.log10(A)), M = A / 10 ** j, N = M >= e10 ? 10 : M >= e5 ? 5 : M >= e2 ? 2 : 1, P, F, I;
	return j < 0 ? (I = 10 ** -j / N, P = Math.round(s * I), F = Math.round(O * I), P / I < s && ++P, F / I > O && --F, I = -I) : (I = 10 ** j * N, P = Math.round(s / I), F = Math.round(O / I), P * I < s && ++P, F * I > O && --F), F < P && .5 <= k && k < 2 ? tickSpec(s, O, k * 2) : [
		P,
		F,
		I
	];
}
function ticks(s, O, k) {
	if (O = +O, s = +s, k = +k, !(k > 0)) return [];
	if (s === O) return [s];
	let A = O < s, [j, M, N] = A ? tickSpec(O, s, k) : tickSpec(s, O, k);
	if (!(M >= j)) return [];
	let P = M - j + 1, F = Array(P);
	if (A) if (N < 0) for (let s = 0; s < P; ++s) F[s] = (M - s) / -N;
	else for (let s = 0; s < P; ++s) F[s] = (M - s) * N;
	else if (N < 0) for (let s = 0; s < P; ++s) F[s] = (j + s) / -N;
	else for (let s = 0; s < P; ++s) F[s] = (j + s) * N;
	return F;
}
function tickIncrement(s, O, k) {
	return O = +O, s = +s, k = +k, tickSpec(s, O, k)[2];
}
function tickStep(s, O, k) {
	O = +O, s = +s, k = +k;
	let A = O < s, j = A ? tickIncrement(O, s, k) : tickIncrement(s, O, k);
	return (A ? -1 : 1) * (j < 0 ? 1 / -j : j);
}
function precisionFixed_default(s) {
	return Math.max(0, -exponent_default(Math.abs(s)));
}
function precisionPrefix_default(s, O) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(O) / 3))) * 3 - exponent_default(Math.abs(s)));
}
function precisionRound_default(s, O) {
	return s = Math.abs(s), O = Math.abs(O) - s, Math.max(0, exponent_default(O) - exponent_default(s)) + 1;
}
function constants(s) {
	return function() {
		return s;
	};
}
function number(s) {
	return +s;
}
var unit = [0, 1];
function identity(s) {
	return s;
}
function normalize(s, O) {
	return (O -= s = +s) ? function(k) {
		return (k - s) / O;
	} : constants(isNaN(O) ? NaN : .5);
}
function clamper(s, O) {
	var k;
	return s > O && (k = s, s = O, O = k), function(k) {
		return Math.max(s, Math.min(O, k));
	};
}
function bimap(s, O, k) {
	var A = s[0], j = s[1], M = O[0], N = O[1];
	return j < A ? (A = normalize(j, A), M = k(N, M)) : (A = normalize(A, j), M = k(M, N)), function(s) {
		return M(A(s));
	};
}
function polymap(s, O, k) {
	var A = Math.min(s.length, O.length) - 1, j = Array(A), M = Array(A), N = -1;
	for (s[A] < s[0] && (s = s.slice().reverse(), O = O.slice().reverse()); ++N < A;) j[N] = normalize(s[N], s[N + 1]), M[N] = k(O[N], O[N + 1]);
	return function(O) {
		var k = bisect_default(s, O, 1, A) - 1;
		return M[k](j[k](O));
	};
}
function copy(s, O) {
	return O.domain(s.domain()).range(s.range()).interpolate(s.interpolate()).clamp(s.clamp()).unknown(s.unknown());
}
function transformer() {
	var A = unit, j = unit, M = value_default, N, P, F, I = identity, L, R, z;
	function B() {
		var s = Math.min(A.length, j.length);
		return I !== identity && (I = clamper(A[0], A[s - 1])), L = s > 2 ? polymap : bimap, R = z = null, V;
	}
	function V(s) {
		return s == null || isNaN(s = +s) ? F : (R ||= L(A.map(N), j, M))(N(I(s)));
	}
	return V.invert = function(O) {
		return I(P((z ||= L(j, A.map(N), number_default))(O)));
	}, V.domain = function(s) {
		return arguments.length ? (A = Array.from(s, number), B()) : A.slice();
	}, V.range = function(s) {
		return arguments.length ? (j = Array.from(s), B()) : j.slice();
	}, V.rangeRound = function(s) {
		return j = Array.from(s), M = round_default, B();
	}, V.clamp = function(s) {
		return arguments.length ? (I = s ? !0 : identity, B()) : I !== identity;
	}, V.interpolate = function(s) {
		return arguments.length ? (M = s, B()) : M;
	}, V.unknown = function(s) {
		return arguments.length ? (F = s, V) : F;
	}, function(s, O) {
		return N = s, P = O, B();
	};
}
function continuous() {
	return transformer()(identity, identity);
}
function tickFormat(s, O, k, A) {
	var P = tickStep(s, O, k), F;
	switch (A = formatSpecifier(A ?? ",f"), A.type) {
		case "s":
			var I = Math.max(Math.abs(s), Math.abs(O));
			return A.precision == null && !isNaN(F = precisionPrefix_default(P, I)) && (A.precision = F), formatPrefix(A, I);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			A.precision == null && !isNaN(F = precisionRound_default(P, Math.max(Math.abs(s), Math.abs(O)))) && (A.precision = F - (A.type === "e"));
			break;
		case "f":
		case "%":
			A.precision == null && !isNaN(F = precisionFixed_default(P)) && (A.precision = F - (A.type === "%") * 2);
			break;
	}
	return format(A);
}
function linearish(s) {
	var O = s.domain;
	return s.ticks = function(s) {
		var k = O();
		return ticks(k[0], k[k.length - 1], s ?? 10);
	}, s.tickFormat = function(s, k) {
		var A = O();
		return tickFormat(A[0], A[A.length - 1], s ?? 10, k);
	}, s.nice = function(k) {
		k ??= 10;
		var A = O(), j = 0, M = A.length - 1, N = A[j], P = A[M], F, I, L = 10;
		for (P < N && (I = N, N = P, P = I, I = j, j = M, M = I); L-- > 0;) {
			if (I = tickIncrement(N, P, k), I === F) return A[j] = N, A[M] = P, O(A);
			if (I > 0) N = Math.floor(N / I) * I, P = Math.ceil(P / I) * I;
			else if (I < 0) N = Math.ceil(N * I) / I, P = Math.floor(P * I) / I;
			else break;
			F = I;
		}
		return s;
	}, s;
}
function linear() {
	var s = continuous();
	return s.copy = function() {
		return copy(s, linear());
	}, initRange.apply(s, arguments), linearish(s);
}
export { number$1 as _, copy as a, ascending as b, number as c, precisionFixed_default as d, tickStep as f, bisect_default as g, bisectRight as h, continuous as i, precisionRound_default as l, bisectLeft as m, linearish as n, identity as o, ticks as p, tickFormat as r, transformer as s, linear as t, precisionPrefix_default as u, numbers as v, bisector as y };

//# sourceMappingURL=linear-Csp1_tTx.js.map