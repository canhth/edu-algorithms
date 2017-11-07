function charMatch (char, r) {
	return r === "." ? !!char : r === char;
}

export default function isMatch (string, regex, i = 0, r = 0, mem = []) {

	if (r >= regex.length)
		return i === string.length;

	if (mem[i] && mem[i][r])
		return mem[i][r];
	if (!mem[i])
		mem[i] = [];

	if (regex[r + 1] === "*") {
		return mem[i][r] = isMatch(string, regex, i, r + 2, mem)
			|| charMatch(string[i], regex[r])
			&& isMatch(string, regex, i + 1, r, mem);
	}

	return mem[i][r] = charMatch(string[i], regex[r])
		&& isMatch(string, regex, i + 1, r + 1, mem);

}