/*
* @Author: Akshata
* @Date:   2018-06-27 21:55:39
* @Last Modified by:   Akshata
* @Last Modified time: 2018-06-27 22:31:41
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Test API::Test API::Test API');
});

module.exports = router;