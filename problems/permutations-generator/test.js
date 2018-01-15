import test from "ava";
import solution from "./index.js";

[
	["ab", ["ab", "ba"]],
	["abc", ["abc", "acb", "bac", "bca", "cba", "cab"]]
].forEach(([inp, out]) => test(`Permutations of [${ inp }] are [${ out }]`, (t) => {

	t.deepEqual(new Set(solution(inp)), new Set(out));

}));