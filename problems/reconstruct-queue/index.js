/**
 * @param {number[][]} people
 * @return {number[][]}
 */
export default function reconstructQueue (people) {

	const peeps = new Map();
	const heights = [];
	const r = [];
	let list = null;

	function insertToLinkedList (item, pos) {
		let x = 0,
			head = list,
			parent;
		while (head && x++ < pos) {
			parent = head;
			head = head.n;
		}
		if (parent) {
			parent.n = {
				v: item,
				n: head
			};
		} else {
			list = {
				v: item,
				n: head
			};
		}
	}

	for (const p of people) {
		if (peeps.has(p[0])) {
			peeps.get(p[0]).push(p);
		} else {
			heights.push(p[0]);
			peeps.set(p[0], [p]);
		}
	}
	heights.sort((a, b) => b - a);
	for (const height of heights) {
		peeps.get(height).sort((a, b) => a[1] - b[1]);
		for (const p of peeps.get(height)) {
			insertToLinkedList(p, p[1]);
		}
	}
	while (list && list.v) {
		r.push(list.v);
		list = list.n;
	}

	return r;

};