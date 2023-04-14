import './Home.scss'
import React from 'react'
import TopCards from '../../Components/TopCards/TopCards'
import Sec1 from '../../Components/Sec1/Sec1'
import Sec2 from '../../Components/Sec2/Sec2'

const Home = () => {
    return (
        <div className='Home'>
            <TopCards/>
            <Sec1/>
            <Sec2/>
        </div>
    )
}

export default Home
