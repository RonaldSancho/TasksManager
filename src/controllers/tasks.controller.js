import Task from "../models/task.model.js"

export const getTasks = async (req, res) => {
    const tasksFound = await Task.find();
    res.json(tasksFound);
}

export const getTask = async (req, res) => {}

export const createTask = async (req, res) => {}

export const updateTask = async (req, res) => {}

export const deleteTask = async (req, res) => {}