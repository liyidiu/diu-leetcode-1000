/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const markHash = {};
    const result = [];
    for (let i = 0 ; i < strs.length;i++ ) {
        const str = strs[i];
        const mark = str.split('').sort().join();
        const index = markHash[mark]
        if (index) {
            result[index - 1].push(str);
        } else {
            const len = result.length
            result[len] =  [str]
            markHash[mark] = len + 1
        }
    }
    return result;
};
