import test from "ava";
import solution from "./index.js";

[
	[[0], 1, [0]],
	[[5,6,7,5], 2, [5,6]],
	[[1,1,1,2,2,3,5,5,5,5,5], 4, [5,1,2,3]]
].forEach(([arr, k, result]) => test(`${ k } most frequent elements in [${ arr }] must be ${ result 
}`, (t) => {

	t.deepEqual(solution(arr, k), result);

}));