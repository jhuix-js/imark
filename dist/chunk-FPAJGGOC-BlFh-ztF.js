import { i as __reExport, r as __export, s as __toESM, t as __commonJSMin } from "./chunk-DgPTj83v.js";
import { n as process$1, t as init_dist } from "./dist-Dmaes8r4.js";
import { B as isObject_default, C as _isIterateeCall_default, E as _baseRest_default, H as isObjectLike_default, O as _copyObject_default, R as isFunction_default, S as _createAssigner_default, U as _baseGetTag_default, V as isArray_default, _ as _nodeUtil_default, j as _baseAssignValue_default, k as _assignValue_default, t as isArrayLikeObject_default, v as _baseUnary_default, w as isArrayLike_default, x as _isPrototype_default, z as identity_default } from "./isArrayLikeObject-DKHowMnG.js";
import { D as keys_default, M as _arrayMap_default, O as _arrayIncludes_default, S as _baseFlatten_default, _ as _arraySome_default, a as filter_default, b as _getAllKeysIn_default, f as _baseIteratee_default, g as _cacheHas_default, i as values_default, j as noop_default, k as _baseIndexOf_default, l as _arrayIncludesWith_default, n as reduce_default, o as _baseFilter_default, r as isUndefined_default, s as forEach_default, t as _baseUniq_default, u as _baseEach_default, v as _SetCache_default, x as _arrayFilter_default } from "./baseUniq-B8xWFlw1.js";
import { a as isString_default, d as defaults_default, f as flatten_default, l as find_default, n as min_default, o as has_default, p as toInteger_default, s as map_default, t as _basePickBy_default, u as last_default } from "./basePickBy-BzM66dBW.js";
import { t as isEmpty_default } from "./isEmpty-D0b8WX4x.js";
import { t as clone_default } from "./clone-DNjDWJNG.js";
function isAstNode(e) {
	return typeof e == "object" && !!e && typeof e.$type == "string";
}
function isReference(e) {
	return typeof e == "object" && !!e && typeof e.$refText == "string";
}
function isAstNodeDescription(e) {
	return typeof e == "object" && !!e && typeof e.name == "string" && typeof e.type == "string" && typeof e.path == "string";
}
function isLinkingError(e) {
	return typeof e == "object" && !!e && isAstNode(e.container) && isReference(e.reference) && typeof e.message == "string";
}
var AbstractAstReflection = class {
	constructor() {
		this.subtypes = {}, this.allSubtypes = {};
	}
	isInstance(e, m) {
		return isAstNode(e) && this.isSubtype(e.$type, m);
	}
	isSubtype(e, m) {
		if (e === m) return !0;
		let h = this.subtypes[e];
		h ||= this.subtypes[e] = {};
		let g = h[m];
		if (g !== void 0) return g;
		{
			let g = this.computeIsSubtype(e, m);
			return h[m] = g, g;
		}
	}
	getAllSubTypes(e) {
		let m = this.allSubtypes[e];
		if (m) return m;
		{
			let m = this.getAllTypes(), h = [];
			for (let g of m) this.isSubtype(g, e) && h.push(g);
			return this.allSubtypes[e] = h, h;
		}
	}
};
function isCompositeCstNode(e) {
	return typeof e == "object" && !!e && Array.isArray(e.content);
}
function isLeafCstNode(e) {
	return typeof e == "object" && !!e && typeof e.tokenType == "object";
}
function isRootCstNode(e) {
	return isCompositeCstNode(e) && typeof e.fullText == "string";
}
var StreamImpl = class e {
	constructor(e, m) {
		this.startFn = e, this.nextFn = m;
	}
	iterator() {
		let e = {
			state: this.startFn(),
			next: () => this.nextFn(e.state),
			[Symbol.iterator]: () => e
		};
		return e;
	}
	[Symbol.iterator]() {
		return this.iterator();
	}
	isEmpty() {
		return !!this.iterator().next().done;
	}
	count() {
		let e = this.iterator(), m = 0, h = e.next();
		for (; !h.done;) m++, h = e.next();
		return m;
	}
	toArray() {
		let e = [], m = this.iterator(), h;
		do
			h = m.next(), h.value !== void 0 && e.push(h.value);
		while (!h.done);
		return e;
	}
	toSet() {
		return new Set(this);
	}
	toMap(e, m) {
		let h = this.map((h) => [e ? e(h) : h, m ? m(h) : h]);
		return new Map(h);
	}
	toString() {
		return this.join();
	}
	concat(m) {
		return new e(() => ({
			first: this.startFn(),
			firstDone: !1,
			iterator: m[Symbol.iterator]()
		}), (e) => {
			let m;
			if (!e.firstDone) {
				do
					if (m = this.nextFn(e.first), !m.done) return m;
				while (!m.done);
				e.firstDone = !0;
			}
			do
				if (m = e.iterator.next(), !m.done) return m;
			while (!m.done);
			return DONE_RESULT;
		});
	}
	join(e = ",") {
		let m = this.iterator(), h = "", g, _ = !1;
		do
			g = m.next(), g.done || (_ && (h += e), h += toString(g.value)), _ = !0;
		while (!g.done);
		return h;
	}
	indexOf(e, m = 0) {
		let h = this.iterator(), g = 0, _ = h.next();
		for (; !_.done;) {
			if (g >= m && _.value === e) return g;
			_ = h.next(), g++;
		}
		return -1;
	}
	every(e) {
		let m = this.iterator(), h = m.next();
		for (; !h.done;) {
			if (!e(h.value)) return !1;
			h = m.next();
		}
		return !0;
	}
	some(e) {
		let m = this.iterator(), h = m.next();
		for (; !h.done;) {
			if (e(h.value)) return !0;
			h = m.next();
		}
		return !1;
	}
	forEach(e) {
		let m = this.iterator(), h = 0, g = m.next();
		for (; !g.done;) e(g.value, h), g = m.next(), h++;
	}
	map(m) {
		return new e(this.startFn, (e) => {
			let { done: h, value: g } = this.nextFn(e);
			return h ? DONE_RESULT : {
				done: !1,
				value: m(g)
			};
		});
	}
	filter(m) {
		return new e(this.startFn, (e) => {
			let h;
			do
				if (h = this.nextFn(e), !h.done && m(h.value)) return h;
			while (!h.done);
			return DONE_RESULT;
		});
	}
	nonNullable() {
		return this.filter((e) => e != null);
	}
	reduce(e, m) {
		let h = this.iterator(), g = m, _ = h.next();
		for (; !_.done;) g = g === void 0 ? _.value : e(g, _.value), _ = h.next();
		return g;
	}
	reduceRight(e, m) {
		return this.recursiveReduce(this.iterator(), e, m);
	}
	recursiveReduce(e, m, h) {
		let g = e.next();
		if (g.done) return h;
		let _ = this.recursiveReduce(e, m, h);
		return _ === void 0 ? g.value : m(_, g.value);
	}
	find(e) {
		let m = this.iterator(), h = m.next();
		for (; !h.done;) {
			if (e(h.value)) return h.value;
			h = m.next();
		}
	}
	findIndex(e) {
		let m = this.iterator(), h = 0, g = m.next();
		for (; !g.done;) {
			if (e(g.value)) return h;
			g = m.next(), h++;
		}
		return -1;
	}
	includes(e) {
		let m = this.iterator(), h = m.next();
		for (; !h.done;) {
			if (h.value === e) return !0;
			h = m.next();
		}
		return !1;
	}
	flatMap(m) {
		return new e(() => ({ this: this.startFn() }), (e) => {
			do {
				if (e.iterator) {
					let m = e.iterator.next();
					if (m.done) e.iterator = void 0;
					else return m;
				}
				let { done: h, value: g } = this.nextFn(e.this);
				if (!h) {
					let h = m(g);
					if (isIterable(h)) e.iterator = h[Symbol.iterator]();
					else return {
						done: !1,
						value: h
					};
				}
			} while (e.iterator);
			return DONE_RESULT;
		});
	}
	flat(m) {
		if (m === void 0 && (m = 1), m <= 0) return this;
		let h = m > 1 ? this.flat(m - 1) : this;
		return new e(() => ({ this: h.startFn() }), (e) => {
			do {
				if (e.iterator) {
					let m = e.iterator.next();
					if (m.done) e.iterator = void 0;
					else return m;
				}
				let { done: m, value: g } = h.nextFn(e.this);
				if (!m) if (isIterable(g)) e.iterator = g[Symbol.iterator]();
				else return {
					done: !1,
					value: g
				};
			} while (e.iterator);
			return DONE_RESULT;
		});
	}
	head() {
		let e = this.iterator().next();
		if (!e.done) return e.value;
	}
	tail(m = 1) {
		return new e(() => {
			let e = this.startFn();
			for (let h = 0; h < m; h++) if (this.nextFn(e).done) return e;
			return e;
		}, this.nextFn);
	}
	limit(m) {
		return new e(() => ({
			size: 0,
			state: this.startFn()
		}), (e) => (e.size++, e.size > m ? DONE_RESULT : this.nextFn(e.state)));
	}
	distinct(m) {
		return new e(() => ({
			set: /* @__PURE__ */ new Set(),
			internalState: this.startFn()
		}), (e) => {
			let h;
			do
				if (h = this.nextFn(e.internalState), !h.done) {
					let g = m ? m(h.value) : h.value;
					if (!e.set.has(g)) return e.set.add(g), h;
				}
			while (!h.done);
			return DONE_RESULT;
		});
	}
	exclude(e, m) {
		let h = /* @__PURE__ */ new Set();
		for (let g of e) {
			let e = m ? m(g) : g;
			h.add(e);
		}
		return this.filter((e) => {
			let g = m ? m(e) : e;
			return !h.has(g);
		});
	}
};
function toString(e) {
	return typeof e == "string" ? e : e === void 0 ? "undefined" : typeof e.toString == "function" ? e.toString() : Object.prototype.toString.call(e);
}
function isIterable(e) {
	return !!e && typeof e[Symbol.iterator] == "function";
}
const EMPTY_STREAM = new StreamImpl(() => void 0, () => DONE_RESULT), DONE_RESULT = Object.freeze({
	done: !0,
	value: void 0
});
function stream(...e) {
	if (e.length === 1) {
		let m = e[0];
		if (m instanceof StreamImpl) return m;
		if (isIterable(m)) return new StreamImpl(() => m[Symbol.iterator](), (e) => e.next());
		if (typeof m.length == "number") return new StreamImpl(() => ({ index: 0 }), (e) => e.index < m.length ? {
			done: !1,
			value: m[e.index++]
		} : DONE_RESULT);
	}
	return e.length > 1 ? new StreamImpl(() => ({
		collIndex: 0,
		arrIndex: 0
	}), (m) => {
		do {
			if (m.iterator) {
				let e = m.iterator.next();
				if (!e.done) return e;
				m.iterator = void 0;
			}
			if (m.array) {
				if (m.arrIndex < m.array.length) return {
					done: !1,
					value: m.array[m.arrIndex++]
				};
				m.array = void 0, m.arrIndex = 0;
			}
			if (m.collIndex < e.length) {
				let h = e[m.collIndex++];
				isIterable(h) ? m.iterator = h[Symbol.iterator]() : h && typeof h.length == "number" && (m.array = h);
			}
		} while (m.iterator || m.array || m.collIndex < e.length);
		return DONE_RESULT;
	}) : EMPTY_STREAM;
}
var TreeStreamImpl = class extends StreamImpl {
	constructor(e, m, h) {
		super(() => ({
			iterators: h?.includeRoot ? [[e][Symbol.iterator]()] : [m(e)[Symbol.iterator]()],
			pruned: !1
		}), (e) => {
			for (e.pruned &&= (e.iterators.pop(), !1); e.iterators.length > 0;) {
				let h = e.iterators[e.iterators.length - 1].next();
				if (h.done) e.iterators.pop();
				else return e.iterators.push(m(h.value)[Symbol.iterator]()), h;
			}
			return DONE_RESULT;
		});
	}
	iterator() {
		let e = {
			state: this.startFn(),
			next: () => this.nextFn(e.state),
			prune: () => {
				e.state.pruned = !0;
			},
			[Symbol.iterator]: () => e
		};
		return e;
	}
}, Reduction;
(function(e) {
	function m(e) {
		return e.reduce((e, m) => e + m, 0);
	}
	e.sum = m;
	function h(e) {
		return e.reduce((e, m) => e * m, 0);
	}
	e.product = h;
	function g(e) {
		return e.reduce((e, m) => Math.min(e, m));
	}
	e.min = g;
	function _(e) {
		return e.reduce((e, m) => Math.max(e, m));
	}
	e.max = _;
})(Reduction ||= {});
var cst_utils_exports = /* @__PURE__ */ __export({
	DefaultNameRegexp: () => DefaultNameRegexp,
	RangeComparison: () => RangeComparison,
	compareRange: () => compareRange,
	findCommentNode: () => findCommentNode,
	findDeclarationNodeAtOffset: () => findDeclarationNodeAtOffset,
	findLeafNodeAtOffset: () => findLeafNodeAtOffset,
	findLeafNodeBeforeOffset: () => findLeafNodeBeforeOffset,
	flattenCst: () => flattenCst,
	getInteriorNodes: () => getInteriorNodes,
	getNextNode: () => getNextNode,
	getPreviousNode: () => getPreviousNode,
	getStartlineNode: () => getStartlineNode,
	inRange: () => inRange,
	isChildNode: () => isChildNode,
	isCommentNode: () => isCommentNode,
	streamCst: () => streamCst,
	toDocumentSegment: () => toDocumentSegment,
	tokenToRange: () => tokenToRange
});
function streamCst(e) {
	return new TreeStreamImpl(e, (e) => isCompositeCstNode(e) ? e.content : [], { includeRoot: !0 });
}
function flattenCst(e) {
	return streamCst(e).filter(isLeafCstNode);
}
function isChildNode(e, m) {
	for (; e.container;) if (e = e.container, e === m) return !0;
	return !1;
}
function tokenToRange(e) {
	return {
		start: {
			character: e.startColumn - 1,
			line: e.startLine - 1
		},
		end: {
			character: e.endColumn,
			line: e.endLine - 1
		}
	};
}
function toDocumentSegment(e) {
	if (!e) return;
	let { offset: m, end: h, range: g } = e;
	return {
		range: g,
		offset: m,
		end: h,
		length: h - m
	};
}
var RangeComparison;
(function(e) {
	e[e.Before = 0] = "Before", e[e.After = 1] = "After", e[e.OverlapFront = 2] = "OverlapFront", e[e.OverlapBack = 3] = "OverlapBack", e[e.Inside = 4] = "Inside", e[e.Outside = 5] = "Outside";
})(RangeComparison ||= {});
function compareRange(e, m) {
	if (e.end.line < m.start.line || e.end.line === m.start.line && e.end.character <= m.start.character) return RangeComparison.Before;
	if (e.start.line > m.end.line || e.start.line === m.end.line && e.start.character >= m.end.character) return RangeComparison.After;
	let h = e.start.line > m.start.line || e.start.line === m.start.line && e.start.character >= m.start.character, g = e.end.line < m.end.line || e.end.line === m.end.line && e.end.character <= m.end.character;
	return h && g ? RangeComparison.Inside : h ? RangeComparison.OverlapBack : g ? RangeComparison.OverlapFront : RangeComparison.Outside;
}
function inRange(e, m) {
	return compareRange(e, m) > RangeComparison.After;
}
const DefaultNameRegexp = /^[\w\p{L}]$/u;
function findDeclarationNodeAtOffset(e, m, h = DefaultNameRegexp) {
	if (e) {
		if (m > 0) {
			let g = m - e.offset, _ = e.text.charAt(g);
			h.test(_) || m--;
		}
		return findLeafNodeAtOffset(e, m);
	}
}
function findCommentNode(e, m) {
	if (e) {
		let h = getPreviousNode(e, !0);
		if (h && isCommentNode(h, m)) return h;
		if (isRootCstNode(e)) {
			let h = e.content.findIndex((e) => !e.hidden);
			for (let g = h - 1; g >= 0; g--) {
				let h = e.content[g];
				if (isCommentNode(h, m)) return h;
			}
		}
	}
}
function isCommentNode(e, m) {
	return isLeafCstNode(e) && m.includes(e.tokenType.name);
}
function findLeafNodeAtOffset(e, m) {
	if (isLeafCstNode(e)) return e;
	if (isCompositeCstNode(e)) {
		let h = binarySearch(e, m, !1);
		if (h) return findLeafNodeAtOffset(h, m);
	}
}
function findLeafNodeBeforeOffset(e, m) {
	if (isLeafCstNode(e)) return e;
	if (isCompositeCstNode(e)) {
		let h = binarySearch(e, m, !0);
		if (h) return findLeafNodeBeforeOffset(h, m);
	}
}
function binarySearch(e, m, h) {
	let g = 0, _ = e.content.length - 1, v;
	for (; g <= _;) {
		let y = Math.floor((g + _) / 2), b = e.content[y];
		if (b.offset <= m && b.end > m) return b;
		b.end <= m ? (v = h ? b : void 0, g = y + 1) : _ = y - 1;
	}
	return v;
}
function getPreviousNode(e, m = !0) {
	for (; e.container;) {
		let h = e.container, g = h.content.indexOf(e);
		for (; g > 0;) {
			g--;
			let e = h.content[g];
			if (m || !e.hidden) return e;
		}
		e = h;
	}
}
function getNextNode(e, m = !0) {
	for (; e.container;) {
		let h = e.container, g = h.content.indexOf(e), _ = h.content.length - 1;
		for (; g < _;) {
			g++;
			let e = h.content[g];
			if (m || !e.hidden) return e;
		}
		e = h;
	}
}
function getStartlineNode(e) {
	if (e.range.start.character === 0) return e;
	let m = e.range.start.line, h = e, g;
	for (; e.container;) {
		let _ = e.container, v = g ?? _.content.indexOf(e);
		if (v === 0 ? (e = _, g = void 0) : (g = v - 1, e = _.content[g]), e.range.start.line !== m) break;
		h = e;
	}
	return h;
}
function getInteriorNodes(e, m) {
	let h = getCommonParent(e, m);
	return h ? h.parent.content.slice(h.a + 1, h.b) : [];
}
function getCommonParent(e, m) {
	let h = getParentChain(e), g = getParentChain(m), _;
	for (let e = 0; e < h.length && e < g.length; e++) {
		let m = h[e], v = g[e];
		if (m.parent === v.parent) _ = {
			parent: m.parent,
			a: m.index,
			b: v.index
		};
		else break;
	}
	return _;
}
function getParentChain(e) {
	let m = [];
	for (; e.container;) {
		let h = e.container, g = h.content.indexOf(e);
		m.push({
			parent: h,
			index: g
		}), e = h;
	}
	return m.reverse();
}
var ErrorWithLocation = class extends Error {
	constructor(e, m) {
		super(e ? `${m} at ${e.range.start.line}:${e.range.start.character}` : m);
	}
};
function assertUnreachable(e) {
	throw Error("Error! The input value was not handled.");
}
var ast_exports = /* @__PURE__ */ __export({
	AbstractElement: () => AbstractElement,
	AbstractRule: () => AbstractRule,
	AbstractType: () => AbstractType,
	Action: () => Action,
	Alternatives: () => Alternatives,
	ArrayLiteral: () => ArrayLiteral,
	ArrayType: () => ArrayType,
	Assignment: () => Assignment,
	BooleanLiteral: () => BooleanLiteral,
	CharacterRange: () => CharacterRange,
	Condition: () => Condition,
	Conjunction: () => Conjunction,
	CrossReference: () => CrossReference,
	Disjunction: () => Disjunction,
	EndOfFile: () => EndOfFile,
	Grammar: () => Grammar,
	GrammarImport: () => GrammarImport,
	Group: () => Group$1,
	InferredType: () => InferredType,
	Interface: () => Interface,
	Keyword: () => Keyword,
	LangiumGrammarAstReflection: () => LangiumGrammarAstReflection,
	LangiumGrammarTerminals: () => LangiumGrammarTerminals,
	NamedArgument: () => NamedArgument,
	NegatedToken: () => NegatedToken,
	Negation: () => Negation,
	NumberLiteral: () => NumberLiteral,
	Parameter: () => Parameter,
	ParameterReference: () => ParameterReference,
	ParserRule: () => ParserRule,
	ReferenceType: () => ReferenceType,
	RegexToken: () => RegexToken,
	ReturnType: () => ReturnType,
	RuleCall: () => RuleCall,
	SimpleType: () => SimpleType,
	StringLiteral: () => StringLiteral,
	TerminalAlternatives: () => TerminalAlternatives,
	TerminalGroup: () => TerminalGroup,
	TerminalRule: () => TerminalRule,
	TerminalRuleCall: () => TerminalRuleCall,
	Type: () => Type,
	TypeAttribute: () => TypeAttribute,
	TypeDefinition: () => TypeDefinition,
	UnionType: () => UnionType,
	UnorderedGroup: () => UnorderedGroup,
	UntilToken: () => UntilToken,
	ValueLiteral: () => ValueLiteral,
	Wildcard: () => Wildcard,
	isAbstractElement: () => isAbstractElement,
	isAbstractRule: () => isAbstractRule,
	isAbstractType: () => isAbstractType,
	isAction: () => isAction,
	isAlternatives: () => isAlternatives,
	isArrayLiteral: () => isArrayLiteral,
	isArrayType: () => isArrayType,
	isAssignment: () => isAssignment,
	isBooleanLiteral: () => isBooleanLiteral,
	isCharacterRange: () => isCharacterRange,
	isCondition: () => isCondition,
	isConjunction: () => isConjunction,
	isCrossReference: () => isCrossReference,
	isDisjunction: () => isDisjunction,
	isEndOfFile: () => isEndOfFile,
	isFeatureName: () => isFeatureName,
	isGrammar: () => isGrammar,
	isGrammarImport: () => isGrammarImport,
	isGroup: () => isGroup,
	isInferredType: () => isInferredType,
	isInterface: () => isInterface,
	isKeyword: () => isKeyword,
	isNamedArgument: () => isNamedArgument,
	isNegatedToken: () => isNegatedToken,
	isNegation: () => isNegation,
	isNumberLiteral: () => isNumberLiteral,
	isParameter: () => isParameter,
	isParameterReference: () => isParameterReference,
	isParserRule: () => isParserRule,
	isPrimitiveType: () => isPrimitiveType,
	isReferenceType: () => isReferenceType,
	isRegexToken: () => isRegexToken,
	isReturnType: () => isReturnType,
	isRuleCall: () => isRuleCall,
	isSimpleType: () => isSimpleType,
	isStringLiteral: () => isStringLiteral,
	isTerminalAlternatives: () => isTerminalAlternatives,
	isTerminalGroup: () => isTerminalGroup,
	isTerminalRule: () => isTerminalRule,
	isTerminalRuleCall: () => isTerminalRuleCall,
	isType: () => isType,
	isTypeAttribute: () => isTypeAttribute,
	isTypeDefinition: () => isTypeDefinition,
	isUnionType: () => isUnionType,
	isUnorderedGroup: () => isUnorderedGroup,
	isUntilToken: () => isUntilToken,
	isValueLiteral: () => isValueLiteral,
	isWildcard: () => isWildcard,
	reflection: () => reflection$1
});
const LangiumGrammarTerminals = {
	ID: /\^?[_a-zA-Z][\w_]*/,
	STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
	NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
	RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
	WS: /\s+/,
	ML_COMMENT: /\/\*[\s\S]*?\*\//,
	SL_COMMENT: /\/\/[^\n\r]*/
}, AbstractRule = "AbstractRule";
function isAbstractRule(e) {
	return reflection$1.isInstance(e, AbstractRule);
}
const AbstractType = "AbstractType";
function isAbstractType(e) {
	return reflection$1.isInstance(e, AbstractType);
}
const Condition = "Condition";
function isCondition(e) {
	return reflection$1.isInstance(e, Condition);
}
function isFeatureName(e) {
	return isPrimitiveType(e) || e === "current" || e === "entry" || e === "extends" || e === "false" || e === "fragment" || e === "grammar" || e === "hidden" || e === "import" || e === "interface" || e === "returns" || e === "terminal" || e === "true" || e === "type" || e === "infer" || e === "infers" || e === "with" || typeof e == "string" && /\^?[_a-zA-Z][\w_]*/.test(e);
}
function isPrimitiveType(e) {
	return e === "string" || e === "number" || e === "boolean" || e === "Date" || e === "bigint";
}
const TypeDefinition = "TypeDefinition";
function isTypeDefinition(e) {
	return reflection$1.isInstance(e, TypeDefinition);
}
const ValueLiteral = "ValueLiteral";
function isValueLiteral(e) {
	return reflection$1.isInstance(e, ValueLiteral);
}
const AbstractElement = "AbstractElement";
function isAbstractElement(e) {
	return reflection$1.isInstance(e, AbstractElement);
}
const ArrayLiteral = "ArrayLiteral";
function isArrayLiteral(e) {
	return reflection$1.isInstance(e, ArrayLiteral);
}
const ArrayType = "ArrayType";
function isArrayType(e) {
	return reflection$1.isInstance(e, ArrayType);
}
const BooleanLiteral = "BooleanLiteral";
function isBooleanLiteral(e) {
	return reflection$1.isInstance(e, BooleanLiteral);
}
const Conjunction = "Conjunction";
function isConjunction(e) {
	return reflection$1.isInstance(e, Conjunction);
}
const Disjunction = "Disjunction";
function isDisjunction(e) {
	return reflection$1.isInstance(e, Disjunction);
}
const Grammar = "Grammar";
function isGrammar(e) {
	return reflection$1.isInstance(e, Grammar);
}
const GrammarImport = "GrammarImport";
function isGrammarImport(e) {
	return reflection$1.isInstance(e, GrammarImport);
}
const InferredType = "InferredType";
function isInferredType(e) {
	return reflection$1.isInstance(e, InferredType);
}
const Interface = "Interface";
function isInterface(e) {
	return reflection$1.isInstance(e, Interface);
}
const NamedArgument = "NamedArgument";
function isNamedArgument(e) {
	return reflection$1.isInstance(e, NamedArgument);
}
const Negation = "Negation";
function isNegation(e) {
	return reflection$1.isInstance(e, Negation);
}
const NumberLiteral = "NumberLiteral";
function isNumberLiteral(e) {
	return reflection$1.isInstance(e, NumberLiteral);
}
const Parameter = "Parameter";
function isParameter(e) {
	return reflection$1.isInstance(e, Parameter);
}
const ParameterReference = "ParameterReference";
function isParameterReference(e) {
	return reflection$1.isInstance(e, ParameterReference);
}
const ParserRule = "ParserRule";
function isParserRule(e) {
	return reflection$1.isInstance(e, ParserRule);
}
const ReferenceType = "ReferenceType";
function isReferenceType(e) {
	return reflection$1.isInstance(e, ReferenceType);
}
const ReturnType = "ReturnType";
function isReturnType(e) {
	return reflection$1.isInstance(e, ReturnType);
}
const SimpleType = "SimpleType";
function isSimpleType(e) {
	return reflection$1.isInstance(e, SimpleType);
}
const StringLiteral = "StringLiteral";
function isStringLiteral(e) {
	return reflection$1.isInstance(e, StringLiteral);
}
const TerminalRule = "TerminalRule";
function isTerminalRule(e) {
	return reflection$1.isInstance(e, TerminalRule);
}
const Type = "Type";
function isType(e) {
	return reflection$1.isInstance(e, Type);
}
const TypeAttribute = "TypeAttribute";
function isTypeAttribute(e) {
	return reflection$1.isInstance(e, TypeAttribute);
}
const UnionType = "UnionType";
function isUnionType(e) {
	return reflection$1.isInstance(e, UnionType);
}
const Action = "Action";
function isAction(e) {
	return reflection$1.isInstance(e, Action);
}
const Alternatives = "Alternatives";
function isAlternatives(e) {
	return reflection$1.isInstance(e, Alternatives);
}
const Assignment = "Assignment";
function isAssignment(e) {
	return reflection$1.isInstance(e, Assignment);
}
const CharacterRange = "CharacterRange";
function isCharacterRange(e) {
	return reflection$1.isInstance(e, CharacterRange);
}
const CrossReference = "CrossReference";
function isCrossReference(e) {
	return reflection$1.isInstance(e, CrossReference);
}
const EndOfFile = "EndOfFile";
function isEndOfFile(e) {
	return reflection$1.isInstance(e, EndOfFile);
}
const Group$1 = "Group";
function isGroup(e) {
	return reflection$1.isInstance(e, Group$1);
}
const Keyword = "Keyword";
function isKeyword(e) {
	return reflection$1.isInstance(e, Keyword);
}
const NegatedToken = "NegatedToken";
function isNegatedToken(e) {
	return reflection$1.isInstance(e, NegatedToken);
}
const RegexToken = "RegexToken";
function isRegexToken(e) {
	return reflection$1.isInstance(e, RegexToken);
}
const RuleCall = "RuleCall";
function isRuleCall(e) {
	return reflection$1.isInstance(e, RuleCall);
}
const TerminalAlternatives = "TerminalAlternatives";
function isTerminalAlternatives(e) {
	return reflection$1.isInstance(e, TerminalAlternatives);
}
const TerminalGroup = "TerminalGroup";
function isTerminalGroup(e) {
	return reflection$1.isInstance(e, TerminalGroup);
}
const TerminalRuleCall = "TerminalRuleCall";
function isTerminalRuleCall(e) {
	return reflection$1.isInstance(e, TerminalRuleCall);
}
const UnorderedGroup = "UnorderedGroup";
function isUnorderedGroup(e) {
	return reflection$1.isInstance(e, UnorderedGroup);
}
const UntilToken = "UntilToken";
function isUntilToken(e) {
	return reflection$1.isInstance(e, UntilToken);
}
const Wildcard = "Wildcard";
function isWildcard(e) {
	return reflection$1.isInstance(e, Wildcard);
}
var LangiumGrammarAstReflection = class extends AbstractAstReflection {
	getAllTypes() {
		return [
			AbstractElement,
			AbstractRule,
			AbstractType,
			Action,
			Alternatives,
			ArrayLiteral,
			ArrayType,
			Assignment,
			BooleanLiteral,
			CharacterRange,
			Condition,
			Conjunction,
			CrossReference,
			Disjunction,
			EndOfFile,
			Grammar,
			GrammarImport,
			Group$1,
			InferredType,
			Interface,
			Keyword,
			NamedArgument,
			NegatedToken,
			Negation,
			NumberLiteral,
			Parameter,
			ParameterReference,
			ParserRule,
			ReferenceType,
			RegexToken,
			ReturnType,
			RuleCall,
			SimpleType,
			StringLiteral,
			TerminalAlternatives,
			TerminalGroup,
			TerminalRule,
			TerminalRuleCall,
			Type,
			TypeAttribute,
			TypeDefinition,
			UnionType,
			UnorderedGroup,
			UntilToken,
			ValueLiteral,
			Wildcard
		];
	}
	computeIsSubtype(e, m) {
		switch (e) {
			case Action:
			case Alternatives:
			case Assignment:
			case CharacterRange:
			case CrossReference:
			case EndOfFile:
			case Group$1:
			case Keyword:
			case NegatedToken:
			case RegexToken:
			case RuleCall:
			case TerminalAlternatives:
			case TerminalGroup:
			case TerminalRuleCall:
			case UnorderedGroup:
			case UntilToken:
			case Wildcard: return this.isSubtype(AbstractElement, m);
			case ArrayLiteral:
			case NumberLiteral:
			case StringLiteral: return this.isSubtype(ValueLiteral, m);
			case ArrayType:
			case ReferenceType:
			case SimpleType:
			case UnionType: return this.isSubtype(TypeDefinition, m);
			case BooleanLiteral: return this.isSubtype("Condition", m) || this.isSubtype("ValueLiteral", m);
			case Conjunction:
			case Disjunction:
			case Negation:
			case ParameterReference: return this.isSubtype(Condition, m);
			case InferredType:
			case Interface:
			case Type: return this.isSubtype(AbstractType, m);
			case ParserRule: return this.isSubtype("AbstractRule", m) || this.isSubtype("AbstractType", m);
			case TerminalRule: return this.isSubtype(AbstractRule, m);
			default: return !1;
		}
	}
	getReferenceType(e) {
		let m = `${e.container.$type}:${e.property}`;
		switch (m) {
			case "Action:type":
			case "CrossReference:type":
			case "Interface:superTypes":
			case "ParserRule:returnType":
			case "SimpleType:typeRef": return AbstractType;
			case "Grammar:hiddenTokens":
			case "ParserRule:hiddenTokens":
			case "RuleCall:rule": return AbstractRule;
			case "Grammar:usedGrammars": return Grammar;
			case "NamedArgument:parameter":
			case "ParameterReference:parameter": return Parameter;
			case "TerminalRuleCall:rule": return TerminalRule;
			default: throw Error(`${m} is not a valid reference id.`);
		}
	}
	getTypeMetaData(e) {
		switch (e) {
			case AbstractElement: return {
				name: AbstractElement,
				properties: [{ name: "cardinality" }, { name: "lookahead" }]
			};
			case ArrayLiteral: return {
				name: ArrayLiteral,
				properties: [{
					name: "elements",
					defaultValue: []
				}]
			};
			case ArrayType: return {
				name: ArrayType,
				properties: [{ name: "elementType" }]
			};
			case BooleanLiteral: return {
				name: BooleanLiteral,
				properties: [{
					name: "true",
					defaultValue: !1
				}]
			};
			case Conjunction: return {
				name: Conjunction,
				properties: [{ name: "left" }, { name: "right" }]
			};
			case Disjunction: return {
				name: Disjunction,
				properties: [{ name: "left" }, { name: "right" }]
			};
			case Grammar: return {
				name: Grammar,
				properties: [
					{
						name: "definesHiddenTokens",
						defaultValue: !1
					},
					{
						name: "hiddenTokens",
						defaultValue: []
					},
					{
						name: "imports",
						defaultValue: []
					},
					{
						name: "interfaces",
						defaultValue: []
					},
					{
						name: "isDeclared",
						defaultValue: !1
					},
					{ name: "name" },
					{
						name: "rules",
						defaultValue: []
					},
					{
						name: "types",
						defaultValue: []
					},
					{
						name: "usedGrammars",
						defaultValue: []
					}
				]
			};
			case GrammarImport: return {
				name: GrammarImport,
				properties: [{ name: "path" }]
			};
			case InferredType: return {
				name: InferredType,
				properties: [{ name: "name" }]
			};
			case Interface: return {
				name: Interface,
				properties: [
					{
						name: "attributes",
						defaultValue: []
					},
					{ name: "name" },
					{
						name: "superTypes",
						defaultValue: []
					}
				]
			};
			case NamedArgument: return {
				name: NamedArgument,
				properties: [
					{
						name: "calledByName",
						defaultValue: !1
					},
					{ name: "parameter" },
					{ name: "value" }
				]
			};
			case Negation: return {
				name: Negation,
				properties: [{ name: "value" }]
			};
			case NumberLiteral: return {
				name: NumberLiteral,
				properties: [{ name: "value" }]
			};
			case Parameter: return {
				name: Parameter,
				properties: [{ name: "name" }]
			};
			case ParameterReference: return {
				name: ParameterReference,
				properties: [{ name: "parameter" }]
			};
			case ParserRule: return {
				name: ParserRule,
				properties: [
					{ name: "dataType" },
					{
						name: "definesHiddenTokens",
						defaultValue: !1
					},
					{ name: "definition" },
					{
						name: "entry",
						defaultValue: !1
					},
					{
						name: "fragment",
						defaultValue: !1
					},
					{
						name: "hiddenTokens",
						defaultValue: []
					},
					{ name: "inferredType" },
					{ name: "name" },
					{
						name: "parameters",
						defaultValue: []
					},
					{ name: "returnType" },
					{
						name: "wildcard",
						defaultValue: !1
					}
				]
			};
			case ReferenceType: return {
				name: ReferenceType,
				properties: [{ name: "referenceType" }]
			};
			case ReturnType: return {
				name: ReturnType,
				properties: [{ name: "name" }]
			};
			case SimpleType: return {
				name: SimpleType,
				properties: [
					{ name: "primitiveType" },
					{ name: "stringType" },
					{ name: "typeRef" }
				]
			};
			case StringLiteral: return {
				name: StringLiteral,
				properties: [{ name: "value" }]
			};
			case TerminalRule: return {
				name: TerminalRule,
				properties: [
					{ name: "definition" },
					{
						name: "fragment",
						defaultValue: !1
					},
					{
						name: "hidden",
						defaultValue: !1
					},
					{ name: "name" },
					{ name: "type" }
				]
			};
			case Type: return {
				name: Type,
				properties: [{ name: "name" }, { name: "type" }]
			};
			case TypeAttribute: return {
				name: TypeAttribute,
				properties: [
					{ name: "defaultValue" },
					{
						name: "isOptional",
						defaultValue: !1
					},
					{ name: "name" },
					{ name: "type" }
				]
			};
			case UnionType: return {
				name: UnionType,
				properties: [{
					name: "types",
					defaultValue: []
				}]
			};
			case Action: return {
				name: Action,
				properties: [
					{ name: "cardinality" },
					{ name: "feature" },
					{ name: "inferredType" },
					{ name: "lookahead" },
					{ name: "operator" },
					{ name: "type" }
				]
			};
			case Alternatives: return {
				name: Alternatives,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case Assignment: return {
				name: Assignment,
				properties: [
					{ name: "cardinality" },
					{ name: "feature" },
					{ name: "lookahead" },
					{ name: "operator" },
					{ name: "terminal" }
				]
			};
			case CharacterRange: return {
				name: CharacterRange,
				properties: [
					{ name: "cardinality" },
					{ name: "left" },
					{ name: "lookahead" },
					{ name: "right" }
				]
			};
			case CrossReference: return {
				name: CrossReference,
				properties: [
					{ name: "cardinality" },
					{
						name: "deprecatedSyntax",
						defaultValue: !1
					},
					{ name: "lookahead" },
					{ name: "terminal" },
					{ name: "type" }
				]
			};
			case EndOfFile: return {
				name: EndOfFile,
				properties: [{ name: "cardinality" }, { name: "lookahead" }]
			};
			case Group$1: return {
				name: Group$1,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "guardCondition" },
					{ name: "lookahead" }
				]
			};
			case Keyword: return {
				name: Keyword,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "value" }
				]
			};
			case NegatedToken: return {
				name: NegatedToken,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "terminal" }
				]
			};
			case RegexToken: return {
				name: RegexToken,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "regex" }
				]
			};
			case RuleCall: return {
				name: RuleCall,
				properties: [
					{
						name: "arguments",
						defaultValue: []
					},
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "rule" }
				]
			};
			case TerminalAlternatives: return {
				name: TerminalAlternatives,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case TerminalGroup: return {
				name: TerminalGroup,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case TerminalRuleCall: return {
				name: TerminalRuleCall,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "rule" }
				]
			};
			case UnorderedGroup: return {
				name: UnorderedGroup,
				properties: [
					{ name: "cardinality" },
					{
						name: "elements",
						defaultValue: []
					},
					{ name: "lookahead" }
				]
			};
			case UntilToken: return {
				name: UntilToken,
				properties: [
					{ name: "cardinality" },
					{ name: "lookahead" },
					{ name: "terminal" }
				]
			};
			case Wildcard: return {
				name: Wildcard,
				properties: [{ name: "cardinality" }, { name: "lookahead" }]
			};
			default: return {
				name: e,
				properties: []
			};
		}
	}
};
const reflection$1 = new LangiumGrammarAstReflection();
var ast_utils_exports = /* @__PURE__ */ __export({
	assignMandatoryProperties: () => assignMandatoryProperties,
	copyAstNode: () => copyAstNode,
	findLocalReferences: () => findLocalReferences,
	findRootNode: () => findRootNode,
	getContainerOfType: () => getContainerOfType,
	getDocument: () => getDocument,
	hasContainerOfType: () => hasContainerOfType,
	linkContentToContainer: () => linkContentToContainer,
	streamAllContents: () => streamAllContents,
	streamAst: () => streamAst,
	streamContents: () => streamContents,
	streamReferences: () => streamReferences
});
function linkContentToContainer(e) {
	for (let [m, h] of Object.entries(e)) m.startsWith("$") || (Array.isArray(h) ? h.forEach((h, g) => {
		isAstNode(h) && (h.$container = e, h.$containerProperty = m, h.$containerIndex = g);
	}) : isAstNode(h) && (h.$container = e, h.$containerProperty = m));
}
function getContainerOfType(e, m) {
	let h = e;
	for (; h;) {
		if (m(h)) return h;
		h = h.$container;
	}
}
function hasContainerOfType(e, m) {
	let h = e;
	for (; h;) {
		if (m(h)) return !0;
		h = h.$container;
	}
	return !1;
}
function getDocument(e) {
	let m = findRootNode(e).$document;
	if (!m) throw Error("AST node has no document.");
	return m;
}
function findRootNode(e) {
	for (; e.$container;) e = e.$container;
	return e;
}
function streamContents(e, m) {
	if (!e) throw Error("Node must be an AstNode.");
	let h = m?.range;
	return new StreamImpl(() => ({
		keys: Object.keys(e),
		keyIndex: 0,
		arrayIndex: 0
	}), (m) => {
		for (; m.keyIndex < m.keys.length;) {
			let g = m.keys[m.keyIndex];
			if (!g.startsWith("$")) {
				let _ = e[g];
				if (isAstNode(_)) {
					if (m.keyIndex++, isAstNodeInRange(_, h)) return {
						done: !1,
						value: _
					};
				} else if (Array.isArray(_)) {
					for (; m.arrayIndex < _.length;) {
						let e = _[m.arrayIndex++];
						if (isAstNode(e) && isAstNodeInRange(e, h)) return {
							done: !1,
							value: e
						};
					}
					m.arrayIndex = 0;
				}
			}
			m.keyIndex++;
		}
		return DONE_RESULT;
	});
}
function streamAllContents(e, m) {
	if (!e) throw Error("Root node must be an AstNode.");
	return new TreeStreamImpl(e, (e) => streamContents(e, m));
}
function streamAst(e, m) {
	if (e) {
		if (m?.range && !isAstNodeInRange(e, m.range)) return new TreeStreamImpl(e, () => []);
	} else throw Error("Root node must be an AstNode.");
	return new TreeStreamImpl(e, (e) => streamContents(e, m), { includeRoot: !0 });
}
function isAstNodeInRange(e, m) {
	if (!m) return !0;
	let h = e.$cstNode?.range;
	return h ? inRange(h, m) : !1;
}
function streamReferences(e) {
	return new StreamImpl(() => ({
		keys: Object.keys(e),
		keyIndex: 0,
		arrayIndex: 0
	}), (m) => {
		for (; m.keyIndex < m.keys.length;) {
			let h = m.keys[m.keyIndex];
			if (!h.startsWith("$")) {
				let g = e[h];
				if (isReference(g)) return m.keyIndex++, {
					done: !1,
					value: {
						reference: g,
						container: e,
						property: h
					}
				};
				if (Array.isArray(g)) {
					for (; m.arrayIndex < g.length;) {
						let _ = m.arrayIndex++, v = g[_];
						if (isReference(v)) return {
							done: !1,
							value: {
								reference: v,
								container: e,
								property: h,
								index: _
							}
						};
					}
					m.arrayIndex = 0;
				}
			}
			m.keyIndex++;
		}
		return DONE_RESULT;
	});
}
function findLocalReferences(e, m = getDocument(e).parseResult.value) {
	let h = [];
	return streamAst(m).forEach((m) => {
		streamReferences(m).forEach((m) => {
			m.reference.ref === e && h.push(m.reference);
		});
	}), stream(h);
}
function assignMandatoryProperties(e, m) {
	let h = e.getTypeMetaData(m.$type), g = m;
	for (let e of h.properties) e.defaultValue !== void 0 && g[e.name] === void 0 && (g[e.name] = copyDefaultValue(e.defaultValue));
}
function copyDefaultValue(e) {
	return Array.isArray(e) ? [...e.map(copyDefaultValue)] : e;
}
function copyAstNode(e, m) {
	let h = { $type: e.$type };
	for (let [g, _] of Object.entries(e)) if (!g.startsWith("$")) if (isAstNode(_)) h[g] = copyAstNode(_, m);
	else if (isReference(_)) h[g] = m(h, g, _.$refNode, _.$refText);
	else if (Array.isArray(_)) {
		let e = [];
		for (let v of _) isAstNode(v) ? e.push(copyAstNode(v, m)) : isReference(v) ? e.push(m(h, g, v.$refNode, v.$refText)) : e.push(v);
		h[g] = e;
	} else h[g] = _;
	return linkContentToContainer(h), h;
}
function cc(e) {
	return e.charCodeAt(0);
}
function insertToSet(e, m) {
	Array.isArray(e) ? e.forEach(function(e) {
		m.push(e);
	}) : m.push(e);
}
function addFlag(e, m) {
	if (e[m] === !0) throw "duplicate flag " + m;
	e[m], e[m] = !0;
}
function ASSERT_EXISTS(e) {
	// istanbul ignore next
	if (e === void 0) throw Error("Internal Error - Should never get here!");
	return !0;
}
// istanbul ignore next
function ASSERT_NEVER_REACH_HERE() {
	throw Error("Internal Error - Should never get here!");
}
function isCharacter(e) {
	return e.type === "Character";
}
const digitsCharCodes = [];
for (let e = cc("0"); e <= cc("9"); e++) digitsCharCodes.push(e);
const wordCharCodes = [cc("_")].concat(digitsCharCodes);
for (let e = cc("a"); e <= cc("z"); e++) wordCharCodes.push(e);
for (let e = cc("A"); e <= cc("Z"); e++) wordCharCodes.push(e);
const whitespaceCodes = [
	cc(" "),
	cc("\f"),
	cc("\n"),
	cc("\r"),
	cc("	"),
	cc("\v"),
	cc("	"),
	cc("\xA0"),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc("\u2028"),
	cc("\u2029"),
	cc(" "),
	cc(" "),
	cc("　"),
	cc("﻿")
];
var hexDigitPattern = /[0-9a-fA-F]/, decimalPattern = /[0-9]/, decimalPatternNoZero = /[1-9]/, RegExpParser = class {
	constructor() {
		this.idx = 0, this.input = "", this.groupIdx = 0;
	}
	saveState() {
		return {
			idx: this.idx,
			input: this.input,
			groupIdx: this.groupIdx
		};
	}
	restoreState(e) {
		this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
	}
	pattern(e) {
		this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
		let m = this.disjunction();
		this.consumeChar("/");
		let h = {
			type: "Flags",
			loc: {
				begin: this.idx,
				end: e.length
			},
			global: !1,
			ignoreCase: !1,
			multiLine: !1,
			unicode: !1,
			sticky: !1
		};
		for (; this.isRegExpFlag();) switch (this.popChar()) {
			case "g":
				addFlag(h, "global");
				break;
			case "i":
				addFlag(h, "ignoreCase");
				break;
			case "m":
				addFlag(h, "multiLine");
				break;
			case "u":
				addFlag(h, "unicode");
				break;
			case "y":
				addFlag(h, "sticky");
				break;
		}
		if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
		return {
			type: "Pattern",
			flags: h,
			value: m,
			loc: this.loc(0)
		};
	}
	disjunction() {
		let e = [], m = this.idx;
		for (e.push(this.alternative()); this.peekChar() === "|";) this.consumeChar("|"), e.push(this.alternative());
		return {
			type: "Disjunction",
			value: e,
			loc: this.loc(m)
		};
	}
	alternative() {
		let e = [], m = this.idx;
		for (; this.isTerm();) e.push(this.term());
		return {
			type: "Alternative",
			value: e,
			loc: this.loc(m)
		};
	}
	term() {
		return this.isAssertion() ? this.assertion() : this.atom();
	}
	assertion() {
		let e = this.idx;
		switch (this.popChar()) {
			case "^": return {
				type: "StartAnchor",
				loc: this.loc(e)
			};
			case "$": return {
				type: "EndAnchor",
				loc: this.loc(e)
			};
			case "\\":
				switch (this.popChar()) {
					case "b": return {
						type: "WordBoundary",
						loc: this.loc(e)
					};
					case "B": return {
						type: "NonWordBoundary",
						loc: this.loc(e)
					};
				}
				// istanbul ignore next
				throw Error("Invalid Assertion Escape");
			case "(":
				this.consumeChar("?");
				let m;
				switch (this.popChar()) {
					case "=":
						m = "Lookahead";
						break;
					case "!":
						m = "NegativeLookahead";
						break;
				}
				ASSERT_EXISTS(m);
				let h = this.disjunction();
				return this.consumeChar(")"), {
					type: m,
					value: h,
					loc: this.loc(e)
				};
		}
		// istanbul ignore next
		return ASSERT_NEVER_REACH_HERE();
	}
	quantifier(e = !1) {
		let m, h = this.idx;
		switch (this.popChar()) {
			case "*":
				m = {
					atLeast: 0,
					atMost: Infinity
				};
				break;
			case "+":
				m = {
					atLeast: 1,
					atMost: Infinity
				};
				break;
			case "?":
				m = {
					atLeast: 0,
					atMost: 1
				};
				break;
			case "{":
				let h = this.integerIncludingZero();
				switch (this.popChar()) {
					case "}":
						m = {
							atLeast: h,
							atMost: h
						};
						break;
					case ",":
						let e;
						this.isDigit() ? (e = this.integerIncludingZero(), m = {
							atLeast: h,
							atMost: e
						}) : m = {
							atLeast: h,
							atMost: Infinity
						}, this.consumeChar("}");
						break;
				}
				if (e === !0 && m === void 0) return;
				ASSERT_EXISTS(m);
				break;
		}
		if (!(e === !0 && m === void 0) && ASSERT_EXISTS(m)) return this.peekChar(0) === "?" ? (this.consumeChar("?"), m.greedy = !1) : m.greedy = !0, m.type = "Quantifier", m.loc = this.loc(h), m;
	}
	atom() {
		let e, m = this.idx;
		switch (this.peekChar()) {
			case ".":
				e = this.dotAll();
				break;
			case "\\":
				e = this.atomEscape();
				break;
			case "[":
				e = this.characterClass();
				break;
			case "(":
				e = this.group();
				break;
		}
		// istanbul ignore next
		return e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), ASSERT_EXISTS(e) ? (e.loc = this.loc(m), this.isQuantifier() && (e.quantifier = this.quantifier()), e) : ASSERT_NEVER_REACH_HERE();
	}
	dotAll() {
		return this.consumeChar("."), {
			type: "Set",
			complement: !0,
			value: [
				cc("\n"),
				cc("\r"),
				cc("\u2028"),
				cc("\u2029")
			]
		};
	}
	atomEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9": return this.decimalEscapeAtom();
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	decimalEscapeAtom() {
		return {
			type: "GroupBackReference",
			value: this.positiveInteger()
		};
	}
	characterClassEscape() {
		let e, m = !1;
		switch (this.popChar()) {
			case "d":
				e = digitsCharCodes;
				break;
			case "D":
				e = digitsCharCodes, m = !0;
				break;
			case "s":
				e = whitespaceCodes;
				break;
			case "S":
				e = whitespaceCodes, m = !0;
				break;
			case "w":
				e = wordCharCodes;
				break;
			case "W":
				e = wordCharCodes, m = !0;
				break;
		}
		// istanbul ignore next
		return ASSERT_EXISTS(e) ? {
			type: "Set",
			value: e,
			complement: m
		} : ASSERT_NEVER_REACH_HERE();
	}
	controlEscapeAtom() {
		let e;
		switch (this.popChar()) {
			case "f":
				e = cc("\f");
				break;
			case "n":
				e = cc("\n");
				break;
			case "r":
				e = cc("\r");
				break;
			case "t":
				e = cc("	");
				break;
			case "v":
				e = cc("\v");
				break;
		}
		// istanbul ignore next
		return ASSERT_EXISTS(e) ? {
			type: "Character",
			value: e
		} : ASSERT_NEVER_REACH_HERE();
	}
	controlLetterEscapeAtom() {
		this.consumeChar("c");
		let e = this.popChar();
		if (/[a-zA-Z]/.test(e) === !1) throw Error("Invalid ");
		return {
			type: "Character",
			value: e.toUpperCase().charCodeAt(0) - 64
		};
	}
	nulCharacterAtom() {
		return this.consumeChar("0"), {
			type: "Character",
			value: cc("\0")
		};
	}
	hexEscapeSequenceAtom() {
		return this.consumeChar("x"), this.parseHexDigits(2);
	}
	regExpUnicodeEscapeSequenceAtom() {
		return this.consumeChar("u"), this.parseHexDigits(4);
	}
	identityEscapeAtom() {
		return {
			type: "Character",
			value: cc(this.popChar())
		};
	}
	classPatternCharacterAtom() {
		switch (this.peekChar()) {
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029":
			case "\\":
			case "]": throw Error("TBD");
			default: return {
				type: "Character",
				value: cc(this.popChar())
			};
		}
	}
	characterClass() {
		let e = [], m = !1;
		for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), m = !0); this.isClassAtom();) {
			let m = this.classAtom();
			if (m.type, isCharacter(m) && this.isRangeDash()) {
				this.consumeChar("-");
				let h = this.classAtom();
				if (h.type, isCharacter(h)) {
					if (h.value < m.value) throw Error("Range out of order in character class");
					e.push({
						from: m.value,
						to: h.value
					});
				} else insertToSet(m.value, e), e.push(cc("-")), insertToSet(h.value, e);
			} else insertToSet(m.value, e);
		}
		return this.consumeChar("]"), {
			type: "Set",
			complement: m,
			value: e
		};
	}
	classAtom() {
		switch (this.peekChar()) {
			case "]":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": throw Error("TBD");
			case "\\": return this.classEscape();
			default: return this.classPatternCharacterAtom();
		}
	}
	classEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "b": return this.consumeChar("b"), {
				type: "Character",
				value: cc("\b")
			};
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	group() {
		let e = !0;
		switch (this.consumeChar("("), this.peekChar(0)) {
			case "?":
				this.consumeChar("?"), this.consumeChar(":"), e = !1;
				break;
			default:
				this.groupIdx++;
				break;
		}
		let m = this.disjunction();
		this.consumeChar(")");
		let h = {
			type: "Group",
			capturing: e,
			value: m
		};
		return e && (h.idx = this.groupIdx), h;
	}
	positiveInteger() {
		let e = this.popChar();
		// istanbul ignore next - can't ever get here due to previous lookahead checks
		if (decimalPatternNoZero.test(e) === !1) throw Error("Expecting a positive integer");
		for (; decimalPattern.test(this.peekChar(0));) e += this.popChar();
		return parseInt(e, 10);
	}
	integerIncludingZero() {
		let e = this.popChar();
		if (decimalPattern.test(e) === !1) throw Error("Expecting an integer");
		for (; decimalPattern.test(this.peekChar(0));) e += this.popChar();
		return parseInt(e, 10);
	}
	patternCharacter() {
		let e = this.popChar();
		switch (e) {
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029":
			case "^":
			case "$":
			case "\\":
			case ".":
			case "*":
			case "+":
			case "?":
			case "(":
			case ")":
			case "[":
			case "|":
 // istanbul ignore next
			throw Error("TBD");
			default: return {
				type: "Character",
				value: cc(e)
			};
		}
	}
	isRegExpFlag() {
		switch (this.peekChar(0)) {
			case "g":
			case "i":
			case "m":
			case "u":
			case "y": return !0;
			default: return !1;
		}
	}
	isRangeDash() {
		return this.peekChar() === "-" && this.isClassAtom(1);
	}
	isDigit() {
		return decimalPattern.test(this.peekChar(0));
	}
	isClassAtom(e = 0) {
		switch (this.peekChar(e)) {
			case "]":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	isTerm() {
		return this.isAtom() || this.isAssertion();
	}
	isAtom() {
		if (this.isPatternCharacter()) return !0;
		switch (this.peekChar(0)) {
			case ".":
			case "\\":
			case "[":
			case "(": return !0;
			default: return !1;
		}
	}
	isAssertion() {
		switch (this.peekChar(0)) {
			case "^":
			case "$": return !0;
			case "\\": switch (this.peekChar(1)) {
				case "b":
				case "B": return !0;
				default: return !1;
			}
			case "(": return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
			default: return !1;
		}
	}
	isQuantifier() {
		let e = this.saveState();
		try {
			return this.quantifier(!0) !== void 0;
		} catch {
			return !1;
		} finally {
			this.restoreState(e);
		}
	}
	isPatternCharacter() {
		switch (this.peekChar()) {
			case "^":
			case "$":
			case "\\":
			case ".":
			case "*":
			case "+":
			case "?":
			case "(":
			case ")":
			case "[":
			case "|":
			case "/":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	parseHexDigits(e) {
		let m = "";
		for (let h = 0; h < e; h++) {
			let e = this.popChar();
			if (hexDigitPattern.test(e) === !1) throw Error("Expecting a HexDecimal digits");
			m += e;
		}
		return {
			type: "Character",
			value: parseInt(m, 16)
		};
	}
	peekChar(e = 0) {
		return this.input[this.idx + e];
	}
	popChar() {
		let e = this.peekChar(0);
		return this.consumeChar(void 0), e;
	}
	consumeChar(e) {
		if (e !== void 0 && this.input[this.idx] !== e) throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
		if (this.idx >= this.input.length) throw Error("Unexpected end of input");
		this.idx++;
	}
	loc(e) {
		return {
			begin: e,
			end: this.idx
		};
	}
}, BaseRegExpVisitor = class {
	visitChildren(e) {
		for (let m in e) {
			let h = e[m];
			/* istanbul ignore else */
			e.hasOwnProperty(m) && (h.type === void 0 ? Array.isArray(h) && h.forEach((e) => {
				this.visit(e);
			}, this) : this.visit(h));
		}
	}
	visit(e) {
		switch (e.type) {
			case "Pattern":
				this.visitPattern(e);
				break;
			case "Flags":
				this.visitFlags(e);
				break;
			case "Disjunction":
				this.visitDisjunction(e);
				break;
			case "Alternative":
				this.visitAlternative(e);
				break;
			case "StartAnchor":
				this.visitStartAnchor(e);
				break;
			case "EndAnchor":
				this.visitEndAnchor(e);
				break;
			case "WordBoundary":
				this.visitWordBoundary(e);
				break;
			case "NonWordBoundary":
				this.visitNonWordBoundary(e);
				break;
			case "Lookahead":
				this.visitLookahead(e);
				break;
			case "NegativeLookahead":
				this.visitNegativeLookahead(e);
				break;
			case "Character":
				this.visitCharacter(e);
				break;
			case "Set":
				this.visitSet(e);
				break;
			case "Group":
				this.visitGroup(e);
				break;
			case "GroupBackReference":
				this.visitGroupBackReference(e);
				break;
			case "Quantifier":
				this.visitQuantifier(e);
				break;
		}
		this.visitChildren(e);
	}
	visitPattern(e) {}
	visitFlags(e) {}
	visitDisjunction(e) {}
	visitAlternative(e) {}
	visitStartAnchor(e) {}
	visitEndAnchor(e) {}
	visitWordBoundary(e) {}
	visitNonWordBoundary(e) {}
	visitLookahead(e) {}
	visitNegativeLookahead(e) {}
	visitCharacter(e) {}
	visitSet(e) {}
	visitGroup(e) {}
	visitGroupBackReference(e) {}
	visitQuantifier(e) {}
}, regexp_utils_exports = /* @__PURE__ */ __export({
	NEWLINE_REGEXP: () => NEWLINE_REGEXP,
	escapeRegExp: () => escapeRegExp,
	getCaseInsensitivePattern: () => getCaseInsensitivePattern,
	getTerminalParts: () => getTerminalParts,
	isMultilineComment: () => isMultilineComment,
	isWhitespace: () => isWhitespace,
	partialMatches: () => partialMatches,
	partialRegExp: () => partialRegExp,
	whitespaceCharacters: () => whitespaceCharacters
});
const NEWLINE_REGEXP = /\r?\n/gm;
var regexpParser = new RegExpParser(), visitor = new class extends BaseRegExpVisitor {
	constructor() {
		super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
	}
	get endRegex() {
		return this.endRegexpStack.join("");
	}
	reset(e) {
		this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
	}
	visitGroup(e) {
		e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
	}
	visitCharacter(e) {
		let m = String.fromCharCode(e.value);
		if (!this.multiline && m === "\n" && (this.multiline = !0), e.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let e = escapeRegExp(m);
			this.endRegexpStack.push(e), this.isStarting && (this.startRegexp += e);
		}
	}
	visitSet(e) {
		if (!this.multiline) {
			let m = this.regex.substring(e.loc.begin, e.loc.end), h = new RegExp(m);
			this.multiline = !!"\n".match(h);
		}
		if (e.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let m = this.regex.substring(e.loc.begin, e.loc.end);
			this.endRegexpStack.push(m), this.isStarting && (this.startRegexp += m);
		}
	}
	visitChildren(e) {
		e.type === "Group" && e.quantifier || super.visitChildren(e);
	}
}();
function getTerminalParts(e) {
	try {
		typeof e != "string" && (e = e.source), e = `/${e}/`;
		let m = regexpParser.pattern(e), h = [];
		for (let g of m.value.value) visitor.reset(e), visitor.visit(g), h.push({
			start: visitor.startRegexp,
			end: visitor.endRegex
		});
		return h;
	} catch {
		return [];
	}
}
function isMultilineComment(e) {
	try {
		return typeof e == "string" && (e = new RegExp(e)), e = e.toString(), visitor.reset(e), visitor.visit(regexpParser.pattern(e)), visitor.multiline;
	} catch {
		return !1;
	}
}
const whitespaceCharacters = "\f\n\r	\v \xA0            \u2028\u2029  　﻿".split("");
function isWhitespace(e) {
	let m = typeof e == "string" ? new RegExp(e) : e;
	return whitespaceCharacters.some((e) => m.test(e));
}
function escapeRegExp(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getCaseInsensitivePattern(e) {
	return Array.prototype.map.call(e, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : escapeRegExp(e)).join("");
}
function partialMatches(e, m) {
	let h = partialRegExp(e), g = m.match(h);
	return !!g && g[0].length > 0;
}
function partialRegExp(e) {
	typeof e == "string" && (e = new RegExp(e));
	let m = e, h = e.source, g = 0;
	function _() {
		let e = "", v;
		function y(m) {
			e += h.substr(g, m), g += m;
		}
		function b(m) {
			e += "(?:" + h.substr(g, m) + "|$)", g += m;
		}
		for (; g < h.length;) switch (h[g]) {
			case "\\":
				switch (h[g + 1]) {
					case "c":
						b(3);
						break;
					case "x":
						b(4);
						break;
					case "u":
						m.unicode ? h[g + 2] === "{" ? b(h.indexOf("}", g) - g + 1) : b(6) : b(2);
						break;
					case "p":
					case "P":
						m.unicode ? b(h.indexOf("}", g) - g + 1) : b(2);
						break;
					case "k":
						b(h.indexOf(">", g) - g + 1);
						break;
					default:
						b(2);
						break;
				}
				break;
			case "[":
				v = /\[(?:\\.|.)*?\]/g, v.lastIndex = g, v = v.exec(h) || [], b(v[0].length);
				break;
			case "|":
			case "^":
			case "$":
			case "*":
			case "+":
			case "?":
				y(1);
				break;
			case "{":
				v = /\{\d+,?\d*\}/g, v.lastIndex = g, v = v.exec(h), v ? y(v[0].length) : b(1);
				break;
			case "(":
				if (h[g + 1] === "?") switch (h[g + 2]) {
					case ":":
						e += "(?:", g += 3, e += _() + "|$)";
						break;
					case "=":
						e += "(?=", g += 3, e += _() + ")";
						break;
					case "!":
						v = g, g += 3, _(), e += h.substr(v, g - v);
						break;
					case "<":
						switch (h[g + 3]) {
							case "=":
							case "!":
								v = g, g += 4, _(), e += h.substr(v, g - v);
								break;
							default:
								y(h.indexOf(">", g) - g + 1), e += _() + "|$)";
								break;
						}
						break;
				}
				else y(1), e += _() + "|$)";
				break;
			case ")": return ++g, e;
			default:
				b(1);
				break;
		}
		return e;
	}
	return new RegExp(_(), e.flags);
}
var grammar_utils_exports = /* @__PURE__ */ __export({
	findAssignment: () => findAssignment,
	findNameAssignment: () => findNameAssignment,
	findNodeForKeyword: () => findNodeForKeyword,
	findNodeForProperty: () => findNodeForProperty,
	findNodesForKeyword: () => findNodesForKeyword,
	findNodesForKeywordInternal: () => findNodesForKeywordInternal,
	findNodesForProperty: () => findNodesForProperty,
	getActionAtElement: () => getActionAtElement,
	getActionType: () => getActionType,
	getAllReachableRules: () => getAllReachableRules,
	getCrossReferenceTerminal: () => getCrossReferenceTerminal,
	getEntryRule: () => getEntryRule,
	getExplicitRuleType: () => getExplicitRuleType,
	getHiddenRules: () => getHiddenRules,
	getRuleType: () => getRuleType,
	getRuleTypeName: () => getRuleTypeName,
	getTypeName: () => getTypeName,
	isArrayCardinality: () => isArrayCardinality,
	isArrayOperator: () => isArrayOperator,
	isCommentTerminal: () => isCommentTerminal,
	isDataType: () => isDataType,
	isDataTypeRule: () => isDataTypeRule,
	isOptionalCardinality: () => isOptionalCardinality,
	terminalRegex: () => terminalRegex
});
function getEntryRule(e) {
	return e.rules.find((e) => isParserRule(e) && e.entry);
}
function getHiddenRules(e) {
	return e.rules.filter((e) => isTerminalRule(e) && e.hidden);
}
function getAllReachableRules(e, m) {
	let h = /* @__PURE__ */ new Set(), g = getEntryRule(e);
	if (!g) return new Set(e.rules);
	let _ = [g].concat(getHiddenRules(e));
	for (let e of _) ruleDfs(e, h, m);
	let v = /* @__PURE__ */ new Set();
	for (let m of e.rules) (h.has(m.name) || isTerminalRule(m) && m.hidden) && v.add(m);
	return v;
}
function ruleDfs(e, m, h) {
	m.add(e.name), streamAllContents(e).forEach((e) => {
		if (isRuleCall(e) || h && isTerminalRuleCall(e)) {
			let g = e.rule.ref;
			g && !m.has(g.name) && ruleDfs(g, m, h);
		}
	});
}
function getCrossReferenceTerminal(e) {
	if (e.terminal) return e.terminal;
	if (e.type.ref) return findNameAssignment(e.type.ref)?.terminal;
}
function isCommentTerminal(e) {
	return e.hidden && !isWhitespace(terminalRegex(e));
}
function findNodesForProperty(e, m) {
	return !e || !m ? [] : findNodesForPropertyInternal(e, m, e.astNode, !0);
}
function findNodeForProperty(e, m, h) {
	if (!e || !m) return;
	let g = findNodesForPropertyInternal(e, m, e.astNode, !0);
	if (g.length !== 0) return h = h === void 0 ? 0 : Math.max(0, Math.min(h, g.length - 1)), g[h];
}
function findNodesForPropertyInternal(e, m, h, g) {
	if (!g) {
		let h = getContainerOfType(e.grammarSource, isAssignment);
		if (h && h.feature === m) return [e];
	}
	return isCompositeCstNode(e) && e.astNode === h ? e.content.flatMap((e) => findNodesForPropertyInternal(e, m, h, !1)) : [];
}
function findNodesForKeyword(e, m) {
	return e ? findNodesForKeywordInternal(e, m, e?.astNode) : [];
}
function findNodeForKeyword(e, m, h) {
	if (!e) return;
	let g = findNodesForKeywordInternal(e, m, e?.astNode);
	if (g.length !== 0) return h = h === void 0 ? 0 : Math.max(0, Math.min(h, g.length - 1)), g[h];
}
function findNodesForKeywordInternal(e, m, h) {
	if (e.astNode !== h) return [];
	if (isKeyword(e.grammarSource) && e.grammarSource.value === m) return [e];
	let g = streamCst(e).iterator(), _, v = [];
	do
		if (_ = g.next(), !_.done) {
			let e = _.value;
			e.astNode === h ? isKeyword(e.grammarSource) && e.grammarSource.value === m && v.push(e) : g.prune();
		}
	while (!_.done);
	return v;
}
function findAssignment(e) {
	let m = e.astNode;
	for (; m === e.container?.astNode;) {
		let m = getContainerOfType(e.grammarSource, isAssignment);
		if (m) return m;
		e = e.container;
	}
}
function findNameAssignment(e) {
	let m = e;
	return isInferredType(m) && (isAction(m.$container) ? m = m.$container.$container : isParserRule(m.$container) ? m = m.$container : assertUnreachable(m.$container)), findNameAssignmentInternal(e, m, /* @__PURE__ */ new Map());
}
function findNameAssignmentInternal(e, m, h) {
	function g(m, g) {
		let _;
		return getContainerOfType(m, isAssignment) || (_ = findNameAssignmentInternal(g, g, h)), h.set(e, _), _;
	}
	if (h.has(e)) return h.get(e);
	h.set(e, void 0);
	for (let _ of streamAllContents(m)) if (isAssignment(_) && _.feature.toLowerCase() === "name") return h.set(e, _), _;
	else if (isRuleCall(_) && isParserRule(_.rule.ref)) return g(_, _.rule.ref);
	else if (isSimpleType(_) && _.typeRef?.ref) return g(_, _.typeRef.ref);
}
function getActionAtElement(e) {
	let m = e.$container;
	if (isGroup(m)) {
		let h = m.elements, g = h.indexOf(e);
		for (let e = g - 1; e >= 0; e--) {
			let m = h[e];
			if (isAction(m)) return m;
			{
				let m = streamAllContents(h[e]).find(isAction);
				if (m) return m;
			}
		}
	}
	if (isAbstractElement(m)) return getActionAtElement(m);
}
function isOptionalCardinality(e, m) {
	return e === "?" || e === "*" || isGroup(m) && !!m.guardCondition;
}
function isArrayCardinality(e) {
	return e === "*" || e === "+";
}
function isArrayOperator(e) {
	return e === "+=";
}
function isDataTypeRule(e) {
	return isDataTypeRuleInternal(e, /* @__PURE__ */ new Set());
}
function isDataTypeRuleInternal(e, m) {
	if (m.has(e)) return !0;
	m.add(e);
	for (let h of streamAllContents(e)) if (isRuleCall(h)) {
		if (!h.rule.ref || isParserRule(h.rule.ref) && !isDataTypeRuleInternal(h.rule.ref, m)) return !1;
	} else if (isAssignment(h)) return !1;
	else if (isAction(h)) return !1;
	return !!e.definition;
}
function isDataType(e) {
	return isDataTypeInternal(e.type, /* @__PURE__ */ new Set());
}
function isDataTypeInternal(e, m) {
	if (m.has(e)) return !0;
	if (m.add(e), isArrayType(e) || isReferenceType(e)) return !1;
	if (isUnionType(e)) return e.types.every((e) => isDataTypeInternal(e, m));
	if (isSimpleType(e)) {
		if (e.primitiveType !== void 0 || e.stringType !== void 0) return !0;
		if (e.typeRef !== void 0) {
			let h = e.typeRef.ref;
			return isType(h) ? isDataTypeInternal(h.type, m) : !1;
		} else return !1;
	} else return !1;
}
function getExplicitRuleType(e) {
	if (e.inferredType) return e.inferredType.name;
	if (e.dataType) return e.dataType;
	if (e.returnType) {
		let m = e.returnType.ref;
		if (m && (isParserRule(m) || isInterface(m) || isType(m))) return m.name;
	}
}
function getTypeName(e) {
	if (isParserRule(e)) return isDataTypeRule(e) ? e.name : getExplicitRuleType(e) ?? e.name;
	if (isInterface(e) || isType(e) || isReturnType(e)) return e.name;
	if (isAction(e)) {
		let m = getActionType(e);
		if (m) return m;
	} else if (isInferredType(e)) return e.name;
	throw Error("Cannot get name of Unknown Type");
}
function getActionType(e) {
	if (e.inferredType) return e.inferredType.name;
	if (e.type?.ref) return getTypeName(e.type.ref);
}
function getRuleTypeName(e) {
	return isTerminalRule(e) ? e.type?.name ?? "string" : isDataTypeRule(e) ? e.name : getExplicitRuleType(e) ?? e.name;
}
function getRuleType(e) {
	return isTerminalRule(e) ? e.type?.name ?? "string" : getExplicitRuleType(e) ?? e.name;
}
function terminalRegex(e) {
	let m = {
		s: !1,
		i: !1,
		u: !1
	}, h = abstractElementToRegex(e.definition, m), g = Object.entries(m).filter(([, e]) => e).map(([e]) => e).join("");
	return new RegExp(h, g);
}
var WILDCARD = "[\\s\\S]";
function abstractElementToRegex(e, m) {
	if (isTerminalAlternatives(e)) return terminalAlternativesToRegex(e);
	if (isTerminalGroup(e)) return terminalGroupToRegex(e);
	if (isCharacterRange(e)) return characterRangeToRegex(e);
	if (isTerminalRuleCall(e)) {
		let m = e.rule.ref;
		if (!m) throw Error("Missing rule reference.");
		return withCardinality(abstractElementToRegex(m.definition), {
			cardinality: e.cardinality,
			lookahead: e.lookahead
		});
	} else if (isNegatedToken(e)) return negateTokenToRegex(e);
	else if (isUntilToken(e)) return untilTokenToRegex(e);
	else if (isRegexToken(e)) {
		let h = e.regex.lastIndexOf("/"), g = e.regex.substring(1, h), _ = e.regex.substring(h + 1);
		return m && (m.i = _.includes("i"), m.s = _.includes("s"), m.u = _.includes("u")), withCardinality(g, {
			cardinality: e.cardinality,
			lookahead: e.lookahead,
			wrap: !1
		});
	} else if (isWildcard(e)) return withCardinality(WILDCARD, {
		cardinality: e.cardinality,
		lookahead: e.lookahead
	});
	else throw Error(`Invalid terminal element: ${e?.$type}`);
}
function terminalAlternativesToRegex(e) {
	return withCardinality(e.elements.map((e) => abstractElementToRegex(e)).join("|"), {
		cardinality: e.cardinality,
		lookahead: e.lookahead
	});
}
function terminalGroupToRegex(e) {
	return withCardinality(e.elements.map((e) => abstractElementToRegex(e)).join(""), {
		cardinality: e.cardinality,
		lookahead: e.lookahead
	});
}
function untilTokenToRegex(e) {
	return withCardinality(`${WILDCARD}*?${abstractElementToRegex(e.terminal)}`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead
	});
}
function negateTokenToRegex(e) {
	return withCardinality(`(?!${abstractElementToRegex(e.terminal)})${WILDCARD}*?`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead
	});
}
function characterRangeToRegex(e) {
	return e.right ? withCardinality(`[${keywordToRegex(e.left)}-${keywordToRegex(e.right)}]`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		wrap: !1
	}) : withCardinality(keywordToRegex(e.left), {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		wrap: !1
	});
}
function keywordToRegex(e) {
	return escapeRegExp(e.value);
}
function withCardinality(e, m) {
	return (m.wrap !== !1 || m.lookahead) && (e = `(${m.lookahead ?? ""}${e})`), m.cardinality ? `${e}${m.cardinality}` : e;
}
function createGrammarConfig(e) {
	let m = [], h = e.Grammar;
	for (let e of h.rules) isTerminalRule(e) && isCommentTerminal(e) && isMultilineComment(terminalRegex(e)) && m.push(e.name);
	return {
		multilineCommentRules: m,
		nameRegexp: DefaultNameRegexp
	};
}
var hasOwnProperty$1 = Object.prototype.hasOwnProperty, assign_default = _createAssigner_default(function(e, m) {
	if (_isPrototype_default(m) || isArrayLike_default(m)) {
		_copyObject_default(m, keys_default(m), e);
		return;
	}
	for (var h in m) hasOwnProperty$1.call(m, h) && _assignValue_default(e, h, m[h]);
});
function baseSlice(e, m, h) {
	var g = -1, _ = e.length;
	m < 0 && (m = -m > _ ? 0 : _ + m), h = h > _ ? _ : h, h < 0 && (h += _), _ = m > h ? 0 : h - m >>> 0, m >>>= 0;
	for (var v = Array(_); ++g < _;) v[g] = e[g + m];
	return v;
}
var _baseSlice_default = baseSlice;
function compact(e) {
	for (var m = -1, h = e == null ? 0 : e.length, g = 0, _ = []; ++m < h;) {
		var v = e[m];
		v && (_[g++] = v);
	}
	return _;
}
var compact_default = compact;
function arrayAggregator(e, m, h, g) {
	for (var _ = -1, v = e == null ? 0 : e.length; ++_ < v;) {
		var y = e[_];
		m(g, y, h(y), e);
	}
	return g;
}
var _arrayAggregator_default = arrayAggregator;
function baseAggregator(e, m, h, g) {
	return _baseEach_default(e, function(e, _, v) {
		m(g, e, h(e), v);
	}), g;
}
var _baseAggregator_default = baseAggregator;
function createAggregator(e, m) {
	return function(h, g) {
		var _ = isArray_default(h) ? _arrayAggregator_default : _baseAggregator_default, v = m ? m() : {};
		return _(h, e, _baseIteratee_default(g, 2), v);
	};
}
var _createAggregator_default = createAggregator, LARGE_ARRAY_SIZE = 200;
function baseDifference(e, m, h, g) {
	var _ = -1, v = _arrayIncludes_default, y = !0, b = e.length, x = [], S = m.length;
	if (!b) return x;
	h && (m = _arrayMap_default(m, _baseUnary_default(h))), g ? (v = _arrayIncludesWith_default, y = !1) : m.length >= LARGE_ARRAY_SIZE && (v = _cacheHas_default, y = !1, m = new _SetCache_default(m));
	outer: for (; ++_ < b;) {
		var C = e[_], w = h == null ? C : h(C);
		if (C = g || C !== 0 ? C : 0, y && w === w) {
			for (var T = S; T--;) if (m[T] === w) continue outer;
			x.push(C);
		} else v(m, w, g) || x.push(C);
	}
	return x;
}
var _baseDifference_default = baseDifference, difference_default = _baseRest_default(function(e, m) {
	return isArrayLikeObject_default(e) ? _baseDifference_default(e, _baseFlatten_default(m, 1, isArrayLikeObject_default, !0)) : [];
});
function drop(e, m, h) {
	var g = e == null ? 0 : e.length;
	return g ? (m = h || m === void 0 ? 1 : toInteger_default(m), _baseSlice_default(e, m < 0 ? 0 : m, g)) : [];
}
var drop_default = drop;
function dropRight(e, m, h) {
	var g = e == null ? 0 : e.length;
	return g ? (m = h || m === void 0 ? 1 : toInteger_default(m), m = g - m, _baseSlice_default(e, 0, m < 0 ? 0 : m)) : [];
}
var dropRight_default = dropRight;
function arrayEvery(e, m) {
	for (var h = -1, g = e == null ? 0 : e.length; ++h < g;) if (!m(e[h], h, e)) return !1;
	return !0;
}
var _arrayEvery_default = arrayEvery;
function baseEvery(e, m) {
	var h = !0;
	return _baseEach_default(e, function(e, g, _) {
		return h = !!m(e, g, _), h;
	}), h;
}
var _baseEvery_default = baseEvery;
function every(e, m, h) {
	var g = isArray_default(e) ? _arrayEvery_default : _baseEvery_default;
	return h && _isIterateeCall_default(e, m, h) && (m = void 0), g(e, _baseIteratee_default(m, 3));
}
var every_default = every;
function head(e) {
	return e && e.length ? e[0] : void 0;
}
var head_default = head;
function flatMap(e, m) {
	return _baseFlatten_default(map_default(e, m), 1);
}
var flatMap_default = flatMap, hasOwnProperty = Object.prototype.hasOwnProperty, groupBy_default = _createAggregator_default(function(e, m, h) {
	hasOwnProperty.call(e, h) ? e[h].push(m) : _baseAssignValue_default(e, h, [m]);
}), nativeMax$1 = Math.max;
function includes(e, m, h, g) {
	e = isArrayLike_default(e) ? e : values_default(e), h = h && !g ? toInteger_default(h) : 0;
	var _ = e.length;
	return h < 0 && (h = nativeMax$1(_ + h, 0)), isString_default(e) ? h <= _ && e.indexOf(m, h) > -1 : !!_ && _baseIndexOf_default(e, m, h) > -1;
}
var includes_default = includes, nativeMax = Math.max;
function indexOf(e, m, h) {
	var g = e == null ? 0 : e.length;
	if (!g) return -1;
	var _ = h == null ? 0 : toInteger_default(h);
	return _ < 0 && (_ = nativeMax(g + _, 0)), _baseIndexOf_default(e, m, _);
}
var indexOf_default = indexOf, regexpTag = "[object RegExp]";
function baseIsRegExp(e) {
	return isObjectLike_default(e) && _baseGetTag_default(e) == regexpTag;
}
var _baseIsRegExp_default = baseIsRegExp, nodeIsRegExp = _nodeUtil_default && _nodeUtil_default.isRegExp, isRegExp_default = nodeIsRegExp ? _baseUnary_default(nodeIsRegExp) : _baseIsRegExp_default, FUNC_ERROR_TEXT = "Expected a function";
function negate(e) {
	if (typeof e != "function") throw TypeError(FUNC_ERROR_TEXT);
	return function() {
		var m = arguments;
		switch (m.length) {
			case 0: return !e.call(this);
			case 1: return !e.call(this, m[0]);
			case 2: return !e.call(this, m[0], m[1]);
			case 3: return !e.call(this, m[0], m[1], m[2]);
		}
		return !e.apply(this, m);
	};
}
var negate_default = negate;
function pickBy(e, m) {
	if (e == null) return {};
	var h = _arrayMap_default(_getAllKeysIn_default(e), function(e) {
		return [e];
	});
	return m = _baseIteratee_default(m), _basePickBy_default(e, h, function(e, h) {
		return m(e, h[0]);
	});
}
var pickBy_default = pickBy;
function reject(e, m) {
	return (isArray_default(e) ? _arrayFilter_default : _baseFilter_default)(e, negate_default(_baseIteratee_default(m, 3)));
}
var reject_default = reject;
function baseSome(e, m) {
	var h;
	return _baseEach_default(e, function(e, g, _) {
		return h = m(e, g, _), !h;
	}), !!h;
}
var _baseSome_default = baseSome;
function some(e, m, h) {
	var g = isArray_default(e) ? _arraySome_default : _baseSome_default;
	return h && _isIterateeCall_default(e, m, h) && (m = void 0), g(e, _baseIteratee_default(m, 3));
}
var some_default = some;
function uniq(e) {
	return e && e.length ? _baseUniq_default(e) : [];
}
var uniq_default = uniq;
function uniqBy(e, m) {
	return e && e.length ? _baseUniq_default(e, _baseIteratee_default(m, 2)) : [];
}
var uniqBy_default = uniqBy;
function PRINT_ERROR(e) {
	/* istanbul ignore else - can't override global.console in node.js */
	console && console.error && console.error(`Error: ${e}`);
}
function PRINT_WARNING(e) {
	/* istanbul ignore else - can't override global.console in node.js*/
	console && console.warn && console.warn(`Warning: ${e}`);
}
function timer(e) {
	let m = (/* @__PURE__ */ new Date()).getTime(), h = e();
	return {
		time: (/* @__PURE__ */ new Date()).getTime() - m,
		value: h
	};
}
function toFastProperties(e) {
	function m() {}
	m.prototype = e;
	let h = new m();
	function g() {
		return typeof h.bar;
	}
	return g(), g(), e;
}
function tokenLabel$1(e) {
	return hasTokenLabel$1(e) ? e.LABEL : e.name;
}
function hasTokenLabel$1(e) {
	return isString_default(e.LABEL) && e.LABEL !== "";
}
var AbstractProduction = class {
	get definition() {
		return this._definition;
	}
	set definition(e) {
		this._definition = e;
	}
	constructor(e) {
		this._definition = e;
	}
	accept(e) {
		e.visit(this), forEach_default(this.definition, (m) => {
			m.accept(e);
		});
	}
}, NonTerminal = class extends AbstractProduction {
	constructor(e) {
		super([]), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
	set definition(e) {}
	get definition() {
		return this.referencedRule === void 0 ? [] : this.referencedRule.definition;
	}
	accept(e) {
		e.visit(this);
	}
}, Rule = class extends AbstractProduction {
	constructor(e) {
		super(e.definition), this.orgText = "", assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Alternative = class extends AbstractProduction {
	constructor(e) {
		super(e.definition), this.ignoreAmbiguities = !1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Option$1 = class extends AbstractProduction {
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, RepetitionMandatory = class extends AbstractProduction {
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, RepetitionMandatoryWithSeparator = class extends AbstractProduction {
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Repetition = class extends AbstractProduction {
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, RepetitionWithSeparator = class extends AbstractProduction {
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Alternation = class extends AbstractProduction {
	get definition() {
		return this._definition;
	}
	set definition(e) {
		this._definition = e;
	}
	constructor(e) {
		super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Terminal = class {
	constructor(e) {
		this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
	accept(e) {
		e.visit(this);
	}
};
function serializeGrammar(e) {
	return map_default(e, serializeProduction);
}
function serializeProduction(e) {
	function m(e) {
		return map_default(e, serializeProduction);
	}
	/* istanbul ignore else */
	if (e instanceof NonTerminal) {
		let m = {
			type: "NonTerminal",
			name: e.nonTerminalName,
			idx: e.idx
		};
		return isString_default(e.label) && (m.label = e.label), m;
	} else if (e instanceof Alternative) return {
		type: "Alternative",
		definition: m(e.definition)
	};
	else if (e instanceof Option$1) return {
		type: "Option",
		idx: e.idx,
		definition: m(e.definition)
	};
	else if (e instanceof RepetitionMandatory) return {
		type: "RepetitionMandatory",
		idx: e.idx,
		definition: m(e.definition)
	};
	else if (e instanceof RepetitionMandatoryWithSeparator) return {
		type: "RepetitionMandatoryWithSeparator",
		idx: e.idx,
		separator: serializeProduction(new Terminal({ terminalType: e.separator })),
		definition: m(e.definition)
	};
	else if (e instanceof RepetitionWithSeparator) return {
		type: "RepetitionWithSeparator",
		idx: e.idx,
		separator: serializeProduction(new Terminal({ terminalType: e.separator })),
		definition: m(e.definition)
	};
	else if (e instanceof Repetition) return {
		type: "Repetition",
		idx: e.idx,
		definition: m(e.definition)
	};
	else if (e instanceof Alternation) return {
		type: "Alternation",
		idx: e.idx,
		definition: m(e.definition)
	};
	else if (e instanceof Terminal) {
		let m = {
			type: "Terminal",
			name: e.terminalType.name,
			label: tokenLabel$1(e.terminalType),
			idx: e.idx
		};
		isString_default(e.label) && (m.terminalLabel = e.label);
		let h = e.terminalType.PATTERN;
		return e.terminalType.PATTERN && (m.pattern = isRegExp_default(h) ? h.source : h), m;
	} else if (e instanceof Rule) return {
		type: "Rule",
		name: e.name,
		orgText: e.orgText,
		definition: m(e.definition)
	};
	else throw Error("non exhaustive match");
}
var GAstVisitor = class {
	visit(e) {
		let m = e;
		switch (m.constructor) {
			case NonTerminal: return this.visitNonTerminal(m);
			case Alternative: return this.visitAlternative(m);
			case Option$1: return this.visitOption(m);
			case RepetitionMandatory: return this.visitRepetitionMandatory(m);
			case RepetitionMandatoryWithSeparator: return this.visitRepetitionMandatoryWithSeparator(m);
			case RepetitionWithSeparator: return this.visitRepetitionWithSeparator(m);
			case Repetition: return this.visitRepetition(m);
			case Alternation: return this.visitAlternation(m);
			case Terminal: return this.visitTerminal(m);
			case Rule: return this.visitRule(m);
			default: throw Error("non exhaustive match");
		}
	}
	/* c8 ignore next */
	visitNonTerminal(e) {}
	/* c8 ignore next */
	visitAlternative(e) {}
	/* c8 ignore next */
	visitOption(e) {}
	/* c8 ignore next */
	visitRepetition(e) {}
	/* c8 ignore next */
	visitRepetitionMandatory(e) {}
	/* c8 ignore next 3 */
	visitRepetitionMandatoryWithSeparator(e) {}
	/* c8 ignore next */
	visitRepetitionWithSeparator(e) {}
	/* c8 ignore next */
	visitAlternation(e) {}
	/* c8 ignore next */
	visitTerminal(e) {}
	/* c8 ignore next */
	visitRule(e) {}
};
function isSequenceProd(e) {
	return e instanceof Alternative || e instanceof Option$1 || e instanceof Repetition || e instanceof RepetitionMandatory || e instanceof RepetitionMandatoryWithSeparator || e instanceof RepetitionWithSeparator || e instanceof Terminal || e instanceof Rule;
}
function isOptionalProd(e, m = []) {
	return e instanceof Option$1 || e instanceof Repetition || e instanceof RepetitionWithSeparator ? !0 : e instanceof Alternation ? some_default(e.definition, (e) => isOptionalProd(e, m)) : e instanceof NonTerminal && includes_default(m, e) ? !1 : e instanceof AbstractProduction ? (e instanceof NonTerminal && m.push(e), every_default(e.definition, (e) => isOptionalProd(e, m))) : !1;
}
function isBranchingProd(e) {
	return e instanceof Alternation;
}
function getProductionDslName$1(e) {
	/* istanbul ignore else */
	if (e instanceof NonTerminal) return "SUBRULE";
	if (e instanceof Option$1) return "OPTION";
	if (e instanceof Alternation) return "OR";
	if (e instanceof RepetitionMandatory) return "AT_LEAST_ONE";
	if (e instanceof RepetitionMandatoryWithSeparator) return "AT_LEAST_ONE_SEP";
	if (e instanceof RepetitionWithSeparator) return "MANY_SEP";
	if (e instanceof Repetition) return "MANY";
	if (e instanceof Terminal) return "CONSUME";
	throw Error("non exhaustive match");
}
var RestWalker = class {
	walk(e, m = []) {
		forEach_default(e.definition, (h, g) => {
			let _ = drop_default(e.definition, g + 1);
			/* istanbul ignore else */
			if (h instanceof NonTerminal) this.walkProdRef(h, _, m);
			else if (h instanceof Terminal) this.walkTerminal(h, _, m);
			else if (h instanceof Alternative) this.walkFlat(h, _, m);
			else if (h instanceof Option$1) this.walkOption(h, _, m);
			else if (h instanceof RepetitionMandatory) this.walkAtLeastOne(h, _, m);
			else if (h instanceof RepetitionMandatoryWithSeparator) this.walkAtLeastOneSep(h, _, m);
			else if (h instanceof RepetitionWithSeparator) this.walkManySep(h, _, m);
			else if (h instanceof Repetition) this.walkMany(h, _, m);
			else if (h instanceof Alternation) this.walkOr(h, _, m);
			else throw Error("non exhaustive match");
		});
	}
	walkTerminal(e, m, h) {}
	walkProdRef(e, m, h) {}
	walkFlat(e, m, h) {
		let g = m.concat(h);
		this.walk(e, g);
	}
	walkOption(e, m, h) {
		let g = m.concat(h);
		this.walk(e, g);
	}
	walkAtLeastOne(e, m, h) {
		let g = [new Option$1({ definition: e.definition })].concat(m, h);
		this.walk(e, g);
	}
	walkAtLeastOneSep(e, m, h) {
		let g = restForRepetitionWithSeparator(e, m, h);
		this.walk(e, g);
	}
	walkMany(e, m, h) {
		let g = [new Option$1({ definition: e.definition })].concat(m, h);
		this.walk(e, g);
	}
	walkManySep(e, m, h) {
		let g = restForRepetitionWithSeparator(e, m, h);
		this.walk(e, g);
	}
	walkOr(e, m, h) {
		let g = m.concat(h);
		forEach_default(e.definition, (e) => {
			let m = new Alternative({ definition: [e] });
			this.walk(m, g);
		});
	}
};
function restForRepetitionWithSeparator(e, m, h) {
	return [new Option$1({ definition: [new Terminal({ terminalType: e.separator })].concat(e.definition) })].concat(m, h);
}
function first(e) {
	/* istanbul ignore else */
	if (e instanceof NonTerminal) return first(e.referencedRule);
	if (e instanceof Terminal) return firstForTerminal(e);
	if (isSequenceProd(e)) return firstForSequence(e);
	if (isBranchingProd(e)) return firstForBranching(e);
	throw Error("non exhaustive match");
}
function firstForSequence(e) {
	let m = [], h = e.definition, g = 0, _ = h.length > g, v, y = !0;
	for (; _ && y;) v = h[g], y = isOptionalProd(v), m = m.concat(first(v)), g += 1, _ = h.length > g;
	return uniq_default(m);
}
function firstForBranching(e) {
	return uniq_default(flatten_default(map_default(e.definition, (e) => first(e))));
}
function firstForTerminal(e) {
	return [e.terminalType];
}
const IN = "_~IN~_";
var ResyncFollowsWalker = class extends RestWalker {
	constructor(e) {
		super(), this.topProd = e, this.follows = {};
	}
	startWalking() {
		return this.walk(this.topProd), this.follows;
	}
	walkTerminal(e, m, h) {}
	walkProdRef(e, m, h) {
		let g = buildBetweenProdsFollowPrefix(e.referencedRule, e.idx) + this.topProd.name, _ = first(new Alternative({ definition: m.concat(h) }));
		this.follows[g] = _;
	}
};
function computeAllProdsFollows(e) {
	let m = {};
	return forEach_default(e, (e) => {
		assign_default(m, new ResyncFollowsWalker(e).startWalking());
	}), m;
}
function buildBetweenProdsFollowPrefix(e, m) {
	return e.name + m + IN;
}
var regExpAstCache = {}, regExpParser = new RegExpParser();
function getRegExpAst(e) {
	let m = e.toString();
	if (regExpAstCache.hasOwnProperty(m)) return regExpAstCache[m];
	{
		let e = regExpParser.pattern(m);
		return regExpAstCache[m] = e, e;
	}
}
function clearRegExpParserCache() {
	regExpAstCache = {};
}
var complementErrorMessage = "Complement Sets are not supported for first char optimization";
const failedOptimizationPrefixMsg = "Unable to use \"first char\" lexer optimizations:\n";
function getOptimizedStartCodesIndices(e, m = !1) {
	try {
		let m = getRegExpAst(e);
		return firstCharOptimizedIndices(m.value, {}, m.flags.ignoreCase);
	} catch (h) {
		/* istanbul ignore next */
		if (h.message === complementErrorMessage) m && PRINT_WARNING(`${failedOptimizationPrefixMsg}\tUnable to optimize: < ${e.toString()} >\n	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
		else {
			let h = "";
			m && (h = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details."), PRINT_ERROR(`${failedOptimizationPrefixMsg}\n\tFailed parsing: < ${e.toString()} >\n\tUsing the @chevrotain/regexp-to-ast library\n	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + h);
		}
	}
	return [];
}
function firstCharOptimizedIndices(e, m, h) {
	switch (e.type) {
		case "Disjunction":
			for (let g = 0; g < e.value.length; g++) firstCharOptimizedIndices(e.value[g], m, h);
			break;
		case "Alternative":
			let g = e.value;
			for (let e = 0; e < g.length; e++) {
				let _ = g[e];
				switch (_.type) {
					case "EndAnchor":
					case "GroupBackReference":
					case "Lookahead":
					case "NegativeLookahead":
					case "StartAnchor":
					case "WordBoundary":
					case "NonWordBoundary": continue;
				}
				let v = _;
				switch (v.type) {
					case "Character":
						addOptimizedIdxToResult(v.value, m, h);
						break;
					case "Set":
						if (v.complement === !0) throw Error(complementErrorMessage);
						forEach_default(v.value, (e) => {
							if (typeof e == "number") addOptimizedIdxToResult(e, m, h);
							else {
								let g = e;
								if (h === !0) for (let e = g.from; e <= g.to; e++) addOptimizedIdxToResult(e, m, h);
								else {
									for (let e = g.from; e <= g.to && e < 256; e++) addOptimizedIdxToResult(e, m, h);
									if (g.to >= 256) {
										let e = g.from >= 256 ? g.from : 256, h = g.to, _ = charCodeToOptimizedIndex(e), v = charCodeToOptimizedIndex(h);
										for (let e = _; e <= v; e++) m[e] = e;
									}
								}
							}
						});
						break;
					case "Group":
						firstCharOptimizedIndices(v.value, m, h);
						break;
					default: throw Error("Non Exhaustive Match");
				}
				let y = v.quantifier !== void 0 && v.quantifier.atLeast === 0;
				if (v.type === "Group" && isWholeOptional(v) === !1 || v.type !== "Group" && y === !1) break;
			}
			break;
		default: throw Error("non exhaustive match!");
	}
	return values_default(m);
}
function addOptimizedIdxToResult(e, m, h) {
	let g = charCodeToOptimizedIndex(e);
	m[g] = g, h === !0 && handleIgnoreCase(e, m);
}
function handleIgnoreCase(e, m) {
	let h = String.fromCharCode(e), g = h.toUpperCase();
	/* istanbul ignore else */
	if (g !== h) {
		let e = charCodeToOptimizedIndex(g.charCodeAt(0));
		m[e] = e;
	} else {
		let e = h.toLowerCase();
		if (e !== h) {
			let h = charCodeToOptimizedIndex(e.charCodeAt(0));
			m[h] = h;
		}
	}
}
function findCode(e, m) {
	return find_default(e.value, (e) => {
		if (typeof e == "number") return includes_default(m, e);
		{
			let h = e;
			return find_default(m, (e) => h.from <= e && e <= h.to) !== void 0;
		}
	});
}
function isWholeOptional(e) {
	let m = e.quantifier;
	return m && m.atLeast === 0 ? !0 : e.value ? isArray_default(e.value) ? every_default(e.value, isWholeOptional) : isWholeOptional(e.value) : !1;
}
var CharCodeFinder = class extends BaseRegExpVisitor {
	constructor(e) {
		super(), this.targetCharCodes = e, this.found = !1;
	}
	visitChildren(e) {
		if (this.found !== !0) {
			switch (e.type) {
				case "Lookahead":
					this.visitLookahead(e);
					return;
				case "NegativeLookahead":
					this.visitNegativeLookahead(e);
					return;
			}
			super.visitChildren(e);
		}
	}
	visitCharacter(e) {
		includes_default(this.targetCharCodes, e.value) && (this.found = !0);
	}
	visitSet(e) {
		e.complement ? findCode(e, this.targetCharCodes) === void 0 && (this.found = !0) : findCode(e, this.targetCharCodes) !== void 0 && (this.found = !0);
	}
};
function canMatchCharCode(e, m) {
	if (m instanceof RegExp) {
		let h = getRegExpAst(m), g = new CharCodeFinder(e);
		return g.visit(h), g.found;
	} else return find_default(m, (m) => includes_default(e, m.charCodeAt(0))) !== void 0;
}
var PATTERN = "PATTERN";
const DEFAULT_MODE = "defaultMode";
let SUPPORT_STICKY = typeof (/* @__PURE__ */ RegExp("(?:)")).sticky == "boolean";
function analyzeTokenTypes(e, m) {
	m = defaults_default(m, {
		useSticky: SUPPORT_STICKY,
		debug: !1,
		safeMode: !1,
		positionTracking: "full",
		lineTerminatorCharacters: ["\r", "\n"],
		tracer: (e, m) => m()
	});
	let h = m.tracer;
	h("initCharCodeToOptimizedIndexMap", () => {
		initCharCodeToOptimizedIndexMap();
	});
	let g;
	h("Reject Lexer.NA", () => {
		g = reject_default(e, (e) => e[PATTERN] === Lexer.NA);
	});
	let _ = !1, v;
	h("Transform Patterns", () => {
		_ = !1, v = map_default(g, (e) => {
			let h = e[PATTERN];
			/* istanbul ignore else */
			if (isRegExp_default(h)) {
				let e = h.source;
				return e.length === 1 && e !== "^" && e !== "$" && e !== "." && !h.ignoreCase ? e : e.length === 2 && e[0] === "\\" && !includes_default([
					"d",
					"D",
					"s",
					"S",
					"t",
					"r",
					"n",
					"t",
					"0",
					"c",
					"b",
					"B",
					"f",
					"v",
					"w",
					"W"
				], e[1]) ? e[1] : m.useSticky ? addStickyFlag(h) : addStartOfInput(h);
			} else if (isFunction_default(h)) return _ = !0, { exec: h };
			else if (typeof h == "object") return _ = !0, h;
			else if (typeof h == "string") {
				if (h.length === 1) return h;
				{
					let e = h.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), g = new RegExp(e);
					return m.useSticky ? addStickyFlag(g) : addStartOfInput(g);
				}
			} else throw Error("non exhaustive match");
		});
	});
	let y, b, x, S, C;
	h("misc mapping", () => {
		y = map_default(g, (e) => e.tokenTypeIdx), b = map_default(g, (e) => {
			let m = e.GROUP;
			if (m !== Lexer.SKIPPED) {
				if (isString_default(m)) return m;
				if (isUndefined_default(m)) return !1;
				throw Error("non exhaustive match");
			}
		}), x = map_default(g, (e) => {
			let m = e.LONGER_ALT;
			if (m) return isArray_default(m) ? map_default(m, (e) => indexOf_default(g, e)) : [indexOf_default(g, m)];
		}), S = map_default(g, (e) => e.PUSH_MODE), C = map_default(g, (e) => has_default(e, "POP_MODE"));
	});
	let T;
	h("Line Terminator Handling", () => {
		let e = getCharCodes(m.lineTerminatorCharacters);
		T = map_default(g, (e) => !1), m.positionTracking !== "onlyOffset" && (T = map_default(g, (m) => has_default(m, "LINE_BREAKS") ? !!m.LINE_BREAKS : checkLineBreaksIssues(m, e) === !1 && canMatchCharCode(e, m.PATTERN)));
	});
	let E, O, k, A;
	h("Misc Mapping #2", () => {
		E = map_default(g, isCustomPattern), O = map_default(v, isShortPattern), k = reduce_default(g, (e, m) => {
			let h = m.GROUP;
			return isString_default(h) && h !== Lexer.SKIPPED && (e[h] = []), e;
		}, {}), A = map_default(v, (e, m) => ({
			pattern: v[m],
			longerAlt: x[m],
			canLineTerminator: T[m],
			isCustom: E[m],
			short: O[m],
			group: b[m],
			push: S[m],
			pop: C[m],
			tokenTypeIdx: y[m],
			tokenType: g[m]
		}));
	});
	let j = !0, M = [];
	return m.safeMode || h("First Char Optimization", () => {
		M = reduce_default(g, (e, h, g) => {
			if (typeof h.PATTERN == "string") addToMapOfArrays(e, charCodeToOptimizedIndex(h.PATTERN.charCodeAt(0)), A[g]);
			else if (isArray_default(h.START_CHARS_HINT)) {
				let m;
				forEach_default(h.START_CHARS_HINT, (h) => {
					let _ = charCodeToOptimizedIndex(typeof h == "string" ? h.charCodeAt(0) : h);
					/* istanbul ignore else */
					m !== _ && (m = _, addToMapOfArrays(e, _, A[g]));
				});
			} else if (isRegExp_default(h.PATTERN)) if (h.PATTERN.unicode) j = !1, m.ensureOptimizations && PRINT_ERROR(`${failedOptimizationPrefixMsg}\tUnable to analyze < ${h.PATTERN.toString()} > pattern.\n	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
			else {
				let _ = getOptimizedStartCodesIndices(h.PATTERN, m.ensureOptimizations);
				isEmpty_default(_) && (j = !1), forEach_default(_, (m) => {
					addToMapOfArrays(e, m, A[g]);
				});
			}
			else m.ensureOptimizations && PRINT_ERROR(`${failedOptimizationPrefixMsg}\tTokenType: <${h.name}> is using a custom token pattern without providing <start_chars_hint> parameter.\n	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), j = !1;
			return e;
		}, []);
	}), {
		emptyGroups: k,
		patternIdxToConfig: A,
		charCodeToPatternIdxToConfig: M,
		hasCustom: _,
		canBeOptimized: j
	};
}
function validatePatterns(e, m) {
	let h = [], g = findMissingPatterns(e);
	h = h.concat(g.errors);
	let _ = findInvalidPatterns(g.valid), v = _.valid;
	return h = h.concat(_.errors), h = h.concat(validateRegExpPattern(v)), h = h.concat(findInvalidGroupType(v)), h = h.concat(findModesThatDoNotExist(v, m)), h = h.concat(findUnreachablePatterns(v)), h;
}
function validateRegExpPattern(e) {
	let m = [], h = filter_default(e, (e) => isRegExp_default(e[PATTERN]));
	return m = m.concat(findEndOfInputAnchor(h)), m = m.concat(findStartOfInputAnchor(h)), m = m.concat(findUnsupportedFlags(h)), m = m.concat(findDuplicatePatterns(h)), m = m.concat(findEmptyMatchRegExps(h)), m;
}
function findMissingPatterns(e) {
	let m = filter_default(e, (e) => !has_default(e, PATTERN));
	return {
		errors: map_default(m, (e) => ({
			message: "Token Type: ->" + e.name + "<- missing static 'PATTERN' property",
			type: LexerDefinitionErrorType.MISSING_PATTERN,
			tokenTypes: [e]
		})),
		valid: difference_default(e, m)
	};
}
function findInvalidPatterns(e) {
	let m = filter_default(e, (e) => {
		let m = e[PATTERN];
		return !isRegExp_default(m) && !isFunction_default(m) && !has_default(m, "exec") && !isString_default(m);
	});
	return {
		errors: map_default(m, (e) => ({
			message: "Token Type: ->" + e.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
			type: LexerDefinitionErrorType.INVALID_PATTERN,
			tokenTypes: [e]
		})),
		valid: difference_default(e, m)
	};
}
var end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(e) {
	class m extends BaseRegExpVisitor {
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitEndAnchor(e) {
			this.found = !0;
		}
	}
	return map_default(filter_default(e, (e) => {
		let h = e.PATTERN;
		try {
			let e = getRegExpAst(h), g = new m();
			return g.visit(e), g.found;
		} catch {
			/* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
			return end_of_input.test(h.source);
		}
	}), (e) => ({
		message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + e.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
		type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
		tokenTypes: [e]
	}));
}
function findEmptyMatchRegExps(e) {
	return map_default(filter_default(e, (e) => e.PATTERN.test("")), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'PATTERN' must not match an empty string",
		type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
		tokenTypes: [e]
	}));
}
var start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(e) {
	class m extends BaseRegExpVisitor {
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitStartAnchor(e) {
			this.found = !0;
		}
	}
	return map_default(filter_default(e, (e) => {
		let h = e.PATTERN;
		try {
			let e = getRegExpAst(h), g = new m();
			return g.visit(e), g.found;
		} catch {
			/* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
			return start_of_input.test(h.source);
		}
	}), (e) => ({
		message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + e.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
		type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
		tokenTypes: [e]
	}));
}
function findUnsupportedFlags(e) {
	return map_default(filter_default(e, (e) => {
		let m = e[PATTERN];
		return m instanceof RegExp && (m.multiline || m.global);
	}), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
		type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
		tokenTypes: [e]
	}));
}
function findDuplicatePatterns(e) {
	let m = [], h = map_default(e, (h) => reduce_default(e, (e, g) => h.PATTERN.source === g.PATTERN.source && !includes_default(m, g) && g.PATTERN !== Lexer.NA ? (m.push(g), e.push(g), e) : e, []));
	return h = compact_default(h), map_default(filter_default(h, (e) => e.length > 1), (e) => {
		let m = map_default(e, (e) => e.name);
		return {
			message: `The same RegExp pattern ->${head_default(e).PATTERN}<-has been used in all of the following Token Types: ${m.join(", ")} <-`,
			type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
			tokenTypes: e
		};
	});
}
function findInvalidGroupType(e) {
	return map_default(filter_default(e, (e) => {
		if (!has_default(e, "GROUP")) return !1;
		let m = e.GROUP;
		return m !== Lexer.SKIPPED && m !== Lexer.NA && !isString_default(m);
	}), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
		type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
		tokenTypes: [e]
	}));
}
function findModesThatDoNotExist(e, m) {
	return map_default(filter_default(e, (e) => e.PUSH_MODE !== void 0 && !includes_default(m, e.PUSH_MODE)), (e) => ({
		message: `Token Type: ->${e.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${e.PUSH_MODE}<-which does not exist`,
		type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
		tokenTypes: [e]
	}));
}
function findUnreachablePatterns(e) {
	let m = [], h = reduce_default(e, (e, m, h) => {
		let g = m.PATTERN;
		return g === Lexer.NA || (isString_default(g) ? e.push({
			str: g,
			idx: h,
			tokenType: m
		}) : isRegExp_default(g) && noMetaChar(g) && e.push({
			str: g.source,
			idx: h,
			tokenType: m
		})), e;
	}, []);
	return forEach_default(e, (e, g) => {
		forEach_default(h, ({ str: h, idx: _, tokenType: v }) => {
			if (g < _ && testTokenType(h, e.PATTERN)) {
				let h = `Token: ->${v.name}<- can never be matched.\nBecause it appears AFTER the Token Type ->${e.name}<-in the lexer's definition.\nSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
				m.push({
					message: h,
					type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
					tokenTypes: [e, v]
				});
			}
		});
	}), m;
}
function testTokenType(e, m) {
	/* istanbul ignore else */
	if (isRegExp_default(m)) {
		let h = m.exec(e);
		return h !== null && h.index === 0;
	} else if (isFunction_default(m)) return m(e, 0, [], {});
	else if (has_default(m, "exec")) return m.exec(e, 0, [], {});
	else if (typeof m == "string") return m === e;
	else throw Error("non exhaustive match");
}
function noMetaChar(e) {
	return find_default([
		".",
		"\\",
		"[",
		"]",
		"|",
		"^",
		"$",
		"(",
		")",
		"?",
		"*",
		"+",
		"{"
	], (m) => e.source.indexOf(m) !== -1) === void 0;
}
function addStartOfInput(e) {
	let m = e.ignoreCase ? "i" : "";
	return RegExp(`^(?:${e.source})`, m);
}
function addStickyFlag(e) {
	let m = e.ignoreCase ? "iy" : "y";
	return RegExp(`${e.source}`, m);
}
function performRuntimeChecks(e, m, h) {
	let g = [];
	return has_default(e, "defaultMode") || g.push({
		message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
		type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
	}), has_default(e, "modes") || g.push({
		message: "A MultiMode Lexer cannot be initialized without a <modes> property in its definition\n",
		type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
	}), has_default(e, "modes") && has_default(e, "defaultMode") && !has_default(e.modes, e.defaultMode) && g.push({
		message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${e.defaultMode}>which does not exist\n`,
		type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
	}), has_default(e, "modes") && forEach_default(e.modes, (e, m) => {
		forEach_default(e, (h, _) => {
			isUndefined_default(h) ? g.push({
				message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${m}> at index: <${_}>\n`,
				type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
			}) : has_default(h, "LONGER_ALT") && forEach_default(isArray_default(h.LONGER_ALT) ? h.LONGER_ALT : [h.LONGER_ALT], (_) => {
				!isUndefined_default(_) && !includes_default(e, _) && g.push({
					message: `A MultiMode Lexer cannot be initialized with a longer_alt <${_.name}> on token <${h.name}> outside of mode <${m}>\n`,
					type: LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
				});
			});
		});
	}), g;
}
function performWarningRuntimeChecks(e, m, h) {
	let g = [], _ = !1, v = reject_default(compact_default(flatten_default(values_default(e.modes))), (e) => e[PATTERN] === Lexer.NA), y = getCharCodes(h);
	return m && forEach_default(v, (e) => {
		let m = checkLineBreaksIssues(e, y);
		if (m !== !1) {
			let h = {
				message: buildLineBreakIssueMessage(e, m),
				type: m.issue,
				tokenType: e
			};
			g.push(h);
		} else has_default(e, "LINE_BREAKS") ? e.LINE_BREAKS === !0 && (_ = !0) : canMatchCharCode(y, e.PATTERN) && (_ = !0);
	}), m && !_ && g.push({
		message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
		type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
	}), g;
}
function cloneEmptyGroups(e) {
	let m = {};
	return forEach_default(keys_default(e), (h) => {
		let g = e[h];
		/* istanbul ignore else */
		if (isArray_default(g)) m[h] = [];
		else throw Error("non exhaustive match");
	}), m;
}
function isCustomPattern(e) {
	let m = e.PATTERN;
	/* istanbul ignore else */
	if (isRegExp_default(m)) return !1;
	if (isFunction_default(m) || has_default(m, "exec")) return !0;
	if (isString_default(m)) return !1;
	throw Error("non exhaustive match");
}
function isShortPattern(e) {
	return isString_default(e) && e.length === 1 ? e.charCodeAt(0) : !1;
}
const LineTerminatorOptimizedTester = {
	test: function(e) {
		let m = e.length;
		for (let h = this.lastIndex; h < m; h++) {
			let m = e.charCodeAt(h);
			if (m === 10) return this.lastIndex = h + 1, !0;
			if (m === 13) return e.charCodeAt(h + 1) === 10 ? this.lastIndex = h + 2 : this.lastIndex = h + 1, !0;
		}
		return !1;
	},
	lastIndex: 0
};
function checkLineBreaksIssues(e, m) {
	if (has_default(e, "LINE_BREAKS")) return !1;
	if (isRegExp_default(e.PATTERN)) {
		try {
			canMatchCharCode(m, e.PATTERN);
		} catch (e) {
			/* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */
			return {
				issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
				errMsg: e.message
			};
		}
		return !1;
	} else if (isString_default(e.PATTERN)) return !1;
	else if (isCustomPattern(e)) return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
	else throw Error("non exhaustive match");
}
function buildLineBreakIssueMessage(e, m) {
	/* istanbul ignore else */
	if (m.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
\tThe problem is in the <${e.name}> Token Type\n\t Root cause: ${m.errMsg}.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
	if (m.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
\tThe problem is in the <${e.name}> Token Type\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
	throw Error("non exhaustive match");
}
function getCharCodes(e) {
	return map_default(e, (e) => isString_default(e) ? e.charCodeAt(0) : e);
}
function addToMapOfArrays(e, m, h) {
	e[m] === void 0 ? e[m] = [h] : e[m].push(h);
}
var charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(e) {
	return e < 256 ? e : charCodeToOptimizedIdxMap[e];
}
function initCharCodeToOptimizedIndexMap() {
	if (isEmpty_default(charCodeToOptimizedIdxMap)) {
		charCodeToOptimizedIdxMap = Array(65536);
		for (let e = 0; e < 65536; e++) charCodeToOptimizedIdxMap[e] = e > 255 ? 255 + ~~(e / 255) : e;
	}
}
function tokenStructuredMatcher(e, m) {
	let h = e.tokenTypeIdx;
	return h === m.tokenTypeIdx ? !0 : m.isParent === !0 && m.categoryMatchesMap[h] === !0;
}
function tokenStructuredMatcherNoCategories(e, m) {
	return e.tokenTypeIdx === m.tokenTypeIdx;
}
let tokenShortNameIdx = 1;
const tokenIdxToClass = {};
function augmentTokenTypes(e) {
	let m = expandCategories(e);
	assignTokenDefaultProps(m), assignCategoriesMapProp(m), assignCategoriesTokensProp(m), forEach_default(m, (e) => {
		e.isParent = e.categoryMatches.length > 0;
	});
}
function expandCategories(e) {
	let m = clone_default(e), h = e, g = !0;
	for (; g;) {
		h = compact_default(flatten_default(map_default(h, (e) => e.CATEGORIES)));
		let e = difference_default(h, m);
		m = m.concat(e), isEmpty_default(e) ? g = !1 : h = e;
	}
	return m;
}
function assignTokenDefaultProps(e) {
	forEach_default(e, (e) => {
		hasShortKeyProperty(e) || (tokenIdxToClass[tokenShortNameIdx] = e, e.tokenTypeIdx = tokenShortNameIdx++), hasCategoriesProperty(e) && !isArray_default(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), hasCategoriesProperty(e) || (e.CATEGORIES = []), hasExtendingTokensTypesProperty(e) || (e.categoryMatches = []), hasExtendingTokensTypesMapProperty(e) || (e.categoryMatchesMap = {});
	});
}
function assignCategoriesTokensProp(e) {
	forEach_default(e, (e) => {
		e.categoryMatches = [], forEach_default(e.categoryMatchesMap, (m, h) => {
			e.categoryMatches.push(tokenIdxToClass[h].tokenTypeIdx);
		});
	});
}
function assignCategoriesMapProp(e) {
	forEach_default(e, (e) => {
		singleAssignCategoriesToksMap([], e);
	});
}
function singleAssignCategoriesToksMap(e, m) {
	forEach_default(e, (e) => {
		m.categoryMatchesMap[e.tokenTypeIdx] = !0;
	}), forEach_default(m.CATEGORIES, (h) => {
		let g = e.concat(m);
		includes_default(g, h) || singleAssignCategoriesToksMap(g, h);
	});
}
function hasShortKeyProperty(e) {
	return has_default(e, "tokenTypeIdx");
}
function hasCategoriesProperty(e) {
	return has_default(e, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(e) {
	return has_default(e, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(e) {
	return has_default(e, "categoryMatchesMap");
}
function isTokenType(e) {
	return has_default(e, "tokenTypeIdx");
}
const defaultLexerErrorProvider = {
	buildUnableToPopLexerModeMessage(e) {
		return `Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`;
	},
	buildUnexpectedCharactersMessage(e, m, h, g, _) {
		return `unexpected character: ->${e.charAt(m)}<- at offset: ${m}, skipped ${h} characters.`;
	}
};
var LexerDefinitionErrorType;
(function(e) {
	e[e.MISSING_PATTERN = 0] = "MISSING_PATTERN", e[e.INVALID_PATTERN = 1] = "INVALID_PATTERN", e[e.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", e[e.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", e[e.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", e[e.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", e[e.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", e[e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", e[e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", e[e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", e[e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", e[e.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", e[e.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", e[e.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", e[e.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", e[e.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", e[e.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", e[e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType ||= {});
var DEFAULT_LEXER_CONFIG = {
	deferDefinitionErrorsHandling: !1,
	positionTracking: "full",
	lineTerminatorsPattern: /\n|\r\n?/g,
	lineTerminatorCharacters: ["\n", "\r"],
	ensureOptimizations: !1,
	safeMode: !1,
	errorMessageProvider: defaultLexerErrorProvider,
	traceInitPerf: !1,
	skipValidations: !1,
	recoveryEnabled: !0
};
Object.freeze(DEFAULT_LEXER_CONFIG);
var Lexer = class {
	constructor(e, m = DEFAULT_LEXER_CONFIG) {
		if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (e, m) => {
			if (this.traceInitPerf === !0) {
				this.traceInitIndent++;
				let h = Array(this.traceInitIndent + 1).join("	");
				this.traceInitIndent < this.traceInitMaxIdent && console.log(`${h}--> <${e}>`);
				let { time: g, value: _ } = timer(m), v = g > 10 ? console.warn : console.log;
				return this.traceInitIndent < this.traceInitMaxIdent && v(`${h}<-- <${e}> time: ${g}ms`), this.traceInitIndent--, _;
			} else return m();
		}, typeof m == "boolean") throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
		this.config = assign_default({}, DEFAULT_LEXER_CONFIG, m);
		let h = this.config.traceInitPerf;
		h === !0 ? (this.traceInitMaxIdent = Infinity, this.traceInitPerf = !0) : typeof h == "number" && (this.traceInitMaxIdent = h, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
			let h, g = !0;
			this.TRACE_INIT("Lexer Config handling", () => {
				if (this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
				else if (this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
				if (m.safeMode && m.ensureOptimizations) throw Error("\"safeMode\" and \"ensureOptimizations\" flags are mutually exclusive.");
				this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), isArray_default(e) ? h = {
					modes: { defaultMode: clone_default(e) },
					defaultMode: DEFAULT_MODE
				} : (g = !1, h = clone_default(e));
			}), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
				this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(h, this.trackStartLines, this.config.lineTerminatorCharacters));
			}), this.TRACE_INIT("performWarningRuntimeChecks", () => {
				this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(h, this.trackStartLines, this.config.lineTerminatorCharacters));
			})), h.modes = h.modes ? h.modes : {}, forEach_default(h.modes, (e, m) => {
				h.modes[m] = reject_default(e, (e) => isUndefined_default(e));
			});
			let _ = keys_default(h.modes);
			if (forEach_default(h.modes, (e, h) => {
				this.TRACE_INIT(`Mode: <${h}> processing`, () => {
					if (this.modes.push(h), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
						this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(e, _));
					}), isEmpty_default(this.lexerDefinitionErrors)) {
						augmentTokenTypes(e);
						let g;
						this.TRACE_INIT("analyzeTokenTypes", () => {
							g = analyzeTokenTypes(e, {
								lineTerminatorCharacters: this.config.lineTerminatorCharacters,
								positionTracking: m.positionTracking,
								ensureOptimizations: m.ensureOptimizations,
								safeMode: m.safeMode,
								tracer: this.TRACE_INIT
							});
						}), this.patternIdxToConfig[h] = g.patternIdxToConfig, this.charCodeToPatternIdxToConfig[h] = g.charCodeToPatternIdxToConfig, this.emptyGroups = assign_default({}, this.emptyGroups, g.emptyGroups), this.hasCustom = g.hasCustom || this.hasCustom, this.canModeBeOptimized[h] = g.canBeOptimized;
					}
				});
			}), this.defaultMode = h.defaultMode, !isEmpty_default(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
				let e = map_default(this.lexerDefinitionErrors, (e) => e.message).join("-----------------------\n");
				throw Error("Errors detected in definition of Lexer:\n" + e);
			}
			forEach_default(this.lexerDefinitionWarning, (e) => {
				PRINT_WARNING(e.message);
			}), this.TRACE_INIT("Choosing sub-methods implementations", () => {
				if (SUPPORT_STICKY ? (this.chopInput = identity_default, this.match = this.matchWithTest) : (this.updateLastIndex = noop_default, this.match = this.matchWithExec), g && (this.handleModes = noop_default), this.trackStartLines === !1 && (this.computeNewColumn = identity_default), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = noop_default), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
				else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
				else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
				else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
				this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
			}), this.TRACE_INIT("Failed Optimization Warnings", () => {
				let e = reduce_default(this.canModeBeOptimized, (e, m, h) => (m === !1 && e.push(h), e), []);
				if (m.ensureOptimizations && !isEmpty_default(e)) throw Error(`Lexer Modes: < ${e.join(", ")} > cannot be optimized.\n	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
			}), this.TRACE_INIT("clearRegExpParserCache", () => {
				clearRegExpParserCache();
			}), this.TRACE_INIT("toFastProperties", () => {
				toFastProperties(this);
			});
		});
	}
	tokenize(e, m = this.defaultMode) {
		if (!isEmpty_default(this.lexerDefinitionErrors)) {
			let e = map_default(this.lexerDefinitionErrors, (e) => e.message).join("-----------------------\n");
			throw Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + e);
		}
		return this.tokenizeInternal(e, m);
	}
	tokenizeInternal(e, m) {
		let h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A = e, j = A.length, M = 0, N = 0, P = this.hasCustom ? 0 : Math.floor(e.length / 10), F = Array(P), I = [], L = this.trackStartLines ? 1 : void 0, R = this.trackStartLines ? 1 : void 0, z = cloneEmptyGroups(this.emptyGroups), B = this.trackStartLines, V = this.config.lineTerminatorsPattern, H = 0, U = [], W = [], G = [], K = [];
		Object.freeze(K);
		let q;
		function J() {
			return U;
		}
		function Y(e) {
			let m = charCodeToOptimizedIndex(e), h = W[m];
			return h === void 0 ? K : h;
		}
		let X = (e) => {
			if (G.length === 1 && e.tokenType.PUSH_MODE === void 0) {
				let m = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(e);
				I.push({
					offset: e.startOffset,
					line: e.startLine,
					column: e.startColumn,
					length: e.image.length,
					message: m
				});
			} else {
				G.pop();
				let e = last_default(G);
				U = this.patternIdxToConfig[e], W = this.charCodeToPatternIdxToConfig[e], H = U.length;
				let m = this.canModeBeOptimized[e] && this.config.safeMode === !1;
				q = W && m ? Y : J;
			}
		};
		function Z(e) {
			G.push(e), W = this.charCodeToPatternIdxToConfig[e], U = this.patternIdxToConfig[e], H = U.length, H = U.length;
			let m = this.canModeBeOptimized[e] && this.config.safeMode === !1;
			q = W && m ? Y : J;
		}
		Z.call(this, m);
		let Q, $ = this.config.recoveryEnabled;
		for (; M < j;) {
			b = null;
			let m = A.charCodeAt(M), P = q(m), W = P.length;
			for (h = 0; h < W; h++) {
				Q = P[h];
				let g = Q.pattern;
				x = null;
				let C = Q.short;
				if (C === !1 ? Q.isCustom === !0 ? (k = g.exec(A, M, F, z), k === null ? b = null : (b = k[0], k.payload !== void 0 && (x = k.payload))) : (this.updateLastIndex(g, M), b = this.match(g, e, M)) : m === C && (b = g), b !== null) {
					if (y = Q.longerAlt, y !== void 0) {
						let m = y.length;
						for (_ = 0; _ < m; _++) {
							let m = U[y[_]], h = m.pattern;
							if (S = null, m.isCustom === !0 ? (k = h.exec(A, M, F, z), k === null ? v = null : (v = k[0], k.payload !== void 0 && (S = k.payload))) : (this.updateLastIndex(h, M), v = this.match(h, e, M)), v && v.length > b.length) {
								b = v, x = S, Q = m;
								break;
							}
						}
					}
					break;
				}
			}
			if (b !== null) {
				if (C = b.length, w = Q.group, w !== void 0 && (T = Q.tokenTypeIdx, E = this.createTokenInstance(b, M, T, Q.tokenType, L, R, C), this.handlePayload(E, x), w === !1 ? N = this.addToken(F, N, E) : z[w].push(E)), e = this.chopInput(e, C), M += C, R = this.computeNewColumn(R, C), B === !0 && Q.canLineTerminator === !0) {
					let e = 0, m, h;
					V.lastIndex = 0;
					do
						m = V.test(b), m === !0 && (h = V.lastIndex - 1, e++);
					while (m === !0);
					e !== 0 && (L += e, R = C - h, this.updateTokenEndLineColumnLocation(E, w, h, e, L, R, C));
				}
				this.handleModes(Q, X, Z, E);
			} else {
				let m = M, h = L, _ = R, v = $ === !1;
				for (; v === !1 && M < j;) for (e = this.chopInput(e, 1), M++, g = 0; g < H; g++) {
					let m = U[g], h = m.pattern, _ = m.short;
					if (_ === !1 ? m.isCustom === !0 ? v = h.exec(A, M, F, z) !== null : (this.updateLastIndex(h, M), v = h.exec(e) !== null) : A.charCodeAt(M) === _ && (v = !0), v === !0) break;
				}
				if (D = M - m, R = this.computeNewColumn(R, D), O = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(A, m, D, h, _), I.push({
					offset: m,
					line: h,
					column: _,
					length: D,
					message: O
				}), $ === !1) break;
			}
		}
		return this.hasCustom || (F.length = N), {
			tokens: F,
			groups: z,
			errors: I
		};
	}
	handleModes(e, m, h, g) {
		if (e.pop === !0) {
			let _ = e.push;
			m(g), _ !== void 0 && h.call(this, _);
		} else e.push !== void 0 && h.call(this, e.push);
	}
	chopInput(e, m) {
		return e.substring(m);
	}
	updateLastIndex(e, m) {
		e.lastIndex = m;
	}
	updateTokenEndLineColumnLocation(e, m, h, g, _, v, y) {
		let b, x;
		m !== void 0 && (b = h === y - 1, x = b ? -1 : 0, g === 1 && b === !0 || (e.endLine = _ + x, e.endColumn = v - 1 + -x));
	}
	computeNewColumn(e, m) {
		return e + m;
	}
	createOffsetOnlyToken(e, m, h, g) {
		return {
			image: e,
			startOffset: m,
			tokenTypeIdx: h,
			tokenType: g
		};
	}
	createStartOnlyToken(e, m, h, g, _, v) {
		return {
			image: e,
			startOffset: m,
			startLine: _,
			startColumn: v,
			tokenTypeIdx: h,
			tokenType: g
		};
	}
	createFullToken(e, m, h, g, _, v, y) {
		return {
			image: e,
			startOffset: m,
			endOffset: m + y - 1,
			startLine: _,
			endLine: _,
			startColumn: v,
			endColumn: v + y - 1,
			tokenTypeIdx: h,
			tokenType: g
		};
	}
	addTokenUsingPush(e, m, h) {
		return e.push(h), m;
	}
	addTokenUsingMemberAccess(e, m, h) {
		return e[m] = h, m++, m;
	}
	handlePayloadNoCustom(e, m) {}
	handlePayloadWithCustom(e, m) {
		m !== null && (e.payload = m);
	}
	matchWithTest(e, m, h) {
		return e.test(m) === !0 ? m.substring(h, e.lastIndex) : null;
	}
	matchWithExec(e, m) {
		let h = e.exec(m);
		return h === null ? null : h[0];
	}
};
Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.", Lexer.NA = /NOT_APPLICABLE/;
function tokenLabel(e) {
	return hasTokenLabel(e) ? e.LABEL : e.name;
}
function hasTokenLabel(e) {
	return isString_default(e.LABEL) && e.LABEL !== "";
}
var PARENT = "parent", CATEGORIES = "categories", LABEL = "label", GROUP = "group", PUSH_MODE = "push_mode", POP_MODE = "pop_mode", LONGER_ALT = "longer_alt", LINE_BREAKS = "line_breaks", START_CHARS_HINT = "start_chars_hint";
function createToken(e) {
	return createTokenInternal(e);
}
function createTokenInternal(e) {
	let m = e.pattern, h = {};
	if (h.name = e.name, isUndefined_default(m) || (h.PATTERN = m), has_default(e, PARENT)) throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
	return has_default(e, CATEGORIES) && (h.CATEGORIES = e[CATEGORIES]), augmentTokenTypes([h]), has_default(e, LABEL) && (h.LABEL = e[LABEL]), has_default(e, GROUP) && (h.GROUP = e[GROUP]), has_default(e, POP_MODE) && (h.POP_MODE = e[POP_MODE]), has_default(e, PUSH_MODE) && (h.PUSH_MODE = e[PUSH_MODE]), has_default(e, LONGER_ALT) && (h.LONGER_ALT = e[LONGER_ALT]), has_default(e, LINE_BREAKS) && (h.LINE_BREAKS = e[LINE_BREAKS]), has_default(e, START_CHARS_HINT) && (h.START_CHARS_HINT = e[START_CHARS_HINT]), h;
}
const EOF = createToken({
	name: "EOF",
	pattern: Lexer.NA
});
augmentTokenTypes([EOF]);
function createTokenInstance(e, m, h, g, _, v, y, b) {
	return {
		image: m,
		startOffset: h,
		endOffset: g,
		startLine: _,
		endLine: v,
		startColumn: y,
		endColumn: b,
		tokenTypeIdx: e.tokenTypeIdx,
		tokenType: e
	};
}
function tokenMatcher(e, m) {
	return tokenStructuredMatcher(e, m);
}
const defaultParserErrorProvider = {
	buildMismatchTokenMessage({ expected: e, actual: m, previous: h, ruleName: g }) {
		return `Expecting ${hasTokenLabel(e) ? `--> ${tokenLabel(e)} <--` : `token of type --> ${e.name} <--`} but found --> '${m.image}' <--`;
	},
	buildNotAllInputParsedMessage({ firstRedundant: e, ruleName: m }) {
		return "Redundant input, expecting EOF but found: " + e.image;
	},
	buildNoViableAltMessage({ expectedPathsPerAlt: e, actual: m, previous: h, customUserDescription: g, ruleName: _ }) {
		let v = "\nbut found: '" + head_default(m).image + "'";
		return g ? "Expecting: " + g + v : `Expecting: one of these possible Token sequences:\n${map_default(map_default(reduce_default(e, (e, m) => e.concat(m), []), (e) => `[${map_default(e, (e) => tokenLabel(e)).join(", ")}]`), (e, m) => `  ${m + 1}. ${e}`).join("\n")}` + v;
	},
	buildEarlyExitMessage({ expectedIterationPaths: e, actual: m, customUserDescription: h, ruleName: g }) {
		let _ = "\nbut found: '" + head_default(m).image + "'";
		return h ? "Expecting: " + h + _ : `Expecting: expecting at least one iteration which starts with one of these possible Token sequences::\n  <${map_default(e, (e) => `[${map_default(e, (e) => tokenLabel(e)).join(",")}]`).join(" ,")}>` + _;
	}
};
Object.freeze(defaultParserErrorProvider);
const defaultGrammarResolverErrorProvider = { buildRuleNotFoundError(e, m) {
	return "Invalid grammar, reference to a rule which is not defined: ->" + m.nonTerminalName + "<-\ninside top level rule: ->" + e.name + "<-";
} }, defaultGrammarValidatorErrorProvider = {
	buildDuplicateFoundError(e, m) {
		function h(e) {
			return e instanceof Terminal ? e.terminalType.name : e instanceof NonTerminal ? e.nonTerminalName : "";
		}
		let g = e.name, _ = head_default(m), v = _.idx, y = getProductionDslName$1(_), b = h(_), x = `->${y}${v > 0 ? v : ""}<- ${b ? `with argument: ->${b}<-` : ""}
                  appears more than once (${m.length} times) in the top level rule: ->${g}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
		return x = x.replace(/[ \t]+/g, " "), x = x.replace(/\s\s+/g, "\n"), x;
	},
	buildNamespaceConflictError(e) {
		return `Namespace conflict found in grammar.\nThe grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e.name}>.\nTo resolve this make sure each Terminal and Non-Terminal names are unique\nThis is easy to accomplish by using the convention that Terminal names start with an uppercase letter\nand Non-Terminal names start with a lower case letter.`;
	},
	buildAlternationPrefixAmbiguityError(e) {
		let m = map_default(e.prefixPath, (e) => tokenLabel(e)).join(", "), h = e.alternation.idx === 0 ? "" : e.alternation.idx;
		return `Ambiguous alternatives: <${e.ambiguityIndices.join(" ,")}> due to common lookahead prefix\nin <OR${h}> inside <${e.topLevelRule.name}> Rule,\n<${m}> may appears as a prefix path in all these alternatives.\nSee: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\nFor Further details.`;
	},
	buildAlternationAmbiguityError(e) {
		let m = map_default(e.prefixPath, (e) => tokenLabel(e)).join(", "), h = e.alternation.idx === 0 ? "" : e.alternation.idx, g = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(" ,")}> in <OR${h}> inside <${e.topLevelRule.name}> Rule,\n<${m}> may appears as a prefix path in all these alternatives.\n`;
		return g += "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.", g;
	},
	buildEmptyRepetitionError(e) {
		let m = getProductionDslName$1(e.repetition);
		return e.repetition.idx !== 0 && (m += e.repetition.idx), `The repetition <${m}> within Rule <${e.topLevelRule.name}> can never consume any tokens.\nThis could lead to an infinite loop.`;
	},
	buildTokenNameError(e) {
		/* istanbul ignore next */
		return "deprecated";
	},
	buildEmptyAlternationError(e) {
		return `Ambiguous empty alternative: <${e.emptyChoiceIdx + 1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.\nOnly the last alternative may be an empty alternative.`;
	},
	buildTooManyAlternativesError(e) {
		return `An Alternation cannot have more than 256 alternatives:\n<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.\n has ${e.alternation.definition.length + 1} alternatives.`;
	},
	buildLeftRecursionError(e) {
		let m = e.topLevelRule.name;
		return `Left Recursion found in grammar.\nrule: <${m}> can be invoked from itself (directly or indirectly)\nwithout consuming any Tokens. The grammar path that causes this is: \n ${`${m} --> ${map_default(e.leftRecursionPath, (e) => e.name).concat([m]).join(" --> ")}`}\n To fix this refactor your grammar to remove the left recursion.\nsee: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
	},
	buildInvalidRuleNameError(e) {
		/* istanbul ignore next */
		return "deprecated";
	},
	buildDuplicateRuleNameError(e) {
		let m;
		return m = e.topLevelRule instanceof Rule ? e.topLevelRule.name : e.topLevelRule, `Duplicate definition, rule: ->${m}<- is already defined in the grammar: ->${e.grammarName}<-`;
	}
};
function resolveGrammar$1(e, m) {
	let h = new GastRefResolverVisitor(e, m);
	return h.resolveRefs(), h.errors;
}
var GastRefResolverVisitor = class extends GAstVisitor {
	constructor(e, m) {
		super(), this.nameToTopRule = e, this.errMsgProvider = m, this.errors = [];
	}
	resolveRefs() {
		forEach_default(values_default(this.nameToTopRule), (e) => {
			this.currTopLevel = e, e.accept(this);
		});
	}
	visitNonTerminal(e) {
		let m = this.nameToTopRule[e.nonTerminalName];
		if (m) e.referencedRule = m;
		else {
			let m = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
			this.errors.push({
				message: m,
				type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
				ruleName: this.currTopLevel.name,
				unresolvedRefName: e.nonTerminalName
			});
		}
	}
}, AbstractNextPossibleTokensWalker = class extends RestWalker {
	constructor(e, m) {
		super(), this.topProd = e, this.path = m, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
	}
	startWalking() {
		if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
		return this.ruleStack = clone_default(this.path.ruleStack).reverse(), this.occurrenceStack = clone_default(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
	}
	walk(e, m = []) {
		this.found || super.walk(e, m);
	}
	walkProdRef(e, m, h) {
		if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
			let g = m.concat(h);
			this.updateExpectedNext(), this.walk(e.referencedRule, g);
		}
	}
	updateExpectedNext() {
		isEmpty_default(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
	}
}, NextAfterTokenWalker = class extends AbstractNextPossibleTokensWalker {
	constructor(e, m) {
		super(e, m), this.path = m, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
	}
	walkTerminal(e, m, h) {
		this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found && (this.possibleTokTypes = first(new Alternative({ definition: m.concat(h) })), this.found = !0);
	}
}, AbstractNextTerminalAfterProductionWalker = class extends RestWalker {
	constructor(e, m) {
		super(), this.topRule = e, this.occurrence = m, this.result = {
			token: void 0,
			occurrence: void 0,
			isEndOfRule: void 0
		};
	}
	startWalking() {
		return this.walk(this.topRule), this.result;
	}
}, NextTerminalAfterManyWalker = class extends AbstractNextTerminalAfterProductionWalker {
	walkMany(e, m, h) {
		if (e.idx === this.occurrence) {
			let e = head_default(m.concat(h));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkMany(e, m, h);
	}
}, NextTerminalAfterManySepWalker = class extends AbstractNextTerminalAfterProductionWalker {
	walkManySep(e, m, h) {
		if (e.idx === this.occurrence) {
			let e = head_default(m.concat(h));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkManySep(e, m, h);
	}
}, NextTerminalAfterAtLeastOneWalker = class extends AbstractNextTerminalAfterProductionWalker {
	walkAtLeastOne(e, m, h) {
		if (e.idx === this.occurrence) {
			let e = head_default(m.concat(h));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkAtLeastOne(e, m, h);
	}
}, NextTerminalAfterAtLeastOneSepWalker = class extends AbstractNextTerminalAfterProductionWalker {
	walkAtLeastOneSep(e, m, h) {
		if (e.idx === this.occurrence) {
			let e = head_default(m.concat(h));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkAtLeastOneSep(e, m, h);
	}
};
function possiblePathsFrom(e, m, h = []) {
	h = clone_default(h);
	let g = [], _ = 0;
	function v(m) {
		return m.concat(drop_default(e, _ + 1));
	}
	function y(e) {
		let _ = possiblePathsFrom(v(e), m, h);
		return g.concat(_);
	}
	for (; h.length < m && _ < e.length;) {
		let m = e[_];
		if (m instanceof Alternative || m instanceof NonTerminal) return y(m.definition);
		if (m instanceof Option$1) g = y(m.definition);
		else if (m instanceof RepetitionMandatory) return y(m.definition.concat([new Repetition({ definition: m.definition })]));
		else if (m instanceof RepetitionMandatoryWithSeparator) return y([new Alternative({ definition: m.definition }), new Repetition({ definition: [new Terminal({ terminalType: m.separator })].concat(m.definition) })]);
		else if (m instanceof RepetitionWithSeparator) g = y(m.definition.concat([new Repetition({ definition: [new Terminal({ terminalType: m.separator })].concat(m.definition) })]));
		else if (m instanceof Repetition) g = y(m.definition.concat([new Repetition({ definition: m.definition })]));
		else if (m instanceof Alternation) return forEach_default(m.definition, (e) => {
			isEmpty_default(e.definition) === !1 && (g = y(e.definition));
		}), g;
		else if (m instanceof Terminal) h.push(m.terminalType);
		else throw Error("non exhaustive match");
		_++;
	}
	return g.push({
		partialPath: h,
		suffixDef: drop_default(e, _)
	}), g;
}
function nextPossibleTokensAfter(e, m, h, g) {
	let _ = "EXIT_NONE_TERMINAL", v = [_], y = "EXIT_ALTERNATIVE", b = !1, x = m.length, S = x - g - 1, C = [], w = [];
	for (w.push({
		idx: -1,
		def: e,
		ruleStack: [],
		occurrenceStack: []
	}); !isEmpty_default(w);) {
		let e = w.pop();
		if (e === y) {
			b && last_default(w).idx <= S && w.pop();
			continue;
		}
		let g = e.def, T = e.idx, E = e.ruleStack, D = e.occurrenceStack;
		if (isEmpty_default(g)) continue;
		let O = g[0];
		/* istanbul ignore else */
		if (O === _) {
			let e = {
				idx: T,
				def: drop_default(g),
				ruleStack: dropRight_default(E),
				occurrenceStack: dropRight_default(D)
			};
			w.push(e);
		} else if (O instanceof Terminal)
 /* istanbul ignore else */
		if (T < x - 1) {
			let e = T + 1, _ = m[e];
			if (h(_, O.terminalType)) {
				let m = {
					idx: e,
					def: drop_default(g),
					ruleStack: E,
					occurrenceStack: D
				};
				w.push(m);
			}
		} else if (T === x - 1) C.push({
			nextTokenType: O.terminalType,
			nextTokenOccurrence: O.idx,
			ruleStack: E,
			occurrenceStack: D
		}), b = !0;
		else throw Error("non exhaustive match");
		else if (O instanceof NonTerminal) {
			let e = clone_default(E);
			e.push(O.nonTerminalName);
			let m = clone_default(D);
			m.push(O.idx);
			let h = {
				idx: T,
				def: O.definition.concat(v, drop_default(g)),
				ruleStack: e,
				occurrenceStack: m
			};
			w.push(h);
		} else if (O instanceof Option$1) {
			let e = {
				idx: T,
				def: drop_default(g),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(e), w.push(y);
			let m = {
				idx: T,
				def: O.definition.concat(drop_default(g)),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(m);
		} else if (O instanceof RepetitionMandatory) {
			let e = new Repetition({
				definition: O.definition,
				idx: O.idx
			}), m = {
				idx: T,
				def: O.definition.concat([e], drop_default(g)),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(m);
		} else if (O instanceof RepetitionMandatoryWithSeparator) {
			let e = new Repetition({
				definition: [new Terminal({ terminalType: O.separator })].concat(O.definition),
				idx: O.idx
			}), m = {
				idx: T,
				def: O.definition.concat([e], drop_default(g)),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(m);
		} else if (O instanceof RepetitionWithSeparator) {
			let e = {
				idx: T,
				def: drop_default(g),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(e), w.push(y);
			let m = new Repetition({
				definition: [new Terminal({ terminalType: O.separator })].concat(O.definition),
				idx: O.idx
			}), h = {
				idx: T,
				def: O.definition.concat([m], drop_default(g)),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(h);
		} else if (O instanceof Repetition) {
			let e = {
				idx: T,
				def: drop_default(g),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(e), w.push(y);
			let m = new Repetition({
				definition: O.definition,
				idx: O.idx
			}), h = {
				idx: T,
				def: O.definition.concat([m], drop_default(g)),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(h);
		} else if (O instanceof Alternation) for (let e = O.definition.length - 1; e >= 0; e--) {
			let m = {
				idx: T,
				def: O.definition[e].definition.concat(drop_default(g)),
				ruleStack: E,
				occurrenceStack: D
			};
			w.push(m), w.push(y);
		}
		else if (O instanceof Alternative) w.push({
			idx: T,
			def: O.definition.concat(drop_default(g)),
			ruleStack: E,
			occurrenceStack: D
		});
		else if (O instanceof Rule) w.push(expandTopLevelRule(O, T, E, D));
		else throw Error("non exhaustive match");
	}
	return C;
}
function expandTopLevelRule(e, m, h, g) {
	let _ = clone_default(h);
	_.push(e.name);
	let v = clone_default(g);
	return v.push(1), {
		idx: m,
		def: e.definition,
		ruleStack: _,
		occurrenceStack: v
	};
}
var PROD_TYPE;
(function(e) {
	e[e.OPTION = 0] = "OPTION", e[e.REPETITION = 1] = "REPETITION", e[e.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", e[e.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", e[e.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", e[e.ALTERNATION = 5] = "ALTERNATION";
})(PROD_TYPE ||= {});
function getProdType$1(e) {
	/* istanbul ignore else */
	if (e instanceof Option$1 || e === "Option") return PROD_TYPE.OPTION;
	if (e instanceof Repetition || e === "Repetition") return PROD_TYPE.REPETITION;
	if (e instanceof RepetitionMandatory || e === "RepetitionMandatory") return PROD_TYPE.REPETITION_MANDATORY;
	if (e instanceof RepetitionMandatoryWithSeparator || e === "RepetitionMandatoryWithSeparator") return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
	if (e instanceof RepetitionWithSeparator || e === "RepetitionWithSeparator") return PROD_TYPE.REPETITION_WITH_SEPARATOR;
	if (e instanceof Alternation || e === "Alternation") return PROD_TYPE.ALTERNATION;
	throw Error("non exhaustive match");
}
function getLookaheadPaths(e) {
	let { occurrence: m, rule: h, prodType: g, maxLookahead: _ } = e, v = getProdType$1(g);
	return v === PROD_TYPE.ALTERNATION ? getLookaheadPathsForOr(m, h, _) : getLookaheadPathsForOptionalProd(m, h, v, _);
}
function buildLookaheadFuncForOr(e, m, h, g, _, v) {
	let y = getLookaheadPathsForOr(e, m, h);
	return v(y, g, areTokenCategoriesNotUsed(y) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher, _);
}
function buildLookaheadFuncForOptionalProd(e, m, h, g, _, v) {
	let y = getLookaheadPathsForOptionalProd(e, m, _, h), b = areTokenCategoriesNotUsed(y) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
	return v(y[0], b, g);
}
function buildAlternativesLookAheadFunc(e, m, h, g) {
	let _ = e.length, v = every_default(e, (e) => every_default(e, (e) => e.length === 1));
	if (m) return function(m) {
		let g = map_default(m, (e) => e.GATE);
		for (let m = 0; m < _; m++) {
			let _ = e[m], v = _.length, y = g[m];
			if (!(y !== void 0 && y.call(this) === !1)) nextPath: for (let e = 0; e < v; e++) {
				let g = _[e], v = g.length;
				for (let e = 0; e < v; e++) if (h(this.LA(e + 1), g[e]) === !1) continue nextPath;
				return m;
			}
		}
	};
	if (v && !g) {
		let m = reduce_default(map_default(e, (e) => flatten_default(e)), (e, m, h) => (forEach_default(m, (m) => {
			has_default(e, m.tokenTypeIdx) || (e[m.tokenTypeIdx] = h), forEach_default(m.categoryMatches, (m) => {
				has_default(e, m) || (e[m] = h);
			});
		}), e), {});
		return function() {
			return m[this.LA(1).tokenTypeIdx];
		};
	} else return function() {
		for (let m = 0; m < _; m++) {
			let g = e[m], _ = g.length;
			nextPath: for (let e = 0; e < _; e++) {
				let _ = g[e], v = _.length;
				for (let e = 0; e < v; e++) if (h(this.LA(e + 1), _[e]) === !1) continue nextPath;
				return m;
			}
		}
	};
}
function buildSingleAlternativeLookaheadFunction(e, m, h) {
	let g = every_default(e, (e) => e.length === 1), _ = e.length;
	if (g && !h) {
		let m = flatten_default(e);
		if (m.length === 1 && isEmpty_default(m[0].categoryMatches)) {
			let e = m[0].tokenTypeIdx;
			return function() {
				return this.LA(1).tokenTypeIdx === e;
			};
		} else {
			let e = reduce_default(m, (e, m, h) => (e[m.tokenTypeIdx] = !0, forEach_default(m.categoryMatches, (m) => {
				e[m] = !0;
			}), e), []);
			return function() {
				return e[this.LA(1).tokenTypeIdx] === !0;
			};
		}
	} else return function() {
		nextPath: for (let h = 0; h < _; h++) {
			let g = e[h], _ = g.length;
			for (let e = 0; e < _; e++) if (m(this.LA(e + 1), g[e]) === !1) continue nextPath;
			return !0;
		}
		return !1;
	};
}
var RestDefinitionFinderWalker = class extends RestWalker {
	constructor(e, m, h) {
		super(), this.topProd = e, this.targetOccurrence = m, this.targetProdType = h;
	}
	startWalking() {
		return this.walk(this.topProd), this.restDef;
	}
	checkIsTarget(e, m, h, g) {
		return e.idx === this.targetOccurrence && this.targetProdType === m ? (this.restDef = h.concat(g), !0) : !1;
	}
	walkOption(e, m, h) {
		this.checkIsTarget(e, PROD_TYPE.OPTION, m, h) || super.walkOption(e, m, h);
	}
	walkAtLeastOne(e, m, h) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY, m, h) || super.walkOption(e, m, h);
	}
	walkAtLeastOneSep(e, m, h) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, m, h) || super.walkOption(e, m, h);
	}
	walkMany(e, m, h) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION, m, h) || super.walkOption(e, m, h);
	}
	walkManySep(e, m, h) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_WITH_SEPARATOR, m, h) || super.walkOption(e, m, h);
	}
}, InsideDefinitionFinderVisitor = class extends GAstVisitor {
	constructor(e, m, h) {
		super(), this.targetOccurrence = e, this.targetProdType = m, this.targetRef = h, this.result = [];
	}
	checkIsTarget(e, m) {
		e.idx === this.targetOccurrence && this.targetProdType === m && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
	}
	visitOption(e) {
		this.checkIsTarget(e, PROD_TYPE.OPTION);
	}
	visitRepetition(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION);
	}
	visitRepetitionMandatory(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
	}
	visitRepetitionWithSeparator(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_WITH_SEPARATOR);
	}
	visitAlternation(e) {
		this.checkIsTarget(e, PROD_TYPE.ALTERNATION);
	}
};
function initializeArrayOfArrays(e) {
	let m = Array(e);
	for (let h = 0; h < e; h++) m[h] = [];
	return m;
}
function pathToHashKeys(e) {
	let m = [""];
	for (let h = 0; h < e.length; h++) {
		let g = e[h], _ = [];
		for (let e = 0; e < m.length; e++) {
			let h = m[e];
			_.push(h + "_" + g.tokenTypeIdx);
			for (let e = 0; e < g.categoryMatches.length; e++) {
				let m = "_" + g.categoryMatches[e];
				_.push(h + m);
			}
		}
		m = _;
	}
	return m;
}
function isUniquePrefixHash(e, m, h) {
	for (let g = 0; g < e.length; g++) {
		if (g === h) continue;
		let _ = e[g];
		for (let e = 0; e < m.length; e++) if (_[m[e]] === !0) return !1;
	}
	return !0;
}
function lookAheadSequenceFromAlternatives(e, m) {
	let h = map_default(e, (e) => possiblePathsFrom([e], 1)), g = initializeArrayOfArrays(h.length), _ = map_default(h, (e) => {
		let m = {};
		return forEach_default(e, (e) => {
			forEach_default(pathToHashKeys(e.partialPath), (e) => {
				m[e] = !0;
			});
		}), m;
	}), v = h;
	for (let e = 1; e <= m; e++) {
		let h = v;
		v = initializeArrayOfArrays(h.length);
		for (let y = 0; y < h.length; y++) {
			let b = h[y];
			for (let h = 0; h < b.length; h++) {
				let x = b[h].partialPath, S = b[h].suffixDef, C = pathToHashKeys(x);
				if (isUniquePrefixHash(_, C, y) || isEmpty_default(S) || x.length === m) {
					let e = g[y];
					if (containsPath(e, x) === !1) {
						e.push(x);
						for (let e = 0; e < C.length; e++) {
							let m = C[e];
							_[y][m] = !0;
						}
					}
				} else {
					let m = possiblePathsFrom(S, e + 1, x);
					v[y] = v[y].concat(m), forEach_default(m, (e) => {
						forEach_default(pathToHashKeys(e.partialPath), (e) => {
							_[y][e] = !0;
						});
					});
				}
			}
		}
	}
	return g;
}
function getLookaheadPathsForOr(e, m, h, g) {
	let _ = new InsideDefinitionFinderVisitor(e, PROD_TYPE.ALTERNATION, g);
	return m.accept(_), lookAheadSequenceFromAlternatives(_.result, h);
}
function getLookaheadPathsForOptionalProd(e, m, h, g) {
	let _ = new InsideDefinitionFinderVisitor(e, h);
	m.accept(_);
	let v = _.result, y = new RestDefinitionFinderWalker(m, e, h).startWalking();
	return lookAheadSequenceFromAlternatives([new Alternative({ definition: v }), new Alternative({ definition: y })], g);
}
function containsPath(e, m) {
	compareOtherPath: for (let h = 0; h < e.length; h++) {
		let g = e[h];
		if (g.length === m.length) {
			for (let e = 0; e < g.length; e++) {
				let h = m[e], _ = g[e];
				if (!(h === _ || _.categoryMatchesMap[h.tokenTypeIdx] !== void 0)) continue compareOtherPath;
			}
			return !0;
		}
	}
	return !1;
}
function isStrictPrefixOfPath(e, m) {
	return e.length < m.length && every_default(e, (e, h) => {
		let g = m[h];
		return e === g || g.categoryMatchesMap[e.tokenTypeIdx];
	});
}
function areTokenCategoriesNotUsed(e) {
	return every_default(e, (e) => every_default(e, (e) => every_default(e, (e) => isEmpty_default(e.categoryMatches))));
}
function validateLookahead(e) {
	return map_default(e.lookaheadStrategy.validate({
		rules: e.rules,
		tokenTypes: e.tokenTypes,
		grammarName: e.grammarName
	}), (e) => Object.assign({ type: ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, e));
}
function validateGrammar$1(e, m, h, g) {
	let _ = flatMap_default(e, (e) => validateDuplicateProductions(e, h)), v = checkTerminalAndNoneTerminalsNameSpace(e, m, h), y = flatMap_default(e, (e) => validateTooManyAlts(e, h)), b = flatMap_default(e, (m) => validateRuleDoesNotAlreadyExist(m, e, g, h));
	return _.concat(v, y, b);
}
function validateDuplicateProductions(e, m) {
	let h = new OccurrenceValidationCollector();
	e.accept(h);
	let g = h.allProductions;
	return map_default(values_default(pickBy_default(groupBy_default(g, identifyProductionForDuplicates), (e) => e.length > 1)), (h) => {
		let g = head_default(h), _ = m.buildDuplicateFoundError(e, h), v = getProductionDslName$1(g), y = {
			message: _,
			type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
			ruleName: e.name,
			dslName: v,
			occurrence: g.idx
		}, b = getExtraProductionArgument(g);
		return b && (y.parameter = b), y;
	});
}
function identifyProductionForDuplicates(e) {
	return `${getProductionDslName$1(e)}_#_${e.idx}_#_${getExtraProductionArgument(e)}`;
}
function getExtraProductionArgument(e) {
	return e instanceof Terminal ? e.terminalType.name : e instanceof NonTerminal ? e.nonTerminalName : "";
}
var OccurrenceValidationCollector = class extends GAstVisitor {
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitNonTerminal(e) {
		this.allProductions.push(e);
	}
	visitOption(e) {
		this.allProductions.push(e);
	}
	visitRepetitionWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatory(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetition(e) {
		this.allProductions.push(e);
	}
	visitAlternation(e) {
		this.allProductions.push(e);
	}
	visitTerminal(e) {
		this.allProductions.push(e);
	}
};
function validateRuleDoesNotAlreadyExist(e, m, h, g) {
	let _ = [];
	if (reduce_default(m, (m, h) => h.name === e.name ? m + 1 : m, 0) > 1) {
		let m = g.buildDuplicateRuleNameError({
			topLevelRule: e,
			grammarName: h
		});
		_.push({
			message: m,
			type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
			ruleName: e.name
		});
	}
	return _;
}
function validateRuleIsOverridden(e, m, h) {
	let g = [], _;
	return includes_default(m, e) || (_ = `Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${h}<-as it is not defined in any of the super grammars `, g.push({
		message: _,
		type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
		ruleName: e
	})), g;
}
function validateNoLeftRecursion(e, m, h, g = []) {
	let _ = [], v = getFirstNoneTerminal(m.definition);
	if (isEmpty_default(v)) return [];
	{
		let m = e.name;
		includes_default(v, e) && _.push({
			message: h.buildLeftRecursionError({
				topLevelRule: e,
				leftRecursionPath: g
			}),
			type: ParserDefinitionErrorType.LEFT_RECURSION,
			ruleName: m
		});
		let y = flatMap_default(difference_default(v, g.concat([e])), (m) => {
			let _ = clone_default(g);
			return _.push(m), validateNoLeftRecursion(e, m, h, _);
		});
		return _.concat(y);
	}
}
function getFirstNoneTerminal(e) {
	let m = [];
	if (isEmpty_default(e)) return m;
	let h = head_default(e);
	/* istanbul ignore else */
	if (h instanceof NonTerminal) m.push(h.referencedRule);
	else if (h instanceof Alternative || h instanceof Option$1 || h instanceof RepetitionMandatory || h instanceof RepetitionMandatoryWithSeparator || h instanceof RepetitionWithSeparator || h instanceof Repetition) m = m.concat(getFirstNoneTerminal(h.definition));
	else if (h instanceof Alternation) m = flatten_default(map_default(h.definition, (e) => getFirstNoneTerminal(e.definition)));
	else if (!(h instanceof Terminal)) throw Error("non exhaustive match");
	let g = isOptionalProd(h), _ = e.length > 1;
	if (g && _) {
		let h = drop_default(e);
		return m.concat(getFirstNoneTerminal(h));
	} else return m;
}
var OrCollector = class extends GAstVisitor {
	constructor() {
		super(...arguments), this.alternations = [];
	}
	visitAlternation(e) {
		this.alternations.push(e);
	}
};
function validateEmptyOrAlternative(e, m) {
	let h = new OrCollector();
	e.accept(h);
	let g = h.alternations;
	return flatMap_default(g, (h) => flatMap_default(dropRight_default(h.definition), (g, _) => isEmpty_default(nextPossibleTokensAfter([g], [], tokenStructuredMatcher, 1)) ? [{
		message: m.buildEmptyAlternationError({
			topLevelRule: e,
			alternation: h,
			emptyChoiceIdx: _
		}),
		type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
		ruleName: e.name,
		occurrence: h.idx,
		alternative: _ + 1
	}] : []));
}
function validateAmbiguousAlternationAlternatives(e, m, h) {
	let g = new OrCollector();
	e.accept(g);
	let _ = g.alternations;
	return _ = reject_default(_, (e) => e.ignoreAmbiguities === !0), flatMap_default(_, (g) => {
		let _ = g.idx, v = getLookaheadPathsForOr(_, e, g.maxLookahead || m, g), y = checkAlternativesAmbiguities(v, g, e, h), b = checkPrefixAlternativesAmbiguities(v, g, e, h);
		return y.concat(b);
	});
}
var RepetitionCollector = class extends GAstVisitor {
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitRepetitionWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatory(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetition(e) {
		this.allProductions.push(e);
	}
};
function validateTooManyAlts(e, m) {
	let h = new OrCollector();
	e.accept(h);
	let g = h.alternations;
	return flatMap_default(g, (h) => h.definition.length > 255 ? [{
		message: m.buildTooManyAlternativesError({
			topLevelRule: e,
			alternation: h
		}),
		type: ParserDefinitionErrorType.TOO_MANY_ALTS,
		ruleName: e.name,
		occurrence: h.idx
	}] : []);
}
function validateSomeNonEmptyLookaheadPath(e, m, h) {
	let g = [];
	return forEach_default(e, (e) => {
		let _ = new RepetitionCollector();
		e.accept(_);
		let v = _.allProductions;
		forEach_default(v, (_) => {
			let v = getProdType$1(_), y = _.maxLookahead || m, b = _.idx, x = getLookaheadPathsForOptionalProd(b, e, v, y)[0];
			if (isEmpty_default(flatten_default(x))) {
				let m = h.buildEmptyRepetitionError({
					topLevelRule: e,
					repetition: _
				});
				g.push({
					message: m,
					type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
					ruleName: e.name
				});
			}
		});
	}), g;
}
function checkAlternativesAmbiguities(e, m, h, g) {
	let _ = [];
	return map_default(reduce_default(e, (h, g, v) => (m.definition[v].ignoreAmbiguities === !0 || forEach_default(g, (g) => {
		let y = [v];
		forEach_default(e, (e, h) => {
			v !== h && containsPath(e, g) && m.definition[h].ignoreAmbiguities !== !0 && y.push(h);
		}), y.length > 1 && !containsPath(_, g) && (_.push(g), h.push({
			alts: y,
			path: g
		}));
	}), h), []), (e) => {
		let _ = map_default(e.alts, (e) => e + 1);
		return {
			message: g.buildAlternationAmbiguityError({
				topLevelRule: h,
				alternation: m,
				ambiguityIndices: _,
				prefixPath: e.path
			}),
			type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
			ruleName: h.name,
			occurrence: m.idx,
			alternatives: e.alts
		};
	});
}
function checkPrefixAlternativesAmbiguities(e, m, h, g) {
	let _ = reduce_default(e, (e, m, h) => {
		let g = map_default(m, (e) => ({
			idx: h,
			path: e
		}));
		return e.concat(g);
	}, []);
	return compact_default(flatMap_default(_, (e) => {
		if (m.definition[e.idx].ignoreAmbiguities === !0) return [];
		let v = e.idx, y = e.path;
		return map_default(filter_default(_, (e) => m.definition[e.idx].ignoreAmbiguities !== !0 && e.idx < v && isStrictPrefixOfPath(e.path, y)), (e) => {
			let _ = [e.idx + 1, v + 1], y = m.idx === 0 ? "" : m.idx;
			return {
				message: g.buildAlternationPrefixAmbiguityError({
					topLevelRule: h,
					alternation: m,
					ambiguityIndices: _,
					prefixPath: e.path
				}),
				type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
				ruleName: h.name,
				occurrence: y,
				alternatives: _
			};
		});
	}));
}
function checkTerminalAndNoneTerminalsNameSpace(e, m, h) {
	let g = [], _ = map_default(m, (e) => e.name);
	return forEach_default(e, (e) => {
		let m = e.name;
		if (includes_default(_, m)) {
			let _ = h.buildNamespaceConflictError(e);
			g.push({
				message: _,
				type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
				ruleName: m
			});
		}
	}), g;
}
function resolveGrammar(e) {
	let m = defaults_default(e, { errMsgProvider: defaultGrammarResolverErrorProvider }), h = {};
	return forEach_default(e.rules, (e) => {
		h[e.name] = e;
	}), resolveGrammar$1(h, m.errMsgProvider);
}
function validateGrammar(e) {
	return e = defaults_default(e, { errMsgProvider: defaultGrammarValidatorErrorProvider }), validateGrammar$1(e.rules, e.tokenTypes, e.errMsgProvider, e.grammarName);
}
var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException", NO_VIABLE_ALT_EXCEPTION = "NoViableAltException", EARLY_EXIT_EXCEPTION = "EarlyExitException", NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException", RECOGNITION_EXCEPTION_NAMES = [
	MISMATCHED_TOKEN_EXCEPTION,
	NO_VIABLE_ALT_EXCEPTION,
	EARLY_EXIT_EXCEPTION,
	NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
function isRecognitionException(e) {
	return includes_default(RECOGNITION_EXCEPTION_NAMES, e.name);
}
var RecognitionException = class extends Error {
	constructor(e, m) {
		/* istanbul ignore next - V8 workaround to remove constructor from stacktrace when typescript target is ES5 */
		super(e), this.token = m, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
	}
}, MismatchedTokenException = class extends RecognitionException {
	constructor(e, m, h) {
		super(e, m), this.previousToken = h, this.name = MISMATCHED_TOKEN_EXCEPTION;
	}
}, NoViableAltException = class extends RecognitionException {
	constructor(e, m, h) {
		super(e, m), this.previousToken = h, this.name = NO_VIABLE_ALT_EXCEPTION;
	}
}, NotAllInputParsedException = class extends RecognitionException {
	constructor(e, m) {
		super(e, m), this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
	}
}, EarlyExitException = class extends RecognitionException {
	constructor(e, m, h) {
		super(e, m), this.previousToken = h, this.name = EARLY_EXIT_EXCEPTION;
	}
};
const EOF_FOLLOW_KEY = {};
var InRuleRecoveryException = class extends Error {
	constructor(e) {
		super(e), this.name = "InRuleRecoveryException";
	}
}, Recoverable = class {
	initRecoverable(e) {
		this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = has_default(e, "recoveryEnabled") ? e.recoveryEnabled : DEFAULT_PARSER_CONFIG.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = attemptInRepetitionRecovery);
	}
	getTokenToInsert(e) {
		let m = createTokenInstance(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
		return m.isInsertedInRecovery = !0, m;
	}
	canTokenTypeBeInsertedInRecovery(e) {
		return !0;
	}
	canTokenTypeBeDeletedInRecovery(e) {
		return !0;
	}
	tryInRepetitionRecovery(e, m, h, g) {
		let _ = this.findReSyncTokenType(), v = this.exportLexerState(), y = [], b = !1, x = this.LA(1), S = this.LA(1), C = () => {
			let e = this.LA(0), m = new MismatchedTokenException(this.errorMessageProvider.buildMismatchTokenMessage({
				expected: g,
				actual: x,
				previous: e,
				ruleName: this.getCurrRuleFullName()
			}), x, this.LA(0));
			m.resyncedTokens = dropRight_default(y), this.SAVE_ERROR(m);
		};
		for (; !b;) if (this.tokenMatcher(S, g)) {
			C();
			return;
		} else if (h.call(this)) {
			C(), e.apply(this, m);
			return;
		} else this.tokenMatcher(S, _) ? b = !0 : (S = this.SKIP_TOKEN(), this.addToResyncTokens(S, y));
		this.importLexerState(v);
	}
	shouldInRepetitionRecoveryBeTried(e, m, h) {
		return !(h === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, m)));
	}
	getFollowsForInRuleRecovery(e, m) {
		let h = this.getCurrentGrammarPath(e, m);
		return this.getNextPossibleTokenTypes(h);
	}
	tryInRuleRecovery(e, m) {
		if (this.canRecoverWithSingleTokenInsertion(e, m)) return this.getTokenToInsert(e);
		if (this.canRecoverWithSingleTokenDeletion(e)) {
			let e = this.SKIP_TOKEN();
			return this.consumeToken(), e;
		}
		throw new InRuleRecoveryException("sad sad panda");
	}
	canPerformInRuleRecovery(e, m) {
		return this.canRecoverWithSingleTokenInsertion(e, m) || this.canRecoverWithSingleTokenDeletion(e);
	}
	canRecoverWithSingleTokenInsertion(e, m) {
		if (!this.canTokenTypeBeInsertedInRecovery(e) || isEmpty_default(m)) return !1;
		let h = this.LA(1);
		return find_default(m, (e) => this.tokenMatcher(h, e)) !== void 0;
	}
	canRecoverWithSingleTokenDeletion(e) {
		return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
	}
	isInCurrentRuleReSyncSet(e) {
		let m = this.getCurrFollowKey();
		return includes_default(this.getFollowSetFromFollowKey(m), e);
	}
	findReSyncTokenType() {
		let e = this.flattenFollowSet(), m = this.LA(1), h = 2;
		for (;;) {
			let g = find_default(e, (e) => tokenMatcher(m, e));
			if (g !== void 0) return g;
			m = this.LA(h), h++;
		}
	}
	getCurrFollowKey() {
		if (this.RULE_STACK.length === 1) return EOF_FOLLOW_KEY;
		let e = this.getLastExplicitRuleShortName(), m = this.getLastExplicitRuleOccurrenceIndex(), h = this.getPreviousExplicitRuleShortName();
		return {
			ruleName: this.shortRuleNameToFullName(e),
			idxInCallingRule: m,
			inRule: this.shortRuleNameToFullName(h)
		};
	}
	buildFullFollowKeyStack() {
		let e = this.RULE_STACK, m = this.RULE_OCCURRENCE_STACK;
		return map_default(e, (h, g) => g === 0 ? EOF_FOLLOW_KEY : {
			ruleName: this.shortRuleNameToFullName(h),
			idxInCallingRule: m[g],
			inRule: this.shortRuleNameToFullName(e[g - 1])
		});
	}
	flattenFollowSet() {
		return flatten_default(map_default(this.buildFullFollowKeyStack(), (e) => this.getFollowSetFromFollowKey(e)));
	}
	getFollowSetFromFollowKey(e) {
		if (e === EOF_FOLLOW_KEY) return [EOF];
		let m = e.ruleName + e.idxInCallingRule + IN + e.inRule;
		return this.resyncFollows[m];
	}
	addToResyncTokens(e, m) {
		return this.tokenMatcher(e, EOF) || m.push(e), m;
	}
	reSyncTo(e) {
		let m = [], h = this.LA(1);
		for (; this.tokenMatcher(h, e) === !1;) h = this.SKIP_TOKEN(), this.addToResyncTokens(h, m);
		return dropRight_default(m);
	}
	attemptInRepetitionRecovery(e, m, h, g, _, v, y) {}
	getCurrentGrammarPath(e, m) {
		return {
			ruleStack: this.getHumanReadableRuleStack(),
			occurrenceStack: clone_default(this.RULE_OCCURRENCE_STACK),
			lastTok: e,
			lastTokOccurrence: m
		};
	}
	getHumanReadableRuleStack() {
		return map_default(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
	}
};
function attemptInRepetitionRecovery(e, m, h, g, _, v, y) {
	let b = this.getKeyForAutomaticLookahead(g, _), x = this.firstAfterRepMap[b];
	if (x === void 0) {
		let e = this.getCurrRuleFullName(), m = this.getGAstProductions()[e];
		x = new v(m, _).startWalking(), this.firstAfterRepMap[b] = x;
	}
	let S = x.token, C = x.occurrence, w = x.isEndOfRule;
	this.RULE_STACK.length === 1 && w && S === void 0 && (S = EOF, C = 1), !(S === void 0 || C === void 0) && this.shouldInRepetitionRecoveryBeTried(S, C, y) && this.tryInRepetitionRecovery(e, m, h, S);
}
const AT_LEAST_ONE_IDX = 1024, MANY_SEP_IDX = 1280, AT_LEAST_ONE_SEP_IDX = 1536;
function getKeyForAutomaticLookahead(e, m, h) {
	return h | m | e;
}
var LLkLookaheadStrategy = class {
	constructor(e) {
		this.maxLookahead = e?.maxLookahead ?? DEFAULT_PARSER_CONFIG.maxLookahead;
	}
	validate(e) {
		let m = this.validateNoLeftRecursion(e.rules);
		if (isEmpty_default(m)) {
			let h = this.validateEmptyOrAlternatives(e.rules), g = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), _ = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
			return [
				...m,
				...h,
				...g,
				..._
			];
		}
		return m;
	}
	validateNoLeftRecursion(e) {
		return flatMap_default(e, (e) => validateNoLeftRecursion(e, e, defaultGrammarValidatorErrorProvider));
	}
	validateEmptyOrAlternatives(e) {
		return flatMap_default(e, (e) => validateEmptyOrAlternative(e, defaultGrammarValidatorErrorProvider));
	}
	validateAmbiguousAlternationAlternatives(e, m) {
		return flatMap_default(e, (e) => validateAmbiguousAlternationAlternatives(e, m, defaultGrammarValidatorErrorProvider));
	}
	validateSomeNonEmptyLookaheadPath(e, m) {
		return validateSomeNonEmptyLookaheadPath(e, m, defaultGrammarValidatorErrorProvider);
	}
	buildLookaheadForAlternation(e) {
		return buildLookaheadFuncForOr(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, buildAlternativesLookAheadFunc);
	}
	buildLookaheadForOptional(e) {
		return buildLookaheadFuncForOptionalProd(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, getProdType$1(e.prodType), buildSingleAlternativeLookaheadFunction);
	}
}, LooksAhead = class {
	initLooksAhead(e) {
		this.dynamicTokensEnabled = has_default(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled, this.maxLookahead = has_default(e, "maxLookahead") ? e.maxLookahead : DEFAULT_PARSER_CONFIG.maxLookahead, this.lookaheadStrategy = has_default(e, "lookaheadStrategy") ? e.lookaheadStrategy : new LLkLookaheadStrategy({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
	}
	preComputeLookaheadFunctions(e) {
		forEach_default(e, (e) => {
			this.TRACE_INIT(`${e.name} Rule Lookahead`, () => {
				let { alternation: m, repetition: h, option: g, repetitionMandatory: _, repetitionMandatoryWithSeparator: v, repetitionWithSeparator: y } = collectMethods(e);
				forEach_default(m, (m) => {
					let h = m.idx === 0 ? "" : m.idx;
					this.TRACE_INIT(`${getProductionDslName$1(m)}${h}`, () => {
						let h = this.lookaheadStrategy.buildLookaheadForAlternation({
							prodOccurrence: m.idx,
							rule: e,
							maxLookahead: m.maxLookahead || this.maxLookahead,
							hasPredicates: m.hasPredicates,
							dynamicTokensEnabled: this.dynamicTokensEnabled
						}), g = getKeyForAutomaticLookahead(this.fullRuleNameToShort[e.name], 256, m.idx);
						this.setLaFuncCache(g, h);
					});
				}), forEach_default(h, (m) => {
					this.computeLookaheadFunc(e, m.idx, 768, "Repetition", m.maxLookahead, getProductionDslName$1(m));
				}), forEach_default(g, (m) => {
					this.computeLookaheadFunc(e, m.idx, 512, "Option", m.maxLookahead, getProductionDslName$1(m));
				}), forEach_default(_, (m) => {
					this.computeLookaheadFunc(e, m.idx, AT_LEAST_ONE_IDX, "RepetitionMandatory", m.maxLookahead, getProductionDslName$1(m));
				}), forEach_default(v, (m) => {
					this.computeLookaheadFunc(e, m.idx, AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", m.maxLookahead, getProductionDslName$1(m));
				}), forEach_default(y, (m) => {
					this.computeLookaheadFunc(e, m.idx, MANY_SEP_IDX, "RepetitionWithSeparator", m.maxLookahead, getProductionDslName$1(m));
				});
			});
		});
	}
	computeLookaheadFunc(e, m, h, g, _, v) {
		this.TRACE_INIT(`${v}${m === 0 ? "" : m}`, () => {
			let v = this.lookaheadStrategy.buildLookaheadForOptional({
				prodOccurrence: m,
				rule: e,
				maxLookahead: _ || this.maxLookahead,
				dynamicTokensEnabled: this.dynamicTokensEnabled,
				prodType: g
			}), y = getKeyForAutomaticLookahead(this.fullRuleNameToShort[e.name], h, m);
			this.setLaFuncCache(y, v);
		});
	}
	getKeyForAutomaticLookahead(e, m) {
		return getKeyForAutomaticLookahead(this.getLastExplicitRuleShortName(), e, m);
	}
	getLaFuncFromCache(e) {
		return this.lookAheadFuncsCache.get(e);
	}
	/* istanbul ignore next */
	setLaFuncCache(e, m) {
		this.lookAheadFuncsCache.set(e, m);
	}
}, collectorVisitor = new class extends GAstVisitor {
	constructor() {
		super(...arguments), this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	reset() {
		this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	visitOption(e) {
		this.dslMethods.option.push(e);
	}
	visitRepetitionWithSeparator(e) {
		this.dslMethods.repetitionWithSeparator.push(e);
	}
	visitRepetitionMandatory(e) {
		this.dslMethods.repetitionMandatory.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.dslMethods.repetitionMandatoryWithSeparator.push(e);
	}
	visitRepetition(e) {
		this.dslMethods.repetition.push(e);
	}
	visitAlternation(e) {
		this.dslMethods.alternation.push(e);
	}
}();
function collectMethods(e) {
	collectorVisitor.reset(), e.accept(collectorVisitor);
	let m = collectorVisitor.dslMethods;
	return collectorVisitor.reset(), m;
}
function setNodeLocationOnlyOffset(e, m) {
	isNaN(e.startOffset) === !0 ? (e.startOffset = m.startOffset, e.endOffset = m.endOffset) : e.endOffset < m.endOffset && (e.endOffset = m.endOffset);
}
function setNodeLocationFull(e, m) {
	isNaN(e.startOffset) === !0 ? (e.startOffset = m.startOffset, e.startColumn = m.startColumn, e.startLine = m.startLine, e.endOffset = m.endOffset, e.endColumn = m.endColumn, e.endLine = m.endLine) : e.endOffset < m.endOffset && (e.endOffset = m.endOffset, e.endColumn = m.endColumn, e.endLine = m.endLine);
}
function addTerminalToCst(e, m, h) {
	e.children[h] === void 0 ? e.children[h] = [m] : e.children[h].push(m);
}
function addNoneTerminalToCst(e, m, h) {
	e.children[m] === void 0 ? e.children[m] = [h] : e.children[m].push(h);
}
var NAME = "name";
function defineNameProp(e, m) {
	Object.defineProperty(e, NAME, {
		enumerable: !1,
		configurable: !0,
		writable: !1,
		value: m
	});
}
function defaultVisit(e, m) {
	let h = keys_default(e), g = h.length;
	for (let _ = 0; _ < g; _++) {
		let g = e[h[_]], v = g.length;
		for (let e = 0; e < v; e++) {
			let h = g[e];
			h.tokenTypeIdx === void 0 && this[h.name](h.children, m);
		}
	}
}
function createBaseSemanticVisitorConstructor(e, m) {
	let h = function() {};
	return defineNameProp(h, e + "BaseSemantics"), h.prototype = {
		visit: function(e, m) {
			if (isArray_default(e) && (e = e[0]), !isUndefined_default(e)) return this[e.name](e.children, m);
		},
		validateVisitor: function() {
			let e = validateVisitor(this, m);
			if (!isEmpty_default(e)) {
				let m = map_default(e, (e) => e.msg);
				throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:\n\t${m.join("\n\n").replace(/\n/g, "\n	")}`);
			}
		}
	}, h.prototype.constructor = h, h._RULE_NAMES = m, h;
}
function createBaseVisitorConstructorWithDefaults(e, m, h) {
	let g = function() {};
	defineNameProp(g, e + "BaseSemanticsWithDefaults");
	let _ = Object.create(h.prototype);
	return forEach_default(m, (e) => {
		_[e] = defaultVisit;
	}), g.prototype = _, g.prototype.constructor = g, g;
}
var CstVisitorDefinitionError;
(function(e) {
	e[e.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", e[e.MISSING_METHOD = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError ||= {});
function validateVisitor(e, m) {
	return validateMissingCstMethods(e, m);
}
function validateMissingCstMethods(e, m) {
	return compact_default(map_default(filter_default(m, (m) => isFunction_default(e[m]) === !1), (m) => ({
		msg: `Missing visitor method: <${m}> on ${e.constructor.name} CST Visitor.`,
		type: CstVisitorDefinitionError.MISSING_METHOD,
		methodName: m
	})));
}
var TreeBuilder = class {
	initTreeBuilder(e) {
		if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = has_default(e, "nodeLocationTracking") ? e.nodeLocationTracking : DEFAULT_PARSER_CONFIG.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = noop_default, this.cstFinallyStateUpdate = noop_default, this.cstPostTerminal = noop_default, this.cstPostNonTerminal = noop_default, this.cstPostRule = noop_default;
		else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = setNodeLocationFull, this.setNodeLocationFromNode = setNodeLocationFull, this.cstPostRule = noop_default, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = noop_default, this.setNodeLocationFromNode = noop_default, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
		else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = setNodeLocationOnlyOffset, this.setNodeLocationFromNode = setNodeLocationOnlyOffset, this.cstPostRule = noop_default, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = noop_default, this.setNodeLocationFromNode = noop_default, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
		else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = noop_default, this.setNodeLocationFromNode = noop_default, this.cstPostRule = noop_default, this.setInitialNodeLocation = noop_default;
		else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
	}
	setInitialNodeLocationOnlyOffsetRecovery(e) {
		e.location = {
			startOffset: NaN,
			endOffset: NaN
		};
	}
	setInitialNodeLocationOnlyOffsetRegular(e) {
		e.location = {
			startOffset: this.LA(1).startOffset,
			endOffset: NaN
		};
	}
	setInitialNodeLocationFullRecovery(e) {
		e.location = {
			startOffset: NaN,
			startLine: NaN,
			startColumn: NaN,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	setInitialNodeLocationFullRegular(e) {
		let m = this.LA(1);
		e.location = {
			startOffset: m.startOffset,
			startLine: m.startLine,
			startColumn: m.startColumn,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	cstInvocationStateUpdate(e) {
		let m = {
			name: e,
			children: Object.create(null)
		};
		this.setInitialNodeLocation(m), this.CST_STACK.push(m);
	}
	cstFinallyStateUpdate() {
		this.CST_STACK.pop();
	}
	cstPostRuleFull(e) {
		let m = this.LA(0), h = e.location;
		h.startOffset <= m.startOffset ? (h.endOffset = m.endOffset, h.endLine = m.endLine, h.endColumn = m.endColumn) : (h.startOffset = NaN, h.startLine = NaN, h.startColumn = NaN);
	}
	cstPostRuleOnlyOffset(e) {
		let m = this.LA(0), h = e.location;
		h.startOffset <= m.startOffset ? h.endOffset = m.endOffset : h.startOffset = NaN;
	}
	cstPostTerminal(e, m) {
		let h = this.CST_STACK[this.CST_STACK.length - 1];
		addTerminalToCst(h, m, e), this.setNodeLocationFromToken(h.location, m);
	}
	cstPostNonTerminal(e, m) {
		let h = this.CST_STACK[this.CST_STACK.length - 1];
		addNoneTerminalToCst(h, m, e), this.setNodeLocationFromNode(h.location, e.location);
	}
	getBaseCstVisitorConstructor() {
		if (isUndefined_default(this.baseCstVisitorConstructor)) {
			let e = createBaseSemanticVisitorConstructor(this.className, keys_default(this.gastProductionsCache));
			return this.baseCstVisitorConstructor = e, e;
		}
		return this.baseCstVisitorConstructor;
	}
	getBaseCstVisitorConstructorWithDefaults() {
		if (isUndefined_default(this.baseCstVisitorWithDefaultsConstructor)) {
			let e = createBaseVisitorConstructorWithDefaults(this.className, keys_default(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
			return this.baseCstVisitorWithDefaultsConstructor = e, e;
		}
		return this.baseCstVisitorWithDefaultsConstructor;
	}
	getLastExplicitRuleShortName() {
		let e = this.RULE_STACK;
		return e[e.length - 1];
	}
	getPreviousExplicitRuleShortName() {
		let e = this.RULE_STACK;
		return e[e.length - 2];
	}
	getLastExplicitRuleOccurrenceIndex() {
		let e = this.RULE_OCCURRENCE_STACK;
		return e[e.length - 1];
	}
}, LexerAdapter = class {
	initLexerAdapter() {
		this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
	}
	set input(e) {
		if (this.selfAnalysisDone !== !0) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
		this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
	}
	get input() {
		return this.tokVector;
	}
	SKIP_TOKEN() {
		return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : END_OF_FILE;
	}
	LA(e) {
		let m = this.currIdx + e;
		return m < 0 || this.tokVectorLength <= m ? END_OF_FILE : this.tokVector[m];
	}
	consumeToken() {
		this.currIdx++;
	}
	exportLexerState() {
		return this.currIdx;
	}
	importLexerState(e) {
		this.currIdx = e;
	}
	resetLexerState() {
		this.currIdx = -1;
	}
	moveToTerminatedState() {
		this.currIdx = this.tokVector.length - 1;
	}
	getLexerPosition() {
		return this.exportLexerState();
	}
}, RecognizerApi = class {
	ACTION(e) {
		return e.call(this);
	}
	consume(e, m, h) {
		return this.consumeInternal(m, e, h);
	}
	subrule(e, m, h) {
		return this.subruleInternal(m, e, h);
	}
	option(e, m) {
		return this.optionInternal(m, e);
	}
	or(e, m) {
		return this.orInternal(m, e);
	}
	many(e, m) {
		return this.manyInternal(e, m);
	}
	atLeastOne(e, m) {
		return this.atLeastOneInternal(e, m);
	}
	CONSUME(e, m) {
		return this.consumeInternal(e, 0, m);
	}
	CONSUME1(e, m) {
		return this.consumeInternal(e, 1, m);
	}
	CONSUME2(e, m) {
		return this.consumeInternal(e, 2, m);
	}
	CONSUME3(e, m) {
		return this.consumeInternal(e, 3, m);
	}
	CONSUME4(e, m) {
		return this.consumeInternal(e, 4, m);
	}
	CONSUME5(e, m) {
		return this.consumeInternal(e, 5, m);
	}
	CONSUME6(e, m) {
		return this.consumeInternal(e, 6, m);
	}
	CONSUME7(e, m) {
		return this.consumeInternal(e, 7, m);
	}
	CONSUME8(e, m) {
		return this.consumeInternal(e, 8, m);
	}
	CONSUME9(e, m) {
		return this.consumeInternal(e, 9, m);
	}
	SUBRULE(e, m) {
		return this.subruleInternal(e, 0, m);
	}
	SUBRULE1(e, m) {
		return this.subruleInternal(e, 1, m);
	}
	SUBRULE2(e, m) {
		return this.subruleInternal(e, 2, m);
	}
	SUBRULE3(e, m) {
		return this.subruleInternal(e, 3, m);
	}
	SUBRULE4(e, m) {
		return this.subruleInternal(e, 4, m);
	}
	SUBRULE5(e, m) {
		return this.subruleInternal(e, 5, m);
	}
	SUBRULE6(e, m) {
		return this.subruleInternal(e, 6, m);
	}
	SUBRULE7(e, m) {
		return this.subruleInternal(e, 7, m);
	}
	SUBRULE8(e, m) {
		return this.subruleInternal(e, 8, m);
	}
	SUBRULE9(e, m) {
		return this.subruleInternal(e, 9, m);
	}
	OPTION(e) {
		return this.optionInternal(e, 0);
	}
	OPTION1(e) {
		return this.optionInternal(e, 1);
	}
	OPTION2(e) {
		return this.optionInternal(e, 2);
	}
	OPTION3(e) {
		return this.optionInternal(e, 3);
	}
	OPTION4(e) {
		return this.optionInternal(e, 4);
	}
	OPTION5(e) {
		return this.optionInternal(e, 5);
	}
	OPTION6(e) {
		return this.optionInternal(e, 6);
	}
	OPTION7(e) {
		return this.optionInternal(e, 7);
	}
	OPTION8(e) {
		return this.optionInternal(e, 8);
	}
	OPTION9(e) {
		return this.optionInternal(e, 9);
	}
	OR(e) {
		return this.orInternal(e, 0);
	}
	OR1(e) {
		return this.orInternal(e, 1);
	}
	OR2(e) {
		return this.orInternal(e, 2);
	}
	OR3(e) {
		return this.orInternal(e, 3);
	}
	OR4(e) {
		return this.orInternal(e, 4);
	}
	OR5(e) {
		return this.orInternal(e, 5);
	}
	OR6(e) {
		return this.orInternal(e, 6);
	}
	OR7(e) {
		return this.orInternal(e, 7);
	}
	OR8(e) {
		return this.orInternal(e, 8);
	}
	OR9(e) {
		return this.orInternal(e, 9);
	}
	MANY(e) {
		this.manyInternal(0, e);
	}
	MANY1(e) {
		this.manyInternal(1, e);
	}
	MANY2(e) {
		this.manyInternal(2, e);
	}
	MANY3(e) {
		this.manyInternal(3, e);
	}
	MANY4(e) {
		this.manyInternal(4, e);
	}
	MANY5(e) {
		this.manyInternal(5, e);
	}
	MANY6(e) {
		this.manyInternal(6, e);
	}
	MANY7(e) {
		this.manyInternal(7, e);
	}
	MANY8(e) {
		this.manyInternal(8, e);
	}
	MANY9(e) {
		this.manyInternal(9, e);
	}
	MANY_SEP(e) {
		this.manySepFirstInternal(0, e);
	}
	MANY_SEP1(e) {
		this.manySepFirstInternal(1, e);
	}
	MANY_SEP2(e) {
		this.manySepFirstInternal(2, e);
	}
	MANY_SEP3(e) {
		this.manySepFirstInternal(3, e);
	}
	MANY_SEP4(e) {
		this.manySepFirstInternal(4, e);
	}
	MANY_SEP5(e) {
		this.manySepFirstInternal(5, e);
	}
	MANY_SEP6(e) {
		this.manySepFirstInternal(6, e);
	}
	MANY_SEP7(e) {
		this.manySepFirstInternal(7, e);
	}
	MANY_SEP8(e) {
		this.manySepFirstInternal(8, e);
	}
	MANY_SEP9(e) {
		this.manySepFirstInternal(9, e);
	}
	AT_LEAST_ONE(e) {
		this.atLeastOneInternal(0, e);
	}
	AT_LEAST_ONE1(e) {
		return this.atLeastOneInternal(1, e);
	}
	AT_LEAST_ONE2(e) {
		this.atLeastOneInternal(2, e);
	}
	AT_LEAST_ONE3(e) {
		this.atLeastOneInternal(3, e);
	}
	AT_LEAST_ONE4(e) {
		this.atLeastOneInternal(4, e);
	}
	AT_LEAST_ONE5(e) {
		this.atLeastOneInternal(5, e);
	}
	AT_LEAST_ONE6(e) {
		this.atLeastOneInternal(6, e);
	}
	AT_LEAST_ONE7(e) {
		this.atLeastOneInternal(7, e);
	}
	AT_LEAST_ONE8(e) {
		this.atLeastOneInternal(8, e);
	}
	AT_LEAST_ONE9(e) {
		this.atLeastOneInternal(9, e);
	}
	AT_LEAST_ONE_SEP(e) {
		this.atLeastOneSepFirstInternal(0, e);
	}
	AT_LEAST_ONE_SEP1(e) {
		this.atLeastOneSepFirstInternal(1, e);
	}
	AT_LEAST_ONE_SEP2(e) {
		this.atLeastOneSepFirstInternal(2, e);
	}
	AT_LEAST_ONE_SEP3(e) {
		this.atLeastOneSepFirstInternal(3, e);
	}
	AT_LEAST_ONE_SEP4(e) {
		this.atLeastOneSepFirstInternal(4, e);
	}
	AT_LEAST_ONE_SEP5(e) {
		this.atLeastOneSepFirstInternal(5, e);
	}
	AT_LEAST_ONE_SEP6(e) {
		this.atLeastOneSepFirstInternal(6, e);
	}
	AT_LEAST_ONE_SEP7(e) {
		this.atLeastOneSepFirstInternal(7, e);
	}
	AT_LEAST_ONE_SEP8(e) {
		this.atLeastOneSepFirstInternal(8, e);
	}
	AT_LEAST_ONE_SEP9(e) {
		this.atLeastOneSepFirstInternal(9, e);
	}
	RULE(e, m, h = DEFAULT_RULE_CONFIG) {
		if (includes_default(this.definedRulesNames, e)) {
			let m = {
				message: defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
					topLevelRule: e,
					grammarName: this.className
				}),
				type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
				ruleName: e
			};
			this.definitionErrors.push(m);
		}
		this.definedRulesNames.push(e);
		let g = this.defineRule(e, m, h);
		return this[e] = g, g;
	}
	OVERRIDE_RULE(e, m, h = DEFAULT_RULE_CONFIG) {
		let g = validateRuleIsOverridden(e, this.definedRulesNames, this.className);
		this.definitionErrors = this.definitionErrors.concat(g);
		let _ = this.defineRule(e, m, h);
		return this[e] = _, _;
	}
	BACKTRACK(e, m) {
		return function() {
			this.isBackTrackingStack.push(1);
			let h = this.saveRecogState();
			try {
				return e.apply(this, m), !0;
			} catch (e) {
				if (isRecognitionException(e)) return !1;
				throw e;
			} finally {
				this.reloadRecogState(h), this.isBackTrackingStack.pop();
			}
		};
	}
	getGAstProductions() {
		return this.gastProductionsCache;
	}
	getSerializedGastProductions() {
		return serializeGrammar(values_default(this.gastProductionsCache));
	}
}, RecognizerEngine = class {
	initRecognizerEngine(e, m) {
		if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = tokenStructuredMatcherNoCategories, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, has_default(m, "serializedGrammar")) throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
		if (isArray_default(e)) {
			if (isEmpty_default(e)) throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
			if (typeof e[0].startOffset == "number") throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
		}
		if (isArray_default(e)) this.tokensMap = reduce_default(e, (e, m) => (e[m.name] = m, e), {});
		else if (has_default(e, "modes") && every_default(flatten_default(values_default(e.modes)), isTokenType)) this.tokensMap = reduce_default(uniq_default(flatten_default(values_default(e.modes))), (e, m) => (e[m.name] = m, e), {});
		else if (isObject_default(e)) this.tokensMap = clone_default(e);
		else throw Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
		this.tokensMap.EOF = EOF, this.tokenMatcher = every_default(has_default(e, "modes") ? flatten_default(values_default(e.modes)) : values_default(e), (e) => isEmpty_default(e.categoryMatches)) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher, augmentTokenTypes(values_default(this.tokensMap));
	}
	defineRule(e, m, h) {
		if (this.selfAnalysisDone) throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'\nMake sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
		let g = has_default(h, "resyncEnabled") ? h.resyncEnabled : DEFAULT_RULE_CONFIG.resyncEnabled, _ = has_default(h, "recoveryValueFunc") ? h.recoveryValueFunc : DEFAULT_RULE_CONFIG.recoveryValueFunc, v = this.ruleShortNameIdx << 12;
		this.ruleShortNameIdx++, this.shortRuleNameToFull[v] = e, this.fullRuleNameToShort[e] = v;
		let y;
		return y = this.outputCst === !0 ? function(...h) {
			try {
				this.ruleInvocationStateUpdate(v, e, this.subruleIdx), m.apply(this, h);
				let g = this.CST_STACK[this.CST_STACK.length - 1];
				return this.cstPostRule(g), g;
			} catch (e) {
				return this.invokeRuleCatch(e, g, _);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		} : function(...h) {
			try {
				return this.ruleInvocationStateUpdate(v, e, this.subruleIdx), m.apply(this, h);
			} catch (e) {
				return this.invokeRuleCatch(e, g, _);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		}, Object.assign(y, {
			ruleName: e,
			originalGrammarAction: m
		});
	}
	invokeRuleCatch(e, m, h) {
		let g = this.RULE_STACK.length === 1, _ = m && !this.isBackTracking() && this.recoveryEnabled;
		if (isRecognitionException(e)) {
			let m = e;
			if (_) {
				let g = this.findReSyncTokenType();
				if (this.isInCurrentRuleReSyncSet(g)) if (m.resyncedTokens = this.reSyncTo(g), this.outputCst) {
					let e = this.CST_STACK[this.CST_STACK.length - 1];
					return e.recoveredNode = !0, e;
				} else return h(e);
				else {
					if (this.outputCst) {
						let e = this.CST_STACK[this.CST_STACK.length - 1];
						e.recoveredNode = !0, m.partialCstResult = e;
					}
					throw m;
				}
			} else if (g) return this.moveToTerminatedState(), h(e);
			else throw m;
		} else throw e;
	}
	optionInternal(e, m) {
		let h = this.getKeyForAutomaticLookahead(512, m);
		return this.optionInternalLogic(e, m, h);
	}
	optionInternalLogic(e, m, h) {
		let g = this.getLaFuncFromCache(h), _;
		if (typeof e != "function") {
			_ = e.DEF;
			let m = e.GATE;
			if (m !== void 0) {
				let e = g;
				g = () => m.call(this) && e.call(this);
			}
		} else _ = e;
		if (g.call(this) === !0) return _.call(this);
	}
	atLeastOneInternal(e, m) {
		let h = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, e);
		return this.atLeastOneInternalLogic(e, m, h);
	}
	atLeastOneInternalLogic(e, m, h) {
		let g = this.getLaFuncFromCache(h), _;
		if (typeof m != "function") {
			_ = m.DEF;
			let e = m.GATE;
			if (e !== void 0) {
				let m = g;
				g = () => e.call(this) && m.call(this);
			}
		} else _ = m;
		if (g.call(this) === !0) {
			let e = this.doSingleRepetition(_);
			for (; g.call(this) === !0 && e === !0;) e = this.doSingleRepetition(_);
		} else throw this.raiseEarlyExitException(e, PROD_TYPE.REPETITION_MANDATORY, m.ERR_MSG);
		this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, m], g, AT_LEAST_ONE_IDX, e, NextTerminalAfterAtLeastOneWalker);
	}
	atLeastOneSepFirstInternal(e, m) {
		let h = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, e);
		this.atLeastOneSepFirstInternalLogic(e, m, h);
	}
	atLeastOneSepFirstInternalLogic(e, m, h) {
		let g = m.DEF, _ = m.SEP;
		if (this.getLaFuncFromCache(h).call(this) === !0) {
			g.call(this);
			let m = () => this.tokenMatcher(this.LA(1), _);
			for (; this.tokenMatcher(this.LA(1), _) === !0;) this.CONSUME(_), g.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e,
				_,
				m,
				g,
				NextTerminalAfterAtLeastOneSepWalker
			], m, AT_LEAST_ONE_SEP_IDX, e, NextTerminalAfterAtLeastOneSepWalker);
		} else throw this.raiseEarlyExitException(e, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, m.ERR_MSG);
	}
	manyInternal(e, m) {
		let h = this.getKeyForAutomaticLookahead(768, e);
		return this.manyInternalLogic(e, m, h);
	}
	manyInternalLogic(e, m, h) {
		let g = this.getLaFuncFromCache(h), _;
		if (typeof m != "function") {
			_ = m.DEF;
			let e = m.GATE;
			if (e !== void 0) {
				let m = g;
				g = () => e.call(this) && m.call(this);
			}
		} else _ = m;
		let v = !0;
		for (; g.call(this) === !0 && v === !0;) v = this.doSingleRepetition(_);
		this.attemptInRepetitionRecovery(this.manyInternal, [e, m], g, 768, e, NextTerminalAfterManyWalker, v);
	}
	manySepFirstInternal(e, m) {
		let h = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, e);
		this.manySepFirstInternalLogic(e, m, h);
	}
	manySepFirstInternalLogic(e, m, h) {
		let g = m.DEF, _ = m.SEP;
		if (this.getLaFuncFromCache(h).call(this) === !0) {
			g.call(this);
			let m = () => this.tokenMatcher(this.LA(1), _);
			for (; this.tokenMatcher(this.LA(1), _) === !0;) this.CONSUME(_), g.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e,
				_,
				m,
				g,
				NextTerminalAfterManySepWalker
			], m, MANY_SEP_IDX, e, NextTerminalAfterManySepWalker);
		}
	}
	repetitionSepSecondInternal(e, m, h, g, _) {
		for (; h();) this.CONSUME(m), g.call(this);
		/* istanbul ignore else */
		this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
			e,
			m,
			h,
			g,
			_
		], h, AT_LEAST_ONE_SEP_IDX, e, _);
	}
	doSingleRepetition(e) {
		let m = this.getLexerPosition();
		return e.call(this), this.getLexerPosition() > m;
	}
	orInternal(e, m) {
		let h = this.getKeyForAutomaticLookahead(256, m), g = isArray_default(e) ? e : e.DEF, _ = this.getLaFuncFromCache(h).call(this, g);
		if (_ !== void 0) return g[_].ALT.call(this);
		this.raiseNoAltException(m, e.ERR_MSG);
	}
	ruleFinallyStateUpdate() {
		if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
			let e = this.LA(1), m = this.errorMessageProvider.buildNotAllInputParsedMessage({
				firstRedundant: e,
				ruleName: this.getCurrRuleFullName()
			});
			this.SAVE_ERROR(new NotAllInputParsedException(m, e));
		}
	}
	subruleInternal(e, m, h) {
		let g;
		try {
			let _ = h === void 0 ? void 0 : h.ARGS;
			return this.subruleIdx = m, g = e.apply(this, _), this.cstPostNonTerminal(g, h !== void 0 && h.LABEL !== void 0 ? h.LABEL : e.ruleName), g;
		} catch (m) {
			throw this.subruleInternalError(m, h, e.ruleName);
		}
	}
	subruleInternalError(e, m, h) {
		throw isRecognitionException(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, m !== void 0 && m.LABEL !== void 0 ? m.LABEL : h), delete e.partialCstResult), e;
	}
	consumeInternal(e, m, h) {
		let g;
		try {
			let m = this.LA(1);
			this.tokenMatcher(m, e) === !0 ? (this.consumeToken(), g = m) : this.consumeInternalError(e, m, h);
		} catch (h) {
			g = this.consumeInternalRecovery(e, m, h);
		}
		return this.cstPostTerminal(h !== void 0 && h.LABEL !== void 0 ? h.LABEL : e.name, g), g;
	}
	consumeInternalError(e, m, h) {
		let g, _ = this.LA(0);
		throw g = h !== void 0 && h.ERR_MSG ? h.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({
			expected: e,
			actual: m,
			previous: _,
			ruleName: this.getCurrRuleFullName()
		}), this.SAVE_ERROR(new MismatchedTokenException(g, m, _));
	}
	consumeInternalRecovery(e, m, h) {
		if (this.recoveryEnabled && h.name === "MismatchedTokenException" && !this.isBackTracking()) {
			let g = this.getFollowsForInRuleRecovery(e, m);
			try {
				return this.tryInRuleRecovery(e, g);
			} catch (e) {
				throw e.name === "InRuleRecoveryException" ? h : e;
			}
		} else throw h;
	}
	saveRecogState() {
		let e = this.errors, m = clone_default(this.RULE_STACK);
		return {
			errors: e,
			lexerState: this.exportLexerState(),
			RULE_STACK: m,
			CST_STACK: this.CST_STACK
		};
	}
	reloadRecogState(e) {
		this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
	}
	ruleInvocationStateUpdate(e, m, h) {
		this.RULE_OCCURRENCE_STACK.push(h), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(m);
	}
	isBackTracking() {
		return this.isBackTrackingStack.length !== 0;
	}
	getCurrRuleFullName() {
		let e = this.getLastExplicitRuleShortName();
		return this.shortRuleNameToFull[e];
	}
	shortRuleNameToFullName(e) {
		return this.shortRuleNameToFull[e];
	}
	isAtEndOfInput() {
		return this.tokenMatcher(this.LA(1), EOF);
	}
	reset() {
		this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
	}
}, ErrorHandler = class {
	initErrorHandler(e) {
		this._errors = [], this.errorMessageProvider = has_default(e, "errorMessageProvider") ? e.errorMessageProvider : DEFAULT_PARSER_CONFIG.errorMessageProvider;
	}
	SAVE_ERROR(e) {
		if (isRecognitionException(e)) return e.context = {
			ruleStack: this.getHumanReadableRuleStack(),
			ruleOccurrenceStack: clone_default(this.RULE_OCCURRENCE_STACK)
		}, this._errors.push(e), e;
		throw Error("Trying to save an Error which is not a RecognitionException");
	}
	get errors() {
		return clone_default(this._errors);
	}
	set errors(e) {
		this._errors = e;
	}
	raiseEarlyExitException(e, m, h) {
		let g = this.getCurrRuleFullName(), _ = this.getGAstProductions()[g], v = getLookaheadPathsForOptionalProd(e, _, m, this.maxLookahead)[0], y = [];
		for (let e = 1; e <= this.maxLookahead; e++) y.push(this.LA(e));
		let b = this.errorMessageProvider.buildEarlyExitMessage({
			expectedIterationPaths: v,
			actual: y,
			previous: this.LA(0),
			customUserDescription: h,
			ruleName: g
		});
		throw this.SAVE_ERROR(new EarlyExitException(b, this.LA(1), this.LA(0)));
	}
	raiseNoAltException(e, m) {
		let h = this.getCurrRuleFullName(), g = this.getGAstProductions()[h], _ = getLookaheadPathsForOr(e, g, this.maxLookahead), v = [];
		for (let e = 1; e <= this.maxLookahead; e++) v.push(this.LA(e));
		let y = this.LA(0), b = this.errorMessageProvider.buildNoViableAltMessage({
			expectedPathsPerAlt: _,
			actual: v,
			previous: y,
			customUserDescription: m,
			ruleName: this.getCurrRuleFullName()
		});
		throw this.SAVE_ERROR(new NoViableAltException(b, this.LA(1), y));
	}
}, ContentAssist = class {
	initContentAssist() {}
	computeContentAssist(e, m) {
		let h = this.gastProductionsCache[e];
		if (isUndefined_default(h)) throw Error(`Rule ->${e}<- does not exist in this grammar.`);
		return nextPossibleTokensAfter([h], m, this.tokenMatcher, this.maxLookahead);
	}
	getNextPossibleTokenTypes(e) {
		let m = head_default(e.ruleStack), h = this.getGAstProductions()[m];
		return new NextAfterTokenWalker(h, e).startWalking();
	}
}, RECORDING_NULL_OBJECT = { description: "This Object indicates the Parser is during Recording Phase" };
Object.freeze(RECORDING_NULL_OBJECT);
var HANDLE_SEPARATOR = !0, MAX_METHOD_IDX = 2 ** 8 - 1, RFT = createToken({
	name: "RECORDING_PHASE_TOKEN",
	pattern: Lexer.NA
});
augmentTokenTypes([RFT]);
var RECORDING_PHASE_TOKEN = createTokenInstance(RFT, "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", -1, -1, -1, -1, -1, -1);
Object.freeze(RECORDING_PHASE_TOKEN);
var RECORDING_PHASE_CSTNODE = {
	name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
	children: {}
}, GastRecorder = class {
	initGastRecorder(e) {
		this.recordingProdStack = [], this.RECORDING_PHASE = !1;
	}
	enableRecording() {
		this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
			for (let e = 0; e < 10; e++) {
				let m = e > 0 ? e : "";
				this[`CONSUME${m}`] = function(m, h) {
					return this.consumeInternalRecord(m, e, h);
				}, this[`SUBRULE${m}`] = function(m, h) {
					return this.subruleInternalRecord(m, e, h);
				}, this[`OPTION${m}`] = function(m) {
					return this.optionInternalRecord(m, e);
				}, this[`OR${m}`] = function(m) {
					return this.orInternalRecord(m, e);
				}, this[`MANY${m}`] = function(m) {
					this.manyInternalRecord(e, m);
				}, this[`MANY_SEP${m}`] = function(m) {
					this.manySepFirstInternalRecord(e, m);
				}, this[`AT_LEAST_ONE${m}`] = function(m) {
					this.atLeastOneInternalRecord(e, m);
				}, this[`AT_LEAST_ONE_SEP${m}`] = function(m) {
					this.atLeastOneSepFirstInternalRecord(e, m);
				};
			}
			this.consume = function(e, m, h) {
				return this.consumeInternalRecord(m, e, h);
			}, this.subrule = function(e, m, h) {
				return this.subruleInternalRecord(m, e, h);
			}, this.option = function(e, m) {
				return this.optionInternalRecord(m, e);
			}, this.or = function(e, m) {
				return this.orInternalRecord(m, e);
			}, this.many = function(e, m) {
				this.manyInternalRecord(e, m);
			}, this.atLeastOne = function(e, m) {
				this.atLeastOneInternalRecord(e, m);
			}, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
		});
	}
	disableRecording() {
		this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
			let e = this;
			for (let m = 0; m < 10; m++) {
				let h = m > 0 ? m : "";
				delete e[`CONSUME${h}`], delete e[`SUBRULE${h}`], delete e[`OPTION${h}`], delete e[`OR${h}`], delete e[`MANY${h}`], delete e[`MANY_SEP${h}`], delete e[`AT_LEAST_ONE${h}`], delete e[`AT_LEAST_ONE_SEP${h}`];
			}
			delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
		});
	}
	ACTION_RECORD(e) {}
	BACKTRACK_RECORD(e, m) {
		return () => !0;
	}
	LA_RECORD(e) {
		return END_OF_FILE;
	}
	topLevelRuleRecord(e, m) {
		try {
			let h = new Rule({
				definition: [],
				name: e
			});
			return h.name = e, this.recordingProdStack.push(h), m.call(this), this.recordingProdStack.pop(), h;
		} catch (e) {
			if (e.KNOWN_RECORDER_ERROR !== !0) try {
				e.message += "\n	 This error was thrown during the \"grammar recording phase\" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording";
			} catch {
				throw e;
			}
			throw e;
		}
	}
	optionInternalRecord(e, m) {
		return recordProd.call(this, Option$1, e, m);
	}
	atLeastOneInternalRecord(e, m) {
		recordProd.call(this, RepetitionMandatory, m, e);
	}
	atLeastOneSepFirstInternalRecord(e, m) {
		recordProd.call(this, RepetitionMandatoryWithSeparator, m, e, HANDLE_SEPARATOR);
	}
	manyInternalRecord(e, m) {
		recordProd.call(this, Repetition, m, e);
	}
	manySepFirstInternalRecord(e, m) {
		recordProd.call(this, RepetitionWithSeparator, m, e, HANDLE_SEPARATOR);
	}
	orInternalRecord(e, m) {
		return recordOrProd.call(this, e, m);
	}
	subruleInternalRecord(e, m, h) {
		if (assertMethodIdxIsValid(m), !e || has_default(e, "ruleName") === !1) {
			let h = /* @__PURE__ */ Error(`<SUBRULE${getIdxSuffix(m)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>\n inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw h.KNOWN_RECORDER_ERROR = !0, h;
		}
		let g = last_default(this.recordingProdStack), _ = e.ruleName, v = new NonTerminal({
			idx: m,
			nonTerminalName: _,
			label: h?.LABEL,
			referencedRule: void 0
		});
		return g.definition.push(v), this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
	}
	consumeInternalRecord(e, m, h) {
		if (assertMethodIdxIsValid(m), !hasShortKeyProperty(e)) {
			let h = /* @__PURE__ */ Error(`<CONSUME${getIdxSuffix(m)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>\n inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw h.KNOWN_RECORDER_ERROR = !0, h;
		}
		let g = last_default(this.recordingProdStack), _ = new Terminal({
			idx: m,
			terminalType: e,
			label: h?.LABEL
		});
		return g.definition.push(_), RECORDING_PHASE_TOKEN;
	}
};
function recordProd(e, m, h, g = !1) {
	assertMethodIdxIsValid(h);
	let _ = last_default(this.recordingProdStack), v = isFunction_default(m) ? m : m.DEF, y = new e({
		definition: [],
		idx: h
	});
	return g && (y.separator = m.SEP), has_default(m, "MAX_LOOKAHEAD") && (y.maxLookahead = m.MAX_LOOKAHEAD), this.recordingProdStack.push(y), v.call(this), _.definition.push(y), this.recordingProdStack.pop(), RECORDING_NULL_OBJECT;
}
function recordOrProd(e, m) {
	assertMethodIdxIsValid(m);
	let h = last_default(this.recordingProdStack), g = isArray_default(e) === !1, _ = g === !1 ? e : e.DEF, v = new Alternation({
		definition: [],
		idx: m,
		ignoreAmbiguities: g && e.IGNORE_AMBIGUITIES === !0
	});
	return has_default(e, "MAX_LOOKAHEAD") && (v.maxLookahead = e.MAX_LOOKAHEAD), v.hasPredicates = some_default(_, (e) => isFunction_default(e.GATE)), h.definition.push(v), forEach_default(_, (e) => {
		let m = new Alternative({ definition: [] });
		v.definition.push(m), has_default(e, "IGNORE_AMBIGUITIES") ? m.ignoreAmbiguities = e.IGNORE_AMBIGUITIES : has_default(e, "GATE") && (m.ignoreAmbiguities = !0), this.recordingProdStack.push(m), e.ALT.call(this), this.recordingProdStack.pop();
	}), RECORDING_NULL_OBJECT;
}
function getIdxSuffix(e) {
	return e === 0 ? "" : `${e}`;
}
function assertMethodIdxIsValid(e) {
	if (e < 0 || e > MAX_METHOD_IDX) {
		let m = /* @__PURE__ */ Error(`Invalid DSL Method idx value: <${e}>\n\tIdx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`);
		throw m.KNOWN_RECORDER_ERROR = !0, m;
	}
}
var PerformanceTracer = class {
	initPerformanceTracer(e) {
		if (has_default(e, "traceInitPerf")) {
			let m = e.traceInitPerf, h = typeof m == "number";
			this.traceInitMaxIdent = h ? m : Infinity, this.traceInitPerf = h ? m > 0 : m;
		} else this.traceInitMaxIdent = 0, this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
		this.traceInitIndent = -1;
	}
	TRACE_INIT(e, m) {
		if (this.traceInitPerf === !0) {
			this.traceInitIndent++;
			let h = Array(this.traceInitIndent + 1).join("	");
			this.traceInitIndent < this.traceInitMaxIdent && console.log(`${h}--> <${e}>`);
			let { time: g, value: _ } = timer(m), v = g > 10 ? console.warn : console.log;
			return this.traceInitIndent < this.traceInitMaxIdent && v(`${h}<-- <${e}> time: ${g}ms`), this.traceInitIndent--, _;
		} else return m();
	}
};
function applyMixins(e, m) {
	m.forEach((m) => {
		let h = m.prototype;
		Object.getOwnPropertyNames(h).forEach((g) => {
			if (g === "constructor") return;
			let _ = Object.getOwnPropertyDescriptor(h, g);
			_ && (_.get || _.set) ? Object.defineProperty(e.prototype, g, _) : e.prototype[g] = m.prototype[g];
		});
	});
}
const END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
const DEFAULT_PARSER_CONFIG = Object.freeze({
	recoveryEnabled: !1,
	maxLookahead: 3,
	dynamicTokensEnabled: !1,
	outputCst: !0,
	errorMessageProvider: defaultParserErrorProvider,
	nodeLocationTracking: "none",
	traceInitPerf: !1,
	skipValidations: !1
}), DEFAULT_RULE_CONFIG = Object.freeze({
	recoveryValueFunc: () => void 0,
	resyncEnabled: !0
});
var ParserDefinitionErrorType;
(function(e) {
	e[e.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", e[e.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", e[e.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", e[e.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", e[e.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", e[e.LEFT_RECURSION = 5] = "LEFT_RECURSION", e[e.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", e[e.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", e[e.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", e[e.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", e[e.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", e[e.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", e[e.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", e[e.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType ||= {});
function EMPTY_ALT(e = void 0) {
	return function() {
		return e;
	};
}
var Parser = class e {
	static performSelfAnalysis(e) {
		throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
	}
	performSelfAnalysis() {
		this.TRACE_INIT("performSelfAnalysis", () => {
			let m;
			this.selfAnalysisDone = !0;
			let h = this.className;
			this.TRACE_INIT("toFastProps", () => {
				toFastProperties(this);
			}), this.TRACE_INIT("Grammar Recording", () => {
				try {
					this.enableRecording(), forEach_default(this.definedRulesNames, (e) => {
						let m = this[e].originalGrammarAction, h;
						this.TRACE_INIT(`${e} Rule`, () => {
							h = this.topLevelRuleRecord(e, m);
						}), this.gastProductionsCache[e] = h;
					});
				} finally {
					this.disableRecording();
				}
			});
			let g = [];
			if (this.TRACE_INIT("Grammar Resolving", () => {
				g = resolveGrammar({ rules: values_default(this.gastProductionsCache) }), this.definitionErrors = this.definitionErrors.concat(g);
			}), this.TRACE_INIT("Grammar Validations", () => {
				if (isEmpty_default(g) && this.skipValidations === !1) {
					let e = validateGrammar({
						rules: values_default(this.gastProductionsCache),
						tokenTypes: values_default(this.tokensMap),
						errMsgProvider: defaultGrammarValidatorErrorProvider,
						grammarName: h
					}), m = validateLookahead({
						lookaheadStrategy: this.lookaheadStrategy,
						rules: values_default(this.gastProductionsCache),
						tokenTypes: values_default(this.tokensMap),
						grammarName: h
					});
					this.definitionErrors = this.definitionErrors.concat(e, m);
				}
			}), isEmpty_default(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
				this.resyncFollows = computeAllProdsFollows(values_default(this.gastProductionsCache));
			}), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
				var e, m;
				(m = (e = this.lookaheadStrategy).initialize) == null || m.call(e, { rules: values_default(this.gastProductionsCache) }), this.preComputeLookaheadFunctions(values_default(this.gastProductionsCache));
			})), !e.DEFER_DEFINITION_ERRORS_HANDLING && !isEmpty_default(this.definitionErrors)) throw m = map_default(this.definitionErrors, (e) => e.message), Error(`Parser Definition Errors detected:\n ${m.join("\n-------------------------------\n")}`);
		});
	}
	constructor(e, m) {
		this.definitionErrors = [], this.selfAnalysisDone = !1;
		let h = this;
		if (h.initErrorHandler(m), h.initLexerAdapter(), h.initLooksAhead(m), h.initRecognizerEngine(e, m), h.initRecoverable(m), h.initTreeBuilder(m), h.initContentAssist(), h.initGastRecorder(m), h.initPerformanceTracer(m), has_default(m, "ignoredIssues")) throw Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
		this.skipValidations = has_default(m, "skipValidations") ? m.skipValidations : DEFAULT_PARSER_CONFIG.skipValidations;
	}
};
Parser.DEFER_DEFINITION_ERRORS_HANDLING = !1, applyMixins(Parser, [
	Recoverable,
	LooksAhead,
	TreeBuilder,
	LexerAdapter,
	RecognizerEngine,
	RecognizerApi,
	ErrorHandler,
	ContentAssist,
	GastRecorder,
	PerformanceTracer
]);
var EmbeddedActionsParser = class extends Parser {
	constructor(e, m = DEFAULT_PARSER_CONFIG) {
		let h = clone_default(m);
		h.outputCst = !1, super(e, h);
	}
};
function buildATNKey(e, m, h) {
	return `${e.name}_${m}_${h}`;
}
var AbstractTransition = class {
	constructor(e) {
		this.target = e;
	}
	isEpsilon() {
		return !1;
	}
}, AtomTransition = class extends AbstractTransition {
	constructor(e, m) {
		super(e), this.tokenType = m;
	}
}, EpsilonTransition = class extends AbstractTransition {
	constructor(e) {
		super(e);
	}
	isEpsilon() {
		return !0;
	}
}, RuleTransition = class extends AbstractTransition {
	constructor(e, m, h) {
		super(e), this.rule = m, this.followState = h;
	}
	isEpsilon() {
		return !0;
	}
};
function createATN(e) {
	let m = {
		decisionMap: {},
		decisionStates: [],
		ruleToStartState: /* @__PURE__ */ new Map(),
		ruleToStopState: /* @__PURE__ */ new Map(),
		states: []
	};
	createRuleStartAndStopATNStates(m, e);
	let h = e.length;
	for (let g = 0; g < h; g++) {
		let h = e[g], _ = block(m, h, h);
		_ !== void 0 && buildRuleHandle(m, h, _);
	}
	return m;
}
function createRuleStartAndStopATNStates(e, m) {
	let h = m.length;
	for (let g = 0; g < h; g++) {
		let h = m[g], _ = newState(e, h, void 0, { type: 2 }), v = newState(e, h, void 0, { type: 7 });
		_.stop = v, e.ruleToStartState.set(h, _), e.ruleToStopState.set(h, v);
	}
}
function atom(e, m, h) {
	return h instanceof Terminal ? tokenRef(e, m, h.terminalType, h) : h instanceof NonTerminal ? ruleRef(e, m, h) : h instanceof Alternation ? alternation(e, m, h) : h instanceof Option$1 ? option(e, m, h) : h instanceof Repetition ? repetition(e, m, h) : h instanceof RepetitionWithSeparator ? repetitionSep(e, m, h) : h instanceof RepetitionMandatory ? repetitionMandatory(e, m, h) : h instanceof RepetitionMandatoryWithSeparator ? repetitionMandatorySep(e, m, h) : block(e, m, h);
}
function repetition(e, m, h) {
	let g = newState(e, m, h, { type: 5 });
	return defineDecisionState(e, g), star(e, m, h, makeAlts(e, m, g, h, block(e, m, h)));
}
function repetitionSep(e, m, h) {
	let g = newState(e, m, h, { type: 5 });
	return defineDecisionState(e, g), star(e, m, h, makeAlts(e, m, g, h, block(e, m, h)), tokenRef(e, m, h.separator, h));
}
function repetitionMandatory(e, m, h) {
	let g = newState(e, m, h, { type: 4 });
	return defineDecisionState(e, g), plus(e, m, h, makeAlts(e, m, g, h, block(e, m, h)));
}
function repetitionMandatorySep(e, m, h) {
	let g = newState(e, m, h, { type: 4 });
	return defineDecisionState(e, g), plus(e, m, h, makeAlts(e, m, g, h, block(e, m, h)), tokenRef(e, m, h.separator, h));
}
function alternation(e, m, h) {
	let g = newState(e, m, h, { type: 1 });
	return defineDecisionState(e, g), makeAlts(e, m, g, h, ...map_default(h.definition, (h) => atom(e, m, h)));
}
function option(e, m, h) {
	let g = newState(e, m, h, { type: 1 });
	return defineDecisionState(e, g), optional(e, m, h, makeAlts(e, m, g, h, block(e, m, h)));
}
function block(e, m, h) {
	let g = filter_default(map_default(h.definition, (h) => atom(e, m, h)), (e) => e !== void 0);
	return g.length === 1 ? g[0] : g.length === 0 ? void 0 : makeBlock(e, g);
}
function plus(e, m, h, g, _) {
	let v = g.left, y = g.right, b = newState(e, m, h, { type: 11 });
	defineDecisionState(e, b);
	let x = newState(e, m, h, { type: 12 });
	return v.loopback = b, x.loopback = b, e.decisionMap[buildATNKey(m, _ ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", h.idx)] = b, epsilon(y, b), _ === void 0 ? (epsilon(b, v), epsilon(b, x)) : (epsilon(b, x), epsilon(b, _.left), epsilon(_.right, v)), {
		left: v,
		right: x
	};
}
function star(e, m, h, g, _) {
	let v = g.left, y = g.right, b = newState(e, m, h, { type: 10 });
	defineDecisionState(e, b);
	let x = newState(e, m, h, { type: 12 }), S = newState(e, m, h, { type: 9 });
	return b.loopback = S, x.loopback = S, epsilon(b, v), epsilon(b, x), epsilon(y, S), _ === void 0 ? epsilon(S, b) : (epsilon(S, x), epsilon(S, _.left), epsilon(_.right, v)), e.decisionMap[buildATNKey(m, _ ? "RepetitionWithSeparator" : "Repetition", h.idx)] = b, {
		left: b,
		right: x
	};
}
function optional(e, m, h, g) {
	let _ = g.left, v = g.right;
	return epsilon(_, v), e.decisionMap[buildATNKey(m, "Option", h.idx)] = _, g;
}
function defineDecisionState(e, m) {
	return e.decisionStates.push(m), m.decision = e.decisionStates.length - 1, m.decision;
}
function makeAlts(e, m, h, g, ..._) {
	let v = newState(e, m, g, {
		type: 8,
		start: h
	});
	h.end = v;
	for (let e of _) e === void 0 ? epsilon(h, v) : (epsilon(h, e.left), epsilon(e.right, v));
	let y = {
		left: h,
		right: v
	};
	return e.decisionMap[buildATNKey(m, getProdType(g), g.idx)] = h, y;
}
function getProdType(e) {
	if (e instanceof Alternation) return "Alternation";
	if (e instanceof Option$1) return "Option";
	if (e instanceof Repetition) return "Repetition";
	if (e instanceof RepetitionWithSeparator) return "RepetitionWithSeparator";
	if (e instanceof RepetitionMandatory) return "RepetitionMandatory";
	if (e instanceof RepetitionMandatoryWithSeparator) return "RepetitionMandatoryWithSeparator";
	throw Error("Invalid production type encountered");
}
function makeBlock(e, m) {
	let h = m.length;
	for (let g = 0; g < h - 1; g++) {
		let h = m[g], _;
		h.left.transitions.length === 1 && (_ = h.left.transitions[0]);
		let v = _ instanceof RuleTransition, y = _, b = m[g + 1].left;
		h.left.type === 1 && h.right.type === 1 && _ !== void 0 && (v && y.followState === h.right || _.target === h.right) ? (v ? y.followState = b : _.target = b, removeState(e, h.right)) : epsilon(h.right, b);
	}
	let g = m[0], _ = m[h - 1];
	return {
		left: g.left,
		right: _.right
	};
}
function tokenRef(e, m, h, g) {
	let _ = newState(e, m, g, { type: 1 }), v = newState(e, m, g, { type: 1 });
	return addTransition(_, new AtomTransition(v, h)), {
		left: _,
		right: v
	};
}
function ruleRef(e, m, h) {
	let g = h.referencedRule, _ = e.ruleToStartState.get(g), v = newState(e, m, h, { type: 1 }), y = newState(e, m, h, { type: 1 });
	return addTransition(v, new RuleTransition(_, g, y)), {
		left: v,
		right: y
	};
}
function buildRuleHandle(e, m, h) {
	let g = e.ruleToStartState.get(m);
	epsilon(g, h.left);
	let _ = e.ruleToStopState.get(m);
	return epsilon(h.right, _), {
		left: g,
		right: _
	};
}
function epsilon(e, m) {
	addTransition(e, new EpsilonTransition(m));
}
function newState(e, m, h, g) {
	let _ = Object.assign({
		atn: e,
		production: h,
		epsilonOnlyTransitions: !1,
		rule: m,
		transitions: [],
		nextTokenWithinRule: [],
		stateNumber: e.states.length
	}, g);
	return e.states.push(_), _;
}
function addTransition(e, m) {
	e.transitions.length === 0 && (e.epsilonOnlyTransitions = m.isEpsilon()), e.transitions.push(m);
}
function removeState(e, m) {
	e.states.splice(e.states.indexOf(m), 1);
}
const DFA_ERROR = {};
var ATNConfigSet = class {
	constructor() {
		this.map = {}, this.configs = [];
	}
	get size() {
		return this.configs.length;
	}
	finalize() {
		this.map = {};
	}
	add(e) {
		let m = getATNConfigKey(e);
		m in this.map || (this.map[m] = this.configs.length, this.configs.push(e));
	}
	get elements() {
		return this.configs;
	}
	get alts() {
		return map_default(this.configs, (e) => e.alt);
	}
	get key() {
		let e = "";
		for (let m in this.map) e += m + ":";
		return e;
	}
};
function getATNConfigKey(e, m = !0) {
	return `${m ? `a${e.alt}` : ""}s${e.state.stateNumber}:${e.stack.map((e) => e.stateNumber.toString()).join("_")}`;
}
function createDFACache(e, m) {
	let h = {};
	return (g) => {
		let _ = g.toString(), v = h[_];
		return v === void 0 ? (v = {
			atnStartState: e,
			decision: m,
			states: {}
		}, h[_] = v, v) : v;
	};
}
var PredicateSet = class {
	constructor() {
		this.predicates = [];
	}
	is(e) {
		return e >= this.predicates.length || this.predicates[e];
	}
	set(e, m) {
		this.predicates[e] = m;
	}
	toString() {
		let e = "", m = this.predicates.length;
		for (let h = 0; h < m; h++) e += this.predicates[h] === !0 ? "1" : "0";
		return e;
	}
}, EMPTY_PREDICATES = new PredicateSet(), LLStarLookaheadStrategy = class extends LLkLookaheadStrategy {
	constructor(e) {
		super(), this.logging = e?.logging ?? ((e) => console.log(e));
	}
	initialize(e) {
		this.atn = createATN(e.rules), this.dfas = initATNSimulator(this.atn);
	}
	validateAmbiguousAlternationAlternatives() {
		return [];
	}
	validateEmptyOrAlternatives() {
		return [];
	}
	buildLookaheadForAlternation(e) {
		let { prodOccurrence: m, rule: h, hasPredicates: g, dynamicTokensEnabled: _ } = e, v = this.dfas, y = this.logging, b = buildATNKey(h, "Alternation", m), x = this.atn.decisionMap[b].decision, S = map_default(getLookaheadPaths({
			maxLookahead: 1,
			occurrence: m,
			prodType: "Alternation",
			rule: h
		}), (e) => map_default(e, (e) => e[0]));
		if (isLL1Sequence(S, !1) && !_) {
			let e = reduce_default(S, (e, m, h) => (forEach_default(m, (m) => {
				m && (e[m.tokenTypeIdx] = h, forEach_default(m.categoryMatches, (m) => {
					e[m] = h;
				}));
			}), e), {});
			return g ? function(m) {
				let h = e[this.LA(1).tokenTypeIdx];
				if (m !== void 0 && h !== void 0) {
					let e = m[h]?.GATE;
					if (e !== void 0 && e.call(this) === !1) return;
				}
				return h;
			} : function() {
				return e[this.LA(1).tokenTypeIdx];
			};
		} else if (g) return function(e) {
			let m = new PredicateSet(), h = e === void 0 ? 0 : e.length;
			for (let g = 0; g < h; g++) {
				let h = e?.[g].GATE;
				m.set(g, h === void 0 || h.call(this));
			}
			let g = adaptivePredict.call(this, v, x, m, y);
			return typeof g == "number" ? g : void 0;
		};
		else return function() {
			let e = adaptivePredict.call(this, v, x, EMPTY_PREDICATES, y);
			return typeof e == "number" ? e : void 0;
		};
	}
	buildLookaheadForOptional(e) {
		let { prodOccurrence: m, rule: h, prodType: g, dynamicTokensEnabled: _ } = e, v = this.dfas, y = this.logging, b = buildATNKey(h, g, m), x = this.atn.decisionMap[b].decision, S = map_default(getLookaheadPaths({
			maxLookahead: 1,
			occurrence: m,
			prodType: g,
			rule: h
		}), (e) => map_default(e, (e) => e[0]));
		if (isLL1Sequence(S) && S[0][0] && !_) {
			let e = S[0], m = flatten_default(e);
			if (m.length === 1 && isEmpty_default(m[0].categoryMatches)) {
				let e = m[0].tokenTypeIdx;
				return function() {
					return this.LA(1).tokenTypeIdx === e;
				};
			} else {
				let e = reduce_default(m, (e, m) => (m !== void 0 && (e[m.tokenTypeIdx] = !0, forEach_default(m.categoryMatches, (m) => {
					e[m] = !0;
				})), e), {});
				return function() {
					return e[this.LA(1).tokenTypeIdx] === !0;
				};
			}
		}
		return function() {
			let e = adaptivePredict.call(this, v, x, EMPTY_PREDICATES, y);
			return typeof e == "object" ? !1 : e === 0;
		};
	}
};
function isLL1Sequence(e, m = !0) {
	let h = /* @__PURE__ */ new Set();
	for (let g of e) {
		let e = /* @__PURE__ */ new Set();
		for (let _ of g) {
			if (_ === void 0) {
				if (m) break;
				return !1;
			}
			let g = [_.tokenTypeIdx].concat(_.categoryMatches);
			for (let m of g) if (h.has(m)) {
				if (!e.has(m)) return !1;
			} else h.add(m), e.add(m);
		}
	}
	return !0;
}
function initATNSimulator(e) {
	let m = e.decisionStates.length, h = Array(m);
	for (let g = 0; g < m; g++) h[g] = createDFACache(e.decisionStates[g], g);
	return h;
}
function adaptivePredict(e, m, h, g) {
	let _ = e[m](h), v = _.start;
	return v === void 0 && (v = addDFAState(_, newDFAState(computeStartState(_.atnStartState))), _.start = v), performLookahead.apply(this, [
		_,
		v,
		h,
		g
	]);
}
function performLookahead(e, m, h, g) {
	let _ = m, v = 1, y = [], b = this.LA(v++);
	for (;;) {
		let m = getExistingTargetState(_, b);
		if (m === void 0 && (m = computeLookaheadTarget.apply(this, [
			e,
			_,
			b,
			v,
			h,
			g
		])), m === DFA_ERROR) return buildAdaptivePredictError(y, _, b);
		if (m.isAcceptState === !0) return m.prediction;
		_ = m, y.push(b), b = this.LA(v++);
	}
}
function computeLookaheadTarget(e, m, h, g, _, v) {
	let y = computeReachSet(m.configs, h, _);
	if (y.size === 0) return addDFAEdge(e, m, h, DFA_ERROR), DFA_ERROR;
	let b = newDFAState(y), x = getUniqueAlt(y, _);
	if (x !== void 0) b.isAcceptState = !0, b.prediction = x, b.configs.uniqueAlt = x;
	else if (hasConflictTerminatingPrediction(y)) {
		let m = min_default(y.alts);
		b.isAcceptState = !0, b.prediction = m, b.configs.uniqueAlt = m, reportLookaheadAmbiguity.apply(this, [
			e,
			g,
			y.alts,
			v
		]);
	}
	return b = addDFAEdge(e, m, h, b), b;
}
function reportLookaheadAmbiguity(e, m, h, g) {
	let _ = [];
	for (let e = 1; e <= m; e++) _.push(this.LA(e).tokenType);
	let v = e.atnStartState, y = v.rule, b = v.production;
	g(buildAmbiguityError({
		topLevelRule: y,
		ambiguityIndices: h,
		production: b,
		prefixPath: _
	}));
}
function buildAmbiguityError(e) {
	let m = map_default(e.prefixPath, (e) => tokenLabel(e)).join(", "), h = e.production.idx === 0 ? "" : e.production.idx, g = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(", ")}> in <${getProductionDslName(e.production)}${h}> inside <${e.topLevelRule.name}> Rule,\n<${m}> may appears as a prefix path in all these alternatives.\n`;
	return g += "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.", g;
}
function getProductionDslName(e) {
	if (e instanceof NonTerminal) return "SUBRULE";
	if (e instanceof Option$1) return "OPTION";
	if (e instanceof Alternation) return "OR";
	if (e instanceof RepetitionMandatory) return "AT_LEAST_ONE";
	if (e instanceof RepetitionMandatoryWithSeparator) return "AT_LEAST_ONE_SEP";
	if (e instanceof RepetitionWithSeparator) return "MANY_SEP";
	if (e instanceof Repetition) return "MANY";
	if (e instanceof Terminal) return "CONSUME";
	throw Error("non exhaustive match");
}
function buildAdaptivePredictError(e, m, h) {
	return {
		actualToken: h,
		possibleTokenTypes: uniqBy_default(flatMap_default(m.configs.elements, (e) => e.state.transitions).filter((e) => e instanceof AtomTransition).map((e) => e.tokenType), (e) => e.tokenTypeIdx),
		tokenPath: e
	};
}
function getExistingTargetState(e, m) {
	return e.edges[m.tokenTypeIdx];
}
function computeReachSet(e, m, h) {
	let g = new ATNConfigSet(), _ = [];
	for (let v of e.elements) {
		if (h.is(v.alt) === !1) continue;
		if (v.state.type === 7) {
			_.push(v);
			continue;
		}
		let e = v.state.transitions.length;
		for (let h = 0; h < e; h++) {
			let e = v.state.transitions[h], _ = getReachableTarget(e, m);
			_ !== void 0 && g.add({
				state: _,
				alt: v.alt,
				stack: v.stack
			});
		}
	}
	let v;
	if (_.length === 0 && g.size === 1 && (v = g), v === void 0) {
		v = new ATNConfigSet();
		for (let e of g.elements) closure(e, v);
	}
	if (_.length > 0 && !hasConfigInRuleStopState(v)) for (let e of _) v.add(e);
	return v;
}
function getReachableTarget(e, m) {
	if (e instanceof AtomTransition && tokenMatcher(m, e.tokenType)) return e.target;
}
function getUniqueAlt(e, m) {
	let h;
	for (let g of e.elements) if (m.is(g.alt) === !0) {
		if (h === void 0) h = g.alt;
		else if (h !== g.alt) return;
	}
	return h;
}
function newDFAState(e) {
	return {
		configs: e,
		edges: {},
		isAcceptState: !1,
		prediction: -1
	};
}
function addDFAEdge(e, m, h, g) {
	return g = addDFAState(e, g), m.edges[h.tokenTypeIdx] = g, g;
}
function addDFAState(e, m) {
	if (m === DFA_ERROR) return m;
	let h = m.configs.key, g = e.states[h];
	return g === void 0 ? (m.configs.finalize(), e.states[h] = m, m) : g;
}
function computeStartState(e) {
	let m = new ATNConfigSet(), h = e.transitions.length;
	for (let g = 0; g < h; g++) closure({
		state: e.transitions[g].target,
		alt: g,
		stack: []
	}, m);
	return m;
}
function closure(e, m) {
	let h = e.state;
	if (h.type === 7) {
		if (e.stack.length > 0) {
			let h = [...e.stack];
			closure({
				state: h.pop(),
				alt: e.alt,
				stack: h
			}, m);
		} else m.add(e);
		return;
	}
	h.epsilonOnlyTransitions || m.add(e);
	let g = h.transitions.length;
	for (let _ = 0; _ < g; _++) {
		let g = h.transitions[_], v = getEpsilonTarget(e, g);
		v !== void 0 && closure(v, m);
	}
}
function getEpsilonTarget(e, m) {
	if (m instanceof EpsilonTransition) return {
		state: m.target,
		alt: e.alt,
		stack: e.stack
	};
	if (m instanceof RuleTransition) {
		let h = [...e.stack, m.followState];
		return {
			state: m.target,
			alt: e.alt,
			stack: h
		};
	}
}
function hasConfigInRuleStopState(e) {
	for (let m of e.elements) if (m.state.type === 7) return !0;
	return !1;
}
function allConfigsInRuleStopStates(e) {
	for (let m of e.elements) if (m.state.type !== 7) return !1;
	return !0;
}
function hasConflictTerminatingPrediction(e) {
	if (allConfigsInRuleStopStates(e)) return !0;
	let m = getConflictingAltSets(e.elements);
	return hasConflictingAltSet(m) && !hasStateAssociatedWithOneAlt(m);
}
function getConflictingAltSets(e) {
	let m = /* @__PURE__ */ new Map();
	for (let h of e) {
		let e = getATNConfigKey(h, !1), g = m.get(e);
		g === void 0 && (g = {}, m.set(e, g)), g[h.alt] = !0;
	}
	return m;
}
function hasConflictingAltSet(e) {
	for (let m of Array.from(e.values())) if (Object.keys(m).length > 1) return !0;
	return !1;
}
function hasStateAssociatedWithOneAlt(e) {
	for (let m of Array.from(e.values())) if (Object.keys(m).length === 1) return !0;
	return !1;
}
var DocumentUri;
(function(e) {
	function m(e) {
		return typeof e == "string";
	}
	e.is = m;
})(DocumentUri ||= {});
var URI$1;
(function(e) {
	function m(e) {
		return typeof e == "string";
	}
	e.is = m;
})(URI$1 ||= {});
var integer;
(function(e) {
	e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
	function m(m) {
		return typeof m == "number" && e.MIN_VALUE <= m && m <= e.MAX_VALUE;
	}
	e.is = m;
})(integer ||= {});
var uinteger;
(function(e) {
	e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
	function m(m) {
		return typeof m == "number" && e.MIN_VALUE <= m && m <= e.MAX_VALUE;
	}
	e.is = m;
})(uinteger ||= {});
var Position;
(function(e) {
	function m(e, m) {
		return e === Number.MAX_VALUE && (e = uinteger.MAX_VALUE), m === Number.MAX_VALUE && (m = uinteger.MAX_VALUE), {
			line: e,
			character: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Is$1.uinteger(m.line) && Is$1.uinteger(m.character);
	}
	e.is = h;
})(Position ||= {});
var Range;
(function(e) {
	function m(e, m, h, g) {
		if (Is$1.uinteger(e) && Is$1.uinteger(m) && Is$1.uinteger(h) && Is$1.uinteger(g)) return {
			start: Position.create(e, m),
			end: Position.create(h, g)
		};
		if (Position.is(e) && Position.is(m)) return {
			start: e,
			end: m
		};
		throw Error(`Range#create called with invalid arguments[${e}, ${m}, ${h}, ${g}]`);
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Position.is(m.start) && Position.is(m.end);
	}
	e.is = h;
})(Range ||= {});
var Location;
(function(e) {
	function m(e, m) {
		return {
			uri: e,
			range: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Range.is(m.range) && (Is$1.string(m.uri) || Is$1.undefined(m.uri));
	}
	e.is = h;
})(Location ||= {});
var LocationLink;
(function(e) {
	function m(e, m, h, g) {
		return {
			targetUri: e,
			targetRange: m,
			targetSelectionRange: h,
			originSelectionRange: g
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Range.is(m.targetRange) && Is$1.string(m.targetUri) && Range.is(m.targetSelectionRange) && (Range.is(m.originSelectionRange) || Is$1.undefined(m.originSelectionRange));
	}
	e.is = h;
})(LocationLink ||= {});
var Color;
(function(e) {
	function m(e, m, h, g) {
		return {
			red: e,
			green: m,
			blue: h,
			alpha: g
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Is$1.numberRange(m.red, 0, 1) && Is$1.numberRange(m.green, 0, 1) && Is$1.numberRange(m.blue, 0, 1) && Is$1.numberRange(m.alpha, 0, 1);
	}
	e.is = h;
})(Color ||= {});
var ColorInformation;
(function(e) {
	function m(e, m) {
		return {
			range: e,
			color: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Range.is(m.range) && Color.is(m.color);
	}
	e.is = h;
})(ColorInformation ||= {});
var ColorPresentation;
(function(e) {
	function m(e, m, h) {
		return {
			label: e,
			textEdit: m,
			additionalTextEdits: h
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Is$1.string(m.label) && (Is$1.undefined(m.textEdit) || TextEdit.is(m)) && (Is$1.undefined(m.additionalTextEdits) || Is$1.typedArray(m.additionalTextEdits, TextEdit.is));
	}
	e.is = h;
})(ColorPresentation ||= {});
var FoldingRangeKind;
(function(e) {
	e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(FoldingRangeKind ||= {});
var FoldingRange;
(function(e) {
	function m(e, m, h, g, _, v) {
		let y = {
			startLine: e,
			endLine: m
		};
		return Is$1.defined(h) && (y.startCharacter = h), Is$1.defined(g) && (y.endCharacter = g), Is$1.defined(_) && (y.kind = _), Is$1.defined(v) && (y.collapsedText = v), y;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Is$1.uinteger(m.startLine) && Is$1.uinteger(m.startLine) && (Is$1.undefined(m.startCharacter) || Is$1.uinteger(m.startCharacter)) && (Is$1.undefined(m.endCharacter) || Is$1.uinteger(m.endCharacter)) && (Is$1.undefined(m.kind) || Is$1.string(m.kind));
	}
	e.is = h;
})(FoldingRange ||= {});
var DiagnosticRelatedInformation;
(function(e) {
	function m(e, m) {
		return {
			location: e,
			message: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Location.is(m.location) && Is$1.string(m.message);
	}
	e.is = h;
})(DiagnosticRelatedInformation ||= {});
var DiagnosticSeverity;
(function(e) {
	e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(DiagnosticSeverity ||= {});
var DiagnosticTag;
(function(e) {
	e.Unnecessary = 1, e.Deprecated = 2;
})(DiagnosticTag ||= {});
var CodeDescription;
(function(e) {
	function m(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Is$1.string(m.href);
	}
	e.is = m;
})(CodeDescription ||= {});
var Diagnostic;
(function(e) {
	function m(e, m, h, g, _, v) {
		let y = {
			range: e,
			message: m
		};
		return Is$1.defined(h) && (y.severity = h), Is$1.defined(g) && (y.code = g), Is$1.defined(_) && (y.source = _), Is$1.defined(v) && (y.relatedInformation = v), y;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Range.is(m.range) && Is$1.string(m.message) && (Is$1.number(m.severity) || Is$1.undefined(m.severity)) && (Is$1.integer(m.code) || Is$1.string(m.code) || Is$1.undefined(m.code)) && (Is$1.undefined(m.codeDescription) || Is$1.string(m.codeDescription?.href)) && (Is$1.string(m.source) || Is$1.undefined(m.source)) && (Is$1.undefined(m.relatedInformation) || Is$1.typedArray(m.relatedInformation, DiagnosticRelatedInformation.is));
	}
	e.is = h;
})(Diagnostic ||= {});
var Command;
(function(e) {
	function m(e, m, ...h) {
		let g = {
			title: e,
			command: m
		};
		return Is$1.defined(h) && h.length > 0 && (g.arguments = h), g;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Is$1.string(m.title) && Is$1.string(m.command);
	}
	e.is = h;
})(Command ||= {});
var TextEdit;
(function(e) {
	function m(e, m) {
		return {
			range: e,
			newText: m
		};
	}
	e.replace = m;
	function h(e, m) {
		return {
			range: {
				start: e,
				end: e
			},
			newText: m
		};
	}
	e.insert = h;
	function g(e) {
		return {
			range: e,
			newText: ""
		};
	}
	e.del = g;
	function _(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Is$1.string(m.newText) && Range.is(m.range);
	}
	e.is = _;
})(TextEdit ||= {});
var ChangeAnnotation;
(function(e) {
	function m(e, m, h) {
		let g = { label: e };
		return m !== void 0 && (g.needsConfirmation = m), h !== void 0 && (g.description = h), g;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Is$1.string(m.label) && (Is$1.boolean(m.needsConfirmation) || m.needsConfirmation === void 0) && (Is$1.string(m.description) || m.description === void 0);
	}
	e.is = h;
})(ChangeAnnotation ||= {});
var ChangeAnnotationIdentifier;
(function(e) {
	function m(e) {
		let m = e;
		return Is$1.string(m);
	}
	e.is = m;
})(ChangeAnnotationIdentifier ||= {});
var AnnotatedTextEdit;
(function(e) {
	function m(e, m, h) {
		return {
			range: e,
			newText: m,
			annotationId: h
		};
	}
	e.replace = m;
	function h(e, m, h) {
		return {
			range: {
				start: e,
				end: e
			},
			newText: m,
			annotationId: h
		};
	}
	e.insert = h;
	function g(e, m) {
		return {
			range: e,
			newText: "",
			annotationId: m
		};
	}
	e.del = g;
	function _(e) {
		let m = e;
		return TextEdit.is(m) && (ChangeAnnotation.is(m.annotationId) || ChangeAnnotationIdentifier.is(m.annotationId));
	}
	e.is = _;
})(AnnotatedTextEdit ||= {});
var TextDocumentEdit;
(function(e) {
	function m(e, m) {
		return {
			textDocument: e,
			edits: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && OptionalVersionedTextDocumentIdentifier.is(m.textDocument) && Array.isArray(m.edits);
	}
	e.is = h;
})(TextDocumentEdit ||= {});
var CreateFile;
(function(e) {
	function m(e, m, h) {
		let g = {
			kind: "create",
			uri: e
		};
		return m !== void 0 && (m.overwrite !== void 0 || m.ignoreIfExists !== void 0) && (g.options = m), h !== void 0 && (g.annotationId = h), g;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m && m.kind === "create" && Is$1.string(m.uri) && (m.options === void 0 || (m.options.overwrite === void 0 || Is$1.boolean(m.options.overwrite)) && (m.options.ignoreIfExists === void 0 || Is$1.boolean(m.options.ignoreIfExists))) && (m.annotationId === void 0 || ChangeAnnotationIdentifier.is(m.annotationId));
	}
	e.is = h;
})(CreateFile ||= {});
var RenameFile;
(function(e) {
	function m(e, m, h, g) {
		let _ = {
			kind: "rename",
			oldUri: e,
			newUri: m
		};
		return h !== void 0 && (h.overwrite !== void 0 || h.ignoreIfExists !== void 0) && (_.options = h), g !== void 0 && (_.annotationId = g), _;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m && m.kind === "rename" && Is$1.string(m.oldUri) && Is$1.string(m.newUri) && (m.options === void 0 || (m.options.overwrite === void 0 || Is$1.boolean(m.options.overwrite)) && (m.options.ignoreIfExists === void 0 || Is$1.boolean(m.options.ignoreIfExists))) && (m.annotationId === void 0 || ChangeAnnotationIdentifier.is(m.annotationId));
	}
	e.is = h;
})(RenameFile ||= {});
var DeleteFile;
(function(e) {
	function m(e, m, h) {
		let g = {
			kind: "delete",
			uri: e
		};
		return m !== void 0 && (m.recursive !== void 0 || m.ignoreIfNotExists !== void 0) && (g.options = m), h !== void 0 && (g.annotationId = h), g;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m && m.kind === "delete" && Is$1.string(m.uri) && (m.options === void 0 || (m.options.recursive === void 0 || Is$1.boolean(m.options.recursive)) && (m.options.ignoreIfNotExists === void 0 || Is$1.boolean(m.options.ignoreIfNotExists))) && (m.annotationId === void 0 || ChangeAnnotationIdentifier.is(m.annotationId));
	}
	e.is = h;
})(DeleteFile ||= {});
var WorkspaceEdit;
(function(e) {
	function m(e) {
		let m = e;
		return m && (m.changes !== void 0 || m.documentChanges !== void 0) && (m.documentChanges === void 0 || m.documentChanges.every((e) => Is$1.string(e.kind) ? CreateFile.is(e) || RenameFile.is(e) || DeleteFile.is(e) : TextDocumentEdit.is(e)));
	}
	e.is = m;
})(WorkspaceEdit ||= {});
var TextDocumentIdentifier;
(function(e) {
	function m(e) {
		return { uri: e };
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Is$1.string(m.uri);
	}
	e.is = h;
})(TextDocumentIdentifier ||= {});
var VersionedTextDocumentIdentifier;
(function(e) {
	function m(e, m) {
		return {
			uri: e,
			version: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Is$1.string(m.uri) && Is$1.integer(m.version);
	}
	e.is = h;
})(VersionedTextDocumentIdentifier ||= {});
var OptionalVersionedTextDocumentIdentifier;
(function(e) {
	function m(e, m) {
		return {
			uri: e,
			version: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Is$1.string(m.uri) && (m.version === null || Is$1.integer(m.version));
	}
	e.is = h;
})(OptionalVersionedTextDocumentIdentifier ||= {});
var TextDocumentItem;
(function(e) {
	function m(e, m, h, g) {
		return {
			uri: e,
			languageId: m,
			version: h,
			text: g
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Is$1.string(m.uri) && Is$1.string(m.languageId) && Is$1.integer(m.version) && Is$1.string(m.text);
	}
	e.is = h;
})(TextDocumentItem ||= {});
var MarkupKind;
(function(e) {
	e.PlainText = "plaintext", e.Markdown = "markdown";
	function m(m) {
		let h = m;
		return h === e.PlainText || h === e.Markdown;
	}
	e.is = m;
})(MarkupKind ||= {});
var MarkupContent;
(function(e) {
	function m(e) {
		let m = e;
		return Is$1.objectLiteral(e) && MarkupKind.is(m.kind) && Is$1.string(m.value);
	}
	e.is = m;
})(MarkupContent ||= {});
var CompletionItemKind;
(function(e) {
	e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})(CompletionItemKind ||= {});
var InsertTextFormat;
(function(e) {
	e.PlainText = 1, e.Snippet = 2;
})(InsertTextFormat ||= {});
var CompletionItemTag;
(function(e) {
	e.Deprecated = 1;
})(CompletionItemTag ||= {});
var InsertReplaceEdit;
(function(e) {
	function m(e, m, h) {
		return {
			newText: e,
			insert: m,
			replace: h
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m && Is$1.string(m.newText) && Range.is(m.insert) && Range.is(m.replace);
	}
	e.is = h;
})(InsertReplaceEdit ||= {});
var InsertTextMode;
(function(e) {
	e.asIs = 1, e.adjustIndentation = 2;
})(InsertTextMode ||= {});
var CompletionItemLabelDetails;
(function(e) {
	function m(e) {
		let m = e;
		return m && (Is$1.string(m.detail) || m.detail === void 0) && (Is$1.string(m.description) || m.description === void 0);
	}
	e.is = m;
})(CompletionItemLabelDetails ||= {});
var CompletionItem;
(function(e) {
	function m(e) {
		return { label: e };
	}
	e.create = m;
})(CompletionItem ||= {});
var CompletionList;
(function(e) {
	function m(e, m) {
		return {
			items: e || [],
			isIncomplete: !!m
		};
	}
	e.create = m;
})(CompletionList ||= {});
var MarkedString;
(function(e) {
	function m(e) {
		return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
	}
	e.fromPlainText = m;
	function h(e) {
		let m = e;
		return Is$1.string(m) || Is$1.objectLiteral(m) && Is$1.string(m.language) && Is$1.string(m.value);
	}
	e.is = h;
})(MarkedString ||= {});
var Hover;
(function(e) {
	function m(e) {
		let m = e;
		return !!m && Is$1.objectLiteral(m) && (MarkupContent.is(m.contents) || MarkedString.is(m.contents) || Is$1.typedArray(m.contents, MarkedString.is)) && (e.range === void 0 || Range.is(e.range));
	}
	e.is = m;
})(Hover ||= {});
var ParameterInformation;
(function(e) {
	function m(e, m) {
		return m ? {
			label: e,
			documentation: m
		} : { label: e };
	}
	e.create = m;
})(ParameterInformation ||= {});
var SignatureInformation;
(function(e) {
	function m(e, m, ...h) {
		let g = { label: e };
		return Is$1.defined(m) && (g.documentation = m), Is$1.defined(h) ? g.parameters = h : g.parameters = [], g;
	}
	e.create = m;
})(SignatureInformation ||= {});
var DocumentHighlightKind;
(function(e) {
	e.Text = 1, e.Read = 2, e.Write = 3;
})(DocumentHighlightKind ||= {});
var DocumentHighlight;
(function(e) {
	function m(e, m) {
		let h = { range: e };
		return Is$1.number(m) && (h.kind = m), h;
	}
	e.create = m;
})(DocumentHighlight ||= {});
var SymbolKind;
(function(e) {
	e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(SymbolKind ||= {});
var SymbolTag;
(function(e) {
	e.Deprecated = 1;
})(SymbolTag ||= {});
var SymbolInformation;
(function(e) {
	function m(e, m, h, g, _) {
		let v = {
			name: e,
			kind: m,
			location: {
				uri: g,
				range: h
			}
		};
		return _ && (v.containerName = _), v;
	}
	e.create = m;
})(SymbolInformation ||= {});
var WorkspaceSymbol;
(function(e) {
	function m(e, m, h, g) {
		return g === void 0 ? {
			name: e,
			kind: m,
			location: { uri: h }
		} : {
			name: e,
			kind: m,
			location: {
				uri: h,
				range: g
			}
		};
	}
	e.create = m;
})(WorkspaceSymbol ||= {});
var DocumentSymbol;
(function(e) {
	function m(e, m, h, g, _, v) {
		let y = {
			name: e,
			detail: m,
			kind: h,
			range: g,
			selectionRange: _
		};
		return v !== void 0 && (y.children = v), y;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m && Is$1.string(m.name) && Is$1.number(m.kind) && Range.is(m.range) && Range.is(m.selectionRange) && (m.detail === void 0 || Is$1.string(m.detail)) && (m.deprecated === void 0 || Is$1.boolean(m.deprecated)) && (m.children === void 0 || Array.isArray(m.children)) && (m.tags === void 0 || Array.isArray(m.tags));
	}
	e.is = h;
})(DocumentSymbol ||= {});
var CodeActionKind;
(function(e) {
	e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(CodeActionKind ||= {});
var CodeActionTriggerKind;
(function(e) {
	e.Invoked = 1, e.Automatic = 2;
})(CodeActionTriggerKind ||= {});
var CodeActionContext;
(function(e) {
	function m(e, m, h) {
		let g = { diagnostics: e };
		return m != null && (g.only = m), h != null && (g.triggerKind = h), g;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Is$1.typedArray(m.diagnostics, Diagnostic.is) && (m.only === void 0 || Is$1.typedArray(m.only, Is$1.string)) && (m.triggerKind === void 0 || m.triggerKind === CodeActionTriggerKind.Invoked || m.triggerKind === CodeActionTriggerKind.Automatic);
	}
	e.is = h;
})(CodeActionContext ||= {});
var CodeAction;
(function(e) {
	function m(e, m, h) {
		let g = { title: e }, _ = !0;
		return typeof m == "string" ? (_ = !1, g.kind = m) : Command.is(m) ? g.command = m : g.edit = m, _ && h !== void 0 && (g.kind = h), g;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m && Is$1.string(m.title) && (m.diagnostics === void 0 || Is$1.typedArray(m.diagnostics, Diagnostic.is)) && (m.kind === void 0 || Is$1.string(m.kind)) && (m.edit !== void 0 || m.command !== void 0) && (m.command === void 0 || Command.is(m.command)) && (m.isPreferred === void 0 || Is$1.boolean(m.isPreferred)) && (m.edit === void 0 || WorkspaceEdit.is(m.edit));
	}
	e.is = h;
})(CodeAction ||= {});
var CodeLens;
(function(e) {
	function m(e, m) {
		let h = { range: e };
		return Is$1.defined(m) && (h.data = m), h;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Range.is(m.range) && (Is$1.undefined(m.command) || Command.is(m.command));
	}
	e.is = h;
})(CodeLens ||= {});
var FormattingOptions;
(function(e) {
	function m(e, m) {
		return {
			tabSize: e,
			insertSpaces: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Is$1.uinteger(m.tabSize) && Is$1.boolean(m.insertSpaces);
	}
	e.is = h;
})(FormattingOptions ||= {});
var DocumentLink;
(function(e) {
	function m(e, m, h) {
		return {
			range: e,
			target: m,
			data: h
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Range.is(m.range) && (Is$1.undefined(m.target) || Is$1.string(m.target));
	}
	e.is = h;
})(DocumentLink ||= {});
var SelectionRange;
(function(e) {
	function m(e, m) {
		return {
			range: e,
			parent: m
		};
	}
	e.create = m;
	function h(m) {
		let h = m;
		return Is$1.objectLiteral(h) && Range.is(h.range) && (h.parent === void 0 || e.is(h.parent));
	}
	e.is = h;
})(SelectionRange ||= {});
var SemanticTokenTypes;
(function(e) {
	e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
})(SemanticTokenTypes ||= {});
var SemanticTokenModifiers;
(function(e) {
	e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
})(SemanticTokenModifiers ||= {});
var SemanticTokens;
(function(e) {
	function m(e) {
		let m = e;
		return Is$1.objectLiteral(m) && (m.resultId === void 0 || typeof m.resultId == "string") && Array.isArray(m.data) && (m.data.length === 0 || typeof m.data[0] == "number");
	}
	e.is = m;
})(SemanticTokens ||= {});
var InlineValueText;
(function(e) {
	function m(e, m) {
		return {
			range: e,
			text: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m != null && Range.is(m.range) && Is$1.string(m.text);
	}
	e.is = h;
})(InlineValueText ||= {});
var InlineValueVariableLookup;
(function(e) {
	function m(e, m, h) {
		return {
			range: e,
			variableName: m,
			caseSensitiveLookup: h
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m != null && Range.is(m.range) && Is$1.boolean(m.caseSensitiveLookup) && (Is$1.string(m.variableName) || m.variableName === void 0);
	}
	e.is = h;
})(InlineValueVariableLookup ||= {});
var InlineValueEvaluatableExpression;
(function(e) {
	function m(e, m) {
		return {
			range: e,
			expression: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return m != null && Range.is(m.range) && (Is$1.string(m.expression) || m.expression === void 0);
	}
	e.is = h;
})(InlineValueEvaluatableExpression ||= {});
var InlineValueContext;
(function(e) {
	function m(e, m) {
		return {
			frameId: e,
			stoppedLocation: m
		};
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.defined(m) && Range.is(e.stoppedLocation);
	}
	e.is = h;
})(InlineValueContext ||= {});
var InlayHintKind;
(function(e) {
	e.Type = 1, e.Parameter = 2;
	function m(e) {
		return e === 1 || e === 2;
	}
	e.is = m;
})(InlayHintKind ||= {});
var InlayHintLabelPart;
(function(e) {
	function m(e) {
		return { value: e };
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && (m.tooltip === void 0 || Is$1.string(m.tooltip) || MarkupContent.is(m.tooltip)) && (m.location === void 0 || Location.is(m.location)) && (m.command === void 0 || Command.is(m.command));
	}
	e.is = h;
})(InlayHintLabelPart ||= {});
var InlayHint;
(function(e) {
	function m(e, m, h) {
		let g = {
			position: e,
			label: m
		};
		return h !== void 0 && (g.kind = h), g;
	}
	e.create = m;
	function h(e) {
		let m = e;
		return Is$1.objectLiteral(m) && Position.is(m.position) && (Is$1.string(m.label) || Is$1.typedArray(m.label, InlayHintLabelPart.is)) && (m.kind === void 0 || InlayHintKind.is(m.kind)) && m.textEdits === void 0 || Is$1.typedArray(m.textEdits, TextEdit.is) && (m.tooltip === void 0 || Is$1.string(m.tooltip) || MarkupContent.is(m.tooltip)) && (m.paddingLeft === void 0 || Is$1.boolean(m.paddingLeft)) && (m.paddingRight === void 0 || Is$1.boolean(m.paddingRight));
	}
	e.is = h;
})(InlayHint ||= {});
var StringValue;
(function(e) {
	function m(e) {
		return {
			kind: "snippet",
			value: e
		};
	}
	e.createSnippet = m;
})(StringValue ||= {});
var InlineCompletionItem;
(function(e) {
	function m(e, m, h, g) {
		return {
			insertText: e,
			filterText: m,
			range: h,
			command: g
		};
	}
	e.create = m;
})(InlineCompletionItem ||= {});
var InlineCompletionList;
(function(e) {
	function m(e) {
		return { items: e };
	}
	e.create = m;
})(InlineCompletionList ||= {});
var InlineCompletionTriggerKind;
(function(e) {
	e.Invoked = 0, e.Automatic = 1;
})(InlineCompletionTriggerKind ||= {});
var SelectedCompletionInfo;
(function(e) {
	function m(e, m) {
		return {
			range: e,
			text: m
		};
	}
	e.create = m;
})(SelectedCompletionInfo ||= {});
var InlineCompletionContext;
(function(e) {
	function m(e, m) {
		return {
			triggerKind: e,
			selectedCompletionInfo: m
		};
	}
	e.create = m;
})(InlineCompletionContext ||= {});
var WorkspaceFolder;
(function(e) {
	function m(e) {
		let m = e;
		return Is$1.objectLiteral(m) && URI$1.is(m.uri) && Is$1.string(m.name);
	}
	e.is = m;
})(WorkspaceFolder ||= {});
var TextDocument$1;
(function(e) {
	function m(e, m, h, g) {
		return new FullTextDocument$1(e, m, h, g);
	}
	e.create = m;
	function h(e) {
		let m = e;
		return !!(Is$1.defined(m) && Is$1.string(m.uri) && (Is$1.undefined(m.languageId) || Is$1.string(m.languageId)) && Is$1.uinteger(m.lineCount) && Is$1.func(m.getText) && Is$1.func(m.positionAt) && Is$1.func(m.offsetAt));
	}
	e.is = h;
	function g(e, m) {
		let h = e.getText(), g = _(m, (e, m) => {
			let h = e.range.start.line - m.range.start.line;
			return h === 0 ? e.range.start.character - m.range.start.character : h;
		}), v = h.length;
		for (let m = g.length - 1; m >= 0; m--) {
			let _ = g[m], y = e.offsetAt(_.range.start), b = e.offsetAt(_.range.end);
			if (b <= v) h = h.substring(0, y) + _.newText + h.substring(b, h.length);
			else throw Error("Overlapping edit");
			v = y;
		}
		return h;
	}
	e.applyEdits = g;
	function _(e, m) {
		if (e.length <= 1) return e;
		let h = e.length / 2 | 0, g = e.slice(0, h), v = e.slice(h);
		_(g, m), _(v, m);
		let y = 0, b = 0, x = 0;
		for (; y < g.length && b < v.length;) m(g[y], v[b]) <= 0 ? e[x++] = g[y++] : e[x++] = v[b++];
		for (; y < g.length;) e[x++] = g[y++];
		for (; b < v.length;) e[x++] = v[b++];
		return e;
	}
})(TextDocument$1 ||= {});
var FullTextDocument$1 = class {
	constructor(e, m, h, g) {
		this._uri = e, this._languageId = m, this._version = h, this._content = g, this._lineOffsets = void 0;
	}
	get uri() {
		return this._uri;
	}
	get languageId() {
		return this._languageId;
	}
	get version() {
		return this._version;
	}
	getText(e) {
		if (e) {
			let m = this.offsetAt(e.start), h = this.offsetAt(e.end);
			return this._content.substring(m, h);
		}
		return this._content;
	}
	update(e, m) {
		this._content = e.text, this._version = m, this._lineOffsets = void 0;
	}
	getLineOffsets() {
		if (this._lineOffsets === void 0) {
			let e = [], m = this._content, h = !0;
			for (let g = 0; g < m.length; g++) {
				h &&= (e.push(g), !1);
				let _ = m.charAt(g);
				h = _ === "\r" || _ === "\n", _ === "\r" && g + 1 < m.length && m.charAt(g + 1) === "\n" && g++;
			}
			h && m.length > 0 && e.push(m.length), this._lineOffsets = e;
		}
		return this._lineOffsets;
	}
	positionAt(e) {
		e = Math.max(Math.min(e, this._content.length), 0);
		let m = this.getLineOffsets(), h = 0, g = m.length;
		if (g === 0) return Position.create(0, e);
		for (; h < g;) {
			let _ = Math.floor((h + g) / 2);
			m[_] > e ? g = _ : h = _ + 1;
		}
		let _ = h - 1;
		return Position.create(_, e - m[_]);
	}
	offsetAt(e) {
		let m = this.getLineOffsets();
		if (e.line >= m.length) return this._content.length;
		if (e.line < 0) return 0;
		let h = m[e.line], g = e.line + 1 < m.length ? m[e.line + 1] : this._content.length;
		return Math.max(Math.min(h + e.character, g), h);
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
}, Is$1;
(function(e) {
	let m = Object.prototype.toString;
	function h(e) {
		return e !== void 0;
	}
	e.defined = h;
	function g(e) {
		return e === void 0;
	}
	e.undefined = g;
	function _(e) {
		return e === !0 || e === !1;
	}
	e.boolean = _;
	function v(e) {
		return m.call(e) === "[object String]";
	}
	e.string = v;
	function y(e) {
		return m.call(e) === "[object Number]";
	}
	e.number = y;
	function b(e, h, g) {
		return m.call(e) === "[object Number]" && h <= e && e <= g;
	}
	e.numberRange = b;
	function x(e) {
		return m.call(e) === "[object Number]" && -2147483648 <= e && e <= 2147483647;
	}
	e.integer = x;
	function S(e) {
		return m.call(e) === "[object Number]" && 0 <= e && e <= 2147483647;
	}
	e.uinteger = S;
	function C(e) {
		return m.call(e) === "[object Function]";
	}
	e.func = C;
	function w(e) {
		return typeof e == "object" && !!e;
	}
	e.objectLiteral = w;
	function T(e, m) {
		return Array.isArray(e) && e.every(m);
	}
	e.typedArray = T;
})(Is$1 ||= {});
var CstNodeBuilder = class {
	constructor() {
		this.nodeStack = [];
	}
	get current() {
		return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
	}
	buildRootNode(e) {
		return this.rootNode = new RootCstNodeImpl(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
	}
	buildCompositeNode(e) {
		let m = new CompositeCstNodeImpl();
		return m.grammarSource = e, m.root = this.rootNode, this.current.content.push(m), this.nodeStack.push(m), m;
	}
	buildLeafNode(e, m) {
		let h = new LeafCstNodeImpl(e.startOffset, e.image.length, tokenToRange(e), e.tokenType, !m);
		return h.grammarSource = m, h.root = this.rootNode, this.current.content.push(h), h;
	}
	removeNode(e) {
		let m = e.container;
		if (m) {
			let h = m.content.indexOf(e);
			h >= 0 && m.content.splice(h, 1);
		}
	}
	addHiddenNodes(e) {
		let m = [];
		for (let h of e) {
			let e = new LeafCstNodeImpl(h.startOffset, h.image.length, tokenToRange(h), h.tokenType, !0);
			e.root = this.rootNode, m.push(e);
		}
		let h = this.current, g = !1;
		if (h.content.length > 0) {
			h.content.push(...m);
			return;
		}
		for (; h.container;) {
			let e = h.container.content.indexOf(h);
			if (e > 0) {
				h.container.content.splice(e, 0, ...m), g = !0;
				break;
			}
			h = h.container;
		}
		g || this.rootNode.content.unshift(...m);
	}
	construct(e) {
		let m = this.current;
		typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = m;
		let h = this.nodeStack.pop();
		h?.content.length === 0 && this.removeNode(h);
	}
}, AbstractCstNode = class {
	get parent() {
		return this.container;
	}
	get feature() {
		return this.grammarSource;
	}
	get hidden() {
		return !1;
	}
	get astNode() {
		let e = typeof this._astNode?.$type == "string" ? this._astNode : this.container?.astNode;
		if (!e) throw Error("This node has no associated AST element");
		return e;
	}
	set astNode(e) {
		this._astNode = e;
	}
	get element() {
		return this.astNode;
	}
	get text() {
		return this.root.fullText.substring(this.offset, this.end);
	}
}, LeafCstNodeImpl = class extends AbstractCstNode {
	get offset() {
		return this._offset;
	}
	get length() {
		return this._length;
	}
	get end() {
		return this._offset + this._length;
	}
	get hidden() {
		return this._hidden;
	}
	get tokenType() {
		return this._tokenType;
	}
	get range() {
		return this._range;
	}
	constructor(e, m, h, g, _ = !1) {
		super(), this._hidden = _, this._offset = e, this._tokenType = g, this._length = m, this._range = h;
	}
}, CompositeCstNodeImpl = class extends AbstractCstNode {
	constructor() {
		super(...arguments), this.content = new CstNodeContainer(this);
	}
	get children() {
		return this.content;
	}
	get offset() {
		return this.firstNonHiddenNode?.offset ?? 0;
	}
	get length() {
		return this.end - this.offset;
	}
	get end() {
		return this.lastNonHiddenNode?.end ?? 0;
	}
	get range() {
		let e = this.firstNonHiddenNode, m = this.lastNonHiddenNode;
		if (e && m) {
			if (this._rangeCache === void 0) {
				let { range: h } = e, { range: g } = m;
				this._rangeCache = {
					start: h.start,
					end: g.end.line < h.start.line ? h.start : g.end
				};
			}
			return this._rangeCache;
		} else return {
			start: Position.create(0, 0),
			end: Position.create(0, 0)
		};
	}
	get firstNonHiddenNode() {
		for (let e of this.content) if (!e.hidden) return e;
		return this.content[0];
	}
	get lastNonHiddenNode() {
		for (let e = this.content.length - 1; e >= 0; e--) {
			let m = this.content[e];
			if (!m.hidden) return m;
		}
		return this.content[this.content.length - 1];
	}
}, CstNodeContainer = class e extends Array {
	constructor(m) {
		super(), this.parent = m, Object.setPrototypeOf(this, e.prototype);
	}
	push(...e) {
		return this.addParents(e), super.push(...e);
	}
	unshift(...e) {
		return this.addParents(e), super.unshift(...e);
	}
	splice(e, m, ...h) {
		return this.addParents(h), super.splice(e, m, ...h);
	}
	addParents(e) {
		for (let m of e) m.container = this.parent;
	}
}, RootCstNodeImpl = class extends CompositeCstNodeImpl {
	get text() {
		return this._text.substring(this.offset, this.end);
	}
	get fullText() {
		return this._text;
	}
	constructor(e) {
		super(), this._text = "", this._text = e ?? "";
	}
};
const DatatypeSymbol = Symbol("Datatype");
function isDataTypeNode(e) {
	return e.$type === DatatypeSymbol;
}
var ruleSuffix = "​", withRuleSuffix = (e) => e.endsWith(ruleSuffix) ? e : e + ruleSuffix, AbstractLangiumParser = class {
	constructor(e) {
		this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
		let m = this.lexer.definition, h = e.LanguageMetaData.mode === "production";
		this.wrapper = new ChevrotainWrapper(m, Object.assign(Object.assign({}, e.parser.ParserConfig), {
			skipValidations: h,
			errorMessageProvider: e.parser.ParserErrorMessageProvider
		}));
	}
	alternatives(e, m) {
		this.wrapper.wrapOr(e, m);
	}
	optional(e, m) {
		this.wrapper.wrapOption(e, m);
	}
	many(e, m) {
		this.wrapper.wrapMany(e, m);
	}
	atLeastOne(e, m) {
		this.wrapper.wrapAtLeastOne(e, m);
	}
	getRule(e) {
		return this.allRules.get(e);
	}
	isRecording() {
		return this.wrapper.IS_RECORDING;
	}
	get unorderedGroups() {
		return this._unorderedGroups;
	}
	getRuleStack() {
		return this.wrapper.RULE_STACK;
	}
	finalize() {
		this.wrapper.wrapSelfAnalysis();
	}
}, LangiumParser = class extends AbstractLangiumParser {
	get current() {
		return this.stack[this.stack.length - 1];
	}
	constructor(e) {
		super(e), this.nodeBuilder = new CstNodeBuilder(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
	}
	rule(e, m) {
		let h = this.computeRuleType(e), g = this.wrapper.DEFINE_RULE(withRuleSuffix(e.name), this.startImplementation(h, m).bind(this));
		return this.allRules.set(e.name, g), e.entry && (this.mainRule = g), g;
	}
	computeRuleType(e) {
		if (!e.fragment) return isDataTypeRule(e) ? DatatypeSymbol : getExplicitRuleType(e) ?? e.name;
	}
	parse(e, m = {}) {
		this.nodeBuilder.buildRootNode(e);
		let h = this.lexerResult = this.lexer.tokenize(e);
		this.wrapper.input = h.tokens;
		let g = m.rule ? this.allRules.get(m.rule) : this.mainRule;
		if (!g) throw Error(m.rule ? `No rule found with name '${m.rule}'` : "No main rule available.");
		let _ = g.call(this.wrapper, {});
		return this.nodeBuilder.addHiddenNodes(h.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
			value: _,
			lexerErrors: h.errors,
			lexerReport: h.report,
			parserErrors: this.wrapper.errors
		};
	}
	startImplementation(e, m) {
		return (h) => {
			let g = !this.isRecording() && e !== void 0;
			if (g) {
				let m = { $type: e };
				this.stack.push(m), e === DatatypeSymbol && (m.value = "");
			}
			let _;
			try {
				_ = m(h);
			} catch {
				_ = void 0;
			}
			return _ === void 0 && g && (_ = this.construct()), _;
		};
	}
	extractHiddenTokens(e) {
		let m = this.lexerResult.hidden;
		if (!m.length) return [];
		let h = e.startOffset;
		for (let e = 0; e < m.length; e++) if (m[e].startOffset > h) return m.splice(0, e);
		return m.splice(0, m.length);
	}
	consume(e, m, h) {
		let g = this.wrapper.wrapConsume(e, m);
		if (!this.isRecording() && this.isValidToken(g)) {
			let e = this.extractHiddenTokens(g);
			this.nodeBuilder.addHiddenNodes(e);
			let m = this.nodeBuilder.buildLeafNode(g, h), { assignment: _, isCrossRef: v } = this.getAssignment(h), y = this.current;
			if (_) {
				let e = isKeyword(h) ? g.image : this.converter.convert(g.image, m);
				this.assign(_.operator, _.feature, e, m, v);
			} else if (isDataTypeNode(y)) {
				let e = g.image;
				isKeyword(h) || (e = this.converter.convert(e, m).toString()), y.value += e;
			}
		}
	}
	isValidToken(e) {
		return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
	}
	subrule(e, m, h, g, _) {
		let v;
		!this.isRecording() && !h && (v = this.nodeBuilder.buildCompositeNode(g));
		let y = this.wrapper.wrapSubrule(e, m, _);
		!this.isRecording() && v && v.length > 0 && this.performSubruleAssignment(y, g, v);
	}
	performSubruleAssignment(e, m, h) {
		let { assignment: g, isCrossRef: _ } = this.getAssignment(m);
		if (g) this.assign(g.operator, g.feature, e, h, _);
		else if (!g) {
			let m = this.current;
			if (isDataTypeNode(m)) m.value += e.toString();
			else if (typeof e == "object" && e) {
				let h = this.assignWithoutOverride(e, m);
				this.stack.pop(), this.stack.push(h);
			}
		}
	}
	action(e, m) {
		if (!this.isRecording()) {
			let h = this.current;
			if (m.feature && m.operator) {
				h = this.construct(), this.nodeBuilder.removeNode(h.$cstNode), this.nodeBuilder.buildCompositeNode(m).content.push(h.$cstNode);
				let g = { $type: e };
				this.stack.push(g), this.assign(m.operator, m.feature, h, h.$cstNode, !1);
			} else h.$type = e;
		}
	}
	construct() {
		if (this.isRecording()) return;
		let e = this.current;
		return linkContentToContainer(e), this.nodeBuilder.construct(e), this.stack.pop(), isDataTypeNode(e) ? this.converter.convert(e.value, e.$cstNode) : (assignMandatoryProperties(this.astReflection, e), e);
	}
	getAssignment(e) {
		if (!this.assignmentMap.has(e)) {
			let m = getContainerOfType(e, isAssignment);
			this.assignmentMap.set(e, {
				assignment: m,
				isCrossRef: m ? isCrossReference(m.terminal) : !1
			});
		}
		return this.assignmentMap.get(e);
	}
	assign(e, m, h, g, _) {
		let v = this.current, y;
		switch (y = _ && typeof h == "string" ? this.linker.buildReference(v, m, g, h) : h, e) {
			case "=":
				v[m] = y;
				break;
			case "?=":
				v[m] = !0;
				break;
			case "+=": Array.isArray(v[m]) || (v[m] = []), v[m].push(y);
		}
	}
	assignWithoutOverride(e, m) {
		for (let [h, g] of Object.entries(m)) {
			let m = e[h];
			m === void 0 ? e[h] = g : Array.isArray(m) && Array.isArray(g) && (g.push(...m), e[h] = g);
		}
		let h = e.$cstNode;
		return h && (h.astNode = void 0, e.$cstNode = void 0), e;
	}
	get definitionErrors() {
		return this.wrapper.definitionErrors;
	}
}, AbstractParserErrorMessageProvider = class {
	buildMismatchTokenMessage(e) {
		return defaultParserErrorProvider.buildMismatchTokenMessage(e);
	}
	buildNotAllInputParsedMessage(e) {
		return defaultParserErrorProvider.buildNotAllInputParsedMessage(e);
	}
	buildNoViableAltMessage(e) {
		return defaultParserErrorProvider.buildNoViableAltMessage(e);
	}
	buildEarlyExitMessage(e) {
		return defaultParserErrorProvider.buildEarlyExitMessage(e);
	}
}, LangiumParserErrorMessageProvider = class extends AbstractParserErrorMessageProvider {
	buildMismatchTokenMessage({ expected: e, actual: m }) {
		return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${m.image}\`.`;
	}
	buildNotAllInputParsedMessage({ firstRedundant: e }) {
		return `Expecting end of file but found \`${e.image}\`.`;
	}
}, LangiumCompletionParser = class extends AbstractLangiumParser {
	constructor() {
		super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	action() {}
	construct() {}
	parse(e) {
		return this.resetState(), this.tokens = this.lexer.tokenize(e, { mode: "partial" }).tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
			tokens: this.tokens,
			elementStack: [...this.lastElementStack],
			tokenIndex: this.nextTokenIndex
		};
	}
	rule(e, m) {
		let h = this.wrapper.DEFINE_RULE(withRuleSuffix(e.name), this.startImplementation(m).bind(this));
		return this.allRules.set(e.name, h), e.entry && (this.mainRule = h), h;
	}
	resetState() {
		this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	startImplementation(e) {
		return (m) => {
			let h = this.keepStackSize();
			try {
				e(m);
			} finally {
				this.resetStackSize(h);
			}
		};
	}
	removeUnexpectedElements() {
		this.elementStack.splice(this.stackSize);
	}
	keepStackSize() {
		let e = this.elementStack.length;
		return this.stackSize = e, e;
	}
	resetStackSize(e) {
		this.removeUnexpectedElements(), this.stackSize = e;
	}
	consume(e, m, h) {
		this.wrapper.wrapConsume(e, m), this.isRecording() || (this.lastElementStack = [...this.elementStack, h], this.nextTokenIndex = this.currIdx + 1);
	}
	subrule(e, m, h, g, _) {
		this.before(g), this.wrapper.wrapSubrule(e, m, _), this.after(g);
	}
	before(e) {
		this.isRecording() || this.elementStack.push(e);
	}
	after(e) {
		if (!this.isRecording()) {
			let m = this.elementStack.lastIndexOf(e);
			m >= 0 && this.elementStack.splice(m);
		}
	}
	get currIdx() {
		return this.wrapper.currIdx;
	}
}, defaultConfig = {
	recoveryEnabled: !0,
	nodeLocationTracking: "full",
	skipValidations: !0,
	errorMessageProvider: new LangiumParserErrorMessageProvider()
}, ChevrotainWrapper = class extends EmbeddedActionsParser {
	constructor(e, m) {
		let h = m && "maxLookahead" in m;
		super(e, Object.assign(Object.assign(Object.assign({}, defaultConfig), { lookaheadStrategy: h ? new LLkLookaheadStrategy({ maxLookahead: m.maxLookahead }) : new LLStarLookaheadStrategy({ logging: m.skipValidations ? () => {} : void 0 }) }), m));
	}
	get IS_RECORDING() {
		return this.RECORDING_PHASE;
	}
	DEFINE_RULE(e, m) {
		return this.RULE(e, m);
	}
	wrapSelfAnalysis() {
		this.performSelfAnalysis();
	}
	wrapConsume(e, m) {
		return this.consume(e, m);
	}
	wrapSubrule(e, m, h) {
		return this.subrule(e, m, { ARGS: [h] });
	}
	wrapOr(e, m) {
		this.or(e, m);
	}
	wrapOption(e, m) {
		this.option(e, m);
	}
	wrapMany(e, m) {
		this.many(e, m);
	}
	wrapAtLeastOne(e, m) {
		this.atLeastOne(e, m);
	}
};
function createParser(e, m, h) {
	return buildRules({
		parser: m,
		tokens: h,
		ruleNames: /* @__PURE__ */ new Map()
	}, e), m;
}
function buildRules(e, m) {
	let h = getAllReachableRules(m, !1), g = stream(m.rules).filter(isParserRule).filter((e) => h.has(e));
	for (let m of g) {
		let h = Object.assign(Object.assign({}, e), {
			consume: 1,
			optional: 1,
			subrule: 1,
			many: 1,
			or: 1
		});
		e.parser.rule(m, buildElement(h, m.definition));
	}
}
function buildElement(e, m, h = !1) {
	let g;
	if (isKeyword(m)) g = buildKeyword(e, m);
	else if (isAction(m)) g = buildAction(e, m);
	else if (isAssignment(m)) g = buildElement(e, m.terminal);
	else if (isCrossReference(m)) g = buildCrossReference(e, m);
	else if (isRuleCall(m)) g = buildRuleCall(e, m);
	else if (isAlternatives(m)) g = buildAlternatives(e, m);
	else if (isUnorderedGroup(m)) g = buildUnorderedGroup(e, m);
	else if (isGroup(m)) g = buildGroup(e, m);
	else if (isEndOfFile(m)) {
		let h = e.consume++;
		g = () => e.parser.consume(h, EOF, m);
	} else throw new ErrorWithLocation(m.$cstNode, `Unexpected element type: ${m.$type}`);
	return wrap(e, h ? void 0 : getGuardCondition(m), g, m.cardinality);
}
function buildAction(e, m) {
	let h = getTypeName(m);
	return () => e.parser.action(h, m);
}
function buildRuleCall(e, m) {
	let h = m.rule.ref;
	if (isParserRule(h)) {
		let g = e.subrule++, _ = h.fragment, v = m.arguments.length > 0 ? buildRuleCallPredicate(h, m.arguments) : () => ({});
		return (y) => e.parser.subrule(g, getRule(e, h), _, m, v(y));
	} else if (isTerminalRule(h)) {
		let g = e.consume++, _ = getToken(e, h.name);
		return () => e.parser.consume(g, _, m);
	} else if (h) assertUnreachable(h);
	else throw new ErrorWithLocation(m.$cstNode, `Undefined rule: ${m.rule.$refText}`);
}
function buildRuleCallPredicate(e, m) {
	let h = m.map((e) => buildPredicate(e.value));
	return (m) => {
		let g = {};
		for (let _ = 0; _ < h.length; _++) {
			let v = e.parameters[_], y = h[_];
			g[v.name] = y(m);
		}
		return g;
	};
}
function buildPredicate(e) {
	if (isDisjunction(e)) {
		let m = buildPredicate(e.left), h = buildPredicate(e.right);
		return (e) => m(e) || h(e);
	} else if (isConjunction(e)) {
		let m = buildPredicate(e.left), h = buildPredicate(e.right);
		return (e) => m(e) && h(e);
	} else if (isNegation(e)) {
		let m = buildPredicate(e.value);
		return (e) => !m(e);
	} else if (isParameterReference(e)) {
		let m = e.parameter.ref.name;
		return (e) => e !== void 0 && e[m] === !0;
	} else if (isBooleanLiteral(e)) {
		let m = !!e.true;
		return () => m;
	}
	assertUnreachable(e);
}
function buildAlternatives(e, m) {
	if (m.elements.length === 1) return buildElement(e, m.elements[0]);
	{
		let h = [];
		for (let g of m.elements) {
			let m = { ALT: buildElement(e, g, !0) }, _ = getGuardCondition(g);
			_ && (m.GATE = buildPredicate(_)), h.push(m);
		}
		let g = e.or++;
		return (m) => e.parser.alternatives(g, h.map((e) => {
			let h = { ALT: () => e.ALT(m) }, g = e.GATE;
			return g && (h.GATE = () => g(m)), h;
		}));
	}
}
function buildUnorderedGroup(e, m) {
	if (m.elements.length === 1) return buildElement(e, m.elements[0]);
	let h = [];
	for (let g of m.elements) {
		let m = { ALT: buildElement(e, g, !0) }, _ = getGuardCondition(g);
		_ && (m.GATE = buildPredicate(_)), h.push(m);
	}
	let g = e.or++, _ = (e, m) => `uGroup_${e}_${m.getRuleStack().join("-")}`, v = wrap(e, getGuardCondition(m), (m) => e.parser.alternatives(g, h.map((h, v) => {
		let y = { ALT: () => !0 }, b = e.parser;
		y.ALT = () => {
			if (h.ALT(m), !b.isRecording()) {
				let e = _(g, b);
				b.unorderedGroups.get(e) || b.unorderedGroups.set(e, []);
				let m = b.unorderedGroups.get(e);
				m?.[v] === void 0 && (m[v] = !0);
			}
		};
		let x = h.GATE;
		return x ? y.GATE = () => x(m) : y.GATE = () => !b.unorderedGroups.get(_(g, b))?.[v], y;
	})), "*");
	return (m) => {
		v(m), e.parser.isRecording() || e.parser.unorderedGroups.delete(_(g, e.parser));
	};
}
function buildGroup(e, m) {
	let h = m.elements.map((m) => buildElement(e, m));
	return (e) => h.forEach((m) => m(e));
}
function getGuardCondition(e) {
	if (isGroup(e)) return e.guardCondition;
}
function buildCrossReference(e, m, h = m.terminal) {
	if (h) if (isRuleCall(h) && isParserRule(h.rule.ref)) {
		let g = h.rule.ref, _ = e.subrule++;
		return (h) => e.parser.subrule(_, getRule(e, g), !1, m, h);
	} else if (isRuleCall(h) && isTerminalRule(h.rule.ref)) {
		let g = e.consume++, _ = getToken(e, h.rule.ref.name);
		return () => e.parser.consume(g, _, m);
	} else if (isKeyword(h)) {
		let g = e.consume++, _ = getToken(e, h.value);
		return () => e.parser.consume(g, _, m);
	} else throw Error("Could not build cross reference parser");
	else {
		if (!m.type.ref) throw Error("Could not resolve reference to type: " + m.type.$refText);
		let h = findNameAssignment(m.type.ref)?.terminal;
		if (!h) throw Error("Could not find name assignment for type: " + getTypeName(m.type.ref));
		return buildCrossReference(e, m, h);
	}
}
function buildKeyword(e, m) {
	let h = e.consume++, g = e.tokens[m.value];
	if (!g) throw Error("Could not find token for keyword: " + m.value);
	return () => e.parser.consume(h, g, m);
}
function wrap(e, m, h, g) {
	let _ = m && buildPredicate(m);
	if (!g) if (_) {
		let m = e.or++;
		return (g) => e.parser.alternatives(m, [{
			ALT: () => h(g),
			GATE: () => _(g)
		}, {
			ALT: EMPTY_ALT(),
			GATE: () => !_(g)
		}]);
	} else return h;
	if (g === "*") {
		let m = e.many++;
		return (g) => e.parser.many(m, {
			DEF: () => h(g),
			GATE: _ ? () => _(g) : void 0
		});
	} else if (g === "+") {
		let m = e.many++;
		if (_) {
			let g = e.or++;
			return (v) => e.parser.alternatives(g, [{
				ALT: () => e.parser.atLeastOne(m, { DEF: () => h(v) }),
				GATE: () => _(v)
			}, {
				ALT: EMPTY_ALT(),
				GATE: () => !_(v)
			}]);
		} else return (g) => e.parser.atLeastOne(m, { DEF: () => h(g) });
	} else if (g === "?") {
		let m = e.optional++;
		return (g) => e.parser.optional(m, {
			DEF: () => h(g),
			GATE: _ ? () => _(g) : void 0
		});
	} else assertUnreachable(g);
}
function getRule(e, m) {
	let h = getRuleName(e, m), g = e.parser.getRule(h);
	if (!g) throw Error(`Rule "${h}" not found."`);
	return g;
}
function getRuleName(e, m) {
	if (isParserRule(m)) return m.name;
	if (e.ruleNames.has(m)) return e.ruleNames.get(m);
	{
		let h = m, g = h.$container, _ = m.$type;
		for (; !isParserRule(g);) (isGroup(g) || isAlternatives(g) || isUnorderedGroup(g)) && (_ = g.elements.indexOf(h).toString() + ":" + _), h = g, g = g.$container;
		return _ = g.name + ":" + _, e.ruleNames.set(m, _), _;
	}
}
function getToken(e, m) {
	let h = e.tokens[m];
	if (!h) throw Error(`Token "${m}" not found."`);
	return h;
}
function createCompletionParser(e) {
	let m = e.Grammar, h = e.parser.Lexer, g = new LangiumCompletionParser(e);
	return createParser(m, g, h.definition), g.finalize(), g;
}
function createLangiumParser(e) {
	let m = prepareLangiumParser(e);
	return m.finalize(), m;
}
function prepareLangiumParser(e) {
	let m = e.Grammar, h = e.parser.Lexer;
	return createParser(m, new LangiumParser(e), h.definition);
}
var DefaultTokenBuilder = class {
	constructor() {
		this.diagnostics = [];
	}
	buildTokens(e, m) {
		let h = stream(getAllReachableRules(e, !1)), g = this.buildTerminalTokens(h), _ = this.buildKeywordTokens(h, g, m);
		return g.forEach((e) => {
			let m = e.PATTERN;
			typeof m == "object" && m && "test" in m && isWhitespace(m) ? _.unshift(e) : _.push(e);
		}), _;
	}
	flushLexingReport(e) {
		return { diagnostics: this.popDiagnostics() };
	}
	popDiagnostics() {
		let e = [...this.diagnostics];
		return this.diagnostics = [], e;
	}
	buildTerminalTokens(e) {
		return e.filter(isTerminalRule).filter((e) => !e.fragment).map((e) => this.buildTerminalToken(e)).toArray();
	}
	buildTerminalToken(e) {
		let m = terminalRegex(e), h = this.requiresCustomPattern(m) ? this.regexPatternFunction(m) : m, g = {
			name: e.name,
			PATTERN: h
		};
		return typeof h == "function" && (g.LINE_BREAKS = !0), e.hidden && (g.GROUP = isWhitespace(m) ? Lexer.SKIPPED : "hidden"), g;
	}
	requiresCustomPattern(e) {
		return e.flags.includes("u") || e.flags.includes("s") ? !0 : !!(e.source.includes("?<=") || e.source.includes("?<!"));
	}
	regexPatternFunction(e) {
		let m = new RegExp(e, e.flags + "y");
		return (e, h) => (m.lastIndex = h, m.exec(e));
	}
	buildKeywordTokens(e, m, h) {
		return e.filter(isParserRule).flatMap((e) => streamAllContents(e).filter(isKeyword)).distinct((e) => e.value).toArray().sort((e, m) => m.value.length - e.value.length).map((e) => this.buildKeywordToken(e, m, !!h?.caseInsensitive));
	}
	buildKeywordToken(e, m, h) {
		let g = this.buildKeywordPattern(e, h), _ = {
			name: e.value,
			PATTERN: g,
			LONGER_ALT: this.findLongerAlt(e, m)
		};
		return typeof g == "function" && (_.LINE_BREAKS = !0), _;
	}
	buildKeywordPattern(e, m) {
		return m ? new RegExp(getCaseInsensitivePattern(e.value)) : e.value;
	}
	findLongerAlt(e, m) {
		return m.reduce((m, h) => {
			let g = h?.PATTERN;
			return g?.source && partialMatches("^" + g.source + "$", e.value) && m.push(h), m;
		}, []);
	}
}, DefaultValueConverter = class {
	convert(e, m) {
		let h = m.grammarSource;
		if (isCrossReference(h) && (h = getCrossReferenceTerminal(h)), isRuleCall(h)) {
			let g = h.rule.ref;
			if (!g) throw Error("This cst node was not parsed by a rule.");
			return this.runConverter(g, e, m);
		}
		return e;
	}
	runConverter(e, m, h) {
		switch (e.name.toUpperCase()) {
			case "INT": return ValueConverter.convertInt(m);
			case "STRING": return ValueConverter.convertString(m);
			case "ID": return ValueConverter.convertID(m);
		}
		switch (getRuleType(e)?.toLowerCase()) {
			case "number": return ValueConverter.convertNumber(m);
			case "boolean": return ValueConverter.convertBoolean(m);
			case "bigint": return ValueConverter.convertBigint(m);
			case "date": return ValueConverter.convertDate(m);
			default: return m;
		}
	}
}, ValueConverter;
(function(e) {
	function m(e) {
		let m = "";
		for (let g = 1; g < e.length - 1; g++) {
			let _ = e.charAt(g);
			if (_ === "\\") {
				let _ = e.charAt(++g);
				m += h(_);
			} else m += _;
		}
		return m;
	}
	e.convertString = m;
	function h(e) {
		switch (e) {
			case "b": return "\b";
			case "f": return "\f";
			case "n": return "\n";
			case "r": return "\r";
			case "t": return "	";
			case "v": return "\v";
			case "0": return "\0";
			default: return e;
		}
	}
	function g(e) {
		return e.charAt(0) === "^" ? e.substring(1) : e;
	}
	e.convertID = g;
	function _(e) {
		return parseInt(e);
	}
	e.convertInt = _;
	function v(e) {
		return BigInt(e);
	}
	e.convertBigint = v;
	function y(e) {
		return new Date(e);
	}
	e.convertDate = y;
	function b(e) {
		return Number(e);
	}
	e.convertNumber = b;
	function x(e) {
		return e.toLowerCase() === "true";
	}
	e.convertBoolean = x;
})(ValueConverter ||= {});
var require_ral = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var m;
	function h() {
		if (m === void 0) throw Error("No runtime abstraction layer installed");
		return m;
	}
	(function(e) {
		function h(e) {
			if (e === void 0) throw Error("No runtime abstraction layer provided");
			m = e;
		}
		e.install = h;
	})(h ||= {}), e.default = h;
})), require_is = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function m(e) {
		return e === !0 || e === !1;
	}
	e.boolean = m;
	function h(e) {
		return typeof e == "string" || e instanceof String;
	}
	e.string = h;
	function g(e) {
		return typeof e == "number" || e instanceof Number;
	}
	e.number = g;
	function _(e) {
		return e instanceof Error;
	}
	e.error = _;
	function v(e) {
		return typeof e == "function";
	}
	e.func = v;
	function y(e) {
		return Array.isArray(e);
	}
	e.array = y;
	function b(e) {
		return y(e) && e.every((e) => h(e));
	}
	e.stringArray = b;
})), require_events = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var m = require_ral(), h;
	(function(e) {
		let m = { dispose() {} };
		e.None = function() {
			return m;
		};
	})(h || (e.Event = h = {}));
	var g = class {
		add(e, m = null, h) {
			this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(m), Array.isArray(h) && h.push({ dispose: () => this.remove(e, m) });
		}
		remove(e, m = null) {
			if (!this._callbacks) return;
			let h = !1;
			for (let g = 0, _ = this._callbacks.length; g < _; g++) if (this._callbacks[g] === e) if (this._contexts[g] === m) {
				this._callbacks.splice(g, 1), this._contexts.splice(g, 1);
				return;
			} else h = !0;
			if (h) throw Error("When adding a listener with a context, you should remove it with the same context");
		}
		invoke(...e) {
			if (!this._callbacks) return [];
			let h = [], g = this._callbacks.slice(0), _ = this._contexts.slice(0);
			for (let v = 0, y = g.length; v < y; v++) try {
				h.push(g[v].apply(_[v], e));
			} catch (e) {
				(0, m.default)().console.error(e);
			}
			return h;
		}
		isEmpty() {
			return !this._callbacks || this._callbacks.length === 0;
		}
		dispose() {
			this._callbacks = void 0, this._contexts = void 0;
		}
	}, _ = class e {
		constructor(e) {
			this._options = e;
		}
		get event() {
			return this._event ||= (m, h, _) => {
				this._callbacks ||= new g(), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(m, h);
				let v = { dispose: () => {
					this._callbacks && (this._callbacks.remove(m, h), v.dispose = e._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
				} };
				return Array.isArray(_) && _.push(v), v;
			}, this._event;
		}
		fire(e) {
			this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
		}
		dispose() {
			this._callbacks &&= (this._callbacks.dispose(), void 0);
		}
	};
	e.Emitter = _, _._noop = function() {};
})), require_cancellation = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var m = require_ral(), h = require_is(), g = require_events(), _;
	(function(e) {
		e.None = Object.freeze({
			isCancellationRequested: !1,
			onCancellationRequested: g.Event.None
		}), e.Cancelled = Object.freeze({
			isCancellationRequested: !0,
			onCancellationRequested: g.Event.None
		});
		function m(m) {
			let g = m;
			return g && (g === e.None || g === e.Cancelled || h.boolean(g.isCancellationRequested) && !!g.onCancellationRequested);
		}
		e.is = m;
	})(_ || (e.CancellationToken = _ = {}));
	var v = Object.freeze(function(e, h) {
		let g = (0, m.default)().timer.setTimeout(e.bind(h), 0);
		return { dispose() {
			g.dispose();
		} };
	}), y = class {
		constructor() {
			this._isCancelled = !1;
		}
		cancel() {
			this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
		}
		get isCancellationRequested() {
			return this._isCancelled;
		}
		get onCancellationRequested() {
			return this._isCancelled ? v : (this._emitter ||= new g.Emitter(), this._emitter.event);
		}
		dispose() {
			this._emitter &&= (this._emitter.dispose(), void 0);
		}
	};
	e.CancellationTokenSource = class {
		get token() {
			return this._token ||= new y(), this._token;
		}
		cancel() {
			this._token ? this._token.cancel() : this._token = _.Cancelled;
		}
		dispose() {
			this._token ? this._token instanceof y && this._token.dispose() : this._token = _.None;
		}
	};
})), cancellation_exports = {};
__reExport(cancellation_exports, /* @__PURE__ */ __toESM(require_cancellation(), 1));
function delayNextTick() {
	return new Promise((e) => {
		typeof setImmediate > "u" ? setTimeout(e, 0) : setImmediate(e);
	});
}
var lastTick = 0, globalInterruptionPeriod = 10;
function startCancelableOperation() {
	return lastTick = performance.now(), new cancellation_exports.CancellationTokenSource();
}
function setInterruptionPeriod(e) {
	globalInterruptionPeriod = e;
}
const OperationCancelled = Symbol("OperationCancelled");
function isOperationCancelled(e) {
	return e === OperationCancelled;
}
async function interruptAndCheck(e) {
	if (e === cancellation_exports.CancellationToken.None) return;
	let m = performance.now();
	if (m - lastTick >= globalInterruptionPeriod && (lastTick = m, await delayNextTick(), lastTick = performance.now()), e.isCancellationRequested) throw OperationCancelled;
}
var Deferred = class {
	constructor() {
		this.promise = new Promise((e, m) => {
			this.resolve = (m) => (e(m), this), this.reject = (e) => (m(e), this);
		});
	}
}, FullTextDocument = class e {
	constructor(e, m, h, g) {
		this._uri = e, this._languageId = m, this._version = h, this._content = g, this._lineOffsets = void 0;
	}
	get uri() {
		return this._uri;
	}
	get languageId() {
		return this._languageId;
	}
	get version() {
		return this._version;
	}
	getText(e) {
		if (e) {
			let m = this.offsetAt(e.start), h = this.offsetAt(e.end);
			return this._content.substring(m, h);
		}
		return this._content;
	}
	update(m, h) {
		for (let h of m) if (e.isIncremental(h)) {
			let e = getWellformedRange(h.range), m = this.offsetAt(e.start), g = this.offsetAt(e.end);
			this._content = this._content.substring(0, m) + h.text + this._content.substring(g, this._content.length);
			let _ = Math.max(e.start.line, 0), v = Math.max(e.end.line, 0), y = this._lineOffsets, b = computeLineOffsets(h.text, !1, m);
			if (v - _ === b.length) for (let e = 0, m = b.length; e < m; e++) y[e + _ + 1] = b[e];
			else b.length < 1e4 ? y.splice(_ + 1, v - _, ...b) : this._lineOffsets = y = y.slice(0, _ + 1).concat(b, y.slice(v + 1));
			let x = h.text.length - (g - m);
			if (x !== 0) for (let e = _ + 1 + b.length, m = y.length; e < m; e++) y[e] = y[e] + x;
		} else if (e.isFull(h)) this._content = h.text, this._lineOffsets = void 0;
		else throw Error("Unknown change event received");
		this._version = h;
	}
	getLineOffsets() {
		return this._lineOffsets === void 0 && (this._lineOffsets = computeLineOffsets(this._content, !0)), this._lineOffsets;
	}
	positionAt(e) {
		e = Math.max(Math.min(e, this._content.length), 0);
		let m = this.getLineOffsets(), h = 0, g = m.length;
		if (g === 0) return {
			line: 0,
			character: e
		};
		for (; h < g;) {
			let _ = Math.floor((h + g) / 2);
			m[_] > e ? g = _ : h = _ + 1;
		}
		let _ = h - 1;
		return e = this.ensureBeforeEOL(e, m[_]), {
			line: _,
			character: e - m[_]
		};
	}
	offsetAt(e) {
		let m = this.getLineOffsets();
		if (e.line >= m.length) return this._content.length;
		if (e.line < 0) return 0;
		let h = m[e.line];
		if (e.character <= 0) return h;
		let g = e.line + 1 < m.length ? m[e.line + 1] : this._content.length, _ = Math.min(h + e.character, g);
		return this.ensureBeforeEOL(_, h);
	}
	ensureBeforeEOL(e, m) {
		for (; e > m && isEOL(this._content.charCodeAt(e - 1));) e--;
		return e;
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
	static isIncremental(e) {
		let m = e;
		return m != null && typeof m.text == "string" && m.range !== void 0 && (m.rangeLength === void 0 || typeof m.rangeLength == "number");
	}
	static isFull(e) {
		let m = e;
		return m != null && typeof m.text == "string" && m.range === void 0 && m.rangeLength === void 0;
	}
}, TextDocument;
(function(e) {
	function m(e, m, h, g) {
		return new FullTextDocument(e, m, h, g);
	}
	e.create = m;
	function h(e, m, h) {
		if (e instanceof FullTextDocument) return e.update(m, h), e;
		throw Error("TextDocument.update: document must be created by TextDocument.create");
	}
	e.update = h;
	function g(e, m) {
		let h = e.getText(), g = mergeSort(m.map(getWellformedEdit), (e, m) => {
			let h = e.range.start.line - m.range.start.line;
			return h === 0 ? e.range.start.character - m.range.start.character : h;
		}), _ = 0, v = [];
		for (let m of g) {
			let g = e.offsetAt(m.range.start);
			if (g < _) throw Error("Overlapping edit");
			g > _ && v.push(h.substring(_, g)), m.newText.length && v.push(m.newText), _ = e.offsetAt(m.range.end);
		}
		return v.push(h.substr(_)), v.join("");
	}
	e.applyEdits = g;
})(TextDocument ||= {});
function mergeSort(e, m) {
	if (e.length <= 1) return e;
	let h = e.length / 2 | 0, g = e.slice(0, h), _ = e.slice(h);
	mergeSort(g, m), mergeSort(_, m);
	let v = 0, y = 0, b = 0;
	for (; v < g.length && y < _.length;) m(g[v], _[y]) <= 0 ? e[b++] = g[v++] : e[b++] = _[y++];
	for (; v < g.length;) e[b++] = g[v++];
	for (; y < _.length;) e[b++] = _[y++];
	return e;
}
function computeLineOffsets(e, m, h = 0) {
	let g = m ? [h] : [];
	for (let m = 0; m < e.length; m++) {
		let _ = e.charCodeAt(m);
		isEOL(_) && (_ === 13 && m + 1 < e.length && e.charCodeAt(m + 1) === 10 && m++, g.push(h + m + 1));
	}
	return g;
}
function isEOL(e) {
	return e === 13 || e === 10;
}
function getWellformedRange(e) {
	let m = e.start, h = e.end;
	return m.line > h.line || m.line === h.line && m.character > h.character ? {
		start: h,
		end: m
	} : e;
}
function getWellformedEdit(e) {
	let m = getWellformedRange(e.range);
	return m === e.range ? e : {
		newText: e.newText,
		range: m
	};
}
init_dist();
var LIB;
(() => {
	var e = { 470: (e) => {
		function m(e) {
			if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
		}
		function h(e, m) {
			for (var h, g = "", _ = 0, v = -1, y = 0, b = 0; b <= e.length; ++b) {
				if (b < e.length) h = e.charCodeAt(b);
				else {
					if (h === 47) break;
					h = 47;
				}
				if (h === 47) {
					if (!(v === b - 1 || y === 1)) if (v !== b - 1 && y === 2) {
						if (g.length < 2 || _ !== 2 || g.charCodeAt(g.length - 1) !== 46 || g.charCodeAt(g.length - 2) !== 46) {
							if (g.length > 2) {
								var x = g.lastIndexOf("/");
								if (x !== g.length - 1) {
									x === -1 ? (g = "", _ = 0) : _ = (g = g.slice(0, x)).length - 1 - g.lastIndexOf("/"), v = b, y = 0;
									continue;
								}
							} else if (g.length === 2 || g.length === 1) {
								g = "", _ = 0, v = b, y = 0;
								continue;
							}
						}
						m && (g.length > 0 ? g += "/.." : g = "..", _ = 2);
					} else g.length > 0 ? g += "/" + e.slice(v + 1, b) : g = e.slice(v + 1, b), _ = b - v - 1;
					v = b, y = 0;
				} else h === 46 && y !== -1 ? ++y : y = -1;
			}
			return g;
		}
		var g = {
			resolve: function() {
				for (var e, g = "", v = !1, y = arguments.length - 1; y >= -1 && !v; y--) {
					var b;
					y >= 0 ? b = arguments[y] : (e === void 0 && (e = process$1.cwd()), b = e), m(b), b.length !== 0 && (g = b + "/" + g, v = b.charCodeAt(0) === 47);
				}
				return g = h(g, !v), v ? g.length > 0 ? "/" + g : "/" : g.length > 0 ? g : ".";
			},
			normalize: function(e) {
				if (m(e), e.length === 0) return ".";
				var g = e.charCodeAt(0) === 47, _ = e.charCodeAt(e.length - 1) === 47;
				return (e = h(e, !g)).length !== 0 || g || (e = "."), e.length > 0 && _ && (e += "/"), g ? "/" + e : e;
			},
			isAbsolute: function(e) {
				return m(e), e.length > 0 && e.charCodeAt(0) === 47;
			},
			join: function() {
				if (arguments.length === 0) return ".";
				for (var e, h = 0; h < arguments.length; ++h) {
					var _ = arguments[h];
					m(_), _.length > 0 && (e === void 0 ? e = _ : e += "/" + _);
				}
				return e === void 0 ? "." : g.normalize(e);
			},
			relative: function(e, h) {
				if (m(e), m(h), e === h || (e = g.resolve(e)) === (h = g.resolve(h))) return "";
				for (var _ = 1; _ < e.length && e.charCodeAt(_) === 47; ++_);
				for (var v = e.length, y = v - _, b = 1; b < h.length && h.charCodeAt(b) === 47; ++b);
				for (var x = h.length - b, S = y < x ? y : x, C = -1, w = 0; w <= S; ++w) {
					if (w === S) {
						if (x > S) {
							if (h.charCodeAt(b + w) === 47) return h.slice(b + w + 1);
							if (w === 0) return h.slice(b + w);
						} else y > S && (e.charCodeAt(_ + w) === 47 ? C = w : w === 0 && (C = 0));
						break;
					}
					var T = e.charCodeAt(_ + w);
					if (T !== h.charCodeAt(b + w)) break;
					T === 47 && (C = w);
				}
				var E = "";
				for (w = _ + C + 1; w <= v; ++w) w !== v && e.charCodeAt(w) !== 47 || (E.length === 0 ? E += ".." : E += "/..");
				return E.length > 0 ? E + h.slice(b + C) : (b += C, h.charCodeAt(b) === 47 && ++b, h.slice(b));
			},
			_makeLong: function(e) {
				return e;
			},
			dirname: function(e) {
				if (m(e), e.length === 0) return ".";
				for (var h = e.charCodeAt(0), g = h === 47, _ = -1, v = !0, y = e.length - 1; y >= 1; --y) if ((h = e.charCodeAt(y)) === 47) {
					if (!v) {
						_ = y;
						break;
					}
				} else v = !1;
				return _ === -1 ? g ? "/" : "." : g && _ === 1 ? "//" : e.slice(0, _);
			},
			basename: function(e, h) {
				if (h !== void 0 && typeof h != "string") throw TypeError("\"ext\" argument must be a string");
				m(e);
				var g, _ = 0, v = -1, y = !0;
				if (h !== void 0 && h.length > 0 && h.length <= e.length) {
					if (h.length === e.length && h === e) return "";
					var b = h.length - 1, x = -1;
					for (g = e.length - 1; g >= 0; --g) {
						var S = e.charCodeAt(g);
						if (S === 47) {
							if (!y) {
								_ = g + 1;
								break;
							}
						} else x === -1 && (y = !1, x = g + 1), b >= 0 && (S === h.charCodeAt(b) ? --b == -1 && (v = g) : (b = -1, v = x));
					}
					return _ === v ? v = x : v === -1 && (v = e.length), e.slice(_, v);
				}
				for (g = e.length - 1; g >= 0; --g) if (e.charCodeAt(g) === 47) {
					if (!y) {
						_ = g + 1;
						break;
					}
				} else v === -1 && (y = !1, v = g + 1);
				return v === -1 ? "" : e.slice(_, v);
			},
			extname: function(e) {
				m(e);
				for (var h = -1, g = 0, _ = -1, v = !0, y = 0, b = e.length - 1; b >= 0; --b) {
					var x = e.charCodeAt(b);
					if (x !== 47) _ === -1 && (v = !1, _ = b + 1), x === 46 ? h === -1 ? h = b : y !== 1 && (y = 1) : h !== -1 && (y = -1);
					else if (!v) {
						g = b + 1;
						break;
					}
				}
				return h === -1 || _ === -1 || y === 0 || y === 1 && h === _ - 1 && h === g + 1 ? "" : e.slice(h, _);
			},
			format: function(e) {
				if (typeof e != "object" || !e) throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
				return function(e, m) {
					var h = m.dir || m.root, g = m.base || (m.name || "") + (m.ext || "");
					return h ? h === m.root ? h + g : h + "/" + g : g;
				}(0, e);
			},
			parse: function(e) {
				m(e);
				var h = {
					root: "",
					dir: "",
					base: "",
					ext: "",
					name: ""
				};
				if (e.length === 0) return h;
				var g, _ = e.charCodeAt(0), v = _ === 47;
				v ? (h.root = "/", g = 1) : g = 0;
				for (var y = -1, b = 0, x = -1, S = !0, C = e.length - 1, w = 0; C >= g; --C) if ((_ = e.charCodeAt(C)) !== 47) x === -1 && (S = !1, x = C + 1), _ === 46 ? y === -1 ? y = C : w !== 1 && (w = 1) : y !== -1 && (w = -1);
				else if (!S) {
					b = C + 1;
					break;
				}
				return y === -1 || x === -1 || w === 0 || w === 1 && y === x - 1 && y === b + 1 ? x !== -1 && (h.base = h.name = b === 0 && v ? e.slice(1, x) : e.slice(b, x)) : (b === 0 && v ? (h.name = e.slice(1, y), h.base = e.slice(1, x)) : (h.name = e.slice(b, y), h.base = e.slice(b, x)), h.ext = e.slice(y, x)), b > 0 ? h.dir = e.slice(0, b - 1) : v && (h.dir = "/"), h;
			},
			sep: "/",
			delimiter: ":",
			win32: null,
			posix: null
		};
		g.posix = g, e.exports = g;
	} }, m = {};
	function h(g) {
		var _ = m[g];
		if (_ !== void 0) return _.exports;
		var v = m[g] = { exports: {} };
		return e[g](v, v.exports, h), v.exports;
	}
	h.d = (e, m) => {
		for (var g in m) h.o(m, g) && !h.o(e, g) && Object.defineProperty(e, g, {
			enumerable: !0,
			get: m[g]
		});
	}, h.o = (e, m) => Object.prototype.hasOwnProperty.call(e, m), h.r = (e) => {
		typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
	};
	var g = {};
	(() => {
		let e;
		h.r(g), h.d(g, {
			URI: () => S,
			Utils: () => F
		}), typeof process$1 == "object" ? e = process$1.platform === "win32" : typeof navigator == "object" && (e = navigator.userAgent.indexOf("Windows") >= 0);
		let m = /^\w[\w\d+.-]*$/, v = /^\//, y = /^\/\//;
		function b(e, h) {
			if (!e.scheme && h) throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
			if (e.scheme && !m.test(e.scheme)) throw Error("[UriError]: Scheme contains illegal characters.");
			if (e.path) {
				if (e.authority) {
					if (!v.test(e.path)) throw Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
				} else if (y.test(e.path)) throw Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
			}
		}
		let x = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
		class S {
			static isUri(e) {
				return e instanceof S || !!e && typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function";
			}
			scheme;
			authority;
			path;
			query;
			fragment;
			constructor(e, m, h, g, _, v = !1) {
				typeof e == "object" ? (this.scheme = e.scheme || "", this.authority = e.authority || "", this.path = e.path || "", this.query = e.query || "", this.fragment = e.fragment || "") : (this.scheme = function(e, m) {
					return e || m ? e : "file";
				}(e, v), this.authority = m || "", this.path = function(e, m) {
					switch (e) {
						case "https":
						case "http":
						case "file": m ? m[0] !== "/" && (m = "/" + m) : m = "/";
					}
					return m;
				}(this.scheme, h || ""), this.query = g || "", this.fragment = _ || "", b(this, v));
			}
			get fsPath() {
				return O(this, !1);
			}
			with(e) {
				if (!e) return this;
				let { scheme: m, authority: h, path: g, query: _, fragment: v } = e;
				return m === void 0 ? m = this.scheme : m === null && (m = ""), h === void 0 ? h = this.authority : h === null && (h = ""), g === void 0 ? g = this.path : g === null && (g = ""), _ === void 0 ? _ = this.query : _ === null && (_ = ""), v === void 0 ? v = this.fragment : v === null && (v = ""), m === this.scheme && h === this.authority && g === this.path && _ === this.query && v === this.fragment ? this : new w(m, h, g, _, v);
			}
			static parse(e, m = !1) {
				let h = x.exec(e);
				return h ? new w(h[2] || "", M(h[4] || ""), M(h[5] || ""), M(h[7] || ""), M(h[9] || ""), m) : new w("", "", "", "", "");
			}
			static file(m) {
				let h = "";
				if (e && (m = m.replace(/\\/g, "/")), m[0] === "/" && m[1] === "/") {
					let e = m.indexOf("/", 2);
					e === -1 ? (h = m.substring(2), m = "/") : (h = m.substring(2, e), m = m.substring(e) || "/");
				}
				return new w("file", h, m, "", "");
			}
			static from(e) {
				let m = new w(e.scheme, e.authority, e.path, e.query, e.fragment);
				return b(m, !0), m;
			}
			toString(e = !1) {
				return k(this, e);
			}
			toJSON() {
				return this;
			}
			static revive(e) {
				if (e) {
					if (e instanceof S) return e;
					{
						let m = new w(e);
						return m._formatted = e.external, m._fsPath = e._sep === C ? e.fsPath : null, m;
					}
				}
				return e;
			}
		}
		let C = e ? 1 : void 0;
		class w extends S {
			_formatted = null;
			_fsPath = null;
			get fsPath() {
				return this._fsPath ||= O(this, !1), this._fsPath;
			}
			toString(e = !1) {
				return e ? k(this, !0) : (this._formatted ||= k(this, !1), this._formatted);
			}
			toJSON() {
				let e = { $mid: 1 };
				return this._fsPath && (e.fsPath = this._fsPath, e._sep = C), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
			}
		}
		let T = {
			58: "%3A",
			47: "%2F",
			63: "%3F",
			35: "%23",
			91: "%5B",
			93: "%5D",
			64: "%40",
			33: "%21",
			36: "%24",
			38: "%26",
			39: "%27",
			40: "%28",
			41: "%29",
			42: "%2A",
			43: "%2B",
			44: "%2C",
			59: "%3B",
			61: "%3D",
			32: "%20"
		};
		function E(e, m, h) {
			let g, _ = -1;
			for (let v = 0; v < e.length; v++) {
				let y = e.charCodeAt(v);
				if (y >= 97 && y <= 122 || y >= 65 && y <= 90 || y >= 48 && y <= 57 || y === 45 || y === 46 || y === 95 || y === 126 || m && y === 47 || h && y === 91 || h && y === 93 || h && y === 58) _ !== -1 && (g += encodeURIComponent(e.substring(_, v)), _ = -1), g !== void 0 && (g += e.charAt(v));
				else {
					g === void 0 && (g = e.substr(0, v));
					let m = T[y];
					m === void 0 ? _ === -1 && (_ = v) : (_ !== -1 && (g += encodeURIComponent(e.substring(_, v)), _ = -1), g += m);
				}
			}
			return _ !== -1 && (g += encodeURIComponent(e.substring(_))), g === void 0 ? e : g;
		}
		function D(e) {
			let m;
			for (let h = 0; h < e.length; h++) {
				let g = e.charCodeAt(h);
				g === 35 || g === 63 ? (m === void 0 && (m = e.substr(0, h)), m += T[g]) : m !== void 0 && (m += e[h]);
			}
			return m === void 0 ? e : m;
		}
		function O(m, h) {
			let g;
			return g = m.authority && m.path.length > 1 && m.scheme === "file" ? `//${m.authority}${m.path}` : m.path.charCodeAt(0) === 47 && (m.path.charCodeAt(1) >= 65 && m.path.charCodeAt(1) <= 90 || m.path.charCodeAt(1) >= 97 && m.path.charCodeAt(1) <= 122) && m.path.charCodeAt(2) === 58 ? h ? m.path.substr(1) : m.path[1].toLowerCase() + m.path.substr(2) : m.path, e && (g = g.replace(/\//g, "\\")), g;
		}
		function k(e, m) {
			let h = m ? D : E, g = "", { scheme: _, authority: v, path: y, query: b, fragment: x } = e;
			if (_ && (g += _, g += ":"), (v || _ === "file") && (g += "/", g += "/"), v) {
				let e = v.indexOf("@");
				if (e !== -1) {
					let m = v.substr(0, e);
					v = v.substr(e + 1), e = m.lastIndexOf(":"), e === -1 ? g += h(m, !1, !1) : (g += h(m.substr(0, e), !1, !1), g += ":", g += h(m.substr(e + 1), !1, !0)), g += "@";
				}
				v = v.toLowerCase(), e = v.lastIndexOf(":"), e === -1 ? g += h(v, !1, !0) : (g += h(v.substr(0, e), !1, !0), g += v.substr(e));
			}
			if (y) {
				if (y.length >= 3 && y.charCodeAt(0) === 47 && y.charCodeAt(2) === 58) {
					let e = y.charCodeAt(1);
					e >= 65 && e <= 90 && (y = `/${String.fromCharCode(e + 32)}:${y.substr(3)}`);
				} else if (y.length >= 2 && y.charCodeAt(1) === 58) {
					let e = y.charCodeAt(0);
					e >= 65 && e <= 90 && (y = `${String.fromCharCode(e + 32)}:${y.substr(2)}`);
				}
				g += h(y, !0, !1);
			}
			return b && (g += "?", g += h(b, !1, !1)), x && (g += "#", g += m ? x : E(x, !1, !1)), g;
		}
		function A(e) {
			try {
				return decodeURIComponent(e);
			} catch {
				return e.length > 3 ? e.substr(0, 3) + A(e.substr(3)) : e;
			}
		}
		let j = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
		function M(e) {
			return e.match(j) ? e.replace(j, ((e) => A(e))) : e;
		}
		var N = h(470);
		let P = N.posix || N;
		var F;
		(function(e) {
			e.joinPath = function(e, ...m) {
				return e.with({ path: P.join(e.path, ...m) });
			}, e.resolvePath = function(e, ...m) {
				let h = e.path, g = !1;
				h[0] !== "/" && (h = "/" + h, g = !0);
				let _ = P.resolve(h, ...m);
				return g && _[0] === "/" && !e.authority && (_ = _.substring(1)), e.with({ path: _ });
			}, e.dirname = function(e) {
				if (e.path.length === 0 || e.path === "/") return e;
				let m = P.dirname(e.path);
				return m.length === 1 && m.charCodeAt(0) === 46 && (m = ""), e.with({ path: m });
			}, e.basename = function(e) {
				return P.basename(e.path);
			}, e.extname = function(e) {
				return P.extname(e.path);
			};
		})(F ||= {});
	})(), LIB = g;
})();
const { URI, Utils } = LIB;
var UriUtils;
(function(e) {
	e.basename = Utils.basename, e.dirname = Utils.dirname, e.extname = Utils.extname, e.joinPath = Utils.joinPath, e.resolvePath = Utils.resolvePath;
	function m(e, m) {
		return e?.toString() === m?.toString();
	}
	e.equals = m;
	function h(e, m) {
		let h = typeof e == "string" ? e : e.path, g = typeof m == "string" ? m : m.path, _ = h.split("/").filter((e) => e.length > 0), v = g.split("/").filter((e) => e.length > 0), y = 0;
		for (; y < _.length && _[y] === v[y]; y++);
		return "../".repeat(_.length - y) + v.slice(y).join("/");
	}
	e.relative = h;
	function g(e) {
		return URI.parse(e.toString()).toString();
	}
	e.normalize = g;
})(UriUtils ||= {});
var DocumentState;
(function(e) {
	e[e.Changed = 0] = "Changed", e[e.Parsed = 1] = "Parsed", e[e.IndexedContent = 2] = "IndexedContent", e[e.ComputedScopes = 3] = "ComputedScopes", e[e.Linked = 4] = "Linked", e[e.IndexedReferences = 5] = "IndexedReferences", e[e.Validated = 6] = "Validated";
})(DocumentState ||= {});
var DefaultLangiumDocumentFactory = class {
	constructor(e) {
		this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
	}
	async fromUri(e, m = cancellation_exports.CancellationToken.None) {
		let h = await this.fileSystemProvider.readFile(e);
		return this.createAsync(e, h, m);
	}
	fromTextDocument(e, m, h) {
		return m ??= URI.parse(e.uri), cancellation_exports.CancellationToken.is(h) ? this.createAsync(m, e, h) : this.create(m, e, h);
	}
	fromString(e, m, h) {
		return cancellation_exports.CancellationToken.is(h) ? this.createAsync(m, e, h) : this.create(m, e, h);
	}
	fromModel(e, m) {
		return this.create(m, { $model: e });
	}
	create(e, m, h) {
		if (typeof m == "string") {
			let g = this.parse(e, m, h);
			return this.createLangiumDocument(g, e, void 0, m);
		} else if ("$model" in m) {
			let h = {
				value: m.$model,
				parserErrors: [],
				lexerErrors: []
			};
			return this.createLangiumDocument(h, e);
		} else {
			let g = this.parse(e, m.getText(), h);
			return this.createLangiumDocument(g, e, m);
		}
	}
	async createAsync(e, m, h) {
		if (typeof m == "string") {
			let g = await this.parseAsync(e, m, h);
			return this.createLangiumDocument(g, e, void 0, m);
		} else {
			let g = await this.parseAsync(e, m.getText(), h);
			return this.createLangiumDocument(g, e, m);
		}
	}
	createLangiumDocument(e, m, h, g) {
		let _;
		if (h) _ = {
			parseResult: e,
			uri: m,
			state: DocumentState.Parsed,
			references: [],
			textDocument: h
		};
		else {
			let h = this.createTextDocumentGetter(m, g);
			_ = {
				parseResult: e,
				uri: m,
				state: DocumentState.Parsed,
				references: [],
				get textDocument() {
					return h();
				}
			};
		}
		return e.value.$document = _, _;
	}
	async update(e, m) {
		let h = e.parseResult.value.$cstNode?.root.fullText, g = this.textDocuments?.get(e.uri.toString()), _ = g ? g.getText() : await this.fileSystemProvider.readFile(e.uri);
		if (g) Object.defineProperty(e, "textDocument", { value: g });
		else {
			let m = this.createTextDocumentGetter(e.uri, _);
			Object.defineProperty(e, "textDocument", { get: m });
		}
		return h !== _ && (e.parseResult = await this.parseAsync(e.uri, _, m), e.parseResult.value.$document = e), e.state = DocumentState.Parsed, e;
	}
	parse(e, m, h) {
		return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(m, h);
	}
	parseAsync(e, m, h) {
		return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(m, h);
	}
	createTextDocumentGetter(e, m) {
		let h = this.serviceRegistry, g;
		return () => g ??= TextDocument.create(e.toString(), h.getServices(e).LanguageMetaData.languageId, 0, m ?? "");
	}
}, DefaultLangiumDocuments = class {
	constructor(e) {
		this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
	}
	get all() {
		return stream(this.documentMap.values());
	}
	addDocument(e) {
		let m = e.uri.toString();
		if (this.documentMap.has(m)) throw Error(`A document with the URI '${m}' is already present.`);
		this.documentMap.set(m, e);
	}
	getDocument(e) {
		let m = e.toString();
		return this.documentMap.get(m);
	}
	async getOrCreateDocument(e, m) {
		let h = this.getDocument(e);
		return h || (h = await this.langiumDocumentFactory.fromUri(e, m), this.addDocument(h), h);
	}
	createDocument(e, m, h) {
		if (h) return this.langiumDocumentFactory.fromString(m, e, h).then((e) => (this.addDocument(e), e));
		{
			let h = this.langiumDocumentFactory.fromString(m, e);
			return this.addDocument(h), h;
		}
	}
	hasDocument(e) {
		return this.documentMap.has(e.toString());
	}
	invalidateDocument(e) {
		let m = e.toString(), h = this.documentMap.get(m);
		return h && (this.serviceRegistry.getServices(e).references.Linker.unlink(h), h.state = DocumentState.Changed, h.precomputedScopes = void 0, h.diagnostics = void 0), h;
	}
	deleteDocument(e) {
		let m = e.toString(), h = this.documentMap.get(m);
		return h && (h.state = DocumentState.Changed, this.documentMap.delete(m)), h;
	}
}, ref_resolving = Symbol("ref_resolving"), DefaultLinker = class {
	constructor(e) {
		this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
	}
	async link(e, m = cancellation_exports.CancellationToken.None) {
		for (let h of streamAst(e.parseResult.value)) await interruptAndCheck(m), streamReferences(h).forEach((m) => this.doLink(m, e));
	}
	doLink(e, m) {
		let h = e.reference;
		if (h._ref === void 0) {
			h._ref = ref_resolving;
			try {
				let m = this.getCandidate(e);
				isLinkingError(m) ? h._ref = m : (h._nodeDescription = m, this.langiumDocuments().hasDocument(m.documentUri) ? h._ref = this.loadAstNode(m) ?? this.createLinkingError(e, m) : h._ref = void 0);
			} catch (m) {
				console.error(`An error occurred while resolving reference to '${h.$refText}':`, m);
				let g = m.message ?? String(m);
				h._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${h.$refText}': ${g}` });
			}
			m.references.push(h);
		}
	}
	unlink(e) {
		for (let m of e.references) delete m._ref, delete m._nodeDescription;
		e.references = [];
	}
	getCandidate(e) {
		return this.scopeProvider.getScope(e).getElement(e.reference.$refText) ?? this.createLinkingError(e);
	}
	buildReference(e, m, h, g) {
		let _ = this, v = {
			$refNode: h,
			$refText: g,
			get ref() {
				if (isAstNode(this._ref)) return this._ref;
				if (isAstNodeDescription(this._nodeDescription)) this._ref = _.loadAstNode(this._nodeDescription) ?? _.createLinkingError({
					reference: v,
					container: e,
					property: m
				}, this._nodeDescription);
				else if (this._ref === void 0) {
					this._ref = ref_resolving;
					let h = findRootNode(e).$document, g = _.getLinkedNode({
						reference: v,
						container: e,
						property: m
					});
					if (g.error && h && h.state < DocumentState.ComputedScopes) {
						this._ref = void 0;
						return;
					}
					this._ref = g.node ?? g.error, this._nodeDescription = g.descr, h?.references.push(this);
				} else if (this._ref === ref_resolving) throw Error(`Cyclic reference resolution detected: ${_.astNodeLocator.getAstNodePath(e)}/${m} (symbol '${g}')`);
				return isAstNode(this._ref) ? this._ref : void 0;
			},
			get $nodeDescription() {
				return this._nodeDescription;
			},
			get error() {
				return isLinkingError(this._ref) ? this._ref : void 0;
			}
		};
		return v;
	}
	getLinkedNode(e) {
		try {
			let m = this.getCandidate(e);
			if (isLinkingError(m)) return { error: m };
			let h = this.loadAstNode(m);
			return h ? {
				node: h,
				descr: m
			} : {
				descr: m,
				error: this.createLinkingError(e, m)
			};
		} catch (m) {
			console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, m);
			let h = m.message ?? String(m);
			return { error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${h}` }) };
		}
	}
	loadAstNode(e) {
		if (e.node) return e.node;
		let m = this.langiumDocuments().getDocument(e.documentUri);
		if (m) return this.astNodeLocator.getAstNode(m.parseResult.value, e.path);
	}
	createLinkingError(e, m) {
		let h = findRootNode(e.container).$document;
		h && h.state < DocumentState.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${h.uri}).`);
		let g = this.reflection.getReferenceType(e);
		return Object.assign(Object.assign({}, e), {
			message: `Could not resolve reference to ${g} named '${e.reference.$refText}'.`,
			targetDescription: m
		});
	}
};
function isNamed(e) {
	return typeof e.name == "string";
}
var DefaultNameProvider = class {
	getName(e) {
		if (isNamed(e)) return e.name;
	}
	getNameNode(e) {
		return findNodeForProperty(e.$cstNode, "name");
	}
}, DefaultReferences = class {
	constructor(e) {
		this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
	}
	findDeclaration(e) {
		if (e) {
			let m = findAssignment(e), h = e.astNode;
			if (m && h) {
				let g = h[m.feature];
				if (isReference(g)) return g.ref;
				if (Array.isArray(g)) {
					for (let m of g) if (isReference(m) && m.$refNode && m.$refNode.offset <= e.offset && m.$refNode.end >= e.end) return m.ref;
				}
			}
			if (h) {
				let m = this.nameProvider.getNameNode(h);
				if (m && (m === e || isChildNode(e, m))) return h;
			}
		}
	}
	findDeclarationNode(e) {
		let m = this.findDeclaration(e);
		if (m?.$cstNode) return this.nameProvider.getNameNode(m) ?? m.$cstNode;
	}
	findReferences(e, m) {
		let h = [];
		if (m.includeDeclaration) {
			let m = this.getReferenceToSelf(e);
			m && h.push(m);
		}
		let g = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
		return m.documentUri && (g = g.filter((e) => UriUtils.equals(e.sourceUri, m.documentUri))), h.push(...g), stream(h);
	}
	getReferenceToSelf(e) {
		let m = this.nameProvider.getNameNode(e);
		if (m) {
			let h = getDocument(e), g = this.nodeLocator.getAstNodePath(e);
			return {
				sourceUri: h.uri,
				sourcePath: g,
				targetUri: h.uri,
				targetPath: g,
				segment: toDocumentSegment(m),
				local: !0
			};
		}
	}
}, MultiMap = class {
	constructor(e) {
		if (this.map = /* @__PURE__ */ new Map(), e) for (let [m, h] of e) this.add(m, h);
	}
	get size() {
		return Reduction.sum(stream(this.map.values()).map((e) => e.length));
	}
	clear() {
		this.map.clear();
	}
	delete(e, m) {
		if (m === void 0) return this.map.delete(e);
		{
			let h = this.map.get(e);
			if (h) {
				let g = h.indexOf(m);
				if (g >= 0) return h.length === 1 ? this.map.delete(e) : h.splice(g, 1), !0;
			}
			return !1;
		}
	}
	get(e) {
		return this.map.get(e) ?? [];
	}
	has(e, m) {
		if (m === void 0) return this.map.has(e);
		{
			let h = this.map.get(e);
			return h ? h.indexOf(m) >= 0 : !1;
		}
	}
	add(e, m) {
		return this.map.has(e) ? this.map.get(e).push(m) : this.map.set(e, [m]), this;
	}
	addAll(e, m) {
		return this.map.has(e) ? this.map.get(e).push(...m) : this.map.set(e, Array.from(m)), this;
	}
	forEach(e) {
		this.map.forEach((m, h) => m.forEach((m) => e(m, h, this)));
	}
	[Symbol.iterator]() {
		return this.entries().iterator();
	}
	entries() {
		return stream(this.map.entries()).flatMap(([e, m]) => m.map((m) => [e, m]));
	}
	keys() {
		return stream(this.map.keys());
	}
	values() {
		return stream(this.map.values()).flat();
	}
	entriesGroupedByKey() {
		return stream(this.map.entries());
	}
}, BiMap = class {
	get size() {
		return this.map.size;
	}
	constructor(e) {
		if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e) for (let [m, h] of e) this.set(m, h);
	}
	clear() {
		this.map.clear(), this.inverse.clear();
	}
	set(e, m) {
		return this.map.set(e, m), this.inverse.set(m, e), this;
	}
	get(e) {
		return this.map.get(e);
	}
	getKey(e) {
		return this.inverse.get(e);
	}
	delete(e) {
		let m = this.map.get(e);
		return m === void 0 ? !1 : (this.map.delete(e), this.inverse.delete(m), !0);
	}
}, DefaultScopeComputation = class {
	constructor(e) {
		this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
	}
	async computeExports(e, m = cancellation_exports.CancellationToken.None) {
		return this.computeExportsForNode(e.parseResult.value, e, void 0, m);
	}
	async computeExportsForNode(e, m, h = streamContents, g = cancellation_exports.CancellationToken.None) {
		let _ = [];
		this.exportNode(e, _, m);
		for (let v of h(e)) await interruptAndCheck(g), this.exportNode(v, _, m);
		return _;
	}
	exportNode(e, m, h) {
		let g = this.nameProvider.getName(e);
		g && m.push(this.descriptions.createDescription(e, g, h));
	}
	async computeLocalScopes(e, m = cancellation_exports.CancellationToken.None) {
		let h = e.parseResult.value, g = new MultiMap();
		for (let _ of streamAllContents(h)) await interruptAndCheck(m), this.processNode(_, e, g);
		return g;
	}
	processNode(e, m, h) {
		let g = e.$container;
		if (g) {
			let _ = this.nameProvider.getName(e);
			_ && h.add(g, this.descriptions.createDescription(e, _, m));
		}
	}
}, StreamScope = class {
	constructor(e, m, h) {
		this.elements = e, this.outerScope = m, this.caseInsensitive = h?.caseInsensitive ?? !1;
	}
	getAllElements() {
		return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
	}
	getElement(e) {
		let m = this.caseInsensitive ? this.elements.find((m) => m.name.toLowerCase() === e.toLowerCase()) : this.elements.find((m) => m.name === e);
		if (m) return m;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
}, MapScope = class {
	constructor(e, m, h) {
		this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = h?.caseInsensitive ?? !1;
		for (let m of e) {
			let e = this.caseInsensitive ? m.name.toLowerCase() : m.name;
			this.elements.set(e, m);
		}
		this.outerScope = m;
	}
	getElement(e) {
		let m = this.caseInsensitive ? e.toLowerCase() : e, h = this.elements.get(m);
		if (h) return h;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
	getAllElements() {
		let e = stream(this.elements.values());
		return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
	}
};
const EMPTY_SCOPE = {
	getElement() {},
	getAllElements() {
		return EMPTY_STREAM;
	}
};
var DisposableCache = class {
	constructor() {
		this.toDispose = [], this.isDisposed = !1;
	}
	onDispose(e) {
		this.toDispose.push(e);
	}
	dispose() {
		this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
	}
	throwIfDisposed() {
		if (this.isDisposed) throw Error("This cache has already been disposed");
	}
}, SimpleCache = class extends DisposableCache {
	constructor() {
		super(...arguments), this.cache = /* @__PURE__ */ new Map();
	}
	has(e) {
		return this.throwIfDisposed(), this.cache.has(e);
	}
	set(e, m) {
		this.throwIfDisposed(), this.cache.set(e, m);
	}
	get(e, m) {
		if (this.throwIfDisposed(), this.cache.has(e)) return this.cache.get(e);
		if (m) {
			let h = m();
			return this.cache.set(e, h), h;
		} else return;
	}
	delete(e) {
		return this.throwIfDisposed(), this.cache.delete(e);
	}
	clear() {
		this.throwIfDisposed(), this.cache.clear();
	}
}, ContextCache = class extends DisposableCache {
	constructor(e) {
		super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((e) => e);
	}
	has(e, m) {
		return this.throwIfDisposed(), this.cacheForContext(e).has(m);
	}
	set(e, m, h) {
		this.throwIfDisposed(), this.cacheForContext(e).set(m, h);
	}
	get(e, m, h) {
		this.throwIfDisposed();
		let g = this.cacheForContext(e);
		if (g.has(m)) return g.get(m);
		if (h) {
			let e = h();
			return g.set(m, e), e;
		} else return;
	}
	delete(e, m) {
		return this.throwIfDisposed(), this.cacheForContext(e).delete(m);
	}
	clear(e) {
		if (this.throwIfDisposed(), e) {
			let m = this.converter(e);
			this.cache.delete(m);
		} else this.cache.clear();
	}
	cacheForContext(e) {
		let m = this.converter(e), h = this.cache.get(m);
		return h || (h = /* @__PURE__ */ new Map(), this.cache.set(m, h)), h;
	}
}, DocumentCache = class extends ContextCache {
	constructor(e, m) {
		super((e) => e.toString()), m ? (this.toDispose.push(e.workspace.DocumentBuilder.onDocumentPhase(m, (e) => {
			this.clear(e.uri.toString());
		})), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, m) => {
			for (let e of m) this.clear(e);
		}))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, m) => {
			let h = e.concat(m);
			for (let e of h) this.clear(e);
		}));
	}
}, WorkspaceCache = class extends SimpleCache {
	constructor(e, m) {
		super(), m ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(m, () => {
			this.clear();
		})), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, m) => {
			m.length > 0 && this.clear();
		}))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
			this.clear();
		}));
	}
}, DefaultScopeProvider = class {
	constructor(e) {
		this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new WorkspaceCache(e.shared);
	}
	getScope(e) {
		let m = [], h = this.reflection.getReferenceType(e), g = getDocument(e.container).precomputedScopes;
		if (g) {
			let _ = e.container;
			do {
				let e = g.get(_);
				e.length > 0 && m.push(stream(e).filter((e) => this.reflection.isSubtype(e.type, h))), _ = _.$container;
			} while (_);
		}
		let _ = this.getGlobalScope(h, e);
		for (let e = m.length - 1; e >= 0; e--) _ = this.createScope(m[e], _);
		return _;
	}
	createScope(e, m, h) {
		return new StreamScope(stream(e), m, h);
	}
	createScopeForNodes(e, m, h) {
		return new StreamScope(stream(e).map((e) => {
			let m = this.nameProvider.getName(e);
			if (m) return this.descriptions.createDescription(e, m);
		}).nonNullable(), m, h);
	}
	getGlobalScope(e, m) {
		return this.globalScopeCache.get(e, () => new MapScope(this.indexManager.allElements(e)));
	}
};
function isAstNodeWithComment(e) {
	return typeof e.$comment == "string";
}
function isIntermediateReference(e) {
	return typeof e == "object" && !!e && ("$ref" in e || "$error" in e);
}
var DefaultJsonSerializer = class {
	constructor(e) {
		this.ignoreProperties = new Set([
			"$container",
			"$containerProperty",
			"$containerIndex",
			"$document",
			"$cstNode"
		]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
	}
	serialize(e, m) {
		let h = m ?? {}, g = m?.replacer, _ = (e, m) => this.replacer(e, m, h), v = g ? (e, m) => g(e, m, _) : _;
		try {
			return this.currentDocument = getDocument(e), JSON.stringify(e, v, m?.space);
		} finally {
			this.currentDocument = void 0;
		}
	}
	deserialize(e, m) {
		let h = m ?? {}, g = JSON.parse(e);
		return this.linkNode(g, g, h), g;
	}
	replacer(e, m, { refText: h, sourceText: g, textRegions: _, comments: v, uriConverter: y }) {
		if (!this.ignoreProperties.has(e)) if (isReference(m)) {
			let e = m.ref, g = h ? m.$refText : void 0;
			if (e) {
				let h = getDocument(e), _ = "";
				this.currentDocument && this.currentDocument !== h && (_ = y ? y(h.uri, m) : h.uri.toString());
				let v = this.astNodeLocator.getAstNodePath(e);
				return {
					$ref: `${_}#${v}`,
					$refText: g
				};
			} else return {
				$error: m.error?.message ?? "Could not resolve reference",
				$refText: g
			};
		} else if (isAstNode(m)) {
			let h;
			if (_ && (h = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, m)), (!e || m.$document) && h?.$textRegion && (h.$textRegion.documentURI = this.currentDocument?.uri.toString())), g && !e && (h ??= Object.assign({}, m), h.$sourceText = m.$cstNode?.text), v) {
				h ??= Object.assign({}, m);
				let e = this.commentProvider.getComment(m);
				e && (h.$comment = e.replace(/\r/g, ""));
			}
			return h ?? m;
		} else return m;
	}
	addAstNodeRegionWithAssignmentsTo(e) {
		let m = (e) => ({
			offset: e.offset,
			end: e.end,
			length: e.length,
			range: e.range
		});
		if (e.$cstNode) {
			let h = e.$textRegion = m(e.$cstNode), g = h.assignments = {};
			return Object.keys(e).filter((e) => !e.startsWith("$")).forEach((h) => {
				let _ = findNodesForProperty(e.$cstNode, h).map(m);
				_.length !== 0 && (g[h] = _);
			}), e;
		}
	}
	linkNode(e, m, h, g, _, v) {
		for (let [g, _] of Object.entries(e)) if (Array.isArray(_)) for (let v = 0; v < _.length; v++) {
			let y = _[v];
			isIntermediateReference(y) ? _[v] = this.reviveReference(e, g, m, y, h) : isAstNode(y) && this.linkNode(y, m, h, e, g, v);
		}
		else isIntermediateReference(_) ? e[g] = this.reviveReference(e, g, m, _, h) : isAstNode(_) && this.linkNode(_, m, h, e, g);
		let y = e;
		y.$container = g, y.$containerProperty = _, y.$containerIndex = v;
	}
	reviveReference(e, m, h, g, _) {
		let v = g.$refText, y = g.$error;
		if (g.$ref) {
			let e = this.getRefNode(h, g.$ref, _.uriConverter);
			if (isAstNode(e)) return v ||= this.nameProvider.getName(e), {
				$refText: v ?? "",
				ref: e
			};
			y = e;
		}
		if (y) {
			let h = { $refText: v ?? "" };
			return h.error = {
				container: e,
				property: m,
				message: y,
				reference: h
			}, h;
		} else return;
	}
	getRefNode(e, m, h) {
		try {
			let g = m.indexOf("#");
			if (g === 0) return this.astNodeLocator.getAstNode(e, m.substring(1)) || "Could not resolve path: " + m;
			if (g < 0) {
				let e = h ? h(m) : URI.parse(m), g = this.langiumDocuments.getDocument(e);
				return g ? g.parseResult.value : "Could not find document for URI: " + m;
			}
			let _ = h ? h(m.substring(0, g)) : URI.parse(m.substring(0, g)), v = this.langiumDocuments.getDocument(_);
			return v ? g === m.length - 1 ? v.parseResult.value : this.astNodeLocator.getAstNode(v.parseResult.value, m.substring(g + 1)) || "Could not resolve URI: " + m : "Could not find document for URI: " + m;
		} catch (e) {
			return String(e);
		}
	}
}, DefaultServiceRegistry = class {
	get map() {
		return this.fileExtensionMap;
	}
	constructor(e) {
		this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e?.workspace.TextDocuments;
	}
	register(e) {
		let m = e.LanguageMetaData;
		for (let h of m.fileExtensions) this.fileExtensionMap.has(h) && console.warn(`The file extension ${h} is used by multiple languages. It is now assigned to '${m.languageId}'.`), this.fileExtensionMap.set(h, e);
		this.languageIdMap.set(m.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
	}
	getServices(e) {
		if (this.singleton !== void 0) return this.singleton;
		if (this.languageIdMap.size === 0) throw Error("The service registry is empty. Use `register` to register the services of a language.");
		let m = this.textDocuments?.get(e)?.languageId;
		if (m !== void 0) {
			let e = this.languageIdMap.get(m);
			if (e) return e;
		}
		let h = UriUtils.extname(e), g = this.fileExtensionMap.get(h);
		if (!g) throw m ? Error(`The service registry contains no services for the extension '${h}' for language '${m}'.`) : Error(`The service registry contains no services for the extension '${h}'.`);
		return g;
	}
	hasServices(e) {
		try {
			return this.getServices(e), !0;
		} catch {
			return !1;
		}
	}
	get all() {
		return Array.from(this.languageIdMap.values());
	}
};
function diagnosticData(e) {
	return { code: e };
}
var ValidationCategory;
(function(e) {
	e.all = [
		"fast",
		"slow",
		"built-in"
	];
})(ValidationCategory ||= {});
var ValidationRegistry = class {
	constructor(e) {
		this.entries = new MultiMap(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
	}
	register(e, m = this, h = "fast") {
		if (h === "built-in") throw Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
		for (let [g, _] of Object.entries(e)) {
			let e = _;
			if (Array.isArray(e)) for (let _ of e) {
				let e = {
					check: this.wrapValidationException(_, m),
					category: h
				};
				this.addEntry(g, e);
			}
			else if (typeof e == "function") {
				let _ = {
					check: this.wrapValidationException(e, m),
					category: h
				};
				this.addEntry(g, _);
			} else assertUnreachable(e);
		}
	}
	wrapValidationException(e, m) {
		return async (h, g, _) => {
			await this.handleException(() => e.call(m, h, g, _), "An error occurred during validation", g, h);
		};
	}
	async handleException(e, m, h, g) {
		try {
			await e();
		} catch (e) {
			if (isOperationCancelled(e)) throw e;
			console.error(`${m}:`, e), e instanceof Error && e.stack && console.error(e.stack), h("error", `${m}: ${e instanceof Error ? e.message : String(e)}`, { node: g });
		}
	}
	addEntry(e, m) {
		if (e === "AstNode") {
			this.entries.add("AstNode", m);
			return;
		}
		for (let h of this.reflection.getAllSubTypes(e)) this.entries.add(h, m);
	}
	getChecks(e, m) {
		let h = stream(this.entries.get(e)).concat(this.entries.get("AstNode"));
		return m && (h = h.filter((e) => m.includes(e.category))), h.map((e) => e.check);
	}
	registerBeforeDocument(e, m = this) {
		this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", m));
	}
	registerAfterDocument(e, m = this) {
		this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", m));
	}
	wrapPreparationException(e, m, h) {
		return async (g, _, v, y) => {
			await this.handleException(() => e.call(h, g, _, v, y), m, _, g);
		};
	}
	get checksBefore() {
		return this.entriesBefore;
	}
	get checksAfter() {
		return this.entriesAfter;
	}
}, DefaultDocumentValidator = class {
	constructor(e) {
		this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
	}
	async validateDocument(e, m = {}, h = cancellation_exports.CancellationToken.None) {
		let g = e.parseResult, _ = [];
		if (await interruptAndCheck(h), (!m.categories || m.categories.includes("built-in")) && (this.processLexingErrors(g, _, m), m.stopAfterLexingErrors && _.some((e) => e.data?.code === DocumentValidator.LexingError) || (this.processParsingErrors(g, _, m), m.stopAfterParsingErrors && _.some((e) => e.data?.code === DocumentValidator.ParsingError)) || (this.processLinkingErrors(e, _, m), m.stopAfterLinkingErrors && _.some((e) => e.data?.code === DocumentValidator.LinkingError)))) return _;
		try {
			_.push(...await this.validateAst(g.value, m, h));
		} catch (e) {
			if (isOperationCancelled(e)) throw e;
			console.error("An error occurred during validation:", e);
		}
		return await interruptAndCheck(h), _;
	}
	processLexingErrors(e, m, h) {
		let g = [...e.lexerErrors, ...e.lexerReport?.diagnostics ?? []];
		for (let e of g) {
			let h = e.severity ?? "error", g = {
				severity: toDiagnosticSeverity(h),
				range: {
					start: {
						line: e.line - 1,
						character: e.column - 1
					},
					end: {
						line: e.line - 1,
						character: e.column + e.length - 1
					}
				},
				message: e.message,
				data: toDiagnosticData(h),
				source: this.getSource()
			};
			m.push(g);
		}
	}
	processParsingErrors(e, m, h) {
		for (let h of e.parserErrors) {
			let e;
			if (isNaN(h.token.startOffset)) {
				if ("previousToken" in h) {
					let m = h.previousToken;
					if (isNaN(m.startOffset)) {
						let m = {
							line: 0,
							character: 0
						};
						e = {
							start: m,
							end: m
						};
					} else {
						let h = {
							line: m.endLine - 1,
							character: m.endColumn
						};
						e = {
							start: h,
							end: h
						};
					}
				}
			} else e = tokenToRange(h.token);
			if (e) {
				let g = {
					severity: toDiagnosticSeverity("error"),
					range: e,
					message: h.message,
					data: diagnosticData(DocumentValidator.ParsingError),
					source: this.getSource()
				};
				m.push(g);
			}
		}
	}
	processLinkingErrors(e, m, h) {
		for (let h of e.references) {
			let e = h.error;
			if (e) {
				let h = {
					node: e.container,
					property: e.property,
					index: e.index,
					data: {
						code: DocumentValidator.LinkingError,
						containerType: e.container.$type,
						property: e.property,
						refText: e.reference.$refText
					}
				};
				m.push(this.toDiagnostic("error", e.message, h));
			}
		}
	}
	async validateAst(e, m, h = cancellation_exports.CancellationToken.None) {
		let g = [], _ = (e, m, h) => {
			g.push(this.toDiagnostic(e, m, h));
		};
		return await this.validateAstBefore(e, m, _, h), await this.validateAstNodes(e, m, _, h), await this.validateAstAfter(e, m, _, h), g;
	}
	async validateAstBefore(e, m, h, g = cancellation_exports.CancellationToken.None) {
		let _ = this.validationRegistry.checksBefore;
		for (let v of _) await interruptAndCheck(g), await v(e, h, m.categories ?? [], g);
	}
	async validateAstNodes(e, m, h, g = cancellation_exports.CancellationToken.None) {
		await Promise.all(streamAst(e).map(async (e) => {
			await interruptAndCheck(g);
			let _ = this.validationRegistry.getChecks(e.$type, m.categories);
			for (let m of _) await m(e, h, g);
		}));
	}
	async validateAstAfter(e, m, h, g = cancellation_exports.CancellationToken.None) {
		let _ = this.validationRegistry.checksAfter;
		for (let v of _) await interruptAndCheck(g), await v(e, h, m.categories ?? [], g);
	}
	toDiagnostic(e, m, h) {
		return {
			message: m,
			range: getDiagnosticRange(h),
			severity: toDiagnosticSeverity(e),
			code: h.code,
			codeDescription: h.codeDescription,
			tags: h.tags,
			relatedInformation: h.relatedInformation,
			data: h.data,
			source: this.getSource()
		};
	}
	getSource() {
		return this.metadata.languageId;
	}
};
function getDiagnosticRange(e) {
	if (e.range) return e.range;
	let m;
	return typeof e.property == "string" ? m = findNodeForProperty(e.node.$cstNode, e.property, e.index) : typeof e.keyword == "string" && (m = findNodeForKeyword(e.node.$cstNode, e.keyword, e.index)), m ??= e.node.$cstNode, m ? m.range : {
		start: {
			line: 0,
			character: 0
		},
		end: {
			line: 0,
			character: 0
		}
	};
}
function toDiagnosticSeverity(e) {
	switch (e) {
		case "error": return 1;
		case "warning": return 2;
		case "info": return 3;
		case "hint": return 4;
		default: throw Error("Invalid diagnostic severity: " + e);
	}
}
function toDiagnosticData(e) {
	switch (e) {
		case "error": return diagnosticData(DocumentValidator.LexingError);
		case "warning": return diagnosticData(DocumentValidator.LexingWarning);
		case "info": return diagnosticData(DocumentValidator.LexingInfo);
		case "hint": return diagnosticData(DocumentValidator.LexingHint);
		default: throw Error("Invalid diagnostic severity: " + e);
	}
}
var DocumentValidator;
(function(e) {
	e.LexingError = "lexing-error", e.LexingWarning = "lexing-warning", e.LexingInfo = "lexing-info", e.LexingHint = "lexing-hint", e.ParsingError = "parsing-error", e.LinkingError = "linking-error";
})(DocumentValidator ||= {});
var DefaultAstNodeDescriptionProvider = class {
	constructor(e) {
		this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
	}
	createDescription(e, m, h) {
		let g = h ?? getDocument(e);
		m ??= this.nameProvider.getName(e);
		let _ = this.astNodeLocator.getAstNodePath(e);
		if (!m) throw Error(`Node at path ${_} has no name.`);
		let v, y = () => v ??= toDocumentSegment(this.nameProvider.getNameNode(e) ?? e.$cstNode);
		return {
			node: e,
			name: m,
			get nameSegment() {
				return y();
			},
			selectionSegment: toDocumentSegment(e.$cstNode),
			type: e.$type,
			documentUri: g.uri,
			path: _
		};
	}
}, DefaultReferenceDescriptionProvider = class {
	constructor(e) {
		this.nodeLocator = e.workspace.AstNodeLocator;
	}
	async createDescriptions(e, m = cancellation_exports.CancellationToken.None) {
		let h = [], g = e.parseResult.value;
		for (let e of streamAst(g)) await interruptAndCheck(m), streamReferences(e).filter((e) => !isLinkingError(e)).forEach((e) => {
			let m = this.createDescription(e);
			m && h.push(m);
		});
		return h;
	}
	createDescription(e) {
		let m = e.reference.$nodeDescription, h = e.reference.$refNode;
		if (!m || !h) return;
		let g = getDocument(e.container).uri;
		return {
			sourceUri: g,
			sourcePath: this.nodeLocator.getAstNodePath(e.container),
			targetUri: m.documentUri,
			targetPath: m.path,
			segment: toDocumentSegment(h),
			local: UriUtils.equals(m.documentUri, g)
		};
	}
}, DefaultAstNodeLocator = class {
	constructor() {
		this.segmentSeparator = "/", this.indexSeparator = "@";
	}
	getAstNodePath(e) {
		if (e.$container) {
			let m = this.getAstNodePath(e.$container), h = this.getPathSegment(e);
			return m + this.segmentSeparator + h;
		}
		return "";
	}
	getPathSegment({ $containerProperty: e, $containerIndex: m }) {
		if (!e) throw Error("Missing '$containerProperty' in AST node.");
		return m === void 0 ? e : e + this.indexSeparator + m;
	}
	getAstNode(e, m) {
		return m.split(this.segmentSeparator).reduce((e, m) => {
			if (!e || m.length === 0) return e;
			let h = m.indexOf(this.indexSeparator);
			if (h > 0) {
				let g = m.substring(0, h), _ = parseInt(m.substring(h + 1));
				return e[g]?.[_];
			}
			return e[m];
		}, e);
	}
}, event_exports = {};
__reExport(event_exports, /* @__PURE__ */ __toESM(require_events(), 1));
var DefaultConfigurationProvider = class {
	constructor(e) {
		this._ready = new Deferred(), this.settings = {}, this.workspaceConfig = !1, this.onConfigurationSectionUpdateEmitter = new event_exports.Emitter(), this.serviceRegistry = e.ServiceRegistry;
	}
	get ready() {
		return this._ready.promise;
	}
	initialize(e) {
		this.workspaceConfig = e.capabilities.workspace?.configuration ?? !1;
	}
	async initialized(e) {
		if (this.workspaceConfig) {
			if (e.register) {
				let m = this.serviceRegistry.all;
				e.register({ section: m.map((e) => this.toSectionName(e.LanguageMetaData.languageId)) });
			}
			if (e.fetchConfiguration) {
				let m = this.serviceRegistry.all.map((e) => ({ section: this.toSectionName(e.LanguageMetaData.languageId) })), h = await e.fetchConfiguration(m);
				m.forEach((e, m) => {
					this.updateSectionConfiguration(e.section, h[m]);
				});
			}
		}
		this._ready.resolve();
	}
	updateConfiguration(e) {
		e.settings && Object.keys(e.settings).forEach((m) => {
			let h = e.settings[m];
			this.updateSectionConfiguration(m, h), this.onConfigurationSectionUpdateEmitter.fire({
				section: m,
				configuration: h
			});
		});
	}
	updateSectionConfiguration(e, m) {
		this.settings[e] = m;
	}
	async getConfiguration(e, m) {
		await this.ready;
		let h = this.toSectionName(e);
		if (this.settings[h]) return this.settings[h][m];
	}
	toSectionName(e) {
		return `${e}`;
	}
	get onConfigurationSectionUpdate() {
		return this.onConfigurationSectionUpdateEmitter.event;
	}
}, Disposable;
(function(e) {
	function m(e) {
		return { dispose: async () => await e() };
	}
	e.create = m;
})(Disposable ||= {});
var DefaultDocumentBuilder = class {
	constructor(e) {
		this.updateBuildOptions = { validation: { categories: ["built-in", "fast"] } }, this.updateListeners = [], this.buildPhaseListeners = new MultiMap(), this.documentPhaseListeners = new MultiMap(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = DocumentState.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
	}
	async build(e, m = {}, h = cancellation_exports.CancellationToken.None) {
		for (let h of e) {
			let e = h.uri.toString();
			if (h.state === DocumentState.Validated) {
				if (typeof m.validation == "boolean" && m.validation) h.state = DocumentState.IndexedReferences, h.diagnostics = void 0, this.buildState.delete(e);
				else if (typeof m.validation == "object") {
					let g = this.buildState.get(e), _ = g?.result?.validationChecks;
					if (_) {
						let v = (m.validation.categories ?? ValidationCategory.all).filter((e) => !_.includes(e));
						v.length > 0 && (this.buildState.set(e, {
							completed: !1,
							options: { validation: Object.assign(Object.assign({}, m.validation), { categories: v }) },
							result: g.result
						}), h.state = DocumentState.IndexedReferences);
					}
				}
			} else this.buildState.delete(e);
		}
		this.currentState = DocumentState.Changed, await this.emitUpdate(e.map((e) => e.uri), []), await this.buildDocuments(e, m, h);
	}
	async update(e, m, h = cancellation_exports.CancellationToken.None) {
		this.currentState = DocumentState.Changed;
		for (let e of m) this.langiumDocuments.deleteDocument(e), this.buildState.delete(e.toString()), this.indexManager.remove(e);
		for (let m of e) {
			if (!this.langiumDocuments.invalidateDocument(m)) {
				let e = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, m);
				e.state = DocumentState.Changed, this.langiumDocuments.addDocument(e);
			}
			this.buildState.delete(m.toString());
		}
		let g = stream(e).concat(m).map((e) => e.toString()).toSet();
		this.langiumDocuments.all.filter((e) => !g.has(e.uri.toString()) && this.shouldRelink(e, g)).forEach((e) => {
			this.serviceRegistry.getServices(e.uri).references.Linker.unlink(e), e.state = Math.min(e.state, DocumentState.ComputedScopes), e.diagnostics = void 0;
		}), await this.emitUpdate(e, m), await interruptAndCheck(h);
		let _ = this.sortDocuments(this.langiumDocuments.all.filter((e) => e.state < DocumentState.Linked || !this.buildState.get(e.uri.toString())?.completed).toArray());
		await this.buildDocuments(_, this.updateBuildOptions, h);
	}
	async emitUpdate(e, m) {
		await Promise.all(this.updateListeners.map((h) => h(e, m)));
	}
	sortDocuments(e) {
		let m = 0, h = e.length - 1;
		for (; m < h;) {
			for (; m < e.length && this.hasTextDocument(e[m]);) m++;
			for (; h >= 0 && !this.hasTextDocument(e[h]);) h--;
			m < h && ([e[m], e[h]] = [e[h], e[m]]);
		}
		return e;
	}
	hasTextDocument(e) {
		return !!this.textDocuments?.get(e.uri);
	}
	shouldRelink(e, m) {
		return e.references.some((e) => e.error !== void 0) ? !0 : this.indexManager.isAffected(e, m);
	}
	onUpdate(e) {
		return this.updateListeners.push(e), Disposable.create(() => {
			let m = this.updateListeners.indexOf(e);
			m >= 0 && this.updateListeners.splice(m, 1);
		});
	}
	async buildDocuments(e, m, h) {
		this.prepareBuild(e, m), await this.runCancelable(e, DocumentState.Parsed, h, (e) => this.langiumDocumentFactory.update(e, h)), await this.runCancelable(e, DocumentState.IndexedContent, h, (e) => this.indexManager.updateContent(e, h)), await this.runCancelable(e, DocumentState.ComputedScopes, h, async (e) => {
			e.precomputedScopes = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeLocalScopes(e, h);
		}), await this.runCancelable(e, DocumentState.Linked, h, (e) => this.serviceRegistry.getServices(e.uri).references.Linker.link(e, h)), await this.runCancelable(e, DocumentState.IndexedReferences, h, (e) => this.indexManager.updateReferences(e, h));
		let g = e.filter((e) => this.shouldValidate(e));
		await this.runCancelable(g, DocumentState.Validated, h, (e) => this.validate(e, h));
		for (let m of e) {
			let e = this.buildState.get(m.uri.toString());
			e && (e.completed = !0);
		}
	}
	prepareBuild(e, m) {
		for (let h of e) {
			let e = h.uri.toString(), g = this.buildState.get(e);
			(!g || g.completed) && this.buildState.set(e, {
				completed: !1,
				options: m,
				result: g?.result
			});
		}
	}
	async runCancelable(e, m, h, g) {
		let _ = e.filter((e) => e.state < m);
		for (let e of _) await interruptAndCheck(h), await g(e), e.state = m, await this.notifyDocumentPhase(e, m, h);
		let v = e.filter((e) => e.state === m);
		await this.notifyBuildPhase(v, m, h), this.currentState = m;
	}
	onBuildPhase(e, m) {
		return this.buildPhaseListeners.add(e, m), Disposable.create(() => {
			this.buildPhaseListeners.delete(e, m);
		});
	}
	onDocumentPhase(e, m) {
		return this.documentPhaseListeners.add(e, m), Disposable.create(() => {
			this.documentPhaseListeners.delete(e, m);
		});
	}
	waitUntil(e, m, h) {
		let g;
		if (m && "path" in m ? g = m : h = m, h ??= cancellation_exports.CancellationToken.None, g) {
			let m = this.langiumDocuments.getDocument(g);
			if (m && m.state > e) return Promise.resolve(g);
		}
		return this.currentState >= e ? Promise.resolve(void 0) : h.isCancellationRequested ? Promise.reject(OperationCancelled) : new Promise((m, _) => {
			let v = this.onBuildPhase(e, () => {
				v.dispose(), y.dispose(), m(g ? this.langiumDocuments.getDocument(g)?.uri : void 0);
			}), y = h.onCancellationRequested(() => {
				v.dispose(), y.dispose(), _(OperationCancelled);
			});
		});
	}
	async notifyDocumentPhase(e, m, h) {
		let g = this.documentPhaseListeners.get(m).slice();
		for (let m of g) try {
			await m(e, h);
		} catch (e) {
			if (!isOperationCancelled(e)) throw e;
		}
	}
	async notifyBuildPhase(e, m, h) {
		if (e.length === 0) return;
		let g = this.buildPhaseListeners.get(m).slice();
		for (let m of g) await interruptAndCheck(h), await m(e, h);
	}
	shouldValidate(e) {
		return !!this.getBuildOptions(e).validation;
	}
	async validate(e, m) {
		let h = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, g = this.getBuildOptions(e).validation, _ = typeof g == "object" ? g : void 0, v = await h.validateDocument(e, _, m);
		e.diagnostics ? e.diagnostics.push(...v) : e.diagnostics = v;
		let y = this.buildState.get(e.uri.toString());
		if (y) {
			y.result ??= {};
			let e = _?.categories ?? ValidationCategory.all;
			y.result.validationChecks ? y.result.validationChecks.push(...e) : y.result.validationChecks = [...e];
		}
	}
	getBuildOptions(e) {
		return this.buildState.get(e.uri.toString())?.options ?? {};
	}
}, DefaultIndexManager = class {
	constructor(e) {
		this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new ContextCache(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
	}
	findAllReferences(e, m) {
		let h = getDocument(e).uri, g = [];
		return this.referenceIndex.forEach((e) => {
			e.forEach((e) => {
				UriUtils.equals(e.targetUri, h) && e.targetPath === m && g.push(e);
			});
		}), stream(g);
	}
	allElements(e, m) {
		let h = stream(this.symbolIndex.keys());
		return m && (h = h.filter((e) => !m || m.has(e))), h.map((m) => this.getFileDescriptions(m, e)).flat();
	}
	getFileDescriptions(e, m) {
		return m ? this.symbolByTypeIndex.get(e, m, () => (this.symbolIndex.get(e) ?? []).filter((e) => this.astReflection.isSubtype(e.type, m))) : this.symbolIndex.get(e) ?? [];
	}
	remove(e) {
		let m = e.toString();
		this.symbolIndex.delete(m), this.symbolByTypeIndex.clear(m), this.referenceIndex.delete(m);
	}
	async updateContent(e, m = cancellation_exports.CancellationToken.None) {
		let h = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, m), g = e.uri.toString();
		this.symbolIndex.set(g, h), this.symbolByTypeIndex.clear(g);
	}
	async updateReferences(e, m = cancellation_exports.CancellationToken.None) {
		let h = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, m);
		this.referenceIndex.set(e.uri.toString(), h);
	}
	isAffected(e, m) {
		let h = this.referenceIndex.get(e.uri.toString());
		return h ? h.some((e) => !e.local && m.has(e.targetUri.toString())) : !1;
	}
}, DefaultWorkspaceManager = class {
	constructor(e) {
		this.initialBuildOptions = {}, this._ready = new Deferred(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
	}
	get ready() {
		return this._ready.promise;
	}
	get workspaceFolders() {
		return this.folders;
	}
	initialize(e) {
		this.folders = e.workspaceFolders ?? void 0;
	}
	initialized(e) {
		return this.mutex.write((e) => this.initializeWorkspace(this.folders ?? [], e));
	}
	async initializeWorkspace(e, m = cancellation_exports.CancellationToken.None) {
		let h = await this.performStartup(e);
		await interruptAndCheck(m), await this.documentBuilder.build(h, this.initialBuildOptions, m);
	}
	async performStartup(e) {
		let m = this.serviceRegistry.all.flatMap((e) => e.LanguageMetaData.fileExtensions), h = [], g = (e) => {
			h.push(e), this.langiumDocuments.hasDocument(e.uri) || this.langiumDocuments.addDocument(e);
		};
		return await this.loadAdditionalDocuments(e, g), await Promise.all(e.map((e) => [e, this.getRootFolder(e)]).map(async (e) => this.traverseFolder(...e, m, g))), this._ready.resolve(), h;
	}
	loadAdditionalDocuments(e, m) {
		return Promise.resolve();
	}
	getRootFolder(e) {
		return URI.parse(e.uri);
	}
	async traverseFolder(e, m, h, g) {
		let _ = await this.fileSystemProvider.readDirectory(m);
		await Promise.all(_.map(async (m) => {
			this.includeEntry(e, m, h) && (m.isDirectory ? await this.traverseFolder(e, m.uri, h, g) : m.isFile && g(await this.langiumDocuments.getOrCreateDocument(m.uri)));
		}));
	}
	includeEntry(e, m, h) {
		let g = UriUtils.basename(m.uri);
		if (g.startsWith(".")) return !1;
		if (m.isDirectory) return g !== "node_modules" && g !== "out";
		if (m.isFile) {
			let e = UriUtils.extname(m.uri);
			return h.includes(e);
		}
		return !1;
	}
}, DefaultLexerErrorMessageProvider = class {
	buildUnexpectedCharactersMessage(e, m, h, g, _) {
		return defaultLexerErrorProvider.buildUnexpectedCharactersMessage(e, m, h, g, _);
	}
	buildUnableToPopLexerModeMessage(e) {
		return defaultLexerErrorProvider.buildUnableToPopLexerModeMessage(e);
	}
};
const DEFAULT_TOKENIZE_OPTIONS = { mode: "full" };
var DefaultLexer = class {
	constructor(e) {
		this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
		let m = this.tokenBuilder.buildTokens(e.Grammar, { caseInsensitive: e.LanguageMetaData.caseInsensitive });
		this.tokenTypes = this.toTokenTypeDictionary(m), this.chevrotainLexer = new Lexer(isTokenTypeDictionary(m) ? Object.values(m) : m, {
			positionTracking: "full",
			skipValidations: e.LanguageMetaData.mode === "production",
			errorMessageProvider: this.errorMessageProvider
		});
	}
	get definition() {
		return this.tokenTypes;
	}
	tokenize(e, m = DEFAULT_TOKENIZE_OPTIONS) {
		var h;
		let g = this.chevrotainLexer.tokenize(e);
		return {
			tokens: g.tokens,
			errors: g.errors,
			hidden: g.groups.hidden ?? [],
			report: (h = this.tokenBuilder).flushLexingReport?.call(h, e)
		};
	}
	toTokenTypeDictionary(e) {
		if (isTokenTypeDictionary(e)) return e;
		let m = isIMultiModeLexerDefinition(e) ? Object.values(e.modes).flat() : e, h = {};
		return m.forEach((e) => h[e.name] = e), h;
	}
};
function isTokenTypeArray(e) {
	return Array.isArray(e) && (e.length === 0 || "name" in e[0]);
}
function isIMultiModeLexerDefinition(e) {
	return e && "modes" in e && "defaultMode" in e;
}
function isTokenTypeDictionary(e) {
	return !isTokenTypeArray(e) && !isIMultiModeLexerDefinition(e);
}
function parseJSDoc(e, m, h) {
	let g, _;
	typeof e == "string" ? (_ = m, g = h) : (_ = e.range.start, g = m), _ ||= Position.create(0, 0);
	let v = getLines(e), y = normalizeOptions(g);
	return parseJSDocComment({
		index: 0,
		tokens: tokenize({
			lines: v,
			position: _,
			options: y
		}),
		position: _
	});
}
function isJSDoc(e, m) {
	let h = normalizeOptions(m), g = getLines(e);
	if (g.length === 0) return !1;
	let _ = g[0], v = g[g.length - 1], y = h.start, b = h.end;
	return !!y?.exec(_) && !!b?.exec(v);
}
function getLines(e) {
	let m = "";
	return m = typeof e == "string" ? e : e.text, m.split(NEWLINE_REGEXP);
}
var tagRegex = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, inlineTagRegex = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function tokenize(e) {
	let m = [], h = e.position.line, g = e.position.character;
	for (let _ = 0; _ < e.lines.length; _++) {
		let v = _ === 0, y = _ === e.lines.length - 1, b = e.lines[_], x = 0;
		if (v && e.options.start) {
			let m = e.options.start?.exec(b);
			m && (x = m.index + m[0].length);
		} else {
			let m = e.options.line?.exec(b);
			m && (x = m.index + m[0].length);
		}
		if (y) {
			let m = e.options.end?.exec(b);
			m && (b = b.substring(0, m.index));
		}
		if (b = b.substring(0, lastCharacter(b)), skipWhitespace(b, x) >= b.length) {
			if (m.length > 0) {
				let e = Position.create(h, g);
				m.push({
					type: "break",
					content: "",
					range: Range.create(e, e)
				});
			}
		} else {
			tagRegex.lastIndex = x;
			let e = tagRegex.exec(b);
			if (e) {
				let _ = e[0], v = e[1], y = Position.create(h, g + x), S = Position.create(h, g + x + _.length);
				m.push({
					type: "tag",
					content: v,
					range: Range.create(y, S)
				}), x += _.length, x = skipWhitespace(b, x);
			}
			if (x < b.length) {
				let e = b.substring(x), _ = Array.from(e.matchAll(inlineTagRegex));
				m.push(...buildInlineTokens(_, e, h, g + x));
			}
		}
		h++, g = 0;
	}
	return m.length > 0 && m[m.length - 1].type === "break" ? m.slice(0, -1) : m;
}
function buildInlineTokens(e, m, h, g) {
	let _ = [];
	if (e.length === 0) {
		let e = Position.create(h, g), v = Position.create(h, g + m.length);
		_.push({
			type: "text",
			content: m,
			range: Range.create(e, v)
		});
	} else {
		let v = 0;
		for (let y of e) {
			let e = y.index, b = m.substring(v, e);
			b.length > 0 && _.push({
				type: "text",
				content: m.substring(v, e),
				range: Range.create(Position.create(h, v + g), Position.create(h, e + g))
			});
			let x = b.length + 1, S = y[1];
			if (_.push({
				type: "inline-tag",
				content: S,
				range: Range.create(Position.create(h, v + x + g), Position.create(h, v + x + S.length + g))
			}), x += S.length, y.length === 4) {
				x += y[2].length;
				let e = y[3];
				_.push({
					type: "text",
					content: e,
					range: Range.create(Position.create(h, v + x + g), Position.create(h, v + x + e.length + g))
				});
			} else _.push({
				type: "text",
				content: "",
				range: Range.create(Position.create(h, v + x + g), Position.create(h, v + x + g))
			});
			v = e + y[0].length;
		}
		let y = m.substring(v);
		y.length > 0 && _.push({
			type: "text",
			content: y,
			range: Range.create(Position.create(h, v + g), Position.create(h, v + g + y.length))
		});
	}
	return _;
}
var nonWhitespaceRegex = /\S/, whitespaceEndRegex = /\s*$/;
function skipWhitespace(e, m) {
	let h = e.substring(m).match(nonWhitespaceRegex);
	return h ? m + h.index : e.length;
}
function lastCharacter(e) {
	let m = e.match(whitespaceEndRegex);
	if (m && typeof m.index == "number") return m.index;
}
function parseJSDocComment(e) {
	let m = Position.create(e.position.line, e.position.character);
	if (e.tokens.length === 0) return new JSDocCommentImpl([], Range.create(m, m));
	let h = [];
	for (; e.index < e.tokens.length;) {
		let m = parseJSDocElement(e, h[h.length - 1]);
		m && h.push(m);
	}
	let g = h[0]?.range.start ?? m, _ = h[h.length - 1]?.range.end ?? m;
	return new JSDocCommentImpl(h, Range.create(g, _));
}
function parseJSDocElement(e, m) {
	let h = e.tokens[e.index];
	if (h.type === "tag") return parseJSDocTag(e, !1);
	if (h.type === "text" || h.type === "inline-tag") return parseJSDocText(e);
	appendEmptyLine(h, m), e.index++;
}
function appendEmptyLine(e, m) {
	if (m) {
		let h = new JSDocLineImpl("", e.range);
		"inlines" in m ? m.inlines.push(h) : m.content.inlines.push(h);
	}
}
function parseJSDocText(e) {
	let m = e.tokens[e.index], h = m, g = m, _ = [];
	for (; m && m.type !== "break" && m.type !== "tag";) _.push(parseJSDocInline(e)), g = m, m = e.tokens[e.index];
	return new JSDocTextImpl(_, Range.create(h.range.start, g.range.end));
}
function parseJSDocInline(e) {
	return e.tokens[e.index].type === "inline-tag" ? parseJSDocTag(e, !0) : parseJSDocLine(e);
}
function parseJSDocTag(e, m) {
	let h = e.tokens[e.index++], g = h.content.substring(1);
	if (e.tokens[e.index]?.type === "text") if (m) {
		let _ = parseJSDocLine(e);
		return new JSDocTagImpl(g, new JSDocTextImpl([_], _.range), m, Range.create(h.range.start, _.range.end));
	} else {
		let _ = parseJSDocText(e);
		return new JSDocTagImpl(g, _, m, Range.create(h.range.start, _.range.end));
	}
	else {
		let e = h.range;
		return new JSDocTagImpl(g, new JSDocTextImpl([], e), m, e);
	}
}
function parseJSDocLine(e) {
	let m = e.tokens[e.index++];
	return new JSDocLineImpl(m.content, m.range);
}
function normalizeOptions(e) {
	if (!e) return normalizeOptions({
		start: "/**",
		end: "*/",
		line: "*"
	});
	let { start: m, end: h, line: g } = e;
	return {
		start: normalizeOption(m, !0),
		end: normalizeOption(h, !1),
		line: normalizeOption(g, !0)
	};
}
function normalizeOption(e, m) {
	if (typeof e == "string" || typeof e == "object") {
		let h = typeof e == "string" ? escapeRegExp(e) : e.source;
		return m ? /* @__PURE__ */ RegExp(`^\\s*${h}`) : /* @__PURE__ */ RegExp(`\\s*${h}\\s*$`);
	} else return e;
}
var JSDocCommentImpl = class {
	constructor(e, m) {
		this.elements = e, this.range = m;
	}
	getTag(e) {
		return this.getAllTags().find((m) => m.name === e);
	}
	getTags(e) {
		return this.getAllTags().filter((m) => m.name === e);
	}
	getAllTags() {
		return this.elements.filter((e) => "name" in e);
	}
	toString() {
		let e = "";
		for (let m of this.elements) if (e.length === 0) e = m.toString();
		else {
			let h = m.toString();
			e += fillNewlines(e) + h;
		}
		return e.trim();
	}
	toMarkdown(e) {
		let m = "";
		for (let h of this.elements) if (m.length === 0) m = h.toMarkdown(e);
		else {
			let g = h.toMarkdown(e);
			m += fillNewlines(m) + g;
		}
		return m.trim();
	}
}, JSDocTagImpl = class {
	constructor(e, m, h, g) {
		this.name = e, this.content = m, this.inline = h, this.range = g;
	}
	toString() {
		let e = `@${this.name}`, m = this.content.toString();
		return this.content.inlines.length === 1 ? e = `${e} ${m}` : this.content.inlines.length > 1 && (e = `${e}\n${m}`), this.inline ? `{${e}}` : e;
	}
	toMarkdown(e) {
		return (e?.renderTag)?.call(e, this) ?? this.toMarkdownDefault(e);
	}
	toMarkdownDefault(e) {
		let m = this.content.toMarkdown(e);
		if (this.inline) {
			let h = renderInlineTag(this.name, m, e ?? {});
			if (typeof h == "string") return h;
		}
		let h = "";
		e?.tag === "italic" || e?.tag === void 0 ? h = "*" : e?.tag === "bold" ? h = "**" : e?.tag === "bold-italic" && (h = "***");
		let g = `${h}@${this.name}${h}`;
		return this.content.inlines.length === 1 ? g = `${g} — ${m}` : this.content.inlines.length > 1 && (g = `${g}\n${m}`), this.inline ? `{${g}}` : g;
	}
};
function renderInlineTag(e, m, h) {
	if (e === "linkplain" || e === "linkcode" || e === "link") {
		let g = m.indexOf(" "), _ = m;
		if (g > 0) {
			let e = skipWhitespace(m, g);
			_ = m.substring(e), m = m.substring(0, g);
		}
		return (e === "linkcode" || e === "link" && h.link === "code") && (_ = `\`${_}\``), h.renderLink?.call(h, m, _) ?? renderLinkDefault(m, _);
	}
}
function renderLinkDefault(e, m) {
	try {
		return URI.parse(e, !0), `[${m}](${e})`;
	} catch {
		return e;
	}
}
var JSDocTextImpl = class {
	constructor(e, m) {
		this.inlines = e, this.range = m;
	}
	toString() {
		let e = "";
		for (let m = 0; m < this.inlines.length; m++) {
			let h = this.inlines[m], g = this.inlines[m + 1];
			e += h.toString(), g && g.range.start.line > h.range.start.line && (e += "\n");
		}
		return e;
	}
	toMarkdown(e) {
		let m = "";
		for (let h = 0; h < this.inlines.length; h++) {
			let g = this.inlines[h], _ = this.inlines[h + 1];
			m += g.toMarkdown(e), _ && _.range.start.line > g.range.start.line && (m += "\n");
		}
		return m;
	}
}, JSDocLineImpl = class {
	constructor(e, m) {
		this.text = e, this.range = m;
	}
	toString() {
		return this.text;
	}
	toMarkdown() {
		return this.text;
	}
};
function fillNewlines(e) {
	return e.endsWith("\n") ? "\n" : "\n\n";
}
var JSDocDocumentationProvider = class {
	constructor(e) {
		this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
	}
	getDocumentation(e) {
		let m = this.commentProvider.getComment(e);
		if (m && isJSDoc(m)) return parseJSDoc(m).toMarkdown({
			renderLink: (m, h) => this.documentationLinkRenderer(e, m, h),
			renderTag: (m) => this.documentationTagRenderer(e, m)
		});
	}
	documentationLinkRenderer(e, m, h) {
		let g = this.findNameInPrecomputedScopes(e, m) ?? this.findNameInGlobalScope(e, m);
		if (g && g.nameSegment) {
			let e = g.nameSegment.range.start.line + 1, m = g.nameSegment.range.start.character + 1;
			return `[${h}](${g.documentUri.with({ fragment: `L${e},${m}` }).toString()})`;
		} else return;
	}
	documentationTagRenderer(e, m) {}
	findNameInPrecomputedScopes(e, m) {
		let h = getDocument(e).precomputedScopes;
		if (!h) return;
		let g = e;
		do {
			let e = h.get(g).find((e) => e.name === m);
			if (e) return e;
			g = g.$container;
		} while (g);
	}
	findNameInGlobalScope(e, m) {
		return this.indexManager.allElements().find((e) => e.name === m);
	}
}, DefaultCommentProvider = class {
	constructor(e) {
		this.grammarConfig = () => e.parser.GrammarConfig;
	}
	getComment(e) {
		return isAstNodeWithComment(e) ? e.$comment : findCommentNode(e.$cstNode, this.grammarConfig().multilineCommentRules)?.text;
	}
}, DefaultAsyncParser = class {
	constructor(e) {
		this.syncParser = e.parser.LangiumParser;
	}
	parse(e, m) {
		return Promise.resolve(this.syncParser.parse(e));
	}
}, AbstractThreadedAsyncParser = class {
	constructor(e) {
		this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e.serializer.Hydrator;
	}
	initializeWorkers() {
		for (; this.workerPool.length < this.threadCount;) {
			let e = this.createWorker();
			e.onReady(() => {
				if (this.queue.length > 0) {
					let m = this.queue.shift();
					m && (e.lock(), m.resolve(e));
				}
			}), this.workerPool.push(e);
		}
	}
	async parse(e, m) {
		let h = await this.acquireParserWorker(m), g = new Deferred(), _, v = m.onCancellationRequested(() => {
			_ = setTimeout(() => {
				this.terminateWorker(h);
			}, this.terminationDelay);
		});
		return h.parse(e).then((e) => {
			let m = this.hydrator.hydrate(e);
			g.resolve(m);
		}).catch((e) => {
			g.reject(e);
		}).finally(() => {
			v.dispose(), clearTimeout(_);
		}), g.promise;
	}
	terminateWorker(e) {
		e.terminate();
		let m = this.workerPool.indexOf(e);
		m >= 0 && this.workerPool.splice(m, 1);
	}
	async acquireParserWorker(e) {
		this.initializeWorkers();
		for (let e of this.workerPool) if (e.ready) return e.lock(), e;
		let m = new Deferred();
		return e.onCancellationRequested(() => {
			let e = this.queue.indexOf(m);
			e >= 0 && this.queue.splice(e, 1), m.reject(OperationCancelled);
		}), this.queue.push(m), m.promise;
	}
}, ParserWorker = class {
	get ready() {
		return this._ready;
	}
	get onReady() {
		return this.onReadyEmitter.event;
	}
	constructor(e, m, h, g) {
		this.onReadyEmitter = new event_exports.Emitter(), this.deferred = new Deferred(), this._ready = !0, this._parsing = !1, this.sendMessage = e, this._terminate = g, m((e) => {
			let m = e;
			this.deferred.resolve(m), this.unlock();
		}), h((e) => {
			this.deferred.reject(e), this.unlock();
		});
	}
	terminate() {
		this.deferred.reject(OperationCancelled), this._terminate();
	}
	lock() {
		this._ready = !1;
	}
	unlock() {
		this._parsing = !1, this._ready = !0, this.onReadyEmitter.fire();
	}
	parse(e) {
		if (this._parsing) throw Error("Parser worker is busy");
		return this._parsing = !0, this.deferred = new Deferred(), this.sendMessage(e), this.deferred.promise;
	}
}, DefaultWorkspaceLock = class {
	constructor() {
		this.previousTokenSource = new cancellation_exports.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
	}
	write(e) {
		this.cancelWrite();
		let m = startCancelableOperation();
		return this.previousTokenSource = m, this.enqueue(this.writeQueue, e, m.token);
	}
	read(e) {
		return this.enqueue(this.readQueue, e);
	}
	enqueue(e, m, h = cancellation_exports.CancellationToken.None) {
		let g = new Deferred(), _ = {
			action: m,
			deferred: g,
			cancellationToken: h
		};
		return e.push(_), this.performNextOperation(), g.promise;
	}
	async performNextOperation() {
		if (!this.done) return;
		let e = [];
		if (this.writeQueue.length > 0) e.push(this.writeQueue.shift());
		else if (this.readQueue.length > 0) e.push(...this.readQueue.splice(0, this.readQueue.length));
		else return;
		this.done = !1, await Promise.all(e.map(async ({ action: e, deferred: m, cancellationToken: h }) => {
			try {
				let g = await Promise.resolve().then(() => e(h));
				m.resolve(g);
			} catch (e) {
				isOperationCancelled(e) ? m.resolve(void 0) : m.reject(e);
			}
		})), this.done = !0, this.performNextOperation();
	}
	cancelWrite() {
		this.previousTokenSource.cancel();
	}
}, DefaultHydrator = class {
	constructor(e) {
		this.grammarElementIdMap = new BiMap(), this.tokenTypeIdMap = new BiMap(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
	}
	dehydrate(e) {
		return {
			lexerErrors: e.lexerErrors,
			lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
			parserErrors: e.parserErrors.map((e) => Object.assign(Object.assign({}, e), { message: e.message })),
			value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
		};
	}
	dehydrateLexerReport(e) {
		return e;
	}
	createDehyrationContext(e) {
		let m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
		for (let h of streamAst(e)) m.set(h, {});
		if (e.$cstNode) for (let m of streamCst(e.$cstNode)) h.set(m, {});
		return {
			astNodes: m,
			cstNodes: h
		};
	}
	dehydrateAstNode(e, m) {
		let h = m.astNodes.get(e);
		h.$type = e.$type, h.$containerIndex = e.$containerIndex, h.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (h.$cstNode = this.dehydrateCstNode(e.$cstNode, m));
		for (let [g, _] of Object.entries(e)) if (!g.startsWith("$")) if (Array.isArray(_)) {
			let e = [];
			h[g] = e;
			for (let h of _) isAstNode(h) ? e.push(this.dehydrateAstNode(h, m)) : isReference(h) ? e.push(this.dehydrateReference(h, m)) : e.push(h);
		} else isAstNode(_) ? h[g] = this.dehydrateAstNode(_, m) : isReference(_) ? h[g] = this.dehydrateReference(_, m) : _ !== void 0 && (h[g] = _);
		return h;
	}
	dehydrateReference(e, m) {
		let h = {};
		return h.$refText = e.$refText, e.$refNode && (h.$refNode = m.cstNodes.get(e.$refNode)), h;
	}
	dehydrateCstNode(e, m) {
		let h = m.cstNodes.get(e);
		return isRootCstNode(e) ? h.fullText = e.fullText : h.grammarSource = this.getGrammarElementId(e.grammarSource), h.hidden = e.hidden, h.astNode = m.astNodes.get(e.astNode), isCompositeCstNode(e) ? h.content = e.content.map((e) => this.dehydrateCstNode(e, m)) : isLeafCstNode(e) && (h.tokenType = e.tokenType.name, h.offset = e.offset, h.length = e.length, h.startLine = e.range.start.line, h.startColumn = e.range.start.character, h.endLine = e.range.end.line, h.endColumn = e.range.end.character), h;
	}
	hydrate(e) {
		let m = e.value, h = this.createHydrationContext(m);
		return "$cstNode" in m && this.hydrateCstNode(m.$cstNode, h), {
			lexerErrors: e.lexerErrors,
			lexerReport: e.lexerReport,
			parserErrors: e.parserErrors,
			value: this.hydrateAstNode(m, h)
		};
	}
	createHydrationContext(e) {
		let m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
		for (let h of streamAst(e)) m.set(h, {});
		let g;
		if (e.$cstNode) for (let m of streamCst(e.$cstNode)) {
			let e;
			"fullText" in m ? (e = new RootCstNodeImpl(m.fullText), g = e) : "content" in m ? e = new CompositeCstNodeImpl() : "tokenType" in m && (e = this.hydrateCstLeafNode(m)), e && (h.set(m, e), e.root = g);
		}
		return {
			astNodes: m,
			cstNodes: h
		};
	}
	hydrateAstNode(e, m) {
		let h = m.astNodes.get(e);
		h.$type = e.$type, h.$containerIndex = e.$containerIndex, h.$containerProperty = e.$containerProperty, e.$cstNode && (h.$cstNode = m.cstNodes.get(e.$cstNode));
		for (let [g, _] of Object.entries(e)) if (!g.startsWith("$")) if (Array.isArray(_)) {
			let e = [];
			h[g] = e;
			for (let v of _) isAstNode(v) ? e.push(this.setParent(this.hydrateAstNode(v, m), h)) : isReference(v) ? e.push(this.hydrateReference(v, h, g, m)) : e.push(v);
		} else isAstNode(_) ? h[g] = this.setParent(this.hydrateAstNode(_, m), h) : isReference(_) ? h[g] = this.hydrateReference(_, h, g, m) : _ !== void 0 && (h[g] = _);
		return h;
	}
	setParent(e, m) {
		return e.$container = m, e;
	}
	hydrateReference(e, m, h, g) {
		return this.linker.buildReference(m, h, g.cstNodes.get(e.$refNode), e.$refText);
	}
	hydrateCstNode(e, m, h = 0) {
		let g = m.cstNodes.get(e);
		if (typeof e.grammarSource == "number" && (g.grammarSource = this.getGrammarElement(e.grammarSource)), g.astNode = m.astNodes.get(e.astNode), isCompositeCstNode(g)) for (let _ of e.content) {
			let e = this.hydrateCstNode(_, m, h++);
			g.content.push(e);
		}
		return g;
	}
	hydrateCstLeafNode(e) {
		let m = this.getTokenType(e.tokenType), h = e.offset, g = e.length, _ = e.startLine, v = e.startColumn, y = e.endLine, b = e.endColumn, x = e.hidden;
		return new LeafCstNodeImpl(h, g, {
			start: {
				line: _,
				character: v
			},
			end: {
				line: y,
				character: b
			}
		}, m, x);
	}
	getTokenType(e) {
		return this.lexer.definition[e];
	}
	getGrammarElementId(e) {
		if (e) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
	}
	getGrammarElement(e) {
		return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
	}
	createGrammarElementIdMap() {
		let e = 0;
		for (let m of streamAst(this.grammar)) isAbstractElement(m) && this.grammarElementIdMap.set(m, e++);
	}
};
function createDefaultCoreModule(e) {
	return {
		documentation: {
			CommentProvider: (e) => new DefaultCommentProvider(e),
			DocumentationProvider: (e) => new JSDocDocumentationProvider(e)
		},
		parser: {
			AsyncParser: (e) => new DefaultAsyncParser(e),
			GrammarConfig: (e) => createGrammarConfig(e),
			LangiumParser: (e) => createLangiumParser(e),
			CompletionParser: (e) => createCompletionParser(e),
			ValueConverter: () => new DefaultValueConverter(),
			TokenBuilder: () => new DefaultTokenBuilder(),
			Lexer: (e) => new DefaultLexer(e),
			ParserErrorMessageProvider: () => new LangiumParserErrorMessageProvider(),
			LexerErrorMessageProvider: () => new DefaultLexerErrorMessageProvider()
		},
		workspace: {
			AstNodeLocator: () => new DefaultAstNodeLocator(),
			AstNodeDescriptionProvider: (e) => new DefaultAstNodeDescriptionProvider(e),
			ReferenceDescriptionProvider: (e) => new DefaultReferenceDescriptionProvider(e)
		},
		references: {
			Linker: (e) => new DefaultLinker(e),
			NameProvider: () => new DefaultNameProvider(),
			ScopeProvider: (e) => new DefaultScopeProvider(e),
			ScopeComputation: (e) => new DefaultScopeComputation(e),
			References: (e) => new DefaultReferences(e)
		},
		serializer: {
			Hydrator: (e) => new DefaultHydrator(e),
			JsonSerializer: (e) => new DefaultJsonSerializer(e)
		},
		validation: {
			DocumentValidator: (e) => new DefaultDocumentValidator(e),
			ValidationRegistry: (e) => new ValidationRegistry(e)
		},
		shared: () => e.shared
	};
}
function createDefaultSharedCoreModule(e) {
	return {
		ServiceRegistry: (e) => new DefaultServiceRegistry(e),
		workspace: {
			LangiumDocuments: (e) => new DefaultLangiumDocuments(e),
			LangiumDocumentFactory: (e) => new DefaultLangiumDocumentFactory(e),
			DocumentBuilder: (e) => new DefaultDocumentBuilder(e),
			IndexManager: (e) => new DefaultIndexManager(e),
			WorkspaceManager: (e) => new DefaultWorkspaceManager(e),
			FileSystemProvider: (m) => e.fileSystemProvider(m),
			WorkspaceLock: () => new DefaultWorkspaceLock(),
			ConfigurationProvider: (e) => new DefaultConfigurationProvider(e)
		}
	};
}
var Module;
(function(e) {
	e.merge = (e, m) => _merge(_merge({}, e), m);
})(Module ||= {});
function inject(e, m, h, g, _, v, y, b, x) {
	return _inject([
		e,
		m,
		h,
		g,
		_,
		v,
		y,
		b,
		x
	].reduce(_merge, {}));
}
var isProxy = Symbol("isProxy");
function eagerLoad(e) {
	if (e && e[isProxy]) for (let m of Object.values(e)) eagerLoad(m);
	return e;
}
function _inject(e, m) {
	let h = new Proxy({}, {
		deleteProperty: () => !1,
		set: () => {
			throw Error("Cannot set property on injected service container");
		},
		get: (g, _) => _ === isProxy ? !0 : _resolve(g, _, e, m || h),
		getOwnPropertyDescriptor: (g, _) => (_resolve(g, _, e, m || h), Object.getOwnPropertyDescriptor(g, _)),
		has: (m, h) => h in e,
		ownKeys: () => [...Object.getOwnPropertyNames(e)]
	});
	return h;
}
var __requested__ = Symbol();
function _resolve(e, m, h, g) {
	if (m in e) {
		if (e[m] instanceof Error) throw Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: e[m] });
		if (e[m] === __requested__) throw Error("Cycle detected. Please make \"" + String(m) + "\" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies");
		return e[m];
	} else if (m in h) {
		let _ = h[m];
		e[m] = __requested__;
		try {
			e[m] = typeof _ == "function" ? _(g) : _inject(_, g);
		} catch (h) {
			throw e[m] = h instanceof Error ? h : void 0, h;
		}
		return e[m];
	} else return;
}
function _merge(e, m) {
	if (m) {
		for (let [h, g] of Object.entries(m)) if (g !== void 0) {
			let m = e[h];
			m !== null && g !== null && typeof m == "object" && typeof g == "object" ? e[h] = _merge(m, g) : e[h] = g;
		}
	}
	return e;
}
const indentationBuilderDefaultOptions = {
	indentTokenName: "INDENT",
	dedentTokenName: "DEDENT",
	whitespaceTokenName: "WS",
	ignoreIndentationDelimiters: []
};
var LexingMode;
(function(e) {
	e.REGULAR = "indentation-sensitive", e.IGNORE_INDENTATION = "ignore-indentation";
})(LexingMode ||= {});
var IndentationAwareTokenBuilder = class extends DefaultTokenBuilder {
	constructor(e = indentationBuilderDefaultOptions) {
		super(), this.indentationStack = [0], this.whitespaceRegExp = /[ \t]+/y, this.options = Object.assign(Object.assign({}, indentationBuilderDefaultOptions), e), this.indentTokenType = createToken({
			name: this.options.indentTokenName,
			pattern: this.indentMatcher.bind(this),
			line_breaks: !1
		}), this.dedentTokenType = createToken({
			name: this.options.dedentTokenName,
			pattern: this.dedentMatcher.bind(this),
			line_breaks: !1
		});
	}
	buildTokens(e, m) {
		let h = super.buildTokens(e, m);
		if (!isTokenTypeArray(h)) throw Error("Invalid tokens built by default builder");
		let { indentTokenName: g, dedentTokenName: _, whitespaceTokenName: v, ignoreIndentationDelimiters: y } = this.options, b, x, S, C = [];
		for (let e of h) {
			for (let [m, h] of y) e.name === m ? e.PUSH_MODE = LexingMode.IGNORE_INDENTATION : e.name === h && (e.POP_MODE = !0);
			e.name === _ ? b = e : e.name === g ? x = e : e.name === v ? S = e : C.push(e);
		}
		if (!b || !x || !S) throw Error("Some indentation/whitespace tokens not found!");
		return y.length > 0 ? {
			modes: {
				[LexingMode.REGULAR]: [
					b,
					x,
					...C,
					S
				],
				[LexingMode.IGNORE_INDENTATION]: [...C, S]
			},
			defaultMode: LexingMode.REGULAR
		} : [
			b,
			x,
			S,
			...C
		];
	}
	flushLexingReport(e) {
		let m = super.flushLexingReport(e);
		return Object.assign(Object.assign({}, m), { remainingDedents: this.flushRemainingDedents(e) });
	}
	isStartOfLine(e, m) {
		return m === 0 || "\r\n".includes(e[m - 1]);
	}
	matchWhitespace(e, m, h, g) {
		this.whitespaceRegExp.lastIndex = m;
		let _ = this.whitespaceRegExp.exec(e);
		return {
			currIndentLevel: _?.[0].length ?? 0,
			prevIndentLevel: this.indentationStack.at(-1),
			match: _
		};
	}
	createIndentationTokenInstance(e, m, h, g) {
		let _ = this.getLineNumber(m, g);
		return createTokenInstance(e, h, g, g + h.length, _, _, 1, h.length);
	}
	getLineNumber(e, m) {
		return e.substring(0, m).split(/\r\n|\r|\n/).length;
	}
	indentMatcher(e, m, h, g) {
		if (!this.isStartOfLine(e, m)) return null;
		let { currIndentLevel: _, prevIndentLevel: v, match: y } = this.matchWhitespace(e, m, h, g);
		return _ <= v ? null : (this.indentationStack.push(_), y);
	}
	dedentMatcher(e, m, h, g) {
		if (!this.isStartOfLine(e, m)) return null;
		let { currIndentLevel: _, prevIndentLevel: v, match: y } = this.matchWhitespace(e, m, h, g);
		if (_ >= v) return null;
		let b = this.indentationStack.lastIndexOf(_);
		if (b === -1) return this.diagnostics.push({
			severity: "error",
			message: `Invalid dedent level ${_} at offset: ${m}. Current indentation stack: ${this.indentationStack}`,
			offset: m,
			length: y?.[0]?.length ?? 0,
			line: this.getLineNumber(e, m),
			column: 1
		}), null;
		let x = this.indentationStack.length - b - 1, S = e.substring(0, m).match(/[\r\n]+$/)?.[0].length ?? 1;
		for (let g = 0; g < x; g++) {
			let g = this.createIndentationTokenInstance(this.dedentTokenType, e, "", m - (S - 1));
			h.push(g), this.indentationStack.pop();
		}
		return null;
	}
	buildTerminalToken(e) {
		let m = super.buildTerminalToken(e), { indentTokenName: h, dedentTokenName: g, whitespaceTokenName: _ } = this.options;
		return m.name === h ? this.indentTokenType : m.name === g ? this.dedentTokenType : m.name === _ ? createToken({
			name: _,
			pattern: this.whitespaceRegExp,
			group: Lexer.SKIPPED
		}) : m;
	}
	flushRemainingDedents(e) {
		let m = [];
		for (; this.indentationStack.length > 1;) m.push(this.createIndentationTokenInstance(this.dedentTokenType, e, "", e.length)), this.indentationStack.pop();
		return this.indentationStack = [0], m;
	}
}, IndentationAwareLexer = class extends DefaultLexer {
	constructor(e) {
		if (super(e), e.parser.TokenBuilder instanceof IndentationAwareTokenBuilder) this.indentationTokenBuilder = e.parser.TokenBuilder;
		else throw Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
	}
	tokenize(e, m = DEFAULT_TOKENIZE_OPTIONS) {
		let h = super.tokenize(e), g = h.report;
		m?.mode === "full" && h.tokens.push(...g.remainingDedents), g.remainingDedents = [];
		let { indentTokenType: _, dedentTokenType: v } = this.indentationTokenBuilder, y = _.tokenTypeIdx, b = v.tokenTypeIdx, x = [], S = h.tokens.length - 1;
		for (let e = 0; e < S; e++) {
			let m = h.tokens[e], g = h.tokens[e + 1];
			if (m.tokenTypeIdx === y && g.tokenTypeIdx === b) {
				e++;
				continue;
			}
			x.push(m);
		}
		return S >= 0 && x.push(h.tokens[S]), h.tokens = x, h;
	}
}, EmptyFileSystemProvider = class {
	readFile() {
		throw Error("No file system is available.");
	}
	async readDirectory() {
		return [];
	}
};
const EmptyFileSystem = { fileSystemProvider: () => new EmptyFileSystemProvider() };
var minimalGrammarModule = {
	Grammar: () => void 0,
	LanguageMetaData: () => ({
		caseInsensitive: !1,
		fileExtensions: [".langium"],
		languageId: "langium"
	})
}, minimalSharedGrammarModule = { AstReflection: () => new LangiumGrammarAstReflection() };
function createMinimalGrammarServices() {
	let e = inject(createDefaultSharedCoreModule(EmptyFileSystem), minimalSharedGrammarModule), m = inject(createDefaultCoreModule({ shared: e }), minimalGrammarModule);
	return e.ServiceRegistry.register(m), m;
}
function loadGrammarFromJson(e) {
	let m = createMinimalGrammarServices(), h = m.serializer.JsonSerializer.deserialize(e);
	return m.shared.workspace.LangiumDocumentFactory.fromModel(h, URI.parse(`memory://${h.name ?? "grammar"}.langium`)), h;
}
var utils_exports = /* @__PURE__ */ __export({
	AstUtils: () => ast_utils_exports,
	BiMap: () => BiMap,
	Cancellation: () => cancellation_exports,
	ContextCache: () => ContextCache,
	CstUtils: () => cst_utils_exports,
	DONE_RESULT: () => DONE_RESULT,
	Deferred: () => Deferred,
	Disposable: () => Disposable,
	DisposableCache: () => DisposableCache,
	DocumentCache: () => DocumentCache,
	EMPTY_STREAM: () => EMPTY_STREAM,
	ErrorWithLocation: () => ErrorWithLocation,
	GrammarUtils: () => grammar_utils_exports,
	MultiMap: () => MultiMap,
	OperationCancelled: () => OperationCancelled,
	Reduction: () => Reduction,
	RegExpUtils: () => regexp_utils_exports,
	SimpleCache: () => SimpleCache,
	StreamImpl: () => StreamImpl,
	TreeStreamImpl: () => TreeStreamImpl,
	URI: () => URI,
	UriUtils: () => UriUtils,
	WorkspaceCache: () => WorkspaceCache,
	assertUnreachable: () => assertUnreachable,
	delayNextTick: () => delayNextTick,
	interruptAndCheck: () => interruptAndCheck,
	isOperationCancelled: () => isOperationCancelled,
	loadGrammarFromJson: () => loadGrammarFromJson,
	setInterruptionPeriod: () => setInterruptionPeriod,
	startCancelableOperation: () => startCancelableOperation,
	stream: () => stream
});
__reExport(utils_exports, event_exports), __reExport(/* @__PURE__ */ __export({
	AbstractAstReflection: () => AbstractAstReflection,
	AbstractCstNode: () => AbstractCstNode,
	AbstractLangiumParser: () => AbstractLangiumParser,
	AbstractParserErrorMessageProvider: () => AbstractParserErrorMessageProvider,
	AbstractThreadedAsyncParser: () => AbstractThreadedAsyncParser,
	AstUtils: () => ast_utils_exports,
	BiMap: () => BiMap,
	Cancellation: () => cancellation_exports,
	CompositeCstNodeImpl: () => CompositeCstNodeImpl,
	ContextCache: () => ContextCache,
	CstNodeBuilder: () => CstNodeBuilder,
	CstUtils: () => cst_utils_exports,
	DEFAULT_TOKENIZE_OPTIONS: () => DEFAULT_TOKENIZE_OPTIONS,
	DONE_RESULT: () => DONE_RESULT,
	DatatypeSymbol: () => DatatypeSymbol,
	DefaultAstNodeDescriptionProvider: () => DefaultAstNodeDescriptionProvider,
	DefaultAstNodeLocator: () => DefaultAstNodeLocator,
	DefaultAsyncParser: () => DefaultAsyncParser,
	DefaultCommentProvider: () => DefaultCommentProvider,
	DefaultConfigurationProvider: () => DefaultConfigurationProvider,
	DefaultDocumentBuilder: () => DefaultDocumentBuilder,
	DefaultDocumentValidator: () => DefaultDocumentValidator,
	DefaultHydrator: () => DefaultHydrator,
	DefaultIndexManager: () => DefaultIndexManager,
	DefaultJsonSerializer: () => DefaultJsonSerializer,
	DefaultLangiumDocumentFactory: () => DefaultLangiumDocumentFactory,
	DefaultLangiumDocuments: () => DefaultLangiumDocuments,
	DefaultLexer: () => DefaultLexer,
	DefaultLexerErrorMessageProvider: () => DefaultLexerErrorMessageProvider,
	DefaultLinker: () => DefaultLinker,
	DefaultNameProvider: () => DefaultNameProvider,
	DefaultReferenceDescriptionProvider: () => DefaultReferenceDescriptionProvider,
	DefaultReferences: () => DefaultReferences,
	DefaultScopeComputation: () => DefaultScopeComputation,
	DefaultScopeProvider: () => DefaultScopeProvider,
	DefaultServiceRegistry: () => DefaultServiceRegistry,
	DefaultTokenBuilder: () => DefaultTokenBuilder,
	DefaultValueConverter: () => DefaultValueConverter,
	DefaultWorkspaceLock: () => DefaultWorkspaceLock,
	DefaultWorkspaceManager: () => DefaultWorkspaceManager,
	Deferred: () => Deferred,
	Disposable: () => Disposable,
	DisposableCache: () => DisposableCache,
	DocumentCache: () => DocumentCache,
	DocumentState: () => DocumentState,
	DocumentValidator: () => DocumentValidator,
	EMPTY_SCOPE: () => EMPTY_SCOPE,
	EMPTY_STREAM: () => EMPTY_STREAM,
	EmptyFileSystem: () => EmptyFileSystem,
	EmptyFileSystemProvider: () => EmptyFileSystemProvider,
	ErrorWithLocation: () => ErrorWithLocation,
	GrammarAST: () => ast_exports,
	GrammarUtils: () => grammar_utils_exports,
	IndentationAwareLexer: () => IndentationAwareLexer,
	IndentationAwareTokenBuilder: () => IndentationAwareTokenBuilder,
	JSDocDocumentationProvider: () => JSDocDocumentationProvider,
	LangiumCompletionParser: () => LangiumCompletionParser,
	LangiumParser: () => LangiumParser,
	LangiumParserErrorMessageProvider: () => LangiumParserErrorMessageProvider,
	LeafCstNodeImpl: () => LeafCstNodeImpl,
	LexingMode: () => LexingMode,
	MapScope: () => MapScope,
	Module: () => Module,
	MultiMap: () => MultiMap,
	OperationCancelled: () => OperationCancelled,
	ParserWorker: () => ParserWorker,
	Reduction: () => Reduction,
	RegExpUtils: () => regexp_utils_exports,
	RootCstNodeImpl: () => RootCstNodeImpl,
	SimpleCache: () => SimpleCache,
	StreamImpl: () => StreamImpl,
	StreamScope: () => StreamScope,
	TextDocument: () => TextDocument,
	TreeStreamImpl: () => TreeStreamImpl,
	URI: () => URI,
	UriUtils: () => UriUtils,
	ValidationCategory: () => ValidationCategory,
	ValidationRegistry: () => ValidationRegistry,
	ValueConverter: () => ValueConverter,
	WorkspaceCache: () => WorkspaceCache,
	assertUnreachable: () => assertUnreachable,
	createCompletionParser: () => createCompletionParser,
	createDefaultCoreModule: () => createDefaultCoreModule,
	createDefaultSharedCoreModule: () => createDefaultSharedCoreModule,
	createGrammarConfig: () => createGrammarConfig,
	createLangiumParser: () => createLangiumParser,
	createParser: () => createParser,
	delayNextTick: () => delayNextTick,
	diagnosticData: () => diagnosticData,
	eagerLoad: () => eagerLoad,
	getDiagnosticRange: () => getDiagnosticRange,
	indentationBuilderDefaultOptions: () => indentationBuilderDefaultOptions,
	inject: () => inject,
	interruptAndCheck: () => interruptAndCheck,
	isAstNode: () => isAstNode,
	isAstNodeDescription: () => isAstNodeDescription,
	isAstNodeWithComment: () => isAstNodeWithComment,
	isCompositeCstNode: () => isCompositeCstNode,
	isIMultiModeLexerDefinition: () => isIMultiModeLexerDefinition,
	isJSDoc: () => isJSDoc,
	isLeafCstNode: () => isLeafCstNode,
	isLinkingError: () => isLinkingError,
	isNamed: () => isNamed,
	isOperationCancelled: () => isOperationCancelled,
	isReference: () => isReference,
	isRootCstNode: () => isRootCstNode,
	isTokenTypeArray: () => isTokenTypeArray,
	isTokenTypeDictionary: () => isTokenTypeDictionary,
	loadGrammarFromJson: () => loadGrammarFromJson,
	parseJSDoc: () => parseJSDoc,
	prepareLangiumParser: () => prepareLangiumParser,
	setInterruptionPeriod: () => setInterruptionPeriod,
	startCancelableOperation: () => startCancelableOperation,
	stream: () => stream,
	toDiagnosticData: () => toDiagnosticData,
	toDiagnosticSeverity: () => toDiagnosticSeverity
}), utils_exports);
var __defProp = Object.defineProperty, __name = (e, m) => __defProp(e, "name", {
	value: m,
	configurable: !0
}), Statement = "Statement", Architecture = "Architecture";
function isArchitecture(e) {
	return reflection.isInstance(e, Architecture);
}
__name(isArchitecture, "isArchitecture");
var Axis = "Axis", Branch = "Branch";
function isBranch(e) {
	return reflection.isInstance(e, Branch);
}
__name(isBranch, "isBranch");
var Checkout = "Checkout", CherryPicking = "CherryPicking", ClassDefStatement = "ClassDefStatement", Commit = "Commit";
function isCommit(e) {
	return reflection.isInstance(e, Commit);
}
__name(isCommit, "isCommit");
var Curve = "Curve", Edge = "Edge", Entry = "Entry", GitGraph = "GitGraph";
function isGitGraph(e) {
	return reflection.isInstance(e, GitGraph);
}
__name(isGitGraph, "isGitGraph");
var Group = "Group", Info = "Info";
function isInfo(e) {
	return reflection.isInstance(e, Info);
}
__name(isInfo, "isInfo");
var Item = "Item", Junction = "Junction", Merge = "Merge";
function isMerge(e) {
	return reflection.isInstance(e, Merge);
}
__name(isMerge, "isMerge");
var Option = "Option", Packet = "Packet";
function isPacket(e) {
	return reflection.isInstance(e, Packet);
}
__name(isPacket, "isPacket");
var PacketBlock = "PacketBlock";
function isPacketBlock(e) {
	return reflection.isInstance(e, PacketBlock);
}
__name(isPacketBlock, "isPacketBlock");
function isPie(e) {
	return reflection.isInstance(e, "Pie");
}
__name(isPie, "isPie");
var PieSection = "PieSection";
function isPieSection(e) {
	return reflection.isInstance(e, PieSection);
}
__name(isPieSection, "isPieSection");
var Radar = "Radar", Service = "Service", Treemap = "Treemap";
function isTreemap(e) {
	return reflection.isInstance(e, Treemap);
}
__name(isTreemap, "isTreemap");
var TreemapRow = "TreemapRow", Direction = "Direction", Leaf = "Leaf", Section = "Section", MermaidAstReflection = class extends AbstractAstReflection {
	static #_ = __name(this, "MermaidAstReflection");
	getAllTypes() {
		return [
			Architecture,
			Axis,
			Branch,
			Checkout,
			CherryPicking,
			ClassDefStatement,
			Commit,
			Curve,
			Direction,
			Edge,
			Entry,
			GitGraph,
			Group,
			Info,
			Item,
			Junction,
			Leaf,
			Merge,
			Option,
			Packet,
			PacketBlock,
			"Pie",
			PieSection,
			Radar,
			Section,
			Service,
			Statement,
			Treemap,
			TreemapRow
		];
	}
	computeIsSubtype(e, m) {
		switch (e) {
			case Branch:
			case Checkout:
			case CherryPicking:
			case Commit:
			case Merge: return this.isSubtype(Statement, m);
			case Direction: return this.isSubtype(GitGraph, m);
			case Leaf:
			case Section: return this.isSubtype(Item, m);
			default: return !1;
		}
	}
	getReferenceType(e) {
		let m = `${e.container.$type}:${e.property}`;
		switch (m) {
			case "Entry:axis": return Axis;
			default: throw Error(`${m} is not a valid reference id.`);
		}
	}
	getTypeMetaData(e) {
		switch (e) {
			case Architecture: return {
				name: Architecture,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "edges",
						defaultValue: []
					},
					{
						name: "groups",
						defaultValue: []
					},
					{
						name: "junctions",
						defaultValue: []
					},
					{
						name: "services",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case Axis: return {
				name: Axis,
				properties: [{ name: "label" }, { name: "name" }]
			};
			case Branch: return {
				name: Branch,
				properties: [{ name: "name" }, { name: "order" }]
			};
			case Checkout: return {
				name: Checkout,
				properties: [{ name: "branch" }]
			};
			case CherryPicking: return {
				name: CherryPicking,
				properties: [
					{ name: "id" },
					{ name: "parent" },
					{
						name: "tags",
						defaultValue: []
					}
				]
			};
			case ClassDefStatement: return {
				name: ClassDefStatement,
				properties: [{ name: "className" }, { name: "styleText" }]
			};
			case Commit: return {
				name: Commit,
				properties: [
					{ name: "id" },
					{ name: "message" },
					{
						name: "tags",
						defaultValue: []
					},
					{ name: "type" }
				]
			};
			case Curve: return {
				name: Curve,
				properties: [
					{
						name: "entries",
						defaultValue: []
					},
					{ name: "label" },
					{ name: "name" }
				]
			};
			case Edge: return {
				name: Edge,
				properties: [
					{ name: "lhsDir" },
					{
						name: "lhsGroup",
						defaultValue: !1
					},
					{ name: "lhsId" },
					{
						name: "lhsInto",
						defaultValue: !1
					},
					{ name: "rhsDir" },
					{
						name: "rhsGroup",
						defaultValue: !1
					},
					{ name: "rhsId" },
					{
						name: "rhsInto",
						defaultValue: !1
					},
					{ name: "title" }
				]
			};
			case Entry: return {
				name: Entry,
				properties: [{ name: "axis" }, { name: "value" }]
			};
			case GitGraph: return {
				name: GitGraph,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "statements",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case Group: return {
				name: Group,
				properties: [
					{ name: "icon" },
					{ name: "id" },
					{ name: "in" },
					{ name: "title" }
				]
			};
			case Info: return {
				name: Info,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{ name: "title" }
				]
			};
			case Item: return {
				name: Item,
				properties: [{ name: "classSelector" }, { name: "name" }]
			};
			case Junction: return {
				name: Junction,
				properties: [{ name: "id" }, { name: "in" }]
			};
			case Merge: return {
				name: Merge,
				properties: [
					{ name: "branch" },
					{ name: "id" },
					{
						name: "tags",
						defaultValue: []
					},
					{ name: "type" }
				]
			};
			case Option: return {
				name: Option,
				properties: [{ name: "name" }, {
					name: "value",
					defaultValue: !1
				}]
			};
			case Packet: return {
				name: Packet,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "blocks",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case PacketBlock: return {
				name: PacketBlock,
				properties: [
					{ name: "bits" },
					{ name: "end" },
					{ name: "label" },
					{ name: "start" }
				]
			};
			case "Pie": return {
				name: "Pie",
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "sections",
						defaultValue: []
					},
					{
						name: "showData",
						defaultValue: !1
					},
					{ name: "title" }
				]
			};
			case PieSection: return {
				name: PieSection,
				properties: [{ name: "label" }, { name: "value" }]
			};
			case Radar: return {
				name: Radar,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{
						name: "axes",
						defaultValue: []
					},
					{
						name: "curves",
						defaultValue: []
					},
					{
						name: "options",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case Service: return {
				name: Service,
				properties: [
					{ name: "icon" },
					{ name: "iconText" },
					{ name: "id" },
					{ name: "in" },
					{ name: "title" }
				]
			};
			case Treemap: return {
				name: Treemap,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{ name: "title" },
					{
						name: "TreemapRows",
						defaultValue: []
					}
				]
			};
			case TreemapRow: return {
				name: TreemapRow,
				properties: [{ name: "indent" }, { name: "item" }]
			};
			case Direction: return {
				name: Direction,
				properties: [
					{ name: "accDescr" },
					{ name: "accTitle" },
					{ name: "dir" },
					{
						name: "statements",
						defaultValue: []
					},
					{ name: "title" }
				]
			};
			case Leaf: return {
				name: Leaf,
				properties: [
					{ name: "classSelector" },
					{ name: "name" },
					{ name: "value" }
				]
			};
			case Section: return {
				name: Section,
				properties: [{ name: "classSelector" }, { name: "name" }]
			};
			default: return {
				name: e,
				properties: []
			};
		}
	}
}, reflection = new MermaidAstReflection(), loadedInfoGrammar, InfoGrammar = /* @__PURE__ */ __name(() => loadedInfoGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"Info\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Info\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"info\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"showInfo\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"definesHiddenTokens\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"}},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\"},\"fragment\":false}],\"definesHiddenTokens\":false,\"hiddenTokens\":[],\"interfaces\":[],\"types\":[],\"usedGrammars\":[]}"), "InfoGrammar"), loadedPacketGrammar, PacketGrammar = /* @__PURE__ */ __name(() => loadedPacketGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"Packet\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Packet\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"packet\"},{\"$type\":\"Keyword\",\"value\":\"packet-beta\"}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"blocks\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"definesHiddenTokens\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"PacketBlock\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"start\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"end\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"+\"},{\"$type\":\"Assignment\",\"feature\":\"bits\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}]}]},{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"}},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\"},\"fragment\":false}],\"definesHiddenTokens\":false,\"hiddenTokens\":[],\"interfaces\":[],\"types\":[],\"usedGrammars\":[]}"), "PacketGrammar"), loadedPieGrammar, PieGrammar = /* @__PURE__ */ __name(() => loadedPieGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"Pie\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Pie\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"pie\"},{\"$type\":\"Assignment\",\"feature\":\"showData\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"showData\"},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"sections\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"definesHiddenTokens\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"PieSection\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/-?(0|[1-9][0-9]*)(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"}},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"}},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\"},\"fragment\":false}],\"definesHiddenTokens\":false,\"hiddenTokens\":[],\"interfaces\":[],\"types\":[],\"usedGrammars\":[]}"), "PieGrammar"), loadedArchitectureGrammar, ArchitectureGrammar = /* @__PURE__ */ __name(() => loadedArchitectureGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"Architecture\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Architecture\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"architecture-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"definesHiddenTokens\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"groups\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"services\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"junctions\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"edges\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"LeftPort\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"lhsDir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"RightPort\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"rhsDir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\":\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Arrow\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"lhsInto\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"--\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"-\"}]}]},{\"$type\":\"Assignment\",\"feature\":\"rhsInto\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Group\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"group\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"icon\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@28\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Service\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"service\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"iconText\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"icon\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@28\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Junction\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"junction\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Edge\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"lhsId\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"lhsGroup\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"rhsId\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"rhsGroup\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_DIRECTION\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"L\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"R\"}}]},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"T\"}}]},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"B\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_GROUP\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\{group\\\\}/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_INTO\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/<|>/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"}},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARCH_ICON\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\([\\\\w-:]+\\\\)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARCH_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\[[\\\\w ]+\\\\]/\"},\"fragment\":false,\"hidden\":false}],\"definesHiddenTokens\":false,\"hiddenTokens\":[],\"interfaces\":[],\"types\":[],\"usedGrammars\":[]}"), "ArchitectureGrammar"), loadedGitGraphGrammar, GitGraphGrammar = /* @__PURE__ */ __name(() => loadedGitGraphGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"GitGraph\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"GitGraph\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"Keyword\",\"value\":\":\"}]},{\"$type\":\"Keyword\",\"value\":\"gitGraph:\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\":\"}]}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"statements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"definesHiddenTokens\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Direction\",\"definition\":{\"$type\":\"Assignment\",\"feature\":\"dir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"LR\"},{\"$type\":\"Keyword\",\"value\":\"TB\"},{\"$type\":\"Keyword\",\"value\":\"BT\"}]}},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Commit\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"commit\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"msg:\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"message\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"type:\"},{\"$type\":\"Assignment\",\"feature\":\"type\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"NORMAL\"},{\"$type\":\"Keyword\",\"value\":\"REVERSE\"},{\"$type\":\"Keyword\",\"value\":\"HIGHLIGHT\"}]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Branch\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"branch\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"order:\"},{\"$type\":\"Assignment\",\"feature\":\"order\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Merge\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"merge\"},{\"$type\":\"Assignment\",\"feature\":\"branch\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"type:\"},{\"$type\":\"Assignment\",\"feature\":\"type\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"NORMAL\"},{\"$type\":\"Keyword\",\"value\":\"REVERSE\"},{\"$type\":\"Keyword\",\"value\":\"HIGHLIGHT\"}]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Checkout\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"checkout\"},{\"$type\":\"Keyword\",\"value\":\"switch\"}]},{\"$type\":\"Assignment\",\"feature\":\"branch\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"CherryPicking\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"cherry-pick\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"parent:\"},{\"$type\":\"Assignment\",\"feature\":\"parent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"}},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"REFERENCE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/\"},\"fragment\":false,\"hidden\":false}],\"definesHiddenTokens\":false,\"hiddenTokens\":[],\"interfaces\":[],\"types\":[],\"usedGrammars\":[]}"), "GitGraphGrammar"), loadedRadarGrammar, RadarGrammar = /* @__PURE__ */ __name(() => loadedRadarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"Radar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Radar\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"radar-beta\"},{\"$type\":\"Keyword\",\"value\":\"radar-beta:\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"radar-beta\"},{\"$type\":\"Keyword\",\"value\":\":\"}]}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"axis\"},{\"$type\":\"Assignment\",\"feature\":\"axes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"axes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"curve\"},{\"$type\":\"Assignment\",\"feature\":\"curves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"curves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"options\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"options\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"definesHiddenTokens\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Label\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Axis\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Curve\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Keyword\",\"value\":\"{\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"}\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Entries\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"}]}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"DetailedEntry\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"axis\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@2\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},\"deprecatedSyntax\":false}},{\"$type\":\"Keyword\",\"value\":\":\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"NumberEntry\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Option\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"showLegend\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"ticks\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"max\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"min\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"graticule\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}}]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"GRATICULE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"circle\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"polygon\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"}},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\"},\"fragment\":false}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Entry\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"axis\",\"isOptional\":true,\"type\":{\"$type\":\"ReferenceType\",\"referenceType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@2\"}}}},{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"number\"},\"isOptional\":false}],\"superTypes\":[]}],\"definesHiddenTokens\":false,\"hiddenTokens\":[],\"types\":[],\"usedGrammars\":[]}"), "RadarGrammar"), loadedTreemapGrammar, TreemapGrammar = /* @__PURE__ */ __name(() => loadedTreemapGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"Treemap\",\"rules\":[{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}}],\"cardinality\":\"+\"},\"definesHiddenTokens\":false,\"entry\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Treemap\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"TreemapRows\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"definesHiddenTokens\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"TREEMAP_KEYWORD\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"treemap-beta\"}},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"treemap\"}}]},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"CLASS_DEF\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STYLE_SEPARATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\":::\"}},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"SEPARATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\":\"}},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"COMMA\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\",\"}},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ML_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\%\\\\%[^\\\\n]*/\"},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"NL\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\"},\"fragment\":false},{\"$type\":\"ParserRule\",\"name\":\"TreemapRow\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"indent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"item\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"ClassDef\",\"dataType\":\"string\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Item\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Section\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"classSelector\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"ParserRule\",\"name\":\"Leaf\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"classSelector\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"INDENTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]{1,}/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[a-zA-Z_][a-zA-Z0-9_]*/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9_\\\\.\\\\,]+/\"},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"MyNumber\",\"dataType\":\"number\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},\"definesHiddenTokens\":false,\"entry\":false,\"fragment\":false,\"hiddenTokens\":[],\"parameters\":[],\"wildcard\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"[^\\\"]*\\\"|'[^']*'/\"},\"fragment\":false,\"hidden\":false}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Item\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"classSelector\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"Section\",\"superTypes\":[{\"$ref\":\"#/interfaces@0\"}],\"attributes\":[]},{\"$type\":\"Interface\",\"name\":\"Leaf\",\"superTypes\":[{\"$ref\":\"#/interfaces@0\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"number\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"ClassDefStatement\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"className\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"styleText\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"Treemap\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"TreemapRows\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@14\"}}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]}],\"definesHiddenTokens\":false,\"hiddenTokens\":[],\"imports\":[],\"types\":[],\"usedGrammars\":[],\"$comment\":\"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */\"}"), "TreemapGrammar"), InfoLanguageMetaData = {
	languageId: "info",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, PacketLanguageMetaData = {
	languageId: "packet",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, PieLanguageMetaData = {
	languageId: "pie",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, ArchitectureLanguageMetaData = {
	languageId: "architecture",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, GitGraphLanguageMetaData = {
	languageId: "gitGraph",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, RadarLanguageMetaData = {
	languageId: "radar",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, TreemapLanguageMetaData = {
	languageId: "treemap",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, MermaidGeneratedSharedModule = { AstReflection: /* @__PURE__ */ __name(() => new MermaidAstReflection(), "AstReflection") }, InfoGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => InfoGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => InfoLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, PacketGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => PacketGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => PacketLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, PieGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => PieGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => PieLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, ArchitectureGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => ArchitectureGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => ArchitectureLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, GitGraphGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => GitGraphGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => GitGraphLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, RadarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => RadarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => RadarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, TreemapGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => TreemapGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => TreemapLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, rulesRegexes = {
	ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/,
	ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/,
	TITLE: /title([\t ][^\n\r]*|)/
}, AbstractMermaidValueConverter = class extends DefaultValueConverter {
	static #_ = __name(this, "AbstractMermaidValueConverter");
	runConverter(e, m, h) {
		let g = this.runCommonConverter(e, m, h);
		return g === void 0 && (g = this.runCustomConverter(e, m, h)), g === void 0 ? super.runConverter(e, m, h) : g;
	}
	runCommonConverter(e, m, h) {
		let g = rulesRegexes[e.name];
		if (g === void 0) return;
		let _ = g.exec(m);
		if (_ !== null) {
			if (_[1] !== void 0) return _[1].trim().replace(/[\t ]{2,}/gm, " ");
			if (_[2] !== void 0) return _[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, "\n");
		}
	}
}, CommonValueConverter = class extends AbstractMermaidValueConverter {
	static #_ = __name(this, "CommonValueConverter");
	runCustomConverter(e, m, h) {}
}, AbstractMermaidTokenBuilder = class extends DefaultTokenBuilder {
	static #_ = __name(this, "AbstractMermaidTokenBuilder");
	constructor(e) {
		super(), this.keywords = new Set(e);
	}
	buildKeywordTokens(e, m, h) {
		let g = super.buildKeywordTokens(e, m, h);
		return g.forEach((e) => {
			this.keywords.has(e.name) && e.PATTERN !== void 0 && (e.PATTERN = /* @__PURE__ */ RegExp(e.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
		}), g;
	}
};
(class extends AbstractMermaidTokenBuilder {
	static #_ = __name(this, "CommonTokenBuilder");
});
export { GitGraphGeneratedModule as a, PacketGeneratedModule as c, TreemapGeneratedModule as d, __name as f, createDefaultSharedCoreModule as g, createDefaultCoreModule as h, CommonValueConverter as i, PieGeneratedModule as l, inject as m, AbstractMermaidValueConverter as n, InfoGeneratedModule as o, EmptyFileSystem as p, ArchitectureGeneratedModule as r, MermaidGeneratedSharedModule as s, AbstractMermaidTokenBuilder as t, RadarGeneratedModule as u };
