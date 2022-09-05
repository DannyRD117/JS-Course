import './styles.css';
import { buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import { buscarHeroe } from "./js/promises";


const heroeId1 = 'capi2';;
const heroeId2 = 'spider';

// buscarHeroe( heroeId , ( err, heroe ) => {
//     if ( err ) 
//         console.error( err );
//     else
//         console.log( heroe );
// });

// buscarHeroe( heroeId1 ).then( ( heroe1 ) => {
//     // console.log(`${heroe.nombre} esta en camino para salvarte`);
//     buscarHeroe( heroeId2 ).then( ( heroe2 ) => {
//         console.log(`${heroe1.nombre} y ${heroe2.nombre} estan en camino a salvarte`);
//     });
// });

Promise.all( [buscarHeroe(heroeId1), buscarHeroe(heroeId2)] )
    .then( ([heroe1, heroe2]) => {
        console.log(`${heroe1.nombre} y ${heroe2.nombre} estan en camino a salvarte`);
    }).catch( err => {
        console.log( err );
    }).finally( () => {
        console.log('Se terminaron todas las promesas');
    });