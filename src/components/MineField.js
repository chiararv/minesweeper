import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import {
  nestedArray,
  populateNestedArray,
  valsAdjacentCounts
} from "../helpers/helper";

export const MineField = () => {

  const [boardSize, setBoardSize] = useState(10)
  const [bombCount, setBombCount] = useState(10)
  const [board, setBoard] = useState(null)


  useEffect(() => {
    let initBoard =  valsAdjacentCounts(populateNestedArray(nestedArray(boardSize, boardSize), "☀", bombCount), "☀")
    setBoard(initBoard)
  }, [])
    
  const setFlag = (row, col) => {
    const newBoard = [...board]
    if (!newBoard[row][col].clicked){
      newBoard[row][col].flag = newBoard[row][col].flag ? false : true
    }
    setBoard(newBoard)
  }

  const clickCell = (row, col) => {    
    const isMine =board[row][col].value === "☀"
    const isEmpty =board[row][col].value === ""
    
    if(isMine) mineTouched()   
    if(isEmpty)revealNeighbors(row, col)

    const newBoard = [...board]
    newBoard[row][col].clicked = true
    setBoard(newBoard)
  }

  const revealNeighbors = (row, col) => {
    const arr = []
    for(let i=-1;i<=1;i++){
      for(let j=-1;j<=1;j++){
        if (
          row + i >= 0
          && row + i <= boardSize - 1
          && col + j >= 0
          && col + j <= boardSize - 1
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
    <div>
      <table>
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
                      flag={subitem.flag}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}






