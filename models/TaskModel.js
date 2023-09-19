const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    TaskName: {
        type: String,
        required: true
    },
    TeamMember: {
        type: Object,
        required: true
    },
    TaskDate: {
        type: String,
        required: true
    },
    StartTime: {
        type: String,
        required: true
    },
    EndTime: {
        type: String,
        required: true
    },
    Board: {
        type: String,
        required: true
    }
});

const TaskModel = mongoose.model("Task", TaskSchema)
module.exports = TaskModel