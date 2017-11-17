import test from "ava";
import swapsNum from "./index.js";

[
	[[2,1,3,1,2], 4],
	[[1,2], 0],
	[[2,1], 1],
	[[], 0]
].forEach(([array, res]) => test(`Count swaps in [${ array }] is ${ res }`, (t) => {

	return t.is(swapsNum(array), res);

}));