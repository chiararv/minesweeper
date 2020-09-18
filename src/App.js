import React, { useState } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import CustomModal from './components/modal/CustomModal';



function App() {
  const [height, setHeight] = useState(8)
  const [width, setWidth] = useState(8)
  console.log({height, width})

  
  return (
    <>
      <MineField className="map" height={height} width={width}/>
      <CustomModal setHeight={setHeight} setWidth={setWidth} />
    </>
  );
}

export default App;
