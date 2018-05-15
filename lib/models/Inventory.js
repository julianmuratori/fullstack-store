const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    format: {
        weight: Boolean,
        piece: Boolean, 
        required: true
    },
    quantity: Number,
    category: {
        type: String,
        trim: true,
        required: true
    }
})

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory