export default function wordBreak (word, dict) {

	const set = new Set(dict);
	const mem = Array.from({ length: word.length + 1 }, (a, i) => i === 0);

	for (let i = 1; i <= word.length; ++i) {
		for (let b = i - 1; b >= 0; --b) {
			if (!mem[b])
				continue;
			const sub = word.substring(b, i);
			if (set.has(sub)) {
				mem[i] = true;
				break;
			}
		}
	}

	return mem[mem.length - 1];

};