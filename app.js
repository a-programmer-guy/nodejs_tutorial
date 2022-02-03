// FS MODULE - ASYNC

// destrucutre fs module for reading and writing to the file system
const { readFile, writeFile } = require('fs')

// read in files from the system, specify decoding method, callback method for results/errors
const first = readFile('./content/first.txt', 'utf-8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err,result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result;
    writeFile(
      './content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=> {
      if(err){
        console.log(err)
        return
      }
      console.log(result)
    })
  })
})


