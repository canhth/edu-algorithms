/**
 * @param {number[]} arr
 * @param {number} sum
 * @return {number[][]}
 */
export default function combinationSum2 (arr, sum) {

	const mem = [];

	for (let i = 0; i < arr.length; ++i) {
		mem.push([]);
		for (let j = 0; j < sum; ++j) {
			mem[i][j] = (arr[i] === j + 1 ? 1 : 0)
				+ (i > 0 ? mem[i - 1][j] : 0)
				+ (i > 0 && j - arr[i] >= 0 ? mem[i - 1][j - arr[i]] : 0);
		}
	}

	return backtrack(arr, sum, mem, arr.length - 1, sum - 1);

}

function backtrack (arr, sum, mem, i, j, res = [], options = [], set = new Set()) {

	if (i > 0 && mem[i - 1][j] !== 0)
		backtrack(arr, sum, mem, i - 1, j, res, options, set);

	if (i > 0 && j - arr[i] >= 0 && mem[i - 1][j - arr[i]] !== 0)
		backtrack(arr, sum - arr[i], mem, i - 1, j - arr[i], res, options.concat(arr[i]), set);

	if (sum === 0 && !set.has(options.sort().join("-"))) {
		res.push(options.sort());
		set.add(options.sort().join("-"));
	}
	if (sum - arr[i] === 0 && options.length > 0 && !set.has(options.concat(arr[i]).sort().join("-"))) {
		res.push(options.concat(arr[i]));
		set.add(options.concat(arr[i]).sort().join("-"));
	}
	if (arr[i] === j + 1 && options.length === 0 && !set.has(arr[i])) {
		res.push([arr[i]]);
		set.add(arr[i]);
	}

	return res;

}