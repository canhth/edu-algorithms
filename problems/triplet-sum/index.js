export default function tripletSum (arr, sum) {

	for (let i = 0; i < arr.length; ++i) {

		const set = new Set();
		const left = sum - arr[i];

		for (let j = 0; j < arr.length; ++j) {
			if (i === j)
				continue;
			if (set.has(left - arr[j])) {
				return [arr[i], left - arr[j], arr[j]];
			} else {
				set.add(arr[j]);
			}
		}

	}

	return null;

}