export default function findLadders (w1, w2, wList) {

	const map = new Map();
	const visited = new Map();

	let maxLevel = wList.length,
		answ = [];

	return dive(w1, [w1]);

	function dive (word, stack, level = stack.length) {

		if (level > maxLevel)
			return answ;

		for (let w of wList) {

			let cLevel;

			if (visited.has(w) && (cLevel = visited.get(w)) < level)
				continue;

			const d = dist(word, w, map);

			if (d !== 1)
				continue;

			visited.set(w, level);

			if (w === w2) {
				if (level < maxLevel) {
					maxLevel = level;
					answ = [];
				}
				if (level === maxLevel) {
					answ.push(stack.concat(w))
				} else {
					continue;
				}
			}

			stack.push(w);
			dive(w, stack);
			stack.pop();

		}

		return answ;

	}

	function dist(wordA, wordB, map) {

		if (wordA < wordB) {
			const temp = wordA;
			wordA = wordB;
			wordB = temp;
		}

		if (map.has(wordA) && map.get(wordA).has(wordB))
			return map.get(wordA).get(wordB);

		let diff = 0;

		for (let i = 0; i < wordA.length; ++i) {
			if (wordA[i] !== wordB[i])
				++diff;
		}

		if (!map.has(wordA))
			map.set(wordA, new Map());

		map.get(wordA).set(wordB, diff);

		return diff;

	}

};