import test from "ava";
import solution from "./index.js";

[
	[[3,1,5,8], 167],
	[[2,0,2], 6],
	[[7], 7]
].forEach(([array, score]) => test(`Burst balloons [${ array }], get ${ score } score`, (t) => {

	const n = solution(array);

	return t.is(n, score, `Score of ${ score } expected, got ${ n }`);

}));