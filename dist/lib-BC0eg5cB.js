import { a as __toCommonJS, n as __esmMin, r as __export, t as __commonJSMin } from "./chunk-DgPTj83v.js";
import { t as require_default } from "./default-DbHfETKp.js";
var require_stringify = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = (e) => e && Object.prototype.toString.call(e) === "[object Object]";
	function A(e) {
		if (!(e > 0)) return (e) => e;
		var O = " ".repeat(e);
		return (e) => {
			if (typeof e != "string") return e;
			let k = e.split("\n");
			return k.length === 1 ? O + e : k.map((e) => e.trim() === "" ? e : O + e).join("\n");
		};
	}
	var j = (e) => e.split("\n").filter((e) => e.trim() !== "").join("\n");
	function M(e, O) {
		let M = O > 0 ? "\n" : "", N = A(O);
		function P(e) {
			let O = "", A = !0, F;
			return e.some((e, j, N) => {
				if (j === 0) return F = "<" + e, N.length === 1;
				if (j === 1) {
					if (k(e)) {
						if (Object.keys(e).map((O) => {
							let k = e[O];
							Array.isArray(k) && (k = k.join(" ")), F += " " + O + "=\"" + k + "\"";
						}), N.length === 2) return !0;
						F += ">";
						return;
					}
					F += ">";
				}
				switch (typeof e) {
					case "string":
					case "number":
					case "boolean":
					case "undefined":
						O += e + M;
						return;
				}
				A = !1, O += P(e);
			}) ? F + "/>" + M : A ? F + j(O) + "</" + e[0] + ">" + M : F + M + N(O) + "</" + e[0] + ">" + M;
		}
		return P(e);
	}
	O.exports = M;
})), require_tt = /* @__PURE__ */ __commonJSMin(((e, O) => {
	O.exports = (e, O, k) => {
		let A = {};
		return (e || O) && (A = { transform: "translate(" + [e || 0].concat(O ? [O] : []).join(",") + ")" }), k = typeof k == "object" ? k : {}, Object.assign(A, k);
	};
})), package_exports = /* @__PURE__ */ __export({
	author: () => author,
	bugs: () => bugs,
	default: () => package_default,
	dependencies: () => dependencies,
	description: () => description,
	devDependencies: () => devDependencies,
	eslintConfig: () => eslintConfig,
	files: () => files,
	homepage: () => homepage,
	keywords: () => keywords,
	license: () => "MIT",
	main: () => main,
	name: () => name,
	repository: () => repository,
	scripts: () => scripts,
	unpkg: () => unpkg,
	version: () => version
}), name, version, description, homepage, author, repository, bugs, main, unpkg, files, scripts, keywords, devDependencies, dependencies, eslintConfig, package_default, init_package = __esmMin((() => {
	name = "wavedrom", version = "3.5.0", description = "Digital timing diagram in your browser", homepage = "http://wavedrom.com", author = "alex.drom@gmail.com", repository = {
		type: "git",
		url: "https://github.com/wavedrom/wavedrom.git"
	}, bugs = { url: "https://github.com/wavedrom/wavedrom/issues" }, main = "./lib", unpkg = "wavedrom.unpkg.min.js", files = [
		"bin/cli.js",
		"wavedrom.js",
		"wavedrom.min.js",
		"wavedrom.unpkg.js",
		"wavedrom.unpkg.min.js",
		"LICENSE",
		"lib/**",
		"skins/**"
	], scripts = {
		test: "npm-run-all eslint nyc",
		eslint: "eslint lib/*.js",
		nyc: "nyc -r=lcov -r=text mocha test",
		dist: "browserify ./lib/wave-drom.js > wavedrom.js",
		"watch.dist": "watchify ./lib/wave-drom.js -o wavedrom.js -v",
		"dist.min": "terser --compress --mengle -- wavedrom.js | node ./bin/header.js > wavedrom.min.js",
		unpkg: "browserify --standalone wavedrom lib/index.js > wavedrom.unpkg.js",
		"unpkg.min": "terser --compress --mengle -- wavedrom.unpkg.js | node ./bin/header.js > wavedrom.unpkg.min.js",
		cli: "{ echo '#!/usr/bin/env node' ; browserify --node bin/cli.js ; } > bin/wavedrom.js ; chmod +x bin/wavedrom.js",
		prepare: "npm-run-all test dist dist.min unpkg unpkg.min",
		clean: "rm -rf wavedrom.js wavedrom.*.js coverage .nyc_output",
		skins: "for S in default narrow dark lowkey narrower narrowerer; do node bin/svg2js.js -i unpacked/skins/$S.svg > skins/$S.js ; done"
	}, keywords = [
		"waveform",
		"verilog",
		"RTL"
	], devDependencies = {
		"@drom/eslint-config": "^0.12.0",
		browserify: "^17.0.0",
		chai: "^4.4",
		eslint: "^8.56",
		"fs-extra": "^11.2",
		json5: "^2.2.3",
		mocha: "^10.3",
		"npm-run-all": "^4.1.5",
		nyc: "^15.1.0",
		terser: "^5.27",
		watchify: "^4.0.0",
		yargs: "^17.7"
	}, dependencies = {
		"bit-field": "^1.9.0",
		logidrom: "^0.3.1",
		onml: "^2.1.0",
		tspan: "^0.4.0"
	}, eslintConfig = {
		extends: "@drom/eslint-config/eslint4/node4",
		rules: { camelcase: 0 }
	}, package_default = {
		name,
		version,
		description,
		homepage,
		author,
		license: "MIT",
		repository,
		bugs,
		main,
		unpkg,
		files,
		scripts,
		keywords,
		devDependencies,
		dependencies,
		eslintConfig
	};
})), require_eva = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k(e) {
		console.log("Error in WaveJS: ", e);
		let O = [
			"tspan",
			[
				"tspan",
				{ class: "error h5" },
				"Error: "
			],
			e.message
		];
		return O.textWidth = 1e3, { signal: [{ name: O }] };
	}
	function A(e) {
		let O = document.getElementById(e), A;
		if (O.type && O.type === "textarea") try {
			A = window.eval("(" + O.value + ")");
		} catch (e) {
			return k(e);
		}
		else try {
			A = window.eval("(" + O.innerHTML + ")");
		} catch (e) {
			return k(e);
		}
		if (Object.prototype.toString.call(A) !== "[object Object]") return k({ message: "[Semantic]: The root has to be an Object: \"{signal:[...]}\"" });
		if (A.signal) {
			if (!Array.isArray(A.signal)) return k({ message: "[Semantic]: \"signal\" object has to be an Array \"signal:[]\"" });
		} else if (A.assign) {
			if (!Array.isArray(A.assign)) return k({ message: "[Semantic]: \"assign\" object hasto be an Array \"assign:[]\"" });
		} else if (!A.reg) return k({ message: "[Semantic]: \"signal:[...]\" or \"assign:[...]\" property is missing inside the root Object" });
		return A;
	}
	O.exports = A;
})), require_append_save_as_dialog = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k(e, O) {
		let k;
		function A(e) {
			let O = parseInt(k.style.left, 10), j = parseInt(k.style.top, 10);
			(e.x < O || e.x > O + k.offsetWidth || e.y < j || e.y > j + k.offsetHeight) && (k.parentNode.removeChild(k), document.body.removeEventListener("mousedown", A, !1));
		}
		let j = document.getElementById(O + e);
		j.childNodes[0].addEventListener("contextmenu", function(M) {
			k = document.createElement("div"), k.className = "wavedromMenu", k.style.top = M.y + "px", k.style.left = M.x + "px";
			let N = document.createElement("ul"), P = document.createElement("li");
			P.innerHTML = "Save as PNG", N.appendChild(P);
			let F = document.createElement("li");
			F.innerHTML = "Save as SVG", N.appendChild(F), k.appendChild(N), document.body.appendChild(k), P.addEventListener("click", function() {
				let M = "";
				if (e !== 0) {
					let e = document.getElementById(O + 0);
					M += e.innerHTML.substring(166, e.innerHTML.indexOf("<g id=\"waves_0\">"));
				}
				M = [
					j.innerHTML.slice(0, 166),
					M,
					j.innerHTML.slice(166)
				].join("");
				let N = "data:image/svg+xml;base64," + btoa(M), P = new Image();
				P.src = N;
				let F = document.createElement("canvas");
				F.width = P.width, F.height = P.height, F.getContext("2d").drawImage(P, 0, 0);
				let I = F.toDataURL("image/png"), L = document.createElement("a");
				L.href = I, L.download = "wavedrom.png", L.click(), k.parentNode.removeChild(k), document.body.removeEventListener("mousedown", A, !1);
			}, !1), F.addEventListener("click", function() {
				let M = "";
				if (e !== 0) {
					let e = document.getElementById(O + 0);
					M += e.innerHTML.substring(166, e.innerHTML.indexOf("<g id=\"waves_0\">"));
				}
				M = [
					j.innerHTML.slice(0, 166),
					M,
					j.innerHTML.slice(166)
				].join("");
				let N = "data:image/svg+xml;base64," + btoa(M), P = document.createElement("a");
				P.href = N, P.download = "wavedrom.svg", P.click(), k.parentNode.removeChild(k), document.body.removeEventListener("mousedown", A, !1);
			}, !1), k.addEventListener("contextmenu", function(e) {
				e.preventDefault();
			}, !1), document.body.addEventListener("mousedown", A, !1), M.preventDefault();
		}, !1);
	}
	O.exports = k;
})), require_render$1 = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k(e, O) {
		O.xmax = Math.max(O.xmax, O.x);
		let A = O.y, j = e.length;
		for (let A = 1; A < j; A++) {
			let j = e[A];
			Array.isArray(j) ? O = k(j, {
				x: O.x + 1,
				y: O.y,
				xmax: O.xmax
			}) : (e[A] = {
				name: j,
				x: O.x + 1,
				y: O.y
			}, O.y += 2);
		}
		return e[0] = {
			name: e[0],
			x: O.x,
			y: Math.round((A + (O.y - 2)) / 2)
		}, O.x--, O;
	}
	O.exports = k;
})), require_parse = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = {
		"&": "&amp;",
		"\"": "&quot;",
		"<": "&lt;",
		">": "&gt;"
	};
	function A(e) {
		return typeof e == "string" ? e.replace(/([&"<>])/g, function(e, O) {
			return k[O];
		}) : e;
	}
	var j = /<o>|<ins>|<s>|<sub>|<sup>|<b>|<i>|<tt>|<\/o>|<\/ins>|<\/s>|<\/sub>|<\/sup>|<\/b>|<\/i>|<\/tt>/;
	function M(e, O) {
		O.add && O.add.split(";").forEach(function(O) {
			var k = O.split(" ");
			e[k[0]][k[1]] = !0;
		}), O.del && O.del.split(";").forEach(function(O) {
			var k = O.split(" ");
			delete e[k[0]][k[1]];
		});
	}
	var N = {
		"<o>": { add: "text-decoration overline" },
		"</o>": { del: "text-decoration overline" },
		"<ins>": { add: "text-decoration underline" },
		"</ins>": { del: "text-decoration underline" },
		"<s>": { add: "text-decoration line-through" },
		"</s>": { del: "text-decoration line-through" },
		"<b>": { add: "font-weight bold" },
		"</b>": { del: "font-weight bold" },
		"<i>": { add: "font-style italic" },
		"</i>": { del: "font-style italic" },
		"<sub>": { add: "baseline-shift sub;font-size .7em" },
		"</sub>": { del: "baseline-shift sub;font-size .7em" },
		"<sup>": { add: "baseline-shift super;font-size .7em" },
		"</sup>": { del: "baseline-shift super;font-size .7em" },
		"<tt>": { add: "font-family monospace" },
		"</tt>": { del: "font-family monospace" }
	};
	function P(e) {
		return Object.keys(e).reduce(function(O, k) {
			var A = Object.keys(e[k]);
			return A.length > 0 && (O[k] = A.join(" ")), O;
		}, {});
	}
	function F(e) {
		var O, k, F, I, L;
		if (e === void 0) return [];
		if (typeof e == "number") return [e + ""];
		if (typeof e != "string") return [e];
		for (k = [], O = {
			"text-decoration": {},
			"font-weight": {},
			"font-style": {},
			"baseline-shift": {},
			"font-size": {},
			"font-family": {}
		};;) {
			if (F = e.search(j), F === -1) return k.push([
				"tspan",
				P(O),
				A(e)
			]), k;
			if (F > 0 && (L = e.slice(0, F), k.push([
				"tspan",
				P(O),
				A(L)
			])), I = e.match(j)[0], M(O, N[I]), e = e.slice(F + I.length), e.length === 0) return k;
		}
	}
	O.exports = F;
})), require_reparse = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_parse();
	function A(e) {
		var O = e.match(/(\w+)-(\w)(\w+)/);
		return O === null ? e : O[1] + O[2].toUpperCase() + O[3];
	}
	function j(e) {
		var O = e.createElement;
		function j(e, k) {
			var j = e[0], M = e[1], N = Object.keys(M).reduce(function(e, O) {
				var k = A(O);
				return e[k] = M[O], e;
			}, {}), P = e[2];
			return N.key = k, O(j, N, P);
		}
		return function(e) {
			return k(e).map(j);
		};
	}
	O.exports = j;
})), require_lib$1 = /* @__PURE__ */ __commonJSMin(((e) => {
	var O = require_parse(), k = require_reparse();
	e.parse = O, e.reparse = k;
})), require_draw_body = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_lib$1(), A = "M 4,0 C 4,1.1 3.1,2 2,2 0.9,2 0,1.1 0,0 c 0,-1.1 0.9,-2 2,-2 1.1,0 2,0.9 2,2 z", j = "M -11,-6 -11,6 0,0 z m -5,6 5,0", M = "m -16,-10 5,0 c 6,0 11,4 11,10 0,6 -5,10 -11,10 l -5,0 z", N = "m -18,-10 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 2.5,-5 2.5,-15 0,-20 z", P = "m -21,-10 c 1,3 2,6 2,10 m 0,0 c 0,4 -1,7 -2,10 m 3,-20 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 1,-3 2,-6 2,-10 0,-4 -1,-7 -2,-10 z", F = "c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z", I = {
		"=": j,
		"~": j + A,
		"&": M,
		"~&": M + A,
		"|": N,
		"~|": N + A,
		"^": P,
		"~^": P + A,
		"+": "m -8,5 0,-10 m -5,5 10,0 m 3,0" + F,
		"*": "m -4,4 -8,-8 m 0,8 8,-8  m 4,4" + F,
		"-": "m -3,0 -10,0 m 13,0" + F
	}, L = {
		add: "+",
		mul: "*",
		sub: "-",
		and: "&",
		or: "|",
		xor: "^",
		andr: "&",
		orr: "|",
		xorr: "^",
		input: "="
	};
	Object.keys(L).reduce((e, O) => (e[O] = I[L[O]], e), I);
	var R = {
		is: (e) => I[e] !== void 0,
		render: (e) => ["path", {
			class: "gate",
			d: I[e]
		}]
	}, z = {
		eq: "==",
		ne: "!=",
		slt: "<",
		sle: "<=",
		sgt: ">",
		sge: ">=",
		ult: "<",
		ule: "<=",
		ugt: ">",
		uge: ">=",
		BUF: 1,
		INV: 1,
		AND: "&",
		NAND: "&",
		OR: "≥1",
		NOR: "≥1",
		XOR: "=1",
		XNOR: "=1",
		box: "",
		MUX: "M"
	}, B = {
		INV: 1,
		NAND: 1,
		NOR: 1,
		XNOR: 1
	}, V = {
		is: (e) => z[e] !== void 0,
		render: (e, O, j) => (O === j && (O = -4, j = 4), [
			"g",
			["path", {
				class: "gate",
				d: "m -16," + (O - 3) + " 16,0 0," + (j - O + 6) + " -16,0 z" + (B[e] ? A : "")
			}],
			["text", {
				x: -14,
				y: 4,
				class: "wirename"
			}].concat(k.parse(z[e]))
		])
	};
	function H(e, O, A) {
		return R.is(e) ? R.render(e) : V.is(e) ? V.render(e, O, A) : ["text", {
			x: -14,
			y: 4,
			class: "wirename"
		}].concat(k.parse(e));
	}
	O.exports = H;
})), require_draw_gate = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_lib$1(), A = require_draw_body();
	function j(e) {
		let O = e.length, j = [];
		for (let k = 2; k < O; k++) j.push(e[k][1]);
		let M = ["g"], N = Math.min.apply(null, j), P = Math.max.apply(null, j);
		M.push([
			"g",
			{ transform: "translate(16,0)" },
			["path", {
				d: "M" + e[2][0] + "," + N + " " + e[2][0] + "," + P,
				class: "wire"
			}]
		]);
		for (let k = 2; k < O; k++) M.push(["g", ["path", {
			d: "m" + e[k][0] + "," + e[k][1] + " 16,0",
			class: "wire"
		}]]);
		return M.push([
			"g",
			{ transform: "translate(" + e[1][0] + "," + e[1][1] + ")" },
			["title"].concat(k.parse(e[0])),
			A(e[0], N - e[1][1], P - e[1][1])
		]), M;
	}
	O.exports = j;
})), require_draw_boxes = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_lib$1(), A = require_draw_gate();
	function j(e, O) {
		let M = ["g"], N = [];
		if (Array.isArray(e)) {
			N.push(e[0].name), N.push([32 * (O - e[0].x), 8 * e[0].y]);
			for (let k = 1; k < e.length; k++) {
				let A = e[k];
				Array.isArray(A) ? N.push([32 * (O - A[0].x), 8 * A[0].y]) : N.push([32 * (O - A.x), 8 * A.y]);
			}
			M.push(A(N));
			for (let k = 1; k < e.length; k++) {
				let A = e[k];
				M.push(j(A, O));
			}
			return M;
		}
		let P = e.name, F = 32 * (O - e.x), I = 8 * e.y;
		return M.push([
			"g",
			{ transform: "translate(" + F + "," + I + ")" },
			["title"].concat(k.parse(P)),
			["path", { d: "M 2,0 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z" }],
			["text", {
				x: -4,
				y: 4,
				class: "pinname"
			}].concat(k.parse(P))
		]), M;
	}
	O.exports = j;
})), require_insert_svg_template_assign = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k() {
		return ["style", ".pinname {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:end; font-family:Helvetica} .wirename {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:start; font-family:Helvetica} .wirename:hover {fill:blue} .gate {color:#000; fill:#ffc; fill-opacity: 1;stroke:#000; stroke-width:1; stroke-opacity:1} .gate:hover {fill:red !important; } .wire {fill:none; stroke:#000; stroke-width:1; stroke-opacity:1} .grid {fill:#fff; fill-opacity:1; stroke:none}"];
	}
	O.exports = k;
})), require_render_assign = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_render$1(), A = require_draw_boxes(), j = require_insert_svg_template_assign();
	function M(e, O) {
		let M = {
			x: 0,
			y: 2,
			xmax: 0
		}, N = O.assign, P = N.length;
		for (let e = 0; e < P; e++) M = k(N[e], M), M.x++;
		let F = M.xmax + 3, I = ["g"];
		for (let e = 0; e < P; e++) I.push(A(N[e], F));
		let L = 32 * (F + 1) + 1, R = 8 * (M.y + 1) - 7;
		return [
			"svg",
			{
				id: "svgcontent_" + e,
				viewBox: "0 0 " + L + " " + R,
				width: L,
				height: R
			},
			j(),
			[
				"g",
				{ transform: "translate(0.5, 0.5)" },
				I
			]
		];
	}
	O.exports = M;
})), require_render = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_lib$1(), A = Math.round, j = (e, O) => ["svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: e,
		height: O,
		viewBox: [
			0,
			0,
			e,
			O
		].join(" ")
	}], M = (e, O, k) => Object.assign({ transform: "translate(" + e + (O ? "," + O : "") + ")" }, typeof k == "object" ? k : {}), N = {
		2: "#ff0000",
		3: "#aaff00",
		4: "#00ffd5",
		5: "#ffbf00",
		6: "#00ff19",
		7: "#006aff"
	}, P = (e) => N[e] === void 0 ? "" : ";fill:" + N[e], F = (e, O) => Object.assign(Object.keys(e).reduce((O, k) => {
		let A = Number(e[k]), j = isNaN(A) ? 0 : Math.round(A);
		return j !== 0 && (O[k] = j), O;
	}, {}), O), I = (e, O, k) => {
		if (!(typeof e == "string" || e instanceof String)) return e;
		let j = e.length * k;
		if (j <= O) return e;
		var M = e.length - (j - O) / k - 3;
		return M > 0 ? e.substring(0, A(M)) + "..." : e.substring(0, 1) + "...";
	}, L = (e, O, j, N) => {
		let P = { y: 6 };
		return N !== void 0 && (P.transform = "rotate(" + N + ")"), [
			"g",
			M(A(O), A(j)),
			["text", P].concat(k.parse(e))
		];
	}, R = (e, O, k) => ["line", F({
		x1: O,
		x2: O + e,
		y1: k,
		y2: k
	})], z = (e, O, k) => ["line", F({
		x1: O,
		x2: O,
		y1: k,
		y2: k + e
	})], B = (e, O, k, A, j, M) => {
		if (typeof e != "number") return L(e, O, k, M);
		let N = ["g", {}];
		for (let M = 0; M < j; M++) N.push(L(e >> M & 1, O + A * (j / 2 - M - .5), k));
		return N;
	}, V = (e, O, k, A, j) => {
		let M = O.vflip ? k * ((j + A) / 2) : k * (O.mod - (j + A) / 2 - 1);
		return Array.isArray(e.attr) ? e.attr.reduce((A, j, N) => j == null ? A : A.concat([B(j, M, O.fontsize * N, k, e.bits)]), ["g", {}]) : B(e.attr, M, 0, k, e.bits);
	}, H = (e, O) => {
		let { margin: k, hspace: j, vspace: N, mod: R, index: z, fontsize: H, vflip: U, trim: W, compact: G, offset: K } = O, q = j - k.left - k.right - 1, J = N - k.top - k.bottom, Y = q / R, X = ["g"], Z = ["g", M(A(Y / 2), -A(.5 * H + 4))], Q = ["g", M(A(Y / 2), A(.5 * J + .4 * H - 6))], $ = ["g", M(A(Y / 2), A(J + .7 * H - 2))];
		return e.map((e) => {
			let k = 0, A = R - 1, j = z * R, M = (z + 1) * R - 1;
			if (e.lsb / R >> 0 === z) k = e.lsbm, j = e.lsb, e.msb / R >> 0 === z && (M = e.msb, A = e.msbm);
			else if (e.msb / R >> 0 === z) M = e.msb, A = e.msbm;
			else if (!(j > e.lsb && M < e.msb)) return;
			G || (Z.push(L(j + K, Y * (U ? k : R - k - 1))), k !== A && Z.push(L(M + K, Y * (U ? A : R - A - 1)))), e.name !== void 0 && Q.push(B(W ? I(e.name, Y * e.bits, W) : e.name, Y * (U ? (A + k) / 2 : R - (A + k) / 2 - 1), 0, Y, e.bits, e.rotate)), (e.name === void 0 || e.type !== void 0) && (O.compact && e.type === void 0 || X.push(["rect", Object.assign({}, F({
				x: Y * (U ? k : R - A - 1),
				width: Y * (A - k + 1),
				height: J
			}, {
				field: e.name,
				style: "fill-opacity:0.1" + P(e.type)
			}), e.rect === void 0 ? {} : e.rect)])), e.attr !== void 0 && $.push(V(e, O, Y, k, A));
		}), [
			"g",
			X,
			Z,
			Q,
			$
		];
	}, U = (e, O) => {
		let k = [], A = 0;
		return e.map((e) => {
			k[A % O] = !0, A += e.bits, k[(A - 1) % O] = !0;
		}), k;
	}, W = (e) => {
		let { hspace: O, margin: k, fontsize: A, legend: j } = e, N = O - k.left - k.right - 1, I = ["g", M(k.left, -10)], R = N / 2 - Object.keys(j).length / 2 * 60;
		for (let e in j) {
			let O = j[e];
			I.push(["rect", F({
				x: R,
				width: 12,
				height: 12
			}, { style: "fill-opacity:0.15; stroke: #000; stroke-width: 1.2;" + P(O) })]), R += 36, I.push(L(e, R, .1 * A + 4)), R += 24;
		}
		return I;
	}, G = (e, O) => {
		let { hspace: k, margin: A, mod: j, fontsize: N, vflip: P, legend: F, offset: I } = O, R = (k - A.left - A.right - 1) / j, z = ["g", M(A.left, F ? 0 : -3)], B = U(e, j);
		for (let e = 0; e < j; e++) {
			let O = P ? e : j - e - 1;
			B[O] && z.push(L(O + I, R * (e + .5), .5 * N + 4));
		}
		return z;
	}, K = (e, O, k) => {
		if (!O.compact) return !1;
		let A = (e) => e.name === void 0 && e.type === void 0;
		return e.findIndex((e) => A(e) && k > e.lsb && k <= e.msb + 1) !== -1;
	}, q = (e, O) => {
		let { hspace: k, vspace: A, mod: j, margin: M, index: N, vflip: P } = O, F = k - M.left - M.right - 1, I = A - M.top - M.bottom, L = ["g", {
			stroke: "black",
			"stroke-width": 1,
			"stroke-linecap": "round"
		}];
		O.sparse ? O.uneven && O.bits % 2 == 1 && N === O.lanes - 1 ? P ? L.push(R(F - F / j, 0, 0), R(F - F / j, 0, I)) : L.push(R(F - F / j, F / j, 0), R(F - F / j, F / j, I)) : O.compact || L.push(R(F, 0, 0), R(F, 0, I), z(I, P ? F : 0, 0)) : L.push(R(F, 0, 0), z(I, P ? F : 0, 0), R(F, 0, I));
		let B = N * j, V = P ? 1 : -1, H = P ? 0 : j;
		if (O.sparse) for (let k = 0; k <= j; k++) {
			let A = H * (F / j);
			(!K(e, O, B) && k !== 0 || !K(e, O, B + 1) && k !== j) && (k === 0 || k === j || e.some((e) => e.msb + 1 === B) ? L.push(z(I, A, 0)) : (L.push(z(I >>> 3, A, 0)), L.push(z(-(I >>> 3), A, I)))), O.compact && k !== 0 && !K(e, O, B) && (L.push(R(F / j, A, 0)), L.push(R(F / j, A, I))), B++, H += V;
		}
		else for (let O = 0; O < j; O++) {
			let k = H * (F / j);
			O === 0 || e.some((e) => e.lsb === B) ? L.push(z(I, k, 0)) : L.push(z(I >>> 3, k, 0), z(-(I >>> 3), k, I)), B++, H += V;
		}
		return L;
	}, J = (e, O) => {
		let { index: k, vspace: j, hspace: N, margin: P, hflip: F, lanes: I, compact: R, label: z } = O, B = j - P.top - P.bottom, V = N - P.left - P.right - 1, U = P.left, W = F ? k : I - k - 1, G = A(W * j + P.top);
		R && (G = A(W * B + P.top));
		let K = [
			"g",
			M(U, G),
			q(e, O),
			H(e, O)
		];
		if (z && z.left !== void 0) {
			let e = z.left, O = k;
			typeof e == "string" ? O = e : typeof e == "number" ? O += e : typeof e == "object" && (O = e[k] || O), K.push([
				"g",
				{ "text-anchor": "end" },
				L(O, -4, A(B / 2))
			]);
		}
		if (z && z.right !== void 0) {
			let e = z.right, O = k;
			typeof e == "string" ? O = e : typeof e == "number" ? O += e : typeof e == "object" && (O = e[k] || O), K.push([
				"g",
				{ "text-anchor": "start" },
				L(O, V + 4, A(B / 2))
			]);
		}
		return K;
	}, Y = (e) => e.reduce((e, O) => Math.max(e, O.attr === void 0 ? 0 : Array.isArray(O.attr) ? O.attr.length : 1), 0), X = (e) => e.reduce((e, O) => e + (O.bits === void 0 ? 0 : O.bits), 0), Z = (e) => (O) => {
		let [k, A, j] = O, M = Math.round(e[k]);
		e[k] = typeof M == "number" && M >= A ? M : j;
	}, Q = (e) => (e = typeof e == "object" ? e : {}, [
		[
			"hspace",
			40,
			800
		],
		[
			"lanes",
			1,
			1
		],
		[
			"bits",
			1,
			void 0
		],
		[
			"fontsize",
			6,
			14
		]
	].map(Z(e)), e.fontfamily = e.fontfamily || "sans-serif", e.fontweight = e.fontweight || "normal", e.compact = e.compact || !1, e.hflip = e.hflip || !1, e.uneven = e.uneven || !1, e.margin = e.margin || {}, e.offset = e.offset || 0, e);
	O.exports = (e, O) => {
		O = Q(O);
		let k = Y(e);
		O.vspace = O.vspace || (k + 4) * O.fontsize, O.bits === void 0 && (O.bits = X(e));
		let { hspace: N, vspace: P, lanes: F, margin: I, compact: L, fontsize: R, bits: z, label: B, legend: V } = O;
		I.right === void 0 && (B && B.right !== void 0 ? I.right = A(.1 * N) : I.right = 4), I.left === void 0 && (B && B.left !== void 0 ? I.left = A(.1 * N) : I.left = 4), I.top === void 0 ? (I.top = 1.5 * R, I.bottom === void 0 && (I.bottom = R * k + 4)) : I.bottom === void 0 && (I.bottom = 4);
		let H = N, U = P * F;
		L && (U -= (F - 1) * (I.top + I.bottom)), V && (U += 12);
		let K = ["g", M(.5, V ? 12.5 : .5, {
			"text-anchor": "middle",
			"font-size": O.fontsize,
			"font-family": O.fontfamily,
			"font-weight": O.fontweight
		})], q = 0, Z = Math.ceil(z * 1 / F);
		O.mod = Z | 0, e.map((e) => {
			e.lsb = q, e.lsbm = q % Z, q += e.bits, e.msb = q - 1, e.msbm = e.msb % Z;
		});
		for (let k = 0; k < F; k++) O.index = k, K.push(J(e, O));
		return L && K.push(G(e, O)), V && K.push(W(O)), j(H, U).concat([K]);
	};
})), require_render_reg = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_render();
	function A(e, O) {
		return k(O.reg, O.config);
	}
	O.exports = A;
})), require_rec = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k(e, O) {
		let A = 10, j;
		(typeof e[0] == "string" || typeof e[0] == "number") && (j = e[0], A = 25), O.x += A;
		for (let A = 0; A < e.length; A++) if (typeof e[A] == "object") if (Array.isArray(e[A])) {
			let j = O.y;
			O = k(e[A], O), O.groups.push({
				x: O.xx,
				y: j,
				height: O.y - j,
				name: O.name
			});
		} else O.lanes.push(e[A]), O.width.push(O.x), O.y += 1;
		return O.xx = O.x, O.x -= A, O.name = j, O;
	}
	O.exports = k;
})), require_lane = /* @__PURE__ */ __commonJSMin(((e, O) => {
	O.exports = {
		xs: 20,
		ys: 20,
		xg: 120,
		yh0: 0,
		yh1: 0,
		yf0: 0,
		yf1: 0,
		y0: 5,
		yo: 30,
		tgo: -10,
		ym: 15,
		xlabel: 6,
		xmax: 1,
		scale: 1,
		head: {},
		foot: {}
	};
})), require_parse_config = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k(e, O) {
		function k(e) {
			return e > 0 ? Math.round(e) : 1;
		}
		if (O.hscale = 1, O.hscale0 && (O.hscale = O.hscale0), e && e.config && e.config.hscale) {
			let A = Math.round(k(e.config.hscale));
			A > 0 && (A > 100 && (A = 100), O.hscale = A);
		}
		O.yh0 = 0, O.yh1 = 0, O.head = e.head, O.xmin_cfg = 0, O.xmax_cfg = 0xe8d4a51000, e && e.config && e.config.hbounds && e.config.hbounds.length == 2 && (e.config.hbounds[0] = Math.floor(e.config.hbounds[0]), e.config.hbounds[1] = Math.ceil(e.config.hbounds[1]), e.config.hbounds[0] < e.config.hbounds[1] && (O.xmin_cfg = 2 * Math.floor(e.config.hbounds[0]), O.xmax_cfg = 2 * Math.floor(e.config.hbounds[1]))), e && e.head && ((e.head.tick || e.head.tick === 0 || e.head.tock || e.head.tock === 0) && (O.yh0 = 20), (e.head.tick || e.head.tick === 0) && (e.head.tick = e.head.tick + O.xmin_cfg / 2), (e.head.tock || e.head.tock === 0) && (e.head.tock = e.head.tock + O.xmin_cfg / 2), e.head.text && (O.yh1 = 46, O.head.text = e.head.text)), O.yf0 = 0, O.yf1 = 0, O.foot = e.foot, e && e.foot && ((e.foot.tick || e.foot.tick === 0 || e.foot.tock || e.foot.tock === 0) && (O.yf0 = 20), (e.foot.tick || e.foot.tick === 0) && (e.foot.tick = e.foot.tick + O.xmin_cfg / 2), (e.foot.tock || e.foot.tock === 0) && (e.foot.tock = e.foot.tock + O.xmin_cfg / 2), e.foot.text && (O.yf1 = 46, O.foot.text = e.foot.text));
	}
	O.exports = k;
})), require_gen_brick = /* @__PURE__ */ __commonJSMin(((e, O) => {
	O.exports = (e, O, k) => {
		let A = [];
		if (Array.isArray(e) || (e = [e]), e.length === 4) {
			for (let j = 0; j < k; j += 1) {
				A.push(e[0]);
				for (let k = 0; k < O; k += 1) A.push(e[1]);
				A.push(e[2]);
				for (let k = 0; k < O; k += 1) A.push(e[3]);
			}
			return A;
		}
		e.length === 1 && e.push(e[0]), A.push(e[0]);
		for (let j = 0; j < k * (2 * (O + 1)) - 1; j += 1) A.push(e[1]);
		return A;
	};
})), require_gen_first_wave_brick = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_gen_brick(), A = {
		p: [
			"pclk",
			"111",
			"nclk",
			"000"
		],
		n: [
			"nclk",
			"000",
			"pclk",
			"111"
		],
		P: [
			"Pclk",
			"111",
			"nclk",
			"000"
		],
		N: [
			"Nclk",
			"000",
			"pclk",
			"111"
		],
		l: "000",
		L: "000",
		0: "000",
		h: "111",
		H: "111",
		1: "111",
		"=": "vvv-2",
		2: "vvv-2",
		3: "vvv-3",
		4: "vvv-4",
		5: "vvv-5",
		6: "vvv-6",
		7: "vvv-7",
		8: "vvv-8",
		9: "vvv-9",
		d: "ddd",
		u: "uuu",
		z: "zzz",
		default: "xxx"
	};
	O.exports = (e, O, j) => k(A[e] || A.default, O, j);
})), require_gen_wave_brick = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_gen_brick();
	function A(e, O, A) {
		let j = {
			p: "pclk",
			n: "nclk",
			P: "Pclk",
			N: "Nclk",
			h: "pclk",
			l: "nclk",
			H: "Pclk",
			L: "Nclk"
		}, M = {
			0: "0",
			1: "1",
			x: "x",
			d: "d",
			u: "u",
			z: "z",
			"=": "v",
			2: "v",
			3: "v",
			4: "v",
			5: "v",
			6: "v",
			7: "v",
			8: "v",
			9: "v"
		}, N = {
			0: "",
			1: "",
			x: "",
			d: "",
			u: "",
			z: "",
			"=": "-2",
			2: "-2",
			3: "-3",
			4: "-4",
			5: "-5",
			6: "-6",
			7: "-7",
			8: "-8",
			9: "-9"
		}, P = {
			p: "0",
			n: "1",
			P: "0",
			N: "1",
			h: "1",
			l: "0",
			H: "1",
			L: "0",
			0: "0",
			1: "1",
			x: "x",
			d: "d",
			u: "u",
			z: "z",
			"=": "v",
			2: "v",
			3: "v",
			4: "v",
			5: "v",
			6: "v",
			7: "v",
			8: "v",
			9: "v"
		}, F = {
			p: "",
			n: "",
			P: "",
			N: "",
			h: "",
			l: "",
			H: "",
			L: "",
			0: "",
			1: "",
			x: "",
			d: "",
			u: "",
			z: "",
			"=": "-2",
			2: "-2",
			3: "-3",
			4: "-4",
			5: "-5",
			6: "-6",
			7: "-7",
			8: "-8",
			9: "-9"
		}, I = {
			p: "111",
			n: "000",
			P: "111",
			N: "000",
			h: "111",
			l: "000",
			H: "111",
			L: "000",
			0: "000",
			1: "111",
			x: "xxx",
			d: "ddd",
			u: "uuu",
			z: "zzz",
			"=": "vvv-2",
			2: "vvv-2",
			3: "vvv-3",
			4: "vvv-4",
			5: "vvv-5",
			6: "vvv-6",
			7: "vvv-7",
			8: "vvv-8",
			9: "vvv-9"
		}, L = {
			p: "nclk",
			n: "pclk",
			P: "nclk",
			N: "pclk"
		}, R = {
			p: "000",
			n: "111",
			P: "000",
			N: "111"
		}, z = {
			hp: "111",
			Hp: "111",
			ln: "000",
			Ln: "000",
			nh: "111",
			Nh: "111",
			pl: "000",
			Pl: "000"
		}, B = e.split(""), V = I[B[1]], H = j[B[1]];
		if (H === void 0) {
			let e = M[B[1]];
			if (e === void 0) return k("xxx", O, A);
			{
				let j = P[B[0]];
				return k(j === void 0 ? "xxx" : [j + "m" + e + F[B[0]] + N[B[1]], V], O, A);
			}
		} else {
			let j = z[e];
			j !== void 0 && (H = j);
			let M = L[B[1]];
			return k(M === void 0 ? [H, V] : [
				H,
				V,
				M,
				R[B[1]]
			], O, A);
		}
	}
	O.exports = A;
})), require_find_lane_markers = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k(e) {
		let O = 0, k = 0, A = [];
		return e.forEach(function(e) {
			e === "vvv-2" || e === "vvv-3" || e === "vvv-4" || e === "vvv-5" || e === "vvv-6" || e === "vvv-7" || e === "vvv-8" || e === "vvv-9" ? k += 1 : k !== 0 && (A.push(O - (k + 1) / 2), k = 0), O += 1;
		}), k !== 0 && A.push(O - (k + 1) / 2), A;
	}
	O.exports = k;
})), require_parse_wave_lane = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_gen_first_wave_brick(), A = require_gen_wave_brick(), j = require_find_lane_markers();
	function M(e, O, M) {
		let N = e.split(""), P = N.shift(), F = 1;
		for (; N[0] === "." || N[0] === "|";) N.shift(), F += 1;
		let I = [];
		I = I.concat(k(P, O, F));
		let L, R = !1;
		for (; N.length;) {
			for (L = P, P = N.shift(), P === "<" && (R = !0, P = N.shift()), P === ">" && (R = !1, P = N.shift()), F = 1; N[0] === "." || N[0] === "|";) N.shift(), F += 1;
			I = R ? I.concat(A(L + P, 0, F - M.period)) : I.concat(A(L + P, O, F));
		}
		let z = [];
		for (let e = 0; e < M.phase; e += 1) z.push(I.shift());
		let B;
		return z.length > 0 ? (B = j(z).length, j([z[z.length - 1]]).length == 1 && j([I[0]]).length == 1 && --B) : B = 0, [I, B];
	}
	O.exports = M;
})), require_parse_wave_lanes = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_parse_wave_lane();
	function A(e, O) {
		let k = e.data;
		return k === void 0 ? null : (typeof k == "string" && (k = k.trim().split(/\s+/)), k = k.slice(O), k);
	}
	function j(e, O) {
		let j = [], M = [];
		return e.map(function(e) {
			let N = [];
			j.push(N), O.period = e.period || 1, O.phase = (e.phase ? e.phase * 2 : 0) + O.xmin_cfg, M[0] = e.name || " ", M[1] = (e.phase || 0) + O.xmin_cfg / 2;
			let P = null, F;
			if (typeof e.wave == "string") {
				let A = k(e.wave, O.period * O.hscale - 1, O);
				P = A[0], F = A[1];
			}
			N.push(M.slice(0), P, A(e, F), e);
		}), j;
	}
	O.exports = j;
})), require_render_groups = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_lib$1(), A = require_tt();
	function j(e, O, j) {
		let M = ["g"];
		return e.map((e, N) => {
			if (M.push(["path", {
				id: "group_" + N + "_" + O,
				d: "m " + (e.x + .5) + "," + (e.y * j.yo + 3.5 + j.yh0 + j.yh1) + " c -3,0 -5,2 -5,5 l 0," + (e.height * j.yo - 16) + " c 0,3 2,5 5,5",
				style: "stroke:#0041c4;stroke-width:1;fill:none"
			}]), e.name === void 0) return;
			let P = e.x - 10, F = j.yo * (e.y + e.height / 2) + j.yh0 + j.yh1, I = k.parse(e.name);
			M.push([
				"g",
				A(P, F),
				[
					"g",
					{ transform: "rotate(270)" },
					["text", {
						"text-anchor": "middle",
						class: "info",
						"xml:space": "preserve"
					}].concat(I)
				]
			]);
		}), M;
	}
	O.exports = j;
})), require_render_marks = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_lib$1();
	function A(e, O, A) {
		return e[O] && e[O].text ? [["text", {
			x: e.xmax * e.xs / 2,
			y: A,
			fill: "#000",
			"text-anchor": "middle",
			"xml:space": "preserve"
		}].concat(k.parse(e[O].text))] : [];
	}
	function j(e, O, A, j, M, N, P) {
		let F, I = [];
		if (e[O] === void 0 || e[O][A] === void 0) return [];
		let L = e[O][A];
		if (typeof L == "string") L = L.trim().split(/\s+/);
		else if (typeof L == "number" || typeof L == "boolean") {
			F = Number(L), L = [];
			for (let e = 0; e < P; e += 1) L.push(e + F);
		}
		if (Array.isArray(L)) {
			if (L.length === 0) return [];
			if (L.length === 1) if (F = Number(L[0]), isNaN(F)) I = L;
			else for (let e = 0; e < P; e += 1) I[e] = e + F;
			else if (L.length === 2) {
				F = Number(L[0]);
				let e = Number(L[1]), O = L[1].split("."), k = 0;
				if (O.length === 2 && (k = O[1].length), isNaN(F) || isNaN(e)) I = L;
				else {
					F = e * F;
					for (let O = 0; O < P; O += 1) I[O] = (e * O + F).toFixed(k);
				}
			} else I = L;
		} else return [];
		let R = ["g", {
			class: "muted",
			"text-anchor": "middle",
			"xml:space": "preserve"
		}];
		for (let A = 0; A < P; A += 1) e[O] && e[O].every && (A + F) % e[O].every != 0 || R.push(["text", {
			x: A * M + j,
			y: N
		}].concat(k.parse(I[A])));
		return [R];
	}
	function M(e, O, k, M) {
		let N = 2 * k.hscale, P = N * k.xs, F = k.xmax / N, I = e.length * k.yo, L = ["g", { id: "gmarks_" + O }], R = ["g", { style: "stroke:#888;stroke-width:0.5;stroke-dasharray:1,3" }];
		if (!(M && M.config && M.config.marks === !1)) {
			for (let e = 0; e < F + 1; e += 1) R.push(["line", {
				id: "gmark_" + e + "_" + O,
				x1: e * P,
				y1: 0,
				x2: e * P,
				y2: I
			}]);
			L.push(R);
		}
		return L.concat(A(k, "head", k.yh0 ? -33 : -13), A(k, "foot", I + (k.yf0 ? 45 : 25)), j(k, "head", "tick", 0, P, -5, F + 1), j(k, "head", "tock", P / 2, P, -5, F), j(k, "foot", "tick", 0, P, I + 15, F + 1), j(k, "foot", "tock", P / 2, P, I + 15, F));
	}
	O.exports = M;
})), require_arc_shape = /* @__PURE__ */ __commonJSMin(((e, O) => {
	function k(e, O, k) {
		let A = k.x - O.x, j = k.y - O.y, M = (O.x + k.x) / 2, N = (O.y + k.y) / 2, P, F;
		switch (e.shape) {
			case "-": break;
			case "~":
				P = "M " + O.x + "," + O.y + " c " + .7 * A + ", 0 " + .3 * A + ", " + j + " " + A + ", " + j;
				break;
			case "-~":
				P = "M " + O.x + "," + O.y + " c " + .7 * A + ", 0 " + A + ", " + j + " " + A + ", " + j, e.label && (M = O.x + (k.x - O.x) * .75);
				break;
			case "~-":
				P = "M " + O.x + "," + O.y + " c 0, 0 " + .3 * A + ", " + j + " " + A + ", " + j, e.label && (M = O.x + (k.x - O.x) * .25);
				break;
			case "-|":
				P = "m " + O.x + "," + O.y + " " + A + ",0 0," + j, e.label && (M = k.x);
				break;
			case "|-":
				P = "m " + O.x + "," + O.y + " 0," + j + " " + A + ",0", e.label && (M = O.x);
				break;
			case "-|-":
				P = "m " + O.x + "," + O.y + " " + A / 2 + ",0 0," + j + " " + A / 2 + ",0";
				break;
			case "->":
				F = "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none";
				break;
			case "~>":
				F = "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none", P = "M " + O.x + "," + O.y + " c " + .7 * A + ", 0 " + .3 * A + ", " + j + " " + A + ", " + j;
				break;
			case "-~>":
				F = "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none", P = "M " + O.x + "," + O.y + " c " + .7 * A + ", 0 " + A + ", " + j + " " + A + ", " + j, e.label && (M = O.x + (k.x - O.x) * .75);
				break;
			case "~->":
				F = "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none", P = "M " + O.x + "," + O.y + " c 0, 0 " + .3 * A + ", " + j + " " + A + ", " + j, e.label && (M = O.x + (k.x - O.x) * .25);
				break;
			case "-|>":
				F = "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none", P = "m " + O.x + "," + O.y + " " + A + ",0 0," + j, e.label && (M = k.x);
				break;
			case "|->":
				F = "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none", P = "m " + O.x + "," + O.y + " 0," + j + " " + A + ",0", e.label && (M = O.x);
				break;
			case "-|->":
				F = "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none", P = "m " + O.x + "," + O.y + " " + A / 2 + ",0 0," + j + " " + A / 2 + ",0";
				break;
			case "<->":
				F = "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none";
				break;
			case "<~>":
				F = "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none", P = "M " + O.x + "," + O.y + " c " + .7 * A + ", 0 " + .3 * A + ", " + j + " " + A + ", " + j;
				break;
			case "<-~>":
				F = "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none", P = "M " + O.x + "," + O.y + " c " + .7 * A + ", 0 " + A + ", " + j + " " + A + ", " + j, e.label && (M = O.x + (k.x - O.x) * .75);
				break;
			case "<-|>":
				F = "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none", P = "m " + O.x + "," + O.y + " " + A + ",0 0," + j, e.label && (M = k.x);
				break;
			case "<-|->":
				F = "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none", P = "m " + O.x + "," + O.y + " " + A / 2 + ",0 0," + j + " " + A / 2 + ",0";
				break;
			case "+":
				F = "marker-end:url(#tee);marker-start:url(#tee);fill:none;stroke:#00F;stroke-width:1";
				break;
			default: F = "fill:none;stroke:#F00;stroke-width:1";
		}
		return {
			lx: M,
			ly: N,
			d: P,
			style: F
		};
	}
	O.exports = k;
})), char_width_exports = /* @__PURE__ */ __export({
	chars: () => chars,
	default: () => char_width_default,
	other: () => 114
}), chars, char_width_default, init_char_width = __esmMin((() => {
	chars = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		34,
		47,
		74,
		74,
		118,
		89,
		25,
		44,
		44,
		52,
		78,
		37,
		44,
		37,
		37,
		74,
		74,
		74,
		74,
		74,
		74,
		74,
		74,
		74,
		74,
		37,
		37,
		78,
		78,
		78,
		74,
		135,
		89,
		89,
		96,
		96,
		89,
		81,
		103,
		96,
		37,
		67,
		89,
		74,
		109,
		96,
		103,
		89,
		103,
		96,
		89,
		81,
		96,
		89,
		127,
		89,
		87,
		81,
		37,
		37,
		37,
		61,
		74,
		44,
		74,
		74,
		67,
		74,
		74,
		37,
		74,
		74,
		30,
		30,
		67,
		30,
		112,
		74,
		74,
		74,
		74,
		44,
		67,
		37,
		74,
		67,
		95,
		66,
		65,
		67,
		44,
		34,
		44,
		78,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		37,
		43,
		74,
		74,
		74,
		74,
		34,
		74,
		44,
		98,
		49,
		74,
		78,
		0,
		98,
		73,
		53,
		73,
		44,
		44,
		44,
		77,
		71,
		37,
		44,
		44,
		49,
		74,
		111,
		111,
		111,
		81,
		89,
		89,
		89,
		89,
		89,
		89,
		133,
		96,
		89,
		89,
		89,
		89,
		37,
		37,
		37,
		37,
		96,
		96,
		103,
		103,
		103,
		103,
		103,
		78,
		103,
		96,
		96,
		96,
		96,
		87,
		89,
		81,
		74,
		74,
		74,
		74,
		74,
		74,
		118,
		67,
		74,
		74,
		74,
		74,
		36,
		36,
		36,
		36,
		74,
		74,
		74,
		74,
		74,
		74,
		74,
		73,
		81,
		74,
		74,
		74,
		74,
		65,
		74,
		65,
		89,
		74,
		89,
		74,
		89,
		74,
		96,
		67,
		96,
		67,
		96,
		67,
		96,
		67,
		96,
		82,
		96,
		74,
		89,
		74,
		89,
		74,
		89,
		74,
		89,
		74,
		89,
		74,
		103,
		74,
		103,
		74,
		103,
		74,
		103,
		74,
		96,
		74,
		96,
		74,
		37,
		36,
		37,
		36,
		37,
		36,
		37,
		30,
		37,
		36,
		98,
		59,
		67,
		30,
		89,
		67,
		67,
		74,
		30,
		74,
		30,
		74,
		39,
		74,
		44,
		74,
		30,
		96,
		74,
		96,
		74,
		96,
		74,
		80,
		96,
		74,
		103,
		74,
		103,
		74,
		103,
		74,
		133,
		126,
		96,
		44,
		96,
		44,
		96,
		44,
		89,
		67,
		89,
		67,
		89,
		67,
		89,
		67,
		81,
		38,
		81,
		50,
		81,
		37,
		96,
		74,
		96,
		74,
		96,
		74,
		96,
		74,
		96,
		74,
		96,
		74,
		127,
		95,
		87,
		65,
		87,
		81,
		67,
		81,
		67,
		81,
		67,
		30,
		84,
		97,
		91,
		84,
		91,
		84,
		94,
		92,
		73,
		104,
		109,
		91,
		84,
		81,
		84,
		100,
		82,
		76,
		74,
		103,
		91,
		131,
		47,
		40,
		99,
		77,
		37,
		79,
		130,
		100,
		84,
		104,
		114,
		87,
		126,
		101,
		87,
		84,
		93,
		84,
		69,
		84,
		46,
		52,
		82,
		52,
		82,
		114,
		89,
		102,
		96,
		100,
		98,
		91,
		70,
		88,
		88,
		77,
		70,
		85,
		89,
		77,
		67,
		84,
		39,
		65,
		61,
		39,
		189,
		173,
		153,
		111,
		105,
		61,
		123,
		123,
		106,
		89,
		74,
		37,
		30,
		103,
		74,
		96,
		74,
		96,
		74,
		96,
		74,
		96,
		74,
		96,
		74,
		81,
		91,
		81,
		91,
		81,
		130,
		131,
		102,
		84,
		103,
		84,
		87,
		78,
		104,
		81,
		104,
		81,
		88,
		76,
		37,
		189,
		173,
		153,
		103,
		84,
		148,
		90,
		100,
		84,
		89,
		74,
		133,
		118,
		103,
		81
	], char_width_default = {
		chars,
		other: 114
	};
})), require_text_width = /* @__PURE__ */ __commonJSMin(((O, k) => {
	var A = (init_char_width(), __toCommonJS(char_width_exports).default);
	k.exports = function(e, O) {
		O ||= 11;
		let k = 0;
		for (let O = 0; O < e.length; O++) {
			let j = e.charCodeAt(O), M = A.chars[j];
			M === void 0 && (M = A.other), k += M;
		}
		return k * O / 100;
	};
})), require_render_label = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_lib$1(), A = require_tt(), j = require_text_width();
	function M(e, O, M) {
		M ||= 11;
		let N = j(O, M) + 2;
		return [
			"g",
			A(e.x, e.y),
			["rect", {
				x: -(N >> 1),
				y: -(M >> 1),
				width: N,
				height: M,
				style: "fill:#FFF;"
			}],
			["text", {
				"text-anchor": "middle",
				y: Math.round(.3 * M),
				style: "font-size:" + M + "px;"
			}].concat(k.parse(O))
		];
	}
	O.exports = M;
})), require_render_arcs = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_arc_shape(), A = require_render_label(), j = (e, O, k, A) => ["path", {
		id: "gmark_" + e.from + "_" + e.to,
		d: A.d || "M " + O.x + "," + O.y + " " + k.x + "," + k.y,
		style: A.style || "fill:none;stroke:#00F;stroke-width:1"
	}], M = (e, O) => (k, A) => {
		let j = k.node;
		if (e.period = k.period ? k.period : 1, e.phase = (k.phase ? k.phase * 2 : 0) + e.xmin_cfg, j) {
			let k = j.split(""), M = 0;
			for (; k.length;) {
				let j = k.shift();
				j !== "." && (O[j] = {
					x: e.xs * (2 * M * e.period * e.hscale - e.phase) + e.xlabel,
					y: A * e.yo + e.y0 + e.ys * .5
				}), M += 1;
			}
		}
	}, N = (e, O, M) => (N) => {
		let P = N.trim().split(/\s+/), F = {
			words: P,
			label: N.substring(P[0].length).substring(1),
			from: P[0].substr(0, 1),
			to: P[0].substr(-1, 1),
			shape: P[0].slice(1, -1)
		}, I = O[F.from], L = O[F.to];
		if (I && L) {
			let O = k(F, I, L), N = O.lx, P = O.ly;
			e.push(j(F, I, L, O)), F.label && e.push(A({
				x: N,
				y: P
			}, F.label, M));
		}
	};
	function P(e, O, k, j) {
		let P = k && k.config && k.config.arcFontSize ? k.config.arcFontSize : 11, F = ["g", { id: "wavearcs_" + O }], I = {};
		return Array.isArray(e) && (e.map(M(j, I)), Array.isArray(k.edge) && k.edge.map(N(F, I, P)), Object.keys(I).map(function(e) {
			e === e.toLowerCase() && I[e].x > 0 && F.push(A({
				x: I[e].x,
				y: I[e].y
			}, e + "", P));
		})), F;
	}
	O.exports = P;
})), require_render_gaps = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_tt();
	function A(e, O) {
		let A = [], j = (e || "").split(""), M = 0, N = !1;
		for (; j.length;) {
			let e = j.shift();
			e === "<" && (N = !0, e = j.shift()), e === ">" && (N = !1, e = j.shift()), N ? M += 1 : M += 2 * O.period, e === "|" && A.push(["use", k(O.xs * ((M - (N ? 0 : O.period)) * O.hscale - O.phase), 0, { "xlink:href": "#gap" })]);
		}
		return A;
	}
	function j(e, O, j, M) {
		let N = [];
		if (e) {
			let P = e.length, F = (e) => ["line", {
				x1: e,
				x2: e,
				y2: P * M.yo,
				style: "stroke:#000;stroke-width:1px"
			}], I = "fill:none;stroke:#000;stroke-width:1px", L = {
				square: {
					left: ["path", {
						d: "M  2 0 h -4 v " + (P * M.yo - 1) + " h  4",
						style: I
					}],
					right: ["path", {
						d: "M -2 0 h  4 v " + (P * M.yo - 1) + " h -4",
						style: I
					}]
				},
				round: {
					left: ["path", {
						d: "M  2 0 a 4 4 0 0 0 -4 4 v " + (P * M.yo - 9) + " a 4 4 0 0 0  4 4",
						style: I
					}],
					right: ["path", {
						d: "M -2 0 a 4 4 1 0 1  4 4 v " + (P * M.yo - 9) + " a 4 4 1 0 1 -4 4",
						style: I
					}],
					rightLeft: ["path", {
						d: "M -5 0 a 4 4 1 0 1  4 4 v " + (P * M.yo - 9) + " a 4 4 1 0 1 -4 4M  5 0 a 4 4 0 0 0 -4 4 v " + (P * M.yo - 9) + " a 4 4 0 0 0  4 4",
						style: I
					}],
					leftLeft: ["path", {
						d: "M  2 0 a 4 4 0 0 0 -4 4 v " + (P * M.yo - 9) + " a 4 4 0 0 0  4 4M  5 1 a 3 3 0 0 0 -3 3 v " + (P * M.yo - 9) + " a 3 3 0 0 0  3 3",
						style: I
					}],
					rightRight: ["path", {
						d: "M -5 1 a 3 3 1 0 1  3 3 v " + (P * M.yo - 9) + " a 3 3 1 0 1 -3 3M -2 0 a 4 4 1 0 1  4 4 v " + (P * M.yo - 9) + " a 4 4 1 0 1 -4 4",
						style: I
					}]
				}
			}, R = (e) => ["rect", {
				x: -e / 2,
				width: e,
				height: P * M.yo,
				style: "fill:#ffffffcc;stroke:none"
			}];
			if (j && typeof j.gaps == "string") {
				let O = M.hscale * M.xs * 2, A = j.gaps.trim().split(/\s+/);
				for (let j = 0; j < A.length; j++) {
					let I = A[j];
					if (I.match(/^[.]$/)) continue;
					let z = I === I.toLowerCase() ? .5 : 0, B = [];
					switch (I) {
						case "0":
							B = [R(4)];
							break;
						case "1":
							B = [R(4), F(0)];
							break;
						case "|":
							B = [R(4), F(0)];
							break;
						case "2":
							B = [
								R(4),
								F(-2),
								F(2)
							];
							break;
						case "3":
							B = [
								R(6),
								F(-3),
								F(0),
								F(3)
							];
							break;
						case "[":
							B = [R(4), L.square.left];
							break;
						case "]":
							B = [R(4), L.square.right];
							break;
						case "(":
							B = [R(4), L.round.left];
							break;
						case ")":
							B = [R(4), L.round.right];
							break;
						case ")(":
							B = [R(8), L.round.rightLeft];
							break;
						case "((":
							B = [R(8), L.round.leftLeft];
							break;
						case "))":
							B = [R(8), L.round.rightRight];
							break;
						case "s":
							for (let O = 0; O < P; O++) e[O] && e[O].wave && e[O].wave.length > j && B.push(["use", k(2, 5 + M.yo * O, { "xlink:href": "#gap" })]);
							break;
					}
					N.push(["g", k(O * (j + z))].concat(B));
				}
			}
			for (let j = 0; j < P; j++) {
				let P = e[j];
				if (M.period = P.period ? P.period : 1, M.phase = (P.phase ? P.phase * 2 : 0) + M.xmin_cfg, typeof P.wave == "string") {
					let e = A(P.wave, M);
					N = N.concat([["g", k(0, M.y0 + j * M.yo, { id: "wavegap_" + j + "_" + O })].concat(e)]);
				}
			}
		}
		return ["g", { id: "wavegaps_" + O }].concat(N);
	}
	O.exports = j;
})), require_render_piece_wise = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_tt(), A = (e, O, k) => {
		k === void 0 && (k = O);
		let A = 0;
		for (; A < e.length;) {
			switch (e[A].toLowerCase()) {
				case "h":
					for (; A < e.length && !isNaN(e[A + 1]);) e[A + 1] *= O, A++;
					break;
				case "v":
					for (; A < e.length && !isNaN(e[A + 1]);) e[A + 1] *= k, A++;
					break;
				case "m":
				case "l":
				case "t":
					for (; A + 1 < e.length && !isNaN(e[A + 1]);) e[A + 1] *= O, e[A + 2] *= k, A += 2;
					break;
				case "q":
					for (; A + 3 < e.length && !isNaN(e[A + 1]);) e[A + 1] *= O, e[A + 2] *= k, e[A + 3] *= O, e[A + 4] *= k, A += 4;
					break;
				case "a":
					for (; A + 6 < e.length && !isNaN(e[A + 1]);) e[A + 1] *= O, e[A + 2] *= k, e[A + 6] *= O, e[A + 7] *= k, A += 7;
					break;
			}
			A++;
		}
		return e;
	};
	function j(e, O) {
		if (typeof e == "string" && (e = e.trim().split(/[\s,]+/)), Array.isArray(e)) return A(e, 2 * O.xs, -O.ys);
	}
	function M(e, O, A) {
		if (Array.isArray(e)) {
			let M = e[0], N = e[1];
			if (M === "pw" && typeof N == "object") {
				let e = j(N.d, A);
				return [
					"g",
					k(0, A.yo * O + A.ys + A.y0),
					["path", {
						style: "fill:none;stroke:#000;stroke-width:1px;",
						d: e
					}]
				];
			}
		}
	}
	function P(e, O, k) {
		let A = ["g"];
		return e.map((e, O) => {
			let j = e.wave;
			Array.isArray(j) && A.push(M(j, O, k));
		}), A;
	}
	O.exports = P;
})), require_render_lanes = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_render_marks(), A = require_render_arcs(), j = require_render_gaps(), M = require_render_piece_wise();
	function N(e, O, N, P, F, I) {
		return [k(O, e, I, F)].concat(N.res, [
			A(P.lanes, e, F, I),
			j(P.lanes, e, F, I),
			M(P.lanes, e, I)
		]);
	}
	O.exports = N;
})), require_render_over_under = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_tt(), A = {
		1: "#000000",
		2: "#e90000",
		3: "#3edd00",
		4: "#0074cd",
		5: "#ff15db",
		6: "#af9800",
		7: "#00864f",
		8: "#a076ff"
	};
	function j(e, O, j) {
		let M = j.xs, N = j.ys, P = (e.period || 1) * 2 * M, F = -(e.phase || 0) * 2 * M, I, L = O === "under" ? N : 0, R;
		function z(e) {
			return R === void 0 ? [] : [["line", {
				style: "stroke:" + I,
				x1: P * R + 12,
				x2: P * e
			}]];
		}
		if (e[O]) {
			let j = ["g", k(F, L, { style: "stroke-width:3" })], M = e[O].split("");
			return M.map(function(e, k) {
				e !== "." && R !== void 0 && (j = j.concat(z(k)), O === "over" && j.push(["path", {
					style: "stroke:none;fill:" + I,
					d: "m" + (P * k - 7) + " 0 l7 7 v-7 z"
				}])), e === "0" ? R = void 0 : e !== "." && (R = k, I = A[e] || A[1]);
			}), R !== void 0 && (j = j.concat(z(M.length))), [j];
		}
		return [];
	}
	O.exports = j;
})), require_render_wave_lane = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_tt(), A = require_lib$1(), j = require_text_width(), M = require_find_lane_markers(), P = require_render_over_under();
	function F(e, O) {
		let j = [];
		if (e[1] && (e[1].map(function(e, A) {
			j.push(["use", k(A * O.xs, 0, { "xlink:href": "#" + e })]);
		}), e[2] && e[2].length)) {
			let k = M(e[1]);
			k.length && k.map(function(k, M) {
				e[2] && e[2][M] !== void 0 && j.push(["text", {
					x: k * O.xs + O.xlabel,
					y: O.ym,
					"text-anchor": "middle",
					"xml:space": "preserve"
				}].concat(A.parse(e[2][M])));
			});
		}
		return j;
	}
	function I(e, O, M) {
		let N = 0, I = [], L = [];
		return e.map(function(e, R) {
			let z = e[0][0];
			if (z) {
				let B = e[0][1];
				B = B > 0 ? Math.ceil(2 * B) - 2 * B : -2 * B, L.push([
					"g",
					k(0, M.y0 + R * M.yo, { id: "wavelane_" + R + "_" + O }),
					["text", {
						x: M.tgo,
						y: M.ym,
						class: "info",
						"text-anchor": "end",
						"xml:space": "preserve"
					}].concat(A.parse(z)),
					["g", k(B * M.xs, 0, { id: "wavelane_draw_" + R + "_" + O })].concat(F(e, M))
				].concat(P(e[3], "over", M), P(e[3], "under", M))), N = Math.max(N, (e[1] || []).length), I.push(z.textWidth ? z.textWidth : z.charCodeAt ? j(z, 11) : 0);
			}
		}), M.xmax = Math.min(N, M.xmax_cfg - M.xmin_cfg), M.xg = 20, {
			glengths: I,
			res: L
		};
	}
	O.exports = I;
})), require_w3 = /* @__PURE__ */ __commonJSMin(((e, O) => {
	O.exports = {
		svg: "http://www.w3.org/2000/svg",
		xlink: "http://www.w3.org/1999/xlink",
		xmlns: "http://www.w3.org/XML/1998/namespace"
	};
})), require_insert_svg_template = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_tt(), A = require_w3();
	function j(e, O, j, M, N, P, F, I) {
		let L = Object.keys(M), R = M.default || M[L[0]];
		O && O.config && O.config.skin && M[O.config.skin] && (R = M[O.config.skin]);
		let z = I ? [
			"svg",
			{
				id: "svg",
				xmlns: A.svg,
				"xmlns:xlink": A.xlink
			},
			["g"]
		] : R, B = j.xg + j.xs * (j.xmax + 1), V = N.length * j.yo + j.yh0 + j.yh1 + j.yf0 + j.yf1, H = z[z.length - 1];
		H[1] = { id: "waves_" + e }, H[2] = ["rect", {
			width: B,
			height: V,
			style: "stroke:none;fill:white"
		}], H[3] = ["g", k(j.xg + .5, j.yh0 + j.yh1 + .5, { id: "lanes_" + e })].concat(P), H[4] = [
			"g",
			{ id: "groups_" + e },
			F
		];
		let U = z[1];
		return U.id = "svgcontent_" + e, U.height = V, U.width = B, U.viewBox = "0 0 " + B + " " + V, U.overflow = "hidden", z;
	}
	O.exports = j;
})), require_render_signal = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_rec(), A = require_lane(), j = require_parse_config(), M = require_parse_wave_lanes(), N = require_render_groups(), P = require_render_lanes(), F = require_render_wave_lane(), I = require_insert_svg_template();
	function L(e, O, k, A) {
		if (e !== 0) return;
		let j = Object.keys(A);
		if (j.length === 0) throw Error("no skins found");
		let M = A.default || A[j[0]];
		O && O.config && O.config.skin && A[O.config.skin] && (M = A[O.config.skin]);
		let N = M[3][1][2][1];
		k.xs = Number(N.width), k.ys = Number(N.height), k.xlabel = Number(N.x), k.ym = Number(N.y);
	}
	function R(e, O, R, z) {
		L(e, O, A, R), j(O, A);
		let B = k(O.signal, {
			x: 0,
			y: 0,
			xmax: 0,
			width: [],
			lanes: [],
			groups: []
		}), V = M(B.lanes, A), H = F(V, e, A), U = N(B.groups, e, A), W = H.glengths.reduce((e, O, k) => Math.max(e, O + B.width[k]), 0);
		return A.xg = Math.ceil((W - A.tgo) / A.xs) * A.xs, I(e, O, A, R, V, P(e, V, H, B, O, A), U, z);
	}
	O.exports = R;
})), require_render_any = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_render_assign(), A = require_render_reg(), j = require_render_signal();
	function M(e, O, M, N) {
		let P = O.signal ? j(e, O, M, N) : O.assign ? k(e, O) : O.reg ? A(e, O) : ["div", {}];
		return P[1].class = "WaveDrom", P;
	}
	O.exports = M;
})), require_create_element = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_stringify(), A = require_w3();
	function j(e) {
		e[1].xmlns = A.svg, e[1]["xmlns:xlink"] = A.xlink;
		let O = k(e);
		return new DOMParser().parseFromString(O, "image/svg+xml").firstChild;
	}
	O.exports = j;
})), require_render_wave_element = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_render_any(), A = require_create_element();
	function j(e, O, j, M, N) {
		for (; j.childNodes.length;) j.removeChild(j.childNodes[0]);
		j.insertBefore(A(k(e, O, M, N)), null);
	}
	O.exports = j;
})), require_render_wave_form = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_render_wave_element();
	function A(e, O, A, j) {
		k(e, O, document.getElementById(A + e), window.WaveSkin, j);
	}
	O.exports = A;
})), require_process_all = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_eva(), A = require_append_save_as_dialog(), j = require_render_wave_form();
	function M() {
		let e = 0, O = document.querySelectorAll("*");
		for (let k = 0; k < O.length; k++) if (O.item(k).type && O.item(k).type.toLowerCase() === "wavedrom") {
			O.item(k).setAttribute("id", "InputJSON_" + e);
			let A = document.createElement("div");
			A.id = "WaveDrom_Display_" + e, O.item(k).parentNode.insertBefore(A, O.item(k)), e += 1;
		}
		let M = !1;
		for (let O = 0; O < e; O += 1) {
			let e = k("InputJSON_" + O);
			j(O, e, "WaveDrom_Display_", M), e && e.signal && !M && (M = !0), A(O, "WaveDrom_Display_");
		}
		document.head.insertAdjacentHTML("beforeend", "<style type=\"text/css\">div.wavedromMenu{position:fixed;border:solid 1pt#CCCCCC;background-color:white;box-shadow:0px 10px 20px #808080;cursor:default;margin:0px;padding:0px;}div.wavedromMenu>ul{margin:0px;padding:0px;}div.wavedromMenu>ul>li{padding:2px 10px;list-style:none;}div.wavedromMenu>ul>li:hover{background-color:#b5d5ff;}</style>");
	}
	O.exports = M;
})), require_editor_refresh = /* @__PURE__ */ __commonJSMin(((e, O) => {
	var k = require_eva(), A = require_render_wave_form();
	function j() {
		A(0, k("InputJSON_0"), "WaveDrom_Display_");
	}
	O.exports = j;
})), require_lib = /* @__PURE__ */ __commonJSMin(((O) => {
	var k = require_stringify(), A = require_tt(), F = (init_package(), __toCommonJS(package_exports).default), I = require_process_all(), L = require_eva(), R = require_render_wave_form(), z = require_render_wave_element(), B = require_render_any(), V = require_editor_refresh(), H = require_default();
	O.version = F.version, O.processAll = I, O.eva = L, O.renderAny = B, O.renderWaveForm = R, O.renderWaveElement = z, O.editorRefresh = V, O.waveSkin = H, O.onml = {
		stringify: k,
		tt: A
	};
}));
export default require_lib();
