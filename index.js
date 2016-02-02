var express = require('express');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/config.json', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  var config = JSON.parse(fs.readFileSync('views/partials/config.json', 'utf8'));
  response.send(JSON.stringify(config));
});

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
