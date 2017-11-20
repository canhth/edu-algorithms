import Queue from "../basic/Queue.js";

export const delimiter = ",";

export class TreeNode {

	constructor (val) {
		this.val = val;
		this.left = this.right = null;
	}

}

export function serialize (headNode = null) {

	const arr = [];
	const q = new Queue(headNode);

	let node;

	while (typeof (node = q.pull()) !== "undefined") {
		if (!node) {
			arr.push("");
			continue;
		}
		arr.push(node.val);
		q.add(node.left);
		q.add(node.right);
	}

	while (arr.length > 0 && !arr[arr.length - 1])
		arr.pop();

	return arr.join(delimiter);

}

export function deserialize (string = "") {

	const input = string.split(delimiter);

	let parents = [null],
		nextParents = [],
		parent = 0,
		root = null;

	for (const v of input) {
		if (!v) {
			parent += 1;
			continue;
		}
		const p = parent >> 1;
		const node = new TreeNode(parseFloat(v));
		if (!parents[p]) {
			parents[0] = root = node;
			parent = 0;
			continue;
		}
		parents[p][parent % 2 === 0 ? "left" : "right"] = node;
		nextParents.push(node);
		parent++;
		if (parent >> 1 >= parents.length) {
			parent = 0;
			parents = nextParents;
		}
	}

	return root;

}
