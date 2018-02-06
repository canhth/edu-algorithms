/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
export default function findTargetSumWays (nums, S) {

	let sum = 0;
	for (const n of nums) sum += n;

	if (S < -sum || S > sum)
		return 0;

	let layer = new Map([[0, 1]]), // 0 => 1
		nextLayer = new Map();

	for (const n of nums) {
		for (const [s, ways] of layer.entries()) {
			nextLayer.set(s + n, (nextLayer.get(s + n) || 0) + ways);
			nextLayer.set(s - n, (nextLayer.get(s - n) || 0) + ways);
		}
		layer = nextLayer;
		nextLayer = new Map();
	}

	return layer.get(S) || 0;

}