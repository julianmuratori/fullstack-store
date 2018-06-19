const mongoose = require('mongoose')
const Store = require('../models/Store')
const Inventory = require('../models/Inventory')
const User = require('../models/User')


exports.addInventory = async (req, res) => {
    const inventory = await (new Inventory(req.body)).save()
}


// Finds user by ID and then returns the populated 'stores' object

exports.getStores = async (req, res) => {
    
    const user = await User
        .find({ _id: req.params.user })
        .populate('stores')
        .then(docs => {
            res.status(200).send({
                message: 'here ya go',
                payload: docs[0].stores
            })
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.getInventory = (req, res) => {
    Inventory.find({})
    .then(docs => {
        res.status(200).send({
            message: 'here ya go',
            payload: docs
        })
    })
    .catch(err => {
        res.status(500).send({ message: err.message})
    })
}

exports.getStoreBySlug = async (req, res) => {
    const store = await Store
    .findOne({ slug: req.params.slug })
    .populate('inventory')
    .then(docs => {
        res.status(200).send({
            message: 'here ya go',
            payload: docs.inventory
        })
    })
    .catch(err => {
        res.status(500).send({ message: err.message })
    })
}

// Saves a new store and then sends the new store's id along in the request body to addStoretoUser

exports.addStore = async (req, res, next) => {
    const user = await User.findById({ _id: req.body.user })
    const store = await (new Store(req.body))

    // user.stores.push(store)
    store.save()
        .catch(err => {
        res.status(500).json({ message: err.message})
    })

    // user.save()
    
    req.store = store._id
    next()
}

// Saves the newly created store to the user's store collection
exports.addStoretoUser = async (req, res) => {
    const user = await User.findById({ _id: req.body.user })
    const store = await Store.findById({ _id: req.store })

    user.stores.push(store)
    user.save()
        .then(doc => {
            res.status(200).json({ message: "Success", payload: doc })
        }).catch(err => {
            res.status(500).json({ message: err.message })
        })
}

// adds inventory id ref to store model

exports.addInventoryBySlug = async (req, res) => {
    const store = await Store.findOne({ slug: req.params.slug })
    const inventory = new Inventory(req.body)
    
    store.inventory.push(inventory)
    store.save()
    .then(doc => {
        res.status(201).json({ message: "Success", payload: doc})
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
    
    inventory.save()
    
}

// deletes item by id

exports.deleteItem = async (req, res) => {
    const { id } = req.params

    Inventory.findByIdAndRemove(id)
        .then(doc => {
            res.status(200).send({ inventory: doc })
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}