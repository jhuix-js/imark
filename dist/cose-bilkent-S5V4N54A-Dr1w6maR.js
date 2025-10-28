import { s as __toESM, t as __commonJSMin } from "./chunk-DgPTj83v.js";
import "./dist-CoGdlYHY.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import "./timer-Bp1bAW5T.js";
import { t as cytoscape$1 } from "./cytoscape.esm-DEQqGYaL.js";
var require_layout_base = /* @__PURE__ */ __commonJSMin(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof e == "object" ? e.layoutBase = r() : n.layoutBase = r();
	})(e, function() {
		return (function(e) {
			var t = {};
			function n(r) {
				if (t[r]) return t[r].exports;
				var i = t[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
			}
			return n.m = e, n.c = t, n.i = function(e) {
				return e;
			}, n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: r
				});
			}, n.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return n.d(t, "a", t), t;
			}, n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n.p = "", n(n.s = 26);
		})([
			(function(e, t, n) {
				function r() {}
				r.QUALITY = 1, r.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, r.DEFAULT_INCREMENTAL = !1, r.DEFAULT_ANIMATION_ON_LAYOUT = !0, r.DEFAULT_ANIMATION_DURING_LAYOUT = !1, r.DEFAULT_ANIMATION_PERIOD = 50, r.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, r.DEFAULT_GRAPH_MARGIN = 15, r.NODE_DIMENSIONS_INCLUDE_LABELS = !1, r.SIMPLE_NODE_SIZE = 40, r.SIMPLE_NODE_HALF_SIZE = r.SIMPLE_NODE_SIZE / 2, r.EMPTY_COMPOUND_NODE_SIZE = 40, r.MIN_EDGE_LENGTH = 1, r.WORLD_BOUNDARY = 1e6, r.INITIAL_WORLD_BOUNDARY = r.WORLD_BOUNDARY / 1e3, r.WORLD_CENTER_X = 1200, r.WORLD_CENTER_Y = 900, e.exports = r;
			}),
			(function(e, t, n) {
				var r = n(2), i = n(8), a = n(9);
				function o(e, t, n) {
					r.call(this, n), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = n, this.bendpoints = [], this.source = e, this.target = t;
				}
				for (var s in o.prototype = Object.create(r.prototype), r) o[s] = r[s];
				o.prototype.getSource = function() {
					return this.source;
				}, o.prototype.getTarget = function() {
					return this.target;
				}, o.prototype.isInterGraph = function() {
					return this.isInterGraph;
				}, o.prototype.getLength = function() {
					return this.length;
				}, o.prototype.isOverlapingSourceAndTarget = function() {
					return this.isOverlapingSourceAndTarget;
				}, o.prototype.getBendpoints = function() {
					return this.bendpoints;
				}, o.prototype.getLca = function() {
					return this.lca;
				}, o.prototype.getSourceInLca = function() {
					return this.sourceInLca;
				}, o.prototype.getTargetInLca = function() {
					return this.targetInLca;
				}, o.prototype.getOtherEnd = function(e) {
					if (this.source === e) return this.target;
					if (this.target === e) return this.source;
					throw "Node is not incident with this edge";
				}, o.prototype.getOtherEndInGraph = function(e, t) {
					for (var n = this.getOtherEnd(e), r = t.getGraphManager().getRoot();;) {
						if (n.getOwner() == t) return n;
						if (n.getOwner() == r) break;
						n = n.getOwner().getParent();
					}
					return null;
				}, o.prototype.updateLength = function() {
					var e = [
						,
						,
						,
						,
					];
					this.isOverlapingSourceAndTarget = i.getIntersection(this.target.getRect(), this.source.getRect(), e), this.isOverlapingSourceAndTarget || (this.lengthX = e[0] - e[2], this.lengthY = e[1] - e[3], Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
				}, o.prototype.updateLengthSimple = function() {
					this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
				}, e.exports = o;
			}),
			(function(e, t, n) {
				function r(e) {
					this.vGraphObject = e;
				}
				e.exports = r;
			}),
			(function(e, t, n) {
				var r = n(2), i = n(10), a = n(13), o = n(0), s = n(16), c = n(4);
				function l(e, t, n, o) {
					n == null && o == null && (o = t), r.call(this, o), e.graphManager != null && (e = e.graphManager), this.estimatedSize = i.MIN_VALUE, this.inclusionTreeDepth = i.MAX_VALUE, this.vGraphObject = o, this.edges = [], this.graphManager = e, n != null && t != null ? this.rect = new a(t.x, t.y, n.width, n.height) : this.rect = new a();
				}
				for (var u in l.prototype = Object.create(r.prototype), r) l[u] = r[u];
				l.prototype.getEdges = function() {
					return this.edges;
				}, l.prototype.getChild = function() {
					return this.child;
				}, l.prototype.getOwner = function() {
					return this.owner;
				}, l.prototype.getWidth = function() {
					return this.rect.width;
				}, l.prototype.setWidth = function(e) {
					this.rect.width = e;
				}, l.prototype.getHeight = function() {
					return this.rect.height;
				}, l.prototype.setHeight = function(e) {
					this.rect.height = e;
				}, l.prototype.getCenterX = function() {
					return this.rect.x + this.rect.width / 2;
				}, l.prototype.getCenterY = function() {
					return this.rect.y + this.rect.height / 2;
				}, l.prototype.getCenter = function() {
					return new c(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
				}, l.prototype.getLocation = function() {
					return new c(this.rect.x, this.rect.y);
				}, l.prototype.getRect = function() {
					return this.rect;
				}, l.prototype.getDiagonal = function() {
					return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
				}, l.prototype.getHalfTheDiagonal = function() {
					return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
				}, l.prototype.setRect = function(e, t) {
					this.rect.x = e.x, this.rect.y = e.y, this.rect.width = t.width, this.rect.height = t.height;
				}, l.prototype.setCenter = function(e, t) {
					this.rect.x = e - this.rect.width / 2, this.rect.y = t - this.rect.height / 2;
				}, l.prototype.setLocation = function(e, t) {
					this.rect.x = e, this.rect.y = t;
				}, l.prototype.moveBy = function(e, t) {
					this.rect.x += e, this.rect.y += t;
				}, l.prototype.getEdgeListToNode = function(e) {
					var t = [], n = this;
					return n.edges.forEach(function(r) {
						if (r.target == e) {
							if (r.source != n) throw "Incorrect edge source!";
							t.push(r);
						}
					}), t;
				}, l.prototype.getEdgesBetween = function(e) {
					var t = [], n = this;
					return n.edges.forEach(function(r) {
						if (!(r.source == n || r.target == n)) throw "Incorrect edge source and/or target";
						(r.target == e || r.source == e) && t.push(r);
					}), t;
				}, l.prototype.getNeighborsList = function() {
					var e = /* @__PURE__ */ new Set(), t = this;
					return t.edges.forEach(function(n) {
						if (n.source == t) e.add(n.target);
						else {
							if (n.target != t) throw "Incorrect incidency!";
							e.add(n.source);
						}
					}), e;
				}, l.prototype.withChildren = function() {
					var e = /* @__PURE__ */ new Set(), t, n;
					if (e.add(this), this.child != null) for (var r = this.child.getNodes(), i = 0; i < r.length; i++) t = r[i], n = t.withChildren(), n.forEach(function(t) {
						e.add(t);
					});
					return e;
				}, l.prototype.getNoOfChildren = function() {
					var e = 0, t;
					if (this.child == null) e = 1;
					else for (var n = this.child.getNodes(), r = 0; r < n.length; r++) t = n[r], e += t.getNoOfChildren();
					return e == 0 && (e = 1), e;
				}, l.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == i.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, l.prototype.calcEstimatedSize = function() {
					return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
				}, l.prototype.scatter = function() {
					var e, t, n = -o.INITIAL_WORLD_BOUNDARY, r = o.INITIAL_WORLD_BOUNDARY;
					e = o.WORLD_CENTER_X + s.nextDouble() * (r - n) + n;
					var i = -o.INITIAL_WORLD_BOUNDARY, a = o.INITIAL_WORLD_BOUNDARY;
					t = o.WORLD_CENTER_Y + s.nextDouble() * (a - i) + i, this.rect.x = e, this.rect.y = t;
				}, l.prototype.updateBounds = function() {
					if (this.getChild() == null) throw "assert failed";
					if (this.getChild().getNodes().length != 0) {
						var e = this.getChild();
						if (e.updateBounds(!0), this.rect.x = e.getLeft(), this.rect.y = e.getTop(), this.setWidth(e.getRight() - e.getLeft()), this.setHeight(e.getBottom() - e.getTop()), o.NODE_DIMENSIONS_INCLUDE_LABELS) {
							var t = e.getRight() - e.getLeft(), n = e.getBottom() - e.getTop();
							this.labelWidth > t && (this.rect.x -= (this.labelWidth - t) / 2, this.setWidth(this.labelWidth)), this.labelHeight > n && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - n) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - n), this.setHeight(this.labelHeight));
						}
					}
				}, l.prototype.getInclusionTreeDepth = function() {
					if (this.inclusionTreeDepth == i.MAX_VALUE) throw "assert failed";
					return this.inclusionTreeDepth;
				}, l.prototype.transform = function(e) {
					var t = this.rect.x;
					t > o.WORLD_BOUNDARY ? t = o.WORLD_BOUNDARY : t < -o.WORLD_BOUNDARY && (t = -o.WORLD_BOUNDARY);
					var n = this.rect.y;
					n > o.WORLD_BOUNDARY ? n = o.WORLD_BOUNDARY : n < -o.WORLD_BOUNDARY && (n = -o.WORLD_BOUNDARY);
					var r = new c(t, n), i = e.inverseTransformPoint(r);
					this.setLocation(i.x, i.y);
				}, l.prototype.getLeft = function() {
					return this.rect.x;
				}, l.prototype.getRight = function() {
					return this.rect.x + this.rect.width;
				}, l.prototype.getTop = function() {
					return this.rect.y;
				}, l.prototype.getBottom = function() {
					return this.rect.y + this.rect.height;
				}, l.prototype.getParent = function() {
					return this.owner == null ? null : this.owner.getParent();
				}, e.exports = l;
			}),
			(function(e, t, n) {
				function r(e, t) {
					e == null && t == null ? (this.x = 0, this.y = 0) : (this.x = e, this.y = t);
				}
				r.prototype.getX = function() {
					return this.x;
				}, r.prototype.getY = function() {
					return this.y;
				}, r.prototype.setX = function(e) {
					this.x = e;
				}, r.prototype.setY = function(e) {
					this.y = e;
				}, r.prototype.getDifference = function(e) {
					return new DimensionD(this.x - e.x, this.y - e.y);
				}, r.prototype.getCopy = function() {
					return new r(this.x, this.y);
				}, r.prototype.translate = function(e) {
					return this.x += e.width, this.y += e.height, this;
				}, e.exports = r;
			}),
			(function(e, t, n) {
				var r = n(2), i = n(10), a = n(0), o = n(6), s = n(3), c = n(1), l = n(13), u = n(12), d = n(11);
				function f(e, t, n) {
					r.call(this, n), this.estimatedSize = i.MIN_VALUE, this.margin = a.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = e, t != null && t instanceof o ? this.graphManager = t : t != null && t instanceof Layout && (this.graphManager = t.graphManager);
				}
				for (var p in f.prototype = Object.create(r.prototype), r) f[p] = r[p];
				f.prototype.getNodes = function() {
					return this.nodes;
				}, f.prototype.getEdges = function() {
					return this.edges;
				}, f.prototype.getGraphManager = function() {
					return this.graphManager;
				}, f.prototype.getParent = function() {
					return this.parent;
				}, f.prototype.getLeft = function() {
					return this.left;
				}, f.prototype.getRight = function() {
					return this.right;
				}, f.prototype.getTop = function() {
					return this.top;
				}, f.prototype.getBottom = function() {
					return this.bottom;
				}, f.prototype.isConnected = function() {
					return this.isConnected;
				}, f.prototype.add = function(e, t, n) {
					if (t == null && n == null) {
						var r = e;
						if (this.graphManager == null) throw "Graph has no graph mgr!";
						if (this.getNodes().indexOf(r) > -1) throw "Node already in graph!";
						return r.owner = this, this.getNodes().push(r), r;
					} else {
						var i = e;
						if (!(this.getNodes().indexOf(t) > -1 && this.getNodes().indexOf(n) > -1)) throw "Source or target not in graph!";
						if (!(t.owner == n.owner && t.owner == this)) throw "Both owners must be this graph!";
						return t.owner == n.owner ? (i.source = t, i.target = n, i.isInterGraph = !1, this.getEdges().push(i), t.edges.push(i), n != t && n.edges.push(i), i) : null;
					}
				}, f.prototype.remove = function(e) {
					var t = e;
					if (e instanceof s) {
						if (t == null) throw "Node is null!";
						if (!(t.owner != null && t.owner == this)) throw "Owner graph is invalid!";
						if (this.graphManager == null) throw "Owner graph manager is invalid!";
						for (var n = t.edges.slice(), r, i = n.length, a = 0; a < i; a++) r = n[a], r.isInterGraph ? this.graphManager.remove(r) : r.source.owner.remove(r);
						var o = this.nodes.indexOf(t);
						if (o == -1) throw "Node not in owner node list!";
						this.nodes.splice(o, 1);
					} else if (e instanceof c) {
						var r = e;
						if (r == null) throw "Edge is null!";
						if (!(r.source != null && r.target != null)) throw "Source and/or target is null!";
						if (!(r.source.owner != null && r.target.owner != null && r.source.owner == this && r.target.owner == this)) throw "Source and/or target owner is invalid!";
						var l = r.source.edges.indexOf(r), u = r.target.edges.indexOf(r);
						if (!(l > -1 && u > -1)) throw "Source and/or target doesn't know this edge!";
						r.source.edges.splice(l, 1), r.target != r.source && r.target.edges.splice(u, 1);
						var o = r.source.owner.getEdges().indexOf(r);
						if (o == -1) throw "Not in owner's edge list!";
						r.source.owner.getEdges().splice(o, 1);
					}
				}, f.prototype.updateLeftTop = function() {
					for (var e = i.MAX_VALUE, t = i.MAX_VALUE, n, r, a, o = this.getNodes(), s = o.length, c = 0; c < s; c++) {
						var l = o[c];
						n = l.getTop(), r = l.getLeft(), e > n && (e = n), t > r && (t = r);
					}
					return e == i.MAX_VALUE ? null : (a = o[0].getParent().paddingLeft == null ? this.margin : o[0].getParent().paddingLeft, this.left = t - a, this.top = e - a, new u(this.left, this.top));
				}, f.prototype.updateBounds = function(e) {
					for (var t = i.MAX_VALUE, n = -i.MAX_VALUE, r = i.MAX_VALUE, a = -i.MAX_VALUE, o, s, c, u, d, f = this.nodes, p = f.length, m = 0; m < p; m++) {
						var h = f[m];
						e && h.child != null && h.updateBounds(), o = h.getLeft(), s = h.getRight(), c = h.getTop(), u = h.getBottom(), t > o && (t = o), n < s && (n = s), r > c && (r = c), a < u && (a = u);
					}
					var g = new l(t, r, n - t, a - r);
					t == i.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), d = f[0].getParent().paddingLeft == null ? this.margin : f[0].getParent().paddingLeft, this.left = g.x - d, this.right = g.x + g.width + d, this.top = g.y - d, this.bottom = g.y + g.height + d;
				}, f.calculateBounds = function(e) {
					for (var t = i.MAX_VALUE, n = -i.MAX_VALUE, r = i.MAX_VALUE, a = -i.MAX_VALUE, o, s, c, u, d = e.length, f = 0; f < d; f++) {
						var p = e[f];
						o = p.getLeft(), s = p.getRight(), c = p.getTop(), u = p.getBottom(), t > o && (t = o), n < s && (n = s), r > c && (r = c), a < u && (a = u);
					}
					return new l(t, r, n - t, a - r);
				}, f.prototype.getInclusionTreeDepth = function() {
					return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
				}, f.prototype.getEstimatedSize = function() {
					if (this.estimatedSize == i.MIN_VALUE) throw "assert failed";
					return this.estimatedSize;
				}, f.prototype.calcEstimatedSize = function() {
					for (var e = 0, t = this.nodes, n = t.length, r = 0; r < n; r++) {
						var i = t[r];
						e += i.calcEstimatedSize();
					}
					return e == 0 ? this.estimatedSize = a.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = e / Math.sqrt(this.nodes.length), this.estimatedSize;
				}, f.prototype.updateConnected = function() {
					var e = this;
					if (this.nodes.length == 0) {
						this.isConnected = !0;
						return;
					}
					var t = new d(), n = /* @__PURE__ */ new Set(), r = this.nodes[0], i, a;
					for (r.withChildren().forEach(function(e) {
						t.push(e), n.add(e);
					}); t.length !== 0;) {
						r = t.shift(), i = r.getEdges();
						for (var o = i.length, s = 0; s < o; s++) a = i[s].getOtherEndInGraph(r, this), a != null && !n.has(a) && a.withChildren().forEach(function(e) {
							t.push(e), n.add(e);
						});
					}
					if (this.isConnected = !1, n.size >= this.nodes.length) {
						var c = 0;
						n.forEach(function(t) {
							t.owner == e && c++;
						}), c == this.nodes.length && (this.isConnected = !0);
					}
				}, e.exports = f;
			}),
			(function(e, t, n) {
				var r, i = n(1);
				function a(e) {
					r = n(5), this.layout = e, this.graphs = [], this.edges = [];
				}
				a.prototype.addRoot = function() {
					var e = this.layout.newGraph(), t = this.layout.newNode(null), n = this.add(e, t);
					return this.setRootGraph(n), this.rootGraph;
				}, a.prototype.add = function(e, t, n, r, i) {
					if (n == null && r == null && i == null) {
						if (e == null) throw "Graph is null!";
						if (t == null) throw "Parent node is null!";
						if (this.graphs.indexOf(e) > -1) throw "Graph already in this graph mgr!";
						if (this.graphs.push(e), e.parent != null) throw "Already has a parent!";
						if (t.child != null) throw "Already has a child!";
						return e.parent = t, t.child = e, e;
					} else {
						i = n, r = t, n = e;
						var a = r.getOwner(), o = i.getOwner();
						if (!(a != null && a.getGraphManager() == this)) throw "Source not in this graph mgr!";
						if (!(o != null && o.getGraphManager() == this)) throw "Target not in this graph mgr!";
						if (a == o) return n.isInterGraph = !1, a.add(n, r, i);
						if (n.isInterGraph = !0, n.source = r, n.target = i, this.edges.indexOf(n) > -1) throw "Edge already in inter-graph edge list!";
						if (this.edges.push(n), !(n.source != null && n.target != null)) throw "Edge source and/or target is null!";
						if (!(n.source.edges.indexOf(n) == -1 && n.target.edges.indexOf(n) == -1)) throw "Edge already in source and/or target incidency list!";
						return n.source.edges.push(n), n.target.edges.push(n), n;
					}
				}, a.prototype.remove = function(e) {
					if (e instanceof r) {
						var t = e;
						if (t.getGraphManager() != this) throw "Graph not in this graph mgr";
						if (!(t == this.rootGraph || t.parent != null && t.parent.graphManager == this)) throw "Invalid parent node!";
						var n = [];
						n = n.concat(t.getEdges());
						for (var a, o = n.length, s = 0; s < o; s++) a = n[s], t.remove(a);
						var c = [];
						c = c.concat(t.getNodes());
						var l;
						o = c.length;
						for (var s = 0; s < o; s++) l = c[s], t.remove(l);
						t == this.rootGraph && this.setRootGraph(null);
						var u = this.graphs.indexOf(t);
						this.graphs.splice(u, 1), t.parent = null;
					} else if (e instanceof i) {
						if (a = e, a == null) throw "Edge is null!";
						if (!a.isInterGraph) throw "Not an inter-graph edge!";
						if (!(a.source != null && a.target != null)) throw "Source and/or target is null!";
						if (!(a.source.edges.indexOf(a) != -1 && a.target.edges.indexOf(a) != -1)) throw "Source and/or target doesn't know this edge!";
						var u = a.source.edges.indexOf(a);
						if (a.source.edges.splice(u, 1), u = a.target.edges.indexOf(a), a.target.edges.splice(u, 1), !(a.source.owner != null && a.source.owner.getGraphManager() != null)) throw "Edge owner graph or owner graph manager is null!";
						if (a.source.owner.getGraphManager().edges.indexOf(a) == -1) throw "Not in owner graph manager's edge list!";
						var u = a.source.owner.getGraphManager().edges.indexOf(a);
						a.source.owner.getGraphManager().edges.splice(u, 1);
					}
				}, a.prototype.updateBounds = function() {
					this.rootGraph.updateBounds(!0);
				}, a.prototype.getGraphs = function() {
					return this.graphs;
				}, a.prototype.getAllNodes = function() {
					if (this.allNodes == null) {
						for (var e = [], t = this.getGraphs(), n = t.length, r = 0; r < n; r++) e = e.concat(t[r].getNodes());
						this.allNodes = e;
					}
					return this.allNodes;
				}, a.prototype.resetAllNodes = function() {
					this.allNodes = null;
				}, a.prototype.resetAllEdges = function() {
					this.allEdges = null;
				}, a.prototype.resetAllNodesToApplyGravitation = function() {
					this.allNodesToApplyGravitation = null;
				}, a.prototype.getAllEdges = function() {
					if (this.allEdges == null) {
						var e = [], t = this.getGraphs();
						t.length;
						for (var n = 0; n < t.length; n++) e = e.concat(t[n].getEdges());
						e = e.concat(this.edges), this.allEdges = e;
					}
					return this.allEdges;
				}, a.prototype.getAllNodesToApplyGravitation = function() {
					return this.allNodesToApplyGravitation;
				}, a.prototype.setAllNodesToApplyGravitation = function(e) {
					if (this.allNodesToApplyGravitation != null) throw "assert failed";
					this.allNodesToApplyGravitation = e;
				}, a.prototype.getRoot = function() {
					return this.rootGraph;
				}, a.prototype.setRootGraph = function(e) {
					if (e.getGraphManager() != this) throw "Root not in this graph mgr!";
					this.rootGraph = e, e.parent ??= this.layout.newNode("Root node");
				}, a.prototype.getLayout = function() {
					return this.layout;
				}, a.prototype.isOneAncestorOfOther = function(e, t) {
					if (!(e != null && t != null)) throw "assert failed";
					if (e == t) return !0;
					var n = e.getOwner(), r;
					do {
						if (r = n.getParent(), r == null) break;
						if (r == t) return !0;
						if (n = r.getOwner(), n == null) break;
					} while (!0);
					n = t.getOwner();
					do {
						if (r = n.getParent(), r == null) break;
						if (r == e) return !0;
						if (n = r.getOwner(), n == null) break;
					} while (!0);
					return !1;
				}, a.prototype.calcLowestCommonAncestors = function() {
					for (var e, t, n, r, i, a = this.getAllEdges(), o = a.length, s = 0; s < o; s++) {
						if (e = a[s], t = e.source, n = e.target, e.lca = null, e.sourceInLca = t, e.targetInLca = n, t == n) {
							e.lca = t.getOwner();
							continue;
						}
						for (r = t.getOwner(); e.lca == null;) {
							for (e.targetInLca = n, i = n.getOwner(); e.lca == null;) {
								if (i == r) {
									e.lca = i;
									break;
								}
								if (i == this.rootGraph) break;
								if (e.lca != null) throw "assert failed";
								e.targetInLca = i.getParent(), i = e.targetInLca.getOwner();
							}
							if (r == this.rootGraph) break;
							e.lca ?? (e.sourceInLca = r.getParent(), r = e.sourceInLca.getOwner());
						}
						if (e.lca == null) throw "assert failed";
					}
				}, a.prototype.calcLowestCommonAncestor = function(e, t) {
					if (e == t) return e.getOwner();
					var n = e.getOwner();
					do {
						if (n == null) break;
						var r = t.getOwner();
						do {
							if (r == null) break;
							if (r == n) return r;
							r = r.getParent().getOwner();
						} while (!0);
						n = n.getParent().getOwner();
					} while (!0);
					return n;
				}, a.prototype.calcInclusionTreeDepths = function(e, t) {
					e == null && t == null && (e = this.rootGraph, t = 1);
					for (var n, r = e.getNodes(), i = r.length, a = 0; a < i; a++) n = r[a], n.inclusionTreeDepth = t, n.child != null && this.calcInclusionTreeDepths(n.child, t + 1);
				}, a.prototype.includesInvalidEdge = function() {
					for (var e, t = this.edges.length, n = 0; n < t; n++) if (e = this.edges[n], this.isOneAncestorOfOther(e.source, e.target)) return !0;
					return !1;
				}, e.exports = a;
			}),
			(function(e, t, n) {
				var r = n(0);
				function i() {}
				for (var a in r) i[a] = r[a];
				i.MAX_ITERATIONS = 2500, i.DEFAULT_EDGE_LENGTH = 50, i.DEFAULT_SPRING_STRENGTH = .45, i.DEFAULT_REPULSION_STRENGTH = 4500, i.DEFAULT_GRAVITY_STRENGTH = .4, i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, i.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, i.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, i.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, i.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, i.COOLING_ADAPTATION_FACTOR = .33, i.ADAPTATION_LOWER_NODE_LIMIT = 1e3, i.ADAPTATION_UPPER_NODE_LIMIT = 5e3, i.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, i.MAX_NODE_DISPLACEMENT = i.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, i.MIN_REPULSION_DIST = i.DEFAULT_EDGE_LENGTH / 10, i.CONVERGENCE_CHECK_PERIOD = 100, i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, i.MIN_EDGE_LENGTH = 1, i.GRID_CALCULATION_CHECK_PERIOD = 10, e.exports = i;
			}),
			(function(e, t, n) {
				var r = n(12);
				function i() {}
				i.calcSeparationAmount = function(e, t, n, r) {
					if (!e.intersects(t)) throw "assert failed";
					var i = [, ,];
					this.decideDirectionsForOverlappingNodes(e, t, i), n[0] = Math.min(e.getRight(), t.getRight()) - Math.max(e.x, t.x), n[1] = Math.min(e.getBottom(), t.getBottom()) - Math.max(e.y, t.y), e.getX() <= t.getX() && e.getRight() >= t.getRight() ? n[0] += Math.min(t.getX() - e.getX(), e.getRight() - t.getRight()) : t.getX() <= e.getX() && t.getRight() >= e.getRight() && (n[0] += Math.min(e.getX() - t.getX(), t.getRight() - e.getRight())), e.getY() <= t.getY() && e.getBottom() >= t.getBottom() ? n[1] += Math.min(t.getY() - e.getY(), e.getBottom() - t.getBottom()) : t.getY() <= e.getY() && t.getBottom() >= e.getBottom() && (n[1] += Math.min(e.getY() - t.getY(), t.getBottom() - e.getBottom()));
					var a = Math.abs((t.getCenterY() - e.getCenterY()) / (t.getCenterX() - e.getCenterX()));
					t.getCenterY() === e.getCenterY() && t.getCenterX() === e.getCenterX() && (a = 1);
					var o = a * n[0], s = n[1] / a;
					n[0] < s ? s = n[0] : o = n[1], n[0] = -1 * i[0] * (s / 2 + r), n[1] = -1 * i[1] * (o / 2 + r);
				}, i.decideDirectionsForOverlappingNodes = function(e, t, n) {
					e.getCenterX() < t.getCenterX() ? n[0] = -1 : n[0] = 1, e.getCenterY() < t.getCenterY() ? n[1] = -1 : n[1] = 1;
				}, i.getIntersection2 = function(e, t, n) {
					var r = e.getCenterX(), i = e.getCenterY(), a = t.getCenterX(), o = t.getCenterY();
					if (e.intersects(t)) return n[0] = r, n[1] = i, n[2] = a, n[3] = o, !0;
					var s = e.getX(), c = e.getY(), l = e.getRight(), u = e.getX(), d = e.getBottom(), f = e.getRight(), p = e.getWidthHalf(), m = e.getHeightHalf(), h = t.getX(), g = t.getY(), _ = t.getRight(), v = t.getX(), y = t.getBottom(), b = t.getRight(), x = t.getWidthHalf(), S = t.getHeightHalf(), C = !1, w = !1;
					if (r === a) {
						if (i > o) return n[0] = r, n[1] = c, n[2] = a, n[3] = y, !1;
						if (i < o) return n[0] = r, n[1] = d, n[2] = a, n[3] = g, !1;
					} else if (i === o) {
						if (r > a) return n[0] = s, n[1] = i, n[2] = _, n[3] = o, !1;
						if (r < a) return n[0] = l, n[1] = i, n[2] = h, n[3] = o, !1;
					} else {
						var T = e.height / e.width, E = t.height / t.width, D = (o - i) / (a - r), O = void 0, k = void 0, A = void 0, j = void 0, M = void 0, N = void 0;
						if (-T === D ? r > a ? (n[0] = u, n[1] = d, C = !0) : (n[0] = l, n[1] = c, C = !0) : T === D && (r > a ? (n[0] = s, n[1] = c, C = !0) : (n[0] = f, n[1] = d, C = !0)), -E === D ? a > r ? (n[2] = v, n[3] = y, w = !0) : (n[2] = _, n[3] = g, w = !0) : E === D && (a > r ? (n[2] = h, n[3] = g, w = !0) : (n[2] = b, n[3] = y, w = !0)), C && w) return !1;
						if (r > a ? i > o ? (O = this.getCardinalDirection(T, D, 4), k = this.getCardinalDirection(E, D, 2)) : (O = this.getCardinalDirection(-T, D, 3), k = this.getCardinalDirection(-E, D, 1)) : i > o ? (O = this.getCardinalDirection(-T, D, 1), k = this.getCardinalDirection(-E, D, 3)) : (O = this.getCardinalDirection(T, D, 2), k = this.getCardinalDirection(E, D, 4)), !C) switch (O) {
							case 1:
								j = c, A = r + -m / D, n[0] = A, n[1] = j;
								break;
							case 2:
								A = f, j = i + p * D, n[0] = A, n[1] = j;
								break;
							case 3:
								j = d, A = r + m / D, n[0] = A, n[1] = j;
								break;
							case 4:
								A = u, j = i + -p * D, n[0] = A, n[1] = j;
								break;
						}
						if (!w) switch (k) {
							case 1:
								N = g, M = a + -S / D, n[2] = M, n[3] = N;
								break;
							case 2:
								M = b, N = o + x * D, n[2] = M, n[3] = N;
								break;
							case 3:
								N = y, M = a + S / D, n[2] = M, n[3] = N;
								break;
							case 4:
								M = v, N = o + -x * D, n[2] = M, n[3] = N;
								break;
						}
					}
					return !1;
				}, i.getCardinalDirection = function(e, t, n) {
					return e > t ? n : 1 + n % 4;
				}, i.getIntersection = function(e, t, n, i) {
					if (i == null) return this.getIntersection2(e, t, n);
					var a = e.x, o = e.y, s = t.x, c = t.y, l = n.x, u = n.y, d = i.x, f = i.y, p = void 0, m = void 0, h = void 0, g = void 0, _ = void 0, v = void 0, y = void 0, b = void 0, x = void 0;
					return h = c - o, _ = a - s, y = s * o - a * c, g = f - u, v = l - d, b = d * u - l * f, x = h * v - g * _, x === 0 ? null : (p = (_ * b - v * y) / x, m = (g * y - h * b) / x, new r(p, m));
				}, i.angleOfVector = function(e, t, n, r) {
					var i = void 0;
					return e === n ? i = r < t ? this.ONE_AND_HALF_PI : this.HALF_PI : (i = Math.atan((r - t) / (n - e)), n < e ? i += Math.PI : r < t && (i += this.TWO_PI)), i;
				}, i.doIntersect = function(e, t, n, r) {
					var i = e.x, a = e.y, o = t.x, s = t.y, c = n.x, l = n.y, u = r.x, d = r.y, f = (o - i) * (d - l) - (u - c) * (s - a);
					if (f === 0) return !1;
					var p = ((d - l) * (u - i) + (c - u) * (d - a)) / f, m = ((a - s) * (u - i) + (o - i) * (d - a)) / f;
					return 0 < p && p < 1 && 0 < m && m < 1;
				}, i.HALF_PI = .5 * Math.PI, i.ONE_AND_HALF_PI = 1.5 * Math.PI, i.TWO_PI = 2 * Math.PI, i.THREE_PI = 3 * Math.PI, e.exports = i;
			}),
			(function(e, t, n) {
				function r() {}
				r.sign = function(e) {
					return e > 0 ? 1 : e < 0 ? -1 : 0;
				}, r.floor = function(e) {
					return e < 0 ? Math.ceil(e) : Math.floor(e);
				}, r.ceil = function(e) {
					return e < 0 ? Math.floor(e) : Math.ceil(e);
				}, e.exports = r;
			}),
			(function(e, t, n) {
				function r() {}
				r.MAX_VALUE = 2147483647, r.MIN_VALUE = -2147483648, e.exports = r;
			}),
			(function(e, t, n) {
				var r = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				}();
				function i(e, t) {
					if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
				}
				var a = function(e) {
					return {
						value: e,
						next: null,
						prev: null
					};
				}, o = function(e, t, n, r) {
					return e === null ? r.head = t : e.next = t, n === null ? r.tail = t : n.prev = t, t.prev = e, t.next = n, r.length++, t;
				}, s = function(e, t) {
					var n = e.prev, r = e.next;
					return n === null ? t.head = r : n.next = r, r === null ? t.tail = n : r.prev = n, e.prev = e.next = null, t.length--, e;
				};
				e.exports = function() {
					function e(t) {
						var n = this;
						i(this, e), this.length = 0, this.head = null, this.tail = null, t?.forEach(function(e) {
							return n.push(e);
						});
					}
					return r(e, [
						{
							key: "size",
							value: function() {
								return this.length;
							}
						},
						{
							key: "insertBefore",
							value: function(e, t) {
								return o(t.prev, a(e), t, this);
							}
						},
						{
							key: "insertAfter",
							value: function(e, t) {
								return o(t, a(e), t.next, this);
							}
						},
						{
							key: "insertNodeBefore",
							value: function(e, t) {
								return o(t.prev, e, t, this);
							}
						},
						{
							key: "insertNodeAfter",
							value: function(e, t) {
								return o(t, e, t.next, this);
							}
						},
						{
							key: "push",
							value: function(e) {
								return o(this.tail, a(e), null, this);
							}
						},
						{
							key: "unshift",
							value: function(e) {
								return o(null, a(e), this.head, this);
							}
						},
						{
							key: "remove",
							value: function(e) {
								return s(e, this);
							}
						},
						{
							key: "pop",
							value: function() {
								return s(this.tail, this).value;
							}
						},
						{
							key: "popNode",
							value: function() {
								return s(this.tail, this);
							}
						},
						{
							key: "shift",
							value: function() {
								return s(this.head, this).value;
							}
						},
						{
							key: "shiftNode",
							value: function() {
								return s(this.head, this);
							}
						},
						{
							key: "get_object_at",
							value: function(e) {
								if (e <= this.length()) {
									for (var t = 1, n = this.head; t < e;) n = n.next, t++;
									return n.value;
								}
							}
						},
						{
							key: "set_object_at",
							value: function(e, t) {
								if (e <= this.length()) {
									for (var n = 1, r = this.head; n < e;) r = r.next, n++;
									r.value = t;
								}
							}
						}
					]), e;
				}();
			}),
			(function(e, t, n) {
				function r(e, t, n) {
					this.x = null, this.y = null, e == null && t == null && n == null ? (this.x = 0, this.y = 0) : typeof e == "number" && typeof t == "number" && n == null ? (this.x = e, this.y = t) : e.constructor.name == "Point" && t == null && n == null && (n = e, this.x = n.x, this.y = n.y);
				}
				r.prototype.getX = function() {
					return this.x;
				}, r.prototype.getY = function() {
					return this.y;
				}, r.prototype.getLocation = function() {
					return new r(this.x, this.y);
				}, r.prototype.setLocation = function(e, t, n) {
					e.constructor.name == "Point" && t == null && n == null ? (n = e, this.setLocation(n.x, n.y)) : typeof e == "number" && typeof t == "number" && n == null && (parseInt(e) == e && parseInt(t) == t ? this.move(e, t) : (this.x = Math.floor(e + .5), this.y = Math.floor(t + .5)));
				}, r.prototype.move = function(e, t) {
					this.x = e, this.y = t;
				}, r.prototype.translate = function(e, t) {
					this.x += e, this.y += t;
				}, r.prototype.equals = function(e) {
					if (e.constructor.name == "Point") {
						var t = e;
						return this.x == t.x && this.y == t.y;
					}
					return this == e;
				}, r.prototype.toString = function() {
					return new r().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
				}, e.exports = r;
			}),
			(function(e, t, n) {
				function r(e, t, n, r) {
					this.x = 0, this.y = 0, this.width = 0, this.height = 0, e != null && t != null && n != null && r != null && (this.x = e, this.y = t, this.width = n, this.height = r);
				}
				r.prototype.getX = function() {
					return this.x;
				}, r.prototype.setX = function(e) {
					this.x = e;
				}, r.prototype.getY = function() {
					return this.y;
				}, r.prototype.setY = function(e) {
					this.y = e;
				}, r.prototype.getWidth = function() {
					return this.width;
				}, r.prototype.setWidth = function(e) {
					this.width = e;
				}, r.prototype.getHeight = function() {
					return this.height;
				}, r.prototype.setHeight = function(e) {
					this.height = e;
				}, r.prototype.getRight = function() {
					return this.x + this.width;
				}, r.prototype.getBottom = function() {
					return this.y + this.height;
				}, r.prototype.intersects = function(e) {
					return !(this.getRight() < e.x || this.getBottom() < e.y || e.getRight() < this.x || e.getBottom() < this.y);
				}, r.prototype.getCenterX = function() {
					return this.x + this.width / 2;
				}, r.prototype.getMinX = function() {
					return this.getX();
				}, r.prototype.getMaxX = function() {
					return this.getX() + this.width;
				}, r.prototype.getCenterY = function() {
					return this.y + this.height / 2;
				}, r.prototype.getMinY = function() {
					return this.getY();
				}, r.prototype.getMaxY = function() {
					return this.getY() + this.height;
				}, r.prototype.getWidthHalf = function() {
					return this.width / 2;
				}, r.prototype.getHeightHalf = function() {
					return this.height / 2;
				}, e.exports = r;
			}),
			(function(e, t, n) {
				var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
					return typeof e;
				} : function(e) {
					return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
				};
				function i() {}
				i.lastID = 0, i.createID = function(e) {
					return i.isPrimitive(e) ? e : e.uniqueID == null ? (e.uniqueID = i.getString(), i.lastID++, e.uniqueID) : e.uniqueID;
				}, i.getString = function(e) {
					return e ??= i.lastID, "Object#" + e;
				}, i.isPrimitive = function(e) {
					var t = e === void 0 ? "undefined" : r(e);
					return e == null || t != "object" && t != "function";
				}, e.exports = i;
			}),
			(function(e, t, n) {
				function r(e) {
					if (Array.isArray(e)) {
						for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
						return n;
					} else return Array.from(e);
				}
				var i = n(0), a = n(6), o = n(3), s = n(1), c = n(5), l = n(4), u = n(17), d = n(27);
				function f(e) {
					d.call(this), this.layoutQuality = i.QUALITY, this.createBendsAsNeeded = i.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = i.DEFAULT_INCREMENTAL, this.animationOnLayout = i.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = i.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = i.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = i.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new a(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, e != null && (this.isRemoteUse = e);
				}
				f.RANDOM_SEED = 1, f.prototype = Object.create(d.prototype), f.prototype.getGraphManager = function() {
					return this.graphManager;
				}, f.prototype.getAllNodes = function() {
					return this.graphManager.getAllNodes();
				}, f.prototype.getAllEdges = function() {
					return this.graphManager.getAllEdges();
				}, f.prototype.getAllNodesToApplyGravitation = function() {
					return this.graphManager.getAllNodesToApplyGravitation();
				}, f.prototype.newGraphManager = function() {
					var e = new a(this);
					return this.graphManager = e, e;
				}, f.prototype.newGraph = function(e) {
					return new c(null, this.graphManager, e);
				}, f.prototype.newNode = function(e) {
					return new o(this.graphManager, e);
				}, f.prototype.newEdge = function(e) {
					return new s(null, null, e);
				}, f.prototype.checkLayoutSuccess = function() {
					return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
				}, f.prototype.runLayout = function() {
					this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
					var e = this.checkLayoutSuccess() ? !1 : this.layout();
					return i.ANIMATE === "during" ? !1 : (e && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, e);
				}, f.prototype.doPostLayout = function() {
					this.incremental || this.transform(), this.update();
				}, f.prototype.update2 = function() {
					if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
						for (var e = this.graphManager.getAllEdges(), t = 0; t < e.length; t++) e[t];
						for (var n = this.graphManager.getRoot().getNodes(), t = 0; t < n.length; t++) n[t];
						this.update(this.graphManager.getRoot());
					}
				}, f.prototype.update = function(e) {
					if (e == null) this.update2();
					else if (e instanceof o) {
						var t = e;
						if (t.getChild() != null) for (var n = t.getChild().getNodes(), r = 0; r < n.length; r++) update(n[r]);
						t.vGraphObject != null && t.vGraphObject.update(t);
					} else if (e instanceof s) {
						var i = e;
						i.vGraphObject != null && i.vGraphObject.update(i);
					} else if (e instanceof c) {
						var a = e;
						a.vGraphObject != null && a.vGraphObject.update(a);
					}
				}, f.prototype.initParameters = function() {
					this.isSubLayout || (this.layoutQuality = i.QUALITY, this.animationDuringLayout = i.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = i.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = i.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = i.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = i.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = i.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
				}, f.prototype.transform = function(e) {
					if (e == null) this.transform(new l(0, 0));
					else {
						var t = new u(), n = this.graphManager.getRoot().updateLeftTop();
						if (n != null) {
							t.setWorldOrgX(e.x), t.setWorldOrgY(e.y), t.setDeviceOrgX(n.x), t.setDeviceOrgY(n.y);
							for (var r = this.getAllNodes(), i, a = 0; a < r.length; a++) i = r[a], i.transform(t);
						}
					}
				}, f.prototype.positionNodesRandomly = function(e) {
					if (e == null) this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
					else for (var t, n, r = e.getNodes(), i = 0; i < r.length; i++) t = r[i], n = t.getChild(), n == null || n.getNodes().length == 0 ? t.scatter() : (this.positionNodesRandomly(n), t.updateBounds());
				}, f.prototype.getFlatForest = function() {
					for (var e = [], t = !0, n = this.graphManager.getRoot().getNodes(), i = !0, a = 0; a < n.length; a++) n[a].getChild() != null && (i = !1);
					if (!i) return e;
					var o = /* @__PURE__ */ new Set(), s = [], c = /* @__PURE__ */ new Map(), l = [];
					for (l = l.concat(n); l.length > 0 && t;) {
						for (s.push(l[0]); s.length > 0 && t;) {
							var u = s[0];
							s.splice(0, 1), o.add(u);
							for (var d = u.getEdges(), a = 0; a < d.length; a++) {
								var f = d[a].getOtherEnd(u);
								if (c.get(u) != f) if (!o.has(f)) s.push(f), c.set(f, u);
								else {
									t = !1;
									break;
								}
							}
						}
						if (!t) e = [];
						else {
							var p = [].concat(r(o));
							e.push(p);
							for (var a = 0; a < p.length; a++) {
								var m = p[a], h = l.indexOf(m);
								h > -1 && l.splice(h, 1);
							}
							o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
						}
					}
					return e;
				}, f.prototype.createDummyNodesForBendpoints = function(e) {
					for (var t = [], n = e.source, r = this.graphManager.calcLowestCommonAncestor(e.source, e.target), i = 0; i < e.bendpoints.length; i++) {
						var a = this.newNode(null);
						a.setRect(new Point(0, 0), new Dimension(1, 1)), r.add(a);
						var o = this.newEdge(null);
						this.graphManager.add(o, n, a), t.add(a), n = a;
					}
					var o = this.newEdge(null);
					return this.graphManager.add(o, n, e.target), this.edgeToDummyNodes.set(e, t), e.isInterGraph() ? this.graphManager.remove(e) : r.remove(e), t;
				}, f.prototype.createBendpointsFromDummyNodes = function() {
					var e = [];
					e = e.concat(this.graphManager.getAllEdges()), e = [].concat(r(this.edgeToDummyNodes.keys()), e);
					for (var t = 0; t < e.length; t++) {
						var n = e[t];
						if (n.bendpoints.length > 0) {
							for (var i = this.edgeToDummyNodes.get(n), a = 0; a < i.length; a++) {
								var o = i[a], s = new l(o.getCenterX(), o.getCenterY()), c = n.bendpoints.get(a);
								c.x = s.x, c.y = s.y, o.getOwner().remove(o);
							}
							this.graphManager.add(n, n.source, n.target);
						}
					}
				}, f.transform = function(e, t, n, r) {
					if (n != null && r != null) {
						var i = t;
						if (e <= 50) {
							var a = t / n;
							i -= (t - a) / 50 * (50 - e);
						} else {
							var o = t * r;
							i += (o - t) / 50 * (e - 50);
						}
						return i;
					} else {
						var s, c;
						return e <= 50 ? (s = 9 * t / 500, c = t / 10) : (s = 9 * t / 50, c = -8 * t), s * e + c;
					}
				}, f.findCenterOfTree = function(e) {
					var t = [];
					t = t.concat(e);
					var n = [], r = /* @__PURE__ */ new Map(), i = !1, a = null;
					(t.length == 1 || t.length == 2) && (i = !0, a = t[0]);
					for (var o = 0; o < t.length; o++) {
						var s = t[o], c = s.getNeighborsList().size;
						r.set(s, s.getNeighborsList().size), c == 1 && n.push(s);
					}
					var l = [];
					for (l = l.concat(n); !i;) {
						var u = [];
						u = u.concat(l), l = [];
						for (var o = 0; o < t.length; o++) {
							var s = t[o], d = t.indexOf(s);
							d >= 0 && t.splice(d, 1), s.getNeighborsList().forEach(function(e) {
								if (n.indexOf(e) < 0) {
									var t = r.get(e) - 1;
									t == 1 && l.push(e), r.set(e, t);
								}
							});
						}
						n = n.concat(l), (t.length == 1 || t.length == 2) && (i = !0, a = t[0]);
					}
					return a;
				}, f.prototype.setGraphManager = function(e) {
					this.graphManager = e;
				}, e.exports = f;
			}),
			(function(e, t, n) {
				function r() {}
				r.seed = 1, r.x = 0, r.nextDouble = function() {
					return r.x = Math.sin(r.seed++) * 1e4, r.x - Math.floor(r.x);
				}, e.exports = r;
			}),
			(function(e, t, n) {
				var r = n(4);
				function i(e, t) {
					this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
				}
				i.prototype.getWorldOrgX = function() {
					return this.lworldOrgX;
				}, i.prototype.setWorldOrgX = function(e) {
					this.lworldOrgX = e;
				}, i.prototype.getWorldOrgY = function() {
					return this.lworldOrgY;
				}, i.prototype.setWorldOrgY = function(e) {
					this.lworldOrgY = e;
				}, i.prototype.getWorldExtX = function() {
					return this.lworldExtX;
				}, i.prototype.setWorldExtX = function(e) {
					this.lworldExtX = e;
				}, i.prototype.getWorldExtY = function() {
					return this.lworldExtY;
				}, i.prototype.setWorldExtY = function(e) {
					this.lworldExtY = e;
				}, i.prototype.getDeviceOrgX = function() {
					return this.ldeviceOrgX;
				}, i.prototype.setDeviceOrgX = function(e) {
					this.ldeviceOrgX = e;
				}, i.prototype.getDeviceOrgY = function() {
					return this.ldeviceOrgY;
				}, i.prototype.setDeviceOrgY = function(e) {
					this.ldeviceOrgY = e;
				}, i.prototype.getDeviceExtX = function() {
					return this.ldeviceExtX;
				}, i.prototype.setDeviceExtX = function(e) {
					this.ldeviceExtX = e;
				}, i.prototype.getDeviceExtY = function() {
					return this.ldeviceExtY;
				}, i.prototype.setDeviceExtY = function(e) {
					this.ldeviceExtY = e;
				}, i.prototype.transformX = function(e) {
					var t = 0, n = this.lworldExtX;
					return n != 0 && (t = this.ldeviceOrgX + (e - this.lworldOrgX) * this.ldeviceExtX / n), t;
				}, i.prototype.transformY = function(e) {
					var t = 0, n = this.lworldExtY;
					return n != 0 && (t = this.ldeviceOrgY + (e - this.lworldOrgY) * this.ldeviceExtY / n), t;
				}, i.prototype.inverseTransformX = function(e) {
					var t = 0, n = this.ldeviceExtX;
					return n != 0 && (t = this.lworldOrgX + (e - this.ldeviceOrgX) * this.lworldExtX / n), t;
				}, i.prototype.inverseTransformY = function(e) {
					var t = 0, n = this.ldeviceExtY;
					return n != 0 && (t = this.lworldOrgY + (e - this.ldeviceOrgY) * this.lworldExtY / n), t;
				}, i.prototype.inverseTransformPoint = function(e) {
					return new r(this.inverseTransformX(e.x), this.inverseTransformY(e.y));
				}, e.exports = i;
			}),
			(function(e, t, n) {
				function r(e) {
					if (Array.isArray(e)) {
						for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
						return n;
					} else return Array.from(e);
				}
				var i = n(15), a = n(7), o = n(0), s = n(8), c = n(9);
				function l() {
					i.call(this), this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = a.DEFAULT_EDGE_LENGTH, this.springConstant = a.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = a.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = a.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a.MAX_ITERATIONS;
				}
				for (var u in l.prototype = Object.create(i.prototype), i) l[u] = i[u];
				l.prototype.initParameters = function() {
					i.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
				}, l.prototype.calcIdealEdgeLengths = function() {
					for (var e, t, n, r, i, s, c = this.getGraphManager().getAllEdges(), l = 0; l < c.length; l++) e = c[l], e.idealLength = this.idealEdgeLength, e.isInterGraph && (n = e.getSource(), r = e.getTarget(), i = e.getSourceInLca().getEstimatedSize(), s = e.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (e.idealLength += i + s - 2 * o.SIMPLE_NODE_SIZE), t = e.getLca().getInclusionTreeDepth(), e.idealLength += a.DEFAULT_EDGE_LENGTH * a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (n.getInclusionTreeDepth() + r.getInclusionTreeDepth() - 2 * t));
				}, l.prototype.initSpringEmbedder = function() {
					var e = this.getAllNodes().length;
					this.incremental ? (e > a.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * a.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (e - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (e > a.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(a.COOLING_ADAPTATION_FACTOR, 1 - (e - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
				}, l.prototype.calcSpringForces = function() {
					for (var e = this.getAllEdges(), t, n = 0; n < e.length; n++) t = e[n], this.calcSpringForce(t, t.idealLength);
				}, l.prototype.calcRepulsionForces = function() {
					var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n, r, i, o, s = this.getAllNodes(), c;
					if (this.useFRGridVariant) for (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && e && this.updateGrid(), c = /* @__PURE__ */ new Set(), n = 0; n < s.length; n++) i = s[n], this.calculateRepulsionForceOfANode(i, c, e, t), c.add(i);
					else for (n = 0; n < s.length; n++) for (i = s[n], r = n + 1; r < s.length; r++) o = s[r], i.getOwner() == o.getOwner() && this.calcRepulsionForce(i, o);
				}, l.prototype.calcGravitationalForces = function() {
					for (var e, t = this.getAllNodesToApplyGravitation(), n = 0; n < t.length; n++) e = t[n], this.calcGravitationalForce(e);
				}, l.prototype.moveNodes = function() {
					for (var e = this.getAllNodes(), t, n = 0; n < e.length; n++) t = e[n], t.move();
				}, l.prototype.calcSpringForce = function(e, t) {
					var n = e.getSource(), r = e.getTarget(), i, a, o, s;
					if (this.uniformLeafNodeSizes && n.getChild() == null && r.getChild() == null) e.updateLengthSimple();
					else if (e.updateLength(), e.isOverlapingSourceAndTarget) return;
					i = e.getLength(), i != 0 && (a = this.springConstant * (i - t), o = a * (e.lengthX / i), s = a * (e.lengthY / i), n.springForceX += o, n.springForceY += s, r.springForceX -= o, r.springForceY -= s);
				}, l.prototype.calcRepulsionForce = function(e, t) {
					var n = e.getRect(), r = t.getRect(), i = [, ,], o = [
						,
						,
						,
						,
					], l, u, d, f, p, m, h;
					if (n.intersects(r)) {
						s.calcSeparationAmount(n, r, i, a.DEFAULT_EDGE_LENGTH / 2), m = 2 * i[0], h = 2 * i[1];
						var g = e.noOfChildren * t.noOfChildren / (e.noOfChildren + t.noOfChildren);
						e.repulsionForceX -= g * m, e.repulsionForceY -= g * h, t.repulsionForceX += g * m, t.repulsionForceY += g * h;
					} else this.uniformLeafNodeSizes && e.getChild() == null && t.getChild() == null ? (l = r.getCenterX() - n.getCenterX(), u = r.getCenterY() - n.getCenterY()) : (s.getIntersection(n, r, o), l = o[2] - o[0], u = o[3] - o[1]), Math.abs(l) < a.MIN_REPULSION_DIST && (l = c.sign(l) * a.MIN_REPULSION_DIST), Math.abs(u) < a.MIN_REPULSION_DIST && (u = c.sign(u) * a.MIN_REPULSION_DIST), d = l * l + u * u, f = Math.sqrt(d), p = this.repulsionConstant * e.noOfChildren * t.noOfChildren / d, m = p * l / f, h = p * u / f, e.repulsionForceX -= m, e.repulsionForceY -= h, t.repulsionForceX += m, t.repulsionForceY += h;
				}, l.prototype.calcGravitationalForce = function(e) {
					var t = e.getOwner(), n = (t.getRight() + t.getLeft()) / 2, r = (t.getTop() + t.getBottom()) / 2, i = e.getCenterX() - n, a = e.getCenterY() - r, o = Math.abs(i) + e.getWidth() / 2, s = Math.abs(a) + e.getHeight() / 2, c;
					e.getOwner() == this.graphManager.getRoot() ? (c = t.getEstimatedSize() * this.gravityRangeFactor, (o > c || s > c) && (e.gravitationForceX = -this.gravityConstant * i, e.gravitationForceY = -this.gravityConstant * a)) : (c = t.getEstimatedSize() * this.compoundGravityRangeFactor, (o > c || s > c) && (e.gravitationForceX = -this.gravityConstant * i * this.compoundGravityConstant, e.gravitationForceY = -this.gravityConstant * a * this.compoundGravityConstant));
				}, l.prototype.isConverged = function() {
					var e, t = !1;
					return this.totalIterations > this.maxIterations / 3 && (t = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), e = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, e || t;
				}, l.prototype.animate = function() {
					this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
				}, l.prototype.calcNoOfChildrenForAllNodes = function() {
					for (var e, t = this.graphManager.getAllNodes(), n = 0; n < t.length; n++) e = t[n], e.noOfChildren = e.getNoOfChildren();
				}, l.prototype.calcGrid = function(e) {
					var t = 0, n = 0;
					t = parseInt(Math.ceil((e.getRight() - e.getLeft()) / this.repulsionRange)), n = parseInt(Math.ceil((e.getBottom() - e.getTop()) / this.repulsionRange));
					for (var r = Array(t), i = 0; i < t; i++) r[i] = Array(n);
					for (var i = 0; i < t; i++) for (var a = 0; a < n; a++) r[i][a] = [];
					return r;
				}, l.prototype.addNodeToGrid = function(e, t, n) {
					var r = 0, i = 0, a = 0, o = 0;
					r = parseInt(Math.floor((e.getRect().x - t) / this.repulsionRange)), i = parseInt(Math.floor((e.getRect().width + e.getRect().x - t) / this.repulsionRange)), a = parseInt(Math.floor((e.getRect().y - n) / this.repulsionRange)), o = parseInt(Math.floor((e.getRect().height + e.getRect().y - n) / this.repulsionRange));
					for (var s = r; s <= i; s++) for (var c = a; c <= o; c++) this.grid[s][c].push(e), e.setGridCoordinates(r, i, a, o);
				}, l.prototype.updateGrid = function() {
					var e, t, n = this.getAllNodes();
					for (this.grid = this.calcGrid(this.graphManager.getRoot()), e = 0; e < n.length; e++) t = n[e], this.addNodeToGrid(t, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
				}, l.prototype.calculateRepulsionForceOfANode = function(e, t, n, i) {
					if (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && n || i) {
						var o = /* @__PURE__ */ new Set();
						e.surrounding = [];
						for (var s, c = this.grid, l = e.startX - 1; l < e.finishX + 2; l++) for (var u = e.startY - 1; u < e.finishY + 2; u++) if (!(l < 0 || u < 0 || l >= c.length || u >= c[0].length)) {
							for (var d = 0; d < c[l][u].length; d++) if (s = c[l][u][d], !(e.getOwner() != s.getOwner() || e == s) && !t.has(s) && !o.has(s)) {
								var f = Math.abs(e.getCenterX() - s.getCenterX()) - (e.getWidth() / 2 + s.getWidth() / 2), p = Math.abs(e.getCenterY() - s.getCenterY()) - (e.getHeight() / 2 + s.getHeight() / 2);
								f <= this.repulsionRange && p <= this.repulsionRange && o.add(s);
							}
						}
						e.surrounding = [].concat(r(o));
					}
					for (l = 0; l < e.surrounding.length; l++) this.calcRepulsionForce(e, e.surrounding[l]);
				}, l.prototype.calcRepulsionRange = function() {
					return 0;
				}, e.exports = l;
			}),
			(function(e, t, n) {
				var r = n(1), i = n(7);
				function a(e, t, n) {
					r.call(this, e, t, n), this.idealLength = i.DEFAULT_EDGE_LENGTH;
				}
				for (var o in a.prototype = Object.create(r.prototype), r) a[o] = r[o];
				e.exports = a;
			}),
			(function(e, t, n) {
				var r = n(3);
				function i(e, t, n, i) {
					r.call(this, e, t, n, i), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
				}
				for (var a in i.prototype = Object.create(r.prototype), r) i[a] = r[a];
				i.prototype.setGridCoordinates = function(e, t, n, r) {
					this.startX = e, this.finishX = t, this.startY = n, this.finishY = r;
				}, e.exports = i;
			}),
			(function(e, t, n) {
				function r(e, t) {
					this.width = 0, this.height = 0, e !== null && t !== null && (this.height = t, this.width = e);
				}
				r.prototype.getWidth = function() {
					return this.width;
				}, r.prototype.setWidth = function(e) {
					this.width = e;
				}, r.prototype.getHeight = function() {
					return this.height;
				}, r.prototype.setHeight = function(e) {
					this.height = e;
				}, e.exports = r;
			}),
			(function(e, t, n) {
				var r = n(14);
				function i() {
					this.map = {}, this.keys = [];
				}
				i.prototype.put = function(e, t) {
					var n = r.createID(e);
					this.contains(n) || (this.map[n] = t, this.keys.push(e));
				}, i.prototype.contains = function(e) {
					return r.createID(e), this.map[e] != null;
				}, i.prototype.get = function(e) {
					var t = r.createID(e);
					return this.map[t];
				}, i.prototype.keySet = function() {
					return this.keys;
				}, e.exports = i;
			}),
			(function(e, t, n) {
				var r = n(14);
				function i() {
					this.set = {};
				}
				i.prototype.add = function(e) {
					var t = r.createID(e);
					this.contains(t) || (this.set[t] = e);
				}, i.prototype.remove = function(e) {
					delete this.set[r.createID(e)];
				}, i.prototype.clear = function() {
					this.set = {};
				}, i.prototype.contains = function(e) {
					return this.set[r.createID(e)] == e;
				}, i.prototype.isEmpty = function() {
					return this.size() === 0;
				}, i.prototype.size = function() {
					return Object.keys(this.set).length;
				}, i.prototype.addAllTo = function(e) {
					for (var t = Object.keys(this.set), n = t.length, r = 0; r < n; r++) e.push(this.set[t[r]]);
				}, i.prototype.size = function() {
					return Object.keys(this.set).length;
				}, i.prototype.addAll = function(e) {
					for (var t = e.length, n = 0; n < t; n++) {
						var r = e[n];
						this.add(r);
					}
				}, e.exports = i;
			}),
			(function(e, t, n) {
				var r = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				}();
				function i(e, t) {
					if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
				}
				var a = n(11);
				e.exports = function() {
					function e(t, n) {
						i(this, e), (n !== null || n !== void 0) && (this.compareFunction = this._defaultCompareFunction);
						var r = void 0;
						r = t instanceof a ? t.size() : t.length, this._quicksort(t, 0, r - 1);
					}
					return r(e, [
						{
							key: "_quicksort",
							value: function(e, t, n) {
								if (t < n) {
									var r = this._partition(e, t, n);
									this._quicksort(e, t, r), this._quicksort(e, r + 1, n);
								}
							}
						},
						{
							key: "_partition",
							value: function(e, t, n) {
								for (var r = this._get(e, t), i = t, a = n;;) {
									for (; this.compareFunction(r, this._get(e, a));) a--;
									for (; this.compareFunction(this._get(e, i), r);) i++;
									if (i < a) this._swap(e, i, a), i++, a--;
									else return a;
								}
							}
						},
						{
							key: "_get",
							value: function(e, t) {
								return e instanceof a ? e.get_object_at(t) : e[t];
							}
						},
						{
							key: "_set",
							value: function(e, t, n) {
								e instanceof a ? e.set_object_at(t, n) : e[t] = n;
							}
						},
						{
							key: "_swap",
							value: function(e, t, n) {
								var r = this._get(e, t);
								this._set(e, t, this._get(e, n)), this._set(e, n, r);
							}
						},
						{
							key: "_defaultCompareFunction",
							value: function(e, t) {
								return t > e;
							}
						}
					]), e;
				}();
			}),
			(function(e, t, n) {
				var r = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				}();
				function i(e, t) {
					if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
				}
				e.exports = function() {
					function e(t, n) {
						var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
						i(this, e), this.sequence1 = t, this.sequence2 = n, this.match_score = r, this.mismatch_penalty = a, this.gap_penalty = o, this.iMax = t.length + 1, this.jMax = n.length + 1, this.grid = Array(this.iMax);
						for (var s = 0; s < this.iMax; s++) {
							this.grid[s] = Array(this.jMax);
							for (var c = 0; c < this.jMax; c++) this.grid[s][c] = 0;
						}
						this.tracebackGrid = Array(this.iMax);
						for (var l = 0; l < this.iMax; l++) {
							this.tracebackGrid[l] = Array(this.jMax);
							for (var u = 0; u < this.jMax; u++) this.tracebackGrid[l][u] = [
								null,
								null,
								null
							];
						}
						this.alignments = [], this.score = -1, this.computeGrids();
					}
					return r(e, [
						{
							key: "getScore",
							value: function() {
								return this.score;
							}
						},
						{
							key: "getAlignments",
							value: function() {
								return this.alignments;
							}
						},
						{
							key: "computeGrids",
							value: function() {
								for (var e = 1; e < this.jMax; e++) this.grid[0][e] = this.grid[0][e - 1] + this.gap_penalty, this.tracebackGrid[0][e] = [
									!1,
									!1,
									!0
								];
								for (var t = 1; t < this.iMax; t++) this.grid[t][0] = this.grid[t - 1][0] + this.gap_penalty, this.tracebackGrid[t][0] = [
									!1,
									!0,
									!1
								];
								for (var n = 1; n < this.iMax; n++) for (var r = 1; r < this.jMax; r++) {
									var i = void 0;
									i = this.sequence1[n - 1] === this.sequence2[r - 1] ? this.grid[n - 1][r - 1] + this.match_score : this.grid[n - 1][r - 1] + this.mismatch_penalty;
									var a = this.grid[n - 1][r] + this.gap_penalty, o = this.grid[n][r - 1] + this.gap_penalty, s = [
										i,
										a,
										o
									], c = this.arrayAllMaxIndexes(s);
									this.grid[n][r] = s[c[0]], this.tracebackGrid[n][r] = [
										c.includes(0),
										c.includes(1),
										c.includes(2)
									];
								}
								this.score = this.grid[this.iMax - 1][this.jMax - 1];
							}
						},
						{
							key: "alignmentTraceback",
							value: function() {
								var e = [];
								for (e.push({
									pos: [this.sequence1.length, this.sequence2.length],
									seq1: "",
									seq2: ""
								}); e[0];) {
									var t = e[0], n = this.tracebackGrid[t.pos[0]][t.pos[1]];
									n[0] && e.push({
										pos: [t.pos[0] - 1, t.pos[1] - 1],
										seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
										seq2: this.sequence2[t.pos[1] - 1] + t.seq2
									}), n[1] && e.push({
										pos: [t.pos[0] - 1, t.pos[1]],
										seq1: this.sequence1[t.pos[0] - 1] + t.seq1,
										seq2: "-" + t.seq2
									}), n[2] && e.push({
										pos: [t.pos[0], t.pos[1] - 1],
										seq1: "-" + t.seq1,
										seq2: this.sequence2[t.pos[1] - 1] + t.seq2
									}), t.pos[0] === 0 && t.pos[1] === 0 && this.alignments.push({
										sequence1: t.seq1,
										sequence2: t.seq2
									}), e.shift();
								}
								return this.alignments;
							}
						},
						{
							key: "getAllIndexes",
							value: function(e, t) {
								for (var n = [], r = -1; (r = e.indexOf(t, r + 1)) !== -1;) n.push(r);
								return n;
							}
						},
						{
							key: "arrayAllMaxIndexes",
							value: function(e) {
								return this.getAllIndexes(e, Math.max.apply(null, e));
							}
						}
					]), e;
				}();
			}),
			(function(e, t, n) {
				var r = function() {};
				r.FDLayout = n(18), r.FDLayoutConstants = n(7), r.FDLayoutEdge = n(19), r.FDLayoutNode = n(20), r.DimensionD = n(21), r.HashMap = n(22), r.HashSet = n(23), r.IGeometry = n(8), r.IMath = n(9), r.Integer = n(10), r.Point = n(12), r.PointD = n(4), r.RandomSeed = n(16), r.RectangleD = n(13), r.Transform = n(17), r.UniqueIDGeneretor = n(14), r.Quicksort = n(24), r.LinkedList = n(11), r.LGraphObject = n(2), r.LGraph = n(5), r.LEdge = n(1), r.LGraphManager = n(6), r.LNode = n(3), r.Layout = n(15), r.LayoutConstants = n(0), r.NeedlemanWunsch = n(25), e.exports = r;
			}),
			(function(e, t, n) {
				function r() {
					this.listeners = [];
				}
				var i = r.prototype;
				i.addListener = function(e, t) {
					this.listeners.push({
						event: e,
						callback: t
					});
				}, i.removeListener = function(e, t) {
					for (var n = this.listeners.length; n >= 0; n--) {
						var r = this.listeners[n];
						r.event === e && r.callback === t && this.listeners.splice(n, 1);
					}
				}, i.emit = function(e, t) {
					for (var n = 0; n < this.listeners.length; n++) {
						var r = this.listeners[n];
						e === r.event && r.callback(t);
					}
				}, e.exports = r;
			})
		]);
	});
})), require_cose_base = /* @__PURE__ */ __commonJSMin(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r(require_layout_base()) : typeof define == "function" && define.amd ? define(["layout-base"], r) : typeof e == "object" ? e.coseBase = r(require_layout_base()) : n.coseBase = r(n.layoutBase);
	})(e, function(e) {
		return (function(e) {
			var t = {};
			function n(r) {
				if (t[r]) return t[r].exports;
				var i = t[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
			}
			return n.m = e, n.c = t, n.i = function(e) {
				return e;
			}, n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: r
				});
			}, n.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return n.d(t, "a", t), t;
			}, n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n.p = "", n(n.s = 7);
		})([
			(function(t, n) {
				t.exports = e;
			}),
			(function(e, t, n) {
				var r = n(0).FDLayoutConstants;
				function i() {}
				for (var a in r) i[a] = r[a];
				i.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, i.DEFAULT_RADIAL_SEPARATION = r.DEFAULT_EDGE_LENGTH, i.DEFAULT_COMPONENT_SEPERATION = 60, i.TILE = !0, i.TILING_PADDING_VERTICAL = 10, i.TILING_PADDING_HORIZONTAL = 10, i.TREE_REDUCTION_ON_INCREMENTAL = !1, e.exports = i;
			}),
			(function(e, t, n) {
				var r = n(0).FDLayoutEdge;
				function i(e, t, n) {
					r.call(this, e, t, n);
				}
				for (var a in i.prototype = Object.create(r.prototype), r) i[a] = r[a];
				e.exports = i;
			}),
			(function(e, t, n) {
				var r = n(0).LGraph;
				function i(e, t, n) {
					r.call(this, e, t, n);
				}
				for (var a in i.prototype = Object.create(r.prototype), r) i[a] = r[a];
				e.exports = i;
			}),
			(function(e, t, n) {
				var r = n(0).LGraphManager;
				function i(e) {
					r.call(this, e);
				}
				for (var a in i.prototype = Object.create(r.prototype), r) i[a] = r[a];
				e.exports = i;
			}),
			(function(e, t, n) {
				var r = n(0).FDLayoutNode, i = n(0).IMath;
				function a(e, t, n, i) {
					r.call(this, e, t, n, i);
				}
				for (var o in a.prototype = Object.create(r.prototype), r) a[o] = r[o];
				a.prototype.move = function() {
					var e = this.graphManager.getLayout();
					this.displacementX = e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementX = e.coolingFactor * e.maxNodeDisplacement * i.sign(this.displacementX)), Math.abs(this.displacementY) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementY = e.coolingFactor * e.maxNodeDisplacement * i.sign(this.displacementY)), this.child == null || this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), e.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
				}, a.prototype.propogateDisplacementToChildren = function(e, t) {
					for (var n = this.getChild().getNodes(), r, i = 0; i < n.length; i++) r = n[i], r.getChild() == null ? (r.moveBy(e, t), r.displacementX += e, r.displacementY += t) : r.propogateDisplacementToChildren(e, t);
				}, a.prototype.setPred1 = function(e) {
					this.pred1 = e;
				}, a.prototype.getPred1 = function() {
					return pred1;
				}, a.prototype.getPred2 = function() {
					return pred2;
				}, a.prototype.setNext = function(e) {
					this.next = e;
				}, a.prototype.getNext = function() {
					return next;
				}, a.prototype.setProcessed = function(e) {
					this.processed = e;
				}, a.prototype.isProcessed = function() {
					return processed;
				}, e.exports = a;
			}),
			(function(e, t, n) {
				var r = n(0).FDLayout, i = n(4), a = n(3), o = n(5), s = n(2), c = n(1), l = n(0).FDLayoutConstants, u = n(0).LayoutConstants, d = n(0).Point, f = n(0).PointD, p = n(0).Layout, m = n(0).Integer, h = n(0).IGeometry, g = n(0).LGraph, _ = n(0).Transform;
				function v() {
					r.call(this), this.toBeTiled = {};
				}
				for (var y in v.prototype = Object.create(r.prototype), r) v[y] = r[y];
				v.prototype.newGraphManager = function() {
					var e = new i(this);
					return this.graphManager = e, e;
				}, v.prototype.newGraph = function(e) {
					return new a(null, this.graphManager, e);
				}, v.prototype.newNode = function(e) {
					return new o(this.graphManager, e);
				}, v.prototype.newEdge = function(e) {
					return new s(null, null, e);
				}, v.prototype.initParameters = function() {
					r.prototype.initParameters.call(this, arguments), this.isSubLayout || (c.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = c.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = c.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = l.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = l.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = l.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = l.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = l.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / l.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = l.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
				}, v.prototype.layout = function() {
					return u.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
				}, v.prototype.classicLayout = function() {
					if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
						if (c.TREE_REDUCTION_ON_INCREMENTAL) {
							this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
							var e = new Set(this.getAllNodes()), t = this.nodesWithGravity.filter(function(t) {
								return e.has(t);
							});
							this.graphManager.setAllNodesToApplyGravitation(t);
						}
					} else {
						var n = this.getFlatForest();
						if (n.length > 0) this.positionNodesRadially(n);
						else {
							this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
							var e = new Set(this.getAllNodes()), t = this.nodesWithGravity.filter(function(t) {
								return e.has(t);
							});
							this.graphManager.setAllNodesToApplyGravitation(t), this.positionNodesRandomly();
						}
					}
					return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
				}, v.prototype.tick = function() {
					if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = !0;
					else return !0;
					if (this.totalIterations % l.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
						if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = !0;
						else return !0;
						this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - this.coolingCycle ** +(Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
					}
					if (this.isTreeGrowing) {
						if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
							this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
							var e = new Set(this.getAllNodes()), t = this.nodesWithGravity.filter(function(t) {
								return e.has(t);
							});
							this.graphManager.setAllNodesToApplyGravitation(t), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL;
						} else this.isTreeGrowing = !1, this.isGrowthFinished = !0;
						this.growTreeIterations++;
					}
					if (this.isGrowthFinished) {
						if (this.isConverged()) return !0;
						this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = l.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
					}
					var n = !this.isTreeGrowing && !this.isGrowthFinished, r = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
					return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(n, r), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
				}, v.prototype.getPositionsData = function() {
					for (var e = this.graphManager.getAllNodes(), t = {}, n = 0; n < e.length; n++) {
						var r = e[n].rect, i = e[n].id;
						t[i] = {
							id: i,
							x: r.getCenterX(),
							y: r.getCenterY(),
							w: r.width,
							h: r.height
						};
					}
					return t;
				}, v.prototype.runSpringEmbedder = function() {
					this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
					var e = !1;
					if (l.ANIMATE === "during") this.emit("layoutstarted");
					else {
						for (; !e;) e = this.tick();
						this.graphManager.updateBounds();
					}
				}, v.prototype.calculateNodesToApplyGravitationTo = function() {
					var e = [], t, n = this.graphManager.getGraphs(), r = n.length, i;
					for (i = 0; i < r; i++) t = n[i], t.updateConnected(), t.isConnected || (e = e.concat(t.getNodes()));
					return e;
				}, v.prototype.createBendpoints = function() {
					var e = [];
					e = e.concat(this.graphManager.getAllEdges());
					var t = /* @__PURE__ */ new Set(), n;
					for (n = 0; n < e.length; n++) {
						var r = e[n];
						if (!t.has(r)) {
							var i = r.getSource(), a = r.getTarget();
							if (i == a) r.getBendpoints().push(new f()), r.getBendpoints().push(new f()), this.createDummyNodesForBendpoints(r), t.add(r);
							else {
								var o = [];
								if (o = o.concat(i.getEdgeListToNode(a)), o = o.concat(a.getEdgeListToNode(i)), !t.has(o[0])) {
									if (o.length > 1) {
										var s;
										for (s = 0; s < o.length; s++) {
											var c = o[s];
											c.getBendpoints().push(new f()), this.createDummyNodesForBendpoints(c);
										}
									}
									o.forEach(function(e) {
										t.add(e);
									});
								}
							}
						}
						if (t.size == e.length) break;
					}
				}, v.prototype.positionNodesRadially = function(e) {
					for (var t = new d(0, 0), n = Math.ceil(Math.sqrt(e.length)), r = 0, i = 0, a = 0, o = new f(0, 0), s = 0; s < e.length; s++) {
						s % n == 0 && (a = 0, i = r, s != 0 && (i += c.DEFAULT_COMPONENT_SEPERATION), r = 0);
						var l = e[s], m = p.findCenterOfTree(l);
						t.x = a, t.y = i, o = v.radialLayout(l, m, t), o.y > r && (r = Math.floor(o.y)), a = Math.floor(o.x + c.DEFAULT_COMPONENT_SEPERATION);
					}
					this.transform(new f(u.WORLD_CENTER_X - o.x / 2, u.WORLD_CENTER_Y - o.y / 2));
				}, v.radialLayout = function(e, t, n) {
					var r = Math.max(this.maxDiagonalInTree(e), c.DEFAULT_RADIAL_SEPARATION);
					v.branchRadialLayout(t, null, 0, 359, 0, r);
					var i = g.calculateBounds(e), a = new _();
					a.setDeviceOrgX(i.getMinX()), a.setDeviceOrgY(i.getMinY()), a.setWorldOrgX(n.x), a.setWorldOrgY(n.y);
					for (var o = 0; o < e.length; o++) e[o].transform(a);
					var s = new f(i.getMaxX(), i.getMaxY());
					return a.inverseTransformPoint(s);
				}, v.branchRadialLayout = function(e, t, n, r, i, a) {
					var o = (r - n + 1) / 2;
					o < 0 && (o += 180);
					var s = (o + n) % 360 * h.TWO_PI / 360, c = i * Math.cos(s), l = i * Math.sin(s);
					e.setCenter(c, l);
					var u = [];
					u = u.concat(e.getEdges());
					var d = u.length;
					t != null && d--;
					for (var f = 0, p = u.length, m, g = e.getEdgesBetween(t); g.length > 1;) {
						var _ = g[0];
						g.splice(0, 1);
						var y = u.indexOf(_);
						y >= 0 && u.splice(y, 1), p--, d--;
					}
					m = t == null ? 0 : (u.indexOf(g[0]) + 1) % p;
					for (var b = Math.abs(r - n) / d, x = m; f != d; x = ++x % p) {
						var S = u[x].getOtherEnd(e);
						if (S != t) {
							var C = (n + f * b) % 360, w = (C + b) % 360;
							v.branchRadialLayout(S, e, C, w, i + a, a), f++;
						}
					}
				}, v.maxDiagonalInTree = function(e) {
					for (var t = m.MIN_VALUE, n = 0; n < e.length; n++) {
						var r = e[n].getDiagonal();
						r > t && (t = r);
					}
					return t;
				}, v.prototype.calcRepulsionRange = function() {
					return 2 * (this.level + 1) * this.idealEdgeLength;
				}, v.prototype.groupZeroDegreeMembers = function() {
					var e = this, t = {};
					this.memberGroups = {}, this.idToDummyNode = {};
					for (var n = [], r = this.graphManager.getAllNodes(), i = 0; i < r.length; i++) {
						var a = r[i], s = a.getParent();
						this.getNodeDegreeWithChildren(a) === 0 && (s.id == null || !this.getToBeTiled(s)) && n.push(a);
					}
					for (var i = 0; i < n.length; i++) {
						var a = n[i], c = a.getParent().id;
						t[c] === void 0 && (t[c] = []), t[c] = t[c].concat(a);
					}
					Object.keys(t).forEach(function(n) {
						if (t[n].length > 1) {
							var r = "DummyCompound_" + n;
							e.memberGroups[r] = t[n];
							var i = t[n][0].getParent(), a = new o(e.graphManager);
							a.id = r, a.paddingLeft = i.paddingLeft || 0, a.paddingRight = i.paddingRight || 0, a.paddingBottom = i.paddingBottom || 0, a.paddingTop = i.paddingTop || 0, e.idToDummyNode[r] = a;
							var s = e.getGraphManager().add(e.newGraph(), a), c = i.getChild();
							c.add(a);
							for (var l = 0; l < t[n].length; l++) {
								var u = t[n][l];
								c.remove(u), s.add(u);
							}
						}
					});
				}, v.prototype.clearCompounds = function() {
					var e = {}, t = {};
					this.performDFSOnCompounds();
					for (var n = 0; n < this.compoundOrder.length; n++) t[this.compoundOrder[n].id] = this.compoundOrder[n], e[this.compoundOrder[n].id] = [].concat(this.compoundOrder[n].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[n].getChild()), this.compoundOrder[n].child = null;
					this.graphManager.resetAllNodes(), this.tileCompoundMembers(e, t);
				}, v.prototype.clearZeroDegreeMembers = function() {
					var e = this, t = this.tiledZeroDegreePack = [];
					Object.keys(this.memberGroups).forEach(function(n) {
						var r = e.idToDummyNode[n];
						t[n] = e.tileNodes(e.memberGroups[n], r.paddingLeft + r.paddingRight), r.rect.width = t[n].width, r.rect.height = t[n].height;
					});
				}, v.prototype.repopulateCompounds = function() {
					for (var e = this.compoundOrder.length - 1; e >= 0; e--) {
						var t = this.compoundOrder[e], n = t.id, r = t.paddingLeft, i = t.paddingTop;
						this.adjustLocations(this.tiledMemberPack[n], t.rect.x, t.rect.y, r, i);
					}
				}, v.prototype.repopulateZeroDegreeMembers = function() {
					var e = this, t = this.tiledZeroDegreePack;
					Object.keys(t).forEach(function(n) {
						var r = e.idToDummyNode[n], i = r.paddingLeft, a = r.paddingTop;
						e.adjustLocations(t[n], r.rect.x, r.rect.y, i, a);
					});
				}, v.prototype.getToBeTiled = function(e) {
					var t = e.id;
					if (this.toBeTiled[t] != null) return this.toBeTiled[t];
					var n = e.getChild();
					if (n == null) return this.toBeTiled[t] = !1, !1;
					for (var r = n.getNodes(), i = 0; i < r.length; i++) {
						var a = r[i];
						if (this.getNodeDegree(a) > 0) return this.toBeTiled[t] = !1, !1;
						if (a.getChild() == null) {
							this.toBeTiled[a.id] = !1;
							continue;
						}
						if (!this.getToBeTiled(a)) return this.toBeTiled[t] = !1, !1;
					}
					return this.toBeTiled[t] = !0, !0;
				}, v.prototype.getNodeDegree = function(e) {
					e.id;
					for (var t = e.getEdges(), n = 0, r = 0; r < t.length; r++) {
						var i = t[r];
						i.getSource().id !== i.getTarget().id && (n += 1);
					}
					return n;
				}, v.prototype.getNodeDegreeWithChildren = function(e) {
					var t = this.getNodeDegree(e);
					if (e.getChild() == null) return t;
					for (var n = e.getChild().getNodes(), r = 0; r < n.length; r++) {
						var i = n[r];
						t += this.getNodeDegreeWithChildren(i);
					}
					return t;
				}, v.prototype.performDFSOnCompounds = function() {
					this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
				}, v.prototype.fillCompexOrderByDFS = function(e) {
					for (var t = 0; t < e.length; t++) {
						var n = e[t];
						n.getChild() != null && this.fillCompexOrderByDFS(n.getChild().getNodes()), this.getToBeTiled(n) && this.compoundOrder.push(n);
					}
				}, v.prototype.adjustLocations = function(e, t, n, r, i) {
					t += r, n += i;
					for (var a = t, o = 0; o < e.rows.length; o++) {
						var s = e.rows[o];
						t = a;
						for (var c = 0, l = 0; l < s.length; l++) {
							var u = s[l];
							u.rect.x = t, u.rect.y = n, t += u.rect.width + e.horizontalPadding, u.rect.height > c && (c = u.rect.height);
						}
						n += c + e.verticalPadding;
					}
				}, v.prototype.tileCompoundMembers = function(e, t) {
					var n = this;
					this.tiledMemberPack = [], Object.keys(e).forEach(function(r) {
						var i = t[r];
						n.tiledMemberPack[r] = n.tileNodes(e[r], i.paddingLeft + i.paddingRight), i.rect.width = n.tiledMemberPack[r].width, i.rect.height = n.tiledMemberPack[r].height;
					});
				}, v.prototype.tileNodes = function(e, t) {
					var n = {
						rows: [],
						rowWidth: [],
						rowHeight: [],
						width: 0,
						height: t,
						verticalPadding: c.TILING_PADDING_VERTICAL,
						horizontalPadding: c.TILING_PADDING_HORIZONTAL
					};
					e.sort(function(e, t) {
						return e.rect.width * e.rect.height > t.rect.width * t.rect.height ? -1 : e.rect.width * e.rect.height < t.rect.width * t.rect.height ? 1 : 0;
					});
					for (var r = 0; r < e.length; r++) {
						var i = e[r];
						n.rows.length == 0 ? this.insertNodeToRow(n, i, 0, t) : this.canAddHorizontal(n, i.rect.width, i.rect.height) ? this.insertNodeToRow(n, i, this.getShortestRowIndex(n), t) : this.insertNodeToRow(n, i, n.rows.length, t), this.shiftToLastRow(n);
					}
					return n;
				}, v.prototype.insertNodeToRow = function(e, t, n, r) {
					var i = r;
					n == e.rows.length && (e.rows.push([]), e.rowWidth.push(i), e.rowHeight.push(0));
					var a = e.rowWidth[n] + t.rect.width;
					e.rows[n].length > 0 && (a += e.horizontalPadding), e.rowWidth[n] = a, e.width < a && (e.width = a);
					var o = t.rect.height;
					n > 0 && (o += e.verticalPadding);
					var s = 0;
					o > e.rowHeight[n] && (s = e.rowHeight[n], e.rowHeight[n] = o, s = e.rowHeight[n] - s), e.height += s, e.rows[n].push(t);
				}, v.prototype.getShortestRowIndex = function(e) {
					for (var t = -1, n = Number.MAX_VALUE, r = 0; r < e.rows.length; r++) e.rowWidth[r] < n && (t = r, n = e.rowWidth[r]);
					return t;
				}, v.prototype.getLongestRowIndex = function(e) {
					for (var t = -1, n = Number.MIN_VALUE, r = 0; r < e.rows.length; r++) e.rowWidth[r] > n && (t = r, n = e.rowWidth[r]);
					return t;
				}, v.prototype.canAddHorizontal = function(e, t, n) {
					var r = this.getShortestRowIndex(e);
					if (r < 0) return !0;
					var i = e.rowWidth[r];
					if (i + e.horizontalPadding + t <= e.width) return !0;
					var a = 0;
					e.rowHeight[r] < n && r > 0 && (a = n + e.verticalPadding - e.rowHeight[r]);
					var o = e.width - i >= t + e.horizontalPadding ? (e.height + a) / (i + t + e.horizontalPadding) : (e.height + a) / e.width;
					a = n + e.verticalPadding;
					var s = e.width < t ? (e.height + a) / t : (e.height + a) / e.width;
					return s < 1 && (s = 1 / s), o < 1 && (o = 1 / o), o < s;
				}, v.prototype.shiftToLastRow = function(e) {
					var t = this.getLongestRowIndex(e), n = e.rowWidth.length - 1, r = e.rows[t], i = r[r.length - 1], a = i.width + e.horizontalPadding;
					if (e.width - e.rowWidth[n] > a && t != n) {
						r.splice(-1, 1), e.rows[n].push(i), e.rowWidth[t] = e.rowWidth[t] - a, e.rowWidth[n] = e.rowWidth[n] + a, e.width = e.rowWidth[instance.getLongestRowIndex(e)];
						for (var o = Number.MIN_VALUE, s = 0; s < r.length; s++) r[s].height > o && (o = r[s].height);
						t > 0 && (o += e.verticalPadding);
						var c = e.rowHeight[t] + e.rowHeight[n];
						e.rowHeight[t] = o, e.rowHeight[n] < i.height + e.verticalPadding && (e.rowHeight[n] = i.height + e.verticalPadding);
						var l = e.rowHeight[t] + e.rowHeight[n];
						e.height += l - c, this.shiftToLastRow(e);
					}
				}, v.prototype.tilingPreLayout = function() {
					c.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
				}, v.prototype.tilingPostLayout = function() {
					c.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
				}, v.prototype.reduceTrees = function() {
					for (var e = [], t = !0, n; t;) {
						var r = this.graphManager.getAllNodes(), i = [];
						t = !1;
						for (var a = 0; a < r.length; a++) n = r[a], n.getEdges().length == 1 && !n.getEdges()[0].isInterGraph && n.getChild() == null && (i.push([
							n,
							n.getEdges()[0],
							n.getOwner()
						]), t = !0);
						if (t == 1) {
							for (var o = [], s = 0; s < i.length; s++) i[s][0].getEdges().length == 1 && (o.push(i[s]), i[s][0].getOwner().remove(i[s][0]));
							e.push(o), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
						}
					}
					this.prunedNodesAll = e;
				}, v.prototype.growTree = function(e) {
					for (var t = e[e.length - 1], n, r = 0; r < t.length; r++) n = t[r], this.findPlaceforPrunedNode(n), n[2].add(n[0]), n[2].add(n[1], n[1].source, n[1].target);
					e.splice(e.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
				}, v.prototype.findPlaceforPrunedNode = function(e) {
					var t, n, r = e[0];
					n = r == e[1].source ? e[1].target : e[1].source;
					var i = n.startX, a = n.finishX, o = n.startY, s = n.finishY, c = [
						0,
						0,
						0,
						0
					];
					if (o > 0) for (var u = i; u <= a; u++) c[0] += this.grid[u][o - 1].length + this.grid[u][o].length - 1;
					if (a < this.grid.length - 1) for (var u = o; u <= s; u++) c[1] += this.grid[a + 1][u].length + this.grid[a][u].length - 1;
					if (s < this.grid[0].length - 1) for (var u = i; u <= a; u++) c[2] += this.grid[u][s + 1].length + this.grid[u][s].length - 1;
					if (i > 0) for (var u = o; u <= s; u++) c[3] += this.grid[i - 1][u].length + this.grid[i][u].length - 1;
					for (var d = m.MAX_VALUE, f, p, h = 0; h < c.length; h++) c[h] < d ? (d = c[h], f = 1, p = h) : c[h] == d && f++;
					if (f == 3 && d == 0) c[0] == 0 && c[1] == 0 && c[2] == 0 ? t = 1 : c[0] == 0 && c[1] == 0 && c[3] == 0 ? t = 0 : c[0] == 0 && c[2] == 0 && c[3] == 0 ? t = 3 : c[1] == 0 && c[2] == 0 && c[3] == 0 && (t = 2);
					else if (f == 2 && d == 0) {
						var g = Math.floor(Math.random() * 2);
						t = c[0] == 0 && c[1] == 0 ? g == 0 ? 0 : 1 : c[0] == 0 && c[2] == 0 ? g == 0 ? 0 : 2 : c[0] == 0 && c[3] == 0 ? g == 0 ? 0 : 3 : c[1] == 0 && c[2] == 0 ? g == 0 ? 1 : 2 : c[1] == 0 && c[3] == 0 ? g == 0 ? 1 : 3 : g == 0 ? 2 : 3;
					} else if (f == 4 && d == 0) {
						var g = Math.floor(Math.random() * 4);
						t = g;
					} else t = p;
					t == 0 ? r.setCenter(n.getCenterX(), n.getCenterY() - n.getHeight() / 2 - l.DEFAULT_EDGE_LENGTH - r.getHeight() / 2) : t == 1 ? r.setCenter(n.getCenterX() + n.getWidth() / 2 + l.DEFAULT_EDGE_LENGTH + r.getWidth() / 2, n.getCenterY()) : t == 2 ? r.setCenter(n.getCenterX(), n.getCenterY() + n.getHeight() / 2 + l.DEFAULT_EDGE_LENGTH + r.getHeight() / 2) : r.setCenter(n.getCenterX() - n.getWidth() / 2 - l.DEFAULT_EDGE_LENGTH - r.getWidth() / 2, n.getCenterY());
				}, e.exports = v;
			}),
			(function(e, t, n) {
				var r = {};
				r.layoutBase = n(0), r.CoSEConstants = n(1), r.CoSEEdge = n(2), r.CoSEGraph = n(3), r.CoSEGraphManager = n(4), r.CoSELayout = n(6), r.CoSENode = n(5), e.exports = r;
			})
		]);
	});
})), import_cytoscape_cose_bilkent = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r(require_cose_base()) : typeof define == "function" && define.amd ? define(["cose-base"], r) : typeof e == "object" ? e.cytoscapeCoseBilkent = r(require_cose_base()) : n.cytoscapeCoseBilkent = r(n.coseBase);
	})(e, function(e) {
		return (function(e) {
			var t = {};
			function n(r) {
				if (t[r]) return t[r].exports;
				var i = t[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
			}
			return n.m = e, n.c = t, n.i = function(e) {
				return e;
			}, n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: r
				});
			}, n.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return n.d(t, "a", t), t;
			}, n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n.p = "", n(n.s = 1);
		})([(function(t, n) {
			t.exports = e;
		}), (function(e, t, n) {
			var r = n(0).layoutBase.LayoutConstants, i = n(0).layoutBase.FDLayoutConstants, a = n(0).CoSEConstants, o = n(0).CoSELayout, s = n(0).CoSENode, c = n(0).layoutBase.PointD, l = n(0).layoutBase.DimensionD, u = {
				ready: function() {},
				stop: function() {},
				quality: "default",
				nodeDimensionsIncludeLabels: !1,
				refresh: 30,
				fit: !0,
				padding: 10,
				randomize: !0,
				nodeRepulsion: 4500,
				idealEdgeLength: 50,
				edgeElasticity: .45,
				nestingFactor: .1,
				gravity: .25,
				numIter: 2500,
				tile: !0,
				animate: "end",
				animationDuration: 500,
				tilingPaddingVertical: 10,
				tilingPaddingHorizontal: 10,
				gravityRangeCompound: 1.5,
				gravityCompound: 1,
				gravityRange: 3.8,
				initialEnergyOnIncremental: .5
			};
			function d(e, t) {
				var n = {};
				for (var r in e) n[r] = e[r];
				for (var r in t) n[r] = t[r];
				return n;
			}
			function f(e) {
				this.options = d(u, e), p(this.options);
			}
			var p = function(e) {
				e.nodeRepulsion != null && (a.DEFAULT_REPULSION_STRENGTH = i.DEFAULT_REPULSION_STRENGTH = e.nodeRepulsion), e.idealEdgeLength != null && (a.DEFAULT_EDGE_LENGTH = i.DEFAULT_EDGE_LENGTH = e.idealEdgeLength), e.edgeElasticity != null && (a.DEFAULT_SPRING_STRENGTH = i.DEFAULT_SPRING_STRENGTH = e.edgeElasticity), e.nestingFactor != null && (a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e.nestingFactor), e.gravity != null && (a.DEFAULT_GRAVITY_STRENGTH = i.DEFAULT_GRAVITY_STRENGTH = e.gravity), e.numIter != null && (a.MAX_ITERATIONS = i.MAX_ITERATIONS = e.numIter), e.gravityRange != null && (a.DEFAULT_GRAVITY_RANGE_FACTOR = i.DEFAULT_GRAVITY_RANGE_FACTOR = e.gravityRange), e.gravityCompound != null && (a.DEFAULT_COMPOUND_GRAVITY_STRENGTH = i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e.gravityCompound), e.gravityRangeCompound != null && (a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e.gravityRangeCompound), e.initialEnergyOnIncremental != null && (a.DEFAULT_COOLING_FACTOR_INCREMENTAL = i.DEFAULT_COOLING_FACTOR_INCREMENTAL = e.initialEnergyOnIncremental), e.quality == "draft" ? r.QUALITY = 0 : e.quality == "proof" ? r.QUALITY = 2 : r.QUALITY = 1, a.NODE_DIMENSIONS_INCLUDE_LABELS = i.NODE_DIMENSIONS_INCLUDE_LABELS = r.NODE_DIMENSIONS_INCLUDE_LABELS = e.nodeDimensionsIncludeLabels, a.DEFAULT_INCREMENTAL = i.DEFAULT_INCREMENTAL = r.DEFAULT_INCREMENTAL = !e.randomize, a.ANIMATE = i.ANIMATE = r.ANIMATE = e.animate, a.TILE = e.tile, a.TILING_PADDING_VERTICAL = typeof e.tilingPaddingVertical == "function" ? e.tilingPaddingVertical.call() : e.tilingPaddingVertical, a.TILING_PADDING_HORIZONTAL = typeof e.tilingPaddingHorizontal == "function" ? e.tilingPaddingHorizontal.call() : e.tilingPaddingHorizontal;
			};
			f.prototype.run = function() {
				var e, t, n = this.options;
				this.idToLNode = {};
				var r = this.layout = new o(), i = this;
				i.stopped = !1, this.cy = this.options.cy, this.cy.trigger({
					type: "layoutstart",
					layout: this
				});
				var a = r.newGraphManager();
				this.gm = a;
				var s = this.options.eles.nodes(), c = this.options.eles.edges();
				this.root = a.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(s), r);
				for (var l = 0; l < c.length; l++) {
					var u = c[l], d = this.idToLNode[u.data("source")], f = this.idToLNode[u.data("target")];
					if (d !== f && d.getEdgesBetween(f).length == 0) {
						var p = a.add(r.newEdge(), d, f);
						p.id = u.id();
					}
				}
				var m = function(e, t) {
					typeof e == "number" && (e = t);
					var n = e.data("id"), r = i.idToLNode[n];
					return {
						x: r.getRect().getCenterX(),
						y: r.getRect().getCenterY()
					};
				}, h = function a() {
					for (var o = function() {
						n.fit && n.cy.fit(n.eles, n.padding), e || (e = !0, i.cy.one("layoutready", n.ready), i.cy.trigger({
							type: "layoutready",
							layout: i
						}));
					}, s = i.options.refresh, c, l = 0; l < s && !c; l++) c = i.stopped || i.layout.tick();
					if (c) {
						r.checkLayoutSuccess() && !r.isSubLayout && r.doPostLayout(), r.tilingPostLayout && r.tilingPostLayout(), r.isLayoutFinished = !0, i.options.eles.nodes().positions(m), o(), i.cy.one("layoutstop", i.options.stop), i.cy.trigger({
							type: "layoutstop",
							layout: i
						}), t && cancelAnimationFrame(t), e = !1;
						return;
					}
					var u = i.layout.getPositionsData();
					n.eles.nodes().positions(function(e, t) {
						if (typeof e == "number" && (e = t), !e.isParent()) {
							for (var n = e.id(), r = u[n], i = e; r == null && (r = u[i.data("parent")] || u["DummyCompound_" + i.data("parent")], u[n] = r, i = i.parent()[0], i != null););
							return r == null ? {
								x: e.position("x"),
								y: e.position("y")
							} : {
								x: r.x,
								y: r.y
							};
						}
					}), o(), t = requestAnimationFrame(a);
				};
				return r.addListener("layoutstarted", function() {
					i.options.animate === "during" && (t = requestAnimationFrame(h));
				}), r.runLayout(), this.options.animate !== "during" && (i.options.eles.nodes().not(":parent").layoutPositions(i, i.options, m), e = !1), this;
			}, f.prototype.getTopMostNodes = function(e) {
				for (var t = {}, n = 0; n < e.length; n++) t[e[n].id()] = !0;
				return e.filter(function(e, n) {
					typeof e == "number" && (e = n);
					for (var r = e.parent()[0]; r != null;) {
						if (t[r.id()]) return !1;
						r = r.parent()[0];
					}
					return !0;
				});
			}, f.prototype.processChildrenList = function(e, t, n) {
				for (var r = t.length, i = 0; i < r; i++) {
					var a = t[i], o = a.children(), u, d = a.layoutDimensions({ nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels });
					if (u = a.outerWidth() != null && a.outerHeight() != null ? e.add(new s(n.graphManager, new c(a.position("x") - d.w / 2, a.position("y") - d.h / 2), new l(parseFloat(d.w), parseFloat(d.h)))) : e.add(new s(this.graphManager)), u.id = a.data("id"), u.paddingLeft = parseInt(a.css("padding")), u.paddingTop = parseInt(a.css("padding")), u.paddingRight = parseInt(a.css("padding")), u.paddingBottom = parseInt(a.css("padding")), this.options.nodeDimensionsIncludeLabels && a.isParent()) {
						var f = a.boundingBox({
							includeLabels: !0,
							includeNodes: !1
						}).w, p = a.boundingBox({
							includeLabels: !0,
							includeNodes: !1
						}).h, m = a.css("text-halign");
						u.labelWidth = f, u.labelHeight = p, u.labelPos = m;
					}
					if (this.idToLNode[a.data("id")] = u, isNaN(u.rect.x) && (u.rect.x = 0), isNaN(u.rect.y) && (u.rect.y = 0), o != null && o.length > 0) {
						var h = n.getGraphManager().add(n.newGraph(), u);
						this.processChildrenList(h, o, n);
					}
				}
			}, f.prototype.stop = function() {
				return this.stopped = !0, this;
			};
			var m = function(e) {
				e("layout", "cose-bilkent", f);
			};
			typeof cytoscape < "u" && m(cytoscape), e.exports = m;
		})]);
	});
})))(), 1);
cytoscape$1.use(import_cytoscape_cose_bilkent.default);
function addNodes(e, t) {
	e.forEach((e) => {
		let n = {
			id: e.id,
			labelText: e.label,
			height: e.height,
			width: e.width,
			padding: e.padding ?? 0
		};
		Object.keys(e).forEach((t) => {
			[
				"id",
				"label",
				"height",
				"width",
				"padding",
				"x",
				"y"
			].includes(t) || (n[t] = e[t]);
		}), t.add({
			group: "nodes",
			data: n,
			position: {
				x: e.x ?? 0,
				y: e.y ?? 0
			}
		});
	});
}
__name(addNodes, "addNodes");
function addEdges(e, t) {
	e.forEach((e) => {
		let n = {
			id: e.id,
			source: e.start,
			target: e.end
		};
		Object.keys(e).forEach((t) => {
			[
				"id",
				"start",
				"end"
			].includes(t) || (n[t] = e[t]);
		}), t.add({
			group: "edges",
			data: n
		});
	});
}
__name(addEdges, "addEdges");
function createCytoscapeInstance(e) {
	return new Promise((t) => {
		let r = select_default("body").append("div").attr("id", "cy").attr("style", "display:none"), o = cytoscape$1({
			container: document.getElementById("cy"),
			style: [{
				selector: "edge",
				style: { "curve-style": "bezier" }
			}]
		});
		r.remove(), addNodes(e.nodes, o), addEdges(e.edges, o), o.nodes().forEach(function(e) {
			e.layoutDimensions = () => {
				let t = e.data();
				return {
					w: t.width,
					h: t.height
				};
			};
		}), o.layout({
			name: "cose-bilkent",
			quality: "proof",
			styleEnabled: !1,
			animate: !1
		}).run(), o.ready((e) => {
			log.info("Cytoscape ready", e), t(o);
		});
	});
}
__name(createCytoscapeInstance, "createCytoscapeInstance");
function extractPositionedNodes(e) {
	return e.nodes().map((e) => {
		let t = e.data(), n = e.position(), r = {
			id: t.id,
			x: n.x,
			y: n.y
		};
		return Object.keys(t).forEach((e) => {
			e !== "id" && (r[e] = t[e]);
		}), r;
	});
}
__name(extractPositionedNodes, "extractPositionedNodes");
function extractPositionedEdges(e) {
	return e.edges().map((e) => {
		let t = e.data(), n = e._private.rscratch, r = {
			id: t.id,
			source: t.source,
			target: t.target,
			startX: n.startX,
			startY: n.startY,
			midX: n.midX,
			midY: n.midY,
			endX: n.endX,
			endY: n.endY
		};
		return Object.keys(t).forEach((e) => {
			[
				"id",
				"source",
				"target"
			].includes(e) || (r[e] = t[e]);
		}), r;
	});
}
__name(extractPositionedEdges, "extractPositionedEdges");
async function executeCoseBilkentLayout(e, t) {
	log.debug("Starting cose-bilkent layout algorithm");
	try {
		validateLayoutData(e);
		let t = await createCytoscapeInstance(e), r = extractPositionedNodes(t), i = extractPositionedEdges(t);
		return log.debug(`Layout completed: ${r.length} nodes, ${i.length} edges`), {
			nodes: r,
			edges: i
		};
	} catch (e) {
		throw log.error("Error in cose-bilkent layout algorithm:", e), e;
	}
}
__name(executeCoseBilkentLayout, "executeCoseBilkentLayout");
function validateLayoutData(e) {
	if (!e) throw Error("Layout data is required");
	if (!e.config) throw Error("Configuration is required in layout data");
	if (!e.rootNode) throw Error("Root node is required");
	if (!e.nodes || !Array.isArray(e.nodes)) throw Error("No nodes found in layout data");
	if (!Array.isArray(e.edges)) throw Error("Edges array is required in layout data");
	return !0;
}
__name(validateLayoutData, "validateLayoutData");
var render2 = /* @__PURE__ */ __name(async (e, t, { insertCluster: n, insertEdge: r, insertEdgeLabel: i, insertMarkers: a, insertNode: o, log: s, positionEdgeLabel: c }, { algorithm: l }) => {
	let u = {}, d = {}, f = t.select("g");
	a(f, e.markers, e.type, e.diagramId);
	let p = f.insert("g").attr("class", "subgraphs"), h = f.insert("g").attr("class", "edgePaths"), g = f.insert("g").attr("class", "edgeLabels"), _ = f.insert("g").attr("class", "nodes");
	s.debug("Inserting nodes into DOM for dimension calculation"), await Promise.all(e.nodes.map(async (t) => {
		if (t.isGroup) {
			let e = { ...t };
			d[t.id] = e, u[t.id] = e, await n(p, t);
		} else {
			let n = { ...t };
			u[t.id] = n;
			let r = await o(_, t, {
				config: e.config,
				dir: e.direction || "TB"
			}), i = r.node().getBBox();
			n.width = i.width, n.height = i.height, n.domId = r, s.debug(`Node ${t.id} dimensions: ${i.width}x${i.height}`);
		}
	})), s.debug("Running cose-bilkent layout algorithm");
	let v = await executeCoseBilkentLayout({
		...e,
		nodes: e.nodes.map((e) => {
			let t = u[e.id];
			return {
				...e,
				width: t.width,
				height: t.height
			};
		})
	}, e.config);
	s.debug("Positioning nodes based on layout results"), v.nodes.forEach((e) => {
		let t = u[e.id];
		t?.domId && (t.domId.attr("transform", `translate(${e.x}, ${e.y})`), t.x = e.x, t.y = e.y, s.debug(`Positioned node ${t.id} at center (${e.x}, ${e.y})`));
	}), v.edges.forEach((t) => {
		let n = e.edges.find((e) => e.id === t.id);
		n && (n.points = [
			{
				x: t.startX,
				y: t.startY
			},
			{
				x: t.midX,
				y: t.midY
			},
			{
				x: t.endX,
				y: t.endY
			}
		]);
	}), s.debug("Inserting and positioning edges"), await Promise.all(e.edges.map(async (t) => {
		await i(g, t);
		let n = u[t.start ?? ""], a = u[t.end ?? ""];
		if (n && a) {
			let i = v.edges.find((e) => e.id === t.id);
			if (i) {
				s.debug("APA01 positionedEdge", i);
				let o = { ...t };
				c(o, r(h, o, d, e.type, n, a, e.diagramId));
			} else {
				let i = {
					...t,
					points: [{
						x: n.x || 0,
						y: n.y || 0
					}, {
						x: a.x || 0,
						y: a.y || 0
					}]
				};
				c(i, r(h, i, d, e.type, n, a, e.diagramId));
			}
		}
	})), s.debug("Cose-bilkent rendering completed");
}, "render");
export { render2 as render };

//# sourceMappingURL=cose-bilkent-S5V4N54A-Dr1w6maR.js.map