/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    console.log((n+ '').split('').reverse().join(''))
    return parseInt((n+ '').split('').reverse().join(''),2)
};


console.log(reverseBits('00000010100101000001111010011100'))
