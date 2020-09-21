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
  }
});

const SecondStep = ({setStep, continueGame}) => {
  const classes = useStyles()

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button onClick={() => setStep('final')}>Nueva partida</Button>
      <Button onClick={continueGame}>Reanudar partida</Button>
    </ButtonGroup>
  )
}

export default SecondStep
