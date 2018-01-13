export default function pairSum (arr, sum) {

	const set = new Set();

	for (const el of arr) {
		if (set.has(sum - el)) {
			return [sum - el, el];
		} else {
			set.add(el);
		}
	}

	return null;

}