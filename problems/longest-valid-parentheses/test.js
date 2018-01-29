import test from "ava";
import solution from "./index.js";

[
	["(()", 2],
	[")()())", 4],
	[")())(()())()(((((((((", 8]
].forEach(([s, r]) => test(`Longest valid parentheses in ${ s } are ${ r } of length`, (t) => {

	return t.deepEqual(solution(s), r);

}));