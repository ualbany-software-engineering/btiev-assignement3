var express = require('express');
var path = require('path')
var router = express.Router();
var app = express()

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/', 'index.html'));
});
app.use('/', router);

//note, unlike POST, parameters are visible to a user in browser address bar in GET request.
router.get('/add/:firstNumber/and/:secondNumber', (req,res)=>{
  console.log(req.params.firstNumber + req.params.secondNumber);
  //Checkout console to see why parseInt is essential in this case.
  let firstNo = parseInt(req.params.firstNumber),
      secondNo = parseInt(req.params.secondNumber);
  res.json({"Addition" : firstNo + secondNo});
});

module.exports = router;
