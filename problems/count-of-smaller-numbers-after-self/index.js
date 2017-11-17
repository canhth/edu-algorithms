// The number of elements < than the current element is exactly the number of swaps needed to be
// performed on the element to reach its sorted position against element i. This problem is related
// to "count-swaps-to-sort" problem.

export default function countSmaller (arr) {

	const arri = Array.from(arr, (e, i) => [e, i]);
	const answ = Array.from(arr, () => 0);

	return h(arri, [], 0, arr.length, answ);

}

function h (arr, temp, l, r, answ) {

	if (l + 1 >= r)
		return answ;

	const center = (l + r) >> 1;

	h(arr, temp, l, center, answ);
	h(arr, temp, center, r, answ);

	let i = l, j = center, k = 0;

	let c = 0;
	while (i < center && j < r) {
		if (arr[i][0] <= arr[j][0]) {
			answ[arr[i][1]] += c;
			temp[k++] = arr[i++];
		} else {
			temp[k++] = arr[j++];
			++c;
		}
	}

	while (i < center) {
		answ[arr[i][1]] += c;
		temp[k++] = arr[i++];
	}
	while (j < center)
		temp[k++] = arr[j++];

	while (k > 0)
		arr[l + (--k)] = temp[k];

	return answ;

}
