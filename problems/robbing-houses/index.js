/**
 * @param {number[]} money
 * @returns {number}
 */
export default function rob (money) {

	let past = 0,
		current = 0;

	for (let i = 0; i < money.length; ++i) {
		const next = Math.max(past + money[i], current);
		past = current;
		current = next;
	}

	return current;

}
