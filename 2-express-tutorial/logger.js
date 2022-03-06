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

module.exports = logger