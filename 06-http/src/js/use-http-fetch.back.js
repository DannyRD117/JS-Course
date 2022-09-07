const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// * HTTP with fetch
// fetch(jokeUrl).then( (resp) => {
//     resp.json().then( ({id, value}) => {
//         console.log( id );
//         console.log( value );
//     })
// })

// * PROTIP: Fetch better way
fetch( jokeUrl )
    .then( resp => resp.json() )
    .then( ({id, value}) => {
        console.log(id);
        console.log(value);
    })
