const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const Schema = mongoose.Schema
const slug = require('slugs')

const storeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please Enter a Store Name'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    inventory: Array
})

storeSchema.pre('save', function(next) {
    if (!this.isModified('name')) {
        next()
        return
    }
    this.slug = slug(this.name)
    next()
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store