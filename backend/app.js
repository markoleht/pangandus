var createError = require('http-errors');
var express = require('express');
const mongoose = require("mongoose");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv/config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var indexRouter = require('./routes/index');
var app = express();
const authRoute = require('./routes/auth');
const indexRoute = require('./routes/index');
const balanceRoute = require('./routes/balance');
const transferRoute = require('./routes/transfer');
const verifyRoute = require('./routes/authenticateToken');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//************************************************************************************************ */
// THIS PART WILL NOT BE ADDED TO MASTER, IT IS ONLY IN INDREK DEVELOPMENT BRANCH
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.PASSWORD}@apiharjutuamiseks.fz83t.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`;
//************************************************************************************************ */

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRoute);
app.use('/index', indexRouter);
app.use('/balance', balanceRoute);
app.use('/transfer', transferRoute);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(400));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(9000, () => {
  console.log(' listening to port 9000')
  console.log('http://localhost:9000/api-docs')
})

module.exports = app;
