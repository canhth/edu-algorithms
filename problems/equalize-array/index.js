/**
 * Algorithm:
 * 1. Increasing all other numbers except one can be replaced with decreasing one particular
 *    number in each round. This won't change the result, as we care only about relative changes.
 *    Thus, now we need to find a way to increase/decrease all the numbers to a particular number.
 * 2. To do so, we take deltas instead of numbers (values in comparison to the minimal element in
 *    the array, a[i] - min(a[*])), and find a number of decreases we need to perform.
 * 3. The edge case here is that not always this way would give the best result. See [2, 5, 5, 5]
 *    for example. It can be solved in 4 rounds, but algorithm yields 6, as deltas are [0, 3, 3, 3],
 *    and 3 can only be partitioned as 1 and 2 (2 times). To prevent this, for a given small range
 *    we can pick the minimum for all results of deltas + values A from 0 to 4. For example, if A=2,
 *    [0, 3, 3, 3] + 2 = [2, 5, 5, 5], and the algorithm will give us 4.
 */

/**
 * Return minimal number of subtractions for num to reach 0 by subtracting num for 1, 2 or 5.
 * @param {number} num
 * @return {number}
 */
function stepsTo0 (num) {
	let steps = Math.floor(num / 5);
	steps += Math.floor((num = num % 5) / 2);
	return steps + (num % 2);
}

/**
 * The problem solution.
 * @param {number[]} numbers
 */
export default function minStepsToEqualize (numbers) {

	let min = Math.min(...numbers),
		minSteps = Infinity;

	for (let i = 0, curSteps; curSteps = 0, i < 5; ++i) {
		for (let number of numbers)
			curSteps += stepsTo0(number - min + i);
		minSteps = Math.min(curSteps, minSteps);
	}

	return minSteps;

}