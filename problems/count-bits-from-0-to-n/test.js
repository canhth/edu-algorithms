import test from "ava";
import solution from "./index.js";

[
	[0, [0]],
	[1, [0, 1]],
	[2, [0, 1, 1]],
	[16, [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1]]
].forEach(([x, result]) => test(`Count bits up to ${ x } gives [${ result }]`, (t) => {

	const res = solution(x);

	t.deepEqual(res, result);

}));