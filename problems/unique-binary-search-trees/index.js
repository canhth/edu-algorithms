/**
 * @param {number} n
 * @return {number}
 */
export default function numTrees (n) {

	const dp = [1,1];

	while (dp.length <= n) {
		let sum = 0;
		for (let x = 0; x < dp.length; ++x) {
			sum += dp[x] * dp[dp.length - x - 1];
		}
		dp.push(sum);
	}

	return dp[n];

}