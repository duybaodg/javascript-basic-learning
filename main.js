//DOM Event
//1. Attribute events
//2. Asign event using the element node
// var h1Elements = document.querySelectorAll("h1");

// for (var i = 0; i < h1Elements.length; ++i) {
//   console.log(h1Elements[i]);
//   h1Elements[i].onclick = function (e) {
//     console.log(e.target);
//   };
// }
// h1Elements.onclick = function (e) {
//   console.log(e.target);
// };

//1. Input / Selec
//2. Key up / down

// var inputValue;

// var inputElement = document.querySelector('input[type="text"]');
// console.log(inputElement);
// var inputElementCheckbox = document.querySelector('input[type="checkbox"]');
// console.log(inputElementCheckbox);
// var selectElement = document.querySelector("select");
// console.log(selectElement);

// inputElement.oninput = function (e) {
//   inputValue = e.target.value;
// };
// inputElementCheckbox.onchange = function (e) {
//   console.log(e.target.checked);
// };
// selectElement.onchange = function (e) {
//   console.log(e.target.value);
// };
// inputElement.onkeyup = function (e) {
//   console.log(e.which);
//   switch (e.which) {
//     case 27:
//       console.log("Exit");
//       break;
//   }
// };
// document.onkeydown = function (e) {
//   console.log(e.which);
//   switch (e.which) {
//     case 27:
//       console.log("EXIT");
//       break;
//     case 13:
//       console.log("SEND CHAT");
//   }
// };

//1. preventDefault
//2. stopPropagation
// var aElement = document.links;
// for (var i = 0; i < aElement.length; ++i) {
//   aElement[i].onclick = function (e) {
//     if (!e.target.href.startsWith("https://f8.edu.vn")) {
//       e.preventDefault();
//     }
//   };
// }
// var ulElement = document.querySelector("ul");
// ulElement.onmousedown = function (e) {
//   e.preventDefault();
// };
// ulElement.onclick = function (e) {
//   console.log(e.target);
// };

// document.querySelector("div").onclick = function () {
//   console.log("DIV");
// };
// document.querySelector("button").onclick = function (e) {
//   e.stopPropagation();
//   console.log("Click me");
// };

/**
 * 1. Event Listener
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convetion
 * 8. Best practice
 * 9. Mistakes
 * 10. Performance
 *
 * 1. Xu ly nhieu viec khi 1 event xay ra
 * 2. Lang nghe/ huy bo lang nghe
 */

// var btn = document.getElementById("btn");
// btn.onclick = function () {
//   //Viec 1
//   console.log("Viec 1");
//   //Viec 2
//   console.log("Viec 2");
//   //Viec 3
//   console.log("Viec 3");
// };
// setTimeout(function () {
//   btn.onclick = function () {};
// }, 2000);
// function viec1() {
//   console.log("VIec 1");
// }
// function viec2() {
//   console.log("VIec 2");
// }
// btn.addEventListener("click", viec1);
// btn.addEventListener("click", viec2);

// setTimeout(function () {
//   btn.removeEventListener("click", viec1);
// }, 2000);

//JSON la mot dinh dang du lieu (chuoi) => Javascript object notation
//JSON: Number, String, boolean, null, array, object

//Ma hoa / Giai ma
//Encode / Decode
//Stringify chuyen tu Javascript types => JSON
//Parse Tu JSON => Javascript types

//var json = '["Javascript", "PHP"]';
// var json = '{"name":"Son Dang", "age":18}';
// var a = "true";
// console.log(JSON.parse(json));
// var object = JSON.parse(json);
// console.log(object);

// console.log(
//   JSON.stringify({
//     name: "son dang",
//     age: 16,
//   })
// );

//Promise
// - Sync - Viet trươc chạy trước, Viết sau chạy sau - Tuan tự
// - Async - Viet ra trước, run sau
//
// Bat dong bo: setTimeout, setInterval, fetch, XMLHttoRequest, file reading
//              requestAnimation

//sleep
// setTimeout(function () {
//   console.log(1);
// }, 1000);
// console.log(2);

//Callback hell
//Pyramid of doom

// setTimeout(function () {
//   console.log(1); // Viec 1
//   setTimeout(function () {
//     console.log(2); // Viec 2
//     setTimeout(function () {
//       console.log(3); //Viec 3
//     });
//   });
// });

//Ly thuyet va cach hoat dong cua promise

//Cach tao:
//1. new Promise
//2. Executor

//3 trang thai cua promise
//1. Pedding
//2. Fulfilled
//3. Rejected
// var promise = new Promise(
//   //Executor
//   function (resolve, reject) {
//     //logic
//     //THanh cong: call resolve()
//     //That bai: call reject()
//     // resolve([
//     //   {
//     //     id: 1,
//     //     name: "javascript",
//     //   },
//     // ]);
//     resolve();
//     //reject("Co loi");
//   }
// );

// promise
//   .then(function () {
//     return 1;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 2;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 3;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log("error");
//   })
//   .finally(function () {
//     console.log("Finally");
//   });

// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// }
// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return new Promise(function (resolve, reject) {
//       reject("Error");
//     });
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleep(1000);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//1. Promise.resolve
//2. Promise.reject
//3. Promise.all => chay song song nhieu promise

// var promise = Promise.reject("fail")
//   .then(function (result) {
//     console.log("result: ", result);
//   })
//   .catch(function (err) {
//     console.log("err: ", err);
//   });

// //Example Promise All

// var promise1 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([1]);
//   }, 2000);
// });
// var promise2 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([2, 3]);
//   }, 5000);
// });
// var promise3 = Promise.reject("Co loi roi");

// Promise.all([promise1, promise2, promise3])
//   .then(function (result) {
//     var result1 = result[0];
//     var result2 = result[1];
//     console.log(result1.concat(result2));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Promise Example
var users = [
  {
    id: 1,
    user_id: 1,
    name: "Duy",
  },
  {
    id: 2,
    user_id: 2,
    name: "Dang",
  },
  {
    id: 3,
    user_id: 3,
    name: "Le",
  },
  {
    id: 4,
    user_id: 4,
    name: "Son",
  },
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Hello",
  },
  {
    id: 2,
    user_id: 2,
    content: "Day la new Video",
  },
  {
    id: 3,
    user_id: 3,
    content: "Day la new Video",
  },
  {
    id: 4,
    user_id: 4,
    content: "Day la new Video",
  },
];

//1. Lay comments
//2. Tu comments lay ra user_id
//3. Tu user_id lay ra user tuong ung

//Fake API
// function getComments() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(comments);
//     }, 1000);
//   });
// }

// function getUsersByIds(userIds) {
//   return new Promise(function (resolve) {
//     var result = users.filter(function (user) {
//       return userIds.includes(user.id);
//     });
//     setTimeout(function () {
//       resolve(result);
//     }, 1000);
//   }, 1000);
// }

// getComments()
//   .then(function (comments) {
//     var userIds = comments.map(function (comment) {
//       return comment.user_id;
//     });
//     return getUsersByIds(userIds).then(function (users) {
//       return {
//         users: users,
//         comments: comments,
//       };
//     });
//   })
//   .then(function (data) {
//     var commentBlock = document.getElementById("comment-block");
//     var html = "";
//     data.comments.forEach(function (comment) {
//       var user = data.users.find(function (user) {
//         return user.id === comment.user_id;
//       });
//       html += `<li>${user.name}: ${comment.content}</li>`;
//     });
//     commentBlock.innerHTML = html;
//     console.log(html);
//   });
//

//1. Front-end: Xay dung gia dien nguoi dung
//2: Back-end: Xay dung logic xu ly, co so du lieu
// API (URL) -> Application Programming interface

//Backend (OK) => API (URL) => fetch -> JSON
// -> JSON.parse => Javascript types
// -> Render ra giao dien voi HTML
var postApi = "https://jsonplaceholder.typicode.com/posts";

//stream
fetch(postApi)
  .then(function (response) {
    return response.json();
    //JSON.parse: JSON => Javascript type
  })
  .then(function (posts) {
    console.log(posts);
  })
  .catch(function (err) {
    console.log(err);
  });
