// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";

import * as CRUD from "./js/CRUD_provider";

CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({
    name: "Daniel",
    job: "Software developer"
}).then( console.log );

CRUD.actualizarUsuario(2,{
    name: 'Manuel',
    job: 'Arquitecto'
}).then( console.log );

CRUD.borrarUsuario(1).then( console.log );