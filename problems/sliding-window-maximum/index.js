import DoubleEndedQueue from "../basic/DoubleEndedQueue.js";

export default function slidingWindow (arr = [], k = 1) {

	const q = new DoubleEndedQueue();
	const res = [];

	for (let i = 0; i < arr.length; ++i) {

		if (!q.isEmpty() && q.peek() < i - k + 1)
			q.pull();

		while (!q.isEmpty() && arr[q.peekLast()] < arr[i])
			q.pullLast();

		q.add(i);

		if (i >= k - 1)
			res.push(arr[q.peek()]);

	}

	return res;

}