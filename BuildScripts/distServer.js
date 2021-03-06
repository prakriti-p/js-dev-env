var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');

const port = 3000;
var app = express();

app.use(compression())
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"))
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
})

app.listen(port, function(err) {
  if(err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
