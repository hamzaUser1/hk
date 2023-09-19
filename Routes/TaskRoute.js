const express = require("express")
const TaskController = require("../Controller/TaskController")
const route = express.Router()

route.get('/',TaskController.getData)
route.post('/',TaskController.PostData)
module.exports = route