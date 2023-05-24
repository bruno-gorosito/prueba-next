const { default: mongoose} = require("mongoose");

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false,
        default: 'incompleted'
    }
}, {timestamps: true})


module.exports = mongoose.model("Task", taskSchema)
