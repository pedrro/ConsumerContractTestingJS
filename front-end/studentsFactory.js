angular.module('studentsApp')
.factory('StudentsFactory', function($http) {
  var base_url = 'http://localhost:3000';
  var studentsURI = '/students';
  var studentURI = '/student';
  var config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  return {
    getStudents: function() {
      return $http.get(base_url + studentsURI);
    },
    addStudent: function(data) {
      return $http.post(base_url + studentsURI, data, config);
    },
    getStudent: function(id) {
      return $http.get(base_url + studentURI + '/' + id);
    }
  };
});
