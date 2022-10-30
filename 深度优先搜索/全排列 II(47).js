/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const len = nums.length;
    const used = {};
    const hash = {}
    const resHash = {}
    const res = [];
    for (let i = 0 ; i < len ; i++) {
        hash[i] = nums[i]
    }
    const dfs = (path) => {
        if (path.length === len) {
            const result = [...path]
            if (!resHash[result.join('')]) {
                res.push(result)
                resHash[result.join('')] = true
            }

            return
        }
        for (let item in hash) {
            if (used[item]) {
                continue
            }
            used[item] = true
            path.push(hash[item])
            dfs(path)
            path.pop();
            used[item] = false
        }

    }
    dfs([])
    return res;
};
