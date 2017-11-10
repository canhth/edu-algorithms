export default function countBits (num) {

	const history = [0];
	let pow = 0;

	for (let i = 1; i <= num; ++i) {
		const p = 1 << pow;
		history.push(history[i - p] + 1);
		if (2 * p === i + 1)
			++pow;
	}

	return history;

};