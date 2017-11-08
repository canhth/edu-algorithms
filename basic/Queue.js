export default class Queue {

	constructor (value) {
		this.head = this.tail = typeof value !== "undefined"
			? { value, next: null }
			: null;
	}

	head () {
		return this.head ? this.head.value : null;
	}

	poll () {
		if (this.head === null)
			return null;
		const value = this.head.value;
		this.head = this.head.next;
		if (this.head === null)
			this.tail = null;
		return value;
	}

	add (value) {
		if (this.tail === null)
			this.head = this.tail = { value, next: null };
		else
			this.tail.next = this.tail = { value, next: null };
	}

}
