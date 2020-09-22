import React from 'react'
import { ButtonGroup, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
    '&:focus': {
      outline: 'none'
    }
  },
  paper: {
    width: 500,
    height: 500
  },
  btnContainer: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    margin: 15,
    textAlign: 'center',
    fontSize: 20
  }
});

const SecondStep = ({setStep, continueGame}) => {
  const classes = useStyles()

  return (
    <div className={classes.btnContainer}>
      <Button className={classes.btn} variant="outlined" color= "primary" onClick={() => setStep('final')}>Nueva partida</Button>
      <Button className={classes.btn} variant="outlined" color= "primary" onClick={continueGame}>Reanudar partida</Button>
    </div>
  )
}

export default SecondStep
