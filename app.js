var express = require('express');
var app = express();

var hbs = require('hbs');
var api_key = process.env.WU_KEY

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/api', function(req, res) {
  res.send({zipcode: 80304, weather: 'Hot'});
});

app.listen(process.env.PORT || 5000);
