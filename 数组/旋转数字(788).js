/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let res = 0;
    for (let i = 0 ; i <= n ;i ++) {
        const rule = /[2,5,6,9]/g
        const rule2 = /[3,4,7]/g
        const numstr = i + ''
        if (rule.test(numstr) && !rule2.test(numstr)) {
            res++
        }
    }
    return res;

};
