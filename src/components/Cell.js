import React, { useEffect } from 'react'
import classNames from "classnames";

const Cell = ({flag, setFlag, clicked, clickCell, row, column, value }) => {

  const isMine = value === "☀"

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

  let cellsClass = classNames({
    cell: true,
    clicked,
    bomb: value === "☀"
  });

  return (
    <td
      onContextMenu={handleContextMenu}
      id={`${row}_${column}`}
      className={cellsClass}
      onClick={() => handleClick(true)}
    >
      {clicked && !flag ? value : ""}
      {flag && "⚑"}
    </td>    
  )
}

export default Cell



