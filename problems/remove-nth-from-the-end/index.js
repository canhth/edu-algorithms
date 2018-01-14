/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1->2->3->4->5
 *             ^
 * @param {{ val, next }} head
 * @param {number} n
 * @return {{ val, next }}
 */
export default function removeNthFromEnd (head, n) {

	const h = head;

	let fast = head;

	while (n-- > 0) {
		fast = fast.next;
	}

	if (fast === null)
		return h.next;

	while (fast && fast.next !== null) {
		fast = fast.next;
		head = head.next;
	}

	head.next = head.next ? head.next.next : null;

	return h;

}