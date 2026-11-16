const n = 10;

const fibonacci = function(n){
  let flag = [];
  if(n>0) flag[0] = 0;
  if(n>1) flag[1] = 1;
  for(let i=2;i<n;i++){
    flag[i] = flag[i-1] + flag[i-2];
  } 
  // if(n >= 2){
  // flag[0] = 0;
  // flag[1] = 1;
  // for(let i=2;i<n;i++){
  //   flag[i] = flag[i-1] + flag[i-2];
  // } 
  // }else{
  //  if(n == 0){
  //    return flag
  //  }else if(n == 1){
  //    flag[0] = 0;
  //    return flag
  //  }
  // }
  return flag
}

console.log(fibonacci(n))
// fibonacci(n)