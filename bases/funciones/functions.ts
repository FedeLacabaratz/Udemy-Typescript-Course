(()=>{

    const hero: string = 'Flash'

    function returnName(hero:string) {
        return hero
    }

    const activateBatsignal = ():string => {
        return 'Batsignal activated'
    }
    
    console.log(typeof activateBatsignal)

    const heroName = returnName(hero)
})()