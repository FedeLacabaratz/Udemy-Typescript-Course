"use strict";
(function () {
    // el símbollo "?" me va a decir que el argumento puede ser opcional
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '');
    };
    var name = fullName('Tony');
    console.log(name);
})();
