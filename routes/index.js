var express = require('express');
var router = express.Router();
module.exports = router;

//var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection

//MAY HAVE OTHER CODE in index.js

var bodyParser = require('body-parser');
var path = require ('path'); //to work with separtors on any OS including Windows
var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode

//CODE to route /getAllRoutes to appropriate  Controller function
//***********************************************
//***** mongodb get all of the Routes in Routes collection w
//      and Render information iwith an ejs view
//app.post("/storeData', controllerMongoCollection.getAllOrders);

//router.post('/storeData', controllerMongoCollection.storeData);

router.post('/storeData', function(req, res, next) {
    var firstname = req.body.firstname;  //retrieve the data associated with name
    res.send("hello " + firstname);
    console.log('hello');
});