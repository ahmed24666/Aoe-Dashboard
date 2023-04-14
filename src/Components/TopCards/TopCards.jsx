import React from 'react'
import './topCards.scss'
import { HiOutlineUsers } from 'react-icons/hi';
import { BsBoxSeam } from 'react-icons/bs';
import { FiBarChart } from 'react-icons/fi';
import { BsArrowRepeat } from 'react-icons/bs';
import { useDashboard } from '../../Context/DashboardContext';
const TopCards = () => {
    const {bg}=useDashboard()

    return (
        <div className='TopCards container'>
            <div className="card1">
                <img src="/data/welcome-bg.svg" alt="" />
                <div className="absolute">
                    <div className="top">
                        <div className="left">
                            <h3>Earnings</h3>
                            <p>$63,448.78</p>
                        </div>
                        <div className="right" style={bg()}>$</div>
                    </div>
                    <div className="buttom" style={bg()}>Download</div>
                </div>
            </div>
            <div className="cards" >
                <div className="top" style={{backgroundColor:'#EBFAF2'}}>
                    <HiOutlineUsers />
                </div>
                <div className="buttom">
                    <div className="num">
                        <h3>39,354</h3>
                        <span style={{color:'red'}}>-4%</span>
                    </div>
                    <p>Customers</p>
                </div>
            </div>
            <div className="cards">
                <div className="top" style={{backgroundColor:'#E5FAFB'}}>
                    <BsBoxSeam />
                </div>
                <div className="buttom">
                    <div className="num">
                        <h3>4,396</h3>
                        <span style={{color:'green'}}>+23%</span>
                    </div>
                    <p>Products</p>
                </div>
            </div>
            <div className="cards">
                <div className="top" style={{backgroundColor:'#FEC90F'}}>
                    <FiBarChart />
                </div>
                <div className="buttom">
                    <div className="num">
                        <h3>423,39</h3>
                        <span style={{color:'green'}}>+38%</span>
                    </div>
                    <p>Sales</p>
                </div>
            </div>
            <div className="cards">
                <div className="top" style={{backgroundColor:'#FFF4E5'}}>
                    <BsArrowRepeat />
                </div>
                <div className="buttom">
                    <div className="num">
                        <h3>39,354</h3>
                        <span style={{color:'red'}}>-12%</span>
                    </div>
                    <p>Refunds</p>
                </div>
            </div>
            
        </div>
    )
}

export default TopCards
