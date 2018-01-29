import test from "ava";
import solution from "./index.js";

[
	[5, 7, [5, 15, 1115, 3115, 132115, 1113122115, 311311222115]],
	[1, 9, [1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, 31131211131221]],
	[11, 6, [11, 21, 1211, 111221, 312211, 13112221]]
].forEach(([seed, n, res]) => test(`Look-and-say from ${ seed } with n=${ n } is ${ res }`, (t) => {

	return t.deepEqual(solution(seed, n), res);

}));