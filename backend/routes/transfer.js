const express = require('express');
const app = express();
const router = express.Router();
const authenticateToken = require('./authenticateToken')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to transfers page' });
});

module.exports = router;
