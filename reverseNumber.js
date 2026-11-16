// # 1 (manages negatieve, positive, decimals numbers as well)
const num = -12345;
// const num = 12345;

const reverseNumber = function(num){
  let nums = Math.abs(num);
  let str = nums.toString();
  let flag ='';
  for (let i=str.length-1;i>=0;i--){
      flag += str[i]  
  }
  if(num < 0){
    let sign = num.toString().slice(0,1);
    console.log(sign+flag)
  }else{
    console.log(flag)
  }
}

reverseNumber(num)
  
// # 2
//   const reverse = function(nums){
//   let flag = "";
//   for(let i=(nums.toString().length)-1;i>=0;i--){
//     flag += nums.toString()[i];
//   }
//   return flag;
// }

// console.log(reverse(54321))

// # 3
// another way to get the same results.
// const num = 12345;

// const reverseOfNum = function(num){
//   let rv = [];
//   let arr = num.toString().split('');
//   for(i=arr.length-1;i>=0;i--){
//     rv.push(arr[i])
//   }
//   return Number(rv.join(''));
// }

// console.log(reverseOfNum(num))