import React, { useState, useEffect } from 'react'
import './App.css'
import { MineField } from './components/MineField'
import CustomModal from './components/modal/CustomModal'
import {
  nestedArray,
  populateNestedArray,
  valsAdjacentCounts
} from "./helpers/helper"
import Timer from './Timer'
import BoardInfo from './components/BoardInfo'




function App() {

  const [height, setHeight] = useState(8)
  const [width, setWidth] = useState(8)
  const [mineCount, setMineCount] = useState(10)
  const [boardTouched, setBoardTouched] = useState(false)
  const [board, setBoard] = useState(null)
  const [gameFinished, setGameFinished] = useState(false)
  const [flagCount, setFlagCount] = useState(mineCount) 

  useEffect(() => {
    const initBoard =  valsAdjacentCounts(populateNestedArray(nestedArray(height, width), "☀", mineCount), "☀")
    setBoard(initBoard)
  }, [height, width])


  const saveGame = () => {
    localStorage.setItem( 'savedBoard', JSON.stringify(board))
  }
  const savedBoard = JSON.parse(localStorage.getItem('savedBoard'))



  const [seconds, setSeconds] = useState(0)

  const incrementSeconds = () => {
      setSeconds(seconds => seconds + 1)      
  }



  let interval
  useEffect(() => {
    if(boardTouched){
       interval = setInterval( incrementSeconds, 1000)
    };
    if(gameFinished){
      clearInterval(interval);
    };
    return () => clearInterval(interval);
  }, [boardTouched, gameFinished]);

 

  const endGame = () => {
    alert('perdites')  
    localStorage.clear()
    setGameFinished(true)
  }

  const resetGame = () => {
    const initBoard =  valsAdjacentCounts(populateNestedArray(nestedArray(height, width), "☀", mineCount), "☀")
    setBoard(initBoard)

  }
  return (
    <>
      <BoardInfo
        seconds={seconds}
        resetGame={resetGame}
        mineCount={mineCount}
        flagCount={flagCount}
      />
      <MineField 
        className="map"
        height={height}
        width={width}
        board={board}
        setBoard={setBoard}
        saveGame={saveGame}
        setBoardTouched={setBoardTouched}
        boardTouched={boardTouched}
        flagCount={flagCount}
        setFlagCount={setFlagCount}
        endGame={endGame}
        />
      <CustomModal 
        setHeight={setHeight}
        setWidth={setWidth}
        setMineCount={setMineCount}
        setBoard={setBoard}
        savedBoard={savedBoard}
      />
    </>
  );
}

export default App;
