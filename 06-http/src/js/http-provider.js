const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl = 'https://reqres.in/api/users?page=2';

//Cloudinary
const claudiPreset = 'ceselfzz';
const claudiUrl = 'https://api.cloudinary.com/v1_1/dar9w355/image/upload';
const apiKey = 238238586474423;

const obtenerChiste = async() => {
    
    try {

        const resp = await fetch( jokeUrl );
    
        if(!resp.ok) throw 'No se pudo realizar la peticion';
    
        const {icon_url, id, value} = await resp.json();

        return {icon_url, id, value}

    } catch (err) {
        
        throw err;
    
    }
    
}

const obtenerUsuarios = async() => {
    const resp = await fetch(usuariosUrl);
    const {data:usuarios} = await resp.json();

    return usuarios;
    
}

const subirImagen = async (imagen) => {
    const formData = new FormData();
    formData.append('upload_preset', claudiPreset);
    formData.append('api_key', apiKey);
    formData.append('file', imagen);

    try {
        
        const resp = await fetch(claudiUrl, {
            method: 'POST',
            body: formData,
        });

        if( resp.ok ) {

            const claudiResp = await resp.json();
            return claudiResp.secure_url;
            
        } else {

            throw await resp.json();

        }
    } catch (err) {
        
        throw err;

    }
    
}

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}