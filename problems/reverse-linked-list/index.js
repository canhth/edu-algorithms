export default function reverseLinkedList (head) {

	if (!head)
		return head;

	let last = head,
		curr = head.next,
		h = head;

	while (curr && last) {
		const temp = curr.next;
		curr.next = last;
		last = curr;
		curr = temp;
	}

	h.next = null;

	return last;

}