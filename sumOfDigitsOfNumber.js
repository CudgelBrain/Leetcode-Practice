const num = 4321;

const sumOfNums = function(num){
  let sum = 0;
  let arr = num.toString().split('');
  for(i=0;i<arr.length;i++){
    sum = sum + Number(arr[i])
  }
  return sum;
}

console.log(sumOfNums(num)) //10 - output