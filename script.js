// //alert("Hi Javascript Basic");
// var fullName = "John Doe";
// var age = 25;
// var isMarried = false;
// var address = "Jakartar";
// //alert(fullName);

// console.log(age);
// console.log('Day la dong log')
// confirm('confirm');
// prompt('Hello')
// setTimeout(function () {
//     alert(' Thong bao');
// }, 1000);
// setInterval(function() {
//     console.log('day la log' + Math.random())
// }, 1000);

/**
 * Toan tu trong javascript
 * 1. Toan tu so hoc - Arithmetic
 * 2. Toan tu gan - Assignment
 * 3. Toan tu so sanh - Comparison
 * 4. Toan tu logic - Logical
 */
// var a = 1;
// var b = 2;
// if ( a == b ) {
//     alert('Dung')
// } else {
//     alert('Sai')
// }

// var a = 1;
// var b = 2;
// if( a > 0 && b > 0) {
//     console.log('a va b > 0');
// }

/**
 * Toan tu so hoc
 * + => Cong
 * - => Tru
 * * => Nhan
 * ** => luy thua
 *  / => chia
 * % => lay du
 * ++ => Tang 1 gia tri so
 * -- => giam 1 gia tri don vi
 */

// var a = 1;
// var b = 2;
// var c = a**b

// console.log(c);

/**
 * Toan tu gan
 * Toan tu              Vi du           Tuong duong
 * =                    x = y           x = y
 * +=                   x+=y            x = x + y
 * -+                   x-=y            x = x - y
 * *=                   x *= y          x = x*y
 * /=                   x /+ y          x = x/y
 * **=                  x **= y         x = x ** y
 */

/**
 * Toan tu ++ --
 * Prefix & Postfix
 */
// var a = 6;
//  ++a;
//  console.log(a);
//  //Viec 1: +1 cho a, a = a + 1 => a =7
//  //Viec 2: Tra ve a sau khi duoc + 1
//  a++;
//  console.log(a);
//  //Viec 1:  tao a copy, ' a copy = 1
//  //Viec 2: Tru 1 cua a, a = a - 1 => a = 5
//  //Viec 3: Tra ve a copy

//  var number = 6;
// var output = number++ + --number;
// console.log(output);

/**
 * String operator
 */

// var firstName = 'Duy';
// var lastName = 'Dang';
// console.log(firstName + lastName);

/**
 * Toan tư so sanh
 * == => Bang
 * != => Khong bang
 * > => lon hơn
 * < => be hon
 * >= => Lớn hơn hoặc bằng
 * <= => bé hơn hoặc bằng
 */

// var a = 1;
// var b = 2;
// if (a == b) {
//     console.log('Dung');

// } else {
//     console.log('Sai');
// }

/**
 * Boolean
 */

// var isCorrect = false;
// console.log(isCorrect);

/**
 * If - else
 */
// var bool = false;
// if(bool) {
//     console.log('hello')
// } else {
//     console.log('no')
// }

/**
 * Toan tu logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

// var a = 1;
// var b = 2;
// var c = 3;

// if(a > 0 && b > 0) {
//     console.log('Dung');
// }

/**
 * Kieu du lieu trong javascript
 * 1. Du lieu nguyen thu - Primitive Type
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Du lieu phuc tap - COmplex Data
 * - Function
 * - Object
 */

// var fullName = "Son 'Dang'"
// console.log(fullName);
// //Symbol
// var id = Symbol('id'); //unique
// var id2 = Symbol('id2') //unique
// console.log(id === id2);
// //Function
// var myFunction = function() {

// }

// myFunction();

// //Object types => key - value
// var myObject = {
//     name: 'Duy Dang', //key - value
//     age: 18,
//     address: 'Hanoi'
// };
// console.log('myObject', myObject);

// var myArray = [
//     'Javascript',
//     'Ruby',
//     'PHP'
// ];
// console.log(myArray);
// console.log(typeof myArray);
// console.log(typeof id);

/**
 * Toan tu so sanh - P2
 *
 *
 * ===
 * !==
 */

//var a = 1;
//var b = '1';
//console.log(a === b); // compare value & datatype
//console.log(a !== b); // compare value & datatype

//Phep so sanh

// var a = 1;
// var b = 2;

// var result = a < b;

