/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    const dfs = (path, startIndex) => {
        if (path.length === k) {
            result.push([...path])
        }
        for (let i = startIndex ; i <= n; i++) {
            path.push(i)
            dfs(path, i + 1)
            path.pop()
        }
    }

    dfs([], 1)

    return result
};


console.log(combine(4,2))
