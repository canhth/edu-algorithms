import test from "ava";
import solution from "./index.js";

[
	[1, 7, 4, 4],
	[9, 18, 5, 5],
	[13, 15, 3, 3],
	[100, 200, 100, 100],
	[1, 7, 5, 0],
	[3, 9, 6, 0]
].forEach(([a, b, x, expectedSetLength]) => test(`Range [${ a }, ${ b }], X=${ x }`, (t) => {

	const set = solution(a, b, x);

	if (set.size !== expectedSetLength) return t.is(
		set.size,
		expectedSetLength,
		`Set size must be ${ expectedSetLength }, not ${ set.size }`
	);

	for (const i of set) {
		for (const j of set) {
			if (i === j || i % j !== 0)
				continue;
			return t.is(i % j, 0, `${ i } is divisible by ${ j }`);
		}
	}

	return t.pass();

}));