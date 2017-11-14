import test from "ava";
import solution from "./index.js";

[
	[[0,1,0,2,1,0,1,3,2,1,2,1], 6],
	[[4,2,1,2,5,3,1,0,1], 8]
].forEach(([arg, result]) => test(`For ["${ arg }"] return ${ result }`, (t) => {

	const res = solution(arg);

	t.is(res, result);

}));