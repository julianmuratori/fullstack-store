const passport = require('passport')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/User')


exports.login = async (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return res.status(404).json({ message: err })
        }
        if (!user) { 
            return res.status(404).json({ message: 'user is not authorized'})
        }
        
        req.logIn(user, {session: false}, function(err) {
            if (err) { 
                res.status(400).json({ message: err })    
            }
            
            const { _id } = user
            const payload = {
                user: {
                    id: _id
                }
            }
            const token = jwt.sign(payload, process.env.SECRET)
            
            res.status(200).json({
                message: 'success',
                payload: token
            })
        })
    }) (req, res)
}