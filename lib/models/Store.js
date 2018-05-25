const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema
const slug = require('slugs')

const storeSchema = new Schema({
    storeName: {
        type: String,
        trim: true,
        required: true
    },
    slug: String,
    storeDesc: {
        type: String,
        trim: true
    },
    selectedTags: [],
    inventory: {
        type: Schema.ObjectId,
        ref: 'Inventory'
    }
})
storeSchema.pre('save', function(next) {
    if (!this.isModified('storeName')) {
        next()
        return
    }
    this.slug = slug(this.storeName)
    next()
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store