function videoPlay(id) {
  const urlSecreta = "https://platzi.com" + id;

  console.log("Se esta reproduiendo desde la url" + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://platzi.com" + id;

  console.log("Pausamos la url" + urlSecreta);
}

// function videoPlay(){}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this.name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
}

const Html = new Course({
  name: "html",
  isFree: true,
  lang: "spanish",
});
const Css = new Course({
  name: "css",
  isFree: true,
  lang: "spanish",
});
const Js = new Course({
  name: "JS",
  isFree: true,
  lang: "spanish",
});
const Js_POO = new Course({
  name: "JS POO",
  isFree: false,
  lang: "english",
});
const React = new Course({
  name: "React",
  isFree: false,
  lang: "english",
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

// clase de herencia 14

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

class freeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo Sentimos, " + this.name + "Solo puedes tomar cursos gratis"
      );
    }
  }
}

class basicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo Sentimos, " + this.name + "no puedes tomar cursos en ingles"
      );
    }
  }
}

class expertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const juan = new freeStudent({
  name: "JuanDC",
  username: "JuanDC",
  email: "juanito@platzi.com",
  twitter: "juanito",
  learningPaths: [escuelaWeb, escuelaVdjgs],
});

const miguelito = new basicStudent({
  name: "miguel",
  username: "miguelito",
  email: "miguel@platzi.com",
  twitter: "migay",
  learningPaths: [escuelaWeb, escuelaData],
});
