import React from 'react'
import Timer from '../Timer'
import { IconButton, makeStyles } from '@material-ui/core'
import { ReactComponent as MaskSvg } from '../svg/mask.svg'
import { ReactComponent as RefreshSvg } from '../svg/refresh.svg'

const useStyles = makeStyles({
    boardInfoContainer:{
        width: 300,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
        backgroundColor: 'rgb(110 166 199)',
        border: '2px solid rgb(37, 88, 131)',
        borderRadius: 4,
        padding: 5
    },
    flagCounter:{
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

    },
    svg: {
        height: 35,
        width: 35,
        paddingRight: 15 
    },
    RefreshSvg: {
        height: 35,
        width: 35,
    },
    button: {
        fontSize: 15
    }
})
const BoardInfo = ({seconds, resetGame, mineCount, flagCount}) => {
    const classes = useStyles()
    return (
        <div className={classes.boardInfoContainer}>
            <Timer seconds={seconds}/>
            <IconButton className={classes.button} onClick={resetGame}>
                <RefreshSvg className={classes.RefreshSvg} />
            </IconButton>
            <div className={classes.flagCounter}>
                <MaskSvg className={classes.svg}/>
                {flagCount}
            </div>
        </div>
    )
}

export default BoardInfo
