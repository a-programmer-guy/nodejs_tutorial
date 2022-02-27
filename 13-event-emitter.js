// Events
const EventEmitter = require('events')
// Create instance from events module
const customEmitter = new EventEmitter()
// on method passes in string for name of the event - 'response' 
// and a callback function with name and id - console log
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user: ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
  console.log(`some other logic here `)
})
// emit the subscribed response - string name from the on method
// must be below the listeners for the events
customEmitter.emit('response', 'john', 34)