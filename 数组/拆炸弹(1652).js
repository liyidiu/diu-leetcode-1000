/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const result = [];
    const len = code.length;
    const resultArr = k > 0 ? code.slice(0, k) : k ===0 ? [] : code.slice(k -1)
    let sum = resultArr.reduce((pre,cur) => { return pre + cur}, 0);
    for (let i = 0 ;i < len; i++) {
        let res = 0;
        if (k > 0) {
            res = sum - code[i] + code[(i+k) % len];
        }
        if (k < 0) {
            res = sum + (code[i-1] || 0) - code[(len - 1 +  k + i) % len];
        }
        sum = res
        result.push(res);
    }
    return result;
};
