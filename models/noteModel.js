const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    important: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true})

module.exports = mongoose.model('note', noteSchema)