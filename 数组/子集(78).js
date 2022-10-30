/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const len = nums.length
    const result = []

    const dfs = (path, startIndex) => {
        if (path.length <= len) {
            result.push([...path])
        }
        if (path.length === len) {
            return;
        }
        for (let i = startIndex ; i < len; i++) {
            path.push(nums[i])
            dfs(path, i + 1)
            path.pop()
        }
    }
    dfs([], 0)

    return result;
};
