// const arr = [100, 50, 25, 75, 10] ; 
const arr = [1, 5, 2, 3, 4];

const smallestElement = function(arr){
let smallest = Number.MAX_VALUE;
let ssmallest = Number.MAX_VALUE;
  for(let i=0;i<arr.length;i++){
    if(smallest > arr[i]){
      ssmallest = smallest;
       smallest = arr[i];
    }else if(ssmallest > arr[i]){
      ssmallest = arr[i]
    }
  }
      console.log('The Second Smallest Element in the Array is ',ssmallest)
}

// console.log(smallestElement(arr))
smallestElement(arr)