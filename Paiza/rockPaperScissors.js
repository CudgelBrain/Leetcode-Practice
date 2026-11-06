process.stdin.resume();
process.stdin.setEncoding('utf8');

    let lines = []
    let count = 0
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line',(line)=>{
 lines.push(line)
    // console.log(lines)
})

reader.on('close',()=>{
    for(let i=1;i<lines.length;i++){
        // console.log(lines[i].split(' ')[0] )
        // console.log(lines[i].split(' ')[1] )
   if(lines[i].split(' ')[0] == 'G' && lines[i].split(' ')[1]  == 'C' ||
      lines[i].split(' ')[0]  == 'C' && lines[i].split(' ')[1]  == 'P'||
      lines[i].split(' ')[0]  == 'P' && lines[i].split(' ')[1]  == 'G'){
          count++
      }
    }
    console.log(count)
})