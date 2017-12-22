// server.js
var app = require('./api/app');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});