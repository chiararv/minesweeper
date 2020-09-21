import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as VirusSvg } from '../svg/coronavirus.svg'
import { ReactComponent as MaskSvg } from '../svg/mask.svg'

const useStyles = makeStyles({
  td: ({
    clicked,
    isQuestion
  }) => ({
      verticalAlign: 'middle',
      border: '4px solid transparent',
      borderRadius: 3,
      width: '40px',
      height: '40px',
      fontSize: '30px',
      textAlign: 'center',
      padding: 0,
      backgroundColor: clicked ? '#bddbe6' : '#255883',
      color: isQuestion ? '#bddbe6' : '#255883',
  }),
  content:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  svg: {
    height: 35,
    width: 35,
  }
})

const Cell = ({
  other,
  setOther,
  clicked,
  clickCell,
  row,
  column,
  value
}) => {
  const isMine = value === '☀'
  const isFlag = other === '⚑'
  const isQuestion = other === '?'

  const classes = useStyles({
    clicked,
    isQuestion
  })

  const handleClick = (userInitiated) => {
    if (!userInitiated && isMine) return
    clickCell(row, column)     
  }

  useEffect(() => {
    if (clicked) handleClick(false)
  }, [clicked])

  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOther(row, column)
  }

  const renderContent = () => {
    if (clicked) return isMine ? <VirusSvg className={classes.svg}/> : value
    else return isFlag ? <MaskSvg className={classes.svg}/> : other
  }

  return (
    <td
      onContextMenu={handleContextMenu}
      id={`${row}_${column}`}
      className={classes.td}
      onClick={() => handleClick(true)}
    >
      <div className={classes.content}>
        {renderContent()}
      </div>
    </td>    
  )
}

export default Cell
