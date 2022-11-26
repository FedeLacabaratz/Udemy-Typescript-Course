"use strict";
(function () {
    var hero = 'Flash';
    function returnName(hero) {
        return hero;
    }
    var activateBatsignal = function () {
        return 'Batsignal activated';
    };
    console.log(typeof activateBatsignal);
    var heroName = returnName(hero);
})();
