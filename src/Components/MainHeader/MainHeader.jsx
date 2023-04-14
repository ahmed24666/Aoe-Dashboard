import React from 'react'
import { useDashboard } from '../../Context/DashboardContext'

const MainHeader = ({first,sec}) => {
    const {color,darkMode}=useDashboard()

    return (
        <div className="container d-flex justify-content-center align-items-center gap-2 py-5 px-3">
            <h1 className='fw-bold' style={darkMode?{color:'#FAFBFB'}:{ color: '#404041' }}>{first}</h1>
            <h1 className='fw-bold' style={{ color: color() }}>{sec}</h1>
        </div>
    )
}

export default MainHeader
