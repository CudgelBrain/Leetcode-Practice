const word = 'Swiss';

const nonRepeatingChar = function(word){
  let non = [];
  let isRepeated = false;
  let words = word.toLowerCase();
  for (let i=0;i<words.length;i++){
          isRepeated = false;
     for (let j=0;j<words.length;j++){
       if(i!==j){
          if(words[i] == words[j]){
          isRepeated = true;
          }
       }
    }
          if(!isRepeated){
            non.push(words[i])
            words[i] = ''
          }
  }
        return non;
}
// nonRepeatingChar(word)
console.log(nonRepeatingChar(word))