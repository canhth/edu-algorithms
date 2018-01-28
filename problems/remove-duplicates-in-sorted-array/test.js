import test from "ava";
import solution from "./index.js";

[
	[[1,2,3], [1,2,3]],
	[[1,1,2], [1,2]],
	[[1,2,2], [1,2]]
].forEach(([a, b]) => test(`Array ${ a } without duplicates must be ${ b }`, (t) => {

	t.is(solution(a), b.length);
	t.deepEqual(a, b); // in-place modification check

}));