const fs = require('fs')
const http = require('http')

// create server
http.createServer(function (req, res){
  // send big file as one big chunk (68.7kb)- not ideal
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  // with fileStream we have access to events
  fileStream.on('open', ()=> {
    //pipe the readstream into a writesteam response - sent in smaller chunks
    fileStream.pipe(res)

  })
  // listen for an error and pas it in
  fileStream.on('error', (err)=> {
    console.log(err)
  })
})
.listen(5000)

