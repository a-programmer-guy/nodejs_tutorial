const express = require('express')
const app = express()

// Router for people - from routes folder
const people = require('./routes/people')
const auth = require('./routes/auth')

// Static assets
app.use(express.static('./methods-public'))
// Parse form data with .urlencode
app.use(express.urlencoded({ extended: false }))
// Parse json data - .json
app.use(express.json())

// Base route for people, only router for people will be applied here
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
