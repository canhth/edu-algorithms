import test from "ava";
import solution from "./index.js";

[
	[[
		[9,9,4],
		[6,6,8],
		[2,1,1]
	], 4],
	[[
		[3,4,5],
		[3,2,6],
		[2,2,1]
	], 4],
	[[
		[2,9,8,9,3],
		[7,1,6,8,2],
		[3,4,5,7,1]
	], 6]
].forEach(([arg, len]) => test(`Longest inc/dec path in [${ JSON.stringify(arg) }] is ${ len }`,
(t) => {

	return t.is(solution(arg), len);

}));