/**
 * @param {string} input
 * @return {number}
 */
export default function longestValidParentheses (input) {

	const stack = [];
	const joins = new Map();

	let max = 0;

	for (let i = 0; i < input.length; ++i) {

		if (input[i] === "(") {
			stack.push(i);
			continue;
		}

		if (stack.length === 0)
			continue;

		const j = stack.pop();
		const len = i - j + 1;
		const lenSoFar = len + (joins.get(j) || 0);

		joins.set(i + 1, lenSoFar);
		max = Math.max(max, lenSoFar);

	}

	return max;

}