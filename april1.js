/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    let b = x => x !== ""; 
    let arr2 = arr.filter(b); 
    let s1 = arr2[arr2.length - 1];
    let n = s1.length;
    return n;
};
