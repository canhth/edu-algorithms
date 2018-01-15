import test from "ava";
import solution from "./index.js";

[
	[1, 1],
	[2, 2],
	[3, 5],
	[4, 14],
	[5, 42]
].forEach(([a, b]) => test(`"${ b }" unique binary trees possible using ${ a } nodes`, (t) => {

	t.is(solution(a), b);

}));