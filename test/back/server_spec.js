var frisby = require('frisby');

frisby.create('Should return the list of students')
  .get('http://localhost:3000/students')
  .expectStatus(200)
  .expectJSON([
    {nome: 'Pedro', idade: 10},
    {nome: 'João', idade: 11},
    {nome: 'Thiago', idade: 9}
  ])
  .toss();

frisby.create('Should add a new student')
  .post('http://localhost:3000/students',
    {nome: 'José', idade: 12}
  )
  .expectStatus(200)
  .expectJSON(
    {nome: 'José', idade: 12}
)
  .toss();

frisby.create('Should get a specific student')
  .get('http://localhost:3000/student/1')
  .expectStatus(200)
  .expectJSON(
    {nome: 'Pedro', idade: 10}
  )
  .toss();
