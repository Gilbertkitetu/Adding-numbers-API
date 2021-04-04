const express = require('express');
const router = express.Router();




//get request and add the numbers
router.get('/addition', function(req, res, next) {
    var num = 2 + 4;
    var additionTwo = req.query.a + req.query.b;
    res.send("Addition of two numbers" + num + additionTwo);
});





//export the router module
module.exports = router;