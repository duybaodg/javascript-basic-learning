//1. Front-end: Xay dung gia dien nguoi dung
//2: Back-end: Xay dung logic xu ly, co so du lieu
// API (URL) -> Application Programming interface

//Backend (OK) => API (URL) => fetch -> JSON
// -> JSON.parse => Javascript types
// -> Render ra giao dien voi HTML
//var postApi = "https://jsonplaceholder.typicode.com/posts";

//fetch
// -JSON server: API Server (fake) / Mock API
// -CRUD:   - Create - POST
//          - Read - GET
//          - Update - PUT / PATCH
//          - Delete => DELETE

//stream
// fetch(postApi)
//   .then(function (response) {
//     return response.json();
//     //JSON.parse: JSON => Javascript type
//   })
//   .then(function (posts) {
//     var htmls = posts.map(function (post) {
//       return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//         </li>`;
//     });
//     var html = htmls.join("");
//     document.getElementById("post-api").innerHTML = html;
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

var courseApi = "http://localhost:3000/course";
function start() {
  getCourses(renderCourses);
  handleCreateForm();
}
start();
//function
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
//render course
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `<li class='course-item-${course.id}'>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onClick="handleDeleteCourse(${course.id})">Delete</button>
            </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function createCourse(data, callback) {
  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, option)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, option)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create-btn");
  createBtn.onclick = function () {
    var name = document.querySelector("input[name='name']").value;
    var description = document.querySelector("input[name='description']").value;
    console.log(name);
    console.log(description);

    var formData = {
      name: name,
      description: description,
    };
    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}

//ECMAScript 6 => released in 2015
/**
 * 1. let, const
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow function
 * 5. Classes
 * 6. Default parameter values
 * 7. Destructuring
 * 8. Rest parameters
 * 9. Spread
 * 10. Enhanced object literals
 * 11. Tagged template literal
 * 12. Modules
 */

//1. Var / let, const: scope, hosting
//2. Const / Var, let: assignment
//Code block: if else, loop, {}, ...

//let, const chi su dung trong pham vi 1 scope nhat dinh

//var duoc ho tro hosting\
//let, const khong dc ho tro hosting
//Kieu du lieu tham tri va tham chieu

//su dung khi nao
//code thuan: var
//babel: const, let
// khi dinh nghia bien va khong gan lai bien do: const
// khi can gan lai gia gia tri cho bien: let

//* 2. Template Literals
//* 3. Multi-line String

const courseName = "Javascript";
const courseName2 = "PHP";
const description = `Course name:  ${courseName} ${courseName2}`; //noi suy su dung ` `
console.log(description);

const lines = `Line 1
Line 2
Line 3`;
console.log(lines);

//Arrow function

function logger(log) {
  console.log(log);
}
logger("Message ....");

// => arrow function

const logger2 = (log) => {
  console.log(log);
};
logger2("Message ....");

const sum = (a, b) => a + b;
console.log(sum(2, 2));

const sum2 = (a, b) => ({ a: a, b: b });
const logger3 = (log) => console.log(log);
logger3("hello");

const course1 = {
  name: "Javascript",
  getName: function () {
    return this.name; //context
  },
};
console.log(course1.getName());

//arrow function khong the su dung function constructor

//Class
function Course(name, price) {
  this.name = name;
  this.price = price;
}
const phpCourse = new Course("PHP", 1000);
const jsCourse = new Course("Javascript", 1200);

console.log(phpCourse);
console.log(jsCourse);

class Course2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  run() {}
}

//* 6. Default parameter values
// function logger(log, type = "log") {
//   console[type](log);
// }
// logger("Mess");

//* 10. Enhanced object literals
//=> dinh nghia key:value cho object
//=> dinh nghia method cho object
//=> dinh nghia key cho object duoi dang bien

var fieldName = "name-name";
var fieldPrice = "price";

const course4 = {
  name: "Javascript",
  [fieldName]: "Javascript",
  [fieldPrice]: 1000,
};
console.log(course4);

//Destructuring: Phan ra

var array = ["javascript", "PHP", "Ruby"];
var [a, , c] = array;
var [a, b, ...rest] = array;

console.log(a);
console.log(rest);

var course5 = {
  name: "Javascript",
  price: 1000,
  image: "image-address",
  children: {
    name: "ReactJS",
  },
  description1: "description value",
};
var { name, price } = course5;
var {
  name: parentName,
  children: { name: childrenName },
} = course5;
var { name, ...rest } = course5; // ...rest => toan tu lay nhung phan con lai
var { name, description1 = "default value" } = course5;
console.log(name, price);
console.log(rest);
console.log(childrenName);

function logger1({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}
logger1({
  name: "Javascript",
  price: 1000,
  description: "Description content",
});

function logger4([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
logger4([1, 2, 3, 5, 6, 7, 8]);

//Spread (...)

var array1 = ["Javascript", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];
var array3 = [...array2, ...array1];
console.log(array3);

var object1 = {
  name: "javascript",
};
var object2 = {
  price: 1000,
};
var object3 = {
  ...object1,
  ...object2,
};
console.log(object3);

var defaultConfig = {
  api: "https://domain-trang-khoa-hoc",
  apiVersion: "v1",
  other: "other",
  //
  //
  //
};
var exerciseConfig = {
  ...defaultConfig,
  api: "https://domain-trang-bai-tap",
};

console.log(exerciseConfig);

var array6 = ["Javascript", "PHP", "Ruby", "ReactJS"];

function logger5(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
logger5(...array6);

function highlight([first, ...strings], ...values) {
  return values.reduce(function () {
    (acc, curr) => [...acc, `<span>${curr}</span>`], [first];
  });
}
var brand = "F8";
var course7 = "Javascript";
const html = highlight`Hoc lap trinh ${course7} tai ${brand}!`;
console.log(html);

//Modules: Import / Export
import { logger_ } from "./logger/index.js";
//import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from "./constain.js";
import * as constants from "./constain.js";
console.log(constants);

logger_("Test");

// Optional chaining (?.) => su dung khi khong chac chan gia tri co trong
// data hay khong

const obj = {
  name: "Alice",
  cat: {
    name: "TOM",
    cat1: {
      name: "Dinah",
      cat2: {
        name: "meow",
        cat3: {
          //name: "ben",
        },
      },
    },
  },
};
if (obj.cat?.cat1?.cat2?.cat3) {
  console.log(obj.cat.cat1.cat2.cat3.name);
}

const obj2 = {
  // getName(value) {
  //   console.log(value);
  // },
};
obj2.getName?.(123);

//Optional Chaining dung duoc cho obj, array, function
