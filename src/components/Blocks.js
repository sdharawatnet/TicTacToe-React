import React from 'react'
import './Blocks.css'
const Blocks = ({ value, onClick }) => {
    const style = value === 'X' ? 'block x' : 'block o'


    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}

export default Blocks