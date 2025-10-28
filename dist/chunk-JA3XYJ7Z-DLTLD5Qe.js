import { a as decodeEntities } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { I as sanitizeText, N as renderKatexSanitized, O as hasKatex, s as common_default, y as getConfig } from "./chunk-ABZYJK2D-CASc1KXE.js";
var defaultIconDimensions = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), defaultIconTransformations = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), defaultIconProps = Object.freeze({
	...defaultIconDimensions,
	...defaultIconTransformations
}), defaultExtendedIconProps = Object.freeze({
	...defaultIconProps,
	body: "",
	hidden: !1
}), defaultIconSizeCustomisations = Object.freeze({
	width: null,
	height: null
}), defaultIconCustomisations = Object.freeze({
	...defaultIconSizeCustomisations,
	...defaultIconTransformations
}), stringToIcon = (e, o, s, c = "") => {
	let l = e.split(":");
	if (e.slice(0, 1) === "@") {
		if (l.length < 2 || l.length > 3) return null;
		c = l.shift().slice(1);
	}
	if (l.length > 3 || !l.length) return null;
	if (l.length > 1) {
		let e = l.pop(), s = l.pop(), u = {
			provider: l.length > 0 ? l[0] : c,
			prefix: s,
			name: e
		};
		return o && !validateIconName(u) ? null : u;
	}
	let u = l[0], d = u.split("-");
	if (d.length > 1) {
		let e = {
			provider: c,
			prefix: d.shift(),
			name: d.join("-")
		};
		return o && !validateIconName(e) ? null : e;
	}
	if (s && c === "") {
		let e = {
			provider: c,
			prefix: "",
			name: u
		};
		return o && !validateIconName(e, s) ? null : e;
	}
	return null;
}, validateIconName = (e, o) => e ? !!((o && e.prefix === "" || e.prefix) && e.name) : !1;
function mergeIconTransformations(e, o) {
	let s = {};
	!e.hFlip != !o.hFlip && (s.hFlip = !0), !e.vFlip != !o.vFlip && (s.vFlip = !0);
	let c = ((e.rotate || 0) + (o.rotate || 0)) % 4;
	return c && (s.rotate = c), s;
}
function mergeIconData(e, o) {
	let s = mergeIconTransformations(e, o);
	for (let c in defaultExtendedIconProps) c in defaultIconTransformations ? c in e && !(c in s) && (s[c] = defaultIconTransformations[c]) : c in o ? s[c] = o[c] : c in e && (s[c] = e[c]);
	return s;
}
function getIconsTree(e, o) {
	let s = e.icons, c = e.aliases || Object.create(null), l = Object.create(null);
	function u(e) {
		if (s[e]) return l[e] = [];
		if (!(e in l)) {
			l[e] = null;
			let o = c[e] && c[e].parent, s = o && u(o);
			s && (l[e] = [o].concat(s));
		}
		return l[e];
	}
	return (o || Object.keys(s).concat(Object.keys(c))).forEach(u), l;
}
function internalGetIconData(e, o, s) {
	let c = e.icons, l = e.aliases || Object.create(null), u = {};
	function d(e) {
		u = mergeIconData(c[e] || l[e], u);
	}
	return d(o), s.forEach(d), mergeIconData(e, u);
}
function getIconData(e, o) {
	if (e.icons[o]) return internalGetIconData(e, o, []);
	let s = getIconsTree(e, [o])[o];
	return s ? internalGetIconData(e, o, s) : null;
}
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g, unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(e, o, s) {
	if (o === 1) return e;
	if (s ||= 100, typeof e == "number") return Math.ceil(e * o * s) / s;
	if (typeof e != "string") return e;
	let c = e.split(unitsSplit);
	if (c === null || !c.length) return e;
	let l = [], u = c.shift(), d = unitsTest.test(u);
	for (;;) {
		if (d) {
			let e = parseFloat(u);
			isNaN(e) ? l.push(u) : l.push(Math.ceil(e * o * s) / s);
		} else l.push(u);
		if (u = c.shift(), u === void 0) return l.join("");
		d = !d;
	}
}
function splitSVGDefs(e, o = "defs") {
	let s = "", c = e.indexOf("<" + o);
	for (; c >= 0;) {
		let l = e.indexOf(">", c), u = e.indexOf("</" + o);
		if (l === -1 || u === -1) break;
		let d = e.indexOf(">", u);
		if (d === -1) break;
		s += e.slice(l + 1, u).trim(), e = e.slice(0, c).trim() + e.slice(d + 1);
	}
	return {
		defs: s,
		content: e
	};
}
function mergeDefsAndContent(e, o) {
	return e ? "<defs>" + e + "</defs>" + o : o;
}
function wrapSVGContent(e, o, s) {
	let c = splitSVGDefs(e);
	return mergeDefsAndContent(c.defs, o + c.content + s);
}
var isUnsetKeyword = (e) => e === "unset" || e === "undefined" || e === "none";
function iconToSVG(e, o) {
	let s = {
		...defaultIconProps,
		...e
	}, c = {
		...defaultIconCustomisations,
		...o
	}, l = {
		left: s.left,
		top: s.top,
		width: s.width,
		height: s.height
	}, u = s.body;
	[s, c].forEach((e) => {
		let o = [], s = e.hFlip, c = e.vFlip, d = e.rotate;
		s ? c ? d += 2 : (o.push("translate(" + (l.width + l.left).toString() + " " + (0 - l.top).toString() + ")"), o.push("scale(-1 1)"), l.top = l.left = 0) : c && (o.push("translate(" + (0 - l.left).toString() + " " + (l.height + l.top).toString() + ")"), o.push("scale(1 -1)"), l.top = l.left = 0);
		let f;
		switch (d < 0 && (d -= Math.floor(d / 4) * 4), d %= 4, d) {
			case 1:
				f = l.height / 2 + l.top, o.unshift("rotate(90 " + f.toString() + " " + f.toString() + ")");
				break;
			case 2:
				o.unshift("rotate(180 " + (l.width / 2 + l.left).toString() + " " + (l.height / 2 + l.top).toString() + ")");
				break;
			case 3:
				f = l.width / 2 + l.left, o.unshift("rotate(-90 " + f.toString() + " " + f.toString() + ")");
				break;
		}
		d % 2 == 1 && (l.left !== l.top && (f = l.left, l.left = l.top, l.top = f), l.width !== l.height && (f = l.width, l.width = l.height, l.height = f)), o.length && (u = wrapSVGContent(u, "<g transform=\"" + o.join(" ") + "\">", "</g>"));
	});
	let d = c.width, f = c.height, p = l.width, g = l.height, O, R;
	d === null ? (R = f === null ? "1em" : f === "auto" ? g : f, O = calculateSize(R, p / g)) : (O = d === "auto" ? p : d, R = f === null ? calculateSize(O, g / p) : f === "auto" ? g : f);
	let B = {}, Y = (e, o) => {
		isUnsetKeyword(o) || (B[e] = o.toString());
	};
	Y("width", O), Y("height", R);
	let Z = [
		l.left,
		l.top,
		p,
		g
	];
	return B.viewBox = Z.join(" "), {
		attributes: B,
		viewBox: Z,
		body: u
	};
}
var regex = /\sid="(\S+)"/g, randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), counter = 0;
function replaceIDs(e, o = randomPrefix) {
	let s = [], c;
	for (; c = regex.exec(e);) s.push(c[1]);
	if (!s.length) return e;
	let l = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return s.forEach((s) => {
		let c = typeof o == "function" ? o(s) : o + (counter++).toString(), u = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + u + ")([\")]|\\.[a-z])", "g"), "$1" + c + l + "$3");
	}), e = e.replace(new RegExp(l, "g"), ""), e;
}
function iconToHTML(e, o) {
	let s = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in o) s += " " + e + "=\"" + o[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + s + ">" + e + "</svg>";
}
function L() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var T = L();
function G(e) {
	T = e;
}
var I = { exec: () => null };
function h(e, o = "") {
	let s = typeof e == "string" ? e : e.source, c = {
		replace: (e, o) => {
			let l = typeof o == "string" ? o : o.source;
			return l = l.replace(m.caret, "$1"), s = s.replace(e, l), c;
		},
		getRegex: () => new RegExp(s, o)
	};
	return c;
}
var m = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceTabs: /^\t+/,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] /,
	listReplaceTask: /^\[[ xX]\] +/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => /* @__PURE__ */ RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
	hrRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
	fencesBeginRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
	headingBeginRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, be = /^(?:[ \t]*(?:\n|$))+/, Re = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Te = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, E = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Oe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, F = /(?:[*+-]|\d{1,9}[.)])/, ie = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, oe = h(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), we = h(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ye = /^[^\n]+/, Q = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Pe = h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Se = h(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, F).getRegex(), v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, $e = h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ae = h(j).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), K = {
	blockquote: h(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ae).getRegex(),
	code: Re,
	def: Pe,
	fences: Te,
	heading: Oe,
	hr: E,
	html: $e,
	lheading: oe,
	list: Se,
	newline: be,
	paragraph: ae,
	table: I,
	text: ye
}, re = h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), Le = {
	...K,
	lheading: we,
	table: re,
	paragraph: h(j).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex()
}, Me = {
	...K,
	html: h("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: I,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: h(j).replace("hr", E).replace("heading", " *#{1,6} *[^\n]").replace("lheading", oe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ze = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ae = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, le = /^( {2,}|\\)\n(?!\s*$)/, Ie = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, D = /[\p{P}\p{S}]/u, W = /[\s\p{P}\p{S}]/u, ue = /[^\s\p{P}\p{S}]/u, Ee = h(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex(), pe = /(?!~)[\p{P}\p{S}]/u, Ce = /(?!~)[\s\p{P}\p{S}]/u, Be = /(?:[^\s\p{P}\p{S}]|~)/u, qe = h(/link|code|html/, "g").replace("link", RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)", "")).replace("code", RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)", "")).replace("html", /<(?! )[^<>]*?>/).getRegex(), ce = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, ve = h(ce, "u").replace(/punct/g, D).getRegex(), De = h(ce, "u").replace(/punct/g, pe).getRegex(), he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", He = h(he, "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex(), Ze = h(he, "gu").replace(/notPunctSpace/g, Be).replace(/punctSpace/g, Ce).replace(/punct/g, pe).getRegex(), Ge = h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex(), Ne = h(/\\(punct)/, "gu").replace(/punct/g, D).getRegex(), Fe = h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), je = h(U).replace("(?:-->|$)", "-->").getRegex(), Qe = h("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", je).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Ue = h(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), de = h(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex(), ke = h(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex(), Ke = h("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex(), se = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, X = {
	_backpedal: I,
	anyPunctuation: Ne,
	autolink: Fe,
	blockSkip: qe,
	br: le,
	code: Ae,
	del: I,
	emStrongLDelim: ve,
	emStrongRDelimAst: He,
	emStrongRDelimUnd: Ge,
	escape: ze,
	link: Ue,
	nolink: ke,
	punctuation: Ee,
	reflink: de,
	reflinkSearch: Ke,
	tag: Qe,
	text: Ie,
	url: I
}, We = {
	...X,
	link: h(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(),
	reflink: h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex()
}, N = {
	...X,
	emStrongRDelimAst: Ze,
	emStrongLDelim: De,
	url: h(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", se).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: h(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", se).getRegex()
}, Xe = {
	...N,
	br: h(le).replace("{2,}", "*").getRegex(),
	text: h(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, C = {
	normal: K,
	gfm: Le,
	pedantic: Me
}, M = {
	normal: X,
	gfm: N,
	breaks: Xe,
	pedantic: We
}, Je = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, ge = (e) => Je[e];
function w(e, o) {
	if (o) {
		if (m.escapeTest.test(e)) return e.replace(m.escapeReplace, ge);
	} else if (m.escapeTestNoEncode.test(e)) return e.replace(m.escapeReplaceNoEncode, ge);
	return e;
}
function J(e) {
	try {
		e = encodeURI(e).replace(m.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function V(e, o) {
	let s = e.replace(m.findPipe, (e, o, s) => {
		let c = !1, l = o;
		for (; --l >= 0 && s[l] === "\\";) c = !c;
		return c ? "|" : " |";
	}).split(m.splitPipe), c = 0;
	if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), o) if (s.length > o) s.splice(o);
	else for (; s.length < o;) s.push("");
	for (; c < s.length; c++) s[c] = s[c].trim().replace(m.slashPipe, "|");
	return s;
}
function z(e, o, s) {
	let c = e.length;
	if (c === 0) return "";
	let l = 0;
	for (; l < c;) {
		let u = e.charAt(c - l - 1);
		if (u === o && !s) l++;
		else if (u !== o && s) l++;
		else break;
	}
	return e.slice(0, c - l);
}
function fe(e, o) {
	if (e.indexOf(o[1]) === -1) return -1;
	let s = 0;
	for (let c = 0; c < e.length; c++) if (e[c] === "\\") c++;
	else if (e[c] === o[0]) s++;
	else if (e[c] === o[1] && (s--, s < 0)) return c;
	return s > 0 ? -2 : -1;
}
function me(e, o, s, c, l) {
	let u = o.href, d = o.title || null, f = e[1].replace(l.other.outputLinkReplace, "$1");
	c.state.inLink = !0;
	let p = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: s,
		href: u,
		title: d,
		text: f,
		tokens: c.inlineTokens(f)
	};
	return c.state.inLink = !1, p;
}
function Ve(e, o, s) {
	let c = e.match(s.other.indentCodeCompensation);
	if (c === null) return o;
	let l = c[1];
	return o.split("\n").map((e) => {
		let o = e.match(s.other.beginningSpace);
		if (o === null) return e;
		let [c] = o;
		return c.length >= l.length ? e.slice(l.length) : e;
	}).join("\n");
}
var y = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || T;
	}
	space(e) {
		let o = this.rules.block.newline.exec(e);
		if (o && o[0].length > 0) return {
			type: "space",
			raw: o[0]
		};
	}
	code(e) {
		let o = this.rules.block.code.exec(e);
		if (o) {
			let e = o[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: o[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : z(e, "\n")
			};
		}
	}
	fences(e) {
		let o = this.rules.block.fences.exec(e);
		if (o) {
			let e = o[0], s = Ve(e, o[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: o[2] ? o[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : o[2],
				text: s
			};
		}
	}
	heading(e) {
		let o = this.rules.block.heading.exec(e);
		if (o) {
			let e = o[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let o = z(e, "#");
				(this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (e = o.trim());
			}
			return {
				type: "heading",
				raw: o[0],
				depth: o[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let o = this.rules.block.hr.exec(e);
		if (o) return {
			type: "hr",
			raw: z(o[0], "\n")
		};
	}
	blockquote(e) {
		let o = this.rules.block.blockquote.exec(e);
		if (o) {
			let e = z(o[0], "\n").split("\n"), s = "", c = "", l = [];
			for (; e.length > 0;) {
				let o = !1, u = [], d;
				for (d = 0; d < e.length; d++) if (this.rules.other.blockquoteStart.test(e[d])) u.push(e[d]), o = !0;
				else if (!o) u.push(e[d]);
				else break;
				e = e.slice(d);
				let f = u.join("\n"), p = f.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				s = s ? `${s}
${f}` : f, c = c ? `${c}
${p}` : p;
				let g = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(p, l, !0), this.lexer.state.top = g, e.length === 0) break;
				let O = l.at(-1);
				if (O?.type === "code") break;
				if (O?.type === "blockquote") {
					let o = O, u = o.raw + "\n" + e.join("\n"), d = this.blockquote(u);
					l[l.length - 1] = d, s = s.substring(0, s.length - o.raw.length) + d.raw, c = c.substring(0, c.length - o.text.length) + d.text;
					break;
				} else if (O?.type === "list") {
					let o = O, u = o.raw + "\n" + e.join("\n"), d = this.list(u);
					l[l.length - 1] = d, s = s.substring(0, s.length - O.raw.length) + d.raw, c = c.substring(0, c.length - o.raw.length) + d.raw, e = u.substring(l.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: s,
				tokens: l,
				text: c
			};
		}
	}
	list(e) {
		let o = this.rules.block.list.exec(e);
		if (o) {
			let s = o[1].trim(), c = s.length > 1, l = {
				type: "list",
				raw: "",
				ordered: c,
				start: c ? +s.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			s = c ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = c ? s : "[*+-]");
			let u = this.rules.other.listItemRegex(s), d = !1;
			for (; e;) {
				let s = !1, c = "", f = "";
				if (!(o = u.exec(e)) || this.rules.block.hr.test(e)) break;
				c = o[0], e = e.substring(c.length);
				let p = o[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (e) => " ".repeat(3 * e.length)), g = e.split("\n", 1)[0], O = !p.trim(), A = 0;
				if (this.options.pedantic ? (A = 2, f = p.trimStart()) : O ? A = o[1].length + 1 : (A = o[2].search(this.rules.other.nonSpaceChar), A = A > 4 ? 1 : A, f = p.slice(A), A += o[1].length), O && this.rules.other.blankLine.test(g) && (c += g + "\n", e = e.substring(g.length + 1), s = !0), !s) {
					let o = this.rules.other.nextBulletRegex(A), s = this.rules.other.hrRegex(A), l = this.rules.other.fencesBeginRegex(A), u = this.rules.other.headingBeginRegex(A), d = this.rules.other.htmlBeginRegex(A);
					for (; e;) {
						let R = e.split("\n", 1)[0], B;
						if (g = R, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), B = g) : B = g.replace(this.rules.other.tabCharGlobal, "    "), l.test(g) || u.test(g) || d.test(g) || o.test(g) || s.test(g)) break;
						if (B.search(this.rules.other.nonSpaceChar) >= A || !g.trim()) f += "\n" + B.slice(A);
						else {
							if (O || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || l.test(p) || u.test(p) || s.test(p)) break;
							f += "\n" + g;
						}
						!O && !g.trim() && (O = !0), c += R + "\n", e = e.substring(R.length + 1), p = B.slice(A);
					}
				}
				l.loose || (d ? l.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (d = !0));
				let R = null, B;
				this.options.gfm && (R = this.rules.other.listIsTask.exec(f), R && (B = R[0] !== "[ ] ", f = f.replace(this.rules.other.listReplaceTask, ""))), l.items.push({
					type: "list_item",
					raw: c,
					task: !!R,
					checked: B,
					loose: !1,
					text: f,
					tokens: []
				}), l.raw += c;
			}
			let f = l.items.at(-1);
			if (f) f.raw = f.raw.trimEnd(), f.text = f.text.trimEnd();
			else return;
			l.raw = l.raw.trimEnd();
			for (let e = 0; e < l.items.length; e++) if (this.lexer.state.top = !1, l.items[e].tokens = this.lexer.blockTokens(l.items[e].text, []), !l.loose) {
				let o = l.items[e].tokens.filter((e) => e.type === "space");
				l.loose = o.length > 0 && o.some((e) => this.rules.other.anyLine.test(e.raw));
			}
			if (l.loose) for (let e = 0; e < l.items.length; e++) l.items[e].loose = !0;
			return l;
		}
	}
	html(e) {
		let o = this.rules.block.html.exec(e);
		if (o) return {
			type: "html",
			block: !0,
			raw: o[0],
			pre: o[1] === "pre" || o[1] === "script" || o[1] === "style",
			text: o[0]
		};
	}
	def(e) {
		let o = this.rules.block.def.exec(e);
		if (o) {
			let e = o[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = o[2] ? o[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", c = o[3] ? o[3].substring(1, o[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : o[3];
			return {
				type: "def",
				tag: e,
				raw: o[0],
				href: s,
				title: c
			};
		}
	}
	table(e) {
		let o = this.rules.block.table.exec(e);
		if (!o || !this.rules.other.tableDelimiter.test(o[2])) return;
		let s = V(o[1]), c = o[2].replace(this.rules.other.tableAlignChars, "").split("|"), l = o[3]?.trim() ? o[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], u = {
			type: "table",
			raw: o[0],
			header: [],
			align: [],
			rows: []
		};
		if (s.length === c.length) {
			for (let e of c) this.rules.other.tableAlignRight.test(e) ? u.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? u.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? u.align.push("left") : u.align.push(null);
			for (let e = 0; e < s.length; e++) u.header.push({
				text: s[e],
				tokens: this.lexer.inline(s[e]),
				header: !0,
				align: u.align[e]
			});
			for (let e of l) u.rows.push(V(e, u.header.length).map((e, o) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: u.align[o]
			})));
			return u;
		}
	}
	lheading(e) {
		let o = this.rules.block.lheading.exec(e);
		if (o) return {
			type: "heading",
			raw: o[0],
			depth: o[2].charAt(0) === "=" ? 1 : 2,
			text: o[1],
			tokens: this.lexer.inline(o[1])
		};
	}
	paragraph(e) {
		let o = this.rules.block.paragraph.exec(e);
		if (o) {
			let e = o[1].charAt(o[1].length - 1) === "\n" ? o[1].slice(0, -1) : o[1];
			return {
				type: "paragraph",
				raw: o[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let o = this.rules.block.text.exec(e);
		if (o) return {
			type: "text",
			raw: o[0],
			text: o[0],
			tokens: this.lexer.inline(o[0])
		};
	}
	escape(e) {
		let o = this.rules.inline.escape.exec(e);
		if (o) return {
			type: "escape",
			raw: o[0],
			text: o[1]
		};
	}
	tag(e) {
		let o = this.rules.inline.tag.exec(e);
		if (o) return !this.lexer.state.inLink && this.rules.other.startATag.test(o[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(o[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(o[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(o[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: o[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: o[0]
		};
	}
	link(e) {
		let o = this.rules.inline.link.exec(e);
		if (o) {
			let e = o[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let o = z(e.slice(0, -1), "\\");
				if ((e.length - o.length) % 2 == 0) return;
			} else {
				let e = fe(o[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let s = (o[0].indexOf("!") === 0 ? 5 : 4) + o[1].length + e;
					o[2] = o[2].substring(0, e), o[0] = o[0].substring(0, s).trim(), o[3] = "";
				}
			}
			let s = o[2], c = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(s);
				e && (s = e[1], c = e[3]);
			} else c = o[3] ? o[3].slice(1, -1) : "";
			return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (s = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? s.slice(1) : s.slice(1, -1)), me(o, {
				href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
				title: c && c.replace(this.rules.inline.anyPunctuation, "$1")
			}, o[0], this.lexer, this.rules);
		}
	}
	reflink(e, o) {
		let s;
		if ((s = this.rules.inline.reflink.exec(e)) || (s = this.rules.inline.nolink.exec(e))) {
			let e = o[(s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = s[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return me(s, e, s[0], this.lexer, this.rules);
		}
	}
	emStrong(e, o, s = "") {
		let c = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!c || c[3] && s.match(this.rules.other.unicodeAlphaNumeric)) && (!(c[1] || c[2]) || !s || this.rules.inline.punctuation.exec(s))) {
			let s = [...c[0]].length - 1, l, u, d = s, f = 0, p = c[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (p.lastIndex = 0, o = o.slice(-1 * e.length + s); (c = p.exec(o)) != null;) {
				if (l = c[1] || c[2] || c[3] || c[4] || c[5] || c[6], !l) continue;
				if (u = [...l].length, c[3] || c[4]) {
					d += u;
					continue;
				} else if ((c[5] || c[6]) && s % 3 && !((s + u) % 3)) {
					f += u;
					continue;
				}
				if (d -= u, d > 0) continue;
				u = Math.min(u, u + d + f);
				let o = [...c[0]][0].length, p = e.slice(0, s + c.index + o + u);
				if (Math.min(s, u) % 2) {
					let e = p.slice(1, -1);
					return {
						type: "em",
						raw: p,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let g = p.slice(2, -2);
				return {
					type: "strong",
					raw: p,
					text: g,
					tokens: this.lexer.inlineTokens(g)
				};
			}
		}
	}
	codespan(e) {
		let o = this.rules.inline.code.exec(e);
		if (o) {
			let e = o[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(e), c = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return s && c && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: o[0],
				text: e
			};
		}
	}
	br(e) {
		let o = this.rules.inline.br.exec(e);
		if (o) return {
			type: "br",
			raw: o[0]
		};
	}
	del(e) {
		let o = this.rules.inline.del.exec(e);
		if (o) return {
			type: "del",
			raw: o[0],
			text: o[2],
			tokens: this.lexer.inlineTokens(o[2])
		};
	}
	autolink(e) {
		let o = this.rules.inline.autolink.exec(e);
		if (o) {
			let e, s;
			return o[2] === "@" ? (e = o[1], s = "mailto:" + e) : (e = o[1], s = e), {
				type: "link",
				raw: o[0],
				text: e,
				href: s,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let o;
		if (o = this.rules.inline.url.exec(e)) {
			let e, s;
			if (o[2] === "@") e = o[0], s = "mailto:" + e;
			else {
				let c;
				do
					c = o[0], o[0] = this.rules.inline._backpedal.exec(o[0])?.[0] ?? "";
				while (c !== o[0]);
				e = o[0], s = o[1] === "www." ? "http://" + o[0] : o[0];
			}
			return {
				type: "link",
				raw: o[0],
				text: e,
				href: s,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let o = this.rules.inline.text.exec(e);
		if (o) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: o[0],
				text: o[0],
				escaped: e
			};
		}
	}
}, x = class e {
	tokens;
	options;
	state;
	tokenizer;
	inlineQueue;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let o = {
			other: m,
			block: C.normal,
			inline: M.normal
		};
		this.options.pedantic ? (o.block = C.pedantic, o.inline = M.pedantic) : this.options.gfm && (o.block = C.gfm, this.options.breaks ? o.inline = M.breaks : o.inline = M.gfm), this.tokenizer.rules = o;
	}
	static get rules() {
		return {
			block: C,
			inline: M
		};
	}
	static lex(o, s) {
		return new e(s).lex(o);
	}
	static lexInline(o, s) {
		return new e(s).inlineTokens(o);
	}
	lex(e) {
		e = e.replace(m.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let o = this.inlineQueue[e];
			this.inlineTokens(o.src, o.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, o = [], s = !1) {
		for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e;) {
			let c;
			if (this.options.extensions?.block?.some((s) => (c = s.call({ lexer: this }, e, o)) ? (e = e.substring(c.raw.length), o.push(c), !0) : !1)) continue;
			if (c = this.tokenizer.space(e)) {
				e = e.substring(c.raw.length);
				let s = o.at(-1);
				c.raw.length === 1 && s !== void 0 ? s.raw += "\n" : o.push(c);
				continue;
			}
			if (c = this.tokenizer.code(e)) {
				e = e.substring(c.raw.length);
				let s = o.at(-1);
				s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith("\n") ? "" : "\n") + c.raw, s.text += "\n" + c.text, this.inlineQueue.at(-1).src = s.text) : o.push(c);
				continue;
			}
			if (c = this.tokenizer.fences(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.heading(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.hr(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.blockquote(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.list(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.html(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.def(e)) {
				e = e.substring(c.raw.length);
				let s = o.at(-1);
				s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith("\n") ? "" : "\n") + c.raw, s.text += "\n" + c.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[c.tag] || (this.tokens.links[c.tag] = {
					href: c.href,
					title: c.title
				}, o.push(c));
				continue;
			}
			if (c = this.tokenizer.table(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.lheading(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			let l = e;
			if (this.options.extensions?.startBlock) {
				let o = Infinity, s = e.slice(1), c;
				this.options.extensions.startBlock.forEach((e) => {
					c = e.call({ lexer: this }, s), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
				}), o < Infinity && o >= 0 && (l = e.substring(0, o + 1));
			}
			if (this.state.top && (c = this.tokenizer.paragraph(l))) {
				let u = o.at(-1);
				s && u?.type === "paragraph" ? (u.raw += (u.raw.endsWith("\n") ? "" : "\n") + c.raw, u.text += "\n" + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : o.push(c), s = l.length !== e.length, e = e.substring(c.raw.length);
				continue;
			}
			if (c = this.tokenizer.text(e)) {
				e = e.substring(c.raw.length);
				let s = o.at(-1);
				s?.type === "text" ? (s.raw += (s.raw.endsWith("\n") ? "" : "\n") + c.raw, s.text += "\n" + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : o.push(c);
				continue;
			}
			if (e) {
				let o = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(o);
					break;
				} else throw Error(o);
			}
		}
		return this.state.top = !0, o;
	}
	inline(e, o = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: o
		}), o;
	}
	inlineTokens(e, o = []) {
		let s = e, c = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (c = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null;) e.includes(c[0].slice(c[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, c.index) + "[" + "a".repeat(c[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (c = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null;) s = s.slice(0, c.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		for (; (c = this.tokenizer.rules.inline.blockSkip.exec(s)) != null;) s = s.slice(0, c.index) + "[" + "a".repeat(c[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		s = this.options.hooks?.emStrongMask?.call({ lexer: this }, s) ?? s;
		let l = !1, u = "";
		for (; e;) {
			l || (u = ""), l = !1;
			let c;
			if (this.options.extensions?.inline?.some((s) => (c = s.call({ lexer: this }, e, o)) ? (e = e.substring(c.raw.length), o.push(c), !0) : !1)) continue;
			if (c = this.tokenizer.escape(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.tag(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.link(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(c.raw.length);
				let s = o.at(-1);
				c.type === "text" && s?.type === "text" ? (s.raw += c.raw, s.text += c.text) : o.push(c);
				continue;
			}
			if (c = this.tokenizer.emStrong(e, s, u)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.codespan(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.br(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.del(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (c = this.tokenizer.autolink(e)) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			if (!this.state.inLink && (c = this.tokenizer.url(e))) {
				e = e.substring(c.raw.length), o.push(c);
				continue;
			}
			let d = e;
			if (this.options.extensions?.startInline) {
				let o = Infinity, s = e.slice(1), c;
				this.options.extensions.startInline.forEach((e) => {
					c = e.call({ lexer: this }, s), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
				}), o < Infinity && o >= 0 && (d = e.substring(0, o + 1));
			}
			if (c = this.tokenizer.inlineText(d)) {
				e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (u = c.raw.slice(-1)), l = !0;
				let s = o.at(-1);
				s?.type === "text" ? (s.raw += c.raw, s.text += c.text) : o.push(c);
				continue;
			}
			if (e) {
				let o = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(o);
					break;
				} else throw Error(o);
			}
		}
		return o;
	}
}, P = class {
	options;
	parser;
	constructor(e) {
		this.options = e || T;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: o, escaped: s }) {
		let c = (o || "").match(m.notSpaceStart)?.[0], l = e.replace(m.endingNewline, "") + "\n";
		return c ? "<pre><code class=\"language-" + w(c) + "\">" + (s ? l : w(l, !0)) + "</code></pre>\n" : "<pre><code>" + (s ? l : w(l, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: o }) {
		return `<h${o}>${this.parser.parseInline(e)}</h${o}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let o = e.ordered, s = e.start, c = "";
		for (let o = 0; o < e.items.length; o++) {
			let s = e.items[o];
			c += this.listitem(s);
		}
		let l = o ? "ol" : "ul", u = o && s !== 1 ? " start=\"" + s + "\"" : "";
		return "<" + l + u + ">\n" + c + "</" + l + ">\n";
	}
	listitem(e) {
		let o = "";
		if (e.task) {
			let s = this.checkbox({ checked: !!e.checked });
			e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = s + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = s + " " + w(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
				type: "text",
				raw: s + " ",
				text: s + " ",
				escaped: !0
			}) : o += s + " ";
		}
		return o += this.parser.parse(e.tokens, !!e.loose), `<li>${o}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let o = "", s = "";
		for (let o = 0; o < e.header.length; o++) s += this.tablecell(e.header[o]);
		o += this.tablerow({ text: s });
		let c = "";
		for (let o = 0; o < e.rows.length; o++) {
			let l = e.rows[o];
			s = "";
			for (let e = 0; e < l.length; e++) s += this.tablecell(l[e]);
			c += this.tablerow({ text: s });
		}
		return c &&= `<tbody>${c}</tbody>`, "<table>\n<thead>\n" + o + "</thead>\n" + c + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let o = this.parser.parseInline(e.tokens), s = e.header ? "th" : "td";
		return (e.align ? `<${s} align="${e.align}">` : `<${s}>`) + o + `</${s}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${w(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: o, tokens: s }) {
		let c = this.parser.parseInline(s), l = J(e);
		if (l === null) return c;
		e = l;
		let u = "<a href=\"" + e + "\"";
		return o && (u += " title=\"" + w(o) + "\""), u += ">" + c + "</a>", u;
	}
	image({ href: e, title: o, text: s, tokens: c }) {
		c && (s = this.parser.parseInline(c, this.parser.textRenderer));
		let l = J(e);
		if (l === null) return w(s);
		e = l;
		let u = `<img src="${e}" alt="${s}"`;
		return o && (u += ` title="${w(o)}"`), u += ">", u;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
	}
}, $ = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
}, b = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
	}
	static parse(o, s) {
		return new e(s).parse(o);
	}
	static parseInline(o, s) {
		return new e(s).parseInline(o);
	}
	parse(e, o = !0) {
		let s = "";
		for (let c = 0; c < e.length; c++) {
			let l = e[c];
			if (this.options.extensions?.renderers?.[l.type]) {
				let e = l, o = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (o !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					s += o || "";
					continue;
				}
			}
			let u = l;
			switch (u.type) {
				case "space":
					s += this.renderer.space(u);
					continue;
				case "hr":
					s += this.renderer.hr(u);
					continue;
				case "heading":
					s += this.renderer.heading(u);
					continue;
				case "code":
					s += this.renderer.code(u);
					continue;
				case "table":
					s += this.renderer.table(u);
					continue;
				case "blockquote":
					s += this.renderer.blockquote(u);
					continue;
				case "list":
					s += this.renderer.list(u);
					continue;
				case "html":
					s += this.renderer.html(u);
					continue;
				case "def":
					s += this.renderer.def(u);
					continue;
				case "paragraph":
					s += this.renderer.paragraph(u);
					continue;
				case "text": {
					let l = u, d = this.renderer.text(l);
					for (; c + 1 < e.length && e[c + 1].type === "text";) l = e[++c], d += "\n" + this.renderer.text(l);
					o ? s += this.renderer.paragraph({
						type: "paragraph",
						raw: d,
						text: d,
						tokens: [{
							type: "text",
							raw: d,
							text: d,
							escaped: !0
						}]
					}) : s += d;
					continue;
				}
				default: {
					let e = "Token with \"" + u.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return s;
	}
	parseInline(e, o = this.renderer) {
		let s = "";
		for (let c = 0; c < e.length; c++) {
			let l = e[c];
			if (this.options.extensions?.renderers?.[l.type]) {
				let e = this.options.extensions.renderers[l.type].call({ parser: this }, l);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(l.type)) {
					s += e || "";
					continue;
				}
			}
			let u = l;
			switch (u.type) {
				case "escape":
					s += o.text(u);
					break;
				case "html":
					s += o.html(u);
					break;
				case "link":
					s += o.link(u);
					break;
				case "image":
					s += o.image(u);
					break;
				case "strong":
					s += o.strong(u);
					break;
				case "em":
					s += o.em(u);
					break;
				case "codespan":
					s += o.codespan(u);
					break;
				case "br":
					s += o.br(u);
					break;
				case "del":
					s += o.del(u);
					break;
				case "text":
					s += o.text(u);
					break;
				default: {
					let e = "Token with \"" + u.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return s;
	}
}, S = class {
	options;
	block;
	constructor(e) {
		this.options = e || T;
	}
	static passThroughHooks = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer() {
		return this.block ? x.lex : x.lexInline;
	}
	provideParser() {
		return this.block ? b.parse : b.parseInline;
	}
}, _ = new class {
	defaults = L();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = b;
	Renderer = P;
	TextRenderer = $;
	Lexer = x;
	Tokenizer = y;
	Hooks = S;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, o) {
		let s = [];
		for (let c of e) switch (s = s.concat(o.call(this, c)), c.type) {
			case "table": {
				let e = c;
				for (let c of e.header) s = s.concat(this.walkTokens(c.tokens, o));
				for (let c of e.rows) for (let e of c) s = s.concat(this.walkTokens(e.tokens, o));
				break;
			}
			case "list": {
				let e = c;
				s = s.concat(this.walkTokens(e.items, o));
				break;
			}
			default: {
				let e = c;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((c) => {
					let l = e[c].flat(Infinity);
					s = s.concat(this.walkTokens(l, o));
				}) : e.tokens && (s = s.concat(this.walkTokens(e.tokens, o)));
			}
		}
		return s;
	}
	use(...e) {
		let o = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let s = { ...e };
			if (s.async = this.defaults.async || s.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let s = o.renderers[e.name];
					s ? o.renderers[e.name] = function(...o) {
						let c = e.renderer.apply(this, o);
						return c === !1 && (c = s.apply(this, o)), c;
					} : o.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let s = o[e.level];
					s ? s.unshift(e.tokenizer) : o[e.level] = [e.tokenizer], e.start && (e.level === "block" ? o.startBlock ? o.startBlock.push(e.start) : o.startBlock = [e.start] : e.level === "inline" && (o.startInline ? o.startInline.push(e.start) : o.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (o.childTokens[e.name] = e.childTokens);
			}), s.extensions = o), e.renderer) {
				let o = this.defaults.renderer || new P(this.defaults);
				for (let s in e.renderer) {
					if (!(s in o)) throw Error(`renderer '${s}' does not exist`);
					if (["options", "parser"].includes(s)) continue;
					let c = s, l = e.renderer[c], u = o[c];
					o[c] = (...e) => {
						let s = l.apply(o, e);
						return s === !1 && (s = u.apply(o, e)), s || "";
					};
				}
				s.renderer = o;
			}
			if (e.tokenizer) {
				let o = this.defaults.tokenizer || new y(this.defaults);
				for (let s in e.tokenizer) {
					if (!(s in o)) throw Error(`tokenizer '${s}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(s)) continue;
					let c = s, l = e.tokenizer[c], u = o[c];
					o[c] = (...e) => {
						let s = l.apply(o, e);
						return s === !1 && (s = u.apply(o, e)), s;
					};
				}
				s.tokenizer = o;
			}
			if (e.hooks) {
				let o = this.defaults.hooks || new S();
				for (let s in e.hooks) {
					if (!(s in o)) throw Error(`hook '${s}' does not exist`);
					if (["options", "block"].includes(s)) continue;
					let c = s, l = e.hooks[c], u = o[c];
					S.passThroughHooks.has(s) ? o[c] = (e) => {
						if (this.defaults.async && S.passThroughHooksRespectAsync.has(s)) return (async () => {
							let s = await l.call(o, e);
							return u.call(o, s);
						})();
						let c = l.call(o, e);
						return u.call(o, c);
					} : o[c] = (...e) => {
						if (this.defaults.async) return (async () => {
							let s = await l.apply(o, e);
							return s === !1 && (s = await u.apply(o, e)), s;
						})();
						let s = l.apply(o, e);
						return s === !1 && (s = u.apply(o, e)), s;
					};
				}
				s.hooks = o;
			}
			if (e.walkTokens) {
				let o = this.defaults.walkTokens, c = e.walkTokens;
				s.walkTokens = function(e) {
					let s = [];
					return s.push(c.call(this, e)), o && (s = s.concat(o.call(this, e))), s;
				};
			}
			this.defaults = {
				...this.defaults,
				...s
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, o) {
		return x.lex(e, o ?? this.defaults);
	}
	parser(e, o) {
		return b.parse(e, o ?? this.defaults);
	}
	parseMarkdown(e) {
		return (o, s) => {
			let c = { ...s }, l = {
				...this.defaults,
				...c
			}, u = this.onError(!!l.silent, !!l.async);
			if (this.defaults.async === !0 && c.async === !1) return u(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof o > "u" || o === null) return u(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof o != "string") return u(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(o) + ", string expected"));
			if (l.hooks && (l.hooks.options = l, l.hooks.block = e), l.async) return (async () => {
				let s = l.hooks ? await l.hooks.preprocess(o) : o, c = await (l.hooks ? await l.hooks.provideLexer() : e ? x.lex : x.lexInline)(s, l), u = l.hooks ? await l.hooks.processAllTokens(c) : c;
				l.walkTokens && await Promise.all(this.walkTokens(u, l.walkTokens));
				let d = await (l.hooks ? await l.hooks.provideParser() : e ? b.parse : b.parseInline)(u, l);
				return l.hooks ? await l.hooks.postprocess(d) : d;
			})().catch(u);
			try {
				l.hooks && (o = l.hooks.preprocess(o));
				let s = (l.hooks ? l.hooks.provideLexer() : e ? x.lex : x.lexInline)(o, l);
				l.hooks && (s = l.hooks.processAllTokens(s)), l.walkTokens && this.walkTokens(s, l.walkTokens);
				let c = (l.hooks ? l.hooks.provideParser() : e ? b.parse : b.parseInline)(s, l);
				return l.hooks && (c = l.hooks.postprocess(c)), c;
			} catch (e) {
				return u(e);
			}
		};
	}
	onError(e, o) {
		return (s) => {
			if (s.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + w(s.message + "", !0) + "</pre>";
				return o ? Promise.resolve(e) : e;
			}
			if (o) return Promise.reject(s);
			throw s;
		};
	}
}();
function k(e, o) {
	return _.parse(e, o);
}
k.options = k.setOptions = function(e) {
	return _.setOptions(e), k.defaults = _.defaults, G(k.defaults), k;
}, k.getDefaults = L, k.defaults = T, k.use = function(...e) {
	return _.use(...e), k.defaults = _.defaults, G(k.defaults), k;
}, k.walkTokens = function(e, o) {
	return _.walkTokens(e, o);
}, k.parseInline = _.parseInline, k.Parser = b, k.parser = b.parse, k.Renderer = P, k.TextRenderer = $, k.Lexer = x, k.lexer = x.lex, k.Tokenizer = y, k.Hooks = S, k.parse = k, k.options, k.setOptions, k.use, k.walkTokens, k.parseInline, b.parse, x.lex;
function dedent(e) {
	var o = [...arguments].slice(1), s = Array.from(typeof e == "string" ? [e] : e);
	s[s.length - 1] = s[s.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var c = s.reduce(function(e, o) {
		var s = o.match(/\n([\t ]+|(?!\s).)/g);
		return s ? e.concat(s.map(function(e) {
			return e.match(/[\t ]/g)?.length ?? 0;
		})) : e;
	}, []);
	if (c.length) {
		var l = RegExp("\n[	 ]{" + Math.min.apply(Math, c) + "}", "g");
		s = s.map(function(e) {
			return e.replace(l, "\n");
		});
	}
	s[0] = s[0].replace(/^\r?\n/, "");
	var u = s[0];
	return o.forEach(function(e, o) {
		var c = u.match(/(?:^|\n)( *)$/), l = c ? c[1] : "", d = e;
		typeof e == "string" && e.includes("\n") && (d = String(e).split("\n").map(function(e, o) {
			return o === 0 ? e : "" + l + e;
		}).join("\n")), u += d + s[o + 1];
	}), u;
}
var unknownIcon = {
	body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
	height: 80,
	width: 80
}, iconsStore = /* @__PURE__ */ new Map(), loaderStore = /* @__PURE__ */ new Map(), registerIconPacks = /* @__PURE__ */ __name((e) => {
	for (let s of e) {
		if (!s.name) throw Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
		if (log.debug("Registering icon pack:", s.name), "loader" in s) loaderStore.set(s.name, s.loader);
		else if ("icons" in s) iconsStore.set(s.name, s.icons);
		else throw log.error("Invalid icon loader:", s), Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
	}
}, "registerIconPacks"), getRegisteredIconData = /* @__PURE__ */ __name(async (e, s) => {
	let c = stringToIcon(e, !0, s !== void 0);
	if (!c) throw Error(`Invalid icon name: ${e}`);
	let l = c.prefix || s;
	if (!l) throw Error(`Icon name must contain a prefix: ${e}`);
	let u = iconsStore.get(l);
	if (!u) {
		let e = loaderStore.get(l);
		if (!e) throw Error(`Icon set not found: ${c.prefix}`);
		try {
			u = {
				...await e(),
				prefix: l
			}, iconsStore.set(l, u);
		} catch (e) {
			throw log.error(e), Error(`Failed to load icon set: ${c.prefix}`);
		}
	}
	let d = getIconData(u, c.name);
	if (!d) throw Error(`Icon not found: ${e}`);
	return d;
}, "getRegisteredIconData"), isIconAvailable = /* @__PURE__ */ __name(async (e) => {
	try {
		return await getRegisteredIconData(e), !0;
	} catch {
		return !1;
	}
}, "isIconAvailable"), getIconSVG = /* @__PURE__ */ __name(async (e, s, c) => {
	let u;
	try {
		u = await getRegisteredIconData(e, s?.fallbackPrefix);
	} catch (e) {
		log.error(e), u = unknownIcon;
	}
	let d = iconToSVG(u, s);
	return sanitizeText(iconToHTML(replaceIDs(d.body), {
		...d.attributes,
		...c
	}), getConfig());
}, "getIconSVG");
function preprocessMarkdown(e, { markdownAutoWrap: o }) {
	let s = dedent(e.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"));
	return o === !1 ? s.replace(/ /g, "&nbsp;") : s;
}
__name(preprocessMarkdown, "preprocessMarkdown");
function markdownToLines(e, o = {}) {
	let c = preprocessMarkdown(e, o), l = k.lexer(c), u = [[]], d = 0;
	function f(e, o = "normal") {
		e.type === "text" ? e.text.split("\n").forEach((e, s) => {
			s !== 0 && (d++, u.push([])), e.split(" ").forEach((e) => {
				e = e.replace(/&#39;/g, "'"), e && u[d].push({
					content: e,
					type: o
				});
			});
		}) : e.type === "strong" || e.type === "em" ? e.tokens.forEach((o) => {
			f(o, e.type);
		}) : e.type === "html" && u[d].push({
			content: e.text,
			type: "normal"
		});
	}
	return __name(f, "processNode"), l.forEach((e) => {
		e.type === "paragraph" ? e.tokens?.forEach((e) => {
			f(e);
		}) : e.type === "html" ? u[d].push({
			content: e.text,
			type: "normal"
		}) : u[d].push({
			content: e.raw,
			type: "normal"
		});
	}), u;
}
__name(markdownToLines, "markdownToLines");
function markdownToHTML(e, { markdownAutoWrap: c } = {}) {
	let l = k.lexer(e);
	function u(e) {
		return e.type === "text" ? c === !1 ? e.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : e.text.replace(/\n */g, "<br/>") : e.type === "strong" ? `<strong>${e.tokens?.map(u).join("")}</strong>` : e.type === "em" ? `<em>${e.tokens?.map(u).join("")}</em>` : e.type === "paragraph" ? `<p>${e.tokens?.map(u).join("")}</p>` : e.type === "space" ? "" : e.type === "html" ? `${e.text}` : e.type === "escape" ? e.text : (log.warn(`Unsupported markdown: ${e.type}`), e.raw);
	}
	return __name(u, "output"), l.map(u).join("");
}
__name(markdownToHTML, "markdownToHTML");
function splitTextToChars(e) {
	return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((e) => e.segment) : [...e];
}
__name(splitTextToChars, "splitTextToChars");
function splitWordToFitWidth(e, o) {
	return splitWordToFitWidthRecursion(e, [], splitTextToChars(o.content), o.type);
}
__name(splitWordToFitWidth, "splitWordToFitWidth");
function splitWordToFitWidthRecursion(e, o, s, c) {
	if (s.length === 0) return [{
		content: o.join(""),
		type: c
	}, {
		content: "",
		type: c
	}];
	let [l, ...u] = s, d = [...o, l];
	return e([{
		content: d.join(""),
		type: c
	}]) ? splitWordToFitWidthRecursion(e, d, u, c) : (o.length === 0 && l && (o.push(l), s.shift()), [{
		content: o.join(""),
		type: c
	}, {
		content: s.join(""),
		type: c
	}]);
}
__name(splitWordToFitWidthRecursion, "splitWordToFitWidthRecursion");
function splitLineToFitWidth(e, o) {
	if (e.some(({ content: e }) => e.includes("\n"))) throw Error("splitLineToFitWidth does not support newlines in the line");
	return splitLineToFitWidthRecursion(e, o);
}
__name(splitLineToFitWidth, "splitLineToFitWidth");
function splitLineToFitWidthRecursion(e, o, s = [], c = []) {
	if (e.length === 0) return c.length > 0 && s.push(c), s.length > 0 ? s : [];
	let l = "";
	e[0].content === " " && (l = " ", e.shift());
	let u = e.shift() ?? {
		content: " ",
		type: "normal"
	}, d = [...c];
	if (l !== "" && d.push({
		content: l,
		type: "normal"
	}), d.push(u), o(d)) return splitLineToFitWidthRecursion(e, o, s, d);
	if (c.length > 0) s.push(c), e.unshift(u);
	else if (u.content) {
		let [c, l] = splitWordToFitWidth(o, u);
		s.push([c]), l.content && e.unshift(l);
	}
	return splitLineToFitWidthRecursion(e, o, s);
}
__name(splitLineToFitWidthRecursion, "splitLineToFitWidthRecursion");
function applyStyle(e, o) {
	o && e.attr("style", o);
}
__name(applyStyle, "applyStyle");
async function addHtmlSpan(e, o, s, c, g = !1, O = getConfig()) {
	let A = e.append("foreignObject");
	A.attr("width", `${10 * s}px`), A.attr("height", `${10 * s}px`);
	let R = A.append("xhtml:div"), B = hasKatex(o.label) ? await renderKatexSanitized(o.label.replace(common_default.lineBreakRegex, "\n"), O) : sanitizeText(o.label, O), H = o.isNode ? "nodeLabel" : "edgeLabel", Y = R.append("span");
	Y.html(B), applyStyle(Y, o.labelStyle), Y.attr("class", `${H} ${c}`), applyStyle(R, o.labelStyle), R.style("display", "table-cell"), R.style("white-space", "nowrap"), R.style("line-height", "1.5"), R.style("max-width", s + "px"), R.style("text-align", "center"), R.attr("xmlns", "http://www.w3.org/1999/xhtml"), g && R.attr("class", "labelBkg");
	let Z = R.node().getBoundingClientRect();
	return Z.width === s && (R.style("display", "table"), R.style("white-space", "break-spaces"), R.style("width", s + "px"), Z = R.node().getBoundingClientRect()), A.node();
}
__name(addHtmlSpan, "addHtmlSpan");
function createTspan(e, o, s) {
	return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", o * s - .1 + "em").attr("dy", s + "em");
}
__name(createTspan, "createTspan");
function computeWidthOfText(e, o, s) {
	let c = e.append("text"), l = createTspan(c, 1, o);
	updateTextContentAndStyles(l, s);
	let u = l.node().getComputedTextLength();
	return c.remove(), u;
}
__name(computeWidthOfText, "computeWidthOfText");
function computeDimensionOfText(e, o, s) {
	let c = e.append("text"), l = createTspan(c, 1, o);
	updateTextContentAndStyles(l, [{
		content: s,
		type: "normal"
	}]);
	let u = l.node()?.getBoundingClientRect();
	return u && c.remove(), u;
}
__name(computeDimensionOfText, "computeDimensionOfText");
function createFormattedText(e, o, c, l = !1) {
	let u = 1.1, d = o.append("g"), f = d.insert("rect").attr("class", "background").attr("style", "stroke: none"), p = d.append("text").attr("y", "-10.1"), g = 0;
	for (let o of c) {
		let c = /* @__PURE__ */ __name((o) => computeWidthOfText(d, u, o) <= e, "checkWidth"), l = c(o) ? [o] : splitLineToFitWidth(o, c);
		for (let e of l) updateTextContentAndStyles(createTspan(p, g, u), e), g++;
	}
	if (l) {
		let e = p.node().getBBox();
		return f.attr("x", e.x - 2).attr("y", e.y - 2).attr("width", e.width + 4).attr("height", e.height + 4), d.node();
	} else return p.node();
}
__name(createFormattedText, "createFormattedText");
function updateTextContentAndStyles(e, o) {
	e.text(""), o.forEach((o, s) => {
		let c = e.append("tspan").attr("font-style", o.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", o.type === "strong" ? "bold" : "normal");
		s === 0 ? c.text(o.content) : c.text(" " + o.content);
	});
}
__name(updateTextContentAndStyles, "updateTextContentAndStyles");
async function replaceIconSubstring(e, o = {}) {
	let s = [];
	e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (e, c, u) => (s.push((async () => {
		let s = `${c}:${u}`;
		return await isIconAvailable(s) ? await getIconSVG(s, void 0, { class: "label-icon" }) : `<i class='${sanitizeText(e, o).replace(":", " ")}'></i>`;
	})()), e));
	let c = await Promise.all(s);
	return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => c.shift() ?? "");
}
__name(replaceIconSubstring, "replaceIconSubstring");
var createText = /* @__PURE__ */ __name(async (s, l = "", { style: u = "", isTitle: f = !1, classes: p = "", useHtmlLabels: g = !0, isNode: O = !0, width: A = 200, addSvgBackground: R = !1 } = {}, B) => {
	if (log.debug("XYZ createText", l, u, f, p, g, O, "addSvgBackground: ", R), g) {
		let o = await replaceIconSubstring(decodeEntities(markdownToHTML(l, B)), B), c = l.replace(/\\\\/g, "\\");
		return await addHtmlSpan(s, {
			isNode: O,
			label: hasKatex(l) ? c : o,
			labelStyle: u.replace("fill:", "color:")
		}, A, p, R, B);
	} else {
		let e = createFormattedText(A, s, markdownToLines(l.replace(/<br\s*\/?>/g, "<br/>").replace("<br>", "<br/>"), B), l ? R : !1);
		if (O) {
			/stroke:/.exec(u) && (u = u.replace("stroke:", "lineColor:"));
			let o = u.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			select_default(e).attr("style", o);
		} else {
			let o = u.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
			select_default(e).select("rect").attr("style", o.replace(/background:/g, "fill:"));
			let s = u.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			select_default(e).select("text").attr("style", s);
		}
		return e;
	}
}, "createText");
export { replaceIconSubstring as a, registerIconPacks as i, createText as n, unknownIcon as o, getIconSVG as r, dedent as s, computeDimensionOfText as t };
