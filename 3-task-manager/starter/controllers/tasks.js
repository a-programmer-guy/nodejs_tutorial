// Controllers

const getAllTasks = (req,res) => {
  res.send('Get all tasks')
}

const createTask = (req, res) => {
  res.json(req.body)
}

const getTask = (req, res) => {
  res.json(req.params)
}

const updateTask = (req, res) => {
  res.send('Updated a task')
}

const deletTask = (req, res) => {
  res.send('Deleted a task')
}

module.exports = {
  getAllTasks, createTask, getTask,
  updateTask, deletTask
} 