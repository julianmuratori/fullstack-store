const mongoose = require('mongoose')
const Store = require('../models/Store')
const Inventory = require('../models/Inventory')

exports.addStore = async (req, res) => {
    const store = await (new Store(req.body)).save()
}

exports.addInventory = async (req, res) => {
    const inventory = await (new Inventory(req.body)).save()
}

exports.getStores = (req, res) => {
    Store.find({})
        .then(docs => {
            res.status(200).send({
                message: 'here ya go',
                payload: docs
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
    const store = await Store.findOne({ slug: req.params.slug })
    
    // const hey = store.map(item => {
    //     Inventory.findOne(item, function(err, doc) {
    //         return doc
    //     })
    // })
    // console.log(hey)
    res.json(store)
}

// adds inventory id ref to store model

exports.addInventoryBySlug = async (req, res) => {
    const store = await Store.findOne({ slug: req.params.slug })
    const inventory = new Inventory(req.body)
    console.log(inventory)
    
    store.inventory.push(inventory)
    store.save()
    .then(doc => {
        res.status(201).json({ message: "Success", payload: doc})
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
        // console.log(err.message)
    })
    
    inventory.save()
    
}