import Heap from "../basic/Heap.js";

const HEIGHT = 2;
const RIGHT = 1;
const LEFT = 0;

export default function skyline (buildings) {

	if (!buildings.length)
		return [];

	const line = [];
	const heap = new Heap((b1, b2) => b2[HEIGHT] - b1[HEIGHT]);
	const endX = Number.MAX_SAFE_INTEGER - 1;

	let x = buildings[0][LEFT],
		nextBuilding = 0;

	while (x <= endX) {

		while (nextBuilding < buildings.length && buildings[nextBuilding][LEFT] <= x)
			heap.add(buildings[nextBuilding++]);

		while (heap.size() > 0 && heap.peak()[RIGHT] <= x)
			heap.poll();

		const height = heap.size() > 0 ? heap.peak()[HEIGHT] : 0;

		if ((line[line.length - 1] || [])[1] !== height)
			line.push([x, height]);

		x = Math.min(
			heap.size() > 0 ? heap.peak()[RIGHT] : Number.MAX_SAFE_INTEGER,
			nextBuilding < buildings.length
				? buildings[nextBuilding][LEFT]
				: Number.MAX_SAFE_INTEGER
		);

	}

	return line;

}