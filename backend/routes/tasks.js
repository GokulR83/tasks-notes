const express = require("express");
const {
    createTaskController,
    getAllTaskController,
    getTaskController,
    editTaskController,
    deleteTaskController,
} = require("../controllers/tasksController");

const router = express.Router();

//?Create task
router.post("/",createTaskController);

//?Get all task
router.get("/",getAllTaskController);

//? Get One task
router.get("/:id",getTaskController);

//?Edit task
router.put("/:id",editTaskController);

//?Delete task
router.delete("/:id",deleteTaskController);


module.exports = router;