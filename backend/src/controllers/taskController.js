
const tasksModel = require('../models/tasksModel');

const getAll = (request, response) => {

    const tasks = tasksModel.getAll();
    
    return response.status(200).json(tasks);
};

module.exports = {
    getAll
};

