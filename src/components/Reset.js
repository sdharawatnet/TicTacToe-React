import React from 'react'
import './Reset.css'
import { BiReset } from 'react-icons/bi';

const Reset = ({ resetBoard }) => {
    return (<>

        <button className='resetbtn' onClick={resetBoard}> <BiReset /> </button>
    </>
    )
}

export default Reset