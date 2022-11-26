(()=> {

    // const fullName = (firstName:string, lastName:(string | boolean)):string => {
    //     return `${firstName} ${lastName}`
    // }

    // const name = fullName('Tony', true)
    // console.log(name)

    const fullName = (firstName:string, lastName:string):string => {
        return `${firstName} ${lastName}`
    }

    const name = fullName('Tony', 'Stark')
    console.log(name)

})()