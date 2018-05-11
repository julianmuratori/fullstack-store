const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please Enter a Name'
    },
    format: {
        weight: Boolean,
        piece: Boolean
    },
    quantity: Number
})

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory