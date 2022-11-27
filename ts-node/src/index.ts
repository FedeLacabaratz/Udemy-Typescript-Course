import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

charmander.PublicApi= 'https://fernando-herrera.com'
console.log(charmander)