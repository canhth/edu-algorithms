export default class Queue {

	constructor (value) {
		this.head = this.tail = typeof value !== "undefined"
			? { value, next: undefined }
			: undefined;
	}

	first () {
		return this.head ? this.head.value : undefined;
	}

	pull () {
		if (this.head === undefined)
			return undefined;
		const value = this.head.value;
		this.head = this.head.next;
		if (this.head === undefined)
			this.tail = undefined;
		return value;
	}

	add (value) {
		if (this.tail === undefined)
			this.head = this.tail = { value, next: undefined };
		else
			this.tail.next = this.tail = { value, next: undefined };
	}

}
