import React, { useState } from 'react'
import {TextField, ButtonGroup, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {ReactComponent as Virus} from '../../svg/coronavirus.svg'

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
  btnGroup: {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  },

  btnContainer:{
      display: 'flex',
      flexDirection: 'column',
      width: 300,
      marginTop: 20
  },
  btn:{
      margin: '15px 0',
      textAlign: 'center',
      fontSize: 20,
  },
  btnLabel:{
    display: 'flex',
    justifyContent: 'flex-start'
  },
  virus1:{
      filter: 'hue-rotate(100deg)',
      height: 35,
      width: 35,
  },
  virus2:{
      filter: 'hue-rotate(200deg)',
      height: 35,
      width: 35,
  },
  virus3:{
      filter: 'hue-rotate(270deg)',
      height: 35,
      width: 35,
  },
  virus4:{
      height: 35,
      width: 35,
  },
});

const FinalStep = ({closeModal, setWidth, setHeight, setMineCount}) => {

  const [custom, setCustom] = useState(false)
  const [customHeight, setCustomHeight] = useState(null)
  const [customWidth, setCustomWidth] = useState(null)
  const [customMineCount, setCustomMineCount] = useState(null)

  const classes = useStyles()

  const play = (level) => {
    switch (level) {
      case 'principiante':
        setHeight(8)
        setWidth(8)
        setMineCount(10)
        break
      case 'intermedio':
        setHeight(16)
        setWidth(16)
        setMineCount(40)
        break
      case 'experto':
        setHeight(16)
        setWidth(32)
        setMineCount(99)
        break      
      case 'custom':
        setHeight(customHeight)
        setWidth(customWidth)
        setMineCount(customMineCount)
        break     
      default:
        break
    }
    closeModal()
  }

  return (
    <div>
      {
        !custom && (
          <div className={classes.btnContainer}>
            <Button classes={{ root: classes.btn, label: classes.btnLabel }} variant="outlined" color= "primary" onClick={() => play("principiante")} startIcon={<Virus className={classes.virus1}/>}>Principiante</Button>
            <Button classes={{ root: classes.btn, label: classes.btnLabel }} variant="outlined" color= "primary" onClick={() => play("intermedio")} startIcon={<Virus className={classes.virus2}/>}>Intermedio</Button>
            <Button classes={{ root: classes.btn, label: classes.btnLabel }} variant="outlined" color= "primary" onClick={() => play("experto")} startIcon={<Virus className={classes.virus3}/>}>Experto</Button>
            <Button classes={{ root: classes.btn, label: classes.btnLabel }} variant="outlined" color= "primary" onClick={() =>setCustom(true)} startIcon={<Virus className={classes.virus4}/>}>Personalizado</Button>
          </div>
        )
      }
      {
        custom && (
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Altura" onChange={(e) => setCustomHeight(e.target.value)}/>
              <TextField id="standard-basic" label="Ancho"  onChange={(e) => setCustomWidth(e.target.value)}/>
              <TextField id="standard-basic" label="Bombas"  onChange={(e) => setCustomMineCount(e.target.value)}/>
            </form>
            <ButtonGroup className={classes.btnGroup} color="primary" aria-label="outlined primary button group">
              <Button className={classes.btn} onClick={() =>setCustom(false)}>Volver</Button>
              <Button className={classes.btn} onClick={() => play("custom")} disabled={!customHeight | !customWidth | !customMineCount}>Jugar</Button>
            </ButtonGroup>
          </div>
        )
      }
    </div> 
  )
}

export default FinalStep
