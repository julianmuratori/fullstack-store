const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Store = mongoose.model('Store')


// controllers
const storeController = require('../controllers/storeController')

// routes
router.get('/add', (req, res) => {
    res.status(200).json({
        message: "yup"
    })
})

router.post('/add', storeController.addStore);



module.exports = router;