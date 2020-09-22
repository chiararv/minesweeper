import React from 'react'
import {Button, List, ListItem, ListItemText, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({ 
  btn: {
    position: 'relative',
    left: '211px',
    marginTop: 30,
    fontSize: 17,
    [theme.breakpoints.down('sm')]: {
      left: '75px',

    }
  },
  list: {
    padding: 0,
  },
  instructions: {
    lineHeight: '37px',
    textAlign: 'justify',
    fontSize: '17px',
    [theme.breakpoints.down('sm')]: {
    lineHeight: '20px',
    fontSize: '14px',
    }
  },
  svg:{
    height: 20,
    width: 20
  }
}))

const Instructions = ({stepHandler}) => {

  const classes = useStyles()

  return (
    <div>
      <Typography variant="body2" gutterBottom className={classes.instructions}>
        Para ganar deberás despejar todas las casillas que no oculten coronavirus y marcar las que lo tienen con una mascarilla. 
        Se puede poner un signo de pregunta en las casillas para indicar la posibilidad de un coronavirus.
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
