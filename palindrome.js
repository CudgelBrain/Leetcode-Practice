/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
 const rvrs = x.toString().split("").reverse().join('');
if(x.toString() == rvrs){
    console.log("true");
    return true;
}else{
    console.log("false");
    return false
}
};

isPalindrome(12321)
