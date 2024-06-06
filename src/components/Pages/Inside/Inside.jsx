import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, ResponsiveContainer, Tooltip, LineChart, Line } from 'recharts';

import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { FaTimeline } from "react-icons/fa6";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const workspaceData = {
    "workspaceName": "milestone-4",
    "totaMembers": 5,
    "members": {
        "Associate Manager": 0,
        "Team Leader": 4,
        "Member": 1
    },
    "totalTimelines": 13,
    "timelines": {
        "In Progress": 0,
        "To Do": 11,
        "Testing": 1,
        "Done": 1
    },
    "totalTasks": 3,
    "tasks": {
        "In Progress": 0,
        "To Do": 3,
        "Done": 0
    }
};

const Inside = () => {
    const { user } = useContext(AuthContext);
    const {id} = useParams()
    const [stats,setStats] = useState({});
    const [timelineData, setTimelineData] = useState({});
    const [taskData, setTaskData] = useState({});
    const [chartData,setChartData] = useState([])
    const [counterOn, setCounterOn] = useState(false);

    const pieChartData = [
        { name: 'Total Members', value: stats?.totaMembers },
        { name: 'Total Timelines', value: stats?.totalTimelines },
        { name: 'Total Tasks', value: stats?.totalTasks }
      ];

    useEffect(() =>{
        fetch(`https://projectsyncifyapi.onrender.com/api/v2/workspace/insights/${id}/`)
        .then(res => res.json())
        .then(data => {
            console.log({data})
            setStats(data)
            setTimelineData(data.timelines);
            setTaskData(data.tasks)
        })
    },[])

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
      
      // Convert data to format expected by Recharts BarChart component
const taskChartData = Object.entries(taskData).map(([stage, count], index) => ({ stage, count, fill: COLORS[index] }));
const barChartData = Object.entries(timelineData).map(([stage, count], index) => ({ stage, count, fill: COLORS[index] }));

console.log({barChartData})
console.log({taskChartData})

const { members, timelines, tasks } = workspaceData;
// Combine data from members, timelines, and tasks
const combinedData = [
    { category: 'Members', count: members["Associate Manager"] + members["Team Leader"] + members["Member"] },
    { category: 'Timelines', count: timelines["In Progress"] + timelines["To Do"] + timelines["Testing"] + timelines["Done"] },
    { category: 'Tasks', count: tasks["In Progress"] + tasks["To Do"] + tasks["Done"] }
  ];

  // custom shape for the bar chart
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
const renderCustomizedLabel1 = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

  console.log({combinedData})
    return (
        <div className='m-8 '>
            <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
            <h2 className="text-3xl my-6 ">
                <span>Hi, Welcome </span>
                <span className='font-bold '>
                {
                    user?.name ? user.name : 'Back'
                }
                </span>
            </h2>
            <div className="flex mb-20 flex-col md:flex-row justify-between mx-auto gap-5 ">

                <div className="stat  rounded-md  px-6 py-5 shadow-light-shadow1 border-2 border-blue-300">
                    <div className="stat-figure text-secondary">
                    <FaUsers className='text-3xl text-blue-400'></FaUsers>
                    </div>
                    <div className="text-[#0c01a1] dark:text-[#73e9fe]">Members</div>
                    <div className="stat-value">{counterOn && (
                    <CountUp start={0} end={stats.totaMembers} duration={5} delay={0} />
                  )}+</div>
                    <div className="text-[#0c01a1] dark:text-[#73e9fe]">↗︎ 400 (22%)</div>
                </div>

                <div className="stat  rounded-md px-6 py-5  shadow-light-shadow1 border-2 border-blue-300">
                    <div className="stat-figure text-secondary ">
                        <FaTimeline className='text-3xl text-green-400'/>
                    </div>
                    <div className="text-[#0c01a1] dark:text-[#73e9fe]">Plans</div>
                    <div className="stat-value text-green-400">  {counterOn && (
                    <CountUp start={1} end={stats.totalTimelines} duration={5} delay={0} />
                  )} + </div>
                    <div className="text-[#0c01a1] dark:text-[#73e9fe]">↗︎ 400 (22%)</div>
                </div>


                <div className="stat  rounded-md  px-6 py-5 shadow-light-shadow1 border-2 border-blue-300">
                    <div className="stat-figure text-secondary">
                        <FaBook className='text-3xl text-yellow-400'></FaBook>
                    </div>
                    <div className="text-[#0c01a1] dark:text-[#73e9fe]">Tasks</div>
                    <div className="stat-value text-yellow-400">  {counterOn && (
                    <CountUp start={2} end={stats.totalTasks} duration={5} delay={0} />
                  )} +</div>
                    <div className="text-[#0c01a1] dark:text-[#73e9fe]">↗︎ 400 (22%)</div>
                </div>

            </div>

            <div className='flex flex-col md:flex-row mb-20'>
             
             {/** all total using pichart */}
            <div style={{width:'100%', height: 400}}>
                <ResponsiveContainer>
                <PieChart>
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
                </ResponsiveContainer>
                
            </div>
             
             {/** timeline data using custom chart */}
            <div style={{ width: '100%', height: 400 }} >
                 <ResponsiveContainer>
                    <BarChart
                        data={barChartData}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="stage" />
                        <YAxis />
                        <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {barChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                    <h1 className='text-center text-2xl my-2'>Tasks Chart</h1>
                    </ResponsiveContainer>
            </div>

            {/* <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stage" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8">
            {barChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
        <h1 className='text-center'>Timeline</h1>
      </ResponsiveContainer>
            </div> */}

            


{/* <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          {combinedData.map((data, index) => (
            <Bar key={index} dataKey="count" name={data.category} fill={COLORS[index]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div> */}

{/* <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stage" />
          <YAxis />
          <Tooltip />
          {lineChartData.map((entry, index) => (
            <Line key={`line-${index}`} type="monotone" dataKey="count" stroke={COLORS[index]} />
          ))}
        </LineChart>
        <h1 className='text-center'>Tasks</h1>
      </ResponsiveContainer>
    </div> */}


            
        </div>
            <div>
            <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={taskChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stage" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8">
            {taskChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
        <h1 className='text-center text-2xl my-2'>Timeline Chart</h1>
      </ResponsiveContainer>
            </div> 
            </div>
            </ScrollTrigger>
        </div>
    );
};

export default Inside;