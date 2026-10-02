const strs = "Mississippi";

const duplicatesRemover = function(str){
  let buff = "";
  for(let i=0;i<str.length;i++){
        if(!buff.includes(str[i])){
          buff+=str[i];
        }
    }
  return buff;
}

console.log(duplicatesRemover(strs))
// duplicatesRemover(strs)
