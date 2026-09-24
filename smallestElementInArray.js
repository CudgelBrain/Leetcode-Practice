const arr =  [42, 7, 89, 23, 56, 12, 94, 61, 3, 75];

const smallestElement = function(arr){
  let flag = Number.MAX_VALUE;
  for(let i=0;i<arr.length;i++){
    if(flag>arr[i])
    {
      flag = arr[i]
    }
  }
  return flag;
}

console.log(smallestElement(arr))