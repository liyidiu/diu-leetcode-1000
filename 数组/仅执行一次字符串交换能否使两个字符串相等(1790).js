/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const map = new Map();
    let size = 0
    for (let i = 0 ; i < s2.length; i++) {
        if (s2[i] !== s1[i]) {
            map.set(s2[i],s1[i])
            size++;
            if (map.size > 2 || map.size !== size) {
                return false
            }
        }
    }
    console.log(map, map.size)
    if (map.size > 2 || map.size === 1 || map.size !== size) {
        return false
    }
    if (map.size === 2) {
        for(let [key, value] of map.entries()) {
            if (map.get(value) !== key) {
                return false
            }
        }
    }

    return true;
};
