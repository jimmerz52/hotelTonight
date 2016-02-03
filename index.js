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

var fs = require('fs');
app.get('/execute', function(request, response) {
	var body = JSON.stringify(request.body);
  fs.writeFile("/tmp/execute.log", body, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
	});
});

app.get('/publish', function(request, response) {
  var body = JSON.stringify(request.body);
  fs.writeFile("/tmp/execute.log", body, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});

app.get('/save', function(request, response) {
  var body = JSON.stringify(request.body);
  fs.writeFile("/tmp/execute.log", body, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});

app.get('/validate', function(request, response) {
  var body = JSON.stringify(request.body);
  fs.writeFile("/tmp/execute.log", body, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});

app.get('/index.html', function(request, response) {
  var body = JSON.stringify(request.body);
  fs.writeFile("/tmp/execute.log", body, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});

// app.get('/config.json', function(request, response) {
//   response.setHeader('Content-Type', 'application/json');
//   var config = JSON.parse(fs.readFileSync('views/partials/config.json', 'utf8'));
//   response.send(JSON.stringify(config));
// });

// app.get('/config.json', function(request, response) {
//   response.setHeader('Content-Type', 'application/json');
//   var config = JSON.parse(fs.readFileSync('views/partials/config.json', 'utf8'));
//   response.send(JSON.stringify(config));
// });

// app.get('/config.json', function(request, response) {
//   response.setHeader('Content-Type', 'application/json');
//   var config = JSON.parse(fs.readFileSync('views/partials/config.json', 'utf8'));
//   response.send(JSON.stringify(config));
// });

// app.get('/config.json', function(request, response) {
//   response.setHeader('Content-Type', 'application/json');
//   var config = JSON.parse(fs.readFileSync('views/partials/config.json', 'utf8'));
//   response.send(JSON.stringify(config));
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
