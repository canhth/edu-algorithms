import test from "ava";
import solution from "./recursive.js";

[
	[["aab", "c*a*b"], true],
	[["ab", ".*"], true],
	[["aa", "a"], false],
	[["aa", "aa"], true],
	[["aacc", ".*"], true],
	[["aaccd", ".*cd"], true],
	[["aaccd", "a.*cd"], true]
].forEach(([args, result]) => test(`"${ args[0] }" must ${ result ? "" : "not " }match /${ args[1] 
}/`, (t) => {

	const res = solution.apply(null, args);

	t.is(res, result);

}));