  const str = 'This is a test string with spaces and we want to remove them';

  const removeSpace = function(str){
    let nstr='';
    for(let i=0;i<str.length;i++){
      if(str[i] != ' '){
        nstr += str[i]
      }
    }
    return nstr;
  }
  
  console.log(removeSpace(str));