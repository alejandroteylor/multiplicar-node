/**requireds
 * para cerar archivos nuevos mediante de un parametro que es 
 * CONST FS = REQUIRE('FS');
 */
/*const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');*/
const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '1';
//console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

//console.log(base); --- prueba de que el argv sirve para mandar datos desde la consosola


/*let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${ base }*${ i }=${ base * i} \n`;
}

//cerar archivo direccionado a una carpeta con el nombre que se requiere
// BASE nombre del archivo 
fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt ha sido creado`);
});*/

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));