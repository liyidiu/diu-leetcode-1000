/**
 * 1、确定dp数组（dp table）以及下标的含义
 * 到达第 i 个台阶需要话费的钱
 * 2、确定递推公式
 * dp[i] = min(dp[i-1], dp[i-2]) + cos[i]
 */


/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
    }
    const len = dp.length
    return Math.min(dp[len-1], dp[len-2])
};
