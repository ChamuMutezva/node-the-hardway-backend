require('dotenv').config()
const { response } = require('express')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const notesRouter = require("./routes/notes")

app.use(cors())
app.use(express.static("dist"))

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.use(notesRouter)
        const PORT = process.env.PORT || 3001
        app.listen(PORT)
        console.log("Connected to the database")
        console.log(`Server running on port ${PORT}`)
    })
    .catch((error) => {
        console.log(error)
    })
