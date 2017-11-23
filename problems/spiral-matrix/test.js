import test from "ava";
import spiralOrder from "./index.js";

[
	[[[1,2,3],[8,9,4],[7,6,5]], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
	[[[1,2,3,4],[10,11,12,5],[9,8,7,6]], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]
].forEach(([matrix, answer]) => test(`Matrix ${ matrix } in spiral order is ${ answer }`, (t) => {

	return t.deepEqual(spiralOrder(matrix), answer);

}));
