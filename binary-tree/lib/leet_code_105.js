// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//      /  \
//     15   7
//           /
//          10

// inorder [9, 3, 15, 20, 10, 7]
// preorder = [3,9,20,15,7]

//     5
//    / \
//   2    20
//  / |    /  \
// 1   3  15   7

//               5
//              /  \
//             2     20
//            / \    / \
//           1   3  15   7
//          /
//         4
// pre = [5, 2, 1, 4, 3, 20, 15, 7]
// in = [4, 1, 2, 3, 5, 15, 20, 7]

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (!preorder.length) return null;
  if (inorder.length === 1) return new TreeNode(preorder[0]);

  let root = new TreeNode(preorder.shift());

  let mid = inorder.indexOf(root.val); // idx 2
  let leftInOrder = inorder.slice(0, mid); // [1,2]
  let rightInOrder = inorder.slice(mid + 1); // [4]

  let leftPreOrder = preorder.slice(0, leftInOrder.length);
  let rightPreOrder = preorder.slice(leftInOrder.length);
  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);

  return root;
}

// console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

// console.log(buildTree([1, 2, 3], [3, 2, 1]));
console.log(buildTree([3, 2, 1, 4], [1, 2, 3, 4]));
