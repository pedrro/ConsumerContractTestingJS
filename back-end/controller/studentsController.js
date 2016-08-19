function StudentsController() {
  return this;
}

var students = [
  {name: 'Pedro', age: 10},
  {name: 'João', age: 11},
  {name: 'Thiago', age: 9}
];

StudentsController.prototype.findAll = function () {
  return students;
};

StudentsController.prototype.create = function (body) {
  students.push(body);
  return body;
};

StudentsController.prototype.getById = function(id) {
  return students[id - 1];
};

module.exports = StudentsController;
