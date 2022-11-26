"use strict";
(function () {
    // upper es un flag para que en caso de estar true, me pase todo a upper case
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log(name);
})();
