import test from "ava";
import solution from "./index.js";

[
	[[1, 2, 3], 2],
	[[2, 2, 6, 12, 40, 11], 16],
	[[1, 2, 3, 4, 5, 40, 39, 38, 37, 36, 0], 49]
].forEach(([array, steps]) => test(`Equalize [${ array }] in ${ steps } steps`, (t) => {

	const n = solution(array);

	return t.is(n, steps, `${ steps } expected, got ${ n }`);

}));