var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var expressValidator = require('express-validator');
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
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(expressValidator());

/* ROUTES */
var studentsRoute = router.route('/students');
var studentRoute = router.route('/student/:id');

/* END-POINT */
studentsRoute.get(function(request, response) {
    response.json(studentsController.findAll());
});

studentsRoute.post(function(request, response) {
    var studentValidation = {
        'name': {
            notEmpty: true,
            errorMessage: 'Invalid name'
        },
        'age': {
            notEmpty: true,
            isLength: {
                options: [{
                    min: 1,
                    max: 2
                }],
                errorMessage: 'Must be between 1 and 2 chars long' // Error message for the validator, takes precedent over parameter message
            },
            errorMessage: 'Invalid age'
        }
    };

    var newStudent = buildStudent(request.body.name, parseInt(request.body.age));

    request.checkBody(studentValidation);
    if(request.validationErrors()) {
        response.status(400).send('errors on request: ' + util.inspect(request.validationErrors()));
    }else {
        response.json(studentsController.create(newStudent));
    }
});

var buildStudent = function (name, age) {
    return {'name' : name, 'age' : age};
};

studentRoute.get(function(request, response) {
    response.json(studentsController.getById(request.params.id));
});



app.use('/', router);

module.exports = app;
