"use strict";
(function () {
    // const fullName = (firstName:string, lastName:(string | boolean)):string => {
    //     return `${firstName} ${lastName}`
    // }
    // const name = fullName('Tony', true)
    // console.log(name)
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log(name);
})();
