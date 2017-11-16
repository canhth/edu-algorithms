export default function productExceptSelf (arr) {

	const res = [];

	for (let i = 0; i < arr.length; ++i)
		res[i] = i === 0 ? 1 : res[i - 1] * arr[i - 1];

	let acc = arr[arr.length - 1];

	for (let i = arr.length - 2; i >= 0; --i) {
		res[i] *= acc;
		acc *= arr[i];
	}

	return res;

}