/**
 * @param {number[]} nums
 * @return {number}
 */
export default function balloons (nums) {

	const balloons = [1];

	for (let n of nums)
		if (n > 0)
			balloons.push(n);

	balloons.push(1);

	const memory = balloons.map(() => []);

	return maximize(balloons, memory, 0, balloons.length - 1);

};

function maximize (arr, mem, left, right) {

	if (left >= right - 1)
		return 0;
	if (mem[left][right])
		return mem[left][right];

	let max = 0;

	for (let i = left + 1; i < right; ++i)
		max = Math.max(
			max,
			arr[left] * arr[i] * arr[right]
			+ maximize(arr, mem, left, i)
			+ maximize(arr, mem, i, right)
		);

	mem[left][right] = max;

	return max;

}
