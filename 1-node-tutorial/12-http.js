// bring in the built in http module
const http = require('http')

// create a server with request and respose parameters
const server = http.createServer((req, res)=> {
  console.log(req)
  if(req.url === '/'){
    res.end('Welcome to our page')
  }
  if(req.url === '/about'){
    res.end('About us')
  }
  res.end(`
  <h1>Oops!</h1>
  <h5>Sorry, we can't find the page your looking for.</h5>
  <a href='/'>Back Home</a>`)
})

server.listen(5000)
