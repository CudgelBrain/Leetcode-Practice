const str = 'Hello World Again'
const world = 'World'
const js = 'js'

const replaceSubstring = function(str, world, js){
  let flag = '';
    if(str.includes(world)){
      let len = str.indexOf(world);
       flag = str.slice(0,len) + js + str.slice(len+world.length) 
       console.log(flag)
    }
}

replaceSubstring(str, world, js)
// console.log(replaceSubstring(str))