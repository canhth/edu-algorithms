export default function topKFrequent (nums, k) {

	const freq = new Map();
	const buckets = [];
	const items = [];

	for (const int of nums)
		freq.set(int, (freq.has(int) ? freq.get(int) : 0) + 1);

	for (const [key, val] of freq.entries()) {
		if (buckets.hasOwnProperty(val))
			buckets[val].push(key);
		else
			buckets[val] = [key];
	}

	for (let i = buckets.length - 1; i > 0 && items.length < k; --i) {
		if (!buckets.hasOwnProperty(i))
			continue;
		for (const n of buckets[i]) {
			items.push(n);
			if (items.length >= k)
				break;
		}
	}

	return items;

}