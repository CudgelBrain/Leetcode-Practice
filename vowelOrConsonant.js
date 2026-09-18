const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
const vowels = ['a', 'e', 'i', 'o', 'u']

const ConsonantOrVowel = function(char) {
  // if(consonants.includes(char.toLowerCase())){
  //   console.log("consonant")
  // }else if(vowels.includes(char.toLowerCase())){
  //   console.log("vowel")
  // }else{
  //   console.log("not an alphabet")
  // }
  if (vowels.includes(char.toLowerCase())) {
  console.log("vowel")
} else if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") {
  console.log("consonant")
} else {
  console.log("not an alphabet")
}
}
ConsonantOrVowel("e")
