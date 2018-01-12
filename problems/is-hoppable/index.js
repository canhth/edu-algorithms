/**
 * @param {number[]} jumps
 * @param {number} pos
 * @param {boolean[]} cache
 * @return {boolean}
 */
export default function canJump (jumps, pos = 0, cache = []) {

	if (pos >= jumps.length)
		return true;

	if (typeof cache[pos] !== "undefined")
		return cache[pos];

	for (let i = 1; i <= jumps[pos]; ++i) {
		if (cache[pos] = canJump(jumps, pos + i, cache))
			return true;
	}

	return false;

}
