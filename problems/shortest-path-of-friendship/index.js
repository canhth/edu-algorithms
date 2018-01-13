/**
 * @param {Object.<string,string[]>} net
 * @param {string} A
 * @param {string} B
 * @returns {string[][]}
 */
export default function shortestPaths (net, A, B) {

	const visited = new Set([A]);
	const parents = {};
	const path = [];

	if (A === B)
		return [[A]];

	let frontier = new Set([A]),
		next = new Set(),
		length = 1,
		found = false;

	while (frontier.size > 0) {
		for (const person of frontier) {
			const friends = net[person];
			if (!friends)
				continue;
			for (const friend of friends) {
				if (parents.hasOwnProperty(friend)) {
					parents[friend].add(person);
				} else {
					parents[friend] = new Set([person]);
				}
				if (visited.has(friend))
					continue;
				visited.add(friend);
				next.add(friend);
				if (friend === B)
					found = true;
			}
		}
		if (found)
			break;
		frontier = next;
		next = new Set();
		length++;
	}

	if (!parents.hasOwnProperty(B))
		return path;

	const acc = [];

	acc[length] = B;
	collectSolutions(parents, B, length, path, acc, A);

	return path;

}

function collectSolutions (parents, B, level, acc, path, target) {

	if (level === 0)
		return target === B ? acc.push(path.slice()) : null;

	for (const A of parents[B]) {
		path[level - 1] = A;
		collectSolutions(parents, A, level - 1, acc, path, target);
	}

}