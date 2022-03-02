// Express
// first import the module
const express = require('express')
// path module to get absolute path
const path = require('path')
// invoke express object
const app =  express()
// set up static files and middleware

// Homepage
// callback to fire user performs get request on root of domain
// call back has request and response objects
app.get('/', (req, res)=>{
  console.log('user his root/home page')
 res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

// About page
app.get('/about', (req, res)=> {
  console.log('User hit about page')
  res.send('About page')
})

// Projects page
app.get('/projects', (req, res)=> {
  console.log('User his projects page')
  res.send('Projects Page')
})

// Contact
app.get('/contact', (req, res)=> {
  console.log('User hit contact page')
  res.send('Contact Page')
})
// return 404 status and message for wrong url
app.all('*',(req, res)=> {
  res.status(404).send('<h3>Uh Oh! We can\'t find the resource you\'re looking for.</h3>')
})

// when server instantiated, call back function to log which port is it listening to
app.listen(5000, ()=>{
  console.log('Server listening on port: 5000')
})
