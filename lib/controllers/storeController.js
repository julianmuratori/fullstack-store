const mongoose = require('mongoose')
const Store = require('../models/Store')

exports.addStore = async (req, res) => {
    const store = await (new Store(req.body)).save()
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