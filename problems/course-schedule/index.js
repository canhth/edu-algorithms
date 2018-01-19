/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export default function canFinish (numCourses, prerequisites = []) {

	const edges = {};

	for (const edge of prerequisites) {
		if (edges.hasOwnProperty(edge[0]))
			edges[edge[0]].push(edge[1]);
		else
			edges[edge[0]] = [edge[1]];
	}

	const visited = new Set();

	for (const p of prerequisites)
		if (!dfs(edges, p[0], visited))
			return false;

	return true;

}

function dfs (edges, node, visited, onPath = new Set()) {
	if (visited.has(node))
		return true;
	visited.add(node);
	onPath.add(node);
	for (const nextNode of (edges[node] || [])) {
		if (onPath.has(nextNode) || !dfs(edges, nextNode, visited, onPath))
			return false;
	}
	onPath.delete(node);
	return true;
}