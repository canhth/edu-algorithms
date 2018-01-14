/**
 * @param {number[]} heights
 * @return {number}
 */
export default function maxWaterArea (heights) {

	let p1 = 0,
		p2 = heights.length - 1,
		maxArea = 0;

	while (p1 < p2) {
		const localMin = Math.min(heights[p1], heights[p2]);
		const area = (p2 - p1) * localMin;
		if (area > maxArea) {
			maxArea = area;
		}
		if (heights[p1] < heights[p2]) {
			++p1;
		} else {
			--p2;
		}
	}

	return maxArea;

};