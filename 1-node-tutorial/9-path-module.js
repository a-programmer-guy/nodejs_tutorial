// bring in path module
const path = require('path')

// show path separator
console.log(path.sep)

// create pathway string with join function
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// return base of pathway
const base = path.basename(filePath)
console.log(base)

// return absolute path for test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
