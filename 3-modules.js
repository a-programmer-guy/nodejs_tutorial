// CommonJS, every file is module by default
// Modules - Encapsulated code

// require the module for the names
const names = require('./4-names')
// require the module for the utility functions
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
console.log(data)
require('./7-mind-grenade') //importing module this way invokes the function inside module
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)