const express = require('express');
const router = express.Router();




//get request and add the numbers
router.get('/addition', function(req, res, next) {
    var num = 2 + 4;
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    var additionTwo = a + b;
    res.send("The Addition of two numbers " + a + " and " + b + " is " + additionTwo);

    // var a = parseFloat(req.query);
    // res.send(a);
});





//export the router module
module.exports = router;