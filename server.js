var express = require('express');
var app = express();
app.use('/', express.static('src'));

app.get('/', function (req, res) {
  res.send('./index.html');
});

app.listen(3000, function () {
  console.log('port 3000!');
});
