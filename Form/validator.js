// Doi tuong `Validator`
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  var selectorRules = {};
  //Ham thuc hien validate
  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    var errorMessage;
    // var errorElement = inputElement.parentElement.querySelector(
    //   options.errorSelector
    // );

    //Lay ra cac rules cuar selector
    var rules = selectorRules[rule.selector];
    //console.log(rules);

    //lap qua tung rule (& kiem tra)
    //neu co loi thi dung kiem tra
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove(
        "invalid"
      );
    }
    return !errorMessage;
  }

  //Lay Element cua form can validate
  var formElement = document.querySelector(options.form);
  console.log(options.rules);
  if (formElement) {
    //Loai bo default khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;

      // Lap qua tung rule va validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });
      if (isFormValid) {
        //TH submit vs javascript
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          //console.log(enableInputs);
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            //
            switch (input.type) {
              case "radio":
                if (input.matches(":checked")) {
                  values[input.name] = formElement.querySelector(
                    'input[name="' + input.name + '"]:checked'
                  ).value;
                }
                break;
              case "checkbox":
                if (!input.matches(":checked")) return values;
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                break;
              case "file":
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }
            return values;
          },
          {});

          //console.log(formValues);
          options.onSubmit(formValues);
        }
      }
      //TH submit vs hanh vi mac dinh
      //else {
      //  formElement.submit();
      //}
    };
    //Xu li lap qua moi rule va xu ly (lang nghe su kien, blur, input, ...)
    options.rules.forEach(function (rule) {
      //Luu lai cac rule cho moi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      console.log(rule);
      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        //console.log(inputElement);
        if (inputElement) {
          // xu ly truong hop blur khoi input
          inputElement.onblur = function () {
            //value: inputElement.value
            //test func: rule.test
            //console.log("blur " + inputElement.value);
            validate(inputElement, rule);
          };
          // Xu li truong hop moi khi nguoi dung nhap vao input
          inputElement.oninput = function () {
            // console.log(inputElement.value);
            var errorElement = getParent(
              inputElement,
              options.formGroupSelector
            ).querySelector(options.errorSelector);
            errorElement.innerText = "";
            getParent(inputElement, options.formGroupSelector).classList.remove(
              "invalid"
            );
          };
          //console.log(inputElement.parentElement.querySelector(".form-message"));
        }
      });
    });
    console.log(selectorRules);
  }
}
//Dinh nghia Rules
//Nguyen tac cua Rule:
//1. Khi co loi => tra ra mess loi
//2. Khi hop le => Khong tra ra gia tri
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Vui long nhap truong nay";
    },
  };
};
Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(value)
        ? undefined
        : message || "Truong nay phai la email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Vui long nhap toi thieu ${min} ki tu`;
    },
  };
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Gia tri nhap vao khong chinh xac";
    },
  };
};
