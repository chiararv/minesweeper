// import React, { useState } from "react";
// import Cell from "./Cell";
// import {
//   nestedArray,
//   populateNestedArray,
//   valsAdjacentCounts
// } from "../helpers/helper";

// export const MineField = () => {
//     const [boardSize, setBoardSize] = useState(3)
//     /* 
//     default value for boardsize is ten, can be changed by user
//     */
//     const [bombCount, setBombCount] = useState(2)
//     const [cellsClicked, setCellsClicked] = useState(1)
    
//     const board =  valsAdjacentCounts(
//         populateNestedArray(nestedArray(boardSize, boardSize), "☀", bombCount),
//         "☀"
//       )

//     const incrementCellsClicked = () => {
//       let safeCells = boardSize * boardSize - bombCount;
//       setCellsClicked(cellsClicked + 1)
//       if (cellsClicked >= safeCells) alert("☀☀☀ You have won! ☀☀☀");
//     }

//     return (
//       <div>
//         <table>
//           <tbody>
//             {board.map((item, row) => {
//               return (
//                 <tr key={row} className="boardRow">
//                   {item.map((subitem, col) => {
//                     return (
//                       <Cell
//                         key={col}
//                         row={row}
//                         column={col}
//                         value={subitem}
//                         incCellsClicked={incrementCellsClicked}
//                       />
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     )
// }


//////////


// import React, { useState } from 'react'
// import classNames from "classnames";

// let endMineSweeperGame = false;

// const Cell = ({row, column, incCellsClicked, value }) => {

//   const [flag, setFlag] = useState("")
//   const [clicked, setClicked] = useState(false)

//   const handleClick = ({ target }) => {
//     console.log(target)
//     if (!flag) setClicked(true);
//     if (!clicked) incCellsClicked();
//     if (!endMineSweeperGame) {
//       // Empty cell click --> recursion
//       if (value === "" && target.id === `${row}_${column}`)
//         recursionClick(target, row, column);
//       //click bomb scenario --> end game
//       if (value === "☀" && !flag) endGame(target);
//     }
//   }

//   const handleContextMenu = (e) => {
//     e.preventDefault();
//     if (!clicked)
//       flag ? setFlag("") : setFlag( "⚑");
//   }

//   let cellsClass = classNames({
//     cell: true,
//     clicked,
//     bomb: value === "☀"
//   });
  
//   return (
//     <td
//       id={`${row}_${column}`}
//       className={cellsClass}
//       onClick={handleClick}
//       onContextMenu={handleContextMenu}
//     >
//       {clicked && !flag ? value : ""}
//       {flag}
//     </td>
//   )
// }

// export default Cell

// const recursionClick = (target, row, column) => {
//   console.log('recursionClick')
//   target.id = `${row}_${column}_`;
//   let rowList = [row - 1, row, row + 1];
//   let colList = [column - 1, column, column + 1];
//   for (let i of rowList) {
//     for (let j of colList) {
//       setImmediate(() => {
//         console.log('setimmediate')
//         if (document.getElementById(`${i}_${j}`))
//           document.getElementById(`${i}_${j}`).click();
//       });
//     }
//   }
//   return;
// }

// const endGame = (target) => {
//   endMineSweeperGame = true;
//   target.style.backgroundColor = "black";
//   let cols = target.parentElement.children.length;
//   let rows = target.parentElement.parentElement.children.length;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (document.getElementById(`${i}_${j}`))
//         document.getElementById(`${i}_${j}`).click();
//     }
//   }
//   return;
// }






