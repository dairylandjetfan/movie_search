var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/movies', function(req, res) {

	var requestURL = 'http://www.omdbapi.com/?s=' + req.body.searchText + '&apikey=41f06725';

    var movies = '';

	http.request(requestURL, function(res){

		var body = '';

    	res.on('data', function(chunk) {
    		body += chunk;
    	});

    	res.on('end', function(){
    		var parsed = JSON.parse(body);

    		movies: parsed.Titles
    	});

    }).end();

	res.send({ movies : movies });
});

app.listen(PORT, function() {
	console.log('Server listening on ' + PORT);
});
