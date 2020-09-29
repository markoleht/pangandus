const express = require('express');
const app = express();
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Bank' });
});
module.exports = router;
