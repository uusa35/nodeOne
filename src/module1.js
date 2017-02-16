//var http = require('http');
//var server = http.createServer(function(request, response) {
//    console.log('server started');
//    response.write('testing server');
//    response.end();
//});
//
//server.listen(3000);

//var $ = require('jquery');
//$(document).ready(function () {
//    console.log('jquery started');
//    $('body').append('<h1>title from jquery</h1>');
//});
module.exports = {
    first: 'first thing working now',
    second: 'second thing ',
    test: function () {
        console.log('its just a test');
    },
}
