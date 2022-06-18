import React from 'react'
import './Reset.css'
const Reset = ({ resetBoard }) => {
    return (
        <button className='resetbtn' onClick={resetBoard}> RESET </button>
    )
}

export default Reset