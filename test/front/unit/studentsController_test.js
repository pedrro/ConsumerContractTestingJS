describe('Controller: Students', function() {
  var StudentsController, scope, StudentsFactory, mockFactory, $q, studentsArray;

  beforeEach(function() {

    module('studentsApp');

    inject(function($rootScope, $controller, _$q_, $injector) {
      $q = _$q_;
      scope = $rootScope.$new();

      studentsArray = [{
        name: 'Pedro',
        age: 10
      }, {
        name: 'João',
        age: 11
      }, {
        name: 'Thiago',
        age: 9
      }];

      StudentsFactory = $injector.get('StudentsFactory');

      StudentsController = $controller('StudentsController', {
        $scope : scope
      });
    });
  });

  it('Should verify a controller', function() {
    expect(StudentsController).toBeDefined();
  });

  it('Should get all students', function() {
    spyOn(StudentsFactory, 'getStudents').and.returnValue($q.when({data: studentsArray}));

    scope.getStudents();
    scope.$apply();

    var students1 = scope.students;

    expect(students1.length).toBe(3);
  });

  it('Should add a Student', function() {
    spyOn(StudentsFactory, 'getStudents').and.returnValue($q.when({data: studentsArray}));
    spyOn(StudentsFactory, 'addStudent').and.returnValue($q.when({data :{name : "Pedro",
    age: 10}}));
    scope.student = {
      name : "Pedro",
      age: 10
   };



    scope.addStudent();
    scope.$apply();
    var students1 = scope.students;

    expect(StudentsFactory.getStudents).toHaveBeenCalled();
  });

  it('Should get a student', function() {
    spyOn(StudentsFactory, 'getStudent').and.returnValue($q.when({data : {
      name: 'Pedro'
    }}));
    scope.student = { 'id' : 1 };

    var studentId = scope.student.id;
    scope.getAStudent(studentId);
    scope.$apply();

    var student = scope.specificStudent;

    expect(student.name).toEqual("Pedro");
  });

});
