import test from "ava";
import slidingWindow from "./index.js";

[
	[[1,3,-1,-3,5,3,6,7], 3, [3,3,5,5,6,7]],
	[[], 1, []],
	[[1,3,-1,-9,0,3,6,7,2,-2], 4, [3,3,3,6,7,7,7]]
].forEach(([arr, k, res]) => test(`Sliding window for ${ arr } and k=${ k } is ${ res }`, (t) => {

	return t.deepEqual(slidingWindow(arr, k), res);

}));
