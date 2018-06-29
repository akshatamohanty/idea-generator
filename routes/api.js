/*
* @Author: Akshata
* @Date:   2018-06-27 21:55:39
* @Last Modified by:   Akshata
* @Last Modified time: 2018-06-29 20:29:24
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/generate', function(req, res, next) {
	let wordA = req.query.wordA;
	let wordB = req.query.wordB; 

	let lorem_ipsum_text = "Lorem ipsum ut aute cupidatat eu enim ut amet dolor dolore est velit commodo magna culpa ullamco elit dolor labore."
	let random_int = Math.floor(Math.random()*lorem_ipsum_text.length);

	let results = Array.from({length: 1000}, () => `${ lorem_ipsum_text.slice(random_int, random_int + Math.floor(Math.random()*lorem_ipsum_text.length) ) }`);
    res.send(JSON.stringify(results));
});

module.exports = router;