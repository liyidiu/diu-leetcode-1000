/**
 * 思路，贪心算法
 * 优先大饼干喂胃口大的孩子
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res = 0;
    g.sort((a,b) => a - b)
    s.sort((a,b) => a - b)
    let cookieIndex = s.length - 1
    for (let i = g.length -1 ; i >= 0; i--) {
        console.log(s[cookieIndex] , g[i], s[cookieIndex] >= g[i])
        if (cookieIndex >= 0 && s[cookieIndex] >= g[i]) {
            res++;
            cookieIndex--;
        }
    }
    return res;
};

console.log(findContentChildren([1,2,3], [3]))
