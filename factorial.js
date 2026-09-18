const factorial = function(no){
  let factorial = 1;
  for(let i=1;i<=no;i++){
    factorial = factorial*i;
  }
    console.log(factorial)
  return factorial;
}
factorial(10);