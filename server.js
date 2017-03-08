var express = require('express');
var app = express();
var PORT = 3000;
//
// app.get('/', function(req, res){
//   res.send('hello express!');
// });

var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function(req, res){
  res.send('about page');
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || PORT, function(){
  console.log('Express server started on port '+ PORT +'!');
});
