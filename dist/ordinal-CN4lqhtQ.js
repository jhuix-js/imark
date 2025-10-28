import { n as initRange } from "./init-ULMCeUqd.js";
var InternMap = class extends Map {
	constructor(e, r = keyof) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: r }
		}), e != null) for (let [r, i] of e) this.set(r, i);
	}
	get(e) {
		return super.get(intern_get(this, e));
	}
	has(e) {
		return super.has(intern_get(this, e));
	}
	set(e, r) {
		return super.set(intern_set(this, e), r);
	}
	delete(e) {
		return super.delete(intern_delete(this, e));
	}
}, InternSet = class extends Set {
	constructor(e, r = keyof) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: r }
		}), e != null) for (let r of e) this.add(r);
	}
	has(e) {
		return super.has(intern_get(this, e));
	}
	add(e) {
		return super.add(intern_set(this, e));
	}
	delete(e) {
		return super.delete(intern_delete(this, e));
	}
};
function intern_get({ _intern: e, _key: r }, i) {
	let a = r(i);
	return e.has(a) ? e.get(a) : i;
}
function intern_set({ _intern: e, _key: r }, i) {
	let a = r(i);
	return e.has(a) ? e.get(a) : (e.set(a, i), i);
}
function intern_delete({ _intern: e, _key: r }, i) {
	let a = r(i);
	return e.has(a) && (i = e.get(a), e.delete(a)), i;
}
function keyof(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
const implicit = Symbol("implicit");
function ordinal() {
	var i = new InternMap(), a = [], o = [], s = implicit;
	function c(e) {
		let r = i.get(e);
		if (r === void 0) {
			if (s !== implicit) return s;
			i.set(e, r = a.push(e) - 1);
		}
		return o[r % o.length];
	}
	return c.domain = function(e) {
		if (!arguments.length) return a.slice();
		a = [], i = new InternMap();
		for (let r of e) i.has(r) || i.set(r, a.push(r) - 1);
		return c;
	}, c.range = function(e) {
		return arguments.length ? (o = Array.from(e), c) : o.slice();
	}, c.unknown = function(e) {
		return arguments.length ? (s = e, c) : s;
	}, c.copy = function() {
		return ordinal(a, o).unknown(s);
	}, initRange.apply(c, arguments), c;
}
export { ordinal as n, InternSet as r, implicit as t };

//# sourceMappingURL=ordinal-CN4lqhtQ.js.map