/**
 * @param {string} s
 * @return {number}
 */
export default function countSubstrings (s = "") {

	let n = 0;

	for (let i = 0; i < s.length; ++i) {
		n += expand(s, i, i);
		n += expand(s, i, i + 1);
	}

	return n;

}

function expand (s, left, right) {
	let count = 0;
	while (left >= 0 && right < s.length && s[left--] === s[right++])
		++count;
	return count;
}
