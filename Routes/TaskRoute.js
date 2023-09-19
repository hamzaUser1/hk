const express = require("express")
const TaskController = require("../Controller/TaskController")
const route = express.Router()

route.get('/', TaskController.getData)
route.post('/', TaskController.PostData)
route.put('/:id', TaskController.EditData)
route.delete('/:id', TaskController.DeleteData)
module.exports = route