(()=> {

    const addNumbers = (a:number, b:number) => a+b
    const greet = (name:string) => `Hola ${name}`
    const saveTheWorld = () => `El mundo esta salvado!`

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
    let myFunction: () => string
    myFunction = saveTheWorld
    console.log(myFunction())
})()