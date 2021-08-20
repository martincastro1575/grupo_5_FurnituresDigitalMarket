const bcript = require('bcryptjs');

let pass = 'passwordSegura';

//Creando un hash para la contraseña
let resultado = bcript.hashSync(pass, 10)

//Validando la contraseña


let validation = bcript.compareSync(pass, resultado);

console.log(pass);
console.log(resultado);
console.log('¿Las claves son iguales?: ' + validation);