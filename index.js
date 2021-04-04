const express = require('express');
const bodyParser = require('body-parser');

//setting up express app
const app = express();





//use body-parser in json format
app.use(bodyParser.json());

//use routes and initialize routes
app.use('/api', require('./routes/api'));


//error handling 
app.use(function(err, req, res, next) {
    //send status and error message
    res.status(422).send({ err: err.message });
});

//listen to requests
app.listen(process.env.port || 4000, function() {
    console.log("Api listening for requests on port 4000");
});