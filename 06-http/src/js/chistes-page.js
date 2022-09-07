import { obtenerChiste } from "./http-provider";

const body = document.querySelector('body');
let btnOtro, olList; 

const crearChisteHtml = () => {

    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group">
        <li class="group-list-item"></li>
    </ol>`;

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;
    body.append( divChiste );

}

const eventos = () => {
    
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        btnOtro.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnOtro.disabled = false;
    });

}

const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`; 
    olItem.classList.add('group-list-item');

    olList.append(olItem);

}

export const init = () => {
 
    crearChisteHtml();
    eventos();

}