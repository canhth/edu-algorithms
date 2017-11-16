import test from "ava";
import solution from "./index.js";

[
	[[2, 3, 4, 5], [60, 40, 30, 24]],
	[[1, 2, 3, 4], [24, 12, 8, 6]]
].forEach(([inp, out]) => test(`Products of [${ inp }] is [${ out }]`, (t) => {

	t.deepEqual(solution(inp), out);

}));