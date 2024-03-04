const express = require("express");
const { getAllNoteController,
        getNoteController,
        createNoteController ,
        editNoteController,
        deleteNoteController
    } = require("../controllers/notesController");
const router = express.Router();


//? Create Note 
router.post("/",createNoteController);

//? Edit Note
router.put("/:id",editNoteController);

//? Delete Note
router.delete("/:id",deleteNoteController);

//? Get All Notes
router.get("/",getAllNoteController);

//? get One Note
router.get("/:id",getNoteController);

module.exports = router;