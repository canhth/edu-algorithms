import test from "ava";
import sdn from "./index.js";

[
	[1, 22, [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]],
	[70,72, []]
].forEach(([l, r, out]) => test(`From ${l} to ${r} self-dividing numbers are [${ out }]`, (t) => {

	return t.deepEqual(sdn(l, r), out);

}));
