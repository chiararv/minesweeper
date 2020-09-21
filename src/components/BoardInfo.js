import React from 'react'
import Timer from '../Timer'
import { Button, makeStyles } from '@material-ui/core'
import { ReactComponent as MaskSvg } from '../svg/mask.svg'

const useStyles = makeStyles({
    svg: {
        height: 35,
        width: 35,
      }
})
const BoardInfo = ({seconds, resetGame, mineCount, flagCount}) => {
    const classes = useStyles()
    return (
        <div>
            <Timer seconds={seconds}/>
            <Button variant="outlined" color="primary" onClick={resetGame}>reset</Button>
            <div>
                <MaskSvg className={classes.svg}/>
                {flagCount}
            </div>
        </div>
    )
}

export default BoardInfo
