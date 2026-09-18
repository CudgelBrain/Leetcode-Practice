    const reverse = function(nums){
  let flag = "";
  for(let i=(nums.toString().length)-1;i>=0;i--){
    flag += nums.toString()[i];
  }
  return flag;
}

console.log(reverse(54321))