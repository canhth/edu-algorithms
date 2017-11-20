import test from "ava";
import { TreeNode, serialize, deserialize } from "./index.js";

const node = (x, left = null, right = null) => {
	const node = new TreeNode(x);
	node.left = left;
	node.right = right;
	return node;
};

[
	null,
	node(1, node(2), node(4, null, node(5, null, node(6, null, node(7, null, node(8)))))),
	node(1, node(2, node(3), node(4)), node(2, node(3), node(4))),
	node(1, node(2), node(4, node(5, node(6, node(7, node(8))))))
].forEach((tree) => test(`Serialized "${ serialize(tree) }" must be deserialized.`, (t) => {

	const res = deserialize(serialize(tree));

	return t.deepEqual(res, tree);

}));
