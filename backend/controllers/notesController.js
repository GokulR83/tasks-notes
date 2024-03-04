const Note = require("../models/Note");
//? Create Notes
const createNoteController = async(req,res) =>{
    try {
        if(!req.body.note || !req.body.description || !req.body.tags){
            res.status(400).send({ message: "send all the required Details" });
        }
        const newNote = {
            note: req.body.note,
            description: req.body.description,
            tags: req.body.tags
        }
        const note = await Note.create(newNote);
        return res.status(200).send(note);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}
//? Get Note 
const getNoteController = async(req,res) =>{
    const { id } = req.params;
    try {
        const note = await Note.findById(id);
        if(!note){
            res.status(404).send({ message:"not found the Note"});
        }
        return res.status(200).json(note);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

//? Edit Note Controller
const editNoteController = async(req,res) =>{
    const { id } = req.params;
    const { note, description, tags } = req.body;
    try {
        if(!note || !description || !tags){
            return res.status(400).send({ message:"Send All Required Fields" });
        }
        const toUpdateNote = await Note.findById(id);
        if(!toUpdateNote){
            return res.status(404).send({ message: "Note not found" });
        }
        const updateNote = await Note.findByIdAndUpdate(id,{ note: note, description: description, tags: tags },{ new:true });
        await updateNote.save();
        res.status(202).json({ message:"Notes Updated Successfully", data: updateNote })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

//? Delete Note Controller
const deleteNoteController = async(req,res) =>{
    const { id } = req.params;
    try {
        const noteToDelete = await Note.findById(id);
        if(!noteToDelete){
            return res.status(404).send({ message:"Note Not Found" });
        }
        await noteToDelete.deleteOne();
        res.status(200).send({ message: "Note is Deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}
//? Get All Notes Controller
const getAllNoteController = async(req,res) =>{
    try {
        const notes = await Note.find({});
        res.status(200).json({ data: notes});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getAllNoteController,
    createNoteController ,
    editNoteController,
    deleteNoteController,
    getNoteController
}