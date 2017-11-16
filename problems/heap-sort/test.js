import test from "ava";
import solution from "./index.js";

[
	[6,8,3,1,0],
	[],
	[1,2,2,2],
	[1]
].forEach((arr) => test(`Heap sort [${ arr }]`, (t) => {

	return t.deepEqual(solution(arr.slice()), arr.sort((a, b) => a - b));

}));