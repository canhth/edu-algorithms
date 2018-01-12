function visitPeople (matrix, people, i) {

	people[i] = true;

	for (let j = 0; j < matrix.length; ++j) {
		if (!matrix[i][j])
			continue;
		if (people[j])
			continue;
		visitPeople(matrix, people, j);
	}

}

export default function friendCirclesDFS (matrix) {

	const people = Array.from(matrix, () => false);

	let count = 0;

	for (let i = 0; i < people.length; ++i) {
		if (people[i])
			continue;
		++count;
		visitPeople(matrix, people, i);
	}

	return count;

}