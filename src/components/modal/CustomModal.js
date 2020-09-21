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
    paper: {
        width: 500,
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        textAlign: 'justify',
    }
  });

const CustomModal = ({setHeight, setWidth, savedBoard, setBoard, setMineCount}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const [step, setStep] = useState('first')

    const handleClose = () => {
        setOpen(false)
    }
    const stepHandler = () => {    
        if(savedBoard) setStep('second')
        else setStep('final')
    }

    const continueGame = () => {
        setBoard(savedBoard)
        handleClose()
    }
    console.log(step)

    return (
        <Modal
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper className={classes.paper}>                
                { step === 'first' && <Instructions stepHandler={stepHandler}/>}
                { step === 'second' && savedBoard && <SecondStep continueGame={continueGame} setStep = {setStep} closeModal={handleClose}/>}
                { step === 'final' && <FinalStep setHeight={setHeight} setWidth={setWidth} setMineCount={setMineCount} closeModal={handleClose} />}
            </Paper>
        </Modal>
    )
}

export default CustomModal
