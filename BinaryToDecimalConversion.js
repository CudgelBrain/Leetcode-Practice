  // const num = 1101; //13
  const num = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
  
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