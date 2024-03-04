const mongoose = require("mongoose");

//? Create a Task Schema
const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
        trim: true,
    },
    priority: {
        type: String,
        required:true,
    },
    progress:{
        type: String,
        required:true
    }
})
//? Create a Task Model
const Task = mongoose.model("Task",taskSchema);

module.exports = Task;