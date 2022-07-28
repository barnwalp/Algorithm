// Undirect cyclic unweighted grah
//			2 --- 0
//		/  \
//	1 --- 3

// Edge List
// graph is represented as edge connection among the nodes
// const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
// The index of the array is the value of the actual graph node
// const graph = {
	// 0: [2],
	// 1: [2, 3],
	// 2: [0, 1, 2],
	// 3: [1, 2],
// };

// Adjacent Matrix
// In case of weight graph 0/1 can be replaced by weight
// const graph = [
	// index of 0 has connection to index of 2
	// [0, 0, 1, 0],
	// index of 1 has connection to index of 2 and 3
	// [0, 0, 1, 1],
	// index of 2 has connection to index of 0, 1 and 3
	// [1, 1, 0, 1],
	// index of 3 has connection to index of 1 and 2
	// [0, 1, 1, 0],
// ]

// Adjacent Matrix can also be implemented using an object
// const graph = {
	// 0: [0, 0, 1, 0],
	// 1: [0, 0, 1, 1],
	// 2: [1, 1, 0, 1],
	// 3: [0, 1, 1, 0],
// }
class Graph {
	constructor(graph) {
		if (graph === undefined) {
			this.numberOfNodes = 0;
			this.adjacentList = {
			};
		} else {
			this.numberOfNodes = graph.length;
			this.adjacentList = graph;
		}
	}

	// In the following 2 methods adjacency list graph is created by 
	// first adding vertices in the graph and then adding connecting nodes
	addVertex(node) {
		this.adjacentList[node] = [];
		this.numberOfNodes++;
	}

	addEdge(node1, node2) {
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
	}

	// In the following method, graph can be build just by edge list
	buildGraph(edges) {
		for (let edge of edges) {
			const [node1, node2] = edge;
			if (!(node1 in this.adjacentList)) this.adjacentList[node1] = [];
			if (!(node2 in this.adjacentList)) this.adjacentList[node2] = [];
			this.adjacentList[node1].push(node2);
			this.adjacentList[node2].push(node1);
		}
	}

	depthFirstTraversal(src, visited) {
		let stack = [src];
		let result = "";
		while (stack.length > 0) {
			let curNode = stack.pop();
			visited.add(curNode);
			for (let node of this.adjacentList[curNode]) {
				result += `visited ${node} from ${curNode}\n`
				if (!visited.has(node)) {
					stack.push(node);
					visited.add(node);
				}
			}
		}
		return [result, visited];
	}

	breadthFirstTraversal(src, visited) {
		let queue = [src];
		let result = "";
		while (queue.length > 0) {
			let curNode = queue.shift();
			visited.add(curNode.toString());
			for (let node of this.adjacentList[curNode]) {
				result += `visited ${node} from ${curNode}\n`;
				if (!visited.has(node.toString())) {
					queue.push(node);
					visited.add(node.toString());
				}
			}
		}
		return [result, visited];
	}

	hasPath(src, dst, visited) {
		if (src === dst) return true;
		// adding the node in visited set
		visited.add(src.toString());
		for (let neighbor of this.adjacentList[src]) {
			// check path only if the node is not in visited set
			if (!visited.has(neighbor.toString())) {
				if (this.hasPath(neighbor, dst, visited) === true) {
					return true;
				}
			}
		}
		return false;
	}
	
	countConnectedComponent() {
		let visited = new Set();
		let count = 0;
		let result, newSet;
		const allNodes = Object.keys(this.adjacentList);
		for (let node of allNodes) {
			if (!visited.has(node)) {
				[result, newSet] = this.breadthFirstTraversal(node, visited);
				// console.log(newSet);
				visited = new Set([...visited, ...newSet]);
				count++;
			}
		}
		return count;
	}

	largestComponent() {
		let visited = new Set();
		let largest = 0;
		for(let node in this.adjacentList) {
			// console.log(node, this.adjacentList[node]);
			let stack = [node];
			let curNode;
			let count = 0;
			while (stack.length > 0) {
				curNode = stack.pop();
				count++;
				visited.add(curNode.toString());
				for (let vertex of this.adjacentList[curNode]) {
					if (!visited.has(vertex.toString())) {
						stack.push(vertex);
						// visited.add(vertex.toString());
					}
				}
			}
			if (count > largest) {
				largest = count;
			}
		}
		return largest;
	}

	largestComponentR() {
		const visited = new Set();
		let longest = 0;
		for (let node in this.adjacentList) {
			const size = this.exploreSize(node, visited);
			if (size > longest) longest = size;
		}
		return longest
	}

	exploreSize(node, visited) {
		// if node is visited, that means that it has already been counted
		// so it must return zero
		if (visited.has(node)) return 0;

		// if node is not visited
		visited.add(node);

		// count current node
		let size = 1;
		for (let neighbor of this.adjacentList[node]) {
			size += this.exploreSize(neighbor, visited);
		}
		return size;
	}

	shortestDistance(node1, node2) {
		let queue = [[node1, 0]];
		let visited = new Set();
		while (queue.length > 0) {
			const [curNode, distance] = queue.shift();
			visited.add(curNode.toString());
			for (let neighbor of this.adjacentList[curNode]) {
				if (!visited.has(neighbor)) {
					queue.push([neighbor, distance+1]);
					if(neighbor === node2) return distance+1;
				}
			}
		}
		return -1;
	}

	islandCount(grid) {
		let visited = new Set();
		let count = 0;
		for (let r=0; r<grid.length; r++) {
			for (let c=0; c<grid[r].length; c++) {
				if (this.findIsland(grid, r, c, visited) === true) {
					count++;
				}
			}
		}
		return count;
	}

	findIsland(grid, r, c, visited) {
		const rowInBounds = 0 <= r && r < grid.length;
		const colInBounds = 0 <= c && c < grid[0].length;
		if (!rowInBounds || !colInBounds) return false;

		if (grid[r][c] === 'W') return false;
		const pos = r + ',' + c;
		if (visited.has(pos)) return false;
		visited.add(pos);

		this.findIsland(grid, r-1, c, visited);
		this.findIsland(grid, r+1, c, visited);
		this.findIsland(grid, r, c-1, visited);
		this.findIsland(grid, r, c+1, visited);

		return true;
	}

	showConnections() {
		// Object.keys returns an array of all the keys of an object
		const allNodes = Object.keys(this.adjacentList);
		let result = "";
		for (let node of allNodes) {
			let nodeConnections = this.adjacentList[node];
			let connections = "";
			let vertex;
			for (vertex of nodeConnections) {
				connections += vertex + " ";
			}
			result += node + "-->" + connections + "\n";
		}
		return result;
	}
}

module.exports = Graph;
