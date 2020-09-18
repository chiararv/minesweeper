import React, { useEffect } from 'react'
import classNames from "classnames";

let endMineSweeperGame = false;

const Cell = (props) => {

  const {flag, setFlag, clicked, clickCell, row, column, onReveal, value, bombTouched, revealedCells } = props


  // const [flag, setFlag] = useState("")

  const isMine = value === "☀"

  const handleClick = (userInitiated) => {
    if (clicked) return
    if (!userInitiated && isMine) return

    clickCell(row, column)
    
    if(isMine) bombTouched()
    
    if(value === "")onReveal(row, column)
    
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

// const el =  document.getElementById(`0_0`)
// console.log(el)
// el.addEventListener('contextmenu', function(e) { e.preventDefault(); }, false)
  return (
    <td
      // onDoubleClick={handleContextMenu()}
      onContextMenu={handleContextMenu}
      id={`${row}_${column}`}
      className={cellsClass}
      onClick={() => handleClick(true)}
      // onContextMenu={handleContextMenu}
    >
      {clicked && !flag ? value : ""}
      {flag && "⚑"}
    </td>

    
  )
}

export default Cell



