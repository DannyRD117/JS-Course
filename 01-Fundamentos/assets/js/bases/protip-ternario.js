const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = ( miembro ) => miembro ? '2 Dolares' : '10 Dolares';

console.log(elMayor(20, 34));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(32,356),
]

console.log( amigosArr );

const nota = 65;
const grado = nota > 95 ? 'A+':
              nota > 90 ? 'A+':
              nota > 85 ? 'B+':
              nota > 80 ? 'B':
              nota > 75 ? 'C+':
              nota > 70 ? 'C': 'F'