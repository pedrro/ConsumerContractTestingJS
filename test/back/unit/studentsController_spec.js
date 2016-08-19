var StudentsController = require('../../../back-end/controller/studentsController.js');
var studentsController = new StudentsController();

describe('students controller', function() {
  it('should return all students', function() {
    expect(studentsController.findAll().length).to.be.eql(3);
  });

  it('should create a student', function() {
    var student = {
      name: "pedroo",
      age: 10
    };

    expect(studentsController.create(student)).to.be.eql(student);
    expect(studentsController.findAll().length).to.be.eql(4);
   });

   it('should get a student', function() {
     var student =   {name: 'Pedro', age: 10};
     expect(studentsController.getById(1)).to.be.eql(student);
   });
});
