const complements = {
	"9": "6",
	"6": "9",
	"0": "0",
	"8": "8",
	"1": "1"
};

/**
 * Check whether the number as string is strobogrammatic
 * @param string
 * @returns {boolean}
 */
export function isStrobogrammatic (string) {

	for (let i = 0; i < string.length / 2; ++i) {
		if (
			!complements.hasOwnProperty(string[i])
			|| complements[string[i]] !== string[string.length - 1 - i]
		) {
			return false;
		}
	}

	return true;

}

/**
 * Follow-up.
 * Generate n strobogrammatic numbers.
 * @param {number} n
 */
export function generateStrobogrammatics (n) {

	return n > 0 ? gen(0, n, [], []) : [];

}

function join (v, comp) {
	let arr = v.slice();
	if (comp)
		arr = arr.concat(comp);
	return arr.concat(v.slice().reverse().map(c => complements[c])).join("");
}

function gen (i, n, v, vars) {

	if (i === (n - 1) / 2) {
		for (const comp in complements) {
			if (comp !== complements[comp])
				continue;
			vars.push(join(v, comp));
		}
		return vars;
	}

	if (i >= n / 2) {
		vars.push(join(v));
		return;
	}

	for (const comp in complements) {
		v.push(comp);
		gen(i + 1, n, v, vars);
		v.pop();
	}

	return vars;

}