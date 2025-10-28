import { G as _root_default, I as _getNative_default, L as _toSource_default, U as _baseGetTag_default, V as isArray_default, b as isArguments_default, f as _Map_default, g as isTypedArray_default, m as _overArg_default, w as isArrayLike_default, x as _isPrototype_default, y as isBuffer_default } from "./isArrayLikeObject-DKHowMnG.js";
var _WeakMap_default = _getNative_default(_root_default, "WeakMap"), _nativeKeys_default = _overArg_default(Object.keys, Object), hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function baseKeys(p) {
	if (!_isPrototype_default(p)) return _nativeKeys_default(p);
	var P = [];
	for (var F in Object(p)) hasOwnProperty$1.call(p, F) && F != "constructor" && P.push(F);
	return P;
}
var _baseKeys_default = baseKeys, _DataView_default = _getNative_default(_root_default, "DataView"), _Promise_default = _getNative_default(_root_default, "Promise"), _Set_default = _getNative_default(_root_default, "Set"), mapTag$1 = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", dataViewCtorString = _toSource_default(_DataView_default), mapCtorString = _toSource_default(_Map_default), promiseCtorString = _toSource_default(_Promise_default), setCtorString = _toSource_default(_Set_default), weakMapCtorString = _toSource_default(_WeakMap_default), getTag = _baseGetTag_default;
(_DataView_default && getTag(new _DataView_default(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || _Map_default && getTag(new _Map_default()) != mapTag$1 || _Promise_default && getTag(_Promise_default.resolve()) != promiseTag || _Set_default && getTag(new _Set_default()) != setTag$1 || _WeakMap_default && getTag(new _WeakMap_default()) != weakMapTag) && (getTag = function(p) {
	var P = _baseGetTag_default(p), I = P == objectTag ? p.constructor : void 0, L = I ? _toSource_default(I) : "";
	if (L) switch (L) {
		case dataViewCtorString: return dataViewTag;
		case mapCtorString: return mapTag$1;
		case promiseCtorString: return promiseTag;
		case setCtorString: return setTag$1;
		case weakMapCtorString: return weakMapTag;
	}
	return P;
});
var _getTag_default = getTag, mapTag = "[object Map]", setTag = "[object Set]", hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(p) {
	if (p == null) return !0;
	if (isArrayLike_default(p) && (isArray_default(p) || typeof p == "string" || typeof p.splice == "function" || isBuffer_default(p) || isTypedArray_default(p) || isArguments_default(p))) return !p.length;
	var P = _getTag_default(p);
	if (P == mapTag || P == setTag) return !p.size;
	if (_isPrototype_default(p)) return !_baseKeys_default(p).length;
	for (var F in p) if (hasOwnProperty.call(p, F)) return !1;
	return !0;
}
var isEmpty_default = isEmpty;
export { _baseKeys_default as i, _getTag_default as n, _Set_default as r, isEmpty_default as t };
