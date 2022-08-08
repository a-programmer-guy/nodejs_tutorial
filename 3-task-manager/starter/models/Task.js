// Task Model
// Create structure for all our documents
const mongoose = require('mongoose')


// Set up properties as objects to allow for built in validators
// Here we can add validators for our database (ie - required)
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    // Requires a non emptry string - send error message if empty
    required: [true, 'Must provide valid name'],
    // Trim off excess empty space
    trim: true,
    // Allow only 20 characters for task name - send error message
    maxlength: [20, 'Name cannot be longer than 20 characters']
  },
  // Can also set compeleted status as an object -  give it a default value
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema)