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
			if (value >= leader.value) {
				if (!leader.right) {
					leader.right = newNode;
					return this;
				}
				leader = leader.right;
			} else {
				if(!leader.left) {
					leader.left = newNode;
					return this;
				}
				leader = leader.left;
			}
		}
  }

  lookup(value) {
		if(!this.root) {
			return false;
		}
		let leader = this.root;
		while (leader && leader.value != value) {
			if (value >= leader.value) {
				leader = leader.right;
			} else {
				leader = leader.left;
			}
		}
		return leader ? leader : false;
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
console.log(tree.lookup(170));
console.log(tree.lookup(15));
console.log(tree.lookup(1));
console.log(tree.lookup(4));
console.log(tree.lookup(null));
console.log(tree.lookup(-3));
// console.log(JSON.stringify(traverse(tree.root)));

//       9
//   4        20
// 1   6   15    170

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
