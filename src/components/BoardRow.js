import React from 'react'

const BoardRow = ({children, row, col}) => {

    console.log(children)

    const autoClickedCell = children.find(cell => cell.props.row === row && cell.props.column === col)
    
    return (
        <tr>
            {children}
        </tr>
    )
}

export default BoardRow
