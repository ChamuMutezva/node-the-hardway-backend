const noteModel = require('../models/noteModel')
const mongoose = require('mongoose')
const { response } = require('express')

// create a new note
const createNewNote = async (request, response) => {
    //const note = request.body
    // console.log(note)
    // response.json(note)
    const { id, content, date, important } = request.body
    console.log(request.body)
    try {
        const allNotes = await noteModel.create({ id, content, date, important })
        response.status(200).json(allNotes)

    } catch (error) {
        response.status(400).json({ error: error.message })
    }
}

// get all notes
const getAllNotes = async (request, response) => {
    const allNotes = await noteModel.find({})
    response.status(200).json(allNotes)
}

// get a single note
const getOneNote = async (request, response) => {
    const { id } = request.params

    if (!mongoose.Types.ObjectId.isValid) {
        return response.status(404).json({ error: 'note has not been found' })
    }
    const oneNote = await noteModel.findById(id)
    if (!oneNote) {
        return response.status(404).json({ error: 'note not found' })
    }
    response.status(200).json(oneNote)
}

// delete a note
const deleteOneNote = async (request, response) => {
    const { id } = request.params

    if (!mongoose.Types.ObjectId.isValid) {
        return response.status(404).json({ error: 'note has not been found' })
    }

    const oneNote = await noteModel.findByIdAndDelete({_id: id})
    if (!oneNote) {
        return response.status(404).json({ error: 'note not found' })
    }
    response.status(200).json(oneNote)
}

// update a note
const updateOneNote = async (request, response) => {
    const { id } = request.params

    if (!mongoose.Types.ObjectId.isValid) {
        return response.status(404).json({ error: 'note has not been found' })
    }

    const oneNote = await noteModel.findByIdAndUpdate({_id: id}, {
        ...request.body
    })
    if (!oneNote) {
        return response.status(404).json({ error: 'note not found' })
    }
    response.status(200).json(oneNote)

}

module.exports = {
    createNewNote,
    getAllNotes,
    getOneNote,
    deleteOneNote,
    updateOneNote
}