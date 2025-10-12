/* 235. Lowest Common Ancestor of a Binary Search Tree
Medium

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


Example 1:

  Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
  Output: 6
  Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:

  Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
  Output: 2
  Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:

  Input: root = [2,1], p = 2, q = 1
  Output: 2

Constraints:

  The number of nodes in the tree is in the range [2, 10^5].
  -10^9 <= Node.val <= 10^9
  All Node.val are unique.
  p != q
  p and q will exist in the BST. 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Solution 1 (Iterative Approach)
 * Time Complexity: O(H) i.e O(log n)
 * Space Complexity: O(1)
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    }
    else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
};

/**
 * Solution 2 (Recursive Approach)
 * TC: O(H) i.e O(log n)
 * SC: O(H) i.e O(log n)
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

// Example Usage
// Assuming TreeNode is defined and a BST is created
// let root = new TreeNode(6);
// root.left = new TreeNode(2);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(0);
// root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(7);
// root.right.right = new TreeNode(9);
// root.left.right.left = new TreeNode(3);
// root.left.right.right = new TreeNode(5);

// let p = root.left; // Node with value 2
// let q = root.right; // Node with value 8

// console.log(lowestCommonAncestor(root, p, q).val); // Output: 6