import test from "ava";
import solution from "./index.js";

const toList = function (...args) {
	let head = null,
		h = null;
	for (const x of args) {
		const a = { val: x, next: null };
		if (!head)
			head = h = a;
		else
			head = (head.next = a);
	}
	return h;
};

const flatten = function (list) {
	const arr = [];
	while (list) {
		arr.push(list.val);
		list = list.next;
	}
	return arr;
};

[
	[toList(1), 1, toList()],
	[toList(1,2), 1, toList(1)],
	[toList(1,2,3), 2, toList(1,3)],
	[toList(1,5,8,3,2), 5, toList(5,8,3,2)]
].forEach(([a, x, b]) => test(`List ${ flatten(a) } -${ x }th must be ${ flatten(b) }`, (t) => {

	t.deepEqual(flatten(solution(a, x)), flatten(b));

}));