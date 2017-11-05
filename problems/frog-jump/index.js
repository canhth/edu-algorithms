/**
 * Algorithm:
 * 1. For each stone position, we store a set of jump lengths such that we can reach this stone so
 *    far.
 * 2. If we ever meet the last stone, return true.
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
	const map = new Map();

	for (const stone of stones)
		map.set(stone, new Set());

	map.get(stones[0]).add(0);

	for (let p = 0; p < stones.length - 1; ++p) {
		const set = map.get(stones[p]);
		for (const len of set) {
			for (let i = -1; i <= 1; ++i) {
				if (len + i < 1)
					continue;
				const stone = len + i + stones[p];
				if (stone === lastStone)
					return true;
				if (map.has(stone))
					map.get(stone).add(len + i);
			}
		}
	}

	return false;

};

// * this formula checks whether the last stone is reachable if the frog will always speed up.
