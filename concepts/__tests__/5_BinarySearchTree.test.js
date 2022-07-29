const Graph = require('../5_BinarySearchTree');

describe("Binary Search Tree", () => {
	const tree = new BinarySearchTree();
	tree.insert(9)
	tree.insert(4)
	tree.insert(6)
	tree.insert(20)
	tree.insert(170)
	tree.insert(15)
	tree.insert(1)
	// tree.constructBST([9,4,6,20,170,15]);
	// console.log(JSON.stringify(traverse(tree.root)));
	// tree.remove(15);
	// tree.remove(20);
	// console.log(tree.lookup(170));
	// console.log(tree.lookup(15));
	// console.log(tree.lookup(1));
	// console.log(tree.lookup(4));
	// console.log(tree.lookup(null));
	// console.log(tree.lookup(-3));
	// tree.remove(4);
	// console.log(JSON.stringify(traverse(tree.root)));
	// console.log(tree.breadthFirstSearch());
	// console.log(tree.breadthFirstSearchR([tree.root], []));
	// console.log(tree.DFSInOrder());
	// console.log(tree.DFSPreOrder());
	// console.log(tree.DFSPostOrder());
	
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
		expect(gridGraph.minimumIsland(grid)).toBe(2);
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



