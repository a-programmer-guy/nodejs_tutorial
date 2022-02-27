// Add promises to read and write
const { readFile, writeFile } = require('fs').promises;

// Start function is async - waits for promise to resolve (getText)
  const start = async() => {
    try{
      // read/writeFile takes in the path and encoding, returns the data in promise
      const first =  await readFile('./content/first.txt', 'utf8')
      const second =  await readFile('./content/second.txt', 'utf8')
      await writeFile('./content/result-mid-grenade.txt', `THIS IS AWESOME: ${first}\n${second}\n`,
      { flag: 'a' })
      console.log(first, second)
    } catch (error) {
      console.log(error)
    }
  }

start()

// // Another way to use promises
// // util module has promisify functionality
// const util = require('util')
// // promisify with built in promisse functionality will be used instead of the getText function
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// // getText will take in a path as an argument and return the text associated with that file path
// const getText = (path) => {
//   // A promise represents a operation that hasn't completed yet
//   // 2 callbacks for a promise - resolve for success and reject for failure
//   return new Promise((resolve, reject) => {
//     // readFile is asynchronous - file loc, encoding, callback with 2 properties
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err))