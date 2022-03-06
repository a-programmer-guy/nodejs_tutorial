// setInterval continues to run in increments (2000 milliseconds)
setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first!`)
// Process stays alive unless killed Ctrl+C
// Unexpected error