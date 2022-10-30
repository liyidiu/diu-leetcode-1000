/**
 * 01 背包
 * 背包的体积为sum / 2
 * 背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
 * 背包如果正好装满，说明找到了总和为 sum / 2 的子集。
 * 背包中每一个元素是不可重复放入
 */

/**
 * dp[j] 容量为j的背包，所背的物品价值可以最大为dp[j]
 * dp[i] = map(dp[i], dp[i - weight[i]] + value[i]])
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a,b) => { return a + b }, 0)
    if (sum % 2 !== 0) { return false }
    const dp = Array(sum / 2 + 1).fill(0);

    for (let i = 0 ; i < nums.length; i++) { // 商品
        for (let j = sum / 2; j >= nums[i]; j--) { // 物品的重量
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] === sum/2) {
                return true
            }
        }
    }
    return dp[sum / 2] === sum / 2;
};
