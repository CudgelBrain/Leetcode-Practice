const arr = [1, 2, 3, 2, 4, 5, 1]

const duplicateElement = function(arr){
  let dupe = [];
  for(let i=0 ; i<arr.length ; i++){
    for(let j=i+1 ;j<arr.length ; j++){
      if(arr[i] == arr[j] && !dupe.includes(arr[i])){
          dupe.push(arr[i]);
          console.log(dupe);
      }
    }
  }
}

duplicateElement(arr)