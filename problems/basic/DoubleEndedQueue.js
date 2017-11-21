export default class DoubleEndedQueue {

	constructor () {
		this.head = this.tail = undefined;
	}

	empty () {
		return !this.head;
	}

	peek () {
		return this.tail
			? this.tail.value
			: undefined;
	}

	peekLast () {
		return this.head
			? this.head.value
			: undefined
	}

	add (value) {
		const newEl = {
			value: value,
			prev: this.head,
			next: undefined
		};
		if (this.head)
			this.head.next = newEl;
		else
			this.tail = newEl;
		this.head = newEl;
	}

	pull () {
		const next = this.tail && this.tail.next;
		const curr = this.tail;
		if (next) {
			this.tail = next;
			next.prev = undefined;
		} else {
			this.head = this.tail = undefined;
		}
		return curr && curr.value;
	}

	pullLast () {
		const prev = this.head && this.head.prev;
		const curr = this.head;
		if (prev) {
			this.head = prev;
			prev.next = undefined;
		} else {
			this.head = this.tail = undefined;
		}
		return curr && curr.value;
	}

}