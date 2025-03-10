
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//initialize express.
const app = express();

// Initialize variables.
const port = 3000; 


app.use(morgan('dev'));

app.use(express.static('JavaScriptSPA'))


// Set up a route for index.html.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/'));
});



// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');
