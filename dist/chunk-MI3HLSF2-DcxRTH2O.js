import { r as __name } from "./src-B-gAGmo8.js";
function isNothing(c) {
	return c == null;
}
__name(isNothing, "isNothing");
function isObject(c) {
	return typeof c == "object" && !!c;
}
__name(isObject, "isObject");
function toArray(c) {
	return Array.isArray(c) ? c : isNothing(c) ? [] : [c];
}
__name(toArray, "toArray");
function extend(c, I) {
	var L, R, z, B;
	if (I) for (B = Object.keys(I), L = 0, R = B.length; L < R; L += 1) z = B[L], c[z] = I[z];
	return c;
}
__name(extend, "extend");
function repeat(c, I) {
	var L = "", R;
	for (R = 0; R < I; R += 1) L += c;
	return L;
}
__name(repeat, "repeat");
function isNegativeZero(c) {
	return c === 0 && 1 / c == -Infinity;
}
__name(isNegativeZero, "isNegativeZero");
var common = {
	isNothing,
	isObject,
	toArray,
	repeat,
	isNegativeZero,
	extend
};
function formatError(c, I) {
	var L = "", R = c.reason || "(unknown reason)";
	return c.mark ? (c.mark.name && (L += "in \"" + c.mark.name + "\" "), L += "(" + (c.mark.line + 1) + ":" + (c.mark.column + 1) + ")", !I && c.mark.snippet && (L += "\n\n" + c.mark.snippet), R + " " + L) : R;
}
__name(formatError, "formatError");
function YAMLException$1(c, I) {
	Error.call(this), this.name = "YAMLException", this.reason = c, this.mark = I, this.message = formatError(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (/* @__PURE__ */ Error()).stack || "";
}
__name(YAMLException$1, "YAMLException$1"), YAMLException$1.prototype = Object.create(Error.prototype), YAMLException$1.prototype.constructor = YAMLException$1, YAMLException$1.prototype.toString = /* @__PURE__ */ __name(function(c) {
	return this.name + ": " + formatError(this, c);
}, "toString");
var exception = YAMLException$1;
function getLine(c, I, L, R, z) {
	var B = "", V = "", H = Math.floor(z / 2) - 1;
	return R - I > H && (B = " ... ", I = R - H + B.length), L - R > H && (V = " ...", L = R + H - V.length), {
		str: B + c.slice(I, L).replace(/\t/g, "→") + V,
		pos: R - I + B.length
	};
}
__name(getLine, "getLine");
function padStart(c, I) {
	return common.repeat(" ", I - c.length) + c;
}
__name(padStart, "padStart");
function makeSnippet(c, I) {
	if (I = Object.create(I || null), !c.buffer) return null;
	I.maxLength ||= 79, typeof I.indent != "number" && (I.indent = 1), typeof I.linesBefore != "number" && (I.linesBefore = 3), typeof I.linesAfter != "number" && (I.linesAfter = 2);
	for (var L = /\r?\n|\r|\0/g, R = [0], z = [], B, V = -1; B = L.exec(c.buffer);) z.push(B.index), R.push(B.index + B[0].length), c.position <= B.index && V < 0 && (V = R.length - 2);
	V < 0 && (V = R.length - 1);
	var U = "", W, G, J = Math.min(c.line + I.linesAfter, z.length).toString().length, Y = I.maxLength - (I.indent + J + 3);
	for (W = 1; W <= I.linesBefore && !(V - W < 0); W++) G = getLine(c.buffer, R[V - W], z[V - W], c.position - (R[V] - R[V - W]), Y), U = common.repeat(" ", I.indent) + padStart((c.line - W + 1).toString(), J) + " | " + G.str + "\n" + U;
	for (G = getLine(c.buffer, R[V], z[V], c.position, Y), U += common.repeat(" ", I.indent) + padStart((c.line + 1).toString(), J) + " | " + G.str + "\n", U += common.repeat("-", I.indent + J + 3 + G.pos) + "^\n", W = 1; W <= I.linesAfter && !(V + W >= z.length); W++) G = getLine(c.buffer, R[V + W], z[V + W], c.position - (R[V] - R[V + W]), Y), U += common.repeat(" ", I.indent) + padStart((c.line + W + 1).toString(), J) + " | " + G.str + "\n";
	return U.replace(/\n$/, "");
}
__name(makeSnippet, "makeSnippet");
var snippet = makeSnippet, TYPE_CONSTRUCTOR_OPTIONS = [
	"kind",
	"multi",
	"resolve",
	"construct",
	"instanceOf",
	"predicate",
	"represent",
	"representName",
	"defaultStyle",
	"styleAliases"
], YAML_NODE_KINDS = [
	"scalar",
	"sequence",
	"mapping"
];
function compileStyleAliases(c) {
	var I = {};
	return c !== null && Object.keys(c).forEach(function(L) {
		c[L].forEach(function(c) {
			I[String(c)] = L;
		});
	}), I;
}
__name(compileStyleAliases, "compileStyleAliases");
function Type$1(c, I) {
	if (I ||= {}, Object.keys(I).forEach(function(I) {
		if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(I) === -1) throw new exception("Unknown option \"" + I + "\" is met in definition of \"" + c + "\" YAML type.");
	}), this.options = I, this.tag = c, this.kind = I.kind || null, this.resolve = I.resolve || function() {
		return !0;
	}, this.construct = I.construct || function(c) {
		return c;
	}, this.instanceOf = I.instanceOf || null, this.predicate = I.predicate || null, this.represent = I.represent || null, this.representName = I.representName || null, this.defaultStyle = I.defaultStyle || null, this.multi = I.multi || !1, this.styleAliases = compileStyleAliases(I.styleAliases || null), YAML_NODE_KINDS.indexOf(this.kind) === -1) throw new exception("Unknown kind \"" + this.kind + "\" is specified for \"" + c + "\" YAML type.");
}
__name(Type$1, "Type$1");
var type = Type$1;
function compileList(c, I) {
	var L = [];
	return c[I].forEach(function(c) {
		var I = L.length;
		L.forEach(function(L, R) {
			L.tag === c.tag && L.kind === c.kind && L.multi === c.multi && (I = R);
		}), L[I] = c;
	}), L;
}
__name(compileList, "compileList");
function compileMap() {
	var I = {
		scalar: {},
		sequence: {},
		mapping: {},
		fallback: {},
		multi: {
			scalar: [],
			sequence: [],
			mapping: [],
			fallback: []
		}
	}, L, R;
	function z(c) {
		c.multi ? (I.multi[c.kind].push(c), I.multi.fallback.push(c)) : I[c.kind][c.tag] = I.fallback[c.tag] = c;
	}
	for (__name(z, "collectType"), L = 0, R = arguments.length; L < R; L += 1) arguments[L].forEach(z);
	return I;
}
__name(compileMap, "compileMap");
function Schema$1(c) {
	return this.extend(c);
}
__name(Schema$1, "Schema$1"), Schema$1.prototype.extend = /* @__PURE__ */ __name(function(c) {
	var I = [], L = [];
	if (c instanceof type) L.push(c);
	else if (Array.isArray(c)) L = L.concat(c);
	else if (c && (Array.isArray(c.implicit) || Array.isArray(c.explicit))) c.implicit && (I = I.concat(c.implicit)), c.explicit && (L = L.concat(c.explicit));
	else throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
	I.forEach(function(c) {
		if (!(c instanceof type)) throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
		if (c.loadKind && c.loadKind !== "scalar") throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
		if (c.multi) throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
	}), L.forEach(function(c) {
		if (!(c instanceof type)) throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
	});
	var R = Object.create(Schema$1.prototype);
	return R.implicit = (this.implicit || []).concat(I), R.explicit = (this.explicit || []).concat(L), R.compiledImplicit = compileList(R, "implicit"), R.compiledExplicit = compileList(R, "explicit"), R.compiledTypeMap = compileMap(R.compiledImplicit, R.compiledExplicit), R;
}, "extend");
var failsafe = new Schema$1({ explicit: [
	new type("tag:yaml.org,2002:str", {
		kind: "scalar",
		construct: /* @__PURE__ */ __name(function(c) {
			return c === null ? "" : c;
		}, "construct")
	}),
	new type("tag:yaml.org,2002:seq", {
		kind: "sequence",
		construct: /* @__PURE__ */ __name(function(c) {
			return c === null ? [] : c;
		}, "construct")
	}),
	new type("tag:yaml.org,2002:map", {
		kind: "mapping",
		construct: /* @__PURE__ */ __name(function(c) {
			return c === null ? {} : c;
		}, "construct")
	})
] });
function resolveYamlNull(c) {
	if (c === null) return !0;
	var I = c.length;
	return I === 1 && c === "~" || I === 4 && (c === "null" || c === "Null" || c === "NULL");
}
__name(resolveYamlNull, "resolveYamlNull");
function constructYamlNull() {
	return null;
}
__name(constructYamlNull, "constructYamlNull");
function isNull(c) {
	return c === null;
}
__name(isNull, "isNull");
var _null = new type("tag:yaml.org,2002:null", {
	kind: "scalar",
	resolve: resolveYamlNull,
	construct: constructYamlNull,
	predicate: isNull,
	represent: {
		canonical: /* @__PURE__ */ __name(function() {
			return "~";
		}, "canonical"),
		lowercase: /* @__PURE__ */ __name(function() {
			return "null";
		}, "lowercase"),
		uppercase: /* @__PURE__ */ __name(function() {
			return "NULL";
		}, "uppercase"),
		camelcase: /* @__PURE__ */ __name(function() {
			return "Null";
		}, "camelcase"),
		empty: /* @__PURE__ */ __name(function() {
			return "";
		}, "empty")
	},
	defaultStyle: "lowercase"
});
function resolveYamlBoolean(c) {
	if (c === null) return !1;
	var I = c.length;
	return I === 4 && (c === "true" || c === "True" || c === "TRUE") || I === 5 && (c === "false" || c === "False" || c === "FALSE");
}
__name(resolveYamlBoolean, "resolveYamlBoolean");
function constructYamlBoolean(c) {
	return c === "true" || c === "True" || c === "TRUE";
}
__name(constructYamlBoolean, "constructYamlBoolean");
function isBoolean(c) {
	return Object.prototype.toString.call(c) === "[object Boolean]";
}
__name(isBoolean, "isBoolean");
var bool = new type("tag:yaml.org,2002:bool", {
	kind: "scalar",
	resolve: resolveYamlBoolean,
	construct: constructYamlBoolean,
	predicate: isBoolean,
	represent: {
		lowercase: /* @__PURE__ */ __name(function(c) {
			return c ? "true" : "false";
		}, "lowercase"),
		uppercase: /* @__PURE__ */ __name(function(c) {
			return c ? "TRUE" : "FALSE";
		}, "uppercase"),
		camelcase: /* @__PURE__ */ __name(function(c) {
			return c ? "True" : "False";
		}, "camelcase")
	},
	defaultStyle: "lowercase"
});
function isHexCode(c) {
	return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
__name(isHexCode, "isHexCode");
function isOctCode(c) {
	return 48 <= c && c <= 55;
}
__name(isOctCode, "isOctCode");
function isDecCode(c) {
	return 48 <= c && c <= 57;
}
__name(isDecCode, "isDecCode");
function resolveYamlInteger(c) {
	if (c === null) return !1;
	var I = c.length, L = 0, R = !1, z;
	if (!I) return !1;
	if (z = c[L], (z === "-" || z === "+") && (z = c[++L]), z === "0") {
		if (L + 1 === I) return !0;
		if (z = c[++L], z === "b") {
			for (L++; L < I; L++) if (z = c[L], z !== "_") {
				if (z !== "0" && z !== "1") return !1;
				R = !0;
			}
			return R && z !== "_";
		}
		if (z === "x") {
			for (L++; L < I; L++) if (z = c[L], z !== "_") {
				if (!isHexCode(c.charCodeAt(L))) return !1;
				R = !0;
			}
			return R && z !== "_";
		}
		if (z === "o") {
			for (L++; L < I; L++) if (z = c[L], z !== "_") {
				if (!isOctCode(c.charCodeAt(L))) return !1;
				R = !0;
			}
			return R && z !== "_";
		}
	}
	if (z === "_") return !1;
	for (; L < I; L++) if (z = c[L], z !== "_") {
		if (!isDecCode(c.charCodeAt(L))) return !1;
		R = !0;
	}
	return !(!R || z === "_");
}
__name(resolveYamlInteger, "resolveYamlInteger");
function constructYamlInteger(c) {
	var I = c, L = 1, R;
	if (I.indexOf("_") !== -1 && (I = I.replace(/_/g, "")), R = I[0], (R === "-" || R === "+") && (R === "-" && (L = -1), I = I.slice(1), R = I[0]), I === "0") return 0;
	if (R === "0") {
		if (I[1] === "b") return L * parseInt(I.slice(2), 2);
		if (I[1] === "x") return L * parseInt(I.slice(2), 16);
		if (I[1] === "o") return L * parseInt(I.slice(2), 8);
	}
	return L * parseInt(I, 10);
}
__name(constructYamlInteger, "constructYamlInteger");
function isInteger(c) {
	return Object.prototype.toString.call(c) === "[object Number]" && c % 1 == 0 && !common.isNegativeZero(c);
}
__name(isInteger, "isInteger");
var int = new type("tag:yaml.org,2002:int", {
	kind: "scalar",
	resolve: resolveYamlInteger,
	construct: constructYamlInteger,
	predicate: isInteger,
	represent: {
		binary: /* @__PURE__ */ __name(function(c) {
			return c >= 0 ? "0b" + c.toString(2) : "-0b" + c.toString(2).slice(1);
		}, "binary"),
		octal: /* @__PURE__ */ __name(function(c) {
			return c >= 0 ? "0o" + c.toString(8) : "-0o" + c.toString(8).slice(1);
		}, "octal"),
		decimal: /* @__PURE__ */ __name(function(c) {
			return c.toString(10);
		}, "decimal"),
		hexadecimal: /* @__PURE__ */ __name(function(c) {
			return c >= 0 ? "0x" + c.toString(16).toUpperCase() : "-0x" + c.toString(16).toUpperCase().slice(1);
		}, "hexadecimal")
	},
	defaultStyle: "decimal",
	styleAliases: {
		binary: [2, "bin"],
		octal: [8, "oct"],
		decimal: [10, "dec"],
		hexadecimal: [16, "hex"]
	}
}), YAML_FLOAT_PATTERN = /* @__PURE__ */ RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(c) {
	return !(c === null || !YAML_FLOAT_PATTERN.test(c) || c[c.length - 1] === "_");
}
__name(resolveYamlFloat, "resolveYamlFloat");
function constructYamlFloat(c) {
	var I = c.replace(/_/g, "").toLowerCase(), L = I[0] === "-" ? -1 : 1;
	return "+-".indexOf(I[0]) >= 0 && (I = I.slice(1)), I === ".inf" ? L === 1 ? Infinity : -Infinity : I === ".nan" ? NaN : L * parseFloat(I, 10);
}
__name(constructYamlFloat, "constructYamlFloat");
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(c, I) {
	var L;
	if (isNaN(c)) switch (I) {
		case "lowercase": return ".nan";
		case "uppercase": return ".NAN";
		case "camelcase": return ".NaN";
	}
	else if (c === Infinity) switch (I) {
		case "lowercase": return ".inf";
		case "uppercase": return ".INF";
		case "camelcase": return ".Inf";
	}
	else if (c === -Infinity) switch (I) {
		case "lowercase": return "-.inf";
		case "uppercase": return "-.INF";
		case "camelcase": return "-.Inf";
	}
	else if (common.isNegativeZero(c)) return "-0.0";
	return L = c.toString(10), SCIENTIFIC_WITHOUT_DOT.test(L) ? L.replace("e", ".e") : L;
}
__name(representYamlFloat, "representYamlFloat");
function isFloat(c) {
	return Object.prototype.toString.call(c) === "[object Number]" && (c % 1 != 0 || common.isNegativeZero(c));
}
__name(isFloat, "isFloat");
var float = new type("tag:yaml.org,2002:float", {
	kind: "scalar",
	resolve: resolveYamlFloat,
	construct: constructYamlFloat,
	predicate: isFloat,
	represent: representYamlFloat,
	defaultStyle: "lowercase"
}), json = failsafe.extend({ implicit: [
	_null,
	bool,
	int,
	float
] }), core = json, YAML_DATE_REGEXP = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), YAML_TIMESTAMP_REGEXP = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(c) {
	return c === null ? !1 : YAML_DATE_REGEXP.exec(c) !== null || YAML_TIMESTAMP_REGEXP.exec(c) !== null;
}
__name(resolveYamlTimestamp, "resolveYamlTimestamp");
function constructYamlTimestamp(c) {
	var I, L, R, z, B, V, H, U = 0, W = null, G, K, q;
	if (I = YAML_DATE_REGEXP.exec(c), I === null && (I = YAML_TIMESTAMP_REGEXP.exec(c)), I === null) throw Error("Date resolve error");
	if (L = +I[1], R = I[2] - 1, z = +I[3], !I[4]) return new Date(Date.UTC(L, R, z));
	if (B = +I[4], V = +I[5], H = +I[6], I[7]) {
		for (U = I[7].slice(0, 3); U.length < 3;) U += "0";
		U = +U;
	}
	return I[9] && (G = +I[10], K = +(I[11] || 0), W = (G * 60 + K) * 6e4, I[9] === "-" && (W = -W)), q = new Date(Date.UTC(L, R, z, B, V, H, U)), W && q.setTime(q.getTime() - W), q;
}
__name(constructYamlTimestamp, "constructYamlTimestamp");
function representYamlTimestamp(c) {
	return c.toISOString();
}
__name(representYamlTimestamp, "representYamlTimestamp");
var timestamp = new type("tag:yaml.org,2002:timestamp", {
	kind: "scalar",
	resolve: resolveYamlTimestamp,
	construct: constructYamlTimestamp,
	instanceOf: Date,
	represent: representYamlTimestamp
});
function resolveYamlMerge(c) {
	return c === "<<" || c === null;
}
__name(resolveYamlMerge, "resolveYamlMerge");
var merge = new type("tag:yaml.org,2002:merge", {
	kind: "scalar",
	resolve: resolveYamlMerge
}), BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(c) {
	if (c === null) return !1;
	var I, L, R = 0, z = c.length, B = BASE64_MAP;
	for (L = 0; L < z; L++) if (I = B.indexOf(c.charAt(L)), !(I > 64)) {
		if (I < 0) return !1;
		R += 6;
	}
	return R % 8 == 0;
}
__name(resolveYamlBinary, "resolveYamlBinary");
function constructYamlBinary(c) {
	var I, L, R = c.replace(/[\r\n=]/g, ""), z = R.length, B = BASE64_MAP, V = 0, H = [];
	for (I = 0; I < z; I++) I % 4 == 0 && I && (H.push(V >> 16 & 255), H.push(V >> 8 & 255), H.push(V & 255)), V = V << 6 | B.indexOf(R.charAt(I));
	return L = z % 4 * 6, L === 0 ? (H.push(V >> 16 & 255), H.push(V >> 8 & 255), H.push(V & 255)) : L === 18 ? (H.push(V >> 10 & 255), H.push(V >> 2 & 255)) : L === 12 && H.push(V >> 4 & 255), new Uint8Array(H);
}
__name(constructYamlBinary, "constructYamlBinary");
function representYamlBinary(c) {
	var I = "", L = 0, R, z, B = c.length, V = BASE64_MAP;
	for (R = 0; R < B; R++) R % 3 == 0 && R && (I += V[L >> 18 & 63], I += V[L >> 12 & 63], I += V[L >> 6 & 63], I += V[L & 63]), L = (L << 8) + c[R];
	return z = B % 3, z === 0 ? (I += V[L >> 18 & 63], I += V[L >> 12 & 63], I += V[L >> 6 & 63], I += V[L & 63]) : z === 2 ? (I += V[L >> 10 & 63], I += V[L >> 4 & 63], I += V[L << 2 & 63], I += V[64]) : z === 1 && (I += V[L >> 2 & 63], I += V[L << 4 & 63], I += V[64], I += V[64]), I;
}
__name(representYamlBinary, "representYamlBinary");
function isBinary(c) {
	return Object.prototype.toString.call(c) === "[object Uint8Array]";
}
__name(isBinary, "isBinary");
var binary = new type("tag:yaml.org,2002:binary", {
	kind: "scalar",
	resolve: resolveYamlBinary,
	construct: constructYamlBinary,
	predicate: isBinary,
	represent: representYamlBinary
}), _hasOwnProperty$3 = Object.prototype.hasOwnProperty, _toString$2 = Object.prototype.toString;
function resolveYamlOmap(c) {
	if (c === null) return !0;
	var I = [], L, R, z, B, V, H = c;
	for (L = 0, R = H.length; L < R; L += 1) {
		if (z = H[L], V = !1, _toString$2.call(z) !== "[object Object]") return !1;
		for (B in z) if (_hasOwnProperty$3.call(z, B)) if (!V) V = !0;
		else return !1;
		if (!V) return !1;
		if (I.indexOf(B) === -1) I.push(B);
		else return !1;
	}
	return !0;
}
__name(resolveYamlOmap, "resolveYamlOmap");
function constructYamlOmap(c) {
	return c === null ? [] : c;
}
__name(constructYamlOmap, "constructYamlOmap");
var omap = new type("tag:yaml.org,2002:omap", {
	kind: "sequence",
	resolve: resolveYamlOmap,
	construct: constructYamlOmap
}), _toString$1 = Object.prototype.toString;
function resolveYamlPairs(c) {
	if (c === null) return !0;
	var I, L, R, z, B, V = c;
	for (B = Array(V.length), I = 0, L = V.length; I < L; I += 1) {
		if (R = V[I], _toString$1.call(R) !== "[object Object]" || (z = Object.keys(R), z.length !== 1)) return !1;
		B[I] = [z[0], R[z[0]]];
	}
	return !0;
}
__name(resolveYamlPairs, "resolveYamlPairs");
function constructYamlPairs(c) {
	if (c === null) return [];
	var I, L, R, z, B, V = c;
	for (B = Array(V.length), I = 0, L = V.length; I < L; I += 1) R = V[I], z = Object.keys(R), B[I] = [z[0], R[z[0]]];
	return B;
}
__name(constructYamlPairs, "constructYamlPairs");
var pairs = new type("tag:yaml.org,2002:pairs", {
	kind: "sequence",
	resolve: resolveYamlPairs,
	construct: constructYamlPairs
}), _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(c) {
	if (c === null) return !0;
	var I, L = c;
	for (I in L) if (_hasOwnProperty$2.call(L, I) && L[I] !== null) return !1;
	return !0;
}
__name(resolveYamlSet, "resolveYamlSet");
function constructYamlSet(c) {
	return c === null ? {} : c;
}
__name(constructYamlSet, "constructYamlSet");
var set = new type("tag:yaml.org,2002:set", {
	kind: "mapping",
	resolve: resolveYamlSet,
	construct: constructYamlSet
}), _default = core.extend({
	implicit: [timestamp, merge],
	explicit: [
		binary,
		omap,
		pairs,
		set
	]
}), _hasOwnProperty$1 = Object.prototype.hasOwnProperty, CONTEXT_FLOW_IN = 1, CONTEXT_FLOW_OUT = 2, CONTEXT_BLOCK_IN = 3, CONTEXT_BLOCK_OUT = 4, CHOMPING_CLIP = 1, CHOMPING_STRIP = 2, CHOMPING_KEEP = 3, PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/, PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/, PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i, PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(c) {
	return Object.prototype.toString.call(c);
}
__name(_class, "_class");
function is_EOL(c) {
	return c === 10 || c === 13;
}
__name(is_EOL, "is_EOL");
function is_WHITE_SPACE(c) {
	return c === 9 || c === 32;
}
__name(is_WHITE_SPACE, "is_WHITE_SPACE");
function is_WS_OR_EOL(c) {
	return c === 9 || c === 32 || c === 10 || c === 13;
}
__name(is_WS_OR_EOL, "is_WS_OR_EOL");
function is_FLOW_INDICATOR(c) {
	return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
__name(is_FLOW_INDICATOR, "is_FLOW_INDICATOR");
function fromHexCode(c) {
	var I;
	return 48 <= c && c <= 57 ? c - 48 : (I = c | 32, 97 <= I && I <= 102 ? I - 97 + 10 : -1);
}
__name(fromHexCode, "fromHexCode");
function escapedHexLen(c) {
	return c === 120 ? 2 : c === 117 ? 4 : c === 85 ? 8 : 0;
}
__name(escapedHexLen, "escapedHexLen");
function fromDecimalCode(c) {
	return 48 <= c && c <= 57 ? c - 48 : -1;
}
__name(fromDecimalCode, "fromDecimalCode");
function simpleEscapeSequence(c) {
	return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 || c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? "\"" : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
__name(simpleEscapeSequence, "simpleEscapeSequence");
function charFromCodepoint(c) {
	return c <= 65535 ? String.fromCharCode(c) : String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
}
__name(charFromCodepoint, "charFromCodepoint");
var simpleEscapeCheck = Array(256), simpleEscapeMap = Array(256);
for (i = 0; i < 256; i++) simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0, simpleEscapeMap[i] = simpleEscapeSequence(i);
var i;
function State$1(c, I) {
	this.input = c, this.filename = I.filename || null, this.schema = I.schema || _default, this.onWarning = I.onWarning || null, this.legacy = I.legacy || !1, this.json = I.json || !1, this.listener = I.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = c.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
__name(State$1, "State$1");
function generateError(c, I) {
	var L = {
		name: c.filename,
		buffer: c.input.slice(0, -1),
		position: c.position,
		line: c.line,
		column: c.position - c.lineStart
	};
	return L.snippet = snippet(L), new exception(I, L);
}
__name(generateError, "generateError");
function throwError(c, I) {
	throw generateError(c, I);
}
__name(throwError, "throwError");
function throwWarning(c, I) {
	c.onWarning && c.onWarning.call(null, generateError(c, I));
}
__name(throwWarning, "throwWarning");
var directiveHandlers = {
	YAML: /* @__PURE__ */ __name(function(c, I, L) {
		var R, z, B;
		c.version !== null && throwError(c, "duplication of %YAML directive"), L.length !== 1 && throwError(c, "YAML directive accepts exactly one argument"), R = /^([0-9]+)\.([0-9]+)$/.exec(L[0]), R === null && throwError(c, "ill-formed argument of the YAML directive"), z = parseInt(R[1], 10), B = parseInt(R[2], 10), z !== 1 && throwError(c, "unacceptable YAML version of the document"), c.version = L[0], c.checkLineBreaks = B < 2, B !== 1 && B !== 2 && throwWarning(c, "unsupported YAML version of the document");
	}, "handleYamlDirective"),
	TAG: /* @__PURE__ */ __name(function(c, I, L) {
		var R, z;
		L.length !== 2 && throwError(c, "TAG directive accepts exactly two arguments"), R = L[0], z = L[1], PATTERN_TAG_HANDLE.test(R) || throwError(c, "ill-formed tag handle (first argument) of the TAG directive"), _hasOwnProperty$1.call(c.tagMap, R) && throwError(c, "there is a previously declared suffix for \"" + R + "\" tag handle"), PATTERN_TAG_URI.test(z) || throwError(c, "ill-formed tag prefix (second argument) of the TAG directive");
		try {
			z = decodeURIComponent(z);
		} catch {
			throwError(c, "tag prefix is malformed: " + z);
		}
		c.tagMap[R] = z;
	}, "handleTagDirective")
};
function captureSegment(c, I, L, R) {
	var z, B, V, H;
	if (I < L) {
		if (H = c.input.slice(I, L), R) for (z = 0, B = H.length; z < B; z += 1) V = H.charCodeAt(z), V === 9 || 32 <= V && V <= 1114111 || throwError(c, "expected valid JSON character");
		else PATTERN_NON_PRINTABLE.test(H) && throwError(c, "the stream contains non-printable characters");
		c.result += H;
	}
}
__name(captureSegment, "captureSegment");
function mergeMappings(c, I, L, R) {
	var z, B, V, U;
	for (common.isObject(L) || throwError(c, "cannot merge mappings; the provided source object is unacceptable"), z = Object.keys(L), V = 0, U = z.length; V < U; V += 1) B = z[V], _hasOwnProperty$1.call(I, B) || (I[B] = L[B], R[B] = !0);
}
__name(mergeMappings, "mergeMappings");
function storeMappingPair(c, I, L, R, z, B, V, H, U) {
	var W, G;
	if (Array.isArray(z)) for (z = Array.prototype.slice.call(z), W = 0, G = z.length; W < G; W += 1) Array.isArray(z[W]) && throwError(c, "nested arrays are not supported inside keys"), typeof z == "object" && _class(z[W]) === "[object Object]" && (z[W] = "[object Object]");
	if (typeof z == "object" && _class(z) === "[object Object]" && (z = "[object Object]"), z = String(z), I === null && (I = {}), R === "tag:yaml.org,2002:merge") if (Array.isArray(B)) for (W = 0, G = B.length; W < G; W += 1) mergeMappings(c, I, B[W], L);
	else mergeMappings(c, I, B, L);
	else !c.json && !_hasOwnProperty$1.call(L, z) && _hasOwnProperty$1.call(I, z) && (c.line = V || c.line, c.lineStart = H || c.lineStart, c.position = U || c.position, throwError(c, "duplicated mapping key")), z === "__proto__" ? Object.defineProperty(I, z, {
		configurable: !0,
		enumerable: !0,
		writable: !0,
		value: B
	}) : I[z] = B, delete L[z];
	return I;
}
__name(storeMappingPair, "storeMappingPair");
function readLineBreak(c) {
	var I = c.input.charCodeAt(c.position);
	I === 10 ? c.position++ : I === 13 ? (c.position++, c.input.charCodeAt(c.position) === 10 && c.position++) : throwError(c, "a line break is expected"), c.line += 1, c.lineStart = c.position, c.firstTabInLine = -1;
}
__name(readLineBreak, "readLineBreak");
function skipSeparationSpace(c, I, L) {
	for (var R = 0, z = c.input.charCodeAt(c.position); z !== 0;) {
		for (; is_WHITE_SPACE(z);) z === 9 && c.firstTabInLine === -1 && (c.firstTabInLine = c.position), z = c.input.charCodeAt(++c.position);
		if (I && z === 35) do
			z = c.input.charCodeAt(++c.position);
		while (z !== 10 && z !== 13 && z !== 0);
		if (is_EOL(z)) for (readLineBreak(c), z = c.input.charCodeAt(c.position), R++, c.lineIndent = 0; z === 32;) c.lineIndent++, z = c.input.charCodeAt(++c.position);
		else break;
	}
	return L !== -1 && R !== 0 && c.lineIndent < L && throwWarning(c, "deficient indentation"), R;
}
__name(skipSeparationSpace, "skipSeparationSpace");
function testDocumentSeparator(c) {
	var I = c.position, L = c.input.charCodeAt(I);
	return !!((L === 45 || L === 46) && L === c.input.charCodeAt(I + 1) && L === c.input.charCodeAt(I + 2) && (I += 3, L = c.input.charCodeAt(I), L === 0 || is_WS_OR_EOL(L)));
}
__name(testDocumentSeparator, "testDocumentSeparator");
function writeFoldedLines(c, I) {
	I === 1 ? c.result += " " : I > 1 && (c.result += common.repeat("\n", I - 1));
}
__name(writeFoldedLines, "writeFoldedLines");
function readPlainScalar(c, I, L) {
	var R, z, B, V, H, U, W, G, K = c.kind, q = c.result, J = c.input.charCodeAt(c.position);
	if (is_WS_OR_EOL(J) || is_FLOW_INDICATOR(J) || J === 35 || J === 38 || J === 42 || J === 33 || J === 124 || J === 62 || J === 39 || J === 34 || J === 37 || J === 64 || J === 96 || (J === 63 || J === 45) && (z = c.input.charCodeAt(c.position + 1), is_WS_OR_EOL(z) || L && is_FLOW_INDICATOR(z))) return !1;
	for (c.kind = "scalar", c.result = "", B = V = c.position, H = !1; J !== 0;) {
		if (J === 58) {
			if (z = c.input.charCodeAt(c.position + 1), is_WS_OR_EOL(z) || L && is_FLOW_INDICATOR(z)) break;
		} else if (J === 35) {
			if (R = c.input.charCodeAt(c.position - 1), is_WS_OR_EOL(R)) break;
		} else if (c.position === c.lineStart && testDocumentSeparator(c) || L && is_FLOW_INDICATOR(J)) break;
		else if (is_EOL(J)) if (U = c.line, W = c.lineStart, G = c.lineIndent, skipSeparationSpace(c, !1, -1), c.lineIndent >= I) {
			H = !0, J = c.input.charCodeAt(c.position);
			continue;
		} else {
			c.position = V, c.line = U, c.lineStart = W, c.lineIndent = G;
			break;
		}
		H &&= (captureSegment(c, B, V, !1), writeFoldedLines(c, c.line - U), B = V = c.position, !1), is_WHITE_SPACE(J) || (V = c.position + 1), J = c.input.charCodeAt(++c.position);
	}
	return captureSegment(c, B, V, !1), c.result ? !0 : (c.kind = K, c.result = q, !1);
}
__name(readPlainScalar, "readPlainScalar");
function readSingleQuotedScalar(c, I) {
	var L = c.input.charCodeAt(c.position), R, z;
	if (L !== 39) return !1;
	for (c.kind = "scalar", c.result = "", c.position++, R = z = c.position; (L = c.input.charCodeAt(c.position)) !== 0;) if (L === 39) if (captureSegment(c, R, c.position, !0), L = c.input.charCodeAt(++c.position), L === 39) R = c.position, c.position++, z = c.position;
	else return !0;
	else is_EOL(L) ? (captureSegment(c, R, z, !0), writeFoldedLines(c, skipSeparationSpace(c, !1, I)), R = z = c.position) : c.position === c.lineStart && testDocumentSeparator(c) ? throwError(c, "unexpected end of the document within a single quoted scalar") : (c.position++, z = c.position);
	throwError(c, "unexpected end of the stream within a single quoted scalar");
}
__name(readSingleQuotedScalar, "readSingleQuotedScalar");
function readDoubleQuotedScalar(c, I) {
	var L, R, z, B, V, H = c.input.charCodeAt(c.position);
	if (H !== 34) return !1;
	for (c.kind = "scalar", c.result = "", c.position++, L = R = c.position; (H = c.input.charCodeAt(c.position)) !== 0;) if (H === 34) return captureSegment(c, L, c.position, !0), c.position++, !0;
	else if (H === 92) {
		if (captureSegment(c, L, c.position, !0), H = c.input.charCodeAt(++c.position), is_EOL(H)) skipSeparationSpace(c, !1, I);
		else if (H < 256 && simpleEscapeCheck[H]) c.result += simpleEscapeMap[H], c.position++;
		else if ((V = escapedHexLen(H)) > 0) {
			for (z = V, B = 0; z > 0; z--) H = c.input.charCodeAt(++c.position), (V = fromHexCode(H)) >= 0 ? B = (B << 4) + V : throwError(c, "expected hexadecimal character");
			c.result += charFromCodepoint(B), c.position++;
		} else throwError(c, "unknown escape sequence");
		L = R = c.position;
	} else is_EOL(H) ? (captureSegment(c, L, R, !0), writeFoldedLines(c, skipSeparationSpace(c, !1, I)), L = R = c.position) : c.position === c.lineStart && testDocumentSeparator(c) ? throwError(c, "unexpected end of the document within a double quoted scalar") : (c.position++, R = c.position);
	throwError(c, "unexpected end of the stream within a double quoted scalar");
}
__name(readDoubleQuotedScalar, "readDoubleQuotedScalar");
function readFlowCollection(c, I) {
	var L = !0, R, z, B, V = c.tag, H, U = c.anchor, W, G, K, q, J, Y = /* @__PURE__ */ Object.create(null), X, Z, Q, $ = c.input.charCodeAt(c.position);
	if ($ === 91) G = 93, J = !1, H = [];
	else if ($ === 123) G = 125, J = !0, H = {};
	else return !1;
	for (c.anchor !== null && (c.anchorMap[c.anchor] = H), $ = c.input.charCodeAt(++c.position); $ !== 0;) {
		if (skipSeparationSpace(c, !0, I), $ = c.input.charCodeAt(c.position), $ === G) return c.position++, c.tag = V, c.anchor = U, c.kind = J ? "mapping" : "sequence", c.result = H, !0;
		L ? $ === 44 && throwError(c, "expected the node content, but found ','") : throwError(c, "missed comma between flow collection entries"), Z = X = Q = null, K = q = !1, $ === 63 && (W = c.input.charCodeAt(c.position + 1), is_WS_OR_EOL(W) && (K = q = !0, c.position++, skipSeparationSpace(c, !0, I))), R = c.line, z = c.lineStart, B = c.position, composeNode(c, I, CONTEXT_FLOW_IN, !1, !0), Z = c.tag, X = c.result, skipSeparationSpace(c, !0, I), $ = c.input.charCodeAt(c.position), (q || c.line === R) && $ === 58 && (K = !0, $ = c.input.charCodeAt(++c.position), skipSeparationSpace(c, !0, I), composeNode(c, I, CONTEXT_FLOW_IN, !1, !0), Q = c.result), J ? storeMappingPair(c, H, Y, Z, X, Q, R, z, B) : K ? H.push(storeMappingPair(c, null, Y, Z, X, Q, R, z, B)) : H.push(X), skipSeparationSpace(c, !0, I), $ = c.input.charCodeAt(c.position), $ === 44 ? (L = !0, $ = c.input.charCodeAt(++c.position)) : L = !1;
	}
	throwError(c, "unexpected end of the stream within a flow collection");
}
__name(readFlowCollection, "readFlowCollection");
function readBlockScalar(c, I) {
	var L, R, z = CHOMPING_CLIP, B = !1, V = !1, U = I, W = 0, G = !1, K, q = c.input.charCodeAt(c.position);
	if (q === 124) R = !1;
	else if (q === 62) R = !0;
	else return !1;
	for (c.kind = "scalar", c.result = ""; q !== 0;) if (q = c.input.charCodeAt(++c.position), q === 43 || q === 45) CHOMPING_CLIP === z ? z = q === 43 ? CHOMPING_KEEP : CHOMPING_STRIP : throwError(c, "repeat of a chomping mode identifier");
	else if ((K = fromDecimalCode(q)) >= 0) K === 0 ? throwError(c, "bad explicit indentation width of a block scalar; it cannot be less than one") : V ? throwError(c, "repeat of an indentation width identifier") : (U = I + K - 1, V = !0);
	else break;
	if (is_WHITE_SPACE(q)) {
		do
			q = c.input.charCodeAt(++c.position);
		while (is_WHITE_SPACE(q));
		if (q === 35) do
			q = c.input.charCodeAt(++c.position);
		while (!is_EOL(q) && q !== 0);
	}
	for (; q !== 0;) {
		for (readLineBreak(c), c.lineIndent = 0, q = c.input.charCodeAt(c.position); (!V || c.lineIndent < U) && q === 32;) c.lineIndent++, q = c.input.charCodeAt(++c.position);
		if (!V && c.lineIndent > U && (U = c.lineIndent), is_EOL(q)) {
			W++;
			continue;
		}
		if (c.lineIndent < U) {
			z === CHOMPING_KEEP ? c.result += common.repeat("\n", B ? 1 + W : W) : z === CHOMPING_CLIP && B && (c.result += "\n");
			break;
		}
		for (R ? is_WHITE_SPACE(q) ? (G = !0, c.result += common.repeat("\n", B ? 1 + W : W)) : G ? (G = !1, c.result += common.repeat("\n", W + 1)) : W === 0 ? B && (c.result += " ") : c.result += common.repeat("\n", W) : c.result += common.repeat("\n", B ? 1 + W : W), B = !0, V = !0, W = 0, L = c.position; !is_EOL(q) && q !== 0;) q = c.input.charCodeAt(++c.position);
		captureSegment(c, L, c.position, !1);
	}
	return !0;
}
__name(readBlockScalar, "readBlockScalar");
function readBlockSequence(c, I) {
	var L, R = c.tag, z = c.anchor, B = [], V, H = !1, U;
	if (c.firstTabInLine !== -1) return !1;
	for (c.anchor !== null && (c.anchorMap[c.anchor] = B), U = c.input.charCodeAt(c.position); U !== 0 && (c.firstTabInLine !== -1 && (c.position = c.firstTabInLine, throwError(c, "tab characters must not be used in indentation")), !(U !== 45 || (V = c.input.charCodeAt(c.position + 1), !is_WS_OR_EOL(V))));) {
		if (H = !0, c.position++, skipSeparationSpace(c, !0, -1) && c.lineIndent <= I) {
			B.push(null), U = c.input.charCodeAt(c.position);
			continue;
		}
		if (L = c.line, composeNode(c, I, CONTEXT_BLOCK_IN, !1, !0), B.push(c.result), skipSeparationSpace(c, !0, -1), U = c.input.charCodeAt(c.position), (c.line === L || c.lineIndent > I) && U !== 0) throwError(c, "bad indentation of a sequence entry");
		else if (c.lineIndent < I) break;
	}
	return H ? (c.tag = R, c.anchor = z, c.kind = "sequence", c.result = B, !0) : !1;
}
__name(readBlockSequence, "readBlockSequence");
function readBlockMapping(c, I, L) {
	var R, z, B, V, H, U, W = c.tag, G = c.anchor, K = {}, q = /* @__PURE__ */ Object.create(null), J = null, Y = null, X = null, Z = !1, Q = !1, $;
	if (c.firstTabInLine !== -1) return !1;
	for (c.anchor !== null && (c.anchorMap[c.anchor] = K), $ = c.input.charCodeAt(c.position); $ !== 0;) {
		if (!Z && c.firstTabInLine !== -1 && (c.position = c.firstTabInLine, throwError(c, "tab characters must not be used in indentation")), R = c.input.charCodeAt(c.position + 1), B = c.line, ($ === 63 || $ === 58) && is_WS_OR_EOL(R)) $ === 63 ? (Z && (storeMappingPair(c, K, q, J, Y, null, V, H, U), J = Y = X = null), Q = !0, Z = !0, z = !0) : Z ? (Z = !1, z = !0) : throwError(c, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), c.position += 1, $ = R;
		else {
			if (V = c.line, H = c.lineStart, U = c.position, !composeNode(c, L, CONTEXT_FLOW_OUT, !1, !0)) break;
			if (c.line === B) {
				for ($ = c.input.charCodeAt(c.position); is_WHITE_SPACE($);) $ = c.input.charCodeAt(++c.position);
				if ($ === 58) $ = c.input.charCodeAt(++c.position), is_WS_OR_EOL($) || throwError(c, "a whitespace character is expected after the key-value separator within a block mapping"), Z && (storeMappingPair(c, K, q, J, Y, null, V, H, U), J = Y = X = null), Q = !0, Z = !1, z = !1, J = c.tag, Y = c.result;
				else if (Q) throwError(c, "can not read an implicit mapping pair; a colon is missed");
				else return c.tag = W, c.anchor = G, !0;
			} else if (Q) throwError(c, "can not read a block mapping entry; a multiline key may not be an implicit key");
			else return c.tag = W, c.anchor = G, !0;
		}
		if ((c.line === B || c.lineIndent > I) && (Z && (V = c.line, H = c.lineStart, U = c.position), composeNode(c, I, CONTEXT_BLOCK_OUT, !0, z) && (Z ? Y = c.result : X = c.result), Z || (storeMappingPair(c, K, q, J, Y, X, V, H, U), J = Y = X = null), skipSeparationSpace(c, !0, -1), $ = c.input.charCodeAt(c.position)), (c.line === B || c.lineIndent > I) && $ !== 0) throwError(c, "bad indentation of a mapping entry");
		else if (c.lineIndent < I) break;
	}
	return Z && storeMappingPair(c, K, q, J, Y, null, V, H, U), Q && (c.tag = W, c.anchor = G, c.kind = "mapping", c.result = K), Q;
}
__name(readBlockMapping, "readBlockMapping");
function readTagProperty(c) {
	var I, L = !1, R = !1, z, B, V = c.input.charCodeAt(c.position);
	if (V !== 33) return !1;
	if (c.tag !== null && throwError(c, "duplication of a tag property"), V = c.input.charCodeAt(++c.position), V === 60 ? (L = !0, V = c.input.charCodeAt(++c.position)) : V === 33 ? (R = !0, z = "!!", V = c.input.charCodeAt(++c.position)) : z = "!", I = c.position, L) {
		do
			V = c.input.charCodeAt(++c.position);
		while (V !== 0 && V !== 62);
		c.position < c.length ? (B = c.input.slice(I, c.position), V = c.input.charCodeAt(++c.position)) : throwError(c, "unexpected end of the stream within a verbatim tag");
	} else {
		for (; V !== 0 && !is_WS_OR_EOL(V);) V === 33 && (R ? throwError(c, "tag suffix cannot contain exclamation marks") : (z = c.input.slice(I - 1, c.position + 1), PATTERN_TAG_HANDLE.test(z) || throwError(c, "named tag handle cannot contain such characters"), R = !0, I = c.position + 1)), V = c.input.charCodeAt(++c.position);
		B = c.input.slice(I, c.position), PATTERN_FLOW_INDICATORS.test(B) && throwError(c, "tag suffix cannot contain flow indicator characters");
	}
	B && !PATTERN_TAG_URI.test(B) && throwError(c, "tag name cannot contain such characters: " + B);
	try {
		B = decodeURIComponent(B);
	} catch {
		throwError(c, "tag name is malformed: " + B);
	}
	return L ? c.tag = B : _hasOwnProperty$1.call(c.tagMap, z) ? c.tag = c.tagMap[z] + B : z === "!" ? c.tag = "!" + B : z === "!!" ? c.tag = "tag:yaml.org,2002:" + B : throwError(c, "undeclared tag handle \"" + z + "\""), !0;
}
__name(readTagProperty, "readTagProperty");
function readAnchorProperty(c) {
	var I, L = c.input.charCodeAt(c.position);
	if (L !== 38) return !1;
	for (c.anchor !== null && throwError(c, "duplication of an anchor property"), L = c.input.charCodeAt(++c.position), I = c.position; L !== 0 && !is_WS_OR_EOL(L) && !is_FLOW_INDICATOR(L);) L = c.input.charCodeAt(++c.position);
	return c.position === I && throwError(c, "name of an anchor node must contain at least one character"), c.anchor = c.input.slice(I, c.position), !0;
}
__name(readAnchorProperty, "readAnchorProperty");
function readAlias(c) {
	var I, L, R = c.input.charCodeAt(c.position);
	if (R !== 42) return !1;
	for (R = c.input.charCodeAt(++c.position), I = c.position; R !== 0 && !is_WS_OR_EOL(R) && !is_FLOW_INDICATOR(R);) R = c.input.charCodeAt(++c.position);
	return c.position === I && throwError(c, "name of an alias node must contain at least one character"), L = c.input.slice(I, c.position), _hasOwnProperty$1.call(c.anchorMap, L) || throwError(c, "unidentified alias \"" + L + "\""), c.result = c.anchorMap[L], skipSeparationSpace(c, !0, -1), !0;
}
__name(readAlias, "readAlias");
function composeNode(c, I, L, R, z) {
	var B, V, H, U = 1, W = !1, G = !1, K, q, J, Y, X, Z;
	if (c.listener !== null && c.listener("open", c), c.tag = null, c.anchor = null, c.kind = null, c.result = null, B = V = H = CONTEXT_BLOCK_OUT === L || CONTEXT_BLOCK_IN === L, R && skipSeparationSpace(c, !0, -1) && (W = !0, c.lineIndent > I ? U = 1 : c.lineIndent === I ? U = 0 : c.lineIndent < I && (U = -1)), U === 1) for (; readTagProperty(c) || readAnchorProperty(c);) skipSeparationSpace(c, !0, -1) ? (W = !0, H = B, c.lineIndent > I ? U = 1 : c.lineIndent === I ? U = 0 : c.lineIndent < I && (U = -1)) : H = !1;
	if (H &&= W || z, (U === 1 || CONTEXT_BLOCK_OUT === L) && (X = CONTEXT_FLOW_IN === L || CONTEXT_FLOW_OUT === L ? I : I + 1, Z = c.position - c.lineStart, U === 1 ? H && (readBlockSequence(c, Z) || readBlockMapping(c, Z, X)) || readFlowCollection(c, X) ? G = !0 : (V && readBlockScalar(c, X) || readSingleQuotedScalar(c, X) || readDoubleQuotedScalar(c, X) ? G = !0 : readAlias(c) ? (G = !0, (c.tag !== null || c.anchor !== null) && throwError(c, "alias node should not have any properties")) : readPlainScalar(c, X, CONTEXT_FLOW_IN === L) && (G = !0, c.tag === null && (c.tag = "?")), c.anchor !== null && (c.anchorMap[c.anchor] = c.result)) : U === 0 && (G = H && readBlockSequence(c, Z))), c.tag === null) c.anchor !== null && (c.anchorMap[c.anchor] = c.result);
	else if (c.tag === "?") {
		for (c.result !== null && c.kind !== "scalar" && throwError(c, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + c.kind + "\""), K = 0, q = c.implicitTypes.length; K < q; K += 1) if (Y = c.implicitTypes[K], Y.resolve(c.result)) {
			c.result = Y.construct(c.result), c.tag = Y.tag, c.anchor !== null && (c.anchorMap[c.anchor] = c.result);
			break;
		}
	} else if (c.tag !== "!") {
		if (_hasOwnProperty$1.call(c.typeMap[c.kind || "fallback"], c.tag)) Y = c.typeMap[c.kind || "fallback"][c.tag];
		else for (Y = null, J = c.typeMap.multi[c.kind || "fallback"], K = 0, q = J.length; K < q; K += 1) if (c.tag.slice(0, J[K].tag.length) === J[K].tag) {
			Y = J[K];
			break;
		}
		Y || throwError(c, "unknown tag !<" + c.tag + ">"), c.result !== null && Y.kind !== c.kind && throwError(c, "unacceptable node kind for !<" + c.tag + "> tag; it should be \"" + Y.kind + "\", not \"" + c.kind + "\""), Y.resolve(c.result, c.tag) ? (c.result = Y.construct(c.result, c.tag), c.anchor !== null && (c.anchorMap[c.anchor] = c.result)) : throwError(c, "cannot resolve a node with !<" + c.tag + "> explicit tag");
	}
	return c.listener !== null && c.listener("close", c), c.tag !== null || c.anchor !== null || G;
}
__name(composeNode, "composeNode");
function readDocument(c) {
	var I = c.position, L, R, z, B = !1, V;
	for (c.version = null, c.checkLineBreaks = c.legacy, c.tagMap = /* @__PURE__ */ Object.create(null), c.anchorMap = /* @__PURE__ */ Object.create(null); (V = c.input.charCodeAt(c.position)) !== 0 && (skipSeparationSpace(c, !0, -1), V = c.input.charCodeAt(c.position), !(c.lineIndent > 0 || V !== 37));) {
		for (B = !0, V = c.input.charCodeAt(++c.position), L = c.position; V !== 0 && !is_WS_OR_EOL(V);) V = c.input.charCodeAt(++c.position);
		for (R = c.input.slice(L, c.position), z = [], R.length < 1 && throwError(c, "directive name must not be less than one character in length"); V !== 0;) {
			for (; is_WHITE_SPACE(V);) V = c.input.charCodeAt(++c.position);
			if (V === 35) {
				do
					V = c.input.charCodeAt(++c.position);
				while (V !== 0 && !is_EOL(V));
				break;
			}
			if (is_EOL(V)) break;
			for (L = c.position; V !== 0 && !is_WS_OR_EOL(V);) V = c.input.charCodeAt(++c.position);
			z.push(c.input.slice(L, c.position));
		}
		V !== 0 && readLineBreak(c), _hasOwnProperty$1.call(directiveHandlers, R) ? directiveHandlers[R](c, R, z) : throwWarning(c, "unknown document directive \"" + R + "\"");
	}
	if (skipSeparationSpace(c, !0, -1), c.lineIndent === 0 && c.input.charCodeAt(c.position) === 45 && c.input.charCodeAt(c.position + 1) === 45 && c.input.charCodeAt(c.position + 2) === 45 ? (c.position += 3, skipSeparationSpace(c, !0, -1)) : B && throwError(c, "directives end mark is expected"), composeNode(c, c.lineIndent - 1, CONTEXT_BLOCK_OUT, !1, !0), skipSeparationSpace(c, !0, -1), c.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(c.input.slice(I, c.position)) && throwWarning(c, "non-ASCII line breaks are interpreted as content"), c.documents.push(c.result), c.position === c.lineStart && testDocumentSeparator(c)) {
		c.input.charCodeAt(c.position) === 46 && (c.position += 3, skipSeparationSpace(c, !0, -1));
		return;
	}
	if (c.position < c.length - 1) throwError(c, "end of the stream or a document separator is expected");
	else return;
}
__name(readDocument, "readDocument");
function loadDocuments(c, I) {
	c = String(c), I ||= {}, c.length !== 0 && (c.charCodeAt(c.length - 1) !== 10 && c.charCodeAt(c.length - 1) !== 13 && (c += "\n"), c.charCodeAt(0) === 65279 && (c = c.slice(1)));
	var L = new State$1(c, I), R = c.indexOf("\0");
	for (R !== -1 && (L.position = R, throwError(L, "null byte is not allowed in input")), L.input += "\0"; L.input.charCodeAt(L.position) === 32;) L.lineIndent += 1, L.position += 1;
	for (; L.position < L.length - 1;) readDocument(L);
	return L.documents;
}
__name(loadDocuments, "loadDocuments");
function loadAll$1(c, I, L) {
	typeof I == "object" && I && L === void 0 && (L = I, I = null);
	var R = loadDocuments(c, L);
	if (typeof I != "function") return R;
	for (var z = 0, B = R.length; z < B; z += 1) I(R[z]);
}
__name(loadAll$1, "loadAll$1");
function load$1(c, I) {
	var L = loadDocuments(c, I);
	if (L.length !== 0) {
		if (L.length === 1) return L[0];
		throw new exception("expected a single document in the stream, but found more");
	}
}
__name(load$1, "load$1");
var loader = {
	loadAll: loadAll$1,
	load: load$1
}, _toString = Object.prototype.toString, _hasOwnProperty = Object.prototype.hasOwnProperty, CHAR_BOM = 65279, CHAR_TAB = 9, CHAR_LINE_FEED = 10, CHAR_CARRIAGE_RETURN = 13, CHAR_SPACE = 32, CHAR_EXCLAMATION = 33, CHAR_DOUBLE_QUOTE = 34, CHAR_SHARP = 35, CHAR_PERCENT = 37, CHAR_AMPERSAND = 38, CHAR_SINGLE_QUOTE = 39, CHAR_ASTERISK = 42, CHAR_COMMA = 44, CHAR_MINUS = 45, CHAR_COLON = 58, CHAR_EQUALS = 61, CHAR_GREATER_THAN = 62, CHAR_QUESTION = 63, CHAR_COMMERCIAL_AT = 64, CHAR_LEFT_SQUARE_BRACKET = 91, CHAR_RIGHT_SQUARE_BRACKET = 93, CHAR_GRAVE_ACCENT = 96, CHAR_LEFT_CURLY_BRACKET = 123, CHAR_VERTICAL_LINE = 124, CHAR_RIGHT_CURLY_BRACKET = 125, ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0", ESCAPE_SEQUENCES[7] = "\\a", ESCAPE_SEQUENCES[8] = "\\b", ESCAPE_SEQUENCES[9] = "\\t", ESCAPE_SEQUENCES[10] = "\\n", ESCAPE_SEQUENCES[11] = "\\v", ESCAPE_SEQUENCES[12] = "\\f", ESCAPE_SEQUENCES[13] = "\\r", ESCAPE_SEQUENCES[27] = "\\e", ESCAPE_SEQUENCES[34] = "\\\"", ESCAPE_SEQUENCES[92] = "\\\\", ESCAPE_SEQUENCES[133] = "\\N", ESCAPE_SEQUENCES[160] = "\\_", ESCAPE_SEQUENCES[8232] = "\\L", ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
	"y",
	"Y",
	"yes",
	"Yes",
	"YES",
	"on",
	"On",
	"ON",
	"n",
	"N",
	"no",
	"No",
	"NO",
	"off",
	"Off",
	"OFF"
], DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(c, I) {
	var L, R, z, B, V, H, U;
	if (I === null) return {};
	for (L = {}, R = Object.keys(I), z = 0, B = R.length; z < B; z += 1) V = R[z], H = String(I[V]), V.slice(0, 2) === "!!" && (V = "tag:yaml.org,2002:" + V.slice(2)), U = c.compiledTypeMap.fallback[V], U && _hasOwnProperty.call(U.styleAliases, H) && (H = U.styleAliases[H]), L[V] = H;
	return L;
}
__name(compileStyleMap, "compileStyleMap");
function encodeHex(c) {
	var I = c.toString(16).toUpperCase(), L, R;
	if (c <= 255) L = "x", R = 2;
	else if (c <= 65535) L = "u", R = 4;
	else if (c <= 4294967295) L = "U", R = 8;
	else throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
	return "\\" + L + common.repeat("0", R - I.length) + I;
}
__name(encodeHex, "encodeHex");
var QUOTING_TYPE_SINGLE = 1, QUOTING_TYPE_DOUBLE = 2;
function State(c) {
	this.schema = c.schema || _default, this.indent = Math.max(1, c.indent || 2), this.noArrayIndent = c.noArrayIndent || !1, this.skipInvalid = c.skipInvalid || !1, this.flowLevel = common.isNothing(c.flowLevel) ? -1 : c.flowLevel, this.styleMap = compileStyleMap(this.schema, c.styles || null), this.sortKeys = c.sortKeys || !1, this.lineWidth = c.lineWidth || 80, this.noRefs = c.noRefs || !1, this.noCompatMode = c.noCompatMode || !1, this.condenseFlow = c.condenseFlow || !1, this.quotingType = c.quotingType === "\"" ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE, this.forceQuotes = c.forceQuotes || !1, this.replacer = typeof c.replacer == "function" ? c.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
__name(State, "State");
function indentString(c, I) {
	for (var L = common.repeat(" ", I), R = 0, z = -1, B = "", V, U = c.length; R < U;) z = c.indexOf("\n", R), z === -1 ? (V = c.slice(R), R = U) : (V = c.slice(R, z + 1), R = z + 1), V.length && V !== "\n" && (B += L), B += V;
	return B;
}
__name(indentString, "indentString");
function generateNextLine(c, I) {
	return "\n" + common.repeat(" ", c.indent * I);
}
__name(generateNextLine, "generateNextLine");
function testImplicitResolving(c, I) {
	var L, R, z;
	for (L = 0, R = c.implicitTypes.length; L < R; L += 1) if (z = c.implicitTypes[L], z.resolve(I)) return !0;
	return !1;
}
__name(testImplicitResolving, "testImplicitResolving");
function isWhitespace(c) {
	return c === CHAR_SPACE || c === CHAR_TAB;
}
__name(isWhitespace, "isWhitespace");
function isPrintable(c) {
	return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
__name(isPrintable, "isPrintable");
function isNsCharOrWhitespace(c) {
	return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
__name(isNsCharOrWhitespace, "isNsCharOrWhitespace");
function isPlainSafe(c, I, L) {
	var R = isNsCharOrWhitespace(c), z = R && !isWhitespace(c);
	return (L ? R : R && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(I === CHAR_COLON && !z) || isNsCharOrWhitespace(I) && !isWhitespace(I) && c === CHAR_SHARP || I === CHAR_COLON && z;
}
__name(isPlainSafe, "isPlainSafe");
function isPlainSafeFirst(c) {
	return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
__name(isPlainSafeFirst, "isPlainSafeFirst");
function isPlainSafeLast(c) {
	return !isWhitespace(c) && c !== CHAR_COLON;
}
__name(isPlainSafeLast, "isPlainSafeLast");
function codePointAt(c, I) {
	var L = c.charCodeAt(I), R;
	return L >= 55296 && L <= 56319 && I + 1 < c.length && (R = c.charCodeAt(I + 1), R >= 56320 && R <= 57343) ? (L - 55296) * 1024 + R - 56320 + 65536 : L;
}
__name(codePointAt, "codePointAt");
function needIndentIndicator(c) {
	return /^\n* /.test(c);
}
__name(needIndentIndicator, "needIndentIndicator");
var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
function chooseScalarStyle(c, I, L, R, z, B, V, H) {
	var U, W = 0, G = null, K = !1, q = !1, J = R !== -1, Y = -1, X = isPlainSafeFirst(codePointAt(c, 0)) && isPlainSafeLast(codePointAt(c, c.length - 1));
	if (I || V) for (U = 0; U < c.length; W >= 65536 ? U += 2 : U++) {
		if (W = codePointAt(c, U), !isPrintable(W)) return STYLE_DOUBLE;
		X &&= isPlainSafe(W, G, H), G = W;
	}
	else {
		for (U = 0; U < c.length; W >= 65536 ? U += 2 : U++) {
			if (W = codePointAt(c, U), W === CHAR_LINE_FEED) K = !0, J && (q ||= U - Y - 1 > R && c[Y + 1] !== " ", Y = U);
			else if (!isPrintable(W)) return STYLE_DOUBLE;
			X &&= isPlainSafe(W, G, H), G = W;
		}
		q ||= J && U - Y - 1 > R && c[Y + 1] !== " ";
	}
	return !K && !q ? X && !V && !z(c) ? STYLE_PLAIN : B === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE : L > 9 && needIndentIndicator(c) ? STYLE_DOUBLE : V ? B === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE : q ? STYLE_FOLDED : STYLE_LITERAL;
}
__name(chooseScalarStyle, "chooseScalarStyle");
function writeScalar(I, L, R, z, B) {
	I.dump = (function() {
		if (L.length === 0) return I.quotingType === QUOTING_TYPE_DOUBLE ? "\"\"" : "''";
		if (!I.noCompatMode && (DEPRECATED_BOOLEANS_SYNTAX.indexOf(L) !== -1 || DEPRECATED_BASE60_SYNTAX.test(L))) return I.quotingType === QUOTING_TYPE_DOUBLE ? "\"" + L + "\"" : "'" + L + "'";
		var V = I.indent * Math.max(1, R), H = I.lineWidth === -1 ? -1 : Math.max(Math.min(I.lineWidth, 40), I.lineWidth - V), U = z || I.flowLevel > -1 && R >= I.flowLevel;
		function W(c) {
			return testImplicitResolving(I, c);
		}
		switch (__name(W, "testAmbiguity"), chooseScalarStyle(L, U, I.indent, H, W, I.quotingType, I.forceQuotes && !z, B)) {
			case STYLE_PLAIN: return L;
			case STYLE_SINGLE: return "'" + L.replace(/'/g, "''") + "'";
			case STYLE_LITERAL: return "|" + blockHeader(L, I.indent) + dropEndingNewline(indentString(L, V));
			case STYLE_FOLDED: return ">" + blockHeader(L, I.indent) + dropEndingNewline(indentString(foldString(L, H), V));
			case STYLE_DOUBLE: return "\"" + escapeString(L) + "\"";
			default: throw new exception("impossible error: invalid scalar style");
		}
	})();
}
__name(writeScalar, "writeScalar");
function blockHeader(c, I) {
	var L = needIndentIndicator(c) ? String(I) : "", R = c[c.length - 1] === "\n";
	return L + (R && (c[c.length - 2] === "\n" || c === "\n") ? "+" : R ? "" : "-") + "\n";
}
__name(blockHeader, "blockHeader");
function dropEndingNewline(c) {
	return c[c.length - 1] === "\n" ? c.slice(0, -1) : c;
}
__name(dropEndingNewline, "dropEndingNewline");
function foldString(c, I) {
	for (var L = /(\n+)([^\n]*)/g, R = (function() {
		var R = c.indexOf("\n");
		return R = R === -1 ? c.length : R, L.lastIndex = R, foldLine(c.slice(0, R), I);
	})(), z = c[0] === "\n" || c[0] === " ", B, V; V = L.exec(c);) {
		var H = V[1], U = V[2];
		B = U[0] === " ", R += H + (!z && !B && U !== "" ? "\n" : "") + foldLine(U, I), z = B;
	}
	return R;
}
__name(foldString, "foldString");
function foldLine(c, I) {
	if (c === "" || c[0] === " ") return c;
	for (var L = / [^ ]/g, R, z = 0, B, V = 0, H = 0, U = ""; R = L.exec(c);) H = R.index, H - z > I && (B = V > z ? V : H, U += "\n" + c.slice(z, B), z = B + 1), V = H;
	return U += "\n", c.length - z > I && V > z ? U += c.slice(z, V) + "\n" + c.slice(V + 1) : U += c.slice(z), U.slice(1);
}
__name(foldLine, "foldLine");
function escapeString(c) {
	for (var I = "", L = 0, R, z = 0; z < c.length; L >= 65536 ? z += 2 : z++) L = codePointAt(c, z), R = ESCAPE_SEQUENCES[L], !R && isPrintable(L) ? (I += c[z], L >= 65536 && (I += c[z + 1])) : I += R || encodeHex(L);
	return I;
}
__name(escapeString, "escapeString");
function writeFlowSequence(c, I, L) {
	var R = "", z = c.tag, B, V, H;
	for (B = 0, V = L.length; B < V; B += 1) H = L[B], c.replacer && (H = c.replacer.call(L, String(B), H)), (writeNode(c, I, H, !1, !1) || H === void 0 && writeNode(c, I, null, !1, !1)) && (R !== "" && (R += "," + (c.condenseFlow ? "" : " ")), R += c.dump);
	c.tag = z, c.dump = "[" + R + "]";
}
__name(writeFlowSequence, "writeFlowSequence");
function writeBlockSequence(c, I, L, R) {
	var z = "", B = c.tag, V, H, U;
	for (V = 0, H = L.length; V < H; V += 1) U = L[V], c.replacer && (U = c.replacer.call(L, String(V), U)), (writeNode(c, I + 1, U, !0, !0, !1, !0) || U === void 0 && writeNode(c, I + 1, null, !0, !0, !1, !0)) && ((!R || z !== "") && (z += generateNextLine(c, I)), c.dump && CHAR_LINE_FEED === c.dump.charCodeAt(0) ? z += "-" : z += "- ", z += c.dump);
	c.tag = B, c.dump = z || "[]";
}
__name(writeBlockSequence, "writeBlockSequence");
function writeFlowMapping(c, I, L) {
	var R = "", z = c.tag, B = Object.keys(L), V, H, U, W, G;
	for (V = 0, H = B.length; V < H; V += 1) G = "", R !== "" && (G += ", "), c.condenseFlow && (G += "\""), U = B[V], W = L[U], c.replacer && (W = c.replacer.call(L, U, W)), writeNode(c, I, U, !1, !1) && (c.dump.length > 1024 && (G += "? "), G += c.dump + (c.condenseFlow ? "\"" : "") + ":" + (c.condenseFlow ? "" : " "), writeNode(c, I, W, !1, !1) && (G += c.dump, R += G));
	c.tag = z, c.dump = "{" + R + "}";
}
__name(writeFlowMapping, "writeFlowMapping");
function writeBlockMapping(c, I, L, R) {
	var z = "", B = c.tag, V = Object.keys(L), H, U, W, K, q, J;
	if (c.sortKeys === !0) V.sort();
	else if (typeof c.sortKeys == "function") V.sort(c.sortKeys);
	else if (c.sortKeys) throw new exception("sortKeys must be a boolean or a function");
	for (H = 0, U = V.length; H < U; H += 1) J = "", (!R || z !== "") && (J += generateNextLine(c, I)), W = V[H], K = L[W], c.replacer && (K = c.replacer.call(L, W, K)), writeNode(c, I + 1, W, !0, !0, !0) && (q = c.tag !== null && c.tag !== "?" || c.dump && c.dump.length > 1024, q && (c.dump && CHAR_LINE_FEED === c.dump.charCodeAt(0) ? J += "?" : J += "? "), J += c.dump, q && (J += generateNextLine(c, I)), writeNode(c, I + 1, K, !0, q) && (c.dump && CHAR_LINE_FEED === c.dump.charCodeAt(0) ? J += ":" : J += ": ", J += c.dump, z += J));
	c.tag = B, c.dump = z || "{}";
}
__name(writeBlockMapping, "writeBlockMapping");
function detectType(c, I, L) {
	var R, z = L ? c.explicitTypes : c.implicitTypes, B, V, H, U;
	for (B = 0, V = z.length; B < V; B += 1) if (H = z[B], (H.instanceOf || H.predicate) && (!H.instanceOf || typeof I == "object" && I instanceof H.instanceOf) && (!H.predicate || H.predicate(I))) {
		if (L ? H.multi && H.representName ? c.tag = H.representName(I) : c.tag = H.tag : c.tag = "?", H.represent) {
			if (U = c.styleMap[H.tag] || H.defaultStyle, _toString.call(H.represent) === "[object Function]") R = H.represent(I, U);
			else if (_hasOwnProperty.call(H.represent, U)) R = H.represent[U](I, U);
			else throw new exception("!<" + H.tag + "> tag resolver accepts not \"" + U + "\" style");
			c.dump = R;
		}
		return !0;
	}
	return !1;
}
__name(detectType, "detectType");
function writeNode(c, I, L, R, z, B, V) {
	c.tag = null, c.dump = L, detectType(c, L, !1) || detectType(c, L, !0);
	var H = _toString.call(c.dump), U = R, W;
	R &&= c.flowLevel < 0 || c.flowLevel > I;
	var K = H === "[object Object]" || H === "[object Array]", q, J;
	if (K && (q = c.duplicates.indexOf(L), J = q !== -1), (c.tag !== null && c.tag !== "?" || J || c.indent !== 2 && I > 0) && (z = !1), J && c.usedDuplicates[q]) c.dump = "*ref_" + q;
	else {
		if (K && J && !c.usedDuplicates[q] && (c.usedDuplicates[q] = !0), H === "[object Object]") R && Object.keys(c.dump).length !== 0 ? (writeBlockMapping(c, I, c.dump, z), J && (c.dump = "&ref_" + q + c.dump)) : (writeFlowMapping(c, I, c.dump), J && (c.dump = "&ref_" + q + " " + c.dump));
		else if (H === "[object Array]") R && c.dump.length !== 0 ? (c.noArrayIndent && !V && I > 0 ? writeBlockSequence(c, I - 1, c.dump, z) : writeBlockSequence(c, I, c.dump, z), J && (c.dump = "&ref_" + q + c.dump)) : (writeFlowSequence(c, I, c.dump), J && (c.dump = "&ref_" + q + " " + c.dump));
		else if (H === "[object String]") c.tag !== "?" && writeScalar(c, c.dump, I, B, U);
		else if (H === "[object Undefined]") return !1;
		else {
			if (c.skipInvalid) return !1;
			throw new exception("unacceptable kind of an object to dump " + H);
		}
		c.tag !== null && c.tag !== "?" && (W = encodeURI(c.tag[0] === "!" ? c.tag.slice(1) : c.tag).replace(/!/g, "%21"), W = c.tag[0] === "!" ? "!" + W : W.slice(0, 18) === "tag:yaml.org,2002:" ? "!!" + W.slice(18) : "!<" + W + ">", c.dump = W + " " + c.dump);
	}
	return !0;
}
__name(writeNode, "writeNode");
function getDuplicateReferences(c, I) {
	var L = [], R = [], z, B;
	for (inspectNode(c, L, R), z = 0, B = R.length; z < B; z += 1) I.duplicates.push(L[R[z]]);
	I.usedDuplicates = Array(B);
}
__name(getDuplicateReferences, "getDuplicateReferences");
function inspectNode(c, I, L) {
	var R, z, B;
	if (typeof c == "object" && c) if (z = I.indexOf(c), z !== -1) L.indexOf(z) === -1 && L.push(z);
	else if (I.push(c), Array.isArray(c)) for (z = 0, B = c.length; z < B; z += 1) inspectNode(c[z], I, L);
	else for (R = Object.keys(c), z = 0, B = R.length; z < B; z += 1) inspectNode(c[R[z]], I, L);
}
__name(inspectNode, "inspectNode");
function dump$1(c, I) {
	I ||= {};
	var L = new State(I);
	L.noRefs || getDuplicateReferences(c, L);
	var R = c;
	return L.replacer && (R = L.replacer.call({ "": R }, "", R)), writeNode(L, 0, R, !0, !0) ? L.dump + "\n" : "";
}
__name(dump$1, "dump$1");
var dumper = { dump: dump$1 };
function renamed(c, I) {
	return function() {
		throw Error("Function yaml." + c + " is removed in js-yaml 4. Use yaml." + I + " instead, which is now safe by default.");
	};
}
__name(renamed, "renamed");
var JSON_SCHEMA = json, load = loader.load;
loader.loadAll, dumper.dump;
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
(*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
export { load as n, JSON_SCHEMA as t };

//# sourceMappingURL=chunk-MI3HLSF2-DcxRTH2O.js.map