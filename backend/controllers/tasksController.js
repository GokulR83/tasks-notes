const Task = require("../models/Task");
//? Create Task
const createTaskController = async(req,res) =>{
    const { task, priority, progress } = req.body;
    try {
        if(!task || !priority || !progress){
            return res.status(200).send({ message:"Send All The Required Details "});
        }
        const newTask = {
            task: task,
            priority: priority,
            progress: progress,
        }
        const taskToCreate = await Task.create(newTask);
        res.status(200).send(taskToCreate);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}
//? Get All Tasks
const getAllTaskController = async(req,res) =>{
    try {
        const allTasks = await Task.find({});
        if(!allTasks){
            return res.status(404).send({ message:"No Task are there..!" });
        }
        res.status(200).json({ data: allTasks});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

//? Get Task
const getTaskController = async(req,res) =>{
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).send({ message: "Task Not Found!" });
        }
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

//? Edit Task
const editTaskController = async(req,res) =>{
    const { id } = req.params;
    const { task, priority, progress } = req.body;
    try {
        if(!task, !priority, !progress){
            return res.status(400).send({ message: "send all the required Details" });
        }
        const updateTask = await Task.findById(id);
        if(!updateTask){
            return res.status(404).send({ message:"Task Not Found!" });
        }
        const taskToUpdate = await Task.findByIdAndUpdate(id,{ task: task, priority:priority, progress: progress },{ new: true });
        await taskToUpdate.save();
        res.status(200).send({ message: "Task updated Successfully!", data: taskToUpdate });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

//? Delete Task
const deleteTaskController = async(req,res) =>{
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).send({ message:"Task Not Found!" });
        }
        await task.deleteOne();
        res.status(200).send({ message: "task deleted Successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}


module.exports = {
    createTaskController,
    getAllTaskController,
    editTaskController,
    deleteTaskController,
    getTaskController
}