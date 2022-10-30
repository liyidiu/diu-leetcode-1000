/**
 * 1、确定dp数组（dp table）以及下标的含义
 * 第dp[i] 整数 i 拆分的 乘积最大化。
 * 2、确定dp[i]
 * dp[i]
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for (let i = 3 ; i <=n; i++) {
        for (let j = 1 ;  j < i; j++) {
            dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j)
        }
    }
    return dp[n]
};
