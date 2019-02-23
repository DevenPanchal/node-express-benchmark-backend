var express = require('express');
const newsRoutes = require('./routes/news.routes');
var app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//server config
app.set('port', (process.env.PORT || 5000));
// use Router
app.use('/api', newsRoutes);

app.use(morgan('dev'));
app.use(express.json());

var server = app.listen(app.get('port'), function () {

   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http://%s:%s", host, port)
});
