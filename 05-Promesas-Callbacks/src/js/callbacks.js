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

export const buscarHeroe = ( heroeId, callback) => {
    
    const heroe = heroes[heroeId];
    if( heroe )
        callback( null, heroe);
    else
        callback(`No existe un heroe con el id ${heroeId}`)
    
}