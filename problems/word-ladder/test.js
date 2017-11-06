import test from "ava";
import solution1 from "./dfs+mem.js";
import solution2 from "./bfs+mem.js";

[
	[["hit", "cog", ["hot","dot","dog","lot","log","cog"]], [
		["hit","hot","dot","dog","cog"],
		["hit","hot","lot","log","cog"]
	]],
	[["hit", "hat", ["hat"]], [["hit", "hat"]]],
	[["hit", "cog", ["frog"]], []]
].forEach(([args, result]) => test(`For ["${ args[0] }", "${ args[1] }", ["${ args[2].join("\", \"") 
}"]], return [[${ result.map(r => `"${ r }"`).join("], [") }]]`, (t) => {

	const res = solution1.apply(null, args);
	const res2 = solution2.apply(null, args);

	t.deepEqual(res, result);
	t.deepEqual(res2, result);

}));