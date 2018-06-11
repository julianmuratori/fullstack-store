const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/Inventory')
require('../models/Store')
require('../models/User')

// controllers
const storeController = require('../controllers/storeController')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

// routes
router.get('/stores', storeController.getStores)

router.post('/add', storeController.addStore)

// router.get('/stores/:id/inventory', storeController.getInventory)
// router.post('/stores/:id/inventory', storeController.addInventory)

router.get('/stores/:slug', storeController.getStoreBySlug)
router.post('/stores/:slug/inventory', storeController.addInventoryBySlug)
router.delete('/stores/item/:id', storeController.deleteItem)

router.post('/register', 
    userController.validateRegister,
    userController.register,
    authController.login
)

router.get('/user/current', authController.verifyToken, userController.findUser)

module.exports = router;