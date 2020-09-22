import React, { useState } from 'react'
import {Modal, Paper, Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {ReactComponent as Logo} from '../../../svg/covid-sweeper-logo.svg'
import FinalStep from '../instructionsModal/FinalStep';

const useStyles = makeStyles( theme => ({
  root: {
    minWidth: 400,
    maxHeight: '80%',
    margin: '24px auto',
    width: '80%',
    padding: 40,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 200,
      minWidth: 150
    }
  },
  paper: {
    width: 500,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 30,
    textAlign: 'justify',
    outline: 'none',
    [theme.breakpoints.down('sm')]: {
      width: 250,
      height: '100%',
      justifyContent: 'center'
    }
  },
  logo: {
    marginBottom: 25,
    [theme.breakpoints.down('sm')]: {
      height: 60
    }
  },
  container: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content:{
    fontSize: 26,
    margin: 25,
  }
}))

const GameStatus = ({gameStatus, setGameStatus, setMineCount, setHeight, setWidth}) => {

  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const [finalStep, setFinalStep] = useState(false)
  const content = gameStatus === 'won' ? '¡Felicidades! Ganaste' : 'Perdiste' 

  const newGame = () => {
    setFinalStep(true)
  }
  return (
 
    <Modal
    className={classes.root}
    open={open}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    disableBackdropClick
    >
      <Paper className={classes.paper}>
        <Logo />
          { 
            finalStep ?
              <FinalStep 
              setMineCount={setMineCount}
              setHeight={setHeight}
              setWidth={setWidth}
              closeModal={() => setOpen(false)}
              setGameStatus={setGameStatus}
              />
            :
            <>
              <Typography variant="body2" gutterBottom className={classes.content}>
                {content}
              </Typography>
              <Button variant='outlined' color="primary" onClick={newGame}>
                Jugar De Nuevo
              </Button>
            </>
          }
      </Paper>
    </Modal>

  )
}

export default GameStatus
