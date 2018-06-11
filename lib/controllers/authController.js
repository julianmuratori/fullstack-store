const passport = require('passport')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/User')


exports.login = async (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', function(err, user, info) {
        console.log(user)
        console.log(info)
        if (err) {
            return res.status(404).json({ message: err.message })
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
                payload: user,
                token: token
            })
        })
    }) (req, res)
}

exports.verifyToken = (req, res, next) => {
    const authHeader = req.get('authorization')
    
    if (!authHeader) {
        res.status(401).json({
            message: 'unauthorized'
        })
    }
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) res.status(401).json({ message: 'forbidden'})

        if (decoded) {
            req.token = decoded
            next()
        }
    })
}