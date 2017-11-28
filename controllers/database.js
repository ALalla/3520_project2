//var mongodb = require('mongodb');
//var mongoDBURI = process.env.MONGODB_URI || 'mongodb://abhisheklalla:1234@ds159235.mlab.com:59235/heroku_prmppm53';


/** getAllRoutes controller logic that current does model logic too -connects to Mongo database and
 * queries the Routes collection to retrieve all the routes and build the output usig the
 * ejs template mongodb.ejs found in views directory
 * @param request
 * @param response
 *
 */
/*module.exports.getAllOrders =  function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err, db) {
        if(err) throw err;

        //get collection of routes
        var Orders = db.collection('Orders');


        //FIRST showing you one way of making request for ALL routes and cycle through with a forEach loop on returned Cursor
        //   this request and loop  is to display content in the  console log
        var c = Orders.find({});

        c.forEach(
            function(myDoc) {
                console.log( "name: " + myDoc.name );  //just  loging the output to the console
            }
        );


        //SECOND -show another way to make request for ALL Routes  and simply collect the  documents as an
        //   array called docs that you  forward to the  getAllRoutes.ejs view for use there
        Orders.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('getAllOrders', {results: docs});

        });


        //Showing in comments here some alternative read (find) requests
        //this gets Routes where frequency>=10 and sorts by name
        // Routes.find({ "frequency": { "$gte": 10 } }).sort({ name: 1 }).toArray(function (err, docs) {
        // this sorts all the Routes by name
        //  Routes.find().sort({ name: 1 }).toArray(fu namenction (err, docs) {


        //close connection when your app is terminating.
        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function

*/

var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://abhisheklalla:1234@ds159235.mlab.com:59235/heroku_prmppm53';


module.exports.storeData =  function (request, response) {
    var firstname = req.body.FIRSTNAME;
    var lastname = req.body.LASTNAME;
    var street = req.body.STREET;
    var city = req.body.CITY;
    var state = req.body.STATE;
    var zip = req.body.ZIP;
    var email = req.body.EMAIL;

    var creditcardtype = req.body.CREDITCARDTYPE;
    var creditcardnum = req.body.CREDITCARDNUM;
    var creditcardexp = req.body.CREDITCARDEXP;


    var shipping_street = req.body.SHIPPING_STREET;
    var shipping_city = req.body.SHIPPING_CITY;
    var shipping_state = req.body.SHIPPING_STATE;
    var shipping_zip = req.body.SHIPPING_ZIP

    mongodb.MongoClient.connect(mongoDBURI, function(err, db) {
        if (err) throw err;


    };

