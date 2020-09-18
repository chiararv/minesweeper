import React from 'react'
import Button from '@material-ui/core/Button'

const Instructions = ({setStep}) => {
    return (
        <div>
            <h1>Intrucciones</h1>
            <p>
                El juego consiste en despejar todas las casillas de que no oculten una mina.
                Algunas casillas tienen un número, este número indica las minas que se encuentran en las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las ocho casillas que hay alrededor (si no es en una esquina o borde) hay 3 con minas y 5 sin minas. Si se descubre una casilla sin número indica que ninguna de las casillas vecinas tiene mina. 
                Las casillas sin número se descubren automáticamente.Si se descubre una casilla con una mina se pierde la partida.
                Se puede poner una bandera en las casillas para indicar la posibilad de una mina.
            </p>
            <ul>
                <li><span>Click</span> revela la casilla</li>
                <li><span>Click derecho</span> alterna entre una bandera y un signo de pregunta</li>
            </ul>
            <Button onClick={() => setStep("final")}>Jugar</Button>
        </div>
    )
}

export default Instructions
