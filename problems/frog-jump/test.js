import test from "ava";
import solution1 from "./index.js";
import solution2 from "./dfs.js";

[
	[[0,1,3,5,6,8,12,17], true],
	[[0,1,2,3,4,8,9,11], false],
	[[0,1], true],
	[[0,1,3,5,6,8,9], true],
	[[0,1,3,6,10,15,21,23], false]
].forEach(([stones, result]) => test(`Stones [${ stones }], must be ${ result }`, (t) => {

	const res = solution1(stones);
	const res2 = solution2(stones);

	t.is(res, result);
	t.is(res2, result);

}));