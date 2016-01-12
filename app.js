
/**
 * material demo
 */

var compression = require('compression');
var express = require('express');
var app = express();
var port = 4000;

app.use(compression());

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/Examples', express.static(__dirname + '/Examples'));
app.use('/Source', express.static(__dirname + '/Source'));

app.use('/docs', express.static(__dirname + '/Docs'));

app.listen(process.env.PORT || port);

console.info('app running on port', port);
