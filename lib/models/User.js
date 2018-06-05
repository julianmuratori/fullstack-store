const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const md5 = require('md5')
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please Enter a Username'
    },
    stores: [{
        type: Schema.Types.ObjectId,
        ref: 'Store'
    }]
})

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
userSchema.plugin(mongodbErrorHandler)

const User = mongoose.model('User', userSchema)

module.exports = User