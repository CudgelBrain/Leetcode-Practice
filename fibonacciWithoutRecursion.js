const fibonacci = function(){
  const num = 9;
  let arr = [];
  let flag1 = 0;
  for(let i=0;i<num;i++){
      if(i == 0){
        arr[i] = flag1;
      arr[i+1] = 1;
      }
    if(i >= 2){
      flag1 = arr[i-1] + arr[i-2];
      arr[i] = flag1;
    }
  }
      console.log(arr)
}

fibonacci()   //[0, 1,  1,  2, 3, 5, 8, 13, 21]