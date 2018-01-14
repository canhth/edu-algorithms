import test from "ava";
import solution from "./index.js";

[
	["23",["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]]
].forEach(([a, b]) => test(`Number ${ a } can be represented as ${ b }`, (t) => {

	t.deepEqual(solution(a), b);

}));