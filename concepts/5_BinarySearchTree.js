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
			// return this.root;
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
		// step 1: traverse to the node which is to be removed
		// step 2: find the lowest value node in right sub-tree
		// step 3: Replace the node value with lowest node of right sub-tree
		// step 4: remove the lowest node of right sub-tree which have only one right child
	}

	traverse() {
		const tree = {value: this.root.value};
		tree.left = node.left === null ? null : traverse(node.left);
		tree.right = node.right === null ? null : traverse(node.right);
		return tree;
	}

	breadthFirstSearch() {
		let currentNode = this.root;
		let list = [];
		let queue = [currentNode];
		while (queue.length > 0) {
			currentNode = queue.shift();
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
			list.push(currentNode.value);
		}
		return list;
	}

	breadthFirstSearchR(queue, list) {
		if (!queue.length) {
			return list;
		}
		let currentNode = queue.shift();
		list.push(currentNode.value);
		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}
		return this.breadthFirstSearchR(queue, list);
	}

	//       9
	//   4        20
	// 1   6   15    170
	//
	// There are 3 way, depth first search can be implemented
	// inorder: [left, root, right] [1, 4, 6, 9, 15, 20, 170]
	// preorder: [root, left, right] [9, 4, 1, 6, 20, 15, 170] 
	// postorder: [left, right, root] [1, 6, 4, 15, 170, 20, 9]

	DFSInOrder() {
		return this.traverseInOrder(this.root, []);
	}

	DFSPreOrder() {
		return this.traversePreOrder(this.root, []);
	}

	DFSPostOrder() {
		return this.traversePostOrder(this.root, []);
	}

	traverseInOrder(node, list) {
		if (node.left) {
			this.traverseInOrder(node.left, list);
		}
		list.push(node.value);
		if (node.right) {
			this.traverseInOrder(node.right, list)
		}
		return list;
	}

	traversePreOrder(node, list) {
		list.push(node.value);
		if (node.left) {
			this.traversePreOrder(node.left, list);
		}
		if(node.right) {
			this.traversePreOrder(node.right, list);
		}
		return list;
	}

	traversePostOrder(node, list) {
		if (node.left) {
			this.traversePostOrder(node.left, list);
		}
		if(node.right) {
			this.traversePostOrder(node.right, list);
		}
		list.push(node.value);
		return list;
	}
}
