// FS MODULE - SYNC

// destrucutre fs module for reading and writing to the file system
const { readFileSync, writeFileSync } = require('fs')

// read in files from the system, specify decoding method
const first =  readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// write a new file to the system and concat two files together - will overwrite
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

// append to a file instead of overwriting with the flag argument
writeFileSync('./content/result-sync-append.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })

console.log('Done with this task')
console.log('Starting the next one')
