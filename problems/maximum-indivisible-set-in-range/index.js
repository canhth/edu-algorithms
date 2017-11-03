/**
 * Algorithm:
 * 1. In a given set of positive non-zero integers from A to B, there's always possible to return
 *    at least half of the numbers. For example, take a=1, b=100. We can return all numbers greater
 *    than 51, as they're all mutually indivisible ([51..100]). In this case, numbers in [1..50] can
 *    divide the corresponding number from [51..100] (51 / 3, 52 / 2, 52 / 4, ..., 100 / 50, ...).
 * 2. The following would also work if we take for example a=100, b=200. Neither single pair from
 *    [101..200] is mutually divisible, but 100 and all the integers below are.
 *
 * Complexity:
 *    O(n) time (generating answer), O(n) additional space (generating answer). Could be O(1) if
 *    we were just asked to return a range.
 *
 * @param {number} a - Positive integer, a > 0
 * @param {number} b - Positive integer, b > a
 * @param {number} x - Positive integer, 0 < x < b - a + 1
 */
export default function solution (a, b, x) {

	a = Math.max((b >> 1) + 1, a);

	return b - a + 2 > x
		? new Set(Array.from({ length: x }, (e, i) => a + i))
		: new Set();

}