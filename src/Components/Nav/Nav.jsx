import './nav.scss'
import React from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Nav = ({handleShow}) => {
    const [state, setstate] = useState(false)
    return (
        <div className='Nav container'>
            <div className="search border" style={state?{top:'0'}:{top:'-100%'}}>
                <input type="text" className='border' placeholder='Search' />
                <div className="icon" onClick={()=>setstate(!state)}>
                <AiOutlineClose/>
                </div>
            </div>
            <div className="left">
                <div className="icon" onClick={handleShow}><HiOutlineMenuAlt1 /></div>
                <div className="icon" onClick={()=>setstate(!state)}><HiOutlineSearch /></div>
            </div>
            <div className="right">
                    <div className="avatar"><img src="/data/avatar.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default Nav
