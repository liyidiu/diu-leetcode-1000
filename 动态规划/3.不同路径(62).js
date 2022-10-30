/**
 * 1、确定dp数组（dp table）以及下标的含义
 * 到达 [i,j] 有多少种方法
 * 2、确定递推公式
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 3、初始化
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(1).map(() => new Array(n).fill(1))
    for (let i = 1 ; i < m; i++) {
        for (let j = 1; j < n;j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m-1][n-1];
};
