/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export default function search (nums, target) {

	let left = 0,
	    right = nums.length - 1;

	if (nums[left] === target)
		return left;
	if (nums[right] === target)
		return right;

	//     <-? center ?->
	// left ---> | <--- right
	while (left < right) {
		const center = (left + right) >> 1; // (int)(x/2)
		if (nums[center] === target)
			return center;
		// 3 4 5 6 7 1 2
		// ^     ^
		if (nums[left] < nums[center]) {
			if (target > nums[left] && target < nums[center]) {
				right = center;
			} else {
				left = center;
			}
		} else { // 5 6 7 1 2 3 4
			if (target > nums[left] || target < nums[center]) {
				right = center;
			} else {
				left = center;
			}
		}
	}

	return -1;

}
