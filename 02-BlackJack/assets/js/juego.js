(() => {
    'use strict'
    
    let deck = [];
    const tipos = ['C','H','D','S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias de HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugador = document.querySelectorAll('.divCartas'),
          puntajeHTML = document.querySelectorAll('small');

    // Esta función inicializa el juego
    const inicializaJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
    }
    // Está función crea un nuevo deck
    const crearDeck = () => {

        for (let i = 2; i <= 10; i++) {
            for(let tipo of tipos){
                deck.push( i + tipo );
            }
        }

        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push( especial + tipo );
            }
        }     
        return _.shuffle(deck); 
    }

    // Esta función permite tomar una carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    // Esta función retorna el valor de la carta enviada
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);

        return      (isNaN(valor))  ? 
                        (valor === 'A') ? 1 : 10
                    : (valor * 1);

    }

    //Esta función acumula los puntos de los jugadores
    const acumulaPuntos = ( carta, turno ) => {
        
        puntosJugadores[ turno ] += valorCarta(carta);
        puntajeHTML[ turno ].innerText = puntosJugadores[ turno ];
        return puntosJugadores[ turno ];
    }

    // Esta función agrega las cartas al html
    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.classList.add('carta');
        imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasJugador[ turno ].append(imgCarta);
    }

    const determinaGanador = () => {
        const [puntosJugador, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            
            if(puntosComputadora === puntosJugador){
                alert('Una lastima, nadie gano');
            } else if ( puntosJugador > 21){
                alert('Computadora gana');
            } else if ( puntosComputadora > 21){
                alert('Tu ganas');
            } else {
                alert('Computadora gana');
            }

        }, 100);
    }

    // Esta función hace la logica de la computadora
    const turnoComputadora = ( puntosMinimos ) => { 
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumulaPuntos( carta, puntosJugadores.length - 1 );

            crearCarta(carta, puntosJugadores.length - 1 );

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        determinaGanador();
        
    }

    

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumulaPuntos( carta, 0 );
        crearCarta(carta, 0);

        if(puntosJugador > 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } 
        else if ( puntosJugador === 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    })

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    })

    btnNuevo.addEventListener('click', () => {
        inicializaJuego();

        puntajeHTML.forEach( element => element.innerText = 0);
        divCartasJugador.forEach( element => element.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    })
})();

