(()=> {

    // upper es un flag para que en caso de estar true, me pase todo a upper case

    const fullName = (firstName:string, lastName?:string, upper:boolean = false):string => {
        
        if(upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase()
        } else {
            return `${firstName} ${lastName || ''}`
        }
    }

    const name = fullName('Tony', 'Stark', true)
    console.log(name)

})()