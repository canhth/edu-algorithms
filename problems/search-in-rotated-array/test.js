import test from "ava";
import solution from "./index.js";

[
	[[1,2,3,4,5], 4, 3],
	[[3,4,5,1,2], 1, 3],
	[[3,4,5,1,2], 4, 1],
	[[3,4,5,1,2], 2, 4]
].forEach(([inp, x, out]) => test(`Rotated search in [${ inp }] of ${ x } is ${ out }`, (t) => {

	t.is(solution(inp, x), out);

}));