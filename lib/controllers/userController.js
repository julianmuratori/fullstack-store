const mongoose = require('mongoose')
const User = mongoose.model('User')
const passport = require('passport')

// Validates the user's login information before passing it along to server

exports.validateLogin = (req, res, next) => {
    req.checkBody('email', 'That email is not valid').isEmail()
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    })
    req.checkBody('password', 'password cannot be blank').notEmpty();
    
    next()
}
// Validates the user's registration info before passing it along to the server

exports.validateRegister = (req, res, next) => {

    req.sanitizeBody('name')
    req.checkBody('name', 'Please supply a name!').notEmpty()

    req.checkBody('email', 'That email is not valid').isEmail()
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    })

    req.checkBody('password', "password cannot be blank").notEmpty()

    const errors = req.validationErrors()

    if (errors) {
        res.json({ errors })
        return  // stops the function from running
    }
    next() //passes info along to next function
}

exports.register = async (req, res, next) => {
    const user = new User({ email: req.body.email, name: req.body.name })
    
    // 1 .register is a passportJS method that is exposed to us via the user model
    // 2. Passport takes a callback function that registers and hashes the user's password to the db    
    await User.register(user,req.body.password, function(err, user) {
        if (err) {
            console.log(err.message)
            res.status(400).send(err.message)
        } else {
            next()
        }
    })
}

exports.findUser = (req, res) => {
    const { user } = req.token
    
    if (user) {
        User.findById(user.id)
        .then(user => {
            res.status(200).send({
                message: 'Success!',
                payload: user
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
    } else {
        res.status(401).send({
            message: 'forbidden'
        })
    }
}


