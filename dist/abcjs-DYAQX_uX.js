import { t as __commonJSMin } from "./chunk-DgPTj83v.js";
var require_version = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = "6.5.2";
})), require_abc_timing_callbacks = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t) {
		var n = this;
		if (t ||= {}, n.qpm = t.qpm ? parseInt(t.qpm, 10) : null, !n.qpm) {
			var i = e.metaText ? e.metaText.tempo : null;
			n.qpm = e.getBpm(i);
		}
		n.extraMeasuresAtBeginning = t.extraMeasuresAtBeginning ? parseInt(t.extraMeasuresAtBeginning, 10) : 0, n.beatCallback = t.beatCallback, n.eventCallback = t.eventCallback, n.lineEndCallback = t.lineEndCallback, n.lineEndAnticipation = t.lineEndAnticipation ? parseInt(t.lineEndAnticipation, 10) : 0, n.beatSubdivisions = t.beatSubdivisions ? parseInt(t.beatSubdivisions, 10) : 1, n.joggerTimer = null, n.replaceTarget = function(e) {
			n.noteTimings = e.setTiming(n.qpm, n.extraMeasuresAtBeginning), e.noteTimings.length === 0 && (n.noteTimings = e.setTiming(0, 0)), n.lineEndCallback && (n.lineEndTimings = r(e.noteTimings, n.lineEndAnticipation)), n.startTime = null, n.currentBeat = 0, n.currentEvent = 0, n.currentLine = 0, n.currentTime = 0, n.isPaused = !1, n.isRunning = !1, n.pausedPercent = null, n.justUnpaused = !1, n.newSeekPercent = 0, n.lastTimestamp = 0, n.noteTimings.length !== 0 && (n.millisecondsPerBeat = 1e3 / (n.qpm / 60) / n.beatSubdivisions, n.lastMoment = n.noteTimings[n.noteTimings.length - 1].milliseconds, n.totalBeats = Math.round(n.lastMoment / n.millisecondsPerBeat));
		}, n.replaceTarget(e), n.doTiming = function(e) {
			if (n.lastTimestamp !== e && (n.lastTimestamp = e, n.startTime ||= e, !n.isPaused && n.isRunning)) {
				for (n.currentTime = e - n.startTime, n.currentTime += 16; n.noteTimings.length > n.currentEvent && n.noteTimings[n.currentEvent].milliseconds < n.currentTime;) {
					if (n.eventCallback && n.noteTimings[n.currentEvent].type === "event") {
						var t = n.startTime;
						n.eventCallback(n.noteTimings[n.currentEvent]), t !== n.startTime && (n.currentTime = e - n.startTime);
					}
					n.currentEvent++;
				}
				if (n.lineEndCallback && n.lineEndTimings.length > n.currentLine && n.lineEndTimings[n.currentLine].milliseconds < n.currentTime && n.currentEvent < n.noteTimings.length) {
					var r = n.noteTimings[n.currentEvent].milliseconds === n.currentTime ? n.noteTimings[n.currentEvent] : n.noteTimings[n.currentEvent - 1];
					n.lineEndCallback(n.lineEndTimings[n.currentLine], r, {
						line: n.currentLine,
						endTimings: n.lineEndTimings,
						currentTime: n.currentTime
					}), n.currentLine++;
				}
				if (n.currentTime < n.lastMoment) {
					if (requestAnimationFrame(n.doTiming), n.currentBeat * n.millisecondsPerBeat < n.currentTime) {
						var i = n.doBeatCallback(e);
						i !== null && (n.currentTime = i);
					}
				} else if (n.currentBeat <= n.totalBeats && n.beatCallback) {
					var a = n.doBeatCallback(e);
					a !== null && (n.currentTime = a), requestAnimationFrame(n.doTiming);
				}
				if (n.currentTime >= n.lastMoment) if (n.eventCallback) {
					var o = n.eventCallback(null);
					n.shouldStop(o).then(function(e) {
						e && n.stop();
					});
				} else n.stop();
			}
		}, n.shouldStop = function(e) {
			return new Promise(function(t) {
				if (!e) return t(!0);
				if (e === "continue") return t(!1);
				e.then && e.then(function(e) {
					t(e !== "continue");
				});
			});
		}, n.doBeatCallback = function(e) {
			if (n.beatCallback) {
				for (var t = n.currentEvent; t < n.noteTimings.length && n.noteTimings[t].left === null;) t++;
				var r, i;
				if (t < n.noteTimings.length) {
					for (r = n.noteTimings[t].milliseconds, t = Math.max(0, n.currentEvent - 1); t >= 0 && n.noteTimings[t].left === null;) t--;
					i = n.noteTimings[t];
				}
				var a = {}, o = {};
				if (i) {
					a.top = i.top, a.height = i.height;
					var s = Math.max(0, e - n.startTime - i.milliseconds), c = r - i.milliseconds, l = i.endX - i.left, u = c ? s * l / c : 0;
					a.left = i.left + u, n.currentEvent === 0 && i.milliseconds > e - n.startTime && (a.left = void 0), o = {
						timestamp: e,
						startTime: n.startTime,
						ev: i,
						endMs: r,
						offMs: s,
						offPx: u,
						gapMs: c,
						gapPx: l
					};
				} else o = {
					timestamp: e,
					startTime: n.startTime
				};
				var d = n.startTime;
				if (n.beatCallback(n.currentBeat / n.beatSubdivisions, n.totalBeats / n.beatSubdivisions, n.lastMoment, a, o), d !== n.startTime) return e - n.startTime;
				n.currentBeat++;
			}
			return null;
		};
		var a = 60;
		n.animationJogger = function() {
			n.isRunning && (n.doTiming(performance.now()), n.joggerTimer = setTimeout(n.animationJogger, a));
		}, n.start = function(e, t) {
			if (n.isRunning = !0, n.isPaused && (n.isPaused = !1, e === void 0 && (n.justUnpaused = !0)), e) n.setProgress(e, t);
			else if (e === 0) n.reset();
			else if (n.pausedPercent !== null) {
				var r = performance.now();
				n.currentTime = n.lastMoment * n.pausedPercent, n.startTime = r - n.currentTime, n.pausedPercent = null, n.reportNext = !0;
			}
			requestAnimationFrame(n.doTiming), n.joggerTimer = setTimeout(n.animationJogger, a);
		}, n.pause = function() {
			n.isPaused = !0, n.pausedPercent = (performance.now() - n.startTime) / n.lastMoment, n.isRunning = !1, n.joggerTimer &&= (clearTimeout(n.joggerTimer), null);
		}, n.currentMillisecond = function() {
			return n.currentTime;
		}, n.reset = function() {
			n.currentBeat = 0, n.currentEvent = 0, n.currentLine = 0, n.startTime = null, n.pausedPercent = null;
		}, n.stop = function() {
			n.pause(), n.reset();
		}, n.setProgress = function(e, t) {
			var r;
			switch (t) {
				case "seconds":
					n.currentTime = e * 1e3, n.currentTime < 0 && (n.currentTime = 0), n.currentTime > n.lastMoment && (n.currentTime = n.lastMoment), r = n.currentTime / n.lastMoment;
					break;
				case "beats":
					n.currentTime = e * n.millisecondsPerBeat * n.beatSubdivisions, n.currentTime < 0 && (n.currentTime = 0), n.currentTime > n.lastMoment && (n.currentTime = n.lastMoment), r = n.currentTime / n.lastMoment;
					break;
				default:
					r = e, r < 0 && (r = 0), r > 1 && (r = 1), n.currentTime = n.lastMoment * r;
					break;
			}
			for (n.isRunning || (n.pausedPercent = r), n.startTime = performance.now() - n.currentTime, n.currentEvent, n.currentEvent = 0; n.noteTimings.length > n.currentEvent && n.noteTimings[n.currentEvent].milliseconds < n.currentTime;) n.currentEvent++;
			if (n.lineEndCallback) for (n.currentLine = 0; n.lineEndTimings.length > n.currentLine && n.lineEndTimings[n.currentLine].milliseconds + n.lineEndAnticipation < n.currentTime;) n.currentLine++;
			var i = n.currentBeat;
			n.currentBeat = Math.floor(n.currentTime / n.millisecondsPerBeat), n.beatCallback && i !== n.currentBeat && n.doBeatCallback(n.startTime + n.currentTime), n.eventCallback && n.currentEvent >= 0 && n.noteTimings[n.currentEvent].type === "event" && n.eventCallback(n.noteTimings[n.currentEvent]), n.lineEndCallback && n.lineEndCallback(n.lineEndTimings[n.currentLine], n.noteTimings[n.currentEvent], {
				line: n.currentLine,
				endTimings: n.lineEndTimings
			}), n.joggerTimer = setTimeout(n.animationJogger, a);
		};
	};
	function r(e, t) {
		for (var n = [], r = null, i = 0; i < e.length; i++) {
			var a = e[i];
			a.type !== "end" && a.top !== r && (n.push({
				measureNumber: a.measureNumber,
				milliseconds: a.milliseconds - t,
				top: a.top,
				bottom: a.top + a.height
			}), r = a.top);
		}
		return n;
	}
	t.exports = n;
})), require_abc_animation = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var r = require_abc_timing_callbacks(), i = {};
	(function() {
		var e, t;
		i.startAnimation = function(n, i, a) {
			e &&= (e.stop(), void 0), a.showCursor && (t = n.querySelector(".abcjs-cursor"), t || (t = document.createElement("DIV"), t.className = "abcjs-cursor cursor", t.style.position = "absolute", n.appendChild(t), n.style.position = "relative"));
			function o(e) {
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					n.classList.contains("abcjs-bar") || (n.style.display = "none");
				}
			}
			var s;
			function c(e) {
				s && o(n.querySelectorAll(s)), s = e;
			}
			function l(e) {
				o(n.querySelectorAll(e));
			}
			function u(e) {
				a.hideCurrentMeasure ? l(e) : a.hideFinishedMeasures && c(e);
			}
			function d(e) {
				return ".abcjs-l" + e.line + ".abcjs-m" + e.measureNumber;
			}
			function f(n) {
				if (n) {
					if (n.measureStart) {
						var r = d(n);
						r && u(r);
					}
					t && (t.style.left = n.left + "px", t.style.top = n.top + "px", t.style.width = n.width + "px", t.style.height = n.height + "px");
				} else e.stop(), e = void 0;
			}
			e = new r(i, {
				qpm: a.bpm,
				eventCallback: f
			}), e.start();
		}, i.pauseAnimation = function(t) {
			e && (t ? e.pause() : e.start());
		}, i.stopAnimation = function() {
			e &&= (e.stop(), void 0);
		};
	})(), t.exports = i;
})), require_abc_common = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = {};
	n.cloneArray = function(e) {
		for (var t = [], n = 0; n < e.length; n++) t.push(Object.assign({}, e[n]));
		return t;
	}, n.cloneHashOfHash = function(e) {
		var t = {};
		for (var n in e) e.hasOwnProperty(n) && (t[n] = Object.assign({}, e[n]));
		return t;
	}, n.cloneHashOfArrayOfHash = function(e) {
		var t = {};
		for (var r in e) e.hasOwnProperty(r) && (t[r] = n.cloneArray(e[r]));
		return t;
	}, n.strip = function(e) {
		return e.replace(/^\s+/, "").replace(/\s+$/, "");
	}, n.startsWith = function(e, t) {
		return e.indexOf(t) === 0;
	}, n.endsWith = function(e, t) {
		var n = e.length - t.length;
		return n >= 0 && e.lastIndexOf(t) === n;
	}, n.last = function(e) {
		return e.length === 0 ? null : e[e.length - 1];
	}, t.exports = n;
})), require_abc_parse_directive = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_common(), r = {};
	(function() {
		var e, t, i, a, o;
		r.initialize = function(n, r, c, l, u) {
			e = n, t = r, i = c, a = l, o = u, s();
		};
		function s() {
			i.annotationfont = {
				face: "Helvetica",
				size: 12,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, i.gchordfont = {
				face: "Helvetica",
				size: 12,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, i.historyfont = {
				face: "\"Times New Roman\"",
				size: 16,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, i.infofont = {
				face: "\"Times New Roman\"",
				size: 14,
				weight: "normal",
				style: "italic",
				decoration: "none"
			}, i.measurefont = {
				face: "\"Times New Roman\"",
				size: 14,
				weight: "normal",
				style: "italic",
				decoration: "none"
			}, i.partsfont = {
				face: "\"Times New Roman\"",
				size: 15,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, i.repeatfont = {
				face: "\"Times New Roman\"",
				size: 13,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, i.textfont = {
				face: "\"Times New Roman\"",
				size: 16,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, i.tripletfont = {
				face: "Times",
				size: 11,
				weight: "normal",
				style: "italic",
				decoration: "none"
			}, i.vocalfont = {
				face: "\"Times New Roman\"",
				size: 13,
				weight: "bold",
				style: "normal",
				decoration: "none"
			}, i.wordsfont = {
				face: "\"Times New Roman\"",
				size: 16,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.composerfont = {
				face: "\"Times New Roman\"",
				size: 14,
				weight: "normal",
				style: "italic",
				decoration: "none"
			}, a.formatting.subtitlefont = {
				face: "\"Times New Roman\"",
				size: 16,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.tempofont = {
				face: "\"Times New Roman\"",
				size: 15,
				weight: "bold",
				style: "normal",
				decoration: "none"
			}, a.formatting.titlefont = {
				face: "\"Times New Roman\"",
				size: 20,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.footerfont = {
				face: "\"Times New Roman\"",
				size: 12,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.headerfont = {
				face: "\"Times New Roman\"",
				size: 12,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.voicefont = {
				face: "\"Times New Roman\"",
				size: 13,
				weight: "bold",
				style: "normal",
				decoration: "none"
			}, a.formatting.tablabelfont = {
				face: "\"Trebuchet MS\"",
				size: 16,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.tabnumberfont = {
				face: "\"Arial\"",
				size: 11,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.tabgracefont = {
				face: "\"Arial\"",
				size: 8,
				weight: "normal",
				style: "normal",
				decoration: "none"
			}, a.formatting.annotationfont = i.annotationfont, a.formatting.gchordfont = i.gchordfont, a.formatting.historyfont = i.historyfont, a.formatting.infofont = i.infofont, a.formatting.measurefont = i.measurefont, a.formatting.partsfont = i.partsfont, a.formatting.repeatfont = i.repeatfont, a.formatting.textfont = i.textfont, a.formatting.tripletfont = i.tripletfont, a.formatting.vocalfont = i.vocalfont, a.formatting.wordsfont = i.wordsfont;
		}
		var c = {
			gchordfont: !0,
			measurefont: !0,
			partsfont: !0,
			annotationfont: !0,
			composerfont: !0,
			historyfont: !0,
			infofont: !0,
			subtitlefont: !0,
			textfont: !0,
			titlefont: !0,
			voicefont: !0
		}, l = function(e) {
			switch (e) {
				case "Arial-Italic": return {
					face: "Arial",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "Arial-Bold": return {
					face: "Arial",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "Bookman-Demi": return {
					face: "Bookman,serif",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "Bookman-DemiItalic": return {
					face: "Bookman,serif",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "Bookman-Light": return {
					face: "Bookman,serif",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				case "Bookman-LightItalic": return {
					face: "Bookman,serif",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "Courier": return {
					face: "\"Courier New\"",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				case "Courier-Oblique": return {
					face: "\"Courier New\"",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "Courier-Bold": return {
					face: "\"Courier New\"",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "Courier-BoldOblique": return {
					face: "\"Courier New\"",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "AvantGarde-Book": return {
					face: "AvantGarde,Arial",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				case "AvantGarde-BookOblique": return {
					face: "AvantGarde,Arial",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "AvantGarde-Demi":
				case "Avant-Garde-Demi": return {
					face: "AvantGarde,Arial",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "AvantGarde-DemiOblique": return {
					face: "AvantGarde,Arial",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "Helvetica-Oblique": return {
					face: "Helvetica",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "Helvetica-Bold": return {
					face: "Helvetica",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "Helvetica-BoldOblique": return {
					face: "Helvetica",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "Helvetica-Narrow": return {
					face: "\"Helvetica Narrow\",Helvetica",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				case "Helvetica-Narrow-Oblique": return {
					face: "\"Helvetica Narrow\",Helvetica",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "Helvetica-Narrow-Bold": return {
					face: "\"Helvetica Narrow\",Helvetica",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "Helvetica-Narrow-BoldOblique": return {
					face: "\"Helvetica Narrow\",Helvetica",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "Palatino-Roman": return {
					face: "Palatino",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				case "Palatino-Italic": return {
					face: "Palatino",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "Palatino-Bold": return {
					face: "Palatino",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "Palatino-BoldItalic": return {
					face: "Palatino",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "NewCenturySchlbk-Roman": return {
					face: "\"New Century\",serif",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				case "NewCenturySchlbk-Italic": return {
					face: "\"New Century\",serif",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "NewCenturySchlbk-Bold": return {
					face: "\"New Century\",serif",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "NewCenturySchlbk-BoldItalic": return {
					face: "\"New Century\",serif",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "Times":
				case "Times-Roman":
				case "Times-Narrow":
				case "Times-Courier":
				case "Times-New-Roman": return {
					face: "\"Times New Roman\"",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				case "Times-Italic":
				case "Times-Italics": return {
					face: "\"Times New Roman\"",
					weight: "normal",
					style: "italic",
					decoration: "none"
				};
				case "Times-Bold": return {
					face: "\"Times New Roman\"",
					weight: "bold",
					style: "normal",
					decoration: "none"
				};
				case "Times-BoldItalic": return {
					face: "\"Times New Roman\"",
					weight: "bold",
					style: "italic",
					decoration: "none"
				};
				case "ZapfChancery-MediumItalic": return {
					face: "\"Zapf Chancery\",cursive,serif",
					weight: "normal",
					style: "normal",
					decoration: "none"
				};
				default: return null;
			}
		}, u = function(e, n, r, i, a) {
			function o() {
				var o = parseInt(e[0].token);
				return e.shift(), n ? e.length === 0 ? {
					face: n.face,
					weight: n.weight,
					style: n.style,
					decoration: n.decoration,
					size: o
				} : e.length === 1 && e[0].token === "box" && c[a] ? {
					face: n.face,
					weight: n.weight,
					style: n.style,
					decoration: n.decoration,
					size: o,
					box: !0
				} : (t("Extra parameters in font definition.", r, i), {
					face: n.face,
					weight: n.weight,
					style: n.style,
					decoration: n.decoration,
					size: o
				}) : (t("Can't set just the size of the font since there is no default value.", r, i), {
					face: "\"Times New Roman\"",
					weight: "normal",
					style: "normal",
					decoration: "none",
					size: o
				});
			}
			if (e[0].token === "*") {
				if (e.shift(), e[0].type === "number") return o();
				t("Expected font size number after *.", r, i);
			}
			if (e[0].type === "number") return o();
			for (var s = [], u, d = "normal", f = "normal", p = "none", m = !1, h = "face", g = !1; e.length;) {
				var _ = e.shift(), v = _.token.toLowerCase();
				switch (h) {
					case "face":
						g || v !== "utf" && _.type !== "number" && v !== "bold" && v !== "italic" && v !== "underline" && v !== "box" ? s.length > 0 && _.token === "-" ? (g = !0, s[s.length - 1] = s[s.length - 1] + _.token) : g ? (g = !1, s[s.length - 1] = s[s.length - 1] + _.token) : s.push(_.token) : _.type === "number" ? (u ? t("Font size specified twice in font definition.", r, i) : u = _.token, h = "modifier") : v === "bold" ? d = "bold" : v === "italic" ? f = "italic" : v === "underline" ? p = "underline" : v === "box" ? (c[a] ? m = !0 : t("This font style doesn't support \"box\"", r, i), h = "finished") : v === "utf" ? (_ = e.shift(), h = "size") : t("Unknown parameter " + _.token + " in font definition.", r, i);
						break;
					case "size":
						_.type === "number" ? u ? t("Font size specified twice in font definition.", r, i) : u = _.token : t("Expected font size in font definition.", r, i), h = "modifier";
						break;
					case "modifier":
						v === "bold" ? d = "bold" : v === "italic" ? f = "italic" : v === "underline" ? p = "underline" : v === "box" ? (c[a] ? m = !0 : t("This font style doesn't support \"box\"", r, i), h = "finished") : t("Unknown parameter " + _.token + " in font definition.", r, i);
						break;
					case "finished":
						t("Extra characters found after \"box\" in font definition.", r, i);
						break;
				}
			}
			u === void 0 ? n ? u = n.size : (t("Must specify the size of the font since there is no default value.", r, i), u = 12) : u = parseFloat(u), s = s.join(" "), s === "" && (n ? s = n.face : (t("Must specify the name of the font since there is no default value.", r, i), s = "sans-serif"));
			var y = l(s), b = {};
			return y ? (b.face = y.face, b.weight = y.weight, b.style = y.style, b.decoration = y.decoration, b.size = u, m && (b.box = !0), b) : (b.face = s, b.weight = d, b.style = f, b.decoration = p, b.size = u, m && (b.box = !0), b);
		}, d = function(e, t, n) {
			return t.length === 0 ? "Directive \"" + e + "\" requires a font as a parameter." : (i[e] = u(t, i[e], n, 0, e), i.is_in_header && (a.formatting[e] = i[e]), null);
		}, f = function(e, t, n) {
			return t.length === 0 ? "Directive \"" + e + "\" requires a font as a parameter." : (a.formatting[e] = u(t, a.formatting[e], n, 0, e), null);
		}, p = function(e, t) {
			var n = "";
			t.forEach(function(e) {
				n += e.token;
			});
			var r = parseFloat(n);
			if (isNaN(r) || r === 0) return "Directive \"" + e + "\" requires a number as a parameter.";
			a.formatting.scale = r;
		}, m = /* @__PURE__ */ "acoustic-bass-drum.bass-drum-1.side-stick.acoustic-snare.hand-clap.electric-snare.low-floor-tom.closed-hi-hat.high-floor-tom.pedal-hi-hat.low-tom.open-hi-hat.low-mid-tom.hi-mid-tom.crash-cymbal-1.high-tom.ride-cymbal-1.chinese-cymbal.ride-bell.tambourine.splash-cymbal.cowbell.crash-cymbal-2.vibraslap.ride-cymbal-2.hi-bongo.low-bongo.mute-hi-conga.open-hi-conga.low-conga.high-timbale.low-timbale.high-agogo.low-agogo.cabasa.maracas.short-whistle.long-whistle.short-guiro.long-guiro.claves.hi-wood-block.low-wood-block.mute-cuica.open-cuica.mute-triangle.open-triangle".split("."), h = function(e) {
			var t = e.split(/\s+/);
			if (t.length !== 2 && t.length !== 3) return { error: "Expected parameters \"abc-note\", \"drum-sound\", and optionally \"note-head\"" };
			var n = t[0], r = parseInt(t[1], 10);
			if ((isNaN(r) || r < 35 || r > 81) && t[1] && (r = m.indexOf(t[1].toLowerCase()) + 35), isNaN(r) || r < 35 || r > 81) return { error: "Expected drum name, received \"" + t[1] + "\"" };
			var i = { sound: r };
			return t.length === 3 && (i.noteHead = t[2]), {
				key: n,
				value: i
			};
		}, g = function(t, n) {
			var r = e.getMeasurement(n);
			return r.used === 0 || n.length !== 0 ? { error: "Directive \"" + t + "\" requires a measurement as a parameter." } : r.value;
		}, _ = function(t, n) {
			var r = e.getMeasurement(n);
			return r.used === 0 || n.length !== 0 ? "Directive \"" + t + "\" requires a measurement as a parameter." : (a.formatting[t] = r.value, null);
		}, v = function(e, t, n, r, a) {
			if (n.length !== 1 || n[0].type !== "number") return "Directive \"" + t + "\" requires a number as a parameter.";
			var o = n[0].intt;
			return r !== void 0 && o < r ? "Directive \"" + t + "\" requires a number greater than or equal to " + r + " as a parameter." : a !== void 0 && o > a ? "Directive \"" + t + "\" requires a number less than or equal to " + a + " as a parameter." : (i[e] = o, null);
		}, y = function(e, t, n) {
			if (n.length === 1 && (n[0].token === "true" || n[0].token === "false")) return i[e] = n[0].token === "true", null;
			var r = v(e, t, n, 0, 1);
			return r === null ? (i[e] = i[e] === 1, null) : r;
		}, b = function(e, t, n, r) {
			if (n.length !== 1) return "Directive \"" + t + "\" requires one of [ " + r.join(", ") + " ] as a parameter.";
			for (var a = n[0].token, o = !1, s = 0; !o && s < r.length; s++) r[s] === a && (o = !0);
			return o ? (i[e] = a, null) : "Directive \"" + t + "\" requires one of [ " + r.join(", ") + " ] as a parameter.";
		}, x = [
			"nobarlines",
			"barlines",
			"beataccents",
			"nobeataccents",
			"droneon",
			"droneoff",
			"drumon",
			"drumoff",
			"fermatafixed",
			"fermataproportional",
			"gchordon",
			"gchordoff",
			"controlcombo",
			"temperamentnormal",
			"noportamento"
		], S = [
			"gchord",
			"ptstress",
			"beatstring"
		], C = [
			"bassvol",
			"chordvol",
			"c",
			"channel",
			"beatmod",
			"deltaloudness",
			"drumbars",
			"gracedivider",
			"makechordchannels",
			"randomchordattack",
			"chordattack",
			"stressmodel",
			"transpose",
			"rtranspose",
			"vol",
			"volinc",
			"gchordbars"
		], w = ["program"], T = [
			"ratio",
			"snt",
			"bendvelocity",
			"pitchbend",
			"control",
			"temperamentlinear"
		], E = ["beat"], D = ["drone"], O = ["portamento"], k = [
			"expand",
			"grace",
			"trim"
		], A = ["drum", "chordname"], j = ["bassprog", "chordprog"], M = function(e, n, r) {
			var i = e.shift().token, a = [];
			if (x.indexOf(i) >= 0) e.length !== 0 && t("Unexpected parameter in MIDI " + i, r, 0);
			else if (S.indexOf(i) >= 0) e.length === 1 ? a.push(e[0].token) : t("Expected one parameter in MIDI " + i, r, 0);
			else if (C.indexOf(i) >= 0) e.length === 1 ? e[0].type === "number" ? a.push(e[0].intt) : t("Expected one integer parameter in MIDI " + i, r, 0) : t("Expected one parameter in MIDI " + i, r, 0);
			else if (w.indexOf(i) >= 0) e.length !== 1 && e.length !== 2 ? t("Expected one or two parameters in MIDI " + i, r, 0) : e[0].type === "number" ? e.length === 2 && e[1].type !== "number" ? t("Expected integer parameter in MIDI " + i, r, 0) : (a.push(e[0].intt), e.length === 2 && a.push(e[1].intt)) : t("Expected integer parameter in MIDI " + i, r, 0);
			else if (T.indexOf(i) >= 0) e.length === 2 ? e[0].type !== "number" || e[1].type !== "number" ? t("Expected two integer parameters in MIDI " + i, r, 0) : (a.push(e[0].intt), a.push(e[1].intt)) : t("Expected two parameters in MIDI " + i, r, 0);
			else if (O.indexOf(i) >= 0) e.length === 2 ? e[0].type !== "alpha" || e[1].type !== "number" ? t("Expected one string and one integer parameters in MIDI " + i, r, 0) : (a.push(e[0].token), a.push(e[1].intt)) : t("Expected two parameters in MIDI " + i, r, 0);
			else if (i === "drummap") e.length === 2 && e[0].type === "alpha" && e[1].type === "number" ? (n.formatting ||= {}, n.formatting.midi || (n.formatting.midi = {}), n.formatting.midi.drummap || (n.formatting.midi.drummap = {}), n.formatting.midi.drummap[e[0].token] = e[1].intt, a = n.formatting.midi.drummap) : e.length === 3 && e[0].type === "punct" && e[1].type === "alpha" && e[2].type === "number" ? (n.formatting ||= {}, n.formatting.midi || (n.formatting.midi = {}), n.formatting.midi.drummap || (n.formatting.midi.drummap = {}), n.formatting.midi.drummap[e[0].token + e[1].token] = e[2].intt, a = n.formatting.midi.drummap) : t("Expected one note name and one integer parameter in MIDI " + i, r, 0);
			else if (k.indexOf(i) >= 0) e.length === 3 ? e[0].type !== "number" || e[1].token !== "/" || e[2].type !== "number" ? t("Expected fraction parameter in MIDI " + i, r, 0) : (a.push(e[0].intt), a.push(e[2].intt)) : t("Expected fraction parameter in MIDI " + i, r, 0);
			else if (E.indexOf(i) >= 0) e.length === 4 ? e[0].type !== "number" || e[1].type !== "number" || e[2].type !== "number" || e[3].type !== "number" ? t("Expected four integer parameters in MIDI " + i, r, 0) : (a.push(e[0].intt), a.push(e[1].intt), a.push(e[2].intt), a.push(e[3].intt)) : t("Expected four parameters in MIDI " + i, r, 0);
			else if (D.indexOf(i) >= 0) e.length === 5 ? e[0].type !== "number" || e[1].type !== "number" || e[2].type !== "number" || e[3].type !== "number" || e[4].type !== "number" ? t("Expected five integer parameters in MIDI " + i, r, 0) : (a.push(e[0].intt), a.push(e[1].intt), a.push(e[2].intt), a.push(e[3].intt), a.push(e[4].intt)) : t("Expected five parameters in MIDI " + i, r, 0);
			else if (w.indexOf(i) >= 0) e.length !== 1 || e.length !== 4 ? t("Expected one or two parameters in MIDI " + i, r, 0) : e[0].type === "number" ? e.length === 4 ? (e[1].token !== "octave" && t("Expected octave parameter in MIDI " + i, r, 0), e[2].token !== "=" && t("Expected octave parameter in MIDI " + i, r, 0), e[3].type !== "number" && t("Expected integer parameter for octave in MIDI " + i, r, 0)) : (a.push(e[0].intt), e.length === 4 && a.push(e[3].intt)) : t("Expected integer parameter in MIDI " + i, r, 0);
			else if (A.indexOf(i) >= 0) if (e.length < 2) t("Expected string parameter and at least one integer parameter in MIDI " + i, r, 0);
			else if (e[0].type !== "alpha") t("Expected string parameter and at least one integer parameter in MIDI " + i, r, 0);
			else {
				var s = e.shift();
				for (a.push(s.token); e.length > 0;) s = e.shift(), s.type !== "number" && t("Expected integer parameter in MIDI " + i, r, 0), a.push(s.intt);
			}
			else if (j.indexOf(i) >= 0) {
				if (e.length !== 1 && e.length !== 2) t("Expected one or two parameters in MIDI " + i, r, 0);
				else if (e[0].type !== "number") t("Expected integer parameter in MIDI " + i, r, 0);
				else if (e.length === 2 && e[1].type !== "alpha") t("Expected alpha parameter in MIDI " + i, r, 0);
				else if (a.push(e[0].intt), e.length === 2) {
					var c = e[1].token;
					c.indexOf("octave=") == -1 ? t("Expected octave= in MIDI" + i) : (c = c.replace("octave=", ""), c = parseInt(c), isNaN(c) ? t("Expected octave value in MIDI" + i) : (c < -1 && (t("Expected octave= in MIDI " + i + " to be >= -1 (recv:" + c + ")"), c = -1), c > 3 && (t("Expected octave= in MIDI " + i + " to be <= 3 (recv:" + c + ")"), c = 3), a.push(c)));
				}
			}
			o.hasBeginMusic() ? o.appendElement("midi", -1, -1, {
				cmd: i,
				params: a
			}) : (n.formatting.midi === void 0 && (n.formatting.midi = {}), n.formatting.midi[i] = a);
		};
		r.parseFontChangeLine = function(e) {
			e = e.replace(/\$\$/g, "");
			var t = e.split("$");
			if (t.length > 1 && i.setfont) {
				var n = [];
				t[0] !== "" && n.push({ text: t[0] });
				for (var r = 1; r < t.length; r++) if (t[r][0] === "0") n.push({ text: t[r].substring(1).replace(/\x03/g, "$$") });
				else {
					var a = parseInt(t[r][0], 10);
					i.setfont[a] ? n.push({
						font: i.setfont[a],
						text: t[r].substring(1).replace(/\x03/g, "$$")
					}) : n[n.length - 1].text += "$" + t[r].replace(/\x03/g, "$$");
				}
				return n;
			}
			return e.replace(/\x03/g, "$$");
		};
		var N = [
			"auto",
			"above",
			"below",
			"hidden"
		];
		r.addDirective = function(s) {
			var c = e.tokenize(s, 0, s.length);
			if (c.length === 0 || c[0].type !== "alpha") return null;
			var l = s.substring(s.indexOf(c[0].token) + c[0].token.length);
			l = e.stripComment(l);
			var m = c.shift().token.toLowerCase(), x = "", S;
			switch (m) {
				case "bagpipes":
					a.formatting.bagpipes = !0;
					break;
				case "flatbeams":
					a.formatting.flatbeams = !0;
					break;
				case "jazzchords":
					a.formatting.jazzchords = !0;
					break;
				case "accentAbove":
					a.formatting.accentAbove = !0;
					break;
				case "germanAlphabet":
					a.formatting.germanAlphabet = !0;
					break;
				case "landscape":
					i.landscape = !0;
					break;
				case "papersize":
					i.papersize = l;
					break;
				case "graceslurs":
					if (c.length !== 1) return "Directive graceslurs requires one parameter: 0 or 1";
					if (c[0].token === "0" || c[0].token === "false") a.formatting.graceSlurs = !1;
					else if (c[0].token === "1" || c[0].token === "true") a.formatting.graceSlurs = !0;
					else return "Directive graceslurs requires one parameter: 0 or 1 (received " + c[0].token + ")";
					break;
				case "lineThickness":
					var C = P(c);
					if (C.value !== void 0 && (a.formatting.lineThickness = C.value), C.error) return C.error;
					break;
				case "stretchlast":
					var w = P(c);
					if (w.value !== void 0 && (a.formatting.stretchlast = w.value), w.error) return w.error;
					break;
				case "titlecaps":
					i.titlecaps = !0;
					break;
				case "titleleft":
					a.formatting.titleleft = !0;
					break;
				case "measurebox":
					a.formatting.measurebox = !0;
					break;
				case "vocal": return b("vocalPosition", m, c, N);
				case "dynamic": return b("dynamicPosition", m, c, N);
				case "gchord": return b("chordPosition", m, c, N);
				case "ornament": return b("ornamentPosition", m, c, N);
				case "volume": return b("volumePosition", m, c, N);
				case "botmargin":
				case "botspace":
				case "composerspace":
				case "indent":
				case "leftmargin":
				case "linesep":
				case "musicspace":
				case "partsspace":
				case "pageheight":
				case "pagewidth":
				case "rightmargin":
				case "stafftopmargin":
				case "staffsep":
				case "staffwidth":
				case "subtitlespace":
				case "sysstaffsep":
				case "systemsep":
				case "textspace":
				case "titlespace":
				case "topmargin":
				case "topspace":
				case "vocalspace":
				case "wordsspace": return _(m, c);
				case "voicescale":
					if (c.length !== 1 || c[0].type !== "number") return "voicescale requires one float as a parameter";
					var T = c.shift();
					return i.currentVoice && (i.currentVoice.scale = T.floatt, o.changeVoiceScale(i.currentVoice.scale)), null;
				case "voicecolor":
					if (c.length !== 1) return "voicecolor requires one string as a parameter";
					var E = c.shift();
					return i.currentVoice && (i.currentVoice.color = E.token, o.changeVoiceColor(i.currentVoice.color)), null;
				case "vskip":
					var D = Math.round(g(m, c));
					return D.error ? D.error : (o.addSpacing(D), null);
				case "scale":
					p(m, c);
					break;
				case "sep":
					if (c.length === 0) o.addSeparator(14, 14, 85, {
						startChar: i.iChar,
						endChar: i.iChar + 5
					});
					else {
						var O = e.getMeasurement(c);
						if (O.used === 0) return "Directive \"" + m + "\" requires 3 numbers: space above, space below, length of line";
						var k = O.value;
						if (O = e.getMeasurement(c), O.used === 0) return "Directive \"" + m + "\" requires 3 numbers: space above, space below, length of line";
						var A = O.value;
						if (O = e.getMeasurement(c), O.used === 0 || c.length !== 0) return "Directive \"" + m + "\" requires 3 numbers: space above, space below, length of line";
						var j = O.value;
						o.addSeparator(k, A, j, {
							startChar: i.iChar,
							endChar: i.iChar + l.length
						});
					}
					break;
				case "barsperstaff":
					if (x = v("barsperstaff", m, c), x !== null) return x;
					break;
				case "staffnonote":
					if (c.length !== 1) return "Directive staffnonote requires one parameter: 0 or 1";
					if (c[0].token === "0") i.staffnonote = !0;
					else if (c[0].token === "1") i.staffnonote = !1;
					else return "Directive staffnonote requires one parameter: 0 or 1 (received " + c[0].token + ")";
					break;
				case "printtempo":
					if (x = y("printTempo", m, c), x !== null) return x;
					break;
				case "partsbox":
					if (x = y("partsBox", m, c), x !== null) return x;
					i.partsfont.box = i.partsBox;
					break;
				case "freegchord":
					if (x = y("freegchord", m, c), x !== null) return x;
					break;
				case "measurenb":
				case "barnumbers":
					if (x = v("barNumbers", m, c), x !== null) return x;
					break;
				case "setbarnb":
					if (c.length !== 1 || c[0].type !== "number") return "Directive setbarnb requires a number as a parameter.";
					i.currBarNumber = o.setBarNumberImmediate(c[0].intt);
					break;
				case "keywarn":
					if (c.length !== 1 || c[0].type !== "number" || c[0].intt !== 1 && c[0].intt !== 0) return "Directive " + m + " requires 0 or 1 as a parameter.";
					i[m] = c[0].intt === 1;
					break;
				case "begintext":
					var F = "";
					for (S = e.nextLine(); S && S.indexOf("%%endtext") !== 0;) {
						if (n.startsWith(S, "%%")) {
							var I = S.substring(2);
							I = I.trim() + "\n", F += I;
						} else F += S.trim() + "\n";
						S = e.nextLine();
					}
					o.addText(F, {
						startChar: i.iChar,
						endChar: i.iChar + F.length + 7
					});
					break;
				case "continueall":
					i.continueall = !0;
					break;
				case "beginps":
					for (S = e.nextLine(); S && S.indexOf("%%endps") !== 0;) e.nextLine();
					t("Postscript ignored", s, 0);
					break;
				case "deco":
					l.length > 0 && i.ignoredDecorations.push(l.substring(0, l.indexOf(" "))), t("Decoration redefinition ignored", s, 0);
					break;
				case "text":
					var L = e.translateString(l);
					o.addText(r.parseFontChangeLine(L), {
						startChar: i.iChar,
						endChar: i.iChar + l.length + 7
					});
					break;
				case "center":
					var R = e.translateString(l);
					o.addCentered(r.parseFontChangeLine(R));
					break;
				case "font": break;
				case "setfont":
					var z = e.tokenize(l, 0, l.length);
					if (z.length >= 4 && z[0].token === "-" && z[1].type === "number") {
						var B = parseInt(z[1].token);
						B >= 1 && B <= 9 && (i.setfont ||= [], z.shift(), z.shift(), i.setfont[B] = u(z, i.setfont[B], s, 0, "setfont"));
					}
					break;
				case "gchordfont":
				case "partsfont":
				case "tripletfont":
				case "vocalfont":
				case "textfont":
				case "annotationfont":
				case "historyfont":
				case "infofont":
				case "measurefont":
				case "repeatfont":
				case "wordsfont": return d(m, c, s);
				case "composerfont":
				case "subtitlefont":
				case "tempofont":
				case "titlefont":
				case "voicefont":
				case "footerfont":
				case "headerfont": return f(m, c, s);
				case "barlabelfont":
				case "barnumberfont":
				case "barnumfont": return d("measurefont", c, s);
				case "staves":
				case "score":
					i.score_is_present = !0;
					for (var V = function(e, t, r, a, o) {
						(t || i.staves.length === 0) && i.staves.push({
							index: i.staves.length,
							numVoices: 0
						});
						var s = n.last(i.staves);
						r !== void 0 && s.bracket === void 0 && (s.bracket = r), a !== void 0 && s.brace === void 0 && (s.brace = a), o && (s.connectBarLines = "end"), i.voices[e] === void 0 && (i.voices[e] = {
							staffNum: s.index,
							index: s.numVoices
						}, s.numVoices++);
					}, H = !1, U = !1, W = !1, xt = !1, G = !1, St = !1, K = !1, q, J = function() {
						if (K = !0, q) {
							var e = "start";
							q.staffNum > 0 && (i.staves[q.staffNum - 1].connectBarLines === "start" || i.staves[q.staffNum - 1].connectBarLines === "continue") && (e = "continue"), i.staves[q.staffNum].connectBarLines = e;
						}
					}; c.length;) {
						var Y = c.shift();
						switch (Y.token) {
							case "(":
								H ? t("Can't nest parenthesis in %%score", s, Y.start) : (H = !0, xt = !0);
								break;
							case ")":
								!H || xt ? t("Unexpected close parenthesis in %%score", s, Y.start) : H = !1;
								break;
							case "[":
								U ? t("Can't nest brackets in %%score", s, Y.start) : (U = !0, G = !0);
								break;
							case "]":
								!U || G ? t("Unexpected close bracket in %%score", s, Y.start) : (U = !1, i.staves[q.staffNum].bracket = "end");
								break;
							case "{":
								W ? t("Can't nest braces in %%score", s, Y.start) : (W = !0, St = !0);
								break;
							case "}":
								!W || St ? t("Unexpected close brace in %%score", s, Y.start) : (W = !1, i.staves[q.staffNum].brace = "end");
								break;
							case "|":
								J();
								break;
							default:
								for (var Ct = ""; (Y.type === "alpha" || Y.type === "number") && (Ct += Y.token, Y.continueId);) Y = c.shift();
								V(Ct, !H || xt, G ? "start" : U ? "continue" : void 0, St ? "start" : W ? "continue" : void 0, K), xt = !1, G = !1, St = !1, K = !1, q = i.voices[Ct], m === "staves" && J();
								break;
						}
					}
					break;
				case "maxstaves":
					var wt = e.getInt(l);
					wt.digits === 0 ? t("Expected number of staves in maxstaves") : wt.value > 0 && (a.formatting.maxStaves = wt.value);
					break;
				case "newpage":
					var X = e.getInt(l);
					o.addNewPage(X.digits === 0 ? -1 : X.value);
					break;
				case "abc":
					var Tt = l.split(" ");
					switch (Tt[0]) {
						case "-copyright":
						case "-creator":
						case "-edited-by":
						case "-version":
						case "-charset":
							var Et = Tt.shift();
							o.addMetaText(m + Et, Tt.join(" "), {
								startChar: i.iChar,
								endChar: i.iChar + l.length + 5
							});
							break;
						default: return "Unknown directive: " + m + Tt[0];
					}
					break;
				case "header":
				case "footer":
					var Z = e.getMeat(l, 0, l.length);
					Z = l.substring(Z.start, Z.end), Z[0] === "\"" && Z[Z.length - 1] === "\"" && (Z = Z.substring(1, Z.length - 1));
					var Q = Z.split("	"), $ = {};
					$ = Q.length === 1 ? {
						left: "",
						center: Q[0],
						right: ""
					} : Q.length === 2 ? {
						left: Q[0],
						center: Q[1],
						right: ""
					} : {
						left: Q[0],
						center: Q[1],
						right: Q[2]
					}, Q.length > 3 && t("Too many tabs in " + m + ": " + Q.length + " found.", l, 0), o.addMetaTextObj(m, $, {
						startChar: i.iChar,
						endChar: i.iChar + s.length
					});
					break;
				case "midi":
					var Dt = e.tokenize(l, 0, l.length, !0);
					Dt.length > 0 && Dt[0].token === "=" && Dt.shift(), Dt.length === 0 ? t("Expected midi command", l, 0) : M(Dt, a, l);
					break;
				case "percmap":
					var Ot = h(l);
					Ot.error ? t(Ot.error, s, 8) : (a.formatting.percmap || (a.formatting.percmap = {}), a.formatting.percmap[Ot.key] = Ot.value);
					break;
				case "visualtranspose":
					var kt = e.getInt(l);
					kt.digits === 0 ? t("Expected number of half steps in visualTranspose") : i.globalTranspose = kt.value;
					break;
				case "map":
				case "playtempo":
				case "auquality":
				case "continuous":
				case "nobarcheck":
					a.formatting[m] = l;
					break;
				default: return "Unknown directive: " + m;
			}
			return null;
		}, r.globalFormatting = function(n) {
			for (var r in n) if (n.hasOwnProperty(r)) {
				var o = "" + n[r], s = e.tokenize(o, 0, o.length), c;
				switch (r) {
					case "titlefont":
					case "gchordfont":
					case "composerfont":
					case "footerfont":
					case "headerfont":
					case "historyfont":
					case "infofont":
					case "measurefont":
					case "partsfont":
					case "repeatfont":
					case "subtitlefont":
					case "tempofont":
					case "textfont":
					case "voicefont":
					case "tripletfont":
					case "vocalfont":
					case "wordsfont":
					case "annotationfont":
					case "tablabelfont":
					case "tabnumberfont":
					case "tabgracefont":
						d(r, s, o);
						break;
					case "scale":
						p(r, s);
						break;
					case "partsbox":
						c = y("partsBox", r, s), c !== null && t(c), i.partsfont.box = i.partsBox;
						break;
					case "freegchord":
						c = y("freegchord", r, s), c !== null && t(c);
						break;
					case "fontboxpadding":
						(s.length !== 1 || s[0].type !== "number") && t("Directive \"" + r + "\" requires a number as a parameter."), a.formatting.fontboxpadding = s[0].floatt;
						break;
					case "stafftopmargin":
						(s.length !== 1 || s[0].type !== "number") && t("Directive \"" + r + "\" requires a number as a parameter."), a.formatting.stafftopmargin = s[0].floatt;
						break;
					case "stretchlast":
						var l = P(s);
						if (l.value !== void 0 && (a.formatting.stretchlast = l.value), l.error) return l.error;
						break;
					default: t("Formatting directive unrecognized: ", r, 0);
				}
			}
		};
		function P(e) {
			if (e.length === 0) return { value: 1 };
			if (e.length === 1) {
				if (e[0].type === "number") {
					if (e[0].floatt >= 0 || e[0].floatt <= 1) return { value: e[0].floatt };
				} else if (e[0].token === "false") return { value: 0 };
				else if (e[0].token === "true") return { value: 1 };
			}
			return { error: "Directive stretchlast requires zero or one parameter: false, true, or number between 0 and 1 (received " + e[0].token + ")" };
		}
	})(), t.exports = r;
})), require_all_notes = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = {}, r = /* @__PURE__ */ "C,,,.D,,,.E,,,.F,,,.G,,,.A,,,.B,,,.C,,.D,,.E,,.F,,.G,,.A,,.B,,.C,.D,.E,.F,.G,.A,.B,.C.D.E.F.G.A.B.c.d.e.f.g.a.b.c'.d'.e'.f'.g'.a'.b'.c''.d''.e''.f''.g''.a''.b''.c'''.d'''.e'''.f'''.g'''.a'''.b'''".split(".");
	n.pitchIndex = function(e) {
		return r.indexOf(e);
	}, n.noteName = function(e) {
		return r[e];
	}, t.exports = n;
})), require_transpose_chord = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = [
		"C",
		"C♯",
		"D",
		"D♯",
		"E",
		"F",
		"F♯",
		"G",
		"G♯",
		"A",
		"A♯",
		"B"
	], r = [
		"C",
		"D♭",
		"D",
		"E♭",
		"E",
		"F",
		"G♭",
		"G",
		"A♭",
		"A",
		"B♭",
		"B"
	], i = [
		"C",
		"C#",
		"D",
		"D#",
		"E",
		"F",
		"F#",
		"G",
		"G#",
		"A",
		"A#",
		"B"
	], a = [
		"C",
		"Db",
		"D",
		"Eb",
		"E",
		"F",
		"Gb",
		"G",
		"Ab",
		"A",
		"Bb",
		"B"
	];
	function o(e, t, o, s) {
		if (!t || t % 12 == 0) return e;
		for (; t < 0;) t += 12;
		t > 11 && (t %= 12);
		var c = e.match(/^([A-G][b#♭♯]?)([^\/]+)?\/?([A-G][b#♭♯]?)?(.+)?/);
		if (!c) return e;
		var l = c[1], u = c[2], d = c[3], f = c[4], p = n.indexOf(l);
		if (p < 0 && (p = r.indexOf(l)), p < 0 && (p = i.indexOf(l)), p < 0 && (p = a.indexOf(l)), p < 0) return e;
		p += t, p %= 12, e = o ? s ? a[p] : r[p] : s ? i[p] : n[p];
		var m = u && (u.indexOf("dim") >= 0 || u.indexOf("°") >= 0);
		if (m && e === "A#" && (e = "Bb"), m && e === "D#" && (e = "Eb"), m && e === "A♯" && (e = "B♭"), m && e === "D♯" && (e = "E♭"), u && (e += u), d) {
			var p = n.indexOf(d);
			p < 0 && (p = r.indexOf(d)), p < 0 && (p = i.indexOf(d)), p < 0 && (p = a.indexOf(d)), e += "/", p >= 0 ? (p += t, p %= 12, o ? s ? e += a[p] : e += r[p] : s ? e += i[p] : e += n[p]) : e += d;
		}
		return f && (e += f), e;
	}
	t.exports = o;
})), require_relative_major = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = {
		C: {
			modes: [
				"CMaj",
				"Amin",
				"Am",
				"GMix",
				"DDor",
				"EPhr",
				"FLyd",
				"BLoc"
			],
			stepsFromC: 0
		},
		Db: {
			modes: [
				"DbMaj",
				"Bbmin",
				"Bbm",
				"AbMix",
				"EbDor",
				"FPhr",
				"GbLyd",
				"CLoc"
			],
			stepsFromC: 1
		},
		D: {
			modes: [
				"DMaj",
				"Bmin",
				"Bm",
				"AMix",
				"EDor",
				"F#Phr",
				"GLyd",
				"C#Loc"
			],
			stepsFromC: 2
		},
		Eb: {
			modes: [
				"EbMaj",
				"Cmin",
				"Cm",
				"BbMix",
				"FDor",
				"GPhr",
				"AbLyd",
				"DLoc"
			],
			stepsFromC: 3
		},
		E: {
			modes: [
				"EMaj",
				"C#min",
				"C#m",
				"BMix",
				"F#Dor",
				"G#Phr",
				"ALyd",
				"D#Loc"
			],
			stepsFromC: 4
		},
		F: {
			modes: [
				"FMaj",
				"Dmin",
				"Dm",
				"CMix",
				"GDor",
				"APhr",
				"BbLyd",
				"ELoc"
			],
			stepsFromC: 5
		},
		Gb: {
			modes: [
				"GbMaj",
				"Ebmin",
				"Ebm",
				"DbMix",
				"AbDor",
				"BbPhr",
				"CbLyd",
				"FLoc"
			],
			stepsFromC: 6
		},
		G: {
			modes: [
				"GMaj",
				"Emin",
				"Em",
				"DMix",
				"ADor",
				"BPhr",
				"CLyd",
				"F#Loc"
			],
			stepsFromC: 7
		},
		Ab: {
			modes: [
				"AbMaj",
				"Fmin",
				"Fm",
				"EbMix",
				"BbDor",
				"CPhr",
				"DbLyd",
				"GLoc"
			],
			stepsFromC: 8
		},
		A: {
			modes: [
				"AMaj",
				"F#min",
				"F#m",
				"EMix",
				"BDor",
				"C#Phr",
				"DLyd",
				"G#Loc"
			],
			stepsFromC: 9
		},
		Bb: {
			modes: [
				"BbMaj",
				"Gmin",
				"Gm",
				"FMix",
				"CDor",
				"DPhr",
				"EbLyd",
				"ALoc"
			],
			stepsFromC: 10
		},
		B: {
			modes: [
				"BMaj",
				"G#min",
				"G#m",
				"F#Mix",
				"C#Dor",
				"D#Phr",
				"ELyd",
				"A#Loc"
			],
			stepsFromC: 11
		},
		"C#": {
			modes: [
				"C#Maj",
				"A#min",
				"A#m",
				"G#Mix",
				"D#Dor",
				"E#Phr",
				"F#Lyd",
				"B#Loc"
			],
			stepsFromC: 1
		},
		"F#": {
			modes: [
				"F#Maj",
				"D#min",
				"D#m",
				"C#Mix",
				"G#Dor",
				"A#Phr",
				"BLyd",
				"E#Loc"
			],
			stepsFromC: 6
		},
		Cb: {
			modes: [
				"CbMaj",
				"Abmin",
				"Abm",
				"GbMix",
				"DbDor",
				"EbPhr",
				"FbLyd",
				"BbLoc"
			],
			stepsFromC: 11
		}
	}, r = null;
	function i() {
		r = {};
		for (var e = Object.keys(n), t = 0; t < e.length; t++) {
			var i = n[e[t]];
			r[e[t].toLowerCase()] = e[t];
			for (var a = 0; a < i.modes.length; a++) {
				var o = i.modes[a].toLowerCase();
				r[o] = e[t];
			}
		}
	}
	function a(e) {
		r || i();
		var t = e.toLowerCase().match(/([a-g][b#]?)(maj|min|mix|dor|phr|lyd|loc|m)?/);
		return !t || !t[2] ? e : (t = t[1] + t[2], r[t] || e);
	}
	function o(e, t) {
		var r = n[e];
		if (!r || t === "") return e;
		var i = t.toLowerCase().match(/^(maj|min|mix|dor|phr|lyd|loc|m)/);
		if (!i) return e;
		for (var a = i[1], o = 0; o < r.modes.length; o++) {
			var s = r.modes[o], c = s.toLowerCase().indexOf(a);
			if (c !== -1 && c === s.length - a.length) return s.substring(0, s.length - a.length);
		}
		return e;
	}
	function s(e, t) {
		var r = n[e];
		if (!r) return e;
		for (; t < 0;) t += 12;
		for (var i = (r.stepsFromC + t) % 12, a = 0; a < Object.keys(n).length; a++) {
			var o = Object.keys(n)[a];
			if (n[o].stepsFromC === i) return o;
		}
		return e;
	}
	t.exports = {
		relativeMajor: a,
		relativeMode: o,
		transposeKey: s
	};
})), require_key_accidentals = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var { relativeMajor: n } = require_relative_major(), r = {
		acc: "sharp",
		note: "f"
	}, i = {
		acc: "sharp",
		note: "c"
	}, a = {
		acc: "sharp",
		note: "g"
	}, o = {
		acc: "sharp",
		note: "d"
	}, s = {
		acc: "sharp",
		note: "A"
	}, l = {
		acc: "sharp",
		note: "e"
	}, u = {
		acc: "sharp",
		note: "B"
	}, d = {
		acc: "flat",
		note: "B"
	}, f = {
		acc: "flat",
		note: "e"
	}, p = {
		acc: "flat",
		note: "A"
	}, m = {
		acc: "flat",
		note: "d"
	}, h = {
		acc: "flat",
		note: "G"
	}, g = {
		acc: "flat",
		note: "c"
	}, _ = {
		acc: "flat",
		note: "F"
	}, v = {
		"C#": [
			r,
			i,
			a,
			o,
			s,
			l,
			u
		],
		"F#": [
			r,
			i,
			a,
			o,
			s,
			l
		],
		B: [
			r,
			i,
			a,
			o,
			s
		],
		E: [
			r,
			i,
			a,
			o
		],
		A: [
			r,
			i,
			a
		],
		D: [r, i],
		G: [r],
		C: [],
		F: [d],
		Bb: [d, f],
		Eb: [
			d,
			f,
			p
		],
		Cm: [
			d,
			f,
			p
		],
		Ab: [
			d,
			f,
			p,
			m
		],
		Db: [
			d,
			f,
			p,
			m,
			h
		],
		Gb: [
			d,
			f,
			p,
			m,
			h,
			g
		],
		Cb: [
			d,
			f,
			p,
			m,
			h,
			g,
			_
		],
		"A#": [d, f],
		"B#": [],
		"D#": [
			d,
			f,
			p
		],
		"E#": [d],
		"G#": [
			d,
			f,
			p,
			m
		],
		none: []
	};
	function y(e) {
		var t = v[n(e)];
		return t ? JSON.parse(JSON.stringify(t)) : null;
	}
	t.exports = y;
})), require_abc_transpose = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_all_notes(), r = require_transpose_chord(), i = require_key_accidentals(), a = {}, c = {
		C: 0,
		"C#": 1,
		Db: 1,
		D: 2,
		"D#": 3,
		Eb: 3,
		E: 4,
		F: 5,
		"F#": 6,
		Gb: 6,
		G: 7,
		"G#": 8,
		Ab: 8,
		A: 9,
		"A#": 10,
		Bb: 10,
		B: 11
	}, u = [
		"C",
		"Db",
		"D",
		"Eb",
		"E",
		"F",
		"F#",
		"G",
		"Ab",
		"A",
		"Bb",
		"B"
	], d = [
		"C",
		"C#",
		"D",
		"D#",
		"E",
		"F",
		"F#",
		"G",
		"G#",
		"A",
		"Bb",
		"B"
	];
	a.keySignature = function(e, t, n, r, a) {
		if (e.clef.type === "perc" || e.clef.type === "none") return {
			accidentals: i(t),
			root: n,
			acc: r
		};
		a ||= 0, e.localTransposeVerticalMovement = 0, e.localTransposePreferFlats = !1;
		var o = i(t);
		if (!o) return e.key;
		if (e.localTranspose = (e.globalTranspose ? e.globalTranspose : 0) + a, !e.localTranspose) return {
			accidentals: o,
			root: n,
			acc: r
		};
		if (e.globalTransposeOrigKeySig = o, e.localTranspose % 12 == 0) return e.localTransposeVerticalMovement = e.localTranspose / 12 * 7, {
			accidentals: o,
			root: n,
			acc: r
		};
		var s = t[0];
		t[1] === "b" || t[1] === "#" ? (s += t[1], t = t.substr(2)) : t = t.substr(1);
		var l = c[s], f = l !== void 0;
		f || (l = 0, s = "C", t = "");
		for (var p = l + e.localTranspose; p < 0;) p += 12;
		p > 11 && (p %= 12);
		var m = t[0] === "m" ? d[p] : u[p], h = m + t, g = i(h);
		(g.length === 0 || g[0].acc === "flat") && (e.localTransposePreferFlats = !0);
		var _ = h.charCodeAt(0) - s.charCodeAt(0);
		return e.localTranspose > 0 ? (_ < 0 || _ === 0 && (s[1] === "#" || h[1] === "b")) && (_ += 7) : e.localTranspose < 0 && (_ > 0 || _ === 0 && (s[1] === "b" || h[1] === "#")) && (_ -= 7), e.localTranspose > 0 ? e.localTransposeVerticalMovement = _ + Math.floor(e.localTranspose / 12) * 7 : e.localTransposeVerticalMovement = _ + Math.ceil(e.localTranspose / 12) * 7, f ? {
			accidentals: g,
			root: m[0],
			acc: m.length > 1 ? m[1] : ""
		} : {
			accidentals: [],
			root: n,
			acc: r
		};
	}, a.chordName = function(e, t) {
		return r(t, e.localTranspose, e.localTransposePreferFlats, e.freegchord);
	};
	var f = [
		"c",
		"d",
		"e",
		"f",
		"g",
		"a",
		"b"
	];
	function p(e, t, n, r, i) {
		for (var a = f[(e + 49) % 7], o = 0, s = 0; s < r.length; s++) r[s].note.toLowerCase() === a && (o = m[r[s].acc]);
		for (var c = m[n] - o, l = f[(t + 49) % 7], u = 0, d = 0; d < i.accidentals.length; d++) i.accidentals[d].note.toLowerCase() === l && (u = m[i.accidentals[d].acc]);
		var p = c + u;
		return p < -2 && (t--, p += l === "c" || l === "f" ? 1 : 2), p > 2 && (t++, p -= l === "b" || l === "e" ? 1 : 2), [t, p];
	}
	var m = {
		dblflat: -2,
		flat: -1,
		natural: 0,
		sharp: 1,
		dblsharp: 2
	}, h = {
		"-2": "dblflat",
		"-1": "flat",
		0: "natural",
		1: "sharp",
		2: "dblsharp"
	}, g = {
		"-2": "__",
		"-1": "_",
		0: "=",
		1: "^",
		2: "^^"
	};
	a.note = function(e, t) {
		if (!(!e.localTranspose || e.clef.type === "perc")) {
			var r = t.pitch;
			if (e.localTransposeVerticalMovement && (t.pitch += e.localTransposeVerticalMovement, t.name)) {
				var i = t.accidental ? t.name.substring(1) : t.name, a = t.accidental ? t.name[0] : "", o = n.pitchIndex(i);
				t.name = a + n.noteName(o + e.localTransposeVerticalMovement);
			}
			if (t.accidental) {
				var s = p(r, t.pitch, t.accidental, e.globalTransposeOrigKeySig, e.targetKey);
				t.pitch = s[0], t.accidental = h[s[1]], t.name &&= g[s[1]] + t.name.replace(/[_^=]/g, "");
			}
		}
	}, t.exports = a;
})), require_abc_parse_key_voice = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_parse_directive(), r = require_abc_transpose(), i = {};
	(function() {
		var e, t, a, o;
		i.initialize = function(n, r, i, s, c) {
			e = n, t = r, a = i, o = c;
		}, i.standardKey = function(e, t, n, i) {
			return r.keySignature(a, e, t, n, i);
		};
		var s = {
			treble: {
				clef: "treble",
				pitch: 4,
				mid: 0
			},
			"treble+8": {
				clef: "treble+8",
				pitch: 4,
				mid: 0
			},
			"treble-8": {
				clef: "treble-8",
				pitch: 4,
				mid: 0
			},
			"treble^8": {
				clef: "treble+8",
				pitch: 4,
				mid: 0
			},
			treble_8: {
				clef: "treble-8",
				pitch: 4,
				mid: 0
			},
			treble1: {
				clef: "treble",
				pitch: 2,
				mid: 2
			},
			treble2: {
				clef: "treble",
				pitch: 4,
				mid: 0
			},
			treble3: {
				clef: "treble",
				pitch: 6,
				mid: -2
			},
			treble4: {
				clef: "treble",
				pitch: 8,
				mid: -4
			},
			treble5: {
				clef: "treble",
				pitch: 10,
				mid: -6
			},
			perc: {
				clef: "perc",
				pitch: 6,
				mid: 0
			},
			none: {
				clef: "none",
				mid: 0
			},
			bass: {
				clef: "bass",
				pitch: 8,
				mid: -12
			},
			"bass+8": {
				clef: "bass+8",
				pitch: 8,
				mid: -12
			},
			"bass-8": {
				clef: "bass-8",
				pitch: 8,
				mid: -12
			},
			"bass^8": {
				clef: "bass+8",
				pitch: 8,
				mid: -12
			},
			bass_8: {
				clef: "bass-8",
				pitch: 8,
				mid: -12
			},
			"bass+16": {
				clef: "bass",
				pitch: 8,
				mid: -12
			},
			"bass-16": {
				clef: "bass",
				pitch: 8,
				mid: -12
			},
			"bass^16": {
				clef: "bass",
				pitch: 8,
				mid: -12
			},
			bass_16: {
				clef: "bass",
				pitch: 8,
				mid: -12
			},
			bass1: {
				clef: "bass",
				pitch: 2,
				mid: -6
			},
			bass2: {
				clef: "bass",
				pitch: 4,
				mid: -8
			},
			bass3: {
				clef: "bass",
				pitch: 6,
				mid: -10
			},
			bass4: {
				clef: "bass",
				pitch: 8,
				mid: -12
			},
			bass5: {
				clef: "bass",
				pitch: 10,
				mid: -14
			},
			tenor: {
				clef: "alto",
				pitch: 8,
				mid: -8
			},
			tenor1: {
				clef: "alto",
				pitch: 2,
				mid: -2
			},
			tenor2: {
				clef: "alto",
				pitch: 4,
				mid: -4
			},
			tenor3: {
				clef: "alto",
				pitch: 6,
				mid: -6
			},
			tenor4: {
				clef: "alto",
				pitch: 8,
				mid: -8
			},
			tenor5: {
				clef: "alto",
				pitch: 10,
				mid: -10
			},
			alto: {
				clef: "alto",
				pitch: 6,
				mid: -6
			},
			alto1: {
				clef: "alto",
				pitch: 2,
				mid: -2
			},
			alto2: {
				clef: "alto",
				pitch: 4,
				mid: -4
			},
			alto3: {
				clef: "alto",
				pitch: 6,
				mid: -6
			},
			alto4: {
				clef: "alto",
				pitch: 8,
				mid: -8
			},
			alto5: {
				clef: "alto",
				pitch: 10,
				mid: -10
			},
			"alto+8": {
				clef: "alto+8",
				pitch: 6,
				mid: -6
			},
			"alto-8": {
				clef: "alto-8",
				pitch: 6,
				mid: -6
			},
			"alto^8": {
				clef: "alto+8",
				pitch: 6,
				mid: -6
			},
			alto_8: {
				clef: "alto-8",
				pitch: 6,
				mid: -6
			}
		}, c = function(e, t) {
			var n = s[e];
			return (n ? n.mid : 0) + t;
		};
		i.fixClef = function(e) {
			var t = s[e.type];
			t && (e.clefPos = t.pitch, e.type = t.clef);
		}, i.deepCopyKey = function(e) {
			var t = {
				accidentals: [],
				root: e.root,
				acc: e.acc,
				mode: e.mode
			};
			return e.accidentals.forEach(function(e) {
				t.accidentals.push(Object.assign({}, e));
			}), t;
		};
		var l = {
			A: 5,
			B: 6,
			C: 0,
			D: 1,
			E: 2,
			F: 3,
			G: 4,
			a: 12,
			b: 13,
			c: 7,
			d: 8,
			e: 9,
			f: 10,
			g: 11
		};
		i.addPosToKey = function(e, t) {
			var n = e.verticalPos;
			t.accidentals.forEach(function(e) {
				var t = l[e.note];
				t -= n, e.verticalPos = t;
			}), t.impliedNaturals && t.impliedNaturals.forEach(function(e) {
				var t = l[e.note];
				t -= n, e.verticalPos = t;
			}), n < -10 ? (t.accidentals.forEach(function(e) {
				e.verticalPos -= 7, (e.verticalPos >= 11 || e.verticalPos === 10 && e.acc === "flat") && (e.verticalPos -= 7), e.note === "A" && e.acc === "sharp" && (e.verticalPos -= 7), (e.note === "G" || e.note === "F") && e.acc === "flat" && (e.verticalPos -= 7);
			}), t.impliedNaturals && t.impliedNaturals.forEach(function(e) {
				e.verticalPos -= 7, (e.verticalPos >= 11 || e.verticalPos === 10 && e.acc === "flat") && (e.verticalPos -= 7), e.note === "A" && e.acc === "sharp" && (e.verticalPos -= 7), (e.note === "G" || e.note === "F") && e.acc === "flat" && (e.verticalPos -= 7);
			})) : n < -4 ? (t.accidentals.forEach(function(e) {
				e.verticalPos -= 7, n === -8 && (e.note === "f" || e.note === "g") && e.acc === "sharp" && (e.verticalPos -= 7);
			}), t.impliedNaturals && t.impliedNaturals.forEach(function(e) {
				e.verticalPos -= 7, n === -8 && (e.note === "f" || e.note === "g") && e.acc === "sharp" && (e.verticalPos -= 7);
			})) : n >= 7 && (t.accidentals.forEach(function(e) {
				e.verticalPos += 7;
			}), t.impliedNaturals && t.impliedNaturals.forEach(function(e) {
				e.verticalPos += 7;
			}));
		}, i.fixKey = function(e, t) {
			var n = Object.assign({}, t);
			return i.addPosToKey(e, n), n;
		};
		var u = function(e) {
			var t = 0, n = e[t++];
			(n === "^" || n === "_") && (n = e[t++]);
			var r = l[n];
			for (r === void 0 && (r = 6); t < e.length; t++) if (e[t] === ",") r -= 7;
			else if (e[t] === "'") r += 7;
			else break;
			return {
				mid: r - 6,
				str: e.substring(t)
			};
		}, d = function(e) {
			for (var t = 0; t < e.length; t++) e[t].note === "b" ? e[t].note = "B" : e[t].note === "a" ? e[t].note = "A" : e[t].note === "F" ? e[t].note = "f" : e[t].note === "E" ? e[t].note = "e" : e[t].note === "D" ? e[t].note = "d" : e[t].note === "C" ? e[t].note = "c" : e[t].note === "G" && e[t].acc === "sharp" ? e[t].note = "g" : e[t].note === "g" && e[t].acc === "flat" && (e[t].note = "G");
		};
		i.parseKey = function(r, o) {
			r.length === 0 && (r = "none");
			var s = e.tokenize(r, 0, r.length), l = {};
			if (s.length === 0) return t("Must pass in key signature.", r, 0), l;
			switch (s[0].token) {
				case "HP":
					n.addDirective("bagpipes"), a.key = {
						root: "HP",
						accidentals: [],
						acc: "",
						mode: ""
					}, l.foundKey = !0, s.shift();
					break;
				case "Hp":
					n.addDirective("bagpipes"), a.key = {
						root: "Hp",
						accidentals: [
							{
								acc: "natural",
								note: "g"
							},
							{
								acc: "sharp",
								note: "f"
							},
							{
								acc: "sharp",
								note: "c"
							}
						],
						acc: "",
						mode: ""
					}, l.foundKey = !0, s.shift();
					break;
				case "none":
					a.key = {
						root: "none",
						accidentals: [],
						acc: "",
						mode: ""
					}, l.foundKey = !0, s.shift();
					break;
				default:
					var u = e.getKeyPitch(s[0].token);
					if (u.len > 0) {
						l.foundKey = !0;
						var f = "", p = "";
						s[0].token.length > 1 ? s[0].token = s[0].token.substring(1) : s.shift();
						var m = u.token;
						if (s.length > 0) {
							var h = e.getSharpFlat(s[0].token);
							if (h.len > 0 && (s[0].token.length > 1 ? s[0].token = s[0].token.substring(1) : s.shift(), m += h.token, f = h.token), s.length > 0) {
								var g = e.getMode(s[0].token);
								g.len > 0 && (s.shift(), m += g.token, p = g.token);
							}
							if (i.standardKey(m, u.token, f, 0) === void 0) return t("Unsupported key signature: " + m, r, 0), l;
						}
						var _ = i.deepCopyKey(a.key), v = !o && a.globalTranspose ? -a.globalTranspose : 0, y;
						if (o && (y = a.globalTransposeOrigKeySig), a.key = i.deepCopyKey(i.standardKey(m, u.token, f, v)), o && (a.globalTransposeOrigKeySig = y), a.key.mode = p, _ && a.keywarn !== !1) {
							for (var b, x = 0; x < a.key.accidentals.length; x++) for (b = 0; b < _.accidentals.length; b++) _.accidentals[b].note && a.key.accidentals[x].note.toLowerCase() === _.accidentals[b].note.toLowerCase() && (_.accidentals[b].note = null);
							for (b = 0; b < _.accidentals.length; b++) _.accidentals[b].note && (a.key.impliedNaturals || (a.key.impliedNaturals = []), a.key.impliedNaturals.push({
								acc: "natural",
								note: _.accidentals[b].note
							}));
						}
					}
					break;
			}
			if (s.length === 0 || (s[0].token === "exp" && s.shift(), s.length === 0) || (s[0].token === "oct" && s.shift(), s.length === 0)) return l;
			var S = e.getKeyAccidentals2(s);
			if (S.warn && t(S.warn, r, 0), S.accs) {
				l.foundKey || (l.foundKey = !0, a.key = {
					root: "none",
					acc: "",
					mode: "",
					accidentals: []
				}), d(S.accs);
				for (var C = 0; C < S.accs.length; C++) {
					for (var w = !1, T = 0; T < a.key.accidentals.length && !w; T++) a.key.accidentals[T].note === S.accs[C].note && (w = !0, a.key.accidentals[T].acc !== S.accs[C].acc && (a.key.accidentals[T].acc = S.accs[C].acc, a.key.explicitAccidentals || (a.key.explicitAccidentals = []), a.key.explicitAccidentals.push(S.accs[C])));
					if (!w && (a.key.explicitAccidentals || (a.key.explicitAccidentals = []), a.key.explicitAccidentals.push(S.accs[C]), a.key.accidentals.push(S.accs[C]), a.key.impliedNaturals)) for (var E = 0; E < a.key.impliedNaturals.length; E++) a.key.impliedNaturals[E].note === S.accs[C].note && a.key.impliedNaturals.splice(E, 1);
				}
			}
			for (var D; s.length > 0;) switch (s[0].token) {
				case "m":
				case "middle":
					if (s.shift(), s.length === 0) return t("Expected = after middle", r, 0), l;
					if (D = s.shift(), D.token !== "=") {
						t("Expected = after middle", r, D.start);
						break;
					}
					if (s.length === 0) return t("Expected parameter after middle=", r, 0), l;
					var O = e.getPitchFromTokens(s);
					O.warn && t(O.warn, r, 0), O.position && (a.clef.verticalPos = O.position - 6);
					break;
				case "transpose":
					if (s.shift(), s.length === 0) return t("Expected = after transpose", r, 0), l;
					if (D = s.shift(), D.token !== "=") {
						t("Expected = after transpose", r, D.start);
						break;
					}
					if (s.length === 0) return t("Expected parameter after transpose=", r, 0), l;
					if (s[0].type !== "number") {
						t("Expected number after transpose", r, s[0].start);
						break;
					}
					a.clef.transpose = s[0].intt, s.shift();
					break;
				case "stafflines":
					if (s.shift(), s.length === 0) return t("Expected = after stafflines", r, 0), l;
					if (D = s.shift(), D.token !== "=") {
						t("Expected = after stafflines", r, D.start);
						break;
					}
					if (s.length === 0) return t("Expected parameter after stafflines=", r, 0), l;
					if (s[0].type !== "number") {
						t("Expected number after stafflines", r, s[0].start);
						break;
					}
					a.clef.stafflines = s[0].intt, s.shift();
					break;
				case "staffscale":
					if (s.shift(), s.length === 0) return t("Expected = after staffscale", r, 0), l;
					if (D = s.shift(), D.token !== "=") {
						t("Expected = after staffscale", r, D.start);
						break;
					}
					if (s.length === 0) return t("Expected parameter after staffscale=", r, 0), l;
					if (s[0].type !== "number") {
						t("Expected number after staffscale", r, s[0].start);
						break;
					}
					a.clef.staffscale = s[0].floatt, s.shift();
					break;
				case "octave":
					if (s.shift(), s.length === 0) return t("Expected = after octave", r, 0), l;
					if (D = s.shift(), D.token !== "=") {
						t("Expected = after octave", r, D.start);
						break;
					}
					if (s.length === 0) return t("Expected parameter after octave=", r, 0), l;
					if (s[0].type !== "number") {
						t("Expected number after octave", r, s[0].start);
						break;
					}
					a.octave = s[0].intt, s.shift();
					break;
				case "style":
					if (s.shift(), s.length === 0) return t("Expected = after style", r, 0), l;
					if (D = s.shift(), D.token !== "=") {
						t("Expected = after style", r, D.start);
						break;
					}
					if (s.length === 0) return t("Expected parameter after style=", r, 0), l;
					switch (s[0].token) {
						case "normal":
						case "harmonic":
						case "rhythm":
						case "x":
						case "triangle":
							a.style = s[0].token, s.shift();
							break;
						default:
							t("error parsing style element: " + s[0].token, r, s[0].start);
							break;
					}
					break;
				case "clef":
					if (s.shift(), s.length === 0) return t("Expected = after clef", r, 0), l;
					if (D = s.shift(), D.token !== "=") {
						t("Expected = after clef", r, D.start);
						break;
					}
					if (s.length === 0) return t("Expected parameter after clef=", r, 0), l;
				case "treble":
				case "bass":
				case "alto":
				case "tenor":
				case "perc":
				case "none":
					var k = s.shift();
					switch (k.token) {
						case "treble":
						case "tenor":
						case "alto":
						case "bass":
						case "perc":
						case "none": break;
						case "C":
							k.token = "alto";
							break;
						case "F":
							k.token = "bass";
							break;
						case "G":
							k.token = "treble";
							break;
						case "c":
							k.token = "alto";
							break;
						case "f":
							k.token = "bass";
							break;
						case "g":
							k.token = "treble";
							break;
						default:
							t("Expected clef name. Found " + k.token, r, k.start);
							break;
					}
					s.length > 0 && s[0].type === "number" && (k.token += s[0].token, s.shift()), s.length > 1 && (s[0].token === "-" || s[0].token === "+" || s[0].token === "^" || s[0].token === "_") && s[1].token === "8" && (k.token += s[0].token + s[1].token, s.shift(), s.shift()), a.clef = {
						type: k.token,
						verticalPos: c(k.token, 0)
					}, a.currentVoice && a.currentVoice.transpose !== void 0 && (a.clef.transpose = a.currentVoice.transpose), l.foundClef = !0;
					break;
				default: t("Unknown parameter: " + s[0].token, r, s[0].start), s.shift();
			}
			return l;
		};
		var f = function(e) {
			var t = a.voices[e];
			if (!(a.currentVoice && a.currentVoice.index === t.index && a.currentVoice.staffNum === t.staffNum)) return a.currentVoice = t, o.setCurrentVoice(t.staffNum, t.index, e);
		};
		i.parseVoice = function(n, r, i) {
			var o = e.getMeat(n, r, i), s = o.start, l = o.end, d = e.getToken(n, s, l);
			if (d.length === 0) {
				t("Expected a voice id", n, s);
				return;
			}
			var p = !1;
			a.voices[d] === void 0 && (a.voices[d] = {}, p = !0, a.score_is_present && t("Can't have an unknown V: id when the %score directive is present", n, s)), s += d.length, s += e.eatWhiteSpace(n, s);
			for (var m = { startStaff: p }, h = function(r) {
				var i = e.getVoiceToken(n, s, l);
				i.warn === void 0 ? i.err === void 0 ? i.token.length === 0 && n[s] !== "\"" ? t("Expected value for " + r + " in voice", n, s) : m[r] = i.token : t("Expected value for " + r + " in voice: " + i.err, n, s) : t("Expected value for " + r + " in voice: " + i.warn, n, s), s += i.len;
			}, g = function(r, i, o) {
				var c = e.getVoiceToken(n, s, l);
				c.warn === void 0 ? c.err === void 0 ? c.token.length === 0 && n[s] !== "\"" ? t("Expected value for " + i + " in voice", n, s) : (o === "number" && (c.token = parseFloat(c.token)), a.voices[r][i] = c.token) : t("Expected value for " + i + " in voice: " + c.err, n, s) : t("Expected value for " + i + " in voice: " + c.warn, n, s), s += c.len;
			}, _ = function(r, i) {
				var a = e.getVoiceToken(n, s, l);
				if (a.warn !== void 0) t("Expected value for " + r + " in voice: " + a.warn, n, s);
				else if (a.err !== void 0) t("Expected value for " + r + " in voice: " + a.err, n, s);
				else if (a.token.length === 0 && n[s] !== "\"") t("Expected value for " + r + " in voice", n, s);
				else return i === "number" && (a.token = parseFloat(a.token)), a.token;
				s += a.len;
			}, v = function(r, i) {
				var o = {
					_B: 2,
					_E: 9,
					_b: -10,
					_e: -3
				}, c = e.getVoiceToken(n, s, l);
				if (c.warn !== void 0) t("Expected one of (_B, _E, _b, _e) for " + i + " in voice: " + c.warn, n, s);
				else if (c.token.length === 0 && n[s] !== "\"") t("Expected one of (_B, _E, _b, _e) for " + i + " in voice", n, s);
				else {
					var u = o[c.token];
					u ? a.voices[r][i] = u : t("Expected one of (_B, _E, _b, _e) for " + i + " in voice", n, s);
				}
				s += c.len;
			}; s < l;) {
				var y = e.getVoiceToken(n, s, l);
				if (s += y.len, y.warn) t("Error parsing voice: " + y.warn, n, s);
				else {
					var b = null;
					switch (y.token) {
						case "clef":
						case "cl":
							h("clef");
							var x = 0;
							m.clef !== void 0 && (m.clef = m.clef.replace(/[',]/g, ""), m.clef.indexOf("+16") !== -1 && (x += 14, m.clef = m.clef.replace("+16", "")), m.verticalPos = c(m.clef, x));
							break;
						case "treble":
						case "bass":
						case "tenor":
						case "alto":
						case "perc":
						case "none":
						case "treble'":
						case "bass'":
						case "tenor'":
						case "alto'":
						case "none'":
						case "treble''":
						case "bass''":
						case "tenor''":
						case "alto''":
						case "none''":
						case "treble,":
						case "bass,":
						case "tenor,":
						case "alto,":
						case "none,":
						case "treble,,":
						case "bass,,":
						case "tenor,,":
						case "alto,,":
						case "none,,":
						case "treble+8":
						case "treble-8":
						case "treble^8":
						case "treble_8":
						case "treble1":
						case "treble2":
						case "treble3":
						case "treble4":
						case "treble5":
						case "bass+8":
						case "bass-8":
						case "bass^8":
						case "bass_8":
						case "bass+16":
						case "bass-16":
						case "bass^16":
						case "bass_16":
						case "bass1":
						case "bass2":
						case "bass3":
						case "bass4":
						case "bass5":
						case "tenor1":
						case "tenor2":
						case "tenor3":
						case "tenor4":
						case "tenor5":
						case "alto1":
						case "alto2":
						case "alto3":
						case "alto4":
						case "alto5":
						case "alto+8":
						case "alto-8":
						case "alto^8":
						case "alto_8":
							m.clef = y.token.replace(/[',]/g, ""), m.verticalPos = c(m.clef, 0), a.voices[d].clef = y.token;
							break;
						case "staves":
						case "stave":
						case "stv":
							h("staves");
							break;
						case "brace":
						case "brc":
							h("brace");
							break;
						case "bracket":
						case "brk":
							h("bracket");
							break;
						case "name":
						case "nm":
							h("name");
							break;
						case "subname":
						case "sname":
						case "snm":
							h("subname");
							break;
						case "merge":
							m.startStaff = !1;
							break;
						case "stem":
						case "stems":
							b = e.getVoiceToken(n, s, l), b.warn === void 0 ? b.err === void 0 ? b.token === "up" || b.token === "down" ? a.voices[d].stem = b.token : t("Expected up or down for voice stem", n, s) : t("Expected value for stems in voice: " + b.err, n, s) : t("Expected value for stems in voice: " + b.warn, n, s), s += b.len;
							break;
						case "up":
						case "down":
							a.voices[d].stem = y.token;
							break;
						case "middle":
						case "m":
							h("verticalPos"), m.verticalPos = u(m.verticalPos).mid;
							break;
						case "gchords":
						case "gch":
							a.voices[d].suppressChords = !0, b = e.getVoiceToken(n, s, l), b.token === "0" && (s += b.len);
							break;
						case "space":
						case "spc":
							h("spacing");
							break;
						case "scale":
							g(d, "scale", "number");
							break;
						case "score":
							v(d, "scoreTranspose");
							break;
						case "transpose":
							g(d, "transpose", "number");
							break;
						case "stafflines":
							g(d, "stafflines", "number");
							break;
						case "staffscale":
							g(d, "staffscale", "number");
							break;
						case "octave":
							g(d, "octave", "number");
							break;
						case "volume":
							g(d, "volume", "number");
							break;
						case "cue":
							_("cue", "string") === "on" ? a.voices[d].scale = .6 : a.voices[d].scale = 1;
							break;
						case "style":
							b = e.getVoiceToken(n, s, l), b.warn === void 0 ? b.err === void 0 ? b.token === "normal" || b.token === "harmonic" || b.token === "rhythm" || b.token === "x" || b.token === "triangle" ? a.voices[d].style = b.token : t("Expected one of [normal, harmonic, rhythm, x, triangle] for voice style", n, s) : t("Expected value for style in voice: " + b.err, n, s) : t("Expected value for style in voice: " + b.warn, n, s), s += b.len;
							break;
					}
				}
				s += e.eatWhiteSpace(n, s);
			}
			if ((m.startStaff || a.staves.length === 0) && (a.staves.push({
				index: a.staves.length,
				meter: a.origMeter
			}), a.score_is_present || (a.staves[a.staves.length - 1].numVoices = 0)), a.voices[d].staffNum === void 0) {
				a.voices[d].staffNum = a.staves.length - 1;
				var S = 0;
				for (var C in a.voices) a.voices.hasOwnProperty(C) && a.voices[C].staffNum === a.voices[d].staffNum && S++;
				a.voices[d].index = S - 1;
			}
			var w = a.staves[a.voices[d].staffNum];
			return a.score_is_present || w.numVoices++, m.clef && (w.clef = {
				type: m.clef,
				verticalPos: m.verticalPos
			}), m.spacing && (w.spacing_below_offset = m.spacing), m.verticalPos && (w.verticalPos = m.verticalPos), m.name && (w.name ? w.name.push(m.name) : w.name = [m.name]), m.subname && (w.subname ? w.subname.push(m.subname) : w.subname = [m.subname]), f(d);
		};
	})(), t.exports = i;
})), require_abc_parse_header = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_common(), r = require_abc_parse_directive(), o = require_abc_parse_key_voice();
	t.exports = function(e, t, i, a, s) {
		this.reset = function(e, t, n, i) {
			o.initialize(e, t, n, i, s), r.initialize(e, t, n, i, s);
		}, this.reset(e, t, i, a), this.setTitle = function(e, t) {
			i.hasMainTitle ? s.addSubtitle(e, {
				startChar: i.iChar,
				endChar: i.iChar + t + 2
			}) : (s.addMetaText("title", e, {
				startChar: i.iChar,
				endChar: i.iChar + t + 2
			}), i.hasMainTitle = !0);
		}, this.setMeter = function(n) {
			if (n = e.stripComment(n), n === "C") return i.havent_set_length === !0 && (i.default_length = .125, i.havent_set_length = !1), { type: "common_time" };
			if (n === "C|") return i.havent_set_length === !0 && (i.default_length = .125, i.havent_set_length = !1), { type: "cut_time" };
			if (n === "o") return i.havent_set_length === !0 && (i.default_length = .125, i.havent_set_length = !1), { type: "tempus_perfectum" };
			if (n === "c") return i.havent_set_length === !0 && (i.default_length = .125, i.havent_set_length = !1), { type: "tempus_imperfectum" };
			if (n === "o.") return i.havent_set_length === !0 && (i.default_length = .125, i.havent_set_length = !1), { type: "tempus_perfectum_prolatio" };
			if (n === "c.") return i.havent_set_length === !0 && (i.default_length = .125, i.havent_set_length = !1), { type: "tempus_imperfectum_prolatio" };
			if (n.length === 0 || n.toLowerCase() === "none") return i.havent_set_length === !0 && (i.default_length = .125, i.havent_set_length = !1), null;
			var r = e.tokenize(n, 0, n.length);
			try {
				var a = function() {
					var e = {
						value: 0,
						num: ""
					}, t = r.shift();
					for (t.token === "(" && (t = r.shift());;) {
						if (t.type !== "number") throw "Expected top number of meter";
						if (e.value += parseInt(t.token), e.num += t.token, r.length === 0 || r[0].token === "/") return e;
						if (t = r.shift(), t.token === ")") {
							if (r.length === 0 || r[0].token === "/") return e;
							throw "Unexpected paren in meter";
						}
						if (t.token !== "." && t.token !== "+" || (e.num += t.token, r.length === 0)) throw "Expected top number of meter";
						t = r.shift();
					}
					return e;
				}, o = function() {
					var e = a();
					if (r.length === 0) return e;
					var t = r.shift();
					if (t.token !== "/") throw "Expected slash in meter";
					if (t = r.shift(), t.type !== "number") throw "Expected bottom number of meter";
					return e.den = t.token, e.value /= parseInt(e.den), e;
				};
				if (r.length === 0) throw "Expected meter definition in M: line";
				for (var s = {
					type: "specified",
					value: []
				}, c = 0;;) {
					var l = o();
					c += l.value;
					var u = { num: l.num };
					if (l.den !== void 0 && (u.den = l.den), s.value.push(u), r.length === 0) break;
				}
				return i.havent_set_length === !0 && (i.default_length = c < .75 ? .0625 : .125, i.havent_set_length = !1), s;
			} catch (e) {
				t(e, n, 0);
			}
			return null;
		}, this.calcTempo = function(e) {
			var t = 1 / 4;
			i.meter && i.meter.type === "specified" ? t = 1 / parseInt(i.meter.value[0].den) : i.origMeter && i.origMeter.type === "specified" && (t = 1 / parseInt(i.origMeter.value[0].den));
			for (var n = 0; n < e.duration; n++) e.duration[n] = t * e.duration[n];
			return e;
		}, this.resolveTempo = function() {
			i.tempo && (this.calcTempo(i.tempo), a.metaText.tempo = i.tempo, delete i.tempo);
		}, this.addUserDefinition = function(e, r, a) {
			var o = e.indexOf("=", r);
			if (o === -1) {
				t("Need an = in a macro definition", e, r);
				return;
			}
			var s = n.strip(e.substring(r, o)), c = n.strip(e.substring(o + 1));
			if (s.length !== 1) {
				t("Macro definitions can only be one character", e, r);
				return;
			}
			if ("HIJKLMNOPQRSTUVWXYhijklmnopqrstuvw~".indexOf(s) === -1) {
				t("Macro definitions must be H-Y, h-w, or tilde", e, r);
				return;
			}
			if (c.length === 0) {
				t("Missing macro definition", e, r);
				return;
			}
			i.macros === void 0 && (i.macros = {}), i.macros[s] = c;
		}, this.setDefaultLength = function(e, t, n) {
			var r = e.substring(t, n).replace(/ /g, "").split("/");
			if (r.length === 2) {
				var a = parseInt(r[0]), o = parseInt(r[1]);
				o > 0 && (i.default_length = a / o, i.havent_set_length = !1);
			} else r.length === 1 && r[0] === "1" && (i.default_length = 1, i.havent_set_length = !1);
		};
		var c = {
			larghissimo: 20,
			adagissimo: 24,
			sostenuto: 28,
			grave: 32,
			largo: 40,
			lento: 50,
			larghetto: 60,
			adagio: 68,
			adagietto: 74,
			andante: 80,
			andantino: 88,
			"marcia moderato": 84,
			"andante moderato": 100,
			moderato: 112,
			allegretto: 116,
			"allegro moderato": 120,
			allegro: 126,
			animato: 132,
			agitato: 140,
			veloce: 148,
			"mosso vivo": 156,
			vivace: 164,
			vivacissimo: 172,
			allegrissimo: 176,
			presto: 184,
			prestissimo: 210
		};
		this.setTempo = function(n, r, a, o) {
			try {
				var s = e.tokenize(n, r, a);
				if (s.length === 0) throw "Missing parameter in Q: field";
				var l = {
					startChar: o + r - 2,
					endChar: o + a
				}, u = !0, d = s.shift();
				if (d.type === "quote" && (l.preString = d.token, d = s.shift(), s.length === 0)) return c[l.preString.toLowerCase()] && (l.bpm = c[l.preString.toLowerCase()], l.suppressBpm = !0), {
					type: "immediate",
					tempo: l
				};
				if (d.type === "alpha" && d.token === "C") {
					if (s.length === 0) throw "Missing tempo after C in Q: field";
					if (d = s.shift(), d.type === "punct" && d.token === "=") {
						if (s.length === 0) throw "Missing tempo after = in Q: field";
						if (d = s.shift(), d.type !== "number") throw "Expected number after = in Q: field";
						l.duration = [1], l.bpm = parseInt(d.token);
					} else if (d.type === "number") {
						if (l.duration = [parseInt(d.token)], s.length === 0) throw "Missing = after duration in Q: field";
						if (d = s.shift(), d.type !== "punct" || d.token !== "=") throw "Expected = after duration in Q: field";
						if (s.length === 0) throw "Missing tempo after = in Q: field";
						if (d = s.shift(), d.type !== "number") throw "Expected number after = in Q: field";
						l.bpm = parseInt(d.token);
					} else throw "Expected number or equal after C in Q: field";
				} else if (d.type === "number") {
					var f = parseInt(d.token);
					if (s.length === 0 || s[0].type === "quote") l.duration = [1], l.bpm = f;
					else {
						if (u = !1, d = s.shift(), d.type !== "punct" && d.token !== "/" || (d = s.shift(), d.type !== "number")) throw "Expected fraction in Q: field";
						var p = parseInt(d.token);
						for (l.duration = [f / p]; s.length > 0 && s[0].token !== "=" && s[0].type !== "quote";) {
							if (d = s.shift(), d.type !== "number" || (f = parseInt(d.token), d = s.shift(), d.type !== "punct" && d.token !== "/") || (d = s.shift(), d.type !== "number")) throw "Expected fraction in Q: field";
							p = parseInt(d.token), l.duration.push(f / p);
						}
						if (d = s.shift(), d.type !== "punct" && d.token !== "=") throw "Expected = in Q: field";
						if (d = s.shift(), d.type !== "number") throw "Expected tempo in Q: field";
						l.bpm = parseInt(d.token);
					}
				} else throw "Unknown value in Q: field";
				if (s.length !== 0 && (d = s.shift(), d.type === "quote" && (l.postString = d.token, d = s.shift()), s.length !== 0)) throw "Unexpected string at end of Q: field";
				return i.printTempo === !1 && (l.suppress = !0), {
					type: u ? "delaySet" : "immediate",
					tempo: l
				};
			} catch (e) {
				return t(e, n, r), { type: "none" };
			}
		}, this.letter_to_inline_header = function(n, c, l) {
			var u = !1, d = e.eatWhiteSpace(n, c);
			if (c += d, n.length >= c + 5 && n[c] === "[" && n[c + 2] === ":") {
				var f = n.indexOf("]", c), p = i.iChar + c, m = i.iChar + f + 1;
				switch (n.substring(c, c + 3)) {
					case "[I:":
						var h = r.addDirective(n.substring(c + 3, f));
						return h && t(h, n, c), [f - c + 1 + d];
					case "[M:":
						var g = this.setMeter(n.substring(c + 3, f));
						return s.hasBeginMusic() && g ? s.appendStartingElement("meter", p, m, g) : i.meter = g, [f - c + 1 + d];
					case "[K:":
						var _ = o.parseKey(n.substring(c + 3, f), !0);
						return _.foundClef && s.hasBeginMusic() && s.appendStartingElement("clef", p, m, i.clef), _.foundKey && s.hasBeginMusic() && s.appendStartingElement("key", p, m, o.fixKey(i.clef, i.key)), [f - c + 1 + d];
					case "[P:":
						var v = r.parseFontChangeLine(n.substring(c + 3, f));
						return l || a.lines.length <= a.lineNum ? i.partForNextLine = {
							title: v,
							startChar: p,
							endChar: m
						} : s.appendElement("part", p, m, { title: v }), [f - c + 1 + d];
					case "[L:": return this.setDefaultLength(n, c + 3, f), [f - c + 1 + d];
					case "[Q:":
						if (f > 0) {
							var y = this.setTempo(n, c + 3, f, i.iChar);
							return y.type === "delaySet" ? s.hasBeginMusic() ? s.appendElement("tempo", p, m, this.calcTempo(y.tempo)) : i.tempoForNextLine = [
								"tempo",
								p,
								m,
								this.calcTempo(y.tempo)
							] : y.type === "immediate" && (!l && s.hasBeginMusic() ? s.appendElement("tempo", p, m, y.tempo) : i.tempoForNextLine = [
								"tempo",
								p,
								m,
								y.tempo
							]), [
								f - c + 1 + d,
								n[c + 1],
								n.substring(c + 3, f)
							];
						}
						break;
					case "[V:":
						if (f > 0) return u = o.parseVoice(n, c + 3, f), [
							f - c + 1 + d,
							n[c + 1],
							n.substring(c + 3, f),
							u
						];
						break;
					case "[r:": return [f - c + 1 + d];
					default:
				}
			}
			return [0];
		}, this.letter_to_body_header = function(e, a) {
			var c = !1;
			if (e.length >= a + 3) switch (e.substring(a, a + 2)) {
				case "I:":
					var l = r.addDirective(e.substring(a + 2));
					return l && t(l, e, a), [e.length];
				case "M:":
					var u = this.setMeter(e.substring(a + 2));
					return s.hasBeginMusic() && u && s.appendStartingElement("meter", i.iChar + a, i.iChar + e.length, u), [e.length];
				case "K:":
					var d = o.parseKey(e.substring(a + 2), s.hasBeginMusic());
					return d.foundClef && s.hasBeginMusic() && i.keywarn !== !1 && s.appendStartingElement("clef", i.iChar + a, i.iChar + e.length, i.clef), d.foundKey && s.hasBeginMusic() && i.keywarn !== !1 && s.appendStartingElement("key", i.iChar + a, i.iChar + e.length, o.fixKey(i.clef, i.key)), [e.length];
				case "P:": return s.hasBeginMusic() && s.appendElement("part", i.iChar + a, i.iChar + e.length, { title: e.substring(a + 2) }), [e.length];
				case "L:": return this.setDefaultLength(e, a + 2, e.length), [e.length];
				case "Q:":
					var f = e.indexOf("", a + 2);
					f === -1 && (f = e.length);
					var p = this.setTempo(e, a + 2, f, i.iChar);
					return p.type === "delaySet" ? s.appendElement("tempo", i.iChar + a, i.iChar + e.length, this.calcTempo(p.tempo)) : p.type === "immediate" && s.appendElement("tempo", i.iChar + a, i.iChar + e.length, p.tempo), [
						f,
						e[a],
						n.strip(e.substring(a + 2))
					];
				case "V:": return c = o.parseVoice(e, a + 2, e.length), [
					e.length,
					e[a],
					n.strip(e.substring(a + 2)),
					c
				];
				default:
			}
			return [0];
		};
		var l = {
			A: "author",
			B: "book",
			C: "composer",
			D: "discography",
			F: "url",
			G: "group",
			I: "instruction",
			N: "notes",
			O: "origin",
			R: "rhythm",
			S: "source",
			W: "unalignedWords",
			Z: "transcription"
		};
		this.parseHeader = function(n) {
			var c = l[n[0]], u = n.length - 2, d = e.translateString(e.stripComment(n.substring(2)));
			if (c === "unalignedWords" || c === "notes") s.addMetaTextArray(c, r.parseFontChangeLine(d), {
				startChar: i.iChar,
				endChar: i.iChar + n.length
			});
			else if (c !== void 0) s.addMetaText(c, r.parseFontChangeLine(d), {
				startChar: i.iChar,
				endChar: i.iChar + n.length
			});
			else {
				var f = i.iChar, p = f + n.length;
				switch (n[0]) {
					case "H":
						for (s.addMetaTextArray("history", r.parseFontChangeLine(d), {
							startChar: i.iChar,
							endChar: i.iChar + n.length
						}), n = e.peekLine(); n && n[1] !== ":";) e.nextLine(), s.addMetaTextArray("history", r.parseFontChangeLine(e.translateString(e.stripComment(n))), {
							startChar: i.iChar,
							endChar: i.iChar + n.length
						}), n = e.peekLine();
						break;
					case "K":
						this.resolveTempo();
						var m = o.parseKey(n.substring(2), !1);
						!i.is_in_header && s.hasBeginMusic() && i.keywarn !== !1 && (m.foundClef && s.appendStartingElement("clef", f, p, i.clef), m.foundKey && s.appendStartingElement("key", f, p, o.fixKey(i.clef, i.key))), i.is_in_header = !1;
						break;
					case "L":
						this.setDefaultLength(n, 2, n.length);
						break;
					case "M":
						i.origMeter = i.meter = this.setMeter(n.substring(2));
						break;
					case "P":
						i.is_in_header ? s.addMetaText("partOrder", r.parseFontChangeLine(d), {
							startChar: i.iChar,
							endChar: i.iChar + n.length
						}) : i.partForNextLine = {
							title: d,
							startChar: f,
							endChar: p
						};
						break;
					case "Q":
						var h = this.setTempo(n, 2, n.length, i.iChar);
						h.type === "delaySet" ? i.tempo = h.tempo : h.type === "immediate" && (a.metaText.tempo ? i.tempoForNextLine = [
							"tempo",
							f,
							p,
							h.tempo
						] : a.metaText.tempo = h.tempo);
						break;
					case "T":
						i.titlecaps && (d = d.toUpperCase()), this.setTitle(r.parseFontChangeLine(e.theReverser(d)), u);
						break;
					case "U":
						this.addUserDefinition(n, 2, n.length);
						break;
					case "V":
						if (o.parseVoice(n, 2, n.length), !i.is_in_header) return { newline: !0 };
						break;
					case "s": return { symbols: !0 };
					case "w": return { words: !0 };
					case "X": break;
					case "E":
					case "m":
						t("Ignored header", n, 0);
						break;
					default: return { regular: !0 };
				}
			}
			return {};
		};
	};
})), require_abc_parse_settings = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports.legalAccents = /* @__PURE__ */ "trill,trillh,lowermordent,uppermordent,mordent,pralltriller,accent,fermata,invertedfermata,tenuto,0,1,2,3,4,5,+,wedge,open,thumb,snap,turn,roll,breath,shortphrase,mediumphrase,longphrase,segno,coda,D.S.,D.C.,fine,beambr1,beambr2,slide,marcato,upbow,downbow,/,//,///,////,trem1,trem2,trem3,trem4,turnx,invertedturn,invertedturnx,trill(,trill),arpeggio,xstem,mark,umarcato,style=normal,style=harmonic,style=rhythm,style=x,style=triangle,D.C.alcoda,D.C.alfine,D.S.alcoda,D.S.alfine,editorial,courtesy".split(","), t.exports.volumeDecorations = [
		"p",
		"pp",
		"f",
		"ff",
		"mf",
		"mp",
		"ppp",
		"pppp",
		"fff",
		"ffff",
		"sfz"
	], t.exports.dynamicDecorations = [
		"crescendo(",
		"crescendo)",
		"diminuendo(",
		"diminuendo)",
		"glissando(",
		"glissando)",
		"~(",
		"~)"
	], t.exports.accentPseudonyms = [
		["<", "accent"],
		[">", "accent"],
		["tr", "trill"],
		["plus", "+"],
		["emphasis", "accent"],
		["^", "umarcato"],
		["marcato", "umarcato"]
	], t.exports.accentDynamicPseudonyms = [
		["<(", "crescendo("],
		["<)", "crescendo)"],
		[">(", "diminuendo("],
		[">)", "diminuendo)"]
	], t.exports.nonDecorations = "ABCDEFGabcdefgxyzZ[]|^_{", t.exports.durations = [
		.5,
		.75,
		.875,
		.9375,
		.96875,
		.984375,
		.25,
		.375,
		.4375,
		.46875,
		.484375,
		.4921875,
		.125,
		.1875,
		.21875,
		.234375,
		.2421875,
		.24609375,
		.0625,
		.09375,
		.109375,
		.1171875,
		.12109375,
		.123046875,
		.03125,
		.046875,
		.0546875,
		.05859375,
		.060546875,
		.0615234375,
		.015625,
		.0234375,
		.02734375,
		.029296875,
		.0302734375,
		.03076171875
	], t.exports.pitches = {
		A: 5,
		B: 6,
		C: 0,
		D: 1,
		E: 2,
		F: 3,
		G: 4,
		a: 12,
		b: 13,
		c: 7,
		d: 8,
		e: 9,
		f: 10,
		g: 11
	}, t.exports.rests = {
		x: "invisible",
		X: "invisible-multimeasure",
		y: "spacer",
		z: "rest",
		Z: "multimeasure"
	}, t.exports.accMap = {
		dblflat: "__",
		flat: "_",
		natural: "=",
		sharp: "^",
		dblsharp: "^^",
		quarterflat: "_/",
		quartersharp: "^/"
	}, t.exports.tripletQ = {
		2: 3,
		3: 2,
		4: 3,
		5: 2,
		6: 2,
		7: 2,
		8: 3,
		9: 2
	};
})), require_abc_parse_music = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_parse_key_voice(), r = require_abc_transpose(), i, a, o, s, c, l, { legalAccents: f, volumeDecorations: m, dynamicDecorations: h, accentPseudonyms: g, accentDynamicPseudonyms: _, nonDecorations: v, durations: y, pitches: b, rests: x, accMap: S, tripletQ: C } = require_abc_parse_settings(), w = function(e, t, n, r, u, d) {
		i = e, a = t, o = n, s = r, c = u, l = d, this.lineContinuation = !1;
	}, T = function(e, t, n) {
		if (e.inTie[t] === void 0) return !1;
		var r = e.currentVoice ? e.currentVoice.staffNum * 100 + e.currentVoice.index : 0;
		return !!(e.inTie[t][r] && (n.pitches !== void 0 || n.rest.type !== "spacer"));
	}, E = {};
	w.prototype.parseMusic = function(e) {
		l.resolveTempo(), o.is_in_header = !1;
		for (var t = 0, n = o.iChar; i.isWhiteSpace(e[t]) && t < e.length;) t++;
		if (!(t === e.length || e[t] === "%")) {
			var r = o.start_new_line;
			o.continueall === void 0 ? o.start_new_line = !0 : o.start_new_line = !1;
			var u = 0, d = l.letter_to_body_header(e, t);
			d[0] > 0 && (t += d[0], d[1] === "V" && this.startNewLine());
			for (var f = 0; t < e.length;) {
				var p = t;
				if (e[t] === "%") break;
				var m = l.letter_to_inline_header(e, t, r);
				if (m[0] > 0) t += m[0], m[1] === "V" && (r = !0);
				else {
					(!c.hasBeginMusic() || r && !this.lineContinuation) && (this.startNewLine(), r = !1);
					for (var h;;) if (h = i.eatWhiteSpace(e, t), h > 0 && (t += h), t > 0 && e[t - 1] === "" && (h = l.letter_to_body_header(e, t), h[0] > 0 && (h[1] === "V" && this.startNewLine(), t = h[0], o.start_new_line = !1)), h = N(e, t), h[0] > 0 && (t += h[0]), h = O(e, t), h[0] > 0) {
						E.chord ||= [];
						var g = i.translateString(h[1]);
						g = g.replace(/;/g, "\n");
						for (var _ = !1, b = 0; b < E.chord.length; b++) E.chord[b].position === h[2] && (_ = !0, E.chord[b].name += "\n" + g);
						_ === !1 && (h[2] === null && h[3] ? E.chord.push({
							name: g,
							rel_position: h[3]
						}) : E.chord.push({
							name: g,
							position: h[2]
						})), t += h[0];
						var x = i.skipWhiteSpace(e.substring(t));
						x > 0 && (E.force_end_beam_last = !0), t += x;
					} else if (h = v.indexOf(e[t]) === -1 ? M(e, t) : [0], h[0] > 0) h[1] === null ? t + 1 < e.length && this.startNewLine() : h[1].length > 0 && (h[1].indexOf("style=") === 0 ? E.style = h[1].substr(6) : (E.decoration === void 0 && (E.decoration = []), h[1] === "beambr1" ? E.beambr = 1 : h[1] === "beambr2" ? E.beambr = 2 : E.decoration.push(h[1]))), t += h[0];
					else if (h = k(e, t), h[0] > 0) E.gracenotes = h[1], t += h[0];
					else break;
					if (h = P(e, t), h[0] > 0) {
						f = 0, E.gracenotes !== void 0 && (E.rest = { type: "spacer" }, E.duration = .125, o.addFormattingOptions(E, s.formatting, "note"), c.appendElement("note", n + t, n + t + h[0], E), o.measureNotEmpty = !0, E = {});
						var S = { type: h[1] };
						S.type.length === 0 ? a("Unknown bar type", e, t) : (o.inEnding && S.type !== "bar_thin" && (S.endEnding = !0, o.inEnding = !1), h[2] && (S.startEnding = h[2], o.inEnding && (S.endEnding = !0), o.inEnding = !0, h[1] === "bar_right_repeat" ? o.restoreStartEndingHoldOvers() : o.duplicateStartEndingHoldOvers()), E.decoration !== void 0 && (S.decoration = E.decoration), E.chord !== void 0 && (S.chord = E.chord), S.startEnding && o.barFirstEndingNum === void 0 ? o.barFirstEndingNum = o.currBarNumber : S.startEnding && S.endEnding && o.barFirstEndingNum ? o.currBarNumber = o.barFirstEndingNum : S.endEnding && (o.barFirstEndingNum = void 0), S.type !== "bar_invisible" && o.measureNotEmpty && z() && (o.currBarNumber++, o.barNumbers && o.currBarNumber % o.barNumbers === 0 && (S.barNumber = o.currBarNumber)), o.addFormattingOptions(E, s.formatting, "bar"), c.appendElement("bar", n + p, n + t + h[0], S), o.measureNotEmpty = !1, E = {}), t += h[0];
					} else if (e[t] === "&") h = A(e, t), h[0] > 0 && (c.appendElement("overlay", n, n + 1, {}), t += 1, f++);
					else {
						if (h = F(e, t), h.consumed > 0 && (h.startSlur !== void 0 && (E.startSlur = h.startSlur), h.dottedSlur && (E.dottedSlur = !0), h.triplet !== void 0 && (u > 0 ? a("Can't nest triplets", e, t) : (E.startTriplet = h.triplet, E.tripletMultiplier = h.tripletQ / h.triplet, E.tripletR = h.num_notes, u = h.num_notes === void 0 ? h.triplet : h.num_notes)), t += h.consumed), e[t] === "[") {
							t++;
							for (var C = null, w = !1, B = !1; !B;) {
								var V = M(e, t);
								V[0] > 0 && (t += V[0]);
								var H = L(e, t, {}, !1);
								if (H !== null && H.pitch !== void 0) V[0] > 0 && V[1].indexOf("style=") !== 0 && (E.decoration === void 0 && (E.decoration = []), E.decoration.push(V[1])), H.end_beam && (E.end_beam = !0, delete H.end_beam), E.pitches === void 0 ? (E.duration = H.duration, E.pitches = [H]) : E.pitches.push(H), delete H.duration, V[0] > 0 && V[1].indexOf("style=") === 0 && (E.pitches[E.pitches.length - 1].style = V[1].substr(6)), o.inTieChord[E.pitches.length] && (H.endTie = !0, o.inTieChord[E.pitches.length] = void 0), H.startTie && (o.inTieChord[E.pitches.length] = !0), t = H.endChar, delete H.endChar;
								else if (e[t] === " ") a("Spaces are not allowed in chords", e, t), t++;
								else {
									if (t < e.length && e[t] === "]") {
										t++, o.next_note_duration !== 0 && (E.duration *= o.next_note_duration, o.next_note_duration = 0), T(o, f, E) && (E.pitches.forEach(function(e) {
											e.endTie = !0;
										}), D(o, f, !1)), u > 0 && !(E.rest && E.rest.type === "spacer") && (u--, u === 0 && (E.endTriplet = !0));
										for (var U = !1; t < e.length && !U;) {
											switch (e[t]) {
												case " ":
												case "	":
													I(E);
													break;
												case ")":
													E.endSlur === void 0 ? E.endSlur = 1 : E.endSlur++;
													break;
												case "-":
													E.pitches.forEach(function(e) {
														e.startTie = {};
													}), D(o, f, !0);
													break;
												case ">":
												case "<":
													var W = R(e, t);
													t += W[0] - 1, o.next_note_duration = W[2], C ? C *= W[1] : C = W[1];
													break;
												case "1":
												case "2":
												case "3":
												case "4":
												case "5":
												case "6":
												case "7":
												case "8":
												case "9":
												case "/":
													var xt = i.getFraction(e, t);
													C = xt.value, t = xt.index;
													var G = e[t];
													G === " " && (w = !0), G === "-" || G === ")" || G === " " || G === "<" || G === ">" ? t-- : U = !0;
													break;
												case "0":
													C = 0;
													break;
												default:
													U = !0;
													break;
											}
											U || t++;
										}
									} else a("Expected ']' to end the chords", e, t);
									E.pitches !== void 0 && (C !== null && (E.duration *= C, w && I(E)), o.addFormattingOptions(E, s.formatting, "note"), c.appendElement("note", n + p, n + t, E), o.measureNotEmpty = !0, E = {}), B = !0;
								}
							}
						} else {
							var St = {}, K = L(e, t, St, !0);
							St.endTie !== void 0 && D(o, f, !0), K !== null && (K.pitch === void 0 ? (E.rest = K.rest, K.rest.type === "multimeasure" && z() && (o.currBarNumber += K.rest.text - 1), K.endSlur !== void 0 && (E.endSlur = K.endSlur), K.endTie !== void 0 && (E.rest.endTie = K.endTie), K.startSlur !== void 0 && (E.startSlur = K.startSlur), K.startTie !== void 0 && (E.rest.startTie = K.startTie), E.startTie !== void 0 && (E.rest.startTie = E.startTie)) : (E.pitches = [{}], K.accidental !== void 0 && (E.pitches[0].accidental = K.accidental), E.pitches[0].pitch = K.pitch, E.pitches[0].name = K.name, (K.midipitch || K.midipitch === 0) && (E.pitches[0].midipitch = K.midipitch), K.endSlur !== void 0 && (E.pitches[0].endSlur = K.endSlur), K.endTie !== void 0 && (E.pitches[0].endTie = K.endTie), K.startSlur !== void 0 && (E.pitches[0].startSlur = K.startSlur), E.startSlur !== void 0 && (E.pitches[0].startSlur = E.startSlur), E.dottedSlur !== void 0 && (E.pitches[0].dottedSlur = !0), K.startTie !== void 0 && (E.pitches[0].startTie = K.startTie), E.startTie !== void 0 && (E.pitches[0].startTie = E.startTie)), K.chord !== void 0 && (E.chord = K.chord), K.duration !== void 0 && (E.duration = K.duration), K.decoration !== void 0 && (E.decoration = K.decoration), K.graceNotes !== void 0 && (E.graceNotes = K.graceNotes), delete E.startSlur, delete E.dottedSlur, T(o, f, E) && (E.pitches === void 0 ? E.rest.type !== "spacer" && (E.rest.endTie = !0) : E.pitches[0].endTie = !0, D(o, f, !1)), (K.startTie || E.startTie) && D(o, f, !0), t = K.endChar, u > 0 && !(K.rest && K.rest.type === "spacer") && (u--, u === 0 && (E.endTriplet = !0)), K.end_beam && I(E), E.rest && E.rest.type === "rest" && E.duration === 1 && j(o) <= 1 && (E.rest.type = "whole", E.duration = j(o)), E.duration < 1 && y.indexOf(E.duration) === -1 && E.duration !== 0 && (!E.rest || E.rest.type !== "spacer") && a("Duration not representable: " + e.substring(p, t), e, t), o.addFormattingOptions(E, s.formatting, "note"), c.appendElement("note", n + p, n + t, E) || (this.startNewLine(), c.appendElement("note", n + p, n + t, E)), o.measureNotEmpty = !0, E = {});
						}
						t === p && (e[t] !== " " && e[t] !== "`" && a("Unknown character ignored", e, t), t++);
					}
				}
			}
			this.lineContinuation = e.indexOf("") >= 0 || d[0] > 0, this.lineContinuation || (E = {});
		}
	};
	var D = function(e, t, n) {
		var r = e.currentVoice ? e.currentVoice.staffNum * 100 + e.currentVoice.index : 0;
		e.inTie[t] === void 0 && (e.inTie[t] = []), e.inTie[t][r] = n;
	}, O = function(e, t) {
		if (e[t] === "\"") {
			var n = i.getBrackettedSubstring(e, t, 5);
			if (n[2] || a("Missing the closing quote while parsing the chord symbol", e, t), n[0] > 0 && n[1].length > 0 && n[1][0] === "^") n[1] = n[1].substring(1), n[2] = "above";
			else if (n[0] > 0 && n[1].length > 0 && n[1][0] === "_") n[1] = n[1].substring(1), n[2] = "below";
			else if (n[0] > 0 && n[1].length > 0 && n[1][0] === "<") n[1] = n[1].substring(1), n[2] = "left";
			else if (n[0] > 0 && n[1].length > 0 && n[1][0] === ">") n[1] = n[1].substring(1), n[2] = "right";
			else if (n[0] > 0 && n[1].length > 0 && n[1][0] === "@") {
				n[1] = n[1].substring(1);
				var s = i.getFloat(n[1]);
				if (s.digits === 0) return a("Missing first position in absolutely positioned annotation.", e, t), n[1] = n[1].replace("@", ""), n[2] = "above", n;
				if (n[1] = n[1].substring(s.digits), n[1][0] !== ",") return a("Missing comma absolutely positioned annotation.", e, t), n[1] = n[1].replace("@", ""), n[2] = "above", n;
				n[1] = n[1].substring(1);
				var c = i.getFloat(n[1]);
				if (c.digits === 0) return a("Missing second position in absolutely positioned annotation.", e, t), n[1] = n[1].replace("@", ""), n[2] = "above", n;
				n[1] = n[1].substring(c.digits);
				var l = i.skipWhiteSpace(n[1]);
				n[1] = n[1].substring(l), n[2] = null, n[3] = {
					x: s.value,
					y: c.value
				};
			} else o.freegchord !== !0 && (n[1] = n[1].replace(/([ABCDEFG0-9])b/g, "$1♭"), n[1] = n[1].replace(/([ABCDEFG0-9])#/g, "$1♯"), n[1] = n[1].replace(/^([ABCDEFG])([♯♭]?)o([^A-Za-z])/g, "$1$2°$3"), n[1] = n[1].replace(/^([ABCDEFG])([♯♭]?)o$/g, "$1$2°"), n[1] = n[1].replace(/^([ABCDEFG])([♯♭]?)0([^A-Za-z])/g, "$1$2ø$3"), n[1] = n[1].replace(/^([ABCDEFG])([♯♭]?)\^([^A-Za-z])/g, "$1$2∆$3")), n[2] = "default", n[1] = r.chordName(o, n[1]);
			return n;
		}
		return [0, ""];
	}, k = function(e, t) {
		if (e[t] === "{") {
			var n = i.getBrackettedSubstring(e, t, 1, "}");
			n[2] || a("Missing the closing '}' while parsing grace note", e, t), e[t + n[0]] === ")" && (n[0]++, n[1] += ")");
			for (var r = [], s = 0, c = !1; s < n[1].length;) {
				var l = !1;
				n[1][s] === "/" && (l = !0, s++);
				var u = L(n[1], s, {}, !1);
				u === null ? (n[1][s] === " " ? r.length > 0 && (r[r.length - 1].endBeam = !0) : a("Unknown character '" + n[1][s] + "' while parsing grace note", e, t), s++) : (u.duration /= o.default_length * 8, l && (u.acciaccatura = !0), u.rest ? a("Rests not allowed as grace notes '" + n[1][s] + "' while parsing grace note", e, t) : r.push(u), c &&= (u.endTie = !0, !1), u.startTie && (c = !0), s = u.endChar, delete u.endChar, u.end_beam && (u.endBeam = !0, delete u.end_beam));
			}
			if (r.length) return [n[0], r];
		}
		return [0];
	};
	function A(e, t) {
		if (e[t] === "&") {
			for (var n = t; e[t] && e[t] !== ":" && e[t] !== "|";) t++;
			return [t - n, e.substring(n + 1, t)];
		}
		return [0];
	}
	function j(e) {
		var t = e.origMeter;
		return !t || t.type !== "specified" || !t.value || t.value.length === 0 ? 1 : parseInt(t.value[0].num, 10) / parseInt(t.value[0].den, 10);
	}
	var M = function(e, t) {
		var n = o.macros[e[t]];
		if (n !== void 0) return (n[0] === "!" || n[0] === "+") && (n = n.substring(1)), (n[n.length - 1] === "!" || n[n.length - 1] === "+") && (n = n.substring(0, n.length - 1)), f.includes(n) ? [1, n] : m.includes(n) ? (o.volumePosition === "hidden" && (n = ""), [1, n]) : h.includes(n) ? (o.dynamicPosition === "hidden" && (n = ""), [1, n]) : (o.ignoredDecorations.includes(n) || a("Unknown macro: " + n, e, t), [1, ""]);
		switch (e[t]) {
			case ".":
				if (e[t + 1] === "(" || e[t + 1] === "-") break;
				return [1, "staccato"];
			case "u": return [1, "upbow"];
			case "v": return [1, "downbow"];
			case "~": return [1, "irishroll"];
			case "!":
			case "+":
				var r = i.getBrackettedSubstring(e, t, 5);
				if (r[1].length > 1 && (r[1][0] === "^" || r[1][0] === "_") && (r[1] = r[1].substring(1)), f.includes(r[1])) return r;
				if (m.includes(r[1])) return o.volumePosition === "hidden" && (r[1] = ""), r;
				if (h.includes(r[1])) return o.dynamicPosition === "hidden" && (r[1] = ""), r;
				var s = g.findIndex(function(e) {
					return r[1] === e[0];
				});
				return s >= 0 ? (r[1] = g[s][1], r) : (s = _.findIndex(function(e) {
					return r[1] === e[0];
				}), s >= 0 ? (r[1] = _[s][1], o.dynamicPosition === "hidden" && (r[1] = ""), r) : e[t] === "!" && (r[0] === 1 || e[t + r[0] - 1] !== "!") ? [1, null] : (a("Unknown decoration: " + r[1], e, t), r[1] = "", r));
			case "H": return [1, "fermata"];
			case "J": return [1, "slide"];
			case "L": return [1, "accent"];
			case "M": return [1, "mordent"];
			case "O": return [1, "coda"];
			case "P": return [1, "pralltriller"];
			case "R": return [1, "roll"];
			case "S": return [1, "segno"];
			case "T": return [1, "trill"];
			case "t": return [1, "trillh"];
		}
		return [0, 0];
	}, N = function(e, t) {
		for (var n = t; i.isWhiteSpace(e[t]);) t++;
		return [t - n];
	}, P = function(e, t) {
		var n = i.getBarLine(e, t);
		if (n.len === 0) return [0, ""];
		if (n.warn) return a(n.warn, e, t), [n.len, ""];
		for (var r = 0; r < e.length && e[t + n.len + r] === " "; r++);
		var o = n.len;
		if (e[t + n.len + r] === "[" && (n.len += r + 1), e[t + n.len] === "\"" && e[t + n.len - 1] === "[") {
			var s = i.getBrackettedSubstring(e, t + n.len, 5);
			return [
				n.len + s[0],
				n.token,
				s[1]
			];
		}
		var c = i.getTokenOf(e.substring(t + n.len), "1234567890-,");
		return c.len === 0 || c.token[0] === "-" ? [o, n.token] : [
			n.len + c.len,
			n.token,
			c.token
		];
	}, F = function(e, t) {
		var n = {}, r = t;
		for (e[t] === "." && e[t + 1] === "(" && (n.dottedSlur = !0, t++); e[t] === "(" || i.isWhiteSpace(e[t]);) e[t] === "(" && (t + 1 < e.length && e[t + 1] >= "2" && e[t + 1] <= "9" ? (n.triplet === void 0 ? (n.triplet = e[t + 1] - "0", n.tripletQ = C[n.triplet], n.num_notes = n.triplet, t + 2 < e.length && e[t + 2] === ":" && (t + 3 < e.length && e[t + 3] === ":" ? t + 4 < e.length && e[t + 4] >= "1" && e[t + 4] <= "9" ? (n.num_notes = e[t + 4] - "0", t += 3) : a("expected number after the two colons after the triplet to mark the duration", e, t) : t + 3 < e.length && e[t + 3] >= "1" && e[t + 3] <= "9" ? (n.tripletQ = e[t + 3] - "0", t + 4 < e.length && e[t + 4] === ":" ? t + 5 < e.length && e[t + 5] >= "1" && e[t + 5] <= "9" && (n.num_notes = e[t + 5] - "0", t += 4) : t += 2) : a("expected number after the triplet to mark the duration", e, t))) : a("Can't nest triplets", e, t), t++) : n.startSlur === void 0 ? n.startSlur = 1 : n.startSlur++), t++;
		return n.consumed = t - r, n;
	};
	w.prototype.startNewLine = function() {
		var e = {
			startChar: -1,
			endChar: -1
		};
		o.partForNextLine.title && (e.part = o.partForNextLine), e.clef = o.currentVoice && o.staves[o.currentVoice.staffNum].clef !== void 0 ? Object.assign({}, o.staves[o.currentVoice.staffNum].clef) : Object.assign({}, o.clef);
		var t = o.currentVoice ? o.currentVoice.scoreTranspose : 0;
		if (e.key = n.standardKey(o.key.root + o.key.acc + o.key.mode, o.key.root, o.key.acc, t), e.key.mode = o.key.mode, o.key.impliedNaturals && (e.key.impliedNaturals = o.key.impliedNaturals), o.key.explicitAccidentals) for (var r = 0; r < o.key.explicitAccidentals.length; r++) {
			for (var i = !1, a = 0; a < e.key.accidentals.length; a++) e.key.accidentals[a].note === o.key.explicitAccidentals[r].note && (e.key.accidentals[a].acc = o.key.explicitAccidentals[r].acc, i = !0);
			i || e.key.accidentals.push(o.key.explicitAccidentals[r]);
		}
		if (o.targetKey = e.key, e.key.explicitAccidentals && delete e.key.explicitAccidentals, n.addPosToKey(e.clef, e.key), o.meter === null ? o.currentVoice && o.staves[o.currentVoice.staffNum].meter && (e.meter = o.staves[o.currentVoice.staffNum].meter, o.staves[o.currentVoice.staffNum].meter = null) : (o.currentVoice ? (o.staves.forEach(function(e) {
			e.meter = o.meter;
		}), e.meter = o.staves[o.currentVoice.staffNum].meter, o.staves[o.currentVoice.staffNum].meter = null) : e.meter = o.meter, o.meter = null), o.currentVoice && o.currentVoice.name && (e.name = o.currentVoice.name), o.vocalfont && (e.vocalfont = o.vocalfont), o.tripletfont && (e.tripletfont = o.tripletfont), o.gchordfont && (e.gchordfont = o.gchordfont), o.style && (e.style = o.style), o.currentVoice) {
			var s = o.staves[o.currentVoice.staffNum];
			s.brace && (e.brace = s.brace), s.bracket && (e.bracket = s.bracket), s.connectBarLines && (e.connectBarLines = s.connectBarLines), s.name && (e.name = s.name[o.currentVoice.index]), s.subname && (e.subname = s.subname[o.currentVoice.index]), o.currentVoice.stem && (e.stem = o.currentVoice.stem), o.currentVoice.stafflines && (e.stafflines = o.currentVoice.stafflines), o.currentVoice.staffscale && (e.staffscale = o.currentVoice.staffscale), o.currentVoice.scale && (e.scale = o.currentVoice.scale), o.currentVoice.color && (e.color = o.currentVoice.color), o.currentVoice.style && (e.style = o.currentVoice.style), o.currentVoice.transpose && (e.clef.transpose = o.currentVoice.transpose), e.currentVoice = o.currentVoice;
			for (var l = Object.keys(o.voices), u = 0; u < l.length; u++) e.currentVoice.staffNum === o.voices[l[u]].staffNum && e.currentVoice.index === o.voices[l[u]].index && (e.currentVoiceName = l[u]);
		}
		o.barNumbers === 0 && z() && o.currBarNumber !== 1 && (e.barNumber = o.currBarNumber), c.startNewLine(e), o.key.impliedNaturals && delete o.key.impliedNaturals, o.partForNextLine = {}, o.tempoForNextLine.length === 4 && c.appendElement(o.tempoForNextLine[0], o.tempoForNextLine[1], o.tempoForNextLine[2], o.tempoForNextLine[3]), o.tempoForNextLine = [];
	};
	var I = function(e) {
		return e.duration !== void 0 && e.duration < .25 && (e.end_beam = !0), e;
	}, L = function(e, t, n, a) {
		var l = function(e) {
			return e === "octave" || e === "duration" || e === "Zduration" || e === "broken_rhythm" || e === "end_slur";
		}, u;
		e[t] === "." && e[t + 1] === "-" && (u = !0, t++);
		for (var d = "startSlur", f = !1;;) {
			switch (e[t]) {
				case "(":
					if (d === "startSlur") n.startSlur === void 0 ? n.startSlur = 1 : n.startSlur++;
					else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case ")":
					if (l(d)) n.endSlur === void 0 ? n.endSlur = 1 : n.endSlur++;
					else return null;
					break;
				case "^":
					if (d === "startSlur") n.accidental = "sharp", d = "sharp2";
					else if (d === "sharp2") n.accidental = "dblsharp", d = "pitch";
					else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case "_":
					if (d === "startSlur") n.accidental = "flat", d = "flat2";
					else if (d === "flat2") n.accidental = "dblflat", d = "pitch";
					else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case "=":
					if (d === "startSlur") n.accidental = "natural", d = "pitch";
					else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case "A":
				case "B":
				case "C":
				case "D":
				case "E":
				case "F":
				case "G":
				case "a":
				case "b":
				case "c":
				case "d":
				case "e":
				case "f":
				case "g":
					if (d === "startSlur" || d === "sharp2" || d === "flat2" || d === "pitch") {
						if (n.pitch = b[e[t]], n.pitch += 7 * (o.currentVoice && o.currentVoice.octave !== void 0 ? o.currentVoice.octave : o.octave), n.name = e[t], n.accidental && (n.name = S[n.accidental] + n.name), r.note(o, n), d = "octave", a && o.next_note_duration !== 0 ? (n.duration = o.default_length * o.next_note_duration, o.next_note_duration = 0, f = !0) : n.duration = o.default_length, o.clef && o.clef.type === "perc" || o.currentVoice && o.currentVoice.clef === "perc") {
							var p = e[t];
							n.accidental && (p = S[n.accidental] + p), s.formatting && s.formatting.midi && s.formatting.midi.drummap && (n.midipitch = s.formatting.midi.drummap[p]);
						}
					} else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case ",":
					if (d === "octave") n.pitch -= 7, n.name += ",";
					else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case "'":
					if (d === "octave") n.pitch += 7, n.name += "'";
					else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case "x":
				case "X":
				case "y":
				case "z":
				case "Z":
					if (d === "startSlur") n.rest = { type: x[e[t]] }, delete n.accidental, delete n.startSlur, delete n.startTie, delete n.endSlur, delete n.endTie, delete n.end_beam, delete n.grace_notes, n.rest.type.indexOf("multimeasure") >= 0 ? (n.duration = s.getBarLength(), n.rest.text = 1, d = "Zduration") : (a && o.next_note_duration !== 0 ? (n.duration = o.default_length * o.next_note_duration, o.next_note_duration = 0, f = !0) : n.duration = o.default_length, d = "duration");
					else if (l(d)) return n.endChar = t, n;
					else return null;
					break;
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
				case "0":
				case "/":
					if (d === "octave" || d === "duration") {
						var m = i.getFraction(e, t);
						for (n.duration *= m.value, n.endChar = m.index; m.index < e.length && (i.isWhiteSpace(e[m.index]) || e[m.index] === "-");) e[m.index] === "-" ? n.startTie = {} : n = I(n), m.index++;
						t = m.index - 1, d = "broken_rhythm";
					} else if (d === "sharp2") n.accidental = "quartersharp", d = "pitch";
					else if (d === "flat2") n.accidental = "quarterflat", d = "pitch";
					else if (d === "Zduration") {
						var h = i.getNumber(e, t);
						return n.duration = h.num * s.getBarLength(), n.rest.text = h.num, n.endChar = h.index, n;
					} else return null;
					break;
				case "-":
					if (d === "startSlur") c.addTieToLastNote(u), n.endTie = !0;
					else if (d === "octave" || d === "duration" || d === "end_slur") if (n.startTie = {}, !f && a) d = "broken_rhythm";
					else return i.isWhiteSpace(e[t + 1]) && I(n), n.endChar = t + 1, n;
					else if (d === "broken_rhythm") return n.endChar = t, n;
					else return null;
					break;
				case " ":
				case "	":
					if (l(d)) {
						n.end_beam = !0, u = !1;
						do
							e[t] === "." && e[t + 1] === "-" && (u = !0, t++), e[t] === "-" && (n.startTie = {}, u && (n.startTie.style = "dotted")), t++;
						while (t < e.length && (i.isWhiteSpace(e[t]) || e[t] === "-") || e[t] === "." && e[t + 1] === "-");
						if (n.endChar = t, !f && a && (e[t] === "<" || e[t] === ">")) t--, d = "broken_rhythm";
						else return n;
					} else return null;
					break;
				case ">":
				case "<":
					if (l(d)) if (a) {
						var g = R(e, t);
						t += g[0] - 1, o.next_note_duration = g[2], n.duration = g[1] * n.duration, d = "end_slur";
					} else return n.endChar = t, n;
					else return null;
					break;
				default: return l(d) ? (n.endChar = t, n) : null;
			}
			if (t++, t === e.length) return l(d) ? (n.endChar = t, n) : null;
		}
		return null;
	}, R = function(e, t) {
		switch (e[t]) {
			case ">": return t < e.length - 2 && e[t + 1] === ">" && e[t + 2] === ">" ? [
				3,
				1.875,
				.125
			] : t < e.length - 1 && e[t + 1] === ">" ? [
				2,
				1.75,
				.25
			] : [
				1,
				1.5,
				.5
			];
			case "<": return t < e.length - 2 && e[t + 1] === "<" && e[t + 2] === "<" ? [
				3,
				.125,
				1.875
			] : t < e.length - 1 && e[t + 1] === "<" ? [
				2,
				.25,
				1.75
			] : [
				1,
				.5,
				1.5
			];
		}
		return null;
	};
	function z() {
		return o.currentVoice === void 0 || o.currentVoice.staffNum === 0 && o.currentVoice.index === 0;
	}
	t.exports = w;
})), require_abc_tokenizer = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_common(), r = function(e, t) {
		this.lineIndex = 0, this.lines = e, this.multilineVars = t, this.skipWhiteSpace = function(e) {
			for (var t = 0; t < e.length; t++) if (!this.isWhiteSpace(e[t])) return t;
			return e.length;
		};
		var r = function(e, t) {
			return t >= e.length;
		};
		this.eatWhiteSpace = function(e, t) {
			for (var n = t; n < e.length; n++) if (!this.isWhiteSpace(e[n])) return n - t;
			return n - t;
		}, this.getKeyPitch = function(e) {
			var t = this.skipWhiteSpace(e);
			if (r(e, t)) return { len: 0 };
			switch (e[t]) {
				case "A": return {
					len: t + 1,
					token: "A"
				};
				case "B": return {
					len: t + 1,
					token: "B"
				};
				case "C": return {
					len: t + 1,
					token: "C"
				};
				case "D": return {
					len: t + 1,
					token: "D"
				};
				case "E": return {
					len: t + 1,
					token: "E"
				};
				case "F": return {
					len: t + 1,
					token: "F"
				};
				case "G": return {
					len: t + 1,
					token: "G"
				};
			}
			return { len: 0 };
		}, this.getSharpFlat = function(e) {
			if (e === "bass") return { len: 0 };
			switch (e[0]) {
				case "#": return {
					len: 1,
					token: "#"
				};
				case "b": return {
					len: 1,
					token: "b"
				};
			}
			return { len: 0 };
		}, this.getMode = function(e) {
			var t = function(e, t) {
				for (; t < e.length && (e[t] >= "a" && e[t] <= "z" || e[t] >= "A" && e[t] <= "Z");) t++;
				return t;
			}, n = this.skipWhiteSpace(e);
			if (r(e, n)) return { len: 0 };
			var i = e.substring(n, n + 3).toLowerCase();
			switch ((i.length > 1 && i[1] === " " || i[1] === "^" || i[1] === "_" || i[1] === "=") && (i = i[0]), i) {
				case "mix": return {
					len: t(e, n),
					token: "Mix"
				};
				case "dor": return {
					len: t(e, n),
					token: "Dor"
				};
				case "phr": return {
					len: t(e, n),
					token: "Phr"
				};
				case "lyd": return {
					len: t(e, n),
					token: "Lyd"
				};
				case "loc": return {
					len: t(e, n),
					token: "Loc"
				};
				case "aeo": return {
					len: t(e, n),
					token: "m"
				};
				case "maj": return {
					len: t(e, n),
					token: ""
				};
				case "ion": return {
					len: t(e, n),
					token: ""
				};
				case "min": return {
					len: t(e, n),
					token: "m"
				};
				case "m": return {
					len: t(e, n),
					token: "m"
				};
			}
			return { len: 0 };
		}, this.getClef = function(e, t) {
			var i = e, a = this.skipWhiteSpace(e);
			if (r(e, a)) return { len: 0 };
			var o = !1, s = e.substring(a);
			if (n.startsWith(s, "clef=") && (o = !0, s = s.substring(5), a += 5), s.length === 0 && o) return {
				len: a + 5,
				warn: "No clef specified: " + i
			};
			var c = this.skipWhiteSpace(s);
			if (r(s, c)) return { len: 0 };
			c > 0 && (a += c, s = s.substring(c));
			var l = null;
			if (n.startsWith(s, "treble")) l = "treble";
			else if (n.startsWith(s, "bass3")) l = "bass3";
			else if (n.startsWith(s, "bass")) l = "bass";
			else if (n.startsWith(s, "tenor")) l = "tenor";
			else if (n.startsWith(s, "alto2")) l = "alto2";
			else if (n.startsWith(s, "alto1")) l = "alto1";
			else if (n.startsWith(s, "alto")) l = "alto";
			else if (!t && o && n.startsWith(s, "none")) l = "none";
			else if (n.startsWith(s, "perc")) l = "perc";
			else if (!t && o && n.startsWith(s, "C")) l = "tenor";
			else if (!t && o && n.startsWith(s, "F")) l = "bass";
			else if (!t && o && n.startsWith(s, "G")) l = "treble";
			else return {
				len: a + 5,
				warn: "Unknown clef specified: " + i
			};
			return s = s.substring(l.length), c = this.isMatch(s, "+8"), c > 0 ? l += "+8" : (c = this.isMatch(s, "-8"), c > 0 && (l += "-8")), {
				len: a + l.length,
				token: l,
				explicit: o
			};
		}, this.getBarLine = function(e, t) {
			switch (e[t]) {
				case "]":
					switch (++t, e[t]) {
						case "|": return {
							len: 2,
							token: "bar_thick_thin"
						};
						case "[": return ++t, e[t] >= "1" && e[t] <= "9" || e[t] === "\"" ? {
							len: 2,
							token: "bar_invisible"
						} : {
							len: 1,
							warn: "Unknown bar symbol"
						};
						default: return {
							len: 1,
							token: "bar_invisible"
						};
					}
					break;
				case ":":
					switch (++t, e[t]) {
						case ":": return {
							len: 2,
							token: "bar_dbl_repeat"
						};
						case "|":
							switch (++t, e[t]) {
								case "]":
									switch (++t, e[t]) {
										case "|": return ++t, e[t] === ":" ? {
											len: 5,
											token: "bar_dbl_repeat"
										} : {
											len: 3,
											token: "bar_right_repeat"
										};
										default: return {
											len: 3,
											token: "bar_right_repeat"
										};
									}
									break;
								case "|": return ++t, e[t] === ":" ? {
									len: 4,
									token: "bar_dbl_repeat"
								} : {
									len: 3,
									token: "bar_right_repeat"
								};
								default: return {
									len: 2,
									token: "bar_right_repeat"
								};
							}
							break;
						default: return {
							len: 1,
							warn: "Unknown bar symbol"
						};
					}
					break;
				case "[":
					if (++t, e[t] === "|") switch (++t, e[t]) {
						case ":": return {
							len: 3,
							token: "bar_left_repeat"
						};
						case "]": return {
							len: 3,
							token: "bar_invisible"
						};
						default: return {
							len: 2,
							token: "bar_thick_thin"
						};
					}
					else return e[t] >= "1" && e[t] <= "9" || e[t] === "\"" ? {
						len: 1,
						token: "bar_invisible"
					} : { len: 0 };
					break;
				case "|":
					switch (++t, e[t]) {
						case "]": return {
							len: 2,
							token: "bar_thin_thick"
						};
						case "|": return ++t, e[t] === ":" ? {
							len: 3,
							token: "bar_left_repeat"
						} : {
							len: 2,
							token: "bar_thin_thin"
						};
						case ":":
							for (var n = 0; e[t + n] === ":";) n++;
							return {
								len: 1 + n,
								token: "bar_left_repeat"
							};
						default: return {
							len: 1,
							token: "bar_thin"
						};
					}
					break;
			}
			return { len: 0 };
		}, this.getTokenOf = function(e, t) {
			for (var n = 0; n < e.length; n++) if (t.indexOf(e[n]) < 0) return {
				len: n,
				token: e.substring(0, n)
			};
			return {
				len: n,
				token: e
			};
		}, this.getToken = function(e, t, n) {
			for (var r = t; r < n && !this.isWhiteSpace(e[r]);) r++;
			return e.substring(t, r);
		}, this.isMatch = function(e, t) {
			var i = this.skipWhiteSpace(e);
			return r(e, i) ? 0 : n.startsWith(e.substring(i), t) ? i + t.length : 0;
		}, this.getPitchFromTokens = function(e) {
			var t = {};
			if (t.position = {
				A: 5,
				B: 6,
				C: 0,
				D: 1,
				E: 2,
				F: 3,
				G: 4,
				a: 12,
				b: 13,
				c: 7,
				d: 8,
				e: 9,
				f: 10,
				g: 11
			}[e[0].token], t.position === void 0) return { warn: "Pitch expected. Found: " + e[0].token };
			for (e.shift(); e.length;) switch (e[0].token) {
				case ",":
					t.position -= 7, e.shift();
					break;
				case "'":
					t.position += 7, e.shift();
					break;
				default: return t;
			}
			return t;
		}, this.getKeyAccidentals2 = function(e) {
			for (var t; e.length > 0;) {
				var n;
				if (e[0].token === "^") {
					if (n = "sharp", e.shift(), e.length === 0) return {
						accs: t,
						warn: "Expected note name after " + n
					};
					switch (e[0].token) {
						case "^":
							n = "dblsharp", e.shift();
							break;
						case "/":
							n = "quartersharp", e.shift();
							break;
					}
				} else if (e[0].token === "=") n = "natural", e.shift();
				else if (e[0].token === "_") {
					if (n = "flat", e.shift(), e.length === 0) return {
						accs: t,
						warn: "Expected note name after " + n
					};
					switch (e[0].token) {
						case "_":
							n = "dblflat", e.shift();
							break;
						case "/":
							n = "quarterflat", e.shift();
							break;
					}
				} else return { accs: t };
				if (e.length === 0) return {
					accs: t,
					warn: "Expected note name after " + n
				};
				switch (e[0].token[0]) {
					case "a":
					case "b":
					case "c":
					case "d":
					case "e":
					case "f":
					case "g":
					case "A":
					case "B":
					case "C":
					case "D":
					case "E":
					case "F":
					case "G":
						t === void 0 && (t = []), t.push({
							acc: n,
							note: e[0].token[0]
						}), e[0].token.length === 1 ? e.shift() : e[0].token = e[0].token.substring(1);
						break;
					default: return {
						accs: t,
						warn: "Expected note name after " + n + " Found: " + e[0].token
					};
				}
			}
			return { accs: t };
		}, this.getKeyAccidental = function(e) {
			var t = {
				"^": "sharp",
				"^^": "dblsharp",
				"=": "natural",
				_: "flat",
				__: "dblflat",
				"_/": "quarterflat",
				"^/": "quartersharp"
			}, n = this.skipWhiteSpace(e);
			if (r(e, n)) return { len: 0 };
			var i = null;
			switch (e[n]) {
				case "^":
				case "_":
				case "=":
					i = e[n];
					break;
				default: return { len: 0 };
			}
			if (n++, r(e, n)) return {
				len: 1,
				warn: "Expected note name after accidental"
			};
			switch (e[n]) {
				case "a":
				case "b":
				case "c":
				case "d":
				case "e":
				case "f":
				case "g":
				case "A":
				case "B":
				case "C":
				case "D":
				case "E":
				case "F":
				case "G": return {
					len: n + 1,
					token: {
						acc: t[i],
						note: e[n]
					}
				};
				case "^":
				case "_":
				case "/":
					if (i += e[n], n++, r(e, n)) return {
						len: 2,
						warn: "Expected note name after accidental"
					};
					switch (e[n]) {
						case "a":
						case "b":
						case "c":
						case "d":
						case "e":
						case "f":
						case "g":
						case "A":
						case "B":
						case "C":
						case "D":
						case "E":
						case "F":
						case "G": return {
							len: n + 1,
							token: {
								acc: t[i],
								note: e[n]
							}
						};
						default: return {
							len: 2,
							warn: "Expected note name after accidental"
						};
					}
					break;
				default: return {
					len: 1,
					warn: "Expected note name after accidental"
				};
			}
		}, this.isWhiteSpace = function(e) {
			return e === " " || e === "	" || e === "";
		}, this.getMeat = function(e, t, n) {
			var r = e.indexOf("%", t);
			for (r >= 0 && r < n && (n = r); t < n && (e[t] === " " || e[t] === "	" || e[t] === "");) t++;
			for (; t < n && (e[n - 1] === " " || e[n - 1] === "	" || e[n - 1] === "");) n--;
			return {
				start: t,
				end: n
			};
		};
		var i = function(e) {
			return e >= "A" && e <= "Z" || e >= "a" && e <= "z";
		}, a = function(e) {
			return e >= "0" && e <= "9";
		};
		this.tokenize = function(e, t, n, r) {
			var o = this.getMeat(e, t, n);
			t = o.start, n = o.end;
			for (var s = [], c; t < n;) {
				if (e[t] === "\"") {
					for (c = t + 1; c < n && e[c] !== "\"";) c++;
					s.push({
						type: "quote",
						token: e.substring(t + 1, c),
						start: t + 1,
						end: c
					}), c++;
				} else if (i(e[t])) {
					if (c = t + 1, r) for (; c < n && !this.isWhiteSpace(e[c]);) c++;
					else for (; c < n && i(e[c]);) c++;
					s.push({
						type: "alpha",
						token: e.substring(t, c),
						continueId: a(e[c]),
						start: t,
						end: c
					}), t = c + 1;
				} else if (e[t] === "." && a(e[c + 1])) {
					c = t + 1;
					for (var l = null, u = null; c < n && a(e[c]);) c++;
					u = parseFloat(e.substring(t, c)), s.push({
						type: "number",
						token: e.substring(t, c),
						intt: l,
						floatt: u,
						continueId: i(e[c]),
						start: t,
						end: c
					}), t = c + 1;
				} else if (a(e[t]) || e[t] === "-" && a(e[c + 1])) {
					c = t + 1;
					for (var d = null, f = null; c < n && a(e[c]);) c++;
					if (e[c] === "." && a(e[c + 1])) for (c++; c < n && a(e[c]);) c++;
					else d = parseInt(e.substring(t, c));
					f = parseFloat(e.substring(t, c)), s.push({
						type: "number",
						token: e.substring(t, c),
						intt: d,
						floatt: f,
						continueId: i(e[c]),
						start: t,
						end: c
					}), t = c + 1;
				} else e[t] === " " || e[t] === "	" || s.push({
					type: "punct",
					token: e[t],
					start: t,
					end: t + 1
				}), c = t + 1;
				t = c;
			}
			return s;
		}, this.getVoiceToken = function(e, t, n) {
			for (var r = t; r < n && this.isWhiteSpace(e[r]) || e[r] === "=";) r++;
			if (e[r] === "\"") {
				var i = e.indexOf("\"", r + 1);
				return i === -1 || i >= n ? {
					len: 1,
					err: "Missing close quote"
				} : {
					len: i - t + 1,
					token: this.translateString(e.substring(r + 1, i))
				};
			} else {
				for (var a = r; a < n && !this.isWhiteSpace(e[a]) && e[a] !== "=";) a++;
				return {
					len: a - t + 1,
					token: e.substring(r, a)
				};
			}
		};
		var o = {
			"`a": "à",
			"'a": "á",
			"^a": "â",
			"~a": "ã",
			"\"a": "ä",
			oa: "å",
			aa: "å",
			"=a": "ā",
			ua: "ă",
			";a": "ą",
			"`e": "è",
			"'e": "é",
			"^e": "ê",
			"\"e": "ë",
			"=e": "ē",
			ue: "ĕ",
			";e": "ę",
			".e": "ė",
			"`i": "ì",
			"'i": "í",
			"^i": "î",
			"\"i": "ï",
			"=i": "ī",
			ui: "ĭ",
			";i": "į",
			"`o": "ò",
			"'o": "ó",
			"^o": "ô",
			"~o": "õ",
			"\"o": "ö",
			"=o": "ō",
			uo: "ŏ",
			"/o": "ø",
			"`u": "ù",
			"'u": "ú",
			"^u": "û",
			"~u": "ũ",
			"\"u": "ü",
			ou: "ů",
			"=u": "ū",
			uu: "ŭ",
			";u": "ų",
			"`A": "À",
			"'A": "Á",
			"^A": "Â",
			"~A": "Ã",
			"\"A": "Ä",
			oA: "Å",
			AA: "Å",
			"=A": "Ā",
			uA: "Ă",
			";A": "Ą",
			"`E": "È",
			"'E": "É",
			"^E": "Ê",
			"\"E": "Ë",
			"=E": "Ē",
			uE: "Ĕ",
			";E": "Ę",
			".E": "Ė",
			"`I": "Ì",
			"'I": "Í",
			"^I": "Î",
			"~I": "Ĩ",
			"\"I": "Ï",
			"=I": "Ī",
			uI: "Ĭ",
			";I": "Į",
			".I": "İ",
			"`O": "Ò",
			"'O": "Ó",
			"^O": "Ô",
			"~O": "Õ",
			"\"O": "Ö",
			"=O": "Ō",
			uO: "Ŏ",
			"/O": "Ø",
			"`U": "Ù",
			"'U": "Ú",
			"^U": "Û",
			"~U": "Ũ",
			"\"U": "Ü",
			oU: "Ů",
			"=U": "Ū",
			uU: "Ŭ",
			";U": "Ų",
			ae: "æ",
			AE: "Æ",
			oe: "œ",
			OE: "Œ",
			ss: "ß",
			"'c": "ć",
			"^c": "ĉ",
			uc: "č",
			cc: "ç",
			".c": "ċ",
			cC: "Ç",
			"'C": "Ć",
			"^C": "Ĉ",
			uC: "Č",
			".C": "Ċ",
			"~N": "Ñ",
			"~n": "ñ",
			"=s": "š",
			vs: "š",
			DH: "Ð",
			dh: "ð",
			HO: "Ő",
			Ho: "ő",
			HU: "Ű",
			Hu: "ű",
			"'Y": "Ý",
			"'y": "ý",
			"^Y": "Ŷ",
			"^y": "ŷ",
			"\"Y": "Ÿ",
			"\"y": "ÿ",
			vS: "Š",
			vZ: "Ž",
			vz: "ž"
		}, s = {
			"#": "♯",
			b: "♭",
			"=": "♮"
		}, c = {
			201: "♯",
			202: "♭",
			203: "♮",
			241: "¡",
			242: "¢",
			252: "a",
			262: "2",
			272: "o",
			302: "Â",
			312: "Ê",
			322: "Ò",
			332: "Ú",
			342: "â",
			352: "ê",
			362: "ò",
			372: "ú",
			243: "£",
			253: "«",
			263: "3",
			273: "»",
			303: "Ã",
			313: "Ë",
			323: "Ó",
			333: "Û",
			343: "ã",
			353: "ë",
			363: "ó",
			373: "û",
			244: "¤",
			254: "¬",
			264: "  ́",
			274: "1⁄4",
			304: "Ä",
			314: "Ì",
			324: "Ô",
			334: "Ü",
			344: "ä",
			354: "ì",
			364: "ô",
			374: "ü",
			245: "¥",
			255: "-",
			265: "μ",
			275: "1⁄2",
			305: "Å",
			315: "Í",
			325: "Õ",
			335: "Ý",
			345: "å",
			355: "í",
			365: "õ",
			375: "ý",
			246: "¦",
			256: "®",
			266: "¶",
			276: "3⁄4",
			306: "Æ",
			316: "Î",
			326: "Ö",
			336: "Þ",
			346: "æ",
			356: "î",
			366: "ö",
			376: "þ",
			247: "§",
			257: " ̄",
			267: "·",
			277: "¿",
			307: "Ç",
			317: "Ï",
			327: "×",
			337: "ß",
			347: "ç",
			357: "ï",
			367: "÷",
			377: "ÿ",
			250: " ̈",
			260: "°",
			270: " ̧",
			300: "À",
			310: "È",
			320: "Ð",
			330: "Ø",
			340: "à",
			350: "è",
			360: "ð",
			370: "ø",
			251: "©",
			261: "±",
			271: "1",
			301: "Á",
			311: "É",
			321: "Ñ",
			331: "Ù",
			341: "á",
			351: "é",
			361: "ñ",
			371: "ù"
		};
		this.translateString = function(e) {
			var t = e.split("\\");
			if (t.length === 1) return e;
			var n = null;
			return t.forEach(function(e) {
				if (n === null) n = e;
				else {
					var t = o[e.substring(0, 2)];
					t === void 0 ? (t = c[e.substring(0, 3)], t === void 0 ? (t = s[e.substring(0, 1)], t === void 0 ? n += "\\" + e : n += t + e.substring(1)) : n += t + e.substring(3)) : n += t + e.substring(2);
				}
			}), n;
		}, this.getNumber = function(e, t) {
			for (var n = 0; t < e.length;) switch (e[t]) {
				case "0":
					n *= 10, t++;
					break;
				case "1":
					n = n * 10 + 1, t++;
					break;
				case "2":
					n = n * 10 + 2, t++;
					break;
				case "3":
					n = n * 10 + 3, t++;
					break;
				case "4":
					n = n * 10 + 4, t++;
					break;
				case "5":
					n = n * 10 + 5, t++;
					break;
				case "6":
					n = n * 10 + 6, t++;
					break;
				case "7":
					n = n * 10 + 7, t++;
					break;
				case "8":
					n = n * 10 + 8, t++;
					break;
				case "9":
					n = n * 10 + 9, t++;
					break;
				default: return {
					num: n,
					index: t
				};
			}
			return {
				num: n,
				index: t
			};
		}, this.getFraction = function(e, t) {
			var n = 1, r = 1;
			if (e[t] !== "/") {
				var i = this.getNumber(e, t);
				n = i.num, t = i.index;
			}
			if (e[t] === "/") if (t++, e[t] === "/") {
				for (var a = .5; e[t++] === "/";) a /= 2;
				return {
					value: n * a,
					index: t - 1
				};
			} else {
				var o = t, s = this.getNumber(e, t);
				s.num === 0 && o === t && (s.num = 2), s.num !== 0 && (r = s.num), t = s.index;
			}
			return {
				value: n / r,
				index: t
			};
		};
		function l(e) {
			let t = /^(\d+)\./.exec(e);
			return t ? t[1] : null;
		}
		var u = [
			{
				match: /,\s*The$/,
				replace: "The "
			},
			{
				match: /,\s*the$/,
				replace: "the "
			},
			{
				match: /,\s*A$/,
				replace: "A "
			},
			{
				match: /,\s*a$/,
				replace: "a "
			},
			{
				match: /,\s*An$/,
				replace: "An "
			},
			{
				match: /,\s*an$/,
				replace: "an "
			},
			{
				match: /,\s*Da$/,
				replace: "Da "
			},
			{
				match: /,\s*La$/,
				replace: "La "
			},
			{
				match: /,\s*Le$/,
				replace: "Le "
			},
			{
				match: /,\s*Les$/,
				replace: "Les "
			},
			{
				match: /,\s*Ye$/,
				replace: "Ye "
			}
		];
		this.theReverser = function(e) {
			for (var t = 0; t < u.length; t++) {
				var n = u[t], r = e.match(n.match);
				if (r) {
					var i = l(e);
					i && (e = e.replace(i + ".", ""), e = e.trim());
					var a = r[0].length, o = n.replace + e.substring(0, e.length - a);
					return i && (o = i + ". " + o), o;
				}
			}
			return e;
		}, this.stripComment = function(e) {
			var t = e.indexOf("%");
			return t >= 0 ? n.strip(e.substring(0, t)) : n.strip(e);
		}, this.getInt = function(e) {
			var t = parseInt(e);
			if (isNaN(t)) return { digits: 0 };
			var n = "" + t;
			return {
				value: t,
				digits: e.indexOf(n) + n.length
			};
		}, this.getFloat = function(e) {
			var t = parseFloat(e);
			if (isNaN(t)) return { digits: 0 };
			var n = "" + t;
			return {
				value: t,
				digits: e.indexOf(n) + n.length
			};
		}, this.getMeasurement = function(e) {
			if (e.length === 0) return { used: 0 };
			var t = 1, n = "";
			if (e[0].token === "-") e.shift(), n = "-", t++;
			else if (e[0].type !== "number") return { used: 0 };
			if (n += e.shift().token, e.length === 0) return {
				used: 1,
				value: parseInt(n)
			};
			var r = e.shift();
			if (r.token === ".") {
				if (t++, e.length === 0) return {
					used: t,
					value: parseInt(n)
				};
				if (e[0].type === "number" && (r = e.shift(), n = n + "." + r.token, t++, e.length === 0)) return {
					used: t,
					value: parseFloat(n)
				};
				r = e.shift();
			}
			switch (r.token) {
				case "pt": return {
					used: t + 1,
					value: parseFloat(n)
				};
				case "px": return {
					used: t + 1,
					value: parseFloat(n)
				};
				case "cm": return {
					used: t + 1,
					value: parseFloat(n) / 2.54 * 72
				};
				case "in": return {
					used: t + 1,
					value: parseFloat(n) * 72
				};
				default: return e.unshift(r), {
					used: t,
					value: parseFloat(n)
				};
			}
		};
		var d = function(e) {
			return e = e.replace(/\\n/g, "\n"), e = e.replace(/\\"/g, "\""), e;
		};
		this.getBrackettedSubstring = function(e, t, n, r) {
			for (var i = r || e[t], a = t + 1, o = !1; a < e.length && (o || e[a] !== i);) o = e[a] === "\\", ++a;
			return e[a] === i ? [
				a - t + 1,
				d(e.substring(t + 1, a)),
				!0
			] : (a = t + n, a > e.length - 1 && (a = e.length - 1), [
				a - t + 1,
				d(e.substring(t + 1, a)),
				!1
			]);
		};
	};
	r.prototype.peekLine = function() {
		return this.lines[this.lineIndex];
	}, r.prototype.nextLine = function() {
		if (this.lineIndex > 0 && (this.multilineVars.iChar += this.lines[this.lineIndex - 1].length + 1), this.lineIndex < this.lines.length) {
			var e = this.lines[this.lineIndex];
			return this.lineIndex++, e;
		}
		return null;
	}, t.exports = r;
})), require_wrap_lines = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n) {
		if (!(!t || e.lines.length === 0)) {
			var a = e.deline({ lineBreaks: !1 }), o = i(a, t);
			e.lines = r(a, o, n), e.lineBreaks = o;
		}
	}
	function r(e, t, n) {
		for (var r = [], i = [], a = [], o = 1, s = 0; s < t.length; s++) {
			var c = t[s];
			if (e[c.ogLine].staff) {
				var l = e[c.ogLine].staff[c.staff];
				if (r[c.line] || (r[c.line] = { staff: [] }), !r[c.line].staff[c.staff]) {
					r[c.line].staff[c.staff] = { voices: [] }, n !== void 0 && c.staff === 0 && c.line > 0 && (r[c.line].staff[c.staff].barNumber = o);
					for (var u = Object.keys(l), d = 0; d < u.length; d++) {
						var f = u[d] === "voices";
						u[d] === "meter" && c.line !== 0 && (f = !0), f || (r[c.line].staff[c.staff][u[d]] = l[u[d]]);
					}
					i[c.staff] && (r[c.line].staff[c.staff].key = i[c.staff]);
				}
				r[c.line].staff[c.staff].voices[c.voice] || (r[c.line].staff[c.staff].voices[c.voice] = []), r[c.line].staff[c.staff].voices[c.voice] = e[c.ogLine].staff[c.staff].voices[c.voice].slice(c.start, c.end + 1), a[c.staff * 10 + c.voice] && r[c.line].staff[c.staff].voices[c.voice].unshift({
					el_type: "stem",
					direction: a[c.staff * 10 + c.voice].direction
				});
				for (var p = r[c.line].staff[c.staff].voices[c.voice], m = p.length - 1; m >= 0; m--) if (p[m].el_type === "key") {
					i[c.staff] = {
						root: p[m].root,
						acc: p[m].acc,
						mode: p[m].mode,
						accidentals: p[m].accidentals.filter(function(e) {
							return e.acc !== "natural";
						})
					};
					break;
				}
				for (m = p.length - 1; m >= 0; m--) if (p[m].el_type === "stem") {
					a[c.staff * 10 + c.voice] = { direction: p[m].direction };
					break;
				}
				if (n !== void 0 && c.staff === 0 && c.voice === 0) for (m = 0; m < p.length; m++) p[m].el_type === "bar" && (o++, m === p.length - 1 ? delete p[m].barNumber : p[m].barNumber = o);
			} else r[c.line] = e[c.ogLine];
		}
		for (var h = 0; h < r.length; h++) r[h].staff && (r[h].staff = r[h].staff.filter(function(e) {
			return e != null;
		}));
		return r;
	}
	function i(e, t) {
		for (var n = [], r = 0, i = 0, a = 0, o = 0; o < e.length; o++) {
			var s = e[o];
			if (s.staff) {
				var c = i, l = t[r];
				r++;
				for (var u = 0; u < s.staff.length; u++) for (var d = s.staff[u], f = 0; f < d.voices.length; f++) {
					a = c;
					for (var p = 0, m = 0, h = d.voices[f], g = 0, _ = 0; _ < h.length; _++) h[_].el_type === "bar" && (l[m] === p && (n.push({
						ogLine: o,
						line: a,
						staff: u,
						voice: f,
						start: g,
						end: _
					}), g = _ + 1, a++, i = Math.max(i, a), m++), p++);
					n.push({
						ogLine: o,
						line: a,
						staff: u,
						voice: f,
						start: g,
						end: h.length
					}), a++, i = Math.max(i, a);
				}
			} else n.push({
				ogLine: o,
				line: a
			}), a++, i = Math.max(i, a);
		}
		return n;
	}
	function a(e, t) {
		for (var n = [], r = [], i = 0, a = 0; a < e.length; a++) {
			var o = e[a], s = i + o;
			s < t ? i = s : t - i < s - t && i > 0 ? (n.push(a - 1), r.push(Math.round(i - o)), i = o) : a < e.length - 1 && (n.push(a), r.push(Math.round(i)), i = 0);
		}
		return r.push(Math.round(i)), {
			lineBreaks: n,
			totals: r
		};
	}
	function o(e) {
		for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
		return t;
	}
	function s(e, t, n, r, i, a, s, c, l, u, d) {
		for (var f = u; f < e.length; f++) {
			var p = e[f];
			n += p, r += p;
			var m = Math.abs(n - t[c]);
			if (Math.abs(m - a) < t[0] / 10) if (m < a) {
				var h = o(i), g = o(l);
				g.push(f - 1), h.push(r - p), d.push({
					accumulator: n,
					lineAccumulator: p,
					lineWidths: h,
					lastVariance: Math.abs(n - t[c + 1]),
					highestVariance: Math.max(s, a),
					currLine: c + 1,
					lineBreaks: g,
					startIndex: f + 1
				});
			} else m > a && f < e.length - 1 && (h = o(i), g = o(l), d.push({
				accumulator: n,
				lineAccumulator: r,
				lineWidths: h,
				lastVariance: m,
				highestVariance: Math.max(s, m),
				currLine: c,
				lineBreaks: g,
				startIndex: f + 1
			}));
			m > a ? (l.push(f - 1), c++, s = Math.max(s, a), a = Math.abs(n - t[c]), i.push(r - p), r = p) : a = m;
		}
		i.push(r);
	}
	function c(e, t, n, r) {
		for (var i = Math.ceil(e.total / t), a = Math.floor(e.total / i), o = [], c = 0; c < i; c++) o.push(a * (c + 1));
		var l = [];
		l.push({
			accumulator: 0,
			lineAccumulator: 0,
			lineWidths: [],
			lastVariance: 999999,
			highestVariance: 0,
			currLine: 0,
			lineBreaks: [],
			startIndex: 0
		});
		for (var u = 0; u < l.length;) s(e.measureWidths, o, l[u].accumulator, l[u].lineAccumulator, l[u].lineWidths, l[u].lastVariance, l[u].highestVariance, l[u].currLine, l[u].lineBreaks, l[u].startIndex, l), u++;
		for (c = 0; c < l.length; c++) {
			var d = l[c];
			d.variances = [], d.aveVariance = 0;
			for (var f = 0; f < d.lineWidths.length; f++) {
				var p = d.lineWidths[f];
				d.variances.push(p - o[0]), d.aveVariance += Math.abs(p - o[0]);
			}
			d.aveVariance /= d.lineWidths.length, r.attempts.push({
				type: "optimizeLineWidths",
				lineBreaks: d.lineBreaks,
				variances: d.variances,
				aveVariance: d.aveVariance,
				widths: e.measureWidths
			});
		}
		var m = 9999999, h = -1;
		for (c = 0; c < l.length; c++) d = l[c], d.aveVariance < m && (m = d.aveVariance, h = c);
		return {
			failed: !1,
			lineBreaks: l[h].lineBreaks,
			variance: l[h].highestVariance
		};
	}
	function l(e, t, n) {
		for (var r = [], i = [], a = 0, o = !1, s = 0; s < e.length; s++) a += e[s], a > t && (o = !0), s % n === n - 1 && (s !== e.length - 1 && r.push(s), i.push(Math.round(a)), a = 0);
		return {
			failed: o,
			totals: i,
			lineBreaks: r
		};
	}
	function u(e, t, n) {
		var r = {
			lineBreaks: e,
			staffwidth: t
		};
		for (var i in n) n.hasOwnProperty(i) && i !== "wrap" && i !== "staffwidth" && (r[i] = n[i]);
		return { revisedParams: r };
	}
	function d(e, t, n) {
		if (t.length === 0 || n.staffwidth < t[0].left) return {
			reParse: !1,
			explanation: "Staff width is narrower than the margin",
			revisedParams: n
		};
		var r = n.scale ? Math.max(n.scale, .1) : 1, i = n.wrap.minSpacing ? Math.max(parseFloat(n.wrap.minSpacing), 1) : 1, o = n.wrap.minSpacingLimit ? Math.max(parseFloat(n.wrap.minSpacingLimit), 1) : i - .1, s = n.wrap.maxSpacing ? Math.max(parseFloat(n.wrap.maxSpacing), 1) : void 0;
		n.wrap.lastLineLimit && !s && (s = Math.max(parseFloat(n.wrap.lastLineLimit), 1));
		for (var d = n.wrap.preferredMeasuresPerLine ? Math.max(parseInt(n.wrap.preferredMeasuresPerLine, 10), 0) : void 0, f = [], p = [], m = 0; m < t.length; m++) {
			var h = t[m], g = n.staffwidth - h.left, _ = g / i / r, v = g / s / r, y = g / o / r, b = {
				widths: h,
				lineBreakPoint: _,
				minLineSize: v,
				attempts: [],
				staffWidth: n.staffwidth,
				minWidth: Math.round(y)
			}, x = null;
			if (d) {
				var S = l(h.measureWidths, _, d);
				b.attempts.push({
					type: "Fixed Measures Per Line",
					preferredMeasuresPerLine: d,
					lineBreaks: S.lineBreaks,
					failed: S.failed,
					totals: S.totals
				}), S.failed || (x = S.lineBreaks);
			}
			if (!x) {
				var C = a(h.measureWidths, _);
				b.attempts.push({
					type: "Free Form",
					lineBreaks: C.lineBreaks,
					totals: C.totals
				}), x = C.lineBreaks, x.length > 0 && h.measureWidths.length < 25 && (C = c(h, _, x, b), b.attempts.push({
					type: "Optimize",
					failed: C.failed,
					reason: C.reason,
					lineBreaks: C.lineBreaks,
					totals: C.totals
				}), C.failed || (x = C.lineBreaks));
			}
			f.push(x), p.push(b);
		}
		var w = n.staffwidth, T = u(f, w, n);
		return T.explanation = p, T.reParse = !0, T;
	}
	t.exports = {
		wrapLines: n,
		calcLineWraps: d
	};
})), require_spacing = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = {};
	n.FONTEM = 360, n.FONTSIZE = 30, n.STEP = n.FONTSIZE * 93 / 720, n.SPACE = 10, n.TOPNOTE = 15, n.STAVEHEIGHT = 100, n.INDENT = 50, t.exports = n;
})), require_abc_midi_sequencer = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n, r = require_abc_common();
	(function() {
		var e = 1, t = 128;
		n = function(n, d) {
			d ||= {};
			var h, g = d.program || 0, _ = d.midiTranspose || 0;
			n.visualTranspose && (_ -= n.visualTranspose);
			var v = d.channel || 0, y = !1, b = d.drum || "", x = d.drumBars || 1, S = d.drumIntro || 0, C = b !== "", w = !!d.drumOff, T = [], E = 50;
			g = parseInt(g, 10), _ = parseInt(_, 10), v = parseInt(v, 10), v === 10 && (g = t), b = b.split(" "), x = parseInt(x, 10), S = parseInt(S, 10);
			var D = n.formatting.bagpipes;
			D && (g = 71);
			var O = [];
			if (n.formatting.midi) {
				var k = n.formatting.midi;
				k.program && k.program.length > 0 && (g = k.program[0], k.program.length > 1 && (g = k.program[1], v = k.program[0]), y = !0), k.transpose && (_ = k.transpose[0]), k.channel && (v = k.channel[0], y = !0), k.drum && (b = k.drum), k.drumbars && (x = k.drumbars[0]), k.drumon && (C = !0), v === 10 && (g = t), k.beat && O.push({
					el_type: "beat",
					beats: k.beat
				}), k.nobeataccents && O.push({
					el_type: "beataccents",
					value: !1
				});
			}
			h = d.qpm ? parseInt(d.qpm, 10) : n.metaText.tempo ? l(n.metaText.tempo, n.getBeatLength()) : d.defaultQpm ? d.defaultQpm : 180;
			var A = [];
			D && A.push({ el_type: "bagpipes" }), A.push({
				el_type: "instrument",
				program: g
			}), v && A.push({
				el_type: "channel",
				channel: v
			}), _ && A.push({
				el_type: "transpose",
				transpose: _
			}), A.push({
				el_type: "tempo",
				qpm: h
			});
			for (var j = 0; j < O.length; j++) A.push(O[j]);
			var M = [], N = [], P = [], F = [], I = [0], L = {};
			L[0] = {
				el_type: "tempo",
				qpm: h,
				timing: 0
			};
			for (var R, z = [], B = [], V = !1, H = n.lines, U = 0; U < H.length; U++) {
				var W = H[U];
				if (W.staff) {
					for (var xt = W.staff, G = 0, St = 0; St < xt.length; St++) {
						var K = xt[St];
						if (!(K.clef && K.clef.type === "TAB")) for (var q = 0; q < K.voices.length; q++) {
							var J = K.voices[q];
							if (!M[G]) {
								M[G] = [].concat(JSON.parse(JSON.stringify(A)));
								var Y = c(W.staff, G);
								Y && M[G].unshift({
									el_type: "name",
									trackName: Y
								});
							}
							if (_ && K.clef.type === "perc" && M[G].push({
								el_type: "transpose",
								transpose: 0
							}), K.clef && K.clef.type === "perc" && !y) for (var Ct = 0; Ct < M[G].length; Ct++) M[G][Ct].el_type === "instrument" && (M[G][Ct].program = t);
							else K.key && f(M[G], K.key);
							K.meter && p(M[G], K.meter), !V && C && (M[G].push({
								el_type: "drum",
								params: {
									pattern: b,
									bars: x,
									on: C,
									intro: S
								}
							}), V = !0), K.clef && K.clef.type !== "perc" && K.clef.transpose && (K.clef.el_type = "clef", M[G].push({
								el_type: "transpose",
								transpose: K.clef.transpose
							}), N[G] = !1), K.clef && K.clef.type && (K.clef.type.indexOf("-8") >= 0 ? (M[G].push({
								el_type: "transpose",
								transpose: -12
							}), N[G] = !0) : K.clef.type.indexOf("+8") >= 0 ? (M[G].push({
								el_type: "transpose",
								transpose: 12
							}), N[G] = !0) : N[G] && (M[G].push({
								el_type: "transpose",
								transpose: 0
							}), N[G] = !1)), n.formatting.midi && n.formatting.midi.drumoff && (M[G].push({ el_type: "bar" }), M[G].push({
								el_type: "drum",
								params: {
									pattern: "",
									on: !1
								}
							}));
							var wt = 0, X = 0, Tt = 0, Et = 0;
							R = [
								105,
								95,
								85,
								1
							];
							for (var Z = 0; Z < J.length; Z++) {
								var Q = J[Z];
								switch (Q.el_type) {
									case "note":
										if (P[q] && (R[0] += P[q], R[1] += P[q], R[2] += P[q], M[G].push({
											el_type: "beat",
											beats: R.slice(0)
										})), F[q] && (R[0] += F[q], R[1] += F[q], R[2] += F[q], M[G].push({
											el_type: "beat",
											beats: R.slice(0)
										})), e(Q), !Q.rest || Q.rest.type !== "spacer") {
											var $ = {
												elem: Q,
												el_type: "note",
												timing: I[G]
											};
											if (Q.style ? $.style = Q.style : T[G] && ($.style = T[G]), $.duration = Q.duration === 0 ? .25 : Q.duration, Q.startTriplet) {
												if (X = Q.tripletMultiplier, Tt = Q.startTriplet * X * Q.duration, Q.startTriplet !== Q.tripletR && Z + Q.tripletR <= J.length) {
													for (var Dt = 0, Ot = Z; Ot < Z + Q.tripletR; Ot++) Dt += J[Ot].duration;
													Tt = X * Dt;
												}
												$.duration *= X, $.duration = Math.round($.duration * 1e6) / 1e6, Et = $.duration;
											} else X && (Q.endTriplet ? (X = 0, $.duration = Math.round((Tt - Et) * 1e6) / 1e6) : ($.duration *= X, $.duration = Math.round($.duration * 1e6) / 1e6, Et += $.duration));
											Q.rest && ($.rest = Q.rest), Q.decoration && ($.decoration = Q.decoration.slice(0)), Q.pitches && ($.pitches = r.cloneArray(Q.pitches)), Q.gracenotes && ($.gracenotes = r.cloneArray(Q.gracenotes)), Q.chord && ($.chord = r.cloneArray(Q.chord)), M[G].push($), Q.style === "rhythm" && s(M), wt++, I[G] += $.duration;
										}
										break;
									case "key":
									case "keySignature":
										f(M[G], Q);
										break;
									case "meter":
										p(M[G], Q);
										break;
									case "clef":
										Q.transpose && M[G].push({
											el_type: "transpose",
											transpose: Q.transpose
										}), Q.type && (Q.type.indexOf("-8") >= 0 ? M[G].push({
											el_type: "transpose",
											transpose: -12
										}) : Q.type.indexOf("+8") >= 0 && M[G].push({
											el_type: "transpose",
											transpose: 12
										}));
										break;
									case "tempo":
										h = l(Q, n.getBeatLength()), M[G].push({
											el_type: "tempo",
											qpm: h,
											timing: I[G]
										}), L["" + I[G]] = {
											el_type: "tempo",
											qpm: h,
											timing: I[G]
										};
										break;
									case "bar":
										wt > 0 && M[G].push({ el_type: "bar" }), e(Q), wt = 0;
										var kt = Q.type === "bar_right_repeat" || Q.type === "bar_dbl_repeat", At = Q.startEnding === "1", jt = Q.type === "bar_left_repeat" || Q.type === "bar_dbl_repeat" || Q.type === "bar_right_repeat";
										if (kt) {
											var Mt = z[G];
											Mt ||= 0;
											var Nt = B[G];
											Nt ||= M[G].length;
											for (var Pt = Mt; Pt < Nt; Pt++) {
												var Ft = Object.assign({}, M[G][Pt]);
												Ft.pitches &&= r.cloneArray(Ft.pitches), M[G].push(Ft);
											}
											B[G] = void 0, z[G] = void 0;
										}
										At && (B[G] = M[G].length), jt && (z[G] = M[G].length);
										break;
									case "style":
										T[G] = Q.head;
										break;
									case "timeSignature":
										M[G].push(u(Q));
										break;
									case "part": break;
									case "stem":
									case "scale":
									case "break":
									case "font": break;
									case "midi":
										var It = !1;
										switch (Q.cmd) {
											case "drumon":
												C = !0, It = !0;
												break;
											case "drumoff":
												C = !1, It = !0;
												break;
											case "drum":
												b = Q.params, It = !0;
												break;
											case "drumbars":
												x = Q.params[0], It = !0;
												break;
											case "drummap": break;
											case "channel":
												Q.params[0] === 10 && M[G].push({
													el_type: "instrument",
													program: t
												});
												break;
											case "program":
												m(M[G], {
													el_type: "instrument",
													program: Q.params[0]
												}), y = !0;
												break;
											case "transpose":
												M[G].push({
													el_type: "transpose",
													transpose: Q.params[0]
												});
												break;
											case "gchordoff":
												M[G].push({
													el_type: "gchordOn",
													tacet: !0
												});
												break;
											case "gchordon":
												M[G].push({
													el_type: "gchordOn",
													tacet: !1
												});
												break;
											case "beat":
												M[G].push({
													el_type: "beat",
													beats: Q.params
												});
												break;
											case "nobeataccents":
												M[G].push({
													el_type: "beataccents",
													value: !1
												});
												break;
											case "beataccents":
												M[G].push({
													el_type: "beataccents",
													value: !0
												});
												break;
											case "vol":
											case "volinc":
												M[G].push({
													el_type: Q.cmd,
													volume: Q.params[0]
												});
												break;
											case "swing":
											case "gchord":
											case "bassvol":
											case "chordvol":
												M[G].push({
													el_type: Q.cmd,
													param: Q.params[0]
												});
												break;
											case "bassprog":
											case "chordprog":
												M[G].push({
													el_type: Q.cmd,
													value: Q.params[0],
													octaveShift: Q.params[1]
												});
												break;
											case "gchordbars":
												M[G].push({
													el_type: Q.cmd,
													param: Q.params[0]
												});
												break;
											default: console.log("MIDI seq: midi cmd not handled: ", Q.cmd, Q);
										}
										It && (M[0].push({
											el_type: "drum",
											params: {
												pattern: b,
												bars: x,
												intro: S,
												on: C
											}
										}), V = !0);
										break;
									default: console.log("MIDI: element type " + Q.el_type + " not handled.");
								}
							}
							G++, I[G] || (I[G] = 0);
						}
					}
					function e(e) {
						var t = {
							pppp: [
								15,
								10,
								5,
								1
							],
							ppp: [
								30,
								20,
								10,
								1
							],
							pp: [
								45,
								35,
								20,
								1
							],
							p: [
								60,
								50,
								35,
								1
							],
							mp: [
								75,
								65,
								50,
								1
							],
							mf: [
								90,
								80,
								65,
								1
							],
							f: [
								105,
								95,
								80,
								1
							],
							ff: [
								120,
								110,
								95,
								1
							],
							fff: [
								127,
								125,
								110,
								1
							],
							ffff: [
								127,
								125,
								110,
								1
							]
						}, n;
						if (e.decoration) {
							if (e.decoration.indexOf("pppp") >= 0 ? n = "pppp" : e.decoration.indexOf("ppp") >= 0 ? n = "ppp" : e.decoration.indexOf("pp") >= 0 ? n = "pp" : e.decoration.indexOf("p") >= 0 ? n = "p" : e.decoration.indexOf("mp") >= 0 ? n = "mp" : e.decoration.indexOf("mf") >= 0 ? n = "mf" : e.decoration.indexOf("f") >= 0 ? n = "f" : e.decoration.indexOf("ff") >= 0 ? n = "ff" : e.decoration.indexOf("fff") >= 0 ? n = "fff" : e.decoration.indexOf("ffff") >= 0 && (n = "ffff"), n) {
								R = t[n].slice(0);
								let r = [R];
								Array.isArray(e.decoration) && (r = [], e.decoration.forEach((e) => {
									e in t && r.push(t[e].slice(0));
								})), M[G].push({
									el_type: "beat",
									beats: R.slice(0),
									volumesPerNotePitch: r
								}), P[q] = !1, F[q] = !1;
							}
							if (e.decoration.indexOf("crescendo(") >= 0) {
								var r = i(J, Z, "crescendo)"), o = Math.min(127, R[0] + E), s = a(J, Z + r + 1, Object.keys(t));
								s && (o = t[s][0]), r > 0 ? P[q] = Math.floor((o - R[0]) / r) : P[q] = !1, F[q] = !1;
							} else if (e.decoration.indexOf("crescendo)") >= 0) P[q] = !1;
							else if (e.decoration.indexOf("diminuendo(") >= 0) {
								var c = i(J, Z, "diminuendo)"), l = Math.max(15, R[0] - E), u = a(J, Z + c + 1, Object.keys(t));
								u && (l = t[u][0]), P[q] = !1, c > 0 ? F[q] = Math.floor((l - R[0]) / c) : F[q] = !1;
							} else e.decoration.indexOf("diminuendo)") >= 0 && (F[q] = !1);
						}
					}
				}
			}
			if (o(M, L), S) for (var Lt = n.getPickupLength(), Rt = 0; Rt < M.length; Rt++) {
				for (var zt = 0; M[Rt][zt].el_type !== "note" && M[Rt].length > zt;) zt++;
				if (M[Rt].length > zt) {
					for (var Ot = 0; Ot < S; Ot++) Lt === 0 || Ot < S - 1 ? (M[Rt].splice(zt, 0, {
						el_type: "note",
						rest: { type: "rest" },
						duration: e
					}, { el_type: "bar" }), zt += 2) : M[Rt].splice(zt++, 0, {
						el_type: "note",
						rest: { type: "rest" },
						duration: e - Lt
					});
					w &&= (C = !1, M[Rt].splice(zt++, 0, {
						el_type: "drum",
						params: {
							pattern: b,
							bars: x,
							intro: S,
							on: C
						}
					}), !1);
				}
			}
			return M.length > 0 && M[0].length > 0 && (M[0][0].pickupLength = n.getPickupLength()), M;
		};
		function i(e, t, n) {
			for (var r = 0, i = t + 1; i < e.length; i++) if (e[i].el_type === "note" && r++, e[i].decoration && e[i].decoration.indexOf(n) >= 0) return r;
			return r;
		}
		function a(e, t, n) {
			for (var r = Math.min(e.length, t + 3), i = t; i < r; i++) if (e[i].el_type === "note" && e[i].decoration) {
				for (var a = 0; a < e[i].decoration.length; a++) if (n.indexOf(e[i].decoration[a]) >= 0) return e[i].decoration[a];
			}
			return null;
		}
		function o(e, t) {
			if (!(!t || t.length === 0)) for (var n = Object.keys(t), r = 0; r < e.length; r++) for (var i = e[r], a = t[0] ? t[0].qpm : 0, o = 0; o < i.length; o++) {
				var s = i[o];
				s.el_type === "tempo" && (a = s.qpm), n.indexOf("" + s.timing) >= 0 && a !== t["" + s.timing].qpm && (a = t["" + s.timing].qpm, s.el_type === "tempo" ? (s.qpm = t["" + s.timing].qpm, o++) : (e[r].splice(o, 0, {
					el_type: "tempo",
					qpm: t["" + s.timing].qpm,
					timing: s.timing
				}), o += 2));
			}
		}
		function s(e) {
			for (var t = 0; t < e.length; t++) for (var n = e[t], r = n.length - 1; r >= 0 && n[r].el_type !== "bar";) n[r].noChordVoice = !0, r--;
		}
		function c(e, t) {
			if (!(!e || e.length <= t || !e[t].title)) return e[t].title.join(" ");
		}
		function l(e, t) {
			var n = 1 / 4;
			e.duration && (n = e.duration[0]);
			var r = 60;
			return e.bpm && (r = e.bpm), n * r / t;
		}
		function u(t) {
			var n;
			switch (t.type) {
				case "common_time":
					n = {
						el_type: "meter",
						num: 4,
						den: 4
					};
					break;
				case "cut_time":
					n = {
						el_type: "meter",
						num: 2,
						den: 2
					};
					break;
				case "specified":
					n = {
						el_type: "meter",
						num: t.value[0].num,
						den: t.value[0].den
					};
					break;
				default: n = { el_type: "meter" };
			}
			return e = n.num / n.den, n;
		}
		function d(e) {
			for (var t = [], n = 0; n < e.length; n++) e[n].acc !== "natural" && t.push(e[n]);
			return t;
		}
		function f(e, t) {
			m(e, t.root === "HP" ? {
				el_type: "key",
				accidentals: [
					{
						acc: "natural",
						note: "g"
					},
					{
						acc: "sharp",
						note: "f"
					},
					{
						acc: "sharp",
						note: "c"
					}
				]
			} : {
				el_type: "key",
				accidentals: d(t.accidentals)
			});
		}
		function p(e, t) {
			m(e, u(t));
		}
		function m(e, t) {
			for (var n = e.length - 1; n >= 0; n--) if (e[n].el_type === t.el_type) {
				JSON.stringify(e[n]) !== JSON.stringify(t) && e.push(t);
				return;
			}
			e.push(t);
		}
	})(), t.exports = n;
})), require_chord_track = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t, n, r) {
		this.chordTrack = [], this.chordTrackFinished = !1, this.chordChannel = e, this.currentChords = [], this.lastChord, this.chordLastBar, this.chordsOff = !!t, this.gChordTacet = this.chordsOff, this.hasRhythmHead = !1, this.transpose = 0, this.lastBarTime = 0, this.meter = r, this.tempoChangeFactor = 1, this.bassInstrument = n.bassprog && n.bassprog.length >= 1 ? n.bassprog[0] : 0, this.chordInstrument = n.chordprog && n.chordprog.length >= 1 ? n.chordprog[0] : 0, this.bassOctaveShift = n.bassprog && n.bassprog.length === 2 ? n.bassprog[1] : 0, this.chordOctaveShift = n.chordprog && n.chordprog.length === 2 ? n.chordprog[1] : 0, this.boomVolume = n.bassvol && n.bassvol.length === 1 ? n.bassvol[0] : 64, this.chickVolume = n.chordvol && n.chordvol.length === 1 ? n.chordvol[0] : 48, n.gchord && n.gchord.length > 0 ? this.overridePattern = a(n.gchord[0]) : this.overridePattern = void 0;
	};
	n.prototype.setMeter = function(e) {
		this.meter = e;
	}, n.prototype.setTempoChangeFactor = function(e) {
		this.tempoChangeFactor = e;
	}, n.prototype.setLastBarTime = function(e) {
		this.lastBarTime = e;
	}, n.prototype.setTranspose = function(e) {
		this.transpose = e;
	}, n.prototype.setRhythmHead = function(e, t) {
		this.hasRhythmHead = e;
		var n = [];
		if (e && this.lastChord && this.lastChord.chick) for (var r = 0; r < this.lastChord.chick.length; r++) {
			var i = Object.assign({}, t.pitches[0]);
			i.actualPitch = this.lastChord.chick[r], n.push(i);
		}
		return n;
	}, n.prototype.barEnd = function(e) {
		this.chordTrack.length > 0 && !this.chordTrackFinished && (this.resolveChords(this.lastBarTime, c(e.time)), this.currentChords = []), this.chordLastBar = this.lastChord;
	}, n.prototype.gChordOn = function(e) {
		this.chordsOff || (this.gChordTacet = e.tacet);
	}, n.prototype.paramChange = function(e) {
		switch (e.el_type) {
			case "gchord":
				e.param && e.param.length > 0 ? this.overridePattern = a(e.param) : this.overridePattern = void 0;
				break;
			case "bassprog":
				this.bassInstrument = e.value, e.octaveShift != null && e.octaveShift != null ? this.bassOctaveShift = e.octaveShift : this.bassOctaveShift = 0;
				break;
			case "chordprog":
				this.chordInstrument = e.value, e.octaveShift != null && e.octaveShift != null ? this.chordOctaveShift = e.octaveShift : this.chordOctaveShift = 0;
				break;
			case "bassvol":
				this.boomVolume = e.param;
				break;
			case "chordvol":
				this.chickVolume = e.param;
				break;
			default: console.log("unhandled midi param", e);
		}
	}, n.prototype.finish = function() {
		this.chordTrackEmpty() || (this.chordTrackFinished = !0);
	}, n.prototype.addTrack = function(e) {
		this.chordTrackEmpty() || e.push(this.chordTrack);
	}, n.prototype.findChord = function(e) {
		if (this.gChordTacet) return "break";
		if (this.chordTrackFinished || !e.chord || e.chord.length === 0) return null;
		for (var t = 0; t < e.chord.length; t++) {
			var n = e.chord[t];
			if (n.position === "default") return n.name;
			if (this.breakSynonyms.indexOf(n.name.toLowerCase()) >= 0) return "break";
		}
		return null;
	}, n.prototype.interpretChord = function(e) {
		if (e.length !== 0) {
			if (e === "break") return { chick: [] };
			var t = e.substring(0, 1);
			if (t === "(") {
				if (e = e.substring(1, e.length - 1), e.length === 0) return;
				t = e.substring(0, 1);
			}
			var n = this.basses[t];
			if (n) {
				for (var r = this.transpose; r < -8;) r += 12;
				for (; r > 8;) r -= 12;
				n += r, n < 33 ? n += 12 : n > 44 && (n -= 12);
				var i = n;
				n += this.bassOctaveShift * 12;
				var a = n - 5, o;
				e.length === 1 && (o = this.chordNotes(n, ""));
				var s = e.substring(1), c = s.substring(0, 1);
				c === "b" || c === "♭" ? (i--, n--, a--, s = s.substring(1)) : (c === "#" || c === "♯") && (i++, n++, a++, s = s.substring(1));
				var l = s.split("/");
				if (o = this.chordNotes(i, l[0]), o.length >= 3) {
					var u = o[2] - o[0];
					a = a + u - 7;
				}
				if (l.length === 2 && this.basses[l[1].substring(0, 1)]) {
					var d = l[1].substring(1), f = {
						"#": 1,
						"♯": 1,
						b: -1,
						"♭": -1
					}[d] || 0;
					n = this.basses[l[1].substring(0, 1)] + f + r, n += this.bassOctaveShift * 12, a = n;
				}
				return {
					boom: n,
					boom2: a,
					chick: o
				};
			}
		}
	}, n.prototype.chordNotes = function(e, t) {
		var n = this.chordIntervals[t];
		n ||= t.slice(0, 2).toLowerCase() === "ma" || t[0] === "M" ? this.chordIntervals.M : t[0] === "m" || t[0] === "-" ? this.chordIntervals.m : this.chordIntervals.M, e += 12, e += this.chordOctaveShift * 12;
		for (var r = [], i = 0; i < n.length; i++) r.push(e + n[i]);
		return r;
	}, n.prototype.writeNote = function(e, t, n, r, i, a) {
		e !== void 0 && this.chordTrack.push({
			cmd: "note",
			pitch: e,
			volume: n,
			start: this.lastBarTime + r * l(t, this.tempoChangeFactor),
			duration: l(i, this.tempoChangeFactor),
			gap: 0,
			instrument: a
		});
	}, n.prototype.chordTrackEmpty = function() {
		for (var e = !0, t = 0; t < this.chordTrack.length && e; t++) this.chordTrack[t].cmd === "note" && (e = !1);
		return e;
	}, n.prototype.resolveChords = function(e, t) {
		if (!this.hasRhythmHead) {
			var n = this.meter.num, i = this.meter.den, a = 1 / i, s = a / 2, c = parseInt(n, 10) / parseInt(i, 10) - (t - e) / this.tempoChangeFactor;
			Math.abs(c) < 1e-5 && (c = 0), (this.currentChords.length === 0 || this.currentChords[0].beat !== 0) && this.currentChords.unshift({
				beat: 0,
				chord: this.chordLastBar
			});
			var l = o(this.currentChords, 8 * n / i, a), u = this.overridePattern ? this.overridePattern : this.rhythmPatterns[n + "/" + i];
			if (c) {
				u = [];
				for (var d = (t - e) / this.tempoChangeFactor * 8, f = 0; f < d / 2; f += 2) u.push("chick"), u.push("");
			}
			if (!u) {
				u = [];
				for (var f = 0; f < 8 * n / i / 2; f++) u.push("chick"), u.push("");
			}
			for (var p = !0, m = Math.min(u.length, l.length), f = 0; f < m; f++) {
				f > 0 && l[f - 1] && l[f] && l[f - 1].boom !== l[f].boom && (p = !0);
				var h = u[f], g = h.indexOf("boom") >= 0, _ = !g && f !== 0 && u[0].indexOf("boom") >= 0 && (!l[f - 1] || l[f - 1].boom !== l[f].boom), v = r(l[f], h, p, _);
				g && (p = !1);
				for (var y = 0; y < v.length; y++) this.writeNote(v[y], .125, g || _ ? this.boomVolume : this.chickVolume, f, s, g || _ ? this.bassInstrument : this.chordInstrument), _ ? _ = !1 : g = !1;
			}
		}
	}, n.prototype.processChord = function(e) {
		if (!this.chordTrackFinished) {
			var t = this.findChord(e);
			if (t) {
				var n = this.interpretChord(t);
				if (n) {
					this.chordTrack.length === 0 && this.chordTrack.push({
						cmd: "program",
						channel: this.chordChannel,
						instrument: this.chordInstrument
					}), this.lastChord = n;
					var r = s(this.lastBarTime, c(e.time));
					this.currentChords.push({
						chord: this.lastChord,
						beat: r,
						start: c(e.time)
					});
				}
			}
		}
	};
	function r(e, t, n, r) {
		var a = [];
		if (!e) return a;
		t.indexOf("boom") >= 0 ? a.push(n ? e.boom : e.boom2) : r && a.push(e.boom);
		var o = e.chick.length;
		if (t.indexOf("chick") >= 0) for (var s = 0; s < o; s++) a.push(e.chick[s]);
		switch (t) {
			case "DO":
				a.push(e.chick[0]);
				break;
			case "MI":
				a.push(e.chick[1]);
				break;
			case "SOL":
				a.push(i(e, 2));
				break;
			case "TI":
				a.push(i(e, 3));
				break;
			case "TOP":
				a.push(i(e, 4));
				break;
			case "do":
				a.push(e.chick[0] + 12);
				break;
			case "mi":
				a.push(e.chick[1] + 12);
				break;
			case "sol":
				a.push(i(e, 2) + 12);
				break;
			case "ti":
				a.push(i(e, 3) + 12);
				break;
			case "top":
				a.push(i(e, 4) + 12);
				break;
		}
		return a;
	}
	function i(e, t) {
		var n = Math.floor(t / e.chick.length);
		return e.chick[t % e.chick.length] + n * 12;
	}
	function a(e) {
		for (var t = [], n = 0; n < e.length; n++) switch (e[n]) {
			case "z":
				t.push("");
				break;
			case "2":
				t.push("");
				break;
			case "c":
				t.push("chick");
				break;
			case "b":
				t.push("boom&chick");
				break;
			case "f":
				t.push("boom");
				break;
			case "G":
				t.push("DO");
				break;
			case "H":
				t.push("MI");
				break;
			case "I":
				t.push("SOL");
				break;
			case "J":
				t.push("TI");
				break;
			case "K":
				t.push("TOP");
				break;
			case "g":
				t.push("do");
				break;
			case "h":
				t.push("mi");
				break;
			case "i":
				t.push("sol");
				break;
			case "j":
				t.push("ti");
				break;
			case "k":
				t.push("top");
				break;
		}
		return t;
	}
	function o(e, t, n) {
		n *= 8;
		var r = [];
		if (e.length === 0) return r;
		for (var i = e[0].chord, a = 1; a < e.length; a++) {
			for (var o = e[a]; r.length < o.beat;) r.push(i);
			i = o.chord;
		}
		for (; r.length < t;) r.push(i);
		return r;
	}
	function s(e, t) {
		return (t - e) * 8;
	}
	n.prototype.breakSynonyms = [
		"break",
		"(break)",
		"no chord",
		"n.c.",
		"tacet"
	], n.prototype.basses = {
		A: 33,
		B: 35,
		C: 36,
		D: 38,
		E: 40,
		F: 41,
		G: 43
	}, n.prototype.chordIntervals = {
		dim: [
			0,
			3,
			6
		],
		"°": [
			0,
			3,
			6
		],
		"˚": [
			0,
			3,
			6
		],
		dim7: [
			0,
			3,
			6,
			9
		],
		"°7": [
			0,
			3,
			6,
			9
		],
		"˚7": [
			0,
			3,
			6,
			9
		],
		ø7: [
			0,
			3,
			6,
			10
		],
		"m7(b5)": [
			0,
			3,
			6,
			10
		],
		m7b5: [
			0,
			3,
			6,
			10
		],
		"m7♭5": [
			0,
			3,
			6,
			10
		],
		"-7(b5)": [
			0,
			3,
			6,
			10
		],
		"-7b5": [
			0,
			3,
			6,
			10
		],
		"7b5": [
			0,
			4,
			6,
			10
		],
		"7(b5)": [
			0,
			4,
			6,
			10
		],
		"7♭5": [
			0,
			4,
			6,
			10
		],
		"7(b9,b5)": [
			0,
			4,
			6,
			10,
			13
		],
		"7b9,b5": [
			0,
			4,
			6,
			10,
			13
		],
		"7(#9,b5)": [
			0,
			4,
			6,
			10,
			15
		],
		"7#9b5": [
			0,
			4,
			6,
			10,
			15
		],
		"maj7(b5)": [
			0,
			4,
			6,
			11
		],
		maj7b5: [
			0,
			4,
			6,
			11
		],
		"13(b5)": [
			0,
			4,
			6,
			10,
			14,
			21
		],
		"13b5": [
			0,
			4,
			6,
			10,
			14,
			21
		],
		m: [
			0,
			3,
			7
		],
		"-": [
			0,
			3,
			7
		],
		m6: [
			0,
			3,
			7,
			9
		],
		"-6": [
			0,
			3,
			7,
			9
		],
		m7: [
			0,
			3,
			7,
			10
		],
		"-7": [
			0,
			3,
			7,
			10
		],
		"-(b6)": [
			0,
			3,
			7,
			8
		],
		"-b6": [
			0,
			3,
			7,
			8
		],
		"-6/9": [
			0,
			3,
			7,
			9,
			14
		],
		"-7(b9)": [
			0,
			3,
			7,
			10,
			13
		],
		"-7b9": [
			0,
			3,
			7,
			10,
			13
		],
		"-maj7": [
			0,
			3,
			7,
			11
		],
		"-9+7": [
			0,
			3,
			7,
			11,
			13
		],
		"-11": [
			0,
			3,
			7,
			11,
			14,
			17
		],
		m11: [
			0,
			3,
			7,
			11,
			14,
			17
		],
		"-maj9": [
			0,
			3,
			7,
			11,
			14
		],
		"-∆9": [
			0,
			3,
			7,
			11,
			14
		],
		mM9: [
			0,
			3,
			7,
			11,
			14
		],
		M: [
			0,
			4,
			7
		],
		6: [
			0,
			4,
			7,
			9
		],
		"6/9": [
			0,
			4,
			7,
			9,
			14
		],
		"6add9": [
			0,
			4,
			7,
			9,
			14
		],
		69: [
			0,
			4,
			7,
			9,
			14
		],
		7: [
			0,
			4,
			7,
			10
		],
		9: [
			0,
			4,
			7,
			10,
			14
		],
		11: [
			0,
			7,
			10,
			14,
			17
		],
		13: [
			0,
			4,
			7,
			10,
			14,
			21
		],
		"7b9": [
			0,
			4,
			7,
			10,
			13
		],
		"7♭9": [
			0,
			4,
			7,
			10,
			13
		],
		"7(b9)": [
			0,
			4,
			7,
			10,
			13
		],
		"7(#9)": [
			0,
			4,
			7,
			10,
			15
		],
		"7#9": [
			0,
			4,
			7,
			10,
			15
		],
		"(13)": [
			0,
			4,
			7,
			10,
			14,
			21
		],
		"7(9,13)": [
			0,
			4,
			7,
			10,
			14,
			21
		],
		"7(#9,b13)": [
			0,
			4,
			7,
			10,
			15,
			20
		],
		"7(#11)": [
			0,
			4,
			7,
			10,
			14,
			18
		],
		"7#11": [
			0,
			4,
			7,
			10,
			14,
			18
		],
		"7(b13)": [
			0,
			4,
			7,
			10,
			20
		],
		"7b13": [
			0,
			4,
			7,
			10,
			20
		],
		"9(#11)": [
			0,
			4,
			7,
			10,
			14,
			18
		],
		"9#11": [
			0,
			4,
			7,
			10,
			14,
			18
		],
		"13(#11)": [
			0,
			4,
			7,
			10,
			18,
			21
		],
		"13#11": [
			0,
			4,
			7,
			10,
			18,
			21
		],
		maj7: [
			0,
			4,
			7,
			11
		],
		"∆7": [
			0,
			4,
			7,
			11
		],
		Δ7: [
			0,
			4,
			7,
			11
		],
		maj9: [
			0,
			4,
			7,
			11,
			14
		],
		"maj7(9)": [
			0,
			4,
			7,
			11,
			14
		],
		"maj7(11)": [
			0,
			4,
			7,
			11,
			17
		],
		"maj7(#11)": [
			0,
			4,
			7,
			11,
			18
		],
		"maj7(13)": [
			0,
			4,
			7,
			14,
			21
		],
		"maj7(9,13)": [
			0,
			4,
			7,
			11,
			14,
			21
		],
		"7sus4": [
			0,
			5,
			7,
			10
		],
		m7sus4: [
			0,
			3,
			7,
			10,
			17
		],
		sus4: [
			0,
			5,
			7
		],
		sus2: [
			0,
			2,
			7
		],
		"7sus2": [
			0,
			2,
			7,
			10
		],
		"9sus4": [
			0,
			5,
			7,
			10,
			14
		],
		"13sus4": [
			0,
			5,
			7,
			10,
			14,
			21
		],
		aug7: [
			0,
			4,
			8,
			10
		],
		"+7": [
			0,
			4,
			8,
			10
		],
		"+": [
			0,
			4,
			8
		],
		"7#5": [
			0,
			4,
			8,
			10
		],
		"7♯5": [
			0,
			4,
			8,
			10
		],
		"7+5": [
			0,
			4,
			8,
			10
		],
		"9#5": [
			0,
			4,
			8,
			10,
			14
		],
		"9♯5": [
			0,
			4,
			8,
			10,
			14
		],
		"9+5": [
			0,
			4,
			8,
			10,
			14
		],
		"-7(#5)": [
			0,
			3,
			8,
			10
		],
		"-7#5": [
			0,
			3,
			8,
			10
		],
		"7(#5)": [
			0,
			4,
			8,
			10
		],
		"7(b9,#5)": [
			0,
			4,
			8,
			10,
			13
		],
		"7b9#5": [
			0,
			4,
			8,
			10,
			13
		],
		"maj7(#5)": [
			0,
			4,
			8,
			11
		],
		"maj7#5": [
			0,
			4,
			8,
			11
		],
		"maj7(#5,#11)": [
			0,
			4,
			8,
			11,
			18
		],
		"maj7#5#11": [
			0,
			4,
			8,
			11,
			18
		],
		"9(#5)": [
			0,
			4,
			8,
			10,
			14
		],
		"13(#5)": [
			0,
			4,
			8,
			10,
			14,
			21
		],
		"13#5": [
			0,
			4,
			8,
			10,
			14,
			21
		],
		5: [0, 7],
		"5(8)": [
			0,
			7,
			12
		],
		"5add8": [
			0,
			7,
			12
		]
	}, n.prototype.rhythmPatterns = {
		"2/2": [
			"boom",
			"",
			"",
			"",
			"chick",
			"",
			"",
			""
		],
		"3/2": [
			"boom",
			"",
			"",
			"",
			"chick",
			"",
			"",
			"",
			"chick",
			"",
			"",
			""
		],
		"4/2": [
			"boom",
			"",
			"",
			"",
			"chick",
			"",
			"",
			"",
			"boom",
			"",
			"",
			"",
			"chick",
			"",
			"",
			""
		],
		"2/4": [
			"boom",
			"",
			"chick",
			""
		],
		"3/4": [
			"boom",
			"",
			"chick",
			"",
			"chick",
			""
		],
		"4/4": [
			"boom",
			"",
			"chick",
			"",
			"boom",
			"",
			"chick",
			""
		],
		"5/4": [
			"boom",
			"",
			"chick",
			"",
			"chick",
			"",
			"boom",
			"",
			"chick",
			""
		],
		"6/4": [
			"boom",
			"",
			"chick",
			"",
			"boom",
			"",
			"chick",
			"",
			"boom",
			"",
			"chick",
			""
		],
		"3/8": [
			"boom",
			"",
			"chick"
		],
		"5/8": [
			"boom",
			"chick",
			"chick",
			"boom",
			"chick"
		],
		"6/8": [
			"boom",
			"",
			"chick",
			"boom",
			"",
			"chick"
		],
		"7/8": [
			"boom",
			"chick",
			"chick",
			"boom",
			"chick",
			"boom",
			"chick"
		],
		"9/8": [
			"boom",
			"",
			"chick",
			"boom",
			"",
			"chick",
			"boom",
			"",
			"chick"
		],
		"10/8": [
			"boom",
			"chick",
			"chick",
			"boom",
			"chick",
			"chick",
			"boom",
			"chick",
			"boom",
			"chick"
		],
		"11/8": [
			"boom",
			"chick",
			"chick",
			"boom",
			"chick",
			"chick",
			"boom",
			"chick",
			"boom",
			"chick",
			"chick"
		],
		"12/8": [
			"boom",
			"",
			"chick",
			"boom",
			"",
			"chick",
			"boom",
			"",
			"chick",
			"boom",
			"",
			"chick"
		]
	};
	function c(e) {
		return e / 1e6;
	}
	function l(e, t) {
		return Math.round(e * t * 1e6) / 1e6;
	}
	t.exports = n;
})), require_pitches_to_perc = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = {
		f0: "_C",
		n0: "=C",
		s0: "^C",
		x0: "C",
		f1: "_D",
		n1: "=D",
		s1: "^D",
		x1: "D",
		f2: "_E",
		n2: "=E",
		s2: "^E",
		x2: "E",
		f3: "_F",
		n3: "=F",
		s3: "^F",
		x3: "F",
		f4: "_G",
		n4: "=G",
		s4: "^G",
		x4: "G",
		f5: "_A",
		n5: "=A",
		s5: "^A",
		x5: "A",
		f6: "_B",
		n6: "=B",
		s6: "^B",
		x6: "B",
		f7: "_c",
		n7: "=c",
		s7: "^c",
		x7: "c",
		f8: "_d",
		n8: "=d",
		s8: "^d",
		x8: "d",
		f9: "_e",
		n9: "=e",
		s9: "^e",
		x9: "e",
		f10: "_f",
		n10: "=f",
		s10: "^f",
		x10: "f",
		f11: "_g",
		n11: "=g",
		s11: "^g",
		x11: "g",
		f12: "_a",
		n12: "=a",
		s12: "^a",
		x12: "a",
		f13: "_b",
		n13: "=b",
		s13: "^b",
		x13: "b",
		f14: "_c'",
		n14: "=c'",
		s14: "^c'",
		x14: "c'",
		f15: "_d'",
		n15: "=d'",
		s15: "^d'",
		x15: "d'",
		f16: "_e'",
		n16: "=e'",
		s16: "^e'",
		x16: "e'"
	};
	function r(e) {
		return n[(e.accidental ? e.accidental[0] : "x") + e.verticalPos];
	}
	t.exports = r;
})), require_abc_midi_flattener = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n, r = require_chord_track(), i = require_pitches_to_perc();
	(function() {
		var e, t, a, o, s, c, l = 1, u, d, f, p, m, h, g = {
			num: 4,
			den: 4
		}, _ = 128, v, y = !0, b = 105, x = 95, S = 85, C = [[
			b,
			x,
			S
		]], w = .25, T, E, D = 0, O, k = {}, A, j = 0, M, N = 0, P = -.001, F = .4;
		n = function(n, i, _, N) {
			i ||= {}, N ||= {}, e = [], t = [
				0,
				0,
				0,
				0,
				0,
				0,
				0
			], o = [], s = i.qpm, c = void 0, l = 1, u = void 0, d = void 0, f = void 0, p = void 0, m = 0, M = _, g = {
				num: 4,
				den: 4
			}, y = !0, b = 105, x = 95, S = 85, C = [], w = .25, T = void 0, E = void 0, D = 0, O = [], k = {}, A = 1, n.length > 0 && n[0].length > 0 && (j = n[0][0].pickupLength), i.bassprog !== void 0 && !N.bassprog && (N.bassprog = [i.bassprog]), i.bassvol !== void 0 && !N.bassvol && (N.bassvol = [i.bassvol]), i.chordprog !== void 0 && !N.chordprog && (N.chordprog = [i.chordprog]), i.chordvol !== void 0 && !N.chordvol && (N.chordvol = [i.chordvol]), i.gchord !== void 0 && !N.gchord && (N.gchord = [i.gchord]), h = new r(n.length, i.chordsOff, N, g), z(n, i);
			for (var P = 0; P < n.length; P++) {
				a = 0, h.setTranspose(a);
				var F = n[P];
				f = [{
					cmd: "program",
					channel: P,
					instrument: u
				}], p = void 0, v = 0, h.setLastBarTime(0);
				var R = !1;
				(i.voicesOff === !0 || i.voicesOff && i.voicesOff.length && i.voicesOff.indexOf(P) >= 0) && (R = !0);
				for (var V = 0; V < F.length; V++) {
					var H = F[V];
					switch (H.el_type) {
						case "name":
							p = {
								cmd: "text",
								type: "name",
								text: H.trackName
							};
							break;
						case "note":
							xt(H, R);
							break;
						case "key":
							t = q(H);
							break;
						case "meter":
							c ||= H, g = H, h.setMeter(g), w = B(g), Et();
							break;
						case "tempo":
							s ? l = H.qpm ? s / H.qpm : 1 : s = H.qpm, h.setTempoChangeFactor(l);
							break;
						case "transpose":
							a = H.transpose, h.setTranspose(a);
							break;
						case "bar":
							h.barEnd(H), e = [], P === 0 && Z(n.length + 1), h.setRhythmHead(!1), v = L(H.time), h.setLastBarTime(v);
							break;
						case "bagpipes": break;
						case "instrument":
							if (u === void 0 && (u = H.program), d = H.program, f.length > 0 && f[f.length - 1].cmd === "program") f[f.length - 1].instrument = H.program;
							else {
								var U;
								for (U = f.length - 1; U >= 0 && f[U].cmd !== "program"; U--);
								(U < 0 || f[U].instrument !== H.program) && f.push({
									cmd: "program",
									channel: 0,
									instrument: H.program
								});
							}
							break;
						case "channel":
							I(H.channel);
							break;
						case "drum":
							k = Tt(H.params), Et();
							break;
						case "gchordOn":
							h.gChordOn(H);
							break;
						case "beat":
							b = H.beats[0], x = H.beats[1], S = H.beats[2], C = H.volumesPerNotePitch ? H.volumesPerNotePitch : [];
							break;
						case "vol":
							T = H.volume;
							break;
						case "volinc":
							E = H.volume;
							break;
						case "beataccents":
							y = H.value;
							break;
						case "gchord":
						case "bassprog":
						case "chordprog":
						case "bassvol":
						case "chordvol":
						case "gchordbars":
							h.paramChange(H);
							break;
						default:
							console.log("MIDI creation. Unknown el_type: " + H.el_type + "\n");
							break;
					}
				}
				f[0].instrument === void 0 && (f[0].instrument = u || 0), p && f.unshift(p), o.push(f), h.finish(), O.length;
			}
			return i.detuneOctave && Q(o, parseInt(i.detuneOctave, 10)), h.addTrack(o), O.length > 0 && o.push(O), {
				tempo: s,
				instrument: u,
				tracks: o,
				totalDuration: m
			};
		};
		function I(e) {
			for (var t = f.length - 1; t >= 0; t--) if (f[t].cmd === "program") {
				f[t].channel = e;
				return;
			}
		}
		function L(e) {
			return e / 1e6;
		}
		function R(e) {
			return Math.round(e * l * 1e6) / 1e6;
		}
		function z(e, t) {
			for (var n = 0; n < e.length; n++) {
				for (var r = e[n], i = {}, a = t.qpm, o = 0, s = 1, c = 0; c < r.length; c++) {
					var l = r[c];
					if (l.el_type === "tempo") {
						a ? s = l.qpm ? a / l.qpm : 1 : a = l.qpm;
						continue;
					}
					l.time = o;
					var u = l.duration ? l.duration : 0;
					if (o += Math.round(u * s * 1e6), l.pitches) {
						for (var d = 0; d < l.pitches.length; d++) {
							var f = l.pitches[d];
							if (f) {
								if (f.duration = l.duration, f.startTie) i[f.pitch] === void 0 ? i[f.pitch] = {
									el: c,
									pitch: d
								} : (r[i[f.pitch].el].pitches[i[f.pitch].pitch].duration += f.duration, l.pitches[d] = null);
								else if (f.endTie) {
									var p = i[f.pitch];
									if (p) {
										var m = f.duration;
										delete r[p.el].pitches[p.pitch].startTie, r[p.el].pitches[p.pitch].duration += m, l.pitches[d] = null, delete i[f.pitch];
									} else delete f.endTie;
								}
							}
						}
						delete l.duration;
					}
				}
				for (var h in i) if (i.hasOwnProperty(h)) {
					var g = i[h];
					delete r[g.el].pitches[g.pitch].startTie;
				}
			}
		}
		function B(e) {
			switch (parseInt(e.den, 10)) {
				case 2: return .5;
				case 4: return .25;
				case 8: return e.num % 3 == 0 ? .375 : .125;
				case 16: return .125;
			}
			return .25;
		}
		function V(e, t, n) {
			return (n - e) / t;
		}
		function H(e, t, n) {
			if (t) return 0;
			let r = b, i = x, a = S;
			n !== void 0 && C.length >= n + 1 && (r = C[n][0], i = C[n][1], a = C[n][2]);
			var o;
			if (T !== void 0) o = T, T = void 0;
			else if (!y) o = i;
			else if (j > e) o = a;
			else {
				var s = V(v, B(g), e);
				o = s === 0 ? r : parseInt(s, 10) === s ? i : a;
			}
			return E &&= (o += E, void 0), o < 0 && (o = 0), o > 127 && (o = 127), t ? 0 : o;
		}
		function U(e, t) {
			var n = {};
			if (e.decoration) for (var r = 0; r < e.decoration.length; r++) e.decoration[r] === "staccato" ? n.thisBreakBetweenNotes = "staccato" : e.decoration[r] === "tenuto" ? n.thisBreakBetweenNotes = "tenuto" : e.decoration[r] === "accent" ? n.velocity = Math.min(127, t * 1.5) : e.decoration[r] === "trill" ? n.noteModification = "trill" : e.decoration[r] === "lowermordent" ? n.noteModification = "lowermordent" : e.decoration[r] === "uppermordent" ? n.noteModification = "pralltriller" : e.decoration[r] === "mordent" ? n.noteModification = "mordent" : e.decoration[r] === "turn" ? n.noteModification = "turn" : e.decoration[r] === "roll" ? n.noteModification = "roll" : e.decoration[r] === "pralltriller" ? n.noteModification = "pralltriller" : e.decoration[r] === "trillh" && (n.noteModification = "trillh");
			return n;
		}
		function W(e, t) {
			var n = t.start, r = t.duration, i = R(1 / 32);
			switch (e) {
				case "trill":
					for (var a = 2; r > 0;) f.push({
						cmd: "note",
						pitch: t.pitch + a,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), a = a === 2 ? 0 : 2, r -= i, n += i;
					break;
				case "trillh":
					for (var a = 1; r > 0;) f.push({
						cmd: "note",
						pitch: t.pitch + a,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), a = a === 1 ? 0 : 1, r -= i, n += i;
					break;
				case "pralltriller":
					f.push({
						cmd: "note",
						pitch: t.pitch,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), r -= i, n += i, f.push({
						cmd: "note",
						pitch: t.pitch + 2,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), r -= i, n += i, f.push({
						cmd: "note",
						pitch: t.pitch,
						volume: t.volume,
						start: n,
						duration: r,
						gap: 0,
						instrument: d
					});
					break;
				case "mordent":
				case "lowermordent":
					f.push({
						cmd: "note",
						pitch: t.pitch,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), r -= i, n += i, f.push({
						cmd: "note",
						pitch: t.pitch - 2,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), r -= i, n += i, f.push({
						cmd: "note",
						pitch: t.pitch,
						volume: t.volume,
						start: n,
						duration: r,
						gap: 0,
						instrument: d
					});
					break;
				case "turn":
					i = t.duration / 4, f.push({
						cmd: "note",
						pitch: t.pitch + 2,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), f.push({
						cmd: "note",
						pitch: t.pitch,
						volume: t.volume,
						start: n + i,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), f.push({
						cmd: "note",
						pitch: t.pitch - 1,
						volume: t.volume,
						start: n + i * 2,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), f.push({
						cmd: "note",
						pitch: t.pitch,
						volume: t.volume,
						start: n + i * 3,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					});
					break;
				case "roll":
					for (; r > 0;) f.push({
						cmd: "note",
						pitch: t.pitch,
						volume: t.volume,
						start: n,
						duration: i,
						gap: 0,
						instrument: d,
						style: "decoration"
					}), r -= i * 2, n += i * 2;
					break;
			}
		}
		function xt(e, t) {
			var n = H(L(e.time), t);
			h.processChord(e);
			var r;
			if (e.gracenotes && e.pitches && e.pitches.length > 0 && e.pitches[0] && (r = J(e.gracenotes, e.pitches[0].duration), e.elem && (e.elem.midiGraceNotePitches = Y(r, L(e.time), n * 2 / 3, d))), e.elem) {
				var a = L(e.time), o = a / w / s * 60 * 1e3;
				if (e.elem.currentTrackMilliseconds === void 0) e.elem.currentTrackMilliseconds = o, e.elem.currentTrackWholeNotes = a;
				else if (e.elem.currentTrackMilliseconds.length === void 0) e.elem.currentTrackMilliseconds !== o && (e.elem.currentTrackMilliseconds = [e.elem.currentTrackMilliseconds, o], e.elem.currentTrackWholeNotes = [e.elem.currentTrackWholeNotes, a]);
				else {
					for (var c = !1, l = 0; l < e.elem.currentTrackMilliseconds.length; l++) e.elem.currentTrackMilliseconds[l] === o && (c = !0);
					c || (e.elem.currentTrackMilliseconds.push(o), e.elem.currentTrackWholeNotes.push(a));
				}
			}
			if (e.pitches) {
				var u = "", p = U(e, n);
				p.thisBreakBetweenNotes && (u = p.thisBreakBetweenNotes), p.velocity && (n = p.velocity);
				var g = e.pitches;
				e.style === "rhythm" && (g = h.setRhythmHead(!0, e)), e.elem && (e.elem.midiPitches = []);
				for (var v = 0; v < g.length; v++) {
					let r = n;
					!p.velocity && Array.isArray(e.decoration) && e.decoration.length > v && (r = H(L(e.time), t, v));
					var y = g[v];
					if (y) {
						y.startSlur && (D += y.startSlur.length), y.endSlur && (D -= y.endSlur.length);
						var b = y.actualPitch ? y.actualPitch : K(y);
						if (d === _ && M) {
							var x = i(y);
							x && M[x] && (b = M[x].sound);
						}
						var S = {
							cmd: "note",
							pitch: b,
							volume: r,
							start: L(e.time),
							duration: R(y.duration),
							instrument: d,
							startChar: e.elem.startChar,
							endChar: e.elem.endChar
						};
						if (S = Ct(S), e.gracenotes && (S.duration /= 2, S.start += S.duration), e.elem && e.elem.midiPitches.push(S), p.noteModification) W(p.noteModification, S);
						else {
							switch (D > 0 ? S.endType = "tenuto" : u && (S.endType = u), S.endType) {
								case "tenuto":
									S.gap = P;
									break;
								case "staccato":
									var C = S.duration * F;
									S.gap = s / 60 * C;
									break;
								default:
									S.gap = N;
									break;
							}
							f.push(S);
						}
					}
				}
				f.length - 1;
			}
			var T = G(e);
			m = Math.max(m, L(e.time) + R(T));
		}
		function G(e) {
			return e.pitches && e.pitches.length > 0 && e.pitches[0] ? e.pitches[0].duration : e.elem ? e.elem.duration : e.duration;
		}
		var St = [
			0,
			2,
			4,
			5,
			7,
			9,
			11
		];
		function K(n) {
			if (n.midipitch !== void 0) return n.midipitch;
			var r = n.pitch;
			if (n.accidental) switch (n.accidental) {
				case "sharp":
					e[r] = 1;
					break;
				case "flat":
					e[r] = -1;
					break;
				case "natural":
					e[r] = 0;
					break;
				case "dblsharp":
					e[r] = 2;
					break;
				case "dblflat":
					e[r] = -2;
					break;
				case "quartersharp":
					e[r] = .25;
					break;
				case "quarterflat":
					e[r] = -.25;
					break;
			}
			var i = wt(r) * 12 + St[X(r)] + 60;
			return e[r] === void 0 ? i += t[X(r)] : i += e[r], i += a, i;
		}
		function q(e) {
			var t = [
				0,
				0,
				0,
				0,
				0,
				0,
				0
			];
			if (!e.accidentals) return t;
			for (var n = 0; n < e.accidentals.length; n++) {
				var r = e.accidentals[n], i;
				switch (r.acc) {
					case "flat":
						i = -1;
						break;
					case "quarterflat":
						i = -.25;
						break;
					case "sharp":
						i = 1;
						break;
					case "quartersharp":
						i = .25;
						break;
					default:
						i = 0;
						break;
				}
				var a = X(r.note.toLowerCase().charCodeAt(0) - 99);
				t[a] += i;
			}
			return t;
		}
		function J(e, t) {
			for (var n = 0, r = [], a, o = 0; o < e.length; o++) a = e[o], n += a.duration;
			var s = t / 2 / n;
			for (o = 0; o < e.length; o++) {
				a = e[o];
				var c = K(a);
				if (d === _ && M) {
					var l = i(a);
					l && M[l] && (c = M[l].sound);
				}
				var u = {
					pitch: c,
					duration: a.duration * s
				};
				u = Ct(u), r.push(u);
			}
			return r;
		}
		function Y(e, t, n, r) {
			var i = [];
			n = Math.round(n);
			for (var a = 0; a < e.length; a++) {
				var o = e[a];
				f.push({
					cmd: "note",
					pitch: o.pitch,
					volume: n,
					start: t,
					duration: o.duration,
					gap: 0,
					instrument: r,
					style: "grace"
				}), i.push({
					pitch: o.pitch,
					durationInMeasures: o.duration,
					volume: n,
					instrument: r
				}), t += o.duration;
			}
			return i;
		}
		function Ct(e) {
			var t = "" + e.pitch;
			return t.indexOf(".75") >= 0 ? (e.pitch = Math.round(e.pitch), e.cents = -50) : t.indexOf(".25") >= 0 && (e.pitch = Math.round(e.pitch), e.cents = 50), e;
		}
		function wt(e) {
			return Math.floor(e / 7);
		}
		function X(e) {
			return e %= 7, e < 0 && (e += 7), e;
		}
		function Tt(e) {
			if (e.pattern.length === 0 || e.on === !1) return { on: !1 };
			for (var t = e.pattern[0], n = [], r = "", i = 0, a = 0; a < t.length; a++) if (t[a] === "d" && i++, t[a] === "d" || t[a] === "z") r.length === 0 ? r += t[a] : (n.push(r), r = t[a]);
			else {
				if (r.length === 0) return { on: !1 };
				r += t[a];
			}
			if (r.length !== 0 && n.push(r), e.pattern.length !== i * 2 + 1) return { on: !1 };
			for (var o = {
				on: !0,
				bars: e.bars,
				pattern: []
			}, s = B(g), c = 0, l = 0; l < n.length; l++) {
				r = n[l];
				for (var u = 1, d = !1, f = 0, p = 1; p < r.length; p++) switch (r[p]) {
					case "/":
						f !== 0 && (u *= f), f = 0, d = !0;
						break;
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						f = f * 10 + r[p];
						break;
					default: return { on: !1 };
				}
				d ? (f === 0 && (f = 2), u /= f) : f && (u *= f), r[0] === "d" ? (o.pattern.push({
					len: u * s,
					pitch: e.pattern[1 + c],
					velocity: e.pattern[1 + c + i]
				}), c++) : o.pattern.push({
					len: u * s,
					pitch: null
				});
			}
			return A = e.bars ? e.bars : 1, o;
		}
		function Et() {
			if (!(!k || !k.pattern)) {
				for (var e = k, t = 0, n = g.num / g.den, r = 0; r < e.pattern.length; r++) t += e.pattern[r].len;
				var i = t / A / n;
				for (r = 0; r < e.pattern.length; r++) e.pattern[r].len = e.pattern[r].len / i;
				k = e;
			}
		}
		function Z(e) {
			if (!(O.length === 0 && !k.on)) {
				var t = g.num / g.den;
				if (O.length === 0) {
					if (m < t) return;
					O.push({
						cmd: "program",
						channel: e,
						instrument: _
					});
				}
				if (k.on) for (var n = v, r = 0; r < k.pattern.length; r++) {
					var i = R(k.pattern[r].len);
					k.pattern[r].pitch && O.push({
						cmd: "note",
						pitch: k.pattern[r].pitch,
						volume: k.pattern[r].velocity,
						start: n,
						duration: i,
						gap: 0,
						instrument: _
					}), n += i;
				}
			}
		}
		function Q(e, t) {
			for (var n = {}, r = 0; r < e.length; r++) for (var i = 0; i < e[r].length; i++) {
				var a = e[r][i];
				a.cmd === "note" && (n[a.start] === void 0 && (n[a.start] = []), n[a.start].push({
					track: r,
					event: i,
					pitch: a.pitch
				}));
			}
			var o = Object.keys(n);
			for (r = 0; r < o.length; r++) {
				var s = n[o[r]];
				if (s.length > 1) {
					s = s.sort(function(e, t) {
						return e.pitch - t.pitch;
					});
					var c = s[s.length - 1], l = c.pitch % 12, u = !1;
					for (i = 0; !u && i < s.length - 1; i++) s[i].pitch % 12 === l && (u = !0);
					if (u) {
						var d = e[c.track][c.event];
						d.cents ||= 0, d.cents += t;
					}
				}
			}
		}
	})(), t.exports = n;
})), require_deline_tune = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t) {
		t ||= {};
		for (var n = !!t.lineBreaks, r = [], u = !1, d = [], f = [], p = [], m = [], h = [], g = [], _ = [], v = 0; v < e.length; v++) {
			var y = e[v];
			if (y.staff) {
				if (u && !y.vskip) for (var b = r[r.length - 1], x = 0; x < b.staff.length; x++) {
					var S = y.staff[x], C = b.staff[x];
					if (S && (c(S.meter, d[x]) || (i(S.meter, S.voices), d[x] = S.meter, delete S.meter), c(S.key, f[x]) || (a(S.key, S.voices), f[x] = S.key, delete S.key), S.title && (C.abbrevTitle = S.title), c(S.clef, p[x]) || (o(S.clef, S.voices), p[x] = S.clef, delete S.clef), c(S.vocalfont, m[x]) || (s(S.vocalfont, S.voices, "vocalfont"), m[x] = S.vocalfont, delete S.vocalfont), c(S.gchordfont, h[x]) || (s(S.gchordfont, S.voices, "gchordfont"), h[x] = S.gchordfont, delete S.gchordfont), c(S.tripletfont, g[x]) || (s(S.tripletfont, S.voices, "tripletfont"), g[x] = S.tripletfont, delete S.tripletfont), c(S.annotationfont, _[x]) || (s(S.annotationfont, S.voices, "annotationfont"), _[x] = S.annotationfont, delete S.annotationfont)), S) for (var w = 0; w < C.voices.length; w++) {
						var T = C.voices[w], E = S.voices[w];
						n && T.push({ el_type: "break" }), E && (C.voices[w] = T.concat(E));
					}
				}
				else {
					for (var D = 0; D < y.staff.length; D++) f[D] = y.staff[D].key, d[D] = y.staff[D].meter, p[D] = y.staff[D].clef;
					r.push(l(y));
				}
				u = !0;
			} else u = !1, r.push(y);
		}
		return r;
	}
	function r(e, t) {
		return e === "abselem" ? "abselem" : t;
	}
	function i(e, t) {
		e.el_type = "meter", e.startChar = -1, e.endChar = -1;
		for (var n = 0; n < t.length; n++) t[n].unshift(e);
	}
	function a(e, t) {
		e.el_type = "key", e.startChar = -1, e.endChar = -1;
		for (var n = 0; n < t.length; n++) t[n].unshift(e);
	}
	function o(e, t) {
		e.el_type = "clef", e.startChar = -1, e.endChar = -1;
		for (var n = 0; n < t.length; n++) t[n].unshift(e);
	}
	function s(e, t, n) {
		e.el_type = "font", e.type = n, e.startChar = -1, e.endChar = -1;
		for (var r = 0; r < t.length; r++) t[r].unshift(e);
	}
	function c(e, t) {
		return e ? JSON.stringify(e, r) === JSON.stringify(t, r) : !0;
	}
	function l(e) {
		for (var t = {}, n = Object.keys(e), r = 0; r < n.length; r++) if (n[r] !== "staff") t[n[r]] = e[n[r]];
		else {
			t.staff = [];
			for (var i = 0; i < e.staff.length; i++) {
				for (var a = {}, o = Object.keys(e.staff[i]), s = 0; s < o.length; s++) if (o[s] !== "voices") a[o[s]] = e.staff[i][o[s]];
				else {
					a.voices = [];
					for (var c = 0; c < e.staff[i].voices.length; c++) a.voices.push([].concat(e.staff[i].voices[c]));
				}
				t.staff.push(a);
			}
		}
		return t;
	}
	t.exports = n;
})), require_abc_tune = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_common(), r = require_spacing(), a = require_abc_midi_sequencer(), o = require_abc_midi_flattener(), s = require_deline_tune();
	t.exports = function() {
		this.reset = function() {
			this.version = "1.1.0", this.media = "screen", this.metaText = {}, this.metaTextInfo = {}, this.formatting = {}, this.lines = [], this.staffNum = 0, this.voiceNum = 0, this.lineNum = 0, this.runningFonts = {}, delete this.visualTranspose;
		}, this.reset();
		function e(e, t, n, r) {
			for (var i = 0; i < r.length; i++) e[n][r[i]] = t[n][r[i]];
		}
		this.copyTopInfo = function(t) {
			var n = [
				"tempo",
				"title",
				"header",
				"rhythm",
				"origin",
				"composer",
				"author",
				"partOrder"
			];
			e(this, t, "metaText", n), e(this, t, "metaTextInfo", n);
		}, this.copyBottomInfo = function(t) {
			var n = [
				"unalignedWords",
				"book",
				"source",
				"discography",
				"notes",
				"transcription",
				"history",
				"abc-copyright",
				"abc-creator",
				"abc-edited-by",
				"footer"
			];
			e(this, t, "metaText", n), e(this, t, "metaTextInfo", n);
		}, this.getBeatLength = function() {
			var e = this.getMeterFraction(), t = 1;
			return (e.num === 6 || e.num === 9 || e.num === 12 || e.num === 3 && e.den === 8) && (t = 3), t / e.den;
		};
		function t(e, t) {
			for (var n = 0, r = 0; r < e.length; r++) if (e[r].staff) for (var i = 0; i < e[r].staff.length; i++) for (var a = 0; a < e[r].staff[i].voices.length; a++) for (var o = e[r].staff[i].voices[a], s = 1, c = 0; c < o.length; c++) {
				var l = o[c].rest && o[c].rest.type === "spacer";
				if (o[c].startTriplet && (s = o[c].tripletMultiplier), o[c].duration && !l && o[c].el_type !== "tempo" && (n += o[c].duration * s), o[c].endTriplet && (s = 1), n >= t && (n -= t), o[c].el_type === "bar") return n;
			}
			return n;
		}
		this.getPickupLength = function() {
			var e = this.getBarLength(), n = t(this.lines, e);
			return n < 1e-8 || e - n < 1e-8 ? 0 : n;
		}, this.getBarLength = function() {
			var e = this.getMeterFraction();
			return e.num / e.den;
		}, this.getTotalTime = function() {
			return this.totalTime;
		}, this.getTotalBeats = function() {
			return this.totalBeats;
		}, this.millisecondsPerMeasure = function(e) {
			var t;
			if (e) t = e;
			else {
				var n = this.metaText ? this.metaText.tempo : null;
				t = this.getBpm(n);
			}
			return t <= 0 && (t = 1), this.getBeatsPerMeasure() / t * 6e4;
		}, this.getBeatsPerMeasure = function() {
			var e = this.getBeatLength();
			return this.getBarLength() / e;
		}, this.getMeter = function() {
			for (var e = 0; e < this.lines.length; e++) {
				var t = this.lines[e];
				if (t.staff) for (var n = 0; n < t.staff.length; n++) {
					var r = t.staff[n].meter;
					if (r) return r;
				}
			}
			return { type: "common_time" };
		}, this.getMeterFraction = function() {
			var e = this.getMeter(), t = 4, n = 4;
			return e && (e.type === "specified" ? (t = parseInt(e.value[0].num, 10), n = parseInt(e.value[0].den, 10)) : e.type === "cut_time" ? (t = 2, n = 2) : e.type === "common_time" && (t = 4, n = 4)), this.meter = {
				num: t,
				den: n
			}, this.meter;
		}, this.getKeySignature = function() {
			for (var e = 0; e < this.lines.length; e++) {
				var t = this.lines[e];
				if (t.staff) {
					for (var n = 0; n < t.staff.length; n++) if (t.staff[n].key) return t.staff[n].key;
				}
			}
			return {};
		}, this.getElementFromChar = function(e) {
			for (var t = 0; t < this.lines.length; t++) {
				var n = this.lines[t];
				if (n.staff) for (var r = 0; r < n.staff.length; r++) for (var i = n.staff[r], a = 0; a < i.voices.length; a++) for (var o = i.voices[a], s = 0; s < o.length; s++) {
					var c = o[s];
					if (c.startChar && c.endChar && c.startChar <= e && c.endChar > e) return c;
				}
			}
			return null;
		};
		function i(e) {
			for (var t, n, r, i, a = e.length - 1; a >= 0; a--) {
				var o = e[a];
				o.type === "bar" ? (o.top = r, o.nextTop = t, t = r, o.bottom = i, o.nextBottom = n, n = i) : o.type === "event" && (r = o.top, i = o.top + o.height);
			}
		}
		function c(e) {
			var t = [];
			for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
			return t = t.sort(function(e, t) {
				var n = e.milliseconds - t.milliseconds;
				return n === 0 ? e.type === "bar" ? -1 : 1 : n;
			}), t;
		}
		this.addElementToEvents = function(e, t, r, i, a, o, s, c, l, u) {
			if (t.hint) return {
				isTiedState: void 0,
				duration: 0
			};
			var d = t.durationClass ? t.durationClass : t.duration;
			if (t.abcelem.rest && t.abcelem.rest.type === "spacer" && (d = 0), d > 0) {
				for (var f = [], p = 0; p < t.elemset.length; p++) t.elemset[p] !== null && f.push(t.elemset[p]);
				var m = t.startTie;
				if (l !== void 0) e["event" + l].elements.push(f), u &&= (e["event" + r] || (e["event" + r] = {
					type: "event",
					milliseconds: r,
					line: o,
					measureNumber: s,
					top: i,
					height: a,
					left: null,
					width: 0,
					elements: [],
					startChar: null,
					endChar: null,
					startCharArray: [],
					endCharArray: []
				}), e["event" + r].measureStart = !0, !1), m || (l = void 0);
				else {
					if (!e["event" + r]) e["event" + r] = {
						type: "event",
						milliseconds: r,
						line: o,
						measureNumber: s,
						top: i,
						height: a,
						left: t.x,
						width: t.w,
						elements: [f],
						startChar: t.abcelem.startChar,
						endChar: t.abcelem.endChar,
						startCharArray: [t.abcelem.startChar],
						endCharArray: [t.abcelem.endChar],
						midiPitches: t.abcelem.midiPitches ? n.cloneArray(t.abcelem.midiPitches) : []
					}, t.abcelem.midiGraceNotePitches && (e["event" + r].midiGraceNotePitches = n.cloneArray(t.abcelem.midiGraceNotePitches));
					else {
						if (e["event" + r].left ? e["event" + r].left = Math.min(e["event" + r].left, t.x) : e["event" + r].left = t.x, e["event" + r].elements.push(f), e["event" + r].startCharArray.push(t.abcelem.startChar), e["event" + r].endCharArray.push(t.abcelem.endChar), e["event" + r].startChar === null && (e["event" + r].startChar = t.abcelem.startChar), e["event" + r].endChar === null && (e["event" + r].endChar = t.abcelem.endChar), t.abcelem.midiPitches && t.abcelem.midiPitches.length) {
							e["event" + r].midiPitches || (e["event" + r].midiPitches = []);
							for (var p = 0; p < t.abcelem.midiPitches.length; p++) e["event" + r].midiPitches.push(t.abcelem.midiPitches[p]);
						}
						if (t.abcelem.midiGraceNotePitches && t.abcelem.midiGraceNotePitches.length) {
							e["event" + r].midiGraceNotePitches || (e["event" + r].midiGraceNotePitches = []);
							for (var h = 0; h < t.abcelem.midiGraceNotePitches.length; h++) e["event" + r].midiGraceNotePitches.push(t.abcelem.midiGraceNotePitches[h]);
						}
					}
					u &&= (e["event" + r].measureStart = !0, !1);
				}
			}
			return {
				isTiedState: l,
				duration: d / c,
				nextIsBar: u || t.type === "bar"
			};
		}, this.makeVoicesArray = function() {
			for (var e = [], t = [], n = {}, i = 0; i < this.engraver.staffgroups.length; i++) {
				var a = this.engraver.staffgroups[i];
				if (a && a.staffs && a.staffs.length > 0) {
					var o = a.staffs[0], s = o.absoluteY, c = s - o.top * r.STEP, l = a.staffs[a.staffs.length - 1];
					s = l.absoluteY;
					for (var u = s - l.bottom * r.STEP - c, d = a.voices, f = 0; f < d.length; f++) if (!(d[f].staff && d[f].staff.isTabStaff)) {
						var p = !1;
						e[f] || (e[f] = []), t[f] === void 0 && (t[f] = 0);
						for (var m = d[f].children, h = 0; h < m.length; h++) m[h].type === "tempo" && (n[t[f]] = this.getBpm(m[h].abcelem)), e[f].push({
							top: c,
							height: u,
							line: a.line,
							measureNumber: t[f],
							elem: m[h]
						}), m[h].type === "bar" && p && t[f]++, (m[h].type === "note" || m[h].type === "rest") && (p = !0);
					}
				}
			}
			return this.tempoLocations = n, e;
		}, this.setupEvents = function(e, t, n, r) {
			r ||= 1;
			for (var a = [], o = {}, s = e, l, d = !0, f = this.makeVoicesArray(), p = 0, m = 0; m < f.length; m++) {
				var h = s, g = Math.round(h * 1e3), _ = 0, v = -1, y = f[m], b = n;
				t = this.getBeatLength() * b / 60;
				for (var x = -1, S = 0; S < y.length; S++) {
					var C = y[S].measureNumber;
					x !== C && this.tempoLocations[C] && (b = this.tempoLocations[C], t = r * this.getBeatLength() * b / 60, x = C);
					var w = y[S].elem, T = this.addElementToEvents(o, w, g, y[S].top, y[S].height, y[S].line, y[S].measureNumber, t, l, d);
					l = T.isTiedState, d = T.nextIsBar, h += T.duration;
					var E;
					if (w.duration > 0 && o["event" + g] && (E = "event" + g), g = Math.round(h * 1e3), w.type === "bar") {
						var D = w.abcelem.type, O = D === "bar_right_repeat" || D === "bar_dbl_repeat", k = w.abcelem.startEnding === "1", A = D === "bar_left_repeat" || D === "bar_dbl_repeat" || D === "bar_right_repeat";
						if (O) {
							S > 0 && (o[E].endX = w.x), v === -1 && (v = S);
							var j = 0;
							x = -1;
							for (var M = _; M < v; M++) {
								C = y[M].measureNumber, x !== C && this.tempoLocations[C] && (b = this.tempoLocations[C], t = r * this.getBeatLength() * b / 60, x = C);
								var N = y[M].elem;
								T = this.addElementToEvents(o, N, g, y[M].top, y[M].height, y[M].line, y[M].measureNumber, t, l, d), l = T.isTiedState, d = T.nextIsBar, h += T.duration, j = g, g = Math.round(h * 1e3);
							}
							o["event" + j] && (o["event" + j].endX = y[v].elem.x), d = !0, v = -1;
						}
						k && (v = S), A && (_ = S);
					}
				}
				p = Math.max(p, g);
			}
			return a = c(o), i(a), u(this.lines, a), a.push({
				type: "end",
				milliseconds: p
			}), this.addUsefulCallbackInfo(a, b * r), a;
		}, this.addUsefulCallbackInfo = function(e, t) {
			for (var n = this.millisecondsPerMeasure(t), r = 0; r < e.length; r++) {
				var i = e[r];
				i.millisecondsPerMeasure = n;
			}
		};
		function l(e, t) {
			for (; t < e.length && e[t].left === null;) t++;
			return e[t];
		}
		function u(e, t) {
			if (!(t.length < 1)) {
				for (var n = 0; n < t.length - 1; n++) {
					var r = t[n], i = l(t, n + 1);
					if (r.left !== null) {
						var a = i && r.top === i.top ? i.left : e[r.line].staffGroup.w;
						r.endX === void 0 ? r.endX = a : a > r.left && (r.endX = Math.min(r.endX, a));
					}
				}
				var o = t[t.length - 1];
				o.endX = e[o.line].staffGroup.w;
			}
		}
		this.getBpm = function(e) {
			var t;
			if (e ||= this.metaText ? this.metaText.tempo : null, e) {
				t = e.bpm;
				var n = this.getBeatLength(), r = e.duration && e.duration.length > 0 ? e.duration[0] : n;
				t = t * r / n;
			}
			if (!t) {
				t = 180;
				var i = this.getMeterFraction();
				i && i.num !== 3 && i.num % 3 == 0 && (t = 120);
			}
			return t;
		}, this.setTiming = function(e, t) {
			if (t ||= 0, !this.engraver || !this.engraver.staffgroups) return console.log("setTiming cannot be called before the tune is drawn."), this.noteTimings = [], this.noteTimings;
			var n = this.metaText ? this.metaText.tempo : null, r = this.getBpm(n), i = 1;
			e ? n && (i = e / r) : e = r;
			var a = this.getBeatLength(), o = e / 60, s = this.getBarLength() / a * t / o;
			s && (s -= this.getPickupLength() / a / o);
			var c = a * o;
			return this.noteTimings = this.setupEvents(s, c, e, i), this.noteTimings.length > 0 ? (this.totalTime = this.noteTimings[this.noteTimings.length - 1].milliseconds / 1e3, this.totalBeats = this.totalTime * o) : (this.totalTime = void 0, this.totalBeats = void 0), this.noteTimings;
		}, this.setUpAudio = function(e) {
			return e ||= {}, o(a(this, e), e, this.formatting.percmap, this.formatting.midi);
		}, this.deline = function(e) {
			return s(this.lines, e);
		}, this.findSelectableElement = function(e) {
			return this.engraver && this.engraver.selectables ? this.engraver.findSelectableElement(e) : null;
		}, this.getSelectableArray = function() {
			return this.engraver && this.engraver.selectables ? this.engraver.selectables : [];
		};
	};
})), require_tune_builder = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_parse_key_voice(), r = function(e) {
		var t = this, r = {}, i = "";
		e.reset(), this.setVisualTranspose = function(t) {
			t !== void 0 && (e.visualTranspose = t);
		}, this.cleanUp = function(t, r, i) {
			g(e), delete e.runningFonts, a(e), e.metaText.tempo && e.metaText.tempo.bpm && !e.metaText.tempo.duration && (e.metaText.tempo.duration = [e.getBeatLength()]);
			var s = !1, d, f, m;
			for (d = 0; d < e.lines.length; d++) if (e.lines[d].staff !== void 0) {
				var h = !1;
				for (f = 0; f < e.lines[d].staff.length; f++) if (e.lines[d].staff[f] === void 0) s = !0, e.lines[d].staff[f] = null;
				else for (m = 0; m < e.lines[d].staff[f].voices.length; m++) e.lines[d].staff[f].voices[m] === void 0 ? e.lines[d].staff[f].voices[m] = [] : _(e.lines[d].staff[f].voices[m]) && (h = !0);
				h || (e.lines[d] = null, s = !0);
			}
			if (s && (e.lines = e.lines.filter(function(e) {
				return !!e;
			}), e.lines.forEach(function(e) {
				e.staff &&= e.staff.filter(function(e) {
					return !!e;
				});
			})), t) for (; u(e.lines, t););
			if (r) {
				for (s = !1, d = 0; d < e.lines.length; d++) if (e.lines[d].staff !== void 0) for (f = 0; f < e.lines[d].staff.length; f++) {
					var y = !1;
					for (m = 0; m < e.lines[d].staff[f].voices.length; m++) v(e.lines[d].staff[f].voices[m]) && (y = !0);
					y || (s = !0, e.lines[d].staff[f] = null);
				}
				s && e.lines.forEach(function(e) {
					e.staff &&= e.staff.filter(function(e) {
						return !!e;
					});
				});
			}
			for (c(e.lines), d = 0; d < e.lines.length; d++) if (e.lines[d].staff) for (f = 0; f < e.lines[d].staff.length; f++) delete e.lines[d].staff[f].workingClef;
			for (; o(e););
			for (var d = 0; d < e.lines.length; d++) {
				var b = e.lines[d].staff;
				if (b) for (e.staffNum = 0; e.staffNum < b.length; e.staffNum++) for (b[e.staffNum].clef && n.fixClef(b[e.staffNum].clef), e.voiceNum = 0; e.voiceNum < b[e.staffNum].voices.length; e.voiceNum++) {
					var x = b[e.staffNum].voices[e.voiceNum];
					l(x, e.staffNum, e.voiceNum, i);
					for (var S = 0; S < x.length; S++) x[S].el_type === "clef" && n.fixClef(x[S]);
					if (x.length > 0 && x[x.length - 1].barNumber) {
						var C = p(e.lines, d);
						C && (C.staff[0].barNumber = x[x.length - 1].barNumber), delete x[x.length - 1].barNumber;
					}
				}
			}
			return delete e.staffNum, delete e.voiceNum, delete e.lineNum, delete e.potentialStartBeam, delete e.potentialEndBeam, delete e.vskipPending, i;
		}, this.addTieToLastNote = function(t) {
			var n = m(e);
			return n && n.pitches && n.pitches.length > 0 ? (n.pitches[0].startTie = {}, t && (n.pitches[0].startTie.style = "dotted"), !0) : !1;
		}, this.appendElement = function(n, a, o, s) {
			return s.el_type = n, a !== null && (s.startChar = a), o !== null && (s.endChar = o), n === "note" ? h(s) >= .25 || s.force_end_beam_last && e.potentialStartBeam !== void 0 ? S(e) : s.end_beam && e.potentialStartBeam !== void 0 ? s.rest === void 0 ? x(s, e) : S(e) : s.rest === void 0 && (e.potentialStartBeam === void 0 ? s.end_beam || (e.potentialStartBeam = s, delete e.potentialEndBeam) : e.potentialEndBeam = s) : S(e), delete s.end_beam, delete s.force_end_beam_last, s.rest && s.rest.type === "invisible" && delete s.decoration, e.lines.length <= e.lineNum || e.lines[e.lineNum].staff.length <= e.staffNum ? !1 : (b(t, e, s, r, i), !0);
		}, this.appendStartingElement = function(t, n, r, i) {
			g(e);
			var a;
			t === "key" && (a = i.impliedNaturals, delete i.impliedNaturals, delete i.explicitAccidentals);
			var o = Object.assign({}, i);
			if (e.lines[e.lineNum]) {
				var s = e.lines[e.lineNum].staff;
				if (s) {
					s.length <= e.staffNum && (s[e.staffNum] = {}, s[e.staffNum].clef = Object.assign({}, s[0].clef), s[e.staffNum].key = Object.assign({}, s[0].key), s[0].meter && (s[e.staffNum].meter = Object.assign({}, s[0].meter)), s[e.staffNum].workingClef = Object.assign({}, s[0].workingClef), s[e.staffNum].voices = [[]]), t === "clef" && (s[e.staffNum].workingClef = o);
					for (var c = s[e.staffNum].voices[e.voiceNum], l = 0; l < c.length; l++) {
						if (c[l].el_type === "note" || c[l].el_type === "bar") {
							o.el_type = t, o.startChar = n, o.endChar = r, a && (o.accidentals = a.concat(o.accidentals)), c.push(o);
							return;
						}
						if (c[l].el_type === t) {
							o.el_type = t, o.startChar = n, o.endChar = r, a && (o.accidentals = a.concat(o.accidentals)), c[l] = o;
							return;
						}
					}
					s[e.staffNum][t] = i;
				}
			}
		}, this.addSubtitle = function(t, n) {
			y(e, { subtitle: {
				text: t,
				startChar: n.startChar,
				endChar: n.endChar
			} });
		}, this.addSpacing = function(t) {
			e.vskipPending = t;
		}, this.addNewPage = function(t) {
			y(e, { newpage: t });
		}, this.addSeparator = function(t, n, r, i) {
			y(e, { separator: {
				spaceAbove: Math.round(t),
				spaceBelow: Math.round(n),
				lineLength: Math.round(r),
				startChar: i.startChar,
				endChar: i.endChar
			} });
		}, this.addText = function(t, n) {
			y(e, { text: {
				text: t,
				startChar: n.startChar,
				endChar: n.endChar
			} });
		}, this.addCentered = function(t) {
			y(e, { text: [{
				text: t,
				center: !0
			}] });
		}, this.changeVoiceScale = function(e) {
			t.appendElement("scale", null, null, { size: e });
		}, this.changeVoiceColor = function(e) {
			t.appendElement("color", null, null, { color: e });
		}, this.startNewLine = function(n) {
			g(e), n.currentVoiceName && (i = n.currentVoiceName, r[n.currentVoiceName] = n), e.lines[e.lineNum] === void 0 ? E(t, e, n) : e.lines[e.lineNum].staff === void 0 ? (e.lineNum++, this.startNewLine(n)) : e.lines[e.lineNum].staff[e.staffNum] === void 0 ? T(t, e, n) : e.lines[e.lineNum].staff[e.staffNum].voices[e.voiceNum] === void 0 ? w(t, e, n) : _(e.lines[e.lineNum].staff[e.staffNum].voices[e.voiceNum]) ? (e.lineNum++, this.startNewLine(n)) : n.part && t.appendElement("part", n.part.startChar, n.part.endChar, { title: n.part.title });
		}, this.setRunningFont = function(t, n) {
			e.runningFonts[t] = n;
		}, this.setBarNumberImmediate = function(e) {
			var t = this.getCurrentVoice();
			if (t && t.length > 0) {
				var n = t[t.length - 1];
				if (n.el_type === "bar") n.barNumber !== void 0 && (n.barNumber = e);
				else return e - 1;
			}
			return e;
		}, this.hasBeginMusic = function() {
			for (var t = 0; t < e.lines.length; t++) if (e.lines[t].staff) return !0;
			return !1;
		}, this.isFirstLine = function(t) {
			for (var n = t - 1; n >= 0; n--) if (e.lines[n].staff !== void 0) return !1;
			return !0;
		}, this.getCurrentVoice = function() {
			var t = f(e.lines, e.lineNum);
			if (!t) return null;
			var n = t.staff[e.staffNum];
			return n ? n.voices[e.voiceNum] === void 0 ? null : n.voices[e.voiceNum] : null;
		}, this.setCurrentVoice = function(t, n, r) {
			e.staffNum = t, e.voiceNum = n, i = r;
			for (var a = 0; a < e.lines.length; a++) if (e.lines[a].staff && (e.lines[a].staff[t] === void 0 || e.lines[a].staff[t].voices[n] === void 0 || !_(e.lines[a].staff[t].voices[n]))) return e.lineNum = a, !!(!e.lines[a].staff[t] || e.lines[a].staff[t].voices[n]);
			return e.lineNum = a, !1;
		}, this.addMetaText = function(t, n, r) {
			e.metaText[t] === void 0 ? (e.metaText[t] = n, e.metaTextInfo[t] = r) : (typeof e.metaText[t] == "string" && typeof n == "string" ? e.metaText[t] += "\n" + n : (e.metaText[t] === "string" && (e.metaText[t] = [{ text: e.metaText[t] }]), typeof n == "string" && (n = [{ text: n }]), e.metaText[t] = e.metaText[t].concat(n)), e.metaTextInfo[t].endChar = r.endChar);
		}, this.addMetaTextArray = function(t, n, r) {
			e.metaText[t] === void 0 ? (e.metaText[t] = [n], e.metaTextInfo[t] = r) : (e.metaText[t].push(n), e.metaTextInfo[t].endChar = r.endChar);
		}, this.addMetaTextObj = function(t, n, r) {
			e.metaText[t] = n, e.metaTextInfo[t] = r;
		};
	};
	function i(e) {
		if (!e || typeof e == "string") return !1;
		for (var t = 0; t < e.length; t++) if (typeof e[t] != "string") return !1;
		return !0;
	}
	function a(e) {
		i(e.metaText.notes) && (e.metaText.notes = e.metaText.notes.join("\n")), i(e.metaText.history) && (e.metaText.history = e.metaText.history.join("\n"));
	}
	function o(e) {
		for (var t = !1, n = [], r = 0; r < e.lines.length; r++) {
			var i = e.lines[r];
			if (i.staff) for (var a = 0; a < i.staff.length; a++) {
				for (var o = i.staff[a], c = [], l = 0; l < o.voices.length; l++) {
					var u = o.voices[l];
					c.push({
						hasOverlay: !1,
						voice: [],
						snip: []
					}), n[r] = 0;
					for (var d = 0, f = !1, p = 0, m = -1, h = 0; h < u.length; h++) {
						var g = u[h];
						if (g.el_type === "overlay" && !f) {
							t = !0, f = !0, m = h, c[l].hasOverlay = !0, p === 0 && (p = n[r]);
							for (var _ = 0; _ < r; _++) n[_] && e.lines[_].staff && o.voices.length >= e.lines[_].staff[0].voices.length && e.lines[_].staff[0].voices.push([{
								el_type: "note",
								duration: n[_],
								rest: { type: "invisible" },
								startChar: g.startChar,
								endChar: g.endChar
							}]);
						} else g.el_type === "bar" ? (f ? (f = !1, c[l].snip.push({
							start: m,
							len: h - m
						}), c[l].voice.push(g)) : (d > 0 && c[l].voice.push({
							el_type: "note",
							duration: d,
							rest: { type: "invisible" },
							startChar: g.startChar,
							endChar: g.endChar
						}), c[l].voice.push(g)), d = 0) : g.el_type === "note" ? f ? c[l].voice.push(g) : (d += g.duration, n[r] += g.duration) : (g.el_type === "scale" || g.el_type === "stem" || g.el_type === "overlay" || g.el_type === "style" || g.el_type === "transpose" || g.el_type === "color") && c[l].voice.push(g);
					}
					c[l].hasOverlay && c[l].snip.length === 0 && c[l].snip.push({
						start: m,
						len: u.length - m
					});
				}
				for (l = 0; l < c.length; l++) {
					var v = c[l];
					if (v.hasOverlay) {
						v.voice.splice(0, 0, {
							el_type: "stem",
							direction: "down"
						}), o.voices.push(v.voice);
						for (var y = v.snip.length - 1; y >= 0; y--) {
							var b = v.snip[y];
							o.voices[l].splice(b.start, b.len), o.voices[l].splice(b.start + 1, 0, {
								el_type: "stem",
								direction: "auto"
							});
							var x = s(o.voices[l], b.start);
							o.voices[l].splice(x, 0, {
								el_type: "stem",
								direction: "up"
							});
						}
						for (y = 0; y < o.voices[o.voices.length - 1].length; y++) {
							o.voices[o.voices.length - 1][y] = Object.assign({}, o.voices[o.voices.length - 1][y]);
							var S = o.voices[o.voices.length - 1][y];
							S.el_type === "bar" && S.startEnding && delete S.startEnding, S.el_type === "bar" && S.endEnding && delete S.endEnding;
						}
					}
				}
			}
		}
		return t;
	}
	function s(e, t) {
		for (var n = t - 1; n > 0 && e[n].el_type !== "bar"; n--);
		return n;
	}
	function c(e) {
		for (var t = !0, n = 0; n < e.length; n++) {
			var r = e[n];
			if (r.staff) {
				for (var i = 0; i < r.staff.length; i++) {
					var a = r.staff[i];
					if (a.title) {
						for (var o = !1, s = 0; s < a.title.length; s++) a.title[s] ? (a.title[s] = t ? a.title[s].name : a.title[s].subname, a.title[s] ? o = !0 : a.title[s] = "") : a.title[s] = "";
						o || delete a.title;
					}
				}
				t = !1;
			}
		}
	}
	function l(e, t, n, r) {
		r[t] || (r[t] = []), r[t][n] || (r[t][n] = []);
		for (var i, a = function(e, a, o) {
			if (r[t][n][o] === void 0) {
				for (i = 0; i < r[t][n].length; i++) if (r[t][n][i] !== void 0) {
					o = i;
					break;
				}
				if (r[t][n][o] === void 0) {
					var s = o * 100 + 1;
					e.endSlur.forEach(function(e) {
						s === e && --s;
					}), r[t][n][o] = [s];
				}
			}
			for (var c, l = 0; l < a; l++) c = r[t][n][o].pop(), e.endSlur.push(c);
			return r[t][n][o].length === 0 && delete r[t][n][o], c;
		}, o = function(e, i, a, o) {
			e.startSlur = [], r[t][n][a] === void 0 && (r[t][n][a] = []);
			for (var s = a * 100 + 1, c = 0; c < i; c++) o && (o.forEach(function(e) {
				s === e && ++s;
			}), o.forEach(function(e) {
				s === e && ++s;
			}), o.forEach(function(e) {
				s === e && ++s;
			})), r[t][n][a].forEach(function(e) {
				s === e && ++s;
			}), r[t][n][a].forEach(function(e) {
				s === e && ++s;
			}), r[t][n][a].push(s), e.startSlur.push({ label: s }), e.dottedSlur && (e.startSlur[e.startSlur.length - 1].style = "dotted", delete e.dottedSlur), s++;
		}, s = 0; s < e.length; s++) {
			var c = e[s];
			if (c.el_type === "note") {
				if (c.gracenotes) for (var l = 0; l < c.gracenotes.length; l++) {
					if (c.gracenotes[l].endSlur) {
						var u = c.gracenotes[l].endSlur;
						c.gracenotes[l].endSlur = [];
						for (var d = 0; d < u; d++) a(c.gracenotes[l], 1, 20);
					}
					c.gracenotes[l].startSlur && (i = c.gracenotes[l].startSlur, o(c.gracenotes[l], i, 20));
				}
				if (c.endSlur && (i = c.endSlur, c.endSlur = [], a(c, i, 0)), c.startSlur && (i = c.startSlur, o(c, i, 0)), c.pitches) {
					for (var f = [], p = 0; p < c.pitches.length; p++) if (c.pitches[p].endSlur) {
						var m = c.pitches[p].endSlur;
						c.pitches[p].endSlur = [];
						for (var h = 0; h < m; h++) {
							var g = a(c.pitches[p], 1, p + 1);
							f.push(g);
						}
					}
					for (p = 0; p < c.pitches.length; p++) c.pitches[p].startSlur && (i = c.pitches[p].startSlur, o(c.pitches[p], i, p + 1, f));
					c.gracenotes && c.pitches[0].endSlur && c.pitches[0].endSlur[0] === 100 && c.pitches[0].startSlur && (c.gracenotes[0].endSlur ? c.gracenotes[0].endSlur.push(c.pitches[0].startSlur[0].label) : c.gracenotes[0].endSlur = [c.pitches[0].startSlur[0].label], c.pitches[0].endSlur.length === 1 ? delete c.pitches[0].endSlur : c.pitches[0].endSlur[0] === 100 ? c.pitches[0].endSlur.shift() : c.pitches[0].endSlur[c.pitches[0].endSlur.length - 1] === 100 && c.pitches[0].endSlur.pop(), r[t][n][1].length === 1 ? delete r[t][n][1] : r[t][n][1].pop());
				}
			}
		}
	}
	function u(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].staff !== void 0) for (var r = 0; r < e[n].staff.length; r++) for (var i = [], a = 0; a < e[n].staff[r].voices.length; a++) for (var o = e[n].staff[r].voices[a], s = 0, c = 0; c < o.length; c++) if (o[c].el_type === "bar") {
			if (s++, s >= t && c < o.length - 1) {
				var l = p(e, n);
				if (!l) {
					var u = JSON.parse(JSON.stringify(e[n]));
					e.push(Object.assign({}, u)), l = e[e.length - 1];
					for (var d = 0; d < l.staff.length; d++) for (var f = 0; f < l.staff[d].voices.length; f++) l.staff[d].voices[f] = [];
				}
				var m = c + 1, h = e[n].staff[r].voices[a].slice(m);
				return e[n].staff[r].voices[a] = e[n].staff[r].voices[a].slice(0, m), l.staff[r].voices[a] = i.concat(h.concat(l.staff[r].voices[a])), !0;
			}
		} else o[c].duration || i.push(o[c]);
		return !1;
	}
	function f(e, t) {
		if (e.length <= t) return null;
		for (; t >= 0;) {
			if (e[t].staff) return e[t];
			t--;
		}
		return null;
	}
	function p(e, t) {
		for (t++; e.length > t;) {
			if (e[t].staff) return e[t];
			t++;
		}
		return null;
	}
	function m(e) {
		if (!e.lines[e.lineNum] || !e.lines[e.lineNum].staff || !e.lines[e.lineNum].staff[e.staffNum]) return null;
		var t = e.lines[e.lineNum].staff[e.staffNum].voices[e.voiceNum];
		if (!t) return null;
		for (var n = t.length - 1; n >= 0; n--) {
			var r = t[n];
			if (r.el_type === "note") return r;
		}
		return null;
	}
	function h(e) {
		return e.duration ? e.duration : 0;
	}
	function g(e) {
		e.potentialStartBeam && e.potentialEndBeam && (e.potentialStartBeam.startBeam = !0, e.potentialEndBeam.endBeam = !0), delete e.potentialStartBeam, delete e.potentialEndBeam;
	}
	function _(e) {
		for (var t = 0; t < e.length; t++) if (e[t].el_type === "note" || e[t].el_type === "bar") return !0;
		return !1;
	}
	function v(e) {
		for (var t = 0; t < e.length; t++) if (e[t].el_type === "note" && (e[t].rest === void 0 || e[t].chord !== void 0)) return !0;
		return !1;
	}
	function y(e, t) {
		e.vskipPending && (t.vskip = e.vskipPending, delete e.vskipPending), e.lines.push(t);
	}
	function b(e, t, n, r, i) {
		var a = t.lines[t.lineNum].staff[t.staffNum];
		if (n.pitches !== void 0) {
			var o = a.workingClef.verticalPos;
			n.pitches.forEach(function(e) {
				e.verticalPos = e.pitch - o;
			});
		}
		if (n.gracenotes !== void 0) {
			var s = a.workingClef.verticalPos;
			n.gracenotes.forEach(function(e) {
				e.verticalPos = e.pitch - s;
			});
		}
		a.voices.length <= t.voiceNum && (r[i] || (r[i] = {}), w(e, t, r[i])), a.voices[t.voiceNum].push(n);
	}
	function x(e, t) {
		t.potentialStartBeam.startBeam = !0, e.endBeam = !0, delete t.potentialStartBeam, delete t.potentialEndBeam;
	}
	function S(e) {
		e.potentialStartBeam !== void 0 && e.potentialEndBeam !== void 0 && (e.potentialStartBeam.startBeam = !0, e.potentialEndBeam.endBeam = !0), delete e.potentialStartBeam, delete e.potentialEndBeam;
	}
	function C(e, t, n) {
		if (e.runningFonts[t]) {
			for (var r = !1, i = Object.keys(n), a = 0; a < i.length; a++) e.runningFonts[t][i[a]] !== n[i[a]] && (r = !0);
			r && (e.lines[e.lineNum].staff[e.staffNum][t] = n);
		}
		e.runningFonts[t] = n;
	}
	function w(e, t, n) {
		var r = t.lines[t.lineNum].staff[t.staffNum];
		if (r.voices[t.voiceNum] = [], r.title ||= [], r.title[t.voiceNum] = {
			name: n.name,
			subname: n.subname
		}, n.style && e.appendElement("style", null, null, { head: n.style }), n.stem) e.appendElement("stem", null, null, { direction: n.stem });
		else if (t.voiceNum > 0) {
			if (r.voices[0] !== void 0) {
				for (var i = !1, a = 0; a < r.voices[0].length; a++) r.voices[0].el_type === "stem" && (i = !0);
				i || r.voices[0].splice(0, 0, {
					el_type: "stem",
					direction: "up"
				});
			}
			e.appendElement("stem", null, null, { direction: "down" });
		}
		n.scale && e.appendElement("scale", null, null, { size: n.scale }), n.color && e.appendElement("color", null, null, { color: n.color });
	}
	function T(e, t, n) {
		n.key && n.key.impliedNaturals && (n.key.accidentals = n.key.accidentals.concat(n.key.impliedNaturals), delete n.key.impliedNaturals), t.lines[t.lineNum].staff[t.staffNum] = {
			voices: [],
			clef: n.clef,
			key: n.key,
			workingClef: n.clef
		};
		var r = t.lines[t.lineNum].staff[t.staffNum];
		n.stafflines !== void 0 && (r.clef.stafflines = n.stafflines, r.workingClef.stafflines = n.stafflines), n.staffscale && (r.staffscale = n.staffscale), n.annotationfont && C(t, "annotationfont", n.annotationfont), n.gchordfont && C(t, "gchordfont", n.gchordfont), n.tripletfont && C(t, "tripletfont", n.tripletfont), n.vocalfont && C(t, "vocalfont", n.vocalfont), n.bracket && (r.bracket = n.bracket), n.brace && (r.brace = n.brace), n.connectBarLines && (r.connectBarLines = n.connectBarLines), n.barNumber && (r.barNumber = n.barNumber), w(e, t, n), n.part && e.appendElement("part", n.part.startChar, n.part.endChar, { title: n.part.title }), n.meter !== void 0 && (r.meter = n.meter), t.vskipPending && (t.lines[t.lineNum].vskip = t.vskipPending, delete t.vskipPending);
	}
	function E(e, t, n) {
		t.lines[t.lineNum] = { staff: [] }, T(e, t, n);
	}
	t.exports = r;
})), require_abc_parse = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_common(), r = require_abc_parse_directive(), o = require_abc_parse_header(), s = require_abc_parse_music(), c = require_abc_tokenizer(), l = require_wrap_lines(), u = require_abc_tune(), d = require_tune_builder();
	t.exports = function() {
		var e = new u(), t = new d(e), i, a = "", f = "";
		this.getTune = function() {
			var t = {
				formatting: e.formatting,
				lines: e.lines,
				media: e.media,
				metaText: e.metaText,
				metaTextInfo: e.metaTextInfo,
				version: e.version,
				addElementToEvents: e.addElementToEvents,
				addUsefulCallbackInfo: e.addUsefulCallbackInfo,
				getTotalTime: e.getTotalTime,
				getTotalBeats: e.getTotalBeats,
				getBarLength: e.getBarLength,
				getBeatLength: e.getBeatLength,
				getBeatsPerMeasure: e.getBeatsPerMeasure,
				getBpm: e.getBpm,
				getMeter: e.getMeter,
				getMeterFraction: e.getMeterFraction,
				getPickupLength: e.getPickupLength,
				getKeySignature: e.getKeySignature,
				getElementFromChar: e.getElementFromChar,
				makeVoicesArray: e.makeVoicesArray,
				millisecondsPerMeasure: e.millisecondsPerMeasure,
				setupEvents: e.setupEvents,
				setTiming: e.setTiming,
				setUpAudio: e.setUpAudio,
				deline: e.deline,
				findSelectableElement: e.findSelectableElement,
				getSelectableArray: e.getSelectableArray
			};
			return e.lineBreaks && (t.lineBreaks = e.lineBreaks), e.visualTranspose && (t.visualTranspose = e.visualTranspose), t;
		};
		function p(e, t, n) {
			e.positioning ||= {}, e.positioning[t] = n;
		}
		function m(e, t, n) {
			e.fonts ||= {}, e.fonts[t] = n;
		}
		var h = {
			reset: function() {
				for (var e in this) this.hasOwnProperty(e) && typeof this[e] != "function" && delete this[e];
				this.iChar = 0, this.key = {
					accidentals: [],
					root: "none",
					acc: "",
					mode: ""
				}, this.meter = null, this.origMeter = null, this.hasMainTitle = !1, this.default_length = .125, this.clef = {
					type: "treble",
					verticalPos: 0
				}, this.octave = 0, this.next_note_duration = 0, this.start_new_line = !0, this.is_in_header = !0, this.partForNextLine = {}, this.tempoForNextLine = [], this.havent_set_length = !0, this.voices = {}, this.staves = [], this.macros = {}, this.currBarNumber = 1, this.barCounter = {}, this.ignoredDecorations = [], this.score_is_present = !1, this.inEnding = !1, this.inTie = [], this.inTieChord = {}, this.vocalPosition = "auto", this.dynamicPosition = "auto", this.chordPosition = "auto", this.ornamentPosition = "auto", this.volumePosition = "auto", this.openSlurs = [], this.freegchord = !1, this.endingHoldOver = {};
			},
			differentFont: function(e, t) {
				return this[e].decoration !== t[e].decoration || this[e].face !== t[e].face || this[e].size !== t[e].size || this[e].style !== t[e].style || this[e].weight !== t[e].weight;
			},
			addFormattingOptions: function(e, t, n) {
				n === "note" ? (this.vocalPosition !== "auto" && p(e, "vocalPosition", this.vocalPosition), this.dynamicPosition !== "auto" && p(e, "dynamicPosition", this.dynamicPosition), this.chordPosition !== "auto" && p(e, "chordPosition", this.chordPosition), this.ornamentPosition !== "auto" && p(e, "ornamentPosition", this.ornamentPosition), this.volumePosition !== "auto" && p(e, "volumePosition", this.volumePosition), this.differentFont("annotationfont", t) && m(e, "annotationfont", this.annotationfont), this.differentFont("gchordfont", t) && m(e, "gchordfont", this.gchordfont), this.differentFont("vocalfont", t) && m(e, "vocalfont", this.vocalfont), this.differentFont("tripletfont", t) && m(e, "tripletfont", this.tripletfont)) : n === "bar" && (this.dynamicPosition !== "auto" && p(e, "dynamicPosition", this.dynamicPosition), this.chordPosition !== "auto" && p(e, "chordPosition", this.chordPosition), this.ornamentPosition !== "auto" && p(e, "ornamentPosition", this.ornamentPosition), this.volumePosition !== "auto" && p(e, "volumePosition", this.volumePosition), this.differentFont("measurefont", t) && m(e, "measurefont", this.measurefont), this.differentFont("repeatfont", t) && m(e, "repeatfont", this.repeatfont));
			},
			duplicateStartEndingHoldOvers: function() {
				this.endingHoldOver = {
					inTie: [],
					inTieChord: {}
				};
				for (var e = 0; e < this.inTie.length; e++) if (this.endingHoldOver.inTie.push([]), this.inTie[e]) for (var t = 0; t < this.inTie[e].length; t++) this.endingHoldOver.inTie[e].push(this.inTie[e][t]);
				for (var n in this.inTieChord) this.inTieChord.hasOwnProperty(n) && (this.endingHoldOver.inTieChord[n] = this.inTieChord[n]);
			},
			restoreStartEndingHoldOvers: function() {
				if (this.endingHoldOver.inTie) {
					this.inTie = [], this.inTieChord = {};
					for (var e = 0; e < this.endingHoldOver.inTie.length; e++) {
						this.inTie.push([]);
						for (var t = 0; t < this.endingHoldOver.inTie[e].length; t++) this.inTie[e].push(this.endingHoldOver.inTie[e][t]);
					}
					for (var n in this.endingHoldOver.inTieChord) this.endingHoldOver.inTieChord.hasOwnProperty(n) && (this.inTieChord[n] = this.endingHoldOver.inTieChord[n]);
				}
			}
		}, g = function(e) {
			h.warnings ||= [], h.warnings.push(e);
		}, _ = function(e) {
			h.warningObjects ||= [], h.warningObjects.push(e);
		}, v = function(e) {
			var t = e.replace(/\x12/g, " ");
			return t = t.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t.replace(/>/g, "&gt;");
		}, y = function(e, t, n) {
			t ||= " ";
			var r = t[n];
			(r === " " || !r) && (r = "SPACE");
			var a = v(t.substring(n - 64, n)) + "<span style=\"text-decoration:underline;font-size:1.3em;font-weight:bold;\">" + r + "</span>" + v(t.substring(n + 1).substring(0, 64));
			g("Music Line:" + i.lineIndex + ":" + (n + 1) + ": " + e + ":  " + a), _({
				message: e,
				line: t,
				startChar: h.iChar + n,
				column: n
			});
		}, b, x;
		this.getWarnings = function() {
			return h.warnings;
		}, this.getWarningObjects = function() {
			return h.warningObjects;
		};
		var S = function(e, t) {
			if (t.indexOf("") >= 0) {
				a += t;
				return;
			}
			if (t = a + t, a = "", !e) {
				y("Can't add words before the first line of music", e, 0);
				return;
			}
			t = n.strip(t), t[t.length - 1] !== "-" && (t += " ");
			for (var r = [], o = 0, s = !1, c = function(e) {
				var a = n.strip(t.substring(o, e));
				if (a = a.replace(/\\([-_*|~])/g, "$1"), o = e + 1, a.length > 0) {
					s && (a = a.replace(/~/g, " "));
					var c = t[e];
					return c !== "_" && c !== "-" && (c = " "), r.push({
						syllable: i.translateString(a),
						divider: c
					}), s = !1, !0;
				}
				return !1;
			}, l = !1, u = 0; u < t.length; u++) {
				switch (t[u]) {
					case " ":
					case "":
						c(u);
						break;
					case "-":
						!l && !c(u) && r.length > 0 && (n.last(r).divider = "-", r.push({
							skip: !0,
							to: "next"
						}));
						break;
					case "_":
						l || (c(u), r.push({
							skip: !0,
							to: "slur"
						}));
						break;
					case "*":
						l || (c(u), r.push({
							skip: !0,
							to: "next"
						}));
						break;
					case "|":
						l || (c(u), r.push({
							skip: !0,
							to: "bar"
						}));
						break;
					case "~":
						l || (s = !0);
						break;
				}
				l = t[u] === "\\";
			}
			var d = !1;
			e.forEach(function(e) {
				if (r.length !== 0) {
					if (r[0].skip) {
						switch (r[0].to) {
							case "next":
								e.el_type === "note" && e.pitches !== null && !d && r.shift();
								break;
							case "slur":
								e.el_type === "note" && e.pitches !== null && r.shift();
								break;
							case "bar":
								e.el_type === "bar" && r.shift();
								break;
						}
						e.el_type !== "bar" && (e.lyric === void 0 ? e.lyric = [{
							syllable: "",
							divider: " "
						}] : e.lyric.push({
							syllable: "",
							divider: " "
						}));
					} else if (e.el_type === "note" && e.rest === void 0 && !d) {
						var t = r.shift();
						t.syllable &&= t.syllable.replace(/ +/g, "\xA0"), e.lyric === void 0 ? e.lyric = [t] : e.lyric.push(t);
					}
				}
			});
		}, C = function(e, t) {
			if (t.indexOf("") >= 0) {
				f += t;
				return;
			}
			if (t = f + t, f = "", !e) {
				y("Can't add symbols before the first line of music", e, 0);
				return;
			}
			t = n.strip(t), t[t.length - 1] !== "-" && (t += " ");
			for (var r = [], a = 0, o = !1, s = function(e) {
				var s = n.strip(t.substring(a, e));
				if (a = e + 1, s.length > 0) {
					o && (s = s.replace(/~/g, " "));
					var c = t[e];
					return c !== "_" && c !== "-" && (c = " "), r.push({
						syllable: i.translateString(s),
						divider: c
					}), o = !1, !0;
				}
				return !1;
			}, c = 0; c < t.length; c++) switch (t[c]) {
				case " ":
				case "":
					s(c);
					break;
				case "-":
					!s(c) && r.length > 0 && (n.last(r).divider = "-", r.push({
						skip: !0,
						to: "next"
					}));
					break;
				case "_":
					s(c), r.push({
						skip: !0,
						to: "slur"
					});
					break;
				case "*":
					s(c), r.push({
						skip: !0,
						to: "next"
					});
					break;
				case "|":
					s(c), r.push({
						skip: !0,
						to: "bar"
					});
					break;
				case "~":
					o = !0;
					break;
			}
			var l = !1;
			e.forEach(function(e) {
				if (r.length !== 0) {
					if (r[0].skip) switch (r[0].to) {
						case "next":
							e.el_type === "note" && e.pitches !== null && !l && r.shift();
							break;
						case "slur":
							e.el_type === "note" && e.pitches !== null && r.shift();
							break;
						case "bar":
							e.el_type === "bar" && r.shift();
							break;
					}
					else if (e.el_type === "note" && e.rest === void 0 && !l) {
						var t = r.shift();
						e.lyric === void 0 ? e.lyric = [t] : e.lyric.push(t);
					}
				}
			});
		}, w = function(e) {
			if (n.startsWith(e, "%%")) {
				var i = r.addDirective(e.substring(2));
				i && y(i, e, 2);
				return;
			}
			var o = e.indexOf("%");
			if (o >= 0 && (e = e.substring(0, o)), e = e.replace(/\s+$/, ""), e.length !== 0) {
				if (a) {
					S(t.getCurrentVoice(), e.substring(2));
					return;
				}
				if (f) {
					C(t.getCurrentVoice(), e.substring(2));
					return;
				}
				if (e.length < 2 || e[1] !== ":" || x.lineContinuation) {
					x.parseMusic(e);
					return;
				}
				var s = b.parseHeader(e);
				s.regular && x.parseMusic(e), s.newline && x.startNewLine(), s.words && S(t.getCurrentVoice(), e.substring(2)), s.symbols && C(t.getCurrentVoice(), e.substring(2));
			}
		};
		function T(e, t) {
			e.push({ el_type: "hint" });
			for (var n = 0; n < t.length; n++) {
				var r = t[n], i = Object.assign({}, r);
				if (e.push(i), r.el_type === "bar") return;
			}
		}
		function E(e, t) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n], i = t[n];
				if (i) for (var a = 0; a < i.voices.length; a++) {
					var o = i.voices[a], s = r.voices[a];
					s && T(s, o);
				}
			}
		}
		function D() {
			for (var t = 0; t < e.lines.length; t++) {
				var n = e.lines[t].staff;
				if (n) {
					for (var r = t + 1; r < e.lines.length && e.lines[r].staff === void 0;) r++;
					if (r < e.lines.length) {
						var i = e.lines[r].staff;
						E(n, i);
					}
				}
			}
		}
		this.parse = function(u, d, p) {
			d ||= {}, p ||= 0, e.reset(), u = u.replace(/\r\n?/g, "\n") + "\n";
			var m = u.split("\n\\");
			if (m.length > 1) {
				for (var g = 1; g < m.length; g++) for (; m[g].length > 0 && m[g][0] !== "\n";) m[g] = m[g].substr(1), m[g - 1] += " ";
				u = m.join("  ");
			}
			u = u.replace(/\\([ \t]*)(%.*)*\n/g, function(e, t, n) {
				var r = n ? Array(n.length + 1).join(" ") : "";
				return t + "" + r + "\n";
			});
			var _ = u.split("\n");
			n.last(_).length === 0 && _.pop(), i = new c(_, h), b = new o(i, y, h, e, t), x = new s(i, y, h, e, t, b), d.print && (e.media = "print"), h.reset(), h.iChar = p, d.visualTranspose ? (h.globalTranspose = parseInt(d.visualTranspose), h.globalTranspose === 0 ? h.globalTranspose = void 0 : t.setVisualTranspose(d.visualTranspose)) : h.globalTranspose = void 0, d.lineBreaks && (h.lineBreaks = d.lineBreaks), b.reset(i, y, h, e);
			try {
				d.format && r.globalFormatting(d.format);
				for (var v = i.nextLine(); v;) {
					if (d.header_only && h.is_in_header === !1 || d.stop_on_warning && h.warnings) throw "normal_abort";
					var T = h.is_in_header;
					w(v), T && !h.is_in_header && (t.setRunningFont("annotationfont", h.annotationfont), t.setRunningFont("gchordfont", h.gchordfont), t.setRunningFont("tripletfont", h.tripletfont), t.setRunningFont("vocalfont", h.vocalfont)), v = i.nextLine();
				}
				a && S(t.getCurrentVoice(), ""), f && C(t.getCurrentVoice(), ""), h.openSlurs = t.cleanUp(h.barsperstaff, h.staffnonote, h.openSlurs);
			} catch (e) {
				if (e !== "normal_abort") throw e;
			}
			var E = 792, O = 8.5 * 72;
			switch (h.papersize) {
				case "legal":
					E = 1008, O = 8.5 * 72;
					break;
				case "A4":
					E = 11.7 * 72, O = 8.3 * 72;
					break;
			}
			if (h.landscape) {
				var k = E;
				E = O, O = k;
			}
			e.formatting.pagewidth || (e.formatting.pagewidth = O), e.formatting.pageheight || (e.formatting.pageheight = E), d.hint_measures && D(), l.wrapLines(e, h.lineBreaks, h.barNumbers);
		};
	};
})), require_abc_parse_book = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_common();
	t.exports = function(e) {
		var t = "", r = e.match(/(\s*)/);
		e = n.strip(e);
		for (var i = e.split("\nX:"), a = 1; a < i.length; a++) i[a] = "X:" + i[a];
		var o = r ? r[0].length : 0, s = [];
		i.forEach(function(e) {
			s.push({
				abc: e,
				startPos: o
			}), o += e.length + 1;
		}), s.length > 1 && !n.startsWith(s[0].abc, "X:") && s.shift().abc.split("\n").forEach(function(e) {
			n.startsWith(e, "%%") && (t += e + "\n");
		});
		var c = t;
		return s.forEach(function(e) {
			var r = e.abc.indexOf("\n\n");
			r > 0 && (e.abc = e.abc.substring(0, r)), e.pure = e.abc, e.abc = t + e.abc, e.title = "";
			var i = e.pure.split("T:");
			i.length > 1 && (i = i[1].split("\n"), e.title = n.strip(i[0]));
			var a = e.pure.substring(2, e.pure.indexOf("\n"));
			e.id = n.strip(a);
		}), {
			header: c,
			tunes: s
		};
	};
})), require_string_tablature = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t) {
		this.numLines = e, this.lineSpace = t, this.verticalSize = this.numLines * this.lineSpace, this.bar = {
			pitch: 3,
			pitch2: t * e,
			height: 5
		};
	}
	n.prototype.bypass = function(e) {
		var t = e.staffGroup.voices;
		return !!(t.length > 0 && t[0].isPercussion);
	}, n.prototype.setRelative = function(e, t, n) {
		switch (e.type) {
			case "bar":
				t.pitch = this.bar.pitch, t.pitch2 = this.bar.pitch2, t.height = this.height;
				break;
			case "symbol":
				var r = this.bar.pitch2 / 2;
				if (e.name == "dots.dot") return n ? (t.pitch = r, !1) : (t.pitch = r + this.lineSpace, !0);
				break;
		}
		return n;
	}, t.exports = n;
})), require_voice_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t) {
		this.children = [], this.beams = [], this.otherchildren = [], this.w = 0, this.duplicate = !1, this.voicenumber = e, this.voicetotal = t, this.bottom = 7, this.top = 7, this.specialY = {
			tempoHeightAbove: 0,
			partHeightAbove: 0,
			volumeHeightAbove: 0,
			dynamicHeightAbove: 0,
			endingHeightAbove: 0,
			chordHeightAbove: 0,
			lyricHeightAbove: 0,
			lyricHeightBelow: 0,
			chordHeightBelow: 0,
			volumeHeightBelow: 0,
			dynamicHeightBelow: 0
		};
	};
	n.prototype.addChild = function(e) {
		if (e.type === "bar") {
			for (var t = !0, n = 0; t && n < this.children.length; n++) this.children[n].type.indexOf("staff-extra") < 0 && this.children[n].type !== "tempo" && (t = !1);
			t || (this.beams.push("bar"), this.otherchildren.push("bar"));
		}
		this.children[this.children.length] = e, this.setRange(e);
	}, n.prototype.setLimit = function(e, t) {
		var n = t.specialY;
		n ||= t, n[e] && (this.specialY[e] ? this.specialY[e] = Math.max(this.specialY[e], n[e]) : this.specialY[e] = n[e]);
	}, n.prototype.adjustRange = function(e) {
		e.bottom !== void 0 && (this.bottom = Math.min(this.bottom, e.bottom)), e.top !== void 0 && (this.top = Math.max(this.top, e.top));
	}, n.prototype.setRange = function(e) {
		this.adjustRange(e), this.setLimit("tempoHeightAbove", e), this.setLimit("partHeightAbove", e), this.setLimit("volumeHeightAbove", e), this.setLimit("dynamicHeightAbove", e), this.setLimit("endingHeightAbove", e), this.setLimit("chordHeightAbove", e), this.setLimit("lyricHeightAbove", e), this.setLimit("lyricHeightBelow", e), this.setLimit("chordHeightBelow", e), this.setLimit("volumeHeightBelow", e), this.setLimit("dynamicHeightBelow", e);
	}, n.prototype.addOther = function(e) {
		this.otherchildren.push(e), this.setRange(e);
	}, n.prototype.addBeam = function(e) {
		this.beams.push(e);
	}, n.prototype.setWidth = function(e) {
		this.w = e;
	}, t.exports = n;
})), require_set_class = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function(e, t, n, r) {
		if (e) for (var i = 0; i < e.length; i++) {
			var a = e[i], o = a.getAttribute("highlight");
			o ||= "fill", a.setAttribute(o, r);
			var s = a.getAttribute("class");
			s ||= "", s = s.replace(n, ""), s = s.replace(t, ""), t.length > 0 && (s.length > 0 && s[s.length - 1] !== " " && (s += " "), s += t), a.setAttribute("class", s);
		}
	};
})), require_highlight = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_set_class();
	t.exports = function(e, t) {
		e === void 0 && (e = "abcjs-note_selected"), t === void 0 && (t = "#ff0000"), n(this.elemset, e, "", t);
	};
})), require_unhighlight = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_set_class();
	t.exports = function(e, t) {
		e === void 0 && (e = "abcjs-note_selected"), t === void 0 && (t = "#000000"), n(this.elemset, "", e, t);
	};
})), require_absolute_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_highlight(), r = require_unhighlight(), i = function(e, t, n, r, i, a) {
		a ||= {}, this.tuneNumber = i, this.abcelem = e, this.duration = t, this.durationClass = a.durationClassOveride ? a.durationClassOveride : this.duration, this.minspacing = n || 0, this.x = 0, this.children = [], this.heads = [], this.extra = [], this.extraw = 0, this.w = 0, this.right = [], this.invisible = !1, this.bottom = void 0, this.top = void 0, this.type = r, this.fixed = {
			w: 0,
			t: void 0,
			b: void 0
		}, this.specialY = {
			tempoHeightAbove: 0,
			partHeightAbove: 0,
			volumeHeightAbove: 0,
			dynamicHeightAbove: 0,
			endingHeightAbove: 0,
			chordHeightAbove: 0,
			lyricHeightAbove: 0,
			lyricHeightBelow: 0,
			chordHeightBelow: 0,
			volumeHeightBelow: 0,
			dynamicHeightBelow: 0
		};
	};
	i.prototype.getFixedCoords = function() {
		return {
			x: this.x,
			w: this.fixed.w,
			t: this.fixed.t,
			b: this.fixed.b
		};
	}, i.prototype.addExtra = function(e) {
		this.fixed.w = Math.max(this.fixed.w, e.dx + e.w), this.fixed.t === void 0 ? this.fixed.t = e.top : this.fixed.t = Math.max(this.fixed.t, e.top), this.fixed.b === void 0 ? this.fixed.b = e.bottom : this.fixed.b = Math.min(this.fixed.b, e.bottom), e.dx < this.extraw && (this.extraw = e.dx), this.extra[this.extra.length] = e, this._addChild(e);
	}, i.prototype.addHead = function(e) {
		e.dx < this.extraw && (this.extraw = e.dx), this.heads[this.heads.length] = e, this.addRight(e);
	}, i.prototype.addRight = function(e) {
		this.fixed.w = Math.max(this.fixed.w, e.dx + e.w), e.top !== void 0 && (this.fixed.t === void 0 ? this.fixed.t = e.top : this.fixed.t = Math.max(this.fixed.t, e.top)), e.bottom !== void 0 && (this.fixed.b === void 0 ? this.fixed.b = e.bottom : this.fixed.b = Math.min(this.fixed.b, e.bottom)), e.dx + e.w > this.w && (this.w = e.dx + e.w), this.right[this.right.length] = e, this._addChild(e);
	}, i.prototype.addFixed = function(e) {
		this._addChild(e);
	}, i.prototype.addFixedX = function(e) {
		this._addChild(e);
	}, i.prototype.addCentered = function(e) {
		var t = e.w / 2;
		-t < this.extraw && (this.extraw = -t), this.extra[this.extra.length] = e, e.dx + t > this.w && (this.w = e.dx + t), this.right[this.right.length] = e, this._addChild(e);
	}, i.prototype.setLimit = function(e, t) {
		t[e] && (this.specialY[e] ? this.specialY[e] = Math.max(this.specialY[e], t[e]) : this.specialY[e] = t[e]);
	}, i.prototype._addChild = function(e) {
		var t = !0;
		this.abcelem.el_type == "clef" && e.type == "barNumber" && (t = !1), e.parent = this, this.children[this.children.length] = e, t && this.pushTop(e.top), this.pushBottom(e.bottom), this.setLimit("tempoHeightAbove", e), this.setLimit("partHeightAbove", e), this.setLimit("volumeHeightAbove", e), this.setLimit("dynamicHeightAbove", e), this.setLimit("endingHeightAbove", e), this.setLimit("chordHeightAbove", e), this.setLimit("lyricHeightAbove", e), this.setLimit("lyricHeightBelow", e), this.setLimit("chordHeightBelow", e), this.setLimit("volumeHeightBelow", e), this.setLimit("dynamicHeightBelow", e);
	}, i.prototype.pushTop = function(e) {
		e !== void 0 && (this.top === void 0 ? this.top = e : this.top = Math.max(e, this.top));
	}, i.prototype.pushBottom = function(e) {
		e !== void 0 && (this.bottom === void 0 ? this.bottom = e : this.bottom = Math.min(e, this.bottom));
	}, i.prototype.setX = function(e) {
		this.x = e;
		for (var t = 0; t < this.children.length; t++) this.children[t].setX(e);
	}, i.prototype.center = function(e, t) {
		this.x = (t.x - e.x) / 2 + e.x - this.w / 2;
		for (var n = 0; n < this.children.length; n++) this.children[n].setX(this.x);
	}, i.prototype.setHint = function() {
		this.hint = !0;
	}, i.prototype.highlight = function(e, t) {
		n.bind(this)(e, t);
	}, i.prototype.unhighlight = function(e, t) {
		r.bind(this)(e, t);
	}, t.exports = i;
})), require_relative_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t, n, r, i) {
		switch (i ||= {}, this.x = 0, this.c = e, this.dx = t, this.w = n, this.pitch = r, this.scalex = i.scalex || 1, this.scaley = i.scaley || 1, this.type = i.type || "symbol", this.pitch2 = i.pitch2, this.linewidth = i.linewidth, this.klass = i.klass, this.anchor = i.anchor ? i.anchor : "middle", this.top = r, this.pitch2 !== void 0 && this.pitch2 > this.top && (this.top = this.pitch2), this.bottom = r, this.pitch2 !== void 0 && this.pitch2 < this.bottom && (this.bottom = this.pitch2), i.thickness && (this.top += i.thickness / 2, this.bottom -= i.thickness / 2), i.stemHeight && (i.stemHeight > 0 ? this.top += i.stemHeight : this.bottom += i.stemHeight), i.dim && (this.dim = i.dim), i.position && (this.position = i.position), this.height = i.height ? i.height : 4, i.top && (this.top = i.top), i.bottom && (this.bottom = i.bottom), i.name ? this.name = i.name : this.c ? this.name = this.c : this.name = this.type, i.realWidth ? this.realWidth = i.realWidth : this.realWidth = this.w, this.centerVertically = !1, this.type) {
			case "debug":
				this.chordHeightAbove = this.height;
				break;
			case "lyric":
				i.position && i.position === "below" ? this.lyricHeightBelow = this.height : this.lyricHeightAbove = this.height;
				break;
			case "chord":
				i.position && i.position === "below" ? this.chordHeightBelow = this.height : this.chordHeightAbove = this.height;
				break;
			case "text":
				this.pitch === void 0 ? i.position && i.position === "below" ? this.chordHeightBelow = this.height : this.chordHeightAbove = this.height : this.centerVertically = !0;
				break;
			case "part":
				this.partHeightAbove = this.height;
				break;
		}
	};
	n.prototype.getChordDim = function() {
		if (this.type === "debug" || !this.chordHeightAbove && !this.chordHeightBelow) return null;
		var e = 0, t = this.type === "chord" ? this.realWidth / 2 : 0, n = this.x - t - e;
		return {
			left: n,
			right: n + this.realWidth + e
		};
	}, n.prototype.invertLane = function(e) {
		this.lane === void 0 && (this.lane = 0), this.lane = e - this.lane - 1;
	}, n.prototype.putChordInLane = function(e) {
		this.lane = e, this.chordHeightAbove ? this.chordHeightAbove = this.height * 1.25 * this.lane : this.chordHeightBelow = this.height * 1.25 * this.lane;
	}, n.prototype.getLane = function() {
		return this.lane === void 0 ? 0 : this.lane;
	}, n.prototype.setX = function(e) {
		this.x = e + this.dx;
	}, t.exports = n;
})), require_tab_absolute_elements = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_absolute_element(), r = require_relative_element();
	function i(e) {
		return e != null && e.constructor === Object;
	}
	function a(e, t) {
		for (var n in t) t.hasOwnProperty(n) && (Array.isArray(t[n]) || i(t[n]) || (e[n] = t[n]));
	}
	function o(e) {
		var t = new n("", 0, 0, "", 0);
		return a(t, e), t.top = 0, t.bottom = -1, e.abcelem && (t.abcelem = {}, a(t.abcelem, e.abcelem), t.abcelem.el_type === "note" && (t.abcelem.el_type = "tabNumber")), e.cloned = t, t;
	}
	function s(e, t) {
		var n = o(e);
		if (t) for (var i = e.children, s = !0, c = 0; c < i.length; c++) {
			var l = i[c], u = new r("", 0, 0, 0, "");
			a(u, l), s = t.tablature.setRelative(l, u, s), n.children.push(u);
		}
		return n;
	}
	function c(e, t, i) {
		var a = "tab.tiny", o = 7.5;
		e.isTabBig && (a = "tab.big", o = 10);
		var s = {
			el_type: "tab",
			icon: a,
			Ypos: o
		};
		if (o += e.tabSymbolOffset, !e.hideTabSymbol) {
			var c = new n(s, 0, 0, "symbol", 0);
			c.x = t;
			var l = new r(a, 0, 0, 7.5, "tab");
			l.x = i, c.children.push(l), c.abcelem.el_type == "tab" && (l.pitch = o);
		}
		return c;
	}
	function l(e) {
		if (e.extra) for (var t = 0; t < e.extra.length; t++) {
			var n = e.extra[t];
			if (n.type == "lyric") return {
				bottom: n.bottom,
				height: n.height
			};
		}
		return null;
	}
	function u() {
		this.accidentals = null;
	}
	function d(e) {
		for (var t = 0, n = 0; n < e.length; n++) e[n].tabNameInfos || t++;
		return t;
	}
	function f(e, t, n, i, a) {
		var o = i.num;
		i.note.quarter != null && (o = o.toString(), o += i.note.quarter);
		var s = e.semantics.stringToPitch(i.str);
		n.notes.push({
			num: o,
			str: i.str,
			pitch: i.note.emit()
		});
		var c = new r(o, 0, 0, s + .3, { type: "tabNumber" });
		return c.x = t, c.isGrace = a, c.isAltered = i.note.isAltered, c;
	}
	function p(e, t) {
		var n = 0;
		if (e.extra) {
			for (var r = 0; r < e.extra.length; r++) if (e.extra[r].c.indexOf("noteheads") >= 0) {
				if (n === t) return e.extra[r].x + e.extra[r].w / 2;
				n++;
			}
		}
		return -1;
	}
	function m(e) {
		if (e.abcelem) {
			var t = e.abcelem;
			if (t.rest) return t.gracenotes;
		}
		return null;
	}
	function h(e, t, n) {
		var r = e.semantics.notesToNumber(t, n);
		if (r.error) return e.setError(r.error), r;
		if (r.graces && r.notes) {
			var i = r.notes.length - 1;
			r.notes[i].graces = r.graces;
		}
		return r;
	}
	function g(e, t, n, r, i) {
		for (var a = 0; a < r.length; a++) {
			var o = {
				el_type: "note",
				startChar: n.abcelem.startChar,
				endChar: n.abcelem.endChar,
				notes: [],
				grace: !0
			}, s = p(n, a), c = r[a], l = f(e, s, o, c, !0);
			t.children.push(l), i.push(o);
		}
	}
	u.prototype.build = function(e, t, n, r, i, a, u) {
		d(t);
		var _ = t[i + r], v = t[u], y = null, b = null;
		_.children[0].abcelem.el_type != "clef" && a != "none" && _.children.splice(0, 0, a);
		for (var x = 0; x < _.children.length; x++) {
			var S = _.children[x], C = S.x, w = C;
			switch (S.isClef && (v.children.push(c(e, C, w)), S.abcelem.type.indexOf("-8") >= 0 && (e.semantics.clefTranspose = -12), S.abcelem.type.indexOf("+8") >= 0 && (e.semantics.clefTranspose = 12)), S.type) {
				case "staff-extra key-signature":
					this.accidentals = S.abcelem.accidentals, e.semantics.accidentals = this.accidentals;
					break;
				case "bar":
					e.semantics.measureAccidentals = {};
					var T = !1;
					x === _.children.length - 1 && (T = !0);
					var E = s(S, e);
					if (E.abcelem.barNumber) {
						delete E.abcelem.barNumber;
						for (var D = 0; D < E.children.length; D++) if (E.children[D].type === "barNumber") {
							E.children.splice(D, 1);
							break;
						}
					}
					E.abcelem.lastBar = T, v.children.push(E), n.push({
						el_type: S.abcelem.el_type,
						type: S.abcelem.type,
						endChar: S.abcelem.endChar,
						startChar: S.abcelem.startChar,
						abselem: E
					});
					break;
				case "rest":
					var O = m(S);
					if (O) {
						if (y = h(e, null, O), y.error) return;
						I = {
							el_type: "note",
							startChar: S.abcelem.startChar,
							endChar: S.abcelem.endChar,
							notes: [],
							grace: !0
						}, g(e, k, S, y.graces, n);
					}
					break;
				case "note":
					var k = o(S);
					k.x = S.heads[0].x + S.heads[0].w / 2, k.lyricDim = l(S);
					var A = S.abcelem.pitches, j = S.abcelem.gracenotes;
					if (k.type = "tabNumber", y = h(e, A, j), y.error) return;
					if (y.graces) {
						var M = y.notes.length - 1;
						y.notes[M].graces = y.graces;
					}
					b = {
						el_type: "note",
						startChar: S.abcelem.startChar,
						endChar: S.abcelem.endChar,
						notes: []
					};
					for (var N = 0; N < y.notes.length; N++) {
						var P = y.notes[N];
						if (P.graces) for (var F = 0; F < P.graces.length; F++) {
							var I = {
								el_type: "note",
								startChar: S.abcelem.startChar,
								endChar: S.abcelem.endChar,
								notes: [],
								grace: !0
							}, L = p(S, F), R = P.graces[F], z = f(e, L, I, R, !0);
							k.children.push(z), n.push(I);
						}
						var B = f(e, k.x + S.heads[N].dx, b, P, !1);
						k.children.push(B);
					}
					b.notes.length > 0 && (b.abselem = k, n.push(b), v.children.push(k));
					break;
			}
		}
	}, t.exports = u;
})), require_tab_renderer = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_voice_element(), r = require_tab_absolute_elements(), i = require_spacing();
	function a() {
		return {
			tempoHeightAbove: 0,
			partHeightAbove: 0,
			volumeHeightAbove: 0,
			dynamicHeightAbove: 0,
			endingHeightAbove: 0,
			chordHeightAbove: 0,
			lyricHeightAbove: 0,
			lyricHeightBelow: 0,
			chordHeightBelow: 0,
			volumeHeightBelow: 0,
			dynamicHeightBelow: 0
		};
	}
	function o(e) {
		for (var t = 0, n = 0; n < e.children.length; n++) {
			var r = e.children[n];
			r.specialY && r.specialY.lyricHeightBelow > t && (t = r.specialY.lyricHeightBelow);
		}
		return t;
	}
	function s(e, t, n) {
		var r = e.semantics, i = t.controller.getTextSize, a = r.tabInfos(e), o = r.suppress(e), s = !0;
		if (o && (s = !1), s) {
			var c = i.calc(a, "tablabelfont", "text instrumentname");
			return n.tabNameInfos = {
				textSize: {
					height: c.height,
					width: c.width
				},
				name: a
			}, c.height;
		}
		return 0;
	}
	function c(e, t) {
		return t[e].isTabStaff ? e === t.length - 1 ? !0 : !t[e + 1].isTabStaff : !1;
	}
	function l(e) {
		for (var t = 0, n = 0; n < e.length; n++) e[n].isTabStaff || t++;
		return t;
	}
	function u(e, t) {
		for (var n = t; n >= 0; n--) if (!e[n].isTabStaff) return n;
		return -1;
	}
	function d(e) {
		for (var t = 0; t < e.length; t++) if (e[t].isTabStaff) {
			var n = u(e, t);
			e[t].hasStaff = e[n], e[n].hasTab || (e[n].hasTab = []), e[n].hasTab.push(e[t]);
		}
	}
	function f(e, t) {
		return l(e) === 1 && t.voices.length > 1;
	}
	function p(e, t) {
		for (var n = 0, r = 0, i = !0, a = 0; i;) {
			if (!t[n]) return -1;
			if (t[n].isTabStaff || (a = t[n].voices.length), t[n].isTabStaff) {
				if (r++, c(n, t) && r < a) return n + 1;
			} else if (r = 0, n >= e && (n + 1 == t.length || !t[n + 1].isTabStaff)) return n + 1;
			if (n++, n > t.length) return -1;
		}
	}
	function m(e, t) {
		for (var n = t; n >= 0; n--) if (!e[n].isTabStaff) return e[n];
		return null;
	}
	function h(e, t) {
		return e[t].children[0].abcelem.el_type === "clef" ? null : t == 0 ? "none" : e[t - 1].children[0];
	}
	function g(e, t, c, l) {
		var u = new r(), g = { clef: { type: "TAB" } }, _ = e.linePitch * e.nbLines, v = c.staff;
		if (v) {
			var y = v[0];
			if (y && y.clef && y.clef.stafflines == 0) {
				e.setError("No tablatures when stafflines=0");
				return;
			}
			v.splice(v.length, 0, g);
		}
		var b = c.staffGroup, x = b.voices, S = x[0], C = o(S), w = 3, T = l, E = b.staffs[T], D = _ + w - E.bottom - C;
		E.isTabStaff && (D = E.top);
		var O = {
			bottom: -1,
			isTabStaff: !0,
			specialY: a(),
			lines: e.nbLines,
			linePitch: e.linePitch,
			dy: .15,
			top: D
		}, k = p(l, b.staffs);
		if (k !== -1) {
			O.parentIndex = k - 1, b.staffs.splice(k, 0, O), b.height += _ + w;
			var A = m(b.staffs, k), j = 1;
			f(b.staffs, A) && (j = A.voices.length), g.voices = [];
			for (var M = 0; M < j; M++) {
				var N = new n(0, 0);
				M > 0 && (N.duplicate = !0);
				var P = s(e, t, N) / i.STEP;
				P = Math.max(P, 1), b.staffs[l].top += 1, b.height += P, N.staff = O;
				var F = x.length;
				x.splice(x.length, 0, N);
				var I = h(x, M + l);
				g.voices[M] = [], u.build(e, x, g.voices[M], M, l, I, F);
			}
			d(b.staffs);
		}
	}
	t.exports = g;
})), require_note_to_midi = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = {
		__: -2,
		_: -1,
		"_/": -.5,
		"=": 0,
		"": 0,
		"^/": .5,
		"^": 1,
		"^^": 2
	}, r = [
		"C",
		"-",
		"D",
		"-",
		"E",
		"F",
		"-",
		"G",
		"-",
		"A",
		"-",
		"B",
		"c",
		"-",
		"d",
		"-",
		"e",
		"f",
		"-",
		"g",
		"-",
		"a",
		"-",
		"b"
	];
	function i(e) {
		var t = e.match(/([_^\/]*)([ABCDEFGabcdefg])(,*)('*)/);
		if (t && t.length === 5) {
			var i = n[t[1]], a = r.indexOf(t[2]), o = t[4].length - t[3].length;
			return 48 + a + i + o * 12;
		}
		return 0;
	}
	function a(e) {
		e = parseInt(e, 10);
		var t = Math.floor(e / 12), n = e % 12, i = r[n];
		if (i === "-" && (i = "^" + r[n - 1]), t > 4) for (i = i.toLowerCase(), t -= 5; t > 0;) i += "'", t--;
		else for (; t < 4;) i += ",", t++;
		return i;
	}
	t.exports = {
		noteToMidi: i,
		midiToNote: a
	};
})), require_tab_note = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var { noteToMidi: n, midiToNote: r } = require_note_to_midi();
	function i(e, t) {
		var i = n(e);
		t && (i += t);
		var a = r(i), o = !1, s = !1, c = !1, l = null, u = null, d = !1, f = 0;
		e.startsWith("_") ? (o = !0, f = -1, e[1] == "/" ? (o = !1, u = "v", f = 0) : e[1] == "_" && (d = !0, --f)) : e.startsWith("^") ? (s = !0, f = 1, e[1] == "/" ? (s = !1, u = "^", f = 0) : e[1] == "^" && (d = !0, f += 1)) : e.startsWith("=") && (l = !0, f = 0), c = o || s || u != null, (c || l) && (a = u != null || d ? e.slice(2) : e.slice(1));
		var p = (a.match(/,/g) || []).length, m = (a.match(/'/g) || []).length;
		this.pitch = i, this.pitchAltered = 0, this.name = a, this.acc = f, this.isSharp = s, this.isKeySharp = !1, this.isDouble = d, this.isAltered = c, this.isFlat = o, this.isKeyFlat = !1, this.natural = l, this.quarter = u, this.isLower = this.name == this.name.toLowerCase(), this.name = this.name[0].toUpperCase(), this.hasComma = p, this.isQuoted = m;
	}
	function a(e) {
		var t = e.name, n = new i(t);
		return n.pitch = e.pitch, n.hasComma = e.hasComma, n.isLower = e.isLower, n.isQuoted = e.isQuoted, n.isSharp = e.isSharp, n.isKeySharp = e.isKeySharp, n.isFlat = e.isFlat, n.isKeyFlat = e.isKeyFlat, n;
	}
	i.prototype.sameNoteAs = function(e) {
		return e.pitch === this.pitch;
	}, i.prototype.isLowerThan = function(e) {
		return e.pitch > this.pitch;
	}, i.prototype.checkKeyAccidentals = function(e, t) {
		if (!(this.isAltered || this.natural)) {
			if (t[this.name.toUpperCase()]) switch (t[this.name.toUpperCase()]) {
				case "__":
					this.acc = -2, this.pitchAltered = -2;
					return;
				case "_":
					this.acc = -1, this.pitchAltered = -1;
					return;
				case "=":
					this.acc = 0, this.pitchAltered = 0;
					return;
				case "^":
					this.acc = 1, this.pitchAltered = 1;
					return;
				case "^^":
					this.acc = 2, this.pitchAltered = 2;
					return;
			}
			else if (e) for (var n = this.name, r = 0; r < e.length; r++) {
				var i = e[r];
				n == i.note.toUpperCase() && (i.acc == "flat" && (this.acc = -1, this.isKeyFlat = !0, this.pitchAltered = -1), i.acc == "sharp" && (this.acc = 1, this.isKeySharp = !0, this.pitchAltered = 1));
			}
		}
	}, i.prototype.getAccidentalEquiv = function() {
		var e = a(this);
		return e.isSharp || e.isKeySharp ? (e = e.nextNote(), e.isFlat = !0, e.isSharp = !1, e.isKeySharp = !1) : (e.isFlat || e.isKeyFlat) && (e = e.prevNote(), e.isSharp = !0, e.isFlat = !1, e.isKeyFlat = !1), e;
	}, i.prototype.nextNote = function() {
		return new i(r(this.pitch + 1 + this.pitchAltered));
	}, i.prototype.prevNote = function() {
		return new i(r(this.pitch - 1 + this.pitchAltered));
	}, i.prototype.emitNoAccidentals = function() {
		var e = this.name;
		this.isLower && (e = e.toLowerCase());
		for (var t = 0; t < this.isQuoted; t++) e += "'";
		for (var n = 0; n < this.hasComma; n++) e += ",";
		return e;
	}, i.prototype.emit = function() {
		var e = this.name;
		(this.isSharp || this.isKeySharp) && (e = "^" + e, this.isDouble && (e = "^" + e)), (this.isFlat || this.isKeyFlat) && (e = "_" + e, this.isDouble && (e = "_" + e)), this.quarter && (e = this.quarter == "^" ? "^/" + e : "_/" + e), this.natural && (e = "=" + e);
		for (var t = 1; t <= this.hasComma; t++) e += ",";
		if (this.isLower) {
			e = e.toLowerCase();
			for (var n = 1; n <= this.isQuoted; n++) e += "'";
		}
		return e;
	}, t.exports = i;
})), require_tab_notes = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_tab_note(), r = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G"
	];
	function i(e, t) {
		var i = new n(e), a = new n(t);
		if (a.isLowerThan(i)) {
			var o = i.emit();
			return { error: "Invalid string Instrument tuning : " + a.emit() + " string lower than " + o + " string" };
		}
		var s = [], c = r.indexOf(i.name), l = r.indexOf(a.name);
		if (c == -1 || l == -1) return s;
		for (var u = !1; !u;) s.push(i.emit()), i = i.nextNote(), i.sameNoteAs(a) && (u = !0);
		return s;
	}
	t.exports = i;
})), require_string_patterns = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var { noteToMidi: n } = require_note_to_midi(), r = require_tab_note(), i = require_tab_notes();
	function a(e) {
		var t = null, n = e.tuning;
		if (e.capo > 0) {
			t = [];
			for (var i = 0; i < n.length; i++) {
				for (var a = new r(n[i]), o = 0; o < e.capo; o++) a = a.nextNote();
				t[i] = a.emit();
			}
		}
		return t;
	}
	function o(e) {
		var t = [], n = e.tuning;
		e.capo > 0 && (n = e.capoTuning);
		for (var r = n.length - 1, a = 0; a < n.length; a++) {
			var o = e.highestNote;
			a != n.length - 1 && (o = n[a + 1]);
			var s = i(n[a], o);
			if (s.error) return s;
			t[r--] = s;
		}
		return t;
	}
	function s(e) {
		var t = [];
		t[0] = [];
		for (var n = e.strings, r = 1; r < n.length; r++) t[r] = n[r - 1];
		return t;
	}
	function c(e, t) {
		for (var n = 0; n < t.length - 1; n++) {
			var r = t[n], i = t[n + 1];
			if (r.str == i.str) {
				if (r.str == e.strings.length - 1) {
					r.num = "?", i.num = "?";
					return;
				}
				i.num < r.num ? (i.str++, i = u(e, i.note, i.str, e.secondPos, e.strings[i.str].length)) : (r.str++, r = u(e, r.note, r.str, e.secondPos, e.strings[r.str].length)), t[n] = r, t[n + 1] = i;
			}
		}
		return null;
	}
	function l(e, t) {
		for (var n = [], i = 0; i < t.length; i++) if (!t[i].endTie) {
			var a = new r(t[i].name, e.clefTranspose);
			a.checkKeyAccidentals(e.accidentals, e.measureAccidentals);
			var o = d(e, a);
			n.push(o);
		}
		return c(e, n), n;
	}
	function u(e, t, n, r, i) {
		var a = e.strings;
		t.checkKeyAccidentals(e.accidentals, e.measureAccidentals), r && (a = r);
		var o = t.emitNoAccidentals(), s = a[n].indexOf(o), c = t.acc;
		if (s != -1) {
			if (r && (s += i), (t.isFlat || t.acc == -1) && s == 0) {
				var l = t.getAccidentalEquiv();
				n++, s = a[n].indexOf(l.emit()), c = 0;
			}
			return {
				num: s + c,
				str: n,
				note: t
			};
		}
		return null;
	}
	function d(e, t) {
		if (t.isAltered || t.natural) {
			var n;
			t.isFlat ? n = t.isDouble ? "__" : "_" : t.isSharp ? n = t.isDouble ? "^^" : "^" : t.natural && (n = "="), e.measureAccidentals[t.name.toUpperCase()] = n;
		}
		for (var r = e.stringPitches.length - 1; r >= 0; r--) if (t.pitch + t.pitchAltered >= e.stringPitches[r]) {
			var i = t.pitch + t.pitchAltered - e.stringPitches[r];
			return t.quarter === "^" ? i -= .5 : t.quarter === "v" && (i += .5), {
				num: Math.round(i),
				str: e.stringPitches.length - 1 - r,
				note: t
			};
		}
		return {
			num: "?",
			str: e.stringPitches.length - 1,
			note: t
		};
	}
	p.prototype.stringToPitch = function(e) {
		return 5.3 + (this.strings.length - 1 - e) * this.linePitch;
	};
	function f(e, t) {
		var n = {
			num: "?",
			str: 0,
			note: t
		};
		e.push(n), e.error = t.emit() + ": unexpected note for instrument";
	}
	p.prototype.notesToNumber = function(e, t) {
		var n, i, a = null, o = null;
		if (e && (o = [], e.length > 1 ? (o = l(this, e), o.error && (a = o.error)) : e[0].endTie || (n = new r(e[0].name, this.clefTranspose), n.checkKeyAccidentals(this.accidentals, this.measureAccidentals), i = d(this, n), i ? o.push(i) : (f(o, n), a = o.error))), a) return o;
		var s = null;
		if (t) {
			s = [];
			for (var c = 0; c < t.length; c++) n = new r(t[c].name, this.clefTranspose), n.checkKeyAccidentals(this.accidentals, this.measureAccidentals), i = d(this, n), i ? s.push(i) : (f(s, n), a = o.error);
		}
		return {
			notes: o,
			graces: s,
			error: a
		};
	}, p.prototype.toString = function() {
		for (var e = [], t = 0; t < this.tuning.length; t++) {
			var n = this.tuning[t].replaceAll(",", "").replaceAll("'", "").toUpperCase();
			n[0] === "_" ? n = n[1] + "b " : n[0] === "^" && (n = n[1] + "# "), e.push(n);
		}
		return e.join("");
	}, p.prototype.tabInfos = function(e) {
		var t = e.params.label;
		if (t) {
			var n = t.indexOf("%T"), r = "";
			return n != -1 && (r = this.toString(), e.capo > 0 && (r += " capo:" + e.capo), t = t.replace("%T", r)), t;
		}
		return "";
	}, p.prototype.suppress = function(e) {
		return !!e.params.suppress;
	};
	function p(e) {
		var t = e.tuning, r = e.capo, i = e.params.highestNote;
		this.linePitch = e.linePitch, this.highestNote = "a'", i && (this.highestNote = i), this.measureAccidentals = {}, this.capo = 0, r && (this.capo = parseInt(r, 10)), this.transpose = e.transpose ? e.transpose : 0, this.tuning = t, this.stringPitches = [];
		for (var c = 0; c < this.tuning.length; c++) {
			var l = n(this.tuning[c]) + this.capo;
			this.stringPitches.push(l);
		}
		if (this.capo > 0 && (this.capoTuning = a(this)), this.strings = o(this), this.strings.error) {
			e.setError(this.strings.error), e.inError = !0;
			return;
		}
		this.secondPos = s(this);
	}
	t.exports = p;
})), require_tab_string = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_string_tablature(), r = require_tab_renderer(), i = require_string_patterns();
	a.prototype.init = function(e, t, r, a) {
		this.tune = e, this.params = r, this.tuneNumber = t, this.inError = !1, this.abcTune = e, this.linePitch = 3, this.nbLines = a.defaultTuning.length, this.isTabBig = a.isTabBig, this.tabSymbolOffset = a.tabSymbolOffset, this.capo = r.capo, this.transpose = r.visualTranspose, this.hideTabSymbol = r.hideTabSymbol, this.tablature = new n(this.nbLines, this.linePitch);
		var o = r.tuning;
		o ||= a.defaultTuning, this.tuning = o, this.semantics = new i(this);
	}, a.prototype.setError = function(e) {
		e && (this.error = e, this.inError = !0, this.tune.warnings ? this.tune.warnings.push(e) : this.tune.warnings = [e]);
	}, a.prototype.render = function(e, t, n) {
		this.inError || this.tablature.bypass(t) || r(this, e, t, n);
	};
	function a() {}
	t.exports = function() {
		return {
			name: "StringTab",
			tablature: a
		};
	};
})), require_abc_tablatures = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_tab_string(), r = {
		violin: {
			name: "StringTab",
			defaultTuning: [
				"G,",
				"D",
				"A",
				"e"
			],
			isTabBig: !1,
			tabSymbolOffset: 0
		},
		fiddle: {
			name: "StringTab",
			defaultTuning: [
				"G,",
				"D",
				"A",
				"e"
			],
			isTabBig: !1,
			tabSymbolOffset: 0
		},
		mandolin: {
			name: "StringTab",
			defaultTuning: [
				"G,",
				"D",
				"A",
				"e"
			],
			isTabBig: !1,
			tabSymbolOffset: 0
		},
		guitar: {
			name: "StringTab",
			defaultTuning: [
				"E,",
				"A,",
				"D",
				"G",
				"B",
				"e"
			],
			isTabBig: !0,
			tabSymbolOffset: 0
		},
		fiveString: {
			name: "StringTab",
			defaultTuning: [
				"C,",
				"G,",
				"D",
				"A",
				"e"
			],
			isTabBig: !1,
			tabSymbolOffset: -.95
		}
	};
	t.exports = {
		inited: !1,
		plugins: {},
		register: function(e) {
			var t = e.name, n = e.tablature;
			this.plugins[t] = n;
		},
		setError: function(e, t) {
			e.warnings ? e.warning.push(t) : e.warnings = [t];
		},
		preparePlugins: function(e, t, i) {
			this.inited ||= (this.register(new n()), !0);
			var a = null, o = 0;
			if (i.tablature) {
				var s = i.tablature;
				a = [];
				for (var c = 0; c < s.length; c++) {
					var l = s[c], u = l.instrument;
					if (u == null) return this.setError(e, "tablature 'instrument' is missing"), a;
					var d = r[u], f = null;
					if (d && (f = this.plugins[d.name]), f) {
						i.visualTranspose != 0 && (l.visualTranspose = i.visualTranspose), l.abcSrc = i.tablature.abcSrc;
						var p = {
							classz: f,
							tuneNumber: t,
							params: l,
							instance: null,
							tabType: d
						};
						a.push(p), o++;
					} else if (u === "") a.push(null);
					else return this.setError(e, "Undefined tablature plugin: " + u), a;
				}
			}
			return a;
		},
		layoutTablatures: function(e, t) {
			var n = t.tablatures, r = 0;
			if (n && n.length > 0) for (var i = n.length, a = 0; a < i; ++a) n[a] && n[a].params.firstStaffOnly && (n[a].params.suppress = !1);
			for (var o = 0; o < t.lines.length; o++) {
				var s = t.lines[o];
				if (s.staff && r++, r > 1 && n && n.length > 0) for (var i = n.length, a = 0; a < i; ++a) n[a].params.firstStaffOnly && (n[a].params.suppress = !0);
				var c = s.staff;
				if (c) {
					for (var l = c.length, u = 0; u < c.length; u++) if (n[u] && u < l) {
						var d = n[u];
						d.instance ?? (d.instance = new d.classz(), d.instance.init(t, d.tuneNumber, d.params, d.tabType)), d.instance.render(e, s, u);
					}
				}
			}
		}
	};
})), require_abc_tunebook = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_parse(), r = require_abc_parse_book(), i = require_abc_tablatures(), a = {};
	(function() {
		a.numberOfTunes = function(e) {
			var t = e.split("\nX:").length;
			return t === 0 && (t = 1), t;
		};
		var e = a.TuneBook = function(e) {
			var t = r(e);
			this.header = t.header, this.tunes = t.tunes;
		};
		e.prototype.getTuneById = function(e) {
			for (var t = 0; t < this.tunes.length; t++) if (this.tunes[t].id === "" + e) return this.tunes[t];
			return null;
		}, e.prototype.getTuneByTitle = function(e) {
			for (var t = 0; t < this.tunes.length; t++) if (this.tunes[t].title === e) return this.tunes[t];
			return null;
		}, a.parseOnly = function(e, t) {
			for (var n = a.numberOfTunes(e), r = [], i = 0; i < n; i++) r.push(1);
			function o() {}
			return a.renderEngine(o, r, e, t);
		}, a.renderEngine = function(t, r, a, o) {
			var s = [], c = function(e) {
				return e && !e.propertyIsEnumerable("length") && typeof e == "object" && typeof e.length == "number";
			};
			if (!(r === void 0 || a === void 0)) {
				c(r) || (r = [r]), o === void 0 && (o = {});
				for (var l = o.startingTune ? parseInt(o.startingTune, 10) : 0, u = new e(a), d = new n(), f = 0; f < r.length; f++) {
					var p = r[f];
					if (p === "*" || typeof p == "string" && (p = document.getElementById(p)), p) if (l >= 0 && l < u.tunes.length) {
						d.parse(u.tunes[l].abc, o, u.tunes[l].startPos - u.header.length);
						var m = d.getTune();
						o.tablature && (m.tablatures = i.preparePlugins(m, l, o));
						var h = d.getWarnings();
						h && (m.warnings = h);
						var g = t(p, m, f, u.tunes[l].abc);
						s.push(g || m);
					} else p.innerHTML &&= "";
					l++;
				}
				return s;
			}
		}, a.extractMeasures = function(t) {
			for (var n = [], r = new e(t), i = 0; i < r.tunes.length; i++) {
				for (var o = r.tunes[i], s = o.abc.split("K:"), c = s[1].split("\n"), l = s[0] + "K:" + c[0] + "\n", u = null, d = null, f = null, p = [], m = !1, h = a.parseOnly(o.abc)[0], g = h.getPickupLength() > 0, _ = 0; _ < h.lines.length; _++) {
					var v = h.lines[_];
					if (v.staff) for (var y = 0; y < 1; y++) for (var b = v.staff[y], x = 0; x < 1; x++) for (var S = b.voices[x], C = 0; C < S.length; C++) {
						var w = S[C];
						if (f === null && w.startChar >= 0 && (f = w.startChar, d = w.chord === void 0 ? u : null), w.chord && (u = w), w.el_type === "bar") {
							if (m) {
								var T = { abc: o.abc.substring(f, w.endChar) };
								u = d && d.chord && d.chord.length > 0 ? d.chord[0].name : null, u && (T.lastChord = u), w.startEnding && (T.startEnding = w.startEnding), w.endEnding && (T.endEnding = w.endEnding), p.push(T), f = null, m = !1;
							}
						} else w.el_type === "note" && (m = !0);
					}
				}
				n.push({
					header: l,
					measures: p,
					hasPickup: g
				});
			}
			return n;
		};
	})(), t.exports = a;
})), require_output = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_key_accidentals(), { relativeMajor: r, transposeKey: i, relativeMode: a } = require_relative_major(), o = require_transpose_chord(), u;
	(function() {
		u = function(t, s, c) {
			if (s === "TEST") return {
				keyAccidentals: n,
				relativeMajor: r,
				transposeKey: i,
				relativeMode: a,
				transposeChordName: o
			};
			c = parseInt(c, 10);
			var l = [], u;
			for (u = 0; u < s.length; u++) l = l.concat(e(t, s[u], c));
			l = l.sort(function(e, t) {
				return t.start - e.start;
			});
			var d = t.split("");
			for (u = 0; u < l.length; u++) {
				var f = l[u];
				d.splice(f.start, f.end - f.start, f.note);
			}
			return d.join("");
		};
		function e(e, n, r) {
			var i = [], a = n.getKeySignature();
			if (a.root === "Hp" || a.root === "HP") return i;
			i = i.concat(t(e, r));
			for (var o = 0; o < n.lines.length; o++) {
				var c = n.lines[o].staff;
				if (c) for (var l = 0; l < c.length; l++) {
					var u = c[l];
					u.clef.type !== "perc" && (i = i.concat(s(e, u.voices, u.key, r)));
				}
			}
			return i;
		}
		function t(e, t) {
			for (var n = [], r = e.split("K:"), i = r[0].length, a = 1; a < r.length; a++) {
				var o = r[a], s = o.match(/^( *)([A-G])([#b]?)( ?)(\w*)/);
				if (s) {
					var c = i + 2 + s[1].length, l = s[2] + s[3] + s[4] + s[5], u = m({
						root: s[2],
						acc: s[3],
						mode: s[5]
					}, t), d = u.root + u.acc + s[4] + u.mode;
					n.push({
						start: c,
						end: c + l.length,
						note: d
					});
				}
				i += o.length + 2;
			}
			return n;
		}
		function s(e, t, n, r) {
			for (var i = [], a = m(n, r), o = 0; o < t.length; o++) i = i.concat(d(e, t[o], n.root, c(n), a, r));
			return i;
		}
		function c(e) {
			for (var t = {}, n = 0; n < e.accidentals.length; n++) {
				var r = e.accidentals[n];
				r.acc === "flat" ? t[r.note.toUpperCase()] = "_" : r.acc === "sharp" && (t[r.note.toUpperCase()] = "^");
			}
			return t;
		}
		function l(e, t, n) {
			var r = f.indexOf(e.root) - f.indexOf(t);
			return t === "none" && (r = f.indexOf(e.root)), r === 0 ? n > 2 ? r += 7 : n === -12 && (r -= 7) : n > 0 && r < 0 ? r += 7 : n < 0 && r > 0 && (r -= 7), n > 12 ? r += 7 : n < -12 && (r -= 7), r;
		}
		function d(e, t, n, r, i, a) {
			for (var s = [], u = l(i, n, a), d = {}, f = {}, p = 0; p < t.length; p++) {
				var g = t[p];
				if (g.chord) for (var _ = 0; _ < g.chord.length; _++) {
					var v = g.chord[_];
					if (v.position === "default") {
						var y = i.accidentals.length && i.accidentals[0].acc === "flat", w = o(v.name, a, y, !0);
						w = w.replace(/♭/g, "b").replace(/♯/g, "#"), w !== v.name && s.push(C(e, g.startChar, g.endChar, w));
					}
				}
				if (g.el_type === "note" && g.pitches) {
					for (var T = 0; T < g.pitches.length; T++) {
						var E = b(g.pitches[T].name, n, r, d);
						E.acc && (d[E.name.toUpperCase()] = E.acc);
						var D = h(E, i, u, f);
						D.acc && (f[D.upper] = D.acc), s.push(x(e, g.startChar, g.endChar, D.acc + D.name, T));
					}
					if (g.gracenotes) for (var O = 0; O < g.gracenotes.length; O++) {
						var k = b(g.gracenotes[O].name, n, r, d);
						k.acc && (d[k.name.toUpperCase()] = k.acc);
						var A = h(k, i, u, d);
						A.acc && (f[A.upper] = A.acc), s.push(S(e, g.startChar, g.endChar, A.acc + A.name, O));
					}
				} else g.el_type === "bar" ? (d = {}, f = {}) : g.el_type === "keySignature" && (n = g.root, r = c(g), i = m(g, a), u = l(i, n, a));
			}
			return s;
		}
		var f = "CDEFGAB", p = [
			",,,,",
			",,,",
			",,",
			",",
			"",
			"'",
			"''",
			"'''",
			"''''"
		];
		function m(e, t) {
			if (e.root === "none") return {
				root: i("C", t),
				mode: "",
				acc: "",
				accidentals: []
			};
			var o = i(r(e.root + e.acc + e.mode), t), s = a(o, e.mode), c = n(o);
			return {
				root: s[0],
				mode: e.mode,
				acc: s.length > 1 ? s[1] : "",
				accidentals: c
			};
		}
		function h(e, t, n, r) {
			for (var i = e.pitch, a = f.indexOf(e.name), o = (f.indexOf(t.root) + i) % 7, s = a + n, c = e.oct; s > 6;) c++, s -= 7;
			for (; s < 0;) c--, s += 7;
			for (var l = f[o], u = "", d = e.adj, p = "=", m = 0; m < t.accidentals.length; m++) if (t.accidentals[m].note.toLowerCase() === l.toLowerCase()) {
				d += t.accidentals[m].acc === "flat" ? -1 : 1, p = t.accidentals[m].acc === "flat" ? "_" : "^";
				break;
			}
			switch (d) {
				case -2:
					u = "__";
					break;
				case -1:
					u = "_";
					break;
				case 0:
					u = "=";
					break;
				case 1:
					u = "^";
					break;
				case 2:
					u = "^^";
					break;
				case -3:
					var g = {};
					return g.pitch = e.pitch - 1, g.oct = e.oct, g.name = f[f.indexOf(e.name) - 1], g.name || (g.name = "B", g.oct--), g.name === "B" || g.name === "E" ? g.adj = e.adj + 1 : g.adj = e.adj + 2, h(g, t, n + 1, r);
				case 3:
					var g = {};
					return g.pitch = e.pitch + 1, g.oct = e.oct, g.name = f[f.indexOf(e.name) + 1], g.name || (g.name = "C", g.oct++), g.name === "C" || g.name === "F" ? g.adj = e.adj - 1 : g.adj = e.adj - 2, h(g, t, n + 1, r);
			}
			switch ((r[l] === u || !r[l] && u === p) && !e.courtesy && (u = ""), c) {
				case 0:
					l += ",,,";
					break;
				case 1:
					l += ",,";
					break;
				case 2:
					l += ",";
					break;
				case 4:
					l = l.toLowerCase();
					break;
				case 5:
					l = l.toLowerCase() + "'";
					break;
				case 6:
					l = l.toLowerCase() + "''";
					break;
				case 7:
					l = l.toLowerCase() + "'''";
					break;
				case 8:
					l = l.toLowerCase() + "''''";
					break;
			}
			return c > 4 && (l = l.toLowerCase()), {
				acc: u,
				name: l,
				upper: l.toUpperCase()
			};
		}
		var g = /([_^=]*)([A-Ga-g])([,']*)/, _ = /([_^=]*[A-Ga-g][,']*)(\d*\/*\d*)([\>\<\-\)\.\s\\]*)/, v = /([_^=]*[A-Ga-g][,']*)?(\d*\/*\d*)?([\>\<\-\)]*)?/, y = /(\s*)$/;
		function b(e, t, n, r) {
			var i = t === "none" ? 0 : f.indexOf(t), a = e.match(g), o = a[2].toUpperCase(), s = f.indexOf(o) - i;
			s < 0 && (s += 7);
			var c = p.indexOf(a[3]);
			o === a[2] && c--;
			var l = r[o] || n[o] || "=";
			return {
				acc: a[1],
				name: o,
				pitch: s,
				oct: c,
				adj: w(a[1], n[o], r[o]),
				courtesy: a[1] === l
			};
		}
		function x(e, t, n, r, i) {
			var a = e.substring(t, n), o = a.match(new RegExp(_.source + y.source));
			if (o) {
				var s = o[1].length, c = o[2].length + o[3].length + o[4].length, l = n - t - s - c;
				t += l, n -= c;
			} else {
				var u = /* @__PURE__ */ RegExp("([^\\[]*)\\[(?:" + v.source + "\\s*){1,8}\\-?](\\d*\\/*\\d*)?([\\>\\<\\-\\)]*)" + y.source);
				if (o = a.match(u), o) {
					var d = o[1].length + 1, f = a.slice(o[1].length + 1, a.lastIndexOf("]")), p = [], m = RegExp(v.source + "\\s*", "g");
					for (let e of f.matchAll(m)) {
						let t = e[0].trim();
						t !== "" && p.push({
							text: t,
							index: e.index
						});
					}
					if (i >= p.length) throw Error("Chord index out of range for chord: " + a);
					var h = p[i];
					let e = h.text.match(/^(.+?)(\d+\/?\d*)?(-)?$/);
					e ? e[1] : h.text;
					let s = e && e[2] ? e[2] : "", c = e && e[3] ? e[3] : "";
					r = r + s + c, t += d + h.index, n = t + h.text.length;
				}
			}
			return {
				start: t,
				end: n,
				note: r
			};
		}
		function S(e, t, n, r, i) {
			var a = e.substring(t, n), o = /\{/, s = /\}/, c = /([^\{]*)/, l = /(\/*)/, u = a.match(new RegExp(c.source + o.source + l.source + v.source + l.source + v.source + l.source + v.source + l.source + v.source + l.source + v.source + l.source + v.source + l.source + v.source + l.source + v.source + s.source));
			if (u) {
				for (var d = 1 + u[1].length, f = 0; f < i; f++) u[f * 3 + 2] && (d += u[f * 3 + 2].length), u[f * 3 + 3] && (d += u[f * 3 + 3].length), u[f * 3 + 4] && (d += u[f * 3 + 4].length), u[f * 3 + 5] && (d += u[f * 3 + 5].length);
				u[i * 3 + 2] && (d += u[f * 3 + 2].length), t += d;
				var p = u[i * 3 + 3] ? u[i * 3 + 3].length : 0;
				p += u[i * 3 + 4] ? u[i * 3 + 4].length : 0, p += u[i * 3 + 5] ? u[i * 3 + 5].length : 0, n = t + p;
			}
			return {
				start: t,
				end: n,
				note: r
			};
		}
		function C(e, t, n, r) {
			var i = e.substring(t, n).match(/([^"]+)?(".+")+/);
			return i[1] && (t += i[1].length), n = t + i[2].length, {
				start: t + 1,
				end: n - 1,
				note: r
			};
		}
		function w(e, t, n) {
			if (!e && n && (e = n), !e) return 0;
			switch (t) {
				case void 0: switch (e) {
					case "__": return -2;
					case "_": return -1;
					case "=": return 0;
					case "^": return 1;
					case "^^": return 2;
					default: return 0;
				}
				case "_": switch (e) {
					case "__": return -1;
					case "_": return 0;
					case "=": return 1;
					case "^": return 2;
					case "^^": return 3;
					default: return 0;
				}
				case "^": switch (e) {
					case "__": return -3;
					case "_": return -2;
					case "=": return -1;
					case "^": return 0;
					case "^^": return 1;
					default: return 0;
				}
			}
			return 0;
		}
	})(), t.exports = u;
})), require_beam_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t, n, r) {
		this.type = "BeamElem", this.isflat = !!n, this.isgrace = !!(t && t === "grace"), this.forceup = !!(this.isgrace || t && t === "up"), this.forcedown = !!(t && t === "down"), this.elems = [], this.total = 0, this.average = 6, this.allrests = !0, this.stemHeight = e, this.beams = [], r && r.duration ? (this.duration = r.duration, r.startTriplet && (this.duration *= r.tripletMultiplier), this.duration = Math.round(this.duration * 1e3) / 1e3) : this.duration = 0;
	};
	n.prototype.setHint = function() {
		this.hint = !0;
	}, n.prototype.runningDirection = function(e) {
		var t = e.averagepitch;
		t !== void 0 && (this.total = Math.round(this.total + t), this.count ||= 0, this.count++);
	}, n.prototype.add = function(e) {
		var t = e.abcelem.averagepitch;
		t !== void 0 && (e.abcelem.rest || (this.allrests = !1), e.beam = this, this.elems.push(e), this.total = Math.round(this.total + t), (this.min === void 0 || e.abcelem.minpitch < this.min) && (this.min = e.abcelem.minpitch), (this.max === void 0 || e.abcelem.maxpitch > this.max) && (this.max = e.abcelem.maxpitch));
	}, n.prototype.addBeam = function(e) {
		this.beams.push(e);
	}, n.prototype.setStemDirection = function() {
		this.average = r(this.total, this.count), this.forceup ? this.stemsUp = !0 : this.forcedown ? this.stemsUp = !1 : this.stemsUp = this.average < 6, delete this.count, this.total = 0;
	}, n.prototype.calcDir = function() {
		this.average = r(this.total, this.elems.length), this.forceup ? this.stemsUp = !0 : this.forcedown ? this.stemsUp = !1 : this.stemsUp = this.average < 6;
		for (var e = this.stemsUp ? "up" : "down", t = 0; t < this.elems.length; t++) for (var n = 0; n < this.elems[t].heads.length; n++) this.elems[t].heads[n].stemDir = e;
	};
	function r(e, t) {
		return t ? e / t : 0;
	}
	t.exports = n;
})), require_brace_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t) {
		this.startVoice = e, this.type = t;
	};
	n.prototype.setBottomStaff = function(e) {
		this.endVoice = e, this.startVoice.header && !this.endVoice.header && (this.header = this.startVoice.header, delete this.startVoice.header);
	}, n.prototype.continuing = function(e) {
		this.lastContinuedVoice = e;
	}, n.prototype.getWidth = function() {
		return 10;
	}, n.prototype.isStartVoice = function(e) {
		return !!(this.startVoice && this.startVoice.staff && this.startVoice.staff.voices.length > 0 && this.startVoice.staff.voices[0] === e);
	}, t.exports = n;
})), require_glyphs = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_spacing(), r = {
		0: {
			d: [
				[
					"M",
					4.83,
					-14.97
				],
				[
					"c",
					.33,
					-.03,
					1.11,
					0,
					1.47,
					.06
				],
				[
					"c",
					1.68,
					.36,
					2.97,
					1.59,
					3.78,
					3.6
				],
				[
					"c",
					1.2,
					2.97,
					.81,
					6.96,
					-.9,
					9.27
				],
				[
					"c",
					-.78,
					1.08,
					-1.71,
					1.71,
					-2.91,
					1.95
				],
				[
					"c",
					-.45,
					.09,
					-1.32,
					.09,
					-1.77,
					0
				],
				[
					"c",
					-.81,
					-.18,
					-1.47,
					-.51,
					-2.07,
					-1.02
				],
				[
					"c",
					-2.34,
					-2.07,
					-3.15,
					-6.72,
					-1.74,
					-10.2
				],
				[
					"c",
					.87,
					-2.16,
					2.28,
					-3.42,
					4.14,
					-3.66
				],
				["z"],
				[
					"m",
					1.11,
					.87
				],
				[
					"c",
					-.21,
					-.06,
					-.69,
					-.09,
					-.87,
					-.06
				],
				[
					"c",
					-.54,
					.12,
					-.87,
					.42,
					-1.17,
					.99
				],
				[
					"c",
					-.36,
					.66,
					-.51,
					1.56,
					-.6,
					3
				],
				[
					"c",
					-.03,
					.75,
					-.03,
					4.59,
					0,
					5.31
				],
				[
					"c",
					.09,
					1.5,
					.27,
					2.4,
					.6,
					3.06
				],
				[
					"c",
					.24,
					.48,
					.57,
					.78,
					.96,
					.9
				],
				[
					"c",
					.27,
					.09,
					.78,
					.09,
					1.05,
					0
				],
				[
					"c",
					.39,
					-.12,
					.72,
					-.42,
					.96,
					-.9
				],
				[
					"c",
					.33,
					-.66,
					.51,
					-1.56,
					.6,
					-3.06
				],
				[
					"c",
					.03,
					-.72,
					.03,
					-4.56,
					0,
					-5.31
				],
				[
					"c",
					-.09,
					-1.47,
					-.27,
					-2.37,
					-.6,
					-3.03
				],
				[
					"c",
					-.24,
					-.48,
					-.54,
					-.78,
					-.93,
					-.9
				],
				["z"]
			],
			w: 10.78,
			h: 14.959
		},
		1: {
			d: [
				[
					"M",
					3.3,
					-15.06
				],
				[
					"c",
					.06,
					-.06,
					.21,
					-.03,
					.66,
					.15
				],
				[
					"c",
					.81,
					.39,
					1.08,
					.39,
					1.83,
					.03
				],
				[
					"c",
					.21,
					-.09,
					.39,
					-.15,
					.42,
					-.15
				],
				[
					"c",
					.12,
					0,
					.21,
					.09,
					.27,
					.21
				],
				[
					"c",
					.06,
					.12,
					.06,
					.33,
					.06,
					5.94
				],
				[
					"c",
					0,
					3.93,
					0,
					5.85,
					.03,
					6.03
				],
				[
					"c",
					.06,
					.36,
					.15,
					.69,
					.27,
					.96
				],
				[
					"c",
					.36,
					.75,
					.93,
					1.17,
					1.68,
					1.26
				],
				[
					"c",
					.3,
					.03,
					.39,
					.09,
					.39,
					.3
				],
				[
					"c",
					0,
					.15,
					-.03,
					.18,
					-.09,
					.24
				],
				[
					"c",
					-.06,
					.06,
					-.09,
					.06,
					-.48,
					.06
				],
				[
					"c",
					-.42,
					0,
					-.69,
					-.03,
					-2.1,
					-.24
				],
				[
					"c",
					-.9,
					-.15,
					-1.77,
					-.15,
					-2.67,
					0
				],
				[
					"c",
					-1.41,
					.21,
					-1.68,
					.24,
					-2.1,
					.24
				],
				[
					"c",
					-.39,
					0,
					-.42,
					0,
					-.48,
					-.06
				],
				[
					"c",
					-.06,
					-.06,
					-.06,
					-.09,
					-.06,
					-.24
				],
				[
					"c",
					0,
					-.21,
					.06,
					-.27,
					.36,
					-.3
				],
				[
					"c",
					.75,
					-.09,
					1.32,
					-.51,
					1.68,
					-1.26
				],
				[
					"c",
					.12,
					-.27,
					.21,
					-.6,
					.27,
					-.96
				],
				[
					"c",
					.03,
					-.18,
					.03,
					-1.59,
					.03,
					-4.29
				],
				[
					"c",
					0,
					-3.87,
					0,
					-4.05,
					-.06,
					-4.14
				],
				[
					"c",
					-.09,
					-.15,
					-.18,
					-.24,
					-.39,
					-.24
				],
				[
					"c",
					-.12,
					0,
					-.15,
					.03,
					-.21,
					.06
				],
				[
					"c",
					-.03,
					.06,
					-.45,
					.99,
					-.96,
					2.13
				],
				[
					"c",
					-.48,
					1.14,
					-.9,
					2.1,
					-.93,
					2.16
				],
				[
					"c",
					-.06,
					.15,
					-.21,
					.24,
					-.33,
					.24
				],
				[
					"c",
					-.24,
					0,
					-.42,
					-.18,
					-.42,
					-.39
				],
				[
					"c",
					0,
					-.06,
					3.27,
					-7.62,
					3.33,
					-7.74
				],
				["z"]
			],
			w: 8.94,
			h: 15.058
		},
		2: {
			d: [
				[
					"M",
					4.23,
					-14.97
				],
				[
					"c",
					.57,
					-.06,
					1.68,
					0,
					2.34,
					.18
				],
				[
					"c",
					.69,
					.18,
					1.5,
					.54,
					2.01,
					.9
				],
				[
					"c",
					1.35,
					.96,
					1.95,
					2.25,
					1.77,
					3.81
				],
				[
					"c",
					-.15,
					1.35,
					-.66,
					2.34,
					-1.68,
					3.15
				],
				[
					"c",
					-.6,
					.48,
					-1.44,
					.93,
					-3.12,
					1.65
				],
				[
					"c",
					-1.32,
					.57,
					-1.8,
					.81,
					-2.37,
					1.14
				],
				[
					"c",
					-.57,
					.33,
					-.57,
					.33,
					-.24,
					.27
				],
				[
					"c",
					.39,
					-.09,
					1.26,
					-.09,
					1.68,
					0
				],
				[
					"c",
					.72,
					.15,
					1.41,
					.45,
					2.1,
					.9
				],
				[
					"c",
					.99,
					.63,
					1.86,
					.87,
					2.55,
					.75
				],
				[
					"c",
					.24,
					-.06,
					.42,
					-.15,
					.57,
					-.3
				],
				[
					"c",
					.12,
					-.09,
					.3,
					-.42,
					.3,
					-.51
				],
				[
					"c",
					0,
					-.09,
					.12,
					-.21,
					.24,
					-.24
				],
				[
					"c",
					.18,
					-.03,
					.39,
					.12,
					.39,
					.3
				],
				[
					"c",
					0,
					.12,
					-.15,
					.57,
					-.3,
					.87
				],
				[
					"c",
					-.54,
					1.02,
					-1.56,
					1.74,
					-2.79,
					2.01
				],
				[
					"c",
					-.42,
					.09,
					-1.23,
					.09,
					-1.62,
					.03
				],
				[
					"c",
					-.81,
					-.18,
					-1.32,
					-.45,
					-2.01,
					-1.11
				],
				[
					"c",
					-.45,
					-.45,
					-.63,
					-.57,
					-.96,
					-.69
				],
				[
					"c",
					-.84,
					-.27,
					-1.89,
					.12,
					-2.25,
					.9
				],
				[
					"c",
					-.12,
					.21,
					-.21,
					.54,
					-.21,
					.72
				],
				[
					"c",
					0,
					.12,
					-.12,
					.21,
					-.27,
					.24
				],
				[
					"c",
					-.15,
					0,
					-.27,
					-.03,
					-.33,
					-.15
				],
				[
					"c",
					-.09,
					-.21,
					.09,
					-1.08,
					.33,
					-1.71
				],
				[
					"c",
					.24,
					-.66,
					.66,
					-1.26,
					1.29,
					-1.89
				],
				[
					"c",
					.45,
					-.45,
					.9,
					-.81,
					1.92,
					-1.56
				],
				[
					"c",
					1.29,
					-.93,
					1.89,
					-1.44,
					2.34,
					-1.98
				],
				[
					"c",
					.87,
					-1.05,
					1.26,
					-2.19,
					1.2,
					-3.63
				],
				[
					"c",
					-.06,
					-1.29,
					-.39,
					-2.31,
					-.96,
					-2.91
				],
				[
					"c",
					-.36,
					-.33,
					-.72,
					-.51,
					-1.17,
					-.54
				],
				[
					"c",
					-.84,
					-.03,
					-1.53,
					.42,
					-1.59,
					1.05
				],
				[
					"c",
					-.03,
					.33,
					.12,
					.6,
					.57,
					1.14
				],
				[
					"c",
					.45,
					.54,
					.54,
					.87,
					.42,
					1.41
				],
				[
					"c",
					-.15,
					.63,
					-.54,
					1.11,
					-1.08,
					1.38
				],
				[
					"c",
					-.63,
					.33,
					-1.2,
					.33,
					-1.83,
					0
				],
				[
					"c",
					-.24,
					-.12,
					-.33,
					-.18,
					-.54,
					-.39
				],
				[
					"c",
					-.18,
					-.18,
					-.27,
					-.3,
					-.36,
					-.51
				],
				[
					"c",
					-.24,
					-.45,
					-.27,
					-.84,
					-.21,
					-1.38
				],
				[
					"c",
					.12,
					-.75,
					.45,
					-1.41,
					1.02,
					-1.98
				],
				[
					"c",
					.72,
					-.72,
					1.74,
					-1.17,
					2.85,
					-1.32
				],
				["z"]
			],
			w: 10.764,
			h: 14.97
		},
		3: {
			d: [
				[
					"M",
					3.78,
					-14.97
				],
				[
					"c",
					.3,
					-.03,
					1.41,
					0,
					1.83,
					.06
				],
				[
					"c",
					2.22,
					.3,
					3.51,
					1.32,
					3.72,
					2.91
				],
				[
					"c",
					.03,
					.33,
					.03,
					1.26,
					-.03,
					1.65
				],
				[
					"c",
					-.12,
					.84,
					-.48,
					1.47,
					-1.05,
					1.77
				],
				[
					"c",
					-.27,
					.15,
					-.36,
					.24,
					-.45,
					.39
				],
				[
					"c",
					-.09,
					.21,
					-.09,
					.36,
					0,
					.57
				],
				[
					"c",
					.09,
					.15,
					.18,
					.24,
					.51,
					.39
				],
				[
					"c",
					.75,
					.42,
					1.23,
					1.14,
					1.41,
					2.13
				],
				[
					"c",
					.06,
					.42,
					.06,
					1.35,
					0,
					1.71
				],
				[
					"c",
					-.18,
					.81,
					-.48,
					1.38,
					-1.02,
					1.95
				],
				[
					"c",
					-.75,
					.72,
					-1.8,
					1.2,
					-3.18,
					1.38
				],
				[
					"c",
					-.42,
					.06,
					-1.56,
					.06,
					-1.95,
					0
				],
				[
					"c",
					-1.89,
					-.33,
					-3.18,
					-1.29,
					-3.51,
					-2.64
				],
				[
					"c",
					-.03,
					-.12,
					-.03,
					-.33,
					-.03,
					-.6
				],
				[
					"c",
					0,
					-.36,
					0,
					-.42,
					.06,
					-.63
				],
				[
					"c",
					.12,
					-.3,
					.27,
					-.51,
					.51,
					-.75
				],
				[
					"c",
					.24,
					-.24,
					.45,
					-.39,
					.75,
					-.51
				],
				[
					"c",
					.21,
					-.06,
					.27,
					-.06,
					.6,
					-.06
				],
				[
					"c",
					.33,
					0,
					.39,
					0,
					.6,
					.06
				],
				[
					"c",
					.3,
					.12,
					.51,
					.27,
					.75,
					.51
				],
				[
					"c",
					.36,
					.33,
					.57,
					.75,
					.6,
					1.2
				],
				[
					"c",
					0,
					.21,
					0,
					.27,
					-.06,
					.42
				],
				[
					"c",
					-.09,
					.18,
					-.12,
					.24,
					-.54,
					.54
				],
				[
					"c",
					-.51,
					.36,
					-.63,
					.54,
					-.6,
					.87
				],
				[
					"c",
					.06,
					.54,
					.54,
					.9,
					1.38,
					.99
				],
				[
					"c",
					.36,
					.06,
					.72,
					.03,
					.96,
					-.06
				],
				[
					"c",
					.81,
					-.27,
					1.29,
					-1.23,
					1.44,
					-2.79
				],
				[
					"c",
					.03,
					-.45,
					.03,
					-1.95,
					-.03,
					-2.37
				],
				[
					"c",
					-.09,
					-.75,
					-.33,
					-1.23,
					-.75,
					-1.44
				],
				[
					"c",
					-.33,
					-.18,
					-.45,
					-.18,
					-1.98,
					-.18
				],
				[
					"c",
					-1.35,
					0,
					-1.41,
					0,
					-1.5,
					-.06
				],
				[
					"c",
					-.18,
					-.12,
					-.24,
					-.39,
					-.12,
					-.6
				],
				[
					"c",
					.12,
					-.15,
					.15,
					-.15,
					1.68,
					-.15
				],
				[
					"c",
					1.5,
					0,
					1.62,
					0,
					1.89,
					-.15
				],
				[
					"c",
					.18,
					-.09,
					.42,
					-.36,
					.54,
					-.57
				],
				[
					"c",
					.18,
					-.42,
					.27,
					-.9,
					.3,
					-1.95
				],
				[
					"c",
					.03,
					-1.2,
					-.06,
					-1.8,
					-.36,
					-2.37
				],
				[
					"c",
					-.24,
					-.48,
					-.63,
					-.81,
					-1.14,
					-.96
				],
				[
					"c",
					-.3,
					-.06,
					-1.08,
					-.06,
					-1.38,
					.03
				],
				[
					"c",
					-.6,
					.15,
					-.9,
					.42,
					-.96,
					.84
				],
				[
					"c",
					-.03,
					.3,
					.06,
					.45,
					.63,
					.84
				],
				[
					"c",
					.33,
					.24,
					.42,
					.39,
					.45,
					.63
				],
				[
					"c",
					.03,
					.72,
					-.57,
					1.5,
					-1.32,
					1.65
				],
				[
					"c",
					-1.05,
					.27,
					-2.1,
					-.57,
					-2.1,
					-1.65
				],
				[
					"c",
					0,
					-.45,
					.15,
					-.96,
					.39,
					-1.38
				],
				[
					"c",
					.12,
					-.21,
					.54,
					-.63,
					.81,
					-.81
				],
				[
					"c",
					.57,
					-.42,
					1.38,
					-.69,
					2.25,
					-.81
				],
				["z"]
			],
			w: 9.735,
			h: 14.967
		},
		4: {
			d: [
				[
					"M",
					8.64,
					-14.94
				],
				[
					"c",
					.27,
					-.09,
					.42,
					-.12,
					.54,
					-.03
				],
				[
					"c",
					.09,
					.06,
					.15,
					.21,
					.15,
					.3
				],
				[
					"c",
					-.03,
					.06,
					-1.92,
					2.31,
					-4.23,
					5.04
				],
				[
					"c",
					-2.31,
					2.73,
					-4.23,
					4.98,
					-4.26,
					5.01
				],
				[
					"c",
					-.03,
					.06,
					.12,
					.06,
					2.55,
					.06
				],
				[
					"l",
					2.61,
					0
				],
				[
					"l",
					0,
					-2.37
				],
				[
					"c",
					0,
					-2.19,
					.03,
					-2.37,
					.06,
					-2.46
				],
				[
					"c",
					.03,
					-.06,
					.21,
					-.18,
					.57,
					-.42
				],
				[
					"c",
					1.08,
					-.72,
					1.38,
					-1.08,
					1.86,
					-2.16
				],
				[
					"c",
					.12,
					-.3,
					.24,
					-.54,
					.27,
					-.57
				],
				[
					"c",
					.12,
					-.12,
					.39,
					-.06,
					.45,
					.12
				],
				[
					"c",
					.06,
					.09,
					.06,
					.57,
					.06,
					3.96
				],
				[
					"l",
					0,
					3.9
				],
				[
					"l",
					1.08,
					0
				],
				[
					"c",
					1.05,
					0,
					1.11,
					0,
					1.2,
					.06
				],
				[
					"c",
					.24,
					.15,
					.24,
					.54,
					0,
					.69
				],
				[
					"c",
					-.09,
					.06,
					-.15,
					.06,
					-1.2,
					.06
				],
				[
					"l",
					-1.08,
					0
				],
				[
					"l",
					0,
					.33
				],
				[
					"c",
					0,
					.57,
					.09,
					1.11,
					.3,
					1.53
				],
				[
					"c",
					.36,
					.75,
					.93,
					1.17,
					1.68,
					1.26
				],
				[
					"c",
					.3,
					.03,
					.39,
					.09,
					.39,
					.3
				],
				[
					"c",
					0,
					.15,
					-.03,
					.18,
					-.09,
					.24
				],
				[
					"c",
					-.06,
					.06,
					-.09,
					.06,
					-.48,
					.06
				],
				[
					"c",
					-.42,
					0,
					-.69,
					-.03,
					-2.1,
					-.24
				],
				[
					"c",
					-.9,
					-.15,
					-1.77,
					-.15,
					-2.67,
					0
				],
				[
					"c",
					-1.41,
					.21,
					-1.68,
					.24,
					-2.1,
					.24
				],
				[
					"c",
					-.39,
					0,
					-.42,
					0,
					-.48,
					-.06
				],
				[
					"c",
					-.06,
					-.06,
					-.06,
					-.09,
					-.06,
					-.24
				],
				[
					"c",
					0,
					-.21,
					.06,
					-.27,
					.36,
					-.3
				],
				[
					"c",
					.75,
					-.09,
					1.32,
					-.51,
					1.68,
					-1.26
				],
				[
					"c",
					.21,
					-.42,
					.3,
					-.96,
					.3,
					-1.53
				],
				[
					"l",
					0,
					-.33
				],
				[
					"l",
					-2.7,
					0
				],
				[
					"c",
					-2.91,
					0,
					-2.85,
					0,
					-3.09,
					-.15
				],
				[
					"c",
					-.18,
					-.12,
					-.3,
					-.39,
					-.27,
					-.54
				],
				[
					"c",
					.03,
					-.06,
					.18,
					-.24,
					.33,
					-.45
				],
				[
					"c",
					.75,
					-.9,
					1.59,
					-2.07,
					2.13,
					-3.03
				],
				[
					"c",
					.33,
					-.54,
					.84,
					-1.62,
					1.05,
					-2.16
				],
				[
					"c",
					.57,
					-1.41,
					.84,
					-2.64,
					.9,
					-4.05
				],
				[
					"c",
					.03,
					-.63,
					.06,
					-.72,
					.24,
					-.81
				],
				[
					"l",
					.12,
					-.06
				],
				[
					"l",
					.45,
					.12
				],
				[
					"c",
					.66,
					.18,
					1.02,
					.24,
					1.47,
					.27
				],
				[
					"c",
					.6,
					.03,
					1.23,
					-.09,
					2.01,
					-.33
				],
				["z"]
			],
			w: 11.795,
			h: 14.994
		},
		5: {
			d: [
				[
					"M",
					1.02,
					-14.94
				],
				[
					"c",
					.12,
					-.09,
					.03,
					-.09,
					1.08,
					.06
				],
				[
					"c",
					2.49,
					.36,
					4.35,
					.36,
					6.96,
					-.06
				],
				[
					"c",
					.57,
					-.09,
					.66,
					-.06,
					.81,
					.06
				],
				[
					"c",
					.15,
					.18,
					.12,
					.24,
					-.15,
					.51
				],
				[
					"c",
					-1.29,
					1.26,
					-3.24,
					2.04,
					-5.58,
					2.31
				],
				[
					"c",
					-.6,
					.09,
					-1.2,
					.12,
					-1.71,
					.12
				],
				[
					"c",
					-.39,
					0,
					-.45,
					0,
					-.57,
					.06
				],
				[
					"c",
					-.09,
					.06,
					-.15,
					.12,
					-.21,
					.21
				],
				[
					"l",
					-.06,
					.12
				],
				[
					"l",
					0,
					1.65
				],
				[
					"l",
					0,
					1.65
				],
				[
					"l",
					.21,
					-.21
				],
				[
					"c",
					.66,
					-.57,
					1.41,
					-.96,
					2.19,
					-1.14
				],
				[
					"c",
					.33,
					-.06,
					1.41,
					-.06,
					1.95,
					0
				],
				[
					"c",
					2.61,
					.36,
					4.02,
					1.74,
					4.26,
					4.14
				],
				[
					"c",
					.03,
					.45,
					.03,
					1.08,
					-.03,
					1.44
				],
				[
					"c",
					-.18,
					1.02,
					-.78,
					2.01,
					-1.59,
					2.7
				],
				[
					"c",
					-.72,
					.57,
					-1.62,
					1.02,
					-2.49,
					1.2
				],
				[
					"c",
					-1.38,
					.27,
					-3.03,
					.06,
					-4.2,
					-.54
				],
				[
					"c",
					-1.08,
					-.54,
					-1.71,
					-1.32,
					-1.86,
					-2.28
				],
				[
					"c",
					-.09,
					-.69,
					.09,
					-1.29,
					.57,
					-1.74
				],
				[
					"c",
					.24,
					-.24,
					.45,
					-.39,
					.75,
					-.51
				],
				[
					"c",
					.21,
					-.06,
					.27,
					-.06,
					.6,
					-.06
				],
				[
					"c",
					.33,
					0,
					.39,
					0,
					.6,
					.06
				],
				[
					"c",
					.3,
					.12,
					.51,
					.27,
					.75,
					.51
				],
				[
					"c",
					.36,
					.33,
					.57,
					.75,
					.6,
					1.2
				],
				[
					"c",
					0,
					.21,
					0,
					.27,
					-.06,
					.42
				],
				[
					"c",
					-.09,
					.18,
					-.12,
					.24,
					-.54,
					.54
				],
				[
					"c",
					-.18,
					.12,
					-.36,
					.3,
					-.42,
					.33
				],
				[
					"c",
					-.36,
					.42,
					-.18,
					.99,
					.36,
					1.26
				],
				[
					"c",
					.51,
					.27,
					1.47,
					.36,
					2.01,
					.27
				],
				[
					"c",
					.93,
					-.21,
					1.47,
					-1.17,
					1.65,
					-2.91
				],
				[
					"c",
					.06,
					-.45,
					.06,
					-1.89,
					0,
					-2.31
				],
				[
					"c",
					-.15,
					-1.2,
					-.51,
					-2.1,
					-1.05,
					-2.55
				],
				[
					"c",
					-.21,
					-.18,
					-.54,
					-.36,
					-.81,
					-.39
				],
				[
					"c",
					-.3,
					-.06,
					-.84,
					-.03,
					-1.26,
					.06
				],
				[
					"c",
					-.93,
					.18,
					-1.65,
					.6,
					-2.16,
					1.2
				],
				[
					"c",
					-.15,
					.21,
					-.27,
					.3,
					-.39,
					.3
				],
				[
					"c",
					-.15,
					0,
					-.3,
					-.09,
					-.36,
					-.18
				],
				[
					"c",
					-.06,
					-.09,
					-.06,
					-.15,
					-.06,
					-3.66
				],
				[
					"c",
					0,
					-3.39,
					0,
					-3.57,
					.06,
					-3.66
				],
				[
					"c",
					.03,
					-.06,
					.09,
					-.15,
					.15,
					-.18
				],
				["z"]
			],
			w: 10.212,
			h: 14.997
		},
		6: {
			d: [
				[
					"M",
					4.98,
					-14.97
				],
				[
					"c",
					.36,
					-.03,
					1.2,
					0,
					1.59,
					.06
				],
				[
					"c",
					.9,
					.15,
					1.68,
					.51,
					2.25,
					1.05
				],
				[
					"c",
					.57,
					.51,
					.87,
					1.23,
					.84,
					1.98
				],
				[
					"c",
					-.03,
					.51,
					-.21,
					.9,
					-.6,
					1.26
				],
				[
					"c",
					-.24,
					.24,
					-.45,
					.39,
					-.75,
					.51
				],
				[
					"c",
					-.21,
					.06,
					-.27,
					.06,
					-.6,
					.06
				],
				[
					"c",
					-.33,
					0,
					-.39,
					0,
					-.6,
					-.06
				],
				[
					"c",
					-.3,
					-.12,
					-.51,
					-.27,
					-.75,
					-.51
				],
				[
					"c",
					-.39,
					-.36,
					-.57,
					-.78,
					-.57,
					-1.26
				],
				[
					"c",
					0,
					-.27,
					0,
					-.3,
					.09,
					-.42
				],
				[
					"c",
					.03,
					-.09,
					.18,
					-.21,
					.3,
					-.3
				],
				[
					"c",
					.12,
					-.09,
					.3,
					-.21,
					.39,
					-.27
				],
				[
					"c",
					.09,
					-.06,
					.21,
					-.18,
					.27,
					-.24
				],
				[
					"c",
					.06,
					-.12,
					.09,
					-.15,
					.09,
					-.33
				],
				[
					"c",
					0,
					-.18,
					-.03,
					-.24,
					-.09,
					-.36
				],
				[
					"c",
					-.24,
					-.39,
					-.75,
					-.6,
					-1.38,
					-.57
				],
				[
					"c",
					-.54,
					.03,
					-.9,
					.18,
					-1.23,
					.48
				],
				[
					"c",
					-.81,
					.72,
					-1.08,
					2.16,
					-.96,
					5.37
				],
				[
					"l",
					0,
					.63
				],
				[
					"l",
					.3,
					-.12
				],
				[
					"c",
					.78,
					-.27,
					1.29,
					-.33,
					2.1,
					-.27
				],
				[
					"c",
					1.47,
					.12,
					2.49,
					.54,
					3.27,
					1.29
				],
				[
					"c",
					.48,
					.51,
					.81,
					1.11,
					.96,
					1.89
				],
				[
					"c",
					.06,
					.27,
					.06,
					.42,
					.06,
					.93
				],
				[
					"c",
					0,
					.54,
					0,
					.69,
					-.06,
					.96
				],
				[
					"c",
					-.15,
					.78,
					-.48,
					1.38,
					-.96,
					1.89
				],
				[
					"c",
					-.54,
					.51,
					-1.17,
					.87,
					-1.98,
					1.08
				],
				[
					"c",
					-1.14,
					.3,
					-2.4,
					.33,
					-3.24,
					.03
				],
				[
					"c",
					-1.5,
					-.48,
					-2.64,
					-1.89,
					-3.27,
					-4.02
				],
				[
					"c",
					-.36,
					-1.23,
					-.51,
					-2.82,
					-.42,
					-4.08
				],
				[
					"c",
					.3,
					-3.66,
					2.28,
					-6.3,
					4.95,
					-6.66
				],
				["z"],
				[
					"m",
					.66,
					7.41
				],
				[
					"c",
					-.27,
					-.09,
					-.81,
					-.12,
					-1.08,
					-.06
				],
				[
					"c",
					-.72,
					.18,
					-1.08,
					.69,
					-1.23,
					1.71
				],
				[
					"c",
					-.06,
					.54,
					-.06,
					3,
					0,
					3.54
				],
				[
					"c",
					.18,
					1.26,
					.72,
					1.77,
					1.8,
					1.74
				],
				[
					"c",
					.39,
					-.03,
					.63,
					-.09,
					.9,
					-.27
				],
				[
					"c",
					.66,
					-.42,
					.9,
					-1.32,
					.9,
					-3.24
				],
				[
					"c",
					0,
					-2.22,
					-.36,
					-3.12,
					-1.29,
					-3.42
				],
				["z"]
			],
			w: 9.956,
			h: 14.982
		},
		7: {
			d: [
				[
					"M",
					.21,
					-14.97
				],
				[
					"c",
					.21,
					-.06,
					.45,
					0,
					.54,
					.15
				],
				[
					"c",
					.06,
					.09,
					.06,
					.15,
					.06,
					.39
				],
				[
					"c",
					0,
					.24,
					0,
					.33,
					.06,
					.42
				],
				[
					"c",
					.06,
					.12,
					.21,
					.24,
					.27,
					.24
				],
				[
					"c",
					.03,
					0,
					.12,
					-.12,
					.24,
					-.21
				],
				[
					"c",
					.96,
					-1.2,
					2.58,
					-1.35,
					3.99,
					-.42
				],
				[
					"c",
					.15,
					.12,
					.42,
					.3,
					.54,
					.45
				],
				[
					"c",
					.48,
					.39,
					.81,
					.57,
					1.29,
					.6
				],
				[
					"c",
					.69,
					.03,
					1.5,
					-.3,
					2.13,
					-.87
				],
				[
					"c",
					.09,
					-.09,
					.27,
					-.3,
					.39,
					-.45
				],
				[
					"c",
					.12,
					-.15,
					.24,
					-.27,
					.3,
					-.3
				],
				[
					"c",
					.18,
					-.06,
					.39,
					.03,
					.51,
					.21
				],
				[
					"c",
					.06,
					.18,
					.06,
					.24,
					-.27,
					.72
				],
				[
					"c",
					-.18,
					.24,
					-.54,
					.78,
					-.78,
					1.17
				],
				[
					"c",
					-2.37,
					3.54,
					-3.54,
					6.27,
					-3.87,
					9
				],
				[
					"c",
					-.03,
					.33,
					-.03,
					.66,
					-.03,
					1.26
				],
				[
					"c",
					0,
					.9,
					0,
					1.08,
					.15,
					1.89
				],
				[
					"c",
					.06,
					.45,
					.06,
					.48,
					.03,
					.6
				],
				[
					"c",
					-.06,
					.09,
					-.21,
					.21,
					-.3,
					.21
				],
				[
					"c",
					-.03,
					0,
					-.27,
					-.06,
					-.54,
					-.15
				],
				[
					"c",
					-.84,
					-.27,
					-1.11,
					-.3,
					-1.65,
					-.3
				],
				[
					"c",
					-.57,
					0,
					-.84,
					.03,
					-1.56,
					.27
				],
				[
					"c",
					-.6,
					.18,
					-.69,
					.21,
					-.81,
					.15
				],
				[
					"c",
					-.12,
					-.06,
					-.21,
					-.18,
					-.21,
					-.3
				],
				[
					"c",
					0,
					-.15,
					.6,
					-1.44,
					1.2,
					-2.61
				],
				[
					"c",
					1.14,
					-2.22,
					2.73,
					-4.68,
					5.1,
					-8.01
				],
				[
					"c",
					.21,
					-.27,
					.36,
					-.48,
					.33,
					-.48
				],
				[
					"c",
					0,
					0,
					-.12,
					.06,
					-.27,
					.12
				],
				[
					"c",
					-.54,
					.3,
					-.99,
					.39,
					-1.56,
					.39
				],
				[
					"c",
					-.75,
					.03,
					-1.2,
					-.18,
					-1.83,
					-.75
				],
				[
					"c",
					-.99,
					-.9,
					-1.83,
					-1.17,
					-2.31,
					-.72
				],
				[
					"c",
					-.18,
					.15,
					-.36,
					.51,
					-.45,
					.84
				],
				[
					"c",
					-.06,
					.24,
					-.06,
					.33,
					-.09,
					1.98
				],
				[
					"c",
					0,
					1.62,
					-.03,
					1.74,
					-.06,
					1.8
				],
				[
					"c",
					-.15,
					.24,
					-.54,
					.24,
					-.69,
					0
				],
				[
					"c",
					-.06,
					-.09,
					-.06,
					-.15,
					-.06,
					-3.57
				],
				[
					"c",
					0,
					-3.42,
					0,
					-3.48,
					.06,
					-3.57
				],
				[
					"c",
					.03,
					-.06,
					.09,
					-.12,
					.15,
					-.15
				],
				["z"]
			],
			w: 10.561,
			h: 15.093
		},
		8: {
			d: [
				[
					"M",
					4.98,
					-14.97
				],
				[
					"c",
					.33,
					-.03,
					1.02,
					-.03,
					1.32,
					0
				],
				[
					"c",
					1.32,
					.12,
					2.49,
					.6,
					3.21,
					1.32
				],
				[
					"c",
					.39,
					.39,
					.66,
					.81,
					.78,
					1.29
				],
				[
					"c",
					.09,
					.36,
					.09,
					1.08,
					0,
					1.44
				],
				[
					"c",
					-.21,
					.84,
					-.66,
					1.59,
					-1.59,
					2.55
				],
				[
					"l",
					-.3,
					.3
				],
				[
					"l",
					.27,
					.18
				],
				[
					"c",
					1.47,
					.93,
					2.31,
					2.31,
					2.25,
					3.75
				],
				[
					"c",
					-.03,
					.75,
					-.24,
					1.35,
					-.63,
					1.95
				],
				[
					"c",
					-.45,
					.66,
					-1.02,
					1.14,
					-1.83,
					1.53
				],
				[
					"c",
					-1.8,
					.87,
					-4.2,
					.87,
					-6,
					.03
				],
				[
					"c",
					-1.62,
					-.78,
					-2.52,
					-2.16,
					-2.46,
					-3.66
				],
				[
					"c",
					.06,
					-.99,
					.54,
					-1.77,
					1.8,
					-2.97
				],
				[
					"c",
					.54,
					-.51,
					.54,
					-.54,
					.48,
					-.57
				],
				[
					"c",
					-.39,
					-.27,
					-.96,
					-.78,
					-1.2,
					-1.14
				],
				[
					"c",
					-.75,
					-1.11,
					-.87,
					-2.4,
					-.3,
					-3.6
				],
				[
					"c",
					.69,
					-1.35,
					2.25,
					-2.25,
					4.2,
					-2.4
				],
				["z"],
				[
					"m",
					1.53,
					.69
				],
				[
					"c",
					-.42,
					-.09,
					-1.11,
					-.12,
					-1.38,
					-.06
				],
				[
					"c",
					-.3,
					.06,
					-.6,
					.18,
					-.81,
					.3
				],
				[
					"c",
					-.21,
					.12,
					-.6,
					.51,
					-.72,
					.72
				],
				[
					"c",
					-.51,
					.87,
					-.42,
					1.89,
					.21,
					2.52
				],
				[
					"c",
					.21,
					.21,
					.36,
					.3,
					1.95,
					1.23
				],
				[
					"c",
					.96,
					.54,
					1.74,
					.99,
					1.77,
					1.02
				],
				[
					"c",
					.09,
					0,
					.63,
					-.6,
					.99,
					-1.11
				],
				[
					"c",
					.21,
					-.36,
					.48,
					-.87,
					.57,
					-1.23
				],
				[
					"c",
					.06,
					-.24,
					.06,
					-.36,
					.06,
					-.72
				],
				[
					"c",
					0,
					-.45,
					-.03,
					-.66,
					-.15,
					-.99
				],
				[
					"c",
					-.39,
					-.81,
					-1.29,
					-1.44,
					-2.49,
					-1.68
				],
				["z"],
				[
					"m",
					-1.44,
					8.07
				],
				[
					"l",
					-1.89,
					-1.08
				],
				[
					"c",
					-.03,
					0,
					-.18,
					.15,
					-.39,
					.33
				],
				[
					"c",
					-1.2,
					1.08,
					-1.65,
					1.95,
					-1.59,
					3
				],
				[
					"c",
					.09,
					1.59,
					1.35,
					2.85,
					3.21,
					3.24
				],
				[
					"c",
					.33,
					.06,
					.45,
					.06,
					.93,
					.06
				],
				[
					"c",
					.63,
					0,
					.81,
					-.03,
					1.29,
					-.27
				],
				[
					"c",
					.9,
					-.42,
					1.47,
					-1.41,
					1.41,
					-2.4
				],
				[
					"c",
					-.06,
					-.66,
					-.39,
					-1.29,
					-.9,
					-1.65
				],
				[
					"c",
					-.12,
					-.09,
					-1.05,
					-.63,
					-2.07,
					-1.23
				],
				["z"]
			],
			w: 10.926,
			h: 14.989
		},
		9: {
			d: [
				[
					"M",
					4.23,
					-14.97
				],
				[
					"c",
					.42,
					-.03,
					1.29,
					0,
					1.62,
					.06
				],
				[
					"c",
					.51,
					.12,
					.93,
					.3,
					1.38,
					.57
				],
				[
					"c",
					1.53,
					1.02,
					2.52,
					3.24,
					2.73,
					5.94
				],
				[
					"c",
					.18,
					2.55,
					-.48,
					4.98,
					-1.83,
					6.57
				],
				[
					"c",
					-1.05,
					1.26,
					-2.4,
					1.89,
					-3.93,
					1.83
				],
				[
					"c",
					-1.23,
					-.06,
					-2.31,
					-.45,
					-3.03,
					-1.14
				],
				[
					"c",
					-.57,
					-.51,
					-.87,
					-1.23,
					-.84,
					-1.98
				],
				[
					"c",
					.03,
					-.51,
					.21,
					-.9,
					.6,
					-1.26
				],
				[
					"c",
					.24,
					-.24,
					.45,
					-.39,
					.75,
					-.51
				],
				[
					"c",
					.21,
					-.06,
					.27,
					-.06,
					.6,
					-.06
				],
				[
					"c",
					.33,
					0,
					.39,
					0,
					.6,
					.06
				],
				[
					"c",
					.3,
					.12,
					.51,
					.27,
					.75,
					.51
				],
				[
					"c",
					.39,
					.36,
					.57,
					.78,
					.57,
					1.26
				],
				[
					"c",
					0,
					.27,
					0,
					.3,
					-.09,
					.42
				],
				[
					"c",
					-.03,
					.09,
					-.18,
					.21,
					-.3,
					.3
				],
				[
					"c",
					-.12,
					.09,
					-.3,
					.21,
					-.39,
					.27
				],
				[
					"c",
					-.09,
					.06,
					-.21,
					.18,
					-.27,
					.24
				],
				[
					"c",
					-.06,
					.12,
					-.06,
					.15,
					-.06,
					.33
				],
				[
					"c",
					0,
					.18,
					0,
					.24,
					.06,
					.36
				],
				[
					"c",
					.24,
					.39,
					.75,
					.6,
					1.38,
					.57
				],
				[
					"c",
					.54,
					-.03,
					.9,
					-.18,
					1.23,
					-.48
				],
				[
					"c",
					.81,
					-.72,
					1.08,
					-2.16,
					.96,
					-5.37
				],
				[
					"l",
					0,
					-.63
				],
				[
					"l",
					-.3,
					.12
				],
				[
					"c",
					-.78,
					.27,
					-1.29,
					.33,
					-2.1,
					.27
				],
				[
					"c",
					-1.47,
					-.12,
					-2.49,
					-.54,
					-3.27,
					-1.29
				],
				[
					"c",
					-.48,
					-.51,
					-.81,
					-1.11,
					-.96,
					-1.89
				],
				[
					"c",
					-.06,
					-.27,
					-.06,
					-.42,
					-.06,
					-.96
				],
				[
					"c",
					0,
					-.51,
					0,
					-.66,
					.06,
					-.93
				],
				[
					"c",
					.15,
					-.78,
					.48,
					-1.38,
					.96,
					-1.89
				],
				[
					"c",
					.15,
					-.12,
					.33,
					-.27,
					.42,
					-.36
				],
				[
					"c",
					.69,
					-.51,
					1.62,
					-.81,
					2.76,
					-.93
				],
				["z"],
				[
					"m",
					1.17,
					.66
				],
				[
					"c",
					-.21,
					-.06,
					-.57,
					-.06,
					-.81,
					-.03
				],
				[
					"c",
					-.78,
					.12,
					-1.26,
					.69,
					-1.41,
					1.74
				],
				[
					"c",
					-.12,
					.63,
					-.15,
					1.95,
					-.09,
					2.79
				],
				[
					"c",
					.12,
					1.71,
					.63,
					2.4,
					1.77,
					2.46
				],
				[
					"c",
					1.08,
					.03,
					1.62,
					-.48,
					1.8,
					-1.74
				],
				[
					"c",
					.06,
					-.54,
					.06,
					-3,
					0,
					-3.54
				],
				[
					"c",
					-.15,
					-1.05,
					-.51,
					-1.53,
					-1.26,
					-1.68
				],
				["z"]
			],
			w: 9.959,
			h: 14.986
		},
		"rests.multimeasure": {
			d: [
				[
					"M",
					0,
					-4
				],
				[
					"l",
					0,
					16
				],
				[
					"l",
					1,
					0
				],
				[
					"l",
					0,
					-5
				],
				[
					"l",
					40,
					0
				],
				[
					"l",
					0,
					5
				],
				[
					"l",
					1,
					0
				],
				[
					"l",
					0,
					-16
				],
				[
					"l",
					-1,
					0
				],
				[
					"l",
					0,
					5
				],
				[
					"l",
					-40,
					0
				],
				[
					"l",
					0,
					-5
				],
				["z"]
			],
			w: 42,
			h: 18
		},
		"rests.whole": {
			d: [
				[
					"M",
					.06,
					.03
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"l",
					5.46,
					0
				],
				[
					"l",
					5.49,
					0
				],
				[
					"l",
					.09,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					2.19
				],
				[
					"l",
					0,
					2.19
				],
				[
					"l",
					-.06,
					.09
				],
				[
					"l",
					-.09,
					.06
				],
				[
					"l",
					-5.49,
					0
				],
				[
					"l",
					-5.46,
					0
				],
				[
					"l",
					-.09,
					-.06
				],
				[
					"l",
					-.06,
					-.09
				],
				[
					"l",
					0,
					-2.19
				],
				[
					"l",
					0,
					-2.19
				],
				["z"]
			],
			w: 11.25,
			h: 4.68
		},
		"rests.half": {
			d: [
				[
					"M",
					.06,
					-4.62
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"l",
					5.46,
					0
				],
				[
					"l",
					5.49,
					0
				],
				[
					"l",
					.09,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					2.19
				],
				[
					"l",
					0,
					2.19
				],
				[
					"l",
					-.06,
					.09
				],
				[
					"l",
					-.09,
					.06
				],
				[
					"l",
					-5.49,
					0
				],
				[
					"l",
					-5.46,
					0
				],
				[
					"l",
					-.09,
					-.06
				],
				[
					"l",
					-.06,
					-.09
				],
				[
					"l",
					0,
					-2.19
				],
				[
					"l",
					0,
					-2.19
				],
				["z"]
			],
			w: 11.25,
			h: 4.68
		},
		"rests.quarter": {
			d: [
				[
					"M",
					1.89,
					-11.82
				],
				[
					"c",
					.12,
					-.06,
					.24,
					-.06,
					.36,
					-.03
				],
				[
					"c",
					.09,
					.06,
					4.74,
					5.58,
					4.86,
					5.82
				],
				[
					"c",
					.21,
					.39,
					.15,
					.78,
					-.15,
					1.26
				],
				[
					"c",
					-.24,
					.33,
					-.72,
					.81,
					-1.62,
					1.56
				],
				[
					"c",
					-.45,
					.36,
					-.87,
					.75,
					-.96,
					.84
				],
				[
					"c",
					-.93,
					.99,
					-1.14,
					2.49,
					-.6,
					3.63
				],
				[
					"c",
					.18,
					.39,
					.27,
					.48,
					1.32,
					1.68
				],
				[
					"c",
					1.92,
					2.25,
					1.83,
					2.16,
					1.83,
					2.34
				],
				[
					"c",
					0,
					.18,
					-.18,
					.36,
					-.36,
					.39
				],
				[
					"c",
					-.15,
					0,
					-.27,
					-.06,
					-.48,
					-.27
				],
				[
					"c",
					-.75,
					-.75,
					-2.46,
					-1.29,
					-3.39,
					-1.08
				],
				[
					"c",
					-.45,
					.09,
					-.69,
					.27,
					-.9,
					.69
				],
				[
					"c",
					-.12,
					.3,
					-.21,
					.66,
					-.24,
					1.14
				],
				[
					"c",
					-.03,
					.66,
					.09,
					1.35,
					.3,
					2.01
				],
				[
					"c",
					.15,
					.42,
					.24,
					.66,
					.45,
					.96
				],
				[
					"c",
					.18,
					.24,
					.18,
					.33,
					.03,
					.42
				],
				[
					"c",
					-.12,
					.06,
					-.18,
					.03,
					-.45,
					-.3
				],
				[
					"c",
					-1.08,
					-1.38,
					-2.07,
					-3.36,
					-2.4,
					-4.83
				],
				[
					"c",
					-.27,
					-1.05,
					-.15,
					-1.77,
					.27,
					-2.07
				],
				[
					"c",
					.21,
					-.12,
					.42,
					-.15,
					.87,
					-.15
				],
				[
					"c",
					.87,
					.06,
					2.1,
					.39,
					3.3,
					.9
				],
				[
					"l",
					.39,
					.18
				],
				[
					"l",
					-1.65,
					-1.95
				],
				[
					"c",
					-2.52,
					-2.97,
					-2.61,
					-3.09,
					-2.7,
					-3.27
				],
				[
					"c",
					-.09,
					-.24,
					-.12,
					-.48,
					-.03,
					-.75
				],
				[
					"c",
					.15,
					-.48,
					.57,
					-.96,
					1.83,
					-2.01
				],
				[
					"c",
					.45,
					-.36,
					.84,
					-.72,
					.93,
					-.78
				],
				[
					"c",
					.69,
					-.75,
					1.02,
					-1.8,
					.9,
					-2.79
				],
				[
					"c",
					-.06,
					-.33,
					-.21,
					-.84,
					-.39,
					-1.11
				],
				[
					"c",
					-.09,
					-.15,
					-.45,
					-.6,
					-.81,
					-1.05
				],
				[
					"c",
					-.36,
					-.42,
					-.69,
					-.81,
					-.72,
					-.87
				],
				[
					"c",
					-.09,
					-.18,
					0,
					-.42,
					.21,
					-.51
				],
				["z"]
			],
			w: 7.888,
			h: 21.435
		},
		"rests.8th": {
			d: [
				[
					"M",
					1.68,
					-6.12
				],
				[
					"c",
					.66,
					-.09,
					1.23,
					.09,
					1.68,
					.51
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.09,
					.33,
					.18,
					.66,
					.21,
					.72
				],
				[
					"c",
					.12,
					.27,
					.33,
					.45,
					.6,
					.48
				],
				[
					"c",
					.12,
					0,
					.18,
					0,
					.33,
					-.09
				],
				[
					"c",
					.39,
					-.18,
					1.32,
					-1.29,
					1.68,
					-1.98
				],
				[
					"c",
					.09,
					-.21,
					.24,
					-.3,
					.39,
					-.3
				],
				[
					"c",
					.12,
					0,
					.27,
					.09,
					.33,
					.18
				],
				[
					"c",
					.03,
					.06,
					-.27,
					1.11,
					-1.86,
					6.42
				],
				[
					"c",
					-1.02,
					3.48,
					-1.89,
					6.39,
					-1.92,
					6.42
				],
				[
					"c",
					0,
					.03,
					-.12,
					.12,
					-.24,
					.15
				],
				[
					"c",
					-.18,
					.09,
					-.21,
					.09,
					-.45,
					.09
				],
				[
					"c",
					-.24,
					0,
					-.3,
					0,
					-.48,
					-.06
				],
				[
					"c",
					-.09,
					-.06,
					-.21,
					-.12,
					-.21,
					-.15
				],
				[
					"c",
					-.06,
					-.03,
					.15,
					-.57,
					1.68,
					-4.92
				],
				[
					"c",
					.96,
					-2.67,
					1.74,
					-4.89,
					1.71,
					-4.89
				],
				[
					"l",
					-.51,
					.15
				],
				[
					"c",
					-1.08,
					.36,
					-1.74,
					.48,
					-2.55,
					.48
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.33,
					-.45,
					.84,
					-.81,
					1.38,
					-.9
				],
				["z"]
			],
			w: 7.534,
			h: 13.883
		},
		"rests.16th": {
			d: [
				[
					"M",
					3.33,
					-6.12
				],
				[
					"c",
					.66,
					-.09,
					1.23,
					.09,
					1.68,
					.51
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.09,
					.33,
					.18,
					.66,
					.21,
					.72
				],
				[
					"c",
					.15,
					.39,
					.57,
					.57,
					.87,
					.42
				],
				[
					"c",
					.39,
					-.18,
					1.2,
					-1.23,
					1.62,
					-2.07
				],
				[
					"c",
					.06,
					-.15,
					.24,
					-.24,
					.36,
					-.24
				],
				[
					"c",
					.12,
					0,
					.27,
					.09,
					.33,
					.18
				],
				[
					"c",
					.03,
					.06,
					-.45,
					1.86,
					-2.67,
					10.17
				],
				[
					"c",
					-1.5,
					5.55,
					-2.73,
					10.14,
					-2.76,
					10.17
				],
				[
					"c",
					-.03,
					.03,
					-.12,
					.12,
					-.24,
					.15
				],
				[
					"c",
					-.18,
					.09,
					-.21,
					.09,
					-.45,
					.09
				],
				[
					"c",
					-.24,
					0,
					-.3,
					0,
					-.48,
					-.06
				],
				[
					"c",
					-.09,
					-.06,
					-.21,
					-.12,
					-.21,
					-.15
				],
				[
					"c",
					-.06,
					-.03,
					.12,
					-.57,
					1.44,
					-4.92
				],
				[
					"c",
					.81,
					-2.67,
					1.47,
					-4.86,
					1.47,
					-4.89
				],
				[
					"c",
					-.03,
					0,
					-.27,
					.06,
					-.54,
					.15
				],
				[
					"c",
					-1.08,
					.36,
					-1.77,
					.48,
					-2.58,
					.48
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.72,
					-1.05,
					2.22,
					-1.23,
					3.06,
					-.42
				],
				[
					"c",
					.3,
					.33,
					.42,
					.6,
					.6,
					1.38
				],
				[
					"c",
					.09,
					.45,
					.21,
					.78,
					.33,
					.9
				],
				[
					"c",
					.09,
					.09,
					.27,
					.18,
					.45,
					.21
				],
				[
					"c",
					.12,
					0,
					.18,
					0,
					.33,
					-.09
				],
				[
					"c",
					.33,
					-.15,
					1.02,
					-.93,
					1.41,
					-1.59
				],
				[
					"c",
					.12,
					-.21,
					.18,
					-.39,
					.39,
					-1.08
				],
				[
					"c",
					.66,
					-2.1,
					1.17,
					-3.84,
					1.17,
					-3.87
				],
				[
					"c",
					0,
					0,
					-.21,
					.06,
					-.42,
					.15
				],
				[
					"c",
					-.51,
					.15,
					-1.2,
					.33,
					-1.68,
					.42
				],
				[
					"c",
					-.33,
					.06,
					-.51,
					.06,
					-.96,
					.06
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.33,
					-.45,
					.84,
					-.81,
					1.38,
					-.9
				],
				["z"]
			],
			w: 9.724,
			h: 21.383
		},
		"rests.32nd": {
			d: [
				[
					"M",
					4.23,
					-13.62
				],
				[
					"c",
					.66,
					-.09,
					1.23,
					.09,
					1.68,
					.51
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.09,
					.33,
					.18,
					.66,
					.21,
					.72
				],
				[
					"c",
					.12,
					.27,
					.33,
					.45,
					.6,
					.48
				],
				[
					"c",
					.12,
					0,
					.18,
					0,
					.27,
					-.06
				],
				[
					"c",
					.33,
					-.21,
					.99,
					-1.11,
					1.44,
					-1.98
				],
				[
					"c",
					.09,
					-.24,
					.21,
					-.33,
					.39,
					-.33
				],
				[
					"c",
					.12,
					0,
					.27,
					.09,
					.33,
					.18
				],
				[
					"c",
					.03,
					.06,
					-.57,
					2.67,
					-3.21,
					13.89
				],
				[
					"c",
					-1.8,
					7.62,
					-3.3,
					13.89,
					-3.3,
					13.92
				],
				[
					"c",
					-.03,
					.06,
					-.12,
					.12,
					-.24,
					.18
				],
				[
					"c",
					-.21,
					.09,
					-.24,
					.09,
					-.48,
					.09
				],
				[
					"c",
					-.24,
					0,
					-.3,
					0,
					-.48,
					-.06
				],
				[
					"c",
					-.09,
					-.06,
					-.21,
					-.12,
					-.21,
					-.15
				],
				[
					"c",
					-.06,
					-.03,
					.09,
					-.57,
					1.23,
					-4.92
				],
				[
					"c",
					.69,
					-2.67,
					1.26,
					-4.86,
					1.29,
					-4.89
				],
				[
					"c",
					0,
					-.03,
					-.12,
					-.03,
					-.48,
					.12
				],
				[
					"c",
					-1.17,
					.39,
					-2.22,
					.57,
					-3,
					.54
				],
				[
					"c",
					-.42,
					-.03,
					-.75,
					-.12,
					-1.11,
					-.3
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.72,
					-1.05,
					2.22,
					-1.23,
					3.06,
					-.42
				],
				[
					"c",
					.3,
					.33,
					.42,
					.6,
					.6,
					1.38
				],
				[
					"c",
					.09,
					.45,
					.21,
					.78,
					.33,
					.9
				],
				[
					"c",
					.12,
					.09,
					.3,
					.18,
					.48,
					.21
				],
				[
					"c",
					.12,
					0,
					.18,
					0,
					.3,
					-.09
				],
				[
					"c",
					.42,
					-.21,
					1.29,
					-1.29,
					1.56,
					-1.89
				],
				[
					"c",
					.03,
					-.12,
					1.23,
					-4.59,
					1.23,
					-4.65
				],
				[
					"c",
					0,
					-.03,
					-.18,
					.03,
					-.39,
					.12
				],
				[
					"c",
					-.63,
					.18,
					-1.2,
					.36,
					-1.74,
					.45
				],
				[
					"c",
					-.39,
					.06,
					-.54,
					.06,
					-1.02,
					.06
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.72,
					-1.05,
					2.22,
					-1.23,
					3.06,
					-.42
				],
				[
					"c",
					.3,
					.33,
					.42,
					.6,
					.6,
					1.38
				],
				[
					"c",
					.09,
					.45,
					.21,
					.78,
					.33,
					.9
				],
				[
					"c",
					.18,
					.18,
					.51,
					.27,
					.72,
					.15
				],
				[
					"c",
					.3,
					-.12,
					.69,
					-.57,
					1.08,
					-1.17
				],
				[
					"c",
					.42,
					-.6,
					.39,
					-.51,
					1.05,
					-3.03
				],
				[
					"c",
					.33,
					-1.26,
					.6,
					-2.31,
					.6,
					-2.34
				],
				[
					"c",
					0,
					0,
					-.21,
					.03,
					-.45,
					.12
				],
				[
					"c",
					-.57,
					.18,
					-1.14,
					.33,
					-1.62,
					.42
				],
				[
					"c",
					-.33,
					.06,
					-.51,
					.06,
					-.96,
					.06
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.33,
					-.45,
					.84,
					-.81,
					1.38,
					-.9
				],
				["z"]
			],
			w: 11.373,
			h: 28.883
		},
		"rests.64th": {
			d: [
				[
					"M",
					5.13,
					-13.62
				],
				[
					"c",
					.66,
					-.09,
					1.23,
					.09,
					1.68,
					.51
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.15,
					.63,
					.21,
					.81,
					.33,
					.96
				],
				[
					"c",
					.18,
					.21,
					.54,
					.3,
					.75,
					.18
				],
				[
					"c",
					.24,
					-.12,
					.63,
					-.66,
					1.08,
					-1.56
				],
				[
					"c",
					.33,
					-.66,
					.39,
					-.72,
					.6,
					-.72
				],
				[
					"c",
					.12,
					0,
					.27,
					.09,
					.33,
					.18
				],
				[
					"c",
					.03,
					.06,
					-.69,
					3.66,
					-3.54,
					17.64
				],
				[
					"c",
					-1.95,
					9.66,
					-3.57,
					17.61,
					-3.57,
					17.64
				],
				[
					"c",
					-.03,
					.06,
					-.12,
					.12,
					-.24,
					.18
				],
				[
					"c",
					-.21,
					.09,
					-.24,
					.09,
					-.48,
					.09
				],
				[
					"c",
					-.24,
					0,
					-.3,
					0,
					-.48,
					-.06
				],
				[
					"c",
					-.09,
					-.06,
					-.21,
					-.12,
					-.21,
					-.15
				],
				[
					"c",
					-.06,
					-.03,
					.06,
					-.57,
					1.05,
					-4.95
				],
				[
					"c",
					.6,
					-2.7,
					1.08,
					-4.89,
					1.08,
					-4.92
				],
				[
					"c",
					0,
					0,
					-.24,
					.06,
					-.51,
					.15
				],
				[
					"c",
					-.66,
					.24,
					-1.2,
					.36,
					-1.77,
					.48
				],
				[
					"c",
					-.42,
					.06,
					-.57,
					.06,
					-1.05,
					.06
				],
				[
					"c",
					-.69,
					0,
					-.87,
					-.03,
					-1.35,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.72,
					-1.05,
					2.22,
					-1.23,
					3.06,
					-.42
				],
				[
					"c",
					.3,
					.33,
					.42,
					.6,
					.6,
					1.38
				],
				[
					"c",
					.09,
					.45,
					.21,
					.78,
					.33,
					.9
				],
				[
					"c",
					.09,
					.09,
					.27,
					.18,
					.45,
					.21
				],
				[
					"c",
					.21,
					.03,
					.39,
					-.09,
					.72,
					-.42
				],
				[
					"c",
					.45,
					-.45,
					1.02,
					-1.26,
					1.17,
					-1.65
				],
				[
					"c",
					.03,
					-.09,
					.27,
					-1.14,
					.54,
					-2.34
				],
				[
					"c",
					.27,
					-1.2,
					.48,
					-2.19,
					.51,
					-2.22
				],
				[
					"c",
					0,
					-.03,
					-.09,
					-.03,
					-.48,
					.12
				],
				[
					"c",
					-1.17,
					.39,
					-2.22,
					.57,
					-3,
					.54
				],
				[
					"c",
					-.42,
					-.03,
					-.75,
					-.12,
					-1.11,
					-.3
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.36,
					-.54,
					.96,
					-.87,
					1.65,
					-.93
				],
				[
					"c",
					.54,
					-.03,
					1.02,
					.15,
					1.41,
					.54
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.09,
					.33,
					.18,
					.66,
					.21,
					.72
				],
				[
					"c",
					.15,
					.39,
					.57,
					.57,
					.9,
					.42
				],
				[
					"c",
					.36,
					-.18,
					1.2,
					-1.26,
					1.47,
					-1.89
				],
				[
					"c",
					.03,
					-.09,
					.3,
					-1.2,
					.57,
					-2.43
				],
				[
					"l",
					.51,
					-2.28
				],
				[
					"l",
					-.54,
					.18
				],
				[
					"c",
					-1.11,
					.36,
					-1.8,
					.48,
					-2.61,
					.48
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.36,
					-.54,
					.96,
					-.87,
					1.65,
					-.93
				],
				[
					"c",
					.54,
					-.03,
					1.02,
					.15,
					1.41,
					.54
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.15,
					.63,
					.21,
					.81,
					.33,
					.96
				],
				[
					"c",
					.21,
					.21,
					.54,
					.3,
					.75,
					.18
				],
				[
					"c",
					.36,
					-.18,
					.93,
					-.93,
					1.29,
					-1.68
				],
				[
					"c",
					.12,
					-.24,
					.18,
					-.48,
					.63,
					-2.55
				],
				[
					"l",
					.51,
					-2.31
				],
				[
					"c",
					0,
					-.03,
					-.18,
					.03,
					-.39,
					.12
				],
				[
					"c",
					-1.14,
					.36,
					-2.1,
					.54,
					-2.82,
					.51
				],
				[
					"c",
					-.42,
					-.03,
					-.75,
					-.12,
					-1.11,
					-.3
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.33,
					-.45,
					.84,
					-.81,
					1.38,
					-.9
				],
				["z"]
			],
			w: 12.453,
			h: 36.383
		},
		"rests.128th": {
			d: [
				[
					"M",
					6.03,
					-21.12
				],
				[
					"c",
					.66,
					-.09,
					1.23,
					.09,
					1.68,
					.51
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.09,
					.33,
					.18,
					.66,
					.21,
					.72
				],
				[
					"c",
					.12,
					.27,
					.33,
					.45,
					.6,
					.48
				],
				[
					"c",
					.21,
					0,
					.33,
					-.06,
					.54,
					-.36
				],
				[
					"c",
					.15,
					-.21,
					.54,
					-.93,
					.78,
					-1.47
				],
				[
					"c",
					.15,
					-.33,
					.18,
					-.39,
					.3,
					-.48
				],
				[
					"c",
					.18,
					-.09,
					.45,
					0,
					.51,
					.15
				],
				[
					"c",
					.03,
					.09,
					-7.11,
					42.75,
					-7.17,
					42.84
				],
				[
					"c",
					-.03,
					.03,
					-.15,
					.09,
					-.24,
					.15
				],
				[
					"c",
					-.18,
					.06,
					-.24,
					.06,
					-.45,
					.06
				],
				[
					"c",
					-.24,
					0,
					-.3,
					0,
					-.48,
					-.06
				],
				[
					"c",
					-.09,
					-.06,
					-.21,
					-.12,
					-.21,
					-.15
				],
				[
					"c",
					-.06,
					-.03,
					.03,
					-.57,
					.84,
					-4.98
				],
				[
					"c",
					.51,
					-2.7,
					.93,
					-4.92,
					.9,
					-4.92
				],
				[
					"c",
					0,
					0,
					-.15,
					.06,
					-.36,
					.12
				],
				[
					"c",
					-.78,
					.27,
					-1.62,
					.48,
					-2.31,
					.57
				],
				[
					"c",
					-.15,
					.03,
					-.54,
					.03,
					-.81,
					.03
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.36,
					-.54,
					.96,
					-.87,
					1.65,
					-.93
				],
				[
					"c",
					.54,
					-.03,
					1.02,
					.15,
					1.41,
					.54
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.09,
					.33,
					.18,
					.66,
					.21,
					.72
				],
				[
					"c",
					.12,
					.27,
					.33,
					.45,
					.63,
					.48
				],
				[
					"c",
					.12,
					0,
					.18,
					0,
					.3,
					-.09
				],
				[
					"c",
					.42,
					-.21,
					1.14,
					-1.11,
					1.5,
					-1.83
				],
				[
					"c",
					.12,
					-.27,
					.12,
					-.27,
					.54,
					-2.52
				],
				[
					"c",
					.24,
					-1.23,
					.42,
					-2.25,
					.39,
					-2.25
				],
				[
					"c",
					0,
					0,
					-.24,
					.06,
					-.51,
					.18
				],
				[
					"c",
					-1.26,
					.39,
					-2.25,
					.57,
					-3.06,
					.54
				],
				[
					"c",
					-.42,
					-.03,
					-.75,
					-.12,
					-1.11,
					-.3
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.36,
					-.54,
					.96,
					-.87,
					1.65,
					-.93
				],
				[
					"c",
					.54,
					-.03,
					1.02,
					.15,
					1.41,
					.54
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.15,
					.63,
					.21,
					.81,
					.33,
					.96
				],
				[
					"c",
					.18,
					.21,
					.51,
					.3,
					.75,
					.18
				],
				[
					"c",
					.36,
					-.15,
					1.05,
					-.99,
					1.41,
					-1.77
				],
				[
					"l",
					.15,
					-.3
				],
				[
					"l",
					.42,
					-2.25
				],
				[
					"c",
					.21,
					-1.26,
					.42,
					-2.28,
					.39,
					-2.28
				],
				[
					"l",
					-.51,
					.15
				],
				[
					"c",
					-1.11,
					.39,
					-1.89,
					.51,
					-2.7,
					.51
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.36,
					-.54,
					.96,
					-.87,
					1.65,
					-.93
				],
				[
					"c",
					.54,
					-.03,
					1.02,
					.15,
					1.41,
					.54
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.15,
					.63,
					.21,
					.81,
					.33,
					.96
				],
				[
					"c",
					.18,
					.18,
					.48,
					.27,
					.72,
					.21
				],
				[
					"c",
					.33,
					-.12,
					1.14,
					-1.26,
					1.41,
					-1.95
				],
				[
					"c",
					0,
					-.09,
					.21,
					-1.11,
					.45,
					-2.34
				],
				[
					"c",
					.21,
					-1.2,
					.39,
					-2.22,
					.39,
					-2.28
				],
				[
					"c",
					.03,
					-.03,
					0,
					-.03,
					-.45,
					.12
				],
				[
					"c",
					-.57,
					.18,
					-1.2,
					.33,
					-1.71,
					.42
				],
				[
					"c",
					-.3,
					.06,
					-.51,
					.06,
					-.93,
					.06
				],
				[
					"c",
					-.66,
					0,
					-.84,
					-.03,
					-1.32,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.36,
					-.54,
					.96,
					-.87,
					1.65,
					-.93
				],
				[
					"c",
					.54,
					-.03,
					1.02,
					.15,
					1.41,
					.54
				],
				[
					"c",
					.27,
					.3,
					.39,
					.54,
					.57,
					1.26
				],
				[
					"c",
					.09,
					.33,
					.18,
					.66,
					.21,
					.72
				],
				[
					"c",
					.12,
					.27,
					.33,
					.45,
					.6,
					.48
				],
				[
					"c",
					.18,
					0,
					.36,
					-.09,
					.57,
					-.33
				],
				[
					"c",
					.33,
					-.36,
					.78,
					-1.14,
					.93,
					-1.56
				],
				[
					"c",
					.03,
					-.12,
					.24,
					-1.2,
					.45,
					-2.4
				],
				[
					"c",
					.24,
					-1.2,
					.42,
					-2.22,
					.42,
					-2.28
				],
				[
					"c",
					.03,
					-.03,
					0,
					-.03,
					-.39,
					.09
				],
				[
					"c",
					-1.05,
					.36,
					-1.8,
					.48,
					-2.58,
					.48
				],
				[
					"c",
					-.63,
					0,
					-.84,
					-.03,
					-1.29,
					-.27
				],
				[
					"c",
					-1.32,
					-.63,
					-1.77,
					-2.16,
					-1.02,
					-3.3
				],
				[
					"c",
					.33,
					-.45,
					.84,
					-.81,
					1.38,
					-.9
				],
				["z"]
			],
			w: 12.992,
			h: 43.883
		},
		"accidentals.sharp": {
			d: [
				[
					"M",
					5.73,
					-11.19
				],
				[
					"c",
					.21,
					-.12,
					.54,
					-.03,
					.66,
					.24
				],
				[
					"c",
					.06,
					.12,
					.06,
					.21,
					.06,
					2.31
				],
				[
					"c",
					0,
					1.23,
					0,
					2.22,
					.03,
					2.22
				],
				[
					"c",
					0,
					0,
					.27,
					-.12,
					.6,
					-.24
				],
				[
					"c",
					.69,
					-.27,
					.78,
					-.3,
					.96,
					-.15
				],
				[
					"c",
					.21,
					.15,
					.21,
					.18,
					.21,
					1.38
				],
				[
					"c",
					0,
					1.02,
					0,
					1.11,
					-.06,
					1.2
				],
				[
					"c",
					-.03,
					.06,
					-.09,
					.12,
					-.12,
					.15
				],
				[
					"c",
					-.06,
					.03,
					-.42,
					.21,
					-.84,
					.36
				],
				[
					"l",
					-.75,
					.33
				],
				[
					"l",
					-.03,
					2.43
				],
				[
					"c",
					0,
					1.32,
					0,
					2.43,
					.03,
					2.43
				],
				[
					"c",
					0,
					0,
					.27,
					-.12,
					.6,
					-.24
				],
				[
					"c",
					.69,
					-.27,
					.78,
					-.3,
					.96,
					-.15
				],
				[
					"c",
					.21,
					.15,
					.21,
					.18,
					.21,
					1.38
				],
				[
					"c",
					0,
					1.02,
					0,
					1.11,
					-.06,
					1.2
				],
				[
					"c",
					-.03,
					.06,
					-.09,
					.12,
					-.12,
					.15
				],
				[
					"c",
					-.06,
					.03,
					-.42,
					.21,
					-.84,
					.36
				],
				[
					"l",
					-.75,
					.33
				],
				[
					"l",
					-.03,
					2.52
				],
				[
					"c",
					0,
					2.28,
					-.03,
					2.55,
					-.06,
					2.64
				],
				[
					"c",
					-.21,
					.36,
					-.72,
					.36,
					-.93,
					0
				],
				[
					"c",
					-.03,
					-.09,
					-.06,
					-.33,
					-.06,
					-2.43
				],
				[
					"l",
					0,
					-2.31
				],
				[
					"l",
					-1.29,
					.51
				],
				[
					"l",
					-1.26,
					.51
				],
				[
					"l",
					0,
					2.43
				],
				[
					"c",
					0,
					2.58,
					0,
					2.52,
					-.15,
					2.67
				],
				[
					"c",
					-.06,
					.09,
					-.27,
					.18,
					-.36,
					.18
				],
				[
					"c",
					-.12,
					0,
					-.33,
					-.09,
					-.39,
					-.18
				],
				[
					"c",
					-.15,
					-.15,
					-.15,
					-.09,
					-.15,
					-2.43
				],
				[
					"c",
					0,
					-1.23,
					0,
					-2.22,
					-.03,
					-2.22
				],
				[
					"c",
					0,
					0,
					-.27,
					.12,
					-.6,
					.24
				],
				[
					"c",
					-.69,
					.27,
					-.78,
					.3,
					-.96,
					.15
				],
				[
					"c",
					-.21,
					-.15,
					-.21,
					-.18,
					-.21,
					-1.38
				],
				[
					"c",
					0,
					-1.02,
					0,
					-1.11,
					.06,
					-1.2
				],
				[
					"c",
					.03,
					-.06,
					.09,
					-.12,
					.12,
					-.15
				],
				[
					"c",
					.06,
					-.03,
					.42,
					-.21,
					.84,
					-.36
				],
				[
					"l",
					.78,
					-.33
				],
				[
					"l",
					0,
					-2.43
				],
				[
					"c",
					0,
					-1.32,
					0,
					-2.43,
					-.03,
					-2.43
				],
				[
					"c",
					0,
					0,
					-.27,
					.12,
					-.6,
					.24
				],
				[
					"c",
					-.69,
					.27,
					-.78,
					.3,
					-.96,
					.15
				],
				[
					"c",
					-.21,
					-.15,
					-.21,
					-.18,
					-.21,
					-1.38
				],
				[
					"c",
					0,
					-1.02,
					0,
					-1.11,
					.06,
					-1.2
				],
				[
					"c",
					.03,
					-.06,
					.09,
					-.12,
					.12,
					-.15
				],
				[
					"c",
					.06,
					-.03,
					.42,
					-.21,
					.84,
					-.36
				],
				[
					"l",
					.78,
					-.33
				],
				[
					"l",
					0,
					-2.52
				],
				[
					"c",
					0,
					-2.28,
					.03,
					-2.55,
					.06,
					-2.64
				],
				[
					"c",
					.21,
					-.36,
					.72,
					-.36,
					.93,
					0
				],
				[
					"c",
					.03,
					.09,
					.06,
					.33,
					.06,
					2.43
				],
				[
					"l",
					.03,
					2.31
				],
				[
					"l",
					1.26,
					-.51
				],
				[
					"l",
					1.26,
					-.51
				],
				[
					"l",
					0,
					-2.43
				],
				[
					"c",
					0,
					-2.28,
					0,
					-2.43,
					.06,
					-2.55
				],
				[
					"c",
					.06,
					-.12,
					.12,
					-.18,
					.27,
					-.24
				],
				["z"],
				[
					"m",
					-.33,
					10.65
				],
				[
					"l",
					0,
					-2.43
				],
				[
					"l",
					-1.29,
					.51
				],
				[
					"l",
					-1.26,
					.51
				],
				[
					"l",
					0,
					2.46
				],
				[
					"l",
					0,
					2.43
				],
				[
					"l",
					.09,
					-.03
				],
				[
					"c",
					.06,
					-.03,
					.63,
					-.27,
					1.29,
					-.51
				],
				[
					"l",
					1.17,
					-.48
				],
				[
					"l",
					0,
					-2.46
				],
				["z"]
			],
			w: 8.25,
			h: 22.462
		},
		"accidentals.halfsharp": {
			d: [
				[
					"M",
					2.43,
					-10.05
				],
				[
					"c",
					.21,
					-.12,
					.54,
					-.03,
					.66,
					.24
				],
				[
					"c",
					.06,
					.12,
					.06,
					.21,
					.06,
					2.01
				],
				[
					"c",
					0,
					1.05,
					0,
					1.89,
					.03,
					1.89
				],
				[
					"l",
					.72,
					-.48
				],
				[
					"c",
					.69,
					-.48,
					.69,
					-.51,
					.87,
					-.51
				],
				[
					"c",
					.15,
					0,
					.18,
					.03,
					.27,
					.09
				],
				[
					"c",
					.21,
					.15,
					.21,
					.18,
					.21,
					1.41
				],
				[
					"c",
					0,
					1.11,
					-.03,
					1.14,
					-.09,
					1.23
				],
				[
					"c",
					-.03,
					.03,
					-.48,
					.39,
					-1.02,
					.75
				],
				[
					"l",
					-.99,
					.66
				],
				[
					"l",
					0,
					2.37
				],
				[
					"c",
					0,
					1.32,
					0,
					2.37,
					.03,
					2.37
				],
				[
					"l",
					.72,
					-.48
				],
				[
					"c",
					.69,
					-.48,
					.69,
					-.51,
					.87,
					-.51
				],
				[
					"c",
					.15,
					0,
					.18,
					.03,
					.27,
					.09
				],
				[
					"c",
					.21,
					.15,
					.21,
					.18,
					.21,
					1.41
				],
				[
					"c",
					0,
					1.11,
					-.03,
					1.14,
					-.09,
					1.23
				],
				[
					"c",
					-.03,
					.03,
					-.48,
					.39,
					-1.02,
					.75
				],
				[
					"l",
					-.99,
					.66
				],
				[
					"l",
					0,
					2.25
				],
				[
					"c",
					0,
					1.95,
					0,
					2.28,
					-.06,
					2.37
				],
				[
					"c",
					-.06,
					.12,
					-.12,
					.21,
					-.24,
					.27
				],
				[
					"c",
					-.27,
					.12,
					-.54,
					.03,
					-.69,
					-.24
				],
				[
					"c",
					-.06,
					-.12,
					-.06,
					-.21,
					-.06,
					-2.01
				],
				[
					"c",
					0,
					-1.05,
					0,
					-1.89,
					-.03,
					-1.89
				],
				[
					"l",
					-.72,
					.48
				],
				[
					"c",
					-.69,
					.48,
					-.69,
					.48,
					-.87,
					.48
				],
				[
					"c",
					-.15,
					0,
					-.18,
					0,
					-.27,
					-.06
				],
				[
					"c",
					-.21,
					-.15,
					-.21,
					-.18,
					-.21,
					-1.41
				],
				[
					"c",
					0,
					-1.11,
					.03,
					-1.14,
					.09,
					-1.23
				],
				[
					"c",
					.03,
					-.03,
					.48,
					-.39,
					1.02,
					-.75
				],
				[
					"l",
					.99,
					-.66
				],
				[
					"l",
					0,
					-2.37
				],
				[
					"c",
					0,
					-1.32,
					0,
					-2.37,
					-.03,
					-2.37
				],
				[
					"l",
					-.72,
					.48
				],
				[
					"c",
					-.69,
					.48,
					-.69,
					.48,
					-.87,
					.48
				],
				[
					"c",
					-.15,
					0,
					-.18,
					0,
					-.27,
					-.06
				],
				[
					"c",
					-.21,
					-.15,
					-.21,
					-.18,
					-.21,
					-1.41
				],
				[
					"c",
					0,
					-1.11,
					.03,
					-1.14,
					.09,
					-1.23
				],
				[
					"c",
					.03,
					-.03,
					.48,
					-.39,
					1.02,
					-.75
				],
				[
					"l",
					.99,
					-.66
				],
				[
					"l",
					0,
					-2.25
				],
				[
					"c",
					0,
					-2.13,
					0,
					-2.28,
					.06,
					-2.4
				],
				[
					"c",
					.06,
					-.12,
					.12,
					-.18,
					.27,
					-.24
				],
				["z"]
			],
			w: 5.25,
			h: 20.174
		},
		"accidentals.nat": {
			d: [
				[
					"M",
					.21,
					-11.4
				],
				[
					"c",
					.24,
					-.06,
					.78,
					0,
					.99,
					.15
				],
				[
					"c",
					.03,
					.03,
					.03,
					.48,
					0,
					2.61
				],
				[
					"c",
					-.03,
					1.44,
					-.03,
					2.61,
					-.03,
					2.61
				],
				[
					"c",
					0,
					.03,
					.75,
					-.09,
					1.68,
					-.24
				],
				[
					"c",
					.96,
					-.18,
					1.71,
					-.27,
					1.74,
					-.27
				],
				[
					"c",
					.15,
					.03,
					.27,
					.15,
					.36,
					.3
				],
				[
					"l",
					.06,
					.12
				],
				[
					"l",
					.09,
					8.67
				],
				[
					"c",
					.09,
					6.96,
					.12,
					8.67,
					.09,
					8.67
				],
				[
					"c",
					-.03,
					.03,
					-.12,
					.06,
					-.21,
					.09
				],
				[
					"c",
					-.24,
					.09,
					-.72,
					.09,
					-.96,
					0
				],
				[
					"c",
					-.09,
					-.03,
					-.18,
					-.06,
					-.21,
					-.09
				],
				[
					"c",
					-.03,
					-.03,
					-.03,
					-.48,
					0,
					-2.61
				],
				[
					"c",
					.03,
					-1.44,
					.03,
					-2.61,
					.03,
					-2.61
				],
				[
					"c",
					0,
					-.03,
					-.75,
					.09,
					-1.68,
					.24
				],
				[
					"c",
					-.96,
					.18,
					-1.71,
					.27,
					-1.74,
					.27
				],
				[
					"c",
					-.15,
					-.03,
					-.27,
					-.15,
					-.36,
					-.3
				],
				[
					"l",
					-.06,
					-.15
				],
				[
					"l",
					-.09,
					-7.53
				],
				[
					"c",
					-.06,
					-4.14,
					-.09,
					-8.04,
					-.12,
					-8.67
				],
				[
					"l",
					0,
					-1.11
				],
				[
					"l",
					.15,
					-.06
				],
				[
					"c",
					.09,
					-.03,
					.21,
					-.06,
					.27,
					-.09
				],
				["z"],
				[
					"m",
					3.75,
					8.4
				],
				[
					"c",
					0,
					-.33,
					0,
					-.42,
					-.03,
					-.42
				],
				[
					"c",
					-.12,
					0,
					-2.79,
					.45,
					-2.79,
					.48
				],
				[
					"c",
					-.03,
					0,
					-.09,
					6.3,
					-.09,
					6.33
				],
				[
					"c",
					.03,
					0,
					2.79,
					-.45,
					2.82,
					-.48
				],
				[
					"c",
					0,
					0,
					.09,
					-4.53,
					.09,
					-5.91
				],
				["z"]
			],
			w: 5.4,
			h: 22.8
		},
		"accidentals.flat": {
			d: [
				[
					"M",
					-.36,
					-14.07
				],
				[
					"c",
					.33,
					-.06,
					.87,
					0,
					1.08,
					.15
				],
				[
					"c",
					.06,
					.03,
					.06,
					.36,
					-.03,
					5.25
				],
				[
					"c",
					-.06,
					2.85,
					-.09,
					5.19,
					-.09,
					5.19
				],
				[
					"c",
					0,
					.03,
					.12,
					-.03,
					.24,
					-.12
				],
				[
					"c",
					.63,
					-.42,
					1.41,
					-.66,
					2.19,
					-.72
				],
				[
					"c",
					.81,
					-.03,
					1.47,
					.21,
					2.04,
					.78
				],
				[
					"c",
					.57,
					.54,
					.87,
					1.26,
					.93,
					2.04
				],
				[
					"c",
					.03,
					.57,
					-.09,
					1.08,
					-.36,
					1.62
				],
				[
					"c",
					-.42,
					.81,
					-1.02,
					1.38,
					-2.82,
					2.61
				],
				[
					"c",
					-1.14,
					.78,
					-1.44,
					1.02,
					-1.8,
					1.44
				],
				[
					"c",
					-.18,
					.18,
					-.39,
					.39,
					-.45,
					.42
				],
				[
					"c",
					-.27,
					.18,
					-.57,
					.15,
					-.81,
					-.06
				],
				[
					"c",
					-.06,
					-.09,
					-.12,
					-.18,
					-.15,
					-.27
				],
				[
					"c",
					-.03,
					-.06,
					-.09,
					-3.27,
					-.18,
					-8.34
				],
				[
					"c",
					-.09,
					-4.53,
					-.15,
					-8.58,
					-.18,
					-9.03
				],
				[
					"l",
					0,
					-.78
				],
				[
					"l",
					.12,
					-.06
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.09,
					.27,
					-.12
				],
				["z"],
				[
					"m",
					3.18,
					11.01
				],
				[
					"c",
					-.21,
					-.12,
					-.54,
					-.15,
					-.81,
					-.06
				],
				[
					"c",
					-.54,
					.15,
					-.99,
					.63,
					-1.17,
					1.26
				],
				[
					"c",
					-.06,
					.3,
					-.12,
					2.88,
					-.06,
					3.87
				],
				[
					"c",
					.03,
					.42,
					.03,
					.81,
					.06,
					.9
				],
				[
					"l",
					.03,
					.12
				],
				[
					"l",
					.45,
					-.39
				],
				[
					"c",
					.63,
					-.54,
					1.26,
					-1.17,
					1.56,
					-1.59
				],
				[
					"c",
					.3,
					-.42,
					.6,
					-.99,
					.72,
					-1.41
				],
				[
					"c",
					.18,
					-.69,
					.09,
					-1.47,
					-.18,
					-2.07
				],
				[
					"c",
					-.15,
					-.3,
					-.33,
					-.51,
					-.6,
					-.63
				],
				["z"]
			],
			w: 6.75,
			h: 18.801
		},
		"accidentals.halfflat": {
			d: [
				[
					"M",
					4.83,
					-14.07
				],
				[
					"c",
					.33,
					-.06,
					.87,
					0,
					1.08,
					.15
				],
				[
					"c",
					.06,
					.03,
					.06,
					.6,
					-.12,
					9.06
				],
				[
					"c",
					-.09,
					5.55,
					-.15,
					9.06,
					-.18,
					9.12
				],
				[
					"c",
					-.03,
					.09,
					-.09,
					.18,
					-.15,
					.27
				],
				[
					"c",
					-.24,
					.21,
					-.54,
					.24,
					-.81,
					.06
				],
				[
					"c",
					-.06,
					-.03,
					-.27,
					-.24,
					-.45,
					-.42
				],
				[
					"c",
					-.36,
					-.42,
					-.66,
					-.66,
					-1.8,
					-1.44
				],
				[
					"c",
					-1.23,
					-.84,
					-1.83,
					-1.32,
					-2.25,
					-1.77
				],
				[
					"c",
					-.66,
					-.78,
					-.96,
					-1.56,
					-.93,
					-2.46
				],
				[
					"c",
					.09,
					-1.41,
					1.11,
					-2.58,
					2.4,
					-2.79
				],
				[
					"c",
					.3,
					-.06,
					.84,
					-.03,
					1.23,
					.06
				],
				[
					"c",
					.54,
					.12,
					1.08,
					.33,
					1.53,
					.63
				],
				[
					"c",
					.12,
					.09,
					.24,
					.15,
					.24,
					.12
				],
				[
					"c",
					0,
					0,
					-.12,
					-8.37,
					-.18,
					-9.75
				],
				[
					"l",
					0,
					-.66
				],
				[
					"l",
					.12,
					-.06
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.09,
					.27,
					-.12
				],
				["z"],
				[
					"m",
					-1.65,
					10.95
				],
				[
					"c",
					-.6,
					-.18,
					-1.08,
					.09,
					-1.38,
					.69
				],
				[
					"c",
					-.27,
					.6,
					-.36,
					1.38,
					-.18,
					2.07
				],
				[
					"c",
					.12,
					.42,
					.42,
					.99,
					.72,
					1.41
				],
				[
					"c",
					.3,
					.42,
					.93,
					1.05,
					1.56,
					1.59
				],
				[
					"l",
					.48,
					.39
				],
				[
					"l",
					0,
					-.12
				],
				[
					"c",
					.03,
					-.09,
					.03,
					-.48,
					.06,
					-.9
				],
				[
					"c",
					.03,
					-.57,
					.03,
					-1.08,
					0,
					-2.22
				],
				[
					"c",
					-.03,
					-1.62,
					-.03,
					-1.62,
					-.24,
					-2.07
				],
				[
					"c",
					-.21,
					-.42,
					-.6,
					-.75,
					-1.02,
					-.84
				],
				["z"]
			],
			w: 6.728,
			h: 18.801
		},
		"accidentals.dblflat": {
			d: [
				[
					"M",
					-.36,
					-14.07
				],
				[
					"c",
					.33,
					-.06,
					.87,
					0,
					1.08,
					.15
				],
				[
					"c",
					.06,
					.03,
					.06,
					.36,
					-.03,
					5.25
				],
				[
					"c",
					-.06,
					2.85,
					-.09,
					5.19,
					-.09,
					5.19
				],
				[
					"c",
					0,
					.03,
					.12,
					-.03,
					.24,
					-.12
				],
				[
					"c",
					.63,
					-.42,
					1.41,
					-.66,
					2.19,
					-.72
				],
				[
					"c",
					.81,
					-.03,
					1.47,
					.21,
					2.04,
					.78
				],
				[
					"c",
					.57,
					.54,
					.87,
					1.26,
					.93,
					2.04
				],
				[
					"c",
					.03,
					.57,
					-.09,
					1.08,
					-.36,
					1.62
				],
				[
					"c",
					-.42,
					.81,
					-1.02,
					1.38,
					-2.82,
					2.61
				],
				[
					"c",
					-1.14,
					.78,
					-1.44,
					1.02,
					-1.8,
					1.44
				],
				[
					"c",
					-.18,
					.18,
					-.39,
					.39,
					-.45,
					.42
				],
				[
					"c",
					-.27,
					.18,
					-.57,
					.15,
					-.81,
					-.06
				],
				[
					"c",
					-.06,
					-.09,
					-.12,
					-.18,
					-.15,
					-.27
				],
				[
					"c",
					-.03,
					-.06,
					-.09,
					-3.27,
					-.18,
					-8.34
				],
				[
					"c",
					-.09,
					-4.53,
					-.15,
					-8.58,
					-.18,
					-9.03
				],
				[
					"l",
					0,
					-.78
				],
				[
					"l",
					.12,
					-.06
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.09,
					.27,
					-.12
				],
				["z"],
				[
					"m",
					3.18,
					11.01
				],
				[
					"c",
					-.21,
					-.12,
					-.54,
					-.15,
					-.81,
					-.06
				],
				[
					"c",
					-.54,
					.15,
					-.99,
					.63,
					-1.17,
					1.26
				],
				[
					"c",
					-.06,
					.3,
					-.12,
					2.88,
					-.06,
					3.87
				],
				[
					"c",
					.03,
					.42,
					.03,
					.81,
					.06,
					.9
				],
				[
					"l",
					.03,
					.12
				],
				[
					"l",
					.45,
					-.39
				],
				[
					"c",
					.63,
					-.54,
					1.26,
					-1.17,
					1.56,
					-1.59
				],
				[
					"c",
					.3,
					-.42,
					.6,
					-.99,
					.72,
					-1.41
				],
				[
					"c",
					.18,
					-.69,
					.09,
					-1.47,
					-.18,
					-2.07
				],
				[
					"c",
					-.15,
					-.3,
					-.33,
					-.51,
					-.6,
					-.63
				],
				["z"],
				[
					"m",
					3,
					-11
				],
				[
					"c",
					.33,
					-.06,
					.87,
					0,
					1.08,
					.15
				],
				[
					"c",
					.06,
					.03,
					.06,
					.36,
					-.03,
					5.25
				],
				[
					"c",
					-.06,
					2.85,
					-.09,
					5.19,
					-.09,
					5.19
				],
				[
					"c",
					0,
					.03,
					.12,
					-.03,
					.24,
					-.12
				],
				[
					"c",
					.63,
					-.42,
					1.41,
					-.66,
					2.19,
					-.72
				],
				[
					"c",
					.81,
					-.03,
					1.47,
					.21,
					2.04,
					.78
				],
				[
					"c",
					.57,
					.54,
					.87,
					1.26,
					.93,
					2.04
				],
				[
					"c",
					.03,
					.57,
					-.09,
					1.08,
					-.36,
					1.62
				],
				[
					"c",
					-.42,
					.81,
					-1.02,
					1.38,
					-2.82,
					2.61
				],
				[
					"c",
					-1.14,
					.78,
					-1.44,
					1.02,
					-1.8,
					1.44
				],
				[
					"c",
					-.18,
					.18,
					-.39,
					.39,
					-.45,
					.42
				],
				[
					"c",
					-.27,
					.18,
					-.57,
					.15,
					-.81,
					-.06
				],
				[
					"c",
					-.06,
					-.09,
					-.12,
					-.18,
					-.15,
					-.27
				],
				[
					"c",
					-.03,
					-.06,
					-.09,
					-3.27,
					-.18,
					-8.34
				],
				[
					"c",
					-.09,
					-4.53,
					-.15,
					-8.58,
					-.18,
					-9.03
				],
				[
					"l",
					0,
					-.78
				],
				[
					"l",
					.12,
					-.06
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.09,
					.27,
					-.12
				],
				["z"],
				[
					"m",
					3.18,
					11.01
				],
				[
					"c",
					-.21,
					-.12,
					-.54,
					-.15,
					-.81,
					-.06
				],
				[
					"c",
					-.54,
					.15,
					-.99,
					.63,
					-1.17,
					1.26
				],
				[
					"c",
					-.06,
					.3,
					-.12,
					2.88,
					-.06,
					3.87
				],
				[
					"c",
					.03,
					.42,
					.03,
					.81,
					.06,
					.9
				],
				[
					"l",
					.03,
					.12
				],
				[
					"l",
					.45,
					-.39
				],
				[
					"c",
					.63,
					-.54,
					1.26,
					-1.17,
					1.56,
					-1.59
				],
				[
					"c",
					.3,
					-.42,
					.6,
					-.99,
					.72,
					-1.41
				],
				[
					"c",
					.18,
					-.69,
					.09,
					-1.47,
					-.18,
					-2.07
				],
				[
					"c",
					-.15,
					-.3,
					-.33,
					-.51,
					-.6,
					-.63
				],
				["z"]
			],
			w: 12.1,
			h: 18.804
		},
		"accidentals.dblsharp": {
			d: [
				[
					"M",
					-.18,
					-3.96
				],
				[
					"c",
					.06,
					-.03,
					.12,
					-.06,
					.15,
					-.06
				],
				[
					"c",
					.09,
					0,
					2.76,
					.27,
					2.79,
					.3
				],
				[
					"c",
					.12,
					.03,
					.15,
					.12,
					.15,
					.51
				],
				[
					"c",
					.06,
					.96,
					.24,
					1.59,
					.57,
					2.1
				],
				[
					"c",
					.06,
					.09,
					.15,
					.21,
					.18,
					.24
				],
				[
					"l",
					.09,
					.06
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"c",
					.03,
					-.03,
					.12,
					-.15,
					.18,
					-.24
				],
				[
					"c",
					.33,
					-.51,
					.51,
					-1.14,
					.57,
					-2.1
				],
				[
					"c",
					0,
					-.39,
					.03,
					-.45,
					.12,
					-.51
				],
				[
					"c",
					.03,
					0,
					.66,
					-.09,
					1.44,
					-.15
				],
				[
					"c",
					1.47,
					-.15,
					1.5,
					-.15,
					1.56,
					-.03
				],
				[
					"c",
					.03,
					.06,
					0,
					.42,
					-.09,
					1.44
				],
				[
					"c",
					-.09,
					.72,
					-.15,
					1.35,
					-.15,
					1.38
				],
				[
					"c",
					0,
					.03,
					-.03,
					.09,
					-.06,
					.12
				],
				[
					"c",
					-.06,
					.06,
					-.12,
					.09,
					-.51,
					.09
				],
				[
					"c",
					-1.08,
					.06,
					-1.8,
					.3,
					-2.28,
					.75
				],
				[
					"l",
					-.12,
					.09
				],
				[
					"l",
					.09,
					.09
				],
				[
					"c",
					.12,
					.15,
					.39,
					.33,
					.63,
					.45
				],
				[
					"c",
					.42,
					.18,
					.96,
					.27,
					1.68,
					.33
				],
				[
					"c",
					.39,
					0,
					.45,
					.03,
					.51,
					.09
				],
				[
					"c",
					.03,
					.03,
					.06,
					.09,
					.06,
					.12
				],
				[
					"c",
					0,
					.03,
					.06,
					.66,
					.15,
					1.38
				],
				[
					"c",
					.09,
					1.02,
					.12,
					1.38,
					.09,
					1.44
				],
				[
					"c",
					-.06,
					.12,
					-.09,
					.12,
					-1.56,
					-.03
				],
				[
					"c",
					-.78,
					-.06,
					-1.41,
					-.15,
					-1.44,
					-.15
				],
				[
					"c",
					-.09,
					-.06,
					-.12,
					-.12,
					-.12,
					-.54
				],
				[
					"c",
					-.06,
					-.93,
					-.24,
					-1.56,
					-.57,
					-2.07
				],
				[
					"c",
					-.06,
					-.09,
					-.15,
					-.21,
					-.18,
					-.24
				],
				[
					"l",
					-.09,
					-.06
				],
				[
					"l",
					-.09,
					.06
				],
				[
					"c",
					-.03,
					.03,
					-.12,
					.15,
					-.18,
					.24
				],
				[
					"c",
					-.33,
					.51,
					-.51,
					1.14,
					-.57,
					2.07
				],
				[
					"c",
					0,
					.42,
					-.03,
					.48,
					-.12,
					.54
				],
				[
					"c",
					-.03,
					0,
					-.66,
					.09,
					-1.44,
					.15
				],
				[
					"c",
					-1.47,
					.15,
					-1.5,
					.15,
					-1.56,
					.03
				],
				[
					"c",
					-.03,
					-.06,
					0,
					-.42,
					.09,
					-1.44
				],
				[
					"c",
					.09,
					-.72,
					.15,
					-1.35,
					.15,
					-1.38
				],
				[
					"c",
					0,
					-.03,
					.03,
					-.09,
					.06,
					-.12
				],
				[
					"c",
					.06,
					-.06,
					.12,
					-.09,
					.51,
					-.09
				],
				[
					"c",
					.72,
					-.06,
					1.26,
					-.15,
					1.68,
					-.33
				],
				[
					"c",
					.24,
					-.12,
					.51,
					-.3,
					.63,
					-.45
				],
				[
					"l",
					.09,
					-.09
				],
				[
					"l",
					-.12,
					-.09
				],
				[
					"c",
					-.48,
					-.45,
					-1.2,
					-.69,
					-2.28,
					-.75
				],
				[
					"c",
					-.39,
					0,
					-.45,
					-.03,
					-.51,
					-.09
				],
				[
					"c",
					-.03,
					-.03,
					-.06,
					-.09,
					-.06,
					-.12
				],
				[
					"c",
					0,
					-.03,
					-.06,
					-.63,
					-.12,
					-1.38
				],
				[
					"c",
					-.09,
					-.72,
					-.15,
					-1.35,
					-.15,
					-1.38
				],
				["z"]
			],
			w: 7.95,
			h: 7.977
		},
		"dots.dot": {
			d: [
				[
					"M",
					1.32,
					-1.68
				],
				[
					"c",
					.09,
					-.03,
					.27,
					-.06,
					.39,
					-.06
				],
				[
					"c",
					.96,
					0,
					1.74,
					.78,
					1.74,
					1.71
				],
				[
					"c",
					0,
					.96,
					-.78,
					1.74,
					-1.71,
					1.74
				],
				[
					"c",
					-.96,
					0,
					-1.74,
					-.78,
					-1.74,
					-1.71
				],
				[
					"c",
					0,
					-.78,
					.54,
					-1.5,
					1.32,
					-1.68
				],
				["z"]
			],
			w: 3.45,
			h: 3.45
		},
		"noteheads.dbl": {
			d: [
				[
					"M",
					-.69,
					-4.02
				],
				[
					"c",
					.18,
					-.09,
					.36,
					-.09,
					.54,
					0
				],
				[
					"c",
					.18,
					.09,
					.24,
					.15,
					.33,
					.3
				],
				[
					"c",
					.06,
					.15,
					.06,
					.18,
					.06,
					1.41
				],
				[
					"l",
					0,
					1.23
				],
				[
					"l",
					.12,
					-.18
				],
				[
					"c",
					.72,
					-1.26,
					2.64,
					-2.31,
					4.86,
					-2.64
				],
				[
					"c",
					.81,
					-.15,
					1.11,
					-.15,
					2.13,
					-.15
				],
				[
					"c",
					.99,
					0,
					1.29,
					0,
					2.1,
					.15
				],
				[
					"c",
					.75,
					.12,
					1.38,
					.27,
					2.04,
					.54
				],
				[
					"c",
					1.35,
					.51,
					2.34,
					1.26,
					2.82,
					2.1
				],
				[
					"l",
					.12,
					.18
				],
				[
					"l",
					0,
					-1.23
				],
				[
					"c",
					0,
					-1.2,
					0,
					-1.26,
					.06,
					-1.38
				],
				[
					"c",
					.09,
					-.18,
					.15,
					-.24,
					.33,
					-.33
				],
				[
					"c",
					.18,
					-.09,
					.36,
					-.09,
					.54,
					0
				],
				[
					"c",
					.18,
					.09,
					.24,
					.15,
					.33,
					.3
				],
				[
					"l",
					.06,
					.15
				],
				[
					"l",
					0,
					3.54
				],
				[
					"l",
					0,
					3.54
				],
				[
					"l",
					-.06,
					.15
				],
				[
					"c",
					-.09,
					.18,
					-.15,
					.24,
					-.33,
					.33
				],
				[
					"c",
					-.18,
					.09,
					-.36,
					.09,
					-.54,
					0
				],
				[
					"c",
					-.18,
					-.09,
					-.24,
					-.15,
					-.33,
					-.33
				],
				[
					"c",
					-.06,
					-.12,
					-.06,
					-.18,
					-.06,
					-1.38
				],
				[
					"l",
					0,
					-1.23
				],
				[
					"l",
					-.12,
					.18
				],
				[
					"c",
					-.48,
					.84,
					-1.47,
					1.59,
					-2.82,
					2.1
				],
				[
					"c",
					-.84,
					.33,
					-1.71,
					.54,
					-2.85,
					.66
				],
				[
					"c",
					-.45,
					.06,
					-2.16,
					.06,
					-2.61,
					0
				],
				[
					"c",
					-1.14,
					-.12,
					-2.01,
					-.33,
					-2.85,
					-.66
				],
				[
					"c",
					-1.35,
					-.51,
					-2.34,
					-1.26,
					-2.82,
					-2.1
				],
				[
					"l",
					-.12,
					-.18
				],
				[
					"l",
					0,
					1.23
				],
				[
					"c",
					0,
					1.23,
					0,
					1.26,
					-.06,
					1.38
				],
				[
					"c",
					-.09,
					.18,
					-.15,
					.24,
					-.33,
					.33
				],
				[
					"c",
					-.18,
					.09,
					-.36,
					.09,
					-.54,
					0
				],
				[
					"c",
					-.18,
					-.09,
					-.24,
					-.15,
					-.33,
					-.33
				],
				[
					"l",
					-.06,
					-.15
				],
				[
					"l",
					0,
					-3.54
				],
				[
					"c",
					0,
					-3.48,
					0,
					-3.54,
					.06,
					-3.66
				],
				[
					"c",
					.09,
					-.18,
					.15,
					-.24,
					.33,
					-.33
				],
				["z"],
				[
					"m",
					7.71,
					.63
				],
				[
					"c",
					-.36,
					-.06,
					-.9,
					-.06,
					-1.14,
					0
				],
				[
					"c",
					-.3,
					.03,
					-.66,
					.24,
					-.87,
					.42
				],
				[
					"c",
					-.6,
					.54,
					-.9,
					1.62,
					-.75,
					2.82
				],
				[
					"c",
					.12,
					.93,
					.51,
					1.68,
					1.11,
					2.31
				],
				[
					"c",
					.75,
					.72,
					1.83,
					1.2,
					2.85,
					1.26
				],
				[
					"c",
					1.05,
					.06,
					1.83,
					-.54,
					2.1,
					-1.65
				],
				[
					"c",
					.21,
					-.9,
					.12,
					-1.95,
					-.24,
					-2.82
				],
				[
					"c",
					-.36,
					-.81,
					-1.08,
					-1.53,
					-1.95,
					-1.95
				],
				[
					"c",
					-.3,
					-.15,
					-.78,
					-.3,
					-1.11,
					-.39
				],
				["z"]
			],
			w: 16.83,
			h: 8.145
		},
		"noteheads.whole": {
			d: [
				[
					"M",
					6.51,
					-4.05
				],
				[
					"c",
					.51,
					-.03,
					2.01,
					0,
					2.52,
					.03
				],
				[
					"c",
					1.41,
					.18,
					2.64,
					.51,
					3.72,
					1.08
				],
				[
					"c",
					1.2,
					.63,
					1.95,
					1.41,
					2.19,
					2.31
				],
				[
					"c",
					.09,
					.33,
					.09,
					.9,
					0,
					1.23
				],
				[
					"c",
					-.24,
					.9,
					-.99,
					1.68,
					-2.19,
					2.31
				],
				[
					"c",
					-1.08,
					.57,
					-2.28,
					.9,
					-3.75,
					1.08
				],
				[
					"c",
					-.66,
					.06,
					-2.31,
					.06,
					-2.97,
					0
				],
				[
					"c",
					-1.47,
					-.18,
					-2.67,
					-.51,
					-3.75,
					-1.08
				],
				[
					"c",
					-1.2,
					-.63,
					-1.95,
					-1.41,
					-2.19,
					-2.31
				],
				[
					"c",
					-.09,
					-.33,
					-.09,
					-.9,
					0,
					-1.23
				],
				[
					"c",
					.24,
					-.9,
					.99,
					-1.68,
					2.19,
					-2.31
				],
				[
					"c",
					1.2,
					-.63,
					2.61,
					-.99,
					4.23,
					-1.11
				],
				["z"],
				[
					"m",
					.57,
					.66
				],
				[
					"c",
					-.87,
					-.15,
					-1.53,
					0,
					-2.04,
					.51
				],
				[
					"c",
					-.15,
					.15,
					-.24,
					.27,
					-.33,
					.48
				],
				[
					"c",
					-.24,
					.51,
					-.36,
					1.08,
					-.33,
					1.77
				],
				[
					"c",
					.03,
					.69,
					.18,
					1.26,
					.42,
					1.77
				],
				[
					"c",
					.6,
					1.17,
					1.74,
					1.98,
					3.18,
					2.22
				],
				[
					"c",
					1.11,
					.21,
					1.95,
					-.15,
					2.34,
					-.99
				],
				[
					"c",
					.24,
					-.51,
					.36,
					-1.08,
					.33,
					-1.8
				],
				[
					"c",
					-.06,
					-1.11,
					-.45,
					-2.04,
					-1.17,
					-2.76
				],
				[
					"c",
					-.63,
					-.63,
					-1.47,
					-1.05,
					-2.4,
					-1.2
				],
				["z"]
			],
			w: 14.985,
			h: 8.097
		},
		"noteheads.half": {
			d: [
				[
					"M",
					7.44,
					-4.05
				],
				[
					"c",
					.06,
					-.03,
					.27,
					-.03,
					.48,
					-.03
				],
				[
					"c",
					1.05,
					0,
					1.71,
					.24,
					2.1,
					.81
				],
				[
					"c",
					.42,
					.6,
					.45,
					1.35,
					.18,
					2.4
				],
				[
					"c",
					-.42,
					1.59,
					-1.14,
					2.73,
					-2.16,
					3.39
				],
				[
					"c",
					-1.41,
					.93,
					-3.18,
					1.44,
					-5.4,
					1.53
				],
				[
					"c",
					-1.17,
					.03,
					-1.89,
					-.21,
					-2.28,
					-.81
				],
				[
					"c",
					-.42,
					-.6,
					-.45,
					-1.35,
					-.18,
					-2.4
				],
				[
					"c",
					.42,
					-1.59,
					1.14,
					-2.73,
					2.16,
					-3.39
				],
				[
					"c",
					.63,
					-.42,
					1.23,
					-.72,
					1.98,
					-.96
				],
				[
					"c",
					.9,
					-.3,
					1.65,
					-.42,
					3.12,
					-.54
				],
				["z"],
				[
					"m",
					1.29,
					.87
				],
				[
					"c",
					-.27,
					-.09,
					-.63,
					-.12,
					-.9,
					-.03
				],
				[
					"c",
					-.72,
					.24,
					-1.53,
					.69,
					-3.27,
					1.8
				],
				[
					"c",
					-2.34,
					1.5,
					-3.3,
					2.25,
					-3.57,
					2.79
				],
				[
					"c",
					-.36,
					.72,
					-.06,
					1.5,
					.66,
					1.77
				],
				[
					"c",
					.24,
					.12,
					.69,
					.09,
					.99,
					0
				],
				[
					"c",
					.84,
					-.3,
					1.92,
					-.93,
					4.14,
					-2.37
				],
				[
					"c",
					1.62,
					-1.08,
					2.37,
					-1.71,
					2.61,
					-2.19
				],
				[
					"c",
					.36,
					-.72,
					.06,
					-1.5,
					-.66,
					-1.77
				],
				["z"]
			],
			w: 10.37,
			h: 8.132
		},
		"noteheads.quarter": {
			d: [
				[
					"M",
					6.09,
					-4.05
				],
				[
					"c",
					.36,
					-.03,
					1.2,
					0,
					1.53,
					.06
				],
				[
					"c",
					1.17,
					.24,
					1.89,
					.84,
					2.16,
					1.83
				],
				[
					"c",
					.06,
					.18,
					.06,
					.3,
					.06,
					.66
				],
				[
					"c",
					0,
					.45,
					0,
					.63,
					-.15,
					1.08
				],
				[
					"c",
					-.66,
					2.04,
					-3.06,
					3.93,
					-5.52,
					4.38
				],
				[
					"c",
					-.54,
					.09,
					-1.44,
					.09,
					-1.83,
					.03
				],
				[
					"c",
					-1.23,
					-.27,
					-1.98,
					-.87,
					-2.25,
					-1.86
				],
				[
					"c",
					-.06,
					-.18,
					-.06,
					-.3,
					-.06,
					-.66
				],
				[
					"c",
					0,
					-.45,
					0,
					-.63,
					.15,
					-1.08
				],
				[
					"c",
					.24,
					-.78,
					.75,
					-1.53,
					1.44,
					-2.22
				],
				[
					"c",
					1.2,
					-1.2,
					2.85,
					-2.01,
					4.47,
					-2.22
				],
				["z"]
			],
			w: 9.81,
			h: 8.094
		},
		"noteheads.slash.nostem": {
			d: [
				[
					"M",
					9.3,
					-7.77
				],
				[
					"c",
					.06,
					-.06,
					.18,
					-.06,
					1.71,
					-.06
				],
				[
					"l",
					1.65,
					0
				],
				[
					"l",
					.09,
					.09
				],
				[
					"c",
					.06,
					.06,
					.06,
					.09,
					.06,
					.15
				],
				[
					"c",
					-.03,
					.12,
					-9.21,
					15.24,
					-9.3,
					15.33
				],
				[
					"c",
					-.06,
					.06,
					-.18,
					.06,
					-1.71,
					.06
				],
				[
					"l",
					-1.65,
					0
				],
				[
					"l",
					-.09,
					-.09
				],
				[
					"c",
					-.06,
					-.06,
					-.06,
					-.09,
					-.06,
					-.15
				],
				[
					"c",
					.03,
					-.12,
					9.21,
					-15.24,
					9.3,
					-15.33
				],
				["z"]
			],
			w: 12.81,
			h: 15.63
		},
		"noteheads.indeterminate": {
			d: [
				[
					"M",
					.78,
					-4.05
				],
				[
					"c",
					.12,
					-.03,
					.24,
					-.03,
					.36,
					.03
				],
				[
					"c",
					.03,
					.03,
					.93,
					.72,
					1.95,
					1.56
				],
				[
					"l",
					1.86,
					1.5
				],
				[
					"l",
					1.86,
					-1.5
				],
				[
					"c",
					1.02,
					-.84,
					1.92,
					-1.53,
					1.95,
					-1.56
				],
				[
					"c",
					.21,
					-.12,
					.33,
					-.09,
					.75,
					.24
				],
				[
					"c",
					.3,
					.27,
					.36,
					.36,
					.36,
					.54
				],
				[
					"c",
					0,
					.03,
					-.03,
					.12,
					-.06,
					.18
				],
				[
					"c",
					-.03,
					.06,
					-.9,
					.75,
					-1.89,
					1.56
				],
				[
					"l",
					-1.8,
					1.47
				],
				[
					"c",
					0,
					.03,
					.81,
					.69,
					1.8,
					1.5
				],
				[
					"c",
					.99,
					.81,
					1.86,
					1.5,
					1.89,
					1.56
				],
				[
					"c",
					.03,
					.06,
					.06,
					.15,
					.06,
					.18
				],
				[
					"c",
					0,
					.18,
					-.06,
					.27,
					-.36,
					.54
				],
				[
					"c",
					-.42,
					.33,
					-.54,
					.36,
					-.75,
					.24
				],
				[
					"c",
					-.03,
					-.03,
					-.93,
					-.72,
					-1.95,
					-1.56
				],
				[
					"l",
					-1.86,
					-1.5
				],
				[
					"l",
					-1.86,
					1.5
				],
				[
					"c",
					-1.02,
					.84,
					-1.92,
					1.53,
					-1.95,
					1.56
				],
				[
					"c",
					-.21,
					.12,
					-.33,
					.09,
					-.75,
					-.24
				],
				[
					"c",
					-.3,
					-.27,
					-.36,
					-.36,
					-.36,
					-.54
				],
				[
					"c",
					0,
					-.03,
					.03,
					-.12,
					.06,
					-.18
				],
				[
					"c",
					.03,
					-.06,
					.9,
					-.75,
					1.89,
					-1.56
				],
				[
					"l",
					1.8,
					-1.47
				],
				[
					"c",
					0,
					-.03,
					-.81,
					-.69,
					-1.8,
					-1.5
				],
				[
					"c",
					-.99,
					-.81,
					-1.86,
					-1.5,
					-1.89,
					-1.56
				],
				[
					"c",
					-.06,
					-.12,
					-.09,
					-.21,
					-.03,
					-.36
				],
				[
					"c",
					.03,
					-.09,
					.57,
					-.57,
					.72,
					-.63
				],
				["z"]
			],
			w: 9.843,
			h: 8.139
		},
		"scripts.ufermata": {
			d: [
				[
					"M",
					-.75,
					-10.77
				],
				[
					"c",
					.12,
					0,
					.45,
					-.03,
					.69,
					-.03
				],
				[
					"c",
					2.91,
					-.03,
					5.55,
					1.53,
					7.41,
					4.35
				],
				[
					"c",
					1.17,
					1.71,
					1.95,
					3.72,
					2.43,
					6.03
				],
				[
					"c",
					.12,
					.51,
					.12,
					.57,
					.03,
					.69
				],
				[
					"c",
					-.12,
					.21,
					-.48,
					.27,
					-.69,
					.12
				],
				[
					"c",
					-.12,
					-.09,
					-.18,
					-.24,
					-.27,
					-.69
				],
				[
					"c",
					-.78,
					-3.63,
					-3.42,
					-6.54,
					-6.78,
					-7.38
				],
				[
					"c",
					-.78,
					-.21,
					-1.2,
					-.24,
					-2.07,
					-.24
				],
				[
					"c",
					-.63,
					0,
					-.84,
					0,
					-1.2,
					.06
				],
				[
					"c",
					-1.83,
					.27,
					-3.42,
					1.08,
					-4.8,
					2.37
				],
				[
					"c",
					-1.41,
					1.35,
					-2.4,
					3.21,
					-2.85,
					5.19
				],
				[
					"c",
					-.09,
					.45,
					-.15,
					.6,
					-.27,
					.69
				],
				[
					"c",
					-.21,
					.15,
					-.57,
					.09,
					-.69,
					-.12
				],
				[
					"c",
					-.09,
					-.12,
					-.09,
					-.18,
					.03,
					-.69
				],
				[
					"c",
					.33,
					-1.62,
					.78,
					-3,
					1.47,
					-4.38
				],
				[
					"c",
					1.77,
					-3.54,
					4.44,
					-5.67,
					7.56,
					-5.97
				],
				["z"],
				[
					"m",
					.33,
					7.47
				],
				[
					"c",
					1.38,
					-.3,
					2.58,
					.9,
					2.31,
					2.25
				],
				[
					"c",
					-.15,
					.72,
					-.78,
					1.35,
					-1.47,
					1.5
				],
				[
					"c",
					-1.38,
					.27,
					-2.58,
					-.93,
					-2.31,
					-2.31
				],
				[
					"c",
					.15,
					-.69,
					.78,
					-1.29,
					1.47,
					-1.44
				],
				["z"]
			],
			w: 19.748,
			h: 11.289
		},
		"scripts.dfermata": {
			d: [
				[
					"M",
					-9.63,
					-.42
				],
				[
					"c",
					.15,
					-.09,
					.36,
					-.06,
					.51,
					.03
				],
				[
					"c",
					.12,
					.09,
					.18,
					.24,
					.27,
					.66
				],
				[
					"c",
					.78,
					3.66,
					3.42,
					6.57,
					6.78,
					7.41
				],
				[
					"c",
					.78,
					.21,
					1.2,
					.24,
					2.07,
					.24
				],
				[
					"c",
					.63,
					0,
					.84,
					0,
					1.2,
					-.06
				],
				[
					"c",
					1.83,
					-.27,
					3.42,
					-1.08,
					4.8,
					-2.37
				],
				[
					"c",
					1.41,
					-1.35,
					2.4,
					-3.21,
					2.85,
					-5.22
				],
				[
					"c",
					.09,
					-.42,
					.15,
					-.57,
					.27,
					-.66
				],
				[
					"c",
					.21,
					-.15,
					.57,
					-.09,
					.69,
					.12
				],
				[
					"c",
					.09,
					.12,
					.09,
					.18,
					-.03,
					.69
				],
				[
					"c",
					-.33,
					1.62,
					-.78,
					3,
					-1.47,
					4.38
				],
				[
					"c",
					-1.92,
					3.84,
					-4.89,
					6,
					-8.31,
					6
				],
				[
					"c",
					-3.42,
					0,
					-6.39,
					-2.16,
					-8.31,
					-6
				],
				[
					"c",
					-.48,
					-.96,
					-.84,
					-1.92,
					-1.14,
					-2.97
				],
				[
					"c",
					-.18,
					-.69,
					-.42,
					-1.74,
					-.42,
					-1.92
				],
				[
					"c",
					0,
					-.12,
					.09,
					-.27,
					.24,
					-.33
				],
				["z"],
				[
					"m",
					9.21,
					0
				],
				[
					"c",
					1.2,
					-.27,
					2.34,
					.63,
					2.34,
					1.86
				],
				[
					"c",
					0,
					.9,
					-.66,
					1.68,
					-1.5,
					1.89
				],
				[
					"c",
					-1.38,
					.27,
					-2.58,
					-.93,
					-2.31,
					-2.31
				],
				[
					"c",
					.15,
					-.69,
					.78,
					-1.29,
					1.47,
					-1.44
				],
				["z"]
			],
			w: 19.744,
			h: 11.274
		},
		"scripts.sforzato": {
			d: [
				[
					"M",
					-6.45,
					-3.69
				],
				[
					"c",
					.06,
					-.03,
					.15,
					-.06,
					.18,
					-.06
				],
				[
					"c",
					.06,
					0,
					2.85,
					.72,
					6.24,
					1.59
				],
				[
					"l",
					6.33,
					1.65
				],
				[
					"c",
					.33,
					.06,
					.45,
					.21,
					.45,
					.51
				],
				[
					"c",
					0,
					.3,
					-.12,
					.45,
					-.45,
					.51
				],
				[
					"l",
					-6.33,
					1.65
				],
				[
					"c",
					-3.39,
					.87,
					-6.18,
					1.59,
					-6.21,
					1.59
				],
				[
					"c",
					-.21,
					0,
					-.48,
					-.24,
					-.51,
					-.45
				],
				[
					"c",
					0,
					-.15,
					.06,
					-.36,
					.18,
					-.45
				],
				[
					"c",
					.09,
					-.06,
					.87,
					-.27,
					3.84,
					-1.05
				],
				[
					"c",
					2.04,
					-.54,
					3.84,
					-.99,
					4.02,
					-1.02
				],
				[
					"c",
					.15,
					-.06,
					1.14,
					-.24,
					2.22,
					-.42
				],
				[
					"c",
					1.05,
					-.18,
					1.92,
					-.36,
					1.92,
					-.36
				],
				[
					"c",
					0,
					0,
					-.87,
					-.18,
					-1.92,
					-.36
				],
				[
					"c",
					-1.08,
					-.18,
					-2.07,
					-.36,
					-2.22,
					-.42
				],
				[
					"c",
					-.18,
					-.03,
					-1.98,
					-.48,
					-4.02,
					-1.02
				],
				[
					"c",
					-2.97,
					-.78,
					-3.75,
					-.99,
					-3.84,
					-1.05
				],
				[
					"c",
					-.12,
					-.09,
					-.18,
					-.3,
					-.18,
					-.45
				],
				[
					"c",
					.03,
					-.15,
					.15,
					-.3,
					.3,
					-.39
				],
				["z"]
			],
			w: 13.5,
			h: 7.5
		},
		"scripts.staccato": {
			d: [
				[
					"M",
					-.36,
					-1.47
				],
				[
					"c",
					.93,
					-.21,
					1.86,
					.51,
					1.86,
					1.47
				],
				[
					"c",
					0,
					.93,
					-.87,
					1.65,
					-1.8,
					1.47
				],
				[
					"c",
					-.54,
					-.12,
					-1.02,
					-.57,
					-1.14,
					-1.08
				],
				[
					"c",
					-.21,
					-.81,
					.27,
					-1.65,
					1.08,
					-1.86
				],
				["z"]
			],
			w: 2.989,
			h: 3.004
		},
		"scripts.tenuto": {
			d: [
				[
					"M",
					-4.2,
					-.48
				],
				[
					"l",
					.12,
					-.06
				],
				[
					"l",
					4.08,
					0
				],
				[
					"l",
					4.08,
					0
				],
				[
					"l",
					.12,
					.06
				],
				[
					"c",
					.39,
					.21,
					.39,
					.75,
					0,
					.96
				],
				[
					"l",
					-.12,
					.06
				],
				[
					"l",
					-4.08,
					0
				],
				[
					"l",
					-4.08,
					0
				],
				[
					"l",
					-.12,
					-.06
				],
				[
					"c",
					-.39,
					-.21,
					-.39,
					-.75,
					0,
					-.96
				],
				["z"]
			],
			w: 8.985,
			h: 1.08
		},
		"scripts.umarcato": {
			d: [
				[
					"M",
					-.15,
					-8.19
				],
				[
					"c",
					.15,
					-.12,
					.36,
					-.03,
					.45,
					.15
				],
				[
					"c",
					.21,
					.42,
					3.45,
					7.65,
					3.45,
					7.71
				],
				[
					"c",
					0,
					.12,
					-.12,
					.27,
					-.21,
					.3
				],
				[
					"c",
					-.03,
					.03,
					-.51,
					.03,
					-1.14,
					.03
				],
				[
					"c",
					-1.05,
					0,
					-1.08,
					0,
					-1.17,
					-.06
				],
				[
					"c",
					-.09,
					-.06,
					-.24,
					-.36,
					-1.17,
					-2.4
				],
				[
					"c",
					-.57,
					-1.29,
					-1.05,
					-2.34,
					-1.08,
					-2.34
				],
				[
					"c",
					0,
					-.03,
					-.51,
					1.02,
					-1.08,
					2.34
				],
				[
					"c",
					-.93,
					2.07,
					-1.08,
					2.34,
					-1.14,
					2.4
				],
				[
					"c",
					-.06,
					.03,
					-.15,
					.06,
					-.18,
					.06
				],
				[
					"c",
					-.15,
					0,
					-.33,
					-.18,
					-.33,
					-.33
				],
				[
					"c",
					0,
					-.06,
					3.24,
					-7.32,
					3.45,
					-7.71
				],
				[
					"c",
					.03,
					-.06,
					.09,
					-.15,
					.15,
					-.15
				],
				["z"]
			],
			w: 7.5,
			h: 8.245
		},
		"scripts.dmarcato": {
			d: [
				[
					"M",
					-3.57,
					.03
				],
				[
					"c",
					.03,
					0,
					.57,
					-.03,
					1.17,
					-.03
				],
				[
					"c",
					1.05,
					0,
					1.08,
					0,
					1.17,
					.06
				],
				[
					"c",
					.09,
					.06,
					.24,
					.36,
					1.17,
					2.4
				],
				[
					"c",
					.57,
					1.29,
					1.05,
					2.34,
					1.08,
					2.34
				],
				[
					"c",
					0,
					.03,
					.51,
					-1.02,
					1.08,
					-2.34
				],
				[
					"c",
					.93,
					-2.07,
					1.08,
					-2.34,
					1.14,
					-2.4
				],
				[
					"c",
					.06,
					-.03,
					.15,
					-.06,
					.18,
					-.06
				],
				[
					"c",
					.15,
					0,
					.33,
					.18,
					.33,
					.33
				],
				[
					"c",
					0,
					.09,
					-3.45,
					7.74,
					-3.54,
					7.83
				],
				[
					"c",
					-.12,
					.12,
					-.3,
					.12,
					-.42,
					0
				],
				[
					"c",
					-.09,
					-.09,
					-3.54,
					-7.74,
					-3.54,
					-7.83
				],
				[
					"c",
					0,
					-.09,
					.12,
					-.27,
					.18,
					-.3
				],
				["z"]
			],
			w: 7.5,
			h: 8.25
		},
		"scripts.stopped": {
			d: [
				[
					"M",
					-.27,
					-4.08
				],
				[
					"c",
					.18,
					-.09,
					.36,
					-.09,
					.54,
					0
				],
				[
					"c",
					.18,
					.09,
					.24,
					.15,
					.33,
					.3
				],
				[
					"l",
					.06,
					.15
				],
				[
					"l",
					0,
					1.5
				],
				[
					"l",
					0,
					1.47
				],
				[
					"l",
					1.47,
					0
				],
				[
					"l",
					1.5,
					0
				],
				[
					"l",
					.15,
					.06
				],
				[
					"c",
					.15,
					.09,
					.21,
					.15,
					.3,
					.33
				],
				[
					"c",
					.09,
					.18,
					.09,
					.36,
					0,
					.54
				],
				[
					"c",
					-.09,
					.18,
					-.15,
					.24,
					-.33,
					.33
				],
				[
					"c",
					-.12,
					.06,
					-.18,
					.06,
					-1.62,
					.06
				],
				[
					"l",
					-1.47,
					0
				],
				[
					"l",
					0,
					1.47
				],
				[
					"l",
					0,
					1.47
				],
				[
					"l",
					-.06,
					.15
				],
				[
					"c",
					-.09,
					.18,
					-.15,
					.24,
					-.33,
					.33
				],
				[
					"c",
					-.18,
					.09,
					-.36,
					.09,
					-.54,
					0
				],
				[
					"c",
					-.18,
					-.09,
					-.24,
					-.15,
					-.33,
					-.33
				],
				[
					"l",
					-.06,
					-.15
				],
				[
					"l",
					0,
					-1.47
				],
				[
					"l",
					0,
					-1.47
				],
				[
					"l",
					-1.47,
					0
				],
				[
					"c",
					-1.44,
					0,
					-1.5,
					0,
					-1.62,
					-.06
				],
				[
					"c",
					-.18,
					-.09,
					-.24,
					-.15,
					-.33,
					-.33
				],
				[
					"c",
					-.09,
					-.18,
					-.09,
					-.36,
					0,
					-.54
				],
				[
					"c",
					.09,
					-.18,
					.15,
					-.24,
					.33,
					-.33
				],
				[
					"l",
					.15,
					-.06
				],
				[
					"l",
					1.47,
					0
				],
				[
					"l",
					1.47,
					0
				],
				[
					"l",
					0,
					-1.47
				],
				[
					"c",
					0,
					-1.44,
					0,
					-1.5,
					.06,
					-1.62
				],
				[
					"c",
					.09,
					-.18,
					.15,
					-.24,
					.33,
					-.33
				],
				["z"]
			],
			w: 8.295,
			h: 8.295
		},
		"scripts.upbow": {
			d: [
				[
					"M",
					-4.65,
					-15.54
				],
				[
					"c",
					.12,
					-.09,
					.36,
					-.06,
					.48,
					.03
				],
				[
					"c",
					.03,
					.03,
					.09,
					.09,
					.12,
					.15
				],
				[
					"c",
					.03,
					.06,
					.66,
					2.13,
					1.41,
					4.62
				],
				[
					"c",
					1.35,
					4.41,
					1.38,
					4.56,
					2.01,
					6.96
				],
				[
					"l",
					.63,
					2.46
				],
				[
					"l",
					.63,
					-2.46
				],
				[
					"c",
					.63,
					-2.4,
					.66,
					-2.55,
					2.01,
					-6.96
				],
				[
					"c",
					.75,
					-2.49,
					1.38,
					-4.56,
					1.41,
					-4.62
				],
				[
					"c",
					.06,
					-.15,
					.18,
					-.21,
					.36,
					-.24
				],
				[
					"c",
					.15,
					0,
					.3,
					.06,
					.39,
					.18
				],
				[
					"c",
					.15,
					.21,
					.24,
					-.18,
					-2.1,
					7.56
				],
				[
					"c",
					-1.2,
					3.96,
					-2.22,
					7.32,
					-2.25,
					7.41
				],
				[
					"c",
					0,
					.12,
					-.06,
					.27,
					-.09,
					.3
				],
				[
					"c",
					-.12,
					.21,
					-.6,
					.21,
					-.72,
					0
				],
				[
					"c",
					-.03,
					-.03,
					-.09,
					-.18,
					-.09,
					-.3
				],
				[
					"c",
					-.03,
					-.09,
					-1.05,
					-3.45,
					-2.25,
					-7.41
				],
				[
					"c",
					-2.34,
					-7.74,
					-2.25,
					-7.35,
					-2.1,
					-7.56
				],
				[
					"c",
					.03,
					-.03,
					.09,
					-.09,
					.15,
					-.12
				],
				["z"]
			],
			w: 9.73,
			h: 15.608
		},
		"scripts.downbow": {
			d: [
				[
					"M",
					-5.55,
					-9.93
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"l",
					5.46,
					0
				],
				[
					"l",
					5.46,
					0
				],
				[
					"l",
					.09,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					4.77
				],
				[
					"c",
					0,
					5.28,
					0,
					4.89,
					-.18,
					5.01
				],
				[
					"c",
					-.18,
					.12,
					-.42,
					.06,
					-.54,
					-.12
				],
				[
					"c",
					-.06,
					-.09,
					-.06,
					-.18,
					-.06,
					-2.97
				],
				[
					"l",
					0,
					-2.85
				],
				[
					"l",
					-4.83,
					0
				],
				[
					"l",
					-4.83,
					0
				],
				[
					"l",
					0,
					2.85
				],
				[
					"c",
					0,
					2.79,
					0,
					2.88,
					-.06,
					2.97
				],
				[
					"c",
					-.15,
					.24,
					-.51,
					.24,
					-.66,
					0
				],
				[
					"c",
					-.06,
					-.09,
					-.06,
					-.21,
					-.06,
					-4.89
				],
				[
					"l",
					0,
					-4.77
				],
				["z"]
			],
			w: 11.22,
			h: 9.992
		},
		"scripts.turn": {
			d: [
				[
					"M",
					-4.77,
					-3.9
				],
				[
					"c",
					.36,
					-.06,
					1.05,
					-.06,
					1.44,
					.03
				],
				[
					"c",
					.78,
					.15,
					1.5,
					.51,
					2.34,
					1.14
				],
				[
					"c",
					.6,
					.45,
					1.05,
					.87,
					2.22,
					2.01
				],
				[
					"c",
					1.11,
					1.08,
					1.62,
					1.5,
					2.22,
					1.86
				],
				[
					"c",
					.6,
					.36,
					1.32,
					.57,
					1.92,
					.57
				],
				[
					"c",
					.9,
					0,
					1.71,
					-.57,
					1.89,
					-1.35
				],
				[
					"c",
					.24,
					-.93,
					-.39,
					-1.89,
					-1.35,
					-2.1
				],
				[
					"l",
					-.15,
					-.06
				],
				[
					"l",
					-.09,
					.15
				],
				[
					"c",
					-.03,
					.09,
					-.15,
					.24,
					-.24,
					.33
				],
				[
					"c",
					-.72,
					.72,
					-2.04,
					.54,
					-2.49,
					-.36
				],
				[
					"c",
					-.48,
					-.93,
					.03,
					-1.86,
					1.17,
					-2.19
				],
				[
					"c",
					.3,
					-.09,
					1.02,
					-.09,
					1.35,
					0
				],
				[
					"c",
					.99,
					.27,
					1.74,
					.87,
					2.25,
					1.83
				],
				[
					"c",
					.69,
					1.41,
					.63,
					3,
					-.21,
					4.26
				],
				[
					"c",
					-.21,
					.3,
					-.69,
					.81,
					-.99,
					1.02
				],
				[
					"c",
					-.3,
					.21,
					-.84,
					.45,
					-1.17,
					.54
				],
				[
					"c",
					-1.23,
					.36,
					-2.49,
					.15,
					-3.72,
					-.6
				],
				[
					"c",
					-.75,
					-.48,
					-1.41,
					-1.02,
					-2.85,
					-2.46
				],
				[
					"c",
					-1.11,
					-1.08,
					-1.62,
					-1.5,
					-2.22,
					-1.86
				],
				[
					"c",
					-.6,
					-.36,
					-1.32,
					-.57,
					-1.92,
					-.57
				],
				[
					"c",
					-.9,
					0,
					-1.71,
					.57,
					-1.89,
					1.35
				],
				[
					"c",
					-.24,
					.93,
					.39,
					1.89,
					1.35,
					2.1
				],
				[
					"l",
					.15,
					.06
				],
				[
					"l",
					.09,
					-.15
				],
				[
					"c",
					.03,
					-.09,
					.15,
					-.24,
					.24,
					-.33
				],
				[
					"c",
					.72,
					-.72,
					2.04,
					-.54,
					2.49,
					.36
				],
				[
					"c",
					.48,
					.93,
					-.03,
					1.86,
					-1.17,
					2.19
				],
				[
					"c",
					-.3,
					.09,
					-1.02,
					.09,
					-1.35,
					0
				],
				[
					"c",
					-.99,
					-.27,
					-1.74,
					-.87,
					-2.25,
					-1.83
				],
				[
					"c",
					-.69,
					-1.41,
					-.63,
					-3,
					.21,
					-4.26
				],
				[
					"c",
					.21,
					-.3,
					.69,
					-.81,
					.99,
					-1.02
				],
				[
					"c",
					.48,
					-.33,
					1.11,
					-.57,
					1.74,
					-.66
				],
				["z"]
			],
			w: 16.366,
			h: 7.893
		},
		"scripts.trill": {
			d: [
				[
					"M",
					-.51,
					-16.02
				],
				[
					"c",
					.12,
					-.09,
					.21,
					-.18,
					.21,
					-.18
				],
				[
					"l",
					-.81,
					4.02
				],
				[
					"l",
					-.81,
					4.02
				],
				[
					"c",
					.03,
					0,
					.51,
					-.27,
					1.08,
					-.6
				],
				[
					"c",
					.6,
					-.3,
					1.14,
					-.63,
					1.26,
					-.66
				],
				[
					"c",
					1.14,
					-.54,
					2.31,
					-.6,
					3.09,
					-.18
				],
				[
					"c",
					.27,
					.15,
					.54,
					.36,
					.6,
					.51
				],
				[
					"l",
					.06,
					.12
				],
				[
					"l",
					.21,
					-.21
				],
				[
					"c",
					.9,
					-.81,
					2.22,
					-.99,
					3.12,
					-.42
				],
				[
					"c",
					.6,
					.42,
					.9,
					1.14,
					.78,
					2.07
				],
				[
					"c",
					-.15,
					1.29,
					-1.05,
					2.31,
					-1.95,
					2.25
				],
				[
					"c",
					-.48,
					-.03,
					-.78,
					-.3,
					-.96,
					-.81
				],
				[
					"c",
					-.09,
					-.27,
					-.09,
					-.9,
					-.03,
					-1.2
				],
				[
					"c",
					.21,
					-.75,
					.81,
					-1.23,
					1.59,
					-1.32
				],
				[
					"l",
					.24,
					-.03
				],
				[
					"l",
					-.09,
					-.12
				],
				[
					"c",
					-.51,
					-.66,
					-1.62,
					-.63,
					-2.31,
					.03
				],
				[
					"c",
					-.39,
					.42,
					-.3,
					.09,
					-1.23,
					4.77
				],
				[
					"l",
					-.81,
					4.14
				],
				[
					"c",
					-.03,
					0,
					-.12,
					-.03,
					-.21,
					-.09
				],
				[
					"c",
					-.33,
					-.15,
					-.54,
					-.18,
					-.99,
					-.18
				],
				[
					"c",
					-.42,
					0,
					-.66,
					.03,
					-1.05,
					.18
				],
				[
					"c",
					-.12,
					.06,
					-.21,
					.09,
					-.21,
					.09
				],
				[
					"c",
					0,
					-.03,
					.36,
					-1.86,
					.81,
					-4.11
				],
				[
					"c",
					.9,
					-4.47,
					.87,
					-4.26,
					.69,
					-4.53
				],
				[
					"c",
					-.21,
					-.36,
					-.66,
					-.51,
					-1.17,
					-.36
				],
				[
					"c",
					-.15,
					.06,
					-2.22,
					1.14,
					-2.58,
					1.38
				],
				[
					"c",
					-.12,
					.09,
					-.12,
					.09,
					-.21,
					.6
				],
				[
					"l",
					-.09,
					.51
				],
				[
					"l",
					.21,
					.24
				],
				[
					"c",
					.63,
					.75,
					1.02,
					1.47,
					1.2,
					2.19
				],
				[
					"c",
					.06,
					.27,
					.06,
					.36,
					.06,
					.81
				],
				[
					"c",
					0,
					.42,
					0,
					.54,
					-.06,
					.78
				],
				[
					"c",
					-.15,
					.54,
					-.33,
					.93,
					-.63,
					1.35
				],
				[
					"c",
					-.18,
					.24,
					-.57,
					.63,
					-.81,
					.78
				],
				[
					"c",
					-.24,
					.15,
					-.63,
					.36,
					-.84,
					.42
				],
				[
					"c",
					-.27,
					.06,
					-.66,
					.06,
					-.87,
					.03
				],
				[
					"c",
					-.81,
					-.18,
					-1.32,
					-1.05,
					-1.38,
					-2.46
				],
				[
					"c",
					-.03,
					-.6,
					.03,
					-.99,
					.33,
					-2.46
				],
				[
					"c",
					.21,
					-1.08,
					.24,
					-1.32,
					.21,
					-1.29
				],
				[
					"c",
					-1.2,
					.48,
					-2.4,
					.75,
					-3.21,
					.72
				],
				[
					"c",
					-.69,
					-.06,
					-1.17,
					-.3,
					-1.41,
					-.72
				],
				[
					"c",
					-.39,
					-.75,
					-.12,
					-1.8,
					.66,
					-2.46
				],
				[
					"c",
					.24,
					-.18,
					.69,
					-.42,
					1.02,
					-.51
				],
				[
					"c",
					.69,
					-.18,
					1.53,
					-.15,
					2.31,
					.09
				],
				[
					"c",
					.3,
					.09,
					.75,
					.3,
					.99,
					.45
				],
				[
					"c",
					.12,
					.09,
					.15,
					.09,
					.15,
					.03
				],
				[
					"c",
					.03,
					-.03,
					.33,
					-1.59,
					.72,
					-3.45
				],
				[
					"c",
					.36,
					-1.86,
					.66,
					-3.42,
					.69,
					-3.45
				],
				[
					"c",
					0,
					-.03,
					.03,
					-.03,
					.21,
					.03
				],
				[
					"c",
					.21,
					.06,
					.27,
					.06,
					.48,
					.06
				],
				[
					"c",
					.42,
					-.03,
					.78,
					-.18,
					1.26,
					-.48
				],
				[
					"c",
					.15,
					-.12,
					.36,
					-.27,
					.48,
					-.39
				],
				["z"],
				[
					"m",
					-5.73,
					7.68
				],
				[
					"c",
					-.27,
					-.03,
					-.96,
					-.06,
					-1.2,
					-.03
				],
				[
					"c",
					-.81,
					.12,
					-1.35,
					.57,
					-1.5,
					1.2
				],
				[
					"c",
					-.18,
					.66,
					.12,
					1.14,
					.75,
					1.29
				],
				[
					"c",
					.66,
					.12,
					1.92,
					-.12,
					3.18,
					-.66
				],
				[
					"l",
					.33,
					-.15
				],
				[
					"l",
					.09,
					-.39
				],
				[
					"c",
					.06,
					-.21,
					.09,
					-.42,
					.09,
					-.45
				],
				[
					"c",
					0,
					-.03,
					-.45,
					-.3,
					-.75,
					-.45
				],
				[
					"c",
					-.27,
					-.15,
					-.66,
					-.27,
					-.99,
					-.36
				],
				["z"],
				[
					"m",
					4.29,
					3.63
				],
				[
					"c",
					-.24,
					-.39,
					-.51,
					-.75,
					-.51,
					-.69
				],
				[
					"c",
					-.06,
					.12,
					-.39,
					1.92,
					-.45,
					2.28
				],
				[
					"c",
					-.09,
					.54,
					-.12,
					1.14,
					-.06,
					1.38
				],
				[
					"c",
					.06,
					.42,
					.21,
					.6,
					.51,
					.57
				],
				[
					"c",
					.39,
					-.06,
					.75,
					-.48,
					.93,
					-1.14
				],
				[
					"c",
					.09,
					-.33,
					.09,
					-1.05,
					0,
					-1.38
				],
				[
					"c",
					-.09,
					-.39,
					-.24,
					-.69,
					-.42,
					-1.02
				],
				["z"]
			],
			w: 17.963,
			h: 16.49
		},
		"scripts.segno": {
			d: [
				[
					"M",
					-3.72,
					-11.22
				],
				[
					"c",
					.78,
					-.09,
					1.59,
					.03,
					2.31,
					.42
				],
				[
					"c",
					1.2,
					.6,
					2.01,
					1.71,
					2.31,
					3.09
				],
				[
					"c",
					.09,
					.42,
					.09,
					1.2,
					.03,
					1.5
				],
				[
					"c",
					-.15,
					.45,
					-.39,
					.81,
					-.66,
					.93
				],
				[
					"c",
					-.33,
					.18,
					-.84,
					.21,
					-1.23,
					.15
				],
				[
					"c",
					-.81,
					-.18,
					-1.32,
					-.93,
					-1.26,
					-1.89
				],
				[
					"c",
					.03,
					-.36,
					.09,
					-.57,
					.24,
					-.9
				],
				[
					"c",
					.15,
					-.33,
					.45,
					-.6,
					.72,
					-.75
				],
				[
					"c",
					.12,
					-.06,
					.18,
					-.09,
					.18,
					-.12
				],
				[
					"c",
					0,
					-.03,
					-.03,
					-.15,
					-.09,
					-.24
				],
				[
					"c",
					-.18,
					-.45,
					-.54,
					-.87,
					-.96,
					-1.08
				],
				[
					"c",
					-1.11,
					-.57,
					-2.34,
					-.18,
					-2.88,
					.9
				],
				[
					"c",
					-.24,
					.51,
					-.33,
					1.11,
					-.24,
					1.83
				],
				[
					"c",
					.27,
					1.92,
					1.5,
					3.54,
					3.93,
					5.13
				],
				[
					"c",
					.48,
					.33,
					1.26,
					.78,
					1.29,
					.78
				],
				[
					"c",
					.03,
					0,
					1.35,
					-2.19,
					2.94,
					-4.89
				],
				[
					"l",
					2.88,
					-4.89
				],
				[
					"l",
					.84,
					0
				],
				[
					"l",
					.87,
					0
				],
				[
					"l",
					-.03,
					.06
				],
				[
					"c",
					-.15,
					.21,
					-6.15,
					10.41,
					-6.15,
					10.44
				],
				[
					"c",
					0,
					0,
					.21,
					.15,
					.48,
					.27
				],
				[
					"c",
					2.61,
					1.47,
					4.35,
					3.03,
					5.13,
					4.65
				],
				[
					"c",
					1.14,
					2.34,
					.51,
					5.07,
					-1.44,
					6.39
				],
				[
					"c",
					-.66,
					.42,
					-1.32,
					.63,
					-2.13,
					.69
				],
				[
					"c",
					-2.01,
					.09,
					-3.81,
					-1.41,
					-4.26,
					-3.54
				],
				[
					"c",
					-.09,
					-.42,
					-.09,
					-1.2,
					-.03,
					-1.5
				],
				[
					"c",
					.15,
					-.45,
					.39,
					-.81,
					.66,
					-.93
				],
				[
					"c",
					.33,
					-.18,
					.84,
					-.21,
					1.23,
					-.15
				],
				[
					"c",
					.81,
					.18,
					1.32,
					.93,
					1.26,
					1.89
				],
				[
					"c",
					-.03,
					.36,
					-.09,
					.57,
					-.24,
					.9
				],
				[
					"c",
					-.15,
					.33,
					-.45,
					.6,
					-.72,
					.75
				],
				[
					"c",
					-.12,
					.06,
					-.18,
					.09,
					-.18,
					.12
				],
				[
					"c",
					0,
					.03,
					.03,
					.15,
					.09,
					.24
				],
				[
					"c",
					.18,
					.45,
					.54,
					.87,
					.96,
					1.08
				],
				[
					"c",
					1.11,
					.57,
					2.34,
					.18,
					2.88,
					-.9
				],
				[
					"c",
					.24,
					-.51,
					.33,
					-1.11,
					.24,
					-1.83
				],
				[
					"c",
					-.27,
					-1.92,
					-1.5,
					-3.54,
					-3.93,
					-5.13
				],
				[
					"c",
					-.48,
					-.33,
					-1.26,
					-.78,
					-1.29,
					-.78
				],
				[
					"c",
					-.03,
					0,
					-1.35,
					2.19,
					-2.91,
					4.89
				],
				[
					"l",
					-2.88,
					4.89
				],
				[
					"l",
					-.87,
					0
				],
				[
					"l",
					-.87,
					0
				],
				[
					"l",
					.03,
					-.06
				],
				[
					"c",
					.15,
					-.21,
					6.15,
					-10.41,
					6.15,
					-10.44
				],
				[
					"c",
					0,
					0,
					-.21,
					-.15,
					-.48,
					-.3
				],
				[
					"c",
					-2.61,
					-1.44,
					-4.35,
					-3,
					-5.13,
					-4.62
				],
				[
					"c",
					-.9,
					-1.89,
					-.72,
					-4.02,
					.48,
					-5.52
				],
				[
					"c",
					.69,
					-.84,
					1.68,
					-1.41,
					2.73,
					-1.53
				],
				["z"],
				[
					"m",
					8.76,
					9.09
				],
				[
					"c",
					.03,
					-.03,
					.15,
					-.03,
					.27,
					-.03
				],
				[
					"c",
					.33,
					.03,
					.57,
					.18,
					.72,
					.48
				],
				[
					"c",
					.09,
					.18,
					.09,
					.57,
					0,
					.75
				],
				[
					"c",
					-.09,
					.18,
					-.21,
					.3,
					-.36,
					.39
				],
				[
					"c",
					-.15,
					.06,
					-.21,
					.06,
					-.39,
					.06
				],
				[
					"c",
					-.21,
					0,
					-.27,
					0,
					-.39,
					-.06
				],
				[
					"c",
					-.3,
					-.15,
					-.48,
					-.45,
					-.48,
					-.75
				],
				[
					"c",
					0,
					-.39,
					.24,
					-.72,
					.63,
					-.84
				],
				["z"],
				[
					"m",
					-10.53,
					2.61
				],
				[
					"c",
					.03,
					-.03,
					.15,
					-.03,
					.27,
					-.03
				],
				[
					"c",
					.33,
					.03,
					.57,
					.18,
					.72,
					.48
				],
				[
					"c",
					.09,
					.18,
					.09,
					.57,
					0,
					.75
				],
				[
					"c",
					-.09,
					.18,
					-.21,
					.3,
					-.36,
					.39
				],
				[
					"c",
					-.15,
					.06,
					-.21,
					.06,
					-.39,
					.06
				],
				[
					"c",
					-.21,
					0,
					-.27,
					0,
					-.39,
					-.06
				],
				[
					"c",
					-.3,
					-.15,
					-.48,
					-.45,
					-.48,
					-.75
				],
				[
					"c",
					0,
					-.39,
					.24,
					-.72,
					.63,
					-.84
				],
				["z"]
			],
			w: 15,
			h: 22.504
		},
		"scripts.coda": {
			d: [
				[
					"M",
					-.21,
					-10.47
				],
				[
					"c",
					.18,
					-.12,
					.42,
					-.06,
					.54,
					.12
				],
				[
					"c",
					.06,
					.09,
					.06,
					.18,
					.06,
					1.5
				],
				[
					"l",
					0,
					1.38
				],
				[
					"l",
					.18,
					0
				],
				[
					"c",
					.39,
					.06,
					.96,
					.24,
					1.38,
					.48
				],
				[
					"c",
					1.68,
					.93,
					2.82,
					3.24,
					3.03,
					6.12
				],
				[
					"c",
					.03,
					.24,
					.03,
					.45,
					.03,
					.45
				],
				[
					"c",
					0,
					.03,
					.6,
					.03,
					1.35,
					.03
				],
				[
					"c",
					1.5,
					0,
					1.47,
					0,
					1.59,
					.18
				],
				[
					"c",
					.09,
					.12,
					.09,
					.3,
					0,
					.42
				],
				[
					"c",
					-.12,
					.18,
					-.09,
					.18,
					-1.59,
					.18
				],
				[
					"c",
					-.75,
					0,
					-1.35,
					0,
					-1.35,
					.03
				],
				[
					"c",
					0,
					0,
					0,
					.21,
					-.03,
					.42
				],
				[
					"c",
					-.24,
					3.15,
					-1.53,
					5.58,
					-3.45,
					6.36
				],
				[
					"c",
					-.27,
					.12,
					-.72,
					.24,
					-.96,
					.27
				],
				[
					"l",
					-.18,
					0
				],
				[
					"l",
					0,
					1.38
				],
				[
					"c",
					0,
					1.32,
					0,
					1.41,
					-.06,
					1.5
				],
				[
					"c",
					-.15,
					.24,
					-.51,
					.24,
					-.66,
					0
				],
				[
					"c",
					-.06,
					-.09,
					-.06,
					-.18,
					-.06,
					-1.5
				],
				[
					"l",
					0,
					-1.38
				],
				[
					"l",
					-.18,
					0
				],
				[
					"c",
					-.39,
					-.06,
					-.96,
					-.24,
					-1.38,
					-.48
				],
				[
					"c",
					-1.68,
					-.93,
					-2.82,
					-3.24,
					-3.03,
					-6.15
				],
				[
					"c",
					-.03,
					-.21,
					-.03,
					-.42,
					-.03,
					-.42
				],
				[
					"c",
					0,
					-.03,
					-.6,
					-.03,
					-1.35,
					-.03
				],
				[
					"c",
					-1.5,
					0,
					-1.47,
					0,
					-1.59,
					-.18
				],
				[
					"c",
					-.09,
					-.12,
					-.09,
					-.3,
					0,
					-.42
				],
				[
					"c",
					.12,
					-.18,
					.09,
					-.18,
					1.59,
					-.18
				],
				[
					"c",
					.75,
					0,
					1.35,
					0,
					1.35,
					-.03
				],
				[
					"c",
					0,
					0,
					0,
					-.21,
					.03,
					-.45
				],
				[
					"c",
					.24,
					-3.12,
					1.53,
					-5.55,
					3.45,
					-6.33
				],
				[
					"c",
					.27,
					-.12,
					.72,
					-.24,
					.96,
					-.27
				],
				[
					"l",
					.18,
					0
				],
				[
					"l",
					0,
					-1.38
				],
				[
					"c",
					0,
					-1.53,
					0,
					-1.5,
					.18,
					-1.62
				],
				["z"],
				[
					"m",
					-.18,
					6.93
				],
				[
					"c",
					0,
					-2.97,
					0,
					-3.15,
					-.06,
					-3.15
				],
				[
					"c",
					-.09,
					0,
					-.51,
					.15,
					-.66,
					.21
				],
				[
					"c",
					-.87,
					.51,
					-1.38,
					1.62,
					-1.56,
					3.51
				],
				[
					"c",
					-.06,
					.54,
					-.12,
					1.59,
					-.12,
					2.16
				],
				[
					"l",
					0,
					.42
				],
				[
					"l",
					1.2,
					0
				],
				[
					"l",
					1.2,
					0
				],
				[
					"l",
					0,
					-3.15
				],
				["z"],
				[
					"m",
					1.17,
					-3.06
				],
				[
					"c",
					-.09,
					-.03,
					-.21,
					-.06,
					-.27,
					-.09
				],
				[
					"l",
					-.12,
					0
				],
				[
					"l",
					0,
					3.15
				],
				[
					"l",
					0,
					3.15
				],
				[
					"l",
					1.2,
					0
				],
				[
					"l",
					1.2,
					0
				],
				[
					"l",
					0,
					-.81
				],
				[
					"c",
					-.06,
					-2.4,
					-.33,
					-3.69,
					-.93,
					-4.59
				],
				[
					"c",
					-.27,
					-.39,
					-.66,
					-.69,
					-1.08,
					-.81
				],
				["z"],
				[
					"m",
					-1.17,
					10.14
				],
				[
					"l",
					0,
					-3.15
				],
				[
					"l",
					-1.2,
					0
				],
				[
					"l",
					-1.2,
					0
				],
				[
					"l",
					0,
					.81
				],
				[
					"c",
					.03,
					.96,
					.06,
					1.47,
					.15,
					2.13
				],
				[
					"c",
					.24,
					2.04,
					.96,
					3.12,
					2.13,
					3.36
				],
				[
					"l",
					.12,
					0
				],
				[
					"l",
					0,
					-3.15
				],
				["z"],
				[
					"m",
					3.18,
					-2.34
				],
				[
					"l",
					0,
					-.81
				],
				[
					"l",
					-1.2,
					0
				],
				[
					"l",
					-1.2,
					0
				],
				[
					"l",
					0,
					3.15
				],
				[
					"l",
					0,
					3.15
				],
				[
					"l",
					.12,
					0
				],
				[
					"c",
					1.17,
					-.24,
					1.89,
					-1.32,
					2.13,
					-3.36
				],
				[
					"c",
					.09,
					-.66,
					.12,
					-1.17,
					.15,
					-2.13
				],
				["z"]
			],
			w: 16.035,
			h: 21.062
		},
		"scripts.comma": {
			d: [
				[
					"M",
					1.14,
					-4.62
				],
				[
					"c",
					.3,
					-.12,
					.69,
					-.03,
					.93,
					.15
				],
				[
					"c",
					.12,
					.12,
					.36,
					.45,
					.51,
					.78
				],
				[
					"c",
					.9,
					1.77,
					.54,
					4.05,
					-1.08,
					6.75
				],
				[
					"c",
					-.36,
					.63,
					-.87,
					1.38,
					-.96,
					1.44
				],
				[
					"c",
					-.18,
					.12,
					-.42,
					.06,
					-.54,
					-.12
				],
				[
					"c",
					-.09,
					-.18,
					-.09,
					-.3,
					.12,
					-.6
				],
				[
					"c",
					.96,
					-1.44,
					1.44,
					-2.97,
					1.38,
					-4.35
				],
				[
					"c",
					-.06,
					-.93,
					-.3,
					-1.68,
					-.78,
					-2.46
				],
				[
					"c",
					-.27,
					-.39,
					-.33,
					-.63,
					-.24,
					-.96
				],
				[
					"c",
					.09,
					-.27,
					.36,
					-.54,
					.66,
					-.63
				],
				["z"]
			],
			w: 3.042,
			h: 9.237
		},
		"scripts.roll": {
			d: [
				[
					"M",
					1.95,
					-6
				],
				[
					"c",
					.21,
					-.09,
					.36,
					-.09,
					.57,
					0
				],
				[
					"c",
					.39,
					.15,
					.63,
					.39,
					1.47,
					1.35
				],
				[
					"c",
					.66,
					.75,
					.78,
					.87,
					1.08,
					1.05
				],
				[
					"c",
					.75,
					.45,
					1.65,
					.42,
					2.4,
					-.06
				],
				[
					"c",
					.12,
					-.09,
					.27,
					-.27,
					.54,
					-.6
				],
				[
					"c",
					.42,
					-.54,
					.51,
					-.63,
					.69,
					-.63
				],
				[
					"c",
					.09,
					0,
					.3,
					.12,
					.36,
					.21
				],
				[
					"c",
					.09,
					.12,
					.12,
					.3,
					.03,
					.42
				],
				[
					"c",
					-.06,
					.12,
					-3.15,
					3.9,
					-3.3,
					4.08
				],
				[
					"c",
					-.06,
					.06,
					-.18,
					.12,
					-.27,
					.18
				],
				[
					"c",
					-.27,
					.12,
					-.6,
					.06,
					-.99,
					-.27
				],
				[
					"c",
					-.27,
					-.21,
					-.42,
					-.39,
					-1.08,
					-1.14
				],
				[
					"c",
					-.63,
					-.72,
					-.81,
					-.9,
					-1.17,
					-1.08
				],
				[
					"c",
					-.36,
					-.18,
					-.57,
					-.21,
					-.99,
					-.21
				],
				[
					"c",
					-.39,
					0,
					-.63,
					.03,
					-.93,
					.18
				],
				[
					"c",
					-.36,
					.15,
					-.51,
					.27,
					-.9,
					.81
				],
				[
					"c",
					-.24,
					.27,
					-.45,
					.51,
					-.48,
					.54
				],
				[
					"c",
					-.12,
					.09,
					-.27,
					.06,
					-.39,
					0
				],
				[
					"c",
					-.24,
					-.15,
					-.33,
					-.39,
					-.21,
					-.6
				],
				[
					"c",
					.09,
					-.12,
					3.18,
					-3.87,
					3.33,
					-4.02
				],
				[
					"c",
					.06,
					-.06,
					.18,
					-.15,
					.24,
					-.21
				],
				["z"]
			],
			w: 10.817,
			h: 6.125
		},
		"scripts.prall": {
			d: [
				[
					"M",
					-4.38,
					-3.69
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.06,
					.24,
					-.06
				],
				[
					"c",
					.3,
					0,
					.27,
					-.03,
					1.89,
					1.95
				],
				[
					"l",
					1.53,
					1.83
				],
				[
					"c",
					.03,
					0,
					.57,
					-.84,
					1.23,
					-1.83
				],
				[
					"c",
					1.14,
					-1.68,
					1.23,
					-1.83,
					1.35,
					-1.89
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.06,
					.24,
					-.06
				],
				[
					"c",
					.3,
					0,
					.27,
					-.03,
					1.89,
					1.95
				],
				[
					"l",
					1.53,
					1.83
				],
				[
					"l",
					.48,
					-.69
				],
				[
					"c",
					.51,
					-.78,
					.54,
					-.84,
					.69,
					-.9
				],
				[
					"c",
					.42,
					-.18,
					.87,
					.15,
					.81,
					.6
				],
				[
					"c",
					-.03,
					.12,
					-.3,
					.51,
					-1.5,
					2.37
				],
				[
					"c",
					-1.38,
					2.07,
					-1.5,
					2.22,
					-1.62,
					2.28
				],
				[
					"c",
					-.06,
					.03,
					-.18,
					.06,
					-.24,
					.06
				],
				[
					"c",
					-.3,
					0,
					-.27,
					.03,
					-1.89,
					-1.95
				],
				[
					"l",
					-1.53,
					-1.83
				],
				[
					"c",
					-.03,
					0,
					-.57,
					.84,
					-1.23,
					1.83
				],
				[
					"c",
					-1.14,
					1.68,
					-1.23,
					1.83,
					-1.35,
					1.89
				],
				[
					"c",
					-.06,
					.03,
					-.18,
					.06,
					-.24,
					.06
				],
				[
					"c",
					-.3,
					0,
					-.27,
					.03,
					-1.89,
					-1.95
				],
				[
					"l",
					-1.53,
					-1.83
				],
				[
					"l",
					-.48,
					.69
				],
				[
					"c",
					-.51,
					.78,
					-.54,
					.84,
					-.69,
					.9
				],
				[
					"c",
					-.42,
					.18,
					-.87,
					-.15,
					-.81,
					-.6
				],
				[
					"c",
					.03,
					-.12,
					.3,
					-.51,
					1.5,
					-2.37
				],
				[
					"c",
					1.38,
					-2.07,
					1.5,
					-2.22,
					1.62,
					-2.28
				],
				["z"]
			],
			w: 15.011,
			h: 7.5
		},
		"scripts.arpeggio": {
			d: [
				[
					"M",
					1.5,
					0
				],
				[
					"c",
					1.5,
					2,
					1.5,
					3,
					1.5,
					3
				],
				[
					"s",
					0,
					1,
					-2,
					1.5
				],
				[
					"s",
					-.5,
					3,
					1,
					5.5
				],
				[
					"l",
					1.5,
					0
				],
				[
					"s",
					-1.75,
					-2,
					-1.9,
					-3.25
				],
				[
					"s",
					2.15,
					-.6,
					2.95,
					-1.6
				],
				[
					"s",
					.45,
					-1,
					.5,
					-1.25
				],
				[
					"s",
					0,
					-1,
					-2,
					-3.9
				],
				[
					"l",
					-1.5,
					0
				],
				["z"]
			],
			w: 5,
			h: 10
		},
		"scripts.mordent": {
			d: [
				[
					"M",
					-.21,
					-4.95
				],
				[
					"c",
					.27,
					-.15,
					.63,
					0,
					.75,
					.27
				],
				[
					"c",
					.06,
					.12,
					.06,
					.24,
					.06,
					1.44
				],
				[
					"l",
					0,
					1.29
				],
				[
					"l",
					.57,
					-.84
				],
				[
					"c",
					.51,
					-.75,
					.57,
					-.84,
					.69,
					-.9
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.06,
					.24,
					-.06
				],
				[
					"c",
					.3,
					0,
					.27,
					-.03,
					1.89,
					1.95
				],
				[
					"l",
					1.53,
					1.83
				],
				[
					"l",
					.48,
					-.69
				],
				[
					"c",
					.51,
					-.78,
					.54,
					-.84,
					.69,
					-.9
				],
				[
					"c",
					.42,
					-.18,
					.87,
					.15,
					.81,
					.6
				],
				[
					"c",
					-.03,
					.12,
					-.3,
					.51,
					-1.5,
					2.37
				],
				[
					"c",
					-1.38,
					2.07,
					-1.5,
					2.22,
					-1.62,
					2.28
				],
				[
					"c",
					-.06,
					.03,
					-.18,
					.06,
					-.24,
					.06
				],
				[
					"c",
					-.3,
					0,
					-.27,
					.03,
					-1.83,
					-1.89
				],
				[
					"c",
					-.81,
					-.99,
					-1.5,
					-1.8,
					-1.53,
					-1.86
				],
				[
					"c",
					-.06,
					-.03,
					-.06,
					-.03,
					-.12,
					.03
				],
				[
					"c",
					-.06,
					.06,
					-.06,
					.15,
					-.06,
					2.28
				],
				[
					"c",
					0,
					1.95,
					0,
					2.25,
					-.06,
					2.34
				],
				[
					"c",
					-.18,
					.45,
					-.81,
					.48,
					-1.05,
					.03
				],
				[
					"c",
					-.03,
					-.06,
					-.06,
					-.24,
					-.06,
					-1.41
				],
				[
					"l",
					0,
					-1.35
				],
				[
					"l",
					-.57,
					.84
				],
				[
					"c",
					-.54,
					.78,
					-.6,
					.87,
					-.72,
					.93
				],
				[
					"c",
					-.06,
					.03,
					-.18,
					.06,
					-.24,
					.06
				],
				[
					"c",
					-.3,
					0,
					-.27,
					.03,
					-1.89,
					-1.95
				],
				[
					"l",
					-1.53,
					-1.83
				],
				[
					"l",
					-.48,
					.69
				],
				[
					"c",
					-.51,
					.78,
					-.54,
					.84,
					-.69,
					.9
				],
				[
					"c",
					-.42,
					.18,
					-.87,
					-.15,
					-.81,
					-.6
				],
				[
					"c",
					.03,
					-.12,
					.3,
					-.51,
					1.5,
					-2.37
				],
				[
					"c",
					1.38,
					-2.07,
					1.5,
					-2.22,
					1.62,
					-2.28
				],
				[
					"c",
					.06,
					-.03,
					.18,
					-.06,
					.24,
					-.06
				],
				[
					"c",
					.3,
					0,
					.27,
					-.03,
					1.89,
					1.95
				],
				[
					"l",
					1.53,
					1.83
				],
				[
					"c",
					.03,
					0,
					.06,
					-.06,
					.09,
					-.09
				],
				[
					"c",
					.06,
					-.12,
					.06,
					-.15,
					.06,
					-2.28
				],
				[
					"c",
					0,
					-1.92,
					0,
					-2.22,
					.06,
					-2.31
				],
				[
					"c",
					.06,
					-.15,
					.15,
					-.24,
					.3,
					-.3
				],
				["z"]
			],
			w: 15.011,
			h: 10.012
		},
		"flags.u8th": {
			d: [
				[
					"M",
					-.42,
					3.75
				],
				[
					"l",
					0,
					-3.75
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					0,
					.18
				],
				[
					"c",
					0,
					.3,
					.06,
					.84,
					.12,
					1.23
				],
				[
					"c",
					.24,
					1.53,
					.9,
					3.12,
					2.13,
					5.16
				],
				[
					"l",
					.99,
					1.59
				],
				[
					"c",
					.87,
					1.44,
					1.38,
					2.34,
					1.77,
					3.09
				],
				[
					"c",
					.81,
					1.68,
					1.2,
					3.06,
					1.26,
					4.53
				],
				[
					"c",
					.03,
					1.53,
					-.21,
					3.27,
					-.75,
					5.01
				],
				[
					"c",
					-.21,
					.69,
					-.51,
					1.5,
					-.6,
					1.59
				],
				[
					"c",
					-.09,
					.12,
					-.27,
					.21,
					-.42,
					.21
				],
				[
					"c",
					-.15,
					0,
					-.42,
					-.12,
					-.51,
					-.21
				],
				[
					"c",
					-.15,
					-.18,
					-.18,
					-.42,
					-.09,
					-.66
				],
				[
					"c",
					.15,
					-.33,
					.45,
					-1.2,
					.57,
					-1.62
				],
				[
					"c",
					.42,
					-1.38,
					.6,
					-2.58,
					.6,
					-3.9
				],
				[
					"c",
					0,
					-.66,
					0,
					-.81,
					-.06,
					-1.11
				],
				[
					"c",
					-.39,
					-2.07,
					-1.8,
					-4.26,
					-4.59,
					-7.14
				],
				[
					"l",
					-.42,
					-.45
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-3.75
				],
				["z"]
			],
			w: 6.692,
			h: 22.59
		},
		"flags.u16th": {
			d: [
				[
					"M",
					-.42,
					7.5
				],
				[
					"l",
					0,
					-7.5
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					0,
					.39
				],
				[
					"c",
					.06,
					1.08,
					.39,
					2.19,
					.99,
					3.39
				],
				[
					"c",
					.45,
					.9,
					.87,
					1.59,
					1.95,
					3.12
				],
				[
					"c",
					1.29,
					1.86,
					1.77,
					2.64,
					2.22,
					3.57
				],
				[
					"c",
					.45,
					.93,
					.72,
					1.8,
					.87,
					2.64
				],
				[
					"c",
					.06,
					.51,
					.06,
					1.5,
					0,
					1.92
				],
				[
					"c",
					-.12,
					.6,
					-.3,
					1.2,
					-.54,
					1.71
				],
				[
					"l",
					-.09,
					.24
				],
				[
					"l",
					.18,
					.45
				],
				[
					"c",
					.51,
					1.2,
					.72,
					2.22,
					.69,
					3.42
				],
				[
					"c",
					-.06,
					1.53,
					-.39,
					3.03,
					-.99,
					4.53
				],
				[
					"c",
					-.3,
					.75,
					-.36,
					.81,
					-.57,
					.9
				],
				[
					"c",
					-.15,
					.09,
					-.33,
					.06,
					-.48,
					0
				],
				[
					"c",
					-.18,
					-.09,
					-.27,
					-.18,
					-.33,
					-.33
				],
				[
					"c",
					-.09,
					-.18,
					-.06,
					-.3,
					.12,
					-.75
				],
				[
					"c",
					.66,
					-1.41,
					1.02,
					-2.88,
					1.08,
					-4.32
				],
				[
					"c",
					0,
					-.6,
					-.03,
					-1.05,
					-.18,
					-1.59
				],
				[
					"c",
					-.3,
					-1.2,
					-.99,
					-2.4,
					-2.25,
					-3.87
				],
				[
					"c",
					-.42,
					-.48,
					-1.53,
					-1.62,
					-2.19,
					-2.22
				],
				[
					"l",
					-.45,
					-.42
				],
				[
					"l",
					-.03,
					1.11
				],
				[
					"l",
					0,
					1.11
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-7.5
				],
				["z"],
				[
					"m",
					1.65,
					.09
				],
				[
					"c",
					-.3,
					-.3,
					-.69,
					-.72,
					-.9,
					-.87
				],
				[
					"l",
					-.33,
					-.33
				],
				[
					"l",
					0,
					.15
				],
				[
					"c",
					0,
					.3,
					.06,
					.81,
					.15,
					1.26
				],
				[
					"c",
					.27,
					1.29,
					.87,
					2.61,
					2.04,
					4.29
				],
				[
					"c",
					.15,
					.24,
					.6,
					.87,
					.96,
					1.38
				],
				[
					"l",
					1.08,
					1.53
				],
				[
					"l",
					.42,
					.63
				],
				[
					"c",
					.03,
					0,
					.12,
					-.36,
					.21,
					-.72
				],
				[
					"c",
					.06,
					-.33,
					.06,
					-1.2,
					0,
					-1.62
				],
				[
					"c",
					-.33,
					-1.71,
					-1.44,
					-3.48,
					-3.63,
					-5.7
				],
				["z"]
			],
			w: 6.693,
			h: 26.337
		},
		"flags.u32nd": {
			d: [
				[
					"M",
					-.42,
					11.25
				],
				[
					"l",
					0,
					-11.25
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					0,
					.36
				],
				[
					"c",
					.09,
					1.68,
					.69,
					3.27,
					2.07,
					5.46
				],
				[
					"l",
					.87,
					1.35
				],
				[
					"c",
					1.02,
					1.62,
					1.47,
					2.37,
					1.86,
					3.18
				],
				[
					"c",
					.48,
					1.02,
					.78,
					1.92,
					.93,
					2.88
				],
				[
					"c",
					.06,
					.48,
					.06,
					1.5,
					0,
					1.89
				],
				[
					"c",
					-.09,
					.42,
					-.21,
					.87,
					-.36,
					1.26
				],
				[
					"l",
					-.12,
					.3
				],
				[
					"l",
					.15,
					.39
				],
				[
					"c",
					.69,
					1.56,
					.84,
					2.88,
					.54,
					4.38
				],
				[
					"c",
					-.09,
					.45,
					-.27,
					1.08,
					-.45,
					1.47
				],
				[
					"l",
					-.12,
					.24
				],
				[
					"l",
					.18,
					.36
				],
				[
					"c",
					.33,
					.72,
					.57,
					1.56,
					.69,
					2.34
				],
				[
					"c",
					.12,
					1.02,
					-.06,
					2.52,
					-.42,
					3.84
				],
				[
					"c",
					-.27,
					.93,
					-.75,
					2.13,
					-.93,
					2.31
				],
				[
					"c",
					-.18,
					.15,
					-.45,
					.18,
					-.66,
					.09
				],
				[
					"c",
					-.18,
					-.09,
					-.27,
					-.18,
					-.33,
					-.33
				],
				[
					"c",
					-.09,
					-.18,
					-.06,
					-.3,
					.06,
					-.6
				],
				[
					"c",
					.21,
					-.36,
					.42,
					-.9,
					.57,
					-1.38
				],
				[
					"c",
					.51,
					-1.41,
					.69,
					-3.06,
					.48,
					-4.08
				],
				[
					"c",
					-.15,
					-.81,
					-.57,
					-1.68,
					-1.2,
					-2.55
				],
				[
					"c",
					-.72,
					-.99,
					-1.83,
					-2.13,
					-3.3,
					-3.33
				],
				[
					"l",
					-.48,
					-.42
				],
				[
					"l",
					-.03,
					1.53
				],
				[
					"l",
					0,
					1.56
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-11.25
				],
				["z"],
				[
					"m",
					1.26,
					-3.96
				],
				[
					"c",
					-.27,
					-.3,
					-.54,
					-.6,
					-.66,
					-.72
				],
				[
					"l",
					-.18,
					-.21
				],
				[
					"l",
					0,
					.42
				],
				[
					"c",
					.06,
					.87,
					.24,
					1.74,
					.66,
					2.67
				],
				[
					"c",
					.36,
					.87,
					.96,
					1.86,
					1.92,
					3.18
				],
				[
					"c",
					.21,
					.33,
					.63,
					.87,
					.87,
					1.23
				],
				[
					"c",
					.27,
					.39,
					.6,
					.84,
					.75,
					1.08
				],
				[
					"l",
					.27,
					.39
				],
				[
					"l",
					.03,
					-.12
				],
				[
					"c",
					.12,
					-.45,
					.15,
					-1.05,
					.09,
					-1.59
				],
				[
					"c",
					-.27,
					-1.86,
					-1.38,
					-3.78,
					-3.75,
					-6.33
				],
				["z"],
				[
					"m",
					-.27,
					6.09
				],
				[
					"c",
					-.27,
					-.21,
					-.48,
					-.42,
					-.51,
					-.45
				],
				[
					"c",
					-.06,
					-.03,
					-.06,
					-.03,
					-.06,
					.21
				],
				[
					"c",
					0,
					.9,
					.3,
					2.04,
					.81,
					3.09
				],
				[
					"c",
					.48,
					1.02,
					.96,
					1.77,
					2.37,
					3.63
				],
				[
					"c",
					.6,
					.78,
					1.05,
					1.44,
					1.29,
					1.77
				],
				[
					"c",
					.06,
					.12,
					.15,
					.21,
					.15,
					.18
				],
				[
					"c",
					.03,
					-.03,
					.18,
					-.57,
					.24,
					-.87
				],
				[
					"c",
					.06,
					-.45,
					.06,
					-1.32,
					-.03,
					-1.74
				],
				[
					"c",
					-.09,
					-.48,
					-.24,
					-.9,
					-.51,
					-1.44
				],
				[
					"c",
					-.66,
					-1.35,
					-1.83,
					-2.7,
					-3.75,
					-4.38
				],
				["z"]
			],
			w: 6.697,
			h: 32.145
		},
		"flags.u64th": {
			d: [
				[
					"M",
					-.42,
					15
				],
				[
					"l",
					0,
					-15
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					0,
					.36
				],
				[
					"c",
					.06,
					1.2,
					.39,
					2.37,
					1.02,
					3.66
				],
				[
					"c",
					.39,
					.81,
					.84,
					1.56,
					1.8,
					3.09
				],
				[
					"c",
					.81,
					1.26,
					1.05,
					1.68,
					1.35,
					2.22
				],
				[
					"c",
					.87,
					1.5,
					1.35,
					2.79,
					1.56,
					4.08
				],
				[
					"c",
					.06,
					.54,
					.06,
					1.56,
					-.03,
					2.04
				],
				[
					"c",
					-.09,
					.48,
					-.21,
					.99,
					-.36,
					1.35
				],
				[
					"l",
					-.12,
					.27
				],
				[
					"l",
					.12,
					.27
				],
				[
					"c",
					.09,
					.15,
					.21,
					.45,
					.27,
					.66
				],
				[
					"c",
					.69,
					1.89,
					.63,
					3.66,
					-.18,
					5.46
				],
				[
					"l",
					-.18,
					.39
				],
				[
					"l",
					.15,
					.33
				],
				[
					"c",
					.3,
					.66,
					.51,
					1.44,
					.63,
					2.1
				],
				[
					"c",
					.06,
					.48,
					.06,
					1.35,
					0,
					1.71
				],
				[
					"c",
					-.15,
					.57,
					-.42,
					1.2,
					-.78,
					1.68
				],
				[
					"l",
					-.21,
					.27
				],
				[
					"l",
					.18,
					.33
				],
				[
					"c",
					.57,
					1.05,
					.93,
					2.13,
					1.02,
					3.18
				],
				[
					"c",
					.06,
					.72,
					0,
					1.83,
					-.21,
					2.79
				],
				[
					"c",
					-.18,
					1.02,
					-.63,
					2.34,
					-1.02,
					3.09
				],
				[
					"c",
					-.15,
					.33,
					-.48,
					.45,
					-.78,
					.3
				],
				[
					"c",
					-.18,
					-.09,
					-.27,
					-.18,
					-.33,
					-.33
				],
				[
					"c",
					-.09,
					-.18,
					-.06,
					-.3,
					.03,
					-.54
				],
				[
					"c",
					.75,
					-1.5,
					1.23,
					-3.45,
					1.17,
					-4.89
				],
				[
					"c",
					-.06,
					-1.02,
					-.42,
					-2.01,
					-1.17,
					-3.15
				],
				[
					"c",
					-.48,
					-.72,
					-1.02,
					-1.35,
					-1.89,
					-2.22
				],
				[
					"c",
					-.57,
					-.57,
					-1.56,
					-1.5,
					-1.92,
					-1.77
				],
				[
					"l",
					-.12,
					-.09
				],
				[
					"l",
					0,
					1.68
				],
				[
					"l",
					0,
					1.68
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-15
				],
				["z"],
				[
					"m",
					.93,
					-8.07
				],
				[
					"c",
					-.27,
					-.3,
					-.48,
					-.54,
					-.51,
					-.54
				],
				[
					"c",
					0,
					0,
					0,
					.69,
					.03,
					1.02
				],
				[
					"c",
					.15,
					1.47,
					.75,
					2.94,
					2.04,
					4.83
				],
				[
					"l",
					1.08,
					1.53
				],
				[
					"c",
					.39,
					.57,
					.84,
					1.2,
					.99,
					1.44
				],
				[
					"c",
					.15,
					.24,
					.3,
					.45,
					.3,
					.45
				],
				[
					"c",
					0,
					0,
					.03,
					-.09,
					.06,
					-.21
				],
				[
					"c",
					.36,
					-1.59,
					-.15,
					-3.33,
					-1.47,
					-5.4
				],
				[
					"c",
					-.63,
					-.93,
					-1.35,
					-1.83,
					-2.52,
					-3.12
				],
				["z"],
				[
					"m",
					.06,
					6.72
				],
				[
					"c",
					-.24,
					-.21,
					-.48,
					-.42,
					-.51,
					-.45
				],
				[
					"l",
					-.06,
					-.06
				],
				[
					"l",
					0,
					.33
				],
				[
					"c",
					0,
					1.2,
					.3,
					2.34,
					.93,
					3.6
				],
				[
					"c",
					.45,
					.9,
					.96,
					1.68,
					2.25,
					3.51
				],
				[
					"c",
					.39,
					.54,
					.84,
					1.17,
					1.02,
					1.44
				],
				[
					"c",
					.21,
					.33,
					.33,
					.51,
					.33,
					.48
				],
				[
					"c",
					.06,
					-.09,
					.21,
					-.63,
					.3,
					-.99
				],
				[
					"c",
					.06,
					-.33,
					.06,
					-.45,
					.06,
					-.96
				],
				[
					"c",
					0,
					-.6,
					-.03,
					-.84,
					-.18,
					-1.35
				],
				[
					"c",
					-.3,
					-1.08,
					-1.02,
					-2.28,
					-2.13,
					-3.57
				],
				[
					"c",
					-.39,
					-.45,
					-1.44,
					-1.47,
					-2.01,
					-1.98
				],
				["z"],
				[
					"m",
					0,
					6.72
				],
				[
					"c",
					-.24,
					-.21,
					-.48,
					-.39,
					-.51,
					-.42
				],
				[
					"l",
					-.06,
					-.06
				],
				[
					"l",
					0,
					.33
				],
				[
					"c",
					0,
					1.41,
					.45,
					2.82,
					1.38,
					4.35
				],
				[
					"c",
					.42,
					.72,
					.72,
					1.14,
					1.86,
					2.73
				],
				[
					"c",
					.36,
					.45,
					.75,
					.99,
					.87,
					1.2
				],
				[
					"c",
					.15,
					.21,
					.3,
					.36,
					.3,
					.36
				],
				[
					"c",
					.06,
					0,
					.3,
					-.48,
					.39,
					-.75
				],
				[
					"c",
					.09,
					-.36,
					.12,
					-.63,
					.12,
					-1.05
				],
				[
					"c",
					-.06,
					-1.05,
					-.45,
					-2.04,
					-1.2,
					-3.18
				],
				[
					"c",
					-.57,
					-.87,
					-1.11,
					-1.53,
					-2.07,
					-2.49
				],
				[
					"c",
					-.36,
					-.33,
					-.84,
					-.78,
					-1.08,
					-1.02
				],
				["z"]
			],
			w: 6.682,
			h: 39.694
		},
		"flags.d8th": {
			d: [
				[
					"M",
					5.67,
					-21.63
				],
				[
					"c",
					.24,
					-.12,
					.54,
					-.06,
					.69,
					.15
				],
				[
					"c",
					.06,
					.06,
					.21,
					.36,
					.39,
					.66
				],
				[
					"c",
					.84,
					1.77,
					1.26,
					3.36,
					1.32,
					5.1
				],
				[
					"c",
					.03,
					1.29,
					-.21,
					2.37,
					-.81,
					3.63
				],
				[
					"c",
					-.6,
					1.23,
					-1.26,
					2.13,
					-3.21,
					4.38
				],
				[
					"c",
					-1.35,
					1.53,
					-1.86,
					2.19,
					-2.4,
					2.97
				],
				[
					"c",
					-.63,
					.93,
					-1.11,
					1.92,
					-1.38,
					2.79
				],
				[
					"c",
					-.15,
					.54,
					-.27,
					1.35,
					-.27,
					1.8
				],
				[
					"l",
					0,
					.15
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-3.75
				],
				[
					"l",
					0,
					-3.75
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.48,
					-.3
				],
				[
					"c",
					1.83,
					-1.11,
					3.12,
					-2.1,
					4.17,
					-3.12
				],
				[
					"c",
					.78,
					-.81,
					1.32,
					-1.53,
					1.71,
					-2.31
				],
				[
					"c",
					.45,
					-.93,
					.6,
					-1.74,
					.51,
					-2.88
				],
				[
					"c",
					-.12,
					-1.56,
					-.63,
					-3.18,
					-1.47,
					-4.68
				],
				[
					"c",
					-.12,
					-.21,
					-.15,
					-.33,
					-.06,
					-.51
				],
				[
					"c",
					.06,
					-.15,
					.15,
					-.24,
					.33,
					-.33
				],
				["z"]
			],
			w: 8.492,
			h: 21.691
		},
		"flags.ugrace": {
			d: [
				[
					"M",
					6.03,
					6.93
				],
				[
					"c",
					.15,
					-.09,
					.33,
					-.06,
					.51,
					0
				],
				[
					"c",
					.15,
					.09,
					.21,
					.15,
					.3,
					.33
				],
				[
					"c",
					.09,
					.18,
					.06,
					.39,
					-.03,
					.54
				],
				[
					"c",
					-.06,
					.15,
					-10.89,
					8.88,
					-11.07,
					8.97
				],
				[
					"c",
					-.15,
					.09,
					-.33,
					.06,
					-.48,
					0
				],
				[
					"c",
					-.18,
					-.09,
					-.24,
					-.15,
					-.33,
					-.33
				],
				[
					"c",
					-.09,
					-.18,
					-.06,
					-.39,
					.03,
					-.54
				],
				[
					"c",
					.06,
					-.15,
					10.89,
					-8.88,
					11.07,
					-8.97
				],
				["z"]
			],
			w: 12.019,
			h: 9.954
		},
		"flags.dgrace": {
			d: [
				[
					"M",
					-6.06,
					-15.93
				],
				[
					"c",
					.18,
					-.09,
					.33,
					-.12,
					.48,
					-.06
				],
				[
					"c",
					.18,
					.09,
					14.01,
					8.04,
					14.1,
					8.1
				],
				[
					"c",
					.12,
					.12,
					.18,
					.33,
					.18,
					.51
				],
				[
					"c",
					-.03,
					.21,
					-.15,
					.39,
					-.36,
					.48
				],
				[
					"c",
					-.18,
					.09,
					-.33,
					.12,
					-.48,
					.06
				],
				[
					"c",
					-.18,
					-.09,
					-14.01,
					-8.04,
					-14.1,
					-8.1
				],
				[
					"c",
					-.12,
					-.12,
					-.18,
					-.33,
					-.18,
					-.51
				],
				[
					"c",
					.03,
					-.21,
					.15,
					-.39,
					.36,
					-.48
				],
				["z"]
			],
			w: 15.12,
			h: 9.212
		},
		"flags.d16th": {
			d: [
				[
					"M",
					6.84,
					-22.53
				],
				[
					"c",
					.27,
					-.12,
					.57,
					-.06,
					.72,
					.15
				],
				[
					"c",
					.15,
					.15,
					.33,
					.87,
					.45,
					1.56
				],
				[
					"c",
					.06,
					.33,
					.06,
					1.35,
					0,
					1.65
				],
				[
					"c",
					-.06,
					.33,
					-.15,
					.78,
					-.27,
					1.11
				],
				[
					"c",
					-.12,
					.33,
					-.45,
					.96,
					-.66,
					1.32
				],
				[
					"l",
					-.18,
					.27
				],
				[
					"l",
					.09,
					.18
				],
				[
					"c",
					.48,
					1.02,
					.72,
					2.25,
					.69,
					3.3
				],
				[
					"c",
					-.06,
					1.23,
					-.42,
					2.28,
					-1.26,
					3.45
				],
				[
					"c",
					-.57,
					.87,
					-.99,
					1.32,
					-3,
					3.39
				],
				[
					"c",
					-1.56,
					1.56,
					-2.22,
					2.4,
					-2.76,
					3.45
				],
				[
					"c",
					-.42,
					.84,
					-.66,
					1.8,
					-.66,
					2.55
				],
				[
					"l",
					0,
					.15
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-7.5
				],
				[
					"l",
					0,
					-7.5
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					0,
					1.14
				],
				[
					"l",
					0,
					1.11
				],
				[
					"l",
					.27,
					-.15
				],
				[
					"c",
					1.11,
					-.57,
					1.77,
					-.99,
					2.52,
					-1.47
				],
				[
					"c",
					2.37,
					-1.56,
					3.69,
					-3.15,
					4.05,
					-4.83
				],
				[
					"c",
					.03,
					-.18,
					.03,
					-.39,
					.03,
					-.78
				],
				[
					"c",
					0,
					-.6,
					-.03,
					-.93,
					-.24,
					-1.5
				],
				[
					"c",
					-.06,
					-.18,
					-.12,
					-.39,
					-.15,
					-.45
				],
				[
					"c",
					-.03,
					-.24,
					.12,
					-.48,
					.36,
					-.6
				],
				["z"],
				[
					"m",
					-.63,
					7.5
				],
				[
					"c",
					-.06,
					-.18,
					-.15,
					-.36,
					-.15,
					-.36
				],
				[
					"c",
					-.03,
					0,
					-.03,
					.03,
					-.06,
					.06
				],
				[
					"c",
					-.06,
					.12,
					-.96,
					1.02,
					-1.95,
					1.98
				],
				[
					"c",
					-.63,
					.57,
					-1.26,
					1.17,
					-1.44,
					1.35
				],
				[
					"c",
					-1.53,
					1.62,
					-2.28,
					2.85,
					-2.55,
					4.32
				],
				[
					"c",
					-.03,
					.18,
					-.03,
					.54,
					-.06,
					.99
				],
				[
					"l",
					0,
					.69
				],
				[
					"l",
					.18,
					-.09
				],
				[
					"c",
					.93,
					-.54,
					2.1,
					-1.29,
					2.82,
					-1.83
				],
				[
					"c",
					.69,
					-.51,
					1.02,
					-.81,
					1.53,
					-1.29
				],
				[
					"c",
					1.86,
					-1.89,
					2.37,
					-3.66,
					1.68,
					-5.82
				],
				["z"]
			],
			w: 8.475,
			h: 22.591
		},
		"flags.d32nd": {
			d: [
				[
					"M",
					6.84,
					-29.13
				],
				[
					"c",
					.27,
					-.12,
					.57,
					-.06,
					.72,
					.15
				],
				[
					"c",
					.12,
					.12,
					.27,
					.63,
					.36,
					1.11
				],
				[
					"c",
					.33,
					1.59,
					.06,
					3.06,
					-.81,
					4.47
				],
				[
					"l",
					-.18,
					.27
				],
				[
					"l",
					.09,
					.15
				],
				[
					"c",
					.12,
					.24,
					.33,
					.69,
					.45,
					1.05
				],
				[
					"c",
					.63,
					1.83,
					.45,
					3.57,
					-.57,
					5.22
				],
				[
					"l",
					-.18,
					.3
				],
				[
					"l",
					.15,
					.27
				],
				[
					"c",
					.42,
					.87,
					.6,
					1.71,
					.57,
					2.61
				],
				[
					"c",
					-.06,
					1.29,
					-.48,
					2.46,
					-1.35,
					3.78
				],
				[
					"c",
					-.54,
					.81,
					-.93,
					1.29,
					-2.46,
					3
				],
				[
					"c",
					-.51,
					.54,
					-1.05,
					1.17,
					-1.26,
					1.41
				],
				[
					"c",
					-1.56,
					1.86,
					-2.25,
					3.36,
					-2.37,
					5.01
				],
				[
					"l",
					0,
					.33
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-11.25
				],
				[
					"l",
					0,
					-11.25
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					0,
					1.35
				],
				[
					"l",
					.03,
					1.35
				],
				[
					"l",
					.78,
					-.39
				],
				[
					"c",
					1.38,
					-.69,
					2.34,
					-1.26,
					3.24,
					-1.92
				],
				[
					"c",
					1.38,
					-1.02,
					2.28,
					-2.13,
					2.64,
					-3.21
				],
				[
					"c",
					.15,
					-.48,
					.18,
					-.72,
					.18,
					-1.29
				],
				[
					"c",
					0,
					-.57,
					-.06,
					-.9,
					-.24,
					-1.47
				],
				[
					"c",
					-.06,
					-.18,
					-.12,
					-.39,
					-.15,
					-.45
				],
				[
					"c",
					-.03,
					-.24,
					.12,
					-.48,
					.36,
					-.6
				],
				["z"],
				[
					"m",
					-.63,
					7.2
				],
				[
					"c",
					-.09,
					-.18,
					-.12,
					-.21,
					-.12,
					-.15
				],
				[
					"c",
					-.03,
					.09,
					-1.02,
					1.08,
					-2.04,
					2.04
				],
				[
					"c",
					-1.17,
					1.08,
					-1.65,
					1.56,
					-2.07,
					2.04
				],
				[
					"c",
					-.84,
					.96,
					-1.38,
					1.86,
					-1.68,
					2.76
				],
				[
					"c",
					-.21,
					.57,
					-.27,
					.99,
					-.3,
					1.65
				],
				[
					"l",
					0,
					.54
				],
				[
					"l",
					.66,
					-.33
				],
				[
					"c",
					3.57,
					-1.86,
					5.49,
					-3.69,
					5.94,
					-5.7
				],
				[
					"c",
					.06,
					-.39,
					.06,
					-1.2,
					-.03,
					-1.65
				],
				[
					"c",
					-.06,
					-.39,
					-.24,
					-.9,
					-.36,
					-1.2
				],
				["z"],
				[
					"m",
					-.06,
					7.2
				],
				[
					"c",
					-.06,
					-.15,
					-.12,
					-.33,
					-.15,
					-.45
				],
				[
					"l",
					-.06,
					-.18
				],
				[
					"l",
					-.18,
					.21
				],
				[
					"l",
					-1.83,
					1.83
				],
				[
					"c",
					-.87,
					.9,
					-1.77,
					1.8,
					-1.95,
					2.01
				],
				[
					"c",
					-1.08,
					1.29,
					-1.62,
					2.31,
					-1.89,
					3.51
				],
				[
					"c",
					-.06,
					.3,
					-.06,
					.51,
					-.09,
					.93
				],
				[
					"l",
					0,
					.57
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"c",
					.75,
					-.45,
					1.89,
					-1.26,
					2.52,
					-1.74
				],
				[
					"c",
					.81,
					-.66,
					1.74,
					-1.53,
					2.22,
					-2.16
				],
				[
					"c",
					1.26,
					-1.53,
					1.68,
					-3.06,
					1.32,
					-4.47
				],
				["z"]
			],
			w: 8.385,
			h: 29.191
		},
		"flags.d64th": {
			d: [
				[
					"M",
					7.08,
					-32.88
				],
				[
					"c",
					.3,
					-.12,
					.66,
					-.03,
					.78,
					.24
				],
				[
					"c",
					.18,
					.33,
					.27,
					2.1,
					.15,
					2.64
				],
				[
					"c",
					-.09,
					.39,
					-.21,
					.78,
					-.39,
					1.08
				],
				[
					"l",
					-.15,
					.3
				],
				[
					"l",
					.09,
					.27
				],
				[
					"c",
					.03,
					.12,
					.09,
					.45,
					.12,
					.69
				],
				[
					"c",
					.27,
					1.44,
					.18,
					2.55,
					-.3,
					3.6
				],
				[
					"l",
					-.12,
					.33
				],
				[
					"l",
					.06,
					.42
				],
				[
					"c",
					.27,
					1.35,
					.33,
					2.82,
					.21,
					3.63
				],
				[
					"c",
					-.12,
					.6,
					-.3,
					1.23,
					-.57,
					1.8
				],
				[
					"l",
					-.15,
					.27
				],
				[
					"l",
					.03,
					.42
				],
				[
					"c",
					.06,
					1.02,
					.06,
					2.7,
					.03,
					3.06
				],
				[
					"c",
					-.15,
					1.47,
					-.66,
					2.76,
					-1.74,
					4.41
				],
				[
					"c",
					-.45,
					.69,
					-.75,
					1.11,
					-1.74,
					2.37
				],
				[
					"c",
					-1.05,
					1.38,
					-1.5,
					1.98,
					-1.95,
					2.73
				],
				[
					"c",
					-.93,
					1.5,
					-1.38,
					2.82,
					-1.44,
					4.2
				],
				[
					"l",
					0,
					.42
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					-.21,
					0
				],
				[
					"l",
					0,
					-15
				],
				[
					"l",
					0,
					-15
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					.21,
					0
				],
				[
					"l",
					0,
					1.86
				],
				[
					"l",
					0,
					1.89
				],
				[
					"c",
					0,
					0,
					.21,
					-.03,
					.45,
					-.09
				],
				[
					"c",
					2.22,
					-.39,
					4.08,
					-1.11,
					5.19,
					-2.01
				],
				[
					"c",
					.63,
					-.54,
					1.02,
					-1.14,
					1.2,
					-1.8
				],
				[
					"c",
					.06,
					-.3,
					.06,
					-1.14,
					-.03,
					-1.65
				],
				[
					"c",
					-.03,
					-.18,
					-.06,
					-.39,
					-.09,
					-.48
				],
				[
					"c",
					-.03,
					-.24,
					.12,
					-.48,
					.36,
					-.6
				],
				["z"],
				[
					"m",
					-.45,
					6.15
				],
				[
					"c",
					-.03,
					-.18,
					-.06,
					-.42,
					-.06,
					-.54
				],
				[
					"l",
					-.03,
					-.18
				],
				[
					"l",
					-.33,
					.3
				],
				[
					"c",
					-.42,
					.36,
					-.87,
					.72,
					-1.68,
					1.29
				],
				[
					"c",
					-1.98,
					1.38,
					-2.25,
					1.59,
					-2.85,
					2.16
				],
				[
					"c",
					-.75,
					.69,
					-1.23,
					1.44,
					-1.47,
					2.19
				],
				[
					"c",
					-.15,
					.45,
					-.18,
					.63,
					-.21,
					1.35
				],
				[
					"l",
					0,
					.66
				],
				[
					"l",
					.39,
					-.18
				],
				[
					"c",
					1.83,
					-.9,
					3.45,
					-1.95,
					4.47,
					-2.91
				],
				[
					"c",
					.93,
					-.9,
					1.53,
					-1.83,
					1.74,
					-2.82
				],
				[
					"c",
					.06,
					-.33,
					.06,
					-.87,
					.03,
					-1.32
				],
				["z"],
				[
					"m",
					-.27,
					4.86
				],
				[
					"c",
					-.03,
					-.21,
					-.06,
					-.36,
					-.06,
					-.36
				],
				[
					"c",
					0,
					-.03,
					-.12,
					.09,
					-.24,
					.24
				],
				[
					"c",
					-.39,
					.48,
					-.99,
					1.08,
					-2.16,
					2.19
				],
				[
					"c",
					-1.47,
					1.38,
					-1.92,
					1.83,
					-2.46,
					2.49
				],
				[
					"c",
					-.66,
					.87,
					-1.08,
					1.74,
					-1.29,
					2.58
				],
				[
					"c",
					-.09,
					.42,
					-.15,
					.87,
					-.15,
					1.44
				],
				[
					"l",
					0,
					.54
				],
				[
					"l",
					.48,
					-.33
				],
				[
					"c",
					1.5,
					-1.02,
					2.58,
					-1.89,
					3.51,
					-2.82
				],
				[
					"c",
					1.47,
					-1.47,
					2.25,
					-2.85,
					2.4,
					-4.26
				],
				[
					"c",
					.03,
					-.39,
					.03,
					-1.17,
					-.03,
					-1.71
				],
				["z"],
				[
					"m",
					-.66,
					7.68
				],
				[
					"c",
					.03,
					-.15,
					.03,
					-.6,
					.03,
					-.99
				],
				[
					"l",
					0,
					-.72
				],
				[
					"l",
					-.27,
					.33
				],
				[
					"l",
					-1.74,
					1.98
				],
				[
					"c",
					-1.77,
					1.92,
					-2.43,
					2.76,
					-2.97,
					3.9
				],
				[
					"c",
					-.51,
					1.02,
					-.72,
					1.77,
					-.75,
					2.91
				],
				[
					"c",
					0,
					.63,
					0,
					.63,
					.06,
					.6
				],
				[
					"c",
					.03,
					-.03,
					.3,
					-.27,
					.63,
					-.54
				],
				[
					"c",
					.66,
					-.6,
					1.86,
					-1.8,
					2.31,
					-2.31
				],
				[
					"c",
					1.65,
					-1.89,
					2.52,
					-3.54,
					2.7,
					-5.16
				],
				["z"]
			],
			w: 8.485,
			h: 32.932
		},
		"clefs.C": {
			d: [
				[
					"M",
					.06,
					-14.94
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"l",
					1.92,
					0
				],
				[
					"l",
					1.92,
					0
				],
				[
					"l",
					.09,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					14.85
				],
				[
					"l",
					0,
					14.82
				],
				[
					"l",
					-.06,
					.09
				],
				[
					"l",
					-.09,
					.06
				],
				[
					"l",
					-1.92,
					0
				],
				[
					"l",
					-1.92,
					0
				],
				[
					"l",
					-.09,
					-.06
				],
				[
					"l",
					-.06,
					-.09
				],
				[
					"l",
					0,
					-14.82
				],
				[
					"l",
					0,
					-14.85
				],
				["z"],
				[
					"m",
					5.37,
					0
				],
				[
					"c",
					.09,
					-.06,
					.09,
					-.06,
					.57,
					-.06
				],
				[
					"c",
					.45,
					0,
					.45,
					0,
					.54,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					7.14
				],
				[
					"l",
					0,
					7.11
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"c",
					.18,
					-.18,
					.72,
					-.84,
					.96,
					-1.2
				],
				[
					"c",
					.3,
					-.45,
					.66,
					-1.17,
					.84,
					-1.65
				],
				[
					"c",
					.36,
					-.9,
					.57,
					-1.83,
					.6,
					-2.79
				],
				[
					"c",
					.03,
					-.48,
					.03,
					-.54,
					.09,
					-.63
				],
				[
					"c",
					.12,
					-.18,
					.36,
					-.21,
					.54,
					-.12
				],
				[
					"c",
					.18,
					.09,
					.21,
					.15,
					.24,
					.66
				],
				[
					"c",
					.06,
					.87,
					.21,
					1.56,
					.57,
					2.22
				],
				[
					"c",
					.51,
					1.02,
					1.26,
					1.68,
					2.22,
					1.92
				],
				[
					"c",
					.21,
					.06,
					.33,
					.06,
					.78,
					.06
				],
				[
					"c",
					.45,
					0,
					.57,
					0,
					.84,
					-.06
				],
				[
					"c",
					.45,
					-.12,
					.81,
					-.33,
					1.08,
					-.6
				],
				[
					"c",
					.57,
					-.57,
					.87,
					-1.41,
					.99,
					-2.88
				],
				[
					"c",
					.06,
					-.54,
					.06,
					-3,
					0,
					-3.57
				],
				[
					"c",
					-.21,
					-2.58,
					-.84,
					-3.87,
					-2.16,
					-4.5
				],
				[
					"c",
					-.48,
					-.21,
					-1.17,
					-.36,
					-1.77,
					-.36
				],
				[
					"c",
					-.69,
					0,
					-1.29,
					.27,
					-1.5,
					.72
				],
				[
					"c",
					-.06,
					.15,
					-.06,
					.21,
					-.06,
					.42
				],
				[
					"c",
					0,
					.24,
					0,
					.3,
					.06,
					.45
				],
				[
					"c",
					.12,
					.24,
					.24,
					.39,
					.63,
					.66
				],
				[
					"c",
					.42,
					.3,
					.57,
					.48,
					.69,
					.72
				],
				[
					"c",
					.06,
					.15,
					.06,
					.21,
					.06,
					.48
				],
				[
					"c",
					0,
					.39,
					-.03,
					.63,
					-.21,
					.96
				],
				[
					"c",
					-.3,
					.6,
					-.87,
					1.08,
					-1.5,
					1.26
				],
				[
					"c",
					-.27,
					.06,
					-.87,
					.06,
					-1.14,
					0
				],
				[
					"c",
					-.78,
					-.24,
					-1.44,
					-.87,
					-1.65,
					-1.68
				],
				[
					"c",
					-.12,
					-.42,
					-.09,
					-1.17,
					.09,
					-1.71
				],
				[
					"c",
					.51,
					-1.65,
					1.98,
					-2.82,
					3.81,
					-3.09
				],
				[
					"c",
					.84,
					-.09,
					2.46,
					.03,
					3.51,
					.27
				],
				[
					"c",
					2.22,
					.57,
					3.69,
					1.8,
					4.44,
					3.75
				],
				[
					"c",
					.36,
					.93,
					.57,
					2.13,
					.57,
					3.36
				],
				[
					"c",
					0,
					1.44,
					-.48,
					2.73,
					-1.38,
					3.81
				],
				[
					"c",
					-1.26,
					1.5,
					-3.27,
					2.43,
					-5.28,
					2.43
				],
				[
					"c",
					-.48,
					0,
					-.51,
					0,
					-.75,
					-.09
				],
				[
					"c",
					-.15,
					-.03,
					-.48,
					-.21,
					-.78,
					-.36
				],
				[
					"c",
					-.69,
					-.36,
					-.87,
					-.42,
					-1.26,
					-.42
				],
				[
					"c",
					-.27,
					0,
					-.3,
					0,
					-.51,
					.09
				],
				[
					"c",
					-.57,
					.3,
					-.81,
					.9,
					-.81,
					2.1
				],
				[
					"c",
					0,
					1.23,
					.24,
					1.83,
					.81,
					2.13
				],
				[
					"c",
					.21,
					.09,
					.24,
					.09,
					.51,
					.09
				],
				[
					"c",
					.39,
					0,
					.57,
					-.06,
					1.26,
					-.42
				],
				[
					"c",
					.3,
					-.15,
					.63,
					-.33,
					.78,
					-.36
				],
				[
					"c",
					.24,
					-.09,
					.27,
					-.09,
					.75,
					-.09
				],
				[
					"c",
					2.01,
					0,
					4.02,
					.93,
					5.28,
					2.4
				],
				[
					"c",
					.9,
					1.11,
					1.38,
					2.4,
					1.38,
					3.84
				],
				[
					"c",
					0,
					1.5,
					-.3,
					2.88,
					-.84,
					3.96
				],
				[
					"c",
					-.78,
					1.59,
					-2.19,
					2.64,
					-4.17,
					3.15
				],
				[
					"c",
					-1.05,
					.24,
					-2.67,
					.36,
					-3.51,
					.27
				],
				[
					"c",
					-1.83,
					-.27,
					-3.3,
					-1.44,
					-3.81,
					-3.09
				],
				[
					"c",
					-.18,
					-.54,
					-.21,
					-1.29,
					-.09,
					-1.74
				],
				[
					"c",
					.15,
					-.6,
					.63,
					-1.2,
					1.23,
					-1.47
				],
				[
					"c",
					.36,
					-.18,
					.57,
					-.21,
					.99,
					-.21
				],
				[
					"c",
					.42,
					0,
					.63,
					.03,
					1.02,
					.21
				],
				[
					"c",
					.42,
					.21,
					.84,
					.63,
					1.05,
					1.05
				],
				[
					"c",
					.18,
					.36,
					.21,
					.6,
					.21,
					.96
				],
				[
					"c",
					0,
					.3,
					0,
					.36,
					-.06,
					.51
				],
				[
					"c",
					-.12,
					.24,
					-.27,
					.42,
					-.69,
					.72
				],
				[
					"c",
					-.57,
					.42,
					-.69,
					.63,
					-.69,
					1.08
				],
				[
					"c",
					0,
					.24,
					0,
					.3,
					.06,
					.45
				],
				[
					"c",
					.12,
					.21,
					.3,
					.39,
					.57,
					.54
				],
				[
					"c",
					.42,
					.18,
					.87,
					.21,
					1.53,
					.15
				],
				[
					"c",
					1.08,
					-.15,
					1.8,
					-.57,
					2.34,
					-1.32
				],
				[
					"c",
					.54,
					-.75,
					.84,
					-1.83,
					.99,
					-3.51
				],
				[
					"c",
					.06,
					-.57,
					.06,
					-3.03,
					0,
					-3.57
				],
				[
					"c",
					-.12,
					-1.47,
					-.42,
					-2.31,
					-.99,
					-2.88
				],
				[
					"c",
					-.27,
					-.27,
					-.63,
					-.48,
					-1.08,
					-.6
				],
				[
					"c",
					-.27,
					-.06,
					-.39,
					-.06,
					-.84,
					-.06
				],
				[
					"c",
					-.45,
					0,
					-.57,
					0,
					-.78,
					.06
				],
				[
					"c",
					-1.14,
					.27,
					-2.01,
					1.17,
					-2.46,
					2.49
				],
				[
					"c",
					-.21,
					.57,
					-.3,
					.99,
					-.33,
					1.65
				],
				[
					"c",
					-.03,
					.51,
					-.06,
					.57,
					-.24,
					.66
				],
				[
					"c",
					-.12,
					.06,
					-.27,
					.06,
					-.39,
					0
				],
				[
					"c",
					-.21,
					-.09,
					-.21,
					-.15,
					-.24,
					-.75
				],
				[
					"c",
					-.09,
					-1.92,
					-.78,
					-3.72,
					-2.01,
					-5.19
				],
				[
					"c",
					-.18,
					-.21,
					-.36,
					-.42,
					-.39,
					-.45
				],
				[
					"l",
					-.09,
					-.06
				],
				[
					"l",
					0,
					7.11
				],
				[
					"l",
					0,
					7.14
				],
				[
					"l",
					-.06,
					.09
				],
				[
					"c",
					-.09,
					.06,
					-.09,
					.06,
					-.54,
					.06
				],
				[
					"c",
					-.48,
					0,
					-.48,
					0,
					-.57,
					-.06
				],
				[
					"l",
					-.06,
					-.09
				],
				[
					"l",
					0,
					-14.82
				],
				[
					"l",
					0,
					-14.85
				],
				["z"]
			],
			w: 20.31,
			h: 29.97
		},
		"clefs.F": {
			d: [
				[
					"M",
					6.3,
					-7.8
				],
				[
					"c",
					.36,
					-.03,
					1.65,
					0,
					2.13,
					.03
				],
				[
					"c",
					3.6,
					.42,
					6.03,
					2.1,
					6.93,
					4.86
				],
				[
					"c",
					.27,
					.84,
					.36,
					1.5,
					.36,
					2.58
				],
				[
					"c",
					0,
					.9,
					-.03,
					1.35,
					-.18,
					2.16
				],
				[
					"c",
					-.78,
					3.78,
					-3.54,
					7.08,
					-8.37,
					9.96
				],
				[
					"c",
					-1.74,
					1.05,
					-3.87,
					2.13,
					-6.18,
					3.12
				],
				[
					"c",
					-.39,
					.18,
					-.75,
					.33,
					-.81,
					.36
				],
				[
					"c",
					-.06,
					.03,
					-.15,
					.06,
					-.18,
					.06
				],
				[
					"c",
					-.15,
					0,
					-.33,
					-.18,
					-.33,
					-.33
				],
				[
					"c",
					0,
					-.15,
					.06,
					-.21,
					.51,
					-.48
				],
				[
					"c",
					3,
					-1.77,
					5.13,
					-3.21,
					6.84,
					-4.74
				],
				[
					"c",
					.51,
					-.45,
					1.59,
					-1.5,
					1.95,
					-1.95
				],
				[
					"c",
					1.89,
					-2.19,
					2.88,
					-4.32,
					3.15,
					-6.78
				],
				[
					"c",
					.06,
					-.42,
					.06,
					-1.77,
					0,
					-2.19
				],
				[
					"c",
					-.24,
					-2.01,
					-.93,
					-3.63,
					-2.04,
					-4.71
				],
				[
					"c",
					-.63,
					-.63,
					-1.29,
					-1.02,
					-2.07,
					-1.2
				],
				[
					"c",
					-1.62,
					-.39,
					-3.36,
					.15,
					-4.56,
					1.44
				],
				[
					"c",
					-.54,
					.6,
					-1.05,
					1.47,
					-1.32,
					2.22
				],
				[
					"l",
					-.09,
					.21
				],
				[
					"l",
					.24,
					-.12
				],
				[
					"c",
					.39,
					-.21,
					.63,
					-.24,
					1.11,
					-.24
				],
				[
					"c",
					.3,
					0,
					.45,
					0,
					.66,
					.06
				],
				[
					"c",
					1.92,
					.48,
					2.85,
					2.55,
					1.95,
					4.38
				],
				[
					"c",
					-.45,
					.99,
					-1.41,
					1.62,
					-2.46,
					1.71
				],
				[
					"c",
					-1.47,
					.09,
					-2.91,
					-.87,
					-3.39,
					-2.25
				],
				[
					"c",
					-.18,
					-.57,
					-.21,
					-1.32,
					-.03,
					-2.28
				],
				[
					"c",
					.39,
					-2.25,
					1.83,
					-4.2,
					3.81,
					-5.19
				],
				[
					"c",
					.69,
					-.36,
					1.59,
					-.6,
					2.37,
					-.69
				],
				["z"],
				[
					"m",
					11.58,
					2.52
				],
				[
					"c",
					.84,
					-.21,
					1.71,
					.3,
					1.89,
					1.14
				],
				[
					"c",
					.3,
					1.17,
					-.72,
					2.19,
					-1.89,
					1.89
				],
				[
					"c",
					-.99,
					-.21,
					-1.5,
					-1.32,
					-1.02,
					-2.25
				],
				[
					"c",
					.18,
					-.39,
					.6,
					-.69,
					1.02,
					-.78
				],
				["z"],
				[
					"m",
					0,
					7.5
				],
				[
					"c",
					.84,
					-.21,
					1.71,
					.3,
					1.89,
					1.14
				],
				[
					"c",
					.21,
					.87,
					-.3,
					1.71,
					-1.14,
					1.89
				],
				[
					"c",
					-.87,
					.21,
					-1.71,
					-.3,
					-1.89,
					-1.14
				],
				[
					"c",
					-.21,
					-.84,
					.3,
					-1.71,
					1.14,
					-1.89
				],
				["z"]
			],
			w: 20.153,
			h: 23.142
		},
		"clefs.G": {
			d: [
				[
					"M",
					9.69,
					-37.41
				],
				[
					"c",
					.09,
					-.09,
					.24,
					-.06,
					.36,
					0
				],
				[
					"c",
					.12,
					.09,
					.57,
					.6,
					.96,
					1.11
				],
				[
					"c",
					1.77,
					2.34,
					3.21,
					5.85,
					3.57,
					8.73
				],
				[
					"c",
					.21,
					1.56,
					.03,
					3.27,
					-.45,
					4.86
				],
				[
					"c",
					-.69,
					2.31,
					-1.92,
					4.47,
					-4.23,
					7.44
				],
				[
					"c",
					-.3,
					.39,
					-.57,
					.72,
					-.6,
					.75
				],
				[
					"c",
					-.03,
					.06,
					0,
					.15,
					.18,
					.78
				],
				[
					"c",
					.54,
					1.68,
					1.38,
					4.44,
					1.68,
					5.49
				],
				[
					"l",
					.09,
					.42
				],
				[
					"l",
					.39,
					0
				],
				[
					"c",
					1.47,
					.09,
					2.76,
					.51,
					3.96,
					1.29
				],
				[
					"c",
					1.83,
					1.23,
					3.06,
					3.21,
					3.39,
					5.52
				],
				[
					"c",
					.09,
					.45,
					.12,
					1.29,
					.06,
					1.74
				],
				[
					"c",
					-.09,
					1.02,
					-.33,
					1.83,
					-.75,
					2.73
				],
				[
					"c",
					-.84,
					1.71,
					-2.28,
					3.06,
					-4.02,
					3.72
				],
				[
					"l",
					-.33,
					.12
				],
				[
					"l",
					.03,
					1.26
				],
				[
					"c",
					0,
					1.74,
					-.06,
					3.63,
					-.21,
					4.62
				],
				[
					"c",
					-.45,
					3.06,
					-2.19,
					5.49,
					-4.47,
					6.21
				],
				[
					"c",
					-.57,
					.18,
					-.9,
					.21,
					-1.59,
					.21
				],
				[
					"c",
					-.69,
					0,
					-1.02,
					-.03,
					-1.65,
					-.21
				],
				[
					"c",
					-1.14,
					-.27,
					-2.13,
					-.84,
					-2.94,
					-1.65
				],
				[
					"c",
					-.99,
					-.99,
					-1.56,
					-2.16,
					-1.71,
					-3.54
				],
				[
					"c",
					-.09,
					-.81,
					.06,
					-1.53,
					.45,
					-2.13
				],
				[
					"c",
					.63,
					-.99,
					1.83,
					-1.56,
					3,
					-1.53
				],
				[
					"c",
					1.5,
					.09,
					2.64,
					1.32,
					2.73,
					2.94
				],
				[
					"c",
					.06,
					1.47,
					-.93,
					2.7,
					-2.37,
					2.97
				],
				[
					"c",
					-.45,
					.06,
					-.84,
					.03,
					-1.29,
					-.09
				],
				[
					"l",
					-.21,
					-.09
				],
				[
					"l",
					.09,
					.12
				],
				[
					"c",
					.39,
					.54,
					.78,
					.93,
					1.32,
					1.26
				],
				[
					"c",
					1.35,
					.87,
					3.06,
					1.02,
					4.35,
					.36
				],
				[
					"c",
					1.44,
					-.72,
					2.52,
					-2.28,
					2.97,
					-4.35
				],
				[
					"c",
					.15,
					-.66,
					.24,
					-1.5,
					.3,
					-3.03
				],
				[
					"c",
					.03,
					-.84,
					.03,
					-2.94,
					0,
					-3
				],
				[
					"c",
					-.03,
					0,
					-.18,
					0,
					-.36,
					.03
				],
				[
					"c",
					-.66,
					.12,
					-.99,
					.12,
					-1.83,
					.12
				],
				[
					"c",
					-1.05,
					0,
					-1.71,
					-.06,
					-2.61,
					-.3
				],
				[
					"c",
					-4.02,
					-.99,
					-7.11,
					-4.35,
					-7.8,
					-8.46
				],
				[
					"c",
					-.12,
					-.66,
					-.12,
					-.99,
					-.12,
					-1.83
				],
				[
					"c",
					0,
					-.84,
					0,
					-1.14,
					.15,
					-1.92
				],
				[
					"c",
					.36,
					-2.28,
					1.41,
					-4.62,
					3.3,
					-7.29
				],
				[
					"l",
					2.79,
					-3.6
				],
				[
					"c",
					.54,
					-.66,
					.96,
					-1.2,
					.96,
					-1.23
				],
				[
					"c",
					0,
					-.03,
					-.09,
					-.33,
					-.18,
					-.69
				],
				[
					"c",
					-.96,
					-3.21,
					-1.41,
					-5.28,
					-1.59,
					-7.68
				],
				[
					"c",
					-.12,
					-1.38,
					-.15,
					-3.09,
					-.06,
					-3.96
				],
				[
					"c",
					.33,
					-2.67,
					1.38,
					-5.07,
					3.12,
					-7.08
				],
				[
					"c",
					.36,
					-.42,
					.99,
					-1.05,
					1.17,
					-1.14
				],
				["z"],
				[
					"m",
					2.01,
					4.71
				],
				[
					"c",
					-.15,
					-.3,
					-.3,
					-.54,
					-.3,
					-.54
				],
				[
					"c",
					-.03,
					0,
					-.18,
					.09,
					-.3,
					.21
				],
				[
					"c",
					-2.4,
					1.74,
					-3.87,
					4.2,
					-4.26,
					7.11
				],
				[
					"c",
					-.06,
					.54,
					-.06,
					1.41,
					-.03,
					1.89
				],
				[
					"c",
					.09,
					1.29,
					.48,
					3.12,
					1.08,
					5.22
				],
				[
					"c",
					.15,
					.42,
					.24,
					.78,
					.24,
					.81
				],
				[
					"c",
					0,
					.03,
					.84,
					-1.11,
					1.23,
					-1.68
				],
				[
					"c",
					1.89,
					-2.73,
					2.88,
					-5.07,
					3.15,
					-7.53
				],
				[
					"c",
					.09,
					-.57,
					.12,
					-1.74,
					.06,
					-2.37
				],
				[
					"c",
					-.09,
					-1.23,
					-.27,
					-1.92,
					-.87,
					-3.12
				],
				["z"],
				[
					"m",
					-2.94,
					20.7
				],
				[
					"c",
					-.21,
					-.72,
					-.39,
					-1.32,
					-.42,
					-1.32
				],
				[
					"c",
					0,
					0,
					-1.2,
					1.47,
					-1.86,
					2.37
				],
				[
					"c",
					-2.79,
					3.63,
					-4.02,
					6.3,
					-4.35,
					9.3
				],
				[
					"c",
					-.03,
					.21,
					-.03,
					.69,
					-.03,
					1.08
				],
				[
					"c",
					0,
					.69,
					0,
					.75,
					.06,
					1.11
				],
				[
					"c",
					.12,
					.54,
					.27,
					.99,
					.51,
					1.47
				],
				[
					"c",
					.69,
					1.38,
					1.83,
					2.55,
					3.42,
					3.42
				],
				[
					"c",
					.96,
					.54,
					2.07,
					.9,
					3.21,
					1.08
				],
				[
					"c",
					.78,
					.12,
					2.04,
					.12,
					2.94,
					-.03
				],
				[
					"c",
					.51,
					-.06,
					.45,
					-.03,
					.42,
					-.3
				],
				[
					"c",
					-.24,
					-3.33,
					-.72,
					-6.33,
					-1.62,
					-10.08
				],
				[
					"c",
					-.09,
					-.39,
					-.18,
					-.75,
					-.18,
					-.78
				],
				[
					"c",
					-.03,
					-.03,
					-.42,
					0,
					-.81,
					.09
				],
				[
					"c",
					-.9,
					.18,
					-1.65,
					.57,
					-2.22,
					1.14
				],
				[
					"c",
					-.72,
					.72,
					-1.08,
					1.65,
					-1.05,
					2.64
				],
				[
					"c",
					.06,
					.96,
					.48,
					1.83,
					1.23,
					2.58
				],
				[
					"c",
					.36,
					.36,
					.72,
					.63,
					1.17,
					.9
				],
				[
					"c",
					.33,
					.18,
					.36,
					.21,
					.42,
					.33
				],
				[
					"c",
					.18,
					.42,
					-.18,
					.9,
					-.6,
					.87
				],
				[
					"c",
					-.18,
					-.03,
					-.84,
					-.36,
					-1.26,
					-.63
				],
				[
					"c",
					-.78,
					-.51,
					-1.38,
					-1.11,
					-1.86,
					-1.83
				],
				[
					"c",
					-1.77,
					-2.7,
					-.99,
					-6.42,
					1.71,
					-8.19
				],
				[
					"c",
					.3,
					-.21,
					.81,
					-.48,
					1.17,
					-.63
				],
				[
					"c",
					.3,
					-.09,
					1.02,
					-.3,
					1.14,
					-.3
				],
				[
					"c",
					.06,
					0,
					.09,
					0,
					.09,
					-.03
				],
				[
					"c",
					.03,
					-.03,
					-.51,
					-1.92,
					-1.23,
					-4.26
				],
				["z"],
				[
					"m",
					3.78,
					7.41
				],
				[
					"c",
					-.18,
					-.03,
					-.36,
					-.06,
					-.39,
					-.06
				],
				[
					"c",
					-.03,
					0,
					0,
					.21,
					.18,
					1.02
				],
				[
					"c",
					.75,
					3.18,
					1.26,
					6.3,
					1.5,
					9.09
				],
				[
					"c",
					.06,
					.72,
					0,
					.69,
					.51,
					.42
				],
				[
					"c",
					.78,
					-.36,
					1.44,
					-.96,
					1.98,
					-1.77
				],
				[
					"c",
					1.08,
					-1.62,
					1.2,
					-3.69,
					.3,
					-5.55
				],
				[
					"c",
					-.81,
					-1.62,
					-2.31,
					-2.79,
					-4.08,
					-3.15
				],
				["z"]
			],
			w: 19.051,
			h: 57.057
		},
		"clefs.perc": {
			d: [
				[
					"M",
					5.07,
					-7.44
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"l",
					1.53,
					0
				],
				[
					"l",
					1.53,
					0
				],
				[
					"l",
					.09,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					7.35
				],
				[
					"l",
					0,
					7.32
				],
				[
					"l",
					-.06,
					.09
				],
				[
					"l",
					-.09,
					.06
				],
				[
					"l",
					-1.53,
					0
				],
				[
					"l",
					-1.53,
					0
				],
				[
					"l",
					-.09,
					-.06
				],
				[
					"l",
					-.06,
					-.09
				],
				[
					"l",
					0,
					-7.32
				],
				[
					"l",
					0,
					-7.35
				],
				["z"],
				[
					"m",
					6.63,
					0
				],
				[
					"l",
					.09,
					-.06
				],
				[
					"l",
					1.53,
					0
				],
				[
					"l",
					1.53,
					0
				],
				[
					"l",
					.09,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					7.35
				],
				[
					"l",
					0,
					7.32
				],
				[
					"l",
					-.06,
					.09
				],
				[
					"l",
					-.09,
					.06
				],
				[
					"l",
					-1.53,
					0
				],
				[
					"l",
					-1.53,
					0
				],
				[
					"l",
					-.09,
					-.06
				],
				[
					"l",
					-.06,
					-.09
				],
				[
					"l",
					0,
					-7.32
				],
				[
					"l",
					0,
					-7.35
				],
				["z"]
			],
			w: 21,
			h: 14.97
		},
		"tab.big": {
			d: [
				[
					"M",
					20.16,
					-21.66
				],
				[
					"c",
					.24,
					-.09,
					.66,
					.09,
					.78,
					.36
				],
				[
					"c",
					.09,
					.21,
					.09,
					.24,
					-.18,
					.54
				],
				[
					"c",
					-.78,
					.81,
					-1.86,
					1.44,
					-2.94,
					1.71
				],
				[
					"c",
					-.87,
					.24,
					-1.71,
					.24,
					-2.55,
					.03
				],
				[
					"l",
					-.06,
					-.03
				],
				[
					"l",
					-.18,
					.99
				],
				[
					"c",
					-.33,
					1.98,
					-.75,
					4.26,
					-.96,
					5.04
				],
				[
					"c",
					-.42,
					1.65,
					-1.26,
					3.18,
					-2.28,
					4.14
				],
				[
					"c",
					-.57,
					.57,
					-1.17,
					.9,
					-1.86,
					1.08
				],
				[
					"c",
					-.18,
					.06,
					-.33,
					.06,
					-.66,
					.06
				],
				[
					"c",
					-.54,
					0,
					-.78,
					-.03,
					-1.23,
					-.27
				],
				[
					"c",
					-.39,
					-.18,
					-.66,
					-.39,
					-1.38,
					-.99
				],
				[
					"c",
					-.3,
					-.24,
					-.66,
					-.51,
					-.75,
					-.57
				],
				[
					"c",
					-.21,
					-.15,
					-.27,
					-.24,
					-.24,
					-.45
				],
				[
					"c",
					.06,
					-.27,
					.36,
					-.6,
					.6,
					-.66
				],
				[
					"c",
					.18,
					-.03,
					.33,
					.06,
					.9,
					.57
				],
				[
					"c",
					.48,
					.42,
					.72,
					.57,
					.93,
					.69
				],
				[
					"c",
					.66,
					.33,
					1.38,
					.21,
					1.95,
					-.36
				],
				[
					"c",
					.63,
					-.6,
					1.05,
					-1.62,
					1.23,
					-3
				],
				[
					"c",
					.03,
					-.18,
					.09,
					-.66,
					.09,
					-1.11
				],
				[
					"c",
					.09,
					-1.56,
					.33,
					-3.81,
					.57,
					-5.49
				],
				[
					"c",
					.06,
					-.33,
					.09,
					-.63,
					.09,
					-.63
				],
				[
					"c",
					-.03,
					-.03,
					-.81,
					-.12,
					-1.02,
					-.12
				],
				[
					"c",
					-.57,
					0,
					-1.32,
					.12,
					-1.8,
					.33
				],
				[
					"c",
					-.87,
					.3,
					-1.35,
					.78,
					-1.5,
					1.41
				],
				[
					"c",
					-.18,
					.63,
					.09,
					1.26,
					.66,
					1.65
				],
				[
					"c",
					.12,
					.06,
					.15,
					.12,
					.18,
					.24
				],
				[
					"c",
					.09,
					.27,
					.06,
					.57,
					-.09,
					.75
				],
				[
					"c",
					-.03,
					.06,
					-.12,
					.09,
					-.27,
					.15
				],
				[
					"c",
					-.72,
					.21,
					-1.44,
					.15,
					-2.1,
					-.18
				],
				[
					"c",
					-.54,
					-.27,
					-.96,
					-.66,
					-1.2,
					-1.14
				],
				[
					"c",
					-.39,
					-.75,
					-.33,
					-1.74,
					.15,
					-2.52
				],
				[
					"c",
					.27,
					-.42,
					.84,
					-.93,
					1.41,
					-1.23
				],
				[
					"c",
					1.17,
					-.57,
					2.88,
					-.9,
					4.8,
					-.9
				],
				[
					"c",
					.69,
					0,
					.78,
					0,
					1.08,
					.06
				],
				[
					"c",
					.45,
					.09,
					1.11,
					.3,
					2.07,
					.6
				],
				[
					"c",
					1.47,
					.48,
					1.83,
					.57,
					2.55,
					.54
				],
				[
					"c",
					1.02,
					-.06,
					2.04,
					-.45,
					2.94,
					-1.11
				],
				[
					"c",
					.12,
					-.09,
					.24,
					-.18,
					.27,
					-.18
				],
				["z"],
				[
					"m",
					-5.88,
					13.05
				],
				[
					"c",
					.21,
					-.03,
					.81,
					0,
					1.08,
					.06
				],
				[
					"c",
					.48,
					.12,
					.9,
					.42,
					.99,
					.69
				],
				[
					"c",
					.03,
					.09,
					.03,
					.15,
					0,
					.27
				],
				[
					"c",
					0,
					.09,
					-.03,
					.57,
					-.06,
					1.08
				],
				[
					"c",
					-.09,
					2.19,
					-.24,
					5.76,
					-.39,
					8.28
				],
				[
					"c",
					-.06,
					1.53,
					-.06,
					1.77,
					.03,
					2.01
				],
				[
					"c",
					.09,
					.18,
					.15,
					.24,
					.3,
					.3
				],
				[
					"c",
					.24,
					.12,
					.54,
					.06,
					1.23,
					-.27
				],
				[
					"c",
					.57,
					-.27,
					.66,
					-.3,
					.75,
					-.24
				],
				[
					"c",
					.09,
					.06,
					.18,
					.3,
					.18,
					.45
				],
				[
					"c",
					0,
					.33,
					-.15,
					.51,
					-.45,
					.63
				],
				[
					"c",
					-.12,
					.03,
					-.39,
					.15,
					-.6,
					.27
				],
				[
					"c",
					-1.17,
					.6,
					-1.38,
					.69,
					-1.8,
					.72
				],
				[
					"c",
					-.45,
					.03,
					-.78,
					-.09,
					-1.08,
					-.39
				],
				[
					"c",
					-.39,
					-.42,
					-.66,
					-1.2,
					-1.02,
					-3.12
				],
				[
					"c",
					-.24,
					-1.23,
					-.36,
					-2.07,
					-.54,
					-3.75
				],
				[
					"l",
					0,
					-.18
				],
				[
					"l",
					-.36,
					.45
				],
				[
					"c",
					-.6,
					.75,
					-1.32,
					1.59,
					-1.95,
					2.25
				],
				[
					"c",
					-.15,
					.18,
					-.27,
					.3,
					-.27,
					.33
				],
				[
					"c",
					0,
					0,
					.06,
					.09,
					.15,
					.18
				],
				[
					"c",
					.24,
					.33,
					.6,
					.57,
					1.05,
					.69
				],
				[
					"c",
					.18,
					.06,
					.3,
					.06,
					.69,
					.06
				],
				[
					"l",
					.48,
					.03
				],
				[
					"l",
					.06,
					.12
				],
				[
					"c",
					.15,
					.27,
					.03,
					.72,
					-.21,
					.9
				],
				[
					"c",
					-.18,
					.12,
					-.93,
					.27,
					-1.41,
					.27
				],
				[
					"c",
					-.84,
					0,
					-1.59,
					-.3,
					-1.98,
					-.84
				],
				[
					"l",
					-.12,
					-.15
				],
				[
					"l",
					-.45,
					.42
				],
				[
					"c",
					-.99,
					.87,
					-1.53,
					1.32,
					-2.16,
					1.74
				],
				[
					"c",
					-.78,
					.51,
					-1.5,
					.84,
					-2.1,
					.93
				],
				[
					"c",
					-.69,
					.12,
					-1.2,
					.03,
					-1.95,
					-.42
				],
				[
					"c",
					-.21,
					-.12,
					-.51,
					-.27,
					-.66,
					-.36
				],
				[
					"c",
					-.24,
					-.12,
					-.3,
					-.18,
					-.33,
					-.24
				],
				[
					"c",
					-.12,
					-.27,
					.15,
					-.78,
					.45,
					-.93
				],
				[
					"c",
					.24,
					-.12,
					.33,
					-.09,
					.9,
					.18
				],
				[
					"c",
					.6,
					.3,
					.84,
					.39,
					1.2,
					.36
				],
				[
					"c",
					.87,
					-.09,
					1.77,
					-.69,
					3.24,
					-2.31
				],
				[
					"c",
					2.67,
					-2.85,
					4.59,
					-5.94,
					5.7,
					-9.15
				],
				[
					"c",
					.15,
					-.45,
					.24,
					-.63,
					.42,
					-.81
				],
				[
					"c",
					.21,
					-.24,
					.6,
					-.45,
					.99,
					-.51
				],
				["z"],
				[
					"m",
					-3.99,
					16.05
				],
				[
					"c",
					.18,
					0,
					.69,
					-.03,
					1.17,
					0
				],
				[
					"c",
					3.27,
					.03,
					5.37,
					.75,
					6,
					2.07
				],
				[
					"c",
					.45,
					.99,
					.12,
					2.4,
					-.81,
					3.42
				],
				[
					"c",
					-.24,
					.27,
					-.57,
					.57,
					-.84,
					.75
				],
				[
					"c",
					-.09,
					.06,
					-.18,
					.09,
					-.18,
					.12
				],
				[
					"c",
					0,
					0,
					.18,
					.03,
					.42,
					.09
				],
				[
					"c",
					1.23,
					.3,
					2.01,
					.81,
					2.37,
					1.59
				],
				[
					"c",
					.27,
					.54,
					.3,
					1.32,
					.09,
					2.1
				],
				[
					"c",
					-.12,
					.36,
					-.45,
					1.05,
					-.69,
					1.35
				],
				[
					"c",
					-.87,
					1.17,
					-2.1,
					1.92,
					-3.54,
					2.25
				],
				[
					"c",
					-.36,
					.06,
					-.48,
					.06,
					-.96,
					.06
				],
				[
					"c",
					-.45,
					0,
					-.66,
					0,
					-.84,
					-.03
				],
				[
					"c",
					-.84,
					-.18,
					-1.47,
					-.51,
					-2.07,
					-1.11
				],
				[
					"c",
					-.33,
					-.33,
					-.45,
					-.51,
					-.45,
					-.63
				],
				[
					"c",
					0,
					-.06,
					.03,
					-.15,
					.06,
					-.24
				],
				[
					"c",
					.18,
					-.33,
					.69,
					-.6,
					.93,
					-.48
				],
				[
					"c",
					.03,
					.03,
					.15,
					.12,
					.27,
					.24
				],
				[
					"c",
					.39,
					.42,
					.99,
					.57,
					1.62,
					.45
				],
				[
					"c",
					1.05,
					-.21,
					1.98,
					-1.02,
					2.31,
					-2.01
				],
				[
					"c",
					.48,
					-1.53,
					-.48,
					-2.55,
					-2.58,
					-2.67
				],
				[
					"c",
					-.21,
					0,
					-.36,
					-.03,
					-.42,
					-.06
				],
				[
					"c",
					-.15,
					-.09,
					-.21,
					-.51,
					-.06,
					-.78
				],
				[
					"c",
					.12,
					-.27,
					.24,
					-.33,
					.6,
					-.36
				],
				[
					"c",
					.57,
					-.06,
					1.11,
					-.42,
					1.5,
					-.99
				],
				[
					"c",
					.48,
					-.72,
					.54,
					-1.59,
					.18,
					-2.31
				],
				[
					"c",
					-.12,
					-.21,
					-.45,
					-.54,
					-.69,
					-.69
				],
				[
					"c",
					-.33,
					-.21,
					-.93,
					-.45,
					-1.35,
					-.51
				],
				[
					"l",
					-.12,
					-.03
				],
				[
					"l",
					-.06,
					.48
				],
				[
					"c",
					-.54,
					2.94,
					-1.14,
					6.24,
					-1.29,
					6.75
				],
				[
					"c",
					-.33,
					1.35,
					-.93,
					2.61,
					-1.65,
					3.6
				],
				[
					"c",
					-.3,
					.36,
					-.81,
					.9,
					-1.14,
					1.14
				],
				[
					"c",
					-.3,
					.24,
					-.84,
					.48,
					-1.14,
					.57
				],
				[
					"c",
					-.33,
					.09,
					-.96,
					.09,
					-1.26,
					.03
				],
				[
					"c",
					-.45,
					-.12,
					-.87,
					-.39,
					-1.53,
					-.96
				],
				[
					"c",
					-.24,
					-.15,
					-.51,
					-.39,
					-.63,
					-.48
				],
				[
					"c",
					-.3,
					-.21,
					-.33,
					-.33,
					-.21,
					-.63
				],
				[
					"c",
					.12,
					-.18,
					.27,
					-.36,
					.42,
					-.45
				],
				[
					"c",
					.27,
					-.12,
					.36,
					-.09,
					.87,
					.33
				],
				[
					"c",
					.78,
					.6,
					1.08,
					.75,
					1.65,
					.72
				],
				[
					"c",
					.45,
					-.03,
					.81,
					-.21,
					1.17,
					-.54
				],
				[
					"c",
					.87,
					-.9,
					1.38,
					-2.85,
					1.38,
					-5.37
				],
				[
					"c",
					0,
					-.6,
					.03,
					-1.11,
					.12,
					-2.04
				],
				[
					"c",
					.06,
					-.69,
					.24,
					-2.01,
					.33,
					-2.58
				],
				[
					"c",
					.06,
					-.24,
					.06,
					-.42,
					.06,
					-.42
				],
				[
					"c",
					0,
					0,
					-.12,
					.03,
					-.21,
					.09
				],
				[
					"c",
					-1.44,
					.57,
					-2.16,
					1.65,
					-1.74,
					2.55
				],
				[
					"c",
					.09,
					.15,
					.18,
					.24,
					.27,
					.33
				],
				[
					"c",
					.24,
					.21,
					.3,
					.27,
					.33,
					.39
				],
				[
					"c",
					.06,
					.24,
					0,
					.63,
					-.15,
					.78
				],
				[
					"c",
					-.09,
					.12,
					-.54,
					.21,
					-.96,
					.24
				],
				[
					"c",
					-1.02,
					.03,
					-2.01,
					-.48,
					-2.43,
					-1.32
				],
				[
					"c",
					-.21,
					-.45,
					-.27,
					-.9,
					-.15,
					-1.44
				],
				[
					"c",
					.06,
					-.27,
					.21,
					-.66,
					.39,
					-.93
				],
				[
					"c",
					.87,
					-1.29,
					3,
					-2.22,
					5.64,
					-2.43
				],
				["z"]
			],
			w: 19.643,
			h: 43.325
		},
		"tab.tiny": {
			d: [
				[
					"M",
					16.02,
					-17.25
				],
				[
					"c",
					.12,
					-.09,
					.15,
					-.09,
					.27,
					-.09
				],
				[
					"c",
					.21,
					.03,
					.51,
					.3,
					.51,
					.45
				],
				[
					"c",
					0,
					.06,
					-.12,
					.18,
					-.3,
					.36
				],
				[
					"c",
					-1.11,
					1.08,
					-2.55,
					1.59,
					-3.84,
					1.41
				],
				[
					"c",
					-.15,
					-.03,
					-.33,
					-.06,
					-.39,
					-.09
				],
				[
					"c",
					-.06,
					-.03,
					-.09,
					-.03,
					-.12,
					-.03
				],
				[
					"c",
					0,
					0,
					-.06,
					.42,
					-.15,
					.93
				],
				[
					"c",
					-.33,
					2.01,
					-.66,
					3.69,
					-.84,
					4.26
				],
				[
					"c",
					-.42,
					1.41,
					-1.23,
					2.67,
					-2.16,
					3.33
				],
				[
					"c",
					-.27,
					.18,
					-.75,
					.42,
					-.99,
					.48
				],
				[
					"c",
					-.3,
					.09,
					-.72,
					.09,
					-1.02,
					.06
				],
				[
					"c",
					-.45,
					-.09,
					-.84,
					-.33,
					-1.53,
					-.9
				],
				[
					"c",
					-.21,
					-.18,
					-.51,
					-.39,
					-.63,
					-.48
				],
				[
					"c",
					-.27,
					-.21,
					-.3,
					-.24,
					-.3,
					-.36
				],
				[
					"c",
					0,
					-.12,
					.09,
					-.36,
					.18,
					-.45
				],
				[
					"c",
					.09,
					-.09,
					.27,
					-.18,
					.36,
					-.18
				],
				[
					"c",
					.12,
					0,
					.3,
					.12,
					.66,
					.45
				],
				[
					"c",
					.57,
					.51,
					.87,
					.69,
					1.23,
					.72
				],
				[
					"c",
					.93,
					.06,
					1.68,
					-.78,
					1.98,
					-2.37
				],
				[
					"c",
					.09,
					-.39,
					.15,
					-.75,
					.18,
					-1.53
				],
				[
					"c",
					.06,
					-.99,
					.24,
					-2.79,
					.42,
					-4.05
				],
				[
					"c",
					.03,
					-.3,
					.06,
					-.57,
					.06,
					-.6
				],
				[
					"c",
					0,
					-.06,
					-.03,
					-.09,
					-.15,
					-.12
				],
				[
					"c",
					-.9,
					-.18,
					-2.13,
					.06,
					-2.76,
					.57
				],
				[
					"c",
					-.36,
					.3,
					-.51,
					.6,
					-.51,
					1.02
				],
				[
					"c",
					0,
					.45,
					.15,
					.75,
					.48,
					.99
				],
				[
					"c",
					.06,
					.06,
					.15,
					.18,
					.18,
					.24
				],
				[
					"c",
					.12,
					.24,
					.03,
					.63,
					-.15,
					.69
				],
				[
					"c",
					-.24,
					.12,
					-.6,
					.15,
					-.9,
					.15
				],
				[
					"c",
					-.36,
					-.03,
					-.57,
					-.09,
					-.87,
					-.24
				],
				[
					"c",
					-.78,
					-.36,
					-1.23,
					-1.11,
					-1.2,
					-1.92
				],
				[
					"c",
					.12,
					-1.53,
					1.74,
					-2.49,
					4.62,
					-2.7
				],
				[
					"c",
					1.2,
					-.09,
					1.47,
					-.03,
					3.33,
					.57
				],
				[
					"c",
					.9,
					.3,
					1.14,
					.36,
					1.56,
					.39
				],
				[
					"c",
					.45,
					0,
					.93,
					-.06,
					1.38,
					-.21
				],
				[
					"c",
					.51,
					-.18,
					.81,
					-.33,
					1.41,
					-.75
				],
				["z"],
				[
					"m",
					-4.68,
					10.38
				],
				[
					"c",
					.39,
					-.06,
					.84,
					0,
					1.2,
					.15
				],
				[
					"c",
					.24,
					.12,
					.36,
					.21,
					.45,
					.36
				],
				[
					"l",
					.09,
					.09
				],
				[
					"l",
					-.06,
					1.41
				],
				[
					"c",
					-.09,
					2.19,
					-.18,
					3.96,
					-.27,
					5.49
				],
				[
					"c",
					-.03,
					.78,
					-.06,
					1.59,
					-.06,
					1.86
				],
				[
					"c",
					0,
					.42,
					0,
					.48,
					.06,
					.57
				],
				[
					"c",
					.06,
					.18,
					.18,
					.24,
					.36,
					.27
				],
				[
					"c",
					.18,
					0,
					.39,
					-.06,
					.84,
					-.27
				],
				[
					"c",
					.45,
					-.21,
					.54,
					-.24,
					.63,
					-.18
				],
				[
					"c",
					.12,
					.12,
					.15,
					.54,
					.03,
					.69
				],
				[
					"c",
					-.03,
					.03,
					-.15,
					.12,
					-.27,
					.18
				],
				[
					"c",
					-.15,
					.03,
					-.3,
					.12,
					-.36,
					.15
				],
				[
					"c",
					-.87,
					.45,
					-1.02,
					.51,
					-1.26,
					.57
				],
				[
					"c",
					-.33,
					.09,
					-.6,
					.06,
					-.84,
					-.06
				],
				[
					"c",
					-.42,
					-.18,
					-.63,
					-.6,
					-.87,
					-1.44
				],
				[
					"c",
					-.3,
					-1.23,
					-.57,
					-2.97,
					-.66,
					-4.08
				],
				[
					"c",
					0,
					-.18,
					-.03,
					-.3,
					-.03,
					-.33
				],
				[
					"l",
					-.06,
					.06
				],
				[
					"c",
					-.18,
					.27,
					-1.11,
					1.38,
					-1.68,
					2.01
				],
				[
					"l",
					-.33,
					.33
				],
				[
					"l",
					.06,
					.09
				],
				[
					"c",
					.06,
					.15,
					.27,
					.33,
					.48,
					.42
				],
				[
					"c",
					.27,
					.18,
					.51,
					.24,
					.96,
					.27
				],
				[
					"l",
					.39,
					0
				],
				[
					"l",
					.03,
					.12
				],
				[
					"c",
					.12,
					.21,
					.03,
					.57,
					-.15,
					.69
				],
				[
					"c",
					-.03,
					.03,
					-.21,
					.09,
					-.36,
					.15
				],
				[
					"c",
					-.27,
					.06,
					-.39,
					.06,
					-.75,
					.06
				],
				[
					"c",
					-.48,
					0,
					-.75,
					-.03,
					-1.08,
					-.21
				],
				[
					"c",
					-.21,
					-.12,
					-.51,
					-.36,
					-.57,
					-.48
				],
				[
					"l",
					-.03,
					-.09
				],
				[
					"l",
					-.39,
					.36
				],
				[
					"c",
					-1.47,
					1.35,
					-2.49,
					1.98,
					-3.42,
					2.13
				],
				[
					"c",
					-.54,
					.09,
					-.96,
					-.03,
					-1.62,
					-.39
				],
				[
					"c",
					-.21,
					-.15,
					-.45,
					-.27,
					-.54,
					-.3
				],
				[
					"c",
					-.18,
					-.09,
					-.21,
					-.21,
					-.12,
					-.45
				],
				[
					"c",
					.06,
					-.27,
					.33,
					-.48,
					.54,
					-.48
				],
				[
					"c",
					.03,
					0,
					.27,
					.09,
					.48,
					.21
				],
				[
					"c",
					.48,
					.24,
					.69,
					.27,
					.99,
					.27
				],
				[
					"c",
					.6,
					-.06,
					1.17,
					-.42,
					2.1,
					-1.35
				],
				[
					"c",
					2.22,
					-2.22,
					4.02,
					-4.98,
					4.95,
					-7.59
				],
				[
					"c",
					.21,
					-.57,
					.3,
					-.78,
					.48,
					-.93
				],
				[
					"c",
					.15,
					-.15,
					.42,
					-.27,
					.66,
					-.33
				],
				["z"],
				[
					"m",
					-3.06,
					12.84
				],
				[
					"c",
					.27,
					-.03,
					1.68,
					0,
					2.01,
					.03
				],
				[
					"c",
					1.92,
					.18,
					3.15,
					.69,
					3.63,
					1.5
				],
				[
					"c",
					.18,
					.33,
					.24,
					.51,
					.21,
					.93
				],
				[
					"c",
					0,
					.45,
					-.06,
					.72,
					-.24,
					1.11
				],
				[
					"c",
					-.24,
					.51,
					-.69,
					1.02,
					-1.17,
					1.35
				],
				[
					"c",
					-.21,
					.15,
					-.21,
					.15,
					-.12,
					.18
				],
				[
					"c",
					.72,
					.15,
					1.11,
					.3,
					1.5,
					.57
				],
				[
					"c",
					.39,
					.24,
					.63,
					.57,
					.75,
					.96
				],
				[
					"c",
					.09,
					.3,
					.09,
					.96,
					0,
					1.29
				],
				[
					"c",
					-.15,
					.57,
					-.39,
					1.05,
					-.78,
					1.5
				],
				[
					"c",
					-.66,
					.75,
					-1.62,
					1.32,
					-2.61,
					1.53
				],
				[
					"c",
					-.27,
					.06,
					-.42,
					.06,
					-.84,
					.06
				],
				[
					"c",
					-.48,
					0,
					-.57,
					0,
					-.81,
					-.06
				],
				[
					"c",
					-.6,
					-.18,
					-1.05,
					-.42,
					-1.47,
					-.81
				],
				[
					"c",
					-.36,
					-.39,
					-.42,
					-.51,
					-.3,
					-.75
				],
				[
					"c",
					.12,
					-.21,
					.39,
					-.39,
					.6,
					-.39
				],
				[
					"c",
					.09,
					0,
					.15,
					.03,
					.33,
					.18
				],
				[
					"c",
					.12,
					.12,
					.27,
					.24,
					.36,
					.27
				],
				[
					"c",
					.96,
					.48,
					2.46,
					-.33,
					2.82,
					-1.5
				],
				[
					"c",
					.24,
					-.81,
					-.03,
					-1.44,
					-.69,
					-1.77
				],
				[
					"c",
					-.39,
					-.21,
					-1.02,
					-.33,
					-1.53,
					-.33
				],
				[
					"c",
					-.18,
					0,
					-.21,
					0,
					-.27,
					-.09
				],
				[
					"c",
					-.06,
					-.09,
					-.06,
					-.3,
					-.03,
					-.48
				],
				[
					"c",
					.06,
					-.18,
					.18,
					-.36,
					.33,
					-.36
				],
				[
					"c",
					.39,
					-.06,
					.51,
					-.09,
					.72,
					-.18
				],
				[
					"c",
					.69,
					-.36,
					1.11,
					-1.23,
					.99,
					-2.01
				],
				[
					"c",
					-.09,
					-.51,
					-.42,
					-.9,
					-.93,
					-1.17
				],
				[
					"c",
					-.24,
					-.12,
					-.6,
					-.27,
					-.87,
					-.3
				],
				[
					"c",
					-.09,
					-.03,
					-.09,
					-.03,
					-.12,
					.12
				],
				[
					"c",
					0,
					.09,
					-.21,
					1.11,
					-.42,
					2.25
				],
				[
					"c",
					-.66,
					3.75,
					-.72,
					3.99,
					-1.26,
					5.07
				],
				[
					"c",
					-.9,
					1.89,
					-2.25,
					2.85,
					-3.48,
					2.61
				],
				[
					"c",
					-.39,
					-.09,
					-.69,
					-.27,
					-1.38,
					-.84
				],
				[
					"c",
					-.63,
					-.51,
					-.63,
					-.48,
					-.63,
					-.6
				],
				[
					"c",
					0,
					-.18,
					.18,
					-.48,
					.39,
					-.57
				],
				[
					"c",
					.21,
					-.12,
					.3,
					-.09,
					.81,
					.33
				],
				[
					"c",
					.15,
					.15,
					.39,
					.3,
					.54,
					.36
				],
				[
					"c",
					.18,
					.12,
					.27,
					.12,
					.48,
					.15
				],
				[
					"c",
					.99,
					.06,
					1.71,
					-.78,
					2.04,
					-2.46
				],
				[
					"c",
					.12,
					-.66,
					.18,
					-1.14,
					.21,
					-2.22
				],
				[
					"c",
					.03,
					-1.23,
					.12,
					-2.25,
					.36,
					-3.63
				],
				[
					"c",
					.03,
					-.24,
					.06,
					-.45,
					.06,
					-.48
				],
				[
					"c",
					-.06,
					-.03,
					-.66,
					.27,
					-.9,
					.42
				],
				[
					"c",
					-.06,
					.06,
					-.21,
					.18,
					-.33,
					.3
				],
				[
					"c",
					-.57,
					.57,
					-.6,
					1.35,
					-.06,
					1.74
				],
				[
					"c",
					.18,
					.12,
					.24,
					.24,
					.21,
					.51
				],
				[
					"c",
					-.03,
					.3,
					-.15,
					.42,
					-.57,
					.48
				],
				[
					"c",
					-1.11,
					.24,
					-2.22,
					-.42,
					-2.43,
					-1.38
				],
				[
					"c",
					-.09,
					-.45,
					.03,
					-1.02,
					.3,
					-1.47
				],
				[
					"c",
					.18,
					-.24,
					.6,
					-.63,
					.9,
					-.84
				],
				[
					"c",
					.9,
					-.6,
					2.28,
					-1.02,
					3.69,
					-1.11
				],
				["z"]
			],
			w: 15.709,
			h: 34.656
		},
		"timesig.common": {
			d: [
				[
					"M",
					6.66,
					-7.83
				],
				[
					"c",
					.72,
					-.06,
					1.41,
					-.03,
					1.98,
					.09
				],
				[
					"c",
					1.2,
					.27,
					2.34,
					.96,
					3.09,
					1.92
				],
				[
					"c",
					.63,
					.81,
					1.08,
					1.86,
					1.14,
					2.73
				],
				[
					"c",
					.06,
					1.02,
					-.51,
					1.92,
					-1.44,
					2.22
				],
				[
					"c",
					-.24,
					.09,
					-.3,
					.09,
					-.63,
					.09
				],
				[
					"c",
					-.33,
					0,
					-.42,
					0,
					-.63,
					-.06
				],
				[
					"c",
					-.66,
					-.24,
					-1.14,
					-.63,
					-1.41,
					-1.2
				],
				[
					"c",
					-.15,
					-.3,
					-.21,
					-.51,
					-.24,
					-.9
				],
				[
					"c",
					-.06,
					-1.08,
					.57,
					-2.04,
					1.56,
					-2.37
				],
				[
					"c",
					.18,
					-.06,
					.27,
					-.06,
					.63,
					-.06
				],
				[
					"l",
					.45,
					0
				],
				[
					"c",
					.06,
					.03,
					.09,
					.03,
					.09,
					0
				],
				[
					"c",
					0,
					0,
					-.09,
					-.12,
					-.24,
					-.27
				],
				[
					"c",
					-1.02,
					-1.11,
					-2.55,
					-1.68,
					-4.08,
					-1.5
				],
				[
					"c",
					-1.29,
					.15,
					-2.04,
					.69,
					-2.4,
					1.74
				],
				[
					"c",
					-.36,
					.93,
					-.42,
					1.89,
					-.42,
					5.37
				],
				[
					"c",
					0,
					2.97,
					.06,
					3.96,
					.24,
					4.77
				],
				[
					"c",
					.24,
					1.08,
					.63,
					1.68,
					1.41,
					2.07
				],
				[
					"c",
					.81,
					.39,
					2.16,
					.45,
					3.18,
					.09
				],
				[
					"c",
					1.29,
					-.45,
					2.37,
					-1.53,
					3.03,
					-2.97
				],
				[
					"c",
					.15,
					-.33,
					.33,
					-.87,
					.39,
					-1.17
				],
				[
					"c",
					.09,
					-.24,
					.15,
					-.36,
					.3,
					-.39
				],
				[
					"c",
					.21,
					-.03,
					.42,
					.15,
					.39,
					.36
				],
				[
					"c",
					-.06,
					.39,
					-.42,
					1.38,
					-.69,
					1.89
				],
				[
					"c",
					-.96,
					1.8,
					-2.49,
					2.94,
					-4.23,
					3.18
				],
				[
					"c",
					-.99,
					.12,
					-2.58,
					-.06,
					-3.63,
					-.45
				],
				[
					"c",
					-.96,
					-.36,
					-1.71,
					-.84,
					-2.4,
					-1.5
				],
				[
					"c",
					-1.11,
					-1.11,
					-1.8,
					-2.61,
					-2.04,
					-4.56
				],
				[
					"c",
					-.06,
					-.6,
					-.06,
					-2.01,
					0,
					-2.61
				],
				[
					"c",
					.24,
					-1.95,
					.9,
					-3.45,
					2.01,
					-4.56
				],
				[
					"c",
					.69,
					-.66,
					1.44,
					-1.11,
					2.37,
					-1.47
				],
				[
					"c",
					.63,
					-.24,
					1.47,
					-.42,
					2.22,
					-.48
				],
				["z"]
			],
			w: 13.038,
			h: 15.689
		},
		"timesig.cut": {
			d: [
				[
					"M",
					6.24,
					-10.44
				],
				[
					"c",
					.09,
					-.06,
					.09,
					-.06,
					.48,
					-.06
				],
				[
					"c",
					.36,
					0,
					.36,
					0,
					.45,
					.06
				],
				[
					"l",
					.06,
					.09
				],
				[
					"l",
					0,
					1.23
				],
				[
					"l",
					0,
					1.26
				],
				[
					"l",
					.27,
					0
				],
				[
					"c",
					1.26,
					0,
					2.49,
					.45,
					3.48,
					1.29
				],
				[
					"c",
					1.05,
					.87,
					1.8,
					2.28,
					1.89,
					3.48
				],
				[
					"c",
					.06,
					1.02,
					-.51,
					1.92,
					-1.44,
					2.22
				],
				[
					"c",
					-.24,
					.09,
					-.3,
					.09,
					-.63,
					.09
				],
				[
					"c",
					-.33,
					0,
					-.42,
					0,
					-.63,
					-.06
				],
				[
					"c",
					-.66,
					-.24,
					-1.14,
					-.63,
					-1.41,
					-1.2
				],
				[
					"c",
					-.15,
					-.3,
					-.21,
					-.51,
					-.24,
					-.9
				],
				[
					"c",
					-.06,
					-1.08,
					.57,
					-2.04,
					1.56,
					-2.37
				],
				[
					"c",
					.18,
					-.06,
					.27,
					-.06,
					.63,
					-.06
				],
				[
					"l",
					.45,
					0
				],
				[
					"c",
					.06,
					.03,
					.09,
					.03,
					.09,
					0
				],
				[
					"c",
					0,
					-.03,
					-.45,
					-.51,
					-.66,
					-.69
				],
				[
					"c",
					-.87,
					-.69,
					-1.83,
					-1.05,
					-2.94,
					-1.11
				],
				[
					"l",
					-.42,
					0
				],
				[
					"l",
					0,
					7.17
				],
				[
					"l",
					0,
					7.14
				],
				[
					"l",
					.42,
					0
				],
				[
					"c",
					.69,
					-.03,
					1.23,
					-.18,
					1.86,
					-.51
				],
				[
					"c",
					1.05,
					-.51,
					1.89,
					-1.47,
					2.46,
					-2.7
				],
				[
					"c",
					.15,
					-.33,
					.33,
					-.87,
					.39,
					-1.17
				],
				[
					"c",
					.09,
					-.24,
					.15,
					-.36,
					.3,
					-.39
				],
				[
					"c",
					.21,
					-.03,
					.42,
					.15,
					.39,
					.36
				],
				[
					"c",
					-.03,
					.24,
					-.21,
					.78,
					-.39,
					1.2
				],
				[
					"c",
					-.96,
					2.37,
					-2.94,
					3.9,
					-5.13,
					3.9
				],
				[
					"l",
					-.3,
					0
				],
				[
					"l",
					0,
					1.26
				],
				[
					"l",
					0,
					1.23
				],
				[
					"l",
					-.06,
					.09
				],
				[
					"c",
					-.09,
					.06,
					-.09,
					.06,
					-.45,
					.06
				],
				[
					"c",
					-.39,
					0,
					-.39,
					0,
					-.48,
					-.06
				],
				[
					"l",
					-.06,
					-.09
				],
				[
					"l",
					0,
					-1.29
				],
				[
					"l",
					0,
					-1.29
				],
				[
					"l",
					-.21,
					-.03
				],
				[
					"c",
					-1.23,
					-.21,
					-2.31,
					-.63,
					-3.21,
					-1.29
				],
				[
					"c",
					-.15,
					-.09,
					-.45,
					-.36,
					-.66,
					-.57
				],
				[
					"c",
					-1.11,
					-1.11,
					-1.8,
					-2.61,
					-2.04,
					-4.56
				],
				[
					"c",
					-.06,
					-.6,
					-.06,
					-2.01,
					0,
					-2.61
				],
				[
					"c",
					.24,
					-1.95,
					.93,
					-3.45,
					2.04,
					-4.59
				],
				[
					"c",
					.42,
					-.39,
					.78,
					-.66,
					1.26,
					-.93
				],
				[
					"c",
					.75,
					-.45,
					1.65,
					-.75,
					2.61,
					-.9
				],
				[
					"l",
					.21,
					-.03
				],
				[
					"l",
					0,
					-1.29
				],
				[
					"l",
					0,
					-1.29
				],
				["z"],
				[
					"m",
					-.06,
					10.44
				],
				[
					"c",
					0,
					-5.58,
					0,
					-6.99,
					-.03,
					-6.99
				],
				[
					"c",
					-.15,
					0,
					-.63,
					.27,
					-.87,
					.45
				],
				[
					"c",
					-.45,
					.36,
					-.75,
					.93,
					-.93,
					1.77
				],
				[
					"c",
					-.18,
					.81,
					-.24,
					1.8,
					-.24,
					4.74
				],
				[
					"c",
					0,
					2.97,
					.06,
					3.96,
					.24,
					4.77
				],
				[
					"c",
					.24,
					1.08,
					.66,
					1.68,
					1.41,
					2.07
				],
				[
					"c",
					.12,
					.06,
					.3,
					.12,
					.33,
					.15
				],
				[
					"l",
					.09,
					0
				],
				[
					"l",
					0,
					-6.96
				],
				["z"]
			],
			w: 13.038,
			h: 20.97
		},
		"timesig.imperfectum": {
			d: [[
				"M",
				13,
				-5
			], [
				"a",
				8,
				8,
				0,
				1,
				0,
				0,
				10
			]],
			w: 13.038,
			h: 20.97
		},
		"timesig.imperfectum2": {
			d: [[
				"M",
				13,
				-5
			], [
				"a",
				8,
				8,
				0,
				1,
				0,
				0,
				10
			]],
			w: 13.038,
			h: 20.97
		},
		"timesig.perfectum": {
			d: [[
				"M",
				13,
				-5
			], [
				"a",
				8,
				8,
				0,
				1,
				0,
				0,
				10
			]],
			w: 13.038,
			h: 20.97
		},
		"timesig.perfectum2": {
			d: [[
				"M",
				13,
				-5
			], [
				"a",
				8,
				8,
				0,
				1,
				0,
				0,
				10
			]],
			w: 13.038,
			h: 20.97
		},
		f: {
			d: [
				[
					"M",
					9.93,
					-14.28
				],
				[
					"c",
					1.53,
					-.18,
					2.88,
					.45,
					3.12,
					1.5
				],
				[
					"c",
					.12,
					.51,
					0,
					1.32,
					-.27,
					1.86
				],
				[
					"c",
					-.15,
					.3,
					-.42,
					.57,
					-.63,
					.69
				],
				[
					"c",
					-.69,
					.36,
					-1.56,
					.03,
					-1.83,
					-.69
				],
				[
					"c",
					-.09,
					-.24,
					-.09,
					-.69,
					0,
					-.87
				],
				[
					"c",
					.06,
					-.12,
					.21,
					-.24,
					.45,
					-.42
				],
				[
					"c",
					.42,
					-.24,
					.57,
					-.45,
					.6,
					-.72
				],
				[
					"c",
					.03,
					-.33,
					-.09,
					-.39,
					-.63,
					-.42
				],
				[
					"c",
					-.3,
					0,
					-.45,
					0,
					-.6,
					.03
				],
				[
					"c",
					-.81,
					.21,
					-1.35,
					.93,
					-1.74,
					2.46
				],
				[
					"c",
					-.06,
					.27,
					-.48,
					2.25,
					-.48,
					2.31
				],
				[
					"c",
					0,
					.03,
					.39,
					.03,
					.9,
					.03
				],
				[
					"c",
					.72,
					0,
					.9,
					0,
					.99,
					.06
				],
				[
					"c",
					.42,
					.15,
					.45,
					.72,
					.03,
					.9
				],
				[
					"c",
					-.12,
					.06,
					-.24,
					.06,
					-1.17,
					.06
				],
				[
					"l",
					-1.05,
					0
				],
				[
					"l",
					-.78,
					2.55
				],
				[
					"c",
					-.45,
					1.41,
					-.87,
					2.79,
					-.96,
					3.06
				],
				[
					"c",
					-.87,
					2.37,
					-2.37,
					4.74,
					-3.78,
					5.91
				],
				[
					"c",
					-1.05,
					.9,
					-2.04,
					1.23,
					-3.09,
					1.08
				],
				[
					"c",
					-1.11,
					-.18,
					-1.89,
					-.78,
					-2.04,
					-1.59
				],
				[
					"c",
					-.12,
					-.66,
					.15,
					-1.71,
					.54,
					-2.19
				],
				[
					"c",
					.69,
					-.75,
					1.86,
					-.54,
					2.22,
					.39
				],
				[
					"c",
					.06,
					.15,
					.09,
					.27,
					.09,
					.48
				],
				[
					"c",
					0,
					.24,
					-.03,
					.27,
					-.12,
					.42
				],
				[
					"c",
					-.03,
					.09,
					-.15,
					.18,
					-.27,
					.27
				],
				[
					"c",
					-.09,
					.06,
					-.27,
					.21,
					-.36,
					.27
				],
				[
					"c",
					-.24,
					.18,
					-.36,
					.36,
					-.39,
					.6
				],
				[
					"c",
					-.03,
					.33,
					.09,
					.39,
					.63,
					.42
				],
				[
					"c",
					.42,
					0,
					.63,
					-.03,
					.9,
					-.15
				],
				[
					"c",
					.6,
					-.3,
					.96,
					-.96,
					1.38,
					-2.64
				],
				[
					"c",
					.09,
					-.42,
					.63,
					-2.55,
					1.17,
					-4.77
				],
				[
					"l",
					1.02,
					-4.08
				],
				[
					"c",
					0,
					-.03,
					-.36,
					-.03,
					-.81,
					-.03
				],
				[
					"c",
					-.72,
					0,
					-.81,
					0,
					-.93,
					-.06
				],
				[
					"c",
					-.42,
					-.18,
					-.39,
					-.75,
					.03,
					-.9
				],
				[
					"c",
					.09,
					-.06,
					.27,
					-.06,
					1.05,
					-.06
				],
				[
					"l",
					.96,
					0
				],
				[
					"l",
					0,
					-.09
				],
				[
					"c",
					.06,
					-.18,
					.3,
					-.72,
					.51,
					-1.17
				],
				[
					"c",
					1.2,
					-2.46,
					3.3,
					-4.23,
					5.34,
					-4.5
				],
				["z"]
			],
			w: 16.155,
			h: 19.445
		},
		m: {
			d: [
				[
					"M",
					2.79,
					-8.91
				],
				[
					"c",
					.09,
					0,
					.3,
					-.03,
					.45,
					-.03
				],
				[
					"c",
					.24,
					.03,
					.3,
					.03,
					.45,
					.12
				],
				[
					"c",
					.36,
					.15,
					.63,
					.54,
					.75,
					1.02
				],
				[
					"l",
					.03,
					.21
				],
				[
					"l",
					.33,
					-.3
				],
				[
					"c",
					.69,
					-.69,
					1.38,
					-1.02,
					2.07,
					-1.02
				],
				[
					"c",
					.27,
					0,
					.33,
					0,
					.48,
					.06
				],
				[
					"c",
					.21,
					.09,
					.48,
					.36,
					.63,
					.6
				],
				[
					"c",
					.03,
					.09,
					.12,
					.27,
					.18,
					.42
				],
				[
					"c",
					.03,
					.15,
					.09,
					.27,
					.12,
					.27
				],
				[
					"c",
					0,
					0,
					.09,
					-.09,
					.18,
					-.21
				],
				[
					"c",
					.33,
					-.39,
					.87,
					-.81,
					1.29,
					-.99
				],
				[
					"c",
					.78,
					-.33,
					1.47,
					-.21,
					2.01,
					.33
				],
				[
					"c",
					.3,
					.33,
					.48,
					.69,
					.6,
					1.14
				],
				[
					"c",
					.09,
					.42,
					.06,
					.54,
					-.54,
					3.06
				],
				[
					"c",
					-.33,
					1.29,
					-.57,
					2.4,
					-.57,
					2.43
				],
				[
					"c",
					0,
					.12,
					.09,
					.21,
					.21,
					.21
				],
				[
					"c",
					.24,
					0,
					.75,
					-.3,
					1.2,
					-.72
				],
				[
					"c",
					.45,
					-.39,
					.6,
					-.45,
					.78,
					-.27
				],
				[
					"c",
					.18,
					.18,
					.09,
					.36,
					-.45,
					.87
				],
				[
					"c",
					-1.05,
					.96,
					-1.83,
					1.47,
					-2.58,
					1.71
				],
				[
					"c",
					-.93,
					.33,
					-1.53,
					.21,
					-1.8,
					-.33
				],
				[
					"c",
					-.06,
					-.15,
					-.06,
					-.21,
					-.06,
					-.45
				],
				[
					"c",
					0,
					-.24,
					.03,
					-.48,
					.6,
					-2.82
				],
				[
					"c",
					.42,
					-1.71,
					.6,
					-2.64,
					.63,
					-2.79
				],
				[
					"c",
					.03,
					-.57,
					-.3,
					-.75,
					-.84,
					-.48
				],
				[
					"c",
					-.24,
					.12,
					-.54,
					.39,
					-.66,
					.63
				],
				[
					"c",
					-.03,
					.09,
					-.42,
					1.38,
					-.9,
					3
				],
				[
					"c",
					-.9,
					3.15,
					-.84,
					3,
					-1.14,
					3.15
				],
				[
					"l",
					-.15,
					.09
				],
				[
					"l",
					-.78,
					0
				],
				[
					"c",
					-.6,
					0,
					-.78,
					0,
					-.84,
					-.06
				],
				[
					"c",
					-.09,
					-.03,
					-.18,
					-.18,
					-.18,
					-.27
				],
				[
					"c",
					0,
					-.03,
					.36,
					-1.38,
					.84,
					-2.97
				],
				[
					"c",
					.57,
					-2.04,
					.81,
					-2.97,
					.84,
					-3.12
				],
				[
					"c",
					.03,
					-.54,
					-.3,
					-.72,
					-.84,
					-.45
				],
				[
					"c",
					-.24,
					.12,
					-.57,
					.42,
					-.66,
					.63
				],
				[
					"c",
					-.06,
					.09,
					-.51,
					1.44,
					-1.05,
					2.97
				],
				[
					"c",
					-.51,
					1.56,
					-.99,
					2.85,
					-.99,
					2.91
				],
				[
					"c",
					-.06,
					.12,
					-.21,
					.24,
					-.36,
					.3
				],
				[
					"c",
					-.12,
					.06,
					-.21,
					.06,
					-.9,
					.06
				],
				[
					"c",
					-.6,
					0,
					-.78,
					0,
					-.84,
					-.06
				],
				[
					"c",
					-.09,
					-.03,
					-.18,
					-.18,
					-.18,
					-.27
				],
				[
					"c",
					0,
					-.03,
					.45,
					-1.38,
					.99,
					-2.97
				],
				[
					"c",
					1.05,
					-3.18,
					1.05,
					-3.18,
					.93,
					-3.45
				],
				[
					"c",
					-.12,
					-.27,
					-.39,
					-.3,
					-.72,
					-.15
				],
				[
					"c",
					-.54,
					.27,
					-1.14,
					1.17,
					-1.56,
					2.4
				],
				[
					"c",
					-.06,
					.15,
					-.15,
					.3,
					-.18,
					.36
				],
				[
					"c",
					-.21,
					.21,
					-.57,
					.27,
					-.72,
					.09
				],
				[
					"c",
					-.09,
					-.09,
					-.06,
					-.21,
					.06,
					-.63
				],
				[
					"c",
					.48,
					-1.26,
					1.26,
					-2.46,
					2.01,
					-3.21
				],
				[
					"c",
					.57,
					-.54,
					1.2,
					-.87,
					1.83,
					-1.02
				],
				["z"]
			],
			w: 14.687,
			h: 9.126
		},
		p: {
			d: [
				[
					"M",
					1.92,
					-8.7
				],
				[
					"c",
					.27,
					-.09,
					.81,
					-.06,
					1.11,
					.03
				],
				[
					"c",
					.54,
					.18,
					.93,
					.51,
					1.17,
					.99
				],
				[
					"c",
					.09,
					.15,
					.15,
					.33,
					.18,
					.36
				],
				[
					"l",
					0,
					.12
				],
				[
					"l",
					.3,
					-.27
				],
				[
					"c",
					.66,
					-.6,
					1.35,
					-1.02,
					2.13,
					-1.2
				],
				[
					"c",
					.21,
					-.06,
					.33,
					-.06,
					.78,
					-.06
				],
				[
					"c",
					.45,
					0,
					.51,
					0,
					.84,
					.09
				],
				[
					"c",
					1.29,
					.33,
					2.07,
					1.32,
					2.25,
					2.79
				],
				[
					"c",
					.09,
					.81,
					-.09,
					2.01,
					-.45,
					2.79
				],
				[
					"c",
					-.54,
					1.26,
					-1.86,
					2.55,
					-3.18,
					3.03
				],
				[
					"c",
					-.45,
					.18,
					-.81,
					.24,
					-1.29,
					.24
				],
				[
					"c",
					-.69,
					-.03,
					-1.35,
					-.18,
					-1.86,
					-.45
				],
				[
					"c",
					-.3,
					-.15,
					-.51,
					-.18,
					-.69,
					-.09
				],
				[
					"c",
					-.09,
					.03,
					-.18,
					.09,
					-.18,
					.12
				],
				[
					"c",
					-.09,
					.12,
					-1.05,
					2.94,
					-1.05,
					3.06
				],
				[
					"c",
					0,
					.24,
					.18,
					.48,
					.51,
					.63
				],
				[
					"c",
					.18,
					.06,
					.54,
					.15,
					.75,
					.15
				],
				[
					"c",
					.21,
					0,
					.36,
					.06,
					.42,
					.18
				],
				[
					"c",
					.12,
					.18,
					.06,
					.42,
					-.12,
					.54
				],
				[
					"c",
					-.09,
					.03,
					-.15,
					.03,
					-.78,
					0
				],
				[
					"c",
					-1.98,
					-.15,
					-3.81,
					-.15,
					-5.79,
					0
				],
				[
					"c",
					-.63,
					.03,
					-.69,
					.03,
					-.78,
					0
				],
				[
					"c",
					-.24,
					-.15,
					-.24,
					-.57,
					.03,
					-.66
				],
				[
					"c",
					.06,
					-.03,
					.48,
					-.09,
					.99,
					-.12
				],
				[
					"c",
					.87,
					-.06,
					1.11,
					-.09,
					1.35,
					-.21
				],
				[
					"c",
					.18,
					-.06,
					.33,
					-.18,
					.39,
					-.3
				],
				[
					"c",
					.06,
					-.12,
					3.24,
					-9.42,
					3.27,
					-9.6
				],
				[
					"c",
					.06,
					-.33,
					.03,
					-.57,
					-.15,
					-.69
				],
				[
					"c",
					-.09,
					-.06,
					-.12,
					-.06,
					-.3,
					-.06
				],
				[
					"c",
					-.69,
					.06,
					-1.53,
					1.02,
					-2.28,
					2.61
				],
				[
					"c",
					-.09,
					.21,
					-.21,
					.45,
					-.27,
					.51
				],
				[
					"c",
					-.09,
					.12,
					-.33,
					.24,
					-.48,
					.24
				],
				[
					"c",
					-.18,
					0,
					-.36,
					-.15,
					-.36,
					-.3
				],
				[
					"c",
					0,
					-.24,
					.78,
					-1.83,
					1.26,
					-2.55
				],
				[
					"c",
					.72,
					-1.11,
					1.47,
					-1.74,
					2.28,
					-1.92
				],
				["z"],
				[
					"m",
					5.37,
					1.47
				],
				[
					"c",
					-.27,
					-.12,
					-.75,
					-.03,
					-1.14,
					.21
				],
				[
					"c",
					-.75,
					.48,
					-1.47,
					1.68,
					-1.89,
					3.15
				],
				[
					"c",
					-.45,
					1.47,
					-.42,
					2.34,
					0,
					2.7
				],
				[
					"c",
					.45,
					.39,
					1.26,
					.21,
					1.83,
					-.36
				],
				[
					"c",
					.51,
					-.51,
					.99,
					-1.68,
					1.38,
					-3.27
				],
				[
					"c",
					.3,
					-1.17,
					.33,
					-1.74,
					.15,
					-2.13
				],
				[
					"c",
					-.09,
					-.15,
					-.15,
					-.21,
					-.33,
					-.3
				],
				["z"]
			],
			w: 14.689,
			h: 13.127
		},
		r: {
			d: [
				[
					"M",
					6.33,
					-9.12
				],
				[
					"c",
					.27,
					-.03,
					.93,
					0,
					1.2,
					.06
				],
				[
					"c",
					.84,
					.21,
					1.23,
					.81,
					1.02,
					1.53
				],
				[
					"c",
					-.24,
					.75,
					-.9,
					1.17,
					-1.56,
					.96
				],
				[
					"c",
					-.33,
					-.09,
					-.51,
					-.3,
					-.66,
					-.75
				],
				[
					"c",
					-.03,
					-.12,
					-.09,
					-.24,
					-.12,
					-.3
				],
				[
					"c",
					-.09,
					-.15,
					-.3,
					-.24,
					-.48,
					-.24
				],
				[
					"c",
					-.57,
					0,
					-1.38,
					.54,
					-1.65,
					1.08
				],
				[
					"c",
					-.06,
					.15,
					-.33,
					1.17,
					-.9,
					3.27
				],
				[
					"c",
					-.57,
					2.31,
					-.81,
					3.12,
					-.87,
					3.21
				],
				[
					"c",
					-.03,
					.06,
					-.12,
					.15,
					-.18,
					.21
				],
				[
					"l",
					-.12,
					.06
				],
				[
					"l",
					-.81,
					.03
				],
				[
					"c",
					-.69,
					0,
					-.81,
					0,
					-.9,
					-.03
				],
				[
					"c",
					-.09,
					-.06,
					-.18,
					-.21,
					-.18,
					-.3
				],
				[
					"c",
					0,
					-.06,
					.39,
					-1.62,
					.9,
					-3.51
				],
				[
					"c",
					.84,
					-3.24,
					.87,
					-3.45,
					.87,
					-3.72
				],
				[
					"c",
					0,
					-.21,
					0,
					-.27,
					-.03,
					-.36
				],
				[
					"c",
					-.12,
					-.15,
					-.21,
					-.24,
					-.42,
					-.24
				],
				[
					"c",
					-.24,
					0,
					-.45,
					.15,
					-.78,
					.42
				],
				[
					"c",
					-.33,
					.36,
					-.45,
					.54,
					-.72,
					1.14
				],
				[
					"c",
					-.03,
					.12,
					-.21,
					.24,
					-.36,
					.27
				],
				[
					"c",
					-.12,
					0,
					-.15,
					0,
					-.24,
					-.06
				],
				[
					"c",
					-.18,
					-.12,
					-.18,
					-.21,
					-.06,
					-.54
				],
				[
					"c",
					.21,
					-.57,
					.42,
					-.93,
					.78,
					-1.32
				],
				[
					"c",
					.54,
					-.51,
					1.2,
					-.81,
					1.95,
					-.87
				],
				[
					"c",
					.81,
					-.03,
					1.53,
					.3,
					1.92,
					.87
				],
				[
					"l",
					.12,
					.18
				],
				[
					"l",
					.09,
					-.09
				],
				[
					"c",
					.57,
					-.45,
					1.41,
					-.84,
					2.19,
					-.96
				],
				["z"]
			],
			w: 9.41,
			h: 9.132
		},
		s: {
			d: [
				[
					"M",
					4.47,
					-8.73
				],
				[
					"c",
					.09,
					0,
					.36,
					-.03,
					.57,
					-.03
				],
				[
					"c",
					.75,
					.03,
					1.29,
					.24,
					1.71,
					.63
				],
				[
					"c",
					.51,
					.54,
					.66,
					1.26,
					.36,
					1.83
				],
				[
					"c",
					-.24,
					.42,
					-.63,
					.57,
					-1.11,
					.42
				],
				[
					"c",
					-.33,
					-.09,
					-.6,
					-.36,
					-.6,
					-.57
				],
				[
					"c",
					0,
					-.03,
					.06,
					-.21,
					.15,
					-.39
				],
				[
					"c",
					.12,
					-.21,
					.15,
					-.33,
					.18,
					-.48
				],
				[
					"c",
					0,
					-.24,
					-.06,
					-.48,
					-.15,
					-.6
				],
				[
					"c",
					-.15,
					-.21,
					-.42,
					-.24,
					-.75,
					-.15
				],
				[
					"c",
					-.27,
					.06,
					-.48,
					.18,
					-.69,
					.36
				],
				[
					"c",
					-.39,
					.39,
					-.51,
					.96,
					-.33,
					1.38
				],
				[
					"c",
					.09,
					.21,
					.42,
					.51,
					.78,
					.72
				],
				[
					"c",
					1.11,
					.69,
					1.59,
					1.11,
					1.89,
					1.68
				],
				[
					"c",
					.21,
					.39,
					.24,
					.78,
					.15,
					1.29
				],
				[
					"c",
					-.18,
					1.2,
					-1.17,
					2.16,
					-2.52,
					2.52
				],
				[
					"c",
					-1.02,
					.24,
					-1.95,
					.12,
					-2.7,
					-.42
				],
				[
					"c",
					-.72,
					-.51,
					-.99,
					-1.47,
					-.6,
					-2.19
				],
				[
					"c",
					.24,
					-.48,
					.72,
					-.63,
					1.17,
					-.42
				],
				[
					"c",
					.33,
					.18,
					.54,
					.45,
					.57,
					.81
				],
				[
					"c",
					0,
					.21,
					-.03,
					.3,
					-.33,
					.51
				],
				[
					"c",
					-.33,
					.24,
					-.39,
					.42,
					-.27,
					.69
				],
				[
					"c",
					.06,
					.15,
					.21,
					.27,
					.45,
					.33
				],
				[
					"c",
					.3,
					.09,
					.87,
					.09,
					1.2,
					0
				],
				[
					"c",
					.75,
					-.21,
					1.23,
					-.72,
					1.29,
					-1.35
				],
				[
					"c",
					.03,
					-.42,
					-.15,
					-.81,
					-.54,
					-1.2
				],
				[
					"c",
					-.24,
					-.24,
					-.48,
					-.42,
					-1.41,
					-1.02
				],
				[
					"c",
					-.69,
					-.42,
					-1.05,
					-.93,
					-1.05,
					-1.47
				],
				[
					"c",
					0,
					-.39,
					.12,
					-.87,
					.3,
					-1.23
				],
				[
					"c",
					.27,
					-.57,
					.78,
					-1.05,
					1.38,
					-1.35
				],
				[
					"c",
					.24,
					-.12,
					.63,
					-.27,
					.9,
					-.3
				],
				["z"]
			],
			w: 6.632,
			h: 8.758
		},
		z: {
			d: [
				[
					"M",
					2.64,
					-7.95
				],
				[
					"c",
					.36,
					-.09,
					.81,
					-.03,
					1.71,
					.27
				],
				[
					"c",
					.78,
					.21,
					.96,
					.27,
					1.74,
					.3
				],
				[
					"c",
					.87,
					.06,
					1.02,
					.03,
					1.38,
					-.21
				],
				[
					"c",
					.21,
					-.15,
					.33,
					-.15,
					.48,
					-.06
				],
				[
					"c",
					.15,
					.09,
					.21,
					.3,
					.15,
					.45
				],
				[
					"c",
					-.03,
					.06,
					-1.26,
					1.26,
					-2.76,
					2.67
				],
				[
					"l",
					-2.73,
					2.55
				],
				[
					"l",
					.54,
					.03
				],
				[
					"c",
					.54,
					.03,
					.72,
					.03,
					2.01,
					.15
				],
				[
					"c",
					.36,
					.03,
					.9,
					.06,
					1.2,
					.09
				],
				[
					"c",
					.66,
					0,
					.81,
					-.03,
					1.02,
					-.24
				],
				[
					"c",
					.3,
					-.3,
					.39,
					-.72,
					.27,
					-1.23
				],
				[
					"c",
					-.06,
					-.27,
					-.06,
					-.27,
					-.03,
					-.39
				],
				[
					"c",
					.15,
					-.3,
					.54,
					-.27,
					.69,
					.03
				],
				[
					"c",
					.15,
					.33,
					.27,
					1.02,
					.27,
					1.5
				],
				[
					"c",
					0,
					1.47,
					-1.11,
					2.7,
					-2.52,
					2.79
				],
				[
					"c",
					-.57,
					.03,
					-1.02,
					-.09,
					-2.01,
					-.51
				],
				[
					"c",
					-1.02,
					-.42,
					-1.23,
					-.48,
					-2.13,
					-.54
				],
				[
					"c",
					-.81,
					-.06,
					-.96,
					-.03,
					-1.26,
					.18
				],
				[
					"c",
					-.12,
					.06,
					-.24,
					.12,
					-.27,
					.12
				],
				[
					"c",
					-.27,
					0,
					-.45,
					-.3,
					-.36,
					-.51
				],
				[
					"c",
					.03,
					-.06,
					1.32,
					-1.32,
					2.91,
					-2.79
				],
				[
					"l",
					2.88,
					-2.73
				],
				[
					"c",
					-.03,
					0,
					-.21,
					.03,
					-.42,
					.06
				],
				[
					"c",
					-.21,
					.03,
					-.78,
					.09,
					-1.23,
					.12
				],
				[
					"c",
					-1.11,
					.12,
					-1.23,
					.15,
					-1.95,
					.27
				],
				[
					"c",
					-.72,
					.15,
					-1.17,
					.18,
					-1.29,
					.09
				],
				[
					"c",
					-.27,
					-.18,
					-.21,
					-.75,
					.12,
					-1.26
				],
				[
					"c",
					.39,
					-.6,
					.93,
					-1.02,
					1.59,
					-1.2
				],
				["z"]
			],
			w: 8.573,
			h: 8.743
		},
		"+": {
			d: [
				[
					"M",
					3.48,
					-9.3
				],
				[
					"c",
					.18,
					-.09,
					.36,
					-.09,
					.54,
					0
				],
				[
					"c",
					.18,
					.09,
					.24,
					.15,
					.33,
					.3
				],
				[
					"l",
					.06,
					.15
				],
				[
					"l",
					0,
					1.29
				],
				[
					"l",
					0,
					1.29
				],
				[
					"l",
					1.29,
					0
				],
				[
					"c",
					1.23,
					0,
					1.29,
					0,
					1.41,
					.06
				],
				[
					"c",
					.06,
					.03,
					.15,
					.09,
					.18,
					.12
				],
				[
					"c",
					.12,
					.09,
					.21,
					.33,
					.21,
					.48
				],
				[
					"c",
					0,
					.15,
					-.09,
					.39,
					-.21,
					.48
				],
				[
					"c",
					-.03,
					.03,
					-.12,
					.09,
					-.18,
					.12
				],
				[
					"c",
					-.12,
					.06,
					-.18,
					.06,
					-1.41,
					.06
				],
				[
					"l",
					-1.29,
					0
				],
				[
					"l",
					0,
					1.29
				],
				[
					"c",
					0,
					1.23,
					0,
					1.29,
					-.06,
					1.41
				],
				[
					"c",
					-.09,
					.18,
					-.15,
					.24,
					-.3,
					.33
				],
				[
					"c",
					-.21,
					.09,
					-.39,
					.09,
					-.57,
					0
				],
				[
					"c",
					-.18,
					-.09,
					-.24,
					-.15,
					-.33,
					-.33
				],
				[
					"c",
					-.06,
					-.12,
					-.06,
					-.18,
					-.06,
					-1.41
				],
				[
					"l",
					0,
					-1.29
				],
				[
					"l",
					-1.29,
					0
				],
				[
					"c",
					-1.23,
					0,
					-1.29,
					0,
					-1.41,
					-.06
				],
				[
					"c",
					-.18,
					-.09,
					-.24,
					-.15,
					-.33,
					-.33
				],
				[
					"c",
					-.09,
					-.18,
					-.09,
					-.36,
					0,
					-.54
				],
				[
					"c",
					.09,
					-.18,
					.15,
					-.24,
					.33,
					-.33
				],
				[
					"l",
					.15,
					-.06
				],
				[
					"l",
					1.26,
					0
				],
				[
					"l",
					1.29,
					0
				],
				[
					"l",
					0,
					-1.29
				],
				[
					"c",
					0,
					-1.23,
					0,
					-1.29,
					.06,
					-1.41
				],
				[
					"c",
					.09,
					-.18,
					.15,
					-.24,
					.33,
					-.33
				],
				["z"]
			],
			w: 7.507,
			h: 7.515
		},
		",": {
			d: [
				[
					"M",
					1.85,
					-3.36
				],
				[
					"c",
					.57,
					-.15,
					1.17,
					.03,
					1.59,
					.45
				],
				[
					"c",
					.45,
					.45,
					.6,
					.96,
					.51,
					1.89
				],
				[
					"c",
					-.09,
					1.23,
					-.42,
					2.46,
					-.99,
					3.93
				],
				[
					"c",
					-.3,
					.72,
					-.72,
					1.62,
					-.78,
					1.68
				],
				[
					"c",
					-.18,
					.21,
					-.51,
					.18,
					-.66,
					-.06
				],
				[
					"c",
					-.03,
					-.06,
					-.06,
					-.15,
					-.06,
					-.18
				],
				[
					"c",
					0,
					-.06,
					.12,
					-.33,
					.24,
					-.63
				],
				[
					"c",
					.84,
					-1.8,
					1.02,
					-2.61,
					.69,
					-3.24
				],
				[
					"c",
					-.12,
					-.24,
					-.27,
					-.36,
					-.75,
					-.6
				],
				[
					"c",
					-.36,
					-.15,
					-.42,
					-.21,
					-.6,
					-.39
				],
				[
					"c",
					-.69,
					-.69,
					-.69,
					-1.71,
					0,
					-2.4
				],
				[
					"c",
					.21,
					-.21,
					.51,
					-.39,
					.81,
					-.45
				],
				["z"]
			],
			w: 3.452,
			h: 8.143
		},
		"-": {
			d: [
				[
					"M",
					.18,
					-5.34
				],
				[
					"c",
					.09,
					-.06,
					.15,
					-.06,
					2.31,
					-.06
				],
				[
					"c",
					2.46,
					0,
					2.37,
					0,
					2.46,
					.21
				],
				[
					"c",
					.12,
					.21,
					.03,
					.42,
					-.15,
					.54
				],
				[
					"c",
					-.09,
					.06,
					-.15,
					.06,
					-2.28,
					.06
				],
				[
					"c",
					-2.16,
					0,
					-2.22,
					0,
					-2.31,
					-.06
				],
				[
					"c",
					-.27,
					-.15,
					-.27,
					-.54,
					-.03,
					-.69
				],
				["z"]
			],
			w: 5.001,
			h: .81
		},
		".": {
			d: [
				[
					"M",
					1.32,
					-3.36
				],
				[
					"c",
					1.05,
					-.27,
					2.1,
					.57,
					2.1,
					1.65
				],
				[
					"c",
					0,
					1.08,
					-1.05,
					1.92,
					-2.1,
					1.65
				],
				[
					"c",
					-.9,
					-.21,
					-1.5,
					-1.14,
					-1.26,
					-2.04
				],
				[
					"c",
					.12,
					-.63,
					.63,
					-1.11,
					1.26,
					-1.26
				],
				["z"]
			],
			w: 3.413,
			h: 3.402
		},
		"scripts.wedge": {
			d: [
				[
					"M",
					-3.66,
					-7.44
				],
				[
					"c",
					.06,
					-.09,
					0,
					-.09,
					.81,
					.03
				],
				[
					"c",
					1.86,
					.3,
					3.84,
					.3,
					5.73,
					0
				],
				[
					"c",
					.78,
					-.12,
					.72,
					-.12,
					.78,
					-.03
				],
				[
					"c",
					.15,
					.15,
					.12,
					.24,
					-.24,
					.6
				],
				[
					"c",
					-.93,
					.93,
					-1.98,
					2.76,
					-2.67,
					4.62
				],
				[
					"c",
					-.3,
					.78,
					-.51,
					1.71,
					-.51,
					2.13
				],
				[
					"c",
					0,
					.15,
					0,
					.18,
					-.06,
					.27
				],
				[
					"c",
					-.12,
					.09,
					-.24,
					.09,
					-.36,
					0
				],
				[
					"c",
					-.06,
					-.09,
					-.06,
					-.12,
					-.06,
					-.27
				],
				[
					"c",
					0,
					-.42,
					-.21,
					-1.35,
					-.51,
					-2.13
				],
				[
					"c",
					-.69,
					-1.86,
					-1.74,
					-3.69,
					-2.67,
					-4.62
				],
				[
					"c",
					-.36,
					-.36,
					-.39,
					-.45,
					-.24,
					-.6
				],
				["z"]
			],
			w: 7.49,
			h: 7.752
		},
		"scripts.thumb": {
			d: [
				[
					"M",
					-.54,
					-3.69
				],
				[
					"c",
					.15,
					-.03,
					.36,
					-.06,
					.51,
					-.06
				],
				[
					"c",
					1.44,
					0,
					2.58,
					1.11,
					2.94,
					2.85
				],
				[
					"c",
					.09,
					.48,
					.09,
					1.32,
					0,
					1.8
				],
				[
					"c",
					-.27,
					1.41,
					-1.08,
					2.43,
					-2.16,
					2.73
				],
				[
					"l",
					-.18,
					.06
				],
				[
					"l",
					0,
					.12
				],
				[
					"c",
					.03,
					.06,
					.06,
					.45,
					.09,
					.87
				],
				[
					"c",
					.03,
					.57,
					.03,
					.78,
					0,
					.84
				],
				[
					"c",
					-.09,
					.27,
					-.39,
					.48,
					-.66,
					.48
				],
				[
					"c",
					-.27,
					0,
					-.57,
					-.21,
					-.66,
					-.48
				],
				[
					"c",
					-.03,
					-.06,
					-.03,
					-.27,
					0,
					-.84
				],
				[
					"c",
					.03,
					-.42,
					.06,
					-.81,
					.09,
					-.87
				],
				[
					"l",
					0,
					-.12
				],
				[
					"l",
					-.18,
					-.06
				],
				[
					"c",
					-1.08,
					-.3,
					-1.89,
					-1.32,
					-2.16,
					-2.73
				],
				[
					"c",
					-.09,
					-.48,
					-.09,
					-1.32,
					0,
					-1.8
				],
				[
					"c",
					.15,
					-.84,
					.51,
					-1.53,
					1.02,
					-2.04
				],
				[
					"c",
					.39,
					-.39,
					.84,
					-.63,
					1.35,
					-.75
				],
				["z"],
				[
					"m",
					1.05,
					.9
				],
				[
					"c",
					-.15,
					-.09,
					-.21,
					-.09,
					-.45,
					-.12
				],
				[
					"c",
					-.15,
					0,
					-.3,
					.03,
					-.39,
					.03
				],
				[
					"c",
					-.57,
					.18,
					-.9,
					.72,
					-1.08,
					1.74
				],
				[
					"c",
					-.06,
					.48,
					-.06,
					1.8,
					0,
					2.28
				],
				[
					"c",
					.15,
					.9,
					.42,
					1.44,
					.9,
					1.65
				],
				[
					"c",
					.18,
					.09,
					.21,
					.09,
					.51,
					.09
				],
				[
					"c",
					.3,
					0,
					.33,
					0,
					.51,
					-.09
				],
				[
					"c",
					.48,
					-.21,
					.75,
					-.75,
					.9,
					-1.65
				],
				[
					"c",
					.03,
					-.27,
					.03,
					-.54,
					.03,
					-1.14
				],
				[
					"c",
					0,
					-.6,
					0,
					-.87,
					-.03,
					-1.14
				],
				[
					"c",
					-.15,
					-.9,
					-.45,
					-1.44,
					-.9,
					-1.65
				],
				["z"]
			],
			w: 5.955,
			h: 9.75
		},
		"scripts.open": {
			d: [
				[
					"M",
					-.54,
					-3.69
				],
				[
					"c",
					.15,
					-.03,
					.36,
					-.06,
					.51,
					-.06
				],
				[
					"c",
					1.44,
					0,
					2.58,
					1.11,
					2.94,
					2.85
				],
				[
					"c",
					.09,
					.48,
					.09,
					1.32,
					0,
					1.8
				],
				[
					"c",
					-.33,
					1.74,
					-1.47,
					2.85,
					-2.91,
					2.85
				],
				[
					"c",
					-1.44,
					0,
					-2.58,
					-1.11,
					-2.91,
					-2.85
				],
				[
					"c",
					-.09,
					-.48,
					-.09,
					-1.32,
					0,
					-1.8
				],
				[
					"c",
					.15,
					-.84,
					.51,
					-1.53,
					1.02,
					-2.04
				],
				[
					"c",
					.39,
					-.39,
					.84,
					-.63,
					1.35,
					-.75
				],
				["z"],
				[
					"m",
					1.11,
					.9
				],
				[
					"c",
					-.21,
					-.09,
					-.27,
					-.09,
					-.51,
					-.12
				],
				[
					"c",
					-.3,
					0,
					-.42,
					.03,
					-.66,
					.15
				],
				[
					"c",
					-.24,
					.12,
					-.51,
					.39,
					-.66,
					.63
				],
				[
					"c",
					-.54,
					.93,
					-.63,
					2.64,
					-.21,
					3.81
				],
				[
					"c",
					.21,
					.54,
					.51,
					.9,
					.93,
					1.11
				],
				[
					"c",
					.21,
					.09,
					.24,
					.09,
					.54,
					.09
				],
				[
					"c",
					.3,
					0,
					.33,
					0,
					.54,
					-.09
				],
				[
					"c",
					.42,
					-.21,
					.72,
					-.57,
					.93,
					-1.11
				],
				[
					"c",
					.36,
					-.99,
					.36,
					-2.37,
					0,
					-3.36
				],
				[
					"c",
					-.21,
					-.54,
					-.51,
					-.9,
					-.9,
					-1.11
				],
				["z"]
			],
			w: 5.955,
			h: 7.5
		},
		"scripts.longphrase": {
			d: [
				[
					"M",
					1.47,
					-15.09
				],
				[
					"c",
					.36,
					-.09,
					.66,
					-.18,
					.69,
					-.18
				],
				[
					"c",
					.06,
					0,
					.06,
					.54,
					.06,
					11.25
				],
				[
					"l",
					0,
					11.25
				],
				[
					"l",
					-.63,
					.15
				],
				[
					"c",
					-.66,
					.18,
					-1.44,
					.39,
					-1.5,
					.39
				],
				[
					"c",
					-.03,
					0,
					-.03,
					-3.39,
					-.03,
					-11.25
				],
				[
					"l",
					0,
					-11.25
				],
				[
					"l",
					.36,
					-.09
				],
				[
					"c",
					.21,
					-.06,
					.66,
					-.18,
					1.05,
					-.27
				],
				["z"]
			],
			w: 2.16,
			h: 23.04
		},
		"scripts.mediumphrase": {
			d: [
				[
					"M",
					1.47,
					-7.59
				],
				[
					"c",
					.36,
					-.09,
					.66,
					-.18,
					.69,
					-.18
				],
				[
					"c",
					.06,
					0,
					.06,
					.39,
					.06,
					7.5
				],
				[
					"l",
					0,
					7.5
				],
				[
					"l",
					-.63,
					.15
				],
				[
					"c",
					-.66,
					.18,
					-1.44,
					.39,
					-1.5,
					.39
				],
				[
					"c",
					-.03,
					0,
					-.03,
					-2.28,
					-.03,
					-7.5
				],
				[
					"l",
					0,
					-7.5
				],
				[
					"l",
					.36,
					-.09
				],
				[
					"c",
					.21,
					-.06,
					.66,
					-.18,
					1.05,
					-.27
				],
				["z"]
			],
			w: 2.16,
			h: 15.54
		},
		"scripts.shortphrase": {
			d: [
				[
					"M",
					1.47,
					-7.59
				],
				[
					"c",
					.36,
					-.09,
					.66,
					-.18,
					.69,
					-.18
				],
				[
					"c",
					.06,
					0,
					.06,
					.21,
					.06,
					3.75
				],
				[
					"l",
					0,
					3.75
				],
				[
					"l",
					-.42,
					.09
				],
				[
					"c",
					-.57,
					.18,
					-1.65,
					.45,
					-1.71,
					.45
				],
				[
					"c",
					-.03,
					0,
					-.03,
					-.72,
					-.03,
					-3.75
				],
				[
					"l",
					0,
					-3.75
				],
				[
					"l",
					.36,
					-.09
				],
				[
					"c",
					.21,
					-.06,
					.66,
					-.18,
					1.05,
					-.27
				],
				["z"]
			],
			w: 2.16,
			h: 8.04
		},
		"scripts.snap": {
			d: [
				[
					"M",
					4.5,
					-3.39
				],
				[
					"c",
					.36,
					-.03,
					.96,
					-.03,
					1.35,
					0
				],
				[
					"c",
					1.56,
					.15,
					3.15,
					.9,
					4.2,
					2.01
				],
				[
					"c",
					.24,
					.27,
					.33,
					.42,
					.33,
					.6
				],
				[
					"c",
					0,
					.27,
					.03,
					.24,
					-2.46,
					2.22
				],
				[
					"c",
					-1.29,
					1.02,
					-2.4,
					1.86,
					-2.49,
					1.92
				],
				[
					"c",
					-.18,
					.09,
					-.3,
					.09,
					-.48,
					0
				],
				[
					"c",
					-.09,
					-.06,
					-1.2,
					-.9,
					-2.49,
					-1.92
				],
				[
					"c",
					-2.49,
					-1.98,
					-2.46,
					-1.95,
					-2.46,
					-2.22
				],
				[
					"c",
					0,
					-.18,
					.09,
					-.33,
					.33,
					-.6
				],
				[
					"c",
					1.05,
					-1.08,
					2.64,
					-1.86,
					4.17,
					-2.01
				],
				["z"],
				[
					"m",
					1.29,
					1.17
				],
				[
					"c",
					-1.47,
					-.15,
					-2.97,
					.3,
					-4.14,
					1.2
				],
				[
					"l",
					-.18,
					.15
				],
				[
					"l",
					.06,
					.09
				],
				[
					"c",
					.15,
					.12,
					3.63,
					2.85,
					3.66,
					2.85
				],
				[
					"c",
					.03,
					0,
					3.51,
					-2.73,
					3.66,
					-2.85
				],
				[
					"l",
					.06,
					-.09
				],
				[
					"l",
					-.18,
					-.15
				],
				[
					"c",
					-.84,
					-.66,
					-1.89,
					-1.08,
					-2.94,
					-1.2
				],
				["z"]
			],
			w: 10.38,
			h: 6.84
		}
	};
	r["noteheads.slash.whole"] = {
		d: [
			[
				"M",
				5,
				-5
			],
			[
				"l",
				1,
				1
			],
			[
				"l",
				-5,
				5
			],
			[
				"l",
				-1,
				-1
			],
			["z"],
			[
				"m",
				4,
				6
			],
			[
				"l",
				-5,
				-5
			],
			[
				"l",
				2,
				-2
			],
			[
				"l",
				5,
				5
			],
			["z"],
			[
				"m",
				0,
				-2
			],
			[
				"l",
				1,
				1
			],
			[
				"l",
				-5,
				5
			],
			[
				"l",
				-1,
				-1
			],
			["z"],
			[
				"m",
				-4,
				6
			],
			[
				"l",
				-5,
				-5
			],
			[
				"l",
				2,
				-2
			],
			[
				"l",
				5,
				5
			],
			["z"]
		],
		w: 10.81,
		h: 15.63
	}, r["noteheads.slash.quarter"] = {
		d: [
			[
				"M",
				9,
				-6
			],
			[
				"l",
				0,
				4
			],
			[
				"l",
				-9,
				9
			],
			[
				"l",
				0,
				-4
			],
			["z"]
		],
		w: 9,
		h: 9
	}, r["noteheads.harmonic.quarter"] = {
		d: [
			[
				"M",
				3.63,
				-4.02
			],
			[
				"c",
				.09,
				-.06,
				.18,
				-.09,
				.24,
				-.03
			],
			[
				"c",
				.03,
				.03,
				.87,
				.93,
				1.83,
				2.01
			],
			[
				"c",
				1.5,
				1.65,
				1.8,
				1.98,
				1.8,
				2.04
			],
			[
				"c",
				0,
				.06,
				-.3,
				.39,
				-1.8,
				2.04
			],
			[
				"c",
				-.96,
				1.08,
				-1.8,
				1.98,
				-1.83,
				2.01
			],
			[
				"c",
				-.06,
				.06,
				-.15,
				.03,
				-.24,
				-.03
			],
			[
				"c",
				-.12,
				-.09,
				-3.54,
				-3.84,
				-3.6,
				-3.93
			],
			[
				"c",
				-.03,
				-.03,
				-.03,
				-.09,
				-.03,
				-.15
			],
			[
				"c",
				.03,
				-.06,
				3.45,
				-3.84,
				3.63,
				-3.96
			],
			["z"]
		],
		w: 7.5,
		h: 8.165
	}, r["noteheads.triangle.quarter"] = {
		d: [
			[
				"M",
				0,
				4
			],
			[
				"l",
				9,
				0
			],
			[
				"l",
				-4.5,
				-9
			],
			["z"]
		],
		w: 9,
		h: 9
	};
	var i = function(e) {
		for (var t = [], n = 0, r = e.length; n < r; n++) {
			t[n] = [];
			for (var i = 0, a = e[n].length; i < a; i++) t[n][i] = e[n][i];
		}
		return t;
	}, a = function(e, t, n) {
		for (var r = 0, i = e.length; r < i; r++) {
			var a = e[r], o, s;
			for (o = 1, s = a.length; o < s; o++) a[o] *= o % 2 ? t : n;
		}
	};
	t.exports = {
		printSymbol: function(e, t, n, a, o) {
			if (!r[n]) return null;
			var s = i(r[n].d);
			s[0][1] += e, s[0][2] += t;
			for (var c = "", l = 0; l < s.length; l++) c += s[l].join(" ");
			return o.path = c, a.path(o);
		},
		getPathForSymbol: function(e, t, n, o, s) {
			if (o ||= 1, s ||= 1, !r[n]) return null;
			var c = i(r[n].d);
			return (o !== 1 || s !== 1) && a(c, o, s), c[0][1] += e, c[0][2] += t, c;
		},
		getSymbolWidth: function(e) {
			return r[e] ? r[e].w : 0;
		},
		symbolHeightInPitches: function(e) {
			return (r[e] ? r[e].h : 0) / n.STEP;
		},
		getSymbolAlign: function(e) {
			return e.substring(0, 7) === "scripts" && e !== "scripts.roll" ? "center" : "left";
		},
		getYCorr: function(e) {
			switch (e) {
				case "0":
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
				case "+": return -2;
				case "timesig.common":
				case "timesig.cut": return 0;
				case "flags.d32nd": return -1;
				case "flags.d64th": return -2;
				case "flags.u32nd": return 1;
				case "flags.u64th": return 3;
				case "rests.whole": return 1;
				case "rests.half": return -1;
				case "rests.8th": return -1;
				case "rests.quarter": return -1;
				case "rests.16th": return -1;
				case "rests.32nd": return -1;
				case "rests.64th": return -1;
				case "f":
				case "m":
				case "p":
				case "s":
				case "z": return -4;
				case "scripts.trill":
				case "scripts.upbow":
				case "scripts.downbow": return -2;
				case "scripts.ufermata":
				case "scripts.wedge":
				case "scripts.roll":
				case "scripts.shortphrase":
				case "scripts.longphrase": return -1;
				case "scripts.dfermata": return 1;
				default: return 0;
			}
		},
		setSymbol: function(e, t) {
			r[e] = t;
		}
	};
})), require_create_clef = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_absolute_element(), r = require_glyphs(), i = require_relative_element(), a = function(e, t) {
		var a, s = 0;
		e.el_type = "clef";
		var c = new n(e, 0, 10, "staff-extra clef", t);
		switch (c.isClef = !0, e.type) {
			case "treble":
				a = "clefs.G";
				break;
			case "tenor":
				a = "clefs.C";
				break;
			case "alto":
				a = "clefs.C";
				break;
			case "bass":
				a = "clefs.F";
				break;
			case "treble+8":
				a = "clefs.G", s = 1;
				break;
			case "tenor+8":
				a = "clefs.C", s = 1;
				break;
			case "bass+8":
				a = "clefs.F", s = 1;
				break;
			case "alto+8":
				a = "clefs.C", s = 1;
				break;
			case "treble-8":
				a = "clefs.G", s = -1;
				break;
			case "tenor-8":
				a = "clefs.C", s = -1;
				break;
			case "bass-8":
				a = "clefs.F", s = -1;
				break;
			case "alto-8":
				a = "clefs.C", s = -1;
				break;
			case "none": return null;
			case "perc":
				a = "clefs.perc";
				break;
			default: c.addFixed(new i("clef=" + e.type, 0, 0, void 0, { type: "debug" }));
		}
		var l = 5;
		if (a) {
			var u = r.symbolHeightInPitches(a), d = o(a);
			if (c.addRight(new i(a, l, r.getSymbolWidth(a), e.clefPos, {
				top: u + e.clefPos + d,
				bottom: e.clefPos + d
			})), s !== 0) {
				var f = 2 / 3, p = (r.getSymbolWidth(a) - r.getSymbolWidth("8") * f) / 2, m = s > 0 ? c.top + 3 : c.bottom - 1, h = s > 0 ? c.top + 3 : c.bottom - 3, g = h - 2;
				e.type === "bass-8" && (m = 3, p = 0), c.addRight(new i("8", l + p, r.getSymbolWidth("8") * f, m, {
					scalex: f,
					scaley: f,
					top: h,
					bottom: g
				}));
			}
		}
		return c;
	};
	function o(e) {
		switch (e) {
			case "clefs.G": return -5;
			case "clefs.C": return -4;
			case "clefs.F": return -4;
			case "clefs.perc": return -2;
			default: return 0;
		}
	}
	t.exports = a;
})), require_create_key_signature = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_absolute_element(), r = require_glyphs(), i = require_relative_element();
	t.exports = function(e, t) {
		if (e.el_type = "keySignature", !e.accidentals || e.accidentals.length === 0) return null;
		var a = new n(e, 0, 10, "staff-extra key-signature", t);
		a.isKeySig = !0;
		var o = 0;
		return e.accidentals.forEach(function(e) {
			var t, n = 0;
			switch (e.acc) {
				case "sharp":
					t = "accidentals.sharp", n = -3;
					break;
				case "natural":
					t = "accidentals.nat";
					break;
				case "flat":
					t = "accidentals.flat", n = -1.2;
					break;
				case "quartersharp":
					t = "accidentals.halfsharp", n = -2.5;
					break;
				case "quarterflat":
					t = "accidentals.halfflat", n = -1.2;
					break;
				default: t = "accidentals.flat";
			}
			a.addRight(new i(t, o, r.getSymbolWidth(t), e.verticalPos, {
				thickness: r.symbolHeightInPitches(t),
				top: e.verticalPos + r.symbolHeightInPitches(t) + n,
				bottom: e.verticalPos + n
			})), o += r.getSymbolWidth(t) + 2;
		}, this), a;
	};
})), require_create_note_head = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_glyphs(), r = require_relative_element();
	t.exports = function(e, t, i, a) {
		a ||= {};
		var o = a.dir === void 0 ? null : a.dir, s = a.headx === void 0 ? 0 : a.headx, c = a.extrax === void 0 ? 0 : a.extrax, l = a.flag === void 0 ? null : a.flag, u = a.dot === void 0 ? 0 : a.dot, d = a.dotshiftx === void 0 ? 0 : a.dotshiftx, f = a.scale === void 0 ? 1 : a.scale, p = a.accidentalSlot === void 0 ? [] : a.accidentalSlot, m = a.shouldExtendStem === void 0 ? !1 : a.shouldExtendStem, h = a.printAccidentals === void 0 ? !0 : a.printAccidentals, g = i.verticalPos, _, v = 0, y = 0, b = 0;
		if (t === void 0) e.addFixed(new r("pitch is undefined", 0, 0, 0, { type: "debug" }));
		else if (t === "") _ = new r(null, 0, 0, g);
		else {
			var x = s;
			if (i.printer_shift) {
				var S = i.printer_shift === "same" ? 1 : 0;
				x = o === "down" ? -n.getSymbolWidth(t) * f + S : n.getSymbolWidth(t) * f - S;
			}
			var C = {
				scalex: f,
				scaley: f,
				thickness: n.symbolHeightInPitches(t) * f,
				name: i.name
			};
			if (_ = new r(t, x, n.getSymbolWidth(t) * f, g, C), _.stemDir = o, l) {
				var w = g + (o === "down" ? -7 : 7) * f;
				m && (o === "down" && w > 6 && (w = 6), o === "up" && w < 6 && (w = 6));
				var T = o === "down" ? s : s + _.w - .6;
				e.addRight(new r(l, T, n.getSymbolWidth(l) * f, w, {
					scalex: f,
					scaley: f
				}));
			}
			for (y = _.w + d - 2 + 5 * u; u > 0; u--) {
				var E = 1 - Math.abs(g) % 2;
				e.addRight(new r("dots.dot", _.w + d - 2 + 5 * u, n.getSymbolWidth("dots.dot"), g + E));
			}
		}
		if (_ && (_.highestVert = i.highestVert), h && i.accidental) {
			var D;
			switch (i.accidental) {
				case "quartersharp":
					D = "accidentals.halfsharp";
					break;
				case "dblsharp":
					D = "accidentals.dblsharp";
					break;
				case "sharp":
					D = "accidentals.sharp";
					break;
				case "quarterflat":
					D = "accidentals.halfflat";
					break;
				case "flat":
					D = "accidentals.flat";
					break;
				case "dblflat":
					D = "accidentals.dblflat";
					break;
				case "natural": D = "accidentals.nat";
			}
			for (var O = !1, k = c, A = 0; A < p.length; A++) if (g - p[A][0] >= 6) {
				p[A][0] = g, k = p[A][1], O = !0;
				break;
			}
			O === !1 && (k -= n.getSymbolWidth(D) * f + 2, p.push([g, k]), v = n.getSymbolWidth(D) * f + 2);
			var j = n.symbolHeightInPitches(D);
			e.addExtra(new r(D, k, n.getSymbolWidth(D), g, {
				scalex: f,
				scaley: f,
				top: g + j / 2,
				bottom: g - j / 2
			})), b = n.getSymbolWidth(D) / 2;
		}
		return {
			notehead: _,
			accidentalshiftx: v,
			dotshiftx: y,
			extraLeft: b
		};
	};
})), require_create_time_signature = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_absolute_element(), r = require_glyphs(), i = require_relative_element();
	t.exports = function(e, t) {
		e.el_type = "timeSignature";
		var a = new n(e, 0, 10, "staff-extra time-signature", t);
		if (e.type === "specified") for (var o = 0, s = 0; s < e.value.length; s++) if (s !== 0 && (a.addRight(new i("+", o + 1, r.getSymbolWidth("+"), 6, { thickness: r.symbolHeightInPitches("+") })), o += r.getSymbolWidth("+") + 2), e.value[s].den) {
			for (var c = 0, l = 0; l < e.value[s].num.length; l++) c += r.getSymbolWidth(e.value[s].num[l]);
			var u = 0;
			for (l = 0; l < e.value[s].num.length; l++) u += r.getSymbolWidth(e.value[s].den[l]);
			var d = Math.max(c, u);
			a.addRight(new i(e.value[s].num, o + (d - c) / 2, c, 8, { thickness: r.symbolHeightInPitches(e.value[s].num[0]) })), a.addRight(new i(e.value[s].den, o + (d - u) / 2, u, 4, { thickness: r.symbolHeightInPitches(e.value[s].den[0]) })), o += d;
		} else {
			for (var f = 0, p = 0; p < e.value[s].num.length; p++) f += r.getSymbolWidth(e.value[s].num[p]);
			a.addRight(new i(e.value[s].num, o, f, 6, { thickness: r.symbolHeightInPitches(e.value[s].num[0]) })), o += f;
		}
		else e.type === "common_time" ? a.addRight(new i("timesig.common", 0, r.getSymbolWidth("timesig.common"), 6, { thickness: r.symbolHeightInPitches("timesig.common") })) : e.type === "cut_time" ? a.addRight(new i("timesig.cut", 0, r.getSymbolWidth("timesig.cut"), 6, { thickness: r.symbolHeightInPitches("timesig.cut") })) : e.type === "tempus_imperfectum" ? a.addRight(new i("timesig.imperfectum", 0, r.getSymbolWidth("timesig.imperfectum"), 6, { thickness: r.symbolHeightInPitches("timesig.imperfectum") })) : e.type === "tempus_imperfectum_prolatio" ? a.addRight(new i("timesig.imperfectum2", 0, r.getSymbolWidth("timesig.imperfectum2"), 6, { thickness: r.symbolHeightInPitches("timesig.imperfectum2") })) : e.type === "tempus_perfectum" ? a.addRight(new i("timesig.perfectum", 0, r.getSymbolWidth("timesig.perfectum"), 6, { thickness: r.symbolHeightInPitches("timesig.perfectum") })) : e.type === "tempus_perfectum_prolatio" ? a.addRight(new i("timesig.perfectum2", 0, r.getSymbolWidth("timesig.perfectum2"), 6, { thickness: r.symbolHeightInPitches("timesig.perfectum2") })) : console.log("time signature:", e);
		return a;
	};
})), require_dynamic_decoration = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function(e, t, n) {
		this.type = "DynamicDecoration", this.anchor = e, this.dec = t, n === "below" ? this.volumeHeightBelow = 6 : this.volumeHeightAbove = 6, this.pitch = void 0;
	};
})), require_crescendo_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function(e, t, n, r) {
		this.type = "CrescendoElem", this.anchor1 = e, this.anchor2 = t, this.dir = n, r === "above" ? this.dynamicHeightAbove = 6 : this.dynamicHeightBelow = 6, this.pitch = void 0;
	};
})), require_glissando_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function(e, t) {
		this.type = "GlissandoElem", this.anchor1 = e, this.anchor2 = t;
	};
})), require_tie_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e) {
		this.type = "TieElem", this.anchor1 = e.anchor1, this.anchor2 = e.anchor2, e.isGrace && (this.isGrace = !0), e.fixedY && (this.fixedY = !0), e.stemDir && (this.stemDir = e.stemDir), e.voiceNumber !== void 0 && (this.voiceNumber = e.voiceNumber), e.style !== void 0 && (this.dotted = !0), this.internalNotes = [];
	};
	n.prototype.addInternalNote = function(e) {
		this.internalNotes.push(e);
	}, n.prototype.setEndAnchor = function(e) {
		this.anchor2 = e, this.anchor1 ? (this.top = Math.max(this.anchor1.pitch, this.anchor2.pitch) + 4, this.bottom = Math.min(this.anchor1.pitch, this.anchor2.pitch) - 4) : (this.top = this.anchor2.pitch + 4, this.bottom = this.anchor2.pitch - 4);
	}, n.prototype.setStartX = function(e) {
		this.startLimitX = e;
	}, n.prototype.setEndX = function(e) {
		this.endLimitX = e;
	}, n.prototype.setHint = function() {
		this.hint = !0;
	}, n.prototype.calcTieDirection = function() {
		if (this.isGrace) this.above = !1;
		else if (this.voiceNumber === 0) this.above = !0;
		else if (this.voiceNumber > 0) this.above = !1;
		else {
			var e = this.anchor1 ? this.anchor1.pitch : this.anchor2 ? this.anchor2.pitch : 14;
			this.anchor1 && this.anchor1.stemDir === "down" && this.anchor2 && this.anchor2.stemDir === "down" ? this.above = !0 : this.anchor1 && this.anchor1.stemDir === "up" && this.anchor2 && this.anchor2.stemDir === "up" ? this.above = !1 : this.anchor1 && this.anchor2 ? this.above = e >= 6 : this.anchor1 ? this.above = this.anchor1.stemDir === "down" : this.anchor2 ? this.above = this.anchor2.stemDir === "down" : this.above = e >= 6;
		}
	}, n.prototype.calcSlurDirection = function() {
		if (this.isGrace) this.above = !1;
		else if (this.voiceNumber === 0) this.above = !0;
		else if (this.voiceNumber > 0) this.above = !1;
		else {
			var e = !1;
			this.anchor1 && this.anchor1.stemDir === "down" && (e = !0), this.anchor2 && this.anchor2.stemDir === "down" && (e = !0);
			for (var t = 0; t < this.internalNotes.length; t++) this.internalNotes[t].stemDir === "down" && (e = !0);
			this.above = e;
		}
	}, n.prototype.calcX = function(e, t) {
		this.anchor1 ? (this.startX = this.anchor1.x, this.anchor1.scalex < 1 && (this.startX -= 3)) : this.startLimitX ? this.startX = this.startLimitX.x + this.startLimitX.w : this.anchor2 ? this.startX = this.anchor2.x - 20 : this.startX = e, !this.anchor1 && this.dotted && (this.startX -= 3), this.anchor2 ? this.endX = this.anchor2.x : this.endLimitX ? this.endX = this.endLimitX.x : this.endX = t;
	}, n.prototype.calcTieY = function() {
		this.anchor1 ? this.startY = this.anchor1.pitch : this.anchor2 ? this.startY = this.anchor2.pitch : this.startY = this.above ? 14 : 0, this.anchor2 ? this.endY = this.anchor2.pitch : this.anchor1 ? this.endY = this.anchor1.pitch : this.endY = this.above ? 14 : 0;
	}, n.prototype.calcSlurY = function() {
		if (this.anchor1 && this.anchor2) {
			this.above && this.anchor1.stemDir === "up" && !this.fixedY ? (this.startY = (this.anchor1.highestVert + this.anchor1.pitch) / 2, this.startX += this.anchor1.w / 2) : this.startY = this.anchor1.pitch;
			var e = this.anchor2.parent.beam && this.anchor2.parent.beam.stemsUp && this.anchor2.parent.beam.elems[0] !== this.anchor2.parent, t = (this.anchor2.highestVert + this.anchor2.pitch) / 2;
			if (this.above && this.anchor2.stemDir === "up" && !this.fixedY && !e && t < this.startY ? (this.endY = t, this.endX += Math.round(this.anchor2.w / 2)) : this.endY = this.above && e ? this.anchor2.highestVert : this.anchor2.pitch, this.anchor1.scalex === 1) {
				var n = !!this.anchor1.parent.beam, r = !!this.anchor2.parent.beam;
				n && this.anchor1.parent !== this.anchor1.parent.beam.elems[this.anchor1.parent.beam.elems.length - 1] && (this.above ? this.startY = this.anchor1.parent.fixed.t : this.startY = this.anchor1.parent.fixed.b), r && this.anchor2.parent !== this.anchor2.parent.beam.elems[0] && (this.above ? this.endY = this.anchor2.parent.fixed.t : this.endY = this.anchor2.parent.fixed.b);
			}
		} else this.anchor1 ? this.startY = this.endY = this.anchor1.pitch : this.anchor2 ? this.startY = this.endY = this.anchor2.pitch : (this.startY = this.above ? 14 : 0, this.endY = this.above ? 14 : 0);
	}, n.prototype.avoidCollisionAbove = function() {
		if (this.above) {
			for (var e = -50, t = 0; t < this.internalNotes.length; t++) this.internalNotes[t].highestVert > e && (e = this.internalNotes[t].highestVert);
			e > this.startY && e > this.endY && (this.startY = this.endY = e - 1);
		}
	}, n.prototype.getYBounds = function() {
		var e = 10, t = 1e3;
		this.isTie ? (this.calcTieDirection(), this.calcX(e, t), this.calcTieY()) : (this.calcSlurDirection(), this.calcX(e, t), this.calcSlurY());
		var n, r;
		return this.above ? (r = Math.min(this.startY, this.endY), n = r + 3) : (n = Math.min(this.startY, this.endY), r = n - 3), [n, r];
	}, t.exports = n;
})), require_decoration = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_dynamic_decoration(), r = require_crescendo_element(), i = require_glissando_element(), a = require_glyphs(), o = require_relative_element(), s = require_tie_element(), c = function() {
		this.startDiminuendoX = void 0, this.startCrescendoX = void 0, this.minTop = 12, this.minBottom = 0;
	}, l = function(e, t, n, r, i, c, l, u, d) {
		for (var f, p = 0; p < t.length; p++) {
			if (t[p] === "staccato" || t[p] === "tenuto" || t[p] === "accent" && !d) {
				var m = "scripts." + t[p];
				if (t[p] === "accent" && (m = "scripts.sforzato"), f = f === void 0 ? l === "down" ? n + 2 : u - 2 : l === "down" ? f + 2 : f - 2, t[p] === "accent") l === "up" ? f-- : f++;
				else switch (f) {
					case 2:
					case 4:
					case 6:
					case 8:
					case 10:
						l === "up" ? f-- : f++;
						break;
				}
				n > 9 && f++;
				var h = r / 2;
				a.getSymbolAlign(m) !== "center" && (h -= a.getSymbolWidth(m) / 2), i.addFixedX(new o(m, h, a.getSymbolWidth(m), f));
			}
			if (t[p] === "slide" && i.heads[0]) {
				var g = i.heads[0].pitch;
				g -= 2;
				var _ = new o("", -c - 15, 0, g - 1), v = new o("", -c - 5, 0, g + 1);
				i.addFixedX(_), i.addFixedX(v), e.addOther(new s({
					anchor1: _,
					anchor2: v,
					fixedY: !0
				}));
			}
		}
		return f === void 0 && (f = n), {
			above: f,
			below: i.bottom
		};
	}, u = function(e, t, r, i) {
		for (var a = 0; a < t.length; a++) switch (t[a]) {
			case "p":
			case "mp":
			case "pp":
			case "ppp":
			case "pppp":
			case "f":
			case "ff":
			case "fff":
			case "ffff":
			case "sfz":
			case "mf":
				var o = new n(r, t[a], i);
				e.addOther(o);
		}
	}, d = function(e, t, n, r, i) {
		function s() {
			if (r.heads.length === 0) return 10;
			for (var e = r.heads[0].pitch, t = 1; t < r.heads.length; t++) e = Math.max(e, r.heads[t].pitch);
			return e;
		}
		function c() {
			if (r.heads.length === 0) return 2;
			for (var e = r.heads[0].pitch, t = 1; t < r.heads.length; t++) e = Math.min(e, r.heads[t].pitch);
			return e;
		}
		function l(e, t) {
			var l = i === "down" ? c() + 1 : s() + 9;
			i !== "down" && t === 1 && l--;
			var u = n / 2;
			u += i === "down" ? -5 : 3;
			for (var d = 0; d < t; d++) --l, r.addFixedX(new o(e, u, a.getSymbolWidth(e), l));
		}
		for (var u = 0; u < e.length; u++) switch (e[u]) {
			case "/":
				l("flags.ugrace", 1);
				break;
			case "//":
				l("flags.ugrace", 2);
				break;
			case "///":
				l("flags.ugrace", 3);
				break;
			case "////":
				l("flags.ugrace", 4);
				break;
		}
	}, f = function(e, t, n, r, i, s, c, l) {
		function u(e, t) {
			e === "above" ? r.above += t : r.below -= t;
		}
		function d(e) {
			var t;
			return e === "above" ? (t = r.above, t < s && (t = s)) : (t = r.below, t > c && (t = c)), t;
		}
		function f(e, r, i) {
			var a = d(r);
			n.addFixedX(new o(e, t / 2, 0, a + 2, {
				type: "decoration",
				klass: "ornament",
				thickness: 3,
				anchor: i
			})), u(r, 5);
		}
		function p(e, r) {
			var i = t / 2;
			a.getSymbolAlign(e) !== "center" && (i -= a.getSymbolWidth(e) / 2);
			var s = a.symbolHeightInPitches(e) + 1, c = d(r);
			c = r === "above" ? c + s / 2 : c - s / 2, n.addFixedX(new o(e, i, a.getSymbolWidth(e), c, {
				klass: "ornament",
				thickness: a.symbolHeightInPitches(e),
				position: r
			})), u(r, s);
		}
		for (var m = {
			"+": "scripts.stopped",
			open: "scripts.open",
			snap: "scripts.snap",
			wedge: "scripts.wedge",
			thumb: "scripts.thumb",
			shortphrase: "scripts.shortphrase",
			mediumphrase: "scripts.mediumphrase",
			longphrase: "scripts.longphrase",
			trill: "scripts.trill",
			trillh: "scripts.trill",
			roll: "scripts.roll",
			irishroll: "scripts.roll",
			marcato: "scripts.umarcato",
			dmarcato: "scripts.dmarcato",
			umarcato: "scripts.umarcato",
			turn: "scripts.turn",
			uppermordent: "scripts.prall",
			pralltriller: "scripts.prall",
			mordent: "scripts.mordent",
			lowermordent: "scripts.mordent",
			downbow: "scripts.downbow",
			upbow: "scripts.upbow",
			fermata: "scripts.ufermata",
			invertedfermata: "scripts.dfermata",
			breath: ",",
			coda: "scripts.coda",
			segno: "scripts.segno"
		}, h = !1, g = 0; g < e.length; g++) switch (e[g]) {
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "D.C.":
			case "D.S.":
				f(e[g], i, "middle"), h = !0;
				break;
			case "D.C.alcoda":
				f("D.C. al coda", i, "end"), h = !0;
				break;
			case "D.C.alfine":
				f("D.C. al fine", i, "end"), h = !0;
				break;
			case "D.S.alcoda":
				f("D.S. al coda", i, "end"), h = !0;
				break;
			case "D.S.alfine":
				f("D.S. al fine", i, "end"), h = !0;
				break;
			case "fine":
				f("FINE", i, "middle"), h = !0;
				break;
			case "+":
			case "open":
			case "snap":
			case "wedge":
			case "thumb":
			case "shortphrase":
			case "mediumphrase":
			case "longphrase":
			case "trill":
			case "trillh":
			case "roll":
			case "irishroll":
			case "marcato":
			case "dmarcato":
			case "turn":
			case "uppermordent":
			case "pralltriller":
			case "mordent":
			case "lowermordent":
			case "downbow":
			case "upbow":
			case "fermata":
			case "breath":
			case "umarcato":
			case "coda":
			case "segno":
				p(m[e[g]], i), h = !0;
				break;
			case "invertedfermata":
				p(m[e[g]], "below"), h = !0;
				break;
			case "mark":
				n.klass = "mark";
				break;
			case "accent":
				l && (p("scripts.sforzato", i), h = !0);
				break;
		}
		return h;
	};
	function p(e, t, n) {
		for (var r = 0; r < e.length; r++) switch (e[r]) {
			case "arpeggio":
				for (var i = t.abcelem.minpitch - 1; i <= t.abcelem.maxpitch; i += 2) t.addExtra(new o("scripts.arpeggio", -a.getSymbolWidth("scripts.arpeggio") * 2 - n, 0, i + 2, {
					klass: "ornament",
					thickness: a.symbolHeightInPitches("scripts.arpeggio")
				}));
				break;
		}
	}
	c.prototype.dynamicDecoration = function(e, t, n, a) {
		for (var o, s, c, l = 0; l < t.length; l++) switch (t[l]) {
			case "diminuendo(":
				this.startDiminuendoX = n, o = void 0;
				break;
			case "diminuendo)":
				o = {
					start: this.startDiminuendoX,
					stop: n
				}, this.startDiminuendoX = void 0;
				break;
			case "crescendo(":
				this.startCrescendoX = n, s = void 0;
				break;
			case "crescendo)":
				s = {
					start: this.startCrescendoX,
					stop: n
				}, this.startCrescendoX = void 0;
				break;
			case "~(":
			case "glissando(":
				this.startGlissandoX = n, c = void 0;
				break;
			case "~)":
			case "glissando)":
				c = {
					start: this.startGlissandoX,
					stop: n
				}, this.startGlissandoX = void 0;
				break;
		}
		o && e.addOther(new r(o.start, o.stop, ">", a)), s && e.addOther(new r(s.start, s.stop, "<", a)), c && e.addOther(new i(c.start, c.stop));
	}, c.prototype.createDecoration = function(e, t, n, r, i, a, o, s, c, m, h) {
		c ||= {
			ornamentPosition: "above",
			volumePosition: m ? "above" : "below",
			dynamicPosition: m ? "above" : "below"
		}, u(e, t, i, c.volumePosition), this.dynamicDecoration(e, t, i, c.dynamicPosition), d(t, n, r, i, o);
		var g = l(e, t, n, r, i, a, o, s, h);
		g.above = Math.max(g.above, this.minTop), g.below = Math.min(g.below, s), f(t, r, i, g, c.ornamentPosition, this.minTop, s, h), p(t, i, a);
	}, t.exports = c;
})), require_ending_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function(e, t, n) {
		this.type = "EndingElem", this.text = e, this.anchor1 = t, this.anchor2 = n, this.endingHeightAbove = 5, this.pitch = void 0;
	};
})), require_calc_height = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function(e) {
		for (var t = 0, n = 0; n < e.voices.length; n++) {
			var r = e.voices[n].staff;
			e.voices[n].duplicate || (t += r.top, t += -r.bottom);
		}
		return t;
	};
})), require_staff_group_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_calc_height(), r = function(e) {
		this.getTextSize = e, this.voices = [], this.staffs = [], this.brace = void 0, this.bracket = void 0;
	};
	r.prototype.setLimit = function(e, t) {
		t.specialY[e] && (t.staff.specialY[e] ? t.staff.specialY[e] = Math.max(t.staff.specialY[e], t.specialY[e]) : t.staff.specialY[e] = t.specialY[e]);
	}, r.prototype.addVoice = function(e, t, n) {
		var r = this.voices.length;
		this.voices[r] = e, this.staffs[t] ? this.staffs[t].voices.push(r) : this.staffs[this.staffs.length] = {
			top: 10,
			bottom: 2,
			lines: n,
			voices: [r],
			specialY: {
				tempoHeightAbove: 0,
				partHeightAbove: 0,
				volumeHeightAbove: 0,
				dynamicHeightAbove: 0,
				endingHeightAbove: 0,
				chordHeightAbove: 0,
				lyricHeightAbove: 0,
				lyricHeightBelow: 0,
				chordHeightBelow: 0,
				volumeHeightBelow: 0,
				dynamicHeightBelow: 0
			}
		}, e.staff = this.staffs[t];
	}, r.prototype.setHeight = function() {
		this.height = n(this);
	}, r.prototype.setWidth = function(e) {
		this.w = e;
		for (var t = 0; t < this.voices.length; t++) this.voices[t].setWidth(e);
	}, r.prototype.setStaffLimits = function(e) {
		e.staff.top = Math.max(e.staff.top, e.top), e.staff.bottom = Math.min(e.staff.bottom, e.bottom), this.setLimit("tempoHeightAbove", e), this.setLimit("partHeightAbove", e), this.setLimit("volumeHeightAbove", e), this.setLimit("dynamicHeightAbove", e), this.setLimit("endingHeightAbove", e), this.setLimit("chordHeightAbove", e), this.setLimit("lyricHeightAbove", e), this.setLimit("lyricHeightBelow", e), this.setLimit("chordHeightBelow", e), this.setLimit("volumeHeightBelow", e), this.setLimit("dynamicHeightBelow", e);
	}, t.exports = r;
})), require_tempo_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_absolute_element(), r = require_relative_element(), i = function(e, t, n) {
		this.type = "TempoElement", this.tempo = e, this.tempo.type = "tempo", this.tuneNumber = t, this.totalHeightInPitches = 6, this.tempoHeightAbove = this.totalHeightInPitches, this.pitch = void 0, this.tempo.duration && !this.tempo.suppressBpm && (this.note = this.createNote(n, e, t));
	};
	i.prototype.setX = function(e) {
		this.x = e;
	}, i.prototype.createNote = function(e, t, i) {
		var a = .75, o = t.duration[0], s = new n(t, o, 1, "tempo", i), c, l, u;
		o <= 1 / 32 ? (u = "noteheads.quarter", l = "flags.u32nd", c = 0) : o <= 1 / 16 ? (u = "noteheads.quarter", l = "flags.u16th", c = 0) : o <= 3 / 32 ? (u = "noteheads.quarter", l = "flags.u16nd", c = 1) : o <= 1 / 8 ? (u = "noteheads.quarter", l = "flags.u8th", c = 0) : o <= 3 / 16 ? (u = "noteheads.quarter", l = "flags.u8th", c = 1) : o <= 1 / 4 ? (u = "noteheads.quarter", c = 0) : o <= 3 / 8 ? (u = "noteheads.quarter", c = 1) : o <= 1 / 2 ? (u = "noteheads.half", c = 0) : o <= 3 / 4 ? (u = "noteheads.half", c = 1) : o <= 1 ? (u = "noteheads.whole", c = 0) : o <= 1.5 ? (u = "noteheads.whole", c = 1) : o <= 2 ? (u = "noteheads.dbl", c = 0) : (u = "noteheads.dbl", c = 1);
		var d = e(s, u, { verticalPos: 0 }, {
			dir: "up",
			flag: l,
			dot: c,
			scale: a
		}).notehead;
		s.addHead(d);
		var f;
		if (u !== "noteheads.whole" && u !== "noteheads.dbl") {
			var p = 1 / 3 * a, m = 5 * a;
			f = new r(null, d.dx + d.w, 0, p, {
				type: "stem",
				pitch2: m,
				linewidth: -.6
			}), s.addRight(f);
		}
		return s;
	}, t.exports = i;
})), require_triplet_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t, n) {
		this.type = "TripletElem", this.anchor1 = t, this.number = e, this.durationClass = ("d" + Math.round(t.parent.durationClass * 1e3) / 1e3).replace(/\./, "-"), this.middleElems = [], this.flatBeams = n.flatBeams;
	};
	n.prototype.isClosed = function() {
		return !!this.anchor2;
	}, n.prototype.middleNote = function(e) {
		this.middleElems.push(e);
	}, n.prototype.setCloseAnchor = function(e) {
		this.anchor2 = e, (!this.anchor1.parent.beam || this.anchor1.stemDir === "up") && (this.endingHeightAbove = 4);
	}, t.exports = n;
})), require_translate_chord = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e) {
		switch (e) {
			case "B#": return "H#";
			case "B♯": return "H♯";
			case "B": return "H";
			case "Bb": return "B";
			case "B♭": return "B";
		}
		return e;
	}
	function r(e, t, r) {
		var i = e.split("\n");
		for (let e = 0; e < i.length; e++) {
			let a = i[e].match(/^([ABCDEFG][♯♭]?)?([^\/]+)?(\/([ABCDEFG][#b♯♭]?))?/);
			if (!a) continue;
			let o = a[1] || "", s = a[2] || "", c = a[4] || "";
			r && (o = n(o), c = n(c));
			let l = t ? "" : "", u = c ? "/" + c : "";
			i[e] = [
				o,
				s,
				u
			].join(l);
		}
		return i.join("\n");
	}
	t.exports = r;
})), require_add_chord = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_relative_element(), r = require_spacing(), i = require_translate_chord(), a = function(e, t, n, r, i, a, s, c) {
		for (var l = 0; l < n.chord.length; l++) {
			var u = n.chord[l].position, d = n.chord[l].rel_position, f = u === "left" || u === "right" || u === "below" || u === "above" || !!d, p, m;
			f ? (p = "annotationfont", m = "abcjs-annotation") : (p = "gchordfont", m = "abcjs-chord");
			var h = e.attr(p, m), g = n.chord[l].name, _;
			if (typeof g == "string") _ = o(g, u, d, f, p, m, h, e, t, n, r, i, a, s, c), r = _.roomTaken, i = _.roomTakenRight;
			else for (var v = 0; v < g.length; v++) _ = o(g[v].text, u, d, f, p, m, h, e, t, n, r, i, a, s, c), r = _.roomTaken, i = _.roomTakenRight;
		}
		return {
			roomTaken: r,
			roomTakenRight: i
		};
	};
	function o(e, t, a, o, s, c, l, u, d, f, p, m, h, g, _) {
		for (var v = e.split("\n"), y = v.length - 1; y >= 0; y--) {
			var b = v[y], x = 0, S;
			o || (b = i(b, g, _));
			var C = u.calc(b, s, c), w = C.width, T = C.height / r.STEP;
			switch (t) {
				case "left":
					p += w + 7, x = -p, S = f.averagepitch, d.addExtra(new n(b, x, w + 4, S, {
						type: "text",
						height: T,
						dim: l,
						position: "left"
					}));
					break;
				case "right":
					m += 4, x = m, S = f.averagepitch, d.addRight(new n(b, x, w + 4, S, {
						type: "text",
						height: T,
						dim: l,
						position: "right"
					}));
					break;
				case "below":
					d.addRight(new n(b, 0, 0, void 0, {
						type: "text",
						position: "below",
						height: T,
						dim: l,
						realWidth: w
					}));
					break;
				case "above":
					d.addRight(new n(b, 0, 0, void 0, {
						type: "text",
						position: "above",
						height: T,
						dim: l,
						realWidth: w
					}));
					break;
				default: if (a) {
					var E = a.y + 3 * r.STEP;
					d.addRight(new n(b, x + a.x, 0, f.minpitch + E / r.STEP, {
						position: "relative",
						type: "text",
						height: T,
						dim: l
					}));
				} else {
					var D = "above";
					f.positioning && f.positioning.chordPosition && (D = f.positioning.chordPosition), D !== "hidden" && d.addCentered(new n(b, h / 2, w, void 0, {
						type: "chord",
						position: D,
						height: T,
						dim: l,
						realWidth: w
					}));
				}
			}
		}
		return {
			roomTaken: p,
			roomTakenRight: m
		};
	}
	t.exports = a;
})), require_abstract_engraver = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_absolute_element(), r = require_beam_element(), a = require_brace_element(), o = require_create_clef(), s = require_create_key_signature(), c = require_create_note_head(), l = require_create_time_signature(), u = require_decoration(), d = require_ending_element(), f = require_glyphs(), p = require_relative_element(), m = require_spacing(), h = require_staff_group_element(), g = require_tempo_element(), v = require_tie_element(), y = require_triplet_element(), x = require_voice_element(), S = require_add_chord(), C = require_pitches_to_perc(), w = require_abc_common(), T = function(e) {
		var t = 0;
		return e.duration && (t = e.duration), t;
	}, E = !1, D = {
		rest: {
			0: "rests.whole",
			1: "rests.half",
			2: "rests.quarter",
			3: "rests.8th",
			4: "rests.16th",
			5: "rests.32nd",
			6: "rests.64th",
			7: "rests.128th",
			multi: "rests.multimeasure"
		},
		note: {
			"-1": "noteheads.dbl",
			0: "noteheads.whole",
			1: "noteheads.half",
			2: "noteheads.quarter",
			3: "noteheads.quarter",
			4: "noteheads.quarter",
			5: "noteheads.quarter",
			6: "noteheads.quarter",
			7: "noteheads.quarter",
			nostem: "noteheads.quarter"
		},
		rhythm: {
			"-1": "noteheads.slash.whole",
			0: "noteheads.slash.whole",
			1: "noteheads.slash.whole",
			2: "noteheads.slash.quarter",
			3: "noteheads.slash.quarter",
			4: "noteheads.slash.quarter",
			5: "noteheads.slash.quarter",
			6: "noteheads.slash.quarter",
			7: "noteheads.slash.quarter",
			nostem: "noteheads.slash.nostem"
		},
		x: {
			"-1": "noteheads.indeterminate",
			0: "noteheads.indeterminate",
			1: "noteheads.indeterminate",
			2: "noteheads.indeterminate",
			3: "noteheads.indeterminate",
			4: "noteheads.indeterminate",
			5: "noteheads.indeterminate",
			6: "noteheads.indeterminate",
			7: "noteheads.indeterminate",
			nostem: "noteheads.indeterminate"
		},
		harmonic: {
			"-1": "noteheads.harmonic.quarter",
			0: "noteheads.harmonic.quarter",
			1: "noteheads.harmonic.quarter",
			2: "noteheads.harmonic.quarter",
			3: "noteheads.harmonic.quarter",
			4: "noteheads.harmonic.quarter",
			5: "noteheads.harmonic.quarter",
			6: "noteheads.harmonic.quarter",
			7: "noteheads.harmonic.quarter",
			nostem: "noteheads.harmonic.quarter"
		},
		triangle: {
			"-1": "noteheads.triangle.quarter",
			0: "noteheads.triangle.quarter",
			1: "noteheads.triangle.quarter",
			2: "noteheads.triangle.quarter",
			3: "noteheads.triangle.quarter",
			4: "noteheads.triangle.quarter",
			5: "noteheads.triangle.quarter",
			6: "noteheads.triangle.quarter",
			7: "noteheads.triangle.quarter",
			nostem: "noteheads.triangle.quarter"
		},
		uflags: {
			3: "flags.u8th",
			4: "flags.u16th",
			5: "flags.u32nd",
			6: "flags.u64th"
		},
		dflags: {
			3: "flags.d8th",
			4: "flags.d16th",
			5: "flags.d32nd",
			6: "flags.d64th"
		}
	}, k = function(e, t, n) {
		this.decoration = new u(), this.getTextSize = e, this.tuneNumber = t, this.isBagpipes = n.bagpipes, this.flatBeams = n.flatbeams, this.graceSlurs = n.graceSlurs, this.percmap = n.percmap, this.initialClef = n.initialClef, this.jazzchords = !!n.jazzchords, this.accentAbove = !!n.accentAbove, this.germanAlphabet = !!n.germanAlphabet, this.reset();
	};
	k.prototype.reset = function() {
		this.slurs = {}, this.ties = [], this.voiceScale = 1, this.voiceColor = void 0, this.slursbyvoice = {}, this.tiesbyvoice = {}, this.endingsbyvoice = {}, this.scaleByVoice = {}, this.colorByVoice = {}, this.tripletmultiplier = 1, this.abcline = void 0, this.accidentalSlot = void 0, this.accidentalshiftx = void 0, this.dotshiftx = void 0, this.hasVocals = !1, this.minY = void 0, this.partstartelem = void 0, this.startlimitelem = void 0, this.stemdir = void 0;
	}, k.prototype.setStemHeight = function(e) {
		this.stemHeight = Math.round(e * 10 / m.STEP) / 10;
	}, k.prototype.getCurrentVoiceId = function(e, t) {
		return "s" + e + "v" + t;
	}, k.prototype.pushCrossLineElems = function(e, t) {
		this.slursbyvoice[this.getCurrentVoiceId(e, t)] = this.slurs, this.tiesbyvoice[this.getCurrentVoiceId(e, t)] = this.ties, this.endingsbyvoice[this.getCurrentVoiceId(e, t)] = this.partstartelem, this.scaleByVoice[this.getCurrentVoiceId(e, t)] = this.voiceScale, this.voiceColor && (this.colorByVoice[this.getCurrentVoiceId(e, t)] = this.voiceColor);
	}, k.prototype.popCrossLineElems = function(e, t) {
		this.slurs = this.slursbyvoice[this.getCurrentVoiceId(e, t)] || {}, this.ties = this.tiesbyvoice[this.getCurrentVoiceId(e, t)] || [], this.partstartelem = this.endingsbyvoice[this.getCurrentVoiceId(e, t)], this.voiceScale = this.scaleByVoice[this.getCurrentVoiceId(e, t)], this.voiceScale === void 0 && (this.voiceScale = 1), this.voiceColor = this.colorByVoice[this.getCurrentVoiceId(e, t)];
	}, k.prototype.containsLyrics = function(e) {
		for (var t = 0; t < e.length; t++) for (var n = 0; n < e[t].voices.length; n++) for (var r = 0; r < e[t].voices[n].length; r++) {
			var i = e[t].voices[n][r];
			if (i.lyric) {
				(!i.positioning || i.positioning.vocalPosition === "below") && (this.hasVocals = !0);
				return;
			}
		}
	}, k.prototype.createABCLine = function(e, t, n) {
		this.minY = 2, this.containsLyrics(e);
		var r = new h(this.getTextSize);
		this.tempoSet = !1;
		for (var i = 0; i < e.length; i++) E && this.restoreState(), E = !1, this.createABCStaff(r, e[i], t, i, n);
		return r;
	}, k.prototype.createABCStaff = function(e, t, n, r, i) {
		e.getTextSize.updateFonts(t);
		for (var c = 0; c < t.voices.length; c++) {
			var u = new x(c, t.voices.length);
			c === 0 ? (u.barfrom = t.connectBarLines === "start" || t.connectBarLines === "continue", u.barto = t.connectBarLines === "continue" || t.connectBarLines === "end") : u.duplicate = !0, t.title && t.title[c] && (u.header = t.title[c].replace(/\\n/g, "\n"), u.headerPosition = 6 + e.getTextSize.baselineToCenter(u.header, "voicefont", "staff-extra voice-name", c, t.voices.length) / m.STEP), t.clef && t.clef.type === "perc" && (u.isPercussion = !0);
			var d = (!this.initialClef || i === 0) && o(t.clef, this.tuneNumber);
			d && (c === 0 && t.barNumber && this.addMeasureNumber(t.barNumber, d), u.addChild(d), this.startlimitelem = d);
			var f = s(t.key, this.tuneNumber);
			if (f && (u.addChild(f), this.startlimitelem = f), t.meter) {
				t.meter.type === "specified" ? this.measureLength = t.meter.value[0].num / t.meter.value[0].den : this.measureLength = 1;
				var p = l(t.meter, this.tuneNumber);
				u.addChild(p), this.startlimitelem = p;
			}
			u.duplicate && (u.children = []);
			var h = t.clef.stafflines || t.clef.stafflines === 0 ? t.clef.stafflines : 5;
			e.addVoice(u, r, h);
			var g = h === 1;
			this.createABCVoice(t.voices[c], n, r, c, g, u), e.setStaffLimits(u), c === 0 && (t.brace === "start" || !e.brace && t.brace ? (e.brace ||= [], e.brace.push(new a(u, "brace"))) : t.brace === "end" && e.brace ? e.brace[e.brace.length - 1].setBottomStaff(u) : t.brace === "continue" && e.brace && e.brace[e.brace.length - 1].continuing(u), t.bracket === "start" || !e.bracket && t.bracket ? (e.bracket ||= [], e.bracket.push(new a(u, "bracket"))) : t.bracket === "end" && e.bracket ? e.bracket[e.bracket.length - 1].setBottomStaff(u) : t.bracket === "continue" && e.bracket && e.bracket[e.bracket.length - 1].continuing(u));
		}
	};
	function A(e, t) {
		var n = e[t];
		if (n.el_type !== "note" || !n.startBeam || n.endBeam) return {
			count: 1,
			elem: n
		};
		for (var r = []; t < e.length && e[t].el_type === "note" && (r.push(e[t]), !e[t].endBeam);) t++;
		return {
			count: r.length,
			elem: r
		};
	}
	k.prototype.createABCVoice = function(e, t, r, i, a, o) {
		this.popCrossLineElems(r, i), this.stemdir = this.isBagpipes ? "down" : null, this.abcline = e, this.partstartelem && (this.partstartelem = new d("", null, null), o.addOther(this.partstartelem));
		var s = o.voicetotal < 2 ? -1 : o.voicenumber;
		for (var l in this.slurs) this.slurs.hasOwnProperty(l) && (this.slurs[l] = new v({
			force: this.slurs[l].force,
			voiceNumber: s,
			stemDir: this.slurs[l].stemDir,
			style: this.slurs[l].dotted
		}), E && this.slurs[l].setHint(), o.addOther(this.slurs[l]));
		for (var u = 0; u < this.ties.length; u++) this.ties[u] = new v({
			force: this.ties[u].force,
			stemDir: this.ties[u].stemDir,
			voiceNumber: s,
			style: this.ties[u].dotted
		}), E && this.ties[u].setHint(), o.addOther(this.ties[u]);
		for (var f = 0; f < this.abcline.length; f++) j(this.abcline[f]), this.minY = Math.min(this.abcline[f].minpitch, this.minY);
		for (var p = r === 0, m = 0; m < this.abcline.length;) {
			var h = A(this.abcline, m), _ = this.createABCElement(p, a, o, h.elem);
			if (_) for (u = 0; u < _.length; u++) {
				if (!this.tempoSet && t && !t.suppress) {
					this.tempoSet = !0;
					var y = new n(t, 0, 0, "tempo", this.tuneNumber, {});
					y.addFixedX(new g(t, this.tuneNumber, c)), o.addChild(y);
				}
				o.addChild(_[u]);
			}
			m += h.count;
		}
		this.pushCrossLineElems(r, i);
	}, k.prototype.saveState = function() {
		this.tiesSave = w.cloneArray(this.ties), this.slursSave = w.cloneHashOfHash(this.slurs), this.slursbyvoiceSave = w.cloneHashOfHash(this.slursbyvoice), this.tiesbyvoiceSave = w.cloneHashOfArrayOfHash(this.tiesbyvoice);
	}, k.prototype.restoreState = function() {
		this.ties = w.cloneArray(this.tiesSave), this.slurs = w.cloneHashOfHash(this.slursSave), this.slursbyvoice = w.cloneHashOfHash(this.slursbyvoiceSave), this.tiesbyvoice = w.cloneHashOfArrayOfHash(this.tiesbyvoiceSave);
	}, k.prototype.createABCElement = function(e, t, r, i) {
		var a = [];
		switch (i.el_type) {
			case void 0:
				a = this.createBeam(t, r, i);
				break;
			case "note":
				a[0] = this.createNote(i, !1, t, r), this.triplet && this.triplet.isClosed() && (r.addOther(this.triplet), this.triplet = null, this.tripletmultiplier = 1);
				break;
			case "bar":
				a[0] = this.createBarLine(r, i, e), r.duplicate && a.length > 0 && (a[0].invisible = !0);
				break;
			case "meter":
				a[0] = l(i, this.tuneNumber), this.startlimitelem = a[0], r.duplicate && a.length > 0 && (a[0].invisible = !0);
				break;
			case "clef":
				if (a[0] = o(i, this.tuneNumber), !a[0]) return null;
				r.duplicate && a.length > 0 && (a[0].invisible = !0);
				break;
			case "key":
				var u = s(i, this.tuneNumber);
				u && (a[0] = u, this.startlimitelem = a[0]), r.duplicate && a.length > 0 && (a[0].invisible = !0);
				break;
			case "stem":
				this.stemdir = i.direction === "auto" ? void 0 : i.direction;
				break;
			case "part":
				var d = new n(i, 0, 0, "part", this.tuneNumber), f = this.getTextSize.calc(i.title, "partsfont", "part");
				d.addFixedX(new p(i.title, 0, 0, void 0, {
					type: "part",
					height: f.height / m.STEP
				})), a[0] = d;
				break;
			case "tempo":
				var h = new n(i, 0, 0, "tempo", this.tuneNumber);
				h.addFixedX(new g(i, this.tuneNumber, c)), a[0] = h;
				break;
			case "style":
				i.head === "normal" ? delete this.style : this.style = i.head;
				break;
			case "hint":
				E = !0, this.saveState();
				break;
			case "midi": break;
			case "scale":
				this.voiceScale = i.size;
				break;
			case "color":
				this.voiceColor = i.color, r.color = this.voiceColor;
				break;
			default:
				var _ = new n(i, 0, 0, "unsupported", this.tuneNumber);
				_.addFixed(new p("element type " + i.el_type, 0, 0, void 0, { type: "debug" })), a[0] = _;
		}
		return a;
	};
	function j(e) {
		if (e.pitches) {
			P(e);
			for (var t = 0, n = 0; n < e.pitches.length; n++) t += e.pitches[n].verticalPos;
			e.averagepitch = t / e.pitches.length, e.minpitch = e.pitches[0].verticalPos, e.maxpitch = e.pitches[e.pitches.length - 1].verticalPos;
		}
	}
	k.prototype.createBeam = function(e, t, n) {
		var i = [], a = new r(this.stemHeight * this.voiceScale, this.stemdir, this.flatBeams, n[0]);
		E && a.setHint();
		for (var o = 0; o < n.length; o++) a.runningDirection(n[o]);
		a.setStemDirection();
		var s = this.stemdir;
		for (this.stemdir = a.stemsUp ? "up" : "down", o = 0; o < n.length; o++) {
			var c = n[o], l = this.createNote(c, !0, e, t);
			i.push(l), a.add(l), this.triplet && this.triplet.isClosed() && (t.addOther(this.triplet), this.triplet = null, this.tripletmultiplier = 1);
		}
		return a.calcDir(), t.addBeam(a), this.stemdir = s, i;
	};
	var P = function(e) {
		var t;
		do {
			t = !0;
			for (var n = 0; n < e.pitches.length - 1; n++) if (e.pitches[n].pitch > e.pitches[n + 1].pitch) {
				t = !1;
				var r = e.pitches[n];
				e.pitches[n] = e.pitches[n + 1], e.pitches[n + 1] = r;
			}
		} while (!t);
	}, F = function(e, t, n, r, i, a, o, s, c) {
		for (var l = n; l > 11; l--) l % 2 == 0 && !r && e.addFixed(new p(null, s, (i + 4) * c, l, { type: "ledger" }));
		for (l = t; l < 1; l++) l % 2 == 0 && !r && e.addFixed(new p(null, s, (i + 4) * c, l, { type: "ledger" }));
		for (l = 0; l < a.length; l++) {
			var u = i;
			o === "down" && (u = -u), e.addFixed(new p(null, u + s, (i + 4) * c, a[l], { type: "ledger" }));
		}
	};
	k.prototype.addGraceNotes = function(e, t, n, i, a, o, s) {
		var l = 3 / 5;
		a = Math.round(a * (3.5 / 5));
		var u = null, d;
		e.gracenotes.length > 1 && (u = new r(a, "grace", o), E && u.setHint(), u.mainNote = n);
		var m, h = [];
		for (m = e.gracenotes.length - 1; m >= 0; m--) s += 10, h[m] = s, e.gracenotes[m].accidental && (s += 7);
		for (m = 0; m < e.gracenotes.length; m++) {
			var g = e.gracenotes[m].verticalPos;
			d = u ? null : D.uflags[o ? 5 : 3];
			var _ = c(n, "noteheads.quarter", e.gracenotes[m], {
				dir: "up",
				headx: -h[m],
				extrax: -h[m],
				flag: d,
				scale: l * this.voiceScale,
				accidentalSlot: []
			});
			_.notehead.highestVert = _.notehead.pitch + a;
			var y = _.notehead;
			if (this.addSlursAndTies(n, e.gracenotes[m], y, t, "up", !0), n.addExtra(y), e.gracenotes[m].acciaccatura) {
				var b = e.gracenotes[m].verticalPos + 7 * l, x = u ? 5 : 6;
				n.addRight(new p("flags.ugrace", -h[m] + x, 0, b, {
					scalex: l,
					scaley: l
				}));
			}
			if (u) {
				var S = e.gracenotes[m].duration / 2;
				o && (S /= 2);
				var C = {
					heads: [y],
					abcelem: {
						averagepitch: g,
						minpitch: g,
						maxpitch: g,
						duration: S
					}
				};
				u.add(C);
			} else {
				var w = g + 1 / 3 * l, T = g + 7 * l, O = y.dx + y.w;
				n.addExtra(new p(null, O, 0, w, {
					type: "stem",
					pitch2: T,
					linewidth: -.6
				}));
			}
			F(n, g, g, !1, f.getSymbolWidth("noteheads.quarter"), [], !0, y.dx - 1, .6);
			var k = e.rest && (e.rest.type === "spacer" || e.rest.type === "invisible");
			m === 0 && !o && this.graceSlurs && !k && t.addOther(new v({
				anchor1: y,
				anchor2: i,
				isGrace: !0
			}));
		}
		return u && (u.calcDir(), t.addBeam(u)), s;
	};
	function I(e, t, n, r, i, a, o, s, l) {
		var u, d = 7, m, h, g;
		switch (i && (a === "down" && (d = 3), a === "up" && (d = 11)), o && (d = n < .5 || n < 1 ? 7 : 5), t.rest.type) {
			case "whole":
				u = D.rest[0], t.averagepitch = d, t.minpitch = d, t.maxpitch = d, r = 0;
				break;
			case "rest":
				u = t.style === "rhythm" ? D.rhythm[-s] : D.rest[-s], t.averagepitch = d, t.minpitch = d, t.maxpitch = d;
				break;
			case "invisible":
			case "invisible-multimeasure":
			case "spacer":
				u = "", t.averagepitch = d, t.minpitch = d, t.maxpitch = d;
				break;
			case "multimeasure":
				u = D.rest.multi, t.averagepitch = d, t.minpitch = d, t.maxpitch = d, r = 0;
				var _ = f.getSymbolWidth(u);
				e.addHead(new p(u, _, _ * 2, 7));
				var v = new p("" + t.rest.text, _, _, 16, { type: "multimeasure-text" });
				e.addExtra(v);
		}
		if (t.rest.type.indexOf("multimeasure") < 0 && t.rest.type !== "invisible") {
			var y = c(e, u, { verticalPos: d }, {
				dot: r,
				scale: l
			});
			m = y.notehead, m && (e.addHead(m), h = y.accidentalshiftx, g = y.dotshiftx);
		}
		return {
			noteHead: m,
			roomTaken: h,
			roomTakenRight: g
		};
	}
	function L(e, t) {
		for (var n = 0; n < e.length; n++) if (JSON.stringify(e[n]) === JSON.stringify(t)) return;
		e.push(t);
	}
	k.prototype.addNoteToAbcElement = function(e, t, n, r, i, a, o, s, l) {
		var u = 0, d, m = 0, h = 0, g, _, v = [], y = [], b = 0, x = t.averagepitch >= 6 ? "down" : "up";
		r && (x = r), i = t.style ? t.style : i, (!i || i === "normal") && (i = "note");
		var S = a ? D[i].nostem : D[i][-o];
		S || console.log("noteSymbol:", i, o, a);
		var w;
		for (w = x === "down" ? t.pitches.length - 2 : 1; x === "down" ? w >= 0 : w < t.pitches.length; w = x === "down" ? w - 1 : w + 1) {
			var E = t.pitches[x === "down" ? w + 1 : w - 1], O = t.pitches[w], k = x === "down" ? E.pitch - O.pitch : O.pitch - E.pitch;
			k <= 1 && !E.printer_shift && (O.printer_shift = k ? "different" : "same", (O.verticalPos > 11 || O.verticalPos < 1) && v.push(O.verticalPos - O.verticalPos % 2), x === "down" ? m = f.getSymbolWidth(S) + 2 : u = f.getSymbolWidth(S) + 2);
		}
		var A = t.pitches.length;
		for (w = 0; w < t.pitches.length; w++) {
			if (!s) var j = x === "down" && w !== 0 || x === "up" && w !== A - 1 ? null : D[x === "down" ? "dflags" : "uflags"][-o];
			var M;
			if (t.pitches[w].style) M = D[t.pitches[w].style][-o];
			else if (l.isPercussion && this.percmap) {
				M = S;
				var N = this.percmap[C(t.pitches[w])];
				N && N.noteHead && D[N.noteHead] && (M = D[N.noteHead][-o]);
			} else M = S;
			t.pitches[w].highestVert = t.pitches[w].verticalPos;
			var P = (r === "up" || x === "up") && w === 0, F = (r === "down" || x === "down") && w === A - 1;
			if (P || F) {
				if ((t.startSlur || A === 1) && (t.pitches[w].highestVert = t.pitches[A - 1].verticalPos, T(t) < 1 && (r === "up" || x === "up") && (t.pitches[w].highestVert += 6)), t.startSlur) for (t.pitches[w].startSlur || (t.pitches[w].startSlur = []), _ = 0; _ < t.startSlur.length; _++) L(t.pitches[w].startSlur, t.startSlur[_]);
				if (t.endSlur) for (t.pitches[w].highestVert = t.pitches[A - 1].verticalPos, T(t) < 1 && (r === "up" || x === "up") && (t.pitches[w].highestVert += 6), t.pitches[w].endSlur || (t.pitches[w].endSlur = []), _ = 0; _ < t.endSlur.length; _++) L(t.pitches[w].endSlur, t.endSlur[_]);
			}
			var I = !s && o <= -1, R = c(e, M, t.pitches[w], {
				dir: x,
				extrax: -m,
				flag: j,
				dot: n,
				dotshiftx: u,
				scale: this.voiceScale,
				accidentalSlot: y,
				shouldExtendStem: !r,
				printAccidentals: !l.isPercussion
			});
			b = Math.max(f.getSymbolWidth(M), b), e.extraw -= R.extraLeft, d = R.notehead, d && (this.addSlursAndTies(e, t.pitches[w], d, l, I ? x : null, !1), t.gracenotes && t.gracenotes.length > 0 && --d.bottom, e.addHead(d)), m += R.accidentalshiftx, h = Math.max(h, R.dotshiftx);
		}
		if (I) {
			var z = Math.round(70 * this.voiceScale) / 10, B = x === "down" ? t.minpitch - z : t.minpitch + 1 / 3;
			B > 6 && !r && (B = 6);
			var V = x === "down" ? t.maxpitch - 1 / 3 : t.maxpitch + z;
			V < 6 && !r && (V = 6);
			var H = x === "down" || e.heads.length === 0 ? 0 : e.heads[0].w, U = x === "down" ? 1 : -1;
			d && d.c === "noteheads.slash.quarter" && (x === "down" ? --V : B += 1), d && d.c === "noteheads.triangle.quarter" && (x === "down" ? V -= .7 : B -= 1.2), e.addRight(new p(null, H, 0, B, {
				type: "stem",
				pitch2: V,
				linewidth: U,
				bottom: B - 1
			})), g = Math.min(B, V);
		}
		return {
			noteHead: d,
			roomTaken: m,
			roomTakenRight: h,
			min: g,
			additionalLedgers: v,
			dir: x,
			symbolWidth: b
		};
	}, k.prototype.addLyric = function(e, t) {
		var n = "";
		t.lyric.forEach(function(e) {
			var t = e.divider === " " ? "" : e.divider;
			n += e.syllable + t + "\n";
		});
		var r = this.getTextSize.calc(n, "vocalfont", "lyric"), i = t.positioning ? t.positioning.vocalPosition : "below";
		e.addCentered(new p(n, 0, r.width, void 0, {
			type: "lyric",
			position: i,
			height: r.height / m.STEP,
			dim: this.getTextSize.attr("vocalfont", "lyric")
		}));
	}, k.prototype.createNote = function(e, t, r, i) {
		var a = null, o = 0, s = 0, c = 0, l = [], u, d = T(e), f = !1;
		d === 0 && (f = !0, d = .25, t = !0);
		for (var m = Math.floor(Math.log(d) / Math.log(2)), h = 0, g = 2 ** m, _ = g / 2; g < d; h++, g += _, _ /= 2);
		e.startTriplet && (this.tripletmultiplier = e.tripletMultiplier);
		var v = d * this.tripletmultiplier;
		e.rest && e.rest.type === "multimeasure" && (v = 1), e.rest && e.rest.type === "invisible-multimeasure" && (v = this.measureLength * e.rest.text);
		var b = e.rest ? "rest" : "note", x = new n(e, v, 1, b, this.tuneNumber, { durationClassOveride: e.duration * this.tripletmultiplier });
		if (E && x.setHint(), e.rest) {
			this.measureLength === d && e.rest.type !== "invisible" && e.rest.type !== "spacer" && e.rest.type.indexOf("multimeasure") < 0 && (e.rest.type = "whole");
			var C = I(x, e, d, h, i.voicetotal > 1, this.stemdir, r, m, this.voiceScale);
			a = C.noteHead, o = C.roomTaken, s = C.roomTakenRight;
		} else {
			var w = this.addNoteToAbcElement(x, e, h, this.stemdir, this.style, f, m, t, i);
			w.min !== void 0 && (this.minY = Math.min(w.min, this.minY)), a = w.noteHead, o = w.roomTaken, s = w.roomTakenRight, l = w.additionalLedgers, u = w.dir, c = w.symbolWidth;
		}
		if (e.lyric !== void 0 && this.addLyric(x, e), e.gracenotes !== void 0 && (o += this.addGraceNotes(e, i, x, a, this.stemHeight * this.voiceScale, this.isBagpipes, o)), e.decoration) {
			var D = t && u !== "up" ? Math.min(-3, x.bottom - 6) : x.bottom;
			this.decoration.createDecoration(i, e.decoration, x.top, a ? a.w : 0, x, o, u, D, e.positioning, this.hasVocals, this.accentAbove);
		}
		if (e.barNumber && x.addFixed(new p(e.barNumber, -10, 0, 0, { type: "barNumber" })), F(x, e.minpitch, e.maxpitch, e.rest, c, l, u, -2, 1), e.chord !== void 0) {
			var O = S(this.getTextSize, x, e, o, s, c, this.jazzchords, this.germanAlphabet);
			o = O.roomTaken, s = O.roomTakenRight;
		}
		return e.startTriplet && (this.triplet = new y(e.startTriplet, a, { flatBeams: this.flatBeams })), e.endTriplet && this.triplet && this.triplet.setCloseAnchor(a), this.triplet && !e.startTriplet && !e.endTriplet && !(e.rest && e.rest.type === "spacer") && this.triplet.middleNote(a), x;
	}, k.prototype.addSlursAndTies = function(e, t, n, r, i, a) {
		if (t.endTie && this.ties.length > 0) {
			for (var o = !1, s = 0; s < this.ties.length; s++) if (this.ties[s].anchor1 && this.ties[s].anchor1.pitch === n.pitch) {
				this.ties[s].setEndAnchor(n), r.setRange(this.ties[s]), this.ties.splice(s, 1), o = !0;
				break;
			}
			o || (this.ties[0].setEndAnchor(n), r.setRange(this.ties[0]), this.ties.splice(0, 1));
		}
		var c = r.voicetotal < 2 ? -1 : r.voicenumber;
		if (t.startTie) {
			var l = new v({
				anchor1: n,
				force: this.stemdir === "down" || this.stemdir === "up",
				stemDir: this.stemdir,
				isGrace: a,
				voiceNumber: c,
				style: t.startTie.style
			});
			E && l.setHint(), this.ties[this.ties.length] = l, r.addOther(l), e.startTie = !0;
		}
		var u, d;
		if (t.endSlur) for (var f = 0; f < t.endSlur.length; f++) d = t.endSlur[f], this.slurs[d] ? (u = this.slurs[d], u.setEndAnchor(n), r.setRange(u), delete this.slurs[d]) : (u = new v({
			anchor2: n,
			stemDir: this.stemdir,
			voiceNumber: c
		}), E && u.setHint(), r.addOther(u)), this.startlimitelem && u.setStartX(this.startlimitelem);
		else if (!a) for (var p in this.slurs) this.slurs.hasOwnProperty(p) && this.slurs[p].addInternalNote(n);
		if (t.startSlur) for (f = 0; f < t.startSlur.length; f++) d = t.startSlur[f].label, u = new v({
			anchor1: n,
			stemDir: this.stemdir,
			voiceNumber: c,
			style: t.startSlur[f].style
		}), E && u.setHint(), this.slurs[d] = u, r.addOther(u);
	}, k.prototype.addMeasureNumber = function(e, t) {
		var n = this.getTextSize.calc(e, "measurefont", "bar-number"), r = 0;
		t.isClef && (r += n.width / 2);
		var i = n.width > 10 && t.abcelem.type === "treble" ? 13.5 : 11;
		t.addFixed(new p(e, r, n.width, i + n.height / m.STEP, {
			type: "barNumber",
			dim: this.getTextSize.attr("measurefont", "bar-number")
		}));
	}, k.prototype.createBarLine = function(e, t, r) {
		var i = new n(t, 0, 10, "bar", this.tuneNumber), a = null, o = 0;
		t.barNumber && this.addMeasureNumber(t.barNumber, i);
		var s = t.type === "bar_right_repeat" || t.type === "bar_dbl_repeat", c = t.type !== "bar_left_repeat" && t.type !== "bar_thick_thin" && t.type !== "bar_invisible", l = t.type === "bar_right_repeat" || t.type === "bar_dbl_repeat" || t.type === "bar_left_repeat" || t.type === "bar_thin_thick" || t.type === "bar_thick_thin", u = t.type === "bar_left_repeat" || t.type === "bar_thick_thin" || t.type === "bar_thin_thin" || t.type === "bar_dbl_repeat", f = t.type === "bar_left_repeat" || t.type === "bar_dbl_repeat";
		if (s || f) {
			for (var m in this.slurs) this.slurs.hasOwnProperty(m) && this.slurs[m].setEndX(i);
			this.startlimitelem = i;
		}
		if (s && (i.addRight(new p("dots.dot", o, 1, 7)), i.addRight(new p("dots.dot", o, 1, 5)), o += 6), c && (a = new p(null, o, 1, 2, {
			type: "bar",
			pitch2: 10,
			linewidth: .6
		}), i.addRight(a)), t.type === "bar_invisible" && (a = new p(null, o, 1, 2, {
			type: "none",
			pitch2: 10,
			linewidth: .6
		}), i.addRight(a)), t.decoration && this.decoration.createDecoration(e, t.decoration, 12, l ? 3 : 1, i, 0, "down", 2, t.positioning, this.hasVocals, this.accentAbove), l && (o += 4, a = new p(null, o, 4, 2, {
			type: "bar",
			pitch2: 10,
			linewidth: 4
		}), i.addRight(a), o += 5), this.partstartelem && t.endEnding && (this.partstartelem.anchor2 = a, this.partstartelem = null), u && (o += 3, a = new p(null, o, 1, 2, {
			type: "bar",
			pitch2: 10,
			linewidth: .6
		}), i.addRight(a)), f && (o += 3, i.addRight(new p("dots.dot", o, 1, 7)), i.addRight(new p("dots.dot", o, 1, 5))), t.startEnding && r && e.voicenumber === 0) {
			var h = this.getTextSize.calc(t.startEnding, "repeatfont", "").width;
			i.minspacing += h + 10, this.partstartelem = new d(t.startEnding, a, null), e.addOther(this.partstartelem);
		}
		return i.extraw -= 5, t.chord !== void 0 && S(this.getTextSize, i, t, 0, 0, 0, !1, this.germanAlphabet), i;
	}, t.exports = k;
})), require_svg = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = "http://www.w3.org/2000/svg";
	function r(e) {
		this.svg = s(), this.currentGroup = [], e.appendChild(this.svg);
	}
	r.prototype.clear = function() {
		if (this.svg) {
			var e = this.svg.parentNode;
			this.svg = s(), this.currentGroup = [], e && (e.innerHTML = "", e.appendChild(this.svg));
		}
	}, r.prototype.setTitle = function(e) {
		var t = document.createElement("title"), n = document.createTextNode(e);
		t.appendChild(n), this.svg.insertBefore(t, this.svg.firstChild);
	}, r.prototype.setResponsiveWidth = function(e, t) {
		if (this.svg.setAttribute("viewBox", "0 0 " + e + " " + t), this.svg.setAttribute("preserveAspectRatio", "xMinYMin meet"), this.svg.removeAttribute("height"), this.svg.removeAttribute("width"), this.svg.style.display = "inline-block", this.svg.style.position = "absolute", this.svg.style.top = "0", this.svg.style.left = "0", this.svg.parentNode) {
			var n = this.svg.parentNode.getAttribute("class");
			n ? n.indexOf("abcjs-container") < 0 && this.svg.parentNode.setAttribute("class", n + " abcjs-container") : this.svg.parentNode.setAttribute("class", "abcjs-container"), this.svg.parentNode.style.display = "inline-block", this.svg.parentNode.style.position = "relative", this.svg.parentNode.style.width = "100%";
			var r = t / e * 100;
			this.svg.parentNode.style["padding-bottom"] = r + "%", this.svg.parentNode.style["vertical-align"] = "middle", this.svg.parentNode.style.overflow = "hidden";
		}
	}, r.prototype.setSize = function(e, t) {
		this.svg.setAttribute("width", e), this.svg.setAttribute("height", t);
	}, r.prototype.setAttribute = function(e, t) {
		this.svg.setAttribute(e, t);
	}, r.prototype.setScale = function(e) {
		e === 1 ? (this.svg.style.transform = "", this.svg.style["-ms-transform"] = "", this.svg.style["-webkit-transform"] = "") : (this.svg.style.transform = "scale(" + e + "," + e + ")", this.svg.style["-ms-transform"] = "scale(" + e + "," + e + ")", this.svg.style["-webkit-transform"] = "scale(" + e + "," + e + ")", this.svg.style["transform-origin"] = "0 0", this.svg.style["-ms-transform-origin-x"] = "0", this.svg.style["-ms-transform-origin-y"] = "0", this.svg.style["-webkit-transform-origin-x"] = "0", this.svg.style["-webkit-transform-origin-y"] = "0");
	}, r.prototype.insertStyles = function(e) {
		var t = document.createElementNS(n, "style");
		t.textContent = e, this.svg.insertBefore(t, this.svg.firstChild);
	}, r.prototype.setParentStyles = function(e) {
		for (var t in e) e.hasOwnProperty(t) && this.svg.parentNode && (this.svg.parentNode.style[t] = e[t]);
		this.dummySvg &&= (document.querySelector("body").removeChild(this.dummySvg), null);
	};
	function i(e, t, n) {
		var r = n - e;
		return "M " + e + " " + t + " l " + r + " 0 l 0 1  l " + -r + " 0  z ";
	}
	function a(e, t, n) {
		var r = n - t;
		return "M " + e + " " + t + " l 0 " + r + " l 1 0  l 0 " + -r + "  z ";
	}
	r.prototype.rect = function(e) {
		var t = [], n = e.x, r = e.y, o = e.x + e.width, s = e.y + e.height;
		return t.push(i(n, r, o)), t.push(i(n, s, o)), t.push(a(o, r, s)), t.push(a(n, s, r)), this.path({
			path: t.join(" "),
			stroke: "none",
			"data-name": e["data-name"]
		});
	}, r.prototype.dottedLine = function(e) {
		var t = document.createElementNS(n, "line");
		t.setAttribute("x1", e.x1), t.setAttribute("x2", e.x2), t.setAttribute("y1", e.y1), t.setAttribute("y2", e.y2), t.setAttribute("stroke", e.stroke), t.setAttribute("stroke-dasharray", "5,5"), this.svg.insertBefore(t, this.svg.firstChild);
	}, r.prototype.rectBeneath = function(e) {
		var t = document.createElementNS(n, "rect");
		t.setAttribute("x", e.x), t.setAttribute("width", e.width), t.setAttribute("y", e.y), t.setAttribute("height", e.height), e.stroke && t.setAttribute("stroke", e.stroke), e["stroke-opacity"] && t.setAttribute("stroke-opacity", e["stroke-opacity"]), e.fill && t.setAttribute("fill", e.fill), e["fill-opacity"] && t.setAttribute("fill-opacity", e["fill-opacity"]), this.svg.insertBefore(t, this.svg.firstChild);
	}, r.prototype.text = function(e, t, r) {
		var i = document.createElementNS(n, "text");
		for (var a in i.setAttribute("stroke", "none"), t) t.hasOwnProperty(a) && i.setAttribute(a, t[a]);
		for (var o = t["data-name"] == "free-text", s = ("" + e).split("\n"), c = 0; c < s.length; c++) if (!(o && s[c] == "")) {
			var l = document.createElementNS(n, "tspan");
			if (l.setAttribute("x", t.x ? t.x : 0), c !== 0 && l.setAttribute("dy", "1.2em"), s[c].indexOf("") !== -1) {
				var u = s[c].split("");
				if (l.textContent = u[0], u[1]) {
					var d = document.createElementNS(n, "tspan");
					d.setAttribute("dy", "-0.3em"), d.setAttribute("style", "font-size:0.7em"), d.textContent = u[1], l.appendChild(d);
				}
				if (u[2]) {
					var f = u[1] ? "0.4em" : "0.1em", p = document.createElementNS(n, "tspan");
					p.setAttribute("dy", f), p.setAttribute("style", "font-size:0.7em"), p.textContent = u[2], l.appendChild(p);
				}
			} else o && s[c].trim() == "" ? l.innerHTML = "&nbsp;" : l.textContent = s[c];
			i.appendChild(l);
		}
		return r ? r.appendChild(i) : this.append(i), i;
	}, r.prototype.richTextLine = function(e, t, r, i, a, o) {
		var s = document.createElementNS(n, "text");
		s.setAttribute("stroke", "none"), s.setAttribute("class", i), s.setAttribute("x", t), s.setAttribute("y", r), s.setAttribute("text-anchor", a), s.setAttribute("dominant-baseline", "middle");
		for (var c = 0; c < e.length; c++) {
			for (var l = e[c], u = document.createElementNS(n, "tspan"), d = Object.keys(l.attrs), f = 0; f < d.length; f++) {
				var p = l.attrs[d[f]];
				p !== "" && u.setAttribute(d[f], p);
			}
			u.textContent = l.content, s.appendChild(u);
		}
		return o ? o.appendChild(s) : this.append(s), s;
	}, r.prototype.guessWidth = function(e, t) {
		var n = this.createDummySvg(), r = this.text(e, t, n), i;
		try {
			i = r.getBBox(), i = isNaN(i.height) || !i.height ? {
				width: t["font-size"] / 2,
				height: t["font-size"] + 2
			} : {
				width: i.width,
				height: i.height
			};
		} catch {
			i = {
				width: t["font-size"] / 2,
				height: t["font-size"] + 2
			};
		}
		return n.removeChild(r), i;
	}, r.prototype.createDummySvg = function() {
		return this.dummySvg || (this.dummySvg = s(), this.dummySvg.setAttribute("style", [
			"display: block !important;",
			"height: 1px;",
			"width: 1px;",
			"position: absolute;"
		].join("")), document.querySelector("body").appendChild(this.dummySvg)), this.dummySvg;
	};
	var o = {};
	r.prototype.getTextSize = function(e, t, n) {
		if (typeof e == "number" && (e = "" + e), !e || e.match(/^\s+$/)) return {
			width: 0,
			height: 0
		};
		var r;
		if (e.length < 20 && (r = e + JSON.stringify(t), o[r])) return o[r];
		var i = !n;
		n ||= this.text(e, t);
		var a;
		try {
			a = n.getBBox(), a = isNaN(a.height) || !a.height ? this.guessWidth(e, t) : {
				width: a.width,
				height: a.height
			};
		} catch {
			a = this.guessWidth(e, t);
		}
		return i && (this.currentGroup.length > 0 ? this.currentGroup[0].removeChild(n) : this.svg.removeChild(n)), r && (o[r] = a), a;
	}, r.prototype.openGroup = function(e) {
		e ||= {};
		var t = document.createElementNS(n, "g");
		return e.klass && t.setAttribute("class", e.klass), e.fill && t.setAttribute("fill", e.fill), e.stroke && t.setAttribute("stroke", e.stroke), e["data-name"] && t.setAttribute("data-name", e["data-name"]), e.prepend ? this.prepend(t) : this.append(t), this.currentGroup.unshift(t), t;
	}, r.prototype.closeGroup = function() {
		var e = this.currentGroup.shift();
		return e && e.children.length === 0 ? (e.parentElement.removeChild(e), null) : e;
	}, r.prototype.path = function(e) {
		var t = document.createElementNS(n, "path");
		for (var r in e) e.hasOwnProperty(r) && (r === "path" ? t.setAttributeNS(null, "d", e.path) : r === "klass" ? t.setAttributeNS(null, "class", e[r]) : e[r] !== void 0 && t.setAttributeNS(null, r, e[r]));
		return this.append(t), t;
	}, r.prototype.pathToBack = function(e) {
		var t = document.createElementNS(n, "path");
		for (var r in e) e.hasOwnProperty(r) && (r === "path" ? t.setAttributeNS(null, "d", e.path) : r === "klass" ? t.setAttributeNS(null, "class", e[r]) : t.setAttributeNS(null, r, e[r]));
		return this.prepend(t), t;
	}, r.prototype.lineToBack = function(e) {
		for (var t = document.createElementNS(n, "line"), r = Object.keys(e), i = 0; i < r.length; i++) t.setAttribute(r[i], e[r[i]]);
		return this.prepend(t), t;
	}, r.prototype.append = function(e) {
		this.currentGroup.length > 0 ? this.currentGroup[0].appendChild(e) : this.svg.appendChild(e);
	}, r.prototype.prepend = function(e) {
		this.currentGroup.length > 0 ? this.currentGroup[0].appendChild(e) : this.svg.insertBefore(e, this.svg.firstChild);
	}, r.prototype.setAttributeOnElement = function(e, t) {
		for (var n in t) t.hasOwnProperty(n) && e.setAttributeNS(null, n, t[n]);
	}, r.prototype.moveElementToChild = function(e, t) {
		e.appendChild(t);
	};
	function s() {
		var e = document.createElementNS(n, "svg");
		return e.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), e.setAttribute("role", "img"), e.setAttribute("fill", "currentColor"), e.setAttribute("stroke", "currentColor"), e;
	}
	t.exports = r;
})), require_renderer = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_spacing(), r = require_svg(), i = function(e) {
		this.paper = new r(e), this.controller = null, this.space = 3 * n.SPACE, this.padding = {}, this.reset(), this.firefox112 = navigator.userAgent.indexOf("Firefox/112.0") >= 0;
	};
	i.prototype.reset = function() {
		this.paper.clear(), this.y = 0, this.abctune = null, this.path = null, this.isPrint = !1, this.lineThickness = 0, this.initVerticalSpace();
	}, i.prototype.newTune = function(e) {
		this.abctune = e, this.setVerticalSpace(e.formatting), this.isPrint = e.media === "print", this.setPadding(e);
	}, i.prototype.setLineThickness = function(e) {
		this.lineThickness = e;
	}, i.prototype.setPaddingOverride = function(e) {
		this.paddingOverride = {
			top: e.paddingtop,
			bottom: e.paddingbottom,
			right: e.paddingright,
			left: e.paddingleft
		};
	}, i.prototype.setPadding = function(e) {
		function t(t, n, r, i, a) {
			e.formatting[r] === void 0 ? t.paddingOverride[n] === void 0 ? t.isPrint ? t.padding[n] = i : t.padding[n] = a : t.padding[n] = t.paddingOverride[n] : t.padding[n] = e.formatting[r];
		}
		t(this, "top", "topmargin", 38, 15), t(this, "bottom", "botmargin", 38, 15), t(this, "left", "leftmargin", 68, 15), t(this, "right", "rightmargin", 68, 15);
	}, i.prototype.adjustNonScaledItems = function(e) {
		this.padding.top /= e, this.padding.bottom /= e, this.padding.left /= e, this.padding.right /= e, this.abctune.formatting.headerfont.size /= e, this.abctune.formatting.footerfont.size /= e;
	}, i.prototype.initVerticalSpace = function() {
		this.spacing = {
			composer: 7.56,
			graceBefore: 8.67,
			graceInside: 10.67,
			graceAfter: 16,
			info: 0,
			lineSkipFactor: 1.1,
			music: 7.56,
			paragraphSkipFactor: .4,
			parts: 11.33,
			slurHeight: 1,
			staffSeparation: 61.33,
			staffTopMargin: 0,
			stemHeight: 36.67,
			subtitle: 3.78,
			systemStaffSeparation: 48,
			text: 18.9,
			title: 7.56,
			top: 30.24,
			vocal: 0,
			words: 0
		};
	}, i.prototype.setVerticalSpace = function(e) {
		e.staffsep !== void 0 && (this.spacing.staffSeparation = e.staffsep * 4 / 3), e.composerspace !== void 0 && (this.spacing.composer = e.composerspace * 4 / 3), e.partsspace !== void 0 && (this.spacing.parts = e.partsspace * 4 / 3), e.textspace !== void 0 && (this.spacing.text = e.textspace * 4 / 3), e.musicspace !== void 0 && (this.spacing.music = e.musicspace * 4 / 3), e.titlespace !== void 0 && (this.spacing.title = e.titlespace * 4 / 3), e.sysstaffsep !== void 0 && (this.spacing.systemStaffSeparation = e.sysstaffsep * 4 / 3), e.stafftopmargin !== void 0 && (this.spacing.staffTopMargin = e.stafftopmargin * 4 / 3), e.subtitlespace !== void 0 && (this.spacing.subtitle = e.subtitlespace * 4 / 3), e.topspace !== void 0 && (this.spacing.top = e.topspace * 4 / 3), e.vocalspace !== void 0 && (this.spacing.vocal = e.vocalspace * 4 / 3), e.wordsspace !== void 0 && (this.spacing.words = e.wordsspace * 4 / 3);
	}, i.prototype.calcY = function(e) {
		return this.y - e * n.STEP;
	}, i.prototype.moveY = function(e, t) {
		t === void 0 && (t = 1), this.y += e * t;
	}, i.prototype.absolutemoveY = function(e) {
		this.y = e;
	}, t.exports = i;
})), require_free_text = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n, r, i, a) {
		var o = e.text;
		this.rows = [];
		var s;
		t && this.rows.push({ move: t });
		var c = n.calc("textfont", "defined-text");
		if (o === "") this.rows.push({ move: c.attr["font-size"] * 2 });
		else if (typeof o == "string") {
			this.rows.push({ move: c.attr["font-size"] / 2 }), this.rows.push({
				left: r,
				text: o,
				font: "textfont",
				klass: "defined-text",
				anchor: "start",
				startChar: e.startChar,
				endChar: e.endChar,
				absElemType: "freeText",
				name: "free-text"
			});
			function t(e) {
				return e.replace(/^[ \t]*\n/gm, "X\n");
			}
			var l = t(o);
			s = a.calc(l, "textfont", "defined-text"), this.rows.push({ move: s.height });
		} else if (o) {
			for (var u = 0, d = r, f = "textfont", p = 0; p < o.length; p++) f = o[p].font ? o[p].font : "textfont", this.rows.push({
				left: d,
				text: o[p].text,
				font: f,
				klass: "defined-text",
				anchor: "start",
				startChar: e.startChar,
				endChar: e.endChar,
				absElemType: "freeText",
				name: "free-text"
			}), s = a.calc(o[p].text, n.calc(f, "defined-text").font, "defined-text"), d += s.width + s.height / 2, u = Math.max(u, s.height);
			this.rows.push({ move: u });
		} else if (e.length === 1) {
			var m = i / 2;
			this.rows.push({
				left: m,
				text: e[0].text,
				font: "textfont",
				klass: "defined-text",
				anchor: "middle",
				startChar: e.startChar,
				endChar: e.endChar,
				absElemType: "freeText",
				name: "free-text"
			}), s = a.calc(e[0].text, "textfont", "defined-text"), this.rows.push({ move: s.height });
		}
	}
	t.exports = n;
})), require_separator$1 = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n) {
		this.rows = [], e && this.rows.push({ move: e }), this.rows.push({
			separator: t,
			absElemType: "separator"
		}), n && this.rows.push({ move: n });
	}
	t.exports = n;
})), require_subtitle = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n, r, i, a) {
		this.rows = [], e && this.rows.push({ move: e });
		var o = t.titleleft ? "start" : "middle", s = t.titleleft ? i : r;
		this.rows.push({
			left: s,
			text: n.text,
			font: "subtitlefont",
			klass: "text subtitle",
			anchor: o,
			startChar: n.startChar,
			endChar: n.endChar,
			absElemType: "subtitle",
			name: "subtitle"
		});
		var c = a.calc(n.text, "subtitlefont", "text subtitle");
		this.rows.push({ move: c.height });
	}
	t.exports = n;
})), require_add_text_if = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n) {
		if (t.text) {
			t.marginLeft ||= 0, t.klass ||= "", t.anchor ||= "start", t.info ||= {
				startChar: -2,
				endChar: -2
			}, t.marginTop && e.push({ move: t.marginTop });
			var r = {
				left: t.marginLeft,
				text: t.text,
				font: t.font,
				anchor: t.anchor,
				startChar: t.info.startChar,
				endChar: t.info.endChar,
				"dominant-baseline": t["dominant-baseline"]
			};
			t.absElemType && (r.absElemType = t.absElemType), !t.inGroup && t.klass && (r.klass = t.klass), t.name && (r.name = t.name), e.push(r);
			var i = n.calc("A", t.font, t.klass), a = t.text.split("\n").length;
			if (t.text[t.text.length - 1] === "\n" && a--, !t.noMove) {
				var o = i.height * 1.1 * a;
				e.push({ move: Math.round(o) }), t.marginBottom && e.push({ move: t.marginBottom });
			}
		}
	}
	t.exports = n;
})), require_rich_text = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_add_text_if();
	function r(e, t, r, i, a, o, s, c) {
		var l = c.calc("i", r, i);
		if (t === "") e.push({ move: l.height });
		else {
			if (typeof t == "string") {
				n(e, {
					marginLeft: o,
					text: t,
					font: r,
					klass: i,
					marginTop: s.marginTop,
					anchor: s.anchor,
					absElemType: s.absElemType,
					info: s.info,
					name: a
				}, c);
				return;
			}
			s.marginTop && e.push({ move: s.marginTop });
			var u = 0, d = {
				left: o,
				anchor: s.anchor,
				phrases: []
			};
			i && (d.klass = i), e.push(d);
			for (var f = 0; f < t.length; f++) {
				var p = t[f], m = p.font ? p.font : c.attr(r, i).font, h = { content: p.text };
				m && (h.attrs = {
					"font-family": c.getFamily(m.face),
					"font-size": m.size,
					"font-weight": m.weight,
					"font-style": m.style,
					"font-decoration": m.decoration
				}), d.phrases.push(h);
				var g = c.calc(p.text, m, i);
				u = Math.max(u, g.height), p.text[p.text.length - 1] === " " && l.width;
			}
			e.push({ move: u });
		}
	}
	t.exports = r;
})), require_top_text = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_add_text_if(), r = require_rich_text();
	function i(e, t, i, a, o, s, c, l, u, d) {
		if (this.rows = [], e.header && s) {
			var f = d.calc("X", "headerfont", "abcjs-header abcjs-meta-top").height;
			n(this.rows, {
				marginLeft: c,
				text: e.header.left,
				font: "headerfont",
				klass: "header meta-top",
				marginTop: -f,
				info: t.header,
				name: "header"
			}, d), n(this.rows, {
				marginLeft: c + o / 2,
				text: e.header.center,
				font: "headerfont",
				klass: "header meta-top",
				marginTop: -f,
				anchor: "middle",
				info: t.header,
				name: "header"
			}, d), n(this.rows, {
				marginLeft: c + o,
				text: e.header.right,
				font: "headerfont",
				klass: "header meta-top",
				marginTop: -f,
				anchor: "end",
				info: t.header,
				name: "header"
			}, d);
		}
		s && this.rows.push({ move: l.top });
		var p = i.titleleft ? "start" : "middle", m = i.titleleft ? c : c + o / 2;
		if (e.title) {
			var h = u ? "abcjs-title" : "";
			r(this.rows, e.title, "titlefont", h, "title", m, {
				marginTop: l.title,
				anchor: p,
				absElemType: "title",
				info: t.title
			}, d);
		}
		if (a.length) for (var g = 0; g < a.length && a[g].subtitle;) {
			var h = u ? "abcjs-text abcjs-subtitle" : "";
			r(this.rows, a[g].subtitle.text, "subtitlefont", h, "subtitle", m, {
				marginTop: l.subtitle,
				anchor: p,
				absElemType: "subtitle",
				info: a[g].subtitle
			}, d), g++;
		}
		if (e.rhythm || e.origin || e.composer) {
			if (this.rows.push({ move: l.composer }), e.rhythm && e.rhythm.length > 0) {
				var _ = !!(e.composer || e.origin), h = u ? "abcjs-rhythm" : "";
				n(this.rows, {
					marginLeft: c,
					text: e.rhythm,
					font: "infofont",
					klass: h,
					absElemType: "rhythm",
					noMove: _,
					info: t.rhythm,
					name: "rhythm"
				}, d);
			}
			e.composer && e.composer, e.origin && e.origin;
			var v = e.composer ? e.composer : "";
			if (e.origin && (typeof v == "string" && typeof e.origin == "string" ? v += " (" + e.origin + ")" : typeof v == "string" && typeof e.origin != "string" ? (v = [{ text: v }], v.push({ text: " (" }), v = v.concat(e.origin), v.push({ text: ")" })) : (v.push({ text: " (" }), v = v.concat(e.origin), v.push({ text: ")" }))), v) {
				var h = u ? "abcjs-composer" : "";
				r(this.rows, v, "composerfont", h, "composer", c + o, {
					anchor: "end",
					absElemType: "composer",
					info: t.composer,
					ingroup: !0
				}, d);
			}
		}
		if (e.author && e.author.length > 0) {
			var h = u ? "abcjs-author" : "";
			r(this.rows, e.author, "composerfont", h, "author", c + o, {
				anchor: "end",
				absElemType: "author",
				info: t.author
			}, d);
		}
		if (e.partOrder && e.partOrder.length > 0) {
			var h = u ? "abcjs-part-order" : "";
			r(this.rows, e.partOrder, "partsfont", h, "part-order", c, {
				absElemType: "partOrder",
				info: t.partOrder,
				anchor: "start"
			}, d);
		}
	}
	t.exports = i;
})), require_bottom_text = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_add_text_if(), r = require_rich_text();
	function i(e, t, n, r, i, a, o) {
		this.rows = [], e.unalignedWords && e.unalignedWords.length > 0 && this.unalignedWords(e.unalignedWords, r, i, a, o), this.extraText(e, r, i, a, o), e.footer && n && this.footer(e.footer, t, r, o);
	}
	i.prototype.unalignedWords = function(e, t, n, r, i) {
		var a = r ? "abcjs-unaligned-words" : "", s = "wordsfont", c = i.calc("i", s, a);
		this.rows.push({ move: n.words }), o(this.rows, "", e, t, s, "unalignedWords", "unalignedWords", a, "unalignedWords", n, r, i), this.rows.push({ move: c.height });
	};
	function a(e, t, n, i, a, o, s) {
		n && (t && (n = typeof n == "string" ? t + n : [{ text: t }].concat(n)), a = o ? "abcjs-extra-text " + a : "", r(e, n, "historyfont", a, "description", i, {
			absElemType: "extraText",
			anchor: "start"
		}, s));
	}
	function o(e, t, i, a, o, s, c, l, u, d, f, p) {
		if (i) {
			l = f ? "abcjs-extra-text " + l : "";
			var m = p.calc("A", o, l);
			if (typeof i == "string") t && (i = t + "\n" + i), n(e, {
				marginLeft: a,
				text: i,
				font: o,
				absElemType: "extraText",
				name: u,
				"dominant-baseline": "middle",
				klass: l
			}, p);
			else {
				e.push({
					startGroup: c,
					klass: l,
					name: u
				}), e.push({ move: d.info }), t && (n(e, {
					marginLeft: a,
					text: t,
					font: o,
					absElemType: "extraText",
					name: u,
					"dominant-baseline": "middle"
				}, p), e.push({ move: m.height * 3 / 4 }));
				for (var h = 0; h < i.length; h++) r(e, i[h], o, "", u, a, { anchor: "start" }, p), h < i.length - 1 && typeof i[h] == "string" && typeof i[h + 1] != "string" && e.push({ move: m.height * 3 / 4 });
				e.push({
					endGroup: c,
					absElemType: s,
					startChar: -1,
					endChar: -1,
					name: u
				}), e.push({ move: m.height });
			}
		}
	}
	i.prototype.extraText = function(e, t, n, r, i) {
		a(this.rows, "Book: ", e.book, t, "abcjs-book", r, i), a(this.rows, "Source: ", e.source, t, "abcjs-source", r, i), a(this.rows, "Discography: ", e.discography, t, "abcjs-discography", r, i), o(this.rows, "Notes:", e.notes, t, "historyfont", "extraText", "notes", "abcjs-notes", "description", n, r, i), a(this.rows, "Transcription: ", e.transcription, t, "abcjs-transcription", r, i), o(this.rows, "History:", e.history, t, "historyfont", "extraText", "history", "abcjs-history", "description", n, r, i), a(this.rows, "Copyright: ", e["abc-copyright"], t, "abcjs-copyright", r, i), a(this.rows, "Creator: ", e["abc-creator"], t, "abcjs-creator", r, i), a(this.rows, "Edited By: ", e["abc-edited-by"], t, "abcjs-edited-by", r, i);
	}, i.prototype.footer = function(e, t, r, i) {
		var a = "header meta-bottom", o = "footerfont";
		this.rows.push({
			startGroup: "footer",
			klass: a
		}), n(this.rows, {
			marginLeft: r,
			text: e.left,
			font: o,
			klass: a,
			name: "footer"
		}, i), n(this.rows, {
			marginLeft: r + t / 2,
			text: e.center,
			font: o,
			klass: a,
			anchor: "middle",
			name: "footer"
		}, i), n(this.rows, {
			marginLeft: r + t,
			text: e.right,
			font: o,
			klass: a,
			anchor: "end",
			name: "footer"
		}, i);
	}, t.exports = i;
})), require_create_analysis = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n, r) {
		if (e.indexOf(t) === 0) {
			var i = e.replace(t, ""), a = parseInt(i, 10);
			"" + a === i && (n[r] = a);
		}
	}
	function r(e, t) {
		var r = [];
		if (e.absEl.elemset) {
			for (var i = {}, a = 0; a < e.absEl.elemset.length; a++) {
				var o = e.absEl.elemset[a];
				if (o) for (var s = o.getAttribute("class").split(" "), c = 0; c < s.length; c++) i[s[c]] = !0;
			}
			for (var l = 0; l < Object.keys(i).length; l++) r.push(Object.keys(i)[l]);
		}
		for (var u = {}, d = 0; d < r.length; d++) n(r[d], "abcjs-v", u, "voice"), n(r[d], "abcjs-l", u, "line"), n(r[d], "abcjs-m", u, "measure");
		e.staffPos && (u.staffPos = e.staffPos);
		for (var f = t.target; f && f.dataset && !f.dataset.name && f.tagName.toLowerCase() !== "svg";) f = f.parentNode;
		for (var p = t.target; p && p.dataset && !p.dataset.index && p.tagName.toLowerCase() !== "svg";) p = p.parentNode;
		return p && p.dataset && (u.name = p.dataset.name, u.clickedName = f.dataset.name, u.parentClasses = p.classList), f && f.classList && (u.clickedClasses = f.classList), u.selectableElement = e.svgEl, {
			classes: r,
			analysis: u
		};
	}
	t.exports = r;
})), require_selection = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_spacing(), r = require_create_analysis();
	function i(e, t) {
		if (e.rangeHighlight = S, e.dragging) for (var n = 0; n < e.selectables.length; n++) {
			var r = e.selectables[n];
			r.svgEl.getAttribute("selectable") === "true" && (r.svgEl.setAttribute("tabindex", 0), r.svgEl.setAttribute("data-index", n), r.svgEl.addEventListener("keydown", s.bind(e)), r.svgEl.addEventListener("keyup", c.bind(e)), r.svgEl.addEventListener("focus", o.bind(e)));
		}
		for (var i = 0; i < t.length; i++) t[i].addEventListener("touchstart", h.bind(e), { passive: !0 }), t[i].addEventListener("touchmove", g.bind(e), { passive: !0 }), t[i].addEventListener("touchend", v.bind(e), { passive: !0 }), t[i].addEventListener("mousedown", h.bind(e)), t[i].addEventListener("mousemove", g.bind(e)), t[i].addEventListener("mouseup", v.bind(e));
	}
	function a(e) {
		var t = 1, n = 1, r = e.target.closest("svg"), i = 0;
		r && r.viewBox && r.viewBox.baseVal && (r.viewBox.baseVal.width !== 0 && (t = r.viewBox.baseVal.width / r.clientWidth), r.viewBox.baseVal.height !== 0 && (n = r.viewBox.baseVal.height / r.clientHeight), i = r.viewBox.baseVal.y);
		var a = e.target && e.target.tagName === "svg", o, s;
		return a ? (o = e.offsetX, s = e.offsetY) : (o = e.layerX, s = e.layerY), o *= t, s *= n, [o, s + i];
	}
	function o(e) {
		this.dragMechanism === "keyboard" && this.dragYStep !== 0 && this.dragTarget && b.bind(this)(this.dragTarget, this.dragYStep, this.selectables.length, this.dragIndex, e), this.dragYStep = 0;
	}
	function s(e) {
		switch (e.keyCode) {
			case 38:
			case 40: e.preventDefault();
		}
	}
	function c(e) {
		var t = !1, r = e.target.dataset.index;
		switch (e.keyCode) {
			case 13:
			case 32:
				t = !0, this.dragTarget = this.selectables[r], this.dragIndex = r, this.dragMechanism = "keyboard", v.bind(this)(e);
				break;
			case 38:
				t = !0, this.dragTarget = this.selectables[r], this.dragIndex = r, this.dragTarget && this.dragTarget.isDraggable && (this.dragging && this.dragTarget.isDraggable && this.dragTarget.absEl.highlight(void 0, this.dragColor), this.dragYStep--, this.dragTarget.svgEl.setAttribute("transform", "translate(0," + this.dragYStep * n.STEP + ")"));
				break;
			case 40:
				t = !0, this.dragTarget = this.selectables[r], this.dragIndex = r, this.dragMechanism = "keyboard", this.dragTarget && this.dragTarget.isDraggable && (this.dragging && this.dragTarget.isDraggable && this.dragTarget.absEl.highlight(void 0, this.dragColor), this.dragYStep++, this.dragTarget.svgEl.setAttribute("transform", "translate(0," + this.dragYStep * n.STEP + ")"));
				break;
			case 9:
				this.dragYStep !== 0 && v.bind(this)(e);
				break;
			default: break;
		}
		t && e.preventDefault();
	}
	function l(e, t) {
		if (!t) return -1;
		var n = t.dataset;
		if (!n) return -1;
		for (var r = n.index, i = 0; i < e.length; i++) {
			var a = e[i].svgEl.dataset;
			if (a && r === a.index) return i;
		}
		return -1;
	}
	function u(e, t, n) {
		for (var r = 9999999, i = -1, a = 0; a < e.selectables.length && r > 0; a++) {
			var o = e.selectables[a];
			if (e.getDim(o), o.dim.left < t && o.dim.right > t && o.dim.top < n && o.dim.bottom > n) i = a, r = 0;
			else if (o.dim.top < n && o.dim.bottom > n) {
				var s = Math.min(Math.abs(o.dim.left - t), Math.abs(o.dim.right - t));
				s < r && (r = s, i = a);
			} else if (o.dim.left < t && o.dim.right > t) {
				var c = Math.min(Math.abs(o.dim.top - n), Math.abs(o.dim.bottom - n));
				c < r && (r = c, i = a);
			} else {
				var l = Math.abs(t - o.dim.left) > Math.abs(t - o.dim.right) ? Math.abs(t - o.dim.right) : Math.abs(t - o.dim.left), u = Math.abs(n - o.dim.top) > Math.abs(n - o.dim.bottom) ? Math.abs(n - o.dim.bottom) : Math.abs(n - o.dim.top), d = Math.sqrt(l * l + u * u);
				d < r && (r = d, i = a);
			}
		}
		return i >= 0 && r <= 12 ? i : -1;
	}
	function d(e, t, n) {
		return e.x <= t.offsetX && e.x + e.width >= t.offsetX && e.y <= t.offsetY && e.y + e.height >= t.offsetY || Math.abs(t.layerY / n - t.offsetY) < 3 ? [t.offsetX, t.offsetY] : [t.layerX, t.layerY];
	}
	function f(e) {
		if (!e) return null;
		if (e.tagName === "svg") return e;
		if (!e.getAttribute) return null;
		for (var t = e.getAttribute("selectable"); !t;) e.parentElement ? (e = e.parentElement, t = e.tagName === "svg" ? !0 : e.getAttribute("selectable")) : t = !0;
		return e;
	}
	function p(e, t) {
		var n, r, i, o = l(e.selectables, f(t.target));
		return o >= 0 ? (i = d(e.selectables[o].svgEl.getBBox(), t, e.scale), n = i[0], r = i[1]) : (i = a(t), n = i[0], r = i[1], o = u(e, n, r)), {
			x: n,
			y: r,
			clickedOn: o
		};
	}
	function m(e) {
		if (!(!e || !e.target || !e.touches || e.touches.length < 1)) {
			var t = e.target.getBoundingClientRect(), n = e.touches[0].pageX - t.left, r = e.touches[0].pageY - t.top;
			e.touches[0].offsetX = n, e.touches[0].offsetY = r, e.touches[0].layerX = e.touches[0].pageX, e.touches[0].layerY = e.touches[0].pageY;
		}
	}
	function h(e) {
		var t = e;
		e.type === "touchstart" && (m(e), e.touches.length > 0 && (t = e.touches[0]));
		var n = p(this, t);
		n.clickedOn >= 0 && (e.type === "touchstart" || e.button === 0) && this.selectables[n.clickedOn] && (this.dragTarget = this.selectables[n.clickedOn], this.dragIndex = n.clickedOn, this.dragMechanism = "mouse", this.dragMouseStart = {
			x: n.x,
			y: n.y
		}, this.dragging && this.dragTarget.isDraggable && (T(this.renderer.paper, "abcjs-dragging-in-progress"), this.dragTarget.absEl.highlight(void 0, this.dragColor)));
	}
	function g(e) {
		var t = e;
		if (e.type === "touchmove" && (m(e), e.touches.length > 0 && (t = e.touches[0])), this.lastTouchMove = e, !(!this.dragTarget || !this.dragging || !this.dragTarget.isDraggable || this.dragMechanism !== "mouse" || !this.dragMouseStart)) {
			var r = p(this, t), i = Math.round((r.y - this.dragMouseStart.y) / n.STEP);
			i !== this.dragYStep && (this.dragYStep = i, this.dragTarget.svgEl.setAttribute("transform", "translate(0," + i * n.STEP + ")"));
		}
	}
	function v(e) {
		var t = e;
		e.type === "touchend" && this.lastTouchMove && (m(this.lastTouchMove), this.lastTouchMove && this.lastTouchMove.touches && this.lastTouchMove.touches.length > 0 && (t = this.lastTouchMove.touches[0])), this.dragTarget && (x.bind(this)(), this.dragTarget.absEl && this.dragTarget.absEl.highlight && (this.selected = [this.dragTarget.absEl], this.dragTarget.absEl.highlight(void 0, this.selectionColor)), b.bind(this)(this.dragTarget, this.dragYStep, this.selectables.length, this.dragIndex, t), this.dragTarget.svgEl && this.dragTarget.svgEl.focus && (this.dragTarget.svgEl.focus(), this.dragTarget = null, this.dragIndex = -1), E(this.renderer.svg, "abcjs-dragging-in-progress"));
	}
	function y(e) {
		e >= 0 && e < this.selectables.length && (this.dragTarget = this.selectables[e], this.dragIndex = e, this.dragMechanism = "keyboard", v.bind(this)({ target: this.dragTarget.svgEl }));
	}
	function b(e, t, n, i, a) {
		for (var o = r(e, a), s = o.classes, c = o.analysis, l = 0; l < this.listeners.length; l++) this.listeners[l](e.absEl.abcelem, e.absEl.tuneNumber, s.join(" "), c, {
			step: t,
			max: n,
			index: i,
			setSelection: y.bind(this)
		}, a);
	}
	function x() {
		for (var e = 0; e < this.selected.length; e++) this.selected[e].unhighlight(void 0, this.renderer.foregroundColor);
		this.selected = [];
	}
	function S(e, t) {
		x.bind(this)();
		for (var n = 0; n < this.staffgroups.length; n++) for (var r = this.staffgroups[n].voices, i = 0; i < r.length; i++) for (var a = r[i].children, o = 0; o < a.length; o++) {
			var s = a[o].abcelem.startChar, c = a[o].abcelem.endChar;
			(t > s && e < c || t === e && t === c) && (this.selected[this.selected.length] = a[o], a[o].highlight(void 0, this.selectionColor));
		}
	}
	function C(e) {
		var t = e.getAttribute("class");
		t ||= "";
		for (var n = t.split(" "), r = {}, i = 0; i < n.length; i++) r[n[i]] = !0;
		return r;
	}
	function w(e, t) {
		var n = [];
		for (var r in t) t.hasOwnProperty(r) && n.push(r);
		e.setAttribute("class", n.join(" "));
	}
	function T(e, t) {
		if (e) {
			var n = C(e.svg);
			n[t] = !0, w(e.svg, n);
		}
	}
	function E(e, t) {
		if (e) {
			var n = C(e.svg);
			delete n[t], w(e.svg, n);
		}
	}
	t.exports = i;
})), require_get_bar_y_at = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n, r, i) {
		return t + (r - t) / (n - e) * (i - e);
	}
	t.exports = n;
})), require_beam$1 = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_relative_element(), r = require_spacing(), i = require_get_bar_y_at(), a = function(e) {
		if (!(e.elems.length === 0 || e.allrests)) {
			var t = l(e.stemsUp, e.isgrace), n = e.elems[0], r = e.elems[e.elems.length - 1], i = 0, a = e.stemsUp ? n.abcelem.maxpitch : n.abcelem.minpitch;
			i = s(n, e.stemsUp, a, i), i = s(r, e.stemsUp, a, i), i = Math.max(e.stemHeight, i + 3);
			var o = d(e.average, e.elems.length, i, e.stemsUp, n.abcelem.averagepitch, r.abcelem.averagepitch, e.isflat, e.min, e.max, e.isgrace), c = u(e.stemsUp, n, r);
			e.addBeam({
				startX: c[0],
				endX: c[1],
				startY: o[0],
				endY: o[1],
				dy: t
			});
			for (var m = p(e.elems, e.stemsUp, e.beams[0], e.isgrace, t), h = 0; h < m.length; h++) e.addBeam(m[h]);
			f(e.elems, e.stemsUp, e.beams[0], t, e.mainNote);
		}
	}, o = function(e) {
		return e === void 0 ? 0 : Math.floor(Math.log(e) / Math.log(2));
	};
	function s(e, t, n, r) {
		if (!e.children) return r;
		for (var i = 0; i < e.children.length; i++) {
			var a = e.children[i];
			t && a.top !== void 0 && a.c === "flags.ugrace" ? r = Math.max(r, a.top - n) : !t && a.bottom !== void 0 && a.c === "flags.ugrace" && (r = Math.max(r, n - a.bottom + 7));
		}
		return r;
	}
	function c(e, t, n, r) {
		if (r) return 0;
		var i = e - t, a = n / 2;
		return i > a && (i = a), i < -a && (i = -a), i;
	}
	function l(e, t) {
		var n = e ? r.STEP : -r.STEP;
		return t && (n *= .4), n;
	}
	function u(e, t, n) {
		var r = t.heads[e ? 0 : t.heads.length - 1], i = n.heads[e ? 0 : n.heads.length - 1], a = r.x;
		e && (a += r.w - .6);
		var o = i.x;
		return o += e ? i.w : .6, [a, o];
	}
	function d(e, t, n, r, i, a, o, s, l, u) {
		var d = n - 2, f = n - 2, p = Math.round(r ? Math.max(e + d, l + f) : Math.min(e - d, s - f)), m = c(i, a, t, o), h = p + Math.floor(m / 2), g = p + Math.floor(-m / 2);
		return u || (r && p < 6 || !r && p > 6) && (h = 6, g = 6), [h, g];
	}
	function f(e, t, a, o, s) {
		for (var c = 0; c < e.length; c++) {
			var l = e[c];
			if (!l.abcelem.rest) {
				var u = !l.addExtra, d = u ? s : l, f = l.heads[t ? 0 : l.heads.length - 1], p = 1 / 5, m = f.pitch + (t ? p : -p), h = t ? f.w : 0;
				u || (h += f.dx);
				var g = f.x + h, _ = i(a.startX, a.startY, a.endX, a.endY, g), v = t ? -.6 : .6;
				t || (_ -= o / 2 / r.STEP), u && (h += l.heads[0].dx), f.c === "noteheads.slash.quarter" && (t ? m += 1 : --m);
				var y = new n(null, h, 0, m, {
					type: "stem",
					pitch2: _,
					linewidth: v
				});
				y.setX(d.x), d.addRight(y);
			}
		}
	}
	function p(e, t, n, r, a) {
		for (var s = [], c = [], l = 0; l < e.length; l++) {
			var d = e[l];
			if (!d.abcelem.rest) {
				var f = d.heads[t ? 0 : d.heads.length - 1], p = f.x + (t ? f.w : 0), m = i(n.startX, n.startY, n.endX, n.endY, p), h = t ? -1.5 : 1.5;
				r && (h = h * 2 / 3);
				var g = d.abcelem.duration;
				g === 0 && (g = .25);
				for (var _ = o(g); _ < -3; _++) {
					var v = -4 - _;
					if (c[v] ? c[v].single = !1 : c[v] = {
						x: p + (t ? -.6 : 0),
						y: m + h * (v + 1),
						durlog: _,
						single: !0
					}, l > 0 && d.abcelem.beambr && d.abcelem.beambr <= v + 1) {
						c[v].split || (c[v].split = [c[v].x]);
						var y = u(t, e[l - 1], d);
						c[v].split[c[v].split.length - 1] >= y[0] && (y[0] += d.w), c[v].split.push(y[0]), c[v].split.push(y[1]);
					}
				}
				for (var b = c.length - 1; b >= 0; b--) if (l === e.length - 1 || o(e[l + 1].abcelem.duration) > -b - 4) {
					var x = p, S = m + h * (b + 1);
					c[b].single && (x = l === 0 ? p + 5 : p - 5, S = i(n.startX, n.startY, n.endX, n.endY, x) + h * (b + 1));
					var C = {
						startX: c[b].x,
						endX: x,
						startY: c[b].y,
						endY: S,
						dy: a
					};
					if (c[b].split !== void 0) {
						var w = c[b].split;
						C.endX <= w[w.length - 1] && (w[w.length - 1] -= d.w), w.push(C.endX), C.split = c[b].split;
					}
					s.push(C), c = c.slice(0, b);
				}
			}
		}
		return s;
	}
	t.exports = a;
})), require_triplet$1 = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_get_bar_y_at();
	function r(e) {
		if (e.anchor1 && e.anchor2) {
			e.hasBeam = !!e.anchor1.parent.beam && e.anchor1.parent.beam === e.anchor2.parent.beam;
			var t = e.anchor1.parent.beam;
			if (e.hasBeam && (t.elems[0] !== e.anchor1.parent || t.elems[t.elems.length - 1] !== e.anchor2.parent) && (e.hasBeam = !1), e.hasBeam) {
				var n = i(t) ? e.anchor1.x + e.anchor1.w : e.anchor1.x;
				e.yTextPos = a(n, e.anchor2.x, t), e.yTextPos += i(t) ? 3 : -2, e.xTextPos = o(n, e.anchor2.x), e.top = e.yTextPos + 1, e.bottom = e.yTextPos - 2, i(t) && (e.endingHeightAbove = 4);
			} else {
				e.startNote = Math.max(e.anchor1.parent.top, 9) + 4, e.endNote = Math.max(e.anchor2.parent.top, 9) + 4, e.anchor1.parent.type === "rest" && e.anchor2.parent.type !== "rest" ? e.startNote = e.endNote : e.anchor2.parent.type === "rest" && e.anchor1.parent.type !== "rest" && (e.endNote = e.startNote);
				for (var r = 0, s = 0; s < e.middleElems.length; s++) r = Math.max(r, e.middleElems[s].top);
				r += 4, (r > e.startNote || r > e.endNote) && (e.startNote = r, e.endNote = r), e.flatBeams && (e.startNote = Math.max(e.startNote, e.endNote), e.endNote = Math.max(e.startNote, e.endNote)), e.yTextPos = e.startNote + (e.endNote - e.startNote) / 2, e.xTextPos = e.anchor1.x + (e.anchor2.x + e.anchor2.w - e.anchor1.x) / 2, e.top = e.yTextPos + 1;
			}
		}
		delete e.middleElems, delete e.flatBeams;
	}
	function i(e) {
		return e.stemsUp;
	}
	function a(e, t, r) {
		if (r.beams.length === 0) return 0;
		r = r.beams[0];
		var i = e + (t - e) / 2;
		return n(r.startX, r.startY, r.endX, r.endY, i);
	}
	function o(e, t) {
		return e + (t - e) / 2;
	}
	t.exports = r;
})), require_voice$1 = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_beam$1(), r = require_get_bar_y_at(), i = require_triplet$1(), a = function(e) {
		for (var t = 0; t < e.beams.length; t++) if (e.beams[t].type === "BeamElem") {
			n(e.beams[t]), o(e.beams[t]);
			for (var r = 0; r < e.beams[t].elems.length; r++) e.adjustRange(e.beams[t].elems[r]);
		}
		for (e.staff.specialY.chordLines = c(e.children), t = 0; t < e.otherchildren.length; t++) {
			var a = e.otherchildren[t];
			a.type === "TripletElem" && (i(a), e.adjustRange(a));
		}
		e.staff.top = Math.max(e.staff.top, e.top), e.staff.bottom = Math.min(e.staff.bottom, e.bottom);
	};
	function o(e) {
		for (var t = 1.5, n = 0; n < e.elems.length; n++) {
			var r = e.elems[n];
			if (r.top) for (var i = d(r, e), a = 0; a < r.children.length; a++) {
				var o = r.children[a];
				if (o.klass === "ornament" && o.position !== "below" && o.bottom - t < i) {
					var s = i - o.bottom + t;
					o.bottom += s, o.top += s, o.pitch += s, i = r.top = o.top;
				}
			}
		}
	}
	function s(e, t) {
		var n = t.getChordDim();
		if (n) {
			for (var r = 0; r < e.length; r++) if (e[r] < n.left) {
				r > 0 && t.putChordInLane(r), e[r] = n.right;
				return;
			}
			e.push(n.right), t.putChordInLane(e.length - 1);
		}
	}
	function c(e) {
		var t = [0], n = [0], r, i, a;
		for (r = 0; r < e.length; r++) {
			for (i = 0; i < e[r].children.length; i++) a = e[r].children[i], a.chordHeightAbove && s(t, a);
			for (i = e[r].children.length - 1; i >= 0; i--) a = e[r].children[i], a.chordHeightBelow && s(n, a);
		}
		return (t.length > 1 || n.length > 1) && u(e, t.length, n.length), {
			above: t.length,
			below: n.length
		};
	}
	function l(e) {
		for (var t = 0, n = 0; n < e.children.length; n++) e.children[n].chordHeightBelow && t++;
		return t;
	}
	function u(e, t, n) {
		for (var r = 0; r < e.length; r++) {
			l(e[r]);
			for (var i = 0; i < e[r].children.length; i++) {
				var a = e[r].children[i];
				a.chordHeightAbove && a.invertLane(t);
			}
		}
	}
	function d(e, t) {
		return t = t.beams[0], r(t.startX, t.startY, t.endX, t.endY, e.x);
	}
	t.exports = a;
})), require_set_upper_and_lower_elements = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_spacing(), r = function(e, t) {
		for (var r, s = 0; s < t.staffs.length; s++) {
			var c = t.staffs[s], l = {
				tempoHeightAbove: 0,
				partHeightAbove: 0,
				volumeHeightAbove: 0,
				dynamicHeightAbove: 0,
				endingHeightAbove: 0,
				chordHeightAbove: 0,
				lyricHeightAbove: 0,
				lyricHeightBelow: 0,
				chordHeightBelow: 0,
				volumeHeightBelow: 0,
				dynamicHeightBelow: 0
			};
			if (e.showDebug && e.showDebug.indexOf("box") >= 0 && (c.originalTop = c.top, c.originalBottom = c.bottom), a(c, l, "lyricHeightAbove"), a(c, l, "chordHeightAbove", c.specialY.chordLines.above), c.specialY.endingHeightAbove && (c.specialY.chordHeightAbove ? c.top += 2 : c.top += c.specialY.endingHeightAbove + i, l.endingHeightAbove = c.top), c.specialY.dynamicHeightAbove && c.specialY.volumeHeightAbove ? (c.top += Math.max(c.specialY.dynamicHeightAbove, c.specialY.volumeHeightAbove) + i, l.dynamicHeightAbove = c.top, l.volumeHeightAbove = c.top) : (a(c, l, "dynamicHeightAbove"), a(c, l, "volumeHeightAbove")), a(c, l, "partHeightAbove"), a(c, l, "tempoHeightAbove"), c.specialY.lyricHeightBelow && (c.specialY.lyricHeightBelow += e.spacing.vocal / n.STEP, l.lyricHeightBelow = c.bottom, c.bottom -= c.specialY.lyricHeightBelow + i), c.specialY.chordHeightBelow) {
				l.chordHeightBelow = c.bottom;
				var u = c.specialY.chordHeightBelow;
				c.specialY.chordLines.below && (u *= c.specialY.chordLines.below), c.bottom -= u + i;
			}
			c.specialY.volumeHeightBelow && c.specialY.dynamicHeightBelow ? (l.volumeHeightBelow = c.bottom, l.dynamicHeightBelow = c.bottom, c.bottom -= Math.max(c.specialY.volumeHeightBelow, c.specialY.dynamicHeightBelow) + i) : c.specialY.volumeHeightBelow ? (l.volumeHeightBelow = c.bottom, c.bottom -= c.specialY.volumeHeightBelow + i) : c.specialY.dynamicHeightBelow && (l.dynamicHeightBelow = c.bottom, c.bottom -= c.specialY.dynamicHeightBelow + i), e.showDebug && e.showDebug.indexOf("box") >= 0 && (c.positionY = l);
			for (var d = 0; d < c.voices.length; d++) {
				var f = t.voices[c.voices[d]];
				o(l, f, e.spacing);
			}
			if (r !== void 0) {
				var p = c.top - 10, m = r + p, h = e.spacing.systemStaffSeparation / n.STEP - m;
				h > 0 && (c.top += h);
			}
			c.top += e.spacing.staffTopMargin / n.STEP, r = 2 - c.bottom;
		}
	}, i = 1;
	function a(e, t, n, r) {
		if (e.specialY[n]) {
			var a = e.specialY[n];
			r && (a *= r), e.top += a + i, t[n] = e.top;
		}
	}
	function o(e, t, n) {
		var r, i;
		for (r = 0; r < t.children.length; r++) i = t.children[r], s(e, i, n);
		for (r = 0; r < t.otherchildren.length; r++) switch (i = t.otherchildren[r], i.type) {
			case "CrescendoElem":
				c(e, i);
				break;
			case "DynamicDecoration":
				l(e, i);
				break;
			case "EndingElem":
				u(e, i);
				break;
			case "TieElem":
				var a = i.getYBounds();
				t.staff.top = Math.max(t.staff.top, a[0]), t.staff.top = Math.max(t.staff.top, a[1]), t.staff.bottom = Math.min(t.staff.bottom, a[0]), t.staff.bottom = Math.min(t.staff.bottom, a[1]);
				break;
		}
	}
	function s(e, t, n) {
		for (var r = 0; r < t.children.length; r++) {
			var i = t.children[r];
			for (var a in t.specialY) t.specialY.hasOwnProperty(a) && i[a] && (i.pitch = e[a], i.top === void 0 && (i.type === "TempoElement" ? d(e, i) : f(e, i, n), t.pushTop(i.top), t.pushBottom(i.bottom)));
		}
	}
	function c(e, t) {
		t.dynamicHeightAbove ? t.pitch = e.dynamicHeightAbove : t.pitch = e.dynamicHeightBelow;
	}
	function l(e, t) {
		t.volumeHeightAbove ? t.pitch = e.volumeHeightAbove : t.pitch = e.volumeHeightBelow;
	}
	function u(e, t) {
		t.pitch = e.endingHeightAbove - 2;
	}
	function d(e, t) {
		if (t.pitch = e.tempoHeightAbove, t.top = e.tempoHeightAbove, t.bottom = e.tempoHeightAbove, t.note) {
			var n = t.pitch - t.totalHeightInPitches + 1;
			t.note.top = n, t.note.bottom = n;
			for (var r = 0; r < t.note.children.length; r++) {
				var i = t.note.children[r];
				i.top += n, i.bottom += n, i.pitch += n, i.pitch2 !== void 0 && (i.pitch2 += n);
			}
		}
	}
	function f(e, t, r) {
		switch (t.type) {
			case "part":
				t.top = e.partHeightAbove + t.height, t.bottom = e.partHeightAbove;
				break;
			case "text":
			case "chord":
				t.chordHeightAbove ? (t.top = e.chordHeightAbove, t.bottom = e.chordHeightAbove) : (t.top = e.chordHeightBelow, t.bottom = e.chordHeightBelow);
				break;
			case "lyric":
				t.lyricHeightAbove ? (t.top = e.lyricHeightAbove, t.bottom = e.lyricHeightAbove) : (t.top = e.lyricHeightBelow + r.vocal / n.STEP, t.bottom = e.lyricHeightBelow + r.vocal / n.STEP, t.pitch -= r.vocal / n.STEP);
				break;
			case "debug":
				t.top = e.chordHeightAbove, t.bottom = e.chordHeightAbove;
				break;
		}
		(t.pitch === void 0 || t.top === void 0) && console.error("RelativeElement position not set.", t.type, t.pitch, t.top, e);
	}
	t.exports = r;
})), require_voice_elements = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function() {};
	n.beginLayout = function(e, t) {
		t.i = 0, t.durationindex = 0, t.startx = e, t.minx = e, t.nextx = e, t.spacingduration = 0;
	}, n.layoutEnded = function(e) {
		return e.i >= e.children.length;
	}, n.getNextX = function(e) {
		return Math.max(e.minx, e.nextx);
	}, n.getSpacingUnits = function(e) {
		return Math.sqrt(e.spacingduration * 8);
	}, n.layoutOneItem = function(e, t, n, a, o) {
		var s = n.children[n.i];
		if (!s) return 0;
		var c = e - n.minx, l = n.durationindex + s.duration > 0 ? a : 0;
		if (s.abcelem.el_type === "note" && !s.abcelem.rest && n.voicenumber !== 0 && o) {
			var u = o.children[o.i], d = u && (s.abcelem.maxpitch <= u.abcelem.maxpitch + 1 && s.abcelem.maxpitch >= u.abcelem.minpitch - 1 || s.abcelem.minpitch <= u.abcelem.maxpitch + 1 && s.abcelem.minpitch >= u.abcelem.minpitch - 1);
			if (d && s.abcelem.minpitch === u.abcelem.minpitch && s.abcelem.maxpitch === u.abcelem.maxpitch && u.heads && u.heads.length > 0 && s.heads && s.heads.length > 0 && u.heads[0].c === s.heads[0].c && (d = !1), d) {
				var f = u.heads && u.heads.length > 0 ? u.heads[0].realWidth : u.fixed.w;
				s.adjustedWidth ||= f + s.w, s.w = s.adjustedWidth;
				for (var p = 0; p < s.children.length; p++) {
					var m = s.children[p];
					m.name.indexOf("accidental") < 0 && (m.adjustedWidth ||= m.dx + f, m.dx = m.adjustedWidth);
				}
			}
		}
		var h = r(s, l);
		return c < h && (n.i === 0 || s.type !== "bar" || n.children[n.i - 1].type !== "part" && n.children[n.i - 1].type !== "tempo") && (e += h - c), s.setX(e), n.spacingduration = s.duration, n.minx = e + i(s), n.i !== n.children.length - 1 && (n.minx += s.minspacing), this.updateNextX(e, t, n), e;
	}, n.shiftRight = function(e, t) {
		var n = t.children[t.i];
		n && (n.setX(n.x + e), t.minx += e, t.nextx += e);
	}, n.updateNextX = function(e, t, n) {
		n.nextx = e + t * this.getSpacingUnits(n);
	}, n.updateIndices = function(e) {
		this.layoutEnded(e) || (e.durationindex += e.children[e.i].duration, e.children[e.i].type === "bar" && (e.durationindex = Math.round(e.durationindex * 64) / 64), e.i++);
	};
	function r(e, t) {
		var n = 0;
		return (e.type === "note" || e.type === "bar") && (n = t), -e.extraw + n;
	}
	function i(e) {
		return e.w;
	}
	t.exports = n;
})), require_staff_group$1 = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_voice_elements();
	function r(e) {
		for (var t = 0, n = 0; n < e.length; n++) {
			var r = e[n];
			if (r.children.length > 0) {
				var i = r.children.length - 1, a = r.children[i];
				if (a.abcelem.el_type === "bar") {
					var o = a.children[0].x;
					o > t ? t = o : a.children[0].x = t;
				}
			}
		}
	}
	var i = function(e, t, i, c, l) {
		var u = 1e-7, d = 0, f = 1e3, p = l;
		c.startx = p;
		var m, h = 0;
		for (i && console.log("init layout", e), m = 0; m < c.voices.length; m++) n.beginLayout(p, c.voices[m]);
		for (var g = 0; !a(c.voices);) {
			for (h = null, m = 0; m < c.voices.length; m++) !n.layoutEnded(c.voices[m]) && (!h || o(c.voices[m]) < h) && (h = o(c.voices[m]));
			var _ = [], v = [];
			for (m = 0; m < c.voices.length; m++) o(c.voices[m]) - h > u ? v.push(c.voices[m]) : _.push(c.voices[m]);
			g = 0;
			var y = 0;
			for (m = 0; m < _.length; m++) n.getNextX(_[m]) > p && (p = n.getNextX(_[m]), g = n.getSpacingUnits(_[m]), y = _[m].spacingduration);
			d += g, f = Math.min(f, g), i && console.log("currentduration: ", h, d, f);
			var b = void 0;
			for (m = 0; m < _.length; m++) {
				var x = _[m];
				x.voicenumber === 0 && (b = m);
				var S = b !== void 0 && _[b].voicenumber !== x.voicenumber ? _[b] : void 0;
				s(x, S) || (S = void 0);
				var C = n.layoutOneItem(p, e, x, t, S), w = C - p;
				if (w > 0) {
					p = C;
					for (var T = 0; T < m; T++) n.shiftRight(w, _[T]);
				}
			}
			for (m = 0; m < v.length; m++) v[m].spacingduration -= y, n.updateNextX(p, e, v[m]);
			for (m = 0; m < _.length; m++) {
				var E = _[m];
				n.updateIndices(E);
			}
		}
		for (m = 0; m < c.voices.length; m++) n.getNextX(c.voices[m]) > p && (p = n.getNextX(c.voices[m]), g = n.getSpacingUnits(c.voices[m]));
		return r(c.voices), d += g, c.setWidth(p), {
			spacingUnits: d,
			minSpace: f
		};
	};
	function a(e) {
		for (var t = 0; t < e.length; t++) if (!n.layoutEnded(e[t])) return !1;
		return !0;
	}
	function o(e) {
		return e.durationindex - (e.children[e.i] && e.children[e.i].duration > 0 ? 0 : 5e-7);
	}
	function s(e, t) {
		return !e || !e.staff || !e.staff.voices || e.staff.voices.length === 0 || !t || !t.staff || !t.staff.voices || t.staff.voices.length === 0 ? !1 : e.staff.voices[0] === t.staff.voices[0];
	}
	t.exports = i;
})), require_get_left_edge_of_staff = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n, a, o) {
		var s = e.padding.left, c = 0, l, u;
		for (l = 0; l < n.length; l++) n[l].header && (u = t.calc(n[l].header, "voicefont", ""), c = Math.max(c, u.width));
		if (c = r(c, a, t), c = r(c, o, t), c) {
			var d = t.calc("A", "voicefont", "");
			c += d.width;
		}
		s += c;
		var f = 0;
		return f = i(a, s, f), f = i(o, s, f), s + f;
	}
	function r(e, t, n) {
		if (t) {
			for (var r = 0; r < t.length; r++) if (t[r].header) {
				var i = n.calc(t[r].header, "voicefont", "");
				e = Math.max(e, i.width);
			}
		}
		return e;
	}
	function i(e, t, n) {
		if (e) for (var r = 0; r < e.length; r++) a(t, e[r]), n = Math.max(n, e[r].getWidth());
		return n;
	}
	function a(e, t) {
		t.x = e;
	}
	t.exports = n;
})), require_layout_in_grid = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_get_left_edge_of_staff();
	function r(e, t, r) {
		var a = n(e, t.getTextSize, t.voices, t.brace, t.bracket), o = i(t, r.minPadding), s = o.totalDuration, c = o.minSpacing * s;
		r.minWidth && (c = Math.max(c, r.minWidth));
		var l = r.minPadding ? r.minPadding / 2 : 2;
		t.startx = a, t.w = c + a;
		for (var u = 0; u < t.voices.length; u++) {
			var d = t.voices[u];
			d.startx = a, d.w = c + a;
			for (var f = a, p = !1, m = 0, h = 0; h < d.children.length; h++) {
				var g = d.children[h];
				p || (g.duration === 0 ? (g.x = f, f += g.w + g.minspacing) : (p = !0, m = (c + a - f) / s, t.gridStart = f)), p && (r.align === "center" ? g.x = f + g.duration * m / 2 - g.w / 2 : g.duration === 0 ? g.x = f + 1 - g.w : g.x = f + l - g.extraw, f += g.duration * m);
				for (var _ = 0; _ < g.children.length; _++) {
					var v = g.children[_], y = v.dx ? v.dx : 0;
					v.x = g.x + y;
				}
			}
			t.gridEnd = f;
		}
		return c;
	}
	function i(e, t) {
		for (var n = 0, r = 0, i = 0; i < e.voices.length; i++) {
			for (var a = 0, o = e.voices[i], s = 0; s < o.children.length; s++) {
				var c = o.children[s];
				if (a += c.duration, c.duration) {
					var l = (c.w + t) / c.duration;
					n = Math.max(n, l);
				}
			}
			r = Math.max(r, a);
		}
		return {
			totalDuration: r,
			minSpacing: n
		};
	}
	t.exports = r;
})), require_layout = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_voice$1(), r = require_set_upper_and_lower_elements(), i = require_staff_group$1(), a = require_get_left_edge_of_staff(), o = require_layout_in_grid(), s = function(e, t, i, a, s, l) {
		var u, d, f = i;
		for (u = 0; u < t.lines.length; u++) if (d = t.lines[u], d.staff) {
			var p = l === void 0 ? c(e, f, a, d.staffGroup, t.formatting, u === t.lines.length - 1, !1) : o(e, d.staffGroup, l);
			Math.round(p) > Math.round(f) && (f = p, s && (u = -1));
		}
		for (u = 0; u < t.lines.length; u++) if (d = t.lines[u], d.staffGroup && d.staffGroup.voices) {
			for (var m = 0; m < d.staffGroup.voices.length; m++) n(d.staffGroup.voices[m]);
			r(e, d.staffGroup);
		}
		for (u = 0; u < t.lines.length; u++) d = t.lines[u], d.staffGroup && d.staffGroup.setHeight();
		return f;
	}, c = function(e, t, n, r, o, s, c) {
		for (var d = a(e, r.getTextSize, r.voices, r.brace, r.bracket), f = n, p = 0; p < 8; p++) {
			var m = i(f, e.minPadding, c, r, d);
			if (f = l(s, o.stretchlast, t + e.padding.left, r.w, f, m.spacingUnits, m.minSpace, e.padding.left + e.padding.right), c && console.log("setXSpace", p, r.w, f, r.minspace), f === null) break;
		}
		return u(r.voices), r.w - d;
	};
	function l(e, t, n, r, i, a, o, s) {
		if (e) {
			if (t === void 0) {
				if (r / n < .66) return null;
			} else if (!(1 - (r + s) / n < t)) return null;
		}
		if (Math.abs(n - r) < 2) return null;
		var c = r - a * i;
		return a > 0 ? (i = (n - c) / a, i * o > 50 && (i = 50 / o), i) : null;
	}
	function u(e) {
		for (var t = 0; t < e.length; t++) for (var n = e[t], r = 1; r < n.children.length - 1; r++) {
			var i = n.children[r];
			if (i.abcelem.rest && (i.abcelem.rest.type === "whole" || i.abcelem.rest.type === "multimeasure")) {
				var a = n.children[r - 1], o = n.children[r + 1];
				i.center(a, o);
			}
		}
	}
	t.exports = s;
})), require_classes = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e) {
		this.shouldAddClasses = e.shouldAddClasses, this.reset();
	};
	n.prototype.reset = function() {
		this.lineNumber = null, this.voiceNumber = null, this.measureNumber = null, this.measureTotalPerLine = [], this.noteNumber = null;
	}, n.prototype.incrLine = function() {
		this.lineNumber === null ? this.lineNumber = 0 : this.lineNumber++, this.voiceNumber = null, this.measureNumber = null, this.noteNumber = null;
	}, n.prototype.incrVoice = function() {
		this.voiceNumber === null ? this.voiceNumber = 0 : this.voiceNumber++, this.measureNumber = null, this.noteNumber = null;
	}, n.prototype.isInMeasure = function() {
		return this.measureNumber !== null;
	}, n.prototype.newMeasure = function() {
		this.measureNumber && (this.measureTotalPerLine[this.lineNumber] = this.measureNumber), this.measureNumber = null, this.noteNumber = null;
	}, n.prototype.startMeasure = function() {
		this.measureNumber = 0, this.noteNumber = 0;
	}, n.prototype.incrMeasure = function() {
		this.measureNumber++, this.noteNumber = 0;
	}, n.prototype.incrNote = function() {
		this.noteNumber++;
	}, n.prototype.measureTotal = function() {
		for (var e = 0, t = 0; t < this.lineNumber; t++) e += this.measureTotalPerLine[t] ? this.measureTotalPerLine[t] : 0;
		return this.measureNumber && (e += this.measureNumber), e;
	}, n.prototype.getCurrent = function(e) {
		return {
			line: this.lineNumber,
			measure: this.measureNumber,
			measureTotal: this.measureTotal(),
			voice: this.voiceNumber,
			note: this.noteNumber
		};
	}, n.prototype.generate = function(e) {
		if (!this.shouldAddClasses) return "";
		var t = [];
		if (e && e.length > 0 && t.push(e), e === "abcjs-tab-number") return t.join(" ");
		if (e === "text instrument-name") return "abcjs-text abcjs-instrument-name";
		if (this.lineNumber !== null && t.push("l" + this.lineNumber), this.measureNumber !== null && t.push("m" + this.measureNumber), this.measureNumber !== null && t.push("mm" + this.measureTotal()), this.voiceNumber !== null && t.push("v" + this.voiceNumber), e && (e.indexOf("note") >= 0 || e.indexOf("rest") >= 0 || e.indexOf("lyric") >= 0) && this.noteNumber !== null && t.push("n" + this.noteNumber), t.length > 0) {
			t = t.join(" "), t = t.split(" ");
			for (var n = 0; n < t.length; n++) t[n].indexOf("abcjs-") !== 0 && t[n].length > 0 && (t[n] = "abcjs-" + t[n]);
		}
		return t.join(" ");
	}, t.exports = n;
})), require_get_font_and_attr = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t) {
		this.formatting = e, this.classes = t;
	};
	n.prototype.updateFonts = function(e) {
		e.gchordfont && (this.formatting.gchordfont = e.gchordfont), e.tripletfont && (this.formatting.tripletfont = e.tripletfont), e.annotationfont && (this.formatting.annotationfont = e.annotationfont), e.vocalfont && (this.formatting.vocalfont = e.vocalfont);
	}, n.prototype.getFamily = function(e) {
		return e[0] === "\"" && e[e.length - 1] === "\"" ? e.substring(1, e.length - 1) : e;
	}, n.prototype.calc = function(e, t) {
		var n;
		typeof e == "string" ? (n = this.formatting[e], n = n ? {
			face: n.face,
			size: Math.round(n.size * 4 / 3),
			decoration: n.decoration,
			style: n.style,
			weight: n.weight,
			box: n.box
		} : {
			face: "Arial",
			size: 16,
			decoration: "underline",
			style: "normal",
			weight: "normal"
		}) : n = {
			face: e.face,
			size: Math.round(e.size * 4 / 3),
			decoration: e.decoration,
			style: e.style,
			weight: e.weight,
			box: e.box
		};
		var r = this.formatting.fontboxpadding ? this.formatting.fontboxpadding : .1;
		n.padding = n.size * r;
		var i = {
			"font-size": n.size,
			"font-style": n.style,
			"font-family": this.getFamily(n.face),
			"font-weight": n.weight,
			"text-decoration": n.decoration,
			class: this.classes.generate(t)
		};
		return {
			font: n,
			attr: i
		};
	}, t.exports = n;
})), require_get_text_size = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e, t) {
		this.getFontAndAttr = e, this.svg = t;
	};
	n.prototype.updateFonts = function(e) {
		this.getFontAndAttr.updateFonts(e);
	}, n.prototype.attr = function(e, t) {
		return this.getFontAndAttr.calc(e, t);
	}, n.prototype.getFamily = function(e) {
		return e[0] === "\"" && e[e.length - 1] === "\"" ? e.substring(1, e.length - 1) : e;
	}, n.prototype.calc = function(e, t, n, r) {
		var i = typeof t == "string" ? this.attr(t, n) : {
			font: {
				face: t.face,
				size: t.size,
				decoration: t.decoration,
				style: t.style,
				weight: t.weight
			},
			attr: {
				"font-size": t.size,
				"font-style": t.style,
				"font-family": this.getFamily(t.face),
				"font-weight": t.weight,
				"text-decoration": t.decoration,
				class: this.getFontAndAttr.classes.generate(n)
			}
		}, a = this.svg.getTextSize(e, i.attr, r);
		return i.font.box ? {
			height: a.height + i.font.padding * 4,
			width: a.width + i.font.padding * 4
		} : a;
	}, n.prototype.baselineToCenter = function(e, t, n, r, i) {
		var a = this.calc(e, t, n).height, o = this.attr(t, n).font.size;
		return a * .5 + (i - r - 2) * o;
	}, t.exports = n;
})), require_sprintf = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function() {
		for (var e = 0, t, n = arguments[e++], r = [], i, a, o, s; n;) {
			if (i = /^[^\x25]+/.exec(n)) r.push(i[0]);
			else if (i = /^\x25{2}/.exec(n)) r.push("%");
			else if (i = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)) {
				if ((t = arguments[i[1] || e++]) == null || t == null) throw "Too few arguments.";
				if (/[^s]/.test(i[7]) && typeof t != "number") throw "Expecting number but found " + typeof t;
				switch (i[7]) {
					case "b":
						t = t.toString(2);
						break;
					case "c":
						t = String.fromCharCode(t);
						break;
					case "d":
						t = parseInt(t);
						break;
					case "e":
						t = i[6] ? t.toExponential(i[6]) : t.toExponential();
						break;
					case "f":
						t = i[6] ? parseFloat(t).toFixed(i[6]) : parseFloat(t);
						break;
					case "o":
						t = t.toString(8);
						break;
					case "s":
						t = (t = String(t)) && i[6] ? t.substring(0, i[6]) : t;
						break;
					case "u":
						t = Math.abs(t);
						break;
					case "x":
						t = t.toString(16);
						break;
					case "X":
						t = t.toString(16).toUpperCase();
						break;
				}
				t = /[def]/.test(i[7]) && i[2] && t > 0 ? "+" + t : t, o = i[3] ? i[3] == "0" ? "0" : i[3][1] : " ", s = i[5] - String(t).length, a = i[5] ? str_repeat(o, s) : "", r.push(i[4] ? t + a : a + t);
			} else throw "Huh ?!";
			n = n.substring(i[0].length);
		}
		return r.join("");
	};
})), require_round_number = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e) {
		return parseFloat(e.toFixed(2));
	}
	t.exports = n;
})), require_text = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_round_number();
	function r(e, t, r) {
		var i = t.y;
		if (t.phrases) {
			var a = e.paper.richTextLine(t.phrases, t.x, t.y, t.klass, t.anchor);
			return a;
		}
		if (t.lane) {
			var o = t.dim.font.size * .25;
			i += (t.dim.font.size + o) * t.lane;
		}
		var s;
		t.dim ? (s = t.dim, s.attr.class = t.klass) : s = e.controller.getFontAndAttr.calc(t.type, t.klass), t.anchor && (s.attr["text-anchor"] = t.anchor), t["dominant-baseline"] && (s.attr["dominant-baseline"] = t["dominant-baseline"]), s.attr.x = t.x, s.attr.y = i, t.centerVertically || (s.attr.y += s.font.size), t.type === "debugfont" && (console.log("Debug msg: " + t.text), s.attr.stroke = "#ff0000"), t.cursor && (s.attr.cursor = t.cursor);
		var c = t.name == "free-text" ? t.text.replace(/^[ \t]*\n/gm, " \n") : t.text.replace(/\n\n/g, "\n \n");
		c = c.replace(/^\n/, "\xA0\n"), s.font.box && (r || e.paper.openGroup({
			klass: s.attr.class,
			fill: e.foregroundColor,
			"data-name": t.name
		}), s.attr["text-anchor"] === "end" ? s.attr.x -= s.font.padding : s.attr["text-anchor"] === "start" && (s.attr.x += s.font.padding), s.attr.y += s.font.padding, delete s.attr.class), t.noClass && delete s.attr.class, s.attr.x = n(s.attr.x), s.attr.y = n(s.attr.y), t.name && (s.attr["data-name"] = t.name);
		var a = e.paper.text(c, s.attr);
		if (s.font.box) {
			var l = a.getBBox(), u = 0;
			s.attr["text-anchor"] === "middle" ? u = l.width / 2 + s.font.padding : s.attr["text-anchor"] === "end" && (u = l.width + s.font.padding * 2);
			var d = 0;
			t.centerVertically && (d = l.height - s.font.padding), e.paper.rect({
				"data-name": "box",
				x: Math.round(t.x - u),
				y: Math.round(i - d),
				width: Math.round(l.width + s.font.padding * 2),
				height: Math.round(l.height + s.font.padding * 2)
			}), r || (a = e.paper.closeGroup());
		}
		return a;
	}
	t.exports = r;
})), require_brace = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sprintf(), r = require_spacing(), i = require_text();
	function a(e, t, n) {
		var i = t.startVoice.staff.absoluteY - r.STEP * 10;
		return t.endVoice && t.endVoice.staff ? t.endY = t.endVoice.staff.absoluteY - r.STEP * 2 : t.lastContinuedVoice && t.lastContinuedVoice.staff ? t.endY = t.lastContinuedVoice.staff.absoluteY - r.STEP * 2 : t.endY = t.startVoice.staff.absoluteY - r.STEP * 2, l(e, t.x, i, t.endY, t.type, t.header, n);
	}
	function o(e, t, i, a, o) {
		t += r.STEP;
		var s = r.STEP * .75, c = r.STEP * .75, l = a - i, u = n("M %f %f l %f %f l %f %f l %f %f z", t, i - c, 0, l + c * 2, s, 0, 0, -(l + c * 2)), d = r.STEP * 2, f = r.STEP;
		return u += n("M %f %f q %f %f %f %f q %f %f %f %f z", t + s, i - c, d * .6, f * .2, d, -f, -d * .1, f * .3, -d, f + r.STEP), u += n("M %f %f q %f %f %f %f q %f %f %f %f z", t + s, i + c + l, d * .6, -f * .2, d, f, -d * .1, -f * .3, -d, -f - r.STEP), e.paper.path({
			path: u,
			stroke: e.foregroundColor,
			fill: e.foregroundColor,
			class: e.controller.classes.generate(o),
			"data-name": o
		});
	}
	function s(e, t, n, r, i) {
		var a = r - n, o = c(t, n, [
			7.5,
			-8,
			21,
			0,
			18.5,
			-10.5,
			7.5
		], [
			0,
			a / 5.5,
			a / 3.14,
			a / 2,
			a / 2.93,
			a / 4.88,
			0
		]);
		return o += c(t, n, [
			0,
			17.5,
			-7.5,
			6.6,
			-5,
			20,
			0
		], [
			a / 2,
			a / 1.46,
			a / 1.22,
			a,
			a / 1.19,
			a / 1.42,
			a / 2
		]), e.paper.path({
			path: o,
			stroke: e.foregroundColor,
			fill: e.foregroundColor,
			class: e.controller.classes.generate(i),
			"data-name": i
		});
	}
	function c(e, t, r, i) {
		return n("M %f %f C %f %f %f %f %f %f C %f %f %f %f %f %f z", e + r[0], t + i[0], e + r[1], t + i[1], e + r[2], t + i[2], e + r[3], t + i[3], e + r[4], t + i[4], e + r[5], t + i[5], e + r[6], t + i[6]);
	}
	var l = function(e, t, n, r, a, c, l) {
		var u;
		if (c) {
			e.paper.openGroup({
				klass: e.controller.classes.generate("staff-extra voice-name"),
				"data-name": a
			});
			var d = n + (r - n) / 2;
			d -= e.controller.getTextSize.baselineToCenter(c, "voicefont", "staff-extra voice-name", 0, 1), i(e, {
				x: e.padding.left,
				y: d,
				text: c,
				type: "voicefont",
				klass: "staff-extra voice-name",
				anchor: "start",
				centerVertically: !0
			});
		}
		return a === "brace" ? u = s(e, t, n, r, a) : a === "bracket" && (u = o(e, t, n, r, a)), c && (u = e.paper.closeGroup()), l.wrapSvgEl({
			el_type: a,
			startChar: -1,
			endChar: -1
		}, u), u;
	};
	t.exports = a;
})), require_print_path = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n) {
		return e.paper.path(t);
	}
	t.exports = n;
})), require_glissando = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sprintf(), r = require_print_path(), i = require_round_number();
	function a(e, t, n) {
		(!t.anchor1 || !t.anchor2 || !t.anchor1.heads || !t.anchor2.heads || t.anchor1.heads.length === 0 || t.anchor2.heads.length === 0) && window.console.error("Glissando Element not set.");
		var r = 4, i = e.calcY(t.anchor1.heads[0].pitch), a = e.calcY(t.anchor2.heads[0].pitch), u = t.anchor1.x + t.anchor1.w / 2, d = t.anchor2.x + t.anchor2.w / 2, f = o(u, i, d, a), p = t.anchor1.w / 2 + r, m = t.anchor2.w / 2 + r, h = s(u, i, d, a), _ = c(i, h, p);
		c(a, h, -m);
		var v = l(f - p - m), y = g(e, u + p, _, v, h);
		return n.wrapSvgEl({
			el_type: "glissando",
			startChar: -1,
			endChar: -1
		}, y), [y];
	}
	function o(e, t, n, r) {
		var i = n - e, a = r - t;
		return Math.sqrt(i * i + a * a);
	}
	function s(e, t, n, r) {
		return (r - t) / (n - e);
	}
	function c(e, t, n) {
		return i(e + n * t);
	}
	function l(e) {
		return Math.max(2, Math.floor((e - 10) / 6));
	}
	var u = [[3.5, -4.8]], d = [
		[1.5, -1],
		[.3, -.3],
		[-3.5, 3.8]
	], f = [[-1.5, 2]], p = [[3, 4], [3, -4]], m = [[-3, 4], [-3, -4]];
	function h(e, t) {
		for (var n = "", r = 0; r < e.length; r++) n += "l" + e[r][0] + " " + c(e[r][1], t, e[r][0]);
		return n;
	}
	var g = function(e, t, i, a, o) {
		var s = n("M %f %f", t, i);
		s += h(u, o);
		var c;
		for (c = 0; c < a; c++) s += h(p, o);
		for (s += h(d, o), c = 0; c < a; c++) s += h(m, o);
		return s += h(f, o) + "z", r(e, {
			path: s,
			highlight: "stroke",
			stroke: e.foregroundColor,
			class: e.controller.classes.generate("decoration"),
			"data-name": "glissando"
		});
	};
	t.exports = a;
})), require_crescendo = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sprintf(), r = require_print_path(), i = require_round_number();
	function a(e, t, n) {
		t.pitch === void 0 && window.console.error("Crescendo Element y-coordinate not set.");
		var r = e.calcY(t.pitch) + 4, i = 8, a = t.anchor1 ? t.anchor1.x : 0, s = t.anchor2 ? t.anchor2.x : 800, c = t.dir === "<" ? o(e, r + i / 2, r, r + i / 2, r + i, a, s) : o(e, r, r + i / 2, r + i, r + i / 2, a, s);
		return n.wrapSvgEl({
			el_type: "dynamicDecoration",
			startChar: -1,
			endChar: -1
		}, c), [c];
	}
	var o = function(e, t, a, o, s, c, l) {
		return t = i(t), a = i(a), o = i(o), s = i(s), c = i(c), l = i(l), r(e, {
			path: n("M %f %f L %f %f M %f %f L %f %f", c, t, l, a, c, o, l, s),
			highlight: "stroke",
			stroke: e.foregroundColor,
			class: e.controller.classes.generate("dynamics decoration"),
			"data-name": "dynamics"
		});
	};
	t.exports = a;
})), require_group_elements = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_round_number();
	function r() {
		this.ingroup = !1;
	}
	r.prototype.beginGroup = function(e, t) {
		this.paper = e, this.controller = t, this.path = [], this.lastM = [0, 0], this.ingroup = !0, this.paper.openGroup();
	}, r.prototype.isInGroup = function() {
		return this.ingroup;
	}, r.prototype.addPath = function(e) {
		if (e ||= [], e.length !== 0) {
			e[0][0] = "m", e[0][1] = n(e[0][1] - this.lastM[0]), e[0][2] = n(e[0][2] - this.lastM[1]), this.lastM[0] += e[0][1], this.lastM[1] += e[0][2], this.path.push(e[0]);
			for (var t = 1, r = e.length; t < r; t++) e[t][0] === "m" && (this.lastM[0] += e[t][1], this.lastM[1] += e[t][2]), this.path.push(e[t]);
		}
	}, r.prototype.endGroup = function(e, t) {
		this.ingroup = !1;
		for (var n = "", r = 0; r < this.path.length; r++) n += this.path[r].join(" ");
		this.path = [];
		var i = this.paper.closeGroup();
		return i && (i.setAttribute("class", this.controller.classes.generate(e)), i.setAttribute("fill", this.controller.renderer.foregroundColor), i.setAttribute("stroke", "none"), i.setAttribute("data-name", t)), i;
	}, t.exports = new r();
})), require_print_symbol = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_text(), r = require_glyphs(), i = require_group_elements();
	function a(e, t, a, s, c) {
		var l, u;
		if (!s) return null;
		if (s.length > 1 && s.indexOf(".") < 0) {
			var d = i.isInGroup() ? "" : c.klass;
			e.paper.openGroup({
				"data-name": c.name,
				klass: d
			});
			for (var f = 0, p = 0; p < s.length; p++) {
				var m = s[p];
				u = r.getYCorr(m), l = r.printSymbol(t + f, e.calcY(a + u), m, e.paper, {
					stroke: c.stroke,
					fill: c.fill
				}), l ? p < s.length - 1 && (f += o(m, s[p + 1], r.getSymbolWidth(m))) : n(e, {
					x: t,
					y: e.y,
					text: "no symbol:" + s,
					type: "debugfont",
					klass: "debug-msg",
					anchor: "start"
				}, !1);
			}
			return e.paper.closeGroup();
		} else return u = r.getYCorr(s), l = i.isInGroup() ? r.printSymbol(t, e.calcY(a + u), s, e.paper, { "data-name": c.name }) : r.printSymbol(t, e.calcY(a + u), s, e.paper, {
			klass: c.klass,
			stroke: c.stroke,
			fill: c.fill,
			"data-name": c.name
		}), l || (n(e, {
			x: t,
			y: e.y,
			text: "no symbol:" + s,
			type: "debugfont",
			klass: "debug-msg",
			anchor: "start"
		}, !1), null);
	}
	function o(e, t, n) {
		var r = n;
		return e === "f" && t === "f" && (r = r * 2 / 3), e === "p" && t === "p" && (r = r * 5 / 6), e === "f" && t === "z" && (r = r * 5 / 8), r;
	}
	t.exports = a;
})), require_dynamics = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_print_symbol();
	function r(e, t, r) {
		t.pitch === void 0 && window.console.error("Dynamic Element y-coordinate not set.");
		var i = n(e, t.anchor.x, t.pitch, t.dec, {
			scalex: 1,
			scaley: 1,
			klass: e.controller.classes.generate("decoration dynamics"),
			fill: e.foregroundColor,
			stroke: "none",
			name: "dynamics"
		});
		return r.wrapSvgEl({
			el_type: "dynamicDecoration",
			startChar: -1,
			endChar: -1,
			decoration: t.dec
		}, i), [i];
	}
	t.exports = r;
})), require_triplet = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sprintf(), r = require_text(), i = require_print_path(), a = require_round_number();
	function o(e, t, n) {
		e.paper.openGroup({
			klass: e.controller.classes.generate("triplet " + t.durationClass),
			"data-name": "triplet"
		}), t.hasBeam || c(e, t.anchor1.x, t.startNote, t.anchor2.x + t.anchor2.w, t.endNote), r(e, {
			x: t.xTextPos,
			y: e.calcY(t.yTextPos - 1),
			text: "" + t.number,
			type: "tripletfont",
			anchor: "middle",
			centerVertically: !0,
			noClass: !0,
			name: "" + t.number
		}, !0);
		var i = e.paper.closeGroup();
		return n.wrapSvgEl({
			el_type: "triplet",
			startChar: -1,
			endChar: -1
		}, i), i;
	}
	function s(e, t, r, i) {
		return n("M %f %f L %f %f", a(e), a(t), a(r), a(i));
	}
	function c(e, t, n, r, a) {
		n = e.calcY(n), a = e.calcY(a);
		var o = 5, c = "";
		c += s(t, n, t, n + o), c += s(r, a, r, a + o);
		var l = t + (r - t) / 2, u = 8, d = (a - n) / (r - t), f = l - u, p = n + (f - t) * d;
		c += s(t, n, f, p);
		var m = l + u, h = n + (m - t) * d;
		c += s(m, h, r, a), i(e, {
			path: c,
			stroke: e.foregroundColor,
			"data-name": "triplet-bracket"
		});
	}
	t.exports = o;
})), require_ending = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sprintf(), r = require_text(), i = require_print_path(), a = require_round_number();
	function o(e, t, o, s, c) {
		t.pitch === void 0 && window.console.error("Ending Element y-coordinate not set.");
		var l = a(e.calcY(t.pitch)), u = 20, d = "";
		t.anchor1 && (o = a(t.anchor1.x + t.anchor1.w), d += n("M %f %f L %f %f ", o, l, o, a(l + u))), t.anchor2 && (s = a(t.anchor2.x), d += n("M %f %f L %f %f ", s, l, s, a(l + u))), d += n("M %f %f L %f %f ", o, l, s, l), e.paper.openGroup({
			klass: e.controller.classes.generate("ending"),
			fill: e.foregroundColor,
			"data-name": "ending"
		}), i(e, {
			path: d,
			stroke: e.foregroundColor,
			fill: e.foregroundColor,
			"data-name": "line"
		}), t.anchor1 && r(e, {
			x: a(o + 5),
			y: a(e.calcY(t.pitch - .5)),
			text: t.text,
			type: "repeatfont",
			klass: "ending",
			anchor: "start",
			noClass: !0,
			name: t.text
		});
		var f = e.paper.closeGroup();
		return c.wrapSvgEl({
			el_type: "ending",
			startChar: -1,
			endChar: -1
		}, f), [f];
	}
	t.exports = o;
})), require_tie = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sprintf(), r = require_round_number();
	function i(e, t, n, r, i) {
		a(t, n, r);
		var s = "";
		t.anchor1 ? s += "abcjs-start-m" + t.anchor1.parent.counters.measure + "-n" + t.anchor1.parent.counters.note : s += "abcjs-start-edge", t.anchor2 ? s += " abcjs-end-m" + t.anchor2.parent.counters.measure + "-n" + t.anchor2.parent.counters.note : s += " abcjs-end-edge", t.hint && (s = "abcjs-hint");
		var c = t.fixedY ? 1.5 : 0, l = o(e, t.startX, t.endX, t.startY + c, t.endY + c, t.above, s, t.isTie, t.dotted), u = -1;
		t.anchor1 && !t.isTie && (u = t.anchor1.parent.abcelem.startChar - 1);
		var d = -1;
		return t.anchor2 && !t.isTie && (d = t.anchor2.parent.abcelem.endChar + 1), i.wrapSvgEl({
			el_type: "slur",
			startChar: u,
			endChar: d
		}, l), [l];
	}
	var a = function(e, t, n) {
		!e.anchor1 || !e.anchor2 || e.anchor1.pitch === e.anchor2.pitch && e.internalNotes.length === 0 ? e.isTie = !0 : e.isTie = !1, e.isTie ? (e.calcTieDirection(), e.calcX(t, n), e.calcTieY()) : (e.calcSlurDirection(), e.calcX(t, n), e.calcSlurY()), e.avoidCollisionAbove();
	}, o = function(e, t, i, a, o, s, c, l, u) {
		var d = l ? 1.2 : 1.5;
		t = r(t + 6), i = r(i + 4), a += s ? d : -d, o += s ? d : -d;
		var f = r(e.calcY(a)), p = r(e.calcY(o)), m = i - t, h = p - f, g = Math.sqrt(m * m + h * h), _ = m / g, v = h / g, y = g / 3.5, b = l ? 10 : 25, x = (s ? -1 : 1) * Math.min(b, Math.max(4, y)), S = r(t + y * _ - x * v), C = r(f + y * v + x * _), w = r(i - y * _ - x * v), T = r(p - y * v + x * _), E = 2;
		c ? c += " slur" : c = "slur", c += l ? " tie" : " legato";
		var D;
		if (u) {
			c += " dotted";
			var O = n("M %f %f C %f %f %f %f %f %f", t, f, S, C, w, T, i, p);
			D = e.paper.path({
				path: O,
				stroke: e.foregroundColor,
				fill: "none",
				"stroke-dasharray": "5 5",
				class: e.controller.classes.generate(c),
				"data-name": l ? "tie" : "slur"
			});
		} else {
			var k = n("M %f %f C %f %f %f %f %f %f C %f %f %f %f %f %f z", t, f, S, C, w, T, i, p, r(w - E * v), r(T + E * _), r(S - E * v), r(C + E * _), t, f);
			D = e.paper.path({
				path: k,
				stroke: "none",
				fill: e.foregroundColor,
				class: e.controller.classes.generate(c),
				"data-name": l ? "tie" : "slur"
			});
		}
		return D;
	};
	t.exports = i;
})), require_beam = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_print_path(), r = require_round_number();
	function i(e, t) {
		if (t.beams.length !== 0) {
			for (var r = "", i = 0; i < t.beams.length; i++) {
				var c = t.beams[i];
				if (c.split) {
					for (var l = o(e, c.startX, c.startY, c.endX, c.endY), u = [], d = 0; d < c.split.length; d += 2) u.push([c.split[d], c.split[d + 1]]);
					for (d = 0; d < u.length; d++) {
						var f = s(c.startX, c.startY, l, u[d][0]), p = s(c.startX, c.startY, l, u[d][1]);
						r += a(e, u[d][0], f, u[d][1], p, c.dy);
					}
				} else r += a(e, c.startX, c.startY, c.endX, c.endY, c.dy);
			}
			var m = ("abcjs-d" + t.duration).replace(/\./g, "-"), h = e.controller.classes.generate("beam-elem " + m);
			return [n(e, {
				path: r,
				stroke: "none",
				fill: e.foregroundColor,
				class: h
			})];
		}
	}
	function a(e, t, n, i, a, o) {
		n = r(e.calcY(n)), a = r(e.calcY(a)), t = r(t), i = r(i);
		var s = r(n + o), c = r(a + o);
		return "M" + t + " " + n + " L" + i + " " + a + "L" + i + " " + c + " L" + t + " " + s + "z";
	}
	function o(e, t, n, r, i) {
		return (i - n) / (r - t);
	}
	function s(e, t, n, r) {
		return t + (r - e) * n;
	}
	t.exports = i;
})), require_print_stem = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_group_elements(), r = require_round_number();
	function i(e, t, i, a, o, s, c) {
		if (i < 0 || a < o) {
			var l = r(o);
			o = r(a), a = l;
		} else a = r(a), o = r(o);
		t = r(t);
		var u = r(t + i);
		if (e.firefox112) {
			t += i / 2;
			var d = {
				x1: t,
				x2: t,
				y1: a,
				y2: o,
				stroke: e.foregroundColor,
				"stroke-width": Math.abs(i)
			};
			return s && (d.class = s), c && (d["data-name"] = c), e.paper.lineToBack(d);
		}
		for (var f = [
			[
				"M",
				t,
				a
			],
			[
				"L",
				t,
				o
			],
			[
				"L",
				u,
				o
			],
			[
				"L",
				u,
				a
			],
			["z"]
		], d = { path: "" }, p = 0; p < f.length; p++) d.path += f[p].join(" ");
		return s && (d.class = s), c && (d["data-name"] = c), n.isInGroup() || (d.stroke = "none", d.fill = e.foregroundColor), e.paper.pathToBack(d);
	}
	t.exports = i;
})), require_print_line = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sprintf(), r = require_round_number();
	function i(e, t, i, a, o, s, c) {
		var l = e.foregroundColor;
		t = r(t), i = r(i);
		var u = r(a - c), d = r(a + c);
		if (e.firefox112) {
			a += c / 2;
			var f = {
				x1: t,
				x2: i,
				y1: a,
				y2: a,
				stroke: e.foregroundColor,
				"stroke-width": Math.abs(c * 2)
			};
			return o && (f.class = o), s && (f["data-name"] = s), e.paper.lineToBack(f);
		}
		var p = {
			path: n("M %f %f L %f %f L %f %f L %f %f z", t, u, i, u, i, d, t, d),
			stroke: "none",
			fill: l
		};
		return s && (p["data-name"] = s), o && (p.class = o), e.paper.pathToBack(p);
	}
	t.exports = i;
})), require_staff_line = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_print_line();
	function r(e, t, r, i, a, o, s) {
		return n(e, t, r, e.calcY(i), a, o, s);
	}
	t.exports = r;
})), require_relative = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_text(), r = require_print_stem(), i = require_staff_line(), a = require_print_symbol();
	function o(e, t, o) {
		t.pitch === void 0 && window.console.error(t.type + " Relative Element y-coordinate not set.");
		var c = e.calcY(t.pitch);
		switch (t.type) {
			case "symbol":
				if (t.c === null) return null;
				var l = "symbol";
				t.klass && (l += " " + t.klass), t.graphelem = a(e, t.x, t.pitch, t.c, {
					scalex: t.scalex,
					scaley: t.scaley,
					klass: e.controller.classes.generate(l),
					name: t.name
				});
				break;
			case "debug":
				t.graphelem = n(e, {
					x: t.x,
					y: e.calcY(15),
					text: "" + t.c,
					type: "debugfont",
					klass: e.controller.classes.generate("debug-msg"),
					anchor: "start",
					centerVertically: !1,
					dim: t.dim
				}, !1);
				break;
			case "tabNumber":
				var u = "middle", d = "tabnumberfont", f = "abcjs-tab-number";
				t.isGrace && (d = "tabgracefont", c += 2.5, f = "tab-grace"), t.graphelem = n(e, {
					x: t.x,
					y: c,
					text: "" + t.c,
					type: d,
					klass: e.controller.classes.generate(f),
					anchor: u,
					centerVertically: !1,
					dim: t.dim,
					cursor: "default"
				}, !1);
				break;
			case "barNumber":
				t.graphelem = n(e, {
					x: t.x,
					y: c,
					text: "" + t.c,
					type: "measurefont",
					klass: e.controller.classes.generate("bar-number"),
					anchor: "middle",
					dim: t.dim,
					name: "bar-number"
				}, !0);
				break;
			case "lyric":
				t.graphelem = n(e, {
					x: t.x,
					y: c,
					text: t.c,
					type: "vocalfont",
					klass: e.controller.classes.generate("lyric"),
					anchor: "middle",
					dim: t.dim,
					name: "lyric"
				}, !1);
				break;
			case "chord":
				t.graphelem = n(e, {
					x: t.x,
					y: c,
					text: t.c,
					type: "gchordfont",
					klass: e.controller.classes.generate("chord"),
					anchor: "middle",
					dim: t.dim,
					lane: t.getLane(),
					name: "chord"
				}, !1);
				break;
			case "decoration":
				t.graphelem = n(e, {
					x: t.x,
					y: c + 6,
					text: t.c,
					type: "annotationfont",
					klass: e.controller.classes.generate("annotation"),
					anchor: t.anchor,
					centerVertically: !0,
					dim: t.dim
				}, !1);
				break;
			case "text":
				t.graphelem = n(e, {
					x: t.x,
					y: c,
					text: t.c,
					type: "annotationfont",
					klass: e.controller.classes.generate("annotation"),
					anchor: "start",
					centerVertically: t.centerVertically,
					dim: t.dim,
					lane: t.getLane(),
					name: "annotation"
				}, !1);
				break;
			case "multimeasure-text":
				t.graphelem = n(e, {
					x: t.x + t.w / 2,
					y: c,
					text: t.c,
					type: "tempofont",
					klass: e.controller.classes.generate("rest"),
					anchor: "middle",
					centerVertically: !1,
					dim: t.dim
				}, !1);
				break;
			case "part":
				t.graphelem = n(e, {
					x: t.x,
					y: c,
					text: t.c,
					type: "partsfont",
					klass: e.controller.classes.generate("part"),
					anchor: "start",
					dim: t.dim,
					name: t.c
				}, !0);
				break;
			case "bar":
				t.graphelem = r(e, t.x, t.linewidth + e.lineThickness, c, o || e.calcY(t.pitch2), null, "bar");
				break;
			case "stem":
				var p = t.linewidth > 0 ? t.linewidth + e.lineThickness : t.linewidth - e.lineThickness;
				t.graphelem = r(e, t.x, p, c, e.calcY(t.pitch2), "abcjs-stem", "stem");
				break;
			case "ledger":
				t.graphelem = i(e, t.x, t.x + t.w, t.pitch, "abcjs-ledger", "ledger", .35 + e.lineThickness);
				break;
		}
		return t.scalex !== 1 && t.graphelem && s(e.paper, t.graphelem, t.scalex, t.scaley, t.x, c), t.graphelem;
	}
	function s(e, t, n, r, i, a) {
		e.setAttributeOnElement(t, { style: "transform:scale(" + n + "," + r + ");transform-origin:" + i + "px " + a + "px;" });
	}
	t.exports = o;
})), require_tempo = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_relative(), r = require_text();
	function i(e, t) {
		var i = t.x;
		t.pitch === void 0 && window.console.error("Tempo Element y-coordinate not set."), t.tempo.el_type = "tempo";
		var a = e.calcY(t.pitch) + 2, o, s;
		if (t.tempo.preString) {
			o = r(e, {
				x: i,
				y: a,
				text: t.tempo.preString,
				type: "tempofont",
				klass: "abcjs-tempo",
				anchor: "start",
				noClass: !0,
				name: "pre"
			}, !0), s = e.controller.getTextSize.calc(t.tempo.preString, "tempofont", "tempo", o);
			var c = s.width, l = c / t.tempo.preString.length;
			i += c + l;
		}
		if (t.note) {
			t.note.setX(i);
			for (var u = 0; u < t.note.children.length; u++) n(e, t.note.children[u], i);
			i += t.note.w + 5;
			var d = "= " + t.tempo.bpm;
			o = r(e, {
				x: i,
				y: a,
				text: d,
				type: "tempofont",
				klass: "abcjs-tempo",
				anchor: "start",
				noClass: !0,
				name: "beats"
			}), s = e.controller.getTextSize.calc(d, "tempofont", "tempo", o);
			var f = s.width, p = f / d.length;
			i += f + p;
		}
		t.tempo.postString && r(e, {
			x: i,
			y: a,
			text: t.tempo.postString,
			type: "tempofont",
			klass: "abcjs-tempo",
			anchor: "start",
			noClass: !0,
			name: "post"
		}, !0);
	}
	t.exports = i;
})), require_absolute = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_tempo(), r = require_relative(), i = require_spacing(), a = require_set_class(), o = require_group_elements();
	function s(e, t, s, c, l) {
		if (!t.invisible) {
			var u = t.children.length > 0 && t.children[0].type === "TempoElement";
			t.elemset = [], o.beginGroup(e.paper, e.controller);
			for (var d = 0; d < t.children.length; d++) {
				var f = t.children[d];
				switch (f.type) {
					case "TempoElement":
						n(e, f);
						break;
					default:
						var p = r(e, f, s);
						f.type === "symbol" && f.c && f.c.indexOf("notehead") >= 0 && p.setAttribute("class", "abcjs-notehead");
				}
			}
			var m = t.type;
			if ((t.type === "note" || t.type === "rest") && (t.counters = e.controller.classes.getCurrent(), m += " d" + Math.round(t.durationClass * 1e3) / 1e3, m = m.replace(/\./g, "-"), t.abcelem.pitches)) for (var h = 0; h < t.abcelem.pitches.length; h++) m += " p" + t.abcelem.pitches[h].pitch;
			var g = o.endGroup(m, t.type);
			if (g) {
				if (t.cloned && (t.cloned.overrideClasses = g.className.baseVal), t.overrideClasses) {
					var _ = g.classList && g.classList.length > 0 ? g.classList[0] + " " : "";
					g.setAttribute("class", _ + t.overrideClasses);
				}
				if (u) t.startChar = t.abcelem.startChar, t.endChar = t.abcelem.endChar, c.add(t, g, !1, l);
				else {
					t.elemset.push(g);
					var v = !1;
					(t.type === "note" || t.type === "tabNumber") && (v = !0), c.add(t, g, v, l);
				}
			} else t.elemset.length > 0 && c.add(t, t.elemset[0], t.type === "note", l);
			if (t.klass && a(t.elemset, "mark", "", "#00ff00"), t.hint && a(t.elemset, "abcjs-hint", "", null), t.abcelem.abselem = t, t.heads && t.heads.length > 0) {
				t.notePositions = [];
				for (var y = 0; y < t.heads.length; y++) t.notePositions.push({
					x: t.heads[y].x + t.heads[y].w / 2,
					y: l.zero - t.heads[y].pitch * i.STEP
				});
			}
		}
	}
	t.exports = s;
})), require_voice = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_glissando(), r = require_crescendo(), i = require_dynamics(), a = require_triplet(), o = require_ending(), s = require_tie(), c = require_beam(), l = require_text(), u = require_absolute();
	function d(e, t, d, p, m) {
		var h = t.w - 1;
		e.staffbottom = t.staff.bottom;
		var g = e.foregroundColor;
		if (t.color && (e.foregroundColor = t.color), t.header) {
			var _ = l(e, {
				x: e.padding.left,
				y: e.calcY(t.headerPosition),
				text: t.header,
				type: "voicefont",
				klass: "staff-extra voice-name",
				anchor: "start",
				centerVertically: !0,
				name: "voice-name"
			}, !0);
			p.wrapSvgEl({
				el_type: "voiceName",
				startChar: -1,
				endChar: -1,
				text: t.header
			}, _);
		}
		var v, y, b = !1;
		for (v = 0; v < t.children.length; v++) {
			y = t.children[v], (y.type === "note" || y.type === "rest") && (b = !0);
			var x = !1;
			y.type !== "staff-extra" && !e.controller.classes.isInMeasure() && (e.controller.classes.startMeasure(), x = !0), t.staff.isTabStaff && (y.invisible = !1, y.type == "bar" && y.abcelem.lastBar && (d = t.topLine)), u(e, y, t.barto || v === t.children.length - 1 ? d : 0, p, m), (y.type === "note" || f(y)) && e.controller.classes.incrNote(), y.type === "bar" && !x && b && e.controller.classes.incrMeasure();
		}
		for (e.controller.classes.startMeasure(), v = 0; v < t.beams.length; v++) {
			var S = t.beams[v];
			S === "bar" ? e.controller.classes.incrMeasure() : c(e, S, p);
		}
		for (e.controller.classes.startMeasure(), v = 0; v < t.otherchildren.length; v++) if (y = t.otherchildren[v], y === "bar") e.controller.classes.incrMeasure();
		else switch (y.type) {
			case "GlissandoElem":
				y.elemset = n(e, y, p);
				break;
			case "CrescendoElem":
				y.elemset = r(e, y, p);
				break;
			case "DynamicDecoration":
				y.elemset = i(e, y, p);
				break;
			case "TripletElem":
				a(e, y, p);
				break;
			case "EndingElem":
				y.elemset = o(e, y, t.startx + 10, h, p);
				break;
			case "TieElem":
				y.elemset = s(e, y, t.startx + 10, h, p);
				break;
			default: console.log(y), u(e, y, t.startx + 10, h, p, m);
		}
		e.foregroundColor = g;
	}
	function f(e) {
		return e.type === "rest" ? !!(e.abcelem && e.abcelem.rest && e.abcelem.rest.type !== "spacer") : !1;
	}
	t.exports = d;
})), require_staff = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_staff_line();
	function r(e, t, r, i, a, o) {
		var s = "abcjs-top-line", c = 2;
		a && (c = a), e.paper.openGroup({
			prepend: !0,
			klass: e.controller.classes.generate("abcjs-staff")
		});
		var l = 0, u = 0;
		if (i === 1) n(e, t, r, 6, s, null, o + e.lineThickness), l = e.calcY(10), u = e.calcY(2);
		else for (var d = i - 1; d >= 0; d--) {
			var f = (d + 1) * c;
			u = e.calcY(f), l === 0 && (l = u), n(e, t, r, f, s, null, o + e.lineThickness), s = void 0;
		}
		return e.paper.closeGroup(), [l, u];
	}
	t.exports = r;
})), require_debug_box = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n) {
		var r = e.paper.rectBeneath(t);
		return n && e.paper.text(n, {
			x: 0,
			y: t.y + 7,
			"text-anchor": "start",
			"font-size": "14px",
			fill: "rgba(0,0,255,.4)",
			stroke: "rgba(0,0,255,.4)"
		}), r;
	}
	t.exports = n;
})), require_separator = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t) {
		var n = "rgba(0,0,0,255)", r = "rgba(0,0,0,0)", i = Math.round(e.y), a = (e.controller.width - t) / 2, o = a + t, s = "M " + a + " " + i + " L " + o + " " + i + " L " + o + " " + (i + 1) + " L " + a + " " + (i + 1) + " L " + a + " " + i + " z";
		e.paper.pathToBack({
			path: s,
			stroke: r,
			fill: n,
			class: e.controller.classes.generate("defined-text")
		});
	}
	t.exports = n;
})), require_non_music = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_separator(), r = require_text();
	function i(e, t, i) {
		for (var a = 0; a < t.rows.length; a++) {
			var o = t.rows[a];
			if (o.absmove) e.absolutemoveY(o.absmove);
			else if (o.move) e.moveY(o.move);
			else if (o.text || o.phrases) {
				var s = r(e, {
					x: o.left ? o.left : 0,
					y: e.y,
					text: o.text,
					phrases: o.phrases,
					"dominant-baseline": o["dominant-baseline"],
					type: o.font,
					klass: o.klass,
					name: o.name,
					anchor: o.anchor
				});
				o.absElemType && i.wrapSvgEl({
					el_type: o.absElemType,
					name: o.name,
					startChar: o.startChar,
					endChar: o.endChar,
					text: o.text
				}, s);
			} else if (o.separator) n(e, o.separator);
			else if (o.startGroup) e.paper.openGroup({
				klass: o.klass,
				"data-name": o.name
			});
			else if (o.endGroup) {
				var c = e.paper.closeGroup();
				o.absElemType && i.wrapSvgEl({
					el_type: o.absElemType,
					name: o.name,
					startChar: o.startChar,
					endChar: o.endChar,
					text: ""
				}, c);
			}
		}
	}
	t.exports = i;
})), require_staff_group = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_spacing(), r = require_brace(), i = require_voice(), a = require_staff(), o = require_debug_box(), s = require_print_stem(), c = require_non_music();
	function l(e, t, r, l) {
		for (var f, p = e.y, m = 0; m < t.staffs.length; m++) {
			var h = t.staffs[m];
			e.moveY(n.STEP, h.top), h.absoluteY = e.y, e.showDebug && (e.showDebug.indexOf("box") >= 0 && h.voices && d(e, t.voices, h.voices), e.showDebug.indexOf("grid") >= 0 && (e.paper.dottedLine({
				x1: e.padding.left,
				x2: e.padding.left + e.controller.width,
				y1: p,
				y2: p,
				stroke: "#0000ff"
			}), o(e, {
				x: e.padding.left,
				y: e.calcY(h.originalTop),
				width: e.controller.width,
				height: e.calcY(h.originalBottom) - e.calcY(h.originalTop),
				fill: e.foregroundColor,
				stroke: e.foregroundColor,
				"fill-opacity": .1,
				"stroke-opacity": .1
			}), f = 0, D(h, "chordHeightAbove"), D(h, "chordHeightBelow"), D(h, "dynamicHeightAbove"), D(h, "dynamicHeightBelow"), D(h, "endingHeightAbove"), D(h, "lyricHeightAbove"), D(h, "lyricHeightBelow"), D(h, "partHeightAbove"), D(h, "tempoHeightAbove"), D(h, "volumeHeightAbove"), D(h, "volumeHeightBelow"))), e.moveY(n.STEP, -h.bottom), e.showDebug && e.showDebug.indexOf("grid") >= 0 && e.paper.dottedLine({
				x1: e.padding.left,
				x2: e.padding.left + e.controller.width,
				y1: e.y,
				y2: e.y,
				stroke: "#0000aa"
			});
		}
		for (var g, _, v = 2, y = 0, b = 0; b < t.voices.length; b++) {
			var x = t.voices[b].staff, S = t.voices[b].tabNameInfos;
			if (e.y = x.absoluteY, e.controller.classes.incrVoice(), !t.voices[b].duplicate) {
				if (g ||= e.calcY(10), _ = e.calcY(v), x.lines !== 0) {
					x.linePitch && (v = x.linePitch), e.controller.classes.newMeasure();
					var C = a(e, t.startx, t.w, x.lines, x.linePitch, .35);
					_ = C[1], x.bottomLine = _, x.topLine = C[0], x.hasTab && (y = x.topLine), x.hasStaff && (y = x.hasStaff.topLine, t.voices[b].barto = !0, t.voices[b].topLine = g);
				}
				u(e, x.absoluteY, t.brace, b, r), u(e, x.absoluteY, t.bracket, b, r);
			}
			i(e, t.voices[b], y, r, {
				top: p,
				zero: e.y,
				height: t.height * n.STEP
			});
			var w = 0;
			if (S) {
				var T = { rows: [] };
				T.rows.push({ absmove: _ + 2 }), T.rows.push({
					left: t.startx + 8,
					text: S.name,
					font: "tablabelfont",
					klass: "text instrument-name",
					anchor: "start"
				}), T.rows.push({ move: S.textSize.height }), c(e, T), w = S.textSize.height;
			}
			e.controller.classes.newMeasure(), t.voices[b].duplicate || (y = e.calcY(2 + w));
		}
		e.controller.classes.newMeasure();
		var E = t.staffs.length;
		E > 1 && (g = t.staffs[0].topLine, _ = t.staffs[E - 1].bottomLine, s(e, t.startx, .6, g, _, null)), e.y = p;
		function D(t, r) {
			var i = [
				"rgb(207,27,36)",
				"rgb(168,214,80)",
				"rgb(110,161,224)",
				"rgb(191,119,218)",
				"rgb(195,30,151)",
				"rgb(31,170,177)",
				"rgb(220,166,142)"
			];
			if (t.positionY && t.positionY[r]) {
				var a = t.specialY[r] * n.STEP;
				r === "chordHeightAbove" && t.specialY.chordLines && t.specialY.chordLines.above && (a *= t.specialY.chordLines.above), r === "chordHeightBelow" && t.specialY.chordLines && t.specialY.chordLines.below && (a *= t.specialY.chordLines.below), o(e, {
					x: e.padding.left,
					y: e.calcY(t.positionY[r]),
					width: e.controller.width,
					height: a,
					fill: i[f],
					stroke: i[f],
					"fill-opacity": .4,
					"stroke-opacity": .4
				}, r.substr(0, 4)), f += 1, f > 6 && (f = 0);
			}
		}
	}
	function u(e, t, i, a, o) {
		if (i) for (var s = 0; s < i.length; s++) i[s].isStartVoice(a) && (i[s].startY = t - n.STEP * 10, i[s].elemset = r(e, i[s], o));
	}
	function d(e, t, r) {
		for (var i = 0; i < r.length; i++) for (var a = t[r[i]].children, s = 0; s < a.length; s++) {
			var c = a[s], l = c.getFixedCoords();
			if (!(c.invisible || l.t === void 0 || l.b === void 0)) {
				var u = (l.t - l.b) * n.STEP;
				o(e, {
					x: l.x,
					y: e.calcY(l.t),
					width: l.w,
					height: u,
					fill: "#88e888",
					"fill-opacity": .4,
					stroke: "#4aa93d",
					"stroke-opacity": .8
				});
				for (var d = 0; d < c.children.length; d++) {
					var f = c.children[d], p = f.getChordDim();
					if (p) {
						var m = e.calcY(f.pitch);
						m += f.dim.font.size * f.getLane(), o(e, {
							x: p.left,
							y: m,
							width: p.right - p.left,
							height: f.dim.font.size,
							fill: "none",
							stroke: "#4aa93d",
							"stroke-opacity": .8
						});
					}
				}
			}
		}
	}
	t.exports = l;
})), require_set_paper_size = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e, t, n, r) {
		var i = (t + e.padding.left + e.padding.right) * n, a = (e.y + e.padding.bottom) * n;
		if (e.isPrint && (a = Math.max(a, 1056)), e.ariaLabel !== "") {
			var o = "Sheet Music";
			e.abctune && e.abctune.metaText && e.abctune.metaText.title && (o += " for \"" + e.abctune.metaText.title + "\""), e.paper.setTitle(o);
			var s = e.ariaLabel ? e.ariaLabel : o;
			e.paper.setAttribute("aria-label", s);
		}
		e.paper.insertStyles(".abcjs-dragging-in-progress text, .abcjs-dragging-in-progress tspan {" + [
			"-webkit-touch-callout: none;",
			"-webkit-user-select: none;",
			"-khtml-user-select: none;",
			"-moz-user-select: none;",
			"-ms-user-select: none;",
			"user-select: none;"
		].join(" ") + "}");
		var c = { overflow: "hidden" };
		r === "resize" ? e.paper.setResponsiveWidth(i, a) : (c.width = "", c.height = a + "px", n < 1 ? (c.width = i + "px", e.paper.setSize(i / n, a / n)) : e.paper.setSize(i, a)), e.paper.setScale(n), e.paper.setParentStyles(c);
	}
	t.exports = n;
})), require_selectables = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_highlight(), r = require_unhighlight();
	function i(e, t, n) {
		this.elements = [], this.paper = e, this.tuneNumber = n, this.selectTypes = t;
	}
	i.prototype.getElements = function() {
		return this.elements;
	}, i.prototype.add = function(e, t, n, r) {
		if (this.canSelect(e)) {
			var i = this.selectTypes === void 0 ? {
				selectable: !1,
				"data-index": this.elements.length
			} : {
				selectable: !0,
				tabindex: 0,
				"data-index": this.elements.length
			};
			this.paper.setAttributeOnElement(t, i);
			var a = {
				absEl: e,
				svgEl: t,
				isDraggable: n
			};
			r !== void 0 && (a.staffPos = r), this.elements.push(a);
		}
	}, i.prototype.canSelect = function(e) {
		return this.selectTypes === !1 || !e || !e.abcelem ? !1 : this.selectTypes === !0 ? !0 : this.selectTypes === void 0 ? e.abcelem.el_type === "note" || e.abcelem.el_type === "tabNumber" : this.selectTypes.indexOf(e.abcelem.el_type) >= 0;
	}, i.prototype.wrapSvgEl = function(e, t) {
		var i = {
			tuneNumber: this.tuneNumber,
			abcelem: e,
			elemset: [t],
			highlight: n,
			unhighlight: r
		};
		this.add(i, t, !1);
	}, t.exports = i;
})), require_draw = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_staff_group(), r = require_set_paper_size(), i = require_non_music(), a = require_spacing(), o = require_selectables();
	function s(e, t, n, a, s, u, d, f, p, m) {
		var h = new o(e.paper, f, p), g = {};
		t.shouldAddClasses && (g.klass = "abcjs-meta-top"), e.paper.openGroup(g), e.moveY(e.padding.top), i(e, n.topText, h), e.paper.closeGroup(), e.moveY(e.spacing.music);
		for (var _ = [], v = 0, y = 0; y < n.lines.length; y++) {
			t.incrLine();
			var b = n.lines[y];
			if (b.staff) {
				if (v++, n.formatting.maxStaves && v > n.formatting.maxStaves) break;
				t.shouldAddClasses && (g.klass = "abcjs-staff-wrapper abcjs-l" + t.lineNumber), e.paper.openGroup(g), b.vskip && e.moveY(b.vskip), _.length >= 1 && l(e, e.spacing.staffSeparation, _[_.length - 1], b.staffGroup);
				var x = c(e, b.staffGroup, h, y);
				x.line = m + y, _.push(x), e.paper.closeGroup();
			} else b.nonMusic && (t.shouldAddClasses && (g.klass = "abcjs-non-music"), e.paper.openGroup(g), i(e, b.nonMusic, h), e.paper.closeGroup());
		}
		return t.reset(), n.bottomText && n.bottomText.rows && n.bottomText.rows.length > 0 && (t.shouldAddClasses && (g.klass = "abcjs-meta-bottom"), e.paper.openGroup(g), e.moveY(24), i(e, n.bottomText, h), e.paper.closeGroup()), r(e, s, d, u), {
			staffgroups: _,
			selectables: h.getElements()
		};
	}
	function c(e, t, r, i) {
		n(e, t, r, i);
		var o = t.height * a.STEP;
		return e.y += o, t;
	}
	function l(e, t, n, r) {
		var i = -(n.staffs[n.staffs.length - 1].bottom - 2), o = (r.staffs[0].top - 10 + i) * a.STEP;
		o < t && e.moveY(t - o);
	}
	t.exports = s;
})), require_find_selectable_element = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_create_analysis();
	function r(e) {
		for (var t = e; t && t.attributes && t.tagName.toLowerCase() !== "svg" && !t.attributes.selectable;) t = t.parentNode;
		if (t && t.attributes && t.attributes.selectable) {
			var r = t.attributes["data-index"].nodeValue;
			if (r && (r = parseInt(r, 10), r >= 0 && r < this.selectables.length)) {
				var i = this.selectables[r], a = n(i, e);
				return a.index = r, a.element = i, a;
			}
		}
		return null;
	}
	t.exports = r;
})), require_engraver_controller = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_spacing(), r = require_abstract_engraver(), i = require_renderer(), a = require_free_text(), o = require_separator$1(), s = require_subtitle(), c = require_top_text(), l = require_bottom_text(), u = require_selection(), d = require_layout(), f = require_classes(), p = require_get_font_and_attr(), m = require_get_text_size(), h = require_draw(), g = require_abc_tablatures(), v = require_find_selectable_element(), y = function(e, t) {
		t ||= {}, this.findSelectableElement = v, this.oneSvgPerLine = t.oneSvgPerLine, this.selectionColor = t.selectionColor, this.dragColor = t.dragColor ? t.dragColor : t.selectionColor, this.dragging = !!t.dragging, this.selectTypes = t.selectTypes, this.responsive = t.responsive, this.space = 3 * n.SPACE, this.initialClef = t.initialClef, this.timeBasedLayout = t.timeBasedLayout, this.expandToWidest = !!t.expandToWidest, this.scale = t.scale ? parseFloat(t.scale) : 0, this.classes = new f({ shouldAddClasses: t.add_classes }), this.scale > .1 || (this.scale = void 0), t.staffwidth ? (this.staffwidthScreen = t.staffwidth, this.staffwidthPrint = t.staffwidth) : (this.staffwidthScreen = 740, this.staffwidthPrint = 680), this.listeners = [], t.clickListener && this.addSelectListener(t.clickListener), this.renderer = new i(e), this.renderer.setPaddingOverride(t), t.showDebug && (this.renderer.showDebug = t.showDebug), t.jazzchords && (this.jazzchords = t.jazzchords), t.accentAbove && (this.accentAbove = t.accentAbove), t.germanAlphabet && (this.germanAlphabet = t.germanAlphabet), t.lineThickness && (this.lineThickness = t.lineThickness), this.renderer.controller = this, this.renderer.foregroundColor = t.foregroundColor ? t.foregroundColor : "currentColor", t.ariaLabel !== void 0 && (this.renderer.ariaLabel = t.ariaLabel), this.renderer.minPadding = t.minPadding ? t.minPadding : 0, this.reset();
	};
	y.prototype.reset = function() {
		this.selected = [], this.staffgroups = [], this.engraver && this.engraver.reset(), this.engraver = null, this.renderer.reset(), this.dragTarget = null, this.dragIndex = -1, this.dragMouseStart = {
			x: -1,
			y: -1
		}, this.dragYStep = 0, this.lineThickness && this.renderer.setLineThickness(this.lineThickness);
	}, y.prototype.engraveABC = function(e, t, n) {
		e[0] === void 0 && (e = [e]), this.reset();
		for (var r = 0; r < e.length; r++) t === void 0 && (t = r), this.getFontAndAttr = new p(e[r].formatting, this.classes), this.getTextSize = new m(this.getFontAndAttr, this.renderer.paper), this.engraveTune(e[r], t, n);
	}, y.prototype.adjustNonScaledItems = function(e) {
		this.width /= e, this.renderer.adjustNonScaledItems(e);
	}, y.prototype.getMeasureWidths = function(e) {
		this.reset(), this.getFontAndAttr = new p(e.formatting, this.classes), this.getTextSize = new m(this.getFontAndAttr, this.renderer.paper);
		var t = this.jazzchords;
		this.setupTune(e, 0), this.constructTuneElements(e), d(this.renderer, e, 0, this.space, this.timeBasedLayout);
		for (var n = [], r, i = !0, a = 0; a < e.lines.length; a++) {
			var o = e.lines[a];
			if (o.staff) {
				if (i &&= (r = {
					left: 0,
					measureWidths: [],
					total: 0
				}, n.push(r), !1), o.staffGroup.voices.length > 0) for (var s = o.staffGroup.voices[0], c = !1, l = 0, u = 0; u < s.children.length; u++) {
					var f = s.children[u];
					!c && !f.isClef && !f.isKeySig && (c = !0, r.left = f.x, l = f.x), f.type === "bar" && (r.measureWidths.push(f.x - l), r.total += f.x - l, l = f.x);
				}
			} else i = !0;
		}
		return this.jazzchords = t, n;
	}, y.prototype.setupTune = function(e, t) {
		this.classes.reset(), e.formatting.jazzchords !== void 0 && (this.jazzchords = e.formatting.jazzchords), e.formatting.accentAbove !== void 0 && (this.accentAbove = e.formatting.accentAbove), this.renderer.newTune(e), this.engraver = new r(this.getTextSize, t, {
			bagpipes: e.formatting.bagpipes,
			flatbeams: e.formatting.flatbeams,
			graceSlurs: e.formatting.graceSlurs !== !1,
			percmap: e.formatting.percmap,
			initialClef: this.initialClef,
			jazzchords: this.jazzchords,
			timeBasedLayout: this.timeBasedLayout,
			accentAbove: this.accentAbove,
			germanAlphabet: this.germanAlphabet
		}), this.engraver.setStemHeight(this.renderer.spacing.stemHeight), this.engraver.measureLength = e.getMeterFraction().num / e.getMeterFraction().den, e.formatting.staffwidth ? this.width = e.formatting.staffwidth * 1.33 : this.width = this.renderer.isPrint ? this.staffwidthPrint : this.staffwidthScreen;
		var n = e.formatting.scale ? e.formatting.scale : this.scale;
		return this.responsive === "resize" && (n = void 0), n === void 0 && (n = this.renderer.isPrint ? .75 : 1), this.adjustNonScaledItems(n), n;
	}, y.prototype.constructTuneElements = function(e) {
		e.topText = new c(e.metaText, e.metaTextInfo, e.formatting, e.lines, this.width, this.renderer.isPrint, this.renderer.padding.left, this.renderer.spacing, this.classes.shouldAddClasses, this.getTextSize);
		var t, n, r = !1, i = !1;
		for (t = 0; t < e.lines.length; t++) if (n = e.lines[t], n.staff) i = !0, n.staffGroup = this.engraver.createABCLine(n.staff, r ? null : e.metaText.tempo, t), r = !0;
		else if (n.subtitle) {
			if (i) {
				var u = this.width / 2 + this.renderer.padding.left;
				n.nonMusic = new s(this.renderer.spacing.subtitle, e.formatting, n.subtitle, u, this.renderer.padding.left, this.getTextSize);
			}
		} else n.text === void 0 ? n.separator !== void 0 && n.separator.lineLength && (i = !0, n.nonMusic = new o(n.separator.spaceAbove, n.separator.lineLength, n.separator.spaceBelow)) : (i = !0, n.nonMusic = new a(n.text, n.vskip, this.getFontAndAttr, this.renderer.padding.left, this.width, this.getTextSize));
		e.bottomText = new l(e.metaText, this.width, this.renderer.isPrint, this.renderer.padding.left, this.renderer.spacing, this.classes.shouldAddClasses, this.getTextSize);
	}, y.prototype.engraveTune = function(e, t, n) {
		var r = this.jazzchords, i = this.setupTune(e, t);
		this.constructTuneElements(e);
		var a = d(this.renderer, e, this.width, this.space, this.expandToWidest, this.timeBasedLayout);
		if (this.expandToWidest && a > this.width + 1 && (e.topText = new c(e.metaText, e.metaTextInfo, e.formatting, e.lines, a, this.renderer.isPrint, this.renderer.padding.left, this.renderer.spacing, this.classes.shouldAddClasses, this.getTextSize), e.lines && e.lines.length > 0)) for (var o = e.lines.length, s = 0; s < o; ++s) {
			var l = e.lines[s];
			if (l.nonMusic && l.nonMusic.rows && l.nonMusic.rows.length > 0) for (var f = l.nonMusic.rows.length, p = 0; p < f; ++p) {
				var m = l.nonMusic.rows[p];
				m.left && (l.subtitle || l.text && l.text.length > 0 && l.text[0].center) && (m.left = a / 2 + this.renderer.padding.left);
			}
		}
		e.tablatures && g.layoutTablatures(this.renderer, e);
		var _ = h(this.renderer, this.classes, e, this.width, a, this.responsive, i, this.selectTypes, t, n);
		if (this.staffgroups = _.staffgroups, this.selectables = _.selectables, this.oneSvgPerLine) {
			var v = this.renderer.paper.svg.parentNode;
			this.svgs = b(this.renderer, v, e.metaText.title, this.responsive, i);
		} else this.svgs = [this.renderer.paper.svg];
		u(this, this.svgs), this.jazzchords = r;
	};
	function b(e, t, n, r, i) {
		n ||= "Untitled";
		var a = t.querySelector("svg");
		r === "resize" && (t.style.paddingBottom = "");
		for (var o = a.querySelector("style"), s = r === "resize" ? a.viewBox.baseVal.width : a.getAttribute("width"), c = t.querySelectorAll("svg > g"), l = 0, u = [], d = 0; d < c.length; d++) {
			var f = c[d], p = f.getBBox(), m = p.y - l, h = p.height + m, g = document.createElement("div"), _ = "overflow: hidden;";
			r !== "resize" && (_ += "height:" + h * i + "px;"), g.setAttribute("style", _);
			var v = x(a), y = "Sheet Music for \"" + n + "\" section " + (d + 1);
			v.setAttribute("aria-label", y), r !== "resize" && v.setAttribute("height", h), r === "resize" && (v.style.position = "");
			var b = e.firefox112 ? h + 1 : h;
			v.setAttribute("viewBox", "0 " + l + " " + s + " " + b), v.appendChild(o.cloneNode(!0));
			var S = document.createElement("title");
			S.innerText = y, v.appendChild(S), v.appendChild(f), g.appendChild(v), u.push(v), t.appendChild(g), l = p.y + p.height;
		}
		return t.removeChild(a), u;
	}
	function x(e) {
		for (var t = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = 0; n < e.attributes.length; n++) {
			var r = e.attributes[n];
			r.name !== "height" && r.name != "aria-label" && t.setAttribute(r.name, r.value);
		}
		return t;
	}
	y.prototype.getDim = function(e) {
		if (!e.dim) {
			var t = e.svgEl.getBBox();
			e.dim = {
				left: Math.round(t.x),
				top: Math.round(t.y),
				right: Math.round(t.x + t.width),
				bottom: Math.round(t.y + t.height)
			};
		}
		return e.dim;
	}, y.prototype.addSelectListener = function(e) {
		this.listeners[this.listeners.length] = e;
	}, t.exports = y;
})), require_abc_tunebook_svg = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_tunebook();
	require_abc_tune();
	var r = require_engraver_controller(), i = require_abc_parse(), a = require_wrap_lines(), o = {};
	function s() {
		var e = window.innerWidth;
		for (var t in o) if (o.hasOwnProperty(t)) {
			var n = o[t], r = n.offsetLeft;
			e -= r * 2, n.style.width = e + "px";
		}
	}
	try {
		window.addEventListener("resize", s), window.addEventListener("orientationChange", s);
	} catch {}
	function c(e, t, n, i, a) {
		n.viewportHorizontal ? (e.innerHTML = "<div class=\"abcjs-inner\"></div>", n.scrollHorizontal ? (e.style.overflowX = "auto", e.style.overflowY = "hidden") : e.style.overflow = "hidden", o[e.id] = e, e = e.children[0]) : n.viewportVertical ? (e.innerHTML = "<div class=\"abcjs-inner scroll-amount\"></div>", e.style.overflowX = "hidden", e.style.overflowY = "auto", e = e.children[0]) : e.innerHTML = "";
		var s = new r(e, n);
		if (s.engraveABC(t, i, a), t.engraver = s, n.viewportVertical || n.viewportHorizontal) {
			var c = e.parentNode;
			c.style.width = e.style.width;
		}
	}
	var l = function(e, t, r, i, a) {
		var o = {}, s;
		if (r) {
			for (s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
			o.warnings_id && o.tablature && (o.tablature.warning_id = o.warnings_id);
		}
		if (i) for (s in i) i.hasOwnProperty(s) && (s === "listener" ? i[s].highlight && (o.clickListener = i[s].highlight) : o[s] = i[s]);
		if (a) for (s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
		function l(e, t, n, r) {
			var i = !1;
			return e === "*" && (i = !0, e = document.createElement("div"), e.setAttribute("style", "visibility: hidden;"), document.body.appendChild(e)), !i && o.wrap && o.staffwidth ? (t = u(e, t, n, r, o), t) : (o.afterParsing && o.afterParsing(t, n, r), c(e, t, o, n, 0), i && e.parentNode.removeChild(e), null);
		}
		return n.renderEngine(l, e, t, o);
	};
	function u(e, t, n, o, s) {
		var l = new r(e, s).getMeasureWidths(t), u = a.calcLineWraps(t, l, s);
		if (u.reParse) {
			var d = new i();
			d.parse(o, u.revisedParams), t = d.getTune();
			var f = d.getWarnings();
			f && (t.warnings = f);
		}
		return s.afterParsing && s.afterParsing(t, n, o), c(e, t, u.revisedParams, n, 0), t.explanation = u.explanation, t;
	}
	t.exports = l;
})), require_tune_metrics = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_tunebook(), r = require_engraver_controller();
	t.exports = function(e, t) {
		function i(e, n, i, a) {
			e = document.createElement("div"), e.setAttribute("style", "visibility: hidden;"), document.body.appendChild(e);
			var o = new r(e, t).getMeasureWidths(n);
			return e.parentNode.removeChild(e), { sections: o };
		}
		return n.renderEngine(i, "*", e, t);
	};
})), require_sounds_cache = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = {};
})), require_load_note = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sounds_cache();
	t.exports = function(e, t, r, i) {
		n[t] || (n[t] = {});
		var a = n[t];
		return a[r] || (a[r] = new Promise(function(n, a) {
			var o = new XMLHttpRequest();
			let s = e + t + "-mp3/" + r + ".mp3";
			o.open("GET", s, !0), o.responseType = "arraybuffer", o.onload = function() {
				if (o.status !== 200) {
					a(Error("Can't load sound at " + s + " status=" + o.status));
					return;
				}
				var e = i.decodeAudioData(o.response, function(e) {
					n({
						instrument: t,
						name: r,
						status: "loaded",
						audioBuffer: e
					});
				}, function() {
					a(Error("Can't decode sound at " + s));
				});
				e && typeof e.catch == "function" && e.catch(a);
			}, o.onerror = function() {
				a(Error("Can't load sound at " + s));
			}, o.send();
		}).catch((e) => {
			throw console.error("Didn't load note", t, r, ":", e.message), e;
		})), a[r];
	};
})), require_instrument_index_to_name = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = /* @__PURE__ */ "acoustic_grand_piano.bright_acoustic_piano.electric_grand_piano.honkytonk_piano.electric_piano_1.electric_piano_2.harpsichord.clavinet.celesta.glockenspiel.music_box.vibraphone.marimba.xylophone.tubular_bells.dulcimer.drawbar_organ.percussive_organ.rock_organ.church_organ.reed_organ.accordion.harmonica.tango_accordion.acoustic_guitar_nylon.acoustic_guitar_steel.electric_guitar_jazz.electric_guitar_clean.electric_guitar_muted.overdriven_guitar.distortion_guitar.guitar_harmonics.acoustic_bass.electric_bass_finger.electric_bass_pick.fretless_bass.slap_bass_1.slap_bass_2.synth_bass_1.synth_bass_2.violin.viola.cello.contrabass.tremolo_strings.pizzicato_strings.orchestral_harp.timpani.string_ensemble_1.string_ensemble_2.synth_strings_1.synth_strings_2.choir_aahs.voice_oohs.synth_choir.orchestra_hit.trumpet.trombone.tuba.muted_trumpet.french_horn.brass_section.synth_brass_1.synth_brass_2.soprano_sax.alto_sax.tenor_sax.baritone_sax.oboe.english_horn.bassoon.clarinet.piccolo.flute.recorder.pan_flute.blown_bottle.shakuhachi.whistle.ocarina.lead_1_square.lead_2_sawtooth.lead_3_calliope.lead_4_chiff.lead_5_charang.lead_6_voice.lead_7_fifths.lead_8_bass_lead.pad_1_new_age.pad_2_warm.pad_3_polysynth.pad_4_choir.pad_5_bowed.pad_6_metallic.pad_7_halo.pad_8_sweep.fx_1_rain.fx_2_soundtrack.fx_3_crystal.fx_4_atmosphere.fx_5_brightness.fx_6_goblins.fx_7_echoes.fx_8_scifi.sitar.banjo.shamisen.koto.kalimba.bagpipe.fiddle.shanai.tinkle_bell.agogo.steel_drums.woodblock.taiko_drum.melodic_tom.synth_drum.reverse_cymbal.guitar_fret_noise.breath_noise.seashore.bird_tweet.telephone_ring.helicopter.applause.gunshot.percussion".split(".");
})), require_create_note_map = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_instrument_index_to_name();
	t.exports = function(e) {
		for (var t = [], r = 0; r < e.tracks.length; r++) t.push([]);
		var i = n[0];
		return e.tracks.forEach(function(e, r) {
			e.forEach(function(e) {
				switch (e.cmd) {
					case "note":
						var a = e.instrument === void 0 ? i : n[e.instrument];
						if (e.duration > 0) {
							var o = e.gap ? e.gap : 0, s = e.duration;
							o = Math.min(o, s * 2 / 3);
							var c = {
								pitch: e.pitch,
								instrument: a,
								start: Math.round(e.start * 1e6) / 1e6,
								end: Math.round((e.start + s - o) * 1e6) / 1e6,
								volume: e.volume
							};
							e.startChar && (c.startChar = e.startChar), e.endChar && (c.endChar = e.endChar), e.style && (c.style = e.style), e.cents && (c.cents = e.cents), t[r].push(c);
						}
						break;
					case "program":
						i = n[e.instrument];
						break;
					case "text": break;
					default: console.log("Unhandled midi event", e);
				}
			});
		}), t;
	};
})), require_register_audio_context = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e) {
		if (e) window.abcjsAudioContext = e;
		else if (!window.abcjsAudioContext) {
			var t = window.AudioContext || window.webkitAudioContext;
			if (t) window.abcjsAudioContext = new t();
			else return !1;
		}
		return window.abcjsAudioContext.state !== "suspended";
	}
	t.exports = n;
})), require_active_audio_context = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_register_audio_context();
	function r() {
		return window.abcjsAudioContext || n(), window.abcjsAudioContext;
	}
	t.exports = r;
})), require_supports_audio = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_active_audio_context();
	function r() {
		if (!window.Promise || !window.AudioContext && !window.webkitAudioContext && !navigator.mozAudioContext && !navigator.msAudioContext) return !1;
		var e = n();
		if (e) return e.resume !== void 0;
	}
	t.exports = r;
})), require_pitch_to_note_name = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = {
		21: "A0",
		22: "Bb0",
		23: "B0",
		24: "C1",
		25: "Db1",
		26: "D1",
		27: "Eb1",
		28: "E1",
		29: "F1",
		30: "Gb1",
		31: "G1",
		32: "Ab1",
		33: "A1",
		34: "Bb1",
		35: "B1",
		36: "C2",
		37: "Db2",
		38: "D2",
		39: "Eb2",
		40: "E2",
		41: "F2",
		42: "Gb2",
		43: "G2",
		44: "Ab2",
		45: "A2",
		46: "Bb2",
		47: "B2",
		48: "C3",
		49: "Db3",
		50: "D3",
		51: "Eb3",
		52: "E3",
		53: "F3",
		54: "Gb3",
		55: "G3",
		56: "Ab3",
		57: "A3",
		58: "Bb3",
		59: "B3",
		60: "C4",
		61: "Db4",
		62: "D4",
		63: "Eb4",
		64: "E4",
		65: "F4",
		66: "Gb4",
		67: "G4",
		68: "Ab4",
		69: "A4",
		70: "Bb4",
		71: "B4",
		72: "C5",
		73: "Db5",
		74: "D5",
		75: "Eb5",
		76: "E5",
		77: "F5",
		78: "Gb5",
		79: "G5",
		80: "Ab5",
		81: "A5",
		82: "Bb5",
		83: "B5",
		84: "C6",
		85: "Db6",
		86: "D6",
		87: "Eb6",
		88: "E6",
		89: "F6",
		90: "Gb6",
		91: "G6",
		92: "Ab6",
		93: "A6",
		94: "Bb6",
		95: "B6",
		96: "C7",
		97: "Db7",
		98: "D7",
		99: "Eb7",
		100: "E7",
		101: "F7",
		102: "Gb7",
		103: "G7",
		104: "Ab7",
		105: "A7",
		106: "Bb7",
		107: "B7",
		108: "C8",
		109: "Db8",
		110: "D8",
		111: "Eb8",
		112: "E8",
		113: "F8",
		114: "Gb8",
		115: "G8",
		116: "Ab8",
		117: "A8",
		118: "Bb8",
		119: "B8",
		120: "C9",
		121: "Db9"
	};
})), require_download_buffer = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = function(e) {
		return window.URL.createObjectURL(r(e.audioBuffers));
	};
	function r(e) {
		var t = e[0], n = t.numberOfChannels, r = t.length * n * 2 + 44, i = new ArrayBuffer(r), a = new DataView(i), o = [], s, c, l = 0, u = 0;
		for (f(1179011410), f(r - 8), f(1163280727), f(544501094), f(16), d(1), d(n), f(t.sampleRate), f(t.sampleRate * 2 * n), d(n * 2), d(16), f(1635017060), f(r - u - 4), s = 0; s < n; s++) o.push(t.getChannelData(s));
		for (; u < r;) {
			for (s = 0; s < o.length; s++) c = Math.max(-1, Math.min(1, o[s][l])), c = (.5 + c < 0 ? c * 32768 : c * 32767) | 0, a.setInt16(u, c, !0), u += 2;
			l++;
		}
		return new Blob([i], { type: "audio/wav" });
		function d(e) {
			a.setUint16(u, e, !0), u += 2;
		}
		function f(e) {
			a.setUint32(u, e, !0), u += 4;
		}
	}
	t.exports = n;
})), require_cents_to_factor = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e) {
		return 2 ** (e / 1200);
	}
	t.exports = n;
})), require_place_note = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_sounds_cache(), r = require_pitch_to_note_name(), i = require_cents_to_factor();
	function a(e, t, a, s, c, l, u, d, f) {
		var p = window.OfflineAudioContext || window.webkitOfflineAudioContext, m = a.len * a.tempoMultiplier;
		l && (m += l / 1e3), m -= d, m < 0 && (m = .005);
		var h = new p(2, Math.floor((m + u) * t), t), g = r[a.pitch];
		if (!n[a.instrument]) return f && f("placeNote skipped (instrument empty): " + a.instrument + ":" + g), Promise.resolve();
		var _ = n[a.instrument][g];
		return _ ? _.then(function(n) {
			var r = h.createBufferSource();
			r.buffer = n.audioBuffer;
			var d = a.volume / 96 * c;
			r.gainNode = h.createGain(), a.pan && h.createStereoPanner && (r.panNode = h.createStereoPanner(), r.panNode.pan.setValueAtTime(a.pan, 0)), r.gainNode.gain.value = d, r.gainNode.gain.linearRampToValueAtTime(r.gainNode.gain.value, m), r.gainNode.gain.linearRampToValueAtTime(0, m + u), a.cents && (r.playbackRate.value = i(a.cents)), r.panNode ? (r.panNode.connect(h.destination), r.gainNode.connect(r.panNode)) : r.gainNode.connect(h.destination), r.connect(r.gainNode), r.start(0), r.noteOff ? r.noteOff(m + u) : r.stop(m + u);
			var p;
			return h.oncomplete = function(n) {
				if (n.renderedBuffer && n.renderedBuffer.getChannelData) for (var r = 0; r < s.length; r++) {
					var i = s[r] * a.tempoMultiplier;
					l && (i -= l / 1e3), i < 0 && (i = 0), i = Math.floor(i * t), o(e, n.renderedBuffer, i);
				}
				f && f("placeNote: " + a.instrument + ":" + g), p();
			}, h.startRendering(), new Promise(function(e) {
				p = e;
			});
		}).catch(function(e) {
			return f && f("placeNote catch: " + e.message), Promise.reject(e);
		}) : (f && f("placeNote skipped: " + a.instrument + ":" + g), Promise.resolve());
	}
	var o = function(e, t, n) {
		for (var r = 0; r < 2; r++) for (var i = t.getChannelData(r), a = e.getChannelData(r), o = 0; o < i.length; o++) a[o + n] += i[o];
	};
	t.exports = a;
})), require_create_synth = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_load_note(), r = require_create_note_map(), i = require_register_audio_context(), a = require_active_audio_context(), o = require_supports_audio(), s = require_pitch_to_note_name(), c = require_instrument_index_to_name(), l = require_download_buffer(), u = require_place_note(), d = require_sounds_cache(), f = "MIDI is not supported in this browser.", p = "https://paulrosen.github.io/midi-js-soundfonts/abcjs/", m = "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/", h = "https://paulrosen.github.io/midi-js-soundfonts/MusyngKite/";
	function g() {
		var e = this;
		e.audioBufferPossible = void 0, e.directSource = [], e.startTimeSec = void 0, e.pausedTimeSec = void 0, e.audioBuffers = [], e.duration = void 0, e.isRunning = !1, e.options = {}, e.pickupLength = 0, e.init = function(t) {
			t ||= {}, t.options && (e.options = t.options), i(t.audioContext);
			var n = a().currentTime;
			if (e.debugCallback = t.debugCallback, e.debugCallback && e.debugCallback("init called"), e.audioBufferPossible = e._deviceCapable(), !e.audioBufferPossible) return Promise.reject({
				status: "NotSupported",
				message: f
			});
			var r = t.options ? t.options : {};
			e.soundFontUrl = r.soundFontUrl ? r.soundFontUrl : m, e.soundFontUrl[e.soundFontUrl.length - 1] !== "/" && (e.soundFontUrl += "/"), r.soundFontVolumeMultiplier || r.soundFontVolumeMultiplier === 0 ? e.soundFontVolumeMultiplier = r.soundFontVolumeMultiplier : e.soundFontUrl === m || e.soundFontUrl === h ? e.soundFontVolumeMultiplier = 3 : e.soundFontUrl === p ? e.soundFontVolumeMultiplier = .4 : e.soundFontVolumeMultiplier = 1, r.programOffsets ? e.programOffsets = r.programOffsets : e.soundFontUrl === p ? e.programOffsets = {
				bright_acoustic_piano: 20,
				honkytonk_piano: 20,
				electric_piano_1: 30,
				electric_piano_2: 30,
				harpsichord: 40,
				clavinet: 20,
				celesta: 20,
				glockenspiel: 40,
				vibraphone: 30,
				marimba: 35,
				xylophone: 30,
				tubular_bells: 35,
				dulcimer: 30,
				drawbar_organ: 20,
				percussive_organ: 25,
				rock_organ: 20,
				church_organ: 40,
				reed_organ: 40,
				accordion: 40,
				harmonica: 40,
				acoustic_guitar_nylon: 20,
				acoustic_guitar_steel: 30,
				electric_guitar_jazz: 25,
				electric_guitar_clean: 15,
				electric_guitar_muted: 35,
				overdriven_guitar: 25,
				distortion_guitar: 20,
				guitar_harmonics: 30,
				electric_bass_finger: 15,
				electric_bass_pick: 30,
				fretless_bass: 40,
				violin: 105,
				viola: 50,
				cello: 40,
				contrabass: 60,
				trumpet: 10,
				trombone: 90,
				alto_sax: 20,
				tenor_sax: 20,
				clarinet: 20,
				flute: 50,
				banjo: 50,
				woodblock: 20
			} : e.programOffsets = {};
			var o = r.fadeLength === void 0 ? NaN : parseInt(r.fadeLength, 10);
			if (e.fadeLength = isNaN(o) ? 200 : o, o = r.noteEnd === void 0 ? NaN : parseInt(r.noteEnd, 10), e.noteEnd = isNaN(o) ? 0 : o, e.pan = r.pan, e.meterSize = 1, t.visualObj) e.flattened = t.visualObj.setUpAudio(r), t.visualObj.getMeterFraction().den && (e.meterSize = t.visualObj.getMeterFraction().num / t.visualObj.getMeterFraction().den), e.pickupLength = t.visualObj.getPickupLength();
			else if (t.sequence) e.flattened = t.sequence;
			else return Promise.reject(/* @__PURE__ */ Error("Must pass in either a visualObj or a sequence"));
			e.millisecondsPerMeasure = t.millisecondsPerMeasure ? t.millisecondsPerMeasure : t.visualObj ? t.visualObj.millisecondsPerMeasure(e.flattened.tempo) : 1e3, e.beatsPerMeasure = t.visualObj ? t.visualObj.getBeatsPerMeasure() : 4, e.sequenceCallback = r.sequenceCallback, e.callbackContext = r.callbackContext, e.onEnded = r.onEnded, e.meterFraction = t.visualObj ? t.visualObj.getMeterFraction() : { den: 1 };
			var l = {}, u = [], g = [], _ = c[0];
			e.flattened.tracks.forEach(function(e) {
				e.forEach(function(e) {
					if (e.cmd === "program" && c[e.instrument] && (_ = c[e.instrument]), e.pitch !== void 0) {
						var t = e.pitch, n = s[t], r = e.instrument === void 0 ? _ : c[e.instrument];
						if (n) if (l[r] || (l[r] = {}), !d[r] || !d[r][n]) l[r][n] = !0;
						else {
							var i = r + ":" + n;
							u.indexOf(i) < 0 && u.push(i);
						}
						else {
							var a = r + ":" + n;
							console.log("Can't find note: ", t, a), g.indexOf(a) < 0 && g.push(a);
						}
					}
				});
			}), e.debugCallback && e.debugCallback("note gathering time = " + Math.floor((a().currentTime - n) * 1e3) + "ms"), n = a().currentTime;
			var v = [];
			Object.keys(l).forEach(function(e) {
				Object.keys(l[e]).forEach(function(t) {
					v.push({
						instrument: e,
						note: t
					});
				});
			}), e.debugCallback && e.debugCallback("notes " + JSON.stringify(v));
			for (var y = [], b = 256, x = 0; x < v.length; x += b) y.push(v.slice(x, x + b));
			return new Promise(function(t, r) {
				var i = {
					cached: u,
					error: g,
					loaded: []
				}, o = 0, s = function() {
					e.debugCallback && e.debugCallback("loadBatch idx=" + o + " len=" + y.length), o < y.length ? e._loadBatch(y[o], e.soundFontUrl, n).then(function(t) {
						e.debugCallback && e.debugCallback("loadBatch then"), n = a().currentTime, t && (t.error && (i.error = i.error.concat(t.error)), t.loaded && (i.loaded = i.loaded.concat(t.loaded))), o++, s();
					}, r) : (e.debugCallback && e.debugCallback("resolve init"), t(i));
				};
				s();
			});
		}, e._loadBatch = (function(t, r, i, o) {
			var s = [];
			return t.forEach(function(t) {
				e.debugCallback && e.debugCallback("getNote " + t.instrument + ":" + t.note), s.push(n(r, t.instrument, t.note, a()));
			}), Promise.all(s).then(function(n) {
				e.debugCallback && e.debugCallback("mp3 load time = " + Math.floor((a().currentTime - i) * 1e3) + "ms");
				for (var s = [], c = [], l = [], u = [], d = 0; d < n.length; d++) {
					var f = n[d], p = f.instrument + ":" + f.name;
					f.status === "loaded" ? s.push(p) : f.status === "pending" ? l.push(p) : f.status === "cached" ? c.push(p) : u.push(p + " " + f.message);
				}
				if (l.length > 0) {
					if (e.debugCallback && e.debugCallback("pending " + JSON.stringify(l)), o ? o *= 2 : o = 50, o < 9e4) return new Promise(function(t, n) {
						setTimeout(function() {
							var a = [];
							for (d = 0; d < l.length; d++) p = l[d].split(":"), a.push({
								instrument: p[0],
								note: p[1]
							});
							e.debugCallback && e.debugCallback("retry " + JSON.stringify(a)), e._loadBatch(a, r, i, o).then(function(e) {
								t(e);
							}).catch(function(e) {
								n(e);
							});
						}, o);
					});
					for (var m = [], h = 0; h < t.length; h++) m.push(t[h].instrument + "/" + t[h].note);
					return e.debugCallback && e.debugCallback("loadBatch timeout"), Promise.reject(/* @__PURE__ */ Error("timeout attempting to load: " + m.join(", ")));
				} else return e.debugCallback && e.debugCallback("loadBatch resolve"), Promise.resolve({
					loaded: s,
					cached: c,
					error: u
				});
			}).catch(function(t) {
				e.debugCallback && e.debugCallback("loadBatch catch " + t.message);
			});
		}), e.prime = function() {
			var n = e.fadeLength / 1e3;
			return e.isRunning = !1, e.audioBufferPossible ? (e.debugCallback && e.debugCallback("prime called"), new Promise(function(i, o) {
				try {
					var s = a().currentTime, c = e.millisecondsPerMeasure / 1e3 / e.meterSize;
					if (e.duration = e.flattened.totalDuration * c, e.duration <= 0) return e.audioBuffers = [], i({
						status: "empty",
						seconds: 0
					});
					e.duration += n;
					var l = Math.floor(a().sampleRate * e.duration);
					e.stop();
					var d = r(e.flattened);
					e.options.swing && g(d, e.options.swing, e.meterFraction, e.pickupLength), e.sequenceCallback && e.sequenceCallback(d, e.callbackContext);
					var f = t(d.length, e.pan), p = {};
					d.forEach(function(t, n) {
						var r = f && f.length > n ? f[n] : 0;
						t.forEach(function(t) {
							var n = t.instrument + ":" + t.pitch + ":" + t.volume + ":" + Math.round((t.end - t.start) * 1e3) / 1e3 + ":" + r + ":" + c + ":" + (t.cents ? t.cents : 0);
							e.debugCallback && e.debugCallback("noteMapTrack " + n), p[n] || (p[n] = []), p[n].push(t.start);
						});
					});
					for (var m = [], h = a().createBuffer(2, l, a().sampleRate), _ = 0; _ < Object.keys(p).length; _++) {
						var v = Object.keys(p)[_], y = v.split(":"), b = y[6] === void 0 ? 0 : parseFloat(y[6]);
						y = {
							instrument: y[0],
							pitch: parseInt(y[1], 10),
							volume: parseInt(y[2], 10),
							len: parseFloat(y[3]),
							pan: parseFloat(y[4]),
							tempoMultiplier: parseFloat(y[5]),
							cents: b
						}, m.push(u(h, a().sampleRate, y, p[v], e.soundFontVolumeMultiplier, e.programOffsets[y.instrument], n, e.noteEnd / 1e3, e.debugCallback));
					}
					e.audioBuffers = [h], e.debugCallback && (e.debugCallback("sampleRate = " + a().sampleRate), e.debugCallback("totalSamples = " + l), e.debugCallback("creationTime = " + Math.floor((a().currentTime - s) * 1e3) + "ms"));
					function x(e) {
						var t = e && e.audioBuffers && e.audioBuffers.length > 0 ? e.audioBuffers[0].duration : 0;
						return {
							status: a().state,
							duration: t
						};
					}
					Promise.all(m).then(function() {
						a().state === "suspended" ? a().resume().then(function() {
							i(x(e));
						}) : a().state === "interrupted" ? a().suspend().then(function() {
							a().resume().then(function() {
								i(x(e));
							});
						}) : i(x(e));
					}).catch(function(e) {
						o(e);
					});
				} catch (e) {
					o(e);
				}
			})) : Promise.reject(Error(f));
		};
		function t(e, t) {
			if (t == null) return null;
			var n = [];
			if (t.length) {
				for (var r = 0; r < e; r++) if (r < t.length) {
					var i = parseFloat(t[r]);
					i < -1 ? i = -1 : i > 1 && (i = 1), n.push(i);
				} else n.push(0);
				return n;
			} else {
				var a = parseFloat(t);
				if (a * (e - 1) > 2) return null;
				for (var o = e % 2 == 0, s = o ? 0 - a / 2 : 0, c = s + a, l = 0; l < e; l++) o = l % 2 == 0, o ? (n.push(s), s -= a) : (n.push(c), c += a);
				return n;
			}
			return null;
		}
		e.start = function() {
			if (!e.audioBufferPossible) throw Error(f);
			e.debugCallback && e.debugCallback("start called");
			var t = e.pausedTimeSec ? e.pausedTimeSec : 0;
			e._kickOffSound(t), e.startTimeSec = a().currentTime - t, e.pausedTimeSec = void 0, e.debugCallback && e.debugCallback("MIDI STARTED", e.startTimeSec);
		}, e.pause = function() {
			if (!e.audioBufferPossible) throw Error(f);
			return e.debugCallback && e.debugCallback("pause called"), e.pausedTimeSec = e.stop(), e.pausedTimeSec;
		}, e.resume = function() {
			e.start();
		}, e.seek = function(t, n) {
			var r;
			switch (n) {
				case "seconds":
					r = t;
					break;
				case "beats":
					r = t * e.millisecondsPerMeasure / e.beatsPerMeasure / 1e3;
					break;
				default:
					r = (e.duration - e.fadeLength / 1e3) * t;
					break;
			}
			if (!e.audioBufferPossible) throw Error(f);
			e.debugCallback && e.debugCallback("seek called sec=" + r), e.isRunning ? (e.stop(), e._kickOffSound(r)) : e.pausedTimeSec = r, e.pausedTimeSec = r;
		}, e.stop = function() {
			return e.isRunning = !1, e.pausedTimeSec = void 0, e.directSource.forEach(function(e) {
				try {
					e.stop();
				} catch (e) {
					console.log("direct source didn't stop:", e);
				}
			}), e.directSource = [], a().currentTime - e.startTimeSec;
		}, e.finished = function() {
			e.startTimeSec = void 0, e.pausedTimeSec = void 0, e.isRunning = !1;
		}, e.download = function() {
			return l(e);
		}, e.getAudioBuffer = function() {
			return e.audioBuffers[0];
		}, e.getIsRunning = function() {
			return e.isRunning;
		}, e._deviceCapable = function() {
			return o() ? !0 : (console.warn(f), e.debugCallback && e.debugCallback(f), !1);
		}, e._kickOffSound = function(t) {
			e.isRunning = !0, e.directSource = [], e.audioBuffers.forEach(function(t, n) {
				e.directSource[n] = a().createBufferSource(), e.directSource[n].buffer = t, e.directSource[n].connect(a().destination);
			}), e.directSource.forEach(function(e) {
				e.start(0, t);
			}), e.onEnded && (e.directSource[0].onended = function() {
				e.onEnded(e.callbackContext);
			});
		};
		function g(e, t, n, r) {
			if (!(n.den != 4 && n.den != 8) && (t = parseFloat(t), !(isNaN(t) || t <= 50))) {
				t > 75 && (t = 75), t = t / 50 - 1;
				var i = 0, a = .25;
				n.den === 8 && (a /= 2);
				for (var o = a / 2, s = o * t, c = 0; c < e.length; c++) for (var l = e[c], u = 0; u < l.length; u++) {
					var d = l[u];
					if ((d.start - r) % o == 0 && (d.start - r) % a != 0 && (u == 0 || l[u - 1].start <= l[u].start - o) && (u == l.length - 1 || l[u + 1].start >= l[u].start + o)) {
						var f = d.start;
						d.start += s, d.volume *= 1 + i, u > 0 && l[u - 1].end == f && (l[u - 1].end = d.start, l[u - 1].volume *= 1 - i);
					}
				}
			}
		}
	}
	t.exports = g;
})), require_synth_sequence = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function() {
		var e = this;
		e.tracks = [], e.totalDuration = 0, e.currentInstrument = [], e.starts = [], e.addTrack = function() {
			return e.tracks.push([]), e.currentInstrument.push(0), e.starts.push(0), e.tracks.length - 1;
		}, e.setInstrument = function(t, n) {
			e.tracks[t].push({
				channel: 0,
				cmd: "program",
				instrument: n
			}), e.currentInstrument[t] = n;
		}, e.appendNote = function(t, n, r, i, a) {
			var o = {
				cmd: "note",
				duration: r,
				gap: 0,
				instrument: e.currentInstrument[t],
				pitch: n,
				start: e.starts[t],
				volume: i
			};
			a && (o.cents = a), e.tracks[t].push(o), e.starts[t] += r, e.totalDuration = Math.max(e.totalDuration, e.starts[t]);
		};
	};
})), require_loop_svg = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = "\n<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 700\" preserveAspectRatio=\"xMidYMid meet\">\n	<g transform=\"translate(0,700) scale(0.1,-0.1)\" >\n	<path d=\"M3111 6981 c-20 -37 -90 -55 -364 -96 -120 -18 -190 -33 -244 -55\n	-42 -17 -124 -42 -182 -56 -78 -18 -119 -34 -157 -60 -28 -19 -86 -46 -128\n	-60 -43 -13 -107 -42 -144 -64 -37 -23 -84 -46 -106 -52 -21 -7 -56 -29 -79\n	-50 -22 -22 -61 -50 -86 -63 -26 -13 -67 -40 -91 -60 -24 -20 -65 -47 -90 -60\n	-25 -13 -53 -31 -61 -41 -8 -9 -32 -30 -54 -46 -75 -54 -486 -460 -512 -507\n	-15 -25 -48 -69 -75 -98 -26 -28 -48 -57 -48 -63 0 -6 -18 -29 -39 -53 -21\n	-23 -56 -71 -77 -107 -20 -36 -50 -80 -65 -97 -16 -18 -33 -52 -40 -75 -12\n	-47 -47 -115 -84 -166 -13 -18 -30 -56 -38 -83 -8 -27 -34 -80 -56 -118 -33\n	-53 -46 -91 -62 -167 -12 -63 -34 -127 -59 -179 -42 -84 -60 -166 -60 -270 0\n	-90 26 -122 125 -154 54 -17 96 -19 430 -20 305 -1 381 2 430 14 82 22 140 51\n	153 78 6 12 22 47 37 77 14 30 38 77 54 103 15 27 34 73 40 103 7 30 28 78 48\n	107 19 28 44 74 55 101 10 28 34 67 53 87 18 20 49 61 68 90 19 30 44 63 57\n	74 13 11 36 40 52 65 59 94 232 270 306 313 20 11 57 37 82 58 25 20 70 52\n	100 72 30 19 66 47 79 61 13 14 49 35 80 46 30 12 80 37 111 56 31 19 95 45\n	143 58 48 12 110 37 139 55 63 40 127 55 323 76 83 9 208 28 279 41 156 29\n	165 29 330 4 453 -71 514 -84 606 -130 31 -16 83 -36 116 -45 32 -9 84 -34\n	115 -56 31 -21 82 -48 113 -60 32 -11 72 -33 89 -48 18 -16 59 -45 92 -65 33\n	-21 74 -51 90 -66 17 -15 49 -40 73 -54 52 -32 65 -61 50 -113 -8 -31 -61 -90\n	-277 -308 -300 -303 -361 -382 -369 -481 -2 -29 0 -66 6 -81 13 -40 88 -138\n	115 -151 12 -6 54 -26 92 -44 l70 -33 945 -2 c520 -1 975 2 1012 7 64 8 191\n	50 231 76 11 7 33 34 50 60 22 34 42 51 65 58 l32 9 0 1101 0 1102 -32 9 c-21\n	7 -44 26 -64 55 -60 84 -77 97 -140 110 -44 9 -76 10 -127 2 -59 -9 -77 -17\n	-134 -62 -37 -28 -172 -155 -301 -281 -129 -127 -249 -237 -267 -245 -25 -10\n	-41 -11 -71 -2 -58 15 -112 45 -124 69 -6 11 -35 35 -64 54 -28 18 -58 41 -66\n	50 -8 9 -41 35 -75 58 -33 22 -77 56 -99 75 -21 18 -64 46 -95 61 -31 14 -73\n	39 -93 55 -20 15 -70 40 -110 55 -40 15 -97 44 -127 64 -29 21 -78 44 -107 53\n	-30 8 -77 31 -105 51 -42 28 -73 39 -173 60 -68 14 -154 39 -196 58 -95 43\n	-131 51 -343 76 -209 24 -242 32 -279 70 l-30 29 -328 0 c-312 0 -330 -1 -339\n	-19z\"></path>\n	<path d=\"M254 2875 c-89 -16 -107 -26 -145 -78 -32 -44 -62 -66 -91 -67 -17 0\n	-18 -61 -18 -1140 l0 -1140 24 0 c16 0 41 -17 72 -50 40 -42 61 -55 117 -72\n	l69 -21 82 23 c44 12 96 30 114 39 18 9 148 132 290 272 141 141 267 261 279\n	268 51 26 86 14 176 -61 32 -26 62 -48 66 -48 5 0 36 -25 70 -55 34 -30 74\n	-61 89 -69 15 -8 37 -28 50 -45 12 -17 50 -45 84 -62 34 -17 78 -44 98 -60 19\n	-16 61 -37 93 -48 32 -11 81 -37 107 -56 27 -20 76 -45 109 -56 33 -12 75 -31\n	93 -44 62 -45 93 -58 191 -82 54 -12 130 -37 168 -54 68 -29 180 -58 226 -59\n	62 0 183 -64 183 -96 0 -12 88 -14 639 -14 l639 0 12 30 c18 44 76 66 233 89\n	89 14 160 30 200 47 34 15 106 42 159 60 54 18 112 44 130 57 47 35 85 52 146\n	67 29 7 76 28 105 48 29 20 77 48 107 63 30 15 66 39 80 54 14 15 50 40 81 56\n	31 15 78 46 104 69 26 22 61 46 79 54 17 7 43 26 56 42 14 16 41 41 60 56 64\n	48 380 362 408 405 15 23 40 51 55 63 15 12 36 38 46 58 11 21 37 57 58 82 22\n	25 49 62 62 83 13 20 38 56 57 78 19 23 50 74 69 113 19 39 46 86 59 104 14\n	18 34 62 46 98 12 36 32 77 45 92 31 38 60 97 80 167 9 33 26 76 37 95 29 50\n	47 103 68 206 10 52 32 117 51 155 29 56 33 74 34 140 0 94 -10 108 -101 138\n	-61 20 -83 21 -463 21 -226 0 -421 -4 -451 -10 -63 -12 -86 -30 -110 -85 -10\n	-22 -33 -63 -52 -92 -21 -31 -42 -80 -53 -123 -11 -44 -32 -93 -56 -128 -20\n	-32 -47 -83 -59 -115 -12 -32 -37 -77 -56 -100 -19 -23 -50 -65 -69 -94 -19\n	-29 -44 -57 -54 -63 -11 -5 -29 -27 -42 -47 -52 -85 -234 -277 -300 -315 -25\n	-15 -53 -38 -62 -51 -9 -14 -42 -39 -74 -57 -32 -18 -75 -48 -95 -66 -21 -18\n	-59 -44 -85 -58 -26 -13 -72 -40 -100 -59 -35 -24 -78 -41 -128 -52 -47 -11\n	-99 -31 -139 -56 -69 -42 -94 -49 -391 -110 -245 -51 -425 -66 -595 -50 -168\n	16 -230 27 -330 61 -47 16 -123 35 -170 44 -98 17 -123 25 -172 58 -20 14 -71\n	37 -114 53 -44 15 -95 40 -115 56 -20 16 -70 42 -110 59 -40 16 -88 45 -108\n	63 -20 19 -55 46 -78 61 -24 14 -49 35 -55 47 -7 11 -34 33 -60 49 -50 31 -65\n	61 -53 102 4 13 130 147 281 298 236 238 277 283 299 335 15 32 35 71 46 86\n	12 18 19 44 19 76 0 42 -8 63 -53 138 -92 151 11 139 -1207 141 -798 2 -1030\n	0 -1086 -11z\"></path>\n	</g>\n</svg>\n";
})), require_play_svg = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" class=\"abcjs-play-svg\">\n    <g>\n    <polygon points=\"4 0 23 12.5 4 25\"/>\n    </g>\n</svg>\n";
})), require_pause_svg = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" class=\"abcjs-pause-svg\">\n  <g>\n    <rect width=\"8.23\" height=\"25\"/>\n    <rect width=\"8.23\" height=\"25\" x=\"17\"/>\n  </g>\n</svg>\n";
})), require_loading_svg = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" class=\"abcjs-loading-svg\">\n    <circle cx=\"50\" cy=\"50\" fill=\"none\" stroke-width=\"20\" r=\"35\" stroke-dasharray=\"160 55\"></circle>\n</svg>\n";
})), require_reset_svg = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\">\n  <g>\n    <polygon points=\"5 12.5 24 0 24 25\"/>\n    <rect width=\"3\" height=\"25\" x=\"0\" y=\"0\"/>\n  </g>\n</svg>\n";
})), require_create_synth_control = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_supports_audio(), r = require_register_audio_context(), i = require_active_audio_context(), a = require_loop_svg(), o = require_play_svg(), s = require_pause_svg(), c = require_loading_svg(), l = require_reset_svg();
	function u(e, t) {
		var n = this;
		if (typeof e == "string") {
			var a = e;
			if (e = document.querySelector(a), !e) throw Error("Cannot find element \"" + a + "\" in the DOM.");
		} else if (!(e instanceof HTMLElement)) throw Error("The first parameter must be a valid element or selector in the DOM.");
		if (n.parent = e, n.options = {}, t && (n.options = Object.assign({}, t)), n.options.ac && r(n.options.ac), d(n.parent, n.options), m(n), n.disable = function(e) {
			var t = n.parent.querySelector(".abcjs-inline-audio");
			e ? t.classList.add("abcjs-disabled") : t.classList.remove("abcjs-disabled");
		}, n.setWarp = function(e, t) {
			var r = n.parent.querySelector(".abcjs-midi-tempo");
			r.value = Math.round(t), n.setTempo(e);
		}, n.setTempo = function(e) {
			var t = n.parent.querySelector(".abcjs-midi-current-tempo");
			t && (t.innerHTML = Math.round(e));
		}, n.resetAll = function() {
			for (var e = n.parent.querySelectorAll(".abcjs-pushed"), t = 0; t < e.length; t++) e[t].classList.remove("abcjs-pushed");
		}, n.pushPlay = function(e) {
			var t = n.parent.querySelector(".abcjs-midi-start");
			t && (e ? t.classList.add("abcjs-pushed") : t.classList.remove("abcjs-pushed"));
		}, n.pushLoop = function(e) {
			var t = n.parent.querySelector(".abcjs-midi-loop");
			t && (e ? t.classList.add("abcjs-pushed") : t.classList.remove("abcjs-pushed"));
		}, n.setProgress = function(e, t) {
			var r = n.parent.querySelector(".abcjs-midi-progress-background"), i = n.parent.querySelector(".abcjs-midi-progress-indicator");
			if (!(!r || !i)) {
				var a = r.clientWidth * e;
				i.style.left = a + "px";
				var o = n.parent.querySelector(".abcjs-midi-clock");
				if (o) {
					var s = t * e / 1e3, c = Math.floor(s / 60), l = Math.floor(s % 60), u = l < 10 ? "0" + l : l;
					o.innerHTML = c + ":" + u;
				}
			}
		}, n.options.afterResume) {
			var o = !1;
			n.options.ac ? o = n.options.ac.state !== "suspended" : i() && (o = i().state !== "suspended"), o && n.options.afterResume();
		}
	}
	function d(e, t) {
		var n = !!t.loopHandler, r = !!t.restartHandler, i = !!t.playHandler || !!t.playPromiseHandler, u = !!t.progressHandler, d = !!t.warpHandler, f = t.hasClock !== !1, p = "<div class=\"abcjs-inline-audio\">\n";
		if (n) {
			var m = t.repeatTitle ? t.repeatTitle : "Click to toggle play once/repeat.", h = t.repeatAria ? t.repeatAria : m;
			p += "<button type=\"button\" class=\"abcjs-midi-loop abcjs-btn\" title=\"" + m + "\" aria-label=\"" + h + "\">" + a + "</button>\n";
		}
		if (r) {
			var g = t.restartTitle ? t.restartTitle : "Click to go to beginning.", _ = t.restartAria ? t.restartAria : g;
			p += "<button type=\"button\" class=\"abcjs-midi-reset abcjs-btn\" title=\"" + g + "\" aria-label=\"" + _ + "\">" + l + "</button>\n";
		}
		if (i) {
			var v = t.playTitle ? t.playTitle : "Click to play/pause.", y = t.playAria ? t.playAria : v;
			p += "<button type=\"button\" class=\"abcjs-midi-start abcjs-btn\" title=\"" + v + "\" aria-label=\"" + y + "\">" + o + s + c + "</button>\n";
		}
		if (u) {
			var b = t.randomTitle ? t.randomTitle : "Click to change the playback position.", x = t.randomAria ? t.randomAria : b;
			p += "<button type=\"button\" class=\"abcjs-midi-progress-background\" title=\"" + b + "\" aria-label=\"" + x + "\"><span class=\"abcjs-midi-progress-indicator\"></span></button>\n";
		}
		if (f && (p += "<span class=\"abcjs-midi-clock\"></span>\n"), d) {
			var S = t.warpTitle ? t.warpTitle : "Change the playback speed.", C = t.warpAria ? t.warpAria : S, w = t.bpm ? t.bpm : "BPM";
			p += "<span class=\"abcjs-tempo-wrapper\"><label><input class=\"abcjs-midi-tempo\" type=\"number\" min=\"1\" max=\"300\" value=\"100\" title=\"" + S + "\" aria-label=\"" + C + "\">%</label><span>&nbsp;(<span class=\"abcjs-midi-current-tempo\"></span> " + w + ")</span></span>\n";
		}
		p += "<div class=\"abcjs-css-warning\" style=\"font-size: 12px;color:red;border: 1px solid red;text-align: center;width: 300px;margin-top: 4px;font-weight: bold;border-radius: 4px;\">CSS required: load abcjs-audio.css</div>", p += "</div>\n", e.innerHTML = p;
	}
	function f(e, t, a, o, s) {
		var c = !0;
		if (i() ? c = i().state === "suspended" : r(), !n()) throw {
			status: "NotSupported",
			message: "This browser does not support audio."
		};
		(c || s) && a && a.classList.add("abcjs-loading"), c ? i().resume().then(function() {
			o ? o().then(function(n) {
				p(e, t, a, s);
			}) : p(e, t, a, s);
		}) : p(e, t, a, s);
	}
	function p(e, t, n, r) {
		r ? e(t).then(function() {
			n && n.classList.remove("abcjs-loading");
		}) : (e(t), n && n.classList.remove("abcjs-loading"));
	}
	function m(e) {
		var t = !!e.options.loopHandler, n = !!e.options.restartHandler, r = !!e.options.playHandler || !!e.options.playPromiseHandler, i = !!e.options.progressHandler, a = !!e.options.warpHandler, o = e.parent.querySelector(".abcjs-midi-start");
		t && e.parent.querySelector(".abcjs-midi-loop").addEventListener("click", function(t) {
			f(e.options.loopHandler, t, o, e.options.afterResume);
		}), n && e.parent.querySelector(".abcjs-midi-reset").addEventListener("click", function(t) {
			f(e.options.restartHandler, t, o, e.options.afterResume);
		}), r && o.addEventListener("click", function(t) {
			f(e.options.playPromiseHandler || e.options.playHandler, t, o, e.options.afterResume, !!e.options.playPromiseHandler);
		}), i && e.parent.querySelector(".abcjs-midi-progress-background").addEventListener("click", function(t) {
			f(e.options.progressHandler, t, o, e.options.afterResume);
		}), a && e.parent.querySelector(".abcjs-midi-tempo").addEventListener("change", function(t) {
			f(e.options.warpHandler, t, o, e.options.afterResume);
		});
	}
	t.exports = u;
})), require_play_event = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_synth_sequence(), r = require_create_synth(), i = require_active_audio_context();
	function a(e, t, r, a, s) {
		for (var c = new n(), l = 0; l < e.length; l++) {
			var u = e[l], d = c.addTrack();
			if (c.setInstrument(d, u.instrument), l === 0 && t) for (var f = 0; f < t.length; f++) {
				var p = t[f];
				c.appendNote(d, p.pitch, 1 / 64, p.volume, p.cents);
			}
			c.appendNote(d, u.pitch, u.duration, u.volume, u.cents);
		}
		var m = i();
		return m.state === "suspended" ? m.resume().then(function() {
			return o(c, r, a, s);
		}) : o(c, r, a, s);
	}
	function o(e, t, n, i) {
		var a = new r();
		return a.init({
			sequence: e,
			millisecondsPerMeasure: t,
			options: { soundFontUrl: n },
			debugCallback: i
		}).then(function() {
			return a.prime();
		}).then(function() {
			return a.start(), Promise.resolve();
		});
	}
	t.exports = a;
})), require_synth_controller = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var r = require_create_synth_control(), i = require_create_synth(), a = require_abc_timing_callbacks(), o = require_active_audio_context();
	function s() {
		var e = this;
		e.warp = 100, e.cursorControl = null, e.visualObj = null, e.timer = null, e.midiBuffer = null, e.options = null, e.currentTempo = null, e.control = null, e.isLooping = !1, e.isStarted = !1, e.isLoaded = !1, e.isLoading = !1, e.load = function(t, n, i) {
			i ||= {}, i.displayPlay === void 0 && (i.displayPlay = !0), i.displayProgress === void 0 && (i.displayProgress = !0), e.control = new r(t, {
				loopHandler: i.displayLoop ? e.toggleLoop : void 0,
				restartHandler: i.displayRestart ? e.restart : void 0,
				playPromiseHandler: i.displayPlay ? e.play : void 0,
				progressHandler: i.displayProgress ? e.randomAccess : void 0,
				warpHandler: i.displayWarp ? e.onWarp : void 0,
				afterResume: e.init
			}), e.cursorControl = n, e.disable(!0);
		}, e.disable = function(t) {
			e.control && e.control.disable(t);
		}, e.setTune = function(t, n, r) {
			return e.visualObj = t, e.disable(!1), e.options = r || {}, e.control && (e.pause(), e.setProgress(0, 1), e.control.resetAll(), e.restart(), e.isStarted = !1), e.isLooping = !1, n ? e.go() : Promise.resolve({ status: "no-audio-context" });
		}, e.go = function() {
			e.isLoading = !0;
			var t = e.visualObj.millisecondsPerMeasure() * 100 / e.warp;
			e.currentTempo = Math.round(e.visualObj.getBeatsPerMeasure() / t * 6e4), e.control && e.control.setTempo(e.currentTempo), e.percent = 0;
			var n;
			return e.midiBuffer ||= new i(), o().resume().then(function(n) {
				return e.midiBuffer.init({
					visualObj: e.visualObj,
					options: e.options,
					millisecondsPerMeasure: t
				});
			}).then(function(t) {
				return n = t, e.midiBuffer.prime();
			}).then(function() {
				var t = 16;
				return e.cursorControl && e.cursorControl.beatSubdivisions !== void 0 && parseInt(e.cursorControl.beatSubdivisions, 10) >= 1 && parseInt(e.cursorControl.beatSubdivisions, 10) <= 64 && (t = parseInt(e.cursorControl.beatSubdivisions, 10)), e.timer = new a(e.visualObj, {
					beatCallback: e.beatCallback,
					eventCallback: e.eventCallback,
					lineEndCallback: e.lineEndCallback,
					qpm: e.currentTempo,
					extraMeasuresAtBeginning: e.cursorControl ? e.cursorControl.extraMeasuresAtBeginning : void 0,
					lineEndAnticipation: e.cursorControl ? e.cursorControl.lineEndAnticipation : 0,
					beatSubdivisions: t
				}), e.cursorControl && e.cursorControl.onReady && typeof e.cursorControl.onReady == "function" && e.cursorControl.onReady(e), e.isLoaded = !0, e.isLoading = !1, Promise.resolve({
					status: "created",
					notesStatus: n
				});
			});
		}, e.destroy = function() {
			e.timer &&= (e.timer.reset(), e.timer.stop(), null), e.midiBuffer &&= (e.midiBuffer.stop(), null), e.setProgress(0, 1), e.control && e.control.resetAll();
		}, e.play = function() {
			return e.runWhenReady(e._play, void 0);
		};
		function t(e) {
			return new Promise(function(t) {
				setTimeout(t, e);
			});
		}
		e.runWhenReady = function(n, r) {
			return e.visualObj ? e.isLoading ? t(500).then(function() {
				return e.isLoading ? e.runWhenReady(n, r) : n(r);
			}) : e.isLoaded ? n(r) : e.go().then(function() {
				return n(r);
			}) : Promise.resolve({ status: "loading" });
		}, e._play = function() {
			return o().resume().then(function() {
				return e.isStarted = !e.isStarted, e.isStarted ? (e.cursorControl && e.cursorControl.onStart && typeof e.cursorControl.onStart == "function" && e.cursorControl.onStart(), e.midiBuffer.start(), e.timer.start(e.percent), e.control && e.control.pushPlay(!0)) : e.pause(), Promise.resolve({ status: "ok" });
			});
		}, e.pause = function() {
			e.timer && (e.timer.pause(), e.midiBuffer.pause(), e.control && e.control.pushPlay(!1));
		}, e.toggleLoop = function() {
			e.isLooping = !e.isLooping, e.control && e.control.pushLoop(e.isLooping);
		}, e.restart = function() {
			e.timer && (e.timer.setProgress(0), e.midiBuffer.seek(0));
		}, e.randomAccess = function(t) {
			return e.runWhenReady(e._randomAccess, t);
		}, e._randomAccess = function(t) {
			var n = t.target.classList.contains("abcjs-midi-progress-indicator") ? t.target.parentNode : t.target, r = (t.x - n.getBoundingClientRect().left) / n.offsetWidth;
			return r < 0 && (r = 0), r > 1 && (r = 1), e.seek(r), Promise.resolve({ status: "ok" });
		}, e.seek = function(t, n) {
			e.timer && e.midiBuffer && (e.timer.setProgress(t, n), e.midiBuffer.seek(t, n));
		}, e.setWarp = function(t) {
			if (parseInt(t, 10) > 0) {
				e.warp = parseInt(t, 10);
				var n = e.isStarted, r = e.percent;
				return e.destroy(), e.isStarted = !1, e.go().then(function() {
					return e.setProgress(r, e.midiBuffer.duration * 1e3), e.control && e.control.setWarp(e.currentTempo, e.warp), n ? e.play().then(function() {
						return e.seek(r), Promise.resolve();
					}) : (e.seek(r), Promise.resolve());
				});
			}
			return Promise.resolve();
		}, e.onWarp = function(t) {
			var n = t.target.value;
			return e.setWarp(n);
		}, e.setProgress = function(t, n) {
			e.percent = t, e.control && e.control.setProgress(t, n);
		}, e.finished = function() {
			if (e.timer.reset(), e.isLooping) return e.timer.start(0), e.midiBuffer.finished(), e.midiBuffer.start(), "continue";
			e.timer.stop(), e.isStarted && (e.control && e.control.pushPlay(!1), e.isStarted = !1, e.midiBuffer.finished(), e.cursorControl && e.cursorControl.onFinished && typeof e.cursorControl.onFinished == "function" && e.cursorControl.onFinished(), e.setProgress(0, 1));
		}, e.beatCallback = function(t, n, r, i) {
			var a = t / n;
			e.setProgress(a, r), e.cursorControl && e.cursorControl.onBeat && typeof e.cursorControl.onBeat == "function" && e.cursorControl.onBeat(t, n, r, i);
		}, e.eventCallback = function(t) {
			if (t) e.cursorControl && e.cursorControl.onEvent && typeof e.cursorControl.onEvent == "function" && e.cursorControl.onEvent(t);
			else return e.finished();
		}, e.lineEndCallback = function(t, n) {
			e.cursorControl && e.cursorControl.onLineEnd && typeof e.cursorControl.onLineEnd == "function" && e.cursorControl.onLineEnd(t, n);
		}, e.getUrl = function() {
			return e.midiBuffer.download();
		}, e.download = function(t) {
			var n = e.getUrl(), r = document.createElement("a");
			document.body.appendChild(r), r.setAttribute("style", "display: none;"), r.href = n, r.download = t || "output.wav", r.click(), window.URL.revokeObjectURL(n), document.body.removeChild(r);
		};
	}
	t.exports = s;
})), require_abc_midi_renderer = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_cents_to_factor(), r;
	(function() {
		function e(e, t) {
			for (var n in t) t.hasOwnProperty(n) && e.setAttribute(n, t[n]);
			return e;
		}
		function t() {
			this.trackstrings = "", this.trackcount = 0, this.noteOnAndChannel = "%90", this.noteOffAndChannel = "%80";
		}
		t.prototype.setTempo = function(e) {
			this.trackcount === 0 && (this.startTrack(), this.track += "%00%FF%51%03" + l(Math.round(6e7 / e), 6), this.endTrack());
		}, t.prototype.setGlobalInfo = function(e, t, n, r) {
			if (this.trackcount === 0) {
				this.startTrack();
				var i = Math.round(6e7 / e);
				this.track += "%00%FF%51%03" + l(i, 6), n && (this.track += o(n)), r && (this.track += s(r)), t && (this.track += a(t, "%01")), this.endTrack();
			}
		}, t.prototype.startTrack = function() {
			this.noteWarped = {}, this.track = "", this.trackName = "", this.trackInstrument = "", this.silencelength = 0, this.trackcount++, this.instrument && this.setInstrument(this.instrument);
		}, t.prototype.endTrack = function() {
			this.track = this.trackName + this.trackInstrument + this.track, this.track = "MTrk" + l(this.track.length / 3 + 4, 8) + this.track + "%00%FF%2F%00", this.trackstrings += this.track;
		}, t.prototype.setText = function(e, t) {
			switch (e) {
				case "name":
					this.trackName = a(t, "%03");
					break;
			}
		}, t.prototype.setInstrument = function(e) {
			this.trackInstrument = "%00%C0" + l(e, 2), this.instrument = e;
		}, t.prototype.setChannel = function(e, t) {
			this.channel = e;
			var n = "%00%B" + this.channel.toString(16);
			this.track += n + "%79%00", this.track += n + "%40%00", this.track += n + "%5B%30", t ||= 0, t = Math.round((t + 1) * 64), this.track += n + "%0A" + l(t, 2), this.track += n + "%07%64", this.noteOnAndChannel = "%9" + this.channel.toString(16), this.noteOffAndChannel = "%8" + this.channel.toString(16);
		};
		var i = 4096;
		t.prototype.startNote = function(e, t, r) {
			if (this.track += d(this.silencelength), this.silencelength = 0, r) {
				this.track += "%e" + this.channel.toString(16);
				var a = Math.round(n(r) * i);
				this.track += u(8192 + a), this.track += d(0), this.noteWarped[e] = !0;
			}
			this.track += this.noteOnAndChannel, this.track += "%" + e.toString(16) + l(t, 2);
		}, t.prototype.endNote = function(e) {
			this.track += d(this.silencelength), this.silencelength = 0, this.noteWarped[e] && (this.track += "%e" + this.channel.toString(16), this.track += u(8192), this.track += d(0), this.noteWarped[e] = !1), this.track += this.noteOffAndChannel, this.track += "%" + e.toString(16) + "%00";
		}, t.prototype.addRest = function(e) {
			this.silencelength += e, this.silencelength < 0 && (this.silencelength = 0);
		}, t.prototype.getData = function() {
			return "data:audio/midi,MThd%00%00%00%06%00%01" + l(this.trackcount, 4) + "%01%e0" + this.trackstrings;
		}, t.prototype.embed = function(t, n) {
			var r = this.getData(), i = e(document.createElement("a"), { href: r });
			if (i.innerHTML = "download midi", t.insertBefore(i, t.firstChild), !n) {
				var a = e(document.createElement("embed"), {
					src: r,
					type: "video/quicktime",
					controller: "true",
					autoplay: "false",
					loop: "false",
					enablejavascript: "true",
					style: "display:block; height: 20px;"
				});
				t.insertBefore(a, t.firstChild);
			}
		};
		function a(e, t) {
			for (var n = "", r = 0; r < e.length; r++) n += l(e.charCodeAt(r), 2);
			return "%00%FF" + t + l(n.length / 3, 2) + n;
		}
		function o(e) {
			if (!e || !e.accidentals) return "";
			for (var t = "%00%FF%59%02", n = 0, r = 256, i = 0; i < e.accidentals.length; i++) e.accidentals[i].acc === "sharp" ? n++ : e.accidentals[i].acc === "flat" && r--;
			var a = l(r === 256 ? n : r, 2), o = e.mode === "m" ? "%01" : "%00";
			return t + a + o;
		}
		function s(e) {
			var t = "%00%FF%58%04" + l(e.num, 2), n = {
				1: 0,
				2: 1,
				4: 2,
				8: 3,
				16: 4,
				32: 5
			}[e.den];
			if (!n) return "";
			t += l(n, 2);
			var r;
			switch (e.num + "/" + e.den) {
				case "2/4":
				case "3/4":
				case "4/4":
				case "5/4":
					r = 24;
					break;
				case "6/4":
					r = 72;
					break;
				case "2/2":
				case "3/2":
				case "4/2":
					r = 48;
					break;
				case "3/8":
				case "6/8":
				case "9/8":
				case "12/8":
					r = 36;
					break;
			}
			return r ? (t += l(r, 2), t + "%08") : "";
		}
		function c(e) {
			for (var t = "", n = 0; n < e.length; n += 2) t += "%", t += e.substr(n, 2);
			return t;
		}
		function l(e, t) {
			var n = e.toString(16);
			for (n = n.split(".")[0]; n.length < t;) n = "0" + n;
			return n.length > t && (n = n.substring(0, t)), c(n);
		}
		function u(e) {
			e = Math.round(e);
			var t = e % 128;
			return l((e - t) * 2 + t, 4);
		}
		function d(e) {
			var t = 0, n = [];
			for (e = Math.round(e); e !== 0;) n.push(e & 127), e >>= 7;
			for (var r = n.length - 1; r >= 0; r--) {
				t <<= 8;
				var i = n[r];
				r !== 0 && (i |= 128), t |= i;
			}
			var a = t.toString(16).length;
			return a += a % 2, l(t, a);
		}
		r = function() {
			return new t();
		};
	})(), t.exports = r;
})), require_abc_midi_create = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_midi_renderer(), r;
	(function() {
		var e = 480 * 4;
		r = function(r, i) {
			i === void 0 && (i = {});
			var a = r.setUpAudio(i), o = n(), s = r.metaText ? r.metaText.title : void 0;
			s && s.length > 128 && (s = s.substring(0, 124) + "...");
			var c = r.getKeySignature(), l = r.getMeterFraction(), u = a.tempo, d = u / 60;
			l.den == 8 && (u = 6e4 / (r.millisecondsPerMeasure() / l.num) / 2, d = u / 60), o.setGlobalInfo(u, s, c, l);
			for (var f = 0; f < a.tracks.length; f++) {
				o.startTrack();
				for (var p = {}, m = 0; m < a.tracks[f].length; m++) {
					var h = a.tracks[f][m];
					switch (h.cmd) {
						case "text":
							o.setText(h.type, h.text);
							break;
						case "program":
							var g = 0;
							i.pan && i.pan.length > f && (g = i.pan[f]), h.instrument === 128 ? (o.setChannel(9, g), o.setInstrument(0)) : (o.setChannel(h.channel, g), o.setInstrument(h.instrument));
							break;
						case "note":
							var _ = h.gap * d, v = h.start, y = v + h.duration - _;
							p[v] || (p[v] = []), p[v].push({
								pitch: h.pitch,
								volume: h.volume,
								cents: h.cents
							}), p[y] || (p[y] = []), p[y].push({
								pitch: h.pitch,
								volume: 0
							});
							break;
						default: console.log("MIDI create Unknown: " + h.cmd);
					}
				}
				t(o, p, e), o.endTrack();
			}
			return o.getData();
		};
		function t(e, t, n) {
			for (var r = Object.keys(t), i = 0; i < r.length; i++) r[i] = parseFloat(r[i]);
			r.sort(function(e, t) {
				return e - t;
			});
			for (var a = 0, o = 0; o < r.length; o++) {
				var s = t[r[o]];
				if (r[o] > a) {
					var c = (r[o] - a) * n;
					e.addRest(c), a = r[o];
				}
				for (var l = 0; l < s.length; l++) {
					var u = s[l];
					u.volume ? e.startNote(u.pitch, u.volume, u.cents) : e.endNote(u.pitch);
				}
			}
		}
	})(), t.exports = r;
})), require_get_midi_file = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_tunebook(), r = require_abc_midi_create(), i = function(e, t) {
		var i = {};
		if (t) for (var a in t) t.hasOwnProperty(a) && (i[a] = t[a]);
		i.generateInline = !1;
		function s(e, t, n) {
			var a = r(t, i);
			switch (i.midiOutputType) {
				case "encoded": return a;
				case "binary":
					var s = a.replace("data:audio/midi,", "");
					s = s.replace(/MThd/g, "%4d%54%68%64"), s = s.replace(/MTrk/g, "%4d%54%72%6b");
					for (var c = /* @__PURE__ */ new ArrayBuffer(s.length / 3), l = new Uint8Array(c), u = 0; u < s.length / 3; u++) {
						var d = u * 3 + 1;
						l[u] = parseInt(s.substring(d, d + 2), 16);
					}
					return l;
				case "link":
				default: return o(t, i, a, n);
			}
		}
		return typeof e == "string" ? n.renderEngine(s, "*", e, i) : s(null, e, 0);
	};
	function a(e) {
		return e && {}.toString.call(e) === "[object Function]";
	}
	var o = function(e, t, n, r) {
		var i = ["abcjs-download-midi", "abcjs-midi-" + r];
		t.downloadClass && i.push(t.downloadClass);
		var o = "<div class=\"" + i.join(" ") + "\">";
		t.preTextDownload && (o += t.preTextDownload);
		var s = e.metaText && e.metaText.title ? e.metaText.title : "Untitled", c = t.downloadLabel && a(t.downloadLabel) ? t.downloadLabel(e, r) : t.downloadLabel ? t.downloadLabel.replace(/%T/, s) : "Download MIDI for \"" + s + "\"";
		s = s.toLowerCase().replace(/'/g, "").replace(/\W/g, "_").replace(/__/g, "_");
		var l = t.fileName ? t.fileName : s + ".midi";
		return o += "<a download=\"" + l + "\" href=\"" + n + "\">" + c + "</a>", t.postTextDownload && (o += t.postTextDownload), o + "</div>";
	};
	t.exports = i;
})), require_abc_editarea = /* @__PURE__ */ __commonJSMin(((e, t) => {
	try {
		if (typeof window.CustomEvent != "function") {
			var n = function(e, t) {
				t ||= {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				};
				var n = document.createEvent("CustomEvent");
				return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
			};
			n.prototype = window.Event.prototype, window.CustomEvent = n;
		}
	} catch {}
	var r = function(e) {
		this.isEditArea = !0, typeof e == "string" ? (this.textarea = document.getElementById(e), this.textarea ||= document.querySelector(e)) : this.textarea = e, this.initialText = this.textarea.value, this.isDragging = !1;
	};
	r.prototype.addSelectionListener = function(e) {
		this.textarea.onmousemove = function(t) {
			this.isDragging && e.fireSelectionChanged();
		};
	}, r.prototype.addChangeListener = function(e) {
		this.changelistener = e, this.textarea.onkeyup = function() {
			e.fireChanged();
		}, this.textarea.onmousedown = function() {
			this.isDragging = !0, e.fireSelectionChanged();
		}, this.textarea.onmouseup = function() {
			this.isDragging = !1, e.fireChanged();
		}, this.textarea.onchange = function() {
			e.fireChanged();
		};
	}, r.prototype.getSelection = function() {
		return {
			start: this.textarea.selectionStart,
			end: this.textarea.selectionEnd
		};
	}, r.prototype.setSelection = function(e, t) {
		if (this.textarea.setSelectionRange) this.textarea.setSelectionRange(e, t);
		else if (this.textarea.createTextRange) {
			var n = this.textarea.createTextRange();
			n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select();
		}
		this.textarea.focus();
	}, r.prototype.getString = function() {
		return this.textarea.value;
	}, r.prototype.setString = function(e) {
		this.textarea.value = e, this.initialText = this.getString(), this.changelistener && this.changelistener.fireChanged();
	}, r.prototype.getElem = function() {
		return this.textarea;
	}, t.exports = r;
})), require_abc_editor = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_abc_common(), r = require_synth_controller(), a = require_supports_audio(), o = require_abc_tunebook_svg(), s = require_abc_editarea();
	function c(e) {
		var t = {}, n;
		if (e.abcjsParams) for (n in e.abcjsParams) e.abcjsParams.hasOwnProperty(n) && (t[n] = e.abcjsParams[n]);
		if (e.midi_options) for (n in e.midi_options) e.midi_options.hasOwnProperty(n) && (t[n] = e.midi_options[n]);
		if (e.parser_options) for (n in e.parser_options) e.parser_options.hasOwnProperty(n) && (t[n] = e.parser_options[n]);
		if (e.render_options) for (n in e.render_options) e.render_options.hasOwnProperty(n) && (t[n] = e.render_options[n]);
		return t.tablature && e.warnings_id && (t.tablature.warnings_id = e.warnings_id), t;
	}
	var l = function(e, t) {
		this.abcjsParams = c(t), t.indicate_changed && (this.indicate_changed = !0), typeof e == "string" ? this.editarea = new s(e) : e.isEditArea ? this.editarea = e : this.editarea = new s(e), this.editarea.addSelectionListener(this), this.editarea.addChangeListener(this), t.canvas_id ? this.div = t.canvas_id : t.paper_id ? this.div = t.paper_id : (this.div = document.createElement("DIV"), this.editarea.getElem().parentNode.insertBefore(this.div, this.editarea.getElem())), typeof this.div == "string" && (this.div = document.getElementById(this.div)), t.selectionChangeCallback && (this.selectionChangeCallback = t.selectionChangeCallback), this.clientClickListener = this.abcjsParams.clickListener, this.abcjsParams.clickListener = this.highlight.bind(this), t.synth && a() && (this.synth = {
			el: t.synth.el,
			cursorControl: t.synth.cursorControl,
			options: t.synth.options
		}), t.generate_midi && (this.generate_midi = t.generate_midi, this.abcjsParams.generateDownload && (typeof t.midi_download_id == "string" ? this.downloadMidi = document.getElementById(t.midi_download_id) : t.midi_download_id && (this.downloadMidi = t.midi_download_id)), this.abcjsParams.generateInline !== !1 && (typeof t.midi_id == "string" ? this.inlineMidi = document.getElementById(t.midi_id) : t.midi_id && (this.inlineMidi = t.midi_id))), t.warnings_id ? typeof t.warnings_id == "string" ? this.warningsdiv = document.getElementById(t.warnings_id) : this.warningsdiv = t.warnings_id : t.generate_warnings && (this.warningsdiv = document.createElement("div"), this.div.parentNode.insertBefore(this.warningsdiv, this.div)), this.onchangeCallback = t.onchange, this.redrawCallback = t.redrawCallback, this.currentAbc = "", this.tunes = [], this.bReentry = !1, this.parseABC(), this.modelChanged(), this.addClassName = function(e, t) {
			return function(e, t) {
				var n = e.className;
				return n.length > 0 && (n === t || (/* @__PURE__ */ RegExp("(^|\\s)" + t + "(\\s|$)")).test(n));
			}(e, t) || (e.className += (e.className ? " " : "") + t), e;
		}, this.removeClassName = function(e, t) {
			return e.className = n.strip(e.className.replace(/* @__PURE__ */ RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")), e;
		}, this.setReadOnly = function(e) {
			var t = "abc_textarea_readonly", n = this.editarea.getElem();
			e ? (n.setAttribute("readonly", "yes"), this.addClassName(n, t)) : (n.removeAttribute("readonly"), this.removeClassName(n, t));
		};
	};
	l.prototype.redrawMidi = function() {
		if (this.generate_midi && !this.midiPause) {
			var e = new window.CustomEvent("generateMidi", { detail: {
				tunes: this.tunes,
				abcjsParams: this.abcjsParams,
				downloadMidiEl: this.downloadMidi,
				inlineMidiEl: this.inlineMidi,
				engravingEl: this.div
			} });
			window.dispatchEvent(e);
		}
		if (this.synth) {
			var t = this.synth.synthControl;
			this.synth.synthControl || (this.synth.synthControl = new r(), this.synth.synthControl.load(this.synth.el, this.synth.cursorControl, this.synth.options)), this.synth.synthControl.setTune(this.tunes[0], t, this.synth.options);
		}
	}, l.prototype.modelChanged = function() {
		if (!this.bReentry) {
			this.bReentry = !0;
			try {
				this.timerId = null, this.redrawCallback && this.redrawCallback(!0), this.synth && this.synth.synthControl && this.synth.synthControl.disable(!0), this.tunes = o(this.div, this.currentAbc, this.abcjsParams), this.tunes.length > 0 && (this.warnings = this.tunes[0].warnings), this.redrawMidi(), this.redrawCallback && this.redrawCallback(!1);
			} catch (e) {
				console.error("ABCJS error: ", e), this.warnings ||= [], this.warnings.push(e.message);
			}
			this.warningsdiv && (this.warningsdiv.innerHTML = this.warnings ? this.warnings.join("<br />") : "No errors"), this.updateSelection(), this.bReentry = !1;
		}
	}, l.prototype.paramChanged = function(e) {
		if (e) for (var t in e) e.hasOwnProperty(t) && (this.abcjsParams[t] = e[t]);
		this.currentAbc = "", this.fireChanged();
	}, l.prototype.getTunes = function() {
		return this.tunes;
	}, l.prototype.synthParamChanged = function(e) {
		if (this.synth) {
			if (this.synth.options = {}, e) for (var t in e) e.hasOwnProperty(t) && (this.synth.options[t] = e[t]);
			this.currentAbc = "", this.fireChanged();
		}
	}, l.prototype.parseABC = function() {
		var e = this.editarea.getString();
		return e === this.currentAbc ? (this.updateSelection(), !1) : (this.currentAbc = e, !0);
	}, l.prototype.updateSelection = function() {
		var e = this.editarea.getSelection();
		try {
			this.tunes.length > 0 && this.tunes[0].engraver && this.tunes[0].engraver.rangeHighlight(e.start, e.end);
		} catch {}
		this.selectionChangeCallback && this.selectionChangeCallback(e.start, e.end);
	}, l.prototype.fireSelectionChanged = function() {
		this.updateSelection();
	}, l.prototype.setDirtyStyle = function(e) {
		if (this.indicate_changed !== void 0) {
			var t = function(e, t) {
				return function(e, t) {
					var n = e.className;
					return n.length > 0 && (n === t || (/* @__PURE__ */ RegExp("(^|\\s)" + t + "(\\s|$)")).test(n));
				}(e, t) || (e.className += (e.className ? " " : "") + t), e;
			}, r = function(e, t) {
				return e.className = n.strip(e.className.replace(/* @__PURE__ */ RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")), e;
			}, i = "abc_textarea_dirty", a = this.editarea.getElem();
			e ? t(a, i) : r(a, i);
		}
	}, l.prototype.fireChanged = function() {
		if (!this.bIsPaused && this.parseABC()) {
			var e = this;
			this.timerId && clearTimeout(this.timerId), this.timerId = setTimeout(function() {
				e.modelChanged();
			}, 300);
			var t = this.isDirty();
			this.wasDirty !== t && (this.wasDirty = t, this.setDirtyStyle(t)), this.onchangeCallback && this.onchangeCallback(this);
		}
	}, l.prototype.setNotDirty = function() {
		this.editarea.initialText = this.editarea.getString(), this.wasDirty = !1, this.setDirtyStyle(!1);
	}, l.prototype.isDirty = function() {
		return this.indicate_changed === void 0 ? !1 : this.editarea.initialText !== this.editarea.getString();
	}, l.prototype.highlight = function(e, t, n, r, i, a) {
		this.editarea.setSelection(e.startChar, e.endChar), this.selectionChangeCallback && this.selectionChangeCallback(e.startChar, e.endChar), this.clientClickListener && this.clientClickListener(e, t, n, r, i, a);
	}, l.prototype.pause = function(e) {
		this.bIsPaused = e, e || this.fireChanged();
	}, l.prototype.millisecondsPerMeasure = function() {
		return !this.synth || !this.synth.synthControl || !this.synth.synthControl.visualObj ? 0 : this.synth.synthControl.visualObj.millisecondsPerMeasure();
	}, l.prototype.pauseMidi = function(e) {
		this.midiPause = e, e || this.redrawMidi();
	}, t.exports = l;
})), require_abcjs = /* @__PURE__ */ __commonJSMin(((e, i) => {
	var a = require_version(), o = require_abc_animation(), s = require_abc_tunebook(), c = require_abc_midi_sequencer(), l = require_output(), u = {};
	u.signature = "abcjs-basic v" + a, Object.keys(o).forEach(function(e) {
		u[e] = o[e];
	}), Object.keys(s).forEach(function(e) {
		u[e] = s[e];
	}), u.renderAbc = require_abc_tunebook_svg(), u.tuneMetrics = require_tune_metrics(), u.TimingCallbacks = require_abc_timing_callbacks(), u.setGlyph = require_glyphs().setSymbol, u.strTranspose = l;
	var d = require_create_synth(), f = require_instrument_index_to_name(), p = require_pitch_to_note_name(), m = require_synth_sequence(), h = require_create_synth_control(), g = require_register_audio_context(), _ = require_active_audio_context(), y = require_supports_audio(), b = require_play_event();
	u.synth = {
		CreateSynth: d,
		instrumentIndexToName: f,
		pitchToNoteName: p,
		SynthController: require_synth_controller(),
		SynthSequence: m,
		CreateSynthControl: h,
		registerAudioContext: g,
		activeAudioContext: _,
		supportsAudio: y,
		playEvent: b,
		getMidiFile: require_get_midi_file(),
		sequence: c,
		midiRenderer: require_abc_midi_renderer()
	}, u.Editor = require_abc_editor(), u.EditArea = require_abc_editarea(), i.exports = u;
}));
export default require_abcjs();
