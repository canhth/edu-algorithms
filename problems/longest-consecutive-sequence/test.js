import test from "ava";
import solution from "./index.js";

[
	[[-6,6,-9,-7,0,3,4,-2,2,-1,9,-9,5,-3,6,1,5,-1,-2,9,-9,-4,-6,-5,6,-1,3], 14],
	[[10, 1, 5, 6, 2, 3, 4], 6],
	[[10, 1, 5, 6, 2, 3], 3]
].forEach(([arr, res]) => test(`In [${ arr }], longest is ${ res }`, (t) => {

	const fRes = solution(arr);

	return t.is(fRes, res);

}));