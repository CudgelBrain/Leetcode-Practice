    const reverse = function(nums){
  let flag = "";
  for(let i=(nums.toString().length)-1;i>=0;i--){
    flag += nums.toString()[i];
  }
  return flag;
}

console.log(reverse(54321))

// another way to do this without using reverse function.
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