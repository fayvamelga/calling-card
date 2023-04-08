const { Schema } = require("mongoose");
const mongoose = require('mongoose');


const projectSchema = new Schema({
    projectId: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true,
        maxLength: 255
    },
    description: {
        type: String,
        require: true
    },
})

// create an instance of Project schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;