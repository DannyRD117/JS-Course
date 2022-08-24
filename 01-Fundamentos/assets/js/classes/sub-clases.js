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

class Heroe extends Persona{
    clan = "";

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino aragnido');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino aragnido');

console.log( spiderman );

spiderman.quienSoy();