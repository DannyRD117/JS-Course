import { call } from "file-loader";

const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    ironman: {
        nombre: 'Iron man',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spider man',
        poder: 'La mejor reaccion a una picadura de araña'
    }
}

export const buscarHeroe = ( id ) => {
    const heroe = heroes[ id ];

    return new Promise( (resolve, reject) => {
        if( heroe )
            resolve( heroe );
        else   
            reject(`No existe un héroe con el id ${ id }`);
    });
}