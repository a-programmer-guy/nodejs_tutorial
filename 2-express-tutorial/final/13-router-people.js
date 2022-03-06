const express = require('express')
//  insantiate Router
const router = express.Router()
// Get list of people
let { people } = require('../data')
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers/people')

// Routes - HTTP methods - chaining methods = less lines
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

// Routes - HTTP methods - same functionality but more lines of code
// // GET - get list of people
// router.get('/', getPeople)
// // POST request - provide form data - check to see if its empty or not
// router.post('/', createPerson)
// // POST check for name. return list of people and the name
// router.post('/postman', createPersonPostman)
// // UPDATE user name using ID as request parameters
// router.put('/:id', updatePerson)
// // DELETE - remove user from people list
// router.delete('/:id', deletePerson)

module.exports = router