const tasksModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks);
};
const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask();
    return response.status(201).json({message : "ok"});
};
module.exports = {
    getAll,
    createTask
};
