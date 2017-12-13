/**
 * @param {string} s
 * @param {string} k
 * @return {string}
 */
export default function minWindow (s, k) {

	const map = new Map();
	for (const char of k)
		map.set(char, (map.has(char) ? map.get(char) : 0) + 1);

	let left = 0,
		right = 0,
		len = Infinity,
		start = 0,
		count = 0;

	while (right < s.length) {

		if (!map.has(s[right])) {
			right++;
			continue;
		}

		if (map.get(s[right]) > 0)
			count++;
		map.set(s[right], map.get(s[right++]) - 1);

		while (count === k.length) {
			if (right - left < len)
				len = right - (start = left);
			if (!map.has(s[left++]))
				continue;
			map.set(s[left - 1], map.get(s[left - 1]) + 1);
			if (map.get(s[left - 1]) > 0)
				count--;
		}

	}

	return len === Infinity
		? ""
		: s.substr(start, len);

}