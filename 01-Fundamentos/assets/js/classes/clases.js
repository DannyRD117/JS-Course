class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola a todos, soy una clase estatica de Persona');
    }

    nombre = "";
    codigo = "";
    frase  = "";
    comida = "";

    constructor(nombre, codigo, frese) {
       this.nombre = nombre;
       this.codigo = codigo;
       this.frase = frese;
       Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino aragnido');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log(spiderman); 
// console.log(ironman); 
spiderman.quienSoy();
// ironman.quienSoy();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// console.log(spiderman);
// console.log(spiderman.getComidaFavorita);

console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();