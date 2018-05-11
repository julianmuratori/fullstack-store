const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please Enter a Username'
    },
    password: {
        type: String,
        trim: true,
        required: 'Please Enter a Password'
    },
    stores: [{
        type: Schema.Types.ObjectId,
        ref: 'Store'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User