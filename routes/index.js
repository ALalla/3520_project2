var express = require('express');
var router = express.Router();
module.exports = router;

var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb


router.post('/storeData', controllerMongoCollection.storeData);
//console.log(controllerMongoCollection.storeData);


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

