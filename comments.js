// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set the port
app.set('port', 3000);

// Handle POST requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Handle GET requests
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/comments.html');
});

// Handle POST requests
app.post('/comment', function(req, res) {
    var comment = req.body.comment;
    fs.appendFile('comments.txt', comment + '\n', function(err) {
        if (err) {
            res.send('Error: ' + err);
        } else {
            res.send('Comment added!');
        }
    });
});

// Start the server
app.listen(app.get('port'), function() {
    console.log('Server running at http://localhost:' + app.get('port'));
});