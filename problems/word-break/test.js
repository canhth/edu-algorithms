import test from "ava";
import solution from "./index.js";

[
	["bigbang", ["big", "bang"], true],
	["holaya", ["ho", "la", "ay", "olay", "aya"], false],
	["demidovich", ["demi", "mido", "de", "vic", "h", "ovic"], true]
].forEach(([string, words, can]) => test(`"${ string }" can${ can ? "" : "not" } be created from [${ 
words }]`, (t) => {

	t.is(solution(string, words), can);

}));