// if (result) {
//   console.log("A < B");
// } else {
//   console.log("A > B");
// }

/**
 * 6 gia tri khi convert se tra ve false
 * 0
 * ''
 * null
 * undefined
 * NaN
 * false
 */

/**
 * Ham function trong javascript
 *
 * 1.Ham?
 * - Mot khoi ma
 * - Lam 1 viec cu the
 * 2.Loai Ham
 * - Build-in
 * - Tu Dinh nghia
 * 3.Tinh chat
 * - Khong thuc thi khi dinh nghia
 * - Se thuc thi khi dc goi
 * - Co the nhan tham so
 * - CO the tra ve 1 gia tri
 * 4. Tao ham
 * - dat ten ham: a-z A-Z 0-9 _ $
 */
function showDialog() {
  //code
  alert("Hi");
}

//call () toan tu goi ham
//showDialog();

/**
 * 1. Tham so
 *  - DInh nghia
 *  - Kieu du lieu
 *  - Tinh private
 *  - 1 tham so
 *  - Nhieu tham so
 * 2. TRuyen tham so
 *  - 1 Tham so
 *  - 2 Nhieu tham so
 * 3. Argument?
 *  - DOi tuong argument
 *  - Gioi thieu vong for
 */

//  function writeLog(message) { //message - parameter
//     console.log(message);
//  }
// writeLog('test message');

// function writeLog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString);
// }
// writeLog('Log1', 'Log2', 'Log3', 'Log4');

//Return trong ham - Javascript co ban

// var isConfirm = confirm('Message');
// console.log(isConfirm);

// function cong(a, b) {
//     return a + b;
// }
// var result = cong(1, 3);
// console.log(result);

/**
 * Hieu hon ve Ham
 * 1. Khi function trung ten? => function dinh nghia sau se ghi de function truoc
 * 2. Khai bao bien trong ham => Co
 * 3. Dinh nghia ham trong ham
 */

// function showMessage() {
//     var fullName = 'Son Dang';
//     function showMess() {
//         console.log('Message 2');
//     }
//     showMess();
// }
// showMessage();

/**
 * Cac loai function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

// function showMessage() {
//   console.log("Declaration function");
// }
// var showMessage2 = function () {
//   console.log("Expression function");
// };
// setTimeout(function autoLogin() {});
// var myObject = {
//   myFunction: function testName() {},
// };
// showMessage();
// showMessage2();

/**
 * Chuoi trong javascript
 * 1. Tao chuoi
 *  - Cac cach tao chuoi
 *  - Nen dung cach nao? Ly do?
 *  - Kiem tra data type
 * 2. Mot so case su dung backslash (\)
 * 3. Xem do dai chuoi
 * 4. Chu y do dai khi viet Code
 * 5. Template string ES6
 *
 */

// var fullName = 'Son Dang \" hello \"';
// var fName = new String('Son Dang'); // khong khuyen khich
// console.log(typeof fName);
// console.log(fullName.length);

// var fName = 'Duy';
// var lName = 'Dang';
// console.log(`Toi la ${fName} ${lName}`);

/**
 * Lam viec voi chuoi
 * 1. Length
 * 2. Find index
 * 3. Cut string
 * 4. Replace
 * 5. Convert to UpperCase
 * 6. Convert to LowerCase
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 */

// var myString = '  Hoc js tai js F8';
// console.log(myString.search('js'));
// console.log(myString.slice(4, 6)); //cat tu trai sang phai
// console.log(myString.slice(-4, -1)) //cat tu phai sang trai
// console.log(myString.replace(/js/g, 'Javascript'));
// console.log(myString.trim());
// var language = 'PHP, Javascript, Ruby, java';
// console.log(language.split(', '));

// const myStr = 'duy dang';
// console.log(myStr.charAt(2));
// myStr.toUpperCase

/**
 * Kieu so (Number) Javascript
 * 1. Tao gia tri number
 *  - Cac cach tao
 *  - DUng cach nao? Tai sao
 *  - Kiem tra data type
 * 2. Lam viec voi number
 *  - to String
 *  - to Fixed
 */
// var age = 18;
// var PI = 3.14;
// var otherNumber = new Number(9); //khong khuyen khich
// var result = 20 / "ABC"; //=> Nan => Khong hop le
// console.log(isNaN(result));
// console.log(age.toString());
// var ageToString = age.toString();
// console.log(typeof ageToString);
// console.log(PI.toFixed());

