// Here is an example (by a good man in a comments):
// [2,3,6,5,4,1]
//
// Solution:
// Step1: from right to left, find the first number which not increase in a ascending order. In this
//        case which is 3.
// Step2: here we can have two situations:
//  2.1. We cannot find the number, all the numbers increasing in a ascending order. This means this
//       permutation is the last permutation, we need to rotate back to the first permutation. So we
//       reverse the whole array, for example, 6,5,4,3,2,1 we turn it to 1,2,3,4,5,6.
//  2.2. We can find the number, then the next step, we will start from right most to leftward, try
//       to find the first number which is larger than 3, in this case it is 4.
//  Then we swap 3 and 4, the list turn to 2,4,6,5,3,1.
// Step3: reverse numbers on the right of 4, we finally get 2,4,1,3,5,6.
// Time complexity is: O(3*n)=O(n).

/**
 * @param {number[]} arr
 * @return {number[]}
 */
export default function nextPermutation (arr) {

	let i = arr.length - 1,
		j = i - 1;

	for (; j >= 0; --j)
		if (arr[j] < arr[j + 1])
			break;

	if (j >= 0) {
		while (arr[i] <= arr[j])
			--i;
		swap(arr, i, j);
	}

	 for (i = j + 1; i < j + 1 + (arr.length - j - 1) / 2; ++i)
	 	swap(arr, i, arr.length - i + j);

	return arr;

}

function swap (arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}