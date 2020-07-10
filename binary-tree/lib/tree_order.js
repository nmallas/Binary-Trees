function inOrderArray(root) {
  if(!root) return [];
  if(!root.left && !root.right) return [root.val];
  // get the array for visiting the left node
  const left = inOrderArray(root.left);
  // get the array for visiting the right node
  const right = inOrderArray(root.right);
  // return the left array concatenated with the root value
  //   concatenated with the right array
  return [...left, root.val, ...right];
}

function postOrderArray(root) {
  if(!root) return [];
  if(!root.left && !root.right) return [root.val];
  const left = postOrderArray(root.left);
  const right = postOrderArray(root.right);
  // return the left array concatenated with the right array
  //   concatenated with the root value
  return [...left, ...right, root.val];
}

module.exports = {
  inOrderArray,
  postOrderArray,
};
