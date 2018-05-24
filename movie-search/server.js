var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

var PORT = process.env.PORT || 3000;

function getJSON(requestURL, callback) {

    http.request(requestURL, function(res){

        var body = '';
        var results = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function(){
            results = JSON.parse(body);
            callback(null, results);
        });

        res.on('error', callback);

    })
    .on('error', callback)
    .end();
}

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/movies/:searchInput', function(req, res) {

    var requestURL = 'http://www.omdbapi.com/?s=' + req.params.searchInput + '&type=movie&apikey=41f06725';

    getJSON(requestURL, function(err, results) {

        if (err) {
            console.log('Error occured while submitting request.');
        }

        res.send({ results });
    })
});

app.listen(PORT, function() {
	console.log('Server listening on ' + PORT);
});
