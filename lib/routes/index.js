const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/Inventory')
// const Inventory = mongoose.model('Inventory')
const Store = mongoose.model('Store')


// controllers
const storeController = require('../controllers/storeController')

// routes
router.get('/stores', storeController.getStores)

router.post('/add', storeController.addStore)

router.get('/stores/:id/inventory', storeController.getInventory)
router.post('/stores/:id/inventory', storeController.addInventory)



module.exports = router;