const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    TeamLogo:{
        type:String,
        required:true
    },
    TeamName:{
        type:String,
        required:true
    },
    TeamMember:{
        type:Object,
        required:true
    },
    TeamType:{
        type:String,
        required:true
    }
})

const TeamModel = mongoose.model("Team",TeamSchema);

module.exports=TeamModel