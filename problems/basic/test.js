import test from "ava";
import Heap from "./Heap.js";
import Queue from "./Queue.js";
import gcd from "./gcd.js";

[
	[[3,1,5,8,0], [3,1,1,1,0]],
	[[6,8,4,7,2,-1], [6,6,4,4,2,-1]]
].forEach(([toHeap, res]) => test(`Min heap: heapify [${ toHeap }], get ${ res }`, (t) => {

	const comp = (a, b) => a - b;
	const minHeap = new Heap(comp);

	for (let i = 0; i < res.length; ++i) {
		minHeap.add(toHeap[i]);
		t.is(minHeap.peak(), res[i]);
	}

	t.is(minHeap.size(), res.length);

	const sorted = toHeap.slice().sort(comp);

	for (let i = 0; i < res.length; ++i) {
		t.is(minHeap.poll(), sorted[i]);
	}

}));

[
	[[3,1,5,8,0], [3,3,5,8,8]],
	[[6,8,4,7,2,-1,9], [6,8,8,8,8,8,9]]
].forEach(([toHeap, res]) => test(`Max heap: heapify [${ toHeap }], get ${ res }`, (t) => {

	const comp = (a, b) => b - a;
	const maxHeap = new Heap(comp);

	for (let i = 0; i < res.length; ++i) {
		maxHeap.add(toHeap[i]);
		t.is(maxHeap.peak(), res[i]);
	}

	t.is(maxHeap.size(), res.length);

	const sorted = toHeap.slice().sort(comp);

	for (let i = 0; i < res.length; ++i) {
		t.is(maxHeap.poll(), sorted[i]);
	}

}));

[
	[[1,2,-1,null,null,5,null], [1,1,1,1,2,-1,-1,5]]
].forEach(([acts, tops]) => test(`Queue: from [${ acts }], get ${ tops }`, (t) => {

	const queue = new Queue();

	let i = 0;

	for (; i < acts.length; ++i) {
		if (acts[i] !== null) {
			queue.add(acts[i]);
			t.is(queue.first(), tops[i]);
		} else {
			t.is(queue.pull(), tops[i]);
		}
	}

	for (; i < tops.length; ++i) {
		t.is(queue.pull(), tops[i]);
	}

	t.is(queue.pull(), undefined);

}));

[
	[2, 3, 1],
	[100, 200, 100],
	[5, 11, 1],
	[21, 6, 3]
].forEach(([a, b, res]) => test(`GCD(${ a }, ${ b }) must be ${ res }`, (t) => {

	t.is(gcd(a, b), res);

}));
