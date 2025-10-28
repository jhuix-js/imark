import { c as katex } from "./katex-C7nlwjlH.js";
var findEndOfMath = function(e, t, n) {
	for (var r = n, i = 0, a = e.length; r < t.length;) {
		var o = t[r];
		if (i <= 0 && t.slice(r, r + a) === e) return r;
		o === "\\" ? r++ : o === "{" ? i++ : o === "}" && i--, r++;
	}
	return -1;
}, escapeRegex = function(e) {
	return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, amsRegex = /^\\begin{/, splitAtDelimiters = function(e, i) {
	for (var a, o = [], s = /* @__PURE__ */ RegExp("(" + i.map((e) => escapeRegex(e.left)).join("|") + ")"); a = e.search(s), a !== -1;) {
		a > 0 && (o.push({
			type: "text",
			data: e.slice(0, a)
		}), e = e.slice(a));
		var c = i.findIndex((t) => e.startsWith(t.left));
		if (a = findEndOfMath(i[c].right, e, i[c].left.length), a === -1) break;
		var l = e.slice(0, a + i[c].right.length), u = amsRegex.test(l) ? l : e.slice(i[c].left.length, a);
		o.push({
			type: "math",
			data: u,
			rawData: l,
			display: i[c].display
		}), e = e.slice(a + i[c].right.length);
	}
	return e !== "" && o.push({
		type: "text",
		data: e
	}), o;
}, renderMathInText = function(t, n) {
	var r = splitAtDelimiters(t, n.delimiters);
	if (r.length === 1 && r[0].type === "text") return null;
	for (var a = document.createDocumentFragment(), o = 0; o < r.length; o++) if (r[o].type === "text") a.appendChild(document.createTextNode(r[o].data));
	else {
		var s = document.createElement("span"), c = r[o].data;
		n.displayMode = r[o].display;
		try {
			n.preProcess && (c = n.preProcess(c)), katex.render(c, s, n);
		} catch (t) {
			if (!(t instanceof katex.ParseError)) throw t;
			n.errorCallback("KaTeX auto-render: Failed to parse `" + r[o].data + "` with ", t), a.appendChild(document.createTextNode(r[o].rawData));
			continue;
		}
		a.appendChild(s);
	}
	return a;
}, renderElem = function e(t, n) {
	for (var r = 0; r < t.childNodes.length; r++) {
		var i = t.childNodes[r];
		if (i.nodeType === 3) {
			for (var o = i.textContent, s = i.nextSibling, c = 0; s && s.nodeType === Node.TEXT_NODE;) o += s.textContent, s = s.nextSibling, c++;
			var l = renderMathInText(o, n);
			if (l) {
				for (var u = 0; u < c; u++) i.nextSibling.remove();
				r += l.childNodes.length - 1, t.replaceChild(l, i);
			} else r += c;
		} else i.nodeType === 1 && (function() {
			var t = " " + i.className + " ";
			n.ignoredTags.indexOf(i.nodeName.toLowerCase()) === -1 && n.ignoredClasses.every((e) => t.indexOf(" " + e + " ") === -1) && e(i, n);
		})();
	}
}, renderMathInElement = function(e, t) {
	if (!e) throw Error("No element provided to render");
	var n = {};
	for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
	n.delimiters = n.delimiters || [
		{
			left: "$$",
			right: "$$",
			display: !0
		},
		{
			left: "\\(",
			right: "\\)",
			display: !1
		},
		{
			left: "\\begin{equation}",
			right: "\\end{equation}",
			display: !0
		},
		{
			left: "\\begin{align}",
			right: "\\end{align}",
			display: !0
		},
		{
			left: "\\begin{alignat}",
			right: "\\end{alignat}",
			display: !0
		},
		{
			left: "\\begin{gather}",
			right: "\\end{gather}",
			display: !0
		},
		{
			left: "\\begin{CD}",
			right: "\\end{CD}",
			display: !0
		},
		{
			left: "\\[",
			right: "\\]",
			display: !0
		}
	], n.ignoredTags = n.ignoredTags || [
		"script",
		"noscript",
		"style",
		"textarea",
		"pre",
		"code",
		"option"
	], n.ignoredClasses = n.ignoredClasses || [], n.errorCallback = n.errorCallback || console.error, n.macros = n.macros || {}, renderElem(e, n);
};
export { renderMathInElement as default };

//# sourceMappingURL=auto-render-DfhRF9e6.js.map