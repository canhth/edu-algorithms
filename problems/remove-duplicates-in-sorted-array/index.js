/**
 * @param {number[]} nums
 * @return {number}
 */
export default function removeDuplicatesFromSortedArray (nums) {
	let j = 0;
	for (let i = 1; i < nums.length; ++i) {
		if (nums[i] === nums[i - 1])
			j--;
		if (j < 0)
			nums[i + j] = nums[i];
	}
	nums.length = nums.length + j;
	return nums.length;
}