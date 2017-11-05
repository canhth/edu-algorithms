import test from "ava";
import * as solution from "./index.js";

[
	["96", true],
	["808", true],
	["7", false],
	["99", false],
	["9006", true]
].forEach(([string, result]) => test(`String "${ string }", must be ${ result }`, (t) => {

	const is = solution.isStrobogrammatic(string);

	return t.is(is, result);

}));

[
	[1, ["0", "1", "8"]],
	[2, ["00", "11", "69", "88", "96"]],
	[3, ["000", "010", "080", "101", "111", "181", "609", "619", "689", "808", "818", "888", "906",
		 "916", "986"]]
].forEach(([n, result]) => test(`Generate ${ n }`, (t) => {

	const is = solution.generateStrobogrammatics(n);

	return t.deepEqual(new Set(is), new Set(result));

}));