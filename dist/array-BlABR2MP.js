Array.prototype.slice;
function array_default(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
export { array_default as t };
