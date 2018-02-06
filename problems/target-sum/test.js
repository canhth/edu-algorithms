import test from "ava";
import solution from "./index.js";

[
	[[1,1,1,1,1], 3, 5],
	[[1,2,1,1], -1, 4],
	[[2,1,1,1], -1, 4],
	[[2,2], 0, 2]
].forEach(([nums, S, res]) => test(`Adding ${ nums } with +/- must yield ${ S } options`, (t) => {

	t.is(solution(nums, S), res);

}));