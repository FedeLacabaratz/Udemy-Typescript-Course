(() => {
    let avengers:number = 10
    console.log(avengers)

    const villains:number = 20

    if(avengers < villains) {
        console.log('estamos en problemas')
    } else {
        console.log('estamos salvados')
    }

    avengers = 123
    console.log({avengers})
})()