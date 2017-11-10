import test from "ava";
import solution from "./index.js";

[
	[1, 4, 2],
	[32567435, 98756672, 10],
	[98756672, 32567435, 10]
].forEach(([a, b, result]) => test(`Hamming Distance of ${ a } and ${ b } = ${ result }`, (t) => {

	const res = solution(a, b);

	t.is(res, result);

}));