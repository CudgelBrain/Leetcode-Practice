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


// other method

// const name = 'Hello';

// const frequencyOfCharacterInString = function(name){
//   let names = name.toLowerCase();
//   let count = 0;
//   let arr = [];
//   for(let i=0;i<names.length;i++){
//     count = 0;
//     for(let j=0;j<names.length;j++){
//       if(names[i] == names[j]){
//         count++;
//       }
//       if(!arr.some(item => item.startsWith(names[i])) && j == names.length - 1){
//         arr.push(`${names[i]} : ${count}`);
//       }
//     }
//       // if(i==names.length -1){
//       //   return (names[i])
//       // }
//   }
//   return arr
// }
// console.log(frequencyOfCharacterInString(name))
// // frequencyOfCharacterInString(name)