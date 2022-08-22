// function crearPersona(nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona( 'Daniel', 'Rodriguez');
console.log( persona );

function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(edad, args);
    return args;
};

const [casado, vivo, nombre] = imprimeArgumentos2(10, true, false, 'Daniel');
console.log({casado, vivo, nombre});

const { apellido: nuevoApellido} = crearPersona('Daniel', 'Diaz');
console.log(nuevoApellido);

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 0, trajes}) => {
 console.log(nombre);
 console.log(codeName);
 console.log(vivo);
 console.log(edad);
 console.log(trajes);
};

imprimePropiedades(tony);