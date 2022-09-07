import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
    const html = `
        
        <h1 class="mt-5">Subir archivo</h1>
        <hr>

        <label>Ingrese una imagen</label>
        <input type="file" accpet="image/png image/jpeg"/>

        <img id="foto" class="img-thumbnail" scr=""/>

    `;

    const div = document.createElement('div');
    div.innerHTML = html;

    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const imagen = event.target.files[0];
        subirImagen( imagen ).then( url => imgFoto.src = url);
    });
} 


export const init = () => {

    crearInputFileHtml();
    eventos();
}