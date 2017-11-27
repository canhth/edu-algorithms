import test from "ava";
import skyline from "./index.js";

[
	[
		[[2,9,10], [3,7,15], [5,12,12], [15,20,10], [19,24,8]],
		[[2,10], [3,15], [7,12], [12,0], [15,10], [20,8], [24,0]]
	],
	[[[1,2,3]], [[1,3], [2,0]]]
].forEach(([buildings, line]) => test(`Skyline for [${ buildings }] bust be [${ line }]`, (t) => {

	return t.deepEqual(skyline(buildings), line);

}));
