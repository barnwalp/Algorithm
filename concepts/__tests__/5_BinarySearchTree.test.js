const BinarySearchTree = require('../5_BinarySearchTree');

describe("Binary Search Tree", () => {
	const tree = new BinarySearchTree();
	tree.insert(9);
	tree.insert(4);
	tree.insert(6);
	tree.insert(20);
	tree.insert(170);
	tree.insert(15);
	tree.insert(1);
	// tree.constructBST([9,4,6,20,170,15]);
	console.log(tree.traverse(tree.root));
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
	
	test("test", () => {
	});
})

