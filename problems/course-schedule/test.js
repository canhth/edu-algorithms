import test from "ava";
import solution from "./index.js";

[
	[3, [[0,1],[0,2],[1,2]], true],
	[2, [[1,0],[0,1]], false],
	[2, [[1,0]], true]
].forEach(([x, arr, res]) => test(`Schedule [${ arr }] is possible to learn: ${ res }`, (t) => {

	return t.is(solution(x, arr), res);

}));