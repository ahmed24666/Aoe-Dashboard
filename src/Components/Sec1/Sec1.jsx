import React from 'react'
import './sec1.scss'
import { BarChart, Bar, LineChart, Line, XAxis, PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../Context/DashboardContext';

const Sec1 = () => {
    const {bg,color}=useDashboard()

    const data = [
        {
            name: 'Jan',
            Budget: 4000,
            Expense: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            Budget: 3000,
            Expense: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            Budget: 2000,
            Expense: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            Budget: 2780,
            Expense: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            Budget: 1890,
            Expense: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            Budget: 2390,
            Expense: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            Budget: 3490,
            Expense: 4300,
            amt: 2100,
        },
    ];
    const data2 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data3 = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data4 = [
        { name: 'Product A', value: 400 },
        { name: 'Product B', value: 300 },
        { name: 'Product C', value: 300 },
        { name: 'Product D', value: 200 },
        { name: 'Product E', value: 278 },
        { name: 'Product F', value: 189 },
    ];
    return (
        <div className='Sec1 container' >
            <div className="left">
                <div className="top">
                    <h3>Revenue Updates</h3>
                </div>
                <div className="con">
                    <div className="first">
                        <ResponsiveContainer width={'100%'} height={400}>
                            <BarChart
                                data={data}
                                margin={{
                                    top: 30,
                                    right: 20,
                                    left: 20,
                                    bottom: 30,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36} />
                                <Bar dataKey="Budget" stackId="a" fill={color()} />
                                <Bar dataKey="Expense" stackId="a" fill="#404041" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="sec">
                        <div className="budget">
                            <div className="text">
                                <h3>$93,438</h3>
                                <div className="num" style={{ backgroundColor: '#4ADE80' }}>23%</div>
                            </div>
                            <p>Budget</p>
                        </div>
                        <div className="budget">
                            <div className="text">
                                <h3>$48,487</h3>
                                <div className="num" style={{ backgroundColor: 'red' }}>-15%</div>
                            </div>
                            <p>Expense</p>
                        </div>
                        <ResponsiveContainer width="90%" height={150}>
                            <LineChart data={data2} margin={{
                                top: 20,
                                right: 30,
                                left: 30,
                                bottom: 20,
                            }}>
                                <Tooltip />
                                <XAxis dataKey="name" />
                                <Line type="monotone" dataKey="pv" stroke={color()} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                        <div className="button" style={bg()}>
                            Download
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="top" style={bg()}>
                    <div className="head">
                        <h3>Earnings</h3>
                        <div className="earning">
                            <h3>$63,448.78</h3>
                            <p>Monthly revenue</p>
                        </div>
                    </div>
                    <div className="tail" >
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={data3}>
                                <Bar dataKey="uv" fill="white" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="buttom">
                    <ResponsiveContainer width="100%" height={180}>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={data4}
                                cx="50%"
                                cy="50%"
                                outerRadius={60}
                                fill={color()}
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="text">
                        <h3>$43,246</h3>
                        <p>Yearly sales</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec1
