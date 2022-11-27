"use strict";
(function () {
    var error1 = function (message) {
        throw new Error(message);
    };
    var error2 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error1('auxilio!');
    error2('auxilio!');
})();
