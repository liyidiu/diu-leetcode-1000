/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];

    const endIndex = n < 9 ? n : 9;

    const dfs = (path, startIndex, sum) => {
        if (path.length === k) {
            sum === n && result.push([...path])
            return
        }

        for (let i = startIndex ; i <= endIndex ;i++) {
            path.push(i)
            dfs(path, i + 1, sum + i)
            path.pop();

        }
    }

    dfs([], 1 , 0)

    return result;
};


console.log(combinationSum3(3,7))
