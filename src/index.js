var express = require('express');
var path = require('path');
var server = express();

server.use(express.static(path.join(__dirname, '../www')))

// This will be call by APPLE TO VERIFY THE APP-SITE-ASSOCIATION 
// Make the 'apple-app-site-association' accessable to apple to verify the association
server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.sendFile(path.join(__dirname, '../www/apple-app-site-association'));
});

server.listen(5000);
