/*
* @Author: Akshata
* @Date:   2018-06-27 21:55:39
* @Last Modified by:   Akshata
* @Last Modified time: 2018-06-27 21:56:29
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Test API');
});

module.exports = router;