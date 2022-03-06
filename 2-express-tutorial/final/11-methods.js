const express = require('express')

const app = express()

// list of people
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// PARSE FORM DATA -  .urlencoded
// url encoded is a built in middle ware function to parse incoming requests with a body
// extened allows the use of the query string (qs) library
app.use(express.urlencoded({ extended: false }))

// PARSE JSON DATA - .json
app.use(express.json())

// Routes - HTTP methods

// GET request -  return list of people
app.get('/api/people', (req, res) => {
  console.log(people)
  res.status(200).json({success: true, data: people})
})

// POST request - provide form data - check to see if its empty or not
app.post('/api/people', (req, res) => {
  const { name } = req.body
  if(!name){
    return res.status(400).json({ success: false, msg: 'Please provide a valid name'})
  }
  res.status(200).json({ succes: true, person: name })
})

// POST check for name. return list of people and the name
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if(!name){
    return res.status(400).json({ success: false, msg: 'Please provide a valid name'})
  }
  res.status(200).json({ succes: true, data: [...people, name ] })
})

// UPDATE user name using ID as request parameters
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  // find person with matching id in people array
  const person = people.find((person)=> person.id === Number(id))
  if(!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No matching results for ID: ${id}`})
  }
  const newPeopleList = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true,  data: newPeopleList })
})

// DELETE - remove user from people list
app.delete('/api/people/:id', (req, res) => {
  // search for user with id provided in params
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    // if no matching ID - return error code and message
    return res
      .status(404)
      .json({ success: false, msg: `${req.params.id} is not a valid id` })
  }
  // if matching id, filter out the people array and remove the person
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('Please Provide Credentials')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
