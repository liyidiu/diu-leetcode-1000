/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (root) => {
        if (!root) { return root }

        if (root.val === p.val || root.val === q.val) {
            return root
        }
        const left = dfs(root.left)
        const right = dfs(root.right)
        if (left && right) {
            return root
        } else if (!left && right) {
            return right
        } else if (left && !right) {
            return left
        } else {
            return null
        }

    }

    return dfs(root)
};
