/**
 * @param {number} n
 * @returns {string[]}
 */
export default function generateParenthesis (n) {

	return wrapper(0, 0, n, []);

}

function wrapper (opened, index, left, temp, res = []) {

	if (left === 0 && opened === 0) {
		res.push(temp.join(""));
		return res;
	}

	if (left > 0) {
		temp[index] = "(";
		wrapper(opened + 1, index + 1, left - 1, temp, res);
	}

	if (opened > 0) {
		temp[index] = ")";
		wrapper(opened - 1, index + 1, left, temp, res);
	}

	return res;

}