/*
* @Author: Akshata
* @Date:   2018-06-27 21:55:39
* @Last Modified by:   Akshata
* @Last Modified time: 2018-06-28 19:37:39
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/generate', function(req, res, next) {
	let wordA = req.query.wordA;
	let wordB = req.query.wordB; 

	let results = Array.from({length: 1000}, () => `${Math.floor(Math.random()*10)} :: ${wordA} :: ${wordB}`);
    res.send(JSON.stringify(results));
});

module.exports = router;