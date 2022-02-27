// Using streams to read big files
const { createReadStream } = require('fs');

// create a read stream and provide:
// file location
// default size of buffer is 64 kb
// last buffer - remainder
// highWaterMark - control size of buffer
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });
const stream = createReadStream('./content/big.txt');

// stream.on('event to listen for', callback function)
stream.on('data', (result) =>{
  // listening for data console log the result
  console.log(result)
})
// listen for error log the result
stream.on('error', (err) => {
  console.log(err)
})