/**
 * Mang trong Javascript - Array
 * 1. Tao mang
 *  - Cach tao
 *  - Su dung, Why
 *  - Kiem tra data type
 * 2. TRuy xuat mang
 *  - Do dai mang
 *  - Lay phan tu theo index
 *
 */
// var languages = [
//   "Javascript",
//   "Java",
//   "PHP",
//   "Ruby",
//   null,
//   undefined,
//   function () {},
//   124,
//   {},
// ];
// console.log(languages);
// console.log(Array.isArray(languages));
// console.log(languages.length);

/**
 * Lam viec voi mang - Array
 *
 * 1. toString
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */
// var languages = ["Javascript", "PHP", "Ruby", "Java"];
// console.log(languages.toString());
// console.log(languages.join("-"));
// console.log(languages.pop()); //xoa element cuoi mang, tra ve phan tu da xoa
// console.log(languages.push("C++"));
// console.log(languages.shift()); //xoa phan tu dau mang va tra ve phan tu da xoa
// console.log(languages.unshift("C#")); // them vao dau mang
// languages.splice(1, 1, "HTML");
// console.log(languages.slice(0, 1)); //truyen so am de cat tu phai  sang
// var languages2 = ["C", "Python"];
// console.log(languages.concat(languages2));
// function joinWithCharacter(array, charactor) {
//   var arr = array.join(charactor);
//   return arr;
// }

// // Ví dụ khi sử dụng
// var cars = ["Honda", "Mazda", "Mercedes"];

// var result = joinWithCharacter(cars, " - ");

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

/**
 * Object trong javascript
 *
 */
// var myKey = "location";
// var myInfor = {
//   name: "Son Dang",
//   age: 18,
//   "address-main": "Sai Gon",
//   [myKey]: "Sai Gon",
//   getName: function () {
//     return this.name;
//   },
// };
// myInfor.email = " duy@gmail.com";
// myInfor["myEmail"] = "bao@gmail.com";
// console.log(myInfor);
// delete myInfor.age;
// console.log(myInfor[myKey]);
// console.log(myInfor.getName());

//Function => Phuong thuc / method
// Others => THuoc tinh / property

/**
 * Object constructor
 *
 */
// var User = function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;
//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// };

// var author = new User("Duy", "Dang", "img");
// var user = new User("Bao", "Dang", "picture");

// author.title = "Chia se";
// user.comment = "Question";

// console.log(user.getName());
// console.log(author.getName());
// console.log(author.constructor);

/**
 * Object prototype - Basic : Nguyen mau
 * 1. Prototype la gi? => duoc dung de them thuoc tinh o ngoai object
 * 2. Su dung khi nao?
 */

// User.prototype.className = "F8";
// User.prototype.getClassName = function () {
//   return this.className;
// };
// console.log(user.className);
// console.log(user);

// // Làm bài tại đây
// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Student.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Ví dụ khi sử dụng
// var student = new Student("Long", "Bui");

// console.log(student.firstName); // 'Long'
// console.log(student.lastName); // 'Bui'
// console.log(student.getFullName()); // 'Long Bui'

/**
 * Date Object
 */
// var date = new Date();
// console.log(date);
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(`${day}/${month}/${year}`);

/**
 * Math object
 *  - Math.PI
 *  - Math.round()
 *  - Math.abs()
 *  - Math.ceil()
 *  - Math.floor()
 *  - Math.random()
 *  - Math.min()
 *  - Math.max()
 */

// var random = Math.floor(Math.random() * 5);
// var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];

// console.log(bonus[random]);

// function getRandomItem(arr) {
//   var random = Math.floor(Math.random() * 10);
//   return arr[random];
// }

// var rand = [1, 2, 3, 4, 4, 5, 6, 6, 6];
// getRandomItem(rand);
// console.log(getRandomItem(rand));

/**
 * Cau lenh re nhanh - if else
 */
// var date = 2;
// if (date === 2) {
//   console.log("Hom nay la thu 2");
// } else if (date === 3) {
//   console.log("Hom nay la thu 3");
// } else if (date === 4) {
//   console.log(" hom nay la thu 4");
// } else {
//   console.log("Another day");
// }

// function run(a) {
//   //
//   if (a % 5 === 0 && a % 3 == 0) {
//     return 3;
//   } else if (a % 5 === 0) {
//     return 2;
//   } else if (a % 3 === 0) {
//     return 1;
//   }
// }

// // Kỳ vọng
// console.log(run(3)); // 1
// console.log(run(5)); // 2
// console.log(run(15)); // 3

/**
 * Cau lenh re nhanh - switch
 */

// var date = 10;
// switch (date) {
//   case 2:
//     console.log("Hom nay la thu 2");
//     break;
//   case 3:
//     console.log("HOm nay la thu 3");
//     break;
//   case 4:
//     console.log("HOm nay la thu 4 ");
//     break;
//   case 5:
//     console.log("HOm nay la thu 5");
//     break;
//   case 6:
//     console.log("HOm nay la thu 6");
//     break;
//   case 7:
//     console.log("HOm nay la thu 7");
//     break;
//   case 8:
//     console.log("HOm nay la thu 8");
//     break;
//   case 9:
//     console.log("HOm nay la thu 9");
//     break;
//   default:
//     console.log("Not a day");
// }

/**
 * Toan tu 3 ngoi: Ternary operator
 */

// var course = {
//   name: "Javascript",
//   coin: 250,
// };
// if (course.coin > 0) {
//   console.log(`${course.coin} Coin`);
// } else {
//   console.log("Free");
// }

// var result = course.coin > 0 ? `${course.coin} Coins` : "Free";
// console.log(result);

// var a = 1;
// var b = 2;
// var c = a > 0 ? a : b;
// console.log(c);

/**
 * Vòng lap
 * 1. for - Lap voi dieu kien dung
 * 2. for/in - Lap qua key cua doi tuong
 * 3. for/of - Lap khi dieu kien dung
 * 4. while - Lap khi dieu kien dung
 * 5. do/while - Lap it nhat 1 lan, sau do lap khi dieu kien dung
 */

//For loop

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// function getRandNumbers(min, max, length) {
//   var arr = [];
//   for (var i = 0; i < length; i++) {
//     arr.push(Math.floor(Math.random() * (max - min) + min));
//   }
//   return arr;
// }
// console.log(getRandNumbers(1, 20, 10));

// function getTotal(arr) {
//   var total = 0;
//   for (var i = 0; i <= arr.length; i++) {
//     if (typeof i === "number" && !isNaN(arr[i])) {
//       total += arr[i];
//     }
//   }
//   return total;
// }
// console.log(getTotal([1, 2, 3]));

// var orders = [
//   {
//     name: "Khóa học HTML - CSS Pro",
//     price: 3000000,
//   },
//   {
//     name: "Khóa học Javascript Pro",
//     price: 2500000,
//   },
//   {
//     name: "Khóa học React Pro",
//     price: 3200000,
//   },
// ];

// function getTotal(orders) {
//   var ordersLength = orders.length;
//   var total = 0;
//   for (var i = 0; i < ordersLength; i++) {
//     total += orders[i].price;
//   }
//   return total;
// }
// console.log(getTotal(orders));

/**
 * for/in loop
 */

// var myInfo = {
//   name: "Duy Dang",
//   age: 18,
//   address: "Sai Gon",
// };

// for (var key in myInfo) {
//   console.log(myInfo[key]);
// // }
// var languages = ["Java", "PHP", "C#"];
// for (var key in languages) {
//   console.log(languages[key]);
// }

// var myString = "Javascript";
// for (var key in myString) {
//   console.log(myString[key]);
// }

// function run(object) {
//   var keyObject = [];
//   for (var key in object) {
//     keyObject.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//   }
//   return keyObject;
// }

// Expected results:
// console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

/**
 * For/of loop
 */

// var languages = ["java", "C#", "PHP", ".NET"];

// for (var value of languages) {
//   console.log(value);
// }

// var myInfo = {
//   name: "Duy",
//   age: 18,
// };

// console.log(Object.keys(myInfo));
// console.log(Object.values(myInfo));
// for (var value of Object.values(myInfo)) {
//   console.log(value);
// }

/**
 * while loop
 */
// var i = 0;
// while (i < 20) {
//   console.log(i);
//   i++;
// }

// var myArr = ["Java", "C#", "PHP"];
// while (i < myArr.length) {
//   console.log(myArr[i]);
//   i++;
// }

/**
 * Do-while loop
 */

// var i = 0;
// var isSuccess = false;
// do {
//   i++;
//   console.log("Nap the lan " + i);
//   if (false) {
//     isSuccess = true;
//   }
// } while (!isSuccess && i < 3);

/**
 * Break & Continue
 */

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
// }
// for (var i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

/**
 * Nested loop
 */

// var myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (var i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
//   for (var j = 0; j < myArr[i].length; j++) {
//     console.log(myArr[i][j]);
//   }
// }

//su dung set loai bo phan tu trung lap
var array = ["a", "b", "c", "d", "b", "a", "c"];
console.log([...new Set(array)]);

/**
 * Recursion
 * 1. Xac dinh diem dung
 * 2. Logic handle => Tao ra diem dung
 */

// function countDown(num) {
//   if (num > 0) {
//     console.log(num);
//     return countDown(num - 1);
//   }
//   return num;
// }
// countDown(10);

// function loop(start, end, cb) {
//   if (start <= end) {
//     cb(start);
//     return loop(start + 1, end, cb);
//   }
// }
// var array = ["java", "PHP", "Ruby"];

// loop(0, array.length - 1, function (index) {
//   console.log("index: ", index);
// });

// // tinh n!
// function giaiThua(number) {
//   if (number > 0) {
//     return number * giaiThua(number - 1);
//   }
//   return 1;
// }
// console.log(giaiThua(6));

/**
 * Array methods:
 * - forEach() duyet tung phan tu
 * - every() kiem tra tat ca cac phan tu thoa man dk nao do
 * - some() tra ve ngay khi gap kq dung
 * - find() tim kiem
 * - filter()
 * -
 */

// var courses = [
//   {
//     id: 1,
//     name: "Java",
//     coin: 250,
//   },
//   {
//     id: 2,
//     name: "C#",
//     coin: 0,
//   },
//   {
//     id: 3,
//     name: "C++",
//     coin: 250,
//   },
//   {
//     id: 4,
//     name: "PHP",
//     coin: 250,
//   },
//   {
//     id: 5,
//     name: "HTML",
//     coin: 0,
//   },
// ];
// courses.forEach(function (course, index) {
//   console.log(course);
// });

// var isFree = courses.every(function (course, index) {
//   return course.coin === 0;
// });

// var isFreeSome = courses.some(function (course, index) {
//   return course.coin === 0;
// });
// var course = courses.find(function (course, index) {
//   return course.name === "Java";
// });
// var course_ = courses.filter(function (course, index) {
//   return course.name === "Java";
// });
// console.log(isFree);
// console.log(isFreeSome);
// console.log(course);
// console.log(course_);

// const sports = [
//   {
//     name: "Bóng rổ",
//     like: 6,
//   },
//   {
//     name: "Bơi lội",
//     like: 5,
//   },
//   {
//     name: "Bóng đá",
//     like: 10,
//   },
// ];
// function getMostFavoriteSport(input) {
//   var sportList = input.filter(function (sport, index) {
//     return sport.like > 5;
//   });
//   return sportList;
// }

// // Kỳ vọng
// console.log(getMostFavoriteSport(sports));
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// //map()
// function courseHandler(course, index, originArray) {
//   // console.log(course);
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//     index: index,
//     originArray: originArray,
//   };
//   //return course.name;
// }
// var newCourses = courses.map(courseHandler);
// console.log(newCourses);

// var totalCoin = 0;
// for (var course of courses) {
//   totalCoin += course.coin;
// }
// console.log(totalCoin);

// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   i++;
//   var total = accumulator + currentValue.coin;
//   console.table({
//     "Luot chay: ": i,
//     "Bien tich tru: ": accumulator,
//     "Gia khoa hoc: ": currentValue.coin,
//     "tich tru duoc: ": total,
//   });
//   //console.log(accumulator);
//   //console.log(currentValue);
//   return total;
// }
// var totalCoin2 = courses.reduce(coinHandler, 0);
// console.log(totalCoin2);

// var sports_ = [
//   {
//     name: "Bơi lội",
//     gold: 11,
//   },
//   {
//     name: "Boxing",
//     gold: 3,
//   },
//   {
//     name: "Đạp xe",
//     gold: 4,
//   },
//   {
//     name: "Đấu kiếm",
//     gold: 5,
//   },
// ];

