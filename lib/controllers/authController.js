const passport = require('passport')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/User')

// exports.login = passport.authenticate('local', {
//     failureRedirect: '/newstores',
//     successRedirect: '/newstore'
// })

// exports.login = (req, res) => {
//     passport.authenticate('local', (err, user, info) => {

//         if (err) {
//             return res.status(401).send(err)
//         }  
        
//         req.login(user, { session: false }, (err) => {
//             if (err) {
//                 res.status(200).send(err);
//             }
//             // console.log(user)
//             // generate a signed son web token with the contents of user object and return it in the response
//             const token = jwt.sign(user, 'your_jwt_secret');
//             res.status(500).send(user);
//         })(req, res)
//     })
// }

exports.login = passport.authenticate('local'), function(req, res) {
    console.log('it worked')
    res.send('it worked')
}