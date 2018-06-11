const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

// passport.use(User.createStrategy())
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
    usernameField: 'email',
    session: false
},
    function (email, password, done) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return User.findOne({ email })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Cannot find account' });
                }
                if (!user.password === password) {
                    return done(null, false, { message: 'Incorrect Password'})
                }
                
                return done(null, user, { message: 'Logged In Successfully' });
            })
            .catch(err => done(err));
    }
));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

