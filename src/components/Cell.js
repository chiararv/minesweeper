import React, { useEffect } from 'react'
// import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import {ReactComponent as VirusSvg} from '../svg/coronavirus.svg'
import {ReactComponent as MaskSvg} from '../svg/mask.svg'


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
      // border: clicked? '4px solid darkgrey' : 'inherit',
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
  // let cellsClass = classNames({
  //   cell: true,
  //   clicked,
  //   bomb: value === "☀"
  // });

const Cell = ({other, setFlag, clicked, clickCell, row, column, value, flagCount }) => {
  
  const isMine = value === "☀"
  const isFlag = other === "⚑"
  const isQuestion = other === "?"

  const classes = useStyles({
    clicked,
    isQuestion
  })

  const handleClick = (userInitiated) => {
    if (!userInitiated && isMine) return
    clickCell(row, column)     
  }

  useEffect(() => {
    if(clicked) handleClick(false)
  }, [clicked])

  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setFlag(row, column)
  }

  // let newValue
  // switch (value) {
  //   case "☀":
  //     newValue = VirusSvg
  //     break;
  
  //   default:
  //     newValue =
  //     break;
  // }
  const renderContent = () => {
    if(clicked) return isMine ? <VirusSvg className={classes.svg}/> : value
    else {
      if( isFlag ) return <MaskSvg className={classes.svg}/>
      else return  other
    }
    // else return isFlag ? <MaskSvg className={classes.svg}/> : other
  }
  console.log("flagCount",flagCount)
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



