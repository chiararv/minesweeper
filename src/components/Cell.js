import React, { useEffect } from 'react'
// import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import {ReactComponent as VirusSvg} from '../svg/coronavirus.svg'


const useStyles = makeStyles({
  td: ({
    clicked,
    isMine
  }) => ({
      borderBottom: '4px solid grey',
      borderRight: '4px solid grey',
      borderTop: '4px solid lightgray',
      borderLeft: '4px solid lightgray',
      width: '30px',
      height: '30px',
      fontSize: '25px',
      textAlign: 'center',
      padding: 0,
      backgroundColor: clicked ? 'grey' : 'rgb(68, 102, 122)',
      border: clicked? '4px solid darkgrey' : 'inherit',
      color: clicked && isMine ? 'rgb(216, 0, 0)' : 'black',
  })

  ,
})
  // let cellsClass = classNames({
  //   cell: true,
  //   clicked,
  //   bomb: value === "☀"
  // });

const Cell = ({other, setFlag, clicked, clickCell, row, column, value }) => {
  
  const isMine = value === "☀"

  const classes = useStyles({
    clicked,
    isMine
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
  return (
    <td
      onContextMenu={handleContextMenu}
      id={`${row}_${column}`}
      className={classes.td}
      onClick={() => handleClick(true)}
    >
      {clicked && other !== "⚑" ? value : ""}
      {!clicked && other }
    </td>    
  )
}

export default Cell



