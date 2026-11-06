const arr = [1, 2, 3, 2, 4, 1, 5];

const nonRepeatingElement = function(arr){
  let non = [];
  for(let i=0;i<arr.length;i++){
    let isRepeating = false;
    for(let j=0;j<arr.length;j++){
      if(i!==j){
        if(arr[i] == arr[j]){
          isRepeating = true;
        }
      }
  }
      if(!isRepeating){
        non.push(arr[i]);
      }
  }
    return non;
}
// nonRepeatingElement(word)
console.log(nonRepeatingElement(arr))

// output
// [ 3, 4, 5 ]