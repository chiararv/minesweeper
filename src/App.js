import React, { useState, useEffect } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import CustomModal from './components/modal/CustomModal';
import {
  nestedArray,
  populateNestedArray,
  valsAdjacentCounts
} from "./helpers/helper";



function App() {

  const [height, setHeight] = useState(8)
  const [width, setWidth] = useState(8)
  console.log({height, width})

  const [board, setBoard] = useState(null)
  const [bombCount, setBombCount] = useState(10)

  useEffect(() => {
    const initBoard =  valsAdjacentCounts(populateNestedArray(nestedArray(height, width), "☀", bombCount), "☀")
    setBoard(initBoard)
  }, [height, width])

  const saveGame = () => {
    localStorage.setItem( 'savedBoard', JSON.stringify(board))
  }
  const savedBoard = JSON.parse(localStorage.getItem('savedBoard'))

  const endGame = () => {
    alert('perdites')  
    localStorage.clear()
  }

  return (
    <>
      <MineField className="map" height={height} width={width} board={board} setBoard={setBoard} saveGame={saveGame} endGame={endGame}/>
      <CustomModal setHeight={setHeight} setWidth={setWidth} setBoard={setBoard} savedBoard={savedBoard} />
    </>
  );
}

export default App;
