function Validator(formSelector, options) {
  //Gan gia tri mac dinh cho tham so (ES5)
  if (!options) {
    options = {};
  }
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  var formRules = {};
  /**
   * Quy uoc tao rule:
   * - Neu co loi thi return `error message`
   * - Neu khong co loi thi return `undefined`
   * */
  var validatorRules = {
    required: function (value) {
      return value ? undefined : "Vui long nhap truong nay";
    },
    email: function (value) {
      var regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(value) ? undefined : "Vui long nhap email";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `password co phai co it nhat ${min} ki tu`;
      };
    },
    // max: function (max) {
    //   return function (value) {
    //     return value.length <= max
    //       ? undefined
    //       : `password co phai co it nhat ${max} ki tu`;
    //   };
    // },
  };
  //Lay ra form element trong DOM the `formSelector`
  var formElement = document.querySelector(formSelector);
  //console.log(formElement);
  //Chi xu ly khi co formElement trong form
  if (formElement) {
    var inputs = formElement.querySelectorAll("[name][rules]");
    //console.log(inputs);
    for (var input of inputs) {
      var rules = input.getAttribute("rules").split("|");
      for (var rule of rules) {
        var isRuleHasValue = rule.includes(":");
        var ruleInfo;
        if (isRuleHasValue) {
          ruleInfo = rule.split(":");
          //console.log(ruleInfo);
          //console.log(ruleInfo[0]);
          rule = ruleInfo[0];
          //console.log(rule);
          // console.log(validatorRules[rule](ruleInfo[1]));
        }
        var ruleFunc = validatorRules[rule];
        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }
        //console.log(rule);
        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          //console.log(rule);
          //console.log(validatorRules[rule]);
          formRules[input.name] = [ruleFunc];
        }
      }
      //formRules[input.name] = input.getAttribute("rules");
      //console.log(input.getAttribute("rules"));

      //Lang nghe su kien de validate (blur, change, ...)

      input.onblur = handleValidate;
      input.oninput = handleClearError;
    }
    function handleValidate(event) {
      var rules = formRules[event.target.name];
      var errorMessage;

      for (var rule of rules) {
        errorMessage = rule(event.target.value);
        if (errorMessage) break;
      }
      //console.log(errorMessage);
      //console.log(formRules[event.target.name]);
      //meu co loi thi hien thi ra UI
      if (errorMessage) {
        //console.log(event.target);
        var formGroup = getParent(event.target, ".form-group");
        console.log(formGroup);
        if (!formGroup) return;
        if (formGroup) {
          formGroup.classList.add("invalid");
          var formMessage = formGroup.querySelector(".form-message");
          if (formMessage) {
            formMessage.innerText = errorMessage;
          }
        }
      }
      return !errorMessage;
    }
    //Ham clear message loi
    function handleClearError(event) {
      var formGroup = getParent(event.target, ".form-group");
      if (formGroup.classList.contains("invalid")) {
        formGroup.classList.remove("invalid");
        var formMessage = formGroup.querySelector(".form-message");
        if (formMessage) {
          formMessage.innerText = "";
        }
      }
    }
    //console.log(formRules);
  }
  console.log(this);
  //Xu ly hanh vi submit form
  formElement.onsubmit = function (e) {
    e.preventDefault();
    //this.onSubmit();
    var inputs = formElement.querySelectorAll("[name][rules]");
    var isValid = true;
    for (var input of inputs) {
      console.log(input.name);
      if (!handleValidate({ target: input })) {
        isValid = false;
      }
    }

    //console.log(isValid);
    //Khi khong co loi thi submit form
    if (isValid) {
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
        //goi lai ham onSubmit va tra ve kem gia tri cua form
        options.onSubmit(formValues);
      } else {
        formElement.submit();
      }
    }
  };
  console.log(formRules);
}
