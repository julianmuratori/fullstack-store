const mongoose = require('mongoose')

exports.validateRegister = (req, res, next) => {
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
        return
    }
    next()
}