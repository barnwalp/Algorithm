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
			const [edge1, edge2] = edge;
			if (!(edge1 in this.adjacentList)) this.adjacentList[edge1] = [];
			if (!(edge2 in this.adjacentList)) this.adjacentList[edge2] = [];
			this.adjacentList[edge1].push(edge2);
			this.adjacentList[edge2].push(edge1);
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
				for (let vertex of this.adjacentList[node]) {
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
