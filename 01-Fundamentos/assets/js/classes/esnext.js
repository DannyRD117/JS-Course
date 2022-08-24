class Rectangulo {
    #area = 0;
    
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.calcularArea();
    }

    set setBase(base){
        this.base = base;
        this.calcularArea();
    }
    set setAltura(altura){
        this.altura = altura;
        this.calcularArea();
    }

    get getArea(){
        return this.#area;
    }

    calcularArea(){
        this.#area = this.base * this.altura;
    }
}

const rectangulo = new Rectangulo(10 , 15);
console.log( rectangulo.getArea );

rectangulo.setBase = 40;
rectangulo.setAltura = 2;

console.log( rectangulo.getArea );