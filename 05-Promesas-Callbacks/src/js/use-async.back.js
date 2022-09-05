import { buscarHeroe ,buscarHeroeAsync } from "./js/promises";

import './styles.css';

const heroe1 = 'capi';
const heroe2 = 'spidor';

buscarHeroe( heroe1 )
    .then( console.log )
    .catch( console.warn );

buscarHeroeAsync( heroe2 )
    .then( console.log )
    .catch( console.warn );