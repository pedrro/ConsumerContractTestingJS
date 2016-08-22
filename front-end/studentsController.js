angular
.module('studentsApp')
.controller('StudentsController', StudentsController);

function StudentsController($scope, StudentsFactory) {
    $scope.students = [];
    $scope.specificStudent= {};

    $scope.getStudents = function() {
        StudentsFactory.getStudents().then(function(response) {
            if($scope.students.length > 0){
                $scope.students = [];
            }
            $scope.students.push(response.data);
        });
    };

    $scope.addStudent = function() {
        var data = { name : $scope.student.name, age: $scope.student.age};
        StudentsFactory.addStudent(data).then(function(response) {
            $scope.students.push(response.data);
            $scope.getStudents();
        });
    };

    $scope.getAStudent = function(){
        StudentsFactory.getStudent($scope.student.id).then(function(response) {
            if($scope.specificStudent.length > 0){
                $scope.specificStudent = {};
            }
            $scope.specificStudent ={
                name : response.data.name,
                age : response.data.age
            };
        });
    };

}
