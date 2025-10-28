import { t as __commonJSMin } from "./chunk-DgPTj83v.js";
var require_constants = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, e.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, e.htmlCtrlEntityRegex = /&(newline|tab);/gi, e.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, e.urlSchemeRegex = /^.+(:|&colon;)/gim, e.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, e.relativeFirstCharacters = [".", "/"], e.BLANK_URL = "about:blank";
})), require_dist = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = require_constants();
	function r(e) {
		return n.relativeFirstCharacters.indexOf(e[0]) > -1;
	}
	function i(e) {
		return e.replace(n.ctrlCharactersRegex, "").replace(n.htmlEntitiesRegex, function(e, t) {
			return String.fromCharCode(t);
		});
	}
	function a(e) {
		return URL.canParse(e);
	}
	function o(e) {
		try {
			return decodeURIComponent(e);
		} catch {
			return e;
		}
	}
	function s(e) {
		if (!e) return n.BLANK_URL;
		var t, s = o(e.trim());
		do
			s = i(s).replace(n.htmlCtrlEntityRegex, "").replace(n.ctrlCharactersRegex, "").replace(n.whitespaceEscapeCharsRegex, "").trim(), s = o(s), t = s.match(n.ctrlCharactersRegex) || s.match(n.htmlEntitiesRegex) || s.match(n.htmlCtrlEntityRegex) || s.match(n.whitespaceEscapeCharsRegex);
		while (t && t.length > 0);
		var c = s;
		if (!c) return n.BLANK_URL;
		if (r(c)) return c;
		var l = c.trimStart(), u = l.match(n.urlSchemeRegex);
		if (!u) return c;
		var d = u[0].toLowerCase().trim();
		if (n.invalidProtocolRegex.test(d)) return n.BLANK_URL;
		var f = l.replace(/\\/g, "/");
		if (d === "mailto:" || d.includes("://")) return f;
		if (d === "http:" || d === "https:") {
			if (!a(f)) return n.BLANK_URL;
			var p = new URL(f);
			return p.protocol = p.protocol.toLowerCase(), p.hostname = p.hostname.toLowerCase(), p.toString();
		}
		return f;
	}
	e.sanitizeUrl = s;
}));
export { require_dist as t };

//# sourceMappingURL=dist-CUheKjZU.js.map