const BinarySearchTree = require('../binarySearchTree');

describe("Binary Search Tree", () => {
	const tree = new BinarySearchTree();
	tree.constructBST([9,4,6,20,170,15,30]);
	tree.remove(20);
	tree.remove(170);
	// tree.remove(20);
	// console.log(tree.traverse(tree.root));
	// tree.remove(4);
	// console.log(tree.breadthFirstSearch());
	// console.log(tree.breadthFirstSearchR([tree.root], []));
	// console.log(tree.DFSInOrder());
	// console.log(tree.DFSPreOrder());
	// console.log(tree.DFSPostOrder());
	
	test("search test", () => {
		expect(tree.lookup(15)[1].value).toBe(15);
		// expect(tree.lookup(9)[1].value).toBe(15);
		expect(tree.lookup(1)).toBe(false);
		expect(tree.lookup(4)[1].value).toBe(4);
		expect(tree.lookup(null)).toBe(false);
		expect(tree.lookup(-3)).toBe(false);
	});

	test("finding lowest value", () => {
		expect(tree.findSmallest(tree.root)[1].value).toBe(4);	
	});
})

