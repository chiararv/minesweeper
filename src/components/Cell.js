import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as VirusSvg } from '../svg/coronavirus.svg'
import { ReactComponent as MaskSvg } from '../svg/mask.svg'

const useStyles = makeStyles({
  td: ({
    clicked,
    isQuestion,
    height,
    width
  }) => ({
      verticalAlign: 'middle',
      overflow: 'hidden',
      borderRadius: 3,
      width: width <= 20 ? '40px': '20px',
      height: width <= 20 ? '40px': '20px',
      fontSize: '24px',
      textAlign: 'center',
      padding: 0,
      color: isQuestion ? '#bddbe6' : '#255883',
  }),
  content:({ width }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: width <= 20 ? 22 : 17,
  }),
  svg: ({ width }) => ({
    height: width <= 20 ? 30 : 17,
    width: width <= 20 ? 30 : 17,
  })
})

const Cell = ({
  height, 
  width,
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
    isQuestion,
    height,
    width
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
      style={{backgroundColor: clicked ? '#bddbe6' : '#255883'}}
    >
      <div className={classes.content} >
        {renderContent()}
      </div>
    </td>    
  )
}

export default Cell
