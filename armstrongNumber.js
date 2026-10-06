const num = 371; //armstrong

const armstrong = function(num){
  let str = num.toString();
  let flag = 0;
  for (let i=0;i<str.length;i++){
    flag += Number(str[i]) ** 3;
  }
  if(flag === num){
      return ('Its an Armstrong number')
    }else{
      return ('Not an Armstrong')
    }
}

console.log(armstrong(num))