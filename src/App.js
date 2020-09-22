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
  container: ({ height, width }) => ({
    padding: 24,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: width <= 12 && height <= 12 ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("hospital2.jpeg")',
    backgroundSize: '100%',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#f8f6f1',
    overflowX: 'hidden'
  }),
  logo: ({ height, width }) => ({
      height: width <= 12 && height <= 12 ? 100 : 70,
      margin: width <= 12 && height <= 12 ? 30 : 15
    }),
  info: ({ height, width }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    })
})

function App() {
  
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [mineCount, setMineCount] = useState(0)
  const [boardTouched, setBoardTouched] = useState(false)
  const [board, setBoard] = useState(null)
  const [resetClock, setResetClock] = useState(false)
  const [flagCount, setFlagCount] = useState(mineCount) 
  const [seconds, setSeconds] = useState(0)
  const [clickedCells, setClickedCells] = useState(0)
  
  const classes = useStyles({ height, width })

  const nonBombCells = height * width - mineCount

  const initGame = () => {
    setBoard(initBoard(height, width, mineCount))
    setFlagCount(mineCount)
    setSeconds(0)
    setResetClock(true)
    console.log('init')
  }

  useEffect(() => {
    if (height) initGame()
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

  
  const endGame = () => {
    localStorage.clear()
    setResetClock(true)
  }
  // const userWon = () => {
  //   if(nonBombCells === clickedCells && flagCount === 0) {
  //     setResetClock(true)
  //     console.log('yayy')
  //   }
  //   console.log({clickedCells, nonBombCells, flagCount, height, width, mineCount})
  // }
  // useEffect(() => {
  //   userWon()
  // }, [clickedCells, flagCount])

  

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <Logo className={classes.logo}/>
        <BoardInfo
          seconds={seconds}
          resetGame={initGame}
          mineCount={mineCount}
          flagCount={flagCount}
          height={height}
          width={width}
        />
      </div>
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
        clickedCells={clickedCells}
        setClickedCells={setClickedCells}
        safeCells={nonBombCells}
        mineCount={mineCount}
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
