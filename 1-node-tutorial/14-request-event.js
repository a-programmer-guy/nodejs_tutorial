// Request event
const http = require('http')
// Creating a server using Event Emitter API
const server = http.createServer()
// behind the scenes the server emits a 'request' event (specific naming)
// subscribe to it / listen to it / respond to it with .on method
server.on('request', (req, res) =>{
  res.end('Welcome everyone!')
})

server.listen(5000, () => {
  console.log('Server listening on port: 5000...')
})
