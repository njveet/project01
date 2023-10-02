var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var projectRouter = require('./routes/project');
var servicesRouter = require('./routes/services');
var contactRouter = require('./routes/contact');
var usersRouter = require('./routes/users');
var resourcesRouter = require('./routes/resources');
var blogRouter = require('./routes/blog');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//SErver Configration:
app.use('/', indexRouter); // Handle requests to the home page
app.use('/about', aboutRouter); // Handle requests to the about page
app.use('/projects', projectRouter); // Handle requests to the project page
app.use('/services', servicesRouter); // Handle requests to the services page
app.use('/contact', contactRouter); // Handle requests to the contact page
app.use('/users', usersRouter); // Handle requests to the users page
app.use('/resources', resourcesRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler middleware and route handlers
app.use(function(req, res, next) {
  res.status(404).send('404 - Not Found');
});

// error handler or middleware 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
