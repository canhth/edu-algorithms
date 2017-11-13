/**
 * @param {number[]} nums
 * @return {number}
 */
export default function longestConsecutive (nums) {

	let max = 0;

	const map = new Map();

	for (const num of nums) {

		if (map.has(num))
			continue;

		const left = map.has(num - 1)
			? map.get(num - 1)
			: num;
		const right = map.has(num + 1)
			? map.get(num + 1)
			: num;

		if (right - left + 1 > max) {
			max = right - left + 1;
		}

		map.set(left, right);
		if (left !== right)
			map.set(right, left);
		if (left !== num && right !== num)
			map.set(num, 0);

	}

	return max;

}
