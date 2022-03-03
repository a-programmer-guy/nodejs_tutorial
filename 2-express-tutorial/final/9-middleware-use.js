const express = require('express')
// middleware
const logger = require('./logger')
const authorize = require('./authorize')

const app = express()

// request => middleware => response
// put all middleware above routes
// use vs route:
// prodiving a path will apply the middleware to ALL urls after that endpoint
// app.use('/api', [logger, authorize])
// applying middleware to specific routes will only affect that route

app.get('/',  (req, res) => {
  console.log(req.user)
  res.send('Home')
})
app.get('/about',  (req, res) => {
  res.send('About')
})
// logger and authorize will only affect this route
app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
