var Contract = require('consumer-contracts').Contract;
var Joi = require('consumer-contracts').Joi;

module.exports = new Contract({
    name: 'find all students',
    consumer: 'test',
    request: {
        method: 'GET',
        url: 'http://localhost:3000/students'
    },
    response: {
        statusCode: 200,
        body: Joi.array().items(Joi.object().keys({
            name: Joi.string().required(),
            age: Joi.number().integer().min(0).max(100).required()
        }))
    }
});
