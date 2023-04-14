import React, { useState } from 'react'
import './sideBar.scss'
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa';
import { TbPaperBag } from 'react-icons/tb';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { useDashboard } from '../../Context/DashboardContext';
const SideBar = ({handleClose,showSide}) => {
    const {color}=useDashboard()
    const [changeColor, setchangeColor] = useState('')
    return (
        <div className='SideBar border' style={showSide?{left:'0'}:{left:'-300px'}}>
            <div className="head" >
                
                <div className="logo" style={{color:color()}}>
                    <FaOpencart className='fs-3'/>
                    <h3>Shoppy</h3>
                </div>
                <div className="close" onClick={()=>handleClose()}>
                    <AiOutlineClose className='fs-4'/>
                </div>
                </div>
                <div className="body container">
                    <div className="container">
                        <div className="name">Dashboard</div>
                        <Link to='/'>
                            <div className="item border" onClick={()=>{handleClose();setchangeColor('Ecommerce')}} style={changeColor==='Ecommerce'?{backgroundColor:color(),color:'white'}:{backgroundColor:'white'}}>
                                <div className="icon"><BsCart3/></div>
                                Ecommerce
                            </div>
                        </Link>
                        <div className="name">Pages</div>
                        <Link to='/orders'>
                            <div className="item border" onClick={()=>{handleClose();setchangeColor('Orders')}} style={changeColor==='Orders'?{backgroundColor:color(),color:'white'}:{backgroundColor:'white'}}>
                                <div className="icon"><TbPaperBag/></div>
                                Orders
                            </div>
                        </Link>
                        <Link to='/employees'>
                            <div className="item border" onClick={()=>{handleClose();setchangeColor('Employees')}} style={changeColor==='Employees'?{backgroundColor:color(),color:'white'}:{backgroundColor:'white'}}>
                                <div className="icon"><HiOutlineUsers/></div>
                                Employees
                            </div>
                        </Link>
                        <Link to='/area'>
                            <div className="item border" onClick={()=>{handleClose();setchangeColor('Area Chart')}} style={changeColor==='Area Chart'?{backgroundColor:color(),color:'white'}:{backgroundColor:'white'}}>
                                <div className="icon"><AiOutlineAreaChart/></div>
                                Area Chart
                            </div>
                        </Link>
                        
                    </div>
                </div>
        </div>
    )
}

export default SideBar
