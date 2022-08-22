// En primitivos se pasa el valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b});

// En objetos y array se pasa por referencia (ubicacion de memoria)
let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';

console.log({ ana, juan});

// const cambiaNombre = ( persona ) => {
//     persona.nombre = 'Tony';
//     return persona;
// }

// Solu
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({ peter, tony});

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
// const otrasFrutas = frutas;

// Solucion 1
const otrasFrutas = [...frutas];

// Solucion 2
// const otrasFrutas = frutas.slice();



otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });