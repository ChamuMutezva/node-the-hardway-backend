const express = require('express');
const noteModel = require('../models/noteModel')
const {
    createNewNote,
    getAllNotes,
    getOneNote,
    deleteOneNote,
    updateOneNote
} = require('../controllers/notesController')


const router = express.Router();
router.use(express.json())

router.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

// post a new note
router.post('/api/notes', createNewNote)

// get all notes
router.get('/api/notes', getAllNotes)

// get one note
router.get('/api/notes/:id', getOneNote)

// delete a note
router.delete('/api/notes/:id', deleteOneNote)

// update a note
router.patch('/api/notes/:id', updateOneNote)

module.exports = router