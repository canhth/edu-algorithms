import test from "ava";
import solution from "./index.js";

[
	[[5,2,0,0,3,1,0,4], true],
	[[6, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1], true],
	[[5,4,3,2,1,0], false],
	[[1,2,0,1,0,5], false]
].forEach(([arr, res]) => test(`Array [${ arr }] must be hoppable: ${ res }`, (t) => {

	return t.is(solution(arr), res);

}));