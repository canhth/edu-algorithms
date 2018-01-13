import test from "ava";
import solution from "./index.js";

[
	[[1,2,3,4],5,[2,3]],
	[[1,2,3,4],6,[2,4]],
	[[1,2,3,4],1,null]
].forEach(([arr, x, out]) => test(`Sum ${ x } is in [${ arr }]: ${ out }`, (t) => {

	t.deepEqual(solution(arr, x), out);

}));