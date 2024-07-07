const mongoose = require("mongoose");
require('dotenv').config();

const DATABASE_PATH = process.env.DATABASE_PATH;
mongoose.connect(DATABASE_PATH);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('Todos',todoSchema);

module.exports = {
    Todo
}