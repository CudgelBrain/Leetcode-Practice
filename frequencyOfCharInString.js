const word = 'paaarrrrttttyyyy';

const freqOfChar = function(word){
  let words = word.toLowerCase();
  let count = 0;
  let arr = [];
  for(let i=0;i<words.length;i++){
      count = 0
    for(let j=0;j<words.length;j++){
        if(words[i] == words[j]){
          count++;
      }
    }
      if(!arr.includes(words[i])){
        arr.push(words[i])
          console.log(words[i],':',count)
      }
  }
  // return arr
}
freqOfChar(word)
// console.log(freqOfChar(word))

// output
// p : 1
// a : 3
// r : 4
// t : 4
// y : 4
