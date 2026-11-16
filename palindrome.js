// /**
//  * @param {number} x
//  * @return {boolean}
//  */

// var isPalindrome = function(x) {
//  const rvrs = x.toString().split("").reverse().join('');
// if(x.toString() == rvrs){
//     console.log("true");
// }else{
//     console.log("false");
// }
// };

// isPalindrome(12321)

// 2nd try

const word = 'jahaj'

const palindrome = function(word){
  let flag = '';
  for(let i=word.length-1;i>=0;i--){
    flag += word[i];
  }
  if(flag === word){
    return 'Palindrome'
  }else {
    return 'Not Palindrome'
  }
}

console.log(palindrome(word))