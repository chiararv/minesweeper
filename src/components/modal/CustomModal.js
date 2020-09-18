import React, { useState } from 'react'
import {Modal, Paper} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Instructions from './instructions'
import FinalStep from './FinalStep'
import SecondStep from './SecondStep'

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
  });

const CustomModal = ({setHeight, setWidth}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const [step, setStep] = useState("first")

    const handleClose = () => {
        setOpen(false)
    }
    

    return (
        <Modal
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper>                
                { step === "first" && <Instructions setStep = {setStep}/>}
                { step === "second" && <SecondStep />}
                { step === "final" && <FinalStep setHeight={setHeight} setWidth={setWidth} closeModal={handleClose} />}
            </Paper>
        </Modal>
    )
}

export default CustomModal
