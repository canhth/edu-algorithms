export default function inOrderTraversal (root) {

	const result = [];
	const stack = [];

	let head = root;

	while (head || stack.length) {
		while (head) {
			stack.push(head);
			head = head.left;
		}
		result.push((head = stack.pop()).val);
		head = head.right;
	}

	return result;

};