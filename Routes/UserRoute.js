const express = require("express");
const AuthControllers = require("../Controller/Auth");
const route = express.Router()

route.post("/signup", AuthControllers.SignUp)
route.post("/login", AuthControllers.Login);
module.exports = route;