const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre ${ this.nombre } - Edad ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15
}


fher.imprimir();

function Persona (nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function imprimir() {
        console.log(`Nombre ${ this.nombre } - Edad ${ this.edad }`);
    }
}

maria = new Persona('Maria' , 23);
console.log(maria.imprimir());
