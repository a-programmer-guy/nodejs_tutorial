const express = require('express');
const app = express();
const tasks= require('./routes/tasks')

const connectDB = require('./db/connect')
require('dotenv').config()

// Middleware
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
  res.send('Task manager app!')
})

// Get all the tasks
app.use('/api/v1/tasks', tasks)

// Create a new task
app.post('/api/v1/tasks', (req, res) => {

})

// Get single task
app.get('/api/v1/tasks/:id', (req, res) => {

})

// Update a task
app.patch('api/v1/tasks/:id', (req, res) => {

})

// Delete a task
app.delete('/ap1/v1/tasks/:id', (req, res) => {

})

const port = 3000
// Only with successful connection to DB we will start the app
// always user environment variables and ignore the file before pushing to git!
const start = async () => {
  try {
    // connect to DB first using env variable
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port: ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start();
