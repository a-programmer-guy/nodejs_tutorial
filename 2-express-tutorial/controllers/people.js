// Get list of people
let { people } = require('../data')

const getPeople = (req, res) => {
  res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
  const { name } = req.body
  if(!name){
    return res.status(400).json({ success: false, msg: 'Please provide a valid name'})
  }
  res.status(200).json({ succes: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if(!name){
    return res.status(400).json({ success: false, msg: 'Please provide a valid name'})
  }
  res.status(200).json({ succes: true, data: [...people, name ] })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
}
