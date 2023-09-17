require("dotenv").config()
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

//Router
const PostRoute = require("./Routes/PostRoute");
const UserRoute = require("./Routes/UserRoute");
//Middle Ware
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/PostRouter',PostRoute)
app.use('/api/UserRouter',UserRoute)


mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Data base Connected && Server is running on 7000 Port")
    })
}).catch((err)=>{
    console.log(err)
})