import { buscarHeroeAsync, buscarHeroe } from "./promises";

const heroesIds = ['capi', 'ironman', 'spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );



export const obtenerHeroeArr = async () => {
    // const heroeArr = [];

    // for(const id of heroesIds) {
    //     const heroe = await buscarHeroeAsync(id);
    //     heroeArr.push( heroe );
    // }

    // return heroeArr;

    //* OPTIMAZED
    // const heroeArr = [];

    // for(const id of heroesIds) {
    //     heroeArr.push( buscarHeroe(id) );
    // }

    // return await Promise.all( heroeArr );

    //* BETTER WAY
    return await Promise.all( heroesIds.map( buscarHeroe ) );
}

export const obtenerHeroeAwait = async ( id ) => {
    try {

        const heroe = await buscarHeroeAsync( id );
        return heroe;
        
    } catch ( err ) {
        
        return {
            'nombre'  : 'Sin nombre',
            'poder' : 'Sin poder'
        }

    }
    
};

//* FOR AWAIT
export const heroesCiclo = async() => {
    //* Way 1
    // const heroe = await Promise.all( heroesPromesas );
    // heroe.forEach( console.log );

    //* Way 2: FOR AWAIT

    for await( const heroe of heroesPromesas )
    {
        console.log( heroe);
    }
};

//* IF AWAIT
export const heroeIfAwait = async(id) => {
    if( (await buscarHeroeAsync(id)).nombre === 'Iron man'){
        console.log('Es el mejor heroe');
    } else {
        console.log('Naaah');
    }
}