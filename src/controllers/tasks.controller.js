import Task from "../models/task.model.js"

export const getTasks = async (req, res) => {
    const tasksFound = await Task.find({
        user: req.decode.id
    }).populate('user');
    res.json(tasksFound);
}

export const createTask = async (req, res) => {
    const {title, description, date} = req.body;

    const newTask = new Task({
        title,
        description,
        date,
        user: req.decode.id
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
}

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if(!task) return res.status(404).json({message: 'Task not found'})
    res.json(task);
}

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({message: 'Task not found'})
    res.json(task);
}

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    if(!task) return res.status(404).json({message: 'Task not found'})
    res.json(task);
}