import React from 'react'
import Cell from './Cell'
import { Button } from '@material-ui/core'
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



const MineField = ({ height, width, board, setBoard, saveGame, endGame, setBoardTouched, boardTouched, flagCount, setFlagCount, clickedCells, setClickedCells, mineCount, safeCells }) => {
  const classes = useStyles()

  const setOther = (row, col) => {
    const newBoard = [...board]

    if (!newBoard[row][col].clicked) {
      let other

      switch (newBoard[row][col].other) {
        case '':
          if(flagCount === 0) {
            other =  '?'
          } else {
            other = '⚑'
            setFlagCount(flagCount - 1)
          }
          break
        case '⚑':
          other = '?'
          setFlagCount(flagCount + 1)
          break
        case '?':
          other = ''
          break
        default:
          break
      }
      newBoard[row][col].other = other
    }
    setBoard(newBoard)
    checkGameStatus(board, safeCells, mineCount)
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
      setClickedCells(clickedCells + 1)
      console.log(clickedCells)
      setBoard(newBoard)
    }
    if(!boardTouched) setBoardTouched(true)
    saveGame()
    checkGameStatus(board, safeCells, mineCount)
  }

  const checkGameStatus = (board, safeCells, mineCount) => {
    let clickedCells = 0
    let flagedMines = 0
    
    board.forEach(item => {
      return item.forEach(subitem => {
        if(subitem.value !== '☀' && subitem.clicked ) clickedCells += 1
        else if (subitem.value === '☀' && subitem.other === '⚑') flagedMines += 1       
      })
     })
  
     if(clickedCells === safeCells && flagedMines == mineCount) {
       alert('ganaste')
     }
    
     console.log({clickedCells, safeCells, flagedMines, mineCount})
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
       setClickedCells(clickedCells + 1)
       console.log(clickedCells)
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
    }, 100)
  }

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <tbody>
          {board && board.map((item, row) => {
            return (
              <tr key={row} className="boardRow" >
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