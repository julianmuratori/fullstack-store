const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Store = mongoose.model('Store')


// controllers
const storeController = require('../controllers/storeController')

// routes
router.get('/stores', (req, res) => {
    Store.find({})
        .then(docs => {
            res.status(200).send({
                message: 'here ya go',
                payload: docs
            })
        })
        .catch(err => {
            res.status(500).send({ message: err.message})
        })
})


router.post('/add', storeController.addStore);



module.exports = router;