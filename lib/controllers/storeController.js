const mongoose = require('mongoose')
const Store = require('../models/Store')

exports.addStore = async (req, res) => {
    const store = await (new Store(req.body)).save()
    res.status(201).json({
        message: 'saved new store'      
    })
}