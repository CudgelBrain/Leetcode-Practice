const word = (w) => {
    let nword = "";
  for(let i=0;i<w.length;i++){
    if(w[i] == 'a' || w[i] == 'e' || w[i] == 'i' || w[i] == 'o' || w[i] == 'u'){
      w[i] = "";
    }else{
      nword = nword+[w[i]];
    }
  }
      return nword;
}

console.log(word("polymorphism"))