const mongoose = require("mongoose");

//? Create a Note Schema
const noteSchema = new mongoose.Schema({
    note : {
        type: String,
        required: true,
        trim:true,
    },
    description : {
        type: String,
        required: false,
        trim: true,
    },
    tags :{
        type: String,
        required: false,
    },
},{ timestamps: true });



//?Create a Note Model
const Note = mongoose.model("Note",noteSchema);

module.exports = Note;