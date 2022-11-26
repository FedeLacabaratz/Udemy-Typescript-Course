(()=> {

    // el símbollo "?" me va a decir que el argumento puede ser opcional

    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || ''}`
    }

    const name = fullName('Tony')
    console.log(name)

})()