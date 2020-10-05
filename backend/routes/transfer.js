const express = require('express');
const app = express();
const router = express.Router();
const authenticateToken = require('./authenticateToken')

/* GET home page. */
//for testing authentication add into headers auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc1NmYyMWJmMDFmMTQ0YzQ0NTQ0MDMiLCJpYXQiOjE2MDE4MDI4ODV9.P8pyn5TGPoQ986fpFvm1pKwfrvVLWaYB139oOiVWSIk
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to transfers page' });
});

module.exports = router;
