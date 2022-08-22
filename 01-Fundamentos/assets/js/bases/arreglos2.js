let juegos = ['Zelda', 'Mario', 'Metroi', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach( (elemento, index, arr) => {
    console.log({ elemento, index, arr });
});

let nueavaLongitud = juegos.push('F-Zero');
console.log({ nueavaLongitud, juegos });

nueavaLongitud = juegos.unshift('Fire Emblem');
console.log({ nueavaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos })

let pos = 1;
let juegoBorrados = juegos.splice(pos,2);
console.log( {juegoBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex }); 