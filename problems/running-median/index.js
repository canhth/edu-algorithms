import Heap from "../basic/Heap.js";

/**
 * @param {number[]} a
 * @returns {number[]}
 */
export default function runningMedian (a) {

	let minHeap = new Heap((a, b) => a - b),
		maxHeap = new Heap((a, b) => b - a);

	const currentMedian = () => (minHeap.size() === maxHeap.size()
		? (minHeap.peak() + maxHeap.peak()) / 2
		: minHeap.size() > maxHeap.size()
			? minHeap.peak()
			: maxHeap.peak()) || 0;

	for (let i = 0; i < a.length; ++i) {

		const median = currentMedian();

		if (a[i] > median) {
			minHeap.add(a[i]);
			if (minHeap.size() > maxHeap.size() + 1) {
				maxHeap.add(minHeap.poll());
			}
		} else {
			maxHeap.add(a[i]);
			if (maxHeap.size() > minHeap.size() + 1) {
				minHeap.add(maxHeap.poll());
			}
		}

		a[i] = currentMedian();

	}

	return a;

}
