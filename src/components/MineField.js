import React, { useEffect } from 'react'
import Cell from './Cell'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  table: {
    display: 'block',
    borderCollapse: 'separate',
    borderSpacing: 2,
    backgroundColor: '#6ea6c7',
    borderRadius: 3,
    padding: 4,
  },
  btn: {
    position: 'relative',
    left: '211px',
    marginTop: 30
  },
})

const MineField = ({ height, width, board, setBoard, saveGame, endGame, setBoardTouched, boardTouched, flagCount, setFlagCount, clickedCells, setClickedCells}) => {
  const classes = useStyles()

  const setOther = (row, col) => {
    const newBoard = [...board]

    if (!newBoard[row][col].clicked) {
      let newValue
      switch (newBoard[row][col].other) {
        case '':
          if(flagCount === 0) {
            newValue =  '?'
          } else {
            newValue = '⚑'
            setFlagCount(flagCount - 1)
          }
          break
        case '⚑':
          newValue = '?'
          setFlagCount(flagCount + 1)
          break
        case '?':
          newValue = ''
          break
        default:
          break
      }
      newBoard[row][col].other = newValue
    }
    setBoard(newBoard)
  }



const clickCell = (row, col) => {    
  const isMine = board[row][col].value === '☀'
  const isEmpty = board[row][col].value === ''
  const isFlag = board[row][col].other === '⚑'

  if(!isFlag) {
    if(isMine) mineTouched()   
    if(isEmpty)revealNeighbors(row, col)
    const newBoard = [...board]
    newBoard[row][col].clicked = true
    // setClickedCells(clickedCells + 1)
    setBoard(newBoard)
  }
  if(!boardTouched) setBoardTouched(true)
  saveGame()
}



const revealNeighbors = (row, col) => {
    const arr = []
    for(let i=-1; i<=1; i++){
      for(let j=-1; j<=1; j++){
        if (
          row + i >= 0
          && row + i <= height - 1
          && col + j >= 0
          && col + j <= width - 1
          ){
            arr.push([row + i , col + j])
        }
      }
    }

    const newBoard = [...board]

    arr.forEach(el => { 
     const cell = newBoard[el[0]][el[1]]
     if (cell.other !== '⚑') {
       cell.clicked = true
      //  setClickedCells(clickedCells + 1)
      } 
    })
    setBoard(newBoard)

  }

  const mineTouched = () => {
    const newBoard = [...board]
    newBoard.forEach(item => {
     return item.forEach(subitem => subitem.clicked = true)
    })
    setBoard(newBoard)
    setTimeout(() => {
      endGame()
    }, 1000)
  }

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <tbody>
          {board && board.map((item, row) => {
            return (
              <tr key={row} >
                {item.map((subitem, col) => {
                  return (
                    <Cell
                      key={col}
                      row={subitem.row}
                      column={subitem.col}
                      value={subitem.value}
                      clicked={subitem.clicked}
                      clickCell = {clickCell}
                      setOther={setOther}
                      flagCount={flagCount}
                      other={subitem.other}
                      height={height}
                      width={width}
                    />
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MineField