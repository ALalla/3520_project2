var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://abhisheklalla:1234@ds159235.mlab.com:59235/heroku_prmppm53';
//to process data sent in on request need body-parser module
var bodyParser = require('body-parser');
var path = require('path'); //to work with separtors on any OS including Windows
var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencode

module.exports.storeData = function (req, res, next) {
    // setting POST variables
    /*var firstname = req.body.FIRSTNAME;
    var lastname = req.body.LASTNAME;
    var street = req.body.STREET;
    var city = req.body.CITY;
    var state = req.body.STATE;
    var zip = req.body.ZIP;
    var email = req.body.EMAIL;

    var creditcardname = req.body.CREDITCARDNAME;
    var creditcardtype = req.body.CREDITCARDTYPE;
    var creditcardnum = req.body.CREDITCARDNUM;
    var creditcardexp = req.body.CREDITCARDEXP;

    var shipping_street = req.body.SHIPPING_STREET;
    var shipping_city = req.body.SHIPPING_CITY;
    var shipping_state = req.body.SHIPPING_STATE;
    var shipping_zip = req.body.SHIPPING_ZIP;*/

    var order = req.body.ORDER;


    //connect to MONGODB
    mongodb.MongoClient.connect(mongoDBURI, function (err, db) {
        //console.log(mongodb.MongoClient.connect);
        if (err) throw err;
        //CUSTOM IDS
        var customerID = Math.floor((Math.random() * 1000000000000) + 1);
        var billingID = Math.floor((Math.random() * 1000000000000) + 1);
        var shippingID = Math.floor((Math.random() * 1000000000000) + 1);
        //customer collection operation
        var CUSTOMERS = db.collection('CUSTOMERS');
        //set POST variables to index
        var customerdata = {
            _id: customerID,
            FIRSTNAME: req.body.FIRSTNAME,
            LASTNAME: req.body.LASTNAME,
            STREET: req.body.STREET,
            CITY: req.body.CITY,
            STATE: req.body.STATE,
            ZIP: req.body.ZIP,
            EMAIL: req.body.EMAIL
        };
        //insert Document
        CUSTOMERS.insertOne(customerdata, function (err, result) {
            if (err) throw err;
        });
        //billing collection operation
        var BILLING = db.collection('BILLING');
        //set POST variables to index
        var billingdata = {
            _id: billingID,
            CREDITCARDNAME: req.body.CREDITCARDNAME,
            CREDITCARDTYPE: req.body.CREDITCARDTYPE,
            CREDITCARDNUM: req.body.CREDITCARDNUM,
            CREDITCARDEXP: req.body.CREDITCARDEXP
        };
        //insert Document
        BILLING.insertOne(billingdata, function (err, result) {
            if (err) throw err;
        });
        //shipping collection operation
        var SHIPPING = db.collection('SHIPPING');
        //set POST variables to index
        var shippingdata = {
            _id: shippingID,
            SHIPPING_STREET: req.body.SHIPPING_STREET,
            SHIPPING_CITY: req.body.CITY,
            SHIPPING_STATE: req.body.SHIPPING_STATE,
            SHIPPING_ZIP: req.body.SHIPPING_ZIP
        };
        //insert Document
        SHIPPING.insertOne(shippingdata, function (err, result) {
            if (err) throw err;

        });
        //orders collection operation
        var ORDERS = db.collection('ORDERS');
        //set POST variables to index
        var order = {
            BILLING_ID: billingID,
            CUSTOMER_ID: customerID,
            SHIPPING_ID: shippingID,
            date: new Date(),

        };
        //insert document
        ORDERS.insertOne(order, function (err, result) {
            if (err) throw err;

        });

        //close
        db.close();
        //show successful
        res.render('orders');

    });
};