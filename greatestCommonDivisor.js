const one = 80;
const two = 60;

const greatestCommonDivisor = function(one,two){
  let gcd = 0
  let small = Math.min(one,two)
  for(let i=1;i<=small;i++){
    if(one%i == 0 && two%i == 0){
      gcd = i
    }
  }
  return gcd
}

// greatestCommonDivisor(one,two)
console.log(greatestCommonDivisor(one,two))

//ans = 20