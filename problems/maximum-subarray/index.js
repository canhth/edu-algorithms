/**
 * @param {number[]} nums
 * @return {number}
 */
export default function maxSubArray (nums) {
	let max = nums[0],
		maxSoFar = nums[0];
	for (let i = 1; i < nums.length; ++i) {
		maxSoFar = Math.max(maxSoFar + nums[i], nums[i]);
		max = Math.max(max, maxSoFar);
	}
	return max;
}