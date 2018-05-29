const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    format: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
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