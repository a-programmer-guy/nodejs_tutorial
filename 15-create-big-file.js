// Creating a large file with for loop
const { writeFileSync } = require('fs')
for (let i = 0; i < 1000; i++){
  // writeFileSync('destination, data, {flags})
  writeFileSync('./content/big.txt',`Hello for the ${i} time\n`, { flag: 'a'})
}