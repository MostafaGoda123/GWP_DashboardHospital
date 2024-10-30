import React from 'react'
import { Bar, BarChart, Rectangle, ResponsiveContainer } from 'recharts';
import { FaDownLong, FaUpLong } from 'react-icons/fa6';

const DashboardFirst = () => {

   const productSales = [
      {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
      },
      {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
      },
      {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
      },
      {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
      },
      {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
      },
      {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
      },
      {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
      }
   ];
   let allDashboardFirstData = [
      { name:'CampaignSets' , number:'8,321' , percent:'38.5' , up:true },
      { name:'Sales' , number:'80.5%' , percent:'32' , up:true },
      { name:'Revenue' , number:'-10%' , percent:'28' , up:false },
   ]

   return (
      <>
      {allDashboardFirstData.map((item,index) => (
         <div key={189+index} className='rounded-xl bg-white p-3 shadow-lg h-32 flex items-center gap-2'>
            <div className="flex flex-col gap-2 text-md md:text-lg font-semibold">
               <p>{item.name}</p>
               <p className='font-bold text-lg md:text-xl'>{item.number}</p>
               <p className={`flex gap-1 items-center ${item.up?'text-green-500':"text-red-500"}`}>{item.up ? <FaUpLong /> : <FaDownLong />}{item.percent}%</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
               <BarChart
                  width={500}
                  height={300}
                  data={productSales}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
               <Bar dataKey="pv" fill="#3B82F6" activeBar={<Rectangle fill="#1D4ED8" stroke="black" />} />
               <Bar dataKey="uv" fill="#22C55E" activeBar={<Rectangle fill="#15803D" stroke="black" />} />
               </BarChart>
            </ResponsiveContainer>
         </div>
         ))}
      </>
   )
}

export default DashboardFirst
