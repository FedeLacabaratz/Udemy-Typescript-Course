

export const printObject = (argument:any):void => {
    console.log(argument)
}

export function genericFunction<T>(argument:T):T { //T significa que es una función de tipo genérico
    return argument
}

export const genericFunctionArrow = <T>(argument:T):T => { //T significa que es una función de tipo genérico
    return argument
}