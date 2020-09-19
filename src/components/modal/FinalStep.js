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

const FinalStep = ({closeModal, setWidth, setHeight}) => {

    const [custom, setCustom] = useState(false)
    const [customHeight, setCustomHeight] = useState(null)
    const [customWidth, setCustomWidth] = useState(null)

    const classes = useStyles()

    const play = (level) => {
        switch (level) {
            case "principiante":
                break;
            case "intermedio":
                setHeight(16)
                setWidth(16)
                break;
            case "experto":
                setHeight(16)
                setWidth(32)
                break;        
            case "custom":
                setHeight(customHeight)
                setWidth(customWidth)
                break;        
            default:
                break;
        }
        closeModal()
    }
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
                            <TextField id="standard-basic" label="Altura" onChange={(e) => setCustomHeight(e.target.value)} />
                            <TextField id="standard-basic" label="Ancho"  onChange={(e) => setCustomWidth(e.target.value)}/>
                        </form>
                        <ButtonGroup className={classes.btnGroup} color="primary" aria-label="outlined primary button group">
                            <Button onClick={() => play("custom")}>Jugar</Button>
                            <Button onClick={() =>setCustom(false)}>Volver</Button>
                        </ButtonGroup>
                    </div>
                )
            }
        </div>
    )
}


export default FinalStep
