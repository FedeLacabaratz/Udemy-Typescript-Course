(()=>{

    const error1 = (message: string):never => {
        throw new Error(message)
    }

    const error2 = (message: string):(never | number)=> {
        if(false){
            throw new Error(message)
        }
        return 1
    }

    error1('auxilio!')
    error2('auxilio!')
    
})()