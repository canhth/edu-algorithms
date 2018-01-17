import test from "ava";
import solution from "./index.js";

[
	[[1, 2, 3, 6, 7], 7, [[6, 1], [7]]],
	[[1, 2, 3, 6, 7], 70, []],
	[[1, 2, 3, 6, 7], 5, [[3, 2]]],
	[[1, 2, 3, 6, 7, 2], 5, [[3, 2], [2, 2, 1]]]
].forEach(([array, x, res]) => test(`Sum ${ x } in [${ array }] are [${ res }]`, (t) => {

	return t.deepEqual(solution(array, x), res);

}));