function saludar( nombre ){
    console.log('Hola ' + nombre );
}

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

const saludarFlecha = ( nombre ) => {
    console.log('Hola ' + nombre);
}

// saludar( 'Daniel' );
// saludar2( 'Daniel' );

// saludarFlecha( 'Daniel' );

function sumar(a, b){
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a, b) => a + b;

// console.log(sumar( 1, 2 ));
// console.log(sumar2( 1, 2 ));

function getAleatorio(){
    return Math.random();
}
const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );