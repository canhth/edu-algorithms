import test from "ava";
import solution from "./index.js";

[
	[[1,2,3], [1,3,2]],
	[[3,2,1], [1,2,3]],
	[[1,1,5], [1,5,1]]
].forEach(([s, k]) => test(`Next permutation of [${ s }] is [${ k }]`, (t) => {

	t.deepEqual(solution(s), k);

}));