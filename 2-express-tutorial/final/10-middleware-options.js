const express = require('express')
// morgan 3rd party logger middleware
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

const app = express()

// req => middleware => res
// 1. use vs route
// 2. options - our own / express / third party

// app.use('/api', [logger, authorize])
// app.use(express.static('./public'))

/// apply morgan with basic logger function to all routes
app.use(morgan('tiny'))

app.get('/',  (req, res) => {
  console.log(req.user)
  res.send('Home')
})

app.get('/about',  (req, res) => {
  res.send('About')
})

app.get('/products',  (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
