import { promesaLenta, promesaMedia, promesaRapida } from "./js/promises";

import './styles.css';

Promise.race( [promesaLenta, promesaMedia, promesaRapida] )
        .then( console.log )
        .catch( console.warn);