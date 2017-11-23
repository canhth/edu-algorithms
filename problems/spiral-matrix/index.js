export default function spiralOrder (matrix) {

	if (!matrix || !matrix.length || !matrix[0].length)
		return [];

	const res = [];
	const from = [0, 0, matrix[0].length - 1, matrix.length - 1]; // exclusive range, where we done

	let i = 0;

	while (from[0] <= from[2] && from[1] <= from[3]) {
		let d = 0,
			order = i % 4 > 1 ? -1 : 1;
		while (from[i % 4] * order + d <= from[(i + 2) % 4] * order) {
			res.push(matrix[
				from[i % 4 > 1 ? 3 : 1] + (i % 2) * d * order
			][
				from[(i + 1) % 4 > 1 ? 2 : 0] + ((i + 1) % 2) * d * order
			]);
			d++;
		}
		from[(i + 1) % 4] += (i + 1) % 4 > 1 ? -1 : 1;
		i += 1;
	}

	return res;

}
