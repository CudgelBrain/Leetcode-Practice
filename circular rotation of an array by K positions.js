const arr = [1, 2, 3, 4, 5, 6]
const k = 3;

const circularRotationByKPosition = function(arr,k){
  let args = [];
  for(let i=0;i<k;i++){
        args[0] = arr[arr.length - 1]
   for(let j=0;j<arr.length - 1;j++){
        args[j+1] = arr[j]
     }
        arr = args;
        args = [];
  }
  return arr;
}

// circularRotationByKPosition(arr,k)
console.log(circularRotationByKPosition(arr,k))