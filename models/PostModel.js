const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    Caption:{
        type:String
    },
    Picture:{
        type:String,
        required:true
    }
});

const PostModel = mongoose.model('Post',PostSchema)

module.exports = PostModel;