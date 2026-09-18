/**
 * @param {string} s
 * @return {number}
 */
  const romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
 }
var romanToInt = function(s) {
       let total = 0;
  for(let i=0;i<s.length;i++){
    const currentNumber = romans[s[i]];
    const nextValue = romans[s[i+1]];
    if(currentNumber < nextValue){
      total-= currentNumber ;
    }else{
      total+=currentNumber;
    }
    // console.log(currentNumber)
    // console.log(value)
    console.log("total is ",total, " for the itiration number", i)
}
    return total;
};

romanToInt("MCMXCIV")