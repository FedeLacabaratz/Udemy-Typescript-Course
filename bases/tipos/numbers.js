"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villains = 20;
    if (avengers < villains) {
        console.log('estamos en problemas');
    }
    else {
        console.log('estamos salvados');
    }
    avengers = 123;
    console.log({ avengers: avengers });
})();