import test from "ava";
import solution from "./index.js";

class TreeNode {

	constructor (val) {
		this.val = val;
		this.left = this.right = null;
	}

}

const node = (x, left = null, right = null) => {
	const node = new TreeNode(x);
	node.left = left;
	node.right = right;
	return node;
};

[
	[null, []],
	[
		node(1, node(2), node(4, null, node(5, null, node(6, null, node(7, null, node(8)))))),
		[2, 1, 4, 5, 6, 7, 8]
	],
	[
		node(1, null, node(2, node(3))),
		[1, 3, 2]
	]
].forEach(([root, sol], i) => test(`Tree ${ i } inorder traversal must be ${ sol }.`, (t) => {

	return t.deepEqual(solution(root), sol);

}));
