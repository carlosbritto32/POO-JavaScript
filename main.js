class Course {
  constructor({ name, classes }) {
    this.name = name;
    this.classes = classes;
  }
}

const Html = new Course({
  name: "html",
});
const Css = new Course({
  name: "css",
});
const Js = new Course({
  name: "JS",
});
const Js_POO = new Course({
  name: "JS POO",
});
const React = new Course({
  name: "React",
});

class learningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new learningPaths({
  name: "Escuela de desarrollo Web",
  courses: [Html, Css, Js_POO, Js],
});
const escuelaData = new learningPaths({
  name: "Escuela de Data Science",
  courses: [Html, Css, Js],
});
const escuelaVdjgs = new learningPaths({
  name: "Escuela de videoJuegos",
  courses: [Html, Css, Js],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };

    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "JuanDC",
  email: "juanito@platzi.com",
  twitter: "juanito",
  learningPaths: [escuelaWeb, escuelaVdjgs],
});

const miguelito2 = new Student({
  name: "miguel",
  username: "miguelito",
  email: "miguel@platzi.com",
  twitter: "migay",
  learningPaths: [escuelaWeb, escuelaData],
});
