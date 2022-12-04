const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup
userSchema.statics.signup = async function(email, password) {

    if (!email || !password) {
        throw Error("All fields are required")
    }

    if (!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not that strong ")
    }

    const exists = this.findOne({ email })
   // console.log(exists)
    if (exists) {
        throw Error("email exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })
    return user
}

// static login
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error("All fields are required")
    }

    const user = this.findOne({ email })
    // console.log(exists)
     if (!user) {
         throw Error("user does not exists")
     }

     const match = await bcrypt.compare(password, user.password)

     if (!match) {
        throw Error("Incorrect password")
     }

     return user
}
module.exports = mongoose.model('User', userSchema)