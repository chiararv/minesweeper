import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as ClockSvg } from './svg/clock.svg'

const useStyles = makeStyles({
    timerContainer:{
        color: '#bddbe6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90px',
        height: '40px',
        border: '4px solid transparent',
        padding: 3,
        fontSize: '30px',
        borderRadius: 3,
        backgroundColor: 'rgb(37, 88, 131)',
        position: 'relative'
    },
    svg: {
        position: 'absolute',
        left: 7,
        height: 35,
        width: 35, 
    },
    seconds:{
        marginLeft: 34
    }
})

const Timer = ({seconds}) => {
    const classes = useStyles()
    return (
        <div className={classes.timerContainer}>
            <ClockSvg className={classes.svg}/>
            <span className={classes.seconds}>{seconds}</span>
        </div>
    )
}

export default Timer
