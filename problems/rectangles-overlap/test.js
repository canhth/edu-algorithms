import test from "ava";
import solution from "./index.js";

const rect = (x, y, w, h) => ({ leftX: x, bottomY: y, width: w, height: h });

[
	[rect(1, 1, 6, 3), rect(5, 2, 3, 6), rect(5, 2, 2, 2)],
	[rect(1, 1, 1, 1), rect(3, 3, 3, 3), rect(0, 0, 0, 0)],
	[rect(-2, 0, 5, 3), rect(-1, -2, 2, 40), rect(-1, 0, 2, 3)]
].forEach(([rect1, rect2, rect]) => test(
`Intersection of rectangles ${ rect1 }+${ rect2 } is ${ rect }`, (t) => {

	t.deepEqual(solution(rect1, rect2), rect);

}));