const express = require("express");
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const promisify = require('es6-promisify')
const passport = require('passport')
const flash = require('connect-flash')
const path = require('path')
const routes = require('./routes/index')
const helpers = require('./helpers')
const errorHandlers = require('./errorHandlers')

const app = express();
const PORT = 8080;

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
// app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// // Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());


// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
