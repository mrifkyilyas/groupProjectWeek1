const taskRouter = require('express').Router()
const TaskController = require('../controllers/taskController')

taskRouter.post('/', TaskController.create)
taskRouter.get('/', TaskController.findAll)
taskRouter.get('/search', TaskController.filterByName)
taskRouter.patch('/:id', Task.Controller.patchStatus)

module.exports = taskRouter