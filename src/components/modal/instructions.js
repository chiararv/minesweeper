import React from 'react'
import {Button, List, ListItem, ListItemText, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btn: {
    position: 'relative',
    left: '211px',
    marginTop: 30,
    fontSize: 17
  },
  list: {
    padding: 0,
  },
  instructions: {
    lineHeight: '37px',
    textAlign: 'justify',
    fontSize: '17px'
  },
  svg:{
    height: 20,
    width: 20
  }
})

const Instructions = ({stepHandler}) => {

  const classes = useStyles()

  return (
    <div>
      <Typography variant="body2" gutterBottom className={classes.instructions}>
        El juego consiste en despejar todas las casillas que no oculten coronavirus. 
        Se puede poner una mascarilla en las casillas para indicar la posibilad de un coronavirus.
        Las casillas sin número se descubren automáticamente.               
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
            secondary={`Alterna entre una mascarilla y un signo de pregunta`}
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
