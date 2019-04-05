const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    user: Number, //{type: Schema.Types.ObjectId, ref:'User'},
    name: String,
    start: Date,
    end: Date,
    description: String,
    location: String,
    status: Boolean
})

let Task = mongoose.model('Task', taskSchema)
module.exports = Task