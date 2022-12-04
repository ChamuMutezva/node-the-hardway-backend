require('dotenv').config()
const { response } = require('express')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const notesRouter = require("./routes/notes")
const loginRouter = require("./routes/user")

app.use(cors())
app.use(express.static("dist"))

//app.use('api/notes', notesRouter)
//app.use('api/login', loginRouter)

// connect to database
// console.log(process.env)
const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.use(loginRouter)
        app.use(notesRouter)
        app.listen(PORT)
        console.log("Connected to the database")
        console.log(`Server running on port ${PORT}`)
    })
    .catch((error) => {
        console.log(error)
    })
