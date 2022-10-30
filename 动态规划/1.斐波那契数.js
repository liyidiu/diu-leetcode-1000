/**
 * 1、确定dp数组（dp table）以及下标的含义
 * dp[i] 的定义为： 第i个数的值
 * 2、确定递推公式
 * dp[i] = dp[i-1] + dp[i-2]
 * 3、dp数组如何初始化
 * dp[0] = 0
 * dp[1] = 1
 * 4、确定遍历顺序
 * 遍历的顺序一定是从前到后遍历的
 * 5、举例推导dp数组
 *
 */

var fib = function(n) {
    let dp = [0, 1]
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

var fib = function(n) {
    // 动规状态转移中，当前结果只依赖前两个元素的结果，所以只要两个变量代替dp数组记录状态过程。将空间复杂度降到O(1)
    let pre1 = 1
    let pre2 = 0
    let temp
    if (n === 0) return 0
    if (n === 1) return 1
    for(let i = 2; i <= n; i++) {
        temp = pre1
        pre1 = pre1 + pre2
        pre2 = temp
    }
    return pre1
};
