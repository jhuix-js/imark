import { s as __toESM, t as __commonJSMin } from "./chunk-DgPTj83v.js";
import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-BlFh-ztF.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./baseUniq-B8xWFlw1.js";
import "./basePickBy-BzM66dBW.js";
import "./isEmpty-D0b8WX4x.js";
import { c as getEdgeId, i as cleanAndMerge } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import "./clone-DNjDWJNG.js";
import "./chunk-O7ZBX7Z2-CxVFMAjj.js";
import "./chunk-S6J4BHB3-BApfhtzd.js";
import "./chunk-LBM3YZW2-A3HnNQYy.js";
import "./chunk-76Q3JFCE-BL66QHsH.js";
import "./chunk-T53DSG4Q-BMK1VS9O.js";
import "./chunk-LHMN2FUI-Bkmti0z_.js";
import "./chunk-FWNWRKHM-Cr68sCBC.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, G as setupGraphViewbox, I as sanitizeText, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, d as defaultConfig_default, v as getAccTitle, y as getConfig, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import { t as selectSvgElement } from "./chunk-EXTU4WIE-Cl0HIDRQ.js";
import "./dist-CUheKjZU.js";
import { i as registerIconPacks, n as createText, o as unknownIcon, r as getIconSVG } from "./chunk-JA3XYJ7Z-DLTLD5Qe.js";
import { t as populateCommonDb } from "./chunk-4BX2VUAB-DbDv1R95.js";
import { t as parse } from "./mermaid-parser.core-DhVi83X6.js";
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
			}, n.p = "", n(n.s = 28);
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
				var r = n(2), i = n(10), a = n(13), o = n(0), s = n(16), c = n(5);
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
							this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(t + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > t ? (this.rect.x -= (this.labelWidth - t) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(t + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(n + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > n ? (this.rect.y -= (this.labelHeight - n) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(n + this.labelHeight));
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
				var r = n(0);
				function i() {}
				for (var a in r) i[a] = r[a];
				i.MAX_ITERATIONS = 2500, i.DEFAULT_EDGE_LENGTH = 50, i.DEFAULT_SPRING_STRENGTH = .45, i.DEFAULT_REPULSION_STRENGTH = 4500, i.DEFAULT_GRAVITY_STRENGTH = .4, i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, i.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, i.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, i.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, i.DEFAULT_COOLING_FACTOR_INCREMENTAL = .3, i.COOLING_ADAPTATION_FACTOR = .33, i.ADAPTATION_LOWER_NODE_LIMIT = 1e3, i.ADAPTATION_UPPER_NODE_LIMIT = 5e3, i.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, i.MAX_NODE_DISPLACEMENT = i.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, i.MIN_REPULSION_DIST = i.DEFAULT_EDGE_LENGTH / 10, i.CONVERGENCE_CHECK_PERIOD = 100, i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = .1, i.MIN_EDGE_LENGTH = 1, i.GRID_CALCULATION_CHECK_PERIOD = 10, e.exports = i;
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
				var r = n(2), i = n(10), a = n(0), o = n(7), s = n(3), c = n(1), l = n(13), u = n(12), d = n(11);
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
					r = n(6), this.layout = e, this.graphs = [], this.edges = [];
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
					for (var e, t = [], n = this.edges.length, r = 0; r < n; r++) e = this.edges[r], this.isOneAncestorOfOther(e.source, e.target) && t.push(e);
					for (var r = 0; r < t.length; r++) this.remove(t[r]);
					return !1;
				}, e.exports = a;
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
				}, i.findCircleLineIntersections = function(e, t, n, r, i, a, o) {
					var s = (n - e) * (n - e) + (r - t) * (r - t), c = 2 * ((e - i) * (n - e) + (t - a) * (r - t)), l = (e - i) * (e - i) + (t - a) * (t - a) - o * o;
					if (c * c - 4 * s * l >= 0) {
						var u = (-c + Math.sqrt(c * c - 4 * s * l)) / (2 * s), d = (-c - Math.sqrt(c * c - 4 * s * l)) / (2 * s);
						return u >= 0 && u <= 1 ? [u] : d >= 0 && d <= 1 ? [d] : null;
					} else return null;
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
				var i = n(0), a = n(7), o = n(3), s = n(1), c = n(6), l = n(5), u = n(17), d = n(29);
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
				var r = n(5);
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
				var i = n(15), a = n(4), o = n(0), s = n(8), c = n(9);
				function l() {
					i.call(this), this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = a.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a.MAX_ITERATIONS;
				}
				for (var u in l.prototype = Object.create(i.prototype), i) l[u] = i[u];
				l.prototype.initParameters = function() {
					i.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
				}, l.prototype.calcIdealEdgeLengths = function() {
					for (var e, t, n, r, i, s, c, l = this.getGraphManager().getAllEdges(), u = 0; u < l.length; u++) e = l[u], t = e.idealLength, e.isInterGraph && (r = e.getSource(), i = e.getTarget(), s = e.getSourceInLca().getEstimatedSize(), c = e.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (e.idealLength += s + c - 2 * o.SIMPLE_NODE_SIZE), n = e.getLca().getInclusionTreeDepth(), e.idealLength += t * a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (r.getInclusionTreeDepth() + i.getInclusionTreeDepth() - 2 * n));
				}, l.prototype.initSpringEmbedder = function() {
					var e = this.getAllNodes().length;
					this.incremental ? (e > a.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * a.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (e - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (e > a.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(a.COOLING_ADAPTATION_FACTOR, 1 - (e - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
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
					i = e.getLength(), i != 0 && (a = e.edgeElasticity * (i - t), o = a * (e.lengthX / i), s = a * (e.lengthY / i), n.springForceX += o, n.springForceY += s, r.springForceX -= o, r.springForceY -= s);
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
					} else this.uniformLeafNodeSizes && e.getChild() == null && t.getChild() == null ? (l = r.getCenterX() - n.getCenterX(), u = r.getCenterY() - n.getCenterY()) : (s.getIntersection(n, r, o), l = o[2] - o[0], u = o[3] - o[1]), Math.abs(l) < a.MIN_REPULSION_DIST && (l = c.sign(l) * a.MIN_REPULSION_DIST), Math.abs(u) < a.MIN_REPULSION_DIST && (u = c.sign(u) * a.MIN_REPULSION_DIST), d = l * l + u * u, f = Math.sqrt(d), p = (e.nodeRepulsion / 2 + t.nodeRepulsion / 2) * e.noOfChildren * t.noOfChildren / d, m = p * l / f, h = p * u / f, e.repulsionForceX -= m, e.repulsionForceY -= h, t.repulsionForceX += m, t.repulsionForceY += h;
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
				var r = n(1), i = n(4);
				function a(e, t, n) {
					r.call(this, e, t, n), this.idealLength = i.DEFAULT_EDGE_LENGTH, this.edgeElasticity = i.DEFAULT_SPRING_STRENGTH;
				}
				for (var o in a.prototype = Object.create(r.prototype), r) a[o] = r[o];
				e.exports = a;
			}),
			(function(e, t, n) {
				var r = n(3), i = n(4);
				function a(e, t, n, a) {
					r.call(this, e, t, n, a), this.nodeRepulsion = i.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
				}
				for (var o in a.prototype = Object.create(r.prototype), r) a[o] = r[o];
				a.prototype.setGridCoordinates = function(e, t, n, r) {
					this.startX = e, this.finishX = t, this.startY = n, this.finishY = r;
				}, e.exports = a;
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
				function r() {}
				r.multMat = function(e, t) {
					for (var n = [], r = 0; r < e.length; r++) {
						n[r] = [];
						for (var i = 0; i < t[0].length; i++) {
							n[r][i] = 0;
							for (var a = 0; a < e[0].length; a++) n[r][i] += e[r][a] * t[a][i];
						}
					}
					return n;
				}, r.transpose = function(e) {
					for (var t = [], n = 0; n < e[0].length; n++) {
						t[n] = [];
						for (var r = 0; r < e.length; r++) t[n][r] = e[r][n];
					}
					return t;
				}, r.multCons = function(e, t) {
					for (var n = [], r = 0; r < e.length; r++) n[r] = e[r] * t;
					return n;
				}, r.minusOp = function(e, t) {
					for (var n = [], r = 0; r < e.length; r++) n[r] = e[r] - t[r];
					return n;
				}, r.dotProduct = function(e, t) {
					for (var n = 0, r = 0; r < e.length; r++) n += e[r] * t[r];
					return n;
				}, r.mag = function(e) {
					return Math.sqrt(this.dotProduct(e, e));
				}, r.normalize = function(e) {
					for (var t = [], n = this.mag(e), r = 0; r < e.length; r++) t[r] = e[r] / n;
					return t;
				}, r.multGamma = function(e) {
					for (var t = [], n = 0, r = 0; r < e.length; r++) n += e[r];
					n *= -1 / e.length;
					for (var i = 0; i < e.length; i++) t[i] = n + e[i];
					return t;
				}, r.multL = function(e, t, n) {
					for (var r = [], i = [], a = [], o = 0; o < t[0].length; o++) {
						for (var s = 0, c = 0; c < t.length; c++) s += -.5 * t[c][o] * e[c];
						i[o] = s;
					}
					for (var l = 0; l < n.length; l++) {
						for (var u = 0, d = 0; d < n.length; d++) u += n[l][d] * i[d];
						a[l] = u;
					}
					for (var f = 0; f < t.length; f++) {
						for (var p = 0, m = 0; m < t[0].length; m++) p += t[f][m] * a[m];
						r[f] = p;
					}
					return r;
				}, e.exports = r;
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
				function r() {}
				r.svd = function(e) {
					this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = e.length, this.n = e[0].length;
					var t = Math.min(this.m, this.n);
					this.s = function(e) {
						for (var t = []; e-- > 0;) t.push(0);
						return t;
					}(Math.min(this.m + 1, this.n)), this.U = function(e) {
						return function e(t) {
							if (t.length == 0) return 0;
							for (var n = [], r = 0; r < t[0]; r++) n.push(e(t.slice(1)));
							return n;
						}(e);
					}([this.m, t]), this.V = function(e) {
						return function e(t) {
							if (t.length == 0) return 0;
							for (var n = [], r = 0; r < t[0]; r++) n.push(e(t.slice(1)));
							return n;
						}(e);
					}([this.n, this.n]);
					for (var n = function(e) {
						for (var t = []; e-- > 0;) t.push(0);
						return t;
					}(this.n), i = function(e) {
						for (var t = []; e-- > 0;) t.push(0);
						return t;
					}(this.m), a = !0, o = !0, s = Math.min(this.m - 1, this.n), c = Math.max(0, Math.min(this.n - 2, this.m)), l = 0; l < Math.max(s, c); l++) {
						if (l < s) {
							this.s[l] = 0;
							for (var u = l; u < this.m; u++) this.s[l] = r.hypot(this.s[l], e[u][l]);
							if (this.s[l] !== 0) {
								e[l][l] < 0 && (this.s[l] = -this.s[l]);
								for (var d = l; d < this.m; d++) e[d][l] /= this.s[l];
								e[l][l] += 1;
							}
							this.s[l] = -this.s[l];
						}
						for (var f = l + 1; f < this.n; f++) {
							if (function(e, t) {
								return e && t;
							}(l < s, this.s[l] !== 0)) {
								for (var p = 0, m = l; m < this.m; m++) p += e[m][l] * e[m][f];
								p = -p / e[l][l];
								for (var h = l; h < this.m; h++) e[h][f] += p * e[h][l];
							}
							n[f] = e[l][f];
						}
						if (function(e, t) {
							return e && t;
						}(a, l < s)) for (var g = l; g < this.m; g++) this.U[g][l] = e[g][l];
						if (l < c) {
							n[l] = 0;
							for (var _ = l + 1; _ < this.n; _++) n[l] = r.hypot(n[l], n[_]);
							if (n[l] !== 0) {
								n[l + 1] < 0 && (n[l] = -n[l]);
								for (var v = l + 1; v < this.n; v++) n[v] /= n[l];
								n[l + 1] += 1;
							}
							if (n[l] = -n[l], function(e, t) {
								return e && t;
							}(l + 1 < this.m, n[l] !== 0)) {
								for (var y = l + 1; y < this.m; y++) i[y] = 0;
								for (var b = l + 1; b < this.n; b++) for (var x = l + 1; x < this.m; x++) i[x] += n[b] * e[x][b];
								for (var S = l + 1; S < this.n; S++) for (var C = -n[S] / n[l + 1], w = l + 1; w < this.m; w++) e[w][S] += C * i[w];
							}
							if (o) for (var T = l + 1; T < this.n; T++) this.V[T][l] = n[T];
						}
					}
					var E = Math.min(this.n, this.m + 1);
					if (s < this.n && (this.s[s] = e[s][s]), this.m < E && (this.s[E - 1] = 0), c + 1 < E && (n[c] = e[c][E - 1]), n[E - 1] = 0, a) {
						for (var D = s; D < t; D++) {
							for (var O = 0; O < this.m; O++) this.U[O][D] = 0;
							this.U[D][D] = 1;
						}
						for (var k = s - 1; k >= 0; k--) if (this.s[k] !== 0) {
							for (var A = k + 1; A < t; A++) {
								for (var j = 0, M = k; M < this.m; M++) j += this.U[M][k] * this.U[M][A];
								j = -j / this.U[k][k];
								for (var N = k; N < this.m; N++) this.U[N][A] += j * this.U[N][k];
							}
							for (var P = k; P < this.m; P++) this.U[P][k] = -this.U[P][k];
							this.U[k][k] = 1 + this.U[k][k];
							for (var ee = 0; ee < k - 1; ee++) this.U[ee][k] = 0;
						} else {
							for (var te = 0; te < this.m; te++) this.U[te][k] = 0;
							this.U[k][k] = 1;
						}
					}
					if (o) for (var F = this.n - 1; F >= 0; F--) {
						if (function(e, t) {
							return e && t;
						}(F < c, n[F] !== 0)) for (var I = F + 1; I < t; I++) {
							for (var L = 0, R = F + 1; R < this.n; R++) L += this.V[R][F] * this.V[R][I];
							L = -L / this.V[F + 1][F];
							for (var z = F + 1; z < this.n; z++) this.V[z][I] += L * this.V[z][F];
						}
						for (var B = 0; B < this.n; B++) this.V[B][F] = 0;
						this.V[F][F] = 1;
					}
					for (var ne = E - 1, V = 0, re = 2 ** -52, ie = 2 ** -966; E > 0;) {
						var H = void 0, U = void 0;
						for (H = E - 2; H >= -1 && H !== -1; H--) if (Math.abs(n[H]) <= ie + re * (Math.abs(this.s[H]) + Math.abs(this.s[H + 1]))) {
							n[H] = 0;
							break;
						}
						if (H === E - 2) U = 4;
						else {
							var W = void 0;
							for (W = E - 1; W >= H && W !== H; W--) {
								var ae = (W === E ? 0 : Math.abs(n[W])) + (W === H + 1 ? 0 : Math.abs(n[W - 1]));
								if (Math.abs(this.s[W]) <= ie + re * ae) {
									this.s[W] = 0;
									break;
								}
							}
							W === H ? U = 3 : W === E - 1 ? U = 1 : (U = 2, H = W);
						}
						switch (H++, U) {
							case 1:
								var G = n[E - 2];
								n[E - 2] = 0;
								for (var K = E - 2; K >= H; K--) {
									var oe = r.hypot(this.s[K], G), q = this.s[K] / oe, se = G / oe;
									if (this.s[K] = oe, K !== H && (G = -se * n[K - 1], n[K - 1] = q * n[K - 1]), o) for (var J = 0; J < this.n; J++) oe = q * this.V[J][K] + se * this.V[J][E - 1], this.V[J][E - 1] = -se * this.V[J][K] + q * this.V[J][E - 1], this.V[J][K] = oe;
								}
								break;
							case 2:
								var ce = n[H - 1];
								n[H - 1] = 0;
								for (var Y = H; Y < E; Y++) {
									var le = r.hypot(this.s[Y], ce), ue = this.s[Y] / le, de = ce / le;
									if (this.s[Y] = le, ce = -de * n[Y], n[Y] = ue * n[Y], a) for (var fe = 0; fe < this.m; fe++) le = ue * this.U[fe][Y] + de * this.U[fe][H - 1], this.U[fe][H - 1] = -de * this.U[fe][Y] + ue * this.U[fe][H - 1], this.U[fe][Y] = le;
								}
								break;
							case 3:
								var pe = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[E - 1]), Math.abs(this.s[E - 2])), Math.abs(n[E - 2])), Math.abs(this.s[H])), Math.abs(n[H])), me = this.s[E - 1] / pe, he = this.s[E - 2] / pe, ge = n[E - 2] / pe, _e = this.s[H] / pe, ve = n[H] / pe, ye = ((he + me) * (he - me) + ge * ge) / 2, be = me * ge * (me * ge), xe = 0;
								(function(e, t) {
									return e || t;
								})(ye !== 0, be !== 0) && (xe = Math.sqrt(ye * ye + be), ye < 0 && (xe = -xe), xe = be / (ye + xe));
								for (var Se = (_e + me) * (_e - me) + xe, Ce = _e * ve, X = H; X < E - 1; X++) {
									var Z = r.hypot(Se, Ce), Q = Se / Z, $ = Ce / Z;
									if (X !== H && (n[X - 1] = Z), Se = Q * this.s[X] + $ * n[X], n[X] = Q * n[X] - $ * this.s[X], Ce = $ * this.s[X + 1], this.s[X + 1] = Q * this.s[X + 1], o) for (var we = 0; we < this.n; we++) Z = Q * this.V[we][X] + $ * this.V[we][X + 1], this.V[we][X + 1] = -$ * this.V[we][X] + Q * this.V[we][X + 1], this.V[we][X] = Z;
									if (Z = r.hypot(Se, Ce), Q = Se / Z, $ = Ce / Z, this.s[X] = Z, Se = Q * n[X] + $ * this.s[X + 1], this.s[X + 1] = -$ * n[X] + Q * this.s[X + 1], Ce = $ * n[X + 1], n[X + 1] = Q * n[X + 1], a && X < this.m - 1) for (var Te = 0; Te < this.m; Te++) Z = Q * this.U[Te][X] + $ * this.U[Te][X + 1], this.U[Te][X + 1] = -$ * this.U[Te][X] + Q * this.U[Te][X + 1], this.U[Te][X] = Z;
								}
								n[E - 2] = Se, V += 1;
								break;
							case 4:
								if (this.s[H] <= 0 && (this.s[H] = this.s[H] < 0 ? -this.s[H] : 0, o)) for (var Ee = 0; Ee <= ne; Ee++) this.V[Ee][H] = -this.V[Ee][H];
								for (; H < ne && !(this.s[H] >= this.s[H + 1]);) {
									var De = this.s[H];
									if (this.s[H] = this.s[H + 1], this.s[H + 1] = De, o && H < this.n - 1) for (var Oe = 0; Oe < this.n; Oe++) De = this.V[Oe][H + 1], this.V[Oe][H + 1] = this.V[Oe][H], this.V[Oe][H] = De;
									if (a && H < this.m - 1) for (var ke = 0; ke < this.m; ke++) De = this.U[ke][H + 1], this.U[ke][H + 1] = this.U[ke][H], this.U[ke][H] = De;
									H++;
								}
								V = 0, E--;
								break;
						}
					}
					return {
						U: this.U,
						V: this.V,
						S: this.s
					};
				}, r.hypot = function(e, t) {
					var n = void 0;
					return Math.abs(e) > Math.abs(t) ? (n = t / e, n = Math.abs(e) * Math.sqrt(1 + n * n)) : t == 0 ? n = 0 : (n = e / t, n = Math.abs(t) * Math.sqrt(1 + n * n)), n;
				}, e.exports = r;
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
				r.FDLayout = n(18), r.FDLayoutConstants = n(4), r.FDLayoutEdge = n(19), r.FDLayoutNode = n(20), r.DimensionD = n(21), r.HashMap = n(22), r.HashSet = n(23), r.IGeometry = n(8), r.IMath = n(9), r.Integer = n(10), r.Point = n(12), r.PointD = n(5), r.RandomSeed = n(16), r.RectangleD = n(13), r.Transform = n(17), r.UniqueIDGeneretor = n(14), r.Quicksort = n(25), r.LinkedList = n(11), r.LGraphObject = n(2), r.LGraph = n(6), r.LEdge = n(1), r.LGraphManager = n(7), r.LNode = n(3), r.Layout = n(15), r.LayoutConstants = n(0), r.NeedlemanWunsch = n(27), r.Matrix = n(24), r.SVD = n(26), e.exports = r;
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
		return (() => {
			var t = {
				45: ((e, t, n) => {
					var r = {};
					r.layoutBase = n(551), r.CoSEConstants = n(806), r.CoSEEdge = n(767), r.CoSEGraph = n(880), r.CoSEGraphManager = n(578), r.CoSELayout = n(765), r.CoSENode = n(991), r.ConstraintHandler = n(902), e.exports = r;
				}),
				806: ((e, t, n) => {
					var r = n(551).FDLayoutConstants;
					function i() {}
					for (var a in r) i[a] = r[a];
					i.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, i.DEFAULT_RADIAL_SEPARATION = r.DEFAULT_EDGE_LENGTH, i.DEFAULT_COMPONENT_SEPERATION = 60, i.TILE = !0, i.TILING_PADDING_VERTICAL = 10, i.TILING_PADDING_HORIZONTAL = 10, i.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, i.ENFORCE_CONSTRAINTS = !0, i.APPLY_LAYOUT = !0, i.RELAX_MOVEMENT_ON_CONSTRAINTS = !0, i.TREE_REDUCTION_ON_INCREMENTAL = !0, i.PURE_INCREMENTAL = i.DEFAULT_INCREMENTAL, e.exports = i;
				}),
				767: ((e, t, n) => {
					var r = n(551).FDLayoutEdge;
					function i(e, t, n) {
						r.call(this, e, t, n);
					}
					for (var a in i.prototype = Object.create(r.prototype), r) i[a] = r[a];
					e.exports = i;
				}),
				880: ((e, t, n) => {
					var r = n(551).LGraph;
					function i(e, t, n) {
						r.call(this, e, t, n);
					}
					for (var a in i.prototype = Object.create(r.prototype), r) i[a] = r[a];
					e.exports = i;
				}),
				578: ((e, t, n) => {
					var r = n(551).LGraphManager;
					function i(e) {
						r.call(this, e);
					}
					for (var a in i.prototype = Object.create(r.prototype), r) i[a] = r[a];
					e.exports = i;
				}),
				765: ((e, t, n) => {
					var r = n(551).FDLayout, i = n(578), a = n(880), o = n(991), s = n(767), c = n(806), l = n(902), u = n(551).FDLayoutConstants, d = n(551).LayoutConstants, f = n(551).Point, p = n(551).PointD, m = n(551).DimensionD, h = n(551).Layout, g = n(551).Integer, _ = n(551).IGeometry, v = n(551).LGraph, y = n(551).Transform, b = n(551).LinkedList;
					function x() {
						r.call(this), this.toBeTiled = {}, this.constraints = {};
					}
					for (var S in x.prototype = Object.create(r.prototype), r) x[S] = r[S];
					x.prototype.newGraphManager = function() {
						var e = new i(this);
						return this.graphManager = e, e;
					}, x.prototype.newGraph = function(e) {
						return new a(null, this.graphManager, e);
					}, x.prototype.newNode = function(e) {
						return new o(this.graphManager, e);
					}, x.prototype.newEdge = function(e) {
						return new s(null, null, e);
					}, x.prototype.initParameters = function() {
						r.prototype.initParameters.call(this, arguments), this.isSubLayout || (c.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = c.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = c.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = u.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = u.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = u.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1);
					}, x.prototype.initSpringEmbedder = function() {
						r.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / u.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = .04, this.coolingAdjuster = 1;
					}, x.prototype.layout = function() {
						return d.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
					}, x.prototype.classicLayout = function() {
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
						return Object.keys(this.constraints).length > 0 && (l.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), c.APPLY_LAYOUT && this.runSpringEmbedder(), !0;
					}, x.prototype.tick = function() {
						if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = !0;
						else return !0;
						if (this.totalIterations % u.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
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
								this.graphManager.setAllNodesToApplyGravitation(t), this.graphManager.updateBounds(), this.updateGrid(), c.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL;
							} else this.isTreeGrowing = !1, this.isGrowthFinished = !0;
							this.growTreeIterations++;
						}
						if (this.isGrowthFinished) {
							if (this.isConverged()) return !0;
							this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), c.PURE_INCREMENTAL ? this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = u.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
						}
						var n = !this.isTreeGrowing && !this.isGrowthFinished, r = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
						return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(n, r), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
					}, x.prototype.getPositionsData = function() {
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
					}, x.prototype.runSpringEmbedder = function() {
						this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
						var e = !1;
						if (u.ANIMATE === "during") this.emit("layoutstarted");
						else {
							for (; !e;) e = this.tick();
							this.graphManager.updateBounds();
						}
					}, x.prototype.moveNodes = function() {
						for (var e = this.getAllNodes(), t, n = 0; n < e.length; n++) t = e[n], t.calculateDisplacement();
						Object.keys(this.constraints).length > 0 && this.updateDisplacements();
						for (var n = 0; n < e.length; n++) t = e[n], t.move();
					}, x.prototype.initConstraintVariables = function() {
						var e = this;
						this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
						for (var t = this.graphManager.getAllNodes(), n = 0; n < t.length; n++) {
							var r = t[n];
							this.idToNodeMap.set(r.id, r);
						}
						var i = function t(n) {
							for (var r = n.getChild().getNodes(), i, a = 0, o = 0; o < r.length; o++) i = r[o], i.getChild() == null ? e.fixedNodeSet.has(i.id) && (a += 100) : a += t(i);
							return a;
						};
						if (this.constraints.fixedNodeConstraint) {
							this.constraints.fixedNodeConstraint.forEach(function(t) {
								e.fixedNodeSet.add(t.nodeId);
							});
							for (var t = this.graphManager.getAllNodes(), r, n = 0; n < t.length; n++) if (r = t[n], r.getChild() != null) {
								var a = i(r);
								a > 0 && (r.fixedNodeWeight = a);
							}
						}
						if (this.constraints.relativePlacementConstraint) {
							var o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
							if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(t) {
								e.fixedNodesOnHorizontal.add(t), e.fixedNodesOnVertical.add(t);
							}), this.constraints.alignmentConstraint) {
								if (this.constraints.alignmentConstraint.vertical) for (var l = this.constraints.alignmentConstraint.vertical, n = 0; n < l.length; n++) this.dummyToNodeForVerticalAlignment.set("dummy" + n, []), l[n].forEach(function(t) {
									o.set(t, "dummy" + n), e.dummyToNodeForVerticalAlignment.get("dummy" + n).push(t), e.fixedNodeSet.has(t) && e.fixedNodesOnHorizontal.add("dummy" + n);
								});
								if (this.constraints.alignmentConstraint.horizontal) for (var u = this.constraints.alignmentConstraint.horizontal, n = 0; n < u.length; n++) this.dummyToNodeForHorizontalAlignment.set("dummy" + n, []), u[n].forEach(function(t) {
									s.set(t, "dummy" + n), e.dummyToNodeForHorizontalAlignment.get("dummy" + n).push(t), e.fixedNodeSet.has(t) && e.fixedNodesOnVertical.add("dummy" + n);
								});
							}
							if (c.RELAX_MOVEMENT_ON_CONSTRAINTS) this.shuffle = function(e) {
								var t, n, r;
								for (r = e.length - 1; r >= 2 * e.length / 3; r--) t = Math.floor(Math.random() * (r + 1)), n = e[r], e[r] = e[t], e[t] = n;
								return e;
							}, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(t) {
								if (t.left) {
									var n = o.has(t.left) ? o.get(t.left) : t.left, r = o.has(t.right) ? o.get(t.right) : t.right;
									e.nodesInRelativeHorizontal.includes(n) || (e.nodesInRelativeHorizontal.push(n), e.nodeToRelativeConstraintMapHorizontal.set(n, []), e.dummyToNodeForVerticalAlignment.has(n) ? e.nodeToTempPositionMapHorizontal.set(n, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(n)[0]).getCenterX()) : e.nodeToTempPositionMapHorizontal.set(n, e.idToNodeMap.get(n).getCenterX())), e.nodesInRelativeHorizontal.includes(r) || (e.nodesInRelativeHorizontal.push(r), e.nodeToRelativeConstraintMapHorizontal.set(r, []), e.dummyToNodeForVerticalAlignment.has(r) ? e.nodeToTempPositionMapHorizontal.set(r, e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(r)[0]).getCenterX()) : e.nodeToTempPositionMapHorizontal.set(r, e.idToNodeMap.get(r).getCenterX())), e.nodeToRelativeConstraintMapHorizontal.get(n).push({
										right: r,
										gap: t.gap
									}), e.nodeToRelativeConstraintMapHorizontal.get(r).push({
										left: n,
										gap: t.gap
									});
								} else {
									var i = s.has(t.top) ? s.get(t.top) : t.top, a = s.has(t.bottom) ? s.get(t.bottom) : t.bottom;
									e.nodesInRelativeVertical.includes(i) || (e.nodesInRelativeVertical.push(i), e.nodeToRelativeConstraintMapVertical.set(i, []), e.dummyToNodeForHorizontalAlignment.has(i) ? e.nodeToTempPositionMapVertical.set(i, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(i)[0]).getCenterY()) : e.nodeToTempPositionMapVertical.set(i, e.idToNodeMap.get(i).getCenterY())), e.nodesInRelativeVertical.includes(a) || (e.nodesInRelativeVertical.push(a), e.nodeToRelativeConstraintMapVertical.set(a, []), e.dummyToNodeForHorizontalAlignment.has(a) ? e.nodeToTempPositionMapVertical.set(a, e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(a)[0]).getCenterY()) : e.nodeToTempPositionMapVertical.set(a, e.idToNodeMap.get(a).getCenterY())), e.nodeToRelativeConstraintMapVertical.get(i).push({
										bottom: a,
										gap: t.gap
									}), e.nodeToRelativeConstraintMapVertical.get(a).push({
										top: i,
										gap: t.gap
									});
								}
							});
							else {
								var d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
								this.constraints.relativePlacementConstraint.forEach(function(e) {
									if (e.left) {
										var t = o.has(e.left) ? o.get(e.left) : e.left, n = o.has(e.right) ? o.get(e.right) : e.right;
										d.has(t) ? d.get(t).push(n) : d.set(t, [n]), d.has(n) ? d.get(n).push(t) : d.set(n, [t]);
									} else {
										var r = s.has(e.top) ? s.get(e.top) : e.top, i = s.has(e.bottom) ? s.get(e.bottom) : e.bottom;
										f.has(r) ? f.get(r).push(i) : f.set(r, [i]), f.has(i) ? f.get(i).push(r) : f.set(i, [r]);
									}
								});
								var p = function(e, t) {
									var n = [], r = [], i = new b(), a = /* @__PURE__ */ new Set(), o = 0;
									return e.forEach(function(s, c) {
										if (!a.has(c)) {
											n[o] = [], r[o] = !1;
											var l = c;
											for (i.push(l), a.add(l), n[o].push(l); i.length != 0;) l = i.shift(), t.has(l) && (r[o] = !0), e.get(l).forEach(function(e) {
												a.has(e) || (i.push(e), a.add(e), n[o].push(e));
											});
											o++;
										}
									}), {
										components: n,
										isFixed: r
									};
								}, m = p(d, e.fixedNodesOnHorizontal);
								this.componentsOnHorizontal = m.components, this.fixedComponentsOnHorizontal = m.isFixed;
								var h = p(f, e.fixedNodesOnVertical);
								this.componentsOnVertical = h.components, this.fixedComponentsOnVertical = h.isFixed;
							}
						}
					}, x.prototype.updateDisplacements = function() {
						var e = this;
						if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(t) {
							var n = e.idToNodeMap.get(t.nodeId);
							n.displacementX = 0, n.displacementY = 0;
						}), this.constraints.alignmentConstraint) {
							if (this.constraints.alignmentConstraint.vertical) for (var t = this.constraints.alignmentConstraint.vertical, n = 0; n < t.length; n++) {
								for (var r = 0, i = 0; i < t[n].length; i++) {
									if (this.fixedNodeSet.has(t[n][i])) {
										r = 0;
										break;
									}
									r += this.idToNodeMap.get(t[n][i]).displacementX;
								}
								for (var a = r / t[n].length, i = 0; i < t[n].length; i++) this.idToNodeMap.get(t[n][i]).displacementX = a;
							}
							if (this.constraints.alignmentConstraint.horizontal) for (var o = this.constraints.alignmentConstraint.horizontal, n = 0; n < o.length; n++) {
								for (var s = 0, i = 0; i < o[n].length; i++) {
									if (this.fixedNodeSet.has(o[n][i])) {
										s = 0;
										break;
									}
									s += this.idToNodeMap.get(o[n][i]).displacementY;
								}
								for (var l = s / o[n].length, i = 0; i < o[n].length; i++) this.idToNodeMap.get(o[n][i]).displacementY = l;
							}
						}
						if (this.constraints.relativePlacementConstraint) if (c.RELAX_MOVEMENT_ON_CONSTRAINTS) this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(t) {
							if (!e.fixedNodesOnHorizontal.has(t)) {
								var n = 0;
								n = e.dummyToNodeForVerticalAlignment.has(t) ? e.idToNodeMap.get(e.dummyToNodeForVerticalAlignment.get(t)[0]).displacementX : e.idToNodeMap.get(t).displacementX, e.nodeToRelativeConstraintMapHorizontal.get(t).forEach(function(r) {
									if (r.right) {
										var i = e.nodeToTempPositionMapHorizontal.get(r.right) - e.nodeToTempPositionMapHorizontal.get(t) - n;
										i < r.gap && (n -= r.gap - i);
									} else {
										var i = e.nodeToTempPositionMapHorizontal.get(t) - e.nodeToTempPositionMapHorizontal.get(r.left) + n;
										i < r.gap && (n += r.gap - i);
									}
								}), e.nodeToTempPositionMapHorizontal.set(t, e.nodeToTempPositionMapHorizontal.get(t) + n), e.dummyToNodeForVerticalAlignment.has(t) ? e.dummyToNodeForVerticalAlignment.get(t).forEach(function(t) {
									e.idToNodeMap.get(t).displacementX = n;
								}) : e.idToNodeMap.get(t).displacementX = n;
							}
						}), this.nodesInRelativeVertical.forEach(function(t) {
							if (!e.fixedNodesOnHorizontal.has(t)) {
								var n = 0;
								n = e.dummyToNodeForHorizontalAlignment.has(t) ? e.idToNodeMap.get(e.dummyToNodeForHorizontalAlignment.get(t)[0]).displacementY : e.idToNodeMap.get(t).displacementY, e.nodeToRelativeConstraintMapVertical.get(t).forEach(function(r) {
									if (r.bottom) {
										var i = e.nodeToTempPositionMapVertical.get(r.bottom) - e.nodeToTempPositionMapVertical.get(t) - n;
										i < r.gap && (n -= r.gap - i);
									} else {
										var i = e.nodeToTempPositionMapVertical.get(t) - e.nodeToTempPositionMapVertical.get(r.top) + n;
										i < r.gap && (n += r.gap - i);
									}
								}), e.nodeToTempPositionMapVertical.set(t, e.nodeToTempPositionMapVertical.get(t) + n), e.dummyToNodeForHorizontalAlignment.has(t) ? e.dummyToNodeForHorizontalAlignment.get(t).forEach(function(t) {
									e.idToNodeMap.get(t).displacementY = n;
								}) : e.idToNodeMap.get(t).displacementY = n;
							}
						});
						else {
							for (var n = 0; n < this.componentsOnHorizontal.length; n++) {
								var u = this.componentsOnHorizontal[n];
								if (this.fixedComponentsOnHorizontal[n]) for (var i = 0; i < u.length; i++) this.dummyToNodeForVerticalAlignment.has(u[i]) ? this.dummyToNodeForVerticalAlignment.get(u[i]).forEach(function(t) {
									e.idToNodeMap.get(t).displacementX = 0;
								}) : this.idToNodeMap.get(u[i]).displacementX = 0;
								else {
									for (var d = 0, f = 0, i = 0; i < u.length; i++) if (this.dummyToNodeForVerticalAlignment.has(u[i])) {
										var p = this.dummyToNodeForVerticalAlignment.get(u[i]);
										d += p.length * this.idToNodeMap.get(p[0]).displacementX, f += p.length;
									} else d += this.idToNodeMap.get(u[i]).displacementX, f++;
									for (var m = d / f, i = 0; i < u.length; i++) this.dummyToNodeForVerticalAlignment.has(u[i]) ? this.dummyToNodeForVerticalAlignment.get(u[i]).forEach(function(t) {
										e.idToNodeMap.get(t).displacementX = m;
									}) : this.idToNodeMap.get(u[i]).displacementX = m;
								}
							}
							for (var n = 0; n < this.componentsOnVertical.length; n++) {
								var u = this.componentsOnVertical[n];
								if (this.fixedComponentsOnVertical[n]) for (var i = 0; i < u.length; i++) this.dummyToNodeForHorizontalAlignment.has(u[i]) ? this.dummyToNodeForHorizontalAlignment.get(u[i]).forEach(function(t) {
									e.idToNodeMap.get(t).displacementY = 0;
								}) : this.idToNodeMap.get(u[i]).displacementY = 0;
								else {
									for (var d = 0, f = 0, i = 0; i < u.length; i++) if (this.dummyToNodeForHorizontalAlignment.has(u[i])) {
										var p = this.dummyToNodeForHorizontalAlignment.get(u[i]);
										d += p.length * this.idToNodeMap.get(p[0]).displacementY, f += p.length;
									} else d += this.idToNodeMap.get(u[i]).displacementY, f++;
									for (var m = d / f, i = 0; i < u.length; i++) this.dummyToNodeForHorizontalAlignment.has(u[i]) ? this.dummyToNodeForHorizontalAlignment.get(u[i]).forEach(function(t) {
										e.idToNodeMap.get(t).displacementY = m;
									}) : this.idToNodeMap.get(u[i]).displacementY = m;
								}
							}
						}
					}, x.prototype.calculateNodesToApplyGravitationTo = function() {
						var e = [], t, n = this.graphManager.getGraphs(), r = n.length, i;
						for (i = 0; i < r; i++) t = n[i], t.updateConnected(), t.isConnected || (e = e.concat(t.getNodes()));
						return e;
					}, x.prototype.createBendpoints = function() {
						var e = [];
						e = e.concat(this.graphManager.getAllEdges());
						var t = /* @__PURE__ */ new Set(), n;
						for (n = 0; n < e.length; n++) {
							var r = e[n];
							if (!t.has(r)) {
								var i = r.getSource(), a = r.getTarget();
								if (i == a) r.getBendpoints().push(new p()), r.getBendpoints().push(new p()), this.createDummyNodesForBendpoints(r), t.add(r);
								else {
									var o = [];
									if (o = o.concat(i.getEdgeListToNode(a)), o = o.concat(a.getEdgeListToNode(i)), !t.has(o[0])) {
										if (o.length > 1) {
											var s;
											for (s = 0; s < o.length; s++) {
												var c = o[s];
												c.getBendpoints().push(new p()), this.createDummyNodesForBendpoints(c);
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
					}, x.prototype.positionNodesRadially = function(e) {
						for (var t = new f(0, 0), n = Math.ceil(Math.sqrt(e.length)), r = 0, i = 0, a = 0, o = new p(0, 0), s = 0; s < e.length; s++) {
							s % n == 0 && (a = 0, i = r, s != 0 && (i += c.DEFAULT_COMPONENT_SEPERATION), r = 0);
							var l = e[s], u = h.findCenterOfTree(l);
							t.x = a, t.y = i, o = x.radialLayout(l, u, t), o.y > r && (r = Math.floor(o.y)), a = Math.floor(o.x + c.DEFAULT_COMPONENT_SEPERATION);
						}
						this.transform(new p(d.WORLD_CENTER_X - o.x / 2, d.WORLD_CENTER_Y - o.y / 2));
					}, x.radialLayout = function(e, t, n) {
						var r = Math.max(this.maxDiagonalInTree(e), c.DEFAULT_RADIAL_SEPARATION);
						x.branchRadialLayout(t, null, 0, 359, 0, r);
						var i = v.calculateBounds(e), a = new y();
						a.setDeviceOrgX(i.getMinX()), a.setDeviceOrgY(i.getMinY()), a.setWorldOrgX(n.x), a.setWorldOrgY(n.y);
						for (var o = 0; o < e.length; o++) e[o].transform(a);
						var s = new p(i.getMaxX(), i.getMaxY());
						return a.inverseTransformPoint(s);
					}, x.branchRadialLayout = function(e, t, n, r, i, a) {
						var o = (r - n + 1) / 2;
						o < 0 && (o += 180);
						var s = (o + n) % 360 * _.TWO_PI / 360, c = i * Math.cos(s), l = i * Math.sin(s);
						e.setCenter(c, l);
						var u = [];
						u = u.concat(e.getEdges());
						var d = u.length;
						t != null && d--;
						for (var f = 0, p = u.length, m, h = e.getEdgesBetween(t); h.length > 1;) {
							var g = h[0];
							h.splice(0, 1);
							var v = u.indexOf(g);
							v >= 0 && u.splice(v, 1), p--, d--;
						}
						m = t == null ? 0 : (u.indexOf(h[0]) + 1) % p;
						for (var y = Math.abs(r - n) / d, b = m; f != d; b = ++b % p) {
							var S = u[b].getOtherEnd(e);
							if (S != t) {
								var C = (n + f * y) % 360, w = (C + y) % 360;
								x.branchRadialLayout(S, e, C, w, i + a, a), f++;
							}
						}
					}, x.maxDiagonalInTree = function(e) {
						for (var t = g.MIN_VALUE, n = 0; n < e.length; n++) {
							var r = e[n].getDiagonal();
							r > t && (t = r);
						}
						return t;
					}, x.prototype.calcRepulsionRange = function() {
						return 2 * (this.level + 1) * this.idealEdgeLength;
					}, x.prototype.groupZeroDegreeMembers = function() {
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
					}, x.prototype.clearCompounds = function() {
						var e = {}, t = {};
						this.performDFSOnCompounds();
						for (var n = 0; n < this.compoundOrder.length; n++) t[this.compoundOrder[n].id] = this.compoundOrder[n], e[this.compoundOrder[n].id] = [].concat(this.compoundOrder[n].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[n].getChild()), this.compoundOrder[n].child = null;
						this.graphManager.resetAllNodes(), this.tileCompoundMembers(e, t);
					}, x.prototype.clearZeroDegreeMembers = function() {
						var e = this, t = this.tiledZeroDegreePack = [];
						Object.keys(this.memberGroups).forEach(function(n) {
							var r = e.idToDummyNode[n];
							if (t[n] = e.tileNodes(e.memberGroups[n], r.paddingLeft + r.paddingRight), r.rect.width = t[n].width, r.rect.height = t[n].height, r.setCenter(t[n].centerX, t[n].centerY), r.labelMarginLeft = 0, r.labelMarginTop = 0, c.NODE_DIMENSIONS_INCLUDE_LABELS) {
								var i = r.rect.width, a = r.rect.height;
								r.labelWidth && (r.labelPosHorizontal == "left" ? (r.rect.x -= r.labelWidth, r.setWidth(i + r.labelWidth), r.labelMarginLeft = r.labelWidth) : r.labelPosHorizontal == "center" && r.labelWidth > i ? (r.rect.x -= (r.labelWidth - i) / 2, r.setWidth(r.labelWidth), r.labelMarginLeft = (r.labelWidth - i) / 2) : r.labelPosHorizontal == "right" && r.setWidth(i + r.labelWidth)), r.labelHeight && (r.labelPosVertical == "top" ? (r.rect.y -= r.labelHeight, r.setHeight(a + r.labelHeight), r.labelMarginTop = r.labelHeight) : r.labelPosVertical == "center" && r.labelHeight > a ? (r.rect.y -= (r.labelHeight - a) / 2, r.setHeight(r.labelHeight), r.labelMarginTop = (r.labelHeight - a) / 2) : r.labelPosVertical == "bottom" && r.setHeight(a + r.labelHeight));
							}
						});
					}, x.prototype.repopulateCompounds = function() {
						for (var e = this.compoundOrder.length - 1; e >= 0; e--) {
							var t = this.compoundOrder[e], n = t.id, r = t.paddingLeft, i = t.paddingTop, a = t.labelMarginLeft, o = t.labelMarginTop;
							this.adjustLocations(this.tiledMemberPack[n], t.rect.x, t.rect.y, r, i, a, o);
						}
					}, x.prototype.repopulateZeroDegreeMembers = function() {
						var e = this, t = this.tiledZeroDegreePack;
						Object.keys(t).forEach(function(n) {
							var r = e.idToDummyNode[n], i = r.paddingLeft, a = r.paddingTop, o = r.labelMarginLeft, s = r.labelMarginTop;
							e.adjustLocations(t[n], r.rect.x, r.rect.y, i, a, o, s);
						});
					}, x.prototype.getToBeTiled = function(e) {
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
					}, x.prototype.getNodeDegree = function(e) {
						e.id;
						for (var t = e.getEdges(), n = 0, r = 0; r < t.length; r++) {
							var i = t[r];
							i.getSource().id !== i.getTarget().id && (n += 1);
						}
						return n;
					}, x.prototype.getNodeDegreeWithChildren = function(e) {
						var t = this.getNodeDegree(e);
						if (e.getChild() == null) return t;
						for (var n = e.getChild().getNodes(), r = 0; r < n.length; r++) {
							var i = n[r];
							t += this.getNodeDegreeWithChildren(i);
						}
						return t;
					}, x.prototype.performDFSOnCompounds = function() {
						this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
					}, x.prototype.fillCompexOrderByDFS = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t];
							n.getChild() != null && this.fillCompexOrderByDFS(n.getChild().getNodes()), this.getToBeTiled(n) && this.compoundOrder.push(n);
						}
					}, x.prototype.adjustLocations = function(e, t, n, r, i, a, o) {
						t += r + a, n += i + o;
						for (var s = t, c = 0; c < e.rows.length; c++) {
							var l = e.rows[c];
							t = s;
							for (var u = 0, d = 0; d < l.length; d++) {
								var f = l[d];
								f.rect.x = t, f.rect.y = n, t += f.rect.width + e.horizontalPadding, f.rect.height > u && (u = f.rect.height);
							}
							n += u + e.verticalPadding;
						}
					}, x.prototype.tileCompoundMembers = function(e, t) {
						var n = this;
						this.tiledMemberPack = [], Object.keys(e).forEach(function(r) {
							var i = t[r];
							if (n.tiledMemberPack[r] = n.tileNodes(e[r], i.paddingLeft + i.paddingRight), i.rect.width = n.tiledMemberPack[r].width, i.rect.height = n.tiledMemberPack[r].height, i.setCenter(n.tiledMemberPack[r].centerX, n.tiledMemberPack[r].centerY), i.labelMarginLeft = 0, i.labelMarginTop = 0, c.NODE_DIMENSIONS_INCLUDE_LABELS) {
								var a = i.rect.width, o = i.rect.height;
								i.labelWidth && (i.labelPosHorizontal == "left" ? (i.rect.x -= i.labelWidth, i.setWidth(a + i.labelWidth), i.labelMarginLeft = i.labelWidth) : i.labelPosHorizontal == "center" && i.labelWidth > a ? (i.rect.x -= (i.labelWidth - a) / 2, i.setWidth(i.labelWidth), i.labelMarginLeft = (i.labelWidth - a) / 2) : i.labelPosHorizontal == "right" && i.setWidth(a + i.labelWidth)), i.labelHeight && (i.labelPosVertical == "top" ? (i.rect.y -= i.labelHeight, i.setHeight(o + i.labelHeight), i.labelMarginTop = i.labelHeight) : i.labelPosVertical == "center" && i.labelHeight > o ? (i.rect.y -= (i.labelHeight - o) / 2, i.setHeight(i.labelHeight), i.labelMarginTop = (i.labelHeight - o) / 2) : i.labelPosVertical == "bottom" && i.setHeight(o + i.labelHeight));
							}
						});
					}, x.prototype.tileNodes = function(e, t) {
						var n = this.tileNodesByFavoringDim(e, t, !0), r = this.tileNodesByFavoringDim(e, t, !1), i = this.getOrgRatio(n);
						return this.getOrgRatio(r) < i ? r : n;
					}, x.prototype.getOrgRatio = function(e) {
						var t = e.width / e.height;
						return t < 1 && (t = 1 / t), t;
					}, x.prototype.calcIdealRowWidth = function(e, t) {
						var n = c.TILING_PADDING_VERTICAL, r = c.TILING_PADDING_HORIZONTAL, i = e.length, a = 0, o = 0, s = 0;
						e.forEach(function(e) {
							a += e.getWidth(), o += e.getHeight(), e.getWidth() > s && (s = e.getWidth());
						});
						var l = a / i, u = o / i, d = (n - r) ** 2 + 4 * (l + r) * (u + n) * i, f = (r - n + Math.sqrt(d)) / (2 * (l + r)), p;
						t ? (p = Math.ceil(f), p == f && p++) : p = Math.floor(f);
						var m = p * (l + r) - r;
						return s > m && (m = s), m += r * 2, m;
					}, x.prototype.tileNodesByFavoringDim = function(e, t, n) {
						var r = c.TILING_PADDING_VERTICAL, i = c.TILING_PADDING_HORIZONTAL, a = c.TILING_COMPARE_BY, o = {
							rows: [],
							rowWidth: [],
							rowHeight: [],
							width: 0,
							height: t,
							verticalPadding: r,
							horizontalPadding: i,
							centerX: 0,
							centerY: 0
						};
						a && (o.idealRowWidth = this.calcIdealRowWidth(e, n));
						var s = function(e) {
							return e.rect.width * e.rect.height;
						}, l = function(e, t) {
							return s(t) - s(e);
						};
						e.sort(function(e, t) {
							var n = l;
							return o.idealRowWidth ? (n = a, n(e.id, t.id)) : n(e, t);
						});
						for (var u = 0, d = 0, f = 0; f < e.length; f++) {
							var p = e[f];
							u += p.getCenterX(), d += p.getCenterY();
						}
						o.centerX = u / e.length, o.centerY = d / e.length;
						for (var f = 0; f < e.length; f++) {
							var p = e[f];
							if (o.rows.length == 0) this.insertNodeToRow(o, p, 0, t);
							else if (this.canAddHorizontal(o, p.rect.width, p.rect.height)) {
								var m = o.rows.length - 1;
								o.idealRowWidth || (m = this.getShortestRowIndex(o)), this.insertNodeToRow(o, p, m, t);
							} else this.insertNodeToRow(o, p, o.rows.length, t);
							this.shiftToLastRow(o);
						}
						return o;
					}, x.prototype.insertNodeToRow = function(e, t, n, r) {
						var i = r;
						n == e.rows.length && (e.rows.push([]), e.rowWidth.push(i), e.rowHeight.push(0));
						var a = e.rowWidth[n] + t.rect.width;
						e.rows[n].length > 0 && (a += e.horizontalPadding), e.rowWidth[n] = a, e.width < a && (e.width = a);
						var o = t.rect.height;
						n > 0 && (o += e.verticalPadding);
						var s = 0;
						o > e.rowHeight[n] && (s = e.rowHeight[n], e.rowHeight[n] = o, s = e.rowHeight[n] - s), e.height += s, e.rows[n].push(t);
					}, x.prototype.getShortestRowIndex = function(e) {
						for (var t = -1, n = Number.MAX_VALUE, r = 0; r < e.rows.length; r++) e.rowWidth[r] < n && (t = r, n = e.rowWidth[r]);
						return t;
					}, x.prototype.getLongestRowIndex = function(e) {
						for (var t = -1, n = Number.MIN_VALUE, r = 0; r < e.rows.length; r++) e.rowWidth[r] > n && (t = r, n = e.rowWidth[r]);
						return t;
					}, x.prototype.canAddHorizontal = function(e, t, n) {
						if (e.idealRowWidth) {
							var r = e.rows.length - 1;
							return e.rowWidth[r] + t + e.horizontalPadding <= e.idealRowWidth;
						}
						var i = this.getShortestRowIndex(e);
						if (i < 0) return !0;
						var a = e.rowWidth[i];
						if (a + e.horizontalPadding + t <= e.width) return !0;
						var o = 0;
						e.rowHeight[i] < n && i > 0 && (o = n + e.verticalPadding - e.rowHeight[i]);
						var s = e.width - a >= t + e.horizontalPadding ? (e.height + o) / (a + t + e.horizontalPadding) : (e.height + o) / e.width;
						o = n + e.verticalPadding;
						var c = e.width < t ? (e.height + o) / t : (e.height + o) / e.width;
						return c < 1 && (c = 1 / c), s < 1 && (s = 1 / s), s < c;
					}, x.prototype.shiftToLastRow = function(e) {
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
					}, x.prototype.tilingPreLayout = function() {
						c.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
					}, x.prototype.tilingPostLayout = function() {
						c.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
					}, x.prototype.reduceTrees = function() {
						for (var e = [], t = !0, n; t;) {
							var r = this.graphManager.getAllNodes(), i = [];
							t = !1;
							for (var a = 0; a < r.length; a++) if (n = r[a], n.getEdges().length == 1 && !n.getEdges()[0].isInterGraph && n.getChild() == null) {
								if (c.PURE_INCREMENTAL) {
									var o = n.getEdges()[0].getOtherEnd(n), s = new m(n.getCenterX() - o.getCenterX(), n.getCenterY() - o.getCenterY());
									i.push([
										n,
										n.getEdges()[0],
										n.getOwner(),
										s
									]);
								} else i.push([
									n,
									n.getEdges()[0],
									n.getOwner()
								]);
								t = !0;
							}
							if (t == 1) {
								for (var l = [], u = 0; u < i.length; u++) i[u][0].getEdges().length == 1 && (l.push(i[u]), i[u][0].getOwner().remove(i[u][0]));
								e.push(l), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
							}
						}
						this.prunedNodesAll = e;
					}, x.prototype.growTree = function(e) {
						for (var t = e[e.length - 1], n, r = 0; r < t.length; r++) n = t[r], this.findPlaceforPrunedNode(n), n[2].add(n[0]), n[2].add(n[1], n[1].source, n[1].target);
						e.splice(e.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
					}, x.prototype.findPlaceforPrunedNode = function(e) {
						var t, n, r = e[0];
						if (n = r == e[1].source ? e[1].target : e[1].source, c.PURE_INCREMENTAL) r.setCenter(n.getCenterX() + e[3].getWidth(), n.getCenterY() + e[3].getHeight());
						else {
							var i = n.startX, a = n.finishX, o = n.startY, s = n.finishY, l = [
								0,
								0,
								0,
								0
							];
							if (o > 0) for (var d = i; d <= a; d++) l[0] += this.grid[d][o - 1].length + this.grid[d][o].length - 1;
							if (a < this.grid.length - 1) for (var d = o; d <= s; d++) l[1] += this.grid[a + 1][d].length + this.grid[a][d].length - 1;
							if (s < this.grid[0].length - 1) for (var d = i; d <= a; d++) l[2] += this.grid[d][s + 1].length + this.grid[d][s].length - 1;
							if (i > 0) for (var d = o; d <= s; d++) l[3] += this.grid[i - 1][d].length + this.grid[i][d].length - 1;
							for (var f = g.MAX_VALUE, p, m, h = 0; h < l.length; h++) l[h] < f ? (f = l[h], p = 1, m = h) : l[h] == f && p++;
							if (p == 3 && f == 0) l[0] == 0 && l[1] == 0 && l[2] == 0 ? t = 1 : l[0] == 0 && l[1] == 0 && l[3] == 0 ? t = 0 : l[0] == 0 && l[2] == 0 && l[3] == 0 ? t = 3 : l[1] == 0 && l[2] == 0 && l[3] == 0 && (t = 2);
							else if (p == 2 && f == 0) {
								var _ = Math.floor(Math.random() * 2);
								t = l[0] == 0 && l[1] == 0 ? _ == 0 ? 0 : 1 : l[0] == 0 && l[2] == 0 ? _ == 0 ? 0 : 2 : l[0] == 0 && l[3] == 0 ? _ == 0 ? 0 : 3 : l[1] == 0 && l[2] == 0 ? _ == 0 ? 1 : 2 : l[1] == 0 && l[3] == 0 ? _ == 0 ? 1 : 3 : _ == 0 ? 2 : 3;
							} else if (p == 4 && f == 0) {
								var _ = Math.floor(Math.random() * 4);
								t = _;
							} else t = m;
							t == 0 ? r.setCenter(n.getCenterX(), n.getCenterY() - n.getHeight() / 2 - u.DEFAULT_EDGE_LENGTH - r.getHeight() / 2) : t == 1 ? r.setCenter(n.getCenterX() + n.getWidth() / 2 + u.DEFAULT_EDGE_LENGTH + r.getWidth() / 2, n.getCenterY()) : t == 2 ? r.setCenter(n.getCenterX(), n.getCenterY() + n.getHeight() / 2 + u.DEFAULT_EDGE_LENGTH + r.getHeight() / 2) : r.setCenter(n.getCenterX() - n.getWidth() / 2 - u.DEFAULT_EDGE_LENGTH - r.getWidth() / 2, n.getCenterY());
						}
					}, e.exports = x;
				}),
				991: ((e, t, n) => {
					var r = n(551).FDLayoutNode, i = n(551).IMath;
					function a(e, t, n, i) {
						r.call(this, e, t, n, i);
					}
					for (var o in a.prototype = Object.create(r.prototype), r) a[o] = r[o];
					a.prototype.calculateDisplacement = function() {
						var e = this.graphManager.getLayout();
						this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += e.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += e.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementX = e.coolingFactor * e.maxNodeDisplacement * i.sign(this.displacementX)), Math.abs(this.displacementY) > e.coolingFactor * e.maxNodeDisplacement && (this.displacementY = e.coolingFactor * e.maxNodeDisplacement * i.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
					}, a.prototype.propogateDisplacementToChildren = function(e, t) {
						for (var n = this.getChild().getNodes(), r, i = 0; i < n.length; i++) r = n[i], r.getChild() == null ? (r.displacementX += e, r.displacementY += t) : r.propogateDisplacementToChildren(e, t);
					}, a.prototype.move = function() {
						var e = this.graphManager.getLayout();
						(this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), e.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
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
				902: ((e, t, n) => {
					function r(e) {
						if (Array.isArray(e)) {
							for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
							return n;
						} else return Array.from(e);
					}
					var i = n(806), a = n(551).LinkedList, o = n(551).Matrix, s = n(551).SVD;
					function c() {}
					c.handleConstraints = function(e) {
						var t = {};
						t.fixedNodeConstraint = e.constraints.fixedNodeConstraint, t.alignmentConstraint = e.constraints.alignmentConstraint, t.relativePlacementConstraint = e.constraints.relativePlacementConstraint;
						for (var n = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = [], u = [], d = e.getAllNodes(), f = 0, p = 0; p < d.length; p++) {
							var m = d[p];
							m.getChild() ?? (c.set(m.id, f++), l.push(m.getCenterX()), u.push(m.getCenterY()), n.set(m.id, m));
						}
						t.relativePlacementConstraint && t.relativePlacementConstraint.forEach(function(e) {
							!e.gap && e.gap != 0 && (e.left ? e.gap = i.DEFAULT_EDGE_LENGTH + n.get(e.left).getWidth() / 2 + n.get(e.right).getWidth() / 2 : e.gap = i.DEFAULT_EDGE_LENGTH + n.get(e.top).getHeight() / 2 + n.get(e.bottom).getHeight() / 2);
						});
						var h = function(e, t) {
							return {
								x: e.x - t.x,
								y: e.y - t.y
							};
						}, g = function(e) {
							var t = 0, n = 0;
							return e.forEach(function(e) {
								t += l[c.get(e)], n += u[c.get(e)];
							}), {
								x: t / e.size,
								y: n / e.size
							};
						}, _ = function(e, t, n, i, o) {
							function s(e, t) {
								var n = new Set(e), r = !0, i = !1, a = void 0;
								try {
									for (var o = t[Symbol.iterator](), s; !(r = (s = o.next()).done); r = !0) {
										var c = s.value;
										n.add(c);
									}
								} catch (e) {
									i = !0, a = e;
								} finally {
									try {
										!r && o.return && o.return();
									} finally {
										if (i) throw a;
									}
								}
								return n;
							}
							var d = /* @__PURE__ */ new Map();
							e.forEach(function(e, t) {
								d.set(t, 0);
							}), e.forEach(function(e, t) {
								e.forEach(function(e) {
									d.set(e.id, d.get(e.id) + 1);
								});
							});
							var f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), m = new a();
							d.forEach(function(e, r) {
								e == 0 ? (m.push(r), n || (t == "horizontal" ? f.set(r, c.has(r) ? l[c.get(r)] : i.get(r)) : f.set(r, c.has(r) ? u[c.get(r)] : i.get(r)))) : f.set(r, -Infinity), n && p.set(r, new Set([r]));
							}), n && o.forEach(function(e) {
								var r = [];
								if (e.forEach(function(e) {
									n.has(e) && r.push(e);
								}), r.length > 0) {
									var a = 0;
									r.forEach(function(e) {
										t == "horizontal" ? (f.set(e, c.has(e) ? l[c.get(e)] : i.get(e)), a += f.get(e)) : (f.set(e, c.has(e) ? u[c.get(e)] : i.get(e)), a += f.get(e));
									}), a /= r.length, e.forEach(function(e) {
										n.has(e) || f.set(e, a);
									});
								} else {
									var o = 0;
									e.forEach(function(e) {
										t == "horizontal" ? o += c.has(e) ? l[c.get(e)] : i.get(e) : o += c.has(e) ? u[c.get(e)] : i.get(e);
									}), o /= e.length, e.forEach(function(e) {
										f.set(e, o);
									});
								}
							});
							for (var h = function() {
								var r = m.shift();
								e.get(r).forEach(function(e) {
									if (f.get(e.id) < f.get(r) + e.gap) if (n && n.has(e.id)) {
										var a = void 0;
										if (a = t == "horizontal" ? c.has(e.id) ? l[c.get(e.id)] : i.get(e.id) : c.has(e.id) ? u[c.get(e.id)] : i.get(e.id), f.set(e.id, a), a < f.get(r) + e.gap) {
											var o = f.get(r) + e.gap - a;
											p.get(r).forEach(function(e) {
												f.set(e, f.get(e) - o);
											});
										}
									} else f.set(e.id, f.get(r) + e.gap);
									d.set(e.id, d.get(e.id) - 1), d.get(e.id) == 0 && m.push(e.id), n && p.set(e.id, s(p.get(r), p.get(e.id)));
								});
							}; m.length != 0;) h();
							if (n) {
								var g = /* @__PURE__ */ new Set();
								e.forEach(function(e, t) {
									e.length == 0 && g.add(t);
								});
								var _ = [];
								p.forEach(function(e, t) {
									if (g.has(t)) {
										var i = !1, a = !0, o = !1, s = void 0;
										try {
											for (var c = e[Symbol.iterator](), l; !(a = (l = c.next()).done); a = !0) {
												var u = l.value;
												n.has(u) && (i = !0);
											}
										} catch (e) {
											o = !0, s = e;
										} finally {
											try {
												!a && c.return && c.return();
											} finally {
												if (o) throw s;
											}
										}
										if (!i) {
											var d = !1, f = void 0;
											_.forEach(function(t, n) {
												t.has([].concat(r(e))[0]) && (d = !0, f = n);
											}), d ? e.forEach(function(e) {
												_[f].add(e);
											}) : _.push(new Set(e));
										}
									}
								}), _.forEach(function(e, n) {
									var r = Infinity, a = Infinity, o = -Infinity, s = -Infinity, d = !0, p = !1, m = void 0;
									try {
										for (var h = e[Symbol.iterator](), g; !(d = (g = h.next()).done); d = !0) {
											var _ = g.value, v = void 0;
											v = t == "horizontal" ? c.has(_) ? l[c.get(_)] : i.get(_) : c.has(_) ? u[c.get(_)] : i.get(_);
											var y = f.get(_);
											v < r && (r = v), v > o && (o = v), y < a && (a = y), y > s && (s = y);
										}
									} catch (e) {
										p = !0, m = e;
									} finally {
										try {
											!d && h.return && h.return();
										} finally {
											if (p) throw m;
										}
									}
									var b = (r + o) / 2 - (a + s) / 2, x = !0, S = !1, C = void 0;
									try {
										for (var w = e[Symbol.iterator](), T; !(x = (T = w.next()).done); x = !0) {
											var E = T.value;
											f.set(E, f.get(E) + b);
										}
									} catch (e) {
										S = !0, C = e;
									} finally {
										try {
											!x && w.return && w.return();
										} finally {
											if (S) throw C;
										}
									}
								});
							}
							return f;
						}, v = function(e) {
							var t = 0, n = 0, r = 0, i = 0;
							if (e.forEach(function(e) {
								e.left ? l[c.get(e.left)] - l[c.get(e.right)] >= 0 ? t++ : n++ : u[c.get(e.top)] - u[c.get(e.bottom)] >= 0 ? r++ : i++;
							}), t > n && r > i) for (var a = 0; a < c.size; a++) l[a] = -1 * l[a], u[a] = -1 * u[a];
							else if (t > n) for (var o = 0; o < c.size; o++) l[o] = -1 * l[o];
							else if (r > i) for (var s = 0; s < c.size; s++) u[s] = -1 * u[s];
						}, y = function(e) {
							var t = [], n = new a(), r = /* @__PURE__ */ new Set(), i = 0;
							return e.forEach(function(a, o) {
								if (!r.has(o)) {
									t[i] = [];
									var s = o;
									for (n.push(s), r.add(s), t[i].push(s); n.length != 0;) s = n.shift(), e.get(s).forEach(function(e) {
										r.has(e.id) || (n.push(e.id), r.add(e.id), t[i].push(e.id));
									});
									i++;
								}
							}), t;
						}, b = function(e) {
							var t = /* @__PURE__ */ new Map();
							return e.forEach(function(e, n) {
								t.set(n, []);
							}), e.forEach(function(e, n) {
								e.forEach(function(e) {
									t.get(n).push(e), t.get(e.id).push({
										id: n,
										gap: e.gap,
										direction: e.direction
									});
								});
							}), t;
						}, x = function(e) {
							var t = /* @__PURE__ */ new Map();
							return e.forEach(function(e, n) {
								t.set(n, []);
							}), e.forEach(function(e, n) {
								e.forEach(function(e) {
									t.get(e.id).push({
										id: n,
										gap: e.gap,
										direction: e.direction
									});
								});
							}), t;
						}, S = [], C = [], w = !1, T = !1, E = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), k = [];
						if (t.fixedNodeConstraint && t.fixedNodeConstraint.forEach(function(e) {
							E.add(e.nodeId);
						}), t.relativePlacementConstraint && (t.relativePlacementConstraint.forEach(function(e) {
							e.left ? (D.has(e.left) ? D.get(e.left).push({
								id: e.right,
								gap: e.gap,
								direction: "horizontal"
							}) : D.set(e.left, [{
								id: e.right,
								gap: e.gap,
								direction: "horizontal"
							}]), D.has(e.right) || D.set(e.right, [])) : (D.has(e.top) ? D.get(e.top).push({
								id: e.bottom,
								gap: e.gap,
								direction: "vertical"
							}) : D.set(e.top, [{
								id: e.bottom,
								gap: e.gap,
								direction: "vertical"
							}]), D.has(e.bottom) || D.set(e.bottom, []));
						}), O = b(D), k = y(O)), i.TRANSFORM_ON_CONSTRAINT_HANDLING) {
							if (t.fixedNodeConstraint && t.fixedNodeConstraint.length > 1) t.fixedNodeConstraint.forEach(function(e, t) {
								S[t] = [e.position.x, e.position.y], C[t] = [l[c.get(e.nodeId)], u[c.get(e.nodeId)]];
							}), w = !0;
							else if (t.alignmentConstraint) (function() {
								var e = 0;
								if (t.alignmentConstraint.vertical) {
									for (var n = t.alignmentConstraint.vertical, i = function(t) {
										var i = /* @__PURE__ */ new Set();
										n[t].forEach(function(e) {
											i.add(e);
										});
										var a = new Set([].concat(r(i)).filter(function(e) {
											return E.has(e);
										})), o = void 0;
										o = a.size > 0 ? l[c.get(a.values().next().value)] : g(i).x, n[t].forEach(function(t) {
											S[e] = [o, u[c.get(t)]], C[e] = [l[c.get(t)], u[c.get(t)]], e++;
										});
									}, a = 0; a < n.length; a++) i(a);
									w = !0;
								}
								if (t.alignmentConstraint.horizontal) {
									for (var o = t.alignmentConstraint.horizontal, s = function(t) {
										var n = /* @__PURE__ */ new Set();
										o[t].forEach(function(e) {
											n.add(e);
										});
										var i = new Set([].concat(r(n)).filter(function(e) {
											return E.has(e);
										})), a = void 0;
										a = i.size > 0 ? l[c.get(i.values().next().value)] : g(n).y, o[t].forEach(function(t) {
											S[e] = [l[c.get(t)], a], C[e] = [l[c.get(t)], u[c.get(t)]], e++;
										});
									}, d = 0; d < o.length; d++) s(d);
									w = !0;
								}
								t.relativePlacementConstraint && (T = !0);
							})();
							else if (t.relativePlacementConstraint) {
								for (var A = 0, j = 0, M = 0; M < k.length; M++) k[M].length > A && (A = k[M].length, j = M);
								if (A < O.size / 2) v(t.relativePlacementConstraint), w = !1, T = !1;
								else {
									var N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), ee = [];
									k[j].forEach(function(e) {
										D.get(e).forEach(function(t) {
											t.direction == "horizontal" ? (N.has(e) ? N.get(e).push(t) : N.set(e, [t]), N.has(t.id) || N.set(t.id, []), ee.push({
												left: e,
												right: t.id
											})) : (P.has(e) ? P.get(e).push(t) : P.set(e, [t]), P.has(t.id) || P.set(t.id, []), ee.push({
												top: e,
												bottom: t.id
											}));
										});
									}), v(ee), T = !1;
									var te = _(N, "horizontal"), F = _(P, "vertical");
									k[j].forEach(function(e, t) {
										C[t] = [l[c.get(e)], u[c.get(e)]], S[t] = [], te.has(e) ? S[t][0] = te.get(e) : S[t][0] = l[c.get(e)], F.has(e) ? S[t][1] = F.get(e) : S[t][1] = u[c.get(e)];
									}), w = !0;
								}
							}
							if (w) {
								for (var I = void 0, L = o.transpose(S), R = o.transpose(C), z = 0; z < L.length; z++) L[z] = o.multGamma(L[z]), R[z] = o.multGamma(R[z]);
								var B = o.multMat(L, o.transpose(R)), ne = s.svd(B);
								I = o.multMat(ne.V, o.transpose(ne.U));
								for (var V = 0; V < c.size; V++) {
									var re = [l[V], u[V]], ie = [I[0][0], I[1][0]], H = [I[0][1], I[1][1]];
									l[V] = o.dotProduct(re, ie), u[V] = o.dotProduct(re, H);
								}
								T && v(t.relativePlacementConstraint);
							}
						}
						if (i.ENFORCE_CONSTRAINTS) {
							if (t.fixedNodeConstraint && t.fixedNodeConstraint.length > 0) {
								var U = {
									x: 0,
									y: 0
								};
								t.fixedNodeConstraint.forEach(function(e, t) {
									var n = {
										x: l[c.get(e.nodeId)],
										y: u[c.get(e.nodeId)]
									}, r = e.position, i = h(r, n);
									U.x += i.x, U.y += i.y;
								}), U.x /= t.fixedNodeConstraint.length, U.y /= t.fixedNodeConstraint.length, l.forEach(function(e, t) {
									l[t] += U.x;
								}), u.forEach(function(e, t) {
									u[t] += U.y;
								}), t.fixedNodeConstraint.forEach(function(e) {
									l[c.get(e.nodeId)] = e.position.x, u[c.get(e.nodeId)] = e.position.y;
								});
							}
							if (t.alignmentConstraint) {
								if (t.alignmentConstraint.vertical) for (var W = t.alignmentConstraint.vertical, ae = function(e) {
									var t = /* @__PURE__ */ new Set();
									W[e].forEach(function(e) {
										t.add(e);
									});
									var n = new Set([].concat(r(t)).filter(function(e) {
										return E.has(e);
									})), i = void 0;
									i = n.size > 0 ? l[c.get(n.values().next().value)] : g(t).x, t.forEach(function(e) {
										E.has(e) || (l[c.get(e)] = i);
									});
								}, G = 0; G < W.length; G++) ae(G);
								if (t.alignmentConstraint.horizontal) for (var K = t.alignmentConstraint.horizontal, oe = function(e) {
									var t = /* @__PURE__ */ new Set();
									K[e].forEach(function(e) {
										t.add(e);
									});
									var n = new Set([].concat(r(t)).filter(function(e) {
										return E.has(e);
									})), i = void 0;
									i = n.size > 0 ? u[c.get(n.values().next().value)] : g(t).y, t.forEach(function(e) {
										E.has(e) || (u[c.get(e)] = i);
									});
								}, q = 0; q < K.length; q++) oe(q);
							}
							t.relativePlacementConstraint && (function() {
								var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
								if (E.forEach(function(e) {
									s.add(e), d.add(e);
								}), t.alignmentConstraint) {
									if (t.alignmentConstraint.vertical) for (var f = t.alignmentConstraint.vertical, p = function(t) {
										r.set("dummy" + t, []), f[t].forEach(function(n) {
											e.set(n, "dummy" + t), r.get("dummy" + t).push(n), E.has(n) && s.add("dummy" + t);
										}), a.set("dummy" + t, l[c.get(f[t][0])]);
									}, m = 0; m < f.length; m++) p(m);
									if (t.alignmentConstraint.horizontal) for (var h = t.alignmentConstraint.horizontal, g = function(e) {
										i.set("dummy" + e, []), h[e].forEach(function(t) {
											n.set(t, "dummy" + e), i.get("dummy" + e).push(t), E.has(t) && d.add("dummy" + e);
										}), o.set("dummy" + e, u[c.get(h[e][0])]);
									}, v = 0; v < h.length; v++) g(v);
								}
								var S = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), w = function(t) {
									D.get(t).forEach(function(r) {
										var i = void 0, a = void 0;
										r.direction == "horizontal" ? (i = e.get(t) ? e.get(t) : t, a = e.get(r.id) ? {
											id: e.get(r.id),
											gap: r.gap,
											direction: r.direction
										} : r, S.has(i) ? S.get(i).push(a) : S.set(i, [a]), S.has(a.id) || S.set(a.id, [])) : (i = n.get(t) ? n.get(t) : t, a = n.get(r.id) ? {
											id: n.get(r.id),
											gap: r.gap,
											direction: r.direction
										} : r, C.has(i) ? C.get(i).push(a) : C.set(i, [a]), C.has(a.id) || C.set(a.id, []));
									});
								}, T = !0, O = !1, k = void 0;
								try {
									for (var A = D.keys()[Symbol.iterator](), j; !(T = (j = A.next()).done); T = !0) {
										var M = j.value;
										w(M);
									}
								} catch (e) {
									O = !0, k = e;
								} finally {
									try {
										!T && A.return && A.return();
									} finally {
										if (O) throw k;
									}
								}
								var N = b(S), P = b(C), ee = y(N), te = y(P), F = x(S), I = x(C), L = [], R = [];
								ee.forEach(function(e, t) {
									L[t] = [], e.forEach(function(e) {
										F.get(e).length == 0 && L[t].push(e);
									});
								}), te.forEach(function(e, t) {
									R[t] = [], e.forEach(function(e) {
										I.get(e).length == 0 && R[t].push(e);
									});
								});
								var z = _(S, "horizontal", s, a, L), B = _(C, "vertical", d, o, R), ne = function(e) {
									r.get(e) ? r.get(e).forEach(function(t) {
										l[c.get(t)] = z.get(e);
									}) : l[c.get(e)] = z.get(e);
								}, V = !0, re = !1, ie = void 0;
								try {
									for (var H = z.keys()[Symbol.iterator](), U; !(V = (U = H.next()).done); V = !0) {
										var W = U.value;
										ne(W);
									}
								} catch (e) {
									re = !0, ie = e;
								} finally {
									try {
										!V && H.return && H.return();
									} finally {
										if (re) throw ie;
									}
								}
								var ae = function(e) {
									i.get(e) ? i.get(e).forEach(function(t) {
										u[c.get(t)] = B.get(e);
									}) : u[c.get(e)] = B.get(e);
								}, G = !0, K = !1, oe = void 0;
								try {
									for (var q = B.keys()[Symbol.iterator](), se; !(G = (se = q.next()).done); G = !0) {
										var W = se.value;
										ae(W);
									}
								} catch (e) {
									K = !0, oe = e;
								} finally {
									try {
										!G && q.return && q.return();
									} finally {
										if (K) throw oe;
									}
								}
							})();
						}
						for (var se = 0; se < d.length; se++) {
							var J = d[se];
							J.getChild() ?? J.setCenter(l[c.get(J.id)], u[c.get(J.id)]);
						}
					}, e.exports = c;
				}),
				551: ((t) => {
					t.exports = e;
				})
			}, n = {};
			function r(e) {
				var i = n[e];
				if (i !== void 0) return i.exports;
				var a = n[e] = { exports: {} };
				return t[e](a, a.exports, r), a.exports;
			}
			return r(45);
		})();
	});
})), import_cytoscape_fcose = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r(require_cose_base()) : typeof define == "function" && define.amd ? define(["cose-base"], r) : typeof e == "object" ? e.cytoscapeFcose = r(require_cose_base()) : n.cytoscapeFcose = r(n.coseBase);
	})(e, function(e) {
		return (() => {
			var t = {
				658: ((e) => {
					e.exports = Object.assign == null ? function(e) {
						return [...arguments].slice(1).forEach(function(t) {
							Object.keys(t).forEach(function(n) {
								return e[n] = t[n];
							});
						}), e;
					} : Object.assign.bind(Object);
				}),
				548: ((e, t, n) => {
					var r = function() {
						function e(e, t) {
							var n = [], r = !0, i = !1, a = void 0;
							try {
								for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
							} catch (e) {
								i = !0, a = e;
							} finally {
								try {
									!r && o.return && o.return();
								} finally {
									if (i) throw a;
								}
							}
							return n;
						}
						return function(t, n) {
							if (Array.isArray(t)) return t;
							if (Symbol.iterator in Object(t)) return e(t, n);
							throw TypeError("Invalid attempt to destructure non-iterable instance");
						};
					}(), i = n(140).layoutBase.LinkedList, a = {};
					a.getTopMostNodes = function(e) {
						for (var t = {}, n = 0; n < e.length; n++) t[e[n].id()] = !0;
						return e.filter(function(e, n) {
							typeof e == "number" && (e = n);
							for (var r = e.parent()[0]; r != null;) {
								if (t[r.id()]) return !1;
								r = r.parent()[0];
							}
							return !0;
						});
					}, a.connectComponents = function(e, t, n, r) {
						var a = new i(), o = /* @__PURE__ */ new Set(), s = [], c = void 0, l = void 0, u = void 0, d = !1, f = 1, p = [], m = [], h = function() {
							var r = e.collection();
							m.push(r);
							var i = n[0], h = e.collection();
							h.merge(i).merge(i.descendants().intersection(t)), s.push(i), h.forEach(function(e) {
								a.push(e), o.add(e), r.merge(e);
							});
							for (var g = function() {
								i = a.shift();
								var l = e.collection();
								i.neighborhood().nodes().forEach(function(e) {
									t.intersection(i.edgesWith(e)).length > 0 && l.merge(e);
								});
								for (var u = 0; u < l.length; u++) {
									var d = l[u];
									c = n.intersection(d.union(d.ancestors())), c != null && !o.has(c[0]) && c.union(c.descendants()).forEach(function(e) {
										a.push(e), o.add(e), r.merge(e), n.has(e) && s.push(e);
									});
								}
							}; a.length != 0;) g();
							if (r.forEach(function(e) {
								t.intersection(e.connectedEdges()).forEach(function(e) {
									r.has(e.source()) && r.has(e.target()) && r.merge(e);
								});
							}), s.length == n.length && (d = !0), !d || d && f > 1) {
								l = s[0], u = l.connectedEdges().length, s.forEach(function(e) {
									e.connectedEdges().length < u && (u = e.connectedEdges().length, l = e);
								}), p.push(l.id());
								var _ = e.collection();
								_.merge(s[0]), s.forEach(function(e) {
									_.merge(e);
								}), s = [], n = n.difference(_), f++;
							}
						};
						do
							h();
						while (!d);
						return r && p.length > 0 && r.set("dummy" + (r.size + 1), p), m;
					}, a.relocateComponent = function(e, t, n) {
						if (!n.fixedNodeConstraint) {
							var i = Infinity, a = -Infinity, o = Infinity, s = -Infinity;
							if (n.quality == "draft") {
								var c = !0, l = !1, u = void 0;
								try {
									for (var d = t.nodeIndexes[Symbol.iterator](), f; !(c = (f = d.next()).done); c = !0) {
										var p = f.value, m = r(p, 2), h = m[0], g = m[1], _ = n.cy.getElementById(h);
										if (_) {
											var v = _.boundingBox(), y = t.xCoords[g] - v.w / 2, b = t.xCoords[g] + v.w / 2, x = t.yCoords[g] - v.h / 2, S = t.yCoords[g] + v.h / 2;
											y < i && (i = y), b > a && (a = b), x < o && (o = x), S > s && (s = S);
										}
									}
								} catch (e) {
									l = !0, u = e;
								} finally {
									try {
										!c && d.return && d.return();
									} finally {
										if (l) throw u;
									}
								}
								var C = e.x - (a + i) / 2, w = e.y - (s + o) / 2;
								t.xCoords = t.xCoords.map(function(e) {
									return e + C;
								}), t.yCoords = t.yCoords.map(function(e) {
									return e + w;
								});
							} else {
								Object.keys(t).forEach(function(e) {
									var n = t[e], r = n.getRect().x, c = n.getRect().x + n.getRect().width, l = n.getRect().y, u = n.getRect().y + n.getRect().height;
									r < i && (i = r), c > a && (a = c), l < o && (o = l), u > s && (s = u);
								});
								var T = e.x - (a + i) / 2, E = e.y - (s + o) / 2;
								Object.keys(t).forEach(function(e) {
									var n = t[e];
									n.setCenter(n.getCenterX() + T, n.getCenterY() + E);
								});
							}
						}
					}, a.calcBoundingBox = function(e, t, n, r) {
						for (var i = 2 ** 53 - 1, a = -(2 ** 53 - 1), o = 2 ** 53 - 1, s = -(2 ** 53 - 1), c = void 0, l = void 0, u = void 0, d = void 0, f = e.descendants().not(":parent"), p = f.length, m = 0; m < p; m++) {
							var h = f[m];
							c = t[r.get(h.id())] - h.width() / 2, l = t[r.get(h.id())] + h.width() / 2, u = n[r.get(h.id())] - h.height() / 2, d = n[r.get(h.id())] + h.height() / 2, i > c && (i = c), a < l && (a = l), o > u && (o = u), s < d && (s = d);
						}
						var g = {};
						return g.topLeftX = i, g.topLeftY = o, g.width = a - i, g.height = s - o, g;
					}, a.calcParentsWithoutChildren = function(e, t) {
						var n = e.collection();
						return t.nodes(":parent").forEach(function(e) {
							var t = !1;
							e.children().forEach(function(e) {
								e.css("display") != "none" && (t = !0);
							}), t || n.merge(e);
						}), n;
					}, e.exports = a;
				}),
				816: ((e, t, n) => {
					var r = n(548), i = n(140).CoSELayout, a = n(140).CoSENode, o = n(140).layoutBase.PointD, s = n(140).layoutBase.DimensionD, c = n(140).layoutBase.LayoutConstants, l = n(140).layoutBase.FDLayoutConstants, u = n(140).CoSEConstants;
					e.exports = { coseLayout: function(e, t) {
						var n = e.cy, d = e.eles, f = d.nodes(), p = d.edges(), m = void 0, h = void 0, g = void 0, _ = {};
						e.randomize && (m = t.nodeIndexes, h = t.xCoords, g = t.yCoords);
						var v = function(e) {
							return typeof e == "function";
						}, y = function(e, t) {
							return v(e) ? e(t) : e;
						}, b = r.calcParentsWithoutChildren(n, d), x = function e(t, n, i, c) {
							for (var l = n.length, u = 0; u < l; u++) {
								var d = n[u], f = null;
								d.intersection(b).length == 0 && (f = d.children());
								var p = void 0, v = d.layoutDimensions({ nodeDimensionsIncludeLabels: c.nodeDimensionsIncludeLabels });
								if (d.outerWidth() != null && d.outerHeight() != null) if (c.randomize) if (!d.isParent()) p = t.add(new a(i.graphManager, new o(h[m.get(d.id())] - v.w / 2, g[m.get(d.id())] - v.h / 2), new s(parseFloat(v.w), parseFloat(v.h))));
								else {
									var x = r.calcBoundingBox(d, h, g, m);
									p = d.intersection(b).length == 0 ? t.add(new a(i.graphManager, new o(x.topLeftX, x.topLeftY), new s(x.width, x.height))) : t.add(new a(i.graphManager, new o(x.topLeftX, x.topLeftY), new s(parseFloat(v.w), parseFloat(v.h))));
								}
								else p = t.add(new a(i.graphManager, new o(d.position("x") - v.w / 2, d.position("y") - v.h / 2), new s(parseFloat(v.w), parseFloat(v.h))));
								else p = t.add(new a(this.graphManager));
								if (p.id = d.data("id"), p.nodeRepulsion = y(c.nodeRepulsion, d), p.paddingLeft = parseInt(d.css("padding")), p.paddingTop = parseInt(d.css("padding")), p.paddingRight = parseInt(d.css("padding")), p.paddingBottom = parseInt(d.css("padding")), c.nodeDimensionsIncludeLabels && (p.labelWidth = d.boundingBox({
									includeLabels: !0,
									includeNodes: !1,
									includeOverlays: !1
								}).w, p.labelHeight = d.boundingBox({
									includeLabels: !0,
									includeNodes: !1,
									includeOverlays: !1
								}).h, p.labelPosVertical = d.css("text-valign"), p.labelPosHorizontal = d.css("text-halign")), _[d.data("id")] = p, isNaN(p.rect.x) && (p.rect.x = 0), isNaN(p.rect.y) && (p.rect.y = 0), f != null && f.length > 0) {
									var S = void 0;
									S = i.getGraphManager().add(i.newGraph(), p), e(S, f, i, c);
								}
							}
						}, S = function(t, n, r) {
							for (var i = 0, a = 0, o = 0; o < r.length; o++) {
								var s = r[o], c = _[s.data("source")], d = _[s.data("target")];
								if (c && d && c !== d && c.getEdgesBetween(d).length == 0) {
									var f = n.add(t.newEdge(), c, d);
									f.id = s.id(), f.idealLength = y(e.idealEdgeLength, s), f.edgeElasticity = y(e.edgeElasticity, s), i += f.idealLength, a++;
								}
							}
							e.idealEdgeLength != null && (a > 0 ? u.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = i / a : v(e.idealEdgeLength) ? u.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = 50 : u.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = e.idealEdgeLength, u.MIN_REPULSION_DIST = l.MIN_REPULSION_DIST = l.DEFAULT_EDGE_LENGTH / 10, u.DEFAULT_RADIAL_SEPARATION = l.DEFAULT_EDGE_LENGTH);
						}, C = function(e, t) {
							t.fixedNodeConstraint && (e.constraints.fixedNodeConstraint = t.fixedNodeConstraint), t.alignmentConstraint && (e.constraints.alignmentConstraint = t.alignmentConstraint), t.relativePlacementConstraint && (e.constraints.relativePlacementConstraint = t.relativePlacementConstraint);
						};
						e.nestingFactor != null && (u.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e.nestingFactor), e.gravity != null && (u.DEFAULT_GRAVITY_STRENGTH = l.DEFAULT_GRAVITY_STRENGTH = e.gravity), e.numIter != null && (u.MAX_ITERATIONS = l.MAX_ITERATIONS = e.numIter), e.gravityRange != null && (u.DEFAULT_GRAVITY_RANGE_FACTOR = l.DEFAULT_GRAVITY_RANGE_FACTOR = e.gravityRange), e.gravityCompound != null && (u.DEFAULT_COMPOUND_GRAVITY_STRENGTH = l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e.gravityCompound), e.gravityRangeCompound != null && (u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e.gravityRangeCompound), e.initialEnergyOnIncremental != null && (u.DEFAULT_COOLING_FACTOR_INCREMENTAL = l.DEFAULT_COOLING_FACTOR_INCREMENTAL = e.initialEnergyOnIncremental), e.tilingCompareBy != null && (u.TILING_COMPARE_BY = e.tilingCompareBy), e.quality == "proof" ? c.QUALITY = 2 : c.QUALITY = 0, u.NODE_DIMENSIONS_INCLUDE_LABELS = l.NODE_DIMENSIONS_INCLUDE_LABELS = c.NODE_DIMENSIONS_INCLUDE_LABELS = e.nodeDimensionsIncludeLabels, u.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = !e.randomize, u.ANIMATE = l.ANIMATE = c.ANIMATE = e.animate, u.TILE = e.tile, u.TILING_PADDING_VERTICAL = typeof e.tilingPaddingVertical == "function" ? e.tilingPaddingVertical.call() : e.tilingPaddingVertical, u.TILING_PADDING_HORIZONTAL = typeof e.tilingPaddingHorizontal == "function" ? e.tilingPaddingHorizontal.call() : e.tilingPaddingHorizontal, u.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = !0, u.PURE_INCREMENTAL = !e.randomize, c.DEFAULT_UNIFORM_LEAF_NODE_SIZES = e.uniformNodeDimensions, e.step == "transformed" && (u.TRANSFORM_ON_CONSTRAINT_HANDLING = !0, u.ENFORCE_CONSTRAINTS = !1, u.APPLY_LAYOUT = !1), e.step == "enforced" && (u.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, u.ENFORCE_CONSTRAINTS = !0, u.APPLY_LAYOUT = !1), e.step == "cose" && (u.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, u.ENFORCE_CONSTRAINTS = !1, u.APPLY_LAYOUT = !0), e.step == "all" && (e.randomize ? u.TRANSFORM_ON_CONSTRAINT_HANDLING = !0 : u.TRANSFORM_ON_CONSTRAINT_HANDLING = !1, u.ENFORCE_CONSTRAINTS = !0, u.APPLY_LAYOUT = !0), e.fixedNodeConstraint || e.alignmentConstraint || e.relativePlacementConstraint ? u.TREE_REDUCTION_ON_INCREMENTAL = !1 : u.TREE_REDUCTION_ON_INCREMENTAL = !0;
						var w = new i(), T = w.newGraphManager();
						return x(T.addRoot(), r.getTopMostNodes(f), w, e), S(w, T, p), C(w, e), w.runLayout(), _;
					} };
				}),
				212: ((e, t, n) => {
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
					var a = n(658), o = n(548), s = n(657).spectralLayout, c = n(816).coseLayout, l = Object.freeze({
						quality: "default",
						randomize: !0,
						animate: !0,
						animationDuration: 1e3,
						animationEasing: void 0,
						fit: !0,
						padding: 30,
						nodeDimensionsIncludeLabels: !1,
						uniformNodeDimensions: !1,
						packComponents: !0,
						step: "all",
						samplingType: !0,
						sampleSize: 25,
						nodeSeparation: 75,
						piTol: 1e-7,
						nodeRepulsion: function(e) {
							return 4500;
						},
						idealEdgeLength: function(e) {
							return 50;
						},
						edgeElasticity: function(e) {
							return .45;
						},
						nestingFactor: .1,
						gravity: .25,
						numIter: 2500,
						tile: !0,
						tilingCompareBy: void 0,
						tilingPaddingVertical: 10,
						tilingPaddingHorizontal: 10,
						gravityRangeCompound: 1.5,
						gravityCompound: 1,
						gravityRange: 3.8,
						initialEnergyOnIncremental: .3,
						fixedNodeConstraint: void 0,
						alignmentConstraint: void 0,
						relativePlacementConstraint: void 0,
						ready: function() {},
						stop: function() {}
					});
					e.exports = function() {
						function e(t) {
							i(this, e), this.options = a({}, l, t);
						}
						return r(e, [{
							key: "run",
							value: function() {
								var e = this, t = this.options, n = t.cy, r = t.eles, i = [], a = [], l = void 0, u = [];
								t.fixedNodeConstraint && (!Array.isArray(t.fixedNodeConstraint) || t.fixedNodeConstraint.length == 0) && (t.fixedNodeConstraint = void 0), t.alignmentConstraint && (t.alignmentConstraint.vertical && (!Array.isArray(t.alignmentConstraint.vertical) || t.alignmentConstraint.vertical.length == 0) && (t.alignmentConstraint.vertical = void 0), t.alignmentConstraint.horizontal && (!Array.isArray(t.alignmentConstraint.horizontal) || t.alignmentConstraint.horizontal.length == 0) && (t.alignmentConstraint.horizontal = void 0)), t.relativePlacementConstraint && (!Array.isArray(t.relativePlacementConstraint) || t.relativePlacementConstraint.length == 0) && (t.relativePlacementConstraint = void 0), (t.fixedNodeConstraint || t.alignmentConstraint || t.relativePlacementConstraint) && (t.tile = !1, t.packComponents = !1);
								var d = void 0, f = !1;
								if (n.layoutUtilities && t.packComponents && (d = n.layoutUtilities("get"), d ||= n.layoutUtilities(), f = !0), r.nodes().length > 0) if (f) {
									var p = o.getTopMostNodes(t.eles.nodes());
									if (l = o.connectComponents(n, t.eles, p), l.forEach(function(e) {
										var t = e.boundingBox();
										u.push({
											x: t.x1 + t.w / 2,
											y: t.y1 + t.h / 2
										});
									}), t.randomize && l.forEach(function(e) {
										t.eles = e, i.push(s(t));
									}), t.quality == "default" || t.quality == "proof") {
										var m = n.collection();
										if (t.tile) {
											var h = /* @__PURE__ */ new Map(), g = [], _ = [], v = 0, y = {
												nodeIndexes: h,
												xCoords: g,
												yCoords: _
											}, b = [];
											if (l.forEach(function(e, t) {
												e.edges().length == 0 && (e.nodes().forEach(function(t, n) {
													m.merge(e.nodes()[n]), t.isParent() || (y.nodeIndexes.set(e.nodes()[n].id(), v++), y.xCoords.push(e.nodes()[0].position().x), y.yCoords.push(e.nodes()[0].position().y));
												}), b.push(t));
											}), m.length > 1) {
												var x = m.boundingBox();
												u.push({
													x: x.x1 + x.w / 2,
													y: x.y1 + x.h / 2
												}), l.push(m), i.push(y);
												for (var S = b.length - 1; S >= 0; S--) l.splice(b[S], 1), i.splice(b[S], 1), u.splice(b[S], 1);
											}
										}
										l.forEach(function(e, n) {
											t.eles = e, a.push(c(t, i[n])), o.relocateComponent(u[n], a[n], t);
										});
									} else l.forEach(function(e, n) {
										o.relocateComponent(u[n], i[n], t);
									});
									var C = /* @__PURE__ */ new Set();
									if (l.length > 1) {
										var w = [], T = r.filter(function(e) {
											return e.css("display") == "none";
										});
										l.forEach(function(e, n) {
											var r = void 0;
											if (t.quality == "draft" && (r = i[n].nodeIndexes), e.nodes().not(T).length > 0) {
												var s = {};
												s.edges = [], s.nodes = [];
												var c = void 0;
												e.nodes().not(T).forEach(function(e) {
													if (t.quality == "draft") if (!e.isParent()) c = r.get(e.id()), s.nodes.push({
														x: i[n].xCoords[c] - e.boundingbox().w / 2,
														y: i[n].yCoords[c] - e.boundingbox().h / 2,
														width: e.boundingbox().w,
														height: e.boundingbox().h
													});
													else {
														var l = o.calcBoundingBox(e, i[n].xCoords, i[n].yCoords, r);
														s.nodes.push({
															x: l.topLeftX,
															y: l.topLeftY,
															width: l.width,
															height: l.height
														});
													}
													else a[n][e.id()] && s.nodes.push({
														x: a[n][e.id()].getLeft(),
														y: a[n][e.id()].getTop(),
														width: a[n][e.id()].getWidth(),
														height: a[n][e.id()].getHeight()
													});
												}), e.edges().forEach(function(e) {
													var c = e.source(), l = e.target();
													if (c.css("display") != "none" && l.css("display") != "none") if (t.quality == "draft") {
														var u = r.get(c.id()), d = r.get(l.id()), f = [], p = [];
														if (c.isParent()) {
															var m = o.calcBoundingBox(c, i[n].xCoords, i[n].yCoords, r);
															f.push(m.topLeftX + m.width / 2), f.push(m.topLeftY + m.height / 2);
														} else f.push(i[n].xCoords[u]), f.push(i[n].yCoords[u]);
														if (l.isParent()) {
															var h = o.calcBoundingBox(l, i[n].xCoords, i[n].yCoords, r);
															p.push(h.topLeftX + h.width / 2), p.push(h.topLeftY + h.height / 2);
														} else p.push(i[n].xCoords[d]), p.push(i[n].yCoords[d]);
														s.edges.push({
															startX: f[0],
															startY: f[1],
															endX: p[0],
															endY: p[1]
														});
													} else a[n][c.id()] && a[n][l.id()] && s.edges.push({
														startX: a[n][c.id()].getCenterX(),
														startY: a[n][c.id()].getCenterY(),
														endX: a[n][l.id()].getCenterX(),
														endY: a[n][l.id()].getCenterY()
													});
												}), s.nodes.length > 0 && (w.push(s), C.add(n));
											}
										});
										var E = d.packComponents(w, t.randomize).shifts;
										if (t.quality == "draft") i.forEach(function(e, t) {
											var n = e.xCoords.map(function(e) {
												return e + E[t].dx;
											}), r = e.yCoords.map(function(e) {
												return e + E[t].dy;
											});
											e.xCoords = n, e.yCoords = r;
										});
										else {
											var D = 0;
											C.forEach(function(e) {
												Object.keys(a[e]).forEach(function(t) {
													var n = a[e][t];
													n.setCenter(n.getCenterX() + E[D].dx, n.getCenterY() + E[D].dy);
												}), D++;
											});
										}
									}
								} else {
									var O = t.eles.boundingBox();
									if (u.push({
										x: O.x1 + O.w / 2,
										y: O.y1 + O.h / 2
									}), t.randomize) {
										var k = s(t);
										i.push(k);
									}
									t.quality == "default" || t.quality == "proof" ? (a.push(c(t, i[0])), o.relocateComponent(u[0], a[0], t)) : o.relocateComponent(u[0], i[0], t);
								}
								var A = function(e, n) {
									if (t.quality == "default" || t.quality == "proof") {
										typeof e == "number" && (e = n);
										var r = void 0, o = void 0, s = e.data("id");
										return a.forEach(function(e) {
											s in e && (r = {
												x: e[s].getRect().getCenterX(),
												y: e[s].getRect().getCenterY()
											}, o = e[s]);
										}), t.nodeDimensionsIncludeLabels && (o.labelWidth && (o.labelPosHorizontal == "left" ? r.x += o.labelWidth / 2 : o.labelPosHorizontal == "right" && (r.x -= o.labelWidth / 2)), o.labelHeight && (o.labelPosVertical == "top" ? r.y += o.labelHeight / 2 : o.labelPosVertical == "bottom" && (r.y -= o.labelHeight / 2))), r ??= {
											x: e.position("x"),
											y: e.position("y")
										}, {
											x: r.x,
											y: r.y
										};
									} else {
										var c = void 0;
										return i.forEach(function(t) {
											var n = t.nodeIndexes.get(e.id());
											n != null && (c = {
												x: t.xCoords[n],
												y: t.yCoords[n]
											});
										}), c ??= {
											x: e.position("x"),
											y: e.position("y")
										}, {
											x: c.x,
											y: c.y
										};
									}
								};
								if (t.quality == "default" || t.quality == "proof" || t.randomize) {
									var j = o.calcParentsWithoutChildren(n, r), M = r.filter(function(e) {
										return e.css("display") == "none";
									});
									t.eles = r.not(M), r.nodes().not(":parent").not(M).layoutPositions(e, t, A), j.length > 0 && j.forEach(function(e) {
										e.position(A(e));
									});
								} else console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
							}
						}]), e;
					}();
				}),
				657: ((e, t, n) => {
					var r = n(548), i = n(140).layoutBase.Matrix, a = n(140).layoutBase.SVD;
					e.exports = { spectralLayout: function(e) {
						var t = e.cy, n = e.eles, o = n.nodes(), s = n.nodes(":parent"), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = [], f = [], p = [], m = [], h = [], g = [], _ = [], v = [], y = void 0, b = 1e8, x = 1e-9, S = e.piTol, C = e.samplingType, w = e.nodeSeparation, T = void 0, E = function() {
							for (var e = 0, t = 0, n = !1; t < T;) {
								e = Math.floor(Math.random() * y), n = !1;
								for (var r = 0; r < t; r++) if (m[r] == e) {
									n = !0;
									break;
								}
								if (!n) m[t] = e, t++;
								else continue;
							}
						}, D = function(e, t, n) {
							for (var r = [], i = 0, a = 0, o = 0, s = void 0, c = [], u = 0, f = 1, p = 0; p < y; p++) c[p] = b;
							for (r[a] = e, c[e] = 0; a >= i;) {
								o = r[i++];
								for (var m = d[o], _ = 0; _ < m.length; _++) s = l.get(m[_]), c[s] == b && (c[s] = c[o] + 1, r[++a] = s);
								g[o][t] = c[o] * w;
							}
							if (n) {
								for (var v = 0; v < y; v++) g[v][t] < h[v] && (h[v] = g[v][t]);
								for (var x = 0; x < y; x++) h[x] > u && (u = h[x], f = x);
							}
							return f;
						}, O = function(e) {
							var t = void 0;
							if (e) {
								t = Math.floor(Math.random() * y);
								for (var n = 0; n < y; n++) h[n] = b;
								for (var r = 0; r < T; r++) m[r] = t, t = D(t, r, e);
							} else {
								E();
								for (var i = 0; i < T; i++) D(m[i], i, e, !1);
							}
							for (var a = 0; a < y; a++) for (var o = 0; o < T; o++) g[a][o] *= g[a][o];
							for (var s = 0; s < T; s++) _[s] = [];
							for (var c = 0; c < T; c++) for (var l = 0; l < T; l++) _[c][l] = g[m[l]][c];
						}, k = function() {
							for (var e = a.svd(_), t = e.S, n = e.U, r = e.V, o = t[0] * t[0] * t[0], s = [], c = 0; c < T; c++) {
								s[c] = [];
								for (var l = 0; l < T; l++) s[c][l] = 0, c == l && (s[c][l] = t[c] / (t[c] * t[c] + o / (t[c] * t[c])));
							}
							v = i.multMat(i.multMat(r, s), i.transpose(n));
						}, A = function() {
							for (var e = void 0, t = void 0, n = [], r = [], a = [], o = [], s = 0; s < y; s++) n[s] = Math.random(), r[s] = Math.random();
							n = i.normalize(n), r = i.normalize(r);
							for (var c = 0, l = x, u = x, d = void 0;;) {
								c++;
								for (var m = 0; m < y; m++) a[m] = n[m];
								if (n = i.multGamma(i.multL(i.multGamma(a), g, v)), e = i.dotProduct(a, n), n = i.normalize(n), l = i.dotProduct(a, n), d = Math.abs(l / u), d <= 1 + S && d >= 1) break;
								u = l;
							}
							for (var h = 0; h < y; h++) a[h] = n[h];
							for (c = 0, u = x;;) {
								c++;
								for (var _ = 0; _ < y; _++) o[_] = r[_];
								if (o = i.minusOp(o, i.multCons(a, i.dotProduct(a, o))), r = i.multGamma(i.multL(i.multGamma(o), g, v)), t = i.dotProduct(o, r), r = i.normalize(r), l = i.dotProduct(o, r), d = Math.abs(l / u), d <= 1 + S && d >= 1) break;
								u = l;
							}
							for (var b = 0; b < y; b++) o[b] = r[b];
							f = i.multCons(a, Math.sqrt(Math.abs(e))), p = i.multCons(o, Math.sqrt(Math.abs(t)));
						};
						r.connectComponents(t, n, r.getTopMostNodes(o), c), s.forEach(function(e) {
							r.connectComponents(t, n, r.getTopMostNodes(e.descendants().intersection(n)), c);
						});
						for (var j = 0, M = 0; M < o.length; M++) o[M].isParent() || l.set(o[M].id(), j++);
						var N = !0, P = !1, ee = void 0;
						try {
							for (var te = c.keys()[Symbol.iterator](), F; !(N = (F = te.next()).done); N = !0) {
								var I = F.value;
								l.set(I, j++);
							}
						} catch (e) {
							P = !0, ee = e;
						} finally {
							try {
								!N && te.return && te.return();
							} finally {
								if (P) throw ee;
							}
						}
						for (var L = 0; L < l.size; L++) d[L] = [];
						s.forEach(function(e) {
							for (var t = e.children().intersection(n); t.nodes(":childless").length == 0;) t = t.nodes()[0].children().intersection(n);
							var r = 0, i = t.nodes(":childless")[0].connectedEdges().length;
							t.nodes(":childless").forEach(function(e, t) {
								e.connectedEdges().length < i && (i = e.connectedEdges().length, r = t);
							}), u.set(e.id(), t.nodes(":childless")[r].id());
						}), o.forEach(function(e) {
							var t = void 0;
							t = e.isParent() ? l.get(u.get(e.id())) : l.get(e.id()), e.neighborhood().nodes().forEach(function(r) {
								n.intersection(e.edgesWith(r)).length > 0 && (r.isParent() ? d[t].push(u.get(r.id())) : d[t].push(r.id()));
							});
						});
						var R = function(e) {
							var n = l.get(e), r = void 0;
							c.get(e).forEach(function(i) {
								r = t.getElementById(i).isParent() ? u.get(i) : i, d[n].push(r), d[l.get(r)].push(e);
							});
						}, z = !0, B = !1, ne = void 0;
						try {
							for (var V = c.keys()[Symbol.iterator](), re; !(z = (re = V.next()).done); z = !0) {
								var ie = re.value;
								R(ie);
							}
						} catch (e) {
							B = !0, ne = e;
						} finally {
							try {
								!z && V.return && V.return();
							} finally {
								if (B) throw ne;
							}
						}
						y = l.size;
						var H = void 0;
						if (y > 2) {
							T = y < e.sampleSize ? y : e.sampleSize;
							for (var U = 0; U < y; U++) g[U] = [];
							for (var W = 0; W < T; W++) v[W] = [];
							return e.quality == "draft" || e.step == "all" ? (O(C), k(), A(), H = {
								nodeIndexes: l,
								xCoords: f,
								yCoords: p
							}) : (l.forEach(function(e, n) {
								f.push(t.getElementById(n).position("x")), p.push(t.getElementById(n).position("y"));
							}), H = {
								nodeIndexes: l,
								xCoords: f,
								yCoords: p
							}), H;
						} else {
							var ae = l.keys(), G = t.getElementById(ae.next().value), K = G.position(), oe = G.outerWidth();
							if (f.push(K.x), p.push(K.y), y == 2) {
								var q = t.getElementById(ae.next().value).outerWidth();
								f.push(K.x + oe / 2 + q / 2 + e.idealEdgeLength), p.push(K.y);
							}
							return H = {
								nodeIndexes: l,
								xCoords: f,
								yCoords: p
							}, H;
						}
					} };
				}),
				579: ((e, t, n) => {
					var r = n(212), i = function(e) {
						e && e("layout", "fcose", r);
					};
					typeof cytoscape < "u" && i(cytoscape), e.exports = i;
				}),
				140: ((t) => {
					t.exports = e;
				})
			}, n = {};
			function r(e) {
				var i = n[e];
				if (i !== void 0) return i.exports;
				var a = n[e] = { exports: {} };
				return t[e](a, a.exports, r), a.exports;
			}
			return r(579);
		})();
	});
})))(), 1), ArchitectureDirectionName = {
	L: "left",
	R: "right",
	T: "top",
	B: "bottom"
}, ArchitectureDirectionArrow = {
	L: /* @__PURE__ */ __name((e) => `${e},${e / 2} 0,${e} 0,0`, "L"),
	R: /* @__PURE__ */ __name((e) => `0,${e / 2} ${e},0 ${e},${e}`, "R"),
	T: /* @__PURE__ */ __name((e) => `0,0 ${e},0 ${e / 2},${e}`, "T"),
	B: /* @__PURE__ */ __name((e) => `${e / 2},0 ${e},${e} 0,${e}`, "B")
}, ArchitectureDirectionArrowShift = {
	L: /* @__PURE__ */ __name((e, t) => e - t + 2, "L"),
	R: /* @__PURE__ */ __name((e, t) => e - 2, "R"),
	T: /* @__PURE__ */ __name((e, t) => e - t + 2, "T"),
	B: /* @__PURE__ */ __name((e, t) => e - 2, "B")
}, getOppositeArchitectureDirection = /* @__PURE__ */ __name(function(e) {
	return isArchitectureDirectionX(e) ? e === "L" ? "R" : "L" : e === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection"), isArchitectureDirection = /* @__PURE__ */ __name(function(e) {
	let t = e;
	return t === "L" || t === "R" || t === "T" || t === "B";
}, "isArchitectureDirection"), isArchitectureDirectionX = /* @__PURE__ */ __name(function(e) {
	let t = e;
	return t === "L" || t === "R";
}, "isArchitectureDirectionX"), isArchitectureDirectionY = /* @__PURE__ */ __name(function(e) {
	let t = e;
	return t === "T" || t === "B";
}, "isArchitectureDirectionY"), isArchitectureDirectionXY = /* @__PURE__ */ __name(function(e, t) {
	let n = isArchitectureDirectionX(e) && isArchitectureDirectionY(t), r = isArchitectureDirectionY(e) && isArchitectureDirectionX(t);
	return n || r;
}, "isArchitectureDirectionXY"), isArchitecturePairXY = /* @__PURE__ */ __name(function(e) {
	let t = e[0], n = e[1], r = isArchitectureDirectionX(t) && isArchitectureDirectionY(n), i = isArchitectureDirectionY(t) && isArchitectureDirectionX(n);
	return r || i;
}, "isArchitecturePairXY"), isValidArchitectureDirectionPair = /* @__PURE__ */ __name(function(e) {
	return e !== "LL" && e !== "RR" && e !== "TT" && e !== "BB";
}, "isValidArchitectureDirectionPair"), getArchitectureDirectionPair = /* @__PURE__ */ __name(function(e, t) {
	let n = `${e}${t}`;
	return isValidArchitectureDirectionPair(n) ? n : void 0;
}, "getArchitectureDirectionPair"), shiftPositionByArchitectureDirectionPair = /* @__PURE__ */ __name(function([e, t], n) {
	let r = n[0], i = n[1];
	return isArchitectureDirectionX(r) ? isArchitectureDirectionY(i) ? [e + (r === "L" ? -1 : 1), t + (i === "T" ? 1 : -1)] : [e + (r === "L" ? -1 : 1), t] : isArchitectureDirectionX(i) ? [e + (i === "L" ? 1 : -1), t + (r === "T" ? 1 : -1)] : [e, t + (r === "T" ? 1 : -1)];
}, "shiftPositionByArchitectureDirectionPair"), getArchitectureDirectionXYFactors = /* @__PURE__ */ __name(function(e) {
	return e === "LT" || e === "TL" ? [1, 1] : e === "BL" || e === "LB" ? [1, -1] : e === "BR" || e === "RB" ? [-1, -1] : [-1, 1];
}, "getArchitectureDirectionXYFactors"), getArchitectureDirectionAlignment = /* @__PURE__ */ __name(function(e, t) {
	return isArchitectureDirectionXY(e, t) ? "bend" : isArchitectureDirectionX(e) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment"), isArchitectureService = /* @__PURE__ */ __name(function(e) {
	return e.type === "service";
}, "isArchitectureService"), isArchitectureJunction = /* @__PURE__ */ __name(function(e) {
	return e.type === "junction";
}, "isArchitectureJunction"), edgeData = /* @__PURE__ */ __name((e) => e.data(), "edgeData"), nodeData = /* @__PURE__ */ __name((e) => e.data(), "nodeData"), DEFAULT_ARCHITECTURE_CONFIG = defaultConfig_default.architecture, ArchitectureDB = class {
	constructor() {
		this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.elements = {}, this.setAccTitle = setAccTitle, this.getAccTitle = getAccTitle, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.getAccDescription = getAccDescription, this.setAccDescription = setAccDescription, this.clear();
	}
	static #_ = __name(this, "ArchitectureDB");
	clear() {
		this.nodes = {}, this.groups = {}, this.edges = [], this.registeredIds = {}, this.dataStructures = void 0, this.elements = {}, clear();
	}
	addService({ id: e, icon: t, in: n, title: r, iconText: i }) {
		if (this.registeredIds[e] !== void 0) throw Error(`The service id [${e}] is already in use by another ${this.registeredIds[e]}`);
		if (n !== void 0) {
			if (e === n) throw Error(`The service [${e}] cannot be placed within itself`);
			if (this.registeredIds[n] === void 0) throw Error(`The service [${e}]'s parent does not exist. Please make sure the parent is created before this service`);
			if (this.registeredIds[n] === "node") throw Error(`The service [${e}]'s parent is not a group`);
		}
		this.registeredIds[e] = "node", this.nodes[e] = {
			id: e,
			type: "service",
			icon: t,
			iconText: i,
			title: r,
			edges: [],
			in: n
		};
	}
	getServices() {
		return Object.values(this.nodes).filter(isArchitectureService);
	}
	addJunction({ id: e, in: t }) {
		this.registeredIds[e] = "node", this.nodes[e] = {
			id: e,
			type: "junction",
			edges: [],
			in: t
		};
	}
	getJunctions() {
		return Object.values(this.nodes).filter(isArchitectureJunction);
	}
	getNodes() {
		return Object.values(this.nodes);
	}
	getNode(e) {
		return this.nodes[e] ?? null;
	}
	addGroup({ id: e, icon: t, in: n, title: r }) {
		if (this.registeredIds?.[e] !== void 0) throw Error(`The group id [${e}] is already in use by another ${this.registeredIds[e]}`);
		if (n !== void 0) {
			if (e === n) throw Error(`The group [${e}] cannot be placed within itself`);
			if (this.registeredIds?.[n] === void 0) throw Error(`The group [${e}]'s parent does not exist. Please make sure the parent is created before this group`);
			if (this.registeredIds?.[n] === "node") throw Error(`The group [${e}]'s parent is not a group`);
		}
		this.registeredIds[e] = "group", this.groups[e] = {
			id: e,
			icon: t,
			title: r,
			in: n
		};
	}
	getGroups() {
		return Object.values(this.groups);
	}
	addEdge({ lhsId: e, rhsId: t, lhsDir: n, rhsDir: r, lhsInto: i, rhsInto: a, lhsGroup: o, rhsGroup: s, title: c }) {
		if (!isArchitectureDirection(n)) throw Error(`Invalid direction given for left hand side of edge ${e}--${t}. Expected (L,R,T,B) got ${String(n)}`);
		if (!isArchitectureDirection(r)) throw Error(`Invalid direction given for right hand side of edge ${e}--${t}. Expected (L,R,T,B) got ${String(r)}`);
		if (this.nodes[e] === void 0 && this.groups[e] === void 0) throw Error(`The left-hand id [${e}] does not yet exist. Please create the service/group before declaring an edge to it.`);
		if (this.nodes[t] === void 0 && this.groups[t] === void 0) throw Error(`The right-hand id [${t}] does not yet exist. Please create the service/group before declaring an edge to it.`);
		let l = this.nodes[e].in, u = this.nodes[t].in;
		if (o && l && u && l == u) throw Error(`The left-hand id [${e}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
		if (s && l && u && l == u) throw Error(`The right-hand id [${t}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
		let d = {
			lhsId: e,
			lhsDir: n,
			lhsInto: i,
			lhsGroup: o,
			rhsId: t,
			rhsDir: r,
			rhsInto: a,
			rhsGroup: s,
			title: c
		};
		this.edges.push(d), this.nodes[e] && this.nodes[t] && (this.nodes[e].edges.push(this.edges[this.edges.length - 1]), this.nodes[t].edges.push(this.edges[this.edges.length - 1]));
	}
	getEdges() {
		return this.edges;
	}
	getDataStructures() {
		if (this.dataStructures === void 0) {
			let e = {}, t = Object.entries(this.nodes).reduce((t, [n, r]) => (t[n] = r.edges.reduce((t, r) => {
				let i = this.getNode(r.lhsId)?.in, a = this.getNode(r.rhsId)?.in;
				if (i && a && i !== a) {
					let t = getArchitectureDirectionAlignment(r.lhsDir, r.rhsDir);
					t !== "bend" && (e[i] ??= {}, e[i][a] = t, e[a] ??= {}, e[a][i] = t);
				}
				if (r.lhsId === n) {
					let e = getArchitectureDirectionPair(r.lhsDir, r.rhsDir);
					e && (t[e] = r.rhsId);
				} else {
					let e = getArchitectureDirectionPair(r.rhsDir, r.lhsDir);
					e && (t[e] = r.lhsId);
				}
				return t;
			}, {}), t), {}), n = Object.keys(t)[0], r = { [n]: 1 }, i = Object.keys(t).reduce((e, t) => t === n ? e : {
				...e,
				[t]: 1
			}, {}), o = /* @__PURE__ */ __name((e) => {
				let n = { [e]: [0, 0] }, a = [e];
				for (; a.length > 0;) {
					let e = a.shift();
					if (e) {
						r[e] = 1, delete i[e];
						let o = t[e], [s, c] = n[e];
						Object.entries(o).forEach(([e, t]) => {
							r[t] || (n[t] = shiftPositionByArchitectureDirectionPair([s, c], e), a.push(t));
						});
					}
				}
				return n;
			}, "BFS"), s = [o(n)];
			for (; Object.keys(i).length > 0;) s.push(o(Object.keys(i)[0]));
			this.dataStructures = {
				adjList: t,
				spatialMaps: s,
				groupAlignments: e
			};
		}
		return this.dataStructures;
	}
	setElementForId(e, t) {
		this.elements[e] = t;
	}
	getElementById(e) {
		return this.elements[e];
	}
	getConfig() {
		return cleanAndMerge({
			...DEFAULT_ARCHITECTURE_CONFIG,
			...getConfig().architecture
		});
	}
	getConfigField(e) {
		return this.getConfig()[e];
	}
}, populateDb = /* @__PURE__ */ __name((e, t) => {
	populateCommonDb(e, t), e.groups.map((e) => t.addGroup(e)), e.services.map((e) => t.addService({
		...e,
		type: "service"
	})), e.junctions.map((e) => t.addJunction({
		...e,
		type: "junction"
	})), e.edges.map((e) => t.addEdge(e));
}, "populateDb"), parser = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ __name(async (e) => {
		let t = await parse("architecture", e);
		log.debug(t);
		let n = parser.parser?.yy;
		if (!(n instanceof ArchitectureDB)) throw Error("parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		populateDb(t, n);
	}, "parse")
}, architectureStyles_default = /* @__PURE__ */ __name((e) => `
  .edge {
    stroke-width: ${e.archEdgeWidth};
    stroke: ${e.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${e.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${e.archGroupBorderColor};
    stroke-width: ${e.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles"), wrapIcon = /* @__PURE__ */ __name((e) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${e}</g>`, "wrapIcon"), architectureIcons = {
	prefix: "mermaid-architecture",
	height: 80,
	width: 80,
	icons: {
		database: { body: wrapIcon("<path id=\"b\" data-name=\"4\" d=\"m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"c\" data-name=\"3\" d=\"m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"d\" data-name=\"2\" d=\"m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse id=\"e\" data-name=\"1\" cx=\"40\" cy=\"22.14\" rx=\"20\" ry=\"7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"20\" y1=\"57.86\" x2=\"20\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"60\" y1=\"57.86\" x2=\"60\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		server: { body: wrapIcon("<rect x=\"17.5\" y=\"17.5\" width=\"45\" height=\"45\" rx=\"2\" ry=\"2\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"32.5\" x2=\"62.5\" y2=\"32.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"47.5\" x2=\"62.5\" y2=\"47.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><g><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g>") },
		disk: { body: wrapIcon("<rect x=\"20\" y=\"15\" width=\"40\" height=\"50\" rx=\"1\" ry=\"1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"14\" ry=\"14.58\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"4\" ry=\"4.17\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z\" style=\"fill: #fff; stroke-width: 0px;\"/>") },
		internet: { body: wrapIcon("<circle cx=\"40\" cy=\"40\" r=\"22.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"40\" y1=\"17.5\" x2=\"40\" y2=\"62.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"40\" x2=\"62.5\" y2=\"40\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"30.1\" x2=\"60.25\" y2=\"30.1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"49.9\" x2=\"60.25\" y2=\"49.9\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		cloud: { body: wrapIcon("<path d=\"m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>") },
		unknown: unknownIcon,
		blank: { body: wrapIcon("") }
	}
}, drawEdges = /* @__PURE__ */ __name(async function(e, t, r) {
	let i = r.getConfigField("padding"), a = r.getConfigField("iconSize"), o = a / 2, s = a / 6, c = s / 2;
	await Promise.all(t.edges().map(async (t) => {
		let { source: a, sourceDir: l, sourceArrow: u, sourceGroup: d, target: f, targetDir: p, targetArrow: h, targetGroup: g, label: _ } = edgeData(t), { x: v, y } = t[0].sourceEndpoint(), { x: b, y: S } = t[0].midpoint(), { x: C, y: w } = t[0].targetEndpoint(), T = i + 4;
		if (d && (isArchitectureDirectionX(l) ? v += l === "L" ? -T : T : y += l === "T" ? -T : T + 18), g && (isArchitectureDirectionX(p) ? C += p === "L" ? -T : T : w += p === "T" ? -T : T + 18), !d && r.getNode(a)?.type === "junction" && (isArchitectureDirectionX(l) ? v += l === "L" ? o : -o : y += l === "T" ? o : -o), !g && r.getNode(f)?.type === "junction" && (isArchitectureDirectionX(p) ? C += p === "L" ? o : -o : w += p === "T" ? o : -o), t[0]._private.rscratch) {
			let t = e.insert("g");
			if (t.insert("path").attr("d", `M ${v},${y} L ${b},${S} L${C},${w} `).attr("class", "edge").attr("id", getEdgeId(a, f, { prefix: "L" })), u) {
				let e = isArchitectureDirectionX(l) ? ArchitectureDirectionArrowShift[l](v, s) : v - c, n = isArchitectureDirectionY(l) ? ArchitectureDirectionArrowShift[l](y, s) : y - c;
				t.insert("polygon").attr("points", ArchitectureDirectionArrow[l](s)).attr("transform", `translate(${e},${n})`).attr("class", "arrow");
			}
			if (h) {
				let e = isArchitectureDirectionX(p) ? ArchitectureDirectionArrowShift[p](C, s) : C - c, n = isArchitectureDirectionY(p) ? ArchitectureDirectionArrowShift[p](w, s) : w - c;
				t.insert("polygon").attr("points", ArchitectureDirectionArrow[p](s)).attr("transform", `translate(${e},${n})`).attr("class", "arrow");
			}
			if (_) {
				let e = isArchitectureDirectionXY(l, p) ? "XY" : isArchitectureDirectionX(l) ? "X" : "Y", n = 0;
				n = e === "X" ? Math.abs(v - C) : e === "Y" ? Math.abs(y - w) / 1.5 : Math.abs(v - C) / 2;
				let r = t.append("g");
				if (await createText(r, _, {
					useHtmlLabels: !1,
					width: n,
					classes: "architecture-service-label"
				}, getConfig2()), r.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), e === "X") r.attr("transform", "translate(" + b + ", " + S + ")");
				else if (e === "Y") r.attr("transform", "translate(" + b + ", " + S + ") rotate(-90)");
				else if (e === "XY") {
					let e = getArchitectureDirectionPair(l, p);
					if (e && isArchitecturePairXY(e)) {
						let t = r.node().getBoundingClientRect(), [n, i] = getArchitectureDirectionXYFactors(e);
						r.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * n * i * 45})`);
						let a = r.node().getBoundingClientRect();
						r.attr("transform", `
                translate(${b}, ${S - t.height / 2})
                translate(${n * a.width / 2}, ${i * a.height / 2})
                rotate(${-1 * n * i * 45}, 0, ${t.height / 2})
              `);
					}
				}
			}
		}
	}));
}, "drawEdges"), drawGroups = /* @__PURE__ */ __name(async function(e, t, n) {
	let r = n.getConfigField("padding") * .75, i = n.getConfigField("fontSize"), a = n.getConfigField("iconSize") / 2;
	await Promise.all(t.nodes().map(async (t) => {
		let o = nodeData(t);
		if (o.type === "group") {
			let { h: s, w: c, x1: l, y1: u } = t.boundingBox(), d = e.append("rect");
			d.attr("id", `group-${o.id}`).attr("x", l + a).attr("y", u + a).attr("width", c).attr("height", s).attr("class", "node-bkg");
			let f = e.append("g"), p = l, h = u;
			if (o.icon) {
				let e = f.append("g");
				e.html(`<g>${await getIconSVG(o.icon, {
					height: r,
					width: r,
					fallbackPrefix: architectureIcons.prefix
				})}</g>`), e.attr("transform", "translate(" + (p + a + 1) + ", " + (h + a + 1) + ")"), p += r, h += i / 2 - 1 - 2;
			}
			if (o.label) {
				let e = f.append("g");
				await createText(e, o.label, {
					useHtmlLabels: !1,
					width: c,
					classes: "architecture-service-label"
				}, getConfig2()), e.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), e.attr("transform", "translate(" + (p + a + 4) + ", " + (h + a + 2) + ")");
			}
			n.setElementForId(o.id, d);
		}
	}));
}, "drawGroups"), drawServices = /* @__PURE__ */ __name(async function(e, t, n) {
	let r = getConfig2();
	for (let i of n) {
		let n = t.append("g"), a = e.getConfigField("iconSize");
		if (i.title) {
			let e = n.append("g");
			await createText(e, i.title, {
				useHtmlLabels: !1,
				width: a * 1.5,
				classes: "architecture-service-label"
			}, r), e.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), e.attr("transform", "translate(" + a / 2 + ", " + a + ")");
		}
		let o = n.append("g");
		if (i.icon) o.html(`<g>${await getIconSVG(i.icon, {
			height: a,
			width: a,
			fallbackPrefix: architectureIcons.prefix
		})}</g>`);
		else if (i.iconText) {
			o.html(`<g>${await getIconSVG("blank", {
				height: a,
				width: a,
				fallbackPrefix: architectureIcons.prefix
			})}</g>`);
			let e = o.append("g").append("foreignObject").attr("width", a).attr("height", a).append("div").attr("class", "node-icon-text").attr("style", `height: ${a}px;`).append("div").html(sanitizeText(i.iconText, r)), t = parseInt(window.getComputedStyle(e.node(), null).getPropertyValue("font-size").replace(/\D/g, "")) ?? 16;
			e.attr("style", `-webkit-line-clamp: ${Math.floor((a - 2) / t)};`);
		} else o.append("path").attr("class", "node-bkg").attr("id", "node-" + i.id).attr("d", `M0 ${a} v${-a} q0,-5 5,-5 h${a} q5,0 5,5 v${a} H0 Z`);
		n.attr("id", `service-${i.id}`).attr("class", "architecture-service");
		let { width: s, height: c } = n.node().getBBox();
		i.width = s, i.height = c, e.setElementForId(i.id, n);
	}
	return 0;
}, "drawServices"), drawJunctions = /* @__PURE__ */ __name(function(e, t, n) {
	n.forEach((n) => {
		let r = t.append("g"), i = e.getConfigField("iconSize");
		r.append("g").append("rect").attr("id", "node-" + n.id).attr("fill-opacity", "0").attr("width", i).attr("height", i), r.attr("class", "architecture-junction");
		let { width: a, height: o } = r._groups[0][0].getBBox();
		r.width = a, r.height = o, e.setElementForId(n.id, r);
	});
}, "drawJunctions");
registerIconPacks([{
	name: architectureIcons.prefix,
	icons: architectureIcons
}]), cytoscape$1.use(import_cytoscape_fcose.default);
function addServices(e, t, n) {
	e.forEach((e) => {
		t.add({
			group: "nodes",
			data: {
				type: "service",
				id: e.id,
				icon: e.icon,
				label: e.title,
				parent: e.in,
				width: n.getConfigField("iconSize"),
				height: n.getConfigField("iconSize")
			},
			classes: "node-service"
		});
	});
}
__name(addServices, "addServices");
function addJunctions(e, t, n) {
	e.forEach((e) => {
		t.add({
			group: "nodes",
			data: {
				type: "junction",
				id: e.id,
				parent: e.in,
				width: n.getConfigField("iconSize"),
				height: n.getConfigField("iconSize")
			},
			classes: "node-junction"
		});
	});
}
__name(addJunctions, "addJunctions");
function positionNodes(e, t) {
	t.nodes().map((t) => {
		let n = nodeData(t);
		n.type !== "group" && (n.x = t.position().x, n.y = t.position().y, e.getElementById(n.id).attr("transform", "translate(" + (n.x || 0) + "," + (n.y || 0) + ")"));
	});
}
__name(positionNodes, "positionNodes");
function addGroups(e, t) {
	e.forEach((e) => {
		t.add({
			group: "nodes",
			data: {
				type: "group",
				id: e.id,
				icon: e.icon,
				label: e.title,
				parent: e.in
			},
			classes: "node-group"
		});
	});
}
__name(addGroups, "addGroups");
function addEdges(e, t) {
	e.forEach((e) => {
		let { lhsId: n, rhsId: r, lhsInto: i, lhsGroup: a, rhsInto: o, lhsDir: s, rhsDir: c, rhsGroup: l, title: u } = e, d = isArchitectureDirectionXY(e.lhsDir, e.rhsDir) ? "segments" : "straight", f = {
			id: `${n}-${r}`,
			label: u,
			source: n,
			sourceDir: s,
			sourceArrow: i,
			sourceGroup: a,
			sourceEndpoint: s === "L" ? "0 50%" : s === "R" ? "100% 50%" : s === "T" ? "50% 0" : "50% 100%",
			target: r,
			targetDir: c,
			targetArrow: o,
			targetGroup: l,
			targetEndpoint: c === "L" ? "0 50%" : c === "R" ? "100% 50%" : c === "T" ? "50% 0" : "50% 100%"
		};
		t.add({
			group: "edges",
			data: f,
			classes: d
		});
	});
}
__name(addEdges, "addEdges");
function getAlignments(e, t, n) {
	let r = /* @__PURE__ */ __name((e, t) => Object.entries(e).reduce((e, [r, i]) => {
		let a = 0, o = Object.entries(i);
		if (o.length === 1) return e[r] = o[0][1], e;
		for (let i = 0; i < o.length - 1; i++) for (let s = i + 1; s < o.length; s++) {
			let [c, l] = o[i], [u, d] = o[s];
			if (n[c]?.[u] === t) e[r] ??= [], e[r] = [
				...e[r],
				...l,
				...d
			];
			else if (c === "default" || u === "default") e[r] ??= [], e[r] = [
				...e[r],
				...l,
				...d
			];
			else {
				let t = `${r}-${a++}`;
				e[t] = l;
				let n = `${r}-${a++}`;
				e[n] = d;
			}
		}
		return e;
	}, {}), "flattenAlignments"), [i, o] = t.map((t) => {
		let n = {}, i = {};
		return Object.entries(t).forEach(([t, [r, a]]) => {
			let o = e.getNode(t)?.in ?? "default";
			n[a] ??= {}, n[a][o] ??= [], n[a][o].push(t), i[r] ??= {}, i[r][o] ??= [], i[r][o].push(t);
		}), {
			horiz: Object.values(r(n, "horizontal")).filter((e) => e.length > 1),
			vert: Object.values(r(i, "vertical")).filter((e) => e.length > 1)
		};
	}).reduce(([e, t], { horiz: n, vert: r }) => [[...e, ...n], [...t, ...r]], [[], []]);
	return {
		horizontal: i,
		vertical: o
	};
}
__name(getAlignments, "getAlignments");
function getRelativeConstraints(e, t) {
	let n = [], r = /* @__PURE__ */ __name((e) => `${e[0]},${e[1]}`, "posToStr"), i = /* @__PURE__ */ __name((e) => e.split(",").map((e) => parseInt(e)), "strToPos");
	return e.forEach((e) => {
		let a = Object.fromEntries(Object.entries(e).map(([e, t]) => [r(t), e])), o = [r([0, 0])], s = {}, c = {
			L: [-1, 0],
			R: [1, 0],
			T: [0, 1],
			B: [0, -1]
		};
		for (; o.length > 0;) {
			let e = o.shift();
			if (e) {
				s[e] = 1;
				let l = a[e];
				if (l) {
					let u = i(e);
					Object.entries(c).forEach(([e, i]) => {
						let c = r([u[0] + i[0], u[1] + i[1]]), d = a[c];
						d && !s[c] && (o.push(c), n.push({
							[ArchitectureDirectionName[e]]: d,
							[ArchitectureDirectionName[getOppositeArchitectureDirection(e)]]: l,
							gap: 1.5 * t.getConfigField("iconSize")
						}));
					});
				}
			}
		}
	}), n;
}
__name(getRelativeConstraints, "getRelativeConstraints");
function layoutArchitecture(e, t, n, r, s, { spatialMaps: c, groupAlignments: l }) {
	return new Promise((u) => {
		let d = select_default("body").append("div").attr("id", "cy").attr("style", "display:none"), f = cytoscape$1({
			container: document.getElementById("cy"),
			style: [
				{
					selector: "edge",
					style: {
						"curve-style": "straight",
						label: "data(label)",
						"source-endpoint": "data(sourceEndpoint)",
						"target-endpoint": "data(targetEndpoint)"
					}
				},
				{
					selector: "edge.segments",
					style: {
						"curve-style": "segments",
						"segment-weights": "0",
						"segment-distances": [.5],
						"edge-distances": "endpoints",
						"source-endpoint": "data(sourceEndpoint)",
						"target-endpoint": "data(targetEndpoint)"
					}
				},
				{
					selector: "node",
					style: { "compound-sizing-wrt-labels": "include" }
				},
				{
					selector: "node[label]",
					style: {
						"text-valign": "bottom",
						"text-halign": "center",
						"font-size": `${s.getConfigField("fontSize")}px`
					}
				},
				{
					selector: ".node-service",
					style: {
						label: "data(label)",
						width: "data(width)",
						height: "data(height)"
					}
				},
				{
					selector: ".node-junction",
					style: {
						width: "data(width)",
						height: "data(height)"
					}
				},
				{
					selector: ".node-group",
					style: { padding: `${s.getConfigField("padding")}px` }
				}
			],
			layout: {
				name: "grid",
				boundingBox: {
					x1: 0,
					x2: 100,
					y1: 0,
					y2: 100
				}
			}
		});
		d.remove(), addGroups(n, f), addServices(e, f, s), addJunctions(t, f, s), addEdges(r, f);
		let p = getAlignments(s, c, l), m = getRelativeConstraints(c, s), h = f.layout({
			name: "fcose",
			quality: "proof",
			styleEnabled: !1,
			animate: !1,
			nodeDimensionsIncludeLabels: !1,
			idealEdgeLength(e) {
				let [t, n] = e.connectedNodes(), { parent: r } = nodeData(t), { parent: i } = nodeData(n);
				return r === i ? 1.5 * s.getConfigField("iconSize") : .5 * s.getConfigField("iconSize");
			},
			edgeElasticity(e) {
				let [t, n] = e.connectedNodes(), { parent: r } = nodeData(t), { parent: i } = nodeData(n);
				return r === i ? .45 : .001;
			},
			alignmentConstraint: p,
			relativePlacementConstraint: m
		});
		h.one("layoutstop", () => {
			function e(e, t, n, r) {
				let i, a, { x: o, y: s } = e, { x: c, y: l } = t;
				a = (r - s + (o - n) * (s - l) / (o - c)) / Math.sqrt(1 + ((s - l) / (o - c)) ** 2), i = Math.sqrt((r - s) ** 2 + (n - o) ** 2 - a ** 2);
				let u = Math.sqrt((c - o) ** 2 + (l - s) ** 2);
				i /= u;
				let d = (c - o) * (r - s) - (l - s) * (n - o);
				switch (!0) {
					case d >= 0:
						d = 1;
						break;
					case d < 0:
						d = -1;
						break;
				}
				let f = (c - o) * (n - o) + (l - s) * (r - s);
				switch (!0) {
					case f >= 0:
						f = 1;
						break;
					case f < 0:
						f = -1;
						break;
				}
				return a = Math.abs(a) * d, i *= f, {
					distances: a,
					weights: i
				};
			}
			__name(e, "getSegmentWeights"), f.startBatch();
			for (let t of Object.values(f.edges())) if (t.data?.()) {
				let { x: n, y: r } = t.source().position(), { x: i, y: a } = t.target().position();
				if (n !== i && r !== a) {
					let n = t.sourceEndpoint(), r = t.targetEndpoint(), { sourceDir: i } = edgeData(t), [a, o] = isArchitectureDirectionY(i) ? [n.x, r.y] : [r.x, n.y], { weights: s, distances: c } = e(n, r, a, o);
					t.style("segment-distances", c), t.style("segment-weights", s);
				}
			}
			f.endBatch(), h.run();
		}), h.run(), f.ready((e) => {
			log.info("Ready", e), u(f);
		});
	});
}
__name(layoutArchitecture, "layoutArchitecture");
var diagram = {
	parser,
	get db() {
		return new ArchitectureDB();
	},
	renderer: { draw: /* @__PURE__ */ __name(async (e, t, n, r) => {
		let i = r.db, a = i.getServices(), o = i.getJunctions(), s = i.getGroups(), c = i.getEdges(), u = i.getDataStructures(), d = selectSvgElement(t), f = d.append("g");
		f.attr("class", "architecture-edges");
		let p = d.append("g");
		p.attr("class", "architecture-services");
		let m = d.append("g");
		m.attr("class", "architecture-groups"), await drawServices(i, p, a), drawJunctions(i, p, o);
		let h = await layoutArchitecture(a, o, s, c, i, u);
		await drawEdges(f, h, i), await drawGroups(m, h, i), positionNodes(i, h), setupGraphViewbox(void 0, d, i.getConfigField("padding"), i.getConfigField("useMaxWidth"));
	}, "draw") },
	styles: architectureStyles_default
};
export { diagram };
