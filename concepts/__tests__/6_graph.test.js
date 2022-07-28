const Graph = require('../6_graph');

describe("Graph", () => {
	// Method 1 - Creating Graph
	let g = {
		0: [1,2],
		1: [3,2,0],
		2: [4,1,5,0],
		3: [1,4],
		4: [3,2,5],
		5: [2,4,6],
		6: [5],
	}
	const graph = new Graph(g);
	// console.log(graph.showConnections());
	// console.log(graph.depthFirstTraversal(0, new Set()));
	// console.log(graph.breadthFirstTraversal(0, new Set()));

	// Method 2 - Creating Graph
	const edgeGraph = new Graph();
	edgeGraph.buildGraph([
		['i', 'j'],
		['k', 'i'],
		['m', 'k'],
		['k', 'l'],
		['o', 'n'],
	])
	// console.log(edgeGraph.showConnections());
	
	const distGraph = new Graph();
	distGraph.buildGraph([
		['w', 'x'],
		['x', 'y'],
		['z', 'y'],
		['z', 'v'],
		['w', 'v'],
	]);

	//Method 3 - Adjacency Matrix
	// W represents Water and L represents Land
	const grid = [
		['W', 'L', 'W', 'W', 'W'],
		['W', 'L', 'W', 'W', 'W'],
		['W', 'W', 'W', 'L', 'W'],
		['W', 'W', 'L', 'L', 'W'],
		['L', 'W', 'W', 'L', 'L'],
		['L', 'L', 'W', 'W', 'W'],
	];
	let gridGraph = new Graph();
	gridGraph.islandCount(grid);
	
	test("Checking path between two vertices", () => {
		expect(edgeGraph.hasPath('i', 'k', new Set())).toBe(true);
		expect(edgeGraph.hasPath('o', 'm', new Set())).toBe(false);
		expect(edgeGraph.hasPath('j', 'm', new Set())).toBe(true);
	});

	test("counting connected components", () => {
		expect(edgeGraph.countConnectedComponent()).toBe(2);
	});

	test('largest components', () => {
		expect(edgeGraph.largestComponent()).toBe(5);
		expect(edgeGraph.largestComponentR()).toBe(5);
	});

	test('shortest distance', () => {
		expect(distGraph.shortestDistance('w', 'z')).toBe(2);
		expect(edgeGraph.shortestDistance('i', 'm')).toBe(2);
	});

	test('island count', () => {
		expect(gridGraph.islandCount(grid)).toBe(3);
	})

	// test("setRule() returns undefined when called without argument", () => {
	// 	expect(validator.setRule()).toBeUndefined();
	// });

	// test("setRule() is called with arguments", () => {
	// 	// jest.spyOn() is called with object and the object method identifier
	// 	// we're spying on. The return value is a mock function (spy) with
	// 	// a reference to the specific object method.
	// 	const setRuleSpy = jest.spyOn(validator, "setRule");

	// 	// Create a mock rule for use as a function argument.
	// 	const trueRule = jest.fn(() => true);

	// 	const result = validator.setRule("true", trueRule);
	// 	expect(result).toBeUndefined();

	// 	// Check the spy if the method was called correctly
	// 	expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);
	// 	setRuleSpy.mockClear();
	// })
})



