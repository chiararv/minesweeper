import React from 'react'
import {Button, List, ListItem, ListItemText, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btn: {
    position: 'relative',
    left: '211px',
    marginTop: 30
  },
  list: {
    padding: 0,
  }
})

const Instructions = ({stepHandler}) => {

  const classes = useStyles()

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Instrucciones
      </Typography>
      <Typography variant="body2" gutterBottom>
        El juego consiste en despejar todas las casillas que no oculten una mina. Algunas casillas tienen un número, este número indica las minas que se encuentran en las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las ocho casillas que hay alrededor (si no es en una esquina o borde) hay 3 con minas y 5 sin minas. Si se descubre una casilla sin número indica que ninguna de las casillas vecinas tiene mina. 
      </Typography>
      <Typography variant="body2" gutterBottom>
        Las casillas sin número se descubren automáticamente.Si se descubre una casilla con una mina se pierde la partida.                
        Se puede poner una bandera en las casillas para indicar la posibilad de una mina.
      </Typography>
      <div>
        <List>
          <ListItem className={classes.list}>
          <ListItemText
            primary="Click izquierdo"
            secondary='Revela la casilla'
          />
        </ListItem>
        <ListItem className={classes.list}>
          <ListItemText
            primary="Click derecho"
            secondary='Alterna entre una bandera y un signo de pregunta'
          />
          </ListItem>
        </List>
        </div>
        <Button className={classes.btn} variant="outlined" color="primary" onClick={stepHandler}>
            Jugar
        </Button>
      </div>
    )
}

export default Instructions
