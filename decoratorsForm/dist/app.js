"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var validations = {};
var validator = function (options) { return function (_, key) {
    validations[key] = options;
    console.log(validations);
}; };
var Person = /** @class */ (function () {
    function Person(email, password) {
        this.email = email;
        this.password = password;
    }
    __decorate([
        validator(['required'])
    ], Person.prototype, "email", void 0);
    __decorate([
        validator(['required', 'password'])
    ], Person.prototype, "password", void 0);
    return Person;
}());
var validate = function (input) {
    var validation = validations[input.id];
    var isValid = true;
    for (var _i = 0, validation_1 = validation; _i < validation_1.length; _i++) {
        var rule = validation_1[_i];
        switch (rule) {
            case 'required':
                if (!input.value)
                    isValid = false;
            case 'password':
                if (input.value.length < 5)
                    isValid = false;
        }
    }
    return isValid;
};
var form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    for (var _i = 0, _a = [email, password]; _i < _a.length; _i++) {
        var input = _a[_i];
        if (!validate(input))
            return alert("error in " + input.id);
    }
    var person = new Person(email.value, password.value);
    console.log(person);
});
