import test from "ava";
import counts from "./index.js";

[
	[[5,2,6,1], [2,1,1,1]],
	[[1,2], [0,0]],
	[[2,1], [1,0]],
	[[], []]
].forEach(([array, res]) => test(`Count smaller right elements in [${ array }] [${ res }]`, (t) => {

	return t.deepEqual(counts(array), res);

}));