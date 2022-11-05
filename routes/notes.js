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
/*
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:14.298Z",
        important: true
    }
]
*/
router.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

// post a new note
router.post('/api/notes', createNewNote)

// get all notes
router.get('/api/notes', getAllNotes)
/*
router.get('/api/notes', (request, response) => {
   response.json(notes)  
})
-----------------------------------*/

// get one note
router.get('/api/notes/:id', getOneNote)
/*
router.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => id === note.id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})
-----------------------------------------*/

// delete a note
router.delete('/api/notes/:id', deleteOneNote)
/*
router.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})
----------------------------------------------*/

// update a note
router.patch('/api/notes/:id', updateOneNote)

module.exports = router