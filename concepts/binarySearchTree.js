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

	insertR(root, value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this.root;
		}
		if (!root) {
			root = newNode;
			return root;
		}
		if (value < root.value) {
			root.left = this.insertR(root.left, value);
		}
		if (value > root.value) {
			root.right = this.insertR(root.right, value);
		}
		return root;
	}

	constructBST(keys) {
		for (let key of keys) {
			// root = this.insertR(root, key);
			this.insertR(this.root, key);
		}
		// return root;
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
				// console.log('duplicate values are not permitted');
				return undefined;
			}
		}
  }

  lookup(value) {
		let parent;
		if(!this.root) {
			return false;
		}
		let leader = this.root;
		if (value === this.root.value) {
			parent = null;
			return this.root;
		}
		// while both leaf node and lookup value is not found
		while (leader && leader.value != value) {
			parent = leader;
			if (value >= leader.value) {
				leader = leader.right;
			} else {
				leader = leader.left;
			}
		}
		return leader ? [parent, leader] : false;
  }

	removeR(root, value) {
		// Base case: if tree is empty
		if (!root) {
			return root;
		}

		if (value > root.value) {
			root.right = this.removeR(root.right, value);
		} else if (value < root.value) {
			root.left = this.removeR(root.left, value);
		} else {
			if (!root.left && !root.right) {
				root = null;
			}
			if (root.left && !root.right) {
				root = root.left;
			}
			if (!root.left && root.right) {

			}
		}
	}

	remove(value) {
		// step 1: traverse to the node which is to be removed
		let [parent, leader] = this.lookup(value);

		// step 2: find the lowest value node in right sub-tree
		if (leader.right) {
			let [parentNode, lowestNodeRST] = this.findSmallest(leader.right);
			
			// step 3: Replace the node value with lowest node of right sub-tree
			leader.value = lowestNodeRST.value;
		
			// step 4: remove the lowest node of right sub-tree which have only one right child
			parentNode.left = null;

			// There is no right sub tree
		} else {
			parent = null;
		}
		// console.log(this.traverse(this.root));
	}

	findSmallest(root) {
		let lowestNode = root;
		let leader = root;
		let parent;
		while (leader.left) {
			parent = leader
			leader = leader.left;
			lowestNode = leader;
		}
		return [parent, lowestNode];
	}

	traverse(root) {
		const tree = {value: root.value};
		tree.left = root.left === null ? null : this.traverse(root.left);
		tree.right = root.right === null ? null : this.traverse(root.right);
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

	DFSInOrdert() {
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

module.exports = BinarySearchTree;
