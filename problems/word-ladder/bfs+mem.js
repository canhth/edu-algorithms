import Queue from "../basic/Queue.js";

function addSolution (list, arr = []) {
	if (list.parent)
		addSolution(list.parent, arr);
	arr.push(list.word);
	return arr;
}

/**
 * @param w1
 * @param w2
 * @param {string[]} wList - List of lowercase english words.
 */
export default function findLadders (w1, w2, wList) {

	const visited = new Set();
	const words = new Set(wList);
	const solution = [];

	let queue = new Queue({ level: 1, word: w1, parent: null }),
		maxLevel = Infinity,
		q;

	while (q = queue.pull()) {

		if (q.level > maxLevel)
			break;
		if (q.level === maxLevel) {
			if (q.word === w2)
				solution.push(addSolution(q));
			continue;
		}

		visited.add(q.word);

		for (let charCode = 97; charCode < 123; ++charCode) {
			for (let i = 0; i < q.word.length; ++i) {
				const word = q.word.substr(0, i) + String.fromCharCode(charCode)
				                 + q.word.substr(i + 1, q.word.length - i - 1);
				if (!words.has(word))
					continue;
				if (word === w2)
					maxLevel = q.level + 1;
				if (!visited.has(word))
					queue.add({ level: q.level + 1, word: word, parent: q });
			}
		}

	}

	return solution;

}