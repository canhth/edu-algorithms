export default function heapSort (arr) {

	// Example:
	// [  5,
	//  8,  2,
	// 1,6,9,0]

	for (let pos = arr.length >> 2 - 1; pos > 0; --pos) {
		heapifyDown(arr, arr.length, pos);
	}

	for (let len = arr.length; len > 1; --len) {
		heapifyDown(arr, len, 0);
		const temp = arr[0];
		arr[0] = arr[len - 1];
		arr[len - 1] = temp;
	}

	return arr;

}

function heapifyDown (arr, len, index) {

	while (true) {

		const left = index * 2 + 1;
		const right = index * 2 + 2;
		let maxIndex = index;

		if (left < len && arr[maxIndex] < arr[left])
			maxIndex = left;

		if (right < len && arr[maxIndex] < arr[right])
			maxIndex = right;

		if (maxIndex === index)
			break;

		const temp = arr[maxIndex];
		arr[maxIndex] = arr[index];
		arr[index] = temp;

		index = maxIndex;

	}

}
