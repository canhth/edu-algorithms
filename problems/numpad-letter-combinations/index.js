const mapping = {
	"1": [],
	"2": ["a", "b", "c"],
	"3": ["d", "e", "f"],
	"4": ["g", "h", "i"],
	"5": ["j", "k", "l"],
	"6": ["m", "n", "o"],
	"7": ["p", "q", "r", "s"],
	"8": ["t", "u", "v"],
	"9": ["w", "x", "y", "z"],
	"0": []
};

/**
 * @param {string} digits
 * @param {number[]} res
 * @param {number} i
 * @param {string[]} answ
 * @return {string[]}
 */
export default function letterCombinations (digits, res = [], i = 0, answ = []) {

	if (i >= digits.length && digits) {
		answ.push(res.join(""));
		return answ;
	}

	for (const letter of (mapping[digits[i]] || [])) {
		res[i] = letter;
		letterCombinations(digits, res, i + 1, answ);
	}

	return answ;

}