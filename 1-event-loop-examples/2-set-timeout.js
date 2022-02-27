// Started operating system process
console.log('first')
// setTimeout is asynchronous so it is offloaded.
// The callback is invoked once the synchronous code is done executing
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// Completed and exited operating system process