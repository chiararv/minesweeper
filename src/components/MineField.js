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
    
  console.log("b",board)

  const setFlag = (row, col) => {

    const newBoard = [...board]
    if (!newBoard[row][col].clicked){
      newBoard[row][col].flag = newBoard[row][col].flag ? false : true
    }
    setBoard(newBoard)
  }

  const clickCell = (row, col) => {
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
                // console.log([row + i , y + j])
                // cellRef.current.handleClick(false);
                // (i != 0 || j != 0)
            }
        }
    }
    const newBoard = [...board]
    arr.forEach(el => { newBoard[el[0]][el[1]].clicked = true })
    setBoard(newBoard)

    // setRevealedCells([...reveleadCells, ...arr])

  }

  const onBomb = () => {
    alert("Ooops, you stepped on a mine! What a shame");
    // for(let i=0; i<boardSize; i++){
    //     for(let j=0; j<boardSize; j++){
    //         board[i][j].endGameReveal();
    //     }
    // }
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
                      onReveal= {revealNeighbors}
                      clickCell = {clickCell}
                      bombTouched = {onBomb}
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






