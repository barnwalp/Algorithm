// Undirect cyclic unweighted grah
//			2 --- 0
//		/  \
//	1 --- 3

// Edge List
// graph is represented as edge connection among the nodes
// const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
// The index of the array is the value of the actual graph node
// const graph = [[2], [2, 3], [0, 1, 2], [1, 2]];

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

