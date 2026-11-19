const arr = [5, 3, 8, 1, 2];

const bubbleSort = function(arr){
  let flag = 0;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length -1 -i ;j++){
      if(arr[j] > arr[j+1]){
        flag = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = flag;
      }
    }
  }
  return arr
}
// bubbleSort(arr)
console.log(bubbleSort(arr))
