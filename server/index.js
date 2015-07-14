var express = require('express');
var app = express();

//route to your index.html
app.use(express.static('client/'));


var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);