import test from "ava";
import solution from "./index.js";

[
	[[3,5,3], 6],
	[[2,5,2], 5],
	[[0,0,0,0,0,1], 1],
	[[0,0,0,0,0,1,0], 1],
	[[0,0,0,0,0,0,1], 1],
	[[19,3,0,5,1], 24],
	[[1,9], 9],
	[[2], 2]
].forEach(([inp, out]) => test(`Robbing houses [${ inp }] should give ${ out } profit`, (t) => {

	t.is(solution(inp), out);

}));