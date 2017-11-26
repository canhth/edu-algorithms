/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
export default function selfDividingNumbers (left, right) {
	const a = [];
	while (left <= right) {
		if (isSelfDividing(left))
			a.push(left);
		left++;
	}
	return a;
};

function getN (n, x = 0) {
	return Math.floor(n / Math.pow(10, x)) % 10;
}

function isSelfDividing (n) {
	const digits = Math.floor(Math.log10(n)) + 1;
	for (let i = 0; i < digits; ++i) {
		if ((n / getN(n, i)) % 1 !== 0)
			return false;
	}
	return true;
}