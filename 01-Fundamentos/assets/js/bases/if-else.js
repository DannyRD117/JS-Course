let a = 30;

if ( a >= 10) {
    console.log('A es mayor o igual que 10');
} else {
    console.log('A es menor que 10');
}


const hoy = new Date();
let dia = hoy.getDay();

console.log( dia );

if ( dia === 0 ){
    console.log('Domingo');
} else if ( dia === 1 ){
    console.log('Lunes');
} else if ( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo');
}

// Laboratorio
// const diasNombre = [
//     'Domingo',
//     'Lunes',
//     'Martes',
//     'Miercosles',
//     'Juevez',
//     'Viernes',
//     'Sabado'];
dia = 6;
const diasNombre = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercosles',
    4: 'Juevez',
    5: 'Viernes',
    6: 'Sabado'    
}
console.log( diasNombre[dia] || 'Dia invalido');