// function getTotalGold(sportList) {
//   function getGoldMedal(a, b) {
//     var total = a + b.gold;
//     console.log(a);
//     console.log(b.coin);
//     return total;
//   }
//   var totalGold = sportList.reduce(getGoldMedal, 0);
//   return totalGold;
// }

// Expected results:
// console.log(getTotalGold(sports_)); // Output: 23

//Lam phang mang
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//   return flatOutput.concat(depthItem);
// }, []); // [] tao mot mang rong moi
// console.log(flatArray);

// var courses_dev = [
//   {
//     topic: "Front-end",
//     courses: [
//       {
//         id: 1,
//         title: "HTML, CSS",
//       },
//       {
//         id: 2,
//         title: "Javascript",
//       },
//     ],
//   },
//   {
//     topic: "Back-end",
//     courses: [
//       {
//         id: 1,
//         title: "PHP",
//       },
//       {
//         id: 2,
//         title: "Node JS",
//       },
//     ],
//   },
// ];

// var newCourses = courses_dev.reduce(function (course, topic) {
//   return course.concat(topic.courses);
// }, []);

// console.log(newCourses);

// var htmls = newCourses.map(function (a) {
//   return `
//       <div>
//         <h2>${a.title}</h2>
//         <p>ID: ${a.id}</p>
//       </div>
//     `;
// });

// console.log(htmls.join(""));

// var watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//   },
// ];

// function calculateRating(arr) {
//   var listFilm = arr.filter(function (name, index) {
//     return name.Director === "Christopher Nolan";
//   });
//   var imdbSum = listFilm.reduce(function (accumulator, currentValue) {
//     var total = accumulator + parseFloat(currentValue.imdbRating);
//     return total;
//   }, 0);
//   var averageScore = imdbSum / listFilm.length;
//   return averageScore;
// }

// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675
// //TU tạo method reduce
// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }

//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce2((total, number) => {
//   return total + number;
// });
// console.log(result);

// Expected results:
// var arr = [
//   ["name", "Sơn Đặng"],
//   ["age", 18],
// ];
// function arrToObj(arr) {
//   var createObj = arr.reduce(function (acc, currVal) {
//     acc[currVal[0]] = currVal[1];
//     return acc;
//   }, {});
//   return createObj;
// }

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//include method

// console.log(Date.prototype.includes);
// var title = "Responsive web Design";
// console.log(title.includes("Responsive", 0)); //su dung vs chuoi

//su dung voi array
// var courses = ["Java", "PHP", "C#", "C++"];
// console.log(courses.includes("PHP", 0));

/**
 * Callback?
 * La ham(function) duoc truyen qua doi so
 * khi goi ham khac
 * 1. La ham
 * 2. Duoc truyen qua doi so
 */

// function myFunction(param) {
//   if (typeof param === "function") {
//     param("HOc lap trinh");
//   }
// }

// function myCallBack(value) {
//   console.log("Value: ", value);
// }

// myFunction(myCallBack);

/**
 * Callback - Phan 2
 *
 * 1. La Ham
 * 2. Truyen qua doi so
 * 3. Duoc goi lai (trong ham nhan doi so)
 */
// Array.prototype.map2 = function (callback) {
//   var arrayLength = this.length;
//   var output = [];
//   for (var i = 0; i < arrayLength; i++) {
//     var result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

// var courses = ["Java", "PHP", "Ruby"];

// var htmls = courses.map2(function (course, index) {
//   return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(""));

// var htmls = courses.map(function (course) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(""));

//forEach, find, filter, some, every, reduce
// var courses = ["Javascript", "PHP"];
// courses.length = 10;
// for (var index in courses) {
//   console.log(index);
// }
// for (var i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }

//forEach
// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     console.log("index: ", index);
//   }
// };

// var courses = ["Java", "PHP", "Ruby"];
// courses.length = 1000;
// courses.forEach(function (course, index, array) {
//   console.log(course, index, array);
// });

// courses.forEach2(function (course, index, array) {
//   console.log(course, index, array);
// });
// console.log(courses);

//filter

