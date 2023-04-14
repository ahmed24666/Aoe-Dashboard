import MainHeader from '../../Components/MainHeader/MainHeader'
import * as React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useDashboard } from '../../Context/DashboardContext';

export default function AreaCharts() {
    const {color}=useDashboard()

    const data = [
        {
            name: 'A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'C',
            uv: -1000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'D',
            uv: 500,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'E',
            uv: -2000,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'F',
            uv: -250,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.uv));
        const dataMin = Math.min(...data.map((i) => i.uv));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();
    return (
        <>
            <MainHeader first='Area' sec='Chart' />
            <ResponsiveContainer width="100%" height={500} className='container bg-white border rounded'>
                <AreaChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 30,
                    }}
                >
                    <XAxis dataKey="name" tick={{stroke: color()}}/>
                    <YAxis tick={{stroke: color()}}/>
                    <Tooltip />
                    <Legend/>
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor={color()} stopOpacity={1} />
                            <stop offset={off} stopColor="red" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}
