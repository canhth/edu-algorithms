import Queue from "../basic/Queue.js";

const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

/**
 * @param {number[][]} matrix
 * @return {number}
 */
export default function longestIncreasingPath (matrix) {

	const cache = Array.from(matrix, row => Array.from(row, () => 1));

	let max = 0;

	for (let row = 0; row < matrix.length; ++row) {
		for (let col = 0; col < matrix[row].length; ++col) {

			if (cache[row][col] > 1)
				continue;

			max = Math.max(findLen(cache, matrix, row, col), max);

		}
	}

	return max;

}

function findLen (cache, matrix, row, col) {

	const q = new Queue([row, col, 1]);

	let pos, max = 0;

	while (pos = q.pull()) {

		if (pos[2] > max)
			max = pos[2];

		for (const [dx, dy] of dirs) {

			const r = pos[0] + dy;
			const c = pos[1] + dx;
			const nextLen = pos[2] + 1;

			if (
				r < 0 || c < 0 || r >= matrix.length || c >= matrix[r].length
				|| matrix[r][c] >= matrix[pos[0]][pos[1]]
				|| cache[r][c] >= nextLen
			)
				continue;

			cache[r][c] = Math.max(nextLen, cache[r][c]);
			q.add([r, c, nextLen]);

		}

	}

	return max;

}