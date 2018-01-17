// ["a", "b", "c"]
// ^   ________   => "a"+"bc" => "a" + "b" + "c", "a" + "c" + "b"
// ^    ^         => "b"+"ac"
// => "c"+"ab"
// // O(n!)

export default function permutations (string) {
	return wrapper(string.split(""));
}

function wrapper (array, left = 0, results = []) {
	if (left + 1 >= array.length) {
		results.push(array.join(""));
		return results;
	}
	for (let i = left; i < array.length; ++i) {
		swap(array, left, i);
		wrapper(array, left + 1, results);
		swap(array, left, i);
	}
	return results;
}

function swap (array, i, j) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
