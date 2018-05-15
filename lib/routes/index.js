const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Store = mongoose.model('Store')


// controllers
const storeController = require('../controllers/storeController')

// routes
router.get('/stores', storeController.getStores)

router.post('/add', storeController.addStore)



module.exports = router;