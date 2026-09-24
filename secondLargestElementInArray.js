const arr = [22,45,1,35,76,44,100];

const secondLargest = function(arr){
  let flag = 0;
  let sec = 0;
  for(i=0;i<arr.length;i++){
    if(flag<arr[i]){
        sec = flag;
        flag = arr[i]
    }
  }
    return sec;
}

console.log(secondLargest(arr))