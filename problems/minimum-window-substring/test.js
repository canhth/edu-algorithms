import test from "ava";
import solution from "./index.js";

[
	["a", "a", "a"],
	["ADOBECODEBANC", "ABC", "BANC"]
].forEach(([s, k, out]) => test(`Min window string "${ s }" with "${ k }" is "${ out }"`, (t) => {

	t.deepEqual(solution(s, k), out);

}));