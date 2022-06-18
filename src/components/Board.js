import React from 'react'
import Blocks from './Blocks'
import './Board.css'
const Board = ({ board, onClick }) => {
    return (<div className='board'>
        {board.map((val, id) => {
            return <Blocks value={val} onClick={() => val === null && onClick(id)} />
        })}
    </div>
    )
}

export default Board