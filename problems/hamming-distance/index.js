/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export default function hammingDistance (x, y) {

	let count = 0;

	while (x > 0 || y > 0) {
		count += (x ^ y) % 2;
		x = x >> 1;
		y = y >> 1;
	}

	return count;

}