// Array.prototype.filter2 = function (callback) {
//   var output = [];
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }
//   return output;
// };
// var courses = [
//   {
//     name: "Java",
//     coin: 680,
//   },
//   {
//     name: "C",
//     coin: 980,
//   },
//   {
//     name: "C++",
//     coin: 700,
//   },
//   {
//     name: "PHP",
//     coin: 280,
//   },
//   {
//     name: "U",
//     coin: 300,
//   },
//   {
//     name: "Haskel",
//     coin: 1000,
//   },
// ];

// var filtercourses = courses.filter(function (course, index, array) {
//   return course.coin > 700;
// });

// var filtercourses = courses.filter2(function (course, index, array) {
//   return course.coin > 700;
// });
// console.log(filtercourses);

//some: true/ false

// Array.prototype.some2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], this, array);
//       if (!result) {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// };
// Array.prototype.every2 = function (callback) {
//   var output = true;
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (!result) {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// };
// var courses = [
//   {
//     name: "Java",
//     coin: 680,
//     isFinish: false,
//   },
//   {
//     name: "C",
//     coin: 980,
//     isFinish: false,
//   },
//   {
//     name: "C++",
//     coin: 700,
//     isFinish: false,
//   },
//   {
//     name: "PHP",
//     coin: 280,
//     isFinish: false,
//   },
//   {
//     name: "U",
//     coin: 300,
//     isFinish: false,
//   },
//   {
//     name: "Haskel",
//     coin: 1000,
//     isFinish: false,
//   },
// ];

// var result = courses.some(function (course, index, array) {
//   return course.isFinish;
// });

// var result = courses.some2(function (course, index, array) {
//   return course.isFinish;
// });
// console.log(result);

// var result2 = courses.every2(function (course, index, array) {
//   return course.coin > 100;
// });
// console.log("result2: ", result2);

//HTML DOM

//Co 3 thanh phan
/**
 * 1. Element: id, class, tag, CSS selector, HTML collection
 * 2. Attributers
 * 3. Text
 */

//Node

//Javascript: Browser | Server (NodeJS)

//Application Programming Interface

//Browser: HTML -> DOM -> Web API

// console.log(document);
// document.write("Hello guys");
// var headingNode = document.getElementById("heading");
// var headingNodes = document.getElementsByClassName("heading");
// var headingNodeByTag = document.getElementsByTagName("h2");
// var headingNodebyCSS = document.querySelector(".box .heading-h3:first-child");
// var querySelectorAll = document.querySelectorAll(".heading");

// console.log({
//   element: headingNode,
// });
// console.log(headingNodes);
// console.log(headingNodeByTag);
// console.log(headingNodebyCSS);
// console.log(querySelectorAll);
// console.log(document.forms);

// var boxNode = document.querySelector(".box-1");
//COng viec 1: Su dung tot 'BOxNode
//....
// console.log(boxNode);
//COngviec 2: SU dung toi cac li elements
//la con cua '.box-1'

// console.log(boxNode.querySelectorAll("li"));
// console.log(boxNode.getElementsByTagName("li"));

//1. getElementById
//2. getElementsByClassName
//3. getElementsByTagName
//4. querySelector
//5. querySelectorAll

//6. HTML collection
//7/ document.write

//DOM attribute

//innerText - Noi dung hien thi tren man hinh
//textContent - Tra ve noi dung text nguyen ban trong DOM
var headingElement = document.querySelector("h1");
var heading4Element = document.querySelector("h4");
headingElement.title = "heading-a";
headingElement.setAttribute("data", "private");
headingElement.setAttribute("class", "heading-set");
console.log(heading4Element.getAttribute("class"));
console.log(headingElement.getAttribute("title"));
console.log(headingElement.getAttribute("data"));

console.log(headingElement.innerText);
console.log(headingElement.textContent);

headingElement.innerText = "New Heading";
heading4Element.textContent = "New Heading";

//InnerHTML
//OuterHTML

var boxElement = document.querySelector(".box-3");
boxElement.innerHTML = "<h1 title='Heading-4'>Hello Javascript</h1>";
console.log(boxElement.innerHTML);
console.log(document.querySelector("h1").innerText);
boxElement.style.width = "100px";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";
console.log(boxElement.style);
console.log(boxElement.classList.value);
Object.assign(boxElement.style, {
  width: "400px",
  height: "100px",
  // backgroundColor: "green",
});
console.log(boxElement.style.width);

//ClassList property => Thuoc tinh cua Element Node

//add
//contains
//remove
//toggle
boxElement.classList.add("red");
