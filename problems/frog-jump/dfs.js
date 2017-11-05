/**
 * Algorithm:
 * 1. For each stone position, take all possible jumps and perform depth first search.
 *
 * Complexity:
 *    O(n^2) time, O(n^2) additional space.
 *
 * @param {number[]} stones
 * @returns {boolean}
 */
export default function canCross (stones) {

	if (stones.length < 2)
		return true;

	if (
		stones[1] - 1 !== stones[0]
		|| stones[stones.length - 1] > (stones.length + 1) * stones.length / 2 // *
	) {
		return false;
	}

	const lastStone = stones[stones.length - 1];
	const set = new Set(stones);

	return check(stones[1], 1);

	function check (stone, jump) {
		if (stone === lastStone)
			return true;
		if (!set.has(stone))
			return false;
		if (check(stone + jump + 1, jump + 1))
			return true;
		if (check(stone + jump, jump))
			return true;
		return jump - 1 > 0 && check(stone + jump - 1, jump - 1);
	}

};

// * this formula checks whether the last stone is reachable if the frog will always speed up.
