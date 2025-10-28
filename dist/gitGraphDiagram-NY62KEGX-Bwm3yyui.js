import "./dist-CoGdlYHY.js";
import "./dist-Dmaes8r4.js";
import "./chunk-FPAJGGOC-DKLJwj0H.js";
import "./isArrayLikeObject-DKHowMnG.js";
import "./_baseUniq-C5UuzJkR.js";
import "./_basePickBy-CFV2cYVn.js";
import "./isEmpty-D0b8WX4x.js";
import { g as utils_default, i as cleanAndMerge, m as random } from "./chunk-S3R3BYOJ-BI-BEfpj.js";
import "./clone-XSAL9Gay.js";
import "./chunk-O7ZBX7Z2-BynjpHJ9.js";
import "./chunk-S6J4BHB3-Bl6daM-q.js";
import "./chunk-LBM3YZW2-BXQV7RQG.js";
import "./chunk-76Q3JFCE-0-FCuiwI.js";
import "./chunk-T53DSG4Q-DdmotRud.js";
import "./chunk-LHMN2FUI-DISVAfch.js";
import "./chunk-FWNWRKHM-CPZKx51-.js";
import { i as log, r as __name, t as select_default } from "./src-B-gAGmo8.js";
import { B as setAccTitle, C as getDiagramTitle, K as setupGraphViewbox2, U as setDiagramTitle, _ as getAccDescription, a as clear, b as getConfig2, d as defaultConfig_default, s as common_default, v as getAccTitle, y as getConfig, z as setAccDescription } from "./chunk-ABZYJK2D-CASc1KXE.js";
import "./timer-Bp1bAW5T.js";
import "./math-BN2TBOwX.js";
import "./step-DmjVsfVE.js";
import "./dist-CUheKjZU.js";
import { t as populateCommonDb } from "./chunk-4BX2VUAB-DbDv1R95.js";
import { t as parse } from "./mermaid-parser.core-D7DiBjb7.js";
import { t as ImperativeState } from "./chunk-QZHKN3VN-SsplSgnI.js";
var commitType = {
	NORMAL: 0,
	REVERSE: 1,
	HIGHLIGHT: 2,
	MERGE: 3,
	CHERRY_PICK: 4
}, DEFAULT_GITGRAPH_CONFIG = defaultConfig_default.gitGraph, getConfig3 = /* @__PURE__ */ __name(() => cleanAndMerge({
	...DEFAULT_GITGRAPH_CONFIG,
	...getConfig().gitGraph
}), "getConfig"), state = new ImperativeState(() => {
	let p = getConfig3(), H = p.mainBranchName, U = p.mainBranchOrder;
	return {
		mainBranchName: H,
		commits: /* @__PURE__ */ new Map(),
		head: null,
		branchConfig: /* @__PURE__ */ new Map([[H, {
			name: H,
			order: U
		}]]),
		branches: /* @__PURE__ */ new Map([[H, null]]),
		currBranch: H,
		direction: "LR",
		seq: 0,
		options: {}
	};
});
function getID() {
	return random({ length: 7 });
}
__name(getID, "getID");
function uniqBy(p, H) {
	let U = /* @__PURE__ */ Object.create(null);
	return p.reduce((p, W) => {
		let G = H(W);
		return U[G] || (U[G] = !0, p.push(W)), p;
	}, []);
}
__name(uniqBy, "uniqBy");
var setDirection = /* @__PURE__ */ __name(function(p) {
	state.records.direction = p;
}, "setDirection"), setOptions = /* @__PURE__ */ __name(function(p) {
	log.debug("options str", p), p = p?.trim(), p ||= "{}";
	try {
		state.records.options = JSON.parse(p);
	} catch (p) {
		log.error("error while parsing gitGraph options", p.message);
	}
}, "setOptions"), getOptions = /* @__PURE__ */ __name(function() {
	return state.records.options;
}, "getOptions"), commit = /* @__PURE__ */ __name(function(p) {
	let H = p.msg, U = p.id, G = p.type, K = p.tags;
	log.info("commit", H, U, G, K), log.debug("Entering commit:", H, U, G, K);
	let q = getConfig3();
	U = common_default.sanitizeText(U, q), H = common_default.sanitizeText(H, q), K = K?.map((p) => common_default.sanitizeText(p, q));
	let J = {
		id: U || state.records.seq + "-" + getID(),
		message: H,
		seq: state.records.seq++,
		type: G ?? commitType.NORMAL,
		tags: K ?? [],
		parents: state.records.head == null ? [] : [state.records.head.id],
		branch: state.records.currBranch
	};
	state.records.head = J, log.info("main branch", q.mainBranchName), state.records.commits.has(J.id) && log.warn(`Commit ID ${J.id} already exists`), state.records.commits.set(J.id, J), state.records.branches.set(state.records.currBranch, J.id), log.debug("in pushCommit " + J.id);
}, "commit"), branch = /* @__PURE__ */ __name(function(p) {
	let H = p.name, U = p.order;
	if (H = common_default.sanitizeText(H, getConfig3()), state.records.branches.has(H)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${H}")`);
	state.records.branches.set(H, state.records.head == null ? null : state.records.head.id), state.records.branchConfig.set(H, {
		name: H,
		order: U
	}), checkout(H), log.debug("in createBranch");
}, "branch"), merge = /* @__PURE__ */ __name((p) => {
	let H = p.branch, U = p.id, G = p.type, K = p.tags, q = getConfig3();
	H = common_default.sanitizeText(H, q), U &&= common_default.sanitizeText(U, q);
	let J = state.records.branches.get(state.records.currBranch), Y = state.records.branches.get(H), X = J ? state.records.commits.get(J) : void 0, Z = Y ? state.records.commits.get(Y) : void 0;
	if (X && Z && X.branch === H) throw Error(`Cannot merge branch '${H}' into itself.`);
	if (state.records.currBranch === H) {
		let p = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
		throw p.hash = {
			text: `merge ${H}`,
			token: `merge ${H}`,
			expected: ["branch abc"]
		}, p;
	}
	if (X === void 0 || !X) {
		let p = /* @__PURE__ */ Error(`Incorrect usage of "merge". Current branch (${state.records.currBranch})has no commits`);
		throw p.hash = {
			text: `merge ${H}`,
			token: `merge ${H}`,
			expected: ["commit"]
		}, p;
	}
	if (!state.records.branches.has(H)) {
		let p = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + H + ") does not exist");
		throw p.hash = {
			text: `merge ${H}`,
			token: `merge ${H}`,
			expected: [`branch ${H}`]
		}, p;
	}
	if (Z === void 0 || !Z) {
		let p = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + H + ") has no commits");
		throw p.hash = {
			text: `merge ${H}`,
			token: `merge ${H}`,
			expected: ["\"commit\""]
		}, p;
	}
	if (X === Z) {
		let p = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Both branches have same head");
		throw p.hash = {
			text: `merge ${H}`,
			token: `merge ${H}`,
			expected: ["branch abc"]
		}, p;
	}
	if (U && state.records.commits.has(U)) {
		let p = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Commit with id:" + U + " already exists, use different custom id");
		throw p.hash = {
			text: `merge ${H} ${U} ${G} ${K?.join(" ")}`,
			token: `merge ${H} ${U} ${G} ${K?.join(" ")}`,
			expected: [`merge ${H} ${U}_UNIQUE ${G} ${K?.join(" ")}`]
		}, p;
	}
	let Q = Y || "", $ = {
		id: U || `${state.records.seq}-${getID()}`,
		message: `merged branch ${H} into ${state.records.currBranch}`,
		seq: state.records.seq++,
		parents: state.records.head == null ? [] : [state.records.head.id, Q],
		branch: state.records.currBranch,
		type: commitType.MERGE,
		customType: G,
		customId: !!U,
		tags: K ?? []
	};
	state.records.head = $, state.records.commits.set($.id, $), state.records.branches.set(state.records.currBranch, $.id), log.debug(state.records.branches), log.debug("in mergeBranch");
}, "merge"), cherryPick = /* @__PURE__ */ __name(function(p) {
	let H = p.id, U = p.targetId, G = p.tags, K = p.parent;
	log.debug("Entering cherryPick:", H, U, G);
	let q = getConfig3();
	if (H = common_default.sanitizeText(H, q), U = common_default.sanitizeText(U, q), G = G?.map((p) => common_default.sanitizeText(p, q)), K = common_default.sanitizeText(K, q), !H || !state.records.commits.has(H)) {
		let p = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
		throw p.hash = {
			text: `cherryPick ${H} ${U}`,
			token: `cherryPick ${H} ${U}`,
			expected: ["cherry-pick abc"]
		}, p;
	}
	let J = state.records.commits.get(H);
	if (J === void 0 || !J) throw Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
	if (K && !(Array.isArray(J.parents) && J.parents.includes(K))) throw /* @__PURE__ */ Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
	let Y = J.branch;
	if (J.type === commitType.MERGE && !K) throw /* @__PURE__ */ Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
	if (!U || !state.records.commits.has(U)) {
		if (Y === state.records.currBranch) {
			let p = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
			throw p.hash = {
				text: `cherryPick ${H} ${U}`,
				token: `cherryPick ${H} ${U}`,
				expected: ["cherry-pick abc"]
			}, p;
		}
		let p = state.records.branches.get(state.records.currBranch);
		if (p === void 0 || !p) {
			let p = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${state.records.currBranch})has no commits`);
			throw p.hash = {
				text: `cherryPick ${H} ${U}`,
				token: `cherryPick ${H} ${U}`,
				expected: ["cherry-pick abc"]
			}, p;
		}
		let q = state.records.commits.get(p);
		if (q === void 0 || !q) {
			let p = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${state.records.currBranch})has no commits`);
			throw p.hash = {
				text: `cherryPick ${H} ${U}`,
				token: `cherryPick ${H} ${U}`,
				expected: ["cherry-pick abc"]
			}, p;
		}
		let X = {
			id: state.records.seq + "-" + getID(),
			message: `cherry-picked ${J?.message} into ${state.records.currBranch}`,
			seq: state.records.seq++,
			parents: state.records.head == null ? [] : [state.records.head.id, J.id],
			branch: state.records.currBranch,
			type: commitType.CHERRY_PICK,
			tags: G ? G.filter(Boolean) : [`cherry-pick:${J.id}${J.type === commitType.MERGE ? `|parent:${K}` : ""}`]
		};
		state.records.head = X, state.records.commits.set(X.id, X), state.records.branches.set(state.records.currBranch, X.id), log.debug(state.records.branches), log.debug("in cherryPick");
	}
}, "cherryPick"), checkout = /* @__PURE__ */ __name(function(p) {
	if (p = common_default.sanitizeText(p, getConfig3()), state.records.branches.has(p)) {
		state.records.currBranch = p;
		let H = state.records.branches.get(state.records.currBranch);
		H === void 0 || !H ? state.records.head = null : state.records.head = state.records.commits.get(H) ?? null;
	} else {
		let H = /* @__PURE__ */ Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${p}")`);
		throw H.hash = {
			text: `checkout ${p}`,
			token: `checkout ${p}`,
			expected: [`branch ${p}`]
		}, H;
	}
}, "checkout");
function upsert(p, H, U) {
	let W = p.indexOf(H);
	W === -1 ? p.push(U) : p.splice(W, 1, U);
}
__name(upsert, "upsert");
function prettyPrintCommitHistory(p) {
	let H = p.reduce((p, H) => p.seq > H.seq ? p : H, p[0]), U = "";
	p.forEach(function(p) {
		p === H ? U += "	*" : U += "	|";
	});
	let G = [
		U,
		H.id,
		H.seq
	];
	for (let p in state.records.branches) state.records.branches.get(p) === H.id && G.push(p);
	if (log.debug(G.join(" ")), H.parents && H.parents.length == 2 && H.parents[0] && H.parents[1]) {
		let U = state.records.commits.get(H.parents[0]);
		upsert(p, H, U), H.parents[1] && p.push(state.records.commits.get(H.parents[1]));
	} else if (H.parents.length == 0) return;
	else if (H.parents[0]) {
		let U = state.records.commits.get(H.parents[0]);
		upsert(p, H, U);
	}
	p = uniqBy(p, (p) => p.id), prettyPrintCommitHistory(p);
}
__name(prettyPrintCommitHistory, "prettyPrintCommitHistory");
var prettyPrint = /* @__PURE__ */ __name(function() {
	log.debug(state.records.commits);
	let p = getCommitsArray()[0];
	prettyPrintCommitHistory([p]);
}, "prettyPrint"), clear2 = /* @__PURE__ */ __name(function() {
	state.reset(), clear();
}, "clear"), getBranchesAsObjArray = /* @__PURE__ */ __name(function() {
	return [...state.records.branchConfig.values()].map((p, H) => p.order !== null && p.order !== void 0 ? p : {
		...p,
		order: parseFloat(`0.${H}`)
	}).sort((p, H) => (p.order ?? 0) - (H.order ?? 0)).map(({ name: p }) => ({ name: p }));
}, "getBranchesAsObjArray"), getBranches = /* @__PURE__ */ __name(function() {
	return state.records.branches;
}, "getBranches"), getCommits = /* @__PURE__ */ __name(function() {
	return state.records.commits;
}, "getCommits"), getCommitsArray = /* @__PURE__ */ __name(function() {
	let p = [...state.records.commits.values()];
	return p.forEach(function(p) {
		log.debug(p.id);
	}), p.sort((p, H) => p.seq - H.seq), p;
}, "getCommitsArray"), db = {
	commitType,
	getConfig: getConfig3,
	setDirection,
	setOptions,
	getOptions,
	commit,
	branch,
	merge,
	cherryPick,
	checkout,
	prettyPrint,
	clear: clear2,
	getBranchesAsObjArray,
	getBranches,
	getCommits,
	getCommitsArray,
	getCurrentBranch: /* @__PURE__ */ __name(function() {
		return state.records.currBranch;
	}, "getCurrentBranch"),
	getDirection: /* @__PURE__ */ __name(function() {
		return state.records.direction;
	}, "getDirection"),
	getHead: /* @__PURE__ */ __name(function() {
		return state.records.head;
	}, "getHead"),
	setAccTitle,
	getAccTitle,
	getAccDescription,
	setAccDescription,
	setDiagramTitle,
	getDiagramTitle
}, populate = /* @__PURE__ */ __name((p, H) => {
	populateCommonDb(p, H), p.dir && H.setDirection(p.dir);
	for (let U of p.statements) parseStatement(U, H);
}, "populate"), parseStatement = /* @__PURE__ */ __name((p, H) => {
	let U = {
		Commit: /* @__PURE__ */ __name((p) => H.commit(parseCommit(p)), "Commit"),
		Branch: /* @__PURE__ */ __name((p) => H.branch(parseBranch(p)), "Branch"),
		Merge: /* @__PURE__ */ __name((p) => H.merge(parseMerge(p)), "Merge"),
		Checkout: /* @__PURE__ */ __name((p) => H.checkout(parseCheckout(p)), "Checkout"),
		CherryPicking: /* @__PURE__ */ __name((p) => H.cherryPick(parseCherryPicking(p)), "CherryPicking")
	}[p.$type];
	U ? U(p) : log.error(`Unknown statement type: ${p.$type}`);
}, "parseStatement"), parseCommit = /* @__PURE__ */ __name((p) => ({
	id: p.id,
	msg: p.message ?? "",
	type: p.type === void 0 ? commitType.NORMAL : commitType[p.type],
	tags: p.tags ?? void 0
}), "parseCommit"), parseBranch = /* @__PURE__ */ __name((p) => ({
	name: p.name,
	order: p.order ?? 0
}), "parseBranch"), parseMerge = /* @__PURE__ */ __name((p) => ({
	branch: p.branch,
	id: p.id ?? "",
	type: p.type === void 0 ? void 0 : commitType[p.type],
	tags: p.tags ?? void 0
}), "parseMerge"), parseCheckout = /* @__PURE__ */ __name((p) => p.branch, "parseCheckout"), parseCherryPicking = /* @__PURE__ */ __name((p) => ({
	id: p.id,
	targetId: "",
	tags: p.tags?.length === 0 ? void 0 : p.tags,
	parent: p.parent
}), "parseCherryPicking"), parser = { parse: /* @__PURE__ */ __name(async (p) => {
	let H = await parse("gitGraph", p);
	log.debug(H), populate(H, db);
}, "parse") }, DEFAULT_GITGRAPH_CONFIG2 = getConfig2()?.gitGraph, LAYOUT_OFFSET = 10, COMMIT_STEP = 40, PX = 4, PY = 2, THEME_COLOR_LIMIT = 8, branchPos = /* @__PURE__ */ new Map(), commitPos = /* @__PURE__ */ new Map(), defaultPos = 30, allCommitsDict = /* @__PURE__ */ new Map(), lanes = [], maxPos = 0, dir = "LR", clear3 = /* @__PURE__ */ __name(() => {
	branchPos.clear(), commitPos.clear(), allCommitsDict.clear(), maxPos = 0, lanes = [], dir = "LR";
}, "clear"), drawText = /* @__PURE__ */ __name((p) => {
	let H = document.createElementNS("http://www.w3.org/2000/svg", "text");
	return (typeof p == "string" ? p.split(/\\n|\n|<br\s*\/?>/gi) : p).forEach((p) => {
		let U = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
		U.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), U.setAttribute("dy", "1em"), U.setAttribute("x", "0"), U.setAttribute("class", "row"), U.textContent = p.trim(), H.appendChild(U);
	}), H;
}, "drawText"), findClosestParent = /* @__PURE__ */ __name((p) => {
	let H, U, W;
	return dir === "BT" ? (U = /* @__PURE__ */ __name((p, H) => p <= H, "comparisonFunc"), W = Infinity) : (U = /* @__PURE__ */ __name((p, H) => p >= H, "comparisonFunc"), W = 0), p.forEach((p) => {
		let G = dir === "TB" || dir == "BT" ? commitPos.get(p)?.y : commitPos.get(p)?.x;
		G !== void 0 && U(G, W) && (H = p, W = G);
	}), H;
}, "findClosestParent"), findClosestParentBT = /* @__PURE__ */ __name((p) => {
	let H = "", U = Infinity;
	return p.forEach((p) => {
		let W = commitPos.get(p).y;
		W <= U && (H = p, U = W);
	}), H || void 0;
}, "findClosestParentBT"), setParallelBTPos = /* @__PURE__ */ __name((p, H, U) => {
	let W = U, G = U, K = [];
	p.forEach((p) => {
		let U = H.get(p);
		if (!U) throw Error(`Commit not found for key ${p}`);
		U.parents.length ? (W = calculateCommitPosition(U), G = Math.max(W, G)) : K.push(U), setCommitPosition(U, W);
	}), W = G, K.forEach((p) => {
		setRootPosition(p, W, U);
	}), p.forEach((p) => {
		let U = H.get(p);
		if (U?.parents.length) {
			let p = findClosestParentBT(U.parents);
			W = commitPos.get(p).y - COMMIT_STEP, W <= G && (G = W);
			let H = branchPos.get(U.branch).pos, K = W - LAYOUT_OFFSET;
			commitPos.set(U.id, {
				x: H,
				y: K
			});
		}
	});
}, "setParallelBTPos"), findClosestParentPos = /* @__PURE__ */ __name((p) => {
	let H = findClosestParent(p.parents.filter((p) => p !== null));
	if (!H) throw Error(`Closest parent not found for commit ${p.id}`);
	let U = commitPos.get(H)?.y;
	if (U === void 0) throw Error(`Closest parent position not found for commit ${p.id}`);
	return U;
}, "findClosestParentPos"), calculateCommitPosition = /* @__PURE__ */ __name((p) => findClosestParentPos(p) + COMMIT_STEP, "calculateCommitPosition"), setCommitPosition = /* @__PURE__ */ __name((p, H) => {
	let U = branchPos.get(p.branch);
	if (!U) throw Error(`Branch not found for commit ${p.id}`);
	let W = U.pos, G = H + LAYOUT_OFFSET;
	return commitPos.set(p.id, {
		x: W,
		y: G
	}), {
		x: W,
		y: G
	};
}, "setCommitPosition"), setRootPosition = /* @__PURE__ */ __name((p, H, U) => {
	let W = branchPos.get(p.branch);
	if (!W) throw Error(`Branch not found for commit ${p.id}`);
	let G = H + U, K = W.pos;
	commitPos.set(p.id, {
		x: K,
		y: G
	});
}, "setRootPosition"), drawCommitBullet = /* @__PURE__ */ __name((p, H, U, W, G, K) => {
	if (K === commitType.HIGHLIGHT) p.append("rect").attr("x", U.x - 10).attr("y", U.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${H.id} commit-highlight${G % THEME_COLOR_LIMIT} ${W}-outer`), p.append("rect").attr("x", U.x - 6).attr("y", U.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${H.id} commit${G % THEME_COLOR_LIMIT} ${W}-inner`);
	else if (K === commitType.CHERRY_PICK) p.append("circle").attr("cx", U.x).attr("cy", U.y).attr("r", 10).attr("class", `commit ${H.id} ${W}`), p.append("circle").attr("cx", U.x - 3).attr("cy", U.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${H.id} ${W}`), p.append("circle").attr("cx", U.x + 3).attr("cy", U.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${H.id} ${W}`), p.append("line").attr("x1", U.x + 3).attr("y1", U.y + 1).attr("x2", U.x).attr("y2", U.y - 5).attr("stroke", "#fff").attr("class", `commit ${H.id} ${W}`), p.append("line").attr("x1", U.x - 3).attr("y1", U.y + 1).attr("x2", U.x).attr("y2", U.y - 5).attr("stroke", "#fff").attr("class", `commit ${H.id} ${W}`);
	else {
		let q = p.append("circle");
		if (q.attr("cx", U.x), q.attr("cy", U.y), q.attr("r", H.type === commitType.MERGE ? 9 : 10), q.attr("class", `commit ${H.id} commit${G % THEME_COLOR_LIMIT}`), K === commitType.MERGE) {
			let K = p.append("circle");
			K.attr("cx", U.x), K.attr("cy", U.y), K.attr("r", 6), K.attr("class", `commit ${W} ${H.id} commit${G % THEME_COLOR_LIMIT}`);
		}
		K === commitType.REVERSE && p.append("path").attr("d", `M ${U.x - 5},${U.y - 5}L${U.x + 5},${U.y + 5}M${U.x - 5},${U.y + 5}L${U.x + 5},${U.y - 5}`).attr("class", `commit ${W} ${H.id} commit${G % THEME_COLOR_LIMIT}`);
	}
}, "drawCommitBullet"), drawCommitLabel = /* @__PURE__ */ __name((p, H, U, W) => {
	if (H.type !== commitType.CHERRY_PICK && (H.customId && H.type === commitType.MERGE || H.type !== commitType.MERGE) && DEFAULT_GITGRAPH_CONFIG2?.showCommitLabel) {
		let G = p.append("g"), K = G.insert("rect").attr("class", "commit-label-bkg"), q = G.append("text").attr("x", W).attr("y", U.y + 25).attr("class", "commit-label").text(H.id), J = q.node()?.getBBox();
		if (J && (K.attr("x", U.posWithOffset - J.width / 2 - PY).attr("y", U.y + 13.5).attr("width", J.width + 2 * PY).attr("height", J.height + 2 * PY), dir === "TB" || dir === "BT" ? (K.attr("x", U.x - (J.width + 4 * PX + 5)).attr("y", U.y - 12), q.attr("x", U.x - (J.width + 4 * PX)).attr("y", U.y + J.height - 12)) : q.attr("x", U.posWithOffset - J.width / 2), DEFAULT_GITGRAPH_CONFIG2.rotateCommitLabel)) if (dir === "TB" || dir === "BT") q.attr("transform", "rotate(-45, " + U.x + ", " + U.y + ")"), K.attr("transform", "rotate(-45, " + U.x + ", " + U.y + ")");
		else {
			let p = -7.5 - (J.width + 10) / 25 * 9.5, H = 10 + J.width / 25 * 8.5;
			G.attr("transform", "translate(" + p + ", " + H + ") rotate(-45, " + W + ", " + U.y + ")");
		}
	}
}, "drawCommitLabel"), drawCommitTags = /* @__PURE__ */ __name((p, H, U, W) => {
	if (H.tags.length > 0) {
		let G = 0, K = 0, q = 0, J = [];
		for (let W of H.tags.reverse()) {
			let H = p.insert("polygon"), Y = p.append("circle"), X = p.append("text").attr("y", U.y - 16 - G).attr("class", "tag-label").text(W), Z = X.node()?.getBBox();
			if (!Z) throw Error("Tag bbox not found");
			K = Math.max(K, Z.width), q = Math.max(q, Z.height), X.attr("x", U.posWithOffset - Z.width / 2), J.push({
				tag: X,
				hole: Y,
				rect: H,
				yOffset: G
			}), G += 20;
		}
		for (let { tag: p, hole: H, rect: G, yOffset: Y } of J) {
			let J = q / 2, X = U.y - 19.2 - Y;
			if (G.attr("class", "tag-label-bkg").attr("points", `
      ${W - K / 2 - PX / 2},${X + PY}  
      ${W - K / 2 - PX / 2},${X - PY}
      ${U.posWithOffset - K / 2 - PX},${X - J - PY}
      ${U.posWithOffset + K / 2 + PX},${X - J - PY}
      ${U.posWithOffset + K / 2 + PX},${X + J + PY}
      ${U.posWithOffset - K / 2 - PX},${X + J + PY}`), H.attr("cy", X).attr("cx", W - K / 2 + PX / 2).attr("r", 1.5).attr("class", "tag-hole"), dir === "TB" || dir === "BT") {
				let q = W + Y;
				G.attr("class", "tag-label-bkg").attr("points", `
        ${U.x},${q + 2}
        ${U.x},${q - 2}
        ${U.x + LAYOUT_OFFSET},${q - J - 2}
        ${U.x + LAYOUT_OFFSET + K + 4},${q - J - 2}
        ${U.x + LAYOUT_OFFSET + K + 4},${q + J + 2}
        ${U.x + LAYOUT_OFFSET},${q + J + 2}`).attr("transform", "translate(12,12) rotate(45, " + U.x + "," + W + ")"), H.attr("cx", U.x + PX / 2).attr("cy", q).attr("transform", "translate(12,12) rotate(45, " + U.x + "," + W + ")"), p.attr("x", U.x + 5).attr("y", q + 3).attr("transform", "translate(14,14) rotate(45, " + U.x + "," + W + ")");
			}
		}
	}
}, "drawCommitTags"), getCommitClassType = /* @__PURE__ */ __name((p) => {
	switch (p.customType ?? p.type) {
		case commitType.NORMAL: return "commit-normal";
		case commitType.REVERSE: return "commit-reverse";
		case commitType.HIGHLIGHT: return "commit-highlight";
		case commitType.MERGE: return "commit-merge";
		case commitType.CHERRY_PICK: return "commit-cherry-pick";
		default: return "commit-normal";
	}
}, "getCommitClassType"), calculatePosition = /* @__PURE__ */ __name((p, H, U, W) => {
	let G = {
		x: 0,
		y: 0
	};
	if (p.parents.length > 0) {
		let U = findClosestParent(p.parents);
		if (U) {
			let K = W.get(U) ?? G;
			return H === "TB" ? K.y + COMMIT_STEP : H === "BT" ? (W.get(p.id) ?? G).y - COMMIT_STEP : K.x + COMMIT_STEP;
		}
	} else if (H === "TB") return defaultPos;
	else if (H === "BT") return (W.get(p.id) ?? G).y - COMMIT_STEP;
	else return 0;
	return 0;
}, "calculatePosition"), getCommitPosition = /* @__PURE__ */ __name((p, H, U) => {
	let W = dir === "BT" && U ? H : H + LAYOUT_OFFSET, G = dir === "TB" || dir === "BT" ? W : branchPos.get(p.branch)?.pos, K = dir === "TB" || dir === "BT" ? branchPos.get(p.branch)?.pos : W;
	if (K === void 0 || G === void 0) throw Error(`Position were undefined for commit ${p.id}`);
	return {
		x: K,
		y: G,
		posWithOffset: W
	};
}, "getCommitPosition"), drawCommits = /* @__PURE__ */ __name((p, H, U) => {
	if (!DEFAULT_GITGRAPH_CONFIG2) throw Error("GitGraph config not found");
	let W = p.append("g").attr("class", "commit-bullets"), K = p.append("g").attr("class", "commit-labels"), q = dir === "TB" || dir === "BT" ? defaultPos : 0, J = [...H.keys()], Y = DEFAULT_GITGRAPH_CONFIG2?.parallelCommits ?? !1, X = /* @__PURE__ */ __name((p, U) => {
		let W = H.get(p)?.seq, G = H.get(U)?.seq;
		return W !== void 0 && G !== void 0 ? W - G : 0;
	}, "sortKeys"), Z = J.sort(X);
	dir === "BT" && (Y && setParallelBTPos(Z, H, q), Z = Z.reverse()), Z.forEach((p) => {
		let G = H.get(p);
		if (!G) throw Error(`Commit not found for key ${p}`);
		Y && (q = calculatePosition(G, dir, q, commitPos));
		let J = getCommitPosition(G, q, Y);
		if (U) {
			let p = getCommitClassType(G), H = G.customType ?? G.type;
			drawCommitBullet(W, G, J, p, branchPos.get(G.branch)?.index ?? 0, H), drawCommitLabel(K, G, J, q), drawCommitTags(K, G, J, q);
		}
		dir === "TB" || dir === "BT" ? commitPos.set(G.id, {
			x: J.x,
			y: J.posWithOffset
		}) : commitPos.set(G.id, {
			x: J.posWithOffset,
			y: J.y
		}), q = dir === "BT" && Y ? q + COMMIT_STEP : q + COMMIT_STEP + LAYOUT_OFFSET, q > maxPos && (maxPos = q);
	});
}, "drawCommits"), shouldRerouteArrow = /* @__PURE__ */ __name((p, H, U, W, K) => {
	let q = (dir === "TB" || dir === "BT" ? U.x < W.x : U.y < W.y) ? H.branch : p.branch, J = /* @__PURE__ */ __name((p) => p.branch === q, "isOnBranchToGetCurve"), Y = /* @__PURE__ */ __name((U) => U.seq > p.seq && U.seq < H.seq, "isBetweenCommits");
	return [...K.values()].some((p) => Y(p) && J(p));
}, "shouldRerouteArrow"), findLane = /* @__PURE__ */ __name((p, H, U = 0) => {
	let W = p + Math.abs(p - H) / 2;
	return U > 5 ? W : lanes.every((p) => Math.abs(p - W) >= 10) ? (lanes.push(W), W) : findLane(p, H - Math.abs(p - H) / 5, U + 1);
}, "findLane"), drawArrow = /* @__PURE__ */ __name((p, H, U, W) => {
	let G = commitPos.get(H.id), K = commitPos.get(U.id);
	if (G === void 0 || K === void 0) throw Error(`Commit positions not found for commits ${H.id} and ${U.id}`);
	let q = shouldRerouteArrow(H, U, G, K, W), J = "", Y = "", X = 0, Z = 0, Q = branchPos.get(U.branch)?.index;
	U.type === commitType.MERGE && H.id !== U.parents[0] && (Q = branchPos.get(H.branch)?.index);
	let $;
	if (q) {
		J = "A 10 10, 0, 0, 0,", Y = "A 10 10, 0, 0, 1,", X = 10, Z = 10;
		let p = G.y < K.y ? findLane(G.y, K.y) : findLane(K.y, G.y), U = G.x < K.x ? findLane(G.x, K.x) : findLane(K.x, G.x);
		dir === "TB" ? G.x < K.x ? $ = `M ${G.x} ${G.y} L ${U - X} ${G.y} ${Y} ${U} ${G.y + Z} L ${U} ${K.y - X} ${J} ${U + Z} ${K.y} L ${K.x} ${K.y}` : (Q = branchPos.get(H.branch)?.index, $ = `M ${G.x} ${G.y} L ${U + X} ${G.y} ${J} ${U} ${G.y + Z} L ${U} ${K.y - X} ${Y} ${U - Z} ${K.y} L ${K.x} ${K.y}`) : dir === "BT" ? G.x < K.x ? $ = `M ${G.x} ${G.y} L ${U - X} ${G.y} ${J} ${U} ${G.y - Z} L ${U} ${K.y + X} ${Y} ${U + Z} ${K.y} L ${K.x} ${K.y}` : (Q = branchPos.get(H.branch)?.index, $ = `M ${G.x} ${G.y} L ${U + X} ${G.y} ${Y} ${U} ${G.y - Z} L ${U} ${K.y + X} ${J} ${U - Z} ${K.y} L ${K.x} ${K.y}`) : G.y < K.y ? $ = `M ${G.x} ${G.y} L ${G.x} ${p - X} ${J} ${G.x + Z} ${p} L ${K.x - X} ${p} ${Y} ${K.x} ${p + Z} L ${K.x} ${K.y}` : (Q = branchPos.get(H.branch)?.index, $ = `M ${G.x} ${G.y} L ${G.x} ${p + X} ${Y} ${G.x + Z} ${p} L ${K.x - X} ${p} ${J} ${K.x} ${p - Z} L ${K.x} ${K.y}`);
	} else J = "A 20 20, 0, 0, 0,", Y = "A 20 20, 0, 0, 1,", X = 20, Z = 20, dir === "TB" ? (G.x < K.x && ($ = U.type === commitType.MERGE && H.id !== U.parents[0] ? `M ${G.x} ${G.y} L ${G.x} ${K.y - X} ${J} ${G.x + Z} ${K.y} L ${K.x} ${K.y}` : `M ${G.x} ${G.y} L ${K.x - X} ${G.y} ${Y} ${K.x} ${G.y + Z} L ${K.x} ${K.y}`), G.x > K.x && (J = "A 20 20, 0, 0, 0,", Y = "A 20 20, 0, 0, 1,", X = 20, Z = 20, $ = U.type === commitType.MERGE && H.id !== U.parents[0] ? `M ${G.x} ${G.y} L ${G.x} ${K.y - X} ${Y} ${G.x - Z} ${K.y} L ${K.x} ${K.y}` : `M ${G.x} ${G.y} L ${K.x + X} ${G.y} ${J} ${K.x} ${G.y + Z} L ${K.x} ${K.y}`), G.x === K.x && ($ = `M ${G.x} ${G.y} L ${K.x} ${K.y}`)) : dir === "BT" ? (G.x < K.x && ($ = U.type === commitType.MERGE && H.id !== U.parents[0] ? `M ${G.x} ${G.y} L ${G.x} ${K.y + X} ${Y} ${G.x + Z} ${K.y} L ${K.x} ${K.y}` : `M ${G.x} ${G.y} L ${K.x - X} ${G.y} ${J} ${K.x} ${G.y - Z} L ${K.x} ${K.y}`), G.x > K.x && (J = "A 20 20, 0, 0, 0,", Y = "A 20 20, 0, 0, 1,", X = 20, Z = 20, $ = U.type === commitType.MERGE && H.id !== U.parents[0] ? `M ${G.x} ${G.y} L ${G.x} ${K.y + X} ${J} ${G.x - Z} ${K.y} L ${K.x} ${K.y}` : `M ${G.x} ${G.y} L ${K.x - X} ${G.y} ${J} ${K.x} ${G.y - Z} L ${K.x} ${K.y}`), G.x === K.x && ($ = `M ${G.x} ${G.y} L ${K.x} ${K.y}`)) : (G.y < K.y && ($ = U.type === commitType.MERGE && H.id !== U.parents[0] ? `M ${G.x} ${G.y} L ${K.x - X} ${G.y} ${Y} ${K.x} ${G.y + Z} L ${K.x} ${K.y}` : `M ${G.x} ${G.y} L ${G.x} ${K.y - X} ${J} ${G.x + Z} ${K.y} L ${K.x} ${K.y}`), G.y > K.y && ($ = U.type === commitType.MERGE && H.id !== U.parents[0] ? `M ${G.x} ${G.y} L ${K.x - X} ${G.y} ${J} ${K.x} ${G.y - Z} L ${K.x} ${K.y}` : `M ${G.x} ${G.y} L ${G.x} ${K.y + X} ${Y} ${G.x + Z} ${K.y} L ${K.x} ${K.y}`), G.y === K.y && ($ = `M ${G.x} ${G.y} L ${K.x} ${K.y}`));
	if ($ === void 0) throw Error("Line definition not found");
	p.append("path").attr("d", $).attr("class", "arrow arrow" + Q % THEME_COLOR_LIMIT);
}, "drawArrow"), drawArrows = /* @__PURE__ */ __name((p, H) => {
	let U = p.append("g").attr("class", "commit-arrows");
	[...H.keys()].forEach((p) => {
		let W = H.get(p);
		W.parents && W.parents.length > 0 && W.parents.forEach((p) => {
			drawArrow(U, H.get(p), W, H);
		});
	});
}, "drawArrows"), drawBranches = /* @__PURE__ */ __name((p, H) => {
	let U = p.append("g");
	H.forEach((p, H) => {
		let W = H % THEME_COLOR_LIMIT, G = branchPos.get(p.name)?.pos;
		if (G === void 0) throw Error(`Position not found for branch ${p.name}`);
		let K = U.append("line");
		K.attr("x1", 0), K.attr("y1", G), K.attr("x2", maxPos), K.attr("y2", G), K.attr("class", "branch branch" + W), dir === "TB" ? (K.attr("y1", defaultPos), K.attr("x1", G), K.attr("y2", maxPos), K.attr("x2", G)) : dir === "BT" && (K.attr("y1", maxPos), K.attr("x1", G), K.attr("y2", defaultPos), K.attr("x2", G)), lanes.push(G);
		let q = p.name, J = drawText(q), Y = U.insert("rect"), X = U.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + W);
		X.node().appendChild(J);
		let Z = J.getBBox();
		Y.attr("class", "branchLabelBkg label" + W).attr("rx", 4).attr("ry", 4).attr("x", -Z.width - 4 - (DEFAULT_GITGRAPH_CONFIG2?.rotateCommitLabel === !0 ? 30 : 0)).attr("y", -Z.height / 2 + 8).attr("width", Z.width + 18).attr("height", Z.height + 4), X.attr("transform", "translate(" + (-Z.width - 14 - (DEFAULT_GITGRAPH_CONFIG2?.rotateCommitLabel === !0 ? 30 : 0)) + ", " + (G - Z.height / 2 - 1) + ")"), dir === "TB" ? (Y.attr("x", G - Z.width / 2 - 10).attr("y", 0), X.attr("transform", "translate(" + (G - Z.width / 2 - 5) + ", 0)")) : dir === "BT" ? (Y.attr("x", G - Z.width / 2 - 10).attr("y", maxPos), X.attr("transform", "translate(" + (G - Z.width / 2 - 5) + ", " + maxPos + ")")) : Y.attr("transform", "translate(-19, " + (G - Z.height / 2) + ")");
	});
}, "drawBranches"), setBranchPosition = /* @__PURE__ */ __name(function(p, H, U, W, G) {
	return branchPos.set(p, {
		pos: H,
		index: U
	}), H += 50 + (G ? 40 : 0) + (dir === "TB" || dir === "BT" ? W.width / 2 : 0), H;
}, "setBranchPosition"), diagram = {
	parser,
	db,
	renderer: { draw: /* @__PURE__ */ __name(function(H, U, G, q) {
		if (clear3(), log.debug("in gitgraph renderer", H + "\n", "id:", U, G), !DEFAULT_GITGRAPH_CONFIG2) throw Error("GitGraph config not found");
		let J = DEFAULT_GITGRAPH_CONFIG2.rotateCommitLabel ?? !1, X = q.db;
		allCommitsDict = X.getCommits();
		let Z = X.getBranchesAsObjArray();
		dir = X.getDirection();
		let Q = select_default(`[id="${U}"]`), $ = 0;
		Z.forEach((p, H) => {
			let U = drawText(p.name), W = Q.append("g"), G = W.insert("g").attr("class", "branchLabel"), K = G.insert("g").attr("class", "label branch-label");
			K.node()?.appendChild(U);
			let q = U.getBBox();
			$ = setBranchPosition(p.name, $, H, q, J), K.remove(), G.remove(), W.remove();
		}), drawCommits(Q, allCommitsDict, !1), DEFAULT_GITGRAPH_CONFIG2.showBranches && drawBranches(Q, Z), drawArrows(Q, allCommitsDict), drawCommits(Q, allCommitsDict, !0), utils_default.insertTitle(Q, "gitTitleText", DEFAULT_GITGRAPH_CONFIG2.titleTopMargin ?? 0, X.getDiagramTitle()), setupGraphViewbox2(void 0, Q, DEFAULT_GITGRAPH_CONFIG2.diagramPadding, DEFAULT_GITGRAPH_CONFIG2.useMaxWidth);
	}, "draw") },
	styles: /* @__PURE__ */ __name((p) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7
	].map((H) => `
        .branch-label${H} { fill: ${p["gitBranchLabel" + H]}; }
        .commit${H} { stroke: ${p["git" + H]}; fill: ${p["git" + H]}; }
        .commit-highlight${H} { stroke: ${p["gitInv" + H]}; fill: ${p["gitInv" + H]}; }
        .label${H}  { fill: ${p["git" + H]}; }
        .arrow${H} { stroke: ${p["git" + H]}; }
        `).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${p.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${p.commitLabelFontSize}; fill: ${p.commitLabelColor};}
  .commit-label-bkg { font-size: ${p.commitLabelFontSize}; fill: ${p.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${p.tagLabelFontSize}; fill: ${p.tagLabelColor};}
  .tag-label-bkg { fill: ${p.tagLabelBackground}; stroke: ${p.tagLabelBorder}; }
  .tag-hole { fill: ${p.textColor}; }

  .commit-merge {
    stroke: ${p.primaryColor};
    fill: ${p.primaryColor};
  }
  .commit-reverse {
    stroke: ${p.primaryColor};
    fill: ${p.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${p.primaryColor};
    fill: ${p.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${p.textColor};
  }
`, "getStyles")
};
export { diagram };
