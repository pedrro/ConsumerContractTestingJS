describe('Controller: Students', function() {
  var StudentsController, scope, StudentsFactory;
  beforeEach(function() {
    module('studentsApp');
    inject(function($rootScope, $controller, $httpBackend, $injector) {
      scope = $rootScope.$new();
      httpBackend = $injector.get('$httpBackend');
      StudentsFactory = $injector.get('StudentsFactory');

      StudentsController = $controller('StudentsController', {
        $scope : scope,
        'StudentsFactory' : StudentsFactory
      });

      students = [{
        name: 'Pedro',
        age: 10
      }, {
        name: 'João',
        age: 11
      }, {
        name: 'Thiago',
        age: 9
      }];
      
      spyOn(StudentsFactory, 'getStudents').and.returnValue(students);
    });
  });

  it('Should verify a controller', function() {
    expect(StudentsController).toBeDefined();
  });

  it('Should get all students', function() {
    scope.students = [];

    StudentsController.getStudents();
    $scope.$apply();
    expect(scope.students.length).toBe(3);
  });


});
