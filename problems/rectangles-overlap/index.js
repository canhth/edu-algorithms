/**
 * Finds overlap region of two rectangles given in a specified format.
 *
 * y
 * ^
 * |
 * |
 * +---> x
 *
 * @param {{ leftX: number, bottomY: number, width: number, height: number }} rect1
 * @param {{ leftX: number, bottomY: number, width: number, height: number }} rect2
 * @returns {{ leftX: number, bottomY: number, width: number, height: number }} rect
 */
export default function rectanglesOverlap (rect1, rect2) {

	const maxX = Math.max(rect1.leftX, rect2.leftX);
	const minX = Math.min(rect1.leftX + rect1.width, rect2.leftX + rect2.width);
	const maxY = Math.max(rect1.bottomY, rect2.bottomY);
	const minY = Math.min(rect1.bottomY + rect1.height, rect2.bottomY + rect2.height);

	if (maxX >= minX || maxY >= minY)
		return { leftX: 0, bottomY: 0, width: 0, height: 0 };

	return {
		leftX: maxX,
		bottomY: maxY,
		width: minX - maxX,
		height: minY - maxY
	};

}
