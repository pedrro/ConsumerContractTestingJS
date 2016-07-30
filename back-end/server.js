var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var students = [
  {name: 'Pedro', age: 10},
  {name: 'João', age: 11},
  {name: 'Thiago', age: 9}
];

/* ROUTES */
var studentsRoute = router.route('/students');
var studentRoute = router.route('/student/:id');

/* END-POINT */
studentsRoute.get(function(request, response) {
  response.json(students);
});

studentsRoute.post(function(request, response) {
  var student = {
    name: request.body.name,
    age: parseInt(request.body.age)
  };

  students.push(student);
  response.json(student);
});

studentRoute.get(function(request, response) {
  var student = students[request.params.id - 1];
  response.json(student);
});

app.use('/', router);
app.listen(port, function() {
  console.log('Insert student on port: ' + port);
});
