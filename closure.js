function createCounter() {
  let counter = 0;
  function increase() {
    return ++counter;
  }
  return increase;
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`);
  }
  return logger;
}
// ============ App ============
// Register.js

const infoLogger = createLogger("Info");
infoLogger("Bat dau gui mail");
infoLogger("Gui mail loi lan 1, thu lai");
infoLogger("Gui mail thanh cong");

//ForgotPassword.js
const errorLogger = createLogger("Error");
errorLogger("Email khong ton tai trong DB");
errorLogger("Gui mail loi lan 1, thu gui lai ...");
errorLogger("Gui mail thanh cong cho user xxx");

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };
  return storage;
}

//profile.js

const profileSetting = createStorage("profile_setting");

console.log(profileSetting.get("fullName"));
profileSetting.set("fullName", "Son Dang");
profileSetting.set("age", 20);
profileSetting.set("address", "Sai Gon");

function createApp() {
  const cars = [];
  return {
    adds(car) {
      cars.push(car);
    },
    show() {
      console.log(cars);
    },
  };
}

const app = createApp();
//app.show();
app.adds("BMW");
app.show();
app.adds("Honda");
app.adds("Porsche");
app.show();

// strict mode hỗ trợ viết code trở nên an toàn hơn

function testFund() {
  "use strict";
  var age = 18;
}
testFund();
//console.log(age);

//this key word

//1. Trong mot phuong thuc, this tham chieu toi doi tuong truy cap phuong thuc
//2. DUng ngoai phuong thuc, this tham chieu toi doi tuong global
//Luu y: this trong ham tao dai dien cho doi tuong se duoc tao
// this trong mot ham la undefined khi o strict mode
// cac phuong thuc blind(), call(), apply() co the tham chieu this toi doi tuong khac

const iPhone7 = {
  name: "iPhone 7",
  color: "Silver",
  weight: 300,
  takePhoto() {
    console.log("Flash");
  },
  objChild: {
    methodChild() {
      console.log(this);
    },
  },
};
//Method
console.log(iPhone7.takePhoto());
iPhone7.objChild.methodChild();

function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.run = function () {
    console.log("Running ...", this);
  };
}

const mercedesS450 = new Car("Mercedes S450", "Silver", "1000");
console.log(mercedesS450);

//const button = document.querySelector("button");
// button.onclick = function () {
//   console.dir(this);
// };

//Fn.bind() - rang buot
this.firstName = "Duy";
this.lastName = "Bao";
const teacher = {
  firstName: "Minh",
  lastName: "ANh",
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
const student = {
  firstName: "Le",
  lastName: "Nam",
};

//case 1:
console.log(teacher.getFullName()); // MInh Anh

//case 2:
const getTeacherName = teacher.getFullName.bind(student, "test 3", "test 4");
console.log(getTeacherName("test 1", "test 2")); // Duy Bao

// const button = document.querySelector("button");
// button.onclick = teacher.getFullName.bind(teacher);

//bind() cho phep rang buot this cho mot phuong thuc (function)
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log($("#heading").innerText);

const appCars = (() => {
  const cars = ["BMW"];
  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");
  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) =>
            `<li>
            ${car}
            <span class="delete" data-index="${index}">&times</span>
        </li>`
        )
        .join("");
      root.innerHTML = html;
    },
    handleDelete(e) {
      const deleteBtn = e.target.closest(".delete");
      //console.log(deleteBtn);
      // console.log(e.target);
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        //console.log(index);
        console.log(this);
        this.delete(index);
        this.render();
      }
    },
    init() {
      const that = this;
      //Handle DOM events
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();
        input.value = null;
        input.focus();
      };
      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();
appCars.init();

//Delegate pattern

//Phuong thuc call()
//La phuong thuc trong prototype cua Function constructor, phuong thuc nay duoc dung de goi ham va cung co the bind this cho ham.
//Example: Goi ham vs call method
//Goi ham va bind this, luu y trong strict mode van co this neu dc bind
//The hien tinh ke thua (extends) trong OOP
//Muon ham (function borrowing), them vi du voi arguments

function random() {
  console.log(Math.random());
}
random.call();
const teacher2 = {
  firstName: "Son",
  lastName: "Dang",
};
const me = {
  firstName: "Duy",
  lastName: "Bao",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
me.showFullName.call(me);

function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}
function Chicken(name, weight, legs) {
  Animal.call(this, name, weight);
  console.log(this);
  this.legs = legs;
}
const sonDang = new Chicken("Son Dang", 66, 2);
console.log(sonDang);

function logger() {
  //console.log(...arguments);
  const arr = Array.prototype.slice.call(arguments);
  //console.log(arr);
  //arr.forEach((item) => console.log(item));
  const array = [...arguments];
  console.log(array);
}
logger(1, 2, 2, 3, 4, 5, 6, 7);
