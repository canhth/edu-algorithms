/**
 * Greatest common divisor of 2 numbers.
 * @param {number} a
 * @param {number} b
 */
export default function gcd (a, b) {
	if (b === 0)
		return a;
	return gcd(b, a % b);
}
