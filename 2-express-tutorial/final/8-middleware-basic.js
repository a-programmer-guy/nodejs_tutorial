// middleware basics
const express = require('express')
const app = express()

// req => middleware => res

// express supplies logger function with req and res objects
// we can access them as parameters and use them in our logic
// here we log the method the user is using, the url they want to access and the year
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  // must provide a response in middleware function or move on to next function
  next()
}
// logger middleware function is referenced
app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
