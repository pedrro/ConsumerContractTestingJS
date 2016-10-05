function StudentsController() {
  return this;
}

var students = [
  {nome: 'Pedro', idade: 10},
  {nome: 'João', idade: 11},
  {nome: 'Thiago', idade: 9}
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
