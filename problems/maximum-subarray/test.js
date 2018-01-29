import test from "ava";
import solution from "./index.js";

[
	[[-2,1,-3,4,-1,2,1,-5,4], 6],
	[[7,7,3,-100], 17],
	[[11,-1,11], 21]
].forEach(([arr, max]) => test(`Continuous sub arr in [${ arr }] max sum is ${ max }`, (t) => {

	return t.is(solution(arr), max);

}));