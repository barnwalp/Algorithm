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

	addVertex(node) {
		this.adjacentList[node] = [];
		this.numberOfNodes++;
	}

	addEdge(node1, node2) {
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
	}

	depthFirstTraversal(src) {
		let stack = [src];
		let visited = [];
		// create a visited array with 0 against all vertices
		for (let i=0; i<Object.keys(this.adjacentList).length; i++) {
			visited[i] = 0;	
		}
		while (stack.length > 0) {
			let curNode = stack.pop();
			visited[curNode] = 1;
			for (let node of this.adjacentList[curNode]) {
				console.log(`visited ${node} from ${curNode}`)
				if (visited[node] === 0) {
					stack.push(node);
					visited[node] = 1;
				}
			}
		}
	}

	showConnections() {
		// Object.keys returns an array of all the keys of an object
		const allNodes = Object.keys(this.adjacentList);
		for (let node of allNodes) {
			let nodeConnections = this.adjacentList[node];
			let connections = "";
			let vertex;
			for (vertex of nodeConnections) {
				connections += vertex + " ";
			}
			console.log(node + "-->" + connections);
		}
	}
}

const myGraph = new Graph();
let g = {
	0: [1,2],
	1: [3,2,1],
	2: [4,1,5],
	3: [1,4],
	4: [3,2,5],
	5: [4,6],
	6: [5],
}
const graph = new Graph(g);
graph.showConnections();
graph.depthFirstTraversal(0);

// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1');
// myGraph.addEdge('3', '4');
// myGraph.addEdge('4', '2');
// myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '2');
// myGraph.addEdge('1', '0');
// myGraph.addEdge('0', '2');
// myGraph.addEdge('6', '5');
// myGraph.showConnections();

// Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
