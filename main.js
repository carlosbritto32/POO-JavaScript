const natalia = {
  name: "Nath",
  age: 25,
  cursosAprobados: ["responsive", "JS practico", "python"],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // };
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student("juanita Alejandra", 15, [
  "responsive",
  "JS practico",
]);
