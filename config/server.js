/* import express framework module*/
var express = require('express');

/* import consign module */
var consign = require('consign');

/* import body-parser module */
var bodyParser = require('body-parser');

/* import express-validator module */
var expressValidator = require('express-validator');

/* import compression module */
var compression = require('compression');

/* start express object */
var app = express();

/* set the variables 'view engine' and 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* setup the middleware express.static */
app.use(express.static('./app/public'));

/* setup the middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* setup the middleware express-validator */
app.use(expressValidator());

/* setup the middleware compression */
app.use(compression());

/* autoloads routes, models, and controllers to the app object */
consign()
	.include('app/routes')
	.then('config/connection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* app export */
module.exports = app;