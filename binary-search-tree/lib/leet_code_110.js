// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//  /   /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// / \
//null null

function isBalanced(root) {
    if(!root) return true;
    let balanced = true;
    function height(subTree) {
        if(!subTree) return 0;
        let leftHeight = (1+ height(subTree.left));
        let rightHeight = (1+ height(subTree.right));
        if(Math.abs(leftHeight -rightHeight) >=2) {
             balanced = false;
            return;
        }
        return Math.max(leftHeight, rightHeight);
    }
    height(root);
    return balanced;
}
