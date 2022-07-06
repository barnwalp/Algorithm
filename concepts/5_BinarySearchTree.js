class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this.root;
		}
		var leader = this.root;
		while (true) {
			if (value > leader.value) {
				// if right child is null
				if (!leader.right) {
					leader.right = newNode;
					return this;
				}
				leader = leader.right;
			} else if (value < leader.value){
				// if left child is null
				if(!leader.left) {
					leader.left = newNode;
					return this;
				}
				leader = leader.left;
			} else if (value === leader.value) {
				console.log('duplicate values are not permitted');
				return undefined;
			}
		}
  }

  lookup(value) {
		if(!this.root) {
			return false;
		}
		let leader = this.root;
		// while both leaf node and lookup value is not found
		while (leader && leader.value != value) {
			if (value >= leader.value) {
				leader = leader.right;
			} else {
				leader = leader.left;
			}
		}
		return leader ? leader : false;
  }
	
	remove(value) {
		if(!this.root) {
			return false;
		}
		let leader = this.root;
		let parent = null;
		// console.log(leader);
		// find the lookup value in the BST
		while (true) {
			if (value > leader.value) {
				parent = leader;
				leader = leader.right;
			} else if (value < leader.value) {
				parent = leader;
				leader = leader.left;
				// when lookup value is found
			} else if (value === leader.value){
				// if the lookupnode is a leaf node
				if (!leader.left && !leader.right) {
					// check if leaf is left or right child of parent
					if (leader.value > parent.value) {
						parent.right = null;
					} else {
						parent.left = null;
					}
					return true;
					// if the lookupnode has only left child
				} else if (leader.left && !leader.right) {
					parent.left = leader.left;
					leader.left = null;
					return true;
					// if the lookupnode has only right child
				} else if (leader.right && !leader.left) {
					parent.right = leader.right;
					leader.right = null;
					return true;
					// if the lookupnode has both child
				} else if (leader.left && leader.right) {
					// Step 1: Find the lowest value node in right sub-tree
					// let smallestNode = leader;
					// let curNode = leader;
					// let curParent = parent;
					// let parentOfSmallestNode = curParent;
					// while(curNode) {
					// 	if (curNode.value < smallestNode.value) {
					// 		smallestNode = curNode;
					// 		parentOfSmallestNode = curParent;
					// 	};
					// 	curParent = curNode;
					// 	curNode = curNode.right;
					// }
					// // Step 2: replace the node value with lowest node 
					// // of right sub-tree, say N
					// leader.value = smallestNode.value;

					// // Step 3: remove the lowest node of right sub-tree, N
					// // Since it will have only one right child, same algo can be used
					// parentOfSmallestNode.left = smallestNode.right;					
					// smallestNode.right = null;
					let curParent = leader;
					let curNode = leader.right;
					while (curNode.left) {
						curParent = curNode;
						curNode = curNode.left;
					}
					leader.value = curNode.value;
					if (curNode.right) {
						curParent.left = curNode.right;
						curNode.right = null;
					} else {
						curParent.left = null;

					}
				}
			}
		}
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(15);
// tree.remove(20);
// console.log(tree.lookup(170));
// console.log(tree.lookup(15));
// console.log(tree.lookup(1));
// console.log(tree.lookup(4));
// console.log(tree.lookup(null));
// console.log(tree.lookup(-3));
// tree.remove(4);
console.log(JSON.stringify(traverse(tree.root)));

//       9
//   4        20
// 1   6   15    170

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
