export default class Heap {

	constructor (comparator) {
		this.array = [];
		this.comparator = comparator || Heap.MIN;
	}

	add (element) {
		this.array.push(element);
		this.heapifyUp();
	}

	size () {
		return this.array.length;
	}

	poll () {
		const element = this.peak();
		if (this.array.length > 1)
			this.array[0] = this.array.pop();
		else
			this.array.pop();
		this.heapifyDown();
		return element;
	}

	peak () {
		return this.array[0];
	}

	/**
	 * @private
	 */
	swap (index1, index2) {
		const temp = this.array[index1];
		this.array[index1] = this.array[index2];
		this.array[index2] = temp;
	}

	/**
	 * @private
	 */
	heapifyUp () {
		if (this.array.length < 2)
			return;
		let index = this.array.length - 1;
		while (index !== 0) {
			const parentIndex = index - 1 >> 1;
			if (this.comparator(this.array[index], this.array[parentIndex]) < 0)
				this.swap(index, parentIndex);
			index = parentIndex;
		}
	}

	/**
	 * @private
	 */
	heapifyDown () {
		if (this.array.length < 2)
			return;
		let index = 1;
		while (index < this.array.length) {
			let smallestIndex = index;
			if (smallestIndex + 1 < this.array.length) {
				if (this.comparator(this.array[smallestIndex + 1], this.array[smallestIndex]) < 0)
					smallestIndex = smallestIndex + 1;
			}
			if (this.comparator(this.array[index - 1 >> 1], this.array[smallestIndex]) < 0)
				break;
			this.swap(index - 1 >> 1, smallestIndex);
			index = smallestIndex * 2 + 1;
		}
	}

}

Heap.MIN = (a, b) => a - b;
Heap.MAX = (a, b) => b - a;
