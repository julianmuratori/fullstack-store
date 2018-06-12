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
router.get('/:user/stores', storeController.getStores)

router.post('/add', 
    storeController.addStore, 
    storeController.addStoretoUser)

router.get('/stores/:slug', 
    storeController.getStoreBySlug
)

router.post('/stores/:slug/inventory', 
    storeController.addInventoryBySlug
)

router.delete('/stores/item/:id', 
    storeController.deleteItem
)

// Registration route passes through validation, registration, and login controllers
router.post('/register', 
    userController.validateRegister,
    userController.register,
    authController.login
)

// Login route passes through validation and login controllers
router.post('/login', 
    userController.validateLogin, 
    authController.login
)

// Client-side route to send in token from localstorage and have db return user info
router.get('/user/current', 
    authController.verifyToken, 
    userController.findUser
)

// Route to add a new store

module.exports = router;