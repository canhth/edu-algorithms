import test from "ava";
import solution from "./index.js";

[
	[[1,2,3,4],6,[1,2,3]],
	[[1,2,3,4,5,8,9],12,[1,3,8]],
	[[7,14,21,1,2,5],24,[21,1,2]],
	[[7,14,21,1,2,5],25,null],
	[[1,7,2,1,1],3,[1,1,1]],
	[[-1,7,3,20,-20],9,[-1,7,3]]
].forEach(([arr, x, out]) => test(`Sum ${ x } is in [${ arr }]: ${ out }`, (t) => {

	t.deepEqual(solution(arr, x), out);

}));