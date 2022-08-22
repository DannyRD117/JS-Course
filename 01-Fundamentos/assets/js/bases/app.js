/* Consola */

// Imprimir en consola
console.log("Hola mundo");

// warnings y errors
console.warn("");
console.error("");

// Imprimir con estilos
console.log("%c Bienvenidos",'color:blue; font-weight: bold');

/* Variables */

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'todos',

    x = a + b;

const pi = 3.14;

console.log(x);

// Imprimir como objeto
console.log({a});

// Imprimir varias variables en tabla
console.table({a,b,c,d});

//Variable con concatenacion
const saludo = c + d; 
console.log(saludo);

//Let vs Var
//var miNombre = "Daniel";
let miNombre = "Daniel";