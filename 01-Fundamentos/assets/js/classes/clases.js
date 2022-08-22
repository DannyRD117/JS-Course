class Persona {

    nombre;
    codigo;
    frase;

    constructor(nombre, codigo, frese) {
       this.nombre = nombre;
       this.codigo = codigo;
       this.frase = frese;
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino aragnido');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman); 
console.log(ironman); 
