/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    const map = new Map();
    for (let i = 0 ; i < str1.length; i++) {
        const key = str1[i]
        map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1)
    }
    for (let i = 0 ; i < str2.length; i++) {
        const key = str2[i]
        if (map.has(key)) {
            map.set(key, map.get(key) - 1);
        } else {
            return false
        }
    }
    for (let value of map.values()) {
        if (value !== 0) {
            return false
        }
    }
    return true
};

console.log(isAnagram('anagram', 'nagaram'))
