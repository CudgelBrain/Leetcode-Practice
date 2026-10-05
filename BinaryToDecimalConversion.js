  const num = 1101; //13
  
  const binaryToDecimal = function(num){
  const len = num.toString();
  let decimal = 0;
  for(let i=0;i<len.length;i++){
      if(len[i] == 1){
        decimal += 2 ** ((len.length - 1) -i);
      }
    }
        return decimal;
  }
  
  console.log(binaryToDecimal(num));
// binaryToDecimal(num)