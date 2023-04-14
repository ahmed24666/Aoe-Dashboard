import React from 'react'
import './sec2.scss'
import Form from 'react-bootstrap/Form';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsWallet2 } from 'react-icons/bs';
import { BsCreditCard } from 'react-icons/bs';
import { BsCheck } from 'react-icons/bs';
import { useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../../Context/DashboardContext';

const Sec2 = () => {
    const {bg,color}=useDashboard()

    const data01 = [
        { month: 'March', PaypalTransfer: 400, Wallet: 200, CreditCard: -100, BankTransfer: 400, },
        { month: 'April', PaypalTransfer: 300, Wallet: -400, CreditCard: 300, BankTransfer: -300, },
        { month: 'May', PaypalTransfer: -300, Wallet: -300, CreditCard: 500, BankTransfer: -800, },
        { month: 'June', PaypalTransfer: 200, Wallet: 400, CreditCard: 460, BankTransfer: -460, },
        { month: 'July', PaypalTransfer: -278, Wallet: 200, CreditCard: -600, BankTransfer: 230, },
    ];
    const data = [
        {
            name: 'A',
            Egypt: 4000,
            England: 2400,
            amt: 2400,
        },
        {
            name: 'B',
            Egypt: 3000,
            England: 1398,
            amt: 2210,
        },
        {
            name: 'C',
            Egypt: 2000,
            England: 9800,
            amt: 2290,
        },
        {
            name: 'D',
            Egypt: 2780,
            England: 3908,
            amt: 2000,
        },
        {
            name: 'E',
            Egypt: 1890,
            England: 4800,
            amt: 2181,
        },
        {
            name: 'F',
            Egypt: 2390,
            England: 3800,
            amt: 2500,
        },
        {
            name: 'G',
            Egypt: 3490,
            England: 4300,
            amt: 2100,
        },
    ];
    const [recent, setRecent] = useState(data01[0].month)
    const choosenMonth = data01.filter((item) => item.month === recent)
    return (
        <div className='Sec2 container'>
            <div className="right">
                <div className="head">
                    <h3>Recent Transactions</h3>
                    <Form.Select style={{ width: 'fit-content' ,cursor:'pointer' }} onChange={(e) => setRecent(e.target.value)}>
                        {data01.map((item) => {
                            return (<option value={item.month}>{item.month}</option>)
                        })}
                    </Form.Select>
                </div>
                <div className="body">
                    {choosenMonth.map((item) => {
                        return (
                            <>
                                <div className="item">
                                    <div className="icon" style={bg()}><BsCheck /></div>
                                    <h4>Paypal Transfer</h4>
                                    <div className="num" style={item.PaypalTransfer > 0 ? { color: 'green' } : { color: 'red' }}>{`${item.PaypalTransfer} $`}</div>
                                </div>
                                <div className="item">
                                    <div className="icon" style={bg()}><BsCreditCard /></div>
                                    <h4>Wallet</h4>
                                    <div className="num" style={item.Wallet > 0 ? { color: 'green' } : { color: 'red' }}>{`${item.Wallet} $`}</div>
                                </div>
                                <div className="item">
                                    <div className="icon" style={bg()}><BsCurrencyDollar /></div>
                                    <h4>Credit Card</h4>
                                    <div className="num" style={item.CreditCard > 0 ? { color: 'green' } : { color: 'red' }}>{`${item.CreditCard} $`}</div>
                                </div>
                                <div className="item">
                                    <div className="icon" style={bg()}><BsWallet2 /></div>
                                    <h4>Bank Transfer</h4>
                                    <div className="num" style={item.BankTransfer > 0 ? { color: 'green' } : { color: 'red' }}>{`${item.BankTransfer} $`}</div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="left">
                <div className="head">
                    <h3>Revenue Updates</h3>
                </div>
                <div className="body w-100">
                    <ResponsiveContainer width='100%' height={400}>
                        <LineChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="England" stroke="#404040" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Egypt" stroke={color()} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Sec2
