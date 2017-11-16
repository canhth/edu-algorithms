import test from "ava";
import addToList from "./index.js";

function checkConsistent (node) {
	if (!node)
		return true;
	if (node.prev && (!node.prev.next || node.prev.next !== node))
		return false;
	return !(node.next && (!node.next.prev || node.next.prev !== node));
}

[
	[[1, 2, 3], 7, [1, 2, 3, 7]],
	[[], 7, [7]],
	[[1], 0, [0, 1]],
	[[1, 7], 5, [1, 5, 7]]
].forEach(([array, el, res]) => test(`Adding ${ el } to ${ array.join("<->") } yields ${ 
res.join("<->") }`, (t) => {

	let list = null,
		head,
		els = [],
		els2 = [];

	for (let x of array) {
		head = list = addToList(list, x);
	}

	while (head) {
		const check = checkConsistent(head);
		t.is(check, true);
		if (!check)
			return;
		els.push(head.value);
		head = head.next;
	}

	t.deepEqual(els, array);
	head = addToList(list, el);

	while (head) {
		const check = checkConsistent(head);
		t.is(check, true);
		if (!check)
			return;
		els2.push(head.value);
		head = head.next;
	}

	return t.deepEqual(els2, res);

}));