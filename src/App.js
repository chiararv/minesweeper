import React, { useState, useEffect } from 'react'
import './App.css'
import MineField from './components/MineField'
import CustomModal from './components/modal/CustomModal'
import {
  initBoard
} from "./helpers/helper"
import BoardInfo from './components/BoardInfo'
import {ReactComponent as Logo} from './svg/covid-sweeper-logo.svg'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("hospital2.jpeg")',
    backgroundSize: '100%',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#f8f6f1',
  },
  logo: {
      height: 100,
      margin: 30
    }
})

function App() {
  const classes = useStyles()

  const [height, setHeight] = useState(8)
  const [width, setWidth] = useState(8)
  const [mineCount, setMineCount] = useState(10)
  const [boardTouched, setBoardTouched] = useState(false)
  const [board, setBoard] = useState(null)
  const [resetClock, setResetClock] = useState(false)
  const [flagCount, setFlagCount] = useState(mineCount) 
  const [seconds, setSeconds] = useState(0)
  const [clickedCells, setClickedCells] = useState(0)

  const nonBombCells = height * width - mineCount

  const initGame = () => {
    setBoard(initBoard(height, width, mineCount))
    setFlagCount(mineCount)
    setSeconds(0)
    setResetClock(true)
    console.log('init')
  }

  useEffect(() => {
    initGame()
  }, [height, width, mineCount])


  const saveGame = () => {
    localStorage.setItem( 'savedBoard', JSON.stringify(board))
  }

  const savedBoard = JSON.parse(localStorage.getItem('savedBoard'))

  const incrementSeconds = () => setSeconds(seconds => seconds + 1)      

  useEffect(() => {
    let interval

    if (boardTouched) {
      interval = setInterval( incrementSeconds, 1000)
      setResetClock(false)
    }
    if (resetClock) {
      clearInterval(interval)
    }     
    return () => clearInterval(interval);
  }, [boardTouched, resetClock])


console.log({resetClock})
  const endGame = () => {
    localStorage.clear()
    setResetClock(true)
  }
  const userWon = () => {
    if(nonBombCells === clickedCells && flagCount === 0) {
      setResetClock(true)
      console.log('yayy')
    }
    console.log({clickedCells, nonBombCells, flagCount, height, width, mineCount})
  }
  useEffect(() => {
    userWon()
  }, [clickedCells, flagCount])

  return (
    <div className={classes.container}>
      <Logo className={classes.logo}/>
      <BoardInfo
        seconds={seconds}
        resetGame={initGame}
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
        userWon={userWon}
        clickedCells={clickedCells}
        setClickedCells={setClickedCells}
        />
      <CustomModal 
        setHeight={setHeight}
        setWidth={setWidth}
        setMineCount={setMineCount}
        setBoard={setBoard}
        savedBoard={savedBoard}
      />
    </div>
  )
}

export default App
