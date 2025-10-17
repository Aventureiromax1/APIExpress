const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};
const createTask = async (task) => {
    const {title, description} = task;

    const createdTask = await connection.execute(
        'INSERT INTO tasks (title, description) VALUES (?, ?)',
        [title, description]
    );
    return createdTask;
};
module.exports = {
    getAll,
    createTask
};