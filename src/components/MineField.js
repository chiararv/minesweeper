import React from "react"
import Cell from "./Cell"
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    display: 'block',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  btn: {
    position: 'relative',
    left: '211px',
    marginTop: 30
  },
})
export const MineField = ({height, width, board, setBoard, saveGame}) => {
  
  const classes = useStyles()

  const setFlag = (row, col) => {
    const newBoard = [...board]
    if (!newBoard[row][col].clicked){
      let other
      switch (newBoard[row][col].other) {
        case "":
          other = "⚑"
          break;
        case "⚑":
          other = "?"
          break
        case "?":
          other = ""
          break
        default:
          break;
      }
      newBoard[row][col].other = other
    }
    setBoard(newBoard)
  }

  const clickCell = (row, col) => {    
    const isMine =board[row][col].value === "☀"
    const isEmpty =board[row][col].value === ""

    const isFlag = board[row][col].other === "⚑"
    console.log(isFlag, board[row][col].other, row, col)

    if(!isFlag) {
      if(isMine) mineTouched()   
      if(isEmpty)revealNeighbors(row, col)
      const newBoard = [...board]
      newBoard[row][col].clicked = true
      setBoard(newBoard)
    }  
  }

  const revealNeighbors = (row, col) => {

    const arr = []
    for(let i=-1;i<=1;i++){
      for(let j=-1;j<=1;j++){
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
    arr.forEach(el => { newBoard[el[0]][el[1]].clicked = true })
    setBoard(newBoard)
  }

  const mineTouched = () => {
    const newBoard = [...board]
    newBoard.forEach(item => {
     return item.forEach(subitem => subitem.clicked = true)
    })
    setBoard(newBoard)
  }



  return (
    <div className={classes.container}>
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
                      setFlag={setFlag}
                      other={subitem.other}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button className={classes.btn} variant="outlined" color="primary" onClick={saveGame}>
        Guardar juego
      </Button>
    </div>
  )
}






