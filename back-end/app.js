var express = require('express');
var bodyParser = require('body-parser');
var StudentsController = require('./controller/studentsController.js');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var studentsController = new StudentsController();
console.log(studentsController);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/* ROUTES */
var studentsRoute = router.route('/students');
var studentRoute = router.route('/student/:id');

/* END-POINT */
studentsRoute.get(function(request, response) {
  response.json(studentsController.findAll());
});

studentsRoute.post(function(request, response) {
  var student = {
    name: request.body.name,
    age: parseInt(request.body.age)
  };
  response.json(studentsController.create(student));
});

studentRoute.get(function(request, response) {
  response.json(studentsController.getById(request.params.id));
});



app.use('/', router);

module.exports = app;
