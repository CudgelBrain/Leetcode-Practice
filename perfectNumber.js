// const num = 28; //perfect number
const num = 12; //not perfect number

const perfectNumber = function(num){
  let flag = 0;
  for(let i=1;i<=num/2;i++){
    if(num%i == 0){
      flag+=i;
    }
  }
  if(flag == num){
    return('The Number is a Perfect Number');
  }else{
    return('The Number is a NOT Perfect Number');
  }
}

// perfectNumber(num);
console.log(perfectNumber(num));

      

