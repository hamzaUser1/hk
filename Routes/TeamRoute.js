const TeamController = require("../Controller/TeamController")
const express= require("express")
const route = express.Router()

route.get('/',TeamController.getData)
route.post('/',TeamController.PostData)
module.exports = route