import test from "ava";
import solution from "./index.js";

const toList = function (...args) {
	let head = null,
		h = null;
	for (const x of args) {
		const a = { value: x, next: null };
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
		arr.push(list.value);
		list = list.next;
	}
	return arr;
};

[
	[toList()],
	[toList(1)],
	[toList(1,2)],
	[toList(1,2,3)],
	[toList(1,5,8,3,2)]
].forEach(([list]) => test(`Linked list ${ flatten(list) } must reverse`, (t) => {

	t.deepEqual(flatten(list).reverse(), flatten(solution(list)));

}));