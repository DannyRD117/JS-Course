class Pesona{

    static crearPorObjeto( {nombre, apellido, edad}){
        return new Pesona(nombre, apellido, edad);
    }

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getInfo(){
        console.log(`Info: nombre: ${this.nombre}, apellido: ${this.apellido}, edad: ${this.edad}`);
    }

}
const nombre = 'Daniel',
    apellido = 'Rodriguez',
    edad = 15;

const jefeMaestro = {nombre: 'Jefe',
                    apellido: 'Maestro',
                    edad: 48};

const persona1 = new Pesona(nombre, apellido, edad);
const persona2 = Pesona.crearPorObjeto(jefeMaestro);
persona1.getInfo();
persona2.getInfo();