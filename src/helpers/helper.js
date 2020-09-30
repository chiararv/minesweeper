const nestedArray = (row, col) => {
  let outerArray= []
  for (let i = 0; i < row; i++) {
    let innerArray= []
    for (let j = 0; j < col; j++) {
      const cellProperties = {
        row: i,
        col: j,
        value: '',
        clicked: false,
        other: '',
      }
      innerArray.push(cellProperties)
    }
    outerArray.push(innerArray)
  }
  return outerArray
}

const floorRand = (scale) => {
  return Math.floor(Math.random() * scale)
}

const fillNestedArray = (nestedArray, val, count) => {
  let rows = nestedArray.length
  let cols = nestedArray[0].length

  while (count) {
    let row = floorRand(rows)
    let col = floorRand(cols)
    if(nestedArray[row][col].value !== "☀"){
      nestedArray[row][col].value = val
      count -= 1
    }
  }
  return nestedArray
}
// value != "*" xq si no habia veces que salian una celda en la que ya tenia una bomba y me la sobreescribia. El problema  de esto es que voy contando las minas totales entonces iba a tener una demas xq contaba la primera vez que la ponia y despues la segunda cunado sobreescribia.

const calcAdjacentBombs = (nestedArray, val) => {
  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[0].length; j++) {
      if (nestedArray[i][j].value === val) {
        nestedArray = addOneToCalcAdjacent(nestedArray, i, j, val)
      }
    }
  }
  return nestedArray
}

const addOneToCalcAdjacent = (nestedArray, i, j, val)  => {
  let iList = [i - 1, i, i + 1]
  let jList = [j - 1, j, j + 1]

  
  for (let a of iList) {
    if (nestedArray[a]) {
      for (let b of jList) {
        if (nestedArray[a][b] !== undefined && nestedArray[a][b].value !== val) {
          if (typeof nestedArray[a][b].value !== 'number') nestedArray[a][b].value = 0
          nestedArray[a][b].value++
        }
      }
    }
  }
  return nestedArray;
}

export const initBoard = (height, width, mineCount) => calcAdjacentBombs(fillNestedArray(nestedArray(height, width), "☀", mineCount), "☀")
