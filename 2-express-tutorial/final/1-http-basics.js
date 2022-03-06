// http basics
const http = require('http')
const { readFileSync } = require('fs')
// Get all files
const homePage = readFileSync('./index.html')

// create a server with call back thats invoked evertime the server is hit
// request and response objects as parameters for the callback as needed for http cycle
// these objects contain important information needed to communicate with the browser
const server = http.createServer((req, res)=>{
  // Get url from request obj
  const url = req.url
  // Homepage
  if( url === '/' ){
    // Header (status code, content type being sent back)
    res.writeHead(200, { 'content-type' : 'text/html' })
    // Body - content/data being sent back
    res.write(homePage)
    // signal that the response headers and body has been sent - message complete
    res.end()
  }
  // About Page
  else if( url === '/about' ){
    res.writeHead(200, { 'content-type' : 'text/html' })
    res.write('<h1>About Page<h1>')
    res.end()
  }
  // Error page
  else {
      res.writeHead(404, { 'content-type' : 'text/html' })
      res.write('<h2>Uh Oh! Page not found. Sorry!<h2>')
      res.end()
  }
})

server.listen(5000)