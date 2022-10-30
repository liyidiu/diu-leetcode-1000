/**
 * https://leetcode.cn/problems/same-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const getTreeRes = (tree, treeRes) => {
        treeRes.push(tree.val)
        if (tree.left) {
            getTreeRes(tree.left, treeRes)
        } else {
            treeRes.push(null)
        }
        if (tree.right) {
            getTreeRes(tree.right, treeRes)
        } else {
            treeRes.push(null)
        }
    }

    const p1 = [];
    const q1 = [];
    p && getTreeRes(p,p1);
    q && getTreeRes(q,q1);

    return p1.join(',') === q1.join(',')
};
