const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    taskName: String,
    state: String

});

const Task = mongoose.model("tasks", taskSchema)

module.exports = Task;