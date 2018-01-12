// 1 1 0
// 1 1 0
// 0 0 1
// Or, alternatively, use just a DFS to count number of groups.

export default function friendCircles (matrix) {

	const parents = Array.from(matrix, (a, i) => i);

	let groups = matrix.length;

	for (let i = 0; i < matrix.length; ++i) {
		for (let j = i + 1; j < matrix.length; ++j) {
			if (!matrix[i][j])
				continue;
			const parent1 = findParent(parents, i);
			const parent2 = findParent(parents, j);
			if (parent1 !== parent2) {
				groups--;
				parents[parent1] = parent2;
			}
		}
	}

	return groups;

}

function findParent (parents, i) {
	return i === parents[i] ? i : findParent(parents, parents[i]);
}
