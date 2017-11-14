/**
 * @param {number[]} heights
 * @return {number}
 */
export default function waterTrap (heights) {

	let left = 0,
		right = heights.length - 1,
		level = 0,
		water = 0;

	while (left < right) {
		level = Math.max(level, Math.min(heights[left], heights[right]));
		water += level - heights[
			heights[left] < heights[right]
				? left++
				: right--
			];
	}

	return water;

}
