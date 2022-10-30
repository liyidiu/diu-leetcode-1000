/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const len = nums.length;
    const res = [];
    const hash = {}
    const used = {};
    for (let i = 0 ; i <len; i++) {
        hash[nums[i]] = hash[nums[i]]
    }
    const dfs = (path) => {
        if (path.length === len) {
            res.push([...path])
            return
        }
        for (let item in hash) {
            if (used[item]) {
                continue
            }
            used[item] = true;
            path.push(item);
            dfs(path);
            path.pop()
            used[item] = false;
        }
    }
    dfs([]);
    return res;
};

console.log(permute([1,1,2]))
