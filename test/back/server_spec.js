var frisby = require('frisby');

frisby.create('Should return the list of students')
  .get('http://localhost:3000/students')
  .expectStatus(200)
  .expectJSON([
    {name: 'Pedro', age: 10},
    {name: 'João', age: 11},
    {name: 'Thiago', age: 9}
  ])
  .toss();

frisby.create('Should add a new student')
  .post('http://localhost:3000/students',
    {name: 'José', age: 12}
  )
  .expectStatus(200)
  .expectJSON(
    {name: 'José', age: 12}
)
  .toss();

frisby.create('Should get a specific student')
  .get('http://localhost:3000/student/1')
  .expectStatus(200)
  .expectJSON(
    {name: 'Pedro', age: 10}
  )
  .toss();
