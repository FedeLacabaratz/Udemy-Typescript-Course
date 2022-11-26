"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado!"; };
    //tipo function
    // let myFunction: Function
    // myFunction = 10
    // console.log(myFunction())
    //tipo number
    // let myFunction: (y:number, z:number) => number
    // myFunction = addNumbers
    // console.log(myFunction(1,2))
    //tipo string
    // let myFunction: (y:string) => string
    // myFunction = greet
    // console.log(myFunction('Fede'))
    //tipo string (sin parámetros)
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
