var express = require('express');
var app = express();
var hbs = require('hbs');
var WunderNodeClient = require("wundernode");
var apikey = process.env.WU_KEY

var debug = false;
var wunder = new WunderNodeClient(apikey, debug,  10, 'minute');
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/zipcode', function(req, res) {
  //var zipCode = req.body.zipCode;
  var query = req.body.zipCode;
  wunder.conditions(query, function(err, obj) {
    if (err){
      console.log('errors: ' + err);
      res.end("Error processing query string:" + queryData.query);
    }
    res.end(obj);
  });
});

app.listen(process.env.PORT || 5000);
