// Controllers
const Task = require('../models/Task')

// Use mongoose model query function - return all tasks
const getAllTasks = async (req,res) => {
  try{
    // .find with no filters will return all tasks
    // Queries have asyc/await and are similar to promises
    const tasks =  await Task.find({})
    res.status(201).json({ tasks: tasks })
  } catch (error){
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  // Handle async await gracefully with try catch block
  // App will crash without handling the error 
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }

}

const getTask = async (req, res) => {
  try {
    // Destructure id from request parameters use alias taskID
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
      res.status(404).json({ msg: `No task with ID: ${taskID}` })
    }
    res.status(201).json({ task: task})
  } catch (error) {
    res.status(500).json({ msg: error })
  }

}

const updateTask = async (req, res) => {
  try {
    const{id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
      new:true,
      runValidators: true
    })
    if(!task){
      res.status(404).json({ msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({ id:taskID })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID}, req.body)
    if(!task){
      res.status(404).json({msg: `No task with ID: ${taskID} found`})
    }
    res.status(200).json( {task: task})
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks, createTask, getTask,
  updateTask, deleteTask
}
