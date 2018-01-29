function getNumberOfDigits (number) {
	return ~~Math.log10(number) + 1;
}

function getNthDigit (number, digit) {
	return ~~(number / 10 ** (getNumberOfDigits(number) - digit - 1) % 10);
}

/**
 * @param {number[]} digits
 */
function numberFromDigits (digits) {
	let n = digits.length,
		res = 0;
	while (n-- > 0) {
		res += digits[n] * (10 ** (digits.length - n - 1));
	}
	return res;
}

export default function generate (seed = 1, n = 10) {

	const res = [seed];

	while (--n > 0) {
		const len = getNumberOfDigits(seed);
		const newDigits = [];
		let count = 0;
		for (let i = 1; i < len + 1; ++i) {
			count++;
			const prev = getNthDigit(seed, i - 1);
			if (getNthDigit(seed, i) !== prev || i === len) {
				newDigits.push(count, prev);
				count = 0;
			}
		}
		res.push(seed = numberFromDigits(newDigits));
	}

	return res;

}