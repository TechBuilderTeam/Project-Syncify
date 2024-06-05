import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { FaTimeline } from "react-icons/fa6";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Inside = () => {
    const { user } = useContext(AuthContext);
    const {id} = useParams()
    const [stats,setStats] = useState({});
    const [chartData,setChartData] = useState([])



    useEffect(() =>{
        fetch(`https://projectsyncifyapi.onrender.com/api/v2/workspace/insights/${id}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStats(data)
        })
    },[])

    useEffect(() =>{

        fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/order-stats')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setChartData(data)
        })
    },[])

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.revenue}
    })


    return (
        <div className='m-8'>
            <h2 className="text-3xl my-6">
                <span>Hi, Welcome </span>
                <span className='font-bold '>
                {
                    user?.name ? user.name : 'Back'
                }
                </span>
            </h2>
            <div className="flex justify-between mx-auto gap-5 ">

                <div className="stat border-2 border-blue-300">
                    <div className="stat-figure text-secondary">
                    <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="stat-title">Members</div>
                    <div className="stat-value">{stats.totaMembers} +</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat border-2 border-blue-300">
                    <div className="stat-figure text-secondary">
                        <FaTimeline className='text-3xl'/>
                    </div>
                    <div className="stat-title">Plans</div>
                    <div className="stat-value">{stats.totalTimelines} + </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>


                <div className="stat border-2 border-blue-300">
                    <div className="stat-figure text-secondary">
                        <FaBook className='text-3xl'></FaBook>
                    </div>
                    <div className="stat-title">Tasks</div>
                    <div className="stat-value">{stats.totalTasks} +</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>

            <div className='flex flex-col md:flex-row mt-6'>
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Bar dataKey="quantity" fill="#8884d8" label={{ position: 'top' }}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
            <div>
                <PieChart width={500} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </div>
        </div>
            
        </div>
    );
};

export default Inside;