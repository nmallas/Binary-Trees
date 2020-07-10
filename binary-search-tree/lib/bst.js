class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor() {
    this.root = null;
  }
  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val);
    if(!this.root) {
      this.root = newNode;
      return;
    }

    if(val < currentNode.val) {
      if(currentNode.left) {
        this.insert(val, currentNode.left);
      } else {
        currentNode.left = newNode;
      }
    }

    if(val >= currentNode.val) {
      if(currentNode.right) {
        this.insert(val, currentNode.right);
      } else {
        currentNode.right = newNode;
      }
    }
    // alternate iterative solution:
    // let node = new TreeNode(val);
    // if (this.root === null) {
    //   this.root = node;
    //   return;
    // }
    // let currentNode = this.root;

    // while ((val < currentNode.val && currentNode.left) || (val > currentNode.val && currentNode.right)) {
    //   if (val < currentNode.val) {
    //     currentNode = currentNode.left;
    //   } else {
    //     currentNode = currentNode.right;
    //   }
    // }
    // if (val < currentNode.val) {
    //   currentNode.left = node;
    // } else {
    //   currentNode.right = node;
    // }
  }
  searchRecur(val, currentNode = this.root) {
    if (currentNode === null) return false;
    if (val < currentNode.val) {
      return this.searchRecur(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.searchRecur(val, currentNode.right);
    } else {
      return true;
    }
  }
  searchIter(val) {
    let currentNode = this.root;
    if (currentNode === null) return false;
    while ((val < currentNode.val && currentNode.left) || (val > currentNode.val && currentNode.right)) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (val === currentNode.val) {
      return true;
    } else {
      return false;
    }
  }
}

let tree = new BST();

// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(16));
// console.log(tree.insert(1));
// console.log(tree.insert(7));
// console.log(tree.insert(16));

module.exports = {
  TreeNode,
  BST,
};
