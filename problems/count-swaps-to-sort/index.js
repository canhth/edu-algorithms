// To achieve this, we can do the following:
// 1. Run bubble sort counting the swaps and end up with O(n^2) complexity
// 2. Run merge sort counting the swaps and end up with O(n*log(n)) complexity (O(n) aux space)

export default function countInversions (arr, temp = [], left = 0, right = arr.length) {

	if (left + 1 >= right)
		return 0;

	const middle = right + left >> 1;
	let inv = 0;

	inv += countInversions(arr, temp, left, middle);
	inv += countInversions(arr, temp, middle, right);

	let i = left,
		j = middle,
		k = 0;

	while (i < middle && j < right) {
		if (arr[i] > arr[j]) {
			inv += middle - i; // When taking element from the right half of the elements,
		                       // it means that it must be swapped with every element on the
		                       // left to be placed in the resulting array. This is middle - i.
			temp[k++] = arr[j++];
		} else {
			temp[k++] = arr[i++];
		}
	}

	while (i < middle)
		temp[k++] = arr[i++];
	while (j < right)
		temp[k++] = arr[j++];

	for (let x = 0; x < k; ++x) {
		arr[left + x] = temp[x];
	}

	return inv;

}
