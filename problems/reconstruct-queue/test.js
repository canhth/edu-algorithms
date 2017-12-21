import test from "ava";
import solution from "./index.js";

[
	[[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]], [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]],
	[[], []],
	[[[1,0], [2,0]], [[1,0], [2,0]]]
].forEach(([i, o]) => test(`Reconstructed queue [${ i }] is [${ o }]`, (t) => {

	t.deepEqual(solution(i), o);

}));