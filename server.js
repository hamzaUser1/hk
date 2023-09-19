require("dotenv").config()
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

//Router
const UserRoute = require("./Routes/UserRoute");
const TaskRoute = require("./Routes/TaskRoute");
const TeamRoute = require("./Routes/TeamRoute");
//Middle Ware
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/UserRouter',UserRoute)
app.use('/api/TaskRouter',TaskRoute)
app.use('/api/TeamRouter',TeamRoute)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Database Connected && Server is running on ${process.env.PORT} Port`)
    })
}).catch((err)=>{
    console.log(err)
})