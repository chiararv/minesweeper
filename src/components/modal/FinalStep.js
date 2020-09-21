import React, { useState } from 'react'
import {TextField, ButtonGroup, Button} from '@material-ui/core'
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
    btnGroup: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
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
            case "principiante":
                break;
            case "intermedio":
                setHeight(16)
                setWidth(16)
                setMineCount(40)
                break;
            case "experto":
                setHeight(16)
                setWidth(32)
                setMineCount(99)
                break;        
            case "custom":
                setHeight(customHeight)
                setWidth(customWidth)
                setMineCount(customMineCount)
                break;        
            default:
                break;
        }
        closeModal()
    }

    // const isNumber = (input, setCustom) => {
    //     // if(typeof(input) !== 'number')  alert('Por favor ingresa números.')
    //     // else setCustom(input)
    //     console.log(input)
    // isNumber(e.target.value, setCustomHeight)}
    // }


    return (
        <div>
            {
                !custom && (
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={() => play("principiante")}>Principiante</Button>
                        <Button onClick={() => play("intermedio")}>Intermedio</Button>
                        <Button onClick={() => play("experto")}>Experto</Button>
                        <Button onClick={() =>setCustom(true)}>Personalizado</Button>
                    </ButtonGroup>
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
                            <Button onClick={() =>setCustom(false)}>Volver</Button>
                            <Button onClick={() => play("custom")} disabled={!customHeight | !customWidth | !customMineCount}>Jugar</Button>
                        </ButtonGroup>
                    </div>
                )
            }
        </div> 
    )
}


export default FinalStep
