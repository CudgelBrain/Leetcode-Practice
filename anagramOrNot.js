// const str1 = 'aaa';
// const str2 = 'aa';

// const anagram = function(str1, str2){
//   let flag = '';
//   let len = 0
//   if(str1.length > str2.length){
//     len = str1.length;
//   }else{
//     len = str2.length;
//   }
//   for(let i=0;i<len;i++){
//     if(str2.includes(str1[i])){
//         flag+=str1[i];
//         str2 = str2.replace(str1[i], '')
//     }
//  if(i == str1.length-1){
//        if(str1 == flag && str2 == ''){
//     console.log ('Is an Anagram')
//       }else{
//         console.log('NOT an Anagram')
//       }
//  }
//   }
// }

// anagram(str1,str2)


// 2nd try
const str1 = 'silent'
const str2 = 'listen'

 const anagram = function(str1, str2){
   let flag = '';
   if(str1.length !== str2.length) return 'Not Anagram (because of the length)'
   let len = str2.length;
   for(let i=0;i<len;i++){
       if(str1.includes(str2[i])){
         flag += str2[i];
         str1 = str1.replace(str2[i], '');
       }
   }
         if(str1 === '' && flag === str2){
           return 'Anagram'
         }
       else{
         return 'Not Anagram'
       }
 }

// anagram(str1,str2)
console.log(anagram(str1,str2))