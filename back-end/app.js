var express = require('express');
var bodyParser = require('body-parser');
var Joi = require('joi');
var StudentsController = require('./controller/studentsController.js');

var app = express();
var router = express.Router();
var studentsController = new StudentsController();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

/* ROUTES */
var studentsRoute = router.route('/students');
var studentRoute = router.route('/student/:id');

/* END-POINT */
studentsRoute.get(function(request, response) {
    response.json(studentsController.findAll());
});

studentsRoute.post(function(request, response) {
    var studentValidation = Joi.object().keys({
        'name': Joi.string().required(),
        'age': Joi.number().integer().min(0).max(100).required()
    });

    Joi.validate(request.body, studentValidation, function(err, value) {
        if (err === null) {
            response.json(studentsController.create(request.body));
        } else {
            response.status(400).send('errors on request: ' + err);
        }
    });
});

studentRoute.get(function(request, response) {
    response.json(studentsController.getById(request.params.id));
});

app.use('/', router);

module.exports = app;
