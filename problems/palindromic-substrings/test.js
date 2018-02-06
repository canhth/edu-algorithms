import test from "ava";
import solution from "./index.js";

[
	["aba", 4],
	["aaa", 6],
	["abrarbon", 10]
].forEach(([inp, out]) => test(`Number of palindrome substrings in ${ inp } is ${ out }`, (t) => {

	t.deepEqual(solution(inp), out);

}));