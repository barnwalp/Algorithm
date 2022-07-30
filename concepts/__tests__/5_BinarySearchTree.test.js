const BinarySearchTree = require('../5_BinarySearchTree');

describe("Binary Search Tree", () => {
	const tree = new BinarySearchTree();
	tree.constructBST([9,4,6,20,170,15]);
	// console.log(tree.traverse(tree.root));
	// tree.remove(4);
	// console.log(JSON.stringify(traverse(tree.root)));
	// console.log(tree.breadthFirstSearch());
	// console.log(tree.breadthFirstSearchR([tree.root], []));
	// console.log(tree.DFSInOrder());
	// console.log(tree.DFSPreOrder());
	// console.log(tree.DFSPostOrder());
	
	test("search test", () => {
		expect(tree.lookup(15).value).toBe(15);
		expect(tree.lookup(1)).toBe(false);
		expect(tree.lookup(4).value).toBe(4);
		expect(tree.lookup(null)).toBe(false);
		expect(tree.lookup(-3)).toBe(false);
	});
})

