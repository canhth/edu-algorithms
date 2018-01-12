import test from "ava";
import solution from "./index.js";
import solution2 from "./solution2.js";

[
	[[[1,1,0], [1,1,0], [0,0,1]], 2],
	[[[1,1,0], [1,1,1], [0,1,1]], 1]
].forEach(([matrix, c]) => test(`Friend matrix [${ matrix }] must have ${ c } loops`, (t) => {

	t.is(solution(matrix), c);
	t.is(solution2(matrix), c);

}));