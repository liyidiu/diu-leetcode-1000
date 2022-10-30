
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxNum = nums[0];
    let sum = nums[0]
    for (let i = 1 ; i < nums.length ; i++) {
        const num = nums[i];
        sum *= num
        debugger
        if (sum < maxNum) {
            sum = num
        } else {
            maxNum = sum
        }
    }
    return maxNum
};

console.log(maxProduct([-2,3,-4]))
