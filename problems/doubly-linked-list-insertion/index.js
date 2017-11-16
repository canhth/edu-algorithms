/**
 * @param {*} head
 * @param {number} element
 * @returns {null|{prev,next,value}}
 */
export default function addSorted (head, element) {

	let listHead = head,
		last = null;

	while (head && head.value < element) {
		last = head;
		head = head.next;
	}

	const newNode = {
		value: element,
		next: head,
		prev: last
	};

	if (last) {
		last.next = newNode;
	} else {
		listHead = newNode;
	}
	if (head)
		head.prev = newNode;

	return listHead;

}
