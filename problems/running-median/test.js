import test from "ava";
import solution from "./index.js";

[
	[[100, 2, 3, 4, 6, 1], [100, 51, 3, 3.5, 4, 3.5]],
	[[1, 2, 3, 4, 5], [1, 1.5, 2, 2.5, 3]]
].forEach(([inp, out]) => test(`Running median of [${ inp }] is [${ out }]`, (t) => {

	t.deepEqual(solution(inp), out);

}));