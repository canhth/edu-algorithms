import test from "ava";
import solution from "./index.js";

[
	[[3,2], 2],
	[[3,1,2,3,4,5,6,7], 21],
	[[9,1,8], 16],
	[[1,1],1]
].forEach(([array, score]) => test(`Max water [${ array }], area ${ score }`, (t) => {

	const n = solution(array);

	return t.is(n, score, `Area of ${ score } expected, got ${ n }`);

}));