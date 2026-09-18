const arr= [21, 30, 25, 42, 19]

const largest = () =>{
  let flag = 0;
  for(let i=0;i<arr.length;i++){
    if(flag < arr[i]){
      flag = arr[i];
    }
}
    return flag;
}

console.log(largest())